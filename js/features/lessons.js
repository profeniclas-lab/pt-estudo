import { getModuleById } from '../data/modules.js';
import { getLesson } from '../data/lessons.js';
const e = x => String(x ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const validRatings = {sei:100,duvida:50,nao:0};
export function lessonStats(state,module) {
  const available=module.subtopics.filter(t=>getLesson(t.id));
  if (!available.length) return null;
  const done=available.filter(t=>state.progress?.lessons?.[t.id]?.completed===true);
  const rated=available.filter(t=>Object.hasOwn(validRatings,state.progress?.lessons?.[t.id]?.rating));
  return {total:available.length,completed:done.length,rated:rated.length,completionScore:Math.round(done.length/available.length*100),ratingScore:rated.length===available.length?Math.round(rated.reduce((s,t)=>s+validRatings[state.progress.lessons[t.id].rating],0)/available.length):null};
}
export function saveLessonProgress(state,subtopicId,action,value) {
  if(!getLesson(subtopicId))return false;
  state.progress ||= {};state.progress.lessons ||= {};
  const entry=state.progress.lessons[subtopicId] ||= {};
  if(action==='complete') entry.completed = true;
  else if(action==='rating' && Object.hasOwn(validRatings,value))entry.rating=value;
  else return false;
  entry.updatedAt=new Date().toISOString();return true;
}
export function renderLesson(main,moduleId,subtopicId,state,{showAnswer=false}={}) {
  const module=getModuleById(moduleId),topic=module?.subtopics.find(t=>t.id===subtopicId),lesson=getLesson(subtopicId);
  if(!module||!topic||!lesson){main.innerHTML='<div class="notice">Aula não disponível. <button class="btn" data-action="lesson-back">Voltar ao módulo</button></div>';return;}
  const entry=state.progress?.lessons?.[subtopicId]||{};
  const index=module.subtopics.findIndex(t=>t.id===subtopicId);
  const previous=module.subtopics.slice(0,index).reverse().find(t=>getLesson(t.id));
  const next=module.subtopics.slice(index+1).find(t=>getLesson(t.id));
  main.innerHTML=`<article class="lesson-view">
  <button type="button" class="btn" data-action="lesson-back">← Voltar ao módulo</button>
  <p class="lesson-kicker">${e(module.title)} · Aula ${index+1} de ${module.subtopics.length}</p>
  <h1 class="page-title">${e(topic.title)}</h1>
  <section class="lesson-panel"><h2>Objetivo da aula</h2><p>${e(lesson.objective)}</p></section>
  <section class="lesson-panel"><h2>Entenda o conceito</h2><p>${e(lesson.concept)}</p><p>${e(lesson.explanation)}</p></section>
  <section class="lesson-panel"><h2>Exemplo na prática administrativa</h2><p>${e(lesson.example)}</p></section>
  <section class="lesson-panel"><h2>Como aparece em concursos</h2><p>${e(lesson.examTip)}</p></section>
  <section class="lesson-panel"><h2>Resumo para revisar</h2><p>${e(lesson.summary)}</p></section>
  <section class="lesson-panel"><h2>Recuperação ativa</h2><p><strong>${e(lesson.reviewQuestion)}</strong></p>
  ${showAnswer?`<p class="lesson-answer">${e(lesson.reviewAnswer)}</p><button class="btn" data-action="lesson-toggle-answer">Ocultar resposta</button>`:`<p>Responda mentalmente antes de revelar.</p><button class="btn" data-action="lesson-toggle-answer">Conferir resposta</button>`}</section>
  <section class="lesson-panel"><h2>Conclusão e autoavaliação</h2>
  <p>${entry.completed?'Aula marcada como estudada.':'Marque a aula após ler e revisar o conteúdo.'}</p>
  <button class="btn btn-primary" type="button" data-action="lesson-complete" ${entry.completed?'disabled':''}>${entry.completed?'✓ Aula estudada':'Marcar aula como estudada'}</button>
  <p>Depois de estudar, como você avalia sua compreensão? A avaliação pode ser alterada.</p>
  <div class="lesson-rating">${[['sei','Entendi bem'],['duvida','Entendi em parte'],['nao','Preciso revisar']].map(([v,label])=>`<button class="btn ${entry.rating===v?'lesson-selected':''}" type="button" data-lesson-rating="${v}" aria-pressed="${entry.rating===v}">${label}</button>`).join('')}</div>
  </section>
  <nav class="lesson-pagination" aria-label="Navegação entre aulas">${previous?`<button class="btn" data-lesson-open="${e(previous.id)}">← Aula anterior</button>`:''}${next?`<button class="btn" data-lesson-open="${e(next.id)}">Próxima aula →</button>`:''}</nav>
  </article>`;
}
