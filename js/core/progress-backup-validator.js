/** ADM-ESTUDO — F22/L06, correção do resumo de backups.
 * O aproveitamento desde a Fase 21 é derivado de diagnósticos, aulas e exercícios.
 * progress.modules é um campo de compatibilidade e pode legitimamente estar vazio.
 * Este módulo apenas verifica o arquivo; não altera os dados nem os restaura.
 */
import { STORAGE_KEY } from './storage.js';
import { STATE_SCHEMA_VERSION } from './state.js';

export const BACKUP_MAX_BYTES = 20 * 1024 * 1024;
const isObject = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const hasOwn = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
const isDate = value => typeof value === 'string' && Number.isFinite(Date.parse(value));

/** Conta módulos com evidências de estudo, não apenas progress.modules.
 * Esta é uma contagem informativa, não a regra do Dashboard nem uma nota.
 */
export function summarizeRecordedActivity(progress) {
  const p = isObject(progress) ? progress : {};
  const modules = new Set();
  const isModuleId = id => typeof id === 'string' && /^[A-Z]+-\d+$/.test(id);
  const include = id => { if (isModuleId(id)) modules.add(id); };
  const fromTopic = id => {
    if (typeof id !== 'string') return;
    const match = /^([A-Z]+-\d+)-\d+$/.exec(id);
    if (match) include(match[1]);
  };
  const fromQuestion = id => {
    if (typeof id !== 'string') return;
    const match = /^Q-([A-Z]+-\d+)-/.exec(id);
    if (match) include(match[1]);
  };
  for (const id of Object.keys(isObject(p.modules) ? p.modules : {})) include(id);
  for (const [id, diagnostic] of Object.entries(isObject(p.diagnostics) ? p.diagnostics : {})) {
    if (Object.keys(isObject(diagnostic?.answers) ? diagnostic.answers : {}).length) include(id);
  }
  for (const [id, lesson] of Object.entries(isObject(p.lessons) ? p.lessons : {})) {
    if (lesson && (lesson.completed === true || lesson.rating !== undefined)) fromTopic(id);
  }
  for (const [id, session] of Object.entries(isObject(p.exercises) ? p.exercises : {})) {
    if (Object.keys(isObject(session?.answers) ? session.answers : {}).length ||
        Object.keys(isObject(session?.assessments) ? session.assessments : {}).length || session?.finishedAt) include(id);
  }
  for (const id of Object.keys(isObject(p.questionHistory) ? p.questionHistory : {})) fromQuestion(id);
  for (const id of Object.keys(isObject(p.flashcards) ? p.flashcards : {})) fromTopic(id);
  for (const entry of Array.isArray(p.errors) ? p.errors : []) {
    include(entry?.moduleId);fromQuestion(entry?.questionId);
  }
  for (const entry of Object.values(isObject(p.reviewSchedule) ? p.reviewSchedule : {})) {
    include(entry?.moduleId);fromQuestion(entry?.questionId);
  }
  return {
    modules: modules.size,
    moduleIds: [...modules].sort(),
    legacyModuleEntries: Object.keys(isObject(p.modules) ? p.modules : {}).length,
    diagnostics: Object.values(isObject(p.diagnostics) ? p.diagnostics : {}).filter(v => Object.keys(isObject(v?.answers) ? v.answers : {}).length > 0).length,
    lessons: Object.keys(isObject(p.lessons) ? p.lessons : {}).length,
    exercises: Object.values(isObject(p.exercises) ? p.exercises : {}).filter(v => Object.keys(isObject(v?.answers) ? v.answers : {}).length > 0).length,
    answeredQuestions: Object.keys(isObject(p.questionHistory) ? p.questionHistory : {}).length,
    errors: Array.isArray(p.errors) ? p.errors.length : 0,
    simulations: Array.isArray(p.simulados?.history) ? p.simulados.history.length : 0
  };
}

export function validateProgressBackup(value) {
  const errors = [];
  const warnings = [];
  if (!isObject(value)) return { valid: false, errors: ['O arquivo deve conter um objeto JSON.'], warnings, summary: null };
  if (value.format !== 'adm-estudo-progress-backup') errors.push('Identificação do formato de backup incorreta.');
  if (value.backupVersion !== 1) errors.push('Versão do formato de backup não suportada.');
  if (value.storageKey !== STORAGE_KEY) errors.push('O arquivo pertence a outra chave de armazenamento.');
  if (!isDate(value.createdAt)) errors.push('Data de criação do backup inválida.');
  if (!isObject(value.state)) errors.push('O estado pedagógico não é um objeto válido.');
  const state = isObject(value.state) ? value.state : {};
  if (value.schemaVersion !== STATE_SCHEMA_VERSION || state.schemaVersion !== STATE_SCHEMA_VERSION || value.schemaVersion !== state.schemaVersion) {
    errors.push(`Esquema incompatível: o aplicativo exige a versão ${STATE_SCHEMA_VERSION}.`);
  }
  if (!isObject(state.progress)) errors.push('A seção progress está ausente ou inválida.');
  if (!isObject(state.navigation)) errors.push('A seção navigation está ausente ou inválida.');
  if (!isObject(state.preferences)) errors.push('A seção preferences está ausente ou inválida.');
  if (!isObject(state.metadata)) errors.push('A seção metadata está ausente ou inválida.');
  const progress = isObject(state.progress) ? state.progress : {};
  for (const key of ['modules','lessons','diagnostics','exercises','questionHistory','flashcards']) {
    if (!isObject(progress[key])) errors.push(`Seção progress.${key} ausente ou inválida.`);
  }
  if (!Array.isArray(progress.errors)) errors.push('A lista progress.errors está ausente ou inválida.');
  if (!Array.isArray(progress.reviewQueue)) errors.push('A lista progress.reviewQueue está ausente ou inválida.');
  if (hasOwn(progress,'reviewSchedule') && !isObject(progress.reviewSchedule)) errors.push('progress.reviewSchedule inválida.');
  if (hasOwn(progress,'simulados') && !isObject(progress.simulados)) errors.push('progress.simulados inválida.');
  if (isObject(progress.simulados)) {
    if (hasOwn(progress.simulados,'history') && !Array.isArray(progress.simulados.history)) errors.push('Histórico de simulados inválido.');
    if (hasOwn(progress.simulados,'active') && progress.simulados.active !== null && !isObject(progress.simulados.active)) errors.push('Simulado ativo inválido.');
  }
  if (isDate(value.createdAt) && Date.parse(value.createdAt) > Date.now() + 86400000) warnings.push('O backup informa uma data de criação no futuro.');
  if (isObject(state.metadata) && isDate(state.metadata.updatedAt) && Date.parse(state.metadata.updatedAt) > Date.now() + 86400000) warnings.push('O progresso informa uma data de atualização no futuro.');
  const activity = summarizeRecordedActivity(progress);
  if (activity.modules === 0) warnings.push('Não há atividades de módulos identificadas no backup; isso pode ser normal em uma instalação nova.');
  const summary = {
    createdAt: isDate(value.createdAt) ? value.createdAt : null,
    schemaVersion: state.schemaVersion ?? null,
    modules: activity.modules,
    moduleIds: activity.moduleIds,
    legacyModuleEntries: activity.legacyModuleEntries,
    diagnostics: activity.diagnostics,
    lessons: activity.lessons,
    exercises: activity.exercises,
    answeredQuestions: activity.answeredQuestions,
    errors: activity.errors,
    simulations: activity.simulations
  };
  return { valid: errors.length === 0, errors, warnings, summary };
}

export async function inspectProgressBackupFile(file) {
  if (!file) return { valid: false, errors: ['Selecione um arquivo de backup.'], warnings: [], summary: null };
  if (file.size > BACKUP_MAX_BYTES) return { valid: false, errors: ['Arquivo maior que 20 MB. Nenhum dado foi processado.'], warnings: [], summary: null };
  if (file.size === 0) return { valid: false, errors: ['O arquivo está vazio.'], warnings: [], summary: null };
  if (!/\.json$/i.test(file.name)) return { valid: false, errors: ['Selecione um arquivo com extensão .json.'], warnings: [], summary: null };
  try { return validateProgressBackup(JSON.parse(await file.text())); }
  catch (_) { return { valid: false, errors: ['Não foi possível interpretar o JSON.'], warnings: [], summary: null }; }
}
