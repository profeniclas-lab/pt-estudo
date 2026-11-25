/** Fase 15, lote 5 — painel consolidado somente leitura. */
import { errorAnalysis } from './error-intelligence.js';
import { errorRecoverySummary } from './error-recovery.js';
import { recommendErrorReinforcement } from './error-reinforcement.js';
const escapeHtml = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function errorOverview(state, now=Date.now()) {
 const analysis=errorAnalysis(state);
 const recovery=errorRecoverySummary(state,now);
 const recommended=recommendErrorReinforcement(state,5);
 const priority=[...recovery.items].sort((a,b)=>{
  const score=x=>(x.due?100:0)+(x.status==='recorrente'?50:0)+Math.min(x.lapses,20)*3-(x.recovered?30:0);
  return score(b)-score(a)||a.id.localeCompare(b.id);
 }).slice(0,10);
 return {total:analysis.items.length,due:recovery.due,recurrent:recovery.recurrent,
  recovering:recovery.recovering,priority,recommended};
}
export function renderErrorOverview(state){
 const o=errorOverview(state);
 const stat=(label,n)=>`<article class="stat-card"><div class="stat-label">${label}</div><div class="stat-value">${n}</div></article>`;
 const items=o.priority.map(x=>`<li style="margin:8px 0"><strong>${escapeHtml(x.id)}</strong> — ${x.due?'revisão pendente':x.recovered?'em recuperação':x.status==='recorrente'?'dificuldade recorrente':'em acompanhamento'} · ${x.lapses} ocorrência(s) de dificuldade <button type="button" class="btn" data-review-open="${escapeHtml(x.id)}">Praticar</button></li>`).join('');
 const suggestions=o.recommended.map(x=>`<li>${escapeHtml(x.moduleId||'Módulo')} · ${escapeHtml(x.subtopicId||'Subtópico')} (${x.errors} questão(ões) com erro)</li>`).join('');
 return `<section class="module-card" aria-label="Visão geral do banco de erros" style="padding:16px;margin:16px 0">
 <h2>Visão geral das dificuldades</h2>
 <div class="cards-grid">${stat('Questões com erro',o.total)}${stat('Revisões vencidas',o.due)}${stat('Dificuldades recorrentes',o.recurrent)}${stat('Em recuperação',o.recovering)}</div>
 <details open><summary><strong>Prioridades para praticar</strong></summary>${items?`<ol>${items}</ol>`:'<p>Nenhuma questão registrada no banco de erros.</p>'}</details>
 <details><summary><strong>Subtópicos para reforçar</strong></summary>${suggestions?`<ul>${suggestions}</ul>`:'<p>Sem recomendações disponíveis.</p>'}</details>
 <p class="page-subtitle">Indicadores calculados a partir do histórico disponível. Não há exclusão automática de erros nem alteração dos agendamentos.</p>
 </section>`;
}
