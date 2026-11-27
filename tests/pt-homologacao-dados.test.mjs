/** PT-ESTUDO — Correção 4. Estrutura pedagógica do catálogo real. Sem escrita no progresso. */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { MODULES, ALL_PLANNED_MODULES, validateCatalog } from '../js/data/modules.js';
import { getLesson, LESSONS } from '../js/data/lessons.js';
import { getDiagnosticCards } from '../js/data/diagnostics.js';
import { QUESTIONS, questionsForModule } from '../js/data/questions.js';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const allIds=new Set();
const validTypes=new Set(['ce','vf','vfseq','afirmacoes','associacao','lacunas','classica','exceto']);

// Testes não precisam acessar localStorage nem carregar o app no navegador.
test('Catálogo contém 27 módulos liberados e nenhum erro de validação',()=>{
  assert.equal(MODULES.length,27);
  assert.equal(ALL_PLANNED_MODULES.length,27);
  assert.deepEqual(validateCatalog(),[]);
  assert.equal(MODULES.filter(m=>m.id.startsWith('POR-')).length,24);
  assert.equal(MODULES.filter(m=>m.id.startsWith('RED-')).length,3);
});

test('140 subtópicos, 140 aulas e 140 cartões diagnósticos completos',()=>{
  const topics=MODULES.flatMap(m=>m.subtopics);
  assert.equal(topics.length,140);
  assert.equal(Object.keys(LESSONS).length,140);
  for (const m of MODULES){
    const c=getDiagnosticCards(m);
    assert.equal(c?.length,m.subtopics.length,`Diagnóstico ${m.id}`);
    for (const t of m.subtopics){
      const l=getLesson(t.id);
      assert.ok(l,`Aula ${t.id}`);
      for(const field of ['objective','concept','explanation','example','examTip','summary','reviewQuestion','reviewAnswer']){
        assert.ok(typeof l[field]==='string'&&l[field].trim().length>=12,`${t.id} campo ${field}`);
      }
      assert.equal(c.filter(x=>x.subtopicId===t.id).length,1,`Cartão ${t.id}`);
    }
  }
});

test('560 questões: IDs únicos, vínculo exato com módulos e respostas válidas',()=>{
  assert.equal(QUESTIONS.length,560);
  for(const module of MODULES){
    const questions=questionsForModule(module.id);
    assert.equal(questions.length,module.subtopics.length*4,`Quantidade ${module.id}`);
    for(const topic of module.subtopics){
      const inTopic=questions.filter(q=>q.subtopicId===topic.id);
      assert.equal(inTopic.length,4,`Quatro questões ${topic.id}`);
      assert.equal(inTopic.filter(q=>q.difficulty==='media').length,2,`Médias ${topic.id}`);
      assert.equal(inTopic.filter(q=>q.difficulty==='dificil').length,2,`Difíceis ${topic.id}`);
      assert.equal(inTopic.filter(q=>q.difficulty==='media'&&q.type==='ce').length,1,`C/E média ${topic.id}`);
    }
    for(const q of questions){
      assert.ok(typeof q.id==='string'&&q.id.startsWith(`Q-${module.id}-`),`ID ${q.id}`);
      assert.ok(!allIds.has(q.id),`ID repetido ${q.id}`);allIds.add(q.id);
      assert.ok(validTypes.has(q.type),`Tipo ${q.id}`);
      assert.ok(Array.isArray(q.options)&&q.options.length>=2,`Alternativas ${q.id}`);
      assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.options.length,`Gabarito ${q.id}`);
      assert.equal(q.optionComments?.length,q.options.length,`Comentários ${q.id}`);
      assert.ok(q.optionComments.every(c=>typeof c==='string'&&c.trim().length>=18),`Comentário genérico ${q.id}`);
      assert.ok(['media','dificil'].includes(q.difficulty),`Dificuldade ${q.id}`);
      assert.equal(q.tipo,'AUTORAL',`Origem ${q.id}`);
      assert.equal(q.origem,'AUTORAL_INEDITA',`Autoria ${q.id}`);
      assert.ok(typeof q.stem==='string'&&q.stem.length>=20,`Enunciado ${q.id}`);
      if(q.type==='ce')assert.deepEqual(q.options,['CERTO','ERRADO'],`C/E fixo ${q.id}`);
      assert.doesNotMatch(q.stem,/mesmo texto(?:-base)?\s+(?:de|da)\s+outra\s+questão/i,`Texto-base oculto ${q.id}`);
    }
  }
  assert.equal(allIds.size,560);
});

test('HTML aponta para JS e CSS realmente presentes na árvore do repositório',()=>{
  const index=readFileSync(resolve(root,'index.html'),'utf8');
  for(const m of index.matchAll(/<(?:script|link)\b[^>]*?\b(?:src|href)\s*=\s*['"]([^'"]+)['"]/gi)){
    const ref=m[1];
    if(ref.startsWith('http')||ref.startsWith('//')||ref.startsWith('#'))continue;
    assert.ok(existsSync(resolve(root,ref)),`Recurso da página inicial ausente: ${ref}`);
  }
  assert.match(index,/js\/start-f25-lote04\.js/);
  assert.match(index,/PT-ESTUDO/);
});

test('Importações do banco abrangem os 27 arquivos sem Administração',()=>{
  const src=readFileSync(resolve(root,'js/data/questions.js'),'utf8');
  assert.equal((src.match(/-questions\.js'/g)||[]).length,27);
  assert.doesNotMatch(src,/\.\.\/content\/questions\.js|\/adm-|ADM_\d+_QUESTIONS/i);
});
