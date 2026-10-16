/* ============================================================
   MÓDULOS — Português
   Blocos:
     LEIT = Leitura e Interpretação (PT-01, PT-02)
     LEXI = Léxico, Semântica e Morfologia (PT-03, PT-05, PT-06, PT-13)
     ORTO = Ortografia, Acentuação e Fonologia (PT-04, PT-14)
     SINT = Sintaxe e Pontuação (PT-07, PT-08, PT-09, PT-10)
     TEXT = Texto, Coesão e Reescrita (PT-11, PT-12, PT-16)
     OFIC = Redação Oficial (PT-15)
   Prioridades: muito_alta, alta, media, condicional
   ============================================================ */

window.MODULES = [

  /* ============ BLOCO LEIT — LEITURA E INTERPRETAÇÃO ============ */
  {
    id: 'PT-01',
    area: 'LEIT',
    titulo: 'Interpretação e Compreensão de Textos',
    prioridade: 'muito_alta',
    subtopicos: [
      'Tema, assunto, finalidade e ideia central',
      'Informações explícitas e implícitas',
      'Inferências',
      'Fatos, opiniões e argumentos',
      'Pressupostos e subentendidos',
      'Relações entre partes do texto',
      'Identificação da tese',
      'Textos verbais, não verbais e mistos',
      'Alternativas corretas e extrapolações',
      'Contradições e distorções do texto'
    ]
  },
  {
    id: 'PT-02',
    area: 'LEIT',
    titulo: 'Tipologia, Gêneros Textuais e Comunicação',
    prioridade: 'alta',
    subtopicos: [
      'Narração',
      'Descrição',
      'Exposição',
      'Argumentação',
      'Injunção',
      'Gêneros textuais (notícia, artigo, crônica, reportagem, e-mail, aviso, comunicado, requerimento)',
      'Finalidade comunicativa',
      'Público-alvo, contexto e linguagem',
      'Linguagem verbal e não verbal',
      'Funções da linguagem',
      'Tipo textual x gênero textual'
    ]
  },

  /* ============ BLOCO LEXI — LÉXICO, SEMÂNTICA E MORFOLOGIA ============ */
  {
    id: 'PT-03',
    area: 'LEXI',
    titulo: 'Semântica e Sentido das Palavras',
    prioridade: 'alta',
    subtopicos: [
      'Sinônimos e antônimos',
      'Homônimos e parônimos',
      'Polissemia',
      'Ambiguidade',
      'Sentido contextual',
      'Denotação e conotação',
      'Sentido próprio e figurado',
      'Figuras de linguagem',
      'Pressupostos e implícitos',
      'Efeitos de sentido',
      'Substituição de palavras sem alterar o sentido'
    ]
  },
  {
    id: 'PT-05',
    area: 'LEXI',
    titulo: 'Classes de Palavras: Visão Geral',
    prioridade: 'alta',
    subtopicos: [
      'Substantivo',
      'Artigo',
      'Adjetivo',
      'Numeral',
      'Pronome',
      'Verbo',
      'Advérbio',
      'Preposição',
      'Conjunção',
      'Interjeição',
      'Classificação e função de cada classe',
      'Palavras que mudam de classe conforme o contexto',
      'Efeito da escolha da classe no sentido'
    ]
  },
  {
    id: 'PT-06',
    area: 'LEXI',
    titulo: 'Verbos e Pronomes',
    prioridade: 'media',
    subtopicos: [
      'Tempos verbais',
      'Modos verbais',
      'Pessoas e formas nominais',
      'Conjugação',
      'Locuções verbais',
      'Correlação entre tempos e modos',
      'Vozes verbais: ativa, passiva e reflexiva',
      'Pronomes pessoais, possessivos, demonstrativos',
      'Pronomes relativos, indefinidos e interrogativos',
      'Pronomes de tratamento',
      'Colocação pronominal',
      'Uso do pronome e construção do sentido'
    ]
  },
  {
    id: 'PT-13',
    area: 'LEXI',
    titulo: 'Formação e Estrutura das Palavras',
    prioridade: 'condicional',
    subtopicos: [
      'Radical',
      'Prefixo',
      'Sufixo',
      'Desinências',
      'Vogal temática',
      'Derivação',
      'Composição',
      'Famílias de palavras',
      'Relações morfológicas',
      'Efeitos de prefixos e sufixos no significado'
    ]
  },

  /* ============ BLOCO ORTO — ORTOGRAFIA, ACENTUAÇÃO E FONOLOGIA ============ */
  {
    id: 'PT-04',
    area: 'ORTO',
    titulo: 'Ortografia Oficial e Acentuação',
    prioridade: 'alta',
    subtopicos: [
      'Regras ortográficas vigentes',
      'Emprego das letras',
      'Acentuação de oxítonas',
      'Acentuação de paroxítonas',
      'Acentuação de proparoxítonas',
      'Hiatos',
      'Ditongos',
      'Acentos diferenciais',
      'Uso dos porquês',
      'Uso do hífen',
      'Maiúsculas e minúsculas',
      'Palavras e expressões que geram dúvidas'
    ]
  },
  {
    id: 'PT-14',
    area: 'ORTO',
    titulo: 'Fonética, Fonologia e Divisão Silábica',
    prioridade: 'condicional',
    subtopicos: [
      'Fonema, letra e sílaba',
      'Encontros vocálicos',
      'Encontros consonantais',
      'Dígrafos',
      'Divisão silábica',
      'Classificação quanto à tonicidade',
      'Relação entre fonologia e acentuação'
    ]
  },

  /* ============ BLOCO SINT — SINTAXE E PONTUAÇÃO ============ */
  {
    id: 'PT-07',
    area: 'SINT',
    titulo: 'Sintaxe da Oração e do Período',
    prioridade: 'alta',
    subtopicos: [
      'Frase, oração e período',
      'Período simples e composto',
      'Sujeito e predicado',
      'Predicativo',
      'Objeto direto e indireto',
      'Complemento nominal',
      'Adjunto adnominal e adverbial',
      'Aposto',
      'Vocativo',
      'Agente da passiva',
      'Termos integrantes e acessórios',
      'Orações coordenadas',
      'Orações subordinadas',
      'Análise sintática aplicada'
    ]
  },
  {
    id: 'PT-08',
    area: 'SINT',
    titulo: 'Pontuação',
    prioridade: 'muito_alta',
    subtopicos: [
      'Vírgula',
      'Ponto e vírgula',
      'Dois-pontos',
      'Ponto final',
      'Travessão',
      'Parênteses',
      'Aspas',
      'Separação de termos e orações',
      'Vírgula obrigatória, facultativa e inadequada',
      'Mudanças de sentido causadas pela pontuação',
      'Pontuação em orações subordinadas',
      'Intercalações e enumerações'
    ]
  },
  {
    id: 'PT-09',
    area: 'SINT',
    titulo: 'Concordância Verbal e Nominal',
    prioridade: 'muito_alta',
    subtopicos: [
      'Concordância entre sujeito e verbo',
      'Concordância entre substantivos, adjetivos, artigos, numerais e pronomes',
      'Casos especiais',
      'Expressões que costumam confundir',
      'Concordância com sujeito composto',
      'Concordância com porcentagens',
      'Concordância com expressões partitivas',
      'Correção de frases',
      'Identificação de desvios'
    ]
  },
  {
    id: 'PT-10',
    area: 'SINT',
    titulo: 'Regência Verbal, Regência Nominal e Crase',
    prioridade: 'alta',
    subtopicos: [
      'Relação entre nomes, verbos e complementos',
      'Preposições exigidas por verbos e nomes',
      'Verbos com regências diferentes',
      'Mudanças de sentido pela regência',
      'Uso do acento grave indicativo de crase',
      'Crase obrigatória',
      'Crase proibida',
      'Crase facultativa',
      'Aplicação em frases, textos e reescritas'
    ]
  },

  /* ============ BLOCO TEXT — TEXTO, COESÃO E REESCRITA ============ */
  {
    id: 'PT-11',
    area: 'TEXT',
    titulo: 'Coesão e Coerência Textual',
    prioridade: 'muito_alta',
    subtopicos: [
      'Referenciação',
      'Pronomes e expressões substitutivas',
      'Retomadas',
      'Conectores',
      'Relações de causa, consequência, oposição',
      'Relações de condição, concessão, conclusão e finalidade',
      'Progressão temática',
      'Continuidade e organização das ideias',
      'Coerência e contradições',
      'Ambiguidades e quebra de sentido',
      'Repetição, substituição, elipse e sequenciação',
      'Identificação do referente'
    ]
  },
  {
    id: 'PT-12',
    area: 'TEXT',
    titulo: 'Reescrita e Equivalência de Frases',
    prioridade: 'media',
    subtopicos: [
      'Substituição de palavras e expressões',
      'Reorganização de períodos e parágrafos',
      'Voz ativa e passiva',
      'Discurso direto e indireto',
      'Manutenção ou alteração de sentido',
      'Correção gramatical',
      'Paralelismo',
      'Adequação vocabular',
      'Paráfrases',
      'Ambiguidades e alterações semânticas'
    ]
  },
  {
    id: 'PT-16',
    area: 'TEXT',
    titulo: 'Argumentação, Análise Textual e Questões Integradas',
    prioridade: 'muito_alta',
    subtopicos: [
      'Tese, argumentos e conclusão',
      'Estratégias de persuasão',
      'Relações entre argumentos e evidências',
      'Intertextualidade',
      'Efeitos expressivos',
      'Questões que combinam interpretação e gramática',
      'Questões que combinam coesão e reescrita',
      'Identificação de pegadinhas',
      'Justificativa das alternativas'
    ]
  },

  /* ============ BLOCO OFIC — REDAÇÃO OFICIAL ============ */
  {
    id: 'PT-15',
    area: 'OFIC',
    titulo: 'Redação Oficial e Comunicação Administrativa',
    prioridade: 'condicional',
    subtopicos: [
      'Clareza',
      'Concisão',
      'Objetividade',
      'Impessoalidade',
      'Formalidade',
      'Adequação da linguagem ao destinatário e à finalidade',
      'E-mails profissionais',
      'Comunicados, ofícios, memorandos',
      'Estrutura e finalidade dos documentos oficiais',
      'Manual de Redação da Presidência da República'
    ]
  }

];
