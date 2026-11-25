import { getModuleById } from '../data/modules.js';
import { getDiagnosticCards } from '../data/diagnostics.js';

export const DIAGNOSTIC_OPTIONS = Object.freeze({ sei: 100, duvida: 50, nao: 0 });
const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const hasAnswer = (answers, id) => Object.prototype.hasOwnProperty.call(DIAGNOSTIC_OPTIONS, answers[id]);

export function getDiagnosticSummary(state, moduleId) {
  const module = getModuleById(moduleId);
  const cards = module && getDiagnosticCards(module);
  if (!cards) return null;
  const answers = state.progress?.diagnostics?.[moduleId]?.answers || {};
  const valid = cards.filter(card => hasAnswer(answers, card.subtopicId));
  const total = cards.length;
  const completed = valid.length === total;
  const score = completed ? Math.round(valid.reduce((sum, card) => sum + DIAGNOSTIC_OPTIONS[answers[card.subtopicId]], 0) / total) : null;
  return { total, answered: valid.length, completed, score, cards, answers };
}

export function saveDiagnosticAnswer(state, moduleId, subtopicId, choice) {
  const summary = getDiagnosticSummary(state, moduleId);
  if (!summary || !summary.cards.some(card => card.subtopicId === subtopicId) || !Object.prototype.hasOwnProperty.call(DIAGNOSTIC_OPTIONS, choice)) return false;
  state.progress ||= {};
  state.progress.diagnostics ||= {};
  const record = state.progress.diagnostics[moduleId] ||= { answers: {} };
  record.answers ||= {};
  record.answers[subtopicId] = choice;
  record.updatedAt = new Date().toISOString();
  return true;
}

export function resetDiagnostic(state, moduleId) {
  if (!getDiagnosticSummary(state, moduleId)) return false;
  delete state.progress.diagnostics[moduleId];
  return true;
}

function cardMarkup(card, flipped, editing = false) {
  return `<article class="diagnostic-card" aria-label="Flashcard diagnóstico">
    <p class="diagnostic-topic">${escapeHtml(card.subtopicTitle)} · ${flipped ? 'Verso' : 'Frente'}</p>
    <h2>${escapeHtml(flipped ? card.answer : card.question)}</h2>
    ${!flipped ? '<p class="diagnostic-help">Pense na resposta antes de revelar o verso.</p><button type="button" class="btn btn-primary" data-action="diag-flip">Virar flashcard e conferir resposta</button>' : `
      <p class="diagnostic-help">Compare com sua resposta mental. Só então classifique o conhecimento.</p>
      <div class="diagnostic-choices">
        <button type="button" class="btn" data-diag-choice="sei" data-diag-subtopic="${escapeHtml(card.subtopicId)}">Eu sei · 100%</button>
        <button type="button" class="btn" data-diag-choice="duvida" data-diag-subtopic="${escapeHtml(card.subtopicId)}">Tenho dúvida · 50%</button>
        <button type="button" class="btn" data-diag-choice="nao" data-diag-subtopic="${escapeHtml(card.subtopicId)}">Não sei · 0%</button>
      </div><button type="button" class="btn" data-action="diag-flip">Ver a pergunta novamente</button>`}
    ${editing ? '<p class="diagnostic-help">Você está alterando uma resposta anterior.</p>' : ''}
  </article>`;
}

export function renderDiagnostic(mainElement, moduleId, state, { editSubtopicId = null, flipped = false } = {}) {
  const module = getModuleById(moduleId);
  const summary = getDiagnosticSummary(state, moduleId);
  if (!module || !summary) {
    mainElement.innerHTML = '<div class="notice">Diagnóstico ainda indisponível neste módulo. <button class="btn" type="button" data-action="diagnostic-back">Voltar ao módulo</button></div>';
    return;
  }
  const card = editSubtopicId
    ? summary.cards.find(item => item.subtopicId === editSubtopicId)
    : summary.cards.find(item => !hasAnswer(summary.answers, item.subtopicId));
  mainElement.innerHTML = `<section class="diagnostic-view" aria-labelledby="pageTitle">
    <button type="button" class="btn" data-action="diagnostic-back">← Voltar ao módulo</button>
    <h1 class="page-title" id="pageTitle">Diagnóstico — ${escapeHtml(module.title)}</h1>
    <p class="page-subtitle">Responda mentalmente, vire o flashcard e compare com o verso antes de se avaliar.</p>
    <div class="diagnostic-progress"><strong>${summary.answered} de ${summary.total} cartões avaliados</strong><progress max="${summary.total}" value="${summary.answered}"></progress></div>
    ${card ? cardMarkup(card, flipped, Boolean(editSubtopicId)) : `<article class="diagnostic-card"><h2>Diagnóstico concluído</h2><p>Autoavaliação inicial: <strong>${summary.score}%</strong>. Este resultado não é uma nota de prova nem comprova domínio.</p></article>`}
    <h2 class="section-title">Cartões do módulo</h2>
    <div class="diagnostic-review">${summary.cards.map(item => {
      const choice = summary.answers[item.subtopicId];
      const label = choice === 'sei' ? 'Eu sei' : choice === 'duvida' ? 'Tenho dúvida' : choice === 'nao' ? 'Não sei' : 'Pendente';
      return `<div class="diagnostic-review-row"><span>${escapeHtml(item.subtopicTitle)}</span><span>${label}</span>${hasAnswer(summary.answers, item.subtopicId) ? `<button class="btn" type="button" data-diag-edit="${escapeHtml(item.subtopicId)}">Rever e alterar</button>` : ''}</div>`;
    }).join('')}</div>
    ${summary.answered ? '<button class="btn" type="button" data-action="diagnostic-reset">Recomeçar diagnóstico</button>' : ''}
  </section>`;
}

export function renderDiagnosticEdit(mainElement, moduleId, subtopicId, state) {
  renderDiagnostic(mainElement, moduleId, state, { editSubtopicId: subtopicId, flipped: false });
}
