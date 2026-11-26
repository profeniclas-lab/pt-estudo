# Relatório técnico e pedagógico — PT-ESTUDO, Lote 03

## Escopo e contagens
| Indicador | Novo lote | Total ativo após integrar aos Lotes 1 e 2 |
|---|---:|---:|
| Módulos | 3 (POR-07 a POR-09) | 9 |
| Subtópicos | 15 | 45 |
| Aulas | 15 | 45 |
| Flashcards diagnósticos | 15 | 45 |
| Questões autorais | 60 | 180 |
| Módulos previstos ainda em preparação | — | 18 |

**Por subtópico:** exatamente 1 aula, 1 diagnóstico, 1 questão média `ce`, 1 média de formato variado, 2 difíceis; 4 questões por subtópico. **Por módulo:** 5 aulas, 5 diagnósticos, 10 médias, 10 difíceis. **Sessão do motor:** 10 médias e 6 difíceis, sem repetição de IDs.

## Mudanças técnicas
- `modules.js` e `PLANO_27_MODULOS.json`: apenas os status de POR-07 a POR-09 passaram para `disponivel`, preservando os 27 IDs, as demais propriedades e os módulos anteriores.
- `lessons.js`, `diagnostics.js`, `questions.js`: imports adicionais dos três novos módulos, sem remover POR-01 a POR-06.
- Nove arquivos novos: conteúdo autoral por módulo, com IDs estáveis e campos do motor.
- Não altera `js/app.js`, `index.html`, CSS, `state.js`, `storage.js`, backup, Google Drive ou qualquer outro módulo do motor.
- Não referencia módulos ADM/AP/DA nos carregadores ativos.

## Testes executados no ambiente de geração
- `node --experimental-default-type=module --check` em todos os arquivos JS de dados utilizados: **aprovado**.
- Importação ESM dos carregadores integrados de módulos, aulas, diagnósticos e questões: **aprovado**.
- Teste automatizado de dados e de seleção simulada: **9.459 verificações aprovadas**.
- 180 simulações de sessões entre os 9 módulos, cada uma com 16 IDs únicos (10 médias, 6 difíceis), e cinco subtópicos representados entre as questões difíceis: **aprovadas**.
- Integridade de IDs, campos obrigatórios, comentários por alternativa, unicidade das opções, `answer` inteiro no intervalo, autoria `AUTORAL_INEDITA`, perguntas de diagnóstico e cobertura das aulas: **aprovada**.
- Verificação de 27 módulos planejados / 9 ativos / 18 pendentes / 180 questões no carregamento integrado: **aprovada**.

## Limites dos testes e revisão pedagógica
- A revisão editorial das 60 questões foi feita durante a produção, mas **não houve uma revisão pedagógica independente** de gabaritos. A verificação automatizada confirma estruturas e índices, não demonstra que todas as alternativas corretas são semanticamente únicas.
- Não foi executado teste end-to-end da interface em navegador ou da gravação real do progresso do usuário. O sorteio foi **simulado com a mesma regra de seleção conhecida**, não executado com o fluxo gráfico completo.
- O Google OAuth e a API Drive não foram chamados. Este lote não toca nesses arquivos; seus testes funcionais continuam pendentes.
- As fontes a seguir embasaram regras gerais de ortografia; os exercícios e exemplos são originais, não questões oficiais de concursos.

## Fontes de referência verificadas
- Academia Brasileira de Letras, *Vocabulário Ortográfico da Língua Portuguesa*, edição digital 2025–2026: https://www2.academia.org.br/nossa-lingua/vocabulario-ortografico
- Senado Federal, *Manual de Comunicação — Hífen*: https://www12.senado.leg.br/manualdecomunicacao/estilos/hifen
- Ministério da Educação, *Acordo Ortográfico da Língua Portuguesa*: https://portal.mec.gov.br/arquivos/pdf/acordoortografico.pdf

**Homologação final:** pendente de testes do aplicativo no GitHub Pages, conferência de persistência e eventual correção editorial dos itens, caso sejam encontrados problemas.
