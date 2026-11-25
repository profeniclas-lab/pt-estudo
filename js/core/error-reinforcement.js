/** Fase 15 — Lote 3. Recomendações de reforço, somente leitura. */
import { MODULES } from '../data/modules.js';
import { questionsForModule } from '../data/questions.js';
const safe=x=>x&&typeof x==='object'&&!Array.isArray(x)?x:{};
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function recommendErrorReinforcement(state,limit=8){
 const p=safe(state?.progress),errors=Array.isArray(p.errors)?p.errors:[];
 const catalog=new Map();
 for(const module of MODULES)for(const q of questionsForModule(module.id)||[])if(q?.id&&!catalog.has(q.id))catalog.set(q.id,q);
 const grouped=new Map();
 for(const e of errors){
  if(!e?.questionId)continue;
  const original=catalog.get(e.questionId);
  if(!original)continue;
  const moduleId=original.moduleId||e.moduleId;
  const subtopicId=original.subtopicId||e.subtopicId;
  const key=`${moduleId||''}:${subtopicId||''}`;
  const adaptive=safe(p.adaptiveReview?.[`question:${e.questionId}`]);
  const previous=grouped.get(key)||{moduleId,subtopicId,score:0,questionIds:new Set(),examples:[]};
  if(!previous.questionIds.has(e.questionId)){
   previous.questionIds.add(e.questionId);
   previous.score+=1+Math.min(5,Math.max(0,Number(adaptive.lapses)||0));
   const example=typeof original.newExample==='string'?original.newExample.trim():'';
   if(example&&!previous.examples.includes(example))previous.examples.push(example);
  }
  grouped.set(key,previous);
 }
 const wrongIds=new Set(errors.map(x=>x?.questionId));
 return [...grouped.values()].sort((a,b)=>b.score-a.score||String(a.subtopicId).localeCompare(String(b.subtopicId))).slice(0,Math.max(0,limit)).map(g=>{
  const alternatives=[...catalog.values()].filter(q=>q.moduleId===g.moduleId&&q.subtopicId===g.subtopicId&&!wrongIds.has(q.id));
  return {moduleId:g.moduleId,subtopicId:g.subtopicId,score:g.score,errors:g.questionIds.size,
   examples:g.examples.slice(0,2),suggestedQuestions:alternatives.slice(0,3).map(q=>({id:q.id,stem:q.stem||'Questão de reforço'}))};
 });
}
export function renderErrorReinforcement(state){
 const suggestions=recommendErrorReinforcement(state);
 const cards=suggestions.map(s=>`<article class="module-card" style="padding:12px;margin:10px 0">
 <h3>${esc(s.moduleId||'Módulo')} · ${esc(s.subtopicId||'Subtópico')}</h3>
 <p>${s.errors} questão(ões) no banco de erros. Prioridade calculada pela reincidência registrada.</p>
 ${s.examples.length?`<h4>Exemplos já presentes no material</h4><ul>${s.examples.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:'<p>Sem exemplo adicional disponível no catálogo para este grupo.</p>'}
 ${s.suggestedQuestions.length?`<h4>Questões adicionais do mesmo subtópico</h4><ul>${s.suggestedQuestions.map(q=>`<li>${esc(q.stem).slice(0,220)} <button type="button" class="btn" data-review-open="${esc(q.id)}">Praticar questão</button></li>`).join('')}</ul>`:'<p>Não há outras questões disponíveis neste subtópico. Refaça as questões do banco de erros.</p>'}
 </article>`).join('');
 return `<section aria-label="Reforço direcionado" style="margin:18px 0"><h2>Reforço direcionado</h2><p>Prioridades sugeridas a partir dos erros registrados. Questões e exemplos são retirados do conteúdo já existente.</p>${cards||'<p class="notice">Ainda não há erros com conteúdo disponível para sugerir reforço.</p>'}</section>`;
}
