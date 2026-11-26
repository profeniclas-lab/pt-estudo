/** PT-ESTUDO — validação de envelopes de backup, sem escrita. */
import { STORAGE_KEY } from './storage.js';
import { APP_ID, STATE_SCHEMA_VERSION } from './state.js';
import { inspectProgressIdentity } from './progress-identity.js';

export const BACKUP_FORMAT = 'pt-estudo-progress-backup';
export const BACKUP_MAX_BYTES = 20 * 1024 * 1024;
const isObject = x => x !== null && typeof x === 'object' && !Array.isArray(x);
const hasOwn = (o,k) => Object.prototype.hasOwnProperty.call(o,k);
const isDate = x => typeof x === 'string' && Number.isFinite(Date.parse(x));

export function summarizeRecordedActivity(progress) {
  const p = isObject(progress) ? progress : {};
  const modules = new Set();
  const include = id => {if (typeof id === 'string' && /^(?:POR|RED)-\d+$/.test(id)) modules.add(id);};
  const fromTopic = id => {const match=/^((?:POR|RED)-\d+)-\d+$/.exec(String(id));if(match)include(match[1]);};
  const fromQuestion = id => {const match=/^Q-((?:POR|RED)-\d+)-/.exec(String(id));if(match)include(match[1]);};
  for(const id of Object.keys(isObject(p.modules)?p.modules:{}))include(id);
  for(const [id,diag] of Object.entries(isObject(p.diagnostics)?p.diagnostics:{}))if(Object.keys(isObject(diag?.answers)?diag.answers:{}).length)include(id);
  for(const [id,lesson] of Object.entries(isObject(p.lessons)?p.lessons:{}))if(lesson&&(lesson.completed===true||lesson.rating!==undefined))fromTopic(id);
  for(const [id,session] of Object.entries(isObject(p.exercises)?p.exercises:{}))if(Object.keys(isObject(session?.answers)?session.answers:{}).length||Object.keys(isObject(session?.assessments)?session.assessments:{}).length||session?.finishedAt)include(id);
  for(const id of Object.keys(isObject(p.questionHistory)?p.questionHistory:{}))fromQuestion(id);
  for(const id of Object.keys(isObject(p.flashcards)?p.flashcards:{}))fromTopic(id);
  for(const entry of Array.isArray(p.errors)?p.errors:[]){include(entry?.moduleId);fromQuestion(entry?.questionId);}
  for(const entry of Object.values(isObject(p.reviewSchedule)?p.reviewSchedule:{})){include(entry?.moduleId);fromQuestion(entry?.questionId);}
  return {
    modules:modules.size,moduleIds:[...modules].sort(),
    legacyModuleEntries:Object.keys(isObject(p.modules)?p.modules:{}).length,
    diagnostics:Object.values(isObject(p.diagnostics)?p.diagnostics:{}).filter(v=>Object.keys(isObject(v?.answers)?v.answers:{}).length).length,
    lessons:Object.keys(isObject(p.lessons)?p.lessons:{}).length,
    exercises:Object.values(isObject(p.exercises)?p.exercises:{}).filter(v=>Object.keys(isObject(v?.answers)?v.answers:{}).length).length,
    answeredQuestions:Object.keys(isObject(p.questionHistory)?p.questionHistory:{}).length,
    errors:Array.isArray(p.errors)?p.errors.length:0,
    simulations:Array.isArray(p.simulados?.history)?p.simulados.history.length:0
  };
}

export function validateProgressBackup(value) {
  const errors=[], warnings=[];
  if(!isObject(value))return {valid:false,errors:['O backup deve conter um objeto JSON.'],warnings,summary:null};
  if(value.format!==BACKUP_FORMAT)errors.push('Formato de backup pertence a outro aplicativo ou é inválido.');
  if(value.backupVersion!==1)errors.push('Versão do formato de backup não suportada.');
  if(value.storageKey!==STORAGE_KEY)errors.push('Chave de armazenamento de outro aplicativo.');
  if(!isDate(value.createdAt))errors.push('Data de criação inválida.');
  if(!isObject(value.state))errors.push('O estado pedagógico não é um objeto válido.');
  const state=isObject(value.state)?value.state:{};
  if(state.appId!==APP_ID)errors.push('Identidade do estado incompatível com PT-ESTUDO.');
  if(value.schemaVersion!==STATE_SCHEMA_VERSION||state.schemaVersion!==STATE_SCHEMA_VERSION||value.schemaVersion!==state.schemaVersion)errors.push(`Esquema incompatível: exigida versão ${STATE_SCHEMA_VERSION}.`);
  for(const field of ['progress','navigation','preferences','metadata'])if(!isObject(state[field]))errors.push(`Seção ${field} ausente ou inválida.`);
  const p=isObject(state.progress)?state.progress:{};
  for(const field of ['modules','lessons','diagnostics','exercises','questionHistory','flashcards'])if(!isObject(p[field]))errors.push(`Seção progress.${field} inválida.`);
  if(!Array.isArray(p.errors))errors.push('Lista progress.errors inválida.');
  if(!Array.isArray(p.reviewQueue))errors.push('Lista progress.reviewQueue inválida.');
  if(hasOwn(p,'reviewSchedule')&&!isObject(p.reviewSchedule))errors.push('progress.reviewSchedule inválida.');
  if(hasOwn(p,'simulados')&&!isObject(p.simulados))errors.push('progress.simulados inválida.');
  if(isObject(p.simulados)){
    if(hasOwn(p.simulados,'history')&&!Array.isArray(p.simulados.history))errors.push('Histórico de simulados inválido.');
    if(hasOwn(p.simulados,'active')&&p.simulados.active!==null&&!isObject(p.simulados.active))errors.push('Simulado ativo inválido.');
  }
  // Rejeita referências administrativas também em campos aninhados, sem ler textos livres.
  const identity = inspectProgressIdentity(state);
  if (!identity.ok) errors.push('O backup contém identificadores administrativos incompatíveis ou excede o limite de inspeção ('+identity.issues.join('; ')+').');
  if(isDate(value.createdAt)&&Date.parse(value.createdAt)>Date.now()+86400000)warnings.push('Data de criação no futuro.');
  if(isDate(state.metadata?.updatedAt)&&Date.parse(state.metadata.updatedAt)>Date.now()+86400000)warnings.push('Atualização do progresso no futuro.');
  const activity=summarizeRecordedActivity(p);
  if(!activity.modules)warnings.push('Nenhuma atividade de módulos identificada; pode ser normal em instalação nova.');
  return {valid:errors.length===0,errors,warnings,summary:{createdAt:isDate(value.createdAt)?value.createdAt:null,schemaVersion:state.schemaVersion??null,...activity}};
}

export async function inspectProgressBackupFile(file) {
  if(!file)return {valid:false,errors:['Selecione um arquivo de backup.'],warnings:[],summary:null};
  if(file.size>BACKUP_MAX_BYTES)return {valid:false,errors:['Arquivo maior que 20 MB.'],warnings:[],summary:null};
  if(!file.size)return {valid:false,errors:['O arquivo está vazio.'],warnings:[],summary:null};
  if(!/\.json$/i.test(file.name))return {valid:false,errors:['Selecione um arquivo .json.'],warnings:[],summary:null};
  try{return validateProgressBackup(JSON.parse(await file.text()));}
  catch(_){return {valid:false,errors:['Não foi possível interpretar o JSON.'],warnings:[],summary:null};}
}
