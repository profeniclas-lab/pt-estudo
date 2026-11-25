/**
 * ADM-ESTUDO — Fase 22-A / Lote 3: Banco de Questões
 * Moderniza apresentação e filtros sem alterar gabaritos, registro de respostas
 * ou os critérios pedagógicos existentes.
 */
import { MODULES, AREAS } from '../data/modules.js';
import { recordBankReview } from '../core/review-events.js';
import { questionsForModule } from '../data/questions.js';
import { matchesQuestionStatus, countQuestionStatuses, QUESTION_STATUS_OPTIONS } from '../core/question-status.js';

const esc = value => String(value ?? '').replace(/[&<>"']/g, char =>
  ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const shuffle = values => {
  const copy = [...values];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};
const valid = q => q && typeof q.id === 'string' && Array.isArray(q.options)
  && q.options.length >= 2 && Number.isInteger(q.answer)
  && q.answer >= 0 && q.answer < q.options.length;
const defaultFilter = () => ({
  area: 'todas', moduleId: 'todos', difficulty: 'todas', situation: 'todas', limit: 'todas'
});
const limitOptions = ['todas', '10', '20', '30'];
const difficulties = [
  ['todas', 'Todas'], ['facil', 'Fácil'], ['media', 'Média'], ['dificil', 'Difícil']
];
const situations = [
  ['todas', 'Todas'], ['nao-respondidas', 'Não respondidas'],
  ['respondidas', 'Respondidas'], ['erradas', 'Erradas'], ['acertadas', 'Acertadas']
];
const types = {
  ce: 'Certo ou Errado', classica: 'Múltipla escolha', vf: 'Verdadeiro/Falso',
  combinacao: 'Combinação', associacao: 'Associação', lacunas: 'Lacunas', exceto: 'EXCETO'
};
const difficultyLabels = {facil: 'Fácil', media: 'Média', dificil: 'Difícil'};

function bank() {
  const seen = new Set(), out = [];
  for (const module of MODULES) {
    for (const q of questionsForModule(module.id) || []) {
      if (!valid(q) || seen.has(q.id)) continue;
      seen.add(q.id);
      out.push({...q, moduleId: module.id, area: module.area});
    }
  }
  return out;
}
const get = id => bank().find(q => q.id === id);

function store(state) {
  state.progress ??= {};
  state.progress.questionBank ??= {filter: defaultFilter(), session: null};
  const data = state.progress.questionBank;
  data.filter = {...defaultFilter(), ...(data.filter || {})};
  if (!limitOptions.includes(data.filter.limit)) data.filter.limit = 'todas';
  return data;
}
function matches(q, filter, history) {
  return (filter.area === 'todas' || q.area === filter.area)
    && (filter.moduleId === 'todos' || q.moduleId === filter.moduleId)
    && (filter.difficulty === 'todas' || q.difficulty === filter.difficulty)
    && matchesQuestionStatus(q, history, filter.situation);
}
function option(value, label, selected) {
  return `<option value="${esc(value)}" ${value === selected ? 'selected' : ''}>${esc(label)}</option>`;
}
function quickButton(group, value, label, count, selected) {
  return `<button type="button" class="qb-chip${selected === value ? ' is-active' : ''}"
    data-bank-quick="${esc(group)}" data-bank-value="${esc(value)}"
    aria-pressed="${selected === value}" ${selected === value ? 'aria-current="true"' : ''}>
    <span>${esc(label)}</span>${count === null ? '' : `<span class="qb-chip-count">${count}</span>`}
  </button>`;
}
function summaryCard(label, value, helper) {
  return `<article class="qb-stat"><span class="qb-stat-label">${esc(label)}</span>
    <strong class="qb-stat-value">${esc(value)}</strong>
    <span class="qb-stat-helper">${esc(helper)}</span></article>`;
}
function field(label, id, content) {
  return `<label class="qb-field" for="${id}"><span class="qb-field-title">${esc(label)}</span>
    <span class="qb-select-wrap"><select id="${id}" ${content.attrs}>${content.options}</select></span>
  </label>`;
}

/** Mantém os mesmos quatro filtros antigos; 'limit' é opcional e inicia em 'todas'. */
export function updateBankFilter(state, key, value) {
  const data = store(state);
  if (data.session) return false;
  if (!['area', 'moduleId', 'difficulty', 'situation', 'limit'].includes(key)) return false;
  const next = {...data.filter, [key]: value};
  if (key === 'area') next.moduleId = 'todos';
  if (!['todas', ...Object.keys(AREAS)].includes(next.area)) return false;
  if (next.moduleId !== 'todos' && !MODULES.some(m =>
    m.id === next.moduleId && (next.area === 'todas' || m.area === next.area))) return false;
  if (!difficulties.some(([v]) => v === next.difficulty)) return false;
  if (!QUESTION_STATUS_OPTIONS.includes(next.situation)) return false;
  if (!limitOptions.includes(next.limit)) return false;
  data.filter = next;
  return true;
}

/** Nunca modifica respostas, revisão, histórico ou sessão em andamento. */
export function resetBankFilters(state) {
  const data = store(state);
  if (data.session) return false;
  data.filter = defaultFilter();
  return true;
}

export function startBankSession(state) {
  const data = store(state);
  if (data.session) return false;
  const history = state.progress?.questionHistory || {};
  const available = shuffle(bank().filter(q => matches(q, data.filter, history)));
  if (!available.length) return false;
  const selection = data.filter.limit === 'todas'
    ? available : available.slice(0, Number(data.filter.limit));
  data.session = {
    ids: selection.map(q => q.id), cursor: 0, answers: {},
    orders: Object.fromEntries(selection.map(q => [q.id,
      q.type === 'ce' ? q.options.map((_, i) => i) : shuffle(q.options.map((_, i) => i))])),
    startedAt: new Date().toISOString()
  };
  return true;
}
export function answerBankQuestion(state, id, answer) {
  const session = store(state).session, q = get(id);
  if (!session || session.ids[session.cursor] !== id || !q
    || Object.hasOwn(session.answers, id) || !Number.isInteger(answer)
    || answer < 0 || answer >= q.options.length) return false;
  session.answers[id] = answer;
  if (!recordBankReview(state, q, answer)) return false;
  // F23/L04: evidência específica do Banco, independente de revisões posteriores.
  // Fica no mesmo registro que o reinício por módulo já remove, evitando crédito residual.
  const history = state.progress?.questionHistory?.[id];
  if (history) history.bankAttempt = {lastAnswer:answer,updatedAt:new Date().toISOString()};
  state.progress.modules ??= {};
  state.progress.modules[q.moduleId] ??= {started:true};
  return true;
}
export function nextBankQuestion(state) {
  const session = store(state).session;
  if (!session || !Object.hasOwn(session.answers, session.ids[session.cursor])
    || session.cursor >= session.ids.length - 1) return false;
  session.cursor++;
  return true;
}
export function closeBankSession(state) {
  const data = store(state);
  if (!data.session) return false;
  data.session = null;
  return true;
}

function renderFilters(main, state, data, all) {
  const history = state.progress?.questionHistory || {};
  const filter = data.filter;
  const available = all.filter(q => matches(q, filter, history));
  const inScope = all.filter(q =>
    (filter.area === 'todas' || q.area === filter.area)
    && (filter.moduleId === 'todos' || q.moduleId === filter.moduleId)
    && (filter.difficulty === 'todas' || q.difficulty === filter.difficulty));
  const counts = countQuestionStatuses(inScope, history);
  const modules = MODULES.filter(m => filter.area === 'todas' || m.area === filter.area);
  const filterCount = Number(filter.area !== 'todas') + Number(filter.moduleId !== 'todos')
    + Number(filter.difficulty !== 'todas') + Number(filter.situation !== 'todas')
    + Number(filter.limit !== 'todas');
  const planned = filter.limit === 'todas'
    ? available.length : Math.min(available.length, Number(filter.limit));

  main.innerHTML = `<section class="module-detail qb-page" aria-labelledby="qb-title">
    <header class="qb-hero">
      <div class="qb-hero-label">PRÁTICA E APRENDIZAGEM</div>
      <h1 class="qb-hero-title" id="qb-title">Banco de Questões</h1>
      <p>Escolha o conteúdo e pratique com correção comentada, no seu ritmo.</p>
      <div class="qb-hero-note">Questões cadastradas no aplicativo — nem todas são questões reais de concursos.</div>
    </header>
    <div class="qb-summary" aria-label="Resumo do banco">
      ${summaryCard('Disponíveis no banco', all.length, 'Questões válidas cadastradas')}
      ${summaryCard('Resultado dos filtros', available.length, 'Questões que correspondem à seleção')}
      ${summaryCard('Já respondidas', counts.respondidas, 'Na área, módulo e dificuldade selecionados')}
    </div>
    <section class="qb-panel" aria-labelledby="qb-filter-title">
      <div class="qb-panel-heading">
        <div><span class="qb-eyebrow">CONFIGURAR PRÁTICA</span>
          <h2 id="qb-filter-title">Encontre suas questões</h2>
          <p>Combine área, módulo, dificuldade e situação.</p></div>
        <button type="button" class="qb-reset" data-bank-reset="1" ${filterCount ? '' : 'disabled'}>
          <span aria-hidden="true">↺</span> Limpar filtros${filterCount ? ` (${filterCount})` : ''}</button>
      </div>
      <div class="qb-fields">
        ${field('Área', 'qb-area', {attrs:'data-bank-filter="area"', options:
          option('todas', 'Todas as áreas', filter.area) + Object.entries(AREAS).map(([id, name]) =>
            option(id, name, filter.area)).join('')})}
        ${field('Módulo', 'qb-module', {attrs:'data-bank-filter="moduleId"', options:
          option('todos', 'Todos os módulos', filter.moduleId) + modules.map(m =>
            option(m.id, `${m.id} — ${m.title}`, filter.moduleId)).join('')})}
      </div>
      <div class="qb-choice-group" role="group" aria-labelledby="qb-difficulty-label">
        <h3 id="qb-difficulty-label">Dificuldade</h3>
        <div class="qb-chips">${difficulties.map(([id, label]) =>
          quickButton('difficulty', id, label, null, filter.difficulty)).join('')}</div>
      </div>
      <div class="qb-choice-group" role="group" aria-labelledby="qb-situation-label">
        <h3 id="qb-situation-label">Situação das questões</h3>
        <div class="qb-chips">${situations.map(([id, label]) =>
          quickButton('situation', id, label, counts[id], filter.situation)).join('')}</div>
        <p class="qb-hint">Acertos e erros correspondem à última resposta de cada questão, não ao histórico completo.</p>
      </div>
      <div class="qb-session-settings">
        ${field('Quantidade por sessão', 'qb-limit', {attrs:'data-bank-filter="limit"', options:
          [['todas', 'Todas as questões filtradas'], ['10', 'Até 10 questões'],
            ['20', 'Até 20 questões'], ['30', 'Até 30 questões']]
            .map(([id, label]) => option(id, label, filter.limit)).join('')})}
        <p>As questões são sorteadas sem repetição durante cada sessão.</p>
      </div>
    </section>
    <section class="qb-start-panel" aria-label="Iniciar sessão">
      <div><span class="qb-eyebrow">PRONTO PARA PRATICAR?</span>
        <h2>${planned ? `${planned} questão${planned === 1 ? '' : 'ões'} nesta sessão` : 'Nenhuma questão encontrada'}</h2>
        <p>${planned ? `Encontradas ${available.length} questão(ões) com estes filtros.`
          : 'Experimente outra área, dificuldade ou situação.'}</p></div>
      <button type="button" class="btn btn-primary qb-start-button" data-action="bank-start"
        ${planned ? '' : 'disabled'}>Iniciar prática <span aria-hidden="true">→</span></button>
    </section>
    ${all.length ? '' : '<div class="notice">Nenhuma questão válida encontrada. Confira o catálogo de questões.</div>'}
    <p class="qb-footnote">Suas respostas são registradas individualmente e continuam no histórico mesmo após encerrar uma sessão.</p>
  </section>`;
}

function renderAnswer(main, session) {
  const q = get(session.ids[session.cursor]);
  if (!q) {
    main.innerHTML = `<section class="qb-page qb-panel"><h1>Questão indisponível</h1>
      <p>O banco de questões pode ter mudado durante esta sessão.</p>
      <button type="button" class="btn" data-action="bank-close">Encerrar sessão</button></section>`;
    return;
  }
  const order = session.orders[q.id] || q.options.map((_, i) => i);
  const answered = Object.hasOwn(session.answers, q.id);
  const selected = session.answers[q.id];
  const correct = answered && selected === q.answer;
  const completed = Object.keys(session.answers).length;
  const total = session.ids.length;
  const current = session.cursor + 1;
  const progress = Math.round((completed / total) * 100);
  const final = current === total;
  const commentItems = order.map((index, position) => {
    const comment = q.optionComments?.[index];
    return `<li><span class="qb-comment-letter">${q.type === 'ce' ? `Item ${position + 1}` : `${String.fromCharCode(65 + position)})`}</span>
      <span><strong>${esc(q.options[index])}</strong>${comment ? ` — ${esc(comment)}` : ''}</span></li>`;
  }).join('');
  const explanation = answered ? `<section class="qb-correction ${correct ? 'is-correct' : 'is-wrong'}" aria-live="polite">
    <div class="qb-feedback-head"><span aria-hidden="true">${correct ? '✓' : '!'}</span>
      <div><span class="qb-eyebrow">CORREÇÃO IMEDIATA</span>
        <h3>${correct ? 'Você acertou!' : 'Vamos revisar esta questão'}</h3></div></div>
    <p><strong>Resposta correta:</strong> ${esc(q.options[q.answer])}</p>
    ${q.explanation ? `<div class="qb-explanation"><h4>Fundamento</h4><p>${esc(q.explanation)}</p></div>` : ''}
    ${order.some(i => q.optionComments?.[i]) ? `<details class="qb-details"><summary>Comentários das alternativas</summary>
      <ol>${commentItems}</ol></details>` : ''}
    ${q.concept ? `<div class="qb-explain-extra"><h4>Conceito principal</h4><p>${esc(q.concept)}</p></div>` : ''}
    ${q.trap ? `<div class="qb-explain-extra"><h4>Atenção à pegadinha</h4><p>${esc(q.trap)}</p></div>` : ''}
    ${q.newExample ? `<div class="qb-explain-extra"><h4>Exemplo adicional</h4><p>${esc(q.newExample)}</p></div>` : ''}
  </section>` : '';

  main.innerHTML = `<section class="module-detail qb-page qb-session" aria-labelledby="qb-session-title">
    <div class="qb-session-top">
      <button type="button" class="btn qb-exit" data-action="bank-close">← Encerrar sessão</button>
      <span class="qb-session-number">Questão ${current} de ${total}</span>
    </div>
    <div class="qb-session-progress"><div class="qb-progress-meta"><span>${completed} respondida${completed === 1 ? '' : 's'}</span>
      <strong>${progress}% da sessão</strong></div>
      <div class="qb-progress-track" role="progressbar" aria-label="Progresso da sessão"
        aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}">
        <div class="qb-progress-fill" style="width:${progress}%"></div></div></div>
    <article class="qb-question-card">
      <div class="qb-question-tags"><span>${esc(q.moduleId)}</span>
        ${q.subtopicId ? `<span>${esc(q.subtopicId)}</span>` : ''}
        ${q.type ? `<span>${esc(types[q.type] || q.type)}</span>` : ''}
        ${q.difficulty ? `<span>${esc(difficultyLabels[q.difficulty] || q.difficulty)}</span>` : ''}</div>
      <h1 id="qb-session-title" class="qb-question-title">${esc(q.stem)}</h1>
      <div class="qb-question-help">${answered ? 'Resposta registrada. Consulte a correção abaixo.' : 'Escolha uma alternativa para ver a correção.'}</div>
      <div class="qb-options" role="group" aria-label="Alternativas">
        ${order.map((original, position) => {
          const chosen = answered && selected === original;
          const right = answered && original === q.answer;
          const style = right ? ' is-correct' : (chosen ? ' is-wrong' : '');
          return `<button type="button" class="qb-option${style}"
            data-bank-choice="${original}" ${answered ? 'disabled' : ''}
            ${chosen ? 'aria-pressed="true"' : ''}>
            <span class="qb-option-letter">${q.type === 'ce' ? '•' : String.fromCharCode(65 + position)}</span>
            <span class="qb-option-text">${esc(q.options[original])}</span>
            ${right ? '<span class="qb-option-mark" aria-label="Alternativa correta">✓</span>' : ''}
            ${chosen && !right ? '<span class="qb-option-mark" aria-label="Sua resposta incorreta">×</span>' : ''}
          </button>`;
        }).join('')}
      </div>
    </article>
    ${explanation}
    ${answered ? `<div class="qb-bottom-action">${final
      ? `<p class="qb-finished">Você respondeu às ${total} questões desta sessão. As respostas foram salvas.</p>
        <button type="button" class="btn btn-primary qb-start-button" data-action="bank-close">Voltar aos filtros</button>`
      : `<button type="button" class="btn btn-primary qb-start-button" data-action="bank-next">Próxima questão →</button>`}</div>` : ''}
  </section>`;
}

export function renderQuestionBank(main, state) {
  const data = store(state);
  if (data.session) renderAnswer(main, data.session);
  else renderFilters(main, state, data, bank());
}
