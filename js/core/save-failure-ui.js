/** Fase 20 Lote 1: aviso persistente de falha, sem afirmar salvamento. */
let blocked = false;
export function isSaveBlocked() { return blocked; }
export function reportSaveFailure(result, state) {
  blocked = true;
  const old = document.getElementById('adm-save-failure');
  if (old) old.remove();
  const panel = document.createElement('section');
  panel.id = 'adm-save-failure';
  panel.setAttribute('role','alertdialog');
  panel.setAttribute('aria-modal','true');
  panel.setAttribute('aria-labelledby','adm-save-failure-title');
  panel.style.cssText = 'position:fixed;inset:0;z-index:2147483647;background:rgba(0,0,0,.83);display:flex;align-items:center;justify-content:center;padding:20px';
  const card = document.createElement('div');
  card.style.cssText = 'max-width:580px;background:white;color:#171717;border-radius:12px;padding:24px;font:16px/1.5 system-ui;max-height:90vh;overflow:auto';
  const title = document.createElement('h2'); title.id='adm-save-failure-title'; title.textContent='Atenção: o progresso NÃO foi salvo';
  const message = document.createElement('p'); message.textContent = result?.message || result?.error?.message || 'O armazenamento recusou a gravação.';
  const guidance = document.createElement('p'); guidance.textContent='Interrompa os estudos nesta aba. Baixe a cópia de emergência das informações em memória. Ela NÃO substitui o backup validado do aplicativo. Após guardar a cópia, abra novamente o aplicativo em uma aba atualizada e confira o progresso salvo antes de continuar.';
  const download = document.createElement('button'); download.type='button'; download.textContent='Baixar cópia de emergência (JSON)';
  download.style.cssText='padding:12px;margin:8px 8px 8px 0;cursor:pointer';
  download.addEventListener('click',()=>{
    const blob=new Blob([JSON.stringify({kind:'adm-estudo-unsaved-emergency',warning:'DADOS EM MEMÓRIA, NÃO CONFIRMADOS COMO SALVOS',createdAt:new Date().toISOString(),state},null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='adm-estudo-emergencia-nao-salvo.json'; a.click(); setTimeout(()=>URL.revokeObjectURL(url),30000);
  });
  const note=document.createElement('p');note.textContent='Para retomar, abra outra aba ou recarregue esta página SOMENTE após preservar o que for necessário. Não importe o JSON de emergência diretamente sem validação.';
  card.append(title,message,guidance,download,note); panel.append(card); document.body.append(panel);download.focus();
}
