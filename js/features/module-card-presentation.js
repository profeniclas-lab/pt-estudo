/** F23/L04 — Dashboard: quatro etapas ponderadas e meta a partir de 75 pontos. */
const completedLessonStage = (lessons,module) => {
  const expected=Array.isArray(module?.subtopics)?module.subtopics.length:0;
  return expected>0 && lessons?.total===expected && lessons.completed===expected && lessons.rated===expected;
};
export function moduleCardPresentation(item) {
  const {module,achievement,diagnostic,lessons,exercises}=item;
  const diagnosticDone=diagnostic?.completed===true;
  const lessonsDone=completedLessonStage(lessons,module);
  const exercisesDone=exercises?.finished===true;
  const bankDone=Number(achievement?.bankStats?.total||0)>0 &&
    Number(achievement?.bankStats?.answered||0)>=Number(achievement?.bankStats?.total||0);
  const stagesDone=[diagnosticDone,lessonsDone,exercisesDone,bankDone].filter(Boolean).length;
  const points=Number.isFinite(achievement?.earnedWeightedPoints)?achievement.earnedWeightedPoints:0;
  const completed=item.completed===true;
  const next=completed ? 'Meta atingida — revise os pontos pendentes quando desejar' :
    !diagnosticDone?'Continuar diagnóstico':
    !lessonsDone?'Estudar e autoavaliar aulas':
    !exercisesDone?'Praticar exercícios':
    !bankDone?'Resolver questões no Banco de Questões':'Revisar dificuldades e melhorar os acertos';
  return {points,stagesDone,totalStages:4,completed,next};
}
export function displayModulePoints(points) {
  return `${Number.isFinite(points)?points.toLocaleString('pt-BR',{maximumFractionDigits:2}):'0'}%`;
}
