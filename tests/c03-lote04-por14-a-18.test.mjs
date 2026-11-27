/** Testes não destrutivos de dados — PT-ESTUDO / Correção 3 Lote 4.
 * Execute no checkout COMPLETO da branch com: node tests/c03-lote04-por14-a-18.test.mjs
 */
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {MODULES,PENDING_MODULES,validateCatalog} from '../js/data/modules.js';
import {QUESTIONS,questionsForModule} from '../js/data/questions.js';
import {LESSONS} from '../js/data/lessons.js';
import {DIAGNOSTICS,getDiagnosticCards} from '../js/data/diagnostics.js';
const ids=[14,15,16,17,18].map(n=>'POR-'+String(n).padStart(2,'0'));
const before=JSON.parse(readFileSync(new URL('../docs/C03_L04_SNAPSHOT_ORIGINAL_100_QUESTOES.json',import.meta.url),'utf8'));
const resolutions=JSON.parse(readFileSync(new URL('../docs/C03_L04_RESOLUCOES_100_QUESTOES.json',import.meta.url),'utf8'));
const changed=JSON.parse(readFileSync(new URL('../docs/C03_L04_REGISTRO_EDITORIAL_100_QUESTOES.json',import.meta.url),'utf8'));
const source=new Map(resolutions.map(r=>[r.id,r]));
const entries=new Map(changed.map(r=>[r.id,r]));
let assertions=0,permutations=0,sessions=0;
function test(condition,message){assert.ok(condition,message);assertions++;}
function eq(a,b,message){assert.deepEqual(a,b,message);assertions++;}
function shuffle(a){const x=[...a];for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]];}return x;}
const allIds=new Set(QUESTIONS.map(q=>q.id));
eq(MODULES.length,27,'27 módulos ativos');eq(PENDING_MODULES.length,0,'sem módulos pendentes');eq(QUESTIONS.length,560,'560 questões');eq(allIds.size,560,'IDs do banco únicos');eq(Object.keys(LESSONS).length,140,'140 aulas');eq(Object.keys(DIAGNOSTICS).length,27,'27 conjuntos diagnósticos');eq(validateCatalog(),[],'catálogo sem erros');
const cards=MODULES.flatMap(m=>getDiagnosticCards(m)||[]);
eq(cards.length,140,'140 cartões diagnósticos');
let reviewed=0;
for(const mid of ids){
  const mod=MODULES.find(m=>m.id===mid);test(!!mod,'módulo presente '+mid);
  const items=questionsForModule(mid),base=before[mid];eq(items.length,20,'20 questões '+mid);
  const med=items.filter(q=>q.difficulty==='media'),hard=items.filter(q=>q.difficulty==='dificil');
  eq(med.length,10,'10 médias '+mid);eq(hard.length,10,'10 difíceis '+mid);
  eq(mod.subtopics.length,5,'5 subtópicos '+mid);
  for(const sub of mod.subtopics){eq(items.filter(q=>q.subtopicId===sub.id).length,4,'4 questões por subtópico '+sub.id);test(!!LESSONS[sub.id],'aula '+sub.id);}
  for(let i=0;i<items.length;i++){
    const q=items[i],old=base[i],r=source.get(q.id),change=entries.get(q.id);
    test(!!r&&!!change,'auditoria individual '+q.id);
    for(const key of ['id','moduleId','subtopicId','type','difficulty','answer','tipo','origem'])eq(q[key],old[key],q.id+' '+key);
    eq(q.answer,r.indice_resolvido,'resolução semântica '+q.id);
    eq(q.options.length,q.optionComments.length,'comentários alinhados '+q.id);
    test(q.optionComments.every(t=>typeof t==='string'&&t.length>=25),'explicações individuais '+q.id);
    test(q.options.every(t=>typeof t==='string'&&t.trim()),'alternativas '+q.id);
    test(q.newExample.length>45&&q.challenge.length>45,'apoios substanciais '+q.id);
    test(!/mesmo texto da questão|texto anterior|veja questão anterior/i.test(q.stem),'texto independente '+q.id);
    test(q.tipo==='AUTORAL'&&q.origem==='AUTORAL_INEDITA','autoral '+q.id);
    if(q.type==='ce')eq(q.options,['CERTO','ERRADO'],'ordem fixa CE '+q.id);
    for(let repeat=0;repeat<40;repeat++){
      const order=q.type==='ce'?[0,1]:shuffle(q.options.map((_,j)=>j));
      const pos=order.indexOf(q.answer);
      test(pos>=0&&order[pos]===q.answer,'gabarito original conservado '+q.id);
      test(q.optionComments[order[pos]]===q.optionComments[q.answer],'comentário no índice certo '+q.id);
      if(q.type==='ce')eq(order,[0,1],'CE não embaralhado');
      permutations++;
    }
    reviewed++;
  }
  for(let attempt=0;attempt<100;attempt++){
    const selected=[...med,...shuffle(hard).slice(0,6)];
    eq(selected.length,16,'sessão de 16 '+mid);
    eq(new Set(selected.map(q=>q.id)).size,16,'sem repetição '+mid);
    eq(selected.filter(q=>q.difficulty==='media').length,10,'dez médias '+mid);
    eq(selected.filter(q=>q.difficulty==='dificil').length,6,'seis difíceis '+mid);
    sessions++;
  }
}
eq(reviewed,100,'cem itens da revisão');
eq(source.size,100,'100 resoluções textuais distintas');
eq(entries.size,100,'100 históricos de edição');
const current=ids.flatMap(mid=>questionsForModule(mid));
eq(new Set(current.map(q=>q.newExample)).size,100,'100 exemplos distintos');
eq(new Set(current.map(q=>q.challenge)).size,100,'100 desafios distintos');
const locate=id=>current.find(q=>q.id===id);
// Regressões sobre itens de risco previamente identificados.
test(locate('Q-POR-15-005-03').stem.includes('três setores: recepção, triagem e protocolo'),'aposto enumerativo explícito');
test(locate('Q-POR-16-005-02').stem.includes('preserva o sentido e o tempo verbal'),'reescrita sem dupla interpretação');
test(locate('Q-POR-17-003-02').options[1].includes('prestou auxílio'),'assistir: sentidos diferenciados');
test(locate('Q-POR-18-005-04').stem.includes('critério editorial'),'padrão do Senado delimitado');
console.log(JSON.stringify({ok:true,modules:ids.length,reviewed,questionsTotal:QUESTIONS.length,lessons:Object.keys(LESSONS).length,diagnosticCards:cards.length,permutations,sessions,assertions},null,2));
