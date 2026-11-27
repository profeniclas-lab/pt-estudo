# Instalação — Correção 3, Lote 4 (POR-14 a POR-18)

**Repositório:** `profeniclas-lab/pt-estudo` — branch `nova-arquitetura`.

## Antes de atualizar

1. Abra **Configurações** no PT-ESTUDO e exporte um backup JSON do progresso; guarde-o fora do navegador, preferencialmente também no Google Drive.
2. Termine sessões abertas de exercícios, revisão, Banco de Questões ou simulados que usem questões de POR-14 a POR-18. As respostas mantêm os índices, mas o texto atual pode diferir da versão vista em sessão antiga.
3. Se possível, crie uma branch de teste no GitHub a partir da versão atual, para homologar antes de publicar.

## Substitua exatamente estes cinco arquivos completos

```
js/data/portugues/por-14-questions.js
js/data/portugues/por-15-questions.js
js/data/portugues/por-16-questions.js
js/data/portugues/por-17-questions.js
js/data/portugues/por-18-questions.js
```

## Adicione os relatórios e o teste

```
docs/C03_L04_DADOS_VALIDACAO.json
docs/C03_L04_REGISTRO_EDITORIAL_100_QUESTOES.json
docs/C03_L04_RESOLUCOES_100_QUESTOES.json
docs/C03_L04_RESOLUCOES_100_QUESTOES.tsv
docs/C03_L04_SNAPSHOT_ORIGINAL_100_QUESTOES.json
docs/INSTALACAO_CORRECAO_03_LOTE_04.md
docs/RELATORIO_PEDAGOGICO_CORRECAO_03_LOTE_04.md
tests/c03-lote04-por14-a-18.test.mjs
.github/workflows/c03-lote04-validacao.yml
```

**Total do ZIP: 14 arquivos**: cinco substituições e nove novos arquivos de documentação/testes/automação.

Não substitua nenhum arquivo de `js/core`, `js/features` ou `js/data/questions.js`. Os carregadores existentes mantêm as mesmas importações. Não importe os snapshots JSON como questões ativas; eles são apenas o histórico editorial da revisão.

## Testes mínimos após upload

1. Entre em POR-14 a POR-18 e confira aula, diagnóstico e Banco.
2. Inicie os exercícios de cada módulo: 10 questões médias + seis difíceis, sem repetição na sessão.
3. Confira que alternativas de múltipla escolha apareçam embaralhadas, enquanto CERTO/ERRADO permaneça em ordem fixa.
4. Em questões corrigidas, abra explicação e comentários; confirme que o comentário certo acompanha a alternativa certa, independentemente da letra sorteada.
5. Salve uma resposta de teste, recarregue a página e confira que o histórico permanece. Não use seu progresso principal para testes destrutivos.
6. Confira Dashboard, Estatísticas, Banco de Erros e Simulados sem perda de dados.
7. Em navegador/perfil de testes separado, valide backup/restauração e Google Drive por botão.

O workflow `c03-lote04-validacao.yml` executa estes testes automaticamente após upload na branch `nova-arquitetura`, ou manualmente em **Actions → Run workflow**, sem instalar Node.js no computador. O comando equivalente em um checkout completo do repositório é:

```
node tests/c03-lote04-por14-a-18.test.mjs
.github/workflows/c03-lote04-validacao.yml
```

## Preservação

- IDs, índices, tipos, dificuldades e classificação autoral preservados para as 100 questões.
- A versão literal antiga está em `docs/C03_L04_SNAPSHOT_ORIGINAL_100_QUESTOES.json`.
- Nenhuma alteração no mecanismo de progresso, OAuth, armazenamento, simulado ou UI.
- Se o app apresentar comportamento inesperado, não restaure cegamente um backup sobre outro: preserve ambas as cópias e investigue.
