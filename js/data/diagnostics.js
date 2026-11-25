/** PT-ESTUDO — um diagnóstico por módulo, um cartão por subtópico. */
import { POR_01_DIAGNOSTICS } from './portugues/por-01-diagnostics.js';
import { POR_02_DIAGNOSTICS } from './portugues/por-02-diagnostics.js';
import { POR_03_DIAGNOSTICS } from './portugues/por-03-diagnostics.js';
export const DIAGNOSTICS = Object.freeze({...POR_01_DIAGNOSTICS,'POR-02':POR_02_DIAGNOSTICS,'POR-03':POR_03_DIAGNOSTICS});
export function getDiagnosticCards(module) {
  const entries = DIAGNOSTICS[module?.id];
  if (!entries || entries.length !== module.subtopics.length) return null;
  const byId = new Map(entries.map(item=>[item.subtopicId,item]));
  if(byId.size !== module.subtopics.length || !module.subtopics.every(t=>byId.has(t.id)))return null;
  return module.subtopics.map(t=>({id:`${t.id}-DIAG`,subtopicId:t.id,subtopicTitle:t.title,question:byId.get(t.id).front,answer:byId.get(t.id).back}));
}
