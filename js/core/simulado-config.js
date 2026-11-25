/** Fase 16, lote 2 — configuração de abrangência sem alterar sessões antigas. */
export const MODULE_PREFIX='modulo:';
export function simulationScope(pool,selection){
 if(selection==='todas')return Array.isArray(pool)?pool:[];
 if(typeof selection!=='string')return [];
 if(selection.startsWith(MODULE_PREFIX)){
  const id=selection.slice(MODULE_PREFIX.length);
  return id?(pool||[]).filter(q=>q.moduleId===id):[];
 }
 return (pool||[]).filter(q=>q.area===selection);
}
export function simulationScopeLabel(selection,areas,modules){
 if(selection==='todas')return 'Todas as áreas';
 if(typeof selection==='string'&&selection.startsWith(MODULE_PREFIX)){
  const id=selection.slice(MODULE_PREFIX.length);
  const module=(modules||[]).find(m=>m.id===id);
  return module?`Módulo: ${module.title||module.name||module.nome||id}`:`Módulo: ${id}`;
 }
 return areas?.[selection]||selection||'Não informado';
}
