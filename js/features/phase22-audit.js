/** Auditoria integrada da Fase 22 atualizada para critérios F23/L04.
 * Somente leitura do progresso real; operações destrutivas usam armazenamentos simulados.
 */
import { STORAGE_KEY } from '../core/storage.js';
import { createInitialState } from '../core/state.js';
import { inspectStoredProgress } from '../core/storage-safety.js';
import { validateProgressBackup } from '../core/progress-backup-validator.js';
import { calculatePartialAchievement, isModuleCompleted, MODULE_PROGRESS_WEIGHTS } from '../core/progress.js';
import { questionStatus, matchesQuestionStatus } from '../core/question-status.js';
import { questionPerformance } from '../core/question-performance.js';
import { MODULES } from '../data/modules.js';
import { renderDashboard, dashboardLayoutChecks } from './dashboard.js';
import { settingsPageChecks } from './settings.js';
import { maintenanceChecks } from './maintenance.js';
import { planProgressReset, executeProgressReset } from '../core/reset-progress.js';
import { runIntegrationReport } from '../core/integration-report.js';

const clone=x=>JSON.parse(JSON.stringify(x));
function mockStorage(seed={}){
  const items=new Map(Object.entries(seed));let writes=0;
  return {getItem:k=>items.has(k)?items.get(k):null,
    setItem(k,v){writes++;items.set(k,String(v));},
    removeItem(k){writes++;items.delete(k);},get writes(){return writes;}};
}
export function runPhase22Audit(settingsRoot){
  const checks=[],groups=[];
  const add=(name,fn)=>{
    try{const r=fn();checks.push({name,passed:typeof r==='object'&&r!==null?!!r.ok:!!r,
      detail:typeof r==='object'&&r!==null?String(r.detail||''):''});}
    catch(e){checks.push({name,passed:false,detail:String(e?.message||e)});}
  };
  const group=(name,fn)=>{const from=checks.length;fn();groups.push({name,checks:checks.slice(from)});};
  let beforeRaw=null,state=null,storageReadable=false;
  try{beforeRaw=window.localStorage.getItem(STORAGE_KEY);storageReadable=true;
    const status=inspectStoredProgress();
    state=status.ok?(status.code==='empty'?createInitialState():status.state):null;
  }catch(_){storageReadable=false;}
  group('Estrutura e navegação',()=>{
    add('Configurações contém backup, reinício e manutenção',()=>
      !!settingsRoot?.querySelector('#settings-backup') &&
      !!settingsRoot?.querySelector('#settings-reset #reset-execute') &&
      !!settingsRoot?.querySelector('#settings-maintenance #maintenance-run'));
    add('Reinício não exige arquivo obrigatório',()=>
      !!settingsRoot?.querySelector('#reset-scope') && !settingsRoot?.querySelector('#reset-backup-file') &&
      !!settingsRoot?.querySelector('#reset-execute'));
    add('Ferramentas de manutenção disponíveis',()=>maintenanceChecks(settingsRoot).ok);
    add('Verificação estrutural de Configurações',()=>settingsPageChecks(settingsRoot).ok);
    add('Controlador de backup disponível',()=>document.documentElement.dataset.f22BackupControls==='ready');
    add('Menu de Configurações disponível',()=>!!document.querySelector('[data-nav="configuracoes"]'));
    add('Dashboard com quatro indicadores, sem controles de backup',()=>{
      if(!state)return {ok:false,detail:'Progresso incompatível; não renderizado.'};
      const detached=document.createElement('div');renderDashboard(detached,clone(state));
      const layout=dashboardLayoutChecks(detached);
      return {ok:layout.ok,detail:layout.checks.filter(x=>!x.passed).map(x=>x.name).join('; ')};
    });
  });
  group('Aproveitamento e critérios F23/L04',()=>{
    add('Pesos somam 100: 20 diagnóstico, 30 aulas, 30 exercícios, 20 banco',()=>
      Object.values(MODULE_PROGRESS_WEIGHTS).reduce((a,b)=>a+b,0)===100 &&
      MODULE_PROGRESS_WEIGHTS.diagnostic===20 &&
      MODULE_PROGRESS_WEIGHTS.exercises===30 && MODULE_PROGRESS_WEIGHTS.bank===20 &&
      MODULE_PROGRESS_WEIGHTS.lessonCompletion+MODULE_PROGRESS_WEIGHTS.lessonSelfAssessment===30);
    const score=(d,l1,l2,e,b)=>calculatePartialAchievement({
      diagnostic:{available:true,score:d},lessonCompletion:{available:true,score:l1},
      lessonSelfAssessment:{available:true,score:l2},exercises:{available:true,score:e},
      bank:{available:true,score:b}});
    add('Nota cheia de 100 pontos',()=>score(100,100,100,100,100).earnedWeightedPoints===100);
    add('Atingir 75 pontos dispensa cobertura integral',()=>{
      const r=calculatePartialAchievement({
        diagnostic:{available:true,score:100},lessonCompletion:{available:true,score:100},
        lessonSelfAssessment:{available:true,score:100},exercises:{available:true,score:100}});
      return r.earnedWeightedPoints===80 && r.coveragePercentage===80 && isModuleCompleted(r);
    });
    add('74,99 pontos não concluem o módulo',()=>!isModuleCompleted({hasData:true,earnedWeightedPoints:74.99}));
    add('Banco sem mínimo: uma questão correta pode render 20 pontos',()=>{
      const r=calculatePartialAchievement({bank:{available:true,score:100,coverage:100}});
      return r.earnedWeightedPoints===20 && r.coveragePercentage===20 && !isModuleCompleted(r);
    });
    add('Banco: 2 acertos entre 4 distintas rendem 10 pontos',()=>{
      const r=calculatePartialAchievement({bank:{available:true,score:50,coverage:100}});
      return r.earnedWeightedPoints===10;
    });
    add('Ausência de atividades não representa nota zero definitiva',()=>{
      const r=calculatePartialAchievement({});return r.percentage===null&&!r.hasData&&!isModuleCompleted(r);
    });
  });
  group('Questões e backup (exemplos isolados)',()=>{
    add('Questões classificadas como respondidas e não respondidas',()=>{
      const q={id:'F23-EXEMPLO',answer:1,options:['A','B']};
      return questionStatus(q,{})==='nao-respondidas' &&
        matchesQuestionStatus(q,{'F23-EXEMPLO':{lastAnswer:1}},'acertadas') &&
        matchesQuestionStatus(q,{'F23-EXEMPLO':{lastAnswer:0}},'erradas');
    });
    add('Desempenho diferencia chute de conhecimento declarado',()=>{
      const qs=[{id:'QA',answer:1,options:['A','B']},{id:'QB',answer:1,options:['A','B']}];
      const s={progress:{questionHistory:{QA:{lastAnswer:1,assessment:'chute'},QB:{lastAnswer:1,assessment:'seguro'}}}};
      const r=questionPerformance(qs,s);return r.answered===2&&r.correct===2&&r.guessedCorrect===1&&r.secureCorrect===1;
    });
    add('Backup de exemplo válido e versão incompatível rejeitada',()=>{
      const s=createInitialState();const b={format:'adm-estudo-progress-backup',backupVersion:1,
        createdAt:new Date().toISOString(),storageKey:STORAGE_KEY,schemaVersion:s.schemaVersion,state:s};
      return validateProgressBackup(b).valid&&!validateProgressBackup({...b,backupVersion:42}).valid;
    });
  });
  group('Reinicialização (armazenamento simulado)',()=>{
    const m=MODULES[0],other=MODULES.find(x=>x.id!==m?.id);
    add('Catálogo contém módulo de teste',()=>!!m?.id);
    if(!m)return;
    const seed=createInitialState();seed.preferences.theme='exemplo';
    seed.progress.modules[m.id]={started:true};if(other)seed.progress.modules[other.id]={started:true};
    if(m.subtopics?.[0])seed.progress.lessons[m.subtopics[0].id]={completed:true};
    const qid=`Q-${m.id}-001-01`;
    seed.progress.questionHistory[qid]={bankAttempt:{lastAnswer:0},lastAnswer:0};
    const before=JSON.stringify(seed);
    add('Plano total zera progresso e conserva preferências',()=>{
      const r=planProgressReset(seed,'total');return r.ok&&!Object.keys(r.state.progress.modules).length&&r.state.preferences.theme==='exemplo';
    });
    add('Plano por módulo remove evidências do Banco associadas ao módulo',()=>{
      const r=planProgressReset(seed,'modulo',m.id);
      return r.ok&&!Object.hasOwn(r.state.progress.modules,m.id)&&
        !Object.hasOwn(r.state.progress.questionHistory,qid)&&
        (!other||Object.hasOwn(r.state.progress.modules,other.id));
    });
    add('Planejamento é puro, não altera estado de entrada',()=>before===JSON.stringify(seed));
    add('Cancelamento não grava nem remove dados',()=>{
      const st=mockStorage({[STORAGE_KEY]:before});const r=executeProgressReset({scope:'total',confirmed:false},st);
      return !r.ok&&st.getItem(STORAGE_KEY)===before&&st.writes===0;
    });
    add('Reinício total simulado limpa aprendizagem',()=>{
      const st=mockStorage({[STORAGE_KEY]:before});const r=executeProgressReset({scope:'total',confirmed:true},st);
      return r.ok&&!Object.keys(JSON.parse(st.getItem(STORAGE_KEY)).progress.modules).length;
    });
    add('Reinício por módulo preserva outros módulos',()=>{
      const st=mockStorage({[STORAGE_KEY]:before});const r=executeProgressReset({scope:'modulo',moduleId:m.id,confirmed:true},st);
      const p=JSON.parse(st.getItem(STORAGE_KEY)).progress;
      return r.ok&&!Object.hasOwn(p.modules,m.id)&&(!other||Object.hasOwn(p.modules,other.id));
    });
  });
  group('Integração e preservação do progresso real',()=>{
    add('Suítes da Fase 20 sem falhas',()=>{
      const r=runIntegrationReport();return {ok:r.summary?.failed===0&&r.summary?.pending===0,
        detail:`${r.summary?.ok||0} aprovadas; ${r.summary?.failed||0} falhas; ${r.summary?.pending||0} pendentes`};
    });
    add('Armazenamento real legível e esquema compatível',()=>storageReadable&&!!state);
    add('Auditoria não escreveu progresso real',()=>storageReadable&&window.localStorage.getItem(STORAGE_KEY)===beforeRaw);
  });
  const failed=checks.filter(x=>!x.passed).length;
  return {version:'F23-L04',generatedAt:new Date().toISOString(),readOnly:true,
    total:checks.length,passed:checks.length-failed,failed,ok:failed===0,groups,
    manualPending:[
      'Exportar e validar um backup JSON real antes de atualizar',
      'Conferir notas do mesmo módulo antes e depois da atualização',
      'Atingir 75 pontos e confirmar saída das pendências mantendo acesso em Módulos',
      'Responder questões no Banco, concluir sessão e verificar permanência dos pontos',
      'Responder a mesma questão nos Exercícios e validar preservação da parcela do Banco',
      'Reiniciar um módulo apenas em perfil de testes e conferir zeragem das parcelas',
      'Restaurar o backup somente em perfil de testes separado, com confirmação',
      'Verificar o mesmo backup no Google Drive em outro dispositivo'
    ],homologated:false};
}
export function formatPhase22Audit(r){
  const lines=[`ADM-ESTUDO — AUDITORIA INTEGRADA ${r.version}`,`Gerado em ${r.generatedAt}`,
    `AUTO: ${r.ok?'APROVADAS':'COM FALHAS'} (${r.passed}/${r.total})`,
    'Somente leitura do progresso real; cenários destrutivos isolados em memória.',''];
  for(const g of r.groups){lines.push('=== '+g.name.toUpperCase()+' ===');
    for(const c of g.checks)lines.push(`${c.passed?'OK':'FALHA'} — ${c.name}${c.detail?' | '+c.detail:''}`);lines.push('');}
  lines.push('=== HOMOLOGAÇÃO MANUAL PENDENTE ===',...r.manualPending.map((x,i)=>`${i+1}. ${x}`),
    '', 'Esta auditoria não executa backups, restaurações ou reinícios reais.');
  return lines.join('\n');
}
export function installPhase22AuditUI(main){
  const anchor=main.querySelector('#settings-maintenance');if(!anchor)return;
  const section=document.createElement('section');section.id='settings-final-audit';section.className='settings-card';
  section.style.cssText='background:var(--surface,#fff);border:1px solid var(--border,#e2e8f0);border-radius:10px;padding:18px;margin:12px 0';
  section.innerHTML=`<h2 style="font-size:17px;margin:0 0 8px">✅ Auditoria integrada — Fase 23 / Lote 4</h2>
    <p>Verifica critérios de aproveitamento, integridade e reinício com testes isolados. Não modifica seu progresso.</p>
    <button type="button" class="btn btn-primary" id="f22-final-run">Executar auditoria integrada</button>
    <button type="button" class="btn" id="f22-final-download" disabled>Baixar relatório TXT</button>
    <pre id="f22-final-result" role="status" aria-live="polite" style="white-space:pre-wrap;max-height:500px;overflow:auto;margin-top:12px"></pre>
    <p class="page-subtitle">Testes no navegador e no Google Drive ainda são necessários para homologação.</p>`;
  anchor.insertAdjacentElement('afterend',section);
  let report='';const output=section.querySelector('#f22-final-result'),download=section.querySelector('#f22-final-download');
  section.querySelector('#f22-final-run').addEventListener('click',()=>{
    try{report=formatPhase22Audit(runPhase22Audit(main));output.textContent=report;download.disabled=false;}
    catch(e){report='';output.textContent='Auditoria interrompida: '+String(e?.message||e);download.disabled=true;}
  });
  download.addEventListener('click',()=>{
    if(!report)return;
    const url=URL.createObjectURL(new Blob([report],{type:'text/plain;charset=utf-8'}));
    const a=document.createElement('a');a.href=url;a.download='adm-estudo-f23-lote04-auditoria.txt';
    document.body.appendChild(a);try{a.click();}finally{a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);}
  });
}
