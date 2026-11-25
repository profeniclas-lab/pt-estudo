/** Fase 14 — Lote 6. Priorização derivada, sem alterar o agendamento original. */
const DAY=86400000;
const safe=x=>x&&typeof x==='object'&&!Array.isArray(x)?x:{};
export function reviewPriority(item,state,now=Date.now()){
 const rec=safe(state?.progress?.adaptiveReview?.[item.key]);
 const due=Date.parse(item.dueAt);
 const late=Number.isFinite(due)?Math.max(0,Math.floor((now-due)/DAY)):0;
 const lapses=Math.max(0,Number(rec.lapses)||0);
 const streak=Math.max(0,Number(rec.streak)||0);
 const weak=['chute','desconhecimento','desatencao','nao','erro_banco'].includes(item.rating);
 // Pontuação somente para ordenação: vencimento, reincidência e dificuldade.
 const score=Math.min(late,14)*3+Math.min(lapses,5)*5+(weak?8:0)-Math.min(streak,5)*2;
 return {score,late,lapses,level:score>=18?'alta':score>=7?'media':'normal'};
}
export function prioritizeDueReviews(items,state,now=Date.now()){
 return [...items].sort((a,b)=>{
  const x=reviewPriority(a,state,now),y=reviewPriority(b,state,now);
  return y.score-x.score || Date.parse(a.dueAt)-Date.parse(b.dueAt) || a.key.localeCompare(b.key);
 });
}
export function reviewPrioritySummary(items,state,now=Date.now()){
 const due=items.filter(x=>Date.parse(x.dueAt)<=now);
 const ranked=prioritizeDueReviews(due,state,now);
 const next7=items.filter(x=>Date.parse(x.dueAt)>now&&Date.parse(x.dueAt)<=now+7*DAY).length;
 return {high:ranked.filter(x=>reviewPriority(x,state,now).level==='alta').length,
  medium:ranked.filter(x=>reviewPriority(x,state,now).level==='media').length,
  next7, suggested:ranked.slice(0,10).length};
}
