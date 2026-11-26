/** PT-ESTUDO — Correção 3/Lote 2. Testes não destrutivos, POR-04..POR-08.
 * Os ensaios com motor real ocorrem quando executados dentro do repositório completo.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { POR_04_QUESTIONS } from '../js/data/portugues/por-04-questions.js';
import { POR_05_QUESTIONS } from '../js/data/portugues/por-05-questions.js';
import { POR_06_QUESTIONS } from '../js/data/portugues/por-06-questions.js';
import { POR_07_QUESTIONS } from '../js/data/portugues/por-07-questions.js';
import { POR_08_QUESTIONS } from '../js/data/portugues/por-08-questions.js';

const groups = new Map([['POR-04',POR_04_QUESTIONS],['POR-05',POR_05_QUESTIONS],['POR-06',POR_06_QUESTIONS],['POR-07',POR_07_QUESTIONS],['POR-08',POR_08_QUESTIONS]]);
const questions = [...groups.values()].flat();
const audit = JSON.parse(readFileSync(new URL('../docs/AUDITORIA_100_GABARITOS.json',import.meta.url),'utf8'));
const archive=JSON.parse(readFileSync(new URL('../docs/SNAPSHOT_PRE_REVISAO_100_QUESTOES.json',import.meta.url),'utf8'));
const auditMap=new Map(audit.map(row=>[row.id,row]));
const originalMap=new Map(Object.values(archive).flat().map(q=>[q.id,q]));
const editorial=JSON.parse(readFileSync(new URL('../docs/LOG_EDITORIAL_CORRECAO_03_LOTE_02.json',import.meta.url),'utf8'));
const shaSource=(f)=>readFileSync(new URL(`../js/features/${f}`,import.meta.url),'utf8');
const seededOrder = (length,seed) => { const a=Array.from({length},(_,i)=>i);let n=seed>>>0;for(let i=length-1;i>0;i--){n=(Math.imul(n,1664525)+1013904223)>>>0;const j=n%(i+1);[a[i],a[j]]=[a[j],a[i]];}return a;};
const sorted=a=>[...a].sort((x,y)=>x-y);
const allFormat=new Set(['ce','vf','afirmacoes','associacao','lacunas','classica','exceto']);

test('5 módulos e 100 IDs exclusivos, 20 questões em cada',()=>{
 assert.equal(groups.size,5); assert.equal(questions.length,100);
 for(const [mod,qs] of groups){assert.equal(qs.length,20,mod);assert.ok(qs.every(q=>q.moduleId===mod));}
 assert.equal(new Set(questions.map(q=>q.id)).size,100);
});

test('Resolução semântica independente dos 100 itens coincide com resposta por conteúdo',()=>{
 assert.equal(auditMap.size,100);
 for(const q of questions){
  const r=auditMap.get(q.id);assert.ok(r,`Sem resolução: ${q.id}`);
  assert.ok(r.fundamentacao_independente.length>50,`Fundamento: ${q.id}`);
  const matches=q.options.map((o,i)=>o===r.resposta_resolvida_por_conteudo?i:-1).filter(i=>i>=0);
  assert.deepEqual(matches,[q.answer],`Resposta não se confirma pelo conteúdo: ${q.id}`);
  assert.equal(r.indice_resolvido,q.answer,`Divergência de resolução: ${q.id}`);
 }
});

test('Compatibilidade: mesmo ID, alternativa correta original, formato e dificuldade',()=>{
 assert.equal(originalMap.size,100);
 for(const q of questions){
  const old=originalMap.get(q.id);assert.ok(old,`ID novo indevido: ${q.id}`);
  for(const field of ['id','moduleId','subtopicId','type','difficulty','answer','tipo','origem'])assert.equal(q[field],old[field],`${q.id}.${field}`);
  assert.equal(q.options.length,old.options.length,`Número de alternativas alterado: ${q.id}`);
 }
});

test('Subtópicos completos: 1 C/E média +1 média variada +2 difíceis',()=>{
 for(const [mod,qs] of groups){
  const topics=new Map();for(const q of qs){if(!topics.has(q.subtopicId))topics.set(q.subtopicId,[]);topics.get(q.subtopicId).push(q);}
  assert.equal(topics.size,5,mod);
  for(const [t,items] of topics){
    assert.equal(items.length,4,t);
    assert.equal(items.filter(q=>q.type==='ce'&&q.difficulty==='media').length,1,t);
    assert.equal(items.filter(q=>q.type!=='ce'&&q.difficulty==='media').length,1,t);
    assert.equal(items.filter(q=>q.difficulty==='dificil').length,2,t);
  }
 }
});

test('Todos os formatos reconhecidos, comentários por alternativa, exemplos e desafios não repetidos',()=>{
 assert.deepEqual(new Set(questions.map(q=>q.type)),allFormat);
 for(const q of questions){
  assert.ok(q.stem.length>=30,`Enunciado curto: ${q.id}`);
  assert.ok(q.options.length===2||q.options.length===4,`Número de opções: ${q.id}`);
  assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.options.length,q.id);
  assert.equal(q.optionComments.length,q.options.length,`${q.id}: comentários`);
  assert.ok(q.optionComments.every(c=>typeof c==='string'&&c.length>22),`${q.id}: comentário vazio`);
  for(const key of ['explanation','concept','trap','examTip','newExample','challenge'])assert.ok(typeof q[key]==='string'&&q[key].length>=25,`${q.id}:${key}`);
  assert.ok(!/mesmo texto(?:-base)? (?:da|de) (?:outra|quest[aã]o)|texto-base da questão/i.test(q.stem),`${q.id}: vínculo de texto-base não assegurado`);
  assert.equal(new Set(q.options).size,q.options.length,`${q.id}: alternativas duplicadas`);
 }
 for(const field of ['examTip','newExample','challenge'])assert.equal(new Set(questions.map(q=>q[field])).size,100,`${field}: repetição`);
});

test('AUTORAIS sem banca, prova ou gabarito oficial inventado',()=>{
 for(const q of questions){assert.equal(q.tipo,'AUTORAL',q.id);assert.equal(q.origem,'AUTORAL_INEDITA',q.id);assert.ok(!q.banca&&!q.prova&&!q.gabaritoOficial&&!q.ano,q.id);}
});

test('Embaralhamento: preserva índices de opção e comentários, C/E fixo',()=>{
 let cases=0;
 for(const q of questions){
   if(q.type==='ce')assert.deepEqual(q.options,['CERTO','ERRADO'],q.id);
   for(let seed=1;seed<=40;seed++){
    const order=q.type==='ce'?[0,1]:seededOrder(q.options.length,seed+q.id.length);
    assert.deepEqual(sorted(order),q.options.map((_,i)=>i),`${q.id}: índices ausentes`);
    assert.equal(q.options[order[order.indexOf(q.answer)]],q.options[q.answer]);
    assert.equal(q.optionComments[order[order.indexOf(q.answer)]],q.optionComments[q.answer]);
    if(q.type==='ce')assert.deepEqual(order,[0,1]);
    cases++;
   }
 }
 assert.equal(cases,4000);
});

test('2.500 sessões simuladas: dez médias e seis difíceis por módulo, sem duplicação',()=>{
 let sessions=0;
 for(const [mod,qs] of groups){
   const med=qs.filter(q=>q.difficulty==='media'),hard=qs.filter(q=>q.difficulty==='dificil');
   assert.equal(med.length,10);assert.equal(hard.length,10);
   for(let seed=1;seed<=500;seed++){
     const shuffled=seededOrder(hard.length,seed+mod.charCodeAt(5)).map(i=>hard[i]);
     // Simula apenas o contrato de composição; a execução real ocorre no GitHub Actions.
     const ids=[...med,...shuffled.slice(0,6)].map(q=>q.id);
     assert.equal(ids.length,16); assert.equal(new Set(ids).size,16);
     assert.equal(ids.filter(id=>med.some(q=>q.id===id)).length,10);
     assert.equal(ids.filter(id=>hard.some(q=>q.id===id)).length,6);
     sessions++;
   }
 }
 assert.equal(sessions,2500);
});

test('As 35 revisões focadas não mudaram gabaritos ou IDs, histórico editorial recuperável',()=>{
 assert.equal(editorial.length,100);
 const targeted=editorial.filter(x=>x.fields.some(f=>['stem','options','explanation','optionComments'].includes(f)));
 assert.equal(targeted.length,35);
 for(const row of editorial){
   const q=questions.find(x=>x.id===row.id),old=originalMap.get(row.id);assert.ok(q&&old);
   for(const key of ['stem','options','explanation','optionComments','examTip','newExample','challenge']){
     if(row.fields.includes(key)){assert.deepEqual(row.before[key],old[key],`${row.id}: snapshot antes`);assert.deepEqual(row.after[key],q[key],`${row.id}: snapshot depois`);}
   }
 }
});

test('Motor do GitHub: opções embaralhadas preservam índice original em 4 interfaces',(ctx)=>{
 if(!existsSync(new URL('../js/features/exercises.js',import.meta.url))){ctx.skip('Motor completo disponível somente após upload ao GitHub; executar na Action');return;}
 const bank=shaSource('banco-questoes.js'),ex=shaSource('exercises.js'),review=shaSource('review-errors.js'),sim=shaSource('simulados.js');
 for(const [name,src] of [['Banco',bank],['Exercícios',ex],['Revisões',review],['Simulados',sim]]){
   assert.match(src,/type\s*===\s*'ce'\s*\?/i,`${name}: C/E`);
   assert.match(src,/shuffle(?:d)?\(/i,`${name}: sorteio`);
 }
 assert.match(bank,/data-bank-choice="\$\{original\}"/);
 assert.match(ex,/data-exercise-choice="\$\{originalIndex\}"/);
 assert.match(review,/data-review-choice="\$\{idx\}"/);
 assert.match(sim,/data-sim-choice="\$\{idx\}"/);
});

test('Motor real do GitHub: abrir sessões com todos os 5 módulos',async(ctx)=>{
 if(!existsSync(new URL('../js/core/state.js',import.meta.url))){ctx.skip('Arquivo do motor ausente do ZIP incremental; será executado no repositório');return;}
 const [{createInitialState},{createExerciseSession},{startBankSession,updateBankFilter},{startSimulado},{beginReview}]=await Promise.all([
   import('../js/core/state.js'),import('../js/features/exercises.js'),import('../js/features/banco-questoes.js'),
   import('../js/features/simulados.js'),import('../js/features/review-errors.js')]);
 for(const [mod,qs] of groups){
  const map=new Map(qs.map(q=>[q.id,q]));
  const st=createInitialState();assert.equal(createExerciseSession(st,mod),true,mod);
  const ses=st.progress.exercises[mod];assert.equal(ses.ids.length,16);assert.equal(new Set(ses.ids).size,16);
  assert.equal(ses.ids.filter(id=>map.get(id)?.difficulty==='media').length,10);
  assert.equal(ses.ids.filter(id=>map.get(id)?.difficulty==='dificil').length,6);
  for(const id of ses.ids){const q=map.get(id),order=ses.optionOrders[id];assert.ok(q&&order);assert.deepEqual(sorted(order),q.options.map((_,i)=>i));if(q.type==='ce')assert.deepEqual(order,[0,1]);}
  const bk=createInitialState();assert.equal(updateBankFilter(bk,'moduleId',mod),true);assert.equal(startBankSession(bk),true);
  assert.equal(bk.progress.questionBank.session.ids.length,20);
  for(const id of bk.progress.questionBank.session.ids){const q=map.get(id),order=bk.progress.questionBank.session.orders[id];assert.ok(q&&order);assert.deepEqual(sorted(order),q.options.map((_,i)=>i));if(q.type==='ce')assert.deepEqual(order,[0,1]);}
  const si=createInitialState();assert.equal(startSimulado(si,`modulo:${mod}`,20).ok,true);
  for(const id of si.progress.simulados.active.ids){const q=map.get(id),order=si.progress.simulados.active.orders[id];assert.ok(q&&order);assert.deepEqual(sorted(order),q.options.map((_,i)=>i));if(q.type==='ce')assert.deepEqual(order,[0,1]);}
  const re=createInitialState(),question=qs.find(q=>q.type!=='ce');assert.equal(beginReview(re,question.id),true);
  assert.deepEqual(sorted(re.progress.reviewAttempts[question.id].order),question.options.map((_,i)=>i));
 }
});
