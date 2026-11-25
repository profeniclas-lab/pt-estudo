import { buildUnifiedReviewQueue } from './spaced-review.js';

/** Indicadores derivados; nunca altera o progresso salvo. */
export function getReviewInsights(state, now=Date.now()) {
 const queue=buildUnifiedReviewQueue(state);
 const adaptive=state?.progress?.adaptiveReview || {};
 const due=queue.filter(x=>Date.parse(x.dueAt)<=now);
 const upcoming=queue.filter(x=>Date.parse(x.dueAt)>now);
 const overdue=due.filter(x=>Date.parse(x.dueAt)<now-86400000);
 const recurring=Object.entries(adaptive).filter(([,r])=>Number(r?.lapses)>=2);
 const improving=Object.values(adaptive).filter(r=>Number(r?.streak)>=2);
 const difficult=queue.filter(x=>Number(adaptive[x.key]?.lapses)>=2);
 const byModule=new Map();
 for(const item of queue){
  const key=item.moduleId||'Não identificado';
  const row=byModule.get(key)||{moduleId:key,total:0,due:0,difficult:0};
  row.total++;
  if(Date.parse(item.dueAt)<=now)row.due++;
  if(Number(adaptive[item.key]?.lapses)>=2)row.difficult++;
  byModule.set(key,row);
 }
 return {total:queue.length,due:due.length,overdue:overdue.length,
  upcoming:upcoming.length,recurring:recurring.length,improving:improving.length,
  difficultDue:difficult.filter(x=>Date.parse(x.dueAt)<=now).length,
  byModule:[...byModule.values()].sort((a,b)=>b.due-a.due||b.difficult-a.difficult||a.moduleId.localeCompare(b.moduleId))};
}
export function renderReviewInsights(state){
 const s=getReviewInsights(state);
 const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const card=(label,value)=>`<article class="stat-card"><div class="stat-label">${label}</div><div class="stat-value">${value}</div></article>`;
 const rows=s.byModule.slice(0,8).map(m=>`<tr><td>${esc(m.moduleId)}</td><td>${m.due}</td><td>${m.difficult}</td><td>${m.total}</td></tr>`).join('');
 return `<section aria-label="Indicadores da revisão espaçada"><h2>Indicadores de revisão</h2>
 <div class="cards-grid">${card('Pendentes',s.due)}${card('Atrasadas há mais de 1 dia',s.overdue)}${card('Agendadas',s.upcoming)}${card('Dificuldades recorrentes',s.recurring)}${card('Sequências de acertos seguros',s.improving)}${card('Pendentes com dificuldade recorrente',s.difficultDue)}</div>
 <h3>Módulos com revisões programadas</h3>${rows?`<div style="overflow-x:auto"><table style="width:100%;text-align:left"><thead><tr><th>Módulo</th><th>Pendentes</th><th>Difíceis</th><th>Total</th></tr></thead><tbody>${rows}</tbody></table></div>`:'<p>Os indicadores serão preenchidos após as primeiras revisões.</p>'}
 <p class="page-subtitle">Dificuldade recorrente: duas ou mais avaliações fracas registradas. Os indicadores não alteram notas nem agendamentos.</p></section>`;
}
