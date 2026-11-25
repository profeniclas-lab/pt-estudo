/* ============================================================
   DIAGNÓSTICOS — Módulos de prioridade BAIXA (complementar)
   Administração + Direito Administrativo
   Entregues: DA-26, DA-27
   Fase 8 — fechamento dos diagnósticos (28/28)
   Padrão por módulo: 3 MC (1 difícil) + 2 V/F + 1 situação + 1 autoavaliação
   ============================================================ */

window.DIAGNOSTICS_COMPLEMENTAR = {

  /* ============================================================
     DA-26 — Bens Públicos
  ============================================================ */
  'DA-26': {
    id: 'D-DA-26',
    moduloId: 'DA-26',
    itens: [
      {
        id: 'D-DA-26-01',
        tipo: 'multipla_escolha',
        subtopico: 'Classificação dos bens públicos',
        pergunta: 'Sobre a classificação dos bens públicos (art. 99 do Código Civil), assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Bens de uso comum do povo: praças, ruas, estradas, rios. Bens de uso especial: escolas, hospitais, repartições. Bens dominicais: terrenos sem uso, prédios desativados, semoventes.' },
          { id: 'B', texto: 'Bens de uso comum: escolas e hospitais. Bens de uso especial: praças e ruas. Bens dominicais: apenas imóveis rurais.' },
          { id: 'C', texto: 'Todos os bens públicos são dominicais, pois pertencem ao Estado.' },
          { id: 'D', texto: 'Bens de uso especial são os que não têm destinação pública; bens dominicais são os destinados ao serviço público.' }
        ],
        gabarito: 'A',
        explicacao: 'USO COMUM DO POVO (art. 99, I): destinados à coletividade em geral (praças, ruas, estradas, rios). USO ESPECIAL (art. 99, II): destinados a serviço ou estabelecimento público (escolas, hospitais, repartições). DOMINICAIS (art. 99, III): bens públicos sem destinação pública específica (terrenos sem uso, prédios desativados, semoventes). A alternativa B troca as categorias; C reduz tudo a dominical; D inverte uso especial e dominical.'
      },
      {
        id: 'D-DA-26-02',
        tipo: 'multipla_escolha',
        subtopico: 'Características dos bens públicos',
        pergunta: 'Sobre as características do regime jurídico dos bens públicos, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'São, em regra, inalienáveis, imprescritíveis, impenhoráveis e não sujeitos a oneração.' },
          { id: 'B', texto: 'São livremente alienáveis, adquiríveis por usucapião, penhoráveis e oneráveis.' },
          { id: 'C', texto: 'São inalienáveis em todos os casos, sem qualquer exceção.' },
          { id: 'D', texto: 'São imprescritíveis, mas podem ser penhorados e adquiridos por usucapião.' }
        ],
        gabarito: 'A',
        explicacao: 'As características clássicas dos bens públicos são: INALIENABILIDADE (em regra — a alienação exige autorização legislativa, avaliação e, em regra, licitação), IMPRESCRITIBILIDADE (não são adquiridos por usucapião), IMPENHORABILIDADE (não podem ser penhorados — execução por precatórios) e NÃO ONERAÇÃO (não podem ser gravados com ônus real, salvo exceções legais). A alternativa B nega todas as características; C absolutiza a inalienabilidade (os bens dominicais podem ser alienados, cumpridos os requisitos); D mistura características e exceções incorretamente.'
      },
      {
        id: 'D-DA-26-03',
        tipo: 'multipla_escolha',
        subtopico: 'Formas de uso de bem público por particular (nível difícil)',
        pergunta: 'Uma prefeitura pretende celebrar três ajustes com particulares: (a) autorizar o uso de uma praça para um evento cultural de 2 dias; (b) permitir a instalação de um quiosque de lanches em praça pública, por prazo indeterminado; (c) conceder, mediante licitação, a exploração de um restaurante em prédio público por 10 anos. Sobre a natureza jurídica de cada ajuste, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: '(a) é concessão de uso; (b) é permissão de uso; (c) é autorização de uso.' },
          { id: 'B', texto: '(a) é autorização de uso (ato unilateral, precário, interesse do particular); (b) é permissão de uso (ato unilateral, precário, prazo indeterminado); (c) é concessão de uso (contrato administrativo, prazo determinado, precedida de licitação).' },
          { id: 'C', texto: '(a) é permissão de uso; (b) é concessão de uso; (c) é autorização de uso.' },
          { id: 'D', texto: 'As três situações são modalidades de concessão de uso, pois envolvem particulares.' }
        ],
        gabarito: 'B',
        explicacao: 'AUTORIZAÇÃO DE USO: ato unilateral, precário, para interesse do PARTICULAR — o caso (a), evento cultural de 2 dias. PERMISSÃO DE USO: ato unilateral, precário, prazo INDETERMINADO — o caso (b), quiosque em praça. CONCESSÃO DE USO: CONTRATO administrativo, prazo DETERMINADO, precedida de licitação — o caso (c), restaurante em prédio público por 10 anos. A alternativa A inverte tudo; C troca os ajustes; D ignora a distinção. Esta é a questão mais fina do módulo — exige distinguir a natureza de cada ajuste (ato x ato x contrato; interesse particular x prazo indeterminado x prazo determinado com licitação).'
      },
      {
        id: 'D-DA-26-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Imprescritibilidade',
        pergunta: 'Os bens públicos não podem ser adquiridos por usucapião, ainda que o particular os ocupe por longo período de tempo — trata-se da característica da imprescritibilidade.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. A IMPRESCRITIBILIDADE é uma das características do regime jurídico dos bens públicos: eles não são adquiríveis por usucapião, independentemente do tempo de ocupação. A Súmula 340 do STF e o art. 102 do Código Civil confirmam essa regra.'
      },
      {
        id: 'D-DA-26-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Alienação de bens públicos',
        pergunta: 'A alienação de bens públicos dispensa autorização legislativa e licitação, bastando a decisão da autoridade administrativa competente.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. A alienação de bens públicos exige, em regra: AUTORIZAÇÃO LEGISLATIVA, AVALIAÇÃO PRÉVIA e LICITAÇÃO (leilão, na forma da Lei 14.133/2021), além de outros requisitos legais. A decisão da autoridade administrativa, isoladamente, não é suficiente. Há hipóteses específicas em que a licitação é dispensada, mas a regra é a exigência.'
      },
      {
        id: 'D-DA-26-06',
        tipo: 'situacao',
        subtopico: 'Bens afetados x desafetados e alienação',
        pergunta: 'Um município possui um prédio antigo que, até o ano passado, funcionava como escola municipal. Após a transferência da escola para um novo prédio, o imóvel ficou sem uso. A Prefeitura pretende vendê-lo. Sobre a situação, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'O imóvel é bem de uso especial e não pode ser alienado em nenhuma hipótese.' },
          { id: 'B', texto: 'Com a cessação da destinação pública (desafetação), o imóvel passa à categoria de bem dominical e pode ser alienado, desde que cumpridos os requisitos legais (autorização legislativa, avaliação prévia e licitação).' },
          { id: 'C', texto: 'O imóvel é bem de uso comum do povo, podendo ser alienado livremente.' },
          { id: 'D', texto: 'A alienação depende apenas de decisão do Prefeito, pois o imóvel está sem uso.' }
        ],
        gabarito: 'B',
        explicacao: 'Com a cessação da destinação pública (DESAFETAÇÃO), o imóvel deixa de ser bem de uso especial e passa à categoria de bem DOMINICAL. Nessa condição, pode ser alienado — desde que cumpridos os requisitos legais: autorização legislativa, avaliação prévia e licitação (leilão). A alternativa A ignora a desafetação; C classifica incorretamente; D dispensa os requisitos legais.'
      },
      {
        id: 'D-DA-26-07',
        tipo: 'autoavaliacao',
        subtopico: 'Bens públicos — conceitos fundamentais',
        pergunta: 'Você consegue, sem consultar, classificar os bens públicos (uso comum, uso especial, dominical), explicar suas características (inalienabilidade, imprescritibilidade, impenhorabilidade, não oneração) e diferenciar as formas de uso por particulares (autorização, permissão, concessão)?',
        resposta: 'CLASSIFICAÇÃO: uso comum do povo (praça, rua, rio), uso especial (escola, hospital, repartição), dominical (terreno sem uso, prédio desativado). CARACTERÍSTICAS: inalienabilidade (em regra), imprescritibilidade (não usucapião), impenhorabilidade (execução por precatórios), não oneração. USO POR PARTICULARES: AUTORIZAÇÃO (ato unilateral, precário, interesse do particular), PERMISSÃO (ato unilateral, precário, prazo indeterminado), CONCESSÃO (contrato, prazo determinado, licitação). ALIENAÇÃO: exige autorização legislativa, avaliação e, em regra, licitação (leilão). AFETAÇÃO x DESAFETAÇÃO: com destinação pública x sem destinação.'
      }
    ]
  },

  /* ============================================================
     DA-27 — Intervenção do Estado e restrições administrativas
  ============================================================ */
  'DA-27': {
    id: 'D-DA-27',
    moduloId: 'DA-27',
    itens: [
      {
        id: 'D-DA-27-01',
        tipo: 'multipla_escolha',
        subtopico: 'Formas de intervenção do Estado na propriedade',
        pergunta: 'Sobre as formas de intervenção do Estado na propriedade privada, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'São formas de intervenção: desapropriação, servidão administrativa, requisição, ocupação temporária, limitações administrativas e tombamento.' },
          { id: 'B', texto: 'A única forma de intervenção é a desapropriação.' },
          { id: 'C', texto: 'Servidão administrativa e tombamento são sinônimos.' },
          { id: 'D', texto: 'Limitações administrativas e desapropriação têm o mesmo efeito: ambas transferem a propriedade ao Estado.' }
        ],
        gabarito: 'A',
        explicacao: 'As formas de intervenção do Estado na propriedade são: DESAPROPRIAÇÃO (transfere a propriedade), SERVIDÃO ADMINISTRATIVA (ônus real, sem transferência), REQUISIÇÃO (uso temporário em iminente perigo público), OCUPAÇÃO TEMPORÁRIA (uso temporário para obras/serviços), LIMITAÇÕES ADMINISTRATIVAS (restrições gerais e abstratas) e TOMBAMENTO (preservação de bem cultural). A alternativa B reduz indevidamente; C iguala institutos distintos; D confunde limitações (restringem o uso) com desapropriação (transferem a propriedade).'
      },
      {
        id: 'D-DA-27-02',
        tipo: 'multipla_escolha',
        subtopico: 'Desapropriação — modalidades e indenizações',
        pergunta: 'Sobre as modalidades de desapropriação e as respectivas indenizações, é CORRETO afirmar que:',
        alternativas: [
          { id: 'A', texto: 'A desapropriação ordinária exige indenização prévia, justa e em dinheiro (art. 5º, XXIV, CF); a desapropriação-sanção por descumprimento da função social indeniza em títulos da dívida; a expropriação do art. 243 da CF (cultivo ilegal de plantas psicotrópicas ou trabalho escravo) é feita SEM qualquer indenização; e a desapropriação indireta é a tomada irregular da propriedade pelo Poder Público, que gera direito a indenização. São quatro institutos distintos.' },
          { id: 'B', texto: 'Todas as modalidades de desapropriação exigem indenização prévia, justa e em dinheiro.' },
          { id: 'C', texto: 'A desapropriação indireta é sinônimo de confisco: o particular perde o bem sem qualquer indenização.' },
          { id: 'D', texto: 'A expropriação do art. 243 é a mesma coisa que a desapropriação indireta e gera indenização apenas das benfeitorias úteis.' }
        ],
        gabarito: 'A',
        explicacao: 'Desapropriação ORDINÁRIA: indenização prévia, justa e em dinheiro. Desapropriação-SANÇÃO (função social): indenização em TÍTULOS. Expropriação do art. 243: SEM qualquer indenização. Desapropriação INDIRETA: tomada IRREGULAR, com direito a indenização — não é confisco. A alternativa A reúne as quatro distinções; B generaliza; C confunde indireta com confisco; D confunde indireta com art. 243 e ainda prevê indenização que não existe.'
      },
      {
        id: 'D-DA-27-03',
        tipo: 'multipla_escolha',
        subtopico: 'Servidão, requisição e ocupação temporária (nível difícil)',
        pergunta: 'Um município precisa: (a) instalar uma rede de energia elétrica que passará sobre um terreno particular; (b) usar um caminhão particular para transportar mantimentos durante uma enchente (calamidade pública); (c) usar um imóvel vizinho como canteiro de obras para a construção de uma escola. Sobre as formas de intervenção correspondentes, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: '(a) servidão administrativa; (b) requisição administrativa; (c) ocupação temporária — todas são formas de intervenção que NÃO transferem a propriedade ao Estado.' },
          { id: 'B', texto: '(a) desapropriação; (b) servidão; (c) requisição.' },
          { id: 'C', texto: '(a) tombamento; (b) ocupação temporária; (c) servidão.' },
          { id: 'D', texto: 'Todas as três situações configuram desapropriação, com transferência de propriedade.' }
        ],
        gabarito: 'A',
        explicacao: '(a) Rede elétrica sobre terreno = SERVIDÃO ADMINISTRATIVA (ônus real, sem transferência). (b) Caminhão em calamidade = REQUISIÇÃO ADMINISTRATIVA (uso temporário em iminente perigo público — art. 5º, XXV). (c) Imóvel como canteiro de obras = OCUPAÇÃO TEMPORÁRIA (uso temporário para obras/serviços). Nenhuma delas transfere a propriedade ao Estado — a transferência ocorre na DESAPROPRIAÇÃO. A alternativa A está correta em todos os aspectos; B, C e D classificam incorretamente. Esta é a questão mais fina do módulo — exige distinguir as três formas de intervenção que NÃO transferem a propriedade (servidão, requisição e ocupação temporária).'
      },
      {
        id: 'D-DA-27-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Limitações administrativas',
        pergunta: 'As limitações administrativas são restrições gerais e abstratas ao uso da propriedade, e, em regra, não geram direito a indenização — salvo se esvaziarem o valor econômico do bem.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. As LIMITAÇÕES ADMINISTRATIVAS são restrições gerais e abstratas (ex.: zoneamento, gabarito, distância de construções) — atingem a coletividade de forma impessoal e, em regra, NÃO geram indenização. A exceção ocorre quando a limitação esvazia o valor econômico do bem — situação em que pode ser devida indenização.'
      },
      {
        id: 'D-DA-27-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Tombamento x desapropriação',
        pergunta: 'O tombamento transfere a propriedade do bem ao Estado, ao passo que a desapropriação apenas impõe restrições à sua conservação e uso.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso — a relação é o inverso. TOMBAMENTO: NÃO transfere a propriedade — apenas impõe restrições à conservação e ao uso, para preservar o bem (histórico, cultural, arquitetônico). DESAPROPRIAÇÃO: transfere a propriedade ao Estado, com indenização prévia, justa e em dinheiro. O tombamento PRESERVA; a desapropriação RETIRA.'
      },
      {
        id: 'D-DA-27-06',
        tipo: 'situacao',
        subtopico: 'Identificação da forma de intervenção',
        pergunta: 'Um casarão histórico do século XIX é preservado por ato do Poder Público, que impõe restrições à sua modificação e conservação, sem transferir a propriedade ao Estado. Paralelamente, em um terreno ao lado, o Município adquire a propriedade para construir uma praça pública, mediante indenização prévia, justa e em dinheiro. As duas situações configuram, respectivamente:',
        alternativas: [
          { id: 'A', texto: 'Tombamento e desapropriação.' },
          { id: 'B', texto: 'Desapropriação e tombamento.' },
          { id: 'C', texto: 'Servidão administrativa e requisição.' },
          { id: 'D', texto: 'Limitação administrativa e ocupação temporária.' }
        ],
        gabarito: 'A',
        explicacao: 'O primeiro caso é TOMBAMENTO — preservação de bem cultural, com restrições ao uso e à conservação, SEM transferência de propriedade. O segundo é DESAPROPRIAÇÃO — transferência da propriedade ao Estado, com indenização prévia, justa e em dinheiro. A chave é: tombamento preserva; desapropriação retira. A alternativa B inverte; C e D classificam incorretamente.'
      },
      {
        id: 'D-DA-27-07',
        tipo: 'autoavaliacao',
        subtopico: 'Intervenção do Estado — conceitos fundamentais',
        pergunta: 'Você consegue, sem consultar, diferenciar desapropriação, servidão administrativa, requisição, ocupação temporária, limitações administrativas e tombamento — e explicar quais transferem a propriedade e quais apenas restringem o uso?',
        resposta: 'TRANSFEREM A PROPRIEDADE: DESAPROPRIAÇÃO (indenização prévia, justa e em dinheiro; formas ordinária, extraordinária e indireta). NÃO TRANSFEREM: SERVIDÃO ADMINISTRATIVA (ônus real, permanente), REQUISIÇÃO (uso temporário em iminente perigo — art. 5º, XXV, CF), OCUPAÇÃO TEMPORÁRIA (uso temporário para obras/serviços), LIMITAÇÕES ADMINISTRATIVAS (restrições gerais e abstratas, em regra sem indenização) e TOMBAMENTO (preservação de bem cultural, sem transferência). A chave é: desapropriação tira; as demais restringem, oneram ou usam temporariamente.'
      }
    ]
  }

};
