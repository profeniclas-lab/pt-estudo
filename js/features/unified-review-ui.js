import { renderReviewInsights } from '../core/review-insights.js';
import { buildUnifiedReviewQueue } from '../core/spaced-review.js';
import { renderReviewConsistency } from '../core/review-consistency.js';
import { prioritizeDueReviews, reviewPrioritySummary } from '../core/review-priorities.js';
import { MODULES } from '../data/modules.js';
import { questionsForModule } from '../data/questions.js';
import { getDiagnosticCards } from '../data/diagnostics.js';
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const date = value => new Date(value).toLocaleDateString('pt-BR');
function catalog() {
 const questions = new Map(), cards = new Map();
 for (const m of MODULES) {
  for (const q of questionsForModule(m.id) || []) if (!questions.has(q.id)) questions.set(q.id,q);
  for (const c of getDiagnosticCards(m) || []) if (!cards.has(c.subtopicId)) cards.set(c.subtopicId,{...c,moduleId:m.id});
 }
 return {questions,cards};
}
/** Renderiza a agenda sem modificar o estado; apenas itens vencidos recebem ação de revisão. */
export function renderUnifiedReviewList(main,state) {
 const all = buildUnifiedReviewQueue(state), now=Date.now(), {questions,cards}=catalog();
 const due=prioritizeDueReviews(all.filter(x=>Date.parse(x.dueAt)<=now),state,now), future=all.filter(x=>Date.parse(x.dueAt)>now);
 const questionDue=due.filter(x=>x.kind==='question'), cardDue=due.filter(x=>x.kind==='flashcard');
 const rows = (items,expired) => items.map(item=>{
  const data=item.kind==='question'?questions.get(item.itemId):cards.get(item.itemId);
  const available=!!data;
  const label=item.kind==='question'?'Questão':'Flashcard';
  const heading=item.kind==='question'?(data?.stem||'Questão não encontrada no catálogo'):(data?.question||'Flashcard não encontrado no catálogo');
  const button=expired&&available?(item.kind==='question'?`<button type="button" class="btn btn-primary" data-review-open="${esc(item.itemId)}">Responder novamente</button>`:`<button type="button" class="btn btn-primary" data-unified-flash-open="${esc(item.itemId)}">Revisar flashcard</button>`):'';
  return `<article class="module-card" style="display:block;margin-bottom:12px"><p><strong>${label}</strong> · ${esc(item.moduleId||data?.moduleId||'Módulo não informado')} · ${date(item.dueAt)}</p><p>${esc(heading).slice(0,280)}</p>${button}${!available?'<p class="notice">Conteúdo indisponível no catálogo atual. O agendamento foi preservado.</p>':''}</article>`;
 }).join('');
 main.innerHTML=`<section class="module-detail"><h1 class="page-title">Revisão espaçada unificada</h1><p class="page-subtitle">Uma entrada por questão ou flashcard; os agendamentos originais são preservados.</p>
 <div class="cards-grid"><article class="stat-card"><div class="stat-label">Vencidas</div><div class="stat-value">${due.length}</div></article><article class="stat-card"><div class="stat-label">Questões vencidas</div><div class="stat-value">${questionDue.length}</div></article><article class="stat-card"><div class="stat-label">Flashcards vencidos</div><div class="stat-value">${cardDue.length}</div></article><article class="stat-card"><div class="stat-label">Futuras</div><div class="stat-value">${future.length}</div></article></div>
 ${renderReviewInsights(state)}
 <div class="module-card" style="margin:12px 0;padding:16px"><h3>Prioridade de estudo</h3>
 <p>Alta prioridade: ${reviewPrioritySummary(all,state,now).high} · Média: ${reviewPrioritySummary(all,state,now).medium} · Próximos 7 dias: ${reviewPrioritySummary(all,state,now).next7}</p>
 <p>Sugestão para a próxima sessão: até ${reviewPrioritySummary(all,state,now).suggested} revisões vencidas, começando pelas mais urgentes. A ordem não modifica as datas agendadas.</p></div>
 ${renderReviewConsistency(state)}
 <h2>Revisões pendentes</h2>${due.length?rows(due,true):'<div class="notice">Nenhuma revisão vencida no momento.</div>'}
 <h2>Próximas revisões</h2>${future.length?rows(future,false):'<p>Nenhum agendamento futuro.</p>'}</section>`;
}
