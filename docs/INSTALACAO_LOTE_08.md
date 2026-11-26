# PT-ESTUDO — Lote 08 (POR-22, POR-23 e POR-24)

## Objetivo

Ativar três módulos completos de Língua Portuguesa no aplicativo estático, mantendo todos os IDs, aulas, diagnósticos, questões, progresso local, backups e integração Google Drive já existentes.

## Arquivos deste ZIP

**Substituir os 5 arquivos completos:**

- `js/data/modules.js`
- `js/data/lessons.js`
- `js/data/diagnostics.js`
- `js/data/questions.js`
- `docs/PLANO_27_MODULOS.json`

**Adicionar 9 arquivos novos (Lote 08):**

- `js/data/portugues/por-22-lessons.js`
- `js/data/portugues/por-22-diagnostics.js`
- `js/data/portugues/por-22-questions.js`
- `js/data/portugues/por-23-lessons.js`
- `js/data/portugues/por-23-diagnostics.js`
- `js/data/portugues/por-23-questions.js`
- `js/data/portugues/por-24-lessons.js`
- `js/data/portugues/por-24-diagnostics.js`
- `js/data/portugues/por-24-questions.js`

**Compatibilidade:** o ZIP inclui também os nove arquivos completos de POR-19 a POR-21, **sem nenhuma alteração editorial**. Se o Lote 07 já estiver instalado, eles são iguais aos do pacote anterior e não precisam ser substituídos. Se você ainda estiver na versão do Lote 06, esses nove arquivos permitem publicar o Lote 08 sem deixar imports ausentes.

**Documentos:** este guia e `docs/RELATORIO_VALIDACAO_LOTE_08.md` podem ser adicionados na pasta `docs/`.

## Instalação pelo GitHub, sem instalar aplicativos

1. Entre em `https://github.com/profeniclas-lab/pt-estudo` e selecione a branch `nova-arquitetura`.
2. Para maior segurança, faça uma cópia da branch antes de substituir arquivos. Preserve um backup JSON do progresso do próprio PT-ESTUDO.
3. Extraia o ZIP usando a função de extração de arquivos já existente no seu computador. Não envie o ZIP fechado como arquivo isolado no repositório.
4. Abra cada pasta correspondente do repositório e faça upload dos arquivos completos, substituindo os existentes quando solicitado. Mantenha exatamente os caminhos listados acima.
5. Aguarde a publicação da versão nova no GitHub Pages e atualize a página. Se o navegador mantiver arquivos antigos em cache, faça uma atualização completa da página.
6. Confira o diagnóstico e as aulas de POR-22, POR-23 e POR-24, o Banco de Questões e os simulados, seguindo o checklist abaixo.

## Critérios de verificação manual

- Cabeçalho mostra **PT-ESTUDO — Português e Redação Oficial**.
- Página Módulos exibe **27 módulos**, com **24 disponíveis** e **3 RED em preparação**.
- POR-22, POR-23 e POR-24 aparecem no Dashboard e na lista de módulos, sem eliminar POR-01 a POR-21.
- Cada novo módulo apresenta **5 cartões diagnósticos**, **5 aulas** e **20 questões** no banco.
- Exercícios de cada novo módulo: **10 médias obrigatórias** (5 C/E e 5 variadas) e **6 difíceis sorteadas**, totalizando **16** por tentativa.
- Respostas e comentários acompanham a alternativa exibida quando a ordem é embaralhada.
- Uma aula marcada como estudada e uma questão respondida continuam registradas após recarregar o site.
- Filtro de questões por módulos, simulados e revisão devem reconhecer os novos itens.
- Exportação/importação JSON e Google Drive somente por botão, sempre no namespace próprio de PT-ESTUDO, não no Dir-Adm.
- Teste restauração e reinício somente em perfil de navegador separado, preservando dados reais.

## Restrições e observações

- Este pacote **não modifica** arquivos em `js/core/`, `js/features/`, `js/config/`, `index.html` ou CSS.
- O progresso do Dir-Adm não é migrado e nenhum registro antigo do PT-ESTUDO é apagado pelo código deste lote.
- As 60 questões novas são **autorais**, não transcrições de provas reais.
- A validação de importação e os sorteios automatizados foram realizados com Node.js **neste ambiente de preparação**. Você não precisa instalar Node.js para enviar os arquivos ao GitHub.
- A execução completa do aplicativo, testes reais do navegador, OAuth e restauração permanecem sujeitos a homologação manual.
