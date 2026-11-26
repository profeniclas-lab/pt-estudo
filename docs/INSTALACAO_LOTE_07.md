# PT-ESTUDO — Lote 07: POR-19, POR-20 e POR-21

## Destino e dependências

- Repositório: https://github.com/profeniclas-lab/pt-estudo
- Branch conferida antes da montagem: `nova-arquitetura` (base com Lotes 01–06, 18 módulos ativos).
- Este ZIP é **incremental** e requer os lotes anteriores. Ele não contém o aplicativo inteiro.
- **Nenhum programa adicional é necessário:** extraia com a função nativa do computador e envie os arquivos mantendo os caminhos. O ZIP contém apenas arquivos completos e documentação.
- Recomenda-se fazer a instalação inicialmente numa branch de teste. Se o GitHub mudar depois da versão conferida, não sobrescreva cegamente os carregadores: compare as alterações.

## SUBSTITUIR — 5 arquivos completos

1. `js/data/modules.js` — ativa POR-19 a POR-21; mantém os 27 nomes, agora 21 ativos e 6 em preparação.
2. `js/data/lessons.js` — acrescenta os imports e a agregação das 15 aulas novas.
3. `js/data/diagnostics.js` — acrescenta as entradas dos 15 cartões por subtópico.
4. `js/data/questions.js` — acrescenta somente as 60 questões novas ao banco ativo.
5. `docs/PLANO_27_MODULOS.json` — atualiza os estados do catálogo planejado.

## ADICIONAR — 9 arquivos de conteúdo

- `js/data/portugues/por-19-lessons.js`
- `js/data/portugues/por-19-diagnostics.js`
- `js/data/portugues/por-19-questions.js`
- `js/data/portugues/por-20-lessons.js`
- `js/data/portugues/por-20-diagnostics.js`
- `js/data/portugues/por-20-questions.js`
- `js/data/portugues/por-21-lessons.js`
- `js/data/portugues/por-21-diagnostics.js`
- `js/data/portugues/por-21-questions.js`

## DOCUMENTOS DE APOIO

- `docs/INSTALACAO_LOTE_07.md` (este arquivo)
- `docs/RELATORIO_VALIDACAO_LOTE_07.md`

## Instalação via navegador

1. No GitHub, selecione a branch `nova-arquitetura`; crie uma branch de testes para a integração.
2. Extraia o ZIP e faça upload dos arquivos **dentro das pastas correspondentes** `js/data/`, `js/data/portugues/` e `docs/`.
3. Substitua os 5 arquivos centrais e adicione os 9 arquivos novos; não envie o ZIP fechado na raiz.
4. Consulte o relatório e teste o aplicativo publicado no GitHub Pages.

## Checklist de testes manuais pós-upload

- [ ] A página Módulos mostra 27 nomes: 21 disponíveis e 6 em preparação.
- [ ] POR-19, POR-20 e POR-21 apresentam 5 aulas, 5 flashcards diagnósticos e 20 questões cada.
- [ ] A atividade de exercícios inicia com 16 itens por módulo: 10 médias e 6 difíceis, sem repetir IDs.
- [ ] A correção mostra comentário do item correto mesmo após embaralhar as alternativas; confira um C/E e um EXCETO.
- [ ] Banco de Questões oferece 420 itens e filtra os 20 de cada módulo, inclusive “não respondidas”.
- [ ] Simulados, Meus Erros, revisão espaçada, Dashboard e Jornada consideram os novos IDs.
- [ ] Avance, responda, marque confiança/causa do erro e recarregue: o progresso permanece registrado.
- [ ] Os resultados anteriores de POR-01 a POR-18 permanecem sem mudança.
- [ ] Configurações, backup JSON e botão do Google Drive continuam acessíveis; teste a restauração apenas num perfil isolado.
- [ ] Nenhuma operação modifica `admEstudo.v2.state` do aplicativo Dir-Adm.

**Nota importante:** os testes automatizados executados neste ambiente cobrem os dados e simulam o algoritmo de sorteio. Não houve homologação real do navegador, do GitHub Pages nem do OAuth Drive nesta etapa.
