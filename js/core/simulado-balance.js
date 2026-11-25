/** Fase 16, lote 1. Seleção sem repetição, distribuída por módulo, subtópico e dificuldade. */
const key = (v, fallback) => String(v ?? fallback);
const difficulty = q => key(q.difficulty ?? q.dificuldade, 'não informada').toLowerCase();
const moduleId = q => key(q.moduleId, 'sem módulo');
const subtopic = q => key(q.subtopicId, 'sem subtópico');
const shuffle = list => {
 const out=[...list];
 for(let i=out.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}
 return out;
};
/** Não modifica o banco; ids repetidos são descartados e nunca reaparecem no simulado. */
export function selectBalancedQuestions(pool, count) {
 if(!Array.isArray(pool)||!Number.isInteger(count)||count<1)return [];
 const unique=[...new Map(pool.filter(q=>q&&typeof q.id==='string').map(q=>[q.id,q])).values()];
 if(unique.length<count)return [];
 const chosen=[],used=new Set(),modules=new Map(),topics=new Map(),levels=new Map();
 const add=(map,k)=>map.set(k,(map.get(k)||0)+1);
 const candidates=shuffle(unique);
 while(chosen.length<count){
  let best=null,bestScore=Infinity;
  for(const q of candidates){
   if(used.has(q.id))continue;
   const m=moduleId(q),t=`${m}:${subtopic(q)}`,d=difficulty(q);
   // Menos módulos e subtópicos já representados têm prioridade.
   const score=(modules.get(m)||0)*100+(topics.get(t)||0)*30+(levels.get(d)||0)*8;
   if(score<bestScore){best=q;bestScore=score;}
  }
  if(!best)break;
  chosen.push(best);used.add(best.id);
  const m=moduleId(best);add(modules,m);add(topics,`${m}:${subtopic(best)}`);add(levels,difficulty(best));
 }
 return shuffle(chosen);
}
export function balancedSelectionSummary(selected){
 const counts=fn=>Object.fromEntries([...selected.reduce((m,q)=>{const k=fn(q);m.set(k,(m.get(k)||0)+1);return m;},new Map())].sort());
 return {total:selected.length,byModule:counts(moduleId),bySubtopic:counts(q=>`${moduleId(q)}:${subtopic(q)}`),byDifficulty:counts(difficulty)};
}
