# PT-ESTUDO — Correção 4: relatório de homologação técnica

**Data de referência:** 27/11/2026  
**Repositório:** `profeniclas-lab/pt-estudo`, branch `nova-arquitetura`  
**Estado:** **APROVAÇÃO TÉCNICA PARCIAL; HOMOLOGAÇÃO FUNCIONAL DEFINITIVA PENDENTE**.

## 1. Escopo efetivamente inspecionado

- Catálogo completo de Português e Redação Oficial: 27 módulos, 140 subtópicos/aulas, 140 diagnósticos e 560 questões.
- Contratos da geração de exercícios, embaralhamento e consistência do banco.
- Registros de CI/implantação do GitHub e existência de workflows de teste na branch.
- Testes locais de backup, validação de identidade, recuperação e isolamento de dados.
- Ensaios em memória, com as funções do motor obtidas da branch, para exercícios, Banco, simulados, diagnóstico e revisão.
- Ligações de arquivos `import` dos principais módulos e recursos CSS/JS mencionados em `index.html`.

## 2. Resultados verificados

| Verificação | Resultado | Método / alcance |
|---|---:|---|
| Catálogo | 27 / 27 | Importação Node dos arquivos acumulados das entregas |
| Aulas e diagnósticos | 140 / 140 | Inspeção dos dados e vínculos dos subtópicos |
| Questões | 560 / 560 | IDs únicos, gabaritos dentro do intervalo, comentários por opção |
| Importações dos arquivos principais | 92 / 92 | Verificação contra árvore real do GitHub |
| Recursos CSS/JS de `index.html` | Sem caminhos ausentes | Comparação contra árvore real do GitHub |
| Sintaxe JavaScript reconstruída dos pacotes | 117 / 117 | `node --check`, incluindo arquivos dos módulos |
| Regressões de backup | 31 / 31 | `node --test tests/pt-backup-correction02.test.mjs` |
| Geração de sessões, motor real | 945 / 945 | 35 por módulo, 27 módulos; sem falhas |
| Sessões do Banco, motor real | 35 / 35 | Registro e encerramento em memória, com auxiliares isolados |
| Sessões de Simulados, motor real | 35 / 35 | Seleção, respostas, nota e histórico; auxiliares isolados |
| Sessões de revisão, motor real | 35 / 35 | Início, resposta, avaliação e agendamento; auxiliares isolados |
| Registros de diagnóstico, motor real | 35 / 35 | Gravação em memória; auxiliares isolados |
| GitHub Pages | Implantação mais recente: sucesso | Resultado publicado pelo GitHub Actions |
| CI de regressão na branch | **NÃO INSTALADO** | Nenhum arquivo em `.github/workflows/` na árvore da branch antes desta entrega |
| Interface real no navegador | **PENDENTE** | Não foi executado um fluxo ponta a ponta em navegador ligado à página publicada |
| OAuth Google Drive e restauração real | **PENDENTE** | Sem acesso à sessão Google do estudante; operações não executadas |

### Ressalva do checkout local

Os ZIPs anteriores permitem reconstruir os dados e componentes de backup, mas **não contêm todos os arquivos originais do motor e CSS do GitHub**. Assim, dos 5 testes de catálogo/recursos executados localmente, 4 passaram e 1 acusou ausência de `style.css` **somente na cópia local parcial**. O arquivo `style.css` e os demais estilos foram verificados como existentes na **branch real**, portanto isso **não é classificado como erro do site**.

Algumas suítes antigas também não puderam rodar integralmente nessa cópia local por falta dos arquivos do motor; não se conclui que falhem no GitHub. Os novos testes desta entrega foram preparados especificamente para executar em um checkout completo via GitHub Actions.

## 3. Achados e gravidade

**BLOQUEADOR DE HOMOLOGAÇÃO 1 — CI ausente da branch.** Apesar dos ZIPs anteriores terem incluído arquivos `.github/workflows`, o repositório não apresentava workflows de testes; os runs consultados eram de `pages build and deployment`. **Correção entregue:** workflow novo em `.github/workflows/pt-estudo-homologacao-final.yml`, sem instalar pacotes no app.

**BLOQUEADOR DE HOMOLOGAÇÃO 2 — Verificação ponta a ponta pendente.** Não há evidência de navegador real cobrindo navegação dos 27 módulos, salvamento/recarregamento, falha de armazenamento, revisão, simulado e métricas. **Ação necessária:** executar checklist em perfil separado e registrar resultados.

**BLOQUEADOR DE HOMOLOGAÇÃO 3 — Backup e Drive reais pendentes.** As verificações de estrutura e simulações não substituem login Google, upload, download e restauração entre dispositivos. **Ação necessária:** usar conta Google autorizada e perfil de testes, sempre preservando o backup externo do progresso real.

**RESSALVA EDITORIAL — 140 itens C/E: 105 CERTO e 35 ERRADO.** Não alterar índices de questões já respondidas para produzir distribuição artificial. Tratar em futuras questões com IDs novos, se desejado; não impede a operação do aplicativo.

## 4. Decisão

**Homologação automatizada: parcialmente aprovada.** Os contratos inspecionados e sessões de exercícios passaram.  
**Homologação final do aplicativo: ainda NÃO aprovada.** É condicionada ao workflow de testes em verde **e** à aprovação do checklist real de navegador/Google Drive.

A Correção 4 fornece **instrumentação de testes e instruções**, não altera o banco pedagógico, as funções do motor nem os arquivos de progresso. Não houve leitura nem alteração do `localStorage` do usuário ou de arquivos da sua conta Google.
