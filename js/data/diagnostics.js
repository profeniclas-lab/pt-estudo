/** PT-ESTUDO — um diagnóstico por módulo, um cartão por subtópico. */
import { POR_01_DIAGNOSTICS } from './portugues/por-01-diagnostics.js';
import { POR_02_DIAGNOSTICS } from './portugues/por-02-diagnostics.js';
import { POR_03_DIAGNOSTICS } from './portugues/por-03-diagnostics.js';
import { POR_04_DIAGNOSTICS } from './portugues/por-04-diagnostics.js';
import { POR_05_DIAGNOSTICS } from './portugues/por-05-diagnostics.js';
import { POR_06_DIAGNOSTICS } from './portugues/por-06-diagnostics.js';
import { POR_07_DIAGNOSTICS } from './portugues/por-07-diagnostics.js';
import { POR_08_DIAGNOSTICS } from './portugues/por-08-diagnostics.js';
import { POR_09_DIAGNOSTICS } from './portugues/por-09-diagnostics.js';
import { POR_10_DIAGNOSTICS } from './portugues/por-10-diagnostics.js';
import { POR_11_DIAGNOSTICS } from './portugues/por-11-diagnostics.js';
import { POR_12_DIAGNOSTICS } from './portugues/por-12-diagnostics.js';
import { POR_13_DIAGNOSTICS } from './portugues/por-13-diagnostics.js';
import { POR_14_DIAGNOSTICS } from './portugues/por-14-diagnostics.js';
import { POR_15_DIAGNOSTICS } from './portugues/por-15-diagnostics.js';
import { POR_16_DIAGNOSTICS } from './portugues/por-16-diagnostics.js';
import { POR_17_DIAGNOSTICS } from './portugues/por-17-diagnostics.js';
import { POR_18_DIAGNOSTICS } from './portugues/por-18-diagnostics.js';
export const DIAGNOSTICS = Object.freeze({...POR_01_DIAGNOSTICS,'POR-02':POR_02_DIAGNOSTICS,'POR-03':POR_03_DIAGNOSTICS,'POR-04':POR_04_DIAGNOSTICS,'POR-05':POR_05_DIAGNOSTICS,'POR-06':POR_06_DIAGNOSTICS,'POR-07':POR_07_DIAGNOSTICS,'POR-08':POR_08_DIAGNOSTICS,'POR-09':POR_09_DIAGNOSTICS,'POR-10':POR_10_DIAGNOSTICS,'POR-11':POR_11_DIAGNOSTICS,'POR-12':POR_12_DIAGNOSTICS,'POR-13':POR_13_DIAGNOSTICS,'POR-14':POR_14_DIAGNOSTICS,'POR-15':POR_15_DIAGNOSTICS,'POR-16':POR_16_DIAGNOSTICS,'POR-17':POR_17_DIAGNOSTICS,'POR-18':POR_18_DIAGNOSTICS});
export function getDiagnosticCards(module) {
  const entries = DIAGNOSTICS[module?.id];
  if (!entries || entries.length !== module.subtopics.length) return null;
  const byId = new Map(entries.map(item=>[item.subtopicId,item]));
  if(byId.size !== module.subtopics.length || !module.subtopics.every(t=>byId.has(t.id)))return null;
  return module.subtopics.map(t=>({id:`${t.id}-DIAG`,subtopicId:t.id,subtopicTitle:t.title,question:byId.get(t.id).front,answer:byId.get(t.id).back}));
}
