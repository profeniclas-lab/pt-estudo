# Instalação — Correção 3, Lote 3 (POR-09 a POR-13)

Base: branch `nova-arquitetura` de `https://github.com/profeniclas-lab/pt-estudo`.

## Substituir cinco arquivos completos

- `js/data/portugues/por-09-questions.js`
- `js/data/portugues/por-10-questions.js`
- `js/data/portugues/por-11-questions.js`
- `js/data/portugues/por-12-questions.js`
- `js/data/portugues/por-13-questions.js`

## Adicionar

- Os sete documentos de auditoria e validação de `docs/` (não substituem dados ativos).
- `tests/c03-lote03-por09-a-13.test.mjs`, a suíte de regressão.

## Procedimento seguro

1. Exporte o progresso JSON atual no aplicativo e guarde cópia acessível.
2. Conclua ou encerre sessões ativas dos cinco módulos antes de instalar, sobretudo questões com alternativas reescritas.
3. Faça o upload dos cinco JS completos, respeitando os caminhos. **Não substitua** `js/data/questions.js`, `js/core/state.js`, `js/core/storage.js`, backup ou Google Drive.
4. Envie os documentos e o arquivo de teste; opcionalmente execute o teste via Node no GitHub Actions que já tenha configuração apropriada ou diretamente em ambiente com Node. Nenhuma instalação é exigida no seu computador para usar o aplicativo.
5. Confira as telas de módulos, banco de questões, exercícios, revisão e simulados no GitHub Pages; veja se a correção e as explicações correspondem à alternativa escolhida mesmo após embaralhar.
6. Confira se o aproveitamento anterior do módulo e o estado das questões respondidas não mudaram ao recarregar a página.

Os campos `id`, `answer`, `type`, `difficulty`, `moduleId` e `subtopicId` não foram alterados. O histórico literal antigo não é reconstituído automaticamente pela aplicação: está documentado no snapshot anexo.

Se os arquivos GitHub se divergirem das versões de referência, não sobrescreva sem conferir.
