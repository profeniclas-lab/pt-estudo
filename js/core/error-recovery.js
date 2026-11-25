/** Fase 15, lote 4: visão somente leitura de recuperação e revisão espaçada. */
const obj=x=>x&&typeof x==='object'&&!Array.isArray(x)?x:{};
const valid=x=>typeof x==='string'&&Number.isFinite(Date.parse(x));
export function errorRecoverySummary(state,now=Date.now()){
 const p=obj(state?.progress),adaptive=obj(p.adaptiveReview),schedule=obj(p.reviewSchedule);
 const errors=Array.isArray(p.errors)?p.errors:[];
 const ids=[...new Set(errors.map(x=>x?.questionId).filter(x=>typeof x==='string'&&x))];
 const items=ids.map(id=>{
  const a=obj(adaptive[`question:${id}`]),s=obj(schedule[id]);
  const streak=Math.max(0,Number(a.streak)||0),lapses=Math.max(0,Number(a.lapses)||0);
  const lastRating=a.rating||s.reason||null;
  const dueAt=valid(s.dueAt)?s.dueAt:valid(a.dueAt)?a.dueAt:null;
  const due=dueAt!==null&&Date.parse(dueAt)<=now;
  const recovered=streak>=2&&['seguro','acerto_banco'].includes(lastRating);
  const status=recovered?'em_recuperacao':lapses>=2?'recorrente':due?'revisar_agora':'em_acompanhamento';
  return {id,streak,lapses,dueAt,due,status,recovered};
 });
 return {items,total:items.length,recovering:items.filter(x=>x.recovered).length,
  recurrent:items.filter(x=>x.status==='recorrente').length,
  due:items.filter(x=>x.due).length};
}
export function renderErrorRecovery(state){
 const r=errorRecoverySummary(state);
 const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const names={em_recuperacao:'Em recuperação',recorrente:'Dificuldade recorrente',revisar_agora:'Revisão pendente',em_acompanhamento:'Em acompanhamento'};
 const sorted=[...r.items].sort((a,b)=>Number(b.due)-Number(a.due)||b.lapses-a.lapses);
 return `<section class="module-card" style="padding:16px;margin:16px 0"><h2>Recuperação e revisão espaçada</h2>
 <p>${r.total} questão(ões) acompanhada(s) · ${r.due} revisão(ões) vencida(s) · ${r.recurrent} dificuldade(s) recorrente(s) · ${r.recovering} em recuperação.</p>
 <ul>${sorted.slice(0,20).map(x=>`<li><strong>${esc(x.id)}</strong>: ${names[x.status]} · ${x.streak} acerto(s) seguro(s) consecutivo(s) · ${x.lapses} dificuldade(s) acumulada(s)${x.due?' · revisão vencida':''}</li>`).join('')||'<li>Não há questões no banco de erros.</li>'}</ul>
 <p class="page-subtitle">Critério indicativo de recuperação: pelo menos dois acertos seguros consecutivos. O histórico de erros e os agendamentos são preservados. Este painel não remove erros automaticamente.</p></section>`;
}
