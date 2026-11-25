/** Fase 17, Lote 6: auditoria de coerência, somente leitura. */
const obj=x=>x&&typeof x==='object'&&!Array.isArray(x)?x:{};
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const date=x=>typeof x==='string'&&Number.isFinite(Date.parse(x));
export function dashboardConsistency(state,modules=[]){
 const p=obj(state?.progress),issues=[];
 const moduleIds=new Set(modules.map(x=>x?.module?.id).filter(Boolean));
 const errors=Array.isArray(p.errors)?p.errors:[];
 const validErrors=errors.filter(x=>x&&typeof x.questionId==='string'&&x.questionId);
 const distinctErrors=new Set(validErrors.map(x=>x.questionId));
 if(validErrors.length>distinctErrors.size)issues.push({kind:'duplicate-errors',count:validErrors.length-distinctErrors.size,message:'Registros repetidos no banco de erros. O total de questões distintas pode ser menor que o total de entradas.'});
 const schedules=Object.values(obj(p.reviewSchedule));
 const invalidDates=schedules.filter(x=>x?.questionId&&!date(x.dueAt)).length;
 if(invalidDates)issues.push({kind:'invalid-review-dates',count:invalidDates,message:'Revisões sem uma data de vencimento válida; elas podem não aparecer na contagem de pendências.'});
 const orphanReviews=schedules.filter(x=>x?.questionId&&x.moduleId&&!moduleIds.has(x.moduleId)).length;
 if(orphanReviews)issues.push({kind:'unknown-modules',count:orphanReviews,message:'Revisões vinculadas a módulos que não constam do catálogo atual.'});
 const sims=Array.isArray(p.simulados?.history)?p.simulados.history:[];
 const invalidSim=sims.filter(x=>x?.finishedAt&&(!Number.isFinite(Number(x.score))||Number(x.score)<0||Number(x.score)>100||!Number.isFinite(Number(x.total))||Number(x.total)<=0||Number(x.correct)<0||Number(x.correct)>Number(x.total))).length;
 if(invalidSim)issues.push({kind:'invalid-simulations',count:invalidSim,message:'Resultados de simulados com pontuação ou contagem inconsistente.'});
 const started=modules.filter(x=>x?.started||x?.hasActivity);
 const completed=started.filter(x=>x.completed);
 return {issues,started:started.length,completed:completed.length,distinctErrors:distinctErrors.size,validReviews:schedules.filter(x=>x?.questionId&&date(x.dueAt)).length,simulations:sims.filter(x=>x?.finishedAt).length};
}
export function renderDashboardConsistency(state,modules=[]){
 const a=dashboardConsistency(state,modules);
 return `<section aria-label="Verificação de consistência do painel"><h2 class="section-title">Qualidade dos registros</h2>
 <p><strong>${a.issues.length?'Verificações com ressalvas':'Nenhuma inconsistência detectada nas verificações básicas'}.</strong> ${a.started} módulo(s) iniciado(s), ${a.completed} concluído(s), ${a.distinctErrors} questão(ões) distintas no banco de erros e ${a.validReviews} revisão(ões) com data válida.</p>
 ${a.issues.length?`<ul>${a.issues.map(x=>`<li>${esc(x.message)} <strong>(${x.count})</strong></li>`).join('')}</ul>`:'<p>Os indicadores usam registros locais e podem ter limitações de cobertura histórica.</p>'}
 <p class="page-subtitle">Verificação informativa: nenhum registro foi alterado ou corrigido automaticamente.</p></section>`;
}
