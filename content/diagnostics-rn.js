/* ============================================================
   DIAGNÓSTICO — DC-RN (Constituição do Estado do RN)
   ============================================================ */

window.DIAGNOSTICS_RN = {

  'DC-RN': {
    id: 'D-DC-RN',
    moduloId: 'DC-RN',
    itens: [
      {
        id: 'D-DC-RN-01',
        tipo: 'multipla_escolha',
        subtopico: 'Estrutura do Estado e Poderes',
        pergunta: 'Sobre a organização do Estado do Rio Grande do Norte, assinale a alternativa correta:',
        alternativas: [
          { id: 'A', texto: 'O Poder Legislativo estadual é exercido pelo Congresso Estadual, de composição bicameral.' },
          { id: 'B', texto: 'O Poder Legislativo estadual é exercido pela Assembleia Legislativa do RN, de composição UNICAMERAL, com deputados estaduais eleitos para mandato de 4 anos.' },
          { id: 'C', texto: 'O Poder Legislativo estadual é exercido por uma Câmara única com senadores estaduais.' },
          { id: 'D', texto: 'O Estado do RN é regido por Lei Orgânica, pois não pode ter Constituição própria.' }
        ],
        gabarito: 'B',
        explicacao: 'A Assembleia Legislativa do RN é UNICAMERAL (uma única Casa), composta por deputados estaduais com mandato de 4 anos. Estados têm CONSTITUIÇÃO própria (não Lei Orgânica — isso é do DF e dos Municípios). Não há "senadores estaduais".'
      },
      {
        id: 'D-DC-RN-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Controle e Tribunal de Contas',
        pergunta: 'No Rio Grande do Norte, o Tribunal de Contas do Estado (TCE/RN) auxilia a Assembleia Legislativa na fiscalização contábil, financeira, orçamentária, operacional e patrimonial do Estado E também dos Municípios do RN, uma vez que não há Tribunal de Contas dos Municípios separado.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. No RN, o TCE acumula as funções de controle estadual e municipal — não há TCM separado. O TCE é órgão auxiliar da Assembleia Legislativa, com autonomia, sem subordinação hierárquica.'
      },
      {
        id: 'D-DC-RN-03',
        tipo: 'situacao',
        subtopico: 'Autonomia estadual e subordinação à CF',
        pergunta: 'Uma lei estadual do RN cria uma nova hipótese de prisão civil por dívida, matéria não prevista na CF/88. Sobre essa lei:',
        alternativas: [
          { id: 'A', texto: 'É válida, pois o Estado tem autonomia para legislar sobre matéria local.' },
          { id: 'B', texto: 'É inconstitucional, pois a Constituição Estadual está subordinada à CF/88 e o Estado não pode contrariar normas federais nem criar hipóteses não previstas na CF.' },
          { id: 'C', texto: 'É válida, desde que aprovada por unanimidade na Assembleia.' },
          { id: 'D', texto: 'É válida, pois a competência para legislar sobre prisão civil é concorrente.' }
        ],
        gabarito: 'B',
        explicacao: 'A CE/RN é SUBORDINADA à CF/88. O Estado não pode criar hipóteses de prisão civil não previstas na CF. A autonomia estadual é limitada pelo princípio da supremacia constitucional federal. Hipóteses de prisão civil são matéria de competência privativa da União (art. 22, I).'
      },
      {
        id: 'D-DC-RN-04',
        tipo: 'autoavaliacao',
        subtopico: 'Constituição Estadual',
        pergunta: 'Você consegue citar, sem consultar, os principais tópicos tratados pela Constituição do Estado do RN (CE/RN/1989)?',
        resposta: 'CE/RN/1989 trata de: princípios fundamentais; organização do Estado (Capital Natal, competências); organização dos Poderes (Executivo, Assembleia Legislativa UNICAMERAL, Judiciário com TJ/RN); Administração Pública; servidores públicos estaduais (regime estatutário); Tribunal de Contas (TCE/RN); Ministério Público Estadual; Defensoria Pública Estadual; tributação e orçamento; ordem econômica e social; família, educação, cultura, saúde, meio ambiente; e ADCT próprio. Sempre subordinada à CF/88.'
      }
    ]
  }

};
