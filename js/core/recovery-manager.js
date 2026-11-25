/** PT-ESTUDO — consulta, exportação e liberação manual de cópias locais. */
import { RECOVERY_KEY, clearRecoveryCopy, normalizeRecoveryInput } from './progress-recovery-guard.js';
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function recoveryCopyInfo(storage=window.localStorage){
  try{
    const raw=storage.getItem(RECOVERY_KEY);
    if(raw===null)return {exists:false,valid:false,message:'Nenhuma cópia anterior pendente.'};
    let parsed;try{parsed=JSON.parse(raw);}catch{return {exists:true,valid:false,bytes:new Blob([raw]).size,message:'Cópia ilegível: preserve e exporte antes de qualquer alteração.'};}
    const checked=normalizeRecoveryInput(parsed);
    return {exists:true,valid:checked.ok,bytes:new Blob([raw]).size,updatedAt:checked.ok?checked.backup.state?.metadata?.updatedAt:null,
      message:checked.ok?'Cópia PT-ESTUDO compatível encontrada.':'Cópia incompatível ou inválida. Exporte para análise.'};
  }catch{return {exists:true,valid:false,inaccessible:true,message:'Armazenamento local inacessível.'};}
}
export function exportRecoveryCopy(storage=window.localStorage){
  let raw;try{raw=storage.getItem(RECOVERY_KEY);}catch{return {ok:false,message:'Armazenamento inacessível.'};}
  if(raw===null)return {ok:false,message:'Nenhuma cópia pendente.'};
  try{
    const url=URL.createObjectURL(new Blob([raw],{type:'application/json;charset=utf-8'})),a=document.createElement('a');
    a.href=url;a.download=`pt-estudo-recuperacao-local-${new Date().toISOString().replace(/[:.]/g,'-')}.json`;
    document.body.appendChild(a);try{a.click();}finally{a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);}
    return {ok:true,message:'Download solicitado; confirme se o arquivo foi salvo antes de liberar a cópia local.'};
  }catch{return {ok:false,message:'Não foi possível baixar a cópia; dados mantidos.'};}
}
export function releaseRecoveryCopy(confirmed,storage=window.localStorage){
  if(!confirmed)return {ok:false,message:'Confirmação necessária.'};
  const info=recoveryCopyInfo(storage);
  if(!info.exists)return {ok:false,message:'Nenhuma cópia pendente.'};
  if(info.inaccessible)return {ok:false,message:'Armazenamento inacessível.'};
  const result=clearRecoveryCopy(true,storage);if(!result.ok)return result;
  try{if(storage.getItem(RECOVERY_KEY)!==null)return {ok:false,message:'Não foi possível confirmar a remoção.'};}
  catch{return {ok:false,message:'Falha na verificação da remoção.'};}
  return {ok:true,message:'Cópia local liberada; progresso atual preservado.'};
}
export function renderRecoveryManager(){
  const info=recoveryCopyInfo();
  const detail=info.exists?`<p>${esc(info.message)} ${info.bytes!==undefined?`(${info.bytes} bytes)`:''}</p>
  ${info.updatedAt?`<p>Atualização anterior: ${esc(info.updatedAt)}</p>`:''}
  <button type="button" class="btn" data-recovery-export="1">Baixar cópia anterior (.json)</button>
  <button type="button" class="btn" data-recovery-release="1">Liberar cópia local</button>`:`<p>${esc(info.message)}</p>`;
  return `<section aria-label="Gerenciar recuperação anterior" style="margin:16px 0;padding:14px;border:1px solid #aaa;border-radius:8px">
  <h2 class="section-title">Cópia local de recuperação</h2>${detail}
  <p class="page-subtitle">Baixe e preserve externamente a cópia antes de liberá-la. Somente arquivos PT-ESTUDO são aceitos na restauração.</p>
  <p id="recovery-manager-result" role="status" aria-live="polite"></p></section>`;
}
