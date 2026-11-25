/** ADM-ESTUDO — Fase 22-A / Lote 6: interface Minha Jornada.
 * Somente leitura: eventos são registrados pelo controlador após ações válidas.
 */
import { MODULES } from '../data/modules.js';
import { moduleAchievement } from './module-achievement.js';
import { isModuleCompleted } from '../core/progress.js';
import {
  journeySummary, journeyAchievements, getJourneyGoal,
  JOURNEY_TITLES, localDateKey, dateFromKey
} from '../core/study-journey.js';

const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const number=x=>Number(x).toLocaleString('pt-BR');
const weekNames=['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'];
const fmtDate=x=>{
  const parsed=dateFromKey(x);
  return parsed?parsed.toLocaleDateString('pt-BR'):'—';
};
let displayedMonth=null; // apenas navegação visual; não integra o progresso

function weekDaysMarkup(s) {
  return s.currentWeek.map((day,i)=>{
    const record=s.days.get(day),active=!!record?.active,partial=!!record&&!active;
    const today=day===s.today;
    return `<div class="journey-weekday ${active?'is-active':''} ${partial?'is-partial':''} ${today?'is-today':''}" title="${esc(`${fmtDate(day)}: ${record?.events||0} atividades válidas`)}">
      <span class="journey-weekday-name">${weekNames[i]}</span>
      <span class="journey-weekday-mark" aria-label="${active?'Dia ativo':partial?'Atividade parcial':'Sem atividade registrada'}">${active?'✓':partial?'·':''}</span>
    </div>`;
  }).join('');
}
function summaryTile(name,value,hint,icon){
  return `<article class="journey-stat"><div class="journey-stat-icon" aria-hidden="true">${icon}</div>
  <div><p class="journey-stat-name">${esc(name)}</p><strong class="journey-stat-value">${esc(value)}</strong><small>${esc(hint)}</small></div></article>`;
}
function monthGrid(s,month){
  const first=new Date(month.getFullYear(),month.getMonth(),1,12);
  const year=first.getFullYear(),monthNum=first.getMonth();
  const offset=(first.getDay()+6)%7;
  const totalDays=new Date(year,monthNum+1,0).getDate();
  const cells=[];
  for(let i=0;i<offset;i++)cells.push('<span class="journey-day empty" aria-hidden="true"></span>');
  for(let day=1;day<=totalDays;day++){
    const date=new Date(year,monthNum,day,12),key=localDateKey(date);
    const info=s.days.get(key),active=!!info?.active,partial=!!info&&!active;
    const future=key>s.today;
    const types=info?Object.entries(JOURNEY_TITLES)
      .filter(([kind])=>info[kind]>0)
      .map(([kind,label])=>`${label}: ${info[kind]}`).join(' · '):'Sem atividades registradas';
    const description=`${fmtDate(key)} — ${types}${active?' — dia de estudo ativo':partial?' — atividade parcial':''}`;
    cells.push(`<div class="journey-day ${active?'is-active':''} ${partial?'is-partial':''} ${future?'is-future':''} ${key===s.today?'is-today':''}"
      title="${esc(description)}" aria-label="${esc(description)}"><span>${day}</span>${info?'<i aria-hidden="true"></i>':''}</div>`);
  }
  return `<div class="journey-month-weeknames">${weekNames.map(x=>`<span>${x}</span>`).join('')}</div>
    <div class="journey-month-grid">${cells.join('')}</div>`;
}
function historyMarkup(events) {
  const recent=[...events].sort((a,b)=>Date.parse(b.at)-Date.parse(a.at)).slice(0,12);
  if(!recent.length)return '<p class="journey-muted">Suas próximas atividades aparecerão aqui, depois de serem concluídas e salvas.</p>';
  return `<ul class="journey-history">${recent.map(e=>{
    const timestamp=Number.isFinite(Date.parse(e.at))?new Date(e.at).toLocaleString('pt-BR',{dateStyle:'short',timeStyle:'short'}):fmtDate(e.day);
    const source=e.source==='banco'?' · Banco de Questões':e.source==='exercicios'?' · Exercícios':'';
    return `<li><span><strong>${esc(JOURNEY_TITLES[e.type])}</strong><small>${esc(timestamp)}${source}</small></span><span class="journey-xp-plus">+${e.xp} XP</span></li>`;
  }).join('')}</ul>`;
}
function achievementsMarkup(state,s){
  const completedModules=MODULES.reduce((n,m)=>n+(isModuleCompleted(moduleAchievement(state,m),75)?1:0),0);
  const earned=journeyAchievements(state,s,completedModules);
  return `<div class="journey-achievements">${earned.map(x=>`<article class="journey-achievement ${x.unlocked?'is-unlocked':'is-locked'}">
    <span class="journey-achievement-icon" aria-hidden="true">${x.icon}</span>
    <strong>${esc(x.name)}</strong><small>${esc(x.description)}</small>
    <span class="journey-achievement-state">${x.unlocked?'Conquistada':'A conquistar'}</span>
  </article>`).join('')}</div>`;
}
function setMonth(delta, root,state){
  if(!displayedMonth)displayedMonth=new Date(new Date().getFullYear(),new Date().getMonth(),1,12);
  const next=new Date(displayedMonth.getFullYear(),displayedMonth.getMonth()+delta,1,12);
  const present=new Date(),current=new Date(present.getFullYear(),present.getMonth(),1,12);
  if(next>current)return;
  displayedMonth=next;
  renderJourneyPage(root,state);
}

export function renderJourneyPage(main,state){
  if(!displayedMonth)displayedMonth=new Date(new Date().getFullYear(),new Date().getMonth(),1,12);
  const s=journeySummary(state),goal=getJourneyGoal(state);
  const monthLabel=displayedMonth.toLocaleDateString('pt-BR',{month:'long',year:'numeric'});
  const thisMonth=new Date(new Date().getFullYear(),new Date().getMonth(),1,12);
  const canNext=displayedMonth<thisMonth;
  const weekPercent=Math.min(100,Math.round(s.weekDone/goal*100));
  const levelPercent=s.level.progress;
  main.innerHTML=`<section class="journey-page" aria-labelledby="journey-heading">
    <header class="journey-hero">
      <div><span class="journey-kicker">SUA CONSTRUÇÃO DIÁRIA</span>
      <h1 id="journey-heading">Minha Jornada <span aria-hidden="true">✨</span></h1>
      <p>Estudar com regularidade é tão importante quanto acompanhar os resultados. Aqui, cada atividade significativa tem seu lugar.</p></div>
      <div class="journey-hero-streak"><span aria-hidden="true">🔥</span><strong>${s.streak}</strong><small>${s.streak===1?'dia de sequência':'dias de sequência'}</small></div>
    </header>
    <div class="journey-summary">
      ${summaryTile('XP acumulados',number(s.totalXP),'Pontos motivacionais','⚡')}
      ${summaryTile('Meta semanal',`${s.weekDone}/${goal}`,s.weekDone>=goal?'Meta cumprida!':'Dias ativos nesta semana','📅')}
      ${summaryTile('Dias de estudo',number(s.activeDays),'Desde a instalação da Jornada','✅')}
      ${summaryTile('Maior sequência',`${s.bestStreak} dias`,'Sem penalidade por descanso','🌱')}
    </div>
    <div class="journey-two-columns">
      <section class="journey-panel" aria-label="Meta semanal">
        <div class="journey-panel-header"><div><span class="journey-section-kicker">01 · REGULARIDADE</span><h2>Minha meta semanal</h2></div><span class="journey-pill">${s.weekDone} de ${goal} dias</span></div>
        <div class="journey-goal-row"><label for="journey-goal">Estudar</label>
          <select id="journey-goal" data-journey-goal>${[3,4,5,7].map(n=>`<option value="${n}" ${n===goal?'selected':''}>${n} dias por semana</option>`).join('')}</select></div>
        <div class="journey-track" role="progressbar" aria-label="Meta semanal" aria-valuemin="0" aria-valuemax="${goal}" aria-valuenow="${Math.min(s.weekDone,goal)}"><span style="width:${weekPercent}%"></span></div>
        <div class="journey-weekdays">${weekDaysMarkup(s)}</div>
        <p class="journey-help">Um dia conta quando você conclui uma aula ou simulado, responde três questões/revisões ou avalia cinco cartões. Dias de descanso não reduzem seus pontos.</p>
      </section>
      <section class="journey-panel" aria-label="Nível de participação">
        <div class="journey-panel-header"><div><span class="journey-section-kicker">02 · PARTICIPAÇÃO</span><h2>Seu nível</h2></div><span class="journey-pill">Nível ${s.level.number}</span></div>
        <div class="journey-level-icon" aria-hidden="true">🌟</div>
        <strong class="journey-level-name">${esc(s.level.name)}</strong>
        <p class="journey-level-info">${s.level.next?`${number(s.totalXP)} de ${number(s.level.nextXP)} XP para ${esc(s.level.next)}.`:'Você alcançou o último marco de XP disponível.'}</p>
        <div class="journey-track journey-level-track" role="progressbar" aria-label="Progresso até próximo nível" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${levelPercent}"><span style="width:${levelPercent}%"></span></div>
        <p class="journey-help">O nível representa participação, não a nota ou o domínio da matéria.</p>
      </section>
    </div>
    <section class="journey-panel" aria-label="Calendário de estudos">
      <div class="journey-panel-header"><div><span class="journey-section-kicker">03 · HISTÓRICO</span><h2>Calendário de atividades</h2></div>
        <div class="journey-month-controls"><button type="button" class="btn" data-journey-month="-1" aria-label="Mês anterior">←</button>
        <strong>${esc(monthLabel)}</strong><button type="button" class="btn" data-journey-month="1" ${canNext?'':'disabled'} aria-label="Mês seguinte">→</button></div></div>
      ${monthGrid(s,displayedMonth)}
      <p class="journey-help"><span class="journey-legend active"></span> Dia ativo <span class="journey-legend partial"></span> Atividade parcial <span class="journey-legend empty"></span> Sem registro. Passe o cursor sobre os dias para ver detalhes.</p>
    </section>
    <section class="journey-panel" aria-label="Conquistas">
      <div class="journey-panel-header"><div><span class="journey-section-kicker">04 · MARCOS</span><h2>Minhas conquistas</h2></div><span class="journey-pill">${s.completedWeeks.length} semana(s) com meta cumprida</span></div>
      ${achievementsMarkup(state,s)}
      <p class="journey-help">Conquistas de aulas, questões e módulos podem reconhecer registros antigos comprovados. XP, dias e semanas contam somente eventos da Jornada.</p>
    </section>
    <section class="journey-panel" aria-label="Últimas atividades">
      <div class="journey-panel-header"><div><span class="journey-section-kicker">05 · ATIVIDADES REAIS</span><h2>Últimos registros</h2></div></div>
      ${historyMarkup(s.events)}
    </section>
    <p class="journey-disclaimer">A Jornada não altera o aproveitamento, os gabaritos ou as revisões. XP não é nota; a mesma questão, revisão ou flashcard só recebe XP uma vez por dia. Seus eventos fazem parte do backup JSON completo do progresso.</p>
  </section>`;
  main.querySelectorAll('[data-journey-month]').forEach(button=>{
    button.addEventListener('click',()=>setMonth(Number(button.dataset.journeyMonth),main,state));
  });
}

/** Inserção pontual depois da seção principal do Dashboard; não altera os 4 cards existentes. */
export function renderJourneyDashboardSummary(main,state){
  const anchor=main?.querySelector('#dashboard-pending');
  if(!anchor)return;
  const s=journeySummary(state);
  anchor.insertAdjacentHTML('beforebegin',`<section class="journey-dashboard-mini" aria-label="Resumo da Minha Jornada">
    <div class="journey-mini-icon" aria-hidden="true">✨</div>
    <div class="journey-mini-text"><strong>Minha Jornada</strong>
    <p>🔥 ${s.streak} dia(s) de sequência · 📅 ${s.weekDone}/${s.goal} dias nesta semana · ⚡ ${number(s.totalXP)} XP</p></div>
    <button type="button" class="btn btn-primary" data-nav="jornada">Ver minha jornada</button>
  </section>`);
}
