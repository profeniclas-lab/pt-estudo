# PT-ESTUDO — Relatório de validação do Lote 09

## Conteúdo produzido e integrado

| Módulo | Subtópicos | Aulas | Diagnósticos | Questões médias | Questões difíceis | Total |
|---|---:|---:|---:|---:|---:|---:|
| RED-01 — Fundamentos e qualidade | 6 | 6 | 6 | 12 | 12 | 24 |
| RED-02 — Padrão ofício e expedientes | 7 | 7 | 7 | 14 | 14 | 28 |
| RED-03 — Comunicações institucionais | 7 | 7 | 7 | 14 | 14 | 28 |
| **Lote 09** | **20** | **20** | **20** | **40** | **40** | **80** |

**Acumulado esperado após instalar:** 27 módulos, 140 aulas, 140 cartões diagnósticos e 560 questões autorais. Todos os 27 módulos disponíveis. Nenhum módulo em preparação.

### Contratos pedagógicos

- Cada subtópico possui uma aula com `objective`, `concept`, `explanation`, `example`, `examTip`, `summary`, `reviewQuestion` e `reviewAnswer`.
- Cada subtópico possui um cartão com `front`, `back` e `subtopicId`.
- Há **4 questões por subtópico**, das quais 2 médias (1 C/E e 1 de outro formato) e 2 difíceis.
- Questões possuem `optionComments` na ordem original das alternativas, `answer` como índice numérico (base zero) e campos de fundamento, conceito, pegadinha, dica, exemplo e desafio.
- Formatos presentes: `ce`, `classica`, `exceto`, `vf`, `afirmacoes`, `lacunas`, `associacao`.
- As questões são **autorais**, não transcrições de provas reais. O campo `fonte` identifica orientação normativa, não autoria de banca.

## Testes automatizados realmente executados

1. Importação real dos arquivos de dados por Node.js, com **27 módulos e 560 questões**: aprovada.
2. Validação `validateCatalog()`, unicidade de IDs, vínculos dos subtópicos, aulas, diagnósticos, distribuição de dificuldade, arrays de comentários, índices de gabarito, campos e formatos: **10.959 verificações aprovadas**.
3. Simulação a partir do contrato publicado de `createExerciseSession`: **900 sessões simuladas** (300 por módulo) com **98.400 verificações aprovadas**. Composição RED-01 = 18 questões; RED-02/03 = 20. Todas têm 6 questões difíceis sorteadas e sem IDs repetidos; C/E preserva ordem fixa e demais alternativas recebem uma permutação válida. A correspondência entre gabarito e comentário foi verificada após a permutação.
4. Sintaxe verificada nos **13 arquivos JavaScript** incluídos: aprovada.
5. Conteúdo anterior: **72 arquivos individuais de POR-01 a POR-24 preservados byte a byte** em comparação com a base do Lote 08; identificadores e subtópicos anteriores inalterados.
6. Arquivos de `js/core/`, `js/features/`, `js/config/`, `index.html` e CSS não foram incluídos no ZIP e não são alterados pelo pacote.

**Total de verificações estruturais e simuladas:** **109,359** (não são questões distintas, nem testes de interface). A simulação de exercício usa uma implementação de teste baseada no contrato do motor; **não executa a função real no navegador**.

## Normas e controle editorial

- Manual de Redação da Presidência da República, 3ª edição (2018), especialmente atributos, padrão ofício e correio eletrônico.
- Decreto nº 9.758/2019, arts. 1º a 4º, relativo a tratamento e endereçamento de agentes públicos federais com as exceções previstas.
- As regras de 2018 e a disciplina posterior de 2019 foram distinguidas; não se atribui aplicação geral e irrestrita do decreto a outros Poderes ou entes.

## NÃO homologado nesta etapa

- Não houve teste visual real, interação completa no GitHub Pages ou autenticação/backup/restauração real via Google Drive.
- Não houve verificação pedagógica independente de cada gabarito, item normativo, plausibilidade e exclusividade dos distratores. Os testes provam consistência estrutural, não a ausência absoluta de controvérsia interpretativa.
- Não houve alteração ou gravação real no progresso do PT-ESTUDO ou do Dir-Adm.
- A contagem de 560 pressupõe instalação dos oito lotes anteriores e estável carregamento da branch `nova-arquitetura`.

## Base de integração

Construído sobre o Lote 08 cujos arquivos centrais foram conferidos contra a branch `nova-arquitetura` imediatamente antes da criação do lote. O pacote é **incremental** e não contém instaladores.
