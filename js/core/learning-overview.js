/** Fase 17 — Lote 1: indicadores consolidados, somente leitura. */
const safe=x=>x&&typeof x==='object'&&!Array.isArray(x)?x:{};
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const date=x=>typeof x==='string'&&Number.isFinite(Date.parse(x));
export function learningOverview(state,modules=[]){
 const p=safe(state?.progress),errors=Array.isArray(p.errors)?p.errors:[];
 const errorIds=[...new Set(errors.map(x=>x?.questionId).filter(Boolean))];
 const adaptive=safe(p.adaptiveReview);
 const recurrent=errorIds.filter(id=>(Number(adaptive[`question:${id}`]?.lapses)||0)>=2).length;
 const schedule=Object.values(safe(p.reviewSchedule)).filter(x=>x?.questionId&&date(x.dueAt));
 const now=Date.now(),due=schedule.filter(x=>Date.parse(x.dueAt)<=now);
 const simulations=(Array.isArray(p.simulados?.history)?p.simulados.history:[]).filter(x=>x?.finishedAt&&Number.isFinite(Number(x.score)));
 const recent=simulations.slice(-5);
 const average=recent.length?Math.round(recent.reduce((sum,x)=>sum+Number(x.score),0)/recent.length):null;
 const active=modules.filter(x=>x?.hasActivity||x?.started);
 const completed=active.filter(x=>x.completed);
 const avgAchievement=active.length?Math.round(active.reduce((sum,x)=>sum+(Number(x.achievement?.percentage)||0),0)/active.length):null;
 return {active:active.length,completed:completed.length,avgAchievement,reviewDue:due.length,
  reviewScheduled:schedule.length,errorQuestions:errorIds.length,recurrent,
  simulations:simulations.length,recentAverage:average};
}
export function renderLearningOverview(state,modules=[]){
 const x=learningOverview(state,modules);
 const card=(title,value,description)=>`<article class="stat-card"><div class="stat-label">${esc(title)}</div><div class="stat-value">${esc(value)}</div><div class="stat-hint">${esc(description)}</div></article>`;
 return `<section aria-label="Indicadores consolidados de aprendizagem">
 <h2 class="section-title">Visão geral da aprendizagem</h2>
 <div class="cards-grid">
 ${card('Módulos iniciados',x.active,'Atividades registradas')}
 ${card('Módulos concluídos',x.completed,'Critério de conclusão do aplicativo')}
 ${card('Aproveitamento médio',x.avgAchievement===null?'—':x.avgAchievement+'%','Média dos módulos iniciados')}
 ${card('Revisões vencidas',x.reviewDue,x.reviewScheduled+' revisões de questões agendadas')}
 ${card('Questões com erro',x.errorQuestions,'Questões distintas no banco de erros')}
 ${card('Erros recorrentes',x.recurrent,'Questões com pelo menos duas reincidências adaptativas')}
 ${card('Simulados concluídos',x.simulations,'Resultados armazenados')}
 ${card('Média dos últimos simulados',x.recentAverage===null?'—':x.recentAverage+'%','Até cinco simulados recentes')}
 </div>
 <p class="page-subtitle">Indicadores calculados a partir dos registros locais. Não representam domínio definitivo nem sincronização entre aparelhos.</p>
 </section>`;
}
