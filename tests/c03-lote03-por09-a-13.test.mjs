import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {pathToFileURL} from 'node:url';
const ids = [9,10,11,12,13], expected = new Map();
const audit = JSON.parse(readFileSync(new URL('../docs/C03_L03_RESOLUCOES_100_QUESTOES.json',import.meta.url),'utf8'));
const original = JSON.parse(readFileSync(new URL('../docs/C03_L03_SNAPSHOT_ORIGINAL_100_QUESTOES.json',import.meta.url),'utf8'));
for(const a of audit)expected.set(a.id,a);
let n=0,checks=0;
for(const mod of ids){
 const key=`POR-${String(mod).padStart(2,'0')}`;
 const p=`../js/data/portugues/por-${String(mod).padStart(2,'0')}-questions.js`;
 const file=await import(p);
 const questions=file[`POR_${String(mod).padStart(2,'0')}_QUESTIONS`];
 assert.equal(questions.length,20);
 for(let i=0;i<20;i++){
  const q=questions[i],old=original[key][i],a=expected.get(q.id);
  assert.ok(a&&a.solucao_independente?.length>45);
  for(const k of ['id','answer','moduleId','subtopicId','type','difficulty','tipo','origem']) assert.deepEqual(q[k],old[k],`${q.id} / ${k}`);
  assert.equal(q.answer,a.indice_resolvido);
  assert.equal(q.options.length,q.optionComments.length);
  assert.ok(q.options.every(t=>typeof t==='string'&&t.trim()));
  assert.ok(q.optionComments.every(t=>typeof t==='string'&&t.length>20));
  assert.ok(q.newExample.length>25&&q.challenge.length>25);
  assert.equal(q.tipo,'AUTORAL');assert.equal(q.origem,'AUTORAL_INEDITA');
  if(q.type==='ce')assert.deepEqual(q.options,['CERTO','ERRADO']);
  // Testa sempre o indice original, nao letra renderizada, para o conjunto de permutacoes.
  for(let rep=0;rep<40;rep++){
   const order=[...q.options.keys()];
   if(q.type!=='ce'){
    for(let j=order.length-1;j>0;j--){const k=Math.floor(Math.random()*(j+1));[order[j],order[k]]=[order[k],order[j]];}
   }
   const shown=order.indexOf(q.answer),originalIndex=order[shown];
   assert.equal(originalIndex,q.answer);
   assert.equal(q.optionComments[originalIndex],q.optionComments[q.answer]);
   if(q.type==='ce')assert.deepEqual(order,[0,1]);
   checks++;
  }
  n++;
 }
}
assert.equal(n,100);
assert.equal(new Set(audit.map(x=>x.id)).size,100);
console.log(JSON.stringify({modules:ids.length,questions:n,shuffleChecks:checks,immutableContracts:true,success:true}));
