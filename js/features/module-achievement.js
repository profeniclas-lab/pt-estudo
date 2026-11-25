/** Fase 23 — Lote 4. Todos os indicadores são derivados; não alteram o estado. */
import { calculatePartialAchievement } from '../core/progress.js';
import { getDiagnosticSummary, DIAGNOSTIC_OPTIONS } from './diagnostic.js';
import { lessonStats } from './lessons.js';
import { exerciseSummary } from './exercises.js';
import { getLesson } from '../data/lessons.js';
import { questionsForModule } from '../data/questions.js';

const ratingScores = {sei:100,duvida:50,nao:0};
const own = (x,k) => Object.prototype.hasOwnProperty.call(x,k);
const obj = x => x && typeof x === 'object' && !Array.isArray(x) ? x : {};
const pct = (numerator,denominator) => denominator>0 ? 100*numerator/denominator : 0;

/** Conta APENAS respostas dadas no Banco de Questões (não nos exercícios).
 * Histórico recente: questionHistory[id].bankAttempt; legado: assessment acerto_banco / erro_banco.
 * Questões substituídas por revisão editorial deixam de contar até serem respondidas.
 */
export function bankAchievementEvidence(state, module) {
  const questions = (questionsForModule(module.id) || []).filter(q=>q?.id && Array.isArray(q.options) && Number.isInteger(q.answer));
  const history = obj(state?.progress?.questionHistory);
  const seen = new Set();
  let answered=0, correct=0;
  for (const q of questions) {
    if (seen.has(q.id)) continue;
    seen.add(q.id);
    const record = obj(history[q.id]);
    const bank = obj(record.bankAttempt);
    // Se ainda não houver evidência persistente, aceita o último registro marcado como originado do Banco.
    const answer = Number.isInteger(bank.lastAnswer) ? bank.lastAnswer :
      (['acerto_banco','erro_banco'].includes(record.assessment) ? record.lastAnswer : null);
    if (!Number.isInteger(answer) || answer<0 || answer>=q.options.length) continue;
    answered++;
    if (answer===q.answer) correct++;
  }
  return {answered,correct,total:seen.size,
    score: answered ? pct(correct,answered) : 0,
    coverage: seen.size ? pct(answered,seen.size) : 0};
}

export function moduleAchievement(state,module) {
  const diagnostic = getDiagnosticSummary(state,module.id);
  const lessons = lessonStats(state,module);
  const exercises = exerciseSummary(state,module.id);
  const scores = {};
  if (diagnostic?.answered>0 && diagnostic.total>0) {
    const vals=(diagnostic.cards||[]).map(card=>diagnostic.answers?.[card.subtopicId]).filter(v=>own(DIAGNOSTIC_OPTIONS,v));
    scores.diagnostic={available:true,score: vals.length ? vals.reduce((n,v)=>n+DIAGNOSTIC_OPTIONS[v],0)/vals.length : 0,
      coverage:pct(diagnostic.answered,diagnostic.total)};
  }
  if (lessons?.total>0) {
    if (lessons.completed>0) scores.lessonCompletion={available:true,score:100,coverage:pct(lessons.completed,lessons.total)};
    const applicable = module.subtopics.filter(t=>getLesson(t.id));
    const values=applicable.map(t=>state.progress?.lessons?.[t.id]?.rating).filter(v=>own(ratingScores,v));
    if (values.length) scores.lessonSelfAssessment={available:true,
      score:values.reduce((n,v)=>n+ratingScores[v],0)/values.length,
      coverage:pct(values.length,lessons.total)};
  }
  if (exercises?.answered>0 && exercises.total>0) scores.exercises={available:true,
    score:pct(exercises.correct,exercises.answered),coverage:pct(exercises.answered,exercises.total)};
  const bank = bankAchievementEvidence(state,module);
  // O Banco vale 20 pontos pela taxa de acerto entre distintas respondidas.
  // A cobertura total do Banco NÃO reduz o aproveitamento; integra o indicador de domínio.
  if (bank.answered>0) scores.bank={available:true,score:bank.score,coverage:100};
  return {...calculatePartialAchievement(scores),bankStats:bank};
}
