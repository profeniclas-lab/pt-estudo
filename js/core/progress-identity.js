/**
 * PT-ESTUDO — Correção 2: validação somente leitura de identidade pedagógica.
 * Confere referências a dados administrativos em estruturas aninhadas sem
 * interpretar textos livres, comentários ou enunciados como identificadores.
 *
 * Este módulo NÃO migra, não apaga dados e não acessa localStorage.
 */
const object = value => value !== null && typeof value === 'object';
const own = (value, key) => Object.prototype.hasOwnProperty.call(value, key);
const ADMIN_TOKEN = /(?:^|[:|/])(?:Q-(?:(?:REAL|AUT|AUTORAL)-)?(?:ADM|AP|DA)-\d+|(?:ADM|AP|DA)-\d+)(?=$|[-:|/])/i;
const ADMIN_AREA = /^(?:ADM|AP|DA)$/i;
const ADMIN_APP_ID = /^(?:adm-estudo|dir-adm)$/i;
const ID_FIELDS = /(?:^id$|^ids$|^qid$|^key$|^module$|^scope$|Id$|Ids$)/i;
const ID_ARRAYS = /(?:^ids$|Ids$|^questions$|^reviewQueue$)/i;
const MAX_NODES = 500000;
const MAX_DEPTH = 64;
const MAX_ISSUES = 12;

const badIdentifier = value => typeof value === 'string' && ADMIN_TOKEN.test(value.trim());
const badArea = value => typeof value === 'string' && ADMIN_AREA.test(value.trim());
const pathPart = key => /^[a-z_$][\w$]*$/i.test(key)
  ? '.' + key : '[' + JSON.stringify(key.slice(0, 70)) + ']';

/**
 * Analisa os campos que contêm IDs, chaves de mapas e áreas de estudo.
 * Preserva campos de texto livre mesmo que discutam "Administração".
 * @returns {{ok:boolean, issues:string[], inspected:number, truncated:boolean}}
 */
export function inspectProgressIdentity(state) {
  const issues = [];
  const push = path => { if (issues.length < MAX_ISSUES) issues.push(path.slice(0, 220)); };
  const stack = [];
  if (object(state?.progress)) stack.push({value:state.progress,path:'state.progress',depth:0,part:'progress',idArray:false});
  if (object(state?.navigation)) stack.push({value:state.navigation,path:'state.navigation',depth:0,part:'navigation',idArray:false});
  const visited = new WeakSet();
  let inspected = 0, truncated = false;
  while (stack.length && issues.length < MAX_ISSUES) {
    const node = stack.pop();
    if (++inspected > MAX_NODES || node.depth > MAX_DEPTH) {truncated = true;break;}
    const value = node.value;
    if (typeof value === 'string') {
      if (node.idArray && badIdentifier(value)) push(node.path);
      continue;
    }
    if (!object(value)) continue;
    if (visited.has(value)) continue;
    visited.add(value);
    if (Array.isArray(value)) {
      for (let index = value.length-1; index>=0; index--) {
        stack.push({value:value[index],path:node.path+'['+index+']',depth:node.depth+1,
          part:String(index),idArray:node.idArray});
      }
      continue;
    }
    for (const [key, child] of Object.entries(value)) {
      const path=node.path+pathPart(key);
      // IDs administrativos usados como chaves de qualquer mapa de progresso.
      if (badIdentifier(key)) push(path);
      if (typeof child === 'string') {
        if ((ID_FIELDS.test(key) || node.idArray) && badIdentifier(child)) push(path);
        if (key === 'area' && badArea(child)) push(path);
        if (key === 'appId' && ADMIN_APP_ID.test(child.trim())) push(path);
      }
      if (object(child)) stack.push({value:child,path,depth:node.depth+1,
        part:key,idArray:Array.isArray(child) && ID_ARRAYS.test(key)});
    }
  }
  if (truncated) push('state.progress: limite de verificação atingido');
  return {ok:issues.length===0 && !truncated,issues,inspected,truncated};
}
