/** Fase 20 — Lote 4. Ensaios reais das funções pedagógicas, somente em estado isolado. */
import { createInitialState } from './state.js';
import { MODULES } from '../data/modules.js';
import { questionsForModule } from '../data/questions.js';
import { getDiagnosticSummary, saveDiagnosticAnswer } from '../features/diagnostic.js';
import { saveLessonProgress } from '../features/lessons.js';
import { getLesson } from '../data/lessons.js';
import { createExerciseSession, answerExercise, assessExercise } from '../features/exercises.js';
import { startSimulado, answerSimulado, finishSimulado } from '../features/simulados.js';
import { beginReview, answerReview, assessReview } from '../features/review-errors.js';
import { refreshUnifiedReviewQueue } from './spaced-review.js';
import { validateStateForSaving } from './storage-safety.js';

const clone = x => JSON.parse(JSON.stringify(x));
const snapshot = state => JSON.stringify(state);
const record = (checks, name, fn) => {
  try {
    const result = fn();
    checks.push({ name, status: result === null ? 'IGNORADO' : result ? 'OK' : 'FALHA' });
  } catch (error) {
    checks.push({ name, status: 'FALHA', detail: String(error?.message || error) });
  }
};

/** Não lê nem escreve localStorage; nenhuma ação é feita no estado real da aplicação. */
export function runPedagogicalFlowTests() {
  const checks = [];
  const state = createInitialState();
  const initial = snapshot(state);
  const module = MODULES.find(m => getDiagnosticSummary(state, m.id)?.cards?.length);
  let diagnosticCard;
  record(checks, 'Diagnóstico: registrar e preservar resposta', () => {
    if (!module) return null;
    diagnosticCard = getDiagnosticSummary(state, module.id).cards[0];
    if (!diagnosticCard) return null;
    if (!saveDiagnosticAnswer(state, module.id, diagnosticCard.subtopicId, 'duvida')) return false;
    return clone(state).progress.diagnostics[module.id].answers[diagnosticCard.subtopicId] === 'duvida';
  });
  record(checks, 'Aula: conclusão e autoavaliação persistem', () => {
    const subtopic = MODULES.flatMap(m => m.subtopics).find(t => getLesson(t.id));
    if (!subtopic) return null;
    return saveLessonProgress(state, subtopic.id, 'complete') &&
      saveLessonProgress(state, subtopic.id, 'rating', 'sei') &&
      clone(state).progress.lessons[subtopic.id].completed === true &&
      clone(state).progress.lessons[subtopic.id].rating === 'sei';
  });
  let exerciseQuestion, exerciseModule;
  record(checks, 'Exercícios: iniciar, responder e autoavaliar', () => {
    exerciseModule = MODULES.find(m => {
      const pool = questionsForModule(m.id);
      return pool.some(q => q.difficulty === 'media') && pool.filter(q => q.difficulty === 'dificil').length >= 6;
    });
    if (!exerciseModule) return null;
    if (!createExerciseSession(state, exerciseModule.id)) return false;
    const session = state.progress.exercises[exerciseModule.id];
    exerciseQuestion = questionsForModule(exerciseModule.id).find(q => q.id === session.ids[0]);
    if (!exerciseQuestion) return false;
    if (!answerExercise(state, exerciseModule.id, exerciseQuestion.id, exerciseQuestion.answer)) return false;
    if (!assessExercise(state, exerciseModule.id, exerciseQuestion.id, 'seguro')) return false;
    const restored = clone(state).progress.exercises[exerciseModule.id];
    return restored.answers[exerciseQuestion.id] === exerciseQuestion.answer && !!restored.assessments[exerciseQuestion.id];
  });
  record(checks, 'Banco de questões: catálogo mantém IDs únicos por módulo', () => {
    const all = MODULES.flatMap(m => questionsForModule(m.id));
    if (!all.length) return null;
    return all.every(q => typeof q.id === 'string' && q.id.length > 0) &&
      new Set(all.map(q => q.id)).size === all.length;
  });
  let simQuestion;
  record(checks, 'Simulado: iniciar, responder e registrar resultado', () => {
    const started = startSimulado(state, 'todas', 5);
    if (!started.ok) return null;
    const active = state.progress.simulados.active;
    const lookup = new Map(MODULES.flatMap(m => questionsForModule(m.id)).map(q => [q.id, q]));
    for (const id of active.ids) {
      const q = lookup.get(id);
      if (!q || !answerSimulado(state, id, q.answer)) return false;
      simQuestion ||= q;
    }
    if (!finishSimulado(state)) return false;
    const restored = clone(state).progress.simulados;
    return restored.history.length === 1 && restored.history[0].total === 5 && restored.history[0].correct === 5;
  });
  record(checks, 'Revisão: registrar tentativa e agendamento', () => {
    const q = exerciseQuestion || simQuestion;
    if (!q) return null;
    if (!beginReview(state, q.id)) return false;
    if (!answerReview(state, q.id, q.answer)) return false;
    if (!assessReview(state, q.id, 'seguro')) return false;
    return !!clone(state).progress.reviewSchedule?.[q.id]?.dueAt;
  });
  record(checks, 'Fila de revisões: reconstrução preserva registros', () => {
    const before = clone(state).progress.reviewSchedule || {};
    refreshUnifiedReviewQueue(state);
    const after = clone(state);
    return JSON.stringify(after.progress.reviewSchedule || {}) === JSON.stringify(before) &&
      Array.isArray(after.progress.reviewQueue);
  });
  record(checks, 'Serialização: progresso pedagógico permanece íntegro', () => {
    const restored = JSON.parse(snapshot(state));
    return snapshot(restored) === snapshot(state) && validateStateForSaving(restored);
  });
  record(checks, 'Isolamento: estado inicial não foi reutilizado', () => initial !== snapshot(state));
  return {
    ok: checks.every(c => c.status !== 'FALHA'),
    complete: checks.every(c => c.status === 'OK'),
    isolated: true,
    checks
  };
}

export function formatPedagogicalFlowTests(result) {
  return [
    'FASE 20 — LOTE 4: FLUXOS PEDAGÓGICOS',
    'Testes sobre estado temporário. Nenhuma leitura ou escrita em localStorage.', '',
    ...result.checks.map(c => `${c.status} — ${c.name}${c.detail ? ': ' + c.detail : ''}`), '',
    result.complete ? 'Todos os testes executados passaram.' : result.ok ? 'Sem falhas, mas há testes ignorados por ausência de conteúdo.' : 'Há falhas: consulte os itens acima.',
    'Este ensaio não substitui testes de interface, reload real ou persistência no navegador.'
  ].join('\n');
}

export function renderPedagogicalFlowTestsButton() {
  return '<section aria-label="Testes dos fluxos pedagógicos"><h2 class="section-title">Testes dos fluxos pedagógicos</h2><p>Executa operações reais em um estado temporário, sem modificar seu progresso.</p><button type="button" class="btn btn-secondary" data-pedagogical-flow-tests="1">Testar fluxos pedagógicos</button></section>';
}
