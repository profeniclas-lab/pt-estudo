/* ============================================================
   DIAGNÓSTICOS — Módulos de prioridade MÉDIA
   Português e Redação Oficial para Concursos
   Entregues: POR-06, POR-09, POR-12, POR-13, POR-14, RED-24
   Próximo bloco: POR-08 (complementar)
   ============================================================ */

window.DIAGNOSTICS_MEDIA = {

  /* ============================================================
     POR-06 — Fonética, fonologia e ortografia
  ============================================================ */
  'POR-06': {
    id: 'D-POR-06',
    moduloId: 'POR-06',
    itens: [
      /* ---------- Item 1 (fácil) — MC clássica ---------- */
      {
        id: 'D-POR-06-01',
        tipo: 'multipla_escolha',
        subtopico: 'Fonema x letra',
        pergunta: 'Sobre a relação entre fonema e letra, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Fonema e letra têm correspondência exata: cada letra representa um único fonema, e cada fonema é representado por uma única letra.' },
          { id: 'B', texto: 'Fonema é o som produzido; letra é a representação gráfica. Não há correspondência exata: dígrafos usam duas letras para um som, e uma letra pode representar mais de um fonema.' },
          { id: 'C', texto: 'Fonema é a representação gráfica; letra é o som produzido. A correspondência é exata nas línguas de escrita alfabética.' },
          { id: 'D', texto: 'Fonema e letra são sinônimos: ambos se referem à unidade sonora da língua, sem distinção entre som e grafia.' },
          { id: 'E', texto: 'Fonema é a sílaba tônica da palavra; letra é a sílaba átona. A distinção depende da posição na palavra.' }
        ],
        gabarito: 'B',
        explicacao: 'FONEMA = som; LETRA = símbolo gráfico. Não há correspondência exata: "táxi" tem 5 letras e 6 fonemas; "guerra" tem 6 letras e 5 fonemas; "chave" tem 5 letras e 4 fonemas (CH = 1 som). A) nega a diferença. C) inverte. D) iguala. E) confunde com sílaba tônica/átona.'
      },

      /* ---------- Item 2 (fácil) — V/F simples ---------- */
      {
        id: 'D-POR-06-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Dígrafos',
        pergunta: 'Em língua portuguesa, os dígrafos são pares de letras que representam um único fonema — como CH (chave), LH (telha), NH (banho), RR (carro), SS (passo) e GU/QU antes de E/I (guerra, quilo).',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. Dígrafos: CH, LH, NH, RR, SS, SC, SÇ, XC, GU (antes de E/I), QU (antes de E/I), AM/AN/EM/EN/IM/IN/OM/ON/UM/UN no final de palavra. Cada par representa UM som. Não confundir com encontro consonantal, em que as duas consoantes são pronunciadas separadamente (prato, blusa).'
      },

      /* ---------- Item 3 (médio) — V/F sequencial ---------- */
      {
        id: 'D-POR-06-03',
        tipo: 'multipla_escolha',
        subtopico: 'Ortografia: S/Z, X/CH, G/J, porquês',
        pergunta: 'Julgue as afirmações sobre ortografia oficial:\n(__) Emprega-se S nos sufixos -ês, -esa e -isa (português, princesa, poetisa) e Z nos sufixos -ez, -eza e -izar (rapidez, beleza, realizar).\n(__) Emprega-se X após ditongo, após "me" e após "en", como em "caixa", "mexer" e "enxada" — havendo exceções, como "encher" e "encharcar".\n(__) Emprega-se G nas palavras terminadas em -agem, -igem, -ugem (viagem, origem, ferrugem) e J nas palavras de origem indígena ou africana (jibóia, canjica).\n(__) Os porquês distinguem-se pela posição e função: "por que" (pergunta/relativo), "porque" (causa), "porquê" (substantivo), "por quê" (final de frase).\nAssinale a alternativa com a sequência CORRETA, de cima para baixo:',
        alternativas: [
          { id: 'A', texto: 'V, V, V, V.' },
          { id: 'B', texto: 'V, F, V, V.' },
          { id: 'C', texto: 'V, V, F, V.' },
          { id: 'D', texto: 'F, V, V, F.' },
          { id: 'E', texto: 'F, F, V, V.' }
        ],
        gabarito: 'A',
        explicacao: 'Todas corretas. (__1) V: regra S/Z. (__2) V: regra X/CH, com exceções. (__3) V: regra G/J. (__4) V: distinção dos porquês. Todas as afirmações descrevem corretamente a ortografia oficial.'
      },

      /* ---------- Item 4 (médio) — V/F simples ---------- */
      {
        id: 'D-POR-06-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Porquês',
        pergunta: 'Em "Não sei o porquê da falta", o termo "porquê" é grafado junto e com acento porque funciona como substantivo, equivalente a "motivo" ou "razão".',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. "PORQUÊ" (junto, com acento) é SUBSTANTIVO — equivale a "motivo", "razão", e geralmente vem precedido de artigo ("o porquê"). Não confundir com "por que" (pergunta/relativo), "porque" (causa) e "por quê" (final de frase). A função na frase define a grafia.'
      },

      /* ---------- Item 5 (médio-difícil) — Situação ---------- */
      {
        id: 'D-POR-06-05',
        tipo: 'situacao',
        subtopico: 'Aplicação: separação silábica',
        pergunta: 'Um candidato separou as palavras assim: "a-blu-ção", "re-gra", "cha-ve", "car-ro". Sobre a separação silábica, é CORRETO afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Todas as separações estão corretas: não se separam consoante + L ou R (a-blu-ção, re-gra), não se separa o dígrafo CH (cha-ve) e separa-se o dígrafo RR (car-ro).' },
          { id: 'B', texto: 'Apenas "a-blu-ção" está correta, pois BL é encontro consonantal que não pode ser separado, mas "re-gra" separa indevidamente o encontro GR.' },
          { id: 'C', texto: 'Apenas "car-ro" está correta, pois RR é dígrafo que deve ser separado; "cha-ve" separa indevidamente o dígrafo CH.' },
          { id: 'D', texto: 'Apenas "cha-ve" e "car-ro" estão corretas, pois BL e GR devem ser sempre separados na norma culta.' },
          { id: 'E', texto: 'Nenhuma das separações está correta: todas violam regras de separação silábica da norma culta.' }
        ],
        gabarito: 'A',
        explicacao: 'Todas corretas. Consoante + L ou R NÃO se separam da sílaba anterior: "a-blu-ção" e "re-gra" estão corretos. Dígrafos CH, LH, NH, GU, QU não se separam: "cha-ve" está correto. Dígrafos RR, SS, SC, SÇ, XC se separam: "car-ro" está correto. B) "re-gra" está correto. C) "cha-ve" está correto. D) BL/GR não se separam. E) todas estão corretas.'
      },

      /* ---------- Item 6 (difícil) — MC associação ---------- */
      {
        id: 'D-POR-06-06',
        tipo: 'multipla_escolha',
        subtopico: 'Associação: regras de hífen',
        pergunta: 'Associe as palavras ao uso correto ou incorreto do hífen, segundo o Acordo Ortográfico:\n1 — Anti-inflamatório.\n2 — Antirrugas.\n3 — Autoescola.\n4 — Super-homem.\nUSOS\n( ) Hífen com prefixo + H (correto).\n( ) Sem hífen, com duplicação de R (correto).\n( ) Sem hífen, com vogal diferente (correto).\n( ) Hífen com vogal igual (correto).\nA sequência CORRETA, de cima para baixo, é:',
        alternativas: [
          { id: 'A', texto: '1, 2, 3, 4.' },
          { id: 'B', texto: '4, 2, 3, 1.' },
          { id: 'C', texto: '3, 4, 1, 2.' },
          { id: 'D', texto: '2, 3, 4, 1.' },
          { id: 'E', texto: '4, 1, 3, 2.' }
        ],
        gabarito: 'B',
        explicacao: 'SUPER-HOMEM → 4 (prefixo + H: hífen). ANTIRRUGAS → 2 (prefixo + R: sem hífen, duplica R). AUTOESCOLA → 3 (prefixo + vogal diferente: sem hífen). ANTI-INFLAMATÓRIO → 1 (vogal igual: hífen). Sequência: 4, 2, 3, 1.'
      },

      /* ---------- Item 7 (difícil-meta) — Autoavaliação ---------- */
      {
        id: 'D-POR-06-07',
        tipo: 'autoavaliacao',
        subtopico: 'Fonética e ortografia — distinções fundamentais',
        pergunta: 'Você consegue, sem consultar, distinguir: (a) fonema x letra; (b) dígrafo x encontro consonantal; (c) ditongo x hiato; (d) as regras de ortografia (S/Z, X/CH, G/J, porquês); (e) as regras de hífen do Acordo Ortográfico?',
        resposta: 'FONEMA: som. LETRA: símbolo gráfico. DÍGRAFO: 2 letras, 1 som (CH, LH, NH, RR, SS). ENCONTRO CONSONANTAL: 2 consoantes, 2 sons (PR, BL, GR). DITONGO: 2 vogais na mesma sílaba (pai). HIATO: 2 vogais em sílabas diferentes (saída). S x Z: -ês, -esa, -isa (S); -ez, -eza, -izar (Z). X x CH: X após ditongo, "me", "en" (exceção: encher). G x J: G em -agem, -igem; J em palavras de origem indígena e verbos em -jar. PORQUÊS: "por que" (pergunta/relativo), "porque" (causa), "porquê" (substantivo), "por quê" (final). HÍFEN: vogal igual (anti-inflamatório), prefixo + H (super-homem), ex (ex-presidente); sem hífen em vogal diferente (autoescola) e prefixo + R/S (antirrugas).'
      }
    ]
  },

  /* ============================================================
     POR-09 — Classes de palavras I: substantivo, adjetivo, artigo, numeral
  ============================================================ */
  'POR-09': {
    id: 'D-POR-09',
    moduloId: 'POR-09',
    itens: [
      /* ---------- Item 1 (fácil) — MC clássica ---------- */
      {
        id: 'D-POR-09-01',
        tipo: 'multipla_escolha',
        subtopico: 'Substantivo concreto x abstrato',
        pergunta: 'Sobre a classificação dos substantivos em concretos e abstratos, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Substantivos concretos nomeiam seres com existência própria, real ou imaginária (mesa, fada); substantivos abstratos nomeiam seres que dependem de outro para existir (beleza, saudade).' },
          { id: 'B', texto: 'Substantivos concretos nomeiam seres que dependem de outro para existir (amor, trabalho); substantivos abstratos nomeiam seres com existência própria (mesa, fada).' },
          { id: 'C', texto: 'Substantivos concretos nomeiam apenas seres materiais (mesa, cadeira); substantivos abstratos nomeiam seres imaginários (fada, saci) e sentimentos (amor, saudade).' },
          { id: 'D', texto: 'Substantivos concretos e abstratos são sinônimos: ambos nomeiam seres e coisas, sem distinção de existência.' },
          { id: 'E', texto: 'Substantivos concretos nomeiam apenas pessoas e animais; substantivos abstratos nomeiam coisas, lugares e sentimentos.' }
        ],
        gabarito: 'A',
        explicacao: 'CONCRETO: existência própria (real ou imaginária) — mesa, servidor, fada, saci. ABSTRATO: depende de outro ser — beleza, amor, saudade, trabalho. B) inverte; C) restringe concretos a materiais e coloca seres imaginários como abstratos (são concretos); D) iguala; E) restringe indevidamente.'
      },

      /* ---------- Item 2 (fácil) — V/F simples ---------- */
      {
        id: 'D-POR-09-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Substantivo comum x próprio',
        pergunta: 'Substantivo próprio designa um ser específico, individualizado (João, Brasília), enquanto substantivo comum designa seres da mesma espécie (servidor, cidade).',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. PRÓPRIO: ser específico, individualizado (João, Brasília, Amazonas). COMUM: seres da mesma espécie (servidor, cidade, rio). O próprio é grafado com maiúscula e geralmente não admite plural ("os Joões" é exceção); o comum flexiona em número normalmente.'
      },

      /* ---------- Item 3 (médio) — MC I/II/III ---------- */
      {
        id: 'D-POR-09-03',
        tipo: 'multipla_escolha',
        subtopico: 'Substantivo, adjetivo, artigo, numeral',
        pergunta: 'Sobre as classes de palavras, analise:\nI — O substantivo nomeia seres; o adjetivo caracteriza o substantivo; o artigo determina ou indetermina o substantivo; o numeral quantifica, ordena, multiplica ou fraciona o substantivo.\nII — Uma mesma palavra pode pertencer a classes diferentes, conforme o uso: "jovem" é substantivo em "o jovem chegou" e adjetivo em "o servidor jovem chegou".\nIII — O artigo definido (o, a, os, as) generaliza o substantivo; o artigo indefinido (um, uma, uns, umas) determina o substantivo como conhecido.\nEstá CORRETO apenas o que se afirma em:',
        alternativas: [
          { id: 'A', texto: 'I.' },
          { id: 'B', texto: 'II.' },
          { id: 'C', texto: 'III.' },
          { id: 'D', texto: 'I e II.' },
          { id: 'E', texto: 'II e III.' }
        ],
        gabarito: 'D',
        explicacao: 'I correta: definições. II correta: a classe depende do USO ("jovem" pode ser substantivo ou adjetivo). III errada: o artigo DEFINIDO determina (o ser é conhecido); o INDEFINIDO generaliza (não é específico). A afirmação III inverte os conceitos.'
      },

      /* ---------- Item 4 (médio) — V/F simples ---------- */
      {
        id: 'D-POR-09-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Locução adjetiva',
        pergunta: 'A locução adjetiva é uma expressão (geralmente preposição + substantivo) com valor de adjetivo, como em "objeto de ouro" (equivalente a "objeto áureo") e "amor de mãe" (equivalente a "amor materno").',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. LOCUÇÃO ADJETIVA: expressão com valor de adjetivo — "de ouro" = áureo; "de mãe" = materno; "de leão" = leonino; "de cidade" = urbano. Pode ser substituída por um adjetivo equivalente. Não confundir com locução substantiva (como "pé de moleque", que funciona como substantivo).'
      },

      /* ---------- Item 5 (médio-difícil) — Situação ---------- */
      {
        id: 'D-POR-09-05',
        tipo: 'situacao',
        subtopico: 'Aplicação: identificar classe pelo uso',
        pergunta: 'Considere a frase: "O jovem servidor dedicado foi elogiado pelo diretor." Sobre as classes das palavras, é CORRETO afirmar que:',
        alternativas: [
          { id: 'A', texto: '"O" é artigo indefinido; "jovem" é substantivo; "servidor" é adjetivo; "dedicado" é substantivo; "diretor" é advérbio.' },
          { id: 'B', texto: '"O" é artigo definido; "jovem" é adjetivo; "servidor" é substantivo; "dedicado" é adjetivo; "diretor" é substantivo.' },
          { id: 'C', texto: '"O" é pronome pessoal; "jovem" é substantivo; "servidor" é adjetivo; "dedicado" é substantivo; "diretor" é adjetivo.' },
          { id: 'D', texto: '"O" é artigo definido; "jovem" é substantivo; "servidor" é adjetivo; "dedicado" é numeral; "diretor" é advérbio.' },
          { id: 'E', texto: '"O" é preposição; "jovem" é adjetivo; "servidor" é substantivo; "dedicado" é verbo; "diretor" é adjetivo.' }
        ],
        gabarito: 'B',
        explicacao: '"O" = ARTIGO definido (determina "servidor"). "Jovem" = ADJETIVO (caracteriza "servidor"). "Servidor" = SUBSTANTIVO (nomeia). "Dedicado" = ADJETIVO (caracteriza "servidor"). "Diretor" = SUBSTANTIVO (nomeia, aqui com função de agente da passiva). A) e C) e D) e E) classificam incorretamente.'
      },

      /* ---------- Item 6 (difícil) — MC associação ---------- */
      {
        id: 'D-POR-09-06',
        tipo: 'multipla_escolha',
        subtopico: 'Associação: classes de palavras I',
        pergunta: 'Associe cada palavra ao tipo de substantivo/numeral correspondente:\n1 — "Cardume".\n2 — "Pedra" (primitivo).\n3 — "Pedreiro" (derivado).\n4 — "Dobro" (numeral).\nCLASSIFICAÇÕES\n( ) Substantivo coletivo.\n( ) Substantivo derivado.\n( ) Substantivo primitivo.\n( ) Numeral multiplicativo.\nA sequência CORRETA, de cima para baixo, é:',
        alternativas: [
          { id: 'A', texto: '1, 3, 2, 4.' },
          { id: 'B', texto: '4, 3, 2, 1.' },
          { id: 'C', texto: '2, 1, 4, 3.' },
          { id: 'D', texto: '3, 4, 1, 2.' },
          { id: 'E', texto: '4, 2, 3, 1.' }
        ],
        gabarito: 'A',
        explicacao: 'CARDUME → 1 (coletivo — conjunto de peixes). PEDREIRO → 3 (derivado de pedra). PEDRA → 2 (primitivo). DOBRO → 4 (numeral multiplicativo). Sequência: 1, 3, 2, 4.'
      },

      /* ---------- Item 7 (difícil-meta) — Autoavaliação ---------- */
      {
        id: 'D-POR-09-07',
        tipo: 'autoavaliacao',
        subtopico: 'Classes de palavras I — distinções fundamentais',
        pergunta: 'Você consegue, sem consultar, distinguir: (a) substantivo concreto x abstrato; (b) substantivo comum x próprio; (c) adjetivo x locução adjetiva; (d) artigo definido x indefinido; (e) numeral cardinal x ordinal x multiplicativo x fracionário; (f) a mudança de classe conforme o uso?',
        resposta: 'CONCRETO: existência própria (real ou imaginária). ABSTRATO: depende de outro ser. COMUM: espécie. PRÓPRIO: ser específico. ADJETIVO: palavra única que caracteriza. LOCUÇÃO ADJETIVA: expressão com valor de adjetivo ("de ouro"). DEFINIDO: determina (o/a). INDEFINIDO: generaliza (um/uma). CARDINAL: quantidade (dois). ORDINAL: ordem (segundo). MULTIPLICATIVO: multiplicação (dobro). FRACIONÁRIO: fração (meio). A classe depende do USO ("jovem" pode ser substantivo ou adjetivo).'
      }
    ]
  },

  /* ============================================================
     POR-12 — Classes de palavras III: advérbio, preposição, conjunção, interjeição
  ============================================================ */
  'POR-12': {
    id: 'D-POR-12',
    moduloId: 'POR-12',
    itens: [
      /* ---------- Item 1 (fácil) — MC clássica ---------- */
      {
        id: 'D-POR-12-01',
        tipo: 'multipla_escolha',
        subtopico: 'Advérbio x adjetivo',
        pergunta: 'Sobre a diferença entre advérbio e adjetivo, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Advérbio e adjetivo são sinônimos: ambos modificam o substantivo, indicando qualidade ou estado.' },
          { id: 'B', texto: 'Advérbio é invariável e modifica verbo, adjetivo ou outro advérbio (falou calmamente); adjetivo é variável e caracteriza substantivo (servidor calmo).' },
          { id: 'C', texto: 'Advérbio é variável e caracteriza substantivo; adjetivo é invariável e modifica verbo ou outro advérbio.' },
          { id: 'D', texto: 'Advérbio indica circunstância e modifica substantivo; adjetivo indica qualidade e modifica verbo.' },
          { id: 'E', texto: 'Advérbio e adjetivo se distinguem apenas pela posição na frase: o primeiro vem antes do verbo; o segundo, depois do substantivo.' }
        ],
        gabarito: 'B',
        explicacao: 'ADVÉRBIO: INVARIÁVEL, modifica verbo/adjetivo/advérbio ("falou calmamente"; "muito bonito"; "muito bem"). ADJETIVO: VARIÁVEL, caracteriza substantivo ("servidor calmo"; "servidores calmos"). A) iguala; C) inverte; D) inverte; E) inventa critério de posição.'
      },

      /* ---------- Item 2 (fácil) — V/F simples ---------- */
      {
        id: 'D-POR-12-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Coordenativa x subordinativa',
        pergunta: 'Conjunções coordenativas ligam orações independentes (nenhuma é termo da outra); conjunções subordinativas ligam oração dependente (uma é termo da outra), como em "Estudou e trabalhou" (coordenada) e "Estudou porque quis" (subordinada).',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. COORDENATIVAS: ligam orações independentes — "Estudou E trabalhou"; "Estudou, MAS não passou". SUBORDINATIVAS: ligam oração dependente (que completa ou modifica a principal) — "Estudou PORQUE quis"; "EMBORA estivesse doente, veio". A dependência sintática é a chave.'
      },

      /* ---------- Item 3 (médio) — V/F sequencial ---------- */
      {
        id: 'D-POR-12-03',
        tipo: 'multipla_escolha',
        subtopico: 'Valores semânticos das conjunções',
        pergunta: 'Julgue as afirmações sobre o valor semântico das conjunções:\n(__) Em "Não veio PORQUE adoeceu", o conectivo introduz causa.\n(__) Em "Estudou muito, PORTANTO passou", o conectivo introduz conclusão.\n(__) Em "EMBORA estivesse doente, veio", o conectivo introduz concessão.\n(__) Em "Estudou PARA QUE passasse", o conectivo introduz consequência.\nAssinale a alternativa com a sequência CORRETA, de cima para baixo:',
        alternativas: [
          { id: 'A', texto: 'V, V, V, V.' },
          { id: 'B', texto: 'V, V, V, F.' },
          { id: 'C', texto: 'V, F, V, V.' },
          { id: 'D', texto: 'F, V, V, F.' },
          { id: 'E', texto: 'F, F, V, V.' }
        ],
        gabarito: 'B',
        explicacao: '(__1) V: "porque" = causa. (__2) V: "portanto" = conclusão. (__3) V: "embora" = concessão. (__4) F: "para que" introduz FINALIDADE (intenção), não consequência. Consequência seria "de modo que", "tão...que". A banca troca finalidade por consequência.'
      },

      /* ---------- Item 4 (médio) — V/F simples ---------- */
      {
        id: 'D-POR-12-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Palavras homófonas (mas/mais, mal/mau)',
        pergunta: 'Em "Estudou muito, mas não passou", a palavra "mas" é conjunção adversativa; em "Quero mais tempo", a palavra "mais" é advérbio de intensidade. Do mesmo modo, "mal" é advérbio (falou mal) e "mau" é adjetivo (servidor mau).',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. MAS (conjunção adversativa — "Estudou, MAS não passou") x MAIS (advérbio de intensidade — "Quero MAIS tempo"). MAL (advérbio — "Falou MAL") x MAU (adjetivo — "Servidor MAU"). São armadilhas clássicas de homofonia.'
      },

      /* ---------- Item 5 (médio-difícil) — Situação ---------- */
      {
        id: 'D-POR-12-05',
        tipo: 'situacao',
        subtopico: 'Aplicação: analisar valor semântico',
        pergunta: 'Considere o trecho: "O servidor chegou cedo AO órgão e trabalhou COM afinco, MAS não conseguiu concluir a tarefa PORQUE faltaram documentos." Os conectivos destacados (AO, COM, MAS, PORQUE) introduzem, respectivamente:',
        alternativas: [
          { id: 'A', texto: 'Lugar, modo, oposição, causa.' },
          { id: 'B', texto: 'Modo, lugar, causa, oposição.' },
          { id: 'C', texto: 'Tempo, modo, causa, oposição.' },
          { id: 'D', texto: 'Lugar, instrumento, concessão, conclusão.' },
          { id: 'E', texto: 'Lugar, companhia, oposição, consequência.' }
        ],
        gabarito: 'A',
        explicacao: 'AO órgão = LUGAR (a + o órgão). COM afinco = MODO (com + substantivo abstrato). MAS = OPOSIÇÃO (adversativa). PORQUE = CAUSA. B) inverte os dois primeiros. C) "ao órgão" indica lugar (não tempo). D) "com afinco" é modo (não instrumento); "mas" é oposição (não concessão); "porque" é causa (não conclusão). E) "com afinco" é modo (não companhia); "porque" é causa (não consequência).'
      },

      /* ---------- Item 6 (difícil) — MC associação ---------- */
      {
        id: 'D-POR-12-06',
        tipo: 'multipla_escolha',
        subtopico: 'Associação: conjunções e valores semânticos',
        pergunta: 'Associe as conjunções ao valor semântico que introduzem:\n1 — "Embora".\n2 — "Portanto".\n3 — "Porque".\n4 — "Se".\nVALORES\n( ) Conclusão.\n( ) Causa.\n( ) Condição.\n( ) Concessão.\nA sequência CORRETA, de cima para baixo, é:',
        alternativas: [
          { id: 'A', texto: '1, 2, 3, 4.' },
          { id: 'B', texto: '2, 3, 4, 1.' },
          { id: 'C', texto: '3, 4, 1, 2.' },
          { id: 'D', texto: '4, 1, 2, 3.' },
          { id: 'E', texto: '2, 4, 3, 1.' }
        ],
        gabarito: 'B',
        explicacao: 'PORTANTO → 2 (conclusão). PORQUE → 3 (causa). SE → 4 (condição). EMBORA → 1 (concessão). Sequência: 2, 3, 4, 1.'
      },

      /* ---------- Item 7 (difícil-meta) — Autoavaliação ---------- */
      {
        id: 'D-POR-12-07',
        tipo: 'autoavaliacao',
        subtopico: 'Classes III — distinções fundamentais',
        pergunta: 'Você consegue, sem consultar, distinguir: (a) advérbio x adjetivo; (b) preposição x conjunção; (c) coordenativa x subordinativa; (d) conjunções causais, concessivas, condicionais, consecutivas, finais, conclusivas; (e) palavras homófonas "mas/mais", "mal/mau"?',
        resposta: 'ADVÉRBIO: invariável, modifica verbo/adjetivo/advérbio. ADJETIVO: variável, caracteriza substantivo. PREPOSIÇÃO: liga TERMOS na oração (a, de, com, em). CONJUNÇÃO: liga ORAÇÕES. COORDENATIVA: orações independentes (e, mas, ou, portanto, pois). SUBORDINATIVA: oração dependente (que, porque, embora, se, tão...que, para que, quando). CAUSAIS: porque, pois, já que. CONCESSIVAS: embora, ainda que, mesmo que. CONDICIONAIS: se, caso, desde que. CONSECUTIVAS: tão...que. FINAIS: para que. CONCLUSIVAS: logo, portanto. HOMÓFONAS: MAS (adversativa) x MAIS (advérbio); MAL (advérbio) x MAU (adjetivo).'
      }
    ]
  },

  /* ============================================================
     POR-13 — Sintaxe: termos da oração
  ============================================================ */
  'POR-13': {
    id: 'D-POR-13',
    moduloId: 'POR-13',
    itens: [
      /* ---------- Item 1 (fácil) — MC clássica ---------- */
      {
        id: 'D-POR-13-01',
        tipo: 'multipla_escolha',
        subtopico: 'Tipos de sujeito',
        pergunta: 'Sobre os tipos de sujeito, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Sujeito simples tem dois ou mais núcleos; sujeito composto tem um único núcleo; sujeito oculto não existe na oração; sujeito indeterminado é o mesmo que sujeito inexistente.' },
          { id: 'B', texto: 'Sujeito simples tem um único núcleo; sujeito composto tem dois ou mais núcleos; sujeito oculto não está expresso, mas é identificável; sujeito indeterminado não se pode ou não se quer identificar; sujeito inexistente ocorre com verbos impessoais.' },
          { id: 'C', texto: 'Sujeito simples e composto se distinguem pela posição em relação ao verbo; sujeito oculto e indeterminado são sinônimos; sujeito inexistente é o que está no final da oração.' },
          { id: 'D', texto: 'Todos os sujeitos são simples, pois toda oração tem apenas um sujeito; as demais classificações se referem ao predicado.' },
          { id: 'E', texto: 'Sujeito inexistente é o que não pratica ação por ser inanimado; sujeito indeterminado é o que não existe na oração; sujeito oculto é o que está subentendido.' }
        ],
        gabarito: 'B',
        explicacao: 'SIMPLES: 1 núcleo. COMPOSTO: 2+ núcleos. OCULTO: não expresso, mas identificável ("Chegou tarde; estava cansado" — ele). INDETERMINADO: não se identifica ("Roubaram o carro"). INEXISTENTE: verbo impessoal ("Havia muitos"). A) inverte e iguala; C) confunde; D) nega a classificação; E) confunde.'
      },

      /* ---------- Item 2 (fácil) — V/F simples ---------- */
      {
        id: 'D-POR-13-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Objeto direto x indireto',
        pergunta: 'Objeto direto é o complemento de verbo transitivo direto, sem preposição obrigatória ("O servidor protocolou o pedido"); objeto indireto é o complemento de verbo transitivo indireto, com preposição ("O servidor obedeceu ao regulamento").',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. OBJETO DIRETO: sem preposição obrigatória (verbo transitivo direto — "protocolou o pedido"). OBJETO INDIRETO: com preposição (verbo transitivo indireto — "obedeceu AO regulamento"). A pergunta "o quê?" (direto) x "a quem? de quê? em quê?" (indireto) ajuda na identificação.'
      },

      /* ---------- Item 3 (médio) — MC I/II/III ---------- */
      {
        id: 'D-POR-13-03',
        tipo: 'multipla_escolha',
        subtopico: 'Complemento nominal x adjunto adnominal',
        pergunta: 'Sobre a diferença entre complemento nominal e adjunto adnominal, analise:\nI — O complemento nominal completa o sentido de um NOME (substantivo, adjetivo ou advérbio), sempre com preposição, como em "a obediência ao regulamento" e "favorável à proposta".\nII — O adjunto adnominal caracteriza um SUBSTANTIVO, sem preposição obrigatória (ou com preposição caracterizando), como em "o servidor dedicado" e "a casa de pedra".\nIII — Objeto indireto e complemento nominal são sinônimos: ambos completam nomes e verbos com preposição, sem distinção estrutural.\nEstá CORRETO apenas o que se afirma em:',
        alternativas: [
          { id: 'A', texto: 'I.' },
          { id: 'B', texto: 'II.' },
          { id: 'C', texto: 'III.' },
          { id: 'D', texto: 'I e II.' },
          { id: 'E', texto: 'II e III.' }
        ],
        gabarito: 'D',
        explicacao: 'I correta: CN completa NOME, com preposição. II correta: AA caracteriza SUBSTANTIVO, sem preposição obrigatória. III errada: OBJETO INDIRETO completa VERBO; COMPLEMENTO NOMINAL completa NOME. São funções distintas — o termo antecedente (verbo x nome) é a chave.'
      },

      /* ---------- Item 4 (médio) — V/F simples ---------- */
      {
        id: 'D-POR-13-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Sujeito inexistente',
        pergunta: 'Nas orações "Havia muitos servidores" e "Faz dois anos", o sujeito é inexistente, pois os verbos "haver" (existir) e "fazer" (tempo) são impessoais.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. "Haver" no sentido de existir e "fazer" indicando tempo são IMPESSOAIS — não têm sujeito. "Havia muitos servidores" (não "haviam"); "Faz dois anos" (não "fazem"). Não confundir com "existir" (pessoal): "Existiam muitos servidores".'
      },

      /* ---------- Item 5 (médio-difícil) — Situação ---------- */
      {
        id: 'D-POR-13-05',
        tipo: 'situacao',
        subtopico: 'Aplicação: analisar função sintática',
        pergunta: 'Considere a oração: "O diretor nomeou o servidor coordenador". Sobre a função sintática de "coordenador", é CORRETO afirmar que:',
        alternativas: [
          { id: 'A', texto: '"Coordenador" é objeto direto, pois completa o sentido de "nomeou" — o diretor nomeou alguém (o coordenador).' },
          { id: 'B', texto: '"Coordenador" é predicativo do objeto, pois atribui qualidade/estado ao objeto "o servidor" — o diretor nomeou o servidor (como) coordenador.' },
          { id: 'C', texto: '"Coordenador" é adjunto adnominal, pois caracteriza o substantivo "servidor", indicando sua profissão.' },
          { id: 'D', texto: '"Coordenador" é aposto, pois explica o termo "servidor", identificando-o como coordenador.' },
          { id: 'E', texto: '"Coordenador" é vocativo, pois chama o interlocutor — o diretor nomeou o servidor, ó coordenador.' }
        ],
        gabarito: 'B',
        explicacao: 'PREDICATIVO DO OBJETO: atribui qualidade/estado ao objeto direto ("o servidor"), com verbo transitivo direto ("nomeou"). "O diretor nomeou o servidor COORDENADOR" = "o diretor nomeou o servidor COMO coordenador". A) confunde com OD (o OD é "o servidor"). C) AA caracteriza substantivo sem verbo de ligação/transitivo (aqui há predicativo). D) aposto explica (não é o caso). E) vocativo chama — aqui não há interlocutor.'
      },

      /* ---------- Item 6 (difícil) — MC associação ---------- */
      {
        id: 'D-POR-13-06',
        tipo: 'multipla_escolha',
        subtopico: 'Associação: funções sintáticas',
        pergunta: 'Associe os termos destacados à sua função sintática:\n1 — "O SERVIDOR protocolou o pedido" (servidor).\n2 — "Protocolou O PEDIDO" (o pedido).\n3 — "Chegou ONTEM" (ontem).\n4 — "O diretor, HOMEM EXPERIENTE, decidiu" (homem experiente).\nFUNÇÕES\n( ) Adjunto adverbial.\n( ) Aposto.\n( ) Sujeito.\n( ) Objeto direto.\nA sequência CORRETA, de cima para baixo, é:',
        alternativas: [
          { id: 'A', texto: '1, 2, 3, 4.' },
          { id: 'B', texto: '4, 2, 3, 1.' },
          { id: 'C', texto: '3, 4, 1, 2.' },
          { id: 'D', texto: '2, 3, 4, 1.' },
          { id: 'E', texto: '4, 1, 3, 2.' }
        ],
        gabarito: 'C',
        explicacao: 'ONTEM → 3 (adjunto adverbial de tempo). HOMEM EXPERIENTE → 4 (aposto explicativo). SERVIDOR → 1 (sujeito). O PEDIDO → 2 (objeto direto). Sequência: 3, 4, 1, 2.'
      },

      /* ---------- Item 7 (difícil-meta) — Autoavaliação ---------- */
      {
        id: 'D-POR-13-07',
        tipo: 'autoavaliacao',
        subtopico: 'Sintaxe — distinções fundamentais',
        pergunta: 'Você consegue, sem consultar, identificar os termos da oração: tipos de sujeito, predicação verbal, objeto direto x indireto, complemento nominal x adjunto adnominal, predicativo do sujeito x do objeto, adjunto adverbial, agente da passiva, aposto e vocativo?',
        resposta: 'SUJEITO: simples (1 núcleo), composto (2+), oculto (identificável), indeterminado (não se identifica), inexistente (impessoal). VERBOS: intransitivo, transitivo direto, indireto, bitransitivo, de ligação. OD: sem prep. OI: com prep. CN: completa NOME. AA: caracteriza SUBSTANTIVO. PREDICATIVO: atribui qualidade/estado (com VL ou VT). ADJ. ADVERBIAL: circunstância. AGENTE DA PASSIVA: com "por". APOSTO: explica. VOCATIVO: chama.'
      }
    ]
  },

  /* ============================================================
     POR-14 — Período simples e composto
  ============================================================ */
  'POR-14': {
    id: 'D-POR-14',
    moduloId: 'POR-14',
    itens: [
      /* ---------- Item 1 (fácil) — MC clássica ---------- */
      {
        id: 'D-POR-14-01',
        tipo: 'multipla_escolha',
        subtopico: 'Coordenação x subordinação',
        pergunta: 'Sobre a diferença entre coordenação e subordinação, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Coordenação liga orações independentes (cada uma com sentido próprio); subordinação liga oração dependente (que é termo da principal).' },
          { id: 'B', texto: 'Coordenação liga oração dependente (que é termo da principal); subordinação liga orações independentes (cada uma com sentido próprio).' },
          { id: 'C', texto: 'Coordenação e subordinação são sinônimos: ambas ligam orações por conjunção, sem distinção de dependência.' },
          { id: 'D', texto: 'Coordenação ocorre apenas em orações reduzidas; subordinação, apenas em orações desenvolvidas.' },
          { id: 'E', texto: 'Coordenação exige conjunção; subordinação dispensa conjunção. A distinção está na presença ou ausência do conectivo.' }
        ],
        gabarito: 'A',
        explicacao: 'COORDENAÇÃO: orações INDEPENDENTES ("Chegou E cumprimentou"; "Estudou, MAS não passou"). SUBORDINAÇÃO: oração DEPENDENTE que é termo da principal ("Espero QUE ele venha"; "Embora estivesse doente, veio"). B) inverte; C) iguala; D) confunde com desenvolvida/reduzida; E) inventa critério.'
      },

      /* ---------- Item 2 (fácil) — V/F simples ---------- */
      {
        id: 'D-POR-14-02',
        tipo: 'verdadeiro_falso',
        subtopico: '"Que" integrante x "que" relativo',
        pergunta: 'Em "Espero que ele venha", o "que" é conjunção integrante e a oração é subordinada substantiva; em "O servidor que chegou é dedicado", o "que" é pronome relativo e a oração é subordinada adjetiva.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. "QUE" conjunção INTEGRANTE → oração SUBSTANTIVA ("Espero QUE ele venha" — a oração completa o verbo "espero"). "QUE" pronome RELATIVO → oração ADJETIVA ("O servidor QUE chegou" — a oração caracteriza "servidor"). Teste: substituir por "o qual" — só funciona na adjetiva.'
      },

      /* ---------- Item 3 (médio) — MC I/II/III ---------- */
      {
        id: 'D-POR-14-03',
        tipo: 'multipla_escolha',
        subtopico: 'Tipos de orações subordinadas',
        pergunta: 'Sobre os tipos de orações subordinadas, analise:\nI — As subordinadas substantivas exercem função de substantivo (sujeito, objeto direto, objeto indireto, complemento nominal, predicativo, aposto).\nII — As subordinadas adjetivas exercem função de adjetivo (caracterizam um substantivo antecedente) e podem ser restritivas ou explicativas.\nIII — As subordinadas adverbiais exercem função de advérbio (indicam circunstância — causa, concessão, condição, tempo, fim, etc.).\nEstá CORRETO apenas o que se afirma em:',
        alternativas: [
          { id: 'A', texto: 'I.' },
          { id: 'B', texto: 'II.' },
          { id: 'C', texto: 'III.' },
          { id: 'D', texto: 'I e II.' },
          { id: 'E', texto: 'I, II e III.' }
        ],
        gabarito: 'E',
        explicacao: 'Todas corretas. SUBSTANTIVA: função de substantivo ("Espero QUE ele venha" — OD). ADJETIVA: função de adjetivo ("O servidor QUE chegou" — caracteriza). ADVERBIAL: função de advérbio ("Não veio PORQUE adoeceu" — causa). A função sintática é a chave da classificação.'
      },

      /* ---------- Item 4 (médio) — V/F simples ---------- */
      {
        id: 'D-POR-14-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Orações reduzidas',
        pergunta: 'Orações reduzidas são aquelas cujo verbo aparece em forma nominal (infinitivo, gerúndio ou particípio), como em "AO CHEGAR, cumprimentou" (infinitivo) e "EMBORA CANSADO, veio" (particípio).',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. REDUZIDAS: verbo em forma NOMINAL (infinitivo -r; gerúndio -ndo; particípio -do). "AO CHEGAR" (infinitivo — temporal); "EMBORA CANSADO" (particípio — concessiva); "SAINDO, cumprimentou" (gerúndio — temporal). As desenvolvidas usam verbo finito + conjunção.'
      },

      /* ---------- Item 5 (médio-difícil) — Situação ---------- */
      {
        id: 'D-POR-14-05',
        tipo: 'situacao',
        subtopico: 'Aplicação: classificar oração em contexto',
        pergunta: 'Considere o período: "O servidor que chegou cedo protocolou o pedido, embora estivesse cansado." Sobre as orações, é CORRETO afirmar que:',
        alternativas: [
          { id: 'A', texto: '"Que chegou cedo" é oração subordinada adjetiva restritiva; "embora estivesse cansado" é oração subordinada adverbial concessiva.' },
          { id: 'B', texto: '"Que chegou cedo" é oração subordinada substantiva objetiva direta; "embora estivesse cansado" é oração coordenada adversativa.' },
          { id: 'C', texto: '"Que chegou cedo" é oração subordinada adverbial temporal; "embora estivesse cansado" é oração subordinada adjetiva explicativa.' },
          { id: 'D', texto: '"Que chegou cedo" é oração coordenada assindética; "embora estivesse cansado" é oração subordinada causal.' },
          { id: 'E', texto: '"Que chegou cedo" é oração subordinada adjetiva explicativa; "embora estivesse cansado" é oração subordinada adverbial condicional.' }
        ],
        gabarito: 'A',
        explicacao: '"QUE CHEGOU CEDO" — adjetiva RESTRITIVA (sem vírgula — restringe "servidor", indicando apenas os que chegaram cedo). "EMBORA ESTIVESSE CANSADO" — adverbial CONCESSIVA (admite e supera: o cansaço não impediu o protocolo). B) confunde com substantiva; "embora" não é coordenativa. C) "que chegou" não é temporal. D) não há coordenação assindética; "embora" não é causal. E) não há vírgula antes de "que", então não é explicativa; "embora" não é condicional.'
      },

      /* ---------- Item 6 (difícil) — MC associação ---------- */
      {
        id: 'D-POR-14-06',
        tipo: 'multipla_escolha',
        subtopico: 'Associação: conjunções e tipos de subordinadas',
        pergunta: 'Associe as conjunções ao tipo de oração subordinada adverbial que introduzem:\n1 — "Porque".\n2 — "Embora".\n3 — "Se".\n4 — "Para que".\nTIPOS\n( ) Condicional.\n( ) Final.\n( ) Causal.\n( ) Concessiva.\nA sequência CORRETA, de cima para baixo, é:',
        alternativas: [
          { id: 'A', texto: '1, 2, 3, 4.' },
          { id: 'B', texto: '3, 4, 1, 2.' },
          { id: 'C', texto: '2, 3, 4, 1.' },
          { id: 'D', texto: '4, 1, 2, 3.' },
          { id: 'E', texto: '3, 1, 4, 2.' }
        ],
        gabarito: 'B',
        explicacao: 'SE → 3 (condicional). PARA QUE → 4 (final). PORQUE → 1 (causal). EMBORA → 2 (concessiva). Sequência: 3, 4, 1, 2.'
      },

      /* ---------- Item 7 (difícil-meta) — Autoavaliação ---------- */
      {
        id: 'D-POR-14-07',
        tipo: 'autoavaliacao',
        subtopico: 'Período composto — distinções fundamentais',
        pergunta: 'Você consegue, sem consultar, distinguir: (a) coordenação x subordinação; (b) subordinadas substantivas x adjetivas x adverbiais; (c) adjetivas restritivas x explicativas; (d) orações reduzidas x desenvolvidas; (e) os tipos de adverbiais (causal, concessiva, condicional, consecutiva, final, temporal, proporcional, comparativa, conformativa)?',
        resposta: 'COORDENAÇÃO: independentes. SUBORDINAÇÃO: dependentes. SUBSTANTIVA: função de substantivo (sujeito, OD, OI, CN, predicativo, aposto). ADJETIVA: caracteriza antecedente (restritiva — sem vírgula; explicativa — com vírgula). ADVERBIAL: circunstância (causal, concessiva, condicional, consecutiva, final, temporal, proporcional, comparativa, conformativa). REDUZIDA: verbo em forma nominal (infinitivo, gerúndio, particípio). DESENVOLVIDA: verbo finito + conjunção/pronome relativo.'
      }
    ]
  },

  /* ============================================================
     RED-24 — Produção, revisão e aperfeiçoamento textual
  ============================================================ */
  'RED-24': {
    id: 'D-RED-24',
    moduloId: 'RED-24',
    itens: [
      /* ---------- Item 1 (fácil) — MC clássica ---------- */
      {
        id: 'D-RED-24-01',
        tipo: 'multipla_escolha',
        subtopico: 'Dissertação x redação oficial',
        pergunta: 'Sobre a diferença entre dissertação argumentativa e redação oficial, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Dissertação argumentativa e redação oficial são sinônimos: ambas defendem uma tese com argumentos e conclusion, seguindo a mesma estrutura.' },
          { id: 'B', texto: 'Dissertação argumentativa tem por objetivo defender uma tese com argumentos (opinião fundamentada); redação oficial tem por objetivo comunicar institucionalmente (informar, decidir, requerer), com impessoalidade e padronização.' },
          { id: 'C', texto: 'Dissertação argumentativa tem por objetivo comunicar institucionalmente; redação oficial tem por objetivo defender uma tese com argumentos, sem padronização.' },
          { id: 'D', texto: 'Dissertação argumentativa exige impessoalidade e padronização; redação oficial exige opinião pessoal e estrutura livre, sem formalidade.' },
          { id: 'E', texto: 'Dissertação argumentativa e redação oficial se distinguem apenas pela extensão: a primeira é mais longa; a segunda, mais curta.' }
        ],
        gabarito: 'B',
        explicacao: 'DISSERTAÇÃO: defende TESE com ARGUMENTOS (opinião fundamentada). REDAÇÃO OFICIAL: COMUNICA institucionalmente (informar, decidir, requerer), com impessoalidade, clareza, concisão, formalidade e padronização. A) iguala; C) inverte; D) inverte; E) inventa critério de extensão.'
      },

      /* ---------- Item 2 (fácil) — V/F simples ---------- */
      {
        id: 'D-RED-24-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Tese x argumento',
        pergunta: 'Em uma dissertação, a tese é a ideia central defendida; o argumento é a razão que sustenta a tese. Uma dissertação bem construída precisa de tese clara e argumentos consistentes.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. TESE: o que se defende ("a transparência exige mais que publicar dados"). ARGUMENTO: por que se defende ("dados abertos sem contexto não informam"; "linguagem técnica exclui o cidadão"). Sem tese clara, o texto perde o fio; sem argumentos, a tese fica frágil.'
      },

      /* ---------- Item 3 (médio) — MC I/II/III ---------- */
      {
        id: 'D-RED-24-03',
        tipo: 'multipla_escolha',
        subtopico: 'Estrutura dissertativa',
        pergunta: 'Sobre a estrutura da dissertação argumentativa, analise:\nI — A introdução contextualiza o tema e apresenta a tese, indicando o ponto de vista que será defendido.\nII — O desenvolvimento apresenta argumentos e exemplos que sustentam a tese, com progressão temática e coesão entre parágrafos.\nIII — A conclusão retoma a tese e pode apresentar proposta de intervenção, fechando o texto.\nEstá CORRETO apenas o que se afirma em:',
        alternativas: [
          { id: 'A', texto: 'I.' },
          { id: 'B', texto: 'II.' },
          { id: 'C', texto: 'III.' },
          { id: 'D', texto: 'I e II.' },
          { id: 'E', texto: 'I, II e III.' }
        ],
        gabarito: 'E',
        explicacao: 'Todas corretas. INTRODUÇÃO: contextualização + tese. DESENVOLVIMENTO: argumentos + exemplos + progressão + coesão. CONCLUSÃO: retomada da tese + proposta de intervenção. A estrutura clássica da dissertação argumentativa.'
      },

      /* ---------- Item 4 (médio) — V/F simples ---------- */
      {
        id: 'D-RED-24-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Coesão x coerência na produção',
        pergunta: 'Na produção textual, a coesão é a ligação formal entre as partes (conectivos, pronomes, retomadas) e a coerência é a ligação de sentido global (o texto faz sentido como um todo); ambas são exigidas em qualquer gênero.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. COESÃO: ligação FORMAL (conectivos, pronomes, retomadas). COERÊNCIA: ligação de SENTIDO global. Ambas são exigidas na produção textual — qualquer gênero (dissertação, ofício, relatório) precisa de coesão e coerência. Um texto pode ser coeso e incoerente ("Estudou, portanto foi reprovado") — a produção exige as duas.'
      },

      /* ---------- Item 5 (médio-difícil) — Situação ---------- */
      {
        id: 'D-RED-24-05',
        tipo: 'situacao',
        subtopico: 'Aplicação: identificar problema de estrutura',
        pergunta: 'Um candidato redigiu uma dissertação com introdução (contextualização + tese), três parágrafos de desenvolvimento com argumentos e exemplos, e conclusão (retomada + proposta). No entanto, o segundo parágrafo do desenvolvimento repete ideia do primeiro, sem progressão, e o terceiro introduz um argumento que não dialoga com a tese. O problema central do texto é de:',
        alternativas: [
          { id: 'A', texto: 'Coesão, pois faltam conectivos entre os parágrafos de desenvolvimento, o que compromete a ligação formal entre as partes do texto.' },
          { id: 'B', texto: 'Estrutura (progressão temática), pois o segundo parágrafo repete a ideia do primeiro e o terceiro não dialoga com a tese — a progressão e a coerência global ficam comprometidas.' },
          { id: 'C', texto: 'Gramática, pois há erros de concordância e regência nos parágrafos de desenvolvimento, o que compromete a norma culta do texto.' },
          { id: 'D', texto: 'Pontuação, pois a ausência de vírgulas em trechos-chave dificulta a leitura do texto e compromete o encadeamento das ideias.' },
          { id: 'E', texto: 'Adequação vocabular, pois o texto usa termos informais que não cabem em uma dissertação argumentativa, comprometendo a formalidade exigida.' }
        ],
        gabarito: 'B',
        explicacao: 'O problema central é de ESTRUTURA/PROGRESSÃO: o segundo parágrafo repete o primeiro (sem progressão) e o terceiro não dialoga com a tese (quebra de coerência global). A) faltam conectivos? O texto aponta repetição e falta de diálogo — o problema é de progressão/coerência. C) não há referência a erros gramaticais. D) não há referência a problemas de pontuação. E) não há referência a informalidade.'
      },

      /* ---------- Item 6 (difícil) — MC análise de reescrita ---------- */
      {
        id: 'D-RED-24-06',
        tipo: 'multipla_escolha',
        subtopico: 'Análise de reescrita',
        pergunta: 'Sobre a reescrita de textos, analise:\nI — A reescrita deve substituir termos imprecisos por termos exatos, eliminar redundâncias, ajustar a coesão e clarear passagens obscuras, mantendo o conteúdo essencial.\nII — A reescrita pode alterar o sentido global do texto, desde que a nova versão seja gramaticalmente correta e mais clara.\nIII — A revisão de um texto deve verificar gramática (concordância, regência, crase, pontuação), semântica (sentido, ambiguidade) e estrutura (progressão, tese, conclusão).\nEstá CORRETO apenas o que se afirma em:',
        alternativas: [
          { id: 'A', texto: 'I.' },
          { id: 'B', texto: 'II.' },
          { id: 'C', texto: 'III.' },
          { id: 'D', texto: 'I e III.' },
          { id: 'E', texto: 'II e III.' }
        ],
        gabarito: 'D',
        explicacao: 'I correta: reescrita — precisão, eliminação de redundâncias, coesão, clareza, mantendo o conteúdo. III correta: revisão — gramática, semântica, estrutura. II errada: reescrita NÃO pode alterar o sentido global do texto (isso não é reescrita — é outro texto). O sentido deve ser preservado.'
      },

      /* ---------- Item 7 (difícil-meta) — Autoavaliação ---------- */
      {
        id: 'D-RED-24-07',
        tipo: 'autoavaliacao',
        subtopico: 'Produção textual — distinções fundamentais',
        pergunta: 'Você consegue, sem consultar, distinguir: (a) dissertação argumentativa x redação oficial; (b) tese x argumento; (c) introdução x desenvolvimento x conclusão; (d) coesão x coerência; (e) revisão x reescrita; (f) identificar problemas de estrutura (progressão temática, coerência global)?',
        resposta: 'DISSERTAÇÃO: defende tese com argumentos (opinião fundamentada). REDAÇÃO OFICIAL: comunica institucionalmente (impessoal, claro, conciso, formal, padronizado). TESE: o quê se defende. ARGUMENTO: por que se defende. INTRODUÇÃO: contextualização + tese. DESENVOLVIMENTO: argumentos + exemplos + progressão. CONCLUSÃO: retomada + proposta. COESÃO: ligação formal. COERÊNCIA: ligação de sentido. REVISÃO: diagnostica. REESCRITA: corrige. PROBLEMAS DE ESTRUTURA: repetição sem progressão; argumento que não dialoga com a tese; conclusão que não retoma a tese; parágrafos sem ideia central.'
      }
    ]
  }

};
