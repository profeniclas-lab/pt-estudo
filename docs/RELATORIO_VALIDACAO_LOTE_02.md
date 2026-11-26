# PT-ESTUDO — Relatório de validação do Lote 02

## Escopo e base

Os arquivos foram produzidos a partir do pacote integrado do **Lote 01** e conferidos contra os hashes de arquivos centrais da branch `nova-arquitetura` acessíveis durante a preparação. Não houve alteração do repositório remoto.

**Módulos novos:** POR-04 (Coerência e coesão textual), POR-05 (Semântica e significação), POR-06 (Variação linguística e adequação). O Lote 01 permanece referenciado, sem alterar seus arquivos individuais de conteúdo.

## Resultado dos verificadores executados

| Verificação | Resultado |
| --- | --- |
| Syntax check via `node --check` em 13 arquivos JS do pacote | Aprovado |
| Importação efetiva dos carregadores `modules.js`, `lessons.js`, `diagnostics.js`, `questions.js` com Node.js | Aprovada |
| Catálogo: 27 módulos planejados; 6 disponíveis; 21 em preparação | Aprovado |
| Módulos publicados: 30 aulas e 30 cartões diagnósticos | Aprovado |
| Banco ativo: 120 questões; 60 novas do Lote 2 | Aprovado |
| Módulos 01–06: 20 questões cada | Aprovado |
| Cada subtópico novo: 1 média C/E, 1 média variada e 2 difíceis | Aprovado |
| Gabaritos como índices inteiros dentro das alternativas | Aprovado |
| IDs exclusivos, módulos e subtópicos vinculados | Aprovado |
| Comentário individual não vazio para todas as alternativas | Aprovado |
| Alternativas sem repetição literal por questão | Aprovado |
| Os sete grupos de formatos (`ce`, `vf`, `afirmacoes`, `associacao`, `lacunas`, `classica`, `exceto`) aparecem no conjunto | Aprovado |
| Ordenação editorial: índices originais corretos variados, com comentários reordenados juntos | Aprovado |
| 60 seleções **simuladas** com 16 questões, 10 médias, 6 difíceis, sem IDs duplicados | Aprovado na simulação |
| Integridade do ZIP e caminhos das 16 entradas | Aprovado |

A distribuição das respostas corretas entre as **45 questões novas não C/E** é A=12, B=11, C=11 e D=11. As 15 C/E mantêm opções `CERTO`, `ERRADO` em ordem fixa.

## Limitações importantes

- A sessão foi simulada a partir da regra de seleção identificada em `js/features/exercises.js`; **não foi executada a função real `createExerciseSession` em um navegador**. A simulação testa as contagens e a permutação, não a experiência de clique, correção e salvamento.
- Não foram testados OAuth real, API do Google Drive, uploads no GitHub nem persistência em navegador com dados pessoais; o lote não modifica os arquivos de backup/Drive já presentes no Lote 1.
- O verificador de questões comprova estrutura, consistência das referências, comentário por alternativa e índices de resposta; **não comprova revisão pedagógica independente de cada gabarito**. Antes de considerar o lote homologado, recomenda-se revisão amostral e depois integral das questões em situação real de prova.
- Não houve reescrita de `js/app.js`, do motor, dos arquivos de Administração de outros repositórios nem das chaves `admEstudo.*`. Nenhum código desta entrega lê ou grava essas chaves.

## Critérios para homologação manual

1. Conferir os 27 nomes e verificar que POR-01 a POR-06 estão disponíveis, restando 21 em preparação.
2. Nos três novos módulos, abrir todas as 15 aulas e os 15 cartões diagnósticos.
3. Em cada módulo, iniciar os exercícios e conferir 16 itens, registro de confiança, correção e nova tentativa.
4. No Banco de Questões, verificar 120 itens ativos e os filtros por módulo/dificuldade/não respondidas.
5. Testar simulados, revisão, estatísticas e progresso em perfil isolado; confirmar que POR-01 a POR-03 mantêm registros.
6. Somente após homologar em ambiente de teste, fazer a instalação definitiva e confirmar o progresso de Dir-Adm inalterado.
