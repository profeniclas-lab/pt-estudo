import { AREAS, MODULES, getModuleById } from "../data/modules.js";
import { moduleAchievement } from "./module-achievement.js";

const PRIORITIES = { alta: "Alta", media: "Média", baixa: "Baixa" };
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[character]);

export function renderModules(mainElement, state = {}, { selectedModuleId = null } = {}) {
  const selected = selectedModuleId ? getModuleById(selectedModuleId) : null;
  if (selected) {
    mainElement.innerHTML = `
      <section aria-labelledby="pageTitle">
        <button class="btn" type="button" data-action="modules-back">← Todos os módulos</button>
        <h1 class="page-title" id="pageTitle" style="margin-top:18px">${escapeHtml(selected.title)}</h1>
        <p class="page-subtitle">${escapeHtml(selected.id)} · ${escapeHtml(AREAS[selected.area])} · Prioridade ${escapeHtml(PRIORITIES[selected.priority])}</p>
        <div class="notice">O catálogo está disponível. Diagnósticos, aulas, exercícios e flashcards serão adicionados em etapas posteriores.</div>
        <h2 class="section-title">Subtópicos (${selected.subtopics.length})</h2>
        <div class="module-list">${selected.subtopics.map((item, index) => `
          <article class="module-card" style="cursor:default">
            <span class="mod-id">${index + 1}</span>
            <div class="mod-info"><div class="mod-title">${escapeHtml(item.title)}</div><div class="mod-area">${escapeHtml(item.id)}</div></div>
            <span class="badge-pill">Conteúdo em preparação</span>
          </article>`).join("")}</div>
      </section>`;
    return;
  }

  const groups = Object.entries(AREAS).map(([area, label]) => {
    const items = MODULES.filter(module => module.area === area);
    return `<h2 class="section-title">${escapeHtml(label)} (${items.length})</h2>
      <div class="module-list">${items.map(module => `
        <button class="module-card" type="button" data-module-id="${escapeHtml(module.id)}">
          <span class="mod-id">${escapeHtml(module.id)}</span>
          <span class="mod-info"><span class="mod-title">${escapeHtml(module.title)}</span>
            <span class="mod-area">${module.subtopics.length} subtópicos · ${escapeHtml(label)}</span></span>
          <span class="mod-badges"><span class="mod-priority priority-${escapeHtml(module.priority)}">${escapeHtml(PRIORITIES[module.priority])}</span><strong class="module-list-percentage">${moduleAchievement(state,module).hasData ? moduleAchievement(state,module).percentage+'%' : '—%'}</strong></span>
        </button>`).join("")}</div>`;
  }).join("");

  mainElement.innerHTML = `<section aria-labelledby="pageTitle">
    <h1 class="page-title" id="pageTitle">Módulos de estudo</h1>
    <p class="page-subtitle">${MODULES.length} módulos organizados por área. Clique em um módulo para conhecer seus subtópicos.</p>
    <div class="notice">A estrutura pedagógica está cadastrada. As atividades serão ativadas quando seus conteúdos forem publicados.</div>
    ${groups}
  </section>`;
}
