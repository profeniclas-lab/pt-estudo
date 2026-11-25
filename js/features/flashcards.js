import { scheduleAdaptiveReview } from '../core/adaptive-review.js';
import { MODULES, AREAS } from '../data/modules.js';
import { getDiagnosticCards } from '../data/diagnostics.js';

const esc = x => String(x ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const DAY=86400000;
const ratings={sei:{days:7,label:'Sei responder'},duvida:{days:3,label:'Tenho dúvida'},nao:{days:1,label:'Ainda não sei'}};
const shuffle = items => {const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
function cards(){
 const all=[];
 for(const module of MODULES){
  const diagnostic=getDiagnosticCards(module);
  if(!diagnostic)continue;
  for(const c of diagnostic)all.push({
   id:c.subtopicId,subtopicId:c.subtopicId,moduleId:module.id,area:module.area,
   title:c.subtopicTitle,question:c.question,answer:c.answer
  });
 }
 return all;
}
function ensure(state){
 state.progress??={};state.progress.flashcards??={};
 if(!state.progress.flashcards || Array.isArray(state.progress.flashcards))state.progress.flashcards={};
 state.progress.flashcardStudy??={filters:{area:'todas',module:'todos',mode:'todos'},session:null};
 return state.progress.flashcardStudy;
}
function selected(state){
 const s=ensure(state),f=s.filters;
 return cards().filter(c=>(f.area==='todas'||c.area===f.area)&&(f.module==='todos'||c.moduleId===f.module))
 .filter(c=>f.mode==='todos'||(f.mode==='pendentes' ? !state.progress.flashcards[c.id] : f.mode==='revisar' ? !!state.progress.flashcards[c.id] && Date.parse(state.progress.flashcards[c.id].dueAt||'')<=Date.now() : f.mode==='dificeis' ? ['duvida','nao'].includes(state.progress.flashcards[c.id]?.rating):true));
}
function select(name,value,options){
 return `<label style="display:block;flex:1;min-width:160px">${esc(name)}<select data-flash-filter="${esc(name)}" style="display:block;width:100%;padding:9px;margin-top:5px">${options.map(([v,l])=>`<option value="${esc(v)}" ${value===v?'selected':''}>${esc(l)}</option>`).join('')}</select></label>`;
}
export function renderFlashcards(main,state){
 const s=ensure(state),all=cards(),filtered=selected(state),session=s.session;
 if(session){renderSession(main,state,session);return;}
 const f=s.filters,areas=[['todas','Todas as áreas'],...Object.entries(AREAS)];
 const modules=[['todos','Todos os módulos'],...MODULES.filter(m=>f.area==='todas'||m.area===f.area).map(m=>[m.id,`${m.id} — ${m.title}`])];
 const modes=[['todos','Todos os cartões'],['pendentes','Ainda não estudados'],['revisar','Revisão vencida'],['dificeis','Tenho dúvida / Ainda não sei']];
 const studied=all.filter(c=>!!state.progress.flashcards[c.id]).length;
 const due=all.filter(c=>state.progress.flashcards[c.id]&&Date.parse(state.progress.flashcards[c.id].dueAt||'')<=Date.now()).length;
 main.innerHTML=`<section class="module-detail"><h1 class="page-title">Banco de Flashcards</h1>
 <p class="page-subtitle">Perguntas de recuperação ativa, organizadas pelos 146 subtópicos do catálogo quando houver diagnóstico disponível.</p>
 <div class="cards-grid">
 <article class="stat-card"><div class="stat-label">Cartões disponíveis</div><div class="stat-value">${all.length}</div></article>
 <article class="stat-card"><div class="stat-label">Cartões estudados</div><div class="stat-value">${studied}</div></article>
 <article class="stat-card"><div class="stat-label">Revisões vencidas</div><div class="stat-value">${due}</div></article>
 </div>
 <div style="display:flex;gap:12px;flex-wrap:wrap;margin:16px 0">${select('area',f.area,areas)}${select('module',f.module,modules)}${select('mode',f.mode,modes)}</div>
 <p><strong>${filtered.length}</strong> cartão(ões) correspondem aos filtros.</p>
 <button type="button" class="btn btn-primary" data-flash-start="1" ${filtered.length?'':'disabled'}>Estudar cartões filtrados</button>
 <p style="margin-top:16px">Os cartões reutilizam as perguntas e explicações do diagnóstico, mas têm avaliações e agendamentos independentes. Não alteram o aproveitamento dos módulos.</p>
 </section>`;
}
function renderSession(main,state,session){
 const lookup=new Map(cards().map(c=>[c.id,c]));
 const c=lookup.get(session.ids[session.cursor]);
 if(!c){main.innerHTML='<section class="module-detail"><h1>Cartão indisponível</h1><button class="btn" data-flash-close="1">Voltar ao banco</button></section>';return;}
 const total=session.ids.length,done=session.cursor,flipped=!!session.flipped;
 const previous=state.progress.flashcards[c.id];
 main.innerHTML=`<section class="module-detail"><button type="button" class="btn" data-flash-close="1">← Sair do estudo</button>
 <h1 class="page-title">Flashcard ${done+1} de ${total}</h1><p class="page-subtitle">${esc(c.moduleId)} · ${esc(c.title)}</p>
 <article class="diagnostic-card" style="margin:16px 0;padding:22px;border:1px solid var(--border, #ccc);border-radius:12px">
 <p><strong>${flipped?'Resposta':'Pergunta'}</strong></p><h2>${esc(flipped?c.answer:c.question)}</h2>
 ${!flipped?'<p>Responda mentalmente antes de revelar.</p><button class="btn btn-primary" data-flash-flip="1">Revelar resposta</button>':
 `<p>Compare sua resposta com a explicação e registre sua compreensão.</p>
 <div style="display:flex;gap:8px;flex-wrap:wrap">
 ${Object.entries(ratings).map(([key,value])=>`<button class="btn" data-flash-rate="${key}">${esc(value.label)} · ${value.days} dia(s)</button>`).join('')}
 </div>`}</article>
 ${previous?`<p>Última avaliação: ${esc(ratings[previous.rating]?.label||'—')}.</p>`:''}
 <p>O progresso desta sessão é salvo após cada cartão. Ao sair, os cartões restantes poderão ser retomados.</p></section>`;
}
export function changeFlashFilter(state,key,value){
 const s=ensure(state),allowed=['area','module','mode'];
 if(!allowed.includes(key))return false;
 if(key==='area'&&!['todas',...Object.keys(AREAS)].includes(value))return false;
 if(key==='module'&&value!=='todos'&&!MODULES.some(m=>m.id===value))return false;
 if(key==='mode'&&!['todos','pendentes','revisar','dificeis'].includes(value))return false;
 s.filters[key]=value;
 if(key==='area')s.filters.module='todos';
 return true;
}
export function startFlashStudy(state){
 const s=ensure(state);
 if(s.session)return true;
 const pool=selected(state);
 if(!pool.length)return false;
 s.session={ids:shuffle(pool.map(c=>c.id)),cursor:0,flipped:false,startedAt:new Date().toISOString()};
 return true;
}
export function flipFlashStudy(state){
 const s=ensure(state);
 if(!s.session||s.session.flipped)return false;
 s.session.flipped=true;return true;
}
export function rateFlashStudy(state,rating){
 const s=ensure(state),session=s.session;
 if(!session||!session.flipped||!Object.hasOwn(ratings,rating))return false;
 const id=session.ids[session.cursor],now=new Date(),old=state.progress.flashcards[id]||{};
 const adaptive=scheduleAdaptiveReview(state,'flashcard',id,rating);
 state.progress.flashcards[id]={...old,rating,attempts:(old.attempts||0)+1,updatedAt:now.toISOString(),dueAt:adaptive.dueAt};
 if(session.cursor+1>=session.ids.length)s.session=null;
 else {session.cursor++;session.flipped=false;}
 return true;
}
export function closeFlashStudy(state){
 const s=ensure(state);
 if(!s.session)return false;
 // Sair não descarta a sessão; ela será retomada no próximo acesso.
 return true;
}
export function restartFlashStudy(state){
 const s=ensure(state);
 if(!s.session)return false;
 s.session=null;return true;
}
