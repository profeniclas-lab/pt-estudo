/** Fase 19 — Lote 2: gerenciamento não destrutivo de cópias locais de recuperação. */
import { RECOVERY_KEY, recoveryStatus, clearRecoveryCopy } from './progress-recovery-guard.js';
import { normalizeRecoveryInput } from './progress-recovery-guard.js';

const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export function recoveryCopyInfo(storage = window.localStorage) {
  try {
    const raw = storage.getItem(RECOVERY_KEY);
    if (raw === null) return { exists:false, valid:false, message:'Nenhuma cópia anterior pendente.' };
    let parsed;
    try { parsed = JSON.parse(raw); } catch (_) { return { exists:true, valid:false, bytes:new Blob([raw]).size, message:'Cópia ilegível: JSON inválido. Preserve e exporte o arquivo antes de qualquer alteração.' }; }
    const checked = normalizeRecoveryInput(parsed);
    return { exists:true, valid:checked.ok, bytes:new Blob([raw]).size,
      updatedAt:checked.ok ? checked.backup.state?.metadata?.updatedAt : null,
      message:checked.ok ? 'Cópia de recuperação compatível encontrada.' : 'Cópia incompatível ou inválida. Exporte-a para análise.' };
  } catch (_) { return { exists:true, valid:false, inaccessible:true, message:'Não foi possível acessar o armazenamento local.' }; }
}

export function exportRecoveryCopy(storage = window.localStorage) {
  let raw;
  try { raw = storage.getItem(RECOVERY_KEY); }
  catch (_) { return {ok:false,message:'Não foi possível ler a cópia local.'}; }
  if (raw === null) return {ok:false,message:'Não existe cópia local pendente.'};
  try {
    const blob = new Blob([raw],{type:'application/json;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `adm-estudo-recuperacao-local-${new Date().toISOString().replace(/[:.]/g,'-')}.json`;
    document.body.appendChild(a);
    try { a.click(); } finally { a.remove(); window.setTimeout(()=>URL.revokeObjectURL(url),30000); }
    return {ok:true,message:'Download solicitado. Confira se o arquivo foi realmente salvo e guarde uma cópia externa antes de liberar a recuperação local.'};
  } catch (_) { return {ok:false,message:'Não foi possível iniciar o download; a cópia local permanece intacta.'}; }
}

export function releaseRecoveryCopy(confirmed, storage = window.localStorage) {
  if (!confirmed) return {ok:false,message:'Confirmação necessária; nada foi removido.'};
  const info = recoveryCopyInfo(storage);
  if (!info.exists) return {ok:false,message:'Não existe cópia pendente.'};
  if (info.inaccessible) return {ok:false,message:'Armazenamento inacessível.'};
  const result = clearRecoveryCopy(true, storage);
  if (!result.ok) return result;
  try {
    if (storage.getItem(RECOVERY_KEY) !== null) return {ok:false,message:'A cópia ainda está presente. Verifique o armazenamento.'};
  } catch (_) { return {ok:false,message:'Não foi possível verificar a remoção.'}; }
  return {ok:true,message:'Cópia local liberada. Os dados atuais do estudo não foram alterados.'};
}

export function renderRecoveryManager() {
  const info = recoveryCopyInfo();
  const detail = info.exists
    ? `<p>${escapeHtml(info.message)} ${info.bytes !== undefined ? `(${info.bytes} bytes)` : ''}</p>${info.updatedAt ? `<p>Última atualização do estado anterior: ${escapeHtml(info.updatedAt)}</p>` : ''}
       <button type="button" class="btn" data-recovery-export="1">Baixar cópia anterior (.json)</button>
       <button type="button" class="btn" data-recovery-release="1">Liberar cópia local</button>`
    : `<p>${escapeHtml(info.message)}</p>`;
  return `<section aria-label="Gerenciar recuperação anterior" style="margin:16px 0;padding:14px;border:1px solid #aaa;border-radius:8px">
    <h2 class="section-title">Cópia local de recuperação</h2>
    ${detail}
    <p class="page-subtitle">Esta cópia é o progresso anterior a uma restauração. Para restaurá-la, baixe o JSON, confirme que foi salvo, libere a cópia local e use “Restaurar progresso de arquivo”. Não libere a cópia sem preservar o arquivo externamente.</p>
    <p id="recovery-manager-result" role="status" aria-live="polite"></p>
  </section>`;
}
