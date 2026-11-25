/** Fase 17 — Lote 2. Priorização explicável, derivada sem modificar o progresso. */
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safe=x=>x&&typeof x==='object'&&!Array.isArray(x)?x:{};
const numeric=x=>Number.isFinite(Number(x))?Number(x):null;
const moduleId=x=>String(x?.module?.id??'');
const PRIORITY={alta:8,media:4,baixa:0};
export function learningPriorities(state,modules=[],now=Date.now()){
 const p=safe(state?.progress),schedule=Object.values(safe(p.reviewSchedule));
 const errors=Array.isArray(p.errors)?p.errors:[];
 const history=Array.isArray(p.simulados?.history)?p.simulados.history:[];
 const lastSim=history.filter(x=>x?.finishedAt).slice(-5);
 const adaptive=safe(p.adaptiveReview);
 const rows=[];
 for(const entry of modules){
  const id=moduleId(entry);
  if(!id||entry.completed)continue;
  const started=Boolean(entry.hasActivity||entry.started);
  const achievement=numeric(entry.achievement?.percentage);
  const due=schedule.filter(x=>x?.moduleId===id&&Number.isFinite(Date.parse(x.dueAt))&&Date.parse(x.dueAt)<=now).length;
  const ids=[...new Set(errors.filter(x=>x?.moduleId===id).map(x=>x.questionId).filter(Boolean))];
  const recurrent=ids.filter(qid=>(numeric(adaptive[`question:${qid}`]?.lapses)??0)>=2).length;
  const sim=lastSim.filter(x=>x?.area===id||x?.area===`modulo:${id}`);
  const simAvg=sim.length?sim.reduce((sum,x)=>sum+(numeric(x.score)??0),0)/sim.length:null;
  const reasons=[];let points=0;
  if(due){points+=Math.min(25,5+due*3);reasons.push(`${due} revisão(ões) vencida(s)`);}
  if(recurrent){points+=Math.min(25,recurrent*8);reasons.push(`${recurrent} questão(ões) com erro recorrente`);}
  if(ids.length){points+=Math.min(12,ids.length*2);reasons.push(`${ids.length} questão(ões) no banco de erros`);}
  if(started&&achievement!==null&&achievement<75){points+=Math.min(25,Math.round((75-achievement)/3));reasons.push(`aproveitamento de ${Math.round(achievement)}%`);}
  if(simAvg!==null&&simAvg<75){points+=Math.min(12,Math.round((75-simAvg)/5));reasons.push(`média de ${Math.round(simAvg)}% em simulados específicos`);}
  if(started){points+=PRIORITY[entry.module?.priority]??0;}
  if(!started&&!due&&!ids.length)continue;
  rows.push({moduleId:id,title:String(entry.module?.title??id),points,reasons,started,
   due,recurrent,errors:ids.length,achievement,simAvg,
   level:points>=35?'alta':points>=15?'media':'normal'});
 }
 return rows.sort((a,b)=>b.points-a.points||b.due-a.due||a.moduleId.localeCompare(b.moduleId,'pt-BR'));
}
export function renderLearningPriorities(state,modules=[]){
 const rows=learningPriorities(state,modules);
 if(!rows.length)return `<section><h2 class="section-title">Prioridades de aprendizagem</h2><p>Não há prioridades específicas identificadas. Inicie um módulo ou continue seus estudos.</p></section>`;
 return `<section aria-label="Prioridades de aprendizagem">
 <h2 class="section-title">Prioridades de aprendizagem</h2>
 <p>Ordem sugerida a partir de revisões vencidas, erros, aproveitamento e simulados específicos do módulo. A pontuação é apenas um critério de ordenação.</p>
 <div style="display:grid;gap:10px">${rows.slice(0,5).map((r,i)=>`<article class="module-card" style="display:block">
 <div style="display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap">
 <strong>${i+1}. ${esc(r.title)}</strong><span>${r.level==='alta'?'Prioridade alta':r.level==='media'?'Prioridade média':'Acompanhamento'}</span></div>
 <p style="margin:8px 0">${r.reasons.length?esc(r.reasons.join(' · ')):'Atividade em andamento; continuar o módulo.'}</p>
 <button class="btn" type="button" data-module-id="${esc(r.moduleId)}">Abrir módulo</button>
 </article>`).join('')}</div>
 <p class="page-subtitle">Indicadores incompletos podem limitar a priorização. Módulos concluídos não são incluídos nesta lista, mas continuam disponíveis.</p>
 </section>`;
}
