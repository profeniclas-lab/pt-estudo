/** PT-ESTUDO — Correção 2. Testes locais em memória; não acessam dados reais. */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState } from '../js/core/state.js';
import { STORAGE_KEY } from '../js/core/storage.js';
import { BACKUP_FORMAT, validateProgressBackup } from '../js/core/progress-backup-validator.js';
import { inspectProgressIdentity } from '../js/core/progress-identity.js';
import { inspectStoredProgress, validateStateForSaving } from '../js/core/storage-safety.js';
import { normalizeRecoveryInput, RECOVERY_KEY, protectCurrentProgress } from '../js/core/progress-recovery-guard.js';
import { planRepeatRestore, restoreProgressBackup } from '../js/core/progress-restore.js';
import { establishProgressBaseline } from '../js/core/progress-conflict-guard.js';
import { runBackupIntegrityChecks } from '../js/core/backup-integrity-tests.js';
import { buildDriveBackup } from '../js/core/google-drive-backup.js';
import { planProgressReset, executeProgressReset } from '../js/core/reset-progress.js';

const clone = x => JSON.parse(JSON.stringify(x));
const seed = () => {
  const s=createInitialState();
  s.progress.modules['POR-01']={started:true};
  s.progress.lessons['POR-01-001']={completed:true,rating:'sei'};
  s.progress.diagnostics['POR-01']={answers:{'POR-01-001':'sei'}};
  s.progress.questionHistory['Q-POR-01-001-01']={lastAnswer:0};
  s.progress.flashcards['POR-01-001']={rating:'sei'};
  s.progress.reviewQueue=[{questionId:'Q-POR-01-001-01',moduleId:'POR-01'}];
  s.progress.questionBank={filter:{moduleId:'POR-01'},session:{ids:['Q-POR-01-001-01'],answers:{'Q-POR-01-001-01':0}}};
  s.progress.simulados={active:{ids:['Q-POR-01-001-01'],orders:{'Q-POR-01-001-01':[0,1]}},history:[{area:'POR',ids:['Q-POR-01-001-01']}]};
  s.progress.journey={events:[{id:'question:2026-11-26:Q-POR-01-001-01',itemId:'Q-POR-01-001-01'}]};
  return s;
};
const envelope = s => ({format:BACKUP_FORMAT,backupVersion:1,createdAt:new Date().toISOString(),storageKey:STORAGE_KEY,schemaVersion:s.schemaVersion,state:s});
function mem(seed={}) {
  const entries=new Map(Object.entries(seed));let writes=0;
  return {getItem:k=>entries.has(k)?entries.get(k):null,
    setItem(k,v){writes++;entries.set(k,String(v));},removeItem(k){writes++;entries.delete(k);},
    get writes(){return writes},snapshot:()=>JSON.stringify([...entries])};
}
const contaminate = [
  ['modules (chave)', s => {s.progress.modules['ADM-01']={started:true};}],
  ['diagnostics (chave)',s => {s.progress.diagnostics['AP-12']={answers:{}};}],
  ['lessons (chave)',s => {s.progress.lessons['DA-17-001']={completed:true};}],
  ['questionHistory (chave)',s => {s.progress.questionHistory['Q-ADM-01-001-01']={};}],
  ['flashcards (chave)',s => {s.progress.flashcards['ADM-01-001']={};}],
  ['reviewSchedule (chave)',s => {s.progress.reviewSchedule={'Q-DA-17-001-01':{dueAt:new Date().toISOString()}};}],
  ['reviewQueue (valor)',s => {s.progress.reviewQueue=[{moduleId:'ADM-01'}];}],
  ['errors (valor)',s => {s.progress.errors=[{questionId:'Q-AP-12-001-02'}];}],
  ['simulados.active.ids',s => {s.progress.simulados.active.ids.push('Q-ADM-01-001-01');}],
  ['simulados.history.area',s => {s.progress.simulados.history[0].area='DA';}],
  ['simulados.history.ids',s => {s.progress.simulados.history[0].ids=['Q-DA-17-001-01'];}],
  ['simulados.active.orders (chave)',s => {s.progress.simulados.active.orders['Q-ADM-01-001-01']=[0,1];}],
  ['questionBank.session.ids',s => {s.progress.questionBank.session.ids.push('Q-AP-11-001-01');}],
  ['questionBank.filter.moduleId',s => {s.progress.questionBank.filter.moduleId='ADM-01';}],
  ['questionBank.session.answers (chave)',s => {s.progress.questionBank.session.answers['Q-DA-17-001-01']=0;}],
  ['flashcardStudy.filters.module',s => {s.progress.flashcardStudy={filters:{module:'ADM-01'}};}],
  ['adaptiveReview (chave composta)',s => {s.progress.adaptiveReview={'question:Q-DA-17-001-01':{}};}],
  ['journey.events.id (prefixo com data)',s => {s.progress.journey.events[0].id='question:2026-11-26:Q-ADM-01-001-01';}],
  ['navigation.selectedModuleId',s => {s.navigation.selectedModuleId='ADM-01';}],
  ['navigation.selectedSubtopicId',s => {s.navigation.selectedSubtopicId='DA-17-001';}],
];

test('PT legítimo com dados aninhados é aceito para backup, salvamento e recuperação',()=>{
  const state=seed();
  assert.equal(validateProgressBackup(envelope(state)).valid,true);
  assert.equal(validateStateForSaving(state),true);
  assert.equal(normalizeRecoveryInput(state).ok,true);
  assert.equal(inspectProgressIdentity(state).ok,true);
  assert.equal(buildDriveBackup(JSON.stringify(state)).validation.valid,true);
});

test('Textos livres e comentários sobre Administração não são falsos positivos',()=>{
  const state=seed();
  state.progress.questionHistory['Q-POR-01-001-01'].note='Na questão da banca, o exemplo menciona ADM-01 e Q-ADM-01-001-01.';
  state.progress.errors=[{questionId:'Q-POR-01-001-01',description:'Estude a expressão "AP-13" no contexto.'}];
  state.metadata.description='Exemplos: DA-17 e Q-ADM-01-001-01';
  assert.equal(validateProgressBackup(envelope(state)).valid,true);
});

for (const [label,mutate] of contaminate) {
  test(`Referência administrativa aninhada bloqueada: ${label}`,()=>{
    const state=seed();mutate(state);
    const raw=JSON.stringify(state);
    const backup=validateProgressBackup(envelope(state));
    assert.equal(backup.valid,false);
    assert.equal(validateStateForSaving(state),false);
    assert.equal(normalizeRecoveryInput(state).ok,false);
    const storage=mem({[STORAGE_KEY]:raw}),before=storage.snapshot();
    assert.equal(inspectStoredProgress(storage).ok,false);
    assert.equal(storage.snapshot(),before);
    assert.equal(storage.writes,0);
    assert.throws(()=>buildDriveBackup(raw),/incompatível/);
  });
}

test('Envelope de backup ADM é recusado independentemente do conteúdo',()=>{
  const backup=envelope(seed());backup.format='adm-estudo-progress-backup';
  assert.equal(validateProgressBackup(backup).valid,false);
  assert.equal(normalizeRecoveryInput(backup).ok,false);
});

test('Inspeção não escreve em chave administrativa compartilhada',()=>{
  const local=JSON.stringify(seed());
  const other='{"appId":"adm-estudo","important":true}';
  const storage=mem({[STORAGE_KEY]:local,'admEstudo.v2.state':other});
  assert.equal(inspectStoredProgress(storage).ok,true);
  assert.equal(storage.getItem('admEstudo.v2.state'),other);
  assert.equal(storage.writes,0);
});

test('Suíte integrada de integridade de backup e recuperação passa em armazenamento isolado',()=>{
  const storage=mem({[STORAGE_KEY]:JSON.stringify(seed())});
  const result=runBackupIntegrityChecks(storage);
  assert.equal(result.ok,true,JSON.stringify(result.checks.filter(x=>!x.pass)));
});

test('Restauração preparada recusa estado administrativo sem modificar recuperação prévia',()=>{
  const good=seed(),old=JSON.stringify(good),previous=mem({[STORAGE_KEY]:old});
  const poisoned=clone(good);poisoned.progress.simulados.active.ids.push('Q-ADM-01-001-01');
  const prepared={ok:true,backup:envelope(poisoned)};
  assert.equal(planRepeatRestore(prepared,old,null).ok,false);
  assert.equal(previous.writes,0);
  assert.equal(previous.getItem(STORAGE_KEY),old);
});

test('Restauração repetida preserva a primeira cópia de recuperação',()=>{
  const old=JSON.stringify(seed());
  const first=seed();first.progress.modules['POR-02']={started:true};
  const second=clone(first);second.progress.modules['RED-01']={started:true};
  const storage=mem({[STORAGE_KEY]:old});
  const prepared1={ok:true,backup:envelope(first)};
  const prepared2={ok:true,backup:envelope(second)};
  establishProgressBaseline(old);
  const oldWindow=globalThis.window,oldDocument=globalThis.document,oldCreate=URL.createObjectURL,oldRevoke=URL.revokeObjectURL,oldTimer=globalThis.setTimeout;
  let downloads=0;
  try {
    globalThis.window={localStorage:storage,addEventListener:()=>{}};
    globalThis.document={body:{appendChild:()=>{}},createElement:()=>({click:()=>{downloads++},remove:()=>{}})};
    URL.createObjectURL=()=> 'blob:fake-test';URL.revokeObjectURL=()=>{};
    globalThis.setTimeout=()=>0;
    const r1=restoreProgressBackup(prepared1,true,storage);
    assert.equal(r1.ok,true,r1.message);
    assert.deepEqual(JSON.parse(storage.getItem(STORAGE_KEY)).progress.modules,first.progress.modules);
    assert.equal(storage.getItem(RECOVERY_KEY),old);
    const r2=restoreProgressBackup(prepared2,true,storage);
    assert.equal(r2.ok,true,r2.message);
    assert.deepEqual(JSON.parse(storage.getItem(STORAGE_KEY)).progress.modules,second.progress.modules);
    assert.equal(storage.getItem(RECOVERY_KEY),old);
    assert.equal(downloads,2);
  } finally {
    globalThis.window=oldWindow;globalThis.document=oldDocument;
    URL.createObjectURL=oldCreate;URL.revokeObjectURL=oldRevoke;
    globalThis.setTimeout=oldTimer;
  }
});

test('Conflito entre leituras bloqueia restauração e preserva estado novo',()=>{
  const old=JSON.stringify(seed());
  const current=seed();current.progress.modules['POR-02']={started:true};
  const newer=JSON.stringify(current),storage=mem({[STORAGE_KEY]:old});
  establishProgressBaseline(old);
  storage.setItem(STORAGE_KEY,newer);const writes=storage.writes;
  const result=restoreProgressBackup({ok:true,backup:envelope(seed())},true,storage);
  assert.equal(result.ok,false);
  assert.equal(storage.getItem(STORAGE_KEY),newer);
  assert.equal(storage.writes,writes);
});

test('Reinício por módulo usa IDs PT e preserva outros módulos no armazenamento simulado',()=>{
  const original=seed();original.progress.modules['POR-02']={started:true};
  const raw=JSON.stringify(original),storage=mem({[STORAGE_KEY]:raw,'admEstudo.v2.state':'INTOCÁVEL'});
  const preview=planProgressReset(original,'modulo','POR-01');
  assert.equal(preview.ok,true);
  assert.equal(preview.state.progress.modules['POR-01'],undefined);
  assert.equal(preview.state.progress.modules['POR-02'].started,true);
  assert.equal(JSON.stringify(original),raw);
  const response=executeProgressReset({scope:'modulo',moduleId:'POR-01',confirmed:true},storage);
  assert.equal(response.ok,true);
  const loaded=JSON.parse(storage.getItem(STORAGE_KEY));
  assert.equal(loaded.progress.modules['POR-01'],undefined);
  assert.equal(loaded.progress.modules['POR-02'].started,true);
  assert.equal(storage.getItem('admEstudo.v2.state'),'INTOCÁVEL');
});


test('Reinício não modifica estado híbrido com identificador administrativo escondido',()=>{
  const contaminated=seed();contaminated.progress.reviewQueue=[{moduleId:'ADM-01'}];
  const raw=JSON.stringify(contaminated),storage=mem({[STORAGE_KEY]:raw});
  const before=storage.snapshot();
  const result=executeProgressReset({scope:'total',confirmed:true},storage);
  assert.equal(result.ok,false);
  assert.equal(storage.snapshot(),before);
  assert.equal(storage.writes,0);
});

test('Reinício detecta mudança externa entre inspeção e substituição',()=>{
  const raw=JSON.stringify(seed());let reads=0;
  const storage=mem({[STORAGE_KEY]:raw});
  const originalGet=storage.getItem.bind(storage);
  storage.getItem=key=>{if(key===STORAGE_KEY && ++reads===3){storage.setItem(STORAGE_KEY,JSON.stringify({...seed(),metadata:{createdAt:'2026-01-01',updatedAt:'2026-02-02'}}));}return originalGet(key);};
  const result=executeProgressReset({scope:'total',confirmed:true},storage);
  assert.equal(result.ok,false);
  assert.notEqual(originalGet(STORAGE_KEY),raw);
});
