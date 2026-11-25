/** Fase 18, Lote 6 — verificações não destrutivas de integridade e recuperação. */
import { STORAGE_KEY } from './storage.js';
import { STATE_SCHEMA_VERSION } from './state.js';
import { validateProgressBackup } from './progress-backup-validator.js';
import { normalizeRecoveryInput, RECOVERY_KEY } from './progress-recovery-guard.js';

const object = x => x !== null && typeof x === 'object' && !Array.isArray(x);
const fixture = () => ({
  schemaVersion: STATE_SCHEMA_VERSION, appVersion:'2.0.0',
  navigation:{currentRoute:'dashboard',selectedModuleId:null,selectedSubtopicId:null},
  preferences:{theme:'light'},metadata:{createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},
  progress:{modules:{'ADM-01':{example:true}},lessons:{},diagnostics:{},exercises:{},questionHistory:{},flashcards:{},reviewQueue:[],errors:[]}
});
const envelope = state => ({format:'adm-estudo-progress-backup',backupVersion:1,createdAt:new Date().toISOString(),storageKey:STORAGE_KEY,schemaVersion:state.schemaVersion,state});
const snapshot = state => JSON.stringify(state);

/** Sem chamadas a setItem/removeItem: não grava, não importa, não apaga. */
export function runBackupIntegrityChecks(storage = window.localStorage) {
  const checks=[];
  const check=(label,pass,details='')=>checks.push({label,pass:Boolean(pass),details});
  try {
    const example=fixture(), backup=envelope(example);
    check('Backup de referência é aceito',validateProgressBackup(backup).valid);
    const recovered=JSON.parse(JSON.stringify(backup));
    check('Exportar e interpretar JSON preserva os dados',validateProgressBackup(recovered).valid && snapshot(recovered.state)===snapshot(example));
    check('Arquivo de esquema incompatível é rejeitado',!validateProgressBackup({...backup,schemaVersion:STATE_SCHEMA_VERSION+1}).valid);
    check('Backup com estrutura incompleta é rejeitado',!validateProgressBackup({...backup,state:{...example,progress:null}}).valid);
    check('JSON inválido não pode ser interpretado',(()=>{try{JSON.parse('{arquivo incompleto');return false;}catch{return true;}})());
    check('Recuperação bruta compatível é reconhecida',normalizeRecoveryInput(example).ok);
    check('Recuperação bruta incompatível é bloqueada',!normalizeRecoveryInput({...example,schemaVersion:STATE_SCHEMA_VERSION+1}).ok);
  } catch(err) {check('Testes de referência',false,String(err?.message||err));}
  try {
    const raw=storage.getItem(STORAGE_KEY);
    if(raw===null)check('Progresso local',true,'Ainda não existe progresso salvo neste navegador.');
    else {
      const parsed=JSON.parse(raw),validated=validateProgressBackup(envelope(parsed));
      check('Progresso local é compatível com o validador',validated.valid,validated.errors.join('; '));
      check('Progresso local permite ida e volta JSON',snapshot(JSON.parse(raw))===snapshot(parsed));
    }
  } catch(err) {check('Progresso local',false,'Não foi possível ler ou validar: '+String(err?.message||err));}
  try {
    const raw=storage.getItem(RECOVERY_KEY);
    if(raw===null)check('Cópia local de recuperação',true,'Não existe cópia pendente.');
    else {const result=normalizeRecoveryInput(JSON.parse(raw));check('Cópia local de recuperação é legível e compatível',result.ok,result.message||'Cópia pendente preservada; não foi modificada.');}
  } catch(err) {check('Cópia local de recuperação',false,String(err?.message||err));}
  return {ok:checks.every(x=>x.pass),checks,readOnly:true};
}

export function formatBackupIntegrityReport(report) {
 const lines=['DIAGNÓSTICO DE INTEGRIDADE — ADM-ESTUDO','Modo somente leitura: nenhum dado foi alterado.',''];
 for(const c of report.checks)lines.push(`${c.pass?'OK':'ATENÇÃO'} — ${c.label}${c.details?' — '+c.details:''}`);
 lines.push('',report.ok?'Verificações concluídas sem alertas.':'Existem alertas. Não faça restauração até investigar.','Este diagnóstico não substitui um teste real de restauração em um perfil separado.');
 return lines.join('\n');
}

export function renderBackupIntegrityButton(){
 return `<section aria-label="Diagnóstico de integridade do backup"><h2 class="section-title">Verificação de backup e recuperação</h2><p>Teste o formato de backup, a compatibilidade do progresso local e a cópia de recuperação, sem alterar dados.</p><button type="button" class="btn btn-secondary" data-backup-integrity="1">Executar diagnóstico de integridade</button><p class="page-subtitle">Este teste não realiza restauração. Para confirmar a recuperação real, use um perfil de navegador separado.</p></section>`;
}
