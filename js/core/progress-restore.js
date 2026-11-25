/** ADM-ESTUDO — F22/L06, correção de restaurações sucessivas.
 * Nunca elimina uma cópia de recuperação pendente para permitir uma importação.
 * As importações continuam integrais, validadas e explicitamente confirmadas.
 */
import { STORAGE_KEY } from './storage.js';
import { verifyProgressBaseline, acknowledgeProgressWrite } from './progress-conflict-guard.js';
import { BACKUP_MAX_BYTES, validateProgressBackup } from './progress-backup-validator.js';
import { normalizeRecoveryInput, protectCurrentProgress, RECOVERY_KEY } from './progress-recovery-guard.js';

export async function prepareProgressRestore(file) {
  if (!file || !/\.json$/i.test(file.name) || file.size === 0 || file.size > BACKUP_MAX_BYTES)
    return { ok: false, message: 'Selecione um JSON válido de até 20 MB.' };
  let backup;
  try { backup = JSON.parse(await file.text()); }
  catch (_) { return { ok: false, message: 'Não foi possível interpretar o arquivo JSON.' }; }
  const checked = normalizeRecoveryInput(backup);
  if (!checked.ok) return { ok: false, message: checked.message };
  return { ok: true, backup: checked.backup, validation: checked.validation, source: checked.source };
}

function downloadRecoveryCopy(raw) {
  const blob = new Blob([raw], {type:'application/json;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `adm-estudo-recuperacao-anterior-${new Date().toISOString().replace(/[:.]/g,'-')}.json`;
  document.body.appendChild(link);
  try { link.click(); }
  finally { link.remove(); setTimeout(() => URL.revokeObjectURL(url), 30000); }
}

/** Apenas valida e planeja; não escreve. Exportada para testes sem efeitos colaterais. */
export function planRepeatRestore(prepared, previousRaw, recoveryRaw) {
  if (!prepared?.ok) return {ok:false,message:'Restauração não preparada.'};
  const validation = validateProgressBackup(prepared.backup);
  if (!validation.valid) return {ok:false,message:'Arquivo de backup inválido: '+validation.errors.join(' ')};
  let replacement;
  try { replacement = JSON.stringify(prepared.backup.state); }
  catch (_) { return {ok:false,message:'Não foi possível serializar o estado do backup.'}; }
  if (previousRaw !== null) {
    try {
      const state = JSON.parse(previousRaw);
      const normalized = normalizeRecoveryInput(state);
      if (!normalized.ok) return {ok:false,message:'Progresso atual incompatível; restauração bloqueada para evitar perda de dados.'};
    } catch (_) {return {ok:false,message:'Progresso local ilegível; restauração bloqueada.'};}
  }
  if (recoveryRaw !== null) {
    try {
      const prior = normalizeRecoveryInput(JSON.parse(recoveryRaw));
      if (!prior.ok) return {ok:false,message:'Existe uma cópia local de recuperação inválida. Preserve e exporte esse arquivo antes de continuar.'};
    } catch (_) {return {ok:false,message:'A cópia de recuperação pendente está ilegível. Preserve-a antes de continuar.'};}
  }
  return {ok:true,replacement,alreadyRestored:previousRaw===replacement,hasPendingRecovery:recoveryRaw!==null};
}

/** Restaura o estado INTEIRO de um arquivo validado, com comparação da gravação.
 * Quando já existe RECOVERY_KEY, preserva-a sem substituição e baixa um
 * snapshot do estado atual, permitindo restaurações sucessivas.
 */
export function restoreProgressBackup(prepared, confirmed = false, storage = window.localStorage) {
  if (!confirmed || !prepared?.ok) return {ok:false,message:'Restauração não autorizada.'};
  const baseline = verifyProgressBaseline(storage);
  if (!baseline.ok) return {ok:false,message:'Restauração bloqueada: '+baseline.message};
  let previousRaw, recoveryRaw;
  try {
    previousRaw = storage.getItem(STORAGE_KEY);
    recoveryRaw = storage.getItem(RECOVERY_KEY);
  } catch (_) {return {ok:false,message:'Não foi possível ler o armazenamento local.'};}

  const plan = planRepeatRestore(prepared, previousRaw, recoveryRaw);
  if (!plan.ok) return plan;
  if (plan.alreadyRestored) return {ok:true,unchanged:true,message:'O arquivo já corresponde exatamente ao progresso deste dispositivo. Nenhuma substituição foi necessária.'};

  // Inicia o download antes da primeira escrita. O navegador gerencia o destino;
  // o aplicativo não consegue confirmar fisicamente o salvamento no dispositivo.
  if (previousRaw !== null) {
    try { downloadRecoveryCopy(previousRaw); }
    catch (_) {return {ok:false,message:'Não foi possível iniciar o download da cópia atual. Restauração cancelada.'};}
  }

  // Criar cópia local somente se ainda não houver uma. Nunca sobrescrevê-la.
  let createdRecovery = false;
  if (previousRaw !== null && !plan.hasPendingRecovery) {
    const protectedResult = protectCurrentProgress(previousRaw, plan.replacement, storage);
    if (!protectedResult.ok) return {ok:false,message:protectedResult.message};
    createdRecovery = !!protectedResult.recoverySaved;
  }

  const finalConflict = verifyProgressBaseline(storage);
  if (!finalConflict.ok || storage.getItem(STORAGE_KEY) !== previousRaw) {
    return {ok:false,message:'O progresso mudou durante a operação. Nenhum estado foi substituído; eventual cópia de recuperação permanece preservada.'};
  }
  if (storage.getItem(RECOVERY_KEY) !== (createdRecovery ? previousRaw : recoveryRaw)) {
    return {ok:false,message:'A cópia de recuperação foi alterada durante a operação. Nenhum estado foi substituído.'};
  }
  try {
    storage.setItem(STORAGE_KEY, plan.replacement);
    if (storage.getItem(STORAGE_KEY) !== plan.replacement) throw Error('Gravação não confirmada');
    acknowledgeProgressWrite(plan.replacement);
    return {ok:true,message:plan.hasPendingRecovery
      ? 'Progresso integral restaurado. A cópia local de recuperação anterior foi mantida sem alterações; foi solicitado o download do estado substituído. Recarregue a página.'
      : 'Progresso integral restaurado. Uma cópia local de recuperação foi guardada; foi solicitado o download do estado substituído. Recarregue a página.'};
  } catch (_) {
    try {
      // Apenas tenta reverter se o valor presente ainda for o desta operação.
      const seen = storage.getItem(STORAGE_KEY);
      if (seen === plan.replacement) {
        if (previousRaw === null) storage.removeItem(STORAGE_KEY);
        else storage.setItem(STORAGE_KEY,previousRaw);
        if (previousRaw !== null) acknowledgeProgressWrite(previousRaw);
      }
    } catch (_) {return {ok:false,message:'Falha de gravação e recuperação. Guarde os backups e não realize novas operações.'};}
    return {ok:false,message:'A restauração falhou. Confira o progresso local antes de tentar novamente.'};
  }
}
