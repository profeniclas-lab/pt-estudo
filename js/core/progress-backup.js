/** Fase 18 — Lote 1: exportação não destrutiva do estado salvo. */
import { STORAGE_KEY } from './storage.js';

export function exportProgressBackup() {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw === null) return { ok: false, message: 'Nenhum progresso salvo foi encontrado neste navegador.' };
  let state;
  try { state = JSON.parse(raw); } catch (_) { return { ok: false, message: 'O progresso armazenado não é um JSON válido. Nada foi alterado.' }; }
  if (!state || typeof state !== 'object' || Array.isArray(state) || !state.progress || typeof state.progress !== 'object') {
    return { ok: false, message: 'A estrutura do progresso salvo não é reconhecida. Nada foi alterado.' };
  }
  const createdAt = new Date().toISOString();
  const backup = {
    format: 'adm-estudo-progress-backup',
    backupVersion: 1,
    createdAt,
    storageKey: STORAGE_KEY,
    schemaVersion: state.schemaVersion ?? null,
    state
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `adm-estudo-backup-${createdAt.slice(0, 10)}-${createdAt.slice(11, 19).replace(/:/g, '-')}.json`;
  document.body.appendChild(link);
  try { link.click(); } finally { link.remove(); window.setTimeout(() => URL.revokeObjectURL(url), 30000); }
  return { ok: true, message: 'Download do backup solicitado. Confirme que o arquivo foi salvo no seu dispositivo.' };
}
