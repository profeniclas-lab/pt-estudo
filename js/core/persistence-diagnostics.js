/** Fase 19 — Lote 4: ensaios isolados e inspeção não destrutiva. */
import { STORAGE_KEY } from './storage.js';
import { createInitialState } from './state.js';
import { inspectStoredProgress, validateStateForSaving } from './storage-safety.js';
import { normalizeRecoveryInput, protectCurrentProgress, RECOVERY_KEY } from './progress-recovery-guard.js';
import { validateProgressBackup } from './progress-backup-validator.js';

function mockStorage(initial = {}, failWrite = false) {
  const entries = new Map(Object.entries(initial));
  return {
    getItem(key) { return entries.has(key) ? entries.get(key) : null; },
    setItem(key, value) { if (failWrite) throw new Error('Falha simulada'); entries.set(key, String(value)); },
    removeItem(key) { entries.delete(key); },
    snapshot() { return JSON.stringify([...entries]); }
  };
}
function envelope(state) {
  return { format: 'adm-estudo-progress-backup', backupVersion: 1,
    createdAt: new Date().toISOString(), storageKey: STORAGE_KEY,
    schemaVersion: state.schemaVersion, state };
}
export function runPersistenceDiagnostics(storage = window.localStorage) {
  const checks = [];
  const check = (label, passed, detail = '') => checks.push({ label, passed: !!passed, detail });
  const original = createInitialState();
  original.progress.modules['ADM-01'] = { diagnostic: { answered: 2 } };
  const raw = JSON.stringify(original);
  const replacement = JSON.stringify(envelope({ ...original, metadata: { ...original.metadata, updatedAt: new Date().toISOString() } }));
  try {
    const empty = mockStorage();
    check('Instalação nova é aceita', inspectStoredProgress(empty).code === 'empty');
    check('Estado compatível é reconhecido', inspectStoredProgress(mockStorage({ [STORAGE_KEY]: raw })).ok);
    check('Estado incompatível é bloqueado', !inspectStoredProgress(mockStorage({ [STORAGE_KEY]: JSON.stringify({ ...original, schemaVersion: -1 }) })).ok);
    check('JSON danificado é bloqueado sem ser alterado', (() => {
      const s = mockStorage({ [STORAGE_KEY]: '{incompleto' });
      const before = s.snapshot();
      return !inspectStoredProgress(s).ok && before === s.snapshot();
    })());
    check('Estado incompleto é recusado para gravação', !validateStateForSaving({ schemaVersion: original.schemaVersion, progress: {} }));
    check('Estado válido é aceito para gravação', validateStateForSaving(original));
    check('Backup íntegro é aceito', validateProgressBackup(envelope(original)).valid);
    check('Recuperação bruta compatível é reconhecida', normalizeRecoveryInput(original).ok);
    const isolated = mockStorage({ [STORAGE_KEY]: raw });
    const before = isolated.getItem(STORAGE_KEY);
    const result = protectCurrentProgress(before, replacement, isolated);
    check('Proteção preserva estado anterior antes da restauração', result.ok && isolated.getItem(RECOVERY_KEY) === before && isolated.getItem(STORAGE_KEY) === before);
    check('Recuperação pendente impede nova restauração', !protectCurrentProgress(before, replacement, isolated).ok);
    const failing = mockStorage({ [STORAGE_KEY]: raw }, true);
    const failBefore = failing.snapshot();
    check('Falha simulada ao criar recuperação não altera progresso', !protectCurrentProgress(raw, replacement, failing).ok && failing.snapshot() === failBefore);
    check('Backup incompatível não cria recuperação', (() => {
      const s = mockStorage({ [STORAGE_KEY]: raw });
      const result = protectCurrentProgress(raw, JSON.stringify({ ...original, schemaVersion: -1 }), s);
      return !result.ok && s.getItem(RECOVERY_KEY) === null;
    })());
  } catch (error) { check('Execução dos testes isolados', false, String(error?.message || error)); }
  try {
    const status = inspectStoredProgress(storage);
    check('Progresso real: leitura e compatibilidade', status.ok, status.message);
    const before = storage.getItem(STORAGE_KEY);
    if (before !== null) {
      const parsed = JSON.parse(before);
      check('Progresso real: serialização reversível', JSON.stringify(parsed) === before, 'Verifica equivalência textual após interpretação e serialização.');
    }
    const recovery = storage.getItem(RECOVERY_KEY);
    if (recovery !== null) {
      let normalized;
      try { normalized = normalizeRecoveryInput(JSON.parse(recovery)); }
      catch (_) { normalized = { ok: false }; }
      check('Cópia de recuperação real é legível', normalized.ok);
    } else check('Cópia de recuperação real', true, 'Nenhuma cópia pendente.');
  } catch (error) { check('Leitura do armazenamento real', false, String(error?.message || error)); }
  return { ok: checks.every(c => c.passed), readOnlyOnRealStorage: true, checks };
}
export function formatPersistenceDiagnostics(report) {
  return ['DIAGNÓSTICO DE PERSISTÊNCIA — FASE 19 / LOTE 4',
    'Testes de escrita somente em armazenamento simulado. Armazenamento real: somente leitura.', '',
    ...report.checks.map(c => `${c.passed ? 'OK' : 'FALHA'} — ${c.label}${c.detail ? ': ' + c.detail : ''}`), '',
    report.ok ? 'Verificações concluídas sem alertas.' : 'Existem falhas: preserve backups e investigue antes de restaurar.',
    'Não testa recarga real, conflito simultâneo entre abas nem falhas físicas do navegador.'].join('\n');
}
export function renderPersistenceDiagnosticsButton() {
  return `<section aria-label="Diagnóstico de persistência"><h2 class="section-title">Persistência e recuperação</h2><p>Executa testes isolados de falhas e inspeciona seu progresso real sem modificá-lo.</p><button type="button" class="btn btn-secondary" data-persistence-diagnostics="1">Executar testes de persistência</button></section>`;
}
