/** Fase 21 — Lote 3: leitura de desempenho por ID; não modifica o estado. */
const safe = x => x && typeof x === 'object' && !Array.isArray(x) ? x : {};
const reasons = new Set(['seguro','sei','duvida','chute','desconhecimento','interpretacao','desatencao','pegadinha','nao','acerto_banco','erro_banco']);
/**
 * Uma questão conta uma vez, conforme a última resposta válida no histórico.
 * Classificações só são atribuídas quando o registro sustenta a inferência.
 */
export function questionPerformance(questions = [], state = {}) {
  const history = safe(state?.progress?.questionHistory);
  const seen = new Set();
  const result = {total:0,answered:0,unanswered:0,correct:0,wrong:0,
    guessedCorrect:0,unknownWrong:0,secureCorrect:0,doubtCorrect:0,
    unclassifiedCorrect:0,unclassifiedWrong:0,rate:null,knowledgeRate:null};
  for (const q of questions) {
    if (!q || typeof q.id !== 'string' || !Array.isArray(q.options) ||
        !Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length || seen.has(q.id)) continue;
    seen.add(q.id); result.total++;
    const record = safe(history[q.id]);
    const answer = record.lastAnswer;
    if (!Number.isInteger(answer) || answer < 0 || answer >= q.options.length) {result.unanswered++;continue;}
    result.answered++;
    const correct = answer === q.answer;
    const reason = reasons.has(record.assessment) ? record.assessment : null;
    if (correct) {
      result.correct++;
      if (reason === 'chute') result.guessedCorrect++;
      else if (reason === 'seguro' || reason === 'sei') result.secureCorrect++;
      else if (reason === 'duvida') result.doubtCorrect++;
      else result.unclassifiedCorrect++;
    } else {
      result.wrong++;
      if (reason === 'desconhecimento' || reason === 'nao') result.unknownWrong++;
      else if (!reason || reason === 'seguro' || reason === 'sei' || reason === 'duvida' || reason === 'chute' || reason === 'acerto_banco') result.unclassifiedWrong++;
    }
  }
  if (result.answered) {
    result.rate = Math.round(result.correct / result.answered * 1000) / 10;
    result.knowledgeRate = Math.round(result.secureCorrect / result.answered * 1000) / 10;
  }
  return result;
}
export function performanceRateColor(rate) {
  return rate === null || !Number.isFinite(rate) ? 'neutral' : rate >= 60 ? 'green' : 'red';
}
