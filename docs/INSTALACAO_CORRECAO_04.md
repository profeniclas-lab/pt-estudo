# Instalação da Correção 4 — Homologação funcional

**Tipo de entrega:** somente arquivos **novos** de teste, CI e documentação. **Nenhum arquivo de produção é substituído.**

## Arquivos a adicionar

1. `tests/pt-homologacao-dados.test.mjs`
2. `tests/pt-homologacao-motor.test.mjs`
3. `.github/workflows/pt-estudo-homologacao-final.yml`
4. `docs/C04_RELATORIO_HOMOLOGACAO_TECNICA.md`
5. `docs/C04_CHECKLIST_HOMOLOGACAO_MANUAL.md`
6. `docs/INSTALACAO_CORRECAO_04.md`
7. `docs/C04_EVIDENCIAS_TESTES.json`

## Passo a passo sem instalar programas no computador

1. Abra `https://github.com/profeniclas-lab/pt-estudo/tree/nova-arquitetura`.
2. Extraia o ZIP e adicione os arquivos aos **mesmos caminhos relativos** indicados acima.
3. **IMPORTANTE:** confira separadamente se o arquivo em `.github/workflows/pt-estudo-homologacao-final.yml` realmente apareceu. Workflows anteriores estavam ausentes na branch. Se não aparecer, no GitHub use **Add file → Create new file**, digite o caminho completo `.github/workflows/pt-estudo-homologacao-final.yml` e cole o conteúdo do arquivo do ZIP.
4. Abra **Actions** → **PT-ESTUDO - Homologacao automatizada** → **Run workflow**, selecionando a branch `nova-arquitetura`.
5. Confirme que as etapas de sintaxe e `node --test` terminaram com status verde. Se falhar, use os detalhes da Action para identificar a função ou teste; uma falha é evidência para correção, não motivo para apagar testes.
6. Execute o checklist `docs/C04_CHECKLIST_HOMOLOGACAO_MANUAL.md` usando **perfil de testes separado**, não o perfil com o único progresso salvo.
7. Somente declare o projeto definitivamente homologado após concluir os testes automáticos e manuais, incluindo Drive.

## Preservação

- Não substitui `js/app.js`, `index.html`, `js/data/**`, `js/core/**` ou `js/features/**`.
- Não altera IDs, questões, gabaritos, aulas, notas ou schema do backup.
- Nenhuma escrita é feita no GitHub pelo assistente; o upload é manual, no seu fluxo habitual.
- O GitHub Actions usa Node.js **apenas no servidor para testar**. O aplicativo continua HTML/CSS/JavaScript puro, sem Node.js em execução no navegador.
