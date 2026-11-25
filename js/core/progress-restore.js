/** PT-ESTUDO — restauração integral, protegida contra backups de outros aplicativos. */
import { STORAGE_KEY } from './storage.js';
import { verifyProgressBaseline, acknowledgeProgressWrite } from './progress-conflict-guard.js';
import { BACKUP_MAX_BYTES, validateProgressBackup } from './progress-backup-validator.js';
import { normalizeRecoveryInput, protectCurrentProgress, RECOVERY_KEY } from './progress-recovery-guard.js';

export async function prepareProgressRestore(file){
  if(!file||!/\.json$/i.test(file.name)||file.size===0||file.size>BACKUP_MAX_BYTES)
    return {ok:false,message:'Selecione um arquivo JSON de até 20 MB.'};
  let parsed;try{parsed=JSON.parse(await file.text());}catch{return {ok:false,message:'JSON inválido.'};}
  const checked=normalizeRecoveryInput(parsed);
  if(!checked.ok)return {ok:false,message:checked.message};
  return {ok:true,backup:checked.backup,validation:checked.validation,source:checked.source};
}
function downloadRecoveryCopy(raw){
  const blob=new Blob([raw],{type:'application/json;charset=utf-8'});
  const url=URL.createObjectURL(blob),a=document.createElement('a');
  a.href=url;a.download=`pt-estudo-recuperacao-anterior-${new Date().toISOString().replace(/[:.]/g,'-')}.json`;
  document.body.appendChild(a);
  try{a.click();}finally{a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);}
}
/** Não escreve dados. Confere o destino, o estado atual e a cópia de recuperação. */
export function planRepeatRestore(prepared,previousRaw,recoveryRaw){
  if(!prepared?.ok)return {ok:false,message:'Restauração não preparada.'};
  const validation=validateProgressBackup(prepared.backup);
  if(!validation.valid)return {ok:false,message:'Backup incompatível: '+validation.errors.join(' ')};
  let replacement;try{replacement=JSON.stringify(prepared.backup.state);}catch{return {ok:false,message:'Estado do backup não serializável.'};}
  for(const [raw,label] of [[previousRaw,'Progresso atual'],[recoveryRaw,'Cópia pendente']]){
    if(raw===null)continue;
    try{if(!normalizeRecoveryInput(JSON.parse(raw)).ok)return {ok:false,message:`${label} incompatível; preservado sem alteração.`};}
    catch{return {ok:false,message:`${label} ilegível; preservado sem alteração.`};}
  }
  return {ok:true,replacement,alreadyRestored:previousRaw===replacement,hasPendingRecovery:recoveryRaw!==null};
}
export function restoreProgressBackup(prepared,confirmed=false,storage=window.localStorage){
  if(!confirmed||!prepared?.ok)return {ok:false,message:'Restauração não autorizada.'};
  const baseline=verifyProgressBaseline(storage);
  if(!baseline.ok)return {ok:false,message:'Restauração bloqueada: '+baseline.message};
  let previousRaw,recoveryRaw;
  try{previousRaw=storage.getItem(STORAGE_KEY);recoveryRaw=storage.getItem(RECOVERY_KEY);}
  catch{return {ok:false,message:'Não foi possível ler armazenamento.'};}
  const plan=planRepeatRestore(prepared,previousRaw,recoveryRaw);
  if(!plan.ok)return plan;
  if(plan.alreadyRestored)return {ok:true,unchanged:true,message:'Backup já corresponde ao progresso local; nenhum dado alterado.'};
  if(previousRaw!==null){
    try{downloadRecoveryCopy(previousRaw);}catch{return {ok:false,message:'Falhou download do progresso anterior. Restauração cancelada.'};}
  }
  let createdRecovery=false;
  if(previousRaw!==null&&!plan.hasPendingRecovery){
    const saved=protectCurrentProgress(previousRaw,plan.replacement,storage);
    if(!saved.ok)return saved;
    createdRecovery=!!saved.recoverySaved;
  }
  const last=verifyProgressBaseline(storage);
  if(!last.ok)return {ok:false,message:'Alteração concorrente detectada. Nenhum progresso substituído.'};
  try{
    if(storage.getItem(STORAGE_KEY)!==previousRaw||storage.getItem(RECOVERY_KEY)!==(createdRecovery?previousRaw:recoveryRaw))
      return {ok:false,message:'Estado local ou cópia de recuperação mudou; gravação bloqueada.'};
    storage.setItem(STORAGE_KEY,plan.replacement);
    if(storage.getItem(STORAGE_KEY)!==plan.replacement)throw Error('Gravação não confirmada');
    acknowledgeProgressWrite(plan.replacement);
    return {ok:true,message:plan.hasPendingRecovery?'Progresso restaurado. Cópia anterior preservada, sem substituição.':'Progresso restaurado. Cópia local anterior protegida.'};
  }catch{
    try{
      if(storage.getItem(STORAGE_KEY)===plan.replacement){
        if(previousRaw===null)storage.removeItem(STORAGE_KEY);
        else{storage.setItem(STORAGE_KEY,previousRaw);acknowledgeProgressWrite(previousRaw);}
      }
    }catch{return {ok:false,message:'Falha durante gravação e reversão; preserve suas cópias e interrompa restaurações.'};}
    return {ok:false,message:'Restauração falhou; dados anteriores foram preservados sempre que possível.'};
  }
}
