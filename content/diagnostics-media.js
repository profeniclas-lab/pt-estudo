/* ============================================================
   DIAGNÓSTICOS — Módulos de prioridade MÉDIA
   Preenchidos: DC-10, DC-14, DC-15, DC-16, DC-17, DC-18
   ============================================================ */

window.DIAGNOSTICS_MEDIA = {

  /* ============================================================
     DC-10 — Intervenção
  ============================================================ */
  'DC-10': {
    id: 'D-DC-10',
    moduloId: 'DC-10',
    itens: [
      {
        id: 'D-DC-10-01',
        tipo: 'multipla_escolha',
        subtopico: 'Hipóteses de intervenção federal',
        pergunta: 'NÃO é hipótese de intervenção FEDERAL nos Estados (art. 34, CF/88):',
        alternativas: [
          { id: 'A', texto: 'Manter a integridade nacional.' },
          { id: 'B', texto: 'Repelir invasão estrangeira ou de uma unidade da Federação em outra.' },
          { id: 'C', texto: 'Deixar de aplicar o mínimo exigido da receita municipal na saúde e na educação.' },
          { id: 'D', texto: 'Reorganizar as finanças da unidade da Federação que suspender o pagamento da dívida fundada por mais de 2 anos.' }
        ],
        gabarito: 'C',
        explicacao: 'A não aplicação do mínimo em saúde e educação é hipótese de intervenção ESTADUAL em MUNICÍPIO (art. 35, III). As demais são hipóteses do art. 34 (intervenção federal).'
      },
      {
        id: 'D-DC-10-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Procedimento',
        pergunta: 'O decreto de intervenção federal é expedido pelo Presidente da República e, em seguida, submetido ao Congresso Nacional em 24 horas; se em recesso, há convocação extraordinária em 5 dias.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. Art. 36, §1º: decreto do Presidente, ouvidoria prévia dos Conselhos da República e de Defesa, submissão ao Congresso em 24h e convocação extraordinária em 5 dias se em recesso.'
      },
      {
        id: 'D-DC-10-03',
        tipo: 'situacao',
        subtopico: 'Intervenção x Estado de Defesa',
        pergunta: 'Uma calamidade natural de grandes proporções atinge um Estado, gerando grave instabilidade institucional em locais restritos. A medida adequada é:',
        alternativas: [
          { id: 'A', texto: 'Intervenção federal.' },
          { id: 'B', texto: 'Estado de Defesa (art. 136), restrito a locais e prazo determinados.' },
          { id: 'C', texto: 'Estado de Sítio.' },
          { id: 'D', texto: 'Ação direta de inconstitucionalidade.' }
        ],
        gabarito: 'B',
        explicacao: 'Calamidade natural de grandes proporções em locais restritos é hipótese de ESTADO DE DEFESA (art. 136). Intervenção é para restabelecer a ordem federativa; Estado de Sítio exige comoção nacional, ineficácia do Estado de Defesa ou guerra.'
      },
      {
        id: 'D-DC-10-04',
        tipo: 'autoavaliacao',
        subtopico: 'Procedimento',
        pergunta: 'Você consegue, sem consultar, explicar o procedimento completo da intervenção federal (quem decreta, quem ouve, quem aprova e em qual prazo)?',
        resposta: 'DECRETO: Presidente da República. OUVIDORIA PRÉVIA: Conselho da República e Conselho de Defesa Nacional. CONTROLE: Congresso Nacional aprova o decreto em 24h (convocação extraordinária em 5 dias se em recesso). O decreto especifica amplitude, prazo e condições. §1º: nomeação de interventor. §2º: cessada a causa, retornam as autoridades afastadas.'
      }
    ]
  },

  /* ============================================================
     DC-14 — Poder Executivo
  ============================================================ */
  'DC-14': {
    id: 'D-DC-14',
    moduloId: 'DC-14',
    itens: [
      {
        id: 'D-DC-14-01',
        tipo: 'multipla_escolha',
        subtopico: 'Requisitos e eleição',
        pergunta: 'São requisitos para ser Presidente da República (art. 14, §3º, VI, "a"), EXCETO:',
        alternativas: [
          { id: 'A', texto: 'Ser brasileiro nato.' },
          { id: 'B', texto: 'Ter no mínimo 35 anos de idade.' },
          { id: 'C', texto: 'Estar no pleno exercício dos direitos políticos e ter domicílio eleitoral no Brasil.' },
          { id: 'D', texto: 'Ter no mínimo 30 anos de idade.' }
        ],
        gabarito: 'D',
        explicacao: 'A idade mínima para Presidente é 35 anos, não 30 (que é para Governador). As demais alternativas estão corretas: brasileiro nato, pleno exercício dos direitos políticos, alistamento, domicílio eleitoral e filiação partidária.'
      },
      {
        id: 'D-DC-14-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Sucessão e substituição',
        pergunta: 'Em caso de IMPEDIMENTO do Presidente e do Vice, ou vacância dos cargos, assumem sucessivamente o Presidente da Câmara dos Deputados, o Presidente do Senado Federal e o Presidente do STF.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. Art. 80: a linha sucessória é Vice → Presidente da Câmara → Presidente do Senado → Presidente do STF.'
      },
      {
        id: 'D-DC-14-03',
        tipo: 'situacao',
        subtopico: 'Vacância do cargo',
        pergunta: 'O Presidente da República renuncia no segundo ano de mandato. O que acontece?',
        alternativas: [
          { id: 'A', texto: 'Assume definitivamente o Vice, sem nova eleição.' },
          { id: 'B', texto: 'Há eleição DIRETA em 90 dias (vacância nos 2 primeiros anos).' },
          { id: 'C', texto: 'Há eleição INDIRETA pelo Congresso em 30 dias.' },
          { id: 'D', texto: 'O STF assume até o fim do mandato.' }
        ],
        gabarito: 'B',
        explicacao: 'Art. 81: vacância nos 2 primeiros anos → eleição DIRETA em 90 dias. Se ocorresse nos 2 últimos anos, seria eleição INDIRETA pelo Congresso em 30 dias. O Vice sucede apenas se o cargo vagar antes (mas o enunciado pressupõe vacância nos 2 primeiros anos e nova eleição direta).'
      },
      {
        id: 'D-DC-14-04',
        tipo: 'autoavaliacao',
        subtopico: 'Crimes de responsabilidade',
        pergunta: 'Você consegue, sem consultar, explicar o procedimento nos casos de crime COMUM e de crime DE RESPONSABILIDADE praticados pelo Presidente da República?',
        resposta: 'CRIME COMUM: a Câmara dos Deputados AUTORIZA por 2/3; o SUPREMO TRIBUNAL FEDERAL processa e julga. CRIME DE RESPONSABILIDADE: a Câmara AUTORIZA por 2/3; o SENADO FEDERAL processa e julga. Em ambos, a Câmara autoriza; o órgão julgador muda conforme a natureza do crime.'
      }
    ]
  },

  /* ============================================================
     DC-15 — Poder Judiciário
  ============================================================ */
  'DC-15': {
    id: 'D-DC-15',
    moduloId: 'DC-15',
    itens: [
      {
        id: 'D-DC-15-01',
        tipo: 'multipla_escolha',
        subtopico: 'STF x STJ',
        pergunta: 'Sobre o STF e o STJ, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'O STF é a guarda da LEI FEDERAL; o STJ é a guarda da CONSTITUIÇÃO.' },
          { id: 'B', texto: 'O STF é a guarda da CONSTITUIÇÃO; o STJ é a guarda da LEI FEDERAL. O STF tem 11 ministros e o STJ tem 33.' },
          { id: 'C', texto: 'Ambos têm 11 ministros.' },
          { id: 'D', texto: 'O STJ julga ADI e ADPF.' }
        ],
        gabarito: 'B',
        explicacao: 'STF = guarda da CF, 11 ministros. STJ = guarda da lei federal, 33 ministros. A ADI e a ADPF são competência do STF.'
      },
      {
        id: 'D-DC-15-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Garantias dos magistrados',
        pergunta: 'A vitaliciedade, a inamovibilidade e a irredutibilidade de subsídio são garantias constitucionais dos magistrados (art. 95, CF/88).',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. São as três garantias do art. 95: vitaliciedade (não perde o cargo), inamovibilidade (não é removido) e irredutibilidade de subsídio.'
      },
      {
        id: 'D-DC-15-03',
        tipo: 'situacao',
        subtopico: 'Competências',
        pergunta: 'Uma causa em que a União é ré será processada e julgada pela:',
        alternativas: [
          { id: 'A', texto: 'Justiça Estadual.' },
          { id: 'B', texto: 'Justiça Federal.' },
          { id: 'C', texto: 'Justiça do Trabalho.' },
          { id: 'D', texto: 'Justiça Eleitoral.' }
        ],
        gabarito: 'B',
        explicacao: 'Art. 109, I: compete à Justiça Federal processar e julgar as causas em que a União, autarquia federal ou empresa pública federal forem partes.'
      },
      {
        id: 'D-DC-15-04',
        tipo: 'autoavaliacao',
        subtopico: 'CNJ',
        pergunta: 'Você sabe qual é a função do Conselho Nacional de Justiça (CNJ) e sua composição?',
        resposta: 'O CNJ é órgão de CONTROLE administrativo, financeiro e disciplinar do Judiciário brasileiro, criado pela EC 45/2004. Composição: 15 membros, presidido pelo Presidente do STF. NÃO julga causas — apenas exerce controle sobre a atuação administrativa e disciplinar dos magistrados.'
      }
    ]
  },

  /* ============================================================
     DC-16 — Funções Essenciais à Justiça
  ============================================================ */
  'DC-16': {
    id: 'D-DC-16',
    moduloId: 'DC-16',
    itens: [
      {
        id: 'D-DC-16-01',
        tipo: 'multipla_escolha',
        subtopico: 'Ministério Público',
        pergunta: 'Sobre o Ministério Público (art. 127, CF/88), é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Integra o Poder Judiciário.' },
          { id: 'B', texto: 'É instituição permanente, essencial à função jurisdicional, com princípios de unidade, indivisibilidade e independência funcional.' },
          { id: 'C', texto: 'É subordinado ao Poder Executivo.' },
          { id: 'D', texto: 'Não tem garantias próprias.' }
        ],
        gabarito: 'B',
        explicacao: 'MP: instituição permanente e essencial à função jurisdicional (art. 127), com princípios de unidade, indivisibilidade e independência funcional. NÃO integra nenhum dos três Poderes. Tem garantias (vitaliciedade, inamovibilidade, irredutibilidade).'
      },
      {
        id: 'D-DC-16-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Defensoria Pública',
        pergunta: 'A Defensoria Pública é instituição permanente e essencial à função jurisdicional do Estado, incumbindo-lhe a orientação jurídica, a promoção dos direitos humanos e a defesa dos direitos individuais e coletivos aos necessitados, de forma integral e gratuita.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro — é a literalidade do art. 134, com redação da EC 80/2014. A Defensoria é expressão e instrumento do regime democrático.'
      },
      {
        id: 'D-DC-16-03',
        tipo: 'situacao',
        subtopico: 'Advocacia Pública',
        pergunta: 'A União é ré em uma ação trabalhista. Quem a representa judicialmente?',
        alternativas: [
          { id: 'A', texto: 'O Ministério Público Federal.' },
          { id: 'B', texto: 'A Advocacia-Geral da União (AGU).' },
          { id: 'C', texto: 'A Defensoria Pública da União.' },
          { id: 'D', texto: 'A Ordem dos Advogados do Brasil.' }
        ],
        gabarito: 'B',
        explicacao: 'Art. 131: a AGU representa a União, judicial e extrajudicialmente, e presta consultoria e assessoramento ao Poder Executivo federal. MP não representa a União (fiscaliza a lei); Defensoria atende necessitados; OAB é entidade de classe.'
      },
      {
        id: 'D-DC-16-04',
        tipo: 'autoavaliacao',
        subtopico: 'Funções essenciais',
        pergunta: 'Você consegue, sem consultar, diferenciar as funções do MP, da AGU/PGE/PGM, da advocacia privada e da Defensoria Pública?',
        resposta: 'MP: fiscal da lei (defende ordem jurídica, regime democrático e interesses indisponíveis). AGU/PGE/PGM: representa o Estado (União, Estados, Municípios). Advocacia privada: representa o cidadão; indispensável à administração da justiça (art. 133). Defensoria Pública: orienta e defende os NECESSITADOS, integral e gratuitamente (art. 134), com autonomia funcional e administrativa.'
      }
    ]
  },

  /* ============================================================
     DC-17 — Defesa do Estado e Instituições Democráticas
  ============================================================ */
  'DC-17': {
    id: 'D-DC-17',
    moduloId: 'DC-17',
    itens: [
      {
        id: 'D-DC-17-01',
        tipo: 'multipla_escolha',
        subtopico: 'Estado de Defesa x Estado de Sítio',
        pergunta: 'Sobre o Estado de Defesa e o Estado de Sítio (arts. 136 e 137, CF/88), é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Ambos têm prazo de 30 dias, prorrogável indefinidamente.' },
          { id: 'B', texto: 'Estado de Defesa: 30 dias prorrogável uma única vez. Estado de Sítio: 30 dias prorrogável por iguais períodos.' },
          { id: 'C', texto: 'O Estado de Sítio é mais brando que o Estado de Defesa.' },
          { id: 'D', texto: 'O Estado de Defesa pode ser decretado sem ouvir os Conselhos.' }
        ],
        gabarito: 'B',
        explicacao: 'DEFESA: 30 dias prorrogável uma vez. SÍTIO: 30 dias prorrogável por iguais períodos (sem limite). O Sítio é mais grave. Em ambos, os Conselhos da República e de Defesa Nacional devem ser ouvidos.'
      },
      {
        id: 'D-DC-17-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Estado de Sítio',
        pergunta: 'Durante o Estado de Sítio, o Congresso Nacional NÃO pode ser dissolvido.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. Art. 138: o Congresso Nacional não pode ser dissolvido durante o Estado de Sítio. É garantia do Estado Democrático de Direito.'
      },
      {
        id: 'D-DC-17-03',
        tipo: 'situacao',
        subtopico: 'Segurança Pública',
        pergunta: 'Sobre os órgãos de segurança pública (art. 144, CF/88), é correto afirmar que a Polícia Federal:',
        alternativas: [
          { id: 'A', texto: 'Faz policiamento ostensivo nas ruas.' },
          { id: 'B', texto: 'Apura crimes contra a ordem política e social, faz polícia marítima, aeroportuária e de fronteiras, e exerce com exclusividade a polícia judiciária da União.' },
          { id: 'C', texto: 'É subordinada aos Estados.' },
          { id: 'D', texto: 'Cuida apenas do trânsito.' }
        ],
        gabarito: 'B',
        explicacao: 'Art. 144, §1º: PF — apura crimes contra a ordem política e social, faz polícia marítima, aeroportuária e de fronteiras, exerce com exclusividade a polícia judiciária da União. Policiamento ostensivo é da Polícia Militar.'
      },
      {
        id: 'D-DC-17-04',
        tipo: 'autoavaliacao',
        subtopico: 'Forças Armadas',
        pergunta: 'Você consegue, sem consultar, citar as três Forças Armadas e sua missão constitucional (art. 142)?',
        resposta: 'Marinha, Exército e Aeronáutica. Missão: defesa da Pátria, garantia dos Poderes constituídos e garantia da lei e da ordem. São instituições nacionais permanentes e regulares, organizadas com base na hierarquia e na disciplina, sob a autoridade suprema do Presidente da República.'
      }
    ]
  },

  /* ============================================================
     DC-18 — Controle de Constitucionalidade
  ============================================================ */
  'DC-18': {
    id: 'D-DC-18',
    moduloId: 'DC-18',
    itens: [
      {
        id: 'D-DC-18-01',
        tipo: 'multipla_escolha',
        subtopico: 'Controle difuso x concentrado',
        pergunta: 'Sobre o controle difuso e o concentrado de constitucionalidade, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'O difuso é exercido apenas pelo STF; o concentrado, por qualquer juiz.' },
          { id: 'B', texto: 'O difuso é exercido por qualquer juiz no caso concreto (efeitos inter partes); o concentrado é exercido pelo STF em ação própria (efeitos erga omnes e vinculante).' },
          { id: 'C', texto: 'Ambos têm os mesmos efeitos.' },
          { id: 'D', texto: 'O concentrado só cabe contra lei municipal.' }
        ],
        gabarito: 'B',
        explicacao: 'DIFUSO: qualquer juiz, incidental, efeitos inter partes. CONCENTRADO: STF, ação própria (ADI, ADC, ADPF, ADO), efeitos erga omnes e vinculante.'
      },
      {
        id: 'D-DC-18-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'ADI x ADC',
        pergunta: 'A ADI cabe contra lei ou ato normativo federal ou estadual; a ADC cabe apenas contra lei ou ato normativo FEDERAL.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. ADI (art. 102, I, "a"): lei ou ato normativo federal OU estadual. ADC (art. 102, I, "a", parte final): apenas lei ou ato normativo FEDERAL.'
      },
      {
        id: 'D-DC-18-03',
        tipo: 'situacao',
        subtopico: 'ADPF e ADO',
        pergunta: 'Não há lei regulamentando um direito constitucional, inviabilizando seu exercício. O instrumento adequado é:',
        alternativas: [
          { id: 'A', texto: 'ADI, por inconstitucionalidade.' },
          { id: 'B', texto: 'ADC, por constitucionalidade.' },
          { id: 'C', texto: 'ADO (ação direta de inconstitucionalidade por omissão), para tornar efetiva a norma constitucional.' },
          { id: 'D', texto: 'ADPF, por descumprimento de preceito fundamental.' }
        ],
        gabarito: 'C',
        explicacao: 'ADO (art. 103, §2º): cabe quando a omissão legislativa inviabiliza o exercício de direito constitucional. A ADPF é residual — só cabe quando não houver outro meio eficaz. A ADI cabe contra ato comissivo; a ADC, para declarar constitucionalidade.'
      },
      {
        id: 'D-DC-18-04',
        tipo: 'autoavaliacao',
        subtopico: 'Legitimados e efeitos',
        pergunta: 'Você consegue, sem consultar, citar os legitimados do art. 103 para propor ADI e ADC, e os efeitos das decisões?',
        resposta: 'LEGITIMADOS (art. 103): Presidente da República; Mesa do Senado Federal; Mesa da Câmara dos Deputados; Mesa de Assembleia Legislativa ou da Câmara Legislativa do DF; Governador de Estado ou do DF; Procurador-Geral da República; Conselho Federal da OAB; partido político com representação no Congresso Nacional; confederação sindical ou entidade de classe de âmbito nacional. EFEITOS: em regra, erga omnes e vinculante; a modulação de efeitos é possível (art. 27 da Lei 9.868/1999).'
      }
    ]
  }

};
