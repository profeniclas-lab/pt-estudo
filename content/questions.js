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
  }

];
