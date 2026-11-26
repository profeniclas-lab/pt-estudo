# PT-ESTUDO — Relatório de validação técnica do Lote 08

## Escopo efetivamente produzido

- Módulos novos: POR-22 (Reescrita, correção e paralelismo), POR-23 (Figuras de linguagem e recursos expressivos), POR-24 (Produção textual para provas discursivas).
- **3 módulos; 15 aulas; 15 diagnósticos (um flashcard por subtópico); 60 questões autorais**.
- Cada um dos 15 subtópicos tem **1 C/E médio, 1 média de formato variado e 2 difíceis**.
- As 60 questões novas têm comentários ligados às alternativas e campos de explicação, conceito, pegadinha, dica, exemplo e desafio.
- Código central atualizado para **24 módulos ativos e 3 em preparação**, com **120 aulas, 120 flashcards diagnósticos e 480 questões**.
- Formatos presentes no lote: `ce`, `classica`, `vf`, `afirmacoes`, `associacao`, `lacunas`, `exceto`.

## Verificações realmente executadas

- Importação real dos arquivos de dados do conjunto de 24 módulos via Node.js: **aprovada**.
- `validateCatalog()` sem erros; IDs de questões únicos, referências ao catálogo existentes, um diagnóstico e uma aula por subtópico: **aprovados**.
- Conferência de 10 questões médias e 10 difíceis por novo módulo e 5/5 subtópicos contemplados: **aprovada**.
- Conferência de arrays `optionComments`, alternativas distintas, resposta inteira e dentro dos limites, formatos e identificação autoral: **aprovada**.
- **17.404 verificações** no teste integrado de dados e simulação, incluindo **300 sessões de seleção** para POR-22 a POR-24: 16 itens únicos por sessão (10 médias e 6 difíceis), CE na ordem fixa e demais opções com permutações válidas.
- Sintaxe JavaScript dos arquivos do pacote: **verificada com Node.js**.
- Os **63 arquivos** dos módulos POR-01 a POR-21 foram conferidos contra os ZIPs anteriores e permanecem byte a byte inalterados.
- Integridade ZIP e nomes dos caminhos: verificados no empacotamento.

## O que NÃO foi homologado

- A seleção de exercícios foi **simulada a partir do contrato da função** `createExerciseSession`; a função real e a navegação completa do navegador não foram executadas neste teste.
- Não foram feitos testes reais de cliques, interface, CSS, temas, GitHub Pages, sincronização OAuth/Google Drive nem restauração local.
- Não houve revisão linguística **independente** das 60 questões. Validações de formato não provam, isoladamente, a unicidade semântica do gabarito.
- O pacote não altera o código de persistência. A preservação de dados é garantida no escopo dos arquivos incluídos, não um teste completo de todos os fluxos de gravação da aplicação.

## Base de integração

- Versão base: Lote 07, cujo conteúdo dos cinco carregadores centrais corresponde à branch `nova-arquitetura` observada imediatamente antes da entrega.
- O ZIP também contém os nove arquivos do Lote 07, sem alterações, para permitir instalação direta em uma base do Lote 06 caso necessário.
