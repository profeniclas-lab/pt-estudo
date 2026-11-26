/** PT-ESTUDO — validação não destrutiva e isolamento de identidade. */
import { STORAGE_KEY } from './storage.js';
import { STATE_SCHEMA_VERSION, APP_ID } from './state.js';
import { inspectProgressIdentity } from './progress-identity.js';
const object = x => x !== null && typeof x === 'object' && !Array.isArray(x);

export function inspectStoredProgress(storage = window.localStorage) {
  let raw;
  try { raw = storage.getItem(STORAGE_KEY); }
  catch (_) { return { ok: false, code: 'unavailable', message: 'Não foi possível acessar o armazenamento local. A gravação foi bloqueada.' }; }
  if (raw === null) return { ok: true, code: 'empty', message: 'Ainda não existe progresso salvo.' };
  let state;
  try { state = JSON.parse(raw); }
  catch (_) { return { ok: false, code: 'invalid-json', message: 'O progresso salvo contém JSON inválido. Ele foi preservado e não será sobrescrito.' }; }
  if (!object(state) || state.schemaVersion !== STATE_SCHEMA_VERSION || state.appId !== APP_ID) {
    return { ok: false, code: 'schema', message: 'Progresso incompatível com este aplicativo. Os dados originais foram preservados.' };
  }
  if (!object(state.progress) || !object(state.navigation) || !object(state.preferences) || !object(state.metadata)) {
    return { ok: false, code: 'structure', message: 'O progresso salvo possui estrutura incompleta. A gravação foi bloqueada.' };
  }
  for (const key of ['modules', 'lessons', 'diagnostics', 'exercises', 'questionHistory', 'flashcards']) {
    if (!object(state.progress[key])) return { ok: false, code: 'structure', message: `Estrutura inválida em progress.${key}. A gravação foi bloqueada.` };
  }
  if (!Array.isArray(state.progress.errors) || !Array.isArray(state.progress.reviewQueue)) {
    return { ok: false, code: 'structure', message: 'Listas essenciais do progresso inválidas. A gravação foi bloqueada.' };
  }
  const identity = inspectProgressIdentity(state);
  if (!identity.ok) return {ok:false,code:'identity',message:'O progresso salvo contém referências de outro aplicativo ou excede o limite de verificação. Os dados foram preservados sem alterações.'};
  return { ok: true, code: 'compatible', message: 'Progresso compatível.', state };
}

export function validateStateForSaving(state) {
  if (!object(state) || state.schemaVersion !== STATE_SCHEMA_VERSION || state.appId !== APP_ID ||
      !object(state.progress) || !object(state.navigation) || !object(state.preferences) || !object(state.metadata)) return false;
  return ['modules', 'lessons', 'diagnostics', 'exercises', 'questionHistory', 'flashcards'].every(k => object(state.progress[k]))
    && Array.isArray(state.progress.errors) && Array.isArray(state.progress.reviewQueue)
    && inspectProgressIdentity(state).ok;
}

export function showStorageSafetyWarning(status) {
  if (status?.ok || typeof document === 'undefined') return;
  if (document.getElementById('pt-storage-safety-warning')) return;
  const notice = document.createElement('section');
  notice.id = 'pt-storage-safety-warning';
  notice.setAttribute('role', 'alert');
  notice.style.cssText = 'position:fixed;inset:12px;z-index:2147483647;overflow:auto;background:#fff9ed;color:#352400;border:3px solid #a65c00;border-radius:12px;padding:24px;box-shadow:0 0 0 9999px rgba(0,0,0,.55);max-width:760px;max-height:calc(100vh - 24px);margin:auto;font:16px/1.5 system-ui';
  const heading = document.createElement('h2'); heading.textContent = 'Progresso protegido — gravações bloqueadas';
  const description = document.createElement('p'); description.textContent = status.message;
  const guidance = document.createElement('p'); guidance.textContent = 'Não limpe os dados do navegador. Preserve o armazenamento e os backups antes de corrigir qualquer incompatibilidade. Não há migração automática.';
  notice.append(heading, description, guidance);
  (document.body || document.documentElement).appendChild(notice);
}
