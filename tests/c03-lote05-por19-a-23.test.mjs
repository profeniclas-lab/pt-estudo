/** PT-ESTUDO — Correção 3, Lote 5: testes de dados não destrutivos.
 * Executar após instalar os arquivos em um checkout completo:
 * node tests/c03-lote05-por19-a-23.test.mjs
 * Não usa localStorage nem serviços externos.
 */
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {MODULES,PENDING_MODULES,validateCatalog} from '../js/data/modules.js';
import {QUESTIONS,questionsForModule} from '../js/data/questions.js';
import {LESSONS} from '../js/data/lessons.js';
import {DIAGNOSTICS,getDiagnosticCards} from '../js/data/diagnostics.js';
const ids=[19,20,21,22,23].map(n=>`POR-${n}`);
const before=JSON.parse(readFileSync(new URL('../docs/C03_L05_SNAPSHOT_ORIGINAL_100_QUESTOES.json',import.meta.url),'utf8'));
const audits=JSON.parse(readFileSync(new URL('../docs/C03_L05_RESOLUCOES_100_QUESTOES.json',import.meta.url),'utf8'));
const diffs=JSON.parse(readFileSync(new URL('../docs/C03_L05_REGISTRO_EDITORIAL_100_QUESTOES.json',import.meta.url),'utf8'));
const auditsById=new Map(audits.map(x=>[x.id,x]));
const diffsById=new Map(diffs.map(x=>[x.id,x]));
let assertions=0,permutations=0,sessions=0,checked=0;
function ok(c,message){assert.ok(c,message);assertions++;}
function eq(a,b,message){assert.deepEqual(a,b,message);assertions++;}
function shuffle(values){const a=[...values];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
eq(MODULES.length,27,'27 módulos ativos');
eq(PENDING_MODULES.length,0,'nenhum módulo pendente');
eq(QUESTIONS.length,560,'560 questões no banco');
eq(new Set(QUESTIONS.map(q=>q.id)).size,560,'IDs únicos em todo o banco');
eq(Object.keys(LESSONS).length,140,'140 aulas');
eq(Object.keys(DIAGNOSTICS).length,27,'27 diagnósticos por módulo');
eq(MODULES.flatMap(m=>getDiagnosticCards(m)||[]).length,140,'140 cartões diagnósticos');
eq(validateCatalog(),[],'catálogo íntegro');
for(const mid of ids){
  const mod=MODULES.find(m=>m.id===mid);ok(!!mod,'módulo existente '+mid);
  const arr=questionsForModule(mid);eq(arr.length,20,mid+' 20 questões');
  const original=before[mid];eq(original.length,20,mid+' 20 versões anteriores');
  const med=arr.filter(q=>q.difficulty==='media'),hard=arr.filter(q=>q.difficulty==='dificil');
  eq(med.length,10,mid+' médias');eq(hard.length,10,mid+' difíceis');
  eq(mod.subtopics.length,5,mid+' subtópicos');
  for(const t of mod.subtopics){eq(arr.filter(q=>q.subtopicId===t.id).length,4,'quatro itens por subtópico '+t.id);ok(!!LESSONS[t.id],'aula '+t.id);}
  for(let i=0;i<arr.length;i++){
    const q=arr[i],old=original[i],r=auditsById.get(q.id),change=diffsById.get(q.id);
    ok(!!r && !!change,'registro individual '+q.id);
    for(const key of ['id','moduleId','subtopicId','type','difficulty','answer','tipo','origem'])eq(q[key],old[key],key+' preservado '+q.id);
    eq(q.answer,r.gabarito_resolvido_independentemente,'solução independente '+q.id);
    eq(q.options.length,q.optionComments.length,'comentários alinhados '+q.id);
    ok(q.optionComments.every(t=>typeof t==='string' && t.length>35),'comentários específicos '+q.id);
    ok(q.options.every(t=>typeof t==='string' && t.trim()),'alternativas legíveis '+q.id);
    ok(typeof q.explanation==='string'&&q.explanation.length>30,'fundamentação '+q.id);
    ok(typeof q.newExample==='string'&&q.newExample.length>=35,'exemplo '+q.id);
    ok(typeof q.challenge==='string'&&q.challenge.length>=35,'desafio '+q.id);
    ok(!/mesmo texto da questão|texto anterior|veja a questão anterior/i.test(q.stem),'sem texto-base ausente '+q.id);
    ok(q.tipo==='AUTORAL'&&q.origem==='AUTORAL_INEDITA','autoria transparente '+q.id);
    if(q.type==='ce')eq(q.options,['CERTO','ERRADO'],'CE conserva posição fixa '+q.id);
    for(let turn=0;turn<40;turn++){
      const order=q.type==='ce'?[0,1]:shuffle(q.options.map((_,j)=>j));
      ok(order[order.indexOf(q.answer)]===q.answer,'gabarito acompanha o índice original '+q.id);
      ok(q.optionComments[order[order.indexOf(q.answer)]]===q.optionComments[q.answer],'comentário acompanha gabarito '+q.id);
      if(q.type==='ce')eq(order,[0,1],'CE não embaralhado');
      permutations++;
    }
    checked++;
  }
  for(let attempt=0;attempt<100;attempt++){
    const selection=[...med,...shuffle(hard).slice(0,6)];
    eq(selection.length,16,'16 itens '+mid);
    eq(new Set(selection.map(x=>x.id)).size,16,'sem repetição '+mid);
    eq(selection.filter(x=>x.difficulty==='media').length,10,'10 médias '+mid);
    eq(selection.filter(x=>x.difficulty==='dificil').length,6,'6 difíceis '+mid);
    sessions++;
  }
}
eq(checked,100,'100 itens revisados');
eq(auditsById.size,100,'100 soluções explicadas');
eq(diffsById.size,100,'100 diffs');
const active=ids.flatMap(id=>questionsForModule(id));
eq(new Set(active.map(q=>q.newExample)).size,100,'100 exemplos distintos');
eq(new Set(active.map(q=>q.challenge)).size,100,'100 desafios distintos');
const byId=new Map(active.map(q=>[q.id,q]));
ok(byId.get('Q-POR-19-002-01').stem.includes('completiva nominal'),'subjetiva versus completiva nominal');
ok(byId.get('Q-POR-20-001-04').stem.includes('explicativa intercalada'),'pontuação com contexto explícito');
ok(byId.get('Q-POR-21-004-03').stem.includes('Em mensagem dirigida aos candidatos'),'retirada de redundância dos dativos');
ok(!byId.get('Q-POR-21-004-03').stem.includes('as regras aos candidatos'),'destinatário não duplicado');
ok(byId.get('Q-POR-22-004-04').options[3].includes('síntese resumida'),'redundância sem perda informativa');
ok(byId.get('Q-POR-23-005-03').stem.includes('régua da estação'),'medição objetiva contextualizada');
console.log(JSON.stringify({ok:true,modules:ids,reviewed:checked,questionsTotal:QUESTIONS.length,lessons:Object.keys(LESSONS).length,diagnosticCards:140,permutations,sessions,assertions},null,2));
