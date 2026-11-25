/** Fase 20 Lote 6 — consolidação corrigida, não destrutiva. */
import { runPersistenceDiagnostics } from './persistence-diagnostics.js';
import { runStorageRoundtripTests } from './storage-roundtrip-tests.js';
import { runRestoreConflictTests } from './restore-conflict-tests.js';
import { runPedagogicalFlowTests } from './pedagogical-flow-tests.js';
import { runBackupIntegrityChecks } from './backup-integrity-tests.js';

const suites = [
  ['Persistência (F19/L4)', runPersistenceDiagnostics, r => r.checks.map(c => ({name:c.label,status:c.passed?'OK':'FALHA',detail:c.detail||''}))],
  ['Carregamento e salvamento (F20/L3)', runStorageRoundtripTests, r => r.checks.map(c => ({name:c.name,status:c.passed?'OK':'FALHA',detail:c.detail||''}))],
  ['Restauração e conflitos (F20/L2)', runRestoreConflictTests, r => r.results.map(c => ({name:c.name,status:c.passed?'OK':'FALHA'}))],
  ['Fluxos pedagógicos (F20/L4)', runPedagogicalFlowTests, r => r.checks.map(c => ({name:c.name,status:c.status,detail:c.detail||''}))],
  // A suíte F18/L6 usa "pass" e "details", NÃO "passed" e "detail".
  ['Integridade de backup (F18/L6)', runBackupIntegrityChecks, r => r.checks.map(c => ({name:c.label,status:c.pass===true?'OK':'FALHA',detail:c.details||''}))]
];

export function runIntegrationReport() {
  const results=suites.map(([name,run,extract])=>{
    try {
      const raw=run();
      const checks=extract(raw);
      if(!checks.length)return {name,status:'PENDENTE',checks:[],note:'Nenhum teste reconhecido.'};
      const status=checks.some(c=>c.status==='FALHA')||raw.ok===false?'FALHA':checks.every(c=>c.status==='OK')?'OK':'PENDENTE';
      return {name,status,checks};
    } catch(error){return {name,status:'FALHA',checks:[],note:String(error?.message||error)};}
  });
  const summary={ok:results.filter(s=>s.status==='OK').length,failed:results.filter(s=>s.status==='FALHA').length,pending:results.filter(s=>s.status==='PENDENTE').length};
  return {version:'F20-L06',generatedAt:new Date().toISOString(),scope:'Diagnóstico automatizado; armazenamento real somente leitura',summary,suites:results,
    manualPending:['Recarga real em perfil de testes','Conflito entre duas abas reais','Restauração real em perfil separado','Confirmação de salvamento após cada fluxo pedagógico'],homologated:false};
}
export function formatIntegrationReport(r) {
  return ['ADM-ESTUDO | FASE 20 — LOTE 6','Relatório gerado em '+r.generatedAt,'NÃO HOMOLOGADO: testes manuais pendentes.',`Suítes: ${r.summary.ok} OK, ${r.summary.failed} FALHA, ${r.summary.pending} PENDENTE.`,'',...r.suites.flatMap(s=>[`${s.status} — ${s.name}`,...s.checks.map(c=>`  ${c.status} — ${c.name}${c.detail?': '+c.detail:''}`),...(s.note?[s.note]:[])]),'','TESTES MANUAIS PENDENTES:',...r.manualPending.map(x=>'- '+x),'','Nenhuma restauração real é executada por este relatório.'].join('\n');
}
export function downloadIntegrationReport(report) {
  const content=formatIntegrationReport(report);
  const blob=new Blob([content],{type:'text/plain;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const link=document.createElement('a');link.href=url;link.download='adm-estudo-fase20-lote06-relatorio.txt';
  document.body.appendChild(link);
  try{link.click();}finally{link.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);}
}
export function renderIntegrationReportButton() {
  return '<section aria-label="Relatório integrado"><h2 class="section-title">Relatório integrado de testes</h2><p>Consolida as suítes, incluindo a leitura corrigida dos resultados de backup. Não altera o progresso real.</p><button type="button" class="btn btn-secondary" data-integration-report="1">Executar auditoria integrada e baixar relatório</button></section>';
}
