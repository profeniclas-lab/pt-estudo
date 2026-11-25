/** Fase 18 — Lote 5. Orientação para cópia manual, sem acesso à conta Google. */
export const GOOGLE_DRIVE_URL = 'https://drive.google.com/drive/u/0/my-drive';

export function renderDriveBackupGuide() {
  return `<section class="card" aria-label="Backup no Google Drive" style="margin:16px 0;padding:16px">
    <h2 class="section-title">Guardar backup no Google Drive</h2>
    <p>Seu progresso fica salvo neste navegador. Para protegê-lo contra perda de dados ou troca de dispositivo, guarde uma cópia JSON em seu Google Drive.</p>
    <ol>
      <li>Clique em <strong>Exportar backup do progresso (.json)</strong>, acima, e confirme que o arquivo foi baixado.</li>
      <li>Abra o Google Drive pelo link abaixo e entre na conta desejada.</li>
      <li>No Drive, selecione <strong>Novo → Upload de arquivo</strong> e escolha o JSON recém-baixado.</li>
      <li>Espere o envio terminar e confira se o arquivo aparece na pasta.</li>
      <li>Repita o procedimento após novas sessões de estudo importantes.</li>
    </ol>
    <p><a class="btn btn-secondary" href="${GOOGLE_DRIVE_URL}" target="_blank" rel="noopener noreferrer">Abrir meu Google Drive</a></p>
    <p class="page-subtitle">O aplicativo não envia arquivos automaticamente ao Google Drive e não acessa sua conta Google. O arquivo contém seu histórico de estudos: mantenha-o privado.</p>
    <details><summary>Como recuperar em outro dispositivo?</summary><p>No Google Drive, baixe o JSON para o dispositivo novo. Depois, no ADM-ESTUDO, use a opção de verificar o backup e, após conferir, a opção de restaurar. A restauração substitui o progresso local existente.</p></details>
  </section>`;
}
