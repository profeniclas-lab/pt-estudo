/** PT-ESTUDO — Correção 4. Testes do motor real, com estado temporário em memória.
 * Requer o checkout completo do GitHub; não lê nem escreve o localStorage do usuário.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState } from '../js/core/state.js';
import { MODULES } from '../js/data/modules.js';
import { questionsForModule } from '../js/data/questions.js';
import { getDiagnosticSummary, saveDiagnosticAnswer } from '../js/features/diagnostic.js';
import { saveLessonProgress } from '../js/features/lessons.js';
import { createExerciseSession, answerExercise, assessExercise, renderExercises } from '../js/features/exercises.js';
import { startBankSession, answerBankQuestion, closeBankSession } from '../js/features/banco-questoes.js';
import { bankAchievementEvidence, moduleAchievement } from '../js/features/module-achievement.js';
import { startSimulado, answerSimulado, finishSimulado, closeSimulado } from '../js/features/simulados.js';
import { beginReview, answerReview, assessReview } from '../js/features/review-errors.js';
import { validateStateForSaving } from '../js/core/storage-safety.js';
import { buildDriveBackup, samePedagogicalProgress } from '../js/core/google-drive-backup.js';

const find=(mid,qid)=>questionsForModule(mid).find(q=>q.id===qid);

test('27 módulos: 20 sessões aleatórias por módulo e índices estáveis',()=>{
  for(const mod of MODULES){
    const questions=questionsForModule(mod.id);
    const expected=mod.subtopics.length*2+6;
    for(let turn=0;turn<20;turn++){
      const state=createInitialState();
      assert.equal(createExerciseSession(state,mod.id),true,`Início ${mod.id}`);
      const session=state.progress.exercises[mod.id];
      assert.equal(session.ids.length,expected,`Quantidade ${mod.id}`);
      assert.equal(new Set(session.ids).size,expected,`IDs distintos ${mod.id}`);
      assert.equal(session.ids.filter(id=>find(mod.id,id).difficulty==='media').length,mod.subtopics.length*2);
      assert.equal(session.ids.filter(id=>find(mod.id,id).difficulty==='dificil').length,6);
      for(const id of session.ids){
        const q=find(mod.id,id),order=session.optionOrders[id];
        assert.ok(q,`Questão carregada ${id}`);
        assert.equal(order.length,q.options.length);
        assert.deepEqual([...order].sort((a,b)=>a-b),q.options.map((_,i)=>i));
        assert.ok(order.includes(q.answer));
        if(q.type==='ce')assert.deepEqual(order,[0,1]);
      }
      assert.ok(validateStateForSaving(state),`Estado válido ${mod.id}`);
    }
  }
});

test('Diagnóstico e aula são gravados no estado isolado e influenciam o aproveitamento',()=>{
  const m=MODULES[0],s=createInitialState(),c=getDiagnosticSummary(s,m.id).cards[0];
  assert.ok(c);assert.equal(saveDiagnosticAnswer(s,m.id,c.subtopicId,'sei'),true);
  assert.equal(saveLessonProgress(s,c.subtopicId,'complete'),true);
  assert.equal(saveLessonProgress(s,c.subtopicId,'rating','sei'),true);
  assert.equal(s.progress.lessons[c.subtopicId].completed,true);
  assert.ok(moduleAchievement(s,m).earnedWeightedPoints>0);
  assert.ok(validateStateForSaving(s));
});

test('Exercício real registra alternativa original e conserva histórico',()=>{
  const m=MODULES[0],s=createInitialState();
  assert.equal(createExerciseSession(s,m.id),true);
  const session=s.progress.exercises[m.id],q=find(m.id,session.ids[0]);
  const main={innerHTML:''};renderExercises(main,m.id,s);
  assert.ok(main.innerHTML.includes('data-exercise-choice'));
  assert.equal(answerExercise(s,m.id,q.id,q.answer),true);
  assert.equal(assessExercise(s,m.id,q.id,'seguro'),true);
  assert.equal(session.answers[q.id],q.answer);
  assert.ok(s.progress.questionHistory[q.id]);
  assert.ok(validateStateForSaving(s));
});

test('Banco: filtro POR-01, resposta correta e indicador independente dos exercícios',()=>{
  const m=MODULES[0],s=createInitialState();
  s.progress.questionBank={filter:{area:m.area,moduleId:m.id,difficulty:'todas',situation:'nao-respondidas',limit:'10'},session:null};
  assert.equal(startBankSession(s),true);
  const session=s.progress.questionBank.session;
  assert.equal(session.ids.length,10);
  const q=find(m.id,session.ids[0]);
  const before=bankAchievementEvidence(s,m);
  assert.equal(before.answered,0);
  assert.equal(answerBankQuestion(s,q.id,q.answer),true);
  assert.equal(bankAchievementEvidence(s,m).answered,1);
  assert.equal(bankAchievementEvidence(s,m).correct,1);
  assert.equal(session.answers[q.id],q.answer);
  assert.equal(closeBankSession(s),true);
  assert.ok(validateStateForSaving(s));
});

test('Simulado: seleção equilibrada, respostas corretas e histórico finalizado',()=>{
  const s=createInitialState();
  const start=startSimulado(s,'todas',20);
  assert.equal(start.ok,true,start.message);
  const session=s.progress.simulados.active;
  assert.equal(new Set(session.ids).size,20);
  const bank=new Map(MODULES.flatMap(m=>questionsForModule(m.id)).map(q=>[q.id,q]));
  for(const id of session.ids)assert.equal(answerSimulado(s,id,bank.get(id).answer),true);
  assert.equal(finishSimulado(s),true);
  assert.equal(s.progress.simulados.history.at(-1).correct,20);
  assert.equal(s.progress.simulados.history.at(-1).score,100);
  assert.equal(closeSimulado(s),true);
  assert.ok(validateStateForSaving(s));
});

test('Revisão: resposta, autoavaliação e agendamento por questão',()=>{
  const s=createInitialState(),q=questionsForModule(MODULES[0].id)[0];
  assert.equal(beginReview(s,q.id),true);
  assert.equal(answerReview(s,q.id,q.answer),true);
  assert.equal(assessReview(s,q.id,'seguro'),true);
  assert.ok(s.progress.reviewSchedule[q.id]?.dueAt);
  assert.ok(validateStateForSaving(s));
});

test('Google Drive: envelope local válido e comparação de progresso, sem conexão de rede',()=>{
  const s=createInitialState();s.progress.modules['POR-01']={started:true};
  const {payload,serialized}=buildDriveBackup(JSON.stringify(s));
  assert.equal(payload.state.appId,'pt-estudo');
  assert.equal(JSON.parse(serialized).format,'pt-estudo-progress-backup');
  assert.equal(samePedagogicalProgress(payload,JSON.parse(serialized)),true);
  assert.ok(validateStateForSaving(s));
});
