# PT-ESTUDO — Checklist de homologação manual

**Registre DATA, DISPOSITIVO, NAVEGADOR, RESULTADO (OK/FALHA) e evidência/observação para cada item.**

> **Segurança:** antes de atualizar, exporte o backup JSON do progresso atual. Para restauração/reinício, use **um perfil de navegador de testes**, nunca o perfil com o único progresso existente. Não apague dados do navegador de produção para repetir testes.

## A. Inicialização e interface (desktop e celular)

- [ ] A página do GitHub Pages abre sem tela em branco ou aviso de erro no console.
- [ ] Marca e título exibem **PT-ESTUDO**, sem menções indevidas a ADM-ESTUDO.
- [ ] Navegação: Dashboard, Módulos, Banco, Flashcards, Revisão, Meus Erros, Simulados, Jornada, Estatísticas, Configurações e Sobre.
- [ ] Menu lateral fecha e abre; em tela pequena nenhum conteúdo exige rolagem horizontal indevida.
- [ ] Modo escuro persiste após recarregar a página.
- [ ] Os 27 módulos são acessíveis; POR-01, POR-24, RED-01 e RED-03 abrem sem erro.

## B. Percurso pedagógico em perfil de testes

- [ ] Entrar em POR-01 e responder um flashcard diagnóstico depois de virar o cartão.
- [ ] Concluir uma aula e registrar autoavaliação; recarregar e conferir permanência.
- [ ] Iniciar exercícios de POR-01: **16 questões**; RED-01: **18**; RED-02/RED-03: **20** cada.
- [ ] Em exercícios, responder uma questão correta e uma errada; verificar comentários de todas as alternativas, nota e avaliação de confiança.
- [ ] Em uma questão não C/E, confirmar ordem de alternativas variável; a correção acompanha a alternativa selecionada; em C/E a ordem permanece fixa.
- [ ] No Banco, filtrar **Não respondidas**; responder uma questão; conferir mudança de contagem e histórico após recarga.
- [ ] Verificar separação entre aproveitamento nas respondidas e cobertura total do Banco.
- [ ] Iniciar flashcards por módulo; virar, classificar e conferir persistência/agendamento.
- [ ] Registrar erro e verificar aparecimento em Meus Erros e Revisão; responder uma revisão e verificar agendamento sem duplicação.
- [ ] Iniciar simulado misto de 20 questões; finalizar e conferir resultado, correção e histórico após recarga.
- [ ] Verificar métricas de Jornada, Dashboard e Estatísticas após as atividades; não contar atividades duplicadas.
- [ ] Em módulo de testes com 75 pontos ou mais, confirmar a retirada apenas das **pendências do Dashboard**, sem eliminar o acesso em Módulos.

## C. Persistência, conflitos, backup e recuperação

- [ ] Exportar backup JSON e confirmar que o arquivo contém `pt-estudo-progress-backup` e `appId: pt-estudo`.
- [ ] Verificar arquivo exportado em Configurações; usar outro perfil para testar restauração.
- [ ] Restaurar backup somente no perfil de testes; conferir que progresso, aulas, questões e erros são restaurados.
- [ ] Tentar importar um JSON administrativo de teste; deve ser **rejeitado sem sobrescrever dados**.
- [ ] Conferir criação/preservação da cópia anterior após restauração válida.
- [ ] Abrir duas abas do perfil de testes; alterar progresso numa e tentar salvar estado antigo na outra: deve bloquear sobrescrita e orientar recarga.
- [ ] Reiniciar apenas um módulo no perfil de testes e verificar que outros módulos permanecem intactos.

## D. Google Drive (somente com sua autorização, no perfil de testes)

- [ ] Em Configurações, botão **Conectar conta Google** inicia OAuth com origem autorizada.
- [ ] **Salvar no Google Drive** cria ou atualiza arquivo correto do PT-ESTUDO com confirmação explícita.
- [ ] O fluxo de atualização verifica o conteúdo e preserva uma cópia da versão remota anterior quando substitui.
- [ ] **Restaurar do Google Drive** em outro perfil/dispositivo recupera os mesmos dados após confirmação.
- [ ] Cancelar operação não substitui o progresso local nem remoto.
- [ ] Nenhum arquivo ADM-ESTUDO é alterado; não ocorre mesclagem automática entre dispositivos.

## E. Evidências para encerramento

- [ ] Na aba **Actions**, workflow **PT-ESTUDO - Homologacao automatizada** aparece e conclui com status verde.
- [ ] Anexar captura dos resultados da Action e do checklist preenchido.
- [ ] Corrigir qualquer falha nova, repetir as verificações pertinentes e registrar o commit final.

**Critério de aprovação:** A + B + C + D + E concluídos, sem falhas críticas. Se qualquer item ficar pendente, não registrar “homologado definitivamente”.
