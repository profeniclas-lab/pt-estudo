/** ADM-ESTUDO — Fase 22, Lote 3 (modo simples).
 * Reinício por decisão explícita: uma confirmação, nenhum upload obrigatório.
 * Opera sobre a versão mais recente gravada no navegador, nunca sobre um snapshot antigo.
 */
import { STORAGE_KEY } from './storage.js';
import { createInitialState } from './state.js';
import { getModuleById, MODULES } from '../data/modules.js';
import { questionsForModule } from '../data/questions.js';

const obj = value => value && typeof value === 'object' && !Array.isArray(value) ? value : {};
const clone = value => JSON.parse(JSON.stringify(value));

/** Calcula uma nova cópia; não escreve nem modifica os dados recebidos. */
export function planProgressReset(current, scope = 'total', moduleId = '') {
  if (!current || typeof current !== 'object' || !current.progress || !current.navigation || !current.preferences) {
    return { ok: false, message: 'Os dados salvos não puderam ser interpretados. Nenhum registro foi apagado.' };
  }
  if (scope === 'total') {
    const result = createInitialState();
    result.preferences = clone(current.preferences);
    result.navigation.currentRoute = 'configuracoes';
    return {ok:true, scope, state:result,
      message:'Todo o histórico de estudo será reiniciado. Suas preferências serão preservadas.'};
  }
  if (scope !== 'modulo') return {ok:false,message:'Tipo de reinício desconhecido.'};
  const module = getModuleById(moduleId);
  if (!module) return {ok:false,message:'Selecione um módulo válido.'};
  const result = clone(current), p = result.progress;
  const topics = new Set((module.subtopics || []).map(t => t.id));
  const questionIds = new Set((questionsForModule(moduleId) || []).map(q => q.id));
  const belongsQuestion = id => questionIds.has(id) || (typeof id === 'string' && id.startsWith(`Q-${moduleId}-`));
  const belongsTopic = id => topics.has(id) || (typeof id === 'string' && id.startsWith(`${moduleId}-`));
  for (const name of ['modules','diagnostics','exercises']) {
    if (p[name] && typeof p[name] === 'object') delete p[name][moduleId];
  }
  for (const name of ['lessons','flashcards']) {
    for (const id of Object.keys(obj(p[name]))) if (belongsTopic(id)) delete p[name][id];
  }
  for (const name of ['questionHistory','reviewSchedule','reviewAttempts']) {
    for (const id of Object.keys(obj(p[name]))) if (belongsQuestion(id)) delete p[name][id];
  }
  for (const name of ['adaptiveReview','errorAttemptHistory']) {
    for (const id of Object.keys(obj(p[name]))) {
      if (id.startsWith('question:') && belongsQuestion(id.slice(9))) delete p[name][id];
      if (id.startsWith('flashcard:') && belongsTopic(id.slice(10))) delete p[name][id];
    }
  }
  if (Array.isArray(p.errors)) p.errors = p.errors.filter(x => x?.moduleId !== moduleId && !belongsQuestion(x?.questionId));
  if (Array.isArray(p.reviewQueue)) p.reviewQueue = p.reviewQueue.filter(x =>
    x?.moduleId !== moduleId && !belongsQuestion(x?.questionId) && !belongsQuestion(x?.itemId) && !belongsTopic(x?.itemId));
  if (p.questionBank?.session?.ids?.some(belongsQuestion)) p.questionBank.session = null;
  if (p.flashcardStudy?.session?.ids?.some(belongsTopic)) p.flashcardStudy.session = null;
  if (p.simulados?.active?.ids?.some(belongsQuestion)) p.simulados.active = null;
  // Histórico global de simulados já realizados é preservado, por poder misturar módulos.
  result.navigation = {...result.navigation, currentRoute:'configuracoes', selectedModuleId:null, selectedSubtopicId:null};
  return {ok:true,scope,moduleId,state:result,
    message:`Os registros identificáveis do módulo ${moduleId} serão reiniciados. Simulados históricos com múltiplos módulos serão preservados.`};
}

/** Execução direta, sem exigir um arquivo JSON ou cópia de recuperação. */
export function executeProgressReset({scope='total',moduleId='',confirmed=false} = {}, storage=window.localStorage) {
  if (!confirmed) return {ok:false,message:'Operação cancelada; nada foi alterado.'};
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (raw === null) return {ok:false,message:'Não há progresso salvo para reiniciar.'};
    const state = JSON.parse(raw);
    const plan = planProgressReset(state,scope,moduleId);
    if (!plan.ok) return plan;
    const replacement = JSON.stringify(plan.state);
    storage.setItem(STORAGE_KEY,replacement);
    if (storage.getItem(STORAGE_KEY) !== replacement) throw Error('A gravação não foi confirmada.');
    return {ok:true,message:'Progresso reiniciado. A página será recarregada.'};
  } catch (error) {
    return {ok:false,message:'Não foi possível reiniciar: '+String(error?.message || error)};
  }
}

/** Auditoria opcional: somente leitura, sem gravação. */
export function inspectResetReadOnly(storage=window.localStorage) {
  const checks=[];
  const add=(name,passed)=>checks.push({name,passed:!!passed});
  try {
    const raw=storage.getItem(STORAGE_KEY);
    add('Armazenamento legível',raw!==null);
    if (raw!==null) {
      const current=JSON.parse(raw),before=JSON.stringify(current);
      const preview=planProgressReset(current,'total');
      add('Plano de reinício total válido',preview.ok);
      add('Preferências mantidas no reinício total',preview.ok && JSON.stringify(preview.state.preferences)===JSON.stringify(current.preferences));
      add('Simulação não altera o progresso real',JSON.stringify(current)===before);
    }
    add('Nenhum arquivo de backup é obrigatório',true);
  } catch(e) {add('Leitura dos dados existentes',false);}
  return {version:'F22-L03-SIMPLES',date:new Date().toISOString(),checks,ok:checks.every(x=>x.passed),readOnly:true};
}

export function installResetUI(main) {
  const card=main.querySelector('#settings-reset');
  if (!card) return;
  card.innerHTML=`<h2 style="font-size:17px;margin:0 0 8px">↻ Reiniciar progresso</h2>
    <p>Escolha entre reiniciar todo o progresso de estudos ou apenas um módulo.</p>
    <label>Alcance <select id="reset-scope" style="display:block;padding:8px;margin:8px 0">
      <option value="total">Todo o progresso</option><option value="modulo">Somente um módulo</option></select></label>
    <label id="reset-module-wrap" hidden>Módulo <select id="reset-module" style="display:block;padding:8px;margin:8px 0"></select></label>
    <p class="page-subtitle"><strong>Importante:</strong> esta operação não pode ser desfeita automaticamente. Recomendamos exportar um backup JSON antes, mas isso não é obrigatório.</p>
    <button type="button" class="btn btn-danger" id="reset-execute" data-reset-progress="1">Reiniciar progresso</button>
    <p id="reset-result" role="status" aria-live="polite" style="white-space:pre-wrap;margin-top:10px"></p>
    <hr style="margin:16px 0"><h3>Verificação técnica (opcional)</h3>
    <button type="button" class="btn" id="reset-audit">Verificar sem alterar dados</button>
    <button type="button" class="btn" id="reset-audit-download" disabled>Baixar relatório TXT</button>
    <pre id="reset-audit-result" role="status" style="white-space:pre-wrap;margin-top:10px"></pre>`;
  const scope=card.querySelector('#reset-scope'),select=card.querySelector('#reset-module');
  const wrap=card.querySelector('#reset-module-wrap'),result=card.querySelector('#reset-result');
  for (const module of MODULES) {const option=document.createElement('option');option.value=module.id;option.textContent=module.id+' — '+module.title;select.append(option);}
  scope.addEventListener('change',()=>{wrap.hidden=scope.value!=='modulo';result.textContent='';});
  card.querySelector('#reset-execute').addEventListener('click',()=>{
    const type=scope.value,id=select.value;
    const target=type==='total'?'TODO o progresso de aprendizagem':`o progresso do módulo ${id}`;
    if (!window.confirm(`Tem certeza de que deseja reiniciar ${target}?\n\nEssa ação apaga os dados selecionados neste navegador e não pode ser desfeita automaticamente.`)) {
      result.textContent='Operação cancelada. Nenhuma alteração realizada.';return;
    }
    const response=executeProgressReset({scope:type,moduleId:id,confirmed:true});
    result.textContent=response.message;
    if (response.ok) {window.alert(response.message);window.location.reload();}
  });
  let report='';const output=card.querySelector('#reset-audit-result');const download=card.querySelector('#reset-audit-download');
  card.querySelector('#reset-audit').addEventListener('click',()=>{
    const r=inspectResetReadOnly();
    report=['ADM-ESTUDO | FASE 22 — LOTE 3 (modo simples)',r.date,
      ...r.checks.map(x=>(x.passed?'OK':'FALHA')+' — '+x.name),'Somente leitura.'].join('\n');
    output.textContent=report;download.disabled=false;
  });
  download.addEventListener('click',()=>{
    if(!report)return;
    const blob=new Blob([report],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');
    a.href=url;a.download='adm-estudo-fase22-lote03-relatorio.txt';document.body.appendChild(a);
    try{a.click();}finally{a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);}
  });
}
