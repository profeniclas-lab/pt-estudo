/** Fase 16, Lote 3: navegação segura, sem alterar respostas ou histórico. */
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function simuladoNavigationSummary(session){
 const ids=Array.isArray(session?.ids)?session.ids:[];
 const answers=session?.answers||{};
 const answered=ids.filter(id=>Number.isInteger(answers[id]));
 return {total:ids.length,answered:answered.length,pending:ids.length-answered.length,complete:ids.length>0&&answered.length===ids.length};
}
export function jumpSimulado(state,index){
 const session=state?.progress?.simulados?.active;
 if(!session||session.finishedAt||!Array.isArray(session.ids)||!Number.isInteger(index)||index<0||index>=session.ids.length)return false;
 if(session.cursor===index)return false;
 session.cursor=index;return true;
}
export function renderSimuladoNavigation(session){
 const ids=Array.isArray(session?.ids)?session.ids:[];
 const answers=session?.answers||{};
 const summary=simuladoNavigationSummary(session);
 const buttons=ids.map((id,index)=>{
  const done=Number.isInteger(answers[id]),current=index===session.cursor;
  return `<button type="button" class="btn" data-sim-jump="${index}" aria-label="Questão ${index+1}: ${done?'respondida':'pendente'}${current?', atual':''}" aria-current="${current?'step':'false'}" style="min-width:44px;min-height:44px;margin:3px;${current?'outline:2px solid currentColor;':''}">${index+1}${done?' ✓':''}</button>`;
 }).join('');
 return `<section class="module-card" style="padding:14px;margin:14px 0"><h3>Mapa das questões</h3><p>${summary.answered} respondida(s) · ${summary.pending} pendente(s)</p><div style="display:flex;flex-wrap:wrap;gap:3px" role="group" aria-label="Ir para questão">${buttons}</div><p class="page-subtitle">✓ Respondida. Sem ✓: pendente. Selecione um número para navegar; suas respostas permanecem salvas.</p></section>`;
}
