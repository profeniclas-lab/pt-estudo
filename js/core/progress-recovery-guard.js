/** PT-ESTUDO — recuperação isolada, sem importar dados administrativos. */
import { STORAGE_KEY } from './storage.js';
import { APP_ID, STATE_SCHEMA_VERSION } from './state.js';
import { BACKUP_FORMAT, validateProgressBackup } from './progress-backup-validator.js';

export const RECOVERY_KEY = `${STORAGE_KEY}.preRestoreRecovery`;
const object = x => x!==null&&typeof x==='object'&&!Array.isArray(x);

export function normalizeRecoveryInput(input) {
  if(!object(input))return {ok:false,message:'O arquivo não contém objeto JSON válido.'};
  if(Object.prototype.hasOwnProperty.call(input,'format')){
    if(input.format!==BACKUP_FORMAT)return {ok:false,message:'Backup pertence a outro aplicativo. Nenhuma importação foi realizada.'};
    const validation=validateProgressBackup(input);
    return validation.valid?{ok:true,backup:input,validation,source:'backup'}:{ok:false,message:validation.errors.join('\n')};
  }
  if(input.schemaVersion!==STATE_SCHEMA_VERSION||input.appId!==APP_ID)return {ok:false,message:'Cópia bruta pertence a outro aplicativo ou esquema. Nenhum dado alterado.'};
  const backup={format:BACKUP_FORMAT,backupVersion:1,createdAt:new Date().toISOString(),storageKey:STORAGE_KEY,schemaVersion:input.schemaVersion,state:input};
  const validation=validateProgressBackup(backup);
  return validation.valid?{ok:true,backup,validation,source:'recuperacao-bruta'}:{ok:false,message:validation.errors.join('\n')};
}

export function protectCurrentProgress(previousRaw,replacementRaw,storage=window.localStorage){
  if(typeof replacementRaw!=='string')return {ok:false,message:'Novo estado inválido.'};
  try{
    const checked=normalizeRecoveryInput(JSON.parse(replacementRaw));
    if(!checked.ok)return {ok:false,message:'Destino inválido: '+checked.message};
    if(previousRaw===null)return {ok:true,recoverySaved:false};
    if(storage.getItem(RECOVERY_KEY)!==null)return {ok:false,message:'Já existe uma cópia de recuperação pendente.'};
    const previous=normalizeRecoveryInput(JSON.parse(previousRaw));
    if(!previous.ok)return {ok:false,message:'Estado anterior incompatível. Preserve-o manualmente.'};
    storage.setItem(RECOVERY_KEY,previousRaw);
    if(storage.getItem(RECOVERY_KEY)!==previousRaw)throw Error('Falha ao confirmar cópia local');
    return {ok:true,recoverySaved:true};
  }catch(_){return {ok:false,message:'Não foi possível guardar a cópia de recuperação; nada foi substituído.'};}
}
export function recoveryStatus(storage=window.localStorage){
  try{const raw=storage.getItem(RECOVERY_KEY);if(raw===null)return {exists:false,valid:false};const result=normalizeRecoveryInput(JSON.parse(raw));return {exists:true,valid:result.ok,message:result.ok?'Cópia anterior disponível.':'Cópia anterior inválida.'};}
  catch(_){return {exists:true,valid:false,message:'Não foi possível ler a cópia anterior.'};}
}
export function clearRecoveryCopy(confirmed=false,storage=window.localStorage){
  if(!confirmed)return {ok:false,message:'Confirmação necessária.'};
  try{storage.removeItem(RECOVERY_KEY);return {ok:true};}
  catch(_){return {ok:false,message:'Não foi possível remover a cópia.'};}
}
