import { renderErrorHistory } from './error-history.js';
const obj=x=>x&&typeof x==='object'&&!Array.isArray(x)?x:{};
export function errorAnalysis(state){
 const p=obj(state?.progress),h=obj(p.questionHistory),a=obj(p.adaptiveReview);
 const records=new Map();
 for(const e of Array.isArray(p.errors)?p.errors:[]){
  if(!e?.questionId)continue;
  const id=String(e.questionId),old=records.get(id)||{};
  const history=obj(h[id]),adaptive=obj(a[`question:${id}`]);
  records.set(id,{id,moduleId:e.moduleId||old.moduleId||'Não identificado',
   subtopicId:e.subtopicId||old.subtopicId||'Não identificado',
   reason:history.assessment||'Não classificado',
   lapses:Math.max(1,Number(adaptive.lapses)||1)});
 }
 const items=[...records.values()];
 const grouped=key=>[...items.reduce((m,x)=>{const v=x[key],o=m.get(v)||{name:v,total:0,recurrent:0};o.total++;if(x.lapses>=2)o.recurrent++;m.set(v,o);return m},new Map()).values()].sort((a,b)=>b.recurrent-a.recurrent||b.total-a.total);
 return {items,modules:grouped('moduleId'),subtopics:grouped('subtopicId'),reasons:grouped('reason')};
}
export function renderErrorAnalysis(state){
 const d=errorAnalysis(state);
 const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const section=(title,rows)=>`<h3>${title}</h3>${rows.length?`<ul>${rows.slice(0,12).map(x=>`<li>${esc(x.name)}: ${x.total} questão(ões), ${x.recurrent} recorrente(s)</li>`).join('')}</ul>`:'<p>Sem registros.</p>'}`;
 return `<section class="module-card" style="padding:16px;margin:16px 0"><h2>Mapa de dificuldades</h2>
 <p>${d.items.length} questão(ões) com erro; ${d.items.filter(x=>x.lapses>=2).length} com reincidência.</p>
 ${renderErrorHistory(state)}
 ${section('Por módulo',d.modules)}${section('Por subtópico',d.subtopics)}${section('Por causa',d.reasons)}
 <p>Dados históricos incompletos são indicados como não classificados. Este painel não modifica o progresso.</p></section>`;
}
