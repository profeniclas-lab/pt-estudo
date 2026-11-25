/** ADM-ESTUDO — Fase 22-A / Lote 2: página informativa Sobre.
 * Exibição somente leitura; nenhum dado de progresso é alterado.
 */
export function renderAbout(main) {
  main.innerHTML = `<section class="module-detail" aria-labelledby="about-title">
    <h1 class="page-title" id="about-title">Sobre o ADM-ESTUDO</h1>
    <p class="page-subtitle">Aplicativo de estudos para Administração e Direito Administrativo, voltado à preparação para concursos públicos.</p>
    <div class="cards-grid">
      <article class="stat-card"><div class="stat-label">Aplicativo</div><div class="stat-value" style="font-size:18px">ADM-ESTUDO</div><p class="stat-hint">Versão 2.0 · arquitetura modular</p></article>
      <article class="stat-card"><div class="stat-label">Identidade visual</div><div class="stat-value" style="font-size:18px">Energia e aprendizagem</div><p class="stat-hint">Modo claro e escuro disponível no cabeçalho</p></article>
    </div>
    <article class="module-stage">
      <h2>Como funciona</h2>
      <p>O estudo é organizado em módulos, com diagnóstico, aulas, exercícios de aprendizagem, questões e revisões. O banco de flashcards é complementar.</p>
      <p>O índice de aproveitamento e os indicadores de revisão são calculados a partir dos registros de estudo disponíveis no aplicativo.</p>
    </article>
    <article class="module-stage">
      <h2>Seu progresso</h2>
      <p>Atualmente, o progresso pedagógico é salvo localmente neste navegador. Ele não é sincronizado automaticamente entre aparelhos.</p>
      <p>Em Configurações, é possível exportar um arquivo JSON de backup e conferir as orientações para guardar cópias no Google Drive.</p>
      <button type="button" class="btn btn-primary" data-nav="configuracoes">Abrir Configurações</button>
    </article>
    <article class="module-stage">
      <h2>Código e desenvolvimento</h2>
      <p>O projeto utiliza HTML, CSS e JavaScript, com os conteúdos pedagógicos separados das funcionalidades da interface.</p>
      <p><a href="https://github.com/profeniclas-lab/Dir-Adm/tree/nova-arquitetura" target="_blank" rel="noopener noreferrer">Ver repositório e branch nova-arquitetura no GitHub</a></p>
      <button type="button" class="btn" data-nav="dashboard">Voltar ao Dashboard</button>
    </article>
  </section>`;
}
