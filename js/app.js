import "./data/questions-f23-lote02.js"; // F23/L02: revisões aplicadas antes da montagem da interface.
import { loadState, saveState } from "./core/storage.js";
import { isSaveBlocked, reportSaveFailure } from "./core/save-failure-ui.js";
import { inspectStoredProgress, showStorageSafetyWarning } from "./core/storage-safety.js";
import { initBackupControls } from "./core/backup-controls.js";
import { refreshUnifiedReviewQueue } from "./core/spaced-review.js";
import { setupNavigation, setActiveNavigation, getRouteTitle, normalizeRoute } from "./core/navigation.js";
import { renderDashboard } from "./features/dashboard.js";
import { refreshAchievementCopy } from "./core/achievement-copy.js";
import { recordQuestionAttempt, assessLatestQuestionAttempt } from "./core/question-attempts.js";
import { MODULES } from "./data/modules.js";
import { moduleAchievement } from "./features/module-achievement.js";
import { recordJourneyEvent, setJourneyGoal } from "./core/study-journey.js";
import { renderJourneyPage, renderJourneyDashboardSummary } from "./features/jornada.js";
import { renderAbout } from "./features/about.js";
import { renderSettings } from "./features/settings.js";
import { renderModules } from "./features/modules.js";
import { renderModuleDetail } from "./features/module-detail.js";
import { renderDiagnostic, renderDiagnosticEdit, saveDiagnosticAnswer, resetDiagnostic } from "./features/diagnostic.js";
import { renderLesson, saveLessonProgress } from "./features/lessons.js";
import { renderExercises, createExerciseSession, answerExercise, assessExercise, nextExercise } from "./features/exercises.js";
import { validateCatalog } from "./data/modules.js";
import { renderStatistics } from "./features/estatisticas.js";
import { renderFlashcards, changeFlashFilter, startFlashStudy, flipFlashStudy, rateFlashStudy, restartFlashStudy } from "./features/flashcards.js";
import { renderQuestionBank, updateBankFilter, resetBankFilters, startBankSession, answerBankQuestion, nextBankQuestion, closeBankSession } from "./features/banco-questoes.js";
import { renderSimulados, startSimulado, answerSimulado, moveSimulado, finishSimulado, closeSimulado, cancelSimulado } from "./features/simulados.js";
import { renderReviewList, renderReviewQuestion, beginReview, answerReview, assessReview, removeError } from "./features/review-errors.js";

const storageSafety = inspectStoredProgress();
const state = loadState();
if (storageSafety.ok) refreshUnifiedReviewQueue(state);
else showStorageSafetyWarning(storageSafety);
const mainElement = document.getElementById("main");
const catalogErrors = validateCatalog();
if (catalogErrors.length) console.error("[ADM-ESTUDO] Catálogo inválido:", catalogErrors);
let activeView = 'module';
let lessonSubtopicId = null;
let lessonAnswerShown = false;
let editSubtopicId = null;
let cardFlipped = false;
let reviewQuestionId = null;

/** Leitura compatível com respostas antigas do Banco, sem gravar novos registros. */
function stateForProgressPanels(state) {
  const extra={};
  for(const m of MODULES) {
    if(!state.progress?.modules?.[m.id] && moduleAchievement(state,m).bankStats.answered>0)
      extra[m.id]={started:true};
  }
  if(!Object.keys(extra).length)return state;
  return {...state,progress:{...state.progress,modules:{...state.progress.modules,...extra}}};
}

function renderCurrentPage() {
  if (!mainElement) return;
  // Converte antigas rotas sem página e recupera rotas desconhecidas sem afetar o progresso.
  state.navigation.currentRoute = normalizeRoute(state.navigation.currentRoute);
  document.title = `ADM-ESTUDO v2.0 — ${getRouteTitle(state.navigation.currentRoute)}`;
  setActiveNavigation(state.navigation.currentRoute);
  if (catalogErrors.length) {
    mainElement.textContent = "Erro de validação no catálogo. Consulte o console do navegador.";
    return;
  }
  switch (state.navigation.currentRoute) {
    case "dashboard": renderDashboard(mainElement, stateForProgressPanels(state)); renderJourneyDashboardSummary(mainElement, state); break;
    case "jornada": renderJourneyPage(mainElement, state); break;
    case "configuracoes": renderSettings(mainElement); break;
    case "sobre": renderAbout(mainElement); break;
    case "estatisticas": renderStatistics(mainElement,stateForProgressPanels(state)); break;
    case "flashcards": renderFlashcards(mainElement,state); break;
    case "banco-questoes": renderQuestionBank(mainElement,state); break;
    case "simulados": renderSimulados(mainElement,state); break;
    case "revisao":
    case "erros":
      if(reviewQuestionId)renderReviewQuestion(mainElement,state,state.navigation.currentRoute,reviewQuestionId);
      else renderReviewList(mainElement,state,state.navigation.currentRoute);
      break;
    case "modulos":
      if (state.navigation.selectedModuleId) {
        if (activeView === 'exercises') renderExercises(mainElement,state.navigation.selectedModuleId,state);
        else if (activeView === 'lesson') renderLesson(mainElement, state.navigation.selectedModuleId, lessonSubtopicId, state, {showAnswer:lessonAnswerShown});
        else if (activeView === 'diagnostic') renderDiagnostic(mainElement, state.navigation.selectedModuleId, state, { editSubtopicId, flipped: cardFlipped });
        else renderModuleDetail(mainElement, state.navigation.selectedModuleId, state);
      } else renderModules(mainElement,state);
      break;
    default:
      mainElement.innerHTML = `<section><h1 class="page-title">${getRouteTitle(state.navigation.currentRoute)}</h1><p class="page-subtitle">Esta área será implementada nas próximas etapas.</p><div class="notice">A funcionalidade ainda não foi ativada na nova arquitetura.</div></section>`;
  }
  refreshAchievementCopy(mainElement, state.navigation.currentRoute);
}
function commitAndRender(journeyActivity = null) {
  if (isSaveBlocked()) return;
  if (!storageSafety.ok) {
    reportSaveFailure({message:storageSafety.message || 'Progresso protegido; gravação bloqueada.'}, state);
    return;
  }
  // Evento inserido no mesmo estado pedagógico antes da gravação única.
  // Cada ação tem ID estável; reabrir páginas ou clicar sem concluir não rende XP.
  if (journeyActivity) recordJourneyEvent(state, journeyActivity);
  refreshUnifiedReviewQueue(state);
  const result = saveState(state);
  if (!result.ok) { reportSaveFailure(result,state); return; }
  renderCurrentPage();
}
function resetCardView() { editSubtopicId = null; cardFlipped = false; }
function navigateTo(route) {
  state.navigation.currentRoute = normalizeRoute(route);
  activeView = 'module'; lessonSubtopicId=null;lessonAnswerShown=false; resetCardView();reviewQuestionId=null;
  if (state.navigation.currentRoute === 'modulos') state.navigation.selectedModuleId = null;
  commitAndRender();
}

document.addEventListener('change', event => {
  if(state.navigation.currentRoute!=='jornada')return;
  const goal = event.target.closest('[data-journey-goal]');
  if (goal && setJourneyGoal(state, goal.value)) commitAndRender();
});
document.addEventListener('change', event => {
  if(state.navigation.currentRoute!=='banco-questoes')return;
  const select=event.target.closest('[data-bank-filter]');
  if(select&&updateBankFilter(state,select.dataset.bankFilter,select.value))commitAndRender();
});
document.addEventListener('change', event => {
  if(state.navigation.currentRoute!=='flashcards')return;
  const control=event.target.closest('[data-flash-filter]');
  if(control&&changeFlashFilter(state,control.dataset.flashFilter,control.value))commitAndRender();
});
document.addEventListener('click', event => {
  if(state.navigation.currentRoute==='estatisticas'){
    const btn=event.target.closest('[data-stats-module]');
    if(btn){state.navigation.selectedModuleId=btn.dataset.statsModule;state.navigation.currentRoute='modulos';activeView='module';commitAndRender();return;}
  }
  if(state.navigation.currentRoute==='flashcards'){
    if(event.target.closest('[data-flash-start]')){if(startFlashStudy(state))commitAndRender();return;}
    if(event.target.closest('[data-flash-flip]')){if(flipFlashStudy(state))commitAndRender();return;}
    const rating=event.target.closest('[data-flash-rate]');
    if(rating){const sess=state.progress?.flashcardStudy?.session;const id=sess?.ids?.[sess.cursor];if(rateFlashStudy(state,rating.dataset.flashRate))commitAndRender(id?{type:'flashcard',itemId:id}:null);return;}
    // Fase 22-A / Lote 9: opção de encerrar a seleção e voltar aos filtros.
    // Preserva todos os cartões já avaliados e seus agendamentos.
    if(event.target.closest('[data-flash-close]')){
      if(window.confirm('Encerrar esta seleção e voltar aos filtros de Flashcards?\n\nAs avaliações já registradas permanecerão salvas. Os cartões ainda não avaliados poderão ser selecionados novamente.')){
        if(restartFlashStudy(state)) commitAndRender();
        else renderCurrentPage();
      }
      return;
    }
    if(event.target.closest('[data-flash-restart]')){if(window.confirm('Recomeçar a seleção de cartões? As avaliações já salvas serão mantidas.')&&restartFlashStudy(state))commitAndRender();return;}
  }
  if(state.navigation.currentRoute==='banco-questoes'){
    const quick=event.target.closest('[data-bank-quick]');
    if(quick){
      if(updateBankFilter(state,quick.dataset.bankQuick,quick.dataset.bankValue)){
        const key=quick.dataset.bankQuick, value=quick.dataset.bankValue;
        commitAndRender();
        mainElement?.querySelectorAll('[data-bank-quick]').forEach(btn=>{
          if(btn.dataset.bankQuick===key&&btn.dataset.bankValue===value)btn.focus({preventScroll:true});
        });
      }
      return;
    }
    if(event.target.closest('[data-bank-reset]')){
      if(resetBankFilters(state))commitAndRender();
      return;
    }
    const action=event.target.closest('[data-action]')?.dataset.action;
    if(action==='bank-start'){if(startBankSession(state))commitAndRender();return;}
    if(action==='bank-close'){const session=state.progress?.questionBank?.session;const finished=session?.ids?.length>0&&Object.keys(session.answers||{}).length===session.ids.length;if((finished||window.confirm('Encerrar esta sessão? As respostas já registradas permanecerão no histórico.'))&&closeBankSession(state))commitAndRender();return;}
    if(action==='bank-next'){if(nextBankQuestion(state))commitAndRender();return;}
    const choice=event.target.closest('[data-bank-choice]');
    if(choice){const session=state.progress?.questionBank?.session;const id=session?.ids?.[session.cursor];const answer=Number(choice.dataset.bankChoice);if(id&&answerBankQuestion(state,id,answer)){recordQuestionAttempt(state,id,answer,'banco');commitAndRender({type:'question',itemId:id,source:'banco'});}return;}
  }
  if(state.navigation.currentRoute==='simulados'){
    const start=event.target.closest('[data-sim-start]');
    if(start){const area=document.getElementById('sim-area')?.value||'todas';const count=document.getElementById('sim-count')?.value||'20';const result=startSimulado(state,area,count);if(result.ok)commitAndRender();else window.alert(result.message);return;}
    const choice=event.target.closest('[data-sim-choice]');
    if(choice){const session=state.progress?.simulados?.active;const id=session?.ids?.[session.cursor];if(id&&answerSimulado(state,id,Number(choice.dataset.simChoice)))commitAndRender();return;}
    const move=event.target.closest('[data-sim-move]');
    if(move){if(moveSimulado(state,Number(move.dataset.simMove)))commitAndRender();return;}
    if(event.target.closest('[data-sim-finish]')){
      const sim=state.progress?.simulados?.active,simId=sim?.id;
      if(finishSimulado(state)){
        // Apenas simulados finalizados entram no histórico detalhado; não alteram o último resultado geral.
        for (const [qid,answer] of Object.entries(sim.answers||{})) recordQuestionAttempt(state,qid,answer,'simulado',{simulationId:simId,at:sim.finishedAt});
        commitAndRender(simId?{type:'simulado',itemId:simId}:null);
      }
      return;
    }
    if(event.target.closest('[data-sim-close]')){if(closeSimulado(state))commitAndRender();return;}
    if(event.target.closest('[data-sim-cancel]')){if(window.confirm('Cancelar este simulado? As respostas desta tentativa serão descartadas.')&&cancelSimulado(state))commitAndRender();return;}
  }
  if(state.navigation.currentRoute==='revisao'||state.navigation.currentRoute==='erros'){
    const open=event.target.closest('[data-review-open]');
    if(open){if(beginReview(state,open.dataset.reviewOpen)){reviewQuestionId=open.dataset.reviewOpen;commitAndRender();}return;}
    const back=event.target.closest('[data-review-back]');
    if(back){reviewQuestionId=null;renderCurrentPage();return;}
    const choice=event.target.closest('[data-review-choice]');
    if(choice&&reviewQuestionId){if(answerReview(state,reviewQuestionId,Number(choice.dataset.reviewChoice)))commitAndRender();return;}
    const assess=event.target.closest('[data-review-assess]');
    if(assess&&reviewQuestionId){if(assessReview(state,reviewQuestionId,assess.dataset.reviewAssess)){const answer=state.progress?.questionHistory?.[reviewQuestionId]?.lastAnswer;recordQuestionAttempt(state,reviewQuestionId,answer,'revisao',{assessment:assess.dataset.reviewAssess});commitAndRender({type:'review',itemId:reviewQuestionId});}return;}
    const remove=event.target.closest('[data-review-remove]');
    if(remove){if(window.confirm('Remover esta questão do banco de erros? O histórico de respostas será mantido.')&&removeError(state,remove.dataset.reviewRemove))commitAndRender();return;}
  }
  const moduleButton = event.target.closest('[data-module-id]');
  if (moduleButton) {
    state.navigation.currentRoute = 'modulos';
    state.navigation.selectedModuleId = moduleButton.dataset.moduleId;
    activeView = 'module'; lessonSubtopicId=null;lessonAnswerShown=false; resetCardView();
    commitAndRender(); return;
  }
  const openLesson=event.target.closest('[data-lesson-open]');
  if(openLesson && state.navigation.selectedModuleId){lessonSubtopicId=openLesson.dataset.lessonOpen;lessonAnswerShown=false;activeView='lesson';renderCurrentPage();return;}
  const rating=event.target.closest('[data-lesson-rating]');
  if(rating && activeView==='lesson' && lessonSubtopicId){if(saveLessonProgress(state,lessonSubtopicId,'rating',rating.dataset.lessonRating))commitAndRender();return;}
  const exerciseChoice=event.target.closest('[data-exercise-choice]');
  if(exerciseChoice && activeView==='exercises'){
    const session=state.progress.exercises?.[state.navigation.selectedModuleId];
    const id=session?.ids?.[session.cursor];
    // O módulo de exercícios renova questionHistory[id]; preserva a marca de
    // estudo do Banco quando a mesma questão for respondida nos dois lugares.
    const oldRecord=id?state.progress?.questionHistory?.[id]:null;
    const bankAttempt=oldRecord?.bankAttempt;
    const attempts=Array.isArray(oldRecord?.attempts)?oldRecord.attempts:null;
    const answer=Number(exerciseChoice.dataset.exerciseChoice);
    if(id&&answerExercise(state,state.navigation.selectedModuleId,id,answer)){
      const current=state.progress.questionHistory[id];
      if(bankAttempt) current.bankAttempt=bankAttempt;
      // Exercícios substituem o registro original, por isso restauramos os eventos anteriores.
      if(attempts) current.attempts=attempts;
      recordQuestionAttempt(state,id,answer,'exercicios');
      commitAndRender({type:'question',itemId:id,source:'exercicios'});
    }
    return;
  }
  const assess=event.target.closest('[data-exercise-assess]');
  if(assess && activeView==='exercises'){const mid=state.navigation.selectedModuleId;const session=state.progress.exercises?.[mid];const id=session?.ids?.[session.cursor];if(id&&assessExercise(state,mid,id,assess.dataset.exerciseAssess)){assessLatestQuestionAttempt(state,id,'exercicios',assess.dataset.exerciseAssess);commitAndRender();}return;}
  const action = event.target.closest('[data-action]')?.dataset.action;
  if(action==='exercise-open'){activeView='exercises';renderCurrentPage();return;}
  if(action==='exercise-back'){activeView='module';renderCurrentPage();return;}
  if(action==='exercise-start'||action==='exercise-restart'){if(action==='exercise-restart'&&!window.confirm('Iniciar outra tentativa? A tentativa atual será substituída.'))return;if(createExerciseSession(state,state.navigation.selectedModuleId))commitAndRender();return;}
  if(action==='exercise-next'){if(nextExercise(state,state.navigation.selectedModuleId))commitAndRender();return;}
  if(action==='lesson-back'){activeView='module';lessonSubtopicId=null;lessonAnswerShown=false;renderCurrentPage();return;}
  if(action==='lesson-toggle-answer' && activeView==='lesson'){lessonAnswerShown=!lessonAnswerShown;renderCurrentPage();return;}
  if(action==='lesson-complete' && activeView==='lesson' && lessonSubtopicId){const already=state.progress?.lessons?.[lessonSubtopicId]?.completed===true;if(saveLessonProgress(state,lessonSubtopicId,'complete'))commitAndRender(!already?{type:'lesson',itemId:lessonSubtopicId}:null);return;}
  if (action === 'modules-back') {
    state.navigation.selectedModuleId = null; activeView = 'module'; lessonSubtopicId=null;lessonAnswerShown=false; resetCardView(); commitAndRender(); return;
  }
  if (action === 'diagnostic-open') {
    activeView = 'diagnostic'; resetCardView(); renderCurrentPage(); return;
  }
  if (action === 'diagnostic-back') {
    activeView = 'module'; lessonSubtopicId=null;lessonAnswerShown=false; resetCardView(); renderCurrentPage(); return;
  }
  if (action === 'diag-flip' && activeView === 'diagnostic') { cardFlipped = !cardFlipped; renderCurrentPage(); return; }
  const choiceButton = event.target.closest('[data-diag-choice]');
  if (choiceButton && state.navigation.selectedModuleId && activeView === 'diagnostic') {
    const moduleId=state.navigation.selectedModuleId;
    const topicId=choiceButton.dataset.diagSubtopic;
    const prior=state.progress?.diagnostics?.[moduleId]?.answers;
    const first=!!topicId && !Object.hasOwn(prior||{},topicId);
    if (cardFlipped && saveDiagnosticAnswer(state, moduleId, topicId, choiceButton.dataset.diagChoice)) { resetCardView(); commitAndRender(first?{type:'diagnostic',itemId:moduleId+':'+topicId}:null); }
    return;
  }
  const editButton = event.target.closest('[data-diag-edit]');
  if (editButton && state.navigation.selectedModuleId && activeView === 'diagnostic') {
    editSubtopicId = editButton.dataset.diagEdit; cardFlipped = false; renderDiagnosticEdit(mainElement, state.navigation.selectedModuleId, editSubtopicId, state); return;
  }
  if (action === 'diagnostic-reset' && activeView === 'diagnostic' && state.navigation.selectedModuleId) {
    if (window.confirm('Deseja apagar as respostas deste diagnóstico e começar novamente?')) {
      resetDiagnostic(state, state.navigation.selectedModuleId); resetCardView(); commitAndRender();
    }
  }
});
setupNavigation({ onNavigate: navigateTo });
initBackupControls();
renderCurrentPage();
console.info('[ADM-ESTUDO] Aplicação v2.0: navegação, flashcards, Jornada e backup em Configurações disponíveis.');
