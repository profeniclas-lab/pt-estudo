# PT-ESTUDO — Lote 4 (POR-10, POR-11 e POR-12)

**Base conferida:** repositório `profeniclas-lab/pt-estudo`, branch `nova-arquitetura`, com os módulos POR-01 a POR-09 já publicados. O ZIP depende dos Lotes 1–3.

## Como instalar sem qualquer programa adicional

1. Preserve um backup do progresso atual usando Configurações → Exportar backup. Não restaure um arquivo de Administração.
2. Abra a branch `nova-arquitetura` do repositório `pt-estudo` no GitHub. Recomenda-se usar uma branch de testes inicialmente.
3. Extraia o ZIP com a função de descompactação do sistema operacional. **Não envie o ZIP fechado como arquivo único**.
4. Suba os arquivos completos respeitando a estrutura de pastas. Se o GitHub pedir confirmação de substituição, use os cinco caminhos abaixo para substituir e os nove novos caminhos para adicionar.
5. Confirme que o commit não alterou o repositório `Dir-Adm`. Aguarde a atualização do GitHub Pages e recarregue a página.

### Arquivos completos para SUBSTITUIR
- `js/data/modules.js`
- `js/data/lessons.js`
- `js/data/diagnostics.js`
- `js/data/questions.js`
- `docs/PLANO_27_MODULOS.json`

### Arquivos novos para ADICIONAR
- `js/data/portugues/por-10-lessons.js`
- `js/data/portugues/por-10-diagnostics.js`
- `js/data/portugues/por-10-questions.js`
- `js/data/portugues/por-11-lessons.js`
- `js/data/portugues/por-11-diagnostics.js`
- `js/data/portugues/por-11-questions.js`
- `js/data/portugues/por-12-lessons.js`
- `js/data/portugues/por-12-diagnostics.js`
- `js/data/portugues/por-12-questions.js`

### Testes manuais no navegador (necessários para homologação)

1. O cabeçalho continua **PT-ESTUDO — Português e Redação Oficial**.
2. Módulos: devem aparecer os 27 nomes planejados, 12 disponíveis e 15 em preparação.
3. POR-10, POR-11 e POR-12: abrir cada módulo, estudar as cinco aulas e navegar pelos cinco diagnósticos.
4. Em cada módulo, iniciar os exercícios: 16 questões (10 médias e 6 difíceis distintas), embaralhamento das alternativas, correção e autoavaliação.
5. Banco de Questões: filtrar POR-10/11/12, conferir total de 20 por módulo e o filtro não respondidas.
6. Flashcards: conferir os quinze cartões novos, sem confundir estudo global e diagnóstico do módulo.
7. Fazer uma sessão de revisão e simulado para conferir a integração das questões.
8. Recarregar a página: conferir persistência, aproveitamento e conclusão de atividade.
9. Usar backup/restauração apenas com um perfil de navegador de testes, verificando que o progresso administrativo continua intacto.
10. Testar login, envio e restauração Google Drive **em ambiente seguro de teste**, após guardar o backup anterior.

### O que não mudou

Nenhum arquivo de `js/core/storage.js`, `js/core/state.js`, Google Drive, motor de revisões, CSS, `index.html` ou arquivos individuais POR-01 a POR-09 foi modificado. Os IDs e respostas existentes permanecem íntegros.

**Limitações:** a validação automática não substitui conferência pedagógica humana independente, teste do navegador ou autenticação Google real.
