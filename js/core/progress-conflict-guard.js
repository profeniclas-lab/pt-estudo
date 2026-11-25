/** Fase 19, Lote 3 — controle otimista entre abas, sem modificar progresso. */
import { STORAGE_KEY } from './storage.js';
let expectedRaw;
let changedExternally = false;
let listenerInstalled = false;

/** Registrar o valor exato carregado; null representa armazenamento inicialmente vazio. */
export function establishProgressBaseline(raw) {
  if (raw !== null && typeof raw !== 'string') throw Error('Snapshot inválido.');
  expectedRaw = raw;
  changedExternally = false;
  if (!listenerInstalled && typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('storage', event => {
      if (event.key === STORAGE_KEY || event.key === null) changedExternally = true;
    });
    listenerInstalled = true;
  }
}

export function verifyProgressBaseline(storage = window.localStorage) {
  if (expectedRaw === undefined) return { ok:false, code:'not-initialized', message:'Referência de progresso não inicializada. Gravação bloqueada.' };
  if (changedExternally) return { ok:false, code:'external-change', message:'Outra aba alterou ou limpou o progresso. Esta aba não pode salvar até ser recarregada. Preserve suas respostas antes de atualizar.' };
  try {
    const current = storage.getItem(STORAGE_KEY);
    if (current !== expectedRaw) return { ok:false, code:'stale', message:'O progresso salvo mudou desde que esta aba foi aberta. Gravação bloqueada para evitar sobrescrita. Atualize a página após guardar um backup.' };
    return { ok:true };
  } catch (_) { return { ok:false, code:'unavailable', message:'Não foi possível verificar o armazenamento. Gravação bloqueada.' }; }
}

/** Atualização somente após escrita confirmada pelo armazenamento. */
export function acknowledgeProgressWrite(raw) {
  if (typeof raw !== 'string') throw Error('Snapshot gravado inválido.');
  expectedRaw = raw;
}

export function progressConflictStatus() {
  return { initialized: expectedRaw !== undefined, changedExternally };
}
