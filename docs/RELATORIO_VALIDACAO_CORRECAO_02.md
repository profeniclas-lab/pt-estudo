# PT-ESTUDO — Relatório técnico da Correção 2

**Data:** 26 de novembro de 2026  
**Escopo:** validação profunda de identificadores, integridade de backup/estado, reinício protegido e regressão em memória.  
**Referência GitHub:** branch `nova-arquitetura`, commit `e40846a57a225b2ef62006d3b38da94cad4bafb8`.

## Resultado

- **31/31 testes de regressão Node.js aprovados** antes de empacotar.
- **21/21 verificações da suíte interna de backup aprovadas** em armazenamento simulado.
- Testes de sintaxe JavaScript dos cinco arquivos alterados (incluindo o novo módulo de validação) aprovados.
- Nenhum arquivo do usuário foi restaurado, apagado ou modificado.
- Nenhum arquivo dos módulos de estudo ou da conexão OAuth/Drive foi modificado.

## Mudanças e contratos preservados

| Arquivo | Modificação |
|---|---|
| `js/core/progress-identity.js` | Novo scanner iterativo, limitado, somente leitura, para referências administrativas em campos de identificação aninhados; ignora texto livre |
| `js/core/progress-backup-validator.js` | Passa a usar o scanner para bloquear backups híbridos com `ADM-`, `AP-`, `DA-` e respectivas questões |
| `js/core/storage-safety.js` | Bloqueia carregamento e salvamento de estados híbridos, sem reescrever o progresso existente |
| `js/core/backup-integrity-tests.js` | Acrescenta verificações de revisão, simulados, Banco, Jornada e texto livre |
| `js/core/reset-progress.js` | Verifica estado de entrada e saída, e confere alteração no armazenamento antes de reiniciar |
| `tests/pt-backup-correction02.test.mjs` | 31 testes de regressão, com armazenamento `Map` isolado e DOM simulado apenas para downloads |
| `.github/workflows/pt-estudo-regressao-backup.yml` | Executor GitHub Actions sob demanda e ao alterar os arquivos monitorados |

## Casos comprovados

1. Backup PT legítimo com dados aninhados passa por validação, recuperação, armazenamento e serialização Drive.
2. O mesmo backup é recusado se mudar o formato ou a identidade para Administração.
3. IDs administrativos em mapas de módulos, aulas, questões, flashcards e revisões são recusados.
4. Também são recusados IDs administrativos em sessões do Banco, seus filtros, simulados ativos/finalizados, ordens, Jornada, revisão adaptativa e navegação.
5. Um comentário pedagógico que **cita** um ID administrativo em texto livre não gera recusa falsa.
6. A inspeção não realiza `setItem`/`removeItem` sobre o localStorage do perfil do usuário.
7. Uma restauração repetida não substitui a primeira cópia de recuperação.
8. Uma divergência detectada antes da restauração bloqueia a substituição.
9. Reiniciar apenas POR-01 mantém registros de POR-02 e não toca na chave do aplicativo de Administração.
10. Um estado híbrido não pode ser reiniciado; uma alteração concorrente detectada antes da escrita cancela a operação.

## Limitações importantes

A inspeção identifica referências administrativas **reconhecíveis como IDs** em campos estruturados; não identifica automaticamente a origem de dados indevidamente misturados quando foram renomeados para IDs PT válidos. A última leitura antes da gravação reduz riscos de concorrência, mas não torna `localStorage` uma transação atômica. O Google Drive foi verificado apenas quanto ao uso do validador compartilhado; não foi feita autenticação nem restauração real. O conteúdo pedagógico permanece fora do escopo.

**Homologação final:** pendente de testes no navegador e no Google Drive por botão, em perfil de teste separado.
