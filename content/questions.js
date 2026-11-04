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
  },
   
  /* ============================================================
     PT-13 — Formação e Estrutura das Palavras (CONDICIONAL)
     ============================================================ */
  {
    id: 'Q-DID-PT-1301',
    tipo: 'DIDATICA',
    area: 'LEXI',
    moduloId: 'PT-13',
    subtema: 'Processos de formação',
    dificuldade: 2,
    prioridade: 'condicional',
    enunciado: 'A palavra "deslealdade" (des + leal + dade) é formada por:',
    alternativas: [
      { id: 'A', texto: 'Derivação prefixal.' },
      { id: 'B', texto: 'Derivação sufixal.' },
      { id: 'C', texto: 'Derivação prefixal e sufixal, pois existem "desleal" e "lealdade" isoladamente.' },
      { id: 'D', texto: 'Derivação parassintética, pois tem prefixo e sufixo.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: '"Deslealdade" é PREFIXAL E SUFIXAL: o prefixo ("des-") e o sufixo ("-dade") podem existir independentemente — existem "desleal" e "lealdade".',
      incorretas: { A: 'Só prefixal seria se não houvesse sufixo.', B: 'Só sufixal seria se não houvesse prefixo.', D: 'Parassintética exigiria que nem "desleal" nem "lealdade" existissem isoladamente.' },
      conceitoCobrado: 'Distinção entre derivação prefixal e sufixal e derivação parassintética.',
      pegadinha: 'Achar que todo prefixo + sufixo é parassintética.',
      comoApareceEmConcurso: 'Cobrança direta em formação de palavras.'
    },
    tags: ['derivação', 'prefixal e sufixal']
  },
  {
    id: 'Q-DID-PT-1302',
    tipo: 'DIDATICA',
    area: 'LEXI',
    moduloId: 'PT-13',
    subtema: 'Derivação parassintética',
    dificuldade: 3,
    prioridade: 'condicional',
    enunciado: 'A palavra "amanhecer" é formada por:',
    alternativas: [
      { id: 'A', texto: 'Derivação prefixal e sufixal.' },
      { id: 'B', texto: 'Derivação parassintética, pois prefixo e sufixo são dependentes — não existem "amanhe" nem "manhecer".' },
      { id: 'C', texto: 'Composição por justaposição.' },
      { id: 'D', texto: 'Derivação imprópria.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '"Amanhecer" é PARASSINTÉTICA: o prefixo ("a-") e o sufixo ("-ecer") são adicionados SIMULTANEAMENTE. Teste: nem "amanhe" nem "manhecer" existem isoladamente.',
      incorretas: { A: 'Prefixal e sufixal exigiria formas intermediárias.', C: 'Composição uniria dois radicais.', D: 'Imprópria muda a classe sem alterar a forma.' },
      conceitoCobrado: 'Aplicação do teste de retirada para distinguir parassintética de prefixal-sufixal.',
      pegadinha: 'Confundir os dois tipos de derivação.',
      comoApareceEmConcurso: 'Pegadinha clássica em formação de palavras.'
    },
    tags: ['parassintética', 'derivação']
  },
  {
    id: 'Q-DID-PT-1303',
    tipo: 'DIDATICA',
    area: 'LEXI',
    moduloId: 'PT-13',
    subtema: 'Composição',
    dificuldade: 2,
    prioridade: 'condicional',
    enunciado: 'Assinale a alternativa que apresenta apenas palavras formadas por COMPOSIÇÃO POR AGLUTINAÇÃO:',
    alternativas: [
      { id: 'A', texto: 'passatempo, guarda-roupa, girassol.' },
      { id: 'B', texto: 'planalto, aguardente, pernalta.' },
      { id: 'C', texto: 'refazer, desleal, infeliz.' },
      { id: 'D', texto: 'entardecer, amanhecer, esfriar.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'AGLUTINAÇÃO: os radicais se unem com ALTERAÇÃO fonética. "Planalto" (plano + alto), "aguardente" (água + ardente), "pernalta" (perna + alta).',
      incorretas: { A: 'São justaposição (sem alteração).', C: 'São derivação prefixal/sufixal.', D: 'São parassintéticas.' },
      conceitoCobrado: 'Justaposição x aglutinação.',
      pegadinha: 'Confundir os dois tipos de composição.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['composição', 'aglutinação']
  },
  {
    id: 'Q-DID-PT-1304',
    tipo: 'DIDATICA',
    area: 'LEXI',
    moduloId: 'PT-13',
    subtema: 'Derivação regressiva e imprópria',
    dificuldade: 3,
    prioridade: 'condicional',
    enunciado: 'A palavra "combate" (do verbo "combater") e a palavra "jantar" em "O jantar está pronto" (do verbo "jantar") são formadas, respectivamente, por:',
    alternativas: [
      { id: 'A', texto: 'Derivação regressiva e derivação imprópria.' },
      { id: 'B', texto: 'Derivação imprópria e derivação regressiva.' },
      { id: 'C', texto: 'Parassíntese em ambos os casos.' },
      { id: 'D', texto: 'Composição em ambos os casos.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: '"COMBATE" é derivação REGRESSIVA (retira-se parte da palavra — o sufixo do verbo). "JANTAR" como substantivo é derivação IMPRÓPRIA (muda de classe gramatical sem alteração de forma).',
      incorretas: { B: 'Inverte os conceitos.', C: 'Parassíntese exige prefixo + sufixo dependentes.', D: 'Composição une dois radicais.' },
      conceitoCobrado: 'Derivação regressiva x imprópria.',
      pegadinha: 'Confundir os dois processos.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['regressiva', 'imprópria']
  },
  {
    id: 'Q-DID-PT-1305',
    tipo: 'DIDATICA',
    area: 'LEXI',
    moduloId: 'PT-13',
    subtema: 'Efeitos de prefixos',
    dificuldade: 2,
    prioridade: 'condicional',
    enunciado: 'O prefixo "in-" em "infeliz" e o prefixo "re-" em "refazer" indicam, respectivamente, ideias de:',
    alternativas: [
      { id: 'A', texto: 'Movimento para dentro e negação.' },
      { id: 'B', texto: 'Negação e repetição.' },
      { id: 'C', texto: 'Excesso e escassez.' },
      { id: 'D', texto: 'Antes e depois.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '"IN-" em "infeliz" indica NEGAÇÃO. "RE-" em "refazer" indica REPETIÇÃO. Os prefixos têm valores semânticos próprios e a banca cobra esses efeitos.',
      incorretas: { A: 'Inverte os valores.', C: 'Excesso/escassez seria "hiper-" e "hipo-".', D: 'Antes/depois seria "pré-" e "pós-".' },
      conceitoCobrado: 'Efeitos de sentido dos prefixos.',
      pegadinha: 'Achar que todo prefixo só muda a classe.',
      comoApareceEmConcurso: 'Cobrança de semântica aplicada à morfologia.'
    },
    tags: ['prefixos', 'sentido']
  },

  /* ============================================================
     PT-14 — Fonética, Fonologia e Divisão Silábica (CONDICIONAL)
     ============================================================ */
  {
    id: 'Q-DID-PT-1401',
    tipo: 'DIDATICA',
    area: 'ORTO',
    moduloId: 'PT-14',
    subtema: 'Fonema, letra e sílaba',
    dificuldade: 2,
    prioridade: 'condicional',
    enunciado: 'Assinale a alternativa em que o número de FONEMAS corresponde corretamente ao número de LETRAS:',
    alternativas: [
      { id: 'A', texto: '"hora" (4 letras, 4 fonemas).' },
      { id: 'B', texto: '"guerra" (6 letras, 6 fonemas).' },
      { id: 'C', texto: '"casa" (4 letras, 4 fonemas).' },
      { id: 'D', texto: '"táxi" (4 letras, 4 fonemas).' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: '"CASA": 4 letras, 4 fonemas (/c/, /a/, /s/, /a/). Correspondência perfeita.',
      incorretas: { A: '"Hora" tem 4 letras e 3 fonemas (o "h" é mudo).', B: '"Guerra" tem 6 letras e 4 fonemas ("gu" e "rr" são dígrafos).', D: '"Táxi" tem 4 letras e 5 fonemas ("x" = /ks/).' },
      conceitoCobrado: 'Diferença entre letra e fonema.',
      pegadinha: 'Contar letras como se fossem fonemas.',
      comoApareceEmConcurso: 'Cobrança clássica.'
    },
    tags: ['fonema', 'letra']
  },
  {
    id: 'Q-DID-PT-1402',
    tipo: 'DIDATICA',
    area: 'ORTO',
    moduloId: 'PT-14',
    subtema: 'Dígrafos',
    dificuldade: 2,
    prioridade: 'condicional',
    enunciado: 'Assinale a alternativa em que TODAS as palavras apresentam DÍGRAFOS:',
    alternativas: [
      { id: 'A', texto: 'cravo, plano, blusa.' },
      { id: 'B', texto: 'chave, palha, sonho.' },
      { id: 'C', texto: 'casa, bola, dado.' },
      { id: 'D', texto: 'táxi, boxe, fixo.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '"CHAVE" (ch), "PALHA" (lh), "SONHO" (nh) — cada par de letras representa UM ÚNICO som. São dígrafos.',
      incorretas: { A: 'São encontros consonantais — dois sons distintos.', C: 'Não há dígrafos.', D: '"X" representa dois fonemas (ks) em "táxi" e "boxe" — é encontro consonantal sonoro, não dígrafo.' },
      conceitoCobrado: 'Dígrafo x encontro consonantal.',
      pegadinha: 'Confundir os dois conceitos.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['dígrafos']
  },
  {
    id: 'Q-DID-PT-1403',
    tipo: 'DIDATICA',
    area: 'ORTO',
    moduloId: 'PT-14',
    subtema: 'Encontros vocálicos',
    dificuldade: 2,
    prioridade: 'condicional',
    enunciado: 'Nas palavras "pai", "saúde" e "Uruguai", os encontros vocálicos são, respectivamente:',
    alternativas: [
      { id: 'A', texto: 'Hiato, ditongo e tritongo.' },
      { id: 'B', texto: 'Ditongo, hiato e tritongo.' },
      { id: 'C', texto: 'Tritongo, ditongo e hiato.' },
      { id: 'D', texto: 'Ditongo, tritongo e hiato.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '"PAI": duas vogais na mesma sílaba = DITONGO. "SAÚDE": vogais em sílabas separadas (sa-ú-de) = HIATO. "URUGUAI": três vogais na mesma sílaba (U-ru-guai) = TRITONGO.',
      incorretas: { A: 'Inverte tudo.', C: 'Inverte tudo.', D: 'Troca a ordem.' },
      conceitoCobrado: 'Ditongo, hiato e tritongo.',
      pegadinha: 'Confundir ditongo com hiato.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['ditongo', 'hiato', 'tritongo']
  },
  {
    id: 'Q-DID-PT-1404',
    tipo: 'DIDATICA',
    area: 'ORTO',
    moduloId: 'PT-14',
    subtema: 'Classificação quanto à tonicidade',
    dificuldade: 2,
    prioridade: 'condicional',
    enunciado: 'Assinale a alternativa que classifica CORRETAMENTE as palavras "café", "fácil" e "árvore" quanto à tonicidade:',
    alternativas: [
      { id: 'A', texto: 'Paroxítona, oxítona e proparoxítona.' },
      { id: 'B', texto: 'Oxítona, paroxítona e proparoxítona.' },
      { id: 'C', texto: 'Proparoxítona, paroxítona e oxítona.' },
      { id: 'D', texto: 'Oxítona, oxítona e proparoxítona.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '"CAFÉ" (ca-fé): última sílaba tônica = OXÍTONA. "FÁCIL" (fá-cil): penúltima tônica = PAROXÍTONA. "ÁRVORE" (ár-vo-re): antepenúltima tônica = PROPAROXÍTONA.',
      incorretas: { A: 'Invertem as classificações.', C: 'Invertem as classificações.', D: 'Invertem as classificações.' },
      conceitoCobrado: 'Classificação quanto à posição da sílaba tônica.',
      pegadinha: 'Confundir as três classificações.',
      comoApareceEmConcurso: 'Pré-requisito para acentuação.'
    },
    tags: ['tonicidade', 'oxítona', 'paroxítona']
  },
  {
    id: 'Q-DID-PT-1405',
    tipo: 'DIDATICA',
    area: 'ORTO',
    moduloId: 'PT-14',
    subtema: 'Divisão silábica',
    dificuldade: 3,
    prioridade: 'condicional',
    enunciado: 'Assinale a alternativa em que a divisão silábica está CORRETA:',
    alternativas: [
      { id: 'A', texto: 'cons-tru-ção, ad-vo-ga-do.' },
      { id: 'B', texto: 'co-ns-tru-ção, a-dvo-ga-do.' },
      { id: 'C', texto: 'cons-truç-ão, adv-oga-do.' },
      { id: 'D', texto: 'con-stru-ção, ad-voga-do.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: '"CONS-TRU-ÇÃO": o "ns" fica com a primeira sílaba; o "tr" fica junto (encontro consonantal). "AD-VO-GA-DO": o "d" e o "v" se separam, pois pertencem a sílabas diferentes.',
      incorretas: { B: 'Não se separa "con-stru" dessa forma.', C: 'Não se separa "ção" como "ç-ão".', D: 'Erros de divisão.' },
      conceitoCobrado: 'Divisão silábica — encontros consonantais.',
      pegadinha: 'Separar consoantes que devem ficar juntas.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['divisão silábica']
  },

  /* ============================================================
     PT-15 — Redação Oficial e Comunicação Administrativa (CONDICIONAL)
     ============================================================ */
  {
    id: 'Q-DID-PT-1501',
    tipo: 'DIDATICA',
    area: 'OFIC',
    moduloId: 'PT-15',
    subtema: 'Princípios da redação oficial',
    dificuldade: 2,
    prioridade: 'condicional',
    enunciado: 'Sobre os princípios da redação oficial, assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'Impessoalidade significa escrever de forma fria e sem cordialidade.' },
      { id: 'B', texto: 'Clareza e concisão são princípios que se complementam: o texto deve ser compreendido sem esforço e dizer o máximo com o mínimo de palavras.' },
      { id: 'C', texto: 'Formalidade significa usar jargões técnicos e vocabulário difícil.' },
      { id: 'D', texto: 'A redação oficial admite o uso de primeira pessoa, pois o servidor assina o documento.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'CLAREZA e CONCISÃO são complementares: o texto oficial deve ser compreensível e econômico em palavras.',
      incorretas: { A: 'Impessoalidade NÃO é frieza — o texto pode ser cordial.', C: 'Formalidade é uso do padrão culto, não jargão.', D: 'A redação oficial é IMPESSOAL — não há primeira pessoa.' },
      conceitoCobrado: 'Princípios da redação oficial.',
      pegadinha: 'Confundir impessoalidade com frieza.',
      comoApareceEmConcurso: 'Cobrança frequente.'
    },
    tags: ['redação oficial', 'princípios']
  },
  {
    id: 'Q-DID-PT-1502',
    tipo: 'DIDATICA',
    area: 'OFIC',
    moduloId: 'PT-15',
    subtema: 'Ofício x memorando',
    dificuldade: 2,
    prioridade: 'condicional',
    enunciado: 'Sobre a diferença entre ofício e memorando, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O ofício é usado na comunicação INTERNA; o memorando, na comunicação EXTERNA.' },
      { id: 'B', texto: 'O ofício é usado na comunicação EXTERNA (entre órgãos diferentes ou destes para particulares); o memorando, na comunicação INTERNA (entre unidades do mesmo órgão).' },
      { id: 'C', texto: 'Ambos têm a mesma finalidade e estrutura.' },
      { id: 'D', texto: 'O memorando é mais solene que o ofício.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'OFÍCIO: comunicação EXTERNA, mais solene. MEMORANDO: comunicação INTERNA, mais simples e direta.',
      incorretas: { A: 'Inverte os conceitos.', C: 'Têm finalidades e estruturas distintas.', D: 'O ofício é mais solene.' },
      conceitoCobrado: 'Ofício x memorando.',
      pegadinha: 'Inverter os conceitos.',
      comoApareceEmConcurso: 'Cobrança clássica.'
    },
    tags: ['ofício', 'memorando']
  },
  {
    id: 'Q-DID-PT-1503',
    tipo: 'DIDATICA',
    area: 'OFIC',
    moduloId: 'PT-15',
    subtema: 'Tratamento',
    dificuldade: 2,
    prioridade: 'condicional',
    enunciado: 'Para se dirigir a um Ministro de Estado, o tratamento adequado é:',
    alternativas: [
      { id: 'A', texto: 'Vossa Senhoria.' },
      { id: 'B', texto: 'Vossa Excelência.' },
      { id: 'C', texto: 'Vossa Magnificência.' },
      { id: 'D', texto: 'Vossa Eminência.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Ministros de Estado são ALTAS AUTORIDADES — usam VOSSA EXCELÊNCIA (V. Exa.).',
      incorretas: { A: 'Vossa Senhoria é para demais autoridades e particulares.', C: 'Vossa Magnificência é para Reitores de universidades.', D: 'Vossa Eminência é para Cardeais.' },
      conceitoCobrado: 'Pronomes de tratamento.',
      pegadinha: 'Trocar os pronomes.',
      comoApareceEmConcurso: 'Cobrança frequente em redação oficial.'
    },
    tags: ['tratamento', 'Vossa Excelência']
  },
  {
    id: 'Q-DID-PT-1504',
    tipo: 'DIDATICA',
    area: 'OFIC',
    moduloId: 'PT-15',
    subtema: 'Fecho',
    dificuldade: 2,
    prioridade: 'condicional',
    enunciado: 'O fecho "Respeitosamente" é adequado para:',
    alternativas: [
      { id: 'A', texto: 'Autoridades de mesma hierarquia.' },
      { id: 'B', texto: 'Autoridades superiores.' },
      { id: 'C', texto: 'Autoridades inferiores.' },
      { id: 'D', texto: 'Particulares em geral.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '"RESPEITOSAMENTE" é usado para autoridades SUPERIORES. "ATENCIOSAMENTE" é usado para autoridades de mesma hierarquia ou inferiores.',
      incorretas: { A: 'Mesma hierarquia → "Atenciosamente".', C: 'Inferiores → "Atenciosamente".', D: 'Particulares → "Atenciosamente".' },
      conceitoCobrado: 'Fecho de comunicação oficial.',
      pegadinha: 'Trocar os fechos.',
      comoApareceEmConcurso: 'Cobrança frequente.'
    },
    tags: ['fecho', 'Respeitosamente']
  },
  {
    id: 'Q-DID-PT-1505',
    tipo: 'DIDATICA',
    area: 'OFIC',
    moduloId: 'PT-15',
    subtema: 'Estrutura do padrão ofício',
    dificuldade: 3,
    prioridade: 'condicional',
    enunciado: 'Sobre a estrutura do padrão ofício (Manual de Redação da Presidência da República), assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'O ofício não precisa de vocativo nem de fecho.' },
      { id: 'B', texto: 'O padrão ofício inclui: tipo e número, local e data, destinatário, assunto, vocativo, texto, fecho, assinatura e identificação do remetente.' },
      { id: 'C', texto: 'O ofício deve ser escrito em primeira pessoa para dar credibilidade.' },
      { id: 'D', texto: 'O fecho é opcional em qualquer comunicação oficial.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O PADRÃO OFÍCIO (Manual da Presidência) tem estrutura definida: tipo e número, local e data, destinatário, assunto, vocativo, texto, fecho, assinatura e identificação.',
      incorretas: { A: 'Vocativo e fecho são partes essenciais.', C: 'Redação oficial é IMPESSOAL.', D: 'O fecho é elemento estrutural.' },
      conceitoCobrado: 'Estrutura do padrão ofício.',
      pegadinha: 'Não conhecer a estrutura completa.',
      comoApareceEmConcurso: 'Cobrança em concursos federais.'
    },
    tags: ['ofício', 'estrutura', 'Manual da Presidência']
  },
  /* ============================================================
     NOVAS QUESTÕES — FONTE: Gran Concurso — Lote 2026-11-04
     Módulos: PT-08 (Pontuação) e PT-04 (Ortografia)
     IDs: Q-DID-PT-0807 a Q-DID-PT-0835 | Q-DID-PT-0406
     ============================================================ */

  /* ============================================================
     PT-08 — Pontuação
  ============================================================ */
  {
    id: 'Q-DID-PT-0807',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Oração adjetiva restritiva x explicativa',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'Assinale a alternativa em que a pontuação preserva corretamente o sentido de que nem todos os candidatos apresentaram a documentação completa:',
    alternativas: [
      { id: 'A', texto: 'Os candidatos, que apresentaram a documentação completa foram convocados, para a etapa seguinte.' },
      { id: 'B', texto: 'Os candidatos, que apresentaram a documentação completa, foram convocados para a etapa seguinte.' },
      { id: 'C', texto: 'Os candidatos que apresentaram a documentação completa foram convocados para a etapa seguinte.' },
      { id: 'D', texto: 'Os candidatos que apresentaram, a documentação completa, foram convocados para a etapa seguinte.' },
      { id: 'E', texto: 'Os candidatos que apresentaram a documentação completa, foram convocados para a etapa seguinte.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Sem vírgulas, a oração adjetiva é RESTRITIVA: apenas o subgrupo de candidatos que apresentou a documentação completa foi convocado. Isso preserva o sentido de que nem todos apresentaram.',
      incorretas: {
        A: 'A primeira vírgula isola indevidamente o sujeito do verbo; a segunda quebra a ligação verbo-complemento.',
        B: 'Com vírgulas, a oração torna-se EXPLICATIVA: todos os candidatos apresentaram a documentação e foram convocados — sentido oposto ao pedido.',
        D: 'As vírgulas separam o verbo "apresentaram" do seu objeto direto "a documentação completa".',
        E: 'A vírgula após "completa" separa o sujeito ("Os candidatos que apresentaram a documentação completa") do predicado ("foram convocados").'
      },
      conceitoCobrado: 'Oração adjetiva restritiva (sem vírgula) x explicativa (com vírgula).',
      pegadinha: 'A banca explora a inversão de sentido provocada pela vírgula: restritiva = nem todos; explicativa = todos.',
      comoApareceEmConcurso: 'Clássica em provas de pontuação e reescrita.'
    },
    tags: ['oração adjetiva', 'restritiva', 'explicativa', 'vírgula']
  },
  {
    id: 'Q-DID-PT-0808',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Reticências',
    dificuldade: 1,
    prioridade: 'muito_alta',
    enunciado: 'Assinale a alternativa correta quanto ao uso do sinal de pontuação que indica interrupção da fala do narrador ou da personagem.',
    alternativas: [
      { id: 'A', texto: 'Vírgula ( , )' },
      { id: 'B', texto: 'Dois pontos ( : )' },
      { id: 'C', texto: 'Reticências ( ... )' },
      { id: 'D', texto: 'Ponto e vírgula ( ; )' },
      { id: 'E', texto: 'Ponto ( . )' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'As RETICÊNCIAS indicam a interrupção de um pensamento ou de uma fala, seja por hesitação, surpresa ou pela interferência de outro interlocutor. É o sinal típico para esse efeito.',
      incorretas: {
        A: 'A vírgula marca pausas internas, não interrupção de fala.',
        B: 'Os dois-pontos anunciam enumeração, esclarecimento ou fala (mas não a interrupção).',
        D: 'O ponto e vírgula separa orações coordenadas extensas ou com vírgulas internas.',
        E: 'O ponto final encerra o período, indicando sentido completo — não interrupção.'
      },
      conceitoCobrado: 'Função das reticências na representação da fala.',
      pegadinha: 'Confundir reticências (interrupção/suspensão) com dois-pontos (anúncio de fala).',
      comoApareceEmConcurso: 'Cobrança recorrente em interpretação e pontuação.'
    },
    tags: ['reticências', 'interrupção', 'fala']
  },
  {
    id: 'Q-DID-PT-0809',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Pontuação de orações reduzidas antepostas',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'Assinale a alternativa em que a pontuação está correta.',
    alternativas: [
      { id: 'A', texto: 'Considerando as normativas municipais que regem o desenvolvimento urbano, consolidadas nos códigos e leis complementares. Faz-se necessário seguir essas regras para todo tipo de construção civil na cidade.' },
      { id: 'B', texto: 'Cientes de que o correto manejo dos resíduos domésticos pode contribuir para a saúde da população. A prefeitura ampliou a frota de caminhões destinados à coleta desses materiais.' },
      { id: 'C', texto: 'Diante da situação de calamidade pública, decorrente das ações dos fortes ventos que causaram o destelhamento de centenas de casas, a prefeitura distribuirá lonas para cobertura dessas residências.' },
      { id: 'D', texto: 'Partindo do princípio de que o governo precisa atuar em todo território, seja área urbana ou rural, e por longo período. As políticas públicas são planejadas de forma longitudinal.' },
      { id: 'E', texto: 'As repartições públicas do município, estarão fechadas tendo em vista que dia 2 de setembro é feriado municipal, dia do aniversário da cidade.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Em C, as vírgulas isolam corretamente o adjunto adverbial anteposto de longa extensão ("Diante da situação...") e a oração adjetiva explicativa ("decorrente das ações..."). O sujeito ("a prefeitura") e o verbo ("distribuirá") permanecem juntos.',
      incorretas: {
        A: 'O ponto final após "complementares" separa a oração reduzida de gerúndio anteposta do restante do período — deveria haver vírgula.',
        B: 'O ponto final após "população" quebra a ligação entre a oração reduzida anteposta e a principal.',
        D: 'O ponto final após "período" separa indevidamente a oração reduzida de gerúndio da principal.',
        E: 'A vírgula após "município" separa o sujeito do verbo — erro clássico.'
      },
      conceitoCobrado: 'Pontuação de orações reduzidas antepostas (vírgula, não ponto) e vírgula proibida entre sujeito e verbo.',
      pegadinha: 'A banca usa ponto final onde deveria haver vírgula para separar oração subordinada anteposta.',
      comoApareceEmConcurso: 'Muito frequente em provas de correção gramatical.'
    },
    tags: ['oração reduzida', 'adjunto anteposto', 'vírgula', 'ponto final']
  },
  {
    id: 'Q-DID-PT-0810',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Dois-pontos, ponto e vírgula e vírgula em explicação',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'Leia a frase a seguir. A fala e a escrita são modalidades diferentes da linguagem humana __ a primeira se utiliza de unidades sonoras __ a segunda __ ao contrário __ emprega sinais gráficos. Assinale a pontuação que preenche corretamente as lacunas da frase acima.',
    alternativas: [
      { id: 'A', texto: 'vírgula – dois-pontos – ponto e vírgula – vírgula' },
      { id: 'B', texto: 'dois-pontos – vírgula – ponto e vírgula – vírgula' },
      { id: 'C', texto: 'dois-pontos – ponto e vírgula – vírgula – vírgula' },
      { id: 'D', texto: 'dois-pontos – vírgula – vírgula – ponto e vírgula' },
      { id: 'E', texto: 'ponto – ponto e vírgula – ponto e vírgula – vírgula' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A sequência correta é: dois-pontos (anunciam a explicação), ponto e vírgula (separa as duas orações coordenadas explicativas), vírgula antes e depois de "ao contrário" (termo intercalado). Fica: "...humanas: a primeira se utiliza de unidades sonoras; a segunda, ao contrário, emprega sinais gráficos."',
      incorretas: {
        A: 'A vírgula inicial não anuncia a explicação; o ponto e vírgula no lugar errado.',
        B: 'A vírgula após "sonoras" não separa adequadamente as duas orações explicativas.',
        D: 'A vírgula antes de "ao contrário" está correta, mas falta a vírgula depois; além disso, o ponto e vírgula final não cabe.',
        E: 'O ponto final interrompe a frase antes da explicação; a sequência não fecha.'
      },
      conceitoCobrado: 'Emprego combinado de dois-pontos, ponto e vírgula e vírgula.',
      pegadinha: 'A banca mistura as funções dos sinais; é preciso testar cada lacuna separadamente.',
      comoApareceEmConcurso: 'Cobrança recorrente em questões de preenchimento.'
    },
    tags: ['dois-pontos', 'ponto e vírgula', 'vírgula', 'termo intercalado']
  },
  {
    id: 'Q-DID-PT-0811',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Funções dos sinais de pontuação',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'Em relação à correta pontuação, relacione a Coluna I com a Coluna II e marque a alternativa devida. Coluna I. A- Vírgula. B- Ponto e vírgula. C- Dois pontos. D- Ponto-final. Coluna II. 1- Separa estruturas coordenadas já portadoras de vírgulas internas. 2- Usa-se no final do período, indicando que o sentido está completo. 3- Utilizamos antes de uma citação. 4- Usamos para separar o aposto explicativo.',
    alternativas: [
      { id: 'A', texto: 'A (2) – B (3) – C (4) – D (1).' },
      { id: 'B', texto: 'A (4) – B (1) – C (3) – D (2).' },
      { id: 'C', texto: 'A (3) – B (2) – C (1) – D (4).' },
      { id: 'D', texto: 'A (1) – B (4) – C (2) – D (3).' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Vírgula → separa aposto explicativo (4). Ponto e vírgula → separa estruturas coordenadas com vírgulas internas (1). Dois-pontos → antes de citação (3). Ponto-final → encerra o período (2).',
      incorretas: {
        A: 'Inverte todas as correspondências.',
        C: 'Troca as funções de vírgula e dois-pontos.',
        D: 'Atribui à vírgula a função de ponto e vírgula, e vice-versa.'
      },
      conceitoCobrado: 'Funções específicas de cada sinal de pontuação.',
      pegadinha: 'Confundir ponto e vírgula (enumerações complexas) com dois-pontos (anúncio).',
      comoApareceEmConcurso: 'Questão de associação clássica.'
    },
    tags: ['vírgula', 'ponto e vírgula', 'dois-pontos', 'ponto final', 'aposto']
  },
  {
    id: 'Q-DID-PT-0812',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Vírgula em enumeração de orações',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'A leitura é uma prática essencial para a formação cidadã. Ela amplia o repertório cultural desenvolve o pensamento crítico fortalece a capacidade de argumentação e favorece a participação social. Considerando as regras de pontuação da norma-padrão da língua portuguesa, assinale a alternativa que apresenta a versão CORRETAMENTE pontuada do segundo período:',
    alternativas: [
      { id: 'A', texto: 'Ela amplia o repertório cultural, desenvolve o pensamento crítico fortalece a capacidade de argumentação e favorece a participação social.' },
      { id: 'B', texto: 'Ela amplia o repertório cultural desenvolve o pensamento crítico, fortalece a capacidade de argumentação e favorece a participação social.' },
      { id: 'C', texto: 'Ela amplia o repertório cultural; desenvolve o pensamento crítico, fortalece a capacidade de argumentação e favorece a participação social.' },
      { id: 'D', texto: 'Ela amplia o repertório cultural, desenvolve o pensamento crítico, fortalece a capacidade de argumentação e favorece a participação social.' },
      { id: 'E', texto: 'Ela amplia o repertório cultural desenvolve o pensamento crítico fortalece a capacidade de argumentação, e favorece a participação social.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'O período é uma enumeração de quatro ações paralelas. A norma padrão separa os itens por vírgula, deixando o "e" apenas antes do último elemento: "amplia..., desenvolve..., fortalece... e favorece...".',
      incorretas: {
        A: 'Falta a vírgula após "crítico".',
        B: 'Falta a vírgula após "cultural".',
        C: 'O ponto e vírgula é inadequado para uma enumeração simples de orações com o mesmo sujeito.',
        E: 'Faltam vírgulas entre os três primeiros itens e há vírgula indevida antes do "e" final.'
      },
      conceitoCobrado: 'Vírgula em enumeração de orações coordenadas assindéticas.',
      pegadinha: 'A banca omite vírgulas ou insere pontuação mais forte (ponto e vírgula) em enumeração simples.',
      comoApareceEmConcurso: 'Muito comum em reescrita e correção.'
    },
    tags: ['vírgula', 'enumeração', 'coordenação']
  },
  {
    id: 'Q-DID-PT-0813',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Análise de pontuação em múltiplas frases',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'Leia as frases a seguir, atentando para a pontuação que apresentam: I. João Carlos trabalha, e o filho Alex estuda. II. É um “ótimo leitor” de poesia: não entende nada. III. Com a nova lei, os funcionários públicos e, principalmente os federais, receberam um reajuste aceitável. IV. Madalena costuma dizer: eu só como sanduíches de “mortandela”, pois são os melhores. V. Em nossa cidade natal, a segurança dos habitantes (oxalá isso venha a mudar um dia!) continua precária. Quanto à pontuação, podemos afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Somente as frases I, II e III estão corretas.' },
      { id: 'B', texto: 'Somente as frases I, II, IV e V estão corretas.' },
      { id: 'C', texto: 'Somente as frases I, III e IV estão corretas.' },
      { id: 'D', texto: 'Somente as frases II, III e V estão corretas.' },
      { id: 'E', texto: 'Somente as frases II, III, IV e V estão corretas.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Estão corretas I (vírgula antes do "e" com sujeitos diferentes), II (aspas irônicas e dois-pontos), IV (dois-pontos para fala e vírgula antes de "pois") e V (parênteses com exclamação e vírgula após adjunto). A frase III está incorreta porque falta a vírgula após "principalmente" para isolar o termo intercalado: "...e, principalmente, os federais...".',
      incorretas: {
        A: 'Inclui a frase III, que tem erro de pontuação.',
        C: 'Inclui a frase III e exclui a IV (correta).',
        D: 'Inclui a frase III e exclui a I (correta).',
        E: 'Inclui a frase III, que é a única errada.'
      },
      conceitoCobrado: 'Análise integrada de vários usos da pontuação.',
      pegadinha: 'A frase III parece correta à primeira vista, mas falta uma vírgula.',
      comoApareceEmConcurso: 'Questão de múltiplas frases — exige atenção redobrada.'
    },
    tags: ['vírgula', 'aspas', 'dois-pontos', 'parênteses', 'termo intercalado']
  },
  {
    id: 'Q-DID-PT-0814',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Pontuação correta em período simples',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'A pontuação adequada contribui para a clareza do texto e para a correta organização sintática das ideias. Nesse sentido, assinale a alternativa em que a pontuação está corretamente empregada.',
    alternativas: [
      { id: 'A', texto: 'Os candidatos, compareceram ao local cedo.' },
      { id: 'B', texto: 'Quando terminou a prova entregou o caderno.' },
      { id: 'C', texto: 'O relatório foi aprovado, porque estava correto.' },
      { id: 'D', texto: 'Ao final da reunião, todos concordaram com a decisão.' },
      { id: 'E', texto: 'A professora explicou, a matéria com atenção.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Em D, a vírgula isola corretamente o adjunto adverbial anteposto ("Ao final da reunião"), sem separar sujeito e predicado. A frase flui com clareza.',
      incorretas: {
        A: 'A vírgula separa o sujeito ("Os candidatos") do verbo ("compareceram") — erro clássico.',
        B: 'Falta a vírgula após a oração subordinada adverbial anteposta ("Quando terminou a prova").',
        C: 'A vírgula antes de "porque" é facultativa, mas a frase não é a mais claramente correta; D é impecável.',
        E: 'A vírgula separa o verbo ("explicou") do objeto direto ("a matéria") — erro.'
      },
      conceitoCobrado: 'Vírgula proibida entre sujeito e verbo; vírgula obrigatória após adjunto anteposto.',
      pegadinha: 'Alternativas com vírgulas em locais proibidos (sujeito-verbo, verbo-objeto).',
      comoApareceEmConcurso: 'Cobrança diária em provas de correção.'
    },
    tags: ['vírgula', 'adjunto anteposto', 'sujeito e verbo']
  },
  {
    id: 'Q-DID-PT-0815',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Identificação de erro de pontuação',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'A pontuação está incorreta somente na alternativa:',
    alternativas: [
      { id: 'A', texto: 'Você é muito especial, amigo.' },
      { id: 'B', texto: 'É muito, muito difícil lidar com esta situação.' },
      { id: 'C', texto: 'Aos domingos, costumam almoçar em família.' },
      { id: 'D', texto: 'Queria saber quando voltam as aulas e demais programações escolares?' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Em D, a frase é uma interrogativa indireta ("Queria saber quando..."), portanto não deve terminar com ponto de interrogação, e sim com ponto final.',
      incorretas: {
        A: 'Vocativo separado por vírgula — correto.',
        B: 'Repetição enfática com vírgula — correto.',
        C: 'Adjunto adverbial anteposto com vírgula — correto.'
      },
      conceitoCobrado: 'Ponto de interrogação em interrogativa indireta.',
      pegadinha: 'A presença do verbo "saber" pode induzir ao erro de manter a interrogação.',
      comoApareceEmConcurso: 'Cobrança recorrente em pontuação.'
    },
    tags: ['interrogativa indireta', 'ponto de interrogação']
  },
  {
    id: 'Q-DID-PT-0816',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Reticências, dois-pontos e exclamação',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'De acordo com as regras de pontuação, relacionar as colunas e assinalar a sequência correspondente. (1) Reticências (...). (2) Dois-pontos (:). (3) Ponto de exclamação (!). ( ) Ela só tinha um objetivo na vida __ ser médica. ( ) No piquenique havia bolos, salgadinhos, refrigerantes, sucos __ ( ) Uau __',
    alternativas: [
      { id: 'A', texto: '1 - 3 - 2.' },
      { id: 'B', texto: '3 - 2 - 1.' },
      { id: 'C', texto: '3 - 1 - 2.' },
      { id: 'D', texto: '2 - 1 - 3.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A primeira lacuna pede dois-pontos (2), pois anuncia a explicação "ser médica". A segunda pede reticências (1), indicando que a enumeração poderia continuar. A terceira pede exclamação (3), pela interjeição "Uau". Sequência: 2 – 1 – 3.',
      incorretas: {
        A: 'Inverte dois-pontos e reticências.',
        B: 'Coloca exclamação na primeira lacuna, o que não faz sentido.',
        C: 'Troca a ordem de exclamação e reticências.'
      },
      conceitoCobrado: 'Funções de reticências, dois-pontos e ponto de exclamação.',
      pegadinha: 'A enumeração da segunda lacuna pode ser finalizada com ponto final, mas as reticências são adequadas para indicar suspensão.',
      comoApareceEmConcurso: 'Questão de associação direta.'
    },
    tags: ['reticências', 'dois-pontos', 'exclamação']
  },
  {
    id: 'Q-DID-PT-0817',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Uso e explicação de sinais',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'Assinale a alternativa correta quanto ao uso e explicação dos sinais de pontuação.',
    alternativas: [
      { id: 'A', texto: '“Matamos o tempo, o tempo nos enterra” (Machado de Assis) Explicação: uso da vírgula serviu para separar orações subordinadas assindéticas que encerraram pensamentos opostos.' },
      { id: 'B', texto: 'É campeão! Explicação: o ponto de exclamação foi utilizado para indicar fim de oração absoluta.' },
      { id: 'C', texto: 'Há três coisas para o fim de semana: festa, praia e sol. Explicação: os dois pontos serviram para indicar atitude de expectativa diante de uma situação.' },
      { id: 'D', texto: 'Eu, não vou sair sozinho à noite. Explicação: a vírgula é utilizada para separar o sujeito do predicado.' },
      { id: 'E', texto: 'Os bolinhos do aniversário, a chefe do buffet os fará hoje. Explicação: a vírgula é utilizada para isolar um complemento pleonástico antecipado ao verbo.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'Em E, o termo "Os bolinhos do aniversário" é o objeto direto antecipado; o pronome "os" é o complemento pleonástico. A vírgula isola corretamente esse objeto antecipado, e a explicação está precisa.',
      incorretas: {
        A: 'As orações são COORDENADAS assindéticas, não subordinadas.',
        B: 'A explicação é vaga; o ponto de exclamação marca exclamativa, não necessariamente "oração absoluta".',
        C: 'Os dois-pontos introduzem enumeração, não "atitude de expectativa".',
        D: 'A vírgula separa sujeito e predicado — uso PROIBIDO, não correto.'
      },
      conceitoCobrado: 'Relação entre uso e explicação funcional dos sinais.',
      pegadinha: 'A banca mistura usos corretos com explicações erradas.',
      comoApareceEmConcurso: 'Questão de nível avançado — exige domínio conceitual.'
    },
    tags: ['vírgula', 'complemento pleonástico', 'explicação']
  },
  {
    id: 'Q-DID-PT-0818',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Vírgula em enumeração',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: '“A vida, o infinito ___ o sol, o mar, tudo é maravilhoso quando se está passeando.” Assinale a alternativa que preencha corretamente a lacuna com uma pontuação.',
    alternativas: [
      { id: 'A', texto: '. (Ponto): Encerra frases e períodos, indica a conclusão de uma ideia.' },
      { id: 'B', texto: '– (Travessão): Indica mudança de interlocutor em diálogos ou isola orações.' },
      { id: 'C', texto: '( ) (Parênteses): Enclausura informações acessórias, explicações ou notas.' },
      { id: 'D', texto: ', (Vírgula): Organiza termos sintáticos, separa termos coordenados assindéticos (sem ligação por conectivo), que tenham a mesma função sintática, que formam, muitas vezes, enumerações.' },
      { id: 'E', texto: '“ ” (Aspas): Marca citações, estrangeirismos, gírias ou ironias, conferindo um sentido particular à expressão.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A sequência "A vida, o infinito, o sol, o mar, tudo..." é uma enumeração de termos coordenados assindéticos. A vírgula é o sinal adequado para separar esses itens.',
      incorretas: {
        A: 'O ponto final interromperia a enumeração antes do termo síntese "tudo".',
        B: 'O travessão isolaria um termo, não separaria itens de enumeração.',
        C: 'Os parênteses enclausuram informação acessória, o que não é o caso.',
        E: 'As aspas não têm função de enumeração.'
      },
      conceitoCobrado: 'Vírgula em enumeração de termos coordenados.',
      pegadinha: 'A banca oferece sinais que até poderiam aparecer em outros contextos, mas não nesta estrutura.',
      comoApareceEmConcurso: 'Cobrança direta e recorrente.'
    },
    tags: ['vírgula', 'enumeração', 'coordenação assindética']
  },
  {
    id: 'Q-DID-PT-0819',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Análise de pontuação em texto',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'Analise o emprego da pontuação nos enunciados a seguir: I. Todas as noites, antes de dormir, Holly Wang acessa o DeepSeek para fazer "sessões de terapia. II. Na China, porém jovens como Holly têm recorrido, à inteligência artificial para algo que normalmente não se espera da computação e dos algoritmos: apoio emocional. III. Desde escrever relatórios e criar fórmulas no Excel até planejar viagens, praticar exercícios físicos e aprender novas habilidades, os aplicativos de inteligência artificial passaram a fazer parte da rotina de muitas pessoas ao redor do mundo. Quanto à pontuação a(s) alternativa(s) correta(s) é(são):',
    alternativas: [
      { id: 'A', texto: 'Apenas I e II.' },
      { id: 'B', texto: 'Apenas I e III.' },
      { id: 'C', texto: 'Apenas II e III.' },
      { id: 'D', texto: 'I, II e III.' },
      { id: 'E', texto: 'Apenas III.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'Somente III está correta. I tem aspas abertas e não fechadas. II tem vírgula indevida após "recorrido" (separa verbo e complemento) e falta vírgula após "porém".',
      incorretas: {
        A: 'I e II têm erros de pontuação.',
        B: 'I tem aspas não fechadas.',
        C: 'II tem vírgula que separa verbo e complemento.',
        D: 'Nem I nem II estão corretas.'
      },
      conceitoCobrado: 'Análise fina de erros de pontuação em textos.',
      pegadinha: 'As aspas não fechadas em I passam despercebidas; a vírgula após "recorrido" em II parece natural para muitos leitores.',
      comoApareceEmConcurso: 'Questão de nível avançado, comum em bancas exigentes.'
    },
    tags: ['aspas', 'vírgula', 'verbo e complemento']
  },
  {
    id: 'Q-DID-PT-0820',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Vírgula antes de "e" com mesmo sujeito',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'Destaque a alternativa que apresenta um erro de pontuação.',
    alternativas: [
      { id: 'A', texto: 'Malhou, e treinou, e voltou a treinar para conseguir emagrecer.' },
      { id: 'B', texto: 'Jussara estuda Geografia, e Bruna Arquitetura.' },
      { id: 'C', texto: 'Treinou o mais que pode e não venceu o campeonato.' },
      { id: 'D', texto: 'Os portfólios que eu fiz foram classificados.' },
      { id: 'E', texto: 'Observei, porém, as alternativas que poderiam me ajudar.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Em A, as vírgulas antes de "e" ligam orações com o MESMO sujeito ("Malhou", "treinou", "voltou a treinar"). A norma padrão não recomenda vírgula antes de "e" nesse caso (embora possa haver uso estilístico, a questão pede o erro).',
      incorretas: {
        B: 'Sujeitos diferentes ("Jussara" e "Bruna") — vírgula facultativa e correta.',
        C: 'Oração coordenada aditiva com mesmo sujeito, sem vírgula — correta.',
        D: 'Oração adjetiva restritiva sem vírgula — correta.',
        E: '"porém" intercalado entre vírgulas — correta.'
      },
      conceitoCobrado: 'Vírgula antes de "e" quando os sujeitos são iguais x diferentes.',
      pegadinha: 'A repetição de "e" com vírgulas pode parecer correta por ênfase, mas a banca considera erro.',
      comoApareceEmConcurso: 'Cobrança clássica em correção gramatical.'
    },
    tags: ['vírgula', 'conjunção e', 'mesmo sujeito']
  },
  {
    id: 'Q-DID-PT-0821',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Separação de orações coordenadas',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'Leia o trecho a seguir: "Após longos anos de estudo, finalmente, Maria alcançou seu objetivo: a aprovação no concurso público. Agora, ela está pronta para enfrentar novos desafios profissionais." Qual é a pontuação correta para separar as orações coordenadas presentes no trecho?',
    alternativas: [
      { id: 'A', texto: '; (ponto e vírgula)' },
      { id: 'B', texto: ', (vírgula)' },
      { id: 'C', texto: '. (ponto final)' },
      { id: 'D', texto: ': (dois pontos)' },
      { id: 'E', texto: '- (hífen)' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'As duas orações ("Maria alcançou seu objetivo..." e "Agora, ela está pronta...") são independentes e o trecho já as separa com ponto final. O ponto final é o sinal adequado para encerrar o primeiro período e iniciar o segundo.',
      incorretas: {
        A: 'O ponto e vírgula é para enumerações complexas, não para separar períodos independentes com essa extensão.',
        B: 'A vírgula não separa períodos com essa autonomia; geraria um período composto muito longo e confuso.',
        D: 'Os dois-pontos anunciam explicação, não separam orações independentes.',
        E: 'O hífen não é sinal de pontuação entre orações.'
      },
      conceitoCobrado: 'Uso do ponto final na separação de orações independentes.',
      pegadinha: 'A proximidade semântica pode sugerir vírgula, mas a estrutura exige ponto final.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['ponto final', 'orações coordenadas']
  },
  {
    id: 'Q-DID-PT-0822',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Pontuação correta em diálogo e intercalação',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'Assinale a frase correta quanto à pontuação.',
    alternativas: [
      { id: 'A', texto: 'Por nada, mas me diz outra coisa, automóvel é avião seu Quincas da Magrela?' },
      { id: 'B', texto: 'Os alunos, inconformados com a morte de um colega por atropelamento; fizeram uma manifestação pacífica.' },
      { id: 'C', texto: 'Que gostosura seus bolinhos de bacalhau dona Ricota, nunca provei nada igual.' },
      { id: 'D', texto: 'De repente encontrei uma paz interna; um bem-estar súbito, que jamais imaginei que pudesse ter.' },
      { id: 'E', texto: 'Aquela criança, se permitíssemos fazer tudo o que quisesse, nos deixaria loucos.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'Em E, as vírgulas isolam corretamente a oração subordinada adverbial condicional intercalada ("se permitíssemos fazer tudo o que quisesse").',
      incorretas: {
        A: 'Pontuação confusa; falta interrogação e vírgulas de vocativo.',
        B: 'O ponto e vírgula separa sujeito e predicado — deveria ser vírgula.',
        C: 'Faltam vírgulas para isolar o vocativo "dona Ricota" e a frase está truncada.',
        D: 'O ponto e vírgula antes de "um bem-estar" é inadequado; deveria ser vírgula ou ponto.'
      },
      conceitoCobrado: 'Vírgula em oração intercalada.',
      pegadinha: 'A banca usa ponto e vírgula onde deveria haver vírgula.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['vírgula', 'oração intercalada', 'condicional']
  },
  {
    id: 'Q-DID-PT-0823',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Verdadeiro ou falso em pontuação',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'Considerando as regras dos sinais de pontuação, marque (V) para Verdadeiro e (F) para Falso e assinale a alternativa que apresenta a sequência CORRETA: (___ ) Bia João Clarice e Pedro chegaram agora. (___ ) Ao final, chorou de alegria:- Ganhei! (___ ) O freguês novo que, não paga as contas, vive reclamando. (___ ) Será que ele quer um café?',
    alternativas: [
      { id: 'A', texto: 'V – F – V – F.' },
      { id: 'B', texto: 'F – F – V – F.' },
      { id: 'C', texto: 'F – V – V – V.' },
      { id: 'D', texto: 'F – V – F – V.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A sequência correta é F – V – F – V. Primeira: falta vírgula na enumeração de nomes (Falso). Segunda: dois-pontos e travessão podem ser usados para introduzir fala (Verdadeiro). Terceira: a vírgula após "que" está errada; deveria ser "O freguês novo, que não paga as contas, vive reclamando" (Falso). Quarta: a interrogação está correta (Verdadeiro).',
      incorretas: {
        A: 'Inverte a segunda e a terceira.',
        B: 'Considera a terceira verdadeira, mas há erro.',
        C: 'Considera a primeira falsa (ok), mas erra as demais.'
      },
      conceitoCobrado: 'Análise de múltiplos usos da pontuação.',
      pegadinha: 'A segunda frase tem pontuação incomum (:-), mas é aceitável.',
      comoApareceEmConcurso: 'Questão de julgamento V/F.'
    },
    tags: ['vírgula', 'dois-pontos', 'travessão', 'interrogação']
  },
  {
    id: 'Q-DID-PT-0824',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Pontuação correta em período composto',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'Em relação à pontuação, assinalar a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'Ninguém havia me falado, mas eu suspeitava de tais atitudes.' },
      { id: 'B', texto: 'Pensei, repensei, desabei encontrei algumas palavras e nada mudou.' },
      { id: 'C', texto: 'Veio o horário da partida o céu desabou, em água.' },
      { id: 'D', texto: 'Naquela tarde amarga, teve certeza, de que nada adiantaria.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Em A, a vírgula antes de "mas" separa corretamente orações coordenadas adversativas.',
      incorretas: {
        B: 'Falta vírgula após "desabei" para separar a oração "encontrei algumas palavras".',
        C: 'Falta vírgula após "partida" e a vírgula antes de "em água" está errada.',
        D: 'A vírgula antes de "de que" separa o verbo "teve certeza" do seu complemento — erro.'
      },
      conceitoCobrado: 'Vírgula em orações coordenadas adversativas.',
      pegadinha: 'A vírgula antes de "mas" é correta, mas as demais alternativas têm erros mais evidentes.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['vírgula', 'adversativa', 'coordenação']
  },
  {
    id: 'Q-DID-PT-0825',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Pontuação em aposto e enumeração',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'Assinale a alternativa correta quanto à pontuação.',
    alternativas: [
      { id: 'A', texto: 'As tiras do quadrinista, Paul Kirchner, eram como um respiro em meio às grandes sagas de fantasia, e ficção científica da lendária revista americana, Heavy Metal.' },
      { id: 'B', texto: 'Com uma escrita descritiva, ela conta detalhes do luto que vivenciou com a morte de seu pai, um camponês que se tomou operário e, depois, proprietário de um bar e merecaria numa cidadezinha.' },
      { id: 'C', texto: 'Publicado em 1997 transita entre, o ensaio, e uma espécie de catalogação de dados.' },
      { id: 'D', texto: 'Repassa a história da França, do pós-Guerra até o começo dos anos 2000 ao mesmo tempo, que se constitui como uma espécie de autobiografia em terceira pessoa.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Em B, as vírgulas isolam corretamente o aposto explicativo ("um camponês que se tornou operário...") e a expressão intercalada "depois".',
      incorretas: {
        A: 'A vírgula antes de "e ficção científica" quebra a enumeração "fantasia e ficção científica".',
        C: 'As vírgulas separam indevidamente o verbo "transita" do seu complemento.',
        D: 'A vírgula antes de "que" pode separar sujeito e predicado, além de a estrutura ser confusa.'
      },
      conceitoCobrado: 'Vírgula em aposto explicativo e termos intercalados.',
      pegadinha: 'A palavra "tomou" em B está errada (deveria ser "tornou"), mas o erro é ortográfico, não de pontuação.',
      comoApareceEmConcurso: 'Cobrança de pontuação em textos longos.'
    },
    tags: ['vírgula', 'aposto', 'enumeração']
  },
  {
    id: 'Q-DID-PT-0826',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Vírgula em objeto pleonástico',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'Assinale a alternativa correta quanto à pontuação.',
    alternativas: [
      { id: 'A', texto: 'Esses cronistas, não os conheço.' },
      { id: 'B', texto: 'Não havia porém, motivos para aquela atitude, naquela hora!' },
      { id: 'C', texto: 'Quando ele, sai do trabalho, tudo lhe parece melhor.' },
      { id: 'D', texto: 'José, Maria e seus filhos, foram embora daquela cidade?' },
      { id: 'E', texto: 'Ele, que era o cronista indicado não compareceu à premiação?' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Em A, a vírgula isola corretamente o objeto direto antecipado ("Esses cronistas"), que é retomado pelo pronome "os". É o chamado objeto pleonástico.',
      incorretas: {
        B: 'Falta vírgula antes e depois de "porém".',
        C: 'A vírgula após "ele" separa sujeito e verbo — erro.',
        D: 'A vírgula após "filhos" separa sujeito e predicado — erro.',
        E: 'Falta vírgula após "indicado" para fechar a oração adjetiva explicativa.'
      },
      conceitoCobrado: 'Vírgula em objeto direto antecipado (pleonástico).',
      pegadinha: 'A estrutura com pronome pleonástico é menos comum e pode confundir.',
      comoApareceEmConcurso: 'Cobrança de nível avançado.'
    },
    tags: ['vírgula', 'objeto pleonástico', 'anteposição']
  },
  {
    id: 'Q-DID-PT-0827',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Pontuação em texto longo',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'Assinale a alternativa corretamente pontuada, de acordo com a língua escrita padrão.',
    alternativas: [
      { id: 'A', texto: 'Em 1957 o psicólogo B. F. Skinner da Universidade de Harvard, constatou que recompensas inconstantes que surgem de forma irregular, eram mais eficientes para condicionar o comportamento dos animais. O smartphone explora isso ao abrir um app, você nunca sabe quantas unidades de conteúdo (textos, fotos, vídeos, posts, mensagens) ele vai mostrar.' },
      { id: 'B', texto: 'Em 1957 o psicólogo B. F. Skinner, da Universidade de Harvard constatou que recompensas inconstantes – que surgem de forma irregular, eram mais eficientes para condicionar o comportamento dos animais; o smartphone explora isso, ao abrir um app, você nunca sabe quantas unidades de conteúdo (textos, fotos, vídeos, posts, mensagens) ele vai mostrar.' },
      { id: 'C', texto: 'Em 1957, o psicólogo B. F. Skinner, da Universidade de Harvard, constatou que recompensas inconstantes (que surgem de forma irregular) eram mais eficientes para condicionar o comportamento dos animais. O smartphone explora isso: ao abrir um app, você nunca sabe quantas unidades de conteúdo (textos, fotos, vídeos, posts, mensagens) ele vai mostrar.' },
      { id: 'D', texto: 'Em 1957, o psicólogo B. F. Skinner, da Universidade de Harvard, constatou que: recompensas inconstantes que surgem de forma irregular eram mais eficientes para condicionar o comportamento dos animais. O smartphone explora isso. Ao abrir um app você nunca sabe quantas unidades de conteúdo (textos, fotos, vídeos, posts, mensagens) ele vai mostrar.' },
      { id: 'E', texto: 'Em 1957 o psicólogo B. F. Skinner da Universidade de Harvard constatou que recompensas, inconstantes (que surgem de forma irregular), eram mais eficientes para condicionar o comportamento dos animais (o smartphone explora isso) ao abrir um app. Você nunca sabe quantas unidades de conteúdo (textos, fotos, vídeos, posts, mensagens) ele vai mostrar.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'C apresenta pontuação impecável: vírgula após o adjunto "Em 1957", aposto explicativo "da Universidade de Harvard" entre vírgulas, parênteses para a oração explicativa, e dois-pontos antes da explicação sobre o smartphone.',
      incorretas: {
        A: 'Falta vírgula após "1957" e a vírgula antes de "eram" separa sujeito e predicado.',
        B: 'Falta vírgula após "Harvard" e a vírgula antes de "eram" está errada; o ponto e vírgula é inadequado.',
        D: 'Os dois-pontos após "que" estão errados; falta vírgula após "app".',
        E: 'A vírgula após "recompensas" está errada; os parênteses estão mal colocados.'
      },
      conceitoCobrado: 'Pontuação em períodos longos com apostos, parênteses e dois-pontos.',
      pegadinha: 'A banca insere erros sutis (vírgula antes de "eram", falta de vírgula após "1957").',
      comoApareceEmConcurso: 'Questão de alta complexidade, comum em provas discursivas.'
    },
    tags: ['vírgula', 'aposto', 'parênteses', 'dois-pontos']
  },
  {
    id: 'Q-DID-PT-0828',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Identificação de pontuação incorreta',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'Em relação à pontuação, assinalar a alternativa INCORRETA.',
    alternativas: [
      { id: 'A', texto: 'Esta é a regra principal cumprir com os prazos estabelecidos.' },
      { id: 'B', texto: 'João, por favor, tranque a porta ao ir embora.' },
      { id: 'C', texto: 'Ele disse algo que me deixou animada: “Vamos sair hoje!”.' },
      { id: 'D', texto: 'De acordo com a professora, o aluno era bagunceiro.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A está INCORRETA porque falta pontuação após "principal". O correto seria "Esta é a regra principal: cumprir com os prazos estabelecidos." (dois-pontos) ou "Esta é a regra principal, cumprir..." (vírgula).',
      incorretas: {
        B: 'Vocativo e expressão intercalada corretamente pontuados.',
        C: 'Dois-pontos e citação corretos.',
        D: 'Adjunto antecipado com vírgula — correto.'
      },
      conceitoCobrado: 'Necessidade de pontuação entre termo anunciador e explicação.',
      pegadinha: 'A frase A parece completa, mas está truncada.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['dois-pontos', 'vírgula', 'oração truncada']
  },
  {
    id: 'Q-DID-PT-0829',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Reescrita com vocativo e enumeração',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: '“O amor ao livro, meu amigo, é sua passagem para o maior, mais puro e mais perfeito prazer.” (Anthony Trollope) Assinale a alternativa em que a forma reescrita do pensamento acima se encontra totalmente correta em relação à pontuação.',
    alternativas: [
      { id: 'A', texto: 'Meu amigo, o amor ao livro é a sua passagem para o maior, mais puro e mais perfeito prazer.' },
      { id: 'B', texto: 'Meu amigo, o amor ao livro, é a sua passagem para o maior, mais puro e mais perfeito prazer.' },
      { id: 'C', texto: 'Meu amigo: o amor ao livro é a sua passagem para o maior mais puro e mais perfeito prazer.' },
      { id: 'D', texto: 'Meu amigo: o amor ao livro é, a sua passagem para o maior, mais puro e mais perfeito prazer.' },
      { id: 'E', texto: 'O amor ao livro, é sua passagem, meu amigo, para o maior, mais puro e mais perfeito prazer.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A apresenta o vocativo "Meu amigo" no início, seguido de vírgula, e a enumeração "maior, mais puro e mais perfeito" corretamente pontuada. O sujeito "o amor ao livro" e o verbo "é" permanecem juntos.',
      incorretas: {
        B: 'A vírgula após "livro" separa sujeito e predicado — erro.',
        C: 'Faltam vírgulas na enumeração.',
        D: 'A vírgula após "é" separa verbo e predicativo — erro.',
        E: 'A vírgula após "livro" separa sujeito e predicado; além disso, "meu amigo" está mal posicionado.'
      },
      conceitoCobrado: 'Vocativo, sujeito e predicado, enumeração.',
      pegadinha: 'A banca explora a vírgula proibida entre sujeito e verbo.',
      comoApareceEmConcurso: 'Cobrança clássica em reescrita.'
    },
    tags: ['vírgula', 'vocativo', 'enumeração']
  },
  {
    id: 'Q-DID-PT-0830',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Teoria da pontuação',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'A pontuação em língua portuguesa representa um dos aspectos mais sutis da coesão e da clareza textual. O emprego inadequado dos sinais pode alterar completamente o sentido de um enunciado. Analise, portanto, as afirmativas abaixo, que tratam de regras diversas sobre o uso da vírgula, do ponto e vírgula, dos dois-pontos, das aspas e do travessão, observando seus valores sintáticos e estilísticos: I. Não se separa o sujeito do predicado por vírgula, ainda que o sujeito seja muito extenso ou contenha expressões intercaladas, pois esses termos possuem alto grau de coesão entre si. II. O ponto e vírgula é utilizado para separar orações coordenadas que já contenham vírgulas internas, mantendo, assim, o equilíbrio sintático e a clareza da enumeração. III. As orações subordinadas adverbiais deslocadas para o início do período podem ser escritas sem vírgula, desde que o sentido de tempo, causa ou condição permaneça claro. IV. Os dois-pontos são empregados tanto para introduzir o discurso direto quanto para esclarecer ou detalhar um termo anterior, sendo obrigatória a letra minúscula após esse sinal. V. O uso das aspas pode indicar ironia, citação direta ou destaque de uma palavra, enquanto o travessão pode substituir as vírgulas em orações intercaladas para dar maior ênfase ao termo destacado. Em quais afirmativas o emprego e a descrição dos sinais de pontuação estão inteiramente corretos?',
    alternativas: [
      { id: 'A', texto: 'II, IV e V.' },
      { id: 'B', texto: 'III e V.' },
      { id: 'C', texto: 'I, III e IV.' },
      { id: 'D', texto: 'I, II e V.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Estão corretas I, II e V. I: a vírgula não separa sujeito e predicado. II: o ponto e vírgula separa orações coordenadas com vírgulas internas. V: aspas e travessão têm esses usos. A III é controversa (a vírgula é recomendada, mas nem sempre obrigatória); a IV erra ao dizer que a minúscula após dois-pontos é obrigatória.',
      incorretas: {
        A: 'Inclui a IV, que tem erro sobre a minúscula obrigatória.',
        B: 'Exclui I e II, que estão corretas.',
        C: 'Inclui a IV (errada) e exclui a II (correta).'
      },
      conceitoCobrado: 'Teoria avançada da pontuação.',
      pegadinha: 'A afirmativa IV parece correta, mas a minúscula após dois-pontos não é obrigatória em todos os casos.',
      comoApareceEmConcurso: 'Questão de alto nível, comum em bancas como CESPE/CEBRASPE.'
    },
    tags: ['vírgula', 'ponto e vírgula', 'dois-pontos', 'aspas', 'travessão']
  },
  {
    id: 'Q-DID-PT-0831',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Identificação de pontuação incorreta em enumeração',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'Qual das frases a seguir está INCORRETA em relação à pontuação?',
    alternativas: [
      { id: 'A', texto: 'No mês passado, venderam duas casas novas e muito bonitas.' },
      { id: 'B', texto: 'Ela buscava um objetivo: morar na Irlanda.' },
      { id: 'C', texto: 'Parabéns, João! Estou orgulhosa de você.' },
      { id: 'D', texto: 'Minha mãe trouxe, torta, bolo, suco, e café.' },
      { id: 'E', texto: 'Por que você discutiu com a sua melhor amiga?' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'D está INCORRETA porque a vírgula antes de "e café" é inadequada em uma enumeração simples. O correto seria "torta, bolo, suco e café".',
      incorretas: {
        A: 'Adjunto anteposto com vírgula — correto.',
        B: 'Dois-pontos para explicar o objetivo — correto.',
        C: 'Vocativo e exclamação — corretos.',
        E: 'Interrogação direta — correta.'
      },
      conceitoCobrado: 'Vírgula antes de "e" em enumeração.',
      pegadinha: 'A vírgula antes do "e" final é um erro clássico.',
      comoApareceEmConcurso: 'Cobrança frequente.'
    },
    tags: ['vírgula', 'enumeração', 'conjunção e']
  },
  {
    id: 'Q-DID-PT-0832',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Pontuação em estruturas complexas',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'Leia as afirmativas a seguir, analisando o emprego dos sinais de pontuação de acordo com a norma culta: I. "O gerente solicitou: relatórios atualizados; planilhas detalhadas e cronogramas revisados; entretanto, a equipe — sobrecarregada — não concluiu as tarefas a tempo." II. "Embora o projeto fosse complexo (exigindo conhecimentos técnicos avançados), os estagiários demonstraram competência; surpreendendo os coordenadores." III. "Os componentes necessários são: parafusos, porcas, arruelas e buchas; pois a montagem exige precisão." IV. "O técnico questionou: — A instalação foi finalizada? — e, ao receber a confirmação, registrou o termo de entrega." V. "A máquina apresentou falhas críticas... superaquecimento, vazamentos e desgaste prematuro; portanto, será substituída." Em quais afirmativas todas as ocorrências de pontuação estão corretas?',
    alternativas: [
      { id: 'A', texto: 'II e IV.' },
      { id: 'B', texto: 'I e II.' },
      { id: 'C', texto: 'I e V.' },
      { id: 'D', texto: 'III e V.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'I e V estão corretas. Em I, o ponto e vírgula separa itens de uma enumeração complexa que já contém vírgulas internas, e os travessões isolam "sobrecarregada". Em V, as reticências indicam suspensão, e o ponto e vírgula antes de "portanto" é aceitável.',
      incorretas: {
        A: 'II tem ponto e vírgula antes de "surpreendendo" — erro.',
        B: 'II está errada.',
        D: 'III tem ponto e vírgula antes de "pois" — erro.'
      },
      conceitoCobrado: 'Pontuação em períodos longos e enumerações complexas.',
      pegadinha: 'A banca insere ponto e vírgula em locais inadequados (antes de gerúndio e de conjunção).',
      comoApareceEmConcurso: 'Questão de nível avançado.'
    },
    tags: ['ponto e vírgula', 'travessão', 'reticências', 'enumeração']
  },
  {
    id: 'Q-DID-PT-0833',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Funções da vírgula (aposto, adjunto, oração adjetiva)',
    dificuldade: 2,
    prioridade: 'muito_alta',
    enunciado: 'A respeito das regras que orientam os usos da vírgula, associe a segunda coluna de acordo com a primeira, relacionando as aplicações da vírgula a suas respectivas regras: Primeira coluna: aplicações/usos 1. Em uma noite histórica, a escritora mineira Ana Maria Gonçalves foi empossada como nova imortal da Academia Brasileira de Letras (ABL). 2. Ela passa a ocupar a cadeira nº 33, que pertenceu ao linguista Evanildo Bechara, tornando-se a primeira mulher negra a integrar a instituição fundada em 1897 [...]. 3. Autora do premiado romance "Um defeito de cor", lançado em 2006, Ana Maria Gonçalves construiu uma obra de grande fôlego narrativo e político. Segunda coluna: regras (__) Separar orações adjetiva explicativa. (__) Separar o adjunto adverbial anteposto ao verbo/deslocado. (__) Separar aposto explicativo. Assinale a alternativa que apresenta a correta associação entre as colunas:',
    alternativas: [
      { id: 'A', texto: '1 – 2 – 3.' },
      { id: 'B', texto: '2 – 1 – 3.' },
      { id: 'C', texto: '1 – 3 – 2.' },
      { id: 'D', texto: '2 – 3 – 1.' },
      { id: 'E', texto: '3 – 1 – 2.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '1 → adjunto adverbial anteposto ("Em uma noite histórica"). 2 → oração adjetiva explicativa ("que pertenceu..."). 3 → aposto explicativo ("Autora do premiado romance..."). Sequência: 2 – 1 – 3.',
      incorretas: {
        A: 'Inverte a ordem.',
        C: 'Coloca o aposto em segundo lugar.',
        D: 'Troca adjunto e aposto.',
        E: 'Inverte completamente.'
      },
      conceitoCobrado: 'Identificação das funções da vírgula em contexto.',
      pegadinha: 'A oração adjetiva explicativa e o aposto explicativo podem ser confundidos.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['vírgula', 'aposto', 'adjunto', 'oração adjetiva']
  },
  {
    id: 'Q-DID-PT-0834',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Pontuação em discurso direto e orações intercaladas',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'Assinale a alternativa cuja sentença se apresenta totalmente correta em relação à pontuação.',
    alternativas: [
      { id: 'A', texto: 'Prefiro estar entre vocês que me acolheram que me entendem porque, nem todas as pessoas, apresentam esse desprendimento.' },
      { id: 'B', texto: 'Existem sentimentos bons (como saudade, alegria, e existem sentimentos ruins – como tristeza e ódio) tudo forma o nosso caráter.' },
      { id: 'C', texto: 'Disse o orador, em tom bastante alegre: “Meus amigos, é chegada a hora de, apesar dos protestos, iniciarmos o nosso jantar festivo”.' },
      { id: 'D', texto: 'Ele me perguntou se era para eu ir também à festa? Sim eu respondi para ele, não se preocupar com essa questão.' },
      { id: 'E', texto: 'Tudo – céu, estrelas, espaço sideral – tudo, é obra de incrível perfeição mas nós, não costumamos dar o devido valor.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'C está impecável: vírgula após "orador", dois-pontos introduzindo a fala, e a citação contém vírgulas corretas para o vocativo e a expressão intercalada.',
      incorretas: {
        A: 'A vírgula após "porque" e antes de "apresentam" está errada.',
        B: 'Falta pontuação após os parênteses.',
        D: 'A interrogação é indevida (pergunta indireta) e faltam vírgulas.',
        E: 'A vírgula após o segundo "tudo" está errada; falta vírgula antes de "mas".'
      },
      conceitoCobrado: 'Discurso direto, vocativo e termos intercalados.',
      pegadinha: 'A banca mistura erros de pontuação com erros de colocação.',
      comoApareceEmConcurso: 'Cobrança de nível avançado.'
    },
    tags: ['discurso direto', 'dois-pontos', 'vírgula', 'vocativo']
  },
  {
    id: 'Q-DID-PT-0835',
    tipo: 'DIDATICA',
    area: 'SINT',
    moduloId: 'PT-08',
    subtema: 'Pontuação em estruturas sintáticas complexas',
    dificuldade: 3,
    prioridade: 'muito_alta',
    enunciado: 'Assinale a alternativa em que o uso dos sinais de pontuação está inteiramente correto de acordo com a norma culta, considerando as regras de emprego do ponto e vírgula, travessão, vírgula e dois pontos em estruturas sintáticas complexas:',
    alternativas: [
      { id: 'A', texto: 'A máquina parou subitamente: o supervisor — assustado com o ruído — correu para desligá-la; mas o dano já estava feito.' },
      { id: 'B', texto: 'Após o treinamento, os novos operários demonstraram habilidade; no entanto, os gestores decidiram reforçar a segurança: normas de emergência, uso de equipamentos e inspeções diárias.' },
      { id: 'C', texto: 'O técnico revisou os relatórios; identificou inconsistências nos dados — e alertou a equipe: sobre os riscos de falha no sistema.' },
      { id: 'D', texto: 'Os componentes essenciais são: placas de circuito; fios blindados e conectores — porém, a última remessa; continha itens defeituosos.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A apresenta uso impecável: dois-pontos para introduzir a consequência, travessões para isolar o comentário "assustado com o ruído", e ponto e vírgula para separar a oração adversativa final.',
      incorretas: {
        B: 'O ponto e vírgula antes de "no entanto" é inadequado; deveria ser vírgula ou ponto.',
        C: 'Os dois-pontos antes de "sobre" estão errados.',
        D: 'O ponto e vírgula antes de "porém" e antes de "continha" são inadequados.'
      },
      conceitoCobrado: 'Combinação de sinais em períodos complexos.',
      pegadinha: 'A banca insere ponto e vírgula em locais onde a vírgula ou o ponto seriam mais adequados.',
      comoApareceEmConcurso: 'Questão de altíssimo nível, comum em provas discursivas.'
    },
    tags: ['ponto e vírgula', 'travessão', 'dois-pontos', 'vírgula']
  },

  /* ============================================================
     PT-04 — Ortografia (uso dos porquês)
  ============================================================ */
  {
    id: 'Q-DID-PT-0406',
    tipo: 'DIDATICA',
    area: 'ORTO',
    moduloId: 'PT-04',
    subtema: 'Uso dos porquês',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Dos vários membros de um grupo, apenas um não foi levado a uma festa e ele gostaria de saber o motivo. Assinale a alternativa em que a expressão do desejo desse membro do grupo obedece às normas ortográficas e gramaticais da língua portuguesa.',
    alternativas: [
      { id: 'A', texto: '“Não me levaram à festa e eu gostaria de saber o porque.”' },
      { id: 'B', texto: '“Não sei porque não me levaram à festa. Gostaria de sabê-lo.”' },
      { id: 'C', texto: '“Me levaram à festa? Não. Me pergunto: por quê?”' },
      { id: 'D', texto: '“Por que não levaram-me à festa? Gostaria muito de saber.”' },
      { id: 'E', texto: '“Não me levaram à festa. Gostaria de saber por que razão.”' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'Em E, "por que razão" é a forma correta: "por que" separado, equivalendo a "por qual razão". A colocação pronominal "Não me levaram" (próclise com palavra negativa) também está correta.',
      incorretas: {
        A: '"porque" junto e sem acento no final da frase deveria ser "porquê" (substantivo) ou "por quê" (no final).',
        B: 'Em "Não sei porque não me levaram", o correto é "por que" (interrogativa indireta), separado.',
        C: 'A colocação "Me levaram" no início da frase fere a norma padrão (deveria ser "Levaram-me").',
        D: 'A ênclise "levaram-me" após "não" está errada; o correto é "não me levaram".'
      },
      conceitoCobrado: 'Diferença entre "por que", "por quê", "porque" e "porquê"; colocação pronominal.',
      pegadinha: 'A banca combina erro de porquê com erro de colocação pronominal.',
      comoApareceEmConcurso: 'Cobrança clássica em ortografia e gramática.'
    },
    tags: ['porquês', 'por que', 'porquê', 'colocação pronominal']
  }   

];
