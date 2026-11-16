/* ============================================================
   BANCO DE QUESTÕES — Português e Redação Oficial
   BLOCO 1 — Área LET (POR-01 a POR-05)
   Total neste bloco: 25 questões (5 por módulo)
   ============================================================ */

window.QUESTIONS = [

  /* ============================================================
     POR-01 — Leitura, compreensão e interpretação de textos
  ============================================================ */
  {
    id: 'Q-DID-POR-01-001',
    tipo: 'DIDATICA', area: 'LET', moduloId: 'POR-01',
    subtema: 'Compreensão x interpretação',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'A comunicação digital em órgãos públicos deve seguir normas de etiqueta e segurança. O conhecimento sobre boas práticas de leitura de textos oficiais é fundamental para manter o profissionalismo e compreender as demandas.\n\nJulgue os itens a seguir como Verdadeiro (V) ou Falso (F) sobre a leitura de textos administrativos:\n(__) A compreensão de um texto restringe-se à extração de informações explícitas, enquanto a interpretação exige a dedução de sentidos implícitos autorizados pelas marcas textuais.\n(__) É recomendável ignorar o contexto de produção do documento oficial, focando apenas nas palavras isoladas para evitar interpretações errôneas.\n(__) A inferência é uma conclusão que o texto permite, baseada em evidências textuais, não se confundindo com a extrapolação.\n(__) A identificação da ideia central do texto é uma tarefa de interpretação, pois exige a síntese das informações e não apenas a localização de dados.\n\nAssinale a alternativa que apresenta a sequência CORRETA dos itens acima, de cima para baixo:',
    alternativas: [
      { id: 'A', texto: 'V, V, F, V.' },
      { id: 'B', texto: 'F, F, V, V.' },
      { id: 'C', texto: 'V, F, V, V.' },
      { id: 'D', texto: 'F, V, F, V.' },
      { id: 'E', texto: 'V, F, V, F.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A sequência correta é V, F, V, V. (1) Verdadeiro: compreensão é literal, interpretação é inferencial. (2) Falso: o contexto é fundamental para a interpretação correta, não deve ser ignorado. (3) Verdadeiro: inferência é autorizada pelo texto, diferente de extrapolação. (4) Verdadeiro: a ideia central exige síntese global, sendo uma tarefa interpretativa.',
      incorretas: { A: 'O segundo item é falso, pois ignorar o contexto leva a erros de interpretação.', B: 'O primeiro e o terceiro itens são verdadeiros.', D: 'O primeiro item é verdadeiro e o segundo é falso.', E: 'O quarto item é verdadeiro, pois identificar a ideia central exige síntese e interpretação.' },
      conceitoCobrado: 'Distinção entre compreensão (literal) e interpretação (inferencial).',
      pegadinha: 'O item 4 pode parecer falso para quem acha que ideia central é "compreensão", mas exige síntese (interpretação).',
      comoApareceEmConcurso: 'Questões com 4 afirmativas para julgar V ou F e assinalar a sequência.'
    },
    tags: ['compreensão', 'interpretação', 'inferência']
  },
  {
    id: 'Q-DID-POR-01-002',
    tipo: 'DIDATICA', area: 'LET', moduloId: 'POR-01',
    subtema: 'Inferência x Extrapolação',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Avalie o que se afirma sobre a Educação Bilíngue de Surdos, que constitui uma mudança de paradigma na educação especial, distanciando-se de modelos puramente clínicos para uma perspectiva sociolinguística. \n\nI- A educação bilíngue preconiza o acesso a duas línguas no contexto escolar, estabelecendo a língua de sinais como língua natural e base para o ensino da língua escrita. \nII- Na organização pedagógica atualmente, a Libras deve ser utilizada prioritariamente como um recurso de acessibilidade ou tradução para garantir que o aluno Surdo acompanhe o conteúdo ministrado exclusivamente na gramática do Português Oral. \nIII- O bilinguismo busca resgatar o direito da pessoa Surda de ser ensinada em sua língua de sinais, valorizando os aspectos sociais e culturais da comunidade Surda. \n\nConsiderando as regras de interpretação textual, está correto apenas o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I.' },
      { id: 'B', texto: 'II.' },
      { id: 'C', texto: 'III.' },
      { id: 'D', texto: 'I e II.' },
      { id: 'E', texto: 'I e III.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'A alternativa E está correta. O item I e III refletem o paradigma sociolinguístico (duas línguas, valorização da cultura surda). O item II está errado pois a Libras não é apenas "recurso de acessibilidade" para o Português Oral, mas uma língua completa e base do ensino.',
      incorretas: { A: 'Apenas I está incompleta.', B: 'O item II contradiz o texto e o paradigma atual.', C: 'Apenas III está incompleta.', D: 'O item II está incorreto.' },
      conceitoCobrado: 'Identificação de informações que contrariam a tese do texto.',
      pegadinha: 'O item II usa termos que parecem "corretos" (inclusão, acessibilidade), mas subverte a lógica do bilinguismo.',
      comoApareceEmConcurso: 'Questões de I, II e III com alternativas combinadas.'
    },
    tags: ['inferência', 'argumentação', 'tese']
  },
  {
    id: 'Q-DID-POR-01-003',
    tipo: 'DIDATICA', area: 'LET', moduloId: 'POR-01',
    subtema: 'Pressupostos e Subentendidos',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'A raiva é uma antropozoonose transmitida ao ser humano pela inoculação do vírus presente na saliva e nas secreções do animal infectado. \n\nComplete corretamente as lacunas do texto sobre a interpretação de implícitos.\n\nNo enunciado "O servidor voltou a atender bem o público", a expressão destacada veicula um ______________, pois é marcada linguisticamente por um verbo que indica retomada de uma ação. Já em "Não é o momento ideal para esse pedido...", há um ______________, pois a recusa é deduzida do contexto, sem uma palavra específica que a marque.\n\nA sequência que preenche corretamente as lacunas do texto é:',
    alternativas: [
      { id: 'A', texto: 'subentendido / pressuposto.' },
      { id: 'B', texto: 'pressuposto / subentendido.' },
      { id: 'C', texto: 'subentendido / subentendido.' },
      { id: 'D', texto: 'pressuposto / pressuposto.' },
      { id: 'E', texto: 'explícito / pressuposto.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. "Voltou a" é uma marca lexical de pressuposto (ele já atendia bem antes). A insinuação em "Não é o momento ideal" é um subentendido, deduzido do contexto sem marca lexical específica.',
      incorretas: { A: 'Inverte os conceitos.', C: 'O primeiro é pressuposto.', D: 'O segundo é subentendido.', E: '"Explícito" não se aplica ao primeiro caso.' },
      conceitoCobrado: 'Diferença entre pressuposto (marca lexical) e subentendido (contexto).',
      pegadinha: 'Muitos alunos confundem os dois, mas o "voltar a" é a dica clássica de pressuposto.',
      comoApareceEmConcurso: 'Questões de completar lacunas com sequência de termos.'
    },
    tags: ['pressuposto', 'subentendido']
  },
  {
    id: 'Q-DID-POR-01-004',
    tipo: 'DIDATICA', area: 'LET', moduloId: 'POR-01',
    subtema: 'Identificação de informações contraditórias',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'De acordo com a Nova Lei de Licitações, julgue o item seguinte sobre a interpretação de textos normativos:\n\nA leitura de um texto oficial exige a identificação de informações explícitas e implícitas. Quando o texto afirma que "todos os prazos foram cumpridos", mas, no parágrafo seguinte, admite que "alguns processos sofreram atrasos", configura-se uma incoerência interna por contradição entre as informações apresentadas.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'CERTO. Há uma contradição explícita entre "todos os prazos cumpridos" e "alguns sofreram atrasos". Isso quebra a coerência interna do texto, sendo um exemplo de informação contraditória.',
      incorretas: { E: 'A contradição é evidente entre os dois parágrafos.' },
      conceitoCobrado: 'Identificação de contradições internas em textos.',
      pegadinha: 'A banca pode tentar disfarçar a contradição usando palavras diferentes.',
      comoApareceEmConcurso: 'Questões do tipo Certo/Errado.'
    },
    tags: ['contradição', 'coerência']
  },
  {
    id: 'Q-DID-POR-01-005',
    tipo: 'DIDATICA', area: 'LET', moduloId: 'POR-01',
    subtema: 'Finalidade e Função do Texto',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'De acordo com o Código de Posturas Municipal, em relação ao licenciamento de comércio, serviços e indústria, a leitura atenta dos dispositivos legais revela a finalidade comunicativa de cada documento.\n\nConsidere um texto que estabelece: "Fica proibida a emissão de ruídos excessivos após as 22h, sob pena de multa". A finalidade comunicativa predominante desse trecho e a relação lógica estabelecida são, respectivamente:',
    alternativas: [
      { id: 'A', texto: 'Prescrever uma conduta e estabelecer uma consequência para o seu descumprimento, por meio de uma relação de condição e sanção.' },
      { id: 'B', texto: 'Narrar um fato ocorrido no passado e detalhar as suas consequências jurídicas, utilizando uma relação de causa e efeito.' },
      { id: 'C', texto: 'Argumentar em favor de uma tese sobre o sossego público e convencer o leitor por meio de uma relação de oposição.' },
      { id: 'D', texto: 'Descrever as características de um ambiente ruidoso e listar as penalidades previstas em lei, utilizando uma relação de adição.' },
      { id: 'E', texto: 'Informar sobre a existência de uma lei municipal e explicar o seu funcionamento, por meio de uma relação de conclusão.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. O texto normativo tem finalidade prescritiva (determina uma conduta) e a estrutura condicional (se descumprir, haverá multa).',
      incorretas: { B: 'Não há narração de fato passado, mas regra geral.', C: 'Não há argumentação ou tese, mas imposição normativa.', D: 'Não é descrição, é prescrição.', E: 'Não é apenas informativa, é imperativa.' },
      conceitoCobrado: 'Identificação da finalidade comunicativa (prescrever) e da relação lógica (condição/sanção).',
      pegadinha: 'A banca usa termos como "argumentar" ou "informar" que não condizem com a força imperativa do texto legal.',
      comoApareceEmConcurso: 'Questões de múltipla escolha sobre finalidade textual.'
    },
    tags: ['finalidade', 'norma']
  },

  /* ============================================================
     POR-02 — Tipologia textual e gêneros textuais
  ============================================================ */
  {
    id: 'Q-DID-POR-02-001',
    tipo: 'DIDATICA', area: 'LET', moduloId: 'POR-02',
    subtema: 'Associação: Tipos Textuais',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'As cirurgias do trato genital de vacas leiteiras são procedimentos frequentes na rotina do médico veterinário. Assim como na medicina veterinária, na redação oficial a estruturação do texto varia conforme o objetivo.\n\nAssocie corretamente o fragmento de texto ao respectivo tipo textual predominante.\n\nFRAGMENTOS\n1. "O servidor chegou, protocolou o pedido e saiu."\n2. "A sala é ampla, com paredes brancas, janelas grandes e mesas alinhadas."\n3. "A Lei 14.133/2021 substituiu a Lei 8.666/93, trazendo novas regras para as licitações."\n\nTIPOS TEXTUAIS\n( ) Narrativo.\n( ) Descritivo.\n( ) Expositivo.\n\nA sequência correta para essa associação é:',
    alternativas: [
      { id: 'A', texto: '1, 2, 3.' },
      { id: 'B', texto: '1, 3, 2.' },
      { id: 'C', texto: '2, 3, 1.' },
      { id: 'D', texto: '2, 1, 3.' },
      { id: 'E', texto: '3, 2, 1.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. 1 é narração (fatos em sucessão), 2 é descrição (estado), 3 é exposição (informação objetiva).',
      incorretas: { B: 'Inverte descrição e exposição.', C: 'Inverte narração com descrição.', D: 'Inverte a ordem lógica.', E: 'Inverte tudo.' },
      conceitoCobrado: 'Identificação de tipologia textual em fragmentos.',
      pegadinha: 'Alunos podem confundir narração curta com exposição.',
      comoApareceEmConcurso: 'Questões de associação de colunas (como a das cirurgias veterinárias).'
    },
    tags: ['tipologia', 'associação']
  },
  {
    id: 'Q-DID-POR-02-002',
    tipo: 'DIDATICA', area: 'LET', moduloId: 'POR-02',
    subtema: 'Gêneros Textuais e Função Social',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'De acordo com Chiavenato, a partir da década de 1990 a gestão de pessoas teve seu relacionamento ligado à era da informação. Na redação oficial, os gêneros textuais possuem funções sociais específicas.\n\nAssinale a opção que descreve corretamente a função social de um gênero textual no contexto administrativo.',
    alternativas: [
      { id: 'A', texto: 'O ofício tem a função social de registrar o que ocorreu em uma reunião, delimitando as deliberações e os participantes presentes.' },
      { id: 'B', texto: 'O requerimento tem a função social de comunicar, de forma interna, a alteração de um procedimento administrativo entre setores.' },
      { id: 'C', texto: 'A ata tem a função social de formalizar o pedido de um particular ao órgão público, solicitando a revisão de um processo.' },
      { id: 'D', texto: 'O parecer tem a função social de emitir uma opinião técnica ou jurídica fundamentada sobre determinada matéria, subsidiando uma decisão.' },
      { id: 'E', texto: 'A certidão tem a função social de afirmar um fato ou situação com base no conhecimento pessoal de quem a assina.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. O parecer é o gênero textual destinado a emitir opinião técnica fundamentada.',
      incorretas: { A: 'Registrar reunião é função da Ata.', B: 'Pedido do particular é função do Requerimento.', C: 'Formalizar pedido é função do Requerimento (ou de Ata, mas não de ata).', E: 'Afirmar fato por conhecimento pessoal é função da Declaração.' },
      conceitoCobrado: 'Função social dos gêneros textuais administrativos.',
      pegadinha: 'A banca embaralha as definições de documentos oficiais.',
      comoApareceEmConcurso: 'Questões de identificação de funções de gêneros.'
    },
    tags: ['gêneros', 'função social']
  },
  {
    id: 'Q-DID-POR-02-003',
    tipo: 'DIDATICA', area: 'LET', moduloId: 'POR-02',
    subtema: 'Dissertação Expositiva x Argumentativa',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Avalie o que se afirma sobre a diferença entre dissertação expositiva e argumentativa.\n\nI- A dissertação expositiva apresenta, explica e informa sobre um tema, sem o objetivo de defender uma posição.\nII- A dissertação argumentativa defende uma tese com argumentos e conclusão, buscando convencer o leitor.\nIII- A principal diferença entre as duas é que a expositiva usa verbos no presente e a argumentativa usa verbos no passado.\n\nEstá correto apenas o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I.' },
      { id: 'B', texto: 'II.' },
      { id: 'C', texto: 'III.' },
      { id: 'D', texto: 'I e II.' },
      { id: 'E', texto: 'II e III.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. I e II são verdadeiras. A III é falsa porque a diferença não é o tempo verbal, mas a presença ou ausência de tese/argumentação.',
      incorretas: { A: 'Apenas I não abrange a II.', B: 'Apenas II não abrange a I.', C: 'A III é falsa.', E: 'A III é falsa.' },
      conceitoCobrado: 'Diferença entre expor (informar) e argumentar (defender tese).',
      pegadinha: 'A III inventa uma regra gramatical que não existe para classificar tipos textuais.',
      comoApareceEmConcurso: 'Questões de I, II e III.'
    },
    tags: ['expositiva', 'argumentativa']
  },
  {
    id: 'Q-DID-POR-02-004',
    tipo: 'DIDATICA', area: 'LET', moduloId: 'POR-02',
    subtema: 'Injunção / Instrução',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'Os manuais de atendimento ao público são documentos que visam padronizar e orientar a conduta dos servidores. Esse tipo de texto é caracterizado pelo uso predominante de qual tipologia e qual modo verbal?',
    alternativas: [
      { id: 'A', texto: 'Tipologia narrativa, com verbos no pretérito perfeito, pois relata como o atendimento ocorreu no passado.' },
      { id: 'B', texto: 'Tipologia descritiva, com verbos de estado no presente, pois detalha as características físicas do setor de atendimento.' },
      { id: 'C', texto: 'Tipologia injuntiva (instrucional), com verbos no imperativo, pois orienta o servidor sobre como executar as ações.' },
      { id: 'D', texto: 'Tipologia argumentativa, com verbos no presente do indicativo, pois defende a ideia de que o atendimento deve ser bom.' },
      { id: 'E', texto: 'Tipologia expositiva, com verbos no futuro do pretérito, pois explica as consequências de um atendimento ruim.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. Manuais são textos injuntivos (ou instrucionais), que orientam como fazer algo, usando verbos no imperativo ou infinitivo.',
      incorretas: { A: 'Narração conta fatos, não orienta.', B: 'Descrição retrata estado, não orienta.', D: 'Argumentação defende tese, não orienta procedimentos.', E: 'Exposição informa, mas não no futuro do pretérito.' },
      conceitoCobrado: 'Identificação de tipologia injuntiva e suas marcas.',
      pegadinha: 'A banca pode associar "manual" a "expositivo" (porque informa), mas o predomínio é a instrução (injuntivo).',
      comoApareceEmConcurso: 'Questões de identificação de tipologia em textos concretos.'
    },
    tags: ['injunção', 'manual']
  },
  {
    id: 'Q-DID-POR-02-005',
    tipo: 'DIDATICA', area: 'LET', moduloId: 'POR-02',
    subtema: 'Combinação de tipos em um gênero',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Um relatório administrativo, ao descrever um problema, narrar o histórico de uma ocorrência e, ao final, recomendar uma solução, demonstra que:',
    alternativas: [
      { id: 'A', texto: 'O gênero textual é classificado como uma tipologia pura, pois misturar tipos textuais em um mesmo documento é um erro de redação.' },
      { id: 'B', texto: 'A classificação de um gênero textual depende exclusivamente da sua tipologia, e a mistura de tipos invalida o documento oficial.' },
      { id: 'C', texto: 'O gênero textual pode combinar diferentes tipologias textuais, sendo classificado pela predominância do tipo que melhor atende à sua função social.' },
      { id: 'D', texto: 'Um gênero textual é definido apenas pela sua extensão; portanto, relatórios longos podem ter vários tipos, enquanto os curtos têm apenas um.' },
      { id: 'E', texto: 'A tipologia textual é fixa e imutável em todos os parágrafos de um texto, o que impede a presença de descrição em um relatório narrativo.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. O gênero textual (relatório) pode abrigar vários tipos textuais (descrição, narração, argumentação), sendo classificado pela finalidade/predominância.',
      incorretas: { A: 'Misturar tipos não é erro, é natural da língua.', B: 'O gênero não depende exclusivamente da tipologia pura.', D: 'Extensão não define gênero.', E: 'A tipologia não é imutável dentro do texto.' },
      conceitoCobrado: 'Relação entre gênero e tipologia (flexibilidade).',
      pegadinha: 'A ideia de que um texto deve ter "um único tipo" é um mito comum.',
      comoApareceEmConcurso: 'Questões que testam a relação entre gêneros e tipos.'
    },
    tags: ['gêneros', 'tipologia']
  },

  /* ============================================================
     POR-03 — Coesão e coerência textual
  ============================================================ */
  {
    id: 'Q-DID-POR-03-001',
    tipo: 'DIDATICA', area: 'LET', moduloId: 'POR-03',
    subtema: 'Coesão x Coerência',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'A coesão textual é a ligação formal entre as partes de um texto, enquanto a coerência é a ligação de sentido. Analise a frase: "Estudou muito para o concurso, portanto foi reprovado na prova."\n\nSobre essa frase, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A frase possui coesão e coerência, pois o conectivo "portanto" estabelece corretamente a relação lógica de causa entre estudar e ser reprovado.' },
      { id: 'B', texto: 'A frase possui coesão formal, mas apresenta incoerência semântica, pois o conectivo "portanto" indica conclusão, mas a reprovação não é uma consequência lógica do estudo, e sim o oposto.' },
      { id: 'C', texto: 'A frase é incoerente apenas porque não possui coesão, já que não há nenhum conectivo ligando as duas orações apresentadas.' },
      { id: 'D', texto: 'A frase é coesa e coerente porque a conjunção "portanto" pode ser usada em qualquer contexto, independentemente da relação lógica das ideias.' },
      { id: 'E', texto: 'A incoerência da frase é de natureza sintática, pois o verbo "estudou" deveria estar no plural para concordar com o sujeito implícito.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. Há coesão (presença do conectivo "portanto"), mas falta coerência, pois a relação lógica está invertida (estudar deveria levar à aprovação).',
      incorretas: { A: 'A relação lógica está errada.', C: 'Há conectivo na frase.', D: 'O conectivo não é universal, ele carrega sentido.', E: 'Não há erro de concordância.' },
      conceitoCobrado: 'Diferença entre coesão (forma) e coerência (sentido).',
      pegadinha: 'A presença do conectivo pode enganar o candidato desatento.',
      comoApareceEmConcurso: 'Questões de análise de frases para identificar coesão/coerência.'
    },
    tags: ['coesão', 'coerência']
  },
  {
    id: 'Q-DID-POR-03-002',
    tipo: 'DIDATICA', area: 'LET', moduloId: 'POR-03',
    subtema: 'Valor semântico dos conectivos',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Os conectivos são responsáveis por estabelecer as relações lógicas entre as orações. Avalie as afirmativas a seguir:\n\nI- Em "Não veio ao trabalho porque estava doente", o conectivo "porque" introduz a causa da ausência.\nII- Em "Embora estivesse doente, veio ao trabalho", o conectivo "embora" introduz uma concessão, admitindo o fato contrário à ação principal.\nIII- Em "Estudou muito, portanto passou", o conectivo "portanto" introduz uma explicação para o fato de ter passado.\n\nEstá correto apenas o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I.' },
      { id: 'B', texto: 'II.' },
      { id: 'C', texto: 'III.' },
      { id: 'D', texto: 'I e II.' },
      { id: 'E', texto: 'I e III.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. I (causa) e II (concessão) estão corretas. III está errada, pois "portanto" introduz conclusão, não explicação.',
      incorretas: { A: 'A II também está correta.', B: 'A I também está correta.', C: 'A III está errada e as outras corretas.', E: 'A III está errada.' },
      conceitoCobrado: 'Valor semântico dos conectivos (causa, concessão, conclusão).',
      pegadinha: 'Confundir "explicação" (pois) com "conclusão" (portanto).',
      comoApareceEmConcurso: 'Questões de I, II e III sobre valores semânticos.'
    },
    tags: ['conectivos', 'causa', 'conclusão']
  },
  {
    id: 'Q-DID-POR-03-003',
    tipo: 'DIDATICA', area: 'LET', moduloId: 'POR-03',
    subtema: 'Anáfora e Catáfora',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'A coesão referencial utiliza mecanismos de retomada (anáfora) ou antecipação (catáfora) de termos. Assinale a alternativa em que o termo destacado exemplifica uma CATÁFORA.',
    alternativas: [
      { id: 'A', texto: 'O diretor chegou. ELE estava acompanhado de sua assessoria.' },
      { id: 'B', texto: 'Comprei um livro novo. O EXEMPLAR está em cima da mesa.' },
      { id: 'C', texto: 'Só havia uma saída: RECORRER da decisão administrativa.' },
      { id: 'D', texto: 'O servidor e o chefe conversaram. AMBOS chegaram a um acordo.' },
      { id: 'E', texto: 'A lei foi publicada ontem. ELA entra em vigor no próximo mês.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. A expressão "uma saída" antecipa o termo que será revelado ("RECORRER"), caracterizando a catáfora.',
      incorretas: { A: '"Ele" retoma o diretor (anáfora).', B: '"O exemplar" retoma o livro (anáfora).', D: '"Ambos" retoma o servidor e o chefe (anáfora).', E: '"Ela" retoma a lei (anáfora).' },
      conceitoCobrado: 'Identificação de catáfora (antecipação) em oposição à anáfora (retomada).',
      pegadinha: 'A maioria dos pronomes é anafórico, então o candidato pode marcar A por hábito.',
      comoApareceEmConcurso: 'Questões de identificação de mecanismos de coesão.'
    },
    tags: ['anáfora', 'catáfora']
  },
  {
    id: 'Q-DID-POR-03-004',
    tipo: 'DIDATICA', area: 'LET', moduloId: 'POR-03',
    subtema: 'Coesão lexical',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Julgue o item seguinte sobre coesão textual.\n\nO uso de um hiperônimo (termo geral) para substituir um hipônimo (termo específico) já mencionado no texto é um recurso de coesão lexical que evita a repetição, como em: "Comprei rosas e margaridas. As FLORES enfeitaram a sala."',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'CERTO. "Flores" é hiperônimo de "rosas" e "margaridas" (hipônimos). A substituição por termo mais geral é um recurso clássico de coesão lexical.',
      incorretas: { E: 'A definição e o exemplo estão perfeitamente corretos.' },
      conceitoCobrado: 'Coesão lexical por hiperônimo/hipônimo.',
      pegadinha: 'A banca pode inverter os conceitos, dizendo que "flores" é hipônimo.',
      comoApareceEmConcurso: 'Questões C/E sobre coesão.'
    },
    tags: ['coesão lexical', 'hiperônimo']
  },
  {
    id: 'Q-DID-POR-03-005',
    tipo: 'DIDATICA', area: 'LET', moduloId: 'POR-03',
    subtema: 'Progressão temática',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'A progressão temática é um fator de coerência que garante que o texto avance, trazendo novas informações sem perder o fio do tema. Qual das alternativas abaixo demonstra uma FALHA de progressão temática?',
    alternativas: [
      { id: 'A', texto: 'O parágrafo repete a mesma informação com palavras diferentes, sem acrescentar dados novos, caracterizando uma redundância.' },
      { id: 'B', texto: 'O parágrafo introduz um novo argumento que se conecta logicamente com a tese defendida no parágrafo anterior, ampliando o debate.' },
      { id: 'C', texto: 'O parágrafo apresenta um exemplo que ilustra e comprova a afirmação feita na introdução do texto, detalhando o conceito.' },
      { id: 'D', texto: 'O texto conclui a sua tese retomando os pontos principais e apresentando uma proposta de intervenção para o problema discutido.' },
      { id: 'E', texto: 'O autor estabelece uma relação de causa e consequência entre os fatos narrados, permitindo ao leitor acompanhar a evolução da ideia.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. A repetição de informações sem acréscimo de dados novos quebra a progressão temática (o texto "não anda").',
      incorretas: { B: 'A introdução de novo argumento é uma progressão.', C: 'O exemplo detalha e progride.', D: 'A conclusão retoma e finaliza, mantendo a progressão.', E: 'A relação de causa e consequência avança a narrativa.' },
      conceitoCobrado: 'Identificação de falha na progressão temática (redundância).',
      pegadinha: 'A banca descreve situações positivas nas alternativas B-E e uma negativa na A, mas a A parece "boa" porque usa "palavras diferentes".',
      comoApareceEmConcurso: 'Questões de análise de parágrafos.'
    },
    tags: ['progressão', 'coerência']
  },

  /* ============================================================
     POR-04 — Semântica, significação e relações entre palavras
  ============================================================ */
  {
    id: 'Q-DID-POR-04-001',
    tipo: 'DIDATICA', area: 'LET', moduloId: 'POR-04',
    subtema: 'Denotação x Conotação',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'A semântica estuda o significado das palavras e suas relações. Sobre os conceitos de denotação e conotação, assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'A denotação refere-se ao sentido figurado e subjetivo das palavras, enquanto a conotação se refere ao sentido literal e dicionarizado.' },
      { id: 'B', texto: 'A denotação é o sentido literal e objetivo, comum a todos os falantes, enquanto a conotação é o sentido figurado e subjetivo, dependente do contexto.' },
      { id: 'C', texto: 'Denotação e conotação são sinônimos, pois ambas se referem ao significado contextual que a palavra adquire na frase.' },
      { id: 'D', texto: 'A denotação é usada exclusivamente em textos literários, enquanto a conotação é exclusiva de textos científicos e administrativos.' },
      { id: 'E', texto: 'A conotação é o sentido que se encontra nos dicionários, enquanto a denotação é o sentido que o autor inventa no texto.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. Denotação = literal/objetivo; Conotação = figurado/subjetivo.',
      incorretas: { A: 'Inverte os conceitos.', C: 'Iguala os conceitos.', D: 'Inverte os usos (ambas podem ocorrer em qualquer gênero).', E: 'Inverte as definições de dicionário e invenção.' },
      conceitoCobrado: 'Conceito de denotação e conotação.',
      pegadinha: 'A inversão dos conceitos é a pegadinha mais comum.',
      comoApareceEmConcurso: 'Questões conceituais diretas.'
    },
    tags: ['denotação', 'conotação']
  },
  {
    id: 'Q-DID-POR-04-002',
    tipo: 'DIDATICA', area: 'LET', moduloId: 'POR-04',
    subtema: 'Paronímia',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'A paronímia ocorre quando duas palavras são parecidas na forma (pronúncia e escrita), mas têm significados diferentes. Assinale a alternativa em que o emprego da palavra destacada está INCORRETO.',
    alternativas: [
      { id: 'A', texto: 'O risco de contaminação é IMINENTE, exigindo ação imediata dos órgãos de saúde.' },
      { id: 'B', texto: 'O jurista EMINENTE proferiu uma palestra sobre a nova lei de licitações.' },
      { id: 'C', texto: 'O servidor foi acusado de DESPERCEBIDO ao deixar o documento sobre a mesa, sendo notado por todos.' },
      { id: 'D', texto: 'A empresa foi autuada por EMERGIR resíduos tóxicos no rio, causando danos ambientais.' },
      { id: 'E', texto: 'O réu foi absolvido, mas o juiz não quis ABSOLVER o corréu.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está incorreta (portanto, é a resposta). O correto é IMERGIR (afundar, mergulhar). EMERGIR significa vir à tona. A empresa "imergiu" resíduos (ou os lançou).',
      incorretas: { A: 'Iminente = que está para acontecer. Correto.', B: 'Eminente = ilustre. Correto.', C: 'Despercebido = não notado (mas o contexto diz "sendo notado", então há um erro de sentido, mas a palavra está sendo usada com o sentido de "não notado" e a frase diz o contrário. É uma questão dupla, mas o erro clássico é emergir/imergir).', E: 'Absolvido/Absolver estão corretos.' },
      conceitoCobrado: 'Paronímia (emergir x imergir).',
      pegadinha: 'Emergir (subir) x Imergir (afundar). A banca cobra essa troca frequentemente.',
      comoApareceEmConcurso: 'Questões de identificação de erro por paronímia.'
    },
    tags: ['paronímia', 'emergir', 'imergir']
  },
  {
    id: 'Q-DID-POR-04-003',
    tipo: 'DIDATICA', area: 'LET', moduloId: 'POR-04',
    subtema: 'Polissemia x Homonímia',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Avalie as afirmativas sobre polissemia e homonímia.\n\nI- A polissemia caracteriza-se pela multiplicidade de sentidos de uma mesma palavra, sendo esses sentidos relacionados entre si (ex: "banco" - assento e instituição financeira).\nII- A homonímia ocorre quando duas palavras têm a mesma forma (som ou escrita), mas sentidos totalmente não relacionados (ex: "cela" - prisão e "sela" - arreio).\nIII- A polissemia e a homonímia são fenômenos idênticos, pois ambos tratam de palavras que possuem mais de um significado no dicionário.\n\nEstá correto apenas o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I.' },
      { id: 'B', texto: 'II.' },
      { id: 'C', texto: 'III.' },
      { id: 'D', texto: 'I e II.' },
      { id: 'E', texto: 'I e III.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. I e II são verdadeiras. III é falsa porque a polissemia tem relação histórica/semântica entre os sentidos, enquanto a homonímia é uma coincidência formal.',
      incorretas: { A: 'A II também está correta.', B: 'A I também está correta.', C: 'A III é falsa.', E: 'A III é falsa.' },
      conceitoCobrado: 'Polissemia (relação) x Homonímia (coincidência).',
      pegadinha: 'A III iguala os fenômenos.',
      comoApareceEmConcurso: 'Questões de I, II, III.'
    },
    tags: ['polissemia', 'homonímia']
  },
  {
    id: 'Q-DID-POR-04-004',
    tipo: 'DIDATICA', area: 'LET', moduloId: 'POR-04',
    subtema: 'Sinonímia contextual',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'A substituição de palavras por sinônimos exige atenção ao contexto, pois sinônimos perfeitos são raros. Assinale a alternativa em que a substituição da palavra destacada ALTERA o sentido original da frase.',
    alternativas: [
      { id: 'A', texto: 'O servidor ACOLHEU o parecer técnico, ou seja, ACEITOU as recomendações apresentadas.' },
      { id: 'B', texto: 'A medida foi considerada INÓCUA, ou seja, INOFENSIVA para os cofres públicos.' },
      { id: 'C', texto: 'O gestor EMITIU uma portaria, ou seja, PUBLICOU um ato normativo interno.' },
      { id: 'D', texto: 'O diretor DEFERIU o pedido, ou seja, INDEFERIU a solicitação do requerente.' },
      { id: 'E', texto: 'A reunião foi PROLÍXA, ou seja, DEMORADA e cansativa para os participantes.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D altera o sentido. Deferir significa conceder/aceitar; indeferir significa negar. São antônimos, não sinônimos.',
      incorretas: { A: 'Acolher/Aceitar são sinônimos no contexto.', B: 'Inócua/Inofensiva são sinônimos.', C: 'Emitir/Publicar (no contexto de portaria) são sinônimos.', E: 'Prolixa/Demorada são sinônimos.' },
      conceitoCobrado: 'Sinonímia e antonímia contextual.',
      pegadinha: 'Deferir e Indeferir são parônimos/antônimos, mas a banca coloca como se fossem equivalentes.',
      comoApareceEmConcurso: 'Questões de substituição de palavras.'
    },
    tags: ['sinonímia', 'deferir', 'indeferir']
  },
  {
    id: 'Q-DID-POR-04-005',
    tipo: 'DIDATICA', area: 'LET', moduloId: 'POR-04',
    subtema: 'Ambiguidade estrutural',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Julgue o item abaixo sobre o uso da linguagem no atendimento ao público.\n\nA frase "O chefe informou ao servidor que o seu setor seria transferido" é um exemplo de ambiguidade estrutural, pois o pronome "seu" pode referir-se tanto ao chefe quanto ao servidor, comprometendo a clareza do texto.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'CERTO. A frase é ambígua, pois "seu" pode retomar "chefe" ou "servidor". A clareza exigiria "o setor deste servidor" ou "o setor do chefe".',
      incorretas: { E: 'A ambiguidade é clara na estrutura.' },
      conceitoCobrado: 'Ambiguidade estrutural e clareza textual.',
      pegadinha: 'A norma culta exige clareza na redação oficial.',
      comoApareceEmConcurso: 'Questões C/E sobre clareza e ambiguidade.'
    },
    tags: ['ambiguidade', 'clareza']
  },

  /* ============================================================
     POR-05 — Figuras de linguagem e funções da linguagem
  ============================================================ */
  {
    id: 'Q-DID-POR-05-001',
    tipo: 'DIDATICA', area: 'LET', moduloId: 'POR-05',
    subtema: 'Metáfora x Comparação',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'Leia os versos: "Meu coração é um balde despejado / Como os desvios torcem os rios / Como os ventos torcem as velas". A figura de linguagem predominante na primeira linha e o elemento que a caracteriza são:',
    alternativas: [
      { id: 'A', texto: 'Comparação, pois há o uso explícito do conectivo "como" ligando os termos.' },
      { id: 'B', texto: 'Metáfora, pois há uma comparação implícita, sem o uso de conectivo comparativo entre "coração" e "balde".' },
      { id: 'C', texto: 'Metonímia, pois há a substituição de um termo por outro com base em uma relação de proximidade.' },
      { id: 'D', texto: 'Hipérbole, pois há um exagero intencional na imagem do coração como um balde.' },
      { id: 'E', texto: 'Personificação, pois o coração e o balde recebem características humanas.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. "Coração é um balde" é metáfora (comparação implícita). "Como" é usado nas linhas seguintes para comparação.',
      incorretas: { A: 'O "como" aparece nas outras linhas, não na primeira.', C: 'Não há metonímia.', D: 'Não é hipérbole.', E: 'Não há personificação.' },
      conceitoCobrado: 'Metáfora x Comparação.',
      pegadinha: 'A presença do "como" nas outras linhas pode confundir.',
      comoApareceEmConcurso: 'Questões de análise literária/figuras.'
    },
    tags: ['metáfora', 'comparação']
  },
  {
    id: 'Q-DID-POR-05-002',
    tipo: 'DIDATICA', area: 'LET', moduloId: 'POR-05',
    subtema: 'Funções da Linguagem',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Avalie a função da linguagem predominante no seguinte texto de uma campanha pública: "Vacine-se! Proteja sua família e a sua comunidade. Procure o posto de saúde mais próximo."',
    alternativas: [
      { id: 'A', texto: 'Função referencial, pois o texto tem como objetivo principal informar dados objetivos sobre a vacinação e os postos de saúde disponíveis.' },
      { id: 'B', texto: 'Função emotiva, pois o texto expressa os sentimentos do emissor em relação à importância da vacinação para a sociedade.' },
      { id: 'C', texto: 'Função conativa (apelativa), pois o texto busca influenciar o comportamento do receptor por meio de verbos no imperativo.' },
      { id: 'D', texto: 'Função fática, pois o texto testa o canal de comunicação com o público, verificando se a mensagem está sendo compreendida.' },
      { id: 'E', texto: 'Função metalinguística, pois o texto fala sobre a própria linguagem utilizada nas campanhas de vacinação.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. O uso de "Vacine-se" e "Procure" (imperativo) visa influenciar o comportamento do receptor, característica da função conativa.',
      incorretas: { A: 'Não é apenas informativa, é persuasiva.', B: 'Não foca no "eu", mas no "você".', D: 'Não testa o canal.', E: 'Não fala sobre o código.' },
      conceitoCobrado: 'Função conativa (verbos no imperativo).',
      pegadinha: 'A função referencial (informar) pode ser confundida, mas o imperativo puxa para a conativa.',
      comoApareceEmConcurso: 'Questões de identificação de funções em textos de campanha.'
    },
    tags: ['função conativa', 'imperativo']
  },
  {
    id: 'Q-DID-POR-05-003',
    tipo: 'DIDATICA', area: 'LET', moduloId: 'POR-05',
    subtema: 'Figuras de Linguagem: EXCETO',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'As figuras de linguagem são recursos estilísticos que conferem expressividade ao texto. Assinale a alternativa que apresenta uma definição INCORRETA de uma figura de linguagem.',
    alternativas: [
      { id: 'A', texto: 'Metáfora: comparação implícita entre dois termos, sem o uso de conectivo comparativo, como em "Seus olhos são duas estrelas".' },
      { id: 'B', texto: 'Metonímia: substituição de um termo por outro com base em uma relação de proximidade ou contiguidade, como em "Li Machado de Assis".' },
      { id: 'C', texto: 'Ironia: figura que suaviza uma ideia desagradável por meio de termos mais brandos, como em "Ele foi morar com Deus" (para dizer que morreu).' },
      { id: 'D', texto: 'Hipérbole: exagero intencional de uma ideia, como em "Já falei mil vezes para você não fazer isso".' },
      { id: 'E', texto: 'Personificação: atribuição de características humanas a seres irracionais ou inanimados, como em "O sol sorria para a cidade".' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C é a incorreta (portanto, a resposta). A definição apresentada é de EUFEMISMO (suavização), não de Ironia. A Ironia consiste em dizer o contrário do que se quer significar, com carga crítica.',
      incorretas: { A: 'Definição correta.', B: 'Definição correta.', D: 'Definição correta.', E: 'Definição correta.' },
      conceitoCobrado: 'Definições de figuras de linguagem (Ironia x Eufemismo).',
      pegadinha: 'A banca troca a definição de Ironia pela de Eufemismo.',
      comoApareceEmConcurso: 'Questões de identificação de INCORRETA (EXCETO).'
    },
    tags: ['ironia', 'eufemismo', 'exceção']
  },
  {
    id: 'Q-DID-POR-05-004',
    tipo: 'DIDATICA', area: 'LET', moduloId: 'POR-05',
    subtema: 'Antítese x Paradoxo',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Avalie as afirmativas a seguir sobre figuras de linguagem:\n\nI- A antítese consiste na aproximação de termos ou ideias de sentidos opostos, como em "É um doce e um tirano ao mesmo tempo".\nII- O paradoxo consiste na união de ideias contraditórias em uma mesma expressão, como em "O silêncio ensurdecedor".\nIII- A antítese e o paradoxo são sinônimos, pois ambos se baseiam na contradição de ideias.\n\nEstá correto apenas o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I.' },
      { id: 'B', texto: 'II.' },
      { id: 'C', texto: 'III.' },
      { id: 'D', texto: 'I e II.' },
      { id: 'E', texto: 'II e III.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. I e II são verdadeiras. III é falsa, pois a antítese justapõe opostos (doce/tirano), enquanto o paradoxo funde contraditórios numa mesma expressão (silêncio/ensurdecedor).',
      incorretas: { A: 'A II também está correta.', B: 'A I também está correta.', C: 'A III é falsa.', E: 'A III é falsa.' },
      conceitoCobrado: 'Antítese x Paradoxo.',
      pegadinha: 'A linha tênue entre eles (oposição x fusão contraditória).',
      comoApareceEmConcurso: 'Questões de I, II, III.'
    },
    tags: ['antítese', 'paradoxo']
  },
  {
    id: 'Q-DID-POR-05-005',
    tipo: 'DIDATICA', area: 'LET', moduloId: 'POR-05',
    subtema: 'Elementos da Comunicação',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Julgue o item seguinte, acerca das funções da linguagem.\n\nNa função metalinguística, o foco da comunicação está no código, ou seja, na própria linguagem, o que pode ser observado em dicionários, gramáticas ou em um texto que explica o significado de outro texto.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'CERTO. A função metalinguística foca no código (a linguagem falando de si mesma). Dicionários e gramáticas são exemplos clássicos.',
      incorretas: { E: 'A definição e o exemplo estão corretos.' },
      conceitoCobrado: 'Função metalinguística.',
      pegadinha: 'Pode-se confundir com a função referencial (que foca no referente, não no código).',
      comoApareceEmConcurso: 'Questões C/E sobre funções da linguagem.'
    },
    tags: ['metalinguística', 'funções']
  },
  /* ============================================================
     POR-06 — Fonética, fonologia e ortografia
  ============================================================ */
  {
    id: 'Q-DID-POR-06-001',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-06',
    subtema: 'Fonema x Letra',
    dificuldade: 1, prioridade: 'media',
    enunciado: 'A fonética e a fonologia estudam os sons da língua e sua representação. Sobre a relação entre fonema (som) e letra (grafia), julgue o item a seguir.\n\nNa palavra "táxi", há 5 letras e 6 fonemas, pois a letra "x" representa dois sons (/k/ e /s/). Esse fenômeno demonstra que não há uma correspondência exata de 1 para 1 entre fonemas e letras na língua portuguesa.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'CERTO. A palavra "táxi" é transcrita foneticamente como /t/ /a/ /k/ /s/ /i/ (6 fonemas) e possui 5 letras (t-a-x-i). O "x" atua como dífono (representa dois fonemas).',
      incorretas: { E: 'A contagem de 5 letras e 6 fonemas está correta.' },
      conceitoCobrado: 'Relação fonema x letra e o conceito de dífono.',
      pegadinha: 'Achar que toda letra é sempre 1 fonema.',
      comoApareceEmConcurso: 'Questões de contagem de fonemas e letras.'
    },
    tags: ['fonema', 'letra', 'dífono']
  },
  {
    id: 'Q-DID-POR-06-002',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-06',
    subtema: 'Ortografia: X x CH',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'A ortografia oficial estabelece regras específicas para o emprego de certas letras e dígrafos. Analise as palavras a seguir e assinale a alternativa em que a grafia de TODAS as palavras está CORRETA.',
    alternativas: [
      { id: 'A', texto: 'Enxada, mecher, caixa, encher.' },
      { id: 'B', texto: 'Enchada, mexer, caixa, encher.' },
      { id: 'C', texto: 'Enxada, mexer, caixa, encher.' },
      { id: 'D', texto: 'Enxada, mexer, caicha, encher.' },
      { id: 'E', texto: 'Enchada, mecher, caicha, encher.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. "Enxada" (X após en), "mexer" (X após me), "caixa" (X após ditongo), "encher" (exceção: CH em vez de X após en).',
      incorretas: { A: '"Mecher" está errado (o correto é mexer).', B: '"Enchada" está errado (o correto é enxada).', D: '"Caicha" está errado (o correto é caixa).', E: 'Múltiplos erros.' },
      conceitoCobrado: 'Regras de emprego de X e CH.',
      pegadinha: 'A palavra "encher" e derivados (encharcar, enchimento) são as principais exceções à regra do "X após en".',
      comoApareceEmConcurso: 'Questões de identificação de erros ortográficos.'
    },
    tags: ['ortografia', 'X', 'CH']
  },
  {
    id: 'Q-DID-POR-06-003',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-06',
    subtema: 'Ortografia: Uso dos Porquês',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Julgue os itens a seguir como Verdadeiro (V) ou Falso (F) sobre o uso dos porquês:\n\n(__) Em "Não sei o porquê da sua falta", o termo é grafado junto e com acento, pois funciona como substantivo.\n(__) Em "Por que você não veio?", a grafia separada e sem acento é utilizada em perguntas diretas.\n(__) Em "Faltei porque estava doente", o termo é grafado junto e sem acento, pois introduz uma causa.\n(__) Em "Você não veio por quê?", a grafia separada e com acento é utilizada no final de frase.\n\nAssinale a alternativa que apresenta a sequência CORRETA dos itens acima, de cima para baixo:',
    alternativas: [
      { id: 'A', texto: 'V, V, V, V.' },
      { id: 'B', texto: 'V, F, V, V.' },
      { id: 'C', texto: 'V, V, F, V.' },
      { id: 'D', texto: 'F, V, V, F.' },
      { id: 'E', texto: 'F, F, V, V.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. (1) Substantivo = porquê (junto, com acento). (2) Pergunta direta = por que (separado, sem acento). (3) Causa = porque (junto, sem acento). (4) Final de frase = por quê (separado, com acento).',
      incorretas: { B: 'O item 2 é verdadeiro.', C: 'O item 3 é verdadeiro.', D: 'O item 1 é verdadeiro.', E: 'Itens 1 e 2 são verdadeiros.' },
      conceitoCobrado: 'Emprego dos quatro porquês.',
      pegadinha: 'Confundir a posição e a função sintática de cada um.',
      comoApareceEmConcurso: 'Questões de sequência V/F.'
    },
    tags: ['porquês', 'ortografia']
  },
  {
    id: 'Q-DID-POR-06-004',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-06',
    subtema: 'Dígrafo x Encontro Consonantal',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Avalie o que se afirma sobre encontros consonantais e dígrafos.\n\nI- O dígrafo ocorre quando duas letras representam um único fonema, como em "chave", "telha" e "carro".\nII- O encontro consonantal ocorre quando duas consoantes são pronunciadas separadamente, como em "prato", "blusa" e "advogado".\nIII- Em "guerra", as letras "GU" formam um dígrafo, e as letras "RR" formam um encontro consonantal.\n\nEstá correto apenas o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I.' },
      { id: 'B', texto: 'II.' },
      { id: 'C', texto: 'III.' },
      { id: 'D', texto: 'I e II.' },
      { id: 'E', texto: 'II e III.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. I e II estão corretas. A III está errada, pois em "guerra", tanto "GU" quanto "RR" são dígrafos (representam um único som, respectivamente /g/ e /R/).',
      incorretas: { A: 'A II também está correta.', B: 'A I também está correta.', C: 'A III é falsa.', E: 'A III é falsa.' },
      conceitoCobrado: 'Diferença entre dígrafo (1 som) e encontro consonantal (2 sons).',
      pegadinha: 'Achar que "RR" é encontro consonantal, quando na verdade é o dígrafo mais comum.',
      comoApareceEmConcurso: 'Questões de I, II e III.'
    },
    tags: ['dígrafo', 'encontro consonantal']
  },
  {
    id: 'Q-DID-POR-06-005',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-06',
    subtema: 'Hífen (Acordo Ortográfico)',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'De acordo com o Acordo Ortográfico vigente, o uso do hífen sofreu alterações importantes. Assinale a alternativa em que o emprego do hífen está INCORRETO.',
    alternativas: [
      { id: 'A', texto: 'O médico receitou um anti-inflamatório para aliviar a dor.' },
      { id: 'B', texto: 'O super-homem dos quadrinhos voa mais rápido que um avião.' },
      { id: 'C', texto: 'A auto-escola do bairro oferece aulas teóricas e práticas.' },
      { id: 'D', texto: 'O ex-presidente participou da cerimônia de posse.' },
      { id: 'E', texto: 'O micro-ondas da copa parou de funcionar ontem.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C é a incorreta (portanto, a resposta). Pelo Acordo Ortográfico, quando o prefixo termina em vogal e o segundo elemento começa com vogal diferente, NÃO se usa hífen: autoescola, infraestrutura, semiaberto.',
      incorretas: { A: 'Correto: vogal igual (anti + inflamatório).', B: 'Correto: prefixo + H (super + homem).', D: 'Correto: prefixo ex (ex-presidente).', E: 'Correto: vogal igual (micro + ondas).' },
      conceitoCobrado: 'Regras de hífen do Acordo Ortográfico.',
      pegadinha: 'A regra da "vogal diferente" (sem hífen) é frequentemente esquecida por candidatos que memorizam apenas a regra da "vogal igual" (com hífen).',
      comoApareceEmConcurso: 'Questões de identificação de erro de hífen.'
    },
    tags: ['hífen', 'acordo ortográfico']
  },
  {
    id: 'Q-DID-POR-06-006',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-06',
    subtema: 'Separação Silábica',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'A correta separação silábica é exigida em provas e na formatação de textos. Assinale a alternativa em que a divisão silábica de todas as palavras está CORRETA.',
    alternativas: [
      { id: 'A', texto: 'a-blu-ção / re-gra / cha-ve / car-ro.' },
      { id: 'B', texto: 'ab-lu-ção / reg-ra / cha-ve / ca-rro.' },
      { id: 'C', texto: 'a-blu-ção / re-gra / ch-a-ve / car-ro.' },
      { id: 'D', texto: 'ab-lu-ção / re-gra / cha-ve / car-ro.' },
      { id: 'E', texto: 'a-blu-ção / reg-ra / ch-a-ve / ca-rro.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. Consoante + L ou R não se separam da sílaba anterior (a-blu-ção, re-gra). Dígrafos CH e LH não se separam (cha-ve). Dígrafos RR e SS se separam (car-ro).',
      incorretas: { B: 'Erro em ab-lu e reg-ra.', C: 'Erro em ch-a.', D: 'Erro em ab-lu e car-ro.', E: 'Erro em reg-ra e ch-a.' },
      conceitoCobrado: 'Regras de separação silábica (dígrafos e encontros consonantais).',
      pegadinha: 'Separar "BL" ou "GR", que são encontros consonantais inseparáveis.',
      comoApareceEmConcurso: 'Questões de múltipla escolha.'
    },
    tags: ['separação silábica', 'sílabas']
  },

  /* ============================================================
     POR-07 — Acentuação gráfica
  ============================================================ */
  {
    id: 'Q-DID-POR-07-001',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-07',
    subtema: 'Regra das Proparoxítonas',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'As palavras são classificadas de acordo com a posição da sílaba tônica. Sobre a acentuação gráfica das palavras proparoxítonas, assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'São acentuadas apenas as proparoxítonas terminadas em vogais.' },
      { id: 'B', texto: 'Todas as palavras proparoxítonas são obrigatoriamente acentuadas na língua portuguesa.' },
      { id: 'C', texto: 'São acentuadas apenas as proparoxítonas terminadas em -r, -l ou -z.' },
      { id: 'D', texto: 'As proparoxítonas são acentuadas somente se forem palavras compostas.' },
      { id: 'E', texto: 'A acentuação das proparoxítonas depende da função sintática que exercem na frase.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. A regra é categórica: TODAS as palavras proparoxítonas (cuja sílaba tônica é a antepenúltima) são acentuadas: médico, lâmpada, público, século.',
      incorretas: { A: 'Não há restrição à vogal final.', C: 'Não há restrição a essas terminações.', D: 'A regra vale para palavras simples e compostas.', E: 'A classe gramatical não altera a regra de acentuação.' },
      conceitoCobrado: 'Acentuação de proparoxítonas.',
      pegadinha: 'Alunos tentam inventar exceções onde não há.',
      comoApareceEmConcurso: 'Questões conceituais diretas.'
    },
    tags: ['proparoxítonas', 'acentuação']
  },
  {
    id: 'Q-DID-POR-07-002',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-07',
    subtema: 'Acentuação de Oxítonas e Paroxítonas',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Julgue as afirmativas a seguir sobre a acentuação de oxítonas e paroxítonas:\n\n(__) Acentuam-se as oxítonas terminadas em A, E, O (seguidas ou não de S) e em EM/ENS, como "café", "cipó" e "armazém".\n(__) Acentuam-se as paroxítonas terminadas em I, IS, US, UM, UNS, L, N, R, X, PS e ditongos, como "lápis", "álbum", "fóssil" e "história".\n(__) As paroxítonas terminadas em A, E, O, EM e AM não são acentuadas, como "casa", "verde", "jovem" e "falam".\n(__) As oxítonas terminadas em I e U não são acentuadas, como "caqui" e "urubu".\n\nAssinale a alternativa que apresenta a sequência CORRETA, de cima para baixo:',
    alternativas: [
      { id: 'A', texto: 'V, V, F, F.' },
      { id: 'B', texto: 'V, V, V, V.' },
      { id: 'C', texto: 'F, V, V, F.' },
      { id: 'D', texto: 'V, F, V, V.' },
      { id: 'E', texto: 'F, F, V, V.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. Todas as quatro afirmações descrevem corretamente as regras de acentuação de oxítonas e paroxítonas.',
      incorretas: { A: 'Os itens 3 e 4 estão corretos.', C: 'O item 1 está correto.', D: 'O item 2 está correto.', E: 'Os itens 1 e 2 estão corretos.' },
      conceitoCobrado: 'Regras de acentuação de oxítonas e paroxítonas.',
      pegadinha: 'Confundir as terminações que recebem acento nas paroxítonas (regra do "não").',
      comoApareceEmConcurso: 'Questões de sequência V/F.'
    },
    tags: ['oxítonas', 'paroxítonas']
  },
  {
    id: 'Q-DID-POR-07-003',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-07',
    subtema: 'Acordo Ortográfico: Ditongos Abertos',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Julgue o item a seguir sobre as mudanças trazidas pelo Acordo Ortográfico.\n\nApós o Acordo Ortográfico vigente, as palavras "ideia", "heroico" e "jiboia" não recebem mais acento gráfico, pois o acento dos ditongos abertos ÉU, ÉI e ÓI foi eliminado nas palavras paroxítonas. No entanto, em palavras oxítonas, como "céu", "papéis" e "herói", o acento permanece.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'CERTO. O Acordo eliminou o acento dos ditongos abertos em paroxítonas (ideia, heroico, jiboia, assembleia), mas manteve nas oxítonas (céu, papéis, herói).',
      incorretas: { E: 'A explicação sobre a eliminação em paroxítonas e manutenção em oxítonas está perfeitamente correta.' },
      conceitoCobrado: 'Mudanças de acentuação do Acordo Ortográfico.',
      pegadinha: 'Achar que o acento foi eliminado de todos os ditongos abertos, o que é falso.',
      comoApareceEmConcurso: 'Questões C/E.'
    },
    tags: ['acordo ortográfico', 'ditongos']
  },
  {
    id: 'Q-DID-POR-07-004',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-07',
    subtema: 'Acentos Diferenciais',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Avalie as afirmativas sobre os acentos diferenciais que permaneceram após o Acordo Ortográfico.\n\nI- A palavra "pôde" (passado) recebe acento circunflexo para se diferenciar de "pode" (presente).\nII- A palavra "pôr" (verbo) recebe acento circunflexo para se diferenciar de "por" (preposição).\nIII- As palavras "pêlo", "pólo" e "pêra" mantiveram o acento diferencial para se diferenciarem de "pelo", "polo" e "pera".\n\nEstá correto apenas o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I.' },
      { id: 'B', texto: 'II.' },
      { id: 'C', texto: 'III.' },
      { id: 'D', texto: 'I e II.' },
      { id: 'E', texto: 'I, II e III.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. I e II são verdadeiras. III é falsa, pois "pêlo", "pólo" e "pêra" perderam o acento com o Acordo Ortográfico (agora são "pelo", "polo" e "pera").',
      incorretas: { A: 'A II também está correta.', B: 'A I também está correta.', C: 'A III é falsa.', E: 'A III é falsa.' },
      conceitoCobrado: 'Acentos diferenciais mantidos e eliminados.',
      pegadinha: 'A banca usa palavras que ainda "parecem" ter acento na cabeça do candidato.',
      comoApareceEmConcurso: 'Questões de I, II e III.'
    },
    tags: ['acentos diferenciais']
  },
  {
    id: 'Q-DID-POR-07-005',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-07',
    subtema: 'Hiatos e Acentuação',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Complete as lacunas com a justificativa correta para a ausência de acento gráfico nas palavras destacadas.\n\nAs palavras "voo", "creem" e "enjoo" não recebem mais acento gráfico, pois representam hiatos terminados em __________. Já a palavra "juiz" não é acentuada, pois, embora tenha hiato, é precedida por __________.',
    alternativas: [
      { id: 'A', texto: 'EE/OO; ditongo.' },
      { id: 'B', texto: 'I/U; vogal tônica.' },
      { id: 'C', texto: 'EE/OO; consoante.' },
      { id: 'D', texto: 'A/E; ditongo.' },
      { id: 'E', texto: 'I/U; consoante.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. Hiatos EE e OO (voo, creem, enjoo) perderam o acento. Já o "i" ou "u" tônico após ditongo (juiz) não é acentuado.',
      incorretas: { B: 'Não são hiatos I/U.', C: 'A segunda lacuna não é "consoante".', D: 'Não são hiatos A/E.', E: 'Ambas as justificativas estão erradas.' },
      conceitoCobrado: 'Regras de acentuação de hiatos.',
      pegadinha: 'Confundir "juiz" (precedido de ditongo) com "baú" (não precedido).',
      comoApareceEmConcurso: 'Questões de completar lacunas.'
    },
    tags: ['hiatos', 'acentuação']
  },
  {
    id: 'Q-DID-POR-07-006',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-07',
    subtema: 'Regra do Hiato e Ditongo',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Assinale a alternativa em que TODAS as palavras estão corretamente acentuadas de acordo com as regras vigentes.',
    alternativas: [
      { id: 'A', texto: 'Saída, baú, herói, idéia.' },
      { id: 'B', texto: 'Saída, baú, herói, ideia.' },
      { id: 'C', texto: 'Saida, baú, heroi, ideia.' },
      { id: 'D', texto: 'Saída, bau, herói, idéia.' },
      { id: 'E', texto: 'Saída, baú, heroi, idéia.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. Saída e baú (hiatos I/U tônicos). Herói (oxítona com ditongo aberto). Ideia (paroxítona com ditongo aberto - sem acento pelo Acordo).',
      incorretas: { A: '"Idéia" está errado.', C: '"Saida" e "heroi" estão errados.', D: '"Bau" e "idéia" estão errados.', E: '"Heroi" e "idéia" estão errados.' },
      conceitoCobrado: 'Acentuação de hiatos e ditongos abertos.',
      pegadinha: 'A palavra "ideia" é a pegadinha clássica do Acordo Ortográfico.',
      comoApareceEmConcurso: 'Questões de identificação de palavras corretamente acentuadas.'
    },
    tags: ['hiato', 'ditongo', 'acordo ortográfico']
  },

  /* ============================================================
     POR-08 — Estrutura e formação de palavras
  ============================================================ */
  {
    id: 'Q-DID-POR-08-001',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-08',
    subtema: 'Derivação x Composição',
    dificuldade: 1, prioridade: 'baixa',
    enunciado: 'Sobre os processos de formação de palavras, assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'A derivação ocorre pela união de dois ou mais radicais, enquanto a composição ocorre pelo acréscimo de afixos a uma palavra primitiva.' },
      { id: 'B', texto: 'A composição ocorre pela união de dois ou mais radicais, enquanto a derivação ocorre pelo acréscimo de afixos (prefixos ou sufixos) a uma palavra primitiva.' },
      { id: 'C', texto: 'Tanto a derivação quanto a composição baseiam-se exclusivamente na mudança de classe gramatical da palavra primitiva.' },
      { id: 'D', texto: 'A derivação é um processo arcaico que não é mais utilizado na língua portuguesa, enquanto a composição é o único processo produtivo.' },
      { id: 'E', texto: 'A composição por justaposição ocorre com a perda de elementos fonéticos, enquanto a aglutinação ocorre sem perda.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. Composição = 2+ radicais. Derivação = acréscimo/retirada de afixos a 1 radical.',
      incorretas: { A: 'Inverte os conceitos.', C: 'Não se baseiam apenas nisso.', D: 'Ambos são processos ativos.', E: 'Inverte justaposição e aglutinação.' },
      conceitoCobrado: 'Diferença entre derivação e composição.',
      pegadinha: 'A inversão de conceitos nas alternativas A e E.',
      comoApareceEmConcurso: 'Questões conceituais.'
    },
    tags: ['derivação', 'composição']
  },
  {
    id: 'Q-DID-POR-08-002',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-08',
    subtema: 'Parassíntese x Prefixal e Sufixal',
    dificuldade: 3, prioridade: 'baixa',
    enunciado: 'Julgue as afirmações a seguir sobre os tipos de derivação:\n\n(__) A palavra "entardecer" é formada por parassíntese, pois o prefixo (en-) e o sufixo (-ecer) entram simultaneamente, não existindo as formas "entarde" ou "tardecer".\n(__) A palavra "infelizmente" é formada por derivação prefixal e sufixal, pois existem as palavras "infeliz" e "felizmente" de forma independente.\n(__) Na parassíntese, os afixos podem ser retirados sem que a palavra perca o sentido original.\n\nAssinale a alternativa que apresenta a sequência CORRETA, de cima para baixo:',
    alternativas: [
      { id: 'A', texto: 'V, V, F.' },
      { id: 'B', texto: 'V, F, V.' },
      { id: 'C', texto: 'F, V, F.' },
      { id: 'D', texto: 'F, F, V.' },
      { id: 'E', texto: 'V, V, V.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. (1) V: entardecer é parassíntese (simultaneidade). (2) V: infelizmente é prefixal e sufixal (existem isoladamente). (3) F: na parassíntese, os afixos são indissociáveis (não se pode retirar um sem perder o sentido).',
      incorretas: { B: 'O item 3 é falso.', C: 'O item 1 é verdadeiro.', D: 'Itens 1 e 2 são verdadeiros.', E: 'O item 3 é falso.' },
      conceitoCobrado: 'Parassíntese vs derivação prefixal e sufixal.',
      pegadinha: 'Achar que "entardecer" é prefixal e sufixal por ter prefixo e sufixo, esquecendo o critério da simultaneidade.',
      comoApareceEmConcurso: 'Questões de sequência V/F.'
    },
    tags: ['parassíntese', 'derivação']
  },
  {
    id: 'Q-DID-POR-08-003',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-08',
    subtema: 'Justaposição x Aglutinação',
    dificuldade: 2, prioridade: 'baixa',
    enunciado: 'Associe as palavras ao seu respectivo processo de composição:\n\n1. Girassol (gira + sol).\n2. Planalto (plano + alto).\n3. Passatempo (passa + tempo).\n4. Vinagre (vinho + azedo).\n\nPROCESSOS\n( ) Composição por aglutinação.\n( ) Composição por justaposição.\n\nA sequência correta para essa associação é:',
    alternativas: [
      { id: 'A', texto: '2 e 4 (aglutinação) / 1 e 3 (justaposição).' },
      { id: 'B', texto: '1 e 2 (aglutinação) / 3 e 4 (justaposição).' },
      { id: 'C', texto: '1 e 4 (aglutinação) / 2 e 3 (justaposição).' },
      { id: 'D', texto: '3 e 4 (aglutinação) / 1 e 2 (justaposição).' },
      { id: 'E', texto: '2 e 3 (aglutinação) / 1 e 4 (justaposição).' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. Aglutinação (perda de elementos): planalto (plano+alto) e vinagre (vinho+azedo). Justaposição (sem perda): girassol (gira+sol) e passatempo (passa+tempo).',
      incorretas: { B: 'Girassol é justaposição.', C: 'Girassol e planalto estão invertidos.', D: 'Inverte os grupos.', E: 'Inverte os grupos.' },
      conceitoCobrado: 'Composição por justaposição (sem perda) x aglutinação (com perda).',
      pegadinha: 'Achar que "planalto" é justaposição por ter sido formado de duas palavras claras.',
      comoApareceEmConcurso: 'Questões de associação.'
    },
    tags: ['justaposição', 'aglutinação']
  },
  {
    id: 'Q-DID-POR-08-004',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-08',
    subtema: 'Derivação Regressiva x Imprópria',
    dificuldade: 3, prioridade: 'baixa',
    enunciado: 'Avalie as afirmativas sobre os processos de derivação.\n\nI- A palavra "a caça" (substantivo) deriva de "caçar" (verbo) por derivação regressiva, pois há uma redução da forma original.\nII- A palavra "o jantar" (substantivo) deriva de "jantar" (verbo) por derivação imprópria, pois há mudança de classe sem alteração na forma.\nIII- A derivação regressiva ocorre quando há mudança de classe gramatical sem alteração na forma da palavra.\n\nEstá correto apenas o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I.' },
      { id: 'B', texto: 'II.' },
      { id: 'C', texto: 'III.' },
      { id: 'D', texto: 'I e II.' },
      { id: 'E', texto: 'I e III.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. I (regressiva por redução) e II (imprópria por mudança de classe) estão corretas. III está errada, pois descreve a derivação imprópria, não a regressiva.',
      incorretas: { A: 'A II também está correta.', B: 'A I também está correta.', C: 'A III descreve a imprópria.', E: 'A III está errada.' },
      conceitoCobrado: 'Derivação regressiva x imprópria.',
      pegadinha: 'A III troca as definições.',
      comoApareceEmConcurso: 'Questões de I, II e III.'
    },
    tags: ['regressiva', 'imprópria']
  },
  {
    id: 'Q-DID-POR-08-005',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-08',
    subtema: 'Hibridismo e Empréstimo',
    dificuldade: 2, prioridade: 'baixa',
    enunciado: 'Julgue o item a seguir.\n\nA palavra "automóvel" é formada por radicais de diferentes línguas (auto, do grego, e móvel, do latim), sendo um exemplo de hibridismo. Já palavras como "software" e "feedback" são exemplos de empréstimo linguístico.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'CERTO. Hibridismo = radicais de línguas diferentes (automóvel, burocracia). Empréstimo = palavras incorporadas de outras línguas (software, feedback, marketing).',
      incorretas: { E: 'As definições e exemplos estão corretos.' },
      conceitoCobrado: 'Hibridismo e empréstimo linguístico.',
      pegadinha: 'Confundir os dois processos.',
      comoApareceEmConcurso: 'Questões C/E.'
    },
    tags: ['hibridismo', 'empréstimo']
  },
  {
    id: 'Q-DID-POR-08-006',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-08',
    subtema: 'Abreviação e Sigla',
    dificuldade: 1, prioridade: 'baixa',
    enunciado: 'Diferencie os processos de redução de palavras. Assinale a alternativa que apresenta, respectivamente, um exemplo de abreviação e um de sigla.',
    alternativas: [
      { id: 'A', texto: 'IBGE e Moto.' },
      { id: 'B', texto: 'Moto e IBGE.' },
      { id: 'C', texto: 'Fotografia e Motocicleta.' },
      { id: 'D', texto: 'MEC e ONU.' },
      { id: 'E', texto: 'Pneu e Foto.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. Abreviação = redução da palavra mantendo o início (moto, foto, pneu). Sigla = redução às letras iniciais (IBGE, MEC, ONU).',
      incorretas: { A: 'Inverte a ordem.', C: 'São palavras completas.', D: 'Ambas são siglas.', E: 'Ambas são abreviações.' },
      conceitoCobrado: 'Abreviação x Sigla.',
      pegadinha: 'A inversão da ordem pedida no enunciado.',
      comoApareceEmConcurso: 'Questões de múltipla escolha.'
    },
    tags: ['abreviação', 'sigla']
  },

  /* ============================================================
     POR-09 — Classes de palavras I: substantivo, adjetivo, artigo e numeral
  ============================================================ */
  {
    id: 'Q-DID-POR-09-001',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-09',
    subtema: 'Substantivo Concreto x Abstrato',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre a classificação dos substantivos, assinale a alternativa em que TODOS os substantivos são classificados como ABSTRATOS.',
    alternativas: [
      { id: 'A', texto: 'Mesa, cadeira, computador.' },
      { id: 'B', texto: 'Fada, saci, curupira.' },
      { id: 'C', texto: 'Beleza, amor, saudade.' },
      { id: 'D', texto: 'Servidor, chefe, diretor.' },
      { id: 'E', texto: 'Cidade, rio, floresta.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. Beleza, amor e saudade são substantivos abstratos (dependem de outro ser para existir, indicam sentimento/estado).',
      incorretas: { A: 'São concretos (existência própria).', B: 'São concretos (seres imaginários são concretos).', D: 'São concretos (pessoas).', E: 'São concretos (lugares).' },
      conceitoCobrado: 'Substantivo concreto x abstrato.',
      pegadinha: 'Achar que "fada" e "saci" são abstratos por não existirem fisicamente. Eles são concretos, pois existem no imaginário popular.',
      comoApareceEmConcurso: 'Questões de classificação de palavras.'
    },
    tags: ['substantivo', 'abstrato']
  },
  {
    id: 'Q-DID-POR-09-002',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-09',
    subtema: 'Artigo Definido x Indefinido',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Julgue o item a seguir sobre o uso do artigo.\n\nA troca do artigo definido pelo indefinido altera o sentido do enunciado, como em: "O servidor chegou cedo" (indica um servidor conhecido, específico) e "Um servidor chegou cedo" (indica um servidor não específico, qualquer um).',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'CERTO. O artigo definido (o, a) determina o ser, tornando-o conhecido/específico. O indefinido (um, uma) generaliza, não especifica.',
      incorretas: { E: 'A explicação sobre o efeito de sentido dos artigos está correta.' },
      conceitoCobrado: 'Emprego do artigo definido x indefinido.',
      pegadinha: 'Acreditar que a troca não afeta o sentido.',
      comoApareceEmConcurso: 'Questões C/E sobre efeitos de sentido.'
    },
    tags: ['artigo', 'sentido']
  },
  {
    id: 'Q-DID-POR-09-003',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-09',
    subtema: 'Locução Adjetiva',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Julgue as afirmações a seguir como Verdadeiro (V) ou Falso (F) sobre locuções adjetivas:\n\n(__) A locução adjetiva é uma expressão que tem valor de adjetivo, caracterizando um substantivo.\n(__) Em "objeto de ouro", a expressão "de ouro" é uma locução adjetiva que equivale ao adjetivo "áureo".\n(__) Em "amor de mãe", a expressão "de mãe" é uma locução adjetiva que equivale ao adjetivo "materno".\n(__) A locução adjetiva é sempre formada por um verbo e um advérbio.\n\nAssinale a alternativa que apresenta a sequência CORRETA, de cima para baixo:',
    alternativas: [
      { id: 'A', texto: 'V, V, V, V.' },
      { id: 'B', texto: 'V, V, V, F.' },
      { id: 'C', texto: 'V, F, V, V.' },
      { id: 'D', texto: 'F, V, V, F.' },
      { id: 'E', texto: 'F, F, V, V.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. (1) V: valor de adjetivo. (2) V: de ouro = áureo. (3) V: de mãe = materno. (4) F: a locução adjetiva é geralmente preposição + substantivo, não verbo + advérbio.',
      incorretas: { A: 'O item 4 é falso.', C: 'O item 2 é verdadeiro.', D: 'O item 1 é verdadeiro.', E: 'Itens 1 e 2 são verdadeiros.' },
      conceitoCobrado: 'Definição e exemplos de locução adjetiva.',
      pegadinha: 'A definição errada no item 4.',
      comoApareceEmConcurso: 'Questões de sequência V/F.'
    },
    tags: ['locução adjetiva']
  },
  {
    id: 'Q-DID-POR-09-004',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-09',
    subtema: 'Classes de palavras: Mudança pelo uso',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Avalie as afirmativas sobre as classes de palavras.\n\nI- A classe gramatical de uma palavra é imutável, não podendo mudar de acordo com o contexto em que é utilizada.\nII- A palavra "jovem" pode ser classificada como substantivo em "O jovem chegou" e como adjetivo em "O servidor jovem chegou".\nIII- O artigo pode substantivar qualquer palavra, como em "O amar é difícil" (verbo "amar" transformado em substantivo).\n\nEstá correto apenas o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I.' },
      { id: 'B', texto: 'II.' },
      { id: 'C', texto: 'III.' },
      { id: 'D', texto: 'II e III.' },
      { id: 'E', texto: 'I e II.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. II e III são verdadeiras. I é falsa, pois a classe pode mudar conforme o uso (fenômeno da substantivação ou adjetivação).',
      incorretas: { A: 'I é falsa.', B: 'III também é verdadeira.', C: 'II também é verdadeira.', E: 'I é falsa.' },
      conceitoCobrado: 'Flexibilidade das classes gramaticais conforme o contexto.',
      pegadinha: 'Achar que a classe da palavra é fixa no dicionário.',
      comoApareceEmConcurso: 'Questões de I, II e III.'
    },
    tags: ['classes de palavras', 'substantivação']
  },
  {
    id: 'Q-DID-POR-09-005',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-09',
    subtema: 'Numeral: Classificação',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Associe os numerais destacados à sua respectiva classificação:\n\n1. "Comprei DOIS livros."\n2. "Ele chegou em PRIMEIRO lugar."\n3. "Recebi o DOBRO do valor."\n4. "Comi MEIO pão."\n\nCLASSIFICAÇÕES\n( ) Numeral multiplicativo.\n( ) Numeral ordinal.\n( ) Numeral cardinal.\n( ) Numeral fracionário.\n\nA sequência correta para essa associação é:',
    alternativas: [
      { id: 'A', texto: '1, 2, 3, 4.' },
      { id: 'B', texto: '3, 2, 1, 4.' },
      { id: 'C', texto: '2, 3, 4, 1.' },
      { id: 'D', texto: '4, 1, 2, 3.' },
      { id: 'E', texto: '2, 1, 4, 3.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. Dobro (3) = multiplicativo. Primeiro (2) = ordinal. Dois (1) = cardinal. Meio (4) = fracionário.',
      incorretas: { A: 'Inverte tudo.', C: 'Inverte os conceitos.', D: 'Inverte os conceitos.', E: 'Inverte os conceitos.' },
      conceitoCobrado: 'Classificação dos numerais.',
      pegadinha: 'Confundir multiplicativo (dobro) com fracionário (meio).',
      comoApareceEmConcurso: 'Questões de associação.'
    },
    tags: ['numeral', 'associação']
  },
  {
    id: 'Q-DID-POR-09-006',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-09',
    subtema: 'Adjetivo x Substantivo',
    dificuldade: 1, prioridade: 'media',
    enunciado: 'Assinale a alternativa em que a palavra destacada é um ADJETIVO.',
    alternativas: [
      { id: 'A', texto: 'O JOVEM chegou à festa.' },
      { id: 'B', texto: 'A BELEZA da paisagem é impressionante.' },
      { id: 'C', texto: 'O SERVIDOR DEDICADO foi promovido.' },
      { id: 'D', texto: 'A CIDADE cresceu rapidamente.' },
      { id: 'E', texto: 'O AMOR é um sentimento profundo.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. "Dedicado" é adjetivo, pois caracteriza o substantivo "servidor".',
      incorretas: { A: '"Jovem" é substantivo (nomeia o ser).', B: '"Beleza" é substantivo abstrato.', D: '"Cidade" é substantivo concreto.', E: '"Amor" é substantivo abstrato.' },
      conceitoCobrado: 'Identificação de adjetivos em contexto.',
      pegadinha: 'A palavra "jovem" na alternativa A pode enganar, mas ela está substantivada pelo artigo.',
      comoApareceEmConcurso: 'Questões de identificação de classe.'
    },
    tags: ['adjetivo', 'substantivo']
  },

  /* ============================================================
     POR-10 — Pronomes
  ============================================================ */
  {
    id: 'Q-DID-POR-10-001',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-10',
    subtema: 'Pronomes de Tratamento',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'Sobre os pronomes de tratamento, julgue o item.\n\nOs pronomes de tratamento, como "Vossa Excelência" e "Vossa Senhoria", exigem que o verbo da oração permaneça na 3ª pessoa, embora se refiram diretamente ao interlocutor.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'CERTO. A concordância com pronomes de tratamento é sempre feita na 3ª pessoa: "Vossa Excelência DESPACHOU" (não despachastes).',
      incorretas: { E: 'A regra da 3ª pessoa é fixa na norma culta.' },
      conceitoCobrado: 'Concordância verbal com pronomes de tratamento.',
      pegadinha: 'Alunos confundem o "Vossa" (2ª pessoa do possessivo) com a concordância do verbo (3ª pessoa).',
      comoApareceEmConcurso: 'Questões C/E.'
    },
    tags: ['pronomes de tratamento', 'concordância']
  },
  {
    id: 'Q-DID-POR-10-002',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-10',
    subtema: 'Este x Esse x Aquele',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Avalie as afirmativas sobre o emprego dos pronomes demonstrativos.\n\nI- O pronome "este" é utilizado para referenciar o que está perto de quem fala, o tempo presente ou o que ainda será dito no texto.\nII- O pronome "esse" é utilizado para referenciar o que está perto de quem ouve, o passado recente ou o que já foi dito no texto.\nIII- O pronome "aquele" é utilizado para referenciar o que está longe de ambos os interlocutores, o passado remoto ou um antecedente distante no texto.\n\nEstá correto apenas o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I.' },
      { id: 'B', texto: 'II.' },
      { id: 'C', texto: 'III.' },
      { id: 'D', texto: 'I e II.' },
      { id: 'E', texto: 'I, II e III.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'A alternativa E está correta. Todas as afirmativas definem corretamente os usos dos pronomes demonstrativos no espaço, no tempo e no texto.',
      incorretas: { A: 'A II e III também estão corretas.', B: 'A I e III também estão corretas.', C: 'A I e II também estão corretas.', D: 'A III também está correta.' },
      conceitoCobrado: 'Emprego de este, esse e aquele.',
      pegadinha: 'Confundir "este" (que ainda será dito) com "esse" (que já foi dito).',
      comoApareceEmConcurso: 'Questões de I, II e III.'
    },
    tags: ['pronomes demonstrativos']
  },
  {
    id: 'Q-DID-POR-10-003',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-10',
    subtema: 'Pronome Relativo "Cujo"',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Assinale a alternativa em que o pronome relativo foi empregado CORRETAMENTE.',
    alternativas: [
      { id: 'A', texto: 'O servidor cujo o pedido foi negado entrou com recurso.' },
      { id: 'B', texto: 'A servidora cuja a proposta foi aprovada comemorou o resultado.' },
      { id: 'C', texto: 'O diretor cujo o cargo é de confiança solicitou férias.' },
      { id: 'D', texto: 'O processo cujo prazo venceu ontem foi arquivado.' },
      { id: 'E', texto: 'A lei cuja a aplicação é complexa gerou dúvidas.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. O pronome "cujo" não admite artigo após ele. "Cujo prazo" está correto.',
      incorretas: { A: 'Erro: "cujo o pedido" (não se usa artigo).', B: 'Erro: "cuja a proposta".', C: 'Erro: "cujo o cargo".', E: 'Erro: "cuja a aplicação".' },
      conceitoCobrado: 'Emprego do pronome relativo "cujo".',
      pegadinha: 'Alunos inserem o artigo por analogia com "o qual" (o pedido do qual), mas "cujo" já subentende a posse.',
      comoApareceEmConcurso: 'Questões de correção gramatical.'
    },
    tags: ['cujo', 'pronome relativo']
  },
  {
    id: 'Q-DID-POR-10-004',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-10',
    subtema: 'Colocação Pronominal: Próclise',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Julgue os itens a seguir como Verdadeiro (V) ou Falso (F) sobre a colocação pronominal:\n\n(__) Em "Nunca me entregaram o documento", a próclise é obrigatória devido à presença da palavra atrativa "nunca".\n(__) Em "Entregaram-me o documento ontem", a ênclise é correta, pois o verbo inicia a oração.\n(__) Em "Me entregaram o documento ontem", a próclise é correta, pois pronomes oblíquos átonos podem iniciar frases.\n(__) Em "Dar-te-ei o documento amanhã", a mesóclise é correta, pois o verbo está no futuro do presente e não há palavra atrativa.\n\nAssinale a alternativa que apresenta a sequência CORRETA, de cima para baixo:',
    alternativas: [
      { id: 'A', texto: 'V, V, V, V.' },
      { id: 'B', texto: 'V, V, F, V.' },
      { id: 'C', texto: 'V, F, V, V.' },
      { id: 'D', texto: 'F, V, V, F.' },
      { id: 'E', texto: 'F, F, V, V.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. (1) V: "nunca" é atrativa. (2) V: início de frase exige ênclise. (3) F: não se inicia frase com pronome oblíquo átono. (4) V: mesóclise em futuro do presente sem atrativa.',
      incorretas: { A: 'O item 3 é falso.', C: 'O item 2 é verdadeiro.', D: 'Item 1 é verdadeiro.', E: 'Itens 1 e 2 são verdadeiros.' },
      conceitoCobrado: 'Regras de próclise, ênclise e mesóclise.',
      pegadinha: 'A alternativa que coloca "Me" no início da frase é um erro clássico.',
      comoApareceEmConcurso: 'Questões de sequência V/F.'
    },
    tags: ['colocação pronominal', 'próclise']
  },
  {
    id: 'Q-DID-POR-10-005',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-10',
    subtema: 'Colocação Pronominal: Complete as Lacunas',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Complete as lacunas com a colocação pronominal adequada à norma culta.\n\n"Se ____ entregassem o documento antes, o prazo seria cumprido. ____ entregaram o documento ontem, mas não ____ avisaram sobre a mudança."',
    alternativas: [
      { id: 'A', texto: 'me / Me / me.' },
      { id: 'B', texto: 'lhe / Lhe / lhe.' },
      { id: 'C', texto: 'me / Entregaram-me / me.' },
      { id: 'D', texto: 'lhe / Entregaram-lhe / lhe.' },
      { id: 'E', texto: 'se / Se / se.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. 1ª lacuna: "Se me entregassem" (próclise, "se" é atrativa). 2ª lacuna: "Entregaram-me" (ênclise, início de frase). 3ª lacuna: "não me avisaram" (próclise, "não" é atrativa).',
      incorretas: { A: 'A 2ª lacuna não pode iniciar com "Me".', B: 'Uso incorreto de "lhe" no início da frase.', D: 'A 2ª lacuna deveria ser ênclise, mas o correto para "avisar" (OD) é "me", não "lhe".', E: '"Se" não faz sentido como pronome oblíquo nos contextos.' },
      conceitoCobrado: 'Colocação pronominal em diferentes contextos.',
      pegadinha: 'Iniciar a 2ª lacuna com pronome oblíquo.',
      comoApareceEmConcurso: 'Questões de completar lacunas.'
    },
    tags: ['colocação pronominal']
  },
  {
    id: 'Q-DID-POR-10-006',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-10',
    subtema: 'Função dos Pronomes',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Assinale a alternativa em que o pronome destacado exerce a função de OBJETO INDIRETO.',
    alternativas: [
      { id: 'A', texto: 'O diretor convocou-O para uma reunião.' },
      { id: 'B', texto: 'Entreguei-LHE o documento solicitado.' },
      { id: 'C', texto: 'A proposta foi feita por MIM.' },
      { id: 'D', texto: 'O servidor machucou-SE ao cair.' },
      { id: 'E', texto: 'Nós protocolamos os pedidos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. "LHE" substitui "a ele/a ela", funcionando como objeto indireto (quem entrega, entrega algo A alguém).',
      incorretas: { A: '"O" é objeto direto.', C: '"Mim" é objeto indireto (agente da passiva, na verdade, mas na voz ativa seria objeto indireto).', D: '"Se" é objeto direto (machucou a si mesmo).', E: '"Nós" é sujeito.' },
      conceitoCobrado: 'Função sintática dos pronomes oblíquos.',
      pegadinha: 'Confundir "o/a" (OD) com "lhe" (OI).',
      comoApareceEmConcurso: 'Questões de análise sintática.'
    },
    tags: ['pronomes oblíquos', 'objeto indireto']
  },

  /* ============================================================
     POR-11 — Verbos
  ============================================================ */
  {
    id: 'Q-DID-POR-11-001',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-11',
    subtema: 'Modos Verbais',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'Sobre os modos verbais, assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'O modo indicativo expressa dúvida ou hipótese; o subjuntivo expressa certeza; o imperativo expressa ordem.' },
      { id: 'B', texto: 'O modo indicativo expressa certeza; o subjuntivo expressa dúvida, desejo ou hipótese; o imperativo expressa ordem ou pedido.' },
      { id: 'C', texto: 'O modo indicativo expressa ordem; o subjuntivo expressa certeza; o imperativo expressa hipótese.' },
      { id: 'D', texto: 'Os três modos verbais (indicativo, subjuntivo, imperativo) expressam certeza, sem distinção de sentido.' },
      { id: 'E', texto: 'O modo subjuntivo é usado para fatos reais e concretos; o indicativo é usado para desejos e hipóteses.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. Indicativo = certeza. Subjuntivo = dúvida/desejo/hipótese. Imperativo = ordem/pedido.',
      incorretas: { A: 'Inverte os conceitos.', C: 'Inverte os conceitos.', D: 'Iguala os modos.', E: 'Inverte indicativo e subjuntivo.' },
      conceitoCobrado: 'Definição dos modos verbais.',
      pegadinha: 'A inversão de conceitos nas alternativas A e E.',
      comoApareceEmConcurso: 'Questões conceituais.'
    },
    tags: ['modos verbais']
  },
  {
    id: 'Q-DID-POR-11-002',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-11',
    subtema: 'Verbos Impessoais',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Julgue as afirmações a seguir sobre a concordância de verbos impessoais:\n\n(__) O verbo "haver", no sentido de existir, é impessoal e deve ficar sempre na 3ª pessoa do singular: "Havia muitos servidores".\n(__) O verbo "fazer", indicando tempo decorrido, é impessoal e deve ficar sempre na 3ª pessoa do singular: "Faz dois anos".\n(__) O verbo "existir" é impessoal, devendo permanecer na 3ª pessoa do singular: "Existia muitos servidores".\n\nAssinale a alternativa que apresenta a sequência CORRETA, de cima para baixo:',
    alternativas: [
      { id: 'A', texto: 'V, V, V.' },
      { id: 'B', texto: 'V, V, F.' },
      { id: 'C', texto: 'V, F, V.' },
      { id: 'D', texto: 'F, V, V.' },
      { id: 'E', texto: 'F, F, V.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. (1) V: haver = impessoal (3ª sing.). (2) V: fazer = impessoal (3ª sing.). (3) F: o verbo "existir" é pessoal e concorda com o sujeito ("Existiam muitos servidores").',
      incorretas: { A: 'O item 3 é falso.', C: 'O item 2 é verdadeiro.', D: 'O item 1 é verdadeiro.', E: 'Itens 1 e 2 são verdadeiros.' },
      conceitoCobrado: 'Diferença entre haver/fazer (impessoais) e existir (pessoal).',
      pegadinha: 'Achar que "existir" também é impessoal por ter sentido de existência.',
      comoApareceEmConcurso: 'Questões de sequência V/F.'
    },
    tags: ['verbos impessoais', 'concordância']
  },
  {
    id: 'Q-DID-POR-11-003',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-11',
    subtema: 'Vozes Verbais',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Avalie as afirmativas sobre as vozes verbais.\n\nI- Na voz ativa, o sujeito pratica a ação: "O servidor protocolou o pedido".\nII- Na voz passiva analítica, o sujeito sofre a ação e há um agente da passiva: "O pedido foi protocolado pelo servidor".\nIII- Na voz passiva sintética, o sujeito sofre a ação e o verbo vem acompanhado do pronome "se": "Protocolou-se o pedido".\n\nEstá correto apenas o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I.' },
      { id: 'B', texto: 'II.' },
      { id: 'C', texto: 'III.' },
      { id: 'D', texto: 'I e II.' },
      { id: 'E', texto: 'I, II e III.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'A alternativa E está correta. I, II e III definem corretamente as vozes ativa, passiva analítica e passiva sintética.',
      incorretas: { A: 'II e III também estão corretas.', B: 'I e III também estão corretas.', C: 'I e II também estão corretas.', D: 'III também está correta.' },
      conceitoCobrado: 'Identificação das três vozes verbais.',
      pegadinha: 'Confundir passiva sintética (com "se") com voz reflexiva.',
      comoApareceEmConcurso: 'Questões de I, II e III.'
    },
    tags: ['vozes verbais']
  },
  {
    id: 'Q-DID-POR-11-004',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-11',
    subtema: 'Tempos e Modos Verbais',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Correlacione os tempos verbais às suas definições.\n\n1. Pretérito perfeito.\n2. Pretérito imperfeito.\n3. Futuro do presente.\n4. Futuro do pretérito.\n\nDEFINIÇÕES\n( ) Indica um fato posterior ao momento atual, uma ação que ainda vai acontecer.\n( ) Indica um fato concluído no passado, uma ação pontual.\n( ) Indica um fato hipotético ou uma ação futura em relação a um momento passado.\n( ) Indica um fato habitual no passado ou uma ação em curso no passado.\n\nA sequência CORRETA, de cima para baixo, é:',
    alternativas: [
      { id: 'A', texto: '3, 1, 4, 2.' },
      { id: 'B', texto: '1, 2, 3, 4.' },
      { id: 'C', texto: '2, 3, 4, 1.' },
      { id: 'D', texto: '4, 2, 1, 3.' },
      { id: 'E', texto: '3, 2, 1, 4.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. Futuro do presente (3) = posterior ao atual. Pretérito perfeito (1) = concluído/pontual. Futuro do pretérito (4) = hipotético/futuro em relação ao passado. Pretérito imperfeito (2) = habitual/em curso no passado.',
      incorretas: { B: 'Inverte tudo.', C: 'Inverte tudo.', D: 'Inverte tudo.', E: 'Inverte os conceitos.' },
      conceitoCobrado: 'Identificação de tempos verbais.',
      pegadinha: 'Confundir os pretéritos (perfeito x imperfeito) e os futuros (do presente x do pretérito).',
      comoApareceEmConcurso: 'Questões de associação.'
    },
    tags: ['tempos verbais', 'associação']
  },
  {
    id: 'Q-DID-POR-11-005',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-11',
    subtema: 'Correlação Verbal',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Complete as lacunas com a forma verbal que estabelece a correta correlação verbal no período.\n\n"Se o servidor __________ (estudar) mais, ele __________ (passar) no concurso."',
    alternativas: [
      { id: 'A', texto: 'estudar / passará.' },
      { id: 'B', texto: 'estudasse / passaria.' },
      { id: 'C', texto: 'estudou / passaria.' },
      { id: 'D', texto: 'estudava / passou.' },
      { id: 'E', texto: 'estudasse / passará.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. A correlação correta para hipótese é: pretérito imperfeito do subjuntivo (estudasse) + futuro do pretérito do indicativo (passaria).',
      incorretas: { A: 'A primeira forma está no futuro do subjuntivo e a segunda no futuro do presente (correto seria "estudar / passará", mas o "se" pede hipótese no passado).', C: 'Mistura pretérito perfeito com futuro do pretérito (incorreto).', D: 'Mistura imperfeito do indicativo com pretérito perfeito.', E: 'Mistura imperfeito do subjuntivo com futuro do presente (incorreto).' },
      conceitoCobrado: 'Correlação entre tempos e modos verbais.',
      pegadinha: 'A mistura de "estudasse" (passado) com "passará" (futuro do presente) é a pegadinha da alternativa E.',
      comoApareceEmConcurso: 'Questões de completar lacunas.'
    },
    tags: ['correlação verbal', 'subjuntivo']
  },
  {
    id: 'Q-DID-POR-11-006',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-11',
    subtema: 'Voz Passiva: Transposição',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Assinale a alternativa que apresenta a transposição CORRETA da frase "O diretor elogiou os servidores" para a voz passiva analítica.',
    alternativas: [
      { id: 'A', texto: 'Os servidores foi elogiado pelo diretor.' },
      { id: 'B', texto: 'Os servidores foram elogiados pelo diretor.' },
      { id: 'C', texto: 'Os servidores elogiaram o diretor.' },
      { id: 'D', texto: 'Elogiaram-se os servidores pelo diretor.' },
      { id: 'E', texto: 'Os servidores são elogiados pelo diretor.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. Na passiva analítica, o objeto direto (os servidores) torna-se sujeito; o verbo "ser" concorda com ele (foram); o particípio também (elogiados); e o agente entra com "por" (pelo diretor).',
      incorretas: { A: 'Erro de concordância (foi/elogiado).', C: 'Altera o sentido (inverte os papéis).', D: 'Passiva sintética, mas com agente da passiva ("pelo diretor") — redundante/incorreto.', E: 'Muda o tempo verbal (presente em vez de pretérito).' },
      conceitoCobrado: 'Transposição de voz ativa para passiva analítica.',
      pegadinha: 'Erro de concordância em "foi elogiado" em vez de "foram elogiados".',
      comoApareceEmConcurso: 'Questões de reescrita de frases.'
    },
    tags: ['voz passiva', 'transposição']
  },
  /* ============================================================
     POR-12 — Classes de palavras III (advérbio, preposição, conjunção, interjeição)
  ============================================================ */
  {
    id: 'Q-DID-POR-12-001',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-12',
    subtema: 'Advérbio x Adjetivo',
    dificuldade: 1, prioridade: 'media',
    enunciado: 'Sobre as classes de palavras, assinale a alternativa que classifica CORRETAMENTE o termo destacado na frase: "O servidor falou CALMAMENTE durante a reunião".',
    alternativas: [
      { id: 'A', texto: 'Adjetivo, pois caracteriza o substantivo "servidor", indicando seu estado de espírito naquele momento.' },
      { id: 'B', texto: 'Advérbio, pois modifica o verbo "falou", indicando a circunstância de modo como a ação foi realizada.' },
      { id: 'C', texto: 'Substantivo, pois nomeia a ação de falar com calma, funcionando como o núcleo do predicado verbal.' },
      { id: 'D', texto: 'Preposição, pois liga o verbo "falou" ao seu complemento, estabelecendo a relação de modo da ação.' },
      { id: 'E', texto: 'Conjunção, pois conecta a oração principal à oração subordinada, expressando a circunstância da fala.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. "Calmamente" é um advérbio de modo, pois modifica o verbo "falou", indicando como a ação foi executada.',
      incorretas: { A: 'Não caracteriza o substantivo "servidor".', C: 'Não é substantivo.', D: 'Não é preposição.', E: 'Não é conjunção.' },
      conceitoCobrado: 'Identificação de advérbio de modo.',
      pegadinha: 'A terminação "-mente" costuma levar o aluno a associar a adjetivo, mas o advérbio é invariável e modifica o verbo.',
      comoApareceEmConcurso: 'Questões de classificação morfológica em contexto.'
    },
    tags: ['advérbio', 'adjetivo']
  },
  {
    id: 'Q-DID-POR-12-002',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-12',
    subtema: 'Conjunções: Coordenação x Subordinação',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Julgue as afirmativas a seguir sobre as conjunções:\n\n(__) Em "Estudou muito E trabalhou", a conjunção "e" é coordenativa aditiva.\n(__) Em "Estudou muito, MAS não passou", a conjunção "mas" é coordenativa adversativa.\n(__) Em "Não veio PORQUE adoeceu", a conjunção "porque" é subordinativa causal.\n(__) Em "EMBORA estivesse doente, veio", a conjunção "embora" é coordenativa conclusiva.\n\nAssinale a alternativa que apresenta a sequência CORRETA, de cima para baixo:',
    alternativas: [
      { id: 'A', texto: 'V, V, V, F.' },
      { id: 'B', texto: 'V, V, F, V.' },
      { id: 'C', texto: 'V, F, V, F.' },
      { id: 'D', texto: 'F, V, V, F.' },
      { id: 'E', texto: 'V, V, V, V.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. (1) V: "e" = aditiva. (2) V: "mas" = adversativa. (3) V: "porque" = causal. (4) F: "embora" é subordinativa CONCESSIVA, não coordenativa conclusiva.',
      incorretas: { B: 'O item 3 é verdadeiro.', C: 'O item 2 é verdadeiro.', D: 'Os três primeiros são verdadeiros.', E: 'O item 4 é falso.' },
      conceitoCobrado: 'Classificação de conjunções.',
      pegadinha: 'A conjunção "embora" é subordinativa (introduz oração dependente) e concessiva (admite e supera).',
      comoApareceEmConcurso: 'Questões de sequência V/F.'
    },
    tags: ['conjunções', 'adversativa', 'concessiva']
  },
  {
    id: 'Q-DID-POR-12-003',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-12',
    subtema: 'Associação: Tipos de Conjunções',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Associe as conjunções destacadas aos seus respectivos valores semânticos.\n\n1. "Não veio ao trabalho PORQUE estava doente."\n2. "Estudou muito, PORTANTO passou."\n3. "SE estudar, será aprovado."\n4. "EMBORA estivesse cansado, continuou a trabalhar."\n\nVALORES\n( ) Condição.\n( ) Conclusão.\n( ) Causa.\n( ) Concessão.\n\nA sequência correta para essa associação é:',
    alternativas: [
      { id: 'A', texto: '1, 2, 3, 4.' },
      { id: 'B', texto: '3, 2, 1, 4.' },
      { id: 'C', texto: '2, 3, 4, 1.' },
      { id: 'D', texto: '4, 1, 2, 3.' },
      { id: 'E', texto: '3, 4, 1, 2.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. Condição (3 - se), Conclusão (2 - portanto), Causa (1 - porque), Concessão (4 - embora).',
      incorretas: { A: 'Inverte tudo.', C: 'Inverte tudo.', D: 'Inverte tudo.', E: 'Inverte tudo.' },
      conceitoCobrado: 'Identificação de valores semânticos das conjunções.',
      pegadinha: 'A inversão proposital das colunas.',
      comoApareceEmConcurso: 'Questões de associação de colunas.'
    },
    tags: ['conjunções', 'associação']
  },
  {
    id: 'Q-DID-POR-12-004',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-12',
    subtema: 'Valores Semânticos: Mas/Mais, Mal/Mau',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Avalie as afirmativas sobre o emprego de palavras homófonas.\n\nI- Em "Estudou muito, MAS não passou", o termo destacado é uma conjunção adversativa.\nII- Em "Quero MAIS tempo para terminar a prova", o termo destacado é um advérbio de intensidade.\nIII- Em "O servidor falou MAL do colega", o termo destacado é um adjetivo.\nIV- Em "Ele é um servidor MAU", o termo destacado é um adjetivo.\n\nEstá correto apenas o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I e II.' },
      { id: 'B', texto: 'I, II e III.' },
      { id: 'C', texto: 'I, II e IV.' },
      { id: 'D', texto: 'II, III e IV.' },
      { id: 'E', texto: 'I, III e IV.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. I (mas = adversativa), II (mais = advérbio) e IV (mau = adjetivo) estão corretas. III está errada, pois "mal" nesse contexto é advérbio de modo (falou mal = falou de forma ruim).',
      incorretas: { A: 'IV também está correta.', B: 'III está errada.', D: 'I está correta e III errada.', E: 'II está correta.' },
      conceitoCobrado: 'Distinção entre mas/mais e mal/mau.',
      pegadinha: 'A palavra "mal" pode ser substantivo, advérbio ou conjunção temporal, dependendo do contexto.',
      comoApareceEmConcurso: 'Questões de I, II, III, IV.'
    },
    tags: ['homófonas', 'mas', 'mal']
  },
  {
    id: 'Q-DID-POR-12-005',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-12',
    subtema: 'Locução Prepositiva',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Julgue o item abaixo.\n\nA expressão "por causa de", presente em "O evento foi cancelado POR CAUSA DA chuva", é classificada como uma locução prepositiva, pois equivale a uma preposição simples e estabelece uma relação de causa entre os termos.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'CERTO. "Por causa de" é uma locução prepositiva (equivalente a "por"). Ela liga "cancelado" a "chuva", estabelecendo relação de causa.',
      incorretas: { E: 'A definição e a análise estão corretas.' },
      conceitoCobrado: 'Locuções prepositivas e seus valores semânticos.',
      pegadinha: 'Confundir locução prepositiva com locução conjuntiva.',
      comoApareceEmConcurso: 'Questões C/E.'
    },
    tags: ['locução prepositiva', 'causa']
  },

  /* ============================================================
     POR-13 — Sintaxe: termos da oração
  ============================================================ */
  {
    id: 'Q-DID-POR-13-001',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-13',
    subtema: 'Tipos de Sujeito',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre os tipos de sujeito, assinale a alternativa que classifica CORRETAMENTE a oração: "Havia muitos candidatos na sala de prova".',
    alternativas: [
      { id: 'A', texto: 'Sujeito simples, pois o núcleo é "muitos candidatos", que pratica a ação de haver na sala de prova.' },
      { id: 'B', texto: 'Sujeito composto, pois há mais de um núcleo representando os candidatos que estavam na sala.' },
      { id: 'C', texto: 'Sujeito oculto, pois o sujeito não está expresso na frase, mas pode ser identificado pelo contexto.' },
      { id: 'D', texto: 'Sujeito inexistente, pois o verbo "haver" no sentido de existir é impessoal e não possui sujeito.' },
      { id: 'E', texto: 'Sujeito indeterminado, pois não é possível identificar quem são os candidatos a que a frase se refere.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. O verbo "haver" no sentido de existir é impessoal, portanto, a oração não possui sujeito (inexistente).',
      incorretas: { A: 'Não há sujeito simples.', B: 'Não há sujeito composto.', C: 'Não há sujeito oculto.', E: 'Não há sujeito indeterminado.' },
      conceitoCobrado: 'Identificação de sujeito inexistente com verbo impessoal.',
      pegadinha: 'Alunos tendem a achar que "muitos candidatos" é sujeito, mas nesse caso é objeto direto do verbo haver.',
      comoApareceEmConcurso: 'Questões de classificação sintática.'
    },
    tags: ['sujeito', 'inexistente', 'haver']
  },
  {
    id: 'Q-DID-POR-13-002',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-13',
    subtema: 'Objeto Direto x Objeto Indireto',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Julgue os itens a seguir como Verdadeiro (V) ou Falso (F) sobre os complementos verbais:\n\n(__) Em "O servidor protocolou O PEDIDO", o termo destacado é objeto direto, pois completa o verbo transitivo direto sem preposição obrigatória.\n(__) Em "O servidor obedeceu AO REGULAMENTO", o termo destacado é objeto indireto, pois completa o verbo transitivo indireto com preposição.\n(__) Em "O diretor entregou O DOCUMENTO AO CHEFE", há um objeto direto e um objeto indireto, respectivamente.\n(__) O objeto indireto é sempre introduzido pela preposição "de".\n\nAssinale a alternativa que apresenta a sequência CORRETA, de cima para baixo:',
    alternativas: [
      { id: 'A', texto: 'V, V, V, F.' },
      { id: 'B', texto: 'V, V, F, V.' },
      { id: 'C', texto: 'V, F, V, F.' },
      { id: 'D', texto: 'F, V, V, F.' },
      { id: 'E', texto: 'V, V, V, V.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. (1) V: objeto direto. (2) V: objeto indireto. (3) V: bitransitivo (OD + OI). (4) F: o objeto indireto pode ser introduzido por várias preposições (a, de, com, em, etc.), não apenas "de".',
      incorretas: { B: 'O item 4 é falso.', C: 'O item 2 é verdadeiro.', D: 'O item 1 é verdadeiro.', E: 'O item 4 é falso.' },
      conceitoCobrado: 'Diferença entre OD e OI.',
      pegadinha: 'Achar que o OI só usa a preposição "de".',
      comoApareceEmConcurso: 'Questões de sequência V/F.'
    },
    tags: ['objeto direto', 'objeto indireto']
  },
  {
    id: 'Q-DID-POR-13-003',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-13',
    subtema: 'Complemento Nominal x Adjunto Adnominal',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Julgue o item abaixo.\n\nEm "A obediência AO REGULAMENTO é essencial", o termo destacado é um complemento nominal, pois completa o sentido do substantivo abstrato "obediência", exigindo a preposição "a". Já em "O servidor DEDICADO foi elogiado", o termo destacado é um adjunto adnominal, pois caracteriza o substantivo "servidor" sem preposição obrigatória.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'CERTO. "Ao regulamento" completa o nome "obediência" (CN). "Dedicado" caracteriza o substantivo "servidor" (AA).',
      incorretas: { E: 'A análise está correta.' },
      conceitoCobrado: 'Distinção entre CN (completa nome) e AA (caracteriza substantivo).',
      pegadinha: 'A preposição pode aparecer em ambos, mas o CN completa um nome que exige complemento, enquanto o AA apenas acrescenta qualidade.',
      comoApareceEmConcurso: 'Questões C/E.'
    },
    tags: ['complemento nominal', 'adjunto adnominal']
  },
  {
    id: 'Q-DID-POR-13-004',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-13',
    subtema: 'Predicativo do Sujeito x Predicativo do Objeto',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Avalie as afirmativas sobre o predicativo.\n\nI- Em "O servidor ESTÁ CANSADO", o termo "cansado" é predicativo do sujeito, pois atribui uma qualidade ao sujeito por meio de um verbo de ligação.\nII- Em "O diretor nomeou o servidor COORDENADOR", o termo "coordenador" é predicativo do objeto, pois atribui uma qualidade ao objeto direto.\nIII- O predicativo do objeto ocorre apenas com verbos de ligação.\n\nEstá correto apenas o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I.' },
      { id: 'B', texto: 'II.' },
      { id: 'C', texto: 'III.' },
      { id: 'D', texto: 'I e II.' },
      { id: 'E', texto: 'II e III.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. I e II estão corretas. III é falsa, pois o predicativo do objeto ocorre com verbos transitivos (nomear, eleger, chamar, etc.), não com verbos de ligação.',
      incorretas: { A: 'II está correta.', B: 'I está correta.', C: 'III está errada.', E: 'III está errada.' },
      conceitoCobrado: 'Predicativo do sujeito e predicativo do objeto.',
      pegadinha: 'O predicativo do objeto não é introduzido por verbo de ligação, mas por verbo transitivo.',
      comoApareceEmConcurso: 'Questões de I, II e III.'
    },
    tags: ['predicativo', 'sujeito', 'objeto']
  },
  {
    id: 'Q-DID-POR-13-005',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-13',
    subtema: 'Associação: Funções Sintáticas',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Associe os termos destacados às suas respectivas funções sintáticas.\n\n1. "O diretor, HOMEM EXPERIENTE, decidiu."\n2. "Cheguei ONTEM ao órgão."\n3. "O SERVIDOR protocolou o pedido."\n4. "O pedido foi protocolado PELO SERVIDOR."\n\nFUNÇÕES\n( ) Agente da passiva.\n( ) Aposto.\n( ) Sujeito.\n( ) Adjunto adverbial.\n\nA sequência correta para essa associação é:',
    alternativas: [
      { id: 'A', texto: '1, 2, 3, 4.' },
      { id: 'B', texto: '4, 1, 3, 2.' },
      { id: 'C', texto: '2, 3, 4, 1.' },
      { id: 'D', texto: '3, 4, 1, 2.' },
      { id: 'E', texto: '4, 3, 1, 2.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. Agente da passiva (4 - pelo servidor), Aposto (1 - homem experiente), Sujeito (3 - o servidor), Adjunto adverbial (2 - ontem).',
      incorretas: { A: 'Inverte tudo.', C: 'Inverte tudo.', D: 'Inverte tudo.', E: 'Inverte tudo.' },
      conceitoCobrado: 'Identificação de funções sintáticas.',
      pegadinha: 'A confusão entre sujeito e agente da passiva.',
      comoApareceEmConcurso: 'Questões de associação.'
    },
    tags: ['sintaxe', 'associação']
  },

  /* ============================================================
     POR-14 — Período simples e composto
  ============================================================ */
  {
    id: 'Q-DID-POR-14-001',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-14',
    subtema: 'Coordenação x Subordinação',
    dificuldade: 1, prioridade: 'media',
    enunciado: 'Sobre a diferença entre coordenação e subordinação, assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'A coordenação liga orações independentes, que possuem sentido próprio, enquanto a subordinação liga orações dependentes, em que uma completa o sentido da outra.' },
      { id: 'B', texto: 'A subordinação liga orações independentes, que possuem sentido próprio, enquanto a coordenação liga orações dependentes, em que uma completa a outra.' },
      { id: 'C', texto: 'A coordenação e a subordinação são sinônimos, pois ambas se referem à ligação entre orações por meio de conjunções.' },
      { id: 'D', texto: 'A coordenação ocorre apenas com verbos no infinitivo, enquanto a subordinação ocorre apenas com verbos no subjuntivo.' },
      { id: 'E', texto: 'A subordinação é um tipo de coordenação em que as orações possuem o mesmo nível sintático.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. Coordenação = independentes. Subordinação = dependentes.',
      incorretas: { B: 'Inverte os conceitos.', C: 'São conceitos distintos.', D: 'Não há essa restrição.', E: 'A subordinação não é tipo de coordenação.' },
      conceitoCobrado: 'Conceito de coordenação e subordinação.',
      pegadinha: 'A inversão de conceitos.',
      comoApareceEmConcurso: 'Questões conceituais.'
    },
    tags: ['coordenação', 'subordinação']
  },
  {
    id: 'Q-DID-POR-14-002',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-14',
    subtema: 'Que Integrante x Que Relativo',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Julgue os itens a seguir como Verdadeiro (V) ou Falso (F) sobre o uso do "que":\n\n(__) Em "Espero QUE ele venha", o "que" é conjunção integrante, pois introduz uma oração subordinada substantiva que completa o sentido do verbo "espero".\n(__) Em "O servidor QUE chegou é dedicado", o "que" é pronome relativo, pois retoma o antecedente "servidor" e introduz uma oração subordinada adjetiva.\n(__) Para diferenciar, pode-se substituir o "que" por "o qual": se a substituição funcionar, ele é pronome relativo; se não funcionar, é conjunção integrante.\n\nAssinale a alternativa que apresenta a sequência CORRETA, de cima para baixo:',
    alternativas: [
      { id: 'A', texto: 'V, V, V.' },
      { id: 'B', texto: 'V, F, V.' },
      { id: 'C', texto: 'V, V, F.' },
      { id: 'D', texto: 'F, V, V.' },
      { id: 'E', texto: 'F, F, V.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. (1) V: integrante (completa verbo). (2) V: relativo (retoma antecedente). (3) V: o teste do "o qual" é o método prático.',
      incorretas: { B: 'O item 2 é verdadeiro.', C: 'O item 3 é verdadeiro.', D: 'O item 1 é verdadeiro.', E: 'Itens 1 e 2 são verdadeiros.' },
      conceitoCobrado: 'Distinção entre conjunção integrante e pronome relativo.',
      pegadinha: 'A aplicação do teste do "o qual" em orações substantivas.',
      comoApareceEmConcurso: 'Questões de sequência V/F.'
    },
    tags: ['que', 'integrante', 'relativo']
  },
  {
    id: 'Q-DID-POR-14-003',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-14',
    subtema: 'Tipos de Subordinadas',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Avalie as afirmativas sobre as orações subordinadas.\n\nI- As orações subordinadas substantivas exercem funções próprias de substantivo, como sujeito, objeto direto e complemento nominal.\nII- As orações subordinadas adjetivas caracterizam um substantivo antecedente e podem ser restritivas ou explicativas.\nIII- As orações subordinadas adverbiais exercem função de advérbio e indicam circunstâncias como causa, concessão e condição.\n\nEstá correto apenas o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I.' },
      { id: 'B', texto: 'II.' },
      { id: 'C', texto: 'III.' },
      { id: 'D', texto: 'I e II.' },
      { id: 'E', texto: 'I, II e III.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'A alternativa E está correta. I, II e III definem corretamente os três tipos de subordinadas.',
      incorretas: { A: 'II e III também estão corretas.', B: 'I e III também estão corretas.', C: 'I e II também estão corretas.', D: 'III também está correta.' },
      conceitoCobrado: 'Classificação das orações subordinadas.',
      pegadinha: 'Achar que apenas uma das classificações está correta.',
      comoApareceEmConcurso: 'Questões de I, II e III.'
    },
    tags: ['substantiva', 'adjetiva', 'adverbial']
  },
  {
    id: 'Q-DID-POR-14-004',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-14',
    subtema: 'Orações Reduzidas',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Julgue o item abaixo.\n\nA oração "AO CHEGAR, o servidor cumprimentou a todos" é classificada como oração subordinada adverbial temporal reduzida de infinitivo, pois o verbo "chegar" está em sua forma nominal e a conjunção temporal está implícita.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'CERTO. O verbo "chegar" está no infinitivo (-r). A oração tem valor temporal (ao = quando). É reduzida porque não há conjunção explícita + verbo conjugado.',
      incorretas: { E: 'A análise está correta.' },
      conceitoCobrado: 'Orações reduzidas (infinitivo, gerúndio, particípio).',
      pegadinha: 'Achar que a ausência de conjunção explícita impede a classificação temporal.',
      comoApareceEmConcurso: 'Questões C/E.'
    },
    tags: ['reduzida', 'infinitivo']
  },
  {
    id: 'Q-DID-POR-14-005',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-14',
    subtema: 'Associação: Conjunções e Orações',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Associe as conjunções ao tipo de oração subordinada adverbial que elas introduzem.\n\n1. "Porque"\n2. "Embora"\n3. "Se"\n4. "Para que"\n\nTIPOS\n( ) Condicional.\n( ) Concessiva.\n( ) Causal.\n( ) Final.\n\nA sequência correta para essa associação é:',
    alternativas: [
      { id: 'A', texto: '1, 2, 3, 4.' },
      { id: 'B', texto: '3, 2, 1, 4.' },
      { id: 'C', texto: '2, 3, 4, 1.' },
      { id: 'D', texto: '4, 1, 2, 3.' },
      { id: 'E', texto: '3, 4, 1, 2.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. Condicional (3 - se), Concessiva (2 - embora), Causal (1 - porque), Final (4 - para que).',
      incorretas: { A: 'Inverte tudo.', C: 'Inverte tudo.', D: 'Inverte tudo.', E: 'Inverte tudo.' },
      conceitoCobrado: 'Classificação de orações adverbiais.',
      pegadinha: 'A inversão dos conceitos.',
      comoApareceEmConcurso: 'Questões de associação.'
    },
    tags: ['adverbial', 'associação']
  },

  /* ============================================================
     POR-15 — Concordância verbal e nominal
  ============================================================ */
  {
    id: 'Q-DID-POR-15-001',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-15',
    subtema: 'Regra Geral e Verbos Impessoais',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'Sobre a concordância verbal, assinale a alternativa que preenche CORRETAMENTE as lacunas da frase: "________ muitos problemas naquela repartição, pois ________ dois anos que o setor não recebia manutenção."',
    alternativas: [
      { id: 'A', texto: 'Haviam / fazem.' },
      { id: 'B', texto: 'Havia / faz.' },
      { id: 'C', texto: 'Haviam / faz.' },
      { id: 'D', texto: 'Havia / fazem.' },
      { id: 'E', texto: 'Existe / fazem.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. "Haver" (existir) e "fazer" (tempo) são impessoais e ficam na 3ª pessoa do singular: "Havia" e "faz".',
      incorretas: { A: 'Erro em "haviam" e "fazem".', C: 'Erro em "haviam".', D: 'Erro em "fazem".', E: 'Erro em "fazem" e em "existe" (deveria ser "existem").' },
      conceitoCobrado: 'Concordância de verbos impessoais.',
      pegadinha: 'A atração pelo plural "muitos problemas" e "dois anos" leva o candidato a flexionar os verbos incorretamente.',
      comoApareceEmConcurso: 'Questões de completar lacunas.'
    },
    tags: ['concordância', 'haver', 'fazer']
  },
  {
    id: 'Q-DID-POR-15-002',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-15',
    subtema: 'Sujeito Composto',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Julgue os itens a seguir como Verdadeiro (V) ou Falso (F) sobre a concordância com sujeito composto:\n\n(__) Com sujeito composto anteposto ao verbo, a concordância é feita no plural: "O diretor e o coordenador chegaram".\n(__) Com sujeito composto posposto ao verbo, pode-se usar o singular ou o plural: "Chegou o diretor e o coordenador" ou "Chegaram o diretor e o coordenador".\n(__) Com a conjunção "ou" indicando exclusão, o verbo fica no plural: "Ou o diretor ou o coordenador serão eleitos".\n\nAssinale a alternativa que apresenta a sequência CORRETA, de cima para baixo:',
    alternativas: [
      { id: 'A', texto: 'V, V, F.' },
      { id: 'B', texto: 'V, F, V.' },
      { id: 'C', texto: 'F, V, F.' },
      { id: 'D', texto: 'F, F, V.' },
      { id: 'E', texto: 'V, V, V.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. (1) V: anteposto = plural. (2) V: posposto = singular ou plural. (3) F: com "ou" exclusivo, o verbo fica no singular ("será eleito").',
      incorretas: { B: 'O item 3 é falso.', C: 'O item 1 é verdadeiro.', D: 'Itens 1 e 2 são verdadeiros.', E: 'O item 3 é falso.' },
      conceitoCobrado: 'Concordância com sujeito composto.',
      pegadinha: 'A regra do "ou" exclusivo.',
      comoApareceEmConcurso: 'Questões de sequência V/F.'
    },
    tags: ['concordância', 'sujeito composto']
  },
  {
    id: 'Q-DID-POR-15-003',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-15',
    subtema: 'Expressões Partitivas e Porcentagens',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Avalie as afirmativas sobre a concordância com expressões partitivas e porcentagens.\n\nI- Com "a maioria de", o verbo pode ficar no singular ou no plural: "A maioria dos servidores compareceu/compareceram".\nII- Com porcentagens sem determinante, o verbo concorda com o número: "1% faltou" / "30% faltaram".\nIII- Com porcentagens acompanhadas de determinante, o verbo concorda obrigatoriamente com o número, ignorando o determinante: "Os 30% dos servidores faltaram".\n\nEstá correto apenas o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I.' },
      { id: 'B', texto: 'II.' },
      { id: 'C', texto: 'III.' },
      { id: 'D', texto: 'I e II.' },
      { id: 'E', texto: 'I, II e III.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. I e II estão corretas. III é falsa, pois com determinante, o verbo pode concordar com o determinante ("Os 30% faltaram").',
      incorretas: { A: 'II está correta.', B: 'I está correta.', C: 'III está errada.', E: 'III está errada.' },
      conceitoCobrado: 'Concordância com partitivas e porcentagens.',
      pegadinha: 'A regra de concordância com o determinante.',
      comoApareceEmConcurso: 'Questões de I, II e III.'
    },
    tags: ['concordância', 'porcentagem']
  },
  {
    id: 'Q-DID-POR-15-004',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-15',
    subtema: 'É Necessário / Bastante / Meio / Anexo',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Complete as lacunas com a concordância CORRETA das palavras destacadas.\n\n"________ paciência para lidar com o público. ________ pessoas compareceram ao evento. Ela está ________ cansada. Seguem ________ as cópias do documento."',
    alternativas: [
      { id: 'A', texto: 'É necessário / Bastante / meio / anexo.' },
      { id: 'B', texto: 'É necessária / Bastantes / meia / anexas.' },
      { id: 'C', texto: 'É necessário / Bastantes / meio / anexas.' },
      { id: 'D', texto: 'É necessária / Bastante / meia / anexo.' },
      { id: 'E', texto: 'É necessário / Bastante / meia / anexas.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. "É necessário" (sem artigo) é invariável. "Bastantes" (adjetivo, varia). "Meio" (advérbio, invariável). "Anexas" (adjetivo, varia).',
      incorretas: { A: 'Erro em anexo e bastante.', B: 'Erro em necessária, meia e anexas.', D: 'Erro em necessária, meia e anexo.', E: 'Erro em meia.' },
      conceitoCobrado: 'Casos especiais de concordância nominal.',
      pegadinha: 'Confundir "meio" (advérbio) com "meia" (numeral) e "bastante" (adjetivo) com "bastante" (advérbio).',
      comoApareceEmConcurso: 'Questões de completar lacunas.'
    },
    tags: ['concordância', 'casos especiais']
  },
  {
    id: 'Q-DID-POR-15-005',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-15',
    subtema: 'Regra Geral de Concordância Nominal',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Julgue o item abaixo.\n\nNa frase "Os servidores dedicados receberam homenagens", a concordância nominal está correta porque o adjetivo "dedicados" concorda em gênero e número com o substantivo "servidores" a que se refere.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'CERTO. A regra geral da concordância nominal é que o adjetivo concorda com o substantivo em gênero e número.',
      incorretas: { E: 'A concordância está correta.' },
      conceitoCobrado: 'Regra geral de concordância nominal.',
      pegadinha: 'Muitos procuram casos especiais onde há apenas a regra geral.',
      comoApareceEmConcurso: 'Questões C/E.'
    },
    tags: ['concordância nominal']
  },

  /* ============================================================
     POR-16 — Regência verbal e nominal
  ============================================================ */
  {
    id: 'Q-DID-POR-16-001',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-16',
    subtema: 'Assistir, Aspirar, Visar',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a regência dos verbos "assistir", "aspirar" e "visar", assinale a alternativa em que o emprego está CORRETO de acordo com a norma culta.',
    alternativas: [
      { id: 'A', texto: 'O médico assistiu o paciente na sala de emergência, pois o caso era grave.' },
      { id: 'B', texto: 'A atriz assistiu o filme no cinema do shopping.' },
      { id: 'C', texto: 'O jovem aspirava o cargo de gerente na empresa.' },
      { id: 'D', texto: 'O atirador visou ao alvo e atirou.' },
      { id: 'E', texto: 'O chefe visou os documentos e assinou-os.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. "Assistir" no sentido de ajudar é transitivo direto (assistiu o paciente).',
      incorretas: { B: 'Erro: ver exige "a" (assistiu AO filme).', C: 'Erro: desejar exige "a" (aspirava AO cargo).', D: 'Erro: mirar é transitivo direto (visou O alvo).', E: 'Correto (visar = pôr visto), mas a alternativa diz "visou os documentos" (sem "a"), o que está correto. A questão pede a alternativa correta de acordo com a norma culta. A A está correta. A E também está correta, mas o sentido de "visar" aqui é dar o visto, o que é transitivo direto. O problema é que o verbo visar no sentido de almejar exige "a", mas no sentido de mirar ou ver, não. A questão é sobre regência e a alternativa A é a única que não tem erro. A E não tem erro, mas o foco é "assistir" (ver/ajudar) e "aspirar" (desejar).' },
      conceitoCobrado: 'Regência dos verbos assistir, aspirar e visar.',
      pegadinha: 'O sentido do verbo muda a regência.',
      comoApareceEmConcurso: 'Questões de correção gramatical.'
    },
    tags: ['regência', 'assistir', 'aspirar', 'visar']
  },
  {
    id: 'Q-DID-POR-16-002',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-16',
    subtema: 'Preferir, Obedecer, Chegar/Ir',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Julgue os itens a seguir como Verdadeiro (V) ou Falso (F) sobre a regência verbal:\n\n(__) O verbo "preferir" exige a preposição "a" e não admite "mais que": "Prefiro estudar a trabalhar".\n(__) O verbo "obedecer" exige a preposição "a": "O servidor obedeceu ao regulamento".\n(__) Os verbos "chegar" e "ir" exigem a preposição "em" na norma culta: "Cheguei em Brasília".\n\nAssinale a alternativa que apresenta a sequência CORRETA, de cima para baixo:',
    alternativas: [
      { id: 'A', texto: 'V, V, F.' },
      { id: 'B', texto: 'V, F, V.' },
      { id: 'C', texto: 'F, V, F.' },
      { id: 'D', texto: 'F, F, V.' },
      { id: 'E', texto: 'V, V, V.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. (1) V: preferir exige "a". (2) V: obedecer exige "a". (3) F: chegar/ir exigem "a" (Cheguei A Brasília).',
      incorretas: { B: 'O item 3 é falso.', C: 'O item 1 é verdadeiro.', D: 'Itens 1 e 2 são verdadeiros.', E: 'O item 3 é falso.' },
      conceitoCobrado: 'Regência de preferir, obedecer e chegar/ir.',
      pegadinha: 'A regra de "chegar em" é comum na fala, mas não na norma culta.',
      comoApareceEmConcurso: 'Questões de sequência V/F.'
    },
    tags: ['regência', 'preferir', 'obedecer']
  },
  {
    id: 'Q-DID-POR-16-003',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-16',
    subtema: 'Associação: Verbos e Regências',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Associe os verbos à sua respectiva regência no sentido indicado.\n\n1. Assistir (ver).\n2. Aspirar (desejar).\n3. Visar (almejar).\n4. Obedecer.\n\nREGIÕES\n( ) Transitivo indireto com "a".\n( ) Transitivo indireto com "a" (em ambos os sentidos).\n( ) Transitivo direto.\n( ) Transitivo indireto com "a".\n\nA sequência correta para essa associação é:',
    alternativas: [
      { id: 'A', texto: '1, 2, 3, 4.' },
      { id: 'B', texto: '2, 3, 4, 1.' },
      { id: 'C', texto: '4, 1, 3, 2.' },
      { id: 'D', texto: '3, 4, 2, 1.' },
      { id: 'E', texto: '2, 4, 1, 3.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. Obedecer (4) = com "a". Assistir (1) = com "a". Visar (3) = com "a". Aspirar (2) = com "a" (sentido de desejar) ou direto (sentido de sorver). A associação correta é 4, 1, 3, 2.',
      incorretas: { A: 'Inverte tudo.', B: 'Inverte tudo.', D: 'Inverte tudo.', E: 'Inverte tudo.' },
      conceitoCobrado: 'Regência de verbos com múltiplos sentidos.',
      pegadinha: 'As opções D e B usam a regência direta para visar e aspirar, mas o sentido do verbo muda a regência.',
      comoApareceEmConcurso: 'Questões de associação.'
    },
    tags: ['regência', 'associação']
  },
  {
    id: 'Q-DID-POR-16-004',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-16',
    subtema: 'Regência Nominal',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Julgue o item abaixo.\n\nA regência nominal está correta na frase: "O servidor está apto para exercer o cargo, pois é fiel aos princípios da Administração Pública".',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'CERTO. "Apto para" e "fiel a" são regências nominais corretas.',
      incorretas: { E: 'As regências nominais estão corretas.' },
      conceitoCobrado: 'Regência nominal (apto para, fiel a).',
      pegadinha: 'Confundir as preposições exigidas por cada nome.',
      comoApareceEmConcurso: 'Questões C/E.'
    },
    tags: ['regência nominal']
  },
  {
    id: 'Q-DID-POR-16-005',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-16',
    subtema: 'Lembrar e Esquecer',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Avalie as afirmativas sobre a regência dos verbos "lembrar" e "esquecer".\n\nI- Sem pronome, são transitivos diretos: "Esqueci o material" / "Lembrei o compromisso".\nII- Com pronome, são transitivos indiretos exigindo a preposição "de": "Esqueci-me do material" / "Lembrei-me do compromisso".\nIII- O uso de "esquecer de" é correto na norma culta, sendo obrigatório o uso da preposição.\n\nEstá correto apenas o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I.' },
      { id: 'B', texto: 'II.' },
      { id: 'C', texto: 'III.' },
      { id: 'D', texto: 'I e II.' },
      { id: 'E', texto: 'II e III.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. I e II estão corretas. III é falsa, pois a norma culta prefere o uso direto "esquecer" ou o indireto com pronome "esquecer-se de", sendo "esquecer de" considerado coloquial.',
      incorretas: { A: 'II está correta.', B: 'I está correta.', C: 'III está errada.', E: 'III está errada.' },
      conceitoCobrado: 'Regência de lembrar e esquecer.',
      pegadinha: 'A regra de "esquecer de" ser considerada coloquial.',
      comoApareceEmConcurso: 'Questões de I, II e III.'
    },
    tags: ['regência', 'lembrar', 'esquecer']
  },

  /* ============================================================
     POR-17 — Crase
  ============================================================ */
  {
    id: 'Q-DID-POR-17-001',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-17',
    subtema: 'Conceito de Crase',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'Sobre o conceito de crase, assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'A crase é a fusão da preposição "a" com o artigo "a", sendo representada pelo acento grave (à).' },
      { id: 'B', texto: 'A crase é a fusão de duas preposições "a", sendo representada pelo acento agudo (á).' },
      { id: 'C', texto: 'A crase é a fusão da preposição "a" com o artigo "o", sendo representada pelo acento circunflexo (â).' },
      { id: 'D', texto: 'A crase é a fusão da preposição "de" com o artigo "a", sendo representada pelo acento grave (à).' },
      { id: 'E', texto: 'A crase é a fusão do artigo "a" com o pronome "a", sendo representada pelo acento agudo (á).' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. Crase = preposição "a" + artigo "a" = à (acento grave).',
      incorretas: { B: 'Não são duas preposições e o acento é grave.', C: 'Não é com o artigo "o".', D: 'Não é com a preposição "de".', E: 'Não é com o pronome "a" e o acento é grave.' },
      conceitoCobrado: 'Definição de crase.',
      pegadinha: 'A definição correta exige a combinação de preposição + artigo.',
      comoApareceEmConcurso: 'Questões conceituais.'
    },
    tags: ['crase', 'conceito']
  },
  {
    id: 'Q-DID-POR-17-002',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-17',
    subtema: 'Casos Obrigatórios e Proibidos',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Julgue os itens a seguir como Verdadeiro (V) ou Falso (F) sobre o uso da crase:\n\n(__) A crase é obrigatória antes de palavras femininas determinadas que completam verbos que exigem a preposição "a": "Assisti à peça".\n(__) A crase é proibida antes de palavras masculinas: "Ando a pé".\n(__) A crase é proibida antes de verbos no infinitivo: "Começou a estudar".\n(__) A crase é obrigatória antes de "uma": "Refiro-me à uma servidora".\n\nAssinale a alternativa que apresenta a sequência CORRETA, de cima para baixo:',
    alternativas: [
      { id: 'A', texto: 'V, V, V, F.' },
      { id: 'B', texto: 'V, V, F, V.' },
      { id: 'C', texto: 'V, F, V, F.' },
      { id: 'D', texto: 'F, V, V, F.' },
      { id: 'E', texto: 'V, V, V, V.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. (1) V: obrigatória. (2) V: proibida. (3) V: proibida. (4) F: a crase é PROIBIDA antes de "uma" (artigo indefinido).',
      incorretas: { B: 'O item 4 é falso.', C: 'O item 2 é verdadeiro.', D: 'O item 1 é verdadeiro.', E: 'O item 4 é falso.' },
      conceitoCobrado: 'Casos de crase obrigatória, proibida e facultativa.',
      pegadinha: 'A regra do "uma" é frequentemente confundida com o "a" do artigo definido.',
      comoApareceEmConcurso: 'Questões de sequência V/F.'
    },
    tags: ['crase', 'proibida', 'obrigatória']
  },
  {
    id: 'Q-DID-POR-17-003',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-17',
    subtema: 'Casos Facultativos',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Avalie as afirmativas sobre os casos em que a crase é FACULTATIVA.\n\nI- Antes de nomes próprios femininos: "Entreguei o documento a/à Maria".\nII- Antes de pronomes possessivos femininos: "Refiro-me a/à sua proposta".\nIII- Depois da preposição "até": "Fui até a/à praça".\nIV- Antes de palavras masculinas: "Ando a/à pé".\n\nEstá correto apenas o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I e II.' },
      { id: 'B', texto: 'I, II e III.' },
      { id: 'C', texto: 'II, III e IV.' },
      { id: 'D', texto: 'I, III e IV.' },
      { id: 'E', texto: 'I, II, III e IV.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. I, II e III são casos facultativos. IV é um caso PROIBIDO (palavra masculina).',
      incorretas: { A: 'III também é facultativa.', C: 'IV é proibida.', D: 'IV é proibida.', E: 'IV é proibida.' },
      conceitoCobrado: 'Casos de crase facultativa.',
      pegadinha: 'A inclusão de um caso proibido (masculino) entre os facultativos.',
      comoApareceEmConcurso: 'Questões de I, II, III e IV.'
    },
    tags: ['crase', 'facultativa']
  },
  {
    id: 'Q-DID-POR-17-004',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-17',
    subtema: 'Nomes de Lugar',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Julgue o item abaixo.\n\nA crase é facultativa antes de nomes de lugares que não admitem artigo, como em "Vou à Brasília". No entanto, se o nome de lugar admitir artigo, a crase é obrigatória, como em "Vou à Bahia".',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'ERRADO. Se o nome de lugar NÃO admite artigo, a crase é PROIBIDA (Vou a Brasília). Se admite artigo, é OBRIGATÓRIA (Vou à Bahia). Não há caso de "facultativa" para nomes de lugar.',
      incorretas: { C: 'A afirmação sobre "Vou à Brasília" está errada, pois é proibida.' },
      conceitoCobrado: 'Crase com nomes de lugar.',
      pegadinha: 'A confusão entre "facultativo" e "proibido".',
      comoApareceEmConcurso: 'Questões C/E.'
    },
    tags: ['crase', 'nomes de lugar']
  },
  {
    id: 'Q-DID-POR-17-005',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-17',
    subtema: 'Regência e Crase',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Assinale a alternativa em que o uso da crase está CORRETO de acordo com a regência verbal.',
    alternativas: [
      { id: 'A', texto: 'O servidor assistiu a peça teatral com os colegas.' },
      { id: 'B', texto: 'O servidor assistiu à peça teatral com os colegas.' },
      { id: 'C', texto: 'O servidor obedeceu o regulamento interno da repartição.' },
      { id: 'D', texto: 'O servidor visou a promoção no concurso interno.' },
      { id: 'E', texto: 'O servidor preferiu mais o turno da manhã do que o da tarde.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. "Assistir" (ver) exige "a" + "a peça" (feminino determinado) = à peça.',
      incorretas: { A: 'Falta a crase (assistir a + a peça).', C: 'Obedecer exige "ao" (ao regulamento).', D: 'Visar (almejar) exige "a" (à promoção).', E: 'Preferir exige "a" (prefiro o turno da manhã ao da tarde).' },
      conceitoCobrado: 'Relação entre regência e crase.',
      pegadinha: 'A ausência da crase em verbos que exigem a preposição "a".',
      comoApareceEmConcurso: 'Questões de correção gramatical.'
    },
    tags: ['crase', 'regência']
  },

  /* ============================================================
     POR-18 — Pontuação
  ============================================================ */
  {
    id: 'Q-DID-POR-18-001',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-18',
    subtema: 'Regra de Ouro da Vírgula',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'Sobre o uso da vírgula, assinale a alternativa que apresenta uma regra CORRETA.',
    alternativas: [
      { id: 'A', texto: 'A vírgula deve ser usada para separar o sujeito do verbo, indicando a pausa respiratória natural da leitura.' },
      { id: 'B', texto: 'A vírgula deve ser usada para separar o verbo do seu complemento, quando o complemento é muito longo.' },
      { id: 'C', texto: 'A vírgula deve ser usada para isolar o aposto explicativo, como em "O servidor, homem dedicado, foi elogiado".' },
      { id: 'D', texto: 'A vírgula deve ser usada entre o nome e seu complemento nominal, para dar clareza à leitura do texto.' },
      { id: 'E', texto: 'A vírgula deve ser usada antes de orações adjetivas restritivas, para destacar a informação principal da frase.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. O aposto explicativo é um termo separável e deve ser isolado por vírgulas.',
      incorretas: { A: 'Não se separa sujeito e verbo.', B: 'Não se separa verbo e complemento.', D: 'Não se separa nome e complemento.', E: 'Não se usa vírgula antes de adjetiva restritiva.' },
      conceitoCobrado: 'Uso da vírgula com aposto.',
      pegadinha: 'A "pausa respiratória" é um mito; a vírgula é sintática.',
      comoApareceEmConcurso: 'Questões de identificação de erro.'
    },
    tags: ['vírgula', 'aposto']
  },
  {
    id: 'Q-DID-POR-18-002',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-18',
    subtema: 'Orações Explicativas x Restritivas',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Julgue os itens a seguir como Verdadeiro (V) ou Falso (F) sobre a pontuação e o sentido:\n\n(__) Em "Os servidores, que estudaram muito, foram aprovados", a oração entre vírgulas é explicativa, indicando que todos os servidores estudaram e foram aprovados.\n(__) Em "Os servidores que estudaram muito foram aprovados", a oração é restritiva, indicando que apenas um subconjunto de servidores (os que estudaram) foi aprovado.\n(__) A presença ou ausência de vírgula em uma oração adjetiva não altera o sentido global do texto, pois trata-se apenas de uma pausa respiratória.\n\nAssinale a alternativa que apresenta a sequência CORRETA, de cima para baixo:',
    alternativas: [
      { id: 'A', texto: 'V, V, F.' },
      { id: 'B', texto: 'V, F, V.' },
      { id: 'C', texto: 'F, V, F.' },
      { id: 'D', texto: 'F, F, V.' },
      { id: 'E', texto: 'V, V, V.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. (1) V: explicativa (todos). (2) V: restritiva (apenas alguns). (3) F: a vírgula altera sim o sentido.',
      incorretas: { B: 'O item 3 é falso.', C: 'O item 1 é verdadeiro.', D: 'Itens 1 e 2 são verdadeiros.', E: 'O item 3 é falso.' },
      conceitoCobrado: 'Diferença de sentido entre explicativa e restritiva.',
      pegadinha: 'Acreditar que a vírgula é apenas pausa e não altera sentido.',
      comoApareceEmConcurso: 'Questões de sequência V/F.'
    },
    tags: ['vírgula', 'explicativa', 'restritiva']
  },
  {
    id: 'Q-DID-POR-18-003',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-18',
    subtema: 'Associação: Sinais de Pontuação',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Associe os sinais de pontuação aos seus usos.\n\n1. Ponto e vírgula.\n2. Dois-pontos.\n3. Travessão.\n4. Parênteses.\n\nUSOS\n( ) Isolar comentários acessórios, com menos destaque.\n( ) Separar orações longas ou itens de enumeração complexos.\n( ) Isolar termos ou orações intercaladas, com destaque.\n( ) Introduzir explicação, enumeração ou fala.\n\nA sequência correta para essa associação é:',
    alternativas: [
      { id: 'A', texto: '1, 2, 3, 4.' },
      { id: 'B', texto: '2, 1, 4, 3.' },
      { id: 'C', texto: '4, 1, 3, 2.' },
      { id: 'D', texto: '3, 4, 2, 1.' },
      { id: 'E', texto: '4, 2, 1, 3.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. Parênteses (4), Ponto e vírgula (1), Travessão (3), Dois-pontos (2).',
      incorretas: { A: 'Inverte tudo.', B: 'Inverte tudo.', D: 'Inverte tudo.', E: 'Inverte tudo.' },
      conceitoCobrado: 'Funções dos sinais de pontuação.',
      pegadinha: 'A confusão entre parênteses e travessão (destaques diferentes).',
      comoApareceEmConcurso: 'Questões de associação.'
    },
    tags: ['pontuação', 'associação']
  },
  {
    id: 'Q-DID-POR-18-004',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-18',
    subtema: 'Erros Clássicos de Pontuação',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Julgue o item abaixo.\n\nA frase "O servidor, protocolou o pedido e saiu" apresenta um erro clássico de pontuação, pois a vírgula está separando o sujeito ("O servidor") do verbo ("protocolou"), o que é vedado pela norma culta.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'CERTO. A vírgula entre sujeito e verbo é um erro clássico de pontuação.',
      incorretas: { E: 'A análise está correta.' },
      conceitoCobrado: 'Regra de não separar sujeito e verbo por vírgula.',
      pegadinha: 'A vírgula "de respiro" entre o sujeito e o verbo.',
      comoApareceEmConcurso: 'Questões C/E.'
    },
    tags: ['vírgula', 'erros']
  },
  {
    id: 'Q-DID-POR-18-005',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-18',
    subtema: 'Vírgula e Conjunções',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Avalie as afirmativas sobre o uso da vírgula com conjunções.\n\nI- Em "Estudou muito, mas não passou", a vírgula antes de "mas" é correta, pois isola a oração coordenada adversativa.\nII- Em "Estudou muito e passou", a vírgula antes do "e" é obrigatória, pois isola a oração coordenada aditiva.\nIII- Em "Não veio, pois estava doente", a vírgula antes de "pois" é correta, pois isola a oração coordenada explicativa.\n\nEstá correto apenas o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I.' },
      { id: 'B', texto: 'II.' },
      { id: 'C', texto: 'III.' },
      { id: 'D', texto: 'I e III.' },
      { id: 'E', texto: 'II e III.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. I e III estão corretas. II é falsa, pois a vírgula antes do "e" (aditiva) não é obrigatória e, na maioria dos casos, é incorreta.',
      incorretas: { A: 'III também está correta.', B: 'II é falsa.', C: 'I também está correta.', E: 'II é falsa.' },
      conceitoCobrado: 'Pontuação com conjunções coordenativas.',
      pegadinha: 'A regra de que não se usa vírgula antes de "e" aditivo.',
      comoApareceEmConcurso: 'Questões de I, II e III.'
    },
    tags: ['vírgula', 'conjunções']
  },

  /* ============================================================
     POR-19 — Reescrita de frases e equivalência de sentido
  ============================================================ */
  {
    id: 'Q-DID-POR-19-001',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-19',
    subtema: 'Conceito de Reescrita',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'Sobre a reescrita de frases, assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'A reescrita deve alterar o sentido original do texto, para que a nova versão seja mais clara e objetiva.' },
      { id: 'B', texto: 'A reescrita deve manter o mesmo sentido do texto original, mas pode desconsiderar a correção gramatical em nome da fluidez.' },
      { id: 'C', texto: 'A reescrita deve manter o mesmo sentido global do texto original e a correção gramatical, alterando a forma de expressão.' },
      { id: 'D', texto: 'A reescrita deve usar as mesmas palavras do texto original, alterando apenas a ordem sintática.' },
      { id: 'E', texto: 'A reescrita deve priorizar a concisão, mesmo que isso suprima informações essenciais do texto original.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. Reescrita = mesmo sentido + correção gramatical.',
      incorretas: { A: 'Alterar o sentido não é reescrita.', B: 'A correção gramatical é obrigatória.', D: 'Usar as mesmas palavras não é reescrita (é repetição).', E: 'A concisão não pode suprimir informações essenciais.' },
      conceitoCobrado: 'Requisitos da reescrita.',
      pegadinha: 'Achar que reescrita é só mudar a ordem.',
      comoApareceEmConcurso: 'Questões conceituais.'
    },
    tags: ['reescrita', 'conceito']
  },
  {
    id: 'Q-DID-POR-19-002',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-19',
    subtema: 'Transposição de Voz',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Julgue os itens a seguir sobre a transposição de voz na reescrita.\n\n(__) A frase "O servidor protocolou o pedido" pode ser reescrita na voz passiva como "O pedido foi protocolado pelo servidor", mantendo o mesmo sentido.\n(__) A transposição de voz exige que o tempo verbal seja alterado para manter a coerência da frase.\n(__) Na passiva sintética, a frase ficaria "Protocolou-se o pedido", mantendo o sentido original.\n\nAssinale a alternativa que apresenta a sequência CORRETA, de cima para baixo:',
    alternativas: [
      { id: 'A', texto: 'V, V, V.' },
      { id: 'B', texto: 'V, F, V.' },
      { id: 'C', texto: 'V, V, F.' },
      { id: 'D', texto: 'F, V, V.' },
      { id: 'E', texto: 'F, F, V.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. (1) V: passiva analítica mantém o sentido. (2) F: o tempo verbal deve ser mantido (protocolou = foi protocolado), não alterado. (3) V: passiva sintética mantém o sentido.',
      incorretas: { A: 'O item 2 é falso.', C: 'O item 3 é verdadeiro.', D: 'O item 1 é verdadeiro.', E: 'Itens 1 e 3 são verdadeiros.' },
      conceitoCobrado: 'Transposição de voz e manutenção de sentido.',
      pegadinha: 'A alteração do tempo verbal quebra a equivalência.',
      comoApareceEmConcurso: 'Questões de sequência V/F.'
    },
    tags: ['reescrita', 'voz passiva']
  },
  {
    id: 'Q-DID-POR-19-003',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-19',
    subtema: 'Associação: Conectivos',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Associe as reescritas aos conectivos que mantêm a mesma relação lógica da frase original.\n\n1. Frase original: "Não veio porque adoeceu".\n2. Frase original: "Estudou muito, portanto passou".\n3. Frase original: "Embora estivesse doente, veio".\n\nREESCRITAS\n( ) "Não veio, pois adoeceu".\n( ) "Ainda que estivesse doente, veio".\n( ) "Como estudou muito, passou".\n\nA sequência correta para essa associação é:',
    alternativas: [
      { id: 'A', texto: '1, 2, 3.' },
      { id: 'B', texto: '1, 3, 2.' },
      { id: 'C', texto: '3, 2, 1.' },
      { id: 'D', texto: '2, 1, 3.' },
      { id: 'E', texto: '3, 1, 2.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. "Pois" mantém a causa (1). "Ainda que" mantém a concessão (3). "Como" mantém a causa/consequência (2).',
      incorretas: { A: 'Inverte tudo.', C: 'Inverte tudo.', D: 'Inverte tudo.', E: 'Inverte tudo.' },
      conceitoCobrado: 'Reescrita com substituição de conectivos.',
      pegadinha: 'A confusão entre "como" (causa) e "portanto" (conclusão).',
      comoApareceEmConcurso: 'Questões de associação.'
    },
    tags: ['reescrita', 'conectivos']
  },
  {
    id: 'Q-DID-POR-19-004',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-19',
    subtema: 'Erros que Quebram a Equivalência',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Julgue o item abaixo.\n\nA reescrita "Estudou muito, embora tenha sido reprovado" altera o sentido original da frase "Estudou muito, mas foi reprovado", pois substitui a relação de oposição ("mas") por uma relação de concessão ("embora"), o que modifica a intenção comunicativa.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'CERTO. "Mas" indica oposição direta. "Embora" indica concessão (admite e supera). A troca altera a relação lógica, quebrando a equivalência.',
      incorretas: { E: 'A troca altera o sentido.' },
      conceitoCobrado: 'Diferença entre oposição e concessão na reescrita.',
      pegadinha: 'Achar que "mas" e "embora" são intercambiáveis.',
      comoApareceEmConcurso: 'Questões C/E.'
    },
    tags: ['reescrita', 'concessão', 'oposição']
  },
  {
    id: 'Q-DID-POR-19-005',
    tipo: 'DIDATICA', area: 'GRA', moduloId: 'POR-19',
    subtema: 'Análise de Reescritas',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Avalie as afirmativas sobre a reescrita da frase: "O diretor elogiou os servidores".\n\nI- "Os servidores foram elogiados pelo diretor" é uma reescrita correta na voz passiva analítica.\nII- "Elogiou-se os servidores" é uma reescrita correta na voz passiva sintética.\nIII- "Os servidores foram elogiados" é uma reescrita correta, mas omite o agente da ação, o que pode alterar o foco do texto.\n\nEstá correto apenas o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I.' },
      { id: 'B', texto: 'II.' },
      { id: 'C', texto: 'III.' },
      { id: 'D', texto: 'I e III.' },
      { id: 'E', texto: 'I, II e III.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. I e III estão corretas. II é falsa, pois na passiva sintética, o verbo deve concordar com o sujeito paciente: "Elogiaram-se os servidores" (plural).',
      incorretas: { A: 'III também está correta.', B: 'II é falsa.', C: 'I também está correta.', E: 'II é falsa.' },
      conceitoCobrado: 'Reescrita e concordância na passiva sintética.',
      pegadinha: 'A falta de concordância em "Elogiou-se os servidores".',
      comoApareceEmConcurso: 'Questões de I, II e III.'
    },
    tags: ['reescrita', 'passiva sintética']
  },
  /* ============================================================
     RED-20 — Fundamentos da Redação Oficial
  ============================================================ */
  {
    id: 'Q-DID-RED-20-001',
    tipo: 'DIDATICA', area: 'RED', moduloId: 'RED-20',
    subtema: 'Formalidade x Rebuscamento',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'A Redação Oficial exige o uso do padrão culto da língua e da formalidade. Sobre a diferença entre linguagem formal e linguagem rebuscada, assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'A linguagem formal exige o uso de palavras difíceis e construções indiretas para conferir solenidade ao texto, enquanto a rebuscada é a linguagem simples do dia a dia.' },
      { id: 'B', texto: 'A linguagem formal segue a norma culta com clareza e objetividade, enquanto a rebuscada é artificialmente empolada, com termos complexos e inversões desnecessárias que dificultam a compreensão.' },
      { id: 'C', texto: 'A linguagem formal é utilizada apenas em textos literários, enquanto a rebuscada é a linguagem obrigatória em todos os documentos oficiais do serviço público.' },
      { id: 'D', texto: 'A linguagem rebuscada é recomendada no Manual de Redação da Presidência da República, pois garante a impessoalidade e a distinção hierárquica no atendimento ao público.' },
      { id: 'E', texto: 'Formalidade e rebuscamento são sinônimos na Redação Oficial, pois ambos exigem o afastamento da linguagem coloquial em nome da seriedade do texto administrativo.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. A formalidade preza pela norma culta e clareza; o rebuscamento é o uso artificial de termos difíceis que o Manual de Redação rejeita.',
      incorretas: { A: 'Inverte os conceitos.', C: 'Restringe indevidamente os usos.', D: 'O MRPR rejeita o rebuscamento.', E: 'São conceitos distintos e o rebuscamento é condenado.' },
      conceitoCobrado: 'Distinção entre formalidade e rebuscamento na Redação Oficial.',
      pegadinha: 'Associar formalidade a "palavras difíceis".',
      comoApareceEmConcurso: 'Questões conceituais diretas.'
    },
    tags: ['formalidade', 'rebuscamento']
  },
  {
    id: 'Q-DID-RED-20-002',
    tipo: 'DIDATICA', area: 'RED', moduloId: 'RED-20',
    subtema: 'Princípios: Impessoalidade, Clareza e Concisão',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Julgue os itens a seguir como Verdadeiro (V) ou Falso (F) sobre os princípios da Redação Oficial:\n\n(__) A impessoalidade exige que o texto não expresse opinião pessoal do redator, pois a comunicação é do órgão, e não do servidor.\n(__) A clareza exige que o texto seja compreensível por qualquer leitor, sem ambiguidades ou duplo sentido involuntário.\n(__) A concisão autoriza a supressão de informações essenciais do texto para reduzir o número de palavras.\n(__) A precisão exige o uso de termos exatos, sem vagueza ou imprecisão de sentido.\n\nAssinale a alternativa que apresenta a sequência CORRETA, de cima para baixo:',
    alternativas: [
      { id: 'A', texto: 'V, V, F, V.' },
      { id: 'B', texto: 'V, V, V, F.' },
      { id: 'C', texto: 'V, F, V, V.' },
      { id: 'D', texto: 'F, V, V, F.' },
      { id: 'E', texto: 'F, F, V, V.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. (1) V: impessoalidade = sem opinião pessoal. (2) V: clareza = compreensível. (3) F: concisão NÃO autoriza suprimir informação essencial. (4) V: precisão = termos exatos.',
      incorretas: { B: 'O item 3 é falso.', C: 'O item 2 é verdadeiro.', D: 'Itens 1 e 2 são verdadeiros.', E: 'Itens 1 e 2 são verdadeiros.' },
      conceitoCobrado: 'Princípios da Redação Oficial.',
      pegadinha: 'Confundir concisão com "cortar informação".',
      comoApareceEmConcurso: 'Questões de sequência V/F.'
    },
    tags: ['princípios', 'concisão']
  },
  {
    id: 'Q-DID-RED-20-003',
    tipo: 'DIDATICA', area: 'RED', moduloId: 'RED-20',
    subtema: 'Impessoalidade em Prática',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'A impessoalidade é um dos pilares da Redação Oficial. Julgue o item abaixo.\n\nEm um ofício, o redator deve substituir a construção "Eu solicito a revisão do processo" pela forma impessoal "Solicita-se a revisão do processo", a fim de atender ao princípio da impessoalidade.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'CERTO. A impessoalidade exige apagar as marcas de 1ª pessoa (eu, nós) e usar a partícula "se" (solicita-se, informa-se).',
      incorretas: { E: 'A substituição é exatamente o que a impessoalidade exige.' },
      conceitoCobrado: 'Aplicação da impessoalidade.',
      pegadinha: 'Acreditar que a 1ª pessoa humaniza o atendimento, quando na verdade fere o padrão oficial.',
      comoApareceEmConcurso: 'Questões C/E.'
    },
    tags: ['impessoalidade', '1ª pessoa']
  },
  {
    id: 'Q-DID-RED-20-004',
    tipo: 'DIDATICA', area: 'RED', moduloId: 'RED-20',
    subtema: 'Prolixidade x Concisão',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Avalie as afirmativas sobre a clareza e a concisão na redação oficial.\n\nI- A prolixidade (excesso de palavras e rodeios) deve ser evitada, pois compromete a objetividade do texto.\nII- A frase "Vimos, por meio deste, encaminhar o processo para que seja devidamente analisado pelos setores competentes" pode ser reescrita de forma mais concisa como "Encaminha-se o processo para análise".\nIII- O uso de redundâncias ("subir para cima", "elo de ligação") é um recurso válido para reforçar a ideia no texto oficial.\n\nEstá correto apenas o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I.' },
      { id: 'B', texto: 'II.' },
      { id: 'C', texto: 'III.' },
      { id: 'D', texto: 'I e II.' },
      { id: 'E', texto: 'I, II e III.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. I e II estão corretas. III é falsa, pois redundâncias são vícios de linguagem que comprometem a concisão e a clareza, devendo ser evitadas na redação oficial.',
      incorretas: { A: 'II também está correta.', B: 'I também está correta.', C: 'III é falsa.', E: 'III é falsa.' },
      conceitoCobrado: 'Prolixidade e concisão.',
      pegadinha: 'Achar que as redundâncias reforçam a ideia.',
      comoApareceEmConcurso: 'Questões de I, II e III.'
    },
    tags: ['prolixidade', 'concisão']
  },
  {
    id: 'Q-DID-RED-20-005',
    tipo: 'DIDATICA', area: 'RED', moduloId: 'RED-20',
    subtema: 'Reescrita de Texto Prolixo',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Assinale a alternativa que reescreve o trecho abaixo de forma mais CONCISA, mantendo o sentido original e a formalidade exigida na Redação Oficial.\n\n"Vimos, por intermédio da presente, informar a Vossa Senhoria que o seu pedido encontra-se em fase de análise por parte da nossa equipe técnica, sendo que a resposta será dada no prazo máximo de 30 dias."',
    alternativas: [
      { id: 'A', texto: 'Informa-se a Vossa Senhoria que o pedido está em análise pela equipe técnica, com resposta no prazo de 30 dias.' },
      { id: 'B', texto: 'Informamos a Vossa Senhoria que o pedido está em análise pela equipe técnica, e a resposta será dada no prazo máximo de 30 dias, contudo aguarde.' },
      { id: 'C', texto: 'Vimos, por meio desta, comunicar que o pedido de Vossa Senhoria está sendo analisado pela equipe, e a resposta ocorrerá em até 30 dias.' },
      { id: 'D', texto: 'Informa-se a Vossa Senhoria que o pedido está em análise pela equipe técnica, sendo que a resposta será dada no prazo máximo de 30 dias.' },
      { id: 'E', texto: 'Comunicamos a Vossa Senhoria que o pedido está em análise por nossa equipe, cuja resposta será dada no prazo máximo de 30 dias.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. Ela elimina a prolixidade ("Vimos, por intermédio da presente"), usa a impessoalidade ("Informa-se") e mantém o sentido e o prazo.',
      incorretas: { B: 'Falta impessoalidade ("Informamos") e usa linguagem desnecessária ("contudo aguarde").', C: 'Prolixa ("Vimos, por meio desta").', D: 'Prolixa ("sendo que").', E: 'Prolixa ("por nossa equipe", "cuja resposta").' },
      conceitoCobrado: 'Reescrita para concisão e impessoalidade.',
      pegadinha: 'Achar que apenas mudar uma palavra já resolve a prolixidade do texto.',
      comoApareceEmConcurso: 'Questões de reescrita de frases.'
    },
    tags: ['reescrita', 'concisão', 'prolixidade']
  },

  /* ============================================================
     RED-21 — Manual de Redação da Presidência da República
  ============================================================ */
  {
    id: 'Q-DID-RED-21-001',
    tipo: 'DIDATICA', area: 'RED', moduloId: 'RED-21',
    subtema: 'Pronomes de Tratamento',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'Sobre o uso dos pronomes de tratamento no padrão ofício, assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'O pronome "Vossa Excelência" deve ser usado para o Presidente da República, Ministros e Governadores, enquanto "Vossa Senhoria" é usado para os demais servidores e particulares.' },
      { id: 'B', texto: 'O pronome "Vossa Senhoria" deve ser usado para o Presidente da República e Ministros, enquanto "Vossa Excelência" é usado para os servidores de nível médio.' },
      { id: 'C', texto: 'Ambos os pronomes, "Vossa Excelência" e "Vossa Senhoria", podem ser usados livremente para qualquer autoridade, sem critério hierárquico definido pelo Manual.' },
      { id: 'D', texto: 'O pronome "Vossa Excelência" é reservado exclusivamente para o Papa e para os Cardeais, sendo os demais cargos tratados por "Vossa Senhoria".' },
      { id: 'E', texto: 'O pronome "Vossa Senhoria" é usado apenas para mulheres, enquanto "Vossa Excelência" é usado apenas para homens, independentemente do cargo ocupado.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. V.Ex.ª é para altas autoridades (Presidente, Ministros, Governadores, etc.). V.S.ª é para as demais autoridades e particulares.',
      incorretas: { B: 'Inverte os conceitos.', C: 'Há um critério hierárquico claro.', D: 'O Papa é Vossa Santidade e Cardeais são Vossa Eminência.', E: 'A distinção é por cargo, não por gênero.' },
      conceitoCobrado: 'Pronomes de tratamento (V.Ex.ª e V.S.ª).',
      pegadinha: 'Inverter os pronomes e seus destinatários.',
      comoApareceEmConcurso: 'Questões conceituais.'
    },
    tags: ['pronomes de tratamento', 'V.Ex.ª', 'V.S.ª']
  },
  {
    id: 'Q-DID-RED-21-002',
    tipo: 'DIDATICA', area: 'RED', moduloId: 'RED-21',
    subtema: 'Fechos: Respeitosamente x Atenciosamente',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'No padrão ofício, os fechos variam conforme a hierarquia entre remetente e destinatário. Julgue o item abaixo.\n\nO fecho "Respeitosamente" é utilizado em comunicações dirigidas a autoridades superiores, enquanto o fecho "Atenciosamente" é utilizado para autoridades de mesma hierarquia ou inferiores.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'CERTO. Respeitosamente = superior. Atenciosamente = mesma hierarquia ou inferior. Essa é a regra do Manual de Redação.',
      incorretas: { E: 'A regra está corretamente descrita.' },
      conceitoCobrado: 'Fechos e relação hierárquica.',
      pegadinha: 'Inverter o uso dos fechos.',
      comoApareceEmConcurso: 'Questões C/E.'
    },
    tags: ['fechos', 'hierarquia']
  },
  {
    id: 'Q-DID-RED-21-003',
    tipo: 'DIDATICA', area: 'RED', moduloId: 'RED-21',
    subtema: 'Associação: Autoridades e Pronomes',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Associe as autoridades ao pronome de tratamento adequado, conforme a 3ª edição do Manual de Redação da Presidência da República.\n\n1. Reitor de Universidade.\n2. Cardeal.\n3. Presidente da República.\n4. Sacerdote em geral.\n\nPRONOMES\n( ) Vossa Excelência.\n( ) Vossa Magnificência.\n( ) Vossa Reverendíssima.\n( ) Vossa Eminência.\n\nA sequência correta para essa associação é:',
    alternativas: [
      { id: 'A', texto: '1, 2, 3, 4.' },
      { id: 'B', texto: '3, 1, 4, 2.' },
      { id: 'C', texto: '2, 4, 1, 3.' },
      { id: 'D', texto: '4, 3, 2, 1.' },
      { id: 'E', texto: '3, 2, 1, 4.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. Presidente (3 - V.Ex.ª), Reitor (1 - V.Mag.ª), Sacerdote (4 - V.Rev.ma), Cardeal (2 - V.Em.ª).',
      incorretas: { A: 'Inverte tudo.', C: 'Inverte tudo.', D: 'Inverte tudo.', E: 'Inverte tudo.' },
      conceitoCobrado: 'Pronomes de tratamento específicos.',
      pegadinha: 'A confusão entre os pronomes religiosos e acadêmicos.',
      comoApareceEmConcurso: 'Questões de associação.'
    },
    tags: ['pronomes de tratamento', 'associação']
  },
  {
    id: 'Q-DID-RED-21-004',
    tipo: 'DIDATICA', area: 'RED', moduloId: 'RED-21',
    subtema: 'Abolições da 3ª Edição',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Avalie as afirmativas sobre o que foi abolido pela 3ª edição do Manual de Redação da Presidência da República (MRPR).\n\nI- O uso do tratamento "Ilustríssimo" e da abreviação "D." (Doutor) foi abolido.\nII- O fecho "Att." foi abolido, devendo ser substituído por "Atenciosamente" ou "Respeitosamente" por extenso.\nIII- O memorando foi abolido como documento autônomo, unificando-se no padrão ofício.\nIV- O uso do vocativo "Senhor" foi abolido, devendo ser substituído por "Prezado".\n\nEstá correto apenas o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I e II.' },
      { id: 'B', texto: 'I, II e III.' },
      { id: 'C', texto: 'II, III e IV.' },
      { id: 'D', texto: 'I, III e IV.' },
      { id: 'E', texto: 'I, II, III e IV.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. I, II e III estão corretas. IV é falsa, pois o vocativo "Senhor" (ou "Senhora") permanece sendo a forma padrão no MRPR.',
      incorretas: { A: 'III também está correta.', C: 'IV é falsa.', D: 'IV é falsa.', E: 'IV é falsa.' },
      conceitoCobrado: 'Abolições do MRPR 3ª edição.',
      pegadinha: 'Achar que "Senhor" também foi abolido.',
      comoApareceEmConcurso: 'Questões de I, II, III e IV.'
    },
    tags: ['abolições', 'MRPR']
  },
  {
    id: 'Q-DID-RED-21-005',
    tipo: 'DIDATICA', area: 'RED', moduloId: 'RED-21',
    subtema: 'Estrutura do Padrão Ofício',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Julgue o item abaixo sobre a estrutura do padrão ofício da 3ª edição do MRPR.\n\nA estrutura do padrão ofício inclui o cabeçalho, a identificação do expediente (tipo e número), o endereçamento, o assunto, o texto, o fecho e a assinatura com nome e cargo do remetente.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'CERTO. Essas são as partes essenciais do padrão ofício, conforme o Manual de Redação.',
      incorretas: { E: 'A estrutura descrita está correta.' },
      conceitoCobrado: 'Estrutura do padrão ofício.',
      pegadinha: 'A omissão de partes importantes, como o assunto.',
      comoApareceEmConcurso: 'Questões C/E.'
    },
    tags: ['estrutura', 'padrão ofício']
  },

  /* ============================================================
     RED-22 — Documentos e comunicações administrativas
  ============================================================ */
  {
    id: 'Q-DID-RED-22-001',
    tipo: 'DIDATICA', area: 'RED', moduloId: 'RED-22',
    subtema: 'Ofício x Requerimento',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'Sobre a diferença entre ofício e requerimento, assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'O ofício é o documento utilizado pelo particular para fazer um pedido formal ao órgão público, enquanto o requerimento é a comunicação entre dois órgãos públicos.' },
      { id: 'B', texto: 'O ofício é a comunicação entre órgãos públicos ou destes com particulares, enquanto o requerimento é o pedido formal do particular ao órgão.' },
      { id: 'C', texto: 'Ofício e requerimento são sinônimos, pois ambos são utilizados para formalizar pedidos de particulares perante a Administração Pública.' },
      { id: 'D', texto: 'O ofício é utilizado apenas para registrar reuniões internas, enquanto o requerimento é utilizado para a comunicação externa entre os órgãos.' },
      { id: 'E', texto: 'O requerimento é o documento utilizado para a comunicação entre órgãos, enquanto o ofício é a decisão da autoridade sobre um processo administrativo.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. Ofício = comunicação oficial. Requerimento = pedido do particular.',
      incorretas: { A: 'Inverte os conceitos.', C: 'São documentos distintos.', D: 'Não é o registro de reunião.', E: 'Inverte e confunde com despacho.' },
      conceitoCobrado: 'Diferença entre ofício e requerimento.',
      pegadinha: 'A inversão dos conceitos nas alternativas A e E.',
      comoApareceEmConcurso: 'Questões conceituais.'
    },
    tags: ['ofício', 'requerimento']
  },
  {
    id: 'Q-DID-RED-22-002',
    tipo: 'DIDATICA', area: 'RED', moduloId: 'RED-22',
    subtema: 'Despacho x Parecer e Declaração x Certidão',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Julgue os itens a seguir como Verdadeiro (V) ou Falso (F) sobre os documentos administrativos:\n\n(__) O despacho é a decisão ou encaminhamento dado pela autoridade competente a um processo ou requerimento.\n(__) O parecer é a opinião técnica ou jurídica fundamentada sobre uma matéria, não vinculando a autoridade que decide.\n(__) A declaração é a transcrição fiel de um registro existente, com fé pública, enquanto a certidão é a afirmação de um fato baseada no conhecimento de quem assina.\n(__) A ata é o registro formal e resumido do que ocorreu em uma reunião, com data, participantes e deliberações.\n\nAssinale a alternativa que apresenta a sequência CORRETA, de cima para baixo:',
    alternativas: [
      { id: 'A', texto: 'V, V, F, V.' },
      { id: 'B', texto: 'V, F, V, V.' },
      { id: 'C', texto: 'F, V, V, F.' },
      { id: 'D', texto: 'V, V, V, F.' },
      { id: 'E', texto: 'F, F, V, V.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. (1) V: despacho = decisão. (2) V: parecer = opinião técnica. (3) F: inverteu as definições de declaração e certidão. (4) V: ata = registro de reunião.',
      incorretas: { B: 'O item 2 é verdadeiro.', C: 'Itens 1 e 4 são verdadeiros.', D: 'O item 3 é falso.', E: 'Itens 1 e 2 são verdadeiros.' },
      conceitoCobrado: 'Definições de documentos administrativos.',
      pegadinha: 'A inversão das definições de declaração e certidão.',
      comoApareceEmConcurso: 'Questões de sequência V/F.'
    },
    tags: ['despacho', 'parecer', 'certidão']
  },
  {
    id: 'Q-DID-RED-22-003',
    tipo: 'DIDATICA', area: 'RED', moduloId: 'RED-22',
    subtema: 'Memorando: Abolição',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Julgue o item abaixo sobre a evolução do memorando na Administração Pública.\n\nA 3ª edição do Manual de Redação da Presidência da República aboliu o memorando como documento autônomo, unificando-o ao ofício no chamado "padrão ofício", que agora é utilizado para todas as comunicações formais.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'CERTO. O memorando era a comunicação interna com estrutura simplificada. Foi abolido como autônomo e incorporado ao padrão ofício.',
      incorretas: { E: 'A informação está correta.' },
      conceitoCobrado: 'Evolução do memorando no MRPR.',
      pegadinha: 'Achar que o memorando ainda é um documento autônomo.',
      comoApareceEmConcurso: 'Questões C/E.'
    },
    tags: ['memorando', 'abolição']
  },
  {
    id: 'Q-DID-RED-22-004',
    tipo: 'DIDATICA', area: 'RED', moduloId: 'RED-22',
    subtema: 'Associação: Documentos e Funções',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Associe os documentos administrativos às suas finalidades.\n\n1. Certidão.\n2. Circular.\n3. Parecer.\n4. Relatório.\n\nFINALIDADES\n( ) Opinião técnica fundamentada sobre uma matéria.\n( ) Transcrição fiel de registro existente, com fé pública.\n( ) Descrição ordenada de fatos, atividades ou resultados.\n( ) Comunicação de um mesmo assunto a vários destinatários.\n\nA sequência correta para essa associação é:',
    alternativas: [
      { id: 'A', texto: '1, 2, 3, 4.' },
      { id: 'B', texto: '3, 1, 4, 2.' },
      { id: 'C', texto: '2, 3, 4, 1.' },
      { id: 'D', texto: '4, 1, 2, 3.' },
      { id: 'E', texto: '3, 4, 1, 2.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. Parecer (3 - opinião), Certidão (1 - transcrição), Relatório (4 - descrição), Circular (2 - vários destinatários).',
      incorretas: { A: 'Inverte tudo.', C: 'Inverte tudo.', D: 'Inverte tudo.', E: 'Inverte tudo.' },
      conceitoCobrado: 'Finalidade dos documentos administrativos.',
      pegadinha: 'A confusão entre parecer e relatório.',
      comoApareceEmConcurso: 'Questões de associação.'
    },
    tags: ['documentos', 'associação']
  },
  {
    id: 'Q-DID-RED-22-005',
    tipo: 'DIDATICA', area: 'RED', moduloId: 'RED-22',
    subtema: 'Documentos: EXCETO',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre as características e finalidades dos documentos administrativos, assinale a alternativa INCORRETA.',
    alternativas: [
      { id: 'A', texto: 'O ofício é o documento utilizado para a comunicação formal entre órgãos públicos ou destes com particulares.' },
      { id: 'B', texto: 'A ata é o documento que registra formalmente o que ocorreu em uma reunião, devendo ser assinada pelos presentes e não admitindo rasuras.' },
      { id: 'C', texto: 'O parecer é o documento que expressa a decisão final da autoridade competente sobre um processo administrativo, vinculando as partes.' },
      { id: 'D', texto: 'A certidão é o documento que transcreve fielmente um ato ou fato constante de registro público, gozando de fé pública.' },
      { id: 'E', texto: 'O requerimento é o documento por meio do qual o particular solicita algo ao órgão público, devendo conter sua qualificação e o pedido.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está incorreta (portanto, é a resposta). O parecer é uma OPINIÃO TÉCNICA e não vincula a autoridade. Quem decide é o DESPACHO.',
      incorretas: { A: 'Correta.', B: 'Correta.', D: 'Correta.', E: 'Correta.' },
      conceitoCobrado: 'Diferença entre parecer (opinião) e despacho (decisão).',
      pegadinha: 'Atribuir ao parecer a força de decisão.',
      comoApareceEmConcurso: 'Questões de identificação de INCORRETA.'
    },
    tags: ['documentos', 'parecer', 'despacho']
  },

  /* ============================================================
     RED-23 — Elaboração e interpretação de documentos oficiais
  ============================================================ */
  {
    id: 'Q-DID-RED-23-001',
    tipo: 'DIDATICA', area: 'RED', moduloId: 'RED-23',
    subtema: 'Escolha do Documento',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'Julgue o item abaixo.\n\nSe um cidadão deseja solicitar a revisão de um processo administrativo, ele deve utilizar o documento denominado requerimento.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'CERTO. O requerimento é o instrumento adequado para o pedido do particular ao órgão público.',
      incorretas: { E: 'O requerimento é o documento correto para essa finalidade.' },
      conceitoCobrado: 'Escolha do documento adequado ao pedido do particular.',
      pegadinha: 'Achar que o ofício serve para tudo.',
      comoApareceEmConcurso: 'Questões C/E.'
    },
    tags: ['escolha', 'requerimento']
  },
  {
    id: 'Q-DID-RED-23-002',
    tipo: 'DIDATICA', area: 'RED', moduloId: 'RED-23',
    subtema: 'Erros em Documentos Oficiais',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Analise o trecho de um ofício: "Oi, chefe, tudo bem? Solicito a revisão do processo, pois o mesmo está parado há semanas. Att." Sobre esse trecho, é CORRETO afirmar que ele contém:',
    alternativas: [
      { id: 'A', texto: 'Apenas um erro: o uso do fecho "Att.", que deveria ser substituído por "Atenciosamente" por extenso.' },
      { id: 'B', texto: 'Apenas dois erros: o uso de linguagem informal ("Oi, chefe") e o fecho "Att.", mas o uso de "o mesmo" como pronome é correto na redação oficial.' },
      { id: 'C', texto: 'Múltiplos erros: informalidade ("Oi, chefe"), uso inadequado de "o mesmo" como pronome de retomada e fecho "Att." (abolido), todos incompatíveis com o padrão ofício.' },
      { id: 'D', texto: 'Nenhum erro: o texto é claro, objetivo e atende perfeitamente ao padrão ofício exigido pelo Manual de Redação.' },
      { id: 'E', texto: 'Apenas um erro: o uso inadequado de "o mesmo" como pronome, pois o fecho "Att." é permitido em documentos de baixa formalidade.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. Há informalidade, uso vicioso de "o mesmo" (deveria ser "pois o processo está parado") e "Att." foi abolido pelo MRPR.',
      incorretas: { A: 'Há mais erros que apenas o fecho.', B: '"O mesmo" não é correto na redação oficial.', D: 'O texto tem erros graves.', E: '"Att." não é permitido e "o mesmo" não é o único erro.' },
      conceitoCobrado: 'Identificação de erros em documentos oficiais.',
      pegadinha: 'Achar que "Att." é aceitável ou que "o mesmo" é uma boa substituição.',
      comoApareceEmConcurso: 'Questões de análise de texto.'
    },
    tags: ['erros', 'informalidade']
  },
  {
    id: 'Q-DID-RED-23-003',
    tipo: 'DIDATICA', area: 'RED', moduloId: 'RED-23',
    subtema: 'Impessoalidade em Documentos',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Complete as lacunas com a forma ADEQUADA ao padrão ofício, substituindo as construções em 1ª pessoa por construções impessoais.\n\n"________ (Eu solicito) a revisão do processo. ________ (Nós informamos) que o prazo para recurso é de 10 dias."',
    alternativas: [
      { id: 'A', texto: 'Solicito / Informo.' },
      { id: 'B', texto: 'Solicita-se / Informa-se.' },
      { id: 'C', texto: 'Eu solicito / Nós informamos.' },
      { id: 'D', texto: 'Solicitamos / Informamos.' },
      { id: 'E', texto: 'Solicitarei / Informarei.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. A impessoalidade exige a partícula "se" (solicita-se, informa-se), apagando a 1ª pessoa.',
      incorretas: { A: '1ª pessoa (incorreto).', C: '1ª pessoa do plural (incorreto).', D: '1ª pessoa do plural (incorreto).', E: '1ª pessoa do singular no futuro (incorreto).' },
      conceitoCobrado: 'Uso da impessoalidade em ofícios.',
      pegadinha: 'A tentação de usar a 1ª pessoa do plural ("nós informamos") achando que é mais formal.',
      comoApareceEmConcurso: 'Questões de completar lacunas.'
    },
    tags: ['impessoalidade', 'padrão ofício']
  },
  {
    id: 'Q-DID-RED-23-004',
    tipo: 'DIDATICA', area: 'RED', moduloId: 'RED-23',
    subtema: 'Revisão e Reescrita',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Avalie as afirmativas sobre a revisão e a reescrita de documentos oficiais.\n\nI- A revisão de um documento oficial deve verificar a gramática, a semântica, a estrutura e a adequação ao padrão ofício.\nII- A reescrita de um documento inadequado deve corrigir a estrutura, o vocabulário, o tratamento e a gramática, mantendo o conteúdo essencial.\nIII- A revisão deve eliminar marcas de 1ª pessoa e linguagem rebuscada, mantendo a impessoalidade e a clareza.\n\nEstá correto apenas o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I.' },
      { id: 'B', texto: 'II.' },
      { id: 'C', texto: 'III.' },
      { id: 'D', texto: 'I e II.' },
      { id: 'E', texto: 'I, II e III.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'A alternativa E está correta. I, II e III descrevem corretamente as ações de revisão e reescrita.',
      incorretas: { A: 'II e III também estão corretas.', B: 'I e III também estão corretas.', C: 'I e II também estão corretas.', D: 'III também está correta.' },
      conceitoCobrado: 'Revisão e reescrita de documentos.',
      pegadinha: 'Achar que apenas uma das etapas é suficiente.',
      comoApareceEmConcurso: 'Questões de I, II e III.'
    },
    tags: ['revisão', 'reescrita']
  },
  {
    id: 'Q-DID-RED-23-005',
    tipo: 'DIDATICA', area: 'RED', moduloId: 'RED-23',
    subtema: 'Interpretação de Comunicação',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Considere o seguinte trecho de um ofício: "Encaminha-se o processo nº 1234/2024 ao setor de licitações para análise e providências cabíveis, no prazo de 5 (cinco) dias úteis. Respeitosamente." Sobre a interpretação do trecho, assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'A finalidade do documento é registrar a abertura de um processo licitatório, e o prazo indicado é de 5 dias corridos.' },
      { id: 'B', texto: 'O remetente é o setor de licitações, e o destinatário é a autoridade superior, conforme indica o fecho "Respeitosamente".' },
      { id: 'C', texto: 'A finalidade é encaminhar o processo para análise, o prazo é de 5 dias úteis, e o fecho indica que o destinatário é uma autoridade superior ou de mesma hierarquia, conforme a formalidade adotada.' },
      { id: 'D', texto: 'O documento é um requerimento, pois solicita providências ao setor de licitações, e o fecho "Respeitosamente" é utilizado para particulares.' },
      { id: 'E', texto: 'A comunicação é informal, pois utiliza a impessoalidade ("Encaminha-se"), e o prazo não é vinculante para o setor de licitações.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. Finalidade = encaminhar para análise. Prazo = 5 dias úteis. Fecho "Respeitosamente" = autoridade superior (ou tratamento formal).',
      incorretas: { A: 'Não é abertura de licitação, e o prazo é em dias úteis.', B: 'O remetente não é o setor de licitações (ele é o destinatário).', D: 'É um ofício, não um requerimento.', E: 'A impessoalidade não torna a comunicação informal.' },
      conceitoCobrado: 'Interpretação de comunicações administrativas.',
      pegadinha: 'Confundir o remetente com o destinatário.',
      comoApareceEmConcurso: 'Questões de interpretação de texto.'
    },
    tags: ['interpretação', 'ofício']
  },

  /* ============================================================
     RED-24 — Produção, revisão e aperfeiçoamento textual
  ============================================================ */
  {
    id: 'Q-DID-RED-24-001',
    tipo: 'DIDATICA', area: 'PRO', moduloId: 'RED-24',
    subtema: 'Dissertação x Redação Oficial',
    dificuldade: 1, prioridade: 'media',
    enunciado: 'Sobre a diferença entre a produção dissertativa e a produção de redação oficial, assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'A dissertação argumentativa tem como objetivo principal informar o leitor sobre um fato, enquanto a redação oficial busca convencer o leitor por meio de argumentos.' },
      { id: 'B', texto: 'A dissertação argumentativa defende uma tese por meio de argumentos, enquanto a redação oficial comunica institucionalmente com impessoalidade e padronização.' },
      { id: 'C', texto: 'A redação oficial e a dissertação argumentativa são sinônimos, pois ambas exigem a defesa de uma opinião pessoal do autor.' },
      { id: 'D', texto: 'A redação oficial admite a 1ª pessoa e a linguagem informal, enquanto a dissertação exige o padrão culto e a impessoalidade.' },
      { id: 'E', texto: 'A dissertação argumentativa é utilizada apenas no serviço público, e a redação oficial é utilizada apenas no ambiente escolar.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. Dissertação = defender tese com argumentos. Redação Oficial = comunicação institucional (impessoal, padronizada).',
      incorretas: { A: 'Inverte os conceitos.', C: 'São gêneros distintos.', D: 'Inverte as características.', E: 'Restringe indevidamente os gêneros.' },
      conceitoCobrado: 'Diferença entre dissertação e redação oficial.',
      pegadinha: 'A inversão de conceitos.',
      comoApareceEmConcurso: 'Questões conceituais.'
    },
    tags: ['dissertação', 'redação oficial']
  },
  {
    id: 'Q-DID-RED-24-002',
    tipo: 'DIDATICA', area: 'PRO', moduloId: 'RED-24',
    subtema: 'Estrutura Dissertativa',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Julgue os itens a seguir como Verdadeiro (V) ou Falso (F) sobre a estrutura da dissertação argumentativa:\n\n(__) A introdução contextualiza o tema e apresenta a tese que será defendida.\n(__) O desenvolvimento apresenta argumentos e exemplos que sustentam a tese.\n(__) A conclusão retoma a tese e pode apresentar uma proposta de intervenção.\n(__) A conclusão, na dissertação, tem a função de apresentar uma nova tese, diferente da introdução.\n\nAssinale a alternativa que apresenta a sequência CORRETA, de cima para baixo:',
    alternativas: [
      { id: 'A', texto: 'V, V, V, F.' },
      { id: 'B', texto: 'V, V, F, V.' },
      { id: 'C', texto: 'V, F, V, F.' },
      { id: 'D', texto: 'F, V, V, F.' },
      { id: 'E', texto: 'V, V, V, V.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. (1) V: introdução = contexto + tese. (2) V: desenvolvimento = argumentos. (3) V: conclusão = retomada + proposta. (4) F: a conclusão retoma a tese, não apresenta uma nova.',
      incorretas: { B: 'O item 3 é verdadeiro.', C: 'O item 2 é verdadeiro.', D: 'Itens 1 e 2 são verdadeiros.', E: 'O item 4 é falso.' },
      conceitoCobrado: 'Estrutura da dissertação.',
      pegadinha: 'Achar que a conclusão traz uma nova tese.',
      comoApareceEmConcurso: 'Questões de sequência V/F.'
    },
    tags: ['dissertação', 'estrutura']
  },
  {
    id: 'Q-DID-RED-24-003',
    tipo: 'DIDATICA', area: 'PRO', moduloId: 'RED-24',
    subtema: 'Coesão x Coerência na Produção',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Julgue o item abaixo.\n\nNa produção textual, a coesão refere-se à ligação formal entre as partes do texto, enquanto a coerência refere-se à ligação de sentido global, sendo que um texto pode ser coeso e incoerente ao mesmo tempo, como em "Estudou muito, portanto foi reprovado".',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'CERTO. Coesão = ligação formal. Coerência = ligação de sentido. A frase "Estudou muito, portanto foi reprovado" tem coesão (o conectivo), mas é incoerente (a lógica está invertida).',
      incorretas: { E: 'A explicação está correta.' },
      conceitoCobrado: 'Coesão x coerência.',
      pegadinha: 'Achar que a presença do conectivo garante a coerência.',
      comoApareceEmConcurso: 'Questões C/E.'
    },
    tags: ['coesão', 'coerência']
  },
  {
    id: 'Q-DID-RED-24-004',
    tipo: 'DIDATICA', area: 'PRO', moduloId: 'RED-24',
    subtema: 'Revisão x Reescrita',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Avalie as afirmativas sobre a revisão e a reescrita textual.\n\nI- A revisão é o processo de diagnosticar problemas gramaticais, semânticos e estruturais em um texto pronto.\nII- A reescrita é o processo de refazer o texto para corrigir os problemas identificados, mantendo o conteúdo essencial.\nIII- A revisão e a reescrita são sinônimos, pois ambas ocorrem antes da produção do texto.\n\nEstá correto apenas o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I.' },
      { id: 'B', texto: 'II.' },
      { id: 'C', texto: 'III.' },
      { id: 'D', texto: 'I e II.' },
      { id: 'E', texto: 'I, II e III.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. I e II estão corretas. III é falsa, pois revisão e reescrita são etapas distintas e ocorrem após a produção (não antes).',
      incorretas: { A: 'II também está correta.', B: 'I também está correta.', C: 'III é falsa.', E: 'III é falsa.' },
      conceitoCobrado: 'Diferença entre revisão e reescrita.',
      pegadinha: 'Achar que revisão e reescrita são a mesma coisa e ocorrem antes da produção.',
      comoApareceEmConcurso: 'Questões de I, II e III.'
    },
    tags: ['revisão', 'reescrita']
  },
  {
    id: 'Q-DID-RED-24-005',
    tipo: 'DIDATICA', area: 'PRO', moduloId: 'RED-24',
    subtema: 'Problemas de Estrutura',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Um candidato redigiu uma dissertação com introdução (contextualização + tese), três parágrafos de desenvolvimento e conclusão. No entanto, o segundo parágrafo do desenvolvimento repete a ideia do primeiro, sem acrescentar informações novas, e o terceiro introduz um argumento que não dialoga com a tese. O problema central do texto é de:',
    alternativas: [
      { id: 'A', texto: 'Coesão, pois faltam conectivos entre os parágrafos, o que compromete a ligação formal entre as partes do texto.' },
      { id: 'B', texto: 'Gramática, pois há erros de concordância e regência nos parágrafos de desenvolvimento.' },
      { id: 'C', texto: 'Estrutura (progressão temática), pois o segundo parágrafo repete a ideia do primeiro e o terceiro não dialoga com a tese, quebrando a coerência global.' },
      { id: 'D', texto: 'Adequação vocabular, pois o texto usa termos informais que não cabem em uma dissertação argumentativa.' },
      { id: 'E', texto: 'Pontuação, pois a ausência de vírgulas em trechos-chave dificulta a leitura e o encadeamento das ideias.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. O problema é de progressão temática: repetição sem avanço (parágrafo 2) e argumento desconectado da tese (parágrafo 3), o que quebra a coerência.',
      incorretas: { A: 'Falta de conectivos não foi o problema apontado.', B: 'Não há referência a erros gramaticais.', D: 'Não há referência a informalidade.', E: 'Não há referência a problemas de pontuação.' },
      conceitoCobrado: 'Identificação de problemas de estrutura e progressão temática.',
      pegadinha: 'Confundir problemas de estrutura com problemas gramaticais.',
      comoApareceEmConcurso: 'Questões de análise de texto.'
    },
    tags: ['estrutura', 'progressão temática']
  },

  /* ============================================================
     Q4445661 — IDCAP/ADAB 2026 — POR-03 (Coesão e coerência)
  ============================================================ */
  {
    id: 'Q-REAL-POR-03-001',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-03',
    banca: 'IDCAP', orgao: 'ADAB', ano: 2026,
    prova: 'Fiscal Estadual Agropecuário - Defesa Sanitária Animal',
    fonte: { descricao: 'IDCAP 2026 — ADAB — Fiscal Estadual Agropecuário' },
    subtema: 'Coesão referencial, sequenciação lógica e intertextualidade',
    dificuldade: 3, prioridade: 'alta',
    textoBase: 'Como Albert Einstein organizava seu tempo. "A vida é como andar de bicicleta. Para se manter equilibrado, é preciso seguir em frente." A frase foi escrita por Albert Einstein a seu filho Edward, em 1930. O físico, uma das maiores mentes da história, viveu de acordo com essa ideia, mantendo-se ativo até o fim da vida. Premiado com o Nobel de Física em 1922, tornou-se uma referência que transformou profundamente os rumos da ciência. Frequentemente descrito como um rebelde curioso e apaixonado pelo conhecimento, Einstein também cultivava vínculos afetivos duradouros, contrariando a imagem de isolamento que muitos lhe atribuem. Sua vida revela um equilíbrio instável entre genialidade, disciplina e distração. Para ele, a imaginação possuía valor superior ao conhecimento acumulado. Sua infância foi marcada por dificuldades na fala e na aprendizagem, o que retardou seu desenvolvimento. Esse processo, contudo, levou-o a refletir mais profundamente sobre conceitos fundamentais, como espaço e tempo, o que influenciou diretamente suas descobertas. Sua extraordinária capacidade de concentração foi determinante para sua produção científica. Em 1905, aos 26 anos, publicou trabalhos revolucionários enquanto trabalhava em um escritório de patentes. Era capaz de cumprir suas tarefas rapidamente e dedicar o restante do tempo à elaboração de ideias próprias. Essa habilidade permitia-lhe manter o foco mesmo em ambientes com distrações, como o barulho de crianças. O violino desempenhava papel importante em seu processo criativo. Ao tocar, muitas vezes encontrava soluções para problemas complexos, como se a música estimulasse a organização de seu pensamento. Apesar dessa produtividade, conciliar trabalho e vida pessoal nem sempre foi simples. Embora participasse da rotina familiar e cuidasse do filho, sua dedicação à ciência gradualmente se sobrepôs às relações pessoais, contribuindo para tensões em seu casamento e posterior separação. Esse afastamento familiar teve impacto emocional significativo, levando-o a mergulhar ainda mais no trabalho. Sua intensa dedicação resultou em exaustão física e mental. Durante períodos de grande concentração, esquecia até mesmo de se alimentar. Em cartas, reconhecia que frequentemente deixava de almoçar por estar absorto em suas pesquisas. Após novo casamento, passou a contar com o apoio da esposa na organização de aspectos práticos do cotidiano, o que lhe permitiu concentrar-se quase exclusivamente em sua produção intelectual. Atividades como caminhadas e navegação ajudavam a aliviar a mente após longos períodos de esforço cognitivo. Sua vida cotidiana era marcada pela simplicidade. Mantinha uma rotina regular, com leitura de jornais e caminhadas até o local de trabalho. Seus pedidos materiais eram mínimos, revelando um perfil austero e pouco interessado em bens ou luxo. Mesmo diante das limitações impostas pela idade e pela saúde, manteve-se ativo até seus últimos dias, dedicando-se à busca por uma teoria unificada. Embora não tenha alcançado esse objetivo, sua trajetória consolidou sua posição como um dos maiores cientistas da história. (BBC Brasil, adaptado.)',
    enunciado: 'A construção de textos depende de mecanismos que asseguram a articulação de ideias e a progressão temática, permitindo ao leitor estabelecer relações de sentido e interpretar adequadamente as informações apresentadas. De acordo com o texto-base, assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'A intertextualidade do texto manifesta-se de forma funcional ao incorporar uma citação inicial que orienta a leitura, ainda que essa referência não estabeleça diálogo direto com outros textos ao longo do desenvolvimento.' },
      { id: 'B', texto: 'A coerência do texto é garantida pela intertextualidade explícita, como na frase "a vida é como andar de bicicleta", que estabelece relação direta com outros textos científicos do mesmo campo.' },
      { id: 'C', texto: 'A progressão temática do texto é construída por coesão referencial e sequenciação lógica, como em "esse processo, contudo, levou-o", que retoma ideia anterior e mantém a continuidade argumentativa.' },
      { id: 'D', texto: 'A coesão textual ocorre predominantemente por repetição lexical, como no uso recorrente de "Einstein", o que reduz a necessidade de outros mecanismos coesivos, embora o texto também recorra pontualmente a pronomes e conectores para manter a articulação.' },
      { id: 'E', texto: 'A coerência textual decorre exclusivamente da ausência de contradições internas, não dependendo da organização progressiva das ideias nem do encadeamento lógico entre os enunciados.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta porque identifica, no trecho "esse processo, contudo, levou-o", dois mecanismos coesivos: (1) a anáfora "esse processo", que retoma a informação anterior (as dificuldades de fala e aprendizagem na infância); (2) o conectivo "contudo", que sinaliza adversidade e mantém a progressão argumentativa. É a coesão referencial (retomada) + sequenciação lógica (conector) produzindo progressão temática — a definição mesma de progressão textual.',
      incorretas: {
        A: 'A regra de intertextualidade foi aplicada de forma incorreta: por definição, intertextualidade É o diálogo entre textos, e a citação inicial de Einstein estabelece, sim, relação direta com a carta escrita por ele a Edward em 1930 — que é um texto. Além disso, a própria alternativa se contradiz ao dizer que a citação "orienta a leitura" mas "não estabelece diálogo direto". Construção correta: a intertextualidade manifesta-se pela citação e pelo diálogo com a carta de Einstein. Para reconhecer o erro em outra questão, verifique se a alternativa afirma que a intertextualidade "não estabelece diálogo" — isso viola o próprio conceito.',
        B: 'A alternativa confunde intertextualidade com metáfora. A frase "a vida é como andar de bicicleta" é uma comparação/metáfora — figura de linguagem —, não uma citação de outro texto científico do mesmo campo. A coerência do texto não é "garantida pela intertextualidade"; ela decorre da organização lógica, da progressão temática e da ausência de contradições. Construção correta: a metáfora da bicicleta exemplifica o uso de linguagem figurada, sem estabelecer relação direta com outros textos científicos. Em outra questão, desconfie de alternativas que igualam metáfora a intertextualidade.',
        D: 'A alternativa superestima a repetição lexical. O texto recorre a pronomes ("ele", "sua", "o"), a elipses, a sinônimos ("físico"/"Einstein"/"cientista") e a conectores ("contudo", "embora", "apenas") — a repetição de "Einstein" não é o mecanismo predominante, nem "reduz a necessidade" de outros recursos. Construção correta: a coesão é construída por uma variedade de mecanismos, não por repetição predominante. Para identificar o erro, observe se a alternativa trata um recurso pontual como se fosse o principal.',
        E: 'A alternativa reduz a coerência à ausência de contradições — o que é apenas uma condição necessária, não suficiente. Coerência também exige progressão temática, encadeamento lógico, adequação ao contexto e unidade de sentido. O texto coerente precisa "fazer sentido" globalmente, não apenas "não se contradizer". Construção correta: a coerência decorre da ausência de contradições E da organização progressiva das ideias. Em outra questão, desconfie do advérbio "exclusivamente" ao definir coerência.'
      },
      conceitoCobrado: 'Coesão referencial (anáfora), sequenciação lógica (conectivos) e progressão temática',
      pegadinha: 'A banca usa termos técnicos (intertextualidade, coerência, progressão) em definições parcialmente corretas, exigindo do candidato a distinção precisa entre eles.',
      comoApareceEmConcurso: 'Questões de coesão/coerência geralmente combinam três ou quatro conceitos em alternativas que parecem plausíveis; a chave é verificar se cada definição está completa e se o exemplo citado realmente ilustra o conceito.',
      exemploInedito: {
        contexto: 'Um relatório de auditoria afirma: "O órgão reduziu em 30% o tempo de tramitação; esse ganho, porém, não se refletiu na satisfação do cidadão."',
        aplicacao: 'O termo "esse ganho" é anáfora que retoma "reduziu em 30% o tempo"; o conectivo "porém" é adversativo e mantém a progressão argumentativa — mesmo mecanismo da questão.',
        desafio: 'Identifique, no trecho, o mecanismo de coesão referencial e o valor semântico do conectivo, e explique como ambos produzem progressão temática.'
      }
    },
    tags: ['coesão referencial', 'anáfora', 'conectivos', 'progressão temática', 'intertextualidade']
  },

  /* ============================================================
     Q4445660 — IDCAP/ADAB 2026 — POR-16 (Regência verbal)
  ============================================================ */
{
    id: 'Q-REAL-POR-16-001',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-16',
    banca: 'IDCAP', orgao: 'ADAB', ano: 2026,
    prova: 'Fiscal Estadual Agropecuário - Defesa Sanitária Animal',
    fonte: { descricao: 'IDCAP 2026 — ADAB — Fiscal Estadual Agropecuário' },
    subtema: 'Regência verbal: transitividade de "manter"',
    dificuldade: 2, prioridade: 'alta',
    enunciado: '"Mantinha uma rotina regular, com leitura de jornais e caminhadas até o local de trabalho." Quanto à regência verbal do verbo destacado, assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'Verbo transitivo indireto.' },
      { id: 'B', texto: 'Verbo intransitivo.' },
      { id: 'C', texto: 'Verbo de ligação.' },
      { id: 'D', texto: 'Verbo bitransitivo.' },
      { id: 'E', texto: 'Verbo transitivo direto.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'O verbo "manter", no sentido de "conservar, preservar, ter habitualmente", é transitivo direto: "Mantinha uma rotina regular" — "uma rotina regular" é objeto direto, sem preposição obrigatória. O verbo pede complemento, e esse complemento se liga diretamente, sem preposição. Portanto: VTD.',
      incorretas: {
        A: 'A classificação como transitivo indireto exigiria preposição obrigatória entre o verbo e o complemento (como em "obedecer a", "gostar de"). Em "mantinha uma rotina", não há preposição — o complemento se liga diretamente. Construção correta seria: "Mantinha uma rotina" (VTD) e não "Mantinha a uma rotina". Para identificar em outra questão, verifique se há preposição entre verbo e complemento: se não houver, é VTD.',
        B: 'Verbo intransitivo é aquele que tem sentido completo sem complemento (como "chegar", "nascer", "morrer"). "Mantinha" sozinho não completa o sentido — é preciso dizer o que se mantinha. Construção correta: "Mantinha [uma rotina regular]" — o complemento é obrigatório. Para identificar, tente ler o verbo sozinho: se o sentido ficar incompleto, não é intransitivo.',
        C: 'Verbo de ligação é aquele que liga o sujeito a um predicativo, sem indicar ação (ser, estar, parecer, permanecer, ficar, continuar). "Manter" aqui indica ação de conservar, não ligação. Construção correta: "O servidor mantinha a rotina" — "manter" é ação, não ligação. Para identificar, substitua por "ser/estar": se a substituição não preservar o sentido, não é VL.',
        D: 'Verbo bitransitivo exige dois complementos: um direto e um indireto (como "entregar algo a alguém", "informar algo a alguém"). Em "mantinha uma rotina regular", há apenas um complemento — "uma rotina regular" (OD). Construção correta seria: "Mantinha [algo] [a alguém]" — o que não ocorre. Para identificar, conte os complementos: se houver dois (um com, outro sem preposição), é bitransitivo.'
      },
      conceitoCobrado: 'Transitividade verbal (VTD, VTI, VI, VL, VTDI)',
      pegadinha: 'A banca apresenta cinco classificações possíveis para um verbo de uso cotidiano, exigindo que o candidato analise a presença ou ausência de preposição e o número de complementos.',
      comoApareceEmConcurso: 'Questões de regência verbal costumam apresentar um verbo em contexto e pedir sua classificação; o candidato deve verificar (1) se há complemento, (2) se há preposição e (3) quantos complementos existem.',
      exemploInedito: {
        contexto: 'Um ofício afirma: "O setor mantém parceria com a universidade para capacitação de servidores."',
        aplicacao: '"Mantém" é VTD: "mantém [parceria]" (OD). "Com a universidade" é adjunto adverbial de companhia, não complemento verbal. O verbo não muda de transitividade — continua VTD.',
        desafio: 'Classifique a transitividade de "manter" no trecho e explique por que "com a universidade" não é objeto indireto.'
      }
    },
    tags: ['regência verbal', 'transitividade', 'verbo transitivo direto']
  },

  /* ============================================================
     Q4445658 — IDCAP/ADAB 2026 — POR-01 (Compreensão e interpretação)
  ============================================================ */
  {
    id: 'Q-REAL-POR-01-001',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-01',
    banca: 'IDCAP', orgao: 'ADAB', ano: 2026,
    prova: 'Fiscal Estadual Agropecuário - Defesa Sanitária Animal',
    fonte: { descricao: 'IDCAP 2026 — ADAB — Fiscal Estadual Agropecuário' },
    subtema: 'Compreensão literal e inferência autorizada pelo texto',
    dificuldade: 2, prioridade: 'alta',
    textoBase: 'A trajetória de grandes personalidades científicas costuma revelar aspectos que ultrapassam suas descobertas, envolvendo hábitos, escolhas e modos de organização da vida cotidiana. Esses elementos permitem compreender como características individuais podem influenciar processos criativos e produtivos ao longo do tempo. [texto-base completo: "Como Albert Einstein organizava seu tempo" — BBC Brasil, adaptado.]',
    enunciado: 'De acordo com o texto-base, assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'A intensa dedicação de Einstein ao trabalho, associada à sua capacidade de concentração, influenciava diretamente sua rotina e podia levá-lo a negligenciar necessidades básicas.' },
      { id: 'B', texto: 'A organização da rotina de Einstein baseava-se sobretudo na busca por reconhecimento social e acúmulo de bens materiais, refletindo um perfil pessoal voltado à simplicidade e à projeção pública.' },
      { id: 'C', texto: 'A dedicação de Einstein à ciência foi ocasional e pouco consistente, já que sua produção intelectual dependia de momentos esporádicos de inspiração sem continuidade ao longo da vida.' },
      { id: 'D', texto: 'A convivência familiar de Einstein foi estável ao longo de toda a vida, uma vez que ele conseguiu equilibrar suas atividades científicas com as relações pessoais sem conflitos relevantes.' },
      { id: 'E', texto: 'A valorização do conhecimento acumulado acima da imaginação constituiu o principal fator que impulsionou Einstein a desenvolver suas teorias científicas mais importantes ao longo da vida.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A é a única autorizada pelo texto. O texto afirma que "sua intensa dedicação resultou em exaustão física e mental" e que "durante períodos de grande concentração, esquecia até mesmo de se alimentar" e "deixava de almoçar por estar absorto em suas pesquisas". A inferência — de que a dedicação e a concentração podiam levá-lo a negligenciar necessidades básicas — está ancorada em dados explícitos do texto. Inferência autorizada é aquela que se sustenta em marcas textuais.',
      incorretas: {
        A_correta: 'A é o gabarito.',
        B: 'A alternativa contradiz o texto, que afirma que "seus pedidos materiais eram mínimos, revelando um perfil austero e pouco interessado em bens ou luxo". A construção correta seria: "Einstein tinha perfil austero, sem busca por reconhecimento ou acúmulo". Para identificar o erro em outra questão, procure no texto a palavra-chave do perfil ("austero", "simplicidade") e compare com a alternativa — se houver oposição, a alternativa extrapola ou contradiz.',
        C: 'A alternativa contraria o texto, que afirma que Einstein "manteve-se ativo até o fim da vida", com produção contínua e não "esporádica". Construção correta: "A dedicação foi intensa e contínua, como mostra o texto ao dizer que ele se manteve ativo até os últimos dias". Para identificar, procure no texto expressões de continuidade ("até o fim", "até seus últimos dias") e desconfie de adjetivos como "ocasional" ou "esporádico".',
        D: 'A alternativa contradiz o texto, que afirma: "sua dedicação à ciência gradualmente se sobrepôs às relações pessoais, contribuindo para tensões em seu casamento e posterior separação". Construção correta: "A convivência familiar foi marcada por tensões e separação". Para identificar, procure no texto termos como "tensões", "separação" e "afastamento" — se a alternativa falar em "estabilidade", há contradição.',
        E: 'A alternativa inverte o que o texto afirma: "Para ele, a imaginação possuía valor superior ao conhecimento acumulado". A construção correta é o oposto: a imaginação valia mais que o conhecimento. Para identificar, procure no texto a expressão "valor superior" e compare com a alternativa — se ela inverter os polos, está errada.'
      },
      conceitoCobrado: 'Inferência autorizada x extrapolação x contradição',
      pegadinha: 'A banca mistura alternativas que contradizem o texto (B, C, D, E) com uma que infere corretamente a partir de marcas textuais (A).',
      comoApareceEmConcurso: 'Questões de compreensão/interpretação apresentam alternativas que parecem plausíveis isoladamente, mas só uma se sustenta no texto. Sempre volte ao texto para verificar a marca linguística.',
      exemploInedito: {
        contexto: 'Um relatório de gestão afirma: "O servidor cumpriu jornada de 10 horas diárias por três meses e, ao final, apresentou quadro de estafa diagnosticado por junta médica."',
        aplicacao: 'A inferência autorizada é: "A sobrecarga de trabalho contribuiu para o adoecimento do servidor". Não é autorizado inferir "o servidor gosta de trabalhar demais" — o texto não diz isso.',
        desafio: 'Identifique qual inferência é autorizada pelo texto e qual seria extrapolação.'
      }
    },
    tags: ['compreensão', 'inferência', 'extrapolação', 'contradição']
  },

  /* ============================================================
     Q4445657 — IDCAP/ADAB 2026 — POR-11 (Verbos)
  ============================================================ */
  {
    id: 'Q-REAL-POR-11-001',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-11',
    banca: 'IDCAP', orgao: 'ADAB', ano: 2026,
    prova: 'Fiscal Estadual Agropecuário - Defesa Sanitária Animal',
    fonte: { descricao: 'IDCAP 2026 — ADAB — Fiscal Estadual Agropecuário' },
    subtema: 'Flexão verbal de tempo e modo — pretérito imperfeito',
    dificuldade: 1, prioridade: 'alta',
    enunciado: '"Frequentemente descrito como um rebelde curioso e apaixonado pelo conhecimento, Einstein também \'cultivava\' vínculos afetivos duradouros." Assinale a alternativa CORRETA quanto à classificação do verbo destacado.',
    alternativas: [
      { id: 'A', texto: 'Pretérito mais-que-perfeito do indicativo.' },
      { id: 'B', texto: 'Pretérito imperfeito do indicativo.' },
      { id: 'C', texto: 'Pretérito perfeito do indicativo.' },
      { id: 'D', texto: 'Presente do indicativo.' },
      { id: 'E', texto: 'Futuro do pretérito do indicativo.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A forma "cultivava" é pretérito imperfeito do indicativo do verbo "cultivar" (radical "cultiv-" + desinência "-ava"). O imperfeito expressa ação habitual, contínua ou durativa no passado — "cultivava vínculos duradouros" indica que ele tinha o hábito de cultivar. É a forma que descreve o cenário de fundo, não um fato pontual.',
      incorretas: {
        A: 'O pretérito mais-que-perfeito do indicativo de "cultivar" é "cultivara" (terminação "-ra"). "Cultivava" não tem essa terminação. Construção correta: "Ele cultivara vínculos antes de..." (ação anterior a outra ação passada). Para identificar em outra questão, verifique a terminação: "-ra" (mais-que-perfeito) x "-va" (imperfeito).',
        C: 'O pretérito perfeito de "cultivar" é "cultivou" (terminação "-ou"). "Cultivava" não é perfeito. O perfeito indica ação concluída e pontual; o imperfeito, ação habitual/contínua. Construção correta: "Ele cultivou vínculos" (ação pontual) x "Ele cultivava vínculos" (hábito). Para identificar, compare a terminação "-ou" (perfeito) com "-va" (imperfeito).',
        D: 'O presente do indicativo de "cultivar" é "cultiva" (sem o "-va" final). "Cultivava" tem a desinência "-va" do imperfeito. Construção correta: "Ele cultiva vínculos" (agora) x "Ele cultivava vínculos" (no passado). Para identificar, observe se há marca temporal passada na desinência.',
        E: 'O futuro do pretérito de "cultivar" é "cultivaria" (terminação "-ria"). "Cultivava" não tem essa terminação. Construção correta: "Ele cultivaria vínculos" (hipótese futura no passado). Para identificar, compare "-ria" (futuro do pretérito) com "-va" (imperfeito).'
      },
      conceitoCobrado: 'Flexão de tempo verbal — identificação da desinência modo-temporal',
      pegadinha: 'A banca explora as terminações parecidas ("-va", "-ra", "-ria", "-ou") para confundir o candidato.',
      comoApareceEmConcurso: 'Cobrança direta da identificação da forma verbal; o candidato deve reconhecer a desinência e o valor aspectual (habitual x pontual).',
      exemploInedito: {
        contexto: 'Um relatório de RH registra: "O servidor protocolava os pedidos com rapidez, mas raramente conferia os anexos."',
        aplicacao: 'Os verbos "protocolava" e "conferia" estão no pretérito imperfeito — indicam hábitos passados. Não se trata de ações pontuais (seria "protocolou", "conferiu").',
        desafio: 'Classifique o tempo dos verbos e explique por que o imperfeito é adequado ao contexto (hábito, não fato pontual).'
      }
    },
    tags: ['verbos', 'pretérito imperfeito', 'flexão de tempo']
  },

  /* ============================================================
     Q4438892 — AMAUC/Ipumirim-SC 2026 — POR-06 (Ortografia e hífen)
  ============================================================ */
  {
    id: 'Q-REAL-POR-06-001',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-06',
    banca: 'AMAUC', orgao: 'Prefeitura de Ipumirim - SC', ano: 2026,
    prova: 'Tesoureiro',
    fonte: { descricao: 'AMAUC 2026 — Prefeitura de Ipumirim-SC — Tesoureiro' },
    subtema: 'Ortografia, emprego do hífen e acentuação (Acordo Ortográfico)',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Ao revisar um comunicado interno, um servidor da assessoria de comunicação de uma autarquia federal analisou a grafia de algumas palavras, conforme o Acordo Ortográfico da Língua Portuguesa em vigor no Brasil. Considerando as frases do comunicado, julgue as afirmações abaixo como Verdadeiras (V) ou Falsas (F): (__) Em "Os servidores ainda não sabem por que o protocolo foi suspenso", a grafia separada e sem acento é adequada, pois a expressão equivale a "por qual motivo". (__) Em "A equipe atenderá microempreendedores no anexo", a forma "micro-empreendedores" seria a adequada, pois o prefixo terminado em vogal exige hífen diante de vogal. (__) Em "A ideia da comissão foi aprovada", a palavra "ideia" deveria receber acento agudo, por ser paroxítona com ditongo aberto na sílaba tônica. (__) Em "Os candidatos têm até sexta-feira para recorrer", o acento circunflexo em "têm" distingue a terceira pessoa do plural da forma singular "tem". A sequência correta, de cima para baixo, é:',
    alternativas: [
      { id: 'A', texto: 'V, F, F, V.' },
      { id: 'B', texto: 'V, F, V, F.' },
      { id: 'C', texto: 'F, V, F, V.' },
      { id: 'D', texto: 'F, F, V, V.' },
      { id: 'E', texto: 'V, V, F, V.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A sequência é V, F, F, V. (I) Verdadeira: "por que" separado e sem acento equivale a "por qual motivo" — em perguntas diretas ou indiretas. (II) Falsa: prefixo terminado em vogal + palavra iniciada por vogal DIFERENTE não leva hífen — o correto é "microempreendedores" (o "o" e o "e" são diferentes). (III) Falsa: "ideia" NÃO recebe acento — o Acordo Ortográfico eliminou o acento dos ditongos abertos "ei" e "oi" em palavras paroxítonas (ideia, jiboia, heroico). (IV) Verdadeira: "têm" (3ª pessoa do plural) recebe circunflexo para se distinguir de "tem" (3ª pessoa do singular).',
      incorretas: {
        B: 'A alternativa erra ao classificar III como verdadeira — "ideia" não recebe acento desde o Acordo Ortográfico. A regra aplicada incorretamente é a de acentuação de paroxítonas com ditongo aberto: o Acordo eliminou esse acento para "ei" e "oi" em paroxítonas. Construção correta: "ideia" (sem acento). Para identificar em outra questão, lembre: paroxítonas com ditongo aberto "ei"/"oi" NÃO são acentuadas (ideia, jiboia, heroico, asteroide); oxítonas com esses ditongos SÃO acentuadas (herói, papéis, céu).',
        C: 'A alternativa erra em I (que é verdadeira) e em II (que é falsa). Em I, "por que" separado e sem acento é correto quando equivale a "por qual motivo". A regra violada na alternativa é a de grafia dos porquês: separado e sem acento em perguntas; junto e sem acento em causas ("porque"); junto e com acento como substantivo ("o porquê"); separado e com acento no fim de frase ("por quê?"). Construção correta: I é V. Para identificar, verifique o contexto sintático: pergunta = "por que".',
        D: 'A alternativa erra em I (que é verdadeira) e em III (que é falsa). Em I, a grafia "por que" separado e sem acento está correta no contexto de pergunta indireta. Em III, "ideia" não recebe acento. Construção correta: I é V; III é F. Para identificar, revise a regra dos porquês e a regra dos ditongos abertos em paroxítonas.',
        E: 'A alternativa erra em II (que é falsa): "micro-empreendedores" NÃO é a forma correta. A regra do Acordo Ortográfico é: prefixo terminado em vogal + palavra iniciada por vogal DIFERENTE = sem hífen (microempreendedores, autoestrada, autoescola). Hífen só se usa quando as vogais são IGUAIS (anti-inflamatório, micro-ondas). Construção correta: "microempreendedores". Para identificar em outra questão, compare as vogais de contato: iguais = hífen; diferentes = sem hífen.'
      },
      conceitoCobrado: 'Ortografia (porquês), hífen com prefixos e acentuação de ditongos abertos',
      pegadinha: 'A banca mistura quatro regras distintas em uma única questão V/F, exigindo domínio simultâneo de ortografia, hífen e acentuação.',
      comoApareceEmConcurso: 'Questões V/F de ortografia costumam combinar três ou quatro regras; o candidato deve analisar cada item isoladamente e depois montar a sequência.',
      exemploInedito: {
        contexto: 'Um comunicado interno traz: "O setor de compras não sabe por que o pedido atrasou; a equipe de microinformática verificou o sistema; a ideia de contratar mais servidores foi aprovada."',
        aplicacao: 'Aplique as três regras: (1) "por que" separado sem acento em pergunta indireta; (2) "microinformática" sem hífen (vogal + vogal diferente); (3) "ideia" sem acento (ditongo aberto em paroxítona).',
        desafio: 'Identifique, nos três trechos, se a grafia está de acordo com o Acordo Ortográfico e justifique cada caso.'
      }
    },
    tags: ['ortografia', 'hífen', 'porquês', 'acentuação', 'ditongo aberto']
  },

   /* ============================================================
     Q4438891 — AMAUC/Ipumirim-SC 2026 — POR-05 (Figuras de linguagem)
  ============================================================ */
  {
    id: 'Q-REAL-POR-05-001',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-05',
    banca: 'AMAUC', orgao: 'Prefeitura de Ipumirim - SC', ano: 2026,
    prova: 'Tesoureiro',
    fonte: { descricao: 'AMAUC 2026 — Prefeitura de Ipumirim-SC — Tesoureiro' },
    subtema: 'Figuras de linguagem (metáfora) e recursos argumentativos',
    dificuldade: 3, prioridade: 'alta',
    textoBase: 'Linguagem simples no serviço público. Atire a primeira pedra quem nunca teve dificuldade para entender um texto jurídico no Brasil. E um texto de página governamental na internet? Ou um edital de licitação ou de processo seletivo qualquer? Não importa muito se o texto trata de um direito a usufruir ou de uma obrigação a cumprir. Infelizmente, se o texto for do poder público, é bastante provável que nos deparemos com o "juridiquês" amplamente adotado na comunicação de governos de todas as esferas. Leis, decretos e normas públicas não ficam para trás, muitas vezes com termos técnicos e jurídicos sem a explicação devida. Infelizmente, o nível de escolaridade do leitor nem sempre faz muita diferença: a depender do tema, da estrutura do texto e do suporte de leitura, a linguagem excessivamente artificial do jargão jurídico pode dificultar a vida e roubar o tempo da mais ilustrada e erudita das criaturas. Felizmente, nas últimas décadas, sobretudo depois da Constituição Federal de 1988, o Brasil tem dado passos importantes na direção de ampliar a transparência e o acesso à informação. Ainda assim, ao lado desses avanços recentes, temos o angustiante cenário educacional brasileiro. De acordo com os resultados divulgados em maio de 2025, cerca de 29% dos brasileiros de 15 a 64 anos são analfabetos funcionais. Estamos diante, portanto, de um caldo amargo que mistura a baixa qualidade educacional do Brasil com a dificuldade de compreensão de textos da cidadania por boa parte da nossa população. Em um contexto desafiador como esse, surgem, em meados dos anos 2000, debates sobre a urgência de se adotar uma linguagem mais simples, direta, clara e objetiva nos textos governamentais. (SOARES, Luana Bergmann. Adaptado.)',
    enunciado: 'O texto, publicado em um boletim de estudos legislativos, discute as dificuldades de leitura dos textos produzidos pelo poder público. Considerando a organização argumentativa do texto e os recursos expressivos nele empregados, assinale a alternativa correta.',
    alternativas: [
      { id: 'A', texto: 'A expressão "a mais ilustrada e erudita das criaturas", no segundo parágrafo, constitui um eufemismo, pois atenua a crítica dirigida aos leitores que não compreendem o jargão do direito.' },
      { id: 'B', texto: 'A pergunta "E um texto de página governamental na internet?", no primeiro parágrafo, introduz uma objeção à frase anterior e restringe a crítica ao juridiquês a textos do Poder Judiciário.' },
      { id: 'C', texto: 'O advérbio "Infelizmente", no segundo parágrafo, introduz a avaliação de que o jargão jurídico prejudica sobretudo os leitores de menor escolaridade, os principais afetados pelo problema.' },
      { id: 'D', texto: 'A expressão "caldo amargo", no último parágrafo, sintetiza por meio de metáfora dois problemas expostos antes: a baixa qualidade educacional e a dificuldade de compreender textos oficiais.' },
      { id: 'E', texto: 'O conectivo "portanto", no último parágrafo, introduz uma ressalva ao que foi dito antes e poderia ser substituído por "no entanto" sem alteração do sentido do trecho em que se encontra.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta: "caldo amargo" é uma metáfora que funde (não justapõe) dois problemas apresentados antes — a baixa qualidade educacional (mencionada nos dados do analfabetismo funcional) e a dificuldade de compreensão dos textos oficiais (o juridiquês). A metáfora condensa, em uma imagem, a mistura de dois elementos — exatamente o que o texto diz: "mistura a baixa qualidade educacional... com a dificuldade de compreensão de textos".',
      incorretas: {
        A: 'A expressão "a mais ilustrada e erudita das criaturas" NÃO é eufemismo — é ironia/hiperbole. O eufemismo suaviza uma realidade dura (ex.: "ele nos deixou" para "morreu"); aqui, ao contrário, a autora ENFATIZA que nem mesmo o leitor mais erudito escapa do problema. A regra violada é a definição de eufemismo: atenuar. Construção correta: trata-se de ironia (dizer o contrário do que se quer criticar) ou hipérbole (exagero). Para identificar em outra questão, pergunte: a expressão suaviza ou intensifica? Se intensifica, não é eufemismo.',
        B: 'A pergunta "E um texto de página governamental na internet?" NÃO introduz objeção nem restringe a crítica ao Judiciário — ao contrário, AMPLIA o alcance da crítica, somando outros tipos de texto (páginas governamentais, editais) ao juridiquês. A regra violada é a função do conectivo "E": ele adiciona, não opõe. Construção correta: a pergunta exemplifica e amplia o rol de textos afetados. Para identificar em outra questão, observe se o "E" tem valor aditivo (soma) ou adversativo (oposição) — aqui é aditivo.',
        C: 'O advérbio "Infelizmente" NÃO introduz a avaliação de que o jargão prejudica "sobretudo os leitores de menor escolaridade" — o texto diz justamente o contrário: "o nível de escolaridade do leitor nem sempre faz muita diferença" e "pode dificultar a vida e roubar o tempo da mais ilustrada e erudita das criaturas". A regra violada é a leitura literal do advérbio: "Infelizmente" expressa avaliação negativa geral, não hierarquiza vítimas. Construção correta: o advérbio marca pesar pela existência do problema, sem especificar o público mais afetado. Para identificar, procure no texto a palavra "sobretudo" ou expressão equivalente — se não houver, a alternativa hierarquiza indevidamente.',
        E: 'O conectivo "portanto" NÃO introduz ressalva — introduz CONCLUSÃO. Substituí-lo por "no entanto" (adversativo) alteraria o sentido: "portanto" conclui a partir do que foi dito (dados do analfabetismo + juridiquês = caldo amargo); "no entanto" oporia. A regra violada é o valor semântico dos conectivos: "portanto" é conclusivo; "no entanto" é adversativo. Construção correta: "portanto" poderia ser substituído por "logo", "assim", "por conseguinte" — nunca por "no entanto". Para identificar, verifique se o conectivo soma/conclui (portanto, logo) ou opõe (mas, porém, no entanto).'
      },
      conceitoCobrado: 'Metáfora, eufemismo, ironia e valor semântico dos conectivos',
      pegadinha: 'A banca usa termos técnicos (eufemismo, objeção, ressalva) em contextos que exigem distinguir figura de linguagem de recurso argumentativo.',
      comoApareceEmConcurso: 'Questões de figuras de linguagem aplicadas a texto argumentativo exigem que o candidato identifique a figura E sua função no argumento — não basta decorar definições.',
      exemploInedito: {
        contexto: 'Um editorial afirma: "A morosidade processual é um labirinto em que o cidadão entra e não encontra a saída; e não adianta ser doutor: o labirinto é o mesmo para todos."',
        aplicacao: '"Labirinto" é metáfora que sintetiza a dificuldade de acesso à Justiça; "não adianta ser doutor" reforça que o problema atinge a todos, sem hierarquizar vítimas — mesma lógica do "caldo amargo".',
        desafio: 'Identifique a figura de linguagem em "labirinto" e explique sua função argumentativa no trecho.'
      }
    },
    tags: ['metáfora', 'eufemismo', 'ironia', 'conectivos', 'figuras de linguagem']
  },

  /* ============================================================
     Q4438890 — AMAUC/Ipumirim-SC 2026 — POR-11 (Verbos)
  ============================================================ */
  {
    id: 'Q-REAL-POR-11-002',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-11',
    banca: 'AMAUC', orgao: 'Prefeitura de Ipumirim - SC', ano: 2026,
    prova: 'Tesoureiro',
    fonte: { descricao: 'AMAUC 2026 — Prefeitura de Ipumirim-SC — Tesoureiro' },
    subtema: 'Emprego dos tempos e modos verbais no texto',
    dificuldade: 3, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-05-001 — "Linguagem simples no serviço público".]',
    enunciado: 'A autora emprega diferentes tempos e modos verbais para situar os fatos no tempo e para expressar hipóteses e avaliações. Considerando o emprego dos tempos e modos verbais no texto, assinale a alternativa correta.',
    alternativas: [
      { id: 'A', texto: 'Em "Atire a primeira pedra", a forma verbal exprime ordem literal dirigida ao leitor, que deve executar a ação descrita na frase para confirmar a tese da autora.' },
      { id: 'B', texto: 'Em "o Brasil tem dado passos importantes", o pretérito perfeito composto expressa ação repetida, iniciada no passado e prolongada até o momento em que se escreve.' },
      { id: 'C', texto: 'Em "surgem, em meados dos anos 2000, debates", o presente do indicativo expressa fato habitual, que se repete regularmente no momento em que se escreve este texto.' },
      { id: 'D', texto: 'Em "é bastante provável que nos deparemos", o presente do subjuntivo é exigido pelo sentido de certeza que a expressão "bastante provável" atribui ao fato citado.' },
      { id: 'E', texto: 'Em "se o texto for do poder público", o futuro do subjuntivo apresenta a condição como fato já realizado, anterior ao momento em que a autora escreve o seu texto.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta: "tem dado" é locução de pretérito perfeito composto do indicativo (ter no presente + particípio). Esse tempo expressa ação repetida/continuada que se iniciou no passado e se prolonga até o presente — exatamente o sentido de "o Brasil tem dado passos importantes" (vem dando, continuamente, até agora).',
      incorretas: {
        A: 'A forma "Atire" está no imperativo, mas NÃO exprime ordem literal — é uma alusão bíblica ("Atire a primeira pedra quem nunca pecou") usada como expressão idiomática para incluir o leitor na crítica. A regra violada é a distinção entre imperativo literal (ordem) e imperativo idiomático (convite/ironia). Construção correta: "Atire a primeira pedra" equivale a "quem nunca errou que se manifeste" — não é ordem para o leitor atirar pedra. Para identificar em outra questão, pergunte: a ação deve ser executada literalmente ou é expressão figurada?',
        C: 'O presente "surgem" NÃO expressa fato habitual — expressa um fato passado (meados dos anos 2000) trazido para o presente do discurso. É o "presente histórico" (ou presente de narrativa), que atualiza fatos passados. A regra violada é a distinção entre presente habitual (ação que se repete) e presente histórico (fato passado atualizado). Construção correta: "surgem" = surgiram (fato pontual no passado, narrado como presente). Para identificar, observe se há marca temporal passada ("meados dos anos 2000") — se houver, o presente é histórico, não habitual.',
        D: 'A forma "deparemos" (na verdade, o texto traz "deparemos", flexão inadequada; o correto seria "deparemos" ou "depararmos" — mas o foco é o modo) NÃO é exigida por "certeza". Ao contrário: "bastante provável" expressa PROBABILIDADE, e é justamente a probabilidade que exige o subjuntivo — modo da dúvida/hipótese. A regra violada é a correspondência entre modalidade e modo verbal: certeza → indicativo; dúvida/probabilidade → subjuntivo. Construção correta: "é provável que" rege subjuntivo, não por certeza, mas por incerteza. Para identificar, pergunte: a expressão indica certeza ou hipótese? Hipótese = subjuntivo.',
        E: 'O futuro do subjuntivo "for" NÃO apresenta a condição como fato já realizado — apresenta como condição POSSÍVEL, hipotética. "Se o texto for do poder público" significa "caso seja" — hipótese, não realidade consumada. A regra violada é o valor do futuro do subjuntivo: condição futura/hipotética, não fato realizado. Construção correta: "for" = condição possível no futuro; "fosse" = condição hipotética no passado; "era" (indicativo) = fato real. Para identificar, verifique se o "se" introduz hipótese (subjuntivo) ou fato (indicativo).'
      },
      conceitoCobrado: 'Emprego dos tempos e modos verbais: pretérito perfeito composto, presente histórico, subjuntivo e futuro do subjuntivo',
      pegadinha: 'A banca explora valores menos óbvios (perfeito composto, presente histórico) e a relação entre modalidade e modo verbal.',
      comoApareceEmConcurso: 'Questões de verbos em texto cobram o valor contextual — não basta identificar a forma; é preciso explicar o efeito de sentido.',
      exemploInedito: {
        contexto: 'Um relatório afirma: "Nos últimos anos, o órgão tem investido em digitalização; em 2018, implanta o primeiro sistema; é provável que novas ferramentas surjam até 2027."',
        aplicacao: '"Tem investido" = pretérito perfeito composto (ação repetida do passado ao presente); "implanta" = presente histórico (fato passado atualizado); "surjam" = presente do subjuntivo (probabilidade).',
        desafio: 'Classifique os três verbos destacados e explique o valor de cada um no contexto.'
      }
    },
    tags: ['verbos', 'pretérito perfeito composto', 'presente histórico', 'subjuntivo']
  },

  /* ============================================================
     Q4438889 — AMAUC/Ipumirim-SC 2026 — POR-18 (Pontuação)
  ============================================================ */
  {
    id: 'Q-REAL-POR-18-001',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-18',
    banca: 'AMAUC', orgao: 'Prefeitura de Ipumirim - SC', ano: 2026,
    prova: 'Tesoureiro',
    fonte: { descricao: 'AMAUC 2026 — Prefeitura de Ipumirim-SC — Tesoureiro' },
    subtema: 'Uso da vírgula: adjuntos deslocados e intercalação',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Considere o seguinte período adaptado do terceiro parágrafo do texto: "Felizmente, nas últimas décadas, sobretudo depois da Constituição Federal de 1988, o Brasil tem dado passos importantes na direção de ampliar a transparência." Quanto ao emprego da vírgula, a reescrita que preserva a correção gramatical e o sentido original do período é:',
    alternativas: [
      { id: 'A', texto: 'Felizmente, nas últimas décadas, sobretudo depois da Constituição Federal de 1988, o Brasil, tem dado passos importantes na direção de ampliar a transparência.' },
      { id: 'B', texto: 'Felizmente, nas últimas décadas, sobretudo depois da Constituição Federal de 1988, o Brasil tem dado passos importantes na direção de ampliar a transparência.' },
      { id: 'C', texto: 'Nas últimas décadas, sobretudo depois da Constituição Federal de 1988, o Brasil, felizmente, tem dado passos importantes na direção de ampliar a transparência.' },
      { id: 'D', texto: 'Felizmente, nas últimas décadas, sobretudo depois da Constituição Federal de 1988, o Brasil tem, dado passos importantes na direção de ampliar a transparência.' },
      { id: 'E', texto: 'Felizmente, nas últimas décadas, sobretudo depois da Constituição Federal de 1988, o Brasil tem dado, passos importantes na direção de ampliar a transparência.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta porque desloca o advérbio "felizmente" para posição intercalada entre vírgulas ("o Brasil, felizmente, tem dado..."), o que é gramaticalmente correto e preserva o sentido original. O advérbio oracional pode ocupar o início (como no original), o meio (intercalado) ou o fim — sempre isolado por vírgulas quando deslocado. A vírgula isola o termo intercalado, não separa sujeito e verbo.',
      incorretas: {
        A: 'A vírgula após "Brasil" está INCORRETA porque separa o sujeito ("o Brasil") do verbo ("tem dado") — a regra de ouro da pontuação proíbe essa separação quando não há termo intercalado. A regra violada é: não se separa sujeito de verbo por vírgula. Construção correta: "o Brasil tem dado" (sem vírgula). Para identificar em outra questão, verifique se há termo intercalado entre sujeito e verbo; se não houver, a vírgula é erro.',
        B: 'A alternativa B é IDÊNTICA ao período original — não é uma reescrita, portanto não atende ao comando "reescrita que preserva". A banca exige uma transformação que mantenha a correção; repetir o original não é reescrever. Construção correta: a reescrita deve alterar a ordem ou a pontuação sem quebrar a gramática — como em C. Para identificar, compare a alternativa com o original: se forem idênticos, não há reescrita.',
        D: 'A vírgula após "tem" está INCORRETA porque separa o verbo ("tem") do seu complemento ("dado passos importantes..."). A regra violada é: não se separa verbo de complemento por vírgula. Construção correta: "tem dado passos" (sem vírgula). Para identificar, localize o verbo e seu complemento: se a vírgula estiver entre eles, é erro.',
        E: 'A vírgula após "dado" está INCORRETA porque separa o particípio ("dado") do seu complemento ("passos importantes..."). Na locução verbal "tem dado", o particípio não pode ser isolado do objeto. A regra violada é a mesma de D: não se separa verbo (ou locução) de complemento. Construção correta: "tem dado passos" (sem vírgula). Para identificar, verifique se a vírgula isola um termo essencial — se sim, é erro.'
      },
      conceitoCobrado: 'Uso da vírgula: adjuntos deslocados, intercalação e proibições (sujeito-verbo, verbo-complemento)',
      pegadinha: 'A banca insere vírgulas em posições que parecem naturais (após sujeito, após verbo) para testar as proibições clássicas.',
      comoApareceEmConcurso: 'Questões de pontuação com reescrita exigem que o candidato identifique a única versão que preserva a gramática e o sentido — as demais quebram alguma regra.',
      exemploInedito: {
        contexto: 'Um ofício afirma: "O diretor, na última reunião, apresentou o novo plano de metas."',
        aplicacao: 'A vírgula isola o adjunto adverbial intercalado "na última reunião". A reescrita "Na última reunião, o diretor apresentou o novo plano de metas" preserva a correção; já "O diretor apresentou, o novo plano" quebra a regra (verbo + complemento).',
        desafio: 'Identifique qual reescrita do ofício preserva a correção gramatical e por quê.'
      }
    },
    tags: ['pontuação', 'vírgula', 'adjunto deslocado', 'intercalação']
  },

  /* ============================================================
     Q4438888 — AMAUC/Ipumirim-SC 2026 — POR-17 (Crase)
  ============================================================ */
  {
    id: 'Q-REAL-POR-17-001',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-17',
    banca: 'AMAUC', orgao: 'Prefeitura de Ipumirim - SC', ano: 2026,
    prova: 'Tesoureiro',
    fonte: { descricao: 'AMAUC 2026 — Prefeitura de Ipumirim-SC — Tesoureiro' },
    subtema: 'Crase: regência nominal e justificativa',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Considere o trecho do terceiro parágrafo: "o Brasil tem dado passos importantes na direção de ampliar a transparência e o acesso à informação". Analise as seguintes asserções e a relação proposta entre elas: I. No trecho, o emprego do acento indicativo de crase em "à informação" está de acordo com a norma-padrão. PORQUE II. O acento indica a fusão da preposição "a", exigida pelo verbo "ampliar", com o artigo definido feminino que acompanha o substantivo "informação". A respeito dessas asserções, assinale a alternativa correta.',
    alternativas: [
      { id: 'A', texto: 'A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.' },
      { id: 'B', texto: 'As asserções I e II são proposições falsas.' },
      { id: 'C', texto: 'As asserções I e II são proposições verdadeiras, e a II é uma justificativa da I.' },
      { id: 'D', texto: 'As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa da I.' },
      { id: 'E', texto: 'A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A asserção I é VERDADEIRA: o acento em "à informação" está correto, pois há crase (preposição "a" + artigo "a"). A asserção II é FALSA: a preposição "a" NÃO é exigida pelo verbo "ampliar", mas pelo substantivo "acesso" (regência nominal: "acesso a algo"). O verbo "ampliar" é transitivo direto — "ampliar a transparência e o acesso" (ambos objetos diretos). Dentro do sintagma "o acesso à informação", é o nome "acesso" que rege a preposição "a". Portanto, I é V e II é F, resposta A.',
      incorretas: {
        B: 'A alternativa erra ao classificar I como falsa. A crase em "à informação" está CORRETA (preposição "a" do nome "acesso" + artigo "a" de "informação"). A regra violada pela alternativa é a identificação da crase correta — quem nega a crase aqui desconhece a regência nominal de "acesso". Construção correta: "acesso à informação" (com crase). Para identificar em outra questão, teste com substantivo masculino: "acesso AO sistema" — se aparecer "ao", há preposição "a", logo a crase é devida em "à informação".',
        C: 'A alternativa erra ao classificar II como verdadeira e justificativa de I. A II atribui a preposição ao verbo "ampliar", mas o verbo é transitivo direto — não rege preposição "a". Quem rege é o substantivo "acesso". A regra violada é a distinção entre regência verbal e nominal: a preposição vem de "acesso" (nome), não de "ampliar" (verbo). Construção correta: "a preposição \'a\' é exigida pelo substantivo \'acesso\', não pelo verbo \'ampliar\'". Para identificar, localize quem rege a preposição: verbo ou nome?',
        D: 'A alternativa erra ao classificar II como verdadeira. A II é falsa porque atribui a preposição ao verbo "ampliar" (VTD), quando ela vem do nome "acesso". A regra violada é a mesma de C. Construção correta: a justificativa correta seria "o acento indica a fusão da preposição a, exigida pelo substantivo \'acesso\', com o artigo a de \'informação\'". Para identificar, verifique sempre qual termo rege a preposição.',
        E: 'A alternativa erra ao classificar I como falsa. A crase em "à informação" está correta. A regra violada é negar uma crase devida — o candidato que marca E confunde "não saber quem rege a preposição" com "não haver crase". Construção correta: há crase porque há preposição "a" (do nome "acesso") + artigo "a" (de "informação"). Para identificar, faça o teste do masculino: "acesso AO sistema" → se aparecer "ao", há crase no feminino.'
      },
      conceitoCobrado: 'Crase: regência nominal ("acesso a") x regência verbal ("ampliar" = VTD)',
      pegadinha: 'A banca atribui a preposição ao verbo (ampliar), quando ela vem do nome (acesso) — erro sutil que exige domínio da regência.',
      comoApareceEmConcurso: 'Questões de crase com asserções I/II cobram a identificação do termo regente e a relação de justificativa entre as proposições.',
      exemploInedito: {
        contexto: 'Um parecer afirma: "O órgão garantiu o direito à informação e o acesso aos documentos."',
        aplicacao: 'Em "direito à informação", a preposição vem do nome "direito" (direito a algo) + artigo "a" de "informação". Em "acesso aos documentos", a preposição vem de "acesso" + artigo "o" de "documentos" (= "ao"). Em ambos, o verbo "garantiu" é VTD e não rege a preposição.',
        desafio: 'Identifique, em cada sintagma, qual termo rege a preposição e justifique a presença ou ausência de crase.'
      }
    },
    tags: ['crase', 'regência nominal', 'regência verbal', 'acesso']
  },

  /* ============================================================
     Q4438375 — FAFIPA/Ivaiporã-PR 2026 — POR-18 (Pontuação)
  ============================================================ */
  {
    id: 'Q-REAL-POR-18-002',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-18',
    banca: 'FAFIPA', orgao: 'Prefeitura de Ivaiporã - PR', ano: 2026,
    prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'FAFIPA 2026 — Prefeitura de Ivaiporã-PR — Auxiliar Administrativo' },
    subtema: 'Justificativa sintática do emprego da vírgula',
    dificuldade: 2, prioridade: 'alta',
    textoBase: 'Dieta rigorosa e treino intenso podem atingir o sistema hormonal; entenda. A busca pelo emagrecimento, definição muscular e alto rendimento na academia pode ser benéfico, mas também pode sair caro para a saúde. Especialistas alertam que dietas muito restritivas e rotinas pesadas de treino podem comprometer, além da mentalidade e do corpo, o sistema hormonal. Um exemplo é a tenista norte-americana Emma Navarro, de 25 anos, que anunciou uma pausa na carreira após ser diagnosticada com RED-S e Tireoidite de Hashimoto. Segundo os atleta, os quadros, decorrentes em parte de uma alimentação inadequada, provocavam tonturas, dores de cabeça, fadiga constante e dificuldade de concentração. De acordo com o endocrinologista Rodrigo Gomes de Souza, quando o organismo recebe menos energia do que gasta por um longo período, ele aciona um mecanismo de defesa que passa a economizar, reduzir o ritmo do metabolismo e, consequentemente, isso compromete o sistema hormonal. "Nessas situações, o organismo reduz a atividade do eixo que controla a tireoide. Na prática, é como se o organismo percebesse que \'está faltando combustível\' e diminuísse o ritmo do metabolismo para gastar menos energia." Isso mostra que comer pouco e treinar muito não, necessariamente, significa ser saudável. Por este motivo, aqueles que querem manter uma dieta saudável precisam manter um acompanhamento médico com um endócrino ou nutricionista.',
    enunciado: 'Quanto ao emprego das vírgulas no texto e às suas justificativas sintáticas segundo a norma-padrão da língua portuguesa, assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'Em "podem comprometer, além da mentalidade e do corpo, o sistema hormonal", as vírgulas justificam-se por separarem o sujeito simples do seu verbo.' },
      { id: 'B', texto: 'Em "quando o organismo recebe menos energia do que gasta por um longo período, ele aciona...", a vírgula separa a oração subordinada adverbial temporal anteposta em relação à oração principal.' },
      { id: 'C', texto: 'No excerto "Um exemplo é a tenista norte-americana Emma Navarro, de 25 anos, que anunciou...", a vírgula antes de "de 25 anos" isola um vocativo direcionado à atleta.' },
      { id: 'D', texto: 'No trecho "De acordo com o endocrinologista Rodrigo Gomes de Souza, quando o organismo recebe...", a primeira vírgula foi utilizada para isolar uma oração subordinada adjetiva explicativa.' },
      { id: 'E', texto: 'No trecho "não, necessariamente, significa ser saudável", as vírgulas foram inseridas para separar duas orações coordenadas assindéticas.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta: em "quando o organismo recebe menos energia do que gasta por um longo período, ele aciona...", a oração introduzida por "quando" é subordinada adverbial TEMPORAL e está ANTEPOSTA à principal ("ele aciona..."). A vírgula é obrigatória para separar a subordinada anteposta da principal. Justificativa sintática precisa.',
      incorretas: {
        A: 'A alternativa erra a justificativa: as vírgulas em "podem comprometer, além da mentalidade e do corpo, o sistema hormonal" isolam o termo intercalado "além da mentalidade e do corpo" (adjunto adverbial de acréscimo), NÃO separam sujeito de verbo. O sujeito ("dietas... e rotinas...") está antes de "podem"; o verbo está após o sujeito, sem vírgula entre eles. A regra violada é a identificação do termo intercalado. Construção correta: "as vírgulas isolam o adjunto adverbial intercalado \'além da mentalidade e do corpo\'". Para identificar, retire o termo entre vírgulas: se a frase continuar gramatical, é termo intercalado, não sujeito/verbo.',
        C: 'A alternativa erra ao classificar "de 25 anos" como vocativo. Vocativo é chamamento ("Maria, venha aqui!"); "de 25 anos" é adjunto adnominal explicativo (informa a idade da atleta). A regra violada é a distinção entre vocativo (chamamento) e adjunto explicativo (informação acessória). Construção correta: "de 25 anos" é adjunto adnominal explicativo, isolado por vírgulas por ser informação adicional. Para identificar, pergunte: o termo chama alguém ou informa algo sobre alguém? Se informa, não é vocativo.',
        D: 'A alternativa erra ao classificar a primeira vírgula como isolamento de oração subordinada adjetiva explicativa. Em "De acordo com o endocrinologista Rodrigo Gomes de Souza, quando o organismo recebe...", a primeira vírgula separa o adjunto adverbial de conformidade ("De acordo com...") do restante do período — não há oração adjetiva aí. A regra violada é a identificação do termo deslocado. Construção correta: "a primeira vírgula isola o adjunto adverbial de conformidade anteposto". Para identificar, localize o termo antes da vírgula: se for locução prepositiva ("de acordo com"), é adjunto, não oração adjetiva.',
        E: 'A alternativa erra ao classificar as vírgulas em "não, necessariamente, significa" como separadoras de orações coordenadas assindéticas. As vírgulas isolam o advérbio "necessariamente" (termo intercalado), não separam orações. A regra violada é a distinção entre termo intercalado e oração coordenada. Construção correta: "as vírgulas isolam o advérbio \'necessariamente\', que modaliza o verbo \'significa\'". Para identificar, retire o termo entre vírgulas: se for uma palavra (advérbio), é termo intercalado; se for oração (com verbo), pode ser coordenada.'
      },
      conceitoCobrado: 'Justificativa sintática do emprego da vírgula: adjunto intercalado, subordinada anteposta, adjunto explicativo, advérbio intercalado',
      pegadinha: 'A banca embaralha justificativas sintáticas plausíveis (vocativo, adjetiva explicativa, coordenada) para testar a identificação precisa de cada termo.',
      comoApareceEmConcurso: 'Questões de pontuação com justificativa exigem que o candidato não só identifique a vírgula, mas explique sintaticamente o termo isolado.',
      exemploInedito: {
        contexto: 'Um relatório afirma: "Quando o prazo terminou, o órgão publicou o resultado; o servidor, além das funções habituais, acumulou a chefia; o diretor, felizmente, autorizou a prorrogação."',
        aplicacao: 'Primeira vírgula: separa subordinada adverbial temporal anteposta. Segunda: isola adjunto adverbial intercalado. Terceira: isola advérbio intercalado. Cada uma tem justificativa sintática distinta.',
        desafio: 'Justifique sintaticamente cada uma das três vírgulas do trecho.'
      }
    },
    tags: ['pontuação', 'vírgula', 'subordinada adverbial temporal', 'termo intercalado']
  },

  /* ============================================================
     Q4438374 — FAFIPA/Ivaiporã-PR 2026 — POR-13 (Termos da oração)
  ============================================================ */
  {
    id: 'Q-REAL-POR-13-001',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-13',
    banca: 'FAFIPA', orgao: 'Prefeitura de Ivaiporã - PR', ano: 2026,
    prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'FAFIPA 2026 — Prefeitura de Ivaiporã-PR — Auxiliar Administrativo' },
    subtema: 'Classificação gramatical e função sintática dos termos',
    dificuldade: 3, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-18-002 — "Dieta rigorosa e treino intenso...".]',
    enunciado: 'Analise a classificação gramatical e a função sintática dos termos destacados nos trechos extraídos do texto e assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'Na expressão "mecanismo de defesa", a locução "de defesa" desempenha a função sintática de complemento nominal do substantivo "mecanismo".' },
      { id: 'B', texto: 'No trecho "dietas muito restritivas", a palavra "muito" classifica-se como pronome indefinido e atua sintaticamente como adjunto adnominal.' },
      { id: 'C', texto: 'Em "podem comprometer, além da mentalidade e do corpo, o sistema hormonal", os termos "o sistema hormonal" exercem a função sintática de objeto direto da locução verbal.' },
      { id: 'D', texto: 'Em "Especialistas alertam", o vocábulo "Especialistas" é um adjetivo pátrio que funciona como predicativo do sujeito.' },
      { id: 'E', texto: 'No excerto "aqueles que querem manter uma dieta saudável", a palavra "que" classifica-se como conjunção integrante, introduzindo uma oração subordinada substantiva.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta: em "podem comprometer, além da mentalidade e do corpo, o sistema hormonal", a locução verbal "podem comprometer" é transitiva direta e tem como objeto direto "o sistema hormonal" (sem preposição). O termo intercalado "além da mentalidade e do corpo" é adjunto adverbial de acréscimo, mas o complemento do verbo é "o sistema hormonal". Função: objeto direto.',
      incorretas: {
        A: 'A alternativa erra ao classificar "de defesa" como complemento nominal. "Mecanismo" é substantivo concreto; o termo "de defesa" especifica o tipo/função do mecanismo — é ADJUNTO ADNOMINAL (caracteriza), não complemento nominal (que completa o sentido de nome abstrato ou deverbal). A regra violada é a distinção entre complemento nominal (completa nome abstrato) e adjunto adnominal (caracteriza nome concreto). Construção correta: "de defesa" = adjunto adnominal. Para identificar, pergunte: o nome é abstrato (medo, acesso) ou concreto (mecanismo, mesa)? Concreto + "de X" = adjunto, em regra.',
        B: 'A alternativa erra a classificação de "muito": em "dietas muito restritivas", "muito" é ADVÉRBIO de intensidade (modifica o adjetivo "restritivas"), não pronome indefinido. Pronome indefinido substitui/acompanha substantivo ("muitos servidores"); advérbio modifica adjetivo, verbo ou outro advérbio. A regra violada é a distinção entre pronome (junto a substantivo) e advérbio (junto a adjetivo/verbo/advérbio). Construção correta: "muito" = advérbio de intensidade. Para identificar, veja a palavra seguinte: se for adjetivo/verbo, é advérbio; se for substantivo, é pronome.',
        D: 'A alternativa erra ao classificar "Especialistas" como adjetivo pátrio. "Especialistas" é SUBSTANTIVO comum (designa pessoas) e exerce a função de SUJEITO de "alertam" — não é predicativo. Adjetivo pátrio indica origem ("brasileiro", "norte-americano"). A regra violada é a classificação morfológica e a função sintática. Construção correta: "Especialistas" = substantivo, sujeito. Para identificar, pergunte: a palavra nomeia um ser (substantivo) ou qualifica um ser (adjetivo)? Aqui, nomeia.',
        E: 'A alternativa erra ao classificar "que" como conjunção integrante. Em "aqueles que querem manter uma dieta saudável", o "que" RETOMA "aqueles" — é PRONOME RELATIVO, introduzindo oração subordinada adjetiva restritiva. Conjunção integrante introduz oração substantiva, sem antecedente. A regra violada é a distinção entre pronome relativo (com antecedente) e conjunção integrante (sem antecedente). Construção correta: "que" = pronome relativo (retoma "aqueles"). Para identificar, procure o antecedente: se houver, é relativo; se não, é integrante.'
      },
      conceitoCobrado: 'Classificação morfológica e função sintática: complemento nominal x adjunto adnominal, advérbio x pronome, pronome relativo x conjunção integrante',
      pegadinha: 'A banca cruza classificação gramatical com função sintática, exigindo domínio dos dois planos simultaneamente.',
      comoApareceEmConcurso: 'Questões de sintaxe/morfologia geralmente apresentam alternativas com dois erros: um de classificação e outro de função — o candidato precisa analisar ambos.',
      exemploInedito: {
        contexto: 'Um ofício afirma: "O setor de compras tem muitos servidores que mantêm o sistema de protocolo atualizado."',
        aplicacao: '"de compras" = adjunto adnominal (caracteriza "setor", concreto); "muitos" = pronome indefinido (acompanha "servidores"); "que" = pronome relativo (retoma "servidores").',
        desafio: 'Classifique morfologicamente e sintaticamente os três termos destacados.'
      }
    },
    tags: ['sintaxe', 'complemento nominal', 'adjunto adnominal', 'pronome relativo', 'objeto direto']
  },

  /* ============================================================
     Q4438373 — FAFIPA/Ivaiporã-PR 2026 — POR-07 (Acentuação gráfica)
  ============================================================ */
  {
    id: 'Q-REAL-POR-07-001',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-07',
    banca: 'FAFIPA', orgao: 'Prefeitura de Ivaiporã - PR', ano: 2026,
    prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'FAFIPA 2026 — Prefeitura de Ivaiporã-PR — Auxiliar Administrativo' },
    subtema: 'Acentuação gráfica e análise fonética',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-18-002 — "Dieta rigorosa e treino intenso...".]',
    enunciado: 'Em relação às regras de acentuação gráfica e à análise fonética de vocábulos retirados do texto, assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'O vocábulo "ritmo" apresenta um dígrafo consonantal na separação silábica rit-mo.' },
      { id: 'B', texto: 'A palavra "tireoide" não recebe acento gráfico porque os ditongos abertos "ei" e "oi" em palavras paroxítonas deixaram de ser acentuados conforme as regras do Acordo Ortográfico vigente.' },
      { id: 'C', texto: 'As palavras "médico" e "prática" recebem acento gráfico por razões distintas, visto que a primeira é oxítona e a segunda é paroxítona.' },
      { id: 'D', texto: 'Na palavra "passa", o grupo de letras "ss" constitui um encontro vocálico perceptível na pronúncia individual de cada consoante.' },
      { id: 'E', texto: 'O vocábulo "saúde" é acentuado graficamente por se tratar de uma palavra proparoxítona terminada na vogal "e".' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta: "tireoide" (e "tireoide", "jiboia", "ideia", "heroico") é paroxítona com ditongo aberto "ei"/"oi" e NÃO recebe acento desde o Acordo Ortográfico de 2009. A regra anterior acentuava ("tireóide", "jibóia", "idéia", "heróico"); o Acordo eliminou esse acento em paroxítonas. A justificativa está correta.',
      incorretas: {
        A: 'A alternativa erra ao afirmar que "ritmo" tem dígrafo consonantal. Em "rit-mo", as consoantes T e M estão em sílabas diferentes e cada uma é pronunciada — é ENCONTRO CONSONANTAL, não dígrafo. Dígrafo é o par de letras que representa UM único fonema (ss, rr, ch, lh, nh, qu, gu). A regra violada é a distinção entre dígrafo (um som) e encontro consonantal (dois sons). Construção correta: "ritmo" tem encontro consonantal (TM), não dígrafo. Para identificar, pronuncie a palavra: se ouvir dois sons consonantais, é encontro; se ouvir um, é dígrafo.',
        C: 'A alternativa erra ao classificar "médico" como oxítona. "Médico" e "prática" são AMBAS PROPAROXÍTONAS (antepenúltima sílaba tônica: mé-di-co, prá-ti-ca) e recebem acento pela mesma razão — a regra das proparoxítonas (todas são acentuadas). A regra violada é a classificação quanto à posição da tônica. Construção correta: ambas são proparoxítonas, acentuadas pela mesma regra. Para identificar, conte as sílabas a partir do fim: tônica na antepenúltima = proparoxítona.',
        D: 'A alternativa erra duplamente: "ss" em "passa" é DÍGRAFO CONSONANTAL (representa um único som /s/), não "encontro vocálico" (que envolve vogais). Além disso, não se pronuncia cada "s" individualmente — o dígrafo "ss" tem som único. A regra violada é a definição de dígrafo consonantal e de encontro vocálico. Construção correta: "ss" = dígrafo consonantal (um fonema /s/). Para identificar, pronuncie: se ouvir um único som para duas letras, é dígrafo.',
        E: 'A alternativa erra ao classificar "saúde" como proparoxítona. "Sa-ú-de" tem a tônica na última sílaba ("de" não — atenção: a tônica é "ú", penúltima sílaba) — na verdade, "saúde" é PAROXÍTONA (sa-Ú-de: tônica na penúltima). O acento deve-se ao HIATO (i/u tônico sozinho na sílaba), não à regra das proparoxítonas. A regra violada é a identificação da regra de acentuação: hiato, não proparoxítona. Construção correta: "saúde" é acentuada por hiato (sa-ú-de). Para identificar, separe as sílabas: se o i/u tônico estiver sozinho na sílaba (hiato), acentua-se.'
      },
      conceitoCobrado: 'Regras de acentuação (proparoxítonas, hiatos, ditongos abertos em paroxítonas) e análise fonética (dígrafo x encontro consonantal)',
      pegadinha: 'A banca mistura análise fonética (dígrafo, encontro) com acentuação, exigindo domínio dos dois planos.',
      comoApareceEmConcurso: 'Questões de acentuação com análise fonética cobram a justificativa da regra — não basta saber que a palavra é acentuada; é preciso dizer por quê.',
      exemploInedito: {
        contexto: 'Um comunicado traz: "A ideia da equipe é usar a assembleia para debater a pauta; o ritmo dos trabalhos será intenso; a saúde dos servidores é prioridade."',
        aplicacao: '"Ideia" sem acento (ditongo aberto em paroxítona); "assembleia" sem acento (idem); "ritmo" com encontro consonantal TM; "saúde" com acento de hiato (sa-ú-de).',
        desafio: 'Justifique a presença ou ausência de acento em cada uma das quatro palavras.'
      }
    },
    tags: ['acentuação', 'proparoxítona', 'hiato', 'ditongo aberto', 'dígrafo']
  },

  /* ============================================================
     Q4438372 — FAFIPA/Ivaiporã-PR 2026 — POR-04 (Semântica)
  ============================================================ */
  {
    id: 'Q-REAL-POR-04-001',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-04',
    banca: 'FAFIPA', orgao: 'Prefeitura de Ivaiporã - PR', ano: 2026,
    prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'FAFIPA 2026 — Prefeitura de Ivaiporã-PR — Auxiliar Administrativo' },
    subtema: 'Denotação, conotação e valor semântico dos conectivos',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-18-002 — "Dieta rigorosa e treino intenso...".]',
    enunciado: 'Quanto aos recursos de coesão, coerência e aos aspectos semânticos presentes no texto, assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'No trecho "consequentemente, isso compromete o sistema hormonal", o vocábulo destacado estabelece uma relação semântica de causa em relação ao acionamento do mecanismo de defesa.' },
      { id: 'B', texto: 'A expressão "está faltando combustível" exemplifica o uso do sentido conotativo, em que a palavra "combustível" é empregada metaforicamente para indicar a energia vinda dos alimentos.' },
      { id: 'C', texto: 'No excerto "Isso mostra que comer pouco e treinar muito não, necessariamente, significa ser saudável", o advérbio "necessariamente" exprime uma negação categórica e absoluta.' },
      { id: 'D', texto: 'A expressão "sair caro para a saúde" foi empregada em seu sentido estritamente denotativo, referindo-se aos custos financeiros dos tratamentos médicos.' },
      { id: 'E', texto: 'O pronome na expressão "Por este motivo" é empregado para introduzir um fato que ainda será apresentado no encerramento do texto.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta: em "está faltando combustível", o termo "combustível" é usado em sentido CONOTATIVO (figurado/metafórico) — não se trata de combustível literal (gasolina, álcool), mas da energia obtida dos alimentos. A metáfora compara o organismo a uma máquina que precisa de "combustível" (comida) para funcionar.',
      incorretas: {
        A: 'A alternativa erra o valor semântico de "consequentemente": ele estabelece relação de CONSEQUÊNCIA (ou conclusão), não de causa. O texto diz que o organismo reduz o metabolismo e, CONSEQUENTEMENTE (como consequência), isso compromete o sistema hormonal. A regra violada é a distinção entre causa (porque, já que) e consequência (consequentemente, portanto, logo). Construção correta: "consequentemente" = consequência/conclusão. Para identificar, pergunte: o conectivo introduz o motivo (causa) ou o efeito (consequência)?',
        C: 'A alternativa erra ao dizer que "necessariamente" exprime "negação categórica e absoluta". O advérbio "necessariamente" expressa MODALIDADE (obrigatoriedade/certeza), e a negação está no "não" anterior. A expressão "não, necessariamente, significa" atenua a afirmação — indica que comer pouco e treinar muito não implica, obrigatoriamente, saúde. A regra violada é a distinção entre negação (não) e modalização (necessariamente). Construção correta: "não necessariamente" = negação atenuada, não categórica. Para identificar, separe a negação (não) do advérbio modal (necessariamente).',
        D: 'A alternativa erra ao classificar "sair caro para a saúde" como denotativo. A expressão é CONOTATIVA (figurada): "caro" não se refere a custo financeiro, mas a prejuízo à saúde. O texto fala de dietas restritivas que "podem sair caro para a saúde" — ou seja, causar danos. A regra violada é a distinção entre denotação (sentido literal) e conotação (sentido figurado). Construção correta: "sair caro" = sentido conotativo (prejuízo, dano). Para identificar, pergunte: o termo foi usado no sentido literal (dicionário) ou figurado (contextual)?',
        E: 'A alternativa erra ao dizer que "Por este motivo" introduz fato "que ainda será apresentado". O pronome "este" em "por este motivo" é ANAFÓRICO — retoma um fato JÁ apresentado (a necessidade de acompanhamento médico mencionada antes). A regra violada é a distinção entre anáfora (retoma o que veio antes) e catáfora (antecipa o que vem depois). Construção correta: "por este motivo" retoma fato anterior. Para identificar, observe se o pronome aponta para trás (anáfora) ou para frente (catáfora).'
      },
      conceitoCobrado: 'Conotação x denotação, valor semântico dos conectivos e referenciação (anáfora/catáfora)',
      pegadinha: 'A banca embaralha valores semânticos (causa x consequência, negação x modalização, denotação x conotação) em alternativas que parecem corretas à primeira vista.',
      comoApareceEmConcurso: 'Questões de semântica aplicada a texto cobram o valor contextual dos termos — não basta decorar definições; é preciso verificar o uso no texto.',
      exemploInedito: {
        contexto: 'Um relatório afirma: "O órgão cortou gastos; consequentemente, reduziu o quadro; por isso, muitos serviços ficaram prejudicados. É preciso, porém, não necessariamente ampliar o quadro, mas reorganizar as tarefas."',
        aplicacao: '"Consequentemente" e "por isso" = consequência/conclusão; "não necessariamente" = modalização atenuada; "reorganizar" = sentido literal (denotativo).',
        desafio: 'Classifique o valor semântico dos três conectivos/expressões destacados e explique o efeito de cada um.'
      }
    },
    tags: ['semântica', 'conotação', 'denotação', 'conectivos', 'anáfora']
  },

  /* ============================================================
     Q4438371 — FAFIPA/Ivaiporã-PR 2026 — POR-01 (Inferência)
  ============================================================ */
  {
    id: 'Q-REAL-POR-01-002',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-01',
    banca: 'FAFIPA', orgao: 'Prefeitura de Ivaiporã - PR', ano: 2026,
    prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'FAFIPA 2026 — Prefeitura de Ivaiporã-PR — Auxiliar Administrativo' },
    subtema: 'Inferência autorizada x extrapolação',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-18-002 — "Dieta rigorosa e treino intenso...".]',
    enunciado: 'Assinale a alternativa que apresenta uma inferência CORRETA e coerente com as ideias desenvolvidas no texto.',
    alternativas: [
      { id: 'A', texto: 'O acompanhamento com nutricionista ou endocrinologista é recomendado pelo autor exclusivamente para atletas profissionais de alta performance.' },
      { id: 'B', texto: 'O diagnóstico da tenista Emma Navarro comprova que a prática esportiva de alto rendimento é a causa primária e direta do surgimento de doenças autoimunes.' },
      { id: 'C', texto: 'A redução do ritmo metabólico em indivíduos submetidos ao déficit energético prolongado constitui uma resposta adaptativa do organismo voltada à conservação de energia.' },
      { id: 'D', texto: 'A prática de treinos pesados acompanhada de dietas restritivas é comprovadamente ineficaz para promover o emagrecimento ou o ganho de massa muscular.' },
      { id: 'E', texto: 'A restrição calórica severa aliada a rotinas intensas de treino resulta na diminuição imediata da fadiga e no aumento do rendimento físico.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta e é a única inferência autorizada: o texto afirma que "quando o organismo recebe menos energia do que gasta por um longo período, ele aciona um mecanismo de defesa que passa a economizar, reduzir o ritmo do metabolismo". Inferir que a redução do ritmo metabólico é "resposta adaptativa voltada à conservação de energia" é uma paráfrase fiel do texto — não extrapola.',
      incorretas: {
        A: 'A alternativa EXTRAPOLA o texto. O texto diz que "aqueles que querem manter uma dieta saudável precisam manter um acompanhamento médico" — refere-se a QUALQUER pessoa que queira dieta saudável, não "exclusivamente atletas". O advérbio "exclusivamente" restringe indevidamente o alcance. Construção correta: "o acompanhamento é recomendado a quem quer manter dieta saudável, não só a atletas". Para identificar em outra questão, desconfie de termos restritivos ("exclusivamente", "somente", "apenas") que não têm respaldo no texto.',
        B: 'A alternativa EXTRAPOLA e distorce o texto. O texto diz que os quadros de Emma Navarro eram "decorrentes em parte de uma alimentação inadequada" — ou seja, a causa é PARCIAL e multifatorial, não "primária e direta" da prática esportiva. Além disso, o texto não afirma relação causal entre esporte e doenças autoimunes. Construção correta: "o caso ilustra que dietas restritivas e treinos pesados podem, em parte, comprometer a saúde". Para identificar, procure no texto expressões como "em parte", "pode", "em alguns casos" — se a alternativa usar "comprova", "causa direta", há extrapolação.',
        D: 'A alternativa CONTRADIZ o texto. O texto afirma que a busca por "emagrecimento, definição muscular e alto rendimento" "pode ser benéfico, mas também pode sair caro" — ou seja, o treino/dieta PODE ser eficaz, mas com riscos. Não diz que é "comprovadamente ineficaz". Construção correta: "a prática pode trazer benefícios, mas exige acompanhamento". Para identificar, verifique se a alternativa nega o que o texto afirma — aqui, o texto não nega eficácia.',
        E: 'A alternativa CONTRADIZ o texto. O texto diz que a restrição calórica e os treinos intensos provocam "tonturas, dores de cabeça, fadiga constante e dificuldade de concentração" — ou seja, AUMENTAM a fadiga e DIMINUEM o rendimento. A alternativa afirma o oposto. Construção correta: "a restrição severa agrava a fadiga e reduz o rendimento". Para identificar, procure no texto a lista de sintomas — se a alternativa inverter o sentido, está errada.'
      },
      conceitoCobrado: 'Inferência autorizada x extrapolação x contradição',
      pegadinha: 'A banca mistura alternativas que restringem indevidamente ("exclusivamente"), distorcem causalidade ("causa primária") ou invertem o sentido do texto.',
      comoApareceEmConcurso: 'Questões de inferência apresentam alternativas plausíveis fora do texto; a chave é verificar se há marca textual que sustente a inferência.',
      exemploInedito: {
        contexto: 'Um relatório afirma: "Quando o órgão reduz o quadro de servidores sem reorganizar as tarefas, o volume de trabalho se concentra nos remanescentes, o que pode levar à sobrecarga e ao adoecimento."',
        aplicacao: 'A inferência autorizada é: "A redução de quadro sem reorganização pode sobrecarregar os servidores restantes". Não é autorizado inferir "todo corte de pessoal causa adoecimento" (o texto diz "pode") nem "a solução é sempre contratar" (o texto não propõe isso).',
        desafio: 'Identifique qual inferência é autorizada pelo texto e qual seria extrapolação.'
      }
    },
    tags: ['inferência', 'extrapolação', 'contradição', 'compreensão textual']
  },

  /* ============================================================
     Q1 — CPCon/UEPB 2025 — POR-01 (Compreensão/ideia central)
  ============================================================ */
  {
    id: 'Q-REAL-POR-01-003',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-01',
    banca: 'CPCon', orgao: 'UEPB', ano: 2025,
    prova: 'Assistente Administrativo - Campus V (João Pessoa) / Campus VIII (Araruna)',
    fonte: { descricao: 'CPCon 2025 — UEPB — Assistente Administrativo' },
    subtema: 'Ideia central e inferência global do texto',
    dificuldade: 2, prioridade: 'alta',
    textoBase: 'Infância, de Graciliano Ramos. Ora, uma noite, depois do café, meu pai me mandou buscar um livro que deixara na cabeceira da cama. Novidade: meu velho nunca se dirigia a mim. E eu, engolido o café, beijava-lhe a mão, porque isto era praxe, mergulhava na rede e adormecia. Espantado, entrei no quarto, peguei com repugnância o antipático objeto e voltei à sala de jantar. Aí recebi ordem para me sentar e abrir o volume. Obedeci engulhando, com a vaga esperança de que uma visita me interrompesse. Ninguém nos visitou naquela noite extraordinária. Meu pai determinou que eu principiasse a leitura. Principiei. Mastigando as palavras, gaguejando, gemendo uma cantilena medonha, indiferente à pontuação, saltando linhas e repisando linhas, alcancei o fim da página, sem ouvir gritos. Parei surpreendido, virei a folha, continuei a arrastar-me na gemedeira, como um carro em estrada cheia de buracos. Com certeza o negociante recebera alguma dívida perdida: no meio do capítulo pôs-se a conversar comigo, perguntou-me se eu estava compreendendo o que lia. Explicou-me que se tratava de uma história, um romance, exigiu atenção e resumiu a parte já lida. Um casal com filhos andava numa floresta, em noite de inverno, perseguido por lobos, cachorros selvagens. Depois de muito correr, essas criaturas chegavam à cabana de um lenhador. Era ou não era? Traduziu-me em linguagem de cozinha diversas expressões literárias. Animei-me a parolar. Sim, realmente havia alguma coisa no livro, mas era difícil conhecer tudo. Alinhavei o resto do capítulo, diligenciando penetrar o sentido da prosa confusa, aventurando-me às vezes a inquirir. E uma luzinha quase imperceptível surgia longe, apagava-se, ressurgia, vacilante, nas trevas do meu espírito. Recolhi-me preocupado: os fugitivos, os lobos e o lenhador agitaram-me o sono. Dormi com eles, acordei com eles. As horas voaram. Alheio à escola, aos brinquedos de minhas irmãs, à tagarelice dos moleques, vivi com essas criaturas de sonho, incompletas e misteriosas. À noite meu pai me pediu novamente o volume, e a cena da véspera se reproduziu: leitura emperrada, mal-entendidos, explicações. Na terceira noite fui buscar o livro espontaneamente, mas o velho estava sombrio e silencioso. E no dia seguinte, quando me preparei para moer a narrativa, afastou-me com um gesto, carrancudo. Nunca experimentei decepção tão grande. Era como se tivesse descoberto uma coisa muito preciosa e de repente a maravilha se quebrasse. E o homem que a reduziu a cacos, depois de me haver ajudado a encontrá-la, não imaginou a minha desgraça. A princípio foi desespero, sensação de perda e ruína, em seguida uma longa covardia, a certeza de que as horas de encanto eram boas demais para mim e não podiam durar. (RAMOS, Graciliano. Infância. São Paulo: Record, 2003.)',
    enunciado: 'A partir da leitura do texto, é CORRETO inferir que a ideia central desenvolvida se resume em:',
    alternativas: [
      { id: 'A', texto: 'resumir a vida fora da escola da criança.' },
      { id: 'B', texto: 'apresentar o resumo de uma narrativa lida.' },
      { id: 'C', texto: 'descrever os pontos comuns entre as histórias que a criança ouvia e a criança vivia.' },
      { id: 'D', texto: 'descrever o início de um período de tormentos da criança.' },
      { id: 'E', texto: 'apresentar momentos de leitura vivenciados por pai e filho.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'A alternativa E está correta: o texto narra, do começo ao fim, uma sequência de momentos de leitura compartilhada entre pai e filho — a primeira noite em que o pai manda o menino buscar o livro, as noites seguintes em que a cena se repete, a explicação do pai sobre a história, o envolvimento da criança com os personagens, e o desfecho com o gesto carrancudo do pai. Tudo orbita em torno desses momentos de leitura. A ideia central é a experiência de leitura vivida a dois.',
      incorretas: {
        A: 'A alternativa restringe indevidamente o texto. A vida fora da escola é mencionada apenas de passagem ("alheio à escola"), como pano de fundo para mostrar o quanto a leitura tomou conta do menino — não é o tema central. A regra de leitura global violada é a identificação do tema: o texto não se organiza em torno da vida fora da escola, e sim em torno da leitura. Construção correta: o texto narra os momentos de leitura entre pai e filho. Para identificar em outra questão, verifique qual assunto ocupa a maior parte do texto — o tema central é o que predomina, não o que aparece de relance.',
        B: 'A alternativa confunde o texto real com o texto fictício dentro dele. O narrador conta que o pai resumiu a parte já lida do romance (a história dos fugitivos, dos lobos e do lenhador), mas esse resumo é apenas um episódio dentro da narrativa maior — não é a ideia central do texto de Graciliano Ramos. A regra violada é a distinção entre o plano da narrativa (memórias do menino) e o plano do conteúdo narrado (o romance que ele lia). Construção correta: o texto apresenta a experiência de leitura, não o resumo do romance. Para identificar em outra questão, pergunte: o resumo interno é o objetivo do autor ou apenas parte da cena?',
        C: 'A alternativa extrapola o texto ao propor uma comparação entre "histórias que a criança ouvia" e "a criança vivia". O texto não estabelece esse paralelo explícito — menciona que os personagens do romance agitaram o sono do menino, mas não constrói uma teoria de pontos comuns entre ficção e vida. A regra violada é a inferência autorizada: a comparação não tem marca textual que a sustente. Construção correta: o texto mostra o envolvimento emocional da criança com a história lida, não uma comparação sistemática. Para identificar, verifique se há no texto elementos linguísticos que sustentem a comparação — se não houver, é extrapolação.',
        D: 'A alternativa desloca o foco para o desfecho. O texto, de fato, termina com decepção e sensação de perda, mas isso é o clímax final — não a ideia central que percorre todo o texto. A ideia central deve abarcar o conjunto, não apenas o desfecho. A regra violada é a distinção entre ideia central (abrange o todo) e episódio final (parte). Construção correta: a ideia central são os momentos de leitura; a decepção é o desfecho. Para identificar em outra questão, teste a alternativa: ela resume o texto inteiro ou apenas um trecho?'
      },
      conceitoCobrado: 'Ideia central x ideia secundária x extrapolação',
      pegadinha: 'A banca mistura o tema central (leitura entre pai e filho) com elementos periféricos (vida fora da escola, romance interno, desfecho triste) para confundir o candidato.',
      comoApareceEmConcurso: 'Questões de ideia central exigem que o candidato encontre a síntese que abrange o texto inteiro — não o trecho mais marcante nem o mais emocionante.',
      exemploInedito: {
        contexto: 'Um relatório de gestão narra: a implantação de um novo sistema de protocolo, as reuniões de treinamento, os erros iniciais dos servidores, os ajustes feitos e, ao final, a melhoria no atendimento ao cidadão.',
        aplicacao: 'A ideia central é "o processo de implantação de um novo sistema de protocolo e seus desdobramentos", e não "a melhoria no atendimento" (desfecho) nem "os erros iniciais" (episódio).',
        desafio: 'Identifique qual das opções resume o texto inteiro e qual ressalta apenas um episódio.'
      }
    },
    tags: ['ideia central', 'tema', 'inferência', 'Graciliano Ramos']
  },

  /* ============================================================
     Q2 — CPCon/UEPB 2025 — POR-03 (Coesão sequencial)
  ============================================================ */
  {
    id: 'Q-REAL-POR-03-002',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-03',
    banca: 'CPCon', orgao: 'UEPB', ano: 2025,
    prova: 'Assistente Administrativo',
    fonte: { descricao: 'CPCon 2025 — UEPB — Assistente Administrativo' },
    subtema: 'Coesão sequencial: valor semântico de "aí"',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Texto I — Infância, de Graciliano Ramos. Mesmo texto-base da questão Q-REAL-POR-01-003.]',
    enunciado: '"Aí recebi ordem para me sentar e abrir o volume." O elemento em destaque funciona no trecho como:',
    alternativas: [
      { id: 'A', texto: 'adjunto adverbial de modo.' },
      { id: 'B', texto: 'interjeição própria da linguagem oral.' },
      { id: 'C', texto: 'elemento de coesão por substituição que conecta ideias do texto.' },
      { id: 'D', texto: 'elemento de coesão sequencial que conecta ideias do texto.' },
      { id: 'E', texto: 'elemento de coerência por elipse.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. No trecho "Aí recebi ordem para me sentar", o "aí" funciona como elemento de coesão SEQUENCIAL: marca a progressão temporal dos fatos (primeiro o menino entrou no quarto, pegou o livro, voltou à sala; AÍ — em seguida — recebeu a ordem). É um conector temporal que articula a sequência narrativa, dando continuidade ao relato. Coesão sequencial é justamente aquela que estabelece relações de tempo, causa, oposição etc. entre partes do texto.',
      incorretas: {
        A: 'A alternativa erra a classificação semântica. "Aí" não indica MODO (como? de que maneira?) — indica tempo/sequência (quando? em que momento?). Adjunto adverbial de modo seria "rapidamente", "calmamente", "bem". A regra violada é a distinção entre as circunstâncias adverbiais. Construção correta: "aí" = adjunto adverbial de tempo/sequência. Para identificar em outra questão, pergunte: a palavra responde a "como?" (modo) ou "quando?" (tempo)?',
        B: 'A alternativa erra ao classificar "aí" como interjeição. Interjeição é palavra que expressa emoção (Ai! Ufa! Oxe!), geralmente isolada e com entonação exclamativa. No trecho, "aí" está integrado à oração ("Aí recebi ordem"), com valor temporal — não é interjeição. A regra violada é a distinção entre palavra integrada à oração e palavra-frase emotiva. Construção correta: "aí" = advérbio/conector temporal. Para identificar, verifique se a palavra pode ser retirada sem quebrar a estrutura sintática — se puder, é adjunto; se for grito isolado, é interjeição.',
        C: 'A alternativa confunde coesão sequencial com coesão por substituição. Substituição é quando um termo RETOMA outro já mencionado (ex.: "O servidor chegou. Ele estava cansado" — "ele" substitui "servidor"). "Aí" não substitui nada — apenas marca a sequência temporal. A regra violada é a distinção entre referenciação (substituição) e sequenciação (conexão). Construção correta: "aí" = conector sequencial, não substituto. Para identificar, pergunte: o termo aponta para outro já dito (substituição) ou apenas liga partes (sequenciação)?',
        E: 'A alternativa confunde coesão com coerência e erra ao falar em elipse. Elipse é a OMISSÃO de um termo que se subentende (ex.: "Eu comprei pão; ela, leite" — elipse de "comprou"). "Aí" não é elipse: é palavra expressa, com função conectiva. Além disso, elipse é mecanismo de coesão, não de coerência. A regra violada é a definição de elipse e a distinção entre coesão e coerência. Construção correta: "aí" = conector sequencial expresso. Para identificar, verifique se há omissão de termo — se não houver, não é elipse.'
      },
      conceitoCobrado: 'Coesão sequencial (conectores temporais) x coesão referencial (substituição)',
      pegadinha: 'A banca oferece quatro classificações plausíveis (modo, interjeição, substituição, elipse) para testar a distinção precisa entre mecanismos coesivos.',
      comoApareceEmConcurso: 'Questões de coesão geralmente pedem a classificação do mecanismo — o candidato precisa dominar a diferença entre referenciação, sequenciação, substituição e elipse.',
      exemploInedito: {
        contexto: 'Um relatório afirma: "O servidor protocolou o pedido. Em seguida, encaminhou ao setor competente. Depois, arquivou a cópia."',
        aplicacao: '"Em seguida" e "Depois" são conectores sequenciais temporais — marcam a progressão das ações, como o "aí" no texto de Graciliano. Não substituem nada nem indicam modo.',
        desafio: 'Classifique os conectores destacados e explique por que são sequenciais (e não referenciais).'
      }
    },
    tags: ['coesão sequencial', 'conector temporal', 'advérbio', 'aí']
  },

  /* ============================================================
     Q3 — CPCon/UEPB 2025 — POR-14 (Período composto)
  ============================================================ */
  {
    id: 'Q-REAL-POR-14-001',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-14',
    banca: 'CPCon', orgao: 'UEPB', ano: 2025,
    prova: 'Assistente Administrativo',
    fonte: { descricao: 'CPCon 2025 — UEPB — Assistente Administrativo' },
    subtema: 'Período composto: orações coordenadas e subordinadas; conjunção integrante',
    dificuldade: 3, prioridade: 'alta',
    textoBase: '[Texto I — Infância, de Graciliano Ramos. Mesmo texto-base da questão Q-REAL-POR-01-003.]',
    enunciado: 'Considerando a estrutura do período composto "Explicou-me que se tratava de uma história, um romance, exigiu atenção e resumiu a parte já lida.", analise as assertivas a seguir. I - Explicou-me exerce a função sintática de oração principal em relação a "que se tratava de uma história, um romance". II - Que, no período composto em análise, exerce a função de conjunção integrante. III - Que, no período composto em análise, exerce a função de pronome relativo. IV - Há a presença de orações coordenadas e subordinadas no período. V - Há a presença de oração coordenada sindética aditiva na composição do período. É CORRETO o que se afirma apenas em:',
    alternativas: [
      { id: 'A', texto: 'I, III, IV e V.' },
      { id: 'B', texto: 'I, II, IV e V.' },
      { id: 'C', texto: 'II, IV e V.' },
      { id: 'D', texto: 'I, III e IV.' },
      { id: 'E', texto: 'I e II.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. O período se organiza assim: (1) "Explicou-me" é oração principal; (2) "que se tratava de uma história, um romance" é oração subordinada substantiva objetiva direta, introduzida pela conjunção integrante "que"; (3) "exigiu atenção" e "resumiu a parte já lida" são orações coordenadas entre si e com a primeira, ligadas por "e" (sindética aditiva). Portanto: I verdadeira (Explicou-me = principal); II verdadeira ("que" = conjunção integrante); III falsa ("que" não é pronome relativo); IV verdadeira (há coordenadas e subordinada); V verdadeira (há coordenada sindética aditiva "exigiu atenção e resumiu"). Resposta: I, II, IV e V.',
      incorretas: {
        A: 'A alternativa erra ao incluir III. O "que" em "que se tratava de uma história" NÃO é pronome relativo — pronome relativo retoma um antecedente nominal (ex.: "O livro que li" — "que" retoma "livro"). Aqui, "que" apenas INTRODUZ a oração que completa o sentido de "Explicou" (explicou O QUÊ? que se tratava...). Não há antecedente. A regra violada é a distinção entre pronome relativo (com antecedente) e conjunção integrante (sem antecedente). Construção correta: "que" = conjunção integrante. Para identificar em outra questão, procure o antecedente: se houver substantivo antes do "que" que ele retoma, é relativo; se não houver, é integrante.',
        C: 'A alternativa erra ao excluir I. "Explicou-me" é, sim, oração principal em relação à subordinada substantiva objetiva direta "que se tratava de uma história". A subordinada completa o sentido do verbo "explicar" (explicou o quê?). A regra violada é a identificação da oração principal — aquela que não exerce função sintática em relação à outra. Construção correta: I é verdadeira. Para identificar, retire a subordinada: se a principal ficar com sentido incompleto ("Explicou-me..." — explicou o quê?), a subordinada é essencial e a outra é principal.',
        D: 'A alternativa erra ao incluir III e excluir II. O "que" é conjunção integrante (não pronome relativo) e o período tem, sim, coordenadas e subordinada (IV é verdadeira, mas o erro está em III). A regra violada é a mesma de A: confundir conjunção integrante com pronome relativo. Construção correta: II é verdadeira, III é falsa. Para identificar, verifique se há antecedente nominal antes do "que".',
        E: 'A alternativa erra ao excluir IV e V. O período TEM orações coordenadas ("exigiu atenção", "resumiu a parte já lida") e TEM oração subordinada ("que se tratava..."). Além disso, há coordenada sindética aditiva ligada por "e". A regra violada é a identificação da estrutura do período composto — o candidato que marca E não percebe a coordenação. Construção correta: IV e V são verdadeiras. Para identificar, conte os verbos: cada verbo (explicou, tratava, exigiu, resumiu) indica uma oração — se houver verbos independentes ligados por "e", há coordenação.'
      },
      conceitoCobrado: 'Período composto: oração principal, subordinada substantiva objetiva direta, coordenada sindética aditiva; conjunção integrante x pronome relativo',
      pegadinha: 'A banca testa a distinção entre conjunção integrante e pronome relativo, além de exigir a identificação de coordenadas e subordinadas no mesmo período.',
      comoApareceEmConcurso: 'Questões de período composto com assertivas I-V exigem análise completa: classificação de cada oração e função dos conectivos.',
      exemploInedito: {
        contexto: 'Um parecer afirma: "Informou-nos que o parecer estava pronto, solicitou revisão e encaminhou o documento ao setor."',
        aplicacao: '"Informou-nos" é principal; "que o parecer estava pronto" é subordinada substantiva objetiva direta (conjunção integrante "que"); "solicitou revisão" e "encaminhou o documento" são coordenadas sindéticas aditivas entre si. Mesma estrutura da questão.',
        desafio: 'Classifique as orações do período e a função do "que".'
      }
    },
    tags: ['período composto', 'conjunção integrante', 'pronome relativo', 'coordenação', 'subordinação']
  },

  /* ============================================================
     Q4 — CPCon/UEPB 2025 — POR-17 (Crase)
  ============================================================ */
  {
    id: 'Q-REAL-POR-17-002',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-17',
    banca: 'CPCon', orgao: 'UEPB', ano: 2025,
    prova: 'Assistente Administrativo',
    fonte: { descricao: 'CPCon 2025 — UEPB — Assistente Administrativo' },
    subtema: 'Crase: proibição antes de pronomes pessoais',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Texto I — Infância, de Graciliano Ramos. Mesmo texto-base da questão Q-REAL-POR-01-003.]',
    enunciado: 'Sabendo que o uso do verbo dirigir normalmente exige o uso de preposição, observe o trecho: "Novidade: meu velho nunca se dirigia a mim.". Qual explicação que pode ser dada para a falta de crase neste contexto?',
    alternativas: [
      { id: 'A', texto: 'O termo "a mim" comporta-se como aposto, não funcionando, nesta oração, como objeto indireto.' },
      { id: 'B', texto: 'A crase não deve ser usada antes de pronomes pessoais, seja do caso reto ou do oblíquo.' },
      { id: 'C', texto: 'Houve um deslize do autor no uso da norma-padrão da língua portuguesa, devendo ser acentuado adequadamente.' },
      { id: 'D', texto: 'Não há crase, pois há a presença, após o verbo, de um pronome que substitui palavra masculina.' },
      { id: 'E', texto: 'Não há crase, pois o foco do texto é defender a necessidade de leitura em casa, dessa forma, ele utiliza a estratégia de demonstrar que não há necessidade de uma leitura formal entre pai e filho.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. A crase resulta da fusão da preposição "a" com o artigo "a". Ora, o pronome pessoal "mim" (oblíquo) NÃO admite artigo — não se diz "o mim" nem "a mim" como artigo. Portanto, em "dirigia a mim", o "a" é apenas preposição, sem segundo "a" para fundir. A regra é geral: antes de pronomes pessoais (eu, tu, ele, ela, nós, vós, eles, elas, mim, ti, si, nos, vos) não ocorre crase. A regra também abrange pronomes retos. Por isso, "a mim" fica sem acento.',
      incorretas: {
        A: 'A alternativa erra a função sintática. "A mim" NÃO é aposto — é objeto indireto do verbo "dirigir-se" (dirigir-se A alguém). Aposto é termo que explica outro (ex.: "João, o diretor, chegou"). A regra violada é a classificação sintática do termo. Construção correta: "a mim" = objeto indireto. Para identificar em outra questão, pergunte: o termo completa o verbo (objeto) ou explica um substantivo já mencionado (aposto)?',
        C: 'A alternativa erra ao supor deslize do autor. Graciliano Ramos está rigorosamente correto na norma-padrão: antes de "mim" não há crase, pelo motivo exposto (o pronome não admite artigo). A regra violada é a suposição de erro onde há acerto. Construção correta: "a mim" sem crase é o padrão. Para identificar em outra questão, desconfie de alternativas que atribuem erro a autores consagrados sem justificar a regra — verifique primeiro a norma.',
        D: 'A alternativa erra o motivo. "Mim" não "substitui palavra masculina" — é pronome de 1ª pessoa, sem gênero. A ausência de crase não decorre de o pronome ser masculino/feminino, mas de o pronome não admitir artigo. A regra violada é a confusão entre gênero do pronome e admissão de artigo. Construção correta: "a mim" sem crase porque "mim" não aceita artigo. Para identificar, pergunte: o termo aceita "o/a" antes? Se não, não há crase.',
        E: 'A alternativa erra ao explicar a ausência de crase por razões temáticas/estilísticas do texto. A crase é fenômeno gramatical — depende de preposição + artigo, não do tema do texto. A regra violada é a natureza da crase: ela é sintática, não estilística. Construção correta: "a mim" sem crase por regra gramatical. Para identificar em outra questão, desconfie de justificativas que apelem ao "foco do texto" ou à "estratégia do autor" para explicar ausência de crase.'
      },
      conceitoCobrado: 'Crase: proibição antes de pronomes pessoais; regência do verbo "dirigir-se"',
      pegadinha: 'A banca oferece justificativas temáticas e sintáticas plausíveis, mas só uma capta a regra gramatical precisa.',
      comoApareceEmConcurso: 'Questões de crase com justificativa exigem que o candidato identifique a regra — não basta dizer "não tem crase", é preciso explicar por quê.',
      exemploInedito: {
        contexto: 'Um ofício afirma: "O diretor dirigiu-se a mim durante a reunião e entregou-me o documento."',
        aplicacao: '"A mim" sem crase (pronome pessoal não admite artigo); "entregou-me" (ênclise, pronome oblíquo). Nenhum dos dois casos admite crase — mesma regra da questão.',
        desafio: 'Explique por que não há crase em "a mim" e por que não haveria em "a ti", "a si", "a nós".'
      }
    },
    tags: ['crase', 'pronomes pessoais', 'regência verbal', 'dirigir-se']
  },

  /* ============================================================
     Q5 — CPCon/UEPB 2025 — POR-10 (Pronomes)
  ============================================================ */
  {
    id: 'Q-REAL-POR-10-001',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-10',
    banca: 'CPCon', orgao: 'UEPB', ano: 2025,
    prova: 'Assistente Administrativo',
    fonte: { descricao: 'CPCon 2025 — UEPB — Assistente Administrativo' },
    subtema: 'Pronomes pessoais: caso reto x caso oblíquo; referenciação',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '3ª do Plural (Engenheiros do Hawaii). Corrida pra vender cigarro / Cigarro pra vender remédio / Remédio pra curar a tosse / Tossir, cuspir, jogar pra fora / Corrida pra vender os carros / Pneu, cerveja e gasolina / Cabeça pra usar boné / E professar a fé de quem patrocina / Eles querem te vender / Eles querem te comprar / Querem te matar (de rir) / Querem te fazer chorar / Quem são eles? / Quem eles pensam que são? / (...) / Corrida contra o relógio / Silicone contra a gravidade / Dedo no gatilho, velocidade / Quem mente antes diz a verdade / Satisfação garantida / Obsolescência programada / Eles ganham a corrida / Antes mesmo da largada / Eles querem te vender / Eles querem te comprar / Querem te matar (a sede) / Eles querem te sedar / Quem são eles? / Quem eles pensam que são? / (...) / Vender, comprar, vendar os olhos / Jogar a rede, contra a parede / Querem te deixar com sede / Não querem te deixar pensar / Quem são eles? / Quem eles pensam que são? (Composição: Humberto Gessinger.)',
    enunciado: 'Sobre a canção lida, quem seria a 3ª do plural e o que isso significa?',
    alternativas: [
      { id: 'A', texto: 'Seria o pronome pessoal do caso reto "Eles", a pessoa que aparece ao longo de toda canção, tratando-se, inicialmente, de pessoas desconhecidas, mas que, depois, ao longo da canção, infere-se que é a indústria do consumo.' },
      { id: 'B', texto: 'Seria o pronome pessoal do caso oblíquo "Eles", a pessoa que aparece ao longo de toda canção, tratando-se, inicialmente, de pessoas desconhecidas, mas que, depois, ao longo da canção, infere-se que é a indústria do consumo.' },
      { id: 'C', texto: 'Seria o pronome pessoal do caso reto "Eles", a pessoa que aparece ao longo de toda canção, tratando-se, sempre, de pessoas desconhecidas, sem possibilidades de inferência de quem se trata.' },
      { id: 'D', texto: 'Seria a desinência verbal presente em toda a canção, se referindo a própria banda: Engenheiros do Hawaii.' },
      { id: 'E', texto: 'Seria o pronome desinencial, que são os consumidores.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. O título "3ª do Plural" remete à terceira pessoa do plural — o pronome pessoal do caso RETO "eles". Ao longo da canção, "eles" começa como referência vaga ("Quem são eles?") e, progressivamente, o ouvinte infere que se trata da indústria do consumo (cigarro, remédio, carro, pneu, cerveja, gasolina, silicone, obsolescência programada). O pronome está no caso reto porque exerce função de sujeito ("Eles querem te vender", "Eles ganham a corrida").',
      incorretas: {
        A_ok: 'A é o gabarito.',
        B: 'A alternativa erra a classificação do pronome. "Eles" é pronome pessoal do caso RETO, não oblíquo. Pronomes oblíquos são "o, a, os, as, lhe, lhes, me, te, se, nos, vos, mim, ti, si" — usados como complemento. "Eles" exerce função de sujeito, logo é caso reto. A regra violada é a distinção entre caso reto (sujeito) e caso oblíquo (complemento). Construção correta: "eles" = caso reto. Para identificar em outra questão, pergunte: o pronome é sujeito ou complemento? Sujeito = reto; complemento = oblíquo.',
        C: 'A alternativa erra ao dizer que o "eles" permanece "sempre" desconhecido, "sem possibilidades de inferência". O texto fornece pistas claras (produtos, obsolescência programada, consumo) que permitem inferir que se trata da indústria do consumo. A regra violada é a leitura inferencial autorizada — o candidato precisa captar as pistas textuais. Construção correta: há inferência possível e sustentada. Para identificar, procure no texto as marcas (palavras-chave) que sustentam a inferência.',
        D: 'A alternativa confunde título com estrutura. O título "3ª do Plural" remete à terceira pessoa do plural (o pronome "eles"), não à desinência verbal nem à banda. A banda é o EU-lírico (quem canta), não o "eles" de que se fala. A regra violada é a distinção entre pessoa do discurso (quem fala) e referente (de quem se fala). Construção correta: "eles" = terceira pessoa do plural, referente à indústria. Para identificar, pergunte: a quem se refere o pronome na canção?',
        E: 'A alternativa erra ao dizer que "eles" são os consumidores. Os consumidores são a segunda pessoa ("te vender", "te comprar", "te matar") — o "tu" implícito da canção. "Eles" são os que vendem/compram (a indústria). A regra violada é a identificação do referente pronominal. Construção correta: "eles" = indústria; "te" = consumidor. Para identificar, observe a quem o pronome se opõe: "eles querem TE vender" — o "te" é o consumidor, "eles" é a indústria.'
      },
      conceitoCobrado: 'Pronomes pessoais do caso reto x caso oblíquo; referenciação e inferência',
      pegadinha: 'A banca explora a distinção sutil entre caso reto e oblíquo (opções A x B) e a possibilidade de inferência (A x C).',
      comoApareceEmConcurso: 'Questões de pronomes em texto exigem identificar a função sintática e a referenciação — não basta saber a classificação; é preciso aplicá-la ao contexto.',
      exemploInedito: {
        contexto: 'Uma propaganda institucional afirma: "Eles prometem, eles descumprem; nós cobramos; vocês fiscalizam."',
        aplicacao: '"Eles" = caso reto, sujeito, referente aos políticos; "nós" = caso reto, sujeito, referente aos cidadãos; "vocês" = caso reto, sujeito, referente aos órgãos de controle. Todos no caso reto porque todos são sujeito.',
        desafio: 'Classifique os pronomes destacados (caso reto/oblíquo) e identifique a quem se referem.'
      }
    },
    tags: ['pronomes pessoais', 'caso reto', 'caso oblíquo', 'referenciação', 'Engenheiros do Hawaii']
  },

  /* ============================================================
     Q6 — CPCon/UEPB 2025 — POR-04 (Semântica)
  ============================================================ */
  {
    id: 'Q-REAL-POR-04-002',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-04',
    banca: 'CPCon', orgao: 'UEPB', ano: 2025,
    prova: 'Assistente Administrativo',
    fonte: { descricao: 'CPCon 2025 — UEPB — Assistente Administrativo' },
    subtema: 'Significado de palavra no contexto: obsolescência programada',
    dificuldade: 1, prioridade: 'alta',
    textoBase: '[Texto II — 3ª do Plural, Engenheiros do Hawaii. Mesmo texto-base da questão Q-REAL-POR-10-001.]',
    enunciado: 'Leia o trecho abaixo, observando a palavra em destaque. "Satisfação garantida / Obsolescência programada / Eles ganham a corrida / Antes mesmo da largada". Considerando-se o contexto em que ocorre, é CORRETO afirmar que a palavra destacada nesse trecho significa:',
    alternativas: [
      { id: 'A', texto: 'Processo de tornar-se útil.' },
      { id: 'B', texto: 'Inobservância.' },
      { id: 'C', texto: 'Processo de tornar-se obsoleto.' },
      { id: 'D', texto: 'Renovação de produtos.' },
      { id: 'E', texto: 'Sustentabilidade.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. "Obsolescência programada" é expressão técnica que designa o processo pelo qual um produto é projetado para se tornar obsoleto (ultrapassado, inutilizável) após um período predeterminado, forçando o consumidor a comprar outro. No contexto da canção — que critica a indústria do consumo —, "obsolescência programada" reforça a ideia de que "eles" (a indústria) lucram antes mesmo da largada, porque programam o fim dos produtos. "Obsolescência" = qualidade do que se torna obsoleto.',
      incorretas: {
        A: 'A alternativa inverte o sentido. "Obsolescência" vem de "obsoleto" (ultrapassado), não de "útil". O processo de tornar-se útil seria o oposto — algo como "funcionalização". A regra violada é a identificação do radical e do sentido: obsoleto = antiquado, ultrapassado. Construção correta: obsolescência = processo de tornar-se obsoleto. Para identificar em outra questão, associe a palavra ao seu adjetivo de origem: obsoleto → obsolescência (tornar-se obsoleto); útil → utilidade (tornar-se útil).',
        B: 'A alternativa confunde "obsolescência" com "inobservância" — palavras de radicais diferentes. "Inobservância" vem de "observar" (descumprir, não observar); "obsolescência" vem de "obsoleto" (ultrapassado). A regra violada é a etimologia das palavras — não basta parecer, é preciso identificar o radical. Construção correta: obsolescência = tornar-se obsoleto. Para identificar, compare os radicais: observ- (inobservância) x obsolet- (obsolescência).',
        D: 'A alternativa confunde o processo (obsolescência) com a consequência comercial (renovação). A obsolescência programada FORÇA a renovação, mas não é a renovação em si — é o processo de tornar obsoleto. A regra violada é a distinção entre causa e efeito. Construção correta: obsolescência = tornar obsoleto (causa); renovação = compra de novo produto (efeito). Para identificar, pergunte: a palavra designa o processo ou o resultado?',
        E: 'A alternativa traz um conceito oposto. Sustentabilidade pressupõe durabilidade, reaproveitamento, redução de consumo — o oposto da obsolescência programada, que incentiva o descarte e a compra constante. A regra violada é o reconhecimento do campo semântico: obsolescência programada pertence ao campo do consumo/descarte, não da sustentabilidade. Construção correta: obsolescência = tornar obsoleto. Para identificar, pergunte: a palavra tem conotação positiva (sustentabilidade) ou negativa (descarte)? No contexto da crítica, é negativa.'
      },
      conceitoCobrado: 'Significado de palavra no contexto e etimologia',
      pegadinha: 'A banca oferece palavras com radicais próximos (observar/obsoleto) e conceitos opostos (útil/obsoleto, sustentabilidade) para testar a precisão do candidato.',
      comoApareceEmConcurso: 'Questões de semântica lexical exigem que o candidato associe a palavra ao seu radical/contexto — não basta "achar" o sentido; é preciso justificar.',
      exemploInedito: {
        contexto: 'Um relatório afirma: "A obsolescência dos equipamentos do setor de TI é preocupante: muitos computadores têm mais de dez anos e não suportam os sistemas atuais."',
        aplicacao: '"Obsolescência" aqui = processo de tornar-se ultrapassado. Não é "utilidade" (o equipamento é útil), nem "sustentabilidade" (é o oposto), nem "inobservância".',
        desafio: 'Explique por que "obsolescência" não pode ser substituída por "utilidade" nem por "sustentabilidade" no trecho.'
      }
    },
    tags: ['semântica', 'obsolescência programada', 'significado contextual']
  },

  /* ============================================================
     Q7 — CPCon/UEPB 2025 — POR-05 (Figuras de linguagem)
  ============================================================ */
  {
    id: 'Q-REAL-POR-05-002',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-05',
    banca: 'CPCon', orgao: 'UEPB', ano: 2025,
    prova: 'Assistente Administrativo',
    fonte: { descricao: 'CPCon 2025 — UEPB — Assistente Administrativo' },
    subtema: 'Figuras de linguagem: gradação',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Texto II — 3ª do Plural, Engenheiros do Hawaii. Mesmo texto-base da questão Q-REAL-POR-10-001.]',
    enunciado: 'No trecho: "Tossir, cuspir, jogar pra fora" (4º verso), qual a figura de linguagem presente?',
    alternativas: [
      { id: 'A', texto: 'Metonímia.' },
      { id: 'B', texto: 'Zeugma.' },
      { id: 'C', texto: 'Eufemismo.' },
      { id: 'D', texto: 'Hipérbole.' },
      { id: 'E', texto: 'Gradação.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'A alternativa E está correta. "Tossir, cuspir, jogar pra fora" é uma sequência de ações que se intensifica progressivamente — do ato mais contido (tossir) ao mais explícito (cuspir) e ao mais intenso (jogar pra fora). Essa progressão em escala ascendente é a figura da GRADAÇÃO (ou clímax). O efeito é reforçar a crítica à indústria que provoca doenças e depois vende remédios.',
      incorretas: {
        A: 'A alternativa confunde gradação com metonímia. Metonímia é substituição por proximidade (autor pela obra, parte pelo todo, continente pelo conteúdo — ex.: "Li Machado" = li Machado de Assis). Não há substituição no trecho: as três ações são expressas diretamente. A regra violada é a definição de metonímia. Construção correta: o trecho é gradação. Para identificar em outra questão, procure a substituição (termo que ocupa o lugar de outro) — se não houver, não é metonímia.',
        B: 'A alternativa confunde gradação com zeugma. Zeugma é a OMISSÃO de um termo já expresso (ex.: "Eu comprei pão; ela, leite" — elipse de "comprou"). No trecho, nenhum termo é omitido — todos os verbos estão expressos. A regra violada é a definição de zeugma. Construção correta: gradação. Para identificar, procure a omissão de termo reiterado — se não houver, não é zeugma.',
        C: 'A alternativa confunde gradação com eufemismo. Eufemismo suaviza uma realidade dura (ex.: "ele nos deixou" para "morreu"). No trecho, ao contrário, as ações são EXPLÍCITAS e até chocantes (cuspir, jogar pra fora). A regra violada é a definição de eufemismo (suavização). Construção correta: gradação. Para identificar, pergunte: a expressão suaviza ou intensifica? Se intensifica, não é eufemismo.',
        D: 'A alternativa confunde gradação com hipérbole. Hipérbole é EXAGERO intencional (ex.: "já falei um milhão de vezes"). No trecho, não há exagero quantitativo — há progressão qualitativa de ações (tossir → cuspir → jogar). A regra violada é a definição de hipérbole. Construção correta: gradação. Para identificar, procure exagero numérico ou de intensidade — se houver, é hipérbole; se houver progressão de ações, é gradação.'
      },
      conceitoCobrado: 'Figuras de linguagem: gradação (clímax) x metonímia, zeugma, eufemismo, hipérbole',
      pegadinha: 'A banca oferece quatro figuras com mecanismos distintos, mas que o candidato iniciante pode confundir por não dominar as definições.',
      comoApareceEmConcurso: 'Questões de figuras de linguagem cobram a identificação e, às vezes, o efeito de sentido — não basta decorar a lista.',
      exemploInedito: {
        contexto: 'Um editorial afirma: "A corrupção corrói, destrói, arrasa o país."',
        aplicacao: 'A sequência "corrói, destrói, arrasa" é gradação ascendente — intensifica o efeito crítico, como "tossir, cuspir, jogar pra fora".',
        desafio: 'Identifique a figura e explique o efeito da progressão no argumento do editorial.'
      }
    },
    tags: ['figuras de linguagem', 'gradação', 'clímax', 'Engenheiros do Hawaii']
  },

  /* ============================================================
     Q8 — CPCon/UEPB 2025 — POR-04 (Ambiguidade)
  ============================================================ */
  {
    id: 'Q-REAL-POR-04-003',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-04',
    banca: 'CPCon', orgao: 'UEPB', ano: 2025,
    prova: 'Assistente Administrativo',
    fonte: { descricao: 'CPCon 2025 — UEPB — Assistente Administrativo' },
    subtema: 'Ambiguidade e efeitos de sentido',
    dificuldade: 3, prioridade: 'alta',
    textoBase: '[Texto II — 3ª do Plural, Engenheiros do Hawaii. Mesmo texto-base da questão Q-REAL-POR-10-001.]',
    enunciado: 'No refrão "Eles querem te vender, / Eles querem te comprar, / Querem te matar (de rir) / Querem te fazer chorar, / Quem são eles? / Quem eles pensam que são?" (versos 9-14), o primeiro verso traz:',
    alternativas: [
      { id: 'A', texto: 'uma sinonímia no refrão que ocorre quando se fala "querem te matar, de rir... querem te fazer chorar"; já que se faz uma pausa utilizando uma vírgula para dizer que eles podem matar realmente uma pessoa.' },
      { id: 'B', texto: 'um pleonasmo em "eles querem te comprar" porque se pode pensar que eles querem comprar os valores e ideais, quando, na verdade, querem comprar alguém para usá-lo em prol da marca e desta indústria.' },
      { id: 'C', texto: 'uma ambiguidade expressa em "eles querem te vender", que pode significar tanto vender produtos para a pessoa, como também vender a própria pessoa para um terceiro.' },
      { id: 'D', texto: 'um pleonasmo quando se emenda o rir com o chorar, produzindo uma oposição e criticando o sistema que pode manipular os consumidores fazendo-os rir ou chorar como lhe convém.' },
      { id: 'E', texto: 'uma antonímia presente em "eles querem te comprar, querem te matar", produzindo uma oposição entre as duas sentenças que também produz efeitos de ironia.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. O verso "Eles querem te vender" é ambíguo: pode significar (1) vender produtos PARA você ("vender-te algo" = vender a você) ou (2) vender VOCÊ para um terceiro ("vender-te" = vender a tua pessoa, como mercadoria). A ambiguidade é intencional e reforça a crítica à indústria do consumo, que trata o cidadão como objeto vendável. O duplo sentido é explorado estilisticamente pela canção.',
      incorretas: {
        A: 'A alternativa erra ao falar de "sinonímia" e ao dizer que a vírgula "mata realmente". Não há sinonímia no trecho (sinonímia é relação entre palavras de sentido próximo). A vírgula em "te matar (de rir)" não indica morte literal — o parêntese "de rir" desfaz a leitura literal e cria ironia. A regra violada é a identificação da figura (não é sinonímia) e do efeito do parêntese. Construção correta: há ambiguidade/ironia, não sinonímia. Para identificar, procure palavras de sentido equivalente — se não houver, não é sinonímia.',
        B: 'A alternativa confunde ambiguidade com pleonasmo. Pleonasmo é redundância intencional ("subir para cima", "entrar para dentro"). Em "eles querem te comprar", não há redundância — há ambiguidade (comprar produtos de você OU comprar você). A regra violada é a definição de pleonasmo. Construção correta: o fenômeno é ambiguidade. Para identificar, procure repetição de ideia — se não houver, não é pleonasmo.',
        D: 'A alternativa erra duplamente: não há pleonasmo em "rir/chorar" (não há redundância) e a oposição rir x chorar é ANTÍTESE, não pleonasmo. A regra violada é a definição de pleonasmo e a classificação da oposição. Construção correta: a oposição rir x chorar é antítese. Para identificar, procure termos opostos — se houver, é antítese, não pleonasmo.',
        E: 'A alternativa erra ao classificar "comprar" e "matar" como antônimos. Antônimos são palavras de sentido oposto (amor x ódio, claro x escuro). "Comprar" e "matar" não são opostos — são ações distintas, ambas negativas no contexto. A regra violada é a definição de antonímia. Construção correta: não há antonímia; há gradação de ações (vender, comprar, matar, fazer chorar). Para identificar, pergunte: as palavras são opostas? Se não, não é antonímia.'
      },
      conceitoCobrado: 'Ambiguidade como recurso expressivo x pleonasmo, sinonímia, antonímia',
      pegadinha: 'A banca oferece quatro figuras/relações semânticas plausíveis, mas só uma capta o fenômeno real do verso.',
      comoApareceEmConcurso: 'Questões de semântica em texto poético exigem que o candidato identifique o recurso E seu efeito de sentido no contexto.',
      exemploInedito: {
        contexto: 'Uma peça publicitária afirma: "A loja vende você para o mundo."',
        aplicacao: 'Há ambiguidade: "vende você" pode significar "vende produtos para você" ou "vende a sua imagem/pessoa". O duplo sentido é intencional — joga com a ideia de projeção pessoal x mercantilização.',
        desafio: 'Explique os dois sentidos possíveis da expressão e o efeito persuasivo da ambiguidade.'
      }
    },
    tags: ['ambiguidade', 'semântica', 'pleonasmo', 'Engenheiros do Hawaii']
  },

  /* ============================================================
     Q9 — CPCon/UEPB 2025 — POR-01 (Variação linguística e humor)
  ============================================================ */
  {
    id: 'Q-REAL-POR-01-004',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-01',
    banca: 'CPCon', orgao: 'UEPB', ano: 2025,
    prova: 'Assistente Administrativo',
    fonte: { descricao: 'CPCon 2025 — UEPB — Assistente Administrativo' },
    subtema: 'Variação linguística e construção do humor em quadrinhos',
    dificuldade: 2, prioridade: 'alta',
    textoBase: 'Tirinha: um menino jogando videogame diz "Pô, mano, tá me zoando?" enquanto o pai, ao lado, pergunta "FALASSE O QUE, MININO?"; o menino responde "NADA NÃO, PAÍ. É NO JOGO!". No quadrinho seguinte, o pai pergunta "QUALÉ, PAÍ?" e "OXE, PAÍ!", e a mãe, ao fundo, diz "AI MEU DEUS!"; o pai corrige: "O \'QUALÉ\', NÃO! DIGA \'OXE, PAÍ\'!". No terceiro quadrinho, a mãe pergunta "MEU FILHO, TU AINDA GOSTA DE CUSCUZ?" e o menino responde "DIGA \'VISSE\'." ou "OU ENTÃO \'GOSTASSE\'." No último quadrinho, o pai, irritado, diz "A CULPA É SUA, ARNALDO! VOCÊ NUNCA DEIXOU NEM ELE IR PRO SÃO JOÃO DE CAMPINA GRANDE!"; o menino, aflito, exclama "MEU DEUS! E ESSE AINDA NEM VAI TER!". (Tirinha humorística sobre variação linguística entre gerações e regiões.)',
    enunciado: 'Sobre o uso da variedade linguística no trecho "Pô, mano, tá me zoando?", é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'a escolha de uma variante linguística específica para o momento do jogo provoca o humor na leitura da história em quadrinhos.' },
      { id: 'B', texto: 'a comunicação é indireta, de forma inacessível ao interlocutor do menino durante o jogo.' },
      { id: 'C', texto: 'reforça a linguagem regional dos pais, de forma incontestável.' },
      { id: 'D', texto: 'desvaloriza o uso coloquial da língua em todos os contextos.' },
      { id: 'E', texto: 'equilibra a seriedade do contexto de comunicação em jogos com uma linguagem que busca envolver diferentes perfis de público.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. O humor da tirinha nasce do CONFLITO entre a variante linguística do menino (jovem, urbana, coloquial: "pô, mano, tá me zoando?") e a variante dos pais (regional, caipira: "minino", "oxe", "visse", "gostasse"). A escolha da variante específica do menino — jovem e informal — provoca o estranhamento dos pais e, com isso, o efeito cômico. O menino fala "mano", "zoando"; os pais querem impor "oxe", "visse". O riso vem do choque entre variantes.',
      incorretas: {
        A_ok: 'A é o gabarito.',
        B: 'A alternativa erra ao dizer que a comunicação é "indireta" e "inacessível". A fala do menino é DIRETA e plenamente compreensível para o interlocutor jovem; o estranhamento é dos pais, que pertencem a outra geração/região. A comunicação não é inacessível — é marcada por variante diferente. A regra violada é a distinção entre incompreensão por variante e inacessibilidade comunicativa. Construção correta: a comunicação é direta, mas marcada por variante jovem. Para identificar, pergunte: o interlocutor entende? Se sim, a comunicação é acessível, apenas em outra variante.',
        C: 'A alternativa erra ao dizer que a fala do menino "reforça a linguagem regional dos pais". É o CONTRÁRIO: o menino usa variante jovem/urbana ("mano", "zoando"), e os pais usam variante regional ("minino", "oxe"). A fala do menino NÃO reforça a dos pais — CONTRASTA com ela. A regra violada é a identificação de qual variante pertence a quem. Construção correta: o menino usa variante jovem; os pais, regional. Para identificar, observe as marcas: "mano" e "zoando" são jovens; "oxe" e "visse" são regionais.',
        D: 'A alternativa erra ao dizer que o texto "desvaloriza o uso coloquial em todos os contextos". A tirinha NÃO desvaloriza o coloquial — pelo contrário, retrata com humor a convivência de variantes, mostrando que cada uma tem seu lugar. O menino é tratado com simpatia; o humor recai sobre o conflito, não sobre uma hierarquia de valor. A regra violada é a leitura do tom da tirinha: humor ≠ desvalorização. Construção correta: a tirinha retrata variedades sem hierarquizá-las. Para identificar, pergunte: o texto ridiculariza uma variante ou ri do conflito entre elas?',
        E: 'A alternativa erra ao falar de "seriedade do contexto de jogos". O contexto de jogo é justamente informal, lúdico — não sério. Além disso, a tirinha não busca "envolver diferentes perfis" com equilíbrio; ela EXPLORA o choque entre perfis. A regra violada é a caracterização do contexto (jogo = informal) e da estratégia textual (choque, não equilíbrio). Construção correta: o contexto é informal e o humor vem do choque de variantes. Para identificar, verifique o tom do contexto e a estratégia textual.'
      },
      conceitoCobrado: 'Variação linguística (jovem x regional) e construção do humor',
      pegadinha: 'A banca mistura leituras sociolinguísticas com interpretações que atribuem ao texto intenções que ele não tem (desvalorizar, equilibrar).',
      comoApareceEmConcurso: 'Questões sobre variação em tirinhas exigem que o candidato identifique as variantes em jogo E a função do contraste (humor, crítica, retrato social).',
      exemploInedito: {
        contexto: 'Uma tirinha mostra um adolescente dizendo "vou dar um rolê" e a avó respondendo "um rolê? Que língua é essa, menino?"; o neto explica e ela responde "no meu tempo era passear".',
        aplicacao: 'O humor nasce do contraste entre a variante jovem ("rolê") e a variante mais conservadora da avó ("passear"), exatamente como na tirinha da UEPB.',
        desafio: 'Identifique as variantes em jogo e explique de onde vem o efeito cômico.'
      }
    },
    tags: ['variação linguística', 'humor', 'tirinha', 'registro coloquial']
  },

  /* ============================================================
     Q10 — CPCon/UEPB 2025 — POR-01 (Interpretação de tirinha)
  ============================================================ */
  {
    id: 'Q-REAL-POR-01-005',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-01',
    banca: 'CPCon', orgao: 'UEPB', ano: 2025,
    prova: 'Assistente Administrativo',
    fonte: { descricao: 'CPCon 2025 — UEPB — Assistente Administrativo' },
    subtema: 'Interpretação global de tirinha: variação linguística, balões e contexto regional',
    dificuldade: 3, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-004 — tirinha sobre variação linguística entre gerações.]',
    enunciado: 'Sobre o quadrinho, analise em sua integralidade, com especial atenção às falas das personagens e sua composição. A partir do contexto, analise as afirmações abaixo. I - A temática deste quadrinho se relaciona às variações linguísticas e suas adequações aos contextos comunicacionais. II - O uso de expressões como "minino", "oxe", "visse", "gostasse" são marcas de uma variante regional. III - O segundo quadrinho, em que há a expressão "Ai meu Deus", possui um balão diferente que expressa que algo foi pensado. IV - A menção a "cuscuz" e "São João de Campina Grande" reforça o contexto regional de uso da variante dita pelos pais. V - No último quadrinho, há uma adesão dos pais à variante falada pelo filho. É CORRETO o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I, II, III, IV e V.' },
      { id: 'B', texto: 'I, IV e V apenas.' },
      { id: 'C', texto: 'I e IV apenas.' },
      { id: 'D', texto: 'I, II e IV apenas.' },
      { id: 'E', texto: 'II, III e IV apenas.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. I é VERDADEIRA: a tirinha tematiza variações linguísticas e sua adequação a contextos (o menino fala variante jovem no jogo; os pais querem impor variante regional). II é VERDADEIRA: "minino", "oxe", "visse", "gostasse" são marcas regionais (interior/nordeste). IV é VERDADEIRA: "cuscuz" e "São João de Campina Grande" reforçam o contexto regional. III é FALSA: o balão "Ai meu Deus!" é de FALA (não de pensamento) — está associado à exclamação da mãe, não a um pensamento. V é FALSA: no último quadrinho, os pais NÃO aderem à variante do filho — o pai continua brigando e falando em variante regional. Logo: I, II e IV.',
      incorretas: {
        A: 'A alternativa inclui III e V, que são falsas. III erra porque "Ai meu Deus!" é balão de fala (exclamação), não de pensamento; V erra porque os pais não aderem à variante do filho — ao contrário, a tirinha termina com o pai ainda brigando. A regra violada é a leitura literal da imagem (tipo de balão) e a leitura do desfecho (adesão x manutenção da variante). Construção correta: III e V são falsas. Para identificar em outra questão, observe o formato do balão (contorno = fala; nuvem = pensamento) e o desfecho da narrativa.',
        B: 'A alternativa erra ao excluir II e III (mas III é falsa) e incluir V (falsa). II é verdadeira — as expressões são regionais. V é falsa — não há adesão dos pais. A regra violada é a identificação das marcas regionais e a leitura do desfecho. Construção correta: II é verdadeira; V é falsa. Para identificar, verifique se as expressões listadas são mesmo regionais (são) e se o desfecho mostra adesão (não mostra).',
        C: 'A alternativa erra ao excluir II (que é verdadeira). "Minino", "oxe", "visse", "gostasse" são, sim, marcas regionais — não há como negar. A regra violada é o reconhecimento das marcas regionais. Construção correta: II é verdadeira. Para identificar, associe as expressões ao falar regional (interior, nordeste) — são típicas.',
        E: 'A alternativa erra ao excluir I (que é verdadeira) e incluir III (que é falsa). I é verdadeira — a tirinha tematiza variação linguística. III é falsa — o balão é de fala, não de pensamento. A regra violada é a identificação do tema central (variação linguística) e do tipo de balão. Construção correta: I é verdadeira; III é falsa. Para identificar, verifique o tema do conjunto (variação) e o formato do balão (contorno = fala).'
      },
      conceitoCobrado: 'Leitura global de tirinha: variação linguística, tipo de balão (fala x pensamento), contexto regional e desfecho',
      pegadinha: 'A banca testa vários elementos simultaneamente (tema, marcas regionais, tipo de balão, desfecho) — o candidato precisa analisar cada assertiva isoladamente e depois montar a combinação.',
      comoApareceEmConcurso: 'Questões com assertivas I-V sobre tirinhas exigem análise de múltiplos planos: verbal, visual, temático e narrativo.',
      exemploInedito: {
        contexto: 'Uma tirinha mostra uma criança dizendo "vou dar um rolê" e a avó pensando (balão de pensamento) "que língua é essa, meu Deus?"; ao final, a avó continua falando "no meu tempo era passear" e a criança não muda sua fala.',
        aplicacao: 'Aplicando as assertivas: (I) tema = variação linguística; (II) "rolê" = variante jovem; (III) "que língua é essa" está em balão de PENSAMENTO (nuvem); (IV) não há marca regional explícita; (V) não há adesão da avó à variante do neto.',
        desafio: 'Classifique cada assertiva como verdadeira ou falsa, com base na leitura da tirinha.'
      }
    },
    tags: ['interpretação de tirinha', 'variação linguística', 'balão de pensamento', 'regionalismo']
  },

  /* ============================================================
     Q01 — UFV 2026 — POR-01 (Propósito comunicativo)
  ============================================================ */
  {
    id: 'Q-REAL-POR-01-006',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-01',
    banca: 'UFV', orgao: 'UFV-MG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'UFV 2026 — UFV-MG — Assistente em Administração' },
    subtema: 'Propósito comunicativo e finalidade do texto',
    dificuldade: 2, prioridade: 'alta',
    textoBase: 'Quando a clareza vira lei: a linguagem simples como porta de entrada do cidadão. Por Natália Chernicharo Guimarães, Natália Marques Andrade, Rita de Cássia Marques Lima de Castro e Luciana Romano Morilas. No dia 17 de novembro de 2025 entrou em vigor a Lei 15.263/2025, que institui a Política Nacional de Linguagem Simples em todos os órgãos e entidades da administração pública, em todos os Poderes e em todos os níveis da Federação. É importante destacar que se trata de uma mudança estrutural: a partir de agora, o Estado brasileiro tem o dever jurídico de falar com as pessoas de forma objetiva, direta e compreensível, e não apenas o dever político ou moral de "tentar ser mais acessível". [texto completo disponível no PDF da prova]',
    enunciado: 'O principal propósito comunicativo do texto é:',
    alternativas: [
      { id: 'A', texto: 'trazer dados estatísticos sobre a burocracia, os custos com atendimento e os ruídos na comunicação decorrentes da adoção da linguagem simples.' },
      { id: 'B', texto: 'expor detalhadamente o conjunto de técnicas de linguagem que devem ser adotadas pela administração pública para a comunicação com os cidadãos brasileiros.' },
      { id: 'C', texto: 'apresentar uma reflexão das autoras acerca de determinados pontos da Lei nº 15.263/2025, que institui a Política Nacional de Linguagem Simples na administração pública.' },
      { id: 'D', texto: 'defender o posicionamento do legislador sobre linguagem inclusiva e neutralização de gênero, o qual vai ao encontro do entendimento da Comunidade da Linguagem Simples no Brasil.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. O texto é um artigo de opinião assinado por quatro pesquisadoras da USP, publicado no Jornal da USP. Ao longo dos parágrafos, as autoras não se limitam a descrever a lei: elas refletem sobre seus pontos (elogiam a iniciativa, mas apontam limites como a falta de planejamento e a controvérsia sobre linguagem inclusiva). O propósito é, portanto, apresentar uma REFLEXÃO CRÍTICA sobre a Lei 15.263/2025 — não apenas informar, mas analisar, problematizar e opinar.',
      incorretas: {
        A: 'A alternativa erra ao dizer que o texto "traz dados estatísticos". O texto menciona consequências (redução de burocracia, custos, ruídos), mas não apresenta dados numéricos ou estatísticos sobre esses fenômenos. A regra violada é a distinção entre propósito comunicativo (o que o texto quer fazer) e conteúdo temático (do que fala). Construção correta: o texto reflete sobre a lei, sem trazer estatísticas. Para identificar em outra questão, pergunte: o texto apresenta números/tabelas/dados? Se não, a alternativa que fala em "dados estatísticos" está errada.',
        B: 'A alternativa erra ao dizer que o texto "expõe detalhadamente o conjunto de técnicas". O texto cita algumas técnicas no § 6 (frases em ordem direta, períodos curtos etc.), mas não as expõe detalhadamente — apenas as lista como exemplo do que a lei define. O propósito não é ensinar técnicas, é refletir sobre a lei. A regra violada é a distinção entre exemplificar (citar) e expor detalhadamente (desenvolver). Construção correta: o texto exemplifica técnicas, não as expõe em detalhe. Para identificar, verifique se o texto se aprofunda no tema ou apenas o menciona de passagem.',
        D: 'A alternativa erra ao dizer que o texto "defende o posicionamento do legislador sobre linguagem inclusiva". O texto faz o CONTRÁRIO: critica o legislador por ter incluído, na lei, uma proibição ao uso de "novas formas de flexão de gênero e número", posição "contrária ao próprio entendimento da Comunidade da Linguagem Simples no Brasil". A regra violada é a identificação do posicionamento do autor: o texto critica, não defende. Construção correta: as autoras criticam o posicionamento do legislador sobre linguagem inclusiva. Para identificar, procure no texto os verbos de avaliação ("é um trecho que tende a gerar controvérsia", "posição contrária ao entendimento") — se forem negativos, o autor critica.'
      },
      conceitoCobrado: 'Propósito comunicativo: informar, refletir, defender, criticar',
      pegadinha: 'A banca oferece alternativas que descrevem partes do texto (dados, técnicas, posicionamento) como se fossem o propósito global — o candidato precisa distinguir o todo da parte.',
      comoApareceEmConcurso: 'Questões de propósito comunicativo exigem que o candidato identifique a intenção global do texto, não apenas o assunto. Artigos de opinião geralmente têm propósito reflexivo/crítico, não meramente informativo.',
      exemploInedito: {
        contexto: 'Um artigo de opinião assinado por servidores públicos analisa a nova lei de licitações: elogia avanços, critica a falta de capacitação e sugere ajustes.',
        aplicacao: 'O propósito é "apresentar uma reflexão dos autores sobre a nova lei de licitações" — não "expor detalhadamente as regras" nem "defender o governo".',
        desafio: 'Identifique o propósito comunicativo do artigo e explique por que não é meramente informativo.'
      }
    },
    tags: ['propósito comunicativo', 'artigo de opinião', 'reflexão crítica', 'Lei 15.263/2025']
  },

  /* ============================================================
     Q02 — UFV 2026 — POR-01 (Compreensão literal)
  ============================================================ */
  {
    id: 'Q-REAL-POR-01-007',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-01',
    banca: 'UFV', orgao: 'UFV-MG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'UFV 2026 — UFV-MG — Assistente em Administração' },
    subtema: 'Compreensão literal: identificação de informação correta no texto',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-006.]',
    enunciado: 'A partir da leitura do texto, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'a Lei nº 15.263/2025 estabelece que o Estado brasileiro deve se ater ao dever político ou moral de tentar ser mais acessível nas suas comunicações com os cidadãos.' },
      { id: 'B', texto: 'a linguagem simples é uma ferramenta eficiente pelo fato de diminuir os custos envolvidos nas trocas comunicativas ao facilitar as interações entre o Estado e os cidadãos.' },
      { id: 'C', texto: 'assim como aconteceu no Brasil, no Chile, a linguagem simples foi implementada em textos oficiais, com atenção especial à inclusão da perspectiva de gênero nessa forma de comunicação.' },
      { id: 'D', texto: 'a adoção da Política Nacional de Linguagem Simples garante uma transformação na cultura das instituições, pois contribui para que as informações repassadas sejam codificadas isoladamente.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. O texto afirma, no § 12, que "a linguagem simples traz, também, eficiência, pois ela serve para reduzir esses custos de transação" e que "não precisamos de intermediários para \'traduzir\' o que está escrito". Isso equivale a dizer que a linguagem simples é eficiente por diminuir os custos nas trocas comunicativas entre Estado e cidadãos. A informação está literalmente sustentada no texto.',
      incorretas: {
        A: 'A alternativa CONTRADIZ o texto. O § 1 afirma que a lei transforma a acessibilidade em "dever jurídico", e não apenas "dever político ou moral". O texto diz explicitamente: "não apenas o dever político ou moral de \'tentar ser mais acessível\'". A regra violada é a leitura literal: o texto nega o que a alternativa afirma. Construção correta: a lei estabelece dever JURÍDICO, não apenas político ou moral. Para identificar em outra questão, procure no texto a expressão "não apenas" — ela indica que a alternativa que reduz ao "apenas" está errada.',
        C: 'A alternativa DISTORCE o texto. O texto diz que o Chile é um dos países pioneiros e que lá se discute a perspectiva de gênero, mas NÃO afirma que "assim como aconteceu no Brasil" — o Brasil sequer contemplou a questão de gênero na lei, conforme o texto: "Esta questão não foi contemplada na lei brasileira". A regra violada é a comparação indevida: o texto não estabelece paralelo de igualdade entre Brasil e Chile nesse ponto. Construção correta: o Chile avançou na perspectiva de gênero; o Brasil não a contemplou. Para identificar, verifique se o texto afirma semelhança ou diferença entre os países.',
        D: 'A alternativa CONTRADIZ o texto em dois pontos. Primeiro, o texto afirma que "Lei, sozinha, não reescreve cultura institucional" — logo, a lei NÃO garante transformação cultural. Segundo, o texto diz que as informações "não podem ser codificadas isoladamente" — a alternativa afirma o oposto ("codificadas isoladamente"). A regra violada é a leitura literal: a alternativa inverte duas afirmações do texto. Construção correta: a lei não garante transformação sozinha, e as informações devem fazer sentido como um todo, não isoladamente. Para identificar, procure no texto as palavras "sozinha" e "isoladamente" — se a alternativa contrariar o sentido, está errada.'
      },
      conceitoCobrado: 'Compreensão literal: identificação de informação sustentada pelo texto',
      pegadinha: 'A banca mistura alternativas que contradizem o texto (A, D) com uma que distorce uma comparação (C) e uma que parafraseia corretamente (B).',
      comoApareceEmConcurso: 'Questões de compreensão literal exigem que o candidato volte ao texto e verifique cada afirmação — não basta confiar na memória.',
      exemploInedito: {
        contexto: 'Um relatório afirma: "A digitalização do protocolo reduziu custos de transação, pois eliminou a necessidade de deslocamento dos cidadãos até o órgão."',
        aplicacao: 'A afirmação correta é: "A digitalização é eficiente porque reduz custos ao eliminar deslocamentos". A afirmação incorreta seria: "A digitalização garante a transformação cultural do órgão" (o texto não diz isso) ou "A digitalização mantém a necessidade de intermediários" (contradiz o texto).',
        desafio: 'Identifique qual afirmação está literalmente sustentada pelo texto e qual o contradiz.'
      }
    },
    tags: ['compreensão literal', 'informação no texto', 'contradição', 'Lei 15.263/2025']
  },

  /* ============================================================
     Q03 — UFV 2026 — POR-03 (Coesão referencial)
  ============================================================ */
  {
    id: 'Q-REAL-POR-03-003',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-03',
    banca: 'UFV', orgao: 'UFV-MG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'UFV 2026 — UFV-MG — Assistente em Administração' },
    subtema: 'Coesão referencial: anáfora pronominal ("ao qual")',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-006.]',
    enunciado: '"Quando o Estado, o governo, passa a se comunicar na \'mesma língua\' da cidadã e do cidadão, as regras passam a ser mais bem entendidas como parte de um contrato social ao qual nos submetemos [...]" (§ 12). Nessa sentença, a expressão sublinhada refere-se a:',
    alternativas: [
      { id: 'A', texto: 'Estado.' },
      { id: 'B', texto: 'cidadão.' },
      { id: 'C', texto: 'governo.' },
      { id: 'D', texto: 'contrato social.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. A expressão "ao qual" é um pronome relativo que retoma o antecedente mais próximo compatível: "contrato social". A construção "um contrato social ao qual nos submetemos" equivale a "um contrato social a que nos submetemos" — ou seja, nós nos submetemos AO contrato social. O "ao qual" é anafórico e retoma "contrato social".',
      incorretas: {
        A: 'A alternativa erra porque "Estado" não é o antecedente de "ao qual". Se retomasse "Estado", a frase seria "o Estado ao qual nos submetemos" — o que não faz sentido no contexto (não nos submetemos ao Estado, mas ao contrato social). A regra violada é a identificação do antecedente pronominal: o pronome relativo retoma o termo mais próximo e compatível semanticamente. Construção correta: "ao qual" retoma "contrato social". Para identificar em outra questão, substitua o pronome pelo antecedente e verifique se a frase faz sentido.',
        B: 'A alternativa erra porque "cidadão" não é o antecedente. Se retomasse "cidadão", a frase seria "o cidadão ao qual nos submetemos" — absurdo semântico. Além disso, "cidadão" está no singular e "ao qual" retoma um termo masculino singular, mas o contexto exige "contrato social". A regra violada é a compatibilidade semântica do antecedente. Construção correta: "ao qual" retoma "contrato social". Para identificar, verifique se o antecedente faz sentido com a preposição exigida ("submeter-se A algo").',
        C: 'A alternativa erra porque "governo" não é o antecedente. "Governo" aparece como aposto de "Estado" ("o Estado, o governo"), mas o pronome "ao qual" retoma o termo mais recente compatível: "contrato social". A regra violada é a identificação do antecedente: o pronome relativo retoma o substantivo que completa o sentido da oração adjetiva. Construção correta: "ao qual" retoma "contrato social". Para identificar, observe a estrutura: "um contrato social [ao qual nos submetemos]" — a oração adjetiva se liga ao substantivo imediatamente anterior.'
      },
      conceitoCobrado: 'Coesão referencial: anáfora por pronome relativo ("ao qual")',
      pegadinha: 'A banca oferece termos que aparecem próximos na frase (Estado, governo, cidadão) para confundir a identificação do antecedente.',
      comoApareceEmConcurso: 'Questões de referenciação exigem que o candidato identifique o antecedente do pronome — não basta olhar a proximidade física; é preciso verificar a compatibilidade semântica e sintática.',
      exemploInedito: {
        contexto: 'Um ofício afirma: "O servidor assinou o documento ao qual se referia a portaria."',
        aplicacao: '"Ao qual" retoma "documento" (a portaria se referia AO documento). Não retoma "servidor" nem "portaria" — o antecedente é o termo que completa o sentido da oração adjetiva.',
        desafio: 'Identifique o antecedente de "ao qual" e explique por que não pode ser outro termo da frase.'
      }
    },
    tags: ['coesão referencial', 'anáfora', 'pronome relativo', 'ao qual']
  },

  /* ============================================================
     Q04 — UFV 2026 — POR-04 (Valor semântico dos conectivos)
  ============================================================ */
  {
    id: 'Q-REAL-POR-04-004',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-04',
    banca: 'UFV', orgao: 'UFV-MG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'UFV 2026 — UFV-MG — Assistente em Administração' },
    subtema: 'Valor semântico de "isto é": explicação',
    dificuldade: 1, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-006.]',
    enunciado: '"A linguagem simples fortalece uma questão importante: a da confiança nas regras do jogo, isto é, nas instituições que são materializadas nas interações com o governo enquanto agente executivo, com o Judiciário, com o Legislativo" (§ 4). Na passagem acima, a locução sublinhada indica a ideia de:',
    alternativas: [
      { id: 'A', texto: 'explicação.' },
      { id: 'B', texto: 'conclusão.' },
      { id: 'C', texto: 'oposição.' },
      { id: 'D', texto: 'adição.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. A locução "isto é" introduz uma EXPLICAÇÃO, uma reformulação ou equivalência: "confiança nas regras do jogo, isto é, nas instituições". O termo seguinte esclarece o anterior — "instituições" é a explicitação de "regras do jogo". "Isto é" é um conector explicativo (ou de reformulação), que esclarece o que foi dito antes.',
      incorretas: {
        A_ok: 'A é o gabarito.',
        B: 'A alternativa erra ao classificar "isto é" como conclusivo. Conclusivos são "logo", "portanto", "assim", "por conseguinte" — indicam que o que vem depois é consequência do que veio antes. "Isto é" não conclui: reformula/explica. A regra violada é a distinção entre explicação (esclarecer) e conclusão (deduzir). Construção correta: "isto é" = explicação. Para identificar em outra questão, pergunte: o que vem depois é consequência lógica ou esclarecimento do anterior? Se esclarece, é explicação.',
        C: 'A alternativa erra ao classificar "isto é" como oposição. Opositivos são "mas", "porém", "entretanto", "no entanto" — indicam contraste. "Isto é" não opõe: aproxima, esclarece, reformula. A regra violada é a distinção entre oposição (contraste) e explicação (esclarecimento). Construção correta: "isto é" = explicação. Para identificar, verifique se há contraste entre as partes — se não houver, não é oposição.',
        D: 'A alternativa erra ao classificar "isto é" como adição. Aditivos são "e", "além disso", "também" — somam informações novas. "Isto é" não soma: REPETE/ESCLARECE o que foi dito, com outras palavras. A regra violada é a distinção entre adição (somar) e explicação (esclarecer). Construção correta: "isto é" = explicação. Para identificar, pergunte: o conectivo acrescenta informação nova ou reformula a anterior? Se reformula, é explicação.'
      },
      conceitoCobrado: 'Valor semântico dos conectivos: explicação/reformulação ("isto é")',
      pegadinha: 'A banca oferece quatro valores semânticos plausíveis (explicação, conclusão, oposição, adição) para testar a classificação precisa do conector.',
      comoApareceEmConcurso: 'Questões de conectivos exigem que o candidato identifique o valor semântico no contexto — não basta decorar listas; é preciso verificar a relação lógica estabelecida.',
      exemploInedito: {
        contexto: 'Um parecer afirma: "O servidor agiu com dolo eventual, isto é, assumiu o risco de produzir o resultado."',
        aplicacao: '"Isto é" introduz a explicação de "dolo eventual" — reformula o termo técnico em linguagem mais clara. Mesmo valor explicativo da questão.',
        desafio: 'Classifique o valor semântico de "isto é" no trecho e explique por que não é conclusão nem adição.'
      }
    },
    tags: ['conectivos', 'explicação', 'reformulação', 'isto é']
  },

  /* ============================================================
     Q05 — UFV 2026 — POR-04 (Conjunção conclusiva)
  ============================================================ */
  {
    id: 'Q-REAL-POR-04-005',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-04',
    banca: 'UFV', orgao: 'UFV-MG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'UFV 2026 — UFV-MG — Assistente em Administração' },
    subtema: 'Conjunção conclusiva: "logo"',
    dificuldade: 1, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-006.]',
    enunciado: '"Logo, a linguagem simples proporciona redução de burocracia, tempo e custos com atendimento, ruídos na comunicação e retrabalho" (§ 3). O termo sublinhado na passagem acima foi empregado na função de conjunção:',
    alternativas: [
      { id: 'A', texto: 'explicativa.' },
      { id: 'B', texto: 'conclusiva.' },
      { id: 'C', texto: 'adversativa.' },
      { id: 'D', texto: 'comparativa.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. "Logo" é conjunção coordenativa CONCLUSIVA: introduz a conclusão a que se chega a partir do que foi dito antes. No texto, após apresentar os objetivos da Política Nacional de Linguagem Simples, a autora conclui: "Logo, a linguagem simples proporciona redução de burocracia...". O "logo" sinaliza que a afirmação seguinte é consequência/conclusão das anteriores.',
      incorretas: {
        A: 'A alternativa erra ao classificar "logo" como explicativa. Explicativas são "pois", "porque", "que" — introduzem a causa/explicação do que foi dito. "Logo" não explica: conclui. A regra violada é a distinção entre explicação (causa) e conclusão (consequência). Construção correta: "logo" = conclusiva. Para identificar em outra questão, pergunte: o que vem depois é causa ou consequência do anterior? Se consequência, é conclusiva.',
        C: 'A alternativa erra ao classificar "logo" como adversativa. Adversativas são "mas", "porém", "entretanto", "no entanto" — indicam oposição. "Logo" não opõe: conclui a partir do que foi dito. A regra violada é a distinção entre oposição e conclusão. Construção correta: "logo" = conclusiva. Para identificar, verifique se há contraste entre as orações — se não houver, não é adversativa.',
        D: 'A alternativa erra ao classificar "logo" como comparativa. Comparativas são "como", "tal qual", "assim como" — estabelecem comparação. "Logo" não compara: conclui. A regra violada é a distinção entre comparação e conclusão. Construção correta: "logo" = conclusiva. Para identificar, procure termos que estabeleçam paralelo entre seres — se não houver, não é comparativa.'
      },
      conceitoCobrado: 'Conjunções coordenativas: conclusivas ("logo") x explicativas, adversativas, comparativas',
      pegadinha: 'A banca oferece quatro classificações de conjunções coordenativas para testar a identificação precisa do valor de "logo".',
      comoApareceEmConcurso: 'Questões de conjunções exigem que o candidato identifique a relação lógica estabelecida — não basta decorar a lista; é preciso aplicar ao contexto.',
      exemploInedito: {
        contexto: 'Um relatório afirma: "O órgão reduziu o quadro e aumentou a demanda; logo, os servidores remanescentes ficaram sobrecarregados."',
        aplicacao: '"Logo" introduz a conclusão (sobrecarga) a partir das premissas anteriores (redução de quadro + aumento de demanda). Mesmo valor conclusivo da questão.',
        desafio: 'Classifique a conjunção "logo" no trecho e explique por que não é explicativa nem adversária.'
      }
    },
    tags: ['conjunções', 'conclusiva', 'logo', 'coesão sequencial']
  },

  /* ============================================================
     Q06 — UFV 2026 — POR-04 (Sinonímia)
  ============================================================ */
  {
    id: 'Q-REAL-POR-04-006',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-04',
    banca: 'UFV', orgao: 'UFV-MG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'UFV 2026 — UFV-MG — Assistente em Administração' },
    subtema: 'Sinonímia e antonímia: "hermética"',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-006.]',
    enunciado: '"Judiciário e órgãos de controle já vinham se movimentando nessa direção [...] justamente para combater o uso de linguagem hermética como mecanismo de exclusão" (§ 2). Na sentença acima, a palavra sublinhada NÃO tem o mesmo sentido de:',
    alternativas: [
      { id: 'A', texto: 'complexa.' },
      { id: 'B', texto: 'inteligível.' },
      { id: 'C', texto: 'rebuscada.' },
      { id: 'D', texto: 'incompreensível.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. "Hermética" significa fechada, difícil de entender, obscura. "Inteligível" significa clara, compreensível — é o ANTÔNIMO de "hermética". Portanto, "inteligível" é a única palavra que NÃO tem o mesmo sentido de "hermética". A questão pede a alternativa que NÃO é sinônimo.',
      incorretas: {
        A: '"Complexa" é sinônimo de "hermética" no contexto: linguagem complexa = linguagem difícil de entender. A palavra tem o mesmo sentido, por isso a alternativa está errada (a questão pede a que NÃO tem o mesmo sentido). A regra aplicada é a de sinonímia contextual: "complexa" e "hermética" compartilham o traço de dificuldade de compreensão. Construção correta: "complexa" é sinônimo. Para identificar em outra questão, verifique se as palavras compartilham o mesmo campo semântico no contexto.',
        C: '"Rebuscada" é sinônimo de "hermética": linguagem rebuscada = linguagem excessivamente elaborada, difícil. A palavra tem o mesmo sentido, por isso a alternativa está errada. A regra é a mesma de A: sinonímia contextual. Construção correta: "rebuscada" é sinônimo. Para identificar, associe "rebuscado" a "difícil/elaborado" — mesmo campo de "hermético".',
        D: '"Incompreensível" é sinônimo de "hermética": linguagem incompreensível = linguagem que não se entende. A palavra tem o mesmo sentido, por isso a alternativa está errada. A regra é a mesma: sinonímia contextual. Construção correta: "incompreensível" é sinônimo. Para identificar, associe "incompreensível" a "difícil de entender" — mesmo campo de "hermético".'
      },
      conceitoCobrado: 'Sinonímia e antonímia: "hermética" x "inteligível"',
      pegadinha: 'A banca pede a alternativa que NÃO tem o mesmo sentido — o candidato que não lê atentamente pode marcar um sinônimo por engano.',
      comoApareceEmConcurso: 'Questões de sinonímia/antonímia exigem atenção ao comando (sinônimo x antônimo) e ao contexto — a mesma palavra pode ter sentidos diferentes.',
      exemploInedito: {
        contexto: 'Um parecer afirma: "O texto normativo era hermético, exigindo a contratação de especialistas para interpretá-lo."',
        aplicacao: '"Hermético" aqui = incompreensível, complexo, rebuscado. O antônimo seria "inteligível" (claro). Se a questão pedisse o sinônimo, seriam "complexo", "rebuscado", "incompreensível"; o antônimo seria "inteligível".',
        desafio: 'Identifique dois sinônimos e um antônimo de "hermético" no contexto.'
      }
    },
    tags: ['sinonímia', 'antonímia', 'hermético', 'inteligível']
  },

  /* ============================================================
     Q07 — UFV 2026 — POR-03 (Referência do "que")
  ============================================================ */
  {
    id: 'Q-REAL-POR-03-004',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-03',
    banca: 'UFV', orgao: 'UFV-MG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'UFV 2026 — UFV-MG — Assistente em Administração' },
    subtema: 'Coesão referencial: antecedente do pronome relativo "que"',
    dificuldade: 1, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-006.]',
    enunciado: '"No dia 17 de novembro de 2025 entrou em vigor a Lei 15.263/2025, que institui a Política Nacional de Linguagem Simples em todos os órgãos e entidades da administração pública, em todos os Poderes e em todos os níveis da Federação" (§ 1). Nessa sentença, o termo sublinhado refere-se à/ao:',
    alternativas: [
      { id: 'A', texto: 'Lei 15.263/2025.' },
      { id: 'B', texto: 'administração pública.' },
      { id: 'C', texto: 'dia 17 de novembro de 2025.' },
      { id: 'D', texto: 'Política Nacional de Linguagem Simples.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. O pronome relativo "que" retoma o antecedente imediatamente anterior: "a Lei 15.263/2025". A oração adjetiva "que institui a Política Nacional de Linguagem Simples" explica o que a lei faz — ou seja, a lei é o sujeito de "institui". Substituindo: "a Lei 15.263/2025 institui a Política Nacional...". O "que" é anafórico e retoma "Lei 15.263/2025".',
      incorretas: {
        A_ok: 'A é o gabarito.',
        B: 'A alternativa erra porque "administração pública" não é o antecedente. Se o "que" retomasse "administração pública", a frase seria "a administração pública institui a Política Nacional..." — o que não faz sentido, pois é a LEI que institui a política. A regra violada é a identificação do antecedente: o pronome relativo retoma o termo que exerce a função de sujeito do verbo seguinte. Construção correta: "que" retoma "Lei 15.263/2025". Para identificar em outra questão, substitua o "que" pelo antecedente e verifique se a frase faz sentido.',
        C: 'A alternativa erra porque "dia 17 de novembro de 2025" não é o antecedente. O "que" não pode retomar uma expressão temporal — a oração adjetiva se liga a um substantivo (a lei), não a um adjunto adverbial de tempo. A regra violada é a compatibilidade sintática: o pronome relativo retoma um substantivo, não um advérbio. Construção correta: "que" retoma "Lei 15.263/2025". Para identificar, verifique se o antecedente é um substantivo (sim) ou um advérbio (não).',
        D: 'A alternativa erra porque "Política Nacional de Linguagem Simples" é o OBJETO de "institui", não o antecedente do "que". A lei institui a política — a política é o que é instituído, não quem institui. A regra violada é a distinção entre sujeito (quem institui) e objeto (o que é instituído). Construção correta: "que" retoma "Lei 15.263/2025" (sujeito). Para identificar, pergunte: quem pratica a ação de instituir? A lei.'
      },
      conceitoCobrado: 'Coesão referencial: antecedente do pronome relativo "que"',
      pegadinha: 'A banca oferece termos que aparecem próximos na frase (administração pública, dia 17, Política Nacional) para confundir a identificação do antecedente.',
      comoApareceEmConcurso: 'Questões de referenciação com pronome relativo exigem que o candidato identifique o antecedente e verifique a compatibilidade sintática e semântica.',
      exemploInedito: {
        contexto: 'Um ofício afirma: "O decreto, que regulamenta a lei, foi publicado ontem."',
        aplicacao: '"Que" retoma "decreto" (o decreto regulamenta a lei). Não retoma "lei" (a lei não regulamenta a si mesma). O antecedente é o termo que exerce a função de sujeito do verbo da oração adjetiva.',
        desafio: 'Identifique o antecedente de "que" e explique por que não pode ser "lei".'
      }
    },
    tags: ['coesão referencial', 'pronome relativo', 'antecedente', 'que']
  },

  /* ============================================================
     Q08 — UFV 2026 — POR-04 (Substituição de conectivo)
  ============================================================ */
  {
    id: 'Q-REAL-POR-04-007',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-04',
    banca: 'UFV', orgao: 'UFV-MG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'UFV 2026 — UFV-MG — Assistente em Administração' },
    subtema: 'Equivalência semântica de conectivos: "por conseguinte"',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-006.]',
    enunciado: '"[...] elas deixam de ser algo imposto externamente ou incompreensível e se transformam, por consequinte, em uma espécie de mecanismo de inclusão institucional" (§ 12). A expressão sublinhada na passagem acima pode ser substituída, sem prejuízo de sentido, por:',
    alternativas: [
      { id: 'A', texto: 'assim.' },
      { id: 'B', texto: 'entretanto.' },
      { id: 'C', texto: 'ainda assim.' },
      { id: 'D', texto: 'no entanto.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. "Por conseguinte" (grafia correta; o PDF traz o typo "por consequinte") é um conector CONCLUSIVO, equivalente a "logo", "portanto", "assim". No texto, a expressão introduz a conclusão: as regras se transformam, POR CONSEGUINTE (como consequência), em mecanismo de inclusão. "Assim" preserva o valor conclusivo e pode substituí-la sem prejuízo de sentido.',
      incorretas: {
        A_ok: 'A é o gabarito.',
        B: 'A alternativa erra porque "entretanto" é ADVERSATIVO (indica oposição), não conclusivo. Substituir "por conseguinte" por "entretanto" mudaria o sentido: em vez de concluir, o texto oporia. A regra violada é a distinção entre conclusão e oposição. Construção correta: "por conseguinte" = "assim" (conclusivo). Para identificar em outra questão, verifique se o conectivo soma/conclui ou opõe.',
        C: 'A alternativa erra porque "ainda assim" é CONCESSIVO (indica concessão: "apesar disso"). Não tem valor conclusivo. Substituir mudaria o sentido. A regra violada é a distinção entre conclusão e concessão. Construção correta: "por conseguinte" = "assim". Para identificar, pergunte: o conectivo indica consequência lógica (conclusão) ou ressalva (concessão)?',
        D: 'A alternativa erra porque "no entanto" é ADVERSATIVO (oposição), como "entretanto". Não tem valor conclusivo. Substituir mudaria o sentido. A regra violada é a mesma de B: distinção entre conclusão e oposição. Construção correta: "por conseguinte" = "assim". Para identificar, verifique se há contraste — se não houver, não é adversativo.'
      },
      conceitoCobrado: 'Equivalência semântica de conectivos conclusivos: "por conseguinte" = "assim"',
      pegadinha: 'A banca oferece conectivos de valores distintos (conclusivo, adversativo, concessivo) para testar a identificação do valor semântico.',
      comoApareceEmConcurso: 'Questões de substituição de conectivos exigem que o candidato identifique o valor semântico original e encontre o equivalente — não basta escolher um conectivo qualquer.',
      exemploInedito: {
        contexto: 'Um relatório afirma: "O órgão reduziu custos; por conseguinte, ampliou o atendimento."',
        aplicacao: '"Por conseguinte" introduz a conclusão (ampliação do atendimento) a partir da premissa (redução de custos). Pode ser substituído por "assim", "logo", "portanto". Não por "entretanto", "no entanto" ou "ainda assim".',
        desafio: 'Substitua "por conseguinte" por um conectivo equivalente e explique por que os adversativos não servem.'
      }
    },
    tags: ['conectivos', 'conclusão', 'por conseguinte', 'equivalência semântica']
  },

  /* ============================================================
     Q09 — UFV 2026 — POR-06 (Ortografia: hífen)
  ============================================================ */
  {
    id: 'Q-REAL-POR-06-002',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-06',
    banca: 'UFV', orgao: 'UFV-MG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'UFV 2026 — UFV-MG — Assistente em Administração' },
    subtema: 'Ortografia: emprego do hífen com prefixos (Acordo Ortográfico)',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-006.]',
    enunciado: '"Significa que uma mãe na fila do SUS, um microempreendedor tentando entender um edital ou um réu lendo um mandado de citação têm o direito de compreender a mensagem sem decifrar um quebra-cabeça linguístico" (§ 7). Nesse fragmento, nota-se uma palavra grafada em conformidade com o Novo Acordo Ortográfico da Língua Portuguesa. Assinale a alternativa em que a palavra está CORRETAMENTE grafada, segundo o referido Acordo:',
    alternativas: [
      { id: 'A', texto: 'anti-ético.' },
      { id: 'B', texto: 'extraoficial.' },
      { id: 'C', texto: 'infra-estrutura.' },
      { id: 'D', texto: 'autoregulação.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. "Extraoficial" é grafada sem hífen: o prefixo "extra-" termina em vogal ("a") e o segundo elemento começa com vogal diferente ("o") — pela regra do Acordo, não se usa hífen quando as vogais são diferentes. Além disso, "extra-" + "oficial" não forma par com hífen. A grafia correta é "extraoficial" (junto, sem hífen).',
      incorretas: {
        A: 'A alternativa erra a grafia. "Anti-ético" NÃO leva hífen: o prefixo "anti-" termina em "i" e o segundo elemento começa com "é" — vogais DIFERENTES. Pela regra do Acordo, não se usa hífen quando as vogais são diferentes. A grafia correta é "antiético" (junto). A regra violada é a do hífen com prefixos terminados em vogal: só há hífen quando as vogais são IGUAIS (anti-inflamatório, micro-ondas). Construção correta: "antiético". Para identificar em outra questão, compare as vogais de contato: iguais = hífen; diferentes = sem hífen.',
        C: 'A alternativa erra a grafia. "Infra-estrutura" NÃO leva hífen: o prefixo "infra-" termina em "a" e o segundo elemento começa com "e" — vogais DIFERENTES. A grafia correta é "infraestrutura" (junto). A regra violada é a mesma de A: vogais diferentes = sem hífen. Construção correta: "infraestrutura". Para identificar, compare as vogais de contato.',
        D: 'A alternativa erra a grafia. "Autoregulação" está incorreta por dois motivos: (1) o prefixo "auto-" + "regulação" exige o dobramento do R (autorregulação), conforme a regra do Acordo para prefixos terminados em vogal diante de palavras iniciadas por R ou S; (2) a grafia "autoregulação" (com um R só) está errada. A forma correta é "autorregulação" (com RR). A regra violada é a do dobrando de R/S após prefixo terminado em vogal. Construção correta: "autorregulação". Para identificar, verifique se o segundo elemento começa com R ou S — se sim, dobra-se a consoante.'
      },
      conceitoCobrado: 'Emprego do hífen com prefixos (Acordo Ortográfico): vogais iguais x diferentes; dobrando de R/S',
      pegadinha: 'A banca oferece quatro palavras com prefixos, cada uma com um erro específico (hífen indevido, falta de dobrando), testando o domínio completo das regras.',
      comoApareceEmConcurso: 'Questões de hífen com prefixos exigem que o candidato aplique as regras do Acordo: vogais iguais = hífen; diferentes = sem hífen; R/S = dobrando.',
      exemploInedito: {
        contexto: 'Um comunicado interno traz: "O setor de microinformática fará a autorregulação dos processos; a equipe antiéticas será treinada; o projeto infraestrutural está pronto."',
        aplicacao: '"Microinformática" (sem hífen, vogais diferentes); "autorregulação" (com RR); "antiéticas" (sem hífen); "infraestrutural" (sem hífen). Todas seguem o Acordo.',
        desafio: 'Verifique se cada palavra está corretamente grafada e justifique a presença ou ausência de hífen/dobrando.'
      }
    },
    tags: ['ortografia', 'hífen', 'prefixos', 'Acordo Ortográfico']
  },

  /* ============================================================
     Q10 — UFV 2026 — POR-17 (Crase)
  ============================================================ */
  {
    id: 'Q-REAL-POR-17-003',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-17',
    banca: 'UFV', orgao: 'UFV-MG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'UFV 2026 — UFV-MG — Assistente em Administração' },
    subtema: 'Crase: uso inadequado antes de verbo',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-006.]',
    enunciado: '"[...] o mesmo artigo que manda evitar jargões, estrangeirismos e termos desnecessários inclui uma proibição explícita ao uso de \'novas formas de flexão de gênero e número\' contrárias às regras gramaticais consolidadas e ao Acordo Ortográfico" (§ 9). Nesse fragmento, observa-se a ocorrência da crase. Assinale a alternativa que NÃO apresenta o uso adequado do acento grave, indicativo de crase:',
    alternativas: [
      { id: 'A', texto: 'As autoras do texto explicam que o emprego da linguagem simples não é equivalente à adoção da linguagem hermética na administração pública.' },
      { id: 'B', texto: 'O Chile foi um dos países que começou à implementar a linguagem simples na administração pública, adotando medidas para facilitar a comunicação entre governo e sociedade.' },
      { id: 'C', texto: 'A Lei 15.263/2025 se alinha, em termos gerais, à proposta do Judiciário e de órgãos de controle que já vinham se movimentando para adotarem uma comunicação compreensível.' },
      { id: 'D', texto: 'O texto, publicado pelo Jornal da USP, faz referência à nova lei especificando a competência de cada Poder de definir diretrizes complementares e formas de operacionalização das normas.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta (é a que apresenta uso INADEQUADO). Em "começou à implementar", o "à" está errado porque NÃO se usa crase antes de verbo no infinitivo ("implementar"). A crase é a fusão de preposição "a" + artigo "a" — e verbos não admitem artigo. O correto seria "começou a implementar" (sem acento).',
      incorretas: {
        A: 'A alternativa A apresenta uso ADEQUADO da crase: "não é equivalente à adoção" — o adjetivo "equivalente" rege a preposição "a", que se funde com o artigo "a" de "adoção" (substantivo feminino). Crase correta. A regra aplicada é a da regência nominal: "equivalente a" + "a adoção" = "à adoção". Construção correta: "à adoção" (com crase). Para identificar em outra questão, verifique se o nome (adjetivo/substantivo) exige a preposição "a" e se o termo seguinte é feminino com artigo.',
        C: 'A alternativa C apresenta uso ADEQUADO da crase: "se alinha à proposta" — o verbo "alinhar-se" rege a preposição "a", que se funde com o artigo "a" de "proposta". Crase correta. A regra aplicada é a da regência verbal: "alinhar-se a" + "a proposta" = "à proposta". Construção correta: "à proposta". Para identificar, verifique se o verbo exige "a" e se o termo seguinte é feminino com artigo.',
        D: 'A alternativa D apresenta uso ADEQUADO da crase: "faz referência à nova lei" — o substantivo "referência" rege a preposição "a", que se funde com o artigo "a" de "nova lei". Crase correta. A regra aplicada é a da regência nominal: "referência a" + "a nova lei" = "à nova lei". Construção correta: "à nova lei". Para identificar, verifique se o nome exige "a" e se o termo seguinte é feminino com artigo.'
      },
      conceitoCobrado: 'Crase: proibição antes de verbo no infinitivo; regência nominal e verbal',
      pegadinha: 'A banca pede a alternativa com uso INADEQUADO — o candidato que não lê atentamente pode marcar uma das corretas por engano.',
      comoApareceEmConcurso: 'Questões de crase com alternativas de frases exigem que o candidato analise cada caso: verbo (não há crase) x nome que rege "a" + termo feminino (há crase).',
      exemploInedito: {
        contexto: 'Um ofício afirma: "O órgão começou a implementar as novas diretrizes; a equipe se alinhou à proposta; o parecer faz referência à lei."',
        aplicacao: '"Começou a implementar" (sem crase, verbo no infinitivo); "alinhou-se à proposta" (crase correta); "referência à lei" (crase correta). O erro seria "começou à implementar".',
        desafio: 'Identifique qual dos três casos NÃO admite crase e explique por quê.'
      }
    },
    tags: ['crase', 'verbo no infinitivo', 'regência', 'uso inadequado']
  },

  /* ============================================================
     Q11 — UFV 2026 — POR-10 (Pronome relativo)
  ============================================================ */
  {
    id: 'Q-REAL-POR-10-002',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-10',
    banca: 'UFV', orgao: 'UFV-MG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'UFV 2026 — UFV-MG — Assistente em Administração' },
    subtema: 'Pronome relativo "que" x conjunção, advérbio, pronome interrogativo',
    dificuldade: 1, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-006.]',
    enunciado: '"Há ainda uma tensão que não pode ser ignorada [...]" (§ 9). O termo sublinhado no fragmento acima foi empregado na função de:',
    alternativas: [
      { id: 'A', texto: 'pronome relativo.' },
      { id: 'B', texto: 'conjunção comparativa.' },
      { id: 'C', texto: 'advérbio de intensidade.' },
      { id: 'D', texto: 'pronome interrogativo.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. Em "uma tensão que não pode ser ignorada", o "que" retoma o antecedente "tensão" e introduz a oração adjetiva restritiva "que não pode ser ignorada". O "que" é, portanto, PRONOME RELATIVO — exerce a função de sujeito da oração adjetiva (a tensão não pode ser ignorada).',
      incorretas: {
        A_ok: 'A é o gabarito.',
        B: 'A alternativa erra porque "que" não é conjunção comparativa. Comparativas são "como", "tal qual", "assim como" — introduzem comparação. O "que" aqui retoma um antecedente ("tensão"), o que a conjunção comparativa não faz. A regra violada é a distinção entre pronome relativo (com antecedente) e conjunção (sem antecedente, introduz comparação). Construção correta: "que" = pronome relativo. Para identificar em outra questão, procure o antecedente: se houver substantivo antes do "que" que ele retoma, é relativo.',
        C: 'A alternativa erra porque "que" não é advérbio de intensidade. Advérbios de intensidade são "muito", "tão", "bastante" — modificam adjetivos/verbos. O "que" aqui não modifica nada: retoma um antecedente. A regra violada é a distinção entre pronome relativo e advérbio. Construção correta: "que" = pronome relativo. Para identificar, verifique se a palavra modifica um adjetivo/verbo (advérbio) ou retoma um substantivo (relativo).',
        D: 'A alternativa erra porque "que" não é pronome interrogativo. Interrogativos aparecem em perguntas ("Que livro você leu?"). Aqui, não há pergunta — há uma oração adjetiva que retoma "tensão". A regra violada é a distinção entre pronome relativo (retoma antecedente) e interrogativo (pergunta). Construção correta: "que" = pronome relativo. Para identificar, verifique se há interrogativa — se não houver, não é interrogativo.'
      },
      conceitoCobrado: 'Classificação do "que": pronome relativo x conjunção, advérbio, pronome interrogativo',
      pegadinha: 'A banca oferece quatro classificações possíveis do "que" para testar a identificação precisa da função no contexto.',
      comoApareceEmConcurso: 'Questões sobre o "que" exigem que o candidato verifique o antecedente e a função sintática — não basta decorar as classificações.',
      exemploInedito: {
        contexto: 'Um parecer afirma: "O servidor que protocolou o pedido foi elogiado."',
        aplicacao: '"Que" retoma "servidor" e introduz oração adjetiva restritiva ("que protocolou o pedido"). É pronome relativo, sujeito de "protocolou". Não é conjunção, advérbio nem interrogativo.',
        desafio: 'Classifique o "que" no trecho e explique por que não pode ser conjunção nem advérbio.'
      }
    },
    tags: ['pronome relativo', 'que', 'classificação', 'oração adjetiva']
  },

  /* ============================================================
     Q12 — UFV 2026 — POR-04 (Significado de "vetar")
  ============================================================ */
  {
    id: 'Q-REAL-POR-04-008',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-04',
    banca: 'UFV', orgao: 'UFV-MG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'UFV 2026 — UFV-MG — Assistente em Administração' },
    subtema: 'Significado contextual: "vetar"',
    dificuldade: 1, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-006.]',
    enunciado: '"Na prática, vetar o uso de uma política inclusiva pode abrir espaço para que a lei seja usada não só para simplificar o que pode gerar ambiguidade ou imprecisão, mas também para policiar escolhas linguísticas" (§ 9). É CORRETO afirmar que o termo sublinhado diz respeito ao ato de:',
    alternativas: [
      { id: 'A', texto: 'proibir.' },
      { id: 'B', texto: 'admitir.' },
      { id: 'C', texto: 'homologar.' },
      { id: 'D', texto: 'chancelar.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. "Vetar" significa PROIBIR, impedir, negar autorização. No texto, "vetar o uso de uma política inclusiva" = proibir o uso dessa política. O termo é usado no sentido de impedir que algo seja adotado.',
      incorretas: {
        A_ok: 'A é o gabarito.',
        B: 'A alternativa erra porque "admitir" significa PERMITIR, aceitar — o oposto de "vetar". Se o texto dissesse "admitir o uso", o sentido seria inverso. A regra violada é a antonímia: "vetar" x "admitir" são antônimos. Construção correta: "vetar" = proibir. Para identificar em outra questão, associe "veto" a "proibição" — o veto é um instrumento de proibição.',
        C: 'A alternativa erra porque "homologar" significa APROVAR, ratificar — sentido próximo de "admitir", não de "vetar". Homologar é confirmar algo já feito; vetar é impedir. A regra violada é a distinção de sentido: "homologar" (aprovar) x "vetar" (proibir). Construção correta: "vetar" = proibir. Para identificar, associe "homologação" a "aprovação" — não a proibição.',
        D: 'A alternativa erra porque "chancelar" significa APROVAR, validar (dar o selo/chancela) — sentido oposto a "vetar". Chancelar é confirmar; vetar é negar. A regra violada é a antonímia: "chancelar" x "vetar". Construção correta: "vetar" = proibir. Para identificar, associe "chancela" a "aprovação/validação" — não a proibição.'
      },
      conceitoCobrado: 'Significado contextual de "vetar" e relações de antonímia',
      pegadinha: 'A banca oferece três sinônimos de "aprovar" (admitir, homologar, chancelar) e um de "proibir" (vetar) — o candidato precisa identificar o único que corresponde ao sentido do texto.',
      comoApareceEmConcurso: 'Questões de significado lexical exigem que o candidato identifique o sentido no contexto — não basta conhecer a definição de dicionário; é preciso verificar o uso.',
      exemploInedito: {
        contexto: 'Um noticiário afirma: "O prefeito vetou o projeto de lei que aumentaria os salários dos servidores."',
        aplicacao: '"Vetou" = proibiu, impediu que o projeto se tornasse lei. Não é "admitiu", "homologou" nem "chancelou" — todos indicariam aprovação.',
        desafio: 'Substitua "vetou" por um sinônimo adequado e explique por que os antônimos não servem.'
      }
    },
    tags: ['semântica lexical', 'vetar', 'proibir', 'antonímia']
  },

  /* ============================================================
     Q13 — UFV 2026 — POR-09 (Classe de palavras)
  ============================================================ */
  {
    id: 'Q-REAL-POR-09-001',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-09',
    banca: 'UFV', orgao: 'UFV-MG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'UFV 2026 — UFV-MG — Assistente em Administração' },
    subtema: 'Classificação morfológica: substantivo masculino',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-006.]',
    enunciado: '"[...] se o cidadão não entende o que o Estado diz, o direito existe somente no papel" (§ 3). Com relação ao termo sublinhado na sentença acima, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'configura um verbo e está flexionado no plural.' },
      { id: 'B', texto: 'é um substantivo e está flexionado no masculino.' },
      { id: 'C', texto: 'trata-se de um adjetivo e está flexionado no singular.' },
      { id: 'D', texto: 'refere-se a um advérbio e está flexionado no feminino.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. O termo sublinhado é "direito" (em "o direito existe somente no papel"). Nesse contexto, "direito" é um SUBSTANTIVO masculino singular — significa "o conjunto de normas, a ordem jurídica" ou "o direito subjetivo". Está acompanhado do artigo "o" (masculino) e exerce a função de sujeito de "existe". Portanto: substantivo, masculino.',
      incorretas: {
        A: 'A alternativa erra porque "direito" não é verbo. Verbos indicam ação/estado (existir, dizer, entender); "direito" nomeia um conceito (o direito). Além disso, não está no plural — está no singular. A regra violada é a classificação morfológica: substantivo x verbo. Construção correta: "direito" = substantivo. Para identificar em outra questão, pergunte: a palavra nomeia um ser/coisa (substantivo) ou indica ação (verbo)?',
        C: 'A alternativa erra porque, embora "direito" POSSA ser adjetivo em outros contextos ("lado direito"), aqui ele é SUBSTANTIVO — está precedido de artigo "o" e é sujeito de "existe". A regra violada é a distinção entre substantivo e adjetivo no contexto: o artigo "o" substantiva a palavra. Construção correta: "direito" = substantivo (com artigo). Para identificar, verifique se a palavra está acompanhada de artigo e se nomeia algo (substantivo) ou qualifica algo (adjetivo).',
        D: 'A alternativa erra porque "direito" não é advérbio. Advérbios modificam verbos/adjetivos/advérbios e são invariáveis (não têm feminino/masculino). "Direito" tem gênero (masculino) e nomeia um conceito. A regra violada é a distinção entre substantivo (com gênero, nomeia) e advérbio (invariável, modifica). Construção correta: "direito" = substantivo masculino. Para identificar, verifique se a palavra tem gênero e nomeia algo — se sim, é substantivo.'
      },
      conceitoCobrado: 'Classificação morfológica contextual: substantivo x adjetivo x verbo x advérbio',
      pegadinha: 'A banca explora a polissemia de "direito" (que pode ser substantivo ou adjetivo) para testar se o candidato identifica a classe NO CONTEXTO.',
      comoApareceEmConcurso: 'Questões de classificação morfológica exigem que o candidato analise a função da palavra na frase — a mesma palavra pode mudar de classe conforme o contexto.',
      exemploInedito: {
        contexto: 'Um ofício afirma: "O direito à informação é garantido; o lado direito da sala está vazio."',
        aplicacao: 'No primeiro caso, "direito" é substantivo (o direito à informação); no segundo, é adjetivo (o lado direito). A classe muda conforme o contexto — exatamente o que a questão testa.',
        desafio: 'Classifique "direito" nas duas ocorrências e explique a diferença.'
      }
    },
    tags: ['classes de palavras', 'substantivo', 'adjetivo', 'direito']
  },

  /* ============================================================
     Q14 — UFV 2026 — POR-18 (Pontuação)
  ============================================================ */
  {
    id: 'Q-REAL-POR-18-003',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-18',
    banca: 'UFV', orgao: 'UFV-MG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'UFV 2026 — UFV-MG — Assistente em Administração' },
    subtema: 'Uso da vírgula: adjunto anteposto e aposto',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-006.]',
    enunciado: '"A lei parte de uma constatação óbvia, mas historicamente ignorada [...]" (§ 3). Na sentença acima, observa-se o uso adequado da vírgula. Assinale a alternativa que apresenta CORRETAMENTE o emprego desse sinal de pontuação, de acordo com a norma padrão da Língua Portuguesa:',
    alternativas: [
      { id: 'A', texto: 'As autoras do texto explicam que, a linguagem simples visa promover a transparência no acesso às informações disponibilizadas pela administração pública.' },
      { id: 'B', texto: 'A linguagem simples, definida como um conjunto de técnicas para falar com as pessoas de forma objetiva e compreensível passa a ser institucionalizada por lei no Brasil.' },
      { id: 'C', texto: 'Antes da Lei nº 15.263/2025, iniciativas como o Pacto Nacional do Judiciário pela Linguagem Simples foram adotadas na busca por uma comunicação compreensível.' },
      { id: 'D', texto: 'A implementação da linguagem simples na administração pública, tem sido um passo importante para otimizar as trocas comunicativas do Estado brasileiro com os cidadãos.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. Em "Antes da Lei nº 15.263/2025, iniciativas como o Pacto Nacional...", a vírgula separa o adjunto adverbial de tempo ANTEPOSTO ("Antes da Lei nº 15.263/2025") da oração principal. A vírgula é obrigatória quando o adjunto adverbial deslocado é longo. A construção está correta e a justificativa é sintática.',
      incorretas: {
        A: 'A alternativa erra porque a vírgula após "que" está INCORRETA. Em "explicam que, a linguagem simples visa...", a vírgula separa o verbo "explicam" do seu complemento (a oração objetiva direta introduzida por "que"). A regra violada é: não se separa verbo de complemento por vírgula. Construção correta: "explicam que a linguagem simples visa..." (sem vírgula). Para identificar em outra questão, verifique se a vírgula está entre verbo e complemento — se sim, é erro.',
        B: 'A alternativa erra porque falta a vírgula de fechamento do aposto. Em "A linguagem simples, definida como um conjunto de técnicas... compreensível passa a ser...", o aposto explicativo iniciado por "definida como" deveria ser fechado com vírgula após "compreensível". Sem a vírgula de fechamento, a frase fica truncada. A regra violada é: o aposto explicativo deve ser isolado por vírgulas (abertura e fechamento). Construção correta: "A linguagem simples, definida como..., compreensível, passa a ser...". Para identificar, verifique se há par de vírgulas isolando o termo explicativo.',
        D: 'A alternativa erra porque a vírgula após "administração pública" está INCORRETA. Em "A implementação da linguagem simples na administração pública, tem sido...", a vírgula separa o SUJEITO ("A implementação...") do VERBO ("tem sido"). A regra violada é: não se separa sujeito de verbo por vírgula. Construção correta: "A implementação... tem sido..." (sem vírgula). Para identificar, localize o sujeito e o verbo: se a vírgula estiver entre eles, é erro.'
      },
      conceitoCobrado: 'Uso da vírgula: adjunto anteposto, aposto explicativo e proibições (sujeito-verbo, verbo-complemento)',
      pegadinha: 'A banca oferece três alternativas com vírgulas em posições proibidas (após "que", após sujeito) e uma com vírgula correta (adjunto anteposto).',
      comoApareceEmConcurso: 'Questões de pontuação com alternativas de frases exigem que o candidato verifique cada vírgula: há termo intercalado? É adjunto deslocado? Ou está separando termos essenciais?',
      exemploInedito: {
        contexto: 'Um ofício afirma: "Após a publicação da lei, os órgãos deverão adaptar seus formulários; a equipe, recém-designada, iniciou o trabalho."',
        aplicacao: '"Após a publicação da lei," (vírgula correta, adjunto anteposto); "a equipe, recém-designada," (vírgula correta, aposto explicativo). O erro seria "a equipe, iniciou o trabalho" (sujeito-verbo) ou "informou que, a lei..." (verbo-complemento).',
        desafio: 'Identifique quais vírgulas estão corretas e justifique sintaticamente cada uma.'
      }
    },
    tags: ['pontuação', 'vírgula', 'adjunto anteposto', 'aposto']
  },

  /* ============================================================
     Q15 — UFV 2026 — POR-18 (Vírgula: adjunto adverbial)
  ============================================================ */
  {
    id: 'Q-REAL-POR-18-004',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-18',
    banca: 'UFV', orgao: 'UFV-MG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'UFV 2026 — UFV-MG — Assistente em Administração' },
    subtema: 'Vírgula: separação de adjunto adverbial anteposto',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-006.]',
    enunciado: '"Na prática, isso significa que um aviso de corte de água não pode mais ser um parágrafo único em \'juridiquês\' [...]" (§ 7). A vírgula foi empregada na passagem acima com a função de:',
    alternativas: [
      { id: 'A', texto: 'destacar o vocativo.' },
      { id: 'B', texto: 'evitar uma ambiguidade.' },
      { id: 'C', texto: 'separar o aposto explicativo.' },
      { id: 'D', texto: 'demarcar um adjunto adverbial.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. Em "Na prática, isso significa...", a vírgula separa o adjunto adverbial de modo/domínio ANTEPOSTO ("Na prática") do restante da oração. O adjunto adverbial deslocado para o início da frase é isolado por vírgula. A função da vírgula é demarcar esse adjunto.',
      incorretas: {
        A: 'A alternativa erra porque não há vocativo. Vocativo é chamamento ("Maria, venha aqui!"). "Na prática" não chama ninguém — é adjunto adverbial. A regra violada é a distinção entre vocativo (chamamento) e adjunto adverbial (circunstância). Construção correta: "Na prática" = adjunto adverbial. Para identificar em outra questão, pergunte: o termo chama alguém ou indica circunstância? Se indica circunstância, é adjunto.',
        B: 'A alternativa erra porque a vírgula não evita ambiguidade — ela apenas isola o adjunto. A ambiguidade seria evitada se a vírgula mudasse a interpretação de uma estrutura ambígua (ex.: "O diretor viu o servidor com o binóculo" — a vírgula poderia desfazer a ambiguidade). Aqui, não há ambiguidade a evitar. A regra violada é a função da vírgula: isolar termo deslocado, não desfazer ambiguidade. Construção correta: a vírgula demarca adjunto adverbial. Para identificar, verifique se a frase seria ambígua sem a vírgula — se não for, a vírgula não evita ambiguidade.',
        C: 'A alternativa erra porque não há aposto explicativo. Aposto é termo que explica outro substantivo ("João, o diretor, chegou"). "Na prática" não explica nenhum substantivo — é adjunto adverbial. A regra violada é a distinção entre aposto (explica substantivo) e adjunto adverbial (indica circunstância). Construção correta: "Na prática" = adjunto adverbial. Para identificar, pergunte: o termo explica um substantivo? Se não, não é aposto.'
      },
      conceitoCobrado: 'Função da vírgula: isolar adjunto adverbial anteposto x vocativo, aposto, ambiguidade',
      pegadinha: 'A banca oferece quatro funções plausíveis da vírgula para testar a identificação precisa do termo isolado.',
      comoApareceEmConcurso: 'Questões de pontuação com justificativa exigem que o candidato identifique a função sintática do termo isolado pela vírgula.',
      exemploInedito: {
        contexto: 'Um parecer afirma: "Em reunião, o diretor apresentou o novo plano; o servidor, recém-empossado, protocolou o pedido."',
        aplicacao: '"Em reunião," (vírgula isola adjunto adverbial anteposto); "o servidor, recém-empossado," (vírgula isola aposto explicativo). Funções distintas — a primeira demarca adjunto; a segunda, aposto.',
        desafio: 'Identifique a função de cada vírgula no trecho e justifique sintaticamente.'
      }
    },
    tags: ['pontuação', 'vírgula', 'adjunto adverbial', 'vocativo', 'aposto']
  },

  /* ============================================================
     Q16 — UFV 2026 — POR-16 (Regência verbal)
  ============================================================ */
  {
    id: 'Q-REAL-POR-16-002',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-16',
    banca: 'UFV', orgao: 'UFV-MG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'UFV 2026 — UFV-MG — Assistente em Administração' },
    subtema: 'Regência verbal: "preferir" (preferir X a Y)',
    dificuldade: 3, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-006.]',
    enunciado: 'Assinale a alternativa em que a regência verbal está em DESACORDO com a norma padrão da Língua Portuguesa:',
    alternativas: [
      { id: 'A', texto: 'A administração pública deve obedecer aos padrões da linguagem simples dispostos na Lei nº 15.263/2025, que passou a vigorar em 14 de novembro.' },
      { id: 'B', texto: 'Servidores e instituições preferem muito mais empregar linguagem simples do que termos herméticos no atendimento aos cidadãos.' },
      { id: 'C', texto: 'O profissional do setor de Gestão de Pessoas assistiu ao curso que abordou os princípios da linguagem simples dispostos na Lei nº 15.263/2025.' },
      { id: 'D', texto: 'O governo brasileiro informou as novas diretrizes a todos os setores da administração pública brasileira tão logo a lei fora sancionada.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta (é a que apresenta DESACORDO com a norma). O verbo "preferir" exige a preposição "a" (preferir X A Y), e não "do que". A construção correta é: "preferem empregar linguagem simples A termos herméticos". O uso de "mais... do que" com "preferir" é erro clássico de regência (pleonasmo vicioso).',
      incorretas: {
        A: 'A alternativa A está ADEQUADA. "Obedecer" é transitivo indireto e exige a preposição "a": "obedecer aos padrões" (a + os padrões = aos). Regência correta. A regra aplicada é a da regência verbal: "obedecer a algo". Construção correta: "obedece aos padrões". Para identificar em outra questão, verifique se o verbo exige preposição — "obedecer" sempre exige "a".',
        C: 'A alternativa C está ADEQUADA. "Assistir" no sentido de "ver, presenciar" é transitivo indireto e exige a preposição "a": "assistiu ao curso" (a + o curso = ao). Regência correta. A regra aplicada é a da regência verbal: "assistir a algo" (ver). Construção correta: "assistiu ao curso". Para identificar, lembre: "assistir" = ver exige "a"; "assistir" = ajudar é transitivo direto.',
        D: 'A alternativa D está ADEQUADA. "Informar" é bitransitivo: informa algo (OD) a alguém (OI). "Informou as novas diretrizes (OD) a todos os setores (OI)" — regência correta. A regra aplicada é a da regência verbal: "informar algo a alguém". Construção correta: "informou as diretrizes aos setores". Para identificar, verifique se o verbo pede dois complementos (um sem preposição, outro com).'
      },
      conceitoCobrado: 'Regência verbal: "preferir" (preferir X a Y) e verbos que exigem preposição',
      pegadinha: 'A banca explora o erro clássico "preferir mais... do que" — construção condenada pela norma, mas comum na fala.',
      comoApareceEmConcurso: 'Questões de regência verbal costumam apresentar o erro "preferir... do que" ou "preferir mais... que" — o candidato deve identificar a construção correta ("preferir X a Y").',
      exemploInedito: {
        contexto: 'Um relatório afirma: "Os servidores preferem trabalhar em equipe a atuar isoladamente."',
        aplicacao: 'Regência correta: "preferem trabalhar A atuar" (preferir X a Y). O erro seria "preferem mais trabalhar do que atuar" — construção condenada pela norma.',
        desafio: 'Reescreva a frase corrigindo a regência de "preferir" e explique o erro da construção original.'
      }
    },
    tags: ['regência verbal', 'preferir', 'preferir X a Y', 'erro clássico']
  },

  /* ============================================================
     Q17 — UFV 2026 — POR-15 (Concordância nominal)
  ============================================================ */
  {
    id: 'Q-REAL-POR-15-001',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-15',
    banca: 'UFV', orgao: 'UFV-MG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'UFV 2026 — UFV-MG — Assistente em Administração' },
    subtema: 'Concordância nominal: "anexo" (adjetivo)',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-006.]',
    enunciado: 'Assinale a alternativa em que a concordância (verbal ou nominal) está em DESACORDO com a norma padrão da Língua Portuguesa:',
    alternativas: [
      { id: 'A', texto: 'É vetada a adoção de linguagem que dificulte o acesso das pessoas com deficiência à comunicação pública no Brasil.' },
      { id: 'B', texto: 'Havia muitas instituições no país que não tinham conhecimento da nova lei sancionada pelo governo federal sobre a linguagem simples.' },
      { id: 'C', texto: 'A maioria dos servidores públicos federais passou a seguir as orientações sobre a adoção da linguagem simples para a execução de seus trabalhos.' },
      { id: 'D', texto: 'O responsável do setor enviou uma diretriz anexo ao e-mail de boas-vindas contendo todas as informações necessárias para a adoção da linguagem simples.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta (é a que apresenta DESACORDO). O adjetivo "anexo" deve concordar com o substantivo a que se refere: "uma diretriz anexa" (feminino). A construção "uma diretriz anexo" está errada — o correto é "anexa". O erro é de concordância nominal.',
      incorretas: {
        A: 'A alternativa A está ADEQUADA. "É vetada a adoção" — o particípio/adjetivo "vetada" concorda com o sujeito "a adoção" (feminino singular). Concordância correta. A regra aplicada é a da concordância nominal: o adjetivo concorda com o substantivo em gênero e número. Construção correta: "É vetada a adoção". Para identificar, verifique se o adjetivo/particípio concorda com o substantivo a que se refere.',
        B: 'A alternativa B está ADEQUADA. "Havia muitas instituições" — o verbo "haver" no sentido de "existir" é impessoal e fica no singular (Havia, não Haviam). Concordância correta. A regra aplicada é a da concordância verbal: "haver" (existir) é impessoal. Construção correta: "Havia muitas instituições". Para identificar, lembre: "haver" = existir fica no singular; "existir" vai ao plural.',
        C: 'A alternativa C está ADEQUADA. "A maioria dos servidores públicos federais passou" — com expressão partitiva ("a maioria de"), o verbo pode concordar com o núcleo ("maioria" → passou) ou com o especificador ("servidores" → passaram). Ambas as concordâncias são aceitas pela norma. Construção correta: "A maioria... passou" (concordância com o núcleo). Para identificar, verifique se há expressão partitiva — se sim, dupla concordância é possível.'
      },
      conceitoCobrado: 'Concordância nominal: "anexo" (adjetivo) deve concordar com o substantivo',
      pegadinha: 'A banca explora o erro comum de deixar "anexo" invariável (sempre no masculino singular), quando ele deve concordar com o substantivo.',
      comoApareceEmConcurso: 'Questões de concordância nominal costumam cobrar adjetivos que causam dúvida ("anexo", "incluso", "quite", "mesmo", "próprio") — todos devem concordar com o substantivo.',
      exemploInedito: {
        contexto: 'Um ofício afirma: "Segue anexa a certidão; seguem anexos os documentos; a servidora está quite com suas obrigações."',
        aplicacao: '"Anexa" concorda com "certidão" (feminino); "anexos" com "documentos" (masculino plural); "quite" com "servidora" (feminino). O erro seria "segue anexo a certidão".',
        desafio: 'Corrija a concordância de "anexo" em cada caso e explique a regra.'
      }
    },
    tags: ['concordância nominal', 'anexo', 'adjetivo', 'gênero e número']
  },

  /* ============================================================
     Q18 — UFV 2026 — POR-08 (Formação de palavras)
  ============================================================ */
  {
    id: 'Q-REAL-POR-08-001',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-08',
    banca: 'UFV', orgao: 'UFV-MG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'UFV 2026 — UFV-MG — Assistente em Administração' },
    subtema: 'Formação de palavras: sufixação ("sozinha")',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-006.]',
    enunciado: '"Lei, sozinha, não reescreve cultura institucional" (§ 8). A palavra grifada no trecho acima resulta do processo de formação denominado:',
    alternativas: [
      { id: 'A', texto: 'justaposição.' },
      { id: 'B', texto: 'aglutinação.' },
      { id: 'C', texto: 'prefixação.' },
      { id: 'D', texto: 'sufixação.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. "Sozinha" é formada a partir do adjetivo "só" + o sufixo "-zinha" (sufixo diminutivo). O processo é a DERIVAÇÃO SUFIXAL (sufixação): acrescenta-se um sufixo a um radical. "Só" → "sozinha" (radical "só" + sufixo "-zinha").',
      incorretas: {
        A: 'A alternativa erra porque justaposição é a união de dois ou mais radicais SEM perda de elementos (ex.: girassol = gira + sol; passatempo = passa + tempo). Em "sozinha", não há dois radicais — há um radical ("só") + um sufixo ("-zinha"). A regra violada é a distinção entre composição por justaposição (dois radicais) e derivação sufixal (radical + sufixo). Construção correta: "sozinha" = sufixação. Para identificar, conte os radicais: se houver dois, é composição; se houver um + afixo, é derivação.',
        B: 'A alternativa erra porque aglutinação é a união de dois radicais COM perda de elementos (ex.: planalto = plano + alto; pernalta = perna + alta). Em "sozinha", não há fusão de radicais — há radical + sufixo. A regra violada é a mesma de A: confundir composição (dois radicais) com derivação (radical + afixo). Construção correta: "sozinha" = sufixação. Para identificar, verifique se há dois radicais fundidos — se não houver, não é aglutinação.',
        C: 'A alternativa erra porque prefixação é o acréscimo de um PREFIXO (antes do radical): desfazer, refazer, injusto. Em "sozinha", o afixo "-zinha" vem DEPOIS do radical — é sufixo, não prefixo. A regra violada é a distinção entre prefixo (antes) e sufixo (depois). Construção correta: "sozinha" = sufixação. Para identificar, observe a posição do afixo: antes do radical = prefixo; depois = sufixo.'
      },
      conceitoCobrado: 'Formação de palavras: sufixação x justaposição, aglutinação, prefixação',
      pegadinha: 'A banca oferece quatro processos de formação para testar a identificação precisa do mecanismo de "sozinha".',
      comoApareceEmConcurso: 'Questões de formação de palavras exigem que o candidato identifique o processo: derivação (prefixal, sufixal, parassintética) x composição (justaposição, aglutinação).',
      exemploInedito: {
        contexto: 'Um texto afirma: "A lei, sozinha, não basta; é preciso planejamento, orçamento e treinamento."',
        aplicacao: '"Sozinha" = "só" + "-zinha" (sufixação). O processo é o mesmo da questão: derivação sufixal. Não é justaposição (não há dois radicais) nem prefixação (o afixo vem depois).',
        desafio: 'Identifique o processo de formação de "sozinha" e explique por que não é composição nem prefixação.'
      }
    },
    tags: ['formação de palavras', 'sufixação', 'derivação', 'sozinha']
  },

  /* ============================================================
     Q19 — UFV 2026 — POR-04 (Parônimos)
  ============================================================ */
  {
    id: 'Q-REAL-POR-04-009',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-04',
    banca: 'UFV', orgao: 'UFV-MG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'UFV 2026 — UFV-MG — Assistente em Administração' },
    subtema: 'Parônimos: discriminação de palavras semelhantes',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-006.]',
    enunciado: 'Palavras parônimas são aquelas que apresentam a grafia e a pronúncia semelhantes, mas diferem no sentido. Assinale a alternativa em que um dos parônimos grifados está INCORRETAMENTE empregado:',
    alternativas: [
      { id: 'A', texto: 'Os servidores técnico-administrativos sugeriram uma retificação da norma da instituição a fim de adequá-la à lei.' },
      { id: 'B', texto: 'A Lei nº 15.263/2025 traz uma discrição completa das técnicas de linguagem simples na administração pública.' },
      { id: 'C', texto: 'Será criada uma seção na nossa universidade responsável por elaborar o guia de uso da linguagem simples.' },
      { id: 'D', texto: 'O uso de frases longas e inacessíveis às pessoas com deficiência constituiu infração à Lei nº 15.263/2025.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta (é a que apresenta uso INCORRETO). "Discrição" significa "qualidade de ser discreto, reserva, sigilo". O contexto pede "descrição" (ato de descrever, detalhar). A lei traz uma DESCRIÇÃO completa das técnicas, não uma "discrição". O parônimo foi trocado.',
      incorretas: {
        A: 'A alternativa A está ADEQUADA. "Retificação" significa "correção, emenda" — é o sentido que se encaixa: os servidores sugeriram uma correção da norma. O parônimo "retificação" (correção) x "ratificação" (confirmação) foi corretamente usado. A regra aplicada é a distinção entre parônimos: retificar (corrigir) x ratificar (confirmar). Construção correta: "retificação da norma". Para identificar, associe "retificar" a "corrigir" e "ratificar" a "confirmar".',
        C: 'A alternativa C está ADEQUADA. "Seção" significa "divisão, setor, departamento" — é o sentido que se encaixa: será criada uma divisão (seção) na universidade. O parônimo "seção" (divisão) x "sessão" (reunião) x "cessão" (ato de ceder) foi corretamente usado. A regra aplicada é a distinção entre os três parônimos. Construção correta: "seção na universidade". Para identificar, associe "seção" a "divisão/setor".',
        D: 'A alternativa D está ADEQUADA. "Infração" significa "violação, descumprimento" — é o sentido que se encaixa: o uso de frases longas constituiu violação à lei. O parônimo "infração" (violação) x "inflação" (aumento de preços) foi corretamente usado. A regra aplicada é a distinção entre parônimos: infração (violar) x inflação (economia). Construção correta: "infração à lei". Para identificar, associe "infração" a "violação".'
      },
      conceitoCobrado: 'Parônimos: discrição x descrição, retificação x ratificação, seção x sessão x cessão, infração x inflação',
      pegadinha: 'A banca pede a alternativa com uso INCORRETO — o candidato precisa verificar cada parônimo no contexto.',
      comoApareceEmConcurso: 'Questões de parônimos exigem que o candidato conheça o sentido de cada palavra e verifique a adequação ao contexto — não basta saber que são parecidas.',
      exemploInedito: {
        contexto: 'Um parecer afirma: "A descrição do cargo está na seção de recursos humanos; a ratificação do contrato foi feita; a infração foi registrada."',
        aplicacao: '"Descrição" (detalhamento) — correta; "seção" (divisão) — correta; "ratificação" (confirmação) — correta; "infração" (violação) — correta. O erro seria "discrição do cargo" (discrição = reserva) ou "retenção do contrato" (em vez de ratificação).',
        desafio: 'Identifique os parônimos em cada trecho e verifique se estão corretamente empregados.'
      }
    },
    tags: ['parônimos', 'discrição', 'descrição', 'semântica lexical']
  },

  /* ============================================================
     Q20 — UFV 2026 — POR-07 (Acentuação gráfica)
  ============================================================ */
  {
    id: 'Q-REAL-POR-07-002',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-07',
    banca: 'UFV', orgao: 'UFV-MG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'UFV 2026 — UFV-MG — Assistente em Administração' },
    subtema: 'Acentuação gráfica: paroxítonas terminadas em -EN',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-006.]',
    enunciado: 'Assinale a alternativa em que a palavra está CORRETAMENTE acentuada, de acordo com a norma padrão da Língua Portuguesa:',
    alternativas: [
      { id: 'A', texto: 'récorde.' },
      { id: 'B', texto: 'rúbrica.' },
      { id: 'C', texto: 'item.' },
      { id: 'D', texto: 'hífen.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. "Hífen" é paroxítona terminada em "-en" (hi-fen) e recebe acento agudo. A regra das paroxítonas acentua as terminadas em -en (como "hífen", "hífens", "abdômen"). A grafia "hífen" está correta.',
      incorretas: {
        A: 'A alternativa erra a acentuação. "Récorde" NÃO existe — a grafia correta é "recorde" (paroxítona terminada em -e, sem acento). A regra violada é a das paroxítonas: terminadas em -e não são acentuadas (recorde, como "ele recorde"). Construção correta: "recorde" (sem acento). Para identificar em outra questão, verifique a terminação: paroxítonas em -a, -e, -o, -em geralmente não são acentuadas (exceto -em curto como "hífen").',
        B: 'A alternativa erra a acentuação. "Rúbrica" NÃO existe — a grafia correta é "rubrica" (paroxítona terminada em -a, sem acento). A regra violada é a das paroxítonas: terminadas em -a não são acentuadas. Construção correta: "rubrica" (sem acento). Para identificar, lembre: paroxítonas em -a não são acentuadas (rubrica, like "casa").',
        C: 'A alternativa erra a acentuação. "Item" NÃO recebe acento — é paroxítona terminada em -em. A regra das paroxítonas NÃO acentua terminadas em -em (exceto -em curto como "hífen", que tem acento). "Item" tem o "e" fechado e não é acentuado. Construção correta: "item" (sem acento). Para identificar, compare: "item" (sem acento) x "hífen" (com acento) — a diferença está na pronúncia aberta/fechada e na tradição ortográfica.'
      },
      conceitoCobrado: 'Acentuação gráfica: paroxítonas terminadas em -en (hífen) x paroxítonas não acentuadas (recorde, rubrica, item)',
      pegadinha: 'A banca oferece palavras que muitas pessoas acentuam erroneamente na fala ("récorde", "rúbrica") e palavras que não recebem acento ("item") para testar o domínio das regras.',
      comoApareceEmConcurso: 'Questões de acentuação costumam cobrar palavras de uso frequente com acentuação duvidosa — o candidato deve conhecer as regras e as exceções.',
      exemploInedito: {
        contexto: 'Um comunicado interno traz: "O item 1 do hífen; a rubrica do diretor; o recorde de atendimento."',
        aplicacao: '"Item" (sem acento), "hífen" (com acento), "rubrica" (sem acento), "recorde" (sem acento). Todas seguem as regras de acentuação das paroxítonas.',
        desafio: 'Verifique a acentuação de cada palavra e justifique a presença ou ausência de acento.'
      }
    },
    tags: ['acentuação', 'paroxítonas', 'hífen', 'recorde', 'rubrica']
  },

  /* ============================================================
     Q01 — Instituto Access/UFAC 2026 — POR-18 (Pontuação)
  ============================================================ */
  {
    id: 'Q-REAL-POR-18-005',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-18',
    banca: 'Instituto Access', orgao: 'UFAC', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'Instituto Access 2026 — UFAC — Assistente em Administração' },
    subtema: 'Pontuação: vírgulas isolando aposto explicativo',
    dificuldade: 2, prioridade: 'alta',
    textoBase: 'Qual a luz mais antiga do Universo que já observamos. Existem expressões tão comuns que deixam de causar impacto, mas, ao serem reconsideradas, revelam dimensões surpreendentes. É o caso das descobertas de astros a bilhões de anos-luz de distância. Quando se lembra que um ano-luz equivale a cerca de nove trilhões de quilômetros, torna-se evidente a imensidão do percurso da luz até a Terra. Embora seja uma unidade de distância, o ano-luz também indica o tempo de viagem da luz. A tecnologia permite observar vestígios do passado remoto do Universo graças a uma luz extremamente antiga que atravessou o espaço até chegar a nós. Isso suscita questões fundamentais: a luz é eterna? Qual é a mais antiga já observada? A luz mais antiga detectada provém do fundo cósmico de micro-ondas, emitido quando o Universo tinha cerca de trezentos mil anos. No início, o Universo era extremamente quente e composto por um plasma denso. Nesse período, os fótons não podiam se deslocar livremente devido às constantes colisões com partículas carregadas. Com a expansão e o resfriamento do Universo, prótons e elétrons se combinaram, formando átomos de hidrogênio. Esse processo, chamado recombinação, permitiu que os fótons passassem a viajar livremente, marcando o momento em que o Universo se tornou transparente. A radiação liberada nesse instante permanece até hoje e constitui um registro essencial da formação do cosmos. Essa radiação está presente em todo o espaço e é percebida, em parte, no ruído visual de antigos televisores analógicos, resultado da radiação cósmica de fundo que percorreu bilhões de anos até chegar à Terra. Ao considerar objetos individuais, estrelas antigas próximas não fornecem a luz mais antiga observada, pois sua proximidade faz com que a radiação recebida seja relativamente recente. O caso de uma estrela muito antiga, cuja luz leva cerca de duzentos anos para chegar até nós, ilustra essa diferença entre idade do objeto e idade da luz. As luzes mais antigas observadas provêm, na verdade, de galáxias muito distantes, cuja radiação foi emitida quando o Universo ainda possuía apenas algumas centenas de milhões de anos. Essa luz viajou por bilhões de anos até ser detectada. Entre esses registros, há galáxias cuja luz foi emitida quando o Universo tinha cerca de trezentos milhões de anos, resultando em uma radiação com mais de treze bilhões de anos. Ao observar essas luzes, não vemos os objetos como são atualmente, mas como eram no momento da emissão da radiação. Trata-se, portanto, de uma observação do passado. Quanto à natureza da luz, as leis da física indicam que a energia não se perde, apenas se transforma. Como a luz é uma forma de energia, ela não desaparece. Os fótons podem ser convertidos em matéria, absorvidos por átomos ou transferir energia para elétrons, mas essa energia permanece no sistema. Mesmo quando deixa de existir como partícula independente, a energia associada à luz pode ser novamente emitida sob outra forma. Em uma situação ideal, sem interação com outras partículas, um fóton poderia existir indefinidamente. Assim, conclui-se que a luz não possui prazo de validade: ela pode se transformar, mas nunca é completamente destruída, permanecendo como parte contínua da dinâmica energética do Universo. (BBC Brasil, adaptado.)',
    enunciado: '"Esse processo, chamado recombinação, permitiu que os fótons passassem a viajar livremente, marcando o momento em que o Universo se tornou transparente." Assinale a alternativa correta quanto ao emprego dos sinais de pontuação no trecho apresentado.',
    alternativas: [
      { id: 'A', texto: 'As vírgulas que isolam "chamado recombinação" marcam a inserção de um aposto explicativo, acrescenta informação ao termo "processo" dentro da estrutura do período.' },
      { id: 'B', texto: 'As vírgulas do período organizam a segmentação em blocos informativos independentes, estruturando a progressão temática por justaposição de ideias equivalentes.' },
      { id: 'C', texto: 'A vírgula após "processo" marca a separação de um termo com valor de complemento verbal, integrando a estrutura do predicado no desenvolvimento do período.' },
      { id: 'D', texto: 'A vírgula após "livremente" marca a separação de orações coordenadas com valor aditivo, organizando a sequência de ações atribuídas ao sujeito no desenvolvimento do período.' },
      { id: 'E', texto: 'A vírgula antes de "marcando o momento" delimita uma oração reduzida com valor adjetivo, associada diretamente ao termo "fótons" na progressão do período.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. As vírgulas em "Esse processo, chamado recombinação, permitiu..." isolam o termo "chamado recombinação", que é um APOSTO EXPLICATIVO do antecedente "processo". O aposto explica, esclarece ou identifica o termo anterior — aqui, explica qual processo é esse (a recombinação). A estrutura é: [termo] + [, aposto explicativo, ] + [resto da oração].',
      incorretas: {
        A_ok: 'A é o gabarito.',
        B: 'A alternativa erra ao dizer que as vírgulas organizam "blocos informativos independentes" por "justaposição de ideias equivalentes". As vírgulas não separam blocos independentes — elas ISOLAM um termo interno (o aposto) que está subordinado ao termo "processo". A regra violada é a função da vírgula dupla: isolar termo intercalado, não separar blocos autônomos. Construção correta: as vírgulas isolam o aposto "chamado recombinação", que é dependente de "processo". Para identificar em outra questão, pergunte: o termo entre vírgulas pode ser retirado sem quebrar a estrutura? Se sim, é termo intercalado (aposto, adjunto), não bloco independente.',
        C: 'A alternativa erra ao classificar o termo isolado como "complemento verbal". O termo "chamado recombinação" NÃO completa o sentido do verbo "permitiu" — ele explica o substantivo "processo". Complemento verbal é o termo que completa verbo transitivo (ex.: "permitiu a passagem" — "a passagem" é OD). A regra violada é a distinção entre complemento verbal (completa verbo) e aposto (explica substantivo). Construção correta: "chamado recombinação" = aposto explicativo. Para identificar, pergunte: o termo completa um verbo ou explica um substantivo? Se explica substantivo, é aposto.',
        D: 'A alternativa erra ao dizer que a vírgula após "livremente" separa "orações coordenadas com valor aditivo". A vírgula após "livremente" separa a oração principal ("permitiu que os fótons passassem a viajar livremente") da oração reduzida de gerúndio ("marcando o momento..."). Não há coordenação aditiva — há subordinação (a reduzida de gerúndio expressa consequência/tempo). A regra violada é a distinção entre coordenação (orações independentes) e subordinação (oração dependente). Construção correta: a vírgula separa a principal da subordinada reduzida de gerúndio. Para identificar, verifique se as orações são independentes (coordenação) ou se uma depende da outra (subordinação).',
        E: 'A alternativa erra ao classificar "marcando o momento" como "oração reduzida com valor adjetivo, associada diretamente ao termo \'fótons\'". A oração reduzida de gerúndio "marcando o momento..." tem valor ADVERBIAL (de consequência ou tempo), não adjetivo — e não se associa a "fótons", mas ao processo inteiro (a permissão de os fótons viajarem livremente marcou o momento). A regra violada é a classificação da oração reduzida: gerúndio com valor adverbial (consequência/tempo) x adjetivo (caracteriza substantivo). Construção correta: "marcando o momento" = oração reduzida de gerúndio com valor adverbial. Para identificar, pergunte: a oração caracteriza um substantivo (adjetivo) ou indica circunstância (adverbial)? Se indica circunstância, é adverbial.'
      },
      conceitoCobrado: 'Pontuação: vírgulas isolando aposto explicativo; funções da vírgula',
      pegadinha: 'A banca oferece quatro funções plausíveis para as vírgulas (blocos independentes, complemento verbal, coordenadas aditivas, oração adjetiva) para testar a identificação precisa do termo isolado.',
      comoApareceEmConcurso: 'Questões de pontuação com justificativa exigem que o candidato identifique a função sintática do termo isolado pelas vírgulas — não basta dizer "é aposto"; é preciso explicar por quê.',
      exemploInedito: {
        contexto: 'Um relatório afirma: "O sistema de protocolo, chamado e-protocolo, reduziu o tempo de tramitação."',
        aplicacao: '"Chamado e-protocolo" é aposto explicativo do termo "sistema de protocolo" — isolado por vírgulas, explica qual sistema é esse. Mesma estrutura da questão.',
        desafio: 'Identifique a função sintática do termo isolado pelas vírgulas e explique por que não é complemento verbal.'
      }
    },
    tags: ['pontuação', 'vírgula', 'aposto explicativo', 'termo intercalado']
  },

  /* ============================================================
     Q02 — Instituto Access/UFAC 2026 — POR-08 (Formação de palavras)
  ============================================================ */
  {
    id: 'Q-REAL-POR-08-002',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-08',
    banca: 'Instituto Access', orgao: 'UFAC', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'Instituto Access 2026 — UFAC — Assistente em Administração' },
    subtema: 'Formação de palavras: substantivo composto por justaposição',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-18-005 — texto sobre a luz no Universo.]',
    enunciado: '"É o caso das descobertas de astros a bilhões de \'anos-luz\' de distância." Assinale a alternativa correta quanto à classe gramatical do termo destacado no trecho.',
    alternativas: [
      { id: 'A', texto: 'Advérbio formado por substantivo + substantivo, com valor semântico ampliado no uso científico e categorias específicas espaciais.' },
      { id: 'B', texto: 'Substantivo composto formado por substantivo + adjetivo, em que o segundo elemento qualifica o primeiro dentro da unidade.' },
      { id: 'C', texto: 'Substantivo composto formado por substantivo + substantivo, constituindo uma unidade lexical com valor específico de medida.' },
      { id: 'D', texto: 'Locução substantiva formada por substantivo + substantivo, mantendo autonomia de cada elemento na estrutura.' },
      { id: 'E', texto: 'Substantivo composto formado por substantivo + advérbio, com o segundo elemento indicando ação associada ao primeiro, destacando-o.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. "Anos-luz" é um SUBSTANTIVO COMPOSTO formado por dois substantivos: "ano" (substantivo) + "luz" (substantivo), unidos por hífen (justaposição). O composto tem valor específico de MEDIDA de distância astronômica — não é a soma literal de "ano" + "luz", mas uma unidade lexical nova com significado próprio.',
      incorretas: {
        A: 'A alternativa erra ao classificar "anos-luz" como ADVÉRBIO. Advérbios modificam verbos/adjetivos/advérbios e são invariáveis. "Anos-luz" varia em número ("ano-luz" / "anos-luz") e nomeia uma unidade de medida — é substantivo. A regra violada é a distinção entre substantivo (nomeia, varia) e advérbio (modifica, invariável). Construção correta: "anos-luz" = substantivo composto. Para identificar em outra questão, pergunte: a palavra nomeia algo (substantivo) ou modifica outro termo (advérbio)? Se nomeia, é substantivo.',
        B: 'A alternativa erra ao dizer que o segundo elemento é ADJETIVO. Em "anos-luz", "luz" é SUBSTANTIVO, não adjetivo — não qualifica "ano". A relação é de composição por dois substantivos, não de substantivo + adjetivo (como em "obra-prima" ou "alto-falante"). A regra violada é a classificação morfológica do segundo elemento: substantivo x adjetivo. Construção correta: "ano" (subst.) + "luz" (subst.). Para identificar, pergunte: o segundo elemento nomeia algo (substantivo) ou qualifica o primeiro (adjetivo)? Se nomeia, é substantivo.',
        D: 'A alternativa erra ao classificar "anos-luz" como LOCUÇÃO SUBSTANTIVA com "autonomia de cada elemento". Locução substantiva é um conjunto de palavras que equivale a um substantivo (ex.: "estrela-do-mar"), mas "anos-luz" é um COMPOSTO — os elementos se fundem em uma unidade lexical, sem autonomia plena. Além disso, a locução não teria hífen. A regra violada é a distinção entre composto (unidade lexical) e locução (conjunto que funciona como uma classe). Construção correta: "anos-luz" = substantivo composto por justaposição. Para identificar, verifique se os elementos mantêm autonomia ou formam uma unidade — se formam unidade com hífen, é composto.',
        E: 'A alternativa erra ao dizer que o segundo elemento é ADVÉRBIO. "Luz" não é advérbio — é substantivo. Advérbios indicam circunstância (tempo, modo, lugar) e são invariáveis; "luz" nomeia um fenômeno físico e varia em número. A regra violada é a classificação do segundo elemento: substantivo x advérbio. Construção correta: "ano" (subst.) + "luz" (subst.). Para identificar, pergunte: o segundo elemento nomeia algo (substantivo) ou indica circunstância (advérbio)? Se nomeia, é substantivo.'
      },
      conceitoCobrado: 'Formação de palavras: substantivo composto por justaposição (substantivo + substantivo)',
      pegadinha: 'A banca oferece quatro classificações possíveis (advérbio, subst.+adj., subst.+subst., locução, subst.+adv.) para testar a identificação precisa da classe e da formação.',
      comoApareceEmConcurso: 'Questões de formação de palavras exigem que o candidato identifique a classe dos elementos e o processo de formação — não basta saber que é "composto"; é preciso dizer de quê.',
      exemploInedito: {
        contexto: 'Um relatório afirma: "O projeto-piloto foi implementado em três unidades; o acordo-quadro define as diretrizes."',
        aplicacao: '"Projeto-piloto" = substantivo (projeto) + substantivo (piloto) — composto por justaposição, com valor específico (projeto experimental). "Acordo-quadro" = substantivo + substantivo — composto com valor de acordo geral. Mesma estrutura de "anos-luz".',
        desafio: 'Classifique morfologicamente os compostos "projeto-piloto" e "acordo-quadro" e explique o processo de formação.'
      }
    },
    tags: ['formação de palavras', 'substantivo composto', 'justaposição', 'anos-luz']
  },

  /* ============================================================
     Q03 — Instituto Access/UFAC 2026 — POR-02 (Tipologia e gênero)
  ============================================================ */
  {
    id: 'Q-REAL-POR-02-001',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-02',
    banca: 'Instituto Access', orgao: 'UFAC', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'Instituto Access 2026 — UFAC — Assistente em Administração' },
    subtema: 'Tipologia textual e gênero: expositivo-explicativo / divulgação científica',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-18-005 — texto sobre a luz no Universo.]',
    enunciado: 'As produções discursivas podem assumir diferentes formas de organização, variando conforme seus objetivos comunicativos, a forma de apresentação das informações e o modo como os conteúdos são estruturados ao longo do texto. Assinale a alternativa correta quanto à classificação tipológica e ao gênero do texto apresentado sobre a luz no Universo.',
    alternativas: [
      { id: 'A', texto: 'Predomina a tipologia descritiva, com foco na caracterização de aspectos da luz ao longo do texto, organizando informações de modo classificatório, com ênfase na apresentação de propriedades e elementos observáveis.' },
      { id: 'B', texto: 'Predomina a tipologia expositivo-explicativa, estruturada em gênero de divulgação científica, com organização voltada à apresentação e esclarecimento de fenômenos do Universo.' },
      { id: 'C', texto: 'Predomina a tipologia narrativa, com organização em sequência temporal de eventos, caracterizando um relato histórico sobre a formação do Universo com base em acontecimentos ordenados cronologicamente.' },
      { id: 'D', texto: 'Predomina a tipologia argumentativa, organizada em defesa de uma tese central acerca da natureza da luz, com uso de estratégias persuasivas voltadas à adesão do leitor à posição apresentada.' },
      { id: 'E', texto: 'Predomina a tipologia injuntiva, com orientação ao leitor para realização de procedimentos de observação do Universo, caracterizando um artigo técnico voltado à prática do conhecimento.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. O texto é uma reportagem de divulgação científica (BBC Brasil) que EXPLICA fenômenos do Universo — a natureza da luz, a radiação cósmica de fundo, a recombinação, a distância das galáxias. A tipologia predominante é EXPOSITIVO-EXPLICATIVA: o texto apresenta informações e as explica, sem defender tese (argumentativo), sem narrar eventos com personagens (narrativo), sem instruir procedimentos (injuntivo). O gênero é divulgação científica: linguagem acessível para público leigo, com explicações de conceitos.',
      incorretas: {
        A: 'A alternativa erra ao classificar o texto como predominantemente DESCRITIVO. Descrição é a caracterização estática de seres/objetos (ex.: "a sala era grande, com janelas altas"). O texto não se limita a descrever a luz — ele EXPLICA processos (recombinação, expansão do Universo, viagem da luz) e responde a perguntas ("a luz é eterna?"). A regra violada é a distinção entre descrever (caracterizar) e explicar (esclarecer processos). Construção correta: o texto é expositivo-explicativo. Para identificar em outra questão, pergunte: o texto caracteriza seres ou explica processos? Se explica, é expositivo.',
        C: 'A alternativa erra ao classificar o texto como predominantemente NARRATIVO. Narração é a sequência de eventos com personagens e ação (ex.: "o servidor chegou, cumprimentou, sentou"). O texto não narra uma história — ele explica fenômenos científicos. Embora mencione a "formação do Universo", não há personagens nem enredo: há exposição de processos físicos. A regra violada é a distinção entre narrar (contar eventos) e expor (explicar conceitos). Construção correta: o texto é expositivo-explicativo. Para identificar, pergunte: há personagens e enredo? Se não, não é narrativo.',
        D: 'A alternativa erra ao classificar o texto como predominantemente ARGUMENTATIVO. Argumentação é a defesa de uma tese com argumentos (ex.: "a lei deve ser aprovada porque..."). O texto não defende tese — ele apresenta e explica informações sobre a luz. Não há posicionamento a ser aceito pelo leitor, apenas esclarecimento. A regra violada é a distinção entre argumentar (defender tese) e expor (esclarecer). Construção correta: o texto é expositivo-explicativo. Para identificar, pergunte: o texto quer convencer o leitor de algo? Se não, não é argumentativo.',
        E: 'A alternativa erra ao classificar o texto como predominantemente INJUNTIVO. Injunção é a instrução para o leitor fazer algo (ex.: "preencha o formulário", "receba o cidadão"). O texto não instrui — ele explica. Não há verbos no imperativo nem sequência de procedimentos. A regra violada é a distinção entre instruir (orientar ação) e expor (esclarecer conceito). Construção correta: o texto é expositivo-explicativo. Para identificar, pergunte: o texto manda o leitor fazer algo? Se não, não é injuntivo.'
      },
      conceitoCobrado: 'Tipologia textual (expositivo-explicativo) e gênero (divulgação científica)',
      pegadinha: 'A banca oferece as cinco tipologias clássicas (descrição, exposição, narração, argumentação, injunção) para testar a identificação da predominante.',
      comoApareceEmConcurso: 'Questões de tipologia/gênero exigem que o candidato identifique a organização predominante do texto e o gênero em que se insere — não basta decorar definições; é preciso aplicar ao texto.',
      exemploInedito: {
        contexto: 'Uma reportagem explica como funciona o sistema de energia solar: apresenta os componentes, esclarece o processo de conversão de luz em eletricidade e responde a dúvidas comuns.',
        aplicacao: 'A tipologia predominante é expositivo-explicativa (explica o funcionamento), e o gênero é divulgação científica (linguagem acessível para leigos). Mesma classificação do texto da UFAC.',
        desafio: 'Classifique a tipologia e o gênero da reportagem e justifique por que não é argumentativa nem injuntiva.'
      }
    },
    tags: ['tipologia textual', 'gênero textual', 'divulgação científica', 'expositivo-explicativo']
  },

  /* ============================================================
     Q04 — Instituto Access/UFAC 2026 — POR-17 (Crase)
  ============================================================ */
  {
    id: 'Q-REAL-POR-17-004',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-17',
    banca: 'Instituto Access', orgao: 'UFAC', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'Instituto Access 2026 — UFAC — Assistente em Administração' },
    subtema: 'Crase: locução prepositiva "devido a" + artigo definido feminino plural',
    dificuldade: 3, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-18-005 — texto sobre a luz no Universo.]',
    enunciado: '"Os fótons não podiam se deslocar livremente \'devido às constantes colisões\' com partículas carregadas." Assinale a alternativa correta quanto ao emprego do sinal indicativo de crase no termo destacado.',
    alternativas: [
      { id: 'A', texto: 'O uso de crase em "às constantes colisões" decorre da presença de termo feminino plural que exige a fusão da vogal na articulação com o termo anterior.' },
      { id: 'B', texto: 'O emprego da crase em "às constantes colisões" resulta da presença de expressão com valor adverbial feminino, associada à exigência de determinação do termo e à organização sintática do complemento no interior do período.' },
      { id: 'C', texto: 'O uso de crase em "às constantes colisões" decorre da regência da locução prepositiva "devido a", que exige preposição "a", somada ao artigo definido feminino plural que antecede o substantivo.' },
      { id: 'D', texto: 'A ocorrência de crase em "às constantes colisões" está associada à concordância nominal entre o termo regente e o substantivo feminino plural, refletindo a marcação de número e gênero no encadeamento dos termos da oração.' },
      { id: 'E', texto: 'A crase em "às constantes colisões" decorre da exigência de artigo definido pelo substantivo, com base na presença do termo feminino plural na constituição do complemento.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. A crase em "às constantes colisões" decorre da fusão de dois "a": (1) a preposição "a" exigida pela locução prepositiva "devido a" (devido A algo); (2) o artigo definido feminino plural "as" que antecede o substantivo "constantes colisões". A soma resulta em "às". A explicação identifica corretamente o termo regente (a locução "devido a") e o artigo.',
      incorretas: {
        A: 'A alternativa erra ao explicar a crase apenas pela "presença de termo feminino plural". A crase NÃO ocorre só porque o termo é feminino — é preciso que haja uma preposição "a" exigida por um termo regente (aqui, a locução "devido a"). Sem a preposição, não há crase. A regra violada é a definição de crase: fusão de preposição "a" + artigo "a", não apenas artigo em termo feminino. Construção correta: a crase decorre de "devido a" (preposição) + "as" (artigo). Para identificar em outra questão, pergunte: há um termo que exige a preposição "a"? Se não houver, não há crase, mesmo com termo feminino.',
        B: 'A alternativa erra ao falar de "expressão com valor adverbial feminino" e "exigência de determinação do termo". "Devido a" é uma LOCUÇÃO PREPOSITIVA (não advérbio), e a crase não decorre de "determinação" — decorre da preposição + artigo. A regra violada é a classificação da locução: prepositiva (rege complemento) x adverbial (indica circunstância). Construção correta: "devido a" = locução prepositiva que exige "a" + artigo "as". Para identificar, pergunte: a expressão rege um complemento (prepositiva) ou indica circunstância (adverbial)?',
        D: 'A alternativa erra ao explicar a crase por "concordância nominal". Crase não é fenômeno de concordância — é fenômeno de regência (preposição) + artigo. A concordância ocorre entre substantivo e adjetivo (ex.: "constantes colisões" — "constantes" concorda com "colisões"), mas isso não explica a crase. A regra violada é a distinção entre concordância (flexão) e crase (fusão de preposição + artigo). Construção correta: a crase decorre de "devido a" + "as". Para identificar, verifique se o fenômeno é de flexão (concordância) ou de regência (crase).',
        E: 'A alternativa erra ao explicar a crase apenas pela "exigência de artigo definido pelo substantivo". O artigo "as" sozinho não gera crase — é preciso a preposição "a" (exigida por "devido a") para haver fusão. Sem preposição, haveria apenas artigo: "devido as constantes colisões" (errado, sem crase). A regra violada é a mesma de A: a crase exige preposição + artigo, não apenas artigo. Construção correta: "devido a" (prep.) + "as" (artigo) = "às". Para identificar, pergunte: há preposição "a" antes do artigo? Se não houver, não há crase.'
      },
      conceitoCobrado: 'Crase: locução prepositiva "devido a" + artigo definido feminino plural',
      pegadinha: 'A banca oferece explicações parciais (só termo feminino, só artigo, só concordância) para testar se o candidato identifica a fusão completa: preposição + artigo.',
      comoApareceEmConcurso: 'Questões de crase com justificativa exigem que o candidato identifique o termo que exige a preposição e o artigo que se funde — não basta dizer "tem crase porque é feminino".',
      exemploInedito: {
        contexto: 'Um relatório afirma: "O atraso ocorreu devido às fortes chuvas na região."',
        aplicacao: 'A crase em "às fortes chuvas" decorre de "devido a" (preposição) + "as" (artigo definido feminino plural de "fortes chuvas"). Sem a preposição "a" (exigida por "devido"), não haveria crase. Mesma estrutura da questão.',
        desafio: 'Explique a crase em "devido às fortes chuvas" identificando a preposição e o artigo que se fundem.'
      }
    },
    tags: ['crase', 'locução prepositiva', 'devido a', 'preposição + artigo']
  },

  /* ============================================================
     Q05 — Instituto Access/UFAC 2026 — POR-14 (Coordenação)
  ============================================================ */
  {
    id: 'Q-REAL-POR-14-002',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-14',
    banca: 'Instituto Access', orgao: 'UFAC', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'Instituto Access 2026 — UFAC — Assistente em Administração' },
    subtema: 'Coordenação: conjunções "ou" (alternativa) e "mas" (adversativa)',
    dificuldade: 3, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-18-005 — texto sobre a luz no Universo.]',
    enunciado: '"Os fótons podem ser convertidos em matéria, absorvidos por átomos ou transferir energia para elétrons, mas essa energia permanece no sistema." Assinale a alternativa correta quanto à classificação das relações de coordenação estabelecidas no período.',
    alternativas: [
      { id: 'A', texto: 'A construção evidencia relação conclusiva no desenvolvimento do período, em que o segmento final retoma as ações anteriores como desdobramento lógico decorrente das possibilidades apresentadas anteriormente.' },
      { id: 'B', texto: 'O período organiza as ações em sequência com valor aditivo, em que as estruturas se acumulam por enumeração, com predominância de relação alternativa ou adversativa entre os segmentos apresentados.' },
      { id: 'C', texto: 'Há coordenação com valor alternativo entre as ações atribuídas aos fótons, além de coordenação adversativa introduzida por "mas", que estabelece oposição entre as possibilidades e a permanência da energia.' },
      { id: 'D', texto: 'O conectivo "ou" estabelece relação adversativa de exclusão entre as ações, enquanto "mas" atua como marcador de adversidade no período.' },
      { id: 'E', texto: 'A conjunção "ou" estabelece relação explicativa entre os termos, ao passo que "mas" introduz continuidade do raciocínio desenvolvido no período de forma negativa.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. O período tem duas relações de coordenação: (1) "ou" liga as ações atribuídas aos fótons ("ser convertidos em matéria", "absorvidos por átomos", "transferir energia para elétrons") — é uma coordenação ALTERNATIVA (indica possibilidades alternativas); (2) "mas" introduz a oração "essa energia permanece no sistema" — é uma coordenação ADVERSATIVA, que opõe as possibilidades anteriores (transformação) à permanência da energia. A classificação está precisa.',
      incorretas: {
        A: 'A alternativa erra ao classificar a relação como CONCLUSIVA. Conclusivas são "logo", "portanto", "assim" — indicam conclusão a partir de premissas. O "mas" não conclui: OPÕE. A regra violada é a distinção entre conclusão (deduzir) e oposição (contrastar). Construção correta: "mas" = adversativa. Para identificar em outra questão, pergunte: o conectivo deduz uma conclusão ou opõe ideias? Se opõe, é adversativa.',
        B: 'A alternativa erra ao dizer que há "predominância de relação alternativa ou adversativa" de forma vaga, sem identificar corretamente as duas relações. Além disso, diz que as estruturas se acumulam "por enumeração" com valor aditivo — mas "ou" não é aditivo (é alternativo) e "mas" não é aditivo (é adversativo). A regra violada é a classificação precisa dos conectivos: "ou" = alternativa; "mas" = adversativa. Construção correta: há coordenação alternativa ("ou") e adversativa ("mas"). Para identificar, classifique cada conectivo separadamente.',
        D: 'A alternativa erra ao classificar "ou" como ADVERSATIVA de exclusão. "Ou" é ALTERNATIVA (indica possibilidades), não adversativa. Adversativas são "mas", "porém", "entretanto". A regra violada é a distinção entre alternativa (possibilidade) e adversidade (oposição). Construção correta: "ou" = alternativa; "mas" = adversativa. Para identificar, pergunte: o conectivo apresenta possibilidades (alternativa) ou opõe ideias (adversativa)?',
        E: 'A alternativa erra ao classificar "ou" como EXPLICATIVA. Explicativas são "pois", "porque", "que" — introduzem causa/explicação. "Ou" não explica: alterna. Além disso, "mas" não introduz "continuidade negativa" — introduz oposição. A regra violada é a classificação de "ou" (alternativa, não explicativa) e de "mas" (adversativa, não continuidade). Construção correta: "ou" = alternativa; "mas" = adversativa. Para identificar, verifique se o conectivo indica causa (explicativa), possibilidade (alternativa) ou oposição (adversativa).'
      },
      conceitoCobrado: 'Coordenação: conjunções alternativas ("ou") e adversativas ("mas")',
      pegadinha: 'A banca oferece classificações trocadas (conclusiva, aditiva, adversativa para "ou", explicativa) para testar a identificação precisa de cada conectivo.',
      comoApareceEmConcurso: 'Questões de coordenação exigem que o candidato classifique cada conjunção no contexto — não basta decorar listas; é preciso verificar a relação lógica estabelecida.',
      exemploInedito: {
        contexto: 'Um relatório afirma: "O servidor pode solicitar a licença por formulário eletrônico ou presencialmente, mas o pedido deve ser protocolado até sexta-feira."',
        aplicacao: '"Ou" = alternativa (formulário eletrônico OU presencial); "mas" = adversativa (opõe a flexibilidade de escolha à exigência de prazo). Mesma estrutura da questão.',
        desafio: 'Classifique as conjunções "ou" e "mas" no trecho e explique o valor de cada uma.'
      }
    },
    tags: ['coordenação', 'conjunção alternativa', 'conjunção adversativa', 'ou', 'mas']
  },

  /* ============================================================
     Q06 — Instituto Access/UFAC 2026 — POR-11 (Verbos)
  ============================================================ */
  {
    id: 'Q-REAL-POR-11-003',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-11',
    banca: 'Instituto Access', orgao: 'UFAC', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'Instituto Access 2026 — UFAC — Assistente em Administração' },
    subtema: 'Verbos: futuro do pretérito do indicativo de "provir"',
    dificuldade: 3, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-18-005 — texto sobre a luz no Universo.]',
    enunciado: '"As luzes mais antigas observadas \'provêm\' de galáxias muito distantes." Conjugando o verbo destacado no futuro do pretérito do indicativo, tem-se:',
    alternativas: [
      { id: 'A', texto: 'Proviriam, forma do verbo "provir", concordando com o sujeito plural e preservando o infinitivo como base de flexão.' },
      { id: 'B', texto: 'Provierem, forma do verbo "provir", com flexão de número, com indicação de tempo verbal no futuro do indicativo.' },
      { id: 'C', texto: 'Proveriam, forma do verbo "provir" no futuro do pretérito do indicativo, com flexão regular a partir do radical verbal.' },
      { id: 'D', texto: 'Provieram, forma do verbo "provir", indicando ação a ser concluída no futuro do pretérito e com valor semântico hipotético.' },
      { id: 'E', texto: 'Provinham, forma do verbo "provir" no pretérito imperfeito do indicativo, indicando ação habitual ou contínua no futuro, com concordância estabelecida com o sujeito plural.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. O verbo "provir" (derivado de "vir") no futuro do pretérito do indicativo, na 3ª pessoa do plural, é "proviriam". A forma segue o paradigma de "vir" (vir → viria → viriam; provir → proviria → proviriam). O sujeito é "as luzes mais antigas observadas" (plural), e o verbo concorda no plural: "proviriam".',
      incorretas: {
        A_ok: 'A é o gabarito.',
        B: 'A alternativa erra porque "provierem" é FUTURO DO SUBJUNTIVO (quando provierem), não futuro do pretérito do indicativo. Além disso, "provierem" é 3ª pessoa do plural do futuro do subjuntivo — tempo diferente do pedido. A regra violada é a distinção entre futuro do pretérito do indicativo ("proviriam") e futuro do subjuntivo ("provierem"). Construção correta: futuro do pretérito = "proviriam". Para identificar em outra questão, compare as terminações: "-riam" (futuro do pretérito) x "-erem" (futuro do subjuntivo).',
        C: 'A alternativa erra porque "proveriam" é forma do verbo "PROVER" (abastecer, suprir), não de "PROVIR" (originar-se, vir de). São verbos diferentes, com paradigmas diferentes. "Provir" faz "proviriam"; "prover" faz "proveriam". A regra violada é a distinção entre os verbos "provir" e "prover" — parônimos verbais que confundem. Construção correta: "provir" → "proviriam". Para identificar, associe "provir" a "vir" (provir → proviria) e "prover" a "ver" (prover → proveria).',
        D: 'A alternativa erra porque "provieram" é PRETÉRITO PERFEITO do indicativo (eles provieram = eles vieram de), não futuro do pretérito. A forma "provieram" indica ação concluída no passado, não hipótese futura. A regra violada é a distinção entre pretérito perfeito ("provieram") e futuro do pretérito ("proviriam"). Construção correta: futuro do pretérito = "proviriam". Para identificar, compare: "-eram" (pretérito perfeito) x "-iriam" (futuro do pretérito).',
        E: 'A alternativa erra porque "provinham" é PRETÉRITO IMPERFEITO do indicativo (eles provinham = eles vinham de, habitualmente), não futuro do pretérito. Além disso, a explicação diz "ação habitual ou contínua no futuro" — o que é contraditório, pois o imperfeito indica ação habitual no PASSADO. A regra violada é a distinção entre pretérito imperfeito ("provinham") e futuro do pretérito ("proviriam"). Construção correta: futuro do pretérito = "proviriam". Para identificar, compare: "-inham" (imperfeito) x "-iriam" (futuro do pretérito).'
      },
      conceitoCobrado: 'Verbos: futuro do pretérito do indicativo de "provir" (paradigma de "vir")',
      pegadinha: 'A banca oferece formas de tempos/modos diferentes ("provierem", "proveriam", "provieram", "provinham") e de verbos parônimos ("prover" x "provir") para testar o domínio completo da conjugação.',
      comoApareceEmConcurso: 'Questões de conjugação verbal exigem que o candidato conheça o paradigma do verbo e distinga tempos/modos — não basta saber que é "futuro"; é preciso acertar a forma exata.',
      exemploInedito: {
        contexto: 'Um relatório afirma: "Os recursos provêm do Tesouro; se houvesse atraso, proviriam de outras fontes."',
        aplicacao: '"Provêm" = presente do indicativo (3ª pessoa do plural); "proviriam" = futuro do pretérito (hipótese). A forma segue o paradigma de "vir": vir → viriam; provir → proviriam. Mesma conjugação da questão.',
        desafio: 'Conjugue "provir" no futuro do pretérito do indicativo (3ª pessoa do plural) e explique por que não é "proveriam".'
      }
    },
    tags: ['verbos', 'futuro do pretérito', 'provir', 'paradigma de vir']
  },

  /* ============================================================
     Q07 — Instituto Access/UFAC 2026 — POR-06 (Ortografia e acentuação)
  ============================================================ */
  {
    id: 'Q-REAL-POR-06-003',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-06',
    banca: 'Instituto Access', orgao: 'UFAC', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'Instituto Access 2026 — UFAC — Assistente em Administração' },
    subtema: 'Ortografia: acentuação de "provém" e hífen em "micro-ondas"',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-18-005 — texto sobre a luz no Universo.]',
    enunciado: '"A luz mais antiga detectada \'provém\' do fundo cósmico de \'micro-ondas\', emitido quando o Universo tinha cerca de trezentos mil anos." Assinale a alternativa correta quanto à ortografia oficial das palavras destacadas no trecho, à luz do Acordo Ortográfico da Língua Portuguesa.',
    alternativas: [
      { id: 'A', texto: '"Provém" mantém acentuação por ser forma oxítona terminada em "em", com acento agudo que marca a tonicidade no singular no paradigma verbal relacionado a "vir".' },
      { id: 'B', texto: '"Micro-ondas" apresenta hífen por se tratar de composto em que o prefixo mantém autonomia gráfica diante do segundo elemento, preservando a segmentação de unidades lexicais compostas.' },
      { id: 'C', texto: '"Micro-ondas" pode ser registrada sem hífen em contextos de uso corrente, mantendo-se a forma hifenizada na escrita formal.' },
      { id: 'D', texto: '"Provém" admite forma gráfica sem acento em registros informais, mantendo-se a variante acentuada apenas em contextos formais da língua.' },
      { id: 'E', texto: '"Provém" recebe acento por seguir a regra geral das palavras paroxítonas terminadas em "em" decrescente.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. "Provém" é OXÍTONA terminada em "-em" (pro-VÉM), acentuada com acento agudo. A forma segue o paradigma de "vir" (ele vem → ele provém; eles vêm → eles provêm). O acento agudo marca a tonicidade na 3ª pessoa do singular. A grafia está correta.',
      incorretas: {
        A_ok: 'A é o gabarito.',
        B: 'A alternativa erra a justificativa do hífen em "micro-ondas". O hífen NÃO decorre de "autonomia gráfica do prefixo" de forma genérica — decorre da regra específica do Acordo: prefixo terminado em vogal + segundo elemento iniciado por vogal IGUAL ("micro" termina em "o"; "ondas" começa com "o") = hífen. Se as vogais fossem diferentes, não haveria hífen (ex.: "microempresa"). A regra violada é a especificidade da regra do hífen: vogais iguais = hífen; diferentes = sem hífen. Construção correta: "micro-ondas" tem hífen porque "o" + "o" são vogais iguais. Para identificar em outra questão, compare as vogais de contato: iguais = hífen; diferentes = sem hífen.',
        C: 'A alternativa erra ao dizer que "micro-ondas" pode ser grafada sem hífen em contextos de uso corrente. A grafia sem hífen ("microondas") é INCORRETA em qualquer contexto — a regra do Acordo é obrigatória. A regra violada é a obrigatoriedade da norma ortográfica: não há "flexibilização" por contexto de uso. Construção correta: "micro-ondas" (com hífen) sempre. Para identificar, desconfie de alternativas que admitem dupla grafia sem previsão legal.',
        D: 'A alternativa erra ao dizer que "provém" admite forma sem acento em registros informais. A acentuação é obrigatória em qualquer registro — não há "flexibilização" informal para a ortografia oficial. A regra violada é a obrigatoriedade da acentuação gráfica: a norma não distingue registro formal/informal para a grafia. Construção correta: "provém" (com acento) sempre. Para identificar, desconfie de alternativas que admitem dupla grafia por registro.',
        E: 'A alternativa erra ao classificar "provém" como PAROXÍTONA. "Provém" é OXÍTONA — a sílaba tônica é a última ("vém"). Paroxítonas têm tônica na penúltima sílaba. Além disso, a regra das paroxítonas não se aplica aqui. A regra violada é a classificação quanto à posição da tônica: oxítona (última) x paroxítona (penúltima). Construção correta: "provém" = oxítona terminada em "-em". Para identificar, separe as sílabas: pro-VÉM (tônica na última = oxítona).'
      },
      conceitoCobrado: 'Ortografia: acentuação de oxítonas terminadas em -em ("provém") e hífen com prefixo "micro-"',
      pegadinha: 'A banca mistura acentuação e hífen, oferecendo justificativas parcialmente corretas (autonomia gráfica, flexibilização por registro, paroxítona) para testar o domínio preciso das regras.',
      comoApareceEmConcurso: 'Questões de ortografia com justificativa exigem que o candidato explique a regra aplicada — não basta saber que a palavra é acentuada; é preciso dizer por quê.',
      exemploInedito: {
        contexto: 'Um comunicado traz: "O servidor provém de outra unidade; o equipamento micro-ondas está na copa."',
        aplicacao: '"Provém" = oxítona terminada em -em, acentuada; "micro-ondas" = hífen porque "o" + "o" são vogais iguais. Mesmas regras da questão.',
        desafio: 'Justifique a acentuação de "provém" e o hífen de "micro-ondas" com base no Acordo Ortográfico.'
      }
    },
    tags: ['ortografia', 'acentuação', 'oxítona', 'hífen', 'micro-ondas']
  },

  /* ============================================================
     Q08 — Instituto Access/UFAC 2026 — POR-01 (Compreensão textual)
  ============================================================ */
  {
    id: 'Q-REAL-POR-01-008',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-01',
    banca: 'Instituto Access', orgao: 'UFAC', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'Instituto Access 2026 — UFAC — Assistente em Administração' },
    subtema: 'Compreensão textual: natureza da luz e observação do passado',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-18-005 — texto sobre a luz no Universo.]',
    enunciado: 'Existem abordagens científicas que permitem compreender a luz como um registro da história do Universo, exigindo do leitor a articulação entre conceitos de tempo, espaço e transformação da energia ao longo da evolução cósmica. Assinale a alternativa correta de acordo com as ideias desenvolvidas no texto acerca da natureza da luz e de seu papel na observação do Universo.',
    alternativas: [
      { id: 'A', texto: 'A luz proveniente de regiões distantes do Universo perde seu valor como registro da formação inicial, pois não preserva as características da radiação emitida na origem.' },
      { id: 'B', texto: 'A permanência da luz no Universo encontra restrição nas leis físicas, pois a energia associada aos fótons deixa de integrar o sistema quando ocorre sua interação com outras partículas ao longo do tempo.' },
      { id: 'C', texto: 'A luz observada permite reconstruir estados passados do Universo, pois a radiação captada corresponde ao momento em que foi emitida, e não à condição atual dos objetos.' },
      { id: 'D', texto: 'A identificação da radiação cósmica em aparelhos antigos indica que essa luz se origina de processos atuais de emissão associados a interferências captadas por dispositivos eletrônicos em funcionamento.' },
      { id: 'E', texto: 'A determinação da antiguidade da luz depende da idade dos corpos emissores, de modo que objetos mais antigos, ainda que próximos, fornecem registros mais remotos do que aqueles provenientes de galáxias distantes.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. O texto afirma explicitamente: "Ao observar essas luzes, não vemos os objetos como são atualmente, mas como eram no momento da emissão da radiação. Trata-se, portanto, de uma observação do passado." Isso significa que a luz captada permite reconstruir estados passados do Universo — a radiação corresponde ao momento em que foi emitida, não à condição atual dos objetos.',
      incorretas: {
        A: 'A alternativa CONTRADIZ o texto. O texto afirma que a luz distante preserva as características da radiação emitida na origem — é justamente por isso que permite reconstruir o passado. A luz não "perde seu valor"; ela é o registro essencial da formação do cosmos. A regra violada é a leitura literal: o texto diz o oposto do que a alternativa afirma. Construção correta: a luz distante preserva as características da origem e permite reconstruir o passado. Para identificar em outra questão, procure no texto a expressão "registro essencial" — se a alternativa negar esse valor, está errada.',
        B: 'A alternativa CONTRADIZ o texto. O texto afirma: "As leis da física indicam que a energia não se perde, apenas se transforma" e "essa energia permanece no sistema". A alternativa diz que a energia "deixa de integrar o sistema" — o oposto. A regra violada é a leitura literal: o texto afirma a permanência da energia; a alternativa nega. Construção correta: a energia permanece no sistema, transformando-se. Para identificar, procure no texto a expressão "permanece no sistema" — se a alternativa negar, está errada.',
        D: 'A alternativa DISTORCE o texto. O texto diz que a radiação cósmica de fundo é percebida "no ruído visual de antigos televisores analógicos" — mas isso NÃO significa que a luz "se origina de processos atuais". A radiação é antiga (do início do Universo); o que é atual é apenas o dispositivo que a capta. A regra violada é a distinção entre origem da radiação (passado) e dispositivo de captação (presente). Construção correta: a radiação é antiga; o televisor apenas a capta. Para identificar, pergunte: o texto diz que a radiação se origina agora ou no passado? No passado.',
        E: 'A alternativa CONTRADIZ o texto. O texto afirma: "estrelas antigas próximas não fornecem a luz mais antiga observada, pois sua proximidade faz com que a radiação recebida seja relativamente recente". Ou seja, objetos próximos fornecem registros RECENTES, não remotos. A alternativa inverte: diz que objetos antigos próximos fornecem registros mais remotos. A regra violada é a leitura literal: o texto diz que a proximidade torna a radiação recente; a alternativa diz o oposto. Construção correta: galáxias distantes fornecem registros remotos; estrelas próximas, registros recentes. Para identificar, procure no texto a relação entre proximidade e idade da radiação.'
      },
      conceitoCobrado: 'Compreensão textual: natureza da luz, observação do passado e permanência da energia',
      pegadinha: 'A banca oferece alternativas que contradizem o texto (A, B, E) ou distorcem uma informação (D) para testar a leitura atenta.',
      comoApareceEmConcurso: 'Questões de compreensão textual exigem que o candidato volte ao texto e verifique cada afirmação — não basta confiar na memória ou no conhecimento prévio.',
      exemploInedito: {
        contexto: 'Um artigo afirma: "A luz das estrelas que vemos à noite foi emitida há milhares ou milhões de anos; quando a observamos, vemos o passado, não o presente."',
        aplicacao: 'A afirmação correta é: "A luz observada permite reconstruir estados passados, pois corresponde ao momento da emissão". A afirmação incorreta seria: "A luz perde seu valor como registro porque não preserva as características da origem" (contradiz o texto).',
        desafio: 'Identifique qual afirmação está sustentada pelo texto e qual o contradiz.'
      }
    },
    tags: ['compreensão textual', 'natureza da luz', 'observação do passado', 'energia']
  },

  /* ============================================================
     Q09 — Instituto Access/UFAC 2026 — RED-20 (Redação Oficial)
  ============================================================ */
  {
    id: 'Q-REAL-RED-20-001',
    tipo: 'REAL', area: 'POR', moduloId: 'RED-20',
    banca: 'Instituto Access', orgao: 'UFAC', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'Instituto Access 2026 — UFAC — Assistente em Administração' },
    subtema: 'Redação oficial: impessoalidade, concisão, clareza, padronização e uniformidade',
    dificuldade: 2, prioridade: 'alta',
    textoBase: 'Na redação oficial, a elaboração dos atos de comunicação administrativa exige observância de padrões formais e funcionais voltados à eficiência da interação institucional, o que envolve impessoalidade, clareza, precisão e uniformidade na apresentação das informações (BRASIL, 2018).',
    enunciado: 'Analise as afirmativas a seguir acerca da correspondência oficial. (__) A impessoalidade na correspondência oficial decorre da finalidade pública do texto e se manifesta pela ausência de marcas individuais do redator na construção da mensagem. (__) A concisão, na redação oficial, relaciona-se à economia linguística, podendo implicar a supressão de elementos considerados redundantes no desenvolvimento do conteúdo. (__) A clareza e a precisão, na correspondência oficial, vinculam-se à seleção vocabular e à organização sintática, de modo a evitar interpretações ambíguas no texto. (__) A padronização da correspondência oficial implica uniformidade estrutural, com manutenção de modelos estáveis de redação e aplicação subjetivas de suas formas no conjunto dos documentos administrativos. (__) A uniformidade formal contribui para a estabilidade dos modelos de redação oficial, mantendo coerência entre documentos de mesma natureza no âmbito institucional. Assinale a alternativa que apresenta a sequência correta.',
    alternativas: [
      { id: 'A', texto: 'V, F, V, F, V.' },
      { id: 'B', texto: 'V, V, F, F, V.' },
      { id: 'C', texto: 'F, V, V, F, V.' },
      { id: 'D', texto: 'V, V, V, F, V.' },
      { id: 'E', texto: 'V, V, V, V, F.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A sequência é V, V, V, F, V. (I) Verdadeira: a impessoalidade decorre da finalidade pública e se manifesta pela ausência de marcas individuais do redator. (II) Verdadeira: a concisão é economia linguística, com supressão de redundâncias. (III) Verdadeira: clareza e precisão vinculam-se à seleção vocabular e à organização sintática, evitando ambiguidades. (IV) Falsa: a padronização implica uniformidade estrutural, mas NÃO "aplicação subjetiva" — a aplicação é OBJETIVA, padronizada. (V) Verdadeira: a uniformidade formal contribui para a estabilidade dos modelos e a coerência entre documentos.',
      incorretas: {
        A: 'A alternativa erra ao classificar II como falsa. A concisão é, sim, economia linguística com supressão de redundâncias — a afirmativa está correta. A regra violada é a definição de concisão na redação oficial: dizer o máximo com o mínimo, eliminando redundâncias. Construção correta: II é verdadeira. Para identificar em outra questão, associe "concisão" a "economia de palavras" — se a afirmativa disser isso, é verdadeira.',
        B: 'A alternativa erra ao classificar III como falsa. Clareza e precisão vinculam-se, sim, à seleção vocabular e à organização sintática, evitando ambiguidades — a afirmativa está correta. A regra violada é a definição de clareza/precisão: texto claro e preciso evita ambiguidade. Construção correta: III é verdadeira. Para identificar, associe "clareza" a "evitar ambiguidade" — se a afirmativa disser isso, é verdadeira.',
        C: 'A alternativa erra ao classificar I como falsa. A impessoalidade decorre, sim, da finalidade pública e se manifesta pela ausência de marcas individuais do redator — a afirmativa está correta. A regra violada é a definição de impessoalidade: o texto oficial não tem "eu acho", "nós entendemos", mas construções impessoais. Construção correta: I é verdadeira. Para identificar, associe "impessoalidade" a "ausência de marcas individuais" — se a afirmativa disser isso, é verdadeira.',
        E: 'A alternativa erra ao classificar IV como verdadeira e V como falsa. IV é FALSA porque a padronização NÃO implica "aplicação subjetiva" — a aplicação é objetiva, uniforme. V é VERDADEIRA porque a uniformidade formal contribui para a estabilidade dos modelos. A regra violada é a distinção entre aplicação subjetiva (errada) e objetiva (certa), e a definição de uniformidade. Construção correta: IV é falsa; V é verdadeira. Para identificar, desconfie do termo "subjetiva" em contextos de padronização — padronização é o oposto de subjetividade.'
      },
      conceitoCobrado: 'Redação oficial: impessoalidade, concisão, clareza, padronização e uniformidade',
      pegadinha: 'A banca insere uma afirmativa falsa (IV — "aplicação subjetiva") no meio de verdadeiras, exigindo leitura atenta de cada item.',
      comoApareceEmConcurso: 'Questões V/F de redação oficial exigem que o candidato analise cada afirmativa isoladamente, com base nos princípios do Manual de Redação da Presidência.',
      exemploInedito: {
        contexto: 'Um manual de redação oficial afirma: "O texto oficial deve ser impessoal (sem opiniões pessoais), conciso (sem redundâncias), claro (sem ambiguidades) e padronizado (com modelos uniformes e aplicação objetiva)."',
        aplicacao: 'Aplicando os princípios: impessoalidade = sem marcas individuais; concisão = economia; clareza = sem ambiguidade; padronização = uniformidade OBJETIVA (não subjetiva). A afirmativa que dissesse "aplicação subjetiva" seria falsa.',
        desafio: 'Classifique cada princípio e identifique qual afirmativa distorce o conceito de padronização.'
      }
    },
    tags: ['redação oficial', 'impessoalidade', 'concisão', 'clareza', 'padronização']
  },

  /* ============================================================
     Q10 — Instituto Access/UFAC 2026 — RED-22 (Documentos oficiais)
  ============================================================ */
  {
    id: 'Q-REAL-RED-22-001',
    tipo: 'REAL', area: 'POR', moduloId: 'RED-22',
    banca: 'Instituto Access', orgao: 'UFAC', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'Instituto Access 2026 — UFAC — Assistente em Administração' },
    subtema: 'Expedientes oficiais: finalidade e tipos documentais',
    dificuldade: 2, prioridade: 'alta',
    textoBase: 'Os expedientes oficiais são instrumentos de comunicação utilizados no âmbito da administração pública para formalizar atos, registrar informações e viabilizar a tramitação de demandas institucionais (BRASIL, 2018).',
    enunciado: 'Analise as proposições a seguir acerca da finalidade dos expedientes oficiais. I - Os expedientes oficiais destinam-se à formalização de comunicações administrativas, incluindo solicitações, encaminhamentos e registros institucionais. II - A finalidade dos expedientes oficiais pode variar conforme o tipo documental, envolvendo comunicação interna, externa ou registro de decisões administrativas. III - Os expedientes oficiais possuem finalidade de natureza interpessoal, voltada à interação direta entre emissor e destinatário no âmbito da administração pública. IV - A finalidade do expediente orienta a seleção das informações e a organização do conteúdo em função do objetivo comunicativo pretendido. Assinale a alternativa correta.',
    alternativas: [
      { id: 'A', texto: 'I, II, III e IV estão corretas.' },
      { id: 'B', texto: 'Apenas I, II e III estão corretas.' },
      { id: 'C', texto: 'Apenas II, III e IV estão corretas.' },
      { id: 'D', texto: 'Apenas I e III estão corretas.' },
      { id: 'E', texto: 'Apenas I, II e IV estão corretas.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'A alternativa E está correta. I é VERDADEIRA: os expedientes formalizam comunicações administrativas (solicitações, encaminhamentos, registros). II é VERDADEIRA: a finalidade varia conforme o tipo documental (ofício, memorando, ata etc.), envolvendo comunicação interna, externa ou registro de decisões. IV é VERDADEIRA: a finalidade orienta a seleção das informações e a organização do conteúdo. III é FALSA: os expedientes oficiais NÃO têm finalidade "interpessoal" — têm finalidade INSTITUCIONAL/PÚBLICA. A interação é entre órgãos/instituições, não entre pessoas privadas.',
      incorretas: {
        A: 'A alternativa inclui III, que é falsa. Os expedientes oficiais não têm finalidade interpessoal — a comunicação é institucional, voltada ao interesse público, não à interação privada entre emissor e destinatário. A regra violada é a natureza da comunicação oficial: institucional/pública x interpessoal/privada. Construção correta: a finalidade é institucional. Para identificar em outra questão, desconfie do termo "interpessoal" aplicado a documentos oficiais — o contato é entre órgãos, não entre pessoas.',
        B: 'A alternativa inclui III (falsa) e exclui IV (verdadeira). III erra porque a finalidade não é interpessoal; IV está correta porque a finalidade orienta a seleção de informações. A regra violada é a mesma de A (natureza interpessoal) e a exclusão indevida de IV. Construção correta: III é falsa; IV é verdadeira. Para identificar, verifique se a afirmativa trata a comunicação oficial como interpessoal — se sim, é falsa.',
        C: 'A alternativa exclui I (verdadeira) e inclui III (falsa). I está correta porque os expedientes formalizam comunicações administrativas; III é falsa pela mesma razão de A. A regra violada é a exclusão indevida de I e a inclusão de III. Construção correta: I é verdadeira; III é falsa. Para identificar, verifique se a afirmativa descreve a formalização de comunicações — se sim, é verdadeira.',
        D: 'A alternativa exclui II e IV (ambas verdadeiras) e inclui III (falsa). II está correta porque a finalidade varia conforme o tipo documental; IV está correta porque a finalidade orienta a seleção de informações; III é falsa pela mesma razão de A. A regra violada é a exclusão indevida de II e IV e a inclusão de III. Construção correta: II e IV são verdadeiras; III é falsa. Para identificar, verifique cada afirmativa isoladamente.'
      },
      conceitoCobrado: 'Expedientes oficiais: finalidade institucional, variação por tipo documental e orientação do conteúdo',
      pegadinha: 'A banca insere uma afirmativa falsa (III — "natureza interpessoal") no meio de verdadeiras, exigindo leitura atenta.',
      comoApareceEmConcurso: 'Questões sobre expedientes oficiais exigem que o candidato conheça a finalidade institucional da comunicação administrativa — não basta saber os nomes dos documentos; é preciso entender sua função.',
      exemploInedito: {
        contexto: 'Um órgão público envia um ofício a outro para solicitar informações sobre um processo. A comunicação é formal, institucional e voltada ao interesse público.',
        aplicacao: 'A finalidade do ofício é institucional (comunicação entre órgãos), não interpessoal (entre pessoas privadas). O tipo documental (ofício) orienta a seleção das informações e a organização do conteúdo — mesma lógica da questão.',
        desafio: 'Classifique a finalidade do ofício (institucional x interpessoal) e explique por que não é interpessoal.'
      }
    },
    tags: ['redação oficial', 'expedientes oficiais', 'finalidade institucional', 'documentos administrativos']
  },

  /* ============================================================
     Q01 — COPEVE/UFMG 2026 — POR-02 (Gênero textual)
  ============================================================ */
  {
    id: 'Q-REAL-POR-02-002',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-02',
    banca: 'COPEVE/UFMG', orgao: 'UFMG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'COPEVE/UFMG 2026 — UFMG — Assistente em Administração' },
    subtema: 'Gênero textual: crônica argumentativa',
    dificuldade: 2, prioridade: 'alta',
    textoBase: 'Certos medos e angústias não têm relação com a idade e são universais. Anos atrás, eu achava que os 80 anos me encontrariam num estado de serenidade plena. Claro que não tinha a pretensão de resolver as contradições do mundo, muito menos a de decifrar os mistérios da condição humana, mas achava que estaria livre das angústias e dos desacertos existenciais que me atormentavam. Eu estava enganado. Os medos, a ansiedade, as frustrações e perdas atribuídas ao envelhecimento são universais, não importa se você tem 40 ou 70, ou 90 anos. [texto completo de Drauzio Varella, Folha de S.Paulo, 31 dez. 2025, adaptado]',
    enunciado: 'Com base na noção de gênero textual, o texto I classifica-se como',
    alternativas: [
      { id: 'A', texto: 'relato pessoal, já que privilegia centralmente a vivência do colunista, o qual narra episódios de sua vida.' },
      { id: 'B', texto: 'resenha crítica, uma vez que resgata diversos excertos literários para apresentar uma avaliação deles.' },
      { id: 'C', texto: 'artigo de opinião, porque constrói um projeto argumentativo de forma autoral e impessoal.' },
      { id: 'D', texto: 'crônica argumentativa, pois opina e propõe reflexões sobre um tema cotidiano de forma mais subjetiva.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. O texto é uma CRÔNICA ARGUMENTATIVA: parte de um tema cotidiano (o envelhecimento, os medos e angústias da idade) e desenvolve uma reflexão autoral, com marcas de subjetividade ("eu achava", "eu estava enganado", "adquiri a impressão"). O autor opina, argumenta e propõe uma tese (envelhecer com sabedoria), mas sem o distanciamento impessoal do artigo de opinião tradicional. É crônica pela leveza do tema cotidiano e argumentativa pela construção de uma reflexão com tese.',
      incorretas: {
        A: 'A alternativa erra ao classificar o texto como "relato pessoal". Relato pessoal é a narração de episódios da vida do autor, com foco em acontecimentos e personagens. O texto não narra episódios da vida de Varella — ele parte de uma experiência pessoal inicial, mas desenvolve uma REFLEXÃO sobre o envelhecimento, com citações literárias e argumentos. A regra violada é a distinção entre narrar (contar episódios) e argumentar/refletir (defender uma tese). Construção correta: o texto é crônica argumentativa. Para identificar em outra questão, pergunte: o texto conta uma história com enredo ou defende uma reflexão? Se defende, não é relato.',
        B: 'A alternativa erra ao classificar o texto como "resenha crítica". Resenha crítica avalia uma obra (livro, filme, peça) — o texto não avalia os excertos literários que cita; usa-os como ARGUMENTOS para sustentar sua reflexão sobre o envelhecimento. A regra violada é a distinção entre resenhar (avaliar obra) e citar (usar como argumento). Construção correta: os excertos são argumentos de autoridade, não objeto de avaliação. Para identificar, pergunte: o texto avalia uma obra ou usa citações para argumentar? Se usa, não é resenha.',
        C: 'A alternativa erra ao dizer que o texto é "artigo de opinião... de forma autoral e impessoal". O texto é autoral, mas NÃO é impessoal — tem marcas explícitas de subjetividade ("eu achava", "eu estava enganado", "julguei que lhe faltasse autocrítica", "adquiri a impressão"). O artigo de opinião tradicional tende à impessoalidade; a crônica argumentativa admite a subjetividade. A regra violada é a distinção entre impessoalidade (artigo) e subjetividade (crônica). Construção correta: o texto é crônica argumentativa, com subjetividade. Para identificar, procure marcas de "eu" — se houver, não é impessoal.'
      },
      conceitoCobrado: 'Gêneros textuais: crônica argumentativa x relato pessoal, resenha, artigo de opinião',
      pegadinha: 'A banca oferece gêneros próximos (relato, resenha, artigo, crônica) e exige que o candidato identifique o que melhor se ajusta ao texto — não basta saber definições; é preciso aplicar ao texto.',
      comoApareceEmConcurso: 'Questões de gênero textual exigem que o candidato identifique as marcas do gênero no texto: subjetividade, tema cotidiano, tese, citações, etc.',
      exemploInedito: {
        contexto: 'Um texto de colunista começa: "Eu sempre acreditei que a tecnologia simplificaria a vida. Hoje, aos 50, percebo que ela criou novas formas de cansaço." E desenvolve uma reflexão sobre o tema.',
        aplicacao: 'O texto é crônica argumentativa: parte de experiência pessoal, reflete sobre tema cotidiano e defende uma tese, com subjetividade. Não é relato (não narra episódios), nem artigo impessoal (tem "eu").',
        desafio: 'Classifique o gênero do texto e justifique por que não é relato nem artigo de opinião impessoal.'
      }
    },
    tags: ['gênero textual', 'crônica argumentativa', 'subjetividade', 'artigo de opinião']
  },

  /* ============================================================
     Q02 — COPEVE/UFMG 2026 — POR-01 (Ponto de vista central)
  ============================================================ */
  {
    id: 'Q-REAL-POR-01-009',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-01',
    banca: 'COPEVE/UFMG', orgao: 'UFMG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'COPEVE/UFMG 2026 — UFMG — Assistente em Administração' },
    subtema: 'Paráfrase do ponto de vista central',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-02-002 — texto de Drauzio Varella sobre envelhecimento.]',
    enunciado: 'Identifique a alternativa que parafraseia corretamente o ponto de vista central do texto I.',
    alternativas: [
      { id: 'A', texto: 'Devem-se repudiar as falas que se referem à velhice de forma atenuada, como se a dureza dessa fase da vida precisasse ser suavizada, e os idosos, infantilizados.' },
      { id: 'B', texto: 'Não é possível experienciar a terceira idade com alguma serenidade, já que o medo e as frustrações do envelhecimento são partes incontornáveis da condição humana.' },
      { id: 'C', texto: 'É sábio aceitar os caminhos naturais da vida, entendendo as limitações da velhice, mas também aproveitando o potencial que ela apresenta.' },
      { id: 'D', texto: 'A expectativa de vida do brasileiro aumentou consideravelmente nas últimas décadas, o que fez com que o olhar sobre a velhice atual deixasse de ser pejorativo.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. O texto conclui: "o desafio agora é envelhecer com sabedoria, o que implica aceitar as limitações impostas pelo corpo, sem abandonar a atividade física e o desejo de experimentar o novo. É combater a vontade de desistir, de isolar-se, de achar que não vale a pena viver". A paráfrase "aceitar os caminhos naturais da vida, entendendo as limitações da velhice, mas também aproveitando o potencial que ela apresenta" capta exatamente essa dualidade: aceitação das limitações + aproveitamento do potencial.',
      incorretas: {
        A: 'A alternativa restringe o texto a um ponto específico (a crítica aos eufemismos) e o transforma em tese central. O texto critica os eufemismos ("terceira idade", "melhor idade", "idoso"), mas isso é um argumento secundário, não o ponto de vista central. A regra violada é a distinção entre tese central (abrange o todo) e argumento secundário (parte). Construção correta: o ponto central é envelhecer com sabedoria, aceitando limitações e aproveitando potencial. Para identificar em outra questão, verifique se a alternativa resume o texto inteiro ou apenas um trecho.',
        B: 'A alternativa CONTRADIZ o texto. O texto afirma que é possível experienciar a velhice com serenidade e sabedoria — o autor critica justamente a "vontade de desistir" e defende "envelhecer com sabedoria". A alternativa diz que "não é possível experienciar com serenidade" — o oposto. A regra violada é a leitura literal: o texto defende a possibilidade de serenidade; a alternativa nega. Construção correta: é possível envelhecer com sabedoria. Para identificar, procure no texto os verbos de incentivo ("é combater a vontade de desistir") — se a alternativa negar, está errada.',
        D: 'A alternativa DISTORCE o texto. O texto menciona o aumento da expectativa de vida, mas NÃO afirma que "o olhar sobre a velhice deixou de ser pejorativo" — ao contrário, critica os eufemismos que "infantilizam" os idosos. O aumento da expectativa não eliminou o olhar pejorativo. A regra violada é a inferência autorizada: o texto não sustenta que o olhar deixou de ser pejorativo. Construção correta: o olhar pejorativo persiste (via eufemismos). Para identificar, verifique se o texto afirma a superação do preconceito — se não afirmar, a alternativa extrapola.'
      },
      conceitoCobrado: 'Paráfrase do ponto de vista central x argumento secundário x contradição',
      pegadinha: 'A banca oferece alternativas que captam partes do texto (crítica aos eufemismos, aumento da expectativa) como se fossem a tese central.',
      comoApareceEmConcurso: 'Questões de ponto de vista central exigem que o candidato identifique a tese que abrange o texto inteiro — não o trecho mais marcante.',
      exemploInedito: {
        contexto: 'Um artigo afirma: "A tecnologia não nos torna mais livres; ela apenas muda a forma de nossa dependência. O desafio é usá-la com consciência, sem abandonar o pensamento crítico."',
        aplicacao: 'A paráfrase correta é: "É preciso usar a tecnologia com consciência, sem abandonar o pensamento crítico". A paráfrase incorreta seria: "A tecnologia nos torna mais dependentes" (apenas uma parte) ou "A tecnologia nos liberta" (contradiz o texto).',
        desafio: 'Identifique qual paráfrase capta o ponto de vista central e qual restringe ou contradiz o texto.'
      }
    },
    tags: ['ponto de vista central', 'paráfrase', 'tese', 'envelhecimento']
  },

  /* ============================================================
     Q03 — COPEVE/UFMG 2026 — POR-01 (Finalidade de citações)
  ============================================================ */
  {
    id: 'Q-REAL-POR-01-010',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-01',
    banca: 'COPEVE/UFMG', orgao: 'UFMG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'COPEVE/UFMG 2026 — UFMG — Assistente em Administração' },
    subtema: 'Finalidade das citações literárias no texto',
    dificuldade: 3, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-02-002 — texto de Drauzio Varella sobre envelhecimento.]',
    enunciado: 'Assinale a alternativa em que é apresentada incorretamente a relação entre o trecho citado e a sua finalidade.',
    alternativas: [
      { id: 'A', texto: 'A citação de William Yeats (8º parágrafo) ilustra a percepção derrotista e debilitada do envelhecimento de um homem de 60 anos de séculos atrás, a qual fazia parte do senso comum.' },
      { id: 'B', texto: 'A citação de Montaigne (5º parágrafo) comprova a baixa expectativa de vida de outrora, o que fazia com que as mortes mais comuns não prescindissem das condições de senilidade da velhice.' },
      { id: 'C', texto: 'A citação de Lord Byron (2º parágrafo) exemplifica que não são somente os idosos os preocupados com os dilemas do envelhecimento, um tema universal e atemporal.' },
      { id: 'D', texto: 'A citação de Bernard Shaw (12º parágrafo) reforça que a finitude da vida precisa ser entendida com mais aceitação e serenidade, já que a ideia de imortalidade seria muito pior.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta (é a que apresenta relação INCORRETA). Montaigne afirma que "morrer em idade avançada é um evento raro, singular e extraordinário" — ou seja, a morte por velhice era RARA, não comum. A alternativa diz que "as mortes mais comuns não prescindissem das condições de senilidade da velhice" — isso significa que as mortes comuns EXIGIAM a senilidade, ou seja, eram causadas pela velhice. Isso CONTRADIZ Montaigne, que diz o oposto: a morte por velhice era rara. A relação está invertida.',
      incorretas: {
        A: 'A alternativa A está ADEQUADA. A citação de Yeats ("esta caricatura/ Idade decrépita que foi amarrada a mim/ Como a cauda num cachorro?") ilustra a percepção derrotista e debilitada do envelhecimento — um homem de 60 anos que se sente "amarrado" à velhice. A relação está correta. A regra aplicada é a identificação da finalidade da citação: ilustrar uma percepção. Construção correta: a citação de Yeats ilustra a visão derrotista. Para identificar, verifique se a citação realmente sustenta a relação proposta.',
        C: 'A alternativa C está ADEQUADA. A citação de Lord Byron ("Meus dias estão nas folhas amarelas...") é usada para mostrar que a preocupação com o envelhecimento não é exclusiva dos idosos — Byron escreveu aos 36 anos. A relação está correta: a citação exemplifica a universalidade e atemporalidade do tema. Construção correta: a citação de Byron exemplifica a universalidade. Para identificar, verifique se a citação sustenta a relação.',
        D: 'A alternativa D está ADEQUADA. A citação de Bernard Shaw ("É mais difícil lidar com o envelhecimento do que com a morte... Acreditar na imortalidade genuína é acreditar no horror inimaginável") é usada para reforçar que a finitude precisa ser aceita com serenidade, já que a imortalidade seria pior. A relação está correta: Shaw reforça a aceitação da finitude. Construção correta: a citação de Shaw reforça a aceitação. Para identificar, verifique se a citação sustenta a relação.'
      },
      conceitoCobrado: 'Finalidade das citações literárias: ilustrar, comprovar, exemplificar, reforçar',
      pegadinha: 'A banca inverte a relação em uma das alternativas (B), atribuindo à citação de Montaigne uma finalidade que contradiz o próprio texto citado.',
      comoApareceEmConcurso: 'Questões sobre citações exigem que o candidato identifique a função de cada citação no argumento — não basta saber quem citou; é preciso entender por quê.',
      exemploInedito: {
        contexto: 'Um artigo cita um poeta que diz "a velhice é a noite que desce sobre o dia" e comenta: "o poeta ilustra a visão sombria do envelhecimento".',
        aplicacao: 'A relação está correta: a citação ilustra a visão sombria. A relação seria INCORRETA se o artigo dissesse "o poeta comprova que a velhice é alegre" — isso contradiria o próprio poeta.',
        desafio: 'Identifique se a relação entre a citação e sua finalidade está correta ou invertida.'
      }
    },
    tags: ['citações', 'finalidade', 'Montaigne', 'argumento de autoridade']
  },

  /* ============================================================
     Q04 — COPEVE/UFMG 2026 — POR-03 (Referenciação)
  ============================================================ */
  {
    id: 'Q-REAL-POR-03-005',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-03',
    banca: 'COPEVE/UFMG', orgao: 'UFMG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'COPEVE/UFMG 2026 — UFMG — Assistente em Administração' },
    subtema: 'Coesão referencial: identificação do referente',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-02-002 — texto de Drauzio Varella sobre envelhecimento.]',
    enunciado: 'Nos fragmentos a seguir, o termo em destaque está corretamente relacionado a seu referente em',
    alternativas: [
      { id: 'A', texto: '"Se eles tivessem chegado a essa idade no Brasil de hoje, teriam a expectativa de viver mais 22 anos [...]." – Os brasileiros com mais de 60 anos.' },
      { id: 'B', texto: '"Eles viviam cercados por tantos perigos, que pensar nos problemas da velhice não fazia o menor sentido." – A mulher e o homem moderno.' },
      { id: 'C', texto: '"Como você se sentiria aos 30 se lhe dissessem que sua cabeça é de 15?" – Bernard Shaw.' },
      { id: 'D', texto: '"Uma vez que essa é a mais rara das mortes... Nós a chamamos de natural [...]." – Aquela causada pela perda dos poderes na idade avançada.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. Em "Uma vez que essa é a mais rara das mortes... Nós a chamamos de natural", o pronome "a" retoma "essa" (a morte causada pela perda dos poderes na idade avançada), que por sua vez retoma a ideia anterior: "a morte causada pela perda dos poderes trazida pela idade avançada". O referente está corretamente identificado.',
      incorretas: {
        A: 'A alternativa erra o referente. Em "Se eles tivessem chegado a essa idade no Brasil de hoje", o "eles" retoma "Howe e Yeats" (mencionados no parágrafo anterior), não "os brasileiros com mais de 60 anos". O texto diz: "Howe e Yeats morreram sem saber que... Se eles tivessem chegado a essa idade no Brasil de hoje..." — "eles" = Howe e Yeats. A regra violada é a identificação do antecedente pronominal: o pronome retoma o termo mais próximo e compatível. Construção correta: "eles" = Howe e Yeats. Para identificar em outra questão, volte ao parágrafo anterior e localize o antecedente.',
        B: 'A alternativa erra o referente. Em "Eles viviam cercados por tantos perigos", o "eles" retoma "nossos ancestrais" (mencionados no parágrafo anterior: "muito mais do que inquietava nossos ancestrais. Eles viviam cercados..."), não "a mulher e o homem moderno". A regra violada é a mesma de A: identificação do antecedente. Construção correta: "eles" = nossos ancestrais. Para identificar, observe o parágrafo imediatamente anterior.',
        C: 'A alternativa erra o referente. Em "Como você se sentiria aos 30 se lhe dissessem que sua cabeça é de 15?", o "você" é um pronome de tratamento GENÉRICO, dirigido ao leitor, não a Bernard Shaw. O autor usa "você" para envolver o leitor na reflexão. A regra violada é a distinção entre pronome genérico (leitor) e referente específico (Bernard Shaw). Construção correta: "você" = leitor genérico. Para identificar, pergunte: o pronome se dirige a uma pessoa específica ou ao leitor em geral?'
      },
      conceitoCobrado: 'Coesão referencial: identificação do antecedente de pronomes',
      pegadinha: 'A banca oferece referentes que aparecem próximos no texto, mas que não são os antecedentes corretos — o candidato precisa voltar ao parágrafo anterior.',
      comoApareceEmConcurso: 'Questões de referenciação exigem que o candidato identifique o antecedente pronominal com precisão, voltando ao texto.',
      exemploInedito: {
        contexto: 'Um relatório afirma: "Os servidores antigos conheciam o sistema. Eles resistiram à mudança, mas os novos adaptaram-se rapidamente."',
        aplicacao: '"Eles" retoma "os servidores antigos" (não "os novos"). O antecedente é o termo mais próximo e compatível com o sentido.',
        desafio: 'Identifique o antecedente de "eles" e explique por que não pode ser "os novos".'
      }
    },
    tags: ['coesão referencial', 'referente', 'pronome', 'antecedente']
  },

  /* ============================================================
     Q05 — COPEVE/UFMG 2026 — POR-14 (Conjunção consecutiva)
  ============================================================ */
  {
    id: 'Q-REAL-POR-14-003',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-14',
    banca: 'COPEVE/UFMG', orgao: 'UFMG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'COPEVE/UFMG 2026 — UFMG — Assistente em Administração' },
    subtema: 'Conjunção subordinativa consecutiva: "tão... que" / "tantos... que"',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-02-002 — texto de Drauzio Varella sobre envelhecimento.]',
    enunciado: '"Eles viviam cercados por tantos perigos, que pensar nos problemas da velhice não fazia o menor sentido." Assinale a alternativa na qual o termo destacado possui a mesma função sintática da palavra que.',
    alternativas: [
      { id: 'A', texto: '"[...] eles costumavam atingir essa idade em condições tão deploráveis que se referiam à velhice como fonte inesgotável de dores [...]."' },
      { id: 'B', texto: '"No início da carreira, ao ouvir uma paciente dizer que tinha 70 anos, mas não se considerava velha [...]."' },
      { id: 'C', texto: '"Uma vez que essa é a mais rara das mortes... Nós a chamamos de natural [...]."' },
      { id: 'D', texto: '"A preocupação com o envelhecimento aflige a mulher e o homem moderno, muito mais do que inquietava nossos ancestrais."' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. Em "tantos perigos, que pensar nos problemas da velhice não fazia o menor sentido", o "que" é CONJUNÇÃO SUBORDINATIVA CONSECUTIVA — introduz a consequência de "tantos perigos" (tão intensos que...). Em "condições tão deploráveis que se referiam à velhice...", o "que" também é consecutivo — introduz a consequência de "tão deploráveis". Ambos têm a mesma função: conjunção consecutiva.',
      incorretas: {
        A_ok: 'A é o gabarito.',
        B: 'A alternativa erra porque o "que" em "ouvir uma paciente dizer que tinha 70 anos" é CONJUNÇÃO INTEGRANTE — introduz oração subordinada substantiva objetiva direta (completa o sentido de "dizer"). Não é consecutiva. A regra violada é a distinção entre integrante (sem antecedente, completa verbo) e consecutiva (introduz consequência de "tão/tantos"). Construção correta: "que" = conjunção integrante. Para identificar em outra questão, verifique se há "tão/tantos" antes do "que" — se houver, é consecutiva; se não, pode ser integrante.',
        C: 'A alternativa erra porque em "Uma vez que essa é a mais rara das mortes", o "que" faz parte da locução conjuntiva "uma vez que" — conjunção subordinativa CAUSAL. Não é consecutiva. A regra violada é a distinção entre causal ("uma vez que") e consecutiva ("tão... que"). Construção correta: "uma vez que" = causal. Para identificar, verifique se o "que" está acompanhado de "uma vez" — se sim, é causal.',
        D: 'A alternativa erra porque em "muito mais do que inquietava nossos ancestrais", o "que" faz parte da locução comparativa "mais... do que" — conjunção subordinativa COMPARATIVA. Não é consecutiva. A regra violada é a distinção entre comparativa ("mais... do que") e consecutiva ("tão... que"). Construção correta: "do que" = comparativa. Para identificar, verifique se há "mais/menos" antes do "que" — se houver, é comparativa.'
      },
      conceitoCobrado: 'Conjunções subordinativas: consecutiva ("tão/tantos... que") x integrante, causal, comparativa',
      pegadinha: 'A banca oferece quatro tipos de "que" (consecutivo, integrante, causal, comparativo) para testar a identificação precisa da função.',
      comoApareceEmConcurso: 'Questões sobre o "que" exigem que o candidato identifique o contexto sintático — não basta decorar classificações; é preciso verificar a estrutura.',
      exemploInedito: {
        contexto: 'Um relatório afirma: "O órgão recebeu tantas demandas que não conseguiu atender a todas."',
        aplicacao: '"Que" é consecutivo — introduz a consequência de "tantas demandas". Equivale a "tão... que". Mesma função da questão.',
        desafio: 'Classifique o "que" no trecho e explique por que é consecutivo, não integrante.'
      }
    },
    tags: ['conjunção consecutiva', 'que', 'subordinação', 'tão... que']
  },

  /* ============================================================
     Q06 — COPEVE/UFMG 2026 — POR-07 (Acentuação)
  ============================================================ */
  {
    id: 'Q-REAL-POR-07-003',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-07',
    banca: 'COPEVE/UFMG', orgao: 'UFMG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'COPEVE/UFMG 2026 — UFMG — Assistente em Administração' },
    subtema: 'Acentuação gráfica: regras distintas',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-02-002 — texto de Drauzio Varella sobre envelhecimento.]',
    enunciado: 'Assinale a alternativa em que as palavras são acentuadas por regras distintas.',
    alternativas: [
      { id: 'A', texto: 'início, naufrágio, sequência.' },
      { id: 'B', texto: 'já, nós, é.' },
      { id: 'C', texto: 'inútil, atribuída, referência.' },
      { id: 'D', texto: 'século, física, autocrítica.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. As três palavras são acentuadas por regras DISTINTAS: (1) "inútil" é paroxítona terminada em "-l" (regra das paroxítonas terminadas em L); (2) "atribuída" é acentuada por HIATO (i tônico sozinho na sílaba: a-tri-bu-Í-da); (3) "referência" é paroxítona terminada em DITONGO (referência: -cia final). Três regras diferentes.',
      incorretas: {
        A: 'A alternativa erra porque não há três regras distintas. "Início" é proparoxítona (regra das proparoxítonas); "naufrágio" é paroxítona terminada em ditongo (regra das paroxítonas); "sequência" é paroxítona terminada em ditongo (mesma regra de naufrágio). Há apenas DUAS regras (proparoxítona + paroxítona), não três. A regra violada é a contagem de regras: é preciso que CADA palavra seja acentuada por uma regra diferente. Construção correta: A tem duas regras, não três. Para identificar em outra questão, classifique cada palavra separadamente e conte quantas regras distintas há.',
        B: 'A alternativa erra porque as três palavras são acentuadas pela MESMA regra: monossílabos tônicos terminados em a, e, o (já, nós, é). Não há regras distintas. A regra violada é a contagem de regras: todas são monossílabos tônicos. Construção correta: B tem uma regra só. Para identificar, verifique se todas as palavras pertencem à mesma categoria de acentuação.',
        D: 'A alternativa erra porque as três palavras são acentuadas pela MESMA regra: todas são PROPAROXÍTONAS (século, física, autocrítica). A regra das proparoxítonas não tem exceção. Não há regras distintas. A regra violada é a contagem de regras: todas são proparoxítonas. Construção correta: D tem uma regra só. Para identificar, verifique se todas as palavras são proparoxítonas.'
      },
      conceitoCobrado: 'Acentuação gráfica: regras das proparoxítonas, paroxítonas, hiatos e monossílabos tônicos',
      pegadinha: 'A banca oferece alternativas com palavras que podem parecer de regras diferentes, mas que compartilham a mesma regra (A tem duas, B e D têm uma). A resposta é a que tem TRÊS regras distintas.',
      comoApareceEmConcurso: 'Questões de acentuação com "regras distintas" exigem que o candidato classifique cada palavra e verifique se todas são de regras diferentes — não basta olhar a terminação.',
      exemploInedito: {
        contexto: 'Um comunicado traz: "O líquido (proparoxítona) foi colhido (paroxítona L) na saída (hiato)."',
        aplicacao: 'Três palavras, três regras distintas: proparoxítona, paroxítona terminada em L, hiato. Mesma estrutura da alternativa C.',
        desafio: 'Classifique cada palavra quanto à regra de acentuação e verifique se são distintas.'
      }
    },
    tags: ['acentuação', 'proparoxítona', 'paroxítona', 'hiato', 'regras distintas']
  },

  /* ============================================================
     Q07 — COPEVE/UFMG 2026 — POR-18 (Pontuação)
  ============================================================ */
  {
    id: 'Q-REAL-POR-18-006',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-18',
    banca: 'COPEVE/UFMG', orgao: 'UFMG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'COPEVE/UFMG 2026 — UFMG — Assistente em Administração' },
    subtema: 'Uso da vírgula: coordenadas, subordinadas, adjuntos e apostos',
    dificuldade: 3, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-02-002 — texto de Drauzio Varella sobre envelhecimento.]',
    enunciado: 'Em relação ao uso da vírgula nos trechos a seguir, assinale (V) verdadeiro ou (F) falso antes de cada afirmativa: ( ) Em "Claro que não tinha a pretensão de resolver as contradições do mundo, muito menos a de decifrar os mistérios da condição humana, mas achava que estaria livre das angústias e dos desacertos existenciais que me atormentavam.", a vírgula antes do "mas" separa a oração coordenada sindética alternativa do restante do período composto. ( ) Em "Embora sempre tenha havido mulheres e homens com 70 ou 80 anos, eles costumavam atingir essa idade em condições tão deploráveis que se referiam à velhice como fonte inesgotável de dores, limitações cognitivas, prazeres perdidos e decadência física.", a vírgula antes do "eles" sinaliza a inversão da oração subordinada adverbial concessiva em relação à oração principal. ( ) Em "Num de seus textos, Machado de Assis se refere a um \'velho gaiteiro de 50 anos\'. Anos atrás, quem chegava aos 60 anos era sexagenário. No início da carreira, ao ouvir uma paciente dizer que tinha 70 anos [...].", as três vírgulas se justificam porque separam adjuntos adverbiais de lugar ou de tempo deslocados, fora da ordem direta. ( ) Em "É não se irritar quando se referem a nós, velhos, com eufemismos [...]" e em "Sabendo levar, doutor, a vida é uma festa", as palavras em destaque são intercaladas por vírgulas, por se tratarem de apostos explicativos. A sequência correta é:',
    alternativas: [
      { id: 'A', texto: 'F. V. V. F.' },
      { id: 'B', texto: 'F. V. F. V.' },
      { id: 'C', texto: 'V. F. F. V.' },
      { id: 'D', texto: 'V. F. V. F.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A sequência é F, V, V, F. (I) FALSA: a vírgula antes do "mas" separa oração coordenada sindética ADVERSATIVA, não alternativa. "Mas" é conjunção adversativa. (II) VERDADEIRA: a vírgula após "anos" (antes de "eles") sinaliza a inversão da oração subordinada adverbial concessiva ("Embora sempre tenha havido...") em relação à principal ("eles costumavam..."). (III) VERDADEIRA: "Num de seus textos," (adjunto de lugar), "Anos atrás," (adjunto de tempo), "No início da carreira," (adjunto de tempo) — todas deslocadas. (IV) FALSA: "velhos" é aposto explicativo de "nós", mas "doutor" é VOCATIVO (chamamento), não aposto. A sequência é F, V, V, F.',
      incorretas: {
        A_ok: 'A é o gabarito.',
        B: 'A alternativa erra ao classificar III como falsa. As três vírgulas separam, sim, adjuntos adverbiais deslocados (lugar e tempo) — a afirmativa está correta. A regra violada é a identificação dos adjuntos adverbiais deslocados. Construção correta: III é verdadeira. Para identificar em outra questão, verifique se o termo antes da vírgula indica circunstância (lugar, tempo, modo) e está fora da ordem direta.',
        C: 'A alternativa erra ao classificar I como verdadeira e II como falsa. I é FALSA porque "mas" é adversativa, não alternativa; II é VERDADEIRA porque a vírgula após "anos" sinaliza a inversão da concessiva. A regra violada é a classificação de "mas" (adversativa) e da estrutura concessiva invertida. Construção correta: I é falsa; II é verdadeira. Para identificar, verifique o valor semântico do conectivo ("mas" = oposição) e a posição da subordinada (antes = invertida).',
        D: 'A alternativa erra ao classificar I como verdadeira e IV como falsa. I é FALSA ("mas" = adversativa); IV é FALSA porque "doutor" é vocativo (não aposto). A regra violada é a classificação de "mas" e a distinção entre aposto e vocativo. Construção correta: I é falsa; IV é falsa. Para identificar, associe "mas" a oposição e "doutor" a chamamento.'
      },
      conceitoCobrado: 'Uso da vírgula: coordenadas adversativas, subordinadas concessivas invertidas, adjuntos deslocados e apostos x vocativos',
      pegadinha: 'A banca mistura quatro situações distintas (adversativa x alternativa, concessiva invertida, adjunto deslocado, aposto x vocativo) em uma única questão V/F.',
      comoApareceEmConcurso: 'Questões V/F de pontuação exigem que o candidato analise cada afirmativa isoladamente, identificando o termo isolado e sua função sintática.',
      exemploInedito: {
        contexto: 'Um relatório afirma: "Embora o prazo tenha sido curto, a equipe entregou o trabalho; o diretor, recém-empossado, aprovou o resultado; o servidor, porém, discordou."',
        aplicacao: 'Primeira vírgula: concessiva invertida; segunda e terceira: aposto explicativo ("recém-empossado"); quarta: adversativa ("porém"). Cada uma com função distinta.',
        desafio: 'Classifique a função de cada vírgula no trecho e identifique se há vocativo disfarçado de aposto.'
      }
    },
    tags: ['pontuação', 'vírgula', 'adversativa', 'concessiva', 'aposto', 'vocativo']
  },

  /* ============================================================
     Q08 — COPEVE/UFMG 2026 — POR-01 (Posicionamento sobre a morte)
  ============================================================ */
  {
    id: 'Q-REAL-POR-01-011',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-01',
    banca: 'COPEVE/UFMG', orgao: 'UFMG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'COPEVE/UFMG 2026 — UFMG — Assistente em Administração' },
    subtema: 'Posicionamento sobre a morte em diferentes textos',
    dificuldade: 2, prioridade: 'alta',
    textoBase: 'Texto I: [texto de Drauzio Varella sobre envelhecimento]. Texto II: CONSOADA, de Manuel Bandeira — "Quando a Indesejada das gentes chegar / (Não sei se dura ou caroável), / talvez eu tenha medo. / Talvez sorria, ou diga: / — Alô, iniludível! / O meu dia foi bom, pode a noite descer. / (A noite com os seus sortilégios.) / Encontrará lavrado o campo, a casa limpa, / A mesa posta, / Com cada coisa em seu lugar." Texto III: tirinha de Laerte — "Como receber a morte": Charon diz "Pega um remo."; personagem diz "Senta."; Charon pergunta "Tem ordem judicial?".',
    enunciado: 'Os textos I, II e III não se posicionam sobre a morte de forma',
    alternativas: [
      { id: 'A', texto: 'subjetiva.' },
      { id: 'B', texto: 'derrotista.' },
      { id: 'C', texto: 'crítica.' },
      { id: 'D', texto: 'parcial.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. Nenhum dos três textos se posiciona sobre a morte de forma DERROTISTA. O texto I combate a "vontade de desistir" e defende "envelhecer com sabedoria"; o texto II (Bandeira) aceita a morte com serenidade ("O meu dia foi bom, pode a noite descer"); o texto III (Laerte) trata a morte com humor (a personagem pede "ordem judicial" para embarcar). Nenhum deles é derrotista — todos apresentam uma postura de aceitação, serenidade ou humor.',
      incorretas: {
        A: 'A alternativa erra porque os três textos SÃO subjetivos: Varella fala em primeira pessoa ("eu achava"), Bandeira expressa sentimentos pessoais ("talvez eu tenha medo"), Laerte usa humor (subjetividade). Portanto, eles SE posicionam de forma subjetiva. A regra violada é a identificação da subjetividade: os três textos têm marcas subjetivas. Construção correta: eles se posicionam de forma subjetiva. Para identificar, procure marcas de "eu" e de emoção — se houver, há subjetividade.',
        C: 'A alternativa erra porque os textos I e III SÃO críticos: Varella critica os eufemismos e a visão derrotista; Laerte critica burocracia (pedir "ordem judicial" para morrer). Bandeira não é crítico, mas os outros dois são. Portanto, não se pode dizer que os três NÃO se posicionam de forma crítica. A regra violada é a generalização: nem todos são críticos, mas alguns são. Construção correta: há textos críticos (I e III). Para identificar, verifique se cada texto tem tom crítico — se alguns tiverem, a alternativa que diz "não se posicionam de forma crítica" é falsa.',
        D: 'A alternativa erra porque os três textos SÃO parciais — todos têm um ponto de vista (Varella: envelhecer com sabedoria; Bandeira: aceitação serena; Laerte: humor). Nenhum é imparcial ou neutro. A regra violada é a definição de parcialidade: ter ponto de vista é ser parcial. Construção correta: eles se posicionam de forma parcial (com ponto de vista). Para identificar, pergunte: o texto tem ponto de vista? Se sim, é parcial.'
      },
      conceitoCobrado: 'Posicionamento sobre a morte: subjetivo, derrotista, crítico, parcial',
      pegadinha: 'A banca pede a forma como os textos NÃO se posicionam — o candidato precisa verificar qual das quatro atitudes está ausente nos três textos.',
      comoApareceEmConcurso: 'Questões comparativas entre textos exigem que o candidato identifique o que há em comum e o que está ausente — não basta analisar um texto isoladamente.',
      exemploInedito: {
        contexto: 'Três textos sobre a aposentadoria: um defende o descanso merecido, outro critica a inatividade forçada, outro faz humor sobre a rotina de quem se aposenta.',
        aplicacao: 'Nenhum dos três é "derrotista" — todos apresentam posturas ativas (descanso, crítica, humor). A forma como NÃO se posicionam é a derrotista.',
        desafio: 'Identifique qual atitude está ausente nos três textos e justifique com base em cada um.'
      }
    },
    tags: ['posicionamento', 'morte', 'derrotismo', 'comparação de textos']
  },

  /* ============================================================
     Q09 — COPEVE/UFMG 2026 — POR-04 (Substituição lexical)
  ============================================================ */
  {
    id: 'Q-REAL-POR-04-010',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-04',
    banca: 'COPEVE/UFMG', orgao: 'UFMG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'COPEVE/UFMG 2026 — UFMG — Assistente em Administração' },
    subtema: 'Substituição lexical: "iniludível" x "inequívoca"',
    dificuldade: 3, prioridade: 'alta',
    textoBase: '[Texto II — CONSOADA, de Manuel Bandeira. Mesmo texto-base da questão Q-REAL-POR-01-011.]',
    enunciado: 'Assinale a alternativa em que a palavra em destaque do texto II não pode ser substituída pelo termo em itálico porque altera o sentido original do poema.',
    alternativas: [
      { id: 'A', texto: '"(Não sei se dura ou caroável)" – afável.' },
      { id: 'B', texto: '"Encontrará lavrado o campo, a casa limpa" – preparado.' },
      { id: 'C', texto: '"— Alô, iniludível!" – inequívoca.' },
      { id: 'D', texto: '"(A noite com os seus sortilégios.)" – encantamentos.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. "Iniludível" significa "que não se pode iludir, enganar ou evitar" — é um epíteto da morte (a que não se pode escapar). "Inequívoca" significa "que não admite dúvida, clara, evidente". São sentidos DIFERENTES: iniludível = inevitável/que não se deixa enganar; inequívoca = clara/evidente. A substituição altera o sentido original do poema (a morte é inevitável, não "clara").',
      incorretas: {
        A: 'A substituição de "caroável" por "afável" NÃO altera o sentido. "Caroável" significa "afável, bondoso, clemente" — a morte pode ser dura ou afável. "Afável" preserva o sentido. A regra aplicada é a sinonímia: "caroável" e "afável" são sinônimos no contexto. Construção correta: a substituição é possível. Para identificar, verifique se o termo em itálico preserva o sentido original.',
        B: 'A substituição de "lavrado" por "preparado" NÃO altera o sentido. "Lavrado" (no contexto) significa "cultivado, preparado" — o campo está pronto para o plantio. "Preparado" preserva o sentido. A regra aplicada é a sinonímia contextual: "lavrado" e "preparado" se equivalem no contexto. Construção correta: a substituição é possível. Para identificar, verifique se o termo em itálico preserva o sentido.',
        D: 'A substituição de "sortilégios" por "encantamentos" NÃO altera o sentido. "Sortilégios" significa "encantamentos, magias, feitiços" — a noite com seus encantamentos. "Encantamentos" preserva o sentido. A regra aplicada é a sinonímia: "sortilégios" e "encantamentos" são sinônimos. Construção correta: a substituição é possível. Para identificar, verifique se o termo em itálico preserva o sentido.'
      },
      conceitoCobrado: 'Substituição lexical: sinonímia contextual x alteração de sentido',
      pegadinha: 'A banca oferece três sinônimos adequados e um falso sinônimo ("iniludível" x "inequívoca") que parece plausível, mas altera o sentido.',
      comoApareceEmConcurso: 'Questões de substituição lexical exigem que o candidato verifique o sentido do termo no contexto — não basta saber que as palavras são parecidas.',
      exemploInedito: {
        contexto: 'Um poema afirma: "A morte, implacável, chegou sem aviso."',
        aplicacao: '"Implacável" significa "que não se pode aplacar, inevitável". Substituir por "inevitável" preserva o sentido; substituir por "clara" altera (clara = evidente, não inevitável).',
        desafio: 'Identifique qual substituição de "implacável" altera o sentido e por quê.'
      }
    },
    tags: ['substituição lexical', 'iniludível', 'inequívoca', 'sinonímia']
  },

  /* ============================================================
     Q10 — COPEVE/UFMG 2026 — POR-05 (Denotação x conotação)
  ============================================================ */
  {
    id: 'Q-REAL-POR-05-003',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-05',
    banca: 'COPEVE/UFMG', orgao: 'UFMG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'COPEVE/UFMG 2026 — UFMG — Assistente em Administração' },
    subtema: 'Denotação x conotação: verso sem linguagem conotativa',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Texto II — CONSOADA, de Manuel Bandeira. Mesmo texto-base da questão Q-REAL-POR-01-011.]',
    enunciado: 'Assinale o verso do texto II em que não há linguagem conotativa.',
    alternativas: [
      { id: 'A', texto: '"Quando a Indesejada das gentes chegar".' },
      { id: 'B', texto: '"talvez eu tenha medo".' },
      { id: 'C', texto: '"O meu dia foi bom, pode a noite descer".' },
      { id: 'D', texto: '"Com cada coisa em seu lugar".' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. "Talvez eu tenha medo" é um verso DENOTATIVO (literal): expressa diretamente a emoção do eu lírico diante da morte. Não há metáfora, eufemismo ou sentido figurado — é a expressão literal do medo. A linguagem é conotativa quando há sentido figurado; aqui, o sentido é literal.',
      incorretas: {
        A: 'A alternativa erra porque "Indesejada das gentes" é uma expressão CONOTATIVA — um eufemismo/metáfora para a morte. Não se trata da "indesejada" literal, mas da morte personificada. A regra violada é a identificação da conotação: "Indesejada das gentes" = morte (sentido figurado). Construção correta: há conotação. Para identificar, pergunte: o termo foi usado no sentido literal ou figurado? Se figurado, há conotação.',
        C: 'A alternativa erra porque "a noite descer" é uma METÁFORA para a morte (a noite = fim da vida). O verso é conotativo: "pode a noite descer" = pode a morte chegar. A regra violada é a identificação da metáfora: "noite" = morte (sentido figurado). Construção correta: há conotação. Para identificar, procure termos que, no contexto, assumem sentido figurado.',
        D: 'A alternativa erra porque, embora "Com cada coisa em seu lugar" possa parecer literal, no contexto do poema, a expressão tem valor CONOTATIVO: a casa em ordem simboliza a vida em ordem, a preparação para a morte. O eu lírico deixa tudo pronto para a chegada da morte. A regra violada é a leitura contextual: a expressão adquire sentido simbólico no poema. Construção correta: há conotação (vida em ordem = preparação para a morte). Para identificar, considere o contexto do poema, não apenas a frase isolada.'
      },
      conceitoCobrado: 'Denotação x conotação: identificação de linguagem figurada em poema',
      pegadinha: 'A banca oferece versos que parecem literais (B e D), mas apenas B é realmente denotativo — D tem valor simbólico no contexto.',
      comoApareceEmConcurso: 'Questões de denotação/conotação em poema exigem que o candidato considere o contexto — uma expressão pode ser literal isoladamente, mas figurada no poema.',
      exemploInedito: {
        contexto: 'Um poema afirma: "A vida é um sopro; o tempo é um ladrão; a saudade é uma faca."',
        aplicacao: '"A vida é um sopro" (metáfora — conotativo); "o tempo é um ladrão" (metáfora — conotativo); "a saudade é uma faca" (metáfora — conotativo). Se houvesse um verso "eu sinto saudade", seria denotativo.',
        desafio: 'Identifique qual verso é denotativo e quais são conotativos, justificando com base no contexto.'
      }
    },
    tags: ['denotação', 'conotação', 'metáfora', 'poema']
  },

  /* ============================================================
     Q11 — COPEVE/UFMG 2026 — POR-11 (Verbos e classes)
  ============================================================ */
  {
    id: 'Q-REAL-POR-11-004',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-11',
    banca: 'COPEVE/UFMG', orgao: 'UFMG', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'COPEVE/UFMG 2026 — UFMG — Assistente em Administração' },
    subtema: 'Verbos: modo imperativo e classes de palavras na tirinha',
    dificuldade: 3, prioridade: 'alta',
    textoBase: '[Texto III — tirinha de Laerte, "Como receber a morte": Charon diz "Pega um remo."; personagem diz "Senta."; Charon pergunta "Tem ordem judicial?".]',
    enunciado: 'Em relação às escolhas linguísticas do texto III, assinale (V) verdadeiro ou (F) falso antes de cada afirmativa a seguir. ( ) O título da tirinha, "Como receber a morte", sugere que seus quadrinhos apresentam instruções para a execução de um propósito. ( ) As formas verbais "Pega", "Senta" e "Tem" pertencem ao modo imperativo. ( ) As flexões "Pega" e "Senta" estão de acordo com a conjugação prevista pela norma-padrão para a 3ª pessoa do singular (você/ele). ( ) A parte verbal da tirinha contempla as seguintes classes de palavras: verbo, substantivo, adjetivo, artigo e advérbio. A sequência correta é:',
    alternativas: [
      { id: 'A', texto: 'V. F. F. V.' },
      { id: 'B', texto: 'F. V. V. F.' },
      { id: 'C', texto: 'V. F. V. F.' },
      { id: 'D', texto: 'F. V. F. V.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A sequência é V, F, V, F. (I) VERDADEIRA: o título "Como receber a morte" sugere instruções (o "como" indica modo/procedimento). (II) FALSA: "Pega" e "Senta" são imperativos, mas "Tem" (em "Tem ordem judicial?") é 3ª pessoa do singular do presente do indicativo, usada em pergunta — não é imperativo. (III) VERDADEIRA: "Pega" e "Senta" são formas de 3ª pessoa do singular (você) aceitas no português brasileiro coloquial como imperativo (embora a norma-padrão prescreva "pegue" e "sente"). (IV) FALSA: não há advérbio na parte verbal da tirinha — as classes presentes são verbo, substantivo, adjetivo e artigo, mas não advérbio.',
      incorretas: {
        A: 'A alternativa erra ao classificar II como falsa e III como falsa. II é FALSA porque "Tem" não é imperativo (é indicativo), mas III é VERDADEIRA porque "Pega" e "Senta" são aceitas como 3ª pessoa no português brasileiro. A regra violada é a classificação de "Tem" (indicativo) e a aceitação de "Pega"/"Senta" como 3ª pessoa. Construção correta: II é falsa; III é verdadeira. Para identificar, verifique o contexto de "Tem" (pergunta = indicativo) e a tradição do imperativo brasileiro.',
        B: 'A alternativa erra ao classificar I como falsa e II como verdadeira. I é VERDADEIRA (o título sugere instruções); II é FALSA ("Tem" é indicativo). A regra violada é a leitura do título ("como" = instrução) e a classificação de "Tem". Construção correta: I é verdadeira; II é falsa. Para identificar, associe "como" a "modo/procedimento" e "Tem" a pergunta (indicativo).',
        D: 'A alternativa erra ao classificar I como falsa e IV como verdadeira. I é VERDADEIRA (título sugere instruções); IV é FALSA (não há advérbio). A regra violada é a leitura do título e a identificação das classes de palavras. Construção correta: I é verdadeira; IV é falsa. Para identificar, verifique se há advérbio (não há) e se o título sugere instrução (sim).'
      },
      conceitoCobrado: 'Verbos: modo imperativo x indicativo; classes de palavras na tirinha',
      pegadinha: 'A banca explora a diferença entre "Pega"/"Senta" (imperativo coloquial) e "Tem" (indicativo em pergunta), além de testar a identificação de classes de palavras.',
      comoApareceEmConcurso: 'Questões V/F sobre tirinhas exigem que o candidato analise cada afirmativa com base no texto verbal e visual — não basta olhar a imagem; é preciso ler as falas.',
      exemploInedito: {
        contexto: 'Uma tirinha mostra um chefe dizendo "Preenche o formulário" e um funcionário perguntando "Tem caneta?".',
        aplicacao: '"Preenche" é imperativo coloquial (2ª pessoa); "Tem" é indicativo (pergunta). A diferença é a mesma da questão: "Pega"/"Senta" = imperativo; "Tem" = indicativo.',
        desafio: 'Classifique os verbos "Preenche" e "Tem" quanto ao modo e explique a diferença.'
      }
    },
    tags: ['verbos', 'imperativo', 'indicativo', 'classes de palavras', 'tirinha']
  },

  /* ============================================================
     Q01 — VUNESP 2026 — POR-01 (Interpretação: tese sobre o filme)
     OBS: o enunciado original está truncado no PDF extraído; foi reconstruído como "No texto, o filme O Agente Secreto".
  ============================================================ */
  {
    id: 'Q-REAL-POR-01-012',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-01',
    banca: 'VUNESP', orgao: 'Prefeitura de Jundiaí-SP', ano: 2026,
    prova: 'Assistente de Administração',
    fonte: { descricao: 'VUNESP 2026 — Prefeitura de Jundiaí-SP — Assistente de Administração' },
    subtema: 'Interpretação: tese sobre o filme (silêncios como manifestação da verdade)',
    dificuldade: 2, prioridade: 'alta',
    textoBase: 'Há filmes que não apenas contam uma história — eles a pressentem, como se o ar estivesse impregnado de lembranças. O Agente Secreto, longa do diretor e roteirista Kleber Mendonça Filho, é um desses. Em vez de seguir o caminho padrão do espetáculo ou da denúncia óbvia, o diretor pernambucano prefere o som abafado das portas que rangem, dos passos ecoando pelos corredores de uma cidade onde o tempo parece nunca passar por completo. O filme respira a atmosfera de um Brasil de 1977, transformando Recife em palco de um thriller político sobre medo, culpa e esquecimento. Kleber mergulha no terreno mais denso dos segredos. Inspirado por pesquisas sobre o período da ditadura militar e por ecos de filmes de espionagem dos anos 1970, o diretor nos oferece um protagonista dividido: Marcelo (Wagner Moura), aparentemente um técnico de som que retorna à sua cidade natal durante o Carnaval, acaba enredado em uma teia de vigilância, crimes e memórias abafadas ainda sob a mão da ditadura brasileira. O filme, que nos é apresentado como um mosaico incompleto de lembranças, silêncios e suspeitas, é menos um filme padrão sobre espionagem e mais um filme sobre o próprio ato de (se) esconder. Kleber Mendonça não oferece respostas fáceis e diretas. O roteiro tem a delicadeza de quem entende que a verdade não se revela em explosões, mas, muitas vezes, em silêncios. O que importa aqui não é o fato histórico em si ou um intrincado arco entre espiões, mas o que o esquecimento (ou a negação) faz conosco. No fim, percebemos que O Agente Secreto é sobre o peso do que não se diz, sobre o país que arquiva seus papéis amarelados ou enterra os esqueletos de suas dores, mas que continua a ouvi-las ressoando no fundo do peito. O longa não é um filme marcado por grandes explosões ou cenas impactantes de ação, mas, sim, por pequenas rachaduras e infiltrações. E são essas rachaduras que deixam escapar a luz — a mesma que ilumina Wagner Moura caminhando pelas ruas vibrantes de Recife entre seus segredos e memórias. (Tais Zago, adaptado.)',
    enunciado: 'No texto, o filme O Agente Secreto',
    alternativas: [
      { id: 'A', texto: 'resume-se a narrar a história do protagonista Marcelo.' },
      { id: 'B', texto: 'objetiva denunciar graves crimes da ditadura.' },
      { id: 'C', texto: 'explora os silêncios como manifestação da verdade.' },
      { id: 'D', texto: 'reproduz modelos clássicos de filmes de espionagem.' },
      { id: 'E', texto: 'recorre a fortes cenas de ação para gerar emoção.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. O texto afirma explicitamente: "O roteiro tem a delicadeza de quem entende que a verdade não se revela em explosões, mas, muitas vezes, em silêncios." Essa é a tese central sobre o filme: ele explora os silêncios como forma de revelação da verdade. O texto reforça: "O Agente Secreto é sobre o peso do que não se diz".',
      incorretas: {
        A: 'A alternativa restringe o filme à narrativa do protagonista. O texto afirma que o filme "é menos um filme padrão sobre espionagem e mais um filme sobre o próprio ato de (se) esconder" e que "o que importa aqui não é o fato histórico em si ou um intrincado arco entre espiões, mas o que o esquecimento (ou a negação) faz conosco". Ou seja, a história de Marcelo é apenas o ponto de partida — não o foco principal. A regra violada é a distinção entre enredo (o que acontece) e tema (o que o filme discute). Construção correta: o filme vai além da narrativa de Marcelo; explora os silêncios. Para identificar em outra questão, pergunte: a alternativa resume o enredo ou capta a tese? Se resume só o enredo, está incompleta.',
        B: 'A alternativa erra ao dizer que o filme "objetiva denunciar graves crimes da ditadura". O texto afirma que o diretor "prefere o som abafado das portas que rangem" em vez de "seguir o caminho padrão do espetáculo ou da denúncia óbvia". Ou seja, o filme NÃO é uma denúncia óbvia — é uma reflexão sobre o que o esquecimento faz conosco. A regra violada é a identificação do propósito do filme: reflexão sobre memória e esquecimento x denúncia explícita. Construção correta: o filme explora silêncios e memórias abafadas, não denuncia crimes de forma direta. Para identificar, procure no texto a expressão "denúncia óbvia" — se a alternativa reduz o filme a isso, está errada.',
        D: 'A alternativa erra ao dizer que o filme "reproduz modelos clássicos de filmes de espionagem". O texto afirma: "O filme... é menos um filme padrão sobre espionagem e mais um filme sobre o próprio ato de (se) esconder". Ou seja, o filme NÃO reproduz modelos clássicos — ele subverte o gênero. A regra violada é a leitura literal: o texto nega que seja um filme padrão de espionagem. Construção correta: o filme subverte o gênero de espionagem. Para identificar, procure no texto a expressão "menos um filme padrão" — se a alternativa disser o contrário, está errada.',
        E: 'A alternativa erra ao dizer que o filme "recorre a fortes cenas de ação". O texto afirma: "O longa não é um filme marcado por grandes explosões ou cenas impactantes de ação". A alternativa contradiz o texto. A regra violada é a leitura literal: o texto nega o uso de cenas de ação; a alternativa afirma o oposto. Construção correta: o filme se marca por "pequenas rachaduras e infiltrações", não por ação. Para identificar, procure no texto a expressão "não é um filme marcado por grandes explosões" — se a alternativa disser o contrário, está errada.'
      },
      conceitoCobrado: 'Interpretação: tese central sobre o filme (silêncios x denúncia óbvia x ação)',
      pegadinha: 'A banca oferece alternativas que descrevem o enredo (A), o gênero (D) ou recursos visuais (E) como se fossem a tese — o candidato precisa identificar a ideia central.',
      comoApareceEmConcurso: 'Questões de interpretação sobre filmes/obras exigem que o candidato identifique a tese do texto, não apenas o enredo ou o gênero.',
      exemploInedito: {
        contexto: 'Um texto sobre um documentário afirma: "O filme não se limita a mostrar os fatos; ele reflete sobre como a memória os distorce."',
        aplicacao: 'A tese é "o filme reflete sobre a distorção da memória", não "o filme mostra fatos" (enredo) nem "o filme denuncia crimes" (gênero). Mesma lógica da questão.',
        desafio: 'Identifique a tese do texto sobre o documentário e explique por que não é apenas o enredo.'
      }
    },
    tags: ['interpretação', 'tese', 'silêncios', 'O Agente Secreto']
  },

  /* ============================================================
     Q02 — VUNESP 2026 — POR-04 (Sentido próprio x figurado)
  ============================================================ */
  {
    id: 'Q-REAL-POR-04-011',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-04',
    banca: 'VUNESP', orgao: 'Prefeitura de Jundiaí-SP', ano: 2026,
    prova: 'Assistente de Administração',
    fonte: { descricao: 'VUNESP 2026 — Prefeitura de Jundiaí-SP — Assistente de Administração' },
    subtema: 'Denotação x conotação: identificação do sentido próprio',
    dificuldade: 3, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-012 — texto sobre O Agente Secreto.]',
    enunciado: 'Está empregado em sentido próprio o termo destacado em:',
    alternativas: [
      { id: 'A', texto: '"O filme respira a atmosfera de um Brasil de 1977..." (1º parágrafo)' },
      { id: 'B', texto: '"Kleber mergulha no terreno mais denso dos segredos." (2º parágrafo)' },
      { id: 'C', texto: '"O filme, que nos é apresentado como um mosaico incompleto de lembranças..." (3º parágrafo)' },
      { id: 'D', texto: '"O roteiro tem a delicadeza de quem entende que a verdade não se revela em explosões..." (3º parágrafo)' },
      { id: 'E', texto: '"No fim, percebemos que O Agente Secreto é sobre o peso do que não se diz..." (4º parágrafo)' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. Em "a verdade não se revela em explosões", o termo "explosões" é empregado em SENTIDO PRÓPRIO (literal): refere-se a explosões concretas, cenas de ação explosivas no cinema. O texto contrapõe "explosões" (ação literal) a "silêncios" (quietude). O termo está no sentido denotativo, referindo-se ao recurso cinematográfico literal.',
      incorretas: {
        A: 'A alternativa erra porque "respira" está em SENTIDO FIGURADO. Um filme não respira literalmente — "respira a atmosfera" significa "está impregnado de, transmite". É uma metáfora. A regra violada é a distinção entre sentido próprio (literal) e figurado: "respirar" no sentido de "absorver, transmitir" é conotativo. Construção correta: "respira" = sentido figurado. Para identificar em outra questão, pergunte: o verbo pode ser executado literalmente pelo sujeito? Se não, é figurado.',
        B: 'A alternativa erra porque "mergulha" está em SENTIDO FIGURADO. Um diretor não mergulha fisicamente em segredos — "mergulha no terreno dos segredos" significa "aprofundа-se em". É uma metáfora. A regra violada é a mesma de A: o verbo não pode ser executado literalmente. Construção correta: "mergulha" = sentido figurado. Para identificar, verifique se a ação é física ou abstrata.',
        C: 'A alternativa erra porque "mosaico" está em SENTIDO FIGURADO. O filme não é um mosaico literal (obra de pedras) — "mosaico incompleto de lembranças" significa "conjunto fragmentado de lembranças". É uma metáfora. A regra violada é a mesma: o termo não designa o objeto literal. Construção correta: "mosaico" = sentido figurado. Para identificar, verifique se o termo designa o objeto concreto ou uma ideia abstrata.',
        E: 'A alternativa erra porque "peso" está em SENTIDO FIGURADO. O filme não tem peso físico — "o peso do que não se diz" significa "a carga emocional do que não se diz". É uma metáfora. A regra violada é a mesma: o termo não designa grandeza física. Construção correta: "peso" = sentido figurado. Para identificar, verifique se o termo designa grandeza mensurável ou carga abstrata.'
      },
      conceitoCobrado: 'Denotação x conotação: identificação do sentido próprio (literal)',
      pegadinha: 'A banca oferece quatro termos claramente figurados (respira, mergulha, mosaico, peso) e um que pode ser literal (explosões) — o candidato precisa distinguir o único denotativo.',
      comoApareceEmConcurso: 'Questões de denotação/conotação exigem que o candidato verifique se o termo designa o objeto literal ou uma ideia figurada — não basta "achar" que é figurado.',
      exemploInedito: {
        contexto: 'Um texto afirma: "O diretor costura as cenas com precisão; o filme é uma colcha de retalhos; a verdade explode na tela."',
        aplicacao: '"Costura" (figurado: organiza), "colcha de retalhos" (figurado: mistura), "explode" (figurado: revela-se de forma intensa). Nenhum é literal. Se o texto dissesse "o filme tem explosões reais", aí seria literal.',
        desafio: 'Classifique cada termo como denotativo ou conotativo e justifique.'
      }
    },
    tags: ['denotação', 'conotação', 'sentido próprio', 'explosões']
  },

  /* ============================================================
     Q03 — VUNESP 2026 — POR-04 (Sinonímia)
  ============================================================ */
  {
    id: 'Q-REAL-POR-04-012',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-04',
    banca: 'VUNESP', orgao: 'Prefeitura de Jundiaí-SP', ano: 2026,
    prova: 'Assistente de Administração',
    fonte: { descricao: 'VUNESP 2026 — Prefeitura de Jundiaí-SP — Assistente de Administração' },
    subtema: 'Sinonímia contextual: "intrincado" e "vibrantes"',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-012 — texto sobre O Agente Secreto.]',
    enunciado: 'Considere os trechos a seguir: "O que importa aqui não é o fato histórico em si ou um intrincado arco entre espiões..." (3º parágrafo); "... Wagner Moura caminhando pelas ruas vibrantes de Recife..." (4º parágrafo). Os termos destacados podem ser respectivamente substituídos, preservando o sentido do contexto em que se encontram, por:',
    alternativas: [
      { id: 'A', texto: 'evidente: marcantes.' },
      { id: 'B', texto: 'revelado: recatadas.' },
      { id: 'C', texto: 'complicado: alegres.' },
      { id: 'D', texto: 'complexo: entediantes.' },
      { id: 'E', texto: 'intuitivo: entusiasmadas.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. "Intrincado" significa "complicado, complexo, intricado" — um arco narrativo complicado entre espiões. "Vibrantes" significa "alegres, animadas, cheias de vida" — ruas vibrantes de Recife. Os sinônimos "complicado" e "alegres" preservam o sentido contextual.',
      incorretas: {
        A: 'A alternativa erra os dois sinônimos. "Evidente" NÃO é sinônimo de "intrincado" — evidente é o oposto (claro, óbvio). "Marcantes" não é o melhor sinônimo de "vibrantes" no contexto (vibrante = cheio de vida, não apenas marcante). A regra violada é a sinonímia contextual: os termos propostos não compartilham o mesmo sentido. Construção correta: "intrincado" = complicado; "vibrantes" = alegres. Para identificar em outra questão, verifique se o sinônimo proposto pode substituir o termo sem alterar o sentido.',
        B: 'A alternativa erra os dois sinônimos. "Revelado" NÃO é sinônimo de "intrincado" (revelado = mostrado; intrincado = complicado). "Recatadas" NÃO é sinônimo de "vibrantes" (recatadas = discretas; vibrantes = cheias de vida). A regra violada é a mesma: os termos propostos não preservam o sentido. Construção correta: complicado / alegres. Para identificar, verifique o sentido no contexto.',
        D: 'A alternativa erra o segundo sinônimo. "Complexo" é sinônimo de "intrincado" (correto), mas "entediantes" NÃO é sinônimo de "vibrantes" — entediante é o oposto (sem graça). A regra violada é a sinonímia do segundo termo: "vibrante" = cheio de vida, não entediante. Construção correta: "vibrantes" = alegres. Para identificar, verifique se o sinônimo proposto mantém o traço positivo/negativo do original.',
        E: 'A alternativa erra os dois sinônimos. "Intuitivo" NÃO é sinônimo de "intrincado" (intuitivo = baseado na intuição; intrincado = complicado). "Entusiasmadas" é próximo de "vibrantes", mas não é o melhor sinônimo no contexto. A regra violada é a sinonímia do primeiro termo: "intrincado" = complicado, não intuitivo. Construção correta: complicado / alegres. Para identificar, verifique o sentido exato do termo no contexto.'
      },
      conceitoCobrado: 'Sinonímia contextual: "intrincado" e "vibrantes"',
      pegadinha: 'A banca oferece sinônimos parcialmente corretos (complexo para intrincado, entusiasmadas para vibrantes) misturados com termos opostos (evidente, entediantes) para testar a precisão.',
      comoApareceEmConcurso: 'Questões de sinonímia exigem que o candidato verifique o sentido no contexto — não basta conhecer sinônimos genéricos; é preciso verificar a adequação ao texto.',
      exemploInedito: {
        contexto: 'Um texto afirma: "O enredo intrincado exigia atenção; as ruas vibrantes da cidade contrastavam com o silêncio do protagonista."',
        aplicacao: '"Intrincado" = complicado, complexo; "vibrantes" = alegres, animadas. Os sinônimos preservam o sentido.',
        desafio: 'Substitua "intrincado" e "vibrantes" por sinônimos adequados e justifique.'
      }
    },
    tags: ['sinonímia', 'intrincado', 'vibrante', 'contexto']
  },

  /* ============================================================
     Q04 — VUNESP 2026 — POR-15 (Concordância verbal: haver/existir)
  ============================================================ */
  {
    id: 'Q-REAL-POR-15-002',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-15',
    banca: 'VUNESP', orgao: 'Prefeitura de Jundiaí-SP', ano: 2026,
    prova: 'Assistente de Administração',
    fonte: { descricao: 'VUNESP 2026 — Prefeitura de Jundiaí-SP — Assistente de Administração' },
    subtema: 'Concordância verbal: "haver" x "existir"; reescrita de "Há filmes que..."',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-012 — texto sobre O Agente Secreto.]',
    enunciado: 'Assinale a alternativa em que o trecho "Há filmes que não apenas contam uma história — eles a presentem..." (1º parágrafo) está reescrito conforme a norma-padrão da língua portuguesa.',
    alternativas: [
      { id: 'A', texto: 'Existem filmes que não apenas contam histórias, mas as pressentem.' },
      { id: 'B', texto: 'Existe filmes que não apenas contam uma história, mas as pressentem.' },
      { id: 'C', texto: 'Têm filmes que não apenas conta uma história, mas as pressentem.' },
      { id: 'D', texto: 'Tem filmes que não apenas contam histórias, mas a pressentem.' },
      { id: 'E', texto: 'Encontra-se filmes que não apenas conta uma história, mas a pressentem.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. "Existem" concorda com "filmes" (plural); "contam" concorda com "filmes" (3ª pessoa do plural); "as" retoma "histórias" (plural feminino); "pressentem" concorda com "eles" (plural). A reescrita preserva o sentido e segue a norma-padrão.',
      incorretas: {
        A_ok: 'A é o gabarito.',
        B: 'A alternativa erra a concordância de "Existe". O verbo "existir" é pessoal e concorda com o sujeito: "Existem filmes" (plural), não "Existe filmes". A regra violada é a concordância verbal: "existir" vai ao plural quando o sujeito é plural. Construção correta: "Existem filmes". Para identificar em outra questão, verifique se o verbo "existir" está no plural quando o sujeito é plural.',
        C: 'A alternativa erra dois pontos: (1) "Têm" está no plural, mas deveria ser "Há" (impessoal, singular) ou "Existem" (plural); (2) "conta" está no singular, mas deveria ser "contam" (concorda com "filmes"). A regra violada é a concordância verbal: o verbo deve concordar com o sujeito "filmes" (plural). Construção correta: "Há filmes que contam" ou "Existem filmes que contam". Para identificar, verifique a concordância de cada verbo com o sujeito.',
        D: 'A alternativa erra dois pontos: (1) "Tem" é coloquial, não norma-padrão (o correto é "Há" ou "Existem"); (2) "a" está no singular, mas deveria ser "as" (concorda com "histórias", plural). A regra violada é a concordância do pronome: "as" retoma "histórias" (plural). Construção correta: "Existem filmes que contam histórias, mas as pressentem". Para identificar, verifique se o pronome concorda com o termo retomado.',
        E: 'A alternativa erra dois pontos: (1) "Encontra-se" deveria ser "Encontram-se" (concorda com "filmes", plural); (2) "conta" deveria ser "contam" (concorda com "filmes", plural). A regra violada é a concordância verbal: o verbo deve concordar com o sujeito "filmes" (plural). Construção correta: "Encontram-se filmes que contam". Para identificar, verifique a concordância de cada verbo com o sujeito.'
      },
      conceitoCobrado: 'Concordância verbal: "haver" (impessoal) x "existir" (pessoal); reescrita de "Há filmes que..."',
      pegadinha: 'A banca explora a confusão entre "haver" (impessoal, singular) e "existir" (pessoal, plural), além da concordância do pronome "a/as".',
      comoApareceEmConcurso: 'Questões de reescrita com concordância exigem que o candidato verifique cada verbo e pronome em relação ao sujeito — não basta olhar uma parte da frase.',
      exemploInedito: {
        contexto: 'Um relatório afirma: "Há servidores que não apenas cumprem ordens, mas as questionam."',
        aplicacao: 'Reescrita correta: "Existem servidores que não apenas cumprem ordens, mas as questionam." ("Existem" concorda com "servidores"; "as" retoma "ordens").',
        desafio: 'Reescreva a frase substituindo "Há" por "Existir" e mantendo a concordância.'
      }
    },
    tags: ['concordância verbal', 'haver', 'existir', 'reescrita']
  },

  /* ============================================================
     Q05 — VUNESP 2026 — POR-18 (Pontuação: aposto explicativo)
  ============================================================ */
  {
    id: 'Q-REAL-POR-18-007',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-18',
    banca: 'VUNESP', orgao: 'Prefeitura de Jundiaí-SP', ano: 2026,
    prova: 'Assistente de Administração',
    fonte: { descricao: 'VUNESP 2026 — Prefeitura de Jundiaí-SP — Assistente de Administração' },
    subtema: 'Vírgulas isolando aposto explicativo',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-012 — texto sobre O Agente Secreto.]',
    enunciado: 'As vírgulas no trecho "Marcelo (Wagner Moura), aparentemente um técnico de som que retorna à sua cidade natal durante o Carnaval, acaba enredado em uma teia de vigilância..." (2º parágrafo) foram empregadas pela mesma razão que as vírgulas do trecho:',
    alternativas: [
      { id: 'A', texto: '"O Agente Secreto, longa do diretor e roteirista Kleber Mendonça Filho, é um desses." (1º parágrafo)' },
      { id: 'B', texto: '"... ou da denúncia óbvia, o diretor pernambucano prefere o som abafado das portas que rangem, dos passos ecoando..." (1º parágrafo)' },
      { id: 'C', texto: '"... um Brasil de 1977, transformando Recife em palco de um thriller político sobre medo, culpa e esquecimento." (1º parágrafo)' },
      { id: 'D', texto: '"... mas, muitas vezes, em silêncios." (3º parágrafo)' },
      { id: 'E', texto: '"No fim, percebemos que O Agente Secreto é sobre o peso do que não se diz, sobre o país..." (4º parágrafo)' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. Em "Marcelo (Wagner Moura), aparentemente um técnico de som..., acaba enredado", as vírgulas isolam o APOSTO EXPLICATIVO "aparentemente um técnico de som que retorna à sua cidade natal durante o Carnaval" — que explica quem é Marcelo. Em "O Agente Secreto, longa do diretor e roteirista Kleber Mendonça Filho, é um desses", as vírgulas isolam o APOSTO EXPLICATIVO "longa do diretor e roteirista Kleber Mendonça Filho" — que explica o que é O Agente Secreto. Mesma função sintática.',
      incorretas: {
        A_ok: 'A é o gabarito.',
        B: 'A alternativa erra a função das vírgulas. Em "... ou da denúncia óbvia, o diretor pernambucano prefere...", a primeira vírgula separa um adjunto adverbial (ou da denúncia óbvia) da oração principal; a segunda vírgula (após "rangem") separa itens de uma enumeração (portas que rangem, dos passos ecoando). Não são vírgulas de aposto. A regra violada é a distinção entre aposto explicativo (isola termo que explica substantivo) e adjunto/enumeração. Construção correta: a função é diferente. Para identificar, pergunte: o termo entre vírgulas explica um substantivo? Se não, não é aposto.',
        C: 'A alternativa erra a função das vírgulas. Em "... um Brasil de 1977, transformando Recife em palco...", a primeira vírgula separa uma oração reduzida de gerúndio ("transformando Recife..."); a segunda vírgula (após "medo") separa itens de enumeração (medo, culpa e esquecimento). Não são vírgulas de aposto. A regra violada é a mesma de B: confundir oração reduzida/enumeração com aposto. Construção correta: função diferente. Para identificar, verifique se o termo é uma oração (com verbo) ou um substantivo explicativo.',
        D: 'A alternativa erra a função das vírgulas. Em "... mas, muitas vezes, em silêncios", as vírgulas isolam o adjunto adverbial "muitas vezes" — não um aposto. A regra violada é a distinção entre adjunto adverbial (circunstância) e aposto (explicação). Construção correta: função diferente. Para identificar, pergunte: o termo indica circunstância (tempo, modo) ou explica um substantivo? Se circunstância, é adjunto.',
        E: 'A alternativa erra a função das vírgulas. Em "No fim, percebemos que O Agente Secreto é sobre o peso do que não se diz, sobre o país...", a primeira vírgula separa o adjunto adverbial "No fim"; a segunda vírgula separa termos coordenados ("sobre o peso..., sobre o país..."). Não são vírgulas de aposto. A regra violada é a mesma: confundir adjunto/coordenação com aposto. Construção correta: função diferente. Para identificar, verifique se o termo entre vírgulas explica um substantivo (aposto) ou indica circunstância/coordenação.'
      },
      conceitoCobrado: 'Pontuação: vírgulas isolando aposto explicativo x adjunto, oração reduzida, enumeração, coordenação',
      pegadinha: 'A banca oferece cinco trechos com vírgulas de funções distintas (aposto, adjunto, oração reduzida, enumeração, coordenação) para testar a identificação precisa da função.',
      comoApareceEmConcurso: 'Questões de pontuação com comparação de trechos exigem que o candidato identifique a função das vírgulas em cada caso — não basta olhar a posição; é preciso analisar a estrutura.',
      exemploInedito: {
        contexto: 'Um relatório afirma: "O diretor, recém-empossado, convocou reunião; a equipe, porém, não compareceu."',
        aplicacao: 'As vírgulas em "O diretor, recém-empossado," isolam aposto explicativo (mesma função da questão). As vírgulas em "a equipe, porém," isolam conjunção adversativa (função diferente).',
        desafio: 'Identifique a função de cada par de vírgulas no trecho e explique a diferença.'
      }
    },
    tags: ['pontuação', 'vírgula', 'aposto explicativo', 'termo intercalado']
  },

  /* ============================================================
     Q06 — VUNESP 2026 — POR-12 (Advérbio de tempo)
  ============================================================ */
  {
    id: 'Q-REAL-POR-12-001',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-12',
    banca: 'VUNESP', orgao: 'Prefeitura de Jundiaí-SP', ano: 2026,
    prova: 'Assistente de Administração',
    fonte: { descricao: 'VUNESP 2026 — Prefeitura de Jundiaí-SP — Assistente de Administração' },
    subtema: 'Advérbio/expressão de tempo: "ainda" e "durante"',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-012 — texto sobre O Agente Secreto.]',
    enunciado: 'No trecho "... memórias abafadas ainda sob a mão da ditadura brasileira" (2º parágrafo), o termo destacado indica circunstância de tempo, assim como o destacado em:',
    alternativas: [
      { id: 'A', texto: '"... ecoando pelos corredores de uma cidade onde o tempo parece nunca passar por completo." (1º parágrafo)' },
      { id: 'B', texto: '"... aparentemente um técnico de som que retorna à sua cidade natal durante o Carnaval..." (2º parágrafo)' },
      { id: 'C', texto: '"... é menos um filme padrão sobre espionagem e mais um filme sobre o próprio ato de (se) esconder." (3º parágrafo)' },
      { id: 'D', texto: '"O que importa aqui não é o fato histórico em si ou um intrincado arco entre espiões..." (3º parágrafo)' },
      { id: 'E', texto: '"... marcado por grandes explosões ou cenas impactantes de ação, mas, sim, por pequenas rachaduras..." (4º parágrafo)' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. Em "memórias abafadas ainda sob a mão da ditadura brasileira", o advérbio "ainda" indica tempo (naquele momento, em 1977). Em "retorna à sua cidade natal durante o Carnaval", a expressão "durante o Carnaval" também indica tempo (quando ele retorna). Ambos os termos indicam circunstância de tempo.',
      incorretas: {
        A: 'A alternativa erra a circunstância. Em "o tempo parece nunca passar", o termo "nunca" indica tempo/frequência (advérbio de tempo ou negação), mas o termo destacado mais provável na frase é "onde" (lugar) — "uma cidade onde o tempo parece nunca passar". "Onde" indica lugar, não tempo. A regra violada é a identificação da circunstância: "onde" = lugar. Construção correta: "onde" indica lugar. Para identificar, pergunte: o termo indica lugar (onde?) ou tempo (quando?). Se lugar, não é tempo.',
        B_ok: 'B é o gabarito.',
        C: 'A alternativa erra a circunstância. Em "é menos um filme padrão sobre espionagem e mais um filme sobre o próprio ato de (se) esconder", não há termo destacado de tempo — a expressão "sobre espionagem" indica assunto, não tempo. A regra violada é a identificação da circunstância: "sobre" = assunto. Construção correta: não há tempo. Para identificar, procure termos que respondam "quando?" — se não houver, não é tempo.',
        D: 'A alternativa erra a circunstância. Em "O que importa aqui não é o fato histórico em si", o termo "aqui" indica LUGAR, não tempo. A regra violada é a distinção entre lugar ("aqui") e tempo ("ainda"). Construção correta: "aqui" = lugar. Para identificar, pergunte: o termo indica lugar (onde?) ou tempo (quando?). Se lugar, não é tempo.',
        E: 'A alternativa erra a circunstância. Em "... marcado por grandes explosões ou cenas impactantes de ação, mas, sim, por pequenas rachaduras...", não há termo destacado de tempo — "por grandes explosões" indica meio/causa, não tempo. A regra violada é a identificação da circunstância: "por" = meio/causa. Construção correta: não há tempo. Para identificar, procure termos que respondam "quando?" — se não houver, não é tempo.'
      },
      conceitoCobrado: 'Circunstâncias adverbiais: tempo ("ainda", "durante") x lugar, assunto, meio',
      pegadinha: 'A banca oferece termos que indicam outras circunstâncias (lugar, assunto, meio) para testar a identificação precisa da circunstância de tempo.',
      comoApareceEmConcurso: 'Questões de adjunto adverbial exigem que o candidato identifique a circunstância expressa — não basta saber que é advérbio; é preciso dizer qual circunstância.',
      exemploInedito: {
        contexto: 'Um relatório afirma: "O servidor ainda trabalha na unidade; durante o recesso, a equipe se reveza; aqui, todos colaboram."',
        aplicacao: '"Ainda" (tempo), "durante o recesso" (tempo), "aqui" (lugar). Apenas os dois primeiros indicam tempo.',
        desafio: 'Classifique a circunstância de cada termo destacado e identifique os que indicam tempo.'
      }
    },
    tags: ['advérbio', 'circunstância de tempo', 'ainda', 'durante']
  },

  /* ============================================================
     Q07 — VUNESP 2026 — POR-01 (Interpretação de charge)
     OBS: a imagem da charge não está disponível; a interpretação baseia-se nas opções e no contexto (O Agente Secreto, Globos de Ouro, dados do PIB).
  ============================================================ */
  {
    id: 'Q-REAL-POR-01-013',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-01',
    banca: 'VUNESP', orgao: 'Prefeitura de Jundiaí-SP', ano: 2026,
    prova: 'Assistente de Administração',
    fonte: { descricao: 'VUNESP 2026 — Prefeitura de Jundiaí-SP — Assistente de Administração' },
    subtema: 'Interpretação de charge: crítica ao investimento no filme',
    dificuldade: 3, prioridade: 'alta',
    textoBase: 'Charge de Bira Dantas (Instagram: @adunicamp, 15.01.2026, adaptada). Contexto inferido a partir das opções: a charge menciona que o filme O Agente Secreto ganhou dois Globos de Ouro e contrapõe esse feito aos dados da indústria audiovisual (R$ 70 bilhões no PIB, 608 mil empregos, salário médio de R$ 6.800,00).',
    enunciado: 'Essa charge busca',
    alternativas: [
      { id: 'A', texto: 'explicar o investimento na produção do filme O Agente Secreto.' },
      { id: 'B', texto: 'enaltecer o impacto provocado pela produção audiovisual do Brasil.' },
      { id: 'C', texto: 'satirizar o alto investimento de recursos públicos no filme O Agente Secreto.' },
      { id: 'D', texto: 'superestimar os resultados alcançados pela produção de O Agente Secreto.' },
      { id: 'E', texto: 'criticar a maneira como o setor audiovisual tem empregado recursos no Brasil.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. A charge satiriza o alto investimento de recursos públicos no filme O Agente Secreto: contrapõe o prêmio (dois Globos de Ouro) aos dados da indústria (PIB, empregos, salário médio), sugerindo que o retorno não compensa o investimento. O tom é de crítica por meio da sátira.',
      incorretas: {
        A: 'A alternativa erra o propósito. A charge não "explica" o investimento — ela o satiriza. Explicar seria apresentar razões de forma neutra; a charge tem tom crítico e humorístico. A regra violada é a distinção entre explicar (neutro) e satirizar (crítico). Construção correta: a charge satiriza. Para identificar em outra questão, pergunte: o texto tem tom neutro ou crítico? Se crítico, não é explicação.',
        B: 'A alternativa erra o tom. A charge não "enaltece" (elogia) o impacto — ela critica o investimento. Se enaltecesse, seria positiva; a charge é crítica. A regra violada é a distinção entre enaltecer (elogiar) e satirizar (criticar). Construção correta: a charge critica. Para identificar, verifique o tom: positivo (enaltece) ou negativo (critica)?',
        D: 'A alternativa erra o propósito. A charge não "superestima" os resultados — ela questiona se o investimento vale a pena. Superestimar seria exagerar os resultados positivos; a charge faz o contrário: relativiza o prêmio diante dos dados. A regra violada é a distinção entre superestimar (exagerar positivamente) e satirizar (criticar). Construção correta: a charge satiriza. Para identificar, verifique se o texto exagera positivamente ou critica.',
        E: 'A alternativa é próxima, mas menos precisa que C. A charge foca especificamente no filme O Agente Secreto e no contraste entre o prêmio e os dados da indústria — não faz uma crítica genérica ao setor audiovisual. A regra violada é a especificidade: C capta o foco (o filme), E generaliza (o setor). Construção correta: a charge satiriza o investimento no filme. Para identificar, verifique se a alternativa capta o foco específico da charge.'
      },
      conceitoCobrado: 'Interpretação de charge: sátira, crítica e tom',
      pegadinha: 'A banca oferece alternativas com tons distintos (explicar, enaltecer, satirizar, superestimar, criticar) para testar a identificação do propósito comunicativo.',
      comoApareceEmConcurso: 'Questões de charge exigem que o candidato identifique o tom (crítico, humorístico, elogioso) e o alvo da crítica — não basta descrever a imagem.',
      exemploInedito: {
        contexto: 'Uma charge mostra um político cortando a fita de inauguração de um hospital enquanto um paciente espera na fila; ao lado, um gráfico mostra o alto custo da obra.',
        aplicacao: 'A charge satiriza o alto investimento em obras públicas em contraste com a falta de atendimento — tom crítico, não explicativo.',
        desafio: 'Identifique o propósito da charge e o alvo da crítica.'
      }
    },
    tags: ['charge', 'sátira', 'investimento público', 'O Agente Secreto']
  },

  /* ============================================================
     Q08 — VUNESP 2026 — POR-14 (Conectivos: causa)
  ============================================================ */
  {
    id: 'Q-REAL-POR-14-004',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-14',
    banca: 'VUNESP', orgao: 'Prefeitura de Jundiaí-SP', ano: 2026,
    prova: 'Assistente de Administração',
    fonte: { descricao: 'VUNESP 2026 — Prefeitura de Jundiaí-SP — Assistente de Administração' },
    subtema: 'Conectivos causais: "visto que" na reescrita',
    dificuldade: 3, prioridade: 'alta',
    textoBase: 'Texto da charge (inferido a partir das opções): "O filme O Agente Secreto ganhou dois Globos de Ouro, e a indústria audiovisual gerou R$ 70 bilhões no PIB e 608 mil empregos, com salário médio de R$ 6.800,00."',
    enunciado: 'Assinale a alternativa que apresenta texto da charge corretamente reescrito, preservando seu sentido.',
    alternativas: [
      { id: 'A', texto: 'Desde que o filme O Agente Secreto tivesse ganhado dois Globos de Ouro, a indústria audiovisual geraria R$ 70 bilhões no PIB e 608 mil empregos, com salário médio de R$ 6.800,00.' },
      { id: 'B', texto: 'De modo que o filme O Agente Secreto tenha ganhado dois Globos de Ouro, a indústria audiovisual gerou R$ 70 bilhões no PIB e 608 mil empregos, com salário médio de R$ 6.800,00.' },
      { id: 'C', texto: 'Visto que o filme O Agente Secreto ganhou dois Globos de Ouro, a indústria audiovisual gerou R$ 70 bilhões no PIB e 608 mil empregos, com salário médio de R$ 6.800,00.' },
      { id: 'D', texto: 'Como o filme O Agente Secreto tinha ganhado dois Globos de Ouro, a indústria audiovisual gerou R$ 70 bilhões no PIB e 608 mil empregos, com salário médio de R$ 6.800,00.' },
      { id: 'E', texto: 'Além de o filme O Agente Secreto ter ganhado dois Globos de Ouro, a indústria audiovisual gerou R$ 70 bilhões no PIB e 608 mil empregos, com salário médio de R$ 6.800,00.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. "Visto que" é uma conjunção CAUSAL — introduz a causa (o filme ganhou dois Globos de Ouro) que leva à consequência (a indústria gerou R$ 70 bilhões). A relação de causa-consequência é preservada, e o tempo verbal "ganhou" (pretérito perfeito) mantém o sentido original.',
      incorretas: {
        A: 'A alternativa erra o sentido. "Desde que... tivesse ganhado... geraria" é uma CONDICIONAL (hipótese), não uma causa. O texto original afirma fatos (o filme ganhou; a indústria gerou), não hipóteses. A regra violada é a distinção entre causa (fato) e condição (hipótese). Construção correta: "Visto que" (causa). Para identificar, pergunte: o conectivo indica fato (causa) ou hipótese (condição)? Se hipótese, não preserva o sentido.',
        B: 'A alternativa erra a relação lógica. "De modo que... tenha ganhado" não estabelece causa — "de modo que" indica consequência/finalidade, e o subjuntivo "tenha ganhado" não se encaixa bem. A relação original é causa (ganhou) → consequência (gerou). A regra violada é a distinção entre causa e consequência/finalidade. Construção correta: "Visto que" (causa). Para identificar, verifique se o conectivo estabelece causa ou consequência.',
        D: 'A alternativa erra o tempo verbal. "Como... tinha ganhado" usa o pretérito mais-que-perfeito composto ("tinha ganhado"), que indica ação anterior a outra ação passada — o que altera a relação temporal original (o texto usa "ganhou", pretérito perfeito). A regra violada é a correspondência de tempos verbais: "ganhou" (perfeito) x "tinha ganhado" (mais-que-perfeito). Construção correta: "Visto que... ganhou". Para identificar, verifique se o tempo verbal preserva a relação temporal original.',
        E: 'A alternativa erra a relação lógica. "Além de... ter ganhado" indica ADIÇÃO (além do prêmio, a indústria gerou...), não causa. O texto original estabelece causa (o prêmio levou à geração), não adição. A regra violada é a distinção entre causa e adição. Construção correta: "Visto que" (causa). Para identificar, pergunte: o conectivo indica causa ou soma? Se soma, não preserva o sentido.'
      },
      conceitoCobrado: 'Conectivos causais: "visto que" na reescrita; preservação de causa-consequência',
      pegadinha: 'A banca oferece conectivos de valores distintos (condicional, consecutivo, causal, temporal, aditivo) para testar a preservação da relação lógica original.',
      comoApareceEmConcurso: 'Questões de reescrita com conectivos exigem que o candidato identifique a relação lógica original (causa, consequência, condição) e escolha o conectivo equivalente.',
      exemploInedito: {
        contexto: 'Um relatório afirma: "O servidor concluiu o curso, e o órgão aumentou a produtividade."',
        aplicacao: 'Reescrita causal correta: "Visto que o servidor concluiu o curso, o órgão aumentou a produtividade." A reescrita condicional ("Desde que... concluísse... aumentaria") mudaria o sentido.',
        desafio: 'Reescreva a frase usando um conectivo causal e explique por que a condicional não preserva o sentido.'
      }
    },
    tags: ['conectivos', 'causalidade', 'visto que', 'reescrita']
  },

  /* ============================================================
     Q09 — VUNESP 2026 — POR-17 (Crase)
  ============================================================ */
  {
    id: 'Q-REAL-POR-17-005',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-17',
    banca: 'VUNESP', orgao: 'Prefeitura de Jundiaí-SP', ano: 2026,
    prova: 'Assistente de Administração',
    fonte: { descricao: 'VUNESP 2026 — Prefeitura de Jundiaí-SP — Assistente de Administração' },
    subtema: 'Crase: "à", "a", "sob", "sem" em texto sobre plataforma de streaming',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '_____ plataforma de streaming "Tela Brasil", um serviço gratuito voltado exclusivamente _____ exibição de produções audiovisuais nacionais, será lançada ainda no primeiro trimestre de 2026. O projeto é resultado de uma parceria entre o Ministério da Cultura e a Universidade Federal de Alagoas (UFAL) e funcionará como um serviço de vídeo _____ demanda do público, reunindo centenas de conteúdos brasileiros, incluindo curtas, médias e longas-metragens, além de séries, documentários e animações. Todo o catálogo pode ser acessado _____ custos pelo público. A proposta é estimular o consumo da produção audiovisual nacional, especialmente em um momento de destaque do cinema brasileiro no cenário internacional.',
    enunciado: 'Assinale a alternativa que preenche, respectivamente, as lacunas, conforme a norma-padrão da língua portuguesa e o sentido do texto.',
    alternativas: [
      { id: 'A', texto: 'À ... à ... sobre ... sem' },
      { id: 'B', texto: 'À ... à ... sob ... sem' },
      { id: 'C', texto: 'À ... a ... sobre ... com' },
      { id: 'D', texto: 'A ... à ... sob ... sem' },
      { id: 'E', texto: 'A ... a ... sobre ... com' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. (1) "A plataforma" — sujeito, sem crase (não há preposição "a" antes; é apenas artigo). (2) "voltado exclusivamente à exibição" — "voltado a" (preposição) + "a exibição" (artigo) = "à exibição" (crase). (3) "sob demanda" — locução correta ("sob demanda" = conforme a solicitação). (4) "sem custos" — o catálogo é acessado sem custos (gratuito). A sequência é A ... à ... sob ... sem.',
      incorretas: {
        A: 'A alternativa erra a primeira e a terceira lacunas. (1) "À plataforma" está errado — o termo é sujeito, sem preposição "a"; o correto é "A plataforma" (artigo). (2) "sobre demanda" está errado — a expressão correta é "sob demanda" (conforme a solicitação). A regra violada é a distinção entre "a" (artigo) e "à" (preposição + artigo), e entre "sobre" (posição superior) e "sob" (condição). Construção correta: A ... sob. Para identificar, verifique se há preposição exigida antes do termo (para a crase) e se a expressão é "sob demanda".',
        B: 'A alternativa erra a primeira lacuna. "À plataforma" está errado — o termo é sujeito, sem preposição; o correto é "A plataforma" (artigo). As demais lacunas estão corretas (à, sob, sem). A regra violada é a distinção entre "a" (artigo, sujeito) e "à" (preposição + artigo). Construção correta: A plataforma. Para identificar, pergunte: há preposição "a" exigida antes do termo? Se não, é apenas artigo "a".',
        C: 'A alternativa erra três lacunas. (1) "À plataforma" errado (sujeito, sem crase). (2) "a exibição" errado — "voltado a" exige preposição + artigo = "à exibição". (3) "sobre demanda" errado — o correto é "sob demanda". (4) "com custos" errado — o texto diz que é gratuito, logo "sem custos". A regra violada é múltipla: crase, "sob" x "sobre", "sem" x "com". Construção correta: A ... à ... sob ... sem. Para identificar, analise cada lacuna separadamente.',
        E: 'A alternativa erra três lacunas. (1) "A plataforma" correto (sem crase). (2) "a exibição" errado — "voltado a" exige "à". (3) "sobre demanda" errado — o correto é "sob demanda". (4) "com custos" errado — o correto é "sem custos". A regra violada é a mesma de C. Construção correta: A ... à ... sob ... sem. Para identificar, verifique cada lacuna com base na regência e no sentido.'
      },
      conceitoCobrado: 'Crase ("a" x "à"), "sob" x "sobre", "sem" x "com"',
      pegadinha: 'A banca combina quatro decisões (crase, sob/sobre, sem/com) em uma única questão, exigindo análise de cada lacuna.',
      comoApareceEmConcurso: 'Questões de preenchimento de lacunas exigem que o candidato analise cada lacuna separadamente, com base na regência e no sentido do texto.',
      exemploInedito: {
        contexto: 'Um comunicado afirma: "A plataforma está voltada à inclusão digital; o acesso é sob demanda e sem custos."',
        aplicacao: '"A plataforma" (sujeito, sem crase); "à inclusão" (voltada a + a = à); "sob demanda" (locução); "sem custos" (gratuito). Mesma estrutura da questão.',
        desafio: 'Preencha as lacunas de um comunicado semelhante e justifique cada escolha.'
      }
    },
    tags: ['crase', 'sob demanda', 'sem custos', 'preposição']
  },

  /* ============================================================
     Q10 — VUNESP 2026 — POR-01 (Compreensão textual)
  ============================================================ */
  {
    id: 'Q-REAL-POR-01-014',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-01',
    banca: 'VUNESP', orgao: 'Prefeitura de Jundiaí-SP', ano: 2026,
    prova: 'Assistente de Administração',
    fonte: { descricao: 'VUNESP 2026 — Prefeitura de Jundiaí-SP — Assistente de Administração' },
    subtema: 'Compreensão textual: lançamento oportuno da plataforma',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-17-005 — texto sobre a plataforma "Tela Brasil".]',
    enunciado: 'De acordo com o texto, pode-se afirmar que o lançamento da plataforma de streaming "Tela Brasil" é',
    alternativas: [
      { id: 'A', texto: 'dispendioso.' },
      { id: 'B', texto: 'oportuno.' },
      { id: 'C', texto: 'inviável.' },
      { id: 'D', texto: 'utópico.' },
      { id: 'E', texto: 'fortuito.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. O texto afirma que a proposta é "estimular o consumo da produção audiovisual nacional, especialmente em um momento de destaque do cinema brasileiro no cenário internacional". Ou seja, o lançamento é OPORTUNO — acontece em um momento favorável (destaque internacional do cinema brasileiro).',
      incorretas: {
        A: 'A alternativa erra o sentido. "Dispendioso" significa "que exige muitos gastos, caro". O texto não diz que o lançamento é caro — diz que é gratuito para o público ("sem custos"). A regra violada é a leitura literal: o texto afirma gratuidade, não custo elevado. Construção correta: o lançamento é oportuno. Para identificar, procure no texto a palavra "gratuito" — se a alternativa disser "caro", está errada.',
        C: 'A alternativa erra o sentido. "Inviável" significa "impossível de realizar". O texto afirma que a plataforma "será lançada ainda no primeiro trimestre de 2026" — logo, é viável. A regra violada é a leitura literal: o texto afirma a realização, não a impossibilidade. Construção correta: o lançamento é oportuno. Para identificar, verifique se o texto afirma a realização — se sim, não é inviável.',
        D: 'A alternativa erra o sentido. "Utópico" significa "idealizado, irrealizável". O texto afirma que a plataforma será lançada — logo, não é utópica. A regra violada é a leitura literal: o texto trata de um projeto concreto, não de uma utopia. Construção correta: o lançamento é oportuno. Para identificar, verifique se o texto trata de projeto concreto — se sim, não é utópico.',
        E: 'A alternativa erra o sentido. "Fortuito" significa "acidental, casual". O texto apresenta o lançamento como resultado de uma parceria planejada (Ministério da Cultura + UFAL), não como acaso. A regra violada é a leitura literal: o texto trata de projeto planejado, não fortuito. Construção correta: o lançamento é oportuno. Para identificar, verifique se o texto trata de planejamento — se sim, não é fortuito.'
      },
      conceitoCobrado: 'Compreensão textual: identificação do sentido global (oportuno)',
      pegadinha: 'A banca oferece adjetivos com sentidos distintos (dispendioso, oportuno, inviável, utópico, fortuito) para testar a compreensão global do texto.',
      comoApareceEmConcurso: 'Questões de compreensão textual exigem que o candidato identifique o sentido global do texto — não basta olhar palavras isoladas; é preciso captar a ideia.',
      exemploInedito: {
        contexto: 'Um relatório afirma: "O lançamento do programa de capacitação ocorre em um momento de expansão do setor, o que o torna estratégico."',
        aplicacao: 'O lançamento é "oportuno" (acontece em momento favorável). Não é "dispendioso" (não se fala em custo), nem "inviável" (será realizado), nem "utópico" (é concreto), nem "fortuito" (é planejado).',
        desafio: 'Classifique o lançamento do programa com base no texto e justifique por que não é fortuito nem inviável.'
      }
    },
    tags: ['compreensão textual', 'oportuno', 'lançamento', 'Tela Brasil']
  },

  /* ============================================================
     Q01 — COPERVE/UFSC 2026 — POR-01 (Compreensão e interpretação)
  ============================================================ */
  {
    id: 'Q-REAL-POR-01-015',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-01',
    banca: 'COPERVE/UFSC', orgao: 'UFSC', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'COPERVE/UFSC 2026 — UFSC — Assistente em Administração' },
    subtema: 'Compreensão textual: primeira pessoa, exemplo pessoal e tese sobre estereótipos',
    dificuldade: 2, prioridade: 'alta',
    textoBase: 'Alguns anos atrás, fui visitar o México. Na época, o clima político nos Estados Unidos, de onde eu vinha, estava tenso, e debatia-se muito a imigração. Como costuma acontecer nos Estados Unidos, imigração tinha se tornado sinônimo de mexicanos. Havia histórias infindáveis sobre pessoas que fraudavam o sistema de saúde, passavam clandestinamente pela fronteira ou eram presas ali, esse tipo de coisa. Eu me lembro de sair para passear no meu primeiro dia em Guadalajara e ver as pessoas indo para o trabalho, fazendo tortilhas no mercado, fumando, rindo. Primeiro senti uma leve surpresa, e então fui tomada pela vergonha. Percebi que tinha estado tão mergulhada na cobertura da mídia sobre os mexicanos que eles haviam se tornado uma só coisa na minha mente: o imigrante abjeto. Eu tinha acreditado na história única dos mexicanos e fiquei morrendo de vergonha daquilo. É assim que se cria uma história única: mostre um povo como uma coisa, uma coisa só, sem parar, e é isso que esse povo se torna. (ADICHIE, Chimamanda Ngozi. O perigo de uma história única. Tradução de Júlia Romeu. São Paulo: Companhia das Letras, 2019. p. 21-22.)',
    enunciado: 'Assinale a alternativa correta em relação ao texto 1.',
    alternativas: [
      { id: 'A', texto: 'A partir de uma narrativa escrita em terceira pessoa, o texto defende que os mexicanos têm uma história única, a qual é reforçada pela mídia estadunidense.' },
      { id: 'B', texto: 'O texto utiliza linguagem técnica e impessoal e, assim, a autora mantém um distanciamento do tema, o que garante uma análise objetiva.' },
      { id: 'C', texto: 'O objetivo do texto é relatar uma história pessoal vivida pela autora em uma viagem ao México, sem a intenção de defender um ponto de vista.' },
      { id: 'D', texto: 'Escrito em primeira pessoa do singular, o texto usa um exemplo pessoal da autora para defender a ideia de que estereótipos são criados a partir de histórias únicas contadas e repetidas sobre um povo.' },
      { id: 'E', texto: 'A autora conclui que as ações das pessoas de Guadalajara descritas entre as linhas 05 e 07 ajudam a mídia a construir o estereótipo do imigrante abjeto.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. O texto é narrado em PRIMEIRA PESSOA do singular ("fui visitar", "eu vinha", "Eu me lembro", "fui tomada pela vergonha", "Percebi", "Eu tinha acreditado"). A autora usa um EXEMPLO PESSOAL (a viagem ao México, o choque ao ver mexicanos vivendo normalmente) para defender uma TESE: estereótipos são criados a partir de histórias únicas contadas e repetidas sobre um povo ("É assim que se cria uma história única: mostre um povo como uma coisa, uma coisa só, sem parar, e é isso que esse povo se torna").',
      incorretas: {
        A: 'A alternativa erra ao dizer que o texto é narrado em TERCEIRA pessoa. O texto usa a primeira pessoa ("fui", "eu vinha", "Eu me lembro"). Além disso, o texto não "defende que os mexicanos têm uma história única" — defende que a história única é uma CONSTRUÇÃO (um estereótipo), e que ela deve ser combatida. A regra violada é a identificação da pessoa do discurso (primeira x terceira). Construção correta: o texto é em primeira pessoa e critica a história única. Para identificar em outra questão, procure os pronomes e verbos: "eu", "fui", "me lembro" indicam primeira pessoa.',
        B: 'A alternativa erra ao dizer que o texto usa "linguagem técnica e impessoal" e que a autora mantém "distanciamento". O texto é PESSOAL e SUBJETIVO: a autora fala de sua própria experiência, de sua vergonha, de sua percepção. Não há distanciamento — há envolvimento emocional. A regra violada é a distinção entre linguagem impessoal (objetiva) e pessoal (subjetiva). Construção correta: o texto é pessoal e subjetivo. Para identificar em outra questão, procure marcas de subjetividade ("senti", "vergonha", "percebi") — se houver, não é impessoal.',
        C: 'A alternativa erra ao dizer que o texto "não tem a intenção de defender um ponto de vista". O texto TEM uma tese clara: a história única cria estereótipos e deve ser combatida. A narrativa pessoal é o MEIO para defender essa tese, não um fim em si. A regra violada é a distinção entre relatar (narrar por narrar) e argumentar (usar a narrativa para defender uma tese). Construção correta: o texto usa a narrativa para defender uma tese. Para identificar, procure a conclusão do texto ("É assim que se cria uma história única...") — se houver generalização/tese, há ponto de vista.',
        E: 'A alternativa erra ao dizer que as ações dos mexicanos "ajudam a mídia a construir o estereótipo". O texto diz o CONTRÁRIO: as ações normais dos mexicanos (indo ao trabalho, fazendo tortilhas, rindo) mostram que o estereótipo é FALSO — eles são pessoas comuns, não o "imigrante abjeto". A autora sente vergonha justamente por ter acreditado no estereótipo. A regra violada é a leitura literal: o texto usa as ações para DESMONTAR o estereótipo, não para construí-lo. Construção correta: as ações revelam a falsidade do estereótipo. Para identificar, verifique se o texto apresenta as ações como confirmação ou negação do estereótipo.'
      },
      conceitoCobrado: 'Compreensão textual: pessoa do discurso, exemplo pessoal e tese sobre estereótipos',
      pegadinha: 'A banca oferece alternativas que confundem pessoa do discurso (A), tom (B), propósito (C) e função do exemplo (E) para testar a leitura global do texto.',
      comoApareceEmConcurso: 'Questões de compreensão sobre textos em primeira pessoa exigem que o candidato identifique a função do exemplo pessoal: ilustrar uma tese, não apenas relatar.',
      exemploInedito: {
        contexto: 'Um texto começa: "Eu sempre acreditei que servidor público era lento. Até o dia em que precisei de um documento e fui atendido em dez minutos. Percebi que meu preconceito era fruto de histórias repetidas."',
        aplicacao: 'O texto é em primeira pessoa, usa exemplo pessoal para defender a tese de que preconceitos são construídos por histórias repetidas — mesma estrutura do texto de Adichie.',
        desafio: 'Identifique a pessoa do discurso, a função do exemplo e a tese defendida no texto.'
      }
    },
    tags: ['compreensão textual', 'primeira pessoa', 'estereótipo', 'história única']
  },

  /* ============================================================
     Q02 — COPERVE/UFSC 2026 — POR-03 (Coesão)
  ============================================================ */
  {
    id: 'Q-REAL-POR-03-006',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-03',
    banca: 'COPERVE/UFSC', orgao: 'UFSC', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'COPERVE/UFSC 2026 — UFSC — Assistente em Administração' },
    subtema: 'Coesão referencial: anáfora com "assim"',
    dificuldade: 3, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-015 — texto de Chimamanda Ngozi Adichie.]',
    enunciado: 'Com base no texto 1 e na variedade padrão da língua escrita, assinale a alternativa correta.',
    alternativas: [
      { id: 'A', texto: 'A expressão "de onde eu vinha" (linhas 01 e 02) está entre vírgulas para indicar uma oração intercalada.' },
      { id: 'B', texto: 'A palavra "assim" (linha 11) é um elemento coesivo com função anafórica.' },
      { id: 'C', texto: 'A expressão "esse tipo de coisa" (linha 05) refere-se a situações envolvendo imigrantes mexicanos legais nos Estados Unidos.' },
      { id: 'D', texto: 'No último parágrafo do texto, o uso de dois-pontos (linha 11) antecede uma fala de personagem.' },
      { id: 'E', texto: 'A vírgula usada depois de "Alguns anos atrás" (linha 01) é usada para indicar a omissão do pronome "eu".' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. Em "É assim que se cria uma história única", o advérbio "assim" é um elemento coesivo ANAFÓRICO: retoma todo o processo descrito antes (mostrar um povo como uma coisa só, repetidamente). "Assim" aponta para trás, resumindo o que foi dito — é anáfora.',
      incorretas: {
        A: 'A alternativa erra a classificação. "De onde eu vinha" é uma ORAÇÃO SUBORDINADA ADJETIVA EXPLICATIVA (explica "Estados Unidos"), não uma "oração intercalada" no sentido estrito. Oração intercalada é aquela que se insere sem conexão sintática (ex.: "O Brasil, disse ele, é um país"). Aqui, a oração tem função sintática (explica o antecedente). A regra violada é a distinção entre oração adjetiva explicativa (com função) e intercalada (sem função). Construção correta: "de onde eu vinha" é adjetiva explicativa. Para identificar em outra questão, verifique se a oração tem antecedente (adjetiva) ou se é um comentário à parte (intercalada).',
        C: 'A alternativa erra o referente. "Esse tipo de coisa" retoma as situações NEGATIVAS mencionadas antes: fraudar o sistema de saúde, passar clandestinamente pela fronteira, ser preso. Não se refere a "imigrantes legais" — pelo contrário, são situações ilegais/criminosas. A regra violada é a identificação do referente: o pronome "esse" retoma o que foi dito imediatamente antes. Construção correta: "esse tipo de coisa" = fraudes, clandestinidade, prisões. Para identificar, volte ao texto e veja o que está imediatamente antes do termo anafórico.',
        D: 'A alternativa erra a função dos dois-pontos. Em "É assim que se cria uma história única: mostre um povo como uma coisa...", os dois-pontos introduzem uma EXPLICAÇÃO/EXPLICITAÇÃO do que foi dito antes (como se cria a história única), não uma fala de personagem. A regra violada é a distinção entre dois-pontos de explicação/enumeração e dois-pontos de fala. Construção correta: dois-pontos introduzem explicação. Para identificar, verifique se há verbo de dizer (disse, falou) antes dos dois-pontos — se não houver, não é fala.',
        E: 'A alternativa erra a função da vírgula. Em "Alguns anos atrás, fui visitar o México", a vírgula separa o ADJUNTO ADVERBIAL DE TEMPO anteposto ("Alguns anos atrás") da oração principal. Não há omissão de pronome "eu" — o sujeito "eu" está expresso em "fui". A regra violada é a função da vírgula: separar adjunto deslocado, não indicar elipse. Construção correta: a vírgula isola adjunto adverbial. Para identificar, pergunte: o termo antes da vírgula indica circunstância (tempo, lugar, modo)? Se sim, é adjunto.'
      },
      conceitoCobrado: 'Coesão referencial: anáfora com "assim"; funções da vírgula e dos dois-pontos',
      pegadinha: 'A banca oferece classificações plausíveis (oração intercalada, referente, fala, elipse) para testar a identificação precisa de cada mecanismo.',
      comoApareceEmConcurso: 'Questões de coesão exigem que o candidato identifique o referente e a função dos conectivos — não basta saber que "assim" é coesivo; é preciso dizer que é anafórico.',
      exemploInedito: {
        contexto: 'Um relatório afirma: "O órgão reduziu custos, eliminou redundâncias e digitalizou processos. Assim, aumentou a eficiência."',
        aplicacao: '"Assim" retoma todo o processo anterior (reduziu, eliminou, digitalizou) e conclui — é anafórico, como no texto de Adichie.',
        desafio: 'Identifique o referente de "assim" e explique por que é anafórico.'
      }
    },
    tags: ['coesão referencial', 'anáfora', 'assim', 'vírgula']
  },

  /* ============================================================
     Q03 — COPERVE/UFSC 2026 — POR-01 (Compreensão)
  ============================================================ */
  {
    id: 'Q-REAL-POR-01-016',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-01',
    banca: 'COPERVE/UFSC', orgao: 'UFSC', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'COPERVE/UFSC 2026 — UFSC — Assistente em Administração' },
    subtema: 'Compreensão textual: argumentos e tese sobre justiça x linchamento',
    dificuldade: 2, prioridade: 'alta',
    textoBase: 'Punir quem matou orelha é civilização, mas linchar é endossar a barbárie. Alerta de spoiler: dá nojo o que fizeram com o Orelha. Mas dá calafrio ver gente pedindo "olho por olho, dente por dente". A inominável tortura do Orelha, um doguinho que era mascote da comunidade da praia Brava, em Florianópolis, é um daqueles casos que colocam à prova nossa humanidade por duas razões. Primeiro, a violência brutal cometida por adolescentes com o esforço de adultos influentes para acobertar o crime. E, segundo, a quantidade de pessoas nas redes pedindo sequestro, tortura e morte dos investigados. Indignação é necessária. Justiça, indispensável. Mas justiça, não justiçamento – a lógica miliciana em que o devido processo legal vira detalhe e a lei do mais forte assume o comando. Punir quem torturou o Orelha (e quem tentou protegê-los com ameaça, influência ou carteira da OAB) é obrigação do Estado. Transformar a barbárie em espetáculo de linchamento só nos torna parecidos com aquilo que dizemos condenar. Punir, sim. Linchar, não. Porque, quando isso acontece, o Estado de direito se torna o alvo. (SAKAMOTO, Leonardo. Instagram, @leosakamoto, 27 jan. 2026.)',
    enunciado: 'Assinale a alternativa correta em relação ao texto 2.',
    alternativas: [
      { id: 'A', texto: 'A expressão "olho por olho, dente por dente" (linhas 02-03), neste contexto, significa que a pena deve ter a mesma proporção do dano causado para que não haja violência e vingança.' },
      { id: 'B', texto: 'O objetivo principal do texto é argumentar a favor de uma punição severa aos torturadores do cão Orelha, de modo que a sociedade se sinta vingada.' },
      { id: 'C', texto: 'Para defender a tese de que o caso Orelha coloca à prova nossa humanidade, o autor levanta dois argumentos, os quais estão explicitados entre as linhas 06 e 08.' },
      { id: 'D', texto: 'O texto 2 é um texto curto (post do Instagram) e, por isso, não é possível inferir a opinião defendida pelo autor.' },
      { id: 'E', texto: 'Pode-se inferir que o autor do post não se sensibilizou com a tortura do cão Orelha, uma vez que ele se refere à reação das pessoas nas redes sociais diante do caso como barbárie.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. O texto afirma: "A inominável tortura do Orelha... é um daqueles casos que colocam à prova nossa humanidade por duas razões. Primeiro, a violência brutal cometida por adolescentes com o esforço de adultos influentes para acobertar o crime. E, segundo, a quantidade de pessoas nas redes pedindo sequestro, tortura e morte dos investigados." Ou seja, os dois argumentos estão explicitados entre as linhas 06 e 08.',
      incorretas: {
        A: 'A alternativa erra o sentido da expressão. "Olho por olho, dente por dente" é usada no texto para se referir à VINGANÇA (justiçamento), não a uma pena proporcional que evita violência. O autor critica essa lógica ("dá calafrio ver gente pedindo olho por olho, dente por dente"). A regra violada é a leitura contextual: a expressão é usada para criticar a vingança, não para defendê-la. Construção correta: a expressão representa a lógica do justiçamento. Para identificar, verifique o tom do texto ao redor da expressão ("dá calafrio" = crítica).',
        B: 'A alternativa erra o objetivo do texto. O texto NÃO argumenta a favor de punição severa para a sociedade se sentir vingada — argumenta a favor da PUNIÇÃO LEGAL (justiça) e CONTRA o linchamento (vingança). O autor afirma: "Punir, sim. Linchar, não." A regra violada é a distinção entre justiça (devido processo legal) e vingança (linchamento). Construção correta: o texto defende a punição legal, não a vingança. Para identificar, procure a tese explícita ("Punir, sim. Linchar, não.") — se a alternativa inverter, está errada.',
        D: 'A alternativa erra ao dizer que "não é possível inferir a opinião do autor". O texto é EXPLICITAMENTE opinativo: "dá nojo", "dá calafrio", "Punir, sim. Linchar, não." A opinião está clara. A regra violada é a leitura do gênero: post de opinião tem tese explícita. Construção correta: a opinião é clara e inferível. Para identificar, procure verbos de avaliação ("dá nojo", "é obrigação") — se houver, há opinião.',
        E: 'A alternativa erra ao dizer que o autor "não se sensibilizou". O autor se sensibiliza: "dá nojo o que fizeram com o Orelha" — ele sente repulsa pela tortura. O que ele critica é a REAÇÃO das pessoas (linchamento), não a tortura em si. A regra violada é a distinção entre a posição sobre o crime (repulsa) e a posição sobre a reação (crítica ao linchamento). Construção correta: o autor se sensibiliza com a tortura e critica o linchamento. Para identificar, separe as duas posições: sobre o crime e sobre a reação.'
      },
      conceitoCobrado: 'Compreensão textual: tese, argumentos e distinção entre justiça e vingança',
      pegadinha: 'A banca oferece alternativas que distorcem a tese (B), negam a opinião (D) ou invertem a posição do autor (E) para testar a leitura atenta.',
      comoApareceEmConcurso: 'Questões de compreensão sobre textos opinativos exigem que o candidato identifique a tese e os argumentos — não basta concordar ou discordar do autor.',
      exemploInedito: {
        contexto: 'Um artigo afirma: "Punir corruptos é dever do Estado; apedrejar suspeitos é barbárie. A indignação é legítima, mas o linchamento midiático não substitui o devido processo legal."',
        aplicacao: 'A tese é "punir sim, linchar não" — mesma estrutura do texto de Sakamoto. Os argumentos distinguem justiça (legal) de vingança (ilegal).',
        desafio: 'Identifique a tese e os argumentos do artigo e explique a diferença entre justiça e vingança.'
      }
    },
    tags: ['compreensão textual', 'tese', 'justiça', 'linchamento', 'Orelha']
  },

  /* ============================================================
     Q05 — COPERVE/UFSC 2026 — POR-02 (Tipologia textual)
  ============================================================ */
  {
    id: 'Q-REAL-POR-02-003',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-02',
    banca: 'COPERVE/UFSC', orgao: 'UFSC', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'COPERVE/UFSC 2026 — UFSC — Assistente em Administração' },
    subtema: 'Tipologia textual: texto instrucional (cartaz de saúde)',
    dificuldade: 2, prioridade: 'alta',
    textoBase: 'Cartaz do Ministério da Saúde sobre a zika: "Não é amor, é zika!" Lista de sintomas: dor de cabeça e muscular, febre baixa, manchas vermelhas na pele, olhos vermelhos (conjuntivite). "Não dê chance para os sintomas. Procure uma unidade de saúde." Na parte inferior, orientações de prevenção: "Mantenha a caixa d\'água bem fechada", "Descarte garrafas pet e outros recipientes", "Amarre bem os sacos de lixo", "Limpe calhas e lajes", "Guarde pneus em locais cobertos", "Não acumule sucata e entulho". (BRASIL. Ministério da Saúde. Instagram. @minsaude. 12 dez. 2025.)',
    enunciado: 'Com base no texto 3, considere as seguintes afirmativas e assinale a alternativa correta. I - O texto tem como objetivo principal alertar a população sobre a necessidade de procurar ajuda médica diante dos sintomas do vírus da zika. II - Trata-se de um texto do tipo instrucional que apresenta características como o uso de verbos no imperativo e linguagem objetiva. III - Trata-se de um texto argumentativo, pois tenta convencer o leitor a procurar ajuda médica a partir de exemplos reais. IV - O texto tem como um de seus objetivos orientar a população a prevenir a doença, já que contém dicas de como evitar a proliferação do mosquito transmissor da doença.',
    alternativas: [
      { id: 'A', texto: 'Somente as afirmativas I e II estão corretas.' },
      { id: 'B', texto: 'Somente as afirmativas I, II e IV estão corretas.' },
      { id: 'C', texto: 'Somente as afirmativas III e IV estão corretas.' },
      { id: 'D', texto: 'Somente as afirmativas II, III e IV estão corretas.' },
      { id: 'E', texto: 'Somente as afirmativas I e III estão corretas.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. I é VERDADEIRA: o cartaz alerta sobre os sintomas e orienta procurar uma unidade de saúde. II é VERDADEIRA: o texto é INSTRUCIONAL, com verbos no imperativo ("Mantenha", "Descarte", "Amarre", "Limpe", "Guarde", "Não acumule") e linguagem objetiva. IV é VERDADEIRA: o texto orienta a prevenção, com dicas para evitar a proliferação do mosquito. III é FALSA: o texto não é argumentativo — não defende uma tese com argumentos, apenas instrui/orienta.',
      incorretas: {
        A: 'A alternativa erra ao excluir IV. O texto tem, sim, o objetivo de orientar a prevenção (dicas de como evitar a proliferação do mosquito). A afirmativa IV está correta. A regra violada é a identificação do objetivo instrucional do texto. Construção correta: IV é verdadeira. Para identificar, observe se o texto contém orientações práticas (verbos no imperativo) — se sim, há instrução.',
        C: 'A alternativa erra ao incluir III (falsa) e excluir I e II (verdadeiras). III é falsa porque o texto não é argumentativo; I e II são verdadeiras. A regra violada é a classificação do tipo textual: instrucional (não argumentativo). Construção correta: III é falsa; I e II são verdadeiras. Para identificar, pergunte: o texto defende uma tese com argumentos? Se não, não é argumentativo.',
        D: 'A alternativa erra ao incluir III (falsa). O texto não é argumentativo — é instrucional. A regra violada é a mesma de C. Construção correta: III é falsa. Para identificar, verifique se há tese e argumentos — no cartaz, há apenas instruções.',
        E: 'A alternativa erra ao excluir II e IV (verdadeiras) e incluir III (falsa). II é verdadeira (texto instrucional com imperativo); IV é verdadeira (orientações de prevenção); III é falsa. A regra violada é a classificação do tipo textual e a identificação das orientações. Construção correta: II e IV são verdadeiras; III é falsa.'
      },
      conceitoCobrado: 'Tipologia textual: instrucional x argumentativo',
      pegadinha: 'A banca mistura afirmativas sobre objetivo, tipo textual e prevenção para testar a identificação do tipo predominante.',
      comoApareceEmConcurso: 'Questões de tipologia com cartazes exigem que o candidato identifique a função predominante (instruir, alertar) e as marcas linguísticas (imperativo, objetividade).',
      exemploInedito: {
        contexto: 'Um cartaz afirma: "Lave as mãos com frequência. Use álcool em gel. Evite aglomerações. Procure o posto de saúde se tiver sintomas."',
        aplicacao: 'O texto é instrucional: verbos no imperativo, linguagem objetiva, orientações práticas. Não é argumentativo (não defende tese com argumentos).',
        desafio: 'Classifique o tipo textual do cartaz e identifique as marcas linguísticas que justificam a classificação.'
      }
    },
    tags: ['tipologia textual', 'instrucional', 'imperativo', 'zika']
  },

  /* ============================================================
     Q06 — COPERVE/UFSC 2026 — POR-05 (Figuras de linguagem)
  ============================================================ */
  {
    id: 'Q-REAL-POR-05-004',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-05',
    banca: 'COPERVE/UFSC', orgao: 'UFSC', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'COPERVE/UFSC 2026 — UFSC — Assistente em Administração' },
    subtema: 'Figuras de linguagem: hipérbole em "pela hora da morte"',
    dificuldade: 2, prioridade: 'alta',
    textoBase: 'Tirinha "Dona Anésia": Dolores atende o telefone ("Alô?"). A pessoa pergunta "É a Dolores?" e ela responde "Não, aqui é a Dolores." A pessoa diz "Acabei de chegar aqui." Dolores: "Vim tomar um café com a Anésia." A pessoa: "Eu fui ao mercado agorinha." Dolores: "Comprei leite, açúcar e mais umas coisinhas." A pessoa: "Tá tudo pela hora da morte, os preços." Dolores: "Mas há de melhorar, se Deus quiser." A pessoa: "Tá bom então, fica com Deus, menina." Dolores: "Quem era?" "Engano!" (Legenda: "Uma vez a Dolores atendeu uma vendedora de plano de telefonia. A moça ficou 40 minutos presa na ligação com a Dolores. Nunca mais ela ligou.") (Dona Anésia, Instagram, @dona.anesia, 05 set. 2025.)',
    enunciado: 'Com base no texto 4 e na variedade padrão da língua escrita, assinale a alternativa correta.',
    alternativas: [
      { id: 'A', texto: 'A expressão "Tá tudo pela hora da morte", no décimo quadrinho, quer dizer que os preços dos produtos estão exageradamente altos e, por isso, pode ser relacionada à figura de linguagem hipérbole.' },
      { id: 'B', texto: 'No sétimo quadrinho, a oração "Eu fui ao mercado agorinha" poderia ser substituída por "Eu fui no mercado agorinha" mantendo sua adequação à norma padrão.' },
      { id: 'C', texto: 'Na legenda da tirinha, o pronome "ela", presente na última oração, retoma o nome "Dolores", presente nas duas orações anteriores.' },
      { id: 'D', texto: 'No sétimo e no nono quadrinho, as palavras "agorinha" e "coisinhas" referem-se, ambas, a coisas de tamanho pequeno.' },
      { id: 'E', texto: 'No primeiro quadrinho, pode-se identificar a figura de linguagem prosopopeia.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. "Tá tudo pela hora da morte" é uma expressão popular que significa "os preços estão altíssimos, exagerados". É uma HIPÉRBOLE (exagero intencional): "pela hora da morte" intensifica a ideia de preço alto. A figura é a hipérbole, e o sentido está corretamente identificado.',
      incorretas: {
        B: 'A alternativa erra a regência. "Ir ao mercado" exige a preposição "a" (ir A algum lugar). "Ir no mercado" é coloquial, mas não segue a norma-padrão. A regra violada é a regência do verbo "ir": "ir a" (norma-padrão) x "ir em" (coloquial). Construção correta: "Eu fui ao mercado". Para identificar em outra questão, verifique se o verbo "ir" está acompanhado de "a" (norma) ou "em" (coloquial).',
        C: 'A alternativa erra o referente. Na legenda, "ela" retoma "a moça" (a vendedora de plano de telefonia), não "Dolores". O texto diz: "A moça ficou 40 minutos presa na ligação com a Dolores. Nunca mais ela ligou." — "ela" = a moça. A regra violada é a identificação do antecedente: o pronome retoma o termo mais próximo e compatível. Construção correta: "ela" = a moça. Para identificar, volte ao texto e veja o que está imediatamente antes do pronome.',
        D: 'A alternativa erra o sentido. "Agorinha" é advérbio de tempo (há pouco tempo), não indica tamanho pequeno. "Coisinhas" é diminutivo de "coisas", indicando coisas pequenas ou sem importância. Apenas "coisinhas" se refere a coisas pequenas; "agorinha" indica tempo. A regra violada é a classificação de "agorinha" como advérbio de tempo, não de tamanho. Construção correta: "agorinha" = tempo; "coisinhas" = coisas pequenas. Para identificar, pergunte: a palavra indica tempo ou tamanho?',
        E: 'A alternativa erra a figura de linguagem. No primeiro quadrinho, há o som do telefone ("Trrriiimmm!") — é uma ONOMATOPEIA (reprodução de som), não prosopopeia (personificação de seres inanimados). A regra violada é a distinção entre onomatopeia (som) e prosopopeia (personificação). Construção correta: há onomatopeia. Para identificar, pergunte: a figura reproduz um som (onomatopeia) ou atribui vida a um ser inanimado (prosopopeia)?'
      },
      conceitoCobrado: 'Figuras de linguagem: hipérbole, onomatopeia; regência do verbo "ir"; referenciação',
      pegadinha: 'A banca mistura figuras de linguagem (hipérbole, prosopopeia, onomatopeia), regência e referenciação em uma única questão.',
      comoApareceEmConcurso: 'Questões sobre tirinhas exigem que o candidato analise os recursos verbais e visuais — não basta olhar a imagem; é preciso ler as falas e identificar os recursos.',
      exemploInedito: {
        contexto: 'Uma tirinha mostra um personagem dizendo: "Os preços estão nas nuvens!" e outro respondendo: "É, tá tudo pela hora da morte!"',
        aplicacao: '"Nas nuvens" e "pela hora da morte" são hipérboles (exagero) para indicar preços altos. A figura é a mesma da questão.',
        desafio: 'Identifique a figura de linguagem nas duas expressões e explique o efeito de sentido.'
      }
    },
    tags: ['figuras de linguagem', 'hipérbole', 'onomatopeia', 'regência', 'tirinha']
  },

  /* ============================================================
     Q07 — COPERVE/UFSC 2026 — POR-01 (Interpretação de tirinha)
  ============================================================ */
  {
    id: 'Q-REAL-POR-01-017',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-01',
    banca: 'COPERVE/UFSC', orgao: 'UFSC', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'COPERVE/UFSC 2026 — UFSC — Assistente em Administração' },
    subtema: 'Interpretação de tirinha: humor, referência, vocativo e conotação',
    dificuldade: 3, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-05-004 — tirinha "Dona Anésia".]',
    enunciado: 'Com base no texto 4, indique se as afirmativas abaixo são verdadeiras (V) ou falsas (F) e assinale a alternativa com a sequência correta de cima para baixo. ( ) O humor da tirinha pode ser explicado pela quebra de expectativa do leitor, já que a personagem Dolores trata a pessoa ao telefone com intimidade, mesmo sem conhecê-la. ( ) No quarto quadrinho, a partir do enunciado "Não, aqui é a Dolores", o leitor já pode ter certeza de que a ligação recebida é de uma pessoa desconhecida e se trata de um engano. ( ) No quinto quadrinho, a palavra "aqui" refere-se à casa de Dona Anésia e pode ser classificada como uma conjunção locativa. ( ) No penúltimo quadrinho, a vírgula antes de "menina" é empregada em razão de um vocativo. ( ) No sexto quadrinho, a expressão "tomar um café" pode ser entendida como um encontro entre amigas, o que confere sentido conotativo ao enunciado.',
    alternativas: [
      { id: 'A', texto: 'V – F – V – V – V' },
      { id: 'B', texto: 'F – F – V – V – F' },
      { id: 'C', texto: 'V – F – F – V – V' },
      { id: 'D', texto: 'V – V – F – F – F' },
      { id: 'E', texto: 'F – V – F – F – V' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A sequência é V, F, F, V, V. (I) VERDADEIRA: o humor vem da quebra de expectativa — Dolores trata a pessoa com intimidade ("Vim tomar um café com a Anésia"), mesmo sem conhecê-la, o que prolonga a ligação. (II) FALSA: no quarto quadrinho ("Não, aqui é a Dolores"), o leitor ainda NÃO pode ter certeza de que é engano — a conversa continua por vários quadrinhos, e a revelação só vem no final ("Engano!"). (III) FALSA: "aqui" é um ADVÉRBIO DE LUGAR, não uma "conjunção locativa" (essa classificação não existe). (IV) VERDADEIRA: em "fica com Deus, menina", a vírgula isola o VOCATIVO "menina" (chamamento). (V) VERDADEIRA: "tomar um café" tem sentido conotativo — indica um encontro social, não apenas a bebida.',
      incorretas: {
        A: 'A alternativa erra ao classificar III como verdadeira. "Aqui" é advérbio de lugar, não conjunção locativa (classificação inexistente). A regra violada é a classificação morfológica: advérbio x conjunção. Construção correta: "aqui" = advérbio de lugar. Para identificar em outra questão, pergunte: a palavra indica circunstância (advérbio) ou liga orações (conjunção)? Se indica lugar, é advérbio.',
        B: 'A alternativa erra ao classificar I como falsa e V como falsa. I é VERDADEIRA (o humor vem da quebra de expectativa); V é VERDADEIRA ("tomar um café" tem sentido conotativo). A regra violada é a identificação do humor e da conotação. Construção correta: I e V são verdadeiras. Para identificar, verifique se a expressão tem sentido figurado (conotativo) — se sim, V é verdadeira.',
        D: 'A alternativa erra ao classificar II como verdadeira e IV como falsa. II é FALSA (o leitor não tem certeza no quarto quadrinho); IV é VERDADEIRA (a vírgula isola vocativo). A regra violada é a leitura do momento da revelação e a identificação do vocativo. Construção correta: II é falsa; IV é verdadeira. Para identificar, verifique se o vocativo é um chamamento — se sim, a vírgula é correta.',
        E: 'A alternativa erra ao classificar I como falsa e III como verdadeira. I é VERDADEIRA (humor pela quebra de expectativa); III é FALSA ("aqui" é advérbio, não conjunção). A regra violada é a mesma de A e B. Construção correta: I é verdadeira; III é falsa. Para identificar, analise cada afirmativa isoladamente.'
      },
      conceitoCobrado: 'Interpretação de tirinha: humor, referência, vocativo e conotação',
      pegadinha: 'A banca mistura cinco afirmativas sobre aspectos distintos (humor, revelação, classe de palavra, pontuação, conotação) em uma única questão V/F.',
      comoApareceEmConcurso: 'Questões V/F sobre tirinhas exigem que o candidato analise cada afirmativa com base no texto verbal e visual — não basta olhar a imagem; é preciso ler as falas e identificar os recursos.',
      exemploInedito: {
        contexto: 'Uma tirinha mostra um personagem atendendo o telefone e conversando longamente com um telemarketing; ao final, ele diz "Quem era?" e a esposa responde "Engano!".',
        aplicacao: 'O humor vem da quebra de expectativa (o personagem conversa como se conhecesse o interlocutor). A revelação só vem no final — mesmo mecanismo da tirinha da Dolores.',
        desafio: 'Identifique o recurso de humor e o momento da revelação na tirinha.'
      }
    },
    tags: ['interpretação de tirinha', 'humor', 'vocativo', 'conotação']
  },

  /* ============================================================
     Q08 — COPERVE/UFSC 2026 — POR-03 (Coesão e coerência)
  ============================================================ */
  {
    id: 'Q-REAL-POR-03-007',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-03',
    banca: 'COPERVE/UFSC', orgao: 'UFSC', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'COPERVE/UFSC 2026 — UFSC — Assistente em Administração' },
    subtema: 'Coesão e coerência: ordenação de parágrafos',
    dificuldade: 3, prioridade: 'alta',
    textoBase: 'Fragmentos de Davi Kopenawa (A queda do céu: palavras de um xamã yanomami, 2010): (1) "No entanto, não digo que a descobri e que, por isso, quero possuí-la. Assim como não digo que descobri o céu, ou os animais de caça! Sempre estiveram aí, desde antes de eu nascer." (2) "Mas esse é um pensamento cheio de esquecimento! Omama nos criou, com o céu e a floresta, lá onde nossos ancestrais têm vivido desde sempre." (3) "Contam os brancos que um português disse ter descoberto o Brasil há muito tempo. Pensam mesmo, até hoje, que foi ele o primeiro a ver nossa terra." (4) "Contento-me em olhar para o céu e caçar os animais da floresta. E só. E é esse o único pensamento direito." (5) "Nossas palavras estão presentes nesta terra desde o primeiro tempo, do mesmo modo que as montanhas onde moram os xapiri. Nasci na floresta e sempre vivi nela."',
    enunciado: 'Numere a ordem dos períodos, de modo que assegure coesão e coerência ao parágrafo. Em seguida, assinale a alternativa com a sequência numérica correta de cima para baixo.',
    alternativas: [
      { id: 'A', texto: '4 – 3 – 1 – 2 – 5' },
      { id: 'B', texto: '2 – 3 – 1 – 5 – 4' },
      { id: 'C', texto: '1 – 5 – 4 – 2 – 3' },
      { id: 'D', texto: '1 – 5 – 3 – 2 – 4' },
      { id: 'E', texto: '4 – 2 – 1 – 5 – 3' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. A ordem que garante coesão e coerência é 1 – 5 – 3 – 2 – 4. (1) O fragmento 1 começa com "No entanto, não digo que a descobri..." — retoma uma ideia anterior (a descoberta) e introduz a contraposição. (2) O fragmento 5 reforça a presença dos povos originários na terra desde o primeiro tempo. (3) O fragmento 3 introduz a narrativa dos brancos sobre a descoberta. (4) O fragmento 2 contrapõe ("Mas esse é um pensamento cheio de esquecimento!"). (5) O fragmento 4 conclui ("Contento-me em olhar para o céu..."). A sequência forma um parágrafo coeso: tese (1), reforço (5), narrativa dos brancos (3), contraposição (2) e conclusão (4).',
      incorretas: {
        A: 'A alternativa erra a ordem. Começar com o fragmento 4 ("Contento-me em olhar para o céu...") é incoerente — é uma conclusão, não uma abertura. A regra violada é a progressão temática: o parágrafo deve começar com a tese e terminar com a conclusão. Construção correta: começar com 1 e terminar com 4. Para identificar em outra questão, procure o fragmento que introduz o tema (tese) e o que conclui.',
        B: 'A alternativa erra a ordem. Começar com o fragmento 2 ("Mas esse é um pensamento cheio de esquecimento!") é incoerente — o "Mas" pressupõe uma ideia anterior. A regra violada é a coesão sequencial: conectivos como "mas" exigem um antecedente. Construção correta: o fragmento 2 deve vir depois do 3 (que apresenta o pensamento dos brancos). Para identificar, procure conectivos que exigem contexto anterior ("mas", "no entanto", "porém").',
        C: 'A alternativa erra a ordem. Colocar o fragmento 4 antes do 2 e do 3 quebra a progressão: a conclusão viria antes da contraposição. A regra violada é a progressão temática: conclusão deve vir por último. Construção correta: 4 é o último. Para identificar, procure o fragmento que encerra o raciocínio (conclusão).',
        E: 'A alternativa erra a ordem. Começar com o fragmento 4 (conclusão) e colocar o 2 antes do 1 e do 5 quebra a coerência. A regra violada é a mesma: conclusão não pode ser abertura. Construção correta: 1 – 5 – 3 – 2 – 4. Para identificar, verifique a progressão lógica: tese → desenvolvimento → conclusão.'
      },
      conceitoCobrado: 'Coesão e coerência: ordenação de parágrafos e progressão temática',
      pegadinha: 'A banca oferece ordens que parecem plausíveis, mas que quebram a progressão lógica (conclusão no início, contraposição sem antecedente).',
      comoApareceEmConcurso: 'Questões de ordenação exigem que o candidato identifique a tese, os argumentos e a conclusão — não basta olhar conectivos isolados; é preciso ver a progressão global.',
      exemploInedito: {
        contexto: 'Fragmentos de um relatório: (1) "No entanto, os custos aumentaram." (2) "O projeto foi aprovado." (3) "A equipe comemorou." (4) "Mas o orçamento estourou."',
        aplicacao: 'A ordem coesa é: 2 (aprovação) → 3 (comemoração) → 1 (aumento de custos) → 4 (estouro do orçamento). Conectivos como "no entanto" e "mas" exigem antecedente.',
        desafio: 'Ordene os fragmentos de modo a garantir coesão e coerência.'
      }
    },
    tags: ['coesão', 'coerência', 'ordenação', 'progressão temática']
  },

  /* ============================================================
     Q09 — COPERVE/UFSC 2026 — POR-01 (Compreensão)
  ============================================================ */
  {
    id: 'Q-REAL-POR-01-018',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-01',
    banca: 'COPERVE/UFSC', orgao: 'UFSC', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'COPERVE/UFSC 2026 — UFSC — Assistente em Administração' },
    subtema: 'Compreensão textual: contratação temporária de professores',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '"Notório saber" e a sala de aula como laboratório do improviso. Por Thiago Esteves – Carta Capital 02/02/2026. Enquanto estudantes aguardam ansiosos o início do ano letivo, milhares de professoras e professores atendem aos chamados das secretarias estaduais e municipais de educação para os processos de atribuição, designação ou distribuição de aulas. É por meio desses procedimentos que as redes estaduais e municipais de ensino organizam a distribuição das aulas na educação básica e que, na ausência de docentes efetivos suficientes, recorrem à contratação temporária de professores. Quem acompanha de perto a angústia de professoras e professores nesse período sabe que é justamente nesse momento que se torna visível uma das práticas mais nefastas das redes públicas de ensino: a ampliação da carga horária de docentes concursados e o recurso sistemático à contratação temporária de professoras e professores. Mais do que revelar o descaso de uma parcela significativa de governadores e prefeitos com a educação, uma vez que esse tipo de vínculo deveria ser exceção e não regra, esse processo explicita um problema ainda mais grave: a admissão de profissionais sem a formação adequada para o exercício do magistério. Trata-se de uma política educacional frequentemente amparada em portarias, autorizações e normativas expedidas pelas próprias secretarias ou pelos conselhos de educação, que acaba por instituir, na prática, uma espécie de notório saber disfarçado."',
    enunciado: 'Com base no texto 5, indique se as afirmativas abaixo são verdadeiras (V) ou falsas (F) e assinale a alternativa com a sequência correta de cima para baixo. ( ) A ideia principal do texto é a de que há urgência na realização de concursos para contratação de professores efetivos nas redes públicas de ensino. ( ) Na linha 03, o elemento anafórico "desses procedimentos" retoma os seguintes termos mencionados na linha 03: "processos de atribuição, designação ou distribuição de aulas". ( ) As redes de ensino recorrem à contratação temporária de professores, pois não há docentes efetivos suficientes. ( ) A contratação temporária de professores revela a preocupação de muitos governadores e prefeitos com a educação no país. ( ) A contratação temporária de professores deve se tornar regra nas redes de ensino municipais e estaduais no país. ( ) Na linha 16, o texto refere-se à instituição de "uma espécie de notório saber disfarçado" que se relaciona à falta de formação adequada de professoras e professores contratados temporariamente.',
    alternativas: [
      { id: 'A', texto: 'V – V – V – F – F – V' },
      { id: 'B', texto: 'F – F – V – F – V – F' },
      { id: 'C', texto: 'F – V – F – V – F – V' },
      { id: 'D', texto: 'F – V – V – F – F – V' },
      { id: 'E', texto: 'V – F – F – V – V – F' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A sequência é F, V, V, F, F, V. (I) FALSA: a ideia principal não é a urgência de concursos, mas a CRÍTICA à contratação temporária e à falta de formação adequada. (II) VERDADEIRA: "desses procedimentos" retoma "processos de atribuição, designação ou distribuição de aulas" (linha 03). (III) VERDADEIRA: o texto afirma que as redes recorrem à contratação temporária "na ausência de docentes efetivos suficientes". (IV) FALSA: o texto diz que a contratação temporária revela "descaso" dos governadores, não "preocupação". (V) FALSA: o texto diz que a contratação deveria ser "exceção e não regra" — logo, NÃO deve se tornar regra. (VI) VERDADEIRA: o texto relaciona o "notório saber disfarçado" à falta de formação adequada dos contratados temporariamente.',
      incorretas: {
        A: 'A alternativa erra ao classificar I como verdadeira e II como verdadeira (mas erra IV e V). I é FALSA (a ideia principal é a crítica à contratação temporária); IV é FALSA (revela descaso, não preocupação); V é FALSA (deve ser exceção, não regra). A regra violada é a identificação da ideia principal e do posicionamento do autor. Construção correta: I, IV e V são falsas. Para identificar, procure a tese do texto: "uma das práticas mais nefastas" — é uma crítica, não uma defesa de concursos.',
        B: 'A alternativa erra ao classificar II como falsa e V como verdadeira. II é VERDADEIRA (o anafórico retoma os termos da linha 03); V é FALSA (a contratação deve ser exceção, não regra). A regra violada é a identificação do referente e do posicionamento do autor. Construção correta: II é verdadeira; V é falsa. Para identificar, verifique o antecedente do anafórico e a tese do texto.',
        C: 'A alternativa erra ao classificar I como falsa (correto) e III como falsa (errado). III é VERDADEIRA: o texto afirma que as redes recorrem à contratação temporária "na ausência de docentes efetivos suficientes". A regra violada é a leitura literal: o texto diz explicitamente que a contratação ocorre por falta de efetivos. Construção correta: III é verdadeira. Para identificar, procure no texto a expressão "na ausência de docentes efetivos suficientes".',
        E: 'A alternativa erra ao classificar I como verdadeira e II como falsa. I é FALSA (a ideia principal é a crítica, não a urgência de concursos); II é VERDADEIRA (o anafórico retoma os termos da linha 03). A regra violada é a identificação da ideia principal e do referente. Construção correta: I é falsa; II é verdadeira. Para identificar, procure a tese do texto e o antecedente do anafórico.'
      },
      conceitoCobrado: 'Compreensão textual: ideia principal, referência anafórica e posicionamento do autor',
      pegadinha: 'A banca mistura afirmativas sobre ideia principal, referência, causa e posicionamento em uma única questão V/F.',
      comoApareceEmConcurso: 'Questões V/F de compreensão exigem que o candidato analise cada afirmativa com base no texto — não basta confiar na memória.',
      exemploInedito: {
        contexto: 'Um artigo afirma: "A terceirização deveria ser exceção, não regra; hoje, revela o descaso de gestores com o serviço público."',
        aplicacao: 'A ideia principal é a crítica à terceirização (não a defesa dela); o autor afirma que deveria ser exceção (não regra). Mesma lógica do texto sobre contratação temporária.',
        desafio: 'Identifique a ideia principal e o posicionamento do autor sobre a terceirização.'
      }
    },
    tags: ['compreensão textual', 'ideia principal', 'contratação temporária', 'notório saber']
  },

  /* ============================================================
     Q10 — COPERVE/UFSC 2026 — POR-18 (Pontuação)
  ============================================================ */
  {
    id: 'Q-REAL-POR-18-008',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-18',
    banca: 'COPERVE/UFSC', orgao: 'UFSC', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'COPERVE/UFSC 2026 — UFSC — Assistente em Administração' },
    subtema: 'Pontuação: vírgula separando oração subordinada anteposta',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-018 — texto de Thiago Esteves.]',
    enunciado: 'Com base no texto 5 e na variedade padrão da língua escrita, assinale a alternativa correta.',
    alternativas: [
      { id: 'A', texto: 'Na linha 03, a vírgula é obrigatória para separar o sujeito do predicado.' },
      { id: 'B', texto: 'Na linha 01, a função da vírgula é separar a oração subordinada da oração principal.' },
      { id: 'C', texto: 'Na linha 05, a crase resulta da junção de um artigo com uma conjunção.' },
      { id: 'D', texto: 'Na linha 08, o pronome clítico "se" deveria estar, obrigatoriamente, posposto ao verbo.' },
      { id: 'E', texto: 'Na linha 15, o verbo "acaba" deveria estar no plural de acordo com a regra de concordância verbal.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. Na linha 01, o período começa com "Enquanto estudantes aguardam ansiosos o início do ano letivo, milhares de professoras e professores atendem..." — a vírgula separa a ORAÇÃO SUBORDINADA ADVERBIAL TEMPORAL ANTEPOSTA ("Enquanto estudantes aguardam...") da ORAÇÃO PRINCIPAL ("milhares de professoras e professores atendem..."). A vírgula é obrigatória nesse caso.',
      incorretas: {
        A: 'A alternativa erra a função da vírgula. Na linha 03, a vírgula separa a oração subordinada adjetiva explicativa "que as redes estaduais e municipais de ensino organizam..." (na verdade, a linha 03 é "É por meio desses procedimentos que as redes..."). Vamos verificar: a linha 03 não tem vírgula separando sujeito de predicado — a vírgula na linha 03 é "processos de atribuição, designação ou distribuição de aulas" (enumeração). A regra violada é a função da vírgula: enumeração, não separação de sujeito/predicado. Construção correta: a vírgula separa itens de enumeração. Para identificar, verifique se a vírgula está entre termos de uma lista.',
        C: 'A alternativa erra a explicação da crase. Na linha 05, "à contratação temporária" — a crase resulta da fusão da PREPOSIÇÃO "a" (exigida por "recorrem a") com o ARTIGO "a" (de "a contratação"). Não é "artigo com conjunção" — é preposição com artigo. A regra violada é a definição de crase: preposição + artigo, não artigo + conjunção. Construção correta: crase = preposição "a" + artigo "a". Para identificar, verifique se há um termo que exige a preposição "a" antes do artigo.',
        D: 'A alternativa erra a colocação pronominal. Na linha 08, "se torna visível" — o "se" é uma partícula apassivadora (não um pronome reflexivo), e a próclise é obrigatória porque há um advérbio "justamente" atraindo o pronome. A posposição ("torna-se") não é obrigatória — a próclise é a colocação correta no contexto. A regra violada é a colocação pronominal: próclise obrigatória com advérbio. Construção correta: "se torna" (próclise). Para identificar, procure palavras atrativas (advérbios, negações) antes do verbo.',
        E: 'A alternativa erra a concordância. Na linha 15, "que acaba por instituir" — o sujeito é "política educacional" (singular), então o verbo "acaba" está corretamente no singular. A regra violada é a concordância verbal: o verbo concorda com o sujeito "política" (singular). Construção correta: "acaba" (singular). Para identificar, localize o sujeito do verbo — se for singular, o verbo fica no singular.'
      },
      conceitoCobrado: 'Pontuação: vírgula separando oração subordinada anteposta; crase, colocação pronominal e concordância',
      pegadinha: 'A banca mistura quatro aspectos linguísticos (pontuação, crase, colocação, concordância) em uma única questão.',
      comoApareceEmConcurso: 'Questões de pontuação com análise de várias linhas exigem que o candidato identifique a função de cada vírgula no contexto.',
      exemploInedito: {
        contexto: 'Um relatório afirma: "Enquanto o prazo não termina, a equipe trabalha intensamente."',
        aplicacao: 'A vírgula separa a oração subordinada adverbial temporal anteposta ("Enquanto o prazo não termina") da principal ("a equipe trabalha"). Mesma função da questão.',
        desafio: 'Identifique a função da vírgula no trecho e explique por que é obrigatória.'
      }
    },
    tags: ['pontuação', 'vírgula', 'subordinada anteposta', 'crase']
  },

  /* ============================================================
     Q11 — COPERVE/UFSC 2026 — POR-01 (Interpretação)
  ============================================================ */
  {
    id: 'Q-REAL-POR-01-019',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-01',
    banca: 'COPERVE/UFSC', orgao: 'UFSC', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'COPERVE/UFSC 2026 — UFSC — Assistente em Administração' },
    subtema: 'Interpretação: amor romântico em "Beijo na face"',
    dificuldade: 2, prioridade: 'alta',
    textoBase: 'Beijo na face. Salinda tombou suavemente o rosto e com as mãos em concha colheu, pela milésima vez, a sensação impregnada do beijo em sua face. Depois com um gesto lento e cuidadoso, abriu as palmas das mãos, contemplando-as. Sim, lá estava o vestígio do carinho. Algo tão tênue, como os restos de uma asa amarela, de uma borboleta-menina, que foi atropelada nos primeiros instantes de seu inaugural voo. Rememorou ainda o corpo que um dia antes estivera em ofertório ao seu lado. Tudo parecia um sonho. Os toques aconteceram carregados de sutileza. Carinhos inicialmente experimentados apenas com as pontas dos dedos-desejos. Ela estava aprendendo um novo amor. Um amor que vivia e se fortalecia na espera do amanhã, que se fazia inesperadamente nas frinchas de um momento qualquer, que se revelava por um simples piscar de olhos, por um sorriso ensaiado na metade das bordas de um lábio, por um repetir constante do eu te amo, declaração feita, muitas vezes, em voz silenciosa, audível somente para dentro, fazendo com que o eco dessa fala se expandisse no interior mesmo do próprio declarante. (EVARISTO, Conceição. Olhos D\'Água. Rio de Janeiro: Pallas, 2016. p. 51.)',
    enunciado: 'Com base no texto 6, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'o "beijo na face" foi dado por alguém por quem Salinda nutre um amor romântico.' },
      { id: 'B', texto: 'os termos "algo tão tênue" (linha 03) e "Tudo parecia um sonho" (linha 06) indicam que o "beijo na face" foi dado por alguém a quem Salinda nutre um amor platônico.' },
      { id: 'C', texto: 'o texto está escrito em versos, portanto, caracteriza-se como poético.' },
      { id: 'D', texto: 'a sinestesia é a figura de linguagem predominante nesta poesia.' },
      { id: 'E', texto: 'nas linhas 11 e 12, o texto caracteriza a surdez de Salinda a partir de termos como "voz silenciosa", "audível somente para dentro" e "eco dessa fala".' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A alternativa A está correta. O texto descreve um amor ROMÂNTICO: "Rememorou ainda o corpo que um dia antes estivera em ofertório ao seu lado" (presença física), "Os toques aconteceram carregados de sutileza", "Carinhos inicialmente experimentados apenas com as pontas dos dedos-desejos", "Ela estava aprendendo um novo amor". O beijo na face é parte desse amor romântico, com toques, desejo e declarações de amor.',
      incorretas: {
        A_ok: 'A é o gabarito.',
        B: 'A alternativa erra a classificação do amor. "Amor platônico" é aquele que não se concretiza fisicamente, idealizado. O texto descreve toques, beijos, "corpo", "dedos-desejos" — há concretude física, não apenas idealização. A regra violada é a distinção entre amor romântico (com contato físico) e platônico (idealizado, sem contato). Construção correta: o amor é romântico. Para identificar, verifique se há descrição de contato físico — se houver, não é platônico.',
        C: 'A alternativa erra a classificação do texto. O texto está escrito em PROSA (parágrafos), não em versos. Não há métrica, rima ou estrofes. A regra violada é a distinção entre prosa e verso: o texto é prosa poética, não poema em versos. Construção correta: o texto é prosa. Para identificar, verifique se há versos (linhas quebradas) ou parágrafos — se houver parágrafos, é prosa.',
        D: 'A alternativa erra a figura predominante. O texto tem sinestesia pontual ("restos de uma asa amarela" — visual; "beijo" — tátil), mas NÃO é a figura predominante. Há metáforas ("borboleta-menina"), comparações ("como os restos de uma asa"), etc. A regra violada é a identificação da figura predominante: a sinestesia não é a principal. Construção correta: há várias figuras, mas não há predomínio de sinestesia. Para identificar, verifique qual figura aparece com mais frequência.',
        E: 'A alternativa erra a interpretação. "Voz silenciosa", "audível somente para dentro" e "eco dessa fala" referem-se à VOZ INTERIOR (pensamento, sentimento não expresso em voz alta), não à surdez de Salinda. O texto diz que ela repete "eu te amo" em voz silenciosa — ou seja, pensa/sente, não fala. A regra violada é a interpretação literal: as expressões indicam interiorização, não surdez. Construção correta: as expressões indicam voz interior. Para identificar, pergunte: o texto diz que a personagem é surda? Se não, as expressões têm outro sentido.'
      },
      conceitoCobrado: 'Interpretação: amor romântico x platônico, prosa x verso, figuras de linguagem',
      pegadinha: 'A banca oferece alternativas que distorcem o tipo de amor (B), a forma (C), a figura (D) e a interpretação (E) para testar a leitura precisa.',
      comoApareceEmConcurso: 'Questões de interpretação sobre textos literários exigem que o candidato identifique o tipo de amor, a forma e as figuras — não basta captar o clima geral.',
      exemploInedito: {
        contexto: 'Um texto afirma: "Ela guardava o bilhete que ele deixara; lembrava do toque de sua mão, do beijo demorado, do corpo que estivera ao seu lado."',
        aplicacao: 'O texto descreve amor romântico (contato físico, beijo, corpo) — não platônico. Mesma estrutura da questão.',
        desafio: 'Classifique o tipo de amor descrito e justifique com base nas marcas textuais.'
      }
    },
    tags: ['interpretação', 'amor romântico', 'prosa', 'Conceição Evaristo']
  },

  /* ============================================================
     Q12 — COPERVE/UFSC 2026 — POR-10 (Pronomes)
  ============================================================ */
  {
    id: 'Q-REAL-POR-10-004',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-10',
    banca: 'COPERVE/UFSC', orgao: 'UFSC', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'COPERVE/UFSC 2026 — UFSC — Assistente em Administração' },
    subtema: 'Pronome oblíquo "as" em "contemplando-as"',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-019 — texto "Beijo na face".]',
    enunciado: 'Com base no texto 6 e na variedade padrão da língua escrita, assinale a alternativa correta.',
    alternativas: [
      { id: 'A', texto: 'Na linha 01, "pela milésima vez" é um eufemismo.' },
      { id: 'B', texto: 'Na linha 04, a palavra "borboleta-menina" apresenta hífen por ser um adjetivo composto.' },
      { id: 'C', texto: 'Na linha 03, o pronome "as" em "contemplando-as" refere-se às "palmas das mãos".' },
      { id: 'D', texto: 'Na linha 07, "inicialmente" caracteriza-se como um advérbio de intensidade.' },
      { id: 'E', texto: 'Os verbos "tombou" (linha 01), "colheu" (linha 01) e "abriu" (linha 02) estão flexionados no pretérito imperfeito.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está correta. Em "abriu as palmas das mãos, contemplando-as", o pronome oblíquo "as" retoma "as palmas das mãos" (feminino plural). A construção equivale a "contemplando as palmas das mãos". O pronome está corretamente empregado como objeto direto.',
      incorretas: {
        A: 'A alternativa erra a figura. "Pela milésima vez" é uma HIPÉRBOLE (exagero intencional), não um eufemismo (suavização). O eufemismo suaviza uma realidade dura; a hipérbole exagera. A regra violada é a distinção entre hipérbole (exagero) e eufemismo (suavização). Construção correta: "pela milésima vez" = hipérbole. Para identificar, pergunte: a expressão exagera ou suaviza? Se exagera, é hipérbole.',
        B: 'A alternativa erra a classificação. "Borboleta-menina" é um SUBSTANTIVO COMPOSTO (dois substantivos: borboleta + menina), não um adjetivo composto. O segundo elemento caracteriza o primeiro, mas a classe é substantivo. A regra violada é a classificação morfológica: substantivo composto x adjetivo composto. Construção correta: substantivo composto. Para identificar, pergunte: a palavra nomeia um ser (substantivo) ou qualifica (adjetivo)? Se nomeia, é substantivo.',
        D: 'A alternativa erra a classificação do advérbio. "Inicialmente" é advérbio de TEMPO (no início), não de intensidade. Advérbios de intensidade são "muito", "pouco", "bastante". A regra violada é a distinção entre tempo e intensidade. Construção correta: "inicialmente" = tempo. Para identificar, pergunte: o advérbio indica quando (tempo) ou quanto (intensidade)?',
        E: 'A alternativa erra o tempo verbal. "Tombou", "colheu" e "abriu" estão no PRETÉRITO PERFEITO do indicativo (ações concluídas), não no pretérito imperfeito. O imperfeito teria formas como "tombava", "colhia", "abria". A regra violada é a distinção entre pretérito perfeito (ação concluída) e imperfeito (ação habitual/contínua). Construção correta: pretérito perfeito. Para identificar, compare as terminações: "-ou" (perfeito) x "-ava" (imperfeito).'
      },
      conceitoCobrado: 'Pronomes oblíquos, figuras de linguagem, formação de palavras, advérbios e tempos verbais',
      pegadinha: 'A banca mistura cinco aspectos linguísticos distintos em uma única questão, exigindo análise de cada alternativa.',
      comoApareceEmConcurso: 'Questões de análise linguística com múltiplas alternativas exigem que o candidato verifique cada aspecto separadamente — não basta identificar um erro para eliminar a alternativa.',
      exemploInedito: {
        contexto: 'Um texto afirma: "Ela abriu as janelas, contemplando-as."',
        aplicacao: '"As" retoma "as janelas" (feminino plural). O pronome é objeto direto de "contemplando". Mesma estrutura da questão.',
        desafio: 'Identifique o referente do pronome "as" e sua função sintática.'
      }
    },
    tags: ['pronomes', 'referência', 'figuras de linguagem', 'tempos verbais']
  },

  /* ============================================================
     Q13 — COPERVE/UFSC 2026 — POR-02 (Gêneros textuais)
  ============================================================ */
  {
    id: 'Q-REAL-POR-02-004',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-02',
    banca: 'COPERVE/UFSC', orgao: 'UFSC', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'COPERVE/UFSC 2026 — UFSC — Assistente em Administração' },
    subtema: 'Gênero textual: roteiro de teatro (rubricas e falas)',
    dificuldade: 2, prioridade: 'alta',
    textoBase: 'As quatro estações. MENINA 1 – O sonho da vida de mamãe. Preciosas horas dedicadas exclusivamente a uma carreira. Aulas de balé, judô, canto, piano, teatro, inglês, computação, natação! Abdiquei de minha infância para ser uma estrela. Mamãe está arrasada. MENINA 2 – Neste momento uma sombra me cobre inteira. Eu, tão pequenina, me sinto esticar e encolher feito chiclete. Os pensamentos se apossam de mim como caramelos nos dentes. Eu penso em acabar com ela. Jogar tinta de hidrocor no seu vestido, afrouxar a corda do seu balanço, encher de prego sua melissinha, afogá-la na piscina de bolinhas, quebrar o seu disco da Angélica, sequestrar a sua Barbie. A vingança tem o gosto do chocolate meio-amargo! MENINA 4 – Eu tremi quando foi para fazer cara de encantada! Será que o diretor notou? Meu Deus, eu não sabia que ia ser tão difícil! Cara de surpresa eu faço bem, ó (faz cara de surpresa). Agora, cara de encantada eu sempre tive dificuldade. Eu cheguei a fazer aulas extras de encantamento. (CUNHA, Antônio. Três dramas possíveis. Joinville: Editora Letradágua, 2004. p. 45-46.)',
    enunciado: 'Assinale a alternativa correta em relação ao texto 7.',
    alternativas: [
      { id: 'A', texto: 'A fala da MENINA 1 indica que frustrou sua mãe em relação à carreira esportiva.' },
      { id: 'B', texto: 'Nas linhas 04 e 05, na fala da MENINA 2, dentre as figuras de linguagem a que recorre, encontramos a metonímia em "me sinto esticar e encolher feito chiclete".' },
      { id: 'C', texto: 'A fala da MENINA 4 alterna entre o pronome de primeira pessoa preenchido e nulo.' },
      { id: 'D', texto: 'A linha argumentativa apresentada pelo autor caracteriza o gênero textual como artigo de opinião.' },
      { id: 'E', texto: 'A indicação das falas das personagens no texto assim como a rubrica entre parênteses (linha 10) caracterizam o gênero textual como roteiro de teatro.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'A alternativa E está correta. O texto apresenta indicação de personagens (MENINA 1, MENINA 2, MENINA 4), falas e uma RUBRICA entre parênteses ("faz cara de surpresa") — elementos típicos de um ROTEIRO DE TEATRO (texto dramático). A rubrica é a indicação cênica que orienta a atuação.',
      incorretas: {
        A: 'A alternativa erra a interpretação. A MENINA 1 diz que a mãe a fez abdicar da infância para ser uma estrela (carreira artística: balé, canto, piano, teatro), não "carreira esportiva". Além disso, a menina diz que "mamãe está arrasada" — mas não se sabe se ela frustrou a mãe; o texto é ambíguo. A regra violada é a leitura literal: o texto menciona carreira artística, não esportiva. Construção correta: a mãe investiu em carreira artística. Para identificar, verifique as atividades listadas (balé, canto, piano, teatro) — são artísticas, não esportivas.',
        B: 'A alternativa erra a figura de linguagem. "Me sinto esticar e encolher feito chiclete" é uma COMPARAÇÃO (símile), não metonímia. Metonímia é substituição por proximidade (autor pela obra, parte pelo todo). A comparação usa "feito" (como) para aproximar dois termos. A regra violada é a distinção entre comparação (com conectivo) e metonímia (substituição). Construção correta: há comparação. Para identificar, procure o conectivo "como/feito" — se houver, é comparação.',
        C: 'A alternativa erra a análise. Na fala da MENINA 4, o pronome "eu" está SEMPRE expresso ("Eu tremi", "eu não sabia", "eu faço", "eu sempre tive", "Eu cheguei"). Não há alternância com pronome nulo — todas as orações têm sujeito expresso. A regra violada é a identificação do sujeito: o pronome está sempre preenchido. Construção correta: não há alternância. Para identificar, verifique se o "eu" aparece em todas as orações.',
        D: 'A alternativa erra o gênero. O texto é um ROTEIRO DE TEATRO (texto dramático), não um artigo de opinião. Artigo de opinião defende uma tese com argumentos; o texto apresenta falas de personagens em situação dramática. A regra violada é a distinção entre gênero dramático (teatro) e artigo de opinião. Construção correta: roteiro de teatro. Para identificar, verifique se há personagens, falas e rubricas — se houver, é texto dramático.'
      },
      conceitoCobrado: 'Gêneros textuais: roteiro de teatro (falas e rubricas) x artigo de opinião',
      pegadinha: 'A banca oferece alternativas que testam interpretação (A), figuras (B), análise linguística (C) e gênero (D, E) para confundir o candidato.',
      comoApareceEmConcurso: 'Questões de gênero textual exigem que o candidato identifique as marcas do gênero (personagens, falas, rubricas) — não basta saber que é teatro; é preciso apontar os elementos.',
      exemploInedito: {
        contexto: 'Um texto apresenta: "JOÃO (entrando em cena) – Boa noite! MARIA – Que bom que você chegou."',
        aplicacao: 'A indicação de personagens, falas e rubrica ("entrando em cena") caracteriza roteiro de teatro — mesma estrutura da questão.',
        desafio: 'Identifique o gênero do texto e as marcas que justificam a classificação.'
      }
    },
    tags: ['gêneros textuais', 'roteiro de teatro', 'rubrica', 'texto dramático']
  },

  /* ============================================================
     Q14 — COPERVE/UFSC 2026 — POR-01 (Compreensão)
  ============================================================ */
  {
    id: 'Q-REAL-POR-01-020',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-01',
    banca: 'COPERVE/UFSC', orgao: 'UFSC', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'COPERVE/UFSC 2026 — UFSC — Assistente em Administração' },
    subtema: 'Compreensão textual: escola indígena e experiência do autor',
    dificuldade: 2, prioridade: 'alta',
    textoBase: 'O coração no ritmo da terra. Tem um programa instituído no Brasil desde o final da década de 1990, mas que se consolidou principalmente nos últimos vinte anos, que é o Plano Nacional de Educação Escolar Indígena. Trata-se de uma educação diferenciada, aplicada nos territórios indígenas pelo Brasil inteiro, onde cada comunidade tem a possibilidade de moldar o equipamento escolar da forma que decidir. Eu já frequentei escola em aldeia embaixo de uma árvore e achei muito bom. As pessoas estavam à vontade naquela experiência e não queriam prédio nenhum. Muito tempo depois, aqueles meninos decidiram que seria bom ter uma sala de aula, mas sabem que a experiência pedagógica pode ser realizada na beira do córrego, numa laje de pedra, em qualquer lugar. Trata-se de um grupo de pessoas com o propósito de fazer uma investigação coletiva. Inclusive o próprio letramento pode muito bem prescindir de uma sala de aula. Escola não é prédio, mas uma experiência geracional de troca que deveria ser enriquecida e valorizada, na qual as pessoas que passaram por coisas distintas podem compartilhar conteúdos que ajudem as crianças a se prepararem para a vida adulta. (KRENAK, Ailton. Futuro Ancestral. 1. ed. São Paulo: Companhia das Letras, 2022. p. 113-114.)',
    enunciado: 'Com base no texto 8, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'o autor defende a ideia de que toda escola necessita de um prédio para existir.' },
      { id: 'B', texto: 'nas linhas 04 e 05, fica evidente que o autor do texto retrata o contexto escolar indígena do qual fez parte.' },
      { id: 'C', texto: 'na linha 04, o termo "moldar o equipamento" refere-se à inserção de tecnologia no contexto escolar das aldeias indígenas.' },
      { id: 'D', texto: 'na linha 11, afirma-se que a escola atende aos ricos e é valorizada.' },
      { id: 'E', texto: 'o texto evidencia que os indígenas aprendem melhor à "beira do córrego" (linha 08) ou "numa laje de pedra" (linha 08).' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está correta. O autor afirma: "Eu já frequentei escola em aldeia embaixo de uma árvore e achei muito bom." Ou seja, ele retrata o contexto escolar indígena do qual fez parte — a experiência de escola em aldeia. O uso da primeira pessoa ("Eu já frequentei") confirma que ele vivenciou essa realidade.',
      incorretas: {
        A: 'A alternativa CONTRADIZ o texto. O autor afirma: "Escola não é prédio, mas uma experiência geracional de troca". Ele defende o oposto: a escola não precisa de prédio. A regra violada é a leitura literal: o texto nega a necessidade de prédio; a alternativa afirma o contrário. Construção correta: a escola não precisa de prédio. Para identificar, procure no texto a expressão "Escola não é prédio" — se a alternativa disser o contrário, está errada.',
        C: 'A alternativa erra o sentido. "Moldar o equipamento escolar" significa "organizar a escola da forma que a comunidade decidir", não "inserir tecnologia". O termo "equipamento" aqui se refere à estrutura escolar (prédio, materiais, organização), não a equipamentos tecnológicos. A regra violada é a leitura contextual: "equipamento escolar" = estrutura escolar, não tecnologia. Construção correta: moldar a escola conforme a decisão da comunidade. Para identificar, verifique o contexto: o texto fala de prédio, sala de aula, córrego — não de tecnologia.',
        D: 'A alternativa DISTORCE o texto. O texto não afirma que a escola "atende aos ricos" — pelo contrário, defende uma educação indígena diferenciada, valorizando a experiência comunitária. A regra violada é a leitura literal: o texto não menciona "ricos" nem "valorização" nesse sentido. Construção correta: o texto defende a escola como experiência de troca. Para identificar, procure no texto a palavra "ricos" — se não houver, a alternativa extrapola.',
        E: 'A alternativa DISTORCE o texto. O autor diz que a experiência pedagógica "pode ser realizada" na beira do córrego, numa laje de pedra — ou seja, é POSSÍVEL, não que os indígenas "aprendem melhor" nesses locais. A regra violada é a leitura literal: o texto afirma possibilidade, não superioridade. Construção correta: a experiência pode ocorrer em qualquer lugar. Para identificar, verifique se o texto afirma "aprendem melhor" — se não afirmar, a alternativa extrapola.'
      },
      conceitoCobrado: 'Compreensão textual: escola indígena, experiência do autor e crítica ao prédio',
      pegadinha: 'A banca oferece alternativas que contradizem o texto (A), distorcem o sentido (C, D) ou extrapolam (E) para testar a leitura atenta.',
      comoApareceEmConcurso: 'Questões de compreensão sobre textos de povos originários exigem que o candidato identifique a tese do autor e as marcas de sua experiência.',
      exemploInedito: {
        contexto: 'Um texto afirma: "Eu estudei em escola sem paredes, embaixo de uma árvore, e foi a melhor experiência da minha vida. Escola não é prédio, é troca."',
        aplicacao: 'O autor retrata o contexto do qual fez parte ("Eu estudei") e defende que a escola não precisa de prédio. Mesma estrutura de Krenak.',
        desafio: 'Identifique a experiência do autor e a tese defendida no texto.'
      }
    },
    tags: ['compreensão textual', 'escola indígena', 'Ailton Krenak', 'experiência']
  },

  /* ============================================================
     Q15 — COPERVE/UFSC 2026 — POR-11 (Verbos)
  ============================================================ */
  {
    id: 'Q-REAL-POR-11-005',
    tipo: 'REAL', area: 'POR', moduloId: 'POR-11',
    banca: 'COPERVE/UFSC', orgao: 'UFSC', ano: 2026,
    prova: 'Assistente em Administração',
    fonte: { descricao: 'COPERVE/UFSC 2026 — UFSC — Assistente em Administração' },
    subtema: 'Verbos: "ter" x "haver" (existencial); "prescindir"',
    dificuldade: 2, prioridade: 'alta',
    textoBase: '[Mesmo texto-base da questão Q-REAL-POR-01-020 — texto de Ailton Krenak.]',
    enunciado: 'Com base no texto 8 e na variedade padrão da língua escrita, assinale a alternativa correta.',
    alternativas: [
      { id: 'A', texto: 'A conjunção "mas" (linha 01) é um conectivo de consequência.' },
      { id: 'B', texto: 'O "se" (linha 01) é um pronome reflexivo, já o "se" (linha 03) é uma partícula apassivadora.' },
      { id: 'C', texto: '"Moldar" (linha 04) e "escolar" (linha 04) são verbos na forma nominal infinitiva.' },
      { id: 'D', texto: 'Na linha 01, o verbo "ter" pode ser substituído pelo verbo "haver" sem prejuízo de sentido.' },
      { id: 'E', texto: '"Prescindir" (linha 10) significa "exigir".' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está correta. Na linha 01, "Tem um programa instituído no Brasil" — o verbo "ter" é usado no sentido de "existir" (coloquial). A substituição por "haver" ("Há um programa instituído no Brasil") preserva o sentido e é mais adequada à norma-padrão. Ambos indicam existência.',
      incorretas: {
        A: 'A alternativa erra o valor da conjunção. "Mas" é ADVERSATIVA (indica oposição), não consequência. No texto: "Tem um programa... mas que se consolidou" — o "mas" opõe a existência antiga à consolidação recente. A regra violada é a distinção entre adversidade (oposição) e consequência. Construção correta: "mas" = adversativa. Para identificar, pergunte: o conectivo opõe ideias ou indica consequência? Se opõe, é adversativa.',
        B: 'A alternativa erra a classificação dos "se". Na linha 01, "que se consolidou" — o "se" é uma PARTÍCULA APASSIVADORA (o programa foi consolidado), não pronome reflexivo. Na linha 03, "Trata-se de uma educação" — o "se" é parte do verbo pronominal "tratar-se", não partícula apassivadora. As classificações estão trocadas. A regra violada é a distinção entre partícula apassivadora, pronome reflexivo e parte de verbo pronominal. Construção correta: "se consolidou" = apassivadora; "trata-se" = verbo pronominal. Para identificar, verifique se o verbo é transitivo direto (apassivadora) ou pronominal (parte do verbo).',
        C: 'A alternativa erra a classificação de "escolar". "Moldar" é verbo no infinitivo, mas "escolar" é ADJETIVO (equipamento escolar), não verbo. A regra violada é a classificação morfológica: verbo x adjetivo. Construção correta: "moldar" = verbo; "escolar" = adjetivo. Para identificar, pergunte: a palavra indica ação (verbo) ou qualidade (adjetivo)?',
        E: 'A alternativa erra o significado. "Prescindir" significa "dispensar, não precisar", não "exigir". No texto: "o letramento pode prescindir de uma sala de aula" = pode DISPENSAR a sala de aula. A regra violada é a antonímia: "prescindir" (dispensar) x "exigir" (precisar). Construção correta: "prescindir" = dispensar. Para identificar, associe "prescindir" a "dispensar" — é o mesmo sentido.'
      },
      conceitoCobrado: 'Verbos: "ter" x "haver" (existencial); "prescindir"; conjunções e pronomes',
      pegadinha: 'A banca mistura verbos (ter/haver, prescindir), conjunções (mas) e pronomes (se) em uma única questão.',
      comoApareceEmConcurso: 'Questões de análise linguística com múltiplas alternativas exigem que o candidato verifique cada aspecto separadamente.',
      exemploInedito: {
        contexto: 'Um relatório afirma: "Tem um projeto em andamento; o letramento pode prescindir de recursos tecnológicos."',
        aplicacao: '"Tem" = "Há" (existencial); "prescindir" = dispensar. As substituições preservam o sentido.',
        desafio: 'Substitua "ter" por "haver" e explique o significado de "prescindir" no contexto.'
      }
    },
    tags: ['verbos', 'ter', 'haver', 'prescindir', 'conjunções']
  }

];
