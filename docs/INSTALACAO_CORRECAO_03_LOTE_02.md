# PT-ESTUDO — Correção 3, Lote 2 (cinco módulos)

**Abrangência:** POR-04, POR-05, POR-06, POR-07, POR-08. Revisão editorial de 100 questões autorais existentes.
**Repositório:** https://github.com/profeniclas-lab/pt-estudo
**Branch de referência:** `nova-arquitetura`.

## Antes de instalar

1. Faça backup JSON do progresso atual pelo aplicativo. Confira que o arquivo existe fora do navegador.
2. Termine sessões em andamento de POR-04 a POR-08, principalmente se já houver alternativas escolhidas: parte das alternativas foi reescrita mantendo a resposta correta pelo conteúdo.
3. Recomenda-se criar uma branch de testes a partir de `nova-arquitetura`.
4. Confirme que os lotes 1 a 9 do conteúdo e as Correções 1 e 2 estão presentes. Este pacote não restaura arquivos ausentes.

## Substituir no GitHub (arquivos completos)

- `js/data/portugues/por-04-questions.js`
- `js/data/portugues/por-05-questions.js`
- `js/data/portugues/por-06-questions.js`
- `js/data/portugues/por-07-questions.js`
- `js/data/portugues/por-08-questions.js`

## Adicionar no GitHub (documentos e testes)

- `docs/AUDITORIA_100_GABARITOS.json` — fundamentação individual e resposta textual para cada questão
- `docs/RESOLUCOES_100_QUESTOES.tsv` — tabela de leitura e busca por ID
- `docs/SNAPSHOT_PRE_REVISAO_100_QUESTOES.json` — texto completo original de todas as 100 questões
- `docs/LOG_EDITORIAL_CORRECAO_03_LOTE_02.json` — campos antes/depois de cada item
- `docs/DADOS_AUDITORIA_C03_LOTE02.json` — estatísticas consolidadas
- `docs/RELATORIO_PEDAGOGICO_CORRECAO_03_LOTE_02.md` — achados, critérios e limitações
- `docs/CONTRATO_DE_PROGRESSO_C03_LOTE02.md` — preservação e ressalvas do histórico
- `docs/ROTEIRO_HOMOLOGACAO_C03_LOTE02.md` — testes manuais
- `docs/INSTALACAO_CORRECAO_03_LOTE_02.md` — este arquivo
- `tests/pt-pedagogia-correcao03-lote02.test.mjs`
- `.github/workflows/pt-estudo-correcao03-lote02.yml`

**Não substituir:** `js/data/questions.js`, os agregadores, arquivos de aulas e diagnóstico, `js/core/storage.js`, backups, OAuth ou outros módulos. A Correção 3, Lote 1 (POR-01 a POR-03) permanece intacta.

## Conferência

Abra GitHub > Actions > `PT-ESTUDO - Correcao 3 Lote 2 (POR-04 a POR-08)` e execute `Run workflow` na branch atual. Os testes rodam nos servidores do GitHub; não é preciso instalar Node.js no computador.

Faça os testes do arquivo `docs/ROTEIRO_HOMOLOGACAO_C03_LOTE02.md` usando um perfil de navegador de testes. Não reinicie progresso real para homologar esta correção.

## Segurança dos registros anteriores

Todos os IDs, índices de alternativa correta, tipos, dificuldades e número de alternativas foram preservados. Isso preserva a lógica de acerto/erro dos históricos que usam índices originais. Porém **o motor antigo não arquiva por tentativa uma cópia do texto da alternativa**. Por isso, se a redação mudou, consultar depois o item reeditado não reproduzirá literalmente a versão vista no passado. A versão anterior está documentada no snapshot JSON, mas não é exibida automaticamente no app. Versionamento de itens e de tentativas é melhoria futura, não promessa deste pacote.

**Nenhum progresso de usuário foi gravado, importado, apagado ou reiniciado durante a preparação.**
