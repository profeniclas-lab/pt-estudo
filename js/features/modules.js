/** PT-ESTUDO — catálogo visível completo; apenas módulos publicados entram no motor. */
import { AREAS, MODULES, PENDING_MODULES, getModuleById } from '../data/modules.js';
import { moduleAchievement } from './module-achievement.js';
const PRIORITIES={alta:'Alta',media:'Média',baixa:'Baixa'};
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function renderModules(mainElement,state={}, {selectedModuleId=null}={}) {
  const selected=selectedModuleId?getModuleById(selectedModuleId):null;
  if(selected){
    // Mantém compatibilidade com chamadas legadas; app.js abre detalhes via renderModuleDetail.
    mainElement.innerHTML=`<section><button class="btn" data-action="modules-back">← Todos os módulos</button><h1 class="page-title">${esc(selected.title)}</h1><p class="page-subtitle">${esc(selected.id)} · ${esc(AREAS[selected.area])}</p></section>`;
    return;
  }
  const rows=Object.entries(AREAS).map(([area,label])=>{
    const released=MODULES.filter(m=>m.area===area), pending=PENDING_MODULES.filter(m=>m.area===area);
    const live=released.map(m=>{
      const result=moduleAchievement(state,m);
      return `<button class="module-card" type="button" data-module-id="${esc(m.id)}"><span class="mod-id">${esc(m.id)}</span><span class="mod-info"><span class="mod-title">${esc(m.title)}</span><span class="mod-area">${m.subtopics.length} subtópicos · ${esc(label)}</span></span><span class="mod-badges"><span class="mod-priority priority-${esc(m.priority)}">${esc(PRIORITIES[m.priority]||m.priority)}</span><strong class="module-list-percentage">${result.hasData ? result.percentage+'%' : '—%'}</strong></span></button>`;
    }).join('');
    const future=pending.map(m=>`<article class="module-card" aria-label="${esc(m.id)}: ${esc(m.title)}, em preparação" style="cursor:default;opacity:.72"><span class="mod-id">${esc(m.id)}</span><span class="mod-info"><span class="mod-title">${esc(m.title)}</span><span class="mod-area">${m.subtopics.length} subtópicos previstos · ${esc(label)}</span></span><span class="badge-pill">Em preparação</span></article>`).join('');
    return `<h2 class="section-title">${esc(label)} (${released.length+pending.length})</h2><div class="module-list">${live}${future}</div>`;
  }).join('');
  mainElement.innerHTML=`<section aria-labelledby="pageTitle"><h1 class="page-title" id="pageTitle">Módulos de estudo</h1><p class="page-subtitle">27 módulos planejados · ${MODULES.length} disponíveis · ${PENDING_MODULES.length} em preparação.</p>${PENDING_MODULES.length ? '<div class="notice">Os módulos em preparação serão liberados em lotes de três. Eles não contam no aproveitamento, nas estatísticas nem nos simulados.</div>' : '<div class="notice">Todos os 27 módulos estão disponíveis para estudo.</div>'}${rows}</section>`;
}
