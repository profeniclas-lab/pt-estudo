/* ============================================================
   MÓDULOS — Português e Redação Oficial
   Total: 24 módulos
   Áreas:
     LET = Leitura e Interpretação (POR-01 a POR-05)
     GRA = Gramática e Norma      (POR-06 a POR-19)
     RED = Redação Oficial        (RED-20 a RED-23)
     PRO = Produção Textual       (RED-24)
   Prioridades:
     alta  = 🔴 Muito alta
     media = 🟠 Alta
     baixa = 🟡 Complementar
   ============================================================ */

window.MODULES = [

  /* ============================================================
     ÁREA I — INTERPRETAÇÃO E COMPREENSÃO TEXTUAL
  ============================================================ */
  {
    id: 'POR-01',
    area: 'LET',
    titulo: 'Leitura, compreensão e interpretação de textos',
    prioridade: 'alta',
    subtopicos: [
      'Leitura literal e inferencial',
      'Informações explícitas e implícitas',
      'Tema e ideia central',
      'Ideias secundárias',
      'Finalidade comunicativa',
      'Tese e argumentos',
      'Pressupostos e subentendidos',
      'Inferências',
      'Relações entre partes do texto',
      'Identificação de informações contraditórias',
      'Interpretação de textos verbais e não verbais',
      'Interpretação de textos administrativos e informativos'
    ]
  },
  {
    id: 'POR-02',
    area: 'LET',
    titulo: 'Tipologia textual e gêneros textuais',
    prioridade: 'alta',
    subtopicos: [
      'Narração',
      'Descrição',
      'Dissertação expositiva',
      'Dissertação argumentativa',
      'Injuntivo e instrucional',
      'Gêneros textuais',
      'Diferenças entre tipo textual e gênero textual',
      'Função social dos textos',
      'Textos informativos, administrativos, jornalísticos e institucionais'
    ]
  },
  {
    id: 'POR-03',
    area: 'LET',
    titulo: 'Coesão e coerência textual',
    prioridade: 'alta',
    subtopicos: [
      'Coesão referencial',
      'Coesão sequencial',
      'Anáfora e catáfora',
      'Elementos de referenciação',
      'Substituição e repetição',
      'Conectivos',
      'Relações de causa, consequência, oposição, concessão, condição, finalidade e conclusão',
      'Progressão temática',
      'Coerência global e local',
      'Contradições e ambiguidades'
    ]
  },
  {
    id: 'POR-04',
    area: 'LET',
    titulo: 'Semântica, significação e relações entre palavras',
    prioridade: 'alta',
    subtopicos: [
      'Denotação e conotação',
      'Sinonímia e antonímia',
      'Polissemia',
      'Homonímia e paronímia',
      'Hiperonímia e hiponímia',
      'Ambiguidade',
      'Sentido contextual',
      'Sentido próprio e figurado',
      'Campo semântico',
      'Valor semântico dos conectivos'
    ]
  },
  {
    id: 'POR-05',
    area: 'LET',
    titulo: 'Figuras de linguagem e funções da linguagem',
    prioridade: 'alta',
    subtopicos: [
      'Metáfora',
      'Metonímia',
      'Comparação',
      'Hipérbole',
      'Eufemismo',
      'Ironia',
      'Personificação',
      'Antítese',
      'Paradoxo',
      'Funções referencial, emotiva, conativa, fática, metalinguística e poética',
      'Elementos da comunicação'
    ]
  },

  /* ============================================================
     ÁREA II — GRAMÁTICA E FUNCIONAMENTO DA LÍNGUA
  ============================================================ */
  {
    id: 'POR-06',
    area: 'GRA',
    titulo: 'Fonética, fonologia e ortografia',
    prioridade: 'media',
    subtopicos: [
      'Fonema e letra',
      'Encontros vocálicos',
      'Encontros consonantais',
      'Dígrafos',
      'Separação silábica',
      'Classificação das palavras quanto à sílaba tônica',
      'Ortografia oficial',
      'Emprego de letras',
      'Uso de s, z, x, ch, g e j',
      'Uso dos porquês',
      'Hífen'
    ]
  },
  {
    id: 'POR-07',
    area: 'GRA',
    titulo: 'Acentuação gráfica',
    prioridade: 'alta',
    subtopicos: [
      'Regras gerais de acentuação',
      'Oxítonas',
      'Paroxítonas',
      'Proparoxítonas',
      'Monossílabos tônicos',
      'Ditongos',
      'Hiatos',
      'Acentos diferenciais',
      'Mudanças do Acordo Ortográfico'
    ]
  },
  {
    id: 'POR-08',
    area: 'GRA',
    titulo: 'Estrutura e formação de palavras',
    prioridade: 'baixa',
    subtopicos: [
      'Radical',
      'Prefixo e sufixo',
      'Desinências',
      'Vogal temática',
      'Derivação',
      'Composição',
      'Parassíntese',
      'Abreviação',
      'Siglas e outros processos de formação'
    ]
  },
  {
    id: 'POR-09',
    area: 'GRA',
    titulo: 'Classes de palavras I: substantivo, adjetivo, artigo e numeral',
    prioridade: 'media',
    subtopicos: [
      'Substantivos',
      'Adjetivos',
      'Artigos',
      'Numerais',
      'Classificação',
      'Flexões',
      'Emprego contextual',
      'Locuções adjetivas',
      'Locuções substantivas'
    ]
  },
  {
    id: 'POR-10',
    area: 'GRA',
    titulo: 'Classes de palavras II: pronomes',
    prioridade: 'alta',
    subtopicos: [
      'Pronomes pessoais',
      'Possessivos',
      'Demonstrativos',
      'Relativos',
      'Indefinidos',
      'Interrogativos',
      'Pronomes de tratamento',
      'Emprego dos pronomes',
      'Referenciação textual',
      'Colocação pronominal',
      'Próclise, mesóclise e ênclise'
    ]
  },
  {
    id: 'POR-11',
    area: 'GRA',
    titulo: 'Verbos',
    prioridade: 'alta',
    subtopicos: [
      'Estrutura verbal',
      'Conjugações',
      'Modos indicativo, subjuntivo e imperativo',
      'Tempos verbais',
      'Verbos regulares e irregulares',
      'Verbos auxiliares',
      'Locuções verbais',
      'Voz ativa, passiva e reflexiva',
      'Transposição de vozes',
      'Correlação verbal',
      'Emprego dos tempos e modos no texto'
    ]
  },
  {
    id: 'POR-12',
    area: 'GRA',
    titulo: 'Classes de palavras III: advérbio, preposição, conjunção e interjeição',
    prioridade: 'media',
    subtopicos: [
      'Advérbios',
      'Preposições',
      'Conjunções',
      'Interjeições',
      'Locuções adverbiais e prepositivas',
      'Valores semânticos das conjunções',
      'Emprego contextual das classes invariáveis'
    ]
  },
  {
    id: 'POR-13',
    area: 'GRA',
    titulo: 'Sintaxe: termos da oração',
    prioridade: 'media',
    subtopicos: [
      'Frase, oração e período',
      'Sujeito e predicado',
      'Tipos de sujeito',
      'Predicação verbal',
      'Verbos transitivos e intransitivos',
      'Objeto direto e indireto',
      'Complemento nominal',
      'Adjunto adnominal',
      'Adjunto adverbial',
      'Predicativo',
      'Agente da passiva',
      'Aposto e vocativo'
    ]
  },
  {
    id: 'POR-14',
    area: 'GRA',
    titulo: 'Período simples e composto',
    prioridade: 'media',
    subtopicos: [
      'Coordenação',
      'Subordinação',
      'Orações coordenadas',
      'Orações subordinadas substantivas',
      'Orações subordinadas adjetivas',
      'Orações subordinadas adverbiais',
      'Orações reduzidas',
      'Conjunções integrantes',
      'Função sintática das orações',
      'Relações sintático-semânticas',
      'Reestruturação de períodos'
    ]
  },
  {
    id: 'POR-15',
    area: 'GRA',
    titulo: 'Concordância verbal e nominal',
    prioridade: 'alta',
    subtopicos: [
      'Regras gerais',
      'Casos especiais de concordância verbal',
      'Sujeito composto',
      'Expressões partitivas',
      'Verbos impessoais',
      'Concordância com porcentagens',
      'Concordância nominal',
      'Casos especiais',
      'Concordância ideológica',
      'Erros frequentes em concursos'
    ]
  },
  {
    id: 'POR-16',
    area: 'GRA',
    titulo: 'Regência verbal e nominal',
    prioridade: 'alta',
    subtopicos: [
      'Regência verbal',
      'Regência nominal',
      'Verbos que exigem preposição',
      'Verbos com mais de uma regência',
      'Mudança de sentido conforme a regência',
      'Complementos nominais',
      'Regência e crase',
      'Casos recorrentes em provas'
    ]
  },
  {
    id: 'POR-17',
    area: 'GRA',
    titulo: 'Crase',
    prioridade: 'alta',
    subtopicos: [
      'Conceito de crase',
      'Fusão da preposição a com o artigo a',
      'Regras gerais',
      'Casos obrigatórios',
      'Casos proibidos',
      'Casos facultativos',
      'Crase em locuções',
      'Crase diante de pronomes',
      'Crase com nomes de lugares',
      'Crase e regência',
      'Testes práticos de identificação'
    ]
  },
  {
    id: 'POR-18',
    area: 'GRA',
    titulo: 'Pontuação',
    prioridade: 'alta',
    subtopicos: [
      'Vírgula',
      'Ponto e vírgula',
      'Dois-pontos',
      'Ponto final',
      'Travessão',
      'Parênteses',
      'Aspas',
      'Separação de termos e orações',
      'Orações explicativas e restritivas',
      'Pontuação e mudança de sentido',
      'Erros frequentes em concursos'
    ]
  },
  {
    id: 'POR-19',
    area: 'GRA',
    titulo: 'Reescrita de frases e equivalência de sentido',
    prioridade: 'alta',
    subtopicos: [
      'Substituição de palavras',
      'Substituição de expressões',
      'Reorganização sintática',
      'Manutenção do sentido original',
      'Alteração de sentido',
      'Correção gramatical',
      'Transformação de voz verbal',
      'Reescrita com conectivos',
      'Equivalência semântica',
      'Identificação de construções inadequadas'
    ]
  },

  /* ============================================================
     ÁREA III — REDAÇÃO OFICIAL
  ============================================================ */
  {
    id: 'RED-20',
    area: 'RED',
    titulo: 'Fundamentos da Redação Oficial',
    prioridade: 'alta',
    subtopicos: [
      'Conceito de Redação Oficial',
      'Finalidade da comunicação pública',
      'Impessoalidade',
      'Clareza',
      'Precisão',
      'Objetividade',
      'Concisão',
      'Coesão',
      'Coerência',
      'Formalidade',
      'Padronização',
      'Linguagem adequada à Administração Pública',
      'Diferença entre linguagem formal e linguagem excessivamente rebuscada'
    ]
  },
  {
    id: 'RED-21',
    area: 'RED',
    titulo: 'Manual de Redação da Presidência da República',
    prioridade: 'alta',
    subtopicos: [
      'Características da redação oficial',
      'Pronomes de tratamento',
      'Vocativo',
      'Endereçamento',
      'Identificação do destinatário',
      'Fechos',
      'Identificação do signatário',
      'Padrão ofício',
      'Estrutura das comunicações',
      'Correio eletrônico oficial',
      'Formatação e padronização',
      'Adequação da linguagem'
    ]
  },
  {
    id: 'RED-22',
    area: 'RED',
    titulo: 'Documentos e comunicações administrativas',
    prioridade: 'alta',
    subtopicos: [
      'Ofício',
      'Requerimento',
      'Ata',
      'Relatório',
      'Declaração',
      'Certidão',
      'Despacho',
      'Parecer',
      'Circular',
      'Comunicado',
      'Memorando: abordagem histórica e comparação com o padrão ofício atual',
      'Protocolo e correspondência administrativa',
      'Documentos internos e externos',
      'Finalidade e estrutura de cada documento'
    ]
  },
  {
    id: 'RED-23',
    area: 'RED',
    titulo: 'Elaboração e interpretação de documentos oficiais',
    prioridade: 'alta',
    subtopicos: [
      'Identificação de documentos',
      'Escolha do documento adequado a cada situação',
      'Organização das informações',
      'Vocabulário administrativo',
      'Tratamento formal',
      'Erros comuns',
      'Revisão de documentos',
      'Adequação ao padrão oficial',
      'Interpretação de comunicações administrativas',
      'Reescrita de documentos inadequados'
    ]
  },

  /* ============================================================
     ÁREA IV — PRODUÇÃO TEXTUAL
  ============================================================ */
  {
    id: 'RED-24',
    area: 'PRO',
    titulo: 'Produção, revisão e aperfeiçoamento textual',
    prioridade: 'media',
    subtopicos: [
      'Planejamento textual',
      'Organização de ideias',
      'Construção de parágrafos',
      'Introdução, desenvolvimento e conclusão',
      'Tese e argumentação',
      'Coesão e coerência',
      'Dissertação argumentativa',
      'Adequação temática',
      'Revisão gramatical',
      'Revisão semântica',
      'Identificação de problemas de estrutura',
      'Reescrita e aperfeiçoamento'
    ]
  }

];
