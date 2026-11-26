# PT-ESTUDO — Lote 02: POR-04, POR-05, POR-06

## Escopo
Três módulos integrados ao catálogo existente, sem alterar os dados ou o progresso dos módulos POR-01 a POR-03.

- POR-04 — Coerência e coesão textual: 5 aulas, 5 cartões diagnósticos, 20 questões (10 médias; 10 difíceis).
- POR-05 — Semântica e significação: 5 aulas, 5 cartões diagnósticos, 20 questões (10 médias; 10 difíceis).
- POR-06 — Variação linguística e adequação: 5 aulas, 5 cartões diagnósticos, 20 questões (10 médias; 10 difíceis).

**Acumulado nos módulos publicados:** 6 módulos, 30 aulas, 30 cartões diagnósticos, 120 questões autorais; outros 21 módulos continuam em preparação.

## Instalação sem instalar programas
1. Abra GitHub > profeniclas-lab/pt-estudo > branch nova-arquitetura. Faça uma cópia da branch ou use uma branch de teste.
2. Extraia este ZIP pela função nativa do Windows/macOS e envie os arquivos, preservando as pastas. Não envie o ZIP como arquivo único.
3. Substitua SOMENTE os arquivos listados abaixo. Os conteúdos POR-01 a POR-03 permanecem intactos.
4. Teste POR-04, POR-05 e POR-06 no navegador antes de utilizar o aplicativo para estudos contínuos.

## Arquivos a substituir
- `js/data/modules.js`
- `js/data/lessons.js`
- `js/data/diagnostics.js`
- `js/data/questions.js`
- `docs/PLANO_27_MODULOS.json`

## Arquivos a adicionar
- `js/data/portugues/por-04-lessons.js`
- `js/data/portugues/por-04-diagnostics.js`
- `js/data/portugues/por-04-questions.js`
- `js/data/portugues/por-05-lessons.js`
- `js/data/portugues/por-05-diagnostics.js`
- `js/data/portugues/por-05-questions.js`
- `js/data/portugues/por-06-lessons.js`
- `js/data/portugues/por-06-diagnostics.js`
- `js/data/portugues/por-06-questions.js`

## Testes manuais essenciais
- A página Módulos deve mostrar 27 nomes, 6 disponíveis e 21 em preparação.
- POR-01, POR-02 e POR-03 preservam as atividades/progresso.
- Cada novo módulo mostra cinco aulas e cinco cartões de diagnóstico.
- Ao iniciar Exercícios de aprendizagem, a sessão apresenta dez questões médias e seis difíceis escolhidas entre dez disponíveis, com posições das alternativas mantidas durante a tentativa.
- O Banco de Questões exibe 120 itens autorais nos seis módulos ativos; filtro de não respondidas, correções e confiança funcionam.
- Simulados, revisão, Minha Jornada e estatísticas utilizam apenas os seis módulos ativos.
- Verifique que nenhum dado ADM-ESTUDO é lido, modificado ou restaurado no PT-ESTUDO.
- Drive e restauração precisam de ensaio em perfil isolado, com dados fictícios.

## Limitações
Testes de estrutura e seleção são automatizados; não substituem revisão pedagógica independente de cada gabarito nem homologação real em navegador e autenticação Google. O ZIP não altera diretamente o repositório.
