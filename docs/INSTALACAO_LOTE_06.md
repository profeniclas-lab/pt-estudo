# PT-ESTUDO — Lote 06 (POR-16 a POR-18) — Instalação direta pelo GitHub

## Compatibilidade e dependências

- Repositório de destino: `https://github.com/profeniclas-lab/pt-estudo`
- Branch verificada: `nova-arquitetura`, com o **Lote 05** publicado nos arquivos centrais.
- Este é um **ZIP incremental**, não um projeto inteiro. Ele pressupõe POR-01 a POR-15 já instalados.
- Não é necessário instalar programas nem executar comandos: basta extrair o ZIP com a função nativa do sistema e colocar os arquivos nos caminhos correspondentes pelo GitHub web.
- Recomenda-se primeiro uma branch de testes. Se algum dos cinco arquivos centrais tiver sido editado depois do Lote 05, compare as mudanças antes de substituir: a instalação não faz mesclagem automática.

## SUBSTITUIR — cinco arquivos completos

1. `js/data/modules.js` — ativa POR-16, POR-17 e POR-18; preserva 27 nomes de módulos e deixa nove como Em preparação.
2. `js/data/lessons.js` — acrescenta apenas os imports e agregações das 15 novas aulas.
3. `js/data/diagnostics.js` — acrescenta os três blocos de cinco cartões diagnósticos.
4. `js/data/questions.js` — acrescenta 60 questões novas, sem trocar IDs anteriores.
5. `docs/PLANO_27_MODULOS.json` — atualiza status e total disponível.

## ADICIONAR — nove arquivos novos

- `js/data/portugues/por-16-lessons.js`
- `js/data/portugues/por-16-diagnostics.js`
- `js/data/portugues/por-16-questions.js`
- `js/data/portugues/por-17-lessons.js`
- `js/data/portugues/por-17-diagnostics.js`
- `js/data/portugues/por-17-questions.js`
- `js/data/portugues/por-18-lessons.js`
- `js/data/portugues/por-18-diagnostics.js`
- `js/data/portugues/por-18-questions.js`

## DOCUMENTAÇÃO (opcional, mas recomendada)

- `docs/INSTALACAO_LOTE_06.md`
- `docs/RELATORIO_VALIDACAO_LOTE_06.md`

## Procedimento sem instalação de software

1. Abra o repositório no GitHub e confirme que a branch é `nova-arquitetura`.
2. Crie uma branch de teste, ou salve uma cópia do repositório antes de sobrescrever arquivos.
3. Extraia o arquivo ZIP no computador com o extrator nativo do sistema.
4. Envie os arquivos extraídos, **mantendo as pastas** `js/data`, `js/data/portugues` e `docs`.
5. Substitua os cinco arquivos centrais listados e adicione os nove novos. Não envie o ZIP fechado para a raiz do repositório.
6. Após o GitHub Pages publicar, recarregue a aplicação e realize as verificações abaixo.

## Checklist manual de homologação

- [ ] Módulos mostra 27 nomes, dos quais 18 estão disponíveis e nove em preparação.
- [ ] POR-16, POR-17 e POR-18 apresentam cinco aulas e cinco cartões cada, com perguntas específicas.
- [ ] Exercícios de cada módulo iniciam com 16 itens: dez médios + seis difíceis sorteados, sem duplicação.
- [ ] Os comentários seguem as alternativas embaralhadas, inclusive numa questão EXCETO e numa sequência V/F.
- [ ] A cada resposta, a marcação de confiança/causa do erro é registrada e a revisão espaçada continua disponível.
- [ ] O Banco de Questões reconhece 360 itens e filtra os 20 itens do módulo novo, inclusive “Não respondidas”.
- [ ] Simulados, Meus Erros e indicadores funcionam com os novos IDs.
- [ ] O progresso de POR-01 a POR-15 permanece intacto após recarregar a página.
- [ ] A chave do Dir-Adm (`admEstudo.v2.state`) não é lida nem alterada pelo aplicativo Português.
- [ ] Backup local, restauração e Google Drive por botão mantêm o comportamento anterior. Use perfil isolado para testes de restauração.

**Importante:** testes automatizados de dados foram executados neste ambiente; as operações de interface, OAuth e armazenamento real **não foram homologadas** por esses testes.
