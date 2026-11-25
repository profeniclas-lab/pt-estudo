/**
 * ADM-ESTUDO — Fase 22-A / Lote 4: Meus Erros.
 * Reformula somente a apresentação da página e preserva os contratos
 * existentes de revisão, autoavaliação, histórico e remoção manual.
 */
import { scheduleAdaptiveReview } from '../core/adaptive-review.js';
import { MODULES } from '../data/modules.js';
import { errorOverview } from '../core/error-overview.js';
import { errorAnalysis } from '../core/error-intelligence.js';
import { errorRecoverySummary } from '../core/error-recovery.js';
import { errorHistorySummary } from '../core/error-history.js';
import { recommendErrorReinforcement } from '../core/error-reinforcement.js';
import { questionsForModule } from '../data/questions.js';

const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const allQuestions = () => MODULES.flatMap(m => questionsForModule(m.id));
const questionMap = () => new Map(allQuestions().filter(q => q?.id).map(q => [q.id, q]));
const interval = Object.freeze({seguro:7,duvida:3,chute:1,desconhecimento:1,pegadinha:2,interpretacao:2,desatencao:3});
const labels = {seguro:'Acertei com segurança',duvida:'Acertei com dúvida',chute:'Acertei por palpite',desconhecimento:'Errei por desconhecimento',pegadinha:'Errei por pegadinha',interpretacao:'Errei por interpretação',desatencao:'Errei por desatenção'};
const letter = i => String.fromCharCode(65+i);
const shuffled = items => {const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const due = record => record?.dueAt && Number.isFinite(Date.parse(record.dueAt)) && Date.parse(record.dueAt)<=Date.now();
const date = value => typeof value === 'string' && Number.isFinite(Date.parse(value)) ? new Date(value).toLocaleDateString('pt-BR') : 'Não agendada';

export function reviewCounts(state) {
 const schedule=Object.values(state.progress?.reviewSchedule||{});
 const valid=schedule.filter(x=>x?.questionId);
 return {scheduled:valid.length,due:valid.filter(due).length,errors:Array.isArray(state.progress?.errors)?state.progress.errors.length:0};
}
function itemsFor(state,mode){
 const lookup=questionMap(),schedule=Object.values(state.progress?.reviewSchedule||{});
 if(mode==='revisao')return schedule.filter(due).map(r=>({q:lookup.get(r.questionId),record:r})).filter(x=>x.q);
 const errors=Array.isArray(state.progress?.errors)?state.progress.errors:[];
 return errors.map(r=>({q:lookup.get(r.questionId),record:r})).filter(x=>x.q);
}

function analysisPanel(state) {
 const info=errorAnalysis(state);
 const groups=(label,rows)=>`<section class="errors-group"><h4>${label}</h4>
  ${rows.length?`<ul class="errors-group-list">${rows.slice(0,12).map(x=>`<li><span class="errors-wrap">${escapeHtml(x.name)}</span><span class="errors-group-number">${x.total} questão(ões) · ${x.recurrent} recorrente(s)</span></li>`).join('')}</ul>${rows.length>12?`<p class="errors-small">Exibindo os 12 primeiros grupos de ${rows.length}.</p>`:''}`:'<p class="errors-small">Sem registros nesta classificação.</p>'}
  </section>`;
 return `<div class="errors-analysis-grid">${groups('Por módulo',info.modules)}${groups('Por subtópico',info.subtopics)}${groups('Por causa registrada',info.reasons)}</div>
 <p class="errors-small">Registros antigos podem aparecer como “Não classificado”. O agrupamento não altera as respostas.</p>`;
}

function reinforcementPanel(state) {
 const suggestions=recommendErrorReinforcement(state,8);
 if(!suggestions.length)return '<p class="errors-small">Ainda não há recomendações de reforço disponíveis.</p>';
 return `<div class="errors-reinforcement">${suggestions.map(s=>`
 <details class="errors-subdetail"><summary><span class="errors-wrap">${escapeHtml(s.moduleId||'Módulo')} · ${escapeHtml(s.subtopicId||'Subtópico')}</span><span class="errors-subdetail-hint">${s.errors} questão(ões) com erro</span></summary>
 <div class="errors-subdetail-body">
 <p class="errors-small">Prioridade definida a partir das dificuldades registradas neste subtópico.</p>
 ${s.examples.length?`<strong>Exemplos do material</strong><ul>${s.examples.map(ex=>`<li class="errors-wrap">${escapeHtml(ex)}</li>`).join('')}</ul>`:'<p class="errors-small">Nenhum exemplo adicional cadastrado para este grupo.</p>'}
 ${s.suggestedQuestions.length?`<strong>Questões adicionais para praticar</strong><ul>${s.suggestedQuestions.map(q=>`<li class="errors-reinforcement-question"><span class="errors-wrap">${escapeHtml(q.stem)}</span><button type="button" class="btn" data-review-open="${escapeHtml(q.id)}">Praticar questão</button></li>`).join('')}</ul>`:'<p class="errors-small">Sem questões adicionais disponíveis neste subtópico.</p>'}
 </div></details>`).join('')}</div>`;
}

function historyPanel(state,ids) {
 const recovery=errorRecoverySummary(state),recoveryById=new Map(recovery.items.map(item=>[item.id,item]));
 const rows=ids.map(id=>({id,history:errorHistorySummary(state,id),recovery:recoveryById.get(id)}))
  .sort((a,b)=>Number(!!b.recovery?.due)-Number(!!a.recovery?.due)||b.history.historicalLapses-a.history.historicalLapses);
 const historyCards=rows.slice(0,30).map(({id,history:h})=>`<details class="errors-subdetail">
   <summary><span class="errors-wrap">${escapeHtml(id)}</span><span class="errors-subdetail-hint">${h.historicalAttempts} avaliação(ões)</span></summary>
   <div class="errors-subdetail-body"><p>${h.historicalLapses} dificuldade(s) acumulada(s) · ${h.secure} avaliação(ões) seguras registradas</p>
   ${h.recent.length?`<ul>${h.recent.map(event=>`<li class="errors-wrap">${escapeHtml(date(event.at))} · ${escapeHtml(event.rating)} · ${escapeHtml(event.result)}</li>`).join('')}</ul>`:'<p class="errors-small">O histórico detalhado ainda não possui eventos para este item.</p>'}</div></details>`).join('');
 const statusLabels={em_recuperacao:'Em recuperação',recorrente:'Dificuldade recorrente',revisar_agora:'Revisão pendente',em_acompanhamento:'Em acompanhamento'};
 const scheduled=[...recovery.items].sort((a,b)=>Number(b.due)-Number(a.due)||b.lapses-a.lapses);
 return `<div class="errors-history-layout">
  <section class="errors-history-block"><h4>Recuperação e revisão espaçada</h4><p class="errors-small">${recovery.due} revisão(ões) pendente(s) entre as questões com erro; ${recovery.recovering} em recuperação.</p>
  ${scheduled.length?`<ul class="errors-schedule">${scheduled.slice(0,20).map(x=>`<li><span class="errors-wrap"><strong>${escapeHtml(x.id)}</strong><small>${escapeHtml(statusLabels[x.status]||'Em acompanhamento')} · ${x.lapses} dificuldade(s) · ${x.streak} acerto(s) seguro(s)</small></span><span class="errors-due${x.due?' is-due':''}">${x.due?'Vencida':date(x.dueAt)}</span></li>`).join('')}</ul>${scheduled.length>20?`<p class="errors-small">Exibindo 20 de ${scheduled.length} itens.</p>`:''}`:'<p class="errors-small">Nenhuma questão acompanhada no momento.</p>'}
  </section>
  <section class="errors-history-block"><h4>Histórico de tentativas e reincidências</h4><p class="errors-small">Os eventos históricos são exibidos quando há registros disponíveis. Não são inventadas tentativas antigas.</p>
  ${historyCards||'<p class="errors-small">Nenhum histórico disponível.</p>'}
  ${rows.length>30?`<p class="errors-small">Exibindo os primeiros 30 de ${rows.length} itens, sem excluir os demais registros.</p>`:''}
  </section></div>`;
}

function installErrorListControls(main) {
 const root=main.querySelector('.errors-page');
 if(!root)return;
 const buttons=[...root.querySelectorAll('[data-errors-filter]')];
 const cards=[...root.querySelectorAll('[data-errors-card]')];
 const input=root.querySelector('[data-errors-search]');
 const visibleLabel=root.querySelector('[data-errors-visible]');
 let active='todas';
 const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const apply=()=>{
   const term=norm(input?.value).trim();let visible=0;
   for(const card of cards){
     const filterMatch=active==='todas'||card.dataset.errorsStatus?.split(' ').includes(active);
     const searchMatch=!term||norm(card.textContent).includes(term);
     card.hidden=!(filterMatch&&searchMatch);
     if(!card.hidden)visible++;
   }
   if(visibleLabel)visibleLabel.textContent=`${visible} de ${cards.length} questão(ões) exibida(s)`;
   const empty=root.querySelector('[data-errors-empty-filter]');
   if(empty)empty.hidden=visible>0||cards.length===0;
 };
 for(const button of buttons)button.addEventListener('click',()=>{
   active=button.dataset.errorsFilter;
   for(const b of buttons){const on=b===button;b.classList.toggle('is-active',on);b.setAttribute('aria-pressed',String(on));}
   apply();
 });
 input?.addEventListener('input',apply);
 apply();
}

export function renderReviewList(main,state,mode){
 const items=itemsFor(state,mode),counts=reviewCounts(state);
 if(mode!=='erros'){
   const missing=Math.max(0,counts.due-items.length);
   main.innerHTML=`<section class="module-detail"><h1 class="page-title">Revisão espaçada</h1>
   <p class="page-subtitle">${counts.due} revisão(ões) vencida(s) · ${counts.scheduled} programada(s)</p>
   <p>Responda às questões previstas para hoje ou anteriores. A próxima revisão será agendada conforme sua autoavaliação.</p>
   ${missing>0?`<div class="notice">${missing} registro(s) sem questão correspondente no banco atual. Nenhum dado foi apagado.</div>`:''}
   ${items.length?`<div class="module-list">${items.map(({q})=>`<article class="module-card" style="display:block;margin-bottom:12px"><strong>${escapeHtml(q.subtopicId||q.moduleId||'Questão')}</strong><p>${escapeHtml(q.stem).slice(0,240)}</p><button type="button" class="btn btn-primary" data-review-open="${escapeHtml(q.id)}">Responder novamente</button></article>`).join('')}</div>`:'<div class="notice">Nenhuma questão disponível nesta lista no momento.</div>'}
   </section>`;
   return;
 }
 const unique=new Map();
 for(const item of items)if(item.q?.id&&!unique.has(item.q.id))unique.set(item.q.id,item);
 const idSet=new Set((Array.isArray(state.progress?.errors)?state.progress.errors:[]).map(x=>x?.questionId).filter(Boolean));
 const missing=[...idSet].filter(id=>!unique.has(id)).length;
 const overview=errorOverview(state),recovery=errorRecoverySummary(state);
 const recoveryById=new Map(recovery.items.map(x=>[x.id,x]));
 const prioritized=[...unique.values()].sort((a,b)=>{
   const priority=x=>{const r=recoveryById.get(x.q.id);return (r?.due?100:0)+(r?.status==='recorrente'?50:0)+Math.min(r?.lapses||0,20)*3-(r?.recovered?30:0);};
   return priority(b)-priority(a)||String(a.q.id).localeCompare(String(b.q.id),'pt-BR');
 });
 const stat=(name,value,description)=>`<article class="errors-stat"><span class="errors-stat-name">${name}</span><strong class="errors-stat-value">${value}</strong><span class="errors-stat-desc">${description}</span></article>`;
 const chips=[['todas','Todas',prioritized.length],['vencidas','Revisão vencida',prioritized.filter(x=>recoveryById.get(x.q.id)?.due).length],['recorrentes','Recorrentes',prioritized.filter(x=>recoveryById.get(x.q.id)?.status==='recorrente').length],['recuperacao','Em recuperação',prioritized.filter(x=>recoveryById.get(x.q.id)?.recovered).length]];
 main.innerHTML=`<section class="errors-page" aria-labelledby="errors-page-title">
 <header class="errors-hero"><span class="errors-kicker">REVISÃO INTELIGENTE</span><h1 id="errors-page-title">Meus Erros</h1><p>Encontre suas prioridades, pratique novamente e acompanhe sua recuperação — sem perder o histórico.</p></header>
 <section class="errors-stats" aria-label="Resumo das dificuldades">
 ${stat('Questões com erro',overview.total,'Questões distintas')}
 ${stat('Revisões vencidas',overview.due,'Entre as questões com erro')}
 ${stat('Dificuldades recorrentes',overview.recurrent,'Precisam de reforço')}
 ${stat('Em recuperação',overview.recovering,'Evoluindo nas revisões')}</section>
 ${missing>0?`<div class="errors-notice" role="status">${missing} questão(ões) registrada(s) no histórico não foram encontrada(s) no catálogo atual. Nenhum dado foi excluído.</div>`:''}
 <section class="errors-panel" aria-labelledby="errors-practice-title">
   <div class="errors-panel-head"><div><span class="errors-section-index">01 · AÇÃO</span><h2 id="errors-practice-title">Questões para praticar</h2><p>As revisões vencidas e dificuldades recorrentes aparecem primeiro.</p></div><span class="errors-count">${prioritized.length} disponíveis</span></div>
   <div class="errors-tools"><div class="errors-filters" role="group" aria-label="Filtrar questões por prioridade">${chips.map(([id,label,n],i)=>`<button class="errors-chip${i===0?' is-active':''}" type="button" data-errors-filter="${id}" aria-pressed="${String(i===0)}">${label}<span>${n}</span></button>`).join('')}</div>
   <label class="errors-search-label" for="errors-search-input">Localizar questão ou assunto<input id="errors-search-input" data-errors-search type="search" placeholder="Digite um termo ou módulo" autocomplete="off"></label></div>
   <p class="errors-result-count" role="status" aria-live="polite" data-errors-visible>${prioritized.length} questão(ões)</p>
   <div class="errors-practice-list">${prioritized.map(({q})=>{
     const r=recoveryById.get(q.id);
     const status=[r?.due?'vencidas':'',r?.status==='recorrente'?'recorrentes':'',r?.recovered?'recuperacao':''].filter(Boolean).join(' ');
     const statusLabel=r?.due?'Revisão vencida':r?.recovered?'Em recuperação':r?.status==='recorrente'?'Dificuldade recorrente':'Em acompanhamento';
     return `<article class="errors-practice-card" data-errors-card data-errors-status="${status}">
      <div class="errors-practice-meta"><span>${escapeHtml(q.moduleId||q.subtopicId?.slice(0,5)||'Módulo')} · ${escapeHtml(q.subtopicId||'Subtópico')}</span><span class="errors-practice-status${r?.due?' is-due':''}">${statusLabel}</span></div>
      <p class="errors-question-text">${escapeHtml(q.stem)}</p>
      <div class="errors-practice-foot"><small>${r?.lapses||0} dificuldade(s) acumulada(s) · próxima revisão: ${date(r?.dueAt)}</small><div class="errors-card-actions"><button type="button" class="btn btn-primary" data-review-open="${escapeHtml(q.id)}">Praticar novamente</button><button type="button" class="btn" data-review-remove="${escapeHtml(q.id)}" title="Exige confirmação; preserva histórico">Remover da lista</button></div></div>
     </article>`;}).join('')}</div>
   <div class="errors-notice" data-errors-empty-filter hidden>Nenhuma questão corresponde aos filtros. Experimente outra opção.</div>
   ${prioritized.length?'':'<p class="errors-empty">Ainda não há questões para praticar neste banco. Continue resolvendo exercícios e questões.</p>'}
   <p class="errors-small">Um acerto não apaga o histórico de dificuldades. A remoção da lista exige confirmação e preserva as respostas já registradas.</p>
 </section>
 <details class="errors-main-detail" id="errors-analysis"><summary><span class="errors-detail-label"><span class="errors-section-index">02 · COMPREENSÃO</span><strong>Análise das dificuldades</strong><small>Mapa por módulo, subtópico e causa; sugestões de reforço</small></span><span class="errors-chevron" aria-hidden="true">⌄</span></summary>
 <div class="errors-main-body"><h3>Mapa de dificuldades</h3>${analysisPanel(state)}<h3>Reforço direcionado</h3><p class="errors-small">Sugestões baseadas nas questões registradas no aplicativo.</p>${reinforcementPanel(state)}</div></details>
 <details class="errors-main-detail" id="errors-history"><summary><span class="errors-detail-label"><span class="errors-section-index">03 · EVOLUÇÃO</span><strong>Histórico e revisão espaçada</strong><small>Tentativas, reincidências e recuperação ao longo do tempo</small></span><span class="errors-chevron" aria-hidden="true">⌄</span></summary>
 <div class="errors-main-body">${historyPanel(state,[...idSet])}</div></details>
 </section>`;
 installErrorListControls(main);
}

export function renderReviewQuestion(main,state,mode,id){
 const q=questionMap().get(id);
 if(!q){renderReviewList(main,state,mode);return;}
 const attempt=state.progress?.reviewAttempts?.[id];
 const order=Array.isArray(attempt?.order)&&attempt.order.length===q.options.length?attempt.order:q.options.map((_,i)=>i);
 const answered=Number.isInteger(attempt?.answer);
 const correct=answered&&attempt.answer===q.answer;
 const assessed=!!attempt?.assessment;
 const options=order.map((idx,i)=>`<button type="button" class="btn ${answered&&idx===q.answer?'is-correct':''}" style="display:block;margin:8px 0;text-align:left;width:100%" ${answered?'disabled':''} data-review-choice="${idx}">${q.type==='ce'?'':letter(i)+') '}${escapeHtml(q.options[idx])}</button>`).join('');
 const explanation=answered?`<section class="exercise-feedback"><h3>${correct?'Resposta correta':'Resposta incorreta'} — ${escapeHtml(q.options[q.answer])}</h3><p><strong>Fundamento:</strong> ${escapeHtml(q.explanation)}</p><ol>${order.map(i=>`<li><strong>${escapeHtml(q.options[i])}:</strong> ${escapeHtml(q.optionComments?.[i]||'Consulte o fundamento.')}</li>`).join('')}</ol><p><strong>Conceito:</strong> ${escapeHtml(q.concept)}</p><p><strong>Pegadinha:</strong> ${escapeHtml(q.trap)}</p><p><strong>Exemplo adicional:</strong> ${escapeHtml(q.newExample)}</p></section>`:'';
 const reasons=correct?['seguro','duvida','chute']:['desconhecimento','pegadinha','interpretacao','desatencao'];
 main.innerHTML=`<section class="module-detail${mode==='erros'?' errors-question':''}"><button class="btn" data-review-back="1">← Voltar</button><h1 class="page-title">Revisão da questão</h1><p>${escapeHtml(q.subtopicId||'')}</p><h2>${escapeHtml(q.stem)}</h2>${options}${explanation}
 ${answered&&!assessed?`<h3>Como foi sua resposta?</h3>${reasons.map(r=>`<button type="button" class="btn" style="margin:4px" data-review-assess="${r}">${labels[r]}</button>`).join('')}`:''}
 ${assessed?`<div class="notice">Revisão registrada: ${escapeHtml(labels[attempt.assessment])}. Próxima revisão em ${interval[attempt.assessment]} dia(s).</div><button class="btn btn-primary" data-review-back="1">Voltar à lista</button>`:''}</section>`;
}
export function beginReview(state,id){
 const q=questionMap().get(id);
 if(!q)return false;
 state.progress.reviewAttempts??={};
 state.progress.reviewAttempts[id]={order:q.type==='ce'?q.options.map((_,i)=>i):shuffled(q.options.map((_,i)=>i)),answer:null,assessment:null,startedAt:new Date().toISOString()};
 return true;
}
export function answerReview(state,id,choice){
 const a=state.progress?.reviewAttempts?.[id],q=questionMap().get(id);
 if(!a||!q||Number.isInteger(a.answer)||!Number.isInteger(choice)||choice<0||choice>=q.options.length)return false;
 a.answer=choice;return true;
}
export function assessReview(state,id,reason){
 const a=state.progress?.reviewAttempts?.[id],q=questionMap().get(id);
 if(!a||!q||!Number.isInteger(a.answer)||a.assessment||!Object.hasOwn(interval,reason))return false;
 const correct=a.answer===q.answer;
 if(!((correct?['seguro','duvida','chute']:['desconhecimento','pegadinha','interpretacao','desatencao']).includes(reason)))return false;
 const adaptive=scheduleAdaptiveReview(state,'question',id,reason);
 const now=new Date(),next=new Date(adaptive.dueAt);
 a.assessment=reason;a.completedAt=now.toISOString();
 state.progress.reviewSchedule??={};
 state.progress.reviewSchedule[id]={questionId:id,moduleId:q.moduleId||q.subtopicId?.slice(0,5),subtopicId:q.subtopicId,reason,correct,intervalDays:adaptive.intervalDays,dueAt:next.toISOString(),updatedAt:now.toISOString()};
 state.progress.questionHistory??={};
 state.progress.questionHistory[id]={...(state.progress.questionHistory[id]||{}),lastAnswer:a.answer,correct,assessment:reason,reviewAt:next.toISOString(),intervalDays:adaptive.intervalDays,updatedAt:now.toISOString()};
 if(!correct){state.progress.errors??=[];if(!state.progress.errors.some(x=>x.questionId===id))state.progress.errors.push({questionId:id,moduleId:q.moduleId||q.subtopicId?.slice(0,5),subtopicId:q.subtopicId,createdAt:now.toISOString()});}
 return true;
}
export function removeError(state,id){
 const errors=state.progress?.errors;
 if(!Array.isArray(errors))return false;
 const before=errors.length;state.progress.errors=errors.filter(x=>x?.questionId!==id);return before!==state.progress.errors.length;
}
