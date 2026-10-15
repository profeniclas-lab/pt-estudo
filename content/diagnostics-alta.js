/* ============================================================
   DIAGNÓSTICOS — Módulos de prioridade ALTA
   Preenchidos neste lote: DC-02, DC-03, DC-04, DC-05
   Próximos lotes: DC-06, DC-07, DC-08, DC-09 (lote 2)
                   DC-11, DC-12, DC-13 (lote 3)
   ============================================================ */

window.DIAGNOSTICS_ALTA = {

  /* ============================================================
     DC-02 — Princípios Fundamentais
  ============================================================ */
  'DC-02': {
    id: 'D-DC-02',
    moduloId: 'DC-02',
    itens: [
      {
        id: 'D-DC-02-01',
        tipo: 'multipla_escolha',
        subtopico: 'Fundamentos, objetivos e princípios de relações internacionais',
        pergunta: 'Assinale a alternativa que apresenta apenas FUNDAMENTOS da República Federativa do Brasil (art. 1º da CF/88):',
        alternativas: [
          { id: 'A', texto: 'Soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa, pluralismo político.' },
          { id: 'B', texto: 'Construir uma sociedade livre, justa e solidária; garantir o desenvolvimento nacional.' },
          { id: 'C', texto: 'Independência nacional, prevalência dos direitos humanos, autodeterminação dos povos.' },
          { id: 'D', texto: 'Erradicar a pobreza e a marginalização; reduzir as desigualdades sociais e regionais.' }
        ],
        gabarito: 'A',
        explicacao: 'A é o rol do art. 1º (fundamentos). B e D são OBJETIVOS fundamentais (art. 3º). C são PRINCÍPIOS das relações internacionais (art. 4º). A banca mistura as três categorias — cuidado.'
      },
      {
        id: 'D-DC-02-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Soberania x autonomia',
        pergunta: 'Os Municípios brasileiros são entes soberanos, podendo se separar da União e dos Estados a qualquer tempo.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. SOBERANIA é atributo exclusivo da República Federativa do Brasil (o todo). Municípios (e União, Estados e DF) têm AUTONOMIA (política, administrativa e financeira), não soberania. Além disso, a Federação é cláusula pétrea — não há direito de secessão.'
      },
      {
        id: 'D-DC-02-03',
        tipo: 'situacao',
        subtopico: 'Separação de Poderes',
        pergunta: 'Um Prefeito edita decreto determinando que o Poder Judiciário local não poderá mais julgar causas relacionadas a tributos municipais. Esse ato:',
        alternativas: [
          { id: 'A', texto: 'É válido, pois o Prefeito é chefe do Executivo municipal.' },
          { id: 'B', texto: 'Viola a separação de Poderes (art. 2º da CF/88), pois os Poderes são independentes e harmônicos entre si.' },
          { id: 'C', texto: 'É válido, desde que aprovado pela Câmara Municipal.' },
          { id: 'D', texto: 'É válido porque a competência tributária é do Município.' }
        ],
        gabarito: 'B',
        explicacao: 'A separação de Poderes (art. 2º) impede que um Poder interfira na função típica do outro. O Prefeito não pode restringir a atuação do Judiciário. Decreto que invade competência de outro Poder é inconstitucional.'
      },
      {
        id: 'D-DC-02-04',
        tipo: 'autoavaliacao',
        subtopico: 'Fundamentos, objetivos e princípios de relações internacionais',
        pergunta: 'Você consegue distinguir, sem consultar, as três listas do art. 1º (fundamentos), art. 3º (objetivos) e art. 4º (princípios de relações internacionais)?',
        resposta: 'FUNDAMENTOS (art. 1º): soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa, pluralismo político. OBJETIVOS (art. 3º): construir sociedade livre/justa/solidária; desenvolvimento nacional; erradicar a pobreza e reduzir desigualdades; promover o bem de todos. RELAÇÕES INTERNACIONAIS (art. 4º): independência nacional, prevalência dos direitos humanos, autodeterminação, não intervenção, igualdade entre Estados, defesa da paz, solução pacífica dos conflitos, repúdio ao terrorismo e ao racismo, cooperação entre os povos, asilo político.'
      }
    ]
  },

  /* ============================================================
     DC-03 — Direitos e Deveres Individuais e Coletivos
  ============================================================ */
  'DC-03': {
    id: 'D-DC-03',
    moduloId: 'DC-03',
    itens: [
      {
        id: 'D-DC-03-01',
        tipo: 'multipla_escolha',
        subtopico: 'Crimes inafiançáveis e imprescritíveis',
        pergunta: 'Sobre os crimes previstos no art. 5º da CF/88, assinale a alternativa correta:',
        alternativas: [
          { id: 'A', texto: 'Todos os crimes hediondos são imprescritíveis.' },
          { id: 'B', texto: 'O racismo é crime inafiançável e imprescritível; a tortura, o tráfico e o terrorismo são inafiançáveis, mas NÃO imprescritíveis.' },
          { id: 'C', texto: 'A ação de grupos armados contra o Estado Democrático é crime afiançável, mas imprescritível.' },
          { id: 'D', texto: 'A tortura é crime imprescritível, mas afiançável.' }
        ],
        gabarito: 'B',
        explicacao: 'O racismo é inafiançável e imprescritível (art. 5º, XLII). Tortura, tráfico e terrorismo (3T) são inafiançáveis e hediondos, mas NÃO imprescritíveis (art. 5º, XLIII). A ação de grupos armados é inafiançável e imprescritível (art. 5º, XLIV) — letra C erra ao dizer "afiançável". Nem todo crime hediondo é imprescritível — letra A erra.'
      },
      {
        id: 'D-DC-03-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Inviolabilidade do domicílio',
        pergunta: 'A casa é asilo inviolável do indivíduo, e nela ninguém pode penetrar sem consentimento do morador, SALVO em caso de flagrante delito, desastre, para prestar socorro ou, durante o dia, por determinação judicial.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro — é a literalidade do art. 5º, XI. Pegadinha clássica: a ordem judicial só pode ser cumprida DURANTE O DIA. À noite, só com consentimento, flagrante, desastre ou socorro.'
      },
      {
        id: 'D-DC-03-03',
        tipo: 'situacao',
        subtopico: 'Remédios constitucionais',
        pergunta: 'Um servidor público federal teve seu nome indevidamente negativado em cadastro de inadimplentes por um órgão público, em razão de erro administrativo. O instrumento adequado para corrigir a situação é:',
        alternativas: [
          { id: 'A', texto: 'Habeas corpus, porque há constrangimento ilegal.' },
          { id: 'B', texto: 'Habeas data, porque envolve informação pessoal em banco de dados público.' },
          { id: 'C', texto: 'Mandado de segurança, porque há direito líquido e certo não amparado por HC ou HD.' },
          { id: 'D', texto: 'Ação popular, porque envolve ato lesivo ao patrimônio público.' }
        ],
        gabarito: 'C',
        explicacao: 'O caso é de ILEGALIDADE (negativação indevida) que atinge direito líquido e certo — cabe MS. O HD serve para ACESSAR ou RETIFICAR dados em banco público, mas quando o problema é a ilegalidade da inscrição, o STF entende que o MS é o adequado. HC é para liberdade de locomoção; AP é para ato lesivo ao patrimônio público.'
      },
      {
        id: 'D-DC-03-04',
        tipo: 'autoavaliacao',
        subtopico: 'Remédios constitucionais',
        pergunta: 'Você sabe diferenciar, sem consultar, HC, HD, MS, MS coletivo, MI e AP — com seus respectivos cabimentos e legitimados?',
        resposta: 'HC: liberdade de locomoção, gratuito, qualquer pessoa. HD: acesso/retificação de dados da PRÓPRIA pessoa em banco público, não é gratuito. MS: direito líquido e certo não amparado por HC ou HD. MS coletivo: partido, sindicato, entidade de classe, associação (com 1 ano). MI: falta de norma regulamentadora. AP: qualquer CIDADÃO (eleitor) — anular ato lesivo ao patrimônio público, moralidade, meio ambiente ou patrimônio histórico-cultural; autor isento de custas e sucumbência, salvo má-fé.'
      }
    ]
  },

  /* ============================================================
     DC-04 — Direitos Sociais
  ============================================================ */
  'DC-04': {
    id: 'D-DC-04',
    moduloId: 'DC-04',
    itens: [
      {
        id: 'D-DC-04-01',
        tipo: 'multipla_escolha',
        subtopico: 'Rol do art. 6º',
        pergunta: 'São direitos sociais expressamente previstos no art. 6º da CF/88, EXCETO:',
        alternativas: [
          { id: 'A', texto: 'Educação, saúde e alimentação.' },
          { id: 'B', texto: 'Moradia e transporte.' },
          { id: 'C', texto: 'Propriedade e livre iniciativa.' },
          { id: 'D', texto: 'Previdência social, proteção à maternidade e assistência aos desamparados.' }
        ],
        gabarito: 'C',
        explicacao: 'Propriedade é direito individual (art. 5º, XXII) e livre iniciativa é FUNDAMENTO da República (art. 1º, IV) — não são direitos sociais. Todos os demais estão no art. 6º. Lembre-se: moradia (EC 26/2000) e transporte (EC 90/2015) foram incluídos posteriormente.'
      },
      {
        id: 'D-DC-04-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Direitos dos trabalhadores domésticos',
        pergunta: 'Os trabalhadores domésticos têm direito a TODOS os incisos do art. 7º da CF/88, sem exceção.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. Após a EC 72/2013, o parágrafo único do art. 7º garante aos domésticos apenas uma LISTA TAXATIVA de incisos — não todos. Urbanos e rurais é que têm todos os incisos.'
      },
      {
        id: 'D-DC-04-03',
        tipo: 'situacao',
        subtopico: 'Seguridade social',
        pergunta: 'Um cidadão sem contribuição prévia procura atendimento de saúde no SUS e, no mesmo dia, solicita benefício assistencial por não ter meios de prover sua subsistência. Sobre a seguridade social:',
        alternativas: [
          { id: 'A', texto: 'Saúde e assistência exigem contribuição prévia, como a previdência.' },
          { id: 'B', texto: 'A saúde é universal e a assistência é prestada a quem dela necessitar, independentemente de contribuição; a previdência, sim, exige contribuição.' },
          { id: 'C', texto: 'Saúde, previdência e assistência são gratuitas e não exigem contribuição.' },
          { id: 'D', texto: 'Somente a saúde é universal; previdência e assistência exigem contribuição.' }
        ],
        gabarito: 'B',
        explicacao: 'A SEGURIDADE (art. 194) abrange saúde, previdência e assistência. Saúde (art. 196) é universal e gratuita; assistência (art. 203) é para quem dela necessitar, sem contribuição; PREVIDÊNCIA (art. 201) é a única CONTRIBUTIVA — só quem contribui recebe.'
      },
      {
        id: 'D-DC-04-04',
        tipo: 'autoavaliacao',
        subtopico: 'Rol do art. 6º',
        pergunta: 'Você consegue recitar o rol completo dos direitos sociais do art. 6º da CF/88 (versão vigente, com as inclusões das EC 26/2000 e EC 90/2015)?',
        resposta: 'Educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência social, proteção à maternidade e à infância, assistência aos desamparados.'
      }
    ]
  },

  /* ============================================================
     DC-05 — Nacionalidade
  ============================================================ */
  'DC-05': {
    id: 'D-DC-05',
    moduloId: 'DC-05',
    itens: [
      {
        id: 'D-DC-05-01',
        tipo: 'multipla_escolha',
        subtopico: 'Cargos privativos de brasileiro nato',
        pergunta: 'Assinale a alternativa que contém APENAS cargos privativos de brasileiro nato (art. 12, §3º, CF/88):',
        alternativas: [
          { id: 'A', texto: 'Presidente da República, Ministro do STF e Governador de Estado.' },
          { id: 'B', texto: 'Presidente da República, Presidente da Câmara dos Deputados, Ministro do STF e Ministro da Defesa.' },
          { id: 'C', texto: 'Senador, Prefeito e carreira diplomática.' },
          { id: 'D', texto: 'Ministro de Estado, Governador e oficial das Forças Armadas.' }
        ],
        gabarito: 'B',
        explicacao: 'Os 8 cargos privativos de nato são: Presidente e Vice; Presidente da Câmara e do Senado; Ministro do STF; carreira diplomática; oficial das Forças Armadas; Ministro da Defesa. Governador, Senador, Prefeito e Ministro de Estado (exceto Defesa) podem ser ocupados por brasileiros naturalizados.'
      },
      {
        id: 'D-DC-05-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Extradição de brasileiro naturalizado',
        pergunta: 'O brasileiro naturalizado nunca pode ser extraditado, em nenhuma hipótese, por ter se tornado brasileiro.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. O brasileiro NATURALIZADO pode ser extraditado em duas hipóteses: (1) crime comum cometido ANTES da naturalização; (2) tráfico ilícito de drogas a QUALQUER tempo (antes ou depois). Quem nunca pode ser extraditado é o brasileiro NATO.'
      },
      {
        id: 'D-DC-05-03',
        tipo: 'situacao',
        subtopico: 'Brasileiro nato por solo',
        pergunta: 'Um casal de turistas italianos, em férias no Brasil, tem um filho em território brasileiro. Sobre a nacionalidade dessa criança:',
        alternativas: [
          { id: 'A', texto: 'Será brasileira nata, ainda que os pais estejam a serviço da Itália.' },
          { id: 'B', texto: 'Será brasileira nata, porque nasceu em território brasileiro, SALVO se os pais estiverem a serviço do país de origem (Itália).' },
          { id: 'C', texto: 'Será apenas italiana, porque os pais são estrangeiros.' },
          { id: 'D', texto: 'Será brasileira naturalizada, após residir no Brasil por 15 anos.' }
        ],
        gabarito: 'B',
        explicacao: 'Art. 12, I, "a": nascido no Brasil, filho de estrangeiros, é brasileiro NATO, SALVO se os pais estiverem A SERVIÇO DO PAÍS DELES. Turistas italianos NÃO estão a serviço da Itália — logo, a criança é brasileira nata. Se fossem diplomatas italianos em missão, aí não seria brasileira nata.'
      },
      {
        id: 'D-DC-05-04',
        tipo: 'autoavaliacao',
        subtopico: 'Quase-nacionalidade',
        pergunta: 'Você sabe explicar o que é a "quase-nacionalidade" (art. 12, §2º) e a quem ela beneficia?',
        resposta: 'É o instituto que confere ao PORTUGUÊS com residência permanente no Brasil, se houver reciprocidade em Portugal, os direitos inerentes ao BRASILEIRO NATURALIZADO. Não é nacionalidade brasileira plena — e não dá acesso a cargos privativos de nato.'
      }
    ]
  },

  /* ============================================================
     DC-06 — Direitos Políticos e Partidos Políticos
  ============================================================ */
  'DC-06': {
    id: 'D-DC-06',
    moduloId: 'DC-06',
    itens: [
      {
        id: 'D-DC-06-01',
        tipo: 'multipla_escolha',
        subtopico: 'Plebiscito x referendo',
        pergunta: 'Sobre os institutos de participação popular direta, assinale a alternativa correta:',
        alternativas: [
          { id: 'A', texto: 'O plebiscito convoca o povo a ratificar decisão já tomada pelo Legislativo.' },
          { id: 'B', texto: 'O referendo convoca o povo a autorizar previamente o Legislativo a legislar sobre determinada matéria.' },
          { id: 'C', texto: 'O plebiscito ocorre ANTES da decisão legislativa; o referendo, DEPOIS, para ratificar ou rejeitar.' },
          { id: 'D', texto: 'Plebiscito e referendo são sinônimos e podem ser usados indistintamente.' }
        ],
        gabarito: 'C',
        explicacao: 'PLEBISCITO: consulta PRÉVIA (antes da lei/decisão). REFERENDO: consulta POSTERIOR (o povo ratifica ou rejeita o que já foi aprovado). Mnemônico: P de Plebiscito = "Precede"; R de Referendo = "Ratifica".'
      },
      {
        id: 'D-DC-06-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Voto obrigatório x facultativo',
        pergunta: 'O voto é obrigatório para todos os brasileiros alfabetizados maiores de 18 anos, sendo facultativo apenas para analfabetos e maiores de 70 anos.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso — está incompleto. O voto facultativo (art. 14, §1º, II) abrange: analfabetos; maiores de 70 anos; E maiores de 16 e menores de 18 anos. A alternativa omite a faixa de 16 a 18 anos.'
      },
      {
        id: 'D-DC-06-03',
        tipo: 'situacao',
        subtopico: 'Inelegibilidade reflexa',
        pergunta: 'O Governador de um Estado pretende lançar seu irmão como candidato a Prefeito da capital. Sobre a situação:',
        alternativas: [
          { id: 'A', texto: 'É permitido, pois irmãos não são considerados parentes para fins de inelegibilidade reflexa.' },
          { id: 'B', texto: 'É vedado no território de jurisdição do titular, pois irmão é parente de 2º grau — inelegibilidade reflexa (art. 14, §7º).' },
          { id: 'C', texto: 'É permitido, desde que o irmão renuncie a qualquer cargo público antes da eleição.' },
          { id: 'D', texto: 'É vedado apenas se o irmão já estiver exercendo mandato eletivo.' }
        ],
        gabarito: 'B',
        explicacao: 'Art. 14, §7º: são inelegíveis, no território de jurisdição do titular, o cônjuge e os parentes consanguíneos ou afins até o 2º grau (ou por adoção) do Presidente, Governador, Prefeito ou de quem os substitua. Irmão é parente de 2º grau — logo, é inelegível no território do Governador.'
      },
      {
        id: 'D-DC-06-04',
        tipo: 'autoavaliacao',
        subtopico: 'Idades mínimas para cargos eletivos',
        pergunta: 'Você consegue lembrar, sem consultar, as idades mínimas exigidas para cada cargo eletivo do art. 14, §3º, VI?',
        resposta: 'Presidente, Vice-Presidente e Senador: 35 anos. Governador e Vice-Governador: 30 anos. Deputado Federal, Deputado Estadual, Deputado Distrital, Prefeito, Vice-Prefeito e Juiz de Paz: 21 anos. Vereador: 18 anos.'
      }
    ]
  },

  /* ============================================================
     DC-07 — Remédios Constitucionais
  ============================================================ */
  'DC-07': {
    id: 'D-DC-07',
    moduloId: 'DC-07',
    itens: [
      {
        id: 'D-DC-07-01',
        tipo: 'multipla_escolha',
        subtopico: 'Cabimento dos remédios',
        pergunta: 'Sobre os remédios constitucionais, assinale a alternativa INCORRETA:',
        alternativas: [
          { id: 'A', texto: 'O habeas corpus protege a liberdade de locomoção e é gratuito.' },
          { id: 'B', texto: 'O habeas data serve para assegurar o conhecimento ou retificação de informações pessoais em registros públicos — e não é gratuito.' },
          { id: 'C', texto: 'O mandado de segurança é cabível para proteger direito líquido e certo, não amparado por habeas corpus ou habeas data.' },
          { id: 'D', texto: 'O mandado de injunção é cabível quando a falta de norma regulamentadora inviabiliza o exercício de direitos constitucionais, e é gratuito como o HC.' }
        ],
        gabarito: 'D',
        explicacao: 'A alternativa D erra ao afirmar que o MI é gratuito. Gratuito é apenas o HABEAS CORPUS (art. 5º, LXXVII — "gratuito o habeas corpus e os atos necessários ao exercício da cidadania"). O mandado de injunção NÃO tem previsão de gratuidade automática.'
      },
      {
        id: 'D-DC-07-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Legitimidade',
        pergunta: 'Qualquer cidadão pode impetrar mandado de segurança coletivo em nome próprio ou de terceiros.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. O MS coletivo (art. 5º, LXX) só pode ser impetrado por: partido político com representação no Congresso, organização sindical, entidade de classe ou associação legalmente constituída e em funcionamento há pelo menos 1 ano, em defesa de seus membros ou associados. Quem cabe a QUALQUER cidadão é a AÇÃO POPULAR.'
      },
      {
        id: 'D-DC-07-03',
        tipo: 'situacao',
        subtopico: 'Cabimento em situação prática',
        pergunta: 'Um cidadão quer anular um contrato firmado por uma Prefeitura que desvia recursos públicos em benefício de empresa privada, lesando o patrimônio público municipal. O instrumento adequado é:',
        alternativas: [
          { id: 'A', texto: 'Habeas corpus, por constrangimento ilegal.' },
          { id: 'B', texto: 'Habeas data, por retificação de dados.' },
          { id: 'C', texto: 'Ação popular (art. 5º, LXXIII), cabível a qualquer CIDADÃO para anular ato lesivo ao patrimônio público, à moralidade, ao meio ambiente ou ao patrimônio histórico-cultural.' },
          { id: 'D', texto: 'Mandado de injunção, por falta de norma regulamentadora.' }
        ],
        gabarito: 'C',
        explicacao: 'É o caso clássico de AÇÃO POPULAR. O legitimado é o CIDADÃO (eleitor), pessoa física, no gozo dos direitos políticos. O autor é isento de custas e sucumbência, salvo má-fé. Não cabe MS porque não se trata de direito líquido e certo individual.'
      },
      {
        id: 'D-DC-07-04',
        tipo: 'autoavaliacao',
        subtopico: 'Cabimento dos remédios',
        pergunta: 'Você consegue, sem consultar, associar cada remédio constitucional ao seu cabimento específico?',
        resposta: 'HC: liberdade de locomoção (ir, vir, ficar) — gratuito. HD: acesso ou retificação de dados pessoais em banco público. MS: direito líquido e certo não amparado por HC ou HD. MS coletivo: partido, sindicato, entidade de classe ou associação (1 ano). MI: falta de norma regulamentadora. AP: ato lesivo ao patrimônio público, moralidade, meio ambiente ou patrimônio histórico-cultural — legitimado é o CIDADÃO.'
      }
    ]
  },

  /* ============================================================
     DC-08 — Organização Político-Administrativa
  ============================================================ */
  'DC-08': {
    id: 'D-DC-08',
    moduloId: 'DC-08',
    itens: [
      {
        id: 'D-DC-08-01',
        tipo: 'multipla_escolha',
        subtopico: 'Soberania x autonomia',
        pergunta: 'Sobre os entes da Federação brasileira, assinale a alternativa correta:',
        alternativas: [
          { id: 'A', texto: 'A União, os Estados, o Distrito Federal e os Municípios são todos soberanos.' },
          { id: 'B', texto: 'A soberania é atributo exclusivo da República Federativa do Brasil; União, Estados, DF e Municípios têm autonomia.' },
          { id: 'C', texto: 'Somente a União e os Estados são autônomos; Municípios são subordinados aos Estados.' },
          { id: 'D', texto: 'Os Municípios são soberanos em assuntos de interesse local.' }
        ],
        gabarito: 'B',
        explicacao: 'Soberania é poder supremo na ordem interna e independência na ordem externa — pertence APENAS à República Federativa do Brasil (o todo). Cada ente (União, Estados, DF, Municípios) tem AUTONOMIA política, administrativa e financeira. Municípios NÃO são subordinados aos Estados.'
      },
      {
        id: 'D-DC-08-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Criação de Estados x criação de Municípios',
        pergunta: 'A criação de novos Estados depende de lei COMPLEMENTAR do Congresso + plebiscito + oitiva das Assembleias; a criação de Municípios depende de lei ESTADUAL + plebiscito + estudo de viabilidade municipal.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. Estados: art. 18, §3º — lei complementar federal + plebiscito + oitiva das Assembleias. Municípios: art. 18, §4º — lei estadual + plebiscito + estudo de viabilidade municipal. A troca de "lei complementar" por "lei estadual" é pegadinha clássica.'
      },
      {
        id: 'D-DC-08-03',
        tipo: 'situacao',
        subtopico: 'Distrito Federal',
        pergunta: 'Sobre o Distrito Federal, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'É um Estado-membro, com Constituição própria e divisão em Municípios.' },
          { id: 'B', texto: 'É regido por Lei Orgânica, acumula competências estaduais e municipais e NÃO pode ser dividido em Municípios.' },
          { id: 'C', texto: 'É um Território Federal administrado diretamente pela União.' },
          { id: 'D', texto: 'Tem soberania, mas não tem autonomia.' }
        ],
        gabarito: 'B',
        explicacao: 'O DF (art. 32) tem autonomia PARCIAL: é regido por LEI ORGÂNICA (não Constituição), acumula competências estaduais e municipais, NÃO pode ser dividido em Municípios e não tem soberania (que é só da República). Não é Território (que é administrado pela União).'
      },
      {
        id: 'D-DC-08-04',
        tipo: 'autoavaliacao',
        subtopico: 'Vedações federativas (art. 19)',
        pergunta: 'Você lembra, sem consultar, quais são as três vedações federativas previstas no art. 19 da CF/88?',
        resposta: 'É vedado à União, Estados, DF e Municípios: (I) estabelecer cultos religiosos ou igrejas, subvencioná-los, embaraçar-lhes o funcionamento ou manter com eles relação de dependência ou aliança, ressalvada a colaboração de interesse público; (II) recusar fé aos documentos públicos; (III) criar distinções entre brasileiros ou preferências entre si.'
      }
    ]
  },

  /* ============================================================
     DC-09 — Repartição de Competências
  ============================================================ */
  'DC-09': {
    id: 'D-DC-09',
    moduloId: 'DC-09',
    itens: [
      {
        id: 'D-DC-09-01',
        tipo: 'multipla_escolha',
        subtopico: 'Exclusiva x privativa',
        pergunta: 'Sobre competências da União, assinale a alternativa correta:',
        alternativas: [
          { id: 'A', texto: 'A competência exclusiva (art. 21) é DELEGÁVEL aos Estados por lei complementar; a privativa (art. 22) não é.' },
          { id: 'B', texto: 'A competência exclusiva (art. 21) NÃO é delegável; a privativa (art. 22) pode ser delegada aos Estados por lei complementar, para questões específicas.' },
          { id: 'C', texto: 'Exclusiva e privativa são sinônimos e tratam da mesma realidade.' },
          { id: 'D', texto: 'A competência privativa é indelegável, e a exclusiva também.' }
        ],
        gabarito: 'B',
        explicacao: 'EXCLUSIVA (art. 21): material (administrativa), NÃO delegável. PRIVATIVA (art. 22): legislativa, DELEGÁVEL aos Estados por lei complementar para questões específicas (art. 22, parágrafo único). Mnemônico: EXclusiva = EXclui a delegação. Privativa = Permite delegar.'
      },
      {
        id: 'D-DC-09-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Comum x concorrente',
        pergunta: 'A competência comum (art. 23) é MATERIAL (administrativa) e compartilhada por todos os entes; a concorrente (art. 24) é LEGISLATIVA, cabendo à União normas gerais e aos Estados/DF normas específicas.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. COMUM (art. 23): material — todos os entes atuam juntos (ex.: saúde, meio ambiente). CONCORRENTE (art. 24): legislativa — União edita normas GERAIS; Estados e DF editam normas ESPECÍFICAS; superveniência de lei federal geral SUSPENDE a estadual contrária (não revoga).'
      },
      {
        id: 'D-DC-09-03',
        tipo: 'situacao',
        subtopico: 'Competência legislativa',
        pergunta: 'Sobre a possibilidade de um Estado-membro legislar a respeito de direito civil, assinale a alternativa correta:',
        alternativas: [
          { id: 'A', texto: 'Pode, pois direito civil é matéria de competência concorrente entre União e Estados.' },
          { id: 'B', texto: 'Não pode, pois direito civil é matéria de competência PRIVATIVA da União (art. 22, I), salvo delegação por lei complementar (art. 22, parágrafo único).' },
          { id: 'C', texto: 'Pode, pois compete aos Estados a competência residual.' },
          { id: 'D', texto: 'Pode, desde que haja interesse local comprovado.' }
        ],
        gabarito: 'B',
        explicacao: 'Direito civil é competência PRIVATIVA da União (art. 22, I). Só pode ser delegada aos Estados por LEI COMPLEMENTAR, para questões específicas (art. 22, parágrafo único). A competência residual (art. 25, §1º) só se aplica ao que NÃO é da União nem dos Municípios.'
      },
      {
        id: 'D-DC-09-04',
        tipo: 'autoavaliacao',
        subtopico: 'Distinção das categorias',
        pergunta: 'Você consegue, sem consultar, diferenciar EXCLUSIVA, PRIVATIVA, COMUM e CONCORRENTE — em termos de natureza (material/legislativa), entes envolvidos e delegabilidade?',
        resposta: 'EXCLUSIVA (art. 21): material, só União, indelegável. PRIVATIVA (art. 22): legislativa, só União, delegável por LC. COMUM (art. 23): material, todos os entes (União, Estados, DF, Municípios). CONCORRENTE (art. 24): legislativa, União (normas gerais) + Estados/DF (normas específicas); superveniência federal suspende lei estadual contrária.'
      }
    ]
  },

  /* ============================================================
     DC-11 — Administração Pública na Constituição
  ============================================================ */
  'DC-11': {
    id: 'D-DC-11',
    moduloId: 'DC-11',
    itens: [
      {
        id: 'D-DC-11-01',
        tipo: 'multipla_escolha',
        subtopico: 'Concurso público e acumulação',
        pergunta: 'Sobre o concurso público e a acumulação de cargos (art. 37, II e XVI, CF/88), assinale a alternativa correta:',
        alternativas: [
          { id: 'A', texto: 'O prazo de validade do concurso é de até 4 anos, prorrogável indefinidamente.' },
          { id: 'B', texto: 'A acumulação remunerada é permitida em qualquer hipótese, desde que haja compatibilidade de horários.' },
          { id: 'C', texto: 'O prazo de validade do concurso é de até 2 anos, prorrogável UMA vez por igual período; a acumulação é permitida apenas nas hipóteses do art. 37, XVI (2 de professor; 1 de professor + 1 técnico/científico; 2 privativos de saúde), com compatibilidade de horários e respeito ao teto.' },
          { id: 'D', texto: 'O concurso público é dispensável para cargos efetivos, sendo obrigatório apenas para cargos em comissão.' }
        ],
        gabarito: 'C',
        explicacao: 'A: prazo é 2 anos, prorrogável uma única vez por igual período (art. 37, III). B: acumulação só nas 3 hipóteses do art. 37, XVI. D: inverte — concurso é obrigatório para efetivos; cargos em comissão são de livre nomeação.'
      },
      {
        id: 'D-DC-11-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Responsabilidade civil do Estado',
        pergunta: 'A responsabilidade civil do Estado é OBJETIVA (independe de culpa) em atos comissivos, e a ação regressiva contra o agente público exige comprovação de dolo ou culpa.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. Art. 37, §6º: responsabilidade OBJETIVA do Estado perante terceiros (dano + nexo causal + conduta). A ação regressiva contra o agente exige DOLO ou CULPA (responsabilidade subjetiva do agente perante o Estado).'
      },
      {
        id: 'D-DC-11-03',
        tipo: 'situacao',
        subtopico: 'Cargos em comissão e função de confiança',
        pergunta: 'Um Prefeito nomeia para cargo em comissão de assessor uma pessoa sem vínculo com a Administração. Sobre esse ato:',
        alternativas: [
          { id: 'A', texto: 'É ilegal, pois todo cargo público exige concurso.' },
          { id: 'B', texto: 'É válido, pois o cargo em comissão é de livre nomeação e exoneração, destinado a funções de direção, chefia e assessoramento (art. 37, II e V).' },
          { id: 'C', texto: 'É válido, mas a pessoa precisa ser servidor efetivo.' },
          { id: 'D', texto: 'É ilegal, pois somente funções de confiança podem ser ocupadas por pessoa de fora da carreira.' }
        ],
        gabarito: 'B',
        explicacao: 'Cargo em comissão é de LIVRE nomeação e exoneração, sem exigência de concurso ou vínculo prévio, e destina-se a funções de direção, chefia e assessoramento. O que é privativo de servidor de carreira é a FUNÇÃO DE CONFIANÇA (art. 37, V). As letras C e D invertem os conceitos.'
      },
      {
        id: 'D-DC-11-04',
        tipo: 'autoavaliacao',
        subtopico: 'Princípios e teto remuneratório',
        pergunta: 'Você consegue, sem consultar, citar os 5 princípios do LIMPE e explicar como funciona o teto remuneratório do art. 37, XI?',
        resposta: 'LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência (a eficiência foi inserida pela EC 19/1998). Teto: em regra, o subsídio de Ministro do STF; nos Estados e DF, o subsídio de Desembargador do TJ (limite estadual); nos Municípios, o subsídio de Prefeito. Nenhum servidor pode receber acima do teto, consideradas todas as vantagens, salvo as exceções constitucionais.'
      }
    ]
  },

  /* ============================================================
     DC-12 — Poder Legislativo
  ============================================================ */
  'DC-12': {
    id: 'D-DC-12',
    moduloId: 'DC-12',
    itens: [
      {
        id: 'D-DC-12-01',
        tipo: 'multipla_escolha',
        subtopico: 'Competências da Câmara e do Senado',
        pergunta: 'Sobre as competências do Poder Legislativo federal, assinale a alternativa correta:',
        alternativas: [
          { id: 'A', texto: 'A Câmara dos Deputados processa e julga o Presidente da República nos crimes de responsabilidade.' },
          { id: 'B', texto: 'O Senado Federal autoriza a instauração de processo contra o Presidente da República.' },
          { id: 'C', texto: 'A Câmara dos Deputados AUTORIZA (art. 51, I) e o Senado Federal PROCESSA E JULGA (art. 52, I) o Presidente da República nos crimes de responsabilidade.' },
          { id: 'D', texto: 'Ambas as Casas julgam conjuntamente o Presidente, em sessão unicameral.' }
        ],
        gabarito: 'C',
        explicacao: 'Art. 51, I: compete privativamente à Câmara AUTORIZAR a instauração de processo contra o Presidente, Vice e Ministros (2/3 dos votos). Art. 52, I: compete privativamente ao Senado PROCESSAR E JULGAR esses agentes nos crimes de responsabilidade. B e A invertem as competências.'
      },
      {
        id: 'D-DC-12-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Imunidades parlamentares',
        pergunta: 'A imunidade MATERIAL dos parlamentares federais abrange opiniões, palavras e votos, no exercício do mandato, e vale em qualquer lugar — não apenas dentro do Congresso.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. A imunidade MATERIAL (art. 53, caput) abrange opiniões, palavras e votos, no exercício do mandato, sendo inviolável civil e penalmente — em qualquer lugar, não só no recinto do Congresso. A imunidade FORMAL (art. 53, §§) trata de prisão e processo.'
      },
      {
        id: 'D-DC-12-03',
        tipo: 'situacao',
        subtopico: 'CPI — poderes e limites',
        pergunta: 'Uma Comissão Parlamentar de Inquérito (CPI) instaurada no Senado pretende determinar a interceptação telefônica de um investigado e decretar sua prisão preventiva. Sobre esses atos:',
        alternativas: [
          { id: 'A', texto: 'Ambos podem ser praticados diretamente pela CPI, que tem poderes de investigação próprios das autoridades judiciais.' },
          { id: 'B', texto: 'Nenhum dos dois pode ser praticado diretamente pela CPI: a interceptação telefônica depende de ordem JUDICIAL e a prisão preventiva também é vedada (só cabe flagrante). A CPI pode quebrar sigilo bancário/fiscal/telefônico (dados), convocar, ouvir, requisitar, mas não pode prender (salvo flagrante) nem determinar busca domiciliar ou interceptação.' },
          { id: 'C', texto: 'A CPI pode interceptar, mas não pode prender.' },
          { id: 'D', texto: 'A CPI pode prender, mas não pode interceptar.' }
        ],
        gabarito: 'B',
        explicacao: 'CPI tem poderes de investigação próprios das autoridades judiciais, MAS com limites: NÃO pode decretar prisão (salvo flagrante), NÃO pode determinar busca domiciliar, NÃO pode determinar interceptação telefônica (escuta). Pode quebrar sigilo BANCÁRIO, FISCAL e de DADOS telefônicos (não a escuta), convocar, ouvir e requisitar.'
      },
      {
        id: 'D-DC-12-04',
        tipo: 'autoavaliacao',
        subtopico: 'Estrutura e composição',
        pergunta: 'Você consegue explicar, sem consultar, a composição do Congresso Nacional, o número de deputados por Estado, o número de senadores por Estado e o mandato de cada um?',
        resposta: 'Congresso Nacional = Câmara dos Deputados + Senado Federal. Câmara: representantes do povo, mínimo de 8 e máximo de 70 deputados por Estado, mandato de 4 anos, sistema proporcional. Senado: 3 senadores por Estado e DF, mandato de 8 anos, eleição majoritária, renovação alternada de 1/3 e 2/3.'
      }
    ]
  },

  /* ============================================================
     DC-13 — Processo Legislativo
  ============================================================ */
  'DC-13': {
    id: 'D-DC-13',
    moduloId: 'DC-13',
    itens: [
      {
        id: 'D-DC-13-01',
        tipo: 'multipla_escolha',
        subtopico: 'Quóruns',
        pergunta: 'Sobre os quóruns no processo legislativo, assinale a alternativa correta:',
        alternativas: [
          { id: 'A', texto: 'A emenda constitucional exige maioria absoluta em turno único; a lei complementar exige 3/5 em dois turnos.' },
          { id: 'B', texto: 'A emenda constitucional exige 3/5 em dois turnos em cada Casa; a lei complementar exige MAIORIA ABSOLUTA; a lei ordinária exige maioria simples (relativa).' },
          { id: 'C', texto: 'Lei complementar e lei ordinária têm o mesmo quórum (maioria absoluta).' },
          { id: 'D', texto: 'A emenda constitucional exige unanimidade dos parlamentares.' }
        ],
        gabarito: 'B',
        explicacao: 'EMENDA (art. 60, §2º): 3/5 em dois turnos em cada Casa. LEI COMPLEMENTAR (art. 69): maioria ABSOLUTA. LEI ORDINÁRIA (art. 47): maioria SIMPLES (relativa, maioria dos presentes). A é inversão; C é erro (LC ≠ LO); D é absurdo.'
      },
      {
        id: 'D-DC-13-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Medida provisória',
        pergunta: 'A medida provisória tem vigência de 60 dias, prorrogável uma vez por igual período; se não for apreciada em até 45 dias, entra em regime de urgência e tranca a pauta da Casa onde estiver.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. Art. 62: MP vigora por 60 dias, prorrogável uma vez por mais 60. Após 45 dias contados da publicação, entra em regime de URGÊNCIA, trancando a pauta da Casa onde estiver (art. 62, §6º). Se não for apreciada em 120 dias, perde eficácia desde a edição.'
      },
      {
        id: 'D-DC-13-03',
        tipo: 'situacao',
        subtopico: 'Sanção e veto',
        pergunta: 'O Presidente da República recebe um projeto de lei aprovado pelo Congresso e, dentro do prazo, decide VETAR PARCIALMENTE um artigo. Sobre o veto parcial:',
        alternativas: [
          { id: 'A', texto: 'O veto parcial pode atingir apenas uma palavra ou expressão do texto.' },
          { id: 'B', texto: 'O veto parcial deve recair sobre parte do texto com sentido próprio, e não sobre palavras ou artigos isolados sem relação com o conjunto.' },
          { id: 'C', texto: 'O veto parcial só é possível com autorização prévia do Congresso.' },
          { id: 'D', texto: 'O veto parcial é vedado, só existindo veto total.' }
        ],
        gabarito: 'B',
        explicacao: 'Veto PARCIAL pode atingir parte do texto com sentido próprio. NÃO pode atingir palavra isolada ou artigo solto sem relação com o conjunto (art. 66, §2º). O veto é sempre motivado e pode ser derrubado por MAIORIA ABSOLUTA em sessão conjunta, no prazo de 30 dias.'
      },
      {
        id: 'D-DC-13-04',
        tipo: 'autoavaliacao',
        subtopico: 'Espécies normativas do art. 59',
        pergunta: 'Você consegue listar, sem consultar, as 7 espécies normativas do art. 59 da CF/88?',
        resposta: 'Emendas à Constituição, leis complementares, leis ordinárias, leis delegadas, medidas provisórias, decretos legislativos e resoluções.'
      }
    ]
  }

};
