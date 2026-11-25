/** PT-ESTUDO — Google Drive manual (GIS / drive.file), separado do ADM-ESTUDO.
 * Token somente em memória. Não mescla dispositivos; confirma e verifica cada gravação.
 */
import { DRIVE_OAUTH_CONFIG } from '../config/google-drive-oauth.js';
import { STORAGE_KEY } from './storage.js';
import { inspectStoredProgress } from './storage-safety.js';
import { BACKUP_FORMAT, BACKUP_MAX_BYTES, validateProgressBackup } from './progress-backup-validator.js';
import { prepareProgressRestore, restoreProgressBackup } from './progress-restore.js';
const SCOPE='https://www.googleapis.com/auth/drive.file';
const API='https://www.googleapis.com/drive/v3/files';
const UPLOAD='https://www.googleapis.com/upload/drive/v3/files';
const FOLDER_MIME='application/vnd.google-apps.folder';
const FILE_MIME='application/json';
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const configured=()=>/^\d+-[a-z0-9_-]+\.apps\.googleusercontent\.com$/i.test(DRIVE_OAUTH_CONFIG.clientId);
const dateText=x=>typeof x==='string'&&Number.isFinite(Date.parse(x))?new Date(x).toLocaleString('pt-BR'):'não disponível';
let token=null,expiresAt=0,gisLoading=null,operationBusy=false;
const authorized=()=>!!token&&Date.now()<expiresAt-30000;

export function buildDriveBackup(rawState,now=new Date()) {
  if(typeof rawState!=='string')throw Error('Não existe progresso local para copiar.');
  let state;try{state=JSON.parse(rawState);}catch{throw Error('Progresso local não é JSON válido.');}
  const payload={format:BACKUP_FORMAT,backupVersion:1,createdAt:now.toISOString(),storageKey:STORAGE_KEY,schemaVersion:state.schemaVersion,state};
  const validation=validateProgressBackup(payload);
  if(!validation.valid)throw Error('Backup local incompatível: '+validation.errors.join(' '));
  const serialized=JSON.stringify(payload,null,2);
  if(new TextEncoder().encode(serialized).byteLength>BACKUP_MAX_BYTES)throw Error('Backup excede 20 MB.');
  return {payload,serialized,validation};
}
export function samePedagogicalProgress(a,b){
  return a?.format===BACKUP_FORMAT&&b?.format===BACKUP_FORMAT&&
    a?.storageKey===STORAGE_KEY&&b?.storageKey===STORAGE_KEY&&
    !!a?.state?.progress&&!!b?.state?.progress&&
    JSON.stringify(a.state.progress)===JSON.stringify(b.state.progress)&&
    JSON.stringify(a.state.preferences||{})===JSON.stringify(b.state.preferences||{});
}
function readLocalBackup(){
  const checked=inspectStoredProgress();
  if(!checked.ok)throw Error('Progresso local protegido: '+checked.message);
  const raw=window.localStorage.getItem(STORAGE_KEY);
  if(raw===null)throw Error('Não há progresso salvo neste dispositivo.');
  return {raw,...buildDriveBackup(raw)};
}
function readableError(error){
  const message=String(error?.message||error||'Erro não identificado.');
  if(/401|invalid.credentials|invalid_token/i.test(message))return 'Autorização Google expirada. Conecte novamente.';
  if(/403|access_denied|insufficientpermissions/i.test(message))return 'Acesso negado pelo Google. Confira autorização, origens OAuth e permissões. '+message;
  return message;
}
function loadGIS(){
  if(typeof window.google?.accounts?.oauth2?.initTokenClient==='function')return Promise.resolve();
  if(gisLoading)return gisLoading;
  gisLoading=new Promise((resolve,reject)=>{
    const script=document.createElement('script');script.src='https://accounts.google.com/gsi/client';script.async=true;
    script.onload=()=>window.google?.accounts?.oauth2?.initTokenClient?resolve():reject(Error('Login Google indisponível.'));
    script.onerror=()=>reject(Error('Não foi possível carregar o login Google.'));
    document.head.appendChild(script);
  }).catch(e=>{gisLoading=null;throw e;});return gisLoading;
}
async function call(url,{method='GET',body,headers={},format='json'}={}){
  if(!authorized())throw Error('Sessão Google expirada. Conecte novamente.');
  let response;try{response=await fetch(url,{method,body,headers:{Authorization:`Bearer ${token}`,...headers},cache:'no-store'});}
  catch{throw Error('Falha de conexão com Drive; nada foi alterado localmente.');}
  if(!response.ok){let detail='';try{detail=(await response.json()).error?.message||'';}catch{}throw Error(`Google Drive HTTP ${response.status}: ${detail}`);}
  return format==='text'?response.text():response.json();
}
async function findNamed(name,parent=null,mime=null){
  const quote=s=>String(s).replace(/\\/g,'\\\\').replace(/'/g,"\\'");
  const clauses=[`name = '${quote(name)}'`,'trashed = false'];
  if(parent)clauses.push(`'${quote(parent)}' in parents`);
  if(mime)clauses.push(`mimeType = '${quote(mime)}'`);
  const params=new URLSearchParams({q:clauses.join(' and '),fields:'nextPageToken,files(id,name,mimeType,parents,version,modifiedTime,size)',pageSize:'100',spaces:'drive'});
  const data=await call(API+'?'+params);
  if(data.nextPageToken||(data.files||[]).length>1)throw Error('Há múltiplos itens com o mesmo nome no Google Drive; operação bloqueada.');
  return data.files?.[0]||null;
}
async function findFolder(create=false){
  let folder=await findNamed(DRIVE_OAUTH_CONFIG.folderName,null,FOLDER_MIME);
  if(!folder&&create)folder=await call(API+'?fields=id,name,mimeType',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:DRIVE_OAUTH_CONFIG.folderName,mimeType:FOLDER_MIME})});
  return folder;
}
async function locate(){const folder=await findFolder(false);return {folder,file:folder?await findNamed(DRIVE_OAUTH_CONFIG.fileName,folder.id,FILE_MIME):null};}
async function remoteText(file){
  if(!file?.id)throw Error('Arquivo remoto não identificado.');
  if(file.size!==undefined&&Number(file.size)>BACKUP_MAX_BYTES)throw Error('Backup remoto maior que 20 MB.');
  const text=await call(`${API}/${encodeURIComponent(file.id)}?alt=media`,{format:'text'});
  if(new TextEncoder().encode(text).byteLength>BACKUP_MAX_BYTES)throw Error('Backup remoto maior que 20 MB.');
  return text;
}
function parseRemote(raw){
  let payload;try{payload=JSON.parse(raw);}catch{throw Error('Backup remoto contém JSON inválido.');}
  const checked=validateProgressBackup(payload);
  if(!checked.valid)throw Error('Backup remoto pertence a outro aplicativo ou é incompatível: '+checked.errors.join(' '));
  return {payload,summary:checked.summary};
}
async function createRemote(folderId,serialized){
  const boundary=`ptEstudo${Date.now()}${Math.random().toString(16).slice(2)}`;
  const meta={name:DRIVE_OAUTH_CONFIG.fileName,mimeType:FILE_MIME,parents:[folderId],description:'Backup manual PT-ESTUDO — Português e Redação Oficial'};
  const body=new Blob([`--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(meta)}\r\n`,
    `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n`,serialized,`\r\n--${boundary}--`]);
  return call(UPLOAD+'?uploadType=multipart&fields=id,name,version,modifiedTime',{method:'POST',headers:{'Content-Type':`multipart/related; boundary=${boundary}`},body});
}
const metadata=id=>call(`${API}/${encodeURIComponent(id)}?fields=id,name,version,modifiedTime,size,parents`);
async function archiveRemote(id){
  const name=`PT-ESTUDO-progresso-anterior-${new Date().toISOString().replace(/[:.]/g,'-')}.json`;
  return call(`${API}/${encodeURIComponent(id)}/copy?fields=id,name`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name})});
}
async function saveOnDrive(ask,show){
  const local=readLocalBackup();const {folder,file}=await locate();
  if(!file){
    if(!ask('Criar o primeiro backup do PT-ESTUDO no Google Drive?'))return 'Envio cancelado.';
    if(window.localStorage.getItem(STORAGE_KEY)!==local.raw)throw Error('Progresso local alterado durante o envio.');
    const destination=folder||await findFolder(true);
    const created=await createRemote(destination.id,local.serialized);
    const remote=parseRemote(await remoteText(created));
    if(!samePedagogicalProgress(remote.payload,local.payload))throw Error('Backup criado, mas conferência falhou. Não envie outra cópia sem verificar.');
    return `Primeiro backup salvo: ${DRIVE_OAUTH_CONFIG.folderName}/${DRIVE_OAUTH_CONFIG.fileName}.`;
  }
  const old=parseRemote(await remoteText(file));
  if(samePedagogicalProgress(local.payload,old.payload))return 'O progresso pedagógico já está salvo no Drive. Nenhuma gravação necessária.';
  show('Comparando versões do progresso local e remoto…');
  if(!ask(`Substituir backup do PT-ESTUDO no Drive (${dateText(file.modifiedTime)}) pelo deste aparelho? Será feita uma cópia remota anterior. Não haverá mesclagem.`))return 'Envio cancelado.';
  if(!ask('CONFIRMAÇÃO FINAL: arquivar o backup anterior e substituir pelo progresso atual?'))return 'Envio cancelado.';
  if(window.localStorage.getItem(STORAGE_KEY)!==local.raw)throw Error('Progresso local alterado. Operação cancelada.');
  const before=await metadata(file.id);
  if(String(before.version)!==String(file.version))throw Error('Arquivo remoto modificado por outro dispositivo.');
  await archiveRemote(file.id);
  const latest=await metadata(file.id);
  if(String(latest.version)!==String(file.version)||window.localStorage.getItem(STORAGE_KEY)!==local.raw)throw Error('Alteração concorrente detectada. Arquivo principal preservado.');
  await call(`${UPLOAD}/${encodeURIComponent(file.id)}?uploadType=media&fields=id,name,version,modifiedTime`,{method:'PATCH',headers:{'Content-Type':'application/json'},body:local.serialized});
  const verified=parseRemote(await remoteText(file));
  if(!samePedagogicalProgress(verified.payload,local.payload))throw Error('Atualização realizada mas conteúdo não confere; preserve os backups.');
  return 'Backup PT-ESTUDO atualizado e verificado. A versão anterior foi arquivada.';
}
async function restoreFromDrive(ask){
  const {file}=await locate();if(!file)throw Error('Nenhum backup PT-ESTUDO encontrado no Drive.');
  const raw=await remoteText(file);const checked=parseRemote(raw);
  const local=inspectStoredProgress();if(!local.ok)throw Error('Restauração bloqueada: '+local.message);
  const before=window.localStorage.getItem(STORAGE_KEY);
  const prepared=await prepareProgressRestore(new File([raw],DRIVE_OAUTH_CONFIG.fileName,{type:FILE_MIME}));
  if(!prepared.ok)throw Error('Restauração bloqueada: '+prepared.message);
  const summary=checked.summary;
  if(!ask(`Restaurar backup PT-ESTUDO de ${dateText(file.modifiedTime)}? ${summary.modules} módulos; ${summary.lessons} aulas; ${summary.errors} erros. O progresso local será substituído, não mesclado.`))return 'Restauração cancelada.';
  if(!ask('CONFIRMAÇÃO FINAL: a restauração solicitará download do estado anterior. Continuar?'))return 'Restauração cancelada.';
  if(window.localStorage.getItem(STORAGE_KEY)!==before)throw Error('Progresso local alterado; restauração cancelada.');
  const result=restoreProgressBackup(prepared,true);if(!result.ok)throw Error(result.message);
  window.alert(result.message+'\nConfira a cópia anterior após o recarregamento.');window.location.reload();
  return result.message;
}
export function renderDriveBackupPanel(){
  const ready=configured();
  return `<section class="settings-card drive-settings" id="settings-drive-direct" style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:18px;margin:12px 0;min-width:0">
  <h2 style="font-size:17px;margin:0 0 8px">☁️ Google Drive — Salvar e restaurar diretamente</h2>
  <p style="font-size:14px">Conecte sua conta e escolha quando enviar ou recuperar seu progresso. Não há sincronização automática.</p>
  <p style="font-size:13px;color:var(--text-muted)">Pasta: <strong>${esc(DRIVE_OAUTH_CONFIG.folderName)}</strong> · Arquivo: <strong>${esc(DRIVE_OAUTH_CONFIG.fileName)}</strong>. A autorização usa o escopo drive.file.</p>
  ${!ready?'<div class="notice">Informe o Client ID OAuth público em js/config/google-drive-oauth.js.</div>':''}
  <div style="display:flex;flex-wrap:wrap;gap:9px;margin:14px 0">
  <button type="button" class="btn btn-primary" data-drive-connect="1" disabled>Conectar conta Google</button>
  <button type="button" class="btn" data-drive-save="1" disabled>Salvar no Google Drive</button>
  <button type="button" class="btn" data-drive-restore="1" disabled>Restaurar do Google Drive</button>
  <button type="button" class="btn" data-drive-disconnect="1" disabled>Desconectar</button></div>
  <div id="drive-backup-status" role="status" aria-live="polite" style="font-size:13px;line-height:1.6;padding:11px 13px;background:var(--surface-alt);border:1px solid var(--border);border-radius:10px;overflow-wrap:anywhere">${ready?'Preparando login Google…':'Configuração OAuth pendente.'}</div>
  <p class="page-subtitle">Antes de restaurar, preserve o progresso deste aparelho. O Drive não mescla dados entre dispositivos.</p></section>`;
}
export function installDriveBackupUI(root){
  const panel=root.querySelector('#settings-drive-direct');if(!panel)return;
  const connect=panel.querySelector('[data-drive-connect]'),save=panel.querySelector('[data-drive-save]');
  const restore=panel.querySelector('[data-drive-restore]'),disconnect=panel.querySelector('[data-drive-disconnect]');
  const status=panel.querySelector('#drive-backup-status'),show=message=>{status.textContent=message;};
  const update=()=>{
    connect.disabled=operationBusy||!configured()||authorized()||!window.google?.accounts?.oauth2?.initTokenClient;
    save.disabled=operationBusy||!authorized();restore.disabled=operationBusy||!authorized();disconnect.disabled=operationBusy||!token;
  };
  const run=async(task,title)=>{
    if(operationBusy)return;operationBusy=true;update();show(title);
    try{show(await task());}catch(e){show('Operação não concluída: '+readableError(e));}
    finally{operationBusy=false;update();}
  };
  update();
  if(configured())loadGIS().then(()=>{if(!panel.isConnected)return;show(authorized()?'Conta autorizada.':'Pronto para conectar sua conta Google.');update();}).catch(e=>show(readableError(e)));
  connect.addEventListener('click',()=>{
    if(operationBusy||!configured()||!window.google?.accounts?.oauth2?.initTokenClient)return;
    operationBusy=true;update();show('Abra a janela Google e autorize o acesso a arquivos do aplicativo.');
    try{
      window.google.accounts.oauth2.initTokenClient({client_id:DRIVE_OAUTH_CONFIG.clientId,scope:SCOPE,
        callback:response=>{if(response?.access_token&&!response.error){token=response.access_token;expiresAt=Date.now()+Math.max(60,Number(response.expires_in)||3600)*1000;show('Conta autorizada. Utilize os botões para salvar ou restaurar.');}
          else show('Autorização não concluída: '+(response?.error||'consentimento negado'));operationBusy=false;update();},
        error_callback:response=>{operationBusy=false;show('Falha no login Google: '+(response?.type||'erro'));update();}
      }).requestAccessToken({prompt:'select_account'});
    }catch(e){operationBusy=false;show(readableError(e));update();}
  });
  save.addEventListener('click',()=>run(()=>saveOnDrive(window.confirm.bind(window),show),'Validando progresso local…'));
  restore.addEventListener('click',()=>run(()=>restoreFromDrive(window.confirm.bind(window)),'Consultando backup PT-ESTUDO…'));
  disconnect.addEventListener('click',()=>{if(operationBusy)return;
    if(token&&window.google?.accounts?.oauth2?.revoke)try{window.google.accounts.oauth2.revoke(token,()=>{});}catch{}
    token=null;expiresAt=0;show('Conta desconectada. Progresso e backups preservados.');update();});
}
