/** Fase 18 — Lote 4: proteção adicional para restaurações.
 * Nunca migra silenciosamente versões incompatíveis.
 */
import { STORAGE_KEY } from './storage.js';
import { STATE_SCHEMA_VERSION } from './state.js';
import { validateProgressBackup } from './progress-backup-validator.js';

export const RECOVERY_KEY = `${STORAGE_KEY}.preRestoreRecovery`;
const object = x => x !== null && typeof x === 'object' && !Array.isArray(x);

/** Reconhece cópias brutas criadas no Lote 3, sem aceitar esquemas antigos. */
export function normalizeRecoveryInput(input) {
  if (!object(input)) return { ok:false, message:'O arquivo não contém um objeto JSON válido.' };
  if (input.format === 'adm-estudo-progress-backup') {
    const validation = validateProgressBackup(input);
    return validation.valid ? {ok:true, backup:input, validation, source:'backup'} : {ok:false, message:validation.errors.join('\n')};
  }
  // Arquivo bruto da cópia de recuperação anterior, gerado no Lote 3.
  if (input.schemaVersion !== STATE_SCHEMA_VERSION) return {ok:false, message:`Esquema incompatível. Exigida versão ${STATE_SCHEMA_VERSION}; nenhum dado foi alterado.`};
  const backup = {
    format:'adm-estudo-progress-backup', backupVersion:1,
    createdAt:new Date().toISOString(), storageKey:STORAGE_KEY,
    schemaVersion:input.schemaVersion, state:input
  };
  const validation = validateProgressBackup(backup);
  return validation.valid ? {ok:true, backup, validation, source:'recuperacao-bruta'} : {ok:false, message:validation.errors.join('\n')};
}

/** Persiste o estado anterior ANTES de substituí-lo. Falha fechada se não houver espaço. */
export function protectCurrentProgress(previousRaw, replacementRaw, storage=window.localStorage) {
  if (typeof replacementRaw !== 'string') return {ok:false,message:'Novo estado inválido.'};
  try {
    const candidate=JSON.parse(replacementRaw);
    const checked=normalizeRecoveryInput(candidate);
    if (!checked.ok) return {ok:false,message:'Estado de destino inválido: '+checked.message};
    if (previousRaw === null) return {ok:true, recoverySaved:false};
    const existing=storage.getItem(RECOVERY_KEY);
    if (existing !== null) return {ok:false,message:'Já existe uma cópia local de recuperação pendente. Exporte-a e guarde-a antes de outra restauração.'};
    // Evita que uma cópia corrompida seja preservada como única recuperação.
    const previous=JSON.parse(previousRaw);
    const previousChecked=normalizeRecoveryInput(previous);
    if (!previousChecked.ok) return {ok:false,message:'O progresso atual não passou na validação. Faça cópia manual antes de prosseguir.'};
    storage.setItem(RECOVERY_KEY,previousRaw);
    if(storage.getItem(RECOVERY_KEY)!==previousRaw) throw Error('Falha ao verificar cópia local');
    return {ok:true,recoverySaved:true};
  } catch (_) {return {ok:false,message:'Não foi possível guardar cópia local verificável. Nenhum progresso foi substituído.'};}
}

export function recoveryStatus(storage=window.localStorage) {
  try {
    const raw=storage.getItem(RECOVERY_KEY);
    if(raw===null)return {exists:false,valid:false};
    const result=normalizeRecoveryInput(JSON.parse(raw));
    return {exists:true,valid:result.ok,message:result.ok?'Cópia anterior disponível.':'Cópia anterior inválida.'};
  }catch(_){return {exists:true,valid:false,message:'Não foi possível ler a cópia anterior.'};}
}

/** Exclusão explícita, apenas após backup externo confirmado pelo usuário. */
export function clearRecoveryCopy(confirmed=false,storage=window.localStorage) {
  if(!confirmed)return {ok:false,message:'Confirmação necessária.'};
  try{storage.removeItem(RECOVERY_KEY);return {ok:true};}
  catch(_){return {ok:false,message:'Não foi possível remover a cópia.'};}
}
