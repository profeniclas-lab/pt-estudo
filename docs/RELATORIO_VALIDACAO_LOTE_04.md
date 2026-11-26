# PT-ESTUDO — Relatório técnico e pedagógico, Lote 4

## Base e escopo
- Conferidos os arquivos centrais da branch `nova-arquitetura` de `profeniclas-lab/pt-estudo` antes do preparo. Seus hashes Git correspondem aos arquivos centrais do Lote 3, utilizados como base.
- Neste ZIP foram incluídos somente os cinco arquivos de integração a substituir, nove arquivos novos de conteúdo e este relatório e instruções.
- Nenhum arquivo anterior de POR-01 a POR-09 foi reescrito; nenhum arquivo de armazenamento, backup, Google Drive, HTML ou CSS foi alterado.

## Resultado pedagógico do novo lote
| Módulo | Aulas | Flashcards diagnósticos | Médias C/E | Médias variadas | Difíceis | Total |
|---|---:|---:|---:|---:|---:|---:|
| POR-10 — Substantivos, artigos e adjetivos | 5 | 5 | 5 | 5 | 10 | 20 |
| POR-11 — Pronomes e referência | 5 | 5 | 5 | 5 | 10 | 20 |
| POR-12 — Verbos e flexão verbal | 5 | 5 | 5 | 5 | 10 | 20 |
| **Total do Lote 4** | **15** | **15** | **15** | **15** | **30** | **60** |

Cada questão contém enunciado, alternativas, gabarito de índice zero, fundamentação, comentários por alternativa, conceito, pegadinha, dica de prova, exemplo original e pergunta-desafio. Todas são classificadas como `AUTORAL` / `AUTORAL_INEDITA`. Não foram transcritas provas de terceiros nem atribuídas bancas fictícias.

## Resultado acumulado esperado após instalação
- 27 módulos planejados, com 12 disponíveis e 15 em preparação.
- 60 aulas completas e 60 flashcards diagnósticos.
- 240 questões autorais no catálogo ativo: 20 por módulo, incluindo os 60 novos itens.
- Exercícios de cada módulo: 10 médias obrigatórias (duas por subtópico) e 6 difíceis sorteadas sem duplicação (total 16).

## Testes realmente executados
1. **323 verificações estruturais** sobre os novos dados: vínculo módulo/subtópico, contagens, tipos, dificuldades, IDs, campos pedagógicos, índices de gabarito, comentários e ausência de opções repetidas.
2. **3.715 verificações integradas** com a importação efetiva dos dados dos Lotes 1 a 4 em Node.js: catálogo, aulas, diagnósticos, questões, ausência de IDs repetidos e disponibilidade por módulo.
3. **2.400 sessões simuladas** de seleção de exercícios (200 seleções para cada um dos 12 módulos), verificando 16 itens, seis difíceis e ausência de duplicatas por sessão.
4. **Sintaxe JavaScript verificada** em todos os 13 arquivos JS entregues (`node --check`).
5. **Integridade do ZIP e conteúdo** verificados após sua criação (conforme etapa final de empacotamento).

## Referências de apoio para revisão
- STF — aula de pronomes relativos: https://ead.stf.jus.br/cursos/caminhosdapontuacao/aula4/
- Ciberdúvidas — uso de cujo: https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/pronome-cujo/3553
- Embrapa — manual de gramática e concordância: https://www.embrapa.br/manual-de-producao-editorial/gramatica

## Limitações e riscos remanescentes
- **Não foi realizada homologação no navegador** do usuário nem na URL publicada do GitHub Pages.
- **Não foi testada uma autenticação real no Google Drive.** Os módulos não alteram a integração existente.
- **Gabaritos não passaram por revisão humana independente**. Testes de índice e consistência não provam, por si só, que todas as alternativas estão semanticamente corretas.
- A simulação de sessões reproduziu as regras de seleção verificadas, mas **não executou o motor completo de exercícios com DOM e gravação de progresso**.
- Recomenda-se instalar em uma branch de testes e realizar o roteiro manual documentado antes de considerar o lote homologado.
