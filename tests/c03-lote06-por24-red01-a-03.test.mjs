/** PT-ESTUDO — Correção 3 / Lote 6: dados e compatibilidade. Sem gravação em localStorage. */
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {MODULES,PENDING_MODULES,validateCatalog} from '../js/data/modules.js';
import {QUESTIONS,questionsForModule} from '../js/data/questions.js';
import {LESSONS} from '../js/data/lessons.js';
import {DIAGNOSTICS,getDiagnosticCards} from '../js/data/diagnostics.js';
const mids=['POR-24','RED-01','RED-02','RED-03'];
const counts={'POR-24':20,'RED-01':24,'RED-02':28,'RED-03':28};
const original=JSON.parse(readFileSync(new URL('../docs/C03_L06_SNAPSHOT_ORIGINAL_100_QUESTOES.json',import.meta.url),'utf8'));
const solutions=JSON.parse(readFileSync(new URL('../docs/C03_L06_RESOLUCOES_100_QUESTOES.json',import.meta.url),'utf8'));
const records=JSON.parse(readFileSync(new URL('../docs/C03_L06_REGISTRO_EDITORIAL_100_QUESTOES.json',import.meta.url),'utf8'));
const bySolution=new Map(solutions.map(s=>[s.id,s]));
const byRecord=new Map(records.map(s=>[s.id,s]));
let assertions=0,permutations=0,sessions=0,questionCount=0,engineContractChecked=false;
function ok(cond,what){assert.ok(cond,what);assertions++;}
function eq(a,b,what){assert.deepEqual(a,b,what);assertions++;}
const shuffle=ar=>{const a=[...ar];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a};
eq(MODULES.length,27,'catálogo 27 módulos');eq(PENDING_MODULES.length,0,'nenhum pendente');
eq(QUESTIONS.length,560,'560 questões');eq(new Set(QUESTIONS.map(q=>q.id)).size,560,'IDs únicos');
eq(Object.keys(LESSONS).length,140,'140 aulas');eq(Object.keys(DIAGNOSTICS).length,27,'27 diagnósticos');
eq(MODULES.flatMap(m=>getDiagnosticCards(m)||[]).length,140,'140 cartões');eq(validateCatalog(),[],'catálogo válido');
for(const mid of mids){
 const m=MODULES.find(x=>x.id===mid);ok(!!m,'módulo '+mid);
 const qs=questionsForModule(mid),was=original[mid];eq(qs.length,counts[mid],'quantidade '+mid);eq(was.length,counts[mid],'snapshots '+mid);
 eq(qs.filter(q=>q.difficulty==='media').length,m.subtopics.length*2,'médias '+mid);
 eq(qs.filter(q=>q.difficulty==='dificil').length,m.subtopics.length*2,'difíceis '+mid);
 for(const st of m.subtopics){eq(qs.filter(q=>q.subtopicId===st.id).length,4,'4 itens '+st.id);ok(!!LESSONS[st.id],'aula '+st.id);}
 for(let i=0;i<qs.length;i++){
  const q=qs[i],old=was[i],sol=bySolution.get(q.id),rec=byRecord.get(q.id);
  ok(!!sol&&!!rec,'documentação '+q.id);
  for(const key of ['id','moduleId','subtopicId','difficulty','type','answer','tipo','origem','pedagogicalPurpose'])eq(q[key],old[key],'preservado '+key+' '+q.id);
  eq(sol.indice_resolvido_pelo_conteudo,q.answer,'fundamentação e índice '+q.id);
  ok(sol.fundamento_independente.length>55,'fundamento individual '+q.id);
  eq(q.options.length,q.optionComments.length,'índices comentários '+q.id);
  ok(q.options.every(x=>typeof x==='string'&&x.trim().length>3),'alternativas '+q.id);
  ok(q.optionComments.every(x=>typeof x==='string'&&x.length>=38),'comentários individualizados '+q.id);
  ok(typeof q.explanation==='string'&&q.explanation.length>55,'explicação '+q.id);
  ok(typeof q.newExample==='string'&&q.newExample.length>60,'exemplo '+q.id);
  ok(typeof q.challenge==='string'&&q.challenge.length>40,'desafio '+q.id);
  ok(!/mesmo texto da questão|texto-base da questão anterior|veja a questão anterior/i.test(q.stem),'texto-base '+q.id);
  eq(q.tipo,'AUTORAL','tipo AUTORAL '+q.id);eq(q.origem,'AUTORAL_INEDITA','origem autoral '+q.id);
  if(q.type==='ce')eq(q.options,['CERTO','ERRADO'],'CE fixo '+q.id);
  for(let j=0;j<40;j++){
    const order=q.type==='ce'?[0,1]:shuffle(q.options.map((_,j)=>j));
    eq(order.slice().sort((a,b)=>a-b),q.options.map((_,i)=>i),'permutação bijetiva '+q.id);
    const displayPos=order.indexOf(q.answer);
    eq(order[displayPos],q.answer,'índice correto com ordem embaralhada '+q.id);
    eq(q.optionComments[order[displayPos]],q.optionComments[q.answer],'comentário acompanha alternativa '+q.id);
    if(q.type==='ce')eq(order,[0,1],'ordem fixa CE '+q.id);
    permutations++;
  }
  questionCount++;
 }
}
eq(questionCount,100,'100 questões auditadas');eq(bySolution.size,100,'100 resoluções');eq(byRecord.size,100,'100 diferenças');
const targets=mids.flatMap(mid=>questionsForModule(mid));
eq(new Set(targets.map(q=>q.newExample)).size,100,'100 exemplos distintos');
eq(new Set(targets.map(q=>q.challenge)).size,100,'100 desafios distintos');
eq(targets.filter(q=>q.type==='ce').length,25,'25 C/E');
for(const m of MODULES){
 const bank=questionsForModule(m.id),med=bank.filter(q=>q.difficulty==='media'),hard=bank.filter(q=>q.difficulty==='dificil');
 for(let k=0;k<100;k++){
  const chosen=[...med,...shuffle(hard).slice(0,6)];
  eq(chosen.length,med.length+6,'tamanho de seleção '+m.id);
  eq(new Set(chosen.map(q=>q.id)).size,chosen.length,'sem repetição '+m.id);
  eq(chosen.filter(q=>q.difficulty==='media').length,med.length,'médias '+m.id);
  eq(chosen.filter(q=>q.difficulty==='dificil').length,6,'difíceis '+m.id);
  sessions++;
 }
}
// Quando executado no checkout completo, verifica se os quatro renderizadores
// usam índices originais e mantêm CE sem embaralhamento. Sem invocar localStorage.
const files=[
 ['js/features/exercises.js',/data-exercise-choice="\$\{originalIndex\}"/,/q\.type\s*===\s*'ce'\s*\?/],
 ['js/features/banco-questoes.js',/data-bank-choice="\$\{original\}"/,/q\.type\s*===\s*'ce'\s*\?/],
 ['js/features/review-errors.js',/data-review-choice="\$\{idx\}"/,/q\.type\s*===\s*'ce'\s*\?/],
 ['js/features/simulados.js',/data-sim-choice="\$\{idx\}"/,/q\.type\s*===\s*'ce'\s*\?/],
 ];
if(files.every(([file])=>existsSync(new URL('../'+file,import.meta.url)))){
 for(const [file,choice,ce] of files){let s=readFileSync(new URL('../'+file,import.meta.url),'utf8');ok(choice.test(s),'índice original '+file);ok(ce.test(s),'CE fixo '+file);}
 engineContractChecked=true;
}
console.log(JSON.stringify({ok:true,modules:mids,reviewed:questionCount,catalog:MODULES.length,questions:QUESTIONS.length,lessons:Object.keys(LESSONS).length,diagnostics:140,permutations,sessions,assertions,engineContractChecked},null,2));
