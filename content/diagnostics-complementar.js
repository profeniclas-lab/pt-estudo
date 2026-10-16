/* ============================================================
   DIAGNÓSTICOS — Módulos de prioridade CONDICIONAL
   Preenchidos: PT-13, PT-14, PT-15
   ============================================================ */

window.DIAGNOSTICS_COMPLEMENTAR = {

  /* ============================================================
     PT-13 — Formação e Estrutura das Palavras
  ============================================================ */
  'PT-13': {
    id: 'D-PT-13',
    moduloId: 'PT-13',
    itens: [
      {
        id: 'D-PT-13-01',
        tipo: 'multipla_escolha',
        subtopico: 'Derivação',
        pergunta: 'A palavra "entardecer" (en + tarde + ecer) é formada por qual processo?',
        alternativas: [
          { id: 'A', texto: 'Derivação prefixal, pois só tem prefixo.' },
          { id: 'B', texto: 'Derivação sufixal, pois só tem sufixo.' },
          { id: 'C', texto: 'Derivação parassintética, pois o prefixo e o sufixo são dependentes — não existem "entarde" nem "tardecer".' },
          { id: 'D', texto: 'Composição por aglutinação, pois une dois radicais.' }
        ],
        gabarito: 'C',
        explicacao: 'A derivação PARASSINTÉTICA ocorre quando prefixo e sufixo são adicionados SIMULTANEAMENTE e NÃO existem isoladamente. Teste: "entarde" não existe, "tardecer" não existe. Portanto, é parassintética. Compare com "deslealdade" — existem "desleal" e "lealdade" — logo, é prefixal e sufixal.'
      },
      {
        id: 'D-PT-13-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Derivação',
        pergunta: 'A palavra "infelizmente" é formada por derivação parassintética, pois apresenta prefixo ("in-") e sufixo ("-mente") ao mesmo tempo.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. "Infelizmente" é derivação PREFIXAL E SUFIXAL, pois existem as formas intermediárias "infeliz" e "felizmente". Para ser PARASSINTÉTICA, a palavra não poderia existir sem os dois afixos simultaneamente — o que não é o caso aqui. É a pegadinha clássica para distinguir os dois tipos de derivação.'
      },
      {
        id: 'D-PT-13-03',
        tipo: 'situacao',
        subtopico: 'Composição',
        pergunta: 'A palavra "planalto" (plano + alto) e a palavra "passatempo" (passa + tempo) são formadas, respectivamente, por:',
        alternativas: [
          { id: 'A', texto: 'Justaposição e aglutinação.' },
          { id: 'B', texto: 'Aglutinação e justaposição.' },
          { id: 'C', texto: 'Derivação prefixal e sufixal em ambos os casos.' },
          { id: 'D', texto: 'Parassíntese em ambos os casos.' }
        ],
        gabarito: 'B',
        explicacao: '"PLANALTO" é AGLUTINAÇÃO (plano + alto, com perda de letras — "plan" + "alto"). "PASSATEMPO" é JUSTAPOSIÇÃO (passa + tempo, sem alteração fonética). Critério: houve alteração na união dos radicais? Se sim → aglutinação. Se não → justaposição.'
      },
      {
        id: 'D-PT-13-04',
        tipo: 'autoavaliacao',
        subtopico: 'Estrutura das palavras',
        pergunta: 'Você consegue reconhecer os elementos mórficos (radical, prefixo, sufixo, desinência, vogal temática) e distinguir os processos de derivação (prefixal, sufixal, prefixal e sufixal, regressiva, imprópria, parassintética) dos de composição (justaposição e aglutinação)?',
        resposta: 'ESTRUTURA: RADICAL — morfema com significado básico ("pedr-" de pedra). PREFIXO — antes do radical ("re-" em refazer). SUFIXO — depois do radical ("-eiro" em pedreiro). DESINÊNCIAS — indicam gênero, número e tempo verbal. VOGAL TEMÁTICA — liga radical às desinências. DERIVAÇÃO: PREFIXAL (refazer), SUFIXAL (pedreiro), PREFIXAL E SUFIXAL (deslealdade — existem "desleal" e "lealdade"), REGRESSIVA (retirar sufixo — "combate" de combater), IMPRÓPRIA (mudança de classe sem alterar forma — "o jantar" como substantivo), PARASSINTÉTICA (prefixo e sufixo dependentes — "entardecer"). COMPOSIÇÃO: JUSTAPOSIÇÃO (passatempo — sem alteração) e AGLUTINAÇÃO (planalto — com alteração).'
      }
    ]
  },

  /* ============================================================
     PT-14 — Fonética, Fonologia e Divisão Silábica
  ============================================================ */
  'PT-14': {
    id: 'D-PT-14',
    moduloId: 'PT-14',
    itens: [
      {
        id: 'D-PT-14-01',
        tipo: 'multipla_escolha',
        subtopico: 'Fonema, letra e sílaba',
        pergunta: 'Quantos FONEMAS tem a palavra "táxi"?',
        alternativas: [
          { id: 'A', texto: '4 fonemas, pois tem 4 letras.' },
          { id: 'B', texto: '5 fonemas: /t/ /á/ /k/ /s/ /i/ — a letra "x" representa dois sons.' },
          { id: 'C', texto: '6 fonemas.' },
          { id: 'D', texto: '3 fonemas.' }
        ],
        gabarito: 'B',
        explicacao: '"TÁXI" tem 4 LETRAS, mas 5 FONEMAS: /t/, /á/, /k/, /s/, /i/. A letra "x" tem som de "ks" (dois fonemas). Casos assim mostram que nem sempre há correspondência entre letra e fonema. Outro exemplo: "hora" tem 4 letras e 3 fonemas (o "h" é mudo).'
      },
      {
        id: 'D-PT-14-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Dígrafos',
        pergunta: 'Na palavra "guerra", as letras "gu" e "rr" são dígrafos, pois cada par representa um único som.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. "GUERRA" tem 6 letras, mas 4 fonemas (/g/, /e/, /r/, /a/). O "gu" tem um único som (/g/) e o "rr" também tem um único som (/r/). Dígrafo é quando DUAS LETRAS representam UM SOM — não confundir com encontro consonantal (dois sons distintos, como "cr" em "cravo").'
      },
      {
        id: 'D-PT-14-03',
        tipo: 'situacao',
        subtopico: 'Encontros vocálicos',
        pergunta: 'Nas palavras "saúde", "pai" e "Uruguai", os encontros vocálicos destacados são, respectivamente:',
        alternativas: [
          { id: 'A', texto: 'Ditongo, hiato e tritongo.' },
          { id: 'B', texto: 'Hiato, ditongo e tritongo.' },
          { id: 'C', texto: 'Tritongo, ditongo e hiato.' },
          { id: 'D', texto: 'Ditongo, ditongo e ditongo.' }
        ],
        gabarito: 'B',
        explicacao: '"SAÚDE": o "u" e o "i" (escrito "ú" e "i") ficam em sílabas SEPARADAS (sa-ú-de) → HIATO. "PAI": duas vogais na MESMA sílaba → DITONGO. "URUGUAI": três vogais na mesma sílaba (U-ru-guai) → TRITONGO. Palavras-chave: ditongo = mesma sílaba; hiato = sílabas separadas; tritongo = três vogais juntas.'
      },
      {
        id: 'D-PT-14-04',
        tipo: 'autoavaliacao',
        subtopico: 'Classificação quanto à tonicidade',
        pergunta: 'Você consegue classificar qualquer palavra como OXÍTONA, PAROXÍTONA ou PROPAROXÍTONA e relacionar essa classificação com as regras de acentuação?',
        resposta: 'OXÍTONA: a última sílaba é a tônica. Ex.: café, jiló, também. Acentuam-se as terminadas em A, E, O, EM, ENS. PAROXÍTONA: a penúltima sílaba é tônica. Ex.: fácil, caderno, hífen. Acentuam-se as terminadas em L, N, R, X, I, IS, UM, UNS, PS, ditongo, Ã, ÃS, ÃO, ÃOS, ON, ONS, US. PROPAROXÍTONA: a antepenúltima é a tônica. TODAS são acentuadas — sem exceção. Ex.: árvore, médico, lâmpada. Saber a tonicidade é pré-requisito para aplicar as regras de acentuação.'
      }
    ]
  },

  /* ============================================================
     PT-15 — Redação Oficial e Comunicação Administrativa
  ============================================================ */
  'PT-15': {
    id: 'D-PT-15',
    moduloId: 'PT-15',
    itens: [
      {
        id: 'D-PT-15-01',
        tipo: 'multipla_escolha',
        subtopico: 'Clareza, concisão, impessoalidade',
        pergunta: 'Sobre os princípios da redação oficial, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Impessoalidade significa escrever de forma fria e distante, sem cordialidade.' },
          { id: 'B', texto: 'Clareza e concisão se complementam: o texto oficial deve ser compreendido sem esforço e dizer o máximo com o mínimo de palavras.' },
          { id: 'C', texto: 'Formalidade significa usar linguagem difícil e jargões técnicos.' },
          { id: 'D', texto: 'A redação oficial pode usar primeira pessoa, pois o servidor assina o documento.' }
        ],
        gabarito: 'B',
        explicacao: 'CLAREZA e CONCISÃO são princípios que se complementam: clareza = texto compreensível sem esforço; concisão = máximo de informação com mínimo de palavras. A impessoalidade (A) NÃO significa frieza — o texto pode ser cordial e impessoal. Formalidade (C) NÃO é linguagem difícil — é uso do padrão culto, sem gírias ou informalidades. Redação oficial (D) é IMPESSOAL: "Este órgão decidiu..." em vez de "Eu decidi...".'
      },
      {
        id: 'D-PT-15-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Documentos oficiais',
        pergunta: 'O ofício é usado para comunicação INTERNA entre unidades administrativas do mesmo órgão; o memorando, para comunicação EXTERNA entre órgãos diferentes.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso — está INVERTIDO. OFÍCIO: comunicação EXTERNA, entre órgãos diferentes ou entre órgão e particulares (mais solene, em papel timbrado). MEMORANDO: comunicação INTERNA, entre unidades do mesmo órgão (mais simples e direto). É a pegadinha clássica em provas de redação oficial.'
      },
      {
        id: 'D-PT-15-03',
        tipo: 'situacao',
        subtopico: 'Tratamento e fecho',
        pergunta: 'Um servidor precisa encaminhar um ofício a um Ministro de Estado. Qual tratamento e fecho são ADEQUADOS?',
        alternativas: [
          { id: 'A', texto: 'Tratamento "Vossa Senhoria" e fecho "Atenciosamente".' },
          { id: 'B', texto: 'Tratamento "Vossa Excelência" e fecho "Respeitosamente".' },
          { id: 'C', texto: 'Tratamento "Vossa Excelência" e fecho "Atenciosamente".' },
          { id: 'D', texto: 'Tratamento "Senhor" e fecho "Cordialmente".' }
        ],
        gabarito: 'B',
        explicacao: 'Ministros de Estado são ALTAS AUTORIDADES — usam "VOSSA EXCELÊNCIA" (V. Exa.). E, por serem autoridades SUPERIORES, o fecho adequado é "RESPEITOSAMENTE". "Atenciosamente" é usado para autoridades de mesma hierarquia ou inferiores. "Vossa Senhoria" é para demais autoridades e particulares.'
      },
      {
        id: 'D-PT-15-04',
        tipo: 'autoavaliacao',
        subtopico: 'Documentos oficiais',
        pergunta: 'Você conhece os principais documentos oficiais (ofício, memorando, e-mail profissional, comunicado, requerimento), sua finalidade e os elementos essenciais da estrutura do padrão ofício (tipo e número, local e data, destinatário, assunto, vocativo, texto, fecho, assinatura, identificação)?',
        resposta: 'OFÍCIO: comunicação EXTERNA entre órgãos ou destes para particulares — mais solene. MEMORANDO: comunicação INTERNA entre unidades do mesmo órgão — mais simples. E-MAIL PROFISSIONAL: comunicação eletrônica formal, com a mesma impessoalidade e clareza dos demais. COMUNICADO: informação oficial a vários destinatários. REQUERIMENTO: pedido formal do cidadão ao poder público. ESTRUTURA DO PADRÃO OFÍCIO (Manual da Presidência): tipo e número, local e data, destinatário (nome, cargo, endereço), assunto (resumo), vocativo (tratamento), texto (claro e objetivo), fecho ("Atenciosamente" ou "Respeitosamente"), assinatura e identificação do remetente. Base: Manual de Redação da Presidência da República (3ª edição, 2018).'
      }
    ]
  }

};
