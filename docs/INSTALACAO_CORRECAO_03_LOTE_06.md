# Instalação — Correção 3 / Lote 6 — PT-ESTUDO

**Branch:** `nova-arquitetura` de https://github.com/profeniclas-lab/pt-estudo

Este ZIP é incremental: use o aplicativo atual com os lotes 1 a 9 e as Correções 1–3/L1–L5 previamente instaladas. Antes de começar, exporte o progresso JSON e **finalize as sessões abertas** de POR-24 e RED-01 a RED-03. Não reinstale o aplicativo nem substitua `localStorage`.

## 1. SUBSTITUIR os quatro arquivos JavaScript completos

- `js/data/portugues/por-24-questions.js`
- `js/data/portugues/red-01-questions.js`
- `js/data/portugues/red-02-questions.js`
- `js/data/portugues/red-03-questions.js`

Esses quatro arquivos foram construídos sobre a versão que já existia no GitHub; os SHA Git dos originais estão registrados em `docs/C03_L06_DADOS_VALIDACAO.json`. Nenhum outro JavaScript precisa ser trocado.

## 2. ADICIONAR os oito documentos em `docs/`

- `C03_L06_SNAPSHOT_ORIGINAL_100_QUESTOES.json`
- `C03_L06_RESOLUCOES_100_QUESTOES.json`
- `C03_L06_REGISTRO_EDITORIAL_100_QUESTOES.json`
- `C03_L06_RESOLUCOES_100_QUESTOES.tsv`
- `C03_L06_DADOS_VALIDACAO.json`
- `RELATORIO_PEDAGOGICO_CORRECAO_03_LOTE_06.md`
- `INSTALACAO_CORRECAO_03_LOTE_06.md`
- `CHECKLIST_HOMOLOGACAO_CORRECAO_03_LOTE_06.md`

## 3. ADICIONAR o teste e o workflow

- `tests/c03-lote06-por24-red01-a-03.test.mjs`
- `.github/workflows/pt-estudo-c03-lote06.yml`

O workflow executa o teste de regressão na branch após upload e pode ser disparado manualmente em Actions. A execução no GitHub depende das permissões de Actions e da criação correta do caminho `.github/workflows`. Se a interface de upload não criar o diretório, use `Add file` → `Create new file` e escreva o caminho inteiro do workflow.

## 4. Confirmar a instalação

1. Conferir se POR-24, RED-01, RED-02, RED-03 abrem e exibem suas questões, sem erros no console.
2. Executar Actions e verificar que o teste passa; o workflow é **adicional**, não substitui testes reais.
3. Responder uma questão de cada módulo no Banco, nos Exercícios, na Revisão e no Simulado; conferir correção e índice visual após embaralhar.
4. Conferir se uma resposta histórica anterior conserva sua classificação (o texto literal antigo pode divergir; há snapshot).
5. Testar backup/restore em **perfil de navegador de testes separado** antes de usar restauração real; conferir botão manual Google Drive sem sincronização automática.

Não execute reinício de progresso no perfil principal como teste.
