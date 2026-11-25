import { AREAS, getModuleById } from '../data/modules.js';
import { moduleAchievement } from './module-achievement.js';
import { getDiagnosticSummary } from './diagnostic.js';
import { getLesson } from '../data/lessons.js';
import { exercisePool, exerciseSummary } from './exercises.js';
import { lessonStats } from './lessons.js';
import { isModuleCompleted } from '../core/progress.js';
import { questionsForModule } from '../data/questions.js';
import { questionPerformance, performanceRateColor } from '../core/question-performance.js';

const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const format = n => Number(n).toLocaleString('pt-BR', { maximumFractionDigits: 2 });

// Fase 22-A / Lote 7: Banco de Questões e Flashcards são acessados somente
// pelo menu lateral, onde já existem filtros por módulo. Não os repetimos aqui.
const stages = [
  { id: 'diagnostic', title: 'Diagnóstico', description: 'Avalie o que já sabe antes de estudar.' },
  { id: 'lesson', title: 'Aula', description: 'Estude cada subtópico em uma página própria.' },
  { id: 'exercises', title: 'Exercícios de aprendizagem', description: 'Pratique o que aprendeu com correções explicadas.' }
];

function achievementMarkup(progress) {
  const c = progress.components;
  const sections = [
    {title:'Diagnóstico',keys:['diagnostic'],weight:20},
    {title:'Aulas (estudo e autoavaliação)',keys:['lessonCompletion','lessonSelfAssessment'],weight:30},
    {title:'Exercícios de aprendizagem',keys:['exercises'],weight:30},
    {title:'Banco de Questões',keys:['bank'],weight:20}
  ];
  const rows=sections.map(s=>{
    const points=s.keys.reduce((n,key)=>n+(c[key]?.points||0),0);
    const evidence=s.keys.reduce((n,key)=>n+(c[key]?.coverageWeight||0),0);
    const bankEvidence = progress.bankStats || {answered:0,total:0};
    const complete=s.keys.includes('bank') ? bankEvidence.total>0 && bankEvidence.answered===bankEvidence.total : evidence>=s.weight-0.01;
    const width=Math.min(100,Math.max(0,points/s.weight*100));
    return `<div style="margin:12px 0">
      <div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap">
        <span>${escapeHtml(s.title)}${complete?'':' <small>(parcial ou pendente)</small>'}</span>
        <strong>${format(points)} / ${s.weight} pontos</strong>
      </div>
      <div role="progressbar" aria-label="${escapeHtml(s.title)}" aria-valuemin="0" aria-valuemax="${s.weight}" aria-valuenow="${points}" style="height:8px;background:var(--border,#d5dce3);border-radius:6px;overflow:hidden;margin-top:6px">
        <div style="background:var(--accent,#2563eb);height:100%;width:${width}%"></div>
      </div>
    </div>`;
  }).join('');
  const done=isModuleCompleted(progress,75);
  return `<section class="module-achievement" aria-labelledby="achievementTitle">
    <h2 id="achievementTitle">Aproveitamento do módulo</h2>
    ${rows}
    <p><strong>Total conquistado: ${format(progress.earnedWeightedPoints)} de 100 pontos</strong>${progress.hasData?'':' · Sem atividades avaliadas'}</p>
    <p>${done?'Meta de 75 pontos atingida. Este módulo sai das pendências do Dashboard, mas permanece acessível.':`Faltam ${format(Math.max(0,75-progress.earnedWeightedPoints))} pontos para a meta de 75. Peso dos critérios com registro: ${format(progress.coveragePercentage)} de 100.`}</p>
    <p class="page-subtitle">Banco de Questões: seus 20 pontos dependem da taxa de acerto entre questões distintas respondidas no Banco, sem quantidade mínima. Uma única resposta correta pode conceder 20/20 pontos; confira a cobertura e o domínio na seção abaixo.</p>
    <p class="page-subtitle">Aproveitamento é uma medida ponderada de estudo, não uma prova definitiva de domínio. As etapas pendentes continuam disponíveis em Módulos e no menu lateral.</p>
  </section>`;
}

function performanceMarkup(state, moduleId) {
  const summary = questionPerformance(questionsForModule(moduleId) || [], state);
  const rateLabel = summary.rate === null ? '—' : `${format(summary.rate)}%`;
  const color = performanceRateColor(summary.rate);
  const rateStyle = color === 'green' ? 'color:#167341' : color === 'red' ? 'color:#ba1c1c' : '';
  return `<section class="module-achievement" aria-labelledby="performanceTitle" style="margin-top:16px">
    <h2 id="performanceTitle">Desempenho nas questões</h2>
    <p><strong>${summary.correct} de ${summary.answered} respondidas</strong> · <strong style="${rateStyle}">Aproveitamento da prática: ${rateLabel}</strong></p>
    <p>${summary.total} questões disponíveis no módulo · ${summary.unanswered} ainda não respondidas · ${summary.wrong} respostas incorretas.</p>
    <p><strong>Cobertura do Banco: ${summary.total ? `${format(100*summary.answered/summary.total)}%` : '—'}</strong> · <strong>Domínio estimado: ${summary.total ? `${format(100*summary.correct/summary.total)}%` : '—'}</strong></p>
    <dl class="module-info-list">
      <div><dt>Acertos por chute</dt><dd>${summary.guessedCorrect}</dd></div>
      <div><dt>Erros por desconhecimento</dt><dd>${summary.unknownWrong}</dd></div>
      <div><dt>Acertos com segurança declarada</dt><dd>${summary.secureCorrect}</dd></div>
      <div><dt>Acertos com dúvida</dt><dd>${summary.doubtCorrect}</dd></div>
      <div><dt>Acertos sem classificação suficiente</dt><dd>${summary.unclassifiedCorrect}</dd></div>
    </dl>
    <p><strong>Acertos com segurança entre as respondidas: ${summary.knowledgeRate === null ? '—' : `${format(summary.knowledgeRate)}%`}</strong> — considera somente respostas identificadas como seguras.</p>
    <p class="page-subtitle">Taxa de acerto: verde a partir de 60%; vermelho abaixo de 60%. Aproveitamento da prática, cobertura e domínio consideram a última resposta válida de cada questão na área de estudo, sem duplicar tentativas da mesma questão. Domínio estimado = acertos atuais / questões disponíveis; cobertura = questões distintas respondidas / questões disponíveis. Já os 20 pontos do percurso usam somente a última resposta de cada questão resolvida no Banco. Questões respondidas apenas em simulados não entram nos indicadores até serem praticadas nas outras atividades. Registros sem autoavaliação não demonstram conhecimento seguro.</p>
  </section>`;
}

export function renderModuleDetail(mainElement, moduleId, state) {
  const module = getModuleById(moduleId);
  if (!module) {
    mainElement.innerHTML = '<div class="notice">Módulo não encontrado. <button class="btn" data-action="modules-back">Voltar</button></div>';
    return;
  }
  const diagnostic = getDiagnosticSummary(state, moduleId);
  const stats = lessonStats(state, module);
  const exercise = exerciseSummary(state, moduleId);
  const progress = moduleAchievement(state, module);
  mainElement.innerHTML = `
    <section class="module-detail" aria-labelledby="pageTitle">
      <button type="button" class="btn" data-action="modules-back">← Todos os módulos</button>
      <h1 class="page-title" id="pageTitle" style="margin-top:18px">${escapeHtml(module.title)}</h1>
      <p class="page-subtitle">${escapeHtml(module.id)} · ${escapeHtml(AREAS[module.area])} · ${module.subtopics.length} subtópicos</p>
      ${achievementMarkup(progress)}
      ${performanceMarkup(state, moduleId)}
      ${stages.map((stage, index) => {
        const available = stage.id === 'diagnostic' && diagnostic;
        const status = available ? (diagnostic.completed ? 'Concluído' : `${diagnostic.answered}/${diagnostic.total} respondidos`) : stage.id === 'exercises' && exercisePool(moduleId).length ? (exercise?.finished ? 'Concluído' : exercise ? `${exercise.answered}/${exercise.total} respondidas` : 'Disponível') : stage.id === 'lesson' && stats ? `${stats.completed}/${stats.total} estudadas` : 'Em preparação';
        return `<section class="module-stage" aria-labelledby="stage-${index}">
          <div class="module-stage-heading"><h2 id="stage-${index}">${index + 1}. ${escapeHtml(stage.title)}</h2><span class="module-pending">${status}</span></div>
          <p>${escapeHtml(stage.description)}</p>
          ${available ? `<button type="button" class="btn btn-primary" data-action="diagnostic-open">${diagnostic.completed ? 'Rever diagnóstico' : diagnostic.answered ? 'Continuar diagnóstico' : 'Iniciar diagnóstico'}</button>` : ''}
          ${stage.id === 'exercises' && exercisePool(moduleId).length ? `<button type="button" class="btn btn-primary" data-action="exercise-open">${exercise?.finished ? 'Rever resultado' : exercise ? 'Continuar atividade' : 'Iniciar exercícios'}</button>` : ''}
          ${stage.id === 'lesson' ? `<h3>Aulas por subtópico</h3><ol class="module-subtopics">${module.subtopics.map(topic => `<li><span>${escapeHtml(topic.title)}</span>${getLesson(topic.id) ? `<button type="button" class="btn" data-lesson-open="${escapeHtml(topic.id)}">${state.progress?.lessons?.[topic.id]?.completed ? 'Rever aula ✓' : 'Estudar aula'}</button>` : '<small>Em preparação</small>'}</li>`).join('')}</ol>` : ''}
        </section>`;
      }).join('')}
      <section class="module-stage" aria-labelledby="moduleInfoTitle">
        <h2 id="moduleInfoTitle">Informações</h2>
        <dl class="module-info-list"><div><dt>Identificador</dt><dd>${escapeHtml(module.id)}</dd></div><div><dt>Área</dt><dd>${escapeHtml(AREAS[module.area])}</dd></div><div><dt>Subtópicos</dt><dd>${module.subtopics.length}</dd></div><div><dt>Prioridade</dt><dd>${escapeHtml(module.priority)}</dd></div><div><dt>Atividades disponíveis</dt><dd>${[diagnostic ? 'Diagnóstico' : null, stats ? 'Aulas' : null, exercisePool(moduleId).length ? 'Exercícios' : null].filter(Boolean).join(' e ') || 'Nenhuma nesta etapa'}</dd></div><div><dt>Diagnóstico</dt><dd>${diagnostic ? `${diagnostic.answered}/${diagnostic.total} respostas` : 'Em preparação'}</dd></div></dl>
      </section>
    </section>`;
}
