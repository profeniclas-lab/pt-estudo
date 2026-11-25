/** ADM-ESTUDO — Fase 22 / Lote 4: Dashboard focado, somente leitura.
 * Mantém export dashboardSummary; testes técnicos estão em Configurações.
 * Não grava, migra, apaga ou recalcula os registros persistidos.
 */
import { MODULES, AREAS } from '../data/modules.js';
import { moduleAchievement } from './module-achievement.js';
import { getDiagnosticSummary } from './diagnostic.js';
import { lessonStats } from './lessons.js';
import { exerciseSummary } from './exercises.js';
import { isModuleCompleted } from '../core/progress.js';
import { moduleCardPresentation, displayModulePoints } from './module-card-presentation.js';

const esc = value => String(value ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const validDate = value => typeof value === 'string' && Number.isFinite(Date.parse(value));
const fmt = value => validDate(value) ? new Date(value).toLocaleDateString('pt-BR') : '—';
const getReviewEntries = state => Object.values(state.progress?.reviewSchedule || {}).filter(item => item && item.questionId && validDate(item.dueAt));

/** Contrato mantido para os consumidores que já importam dashboardSummary. */
export function dashboardSummary(state) {
  const modules = MODULES.map(module => {
    const achievement = moduleAchievement(state,module);
    const diagnostic = getDiagnosticSummary(state,module.id);
    const lessons = lessonStats(state,module);
    const exercises = exerciseSummary(state,module.id);
    const hasActivity = !!(diagnostic?.answered || lessons?.completed || lessons?.rated ||
      exercises?.answered || state.progress?.modules?.[module.id]);
    return {module,achievement,diagnostic,lessons,exercises,hasActivity,completed:isModuleCompleted(achievement,75)};
  });
  const active=modules.filter(x=>x.hasActivity);
  const pending=active.filter(x=>!x.completed);
  const completed=active.filter(x=>x.completed);
  const scheduled=getReviewEntries(state);
  const due=scheduled.filter(x=>Date.parse(x.dueAt)<=Date.now());
  const errors=Array.isArray(state.progress?.errors)?state.progress.errors.filter(x=>x?.questionId):[];
  const studiedLessons=Object.values(state.progress?.lessons||{}).filter(x=>x?.completed===true).length;
  const answeredExercises=Object.values(state.progress?.exercises||{}).reduce((n,x)=>n+Object.keys(x?.answers||{}).length,0);
  return {modules,active,pending,completed,scheduled,due,errors,studiedLessons,answeredExercises};
}

const priority = {alta:0,media:1,baixa:2};
export function dashboardPendingModules(summary,limit=6) {
  return summary.pending.slice().sort((a,b)=>
    (priority[a.module?.priority]??3)-(priority[b.module?.priority]??3) ||
    (b.achievement?.earnedWeightedPoints??0)-(a.achievement?.earnedWeightedPoints??0) ||
    String(a.module?.id||'').localeCompare(String(b.module?.id||''),'pt-BR')
  ).slice(0,Math.max(0,limit));
}

function moduleCard(item) {
  const p=moduleCardPresentation(item),m=item.module;
  const pct=Math.max(0,Math.min(100,p.points));
  return `<article class="stat-card" style="padding:16px" data-dashboard-module-card="${esc(m.id)}">
    <div style="display:flex;align-items:start;justify-content:space-between;gap:12px;flex-wrap:wrap">
      <div style="min-width:0;flex:1"><strong>${esc(m.title)}</strong><p class="mod-area">${esc(m.id)} · ${esc(AREAS[m.area]||m.area)}</p></div>
      <strong>${esc(displayModulePoints(p.points))}</strong>
    </div>
    <div role="progressbar" aria-label="Aproveitamento de ${esc(m.title)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}" style="height:9px;background:#d5dce3;border-radius:6px;overflow:hidden;margin:12px 0 8px">
      <div style="width:${pct}%;height:100%;background:#2563eb"></div>
    </div>
    <p style="margin:0 0 4px;font-size:14px"><strong>Próxima ação:</strong> ${esc(p.next)}</p>
    <p class="page-subtitle" style="margin:0 0 12px">Etapas concluídas: ${p.stagesDone} de ${p.totalStages}. Meta: 75% e todas as etapas.</p>
    <button type="button" class="btn btn-primary" data-module-id="${esc(m.id)}">Abrir módulo</button>
  </article>`;
}

const statsCard=(label,value,help)=>`<article class="stat-card"><div class="stat-label">${esc(label)}</div><div class="stat-value">${esc(value)}</div><div class="stat-hint">${esc(help)}</div></article>`;

/** Testes de estrutura sem escrita no progresso. */
export function dashboardLayoutChecks(root) {
  const checks=[
    ['Título do painel presente',!!root?.querySelector('#pageTitle')],
    ['Resumo principal com quatro indicadores',root?.querySelectorAll('[data-dashboard-summary-card]').length===4],
    ['Seção de módulos pendentes presente',!!root?.querySelector('#dashboard-pending')],
    ['Seção de revisão presente',!!root?.querySelector('#dashboard-reviews')],
    ['Controles de backup ausentes do Dashboard',!root?.querySelector('[data-backup-export],[data-backup-restore],[data-backup-inspect]')],
    ['Ferramentas técnicas transferidas para Configurações',!root?.querySelector('#dashboard-technical-tools, [data-integration-report], [data-persistence-diagnostics]')],
    ['Navegação para estatísticas disponível',!!root?.querySelector('[data-nav="estatisticas"]')],
    ['Navegação para Configurações disponível',!!root?.querySelector('[data-nav="configuracoes"]')]
  ];
  return {version:'F22-L04',generatedAt:new Date().toISOString(),readOnly:true,ok:checks.every(x=>x[1]),checks:checks.map(([name,passed])=>({name,passed}))};
}
export function formatDashboardLayoutReport(r) {
  return ['ADM-ESTUDO | FASE 22 — LOTE 4','Gerado em: '+r.generatedAt,
    'Teste estrutural: '+(r.ok?'APROVADO':'COM FALHAS'),
    ...r.checks.map(x=>`${x.passed?'OK':'FALHA'} — ${x.name}`),
    'Somente leitura; nenhuma resposta é alterada.',
    'Esta verificação não substitui os testes manuais de navegação, progresso e backup.'
  ].join('\n');
}

export function renderDashboard(mainElement,state) {
  const s=dashboardSummary(state),next=dashboardPendingModules(s);
  const nextDue=s.scheduled.filter(x=>Date.parse(x.dueAt)>Date.now()).sort((a,b)=>Date.parse(a.dueAt)-Date.parse(b.dueAt))[0];
  const copy=s.active.length?
    `Você iniciou ${s.active.length} módulo(s). Os módulos concluídos saem das pendências, mas continuam disponíveis em Módulos.`:
    'Escolha um módulo para começar. Seu progresso aparecerá aqui à medida que estudar.';
  mainElement.innerHTML=`<section aria-labelledby="pageTitle" id="dashboard-focus">
    <h1 class="page-title" id="pageTitle">Seu painel de estudos</h1>
    <p class="page-subtitle">${esc(copy)}</p>
    <section aria-label="Resumo do estudo" style="margin:16px 0 24px">
      <div class="cards-grid">
        <div data-dashboard-summary-card="1">${statsCard('Em andamento',s.pending.length,'Módulos iniciados e ainda pendentes')}</div>
        <div data-dashboard-summary-card="1">${statsCard('Concluídos',s.completed.length,'≥75% e etapas avaliadas')}</div>
        <div data-dashboard-summary-card="1">${statsCard('Revisões vencidas',s.due.length,`${s.scheduled.length} agendadas`)}</div>
        <div data-dashboard-summary-card="1">${statsCard('Questões no banco de erros',new Set(s.errors.map(x=>x.questionId)).size,'Questões distintas')}</div>
      </div>
    </section>
    <section id="dashboard-pending" aria-labelledby="dashboard-pending-heading">
      <h2 class="section-title" id="dashboard-pending-heading">O que estudar agora</h2>
      ${next.length?`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,310px),1fr));gap:12px">${next.map(moduleCard).join('')}</div>`:
      `<p class="notice">${s.active.length?'Não há módulos iniciados pendentes. Continue revisando ou escolha outro módulo.':'Nenhum módulo iniciado. Escolha um módulo para começar.'}</p>`}
      <p style="margin:12px 0"><button type="button" class="btn" data-nav="modulos">Ver todos os módulos</button></p>
    </section>
    <section id="dashboard-reviews" aria-labelledby="dashboard-reviews-heading">
      <h2 class="section-title" id="dashboard-reviews-heading">Revisão e reforço</h2>
      <div class="notice">
        <p><strong>${s.due.length}</strong> revisão(ões) vencida(s). ${nextDue?`Próxima revisão futura: ${fmt(nextDue.dueAt)}.`:'Não há outra revisão futura agendada.'}</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px">
          <button type="button" class="btn btn-primary" data-nav="revisao">Abrir Revisão</button>
          <button type="button" class="btn" data-nav="erros">Meus Erros</button>
          <button type="button" class="btn" data-nav="estatisticas">Ver Estatísticas</button>
        </div>
      </div>
    </section>
    <section style="margin:20px 0;border-top:1px solid var(--border,#e2e8f0);padding-top:14px" aria-label="Verificação estrutural do Dashboard">
      <details><summary style="cursor:pointer">Verificação do Dashboard — Lote 4</summary>
        <p>Teste estrutural de leitura, sem alterações no progresso.</p>
        <button type="button" class="btn" id="dashboard-audit">Verificar estrutura</button>
        <button type="button" class="btn" id="dashboard-audit-download" disabled>Baixar relatório TXT</button>
        <pre id="dashboard-audit-result" role="status" style="white-space:pre-wrap;margin:12px 0"></pre>
      </details>
    </section>
    <p class="page-subtitle">Aproveitamento é uma medida do percurso realizado, não uma prova definitiva de domínio. O progresso fica salvo neste navegador.</p>
  </section>`;
  let report='';
  const run=mainElement.querySelector('#dashboard-audit');
  const down=mainElement.querySelector('#dashboard-audit-download');
  run?.addEventListener('click',()=>{
    const r=dashboardLayoutChecks(mainElement);
    report=formatDashboardLayoutReport(r);
    mainElement.querySelector('#dashboard-audit-result').textContent=report;
    down.disabled=false;
  });
  down?.addEventListener('click',()=>{
    if(!report)return;
    const url=URL.createObjectURL(new Blob([report],{type:'text/plain;charset=utf-8'}));
    const a=document.createElement('a');a.href=url;a.download='adm-estudo-fase22-lote04-relatorio.txt';
    document.body.appendChild(a);try{a.click();}finally{a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);}
  });
}
