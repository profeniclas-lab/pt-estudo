/** Fase 14, lote 2: registra eventos de questões na agenda unificada.
 * Não altera schema, não elimina histórico e não duplica entradas por ID.
 */
import { scheduleAdaptiveReview } from './adaptive-review.js';
import { refreshUnifiedReviewQueue } from './spaced-review.js';
const DAY = 86400000;
const obj = value => value && typeof value === 'object' && !Array.isArray(value) ? value : {};
/** Banco de questões: agenda provisória sem autoavaliação (acerto: 7 dias; erro: 1 dia). */
export function recordBankReview(state, question, choice) {
  if (!state || !question || typeof question.id !== 'string' || !Number.isInteger(choice)) return false;
  if (!Array.isArray(question.options) || choice < 0 || choice >= question.options.length) return false;
  state.progress ??= {};
  const p = state.progress;
  const now = new Date();
  const correct = choice === question.answer;
  const adaptive = scheduleAdaptiveReview(state, 'question', question.id, correct ? 'acerto_banco' : 'erro_banco');
  const intervalDays = adaptive.intervalDays;
  const dueAt = new Date(now.getTime() + intervalDays * DAY).toISOString();
  const updatedAt = now.toISOString();
  const id = question.id;
  p.questionHistory = obj(p.questionHistory);
  p.reviewSchedule = obj(p.reviewSchedule);
  p.questionHistory[id] = {
    ...obj(p.questionHistory[id]), lastAnswer: choice, correct,
    assessment: correct ? 'acerto_banco' : 'erro_banco',
    reviewAt: dueAt, intervalDays, updatedAt
  };
  p.reviewSchedule[id] = {
    ...obj(p.reviewSchedule[id]), questionId: id,
    moduleId: question.moduleId || null,
    subtopicId: question.subtopicId || null,
    reason: correct ? 'acerto_banco' : 'erro_banco',
    correct, intervalDays, dueAt, updatedAt
  };
  if (!correct) {
    if (!Array.isArray(p.errors)) p.errors = [];
    if (!p.errors.some(e => e?.questionId === id)) {
      p.errors.push({questionId: id, moduleId: question.moduleId || null,
        subtopicId: question.subtopicId || null, createdAt: updatedAt});
    }
  }
  refreshUnifiedReviewQueue(state);
  return true;
}
/** Exercícios já registram agenda e histórico: apenas reconcilia o índice. */
export function syncExerciseReview(state) {
  refreshUnifiedReviewQueue(state);
  return true;
}
