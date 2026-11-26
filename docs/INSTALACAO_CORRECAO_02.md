# PT-ESTUDO — Correção 2: segurança de backup e regressão

**Base auditada:** `profeniclas-lab/pt-estudo`, branch `nova-arquitetura`, commit `e40846a57a225b2ef62006d3b38da94cad4bafb8` (26/11/2026).  
**Pré-requisito:** Correção 1 instalada.  
**Não altera:** 27 módulos, 140 aulas, 140 cartões, 560 questões, gabaritos, histórico, pesos de aproveitamento, configuração OAuth ou serviço Google Drive.

## Arquivos completos para envio

| Caminho no repositório | Operação |
|---|---|
| `js/core/progress-identity.js` | **Adicionar primeiro** |
| `js/core/progress-backup-validator.js` | Substituir |
| `js/core/storage-safety.js` | Substituir |
| `js/core/backup-integrity-tests.js` | Substituir |
| `js/core/reset-progress.js` | Substituir |
| `tests/pt-backup-correction02.test.mjs` | Adicionar |
| `.github/workflows/pt-estudo-regressao-backup.yml` | Adicionar |
| `docs/INSTALACAO_CORRECAO_02.md` | Adicionar |
| `docs/RELATORIO_VALIDACAO_CORRECAO_02.md` | Adicionar |

## Instalação sem programa adicional

1. Antes de atualizar, use **Configurações → Exportar backup JSON** e guarde o arquivo fora do navegador. Não faça testes de restauração no seu progresso principal.
2. Abra a branch `nova-arquitetura` em <https://github.com/profeniclas-lab/pt-estudo/tree/nova-arquitetura>. Confira se não houve novas modificações concorrentes.
3. Extraia o ZIP pelo gerenciador de arquivos do sistema e envie os arquivos completos, **mantendo os caminhos**. Prefira uma branch temporária e um único commit para a atualização.
4. Se enviar os arquivos em commits separados, **crie primeiro** `js/core/progress-identity.js`, pois dois arquivos existentes passarão a importá-lo.
5. Crie as pastas `tests/` e `.github/workflows/` caso ainda não existam. O conteúdo do workflow pode ser criado pelo próprio editor de arquivos do GitHub, sem instalar nada no computador.
6. Acesse a aba **Actions** do GitHub, escolha **PT-ESTUDO - Regressao de backups (Correcao 2)** e use **Run workflow** na branch de teste (ou aguarde a execução ao publicar na `nova-arquitetura`). O runner remoto instala Node.js para os testes; nenhum programa local é necessário.
7. Teste manualmente o PT-ESTUDO no GitHub Pages, em perfil de navegador **sem seu progresso real**. Só depois use o aplicativo principal.

## O que muda

- A validação examina IDs de módulos e questões presentes em **campos estruturados**, incluindo sessões do Banco, filtros, simulados, revisão, Jornada e navegação.
- O backup JSON, a restauração bruta, o Google Drive (por usar o mesmo validador), o salvamento local e o botão de reinício recusam um estado híbrido contendo referências administrativas.
- O validador **não** interpreta enunciados, comentários e outros textos livres como IDs; citar `ADM-01` em uma explicação, por si só, não invalida um backup PT.
- Se um estado incompatível já estiver salvo, **a gravação é bloqueada sem apagar os bytes originais**. É necessário investigar a origem do arquivo, em vez de limpar indiscriminadamente o armazenamento.
- O fluxo manual por botões do Google Drive permanece igual; **não há sincronização automática nem mesclagem entre dispositivos**.

## Checklist após envio

- [ ] Página carrega, Dashboard e Módulos exibem as 27 unidades.
- [ ] Responder uma questão num perfil de teste e recarregar; resposta persiste.
- [ ] Exportar JSON PT em perfil de teste e validar o arquivo.
- [ ] Tentar importar arquivo propositalmente incompatível **somente em perfil de teste**; a restauração deve ser recusada e o estado anterior preservado.
- [ ] Executar auditorias em Configurações e conferir o relatório de integridade.
- [ ] Executar GitHub Actions e conferir todos os 31 testes.
- [ ] Em perfil de teste, verificar backup manual por botão no Google Drive e outra máquina, sem mesclar estados.

## Limites

Os testes automatizados executam **estados simulados**, com exceção de leituras indiretas do próprio código da aplicação. Eles não fazem login no Google, não alteram a branch, não garantem atomicidade entre duas abas no instante físico da escrita e não substituem a homologação manual em navegador.

**Não execute o reinício nem a restauração com seu progresso real apenas para testar a correção.**
