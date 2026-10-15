/* ============================================================
   DIAGNÓSTICOS — Módulos de prioridade COMPLEMENTAR
   Preenchidos: DC-01, DC-19, DC-20
   ============================================================ */

window.DIAGNOSTICS_COMPLEMENTAR = {

  /* ============================================================
     DC-01 — Teoria da Constituição
  ============================================================ */
  'DC-01': {
    id: 'D-DC-01',
    moduloId: 'DC-01',
    itens: [
      {
        id: 'D-DC-01-01',
        tipo: 'multipla_escolha',
        subtopico: 'Classificações de Constituição',
        pergunta: 'Sobre a classificação da Constituição Federal de 1988, é correto afirmar que ela é:',
        alternativas: [
          { id: 'A', texto: 'Escrita, outorgada, rígida, formal e analítica.' },
          { id: 'B', texto: 'Escrita, promulgada, rígida, formal e analítica.' },
          { id: 'C', texto: 'Não escrita, promulgada, flexível, material e sintética.' },
          { id: 'D', texto: 'Escrita, promulgada, semirrígida, material e analítica.' }
        ],
        gabarito: 'B',
        explicacao: 'A CF/88 é: ESCRITA (documento formal), PROMULGADA (elaborada por Assembleia Constituinte), RÍGIDA (alteração por quórum especial — 3/5 em dois turnos), FORMAL (normas solenemente constitucionais), ANALÍTICA (extensa, com 250 artigos + ADCT).'
      },
      {
        id: 'D-DC-01-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Poder constituinte originário',
        pergunta: 'O poder constituinte originário é inicial, autônomo, ilimitado, incondicionado e soberano, não se submetendo a limites jurídicos preexistentes.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. O poder constituinte originário é aquele que cria a Constituição: inicial, autônomo, ilimitado, incondicionado e soberano. Não se submete a limites jurídicos — apenas a limites extrajurídicos (éticos, políticos, sociais).'
      },
      {
        id: 'D-DC-01-03',
        tipo: 'situacao',
        subtopico: 'Cláusulas pétreas',
        pergunta: 'Uma proposta de emenda constitucional pretende abolir a separação dos Poderes no Brasil. Sobre essa proposta:',
        alternativas: [
          { id: 'A', texto: 'É válida, pois a CF pode ser alterada por emenda em qualquer matéria.' },
          { id: 'B', texto: 'É INCONSTITUCIONAL, pois a separação de Poderes é CLÁUSULA PÉTREA (art. 60, §4º, III), não podendo ser objeto de emenda tendente a aboli-la.' },
          { id: 'C', texto: 'Só é válida se aprovada por unanimidade.' },
          { id: 'D', texto: 'É válida porque a separação de Poderes está no art. 2º, não no art. 60.' }
        ],
        gabarito: 'B',
        explicacao: 'Art. 60, §4º, III: a separação de Poderes é cláusula pétrea. Emenda tendente a aboli-la é inconstitucional. As cláusulas pétreas são limitações MATERIAIS ao poder de reforma.'
      },
      {
        id: 'D-DC-01-04',
        tipo: 'autoavaliacao',
        subtopico: 'Classificações e poder constituinte',
        pergunta: 'Você consegue, sem consultar, citar as principais classificações de Constituição e as características do poder constituinte originário, derivado e decorrente?',
        resposta: 'CLASSIFICAÇÕES: forma (escrita x não escrita), origem (promulgada x outorgada), estabilidade (rígida, flexível, semirrígida), conteúdo (formal x material), extensão (analítica x sintética), finalidade (garantia, dirigente, balanço). PODER CONSTITUINTE: ORIGINÁRIO (cria a Constituição — inicial, autônomo, ilimitado, incondicionado, soberano); DERIVADO (reforma — reformador, revisor, decorrente; submetido a limites); DECORRENTE (elabora Constituições estaduais).'
      }
    ]
  },

  /* ============================================================
     DC-19 — Ordem Econômica e Social
  ============================================================ */
  'DC-19': {
    id: 'D-DC-19',
    moduloId: 'DC-19',
    itens: [
      {
        id: 'D-DC-19-01',
        tipo: 'multipla_escolha',
        subtopico: 'Princípios da ordem econômica',
        pergunta: 'NÃO é princípio da ordem econômica previsto no art. 170 da CF/88:',
        alternativas: [
          { id: 'A', texto: 'Livre concorrência e defesa do consumidor.' },
          { id: 'B', texto: 'Função social da propriedade.' },
          { id: 'C', texto: 'Redução das desigualdades regionais e sociais.' },
          { id: 'D', texto: 'Gratuidade universal dos serviços públicos.' }
        ],
        gabarito: 'D',
        explicacao: 'A gratuidade universal dos serviços públicos NÃO é princípio da ordem econômica. Os serviços públicos podem ser remunerados por tarifa ou taxa. Os princípios do art. 170 são: soberania nacional, propriedade privada, função social da propriedade, livre concorrência, defesa do consumidor, defesa do meio ambiente, redução das desigualdades regionais e sociais, busca do pleno emprego, tratamento favorecido para empresas de pequeno porte.'
      },
      {
        id: 'D-DC-19-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Seguridade social',
        pergunta: 'A seguridade social compreende a saúde, a previdência e a assistência social, sendo que apenas a previdência exige contribuição prévia para acesso aos benefícios.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. Art. 194: seguridade social abrange SAÚDE (universal e gratuita), PREVIDÊNCIA (contributiva — exige contribuição) e ASSISTÊNCIA (para quem dela necessitar, sem contribuição). Só a previdência é contributiva.'
      },
      {
        id: 'D-DC-19-03',
        tipo: 'situacao',
        subtopico: 'Ordem social — criança e adolescente',
        pergunta: 'Sobre a proteção constitucional da criança e do adolescente (art. 227, CF/88), é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'É dever exclusivo da família.' },
          { id: 'B', texto: 'É dever da família, da sociedade e do Estado, com PRIORIDADE ABSOLUTA, assegurando direitos como vida, saúde, dignidade, respeito, liberdade e convivência familiar e comunitária.' },
          { id: 'C', texto: 'Só o Estado é responsável.' },
          { id: 'D', texto: 'A proteção é opcional.' }
        ],
        gabarito: 'B',
        explicacao: 'Art. 227: é dever da FAMÍLIA, da SOCIEDADE e do ESTADO assegurar à criança, ao adolescente e ao jovem, com ABSOLUTA PRIORIDADE, o direito à vida, à saúde, à alimentação, à educação, ao lazer, à profissionalização, à cultura, à dignidade, ao respeito, à liberdade e à convivência familiar e comunitária.'
      },
      {
        id: 'D-DC-19-04',
        tipo: 'autoavaliacao',
        subtopico: 'Ordem econômica e social',
        pergunta: 'Você consegue, sem consultar, diferenciar ordem econômica (art. 170) e ordem social (arts. 193 a 232) e citar exemplos de cada uma?',
        resposta: 'ORDEM ECONÔMICA (arts. 170 a 181): regula a atividade econômica — livre iniciativa, livre concorrência, defesa do consumidor, função social da propriedade, redução das desigualdades, pleno emprego. ORDEM SOCIAL (arts. 193 a 232): regula as políticas públicas — seguridade social (saúde, previdência, assistência), educação, cultura, desporto, meio ambiente, família, criança, adolescente, idoso, indígenas. A ordem econômica olha o "mercado"; a ordem social olha o "bem-estar".'
      }
    ]
  },

  /* ============================================================
     DC-20 — ADCT e Atualizações Constitucionais
  ============================================================ */
  'DC-20': {
    id: 'D-DC-20',
    moduloId: 'DC-20',
    itens: [
      {
        id: 'D-DC-20-01',
        tipo: 'multipla_escolha',
        subtopico: 'Natureza do ADCT',
        pergunta: 'Sobre o Ato das Disposições Constitucionais Transitórias (ADCT), é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Tem natureza de lei ordinária e pode ser alterado por maioria simples.' },
          { id: 'B', texto: 'Tem a MESMA FORÇA NORMATIVA da Constituição (é norma constitucional), mas com natureza TRANSITÓRIA, e é alterado por emenda constitucional.' },
          { id: 'C', texto: 'Não integra a Constituição.' },
          { id: 'D', texto: 'Só pode ser alterado por nova Assembleia Constituinte.' }
        ],
        gabarito: 'B',
        explicacao: 'O ADCT integra a CF/88 e tem a MESMA FORÇA NORMATIVA (é norma constitucional). Sua natureza é TRANSITÓRIA, e suas regras são alteradas por EMENDA CONSTITUCIONAL (3/5 em dois turnos), como qualquer outra norma constitucional.'
      },
      {
        id: 'D-DC-20-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Revisão constitucional',
        pergunta: 'A revisão constitucional prevista no art. 3º do ADCT foi realizada em 1993, por maioria absoluta, e pode ser repetida sempre que o Congresso entender necessário.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. A revisão constitucional foi ÚNICA (art. 3º do ADCT), realizada em 1993, por maioria absoluta do Congresso. NÃO pode ser repetida — o dispositivo foi esgotado. Alterações posteriores só por EMENDA (art. 60 — 3/5 em dois turnos).'
      },
      {
        id: 'D-DC-20-03',
        tipo: 'situacao',
        subtopico: 'Emendas constitucionais',
        pergunta: 'A inserção do princípio da eficiência no caput do art. 37 da CF foi feita por qual emenda?',
        alternativas: [
          { id: 'A', texto: 'EC 45/2004 (Reforma do Judiciário).' },
          { id: 'B', texto: 'EC 19/1998 (Reforma Gerencial).' },
          { id: 'C', texto: 'EC 20/1998 (Reforma da Previdência).' },
          { id: 'D', texto: 'EC 90/2015 (Transporte).' }
        ],
        gabarito: 'B',
        explicacao: 'A eficiência foi inserida pela EC 19/1998 (Reforma Gerencial), formando o LIMPE. A EC 45/2004 criou o CNJ, a súmula vinculante e a repercussão geral; a EC 20/1998 foi a reforma da previdência; a EC 90/2015 incluiu o transporte no art. 6º.'
      },
      {
        id: 'D-DC-20-04',
        tipo: 'autoavaliacao',
        subtopico: 'Emendas constitucionais',
        pergunta: 'Você consegue citar as emendas constitucionais mais importantes e o que cada uma alterou?',
        resposta: 'EC 19/1998: eficiência no art. 37 (Reforma Gerencial). EC 20/1998: reforma da previdência. EC 29/2000: mínimo de saúde. EC 41/2003: reforma da previdência. EC 45/2004: Reforma do Judiciário (CNJ, súmula vinculante, repercussão geral). EC 53/2006: Fundeb. EC 64/2010: alimentação no art. 6º. EC 72/2013: domésticos. EC 80/2014: Defensoria Pública. EC 90/2015: transporte no art. 6º. EC 95/2016: teto de gastos. EC 97/2017: fim das coligações proporcionais. EC 103/2019: reforma da previdência. EC 108/2020: Fundeb permanente. EC 111/2021: fidelidade partidária. EC 129 a 133/2023: reforma tributária. EC 131/2023: perda de nacionalidade. EC 135/2024: segurança pública.'
      }
    ]
  }

};
