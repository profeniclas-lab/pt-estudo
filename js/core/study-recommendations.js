/** Fase 17 — Lote 3: recomendações pedagógicas explicáveis e sem mutação. */
import { learningPriorities } from './learning-priorities.js';
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safe=x=>x&&typeof x==='object'&&!Array.isArray(x)?x:{};
export function studyRecommendations(state,modules=[]){
 const ranked=learningPriorities(state,modules);
 const byId=new Map(modules.map(x=>[String(x?.module?.id??''),x]));
 const recommendations=[];
 const p=safe(state?.progress);
 const review=Object.values(safe(p.reviewSchedule)).filter(x=>x?.questionId&&Number.isFinite(Date.parse(x.dueAt))&&Date.parse(x.dueAt)<=Date.now());
 if(review.length)recommendations.push({id:'review',title:'Revisar questões vencidas',reason:`${review.length} revisão(ões) aguardando atendimento`,action:'Abrir revisões',route:'revisao'});
 for(const item of ranked){
  const row=byId.get(item.moduleId);if(!row)continue;
  const module=row.module,subtopics=Array.isArray(module?.subtopics)?module.subtopics:[];
  const diagnostic=row.diagnostic,lessons=row.lessons,exercises=row.exercises||row.exercise;
  let title,reason;
  if(!diagnostic?.completed){
   title='Concluir diagnóstico';
   reason='O diagnóstico ajuda a identificar conhecimentos prévios antes das aulas.';
  }else if((Number(lessons?.completed)||0)<subtopics.length){
   title='Continuar aulas';
   reason=`${Math.max(0,subtopics.length-(Number(lessons?.completed)||0))} aula(s) ainda não concluída(s).`;
  }else if(subtopics.length&&Number(lessons?.rated)!==subtopics.length){
   title='Autoavaliar aulas';
   reason='Há aulas concluídas sem todas as autoavaliações.';
  }else if(!exercises?.finished){
   title='Praticar com exercícios';
   reason='A etapa de exercícios ainda não foi finalizada.';
  }else if(item.errors>0){
   title='Reforçar questões erradas';
   reason=`${item.errors} questão(ões) deste módulo no banco de erros.`;
  }else{
   title='Continuar aprendizagem';
   reason='O módulo ainda possui atividades ou indicadores a consolidar.';
  }
  recommendations.push({id:item.moduleId,title,reason:`${reason} ${item.reasons.slice(0,2).join(' · ')}`.trim(),
   moduleId:item.moduleId,moduleTitle:String(module?.title??item.moduleId),action:'Abrir módulo'});
  if(recommendations.length>=6)break;
 }
 if(!recommendations.length)recommendations.push({id:'start',title:'Escolher um módulo para começar',reason:'Ainda não há dados suficientes para recomendações personalizadas.',route:'modulos',action:'Ver módulos'});
 return recommendations;
}
export function renderStudyRecommendations(state,modules=[]){
 const rows=studyRecommendations(state,modules);
 return `<section aria-label="Recomendações personalizadas">
 <h2 class="section-title">Próximas ações recomendadas</h2>
 <p>As sugestões combinam as prioridades com a etapa de aprendizagem registrada. Não alteram sua programação nem executam atividades automaticamente.</p>
 <div style="display:grid;gap:10px">${rows.map((x,i)=>`<article class="module-card" style="display:block">
 <strong>${i+1}. ${esc(x.title)}</strong>
 ${x.moduleTitle?`<p style="margin:5px 0"><strong>Módulo:</strong> ${esc(x.moduleTitle)}</p>`:''}
 <p style="margin:8px 0">${esc(x.reason)}</p>
 <button type="button" class="btn btn-primary" ${x.moduleId?`data-module-id="${esc(x.moduleId)}"`:`data-nav="${esc(x.route)}"`}>${esc(x.action)}</button>
 </article>`).join('')}</div>
 <p class="page-subtitle">As recomendações dependem da qualidade dos registros disponíveis e não substituem o plano de estudos.</p></section>`;
}
