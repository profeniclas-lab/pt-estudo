/**
 * ADM-ESTUDO — Fase 22-A / Lote 6 — Minha Jornada.
 * XP e regularidade são motivacionais e NUNCA interferem no aproveitamento.
 * Eventos só são adicionados após ações pedagógicas bem-sucedidas pelo app.js.
 * Progresso antigo não é convertido em XP nem em dias de estudo inventados.
 * Compatível com o schema 3 e com a exportação integral do JSON existente.
 */

export const JOURNEY_GOALS = Object.freeze([3, 4, 5, 7]);
export const JOURNEY_XP = Object.freeze({
  lesson: 20, question: 5, review: 8,
  diagnostic: 3, flashcard: 2, simulado: 30
});
export const JOURNEY_TITLES = Object.freeze({
  lesson: 'Aula concluída', question: 'Questão respondida',
  review: 'Revisão avaliada', diagnostic: 'Diagnóstico respondido',
  flashcard: 'Flashcard avaliado', simulado: 'Simulado finalizado'
});
const LEVELS = [
  {min: 0, title: 'Iniciante'}, {min: 200, title: 'Explorador'},
  {min: 600, title: 'Estudante'}, {min: 1200, title: 'Persistente'},
  {min: 2000, title: 'Veterano'}
];
const dailyUnique = new Set(['question','review','flashcard']);
const obj = x => x !== null && typeof x === 'object' && !Array.isArray(x);

export function localDateKey(date = new Date()) {
  if (!(date instanceof Date) || !Number.isFinite(date.getTime())) return null;
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}
export function dateFromKey(key) {
  if (typeof key !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(key)) return null;
  const [y,m,d] = key.split('-').map(Number);
  const result = new Date(y, m-1, d, 12);
  return localDateKey(result) === key ? result : null;
}
export function mondayKey(day) {
  const d = day instanceof Date ? new Date(day) : dateFromKey(day);
  if (!d || !Number.isFinite(d.getTime())) return null;
  d.setHours(12,0,0,0);
  d.setDate(d.getDate() - (d.getDay() + 6) % 7);
  return localDateKey(d);
}
function shiftDay(key, count) {
  const date = dateFromKey(key);
  if (!date) return null;
  date.setDate(date.getDate() + count);
  return localDateKey(date);
}
function getEvents(state) {
  const events = state?.progress?.journey?.events;
  return Array.isArray(events) ? events.filter(x=>obj(x) &&
    typeof x.id==='string' && Object.hasOwn(JOURNEY_XP,x.type) &&
    dateFromKey(x.day) && Number.isFinite(x.xp) && x.xp>=0) : [];
}
function ensureJourney(state) {
  if (!obj(state?.progress)) return null;
  if (!Object.hasOwn(state.progress, 'journey')) {
    state.progress.journey = {version:1,events:[],goalHistory:[]};
  }
  const journey = state.progress.journey;
  if (!obj(journey) || !Array.isArray(journey.events)) return null;
  if (!Array.isArray(journey.goalHistory)) journey.goalHistory = [];
  return journey;
}

/** Cada ação fornece tipo e ID; limites impedem repetição de XP artificial.
 * Questões, flashcards e revisões: no máximo uma pontuação por ID e dia.
 * Aulas/diagnósticos: uma única pontuação por item, na instalação atual.
 * Simulados: uma pontuação por tentativa finalizada.
 */
export function recordJourneyEvent(state, action, now = new Date()) {
  if (!obj(action) || !Object.hasOwn(JOURNEY_XP, action.type) ||
      typeof action.itemId !== 'string' || !action.itemId.trim() ||
      action.itemId.length > 240) return false;
  const day = localDateKey(now);
  if (!day || !obj(state?.progress)) return false;
  const journey = ensureJourney(state);
  if (!journey) return false;
  const type = action.type;
  const id = `${type}:${dailyUnique.has(type) ? day+':' : ''}${action.itemId}`;
  if (journey.events.some(event => event?.id === id)) return false;
  journey.events.push({
    id, type, itemId: action.itemId, day,
    at: now.toISOString(), xp: JOURNEY_XP[type],
    source: typeof action.source==='string' ? action.source.slice(0,60) : ''
  });
  return true;
}

export function getJourneyGoal(state) {
  const value = Number(state?.preferences?.journeyWeeklyGoal);
  return JOURNEY_GOALS.includes(value) ? value : 4;
}
export function setJourneyGoal(state, goal, now = new Date()) {
  const next = Number(goal);
  if (!JOURNEY_GOALS.includes(next) || !obj(state?.preferences)) return false;
  const old = getJourneyGoal(state);
  if (old === next) return false;
  const week = mondayKey(now);
  if (!week) return false;
  const journey = ensureJourney(state);
  if (!journey) return false;
  state.preferences.journeyWeeklyGoal = next;
  journey.goalHistory = journey.goalHistory.filter(g=>g?.week!==week);
  journey.goalHistory.push({week,goal:next,updatedAt:now.toISOString()});
  journey.goalHistory.sort((a,b)=>String(a.week).localeCompare(String(b.week)));
  return true;
}
function goalForWeek(journey, week) {
  const historical = Array.isArray(journey?.goalHistory)
    ? journey.goalHistory.filter(g=>g?.week<=week && JOURNEY_GOALS.includes(g.goal)).sort((a,b)=>a.week.localeCompare(b.week))
    : [];
  return historical.length ? historical.at(-1).goal : 4;
}
function aggregateDays(events) {
  const map = new Map();
  for (const e of events) {
    const day = map.get(e.day) || {day:e.day,xp:0,events:0,lesson:0,question:0,review:0,diagnostic:0,flashcard:0,simulado:0};
    day.xp += e.xp; day.events++; day[e.type]++;
    map.set(e.day, day);
  }
  for (const d of map.values()) {
    // Um dia ativo exige uma atividade significativa, não um simples clique.
    d.active = d.lesson>=1 || d.simulado>=1 ||
      (d.question + d.review)>=3 || (d.flashcard + d.diagnostic)>=5;
  }
  return map;
}
function consecutiveDays(activeKeys, today) {
  let base = today;
  if (!activeKeys.has(base)) base = shiftDay(base,-1); // ainda há tempo para estudar hoje
  let streak=0;
  while (base && activeKeys.has(base)) {
    streak++;
    base = shiftDay(base,-1);
  }
  return streak;
}
function bestConsecutiveDays(activeKeys) {
  let best=0,sequence=0,previous=null;
  for (const key of [...activeKeys].sort()) {
    sequence = previous && shiftDay(previous,1)===key ? sequence+1 : 1;
    best=Math.max(best,sequence);previous=key;
  }
  return best;
}
function calculateLevel(xp) {
  let index=0;
  for(let i=0;i<LEVELS.length;i++) if(xp>=LEVELS[i].min)index=i;
  const current=LEVELS[index],next=LEVELS[index+1]||null;
  return {name:current.title,number:index+1,next:next?.title||null,
    nextXP:next?.min||null,
    progress:next?Math.max(0,Math.min(100,Math.round((xp-current.min)/(next.min-current.min)*100))):100};
}
export function journeySummary(state, now = new Date()) {
  const today=localDateKey(now),week=mondayKey(now);
  const events=getEvents(state),days=aggregateDays(events),activeKeys=new Set([...days.values()].filter(x=>x.active).map(x=>x.day));
  const totalXP=events.reduce((n,x)=>n+x.xp,0);
  const goal=getJourneyGoal(state);
  const currentWeek=[];
  for(let d=0;d<7;d++) currentWeek.push(shiftDay(week,d));
  const weekDone=currentWeek.filter(key=>activeKeys.has(key)).length;
  const weeks=new Map();
  for (const key of activeKeys) {
    const wk=mondayKey(key);
    weeks.set(wk,(weeks.get(wk)||0)+1);
  }
  const completedWeeks=[...weeks].filter(([wk,count])=>count>=goalForWeek(state?.progress?.journey,wk)).map(([wk])=>wk).sort();
  return {today,week,events,days,activeKeys,goal,weekDone,currentWeek,
    completedWeeks,streak:consecutiveDays(activeKeys,today),bestStreak:bestConsecutiveDays(activeKeys),
    activeDays:activeKeys.size,totalXP,level:calculateLevel(totalXP)};
}

export function journeyAchievements(state, summary = journeySummary(state), completedModules = 0) {
  const p=obj(state?.progress)?state.progress:{};
  const lessons=Object.values(obj(p.lessons)?p.lessons:{}).filter(x=>x?.completed===true).length;
  const questions=Object.keys(obj(p.questionHistory)?p.questionHistory:{}).length;
  const defs=[
    {id:'first-lesson',name:'Primeiros passos',description:'Concluir a primeira aula',icon:'📖',unlocked:lessons>=1},
    {id:'fifty-questions',name:'Em prática',description:'Responder 50 questões distintas',icon:'🎯',unlocked:questions>=50},
    {id:'three-weeks',name:'Constância',description:'Cumprir a meta em três semanas',icon:'📅',unlocked:summary.completedWeeks.length>=3},
    {id:'module-finished',name:'Módulo concluído',description:'Concluir um módulo conforme os critérios do app',icon:'🏅',unlocked:completedModules>=1},
    {id:'journey-200',name:'Explorador',description:'Acumular 200 XP de estudo',icon:'✨',unlocked:summary.totalXP>=200},
    {id:'study-days-10',name:'Dez dias ativos',description:'Registrar dez dias de estudo significativo',icon:'🌱',unlocked:summary.activeDays>=10}
  ];
  return defs;
}
