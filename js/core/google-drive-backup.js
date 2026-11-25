/**
 * ADM-ESTUDO — Fase 22-A / Lote 8
 * Backup e restauração MANUAIS pelo Google Drive (GIS + Drive API v3).
 * - OAuth drive.file: somente arquivos criados ou abertos por este aplicativo.
 * - Token exclusivamente em memória; não grava tokens no localStorage.
 * - Um JSON integral por aplicativo, em pasta visível ao usuário.
 * - Atualização protegida por confirmação, cópia remota anterior e conferência
 *   da versão antes de alterar. Não mescla progresso de dispositivos diferentes.
 * - Restauração utiliza o mecanismo original de validação e recuperação local.
 */
import { DRIVE_OAUTH_CONFIG } from '../config/google-drive-oauth.js';
import { STORAGE_KEY } from './storage.js';
import { inspectStoredProgress } from './storage-safety.js';
import { validateProgressBackup, BACKUP_MAX_BYTES } from './progress-backup-validator.js';
import { prepareProgressRestore, restoreProgressBackup } from './progress-restore.js';

const SCOPE = 'https://www.googleapis.com/auth/drive.file';
const API = 'https://www.googleapis.com/drive/v3/files';
const UPLOAD = 'https://www.googleapis.com/upload/drive/v3/files';
const FOLDER_MIME = 'application/vnd.google-apps.folder';
const FILE_MIME = 'application/json';
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const configured = () => /^\d+-[a-z0-9_-]+\.apps\.googleusercontent\.com$/i.test(DRIVE_OAUTH_CONFIG.clientId);
const goodDate = v => typeof v === 'string' && Number.isFinite(Date.parse(v));
const dateText = v => goodDate(v) ? new Date(v).toLocaleString('pt-BR') : 'não disponível';
let gisLoading = null;
let token = null;
let expiresAt = 0;
let operationBusy = false;

export function buildDriveBackup(rawState, now = new Date()) {
  if (typeof rawState !== 'string') throw new Error('Não existe estado local para copiar.');
  let state;
  try { state = JSON.parse(rawState); } catch (_) { throw new Error('O progresso local não é um JSON válido.'); }
  const payload = {
    format: 'adm-estudo-progress-backup', backupVersion: 1,
    createdAt: now.toISOString(), storageKey: STORAGE_KEY,
    schemaVersion: state.schemaVersion, state
  };
  const validation = validateProgressBackup(payload);
  if (!validation.valid) throw new Error('Backup local incompatível: ' + validation.errors.join(' '));
  const serialized = JSON.stringify(payload, null, 2);
  if (new TextEncoder().encode(serialized).byteLength > BACKUP_MAX_BYTES) {
    throw new Error('Backup excede 20 MB. Use a exportação local e revise o tamanho dos dados.');
  }
  return {payload, serialized, validation};
}

export function samePedagogicalProgress(a, b) {
  return !!a?.state?.progress && !!b?.state?.progress &&
    JSON.stringify(a.state.progress) === JSON.stringify(b.state.progress) &&
    JSON.stringify(a.state.preferences || {}) === JSON.stringify(b.state.preferences || {});
}

function readLocalBackup() {
  const checked = inspectStoredProgress();
  if (!checked.ok) throw new Error('Progresso local protegido: ' + checked.message);
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw === null) throw new Error('Não há progresso salvo neste dispositivo. Estude ou salve uma atividade antes de enviar.');
  return {raw, ...buildDriveBackup(raw)};
}

function readableGoogleError(e) {
  const message = String(e?.message || e || 'Falha não identificada.');
  if (/401|invalid.credentials|invalid_token/i.test(message)) return 'A autorização Google expirou. Desconecte e conecte novamente.';
  if (/403|access_denied|insufficientpermissions/i.test(message)) return 'Acesso negado ao Google Drive. Confira permissões, teste OAuth e cotas da API. ' + message;
  return message;
}

function loadGIS() {
  if (typeof window.google?.accounts?.oauth2?.initTokenClient === 'function') return Promise.resolve();
  if (gisLoading) return gisLoading;
  gisLoading = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.onload = () => window.google?.accounts?.oauth2?.initTokenClient ? resolve() : reject(new Error('Biblioteca de login Google indisponível.'));
    script.onerror = () => reject(new Error('Não foi possível carregar o login Google. Verifique a internet ou o bloqueador de conteúdo.'));
    document.head.appendChild(script);
  }).catch(e => {gisLoading = null; throw e;});
  return gisLoading;
}

function isAuthorized() { return !!token && Date.now() < expiresAt - 30000; }

async function driveCall(url, {method = 'GET', body, headers = {}, format = 'json'} = {}) {
  if (!isAuthorized()) throw new Error('A sessão Google expirou. Conecte a conta novamente.');
  let response;
  try {
    response = await fetch(url, {
      method, headers: { Authorization: `Bearer ${token}`, ...headers }, body,
      cache: 'no-store'
    });
  } catch (_) { throw new Error('Falha de conexão com a API Drive. Nenhum progresso local foi alterado.'); }
  if (!response.ok) {
    let detail = '';
    try { const j = await response.json(); detail = j.error?.message || ''; } catch (_) { /* sem JSON */ }
    throw new Error(`Google Drive retornou HTTP ${response.status}${detail ? ': ' + detail : ''}.`);
  }
  return format === 'text' ? response.text() : response.json();
}

async function listByName(name, parent = null, mimeType = null) {
  const quote = v => String(v).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const clauses = [`name = '${quote(name)}'`, 'trashed = false'];
  if (parent) clauses.push(`'${quote(parent)}' in parents`);
  if (mimeType) clauses.push(`mimeType = '${quote(mimeType)}'`);
  const params = new URLSearchParams({
    q: clauses.join(' and '), fields: 'nextPageToken,files(id,name,mimeType,parents,version,modifiedTime,size)',
    pageSize: '100', spaces: 'drive'
  });
  const result = await driveCall(API + '?' + params.toString());
  if (result.nextPageToken || (result.files || []).length > 1) {
    throw new Error(`Há mais de um item com o nome "${name}". Para não escolher o arquivo errado, organize duplicatas no Drive.`);
  }
  return result.files?.[0] || null;
}

async function findFolder(createIfMissing) {
  let folder = await listByName(DRIVE_OAUTH_CONFIG.folderName, null, FOLDER_MIME);
  if (!folder && createIfMissing) {
    folder = await driveCall(API + '?fields=id,name,mimeType', {
      method: 'POST', headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name: DRIVE_OAUTH_CONFIG.folderName, mimeType: FOLDER_MIME})
    });
  }
  return folder;
}

async function locateBackup(createFolder) {
  const folder = await findFolder(createFolder);
  if (!folder) return {folder:null,file:null};
  const file = await listByName(DRIVE_OAUTH_CONFIG.fileName, folder.id, FILE_MIME);
  return {folder, file};
}

async function getRemoteText(file) {
  if (!file?.id) throw new Error('Arquivo remoto não localizado.');
  if (file.size !== undefined && Number(file.size) > BACKUP_MAX_BYTES) throw new Error('O backup remoto excede o limite de segurança de 20 MB.');
  const text = await driveCall(`${API}/${encodeURIComponent(file.id)}?alt=media`, {format:'text'});
  if (new TextEncoder().encode(text).byteLength > BACKUP_MAX_BYTES) throw new Error('Backup remoto ultrapassa 20 MB.');
  return text;
}

function parseRemote(raw) {
  let parsed;
  try { parsed = JSON.parse(raw); } catch (_) { throw new Error('O JSON no Google Drive está inválido. Nada será sobrescrito.'); }
  const checked = validateProgressBackup(parsed);
  if (!checked.valid) throw new Error('Backup remoto incompatível: ' + checked.errors.join(' '));
  return {payload:parsed, summary:checked.summary};
}

async function multipartCreate(parentId, serialized) {
  const boundary = `admEstudo${Date.now()}${Math.random().toString(16).slice(2)}`;
  const meta = {
    name: DRIVE_OAUTH_CONFIG.fileName, mimeType: FILE_MIME,
    parents: [parentId], description: 'Cópia manual do progresso do ADM-ESTUDO'
  };
  const bytes = new Blob([
    `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(meta)}\r\n`,
    `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n`,
    serialized,
    `\r\n--${boundary}--`
  ]);
  return driveCall(UPLOAD + '?uploadType=multipart&fields=id,name,version,modifiedTime', {
    method: 'POST', headers: {'Content-Type': `multipart/related; boundary=${boundary}`}, body: bytes
  });
}

async function fileMetadata(id) {
  return driveCall(`${API}/${encodeURIComponent(id)}?fields=id,name,version,modifiedTime,size,parents`);
}

async function archiveOldFile(id) {
  const suffix = new Date().toISOString().replace(/[:.]/g, '-');
  const name = `ADM-ESTUDO-progresso-anterior-${suffix}.json`;
  // A API Drive mantém a cópia na pasta de origem por padrão.
  return driveCall(`${API}/${encodeURIComponent(id)}/copy?fields=id,name`, {
    method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({name})
  });
}

async function saveOnDrive(ask, show) {
  const local = readLocalBackup();
  const {folder,file} = await locateBackup(false);
  if (!file) {
    if (!ask('Criar o primeiro backup do ADM-ESTUDO no Google Drive? O progresso local não será alterado.')) return 'Envio cancelado.';
    if (window.localStorage.getItem(STORAGE_KEY) !== local.raw) throw new Error('O progresso local mudou durante o envio. Repita a operação.');
    const destination = folder || await findFolder(true);
    const created = await multipartCreate(destination.id, local.serialized);
    const confirmed = parseRemote(await getRemoteText(created));
    if (!samePedagogicalProgress(confirmed.payload, local.payload)) throw new Error('Arquivo criado, porém a conferência do conteúdo falhou. Não envie outra cópia sem verificar o Drive.');
    return `Primeiro backup salvo em ${DRIVE_OAUTH_CONFIG.folderName}/${DRIVE_OAUTH_CONFIG.fileName}.`;
  }
  const beforeText = await getRemoteText(file);
  const remote = parseRemote(beforeText);
  if (samePedagogicalProgress(local.payload, remote.payload)) return 'O progresso pedagógico já está salvo no Google Drive. Nenhuma gravação foi necessária.';
  show(`Backup remoto encontrado (${dateText(file.modifiedTime)}). Comparando com o progresso local…`);
  const info = `O arquivo do Drive será SUBSTITUÍDO pelo progresso local.\n\n` +
    `Drive: backup criado em ${dateText(remote.payload.createdAt)}; ${remote.summary?.modules ?? '?'} módulos com atividade.\n` +
    `Local: backup gerado em ${dateText(local.payload.createdAt)}; ${local.validation.summary?.modules ?? '?'} módulos com atividade.\n\n` +
    'O aplicativo NÃO mistura estudos feitos em aparelhos diferentes. Será criada uma cópia do backup remoto anterior antes da substituição.';
  if (!ask(info + '\n\nDeseja prosseguir?')) return 'Envio cancelado. O backup remoto foi preservado.';
  if (!ask('CONFIRMAÇÃO FINAL: criar uma cópia do arquivo remoto anterior e substituí-lo pelo progresso deste aparelho?')) return 'Envio cancelado.';
  if (window.localStorage.getItem(STORAGE_KEY) !== local.raw) throw new Error('O progresso local mudou antes de salvar. O backup remoto foi mantido.');
  // Releitura impede a sobrescrita de uma alteração remota que ocorreu desde a consulta.
  const current = await fileMetadata(file.id);
  if (String(current.version) !== String(file.version)) throw new Error('O backup remoto mudou durante a operação. Nenhum arquivo foi sobrescrito.');
  await archiveOldFile(file.id);
  const latest = await fileMetadata(file.id);
  if (String(latest.version) !== String(file.version) || window.localStorage.getItem(STORAGE_KEY) !== local.raw) {
    throw new Error('Foi detectada uma alteração durante a operação. Uma cópia remota pode ter sido criada, mas o backup principal não foi sobrescrito.');
  }
  await driveCall(`${UPLOAD}/${encodeURIComponent(file.id)}?uploadType=media&fields=id,name,version,modifiedTime`, {
    method: 'PATCH', headers: {'Content-Type': 'application/json'}, body: local.serialized
  });
  const verified = parseRemote(await getRemoteText(file));
  if (!samePedagogicalProgress(verified.payload, local.payload)) {
    throw new Error('O envio terminou, mas a conferência do arquivo remoto não corresponde ao progresso. Preserve os backups e verifique o Drive.');
  }
  return 'Backup atualizado e verificado. A versão anterior foi preservada como outro arquivo na pasta ADM-ESTUDO.';
}

async function restoreFromDrive(ask) {
  const {file} = await locateBackup(false);
  if (!file) throw new Error('Nenhum arquivo de progresso criado pelo aplicativo foi encontrado neste Google Drive.');
  const raw = await getRemoteText(file);
  const valid = parseRemote(raw);
  const remoteInfo = valid.summary;
  const localCheck = inspectStoredProgress();
  if (!localCheck.ok) throw new Error('Restauração bloqueada: ' + localCheck.message);
  const currentRaw = window.localStorage.getItem(STORAGE_KEY);
  // Usa a validação e o guardião de conflitos do fluxo de restauração já instalado.
  const inMemoryFile = new File([raw], DRIVE_OAUTH_CONFIG.fileName, {type:FILE_MIME});
  const prepared = await prepareProgressRestore(inMemoryFile);
  if (!prepared.ok) throw new Error('Restauração bloqueada: ' + prepared.message);
  if (!ask(`Restaurar o backup do Drive de ${dateText(file.modifiedTime)}?\n\n` +
    `${remoteInfo.modules} módulos com atividade; ${remoteInfo.lessons} aulas; ${remoteInfo.errors} erros; ${remoteInfo.simulations} simulados.\n\n`+
    'Isso SUBSTITUIRÁ o progresso atual deste navegador. Não combina atividades de aparelhos diferentes. Deseja continuar?')) return 'Restauração cancelada. Nenhum dado foi alterado.';
  if (!ask('CONFIRMAÇÃO FINAL: o navegador solicitará o download de uma cópia do progresso anterior, antes da substituição. Você confirma?')) return 'Restauração cancelada.';
  if (window.localStorage.getItem(STORAGE_KEY) !== currentRaw) throw new Error('O progresso deste aparelho mudou durante a operação. Restauração cancelada.');
  const result = restoreProgressBackup(prepared, true);
  if (!result.ok) throw new Error(result.message);
  window.alert(result.message + '\n\nConfira a cópia de recuperação e o progresso após o recarregamento.');
  window.location.reload();
  return result.message;
}

export function renderDriveBackupPanel() {
  const ready = configured();
  return `<section class="settings-card drive-settings" id="settings-drive-direct" style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:18px;margin:12px 0;min-width:0">
    <h2 style="font-size:17px;margin:0 0 8px">☁️ Google Drive — Salvar e restaurar diretamente</h2>
    <p style="font-size:14px">Conecte sua conta e escolha quando enviar ou recuperar seu progresso. Não existe sincronização automática; o aplicativo não faz gravações por questão ou flashcard.</p>
    <p style="font-size:13px;color:var(--text-muted)">Pasta: <strong>${esc(DRIVE_OAUTH_CONFIG.folderName)}</strong> · Arquivo: <strong>${esc(DRIVE_OAUTH_CONFIG.fileName)}</strong>. A autorização permite acesso somente aos arquivos deste aplicativo.</p>
    ${!ready?'<div class="notice" role="note">Configuração pendente: informe o Client ID OAuth no arquivo <code>js/config/google-drive-oauth.js</code>. Não coloque o Client Secret no GitHub.</div>':''}
    <div style="display:flex;flex-wrap:wrap;gap:9px;margin:14px 0">
      <button type="button" class="btn btn-primary" data-drive-connect="1" ${ready?'disabled':''}>Conectar conta Google</button>
      <button type="button" class="btn" data-drive-save="1" disabled>Salvar no Google Drive</button>
      <button type="button" class="btn" data-drive-restore="1" disabled>Restaurar do Google Drive</button>
      <button type="button" class="btn" data-drive-disconnect="1" disabled>Desconectar</button>
    </div>
    <div id="drive-backup-status" role="status" aria-live="polite" style="font-size:13px;line-height:1.6;padding:11px 13px;background:var(--surface-alt);border:1px solid var(--border);border-radius:10px;overflow-wrap:anywhere">${ready?'Preparando a autorização Google…':'É necessário configurar o projeto Google Cloud antes de conectar.'}</div>
    <p class="page-subtitle" style="margin:10px 0 0">Antes de restaurar, preserve o progresso deste aparelho. O método usa as verificações e cópias de recuperação já existentes. O Drive mantém backups separados para cada conta autorizada.</p>
  </section>`;
}

/** Os eventos são vinculados ao elemento da página; não há handlers duplicados. */
export function installDriveBackupUI(root) {
  const panel = root.querySelector('#settings-drive-direct');
  if (!panel) return;
  const connect = panel.querySelector('[data-drive-connect]');
  const save = panel.querySelector('[data-drive-save]');
  const restore = panel.querySelector('[data-drive-restore]');
  const disconnect = panel.querySelector('[data-drive-disconnect]');
  const status = panel.querySelector('#drive-backup-status');
  const show = msg => {status.textContent = msg;};
  const update = () => {
    connect.disabled = operationBusy || !configured() || isAuthorized() || !window.google?.accounts?.oauth2?.initTokenClient;
    save.disabled = operationBusy || !isAuthorized();
    restore.disabled = operationBusy || !isAuthorized();
    disconnect.disabled = operationBusy || !token;
  };
  const run = async (task, title) => {
    if (operationBusy) return;
    operationBusy = true; update(); show(title);
    try {show(await task());}
    catch (error) {show('Operação não concluída: ' + readableGoogleError(error));}
    finally {operationBusy = false;update();}
  };
  update();
  if (configured()) {
    loadGIS().then(() => {
      if (!panel.isConnected) return;
      show(isAuthorized() ? 'Conta Google autorizada nesta sessão. O progresso ainda não foi transferido.' : 'Pronto para conectar sua conta Google.');
      update();
    }).catch(e => show(readableGoogleError(e)));
  }
  connect.addEventListener('click', () => {
    if (operationBusy || !configured() || !window.google?.accounts?.oauth2?.initTokenClient) return;
    // requestAccessToken precisa ocorrer diretamente no clique, para abrir o popup.
    operationBusy = true; update(); show('Abra a janela Google e autorize somente o acesso aos arquivos do aplicativo.');
    let client;
    try {
      client = window.google.accounts.oauth2.initTokenClient({
        client_id: DRIVE_OAUTH_CONFIG.clientId, scope: SCOPE,
        callback: response => {
          if (response?.access_token && !response.error) {
            token = response.access_token;
            expiresAt = Date.now() + Math.max(60,Number(response.expires_in)||3600)*1000;
            show('Conta autorizada. Agora você pode salvar ou restaurar manualmente o progresso.');
          } else show('Autorização não concluída: ' + (response?.error || 'consentimento negado'));
          operationBusy = false; update();
        },
        error_callback: response => {
          operationBusy = false;
          show('Não foi possível abrir ou concluir o login Google: ' + (response?.type || 'erro de autorização'));
          update();
        }
      });
      client.requestAccessToken({prompt:'select_account'});
    } catch(e) {operationBusy = false;show(readableGoogleError(e));update();}
  });
  save.addEventListener('click', () => run(() => saveOnDrive(window.confirm.bind(window), show), 'Lendo e validando o progresso local…'));
  restore.addEventListener('click', () => run(() => restoreFromDrive(window.confirm.bind(window)), 'Consultando o backup no Drive…'));
  disconnect.addEventListener('click', () => {
    if (operationBusy) return;
    if (token && window.google?.accounts?.oauth2?.revoke) {
      try { window.google.accounts.oauth2.revoke(token, () => {}); } catch (_) { /* token expira naturalmente */ }
    }
    token = null;expiresAt = 0;
    show('Conta desconectada nesta sessão. Seus arquivos no Drive e o progresso local foram preservados.');
    update();
  });
}
