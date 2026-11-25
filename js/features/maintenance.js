/** ADM-ESTUDO F22/L05 — manutenção e testes: funções existentes, sem escrita no progresso. */
import { renderIntegrationReportButton } from '../core/integration-report.js';
import { renderPedagogicalFlowTestsButton } from '../core/pedagogical-flow-tests.js';
import { renderStorageRoundtripTestsButton } from '../core/storage-roundtrip-tests.js';
import { renderPersistenceDiagnosticsButton } from '../core/persistence-diagnostics.js';
import { renderBackupIntegrityButton } from '../core/backup-integrity-tests.js';
import { renderRestoreConflictTestsButton } from '../core/restore-conflict-tests.js';
import { dashboardConsistency } from '../core/dashboard-consistency.js';
import { dashboardSummary } from './dashboard.js';
import { inspectStoredProgress } from '../core/storage-safety.js';

const testSelectors = ['data-backup-integrity','data-persistence-diagnostics',
  'data-pedagogical-flow-tests','data-integration-report',
  'data-restore-conflict-tests','data-storage-roundtrip-tests'];

export function maintenanceChecks(root) {
  const controls = root?.querySelector('#settings-maintenance');
  const checks = [
    ['Seção de manutenção presente em Configurações', !!controls],
    ['Seis testes técnicos disponíveis', testSelectors.every(x => !!controls?.querySelector(`[${x}]`))],
    ['Nenhum controle de backup ou reinício duplicado', !controls?.querySelector('[data-backup-export], [data-backup-restore], [data-reset-progress]')],
    ['Botão de relatório local presente', !!controls?.querySelector('#maintenance-run')],
    ['Dashboard sem testes técnicos', !document.querySelector('#dashboard-technical-tools')],
    ['Menu Configurações presente', !!document.querySelector('[data-nav="configuracoes"]')]
  ];
  return {version:'F22-L05',generatedAt:new Date().toISOString(),checks:checks.map(([name,passed])=>({name,passed:!!passed})),ok:checks.every(x=>x[1])};
}

function consistencyLines() {
  try {
    const status = inspectStoredProgress();
    if (!status.ok) return ['Dados locais: não foi possível validar; nenhuma alteração feita.', status.message];
    if (status.code === 'empty') return ['Dados locais: ainda não existe progresso salvo.'];
    const modules = dashboardSummary(status.state).modules;
    const result = dashboardConsistency(status.state,modules);
    return [
      `Módulos iniciados: ${result.started}; concluídos: ${result.completed}`,
      `Questões distintas no banco de erros: ${result.distinctErrors}`,
      `Revisões com data válida: ${result.validReviews}`,
      `Registros de simulados concluídos: ${result.simulations}`,
      `Ressalvas de consistência: ${result.issues.length}`,
      ...result.issues.map(issue => `ATENÇÃO — ${issue.message} (${issue.count})`),
      'Leitura informativa; nenhum registro corrigido ou modificado.'
    ];
  } catch (error) {
    return [`Não foi possível concluir a verificação de consistência: ${String(error?.message || error)}`];
  }
}

export function formatMaintenanceReport(report) {
  return ['ADM-ESTUDO — FASE 22 / LOTE 5', 'Gerado em: '+report.generatedAt,
    'VERIFICAÇÃO ESTRUTURAL: '+(report.ok?'APROVADA':'COM FALHAS'),
    ...report.checks.map(c=>`${c.passed?'OK':'FALHA'} — ${c.name}`),
    '', 'CONSISTÊNCIA DOS REGISTROS (SOMENTE LEITURA)',...consistencyLines(),
    '', 'Os seis botões acima executam as suítes existentes das fases anteriores.',
    'Este relatório não comprova que todas as suítes tenham sido executadas.',
    'Nenhuma informação foi escrita no localStorage por este relatório.'].join('\n');
}

export function installMaintenanceUI(main) {
  const host=main.querySelector('#settings-maintenance');
  if(!host)return;
  host.innerHTML=`<h2 style="font-size:17px;margin:0 0 8px">⚙ Diagnóstico e manutenção</h2>
    <p>Verificações técnicas reunidas em Configurações. Os testes simulam operações em memória e leem apenas o necessário do progresso real; não apagam respostas.</p>
    <details id="settings-maintenance-tools" style="margin:12px 0"><summary style="cursor:pointer;font-weight:600">Exibir os seis testes técnicos</summary>
      <div style="display:flex;flex-wrap:wrap;gap:8px;padding:12px 0">
        ${renderBackupIntegrityButton()}
        ${renderPersistenceDiagnosticsButton()}
        ${renderPedagogicalFlowTestsButton()}
        ${renderIntegrationReportButton()}
        ${renderRestoreConflictTestsButton()}
        ${renderStorageRoundtripTestsButton()}
      </div>
      <p class="page-subtitle">O Relatório integrado também oferece download de TXT. Ações de restauração permanecem na seção Backup.</p>
    </details>
    <p>Verificação local de estrutura e consistência:</p>
    <button class="btn btn-primary" type="button" id="maintenance-run">Verificar manutenção</button>
    <button class="btn" type="button" id="maintenance-download" disabled>Baixar relatório TXT</button>
    <pre id="maintenance-output" role="status" aria-live="polite" style="white-space:pre-wrap;margin:12px 0"></pre>`;
  let report='';
  const output=host.querySelector('#maintenance-output');
  const download=host.querySelector('#maintenance-download');
  host.querySelector('#maintenance-run').addEventListener('click',()=>{
    report=formatMaintenanceReport(maintenanceChecks(main));
    output.textContent=report;
    download.disabled=false;
  });
  download.addEventListener('click',()=>{
    if(!report)return;
    const url=URL.createObjectURL(new Blob([report],{type:'text/plain;charset=utf-8'}));
    const a=document.createElement('a');a.href=url;a.download='adm-estudo-fase22-lote05-relatorio.txt';
    document.body.appendChild(a);try{a.click();}finally{a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);}
  });
}
