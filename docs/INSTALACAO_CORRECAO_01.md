# PT-ESTUDO — Correção 1: instalação sem instaladores

**Repositório:** https://github.com/profeniclas-lab/pt-estudo  
**Branch utilizada como referência:** `nova-arquitetura`  
**Commit auditado:** `4ca01bcfdcafaacdfde194968cdb98b7c9d481b1` (26/11/2026).  
**Natureza:** atualização incremental de arquivos completos (sem arquivos de conteúdo pedagógico).

## Antes de atualizar

1. Em **Configurações → Backup**, exporte um JSON do PT-ESTUDO, confira o download e guarde uma cópia fora do navegador. O aplicativo guarda o progresso em `ptEstudo.v1.state`; não transfira arquivos do Dir-Adm.
2. Preferencialmente crie uma branch de teste a partir de `nova-arquitetura` pelo site do GitHub. Se os arquivos centrais tiverem sido modificados depois do commit de referência, compare as versões antes de substituí-los.
3. Extraia este ZIP pela ferramenta nativa do computador.
4. Abra a branch no GitHub, selecione **Add file → Upload files** e arraste as pastas `js` e `docs` (ou os arquivos mantendo os caminhos). Se sua interface não aceitar pastas, abra o caminho de cada pasta no repositório e faça upload dos arquivos dela. Confirme quais serão substituídos.
5. Salve o commit e teste no GitHub Pages; depois incorpore as correções à branch principal do projeto.

## Arquivos para substituir (14 arquivos JavaScript completos)

- `js/app.js`
- `js/start-f25-lote04.js`
- `js/core/persistence-diagnostics.js`
- `js/core/storage-roundtrip-tests.js`
- `js/core/integration-report.js`
- `js/core/reset-progress.js`
- `js/core/drive-backup-guide.js`
- `js/features/phase22-audit.js`
- `js/features/dashboard.js`
- `js/features/maintenance.js`
- `js/features/flashcards.js`
- `js/features/lessons.js`
- `js/features/modules.js`
- `js/features/banco-questoes.js`

## Documentos para adicionar

- `docs/INSTALACAO_CORRECAO_01.md` (este arquivo)
- `docs/RELATORIO_VALIDACAO_CORRECAO_01.md`

**Não há arquivos para apagar.** O antigo `js/core/pt-title-sync.js` pode permanecer no repositório. O novo arquivo de entrada `js/start-f25-lote04.js` já não o importa, porque `js/app.js` define o título correto na origem.

## O que NÃO mudou

- Catálogo dos 27 módulos, 140 subtópicos, 140 aulas e 560 questões.
- IDs, enunciados, alternativas e gabaritos das questões.
- Regras e pesos de aproveitamento; diagnóstico, exercícios, Banco e simulados.
- Chaves de armazenamento, estado real, backup/restauração e Google Drive por botão.
- O repositório original `Dir-Adm`.

## Verificação manual depois do upload

1. Recarregue a aplicação e confira se a aba do navegador informa **PT-ESTUDO** em todas as rotas.
2. Abra **Módulos**: verifique 27 disponíveis e nenhum aviso de futuros lotes.
3. Abra **Flashcards**: o subtítulo e o contador devem informar 140 cartões.
4. Abra uma aula: o título do exemplo deve ser **Exemplo aplicado**.
5. No Banco de Questões, confira que formatos `afirmacoes` e `vfseq` aparecem com rótulos legíveis e que responder/salvar funciona.
6. Abra **Configurações → Diagnóstico e manutenção**: execute os testes de persistência, carregamento, relatório integrado e auditoria. Verifique falhas reais em vez de presumir aprovação.
7. Confira os relatórios TXT: devem conter PT-ESTUDO, sem nome de ADM-ESTUDO nos cabeçalhos.
8. Faça uma resposta em módulo já iniciado e recarregue a página. Confira que a resposta e o aproveitamento foram mantidos.
9. Teste exportação do JSON. Não restaure nem reinicie seu progresso principal apenas para testar.
10. Em perfil de testes separado, valide restauração e conexão com Google Drive (ainda não homologadas aqui).

## Observações importantes

- A verificação automatizada disponível aqui foi feita em arquivos locais e ambientes isolados. Ela **não equivale à homologação no navegador**.
- A **Correção 2** tratará a validação de identificadores administrativos em estruturas aninhadas de backup; este lote não afrouxa a validação atual.
- A **Correção 3** tratará a revisão pedagógica substantiva dos itens autorais.
