/** PT-ESTUDO — Configurações. Preserva controles originais de backup, reinício e manutenção. */
import { installResetUI } from '../core/reset-progress.js';
import { installMaintenanceUI } from './maintenance.js';
import { installPhase22AuditUI } from './phase22-audit.js';
import { renderRecoveryManager } from '../core/recovery-manager.js';
import { renderDriveBackupPanel, installDriveBackupUI } from '../core/google-drive-backup.js';
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const card=(id,title,description,lot)=>`<section id="settings-${id}" class="settings-card" style="background:var(--surface,#fff);border:1px solid var(--border,#e2e8f0);border-radius:10px;padding:18px;margin:12px 0"><h2 style="font-size:17px;margin:0 0 8px">${esc(title)}</h2><p>${esc(description)}</p><p class="page-subtitle">Situação: ${esc(lot)}</p></section>`;
/** Relatório visual de estrutura; não altera arquivos, backups ou progresso. */
export function settingsPageChecks(root) {
  const checks=[
    ['Configurações acessível',!!root?.querySelector('#settings-heading')],
    ['Exportar backup presente',!!root?.querySelector('[data-backup-export]')],
    ['Verificar backup presente',!!root?.querySelector('[data-backup-inspect]')],
    ['Restaurar backup presente',!!root?.querySelector('[data-backup-restore]')],
    ['Controles de recuperação presentes',!!root?.querySelector('[data-recovery-export]')],
    ['Instruções de Google Drive presentes',!!root?.querySelector('a[href*="drive.google.com"]')],
    ['Controles de backup ativados',document.documentElement.dataset.f22BackupControls==='ready'],
    ['Controles de reinício presentes',!!root?.querySelector('[data-reset-progress]')&&!!root?.querySelector('#reset-scope')],
    ['Menu de Configurações presente',!!document.querySelector('[data-nav="configuracoes"]')],
    ['Ferramentas de manutenção presentes',!!root?.querySelector('#settings-maintenance [data-integration-report]')&&!!root?.querySelector('#settings-maintenance [data-backup-integrity]')],
    ['Relatório de manutenção disponível',!!root?.querySelector('#maintenance-run')],
    ['Backup manual no Drive presente',!!root?.querySelector('[data-drive-connect]')&&!!root?.querySelector('[data-drive-save]')&&!!root?.querySelector('[data-drive-restore]')]
  ];
  return {version:'PT-ESTUDO-L1',generatedAt:new Date().toISOString(),checks:checks.map(([name,passed])=>({name,passed})),ok:checks.every(x=>x[1]),readOnly:true};
}
export function formatSettingsReport(r) {
  return ['PT-ESTUDO | VERIFICAÇÃO DE CONFIGURAÇÕES','Gerado em '+r.generatedAt,r.ok?'ESTRUTURA: APROVADA':'ESTRUTURA: FALHAS ENCONTRADAS','Somente leitura: sim',...r.checks.map(x=>(x.passed?'OK':'FALHA')+' — '+x.name),'','TESTES MANUAIS AINDA NECESSÁRIOS:','- Exportação JSON e conferência do download','- Restauração em perfil de testes separado','- Cópia de recuperação após restauração','- Reinício isolado do Português','- Autorização Google Drive e leitura noutro dispositivo','','Este relatório não realiza nenhuma destas operações.'].join('\n');
}
export function renderSettings(main) {
  main.innerHTML=`<section class="settings-page" aria-labelledby="settings-heading">
    <h1 class="page-title" id="settings-heading">Configurações</h1>
    <p class="page-subtitle">Gerencie backups exclusivos do PT-ESTUDO. Antes de restaurar ou reiniciar, preserve uma cópia externa do seu progresso.</p>
    <section id="settings-backup" class="settings-card" style="background:var(--surface,#fff);border:1px solid var(--border,#e2e8f0);border-radius:10px;padding:18px;margin:12px 0">
      <h2 style="font-size:17px;margin:0 0 8px">☁️ Backup e restauração</h2>
      <p>O progresso de Português é salvo neste navegador em armazenamento separado do aplicativo administrativo. Exporte um arquivo JSON regularmente.</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin:12px 0">
        <button class="btn btn-primary" type="button" data-backup-export="1">Exportar backup do progresso (.json)</button>
        <button class="btn" type="button" data-backup-inspect="1">Verificar arquivo de backup (.json)</button>
        <button class="btn" type="button" data-backup-restore="1">Restaurar progresso de arquivo (.json)</button>
      </div>
      <input type="file" id="backup-file-input" accept=".json,application/json" style="display:none">
      <pre id="backup-validation-result" role="status" aria-live="polite" style="white-space:pre-wrap"></pre>
      <input type="file" id="backup-restore-input" accept=".json,application/json" style="display:none">
      <pre id="backup-restore-result" role="status" aria-live="polite" style="white-space:pre-wrap"></pre>
      <p class="page-subtitle">Restaurar substitui o progresso local. Não teste restauração com os dados principais.</p>
    </section>
    ${renderDriveBackupPanel()}
    ${renderRecoveryManager()}
    <details class="settings-card" style="background:var(--surface,#fff);border:1px solid var(--border,#e2e8f0);border-radius:10px;padding:16px 18px;margin:12px 0">
      <summary style="cursor:pointer;font-weight:700">Backup JSON manual no Google Drive (alternativa)</summary>
      <p>Também é possível exportar o arquivo e enviá-lo manualmente para o Drive, sem usar a conexão direta.</p>
      <p><a class="btn" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/u/0/my-drive">Abrir meu Google Drive</a></p>
      <p>Para restaurar, baixe o arquivo JSON e utilize o botão de restauração acima.</p>
    </details>
    ${card('reset','↻ Reiniciar progresso','Reinício total ou por módulo com confirmação explícita.','Ativo')}
    ${card('dashboard','▦ Preferências do Dashboard','Personalização adicional do painel.','Planejado')}
    ${card('maintenance','⚙ Diagnóstico e manutenção','Verificações estruturais e testes sem escrita no progresso.','Ativo')}
    <section class="settings-card" style="background:var(--surface,#fff);border:1px solid var(--border,#e2e8f0);border-radius:10px;padding:18px;margin:12px 0">
      <h2 style="font-size:17px">Verificação geral de configurações</h2>
      <p>Confere a presença dos controles, sem alterar dados.</p>
      <button class="btn btn-primary" type="button" data-settings-audit="1">Verificar estrutura</button>
      <button class="btn" type="button" data-settings-download="1" disabled>Baixar relatório TXT</button>
      <pre id="settings-audit-result" role="status" aria-live="polite" style="white-space:pre-wrap;margin-top:12px"></pre>
    </section>
  </section>`;
  installResetUI(main);
  installMaintenanceUI(main);
  installPhase22AuditUI(main);
  installDriveBackupUI(main);
  let report='';
  const run=main.querySelector('[data-settings-audit]');
  const download=main.querySelector('[data-settings-download]');
  run?.addEventListener('click',()=>{const r=settingsPageChecks(main);report=formatSettingsReport(r);main.querySelector('#settings-audit-result').textContent=report;download.disabled=false;});
  download?.addEventListener('click',()=>{if(!report)return;const blob=new Blob([report],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='pt-estudo-verificacao-configuracoes.txt';document.body.appendChild(a);try{a.click();}finally{a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);}});
}
