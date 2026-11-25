/** PT-ESTUDO — verificações não destrutivas de integridade. */
import {STORAGE_KEY} from './storage.js';
import {APP_ID,STATE_SCHEMA_VERSION,createInitialState} from './state.js';
import {BACKUP_FORMAT,validateProgressBackup} from './progress-backup-validator.js';
import {normalizeRecoveryInput,RECOVERY_KEY} from './progress-recovery-guard.js';
const envelope=state=>({format:BACKUP_FORMAT,backupVersion:1,createdAt:new Date().toISOString(),storageKey:STORAGE_KEY,schemaVersion:state.schemaVersion,state});
export function runBackupIntegrityChecks(storage=window.localStorage){
 const checks=[];const check=(label,pass,details='')=>checks.push({label,pass:!!pass,details});
 try{
  const state=createInitialState();state.progress.modules['POR-01']={example:true};const backup=envelope(state);
  check('Backup de Português é aceito',validateProgressBackup(backup).valid);
  check('Serialização preserva o progresso',validateProgressBackup(JSON.parse(JSON.stringify(backup))).valid);
  check('Backup ADM é rejeitado',!validateProgressBackup({...backup,format:'adm-estudo-progress-backup',storageKey:'admEstudo.v2.state'}).valid);
  check('Estado sem identificação é rejeitado',!validateProgressBackup(envelope({...state,appId:undefined})).valid);
  check('Identidade correta do app',state.appId===APP_ID);
  check('Esquema incompatível é rejeitado',!validateProgressBackup({...backup,schemaVersion:STATE_SCHEMA_VERSION+1}).valid);
  check('Backup incompleto é rejeitado',!validateProgressBackup({...backup,state:{...state,progress:null}}).valid);
  check('Recuperação bruta de PT é aceita',normalizeRecoveryInput(state).ok);
  check('Recuperação bruta administrativa é rejeitada',!normalizeRecoveryInput({...state,appId:'adm-estudo'}).ok);
 }catch(e){check('Testes de referência',false,String(e?.message||e));}
 try{const raw=storage.getItem(STORAGE_KEY);if(raw===null)check('Progresso local',true,'Ainda não existe estado salvo.');else check('Progresso salvo validado',validateProgressBackup(envelope(JSON.parse(raw))).valid);}catch(e){check('Progresso local',false,String(e?.message||e));}
 try{const raw=storage.getItem(RECOVERY_KEY);check('Recuperação local',raw===null||normalizeRecoveryInput(JSON.parse(raw)).ok);}catch(e){check('Recuperação local',false,String(e?.message||e));}
 return {ok:checks.every(x=>x.pass),checks,readOnly:true};
}
export function formatBackupIntegrityReport(report){return ['DIAGNÓSTICO DE INTEGRIDADE — PT-ESTUDO','Somente leitura: nenhum dado foi alterado.','',...report.checks.map(x=>`${x.pass?'OK':'ATENÇÃO'} — ${x.label}${x.details?' — '+x.details:''}`),'',report.ok?'Verificações concluídas sem alertas.':'Existem alertas; não restaure antes de investigar.','Este diagnóstico não substitui teste real em navegador separado.'].join('\n');}
export function renderBackupIntegrityButton(){return `<section aria-label="Diagnóstico de integridade"><h2 class="section-title">Verificação de backup e recuperação</h2><p>Testar compatibilidade dos backups sem modificar os dados.</p><button type="button" class="btn btn-secondary" data-backup-integrity="1">Executar diagnóstico de integridade</button></section>`;}
