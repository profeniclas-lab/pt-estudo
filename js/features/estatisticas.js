/**
 * ADM-ESTUDO — Fase 22-A / Lote 5: Estatísticas sem duplicações visuais.
 * Somente leitura: não chama saveState e não modifica o progresso.
 * Mantém o contrato collectStudyStats para consumidores existentes.
 */
import { MODULES, AREAS } from '../data/modules.js';
import { detailedLearningStats } from '../core/learning-detail.js';
import { learningTimeline } from '../core/learning-timeline.js';
import { dashboardConsistency } from '../core/dashboard-consistency.js';
import { moduleAchievement } from './module-achievement.js';
import { getDiagnosticSummary } from './diagnostic.js';
import { lessonStats } from './lessons.js';
import { exerciseSummary } from './exercises.js';
import { isModuleCompleted } from '../core/progress.js';

const esc = value => String(value ?? '').replace(/[&<>"']/g,
  ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[ch]));
const pct = value => Number.isFinite(value) ? `${Math.round(value)}%` : '—';
const sum = (values, project) => values.reduce((n, item) => n + project(item), 0);
const validDate = value => typeof value === 'string' && Number.isFinite(Date.parse(value));
const formatDate = value => validDate(value) ? new Date(value).toLocaleDateString('pt-BR') : '—';
const percentWidth = value => Number.isFinite(value) ? Math.max(0, Math.min(100, value)) : 0;
const normalizeSearch = value => String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

export function collectStudyStats(state) {
  const p = state.progress || {};
  const modules = MODULES.map(module => {
    const achievement = moduleAchievement(state, module);
    const diagnostic = getDiagnosticSummary(state, module.id);
    const lessons = lessonStats(state, module);
    const exercise = exerciseSummary(state, module.id);
    // Mesmo critério de atividade do Dashboard: inclui registros de módulo.
    const started = Boolean(diagnostic?.answered || lessons?.completed || lessons?.rated ||
      exercise?.answered || p.modules?.[module.id]);
    return {module, achievement, diagnostic, lessons, exercise, started,
      completed:isModuleCompleted(achievement, 75)};
  });
  const started = modules.filter(x => x.started);
  const completed = started.filter(x => x.completed);
  const exerciseSessions = modules.filter(x => x.exercise?.total);
  const finishedExercises = exerciseSessions.filter(x => x.exercise.finished);
  const answered = sum(exerciseSessions, x => x.exercise.answered || 0);
  const correct = sum(exerciseSessions, x => x.exercise.correct || 0);
  const simulations = (Array.isArray(p.simulados?.history) ? p.simulados.history : [])
    .filter(x => x?.finishedAt && Number.isFinite(Number(x.score)));
  const review = Object.values(p.reviewSchedule || {}).filter(x => x?.questionId && validDate(x.dueAt));
  const due = review.filter(x => Date.parse(x.dueAt) <= Date.now());
  const errors = Array.isArray(p.errors) ? p.errors.filter(x => x?.questionId) : [];
  const flash = Object.values(p.flashcards || {}).filter(x => x && typeof x === 'object' && ['sei', 'duvida', 'nao'].includes(x.rating));
  const flashDue = flash.filter(x => validDate(x.dueAt) && Date.parse(x.dueAt) <= Date.now());
  const simCorrect = sum(simulations, x => Number(x.correct) || 0);
  const simTotal = sum(simulations, x => Number(x.total) || 0);
  return {modules, started, completed, exerciseSessions, finishedExercises, answered, correct,
    simulations, simCorrect, simTotal, review, due, errors, flash, flashDue,
    lessonDone:sum(modules, x => x.lessons?.completed || 0),
    lessonTotal:sum(modules, x => x.lessons?.total || 0),
    avgAchievement:started.length ? Math.round(sum(started, x => x.achievement.percentage || 0) / started.length) : null};
}

function statCard(title, value, description, kind = 'primary') {
  return `<article class="stats-metric stats-metric--${kind}">
    <span class="stats-metric-title">${esc(title)}</span>
    <strong class="stats-metric-value">${esc(value)}</strong>
    <span class="stats-metric-help">${esc(description)}</span>
  </article>`;
}

function renderAreaRow(area) {
  const width = percentWidth(area.avg);
  return `<article class="stats-area-row">
    <div class="stats-area-head">
      <strong>${esc(area.title)}</strong>
      <span>${area.started} de ${area.total} iniciados · ${area.completed} concluídos</span>
    </div>
    <div class="stats-area-performance">
      <div class="stats-track" role="img" aria-label="Aproveitamento médio ${esc(area.avg === null ? 'indisponível' : pct(area.avg))}">
        ${area.avg === null ? '' : `<span class="stats-track-fill" style="width:${width}%"></span>`}
      </div>
      <strong>${pct(area.avg)}</strong>
    </div>
  </article>`;
}

function renderModuleRow(item) {
  const isStarted = item.started;
  const status = item.completed ? 'concluido' : isStarted ? 'andamento' : 'nao-iniciado';
  const rawLabel = `${item.id} ${item.title}`;
  return `<tr data-stats-module-row data-stats-area="${esc(item.area)}"
      data-stats-status="${status}" data-stats-search="${esc(normalizeSearch(rawLabel))}">
    <th scope="row">
      <span class="stats-module-name">${esc(item.id)} — ${esc(item.title)}</span>
      <span class="stats-module-status">${item.completed ? 'Concluído' : isStarted ? 'Em andamento' : 'Não iniciado'}</span>
    </th>
    <td>
      <div class="stats-cell-progress">
        <strong>${isStarted ? pct(item.achievement) : '—'}</strong>
        ${isStarted && Number.isFinite(item.achievement) ? `<span class="stats-track stats-track--small"><span class="stats-track-fill" style="width:${percentWidth(item.achievement)}%"></span></span>` : ''}
      </div>
    </td>
    <td>${isStarted ? pct(item.coverage) : '—'}</td>
    <td>${pct(item.exercisePct)}</td>
    <td>${item.errors}</td>
    <td>${item.due}</td>
    <td><button type="button" class="btn stats-open-module" data-stats-module="${esc(item.id)}">Abrir</button></td>
  </tr>`;
}

function renderTimelineRows(months) {
  if (!months.length) return '<p class="stats-empty">Ainda não há atividades com datas suficientes para montar a evolução mensal.</p>';
  return `<div class="stats-table-wrap" role="region" aria-label="Evolução mensal dos estudos" tabindex="0">
    <table class="stats-table">
      <thead><tr><th scope="col">Mês</th><th scope="col">Simulados</th><th scope="col">Média dos simulados</th><th scope="col">Aulas*</th><th scope="col">Questões*</th></tr></thead>
      <tbody>${months.map(x => `<tr><th scope="row">${esc(x.month.slice(5))}/${esc(x.month.slice(0,4))}</th>
        <td>${x.simulations}</td><td>${pct(x.simAverage)}</td><td>${x.lessons}</td><td>${x.questionUpdates}</td></tr>`).join('')}</tbody>
    </table>
  </div>`;
}

function installLocalModuleFilters(root) {
  const fieldArea = root.querySelector('[data-stats-filter="area"]');
  const fieldStatus = root.querySelector('[data-stats-filter="status"]');
  const fieldSearch = root.querySelector('[data-stats-filter="search"]');
  const rows = [...root.querySelectorAll('[data-stats-module-row]')];
  const counter = root.querySelector('[data-stats-result-count]');
  const empty = root.querySelector('[data-stats-empty]');
  const apply = () => {
    const area = fieldArea?.value || 'todas';
    const status = fieldStatus?.value || 'iniciados';
    const query = normalizeSearch(fieldSearch?.value);
    let visible = 0;
    for (const row of rows) {
      const rowStatus = row.dataset.statsStatus;
      const matchStatus = status === 'todos' ||
        (status === 'iniciados' && rowStatus !== 'nao-iniciado') ||
        (status === 'andamento' && rowStatus === 'andamento') ||
        (status === 'concluidos' && rowStatus === 'concluido') ||
        (status === 'nao-iniciados' && rowStatus === 'nao-iniciado');
      const matches = (area === 'todas' || row.dataset.statsArea === area) &&
        matchStatus && (!query || row.dataset.statsSearch?.includes(query));
      row.hidden = !matches;
      if (matches) visible++;
    }
    if (counter) counter.textContent = `${visible} de ${rows.length} módulo(s) exibido(s)`;
    if (empty) empty.hidden = visible !== 0;
  };
  fieldArea?.addEventListener('change', apply);
  fieldStatus?.addEventListener('change', apply);
  fieldSearch?.addEventListener('input', apply);
  root.querySelector('[data-stats-clear]')?.addEventListener('click', () => {
    if (fieldArea) fieldArea.value = 'todas';
    if (fieldStatus) fieldStatus.value = 'iniciados';
    if (fieldSearch) fieldSearch.value = '';
    apply();
    fieldSearch?.focus();
  });
  apply();
}

export function renderStatistics(main, state) {
  const s = collectStudyStats(state);
  const {byArea, rows} = detailedLearningStats(state, s.modules, AREAS);
  const timeline = learningTimeline(state);
  const consistency = dashboardConsistency(state, s.modules);
  const errorCount = new Set(s.errors.map(x => x.questionId)).size;
  const recent = [...s.simulations]
    .filter(x => validDate(x.finishedAt))
    .sort((a,b) => Date.parse(b.finishedAt) - Date.parse(a.finishedAt))
    .slice(0, 10);
  const areaOptions = Object.entries(AREAS).map(([key, title]) =>
    `<option value="${esc(key)}">${esc(title)}</option>`).join('');

  main.innerHTML = `<section class="stats-page" id="stats-learning">
    <header class="stats-hero">
      <span class="stats-hero-label">PROGRESSO DE APRENDIZAGEM</span>
      <h1>Estatísticas de estudo</h1>
      <p>Seu desempenho em um só lugar, sem repetir os mesmos indicadores em diferentes resumos.</p>
    </header>

    <section aria-labelledby="stats-summary-title" class="stats-section">
      <h2 id="stats-summary-title">Visão geral</h2>
      <div class="stats-primary-grid">
        ${statCard('Módulos iniciados', s.started.length, `De ${MODULES.length} cadastrados`)}
        ${statCard('Módulos concluídos', s.completed.length, 'Meta: 75 pontos no percurso, mesmo com etapas pendentes')}
        ${statCard('Aproveitamento médio', pct(s.avgAchievement), 'Média dos módulos iniciados')}
        ${statCard('Revisões vencidas', s.due.length, `${s.review.length} revisões agendadas`)}
      </div>
    </section>

    <section aria-labelledby="stats-activity-title" class="stats-section">
      <div class="stats-section-head"><div><h2 id="stats-activity-title">Atividades registradas</h2>
        <p>Complemento do resumo principal, sem repetir os mesmos totais.</p></div></div>
      <div class="stats-secondary-grid">
        ${statCard('Aulas concluídas', s.lessonDone, `De ${s.lessonTotal} disponíveis`, 'secondary')}
        ${statCard('Respostas em exercícios', s.answered, 'Tentativas atualmente salvas', 'secondary')}
        ${statCard('Acertos em exercícios', s.answered ? pct(s.correct / s.answered * 100) : '—', 'Das respostas atuais', 'secondary')}
        ${statCard('Simulados finalizados', s.simulations.length, s.simTotal ? `${pct(s.simCorrect / s.simTotal * 100)} de acertos nas questões` : 'Sem resultados suficientes', 'secondary')}
        ${statCard('Questões com erro', errorCount, 'Questões distintas no banco de erros', 'secondary')}
        ${statCard('Flashcards avaliados', s.flash.length, `${s.flashDue.length} revisões vencidas`, 'secondary')}
      </div>
    </section>

    <section class="stats-panel stats-section" aria-labelledby="stats-area-title" id="stats-by-area">
      <div class="stats-section-head"><div><h2 id="stats-area-title">Desempenho por matéria</h2>
        <p>Uma visualização consolidada por área. Os percentuais consideram apenas módulos iniciados.</p></div></div>
      <div class="stats-area-list">${byArea.map(renderAreaRow).join('') || '<p>Nenhuma matéria cadastrada.</p>'}</div>
    </section>

    <section class="stats-panel stats-section" aria-labelledby="stats-modules-title" id="stats-by-module">
      <div class="stats-section-head"><div><h2 id="stats-modules-title">Detalhamento por módulo</h2>
        <p>Filtre os módulos e abra diretamente aquele que desejar estudar.</p></div></div>
      <div class="stats-toolbar">
        <label>Matéria<select data-stats-filter="area"><option value="todas">Todas as matérias</option>${areaOptions}</select></label>
        <label>Situação<select data-stats-filter="status">
          <option value="iniciados">Iniciados (padrão)</option><option value="andamento">Em andamento</option>
          <option value="concluidos">Concluídos</option><option value="nao-iniciados">Não iniciados</option>
          <option value="todos">Todos</option></select></label>
        <label>Buscar módulo<input type="search" data-stats-filter="search" placeholder="Código ou nome do módulo" autocomplete="off"></label>
        <button class="btn stats-clear" type="button" data-stats-clear>Limpar filtros</button>
      </div>
      <p class="stats-results" data-stats-result-count aria-live="polite"></p>
      <p class="stats-scroll-tip">Deslize a tabela para os lados para ver todas as colunas.</p>
      <div class="stats-table-wrap" role="region" aria-label="Tabela de desempenho por módulo" tabindex="0">
        <table class="stats-table stats-module-table"><thead><tr>
          <th scope="col">Módulo</th><th scope="col">Aproveitamento</th><th scope="col">Peso avaliado</th>
          <th scope="col">Exercícios</th><th scope="col">Erros</th><th scope="col">Revisões vencidas</th>
          <th scope="col">Ação</th></tr></thead>
          <tbody>${rows.map(renderModuleRow).join('')}</tbody></table>
      </div>
      <p class="stats-empty" data-stats-empty hidden>Nenhum módulo corresponde aos filtros.</p>
      <p class="stats-footnote">Peso avaliado indica a soma dos pesos dos componentes com registro, não a cobertura do Banco de Questões. A cobertura e o domínio das questões aparecem na seção existente “Desempenho nas questões” de cada módulo.</p>
    </section>

    <section class="stats-panel stats-section" aria-labelledby="stats-timeline-title">
      <div class="stats-section-head"><div><h2 id="stats-timeline-title">Evolução dos estudos</h2>
        <p>Últimos meses com atividades datadas, organizados em ordem cronológica.</p></div></div>
      ${renderTimelineRows(timeline.months)}
      <p class="stats-footnote">*Aulas e questões são registros da última atualização conhecida; não representam todas as tentativas históricas. Não há dados suficientes para reconstruir a evolução antiga do aproveitamento dos módulos.</p>
    </section>

    <details class="stats-disclosure"><summary>Histórico dos últimos simulados <span>${recent.length ? 'Ver resultados' : 'Sem registros'}</span></summary>
      <div class="stats-disclosure-body">${recent.length ? `<ol class="stats-sim-list">${recent.map(x => `<li>
        <div><strong>${esc(x.area === 'todas' ? 'Todas as áreas' : AREAS[x.area] || x.area)}</strong>
          <small>${formatDate(x.finishedAt)} · ${esc(x.correct)} de ${esc(x.total)} questões corretas</small></div>
        <strong>${pct(Number(x.score))}</strong></li>`).join('')}</ol>` : '<p>Você ainda não finalizou simulados com resultados datados.</p>'}</div>
    </details>

    <details class="stats-disclosure"><summary>Qualidade e consistência dos registros <span>${consistency.issues.length ? 'Ver ressalvas' : 'Ver verificação'}</span></summary>
      <div class="stats-disclosure-body">
        ${consistency.issues.length ? `<ul class="stats-issues">${consistency.issues.map(issue => `<li>${esc(issue.message)} (${issue.count})</li>`).join('')}</ul>` : '<p>Nenhuma inconsistência foi detectada nas verificações básicas.</p>'}
        <p class="stats-footnote">Essa verificação é informativa. Nenhum dado é corrigido ou removido automaticamente.</p>
      </div>
    </details>
    <p class="stats-footnote stats-page-footer">Os dados ficam salvos neste navegador e não estão sincronizados automaticamente entre dispositivos. O aproveitamento reflete o percurso realizado, não uma medida definitiva de domínio.</p>
  </section>`;
  // Filtros são apenas visuais; nenhum filtro grava o estado do estudante.
  installLocalModuleFilters(main);
}
