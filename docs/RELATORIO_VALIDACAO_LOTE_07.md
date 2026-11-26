# PT-ESTUDO — Relatório técnico do Lote 07

## Escopo

Base: os 5 arquivos centrais do Lote 06 (POR-01–POR-18) foram comparados com os blobs atuais da branch `nova-arquitetura` e suas hashes Git foram idênticas. Os módulos 01–18 e 22–27 permanecem com a mesma definição do plano anterior; em POR-19–POR-21 apenas o `status` mudou de `preparacao` para `disponivel`.

| Módulo | Subtópicos | Aulas | Diagnósticos | Questões médias | Questões difíceis | Total |
|---|---:|---:|---:|---:|---:|---:|
| POR-19 — Período composto: coordenação e subordinação | 5 | 5 | 5 | 10 | 10 | 20 |
| POR-20 — Pontuação | 5 | 5 | 5 | 10 | 10 | 20 |
| POR-21 — Colocação pronominal | 5 | 5 | 5 | 10 | 10 | 20 |
| **Total do lote** | **15** | **15** | **15** | **30** | **30** | **60** |

**Acumulado com Lotes 1–6:** 21 módulos disponíveis e seis planejados, 105 aulas, 105 cartões diagnósticos e 420 questões autorais. Os totais pressupõem os conteúdos anteriores já instalados na branch.

## Testes executados

- 86,210 asserções automatizadas aprovadas no Node.js, incluindo repetições das verificações em sessões simuladas.
- 2,100 sessões simuladas do contrato do motor de exercícios: 10 médias + 6 difíceis, sem duplicação e com reordenação estável das alternativas.
- Verificação de sintaxe com `node --check` dos 13 arquivos JavaScript novos ou substituídos.
- IDs inéditos para 60 questões, relação com 15 subtópicos e 15 aulas, 1 diagnóstico por subtópico.
- Cada subtópico: uma questão média de Certo/Errado, uma média de outro formato e duas difíceis.
- Comentários por alternativa alinhados ao índice de gabarito; campos `explanation`, `concept`, `trap`, `examTip`, `newExample` e `challenge` presentes.
- Importação local integrada de `modules.js`, `lessons.js`, `diagnostics.js`, `questions.js`: 21 módulos ativos, 6 pendentes e 420 questões.
- Ausência de IDs de questões administrativas no banco ativo.
- Verificação de que POR-01 a POR-18 permaneceram literalmente iguais no plano.

## Notas pedagógicas e riscos

- Coordenação e subordinação: distinguir o valor lógico das conjunções e evitar classificar todos os “que” de uma mesma forma.
- Pontuação: a referência principal é a estrutura sintática. Adjuntos curtos e certas vírgulas antes de “e” podem admitir variação estilística; as questões evitam exigir proibição absoluta de casos facultativos.
- Colocação pronominal: quando o gabarito exige registro formal tradicional, essa condição aparece expressamente. Não se equipara a inadequação nesse registro à inexistência da construção coloquial brasileira.
- As 60 questões são **autorais**, não reproduções de provas oficiais. Os comentários foram escritos por alternativa; a validação automática não comprova sozinha a correção linguística.

## Referências públicas consultadas

1. Senado Federal — [Manual de Comunicação: Vírgula](https://www12.senado.leg.br/manualdecomunicacao/estilos/virgula)
2. Senado Federal — [Manual de Comunicação: Ponto e vírgula](https://www12.senado.leg.br/manualdecomunicacao/estilos/ponto-e-virgula)
3. Senado Federal — [Manual de Comunicação: Vírgula antes da conjunção e](https://www12.senado.leg.br/manualdecomunicacao/estilos/virgula-antes-da-conjuncao-e)
4. Academia Brasileira de Letras, Evanildo Bechara — [Me diga isto ou diga-me isto?](https://www.academia.org.br/artigos/me-diga-isto-ou-diga-me-isto)

## Limitações dos testes

O algoritmo de seleção foi simulado com o contrato conhecido, e **não** foi feita execução completa do arquivo real `js/features/exercises.js` neste ambiente. Não houve navegação real no GitHub Pages, autenticação OAuth, restauração real ou auditoria independente dos 60 gabaritos. Para homologar, execute o checklist manual.

Próximo lote: **Lote 08 — POR-22, POR-23 e POR-24** (reescrita e paralelismo; figuras de linguagem; produção textual para prova discursiva).
