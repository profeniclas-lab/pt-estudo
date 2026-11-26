# PT-ESTUDO — Lote 05: instalação por upload direto

## Antes de enviar

- Aplicativo: https://github.com/profeniclas-lab/pt-estudo
- Branch de referência: `nova-arquitetura`.
- Base verificada: **Lote 04 instalado**, com 12 módulos ativos e 240 questões.
- Preferencialmente, crie uma branch de teste ou guarde uma cópia do repositório antes de substituir arquivos.
- Este ZIP contém **arquivos completos**. Não exige Python, Node, instaladores, `.bat` nem execução de comandos pelo usuário.

## Arquivos para SUBSTITUIR no GitHub (5)

1. `js/data/modules.js` — ativa POR-13, POR-14, POR-15; mantém 27 módulos planejados.
2. `js/data/lessons.js` — acrescenta imports e agregação de 15 aulas.
3. `js/data/diagnostics.js` — acrescenta imports e agregação de 15 flashcards.
4. `js/data/questions.js` — acrescenta imports e agregação de 60 questões.
5. `docs/PLANO_27_MODULOS.json` — atualiza estado e contadores do planejamento.

## Arquivos para ADICIONAR (9)

- `js/data/portugues/por-13-lessons.js`
- `js/data/portugues/por-13-diagnostics.js`
- `js/data/portugues/por-13-questions.js`
- `js/data/portugues/por-14-lessons.js`
- `js/data/portugues/por-14-diagnostics.js`
- `js/data/portugues/por-14-questions.js`
- `js/data/portugues/por-15-lessons.js`
- `js/data/portugues/por-15-diagnostics.js`
- `js/data/portugues/por-15-questions.js`

Também podem ser adicionados `docs/INSTALACAO_LOTE_05.md` e `docs/RELATORIO_VALIDACAO_LOTE_05.md` (documentação).

## Como enviar

1. Abra a branch `nova-arquitetura` do repositório PT-ESTUDO no navegador.
2. Extraia este ZIP com a funcionalidade nativa do computador.
3. Envie a estrutura de arquivos para o repositório, **mantendo os diretórios** `js/data`, `js/data/portugues` e `docs`.
4. Substitua apenas os cinco arquivos listados; os demais são novos. Não envie o ZIP fechado como arquivo para a raiz do projeto.
5. Espere a publicação do GitHub Pages concluir e recarregue a página ignorando cache para testar.

## Testes manuais no aplicativo

1. Na página **Módulos**, confirme 27 módulos planejados, 15 disponíveis e 12 em preparação.
2. Abra POR-13, POR-14 e POR-15, percorra as cinco aulas de cada módulo e confira os cartões diagnósticos.
3. Inicie **Exercícios de aprendizagem** nos três módulos: cada atividade deve conter 16 questões (dez médias e seis difíceis sorteadas).
4. Responda uma questão de Certo/Errado e outra de associação; confira a alternativa correta, a justificativa e a autoavaliação.
5. Confira Banco de Questões, filtros por módulo e opção **Não respondidas**.
6. Faça uma atividade, recarregue a página e verifique que o resultado continua salvo.
7. Confira se os módulos anteriores (POR-01 a POR-12) conservam suas atividades e percentuais.
8. Confira o painel de simulados e se os 12 módulos em preparação não aparecem como disponíveis para sorteio.
9. Não faça uma restauração real do Drive com o perfil principal. Testes de restauração devem ser realizados separadamente, após backup externo.

## Segurança e limites

Este pacote altera **somente os dados de ensino e seus carregadores**. Não altera arquivos do armazenamento, backup, OAuth, Google Drive, estado nem a chave `ptEstudo.v1.state`; os módulos POR-01 a POR-12 continuam com os mesmos IDs de questões.

**Atenção:** os testes automatizados de integração foram realizados em ambiente local com uma montagem de arquivos dos lotes anteriores. Eles **não** comprovam publicação sem erros no GitHub Pages, operação real de OAuth ou revisão independente de cada gabarito. O lote deve ser testado numa branch separada antes da homologação.
