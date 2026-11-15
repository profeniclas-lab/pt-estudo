/* ============================================================
   FLASHCARDS — Português e Redação Oficial
   BLOCO 1 — LET + Gramática parte 1 (POR-01 a POR-11)
   11 módulos × 6 cartões = 66 cartões
   Próximos blocos: POR-12 a RED-23 (Bloco 2) + RED-24 e POR-08 (Bloco 3)
   ============================================================ */

window.FLASHCARDS = [

  /* ============================================================
     POR-01 — Leitura, compreensão e interpretação de textos
  ============================================================ */
  {
    id: 'F-POR-01-001',
    moduloId: 'POR-01', topicoId: 'POR-01',
    frente: 'Qual a diferença entre COMPREENSÃO e INTERPRETAÇÃO de textos?',
    verso: 'COMPREENSÃO: apreensão do que está ESCRITO (informação literal, explícita). INTERPRETAÇÃO: apreensão do que está IMPLÍCITO (deduções autorizadas pelo texto — pressupostos, subentendidos, inferências). No enunciado: "de acordo com o texto" (compreensão) x "infere-se/depreende-se" (interpretação).',
    dificuldade: 1, tags: ['compreensão', 'interpretação']
  },
  {
    id: 'F-POR-01-002',
    moduloId: 'POR-01', topicoId: 'POR-01',
    frente: 'Qual a diferença entre TEMA e IDEIA CENTRAL?',
    verso: 'TEMA: o ASSUNTO do texto — do que se fala. IDEIA CENTRAL (tese): o que se DIZ sobre o tema — posição defendida. Ex.: tema = "inteligência artificial"; ideia central = "a IA deve ser regulada para proteger direitos".',
    dificuldade: 2, tags: ['tema', 'ideia central']
  },
  {
    id: 'F-POR-01-003',
    moduloId: 'POR-01', topicoId: 'POR-01',
    frente: 'Qual a diferença entre PRESSUPOSTO e SUBENTENDIDO?',
    verso: 'PRESSUPOSTO: implícito marcado LINGUISTICAMENTE por palavra/expressão ("parou de", "voltou a", "ainda"). SUBENTENDIDO: implícito deduzido do CONTEXTO, sem marca lexical específica (insinuação, ironia, entrelinha).',
    dificuldade: 3, tags: ['pressuposto', 'subentendido']
  },
  {
    id: 'F-POR-01-004',
    moduloId: 'POR-01', topicoId: 'POR-01',
    frente: 'Qual a diferença entre INFERÊNCIA AUTORIZADA e EXTRAPOLAÇÃO?',
    verso: 'INFERÊNCIA: conclusão que o texto PERMITE (há base textual). EXTRAPOLAÇÃO: conclusão que o texto NÃO permite (vai além do que está escrito). A banca pune a extrapolação como "informação não contida no texto" — mesmo que seja verdadeira no mundo real.',
    dificuldade: 3, tags: ['inferência', 'extrapolação']
  },
  {
    id: 'F-POR-01-005',
    moduloId: 'POR-01', topicoId: 'POR-01',
    frente: 'Qual a diferença entre informação EXPLÍCITA e IMPLÍCITA?',
    verso: 'EXPLÍCITA: está literalmente escrita, dispensando dedução. IMPLÍCITA: não está escrita, mas é autorizada pelo texto (pressupostos, subentendidos, inferências). Implícito NÃO é opinião do leitor — é conclusão sustentada pelas marcas textuais.',
    dificuldade: 2, tags: ['explícita', 'implícita']
  },
  {
    id: 'F-POR-01-006',
    moduloId: 'POR-01', topicoId: 'POR-01',
    frente: 'Qual a diferença entre TESE e ARGUMENTO?',
    verso: 'TESE: ideia central defendida (o QUE se defende). ARGUMENTO: razão que sustenta a tese (POR QUE se defende). Ex.: tese = "a transparência exige linguagem acessível"; argumento = "dados abertos sem contexto não informam o cidadão".',
    dificuldade: 2, tags: ['tese', 'argumento']
  },

  /* ============================================================
     POR-02 — Tipologia textual e gêneros textuais
  ============================================================ */
  {
    id: 'F-POR-02-001',
    moduloId: 'POR-02', topicoId: 'POR-02',
    frente: 'Qual a diferença entre TIPO TEXTUAL e GÊNERO TEXTUAL?',
    verso: 'TIPO: estrutura linguística (narração, descrição, exposição, argumentação, injunção) — responde ao "COMO". GÊNERO: forma social estabilizada (ofício, crônica, editorial, reportagem) — responde ao "ONDE circula e com qual finalidade". Um mesmo gênero pode combinar vários tipos.',
    dificuldade: 2, tags: ['tipo', 'gênero']
  },
  {
    id: 'F-POR-02-002',
    moduloId: 'POR-02', topicoId: 'POR-02',
    frente: 'Qual a diferença entre NARRAÇÃO e DESCRIÇÃO?',
    verso: 'NARRAÇÃO: fatos em SUCESSÃO (tempo, causa, transformação) — "chegou, protocolou, saiu". DESCRIÇÃO: retrato de um ESTADO (seres, objetos, cenas — sem transformação obrigatória) — "a sala é ampla, com paredes brancas". A narração avança; a descrição pausa.',
    dificuldade: 1, tags: ['narração', 'descrição']
  },
  {
    id: 'F-POR-02-003',
    moduloId: 'POR-02', topicoId: 'POR-02',
    frente: 'Qual a diferença entre DISSERTAÇÃO EXPOSITIVA e ARGUMENTATIVA?',
    verso: 'EXPOSITIVA: apresenta, explica, informa — SEM defender posição (verbeta, resumo, relatório descritivo). ARGUMENTATIVA: DEFENDE uma TESE com argumentos e conclusão (editorial, artigo de opinião). A expositiva não "toma partido"; a argumentativa, sim.',
    dificuldade: 2, tags: ['expositiva', 'argumentativa']
  },
  {
    id: 'F-POR-02-004',
    moduloId: 'POR-02', topicoId: 'POR-02',
    frente: 'O que caracteriza o tipo INJUNTIVO (ou instrucional)?',
    verso: 'Tipo que ORIENTA COMO FAZER algo — usa verbos no imperativo e sequência de passos ("Preencha, anexe, protocole"). Típico de manuais, receitas, bulas, regulamentos, tutoriais. Não confundir com exposição (informa) nem argumentação (defende).',
    dificuldade: 1, tags: ['injunção', 'instrucional']
  },
  {
    id: 'F-POR-02-005',
    moduloId: 'POR-02', topicoId: 'POR-02',
    frente: 'O que é a FUNÇÃO SOCIAL de um gênero textual?',
    verso: 'É a finalidade comunicativa que justifica a existência do gênero: ofício (comunicação institucional), crônica (jornal, reflexão sobre o cotidiano), editorial (posição do veículo), receita (orientar o preparo), bula (instruir sobre o medicamento). A escolha do gênero depende do propósito.',
    dificuldade: 2, tags: ['função social', 'gênero']
  },
  {
    id: 'F-POR-02-006',
    moduloId: 'POR-02', topicoId: 'POR-02',
    frente: 'Um gênero pode combinar vários tipos textuais? Dê um exemplo.',
    verso: 'SIM. Tipos e gêneros não são exclusivos entre si — a classificação é pela PREDOMINÂNCIA. Ex.: um relatório administrativo combina descrição (o que foi encontrado), exposição (explicação dos fatos) e, eventualmente, argumentação (recomendação). Uma crônica pode narrar, descrever e argumentar no mesmo texto.',
    dificuldade: 3, tags: ['combinação', 'predominância']
  },

  /* ============================================================
     POR-03 — Coesão e coerência textual
  ============================================================ */
  {
    id: 'F-POR-03-001',
    moduloId: 'POR-03', topicoId: 'POR-03',
    frente: 'Qual a diferença entre COESÃO e COERÊNCIA?',
    verso: 'COESÃO: ligação FORMAL entre as partes (pronomes, conectivos, substituições, retomadas). COERÊNCIA: ligação de SENTIDO (o texto faz sentido global e local). Um texto pode ser coeso e incoerente: "Estudou muito, portanto foi reprovado" — o conectivo liga (coesão), mas a relação lógica está errada (incoerência).',
    dificuldade: 2, tags: ['coesão', 'coerência']
  },
  {
    id: 'F-POR-03-002',
    moduloId: 'POR-03', topicoId: 'POR-03',
    frente: 'Qual a diferença entre ANÁFORA e CATÁFORA?',
    verso: 'ANÁFORA: retoma termo JÁ DITO — "O servidor chegou. ELE estava atrasado". CATÁFORA: ANTECIPA termo que VIRÁ — "Era ISTO o que importava: o prazo". A anáfora olha para trás; a catáfora, para frente.',
    dificuldade: 2, tags: ['anáfora', 'catáfora']
  },
  {
    id: 'F-POR-03-003',
    moduloId: 'POR-03', topicoId: 'POR-03',
    frente: 'Qual a diferença entre COESÃO REFERENCIAL e COESÃO SEQUENCIAL?',
    verso: 'REFERENCIAL: retomada/antecipação de termos (anáfora, catáfora, pronomes, substituições lexicais). SEQUENCIAL: ligação entre orações, períodos e parágrafos por CONECTIVOS (conjunções, locuções, advérbios). A primeira mantém o "fio" dos referentes; a segunda, a progressão lógica.',
    dificuldade: 2, tags: ['referencial', 'sequencial']
  },
  {
    id: 'F-POR-03-004',
    moduloId: 'POR-03', topicoId: 'POR-03',
    frente: 'Quais são os principais valores semânticos dos conectivos?',
    verso: 'ADIÇÃO (e, além disso), OPOSIÇÃO (mas, porém, contudo), CAUSA (porque, pois, já que), CONSEQUÊNCIA (portanto, assim, de modo que), CONCESSÃO (embora, ainda que, mesmo que), CONDIÇÃO (se, caso, desde que), FINALIDADE (para que, a fim de que), CONCLUSÃO (logo, portanto, assim), EXPLICAÇÃO (pois, porque).',
    dificuldade: 2, tags: ['conectivos', 'valores semânticos']
  },
  {
    id: 'F-POR-03-005',
    moduloId: 'POR-03', topicoId: 'POR-03',
    frente: 'Qual a diferença entre CAUSA, CONSEQUÊNCIA, CONCESSÃO e FINALIDADE?',
    verso: 'CAUSA: razão do fato — "porque". CONSEQUÊNCIA: efeito do fato — "portanto". CONCESSÃO: admite o fato contrário e o supera — "embora". FINALIDADE: intenção, objetivo — "para que". Ex.: "Não veio PORQUE adoeceu" (causa) x "Adoeceu, PORTANTO não veio" (consequência) x "EMBORA doente, veio" (concessão) x "Veio PARA QUE todos o vissem" (finalidade).',
    dificuldade: 3, tags: ['causa', 'consequência', 'concessão', 'finalidade']
  },
  {
    id: 'F-POR-03-006',
    moduloId: 'POR-03', topicoId: 'POR-03',
    frente: 'O que é PROGRESSÃO TEMÁTICA?',
    verso: 'É o avanço do texto: cada parágrafo/frase deve acrescentar informação nova sem perder o fio do tema. Progressão NÃO é repetição (ficar no mesmo) nem salto (mudar de assunto). Um texto sem progressão é redundante; um texto com saltos é incoerente.',
    dificuldade: 3, tags: ['progressão', 'tema']
  },

  /* ============================================================
     POR-04 — Semântica, significação e relações entre palavras
  ============================================================ */
  {
    id: 'F-POR-04-001',
    moduloId: 'POR-04', topicoId: 'POR-04',
    frente: 'Qual a diferença entre DENOTAÇÃO e CONOTAÇÃO?',
    verso: 'DENOTAÇÃO: sentido LITERAL, dicionarizado, objetivo — "A faca corta o papel". CONOTAÇÃO: sentido FIGURADO, subjetivo, dependente do contexto — "Ele é uma faca de dois gumes" (perigoso). A mesma palavra pode ter as duas acepções, conforme o uso.',
    dificuldade: 1, tags: ['denotação', 'conotação']
  },
  {
    id: 'F-POR-04-002',
    moduloId: 'POR-04', topicoId: 'POR-04',
    frente: 'Qual a diferença entre SINONÍMIA e PARONÍMIA?',
    verso: 'SINONÍMIA: sentido próximo ("casa" e "moradia"). PARONÍMIA: forma parecida, sentido DIFERENTE ("emergir" = subir x "imergir" = afundar; "eminente" = ilustre x "iminente" = que está para acontecer). Parônimos são armadilha clássica de prova.',
    dificuldade: 2, tags: ['sinonímia', 'paronímia']
  },
  {
    id: 'F-POR-04-003',
    moduloId: 'POR-04', topicoId: 'POR-04',
    frente: 'Qual a diferença entre POLISSEMIA e HOMONÍMIA?',
    verso: 'POLISSEMIA: uma palavra com vários sentidos RELACIONADOS ("banco" = assento x instituição financeira — o segundo derivou do primeiro). HOMONÍMIA: forma igual, sentidos NÃO relacionados ("cela" prisão x "sela" arreio). A primeira tem relação; a segunda, coincidência.',
    dificuldade: 3, tags: ['polissemia', 'homonímia']
  },
  {
    id: 'F-POR-04-004',
    moduloId: 'POR-04', topicoId: 'POR-04',
    frente: 'Qual a diferença entre HIPERÔNIMO e HIPÔNIMO?',
    verso: 'HIPERÔNIMO: termo GERAL que engloba outros ("flor", "veículo"). HIPÔNIMO: termo ESPECÍFICO do conjunto ("rosa", "carro"). Relação gênero-espécie — útil para substituição coesiva (evitar repetição, usar o geral quando o específico já foi dito).',
    dificuldade: 2, tags: ['hiperônimo', 'hipônimo']
  },
  {
    id: 'F-POR-04-005',
    moduloId: 'POR-04', topicoId: 'POR-04',
    frente: 'O que é AMBIGUIDADE e por que ela é um problema na redação?',
    verso: 'AMBIGUIDADE: duplo sentido involuntário. Pode ser LEXICAL (palavra polissêmica — "Ele estava com o banco") ou ESTRUTURAL (construção da frase — "O guarda viu o ladrão com o binóculo" — quem tinha o binóculo?). Na Redação Oficial, a ambiguidade compromete a clareza e deve ser corrigida.',
    dificuldade: 2, tags: ['ambiguidade', 'clareza']
  },
  {
    id: 'F-POR-04-006',
    moduloId: 'POR-04', topicoId: 'POR-04',
    frente: 'O que é um SINÔNIMO CONTEXTUAL?',
    verso: 'É o sinônimo adequado ao CONTEXTO — não basta ser dicionarizado como sinônimo; precisa preservar o sentido no uso. Ex.: "acolhido" pode ser substituído por "aceito" em "parecer acolhido", mas não por "recebido" em todos os contextos. O contexto define o sinônimo correto.',
    dificuldade: 3, tags: ['sinônimo', 'contexto']
  },

  /* ============================================================
     POR-05 — Figuras de linguagem e funções da linguagem
  ============================================================ */
  {
    id: 'F-POR-05-001',
    moduloId: 'POR-05', topicoId: 'POR-05',
    frente: 'Qual a diferença entre METÁFORA e COMPARAÇÃO?',
    verso: 'METÁFORA: comparação IMPLÍCITA, sem conectivo — "Ele é um leão". COMPARAÇÃO: EXPLÍCITA, com "como", "tal qual" — "Ele é forte como um leão". A presença/ausência do conectivo comparativo é a pista.',
    dificuldade: 1, tags: ['metáfora', 'comparação']
  },
  {
    id: 'F-POR-05-002',
    moduloId: 'POR-05', topicoId: 'POR-05',
    frente: 'Qual a diferença entre ANTÍTESE e PARADOXO?',
    verso: 'ANTÍTESE: oposição de ideias em termos distintos — "É doce e é tirano". PARADOXO: ideias contraditórias que se completam numa MESMA expressão — "silêncio ensurdecedor". A antítese justapõe; o paradoxo une o contraditório.',
    dificuldade: 3, tags: ['antítese', 'paradoxo']
  },
  {
    id: 'F-POR-05-003',
    moduloId: 'POR-05', topicoId: 'POR-05',
    frente: 'Qual a diferença entre IRONIA e EUFEMISMO?',
    verso: 'IRONIA: dizer o CONTRÁRIO do que se quer significar, geralmente com carga crítica — "Que belo serviço!" para algo malfeito. EUFEMISMO: SUAVIZAR expressão desagradável — "ele nos deixou" por "morreu". A ironia ataca; o eufemismo amortece.',
    dificuldade: 2, tags: ['ironia', 'eufemismo']
  },
  {
    id: 'F-POR-05-004',
    moduloId: 'POR-05', topicoId: 'POR-05',
    frente: 'Quais são as seis funções da linguagem e os elementos que cada uma enfatiza?',
    verso: 'REFERENCIAL: referente (informação objetiva). EMOTIVA: emissor (1ª pessoa, subjetividade). CONATIVA: receptor (imperativo, vocativo). FÁTICA: canal (testar comunicação: "Alô?", "Entendeu?"). METALINGUÍSTICA: código (linguagem falando de si: dicionário, gramática). POÉTICA: mensagem (forma elaborada, sonoridade, imagens).',
    dificuldade: 2, tags: ['funções da linguagem']
  },
  {
    id: 'F-POR-05-005',
    moduloId: 'POR-05', topicoId: 'POR-05',
    frente: 'Quais são os elementos da comunicação?',
    verso: 'EMISSOR (quem envia), CODIFICAÇÃO (transformar ideia em mensagem), MENSAGEM (conteúdo), CANAL (meio), DECODIFICAÇÃO (interpretação), RECEPTOR (quem recebe), FEEDBACK (retorno), RUÍDO (interferência). Cada função da linguagem enfatiza um desses elementos.',
    dificuldade: 2, tags: ['elementos da comunicação']
  },
  {
    id: 'F-POR-05-006',
    moduloId: 'POR-05', topicoId: 'POR-05',
    frente: 'Qual a diferença entre FUNÇÃO CONATIVA e FUNÇÃO EMOTIVA?',
    verso: 'CONATIVA (apelativa): foco no RECEPTOR — age sobre ele (imperativo, vocativo: "Compre!", "Vote em..."). EMOTIVA (expressiva): foco no EMISSOR — expressa o eu (1ª pessoa, exclamações: "Eu sinto", "Ah!"). A conativa age no outro; a emotiva expressa o eu.',
    dificuldade: 2, tags: ['conativa', 'emotiva']
  },

  /* ============================================================
     POR-06 — Fonética, fonologia e ortografia
  ============================================================ */
  {
    id: 'F-POR-06-001',
    moduloId: 'POR-06', topicoId: 'POR-06',
    frente: 'Qual a diferença entre FONEMA e LETRA?',
    verso: 'FONEMA: som produzido (unidade sonora). LETRA: símbolo gráfico. Não há correspondência exata: "táxi" tem 5 letras e 6 fonemas; "guerra" tem 6 letras e 5 fonemas; "chave" tem 5 letras e 4 fonemas (CH = 1 som). Dígrafos geram diferença.',
    dificuldade: 1, tags: ['fonema', 'letra']
  },
  {
    id: 'F-POR-06-002',
    moduloId: 'POR-06', topicoId: 'POR-06',
    frente: 'Qual a diferença entre DÍGRAFO e ENCONTRO CONSONANTAL?',
    verso: 'DÍGRAFO: duas letras representam UM ÚNICO fonema — CH, LH, NH, RR, SS, SC, SÇ, XC, GU, QU. ENCONTRO CONSONANTAL: duas consoantes pronunciadas separadamente — PR, PL, BR, BL, GR, TR. Ex.: "chave" (dígrafo CH — 1 som) x "prato" (encontro PR — 2 sons).',
    dificuldade: 2, tags: ['dígrafo', 'encontro consonantal']
  },
  {
    id: 'F-POR-06-003',
    moduloId: 'POR-06', topicoId: 'POR-06',
    frente: 'Qual a diferença entre DITONGO e HIATO?',
    verso: 'DITONGO: duas vogais na MESMA sílaba — pai, mãe, céu. HIATO: duas vogais em SÍLABAS DIFERENTES — sa-í-da, ba-ú, pa-ís. A separação silábica é a chave: no ditongo as vogais ficam juntas; no hiato, separadas.',
    dificuldade: 1, tags: ['ditongo', 'hiato']
  },
  {
    id: 'F-POR-06-004',
    moduloId: 'POR-06', topicoId: 'POR-06',
    frente: 'Quais são as regras principais de S/Z, X/CH e G/J?',
    verso: 'S x Z: S em -ês, -esa, -isa (português, princesa, poetisa); Z em -ez, -eza, -izar (rapidez, beleza, realizar). X x CH: X após ditongo (caixa), "me" (mexer), "en" (enxada — exceção: encher, encharcar); CH em palavras de origem popular (chave). G x J: G em -agem, -igem, -ugem, -ágio, -égio, -ígio, -ógio, -úgio (viagem, origem, pedágio); J em palavras de origem indígena/africana (jibóia) e verbos em -jar (arranjo).',
    dificuldade: 3, tags: ['S/Z', 'X/CH', 'G/J']
  },
  {
    id: 'F-POR-06-005',
    moduloId: 'POR-06', topicoId: 'POR-06',
    frente: 'Quais são os quatro PORQUÊS e quando usar cada um?',
    verso: 'POR QUE (separado, sem acento): pergunta/relativo ("Por que você faltou?"). PORQUE (junto, sem acento): conjunção causal/explicativa ("Faltei porque adoeci"). PORQUÊ (junto, com acento): substantivo, precedido de artigo ("Não sei o porquê"). POR QUÊ (separado, com acento): final de frase ou antes de pontuação ("Você faltou por quê?").',
    dificuldade: 2, tags: ['porquês']
  },
  {
    id: 'F-POR-06-006',
    moduloId: 'POR-06', topicoId: 'POR-06',
    frente: 'Quais são as regras principais de hífen do Acordo Ortográfico?',
    verso: 'USA-SE hífen: vogal igual (anti-inflamatório, micro-ondas); prefixo + H (super-homem); "além", "aquém", "recém", "sem", "ex" (ex-presidente, sem-terra); "bem" e "mal" + vogal/H (bem-estar). NÃO se usa: vogal diferente (autoescola, infraestrutura); prefixo + R/S — duplica-se (antirrugas, contrarregra, microssistema).',
    dificuldade: 3, tags: ['hífen']
  },

  /* ============================================================
     POR-07 — Acentuação gráfica
  ============================================================ */
  {
    id: 'F-POR-07-001',
    moduloId: 'POR-07', topicoId: 'POR-07',
    frente: 'Como se classificam as palavras quanto à sílaba tônica?',
    verso: 'OXÍTONA: tônica na ÚLTIMA sílaba (ca-FÉ). PAROXÍTONA: tônica na PENÚLTIMA (CA-sa). PROPAROXÍTONA: tônica na ANTEPENÚLTIMA (MÉ-di-co). A classificação é o primeiro passo para aplicar as regras de acentuação.',
    dificuldade: 1, tags: ['oxítona', 'paroxítona', 'proparoxítona']
  },
  {
    id: 'F-POR-07-002',
    moduloId: 'POR-07', topicoId: 'POR-07',
    frente: 'Quais são as regras de acentuação das OXÍTONAS?',
    verso: 'Acentuam-se as oxítonas terminadas em: A, E, O (seguidos ou não de S) — sofá, café, cipó; EM e ENS — armazém, parabéns. As terminadas em outras letras (I, U, R, L, Z, X) NÃO são acentuadas: caqui, urubu, lugar, papel, nariz, tórax (exceção: tórax é paroxítona).',
    dificuldade: 2, tags: ['oxítonas', 'regras']
  },
  {
    id: 'F-POR-07-003',
    moduloId: 'POR-07', topicoId: 'POR-07',
    frente: 'Quais são as regras de acentuação das PAROXÍTONAS?',
    verso: 'Acentuam-se as paroxítonas terminadas em: I, IS, US, UM, UNS (júri, lápis, vírus, álbum, fóruns); Ã, ÃS, ÃO, ÃOS (órfã, órfãs, órfão, órfãos); ON, ONS (cânon, cânons); L, N, R, X, PS (fácil, hífen, revólver, tórax, bíceps); DITONGOS (história, série, água). NÃO se acentuam as paroxítonas terminadas em A, E, O, EM, AM, ENS (casa, verde, jovem, falam).',
    dificuldade: 3, tags: ['paroxítonas']
  },
  {
    id: 'F-POR-07-004',
    moduloId: 'POR-07', topicoId: 'POR-07',
    frente: 'Qual é a regra de acentuação das PROPAROXÍTONAS?',
    verso: 'TODAS as proparoxítonas são acentuadas, sem exceção: médico, lâmpada, próximo, século, público, último, básico, ônibus, xícara. É a única regra que não depende de terminação — basta ser proparoxítona.',
    dificuldade: 1, tags: ['proparoxítonas']
  },
  {
    id: 'F-POR-07-005',
    moduloId: 'POR-07', topicoId: 'POR-07',
    frente: 'O que mudou com o Acordo Ortográfico em ditongos abertos e hiatos?',
    verso: 'DITONGOS ABERTOS ÉU, ÉI, ÓI: acentuados em OXÍTONAS (céu, papéis, herói), NÃO acentuados em PAROXÍTONAS (ideia, heroico, jiboia, assembleia). HIATOS EE/OO: NÃO são mais acentuados (creem, deem, voo, enjoo). HIATOS I/U: continuam acentuados quando sozinhos na sílaba (saída, baú, juízes), salvo após ditongo (juiz).',
    dificuldade: 3, tags: ['acordo ortográfico', 'ditongos', 'hiatos']
  },
  {
    id: 'F-POR-07-006',
    moduloId: 'POR-07', topicoId: 'POR-07',
    frente: 'Quais acentos diferenciais permaneceram após o Acordo Ortográfico?',
    verso: 'PERMANECERAM: PÔDE (passado) x PODE (presente); TÊM (3ª pl.) x TEM (3ª sing.); VÊM x VEM; PÔR (verbo) x POR (preposição); CÔA/CÔAS/CÔAM (verbo coar). FORAM ELIMINADOS: PARA (verbo), PELA (verbo), PELO (substantivo), POLO, PERA — todos perderam o acento diferencial.',
    dificuldade: 3, tags: ['acentos diferenciais']
  },

  /* ============================================================
     POR-08 — Estrutura e formação de palavras
  ============================================================ */
  {
    id: 'F-POR-08-001',
    moduloId: 'POR-08', topicoId: 'POR-08',
    frente: 'Quais são os principais elementos mórficos das palavras?',
    verso: 'RADICAL (sentido básico — "livr-" em livro, livraria); PREFIXO (antes do radical — "des-" em desfazer); SUFIXO (depois do radical — "-eiro" em livreiro); VOGAL TEMÁTICA (liga radical a desinência — "a" em fal-a-r); DESINÊNCIAS (flexão — "-s" em livros, "-va" em falava); VOGAL/CONSOANTE DE LIGAÇÃO (eufônica — "o" em gasômetro, "t" em cafeteira).',
    dificuldade: 2, tags: ['elementos mórficos']
  },
  {
    id: 'F-POR-08-002',
    moduloId: 'POR-08', topicoId: 'POR-08',
    frente: 'Qual a diferença entre DERIVAÇÃO e COMPOSIÇÃO?',
    verso: 'DERIVAÇÃO: formação a partir de UMA palavra primitiva (prefixo, sufixo, ambos, ou retirada/mudança) — desfazer, livreiro, entardecer, caça, o jantar. COMPOSIÇÃO: formação a partir de DUAS OU MAIS palavras/radicais — girassol, passatempo, planalto. A derivação parte de 1; a composição, de 2+.',
    dificuldade: 1, tags: ['derivação', 'composição']
  },
  {
    id: 'F-POR-08-003',
    moduloId: 'POR-08', topicoId: 'POR-08',
    frente: 'Qual a diferença entre PARASSÍNTESE e DERIVAÇÃO PREFIXAL E SUFIXAL?',
    verso: 'Teste da EXISTÊNCIA: a palavra existe SEM um dos afixos? PARASSÍNTESE (não existe): "entardecer" — não há "entarde" nem "tardecer"; "esfriar" — não há "esfri" nem "friar" com esse sentido. PREFIXAL E SUFIXAL (existe): "infelizmente" — há "infeliz" e "felizmente". A chave é a simultaneidade dos afixos.',
    dificuldade: 3, tags: ['parassíntese', 'prefixal e sufixal']
  },
  {
    id: 'F-POR-08-004',
    moduloId: 'POR-08', topicoId: 'POR-08',
    frente: 'Qual a diferença entre JUSTAPOSIÇÃO e AGLUTINAÇÃO?',
    verso: 'JUSTAPOSIÇÃO: radicais justapostos SEM perda de elementos fonéticos/gráficos — girassol (gira + sol), passatempo (passa + tempo), beija-flor. AGLUTINAÇÃO: radicais fundidos COM perda de elementos — planalto (plano + alto), pernalta (perna + alta), vinagre (vinho + azedo). A aglutinação "cola" os radicais; a justaposição os mantém separados.',
    dificuldade: 3, tags: ['justaposição', 'aglutinação']
  },
  {
    id: 'F-POR-08-005',
    moduloId: 'POR-08', topicoId: 'POR-08',
    frente: 'Qual a diferença entre DERIVAÇÃO REGRESSIVA e DERIVAÇÃO IMPRÓPRIA?',
    verso: 'REGRESSIVA: RETIRADA de elemento (geralmente do verbo, formando substantivo) — "a caça" de "caçar"; "o combate" de "combater". A palavra nova é MENOR que a original. IMPRÓPRIA: mudança de CLASSE sem alteração de forma — "o jantar" (substantivo) de "jantar" (verbo); "ele é um azul" (adjetivo substantivado). A palavra nova é IGUAL à original, mas com classe diferente.',
    dificuldade: 3, tags: ['regressiva', 'imprópria']
  },
  {
    id: 'F-POR-08-006',
    moduloId: 'POR-08', topicoId: 'POR-08',
    frente: 'Qual a diferença entre ABREVIAÇÃO, SIGLA e HIBRIDISMO?',
    verso: 'ABREVIAÇÃO: redução da palavra mantendo o início — moto (motocicleta), pneu (pneumático), foto (fotografia). SIGLA: redução às letras iniciais — IBGE, MEC, ONU, RG. HIBRIDISMO: radicais de línguas diferentes — automóvel (grego auto + latim móvel), burocracia (francês bureau + grego cracia). Também há EMPRÉSTIMO (palavra de outra língua): feedback, software.',
    dificuldade: 2, tags: ['abreviação', 'sigla', 'hibridismo']
  },

  /* ============================================================
     POR-09 — Classes de palavras I
  ============================================================ */
  {
    id: 'F-POR-09-001',
    moduloId: 'POR-09', topicoId: 'POR-09',
    frente: 'Qual a diferença entre SUBSTANTIVO CONCRETO e ABSTRATO?',
    verso: 'CONCRETO: existência própria, real OU imaginária — mesa, servidor, fada, saci. ABSTRATO: depende de outro ser para existir — beleza, amor, saudade, trabalho. Atenção: seres imaginários (fada, saci, curupira) são CONCRETOS, pois existem na imaginação popular.',
    dificuldade: 2, tags: ['concreto', 'abstrato']
  },
  {
    id: 'F-POR-09-002',
    moduloId: 'POR-09', topicoId: 'POR-09',
    frente: 'Qual a diferença entre SUBSTANTIVO COMUM e PRÓPRIO?',
    verso: 'COMUM: designa seres da mesma espécie — servidor, cidade, rio. PRÓPRIO: designa ser específico, individualizado — João, Brasília, Amazonas. O próprio é grafado com maiúscula e geralmente não admite plural ("os Joões" é exceção).',
    dificuldade: 1, tags: ['comum', 'próprio']
  },
  {
    id: 'F-POR-09-003',
    moduloId: 'POR-09', topicoId: 'POR-09',
    frente: 'Qual a diferença entre ADJETIVO e LOCUÇÃO ADJETIVA?',
    verso: 'ADJETIVO: palavra ÚNICA que caracteriza o substantivo — objeto áureo, servidor dedicado. LOCUÇÃO ADJETIVA: EXPRESSÃO (geralmente preposição + substantivo) com valor de adjetivo — objeto de ouro, amor de mãe, dor de cabeça. A locução pode ser substituída por um adjetivo equivalente ("de ouro" = áureo; "de mãe" = materno).',
    dificuldade: 2, tags: ['adjetivo', 'locução adjetiva']
  },
  {
    id: 'F-POR-09-004',
    moduloId: 'POR-09', topicoId: 'POR-09',
    frente: 'Qual a diferença entre ARTIGO DEFINIDO e INDEFINIDO?',
    verso: 'DEFINIDO (o, a, os, as): DETERMINA o ser, indica que é conhecido ou específico — "O servidor chegou". INDEFINIDO (um, uma, uns, umas): GENERALIZA, indica que não é específico — "Um servidor chegou". A escolha altera o sentido: "o livro" (sabemos qual) x "um livro" (não sabemos qual).',
    dificuldade: 1, tags: ['artigo definido', 'indefinido']
  },
  {
    id: 'F-POR-09-005',
    moduloId: 'POR-09', topicoId: 'POR-09',
    frente: 'Quais são os quatro tipos de NUMERAL?',
    verso: 'CARDINAL: quantidade (um, dois, três). ORDINAL: ordem (primeiro, segundo, terceiro). MULTIPLICATIVO: multiplicação (dobro, triplo, quádruplo). FRACIONÁRIO: fração (meio, terço, quarto). "Um" pode ser artigo indefinido ou numeral cardinal — depende do contexto (artigo quando indetermina; numeral quando conta).',
    dificuldade: 2, tags: ['numeral', 'cardinal', 'ordinal']
  },
  {
    id: 'F-POR-09-006',
    moduloId: 'POR-09', topicoId: 'POR-09',
    frente: 'Por que a classe de uma palavra pode depender do USO?',
    verso: 'Porque muitas palavras são "camaleões": a função na frase define a classe. Ex.: "jovem" é SUBSTANTIVO em "o jovem chegou" (nomeia) e ADJETIVO em "o servidor jovem chegou" (caracteriza). O artigo pode substantivar qualquer palavra: "o amar" (verbo substantivado). A análise morfológica considera o contexto.',
    dificuldade: 2, tags: ['classes', 'uso']
  },

  /* ============================================================
     POR-10 — Pronomes
  ============================================================ */
  {
    id: 'F-POR-10-001',
    moduloId: 'POR-10', topicoId: 'POR-10',
    frente: 'Qual a diferença entre PRONOME PESSOAL RETO e OBLÍQUO?',
    verso: 'RETO: função de SUJEITO — eu, tu, ele, ela, nós, vós, eles, elas. OBLÍQUO: função de COMPLEMENTO — me, te, se, o, a, lhe, nos, vos, os, as, lhes (átonos); mim, ti, si, comigo, contigo, conosco (tônicos, com preposição). Ex.: "Eu entreguei o pedido a ele" — "eu" reto (sujeito); "a ele" oblíquo tônico (complemento).',
    dificuldade: 2, tags: ['pessoal reto', 'oblíquo']
  },
  {
    id: 'F-POR-10-002',
    moduloId: 'POR-10', topicoId: 'POR-10',
    frente: 'Qual a diferença entre ESTE, ESSE e AQUELE?',
    verso: 'ESTE: perto de quem fala, tempo PRESENTE, o que AINDA SERÁ DITO — "Este documento vale para o ano atual". ESSE: perto de quem ouve, PASSADO RECENTE, o que JÁ FOI DITO — "Esse documento vale para o ano anterior". AQUELE: longe de ambos, PASSADO REMOTO, antecedente distante — "Aquele caso de 2010".',
    dificuldade: 2, tags: ['este', 'esse', 'aquele']
  },
  {
    id: 'F-POR-10-003',
    moduloId: 'POR-10', topicoId: 'POR-10',
    frente: 'Qual a diferença entre o pronome relativo "QUE" e "CUJO"?',
    verso: 'QUE: retoma o antecedente como SUJEITO ou OBJETO — "O servidor QUE chegou" (o servidor chegou — sujeito). CUJO: indica POSSE e NUNCA é seguido de artigo — "o servidor CUJO pedido" (não "cujo o pedido"). "Cujo" concorda com o termo POSSUÍDO (pedido), não com o possuidor.',
    dificuldade: 3, tags: ['que', 'cujo']
  },
  {
    id: 'F-POR-10-004',
    moduloId: 'POR-10', topicoId: 'POR-10',
    frente: 'Por que os pronomes de tratamento exigem verbo na 3ª pessoa?',
    verso: 'Porque são formas de tratamento INDIRETO — embora se refiram ao interlocutor, o verbo fica na 3ª pessoa: "Vossa Excelência DESPACHOU" (não "despachastes"), "Vossa Senhoria SOLICITOU" (não "solicitastes"). A regra é fixa no padrão ofício e não admite flexão para 2ª pessoa.',
    dificuldade: 2, tags: ['pronomes de tratamento']
  },
  {
    id: 'F-POR-10-005',
    moduloId: 'POR-10', topicoId: 'POR-10',
    frente: 'Qual a diferença entre PRÓCLISE, MESÓCLISE e ÊNCLISE?',
    verso: 'PRÓCLISE: pronome ANTES do verbo — "Não ME entregaram" (obrigatória com atrativas). MESÓCLISE: pronome NO MEIO do verbo — "Dar-TE-ei" (futuro do presente/pretérito, sem atrativa). ÊNCLISE: pronome DEPOIS do verbo — "Entregaram-ME" (caso geral, início de frase, imperativo afirmativo). NUNCA se inicia frase com pronome oblíquo átono.',
    dificuldade: 3, tags: ['próclise', 'mesóclise', 'ênclise']
  },
  {
    id: 'F-POR-10-006',
    moduloId: 'POR-10', topicoId: 'POR-10',
    frente: 'Quais palavras ATRATIVAS exigem próclise?',
    verso: 'NÃO, NUNCA, JAMAIS, NINGUÉM, NADA, NENHUM, SÓ, APENAS, TAMBÉM, JÁ, AINDA, SEMPRE, QUE, QUEM, QUAL, ONDE, QUANDO, SE, EMBORA, CONFORME, SEGUNDO, CONSOANTE. A presença de qualquer uma delas "puxa" o pronome para ANTES do verbo: "NUNCA ME entregaram" (não "nunca entregaram-me").',
    dificuldade: 3, tags: ['palavras atrativas', 'próclise']
  },

  /* ============================================================
     POR-11 — Verbos
  ============================================================ */
  {
    id: 'F-POR-11-001',
    moduloId: 'POR-11', topicoId: 'POR-11',
    frente: 'Quais são os três MODOS VERBAIS e o que cada um expressa?',
    verso: 'INDICATIVO: certeza, fato real — "O servidor protocolou". SUBJUNTIVO: dúvida, desejo, hipótese — "Espero que o servidor protocole". IMPERATIVO: ordem, pedido, conselho — "Protocole o pedido". A escolha depende do valor (certeza x possibilidade x ordem), não do verbo em si.',
    dificuldade: 1, tags: ['modos verbais']
  },
  {
    id: 'F-POR-11-002',
    moduloId: 'POR-11', topicoId: 'POR-11',
    frente: 'Qual a diferença entre PRETÉRITO PERFEITO, IMPERFEITO e MAIS-QUE-PERFEITO?',
    verso: 'PERFEITO (falei): fato CONCLUÍDO, pontual — "Ontem falei com ele". IMPERFEITO (falava): fato HABITUAL no passado ou ação em curso — "Todos os dias falava com ele". MAIS-QUE-PERFEITO (falara/tinha falado): ação ANTERIOR a outra no passado — "Quando cheguei, ele já falara".',
    dificuldade: 2, tags: ['pretérito perfeito', 'imperfeito', 'mais-que-perfeito']
  },
  {
    id: 'F-POR-11-003',
    moduloId: 'POR-11', topicoId: 'POR-11',
    frente: 'Qual a diferença entre VOZ ATIVA, PASSIVA ANALÍTICA e PASSIVA SINTÉTICA?',
    verso: 'ATIVA: sujeito PRATICA — "O servidor protocolou o pedido". PASSIVA ANALÍTICA: sujeito SOFRE + verbo SER + particípio + agente com "por" — "O pedido foi protocolado pelo servidor". PASSIVA SINTÉTICA: sujeito SOFRE + verbo + "SE" — "Protocolou-se o pedido". As três mantêm o mesmo conteúdo, com perspectivas diferentes.',
    dificuldade: 3, tags: ['voz ativa', 'passiva analítica', 'sintética']
  },
  {
    id: 'F-POR-11-004',
    moduloId: 'POR-11', topicoId: 'POR-11',
    frente: 'Qual a diferença entre VERBO REGULAR, IRREGULAR e AUXILIAR?',
    verso: 'REGULAR: segue o paradigma sem alterar o radical — falar → falo, falas, fala, falamos. IRREGULAR: altera o radical ou as terminações — fazer → faço, fiz, farei; ser → sou, fui, era; ir → vou, fui, irei. AUXILIAR: forma locuções verbais — ter, haver, ser, estar, ir, poder, dever, querer ("vou protocolar" = ir + infinitivo).',
    dificuldade: 2, tags: ['regular', 'irregular', 'auxiliar']
  },
  {
    id: 'F-POR-11-005',
    moduloId: 'POR-11', topicoId: 'POR-11',
    frente: 'O que são VERBOS IMPESSOAIS e como se flexionam?',
    verso: 'São verbos que NÃO TÊM SUJEITO — ficam sempre na 3ª pessoa do singular. Principais: HAVER (sentido de existir) — "Havia servidores" (não "haviam"); FAZER (tempo) — "Faz dois anos" (não "fazem"); SER (tempo/hora) — "É uma hora" / "São duas horas" (concorda com o predicativo); nevar, chover, trovejar.',
    dificuldade: 3, tags: ['verbos impessoais']
  },
  {
    id: 'F-POR-11-006',
    moduloId: 'POR-11', topicoId: 'POR-11',
    frente: 'O que é CORRELAÇÃO VERBAL e por que ela importa?',
    verso: 'É a manutenção da coerência entre tempos e modos verbais no período: "Se estudasse (imperfeito do subjuntivo), passaria (futuro do pretérito)" — combinação correta. "Se estudar (futuro do subjuntivo), passarei (futuro do presente)". Quebrar a correlação compromete a coerência: "Se estudasse, passarei" (erro).',
    dificuldade: 3, tags: ['correlação verbal']
  },
  /* ============================================================
     POR-12 — Classes de palavras III (advérbio, preposição, conjunção, interjeição)
  ============================================================ */
  {
    id: 'F-POR-12-001',
    moduloId: 'POR-12', topicoId: 'POR-12',
    frente: 'Qual a diferença entre ADVÉRBIO e ADJETIVO?',
    verso: 'ADVÉRBIO: INVARIÁVEL, modifica VERBO, ADJETIVO ou outro ADVÉRBIO — "falou calmamente", "muito bonito", "muito bem". ADJETIVO: VARIÁVEL (flexiona em gênero e número), caracteriza SUBSTANTIVO — "servidor calmo", "servidores calmos". A troca de "calmo" para "calmamente" muda a classe (e o comportamento).',
    dificuldade: 1, tags: ['advérbio', 'adjetivo']
  },
  {
    id: 'F-POR-12-002',
    moduloId: 'POR-12', topicoId: 'POR-12',
    frente: 'Quais são as classes invariáveis da língua portuguesa?',
    verso: 'ADVÉRBIO (circunstância), PREPOSIÇÃO (liga termos), CONJUNÇÃO (liga orações), INTERJEIÇÃO (expressa emoção). Essas classes NÃO flexionam em gênero nem em número — são invariáveis. Já substantivo, adjetivo, artigo, numeral, pronome e verbo são VARIÁVEIS (flexionam).',
    dificuldade: 1, tags: ['classes invariáveis']
  },
  {
    id: 'F-POR-12-003',
    moduloId: 'POR-12', topicoId: 'POR-12',
    frente: 'Qual a diferença entre CONJUNÇÃO COORDENATIVA e SUBORDINATIVA?',
    verso: 'COORDENATIVA: liga orações INDEPENDENTES (nenhuma é termo da outra) — "Estudou E trabalhou", "Estudou, MAS não passou". SUBORDINATIVA: liga oração DEPENDENTE (uma é termo da outra) — "Estudou PORQUE quis", "EMBORA estivesse doente, veio". A dependência sintática é a chave.',
    dificuldade: 2, tags: ['coordenativa', 'subordinativa']
  },
  {
    id: 'F-POR-12-004',
    moduloId: 'POR-12', topicoId: 'POR-12',
    frente: 'Quais são os principais valores semânticos das CONJUNÇÕES SUBORDINATIVAS?',
    verso: 'CAUSAIS (porque, pois, já que): causa. CONCESSIVAS (embora, ainda que): admitem e superam. CONDICIONAIS (se, caso): condição. CONSECUTIVAS (tão...que): consequência. COMPARATIVAS (como, tal qual): comparação. CONFORMATIVAS (conforme, segundo): conformidade. FINAIS (para que): finalidade. PROPORCIONAIS (à medida que): proporção. TEMPORAIS (quando, enquanto): tempo.',
    dificuldade: 3, tags: ['conjunções', 'valores semânticos']
  },
  {
    id: 'F-POR-12-005',
    moduloId: 'POR-12', topicoId: 'POR-12',
    frente: 'O que é uma LOCUÇÃO PREPOSITIVA? Dê exemplos.',
    verso: 'Expressão com valor de PREPOSIÇÃO — geralmente preposição + substantivo/advérbio. Ex.: "por causa de", "em frente de", "a fim de", "de acordo com", "junto a", "através de", "por meio de". A locução prepositiva liga dois termos, como uma preposição simples faria.',
    dificuldade: 2, tags: ['locução prepositiva']
  },
  {
    id: 'F-POR-12-006',
    moduloId: 'POR-12', topicoId: 'POR-12',
    frente: 'Qual a diferença entre CONCESSIVA, CAUSAL e ADVERSATIVA?',
    verso: 'CAUSAL (porque): a oração é a CAUSA — "Não veio PORQUE adoeceu" (doença = causa). CONCESSIVA (embora): a oração admite o fato contrário sem impedir a principal — "EMBORA doente, veio" (doença não impediu). ADVERSATIVA (mas): contrapõe — "Estudou, MAS não passou" (oposição direta). A causal explica; a concessiva admite e supera; a adversativa contrapõe.',
    dificuldade: 3, tags: ['concessiva', 'causal', 'adversativa']
  },

  /* ============================================================
     POR-13 — Sintaxe: termos da oração
  ============================================================ */
  {
    id: 'F-POR-13-001',
    moduloId: 'POR-13', topicoId: 'POR-13',
    frente: 'Quais são os cinco tipos de SUJEITO?',
    verso: 'SIMPLES (1 núcleo): "O servidor protocolou". COMPOSTO (2+ núcleos): "O servidor e o chefe protocolaram". OCULTO (não expresso, mas identificável): "Chegou tarde; estava cansado" (ele). INDETERMINADO (não se identifica): "Roubaram o carro"; "Precisa-se de servidores". INEXISTENTE (verbos impessoais): "Havia muitos servidores"; "Faz dois anos".',
    dificuldade: 1, tags: ['sujeito', 'tipos']
  },
  {
    id: 'F-POR-13-002',
    moduloId: 'POR-13', topicoId: 'POR-13',
    frente: 'Qual a diferença entre OBJETO DIRETO e OBJETO INDIRETO?',
    verso: 'OBJETO DIRETO: complemento de verbo TRANSITIVO DIRETO, sem preposição obrigatória — "O servidor protocolou O PEDIDO". OBJETO INDIRETO: complemento de verbo TRANSITIVO INDIRETO, com preposição — "O servidor obedeceu AO REGULAMENTO". A pergunta "o quê?" (direto) x "a quem? de quê? em quê?" (indireto) ajuda na identificação.',
    dificuldade: 1, tags: ['objeto direto', 'objeto indireto']
  },
  {
    id: 'F-POR-13-003',
    moduloId: 'POR-13', topicoId: 'POR-13',
    frente: 'Qual a diferença entre COMPLEMENTO NOMINAL e ADJUNTO ADNOMINAL?',
    verso: 'COMPLEMENTO NOMINAL: completa NOME (substantivo, adjetivo ou advérbio), sempre com PREPOSIÇÃO — "a obediência AO REGULAMENTO"; "favorável À PROPOSTA". ADJUNTO ADNOMINAL: caracteriza SUBSTANTIVO, sem preposição obrigatória (ou com preposição caracterizando) — "o servidor DEDICADO"; "a casa DE PEDRA"; "MEU livro". A chave é: CN completa nome; AA caracteriza substantivo.',
    dificuldade: 3, tags: ['complemento nominal', 'adjunto adnominal']
  },
  {
    id: 'F-POR-13-004',
    moduloId: 'POR-13', topicoId: 'POR-13',
    frente: 'Qual a diferença entre PREDICATIVO DO SUJEITO e PREDICATIVO DO OBJETO?',
    verso: 'PREDICATIVO DO SUJEITO: atribui qualidade/estado ao sujeito, com verbo de ligação — "O servidor ESTÁ CANSADO". PREDICATIVO DO OBJETO: atribui qualidade/estado ao objeto direto, com verbo transitivo — "O diretor nomeou o servidor COORDENADOR" (= nomeou o servidor como coordenador). A diferença é o termo que recebe a qualidade: sujeito x objeto.',
    dificuldade: 3, tags: ['predicativo do sujeito', 'predicativo do objeto']
  },
  {
    id: 'F-POR-13-005',
    moduloId: 'POR-13', topicoId: 'POR-13',
    frente: 'Quando ocorre SUJEITO INEXISTENTE? Dê exemplos.',
    verso: 'Ocorre com VERBOS IMPESSOAIS — que não têm sujeito: HAVER no sentido de existir ("Havia muitos servidores"), FAZER indicando tempo ("Faz dois anos"), SER indicando tempo/hora ("É uma hora" / "São duas horas"), e verbos que indicam fenômenos naturais (chover, nevar, trovejar). Não confundir com sujeito indeterminado — aqui há alguém, mas não se identifica.',
    dificuldade: 2, tags: ['sujeito inexistente', 'verbos impessoais']
  },
  {
    id: 'F-POR-13-006',
    moduloId: 'POR-13', topicoId: 'POR-13',
    frente: 'O que são AGENTE DA PASSIVA, APOSTO e VOCATIVO?',
    verso: 'AGENTE DA PASSIVA: pratica a ação na voz passiva, com "por" — "O pedido foi protocolado PELO SERVIDOR". APOSTO: explica, identifica ou resume outro termo — "O servidor, HOMEM DEDICADO, foi elogiado". VOCATIVO: chama o interlocutor — "SERVIDOR, atenção ao prazo". Agente = pratica; aposto = explica; vocativo = chama.',
    dificuldade: 2, tags: ['agente da passiva', 'aposto', 'vocativo']
  },

  /* ============================================================
     POR-14 — Período simples e composto
  ============================================================ */
  {
    id: 'F-POR-14-001',
    moduloId: 'POR-14', topicoId: 'POR-14',
    frente: 'Qual a diferença entre FRASE, ORAÇÃO e PERÍODO?',
    verso: 'FRASE: enunciado com sentido completo, com ou sem verbo — "Socorro!", "Que dia!". ORAÇÃO: frase COM verbo — "O servidor chegou". PERÍODO: conjunto de orações — SIMPLES (1 oração): "O servidor chegou cedo"; COMPOSTO (2+ orações): "O servidor chegou QUANDO o chefe saiu".',
    dificuldade: 1, tags: ['frase', 'oração', 'período']
  },
  {
    id: 'F-POR-14-002',
    moduloId: 'POR-14', topicoId: 'POR-14',
    frente: 'Qual a diferença entre COORDENAÇÃO e SUBORDINAÇÃO?',
    verso: 'COORDENAÇÃO: orações INDEPENDENTES — cada uma tem sentido próprio — "Chegou E cumprimentou", "Estudou, MAS não passou". SUBORDINAÇÃO: oração DEPENDENTE — é termo da principal — "Espero QUE ele venha", "EMBORA estivesse doente, veio". A dependência sintática é a chave.',
    dificuldade: 1, tags: ['coordenação', 'subordinação']
  },
  {
    id: 'F-POR-14-003',
    moduloId: 'POR-14', topicoId: 'POR-14',
    frente: 'Quais são os três tipos de orações SUBORDINADAS?',
    verso: 'SUBSTANTIVA: exerce função de substantivo (sujeito, OD, OI, CN, predicativo, aposto) — "Espero QUE ele venha" (OD); "É importante QUE você estude" (sujeito). ADJETIVA: exerce função de adjetivo (caracteriza antecedente) — "O servidor QUE chegou". ADVERBIAL: exerce função de advérbio (circunstância) — "Não veio PORQUE adoeceu".',
    dificuldade: 2, tags: ['substantiva', 'adjetiva', 'adverbial']
  },
  {
    id: 'F-POR-14-004',
    moduloId: 'POR-14', topicoId: 'POR-14',
    frente: 'Qual a diferença entre ORAÇÃO ADJETIVA RESTRITIVA e EXPLICATIVA?',
    verso: 'RESTRITIVA: SEM vírgula — restringe o antecedente (indica um subconjunto) — "Os servidores QUE ESTUDARAM foram aprovados" (só os que estudaram). EXPLICATIVA: COM vírgula — comenta o antecedente (todo o conjunto) — "Os servidores, QUE ESTUDARAM, foram aprovados" (todos estudaram). A vírgula muda o sentido.',
    dificuldade: 2, tags: ['restritiva', 'explicativa']
  },
  {
    id: 'F-POR-14-005',
    moduloId: 'POR-14', topicoId: 'POR-14',
    frente: 'Como distinguir "QUE" conjunção integrante de "QUE" pronome relativo?',
    verso: 'Teste: substituir por "O QUAL" — se funcionar, é PRONOME RELATIVO (oração adjetiva). Se não funcionar, é CONJUNÇÃO INTEGRANTE (oração substantiva). Ex.: "O servidor QUE chegou" → "O servidor O QUAL chegou" (funciona → relativo → adjetiva). "Espero QUE ele venha" → "Espero O QUAL ele venha" (não funciona → integrante → substantiva).',
    dificuldade: 3, tags: ['que', 'integrante', 'relativo']
  },
  {
    id: 'F-POR-14-006',
    moduloId: 'POR-14', topicoId: 'POR-14',
    frente: 'Qual a diferença entre ORAÇÕES REDUZIDAS e DESENVOLVIDAS?',
    verso: 'DESENVOLVIDA: verbo em FORMA FINITA (conjugado) + conjunção ou pronome relativo — "Espero QUE ele VENHA"; "Embora ESTIVESSE doente". REDUZIDA: verbo em FORMA NOMINAL (infinitivo -r, gerúndio -ndo, particípio -do), sem conjunção — "Espero ele VIR" (infinitivo); "AO CHEGAR, cumprimentou" (infinitivo); "EMBORA CANSADO, veio" (particípio).',
    dificuldade: 3, tags: ['reduzidas', 'desenvolvidas']
  },

  /* ============================================================
     POR-15 — Concordância verbal e nominal
  ============================================================ */
  {
    id: 'F-POR-15-001',
    moduloId: 'POR-15', topicoId: 'POR-15',
    frente: 'Qual é a REGRA GERAL da concordância verbal e da nominal?',
    verso: 'VERBAL: o VERBO concorda com o SUJEITO em número e pessoa — "O servidor protocolou" / "Os servidores protocolaram". NOMINAL: o ADJETIVO (e artigo, numeral, pronome adjetivo) concorda com o SUBSTANTIVO em gênero e número — "servidor dedicado" / "servidora dedicada" / "servidores dedicados".',
    dificuldade: 1, tags: ['regra geral']
  },
  {
    id: 'F-POR-15-002',
    moduloId: 'POR-15', topicoId: 'POR-15',
    frente: 'Como se comportam os VERBOS IMPESSOAIS na concordância?',
    verso: 'Ficam sempre na 3ª pessoa do SINGULAR, pois não têm sujeito: HAVER (sentido de existir) — "HAVIA muitos servidores" (não "haviam"); FAZER (tempo) — "FAZ dois anos" (não "fazem"); SER (tempo/hora) — "É uma hora" / "São duas horas" (concorda com o predicativo). Confundir com "existir" (pessoal) é erro clássico: "EXISTIAM muitos servidores".',
    dificuldade: 2, tags: ['verbos impessoais']
  },
  {
    id: 'F-POR-15-003',
    moduloId: 'POR-15', topicoId: 'POR-15',
    frente: 'Como se dá a concordância com SUJEITO COMPOSTO?',
    verso: 'ANTEPOSTO ao verbo: verbo no PLURAL — "O diretor E o coordenador CHEGARAM". POSPOSTO ao verbo: verbo no SINGULAR ou PLURAL — "CHEGOU o diretor e o coordenador" / "CHEGARAM o diretor e o coordenador". Com "ou" (exclusão): singular se a exclusão for clara — "OU o diretor OU o coordenador SERÁ eleito".',
    dificuldade: 2, tags: ['sujeito composto']
  },
  {
    id: 'F-POR-15-004',
    moduloId: 'POR-15', topicoId: 'POR-15',
    frente: 'Como se dá a concordância com EXPRESSÕES PARTITIVAS e PORCENTAGENS?',
    verso: 'PARTITIVAS (a maioria de, grande parte de): verbo no SINGULAR ou PLURAL — "A maioria dos servidores COMPARECEU / COMPARECERAM". PORCENTAGENS: concorda com o NÚMERO — "1% FALTOU" / "30% FALTARAM" — ou com o DETERMINANTE — "OS 30% dos servidores FALTARAM".',
    dificuldade: 3, tags: ['partitivas', 'porcentagens']
  },
  {
    id: 'F-POR-15-005',
    moduloId: 'POR-15', topicoId: 'POR-15',
    frente: 'Como se dá a concordância com "MAIS DE UM" e "UM DOS QUE"?',
    verso: '"MAIS DE UM": verbo no SINGULAR — "Mais de um servidor FALTOU" (plural apenas se houver reciprocidade — "Mais de um servidor se ABRAÇARAM"). "UM DOS QUE": verbo no PLURAL ou SINGULAR — "Ele é um dos que mais ESTUDAM / ESTUDA". O uso mais comum é o plural (concorda com o antecedente "os que").',
    dificuldade: 3, tags: ['mais de um', 'um dos que']
  },
  {
    id: 'F-POR-15-006',
    moduloId: 'POR-15', topicoId: 'POR-15',
    frente: 'Como se dá a concordância com "É NECESSÁRIO", "BASTANTE", "MEIO" e "ANEXO"?',
    verso: '"É NECESSÁRIO": SEM artigo — invariável ("É necessário paciência"); COM artigo — concorda ("É necessária A paciência"). "BASTANTE": adjetivo (varia — "Bastantes servidores") x advérbio (invariável — "Estudei bastante"). "MEIO": numeral (varia — "meia pizza") x advérbio (invariável — "meio cansada"). "ANEXO": adjetivo, varia ("Seguem ANEXAS as cópias") x "EM ANEXO" (locução, invariável).',
    dificuldade: 3, tags: ['é necessário', 'bastante', 'meio', 'anexo']
  },

  /* ============================================================
     POR-16 — Regência verbal e nominal
  ============================================================ */
  {
    id: 'F-POR-16-001',
    moduloId: 'POR-16', topicoId: 'POR-16',
    frente: 'Qual a diferença entre REGÊNCIA VERBAL e REGÊNCIA NOMINAL?',
    verso: 'VERBAL: relação entre VERBO e complemento, com preposição (indireto) ou sem (direto) — "obedecer A", "assistir A", "preferir A". NOMINAL: relação entre NOME (substantivo, adjetivo, advérbio) e complemento, sempre com preposição — "favorável A", "atento A", "capaz DE". A diferença é o termo anterior: verbo x nome.',
    dificuldade: 1, tags: ['regência verbal', 'regência nominal']
  },
  {
    id: 'F-POR-16-002',
    moduloId: 'POR-16', topicoId: 'POR-16',
    frente: 'Qual a regência dos verbos ASSISTIR, ASPIRAR e VISAR?',
    verso: 'ASSISTIR: ver → com "a" ("assisti AO filme"); ajudar → direto ("assistiu O paciente"); morar → com "em" ("assiste EM Brasília"); caber → com "a" ("assiste AO juiz julgar"). ASPIRAR: sorver → direto ("aspirei O perfume"); desejar → com "a" ("aspiro A um cargo"). VISAR: mirar → direto ("visou O alvo"); almejar → com "a" ("visa A proteger").',
    dificuldade: 2, tags: ['assistir', 'aspirar', 'visar']
  },
  {
    id: 'F-POR-16-003',
    moduloId: 'POR-16', topicoId: 'POR-16',
    frente: 'Qual a regência dos verbos IMPLICAR, PROCEDER e QUERER?',
    verso: 'IMPLICAR: acarretar → direto ou com "em" ("implica custos" / "implica em custos"); envolver → com "em" ("implicou-se em crimes"). PROCEDER: originar-se → com "de" ("procede DE outra unidade"); realizar → com "a" ("procedeu A conferência"); ter fundamento → direto ("o pedido não procede"). QUERER: desejar → direto ("quero o livro"); estimar → com "a" ("quero A meus filhos").',
    dificuldade: 3, tags: ['implicar', 'proceder', 'querer']
  },
  {
    id: 'F-POR-16-004',
    moduloId: 'POR-16', topicoId: 'POR-16',
    frente: 'Qual a regência de PREFERIR, OBEDECER e CHEGAR/IR?',
    verso: 'PREFERIR: com "a" — "Prefiro ISTO A AQUILO" (nunca "mais que" nem "do que"). OBEDECER/DESOBEDECER: com "a" — "obedeceu AO regulamento". CHEGAR/IR: com "a" na norma culta — "Cheguei A Brasília" / "Vou AO órgão" (não "em"). Essas três regências são as mais cobradas em prova.',
    dificuldade: 2, tags: ['preferir', 'obedecer', 'chegar']
  },
  {
    id: 'F-POR-16-005',
    moduloId: 'POR-16', topicoId: 'POR-16',
    frente: 'Quais são as principais regências NOMINAIS?',
    verso: 'Favorável A, atento A, contrário A, fiel A, indiferente A, insensível A, propenso A, próximo A/DE, avesso A, adepto A, alheio A, imune A. E ainda: CAPAZ DE, digno DE, desejoso DE, ávido DE/POR, curioso DE/POR, devoto DE, sedento DE; HÁBIL EM; INTERESSE EM/POR; ORGULHO DE/POR; SATISFEITO COM/COM; RESPEITO A/POR; SIMPATIA POR/COM.',
    dificuldade: 3, tags: ['regência nominal']
  },
  {
    id: 'F-POR-16-006',
    moduloId: 'POR-16', topicoId: 'POR-16',
    frente: 'Qual a regência de LEMBRAR/ESQUECER (com e sem pronome)?',
    verso: 'SEM PRONOME: verbo TRANSITIVO DIRETO — "Esqueci TUDO" / "Lembrei O PRAZO". COM PRONOME: verbo TRANSITIVO INDIRETO com "de" — "Esqueci-ME DE tudo" / "Lembrei-ME DO prazo". O pronome "se/me/te" muda a regência. Cuidado com "esquecer DE" (coloquial — a norma prefere "esquecer" direto ou "esquecer-se de").',
    dificuldade: 2, tags: ['lembrar', 'esquecer']
  },

  /* ============================================================
     POR-17 — Crase
  ============================================================ */
  {
    id: 'F-POR-17-001',
    moduloId: 'POR-17', topicoId: 'POR-17',
    frente: 'O que é CRASE e como se representa?',
    verso: 'CRASE é a FUSÃO da PREPOSIÇÃO "a" com o ARTIGO "a" (ou com pronomes demonstrativos "aquele/aquela/aquilo"), representada pelo ACENTO GRAVE: à, àquele, àquela, àquilo. Só há crase quando há ENCONTRO de dois "a" — preposição + artigo. Se faltar um dos dois, não há crase.',
    dificuldade: 1, tags: ['crase', 'conceito']
  },
  {
    id: 'F-POR-17-002',
    moduloId: 'POR-17', topicoId: 'POR-17',
    frente: 'Qual é o teste prático para saber se há CRASE?',
    verso: 'TROCA POR MASCULINO: substitua a palavra feminina por masculina. Se aparecer "AO", há crase; se aparecer "o" ou nada, não há. Ex.: "Assisti À peça" → "assisti AO filme" (apareceu "ao" → crase). "Refiro-me A mulheres" → "refiro-me A homens" (não apareceu "ao" → sem crase). "Vou À Bahia" → "vou AO Rio" (ao → crase). "Vou a Brasília" → "vou a São Paulo" (sem ao → sem crase).',
    dificuldade: 2, tags: ['teste da crase']
  },
  {
    id: 'F-POR-17-003',
    moduloId: 'POR-17', topicoId: 'POR-17',
    frente: 'Quais são os casos de CRASE OBRIGATÓRIA?',
    verso: 'Diante de palavra feminina DETERMINADA que complete verbo/nome que exige "a" — "Assisti À peça"; "Favorável À proposta". Diante de "AQUELE/AQUELA/AQUILO" — "Referiu-se Àquele caso". Em LOCUÇÕES femininas — "à tarde", "às vezes", "à noite", "à medida que". Em INDICAÇÃO DE HORAS — "Saí às 8h". Em nomes de LUGAR que admitem artigo — "Vou À Bahia".',
    dificuldade: 2, tags: ['crase obrigatória']
  },
  {
    id: 'F-POR-17-004',
    moduloId: 'POR-17', topicoId: 'POR-17',
    frente: 'Quais são os casos de CRASE PROIBIDA?',
    verso: 'Antes de palavra MASCULINA — "Ando a pé" (não "à pé"). Antes de VERBO NO INFINITIVO — "Começou a estudar". Antes de palavra feminina INDETERMINADA — "Refiro-me a mulheres" (sem artigo). Antes de PRONOMES (pessoais, indefinidos, demonstrativos este/esse, relativos) — "Entreguei a ela", "Refiro-me a esta norma". Antes de "UMA" — "Refiro-me a uma servidora". Antes de CIDADE SEM ARTIGO — "Vou a Brasília".',
    dificuldade: 3, tags: ['crase proibida']
  },
  {
    id: 'F-POR-17-005',
    moduloId: 'POR-17', topicoId: 'POR-17',
    frente: 'Quais são os casos de CRASE FACULTATIVA?',
    verso: 'Antes de NOMES PRÓPRIOS FEMININOS — "Entreguei a/à Maria". Antes de PRONOMES POSSESSIVOS FEMININOS — "Refiro-me a/à sua proposta". Depois de "ATÉ" — "Fui até a/à praça". Nesses três casos, a crase pode ou não ocorrer, sem erro gramatical. Não confundir com os casos obrigatórios e proibidos.',
    dificuldade: 3, tags: ['crase facultativa']
  },
  {
    id: 'F-POR-17-006',
    moduloId: 'POR-17', topicoId: 'POR-17',
    frente: 'Como se dá a crase com "AQUELE/AQUELA/AQUILO" e com NOMES DE LUGAR?',
    verso: 'AQUELE/AQUELA/AQUILO: crase OBRIGATÓRIA — "Referiu-se ÀQUELE caso"; "Entregou ÀQUELA servidora". Nomes de LUGAR: se admitem artigo (voltam com "DA/DO"), há crase — "Vou À Bahia" (volto DA Bahia). Se NÃO admitem artigo (voltam com "DE"), não há crase — "Vou a Brasília" (volto DE Brasília). O teste do "da/do" é decisivo.',
    dificuldade: 3, tags: ['aquele', 'nomes de lugar']
  },

  /* ============================================================
     POR-18 — Pontuação
  ============================================================ */
  {
    id: 'F-POR-18-001',
    moduloId: 'POR-18', topicoId: 'POR-18',
    frente: 'Qual é a REGRA DE OURO da vírgula?',
    verso: 'A vírgula separa o que é SEPARÁVEL. NÃO se separa com vírgula: SUJEITO e VERBO ("O servidor, protocolou" — ERRADO); VERBO e COMPLEMENTO ("Entregou, o documento" — ERRADO); NOME e COMPLEMENTO ("Favorável, à proposta" — ERRADO). A vírgula NÃO é pausa respiratória — é marca sintática.',
    dificuldade: 1, tags: ['vírgula', 'regra']
  },
  {
    id: 'F-POR-18-002',
    moduloId: 'POR-18', topicoId: 'POR-18',
    frente: 'Qual a diferença de sentido entre ORAÇÃO ADJETIVA EXPLICATIVA e RESTRITIVA?',
    verso: 'EXPLICATIVA (com vírgula): comenta o antecedente, generaliza, indica que TODOS são atingidos — "Os servidores, QUE ESTUDARAM, foram aprovados" (todos estudaram). RESTRITIVA (sem vírgula): restringe o antecedente, indica um SUBCONJUNTO — "Os servidores QUE ESTUDARAM foram aprovados" (apenas os que estudaram). A vírgula muda tudo.',
    dificuldade: 2, tags: ['explicativa', 'restritiva']
  },
  {
    id: 'F-POR-18-003',
    moduloId: 'POR-18', topicoId: 'POR-18',
    frente: 'Quais são os principais USOS da vírgula?',
    verso: 'Separar termos de mesma função (enumeração) — "pão, leite, café". Isolar APOSTO — "O servidor, homem dedicado, foi elogiado". Isolar VOCATIVO — "Servidor, atenção". Isolar ORAÇÕES DESLOCADAS — "Quando chegou, todos se levantaram". Isolar ORAÇÕES COORDENADAS ASSINDÉTICAS — "Chegou, cumprimentou, saiu". Isolar adjetiva EXPLICATIVA — "O servidor, que chegou cedo, foi elogiado".',
    dificuldade: 2, tags: ['usos da vírgula']
  },
  {
    id: 'F-POR-18-004',
    moduloId: 'POR-18', topicoId: 'POR-18',
    frente: 'Quais são os usos de PONTO E VÍRGULA, DOIS-PONTOS e TRAVESSÃO?',
    verso: 'PONTO E VÍRGULA: separa orações longas ou itens de enumeração complexos — pausa mais forte que a vírgula, mais fraca que o ponto — "O art. 5º dispõe sobre direitos; o art. 6º, sobre deveres". DOIS-PONTOS: introduz explicação, enumeração, fala, consequência — "Só havia uma saída: recorrer". TRAVESSÃO: isola termo intercalado com destaque — "O diretor — homem experiente — decidiu".',
    dificuldade: 2, tags: ['ponto e vírgula', 'dois-pontos', 'travessão']
  },
  {
    id: 'F-POR-18-005',
    moduloId: 'POR-18', topicoId: 'POR-18',
    frente: 'Quais são os ERROS CLÁSSICOS de vírgula?',
    verso: 'Separar SUJEITO e VERBO — "O servidor, protocolou" (errado). Separar VERBO e COMPLEMENTO — "Entregou, o documento" (errado). Separar NOME e COMPLEMENTO — "Favorável, à proposta" (errado). Usar vírgula antes de adjetiva RESTRITIVA — "Os servidores, que estudaram, foram aprovados" (muda sentido). Usar vírgula antes de consecutiva — "Estudou tanto, que passou" (errado). Usar vírgula antes de final — "Estudou, para que passasse" (errado).',
    dificuldade: 2, tags: ['erros de vírgula']
  },
  {
    id: 'F-POR-18-006',
    moduloId: 'POR-18', topicoId: 'POR-18',
    frente: 'Como a vírgula se relaciona com as CONJUNÇÕES?',
    verso: 'Coordenadas ADVERSATIVAS, CONCLUSIVAS, EXPLICATIVAS e ALTERNATIVAS: geralmente vírgula ANTES do conectivo — "Estudou, MAS não passou"; "Estudou; PORTANTO, passou"; "Não veio, POIS adoeceu". Aditivas (e, nem): sem vírgula em geral. Subordinadas adverbiais DESLOCADAS: vírgula ao final — "Quando chegou, todos se levantaram" (ou no início, se vierem depois: "Todos se levantaram quando chegou").',
    dificuldade: 3, tags: ['vírgula', 'conjunções']
  },

  /* ============================================================
     POR-19 — Reescrita de frases e equivalência de sentido
  ============================================================ */
  {
    id: 'F-POR-19-001',
    moduloId: 'POR-19', topicoId: 'POR-19',
    frente: 'O que é REESCRITA e quais são seus requisitos?',
    verso: 'Reescrever é dizer o MESMO conteúdo com OUTRAS palavras. Requisitos: (a) manter o SENTIDO GLOBAL; (b) manter a CORREÇÃO GRAMATICAL (concordância, regência, crase, pontuação); (c) manter a COERÊNCIA. Se alterar o sentido, não é reescrita — é outro texto. Se cometer erro gramatical, não é reescrita — é erro.',
    dificuldade: 1, tags: ['reescrita', 'conceito']
  },
  {
    id: 'F-POR-19-002',
    moduloId: 'POR-19', topicoId: 'POR-19',
    frente: 'O que é TRANSPOSIÇÃO DE VOZ e como ela mantém o sentido?',
    verso: 'É a mudança entre VOZ ATIVA e VOZ PASSIVA (analítica ou sintética). Ex.: "O servidor protocolou o pedido" → "O pedido foi protocolado pelo servidor" (passiva analítica) → "Protocolou-se o pedido" (passiva sintética). O CONTEÚDO e o TEMPO VERBAL são mantidos; só a perspectiva muda. Se mudar o agente ou o tempo, NÃO é reescrita correta.',
    dificuldade: 2, tags: ['transposição de voz']
  },
  {
    id: 'F-POR-19-003',
    moduloId: 'POR-19', topicoId: 'POR-19',
    frente: 'Como substituir CONECTIVOS sem alterar o sentido?',
    verso: 'CAUSA: porque / como / já que / uma vez que (mantêm a causa). CONSEQUÊNCIA: portanto / assim / de modo que. CONCLUSÃO: logo / portanto / por isso. CONCESSÃO: embora / ainda que / mesmo que. OPOSIÇÃO: mas / porém / contudo / todavia. FINALIDADE: para que / a fim de que. Trocar "porque" por "portanto" (causa por conclusão) ALTERA o sentido — a banca explora isso.',
    dificuldade: 2, tags: ['conectivos', 'reescrita']
  },
  {
    id: 'F-POR-19-004',
    moduloId: 'POR-19', topicoId: 'POR-19',
    frente: 'Quais ERROS quebram a equivalência de sentido em uma reescrita?',
    verso: 'Trocar CAUSA por CONSEQUÊNCIA ("porque" → "portanto"). Trocar CONCESSÃO por OPOSIÇÃO ("embora" → "mas"). Mudar o TEMPO VERBAL ("protocolou" → "protocola"). Mudar o AGENTE da ação. Suprimir informação essencial. Criar AMBIGUIDADE. Alterar o MODO verbal ("pode" → "deve"). Cada um desses erros transforma a reescrita em outro texto.',
    dificuldade: 3, tags: ['equivalência', 'erros']
  },
  {
    id: 'F-POR-19-005',
    moduloId: 'POR-19', topicoId: 'POR-19',
    frente: 'Ao reescrever uma frase, o que deve ser verificado para garantir a correção?',
    verso: 'Verificar: CONCORDÂNCIA (verbal e nominal), REGÊNCIA (verbal e nominal), CRASE, PONTUAÇÃO, ORTOGRAFIA, MANUTENÇÃO DO SENTIDO. Ex.: "O diretor elogiou os servidores" → "Os servidores foi elogiado pelo diretor" (ERRADO — concordância). "Assisti o filme" (ERRADO — regência, no sentido de ver). "Vou à Brasília" (ERRADO — crase).',
    dificuldade: 3, tags: ['verificação', 'correção']
  },
  {
    id: 'F-POR-19-006',
    moduloId: 'POR-19', topicoId: 'POR-19',
    frente: 'Como identificar a ÚNICA reescrita correta em uma questão de concurso?',
    verso: 'Elimine por: (a) erro gramatical (concordância, regência, crase, pontuação); (b) alteração de sentido (troca de causa/consequência, concessão/oposição, tempo verbal, agente, modo); (c) supressão de informação essencial; (d) ambiguidade nova. A correta mantém SENTIDO e CORREÇÃO ao mesmo tempo. Compare sempre com o original antes de marcar.',
    dificuldade: 3, tags: ['identificação', 'estratégia']
  },

  /* ============================================================
     RED-20 — Fundamentos da Redação Oficial
  ============================================================ */
  {
    id: 'F-RED-20-001',
    moduloId: 'RED-20', topicoId: 'RED-20',
    frente: 'Quais são os PRINCÍPIOS da Redação Oficial?',
    verso: 'IMPESSOALIDADE (texto do órgão, sem opinião pessoal); CLAREZA (compreensível, sem ambiguidade); PRECISÃO (termos exatos); OBJETIVIDADE (foco no conteúdo); CONCISÃO (forma enxuta); COESÃO e COERÊNCIA (ligação formal + sentido); FORMALIDADE (padrão culto, sem gírias); PADRONIZAÇÃO (uso uniforme de estruturas, formatos e fórmulas).',
    dificuldade: 1, tags: ['princípios', 'redação oficial']
  },
  {
    id: 'F-RED-20-002',
    moduloId: 'RED-20', topicoId: 'RED-20',
    frente: 'Qual a diferença entre FORMALIDADE e REBUSCAMENTO?',
    verso: 'FORMALIDADE: seguir a norma culta com CLAREZA e OBJETIVIDADE. REBUSCAMENTO: uso artificial de palavras difíceis e construções empoladas para "parecer formal" — "Cumpre-nos mui respeitosamente rogar que Vossa Senhoria se digne a deferir...". O Manual de Redação da PR REJEITA o rebuscamento. Formalidade NÃO é obscuridade.',
    dificuldade: 2, tags: ['formalidade', 'rebuscamento']
  },
  {
    id: 'F-RED-20-003',
    moduloId: 'RED-20', topicoId: 'RED-20',
    frente: 'O que exige a IMPESSOALIDADE na Redação Oficial?',
    verso: 'Que o texto NÃO expresse opinião pessoal nem marca do redator — a comunicação é do ÓRGÃO. Por isso: em vez de "eu solicito", "SOLICITA-SE"; em vez de "nós informamos", "INFORMA-SE"; não se usa "na minha opinião". A cordialidade vem da clareza e do padrão culto, não da 1ª pessoa.',
    dificuldade: 2, tags: ['impessoalidade']
  },
  {
    id: 'F-RED-20-004',
    moduloId: 'RED-20', topicoId: 'RED-20',
    frente: 'Qual a diferença entre CLAREZA, PRECISÃO e CONCISÃO?',
    verso: 'CLAREZA: o texto é compreensível para qualquer leitor (sem ambiguidade). PRECISÃO: uso de termos EXATOS, sem vagueza ("servidor ocupante de cargo efetivo" x "funcionário"). CONCISÃO: dizer o máximo com o mínimo de palavras, sem redundância. A Redação Oficial exige as três ao mesmo tempo.',
    dificuldade: 2, tags: ['clareza', 'precisão', 'concisão']
  },
  {
    id: 'F-RED-20-005',
    moduloId: 'RED-20', topicoId: 'RED-20',
    frente: 'Quais são os fundamentos CONSTITUCIONAIS da Redação Oficial?',
    verso: 'A Redação Oficial se ancora nos princípios do art. 37 da CF/88: IMPESSOALIDADE (sem opinião pessoal nem favorecimento), PUBLICIDADE (transparência, com limites legais) e EFICIÊNCIA (resultado, economicidade). Esses princípios condicionam a FORMA e o CONTEÚDO da comunicação pública — não são opcionais.',
    dificuldade: 3, tags: ['fundamentos constitucionais']
  },
  {
    id: 'F-RED-20-006',
    moduloId: 'RED-20', topicoId: 'RED-20',
    frente: 'Quais são os ERROS MAIS COMUNS na Redação Oficial?',
    verso: 'Uso de 1ª pessoa ("solicito" em vez de "solicita-se"). Linguagem rebuscada para "parecer formal". Prolixidade e rodeios. Redundâncias ("subir para cima", "há dois anos atrás"). Gírias, regionalismos, abreviações informais. Ausência de clareza (ambiguidade). Falta de padronização. Ignorar o padrão culto. Misturar registro formal e informal.',
    dificuldade: 3, tags: ['erros', 'redação oficial']
  },

  /* ============================================================
     RED-21 — Manual de Redação da Presidência da República
  ============================================================ */
  {
    id: 'F-RED-21-001',
    moduloId: 'RED-21', topicoId: 'RED-21',
    frente: 'Quais são os principais PRONOMES DE TRATAMENTO e a quem se destinam?',
    verso: 'V.Ex.ª (Vossa Excelência): altas autoridades — Presidente, Ministros, Governadores, Prefeitos, Deputados, Senadores, Ministros de Tribunais, membros do MP. V.S.ª (Vossa Senhoria): demais autoridades, servidores e particulares. V.Mag.ª: reitores. V.Em.ª: cardeais. V.S.: Papa. V.Rev.ma: sacerdotes.',
    dificuldade: 1, tags: ['pronomes de tratamento']
  },
  {
    id: 'F-RED-21-002',
    moduloId: 'RED-21', topicoId: 'RED-21',
    frente: 'Como se dá a CONCORDÂNCIA com pronomes de tratamento?',
    verso: 'O verbo fica SEMPRE na 3ª pessoa, embora o pronome se refira ao interlocutor: "Vossa Excelência DESPACHOU" (não "despachastes"); "Vossa Senhoria SOLICITOU" (não "solicitastes"). Quando se usa "Sua Excelência" (para se referir a alguém, não para tratar), os adjetivos concordam com o gênero do referido — "Sua Excelência, o Ministro, está acompanhado" (ou "acompanhada", se mulher).',
    dificuldade: 2, tags: ['concordância', 'pronomes de tratamento']
  },
  {
    id: 'F-RED-21-003',
    moduloId: 'RED-21', topicoId: 'RED-21',
    frente: 'Qual a diferença entre os fechos RESPEITOSAMENTE e ATENCIOSAMENTE?',
    verso: 'RESPEITOSAMENTE: para autoridades SUPERIORES (Presidente, Ministros, Governadores, etc.) — o remetente é hierarquicamente inferior. ATENCIOSAMENTE: para autoridades de MESMA hierarquia ou INFERIORES, e para particulares em geral. A escolha depende da RELAÇÃO hierárquica entre remetente e destinatário.',
    dificuldade: 2, tags: ['fechos']
  },
  {
    id: 'F-RED-21-004',
    moduloId: 'RED-21', topicoId: 'RED-21',
    frente: 'Quais são as PARTES da estrutura do padrão ofício (3ª edição)?',
    verso: 'CABEÇALHO (brasão, órgão, endereço); IDENTIFICAÇÃO DO EXPEDIENTE (tipo, número, sigla, ano — ex.: Ofício nº 100/2024/SEAD); ENDEREÇAMENTO (nome, cargo, endereço do destinatário); ASSUNTO (resumo em uma linha); TEXTO (introdução, desenvolvimento, conclusão); FECHO (Respeitosamente/Atenciosamente); ASSINATURA (nome e cargo do remetente).',
    dificuldade: 2, tags: ['estrutura', 'padrão ofício']
  },
  {
    id: 'F-RED-21-005',
    moduloId: 'RED-21', topicoId: 'RED-21',
    frente: 'O que foi ABOLIDO pela 3ª edição do Manual de Redação da Presidência da República?',
    verso: 'Formas de tratamento: "Ilustríssimo", "Digníssimo", "D." (Doutor), "DD.". Fecho: "Att." (usar "Atenciosamente" ou "Respeitosamente" por extenso). Documentos: MEMORANDO e AVISO como autônomos — unificados no padrão ofício. Tudo isso foi substituído pelo padrão único e pela nomenclatura atual.',
    dificuldade: 3, tags: ['abolições', 'MRPR 3ª edição']
  },
  {
    id: 'F-RED-21-006',
    moduloId: 'RED-21', topicoId: 'RED-21',
    frente: 'Como se compõem VOCATIVO, ENDEREÇAMENTO e ASSINATURA no padrão ofício?',
    verso: 'VOCATIVO: chama o destinatário, com vírgula — "Excelentíssimo Senhor Ministro," (altas autoridades) ou "Senhor Diretor," (demais). ENDEREÇAMENTO: bloco com nome, cargo e endereço — "A Sua Excelência o Senhor / Ministro de Estado da Educação / Esplanada dos Ministérios, Bloco L, Brasília-DF". ASSINATURA: nome e cargo do remetente — "Fulano de Tal / Diretor de Administração".',
    dificuldade: 3, tags: ['vocativo', 'endereçamento', 'assinatura']
  },

  /* ============================================================
     RED-22 — Documentos e comunicações administrativas
  ============================================================ */
  {
    id: 'F-RED-22-001',
    moduloId: 'RED-22', topicoId: 'RED-22',
    frente: 'Qual a diferença entre OFÍCIO e REQUERIMENTO?',
    verso: 'OFÍCIO: comunicação entre ÓRGÃOS públicos, ou destes com particulares — geralmente INICIADA pela Administração; segue o padrão ofício (MRPR). REQUERIMENTO: PEDIDO do PARTICULAR ao órgão (ou do servidor em relação a direito próprio) — o cidadão INICIA; segue estrutura própria (qualificação, pedido, fundamentação, fecho). O ofício comunica; o requerimento pede.',
    dificuldade: 1, tags: ['ofício', 'requerimento']
  },
  {
    id: 'F-RED-22-002',
    moduloId: 'RED-22', topicoId: 'RED-22',
    frente: 'Qual a diferença entre DECLARAÇÃO e CERTIDÃO?',
    verso: 'DECLARAÇÃO: AFIRMA um fato ou situação, com base no conhecimento de quem assina — "Declaro que o servidor está lotado nesta unidade desde 2020". CERTIDÃO: TRANSCREVE fielmente o que consta em REGISTRO, com fé pública — "Certifico que, revendo os livros, consta o assentamento nº 123". A certidão reproduz registro; a declaração afirma fato.',
    dificuldade: 2, tags: ['declaração', 'certidão']
  },
  {
    id: 'F-RED-22-003',
    moduloId: 'RED-22', topicoId: 'RED-22',
    frente: 'Qual a diferença entre DESPACHO e PARECER?',
    verso: 'DESPACHO: DECISÃO ou encaminhamento dado pela AUTORIDADE competente a um processo ou requerimento — "Defiro o pedido"; "Ao setor X, para providências". PARECER: OPINIÃO TÉCNICA ou jurídica sobre matéria — fundamentada, com análise e conclusão; NÃO é decisão (não vincula a autoridade). O despacho decide; o parecer opina.',
    dificuldade: 2, tags: ['despacho', 'parecer']
  },
  {
    id: 'F-RED-22-004',
    moduloId: 'RED-22', topicoId: 'RED-22',
    frente: 'Qual a diferença entre ATA e RELATÓRIO?',
    verso: 'ATA: registro formal e resumido do que ocorreu em REUNIÃO, assembleia ou sessão — data, participantes, pauta, deliberações; é assinada pelos presentes; sem rasuras (usar "digo" ou ressalva). RELATÓRIO: descrição ordenada de FATOS, atividades ou resultados — com introdução, desenvolvimento e conclusão. A ata registra um evento; o relatório expõe informações sobre um período ou atividade.',
    dificuldade: 2, tags: ['ata', 'relatório']
  },
  {
    id: 'F-RED-22-005',
    moduloId: 'RED-22', topicoId: 'RED-22',
    frente: 'Qual a diferença entre CIRCULAR e COMUNICADO?',
    verso: 'CIRCULAR: comunicação sobre um MESMO assunto a VÁRIOS destinatários (internos ou externos), geralmente numerada e estruturada. COMUNICADO: comunicação BREVE e OBJETIVA — aviso, informação de interesse geral, com menos formalidade que a circular. A circular é mais estruturada; o comunicado é mais simples.',
    dificuldade: 2, tags: ['circular', 'comunicado']
  },
  {
    id: 'F-RED-22-006',
    moduloId: 'RED-22', topicoId: 'RED-22',
    frente: 'O que aconteceu com o MEMORANDO na 3ª edição do MRPR?',
    verso: 'Foi ABOLIDO como documento AUTÔNOMO. Historicamente, era comunicação INTERNA entre unidades do mesmo órgão, com estrutura SIMPLIFICADA (número/ano, local e data, destinatário, assunto, texto, assinatura — SEM cabeçalho nem endereçamento completos). A 3ª edição (2018) unificou ofício, memorando e aviso em um único PADRÃO OFÍCIO. Hoje, todas as comunicações formais usam o padrão ofício.',
    dificuldade: 3, tags: ['memorando', 'abolição']
  },

  /* ============================================================
     RED-23 — Elaboração e interpretação de documentos oficiais
  ============================================================ */
  {
    id: 'F-RED-23-001',
    moduloId: 'RED-23', topicoId: 'RED-23',
    frente: 'Como ESCOLHER o documento adequado a cada situação?',
    verso: 'Comunicação entre ÓRGÃOS → OFÍCIO. Pedido do PARTICULAR → REQUERIMENTO. Registro de REUNIÃO → ATA. Descrição de FATOS/ATIVIDADES → RELATÓRIO. AFIRMAÇÃO de fato → DECLARAÇÃO. TRANSCRIÇÃO de registro → CERTIDÃO. DECISÃO/ENCAMINHAMENTO → DESPACHO. OPINIÃO técnica → PARECER. Comunicação a VÁRIOS → CIRCULAR. Aviso breve → COMUNICADO. A finalidade e quem INICIA definem a escolha.',
    dificuldade: 1, tags: ['escolha do documento']
  },
  {
    id: 'F-RED-23-002',
    moduloId: 'RED-23', topicoId: 'RED-23',
    frente: 'Quais são as PARTES do padrão ofício a serem verificadas antes do envio?',
    verso: 'Verificar se há: CABEÇALHO (brasão, órgão, endereço); IDENTIFICAÇÃO DO EXPEDIENTE (tipo, número, sigla, ano); ENDEREÇAMENTO (nome, cargo, endereço do destinatário); ASSUNTO (resumo em uma linha); TEXTO (introdução, desenvolvimento, conclusão); FECHO (Respeitosamente/Atenciosamente); ASSINATURA (nome e cargo). A ausência de qualquer parte compromete o padrão.',
    dificuldade: 2, tags: ['estrutura', 'verificação']
  },
  {
    id: 'F-RED-23-003',
    moduloId: 'RED-23', topicoId: 'RED-23',
    frente: 'Como REVISAR um documento oficial antes do envio?',
    verso: 'Verificar: (a) SENTIDO (claro, sem ambiguidade); (b) GRAMÁTICA (concordância, regência, crase, pontuação, ortografia); (c) ADEQUAÇÃO ao padrão ofício (estrutura, fecho, tratamento); (d) CLAREZA para o destinatário (linguagem acessível); (e) IMPESSOALIDADE (sem opinião pessoal); (f) CONCISÃO (sem prolixidade nem redundância). A revisão é preventiva — evita erro e retrabalho.',
    dificuldade: 2, tags: ['revisão']
  },
  {
    id: 'F-RED-23-004',
    moduloId: 'RED-23', topicoId: 'RED-23',
    frente: 'Qual a regra de IMPESSOALIDADE em ofício? Dê exemplos de correção.',
    verso: 'Em ofício, não se usa 1ª pessoa nem opinião pessoal. Correções: "Eu solicito" → "SOLICITA-SE"; "Nós informamos" → "INFORMA-SE"; "Na minha opinião" → (eliminar — não cabe em documento oficial); "Achamos que" → (eliminar — não cabe). O texto é do ÓRGÃO, não do servidor. A cordialidade vem do padrão culto e da clareza.',
    dificuldade: 3, tags: ['impessoalidade', 'ofício']
  },
  {
    id: 'F-RED-23-005',
    moduloId: 'RED-23', topicoId: 'RED-23',
    frente: 'Como INTERPRETAR uma comunicação administrativa?',
    verso: 'Identificar: REMETENTE (quem envia), DESTINATÁRIO (a quem se dirige), ASSUNTO (do que trata), FINALIDADE (para quê), PRAZO (se houver), PROVIDÊNCIAS SOLICITADAS (o que se pede). Em ofício, verificar também o tratamento (V.Ex.ª/V.S.ª) e o fecho (Respeitosamente/Atenciosamente) para confirmar a relação hierárquica. A leitura atenta evita erro de encaminhamento.',
    dificuldade: 3, tags: ['interpretação']
  },
  {
    id: 'F-RED-23-006',
    moduloId: 'RED-23', topicoId: 'RED-23',
    frente: 'Como REESCREVER um documento inadequado?',
    verso: 'Corrigir: (a) ESTRUTURA (adequar ao padrão ofício, com todas as partes); (b) VOCABULÁRIO (eliminar rebuscamento, prolixidade, gírias); (c) TRATAMENTO (pronomes corretos, concordância, fecho adequado); (d) GRAMÁTICA (concordância, regência, crase, pontuação); (e) IMPESSOALIDADE (eliminar 1ª pessoa). MANTER o conteúdo essencial do original. A reescrita corrige a forma sem alterar o conteúdo.',
    dificuldade: 3, tags: ['reescrita', 'documento inadequado']
  },
  /* ============================================================
     RED-24 — Produção, revisão e aperfeiçoamento textual
  ============================================================ */
  {
    id: 'F-RED-24-001',
    moduloId: 'RED-24', topicoId: 'RED-24',
    frente: 'Qual a diferença entre DISSERTAÇÃO ARGUMENTATIVA e REDAÇÃO OFICIAL?',
    verso: 'DISSERTAÇÃO: defende uma TESE com ARGUMENTOS (opinião fundamentada); estrutura introdução-desenvolvimento-conclusão; marcas: argumentos, exemplos, dados. REDAÇÃO OFICIAL: COMUNICA institucionalmente (informar, decidir, requerer); estrutura do padrão ofício; marcas: impessoalidade, clareza, concisão, formalidade, padronização. A dissertação argumenta; a redação oficial comunica.',
    dificuldade: 1, tags: ['dissertação', 'redação oficial']
  },
  {
    id: 'F-RED-24-002',
    moduloId: 'RED-24', topicoId: 'RED-24',
    frente: 'Qual a diferença entre TESE e ARGUMENTO em uma dissertação?',
    verso: 'TESE: ideia central defendida — o QUE se defende. ARGUMENTO: razão que sustenta a tese — POR QUE se defende. Ex.: tese = "a transparência exige linguagem acessível"; argumento = "dados abertos sem contexto não informam o cidadão". Sem tese, o texto perde o fio; sem argumentos, a tese fica frágil.',
    dificuldade: 1, tags: ['tese', 'argumento']
  },
  {
    id: 'F-RED-24-003',
    moduloId: 'RED-24', topicoId: 'RED-24',
    frente: 'Quais são as três partes da estrutura DISSERTATIVA e o que cada uma faz?',
    verso: 'INTRODUÇÃO: contextualiza o tema e apresenta a tese (o ponto de vista defendido). DESENVOLVIMENTO: apresenta argumentos e exemplos que sustentam a tese, com progressão temática e coesão entre parágrafos. CONCLUSÃO: retoma a tese e, em geral, apresenta proposta de intervenção. Uma abre; o outro sustenta; a outra fecha.',
    dificuldade: 2, tags: ['introdução', 'desenvolvimento', 'conclusão']
  },
  {
    id: 'F-RED-24-004',
    moduloId: 'RED-24', topicoId: 'RED-24',
    frente: 'Qual a diferença entre COESÃO e COERÊNCIA na produção textual?',
    verso: 'COESÃO: ligação FORMAL entre as partes (conectivos, pronomes, retomadas). COERÊNCIA: ligação de SENTIDO global (o texto faz sentido como um todo). Um texto pode ser coeso e incoerente ("Estudou muito, portanto foi reprovado"). A produção exige as duas — coesão na forma, coerência no conteúdo.',
    dificuldade: 2, tags: ['coesão', 'coerência']
  },
  {
    id: 'F-RED-24-005',
    moduloId: 'RED-24', topicoId: 'RED-24',
    frente: 'Qual a diferença entre REVISÃO e REESCRITA de um texto?',
    verso: 'REVISÃO: verificar o texto pronto — identificar problemas gramaticais, semânticos e estruturais (diagnóstico). REESCRITA: refazer o texto (ou parte) para corrigir os problemas identificados (correção). A revisão diagnostica; a reescrita corrige. Ambas são fases da produção textual.',
    dificuldade: 3, tags: ['revisão', 'reescrita']
  },
  {
    id: 'F-RED-24-006',
    moduloId: 'RED-24', topicoId: 'RED-24',
    frente: 'Quais são os PROBLEMAS mais comuns de ESTRUTURA em uma dissertação?',
    verso: 'Parágrafos sem ideia central (só "encher linguiça"); repetição de ideias (falta de progressão temática); argumento que não dialoga com a tese (quebra de coerência); conclusão que não retoma a tese; parágrafos muito longos (perde o foco) ou muito curtos (não desenvolve); ausência de tese clara. O problema está na ORGANIZAÇÃO do conteúdo — não na gramática. Este app NÃO corrige redação — apenas analisa e reescreve.',
    dificuldade: 3, tags: ['estrutura', 'problemas']
  }


   
];
