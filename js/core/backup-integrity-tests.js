/** PT-ESTUDO — verificações não destrutivas de integridade. */
import {STORAGE_KEY} from './storage.js';
import {APP_ID,STATE_SCHEMA_VERSION,createInitialState} from './state.js';
import {BACKUP_FORMAT,validateProgressBackup} from './progress-backup-validator.js';
import {normalizeRecoveryInput,RECOVERY_KEY} from './progress-recovery-guard.js';
import {validateStateForSaving,inspectStoredProgress} from './storage-safety.js';
import {inspectProgressIdentity} from './progress-identity.js';
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
  const nestedCases = [
    ['Fila de revisão: módulo administrativo',p=>{p.reviewQueue=[{moduleId:'ADM-01'}];}],
    ['Simulado: IDs de questões administrativos',p=>{p.simulados={active:{ids:['Q-DA-17-001-01']},history:[]};}],
    ['Simulado: histórico de área administrativa',p=>{p.simulados={active:null,history:[{area:'AP'}]};}],
    ['Banco: sessão com questão administrativa',p=>{p.questionBank={session:{ids:['Q-ADM-01-001-01']}};}],
    ['Banco: filtro de módulo administrativo',p=>{p.questionBank={filter:{moduleId:'DA-17'}};}],
    ['Revisão adaptativa: chave administrativa',p=>{p.adaptiveReview={'question:Q-ADM-01-001-01':{}};}],
    ['Jornada: ID composto administrativo',p=>{p.journey={events:[{id:'question:2026-11-26:Q-ADM-01-001-01'}]};}]
  ];
  for(const [name,mutate] of nestedCases){
    const candidate=JSON.parse(JSON.stringify(state));mutate(candidate.progress);
    check(name,!validateProgressBackup(envelope(candidate)).valid);
  }
  check('Validação local bloqueia IDs administrativos aninhados',(()=>{const candidate=JSON.parse(JSON.stringify(state));candidate.progress.reviewQueue=[{questionId:'Q-ADM-01-001-01'}];return !validateStateForSaving(candidate);})());
  check('Texto explicativo que menciona ADM não é bloqueado',(()=>{const candidate=JSON.parse(JSON.stringify(state));candidate.progress.questionHistory['Q-POR-01-001-01']={note:'Exemplo textual: ADM-01 é um código antigo.'};return inspectProgressIdentity(candidate).ok&&validateProgressBackup(envelope(candidate)).valid;})());
  const fake={getItem:k=>k===STORAGE_KEY?JSON.stringify({...state,progress:{...state.progress,reviewQueue:[{moduleId:'ADM-01'}]}}):null};
  check('Inspeção local não altera progresso incompatível',!inspectStoredProgress(fake).ok);

 }catch(e){check('Testes de referência',false,String(e?.message||e));}
 try{const raw=storage.getItem(STORAGE_KEY);if(raw===null)check('Progresso local',true,'Ainda não existe estado salvo.');else check('Progresso salvo validado',validateProgressBackup(envelope(JSON.parse(raw))).valid);}catch(e){check('Progresso local',false,String(e?.message||e));}
 try{const raw=storage.getItem(RECOVERY_KEY);check('Recuperação local',raw===null||normalizeRecoveryInput(JSON.parse(raw)).ok);}catch(e){check('Recuperação local',false,String(e?.message||e));}
 return {ok:checks.every(x=>x.pass),checks,readOnly:true};
}
export function formatBackupIntegrityReport(report){return ['DIAGNÓSTICO DE INTEGRIDADE — PT-ESTUDO','Somente leitura: nenhum dado foi alterado.','',...report.checks.map(x=>`${x.pass?'OK':'ATENÇÃO'} — ${x.label}${x.details?' — '+x.details:''}`),'',report.ok?'Verificações concluídas sem alertas.':'Existem alertas; não restaure antes de investigar.','Este diagnóstico não substitui teste real em navegador separado.'].join('\n');}
export function renderBackupIntegrityButton(){return `<section aria-label="Diagnóstico de integridade"><h2 class="section-title">Verificação de backup e recuperação</h2><p>Testar compatibilidade dos backups sem modificar os dados.</p><button type="button" class="btn btn-secondary" data-backup-integrity="1">Executar diagnóstico de integridade</button></section>`;}
