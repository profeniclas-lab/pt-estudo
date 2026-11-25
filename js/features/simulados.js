import { MODULES, AREAS } from '../data/modules.js';
import { questionsForModule } from '../data/questions.js';
import { recordSimuladoMistakes, renderSimuladoHistoryComparison } from '../core/simulado-evolution.js';
import { renderSimuladoCorrection } from '../core/simulado-correction.js';
import { renderSimuladoNavigation } from '../core/simulado-navigation.js';
import { simulationScope, simulationScopeLabel } from '../core/simulado-config.js';
import { selectBalancedQuestions, balancedSelectionSummary } from '../core/simulado-balance.js';

const esc = x => String(x ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const shuffle = list => {const a=[...list];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const valid = q => q && typeof q.id==='string' && Array.isArray(q.options) && q.options.length>=2 && Number.isInteger(q.answer) && q.answer>=0 && q.answer<q.options.length;
function bank(){const out=[];const ids=new Set();for(const m of MODULES){for(const q of questionsForModule(m.id)||[]){if(!valid(q)||ids.has(q.id))continue;ids.add(q.id);out.push({...q,moduleId:m.id,area:m.area});}}return out;}
const byId=()=>new Map(bank().map(q=>[q.id,q]));
function ensure(state){state.progress??={};state.progress.simulados??={history:[],active:null};return state.progress.simulados;}
const status = sim => sim?.finishedAt?'finalizado':sim?'em andamento':'não iniciado';
export function renderSimulados(main,state){
 const data=ensure(state),active=data.active,all=bank(),areas=Object.entries(AREAS).map(([id,name])=>({id,name,count:all.filter(q=>q.area===id).length}));
 if(active){renderAttempt(main,state,active);return;}
 const history=(data.history||[]).slice(-8).reverse();
 main.innerHTML=`<section class="module-detail"><h1 class="page-title">Simulados</h1><p class="page-subtitle">Treine com questões autorais do banco de aprendizagem. Esta etapa não equivale a uma prova oficial.</p>
 <p><strong>${all.length}</strong> questões válidas e distintas disponíveis no banco atual.</p>
 <label for="sim-area">Área</label><select id="sim-area" class="btn" style="max-width:100%;margin:8px 0 16px"><option value="todas">Todas as áreas (${all.length})</option>${areas.map(a=>`<option value="${esc(a.id)}">${esc(a.name)} (${a.count})</option>`).join('')}<optgroup label="Módulos">${MODULES.map(m=>`<option value="modulo:${esc(m.id)}">${esc(m.title||m.name||m.nome||m.id)} (${all.filter(q=>q.moduleId===m.id).length})</option>`).join('')}</optgroup></select>
 <label for="sim-count">Quantidade de questões</label><select id="sim-count" class="btn" style="margin:8px 0 16px"><option value="5">5</option><option value="10">10</option><option value="15">15</option><option value="20" selected>20</option><option value="30">30</option><option value="40">40</option></select>
 <p>Se houver menos questões do que o solicitado, o aplicativo avisará e não iniciará o simulado.</p>
 <button class="btn btn-primary" data-sim-start="1">Gerar simulado</button>
 ${renderSimuladoHistoryComparison(data.history)}<h2 class="section-title">Últimos resultados</h2>${history.length?`<ol>${history.map(x=>`<li>${esc(simulationScopeLabel(x.area,AREAS,MODULES))} — ${x.correct}/${x.total} (${x.score}%) — ${new Date(x.finishedAt).toLocaleDateString('pt-BR')}</li>`).join('')}</ol>`:'<p>Nenhum simulado finalizado ainda.</p>'}</section>`;
}
export function startSimulado(state,area,count){
 const data=ensure(state),size=Number(count);if(data.active||!Number.isInteger(size)||size<1||size>40)return {ok:false,message:'Quantidade inválida ou já existe um simulado em andamento.'};
 const pool=simulationScope(bank(),area);
 if(pool.length<size)return {ok:false,message:`Existem somente ${pool.length} questões válidas para esta seleção. Escolha uma quantidade menor ou outra área.`};
 const selected=selectBalancedQuestions(pool,size);
 const distribution=balancedSelectionSummary(selected);
 data.active={distribution,id:'SIM-'+Date.now(),area,ids:selected.map(q=>q.id),orders:Object.fromEntries(selected.map(q=>[q.id,q.type==='ce'?q.options.map((_,i)=>i):shuffle(q.options.map((_,i)=>i))])),answers:{},cursor:0,startedAt:new Date().toISOString(),finishedAt:null};
 return {ok:true};
}
export function answerSimulado(state,qid,choice){const s=ensure(state).active,q=byId().get(qid);if(!s||s.finishedAt||!s.ids.includes(qid)||!valid(q)||Number.isInteger(s.answers[qid])||!Number.isInteger(choice)||choice<0||choice>=q.options.length)return false;s.answers[qid]=choice;return true;}
export function moveSimulado(state,delta){const s=ensure(state).active;if(!s||s.finishedAt)return false;s.cursor=Math.max(0,Math.min(s.ids.length-1,s.cursor+delta));return true;}
export function finishSimulado(state){const data=ensure(state),s=data.active;if(!s||s.finishedAt||s.ids.some(id=>!Number.isInteger(s.answers[id])))return false;const lookup=byId();const correct=s.ids.filter(id=>lookup.get(id)?.answer===s.answers[id]).length;s.finishedAt=new Date().toISOString();s.correct=correct;s.score=Math.round(correct/s.ids.length*100);data.history??=[];data.history.push({id:s.id,area:s.area,total:s.ids.length,correct,score:s.score,finishedAt:s.finishedAt});data.history=data.history.slice(-30);recordSimuladoMistakes(state,s,lookup);return true;}
export function closeSimulado(state){const data=ensure(state);if(!data.active?.finishedAt)return false;data.active=null;return true;}
export function cancelSimulado(state){const data=ensure(state);if(!data.active||data.active.finishedAt)return false;data.active=null;return true;}
function renderAttempt(main,state,s){
 const lookup=byId(),q=lookup.get(s.ids[s.cursor]),finished=!!s.finishedAt;
 if(!q){main.innerHTML='<section class="notice">Uma questão do simulado não está mais disponível no banco atual. Atualize o banco antes de continuar.</section>';return;}
 const answered=Object.keys(s.answers).length;
 const order=s.orders[q.id]||q.options.map((_,i)=>i);
 const question=(item,i)=>{const selected=s.answers[item.id],ord=s.orders[item.id]||item.options.map((_,j)=>j);return `<article class="lesson-panel" style="margin:14px 0"><h3>${i+1}. ${esc(item.stem)}</h3><p><strong>${esc(item.subtopicId||item.moduleId)}</strong></p>${ord.map((idx,j)=>`<p style="margin:7px 0">${item.type==='ce'?'':abc[j]+') '}${esc(item.options[idx])}${idx===item.answer?' <strong>✓ Correta</strong>':''}${idx===selected?' — Sua resposta':''}</p>`).join('')}<p><strong>Fundamento:</strong> ${esc(item.explanation)}</p><ol>${ord.map(idx=>`<li>${esc(item.optionComments?.[idx]||'Consulte o fundamento.')}</li>`).join('')}</ol><p><strong>Conceito:</strong> ${esc(item.concept)}</p><p><strong>Pegadinha:</strong> ${esc(item.trap)}</p><p><strong>Exemplo adicional:</strong> ${esc(item.newExample)}</p></article>`;};
 if(finished){main.innerHTML=renderSimuladoCorrection(s,lookup);return;}
 main.innerHTML=`<section class="module-detail"><h1 class="page-title">Simulado em andamento</h1><p>${answered}/${s.ids.length} respondidas · Questão ${s.cursor+1} de ${s.ids.length}</p><p>As respostas só serão corrigidas após a finalização.</p>${renderSimuladoNavigation(s)}<article class="lesson-panel"><p><strong>${esc(q.subtopicId||q.moduleId)}</strong></p><h2>${esc(q.stem)}</h2>${order.map((idx,j)=>`<button class="btn" style="display:block;text-align:left;width:100%;margin:8px 0;${s.answers[q.id]===idx?'outline:2px solid currentColor;':''}" data-sim-choice="${idx}" ${Number.isInteger(s.answers[q.id])?'disabled':''}>${q.type==='ce'?'':abc[j]+') '}${esc(q.options[idx])}</button>`).join('')}${Number.isInteger(s.answers[q.id])?'<p>Resposta registrada.</p>':''}</article><div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn" data-sim-move="-1" ${s.cursor===0?'disabled':''}>Anterior</button><button class="btn" data-sim-move="1" ${s.cursor===s.ids.length-1?'disabled':''}>Próxima</button><button class="btn btn-primary" data-sim-finish="1" ${answered!==s.ids.length?'disabled':''}>Finalizar e corrigir</button><button class="btn" data-sim-cancel="1">Cancelar tentativa</button></div></section>`;
}
