/** ADM-ESTUDO — Fase 14, lote 1. Índice de revisão unificado, não destrutivo. */
const validDate = value => typeof value === 'string' && Number.isFinite(Date.parse(value));
const safeObject = value => value && typeof value === 'object' && !Array.isArray(value) ? value : {};
const stamp = record => validDate(record?.updatedAt) ? Date.parse(record.updatedAt) : 0;
const due = record => validDate(record?.dueAt) ? record.dueAt : null;
const normalize = (kind, id, record, origin) => ({
  key: `${kind}:${id}`, kind, itemId: id,
  moduleId: record.moduleId || null, subtopicId: record.subtopicId || null,
  dueAt: due(record), lastReviewedAt: validDate(record.updatedAt) ? record.updatedAt : null,
  rating: record.reason || record.rating || null,
  intervalDays: Number.isFinite(record.intervalDays) ? record.intervalDays : null,
  origin
});
/** Reconstitui um índice derivado. Não modifica o estado nem remove agendamentos legados. */
export function buildUnifiedReviewQueue(state) {
  const progress = safeObject(state?.progress);
  const entries = new Map();
  const put = (kind, id, record, origin) => {
    if (!id || !record || !due(record)) return;
    const next = normalize(kind, String(id), record, origin);
    const prev = entries.get(next.key);
    // Entre fontes de uma mesma questão, prevalece a avaliação mais recente.
    // Empate: reviewSchedule é a fonte de agendamento explícita.
    if (!prev || stamp(record) > (prev._stamp || 0) ||
      (stamp(record) === (prev._stamp || 0) && origin === 'reviewSchedule')) {
      entries.set(next.key, {...next, _stamp: stamp(record)});
    }
  };
  for (const [id, record] of Object.entries(safeObject(progress.questionHistory))) {
    if (validDate(record?.reviewAt)) put('question', id, {...record, dueAt: record.reviewAt}, 'questionHistory');
  }
  for (const [id, record] of Object.entries(safeObject(progress.reviewSchedule))) {
    put('question', record?.questionId || id, record, 'reviewSchedule');
  }
  for (const [id, record] of Object.entries(safeObject(progress.flashcards))) {
    put('flashcard', id, record, 'flashcards');
  }
  return [...entries.values()].map(({_stamp, ...entry}) => entry)
    .sort((a,b) => Date.parse(a.dueAt)-Date.parse(b.dueAt) || a.key.localeCompare(b.key));
}
/** Atualiza apenas o índice derivado; não altera schemaVersion nem histórico. */
export function refreshUnifiedReviewQueue(state) {
  if (!state || !state.progress || typeof state.progress !== 'object') return [];
  const queue = buildUnifiedReviewQueue(state);
  state.progress.unifiedReviewQueue = queue;
  return queue;
}
export function unifiedReviewStats(state, now = Date.now()) {
  const queue = buildUnifiedReviewQueue(state);
  return {
    total: queue.length,
    due: queue.filter(item => Date.parse(item.dueAt) <= now).length,
    questions: queue.filter(item => item.kind === 'question').length,
    flashcards: queue.filter(item => item.kind === 'flashcard').length
  };
}
