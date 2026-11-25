/** Fase 16 Lote 4: correção pedagógica, sem alterar progresso. */
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
import { renderSimuladoPerformance } from './simulado-performance.js';
const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const block=(label,value)=>value?`<p><strong>${label}:</strong> ${esc(value)}</p>`:'';
export function renderSimuladoCorrection(session,lookup){
 if(!session?.finishedAt)return '<p>A correção estará disponível após a finalização.</p>';
 const ids=Array.isArray(session.ids)?session.ids:[];
 let correct=0,missing=0;
 const cards=ids.map((id,index)=>{
  const q=lookup.get(id);
  if(!q){missing++;return `<article class="lesson-panel"><h3>Questão ${index+1}</h3><p>Questão indisponível no banco atual. O registro da resposta foi preservado.</p></article>`;}
  const selected=session.answers?.[id],ok=selected===q.answer;
  if(ok)correct++;
  const rawOrder=session.orders?.[id];
  const order=Array.isArray(rawOrder)&&rawOrder.length===q.options.length&&new Set(rawOrder).size===q.options.length&&rawOrder.every(n=>Number.isInteger(n)&&n>=0&&n<q.options.length)?rawOrder:q.options.map((_,i)=>i);
  const options=order.map((idx,pos)=>{
   const tags=[idx===q.answer?'Resposta correta':null,idx===selected?'Sua resposta':null].filter(Boolean);
   const comment=q.optionComments?.[idx];
   return `<li style="margin:9px 0">${q.type==='ce'?'':letters[pos]+') '}${esc(q.options[idx])}${tags.length?` <strong>(${tags.join(' · ')})</strong>`:''}${comment?`<p style="margin:4px 0">${esc(comment)}</p>`:''}</li>`;
  }).join('');
  const mistake=!ok?`<p><strong>O que revisar:</strong> compare sua escolha com a alternativa correta e leia o fundamento e os comentários abaixo.</p>`:'';
  return `<article class="lesson-panel" style="margin:14px 0">
   <h3>Questão ${index+1} — ${ok?'Acerto':'Erro'}</h3>
   <p><strong>${esc(q.subtopicId||q.moduleId||'Conteúdo não identificado')}</strong></p>
   <p>${esc(q.stem)}</p>
   <ol style="padding-left:25px">${options}</ol>${mistake}
   ${block('Fundamento',q.explanation)}${block('Conceito',q.concept)}
   ${block('Atenção à pegadinha',q.trap)}${block('Exemplo adicional',q.newExample)}
   </article>`;
 }).join('');
 const total=ids.length;
 return `<section class="module-detail"><h1 class="page-title">Correção comentada do simulado</h1>
 <p class="page-subtitle">${correct} acerto(s) confirmado(s) de ${total} questão(ões) · ${total?Math.round(correct/total*100):0}% calculado com o banco disponível</p>
 ${missing?`<div class="notice">${missing} questão(ões) indisponível(is). O resultado histórico salvo não foi alterado.</div>`:''}
 <p>Os comentários e exemplos são provenientes do banco existente. Campos sem conteúdo não são inventados.</p>
 <button class="btn btn-primary" data-sim-close="1">Voltar à seleção de simulados</button>
 ${renderSimuladoPerformance(session,lookup)}<h2 class="section-title">Correção de todas as questões</h2>${cards}</section>`;
}
