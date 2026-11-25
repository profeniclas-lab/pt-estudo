/** Fase 21, Lote 2. Classificação não destrutiva pelo último registro válido. */
export const QUESTION_STATUS_OPTIONS = Object.freeze(['todas','nao-respondidas','respondidas','acertadas','erradas']);
export function questionStatus(question, history = {}) {
  const record = history?.[question?.id];
  const answer = record?.lastAnswer;
  const valid = Number.isInteger(answer) && Array.isArray(question?.options) && answer >= 0 && answer < question.options.length;
  if (!valid) return 'nao-respondidas';
  const correct = answer === question.answer;
  return correct ? 'acertadas' : 'erradas';
}
export function matchesQuestionStatus(question, history, situation = 'todas') {
  const status = QUESTION_STATUS_OPTIONS.includes(situation) ? situation : 'todas';
  if (status === 'todas') return true;
  const current = questionStatus(question, history);
  if (status === 'respondidas') return current !== 'nao-respondidas';
  return current === status;
}
export function countQuestionStatuses(questions, history = {}) {
  const counts = {todas:0,'nao-respondidas':0,respondidas:0,acertadas:0,erradas:0};
  for (const q of questions) {
    const status = questionStatus(q, history);
    counts.todas++;
    counts[status]++;
    if (status !== 'nao-respondidas') counts.respondidas++;
  }
  return counts;
}
