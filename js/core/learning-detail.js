/** Fase 17 — Lote 5: estatísticas por área e módulo, derivadas e somente leitura. */
const obj=x=>x&&typeof x==='object'&&!Array.isArray(x)?x:{};
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num=x=>typeof x==='number'&&Number.isFinite(x)?x:null;
const pct=x=>num(x)===null?'—':`${Math.round(x)}%`;
const validDate=x=>typeof x==='string'&&Number.isFinite(Date.parse(x));
export function detailedLearningStats(state,modules=[],areas={}){
 const p=obj(state?.progress),now=Date.now();
 const errors=Array.isArray(p.errors)?p.errors:[];
 const review=Object.values(obj(p.reviewSchedule)).filter(x=>x?.questionId&&validDate(x.dueAt));
 const rows=modules.filter(x=>x?.module?.id).map(x=>{
  const m=x.module,id=m.id,achievement=obj(x.achievement);
  const err=new Set(errors.filter(e=>e?.moduleId===id&&e?.questionId).map(e=>e.questionId)).size;
  const scheduled=review.filter(r=>r.moduleId===id),due=scheduled.filter(r=>Date.parse(r.dueAt)<=now).length;
  const exercise=x.exercises||x.exercise||{};
  const answered=num(exercise.answered)||0,correct=num(exercise.correct)||0;
  return {id,title:m.title||id,area:m.area||'outros',started:!!(x.started||x.hasActivity),completed:!!x.completed,
   achievement:num(achievement.percentage),coverage:num(achievement.coveragePercentage),
   answered,correct,exercisePct:answered?Math.round(correct/answered*100):null,
   errors:err,due,scheduled:scheduled.length};
 });
 const areaIds=[...new Set([...Object.keys(obj(areas)),...rows.map(x=>x.area)])];
 const byArea=areaIds.map(id=>{
  const group=rows.filter(x=>x.area===id),started=group.filter(x=>x.started),scores=started.map(x=>x.achievement).filter(x=>x!==null);
  return {id,title:areas[id]||id,total:group.length,started:started.length,completed:group.filter(x=>x.started&&x.completed).length,
   avg:scores.length?Math.round(scores.reduce((a,b)=>a+b,0)/scores.length):null,
   errors:group.reduce((a,x)=>a+x.errors,0),due:group.reduce((a,x)=>a+x.due,0)};
 });
 return {rows,byArea};
}
export function renderDetailedLearningStats(state,modules=[],areas={}){
 const {rows,byArea}=detailedLearningStats(state,modules,areas);
 if(!rows.length)return '<section><h2 class="section-title">Detalhamento por matéria e módulo</h2><p>Nenhum módulo cadastrado para detalhar.</p></section>';
 return `<section aria-label="Estatísticas detalhadas por área e módulo">
 <h2 class="section-title">Detalhamento por matéria e módulo</h2>
 <p>Indicadores calculados a partir dos registros atuais. Questões com erro são contadas uma vez por módulo; a soma entre áreas pode incluir a mesma questão se houver vínculos diferentes.</p>
 <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse"><thead><tr><th style="text-align:left">Matéria</th><th>Iniciados</th><th>Concluídos</th><th>Média</th><th>Erros</th><th>Revisões vencidas</th></tr></thead><tbody>
 ${byArea.map(a=>`<tr><th scope="row" style="text-align:left;padding:8px;border-top:1px solid #bbb">${esc(a.title)}</th><td style="text-align:center">${a.started}/${a.total}</td><td style="text-align:center">${a.completed}</td><td style="text-align:center">${pct(a.avg)}</td><td style="text-align:center">${a.errors}</td><td style="text-align:center">${a.due}</td></tr>`).join('')}
 </tbody></table></div>
 <h3 class="section-title">Indicadores por módulo</h3>
 <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse"><thead><tr><th style="text-align:left">Módulo</th><th>Aproveitamento</th><th>Cobertura</th><th>Exercícios</th><th>Erros</th><th>Revisões vencidas</th></tr></thead><tbody>
 ${rows.map(x=>`<tr><th scope="row" style="text-align:left;padding:8px;border-top:1px solid #bbb">${esc(x.id)} — ${esc(x.title)}</th><td style="text-align:center">${x.started?pct(x.achievement):'—'}</td><td style="text-align:center">${x.started?pct(x.coverage):'—'}</td><td style="text-align:center">${pct(x.exercisePct)}</td><td style="text-align:center">${x.errors}</td><td style="text-align:center">${x.due}</td></tr>`).join('')}
 </tbody></table></div>
 <p class="page-subtitle">Aproveitamento e cobertura seguem os cálculos já existentes no aplicativo. A taxa de exercícios considera somente as respostas atualmente registradas, não todas as tentativas históricas. Uma célula “—” indica ausência de dado suficiente.</p>
 </section>`;
}
