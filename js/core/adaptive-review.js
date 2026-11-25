/** Fase 14, lote 4 — intervalos progressivos, por item, sem alterar o esquema do estado. */
import { recordErrorAttempt } from './error-history.js';
const DAY = 86400000;
const GOOD = new Set(['seguro','sei','acerto_banco']);
const PARTIAL = new Set(['duvida','pegadinha','interpretacao']);
const WEAK = new Set(['chute','desconhecimento','desatencao','nao','erro_banco']);
const safe = x => x && typeof x === 'object' && !Array.isArray(x) ? x : {};
const clamp = (n,min,max) => Math.max(min,Math.min(max,n));
/** Atualiza o desempenho do item sem apagar seu histórico de respostas ou erros. */
export function scheduleAdaptiveReview(state, kind, id, rating, options={}) {
  if (!state?.progress || !['question','flashcard'].includes(kind) || !id ||
      ![...GOOD,...PARTIAL,...WEAK].includes(rating)) return null;
  const p=state.progress;
  p.adaptiveReview ??= {};
  const key=`${kind}:${id}`, previous=safe(p.adaptiveReview[key]);
  const previousStreak=Number.isInteger(previous.streak)?previous.streak:0;
  const previousLapses=Number.isInteger(previous.lapses)?previous.lapses:0;
  const strong=GOOD.has(rating), partial=PARTIAL.has(rating);
  const streak=strong?previousStreak+1:partial?Math.max(0,previousStreak-1):0;
  const lapses=previousLapses+(WEAK.has(rating)?1:0);
  // Interv. inicial 7/3/1 dias; progressão após sucessivos acertos seguros.
  // Reincidência de erro volta a um intervalo curto; não pune o usuário com intervalos negativos.
  const base=strong?7:partial?3:1;
  const days=strong?clamp(Math.round(base*Math.pow(1.65,streak-1)),1,90):
    partial?clamp(Math.round(base/(1+Math.min(lapses,3)*0.25)),1,7):1;
  const now=options.now instanceof Date && Number.isFinite(options.now.getTime())?options.now:new Date();
  const dueAt=new Date(now.getTime()+days*DAY).toISOString();
  const record={kind,itemId:String(id),streak,lapses,attempts:(Number(previous.attempts)||0)+1,
    rating,intervalDays:days,dueAt,updatedAt:now.toISOString()};
  p.adaptiveReview[key]=record;
  recordErrorAttempt(state,kind,id,rating,record);
  return record;
}
/** Dados resumidos para painéis futuros; sem efeito colateral. */
export function adaptiveReviewStats(state) {
  const entries=Object.values(safe(state?.progress?.adaptiveReview));
  return {items:entries.length,withLapses:entries.filter(x=>x.lapses>0).length,
    secureStreaks:entries.filter(x=>x.streak>=2).length};
}
