/** Fase 16 — Lote 6: evolução histórica e integração dos erros com revisão. */
import { recordBankReview } from './review-events.js';
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safe=x=>x&&typeof x==='object'&&!Array.isArray(x)?x:{};
const score=x=>Number.isFinite(Number(x?.score))?Math.max(0,Math.min(100,Number(x.score))):null;
/** Apenas erros de simulados novos, depois de finalizados. Sem reprocessar o histórico. */
export function recordSimuladoMistakes(state,session,lookup){
 if(!session?.finishedAt||session.reviewIntegratedAt||!Array.isArray(session.ids))return 0;
 let count=0;
 for(const id of session.ids){
  const q=lookup.get(id),answer=session.answers?.[id];
  if(!q||!Array.isArray(q.options)||!Number.isInteger(answer)||answer<0||answer>=q.options.length)continue;
  if(answer!==q.answer&&recordBankReview(state,q,answer))count++;
 }
 session.reviewIntegratedAt=new Date().toISOString();
 session.reviewIntegratedErrors=count;
 return count;
}
export function simuladoHistoryComparison(history){
 const rows=(Array.isArray(history)?history:[]).filter(x=>x?.finishedAt&&score(x)!==null).slice(-8);
 const current=rows.at(-1),previous=rows.at(-2);
 const delta=current&&previous?Math.round((score(current)-score(previous))*10)/10:null;
 const average=rows.length?Math.round(rows.reduce((sum,x)=>sum+score(x),0)/rows.length):null;
 return {rows,delta,average,current:current?score(current):null};
}
export function renderSimuladoHistoryComparison(history){
 const data=simuladoHistoryComparison(history);
 if(!data.rows.length)return '<section class="module-card"><h2>Evolução dos simulados</h2><p>Conclua um simulado para acompanhar a evolução.</p></section>';
 const delta=data.delta===null?'Ainda não há duas provas para comparar.':data.delta===0?'Mesma pontuação da prova anterior.':`${data.delta>0?'+':''}${data.delta} ponto(s) percentuais em relação à prova anterior.`;
 return `<section class="module-card" style="padding:16px;margin:16px 0">
 <h2>Evolução dos simulados</h2><p><strong>Média das últimas ${data.rows.length} provas:</strong> ${data.average}%.</p>
 <p><strong>Comparação:</strong> ${esc(delta)}</p>
 <div style="overflow-x:auto"><table style="width:100%"><thead><tr><th>Prova</th><th>Acertos</th><th>Aproveitamento</th></tr></thead><tbody>
 ${data.rows.map((x,i)=>`<tr><td>${i+1} — ${esc(new Date(x.finishedAt).toLocaleDateString('pt-BR'))}</td><td>${esc(x.correct)}/${esc(x.total)}</td><td>${score(x)}%</td></tr>`).join('')}
 </tbody></table></div>
 <p class="page-subtitle">As provas podem ter abrangência e dificuldade diferentes. A comparação é indicativa e não modifica resultados anteriores.</p></section>`;
}
