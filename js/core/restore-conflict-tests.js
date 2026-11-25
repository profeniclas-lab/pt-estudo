/** Fase 20 / Lote 2: testes isolados, sem escrita no localStorage real. */
import { STORAGE_KEY } from './storage.js';
import { establishProgressBaseline, verifyProgressBaseline, acknowledgeProgressWrite } from './progress-conflict-guard.js';
import { createInitialState } from './state.js';
import { protectCurrentProgress, RECOVERY_KEY } from './progress-recovery-guard.js';

function memoryStorage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    getItem(key) { return values.has(key) ? values.get(key) : null; },
    setItem(key, value) { values.set(key, String(value)); },
    removeItem(key) { values.delete(key); }
  };
}
export function runRestoreConflictTests() {
  const results = [];
  const check = (name, passed) => results.push({ name, passed: Boolean(passed) });
  const state = createInitialState();
  const original = JSON.stringify(state);
  const newer = JSON.stringify({ ...state, metadata: { ...state.metadata, updatedAt: '2026-11-21T12:00:00.000Z' } });
  // Preserva a referência da aba real. Nunca acessa nem grava o localStorage real.
  // O baseline é estado do módulo; não o alteramos aqui para não interferir na sessão.
  const storage = memoryStorage({ [STORAGE_KEY]: original });
  const replacement = JSON.stringify({ ...state, metadata: { ...state.metadata, updatedAt: '2026-11-21T13:00:00.000Z' } });
  check('Armazenamento simulado preserva o original', storage.getItem(STORAGE_KEY) === original);
  const saved = protectCurrentProgress(original, replacement, storage);
  check('Cria cópia anterior antes da substituição', saved.ok && storage.getItem(RECOVERY_KEY) === original && storage.getItem(STORAGE_KEY) === original);
  check('Recusa segunda restauração com cópia pendente', !protectCurrentProgress(original, replacement, storage).ok);
  storage.setItem(STORAGE_KEY, newer);
  check('Cópia anterior permanece após alteração simulada', storage.getItem(RECOVERY_KEY) === original);
  check('Estado mais recente permanece intacto', storage.getItem(STORAGE_KEY) === newer);
  // Verificação pura: duas leituras sucessivas precisam coincidir para evitar sobrescrever um snapshot alterado.
  const snapshot = original;
  check('Comparação de snapshot detecta progresso alterado', storage.getItem(STORAGE_KEY) !== snapshot);
  return { ok: results.every(x => x.passed), results, note: 'Testes isolados; conflito real entre abas exige teste manual. Nenhuma escrita no armazenamento real.' };
}
export function formatRestoreConflictTests(report) {
  return ['FASE 20 — LOTE 2 | RESTAURAÇÃO E CONFLITOS', ...report.results.map(x => `${x.passed ? 'OK' : 'FALHA'} — ${x.name}`), '', report.note].join('\n');
}
export function renderRestoreConflictTestsButton() {
  return '<section aria-label="Testes de restauração"><h2 class="section-title">Restauração e conflitos</h2><p>Testes isolados sem modificar o progresso real.</p><button type="button" class="btn btn-secondary" data-restore-conflict-tests="1">Testar restauração e conflitos</button></section>';
}
