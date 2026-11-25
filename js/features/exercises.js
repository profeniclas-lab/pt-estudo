import { scheduleAdaptiveReview } from '../core/adaptive-review.js';
import { questionsForModule } from '../data/questions.js';
import { syncExerciseReview } from '../core/review-events.js';
import { getModuleById } from '../data/modules.js';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const abc=['A','B','C','D','E'];
// Compatibilidade: tentativas antigas não possuem optionOrders.
const orderFor=(session,q)=>{
 const saved=session?.optionOrders?.[q.id];
 return Array.isArray(saved)&&saved.length===q.options.length&&
  new Set(saved).size===q.options.length&&saved.every(i=>Number.isInteger(i)&&i>=0&&i<q.options.length)
  ?saved:q.options.map((_,i)=>i);
};
const REVIEW = Object.freeze({seguro:{days:7,label:'Acertei com segurança'},duvida:{days:3,label:'Acertei com dúvida'},chute:{days:1,label:'Acertei chutando'},desconhecimento:{days:1,label:'Errei por desconhecimento'},pegadinha:{days:2,label:'Errei por pegadinha'},interpretacao:{days:2,label:'Errei por interpretação'},desatencao:{days:3,label:'Errei por desatenção'}});
const selfAssessOptions=(correct)=>correct?['seguro','duvida','chute']:['desconhecimento','pegadinha','interpretacao','desatencao'];
const shuffle=a=>{const x=[...a];for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]];}return x;};
export function exercisePool(moduleId){return questionsForModule(moduleId)}
export function createExerciseSession(state,moduleId){
 const all=exercisePool(moduleId),base=all.filter(q=>q.difficulty==='media');
 const hard=all.filter(q=>q.difficulty==='dificil');
 if(!base.length||hard.length<6)return false;
 // Distribui as seis questões difíceis por subtópico sempre que possível.
 // Primeiro escolhe uma de cada subtópico; depois completa as vagas com
 // questões restantes, sem repetir ID, embaralhando a cada tentativa.
 const grouped=new Map();
 for(const q of shuffle(hard)){
  const key=q.subtopicId||'sem-subtopico';
  if(!grouped.has(key))grouped.set(key,[]);
  grouped.get(key).push(q);
 }
 const groups=shuffle([...grouped.values()]);
 const chosen=[];
 for(const group of groups){
  if(chosen.length>=6)break;
  chosen.push(group.shift());
 }
 const remaining=shuffle(groups.flat());
 chosen.push(...remaining.slice(0,6-chosen.length));
 const ids=[...base,...chosen].map(q=>q.id);
 // A permutação é criada uma única vez e persistida para toda a tentativa.
 // Cada número aponta para o índice ORIGINAL no banco de questões.
 const optionOrders=Object.fromEntries(ids.map(id=>{
  const q=all.find(item=>item.id===id);
  return [id,q.type==='ce'?[0,1]:shuffle(q.options.map((_,i)=>i))];
 }));
 state.progress.exercises[moduleId]={ids,optionOrders,answers:{},assessments:{},cursor:0,startedAt:new Date().toISOString(),finishedAt:null};
 return true;
}
export function exerciseSummary(state,moduleId){
 const s=state.progress?.exercises?.[moduleId];if(!s?.ids?.length)return null;
 const pool=exercisePool(moduleId),correct=s.ids.reduce((n,id)=>{const q=pool.find(q=>q.id===id);return n+(q&&s.answers?.[id]===q.answer?1:0)},0);
 const answered=s.ids.filter(id=>Number.isInteger(s.answers?.[id])).length;
 const assessed=s.ids.filter(id=>!!s.assessments?.[id]).length;
 return {total:s.ids.length,answered,assessed,correct,finished:!!s.finishedAt,score:Math.round(correct/s.ids.length*100)};
}
export function answerExercise(state,moduleId,qid,choice){
 const s=state.progress?.exercises?.[moduleId],q=exercisePool(moduleId).find(x=>x.id===qid);
 if(!s||!q||s.finishedAt||!s.ids.includes(qid)||Number.isInteger(s.answers[qid])||!Number.isInteger(choice)||choice<0||choice>=q.options.length)return false;
 s.answers[qid]=choice;
 const now=new Date().toISOString();
 state.progress.questionHistory[qid]={lastAnswer:choice,correct:choice===q.answer,updatedAt:now};
 if(choice!==q.answer){
  const errors=state.progress.errors;
  if(Array.isArray(errors)&&!errors.some(e=>e?.questionId===qid))errors.push({questionId:qid,moduleId,subtopicId:q.subtopicId,createdAt:now});
 }
 // A atividade só termina quando todas as respostas e autoavaliações forem registradas.
 return true;
}

export function assessExercise(state,moduleId,qid,reason){
 const s=state.progress?.exercises?.[moduleId],q=exercisePool(moduleId).find(x=>x.id===qid);
 if(!s||!q||s.finishedAt||s.ids[s.cursor]!==qid||!Number.isInteger(s.answers?.[qid])||s.assessments?.[qid]||!REVIEW[reason])return false;
 const correct=s.answers[qid]===q.answer;
 if(!selfAssessOptions(correct).includes(reason))return false;
 const adaptive=scheduleAdaptiveReview(state,'question',qid,reason);
 const now=new Date(),due=new Date(adaptive.dueAt);
 s.assessments??={};s.assessments[qid]={reason,correct,assessedAt:now.toISOString(),reviewAt:due.toISOString(),intervalDays:adaptive.intervalDays};
 state.progress.questionHistory??={};state.progress.questionHistory[qid]={...(state.progress.questionHistory[qid]||{}),assessment:reason,reviewAt:due.toISOString(),intervalDays:adaptive.intervalDays,updatedAt:now.toISOString()};
 // A fila usa o mesmo identificador da questão e é atualizada a cada nova tentativa.
 state.progress.reviewSchedule??={};state.progress.reviewSchedule[qid]={questionId:qid,moduleId,subtopicId:q.subtopicId,reason,correct,intervalDays:adaptive.intervalDays,dueAt:due.toISOString(),updatedAt:now.toISOString()};
 syncExerciseReview(state);
 if(s.ids.every(id=>Number.isInteger(s.answers[id])&&!!s.assessments[id]))s.finishedAt=now.toISOString();
 return true;
}

export function renderExercises(main,moduleId,state){
 const all=exercisePool(moduleId),s=state.progress?.exercises?.[moduleId];
 if(!all.length){main.innerHTML='<section class="exercise-panel"><button class="btn" data-action="exercise-back">← Voltar ao módulo</button><h1>Exercícios em preparação</h1><p>As questões deste módulo ainda não foram elaboradas.</p></section>';return;}
 const summary=exerciseSummary(state,moduleId);
 if(!s?.ids?.length){main.innerHTML=`<section class="exercise-panel"><button class="btn" data-action="exercise-back">← Voltar ao módulo</button><h1>Praticar o que aprendi</h1><p>${all.filter(q=>q.difficulty==='media').length} questões de aprendizagem e 6 difíceis sorteadas entre ${all.filter(q=>q.difficulty==='dificil').length} disponíveis.</p><p>Você receberá a correção após responder a cada questão. As respostas são salvas no navegador.</p><button class="btn btn-primary" data-action="exercise-start">Iniciar atividade</button></section>`;return;}
 const cursor=Math.min(Math.max(Number(s.cursor)||0,0),s.ids.length-1);
 const current=all.find(x=>x.id===s.ids[cursor]);
 const selected=s.answers[current.id],answered=Number.isInteger(selected),assessed=!!s.assessments?.[current.id],idx=s.ids.indexOf(current.id);
 const order=orderFor(s,current);
 const displayedCorrect=order.indexOf(current.answer);
 const comments=answered?`<section class="exercise-feedback" aria-live="polite"><h3>${selected===current.answer?'Resposta correta':'Resposta incorreta'} — gabarito ${current.type==='ce'?current.options[current.answer]:abc[displayedCorrect]}</h3><p><strong>Fundamento:</strong> ${esc(current.explanation)}</p><h4>Comentários das alternativas</h4><ol type="A">${order.map((originalIndex,displayIndex)=>`<li><strong>${esc(current.options[originalIndex])}:</strong> ${esc(current.optionComments?.[originalIndex]||'Consulte o fundamento acima.')}</li>`).join('')}</ol><p><strong>Conceito:</strong> ${esc(current.concept)}</p><p><strong>Pegadinha:</strong> ${esc(current.trap)}</p><p><strong>Como aparece em concursos:</strong> ${esc(current.examTip)}</p><p><strong>Exemplo inédito:</strong> ${esc(current.newExample)}</p><p><strong>Desafio:</strong> ${esc(current.challenge)}</p></section>`:'';
 const assessment=answered?`<section class="exercise-assessment"><h3>Como foi seu desempenho nesta questão?</h3><p>${selected===current.answer?'Você acertou.':'Você errou.'} Selecione o motivo para programar a revisão.</p>${assessed?`<p><strong>Registrado:</strong> ${esc(REVIEW[s.assessments[current.id].reason].label)} · revisão em ${s.assessments[current.id].intervalDays} dia(s).</p>`:`<div class="exercise-assessment-options">${selfAssessOptions(selected===current.answer).map(reason=>`<button type="button" class="btn" data-exercise-assess="${reason}">${esc(REVIEW[reason].label)}</button>`).join('')}</div>`}</section>`:'';
 const next=assessed&&!summary.finished?`<button class="btn btn-primary" data-action="exercise-next">Próxima questão</button>`:'';
 main.innerHTML=`<section class="exercise-panel"><button class="btn" data-action="exercise-back">← Voltar ao módulo</button><h1>Exercícios de aprendizagem — ${esc(getModuleById(moduleId)?.title||moduleId)}</h1><p>${summary.answered}/${summary.total} respondidas · ${summary.correct} acertos ${summary.finished?'· Concluído':''}</p>${summary.finished?`<div class="notice"><strong>Resultado: ${summary.score}%</strong> (${summary.correct}/${summary.total}). Para nova seleção de questões difíceis, inicie outra tentativa.</div><button class="btn" data-action="exercise-restart">Nova tentativa</button>`:''}<article class="exercise-question"><p class="exercise-meta">${esc(current.subtopicId)} · ${current.difficulty==='media'?'Média':'Difícil'} · ${esc(current.type)} · questão ${idx+1} de ${s.ids.length}</p><h2>${esc(current.stem).replace(/\n/g,'<br>')}</h2><div class="exercise-options">${order.map((originalIndex,displayIndex)=>`<button type="button" class="exercise-option ${answered&&originalIndex===current.answer?'is-correct':''} ${answered&&originalIndex===selected&&selected!==current.answer?'is-wrong':''}" data-exercise-choice="${originalIndex}" ${answered||summary.finished?'disabled':''}><strong>${current.type==='ce'?'':abc[displayIndex]+') '}</strong>${esc(current.options[originalIndex])}</button>`).join('')}</div>${comments}${assessment}${next}</article></section>`;
}

export function nextExercise(state,moduleId){const s=state.progress?.exercises?.[moduleId];if(!s||!s.assessments?.[s.ids[s.cursor]])return false;if(s.cursor<s.ids.length-1){s.cursor++;return true;}return false;}
