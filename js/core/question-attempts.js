/** F23/L04 revisado — registro aditivo e não destrutivo das tentativas de questões.
 * Armazena cada resposta sob questionHistory[id].attempts, sem alterar o schema v3.
 * Indicadores do módulo continuam usando uma única última resposta por questão.
 * Tentativas antigas não são reconstruídas ou inventadas.
 */
import { MODULES } from '../data/modules.js';
import { questionsForModule } from '../data/questions.js';
const SOURCE = new Set(['banco','exercicios','revisao','simulado']);
const obj = x => x && typeof x==='object' && !Array.isArray(x) ? x : {};
export function recordQuestionAttempt(state, id, answer, source, detail={}) {
  if (!state?.progress || typeof id!=='string' || !SOURCE.has(source) || !Number.isInteger(answer)) return false;
  let question=null;
  for (const module of MODULES) {
    question=(questionsForModule(module.id)||[]).find(q=>q.id===id);
    if (question) break;
  }
  if (!question || !Array.isArray(question.options) || answer<0 || answer>=question.options.length ||
      !Number.isInteger(question.answer) || question.answer<0 || question.answer>=question.options.length) return false;
  const now=new Date();
  const at=typeof detail.at==='string' && Number.isFinite(Date.parse(detail.at)) ? detail.at : now.toISOString();
  const entry={at,source,answer,correct:answer===question.answer};
  if (typeof detail.assessment==='string' && detail.assessment) entry.assessment=detail.assessment;
  if (source==='simulado' && typeof detail.simulationId==='string' && detail.simulationId) entry.simulationId=detail.simulationId;
  const p=state.progress;p.questionHistory??={};
  const record=p.questionHistory[id]=obj(p.questionHistory[id]);
  if (!Array.isArray(record.attempts)) record.attempts=[];
  record.attempts.push(entry);
  return true;
}
/** Preenche o motivo depois que o usuário se autoavalia no exercício. */
export function assessLatestQuestionAttempt(state,id,source,assessment) {
  const attempts=state?.progress?.questionHistory?.[id]?.attempts;
  if (!Array.isArray(attempts) || !SOURCE.has(source) || !assessment) return false;
  for (let i=attempts.length-1;i>=0;i--) {
    if (attempts[i]?.source===source && !attempts[i]?.assessment) {
      attempts[i]={...attempts[i],assessment};return true;
    }
  }
  return false;
}
