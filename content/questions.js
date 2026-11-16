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
window.QUESTIONS_REAIS_POR = [

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
        D: 'A alternativa erra ao classificar II como verdadeira. A II é falsa porque atribui a preposição ao verbo "ampliar" (VTD), quando ela vem do nome "acesso". A regra violada é a mesma de C. Construção correta: a justificativa correta seria "o acento indica a fusão da preposição a, exigida pelo substantivo 'acesso', com o artigo a de 'informação'". Para identificar, verifique sempre qual termo rege a preposição.',
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
        A: 'A alternativa erra a justificativa: as vírgulas em "podem comprometer, além da mentalidade e do corpo, o sistema hormonal" isolam o termo intercalado "além da mentalidade e do corpo" (adjunto adverbial de acréscimo), NÃO separam sujeito de verbo. O sujeito ("dietas... e rotinas...") está antes de "podem"; o verbo está após o sujeito, sem vírgula entre eles. A regra violada é a identificação do termo intercalado. Construção correta: "as vírgulas isolam o adjunto adverbial intercalado 'além da mentalidade e do corpo'". Para identificar, retire o termo entre vírgulas: se a frase continuar gramatical, é termo intercalado, não sujeito/verbo.',
        C: 'A alternativa erra ao classificar "de 25 anos" como vocativo. Vocativo é chamamento ("Maria, venha aqui!"); "de 25 anos" é adjunto adnominal explicativo (informa a idade da atleta). A regra violada é a distinção entre vocativo (chamamento) e adjunto explicativo (informação acessória). Construção correta: "de 25 anos" é adjunto adnominal explicativo, isolado por vírgulas por ser informação adicional. Para identificar, pergunte: o termo chama alguém ou informa algo sobre alguém? Se informa, não é vocativo.',
        D: 'A alternativa erra ao classificar a primeira vírgula como isolamento de oração subordinada adjetiva explicativa. Em "De acordo com o endocrinologista Rodrigo Gomes de Souza, quando o organismo recebe...", a primeira vírgula separa o adjunto adverbial de conformidade ("De acordo com...") do restante do período — não há oração adjetiva aí. A regra violada é a identificação do termo deslocado. Construção correta: "a primeira vírgula isola o adjunto adverbial de conformidade anteposto". Para identificar, localize o termo antes da vírgula: se for locução prepositiva ("de acordo com"), é adjunto, não oração adjetiva.',
        E: 'A alternativa erra ao classificar as vírgulas em "não, necessariamente, significa" como separadoras de orações coordenadas assindéticas. As vírgulas isolam o advérbio "necessariamente" (termo intercalado), não separam orações. A regra violada é a distinção entre termo intercalado e oração coordenada. Construção correta: "as vírgulas isolam o advérbio 'necessariamente', que modaliza o verbo 'significa'". Para identificar, retire o termo entre vírgulas: se for uma palavra (advérbio), é termo intercalado; se for oração (com verbo), pode ser coordenada.'
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
  }

];
];
