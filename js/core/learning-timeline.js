/** Fase 17 — Lote 4: linha do tempo dos registros datados, sem alterar estado. */
const safe=x=>x&&typeof x==='object'&&!Array.isArray(x)?x:{};
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const date=x=>typeof x==='string'&&Number.isFinite(Date.parse(x))?new Date(x):null;
const month=x=>`${x.getFullYear()}-${String(x.getMonth()+1).padStart(2,'0')}`;
const validScore=x=>Number.isFinite(Number(x))&&Number(x)>=0&&Number(x)<=100;
export function learningTimeline(state){
 const p=safe(state?.progress);
 const sims=(Array.isArray(p.simulados?.history)?p.simulados.history:[])
  .filter(x=>date(x?.finishedAt)&&validScore(x?.score))
  .map(x=>({date:x.finishedAt,score:Number(x.score),correct:Number(x.correct)||0,total:Number(x.total)||0}));
 const buckets=new Map();
 const add=(raw,kind,score=null)=>{
  const d=date(raw);if(!d)return;
  const k=month(d),b=buckets.get(k)||{month:k,simulations:0,simScoreSum:0,lessons:0,questionUpdates:0};
  if(kind==='sim'){b.simulations++;b.simScoreSum+=score;}
  if(kind==='lesson')b.lessons++;
  if(kind==='question')b.questionUpdates++;
  buckets.set(k,b);
 };
 for(const x of sims)add(x.date,'sim',x.score);
 // Dated lesson and question-history records are snapshots, not complete event logs.
 for(const x of Object.values(safe(p.lessons)))if(x?.completed===true)add(x.completedAt||x.updatedAt,'lesson');
 for(const x of Object.values(safe(p.questionHistory)))add(x?.updatedAt,'question');
 const months=[...buckets.values()].sort((a,b)=>a.month.localeCompare(b.month)).slice(-12)
  .map(x=>({month:x.month,simulations:x.simulations,simAverage:x.simulations?Math.round(x.simScoreSum/x.simulations):null,
    lessons:x.lessons,questionUpdates:x.questionUpdates}));
 return {months,simulations:sims.sort((a,b)=>Date.parse(a.date)-Date.parse(b.date)).slice(-12)};
}
export function renderLearningTimeline(state){
 const {months,simulations}=learningTimeline(state);
 if(!months.length)return `<section><h2 class="section-title">Evolução temporal</h2><p>Não há registros datados suficientes para montar a linha do tempo.</p></section>`;
 const row=(x)=>`<tr><th scope="row" style="text-align:left;padding:8px">${esc(x.month)}</th><td style="text-align:center">${x.simulations}</td><td style="text-align:center">${x.simAverage===null?'—':x.simAverage+'%'}</td><td style="text-align:center">${x.lessons}</td><td style="text-align:center">${x.questionUpdates}</td></tr>`;
 return `<section aria-label="Evolução temporal da aprendizagem">
 <h2 class="section-title">Evolução temporal da aprendizagem</h2>
 <p>Últimos ${months.length} mês(es) com registros datados. A média dos simulados é calculada apenas quando há provas concluídas no mês.</p>
 <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse"><thead><tr><th scope="col" style="text-align:left">Mês</th><th scope="col">Simulados</th><th scope="col">Média</th><th scope="col">Aulas*</th><th scope="col">Questões*</th></tr></thead><tbody>${months.map(row).join('')}</tbody></table></div>
 <p class="page-subtitle">*Aulas e questões usam a última data disponível no registro atual; não representam todas as tentativas históricas. Não é possível reconstruir a evolução antiga do aproveitamento dos módulos sem snapshots salvos.</p>
 ${simulations.length?`<p>Último simulado registrado: ${esc(new Date(simulations.at(-1).date).toLocaleDateString('pt-BR'))}, ${simulations.at(-1).score}% de aproveitamento.</p>`:''}
 </section>`;
}
