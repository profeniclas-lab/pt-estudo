/* ============================================================
   AULAS — Módulos de prioridade CONDICIONAL
   Preenchidos: PT-13, PT-14, PT-15
   ============================================================ */

window.LESSONS_COMPLEMENTAR = {

  /* ============================================================
     PT-13 — Formação e Estrutura das Palavras
  ============================================================ */
  'PT-13': {
    id: 'L-PT-13',
    moduloId: 'PT-13',
    objetivo: 'Compreender a estrutura das palavras (radical, prefixo, sufixo, desinências, vogal temática) e os processos de formação (derivação e composição). Reconhecer famílias de palavras e os efeitos de sentido que prefixos e sufixos produzem.',
    prerequisitos: ['PT-05'],

    introducao: 'Formação de palavras é um conteúdo de prioridade condicional: só vale investir tempo quando o edital cobra explicitamente. Mas quando cai, é questão fácil de resolver para quem entende a estrutura. As bancas cobram: identificar o processo de formação (derivação x composição), reconhecer prefixos e sufixos e seus efeitos de sentido, e trabalhar com famílias de palavras.',

    explicacaoSimples: 'Pense na palavra como um Lego: há peças fixas (radical), peças que se encaixam antes (prefixo), peças que se encaixam depois (sufixo), e peças que indicam gênero, número e tempo (desinências). Combinando essas peças, você cria novas palavras a partir de uma base.',

    explicacaoTecnica: 'ESTRUTURA DAS PALAVRAS: RADICAL (morfema que carrega o significado básico — "pedr-" de pedra); PREFIXO (morfema antes do radical — "re-" em refazer); SUFIXO (morfema depois do radical — "-eiro" em pedreiro); DESINÊNCIAS (marcam gênero, número e tempo verbal — "-a" e "-s" em meninas, "-va" em estudava); VOGAL TEMÁTICA (liga o radical às desinências — "a" em estudar). FORMAÇÃO DE PALAVRAS: (1) DERIVAÇÃO: criação de nova palavra a partir de um radical. Tipos: PREFIXAL (re+fazer), SUFIXAL (pedra+eiro), PREFIXAL E SUFIXAL (des+leal+dade), REGRESSIVA (retirar sufixo — "combate" de combater), IMPRÓPRIA (mudança de classe sem alterar forma — "jantar" de verbo para substantivo), PARASSINTÉTICA (prefixo e sufixo ao mesmo tempo — "enterrar" = en + terra + ar). (2) COMPOSIÇÃO: união de dois ou mais radicais. Tipos: JUSTAPOSIÇÃO (passa+tempo), AGREGAÇÃO (planalto = plano + alto, com alteração). (3) HIBRIDISMO: junção de elementos de línguas diferentes (automóvel = grego + latim). (4) ONOMATOPEIA: reprodução de sons. (5) SIGLA E ABREVIAÇÃO. PREFIXOS DE ORIGEM GREGA E LATINA: anti- (contra), hiper- (excesso), hipo- (escassez), pré- (antes), pós- (depois), sub- (sob), super- (sobre), in-/im- (negação), des- (negação).',

    exemplos: [
      'Derivação prefixal: refazer, desleal, infeliz.',
      'Derivação sufixal: pedreiro, livraria, felizmente.',
      'Derivação prefixal e sufixal: deslealdade, infelizmente (prefixo e sufixo, mas independentes).',
      'Derivação parassintética: entardecer, amanhecer, esfriar (prefixo e sufixo dependentes).',
      'Derivação regressiva: combate (de combater), pesca (de pescar).',
      'Derivação imprópria: "O jantar está pronto" (verbo → substantivo).',
      'Composição por justaposição: passatempo, guarda-roupa.',
      'Composição por aglutinação: planalto (plano + alto), aguardente (água + ardente).',
      'Hibridismo: automóvel, televisão, burocracia.'
    ],

    comparacoes: [
      { termoA: 'Derivação prefixal e sufixal', termoB: 'Derivação parassintética', diferenca: 'PREFIXAL E SUFIXAL: o prefixo e o sufixo PODEM existir independentemente. Ex.: "deslealdade" (desleal + dade OU des + lealdade). PARASSINTÉTICA: prefixo e sufixo são DEPENDENTES — a palavra só existe com os dois juntos. Ex.: "entardecer" (não existe "entarde" nem "tardecer"). A diferença é o teste de retirada.' },
      { termoA: 'Derivação', termoB: 'Composição', diferenca: 'DERIVAÇÃO: cria palavra nova a partir de UM radical, com afixos. Ex.: pedra → pedreiro. COMPOSIÇÃO: une DOIS ou mais radicais. Ex.: passa + tempo = passatempo. Derivação usa afixos; composição une radicais.' },
      { termoA: 'Justaposição', termoB: 'Aglutinação', diferenca: 'JUSTAPOSIÇÃO: os radicais se unem SEM alteração fonética. Ex.: guarda-roupa, passatempo, girassol. AGLUTINAÇÃO: um dos radicais sofre alteração. Ex.: planalto (plano + alto), aguardente (água + ardente), pernalta (perna + alta).' },
      { termoA: 'Derivação regressiva', termoB: 'Derivação imprópria', diferenca: 'REGRESSIVA: retira-se parte da palavra (geralmente sufixo) para formar nova palavra. Ex.: combater → combate; pescar → pesca. IMPRÓPRIA: muda-se a classe gramatical SEM alterar a forma. Ex.: "jantar" (verbo → substantivo); "o belo" (adjetivo → substantivo).' }
    ],

    aplicacaoEmConcurso: 'Formação de palavras aparece em questões de: identificação do processo de formação, diferença entre derivação e composição, efeitos de sentido de prefixos e sufixos, famílias de palavras e ortografia. Conteúdo de prioridade variável — depende do edital.',

    pegadinhas: [
      'Confundir derivação prefixal e sufixal com parassintética — teste retirando um dos afixos.',
      'Trocar justaposição com aglutinação.',
      'Achar que "infelizmente" é parassintética — é prefixal e sufixal (existe "infeliz" e "felizmente").',
      'Confundir derivação regressiva com imprópria.',
      'Achar que toda palavra composta tem hífen — depende do Acordo Ortográfico.'
    ],

    errosComuns: [
      'Decorar listas de prefixos sem entender o efeito de sentido.',
      'Confundir os processos de derivação.',
      'Não aplicar o teste de retirada para distinguir prefixal-sufixal de parassintética.',
      'Ignorar a mudança de sentido dos prefixos (in- pode ser negação ou movimento para dentro).'
    ],

    resumo: [
      'Estrutura: radical + prefixo + sufixo + desinências + vogal temática.',
      'Derivação: prefixal, sufixal, prefixal e sufixal, regressiva, imprópria, parassintética.',
      'Composição: justaposição (sem alteração) e aglutinação (com alteração).',
      'Parassintética: prefixo e sufixo DEPENDENTES.',
      'Prefixo muda o sentido; sufixo muda o sentido e/ou a classe.',
      'Hibridismo: elementos de línguas diferentes.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Pense na palavra como uma "árvore genealógica". O radical é o tronco; os prefixos e sufixos são galhos. Derivação cria novos galhos a partir do tronco. Composição junta dois troncos diferentes.',
      outroExemplo: 'A palavra "infelizmente" tem três elementos: prefixo "in-" (negação), radical "feliz", sufixo "-mente" (modo). Como você pode dizer "infeliz" (sem o -mente) e "felizmente" (sem o in-), é derivação PREFIXAL E SUFIXAL. Já "entardecer" não pode perder nenhum elemento — é PARASSINTÉTICA.',
      compararConceitos: 'Derivação x composição. Prefixal x sufixal x parassintética. Justaposição x aglutinação. Regressiva x imprópria.',
      mostrarPegadinha: 'Cuidado: "amanhecer" e "entardecer" são PARASSINTÉTICAS (prefixo + radical + sufixo dependentes). Já "deslealdade" é PREFIXAL E SUFIXAL — existem "desleal" e "lealdade" isolados.',
      comoApareceEmConcurso: 'Cobrança variável conforme edital. Frequência média.',
      fazerPergunta: {
        pergunta: 'Como se classifica a formação da palavra "planalto" (plano + alto)?',
        resposta: 'COMPOSIÇÃO POR AGLUTINAÇÃO — os radicais "plano" e "alto" se uniram com alteração fonética (perda de letras). Se fosse "plano-alto" (com hífen e sem alteração), seria JUSTAPOSIÇÃO.'
      }
    }
  },

  /* ============================================================
     PT-14 — Fonética, Fonologia e Divisão Silábica
  ============================================================ */
  'PT-14': {
    id: 'L-PT-14',
    moduloId: 'PT-14',
    objetivo: 'Compreender os conceitos de fonema, letra, sílaba, encontros vocálicos e consonantais, dígrafos, divisão silábica e classificação quanto à tonicidade. Relacionar fonologia e acentuação.',
    prerequisitos: ['PT-04'],

    introducao: 'Fonética e fonologia são conteúdos de prioridade variável: só valem investimento quando o edital cobra explicitamente. Mas quando caem, são questões diretas, fáceis de resolver para quem entende o básico. Também ajudam a entender ACENTUAÇÃO (PT-04), pois as regras de acento dependem da tonicidade.',

    explicacaoSimples: 'Fonema é o SOM; letra é a REPRESENTAÇÃO. Uma palavra pode ter mais letras que fonemas (ex.: "hora" tem 4 letras e 3 fonemas, pois o "h" é mudo). Sílaba é cada "pedaço" que pronunciamos. Encontros vocálicos e consonantais são combinações de sons. Dígrafos são duas letras com UM som.',

    explicacaoTecnica: 'FONEMA: unidade mínima sonora. LETRA: representação escrita. Nem sempre há correspondência: "casa" tem 4 letras e 4 fonemas; "hora" tem 4 letras e 3 fonemas (h é mudo); "táxi" tem 4 letras e 5 fonemas (x = ks). SÍLABA: cada unidade fonética com uma vogal. CLASSIFICAÇÃO QUANTO À TONICIDADE: OXÍTONA (última sílaba forte), PAROXÍTONA (penúltima), PROPAROXÍTONA (antepenúltima). ENCONTROS VOCÁLICOS: DITONGO (duas vogais na mesma sílaba — pai, mãe); TRITONGO (três vogais — Uruguai); HIATO (duas vogais em sílabas separadas — sa-í-da). ENCONTROS CONSONANTAIS: dois sons consonantais na mesma sílaba (cra-vo, pla-no) ou em sílabas diferentes (ad-vo-ga-do). DÍGRAFOS: duas letras com UM som — ch, lh, nh, rr, ss, sc, sç, xc, gu, qu, am, em, im, om, um (antes de consoante).',

    exemplos: [
      'Letras x fonemas: "hora" (4 letras, 3 fonemas); "táxi" (4 letras, 5 fonemas); "guerra" (6 letras, 4 fonemas).',
      'Ditongo: pai, mãe, série, tranquilo.',
      'Tritongo: Uruguai, saguão, quão.',
      'Hiato: saída, baú, juízo, saúde.',
      'Dígrafo: chave (ch), palha (lh), sonho (nh), carro (rr), passo (ss).',
      'Divisão silábica: ca-sa, li-vro, cons-tru-ção, ad-vo-ga-do.',
      'Oxítona: café, cadáver, jiló.',
      'Paroxítona: fácil, tórax, caderno.',
      'Proparoxítona: árvore, médico, lâmpada.'
    ],

    comparacoes: [
      { termoA: 'Fonema', termoB: 'Letra', diferenca: 'FONEMA: som. LETRA: representação gráfica. Nem sempre coincidem. Ex.: "hora" tem 4 letras, 3 fonemas; "guerra" tem 6 letras, 4 fonemas ("gu" tem som de "g"; "rr" tem som de "r").' },
      { termoA: 'Ditongo', termoB: 'Hiato', diferenca: 'DITONGO: duas vogais na MESMA sílaba. Ex.: "pai" (pai), "série" (sé-rie). HIATO: duas vogais em sílabas SEPARADAS. Ex.: "saída" (sa-í-da), "baú" (ba-ú). A diferença está na sílaba em que caem.' },
      { termoA: 'Encontro consonantal', termoB: 'Dígrafo', diferenca: 'ENCONTRO CONSONANTAL: dois sons consonantais distintos, ambos pronunciados. Ex.: "cravo" (c-r), "plano" (p-l). DÍGRAFO: duas letras com UM som. Ex.: "chave" (ch = som único), "palha" (lh = som único).' },
      { termoA: 'Oxítona', termoB: 'Paroxítona', diferenca: 'OXÍTONA: a última sílaba é a tônica. Ex.: café, jiló. PAROXÍTONA: a penúltima sílaba é tônica. Ex.: fácil, caderno. PROPAROXÍTONA: a antepenúltima. Ex.: árvore. Saber a tonicidade é essencial para aplicar as regras de acentuação.' }
    ],

    aplicacaoEmConcurso: 'Fonética e fonologia aparecem em questões de: contagem de fonemas, identificação de dígrafos e encontros vocálicos/consonantais, divisão silábica e classificação de palavras quanto à tonicidade. Também ajuda a entender as regras de acentuação (PT-04). Conteúdo de prioridade variável.',

    pegadinhas: [
      'Contar letras em vez de fonemas. Ex.: "guerra" tem 6 letras, mas 4 fonemas.',
      'Confundir encontro consonantal com dígrafo.',
      'Confundir ditongo com hiato.',
      'Errar a divisão silábica de "con-stru-ção" ou "ad-vo-ga-do".',
      'Achar que toda palavra tem uma vogal em cada sílaba — na divisão silábica, sim; no ditongo, não.',
      'Confundir sílaba tônica com sílaba com acento gráfico — nem toda tônica é acentuada.'
    ],

    errosComuns: [
      'Decorar listas sem entender os conceitos.',
      'Contar letras em vez de fonemas.',
      'Confundir dígrafo com encontro consonantal.',
      'Não aplicar a tonicidade às regras de acentuação.'
    ],

    resumo: [
      'Fonema é som; letra é representação. Nem sempre coincidem.',
      'Ditongo: 2 vogais na mesma sílaba. Tritongo: 3. Hiato: vogais separadas.',
      'Encontro consonantal: 2 sons distintos. Dígrafo: 2 letras, 1 som.',
      'Classificação quanto à tonicidade: oxítona, paroxítona, proparoxítona.',
      'Nem toda tônica é acentuada — depende das regras.',
      'Saber fonologia ajuda a entender acentuação.'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Fonema é o SOM que sai da boca; letra é o que a gente escreve. "Hora": escrevemos 4 letras (h-o-r-a), mas pronunciamos 3 sons (o-r-a). Entender isso evita erro em questões de contagem de fonemas.',
      outroExemplo: 'Pense em "guerra": 6 letras, 4 fonemas (gu-e-rr-a). O "gu" tem som de "g"; o "rr" tem som de "r" (não são dois erres separados). Esses são dígrafos — duas letras, um som.',
      compararConceitos: 'Fonema x letra. Ditongo x hiato. Encontro consonantal x dígrafo. Oxítona x paroxítona x proparoxítona.',
      mostrarPegadinha: 'Cuidado: "cravo" tem encontro consonantal (c-r), pois os dois sons são pronunciados. Já "chave" tem dígrafo (ch), pois há um único som. Não confundir!',
      comoApareceEmConcurso: 'Cobrança variável conforme edital. Frequência média.',
      fazerPergunta: {
        pergunta: 'Quantos fonemas tem a palavra "táxi"?',
        respostA: '5 fonemas (t-á-k-s-i). As 4 letras "t-á-x-i" correspondem a 5 fonemas, pois o "x" tem som de "ks". É um caso clássico de divergência entre letra e fonema.'
      }
    }
  },

  /* ============================================================
     PT-15 — Redação Oficial e Comunicação Administrativa
  ============================================================ */
  'PT-15': {
    id: 'L-PT-15',
    moduloId: 'PT-15',
    objetivo: 'Compreender os princípios da redação oficial (clareza, concisão, objetividade, impessoalidade, formalidade), a adequação da linguagem ao destinatário e à finalidade, e a estrutura e finalidade dos documentos oficiais (ofício, memorando, e-mail profissional, comunicado, requerimento). Conhecer o Manual de Redação da Presidência da República quando previsto no edital.',
    prerequisitos: ['PT-01', 'PT-02'],

    introducao: 'Redação oficial é um conteúdo muito cobrado em concursos federais e, cada vez mais, em estaduais. É também a base da prova discursiva. Entender os princípios (clareza, concisão, impessoalidade) e a estrutura dos documentos oficiais faz diferença tanto nas questões objetivas quanto na redação.',

    explicacaoSimples: 'Imagine que você trabalha em um órgão público e precisa escrever para outro órgão. A linguagem não é a mesma de uma conversa informal — precisa ser clara, objetiva, formal e impessoal. E cada tipo de documento tem uma estrutura: ofício, memorando, e-mail, comunicado, requerimento. Cada um tem sua finalidade.',

    explicacaoTecnica: 'PRINCÍPIOS DA REDAÇÃO OFICIAL: (1) CLAREZA: o texto deve ser compreendido sem esforço. (2) CONCISÃO: dizer o máximo com o mínimo de palavras, sem perder informação. (3) OBJETIVIDADE: ir direto ao ponto, sem rodeios. (4) IMPESSOALIDADE: o texto é do ÓRGÃO, não da pessoa — não há marcas de subjetividade. (5) FORMALIDADE: uso da norma padrão e de tratamento adequado. (6) USO DO PADRÃO CULTO. CARACTERÍSTICAS: uso de "Vossa Excelência" (autoridades superiores), "Vossa Senhoria" (demais autoridades e particulares), ausência de gírias e informalidades, tratamento uniforme. DOCUMENTOS: OFÍCIO (comunicação entre órgãos públicos ou destes para particulares, geralmente em papel timbrado); MEMORANDO (comunicação interna entre unidades administrativas do mesmo órgão); E-MAIL PROFISSIONAL (comunicação eletrônica formal); COMUNICADO (informação oficial); REQUERIMENTO (pedido formal do cidadão ao poder público). ESTRUTURA DO PADRÃO OFÍCIO (Manual da Presidência): tipo e número, local e data, destinatário, assunto, vocativo, texto, fecho ("Atenciosamente" ou "Respeitosamente"), assinatura, identificação. Manual de Redação da Presidência da República (3ª edição, 2018) — referência para concursos federais.',

    exemplos: [
      'Clareza: "Informamos que o prazo para entrega dos documentos é 31/12."',
      'Concisão: dizer o essencial em poucas palavras.',
      'Impessoalidade: "Este órgão decidiu..." em vez de "Eu decidi...".',
      'Formalidade: uso de "Vossa Excelência" para altas autoridades.',
      'Ofício: comunicação entre órgãos — "Ofício nº 123/2025 — DAF/ME".',
      'Memorando: comunicação interna — "Memorando nº 45/2025 — CGP".',
      'Requerimento: "Eu, [nome], venho requerer..." — pedido formal.',
      'Fecho: "Atenciosamente" (para autoridades de mesma hierarquia ou inferiores) e "Respeitosamente" (para autoridades superiores).'
    ],

    comparacoes: [
      { termoA: 'Ofício', termoB: 'Memorando', diferenca: 'OFÍCIO: comunicação EXTERNA entre órgãos públicos diferentes, ou entre órgão e particulares. Usa papel timbrado. Ex.: Secretaria de Saúde para Secretaria de Educação. MEMORANDO: comunicação INTERNA entre unidades do MESMO órgão. Ex.: Coordenadoria de RH para o Gabinete. O memorando é mais simples; o ofício, mais solene.' },
      { termoA: 'Clareza', termoB: 'Concisão', diferenca: 'CLAREZA: o texto deve ser compreendido sem esforço — frases bem estruturadas, sem ambiguidades. CONCISÃO: dizer o máximo com o mínimo de palavras — sem perder informação essencial. Um texto conciso pode ser obscuro se mal organizado; um texto claro pode ser prolixo. As duas se complementam.' },
      { termoA: 'Impessoalidade', termoB: 'Formalidade', diferenca: 'IMPESSOALIDADE: o texto é do ÓRGÃO, não da pessoa. Não há marcas de subjetividade ("eu acho", "na minha opinião"). FORMALIDADE: uso do PADRÃO CULTO, sem gírias ou informalidades, com tratamento adequado. A impessoalidade é sobre a "voz"; a formalidade, sobre o "registro".' },
      { termoA: 'Manual de Redação da Presidência', termoB: 'Manuais estaduais', diferenca: 'MANUAL DA PRESIDÊNCIA (3ª edição, 2018): referência para concursos federais. Define o padrão ofício. MANUAIS ESTADUAIS: cada estado pode ter o seu, mas geralmente seguem o padrão federal. Para concursos, o Manual da Presidência é a base.' }
    ],

    aplicacaoEmConcurso: 'Redação oficial é cobrada em: questões objetivas sobre princípios e estrutura de documentos, questões discursivas (a peça prática pode ser um ofício, um memorando ou um e-mail), e questões de interpretação (identificar erro em uma comunicação oficial). A Lei 13.460/2017 (Carta de Serviços ao Usuário) reforça o uso da linguagem clara e acessível. É conteúdo de prioridade condicional, mas muito importante quando o edital exige.',

    pegadinhas: [
      'Usar "Vossa Excelência" para qualquer autoridade. Só para altas autoridades (Presidente, Ministros, Deputados, Senadores, Governadores, Juízes).',
      'Confundir ofício com memorando.',
      'Usar linguagem informal ("Oi, tudo bem?") em documento oficial.',
      'Escrever em primeira pessoa ("Eu acho que..."). A redação oficial é impessoal.',
      'Colocar fecho inadequado: "Respeitosamente" só para autoridades superiores.',
      'Esquecer elementos essenciais da estrutura do padrão ofício.',
      'Confundir abreviações: "V. Exa." x "V.Sa."'
    ],

    errosComuns: [
      'Achar que redação oficial é "linguagem difícil" — é o contrário: clareza.',
      'Usar jargões técnicos sem necessidade.',
      'Confundir impessoalidade com frieza — o texto pode ser cordial e impessoal.',
      'Não conhecer a estrutura do padrão ofício.'
    ],

    resumo: [
      'Princípios: clareza, concisão, objetividade, impessoalidade, formalidade, padrão culto.',
      'Ofício: comunicação externa. Memorando: comunicação interna.',
      'E-mail profissional: comunicação eletrônica formal.',
      'Requerimento: pedido formal do cidadão ao poder público.',
      'Tratamento: Vossa Excelência (altas autoridades), Vossa Senhoria (demais).',
      'Fecho: "Atenciosamente" (mesma hierarquia/inferiores) e "Respeitosamente" (superiores).',
      'Base: Manual de Redação da Presidência da República (3ª ed., 2018).'
    ],

    modoProfessor: {
      explicarMaisSimples: 'Redação oficial é o "jeito profissional" de escrever no serviço público. Sem gírias, sem "eu acho", com clareza e objetividade. Cada documento tem uma função: ofício é para fora; memorando é para dentro; requerimento é o pedido do cidadão.',
      outroExemplo: 'Um servidor do Ministério da Saúde precisa pedir informações ao Ministério da Educação. Escreve um OFÍCIO. Já o coordenador de RH pede algo ao gabinete do próprio ministério por MEMORANDO. Se um cidadão quer solicitar isenção de taxa em concurso, faz um REQUERIMENTO.',
      compararConceitos: 'Ofício x memorando. Clareza x concisão. Impessoalidade x formalidade. Vossa Excelência x Vossa Senhoria.',
      mostrarPegadinha: 'Cuidado: "Oi, gostaria de saber..." em documento oficial — ERRADO. O texto oficial começa com vocativo formal ("Senhor Secretário,") e usa "solicito informações..." ou "informo que...". Linguagem formal e impessoal.',
      comoApareceEmConcurso: 'Questões objetivas e discursivas. Alta frequência em concursos federais.',
      fazerPergunta: {
        pergunta: 'Qual a diferença entre ofício e memorando?',
        resposta: 'OFÍCIO: comunicação EXTERNA, entre órgãos diferentes ou entre órgão e particular. Mais solene, em papel timbrado. MEMORANDO: comunicação INTERNA, entre unidades do mesmo órgão. Mais simples e direto. Ex.: Ofício da Secretaria de Saúde ao Ministério Público; Memorando da Coordenadoria de RH ao Gabinete.'
      }
    }
  }

};
