# PT-ESTUDO — Correção 3, Lote 4 (POR-14 a POR-18)

## Escopo, materiais examinados e procedimento

Revisão editorial de **100 itens autorais** de cinco módulos (20 por módulo): POR-14 (sintaxe da oração), POR-15 (termos integrantes/acessórios), POR-16 (concordância), POR-17 (regência) e POR-18 (crase).

Foram reabertos os **arquivos-base completos** utilizados nos Lotes 5 e 6 e confirmada sua identidade por hash Git com a branch `nova-arquitetura`. A resolução textual de cada item foi redigida à parte e só depois comparada com `answer`; as 100 resoluções e índices originais estão documentados em `C03_L04_RESOLUCOES_100_QUESTOES.json` e `.tsv`.

Foram mantidos, em **todos os 100 itens**, ID, módulo, subtópico, dificuldade, tipo, origem AUTORAL_INEDITA e índice do gabarito. A revisão não alterou posição de resposta para produzir uma distribuição artificial. Não foram incorporados itens REAIS sem verificação de prova e gabarito.

### Quantidades

| Módulo | Analisadas | Com edição adicional de enunciado, opção, explicação ou comentário | Novos exemplos | Novos desafios |
| --- | ---: | ---: | ---: | ---: |
| POR-14 | 20 | 7 | 20 | 20 |
| POR-15 | 20 | 9 | 20 | 20 |
| POR-16 | 20 | 8 | 20 | 20 |
| POR-17 | 20 | 8 | 20 | 20 |
| POR-18 | 20 | 8 | 20 | 20 |
| **TOTAL** | **100** | **40** | **100** | **100** |

Cada questão recebeu um novo exemplo aplicado e um desafio específico. Os 100 exemplos e 100 desafios são distintos dentro deste lote. Os comentários de cada alternativa foram preservados ou atualizados **no índice correspondente**, nunca deslocados como consequência de mudança visual. Questões CERTO/ERRADO mantêm `['CERTO','ERRADO']` nessa ordem.

### Achados e decisões relevantes

1. **POR-14:** descrições de locução verbal e sujeito impessoal tornadas mais explícitas; distratores menos caricatos; questão de predicativo do sujeito deixa claro qual termo é analisado.
2. **POR-15:** a antiga associação com “Os coordenadores, Ana e Paulo” não distinguia com precisão o aposto enumerativo do explicativo; a nova formulação utiliza os setores após dois-pontos para exemplificar enumeração inequívoca. Reescritas da voz passiva distinguem agente, paciente e tempo verbal.
3. **POR-16:** explicitado que uma reescrita de *havia* por *existir* precisa conservar **sentido e tempo verbal**; a possibilidade de concordância por proximidade com sujeito composto posposto não é tratada como erro universal.
4. **POR-17:** o verbo *assistir* é apresentado com sentidos e regências tradicionais especificados; os distratores agora contrastam presenciar e prestar assistência. A regência de *preferir* é delimitada ao padrão tradicional formal pedido no enunciado.
5. **POR-18:** casos de crase obrigatória, facultativa e vedada são contextualizados; a indicação “das 8h às 12h” é explicitamente atribuída ao **padrão editorial do Manual de Comunicação do Senado**, sem ser apresentada como proibição universal da língua.

### Referências externas verificadas

- Manual de Comunicação do Senado, *Concordância verbal*: https://www12.senado.leg.br/manualdecomunicacao/estilos/concordancia-verbal
- Manual de Comunicação do Senado, *Crase*: https://www12.senado.leg.br/manualdecomunicacao/estilos/crase
- Manual de Comunicação do Senado, *Hora*: https://www12.senado.leg.br/manualdecomunicacao/estilos/hora

As referências sustentam critérios gerais, não constituem fonte de reprodução de prova ou autorização para rotular questões como REAIS. O relatório de resoluções descreve a análise feita pelo assistente; **não é revisão independente por professor humano nem validação oficial de banca**.

### Distribuição original de CERTO/ERRADO — ressalva

| Módulo | CERTO | ERRADO |
| --- | ---: | ---: |
| POR-14 | 5 | 0 |
| POR-15 | 5 | 0 |
| POR-16 | 4 | 1 |
| POR-17 | 5 | 0 |
| POR-18 | 4 | 1 |
| **TOTAL** | **23** | **2** |

A distribuição é pedagogicamente desequilibrada. Inverter proposições e/ou gabaritos sem criar novos IDs invalidaria a correspondência das respostas já registradas. Recomenda-se introduzir novos itens ERRADO com versionamento próprio em fase futura, sem reutilizar IDs existentes.

## Progresso e histórico

Conservados os **100 IDs e 100 gabaritos**, assim como seus formatos, dificuldades e vínculos com subtópicos. Isso evita reinterpretar como errado um acerto gravado sob o mesmo índice. Contudo, os textos de algumas alternativas mudaram, e o motor **não salva a versão literal completa** de cada tentativa antiga. O snapshot `C03_L04_SNAPSHOT_ORIGINAL_100_QUESTOES.json` permite auditoria editorial, mas **não é importado como banco de questões**. Faça backup antes do upload e conclua sessões abertas de POR-14 a POR-18.

## Verificação técnica realizada

- Teste de integridade dos novos objetos e de preservação de índices e IDs por questão.
- **4.000 permutações** de alternativas no teste, sempre mantendo o vínculo do índice original; questões CE não foram permutadas.
- **500 seleções de sessões** nos cinco módulos (10 médias + seis difíceis sem repetições).
- Importação integrada das bases de todos os lotes: **27 módulos, 140 aulas, 140 cartões diagnósticos e 560 questões**.
- **12.717 verificações automatizadas** aprovadas pelo script incluído no pacote, em um conjunto reconstruído das entregas anteriores.
- Conferência de questões de risco sobre aposto enumerativo, reescrita temporal, regência de *assistir* e horários do Senado.

**Não foram executados** testes reais de interface, OAuth Google Drive, salvamento persistente do navegador e reprodução literal de tentativas antigas. A suíte `tests/c03-lote04-por14-a-18.test.mjs` poderá ser repetida no repositório completo com Node.js no GitHub Actions, sem instalação na máquina do usuário.
