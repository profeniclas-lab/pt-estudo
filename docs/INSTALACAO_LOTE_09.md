# PT-ESTUDO — Lote 09: RED-01, RED-02, RED-03

## Objetivo e conteúdo

Ativar três módulos de **Redação Oficial**, concluindo o planejamento de **27 módulos** do PT-ESTUDO. O pacote contém **20 aulas completas**, **20 cartões diagnósticos (um por subtópico)** e **80 questões autorais**, com duas médias e duas difíceis em cada subtópico. A composição de exercícios em cada módulo será: **RED-01: 12 médias + 6 difíceis = 18**; **RED-02: 14 médias + 6 difíceis = 20**; **RED-03: 14 médias + 6 difíceis = 20**.

## Arquivos completos para subir ao GitHub

**Substituir** os cinco existentes:
- `js/data/modules.js`
- `js/data/lessons.js`
- `js/data/diagnostics.js`
- `js/data/questions.js`
- `docs/PLANO_27_MODULOS.json`

**Adicionar** os nove arquivos novos (três em cada módulo):
- `js/data/portugues/red-01-lessons.js`
- `js/data/portugues/red-01-diagnostics.js`
- `js/data/portugues/red-01-questions.js`
- `js/data/portugues/red-02-lessons.js`
- `js/data/portugues/red-02-diagnostics.js`
- `js/data/portugues/red-02-questions.js`
- `js/data/portugues/red-03-lessons.js`
- `js/data/portugues/red-03-diagnostics.js`
- `js/data/portugues/red-03-questions.js`

**Documentos complementares:** este guia e `docs/RELATORIO_VALIDACAO_LOTE_09.md`.

### Como publicar sem instalar nenhum programa

1. No GitHub, abra `https://github.com/profeniclas-lab/pt-estudo/tree/nova-arquitetura`.
2. O pacote pressupõe **Lotes 1 a 8 instalados**. Recomenda-se criar uma branch de teste e exportar backup JSON do PT-ESTUDO antes de qualquer alteração.
3. Extraia o ZIP pela ferramenta integrada ao seu sistema; **não envie o ZIP fechado** como arquivo isolado.
4. Substitua os cinco arquivos nos caminhos correspondentes e adicione os nove arquivos de Redação Oficial, preservando a estrutura de pastas. Se o GitHub sinalizar conflito de arquivo existente, escolha substituição do arquivo completo.
5. Aguarde a publicação e atualize a página. Teste os módulos e os indicadores antes de disponibilizar a versão como homologada.

### Checklist manual

- Cabeçalho: **PT-ESTUDO — Português e Redação Oficial**; catálogo: **27 módulos disponíveis e 0 em preparação**.
- Módulos RED-01 / RED-02 / RED-03 exibidos no Dashboard, módulos e filtros do Banco de Questões.
- Um cartão diagnóstico por subtópico: 6/7/7; aulas: 6/7/7; questões no banco: 24/28/28.
- Sessões dos exercícios: 18, 20 e 20 questões respectivamente, sendo 6 difíceis sorteadas em cada módulo.
- Correção: gabarito e comentários acompanham a alternativa exibida após embaralhamento; C/E mantém sua ordem.
- Responda uma questão e marque uma aula; recarregue e verifique preservação do progresso do PT-ESTUDO.
- Simulados, filtros por área RED, flashcards, revisão espaçada e estatísticas incluem Redação Oficial.
- Exportação manual de backup JSON, Google Drive por botão e restauro (somente em perfil de navegador de testes) continuam funcionando.
- **Dir-Adm** deve continuar independente, sem atualização de sua chave `admEstudo.v2.state`.

### Referências normativas

- Manual de Redação da Presidência da República, **3ª edição, 2018**: https://www.gov.br/cvm/pt-br/assuntos/noticias/anexos/2020/20201222_Manual_Redacao_Presidencia.pdf
- Decreto nº **9.758/2019** (tratamento e endereçamento de agentes públicos federais, com exceções em seu art. 1º): https://www2.camara.leg.br/legin/fed/decret/2019/decreto-9758-11-abril-2019-787965-publicacaooriginal-157737-pe.html
- O conteúdo diferencia orientações históricas do Manual de normas posteriores aplicáveis. Não estende automaticamente o decreto a todos os poderes, municípios ou autoridades estrangeiras.

### Limitações

Os testes de importação e estrutura executados durante a criação do pacote não equivalem à homologação real no navegador, nem à revisão pedagógica independente de todas as respostas. **O ZIP não altera `js/core/`, `js/features/`, `js/config/`, `index.html` ou CSS**, preservando rotas, armazenamento e Google Drive existentes.
