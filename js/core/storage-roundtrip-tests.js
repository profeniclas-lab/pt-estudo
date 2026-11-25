/** Fase 20 — Lote 3. Testes em armazenamento simulado; dados reais: somente leitura. */
import { STORAGE_KEY } from './storage.js';
import { createInitialState, normalizeState } from './state.js';
import { inspectStoredProgress, validateStateForSaving } from './storage-safety.js';

function mockStorage(seed = {}, options = {}) {
  const data = new Map(Object.entries(seed));
  let writes = 0;
  return {
    getItem(key) { if (options.failRead) throw Error('Leitura indisponível'); return data.has(key) ? data.get(key) : null; },
    setItem(key, value) { if (options.failWrite || (options.failAfter != null && writes >= options.failAfter)) throw Error('Falha simulada de gravação'); writes++; data.set(key, String(value)); },
    removeItem(key) { data.delete(key); },
    snapshot() { return JSON.stringify([...data]); }
  };
}

function simulatedSave(storage, state) {
  const checked = inspectStoredProgress(storage);
  if (!checked.ok || !validateStateForSaving(state)) return { ok: false, message: checked.message };
  const previous = storage.getItem(STORAGE_KEY);
  const next = JSON.stringify(state);
  try {
    // Simulação da verificação de conflito: o estado precisa permanecer igual até a escrita.
    if (storage.getItem(STORAGE_KEY) !== previous) return { ok: false, message: 'Conflito detectado' };
    storage.setItem(STORAGE_KEY, next);
    if (storage.getItem(STORAGE_KEY) !== next) return { ok: false, message: 'Gravação não confirmada' };
    return { ok: true };
  } catch (error) { return { ok: false, message: String(error.message) }; }
}

export function runStorageRoundtripTests(realStorage = window.localStorage) {
  const checks = [];
  const check = (name, passed, detail = '') => checks.push({ name, passed: !!passed, detail });
  const state = createInitialState();
  state.progress.modules['ADM-01'] = { percentage: 42, completed: false };
  state.progress.questionHistory['Q-EXEMPLO'] = [{ correct: true, at: '2026-01-01T00:00:00.000Z' }];
  state.progress.errors.push({ questionId: 'Q-ERRO', count: 1 });
  const original = JSON.stringify(state);
  try {
    const isolated = mockStorage();
    check('Primeiro salvamento em instalação vazia', simulatedSave(isolated, state).ok);
    const loaded = inspectStoredProgress(isolated);
    check('Recarga simulada mantém módulos, histórico e erros', loaded.ok && JSON.stringify(normalizeState(loaded.state).progress) === JSON.stringify(state.progress));
    state.progress.modules['ADM-01'].percentage = 75;
    check('Segundo salvamento confirmado', simulatedSave(isolated, state).ok);
    check('Segunda recarga conserva a última alteração', inspectStoredProgress(isolated).state?.progress.modules['ADM-01']?.percentage === 75);
    const corrupt = mockStorage({ [STORAGE_KEY]: '{arquivo-incompleto' });
    const corruptBefore = corrupt.snapshot();
    check('JSON corrompido não é substituído', !simulatedSave(corrupt, state).ok && corrupt.snapshot() === corruptBefore);
    const incompatible = mockStorage({ [STORAGE_KEY]: JSON.stringify({ ...state, schemaVersion: -1 }) });
    const incompatibleBefore = incompatible.snapshot();
    check('Esquema incompatível não é substituído', !simulatedSave(incompatible, state).ok && incompatible.snapshot() === incompatibleBefore);
    const failWrite = mockStorage({ [STORAGE_KEY]: original }, { failWrite: true });
    check('Falha de gravação preserva conteúdo anterior', !simulatedSave(failWrite, state).ok && failWrite.snapshot() === mockStorage({ [STORAGE_KEY]: original }).snapshot());
    const failRead = mockStorage({ [STORAGE_KEY]: original }, { failRead: true });
    check('Falha de leitura bloqueia gravação', !simulatedSave(failRead, state).ok);
    const incomplete = { ...state, progress: { modules: {} } };
    check('Estado incompleto não é gravado', !simulatedSave(isolated, incomplete).ok);
  } catch (error) { check('Execução dos testes simulados', false, String(error?.message || error)); }
  try {
    const before = realStorage.getItem(STORAGE_KEY);
    const inspected = inspectStoredProgress(realStorage);
    const after = realStorage.getItem(STORAGE_KEY);
    check('Inspeção real sem alteração dos dados', before === after, inspected.message);
    check('Compatibilidade do progresso real', inspected.ok, inspected.message);
  } catch (error) { check('Leitura do armazenamento real', false, String(error?.message || error)); }
  return { ok: checks.every(c => c.passed), checks, realStorageReadOnly: true };
}

export function formatStorageRoundtripTests(report) {
  return ['FASE 20 — LOTE 3 | TESTES DE CARREGAMENTO E SALVAMENTO',
    'Escritas apenas em Map simulado; armazenamento real consultado sem modificações.', '',
    ...report.checks.map(c => `${c.passed ? 'OK' : 'FALHA'} — ${c.name}${c.detail ? ': ' + c.detail : ''}`), '',
    report.ok ? 'Verificações concluídas sem falhas.' : 'Há verificações pendentes ou falhas. Preserve backups.',
    'Limites: não executa o saveState real, não testa fechamento físico do navegador, concorrência atômica ou quota real.'].join('\n');
}

export function renderStorageRoundtripTestsButton() {
  return '<section aria-label="Testes de carregamento e salvamento"><h2 class="section-title">Testes de carregamento e salvamento</h2><p>Simula salvamentos sucessivos, recargas e falhas. Seu progresso real é somente lido.</p><button type="button" class="btn btn-secondary" data-storage-roundtrip-tests="1">Testar carregamento e salvamento</button></section>';
}
