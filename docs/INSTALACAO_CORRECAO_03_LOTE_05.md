# PT-ESTUDO — Correção 3 · Lote 5 (POR-19 a POR-23)

## 1. Origem e escopo

Pacote incremental elaborado sobre os cinco arquivos de questões publicados em `profeniclas-lab/pt-estudo`, branch `nova-arquitetura`, equivalentes em SHA Git aos materiais dos Lotes 7 e 8. Não altera `modules.js`, `lessons.js`, `diagnostics.js`, o motor de questões, armazenamento, progresso ou OAuth.

## 2. Faça uma cópia antes de instalar

1. Abra o aplicativo e exporte o backup JSON atual em **Configurações**.
2. Guarde o arquivo em outro local; se utilizar o Google Drive, confira que o arquivo foi efetivamente salvo.
3. Finalize ou encerre sessões em andamento de POR-19 a POR-23 para evitar continuar uma questão cujo texto foi revisado durante a sessão.
4. Preferencialmente abra uma branch de teste a partir de `nova-arquitetura` antes de substituir os arquivos.

> **Compatibilidade:** todos os IDs, alternativas corretas pelos respectivos índices, tipos, níveis e subtópicos permanecem iguais. A redação literal de alguns enunciados, alternativas e comentários mudou. Os registros históricos atuais não recuperam automaticamente a redação antiga; o arquivo de snapshot editorial foi incluído para consulta. Não delete nem migre o progresso para instalar este lote.

## 3. Substitua estes CINCO arquivos completos

- `js/data/portugues/por-19-questions.js`
- `js/data/portugues/por-20-questions.js`
- `js/data/portugues/por-21-questions.js`
- `js/data/portugues/por-22-questions.js`
- `js/data/portugues/por-23-questions.js`

Cada um deve ser colocado exatamente no mesmo caminho dentro do repositório. **Não** envie o ZIP fechado para a raiz do GitHub.

## 4. Adicione os documentos e testes

- `docs/C03_L05_SNAPSHOT_ORIGINAL_100_QUESTOES.json`
- `docs/C03_L05_RESOLUCOES_100_QUESTOES.json`
- `docs/C03_L05_RESOLUCOES_100_QUESTOES.tsv`
- `docs/C03_L05_REGISTRO_EDITORIAL_100_QUESTOES.json`
- `docs/C03_L05_DADOS_VALIDACAO.json`
- `docs/RELATORIO_PEDAGOGICO_CORRECAO_03_LOTE_05.md`
- `docs/INSTALACAO_CORRECAO_03_LOTE_05.md`
- `tests/c03-lote05-por19-a-23.test.mjs`
- `.github/workflows/c03-lote05-validacao.yml`

Se o GitHub não exibir a pasta `.github/workflows`, você pode criá-la usando o caminho completo para o primeiro arquivo.

## 5. Verificações depois do upload

1. Na aba **Actions**, abra **PT-ESTUDO — Correção 3 Lote 5** e confira a execução. Os testes usam a infraestrutura do GitHub; não é necessário instalar Node no computador.
2. No GitHub Pages, abra POR-19, POR-20, POR-21, POR-22 e POR-23; confira exemplos, desafios e comentários após selecionar uma alternativa.
3. No Banco de Questões e nos Exercícios, responda questões sem repetir a alternativa aparente; confirme que o comentário exibido acompanha o **conteúdo** da alternativa correta mesmo após embaralhamento.
4. Faça o mesmo na Revisão de Erros e no Simulado. Para itens `ce`, a ordem deverá ser sempre `CERTO`/`ERRADO`.
5. Confira se o mesmo progresso e as mesmas porcentagens existentes antes da atualização continuam presentes.
6. Faça uma exportação de backup **depois** do teste; em perfil separado, teste a importação e o Google Drive manual, sem sobrescrever seu perfil principal.

## 6. Limites

- Os ensaios de permutação e sessão do ZIP são simulações baseadas nos contratos do motor; não substituem teste na interface.
- A revisão semântica foi produzida com assistência de IA e deve receber conferência independente antes da homologação pedagógica final.
- O ZIP não acrescenta versionamento automático por tentativa; o snapshot preserva apenas a versão original das questões para auditoria editorial.
