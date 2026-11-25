/** Fase 16 — Lote 5. Análise somente de leitura da tentativa finalizada. */
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const obj=x=>x&&typeof x==='object'&&!Array.isArray(x)?x:{};
const key=x=>String(x??'Não identificado').trim()||'Não identificado';
const pct=(a,n)=>n?Math.round(100*a/n):0;
export function simuladoPerformance(session,lookup){
 if(!session?.finishedAt||!Array.isArray(session.ids))return null;
 const groups={modules:new Map(),subtopics:new Map(),difficulty:new Map()};
 let missing=0,correct=0,available=0;
 for(const id of session.ids){
  const q=lookup.get(id);
  if(!q||!Array.isArray(q.options)||!Number.isInteger(q.answer)){missing++;continue;}
  available++;
  const hit=Number.isInteger(session.answers?.[id])&&session.answers[id]===q.answer;
  if(hit)correct++;
  const values={
   modules:key(q.moduleId),
   subtopics:key(q.subtopicId||q.moduleId),
   difficulty:key(q.difficulty)
  };
  for(const [dimension,name] of Object.entries(values)){
   const map=groups[dimension],row=map.get(name)||{name,total:0,correct:0,wrong:0};
   row.total++;row.correct+=Number(hit);row.wrong+=Number(!hit);map.set(name,row);
  }
 }
 const list=map=>[...map.values()].map(r=>({...r,percent:pct(r.correct,r.total)}))
   .sort((a,b)=>a.percent-b.percent||b.wrong-a.wrong||a.name.localeCompare(b.name,'pt-BR'));
 return {total:session.ids.length,available,missing,correct,
  modules:list(groups.modules),subtopics:list(groups.subtopics),difficulty:list(groups.difficulty)};
}
export function renderSimuladoPerformance(session,lookup){
 const data=simuladoPerformance(session,lookup);
 if(!data)return '';
 const table=(heading,rows)=>`<h3>${heading}</h3>${rows.length?`<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse"><thead><tr><th scope="col" style="text-align:left">Conteúdo</th><th scope="col">Acertos</th><th scope="col">Erros</th><th scope="col">Aproveitamento</th></tr></thead><tbody>${rows.map(r=>`<tr><th scope="row" style="text-align:left">${esc(r.name)}</th><td style="text-align:center">${r.correct}/${r.total}</td><td style="text-align:center">${r.wrong}</td><td style="text-align:center">${r.percent}%</td></tr>`).join('')}</tbody></table></div>`:'<p>Sem dados disponíveis.</p>'}`;
 const weak=data.subtopics.filter(r=>r.wrong>0).slice(0,5);
 return `<section class="module-card" style="padding:16px;margin:18px 0">
 <h2>Análise de desempenho por conteúdo</h2>
 <p>${data.correct} acerto(s) em ${data.available} questão(ões) disponíveis (${pct(data.correct,data.available)}%).</p>
 ${data.missing?`<p class="notice">${data.missing} questão(ões) não encontrada(s) no banco atual; foram excluídas apenas deste cálculo, sem alterar o resultado salvo.</p>`:''}
 <p>Os grupos com menor aproveitamento aparecem primeiro. Amostras pequenas não permitem concluir domínio ou dificuldade permanente.</p>
 ${table('Por módulo',data.modules)}
 ${table('Por subtópico',data.subtopics)}
 ${table('Por dificuldade',data.difficulty)}
 <h3>Prioridades de revisão desta tentativa</h3>
 ${weak.length?`<ol>${weak.map(r=>`<li>${esc(r.name)} — ${r.wrong} erro(s) em ${r.total} questão(ões)</li>`).join('')}</ol>`:'<p>Nenhum subtópico com erro identificado nesta tentativa.</p>'}
 <p class="page-subtitle">Análise calculada na visualização; não altera pontuações, respostas ou histórico. Os resultados anteriores sem respostas detalhadas não são reconstruídos.</p>
 </section>`;
}
