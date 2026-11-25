/** ADM-ESTUDO F22/L02 — liga as ações existentes às telas, sem gravação automática. */
import { exportProgressBackup } from './progress-backup.js';
import { inspectProgressBackupFile } from './progress-backup-validator.js';
import { prepareProgressRestore, restoreProgressBackup } from './progress-restore.js';
import { exportRecoveryCopy, releaseRecoveryCopy } from './recovery-manager.js';
import { runBackupIntegrityChecks, formatBackupIntegrityReport } from './backup-integrity-tests.js';
import { runPersistenceDiagnostics, formatPersistenceDiagnostics } from './persistence-diagnostics.js';
import { runPedagogicalFlowTests, formatPedagogicalFlowTests } from './pedagogical-flow-tests.js';
import { runIntegrationReport, formatIntegrationReport, downloadIntegrationReport } from './integration-report.js';
import { runRestoreConflictTests, formatRestoreConflictTests } from './restore-conflict-tests.js';
import { runStorageRoundtripTests, formatStorageRoundtripTests } from './storage-roundtrip-tests.js';

let installed = false;
const statusText = (id, value) => {const el=document.getElementById(id);if(el)el.textContent=value;};
const getMessage = e => String(e?.message || e || 'Erro inesperado');

/** Todas as ações de restauração exigem seleção de arquivo e confirmações manuais. */
export function initBackupControls() {
  if (installed) return;
  installed = true;
  document.documentElement.dataset.f22BackupControls = 'ready';
  document.addEventListener('click', event => {
    const target=event.target;
    if (!(target instanceof Element)) return;
    if (target.closest('[data-backup-export]')) {
      try { const r=exportProgressBackup();window.alert(r.message); }
      catch(e) {window.alert('Exportação não iniciada: '+getMessage(e));}
      return;
    }
    if (target.closest('[data-backup-inspect]')) { document.getElementById('backup-file-input')?.click();return; }
    if (target.closest('[data-backup-restore]')) { document.getElementById('backup-restore-input')?.click();return; }
    if (target.closest('[data-recovery-export]')) {
      try {const r=exportRecoveryCopy();statusText('recovery-manager-result',r.message);}catch(e){statusText('recovery-manager-result',getMessage(e));}
      return;
    }
    if (target.closest('[data-recovery-release]')) {
      if(!window.confirm('Você já baixou e conferiu a cópia de recuperação em outro local?'))return;
      if(!window.confirm('CONFIRMAÇÃO FINAL: liberar SOMENTE a cópia local de recuperação? A ação não apaga o progresso atual.'))return;
      try {const r=releaseRecoveryCopy(true);window.alert(r.message);if(r.ok)window.location.reload();}catch(e){window.alert(getMessage(e));}
      return;
    }
    const tests = [
      ['[data-backup-integrity]',runBackupIntegrityChecks,formatBackupIntegrityReport],
      ['[data-persistence-diagnostics]',runPersistenceDiagnostics,formatPersistenceDiagnostics],
      ['[data-pedagogical-flow-tests]',runPedagogicalFlowTests,formatPedagogicalFlowTests],
      ['[data-restore-conflict-tests]',runRestoreConflictTests,formatRestoreConflictTests],
      ['[data-storage-roundtrip-tests]',runStorageRoundtripTests,formatStorageRoundtripTests]
    ];
    for (const [selector,run,format] of tests) {
      if(target.closest(selector)) {try{window.alert(format(run()));}catch(e){window.alert('Teste não concluído: '+getMessage(e));}return;}
    }
    if(target.closest('[data-integration-report]')) {
      try {const r=runIntegrationReport();window.alert(formatIntegrationReport(r));downloadIntegrationReport(r);}
      catch(e){window.alert('Relatório não concluído: '+getMessage(e));}
    }
  });
  document.addEventListener('change', async event => {
    const input=event.target;
    if(!(input instanceof HTMLInputElement)||input.type!=='file')return;
    if(input.id==='backup-file-input') {
      const file=input.files?.[0];input.value='';if(!file)return;
      statusText('backup-validation-result','Validando arquivo…');
      try {
        const r=await inspectProgressBackupFile(file);
        const parts=[r.valid?'Arquivo compatível.':'Arquivo não aprovado.',...(r.errors||[]),...(r.warnings||[]).map(x=>'Aviso: '+x)];
        if(r.summary)parts.push('Resumo: '+r.summary.modules+' módulos; '+r.summary.lessons+' aulas; '+r.summary.errors+' erros; '+r.summary.simulations+' simulados.');
        statusText('backup-validation-result',parts.join('\n'));
      } catch(e){statusText('backup-validation-result','Falha ao verificar arquivo: '+getMessage(e));}
      return;
    }
    if(input.id==='backup-restore-input') {
      const file=input.files?.[0];input.value='';if(!file)return;
      statusText('backup-restore-result','Validando arquivo…');
      try {
        const prepared=await prepareProgressRestore(file);
        if(!prepared.ok){statusText('backup-restore-result','Restauração bloqueada: '+prepared.message);return;}
        const s=prepared.validation.summary;
        if(!window.confirm('ATENÇÃO: restaurar '+file.name+' substituirá todo o progresso atual deste navegador.\n\n'+s.modules+' módulos, '+s.lessons+' aulas, '+s.errors+' erros, '+s.simulations+' simulados.\n\nVocê fez backup do seu progresso atual e salvou o arquivo em local externo?')) {
          statusText('backup-restore-result','Cancelado; nenhuma restauração executada.');return;
        }
        if(!window.confirm('CONFIRMAÇÃO FINAL: restaurar agora? A operação criará uma cópia de recuperação local e solicitará o download da versão anterior.')) {
          statusText('backup-restore-result','Cancelado; nenhuma restauração executada.');return;
        }
        const r=restoreProgressBackup(prepared,true);
        statusText('backup-restore-result',r.message);
        if(r.ok){window.alert('Restauração concluída. Confira o download da cópia anterior. O aplicativo será recarregado.');window.location.reload();}
      } catch(e){statusText('backup-restore-result','Restauração bloqueada: '+getMessage(e));}
    }
  });
}
