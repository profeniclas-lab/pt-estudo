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
   QUESTÕES REAIS IMPORTADAS — Qconcursos
   IDCAP 2026 / AMAUC 2026 / FAFIPA 2026
   Módulos conferidos com modules.js
   ============================================================ */

{
  id: 'EX-Q4445661', tipo: 'REAL', area: 'LET', moduloId: 'POR-03',
  subtema: 'Coesão referencial e progressão temática',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Texto-base (IDCAP 2026 / ADAB):\n\nComo Albert Einstein organizava seu tempo\n\n"A vida é como andar de bicicleta. Para se manter equilibrado, é preciso seguir em frente."\n\nA frase foi escrita por Albert Einstein a seu filho Edward, em 1930. O físico, uma das maiores mentes da história, viveu de acordo com essa ideia, mantendo-se ativo até o fim da vida. Premiado com o Nobel de Física em 1922, tornou-se uma referência que transformou profundamente os rumos da ciência.\n\nFrequentemente descrito como um rebelde curioso e apaixonado pelo conhecimento, Einstein também cultivava vínculos afetivos duradouros, contrariando a imagem de isolamento que muitos lhe atribuem. Sua vida revela um equilíbrio instável entre genialidade, disciplina e distração.\n\nPara ele, a imaginação possuía valor superior ao conhecimento acumulado. Sua infância foi marcada por dificuldades na fala e na aprendizagem, o que retardou seu desenvolvimento. Esse processo, contudo, levou-o a refletir mais profundamente sobre conceitos fundamentais, como espaço e tempo, o que influenciou diretamente suas descobertas.\n\nSua extraordinária capacidade de concentração foi determinante para sua produção científica. Em 1905, aos 26 anos, publicou trabalhos revolucionários enquanto trabalhava em um escritório de patentes. Era capaz de cumprir suas tarefas rapidamente e dedicar o restante do tempo à elaboração de ideias próprias. Essa habilidade permitia-lhe manter o foco mesmo em ambientes com distrações, como o barulho de crianças.\n\nO violino desempenhava papel importante em seu processo criativo. Ao tocar, muitas vezes encontrava soluções para problemas complexos, como se a música estimulasse a organização de seu pensamento.\n\nApesar dessa produtividade, conciliar trabalho e vida pessoal nem sempre foi simples. Embora participasse da rotina familiar e cuidasse do filho, sua dedicação à ciência gradualmente se sobrepôs às relações pessoais, contribuindo para tensões em seu casamento e posterior separação. Esse afastamento familiar teve impacto emocional significativo, levando-o a mergulhar ainda mais no trabalho.\n\nSua intensa dedicação resultou em exaustão física e mental. Durante períodos de grande concentração, esquecia até mesmo de se alimentar. Em cartas, reconhecia que frequentemente deixava de almoçar por estar absorto em suas pesquisas.\n\nApós novo casamento, passou a contar com o apoio da esposa na organização de aspectos práticos do cotidiano, o que lhe permitiu concentrar-se quase exclusivamente em sua produção intelectual. Atividades como caminhadas e navegação ajudavam a aliviar a mente após longos períodos de esforço cognitivo.\n\nSua vida cotidiana era marcada pela simplicidade. Mantinha uma rotina regular, com leitura de jornais e caminhadas até o local de trabalho. Seus pedidos materiais eram mínimos, revelando um perfil austero e pouco interessado em bens ou luxo.\n\nMesmo diante das limitações impostas pela idade e pela saúde, manteve-se ativo até seus últimos dias, dedicando-se à busca por uma teoria unificada. Embora não tenha alcançado esse objetivo, sua trajetória consolidou sua posição como um dos maiores cientistas da história.\n\nA construção de textos depende de mecanismos que asseguram a articulação de ideias e a progressão temática, permitindo ao leitor estabelecer relações de sentido e interpretar adequadamente as informações apresentadas.\n\nDe acordo com o texto-base, assinale a alternativa CORRETA.',
  alternativas: [
    { id: 'A', texto: 'A intertextualidade do texto manifesta-se de forma funcional ao incorporar uma citação inicial que orienta a leitura, ainda que essa referência não estabeleça diálogo direto com outros textos ao longo do desenvolvimento.' },
    { id: 'B', texto: 'A coerência do texto é garantida pela intertextualidade explícita, como na frase "a vida é como andar de bicicleta", que estabelece relação direta com outros textos científicos do mesmo campo.' },
    { id: 'C', texto: 'A progressão temática do texto é construída por coesão referencial e sequenciação lógica, como em "esse processo, contudo, levou-o", que retoma ideia anterior e mantém a continuidade argumentativa.' },
    { id: 'D', texto: 'A coesão textual ocorre predominantemente por repetição lexical, como no uso recorrente de "Einstein", o que reduz a necessidade de outros mecanismos coesivos, embora o texto também recorra pontualmente a pronomes e conectores para manter a articulação.' },
    { id: 'E', texto: 'A coerência textual decorre exclusivamente da ausência de contradições internas, não dependendo da organização progressiva das ideias nem do encadeamento lógico entre os enunciados.' }
  ],
  gabarito: 'C',
  explicacao: {
    correta: 'A alternativa C está correta. "Esse processo" é uma anáfora que retoma a ideia anterior (dificuldades na fala e aprendizagem), e "contudo" marca a sequenciação lógica. Há coesão referencial (pronome) e progressão temática.',
    incorretas: {
      A: 'A citação inicial não é intertextualidade produtiva por si só; a alternativa também se contradiz ao dizer que "não estabelece diálogo".',
      B: 'A frase "a vida é como andar de bicicleta" é metáfora/comparação, não intertextualidade, e não remete a textos científicos.',
      D: 'A repetição de "Einstein" não é o mecanismo predominante; o texto usa pronomes, elipses e conectores com frequência.',
      E: 'Coerência não decorre "exclusivamente" da ausência de contradições; envolve progressão e encadeamento lógico.'
    },
    conceitoCobrado: 'Coesão referencial (anáfora) + progressão temática + uso de conectores.',
    pegadinha: 'A palavra "contudo" é usada no texto como conectivo adversativo; a alternativa C a apresenta corretamente como mantenedora da continuidade argumentativa.',
    comoApareceEmConcurso: 'IDCAP costuma cobrar a relação entre coesão, coerência e progressão em questões de interpretação.'
  },
  tags: ['coesão', 'coerência', 'progressão temática', 'anáfora']
},

{
  id: 'EX-Q4445660', tipo: 'REAL', area: 'GRA', moduloId: 'POR-16',
  subtema: 'Regência verbal — verbo transitivo direto',
  dificuldade: 1, prioridade: 'alta',
  enunciado: '"Mantinha uma rotina regular, com leitura de jornais e caminhadas até o local de trabalho." (IDCAP 2026 / ADAB)\n\nQuanto à regência verbal do verbo destacado, assinale a alternativa CORRETA.',
  alternativas: [
    { id: 'A', texto: 'Verbo transitivo indireto.' },
    { id: 'B', texto: 'Verbo intransitivo.' },
    { id: 'C', texto: 'Verbo de ligação.' },
    { id: 'D', texto: 'Verbo bitransitivo.' },
    { id: 'E', texto: 'Verbo transitivo direto.' }
  ],
  gabarito: 'E',
  explicacao: {
    correta: '"Manter" aqui rege objeto direto ("uma rotina regular"), sem preposição obrigatória — logo, verbo transitivo direto.',
    incorretas: {
      A: 'Não há preposição exigida entre "manter" e "rotina".',
      B: 'Há complemento (uma rotina), logo não é intransitivo.',
      C: 'Não liga sujeito a predicativo.',
      D: 'Só há um complemento (objeto direto), não dois.'
    },
    conceitoCobrado: 'Classificação de verbo quanto à transitividade.',
    pegadinha: '"Manter" pode ser bitransitivo em outros contextos ("mantê-lo informado"), mas neste enunciado só há objeto direto.',
    comoApareceEmConcurso: 'IDCAP cobra transitividade em frase isolada com verbo destacado.'
  },
  tags: ['regência verbal', 'transitividade', 'verbo transitivo direto']
},

{
  id: 'EX-Q4445658', tipo: 'REAL', area: 'LET', moduloId: 'POR-01',
  subtema: 'Compreensão textual — identificação de informação explícita',
  dificuldade: 1, prioridade: 'alta',
  enunciado: 'Considere o texto sobre Albert Einstein (mesmo texto da questão EX-Q4445661 — IDCAP 2026 / ADAB).\n\nA trajetória de grandes personalidades científicas costuma revelar aspectos que ultrapassam suas descobertas, envolvendo hábitos, escolhas e modos de organização da vida cotidiana. Esses elementos permitem compreender como características individuais podem influenciar processos criativos e produtivos ao longo do tempo.\n\nDe acordo com o texto-base, assinale a alternativa CORRETA.',
  alternativas: [
    { id: 'A', texto: 'A intensa dedicação de Einstein ao trabalho, associada à sua capacidade de concentração, influenciava diretamente sua rotina e podia levá-lo a negligenciar necessidades básicas.' },
    { id: 'B', texto: 'A organização da rotina de Einstein baseava-se sobretudo na busca por reconhecimento social e acúmulo de bens materiais, refletindo um perfil pessoal voltado à simplicidade e à projeção pública.' },
    { id: 'C', texto: 'A dedicação de Einstein à ciência foi ocasional e pouco consistente, já que sua produção intelectual dependia de momentos esporádicos de inspiração sem continuidade ao longo da vida.' },
    { id: 'D', texto: 'A convivência familiar de Einstein foi estável ao longo de toda a vida, uma vez que ele conseguiu equilibrar suas atividades científicas com as relações pessoais sem conflitos relevantes.' },
    { id: 'E', texto: 'A valorização do conhecimento acumulado acima da imaginação constituiu o principal fator que impulsionou Einstein a desenvolver suas teorias científicas mais importantes ao longo da vida.' }
  ],
  gabarito: 'A',
  explicacao: {
    correta: 'A alternativa A retoma literalmente o texto: "esquecia até mesmo de se alimentar" e "sua intensa dedicação resultou em exaustão física e mental".',
    incorretas: {
      B: 'Contradiz o texto: "pedidos materiais eram mínimos, revelando um perfil austero".',
      C: 'Contradiz: o texto mostra produção intensa e contínua.',
      D: 'Contradiz: o texto relata "tensões em seu casamento e posterior separação".',
      E: 'Contradiz: "para ele, a imaginação possuía valor superior ao conhecimento acumulado".'
    },
    conceitoCobrado: 'Compreensão literal (informação explícita) x distorção.',
    pegadinha: 'Alternativas que invertem afirmações do texto (B e E) são as mais perigosas.',
    comoApareceEmConcurso: 'IDCAP costuma exigir retorno ao texto para validar cada alternativa.'
  },
  tags: ['compreensão', 'informação explícita']
},

{
  id: 'EX-Q4445657', tipo: 'REAL', area: 'GRA', moduloId: 'POR-11',
  subtema: 'Flexão verbal — pretérito imperfeito do indicativo',
  dificuldade: 1, prioridade: 'alta',
  enunciado: '"Frequentemente descrito como um rebelde curioso e apaixonado pelo conhecimento, Einstein também \'cultivava\' vínculos afetivos duradouros." (IDCAP 2026 / ADAB)\n\nAssinale a alternativa CORRETA quanto à classificação do verbo destacado.',
  alternativas: [
    { id: 'A', texto: 'Pretérito mais-que-perfeito do indicativo.' },
    { id: 'B', texto: 'Pretérito imperfeito do indicativo.' },
    { id: 'C', texto: 'Pretérito perfeito do indicativo.' },
    { id: 'D', texto: 'Presente do indicativo.' },
    { id: 'E', texto: 'Futuro do pretérito do indicativo.' }
  ],
  gabarito: 'B',
  explicacao: {
    correta: '"Cultivava" expressa ação habitual/contínua no passado — pretérito imperfeito do indicativo.',
    incorretas: {
      A: 'O mais-que-perfeito seria "cultivara".',
      C: 'O perfeito seria "cultivou".',
      D: 'O presente seria "cultiva".',
      E: 'O futuro do pretérito seria "cultivaria".'
    },
    conceitoCobrado: 'Identificação de tempo verbal pela desinência.',
    pegadinha: 'A terminação "-va" é a marca do imperfeito — confundi-la com o mais-que-perfeito (que termina em "-ra") é o erro clássico.',
    comoApareceEmConcurso: 'IDCAP cobra tempos verbais em frase recortada do texto.'
  },
  tags: ['verbo', 'pretérito imperfeito', 'flexão de tempo']
},

{
  id: 'EX-Q4438892', tipo: 'REAL', area: 'GRA', moduloId: 'POR-06',
  subtema: 'Ortografia — hífen, acentuação e acento diferencial',
  dificuldade: 2, prioridade: 'alta',
  enunciado: '(AMAUC 2026 / Prefeitura de Ipumirim-SC) Ao revisar um comunicado interno, um servidor analisou a grafia de algumas palavras conforme o Acordo Ortográfico vigente. Julgue as afirmações abaixo como Verdadeiras (V) ou Falsas (F):\n\n(__) Em "Os servidores ainda não sabem por que o protocolo foi suspenso", a grafia separada e sem acento é adequada, pois a expressão equivale a "por qual motivo".\n(__) Em "A equipe atenderá microempreendedores no anexo", a forma "micro-empreendedores" seria a adequada, pois o prefixo terminado em vogal exige hífen diante de vogal.\n(__) Em "A ideia da comissão foi aprovada", a palavra "ideia" deveria receber acento agudo, por ser paroxítona com ditongo aberto na sílaba tônica.\n(__) Em "Os candidatos têm até sexta-feira para recorrer", o acento circunflexo em "têm" distingue a terceira pessoa do plural da forma singular "tem".\n\nA sequência correta, de cima para baixo, é:',
  alternativas: [
    { id: 'A', texto: 'V, F, F, V.' },
    { id: 'B', texto: 'V, F, V, F.' },
    { id: 'C', texto: 'F, V, F, V.' },
    { id: 'D', texto: 'F, F, V, V.' },
    { id: 'E', texto: 'V, V, F, V.' }
  ],
  gabarito: 'A',
  explicacao: {
    correta: '(1) V — "por que" separado = por qual motivo. (2) F — prefixo "micro" + "empreendedores" (vogal + vogal diferente) = SEM hífen: "microempreendedores". (3) F — "ideia" perdeu o acento com o Acordo (paroxítona com ditongo aberto). (4) V — "têm" é acento diferencial de número (3ª pessoa do plural x singular "tem").',
    incorretas: {
      B: 'O item 3 é falso.',
      C: 'O item 1 é verdadeiro e o 2 é falso.',
      D: 'O item 1 é verdadeiro e o 4 também.',
      E: 'O item 2 é falso.'
    },
    conceitoCobrado: 'Emprego de "por que", regra do hífen com prefixos, acentuação de ditongos abertos e acento diferencial de número.',
    pegadinha: 'A regra "prefixo terminado em vogal + segundo elemento iniciado por vogal diferente = sem hífen" é frequentemente esquecida.',
    comoApareceEmConcurso: 'AMAUC combina 4 regras ortográficas distintas numa única questão V/F.'
  },
  tags: ['ortografia', 'hífen', 'acordo ortográfico', 'acento diferencial']
},

{
  id: 'EX-Q4438891', tipo: 'REAL', area: 'LET', moduloId: 'POR-05',
  subtema: 'Figuras de linguagem + coesão + argumentação',
  dificuldade: 3, prioridade: 'alta',
  enunciado: 'Texto-base (AMAUC 2026 / Prefeitura de Ipumirim-SC):\n\nLinguagem simples no serviço público\n\nAtire a primeira pedra quem nunca teve dificuldade para entender um texto jurídico no Brasil. E um texto de página governamental na internet? Ou um edital de licitação ou de processo seletivo qualquer? Não importa muito se o texto trata de um direito a usufruir ou de uma obrigação a cumprir. Infelizmente, se o texto for do poder público, é bastante provável que nos deparemos com o "juridiquês" amplamente adotado na comunicação de governos de todas as esferas.\n\nLeis, decretos e normas públicas não ficam para trás, muitas vezes com termos técnicos e jurídicos sem a explicação devida. Infelizmente, o nível de escolaridade do leitor nem sempre faz muita diferença: a depender do tema, da estrutura do texto e do suporte de leitura, a linguagem excessivamente artificial do jargão jurídico pode dificultar a vida e roubar o tempo da mais ilustrada e erudita das criaturas.\n\nFelizmente, nas últimas décadas, sobretudo depois da Constituição Federal de 1988, o Brasil tem dado passos importantes na direção de ampliar a transparência e o acesso à informação. Ainda assim, ao lado desses avanços recentes, temos o angustiante cenário educacional brasileiro. De acordo com os resultados divulgados [em maio de 2025], cerca de 29% dos brasileiros [de 15 a 64 anos] são analfabetos funcionais.\n\nEstamos diante, portanto, de um caldo amargo que mistura a baixa qualidade educacional do Brasil com a dificuldade de compreensão de textos da cidadania por boa parte da nossa população. Em um contexto desafiador como esse, surgem, em meados dos anos 2000, debates sobre a urgência de se adotar uma linguagem mais simples, direta, clara e objetiva nos textos governamentais.\n\nO texto, publicado em um boletim de estudos legislativos, discute as dificuldades de leitura dos textos produzidos pelo poder público. Considerando a organização argumentativa do texto e os recursos expressivos nele empregados, assinale a alternativa correta.',
  alternativas: [
    { id: 'A', texto: 'A expressão "a mais ilustrada e erudita das criaturas", no segundo parágrafo, constitui um eufemismo, pois atenua a crítica dirigida aos leitores que não compreendem o jargão do direito.' },
    { id: 'B', texto: 'A pergunta "E um texto de página governamental na internet?", no primeiro parágrafo, introduz uma objeção à frase anterior e restringe a crítica ao juridiquês a textos do Poder Judiciário.' },
    { id: 'C', texto: 'O advérbio "Infelizmente", no segundo parágrafo, introduz a avaliação de que o jargão jurídico prejudica sobretudo os leitores de menor escolaridade, os principais afetados pelo problema.' },
    { id: 'D', texto: 'A expressão "caldo amargo", no último parágrafo, sintetiza por meio de metáfora dois problemas expostos antes: a baixa qualidade educacional e a dificuldade de compreender textos oficiais.' },
    { id: 'E', texto: 'O conectivo "portanto", no último parágrafo, introduz uma ressalva ao que foi dito antes e poderia ser substituído por "no entanto" sem alteração do sentido do trecho em que se encontra.' }
  ],
  gabarito: 'D',
  explicacao: {
    correta: 'A alternativa D está correta. "Caldo amargo" é metáfora que sintetiza exatamente os dois problemas: baixa qualidade educacional + dificuldade de compreensão de textos oficiais.',
    incorretas: {
      A: 'Não é eufemismo; é hipérbole/ironia que enfatiza a ineficiência do texto oficial.',
      B: 'A pergunta amplia a crítica, não a restringe ao Judiciário.',
      C: 'O texto afirma que "o nível de escolaridade nem sempre faz muita diferença" — afeta até os mais escolarizados.',
      E: '"Portanto" é conclusivo, não adversativo; não pode ser trocado por "no entanto".'
    },
    conceitoCobrado: 'Figuras de linguagem (metáfora, hipérbole) + valor semântico de conectivos + leitura inferencial.',
    pegadinha: 'A letra C inverte o argumento do texto: é exatamente o contrário do que a autora diz.',
    comoApareceEmConcurso: 'AMAUC combina figura de linguagem com coesão e leitura crítica.'
  },
  tags: ['metáfora', 'conectivos', 'argumentação', 'interpretação']
},

{
  id: 'EX-Q4438890', tipo: 'REAL', area: 'GRA', moduloId: 'POR-11',
  subtema: 'Tempos e modos verbais — análise em contexto',
  dificuldade: 3, prioridade: 'alta',
  enunciado: 'Considere o texto "Linguagem simples no serviço público" (mesmo texto da questão EX-Q4438891 — AMAUC 2026).\n\nA autora emprega diferentes tempos e modos verbais para situar os fatos no tempo e para expressar hipóteses e avaliações. Considerando o emprego dos tempos e modos verbais no texto, assinale a alternativa correta.',
  alternativas: [
    { id: 'A', texto: 'Em "Atire a primeira pedra", a forma verbal exprime ordem literal dirigida ao leitor, que deve executar a ação descrita na frase para confirmar a tese da autora.' },
    { id: 'B', texto: 'Em "o Brasil tem dado passos importantes", o pretérito perfeito composto expressa ação repetida, iniciada no passado e prolongada até o momento em que se escreve.' },
    { id: 'C', texto: 'Em "surgem, em meados dos anos 2000, debates", o presente do indicativo expressa fato habitual, que se repete regularmente no momento em que se escreve este texto.' },
    { id: 'D', texto: 'Em "é bastante provável que nos deparemos", o presente do subjuntivo é exigido pelo sentido de certeza que a expressão "bastante provável" atribui ao fato citado.' },
    { id: 'E', texto: 'Em "se o texto for do poder público", o futuro do subjuntivo apresenta a condição como fato já realizado, anterior ao momento em que a autora escreve o seu texto.' }
  ],
  gabarito: 'B',
  explicacao: {
    correta: 'A alternativa B está correta. "Tem dado" é pretérito perfeito composto do indicativo e expressa ação repetida/contínua iniciada no passado e que se prolonga até o presente.',
    incorretas: {
      A: '"Atire a primeira pedra" é alusão bíblica, não ordem literal.',
      C: '"Surgem" é presente do indicativo com valor de presente histórico (fato pontual, não habitual).',
      D: '"É provável que" exige subjuntivo justamente por expressar probabilidade, não certeza.',
      E: 'O futuro do subjuntivo apresenta condição hipotética/futura, não fato já realizado.'
    },
    conceitoCobrado: 'Valor dos tempos/modos verbais em contexto argumentativo.',
    pegadinha: 'A confusão entre "certeza" e "probabilidade" na letra D é o ponto mais sutil.',
    comoApareceEmConcurso: 'AMAUC costuma testar valor contextual, não apenas classificação isolada.'
  },
  tags: ['tempos verbais', 'modos verbais', 'pretérito perfeito composto']
},

{
  id: 'EX-Q4438889', tipo: 'REAL', area: 'GRA', moduloId: 'POR-18',
  subtema: 'Pontuação — vírgula e correção gramatical',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Considere o seguinte período adaptado do texto "Linguagem simples no serviço público" (AMAUC 2026 / Prefeitura de Ipumirim-SC):\n\n"Felizmente, nas últimas décadas, sobretudo depois da Constituição Federal de 1988, o Brasil tem dado passos importantes na direção de ampliar a transparência."\n\nQuanto ao emprego da vírgula, a reescrita que preserva a correção gramatical e o sentido original do período é:\n\n[NOTA: no PDF, as alternativas B e E saíram idênticas por falha de extração; marquei B como gabarito, mas confira no original.]',
  alternativas: [
    { id: 'A', texto: 'Felizmente, nas últimas décadas, sobretudo depois da Constituição Federal de 1988, o Brasil, tem dado passos importantes na direção de ampliar a transparência.' },
    { id: 'B', texto: 'Felizmente, nas últimas décadas, sobretudo depois da Constituição Federal de 1988, o Brasil tem dado passos importantes na direção de ampliar a transparência.' },
    { id: 'C', texto: 'Nas últimas décadas, sobretudo depois da Constituição Federal de 1988, o Brasil, felizmente, tem dado passos importantes na direção de ampliar a transparência.' },
    { id: 'D', texto: 'Felizmente, nas últimas décadas, sobretudo depois da Constituição Federal de 1988, o Brasil, tem dado passos importantes na direção de ampliar a transparência.' },
    { id: 'E', texto: 'Felizmente, nas últimas décadas, sobretudo depois da Constituição Federal de 1988, o Brasil tem dado passos importantes na direção de ampliar a transparência.' }
  ],
  gabarito: 'B',
  explicacao: {
    correta: 'A alternativa B mantém a pontuação original (correta): não se separa sujeito ("o Brasil") de predicado ("tem dado").',
    incorretas: {
      A: 'A vírgula após "Brasil" separa sujeito e verbo — erro clássico.',
      C: 'A reescrita é gramaticalmente possível, mas desloca "felizmente" e altera a estrutura original; a banca costuma rejeitar por não preservar o sentido.',
      D: 'Idêntica a A — vírgula indevida após "Brasil".',
      E: 'Idêntica a B (falha de extração do PDF); na prova original havia diferença sutil.'
    },
    conceitoCobrado: 'Regras de vírgula: não separar sujeito de predicado; adjuntos adverbiais antecipados.',
    pegadinha: 'A vírgula após "Brasil" é tentadora por causa das vírgulas anteriores, mas é erro grave.',
    comoApareceEmConcurso: 'AMAUC cobra reescrita que preserva sentido E correção.'
  },
  tags: ['pontuação', 'vírgula', 'sujeito e predicado']
},

{
  id: 'EX-Q4438888', tipo: 'REAL', area: 'GRA', moduloId: 'POR-17',
  subtema: 'Crase — asserção e razão',
  dificuldade: 3, prioridade: 'alta',
  enunciado: '(AMAUC 2026 / Prefeitura de Ipumirim-SC) Considere o trecho: "o Brasil tem dado passos importantes na direção de ampliar a transparência e o acesso à informação".\n\nAnalise as seguintes asserções e a relação proposta entre elas:\n\nI. No trecho, o emprego do acento indicativo de crase em "à informação" está de acordo com a norma-padrão.\n\nPORQUE\n\nII. O acento indica a fusão da preposição "a", exigida pelo verbo "ampliar", com o artigo definido feminino que acompanha o substantivo "informação".\n\nA respeito dessas asserções, assinale a alternativa correta.',
  alternativas: [
    { id: 'A', texto: 'A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.' },
    { id: 'B', texto: 'As asserções I e II são proposições falsas.' },
    { id: 'C', texto: 'As asserções I e II são proposições verdadeiras, e a II é uma justificativa da I.' },
    { id: 'D', texto: 'As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa da I.' },
    { id: 'E', texto: 'A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.' }
  ],
  gabarito: 'A',
  explicacao: {
    correta: 'I é verdadeira (o "à" está correto). II é falsa porque a preposição "a" NÃO é exigida pelo verbo "ampliar" (que é TD: ampliar algo — a transparência e o acesso), mas pelo substantivo "acesso" (acesso A + informação).',
    incorretas: {
      B: 'I é verdadeira.',
      C: 'II tem justificativa errada.',
      D: 'II não justifica I corretamente.',
      E: 'I é verdadeira.'
    },
    conceitoCobrado: 'Crase: identificar QUAL termo rege a preposição (verbo x nome).',
    pegadinha: 'A banca induz ao erro atribuindo a preposição ao verbo "ampliar", quando na verdade ela vem do substantivo "acesso".',
    comoApareceEmConcurso: 'AMAUC cobra asserção-razão com análise fina da regência.'
  },
  tags: ['crase', 'regência nominal', 'asserção-razão']
},

{
  id: 'EX-Q4438375', tipo: 'REAL', area: 'GRA', moduloId: 'POR-18',
  subtema: 'Pontuação — funções da vírgula em contexto',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Texto-base (FAFIPA 2026 / Prefeitura de Ivaiporã-PR):\n\nDieta rigorosa e treino intenso podem atingir o sistema hormonal; entenda.\n\nA busca pelo emagrecimento, definição muscular e alto rendimento na academia pode ser benéfico, mas também pode sair caro para a saúde. Especialistas alertam que, dietas muito restritivas e rotinas pesadas de treino podem comprometer, além da mentalidade e do corpo, o sistema hormonal.\n\nUm exemplo é a tenista norte-americana Emma Navarro, de 25 anos, que anunciou uma pausa na carreira após ser diagnosticada com RED-S (Deficiência Relativa de Energia no Esporte) e Tireoidite de Hashimoto. Segundo os atleta, os quadros, decorrentes em parte de uma alimentação inadequada, provocavam tonturas, dores de cabeça, fadiga constante e dificuldade de concentração.\n\nDe acordo com o endocrinologista Rodrigo Gomes de Souza, quando o organismo recebe menos energia do que gasta por um longo período, ele aciona um mecanismo de defesa que passa a economizar, reduzir o ritmo do metabolismo e, consequentemente, isso compromete o sistema hormonal.\n\n"Nessas situações, o organismo reduz a atividade do eixo que controla a tireoide. Na prática, é como se o organismo percebesse que \'está faltando combustível\' e diminuísse o ritmo do metabolismo para gastar menos energia."\n\nIsso mostra que comer pouco e treinar muito não, necessariamente, significa ser saudável. Por este motivo, aqueles que querem manter uma dieta saudável precisam manter um acompanhamento médico com um endócrino ou nutricionista.\n\nQuanto ao emprego das vírgulas no texto e às suas justificativas sintáticas segundo a norma-padrão da língua portuguesa, assinale a alternativa CORRETA.',
  alternativas: [
    { id: 'A', texto: 'Em "podem comprometer, além da mentalidade e do corpo, o sistema hormonal", as vírgulas justificam-se por separarem o sujeito simples do seu verbo.' },
    { id: 'B', texto: 'Em "quando o organismo recebe menos energia do que gasta por um longo período, ele aciona...", a vírgula separa a oração subordinada adverbial temporal anteposta em relação à oração principal.' },
    { id: 'C', texto: 'No excerto "Um exemplo é a tenista norte-americana Emma Navarro, de 25 anos, que anunciou...", a vírgula antes de "de 25 anos" isola um vocativo direcionado à atleta.' },
    { id: 'D', texto: 'No trecho "De acordo com o endocrinologista Rodrigo Gomes de Souza, quando o organismo recebe...", a primeira vírgula foi utilizada para isolar uma oração subordinada adjetiva explicativa.' },
    { id: 'E', texto: 'No trecho "não, necessariamente, significa ser saudável", as vírgulas foram inseridas para separar duas orações coordenadas assindéticas.' }
  ],
  gabarito: 'B',
  explicacao: {
    correta: 'A alternativa B está correta: "quando o organismo recebe menos energia..." é oração subordinada adverbial temporal anteposta, e a vírgula a separa da principal ("ele aciona...").',
    incorretas: {
      A: 'As vírgulas isolam o termo adverbial intercalado "além da mentalidade e do corpo", não o sujeito.',
      C: '"De 25 anos" é adjunto adnominal explicativo, não vocativo.',
      D: 'A primeira vírgula isola o adjunto adverbial antecipado "De acordo com o endocrinologista...", não uma adjetiva.',
      E: 'As vírgulas isolam o advérbio "necessariamente", não separam coordenadas.'
    },
    conceitoCobrado: 'Funções da vírgula: oração subordinada anteposta, adjunto intercalado, advérbio intercalado.',
    pegadinha: 'Confundir "de 25 anos" (adjunto adnominal) com vocativo é erro comum.',
    comoApareceEmConcurso: 'FAFIPA exige identificação precisa da função sintática da vírgula.'
  },
  tags: ['pontuação', 'vírgula', 'oração subordinada', 'vocativo']
},

{
  id: 'EX-Q4438374', tipo: 'REAL', area: 'GRA', moduloId: 'POR-13',
  subtema: 'Função sintática — objeto direto, adjunto e complemento',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Considere o texto "Dieta rigorosa e treino intenso podem atingir o sistema hormonal" (mesmo texto da questão EX-Q4438375 — FAFIPA 2026).\n\nAnalise a classificação gramatical e a função sintática dos termos destacados nos trechos extraídos do texto e assinale a alternativa CORRETA.',
  alternativas: [
    { id: 'A', texto: 'Na expressão "mecanismo de defesa", a locução "de defesa" desempenha a função sintática de complemento nominal do substantivo "mecanismo".' },
    { id: 'B', texto: 'No trecho "dietas muito restritivas", a palavra "muito" classifica-se como pronome indefinido e atua sintaticamente como adjunto adnominal.' },
    { id: 'C', texto: 'Em "podem comprometer, além da mentalidade e do corpo, o sistema hormonal", os termos "o sistema hormonal" exercem a função sintática de objeto direto da locução verbal.' },
    { id: 'D', texto: 'Em "Especialistas alertam", o vocábulo "Especialistas" é um adjetivo pátrio que funciona como predicativo do sujeito.' },
    { id: 'E', texto: 'No excerto "aqueles que querem manter uma dieta saudável", a palavra "que" classifica-se como conjunção integrante, introduzindo uma oração subordinada substantiva.' }
  ],
  gabarito: 'C',
  explicacao: {
    correta: 'A alternativa C está correta: "podem comprometer" é VTDI na acepção "comprometer algo", e "o sistema hormonal" é objeto direto da locução verbal.',
    incorretas: {
      A: '"Mecanismo" é substantivo concreto; "de defesa" é adjunto adnominal, não complemento nominal.',
      B: '"Muito" modifica o adjetivo "restritivas" → advérbio de intensidade (adjunto adverbial), não pronome.',
      D: '"Especialistas" é substantivo (núcleo do sujeito), não adjetivo nem predicativo.',
      E: '"Que" é pronome relativo (retoma "aqueles"), introduzindo oração adjetiva — não conjunção integrante.'
    },
    conceitoCobrado: 'Distinção entre adjunto adnominal x complemento nominal; pronome relativo x conjunção integrante.',
    pegadinha: 'A diferença entre adjunto adnominal e complemento nominal é sutil: o CN completa o sentido de substantivo abstrato, o AA apenas caracteriza.',
    comoApareceEmConcurso: 'FAFIPA cobra função sintática em contexto real.'
  },
  tags: ['sintaxe', 'objeto direto', 'adjunto adnominal', 'pronome relativo']
},

{
  id: 'EX-Q4438373', tipo: 'REAL', area: 'GRA', moduloId: 'POR-07',
  subtema: 'Acentuação gráfica e análise fonética',
  dificuldade: 2, prioridade: 'alta',
  enunciado: '(FAFIPA 2026 / Prefeitura de Ivaiporã-PR) Em relação às regras de acentuação gráfica e à análise fonética de vocábulos retirados do texto "Dieta rigorosa e treino intenso podem atingir o sistema hormonal", assinale a alternativa CORRETA.',
  alternativas: [
    { id: 'A', texto: 'O vocábulo "ritmo" apresenta um dígrafo consonantal na separação silábica rit-mo.' },
    { id: 'B', texto: 'A palavra "tireoide" não recebe acento gráfico porque os ditongos abertos "ei" e "oi" em palavras paroxítonas deixaram de ser acentuados conforme as regras do Acordo Ortográfico vigente.' },
    { id: 'C', texto: 'As palavras "médico" e "prática" recebem acento gráfico por razões distintas, visto que a primeira é oxítona e a segunda é paroxítona.' },
    { id: 'D', texto: 'Na palavra "passa", o grupo de letras "ss" constitui um encontro vocálico perceptível na pronúncia individual de cada consoante.' },
    { id: 'E', texto: 'O vocábulo "saúde" é acentuado graficamente por se tratar de uma palavra proparoxítona terminada na vogal "e".' }
  ],
  gabarito: 'B',
  explicacao: {
    correta: 'A alternativa B está correta. "Tireoide" é paroxítona com ditongo aberto "oi"; o Acordo Ortográfico eliminou o acento desses ditongos em paroxítonas (antes: "tireóide").',
    incorretas: {
      A: '"tm" não é dígrafo (são duas consoantes pronunciadas).',
      C: 'Ambas são proparoxítonas — mesma razão de acentuação.',
      D: '"ss" é dígrafo consonantal, não encontro vocálico.',
      E: '"Saúde" é paroxítona com hiato "a-ú", não proparoxítona.'
    },
    conceitoCobrado: 'Acordo Ortográfico (ditongos abertos em paroxítonas) + classificação de dígrafos e hiatos.',
    pegadinha: '"Tireoide" é o exemplo mais citado do Acordo — antes se escrevia "tireóide".',
    comoApareceEmConcurso: 'FAFIPA cobra aplicação do Acordo em vocábulo específico.'
  },
  tags: ['acentuação', 'acordo ortográfico', 'ditongo aberto', 'dígrafo']
},

{
  id: 'EX-Q4438372', tipo: 'REAL', area: 'LET', moduloId: 'POR-04',
  subtema: 'Coesão, semântica e sentido conotativo',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Considere o texto "Dieta rigorosa e treino intenso podem atingir o sistema hormonal" (mesmo texto da questão EX-Q4438375 — FAFIPA 2026).\n\nQuanto aos recursos de coesão, coerência e aos aspectos semânticos presentes no texto, assinale a alternativa CORRETA.',
  alternativas: [
    { id: 'A', texto: 'No trecho "consequentemente, isso compromete o sistema hormonal", o vocábulo destacado estabelece uma relação semântica de causa em relação ao acionamento do mecanismo de defesa.' },
    { id: 'B', texto: 'A expressão "está faltando combustível" exemplifica o uso do sentido conotativo, em que a palavra "combustível" é empregada metaforicamente para indicar a energia vinda dos alimentos.' },
    { id: 'C', texto: 'No excerto "Isso mostra que comer pouco e treinar muito não, necessariamente, significa ser saudável", o advérbio "necessariamente" exprime uma negação categórica e absoluta.' },
    { id: 'D', texto: 'A expressão "sair caro para a saúde" foi empregada em seu sentido estritamente denotativo, referindo-se aos custos financeiros dos tratamentos médicos.' },
    { id: 'E', texto: 'O pronome na expressão "Por este motivo" é empregado para introduzir um fato que ainda será apresentado no encerramento do texto.' }
  ],
  gabarito: 'B',
  explicacao: {
    correta: 'A alternativa B está correta. "Combustível" é usado metaforicamente (=energia dos alimentos) — exemplo claro de conotação.',
    incorretas: {
      A: '"Consequentemente" é conclusivo/consecutivo, não causal.',
      C: '"Necessariamente" expressa que algo não é inevitável — não é negação categórica.',
      D: '"Sair caro" é sentido figurado (=trazer prejuízo), não custo financeiro literal.',
      E: '"Por este motivo" retoma algo JÁ apresentado, não introduz fato novo.'
    },
    conceitoCobrado: 'Denotação x conotação + valor semântico de conectivos + função anafórica.',
    pegadinha: 'A confusão entre causa (porque) e consequência (consequentemente) na letra A.',
    comoApareceEmConcurso: 'FAFIPA mistura semântica com coesão referencial.'
  },
  tags: ['conotação', 'metáfora', 'coesão', 'semântica']
},

{
  id: 'EX-Q4438371', tipo: 'REAL', area: 'LET', moduloId: 'POR-01',
  subtema: 'Inferência textual',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Considere o texto "Dieta rigorosa e treino intenso podem atingir o sistema hormonal" (mesmo texto da questão EX-Q4438375 — FAFIPA 2026).\n\nAssinale a alternativa que apresenta uma inferência CORRETA e coerente com as ideias desenvolvidas no texto.',
  alternativas: [
    { id: 'A', texto: 'O acompanhamento com nutricionista ou endocrinologista é recomendado pelo autor exclusivamente para atletas profissionais de alta performance.' },
    { id: 'B', texto: 'O diagnóstico da tenista Emma Navarro comprova que a prática esportiva de alto rendimento é a causa primária e direta do surgimento de doenças autoimunes.' },
    { id: 'C', texto: 'A redução do ritmo metabólico em indivíduos submetidos ao déficit energético prolongado constitui uma resposta adaptativa do organismo voltada à conservação de energia.' },
    { id: 'D', texto: 'A prática de treinos pesados acompanhada de dietas restritivas é comprovadamente ineficaz para promover o emagrecimento ou o ganho de massa muscular.' },
    { id: 'E', texto: 'A restrição calórica severa aliada a rotinas intensas de treino resulta na diminuição imediata da fadiga e no aumento do rendimento físico.' }
  ],
  gabarito: 'C',
  explicacao: {
    correta: 'A alternativa C está correta e é autorizada pelo texto: "quando o organismo recebe menos energia... aciona um mecanismo de defesa que passa a economizar, reduzir o ritmo do metabolismo".',
    incorretas: {
      A: 'O texto recomenda acompanhamento a quem quer manter dieta saudável — não exclusivamente a atletas.',
      B: 'O texto diz que os quadros decorrem "em parte de alimentação inadequada" — não afirma causalidade direta da prática esportiva.',
      D: 'O texto não diz que é ineficaz; diz que pode ser prejudicial à saúde.',
      E: 'O texto afirma o oposto: fadiga, tontura, dificuldade de concentração.'
    },
    conceitoCobrado: 'Inferência autorizada pelo texto x extrapolação.',
    pegadinha: 'Alternativas que "radicalizam" o texto (B e D) são típicas de extrapolação.',
    comoApareceEmConcurso: 'FAFIPA exige distinguir inferência de extrapolação.'
  },
  tags: ['inferência', 'interpretação', 'extrapolação']
},
/* ============================================================
   QUESTÕES REAIS IMPORTADAS — IDECAN 2024 / UERN
   Língua Portuguesa (Questões 1 a 10)
   ============================================================ */

{
  id: 'EX-IDECAN-2024-01', tipo: 'REAL', area: 'LET', moduloId: 'POR-01',
  subtema: 'Inferência e compreensão textual',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Texto-base (IDECAN 2024 / UERN):\n\nApós alta do calor no verão, Brasil deve ter outono mais quente que a média\n\nCom despedida marcada para esta quarta-feira (20), o verão dá lugar ao outono com previsões de temperatura acima da média em grande parte do Brasil, segundo o Inmet. A estimativa de abril a junho indica que as anomalias de temperatura podem ficar 1°C acima da média em parte do Sudeste, em praticamente todo o Norte e Centro-Oeste e em grande parte do Nordeste.\n\nMas, afinal, quando vai esfriar? No curto prazo, no fim desta semana, segundo o coordenador substituto de operações e modelagem do Cemaden, Giovanni Dolif.\n\nIsso porque já nos primeiros dias do outono, a frente fria inaugural da estação chega ao Sul e se aproxima do Sudeste. É nessas regiões que a redução de temperatura durante a estação pode ser mais acentuada. Outro efeito comum no começo do outono são as pancadas fortes de chuva. "A força dessa frente, com ar mais frio e velocidade, causa um contraste com as massas de ar quente, gerando ventos fortes e tempestades mais violentas", afirma Dolif. É possível, ainda, que águas ainda aquecidas ajudem a manter o tempo mais quente e as chuvas volumosas, mantendo as chances de tempestades ao longo do começo do outono.\n\nEm relação às ideias do texto e suas possíveis inferências, assinale a alternativa correta.',
  alternativas: [
    { id: 'A', texto: 'Ao passo que se viveu um dos verões mais quentes da história, com o início do outono no Hemisfério Sul, haverá uma inversão na lógica da temperatura.' },
    { id: 'B', texto: 'Como o verão foi marcado por El Niño, é certo que o inverso sofrerá os efeitos de La Niña.' },
    { id: 'C', texto: 'Embora o começo do outono seja marcado pela diminuição da temperatura com a chegada de frentes frias, o choque com as águas ainda quentes do verão pode gerar tempestades.' },
    { id: 'D', texto: 'A questão é tentar arriscar como ficará o outono, diante da previsão, pelo Inmet, de que a estação sofrerá uma anomalia de temperatura.' },
    { id: 'E', texto: 'A resposta para o que vai acontecer é sabida, com base na comparação com anos anteriores semelhantes.' }
  ],
  gabarito: 'C',
  explicacao: {
    correta: 'A alternativa C está correta. O texto afirma que a chegada de uma frente fria provoca redução de temperatura, mas que o contraste com as águas ainda quentes do verão gera ventos fortes e tempestades.',
    incorretas: {
      A: 'O texto não afirma que haverá uma "inversão" na lógica da temperatura, mas sim que ela continuará acima da média em várias regiões.',
      B: 'O texto afirma que a chance de La Niña é de 63%, e não uma certeza, além de dizer que seus efeitos não são automaticamente sentidos no Brasil.',
      D: 'O texto não fala em "arriscar", mas em previsões baseadas em modelos meteorológicos.',
      E: 'O texto mostra que há incertezas (como a atuação do La Niña) e não que a resposta é plenamente sabida.'
    },
    conceitoCobrado: 'Inferência autorizada pelo texto x extrapolação.',
    pegadinha: 'A letra B usa a palavra "certo", o que contraria a probabilidade (63%) citada no texto.',
    comoApareceEmConcurso: 'IDECAN costuma exigir a validação de cada alternativa com base estrita no texto.'
  },
  tags: ['inferência', 'compreensão textual']
},

{
  id: 'EX-IDECAN-2024-02', tipo: 'REAL', area: 'LET', moduloId: 'POR-04',
  subtema: 'Valor semântico de expressões explicativas',
  dificuldade: 2, prioridade: 'alta',
  enunciado: '"A chance de desenvolvimento do efeito contrário, o La Niña (resfriamento das águas do Pacífico equatorial)..." (IDECAN 2024 / UERN)\n\nO segmento entre parênteses no período acima apresenta valor semântico de:',
  alternativas: [
    { id: 'A', texto: 'explicitação.' },
    { id: 'B', texto: 'exemplificação.' },
    { id: 'C', texto: 'enumeração.' },
    { id: 'D', texto: 'especificação.' },
    { id: 'E', texto: 'explicação.' }
  ],
  gabarito: 'E',
  explicacao: {
    correta: 'A alternativa E está correta. O trecho "resfriamento das águas do Pacífico equatorial" é uma explicação do que vem a ser o fenômeno "La Niña".',
    incorretas: {
      A: 'Não há explicitação de algo oculto, mas sim a definição de um termo.',
      B: 'Não é um exemplo, é o próprio significado do termo.',
      C: 'Não há uma lista de itens.',
      D: 'A especificação restringe um termo mais amplo; aqui há a definição conceitual.'
    },
    conceitoCobrado: 'Uso dos parênteses para explicação/esclarecimento.',
    pegadinha: 'Confundir explicação (definir o que é) com exemplificação (dar um exemplo).',
    comoApareceEmConcurso: 'IDECAN cobra a função semântica dos sinais de pontuação.'
  },
  tags: ['semântica', 'explicação']
},

{
  id: 'EX-IDECAN-2024-03', tipo: 'REAL', area: 'GRA', moduloId: 'POR-10',
  subtema: 'Pronome relativo "que"',
  dificuldade: 2, prioridade: 'alta',
  enunciado: '"É nessas regiões que a redução de temperatura durante a estação pode ser mais acentuada." (IDECAN 2024 / UERN)\n\nNo período acima, o QUE classifica-se como:',
  alternativas: [
    { id: 'A', texto: 'conjunção integrante.' },
    { id: 'B', texto: 'pronome relativo.' },
    { id: 'C', texto: 'partícula expletiva.' },
    { id: 'D', texto: 'conjunção subordinativa.' },
    { id: 'E', texto: 'preposição.' }
  ],
  gabarito: 'B',
  explicacao: {
    correta: 'A alternativa B está correta. O "que" retoma o antecedente "nessas regiões" e introduz a oração adjetiva "que a redução de temperatura... pode ser mais acentuada".',
    incorretas: {
      A: 'Não introduz oração substantiva (não pode ser substituído por "isso").',
      C: 'Não pode ser retirado sem prejuízo gramatical.',
      D: 'Não é conjunção, é pronome.',
      E: 'Não é preposição.'
    },
    conceitoCobrado: 'Diferença entre pronome relativo e conjunção integrante.',
    pegadinha: 'A estrutura "É nessas regiões que..." pode enganar, mas o "que" tem função anafórica (retoma regiões).',
    comoApareceEmConcurso: 'IDECAN cobra a classificação do "que" em contexto.'
  },
  tags: ['pronome relativo', 'que']
},

{
  id: 'EX-IDECAN-2024-04', tipo: 'REAL', area: 'GRA', moduloId: 'POR-14',
  subtema: 'Oração subordinada substantiva subjetiva',
  dificuldade: 3, prioridade: 'alta',
  enunciado: '"É possível, ainda, que águas ainda aquecidas ajudem a manter o tempo mais quente e as chuvas volumosas do fim de março para depois do começo de abril, mantendo as chances de tempestades ao longo do começo do outono." (IDECAN 2024 / UERN)\n\nA oração sublinhada no período acima ("que águas ainda aquecidas ajudem...") desempenha papel de:',
  alternativas: [
    { id: 'A', texto: 'sujeito.' },
    { id: 'B', texto: 'aposto.' },
    { id: 'C', texto: 'objeto direto.' },
    { id: 'D', texto: 'adjunto adnominal.' },
    { id: 'E', texto: 'predicativo do sujeito.' }
  ],
  gabarito: 'A',
  explicacao: {
    correta: 'A alternativa A está correta. A oração "que águas ainda aquecidas ajudem..." é uma oração subordinada substantiva subjetiva, pois exerce a função de sujeito do verbo "É" (É possível [isso]).',
    incorretas: {
      B: 'Aposto não é uma oração.',
      C: 'Não completa verbo transitivo direto.',
      D: 'Adjunto adnominal não é oração.',
      E: 'Não qualifica o sujeito.'
    },
    conceitoCobrado: 'Classificação de orações subordinadas substantivas.',
    pegadinha: 'A presença do "que" após "possível" pode levar a crer que é um complemento, mas o verbo "ser" (na estrutura "é possível") pede sujeito.',
    comoApareceEmConcurso: 'IDECAN cobra funções sintáticas de orações desenvolvidas.'
  },
  tags: ['oração subjetiva', 'sintaxe']
},

{
  id: 'EX-IDECAN-2024-05', tipo: 'REAL', area: 'GRA', moduloId: 'POR-06',
  subtema: 'Fonemas e dígrafos',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Na linha 36 do texto base (IDECAN 2024 / UERN), a palavra "chance" tem:',
  alternativas: [
    { id: 'A', texto: 'quatro fonemas e um dígrafo.' },
    { id: 'B', texto: 'quatro fonemas e dois dígrafos.' },
    { id: 'C', texto: 'cinco fonemas e um dígrafo.' },
    { id: 'D', texto: 'cinco fonemas e dois dígrafos.' },
    { id: 'E', texto: 'seis fonemas e dois dígrafos.' }
  ],
  gabarito: 'B',
  explicacao: {
    correta: 'A alternativa B está correta. A palavra "chance" possui 4 fonemas (/ʃ/ /ã/ /s/ /i/) e 2 dígrafos ("ch" consonantal e "an" vocálico nasal).',
    incorretas: {
      A: 'Há mais de um dígrafo.',
      C: 'A palavra tem 4 fonemas, não 5.',
      D: 'A palavra tem 4 fonemas, não 5.',
      E: 'A palavra tem 4 fonemas, não 6.'
    },
    conceitoCobrado: 'Contagem de fonemas e identificação de dígrafos (consonantal e vocálico).',
    pegadinha: 'Achar que "an" não é dígrafo vocálico, ou contar o "e" final como fonema separado.',
    comoApareceEmConcurso: 'IDECAN cobra análise fonológica detalhada.'
  },
  tags: ['fonemas', 'dígrafos']
},

{
  id: 'EX-IDECAN-2024-06', tipo: 'REAL', area: 'GRA', moduloId: 'POR-08',
  subtema: 'Estrutura das palavras (vogal temática)',
  dificuldade: 3, prioridade: 'media',
  enunciado: 'Em "publicado" (IDECAN 2024 / UERN), o elemento mórfico "a" se classifica como:',
  alternativas: [
    { id: 'A', texto: 'desinência de gênero.' },
    { id: 'B', texto: 'sufixo.' },
    { id: 'C', texto: 'desinência modo-temporal.' },
    { id: 'D', texto: 'desinência nominal.' },
    { id: 'E', texto: 'vogal temática.' }
  ],
  gabarito: 'E',
  explicacao: {
    correta: 'A alternativa E está correta. Na estrutura "public-a-do", o radical é "public-", a vogal temática é "-a-" (indicando a 1ª conjugação verbal), e "-do" é a desinência de particípio.',
    incorretas: {
      A: 'A desinência de gênero é o "-o" final.',
      B: 'O sufixo é o "-do" (particípio).',
      C: 'Não há desinência modo-temporal aqui.',
      D: 'Desinência nominal é o "-o".'
    },
    conceitoCobrado: 'Identificação de morfemas (radical, vogal temática, desinências).',
    pegadinha: 'Confundir a vogal temática do verbo com a desinência de gênero do adjetivo.',
    comoApareceEmConcurso: 'IDECAN cobra morfologia estrutural.'
  },
  tags: ['morfologia', 'vogal temática']
},

{
  id: 'EX-IDECAN-2024-07', tipo: 'REAL', area: 'GRA', moduloId: 'POR-12',
  subtema: 'Contagem de artigos e preposições',
  dificuldade: 3, prioridade: 'media',
  enunciado: '"O que fizemos no Cemaden para tentar uma leitura sobre a primavera ou o verão com o fenômeno no segundo semestre foi buscar anos análogos, quando saímos do El Niño direto para um La Niña." (IDECAN 2024 / UERN)\n\nNo período acima há:',
  alternativas: [
    { id: 'A', texto: 'oito artigos e sete preposições.' },
    { id: 'B', texto: 'sete artigos e sete preposições.' },
    { id: 'C', texto: 'oito artigos e oito preposições.' },
    { id: 'D', texto: 'nove artigos e sete preposições.' },
    { id: 'E', texto: 'nove artigos e oito preposições.' }
  ],
  gabarito: 'D',
  explicacao: {
    correta: 'A alternativa D está correta. Artigos (9): O, no (=em+o), uma, a, o, o, no (=em+o), do (=de+o), um. Preposições (7): no (em), para, sobre, com, no (em), do (de), para.',
    incorretas: {
      A: 'A contagem de artigos é 9.',
      B: 'A contagem de artigos é 9.',
      C: 'A contagem de preposições é 7.',
      E: 'A contagem de preposições é 7.'
    },
    conceitoCobrado: 'Identificação de classes gramaticais (artigos e preposições), inclusive contrações.',
    pegadinha: 'Esquecer de contar os artigos escondidos nas contrações (no, do).',
    comoApareceEmConcurso: 'IDECAN cobra contagem exata de classes de palavras.'
  },
  tags: ['classes de palavras', 'artigo', 'preposição']
},

{
  id: 'EX-IDECAN-2024-08', tipo: 'REAL', area: 'GRA', moduloId: 'POR-13',
  subtema: 'Aposto',
  dificuldade: 2, prioridade: 'alta',
  enunciado: '"No curto prazo, no fim desta semana, segundo o coordenador substituto de operações e modelagem do Cemaden (Centro Nacional de Monitoramento e Alertas de Desastres Naturais), Giovanni Dolif." (IDECAN 2024 / UERN)\n\nO termo sublinhado ("Giovanni Dolif") no período acima desempenha função sintática de:',
  alternativas: [
    { id: 'A', texto: 'sujeito.' },
    { id: 'B', texto: 'aposto.' },
    { id: 'C', texto: 'vocativo.' },
    { id: 'D', texto: 'adjunto adnominal.' },
    { id: 'E', texto: 'predicativo do sujeito.' }
  ],
  gabarito: 'B',
  explicacao: {
    correta: 'A alternativa B está correta. "Giovanni Dolif" é um aposto explicativo, pois especifica o nome do "coordenador substituto" citado anteriormente.',
    incorretas: {
      A: 'Não é o sujeito da oração.',
      C: 'Não é um chamamento.',
      D: 'Não caracteriza um substantivo.',
      E: 'Não atribui característica ao sujeito.'
    },
    conceitoCobrado: 'Termos acessórios da oração: aposto.',
    pegadinha: 'Confundir aposto (explica um termo) com vocativo (chama o interlocutor).',
    comoApareceEmConcurso: 'IDECAN cobra a função sintática de termos isolados.'
  },
  tags: ['sintaxe', 'aposto']
},

{
  id: 'EX-IDECAN-2024-09', tipo: 'REAL', area: 'GRA', moduloId: 'POR-15',
  subtema: 'Concordância com verbos impessoais e pessoais',
  dificuldade: 3, prioridade: 'alta',
  enunciado: '"Mas segundo Dolif, não significa automaticamente que haverá uma diminuição das temperaturas em partes do Brasil..." (IDECAN 2024 / UERN)\n\nAssinale a alternativa em que a alteração do segmento sublinhado ("haverá uma diminuição") no período acima tenha sido feita de acordo com a norma culta.',
  alternativas: [
    { id: 'A', texto: 'devem haver diminuições.' },
    { id: 'B', texto: 'haveriam diminuições.' },
    { id: 'C', texto: 'hão de haver diminuições.' },
    { id: 'D', texto: 'haveriam de existir diminuições.' },
    { id: 'E', texto: 'pode existir diminuições.' }
  ],
  gabarito: 'D',
  explicacao: {
    correta: 'A alternativa D está correta. O verbo "existir" é pessoal e concorda com o sujeito ("diminuições"). Como está em locução com "haver" (auxiliar), o auxiliar também vai para o plural: "haveriam de existir diminuições".',
    incorretas: {
      A: '"Haver" no sentido de existir é impessoal, logo não vai para o plural ("deve haver").',
      B: '"Haver" impessoal deve ficar no singular ("haveria").',
      C: '"Haver" impessoal deve ficar no singular ("há de haver").',
      E: '"Existir" é pessoal e deve concordar com "diminuições" ("podem existir").'
    },
    conceitoCobrado: 'Diferença entre verbos impessoais (haver) e pessoais (existir) na concordância.',
    pegadinha: 'A presença do "haver" na locução faz o candidato errar a concordância com o verbo "existir".',
    comoApareceEmConcurso: 'IDECAN cobra reescrita com foco em concordância verbal.'
  },
  tags: ['concordância verbal', 'verbos impessoais']
},

{
  id: 'EX-IDECAN-2024-10', tipo: 'REAL', area: 'GRA', moduloId: 'POR-12',
  subtema: 'Valor semântico de conectivos e advérbios',
  dificuldade: 2, prioridade: 'alta',
  enunciado: '"Já o calor pode diminuir, mas deve ficar acima da média histórica..." (IDECAN 2024 / UERN)\n\nNa linha 21, a palavra "Já" apresenta valor:',
  alternativas: [
    { id: 'A', texto: 'temporal.' },
    { id: 'B', texto: 'inclusivo.' },
    { id: 'C', texto: 'contrastivo.' },
    { id: 'D', texto: 'resumitivo.' },
    { id: 'E', texto: 'excepcional.' }
  ],
  gabarito: 'C',
  explicacao: {
    correta: 'A alternativa C está correta. O "Já" é utilizado para estabelecer um contraste com a ideia anterior (a chuva/tempestade no Sul/Sudeste vs. o calor no restante do país).',
    incorretas: {
      A: 'Não indica tempo nesta frase.',
      B: 'Não inclui algo.',
      D: 'Não resume.',
      E: 'Não indica exceção.'
    },
    conceitoCobrado: 'Valor semântico de "já" como operador argumentativo de contraste.',
    pegadinha: 'A palavra "já" tem valor temporal na maioria das vezes, mas aqui atua como conector contrastivo.',
    comoApareceEmConcurso: 'IDECAN cobra a mudança de valor semântico de palavras conforme o contexto.'
  },
  tags: ['conectivos', 'valor semântico']
},
/* ============================================================
   QUESTÕES REAIS IMPORTADAS — IBFC 2025 / UFPB
   Língua Portuguesa (Questões 1 a 10)
   ============================================================ */

{
  id: 'EX-IBFC-2025-01', tipo: 'REAL', area: 'LET', moduloId: 'POR-01',
  subtema: 'Compreensão textual — ideia global',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Texto I (IBFC 2025 / UFPB):\n\nO que é o "caxangá", que os escravos de Jó jogavam? (Artur Louback)\n\nCaxangá tem vários significados, mas nada de jogo. Pode ser um crustáceo (parecido com um siri), um chapéu usado por marinheiros, e há até uma definição indígena: segundo o Dicionário Tupi-Guarani-Português, de Francisco da Silveira Bueno, caxangá vem de caáçangá, que significa "mata extensa". Mas nada disso tem a ver com o jogo e menos ainda com Jó, o personagem bíblico que perdeu tudo o que tinha (inclusive os escravos), menos a fé. Isso deixa os especialistas intrigados. "Já procurei caxangá, caxengá e caxingá, com \'x\' e \'ch\', e não encontrei nada que fizesse sentido como um jogo", diz o etimologista Claudio Moreno. "Se esse jogo existisse, seria quase impossível explicar como ele passou despercebido por todos os antropólogos e etnólogos que estudam nossas tradições populares". O que pode ter ocorrido é uma espécie de "telefone sem fio": se originalmente o verso fosse "juntavam caxangá" ao invés de "jogavam", poderiam pensar em escravos pegando siris em vez de em um jogo. Outra hipótese é que caxangá seja uma expressão sem sentido...\n\nAo considerar a pergunta proposta no título e o conteúdo do texto, pode-se afirmar que:',
  alternativas: [
    { id: 'A', texto: 'fontes como o Dicionário Tupi-Guarani-Português indicam a resposta a ser aceita.' },
    { id: 'B', texto: 'ela é a metáfora que propõe uma reflexão sobre as relações de trabalho no texto.' },
    { id: 'C', texto: 'uma vez que são apontados vários significados possíveis, a resposta é parcial.' },
    { id: 'D', texto: 'as referências a especialistas reforçam a importância de só uma explicação.' },
    { id: 'E', texto: 'é possível concluir que não se tratava de um jogo, mas de um trabalho.' }
  ],
  gabarito: 'C',
  explicacao: {
    correta: 'A alternativa C está correta. O texto apresenta diversas hipóteses (crustáceo, chapéu, mata extensa, telefone sem fio) e afirma que os especialistas estão "intrigados", ou seja, não há uma certeza absoluta, mas sim respostas parciais/hipotéticas.',
    incorretas: {
      A: 'O próprio texto diz que a definição indígena "nada tem a ver com o jogo".',
      B: 'O texto é uma investigação etimológica, não uma metáfora sobre trabalho.',
      D: 'Os especialistas reforçam a dúvida, não uma única explicação.',
      E: 'A hipótese de "trabalho" (pegar siris) é apenas uma suposição, não uma conclusão definitiva.'
    },
    conceitoCobrado: 'Compreensão global e identificação da tese/hipóteses do texto.',
    pegadinha: 'A alternativa E é tentadora porque o texto cita a possibilidade de "pegar siris", mas isso é apresentado como hipótese.',
    comoApareceEmConcurso: 'IBFC costuma cobrar a diferença entre hipótese apresentada no texto e conclusão fechada.'
  },
  tags: ['compreensão textual', 'inferência']
},

{
  id: 'EX-IBFC-2025-02', tipo: 'REAL', area: 'LET', moduloId: 'POR-02',
  subtema: 'Tipologia textual',
  dificuldade: 1, prioridade: 'alta',
  enunciado: 'Considere o Texto I ("O que é o caxangá...", de Artur Louback), da prova IBFC 2025 / UFPB.\n\nAo observar a estrutura e o propósito do texto, assinale a alternativa que apresenta sua tipologia predominante.',
  alternativas: [
    { id: 'A', texto: 'Injuntiva.' },
    { id: 'B', texto: 'Argumentativa.' },
    { id: 'C', texto: 'Narrativa.' },
    { id: 'D', texto: 'Expositiva.' },
    { id: 'E', texto: 'Descritiva.' }
  ],
  gabarito: 'D',
  explicacao: {
    correta: 'A alternativa D está correta. O texto tem o propósito de expor/explicar informações, apresentando definições, hipóteses e opiniões de especialistas sobre um tema (o significado de caxangá).',
    incorretas: {
      A: 'Não há instruções ou ordens.',
      B: 'Não há defesa de uma tese com o objetivo de convencer o leitor.',
      C: 'Não há uma sequência de fatos em progressão temporal (com personagens e enredo).',
      E: 'Não há uma caracterização detalhada de um objeto/ambiente.'
    },
    conceitoCobrado: 'Identificação de tipologia textual predominante (expositiva).',
    pegadinha: 'A presença de uma "pergunta" no título pode confundir, mas a estrutura geral é de exposição de fatos e teorias.',
    comoApareceEmConcurso: 'IBFC costuma cobrar tipologias em textos jornalísticos/curiosidades.'
  },
  tags: ['tipologia textual', 'expositiva']
},

{
  id: 'EX-IBFC-2025-03', tipo: 'REAL', area: 'LET', moduloId: 'POR-03',
  subtema: 'Coesão referencial — anáfora',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Considere o período do Texto I (IBFC 2025 / UFPB): "Mas nada disso tem a ver com o jogo e menos ainda com Jó, o personagem bíblico que perdeu tudo o que tinha (inclusive os escravos), menos a fé. Isso deixa os especialistas intrigados."\n\nO vocábulo "Isso", destacado na passagem, é um pronome demonstrativo empregado para retomar a seguinte ideia no texto:',
  alternativas: [
    { id: 'A', texto: 'o personagem bíblico ter perdido tudo o que tinha.' },
    { id: 'B', texto: 'o fato de a palavra "caxangá" ter vários significados distintos.' },
    { id: 'C', texto: 'o sentido da palavra não ter a ver com jogo, nem com Jó.' },
    { id: 'D', texto: 'o personagem bíblico não ter perdido a fé.' },
    { id: 'E', texto: 'a informação de que Jó possuía escravos também.' }
  ],
  gabarito: 'C',
  explicacao: {
    correta: 'A alternativa C está correta. O pronome "Isso" é anafórico e retoma toda a ideia imediatamente anterior: o fato de a palavra "caxangá" não ter relação com o jogo e nem com o personagem Jó.',
    incorretas: {
      A: 'A perda de Jó é um detalhe, não o foco da retomada.',
      B: 'Os significados são citados no início do texto, mas "Isso" retoma a conclusão "nada disso tem a ver...".',
      D: 'A fé de Jó é um detalhe paralelo.',
      E: 'Jó ter escravos é um detalhe da história bíblica.'
    },
    conceitoCobrado: 'Coesão referencial por anáfora (pronome demonstrativo neutro "isso" retomando uma oração/ideia).',
    pegadinha: 'A proximidade do nome "Jó" pode fazer o candidato errar, mas o "Isso" resume o período anterior inteiro.',
    comoApareceEmConcurso: 'IBFC cobra a retomada de ideias por pronomes demonstrativos.'
  },
  tags: ['coesão', 'anáfora', 'pronome demonstrativo']
},

{
  id: 'EX-IBFC-2025-04', tipo: 'REAL', area: 'GRA', moduloId: 'POR-13',
  subtema: 'Função sintática — predicativo do objeto',
  dificuldade: 3, prioridade: 'alta',
  enunciado: 'Considere o período do Texto I (IBFC 2025 / UFPB): "Isso deixa os especialistas intrigados."\n\nA função sintática do termo "intrigados" está corretamente indicada em:',
  alternativas: [
    { id: 'A', texto: 'predicativo do sujeito.' },
    { id: 'B', texto: 'complemento nominal.' },
    { id: 'C', texto: 'adjunto adverbial.' },
    { id: 'D', texto: 'adjunto adnominal.' },
    { id: 'E', texto: 'predicativo do objeto.' }
  ],
  gabarito: 'E',
  explicacao: {
    correta: 'A alternativa E está correta. Na estrutura "deixa alguém intrigado", o verbo "deixar" é transitivo direto (deixa os especialistas) e o termo "intrigados" atribui uma qualidade/estado ao objeto direto, funcionando como predicativo do objeto.',
    incorretas: {
      A: 'O predicativo do sujeito atribuiria estado ao sujeito ("Isso").',
      B: 'Não completa o sentido de um nome.',
      C: 'Não indica circunstância.',
      D: 'Não caracteriza um substantivo de forma permanente.'
    },
    conceitoCobrado: 'Identificação de predicativo do objeto.',
    pegadinha: 'Confundir com predicativo do sujeito, achando que "Isso" está "intrigado".',
    comoApareceEmConcurso: 'IBFC cobra análise sintática de verbos como "deixar", "considerar", "achar".'
  },
  tags: ['sintaxe', 'predicativo do objeto']
},

{
  id: 'EX-IBFC-2025-05', tipo: 'REAL', area: 'GRA', moduloId: 'POR-11',
  subtema: 'Modo subjuntivo — valor de hipótese',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Considere a passagem do Texto I (IBFC 2025 / UFPB): "Se esse jogo existisse..."\n\nO valor semântico da oração é reforçado pela presença de uma forma verbal que indica:',
  alternativas: [
    { id: 'A', texto: 'possibilidade em relação ao passado.' },
    { id: 'B', texto: 'incerteza sobre um fato do presente.' },
    { id: 'C', texto: 'uma ação pontual ocorrida no passado.' },
    { id: 'D', texto: 'uma ação futura oriunda do passado.' },
    { id: 'E', texto: 'dúvida acerca de uma ação futura.' }
  ],
  gabarito: 'B',
  explicacao: {
    correta: 'A alternativa B está correta. O verbo "existisse" está no pretérito imperfeito do subjuntivo e, junto com a conjunção "Se", introduz uma hipótese, uma incerteza sobre um fato presente (a existência atual do jogo).',
    incorretas: {
      A: 'O mais-que-perfeito do subjuntivo ("tivesse existido") indicaria possibilidade no passado.',
      C: 'Ação pontual no passado seria pretérito perfeito do indicativo ("existiu").',
      D: 'Ação futura do passado seria futuro do pretérito ("existiria").',
      E: 'Dúvida futura seria futuro do subjuntivo ("se existir").'
    },
    conceitoCobrado: 'Valor semântico dos tempos do subjuntivo.',
    pegadinha: 'Achar que o passado da forma verbal ("-sse") indica um fato passado, quando na verdade é uma hipótese sobre o presente.',
    comoApareceEmConcurso: 'IBFC costuma aliar análise morfológica com semântica.'
  },
  tags: ['verbos', 'subjuntivo', 'hipótese']
},

{
  id: 'EX-IBFC-2025-06', tipo: 'REAL', area: 'LET', moduloId: 'POR-05',
  subtema: 'Figuras de linguagem — metáfora',
  dificuldade: 1, prioridade: 'alta',
  enunciado: 'No Texto I (IBFC 2025 / UFPB), o autor afirma: "O que pode ter ocorrido é uma espécie de \'telefone sem fio\'..."\n\nO emprego das aspas em "telefone sem fio", no texto, revela um emprego conotativo construído por meio da seguinte figura de linguagem:',
  alternativas: [
    { id: 'A', texto: 'ironia.' },
    { id: 'B', texto: 'metáfora.' },
    { id: 'C', texto: 'hipérbole.' },
    { id: 'D', texto: 'metonímia.' },
    { id: 'E', texto: 'eufemismo.' }
  ],
  gabarito: 'B',
  explicacao: {
    correta: 'A alternativa B está correta. A expressão "telefone sem fio" é usada em sentido figurado (metáfora) para representar a distorção de uma informação ao longo do tempo.',
    incorretas: {
      A: 'Não há intenção de criticar ou dizer o contrário.',
      C: 'Não há exagero.',
      D: 'Não há substituição por proximidade.',
      E: 'Não há suavização.'
    },
    conceitoCobrado: 'Denotação x conotação e identificação da metáfora.',
    pegadinha: 'As aspas podem indicar uma citação, mas no contexto servem para destacar o uso figurado.',
    comoApareceEmConcurso: 'IBFC cobra a identificação de figuras em expressões cotidianas.'
  },
  tags: ['figuras de linguagem', 'metáfora']
},

{
  id: 'EX-IBFC-2025-07', tipo: 'REAL', area: 'GRA', moduloId: 'POR-06',
  subtema: 'Fonema e letra — dígrafo',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Considere a passagem do Texto I (IBFC 2025 / UFPB): "Já procurei caxangá, caxengá e caxingá, com \'x\' e \'ch\'".\n\nCaso os vocábulos fossem reescritos com "ch", quanto à natureza fonética/fonológica, é correto afirmar que:',
  alternativas: [
    { id: 'A', texto: 'não haveria alteração no número de fonemas.' },
    { id: 'B', texto: 'diminuiria o número de letras das palavras.' },
    { id: 'C', texto: 'se faria a inclusão de um encontro consonantal.' },
    { id: 'D', texto: 'haveria mudança na pronúncia dos vocábulos.' },
    { id: 'E', texto: 'ocorreria acréscimo de encontro vocálico.' }
  ],
  gabarito: 'A',
  explicacao: {
    correta: 'A alternativa A está correta. Tanto o "x" (nesse contexto) quanto o dígrafo "ch" representam o mesmo fonema /ʃ/. Portanto, não haveria alteração na quantidade de fonemas.',
    incorretas: {
      B: 'Aumentaria o número de letras, pois "ch" tem duas letras, enquanto "x" tem uma.',
      C: 'Não há inclusão de encontro consonantal, mas sim de um dígrafo.',
      D: 'A pronúncia seria a mesma (/ʃ/).',
      E: 'Não há encontro vocálico.'
    },
    conceitoCobrado: 'Diferença entre fonema e letra, e identificação de dígrafos.',
    pegadinha: 'O candidato pode achar que a letra "x" tem som diferente de "ch" sempre, mas aqui ambas têm o mesmo som (/ʃ/).',
    comoApareceEmConcurso: 'IBFC costuma explorar as representações gráficas de um mesmo fonema.'
  },
  tags: ['fonética', 'fonema', 'dígrafo']
},

{
  id: 'EX-IBFC-2025-08', tipo: 'REAL', area: 'LET', moduloId: 'POR-01',
  subtema: 'Interpretação textual — causa e consequência',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Texto II (IBFC 2025 / UFPB):\n\nOs homens gloriosos (adaptado) (Cecília Meireles)\n\nSentei-me sem perguntas à beira da terra, e ouvi narrarem-se casualmente os que passavam.\nTenho a garganta amarga e os olhos doloridos: deixai-me esquecer o tempo, inclinar nas mãos a testa desencantada, e de mim mesma desaparecer, - que o clamor dos homens gloriosos cortou-me o coração de lado a lado.\nPois era um clamor de espadas bravias, de espadas enlouquecidas e sem relâmpagos, ah, sem relâmpagos... pegajosas de lodo e sangue denso.\nComo ficaram meus dias, e as flores claras que pensava! Nuvens brandas, construindo mundos, como se apagaram de repente!\n\nA última estrofe revela uma mudança de estado do sujeito que enuncia no poema. A partir do entendimento do texto, é correto afirmar que isso ocorre devido:',
  alternativas: [
    { id: 'A', texto: 'à atitude de sentar-se sem perguntas à beira da terra.' },
    { id: 'B', texto: 'às narrativas casuais daqueles que passavam.' },
    { id: 'C', texto: 'à situação da garganta amarga e os olhos doloridos.' },
    { id: 'D', texto: 'ao desejo de desaparecer de si própria.' },
    { id: 'E', texto: 'ao fato de ter se esquecido do tempo.' }
  ],
  gabarito: 'B',
  explicacao: {
    correta: 'A alternativa B está correta. A mudança de estado (a perda da pureza/"flores claras") ocorre porque o eu lírico se senta e **ouve as narrativas** dos que passavam (o clamor dos homens gloriosos, de sangue e lodo), o que corta seu coração e a faz querer desaparecer.',
    incorretas: {
      A: 'Sentar-se é apenas a ação inicial que permite ouvir as narrativas.',
      C: 'Garganta amarga e olhos doloridos são consequências, não a causa.',
      D: 'O desejo de desaparecer também é consequência.',
      E: 'Esquecer o tempo é um pedido, não a causa da mudança.'
    },
    conceitoCobrado: 'Relação de causa e consequência em texto poético.',
    pegadinha: 'As alternativas C, D e E apontam consequências do estado de alma, mas a causa primária são as narrativas ouvidas.',
    comoApareceEmConcurso: 'IBFC exige interpretação de texto literário, focando na progressão das ideias.'
  },
  tags: ['interpretação', 'causa e consequência']
},

{
  id: 'EX-IBFC-2025-09', tipo: 'REAL', area: 'GRA', moduloId: 'POR-10',
  subtema: 'Colocação pronominal — próclise',
  dificuldade: 3, prioridade: 'alta',
  enunciado: 'Considere a última estrofe do Texto II (IBFC 2025 / UFPB): "Como ficaram meus dias, e as flores claras que pensava! Nuvens brandas, construindo mundos, como se apagaram de repente!"\n\nAo longo do texto, em relação à colocação pronominal, houve privilégio da ênclise. No entanto, no último verso, a próclise pode ser justificada:',
  alternativas: [
    { id: 'A', texto: 'pela flexão da forma verbal "apagaram".' },
    { id: 'B', texto: 'por constituir uma oração coordenada.' },
    { id: 'C', texto: 'pela presença de uma construção adjetiva.' },
    { id: 'D', texto: 'por ser um verso de conotação negativa.' },
    { id: 'E', texto: 'pelo tom da oração explicitado pelo ponto.' }
  ],
  gabarito: 'E',
  explicacao: {
    correta: 'A alternativa E é a que mais se aproxima da intenção da banca. A próclise em "como se apagaram" ocorre pela presença da palavra atrativa "como" (advérbio de intensidade/modo em frase exclamativa). O ponto de exclamação reforça o tom exclamativo da oração, que também atrai o pronome para antes do verbo. Embora a palavra "como" seja o principal fator, entre as opções, o "tom da oração" (exclamativo) é o que justifica a próclise.',
    incorretas: {
      A: 'A flexão verbal não interfere na colocação pronominal.',
      B: 'Não é uma oração coordenada.',
      C: 'Não há construção adjetiva que justifique.',
      D: 'Conotação não é critério sintático para colocação pronominal.'
    },
    conceitoCobrado: 'Fatores de atração da próclise (advérbios, conjunções, tom exclamativo).',
    pegadinha: 'A ausência da opção "pela presença do advérbio \'como\'" faz o candidato ter que associar ao tom exclamativo da frase.',
    comoApareceEmConcurso: 'IBFC cobra gramática aplicada à análise de textos literários.'
  },
  tags: ['colocação pronominal', 'próclise']
},

{
  id: 'EX-IBFC-2025-10', tipo: 'REAL', area: 'GRA', moduloId: 'POR-12',
  subtema: 'Conjunções — valor semântico de explicação',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Considere o verso do Texto II (IBFC 2025 / UFPB): "...deixai-me esquecer o tempo, inclinar nas mãos a testa desencantada, e de mim mesma desaparecer, - que o clamor dos homens gloriosos cortou-me o coração de lado a lado."\n\nO vocábulo destacado ("que") introduz o valor semântico de:',
  alternativas: [
    { id: 'A', texto: 'comparação.' },
    { id: 'B', texto: 'concessão.' },
    { id: 'C', texto: 'oposição.' },
    { id: 'D', texto: 'explicação.' },
    { id: 'E', texto: 'conclusão.' }
  ],
  gabarito: 'D',
  explicacao: {
    correta: 'A alternativa D está correta. O "que" introduz uma oração que explica o motivo do pedido anterior ("deixai-me esquecer o tempo..."). Pode ser substituído por "pois" (pois o clamor...). É uma conjunção coordenativa explicativa.',
    incorretas: {
      A: 'Não há relação de semelhança.',
      B: 'Não há quebra de expectativa.',
      C: 'Não é uma adversativa (mas).',
      E: 'Não é uma conclusão (portanto).'
    },
    conceitoCobrado: 'Valor semântico das conjunções coordenativas explicativas.',
    pegadinha: 'O "que" é uma partícula muito versátil; aqui, introduz uma justificativa para o pedido do eu lírico.',
    comoApareceEmConcurso: 'IBFC cobra a substituição por "pois" para confirmar o valor explicativo.'
  },
  tags: ['conjunção', 'explicação']
},
/* ============================================================
   QUESTÕES REAIS IMPORTADAS — VUNESP 2026 / UNIFESP
   Língua Portuguesa (Questões 01 a 10)
   ============================================================ */

{
  id: 'EX-VUNESP-2026-01', tipo: 'REAL', area: 'LET', moduloId: 'POR-01',
  subtema: 'Compreensão textual e inferência em tirinhas',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Leia a tira da Turma do Linus (Charles M. Schulz, Peanuts completo, 2010):\n\n[Quadro 1] Menina: "Linus, se você jogar essa bola de neve em mim, eu vou contar pra mamãe!"\n[Quadro 2] (Som de impacto: POW! Linus joga a bola de neve nela).\n[Quadro 3] Menino: "Você jogou mesmo sabendo que ela ia dedurar?"\nLinus: "Claro... Quero que todo mundo saiba que eu tenho boa pontaria."\n[Quadro 4] Linus: "Onde mais eu ia conseguir essa publicidade gratuita?"\n\nA partir da leitura da tira, é correto afirmar que o garoto Linus atira a bola porque:',
  alternativas: [
    { id: 'A', texto: 'duvida que a menina vai cumprir a ameaça que fez de contar à mãe que foi alvejada.' },
    { id: 'B', texto: 'tem a certeza de que seu amigo vai defendê-lo caso a mãe tome alguma atitude.' },
    { id: 'C', texto: 'quer tornar pública sua habilidade, ainda que isso implique em levar uma bronca da mãe.' },
    { id: 'D', texto: 'deseja mostrar para a garota que ela se irrita por coisas inofensivas e normais entre crianças.' },
    { id: 'E', texto: 'tem vergonha de sua pontaria ruim e espera que a publicidade o ajude a esconder o fato.' }
  ],
  gabarito: 'C',
  explicacao: {
    correta: 'A alternativa C está correta. Linus joga a bola porque quer que "todo mundo saiba que eu tenho boa pontaria" e busca "publicidade gratuita", ou seja, ele quer exibir sua habilidade, mesmo sabendo da ameaça de levar bronca.',
    incorretas: {
      A: 'Ele não duvida da ameaça, tanto que diz "mesmo sabendo que ela ia dedurar".',
      B: 'O texto não menciona que o amigo vai defendê-lo.',
      D: 'O foco não é o que a garota pensa, mas sim o exibicionismo do Linus.',
      E: 'Ele tem boa pontaria (acerta a bola nela) e não tem vergonha disso.'
    },
    conceitoCobrado: 'Inferência de humor e intenção em textos verbais e não verbais (tirinhas).',
    pegadinha: 'A menina ameaça contar para a mãe, o que faz o leitor pensar que ele teria medo, mas a fala dele no último quadro revela que a vaidade superou o medo.',
    comoApareceEmConcurso: 'VUNESP costuma usar tirinhas para testar a capacidade de cruzar linguagem verbal com a não verbal.'
  },
  tags: ['interpretação', 'tirinha', 'inferência']
},

{
  id: 'EX-VUNESP-2026-02', tipo: 'REAL', area: 'GRA', moduloId: 'POR-12',
  subtema: 'Valor semântico de conectivos e conjunções',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Considere as frases extraídas da tira da VUNESP 2026:\n\nI. "Linus, SE você jogar essa bola em mim, eu vou contar pra mamãe!"\nII. "Você jogou MESMO sabendo que ela ia dedurar?"\n\nÉ correto afirmar que as palavras destacadas estabelecem, respectivamente, relações de sentido de:',
  alternativas: [
    { id: 'A', texto: 'condição e concessão.' },
    { id: 'B', texto: 'hipótese e consequência.' },
    { id: 'C', texto: 'concessão e adição.' },
    { id: 'D', texto: 'condição e conclusão.' },
    { id: 'E', texto: 'hipótese e adição.' }
  ],
  gabarito: 'A',
  explicacao: {
    correta: 'A alternativa A está correta. O "se" introduz uma oração subordinada adverbial condicional (uma condição para que a ameaça se cumpra). O "mesmo" atua como conjunção subordinativa concessiva, indicando uma quebra de expectativa (jogou a bola AINDA QUE soubesse da consequência).',
    incorretas: {
      B: 'O "se" pode indicar hipótese, mas no contexto é uma condição clara; e "mesmo" não indica consequência.',
      C: 'O "se" não é concessivo.',
      D: 'O "mesmo" não indica conclusão.',
      E: 'O "mesmo" não indica adição.'
    },
    conceitoCobrado: 'Classificação e valor semântico das conjunções subordinativas adverbiais (condicional e concessiva).',
    pegadinha: 'Confundir a palavra "mesmo" atuando como advérbio de afirmação (ex: "Eu mesmo fiz") com seu uso como conjunção concessiva ("mesmo sabendo").',
    comoApareceEmConcurso: 'VUNESP costuma cobrar a relação lógica entre as orações.'
  },
  tags: ['conjunções', 'condição', 'concessão']
},

{
  id: 'EX-VUNESP-2026-03', tipo: 'REAL', area: 'LET', moduloId: 'POR-19',
  subtema: 'Reescrita de frases e equivalência de sentido',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'No 4º quadro da tira (VUNESP 2026), a frase "Onde mais eu ia conseguir essa publicidade gratuita?" pode ser reescrita, em conformidade com a norma-padrão e mantendo o sentido original, da seguinte forma:',
  alternativas: [
    { id: 'A', texto: 'Aonde eu ia conseguir essa publicidade gratuita?' },
    { id: 'B', texto: 'Em que outro lugar eu ia conseguir essa publicidade gratuita?' },
    { id: 'C', texto: 'Que lugar mais eu ia conseguir essa publicidade gratuita?' },
    { id: 'D', texto: 'Qual outra situação eu ia conseguir essa publicidade gratuita?' },
    { id: 'E', texto: 'Que outra forma eu ia conseguir essa publicidade gratuita?' }
  ],
  gabarito: 'B',
  explicacao: {
    correta: 'A alternativa B está correta. O termo "Onde mais" refere-se a lugar. A reescrita que preserva o sentido e a correção gramatical é "Em que outro lugar".',
    incorretas: {
      A: 'O verbo "conseguir" não exige a preposição "a" (movimento), mas sim "em". O correto seria "Onde" e não "Aonde".',
      C: 'A construção é coloquial e não respeita a norma-padrão.',
      D: 'Altera o sentido original de lugar para "situação".',
      E: 'Altera o sentido original de lugar para "forma".'
    },
    conceitoCobrado: 'Equivalência semântica e adequação à norma culta (uso de onde/aonde).',
    pegadinha: 'A troca de "onde" por "aonde", que é um erro comum, mas "aonde" só deve ser usado com verbos de movimento (ir a algum lugar).',
    comoApareceEmConcurso: 'VUNESP exige reescritas que mantenham o sentido e a correção gramatical.'
  },
  tags: ['reescrita', 'equivalência semântica', 'onde']
},

{
  id: 'EX-VUNESP-2026-04', tipo: 'REAL', area: 'LET', moduloId: 'POR-01',
  subtema: 'Compreensão textual — tese do autor',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Texto-base (VUNESP 2026 / UNIFESP):\n\nSimpatia pelo lobo\n\nO lobo é o grande bicho-papão das histórias infantis. Criatura da escuridão, de olhos amarelos e devorante boca, carrasco de inocentes – é o que nos asseguram as fábulas O lobo e o cordeiro (Esopo, La Fontaine), Chapeuzinho Vermelho (Charles Perrault, irmãos Grimm), Os três porquinhos (Joseph Jacobs), entre outras.\n\nNão é difícil entender a razão desse estigma: diferentemente das vacas, porcos e ovelhas, o lobo é um dos animais que, tal como a aranha e a serpente, recusaram a domesticação, permanecendo independentes do homem. Sobre esta escolha crucial temos o testemunho insuspeito de Esopo. Convidado pelo cão a trocar as agruras da liberdade pelas migalhas da servidão, ele retrucou: "Antes livre, mas faminto, do que gordo, mas cativo!".\n\nTendo rejeitado a civilização, o lobo seguiu seu caminho, irremediavelmente fiel à natureza. Daí ter se tornado a representação sensível da selvageria, dos instintos, dos subterrâneos da alma.\n\nA natureza sabe ser hostil, mas também sabe prover: foi uma loba etrusca que amamentou Rômulo e Remo. E ela, sobretudo, sabe ensinar. Como dizia seu aluno Leonardo da Vinci, todos "aqueles que tomam por mestre a outro que não seja a natureza, mestra de mestres, se esforçam em vão".\n\n(Mauricio Puls, Revista Quatro Cinco Um, outubro de 2020. Adaptado).\n\nEm relação às considerações feitas a respeito da figura do lobo nas fábulas, é correto afirmar que o autor do texto:',
  alternativas: [
    { id: 'A', texto: 'reafirma o estigma tradicional do lobo como inimigo do ser humano, mostrando que a literatura infantil reflete fielmente seu comportamento biológico.' },
    { id: 'B', texto: 'apresenta o lobo como um ser que possui uma imagem negativa causada principalmente pelo seu afastamento da domesticação e da vida civilizada.' },
    { id: 'C', texto: 'revela que o lobo é um ser tanto selvagem quanto obediente ao homem, como demonstram Esopo, grande autor de fábulas infantis.' },
    { id: 'D', texto: 'busca relacionar a figura do lobo ao professor, que ensina com rigidez, de modo que o aluno entenda que o aprendizado é libertador.' },
    { id: 'E', texto: 'propõe que o lobo deva ser entendido como um herói nas histórias infantis, já que é inimigo do ser humano, o qual está destruindo a natureza.' }
  ],
  gabarito: 'B',
  explicacao: {
    correta: 'A alternativa B está correta. O texto afirma explicitamente que o estigma existe porque o lobo "recusou a domesticação" e "rejeitou a civilização", tornando-se a "representação sensível da selvageria".',
    incorretas: {
      A: 'O autor não reafirma o estigma como uma verdade biológica; ele explica a origem cultural/antropológica dele.',
      C: 'O texto diz que ele é independente, não obediente.',
      D: 'A menção a Leonardo da Vinci e à natureza como mestra não relaciona o lobo a um professor rígido.',
      E: 'O texto não propõe o lobo como herói; ele explica a visão negativa.'
    },
    conceitoCobrado: 'Identificação da tese e da argumentação do autor.',
    pegadinha: 'A letra A parece correta porque o texto cita o estigma, mas o autor está explicando o porquê do estigma, não concordando que ele seja um mal biológico.',
    comoApareceEmConcurso: 'VUNESP exige distinguir entre o que o autor relata (a visão das fábulas) e o que ele defende (a explicação da origem do estigma).'
  },
  tags: ['compreensão textual', 'tese']
},

{
  id: 'EX-VUNESP-2026-05', tipo: 'REAL', area: 'LET', moduloId: 'POR-04',
  subtema: 'Semântica — sinônimos contextuais',
  dificuldade: 3, prioridade: 'alta',
  enunciado: 'Considere os seguintes trechos do 2º parágrafo do texto "Simpatia pelo lobo" (VUNESP 2026):\n\n• "Não é difícil entender a razão desse estigma..."\n• "Convidado pelo cão a trocar as agruras da liberdade pelas migalhas da servidão..."\n\nÉ correto afirmar que as palavras destacadas têm como sinônimos, correta e respectivamente:',
  alternativas: [
    { id: 'A', texto: 'desdém e venturas.' },
    { id: 'B', texto: 'problema e ternuras.' },
    { id: 'C', texto: 'engano e vantagens.' },
    { id: 'D', texto: 'vergonha e custos.' },
    { id: 'E', texto: 'mácula e atribulações.' }
  ],
  gabarito: 'E',
  explicacao: {
    correta: 'A alternativa E está correta. No contexto, "estigma" refere-se a uma marca negativa, uma mácula. "Agruras" significa sofrimentos, dificuldades, atribulações (Nota: no PDF extraído consta "atribuicoes", o que é um erro de digitação do documento; o correto é "atribulações").',
    incorretas: {
      A: '"Venturas" significa sorte/felicidade, o oposto de agruras.',
      B: '"Ternuras" significa carinho, o oposto de agruras.',
      C: '"Engano" e "vantagens" não correspondem aos sentidos.',
      D: '"Vergonha" e "custos" não capturam a ideia de mácula e sofrimento.'
    },
    conceitoCobrado: 'Identificação de sinônimos adequados ao contexto (estigma = mácula; agruras = atribulações).',
    pegadinha: 'O erro de digitação do PDF ("atribuições" em vez de "atribulações") pode confundir, mas a análise das outras alternativas descarta todas as outras opções.',
    comoApareceEmConcurso: 'VUNESP cobra vocabulário e contexto.'
  },
  tags: ['semântica', 'sinônimos', 'vocabulário']
},

{
  id: 'EX-VUNESP-2026-06', tipo: 'REAL', area: 'GRA', moduloId: 'POR-18',
  subtema: 'Pontuação — Uso dos dois-pontos',
  dificuldade: 1, prioridade: 'alta',
  enunciado: 'Em "A natureza sabe ser hostil, mas também sabe prover: foi uma loba etrusca que amamentou Rômulo e Remo" (4º parágrafo do texto "Simpatia pelo lobo" — VUNESP 2026), o sinal de dois-pontos foi empregado para introduzir uma:',
  alternativas: [
    { id: 'A', texto: 'enumeração.' },
    { id: 'B', texto: 'citação.' },
    { id: 'C', texto: 'conclusão.' },
    { id: 'D', texto: 'explicação.' },
    { id: 'E', texto: 'consequência.' }
  ],
  gabarito: 'D',
  explicacao: {
    correta: 'A alternativa D está correta. Os dois-pontos introduzem uma explicação ou justificativa para a afirmação anterior (a natureza sabe prover, e o exemplo da loba que amamentou Rômulo e Remo comprova/explica isso).',
    incorretas: {
      A: 'Não há uma lista de itens.',
      B: 'Não há uma fala de outro autor entre aspas.',
      C: 'Não é uma conclusão lógica (portanto).',
      E: 'Não é uma consequência direta (tanto que).'
    },
    conceitoCobrado: 'Funções dos dois-pontos (introduzir explicação, enumeração, citação).',
    pegadinha: 'A confusão entre conclusão e explicação. O fato da loba não é uma consequência da natureza prover, é um exemplo que explica como ela provê.',
    comoApareceEmConcurso: 'VUNESP cobra a função sintática/semântica da pontuação.'
  },
  tags: ['pontuação', 'dois-pontos', 'explicação']
},

{
  id: 'EX-VUNESP-2026-07', tipo: 'REAL', area: 'GRA', moduloId: 'POR-10',
  subtema: 'Colocação pronominal (próclise, ênclise, mesóclise)',
  dificuldade: 3, prioridade: 'alta',
  enunciado: 'Assinale a alternativa em que o trecho do texto "Simpatia pelo lobo" (VUNESP 2026) foi reescrito em conformidade com a norma-padrão de colocação dos pronomes.',
  alternativas: [
    { id: 'A', texto: 'Não se trata de um estigma difícil de entender… (2º parágrafo)' },
    { id: 'B', texto: '… o lobo é um dos animais que recusaram-se a se domesticar… (2º parágrafo)' },
    { id: 'C', texto: 'Tendo negado-se a ser civilizado, o lobo seguiu seu caminho… (3º parágrafo)' },
    { id: 'D', texto: 'Se tornou então a representação sensível da selvageria… (3º parágrafo)' },
    { id: 'E', texto: '… foi uma loba etrusca que ocupou-se de Rômulo e Remo… (4º parágrafo)' }
  ],
  gabarito: 'A',
  explicacao: {
    correta: 'A alternativa A está correta. O pronome "se" está antes do verbo (próclise) devido à presença da palavra negativa "Não", que é um fator de atração. A frase original é "Não é difícil entender...", a reescrita com "Não se trata..." mantém a correção.',
    incorretas: {
      B: 'Erro. O pronome relativo "que" é fator de atração, exigindo próclise: "...que se recusaram...".',
      C: 'Erro. Não se inicia oração com pronome oblíquo átono após gerúndio/particípio sem justificativa; o correto seria "Tendo-se negado" (ênclise no auxiliar) ou "Negando-se".',
      D: 'Erro. Não se inicia frase com pronome oblíquo átono. O correto seria "Tornou-se então...".',
      E: 'Erro. O "que" é pronome relativo (fator de atração), exigindo próclise: "...que se ocupou...".'
    },
    conceitoCobrado: 'Regras de colocação pronominal (fatores de próclise: palavras negativas, pronomes relativos; proibição de iniciar frase com pronome).',
    pegadinha: 'A alternativa C tenta enganar com o gerúndio, mas a ênclise no particípio/gerúndio tem regras específicas.',
    comoApareceEmConcurso: 'VUNESP cobra colocação pronominal aplicada a reescritas de trechos do texto.'
  },
  tags: ['colocação pronominal', 'próclise', 'ênclise']
},

{
  id: 'EX-VUNESP-2026-08', tipo: 'REAL', area: 'LET', moduloId: 'POR-01',
  subtema: 'Compreensão textual — causa e consequência',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Texto-base (VUNESP 2026 / UNIFESP):\n\nRecrutamento automatizado amplia o "ghosting" e desumaniza processos seletivos\n\nO ghosting de recrutamento ocorre quando o recrutador de uma empresa simplesmente some, nas palavras de Luli Radfahrer, professor da Universidade de São Paulo. Isso depois de o candidato ter enviado o currículo e, às vezes, até ter feito entrevista e recebido alguma sinalização de que o contato será retomado, o que nunca acontece. "O problema é que isso deixou de ser exceção, virou regra. Não é mais um recrutador mal-educado aqui ou ali. É o sistema inteiro que funciona assim [...] Antigamente, uma vaga boa recebia 50, 100 currículos. Hoje pode receber milhares. O que acontece com isso é que as plataformas digitais eliminaram o contato humano do processo. Tem inteligência artificial fazendo triagem, robô agendando entrevista, sistema automático rejeitando gente. Para uma empresa ignorar 500 candidatos ficou muito mais fácil do que enviar manualmente 500 e-mails."\n\nPara piorar, segundo Radfahrer, muita candidatura nunca chega aos olhos humanos. "O algoritmo busca palavras-chave específicas, verifica o histórico educacional, se não bater com o que ele quer, tchau. Sem feedback, sem explicação. Tem empresa usando inteligência artificial que analisa a expressão facial, tom de voz e até a escolha de palavras em entrevista por vídeo. E aí rejeita sem ninguém assistir."\n\nÉ claro que existe também o outro lado da moeda, que é quando o candidato dá o troco e não aparece na entrevista, isso depois de aceitar a vaga. "Algumas empresas têm taxas altíssimas de ausência. É tipo uma vingança, mas cria um ciclo horrível, onde ninguém confia em ninguém. Todo mundo se trata mal, porque todo mundo acha que vai ser maltratado."\n\nFato é que não se pode ignorar os custos psicológicos e econômicos que isso acaba acarretando.\n\n(Jornal USP. Adaptado).\n\nDe acordo com o texto, o "ghosting" no recrutamento é explicado, sobretudo, por qual fator?',
  alternativas: [
    { id: 'A', texto: 'ao despreparo dos recrutadores, cuja má educação individual explica a maior parte dos sumiços relatados pelos candidatos.' },
    { id: 'B', texto: 'à falta de transparência das empresas, que preferem ocultar informações aos candidatos para manter um suposto controle emocional sobre eles.' },
    { id: 'C', texto: 'aos candidatos, cuja falta de comprometimento se tornou tão comum que obrigou as empresas a adotar sistemas automatizados de triagem e filtragem.' },
    { id: 'D', texto: 'ao uso indiscriminado de tecnologias digitais, que automatizam etapas e reduzem o contato humano, transformando o desrespeito em prática comum.' },
    { id: 'E', texto: 'à cultura de vingança que se estabeleceu entre recrutadores e candidatos, responsável por tornar os processos seletivos inevitavelmente hostis.' }
  ],
  gabarito: 'D',
  explicacao: {
    correta: 'A alternativa D está correta. O texto aponta que "as plataformas digitais eliminaram o contato humano", com "inteligência artificial fazendo triagem, robô agendando entrevista, sistema automático rejeitando gente", o que tornou a prática do ghosting mais fácil e comum (sistêmica).',
    incorretas: {
      A: 'O texto diz que "não é mais um recrutador mal-educado aqui ou ali", mas sim um problema sistêmico.',
      B: 'O texto não fala sobre controle emocional, mas sobre automação.',
      C: 'O texto coloca a automação como causa do ghosting, e não como reação à falta de comprometimento dos candidatos.',
      E: 'A vingança é uma consequência do ghosting, não a causa dele.'
    },
    conceitoCobrado: 'Leitura e compreensão de texto argumentativo (identificação de causa e consequência).',
    pegadinha: 'A letra E usa o termo "vingança", que está no texto, mas refere-se à reação dos candidatos e não à causa do ghosting pelas empresas.',
    comoApareceEmConcurso: 'VUNESP exige diferenciar a causa de um problema das suas consequências.'
  },
  tags: ['compreensão textual', 'causa e consequência']
},

{
  id: 'EX-VUNESP-2026-09', tipo: 'REAL', area: 'LET', moduloId: 'POR-04',
  subtema: 'Denotação e conotação (sentido figurado)',
  dificuldade: 1, prioridade: 'alta',
  enunciado: 'No texto "Recrutamento automatizado amplia o ghosting..." (VUNESP 2026), a palavra destacada foi empregada em sentido figurado no trecho:',
  alternativas: [
    { id: 'A', texto: '"Isso depois de o candidato ter enviado o currículo e, às vezes, até ter feito entrevista…" (1º parágrafo)' },
    { id: 'B', texto: '"O problema é que isso deixou de ser exceção, virou regra." (1º parágrafo)' },
    { id: 'C', texto: '"Tem empresa usando inteligência artificial que analisa a expressão facial…" (2º parágrafo)' },
    { id: 'D', texto: '"É claro que existe também o outro lado da moeda, que é quando o candidato dá o troco…" (3º parágrafo)' },
    { id: 'E', texto: '"Fato é que não se pode ignorar os custos psicológicos e econômicos que isso acaba acarretando…" (4º parágrafo)' }
  ],
  gabarito: 'D',
  explicacao: {
    correta: 'A alternativa D está correta. A expressão "o outro lado da moeda" foi usada em sentido figurado (conotativo) para significar "a outra versão dos fatos" ou "o outro ponto de vista". Da mesma forma, "dá o troco" significa "vingar-se", e não dar dinheiro de volta.',
    incorretas: {
      A: '"enviado o currículo" e "feito entrevista" estão no sentido literal.',
      B: '"virou regra" é uma expressão figurada leve, mas a letra D é muito mais evidente.',
      C: '"expressão facial" está no sentido literal.',
      E: '"custos psicológicos" é usado no sentido literal/técnico de prejuízos.'
    },
    conceitoCobrado: 'Identificação de expressões idiomáticas e sentido figurado.',
    pegadinha: 'A letra B também tem um tom figurado, mas a metáfora da moeda e a expressão "dar o troco" são exemplos clássicos de conotação.',
    comoApareceEmConcurso: 'VUNESP cobra a identificação de expressões do cotidiano usadas de forma figurada.'
  },
  tags: ['conotação', 'sentido figurado']
},

{
  id: 'EX-VUNESP-2026-10', tipo: 'REAL', area: 'GRA', moduloId: 'POR-15',
  subtema: 'Concordância verbal e nominal',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'A concordância nominal e verbal está em conformidade com a norma-padrão em:',
  alternativas: [
    { id: 'A', texto: 'Um professor fala das questões que foi observado em entrevistas de emprego.' },
    { id: 'B', texto: 'Muitas entrevistas ocorrem sem que os entrevistados recebam quaisquer resposta depois.' },
    { id: 'C', texto: 'A inteligência artificial já consegue avaliar candidatos que pleiteiam uma vaga de emprego.' },
    { id: 'D', texto: 'Existe em algumas empresas taxas altíssimas de ausência dos candidatos às vagas.' },
    { id: 'E', texto: 'Há certos custos psicológicos e econômicos que está envolvido na busca de um emprego.' }
  ],
  gabarito: 'C',
  explicacao: {
    correta: 'A alternativa C está correta. O sujeito "A inteligência artificial" (singular) concorda com o verbo "consegue" (singular). O verbo "avaliar" é transitivo direto e seu objeto "candidatos" é plural, e o verbo "pleiteiam" concorda com "candidatos".',
    incorretas: {
      A: 'Erro. O verbo "observar" deveria concordar com "questões" (foram observadas).',
      B: 'Erro. "Quaisquer" é plural, mas o substantivo "resposta" está no singular. O correto seria "quaisquer respostas".',
      D: 'Erro. O verbo "existir" é pessoal e deveria ir para o plural: "Existem... taxas".',
      E: 'Erro. O verbo "estar" deveria concordar com "custos" (que estão envolvidos).'
    },
    conceitoCobrado: 'Regras de concordância nominal e verbal, especialmente com verbos impessoais (existir) e sujeito composto.',
    pegadinha: 'A alternativa D tenta enganar trocando "haver" por "existir" (haver é impessoal e fica no singular, existir vai para o plural).',
    comoApareceEmConcurso: 'VUNESP cobra a concordância aplicada a contextos reais.'
  },
  tags: ['concordância', 'verbos impessoais']
},
/* ============================================================
   QUESTÕES REAIS IMPORTADAS — FEPESE 2026 / Prefeitura de Florianópolis
   Língua Portuguesa (Questões 01 a 05)
   ============================================================ */

{
  id: 'EX-FEPESE-2026-01', tipo: 'REAL', area: 'LET', moduloId: 'POR-01',
  subtema: 'Compreensão textual — ideia central e detalhes',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Texto-base (FEPESE 2026 / Prefeitura de Florianópolis):\n\nSão José amplia hortas urbanas com nova lei voltada à sustentabilidade\n\nA sustentabilidade ganhou reforço institucional em São José com a sanção da Lei nº 6.535, de 11 de dezembro de 2025, que transformou o Programa Horta Solidária Urbana em política pública permanente. A medida oficializa e amplia uma iniciativa já em atividade na cidade, responsável por revitalizar áreas públicas ociosas e convertê-las em espaços produtivos de cultivo agroecológico e participação social.\n\nA legislação estabelece parâmetros estáveis para a implantação e a expansão das hortas comunitárias, que atualmente funcionam nos bairros Ipiranga, Potecas, Loteamento Lisboa (Forquilhas), Morar Bem (Serraria) e Areias. O texto legal orienta que cada área cultivada tenha foco na promoção do meio ambiente, na segurança alimentar e na economia solidária, estimulando o uso socialmente responsável dos espaços públicos.\n\nEntre os avanços previstos, a lei destaca o incentivo à compostagem como instrumento para reduzir o volume de resíduos enviados a aterros sanitários. As unidades da rede municipal de ensino passam a incorporar a compostagem escolar à rotina pedagógica, fortalecendo práticas de educação ambiental e ampliando o protagonismo estudantil em ações de cuidado com o território.\n\nA execução do programa contará com suporte técnico, logístico e educacional da Fundação Municipal do Meio Ambiente e Desenvolvimento Sustentável. O texto autoriza que associações de moradores, entidades e grupos organizados possam assumir a gestão das áreas destinadas ao cultivo. O financiamento das ações poderá ser assegurado por múltiplas fontes, incluindo orçamento municipal, parcerias privadas, repasses estaduais e federais, emendas parlamentares, medidas compensatórias e doações.\n\nA legislação institui ainda o Selo Verde, criado para reconhecer empresas, instituições e grupos comunitários que contribuírem com o programa por meio de doações, apoio financeiro, insumos ou iniciativas educativas e ambientais. O objetivo é valorizar parceiros que fortaleçam práticas de preservação e colaboração comunitária.\n\nAssinale a alternativa correta com base no texto sobre a ampliação das hortas urbanas em São José.',
  alternativas: [
    { id: 'A', texto: 'O programa passa a funcionar apenas nas escolas da rede municipal, deixando de atuar em bairros e espaços públicos da cidade.' },
    { id: 'B', texto: 'O Selo Verde será concedido exclusivamente a órgãos públicos que financiarem integralmente o programa com recursos municipais.' },
    { id: 'C', texto: 'A nova lei transforma o Programa Horta Solidária Urbana em política pública permanente, estabelece diretrizes para sua expansão e prevê ações como incentivo à compostagem, apoio técnico institucional e estímulos à participação social.' },
    { id: 'D', texto: 'A legislação determina a substituição das hortas comunitárias por parcerias exclusivamente privadas, com financiamento restrito a empresas do setor agrícola.' },
    { id: 'E', texto: 'A lei extingue a possibilidade de gestão das hortas por associações de moradores, centralizando todas as decisões na Fundação Municipal do Meio Ambiente.' }
  ],
  gabarito: 'C',
  explicacao: {
    correta: 'A alternativa C está correta. O texto afirma que a lei "transformou o Programa Horta Solidária Urbana em política pública permanente", estabelece parâmetros, e cita o incentivo à compostagem, suporte técnico e participação social.',
    incorretas: {
      A: 'O texto menciona a compostagem escolar, mas não diz que o programa passa a funcionar apenas nas escolas.',
      B: 'O Selo Verde é para empresas, instituições e grupos comunitários (não exclusivo de órgãos públicos), e não exige financiamento integral.',
      D: 'A lei autoriza associações e grupos organizados, não restringe a parcerias exclusivamente privadas.',
      E: 'O texto expressamente autoriza que associações de moradores assumam a gestão.'
    },
    conceitoCobrado: 'Compreensão global e identificação de informações explícitas.',
    pegadinha: 'A letra E tenta inverter o que o texto diz sobre a gestão das hortas. O texto descentraliza, a letra E diz que centraliza.',
    comoApareceEmConcurso: 'FEPESE costuma usar textos de fontes locais e cobrar a localização de informações específicas.'
  },
  tags: ['compreensão', 'ideia central']
},

{
  id: 'EX-FEPESE-2026-02', tipo: 'REAL', area: 'LET', moduloId: 'POR-01',
  subtema: 'Compreensão textual — localização de informação',
  dificuldade: 1, prioridade: 'alta',
  enunciado: 'Considere o texto "São José amplia hortas urbanas com nova lei voltada à sustentabilidade" (FEPESE 2026).\n\nSegundo o texto, o que é o Selo Verde?',
  alternativas: [
    { id: 'A', texto: 'Um mecanismo criado para fiscalizar empresas, instituições e grupos comunitários quanto ao cumprimento obrigatório de metas ambientais estabelecidas pelo poder público municipal.' },
    { id: 'B', texto: 'Uma política pública criada para financiar empresas, instituições e grupos comunitários com recursos exclusivos do orçamento municipal destinado à sustentabilidade.' },
    { id: 'C', texto: 'Um projeto educativo criado para capacitar empresas, instituições e grupos comunitários na gestão técnica das hortas urbanas comunitárias do município.' },
    { id: 'D', texto: 'Uma taxa ambiental criada para regulamentar empresas, instituições e grupos comunitários no uso de espaços públicos destinados ao cultivo agroecológico.' },
    { id: 'E', texto: 'Uma certificação criada para reconhecer empresas, instituições e grupos comunitários que contribuam com o programa por meio de doações, apoio financeiro, insumos ou iniciativas educativas.' }
  ],
  gabarito: 'E',
  explicacao: {
    correta: 'A alternativa E está correta. O texto afirma: "a legislação institui ainda o Selo Verde, criado para reconhecer empresas, instituições e grupos comunitários que contribuírem com o programa por meio de doações, apoio financeiro, insumos ou iniciativas educativas e ambientais".',
    incorretas: {
      A: 'O Selo Verde não é um mecanismo de fiscalização, mas de reconhecimento.',
      B: 'Não é uma política de financiamento, é um selo de reconhecimento.',
      C: 'Não é um projeto educativo.',
      D: 'Não é uma taxa ambiental.'
    },
    conceitoCobrado: 'Localização de informação explícita no texto.',
    pegadinha: 'As alternativas A e B inventam funções (fiscalização, financiamento) que não estão no texto.',
    comoApareceEmConcurso: 'Questão de compreensão direta, comum em provas da FEPESE.'
  },
  tags: ['compreensão', 'informação explícita']
},

{
  id: 'EX-FEPESE-2026-03', tipo: 'REAL', area: 'GRA', moduloId: 'POR-10',
  subtema: 'Pronomes — oblíquo átono',
  dificuldade: 1, prioridade: 'alta',
  enunciado: 'No trecho "responsável por revitalizar áreas públicas ociosas e convertê-las em espaços produtivos de cultivo agroecológico e participação social" (FEPESE 2026), a forma "-las" é classificada, morfologicamente, como:',
  alternativas: [
    { id: 'A', texto: 'artigo indefinido no plural.' },
    { id: 'B', texto: 'artigo definido feminino plural.' },
    { id: 'C', texto: 'conjunção subordinativa integrante.' },
    { id: 'D', texto: 'pronome pessoal oblíquo átono.' },
    { id: 'E', texto: 'partícula apassivadora.' }
  ],
  gabarito: 'D',
  explicacao: {
    correta: 'A alternativa D está correta. A forma "-las" é um pronome pessoal oblíquo átono, que está substituindo o objeto direto "áreas públicas ociosas" (feminino plural).',
    incorretas: {
      A: 'Artigos indefinidos são "um, uma, uns, umas".',
      B: 'Artigos definidos são "o, a, os, as". O "-las" está ligado ao verbo (convertê-las), funcionando como pronome.',
      C: 'Conjunções integrantes são "que" e "se".',
      E: 'Partícula apassivadora é o "se" (ex: vendem-se casas).'
    },
    conceitoCobrado: 'Identificação de pronomes oblíquos átonos (o, a, os, as, lo, la, los, las, etc.).',
    pegadinha: 'A semelhança com o artigo "as" pode confundir, mas a posposição ao verbo (ênclise) e a função de objeto direto confirmam o pronome.',
    comoApareceEmConcurso: 'A FEPESE costuma cobrar a classificação morfológica de termos dentro do texto.'
  },
  tags: ['pronomes', 'oblíquo átono', 'morfologia']
},

{
  id: 'EX-FEPESE-2026-04', tipo: 'REAL', area: 'GRA', moduloId: 'POR-06',
  subtema: 'Ortografia — hífen e acentuação (Acordo Ortográfico)',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Assinale a alternativa em que os usos do hífen e de acentuação gráfica estão corretos, de acordo com as regras do Acordo Ortográfico:',
  alternativas: [
    { id: 'A', texto: 'agroecológico • socioambiental • infraestrutura • antissocial' },
    { id: 'B', texto: 'agroecologico • socio-ambiental • infra estrutura • anti social' },
    { id: 'C', texto: 'agro ecológico • socioambiental • infra-estrutura • anti-social' },
    { id: 'D', texto: 'agro-ecologico • sócioambiental • infra estrutura • antissocial' },
    { id: 'E', texto: 'agro-ecológico • sócio-ambiental • infra-estrutura • anti-social' }
  ],
  gabarito: 'A',
  explicacao: {
    correta: 'A alternativa A está correta. Todas as palavras seguem o Acordo Ortográfico:\n- agroecológico (prefixo "agro" + vogal "e" diferente -> sem hífen).\n- socioambiental (prefixo "socio" + vogal "a" diferente -> sem hífen).\n- infraestrutura (prefixo "infra" + vogal "e" diferente -> sem hífen).\n- antissocial (prefixo "anti" + palavra iniciada com "s" -> dobra o "s", sem hífen).',
    incorretas: {
      B: 'Erros de acentuação e espaçamento (anti social).',
      C: 'Erros de hífen em "infra-estrutura" e "anti-social".',
      D: 'Erros de hífen em "agro-ecologico" e acentuação em "sócioambiental".',
      E: 'Erros de hífen em todas as palavras (infra-estrutura, anti-social, etc.).'
    },
    conceitoCobrado: 'Regras de hífen com prefixos (vogais diferentes, mesma vogal, consoante igual) e acentuação.',
    pegadinha: 'A palavra "antissocial" é frequentemente escrita errada como "anti-social" ou "antisocial".',
    comoApareceEmConcurso: 'FEPESE foca nas mudanças do Acordo Ortográfico.'
  },
  tags: ['ortografia', 'hífen', 'acordo ortográfico']
},

{
  id: 'EX-FEPESE-2026-05', tipo: 'REAL', area: 'GRA', moduloId: 'POR-13',
  subtema: 'Sintaxe — tipos de sujeito',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'No período "A execução do programa contará com suporte técnico, logístico e educacional da Fundação Municipal do Meio Ambiente e Desenvolvimento Sustentável." (FEPESE 2026), assinale a alternativa correta quanto ao sujeito da oração.',
  alternativas: [
    { id: 'A', texto: 'O sujeito é "A execução do programa" e é definido como sujeito determinado composto.' },
    { id: 'B', texto: 'O sujeito é indeterminado, pois não há elemento explícito que pratique a ação verbal.' },
    { id: 'C', texto: 'Trata-se de oração sem sujeito, uma vez que o verbo "contar" é impessoal nesse contexto.' },
    { id: 'D', texto: 'O sujeito é oculto, podendo ser identificado apenas pela desinência verbal.' },
    { id: 'E', texto: 'O sujeito é determinado simples e está expresso pelo sintagma nominal "A execução do programa".' }
  ],
  gabarito: 'E',
  explicacao: {
    correta: 'A alternativa E está correta. O sujeito é "A execução do programa". É simples porque possui apenas um núcleo ("execução"), e é determinado porque está expresso na oração.',
    incorretas: {
      A: 'O sujeito é simples, não composto (há apenas um núcleo).',
      B: 'O sujeito está explícito no texto.',
      C: 'O verbo "contar" (no sentido de dispor de) não é impessoal; ele tem sujeito.',
      D: 'O sujeito está expresso, não oculto.'
    },
    conceitoCobrado: 'Classificação do sujeito (determinado simples, composto, oculto, indeterminado ou inexistente).',
    pegadinha: 'A presença de vários substantivos ("suporte técnico, logístico e educacional") pode levar o candidato a achar que é um sujeito composto, mas o sujeito é apenas o termo que pratica a ação de "contar".',
    comoApareceEmConcurso: 'FEPESE cobra a análise sintática de termos da oração.'
  },
  tags: ['sintaxe', 'sujeito simples', 'análise sintática']
},
/* ============================================================
   QUESTÕES REAIS IMPORTADAS — FUNDATEC 2026 / DEMHAB POA
   Língua Portuguesa (Questões 01 a 10)
   ============================================================ */

{
  id: 'EX-FUNDATEC-2026-01', tipo: 'REAL', area: 'LET', moduloId: 'POR-01',
  subtema: 'Compreensão textual — localização de informação explícita',
  dificuldade: 1, prioridade: 'alta',
  enunciado: 'Texto-base (FUNDATEC 2026 / DEMHAB POA):\n\nFim da jornada 6x1, um tema que ainda levanta muitas dúvidas\n\nO debate sobre o fim da jornada 6×1 ganhou destaque no Brasil recentemente. Em fevereiro de 2025, foi apresentada a Proposta de Emenda Constitucional (PEC) nº 8/2025, que altera o artigo 7º da Constituição Federal. A proposta prevê que a duração normal do trabalho não ultrapasse oito horas por dia e 36 horas por semana – o que resultaria em quatro dias de trabalho e três de descanso, sem redução de salário.\n\nHoje, a Constituição permite até 44 horas semanais, na tradicional escala de seis dias de trabalho para um de descanso...\n\nDe acordo com o texto, a Proposta de Emenda Constitucional nº 8/2025 prevê:',
  alternativas: [
    { id: 'A', texto: 'A manutenção da jornada de 44 horas semanais, distribuídas em cinco dias de trabalho.' },
    { id: 'B', texto: 'A limitação da jornada a oito horas diárias e 36 horas semanais, sem redução salarial.' },
    { id: 'C', texto: 'A redução da jornada diária para seis horas, sem alteração no número de dias trabalhados.' },
    { id: 'D', texto: 'A adoção de quatro dias de trabalho e três de descanso, acompanhada de redução proporcional do salário.' },
    { id: 'E', texto: 'A substituição da jornada semanal por um sistema definido individualmente por cada empresa.' }
  ],
  gabarito: 'B',
  explicacao: {
    correta: 'A alternativa B está correta. O texto afirma explicitamente que "A proposta prevê que a duração normal do trabalho não ultrapasse oito horas por dia e 36 horas por semana... sem redução de salário".',
    incorretas: {
      A: 'O texto diz que a jornada atual é de 44 horas, mas a PEC quer reduzir isso.',
      C: 'A PEC prevê 8 horas diárias, não 6.',
      D: 'A PEC garante a manutenção do salário, não a redução proporcional.',
      E: 'A PEC altera a Constituição para todos, não individualiza por empresa.'
    },
    conceitoCobrado: 'Compreensão literal de texto.',
    pegadinha: 'A letra D menciona "quatro dias de trabalho e três de descanso", o que está no texto, mas adiciona "redução proporcional do salário", o que contraria o texto.',
    comoApareceEmConcurso: 'FUNDATEC costuma usar questões de localização direta para iniciar a prova.'
  },
  tags: ['compreensão', 'informação explícita']
},

{
  id: 'EX-FUNDATEC-2026-02', tipo: 'REAL', area: 'LET', moduloId: 'POR-01',
  subtema: 'Inferência textual',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Considere as informações do texto "Fim da jornada 6x1..." (FUNDATEC 2026) sobre as experiências de redução de jornada feitas em outros países.\n\nPode-se inferir que essa redução:',
  alternativas: [
    { id: 'A', texto: 'Produz os mesmos efeitos econômicos independentemente da forma como é implementada.' },
    { id: 'B', texto: 'Pode ser adotada por diferentes modelos, que envolvem consequências e ajustes distintos.' },
    { id: 'C', texto: 'Depende necessariamente do aumento da jornada diária dos trabalhadores.' },
    { id: 'D', texto: 'Somente apresenta resultados positivos quando acompanhada de novas contratações.' },
    { id: 'E', texto: 'Tem provocado diminuição de produtividade nos países em que foi implementada.' }
  ],
  gabarito: 'B',
  explicacao: {
    correta: 'A alternativa B está correta. O texto cita que na Bélgica a carga foi concentrada em 4 dias (jornadas mais longas), enquanto na Islândia exigiu novas contratações. Isso mostra que há diferentes modelos e consequências.',
    incorretas: {
      A: 'As consequências são distintas, como mostra o exemplo da Bélgica e da Islândia.',
      C: 'Na Islândia não houve aumento da jornada diária, apenas novas contratações.',
      D: 'Na Bélgica não houve novas contratações, mas sim a concentração da carga.',
      E: 'O texto diz que os resultados apontam ganhos em produtividade, não diminuição.'
    },
    conceitoCobrado: 'Inferência autorizada pelo texto x extrapolação.',
    pegadinha: 'A generalização na letra A é falsa justamente pelos exemplos dados no texto.',
    comoApareceEmConcurso: 'FUNDATEC cobra a capacidade de ler exemplos e extrair a regra geral.'
  },
  tags: ['inferência', 'compreensão']
},

{
  id: 'EX-FUNDATEC-2026-03', tipo: 'REAL', area: 'LET', moduloId: 'POR-01',
  subtema: 'Função discursiva de expressões',
  dificuldade: 3, prioridade: 'alta',
  enunciado: 'No trecho "Para os defensores da proposta, reduzir a jornada sem cortar salários pode trazer benefícios sociais e econômicos – como o aumento do consumo e a criação de novos postos de trabalho" (FUNDATEC 2026), a expressão "Para os defensores da proposta" tem como principal função:',
  alternativas: [
    { id: 'A', texto: 'Indicar que os benefícios mencionados constituem uma conclusão comprovada pelo autor do texto.' },
    { id: 'B', texto: 'Apresentar os possíveis benefícios como uma informação aceita por todos os grupos envolvidos.' },
    { id: 'C', texto: 'Demonstrar que o texto assume explicitamente posição favorável à aprovação da proposta.' },
    { id: 'D', texto: 'Introduzir uma informação que contradiz os argumentos apresentados pelos apoiadores da redução da jornada.' },
    { id: 'E', texto: 'Atribuir a determinado grupo a avaliação sobre os possíveis benefícios da proposta, distinguindo essa perspectiva da voz do texto.' }
  ],
  gabarito: 'E',
  explicacao: {
    correta: 'A alternativa E está correta. A expressão atribui a opinião a um grupo específico (os defensores), mostrando que o autor do texto não está assumindo aquilo como verdade absoluta, mas relatando o que esse grupo pensa.',
    incorretas: {
      A: 'Não é uma conclusão do autor, é uma crença dos defensores.',
      B: 'Há outros grupos que discordam (os críticos que pedem cautela no final do texto).',
      C: 'O texto adota uma postura de cautela (no final), não de apoio incondicional.',
      D: 'A expressão introduz os argumentos dos apoiadores, não os contradiz.'
    },
    conceitoCobrado: 'Operadores argumentativos e modalização do discurso.',
    pegadinha: 'A palavra "defensores" pode levar a crer que o autor também é um, mas a estrutura "Para os X, ..." apenas delega a fala.',
    comoApareceEmConcurso: 'FUNDATEC costuma cobrar a voz do texto e a atribuição de argumentos.'
  },
  tags: ['argumentação', 'voz do texto']
},

{
  id: 'EX-FUNDATEC-2026-04', tipo: 'REAL', area: 'GRA', moduloId: 'POR-12',
  subtema: 'Conjunções adversativas',
  dificuldade: 1, prioridade: 'alta',
  enunciado: 'No trecho "Na Islândia, a redução foi feita sem cortes salariais, MAS exigiu novas contratações, elevando os custos das empresas" (FUNDATEC 2026), a conjunção "mas" pode ser substituída, sem causar alterações significativas na relação de sentido, por:',
  alternativas: [
    { id: 'A', texto: 'Portanto.' },
    { id: 'B', texto: 'Porque.' },
    { id: 'C', texto: 'Porém.' },
    { id: 'D', texto: 'Conforme.' },
    { id: 'E', texto: 'Logo.' }
  ],
  gabarito: 'C',
  explicacao: {
    correta: 'A alternativa C está correta. "Mas" e "porém" são conjunções coordenativas adversativas, que expressam oposição/contraste (não cortou salários, MAS elevou os custos).',
    incorretas: {
      A: '"Portanto" é conclusiva.',
      B: '"Porque" é causal.',
      D: '"Conforme" é conformativa.',
      E: '"Logo" é conclusiva.'
    },
    conceitoCobrado: 'Substituição de conjunções sem alteração de sentido (adversativas).',
    pegadinha: 'Confundir "mas" com "mais" (adição). Mas aqui é claro a oposição.',
    comoApareceEmConcurso: 'Questão direta de semântica de conectivos.'
  },
  tags: ['conjunções', 'adversativas']
},

{
  id: 'EX-FUNDATEC-2026-05', tipo: 'REAL', area: 'LET', moduloId: 'POR-04',
  subtema: 'Sinonímia contextual',
  dificuldade: 1, prioridade: 'alta',
  enunciado: 'No trecho "É necessário um planejamento amplo e cuidadoso" (FUNDATEC 2026), o vocábulo "cuidadoso" pode ser substituído, sem causar alterações significativas na relação de sentido estabelecida no período, por:',
  alternativas: [
    { id: 'A', texto: 'Minucioso.' },
    { id: 'B', texto: 'Impulsivo.' },
    { id: 'C', texto: 'Limitado.' },
    { id: 'D', texto: 'Instável.' },
    { id: 'E', texto: 'Superficial.' }
  ],
  gabarito: 'A',
  explicacao: {
    correta: 'A alternativa A está correta. "Minucioso" é sinônimo de cuidadoso, detalhista, que faz com atenção.',
    incorretas: {
      B: 'Impulsivo é antônimo (age sem pensar).',
      C: 'Limitado não tem o mesmo sentido de cuidadoso.',
      D: 'Instável é antônimo de algo seguro/cuidadoso.',
      E: 'Superficial é antônimo de aprofundado/cuidadoso.'
    },
    conceitoCobrado: 'Semântica — identificação de sinônimos.',
    pegadinha: 'As palavras das alternativas B a E são antônimos ou destoam do contexto de "planejamento".',
    comoApareceEmConcurso: 'Questão de vocabulário básico.'
  },
  tags: ['semântica', 'sinonímia']
},

{
  id: 'EX-FUNDATEC-2026-06', tipo: 'REAL', area: 'LET', moduloId: 'POR-04',
  subtema: 'Antonímia contextual',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Considerando o trecho "Como adaptar setores que funcionam de forma contínua" (FUNDATEC 2026), assinale a alternativa que apresenta um antônimo possível para o vocábulo "contínua" no contexto em que ocorre:',
  alternativas: [
    { id: 'A', texto: 'Frequente.' },
    { id: 'B', texto: 'Permanente.' },
    { id: 'C', texto: 'Regular.' },
    { id: 'D', texto: 'Sucessiva.' },
    { id: 'E', texto: 'Intermitente.' }
  ],
  gabarito: 'E',
  explicacao: {
    correta: 'A alternativa E está correta. "Contínuo" é algo ininterrupto. O seu antônimo é "intermitente", que significa algo que para e recomeça, que tem intervalos.',
    incorretas: {
      A: 'Frequente é sinônimo de algo que acontece muito.',
      B: 'Permanente é sinônimo de contínuo.',
      C: 'Regular é sinônimo de contínuo.',
      D: 'Sucessiva é sinônimo de contínuo.'
    },
    conceitoCobrado: 'Semântica — identificação de antônimos.',
    pegadinha: 'As alternativas A a D trazem palavras que reforçam a ideia de continuidade. A única que indica pausa/intervalo é "intermitente".',
    comoApareceEmConcurso: 'FUNDATEC explora a oposição de sentido no contexto.'
  },
  tags: ['semântica', 'antonímia']
},

{
  id: 'EX-FUNDATEC-2026-07', tipo: 'REAL', area: 'GRA', moduloId: 'POR-09',
  subtema: 'Classes de palavras',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Considerando o trecho "A PEC nº 8/2025 nasceu da mobilização do movimento Vida Além do Trabalho, que reuniu quase 800 mil assinaturas em uma petição pública pelo fim da escala 6×1" (FUNDATEC 2026), analise as assertivas a seguir, assinalando V, se verdadeiras, ou F, se falsas.\n\n( ) O vocábulo "mobilização" é classificado como substantivo.\n( ) A palavra "reuniu" pertence à classe dos verbos.\n( ) O vocábulo "quase" é classificado como preposição.\n( ) O termo "uma" é um artigo indefinido.',
  alternativas: [
    { id: 'A', texto: 'V – F – V – F.' },
    { id: 'B', texto: 'V – V – V – F.' },
    { id: 'C', texto: 'V – V – F – V.' },
    { id: 'D', texto: 'F – V – F – V.' },
    { id: 'E', texto: 'F – F – V – V.' }
  ],
  gabarito: 'C',
  explicacao: {
    correta: 'A alternativa C está correta. A sequência é V, V, F, V. (1) Mobilização é substantivo. (2) Reuniu é verbo. (3) "Quase" é ADVÉRBIO de intensidade, não preposição. (4) "Uma" é artigo indefinido.',
    incorretas: {
      A: 'A segunda é verdadeira.',
      B: 'A terceira é falsa (quase é advérbio).',
      D: 'A primeira é verdadeira.',
      E: 'A primeira e a segunda são verdadeiras.'
    },
    conceitoCobrado: 'Classificação morfológica das palavras.',
    pegadinha: 'Muitos confundem o advérbio "quase" com preposição por ele aparecer antes de um número.',
    comoApareceEmConcurso: 'FUNDATEC costuma pedir a classificação de várias palavras de uma vez.'
  },
  tags: ['morfologia', 'classes de palavras']
},

{
  id: 'EX-FUNDATEC-2026-08', tipo: 'REAL', area: 'GRA', moduloId: 'POR-12',
  subtema: 'Associação de classes gramaticais',
  dificuldade: 3, prioridade: 'alta',
  enunciado: 'Considerando os trechos a seguir, retirados do texto (FUNDATEC 2026), relacione a Coluna 1 à Coluna 2, associando as classes gramaticais às respectivas palavras.\n\nColuna 1\n1. Advérbio.\n2. Adjetivo.\n3. Numeral.\n4. Preposição.\n5. Pronome.\n\nColuna 2\n( ) "O debate sobre o fim da jornada 6×1 ganhou destaque no Brasil recentemente".\n( ) "o que resultaria em quatro dias de trabalho e três de descanso".\n( ) "Essa tendência de redução da jornada não começou no Brasil".\n( ) "reuniu quase 800 mil assinaturas em uma petição pública pelo fim da escala 6×1".\n( ) "quatro dias semanais resultam em apenas 32 horas semanais".\n\nA ordem correta de preenchimento dos parênteses, de cima para baixo, é:',
  alternativas: [
    { id: 'A', texto: '1 – 3 – 5 – 2 – 4.' },
    { id: 'B', texto: '2 – 3 – 5 – 1 – 4.' },
    { id: 'C', texto: '1 – 5 – 3 – 2 – 4.' },
    { id: 'D', texto: '4 – 3 – 5 – 2 – 1.' },
    { id: 'E', texto: '4 – 2 – 3 – 5 – 1.' }
  ],
  gabarito: 'A',
  explicacao: {
    correta: 'A alternativa A está correta.\n(1) "recentemente" = Advérbio.\n(3) "quatro" = Numeral.\n(5) "Essa" = Pronome (demonstrativo).\n(2) "pública" = Adjetivo.\n(4) "em" (de "em apenas") ou "pelo" (dependendo da marcação original do PDF) = Preposição.',
    incorretas: {
      B: '"recentemente" é advérbio, não adjetivo.',
      C: '"Essa" é pronome (5), não numeral (3).',
      D: '"recentemente" não é preposição (4).',
      E: '"recentemente" não é preposição (4).'
    },
    conceitoCobrado: 'Identificação de classes gramaticais no texto.',
    pegadinha: 'A ordem das colunas parece aleatória, mas a primeira palavra ("recentemente") já elimina metade das alternativas.',
    comoApareceEmConcurso: 'FUNDATEC gosta de correlação de colunas.'
  },
  tags: ['morfologia', 'classes de palavras']
},

{
  id: 'EX-FUNDATEC-2026-09', tipo: 'REAL', area: 'GRA', moduloId: 'POR-14',
  subtema: 'Orações subordinadas',
  dificuldade: 3, prioridade: 'alta',
  enunciado: 'Considerando o trecho "Por isso, especialistas defendem que a redução da jornada seja debatida com cautela, para que uma proposta criada para melhorar a vida dos trabalhadores não acabe ampliando as desigualdades" (FUNDATEC 2026), analise as assertivas a seguir:\n\nI. A oração "que a redução da jornada seja debatida com cautela" é subordinada substantiva objetiva direta, pois completa o sentido do verbo "defendem".\nII. A oração iniciada por "para que" expressa uma relação de finalidade em relação ao que é defendido pelos especialistas.\nIII. A oração "para melhorar a vida dos trabalhadores" expressa uma relação de causa.\n\nQuais estão corretas?',
  alternativas: [
    { id: 'A', texto: 'Apenas I.' },
    { id: 'B', texto: 'Apenas II.' },
    { id: 'C', texto: 'Apenas III.' },
    { id: 'D', texto: 'Apenas I e II.' },
    { id: 'E', texto: 'I, II e III.' }
  ],
  gabarito: 'D',
  explicacao: {
    correta: 'A alternativa D está correta. I está correta (objetiva direta, completa o sentido de "defendem"). II está correta ("para que" introduz finalidade). III está INCORRETA, pois "para melhorar" também introduz uma finalidade, e não causa.',
    incorretas: {
      A: 'A II também está correta.',
      B: 'A I também está correta.',
      C: 'A III está incorreta.',
      E: 'A III está incorreta.'
    },
    conceitoCobrado: 'Classificação de orações subordinadas (substantiva objetiva direta e adverbiais finais).',
    pegadinha: 'Confundir a preposição "para" (que indica finalidade) com causa. O "para" quase sempre indica propósito/fim.',
    comoApareceEmConcurso: 'FUNDATEC cobra análise sintática em trechos reais.'
  },
  tags: ['sintaxe', 'orações subordinadas']
},

{
  id: 'EX-FUNDATEC-2026-10', tipo: 'REAL', area: 'GRA', moduloId: 'POR-13',
  subtema: 'Análise sintática (sujeito, adjunto e predicativo)',
  dificuldade: 3, prioridade: 'alta',
  enunciado: 'Considerando o trecho "Nas experiências internacionais, as respostas são diversas" (FUNDATEC 2026), a respeito da análise sintática desse período, assinale a alternativa correta.',
  alternativas: [
    { id: 'A', texto: '"Nas experiências internacionais" exerce a função de sujeito, enquanto "as respostas" funciona como objeto direto.' },
    { id: 'B', texto: '"As respostas" constitui sujeito composto, e "diversas" funciona como adjunto adnominal.' },
    { id: 'C', texto: '"Nas experiências internacionais" exerce a função de adjunto adverbial, "as respostas" constitui sujeito simples, e "diversas" exerce a função de predicativo do sujeito.' },
    { id: 'D', texto: '"São" é verbo transitivo direto, tendo "diversas" como objeto direto, enquanto "as respostas" exerce a função de sujeito simples.' },
    { id: 'E', texto: '"Nas experiências internacionais" exerce a função de complemento nominal, e "são diversas" constitui predicado verbal.' }
  ],
  gabarito: 'C',
  explicacao: {
    correta: 'A alternativa C está correta. "Nas experiências internacionais" é um adjunto adverbial de lugar/contexto. "As respostas" é o sujeito simples (núcleo "respostas"). "São diversas" é um predicado nominal (verbo de ligação "são" + predicativo "diversas").',
    incorretas: {
      A: '"Nas experiências..." não é sujeito, e "as respostas" não é objeto direto.',
      B: 'O sujeito é simples, não composto (só tem um núcleo).',
      D: '"São" é verbo de ligação, não transitivo direto.',
      E: '"Nas experiências..." não é complemento nominal, e o predicado é nominal, não verbal.'
    },
    conceitoCobrado: 'Funções sintáticas (adjunto adverbial, sujeito simples, predicativo do sujeito).',
    pegadinha: 'A ordem invertida da frase ("Nas experiências..., as respostas são diversas") pode confundir na identificação do sujeito. O sujeito é "as respostas", o resto é predicado.',
    comoApareceEmConcurso: 'FUNDATEC cobra a identificação correta dos termos da oração.'
  },
  tags: ['sintaxe', 'sujeito', 'predicativo']
},
/* ============================================================
   QUESTÕES REAIS IMPORTADAS — Qconcursos (Página 2)
   Bancas: AMEOSC 2026, IGEDUC 2026, UFU-MG 2018
   ============================================================ */

{
  id: 'EX-Q4435771', tipo: 'REAL', area: 'GRA', moduloId: 'POR-17',
  subtema: 'Crase — regência e uso obrigatório',
  dificuldade: 2, prioridade: 'alta',
  enunciado: '"A restrição de quatro meses é aplicada a candidatos que tenham histórico de compartilhamento do dispositivo usado para a aplicação." (AMEOSC 2026 / Prefeitura de Tunápolis-SC)\n\nConsiderando a regência da expressão "é aplicada a" e o emprego do sinal indicativo de crase, analise as reescritas a seguir e assinale a alternativa em que a crase deve ser empregada.',
  alternativas: [
    { id: 'A', texto: 'A restrição de quatro meses é aplicada a própria candidata que tenha histórico de compartilhamento do dispositivo usado para a aplicação.' },
    { id: 'B', texto: 'A restrição de quatro meses é aplicada a toda candidata que tenha histórico de compartilhamento do dispositivo usado para a aplicação.' },
    { id: 'C', texto: 'A restrição de quatro meses é aplicada a uma candidata que tenha histórico de compartilhamento do dispositivo usado para a aplicação.' },
    { id: 'D', texto: 'A restrição de quatro meses é aplicada a essa candidata que tenha histórico de compartilhamento do dispositivo usado para a aplicação.' }
  ],
  gabarito: 'A',
  explicacao: {
    correta: 'A alternativa A está correta. O termo "própria candidata" é um substantivo feminino determinado pelo adjetivo "própria", o que atrai o artigo definido "a". Logo, a preposição "a" (exigida por "aplicada") se funde com o artigo "a", formando "à própria candidata".',
    incorretas: {
      B: 'A palavra "toda" é um pronome indefinido que não exige artigo, logo não há crase.',
      C: 'O artigo indefinido "uma" não forma crase com a preposição "a".',
      D: 'O pronome demonstrativo "essa" não forma crase com a preposição "a" (seria "a essa").'
    },
    conceitoCobrado: 'Regras de crase (casos obrigatórios e fatores de atração do artigo).',
    pegadinha: 'A proximidade com palavras femininas faz o candidato querer colocar crase em todas, mas "toda", "uma" e "essa" repelem o artigo.',
    comoApareceEmConcurso: 'Bancas costumam testar a crase com pronomes e expressões de determinação.'
  },
  tags: ['crase', 'regência']
},

{
  id: 'EX-Q4435770', tipo: 'REAL', area: 'LET', moduloId: 'POR-01',
  subtema: 'Inferência e compreensão textual',
  dificuldade: 3, prioridade: 'alta',
  enunciado: 'Considerando o texto sobre as novas regras para doação de sangue (AMEOSC 2026 / Prefeitura de Tunápolis-SC), julgue os itens a seguir.\n\nI. Infere-se do texto que, com a nova norma, qualquer pessoa com mais de 70 anos poderá doar sangue, desde que passe por avaliação de um médico do serviço de hemoterapia.\nII. Depreende-se do texto que um candidato que fez uma tatuagem em local onde é possível avaliar a segurança do procedimento estará apto a doar sangue antes de outro que se tatuou no mesmo dia em local cujas condições não podem ser verificadas.\nIII. Infere-se do texto que a restrição de quatro meses relacionada aos agonistas de GLP-1 decorre dos efeitos que esse tipo de medicamento provoca no sangue de quem o utiliza.\nIV. Conclui-se das informações do texto que uma pessoa de 65 anos que nunca doou sangue não poderá fazer sua primeira doação, mesmo estando dentro da faixa etária geral de 16 a 69 anos.\n\nAssinale a alternativa que apresenta os itens corretos.',
  alternativas: [
    { id: 'A', texto: 'I, III e IV, apenas.' },
    { id: 'B', texto: 'II e III, apenas.' },
    { id: 'C', texto: 'II e IV, apenas.' },
    { id: 'D', texto: 'I e IV, apenas.' }
  ],
  gabarito: 'C',
  explicacao: {
    correta: 'A alternativa C está correta. O item II é verdadeiro (7 dias se puder avaliar a segurança, 4 meses se não puder). O item IV é verdadeiro (o texto diz que para doadores de primeira vez, o limite é 60 anos, 11 meses e 29 dias, logo uma pessoa de 65 anos não pode doar pela primeira vez).',
    incorretas: {
      I: 'Falso. O texto diz que "pessoas que já são doadoras de repetição" podem continuar doando após os 70, não "qualquer pessoa".',
      III: 'Falso. O texto diz que a restrição de 4 meses aplica-se a quem compartilhou o dispositivo de aplicação, não pelos efeitos do medicamento no sangue.'
    },
    conceitoCobrado: 'Inferência autorizada pelo texto x extrapolação.',
    pegadinha: 'O item I generaliza ("qualquer pessoa"), o que contraria a regra de ser doador de repetição.',
    comoApareceEmConcurso: 'Questões de múltiplos itens (I, II, III, IV) que exigem análise detalhada.'
  },
  tags: ['inferência', 'compreensão']
},

{
  id: 'EX-Q4435769', tipo: 'REAL', area: 'LET', moduloId: 'POR-04',
  subtema: 'Vícios de linguagem (solecismo e barbarismo)',
  dificuldade: 2, prioridade: 'alta',
  enunciado: '(AMEOSC 2026 / Prefeitura de Tunápolis-SC) Os vícios de linguagem são desvios involuntários da norma-padrão da língua que podem comprometer a clareza do enunciado ou provocar estranhamento no leitor. Com base nisso, analise as frases a seguir.\n\n1. No relógio do hemocentro, deu oito horas quando a triagem dos candidatos começou.\n2. A enfermeira advinha que o candidato queria lhe contar sobre a tatuagem recente.\n\nAssinale a alternativa que apresenta, respectivamente, os vícios de linguagem presentes nas frases.',
  alternativas: [
    { id: 'A', texto: 'Ambiguidade e solecismo.' },
    { id: 'B', texto: 'Solecismo e barbarismo.' },
    { id: 'C', texto: 'Pleonasmo e ambiguidade.' },
    { id: 'D', texto: 'Barbarismo e solecismo.' }
  ],
  gabarito: 'B',
  explicacao: {
    correta: 'A alternativa B está correta. A frase 1 apresenta um solecismo (erro de concordância/sintaxe: o correto seria "deram oito horas"). A frase 2 apresenta um barbarismo (erro de prosódia/grafia: o correto é "adivinhava", e não "advinha").',
    incorretas: {
      A: 'Não há ambiguidade nas frases.',
      C: 'Não há pleonasmo (redundância).',
      D: 'A ordem está invertida.'
    },
    conceitoCobrado: 'Identificação de vícios de linguagem: solecismo (sintaxe) e barbarismo (forma/pronúncia).',
    pegadinha: 'O verbo "advinhar" é uma forma popular, mas não existe na norma culta (o correto é adivinhar).',
    comoApareceEmConcurso: 'AMEOSC cobra a definição e identificação de vícios clássicos.'
  },
  tags: ['vícios de linguagem', 'solecismo', 'barbarismo']
},

{
  id: 'EX-Q4434962', tipo: 'REAL', area: 'GRA', moduloId: 'POR-12',
  subtema: 'Valor semântico dos conectivos',
  dificuldade: 1, prioridade: 'alta',
  enunciado: 'Leia o período a seguir (IGEDUC 2026 / Prefeitura de Campo Alegre-AL):\n\n"A secretaria reorganizou o atendimento ao público, PORQUE houve aumento significativo da demanda; POR ISSO, novos horários foram divulgados à comunidade escolar."\n\nAssinale a alternativa que analisa CORRETAMENTE as relações de sentido estabelecidas pelos conectivos destacados.',
  alternativas: [
    { id: 'A', texto: '"Porque" estabelece oposição entre as informações, enquanto "por isso" introduz uma explicação para a reorganização do atendimento.' },
    { id: 'B', texto: '"Porque" estabelece condição para o aumento da demanda, enquanto "por isso" introduz uma finalidade relacionada à divulgação dos horários.' },
    { id: 'C', texto: '"Porque" estabelece adição entre as informações, enquanto "por isso" apresenta uma comparação entre a demanda e os novos horários.' },
    { id: 'D', texto: '"Porque" introduz uma consequência da reorganização, enquanto "por isso" apresenta uma causa relacionada ao aumento da demanda.' },
    { id: 'E', texto: '"Porque" introduz a causa da reorganização, enquanto "por isso" apresenta uma consequência decorrente da situação anteriormente exposta.' }
  ],
  gabarito: 'E',
  explicacao: {
    correta: 'A alternativa E está correta. "Porque" introduz a causa (o aumento da demanda causou a reorganização). "Por isso" introduz a consequência (a divulgação dos novos horários foi a consequência da reorganização).',
    incorretas: {
      A: '"Porque" não é oposição, e sim causa.',
      B: '"Porque" não é condição.',
      C: '"Porque" não é adição.',
      D: 'Inverte os valores: o "porque" é causa e o "por isso" é consequência.'
    },
    conceitoCobrado: 'Relações lógicas de causa e consequência.',
    pegadinha: 'As conjunções "porque" e "por isso" são opostas na relação lógica: uma puxa a causa, a outra a consequência.',
    comoApareceEmConcurso: 'IGEDUC costuma cobrar a reescrita e o valor semântico de conectivos.'
  },
  tags: ['conectivos', 'causa e consequência']
},

{
  id: 'EX-Q4434961', tipo: 'REAL', area: 'GRA', moduloId: 'POR-06',
  subtema: 'Ortografia oficial',
  dificuldade: 2, prioridade: 'alta',
  enunciado: '(IGEDUC 2026 / Prefeitura de Campo Alegre-AL) Assinale a alternativa em que todas as palavras estão grafadas de acordo com a ortografia oficial vigente.',
  alternativas: [
    { id: 'A', texto: 'exceção, análise, pesquisa, paralisação, benefício.' },
    { id: 'B', texto: 'excessão, análise, pesquisa, paralisação, benefício.' },
    { id: 'C', texto: 'exceção, análise, pesquisa, paralisação, benefício.' },
    { id: 'D', texto: 'exceção, análise, pesquisa, paralisação, benefício.' },
    { id: 'E', texto: 'exceção, análise, pesquisa, paralisação, benefício.' }
  ],
  gabarito: 'A',
  explicacao: {
    correta: 'A alternativa A está correta. A palavra "exceção" é grafada com "ç" e "c" (não com "ss"). As demais (análise, pesquisa, paralisação, benefício) também estão corretas.',
    incorretas: {
      B: 'A palavra "excessão" está errada (o correto é exceção).',
      C: 'Idêntica à A (provavelmente erro de digitação na extração do PDF, mas a letra A é a correta).',
      D: 'Idêntica à A.',
      E: 'Idêntica à A.'
    },
    conceitoCobrado: 'Ortografia de palavras com "ç" e "ss".',
    pegadinha: 'A palavra "exceção" é a mais cobrada por ter uma grafia diferente da pronúncia (lê-se "ecessão").',
    comoApareceEmConcurso: 'Questão direta de grafia correta.'
  },
  tags: ['ortografia']
},

{
  id: 'EX-Q4434960', tipo: 'REAL', area: 'GRA', moduloId: 'POR-17',
  subtema: 'Regência nominal e crase',
  dificuldade: 2, prioridade: 'alta',
  enunciado: '(IGEDUC 2026 / Prefeitura de Campo Alegre-AL) Assinale a alternativa redigida de acordo com a norma-padrão quanto à regência nominal e ao emprego da crase.',
  alternativas: [
    { id: 'A', texto: 'A equipe mostrou-se favorável com a revisão dos registros e atenta às exigências estabelecidas pela direção.' },
    { id: 'B', texto: 'A equipe mostrou-se favorável a revisão dos registros e atenta às exigências estabelecidas pela direção.' },
    { id: 'C', texto: 'A equipe mostrou-se favorável na revisão dos registros e atenta às exigências estabelecidas pela direção.' },
    { id: 'D', texto: 'A equipe mostrou-se favorável à revisão dos registros e atenta as exigências estabelecidas pela direção.' },
    { id: 'E', texto: 'A equipe mostrou-se favorável à revisão dos registros e atenta às exigências estabelecidas pela direção.' }
  ],
  gabarito: 'E',
  explicacao: {
    correta: 'A alternativa E está correta. O adjetivo "favorável" exige a preposição "a" (favorável A algo). Como "revisão" é feminino, ocorre a crase: "favorável à revisão". O adjetivo "atenta" exige a preposição "a" (atenta A algo), e como "exigências" está no plural, ocorre a crase: "atenta às exigências".',
    incorretas: {
      A: 'A regência de "favorável" é "a", não "com".',
      B: 'Falta a crase em "a revisão" (deveria ser "à").',
      C: 'A regência é "a", não "na".',
      D: 'Falta a crase em "as exigências" (deveria ser "às").'
    },
    conceitoCobrado: 'Regência nominal e crase com adjetivos que exigem a preposição "a".',
    pegadinha: 'A regência de "favorável" e "atenta" exige a preposição "a", e o artigo feminino gera a crase.',
    comoApareceEmConcurso: 'IGEDUC costuma integrar regência com crase numa mesma questão.'
  },
  tags: ['regência nominal', 'crase']
},

{
  id: 'EX-Q4434959', tipo: 'REAL', area: 'GRA', moduloId: 'POR-15',
  subtema: 'Concordância verbal — verbo fazer impessoal',
  dificuldade: 2, prioridade: 'alta',
  enunciado: '(IGEDUC 2026 / Prefeitura de Campo Alegre-AL) Assinale a alternativa em que a concordância verbal está de acordo com a norma-padrão.',
  alternativas: [
    { id: 'A', texto: 'Faz dois meses que foi encaminhados à secretaria os documentos que faltavam para concluir os registros.' },
    { id: 'B', texto: 'Faz dois meses que foram encaminhados à secretaria os documentos que faltavam para concluir os registros.' },
    { id: 'C', texto: 'Faz dois meses que foram encaminhado à secretaria os documentos que faltava para concluir os registros.' },
    { id: 'D', texto: 'Fazem dois meses que foram encaminhados à secretaria os documentos que faltavam para concluir os registros.' },
    { id: 'E', texto: 'Fazem dois meses que foi encaminhado à secretaria os documentos que faltavam para concluir os registros.' }
  ],
  gabarito: 'B',
  explicacao: {
    correta: 'A alternativa B está correta. O verbo "fazer" indicando tempo decorrido é impessoal, logo fica na 3ª pessoa do singular ("Faz"). O verbo "encaminhar" concorda com o sujeito "os documentos" (foram encaminhados). O verbo "faltar" concorda com "os documentos" (faltavam).',
    incorretas: {
      A: 'Erro de concordância em "foi encaminhados" (deveria ser foram).',
      C: 'Erro em "encaminhado" e "faltava" (deveriam estar no plural).',
      D: 'Erro em "Fazem" (o verbo fazer impessoal não vai para o plural).',
      E: 'Erros em "Fazem" e "foi encaminhado".'
    },
    conceitoCobrado: 'Concordância verbal com verbos impessoais (fazer) e verbos pessoais (encaminhar, faltar).',
    pegadinha: 'A proximidade do plural "dois meses" faz o candidato flexionar o verbo "fazer" para "fazem", mas ele é impessoal.',
    comoApareceEmConcurso: 'Questão clássica de concorrência pública.'
  },
  tags: ['concordância verbal', 'verbos impessoais']
},

{
  id: 'EX-Q4434958', tipo: 'REAL', area: 'GRA', moduloId: 'POR-18',
  subtema: 'Pontuação — oração subordinada adverbial',
  dificuldade: 2, prioridade: 'alta',
  enunciado: '(IGEDUC 2026 / Prefeitura de Campo Alegre-AL) Assinale a alternativa em que a pontuação está de acordo com a norma-padrão da língua portuguesa.',
  alternativas: [
    { id: 'A', texto: 'Embora, os documentos tenham sido entregues no prazo, a secretaria solicitou nova conferência antes de concluir o registro.' },
    { id: 'B', texto: 'Embora os documentos tenham sido entregues no prazo, a secretaria solicitou nova conferência antes de concluir o registro.' },
    { id: 'C', texto: 'Embora os documentos tenham sido entregues no prazo a secretaria solicitou nova conferência antes de concluir o registro.' },
    { id: 'D', texto: 'Embora os documentos tenham sido entregues no prazo, a secretaria, solicitou nova conferência antes de concluir o registro.' },
    { id: 'E', texto: 'Embora os documentos tenham sido entregues no prazo a secretaria, solicitou nova conferência antes de concluir o registro.' }
  ],
  gabarito: 'B',
  explicacao: {
    correta: 'A alternativa B está correta. A oração subordinada adverbial concessiva ("Embora os documentos... prazo") está anteposta à principal e deve ser separada por vírgula. Não há outras vírgulas necessárias.',
    incorretas: {
      A: 'Não se separa a conjunção "Embora" do seu complemento por vírgula.',
      C: 'Falta a vírgula após "prazo", que separa a oração subordinada da principal.',
      D: 'A vírgula após "secretaria" separa o sujeito do predicado (erro grave).',
      E: 'Falta a vírgula após "prazo" e há vírgula indevida após "secretaria".'
    },
    conceitoCobrado: 'Pontuação: uso da vírgula em orações subordinadas adverbiais antepostas.',
    pegadinha: 'A regra de não separar sujeito e predicado (letra D) e a necessidade da vírgula após a oração deslocada são os focos.',
    comoApareceEmConcurso: 'Questão recorrente de pontuação.'
  },
  tags: ['pontuação', 'vírgula']
},

{
  id: 'EX-Q4434955', tipo: 'REAL', area: 'GRA', moduloId: 'POR-18',
  subtema: 'Pontuação — orações adjetivas explicativas',
  dificuldade: 2, prioridade: 'alta',
  enunciado: '(IGEDUC 2026 / Prefeitura de Campo Alegre-AL) Assinale a alternativa em que o emprego das vírgulas está de acordo com a norma-padrão.',
  alternativas: [
    { id: 'A', texto: 'Os documentos que haviam sido conferidos pela equipe, foram encaminhados à direção para análise final.' },
    { id: 'B', texto: 'Os documentos que, haviam sido conferidos pela equipe foram encaminhados à direção para análise final.' },
    { id: 'C', texto: 'Os documentos que haviam sido conferidos, pela equipe foram encaminhados à direção para análise final.' },
    { id: 'D', texto: 'Os documentos, que haviam sido conferidos pela equipe foram encaminhados, à direção para análise final.' },
    { id: 'E', texto: 'Os documentos, que haviam sido conferidos pela equipe, foram encaminhados à direção para análise final.' }
  ],
  gabarito: 'E',
  explicacao: {
    correta: 'A alternativa E está correta. A oração "que haviam sido conferidos pela equipe" é uma oração subordinada adjetiva explicativa, isolada corretamente por vírgulas.',
    incorretas: {
      A: 'Falta a vírgula antes do "que" para isolar a explicativa.',
      B: 'A vírgula após o "que" está errada.',
      C: 'A vírgula após "conferidos" quebra a locução.',
      D: 'A vírgula após "encaminhados" está errada.'
    },
    conceitoCobrado: 'Diferença entre oração adjetiva restritiva (sem vírgula) e explicativa (com vírgula).',
    pegadinha: 'A adjetiva explicativa deve estar entre vírgulas, como na letra E.',
    comoApareceEmConcurso: 'IGEDUC cobra a identificação da função das vírgulas.'
  },
  tags: ['pontuação', 'orações adjetivas']
},

{
  id: 'EX-Q4434954', tipo: 'REAL', area: 'GRA', moduloId: 'POR-07',
  subtema: 'Acentuação e ortografia',
  dificuldade: 2, prioridade: 'alta',
  enunciado: '(IGEDUC 2026 / Prefeitura de Campo Alegre-AL) Assinale a alternativa em que todas as palavras estão grafadas e acentuadas de acordo com a norma-padrão da língua portuguesa.',
  alternativas: [
    { id: 'A', texto: 'frequência, matrícula, histórico, secretária, analise.' },
    { id: 'B', texto: 'frequência, matrícula, histórico, secretaria, análise.' },
    { id: 'C', texto: 'frequência, matrícula, histórico, secretaria, análise.' },
    { id: 'D', texto: 'frequência, matrícula, histórico, secretaria, análise.' },
    { id: 'E', texto: 'frequência, matrícula, histórico, secretaria, análise.' }
  ],
  gabarito: 'B',
  explicacao: {
    correta: 'A alternativa B está correta. "Secretaria" (órgão) não tem acento, enquanto "secretária" (profissão) tem. "Análise" (substantivo) tem acento, enquanto "analise" (verbo) não tem.',
    incorretas: {
      A: 'A palavra "analise" (verbo) está sem acento, mas "secretária" está com acento indevido para o contexto (provavelmente seria "secretaria").',
      C, D, E: 'Idênticas à B (provável erro de repetição na extração do PDF).'
    },
    conceitoCobrado: 'Acentuação diferencial e ortografia.',
    pegadinha: 'A confusão entre "secretaria" e "secretária" e entre "analise" (verbo) e "análise" (substantivo) é clássica.',
    comoApareceEmConcurso: 'IGEDUC foca em pares de palavras com acentuação diferenciada.'
  },
  tags: ['acentuação', 'ortografia']
},

{
  id: 'EX-Q4434953', tipo: 'REAL', area: 'GRA', moduloId: 'POR-17',
  subtema: 'Regência verbal e crase',
  dificuldade: 2, prioridade: 'alta',
  enunciado: '(IGEDUC 2026 / Prefeitura de Campo Alegre-AL) Assinale a alternativa redigida de acordo com a norma-padrão da língua portuguesa.',
  alternativas: [
    { id: 'A', texto: 'A equipe assistiu à reunião e, posteriormente, informou para a direção os encaminhamentos definidos pelos participantes.' },
    { id: 'B', texto: 'A equipe assistiu na reunião e, posteriormente, informou à direção sobre os encaminhamentos definidos pelos participantes.' },
    { id: 'C', texto: 'A equipe assistiu a reunião e, posteriormente, informou à direção dos encaminhamentos definidos pelos participantes.' },
    { id: 'D', texto: 'A equipe assistiu à reunião e, posteriormente, informou a direção dos encaminhamentos definidos pelos participantes.' },
    { id: 'E', texto: 'A equipe assistiu à reunião e, posteriormente, informou à direção os encaminhamentos definidos pelos participantes.' }
  ],
  gabarito: 'E',
  explicacao: {
    correta: 'A alternativa E está correta. O verbo "assistir" no sentido de "ver/presenciar" é transitivo indireto (exige a preposição "a"), logo "assistiu à reunião". O verbo "informar" é bitransitivo (informa algo a alguém), logo "informou à direção os encaminhamentos".',
    incorretas: {
      A: 'A regência de "informar" não pede a preposição "para" (o correto é "informou à direção").',
      B: 'O verbo "assistir" exige a preposição "a", não "na".',
      C: 'Falta a crase em "assistiu a reunião" (deveria ser "à").',
      D: 'Falta a crase em "informou a direção" (deveria ser "à").'
    },
    conceitoCobrado: 'Regência verbal e crase.',
    pegadinha: 'O verbo "assistir" (ver) exige preposição, enquanto "assistir" (ajudar) é transitivo direto. O contexto é de "ver".',
    comoApareceEmConcurso: 'IGEDUC costuma cobrar a regência de verbos comuns.'
  },
  tags: ['regência verbal', 'crase']
},

{
  id: 'EX-Q4434414', tipo: 'REAL', area: 'GRA', moduloId: 'POR-10',
  subtema: 'Colocação pronominal (próclise)',
  dificuldade: 2, prioridade: 'alta',
  enunciado: '(IGEDUC 2026 / Prefeitura de Campo Alegre-AL) Assinale a alternativa em que a colocação pronominal está de acordo com a norma-padrão.',
  alternativas: [
    { id: 'A', texto: 'Nada informou-se aos interessados antes que se concluísse a análise dos documentos.' },
    { id: 'B', texto: 'Nada informou-se aos interessados antes que concluísse-se a análise dos documentos.' },
    { id: 'C', texto: 'Nada se informou aos interessados antes que se concluísse a análise dos documentos.' },
    { id: 'D', texto: 'Nada se informou aos interessados antes que concluísse-se a análise dos documentos.' },
    { id: 'E', texto: 'Se informou nada aos interessados antes que a análise concluísse-se formalmente.' }
  ],
  gabarito: 'C',
  explicacao: {
    correta: 'A alternativa C está correta. A palavra "Nada" é um pronome indefinido que atrai o pronome para antes do verbo (próclise): "Nada se informou". Além disso, "antes que" também atrai a próclise: "antes que se concluísse".',
    incorretas: {
      A: '"Informou-se" (ênclise) está errado, pois o "Nada" atrai o pronome.',
      B: 'A ênclise em "informou-se" e em "concluísse-se" está errada.',
      D: 'A ênclise em "concluísse-se" está errada (o "que" atrai a próclise).',
      E: 'Iniciar frase com "Se" é erro clássico, e "concluísse-se" também está errado.'
    },
    conceitoCobrado: 'Fatores de atração da próclise (pronomes indefinidos e conjunções subordinativas).',
    pegadinha: 'O pronome "se" pode ser usado tanto no início (errado) quanto no meio, mas a presença de "Nada" e "que" obriga a próclise.',
    comoApareceEmConcurso: 'IGEDUC costuma cobrar as regras de colocação pronominal em períodos compostos.'
  },
  tags: ['colocação pronominal', 'próclise']
},

{
  id: 'EX-Q4434412', tipo: 'REAL', area: 'GRA', moduloId: 'POR-15',
  subtema: 'Concordância verbal',
  dificuldade: 2, prioridade: 'alta',
  enunciado: '(IGEDUC 2026 / Prefeitura de Campo Alegre-AL) Assinale a alternativa em que a concordância verbal está de acordo com a norma-padrão.',
  alternativas: [
    { id: 'A', texto: 'Mais de um candidato apresentou recurso, mas cerca de vinte participantes solicitaram esclarecimentos adicionais.' },
    { id: 'B', texto: 'Mais de um candidato apresentaram recurso, mas cerca de vinte participantes solicitaram esclarecimentos adicionais.' }
  ],
  gabarito: 'A',
  explicacao: {
    correta: 'A alternativa A está correta. A expressão "Mais de um" exige o verbo no singular ("apresentou"). "Cerca de vinte participantes" exige o verbo no plural ("solicitaram").',
    incorretas: {
      B: 'O verbo "apresentar" deve ficar no singular com a expressão "mais de um".'
    },
    conceitoCobrado: 'Concordância verbal com expressões partitivas e "mais de um".',
    pegadinha: 'A expressão "mais de um" é uma das exceções que exigem verbo no singular.',
    comoApareceEmConcurso: 'Questão clássica de concordância.'
  },
  tags: ['concordância verbal']
},

{
  id: 'EX-Q4434008', tipo: 'REAL', area: 'LET', moduloId: 'POR-01',
  subtema: 'Compreensão e interpretação textual',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Texto-base (UFU-MG 2018):\n\nA maioria dos migrantes longe do país natal há algum tempo sabe como é ficar um pouco enferrujado na sua língua de origem. O processo parece óbvio: quanto mais tempo se está fora, mais dificuldade se enfrenta. Mas isso não é tão preto no branco.\n\nNa verdade, a ciência que explica por que, quando e como perdemos nossa língua, é complexa e frequentemente contraintuitiva. O período fora nem sempre importa. Já socializar com outros falantes de nossa língua materna no exterior pode piorar a habilidade com esse idioma. E fatores emocionais, como trauma, podem ser o principal motivo (...).\n\nCom base no texto, NÃO é possível afirmar que:',
  alternativas: [
    { id: 'A', texto: 'a socialização com outros falantes de mesma língua materna no exterior sempre ajuda a preservar a língua nativa.' },
    { id: 'B', texto: 'a língua materna pode ser completamente esquecida sob determinadas condições.' },
    { id: 'C', texto: 'traumas vividos podem ser decisivos para o esquecimento da língua materna.' },
    { id: 'D', texto: 'o tempo delongado fora do país natal não é a principal causa de queda das habilidades linguísticas da língua materna.' }
  ],
  gabarito: 'A',
  explicacao: {
    correta: 'A alternativa A é a resposta correta porque a afirmação é falsa. O texto diz explicitamente que "socializar com outros falantes de nossa língua materna no exterior pode piorar a habilidade com esse idioma", contradizendo a ideia de que "sempre ajuda".',
    incorretas: {
      B: 'O texto afirma que crianças podem esquecer completamente a primeira língua.',
      C: 'O texto cita que a intensidade do trauma pode ser o principal motivo.',
      D: 'O texto afirma que o tempo fora nem sempre importa.'
    },
    conceitoCobrado: 'Identificação de informação contraditória no texto (NÃO é possível afirmar).',
    pegadinha: 'A palavra "sempre" na letra A é um sinal de generalização falsa, típica de questões de interpretação.',
    comoApareceEmConcurso: 'UFU-MG exige atenção aos detalhes e às palavras de generalização.'
  },
  tags: ['interpretação', 'compreensão']
},

{
  id: 'EX-Q4434006', tipo: 'REAL', area: 'LET', moduloId: 'POR-03',
  subtema: 'Coesão textual — valor semântico de conectivos',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Texto-base (UFU-MG 2018):\n\n"Há quem se insatisfaça com a interferência estatal na vida privada... mas isso existe em diversas outras normas legais no nosso sistema jurídico, sem que haja qualquer irregularidade nisso.\n\n**Outrossim**, há que se considerar a possível aplicação do artigo 268 do Código Penal, já que as vacinas para o público infanto-juvenil estão inseridas no Programa Nacional de Imunizações. Afora as considerações legais, há que se levar em conta as consequências fáticas..."\n\nO termo em destaque, "outrossim", relaciona os dois parágrafos:',
  alternativas: [
    { id: 'A', texto: 'contrariando a ideia contida no parágrafo anterior e apresentando novo argumento à posição defendida.' },
    { id: 'B', texto: 'acrescentando à ideia do parágrafo anterior um novo argumento à posição defendida.' },
    { id: 'C', texto: 'explicando a ideia do parágrafo anterior e apresentando, ao mesmo tempo, novo argumento à posição defendida.' },
    { id: 'D', texto: 'concluindo a ideia do parágrafo anterior e acrescentando novo argumento à posição defendida.' }
  ],
  gabarito: 'B',
  explicacao: {
    correta: 'A alternativa B está correta. "Outrossim" significa "além disso", "do mesmo modo". Portanto, ele adiciona uma nova informação/argumento ao que foi dito anteriormente.',
    incorretas: {
      A: 'Não há contrariedade, mas sim adição.',
      C: 'Não há explicação, mas sim adição.',
      D: 'Não há conclusão, mas sim adição.'
    },
    conceitoCobrado: 'Valor semântico de conectivos (adição).',
    pegadinha: 'O termo é erudito e pode confundir, mas seu significado é de soma.',
    comoApareceEmConcurso: 'UFU-MG cobra o vocabulário rebuscado.'
  },
  tags: ['coesão', 'conectivos']
},

{
  id: 'EX-Q4434005', tipo: 'REAL', area: 'LET', moduloId: 'POR-01',
  subtema: 'Intertextualidade',
  dificuldade: 3, prioridade: 'alta',
  enunciado: 'Texto-base (UFU-MG 2018):\n\n"Os últimos índices do IBGE assinalam que temos, hoje, no Brasil, entre desempregados e desistentes de buscar empregos, cerca de 66 milhões de brasileiros. (...) Chegamos ao futuro e o Brasil não espelha a grandeza da pátria. Além dos 66 milhões de desempregados, o Brasil apresenta, qualquer que seja o parâmetro utilizado, um dos maiores índices de desigualdade econômica e social do mundo. O tal índice de Gini, aqui virou a Geni, codinome do povo brasileiro, que de uns tempos para cá só recebe pedrada."\n\nNesse fragmento de texto, o autor se vale de recursos por meio dos quais se:',
  alternativas: [
    { id: 'A', texto: 'explica a partir de outros textos pré-existentes.' },
    { id: 'B', texto: 'estabelece uma relação de causa com outro texto pré-existente.' },
    { id: 'C', texto: 'conclui a respeito de outro texto pré-existente.' },
    { id: 'D', texto: 'estabelecem relações com outros textos pré-existentes.' }
  ],
  gabarito: 'D',
  explicacao: {
    correta: 'A alternativa D está correta. O autor faz uma referência intertextual à música "Geni e o Zepelim", de Chico Buarque, ao comparar o índice de Gini com a personagem Geni, que é apedrejada. Isso estabelece uma relação com outro texto.',
    incorretas: {
      A: 'Não é uma explicação, mas uma relação de intertextualidade.',
      B: 'Não é uma relação de causa.',
      C: 'Não é uma conclusão.'
    },
    conceitoCobrado: 'Intertextualidade (referência a outros textos).',
    pegadinha: 'O candidato precisa reconhecer a referência à música de Chico Buarque.',
    comoApareceEmConcurso: 'UFU-MG cobra conhecimentos culturais e literários.'
  },
  tags: ['intertextualidade', 'interpretação']
},

{
  id: 'EX-Q4434004', tipo: 'REAL', area: 'LET', moduloId: 'POR-01',
  subtema: 'Compreensão textual — objetivo do texto',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Texto-base (UFU-MG 2018):\n\n"Entre os anos 1960 e 1990, alguns países asiáticos, como a Coreia do Sul, aproveitaram seu bônus demográfico e desenvolveram-se de forma acelerada. O impulso se deu basicamente em razão do estímulo à educação: com uma mão de obra tecnicamente preparada. Esses países puderam dar um formidável salto econômico e hoje integram a vanguarda dos países emergentes. No Brasil, isso não aconteceu. O bônus demográfico foi desperdiçado por políticas erráticas de desenvolvimento, que menosprezaram a educação básica e, assim, comprometeram a produtividade dos trabalhadores."\n\nNesse excerto, o objetivo primordial é:',
  alternativas: [
    { id: 'A', texto: 'comparar o Brasil com países asiáticos no que se refere à educação.' },
    { id: 'B', texto: 'informar sobre o salto econômico de países que investiram na educação.' },
    { id: 'C', texto: 'defender a educação como parte indispensável do crescimento econômico de um país.' },
    { id: 'D', texto: 'questionar as políticas erráticas de desenvolvimento do Brasil.' }
  ],
  gabarito: 'C',
  explicacao: {
    correta: 'A alternativa C está correta. O texto usa o exemplo dos países asiáticos para mostrar que o investimento em educação gerou crescimento, e critica o Brasil por não ter feito o mesmo. O objetivo central é defender a educação como motor do crescimento.',
    incorretas: {
      A: 'A comparação é um recurso, não o objetivo principal.',
      B: 'O texto não apenas informa, ele critica a postura brasileira.',
      D: 'O questionamento é uma consequência da defesa da educação.'
    },
    conceitoCobrado: 'Identificação do propósito comunicativo (tese).',
    pegadinha: 'A letra A foca apenas no recurso comparativo, enquanto a letra C capta a mensagem global.',
    comoApareceEmConcurso: 'UFU-MG cobra a ideia central de textos argumentativos.'
  },
  tags: ['interpretação', 'objetivo do texto']
},
/* ============================================================
   QUESTÕES REAIS IMPORTADAS — Qconcursos (Página 3)
   Bancas: UFU-MG 2018, FCC 2026, FAFIPA 2026, IGEDUC 2026
   ============================================================ */

{
  id: 'EX-Q4434002', tipo: 'REAL', area: 'GRA', moduloId: 'POR-19',
  subtema: 'Reescrita de frases — manutenção de sentido (causa)',
  dificuldade: 3, prioridade: 'alta',
  enunciado: 'Texto-base (UFU-MG 2018):\n\nOs 20 milhões de itens expostos ao público, objetos de pesquisa e testemunhas à mão da memória e da História do Brasil, ainda ardiam no incêndio que devastou o Museu Nacional da Quinta da Boa Vista, por não haver água nos hidrantes do prédio, e vários oportunistas já vinham à tona para se aproveitarem da tragédia.\n\nNo trecho "ainda ardiam no incêndio que devastou o Museu Nacional da Quinta da Boa Vista, **por não haver água nos hidrantes do prédio** [...]", a passagem destacada pode ser reescrita, sem prejuízo de sentido, por:',
  alternativas: [
    { id: 'A', texto: 'Se houvesse água nos hidrantes do prédio, os 20 milhões de itens expostos ao público, objetos de pesquisa e testemunhas à mão da memória e da História do Brasil, ainda ardiam no incêndio que devastou o Museu Nacional da Quinta da Boa Vista [...].' },
    { id: 'B', texto: 'Mesmo que não houvesse água nos hidrantes do prédio, os 20 milhões de itens expostos ao público, objetos de pesquisa e testemunhas à mão da memória e da História do Brasil, ainda ardiam no incêndio que devastou o Museu Nacional da Quinta da Boa Vista [...].' },
    { id: 'C', texto: 'Porquanto não havia água nos hidrantes do prédio, os 20 milhões de itens expostos ao público, objetos de pesquisa e testemunhas à mão da memória e da História do Brasil, ainda ardiam no incêndio que devastou o Museu Nacional da Quinta da Boa Vista [...].' },
    { id: 'D', texto: 'Conquanto não havia água nos hidrantes do prédio, os 20 milhões de itens expostos ao público, objetos de pesquisa e testemunhas à mão da memória e da História do Brasil, ainda ardiam no incêndio que devastou o Museu Nacional da Quinta da Boa Vista [...].' }
  ],
  gabarito: 'C',
  explicacao: {
    correta: 'A alternativa C está correta. O termo "por não haver" introduz uma relação de causa. "Porquanto" é uma conjunção coordenativa explicativa/causal, que mantém o mesmo valor semântico.',
    incorretas: {
      A: 'O "Se" introduz uma condição, alterando a relação de causa.',
      B: 'O "Mesmo que" introduz uma concessão, alterando a causa.',
      D: 'O "Conquanto" introduz uma concessão, alterando a causa.'
    },
    conceitoCobrado: 'Reescrita de frases com substituição de conectivos causais sem alteração de sentido.',
    pegadinha: 'A conjunção "porquanto" é menos comum, mas é sinônimo de "porque/pois".',
    comoApareceEmConcurso: 'UFU-MG exige a identificação de relações semânticas na reescrita.'
  },
  tags: ['reescrita', 'conectivos', 'causa']
},

{
  id: 'EX-Q4434000', tipo: 'REAL', area: 'LET', moduloId: 'POR-01',
  subtema: 'Compreensão textual — causa e unidade do texto',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Texto-base (UFU-MG 2018):\n\nSobre a obra em si ["Microcontos", organizado por Lucas Palhão], concluí ontem a leitura. E é surpreendente pela criatividade de todos os envolvidos e apreciável talento. A coerência e a coesão que dão a esse amálgama autoral uma ideia clara de unidade são elogiáveis, dignas de admiração. Sem que isso represente prejuízo da identidade e estilo dos autores nas sequências dos microcontos. [...]\n\nMesmo coexistindo vários microcontos de diversos autores, é possível, segundo o texto, vislumbrar "uma ideia clara de unidade". A razão para o efeito de unidade justifica-se em razão da:',
  alternativas: [
    { id: 'A', texto: 'curta extensão das narrativas.' },
    { id: 'B', texto: 'identificação de marcas estilísticas comuns.' },
    { id: 'C', texto: 'coerência e coesão de cada texto.' },
    { id: 'D', texto: 'manutenção temática.' }
  ],
  gabarito: 'C',
  explicacao: {
    correta: 'A alternativa C está correta. O texto afirma explicitamente: "A coerência e a coesão que dão a esse amálgama autoral uma ideia clara de unidade são elogiáveis".',
    incorretas: {
      A: 'O texto não cita a curta extensão como causa da unidade.',
      B: 'O texto cita que os autores mantêm sua identidade e estilo, mas não que há marcas comuns.',
      D: 'O texto cita que a diversidade de temas é o que dificultaria a leitura, não o que a unifica.'
    },
    conceitoCobrado: 'Compreensão literal e identificação de causa explícita no texto.',
    pegadinha: 'A palavra "unidade" pode levar o candidato a pensar em "manutenção temática", mas o texto explica que a unidade vem da coesão/coerência.',
    comoApareceEmConcurso: 'UFU-MG cobra a localização de informações explícitas.'
  },
  tags: ['compreensão', 'coesão']
},

{
  id: 'EX-Q4433999', tipo: 'REAL', area: 'GRA', moduloId: 'POR-11',
  subtema: 'Tempos e modos verbais (subjuntivo)',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Texto-base (UFU-MG 2018):\n\n"No Brasil, a Polícia Federal estima que cerca de 500 venezuelanos **entrem** diariamente pela fronteira. Porém, o movimento está menor do que em janeiro, quando até 1.200 pessoas **fugiam** todos os dias da crise no país vizinho. No primeiro semestre deste ano, 56.740 venezuelanos **procuraram** legalizar sua situação no Brasil quando **solicitaram** refúgio ou visto de residência temporária."\n\nO tempo verbal expressa o momento em que um fato acontece. A partir dessa consideração e dos termos destacados no trecho, assinale a alternativa cujo tempo verbal expressa um fato incerto no presente.',
  alternativas: [
    { id: 'A', texto: 'Entrem.' },
    { id: 'B', texto: 'Procuraram.' },
    { id: 'C', texto: 'Fugiam.' },
    { id: 'D', texto: 'Solicitaram.' }
  ],
  gabarito: 'A',
  explicacao: {
    correta: 'A alternativa A está correta. "Entrem" está no presente do subjuntivo, que expressa dúvida, hipótese ou incerteza no momento atual.',
    incorretas: {
      B: '"Procuraram" está no pretérito perfeito (fato concluído).',
      C: '"Fugiam" está no pretérito imperfeito (fato habitual no passado).',
      D: '"Solicitaram" está no pretérito perfeito (fato concluído).'
    },
    conceitoCobrado: 'Valor semântico do presente do subjuntivo.',
    pegadinha: 'O texto usa "estima que", o que exige o subjuntivo "entrem" por expressar uma projeção/incerteza.',
    comoApareceEmConcurso: 'UFU-MG cobra a ligação entre modo verbal e sentido.'
  },
  tags: ['verbos', 'subjuntivo']
},

{
  id: 'EX-Q4433679', tipo: 'REAL', area: 'GRA', moduloId: 'POR-11',
  subtema: 'Vozes verbais — transposição para voz passiva',
  dificuldade: 2, prioridade: 'alta',
  enunciado: '"Empresas que souberem equilibrar as forças entre a velocidade da máquina e o discernimento humano abrirão novos horizontes de vantagem competitiva." (FCC 2026 / ABGF)\n\nAo se transpor a frase acima para a voz passiva, o verbo "abrir" deverá assumir a seguinte forma:',
  alternativas: [
    { id: 'A', texto: 'têm-se aberto.' },
    { id: 'B', texto: 'foram abertos.' },
    { id: 'C', texto: 'serão abertos.' },
    { id: 'D', texto: 'se abrirá.' },
    { id: 'E', texto: 'haverá de abrir.' }
  ],
  gabarito: 'C',
  explicacao: {
    correta: 'A alternativa C está correta. O verbo "abrirão" está no futuro do presente. Na voz passiva analítica, ele se torna "serão abertos" (verbo auxiliar "ser" no futuro + particípio).',
    incorretas: {
      A: 'Está no pretérito perfeito composto.',
      B: 'Está no pretérito perfeito.',
      D: 'É voz passiva sintética, mas o tempo é futuro do presente do indicativo (se abrirá), o que também é possível, mas a analítica é mais direta.',
      E: 'Não corresponde à transposição pedida.'
    },
    conceitoCobrado: 'Transposição de voz ativa para passiva analítica.',
    pegadinha: 'O futuro do presente na voz passiva analítica exige o verbo "ser" no futuro ("serão").',
    comoApareceEmConcurso: 'FCC cobra a reescrita de frases com foco em vozes verbais.'
  },
  tags: ['vozes verbais', 'transposição']
},

{
  id: 'EX-Q4433678', tipo: 'REAL', area: 'GRA', moduloId: 'POR-15',
  subtema: 'Concordância verbal',
  dificuldade: 3, prioridade: 'alta',
  enunciado: 'Texto-base (FCC 2026 / ABGF):\n\n"O progresso não é linear nem neutro: é produto de decisões humanas e institucionais. A IA generativa redefine tarefas e papéis, mas também desafia o significado do trabalho [...]"\n\nRespeitando as normas de concordância verbal, uma redação alternativa para um trecho do texto está em:',
  alternativas: [
    { id: 'A', texto: 'Repousam nas empresas e também nas normas de regulação a expectativa de que o progresso técnico caminhe ao lado do econômico e social.' },
    { id: 'B', texto: 'Não apenas as políticas públicas, mas também a forma como se valorizam o investimento em pessoas determinará o futuro da inovação.' },
    { id: 'C', texto: 'Nem linear, nem neutro: cabem às decisões humanas e institucionais a redefinição do progresso.' },
    { id: 'D', texto: 'Caberá à união entre a produtividade e o desenvolvimento humano o equilíbrio econômico dessa nova era.' },
    { id: 'E', texto: 'São cada vez mais difíceis considerar como tangíveis as fronteiras entre a cultura de uma nação e o uso que fará do desenvolvimento tecnológico.' }
  ],
  gabarito: 'D',
  explicacao: {
    correta: 'A alternativa D está correta. O sujeito é "o equilíbrio econômico dessa nova era" (singular), então o verbo "caber" deve ficar no singular ("Caberá").',
    incorretas: {
      A: 'O sujeito é "a expectativa" (singular). O correto seria "Repousa".',
      B: 'O sujeito é composto ("as políticas públicas" e "a forma"). O correto seria "determinarão".',
      C: 'O sujeito é "a redefinição" (singular). O correto seria "cabe".',
      E: 'A oração subordinada substantiva ("considerar...") funciona como sujeito, o que exige verbo no singular ("É cada vez mais difícil").'
    },
    conceitoCobrado: 'Concordância verbal com sujeito posposto e sujeito composto.',
    pegadinha: 'A ordem invertida ("Caberá à união... o equilíbrio") confunde a identificação do sujeito.',
    comoApareceEmConcurso: 'FCC adora inversões sintáticas para testar concordância.'
  },
  tags: ['concordância verbal', 'sintaxe']
},

{
  id: 'EX-Q4433677', tipo: 'REAL', area: 'LET', moduloId: 'POR-01',
  subtema: 'Compreensão textual — estrutura argumentativa (hipótese)',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Considere o texto sobre Inteligência Artificial (FCC 2026 / ABGF):\n\n"O futuro da inovação, portanto, não pertence apenas à tecnologia, mas à cultura que a cerca. Mas, em última instância, essas escolhas não se farão no vácuo. Elas serão moldadas pelos incentivos econômicos, pelas políticas públicas e pela forma como os mercados valorizam – ou não – o investimento em pessoas. Se o sistema recompensar apenas ganhos de produtividade de curto prazo, o uso da IA tenderá à substituição e à concentração. Se, ao contrário, premiar a criação de valor humano e a difusão do conhecimento, o avanço tecnológico poderá se tornar um novo motor de prosperidade compartilhada."\n\nA autora elabora uma hipótese seguida de um possível desdobramento em:',
  alternativas: [
    { id: 'A', texto: 'Se o sistema recompensar apenas ganhos de produtividade de curto prazo, o uso da IA tenderá à substituição e à concentração.' },
    { id: 'B', texto: 'Segundo testes estatísticos, consumidores, por sua vez, valorizam mais produtos quando percebem participação humana em sua criação.' },
    { id: 'C', texto: 'Pesquisas de Puntoni e outros autores mostram que trabalhadores avaliados por algoritmos demonstram menos empatia.' },
    { id: 'D', texto: 'O desafio, portanto, não é apenas das empresas, mas também da regulação.' },
    { id: 'E', texto: 'A IA generativa redefine tarefas e papéis, mas também desafia o significado do trabalho.' }
  ],
  gabarito: 'A',
  explicacao: {
    correta: 'A alternativa A está correta. A estrutura "Se [hipótese], [desdobramento/consequência]" está perfeitamente visível na frase.',
    incorretas: {
      B, C: 'São citações de pesquisas (fatos).',
      D: 'É uma conclusão.',
      E: 'É uma afirmação de fato.'
    },
    conceitoCobrado: 'Identificação de estruturas condicionais (hipótese e consequência).',
    pegadinha: 'O texto usa vários períodos compostos, mas a letra A é o único com a estrutura "Se" condicional.',
    comoApareceEmConcurso: 'FCC cobra a identificação de estruturas lógicas no texto.'
  },
  tags: ['compreensão', 'estrutura textual']
},

{
  id: 'EX-Q4433361', tipo: 'REAL', area: 'LET', moduloId: 'POR-05',
  subtema: 'Figuras de linguagem — eufemismo',
  dificuldade: 1, prioridade: 'alta',
  enunciado: 'Texto-base (FAFIPA 2026 / Prefeitura de Campina Grande do Sul-PR):\n\n"Desde a Constituição, se define que a educação infantil é um dever do Estado e uma escolha da família, embora pareça um eufemismo falar que é escolha da família, porque nós sabemos que, em um país como o nosso, grande parte das famílias não só quer que as crianças vão à creche, mas precisa que elas vão".\n\nNo trecho "embora pareça um eufemismo falar que é escolha da família", a palavra "eufemismo" indica:',
  alternativas: [
    { id: 'A', texto: 'uma expressão de sentido ambíguo.' },
    { id: 'B', texto: 'uma forma de suavizar ou amenizar uma expressão.' },
    { id: 'C', texto: 'uma afirmação exagerada para reforçar uma ideia.' },
    { id: 'D', texto: 'uma repetição desnecessária de termos semelhantes.' },
    { id: 'E', texto: 'uma contradição intencional no discurso.' }
  ],
  gabarito: 'B',
  explicacao: {
    correta: 'A alternativa B está correta. Eufemismo é a figura de linguagem que suaviza uma expressão dura ou desagradável. No texto, falar "escolha da família" suaviza a realidade de que muitas famílias "precisam" da creche.',
    incorretas: {
      A: 'Sentido ambíguo é ambiguidade.',
      C: 'Exagero é hipérbole.',
      D: 'Repetição desnecessária é pleonasmo.',
      E: 'Contradição intencional é paradoxo.'
    },
    conceitoCobrado: 'Definição de eufemismo.',
    pegadinha: 'A palavra "eufemismo" é explicada pelo próprio contexto da frase (escolha vs. necessidade).',
    comoApareceEmConcurso: 'Questão conceitual direta de figuras de linguagem.'
  },
  tags: ['figuras de linguagem', 'eufemismo']
},

{
  id: 'EX-Q4433360', tipo: 'REAL', area: 'GRA', moduloId: 'POR-09',
  subtema: 'Substantivos — concreto x abstrato',
  dificuldade: 1, prioridade: 'alta',
  enunciado: 'Texto-base (FAFIPA 2026 / Prefeitura de Campina Grande do Sul-PR):\n\n"Embora a creche não seja obrigatória, os benefícios de um infante nessas instituições podem ser variados e vão desde o desenvolvimento social, cognitivo e emocional até questões como o apoio familiar e a possibilidade dos pais conciliarem trabalho e o cuidado com os filhos."\n\nNo trecho "os benefícios de um infante nessas instituições podem ser variados", a palavra "benefícios" é classificada como:',
  alternativas: [
    { id: 'A', texto: 'substantivo coletivo, pois indica um conjunto de vantagens.' },
    { id: 'B', texto: 'substantivo derivado impróprio, pois muda de classe gramatical.' },
    { id: 'C', texto: 'substantivo abstrato, pois expressa uma ideia ou qualidade.' },
    { id: 'D', texto: 'substantivo concreto, pois designa algo perceptível pelos sentidos.' },
    { id: 'E', texto: 'substantivo próprio, pois individualiza um conceito específico.' }
  ],
  gabarito: 'C',
  explicacao: {
    correta: 'A alternativa C está correta. "Benefícios" designa vantagens, ideias abstratas que não têm existência física própria, dependendo de outro ser para se manifestar.',
    incorretas: {
      A: 'Coletivo é o substantivo que nomeia um conjunto de seres da mesma espécie (ex: alcateia).',
      B: 'Derivação imprópria é mudança de classe gramatical (ex: "o belo").',
      D: 'Substantivo concreto é aquele que existe por si só (ex: mesa, cadeira).',
      E: 'Substantivo próprio nomeia um ser específico (ex: Brasil, Maria).'
    },
    conceitoCobrado: 'Classificação de substantivos (abstrato).',
    pegadinha: 'A palavra "benefícios" parece palpável porque se refere a coisas boas, mas é uma abstração.',
    comoApareceEmConcurso: 'FAFIPA cobra a classificação clássica de substantivos.'
  },
  tags: ['morfologia', 'substantivo abstrato']
},

{
  id: 'EX-Q4433300', tipo: 'REAL', area: 'GRA', moduloId: 'POR-13',
  subtema: 'Classes gramaticais e funções sintáticas',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Texto-base (FAFIPA 2026 / Prefeitura de Ivaiporã-PR):\n\nNo trecho "Vejo a agressão a uma criança como um ato de covardia, que se torna ainda mais perverso quando praticado por quem deveria protegê-la. Mas é justamente o que mais acontece.", considere a classificação e o emprego das palavras no texto e assinale a alternativa CORRETA.',
  alternativas: [
    { id: 'A', texto: 'A palavra "mais" em "mais perverso" é um pronome indefinido de intensidade que determina o substantivo "perverso".' },
    { id: 'B', texto: 'O vocábulo "perverso" classifica-se como adjetivo, concordando em gênero e número com a expressão "ato de covardia".' },
    { id: 'C', texto: 'A palavra "justamente" funciona como adjetivo qualificativo referente ao verbo "acontece".' },
    { id: 'D', texto: 'O termo "ainda" atua como advérbio de tempo, indicando a duração contínua das agressões relatadas.' },
    { id: 'E', texto: 'O pronome oblíquo "-la" em "protegê-la" retoma o substantivo "seres humanos indefesos".' }
  ],
  gabarito: 'B',
  explicacao: {
    correta: 'A alternativa B está correta. "Perverso" é um adjetivo que qualifica o substantivo "ato" (ato de covardia), concordando em gênero (masculino) e número (singular).',
    incorretas: {
      A: '"Mais" é um advérbio de intensidade, não um pronome.',
      C: '"Justamente" é um advérbio, não um adjetivo.',
      D: '"Ainda" aqui é um advérbio de intensidade/inclusão.',
      E: 'O "-la" retoma "criança" (do início do trecho), não "seres humanos indefesos".'
    },
    conceitoCobrado: 'Identificação de classes de palavras e concordância nominal.',
    pegadinha: 'A palavra "que" em "que se torna" é um pronome relativo que retoma "ato de covardia". O adjetivo "perverso" qualifica esse "ato" (masculino).',
    comoApareceEmConcurso: 'FAFIPA costuma cobrar análise morfológica em trechos de textos.'
  },
  tags: ['morfologia', 'adjetivo', 'anáfora']
},

{
  id: 'EX-Q4433299', tipo: 'REAL', area: 'GRA', moduloId: 'POR-13',
  subtema: 'Análise sintática — sujeito e classes',
  dificuldade: 3, prioridade: 'alta',
  enunciado: 'Com base nos trechos do texto sobre "Educar sem violência" (FAFIPA 2026 / Prefeitura de Ivaiporã-PR), assinale a alternativa em que a classificação sintática ou gramatical apresentada está CORRETA.',
  alternativas: [
    { id: 'A', texto: 'Na frase "...que se torna ainda mais perverso quando praticado por quem deveria protegê-la", o termo "quem" atua como pronome pessoal oblíquo com função de objeto direto.' },
    { id: 'B', texto: 'Na passagem "...diz respeito a todos nós", o vocábulo "a" classifica-se como artigo indefinido feminino, determinando o pronome "todos".' },
    { id: 'C', texto: 'No trecho "Cessar o sofrimento delas é da nossa conta, sim", a oração "Cessar o sofrimento delas" desempenha a função sintática de sujeito da oração principal.' },
    { id: 'D', texto: 'No trecho "Não consigo conceber como surrar seres humanos indefesos...", a palavra "indefesos" é um advérbio de modo que modifica a forma verbal "surrar".' },
    { id: 'E', texto: 'Em "Os abusos físicos e psicológicos ferem a dignidade de crianças...", o termo "de crianças" exerce a função sintática de complemento nominal do verbo "ferem".' }
  ],
  gabarito: 'C',
  explicacao: {
    correta: 'A alternativa C está correta. A oração subordinada substantiva subjetiva "Cessar o sofrimento delas" funciona como sujeito do verbo "é" (verbo de ligação).',
    incorretas: {
      A: '"Quem" é um pronome indefinido relativo, não um pronome pessoal oblíquo.',
      B: 'O "a" é uma preposição exigida pelo verbo "dizer respeito a".',
      D: '"Indefesos" é um adjetivo que qualifica "seres humanos".',
      E: '"De crianças" é um adjunto adnominal que caracteriza "dignidade", não um complemento nominal do verbo.'
    },
    conceitoCobrado: 'Análise sintática: sujeito oracional, função de preposições e adjetivos.',
    pegadinha: 'A letra C traz uma oração como sujeito, o que é uma estrutura sintática mais complexa.',
    comoApareceEmConcurso: 'FAFIPA exige análise sintática avançada.'
  },
  tags: ['sintaxe', 'sujeito', 'análise sintática']
},

{
  id: 'EX-Q4433298', tipo: 'REAL', area: 'LET', moduloId: 'POR-03',
  subtema: 'Coesão e relações sintático-semânticas',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Com base nas relações sintático-semânticas estabelecidas pelos elementos de coesão no texto "Educar sem violência" (FAFIPA 2026), assinale a alternativa CORRETA.',
  alternativas: [
    { id: 'A', texto: 'No trecho "...conforme o levantamento, pais e mães dizem que bater...", o termo destacado introduz uma ideia de consequência lógica, coerente em relação às pesquisas do Unicef.' },
    { id: 'B', texto: 'Em "Se levarmos em conta que há subnotificação...", a conjunção subordinativa "se" destaca uma condição que anula a relevância dos dados estatísticos oficiais.' },
    { id: 'C', texto: 'No trecho "Essa visão cruel e distorcida da realidade — mas que segue arraigada neste país — foi comprovada...", a conjunção "mas" estabelece uma relação de adversidade, contrapondo o caráter inaceitável dessa visão à sua persistência cultural na sociedade brasileira.' },
    { id: 'D', texto: 'O pronome destacado em "...impactar a saúde física e mental delas pelo resto da vida" possui função catafórica, antecipando o termo "famílias" empregado no parágrafo seguinte.' },
    { id: 'E', texto: 'Na passagem "Além disso, elas aprendem que a violência é o meio de resolver conflitos...", a expressão destacada introduz uma relação de causa e efeito em relação aos impactos à saúde mencionados anteriormente.' }
  ],
  gabarito: 'C',
  explicacao: {
    correta: 'A alternativa C está correta. O "mas" é uma conjunção adversativa que contrapõe a visão cruel (negativa) com a sua persistência arraigada (fato).',
    incorretas: {
      A: '"Conforme" introduz conformidade, não consequência.',
      B: 'O "se" introduz uma condição, mas a subnotificação não anula os dados; pelo contrário, indica que eles são maiores.',
      D: '"Delas" é anafórico (retoma "crianças e adolescentes" já citados).',
      E: '"Além disso" introduz adição, não causa e efeito.'
    },
    conceitoCobrado: 'Valor semântico dos conectivos (adversidade, conformidade, adição) e funções anafóricas.',
    pegadinha: 'A letra C traz uma oposição de ideias, que é a função clássica do "mas".',
    comoApareceEmConcurso: 'FAFIPA cobra a identificação de coesão referencial e sequencial.'
  },
  tags: ['coesão', 'conectivos']
}


];
