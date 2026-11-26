# PT-ESTUDO — Relatório de validação do Lote 06

## Escopo e base

Base: arquivos do Lote 05 que foram conferidos na branch `nova-arquitetura` do repositório `profeniclas-lab/pt-estudo`.
Alterados apenas os quatro carregadores pedagógicos e `docs/PLANO_27_MODULOS.json`; adicionados nove arquivos autorais. **Nenhuma escrita no GitHub ou em dados de usuário.**

| Módulo | Subtópicos | Aulas | Diagnósticos | Médias | Difíceis | Questões |
|---|---:|---:|---:|---:|---:|---:|
| POR-16 — Concordância verbal e nominal | 5 | 5 | 5 | 10 | 10 | 20 |
| POR-17 — Regência verbal e nominal | 5 | 5 | 5 | 10 | 10 | 20 |
| POR-18 — Crase | 5 | 5 | 5 | 10 | 10 | 20 |
| **Lote** | **15** | **15** | **15** | **30** | **30** | **60** |

**Total acumulado simulado na montagem local**: 18 módulos ativos e nove em preparação; 90 aulas, 90 cartões e 360 questões. Esses totais pressupõem os Lotes 01–05 íntegros.

## Verificações efetivamente executadas

- **73,670** asserções automatizadas aprovadas no ambiente Node.js de testes (contando cada verificação repetida em sessões simuladas).
- **1,800** sessões simuladas do sorteio de dez médias e seis difíceis, preservando o índice da resposta após embaralhamento.
- 13 arquivos `.js` novos ou substituídos com sintaxe conferida por `node --check`.
- 60 IDs novos únicos; 15 aulas e 15 diagnósticos com correspondência por subtópico.
- 60 exemplos adicionais distintos e 210 comentários de alternativa individuais nos novos itens.
- Distribuição por subtópico: um item médio C/E, um item médio de formato variado e dois difíceis.
- Compatibilidade das importações dos 18 módulos em conjunto, sem importação de ADM/AP/DA no banco ativo.
- Conferência de formatos, opções, índices de gabarito, quantidades e identificação AUTORAL_INEDITA.

**Limites reais dos testes:** o teste de sorteio reproduz o algoritmo e os contratos documentados do motor, mas não executa o arquivo `js/features/exercises.js` completo (não estava na cópia local dos testes). A aprovação de sintaxe ou consistência estrutural **não é prova independente de correção linguística de todos os gabaritos**. Não houve teste real em navegador, GitHub Pages, Google Drive ou perfil persistido.

## Notas pedagógicas

- Concordância: distinguem-se verbos impessoais haver/fazer e existir pessoal, sujeito composto anteposto ou posposto, flexão de adjetivos e passiva.
- Regência: o enunciado delimita “norma-padrão tradicional” onde há variação de uso; constrói-se a interpretação de assistir e aspirar a partir do sentido.
- Crase: distingue-se regra de fusão, pronome demonstrativo, facultatividade antes de possessivos e nomes próprios, locuções e indicação de horas.
- Para intervalos de horas, a redação foi ajustada à **padronização editorial do Senado**, que recomenda “das 8h às 12h”; não se classifica uma alternativa por regra ambígua sem explicitar a referência.
- Todas as questões do lote foram produzidas como autorais e não se apresentam como transcrição de provas oficiais.

## Referências públicas consultadas

1. Senado Federal — [Manual de Comunicação: Crase](https://www12.senado.leg.br/manualdecomunicacao/estilos/crase)
2. Senado Federal — [Manual de Comunicação: Hora](https://www12.senado.leg.br/manualdecomunicacao/estilos/hora)
3. Senado Federal — [Manual de Comunicação: Assistir](https://www12.senado.leg.br/manualdecomunicacao/estilos/assistir)
4. Senado Federal — [Manual de Comunicação: Regência nominal](https://www12.senado.leg.br/manualdecomunicacao/estilos/regencia-nominal)
5. Senado Federal — [Manual de Comunicação: Visar](https://www12.senado.leg.br/manualdecomunicacao/estilos/visar)
6. Academia Brasileira de Letras — [Armadilhas da construção literária (haver impessoal)](https://www.academia.org.br/artigos/armadilhas-da-construcao-literaria)

## Continuidade

Após homologação manual: **Lote 07 — POR-19, POR-20 e POR-21** (período composto, pontuação e colocação pronominal).
