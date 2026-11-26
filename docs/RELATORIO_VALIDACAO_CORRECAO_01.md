# Relatório técnico — PT-ESTUDO, Correção 1

**Data de referência:** 26/11/2026  
**Origem do código:** GitHub `profeniclas-lab/pt-estudo`, branch `nova-arquitetura`, commit `4ca01bcfdcafaacdfde194968cdb98b7c9d481b1`.

## 1. Mudanças realizadas

| Área | Alteração | Risco pedagógico |
|---|---|---|
| Persistência | Fixture `POR-01`; envelope usa `BACKUP_FORMAT` e recusa formato ADM explicitamente | Sem alterações de dados reais |
| Recarga simulada | IDs `POR-01` em lugar de `ADM-01` | Sem alteração dos registros existentes |
| Auditoria integrada | Exemplo PT válido + caso ADM inválido; relatório PT | Somente leitura no estado real |
| Aplicativo/entrada | Título da rota definido como PT-ESTUDO em `js/app.js`; entrada sem observador do título | Eventos, navegação, salvamento e cálculos preservados |
| Dashboard | Identidade PT nos relatórios; corrigida mensagem de meta de 75 pontos | Sem modificação do cálculo |
| Flashcards | Contagem dinâmica de cartões disponíveis | Agendamentos preservados |
| Aulas | Cabeçalho “Exemplo aplicado” | Dados das aulas inalterados |
| Módulos | Aviso de futuros lotes oculto quando todos os 27 estão disponíveis | Catálogo e progresso inalterados |
| Banco de Questões | Rótulos de `afirmacoes` e `vfseq` | Tipos originais e alternativas preservados |
| Manutenção, reinício, orientações Drive | Nomes de relatórios e orientações PT | Nenhuma alteração nas regras de reset, backup ou Drive |

## 2. Testes executados no ambiente de desenvolvimento

- **14 arquivos JS:** `node --check` sem erros de sintaxe.
- **16 verificações de persistência:** aprovadas em armazenamento simulado.
- **11 verificações de salvamento/recarga:** aprovadas em armazenamento simulado.
- **Backup:** envelope PT validado; formato ADM explicitamente recusado.
- **Isolamento de armazenamento:** as operações de diagnóstico não alteraram o snapshot em memória representando os dados atuais.
- **UI de Módulos:** 27 disponíveis e mensagem de liberação concluída; verificado sem navegador, com renderizador em objeto de teste.
- **UI de Flashcards:** 140 cartões/subtópicos; verificação simulada de renderização.
- **UI de Aulas:** cabeçalho “Exemplo aplicado”; verificação simulada de renderização.
- **UI do Banco:** rótulos legíveis para `afirmacoes` e `vfseq` (69 itens afetados); verificação simulada de renderização.
- **Dados dos módulos:** `test_lote9.mjs` e `test_selection_lote9.mjs` reexecutados com êxito sobre a base original; o ZIP desta correção não contém arquivos `js/data/`.

**Limites de cobertura:** os testes de UI foram executados com dependências de teste simplificadas, não com o navegador completo. Não foram executados o motor inteiro de ponta a ponta no GitHub Pages, a integração Google real, testes de conflito entre abas nem uma revisão semântica dos 560 gabaritos. Assim, a aplicação permanece **PENDENTE DE HOMOLOGAÇÃO MANUAL**.

## 3. Riscos e controles

- A implantação deve ocorrer preferencialmente em uma branch de teste. Faça backup JSON previamente.
- Este lote não chama funções de reinício ou restauração ao instalar; o único reset continua dependendo de confirmação explícita do usuário.
- As chaves `ptEstudo.v1.state`, os formatos próprios e a validação PT não foram alterados.
- `js/start-f25-lote04.js` passa a importar diretamente `./app.js`, sem import do observador antigo. O arquivo de observador pode permanecer sem uso.
- Não substitua arquivos caso a branch tenha mudanças posteriores não auditadas sem comparar as diferenças.

## 4. Pendências encaminhadas

1. **Correção 2:** validação defensiva de IDs administrativos aninhados em arquivos de backup e testes de regressão versionados.
2. **Correção 3:** revisão editorial das 560 questões em lotes de até três módulos (exemplos, desafios, distribuição CERTO/ERRADO, gabaritos).
3. **Correção 4:** testes manuais de navegação, persistência, restauração, simulados e Drive em perfis separados.
