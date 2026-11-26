# Contrato de compatibilidade pedagógica e histórico

## Invariantes confirmadas no lote

- 100 IDs originais permanecem idênticos.
- Cada questão conserva `moduleId`, `subtopicId`, `type`, `difficulty`, `answer`, `tipo` e `origem`.
- Não se altera a quantidade de alternativas de nenhum item.
- O banco original de POR-01 a POR-03, POR-09 a POR-24 e RED-01 a RED-03 fica fora deste pacote.
- Os formatos `ce` continuam com `['CERTO', 'ERRADO']` em posições fixas.
- Nos demais formatos, os testes confirmam que permutar os índices de exibição preserva o índice original do gabarito e de seu comentário.
- Todas as respostas são AUTORAIS; nenhuma banca, prova ou gabarito real foi atribuído sem fonte.

## O que esta correção NÃO pode garantir

O armazenamento histórico do aplicativo registra a alternativa escolhida por **índice**, mas não o texto exato da alternativa no momento da tentativa. Quando o texto de uma alternativa muda sem mudar seu índice e correção, a pontuação continua tecnicamente consistente, mas a visualização futura do mesmo ID pode mostrar a alternativa reescrita. O arquivo `SNAPSHOT_PRE_REVISAO_100_QUESTOES.json` guarda o original para auditoria humana, **não** implementa versionamento automático do histórico.

Não existem substituições artificiais de gabarito apenas para alterar a distribuição das letras ou a razão CERTO/ERRADO. O desequilíbrio remanescente deve ser tratado futuramente, de preferência com itens novos versionados, nunca por inversão de gabarito de questão já respondida.

## Testes que dependem de ambiente real

Os dois testes locais de integração com `js/features/*` são ignorados quando o motor não está dentro do ZIP; o GitHub Actions os executará após o upload. Validação do Google Drive, recarga de navegador, backup real e conflitos entre duas abas ainda requerem homologação manual. Nenhuma dessas ações foi executada em dados de usuário.
