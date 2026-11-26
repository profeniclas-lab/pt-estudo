# PT-ESTUDO — Instalação do Lote 03 (POR-07, POR-08, POR-09)

## Pré-requisito
Este é um ZIP **incremental**: requer os Lotes 1 e 2 já instalados no repositório `profeniclas-lab/pt-estudo`, branch `nova-arquitetura`. O Lote 3 não contém os arquivos completos de POR-01 a POR-06, mas os carregadores atualizados continuam importando esses módulos.

Não instalar nada: use somente o navegador e a função nativa de extrair arquivos ZIP do sistema.

## Instalação pelo GitHub
1. Acesse `https://github.com/profeniclas-lab/pt-estudo/tree/nova-arquitetura`. Recomenda-se criar ou selecionar uma branch de teste antes de aplicar este lote.
2. Extraia o ZIP no seu computador. **Não carregue o ZIP como se fosse um arquivo do site.**
3. Na interface do GitHub, use **Add file → Upload files** e envie os arquivos extraídos, verificando os caminhos. Caso o navegador não preserve a pasta ao arrastar, faça o upload por pasta ou substitua os arquivos individualmente no caminho exibido.
4. Confirme que os 5 arquivos existentes foram **substituídos** e que os 9 arquivos pedagógicos foram **adicionados** sem criar caminhos duplicados (por exemplo, não deve surgir `pt-estudo/js/data/...` dentro da raiz).
5. Teste o aplicativo no GitHub Pages com dados fictícios antes de prosseguir aos estudos pessoais ou usar a restauração do Drive.

## SUBSTITUIR (5 arquivos completos)
- `js/data/modules.js`
- `js/data/lessons.js`
- `js/data/diagnostics.js`
- `js/data/questions.js`
- `docs/PLANO_27_MODULOS.json`

## ADICIONAR (9 arquivos completos)
- `js/data/portugues/por-07-lessons.js`
- `js/data/portugues/por-07-diagnostics.js`
- `js/data/portugues/por-07-questions.js`
- `js/data/portugues/por-08-lessons.js`
- `js/data/portugues/por-08-diagnostics.js`
- `js/data/portugues/por-08-questions.js`
- `js/data/portugues/por-09-lessons.js`
- `js/data/portugues/por-09-diagnostics.js`
- `js/data/portugues/por-09-questions.js`

## Documentos no próprio ZIP (2 arquivos)
- `docs/INSTALACAO_LOTE_03.md` (este arquivo, novo)
- `docs/RELATORIO_VALIDACAO_LOTE_03.md` (novo)

## Conteúdo deste lote
- POR-07: **Ortografia e emprego de letras** — 5 aulas, 5 diagnósticos e 20 questões.
- POR-08: **Acentuação gráfica e hífen** — 5 aulas, 5 diagnósticos e 20 questões.
- POR-09: **Estrutura e formação de palavras** — 5 aulas, 5 diagnósticos e 20 questões.

As questões são 100% autorais, sem atribuição indevida de banca ou prova. Cada subtópico tem duas médias (uma `ce`, outra variada) e duas difíceis. Cada sessão de exercícios deve apresentar 10 médias e 6 difíceis sorteadas sem IDs repetidos.

## Lista de homologação manual (no GitHub Pages)
1. Verificar **27 módulos apresentados**: 9 disponíveis, 18 em preparação. Módulos em preparação não devem entrar nos simulados ou estatísticas.
2. Abrir POR-07, POR-08 e POR-09, e confirmar 5 aulas, 5 cartões diagnósticos e 20 questões por módulo.
3. Iniciar diagnóstico, virar cartões, marcar `sei/duvida/nao`, salvar, sair e continuar. Confirmar que cada módulo tem um único diagnóstico composto de 5 cartões.
4. Estudar uma aula e avaliar compreensão. Sair e voltar para confirmar persistência.
5. Iniciar duas vezes Exercícios de aprendizagem num módulo de teste. Cada sessão deve conter **16 questões** (10 médias + 6 difíceis) com gabarito e comentários por alternativa após resposta. O motor deve embaralhar opções nas questões não C/E.
6. No Banco de Questões, testar filtro por módulo, dificuldade, não respondidas e comentários. O total ativo deverá ser **180 questões** (somente autorais de Português).
7. Testar Meus Erros, revisão espaçada, simulados, Aproveitamento, Jornada e estatísticas. Os módulos anteriores e seus registros devem permanecer intactos.
8. Confirmar em teste separado que o aplicativo PT-ESTUDO não lê, altera, apaga ou restaura o progresso da chave `admEstudo.v2.state`.
9. Fazer teste de backup/restauração com **dados fictícios em perfil de navegador separado**. O login e salvamento reais no Google Drive precisam de verificação própria; este lote não modifica o código de backup.
10. Conferir os nomes PT-ESTUDO / Português e Redação Oficial no cabeçalho e na página Sobre; este lote reutiliza a identidade já instalada no Lote 1.

## Observações
- Nenhum progresso salvo é regravado por este ZIP; trata-se de arquivos estáticos a publicar.
- IDs dos módulos POR-01 a POR-06 são preservados. Não há migração, reinício nem exclusão de dados.
- Não use o ZIP isoladamente sem os lotes anteriores; ocorrerão erros de importação.
- A verificação automatizada não equivale a teste completo no navegador ou a correção pedagógica independente de cada gabarito.
