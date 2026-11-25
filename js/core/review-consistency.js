import { buildUnifiedReviewQueue } from './spaced-review.js';

/** Diagnóstico somente leitura: nunca altera agendamentos nem histórico. */
export function inspectReviewConsistency(state) {
 const p=state?.progress||{}, queue=buildUnifiedReviewQueue(state);
 const valid=x=>typeof x==='string'&&Number.isFinite(Date.parse(x));
 const raw=[];
 for(const [id,r] of Object.entries(p.questionHistory||{}))if(valid(r?.reviewAt))raw.push({key:`question:${id}`,dueAt:r.reviewAt,source:'questionHistory'});
 for(const [id,r] of Object.entries(p.reviewSchedule||{}))if(valid(r?.dueAt))raw.push({key:`question:${r?.questionId||id}`,dueAt:r.dueAt,source:'reviewSchedule'});
 for(const [id,r] of Object.entries(p.flashcards||{}))if(valid(r?.dueAt))raw.push({key:`flashcard:${id}`,dueAt:r.dueAt,source:'flashcards'});
 const keys=new Set(),duplicates=[];
 for(const r of raw){if(keys.has(r.key)&&!duplicates.includes(r.key))duplicates.push(r.key);keys.add(r.key);}
 const invalid=[];
 for(const [id,r] of Object.entries(p.reviewSchedule||{}))if(r?.dueAt&&!valid(r.dueAt))invalid.push(`question:${id}`);
 for(const [id,r] of Object.entries(p.flashcards||{}))if(r?.dueAt&&!valid(r.dueAt))invalid.push(`flashcard:${id}`);
 const indexed=new Set(queue.map(x=>x.key));
 const missing=[...keys].filter(k=>!indexed.has(k));
 const stale=Array.isArray(p.unifiedReviewQueue)?p.unifiedReviewQueue.filter(x=>!x?.key||!indexed.has(x.key)).length:0;
 return {rawRecords:raw.length,unique:queue.length,duplicates:duplicates.length,
  duplicateKeys:duplicates,invalidDates:invalid,missingFromIndex:missing,staleIndexedItems:stale,
  consistent:invalid.length===0&&missing.length===0};
}
export function renderReviewConsistency(state) {
 const r=inspectReviewConsistency(state);
 const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 return `<details class="module-card" style="margin:16px 0;padding:14px"><summary><strong>Consistência dos agendamentos</strong></summary>
 <p>Registros de origem: ${r.rawRecords} · Itens únicos: ${r.unique} · Sobreposições consolidadas: ${r.duplicates}</p>
 <p>Datas inválidas: ${r.invalidDates.length} · Itens não indexados: ${r.missingFromIndex.length} · Índices antigos: ${r.staleIndexedItems}</p>
 <p>${r.consistent?'Nenhuma inconsistência crítica detectada neste diagnóstico.':'Há registros que precisam ser examinados na auditoria final.'}</p>
 <p>Sobreposições entre histórico e agenda são esperadas e não representam revisões duplicadas. Nenhum dado foi modificado.</p>
 ${r.invalidDates.length?`<p>Datas inválidas: ${esc(r.invalidDates.slice(0,8).join(', '))}</p>`:''}
 </details>`;
}
