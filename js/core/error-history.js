/** Histórico de avaliações a partir da instalação da Fase 15, Lote 2. */
const safe=x=>x&&typeof x==='object'&&!Array.isArray(x)?x:{};
const GOOD=new Set(['seguro','sei','acerto_banco']);
const WEAK=new Set(['chute','desconhecimento','desatencao','nao','erro_banco']);
const PARTIAL=new Set(['duvida','pegadinha','interpretacao']);
export function recordErrorAttempt(state,kind,id,rating,adaptive){
 if(!state?.progress||!['question','flashcard'].includes(kind)||!id||!adaptive)return false;
 const p=state.progress;p.errorAttemptHistory??={};
 const key=`${kind}:${id}`;
 const previous=Array.isArray(p.errorAttemptHistory[key])?p.errorAttemptHistory[key]:[];
 const event={at:adaptive.updatedAt,rating,result:GOOD.has(rating)?'seguro':WEAK.has(rating)?'dificuldade':PARTIAL.has(rating)?'parcial':'outro',
  streak:adaptive.streak,lapses:adaptive.lapses,intervalDays:adaptive.intervalDays};
 // Uma avaliação gera um evento. Não reconstrói eventos antigos.
 p.errorAttemptHistory[key]=[...previous,event];
 return true;
}
export function errorHistorySummary(state,id){
 const p=safe(state?.progress),events=Array.isArray(p.errorAttemptHistory?.[`question:${id}`])?p.errorAttemptHistory[`question:${id}`]:[];
 const a=safe(p.adaptiveReview?.[`question:${id}`]);
 const weak=events.filter(x=>x.result==='dificuldade').length;
 const secure=events.filter(x=>x.result==='seguro').length;
 const recent=events.slice(-5);
 return {events:events.length,weak,secure,recent,
  historicalAttempts:Number(a.attempts)||0,historicalLapses:Number(a.lapses)||0,
  recurrent:(Number(a.lapses)||0)>=2, improving:(Number(a.streak)||0)>=2,
  lastRating:a.rating||null};
}
export function renderErrorHistory(state){
 const p=safe(state?.progress),errors=Array.isArray(p.errors)?p.errors:[];
 const ids=[...new Set(errors.map(x=>x?.questionId).filter(Boolean))];
 const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const rows=ids.map(id=>({id,...errorHistorySummary(state,id)})).sort((a,b)=>Number(b.recurrent)-Number(a.recurrent)||b.historicalLapses-a.historicalLapses);
 const details=rows.slice(0,30).map(x=>`<details style="margin:8px 0"><summary>${esc(x.id)} — ${x.recurrent?'dificuldade recorrente':x.improving?'em recuperação':'acompanhamento'} (${x.historicalAttempts} avaliação(ões) adaptativas)</summary>
 <p>Ocorrências fracas acumuladas: ${x.historicalLapses}. Eventos detalhados registrados desde o Lote 2: ${x.events}.</p>
 ${x.recent.length?`<ul>${x.recent.map(e=>`<li>${esc(e.at)} — ${esc(e.rating)} — ${esc(e.result)}</li>`).join('')}</ul>`:'<p>Não há eventos detalhados anteriores à instalação deste lote.</p>'}</details>`).join('');
 return `<section class="module-card" style="padding:16px;margin:16px 0"><h2>Histórico de tentativas e reincidências</h2>
 <p>Questões acompanhadas: ${rows.length}. Dificuldades recorrentes: ${rows.filter(x=>x.recurrent).length}. Em recuperação: ${rows.filter(x=>x.improving).length}.</p>
 ${details||'<p>Sem questões no banco de erros.</p>'}
 <p class="page-subtitle">Eventos detalhados começam a ser registrados após a instalação. Contadores adaptativos anteriores são preservados; não são inventadas tentativas antigas.</p></section>`;
}
