/* ============================================================
   AULAS — Módulos de prioridade MÉDIA
   Preenchidos neste lote: DC-10, DC-14, DC-15
   Próximo lote: DC-16, DC-17, DC-18
   ============================================================ */

window.LESSONS_MEDIA = {

  /* ============================================================
     DC-10 — Intervenção
  ============================================================ */
  'DC-10': {
    id: 'L-DC-10',
    moduloId: 'DC-10',
    objetivo: 'Dominar o instituto da intervenção (arts. 34 a 36 da CF/88): hipóteses de intervenção federal, estadual e em Municípios, procedimento, decreto, controle pelo Congresso e relação com a autonomia federativa.',
    prerequisitos: ['DC-08'],

    introducao: 'A intervenção é medida excepcional: o ente federativo quebra temporariamente a autonomia de outro, para restabelecer a normalidade constitucional. É o oposto do princípio federativo — por isso, é taxativa, temporária e sujeita a controle.',

    explicacaoSimples: 'Pense na Federação como um condomínio. Se um morador descumpre regras gravíssimas, o síndico (União ou Estado) pode, temporariamente, assumir o controle do apartamento dele — mas só nas hipóteses previstas no regimento e depois de seguir o procedimento. Isso é intervenção.',

    explicacaoTecnica: 'Art. 34: hipóteses de intervenção FEDERAL nos Estados e no DF — (I) manter a integridade nacional; (II) repelir invasão estrangeira ou de uma unidade da Federação em outra; (III) pôr termo a grave comprometimento da ordem pública; (IV) garantir o livre exercício de qualquer dos Poderes nas unidades da Federação; (V) reorganizar as finanças da unidade (que suspender pagamento da dívida fundada por mais de 2 anos, ou deixar de entregar receitas); (VI) prover a execução de lei federal, ordem ou decisão judicial; (VII) assegurar a observância dos princípios constitucionais sensíveis (forma republicana, sistema representativo, regime democrático, direitos da pessoa humana, autonomia municipal, prestação de contas da Administração Pública direta e indireta). Art. 35: hipóteses de intervenção ESTADUAL nos Municípios — (I) deixar de ser paga, sem motivo, por 2 anos, a dívida fundada; (II) não forem prestadas contas devidas; (III) não tiver sido aplicado o mínimo exigido da receita municipal na manutenção e desenvolvimento do ensino e nas ações e serviços públicos de saúde; (IV) o Tribunal de Justiça der provimento a representação para assegurar a observância de princípios indicados na Constituição Estadual ou para prover a execução de lei, de ordem ou de decisão judicial. Art. 36: procedimento — decreto do Presidente (intervenção federal espontânea) ou requisição (nos casos do art. 34, IV, VI e VII); ouvidoria prévia do Conselho da República e do Conselho de Defesa; controle político pelo Congresso (aprovação por maioria simples em 24h, se em recesso convocação extraordinária); decreto especifica amplitude, prazo e condições. §1º: nomeação de interventor. §2º: cessação da intervenção — retorno à normalidade. §3º: se cessada a causa, as autoridades afastadas retornam aos cargos.',

    exemplos: [
      'Intervenção federal para garantir ordem pública: grave crise de segurança em Estado.',
      'Intervenção federal para garantir execução de decisão judicial: descumprimento de ordem federal.',
      'Intervenção federal para assegurar princípios sensíveis: descumprimento da autonomia municipal.',
      'Intervenção estadual em Município: não aplicação do mínimo na educação ou saúde.',
      'Intervenção estadual por não pagamento de dívida fundada por 2 anos.',
      'Reorganização de finanças: Estado que não paga dívida fundada por mais de 2 anos.'
    ],

    comparacoes: [
      { termoA: 'Intervenção federal', termoB: 'Intervenção estadual', diferenca: 'FEDERAL: decreto do Presidente da República; atinge Estados e DF; hipóteses do art. 34. ESTADUAL: decreto do Governador; atinge Municípios; hipóteses do art. 35. São institutos paralelos, mas com titulares e destinatários diferentes.' },
      { termoA: 'Intervenção espontânea', termoB: 'Intervenção provocada', diferenca: 'ESPONTÂNEA: decreto do Presidente, sem provocação de outro Poder (hipóteses dos incisos I, II, III e V do art. 34). PROVOCADA: depende de requisição do STF (inciso VI), do STJ (inciso VI, lei federal) ou do TSE (inciso VII, princípios sensíveis), ou de solicitação do Poder coacto (inciso IV).' },
      { termoA: 'Intervenção federal', termoB: 'Estado de Sítio', diferenca: 'INTERVENÇÃO: medida excepcional para restabelecer a ordem federativa — atinge o ente, não os direitos fundamentais diretamente. ESTADO DE SÍTIO: medida excepcional para restabelecer a ordem constitucional em caso de comoção grave ou guerra — atinge diretamente os direitos fundamentais, suspendendo garantias.' },
      { termoA: 'Controle político', termoB: 'Controle judicial', diferenca: 'POLÍTICO: feito pelo Congresso Nacional — aprovação do decreto de intervenção em 24h. JUDICIAL: feito pelo STF, STJ ou TSE — conforme a hipótese, o Tribunal competente pode requisitar a intervenção.' }
    ],

    aplicacaoEmConcurso: 'Cobrança das hipóteses de intervenção federal (art. 34) x estadual (art. 35), do procedimento (decreto, ouvidoria dos Conselhos, controle pelo Congresso em 24h) e das regras específicas (prazo, nomeação de interventor, retorno das autoridades). Questões costumam misturar as hipóteses dos dois artigos.',

    pegadinhas: [
      'Confundir intervenção federal (arts. 34) com estadual (arts. 35).',
      'Achar que o decreto de intervenção é do Congresso. É do Presidente (federal) ou do Governador (estadual).',
      'Dizer que a intervenção depende de autorização prévia do Congresso. O decreto é expedido e depois submetido ao Congresso em 24h.',
      'Esquecer a ouvidoria prévia do Conselho da República e do Conselho de Defesa (intervenção federal).',
      'Confundir intervenção com estado de sítio ou estado de defesa.',
      'Achar que a intervenção é permanente. É temporária — cessada a causa, as autoridades retornam.'
    ],

    errosComuns: [
      'Decorar hipóteses sem associar ao titular do decreto.',
      'Ignorar que a intervenção em Município (art. 35, I a IV) pode ser decreto do Governador, mas a hipótese do inciso IV depende de provimento pelo TJ.',
      'Não distinguir intervenção espontânea de provocada.'
    ],

    resumo: [
      'Intervenção é medida excepcional e temporária.',
      'Art. 34: hipóteses de intervenção FEDERAL nos Estados e DF.',
      'Art. 35: hipóteses de intervenção ESTADUAL nos Municípios.',
      'Decreto: Presidente (federal) ou Governador (estadual).',
      'Controle: Congresso aprova o decreto em 24h.',
      'Ouvidoria prévia do Conselho da República e Conselho de Defesa (federal).',
      'Decreto especifica amplitude, prazo e condições.',
      'Cessada a causa, retornam as autoridades afastadas.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Intervenção é como o "juiz" do condomínio assumindo temporariamente o apartamento de um morador que quebrou regras gravíssimas — só nas hipóteses do regimento, por prazo determinado, com o condomínio aprovando depois.',
      outroExemplo: 'Se um Estado deixa de pagar precatórios por mais de 2 anos, cabe intervenção federal por reorganização de finanças (art. 34, V). Se um Município não aplica o mínimo em saúde, cabe intervenção estadual (art. 35, III).',
      compararConceitos: 'Federal (Presidente, atinge Estados) x Estadual (Governador, atinge Municípios). Espontânea (sem provocação) x Provocada (requisição ou solicitação). Intervenção x Estado de Sítio: uma atinge o ente, o outro atinge direitos.',
      mostrarPegadinha: 'Cuidado: "A intervenção federal só pode ser decretada pelo Congresso Nacional". ERRADO. O DECRETO é do Presidente; o Congresso apenas APROVA depois, em 24 horas.',
      comoApareceEmConcurso: 'Cobrança das hipóteses (arts. 34 e 35) e do procedimento (decreto + controle do Congresso).',
      fazerPergunta: {
        pergunta: 'Um Estado deixa de aplicar o mínimo constitucional em educação. Cabe intervenção federal?',
        resposta: 'NÃO — a não aplicação do mínimo em educação é hipótese de intervenção ESTADUAL em MUNICÍPIO (art. 35, III). Em relação ao Estado, a não aplicação do mínimo não é hipótese de intervenção federal, e sim de responsabilização política (crime de responsabilidade do Governador) e rejeição de contas.'
      }
    }
  },

  /* ============================================================
     DC-14 — Poder Executivo
  ============================================================ */
  'DC-14': {
    id: 'L-DC-14',
    moduloId: 'DC-14',
    objetivo: 'Dominar a estrutura e o funcionamento do Poder Executivo federal (arts. 76 a 91 da CF/88): Presidente, Vice, eleição, mandato, requisitos, sucessão, substituição, competências, ministros, responsabilidade e crimes de responsabilidade.',
    prerequisitos: ['DC-12'],

    introducao: 'O Poder Executivo exerce a função típica de administrar o Estado. Na esfera federal, é chefiado pelo Presidente da República, auxiliado pelos Ministros de Estado. As bancas cobram as regras de eleição, as hipóteses de sucessão/substituição e os crimes de responsabilidade.',

    explicacaoSimples: 'O Presidente é o "chefe" do Executivo federal: administra o país, representa o Brasil no exterior, sanciona e veta leis, edita medidas provisórias. Se ele sai do cargo por algum motivo, há regras específicas sobre quem assume — o Vice, o Presidente da Câmara, o do Senado ou o do STF.',

    explicacaoTecnica: 'Art. 76: o Poder Executivo é exercido pelo Presidente da República, auxiliado pelos Ministros de Estado. Art. 77: eleição pelo sufrágio universal e voto direto e secreto, maioria absoluta; 2º turno se necessário; posse em 1º de janeiro do ano seguinte; mandato de 4 anos. Art. 14, §3º, VI, "a": idade mínima de 35 anos, brasileiro nato, pleno exercício dos direitos políticos, alistamento eleitoral, domicílio eleitoral e filiação partidária. Art. 78: posse em sessão conjunta do Congresso. Art. 79: o Vice substitui o Presidente em caso de impedimento e sucede em caso de vaga. Art. 80: em caso de impedimento do Presidente e do Vice, ou vacância dos cargos, assumem sucessivamente: Presidente da Câmara, do Senado e do STF. Art. 81: se a vacância ocorrer nos 2 primeiros anos, eleição direta em 90 dias; se nos 2 últimos, eleição indireta pelo Congresso em 30 dias. Art. 82: mandato de 4 anos. Art. 83: 35 anos, brasileiro nato, pleno exercício dos direitos políticos, alistamento, domicílio, filiação. Art. 84: competências privativas do Presidente (sancionar, vetar, editar MP, nomear Ministros do STF, etc.). Art. 85: crimes de responsabilidade — atos que atentem contra a CF e especialmente contra: existência da União, livre exercício dos Poderes, exercício dos direitos políticos, segurança interna, probidade na Administração, lei orçamentária, guarda e uso do dinheiro público. Art. 86: imunidade formal — o Presidente não pode ser responsabilizado por atos estranhos ao exercício de suas funções. Art. 87: Ministros de Estado auxiliam o Presidente. Art. 88: lei disporá sobre criação e extinção de Ministérios. Art. 89: Conselho da República. Art. 90: Conselho de Defesa Nacional. Art. 91: regras sobre esses Conselhos.',

    exemplos: [
      'Eleição: 1º turno no primeiro domingo de outubro; 2º turno no último domingo de outubro.',
      'Posse: 1º de janeiro do ano seguinte.',
      'Vacância nos 2 primeiros anos: eleição direta em 90 dias.',
      'Vacância nos 2 últimos anos: eleição indireta pelo Congresso em 30 dias.',
      'Sucessão: Vice → Presidente da Câmara → Presidente do Senado → Presidente do STF.',
      'Ministro do STF: nomeação pelo Presidente, após aprovação por maioria absoluta do Senado.',
      'Crimes de responsabilidade: atos contra a existência da União, livre exercício dos Poderes, probidade na Administração etc.'
    ],

    comparacoes: [
      { termoA: 'Sucessão', termoB: 'Substituição', diferenca: 'SUBSTITUIÇÃO: assume temporariamente, em caso de IMPEDIMENTO (doença, viagem). SUCESSÃO: assume definitivamente, em caso de VAGA (morte, renúncia, cassação). A ordem é: Vice → Presidente da Câmara → Presidente do Senado → Presidente do STF.' },
      { termoA: 'Vacância nos 2 primeiros anos', termoB: 'Vacância nos 2 últimos anos', diferenca: 'PRIMEIROS 2 ANOS: eleição DIRETA em 90 dias (o povo vota). ÚLTIMOS 2 ANOS: eleição INDIRETA pelo Congresso em 30 dias (o Congresso vota).' },
      { termoA: 'Crime comum', termoB: 'Crime de responsabilidade', diferenca: 'CRIME COMUM: julgado pelo STF (Presidente) após autorização da Câmara por 2/3. CRIME DE RESPONSABILIDADE: julgado pelo SENADO (Presidente) após autorização da Câmara por 2/3. A Câmara AUTORIZA; o Senado JULGA.' },
      { termoA: 'Imunidade formal do Presidente', termoB: 'Imunidade do parlamentar', diferenca: 'PRESIDENTE (art. 86): não pode ser responsabilizado por atos estranhos ao exercício da função; durante o mandato, não pode ser preso por crime comum sem sentença condenatória. PARLAMENTAR (art. 53): imunidade material (opiniões, palavras, votos) e formal (prisão só em flagrante de crime inafiançável; processo criminal sem licença prévia após EC 35/2001).' }
    ],

    aplicacaoEmConcurso: 'Cobrança de arts. 77 a 84 (eleição, mandato, requisitos, competências), das hipóteses de sucessão/substituição, e da distinção entre crime comum e de responsabilidade. Alta frequência em concursos federais e de Tribunais.',

    pegadinhas: [
      'Confundir sucessão com substituição.',
      'Trocar os prazos de eleição direta (90 dias, 2 primeiros anos) com eleição indireta (30 dias, 2 últimos anos).',
      'Dizer que o Senado processa e julga o Presidente por crime COMUM. É o STF. O Senado julga CRIME DE RESPONSABILIDADE.',
      'Achar que o Vice é sempre o substituto. Se ambos os cargos estiverem vagos, assume o Presidente da Câmara.',
      'Dizer que o Presidente pode ser preso por crime comum durante o mandato sem sentença condenatória (não pode).',
      'Confundir os Conselhos (Conselho da República x Conselho de Defesa Nacional).'
    ],

    errosComuns: [
      'Decorar a linha sucessória sem entender as hipóteses.',
      'Confundir crimes de responsabilidade do Presidente (Senado) com os de Governador (Tribunal Especial).',
      'Ignorar que o Vice pode exercer funções por delegação do Presidente.'
    ],

    resumo: [
      'Presidente: eleição direta por maioria absoluta; mandato de 4 anos; posse em 1º de janeiro.',
      'Requisitos: brasileiro nato, 35 anos, pleno exercício dos direitos políticos, alistamento, domicílio, filiação.',
      'Linha sucessória: Vice → Pres. Câmara → Pres. Senado → Pres. STF.',
      'Vacância nos 2 primeiros anos: eleição direta em 90 dias.',
      'Vacância nos 2 últimos anos: eleição indireta pelo Congresso em 30 dias.',
      'Crime comum: julgado pelo STF. Crime de responsabilidade: julgado pelo Senado.',
      'A Câmara AUTORIZA (2/3) nos dois casos.',
      'Conselho da República: opina em situações graves.',
      'Conselho de Defesa Nacional: opina em temas de segurança nacional.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'O Presidente é o chefe do Executivo federal. Se ele sai do cargo, assume o Vice; se o Vice também sair, assume o Presidente da Câmara, depois o do Senado e, por último, o do STF. Dependendo de quando ocorre a vacância, o povo vota (primeiros 2 anos) ou o Congresso vota (últimos 2).',
      outroExemplo: 'Se o Presidente renunciar no segundo mês do mandato, há eleição DIRETA em 90 dias. Se renunciar faltando 6 meses, há eleição INDIRETA pelo Congresso em 30 dias.',
      compararConceitos: 'Sucessão = definitiva (vaga). Substituição = temporária (impedimento). Crime comum = STF. Crime de responsabilidade = Senado. Primeiros 2 anos = direta. Últimos 2 anos = indireta.',
      mostrarPegadinha: 'Cuidado: "O Vice-Presidente é sempre o substituto do Presidente". Em caso de VAGA do Presidente, ele SUCEDE (definitivo). Em caso de IMPEDIMENTO, ele SUBSTITUI (temporário).',
      comoApareceEmConcurso: 'Cobrança de arts. 77 a 84 e das hipóteses de sucessão.',
      fazerPergunta: {
        pergunta: 'Um Presidente é acusado de crime comum durante o mandato. Quem processa e julga?',
        resposta: 'A Câmara dos Deputados AUTORIZA (2/3) e o SUPREMO TRIBUNAL FEDERAL julga (crime comum). Se fosse CRIME DE RESPONSABILIDADE, a Câmara autorizaria e o SENADO FEDERAL julgaria.'
      }
    }
  },

  /* ============================================================
     DC-15 — Poder Judiciário
  ============================================================ */
  'DC-15': {
    id: 'L-DC-15',
    moduloId: 'DC-15',
    objetivo: 'Dominar a estrutura e o funcionamento do Poder Judiciário brasileiro (arts. 92 a 126 da CF/88): órgãos, STF, STJ, Justiça Federal, Estadual, do Trabalho, Eleitoral, Militar, CNJ, competências, garantias dos magistrados e organização.',
    prerequisitos: ['DC-12'],

    introducao: 'O Poder Judiciário é o responsável pela função jurisdicional — dizer o direito no caso concreto. A CF organiza os órgãos, distribui competências e garante aos magistrados as condições para julgar com independência.',

    explicacaoSimples: 'Pense na Justiça como uma grande estrutura com vários níveis. No topo está o STF (guarda da Constituição) e, logo abaixo, o STJ (guarda da lei federal). Depois vêm a Justiça Federal, Estadual, do Trabalho, Eleitoral e Militar. Cada uma tem sua área. Há ainda o CNJ, que cuida da administração do Judiciário.',

    explicacaoTecnica: 'Art. 92: são órgãos do Poder Judiciário — STF, CNJ, STJ, TST, TREs, Tribunais de Justiça dos Estados e DF, TRFs, TRTs, Tribunais Militares e juízes dos respectivos órgãos. Art. 93: Estatuto da Magistratura (LC). Art. 94: regras de ingresso (quinto constitucional). Art. 95: garantias dos magistrados — vitaliciedade, inamovibilidade e irredutibilidade de subsídio. Art. 96: competências dos tribunais. Art. 97: reserva de plenário (cláusula de reserva de plenário — somente pelo voto da maioria absoluta dos membros do Tribunal ou do órgão especial). Art. 98: Justiça de Paz. Art. 99: autonomia administrativa e financeira do Judiciário. Art. 100: precatórios. Art. 101 a 103: STF — composição (11 ministros, brasileiros natos, 35 a 65 anos, nomeados pelo Presidente após aprovação por maioria absoluta do Senado), competências, ADI/ADC/ADPF/ADO. Art. 104 a 105: STJ — 33 ministros, 35 a 65 anos, competências. Art. 106 a 110: Justiça Federal — TRFs (mínimo 7 juízes). Art. 111 a 117: Justiça do Trabalho. Art. 118 a 121: Justiça Eleitoral. Art. 122 a 124: Justiça Militar. Art. 125 a 126: Justiça Estadual. Art. 127 a 130: funções essenciais à Justiça (MP, Advocacia Pública, Advocacia, Defensoria). Art. 92, §1º: o STF tem 11 ministros. Art. 103-B: CNJ — 15 membros, presidido pelo Presidente do STF.',

    exemplos: [
      'STF: guarda da CF; julga ADI, ADPF, HC de autoridades específicas, extradição.',
      'STJ: guarda da lei federal; julga recurso especial, MS contra Ministro de Estado, HC quando a autoridade for desembargador.',
      'Justiça Federal: causas em que a União, autarquias federais ou empresas públicas federais forem partes.',
      'Justiça do Trabalho: conflitos entre empregado e empregador.',
      'Justiça Eleitoral: eleições, partidos políticos, registro de candidatos.',
      'Justiça Militar: crimes militares.',
      'Justiça Estadual: causas residuais — o que não for das outras.',
      'CNJ: controle administrativo, financeiro e disciplinar do Judiciário.'
    ],

    comparacoes: [
      { termoA: 'STF', termoB: 'STJ', diferenca: 'STF: guarda da CONSTITUIÇÃO; 11 ministros; julga ADI, ADPF, ADO, ADC, extradição, HC de autoridades. STJ: guarda da LEI FEDERAL; 33 ministros; julga recurso especial, MS contra Ministro de Estado, HC quando a autoridade é desembargador.' },
      { termoA: 'Vitaliciedade', termoB: 'Inamovibilidade', diferenca: 'VITALICIEDADE: o juiz não perde o cargo (após 2 anos de exercício no 1º grau; imediata nos tribunais superiores), salvo por sentença judicial transitada em julgado. INAMOVIBILIDADE: o juiz não pode ser removido de sua comarca ou seção sem sua vontade, salvo por interesse público (voto de 2/3 do tribunal).' },
      { termoA: 'Justiça Federal', termoB: 'Justiça Estadual', diferenca: 'FEDERAL: julga causas em que a União, autarquias federais ou empresas públicas federais forem partes; crimes políticos; crimes contra bens da União; estrangeiros. ESTADUAL: residual — o que não for das outras Justiças.' },
      { termoA: 'CNJ', termoB: 'STF', diferenca: 'CNJ: órgão de CONTROLE administrativo, financeiro e disciplinar do Judiciário — não julga causas. STF: órgão de CÚPULA do Judiciário, com competência para julgar ADI, HC, extradição e outras causas constitucionais.' }
    ],

    aplicacaoEmConcurso: 'Cobrança de arts. 92 a 105 (órgãos, composição, competências), das garantias dos magistrados (vitaliciedade, inamovibilidade, irredutibilidade) e da distinção entre STF e STJ. Comum em concursos de Tribunais.',

    pegadinhas: [
      'Confundir STF (Constituição) com STJ (lei federal).',
      'Trocar o número de ministros do STF (11) com o do STJ (33).',
      'Achar que o CNJ julga causas. O CNJ faz controle administrativo, financeiro e disciplinar.',
      'Dizer que o juiz pode ser removido sem processo. A inamovibilidade garante proteção, salvo por interesse público e voto de 2/3 do tribunal.',
      'Confundir as garantias: vitaliciedade (não perde o cargo), inamovibilidade (não é removido), irredutibilidade (não tem subsídio reduzido).',
      'Dizer que o STF pode julgar qualquer causa. Tem competência taxativa na CF.'
    ],

    errosComuns: [
      'Decorar os órgãos sem entender a lógica (STF = Constituição; STJ = lei federal; Justiça Federal = causas federais; Justiça Estadual = residual).',
      'Confundir as composições dos tribunais superiores.',
      'Ignorar a EC 45/2004, que criou o CNJ.'
    ],

    resumo: [
      'Órgãos: STF, CNJ, STJ, TST, TREs, TJs, TRFs, TRTs, Tribunais Militares e juízes.',
      'STF: 11 ministros; guarda da Constituição; julga ADI, ADPF, ADO, ADC, extradição.',
      'STJ: 33 ministros; guarda da lei federal; julga recurso especial.',
      'Justiça Federal: causas com a União/autarquias/empresas públicas federais.',
      'Justiça do Trabalho: relações de trabalho.',
      'Justiça Eleitoral: eleições e partidos.',
      'Justiça Militar: crimes militares.',
      'Justiça Estadual: residual.',
      'CNJ: controle administrativo, financeiro e disciplinar (EC 45/2004).',
      'Garantias do magistrado: vitaliciedade, inamovibilidade e irredutibilidade de subsídio.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'O Judiciário é uma escada: no topo o STF (Constituição), depois o STJ (lei federal), depois as Justiças especializadas (Federal, Trabalho, Eleitoral, Militar) e a Estadual (residual). Cada uma cuida de uma área.',
      outroExemplo: 'Uma causa sobre FGTS entre empregado e empresa vai para a Justiça do Trabalho. Uma causa em que a União é ré vai para a Justiça Federal. Uma causa entre dois particulares sobre contrato vai para a Justiça Estadual (residual).',
      compararConceitos: 'STF = Constituição. STJ = lei federal. Justiça Federal = causas federais. Justiça Estadual = residual. CNJ = administração. Vitaliciedade ≠ inamovibilidade ≠ irredutibilidade.',
      mostrarPegadinha: 'Cuidado: "O CNJ julga causas judiciais". ERRADO. O CNJ faz controle ADMINISTRATIVO, FINANCEIRO e DISCIPLINAR do Judiciário — não julga causas.',
      comoApareceEmConcurso: 'Cobrança de competências e composições.',
      fazerPergunta: {
        pergunta: 'Um Governador de Estado é acusado de crime comum. Quem julga?',
        resposta: 'O SUPERIOR TRIBUNAL DE JUSTIÇA (STJ) — art. 105, I, "a". Se fosse crime de responsabilidade, o julgamento seria pelo Tribunal Especial (composto por desembargadores do TJ + deputados estaduais), conforme a Constituição Estadual.'
      }
    }
  }

  /* ============================================================
     Próximo lote — adicionar em edição futura:
     'DC-16': { ... }
     'DC-17': { ... }
     'DC-18': { ... }
  ============================================================ */

};/* ============================================================
   AULAS — Módulos de prioridade MÉDIA
   Preenchidos neste lote: DC-10, DC-14, DC-15
   Próximo lote: DC-16, DC-17, DC-18
   ============================================================ */

window.LESSONS_MEDIA = {

  /* ============================================================
     DC-10 — Intervenção
  ============================================================ */
  'DC-10': {
    id: 'L-DC-10',
    moduloId: 'DC-10',
    objetivo: 'Dominar o instituto da intervenção (arts. 34 a 36 da CF/88): hipóteses de intervenção federal, estadual e em Municípios, procedimento, decreto, controle pelo Congresso e relação com a autonomia federativa.',
    prerequisitos: ['DC-08'],

    introducao: 'A intervenção é medida excepcional: o ente federativo quebra temporariamente a autonomia de outro, para restabelecer a normalidade constitucional. É o oposto do princípio federativo — por isso, é taxativa, temporária e sujeita a controle.',

    explicacaoSimples: 'Pense na Federação como um condomínio. Se um morador descumpre regras gravíssimas, o síndico (União ou Estado) pode, temporariamente, assumir o controle do apartamento dele — mas só nas hipóteses previstas no regimento e depois de seguir o procedimento. Isso é intervenção.',

    explicacaoTecnica: 'Art. 34: hipóteses de intervenção FEDERAL nos Estados e no DF — (I) manter a integridade nacional; (II) repelir invasão estrangeira ou de uma unidade da Federação em outra; (III) pôr termo a grave comprometimento da ordem pública; (IV) garantir o livre exercício de qualquer dos Poderes nas unidades da Federação; (V) reorganizar as finanças da unidade (que suspender pagamento da dívida fundada por mais de 2 anos, ou deixar de entregar receitas); (VI) prover a execução de lei federal, ordem ou decisão judicial; (VII) assegurar a observância dos princípios constitucionais sensíveis (forma republicana, sistema representativo, regime democrático, direitos da pessoa humana, autonomia municipal, prestação de contas da Administração Pública direta e indireta). Art. 35: hipóteses de intervenção ESTADUAL nos Municípios — (I) deixar de ser paga, sem motivo, por 2 anos, a dívida fundada; (II) não forem prestadas contas devidas; (III) não tiver sido aplicado o mínimo exigido da receita municipal na manutenção e desenvolvimento do ensino e nas ações e serviços públicos de saúde; (IV) o Tribunal de Justiça der provimento a representação para assegurar a observância de princípios indicados na Constituição Estadual ou para prover a execução de lei, de ordem ou de decisão judicial. Art. 36: procedimento — decreto do Presidente (intervenção federal espontânea) ou requisição (nos casos do art. 34, IV, VI e VII); ouvidoria prévia do Conselho da República e do Conselho de Defesa; controle político pelo Congresso (aprovação por maioria simples em 24h, se em recesso convocação extraordinária); decreto especifica amplitude, prazo e condições. §1º: nomeação de interventor. §2º: cessação da intervenção — retorno à normalidade. §3º: se cessada a causa, as autoridades afastadas retornam aos cargos.',

    exemplos: [
      'Intervenção federal para garantir ordem pública: grave crise de segurança em Estado.',
      'Intervenção federal para garantir execução de decisão judicial: descumprimento de ordem federal.',
      'Intervenção federal para assegurar princípios sensíveis: descumprimento da autonomia municipal.',
      'Intervenção estadual em Município: não aplicação do mínimo na educação ou saúde.',
      'Intervenção estadual por não pagamento de dívida fundada por 2 anos.',
      'Reorganização de finanças: Estado que não paga dívida fundada por mais de 2 anos.'
    ],

    comparacoes: [
      { termoA: 'Intervenção federal', termoB: 'Intervenção estadual', diferenca: 'FEDERAL: decreto do Presidente da República; atinge Estados e DF; hipóteses do art. 34. ESTADUAL: decreto do Governador; atinge Municípios; hipóteses do art. 35. São institutos paralelos, mas com titulares e destinatários diferentes.' },
      { termoA: 'Intervenção espontânea', termoB: 'Intervenção provocada', diferenca: 'ESPONTÂNEA: decreto do Presidente, sem provocação de outro Poder (hipóteses dos incisos I, II, III e V do art. 34). PROVOCADA: depende de requisição do STF (inciso VI), do STJ (inciso VI, lei federal) ou do TSE (inciso VII, princípios sensíveis), ou de solicitação do Poder coacto (inciso IV).' },
      { termoA: 'Intervenção federal', termoB: 'Estado de Sítio', diferenca: 'INTERVENÇÃO: medida excepcional para restabelecer a ordem federativa — atinge o ente, não os direitos fundamentais diretamente. ESTADO DE SÍTIO: medida excepcional para restabelecer a ordem constitucional em caso de comoção grave ou guerra — atinge diretamente os direitos fundamentais, suspendendo garantias.' },
      { termoA: 'Controle político', termoB: 'Controle judicial', diferenca: 'POLÍTICO: feito pelo Congresso Nacional — aprovação do decreto de intervenção em 24h. JUDICIAL: feito pelo STF, STJ ou TSE — conforme a hipótese, o Tribunal competente pode requisitar a intervenção.' }
    ],

    aplicacaoEmConcurso: 'Cobrança das hipóteses de intervenção federal (art. 34) x estadual (art. 35), do procedimento (decreto, ouvidoria dos Conselhos, controle pelo Congresso em 24h) e das regras específicas (prazo, nomeação de interventor, retorno das autoridades). Questões costumam misturar as hipóteses dos dois artigos.',

    pegadinhas: [
      'Confundir intervenção federal (arts. 34) com estadual (arts. 35).',
      'Achar que o decreto de intervenção é do Congresso. É do Presidente (federal) ou do Governador (estadual).',
      'Dizer que a intervenção depende de autorização prévia do Congresso. O decreto é expedido e depois submetido ao Congresso em 24h.',
      'Esquecer a ouvidoria prévia do Conselho da República e do Conselho de Defesa (intervenção federal).',
      'Confundir intervenção com estado de sítio ou estado de defesa.',
      'Achar que a intervenção é permanente. É temporária — cessada a causa, as autoridades retornam.'
    ],

    errosComuns: [
      'Decorar hipóteses sem associar ao titular do decreto.',
      'Ignorar que a intervenção em Município (art. 35, I a IV) pode ser decreto do Governador, mas a hipótese do inciso IV depende de provimento pelo TJ.',
      'Não distinguir intervenção espontânea de provocada.'
    ],

    resumo: [
      'Intervenção é medida excepcional e temporária.',
      'Art. 34: hipóteses de intervenção FEDERAL nos Estados e DF.',
      'Art. 35: hipóteses de intervenção ESTADUAL nos Municípios.',
      'Decreto: Presidente (federal) ou Governador (estadual).',
      'Controle: Congresso aprova o decreto em 24h.',
      'Ouvidoria prévia do Conselho da República e Conselho de Defesa (federal).',
      'Decreto especifica amplitude, prazo e condições.',
      'Cessada a causa, retornam as autoridades afastadas.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Intervenção é como o "juiz" do condomínio assumindo temporariamente o apartamento de um morador que quebrou regras gravíssimas — só nas hipóteses do regimento, por prazo determinado, com o condomínio aprovando depois.',
      outroExemplo: 'Se um Estado deixa de pagar precatórios por mais de 2 anos, cabe intervenção federal por reorganização de finanças (art. 34, V). Se um Município não aplica o mínimo em saúde, cabe intervenção estadual (art. 35, III).',
      compararConceitos: 'Federal (Presidente, atinge Estados) x Estadual (Governador, atinge Municípios). Espontânea (sem provocação) x Provocada (requisição ou solicitação). Intervenção x Estado de Sítio: uma atinge o ente, o outro atinge direitos.',
      mostrarPegadinha: 'Cuidado: "A intervenção federal só pode ser decretada pelo Congresso Nacional". ERRADO. O DECRETO é do Presidente; o Congresso apenas APROVA depois, em 24 horas.',
      comoApareceEmConcurso: 'Cobrança das hipóteses (arts. 34 e 35) e do procedimento (decreto + controle do Congresso).',
      fazerPergunta: {
        pergunta: 'Um Estado deixa de aplicar o mínimo constitucional em educação. Cabe intervenção federal?',
        resposta: 'NÃO — a não aplicação do mínimo em educação é hipótese de intervenção ESTADUAL em MUNICÍPIO (art. 35, III). Em relação ao Estado, a não aplicação do mínimo não é hipótese de intervenção federal, e sim de responsabilização política (crime de responsabilidade do Governador) e rejeição de contas.'
      }
    }
  },

  /* ============================================================
     DC-14 — Poder Executivo
  ============================================================ */
  'DC-14': {
    id: 'L-DC-14',
    moduloId: 'DC-14',
    objetivo: 'Dominar a estrutura e o funcionamento do Poder Executivo federal (arts. 76 a 91 da CF/88): Presidente, Vice, eleição, mandato, requisitos, sucessão, substituição, competências, ministros, responsabilidade e crimes de responsabilidade.',
    prerequisitos: ['DC-12'],

    introducao: 'O Poder Executivo exerce a função típica de administrar o Estado. Na esfera federal, é chefiado pelo Presidente da República, auxiliado pelos Ministros de Estado. As bancas cobram as regras de eleição, as hipóteses de sucessão/substituição e os crimes de responsabilidade.',

    explicacaoSimples: 'O Presidente é o "chefe" do Executivo federal: administra o país, representa o Brasil no exterior, sanciona e veta leis, edita medidas provisórias. Se ele sai do cargo por algum motivo, há regras específicas sobre quem assume — o Vice, o Presidente da Câmara, o do Senado ou o do STF.',

    explicacaoTecnica: 'Art. 76: o Poder Executivo é exercido pelo Presidente da República, auxiliado pelos Ministros de Estado. Art. 77: eleição pelo sufrágio universal e voto direto e secreto, maioria absoluta; 2º turno se necessário; posse em 1º de janeiro do ano seguinte; mandato de 4 anos. Art. 14, §3º, VI, "a": idade mínima de 35 anos, brasileiro nato, pleno exercício dos direitos políticos, alistamento eleitoral, domicílio eleitoral e filiação partidária. Art. 78: posse em sessão conjunta do Congresso. Art. 79: o Vice substitui o Presidente em caso de impedimento e sucede em caso de vaga. Art. 80: em caso de impedimento do Presidente e do Vice, ou vacância dos cargos, assumem sucessivamente: Presidente da Câmara, do Senado e do STF. Art. 81: se a vacância ocorrer nos 2 primeiros anos, eleição direta em 90 dias; se nos 2 últimos, eleição indireta pelo Congresso em 30 dias. Art. 82: mandato de 4 anos. Art. 83: 35 anos, brasileiro nato, pleno exercício dos direitos políticos, alistamento, domicílio, filiação. Art. 84: competências privativas do Presidente (sancionar, vetar, editar MP, nomear Ministros do STF, etc.). Art. 85: crimes de responsabilidade — atos que atentem contra a CF e especialmente contra: existência da União, livre exercício dos Poderes, exercício dos direitos políticos, segurança interna, probidade na Administração, lei orçamentária, guarda e uso do dinheiro público. Art. 86: imunidade formal — o Presidente não pode ser responsabilizado por atos estranhos ao exercício de suas funções. Art. 87: Ministros de Estado auxiliam o Presidente. Art. 88: lei disporá sobre criação e extinção de Ministérios. Art. 89: Conselho da República. Art. 90: Conselho de Defesa Nacional. Art. 91: regras sobre esses Conselhos.',

    exemplos: [
      'Eleição: 1º turno no primeiro domingo de outubro; 2º turno no último domingo de outubro.',
      'Posse: 1º de janeiro do ano seguinte.',
      'Vacância nos 2 primeiros anos: eleição direta em 90 dias.',
      'Vacância nos 2 últimos anos: eleição indireta pelo Congresso em 30 dias.',
      'Sucessão: Vice → Presidente da Câmara → Presidente do Senado → Presidente do STF.',
      'Ministro do STF: nomeação pelo Presidente, após aprovação por maioria absoluta do Senado.',
      'Crimes de responsabilidade: atos contra a existência da União, livre exercício dos Poderes, probidade na Administração etc.'
    ],

    comparacoes: [
      { termoA: 'Sucessão', termoB: 'Substituição', diferenca: 'SUBSTITUIÇÃO: assume temporariamente, em caso de IMPEDIMENTO (doença, viagem). SUCESSÃO: assume definitivamente, em caso de VAGA (morte, renúncia, cassação). A ordem é: Vice → Presidente da Câmara → Presidente do Senado → Presidente do STF.' },
      { termoA: 'Vacância nos 2 primeiros anos', termoB: 'Vacância nos 2 últimos anos', diferenca: 'PRIMEIROS 2 ANOS: eleição DIRETA em 90 dias (o povo vota). ÚLTIMOS 2 ANOS: eleição INDIRETA pelo Congresso em 30 dias (o Congresso vota).' },
      { termoA: 'Crime comum', termoB: 'Crime de responsabilidade', diferenca: 'CRIME COMUM: julgado pelo STF (Presidente) após autorização da Câmara por 2/3. CRIME DE RESPONSABILIDADE: julgado pelo SENADO (Presidente) após autorização da Câmara por 2/3. A Câmara AUTORIZA; o Senado JULGA.' },
      { termoA: 'Imunidade formal do Presidente', termoB: 'Imunidade do parlamentar', diferenca: 'PRESIDENTE (art. 86): não pode ser responsabilizado por atos estranhos ao exercício da função; durante o mandato, não pode ser preso por crime comum sem sentença condenatória. PARLAMENTAR (art. 53): imunidade material (opiniões, palavras, votos) e formal (prisão só em flagrante de crime inafiançável; processo criminal sem licença prévia após EC 35/2001).' }
    ],

    aplicacaoEmConcurso: 'Cobrança de arts. 77 a 84 (eleição, mandato, requisitos, competências), das hipóteses de sucessão/substituição, e da distinção entre crime comum e de responsabilidade. Alta frequência em concursos federais e de Tribunais.',

    pegadinhas: [
      'Confundir sucessão com substituição.',
      'Trocar os prazos de eleição direta (90 dias, 2 primeiros anos) com eleição indireta (30 dias, 2 últimos anos).',
      'Dizer que o Senado processa e julga o Presidente por crime COMUM. É o STF. O Senado julga CRIME DE RESPONSABILIDADE.',
      'Achar que o Vice é sempre o substituto. Se ambos os cargos estiverem vagos, assume o Presidente da Câmara.',
      'Dizer que o Presidente pode ser preso por crime comum durante o mandato sem sentença condenatória (não pode).',
      'Confundir os Conselhos (Conselho da República x Conselho de Defesa Nacional).'
    ],

    errosComuns: [
      'Decorar a linha sucessória sem entender as hipóteses.',
      'Confundir crimes de responsabilidade do Presidente (Senado) com os de Governador (Tribunal Especial).',
      'Ignorar que o Vice pode exercer funções por delegação do Presidente.'
    ],

    resumo: [
      'Presidente: eleição direta por maioria absoluta; mandato de 4 anos; posse em 1º de janeiro.',
      'Requisitos: brasileiro nato, 35 anos, pleno exercício dos direitos políticos, alistamento, domicílio, filiação.',
      'Linha sucessória: Vice → Pres. Câmara → Pres. Senado → Pres. STF.',
      'Vacância nos 2 primeiros anos: eleição direta em 90 dias.',
      'Vacância nos 2 últimos anos: eleição indireta pelo Congresso em 30 dias.',
      'Crime comum: julgado pelo STF. Crime de responsabilidade: julgado pelo Senado.',
      'A Câmara AUTORIZA (2/3) nos dois casos.',
      'Conselho da República: opina em situações graves.',
      'Conselho de Defesa Nacional: opina em temas de segurança nacional.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'O Presidente é o chefe do Executivo federal. Se ele sai do cargo, assume o Vice; se o Vice também sair, assume o Presidente da Câmara, depois o do Senado e, por último, o do STF. Dependendo de quando ocorre a vacância, o povo vota (primeiros 2 anos) ou o Congresso vota (últimos 2).',
      outroExemplo: 'Se o Presidente renunciar no segundo mês do mandato, há eleição DIRETA em 90 dias. Se renunciar faltando 6 meses, há eleição INDIRETA pelo Congresso em 30 dias.',
      compararConceitos: 'Sucessão = definitiva (vaga). Substituição = temporária (impedimento). Crime comum = STF. Crime de responsabilidade = Senado. Primeiros 2 anos = direta. Últimos 2 anos = indireta.',
      mostrarPegadinha: 'Cuidado: "O Vice-Presidente é sempre o substituto do Presidente". Em caso de VAGA do Presidente, ele SUCEDE (definitivo). Em caso de IMPEDIMENTO, ele SUBSTITUI (temporário).',
      comoApareceEmConcurso: 'Cobrança de arts. 77 a 84 e das hipóteses de sucessão.',
      fazerPergunta: {
        pergunta: 'Um Presidente é acusado de crime comum durante o mandato. Quem processa e julga?',
        resposta: 'A Câmara dos Deputados AUTORIZA (2/3) e o SUPREMO TRIBUNAL FEDERAL julga (crime comum). Se fosse CRIME DE RESPONSABILIDADE, a Câmara autorizaria e o SENADO FEDERAL julgaria.'
      }
    }
  },

  /* ============================================================
     DC-15 — Poder Judiciário
  ============================================================ */
  'DC-15': {
    id: 'L-DC-15',
    moduloId: 'DC-15',
    objetivo: 'Dominar a estrutura e o funcionamento do Poder Judiciário brasileiro (arts. 92 a 126 da CF/88): órgãos, STF, STJ, Justiça Federal, Estadual, do Trabalho, Eleitoral, Militar, CNJ, competências, garantias dos magistrados e organização.',
    prerequisitos: ['DC-12'],

    introducao: 'O Poder Judiciário é o responsável pela função jurisdicional — dizer o direito no caso concreto. A CF organiza os órgãos, distribui competências e garante aos magistrados as condições para julgar com independência.',

    explicacaoSimples: 'Pense na Justiça como uma grande estrutura com vários níveis. No topo está o STF (guarda da Constituição) e, logo abaixo, o STJ (guarda da lei federal). Depois vêm a Justiça Federal, Estadual, do Trabalho, Eleitoral e Militar. Cada uma tem sua área. Há ainda o CNJ, que cuida da administração do Judiciário.',

    explicacaoTecnica: 'Art. 92: são órgãos do Poder Judiciário — STF, CNJ, STJ, TST, TREs, Tribunais de Justiça dos Estados e DF, TRFs, TRTs, Tribunais Militares e juízes dos respectivos órgãos. Art. 93: Estatuto da Magistratura (LC). Art. 94: regras de ingresso (quinto constitucional). Art. 95: garantias dos magistrados — vitaliciedade, inamovibilidade e irredutibilidade de subsídio. Art. 96: competências dos tribunais. Art. 97: reserva de plenário (cláusula de reserva de plenário — somente pelo voto da maioria absoluta dos membros do Tribunal ou do órgão especial). Art. 98: Justiça de Paz. Art. 99: autonomia administrativa e financeira do Judiciário. Art. 100: precatórios. Art. 101 a 103: STF — composição (11 ministros, brasileiros natos, 35 a 65 anos, nomeados pelo Presidente após aprovação por maioria absoluta do Senado), competências, ADI/ADC/ADPF/ADO. Art. 104 a 105: STJ — 33 ministros, 35 a 65 anos, competências. Art. 106 a 110: Justiça Federal — TRFs (mínimo 7 juízes). Art. 111 a 117: Justiça do Trabalho. Art. 118 a 121: Justiça Eleitoral. Art. 122 a 124: Justiça Militar. Art. 125 a 126: Justiça Estadual. Art. 127 a 130: funções essenciais à Justiça (MP, Advocacia Pública, Advocacia, Defensoria). Art. 92, §1º: o STF tem 11 ministros. Art. 103-B: CNJ — 15 membros, presidido pelo Presidente do STF.',

    exemplos: [
      'STF: guarda da CF; julga ADI, ADPF, HC de autoridades específicas, extradição.',
      'STJ: guarda da lei federal; julga recurso especial, MS contra Ministro de Estado, HC quando a autoridade for desembargador.',
      'Justiça Federal: causas em que a União, autarquias federais ou empresas públicas federais forem partes.',
      'Justiça do Trabalho: conflitos entre empregado e empregador.',
      'Justiça Eleitoral: eleições, partidos políticos, registro de candidatos.',
      'Justiça Militar: crimes militares.',
      'Justiça Estadual: causas residuais — o que não for das outras.',
      'CNJ: controle administrativo, financeiro e disciplinar do Judiciário.'
    ],

    comparacoes: [
      { termoA: 'STF', termoB: 'STJ', diferenca: 'STF: guarda da CONSTITUIÇÃO; 11 ministros; julga ADI, ADPF, ADO, ADC, extradição, HC de autoridades. STJ: guarda da LEI FEDERAL; 33 ministros; julga recurso especial, MS contra Ministro de Estado, HC quando a autoridade é desembargador.' },
      { termoA: 'Vitaliciedade', termoB: 'Inamovibilidade', diferenca: 'VITALICIEDADE: o juiz não perde o cargo (após 2 anos de exercício no 1º grau; imediata nos tribunais superiores), salvo por sentença judicial transitada em julgado. INAMOVIBILIDADE: o juiz não pode ser removido de sua comarca ou seção sem sua vontade, salvo por interesse público (voto de 2/3 do tribunal).' },
      { termoA: 'Justiça Federal', termoB: 'Justiça Estadual', diferenca: 'FEDERAL: julga causas em que a União, autarquias federais ou empresas públicas federais forem partes; crimes políticos; crimes contra bens da União; estrangeiros. ESTADUAL: residual — o que não for das outras Justiças.' },
      { termoA: 'CNJ', termoB: 'STF', diferenca: 'CNJ: órgão de CONTROLE administrativo, financeiro e disciplinar do Judiciário — não julga causas. STF: órgão de CÚPULA do Judiciário, com competência para julgar ADI, HC, extradição e outras causas constitucionais.' }
    ],

    aplicacaoEmConcurso: 'Cobrança de arts. 92 a 105 (órgãos, composição, competências), das garantias dos magistrados (vitaliciedade, inamovibilidade, irredutibilidade) e da distinção entre STF e STJ. Comum em concursos de Tribunais.',

    pegadinhas: [
      'Confundir STF (Constituição) com STJ (lei federal).',
      'Trocar o número de ministros do STF (11) com o do STJ (33).',
      'Achar que o CNJ julga causas. O CNJ faz controle administrativo, financeiro e disciplinar.',
      'Dizer que o juiz pode ser removido sem processo. A inamovibilidade garante proteção, salvo por interesse público e voto de 2/3 do tribunal.',
      'Confundir as garantias: vitaliciedade (não perde o cargo), inamovibilidade (não é removido), irredutibilidade (não tem subsídio reduzido).',
      'Dizer que o STF pode julgar qualquer causa. Tem competência taxativa na CF.'
    ],

    errosComuns: [
      'Decorar os órgãos sem entender a lógica (STF = Constituição; STJ = lei federal; Justiça Federal = causas federais; Justiça Estadual = residual).',
      'Confundir as composições dos tribunais superiores.',
      'Ignorar a EC 45/2004, que criou o CNJ.'
    ],

    resumo: [
      'Órgãos: STF, CNJ, STJ, TST, TREs, TJs, TRFs, TRTs, Tribunais Militares e juízes.',
      'STF: 11 ministros; guarda da Constituição; julga ADI, ADPF, ADO, ADC, extradição.',
      'STJ: 33 ministros; guarda da lei federal; julga recurso especial.',
      'Justiça Federal: causas com a União/autarquias/empresas públicas federais.',
      'Justiça do Trabalho: relações de trabalho.',
      'Justiça Eleitoral: eleições e partidos.',
      'Justiça Militar: crimes militares.',
      'Justiça Estadual: residual.',
      'CNJ: controle administrativo, financeiro e disciplinar (EC 45/2004).',
      'Garantias do magistrado: vitaliciedade, inamovibilidade e irredutibilidade de subsídio.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'O Judiciário é uma escada: no topo o STF (Constituição), depois o STJ (lei federal), depois as Justiças especializadas (Federal, Trabalho, Eleitoral, Militar) e a Estadual (residual). Cada uma cuida de uma área.',
      outroExemplo: 'Uma causa sobre FGTS entre empregado e empresa vai para a Justiça do Trabalho. Uma causa em que a União é ré vai para a Justiça Federal. Uma causa entre dois particulares sobre contrato vai para a Justiça Estadual (residual).',
      compararConceitos: 'STF = Constituição. STJ = lei federal. Justiça Federal = causas federais. Justiça Estadual = residual. CNJ = administração. Vitaliciedade ≠ inamovibilidade ≠ irredutibilidade.',
      mostrarPegadinha: 'Cuidado: "O CNJ julga causas judiciais". ERRADO. O CNJ faz controle ADMINISTRATIVO, FINANCEIRO e DISCIPLINAR do Judiciário — não julga causas.',
      comoApareceEmConcurso: 'Cobrança de competências e composições.',
      fazerPergunta: {
        pergunta: 'Um Governador de Estado é acusado de crime comum. Quem julga?',
        resposta: 'O SUPERIOR TRIBUNAL DE JUSTIÇA (STJ) — art. 105, I, "a". Se fosse crime de responsabilidade, o julgamento seria pelo Tribunal Especial (composto por desembargadores do TJ + deputados estaduais), conforme a Constituição Estadual.'
      }
    }
  }  ,

  /* ============================================================
     DC-16 — Funções Essenciais à Justiça
  ============================================================ */
  'DC-16': {
    id: 'L-DC-16',
    moduloId: 'DC-16',
    objetivo: 'Dominar as funções essenciais à Justiça (arts. 127 a 135 da CF/88): Ministério Público, Advocacia Pública, Advocacia e Defensoria Pública — funções, princípios, autonomia, garantias e organização constitucional. Foco especial no MP e na Defensoria.',
    prerequisitos: ['DC-15'],

    introducao: 'As funções essenciais à Justiça não integram nenhum dos três Poderes — são instituições autônomas que servem ao Estado e à sociedade. Cada uma tem missão própria: o MP fiscaliza a lei; a Advocacia Pública defende o Estado; a Advocacia defende o cidadão; a Defensoria defende os necessitados.',

    explicacaoSimples: 'Pense numa partida de futebol: o juiz é o Judiciário, mas há também o fiscal (MP, que cuida do cumprimento das regras), o advogado do time (Advocacia), o advogado do Estado (Advocacia Pública) e o advogado gratuito para quem não pode pagar (Defensoria). Todos essenciais ao jogo.',

    explicacaoTecnica: 'Art. 127: o Ministério Público é instituição permanente, essencial à função jurisdicional do Estado, incumbindo-lhe a defesa da ordem jurídica, do regime democrático e dos interesses sociais e individuais indisponíveis. Princípios: unidade, indivisibilidade e independência funcional. Art. 128: MP abrange MP da União (MPF, MP do Trabalho, MP Militar, MP do DF e Territórios) e MPs dos Estados. Art. 129: funções institucionais (promover ação penal pública, inquérito civil, ação civil pública, defesa do patrimônio público, etc.). Art. 130: legitimidade para interpor recursos. Art. 130-A: Conselho Nacional do Ministério Público (CNMP). Art. 131: Advocacia-Geral da União (AGU) — representa a União, judicial e extrajudicialmente, e presta consultoria e assessoramento ao Executivo. Art. 132: Procuradores dos Estados e do DF — representação judicial e consultoria. Art. 133: o advogado é indispensável à administração da justiça, sendo inviolável por seus atos e manifestações no exercício da profissão. Art. 134: Defensoria Pública — instituição permanente, essencial à função jurisdicional, incumbindo-lhe a orientação jurídica, promoção dos direitos humanos e defesa dos direitos individuais e coletivos, de forma integral e gratuita, aos necessitados. Art. 135: princípios e garantias dos servidores das carreiras.',

    exemplos: [
      'MP: promotor de justiça que atua em ação penal e em ação civil pública.',
      'MPF: atua em causas federais, ambientais e de direitos humanos.',
      'AGU: defende a União em juízo e presta consultoria ao Executivo federal.',
      'Advocacia: advogado particular que defende o cidadão em juízo.',
      'Defensoria Pública: defensor que atende gratuitamente quem não pode pagar advogado.',
      'CNMP: controle externo do MP.',
      'Garantias do MP: vitaliciedade, inamovibilidade e irredutibilidade de subsídio.'
    ],

    comparacoes: [
      { termoA: 'Ministério Público', termoB: 'Defensoria Pública', diferenca: 'MP: defende a ORDEM JURÍDICA, o REGIME DEMOCRÁTICO e os INTERESSES SOCIAIS E INDIVIDUAIS INDISPONÍVEIS. Defensoria: orienta e defende os NECESSITADOS, de forma integral e gratuita, sem representar o Estado.' },
      { termoA: 'Advocacia Pública (AGU/PGE)', termoB: 'Advocacia privada', diferenca: 'ADVOCACIA PÚBLICA: representa o ESTADO (União, Estados, DF) judicial e extrajudicialmente; presta consultoria ao Executivo. ADVOCACIA PRIVADA: representa o CIDADÃO; atividade essencial à administração da justiça.' },
      { termoA: 'MP', termoB: 'Judiciário', diferenca: 'MP: NÃO julga — atua como parte (fiscal da lei), promovendo ação penal, ação civil pública, inquérito civil. JUDICIÁRIO: julga as causas.' },
      { termoA: 'Garantias do MP', termoB: 'Garantias dos magistrados', diferenca: 'MP: vitaliciedade, inamovibilidade e irredutibilidade de subsídio. MAGISTRADOS: vitaliciedade, inamovibilidade e irredutibilidade de subsídio. São iguais em nome, mas aplicáveis a carreiras distintas.' }
    ],

    aplicacaoEmConcurso: 'Cobrança de arts. 127 a 135: natureza do MP (instituição permanente e essencial), princípios do MP (unidade, indivisibilidade, independência funcional), funções do MP, Advocacia-Geral da União, Defensoria Pública e a garantia do advogado. Alta frequência em concursos de MP, Defensoria e Tribunais.',

    pegadinhas: [
      'Dizer que o MP integra o Judiciário. NÃO — é instituição AUTÔNOMA, fora dos três Poderes.',
      'Confundir os princípios do MP (unidade, indivisibilidade, independência funcional) com os princípios da Administração (LIMPE).',
      'Achar que a Defensoria Pública é subordinada ao Executivo. Tem autonomia funcional e administrativa.',
      'Dizer que o advogado é obrigatório em qualquer causa. A CF diz que é indispensável à administração da justiça, mas há exceções (habeas corpus, por exemplo).',
      'Confundir AGU (representa a União) com PGE (representa os Estados) e PGM (representa os Municípios).',
      'Achar que o CNMP julga causas. Faz controle administrativo, financeiro e disciplinar.'
    ],

    errosComuns: [
      'Decorar órgãos sem entender a natureza de cada um.',
      'Confundir MP com Defensoria — funções são distintas.',
      'Ignorar que a Defensoria Pública foi reconhecida como expressão do regime democrático (EC 80/2014).'
    ],

    resumo: [
      'MP: instituição permanente e essencial; defende ordem jurídica, regime democrático e interesses indisponíveis.',
      'Princípios do MP: unidade, indivisibilidade e independência funcional.',
      'MP da União: MPF, MPT, MPM, MPDFT. MPs estaduais: organizados por lei estadual.',
      'AGU: representa a União e presta consultoria ao Executivo federal.',
      'PGE: representa os Estados. PGM: representa os Municípios.',
      'Advocacia: indispensável à administração da justiça.',
      'Defensoria Pública: atende necessitados, gratuita e integralmente, com autonomia.',
      'Garantias do MP e dos magistrados: vitaliciedade, inamovibilidade e irredutibilidade.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Cada instituição tem seu papel: MP fiscaliza a lei; AGU defende o Estado; advogado defende o cidadão; Defensoria defende quem não pode pagar advogado. Todas são essenciais à Justiça.',
      outroExemplo: 'Em uma ação civil pública sobre danos ambientais, quem ajuíza é o MP (art. 129, III). Em uma ação penal, quem denuncia é o MP. Em uma causa em que o cidadão não pode pagar advogado, atua a Defensoria Pública.',
      compararConceitos: 'MP = fiscal da lei. AGU/PGE/PGM = defensor do Estado. Advogado = defensor do cidadão. Defensoria = defensor do necessitado. Todos com garantias próprias.',
      mostrarPegadinha: 'Cuidado: "O MP é subordinado ao Poder Judiciário". ERRADO. O MP é instituição AUTÔNOMA, sem subordinação a nenhum dos três Poderes.',
      comoApareceEmConcurso: 'Cobrança de arts. 127 a 135 e das garantias.',
      fazerPergunta: {
        pergunta: 'Quem representa a União judicialmente em uma ação em que ela é ré?',
        resposta: 'A ADVOCACIA-GERAL DA UNIÃO (AGU) — art. 131, CF/88. A AGU representa a União, judicial e extrajudicialmente, e presta consultoria e assessoramento ao Poder Executivo federal.'
      }
    }
  },

  /* ============================================================
     DC-17 — Defesa do Estado e Instituições Democráticas
  ============================================================ */
  'DC-17': {
    id: 'L-DC-17',
    moduloId: 'DC-17',
    objetivo: 'Dominar os institutos de defesa do Estado e das instituições democráticas (arts. 136 a 144 da CF/88): Estado de Defesa, Estado de Sítio, Forças Armadas e Segurança Pública — hipóteses, procedimento, limites e diferenças.',
    prerequisitos: ['DC-10'],

    introducao: 'Em situações extremas (grave instabilidade institucional, calamidade, guerra), a CF prevê mecanismos excepcionais para preservar o Estado Democrático de Direito: o Estado de Defesa e o Estado de Sítio. Ambos suspendem temporariamente garantias fundamentais, sob rígido controle.',

    explicacaoSimples: 'Pense no Estado como uma casa com alarme. Normalmente, o alarme está desligado. Em situações de perigo (invasão iminente ou incêndio), o alarme dispara — é o Estado de Defesa. Em situações gravíssimas (guerra, comoção nacional), o alarme soa com mais força — é o Estado de Sítio. Em ambos os casos, é medida temporária.',

    explicacaoTecnica: 'Art. 136: ESTADO DE DEFESA — decreto do Presidente, ouvidos o Conselho da República e o Conselho de Defesa Nacional, para preservar ou prontamente restabelecer, em locais restritos e determinados, a ordem pública ou a paz social ameaçadas por grave e iminente instabilidade institucional ou atingidas por calamidades de grandes proporções na natureza. Prazo: 30 dias, prorrogável uma única vez por igual período. Medidas coercitivas: restrições a reunião, sigilo de correspondência, sigilo de comunicação telegráfica e telefônica, ocupação temporária de bens. Controle: o decreto é submetido ao Congresso em 24h; se em recesso, convocação extraordinária em 5 dias. Art. 137: ESTADO DE SÍTIO — decreto do Presidente, ouvidos os Conselhos, para comoção grave de repercussão nacional, fatos que comprovem a ineficácia de medida tomada durante o Estado de Defesa, ou declaração de estado de guerra ou resposta a agressão armada estrangeira. Prazo: 30 dias, prorrogável por iguais períodos (sem limite). Medidas: obrigação de permanência em localidade determinada, detenção em edifício não destinado a acusados de crimes comuns, restrições a correspondência, liberdade de imprensa, radiodifusão, reunião, etc. Art. 138: durante o Estado de Sítio, o Congresso NÃO pode ser dissolvido. Art. 139: restrições específicas. Art. 140: comissão do Congresso para acompanhar. Art. 141: cessado o Estado de Defesa ou Sítio, cessam os efeitos. Art. 142: Forças Armadas — defesa da Pátria, garantia dos Poderes constituídos e da lei e da ordem. Art. 143: serviço militar obrigatório. Art. 144: segurança pública — órgãos: polícia federal, polícia rodoviária federal, polícia ferroviária federal, polícias civis, polícias militares e corpos de bombeiros militares. Municípios podem constituir guardas municipais.',

    exemplos: [
      'Estado de Defesa: calamidade natural de grandes proporções em região específica.',
      'Estado de Defesa: grave e iminente instabilidade institucional em local restrito.',
      'Estado de Sítio: comoção grave de repercussão nacional.',
      'Estado de Sítio: declaração de estado de guerra ou resposta a agressão armada estrangeira.',
      'Polícia Federal: apura crimes contra a ordem política e social, faz polícia marítima, aeroportuária e de fronteiras.',
      'Polícia Militar: policiamento ostensivo e preservação da ordem pública.',
      'Guarda Municipal: proteção de bens, serviços e instalações do Município.'
    ],

    comparacoes: [
      { termoA: 'Estado de Defesa', termoB: 'Estado de Sítio', diferenca: 'DEFESA (art. 136): situações mais brandas — instabilidade institucional grave e iminente ou calamidades naturais em locais restritos. Prazo de 30 dias prorrogável uma vez. SÍTIO (art. 137): situações mais graves — comoção nacional, ineficácia do Estado de Defesa ou guerra/agressão estrangeira. Prazo de 30 dias prorrogável por iguais períodos sem limite.' },
      { termoA: 'Estado de Defesa', termoB: 'Intervenção', diferenca: 'ESTADO DE DEFESA: medida excepcional que suspende direitos fundamentais em locais restritos, sem quebra da autonomia federativa. INTERVENÇÃO: quebra temporária da autonomia de um ente federativo (Estado ou Município). São institutos distintos.' },
      { termoA: 'Forças Armadas', termoB: 'Segurança Pública', diferenca: 'FFAA (art. 142): Marinha, Exército e Aeronáutica — defesa da Pátria, garantia dos Poderes e da lei e da ordem. SEGURANÇA PÚBLICA (art. 144): dever do Estado, direito e responsabilidade de todos — exercida por polícias federal, rodoviária, ferroviária, civis, militares e bombeiros.' },
      { termoA: 'Polícia Federal', termoB: 'Polícia Civil', diferenca: 'PF: polícia judiciária da UNIÃO — apura crimes contra a ordem política, faz polícia marítima/aeroportuária/de fronteiras, exerce polícia judiciária da União. PC: polícia judiciária dos ESTADOS — apura crimes comuns, exceto militares.' }
    ],

    aplicacaoEmConcurso: 'Cobrança das hipóteses e prazos do Estado de Defesa e do Estado de Sítio, das atribuições das Forças Armadas e dos órgãos de segurança pública. Alta frequência em concursos de Polícia, Tribunais e área militar.',

    pegadinhas: [
      'Confundir hipóteses do Estado de Defesa com as do Estado de Sítio.',
      'Achar que o Estado de Defesa pode ser decretado sem ouvir os Conselhos. Os dois Conselhos devem ser ouvidos.',
      'Dizer que o Congresso pode ser dissolvido durante o Estado de Sítio (não pode — art. 138).',
      'Trocar os prazos: Defesa = 30 dias prorrogável UMA vez; Sítio = 30 dias prorrogável por iguais períodos.',
      'Confundir as atribuições da Polícia Federal com as da Polícia Civil.',
      'Achar que a Guarda Municipal tem as mesmas atribuições da Polícia Militar.'
    ],

    errosComuns: [
      'Decorar hipóteses sem diferenciar Defesa x Sítio.',
      'Confundir Forças Armadas com órgãos de segurança pública.',
      'Ignorar que o Congresso deve acompanhar as medidas por comissão.'
    ],

    resumo: [
      'Estado de Defesa (art. 136): instabilidade institucional ou calamidade em locais restritos; prazo de 30 dias prorrogável uma vez.',
      'Estado de Sítio (art. 137): comoção nacional, ineficácia do Defesa ou guerra; prazo de 30 dias prorrogável.',
      'Ambos: decreto do Presidente + ouvidoria dos Conselhos da República e de Defesa + controle pelo Congresso.',
      'Durante o Estado de Sítio, o Congresso NÃO pode ser dissolvido.',
      'Forças Armadas (art. 142): Marinha, Exército e Aeronáutica.',
      'Segurança Pública (art. 144): PF, PRF, PFF, polícias civis, militares e bombeiros; guardas municipais.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Estado de Defesa é o alarme para perigos em locais restritos. Estado de Sítio é o alarme para perigos gravíssimos em todo o país. Nos dois casos, o Presidente decreta, ouve os Conselhos e submete ao Congresso.',
      outroExemplo: 'Uma calamidade natural de grandes proporções em um Estado pode justificar Estado de Defesa (art. 136, caput). Uma comoção grave de repercussão nacional ou uma guerra justifica Estado de Sítio (art. 137).',
      compararConceitos: 'Defesa = brando. Sítio = grave. Defesa = 30 dias prorrogável uma vez. Sítio = 30 dias prorrogável sem limite. FFAA = defesa da Pátria. Segurança Pública = dever do Estado.',
      mostrarPegadinha: 'Cuidado: "Durante o Estado de Sítio, o Congresso pode ser dissolvido". ERRADO. Art. 138: o Congresso NÃO pode ser dissolvido durante o Estado de Sítio.',
      comoApareceEmConcurso: 'Cobrança de arts. 136 a 144.',
      fazerPergunta: {
        pergunta: 'Uma calamidade natural de grandes proporções em uma região específica pode justificar qual medida?',
        resposta: 'ESTADO DE DEFESA (art. 136) — desde que a medida seja restrita e determinada, com prazo de 30 dias prorrogável uma vez. Se o problema for nacional e gravíssimo, aí sim caberia Estado de Sítio.'
      }
    }
  },

  /* ============================================================
     DC-18 — Controle de Constitucionalidade
  ============================================================ */
  'DC-18': {
    id: 'L-DC-18',
    moduloId: 'DC-18',
    objetivo: 'Compreender o sistema de controle de constitucionalidade brasileiro: controle preventivo e repressivo, difuso e concentrado, político e judicial; ADI, ADC, ADPF, ADO; efeitos das decisões e conceitos fundamentais.',
    prerequisitos: ['DC-15'],

    introducao: 'O controle de constitucionalidade é o mecanismo que garante a supremacia da Constituição: leis e atos normativos que contrariem a CF são declarados inconstitucionais. O Brasil adota um sistema MISTO — combina controle difuso (via incidental) e concentrado (via ação direta).',

    explicacaoSimples: 'A Constituição é a lei maior. Se uma lei comum a contraria, ela é inconstitucional. Existem dois jeitos de verificar isso: quando um juiz, ao julgar um caso concreto, percebe a inconstitucionalidade (controle difuso) — ou quando o STF é provocado diretamente a analisar a lei (controle concentrado).',

    explicacaoTecnica: 'CONTROLE PREVENTIVO: antes de a lei entrar em vigor — feito pelo Legislativo (Comissão de Constituição e Justiça) e pelo Executivo (veto jurídico). CONTROLE REPRESSIVO: depois de a lei entrar em vigor — pode ser DIFUSO (incidental, por qualquer juiz, no caso concreto) ou CONCENTRADO (via ADI, ADC, ADPF, ADO, no STF). CONTROLE POLÍTICO: feito por órgãos não judiciais. CONTROLE JUDICIAL: feito pelo Judiciário. DIFUSO: qualquer juiz ou tribunal, ao julgar caso concreto; efeitos INTER PARTES. CONCENTRADO: STF, em ação própria; efeitos ERGA OMNES. ADI (ação direta de inconstitucionalidade): declara a inconstitucionalidade de lei ou ato normativo federal ou estadual. ADC (ação declaratória de constitucionalidade): declara a constitucionalidade de lei ou ato normativo federal. ADPF (arguição de descumprimento de preceito fundamental): cabe quando não houver outro meio eficaz; evita o descumprimento de preceito fundamental. ADO (ação direta de inconstitucionalidade por omissão): cabe para tornar efetiva norma constitucional em caso de omissão legislativa. Legitimados (art. 103): Presidente, Mesa do Senado, Mesa da Câmara, Mesa de Assembleia Legislativa, Governador, Procurador-Geral da República, Conselho Federal da OAB, partido político com representação no Congresso, confederação sindical ou entidade de classe de âmbito nacional. Efeitos: em regra, ERGA OMNES e VINCULANTE; a ADI pode ter efeito EX TUNC (retroativo) ou EX NUNC (não retroativo), conforme modulação de efeitos (art. 27 da Lei 9.868/1999).',

    exemplos: [
      'Controle preventivo: CCJ da Câmara rejeita projeto por inconstitucionalidade.',
      'Controle preventivo: Presidente veta projeto por inconstitucionalidade (veto jurídico).',
      'Controle difuso: juiz de primeira instância afasta lei inconstitucional no caso concreto.',
      'Controle concentrado: STF julga ADI sobre lei estadual.',
      'ADC: STF declara a constitucionalidade de lei federal.',
      'ADPF: cabe quando não há outro meio eficaz.',
      'ADO: STF reconhece omissão legislativa.'
    ],

    comparacoes: [
      { termoA: 'Controle difuso', termoB: 'Controle concentrado', diferenca: 'DIFUSO (incidental): qualquer juiz ou tribunal, em caso concreto; efeitos INTER PARTES; a decisão vale para as partes. CONCENTRADO (abstrato): só o STF, em ação própria; efeitos ERGA OMNES e VINCULANTE.' },
      { termoA: 'ADI', termoB: 'ADC', diferenca: 'ADI: declara a INCONSTITUCIONALIDADE de lei ou ato normativo. ADC: declara a CONSTITUCIONALIDADE de lei ou ato normativo FEDERAL. Ambas têm efeito vinculante e erga omnes.' },
      { termoA: 'ADI', termoB: 'ADPF', diferenca: 'ADI: cabe contra lei ou ato normativo federal ou estadual, independentemente de haver outro meio. ADPF: cabe quando NÃO houver outro meio eficaz; protege PRECEITOS FUNDAMENTAIS (não apenas a lei).' },
      { termoA: 'ADI', termoB: 'ADO', diferenca: 'ADI: cabe contra ato COMISSIVO (lei inconstitucional). ADO: cabe contra ato OMISSIVO (falta de lei que regulamente norma constitucional).' }
    ],

    aplicacaoEmConcurso: 'Cobrança das modalidades (preventivo/repressivo, difuso/concentrado), dos legitimados (art. 103), do cabimento de cada ação (ADI, ADC, ADPF, ADO) e dos efeitos das decisões. Frequente em concursos de Tribunais, MP e área jurídica.',

    pegadinhas: [
      'Confundir controle difuso (incidental, qualquer juiz) com concentrado (STF, ação própria).',
      'Achar que a ADI cabe apenas contra lei federal (cabe também contra lei estadual).',
      'Dizer que a ADC cabe contra lei estadual (só lei ou ato normativo FEDERAL).',
      'Confundir ADPF com ADI (ADPF é residual — só quando não houver outro meio eficaz).',
      'Achar que a ADO cabe contra lei existente (é para omissão).',
      'Dizer que a decisão em ADI é sempre EX TUNC. Pode ser modulada (art. 27 da Lei 9.868/1999).',
      'Esquecer que a decisão de mérito em ADI e ADC tem efeito VINCULANTE.'
    ],

    errosComuns: [
      'Decorar ações sem entender o cabimento de cada uma.',
      'Confundir efeitos da decisão em controle difuso (inter partes) com concentrado (erga omnes).',
      'Achar que todo legitimado do art. 103 tem pertinência temática (nem todos).'
    ],

    resumo: [
      'Controle preventivo: Legislativo (CCJ) e Executivo (veto jurídico).',
      'Controle repressivo: difuso (qualquer juiz, incidental, inter partes) ou concentrado (STF, ação própria, erga omnes).',
      'ADI: declara inconstitucionalidade de lei federal ou estadual.',
      'ADC: declara constitucionalidade de lei federal.',
      'ADPF: preceito fundamental, quando não houver outro meio eficaz.',
      'ADO: omissão legislativa.',
      'Legitimados (art. 103): Presidente, Mesas, Governador, PGR, OAB, partido, confederação, entidade de classe.',
      'Efeitos: erga omnes e vinculante (concentrado); inter partes (difuso).',
      'Modulação de efeitos: art. 27 da Lei 9.868/1999.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Há dois jeitos de verificar se uma lei contraria a Constituição: um juiz qualquer, ao julgar um caso, percebe a inconstitucionalidade (difuso); ou o STF é provocado diretamente a analisar a lei (concentrado). Cada caminho tem ferramentas próprias.',
      outroExemplo: 'Se o STF declara inconstitucional uma lei em ADI, a decisão vale para TODOS (erga omnes). Se um juiz de 1ª instância afasta uma lei no caso concreto, a decisão vale só para aquele processo (inter partes) — até que o STF se pronuncie.',
      compararConceitos: 'ADI = inconstitucionalidade. ADC = constitucionalidade. ADPF = preceito fundamental, residual. ADO = omissão. Difuso = inter partes. Concentrado = erga omnes.',
      mostrarPegadinha: 'Cuidado: "A ADI cabe apenas contra lei federal". ERRADO. A ADI cabe contra lei ou ato normativo FEDERAL ou ESTADUAL. Quem só admite lei federal é a ADC.',
      comoApareceEmConcurso: 'Cobrança de arts. 102 e 103, do cabimento das ações e dos efeitos.',
      fazerPergunta: {
        pergunta: 'Cabe ADPF para questionar lei municipal?',
        resposta: 'SIM. A ADPF (art. 102, §1º) cabe quando não houver outro meio eficaz de sanar lesão a preceito fundamental — abrange lei ou ato normativo municipal, estadual ou federal. É residual.'
      }
    }
  }

};
