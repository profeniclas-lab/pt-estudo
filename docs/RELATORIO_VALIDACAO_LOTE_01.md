# PT-ESTUDO — relatório de validação do Lote 1

Data de elaboração: 25 de novembro de 2026.

## Escopo

Três módulos publicados: POR-01, POR-02, POR-03, com cinco subtópicos cada. 24 módulos adicionais aparecem apenas no planejamento, com 27 módulos e 140 subtópicos previstos ao todo (Redação Oficial reorganizada em três módulos com 6, 7 e 7 subtópicos).

**Dados ativos:** 15 aulas, 15 flashcards diagnósticos, 60 questões autorais (30 médias e 30 difíceis). Em cada subtópico há uma média de Certo/Errado, uma média variada e duas difíceis. Por tentativa de exercícios: 2×5+6=16 questões, sem IDs repetidos.

## Testes efetivamente executados

- `node --check` em todos os arquivos JavaScript do ZIP.
- Importação efetiva em Node dos módulos de dados (`modules.js`, `lessons.js`, `diagnostics.js`, `questions.js`).
- **689 verificações estruturais automáticas**: IDs, vínculos, presença e profundidade mínima dos campos, gabaritos como índices válidos, comentário para cada opção, formato C/E, 27/3/24, aulas, diagnósticos e proporções por subtópico/módulo.
- **18 verificações funcionais de isolamento com localStorage simulado**, usando módulos reais de `storage.js`, `state.js`, `storage-safety.js`, `progress-backup-validator.js`, `progress-recovery-guard.js` e `google-drive-backup.js`. A chave sentinela `admEstudo.v2.state` foi conservada e nunca houve escrita/remoção nela. Backups ADM e estados brutos com appId diferente foram rejeitados.
- Inspeção de integridade do ZIP e nomes de arquivos.

## O que os testes NÃO comprovam

Não se comprovou por execução a integração completa em navegador, a autenticação OAuth real, a execução dos simulados com todas as interfaces, nem a validade pedagógica independente de cada resposta. Os testes não substituem verificação manual. Antes de publicar a versão no seu uso diário, faça os testes descritos em `INSTALACAO_LOTE_01.md` numa branch e perfil de navegador de teste.

## Decisões de segurança

- O arquivo `js/app.js` e seu ciclo de eventos foram preservados sem reescrita.
- A carga de arquivos administrativos da Fase 25 foi desativada na entrada.
- O import administrativo da Fase 23 foi neutralizado para impedir sua leitura direta da chave do Dir-Adm.
- O armazenamento e os backups do PT foram mantidos em namespace independente.
- Não houve publicação nem alteração direta em GitHub; o pacote é destinado a upload manual.
