# Correção 3 — Lote 6 | Relatório pedagógico e normativo

**Escopo:** POR-24, RED-01, RED-02 e RED-03 — revisão pedagógica de 100 questões AUTORAIS do PT-ESTUDO.
**Referência de código:** branch `nova-arquitetura`; arquivos originais comparados a seus Git blob SHA-1 oficiais em 27/11/2026.

## O que foi efetivamente conferido

- As 100 soluções foram justificadas com fundamento textual próprio e comparadas com o gabarito já persistido; não houve divergência de índice identificada.
- 36 questões receberam ajustes direcionados em enunciados ou alternativas, com comentários nos índices correspondentes.
- 100 exemplos adicionais e 100 desafios receberam redações distintas.
- Os 25 itens CERTO/ERRADO receberam comentários específicos para a resposta correta e a incorreta.
- Questões continuam AUTORAIS; não foi inventada atribuição de banca ou copiado enunciado de prova.
- Os 100 IDs, subtopicIds, tipos, dificuldades e índices de gabarito foram preservados.

| Módulo | Revisadas | Alterações de enunciado/alternativas | Certo | Errado |
|---|---:|---:|---:|---:|
| POR-24 | 20 | 5 | 1 | 4 |
| RED-01 | 24 | 8 | 3 | 3 |
| RED-02 | 28 | 11 | 5 | 2 |
| RED-03 | 28 | 12 | 5 | 2 |

## Questões específicas aprimoradas

- **POR-24:** substituídas opções absolutas ou artificiais sobre tese e planejamento por erros verificáveis de atendimento ao comando; preservadas as condições dos casos discursivos.
- **RED-01:** melhorados distratores sobre precisão, impessoalidade e concisão; remarcação passou a conter local explícito, sem depender de referência ausente.
- **RED-02:** distinção temporal entre Manual de 2018 e Decreto de 2019; tratamento e endereçamento delimitados ao âmbito do Decreto; uma questão de fecho passou a indicar duas autoridades da mesma hierarquia.
- **RED-03:** correção dos casos de comprovação de envio versus leitura, circulação de dados pessoais e restrição de candidatos aprovados; alternativas agora possuem razões refutáveis sem caricaturas.

## Fonte e vigência: separação essencial

**Manual de Redação da Presidência da República, 3ª edição, aprovado pela Portaria nº 1.369/2018:** orienta redação de comunicações oficiais e padroniza o formato de ofícios. Quanto ao fecho, prevê Respeitosamente para destinatário superior e Atenciosamente para destinatário de mesma hierarquia, inferior ou demais casos no seu âmbito.
**Decreto nº 9.758, de 11 de abril de 2019:** disciplina tratamento e endereçamento nas comunicações com agentes públicos da Administração Pública Federal direta e indireta. No âmbito do Decreto, o art. 2º prevê senhor, flexionado; o art. 3º veda formas como Vossa Magnificência; o art. 3º, §2º, veda negar prática de ato apenas por erro de tratamento; o art. 4º apresenta regra geral de endereçamento sem nome e exceções expressas. Seu art. 1º, §3º, delimita situações não alcançadas. Não estender automaticamente essas prescrições a Legislativo, Judiciário, outros entes ou normas especiais.
**CONARQ:** em documentos eletrônicos, autoria e integridade apoiam autenticidade; registros de envio, recebimento e leitura não são sinônimos de assinatura ou ciência formal, cuja exigência depende do procedimento.

### Endereços oficiais conferidos

- Presidência: https://www4.planalto.gov.br/centrodeestudos/pages/assuntos/manual-de-redacao-da-presidencia-da-republica.html
- Manual 2018 (PDF hospedado na Presidência): https://portaldalegislacao-classico.presidencia.gov.br/assets/docs/manual-de-redacao.pdf
- Texto do Decreto nº 9.758/2019: https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/decreto/d9758.htm
- CONARQ — perguntas sobre documentos eletrônicos: https://www.gov.br/conarq/pt-br/composicao/copy_of_camaras-tecnicas-setoriais-inativas/camara-tecnica-de-documentos-eletronicos-ctde/perguntas-mais-frequentes

## Limites de homologação e preservação

**Não houve auditoria pedagógica humana independente.** A revisão foi realizada por IA e testada estruturalmente. Não garantir ausência absoluta de ambiguidade não detectada.
**Preservar ID e índice não recria o texto original da tentativa antiga.** O banco de progresso normalmente guarda o ID e o índice; se uma alternativa foi reescrita, o histórico de acerto continua compatível pelo índice, mas a versão literal precisa ser recuperada pelo snapshot editorial incluído. Não fingir versionamento automático inexistente.
**Sem alterações de estado ou motor:** nenhum arquivo `js/core/`, `js/features/`, Google Drive ou schema foi substituído. Manter backups externos antes de atualizar.
**Não executado aqui:** teste real no navegador, login Google, envio/recuperação Drive e workflow da branch após upload. O script de regressão é executável no GitHub Actions.

### Como auditar cada questão

- `docs/C03_L06_RESOLUCOES_100_QUESTOES.json`: resolução individual, índice por conteúdo, texto da alternativa, fontes aplicáveis e campos alterados.
- `docs/C03_L06_SNAPSHOT_ORIGINAL_100_QUESTOES.json`: objeto literal anterior de cada questão.
- `docs/C03_L06_REGISTRO_EDITORIAL_100_QUESTOES.json`: valores antes e depois dos campos reescritos.
- `docs/C03_L06_RESOLUCOES_100_QUESTOES.tsv`: consulta resumida em planilha ou editor de texto.

