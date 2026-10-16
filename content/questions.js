/* ============================================================
   BANCO DE QUESTÕES — Módulos de prioridade MUITO ALTA
   Preenchidos: PT-01, PT-08, PT-09, PT-11, PT-16
   ============================================================ */

window.QUESTIONS = [

  /* ============================================================
     PT-01 — Interpretação e Compreensão de Textos
  ============================================================ */
  {
    id: 'Q-DID-PT-0101',
    tipo: 'DIDATICA',
    area: 'LEIT',
    moduloId: 'PT-01',
    subtema: 'Ideia central',
    dificuldade: 1,
    prioridade: 'muito_alta',
    enunciado: 'Leia: "A leitura diária amplia o vocabulário, melhora a escrita e desenvolve o pensamento crítico. Por isso, escolas deveriam incentivar o hábito desde cedo." A ideia central é:',
    alternativas: [
      { id: 'A', texto: 'A leitura diária só serve para ampliar o vocabulário.' },
      { id: 'B', texto: 'Escolas deveriam incentivar o hábito de leitura desde cedo.' },
      { id: 'C', texto: 'O pensamento crítico é mais importante que a escrita.' },
      { id: 'D', texto: 'Ler é uma atividade cansativa.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A tese defendida é o incentivo à leitura pelas escolas. As demais são ideias secundárias ou distorções.',
      incorretas: { A: 'Reduz a ideia central a apenas um dos benefícios citados.', C: 'Compara benefícios sem base no texto.', D: 'Informação não presente no texto.' },
      conceitoCobrado: 'Identificação da ideia central (tese).',
      pegadinha: 'Marcar uma ideia secundária achando que é a central.',
      comoApareceEmConcurso: 'Cobrança clássica em interpretação de texto.'
    },
    tags: ['interpretação', 'ideia central']
  },
  {
    id: 'Q-DID-PT-0102',
    tipo: 'DIDATICA',
    area: 'LEIT',
    moduloId: 'PT-01',
    subtema: 'Inferência',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'Leia: "Ao receber a carta, Joana sentou-se, leu devagar e, no fim, enxugou uma lágrima." Pode-se INFERIR que Joana:',
    alternativas: [
      { id: 'A', texto: 'Ficou indiferente à carta.' },
      { id: 'B', texto: 'Ficou emocionada com o conteúdo.' },
      { id: 'C', texto: 'Não entendeu o que leu.' },
      { id: 'D', texto: 'Estava com sono.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O gesto de enxugar uma lágrima, combinado com a leitura pausada, permite inferir emoção.',
      incorretas: { A: 'Contradiz o gesto descrito.', C: 'Nada indica dificuldade de compreensão.', D: 'Sono não se sustenta nos sinais apresentados.' },
      conceitoCobrado: 'Inferência a partir de sinais textuais.',
      pegadinha: 'Marcar alternativa com "palavra bonita" sem base no texto.',
      comoApareceEmConcurso: '"Infere-se do texto que..." — clássica.'
    },
    tags: ['interpretação', 'inferência']
  },
  {
    id: 'Q-DID-PT-0103',
    tipo: 'DIDATICA',
    area: 'LEIT',
    moduloId: 'PT-01',
    subtema: 'Pressuposto',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'A frase "João voltou a fumar" apresenta qual informação implícita (pressuposto)?',
    alternativas: [
      { id: 'A', texto: 'João nunca fumou antes.' },
      { id: 'B', texto: 'João já fumava antes e havia parado.' },
      { id: 'C', texto: 'João fuma desde criança.' },
      { id: 'D', texto: 'João vai parar de fumar em breve.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O verbo "voltar a" pressupõe que a ação já ocorreu antes e foi interrompida.',
      incorretas: { A: 'Contradiz o pressuposto de "voltar a".', C: 'Extrapolação — o texto não diz quando começou.', D: 'Não há base para prever o futuro.' },
      conceitoCobrado: 'Pressuposto — informação implícita marcada por palavras.',
      pegadinha: 'Confundir pressuposto com subentendido ou com extrapolação.',
      comoApareceEmConcurso: 'Muito cobrado em interpretação avançada.'
    },
    tags: ['pressuposto', 'implícito']
  },
  {
    id: 'Q-DID-PT-0104',
    tipo: 'DIDATICA',
    area: 'LEIT',
    moduloId: 'PT-01',
    subtema: 'Fato x opinião',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'Assinale a alternativa que apresenta uma OPINIÃO, e não um fato:',
    alternativas: [
      { id: 'A', texto: 'A taxa de desemprego caiu 2 pontos no último trimestre.' },
      { id: 'B', texto: 'Brasília é a capital do Brasil desde 1960.' },
      { id: 'C', texto: 'A queda do desemprego é insuficiente para resolver os problemas do país.' },
      { id: 'D', texto: 'O IBGE divulgou os dados na última sexta-feira.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: '"Insuficiente" é juízo pessoal, subjetivo — opinião.',
      incorretas: { A: 'Dado objetivo, verificável.', B: 'Informação histórica verificável.', D: 'Informação factual.' },
      conceitoCobrado: 'Distinção fato x opinião.',
      pegadinha: 'Confundir dado numérico (fato) com avaliação sobre o dado (opinião).',
      comoApareceEmConcurso: 'Muito cobrado em textos argumentativos.'
    },
    tags: ['fato', 'opinião']
  },
  {
    id: 'Q-DID-PT-0105',
    tipo: 'DIDATICA',
    area: 'LEIT',
    moduloId: 'PT-01',
    subtema: 'Extrapolação',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'Texto: "Alunos que leem 20 minutos por dia tendem a ter notas melhores." Uma EXTRAPOLAÇÃO seria:',
    alternativas: [
      { id: 'A', texto: 'A leitura diária tem relação com o desempenho escolar.' },
      { id: 'B', texto: 'Apenas quem lê 20 minutos por dia é aprovado em concursos.' },
      { id: 'C', texto: 'A leitura pode influenciar o rendimento dos alunos.' },
      { id: 'D', texto: 'Ler diariamente é um hábito que pode ajudar nos estudos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '"Apenas" e "é aprovado em concursos" são afirmações sem apoio no texto — extrapolação.',
      incorretas: { A: 'Está apoiado no texto (tendência).', C: 'Interpretação autorizada.', D: 'Paráfrase fiel.' },
      conceitoCobrado: 'Extrapolação — acrescentar informação sem base.',
      pegadinha: 'A banca adora colocar alternativas com "sempre", "apenas", "nunca".',
      comoApareceEmConcurso: 'Uma das pegadinhas mais frequentes.'
    },
    tags: ['extrapolação', 'interpretação']
  },
  {
    id: 'Q-DID-PT-0106',
    tipo: 'DIDATICA',
    area: 'LEIT',
    moduloId: 'PT-01',
    subtema: 'Textos verbais, não verbais e mistos',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'Sobre textos não verbais, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Não são considerados textos, pois não usam palavras.' },
      { id: 'B', texto: 'Comunicam por meio de imagens, símbolos, gráficos, cores e formas, produzindo sentido.' },
      { id: 'C', texto: 'Só existem em histórias em quadrinhos.' },
      { id: 'D', texto: 'Não podem ser combinados com texto verbal.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Textos não verbais comunicam por outros códigos (imagens, símbolos, gráficos).',
      incorretas: { A: 'Texto é qualquer forma de comunicação com sentido.', C: 'Existem em placas, gráficos, propagandas etc.', D: 'Textos mistos combinam verbal e não verbal.' },
      conceitoCobrado: 'Tipos de texto quanto à linguagem.',
      pegadinha: 'Restringir texto a palavras escritas.',
      comoApareceEmConcurso: 'Cobrado com gráficos e imagens em interpretação.'
    },
    tags: ['texto não verbal', 'linguagem']
  },

  /* ============================================================
     PT-08 — Pontuação
  ============================================================ */
  {
    id: 'Q-DID-PT-0801',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Vírgula entre sujeito e verbo',
    dificuldade: 1,
    prioridade: 'muito_alta',
    enunciado: 'Assinale a alternativa em que a pontuação está CORRETA:',
    alternativas: [
      { id: 'A', texto: 'Os alunos do terceiro ano, foram aprovados.' },
      { id: 'B', texto: 'Os alunos do terceiro ano foram aprovados.' },
      { id: 'C', texto: 'Os alunos, do terceiro ano foram aprovados.' },
      { id: 'D', texto: 'Os alunos do terceiro, ano foram aprovados.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Sujeito, verbo e complemento ficam juntos. NUNCA separar sujeito de verbo com vírgula.',
      incorretas: { A: 'Vírgula separa sujeito e verbo — ERRO.', C: 'Vírgula quebra o sujeito — ERRO.', D: 'Vírgula em local inadequado no sujeito — ERRO.' },
      conceitoCobrado: 'Vírgula proibida entre sujeito e verbo.',
      pegadinha: 'Erro mais clássico em provas.',
      comoApareceEmConcurso: 'Correção gramatical e reescrita.'
    },
    tags: ['vírgula', 'sujeito']
  },
  {
    id: 'Q-DID-PT-0802',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Restritiva x explicativa',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'Qual a diferença de sentido entre "O médico atendeu o paciente que estava com febre" e "O médico atendeu o paciente, que estava com febre"?',
    alternativas: [
      { id: 'A', texto: 'Não há diferença.' },
      { id: 'B', texto: 'A primeira (sem vírgula) é restritiva: havia vários pacientes, e atendeu o que tinha febre. A segunda (com vírgula) é explicativa: havia só um paciente, que estava com febre.' },
      { id: 'C', texto: 'A primeira é errada; a segunda é a certa.' },
      { id: 'D', texto: 'A primeira é explicativa; a segunda é restritiva.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Sem vírgula = restritiva (restringe o antecedente). Com vírgula = explicativa (explica, generaliza).',
      incorretas: { A: 'A vírgula muda completamente o sentido.', C: 'Ambas estão corretas, em sentidos diferentes.', D: 'Inverte os conceitos.' },
      conceitoCobrado: 'Oração adjetiva restritiva x explicativa.',
      pegadinha: 'Confundir as duas.',
      comoApareceEmConcurso: 'Muito cobrado em reescrita.'
    },
    tags: ['restritiva', 'explicativa', 'vírgula']
  },
  {
    id: 'Q-DID-PT-0803',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Vírgula antes de "e"',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'Em qual das alternativas a vírgula antes do "e" está CORRETA?',
    alternativas: [
      { id: 'A', texto: 'Pedro estuda, e trabalha.' },
      { id: 'B', texto: 'Pedro estuda, e Maria trabalha.' },
      { id: 'C', texto: 'Pedro estuda e, trabalha.' },
      { id: 'D', texto: 'Pedro, estuda e trabalha.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Vírgula antes do "e" é permitida quando liga orações com SUJEITOS DIFERENTES ("Pedro estuda, e Maria trabalha").',
      incorretas: { A: 'Mesmo sujeito → sem vírgula.', C: 'Vírgula em local errado.', D: 'Sujeito separado do verbo — erro.' },
      conceitoCobrado: 'Vírgula antes do "e".',
      pegadinha: 'Usar vírgula antes de "e" com mesmo sujeito.',
      comoApareceEmConcurso: 'Correção gramatical.'
    },
    tags: ['vírgula', 'conjunção e']
  },
  {
    id: 'Q-DID-PT-0804',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Dois-pontos',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'Em qual das alternativas os dois-pontos estão empregados corretamente?',
    alternativas: [
      { id: 'A', texto: 'Preciso de: fé, esperança e caridade.' },
      { id: 'B', texto: 'Preciso de três coisas: fé, esperança e caridade.' },
      { id: 'C', texto: 'Preciso de três coisas, fé, esperança e caridade.' },
      { id: 'D', texto: 'Preciso: de fé, esperança e caridade.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Dois-pontos anunciam a enumeração que vem depois. É preciso ter um termo "anunciador" antes ("três coisas:").',
      incorretas: { A: 'Não se usa dois-pontos após preposição solta.', C: 'Falta o elemento anunciador — seria vírgula.', D: 'Dois-pontos em local inadequado.' },
      conceitoCobrado: 'Uso dos dois-pontos.',
      pegadinha: 'Colocar dois-pontos sem ter o que anunciar.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['dois-pontos']
  },
  {
    id: 'Q-DID-PT-0805',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Adjunto adverbial deslocado',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'Assinale a alternativa em que a vírgula isola CORRETAMENTE um adjunto adverbial deslocado:',
    alternativas: [
      { id: 'A', texto: 'Ontem à noite choveu muito.' },
      { id: 'B', texto: 'Ontem à noite, choveu muito.' },
      { id: 'C', texto: 'Choveu ontem, à noite muito.' },
      { id: 'D', texto: 'Choveu, ontem à noite muito.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Adjunto adverbial de longa extensão deslocado para o início pede vírgula: "Ontem à noite, choveu muito."',
      incorretas: { A: 'Falta a vírgula — a frase fica truncada.', C: 'Vírgula quebra expressão.', D: 'Vírgula em local errado.' },
      conceitoCobrado: 'Vírgula com adjunto adverbial deslocado.',
      pegadinha: 'Não colocar vírgula após adjunto longo.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['vírgula', 'adjunto adverbial']
  },
  {
    id: 'Q-DID-PT-0806',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Aspas',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'Sobre o uso das aspas, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Servem apenas para marcar fala de personagem.' },
      { id: 'B', texto: 'Podem marcar citação, estrangeirismo, ironia e sentido conotativo.' },
      { id: 'C', texto: 'São obrigatórias em todo início de frase.' },
      { id: 'D', texto: 'Substituem os parênteses em qualquer situação.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Aspas têm vários usos: citação, estrangeirismo, ironia, sentido figurado.',
      incorretas: { A: 'É apenas um dos usos.', C: 'Não existe essa regra.', D: 'Parênteses e aspas têm funções diferentes.' },
      conceitoCobrado: 'Usos das aspas.',
      pegadinha: 'Restringir aspas a um único uso.',
      comoApareceEmConcurso: 'Cobrança média.'
    },
    tags: ['aspas']
  },

  /* ============================================================
     PT-09 — Concordância Verbal e Nominal
  ============================================================ */
  {
    id: 'Q-DID-PT-0901',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-09',
    subtema: 'Haver x existir',
    dificuldade: 1,
    prioridade: 'muito_alta',
    enunciado: 'Assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'Haviam muitos candidatos no local.' },
      { id: 'B', texto: 'Havia muitos candidatos no local.' },
      { id: 'C', texto: 'Houveram muitos candidatos no local.' },
      { id: 'D', texto: 'Hão de haver muitos candidatos no local.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Haver (existir) é impessoal — fica sempre no SINGULAR: "Havia muitos candidatos."',
      incorretas: { A: '"Haviam" está errado.', C: '"Houveram" está errado.', D: 'Estrutura forçada e incorreta.' },
      conceitoCobrado: 'Haver impessoal.',
      pegadinha: 'Erro mais clássico de concordância em provas.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['concordância', 'haver']
  },
  {
    id: 'Q-DID-PT-0902',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-09',
    subtema: 'Fazer (tempo)',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'Assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'Fazem cinco anos que ele saiu do país.' },
      { id: 'B', texto: 'Faz cinco anos que ele saiu do país.' },
      { id: 'C', texto: 'Fazem cinco anos desde que ele saiu.' },
      { id: 'D', texto: 'Fazem-se cinco anos que ele saiu.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Fazer indicando tempo decorrido é IMPESSOAL — sempre no singular.',
      incorretas: { A: '"Fazem" está errado.', C: 'Idem.', D: 'Idem.' },
      conceitoCobrado: 'Fazer impessoal.',
      pegadinha: 'Plural indevido por atração do "cinco anos".',
      comoApareceEmConcurso: 'Alta frequência.'
    },
    tags: ['concordância', 'fazer']
  },
  {
    id: 'Q-DID-PT-0903',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-09',
    subtema: 'Mais de um / um ou outro',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'Assinale a alternativa CORRETA quanto à concordância:',
    alternativas: [
      { id: 'A', texto: 'Mais de um aluno faltaram à prova.' },
      { id: 'B', texto: 'Mais de um aluno faltou à prova.' },
      { id: 'C', texto: 'Um ou outro aluno faltaram à prova.' },
      { id: 'D', texto: 'Nem um nem outro aluno faltaram à prova.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '"Mais de um" exige verbo no SINGULAR: "faltou".',
      incorretas: { A: 'Plural indevido.', C: '"Um ou outro" pede singular: "faltou".', D: '"Nem um nem outro" pede singular: "faltou".' },
      conceitoCobrado: 'Expressões especiais de concordância.',
      pegadinha: 'Pluralizar por atração de "mais".',
      comoApareceEmConcurso: 'Muito cobrado.'
    },
    tags: ['concordância', 'mais de um']
  },
  {
    id: 'Q-DID-PT-0904',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-09',
    subtema: 'É proibido / é proibida',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'Assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'É proibido a entrada de estranhos.' },
      { id: 'B', texto: 'É proibida a entrada de estranhos.' },
      { id: 'C', texto: 'É proibido entradas de estranhos.' },
      { id: 'D', texto: 'É proibida entrada de estranhos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Com artigo ("a entrada"), o adjetivo concorda: "É proibida a entrada."',
      incorretas: { A: 'Falta concordância: com artigo, é "proibida".', C: 'Mistura indevida.', D: 'Sem artigo, seria invariável: "É proibido entrada".' },
      conceitoCobrado: 'Concordância nominal com artigo.',
      pegadinha: 'Esquecer a regra com/sem artigo.',
      comoApareceEmConcurso: 'Alta frequência.'
    },
    tags: ['concordância nominal', 'proibido']
  },
  {
    id: 'Q-DID-PT-0905',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-09',
    subtema: 'Meio / meia',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'Assinale a alternativa em que "meio" está empregado CORRETAMENTE:',
    alternativas: [
      { id: 'A', texto: 'Ela está meia cansada hoje.' },
      { id: 'B', texto: 'Ela está meio cansada hoje.' },
      { id: 'C', texto: 'São meio-dia e meio.' },
      { id: 'D', texto: 'Comi meia laranja e bebi meia copo de suco.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '"Meio" advérbio (= um pouco) é invariável: "meio cansada".',
      incorretas: { A: 'Aqui "meio" é advérbio — não varia.', C: 'É "meio-dia e MEIA" (meia hora).', D: 'Mistura indevida: "meio copo" (advérbio) x "meia laranja" (numeral).' },
      conceitoCobrado: 'Meio advérbio (invariável) x meia numeral.',
      pegadinha: 'Flexionar "meio" quando é advérbio.',
      comoApareceEmConcurso: 'Muito cobrado.'
    },
    tags: ['meio', 'concordância nominal']
  },
  {
    id: 'Q-DID-PT-0906',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-09',
    subtema: 'Partitivas',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'Assinale a alternativa que apresenta concordância ACEITÁVEL na norma padrão:',
    alternativas: [
      { id: 'A', texto: 'A maioria dos alunos foi aprovada.' },
      { id: 'B', texto: 'A maioria dos alunos foram aprovados.' },
      { id: 'C', texto: 'A maioria dos alunos seriam aprovados.' },
      { id: 'D', texto: 'Apenas a A e a B são aceitáveis.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Expressões partitivas ("a maioria de", "grande parte de", "metade de") aceitam o verbo no SINGULAR ou no PLURAL. A e B estão corretas.',
      incorretas: { A: 'Válida, mas sozinha incompleta.', B: 'Válida, mas sozinha incompleta.', C: 'Futuro do pretérito sem sentido aqui — não é aceitável.' },
      conceitoCobrado: 'Concordância com expressões partitivas.',
      pegadinha: 'Achar que só uma forma é correta.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['concordância', 'partitiva']
  },

  /* ============================================================
     PT-11 — Coesão e Coerência Textual
  ============================================================ */
  {
    id: 'Q-DID-PT-1101',
    tipo: 'DIDATICA',
    area: 'TEXT',
    moduloId: 'PT-11',
    subtema: 'Referência anafórica',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'No trecho "Comprei um livro novo. Ele é ótimo.", o pronome "Ele" faz referência a:',
    alternativas: [
      { id: 'A', texto: 'Um sujeito indeterminado.' },
      { id: 'B', texto: 'Ao livro novo.' },
      { id: 'C', texto: 'Ao autor do texto.' },
      { id: 'D', texto: 'Ao leitor.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Referência ANAFÓRICA: o pronome retoma o termo "um livro novo" mencionado antes.',
      incorretas: { A: 'O referente é claro no texto.', C: 'Não há autor mencionado.', D: 'O leitor não é referente.' },
      conceitoCobrado: 'Referência anafórica.',
      pegadinha: 'Não identificar o referente do pronome.',
      comoApareceEmConcurso: 'Cobrança frequente.'
    },
    tags: ['coesão', 'referência']
  },
  {
    id: 'Q-DID-PT-1102',
    tipo: 'DIDATICA',
    area: 'TEXT',
    moduloId: 'PT-11',
    subtema: 'Conectores',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'No trecho "Estudou muito, mas não passou no concurso", o conector "mas" estabelece relação de:',
    alternativas: [
      { id: 'A', texto: 'Causa.' },
      { id: 'B', texto: 'Consequência.' },
      { id: 'C', texto: 'Oposição.' },
      { id: 'D', texto: 'Conclusão.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: '"Mas" introduz ideia de contraste/oposição: estudou (esperava passar) x não passou.',
      incorretas: { A: 'Causa seria "porque".', B: 'Consequência seria "portanto".', D: 'Conclusão seria "logo".' },
      conceitoCobrado: 'Conectores de oposição.',
      pegadinha: 'Confundir "mas" com "portanto" ou "porque".',
      comoApareceEmConcurso: 'Alta frequência.'
    },
    tags: ['conectores', 'oposição']
  },
  {
    id: 'Q-DID-PT-1103',
    tipo: 'DIDATICA',
    area: 'TEXT',
    moduloId: 'PT-11',
    subtema: 'Coesão x coerência',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'A frase "Estudou muito, porque foi reprovado" é um exemplo de:',
    alternativas: [
      { id: 'A', texto: 'Texto com coesão e coerência.' },
      { id: 'B', texto: 'Texto com coesão (conector correto), mas SEM coerência (relação ilógica).' },
      { id: 'C', texto: 'Texto com coerência, mas sem coesão.' },
      { id: 'D', texto: 'Texto sem coesão e sem coerência.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Há coesão (o "porque" liga as partes), mas NÃO há coerência: estudar não é causa de reprovação. Falta lógica interna.',
      incorretas: { A: 'Falta coerência.', C: 'Há coesão sim.', D: 'Há coesão.' },
      conceitoCobrado: 'Coesão x coerência.',
      pegadinha: 'Achar que toda frase bem ligada é coerente.',
      comoApareceEmConcurso: 'Pegadinha conceitual.'
    },
    tags: ['coesão', 'coerência']
  },
  {
    id: 'Q-DID-PT-1104',
    tipo: 'DIDATICA',
    area: 'TEXT',
    moduloId: 'PT-11',
    subtema: 'Concessão',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'No trecho "Embora tenha estudado, não foi aprovado", o conector "embora" introduz ideia de:',
    alternativas: [
      { id: 'A', texto: 'Causa.' },
      { id: 'B', texto: 'Consequência.' },
      { id: 'C', texto: 'Concessão.' },
      { id: 'D', texto: 'Finalidade.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: '"Embora" introduz CONCESSÃO: admite o fato contrário (estudou), mas o resultado prevalece (não passou).',
      incorretas: { A: 'Causa seria "porque".', B: 'Consequência seria "portanto".', D: 'Finalidade seria "para".' },
      conceitoCobrado: 'Concessão x oposição.',
      pegadinha: 'Confundir concessão com causa.',
      comoApareceEmConcurso: 'Alta frequência.'
    },
    tags: ['concessão', 'conectores']
  },
  {
    id: 'Q-DID-PT-1105',
    tipo: 'DIDATICA',
    area: 'TEXT',
    moduloId: 'PT-11',
    subtema: 'Mudança de sentido por conector',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'Qual a diferença de sentido entre "Estudou muito, portanto passou" e "Estudou muito, mas não passou"?',
    alternativas: [
      { id: 'A', texto: 'Nenhuma — a informação é a mesma.' },
      { id: 'B', texto: 'A primeira expressa consequência (passou); a segunda expressa oposição (contraste entre estudar e não passar).' },
      { id: 'C', texto: 'A primeira é errada; a segunda é a certa.' },
      { id: 'D', texto: 'A primeira expressa causa; a segunda, condição.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '"Portanto" indica consequência; "mas" indica oposição. O conector muda completamente o sentido.',
      incorretas: { A: 'A informação muda.', C: 'Ambas estão corretas em sentidos diferentes.', D: 'Confunde conceitos.' },
      conceitoCobrado: 'Efeito dos conectores no sentido.',
      pegadinha: 'Trocar conector sem perceber mudança de sentido.',
      comoApareceEmConcurso: 'Reescrita e coesão.'
    },
    tags: ['conectores', 'sentido']
  },
  {
    id: 'Q-DID-PT-1106',
    tipo: 'DIDATICA',
    area: 'TEXT',
    moduloId: 'PT-11',
    subtema: 'Elipse',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'No trecho "Maria estuda de manhã; trabalha à tarde.", o termo omitido (elipse) é:',
    alternativas: [
      { id: 'A', texto: 'O verbo "estuda".' },
      { id: 'B', texto: 'O sujeito "Maria".' },
      { id: 'C', texto: 'O objeto direto.' },
      { id: 'D', texto: 'O adjunto adverbial.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O sujeito "Maria" está elíptico (oculto) na segunda oração: "(Maria) trabalha à tarde".',
      incorretas: { A: '"Trabalha" é outro verbo.', C: 'Não há objeto direto nas orações.', D: 'Os adjuntos ("de manhã", "à tarde") estão presentes.' },
      conceitoCobrado: 'Elipse — omissão de termo já mencionado.',
      pegadinha: 'Não perceber a omissão do sujeito.',
      comoApareceEmConcurso: 'Coesão textual.'
    },
    tags: ['elipse', 'coesão']
  },

  /* ============================================================
     PT-16 — Argumentação, Análise Textual e Questões Integradas
  ============================================================ */
  {
    id: 'Q-DID-PT-1601',
    tipo: 'DIDATICA',
    area: 'TEXT',
    moduloId: 'PT-16',
    subtema: 'Tese x argumento',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'Leia: "O transporte público deve ser priorizado. Enquanto poucos desfrutam de carros subsidiados, milhões dependem de ônibus lotados." Sobre o trecho:',
    alternativas: [
      { id: 'A', texto: 'A tese é "milhões dependem de ônibus"; o argumento é "priorizar o transporte".' },
      { id: 'B', texto: 'A tese é "o transporte público deve ser priorizado"; o argumento é a comparação entre poucos donos de carros e milhões de usuários.' },
      { id: 'C', texto: 'O trecho é puramente descritivo, sem tese.' },
      { id: 'D', texto: 'A tese é "os carros são subsidiados".' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'TESE: ideia defendida. ARGUMENTO: razão que sustenta a tese.',
      incorretas: { A: 'Inverte os papéis.', C: 'Há argumentação explícita.', D: 'É um dado de apoio, não a tese.' },
      conceitoCobrado: 'Estrutura argumentativa.',
      pegadinha: 'Confundir tese com argumento.',
      comoApareceEmConcurso: 'Textos argumentativos.'
    },
    tags: ['argumentação', 'tese']
  },
  {
    id: 'Q-DID-PT-1602',
    tipo: 'DIDATICA',
    area: 'TEXT',
    moduloId: 'PT-16',
    subtema: 'Reescrita — sentido + gramática',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'Considere a reescrita: "Os alunos do terceiro ano, foram aprovados no vestibular, segundo a diretora." Sobre a reescrita:',
    alternativas: [
      { id: 'A', texto: 'Está correta — mantém o sentido e a gramática.' },
      { id: 'B', texto: 'Está incorreta — há vírgula separando o sujeito do verbo.' },
      { id: 'C', texto: 'Está correta, mas o sentido mudou.' },
      { id: 'D', texto: 'Está incorreta — o verbo deveria estar no singular.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A vírgula após "terceiro ano" separa o sujeito do verbo — ERRO clássico.',
      incorretas: { A: 'Ignora o erro gramatical.', C: 'O erro é gramatical.', D: 'A concordância está correta (plural).' },
      conceitoCobrado: 'Reescrita — sentido + gramática.',
      pegadinha: 'Banca insere erro gramatical em alternativa aparentemente correta.',
      comoApareceEmConcurso: 'Questão integrada clássica.'
    },
    tags: ['reescrita', 'vírgula']
  },
  {
    id: 'Q-DID-PT-1603',
    tipo: 'DIDATICA',
    area: 'TEXT',
    moduloId: 'PT-16',
    subtema: 'Intertextualidade',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'Sobre intertextualidade, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É sinônimo de plágio.' },
      { id: 'B', texto: 'É o diálogo consciente e declarado entre textos (citação, paródia, paráfrase, alusão).' },
      { id: 'C', texto: 'É um recurso apenas literário, sem uso em provas de concurso.' },
      { id: 'D', texto: 'É vedada na argumentação.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Intertextualidade é o diálogo declarado entre textos — recurso legítimo.',
      incorretas: { A: 'Plágio é apropriação indevida sem crédito.', C: 'Aparece em textos argumentativos, publicitários, jornalísticos.', D: 'É recurso legítimo e frequente.' },
      conceitoCobrado: 'Intertextualidade.',
      pegadinha: 'Confundir com plágio.',
      comoApareceEmConcurso: 'Interpretação e argumentação.'
    },
    tags: ['intertextualidade']
  },
  {
    id: 'Q-DID-PT-1604',
    tipo: 'DIDATICA',
    area: 'TEXT',
    moduloId: 'PT-16',
    subtema: 'Argumento de autoridade',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'Em um texto argumentativo, o trecho "Segundo o IBGE, o desemprego caiu 2 pontos" é exemplo de:',
    alternativas: [
      { id: 'A', texto: 'Argumento de autoridade com dado factual.' },
      { id: 'B', texto: 'Opinião do autor.' },
      { id: 'C', texto: 'Intertextualidade por paródia.' },
      { id: 'D', texto: 'Ironia.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Citação de instituição reconhecida (IBGE) com dado objetivo = argumento de autoridade com base factual.',
      incorretas: { B: 'Não é opinião — é dado.', C: 'Não há paródia.', D: 'Não há ironia.' },
      conceitoCobrado: 'Tipos de argumento.',
      pegadinha: 'Confundir autoridade com opinião.',
      comoApareceEmConcurso: 'Textos argumentativos.'
    },
    tags: ['argumentação', 'autoridade']
  },
  {
    id: 'Q-DID-PT-1605',
    tipo: 'DIDATICA',
    area: 'TEXT',
    moduloId: 'PT-16',
    subtema: 'Efeitos expressivos',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'No trecho "Que belo exemplo de honestidade!", dito ironicamente por um jornalista após um escândalo, o efeito expressivo empregado é:',
    alternativas: [
      { id: 'A', texto: 'Eufemismo.' },
      { id: 'B', texto: 'Hipérbole.' },
      { id: 'C', texto: 'Ironia.' },
      { id: 'D', texto: 'Metáfora.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Ironia: dizer o contrário do que se pretende significar — no caso, criticar pela inversão do sentido.',
      incorretas: { A: 'Eufemismo suaviza (ex.: "ele nos deixou" por "morreu").', B: 'Hipérbole exagera (ex.: "chorei rios de lágrimas").', D: 'Metáfora compara implicitamente (ex.: "seus olhos são o mar").' },
      conceitoCobrado: 'Figuras de linguagem / efeitos expressivos.',
      pegadinha: 'Não perceber a ironia.',
      comoApareceEmConcurso: 'Interpretação e análise textual.'
    },
    tags: ['ironia', 'figuras de linguagem']
  },
  {
    id: 'Q-DID-PT-1606',
    tipo: 'DIDATICA',
    area: 'TEXT',
    moduloId: 'PT-16',
    subtema: 'Estratégia integrada',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'Em uma questão de reescrita que pede "manter o sentido e a correção gramatical", a estratégia correta é:',
    alternativas: [
      { id: 'A', texto: 'Verificar apenas o sentido, pois a gramática já está correta.' },
      { id: 'B', texto: 'Verificar apenas a gramática, pois o sentido raramente muda.' },
      { id: 'C', texto: 'Verificar SEMPRE duas coisas: (a) se o sentido foi mantido; (b) se não há erro gramatical na alternativa.' },
      { id: 'D', texto: 'Marcar a alternativa mais longa, pois costuma ser a mais completa.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A banca coloca armadilhas duplas: alternativas que mantêm o sentido, mas com erro gramatical; ou alternativas gramaticalmente corretas, mas com sentido alterado.',
      incorretas: { A: 'Erro gramatical escondido é comum.', B: 'Sentido pode mudar com conectores.', D: 'Tamanho não é critério.' },
      conceitoCobrado: 'Estratégia em questões integradas.',
      pegadinha: 'Verificar só uma das duas coisas.',
      comoApareceEmConcurso: 'Reescrita e questões integradas.'
    },
    tags: ['reescrita', 'estratégia']
  },

  /* ============================================================
     PT-02 — Tipologia, Gêneros Textuais e Comunicação
  ============================================================ */
  {
    id: 'Q-DID-PT-0201',
    tipo: 'DIDATICA',
    area: 'LEIT',
    moduloId: 'PT-02',
    subtema: 'Tipo textual',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Uma bula de remédio, uma receita de bolo e um manual de instruções são exemplos predominantes de qual tipo textual?',
    alternativas: [
      { id: 'A', texto: 'Narração.' },
      { id: 'B', texto: 'Descrição.' },
      { id: 'C', texto: 'Argumentação.' },
      { id: 'D', texto: 'Injunção (instrucional).' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Textos que instruem, orientam e apresentam sequência de passos são INJUNTIVOS. Uso de verbos no imperativo.',
      incorretas: { A: 'Narração conta fatos, com personagens e ação.', B: 'Descrição caracteriza seres e objetos.', C: 'Argumentação defende uma tese.' },
      conceitoCobrado: 'Tipologia textual.',
      pegadinha: 'Confundir injunção com exposição.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['injunção', 'tipologia']
  },
  {
    id: 'Q-DID-PT-0202',
    tipo: 'DIDATICA',
    area: 'LEIT',
    moduloId: 'PT-02',
    subtema: 'Tipo x gênero',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre a diferença entre TIPO textual e GÊNERO textual, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'TIPO é a categoria abstrata de organização do discurso (narração, descrição, exposição, argumentação, injunção); GÊNERO é a forma concreta e social (notícia, receita, e-mail).' },
      { id: 'C', texto: 'GÊNERO é abstrato; TIPO é concreto.' },
      { id: 'D', texto: 'Todo gênero tem apenas um tipo textual.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'TIPO = modo de organizar o discurso. GÊNERO = forma social concreta.',
      incorretas: { A: 'São conceitos distintos.', C: 'Inverte.', D: 'Um gênero pode conter vários tipos.' },
      conceitoCobrado: 'Tipo x gênero.',
      pegadinha: 'Tratar como sinônimos.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['tipo', 'gênero']
  },
  {
    id: 'Q-DID-PT-0203',
    tipo: 'DIDATICA',
    area: 'LEIT',
    moduloId: 'PT-02',
    subtema: 'Funções da linguagem',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Uma propaganda com o slogan "Compre agora e transforme seu treino!" apresenta, predominantemente, qual função da linguagem?',
    alternativas: [
      { id: 'A', texto: 'Referencial (informar).' },
      { id: 'B', texto: 'Apelativa (conativa).' },
      { id: 'C', texto: 'Metalinguística.' },
      { id: 'D', texto: 'Fática.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A propaganda busca influenciar o leitor a agir — função APELATIVA (conativa). Verbos no imperativo.',
      incorretas: { A: 'Referencial informa objetivamente.', C: 'Metalinguística fala da própria linguagem.', D: 'Fática mantém contato.' },
      conceitoCobrado: 'Funções da linguagem.',
      pegadinha: 'Confundir apelativa com referencial.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['funções da linguagem']
  },
  {
    id: 'Q-DID-PT-0204',
    tipo: 'DIDATICA',
    area: 'LEIT',
    moduloId: 'PT-02',
    subtema: 'Narração x descrição',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre narração e descrição, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Ambas contam fatos em sequência temporal.' },
      { id: 'B', texto: 'Narração apresenta AÇÃO e personagens; descrição caracteriza seres, objetos ou lugares (ESTADO).' },
      { id: 'C', texto: 'Descrição é sempre mais longa que narração.' },
      { id: 'D', texto: 'Narração não tem personagens.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'NARRAÇÃO: ação, personagens, tempo, espaço. DESCRIÇÃO: caracterização, estado.',
      incorretas: { A: 'Só a narração conta fatos.', C: 'Extensão não define tipo.', D: 'Narração tem personagens.' },
      conceitoCobrado: 'Narração x descrição.',
      pegadinha: 'Confundir as duas.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['narração', 'descrição']
  },
  {
    id: 'Q-DID-PT-0205',
    tipo: 'DIDATICA',
    area: 'LEIT',
    moduloId: 'PT-02',
    subtema: 'Exposição x argumentação',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre exposição e argumentação, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Exposição apresenta informação de forma neutra; argumentação defende uma tese com argumentos.' },
      { id: 'C', texto: 'Argumentação só ocorre em textos jornalísticos.' },
      { id: 'D', texto: 'Exposição sempre tem tese.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'EXPOSIÇÃO: informa, sem defender. ARGUMENTAÇÃO: defende tese com argumentos.',
      incorretas: { A: 'São distintos.', C: 'Aparece também em redações, editoriais, resenhas.', D: 'Tese é característica da argumentação.' },
      conceitoCobrado: 'Exposição x argumentação.',
      pegadinha: 'Confundir as duas.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['exposição', 'argumentação']
  },

  /* ============================================================
     PT-03 — Semântica e Sentido das Palavras
  ============================================================ */
  {
    id: 'Q-DID-PT-0301',
    tipo: 'DIDATICA',
    area: 'LEXI',
    moduloId: 'PT-03',
    subtema: 'Denotação x conotação',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Na frase "Ele tem um coração de pedra", o termo "coração de pedra" está em sentido:',
    alternativas: [
      { id: 'A', texto: 'Denotativo (literal).' },
      { id: 'B', texto: 'Conotativo (figurado).' },
      { id: 'C', texto: 'Científico.' },
      { id: 'D', texto: 'Técnico.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Sentido figurado — pessoa fria/insensível. Também é uma METÁFORA.',
      incorretas: { A: 'Denotativo seria literal (órgão de pedra).', C: 'Não é linguagem científica.', D: 'Não é linguagem técnica.' },
      conceitoCobrado: 'Denotação x conotação.',
      pegadinha: 'Confundir sentido literal com figurado.',
      comoApareceEmConcurso: 'Cobrança clássica.'
    },
    tags: ['denotação', 'conotação']
  },
  {
    id: 'Q-DID-PT-0302',
    tipo: 'DIDATICA',
    area: 'LEXI',
    moduloId: 'PT-03',
    subtema: 'Homônimos x parônimos',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'As palavras "eminente" (importante) e "iminente" (que está por vir) são exemplos de:',
    alternativas: [
      { id: 'A', texto: 'Homônimos.' },
      { id: 'B', texto: 'Parônimos.' },
      { id: 'C', texto: 'Sinônimos.' },
      { id: 'D', texto: 'Antônimos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'PARÔNIMOS: parecidos, mas diferentes na pronúncia, escrita e sentido.',
      incorretas: { A: 'Homônimos têm mesma pronúncia/escrita (ex.: "cela" e "sela").', C: 'Sinônimos têm sentido parecido.', D: 'Antônimos têm sentido oposto.' },
      conceitoCobrado: 'Homônimos x parônimos.',
      pegadinha: 'Trocar os conceitos.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['parônimos']
  },
  {
    id: 'Q-DID-PT-0303',
    tipo: 'DIDATICA',
    area: 'LEXI',
    moduloId: 'PT-03',
    subtema: 'Figuras de linguagem',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Na frase "Chorei rios de lágrimas", a figura de linguagem presente é:',
    alternativas: [
      { id: 'A', texto: 'Metáfora.' },
      { id: 'B', texto: 'Metonímia.' },
      { id: 'C', texto: 'Hipérbole.' },
      { id: 'D', texto: 'Eufemismo.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'HIPÉRBOLE: exagero intencional. "Rios de lágrimas" não é literal.',
      incorretas: { A: 'Metáfora é comparação implícita.', B: 'Metonímia é substituição por proximidade.', D: 'Eufemismo suaviza.' },
      conceitoCobrado: 'Figuras de linguagem.',
      pegadinha: 'Confundir hipérbole com metáfora.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['hipérbole', 'figuras de linguagem']
  },
  {
    id: 'Q-DID-PT-0304',
    tipo: 'DIDATICA',
    area: 'LEXI',
    moduloId: 'PT-03',
    subtema: 'Polissemia x ambiguidade',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Na frase "João disse a Pedro que ele era o culpado", o problema de sentido é:',
    alternativas: [
      { id: 'A', texto: 'Polissemia natural.' },
      { id: 'B', texto: 'Ambiguidade — não se sabe a quem o pronome "ele" se refere (João ou Pedro).' },
      { id: 'C', texto: 'Denotação.' },
      { id: 'D', texto: 'Sinonímia.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'AMBIGUIDADE: dupla interpretação em um mesmo contexto. O pronome "ele" pode retomar "João" ou "Pedro".',
      incorretas: { A: 'Polissemia é da palavra, não da frase.', C: 'Denotação é sentido literal.', D: 'Sinonímia é relação entre palavras.' },
      conceitoCobrado: 'Ambiguidade.',
      pegadinha: 'Confundir polissemia com ambiguidade.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['ambiguidade', 'polissemia']
  },
  {
    id: 'Q-DID-PT-0305',
    tipo: 'DIDATICA',
    area: 'LEXI',
    moduloId: 'PT-03',
    subtema: 'Metáfora x metonímia',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Em "Li Machado de Assis", a figura de linguagem presente é:',
    alternativas: [
      { id: 'A', texto: 'Metáfora.' },
      { id: 'B', texto: 'Metonímia.' },
      { id: 'C', texto: 'Hipérbole.' },
      { id: 'D', texto: 'Ironia.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'METONÍMIA: substituição por proximidade — autor pela obra. Leu as obras, não a pessoa.',
      incorretas: { A: 'Metáfora é comparação implícita.', C: 'Hipérbole é exagero.', D: 'Ironia é sentido contrário.' },
      conceitoCobrado: 'Metáfora x metonímia.',
      pegadinha: 'Confundir as duas.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['metonímia']
  },

  /* ============================================================
     PT-04 — Ortografia Oficial e Acentuação
  ============================================================ */
  {
    id: 'Q-DID-PT-0401',
    tipo: 'DIDATICA',
    area: 'ORTO',
    moduloId: 'PT-04',
    subtema: 'Acentuação',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Assinale a alternativa em que TODAS as palavras estão corretamente acentuadas:',
    alternativas: [
      { id: 'A', texto: 'Café, facil, arvore, saida.' },
      { id: 'B', texto: 'Café, fácil, árvore, saída.' },
      { id: 'C', texto: 'Cafe, fácil, árvore, saída.' },
      { id: 'D', texto: 'Café, fácil, arvore, saida.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'café (oxítona em E), fácil (paroxítona em L), árvore (proparoxítona), saída (hiato).',
      incorretas: { A: 'Faltam acentos em fácil, árvore, saída.', C: 'Falta acento em café.', D: 'Faltam acentos em árvore, saída.' },
      conceitoCobrado: 'Regras de acentuação.',
      pegadinha: 'Esquecer as regras de paroxítonas e proparoxítonas.',
      comoApareceEmConcurso: 'Cobrança frequente.'
    },
    tags: ['acentuação']
  },
  {
    id: 'Q-DID-PT-0402',
    tipo: 'DIDATICA',
    area: 'ORTO',
    moduloId: 'PT-04',
    subtema: 'Proparoxítonas',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Assinale a alternativa que apresenta uma palavra proparoxítona corretamente acentuada:',
    alternativas: [
      { id: 'A', texto: 'Café.' },
      { id: 'B', texto: 'Fácil.' },
      { id: 'C', texto: 'Árvore.' },
      { id: 'D', texto: 'Caderno.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: '"Árvore" tem a antepenúltima sílaba tônica (proparoxítona) e é sempre acentuada.',
      incorretas: { A: 'Café é oxítona.', B: 'Fácil é paroxítona.', D: 'Caderno é paroxítona sem acento.' },
      conceitoCobrado: 'Proparoxítonas são todas acentuadas.',
      pegadinha: 'Confundir classificação.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['proparoxítona']
  },
  {
    id: 'Q-DID-PT-0403',
    tipo: 'DIDATICA',
    area: 'ORTO',
    moduloId: 'PT-04',
    subtema: 'Uso dos porquês',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Complete: "Não sei ___ ele não veio, mas imagino o ___."',
    alternativas: [
      { id: 'A', texto: 'porque / porquê' },
      { id: 'B', texto: 'por que / porquê' },
      { id: 'C', texto: 'porquê / porque' },
      { id: 'D', texto: 'por que / por que' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '"POR QUE" (pergunta indireta, equivale a "por qual razão"); "PORQUÊ" (substantivo, equivale a "motivo").',
      incorretas: { A: '"Porque" é conjunção causal — não cabe aqui.', C: 'Inverte.', D: 'O segundo "por que" está errado — é substantivo.' },
      conceitoCobrado: 'Uso dos porquês.',
      pegadinha: 'Trocar as formas.',
      comoApareceEmConcurso: 'Cobrança clássica.'
    },
    tags: ['porquês']
  },
  {
    id: 'Q-DID-PT-0404',
    tipo: 'DIDATICA',
    area: 'ORTO',
    moduloId: 'PT-04',
    subtema: 'Acento diferencial',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Assinale a alternativa em que o acento diferencial está empregado CORRETAMENTE:',
    alternativas: [
      { id: 'A', texto: 'Ele não pode vir ontem.' },
      { id: 'B', texto: 'Ele não pôde vir ontem.' },
      { id: 'C', texto: 'Ele não póde vir ontem.' },
      { id: 'D', texto: 'Ele não pôde vir hoje.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '"PÔDE" é o passado (pretérito perfeito). Combinando com "ontem", a forma correta é "pôde".',
      incorretas: { A: 'Falta o acento — "pode" é presente.', C: 'Acento errado.', D: 'Tempo verbal incompatível com "hoje".' },
      conceitoCobrado: 'Acento diferencial pôde/pode.',
      pegadinha: 'Confundir presente com passado.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['acento diferencial']
  },
  {
    id: 'Q-DID-PT-0405',
    tipo: 'DIDATICA',
    area: 'ORTO',
    moduloId: 'PT-04',
    subtema: 'Hífen pós-Acordo Ortográfico',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Após o Acordo Ortográfico, qual a grafia CORRETA?',
    alternativas: [
      { id: 'A', texto: 'Anti-racista.' },
      { id: 'B', texto: 'Antirracista.' },
      { id: 'C', texto: 'Anti racista.' },
      { id: 'D', texto: 'Antir-racista.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Prefixo "anti-" (terminado em vogal) + palavra iniciada por R → dobra o R e NÃO usa hífen: "antirracista".',
      incorretas: { A: 'Hífen abolido nesse caso.', C: 'Sem hífen e sem duplicação.', D: 'Hífen em local errado.' },
      conceitoCobrado: 'Regras do hífen pós-Acordo.',
      pegadinha: 'Aplicar regras antigas.',
      comoApareceEmConcurso: 'Cobrança atualizada.'
    },
    tags: ['hífen']
  },

  /* ============================================================
     PT-05 — Classes de Palavras: Visão Geral
  ============================================================ */
  {
    id: 'Q-DID-PT-0501',
    tipo: 'DIDATICA',
    area: 'LEXI',
    moduloId: 'PT-05',
    subtema: 'Advérbio x adjetivo',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Na frase "Ele fala muito bem", a palavra "muito" pertence à classe:',
    alternativas: [
      { id: 'A', texto: 'Adjetivo.' },
      { id: 'B', texto: 'Substantivo.' },
      { id: 'C', texto: 'Advérbio.' },
      { id: 'D', texto: 'Pronome.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: '"Muito" modifica o advérbio "bem", intensificando. É ADVÉRBIO — invariável.',
      incorretas: { A: 'Adjetivo caracteriza substantivo.', B: 'Não nomeia.', D: 'Não substitui substantivo.' },
      conceitoCobrado: 'Advérbio x adjetivo.',
      pegadinha: 'Confundir com "muitos alunos" (adjetivo/pronome indefinido).',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['advérbio']
  },
  {
    id: 'Q-DID-PT-0502',
    tipo: 'DIDATICA',
    area: 'LEXI',
    moduloId: 'PT-05',
    subtema: 'Preposição x conjunção',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'A palavra "e" em "Pedro e Maria estudam" pertence à classe:',
    alternativas: [
      { id: 'A', texto: 'Preposição.' },
      { id: 'B', texto: 'Conjunção.' },
      { id: 'C', texto: 'Artigo.' },
      { id: 'D', texto: 'Pronome.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '"E" é CONJUNÇÃO coordenativa aditiva — liga termos de mesma função ou orações.',
      incorretas: { A: 'Preposição liga termos com dependência.', C: 'Artigo determina o substantivo.', D: 'Pronome substitui/acompanha o substantivo.' },
      conceitoCobrado: 'Preposição x conjunção.',
      pegadinha: 'Confundir as duas.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['conjunção']
  },
  {
    id: 'Q-DID-PT-0503',
    tipo: 'DIDATICA',
    area: 'LEXI',
    moduloId: 'PT-05',
    subtema: 'Palavra que muda de classe',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Na frase "O jantar está pronto", a palavra "jantar" pertence à classe:',
    alternativas: [
      { id: 'A', texto: 'Verbo.' },
      { id: 'B', texto: 'Substantivo.' },
      { id: 'C', texto: 'Adjetivo.' },
      { id: 'D', texto: 'Advérbio.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Precedido de artigo "o", "jantar" funciona como SUBSTANTIVO (nomeia a refeição). Em "Vou jantar agora", seria VERBO.',
      incorretas: { A: 'Seria verbo sem o artigo.', C: 'Não caracteriza.', D: 'Não modifica verbo.' },
      conceitoCobrado: 'Palavra que muda de classe conforme contexto.',
      pegadinha: 'Analisar a palavra isolada.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['substantivação']
  },
  {
    id: 'Q-DID-PT-0504',
    tipo: 'DIDATICA',
    area: 'LEXI',
    moduloId: 'PT-05',
    subtema: 'Substantivo x adjetivo',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Em "O jovem estudioso foi aprovado", os termos "jovem" e "estudioso" são, respectivamente:',
    alternativas: [
      { id: 'A', texto: 'Adjetivo e substantivo.' },
      { id: 'B', texto: 'Substantivo e adjetivo.' },
      { id: 'C', texto: 'Advérbio e substantivo.' },
      { id: 'D', texto: 'Substantivo e substantivo.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '"Jovem" com artigo "o" é SUBSTANTIVO. "Estudioso" caracteriza o substantivo → ADJETIVO.',
      incorretas: { A: 'Inverte.', C: 'Nenhum é advérbio.', D: 'Não são os dois substantivos.' },
      conceitoCobrado: 'Substantivo x adjetivo.',
      pegadinha: 'Confundir as classes.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['substantivo', 'adjetivo']
  },
  {
    id: 'Q-DID-PT-0505',
    tipo: 'DIDATICA',
    area: 'LEXI',
    moduloId: 'PT-05',
    subtema: 'Pronome x artigo',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Em "Eu a vi ontem", o termo "a" pertence à classe:',
    alternativas: [
      { id: 'A', texto: 'Artigo.' },
      { id: 'B', texto: 'Pronome.' },
      { id: 'C', texto: 'Preposição.' },
      { id: 'D', texto: 'Conjunção.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '"A" aqui substitui um substantivo feminino ("ela"). É PRONOME pessoal oblíquo. Não é artigo, pois não determina substantivo.',
      incorretas: { A: 'Artigo determina substantivo.', C: 'Não é preposição.', D: 'Não é conjunção.' },
      conceitoCobrado: 'Pronome x artigo.',
      pegadinha: 'Achar que "a" é sempre artigo.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['pronome', 'artigo']
  },

  /* ============================================================
     PT-07 — Sintaxe da Oração e do Período
  ============================================================ */
  {
    id: 'Q-DID-PT-0701',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-07',
    subtema: 'Objeto direto x indireto',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Na frase "Entreguei o livro ao professor", os termos "o livro" e "ao professor" são, respectivamente:',
    alternativas: [
      { id: 'A', texto: 'Objeto indireto e objeto direto.' },
      { id: 'B', texto: 'Objeto direto e objeto indireto.' },
      { id: 'C', texto: 'Complemento nominal e agente da passiva.' },
      { id: 'D', texto: 'Sujeito e predicativo.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '"O livro" (sem preposição) = OBJETO DIRETO. "Ao professor" (com preposição) = OBJETO INDIRETO.',
      incorretas: { A: 'Inverte.', C: 'Não são esses termos.', D: 'Sujeito é quem faz.' },
      conceitoCobrado: 'Objeto direto x indireto.',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança clássica.'
    },
    tags: ['objeto direto', 'objeto indireto']
  },
  {
    id: 'Q-DID-PT-0702',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-07',
    subtema: 'Sujeito oculto x indeterminado',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Na frase "Roubaram minha bolsa", o sujeito é classificado como:',
    alternativas: [
      { id: 'A', texto: 'Simples.' },
      { id: 'B', texto: 'Oculto.' },
      { id: 'C', texto: 'Indeterminado.' },
      { id: 'D', texto: 'Inexistente.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'SUJEITO INDETERMINADO: verbo na 3ª pessoa do plural sem sujeito expresso. Não se sabe quem roubou.',
      incorretas: { A: 'Sujeito simples estaria expresso.', B: 'Oculto pode ser identificado; aqui, não.', D: 'Inexistente não há (verbos impessoais).' },
      conceitoCobrado: 'Tipos de sujeito.',
      pegadinha: 'Confundir oculto com indeterminado.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['sujeito indeterminado']
  },
  {
    id: 'Q-DID-PT-0703',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-07',
    subtema: 'Adjunto adnominal x complemento nominal',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Na expressão "o medo de altura", o termo "de altura" é classificado como:',
    alternativas: [
      { id: 'A', texto: 'Adjunto adnominal.' },
      { id: 'B', texto: 'Complemento nominal.' },
      { id: 'C', texto: 'Aposto.' },
      { id: 'D', texto: 'Vocativo.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'COMPLEMENTO NOMINAL: completa o substantivo abstrato "medo" com preposição, indicando o alvo do medo.',
      incorretas: { A: 'Adjunto adnominal caracteriza (posse, qualidade).', C: 'Aposto explica.', D: 'Vocativo chama.' },
      conceitoCobrado: 'Adjunto adnominal x complemento nominal.',
      pegadinha: 'Confundir as duas funções.',
      comoApareceEmConcurso: 'Cobrança clássica.'
    },
    tags: ['complemento nominal']
  },
  {
    id: 'Q-DID-PT-0704',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-07',
    subtema: 'Coordenada x subordinada',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Na frase "Estudei muito, mas não passei", a segunda oração ("mas não passei") é classificada como:',
    alternativas: [
      { id: 'A', texto: 'Oração subordinada substantiva.' },
      { id: 'B', texto: 'Oração subordinada adjetiva.' },
      { id: 'C', texto: 'Oração coordenada adversativa.' },
      { id: 'D', texto: 'Oração subordinada adverbial.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'COORDENADA ADVERSATIVA: liga orações independentes com ideia de contraste ("mas").',
      incorretas: { A: 'Substantiva exerce função de substantivo.', B: 'Adjetiva caracteriza substantivo.', D: 'Adverbial indica circunstância.' },
      conceitoCobrado: 'Orações coordenadas.',
      pegadinha: 'Confundir com subordinada.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['coordenada adversativa']
  },
  {
    id: 'Q-DID-PT-0705',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-07',
    subtema: 'Predicado',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Na frase "Ele chegou cansado", o predicado é classificado como:',
    alternativas: [
      { id: 'A', texto: 'Verbal.' },
      { id: 'B', texto: 'Nominal.' },
      { id: 'C', texto: 'Verbo-nominal.' },
      { id: 'D', texto: 'Inexistente.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'PREDICADO VERBO-NOMINAL: tem dois núcleos — verbo ("chegou") + predicativo do sujeito ("cansado").',
      incorretas: { A: 'Verbal só tem verbo significativo.', B: 'Nominal tem verbo de ligação + predicativo.', D: 'Existe predicado.' },
      conceitoCobrado: 'Tipos de predicado.',
      pegadinha: 'Confundir os três tipos.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['predicado verbo-nominal']
  },

  /* ============================================================
     PT-10 — Regência Verbal, Regência Nominal e Crase
  ============================================================ */
  {
    id: 'Q-DID-PT-1001',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-10',
    subtema: 'Crase',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Assinale a alternativa em que a crase está empregada CORRETAMENTE:',
    alternativas: [
      { id: 'A', texto: 'Vou à pé até a escola.' },
      { id: 'B', texto: 'Começou à chover forte.' },
      { id: 'C', texto: 'Entreguei o livro à professora.' },
      { id: 'D', texto: 'Fiquei cara à cara com ele.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: '"À professora": preposição "a" + artigo "a" + palavra feminina. Crase correta.',
      incorretas: { A: 'Palavra masculina ("pé") — sem crase.', B: 'Antes de verbo — sem crase.', D: 'Palavras repetidas — sem crase.' },
      conceitoCobrado: 'Crase — casos obrigatórios, proibidos.',
      pegadinha: 'Crase antes de palavra masculina e verbo.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['crase']
  },
  {
    id: 'Q-DID-PT-1002',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-10',
    subtema: 'Verbos de dupla regência',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre o verbo "assistir", é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Tem sempre a mesma regência.' },
      { id: 'B', texto: 'No sentido de "ver", pede a preposição "a" ("Assisti ao filme"); no sentido de "ajudar", não pede preposição ("O médico assistiu o paciente").' },
      { id: 'C', texto: 'Sempre rege preposição "em".' },
      { id: 'D', texto: 'Nunca aceita preposição.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '"Assistir" tem dupla regência: VER → a; AJUDAR → sem preposição.',
      incorretas: { A: 'Depende do sentido.', C: 'Não é "em".', D: 'Pode aceitar.' },
      conceitoCobrado: 'Verbos de dupla regência.',
      pegadinha: 'Achar que a regência é fixa.',
      comoApareceEmConcurso: 'Cobrança clássica.'
    },
    tags: ['assistir', 'regência']
  },
  {
    id: 'Q-DID-PT-1003',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-10',
    subtema: 'Crase proibida',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Em qual alternativa a crase é PROIBIDA?',
    alternativas: [
      { id: 'A', texto: 'Referi-me àquele episódio.' },
      { id: 'B', texto: 'Cheguei à noite.' },
      { id: 'C', texto: 'Vou a Brasília.' },
      { id: 'D', texto: 'Entreguei o livro à Maria.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Crase PROIBIDA antes de nome de cidade sem artigo: "Vou a Brasília".',
      incorretas: { A: 'Crase obrigatória (aquele).', B: 'Crase obrigatória (locução feminina).', D: 'Crase facultativa (nome próprio).' },
      conceitoCobrado: 'Casos de crase.',
      pegadinha: 'Generalizar a crase.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['crase']
  },
  {
    id: 'Q-DID-PT-1004',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-10',
    subtema: 'Regência nominal',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Assinale a alternativa CORRETA quanto à regência nominal:',
    alternativas: [
      { id: 'A', texto: 'Ele é obediente as regras.' },
      { id: 'B', texto: 'Ele é obediente às regras.' },
      { id: 'C', texto: 'Ele é obediente nas regras.' },
      { id: 'D', texto: 'Ele é obediente com regras.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O adjetivo "obediente" pede preposição "a": "obediente às regras". Com "as" (artigo plural), forma "às".',
      incorretas: { A: 'Falta crase.', C: 'Preposição errada.', D: 'Preposição errada.' },
      conceitoCobrado: 'Regência nominal + crase.',
      pegadinha: 'Esquecer a crase.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['regência nominal', 'crase']
  },
  {
    id: 'Q-DID-PT-1005',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-10',
    subtema: 'Teste da palavra masculina',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Para decidir se há crase em "Vou ___ escola", qual teste aplicar?',
    alternativas: [
      { id: 'A', texto: 'Substituir por verbo.' },
      { id: 'B', texto: 'Substituir por palavra masculina: se aparecer "ao", há crase.' },
      { id: 'C', texto: 'Verificar se a palavra seguinte é plural.' },
      { id: 'D', texto: 'Contar as sílabas da frase.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'TESTE DA PALAVRA MASCULINA: substituir por masculino. Se aparecer "ao", há crase. Ex.: "Vou à escola" → "Vou ao colégio" (tem crase).',
      incorretas: { A: 'Não substitui por verbo.', C: 'Plural não decide.', D: 'Não se conta sílabas.' },
      conceitoCobrado: 'Teste prático para crase.',
      pegadinha: 'Não conhecer o teste.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['crase', 'teste']
  },

  /* ============================================================
     PT-06 — Verbos e Pronomes
  ============================================================ */
  {
    id: 'Q-DID-PT-0601',
    tipo: 'DIDATICA',
    area: 'LEXI',
    moduloId: 'PT-06',
    subtema: 'Indicativo x subjuntivo',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Assinale a alternativa em que o verbo está no MODO SUBJUNTIVO:',
    alternativas: [
      { id: 'A', texto: 'Ele estuda todos os dias.' },
      { id: 'B', texto: 'Ele estudou ontem.' },
      { id: 'C', texto: 'Espero que ele estude mais.' },
      { id: 'D', texto: 'Ele estudará amanhã.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'SUBJUNTIVO: expressa dúvida, hipótese, desejo. "Espero que ele estude" — ação como expectativa.',
      incorretas: { A: 'Indicativo presente (certeza).', B: 'Indicativo pretérito perfeito.', D: 'Indicativo futuro do presente.' },
      conceitoCobrado: 'Modos verbais: indicativo x subjuntivo.',
      pegadinha: 'Confundir os modos.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['verbo', 'subjuntivo']
  },
  {
    id: 'Q-DID-PT-0602',
    tipo: 'DIDATICA',
    area: 'LEXI',
    moduloId: 'PT-06',
    subtema: 'Colocação pronominal',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Assinale a alternativa em que a colocação pronominal está CORRETA:',
    alternativas: [
      { id: 'A', texto: 'Me diga a verdade.' },
      { id: 'B', texto: 'Diga-me a verdade.' },
      { id: 'C', texto: 'Diga me a verdade.' },
      { id: 'D', texto: 'Me-diga a verdade.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'No IMPERATIVO AFIRMATIVO, o pronome vai DEPOIS do verbo (ÊNCLISE): "Diga-me a verdade."',
      incorretas: { A: 'Próclise é proibida em imperativo afirmativo no início da frase.', C: 'Falta o hífen.', D: 'Hífen em local errado.' },
      conceitoCobrado: 'Colocação pronominal — ênclise.',
      pegadinha: 'Iniciar frase com pronome oblíquo.',
      comoApareceEmConcurso: 'Cobrança clássica.'
    },
    tags: ['colocação pronominal']
  },
  {
    id: 'Q-DID-PT-0603',
    tipo: 'DIDATICA',
    area: 'LEXI',
    moduloId: 'PT-06',
    subtema: 'Vozes verbais',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'A frase "O livro foi lido pelo aluno" está na voz:',
    alternativas: [
      { id: 'A', texto: 'Ativa.' },
      { id: 'B', texto: 'Passiva analítica.' },
      { id: 'C', texto: 'Reflexiva.' },
      { id: 'D', texto: 'Passiva sintética.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'PASSIVA ANALÍTICA: verbo auxiliar (ser/estar) + particípio. O sujeito sofre a ação.',
      incorretas: { A: 'Ativa: sujeito pratica.', C: 'Reflexiva: sujeito pratica e sofre.', D: 'Sintética: verbo + SE apassivador.' },
      conceitoCobrado: 'Vozes verbais.',
      pegadinha: 'Confundir passiva analítica com sintética.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['voz passiva']
  },
  {
    id: 'Q-DID-PT-0604',
    tipo: 'DIDATICA',
    area: 'LEXI',
    moduloId: 'PT-06',
    subtema: 'Pronome relativo "cujo"',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Assinale a alternativa em que o pronome relativo está empregado CORRETAMENTE:',
    alternativas: [
      { id: 'A', texto: 'O aluno que o pai é médico passou.' },
      { id: 'B', texto: 'O aluno cujo pai é médico passou.' },
      { id: 'C', texto: 'O aluno cujo o pai é médico passou.' },
      { id: 'D', texto: 'O aluno quem o pai é médico passou.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '"CUJO" indica posse e NÃO varia em número. Não se usa artigo depois de "cujo".',
      incorretas: { A: 'Uso incorreto de "que".', C: 'Não se usa artigo após "cujo".', D: '"Quem" não cabe aqui.' },
      conceitoCobrado: 'Pronome relativo "cujo".',
      pegadinha: 'Colocar artigo depois de "cujo".',
      comoApareceEmConcurso: 'Cobrança frequente.'
    },
    tags: ['pronome relativo', 'cujo']
  },
  {
    id: 'Q-DID-PT-0605',
    tipo: 'DIDATICA',
    area: 'LEXI',
    moduloId: 'PT-06',
    subtema: 'Tempos verbais',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre a diferença de sentido entre "Estudei ontem" e "Estudava quando era jovem", é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São equivalentes.' },
      { id: 'B', texto: '"Estudei" é ação pontual (pretérito perfeito); "estudava" é ação contínua/habitual (pretérito imperfeito).' },
      { id: 'C', texto: '"Estudei" é mais formal que "estudava".' },
      { id: 'D', texto: 'Ambos estão no presente.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '"ESTUDEI" (pretérito perfeito): ação pontual, concluída. "ESTUDAVA" (imperfeito): ação contínua, habitual.',
      incorretas: { A: 'Sentidos diferentes.', C: 'Não é questão de formalidade.', D: 'Nenhum é presente.' },
      conceitoCobrado: 'Tempos verbais — aspecto.',
      pegadinha: 'Achar que os pretéritos são equivalentes.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['tempos verbais']
  },

  /* ============================================================
     PT-12 — Reescrita e Equivalência de Frases
  ============================================================ */
  {
    id: 'Q-DID-PT-1201',
    tipo: 'DIDATICA',
    area: 'TEXT',
    moduloId: 'PT-12',
    subtema: 'Reescrita com erro gramatical',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Considere a reescrita: "Os alunos do terceiro ano, foram aprovados no vestibular." Sobre essa reescrita:',
    alternativas: [
      { id: 'A', texto: 'Está correta — mantém o sentido e a gramática.' },
      { id: 'B', texto: 'Está incorreta — há vírgula separando o sujeito do verbo.' },
      { id: 'C', texto: 'Está correta, mas o sentido mudou.' },
      { id: 'D', texto: 'Está incorreta — o verbo deveria estar no singular.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A vírgula após "terceiro ano" separa SUJEITO de VERBO — PROIBIDO.',
      incorretas: { A: 'Há erro gramatical.', C: 'O erro é gramatical, não de sentido.', D: 'A concordância está correta (plural).' },
      conceitoCobrado: 'Reescrita — sentido + gramática.',
      pegadinha: 'Erro gramatical escondido em alternativa aparentemente correta.',
      comoApareceEmConcurso: 'Clássica em reescrita.'
    },
    tags: ['reescrita', 'vírgula']
  },
  {
    id: 'Q-DID-PT-1202',
    tipo: 'DIDATICA',
    area: 'TEXT',
    moduloId: 'PT-12',
    subtema: 'Voz passiva',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Sobre a transformação de "O menino quebrou o vidro" em "O vidro foi quebrado pelo menino", é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O sentido mudou completamente.' },
      { id: 'B', texto: 'Mantém o sentido, com o objeto direto virando sujeito e o sujeito virando agente da passiva.' },
      { id: 'C', texto: 'É impossível fazer essa transformação.' },
      { id: 'D', texto: 'A segunda frase está errada.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Ativa → passiva analítica: objeto direto vira sujeito; sujeito vira agente da passiva. O sentido essencial é mantido.',
      incorretas: { A: 'Sentido mantido, foco alterado.', C: 'Transformação possível.', D: 'Frase correta.' },
      conceitoCobrado: 'Voz ativa x passiva.',
      pegadinha: 'Achar que a passiva muda o sentido.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['voz passiva', 'reescrita']
  },
  {
    id: 'Q-DID-PT-1203',
    tipo: 'DIDATICA',
    area: 'TEXT',
    moduloId: 'PT-12',
    subtema: 'Discurso direto x indireto',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'A frase "Ele disse: — Vou viajar amanhã", em discurso INDIRETO, fica:',
    alternativas: [
      { id: 'A', texto: 'Ele disse que vou viajar amanhã.' },
      { id: 'B', texto: 'Ele disse que iria viajar no dia seguinte.' },
      { id: 'C', texto: 'Ele disse: iria viajar amanhã.' },
      { id: 'D', texto: 'Ele disse que viaja amanhã.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'No discurso indireto: "vou" (presente) → "iria" (futuro do pretérito); "amanhã" → "no dia seguinte".',
      incorretas: { A: 'Mantém o presente sem ajuste.', C: 'Mistura discurso direto e indireto.', D: 'Tempo verbal incoerente.' },
      conceitoCobrado: 'Discurso direto x indireto.',
      pegadinha: 'Não fazer os ajustes de tempo e de advérbios.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['discurso indireto']
  },
  {
    id: 'Q-DID-PT-1204',
    tipo: 'DIDATICA',
    area: 'TEXT',
    moduloId: 'PT-12',
    subtema: 'Conectores e sentido',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre a equivalência entre "Não obstante o cansaço, ele continuou" e "Embora estivesse cansado, ele continuou", é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O sentido é completamente diferente.' },
      { id: 'B', texto: 'São equivalentes: ambas expressam CONCESSÃO.' },
      { id: 'C', texto: 'A primeira expressa causa; a segunda, consequência.' },
      { id: 'D', texto: 'A segunda está errada.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '"Não obstante" e "embora" são conectores de CONCESSÃO — admitem o fato contrário, mas o resultado prevalece.',
      incorretas: { A: 'O sentido é o mesmo.', C: 'Nenhuma expressa causa/consequência.', D: 'A segunda está correta.' },
      conceitoCobrado: 'Concessão — equivalência de conectores.',
      pegadinha: 'Confundir concessão com causa.',
      comoApareceEmConcurso: 'Cobrança de reescrita e coesão.'
    },
    tags: ['concessão', 'conectores']
  },
  {
    id: 'Q-DID-PT-1205',
    tipo: 'DIDATICA',
    area: 'TEXT',
    moduloId: 'PT-12',
    subtema: 'Paralelismo',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Assinale a alternativa em que o PARALELISMO está respeitado:',
    alternativas: [
      { id: 'A', texto: 'Ele gosta de ler, escrever e de descansar.' },
      { id: 'B', texto: 'Ele gosta de ler, escrever e descansar.' },
      { id: 'C', texto: 'Ele gosta de ler, escreve e descansar.' },
      { id: 'D', texto: 'Ele gosta ler, escrever e descansar.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'PARALELISMO: manter a mesma estrutura na enumeração. Todos os verbos no infinitivo, com a mesma preposição.',
      incorretas: { A: 'Repete "de" desnecessariamente, quebrando o paralelismo.', C: 'Mistura infinitivo com forma conjugada.', D: 'Falta preposição em "gosta ler".' },
      conceitoCobrado: 'Paralelismo sintático.',
      pegadinha: 'Repetir a preposição em todos os itens.',
      comoApareceEmConcurso: 'Cobrança em reescrita.'
    },
    tags: ['paralelismo']
  }

];
