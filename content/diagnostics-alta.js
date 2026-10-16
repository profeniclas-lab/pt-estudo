/* ============================================================
   DIAGNÓSTICOS — Módulos de prioridade MUITO ALTA e ALTA
   Preenchidos neste lote: PT-01, PT-08, PT-09, PT-11, PT-16
   Próximos lotes: PT-02, PT-03, PT-04, PT-05, PT-07, PT-10
   ============================================================ */

window.DIAGNOSTICS_ALTA = {

  /* ============================================================
     PT-01 — Interpretação e Compreensão de Textos
  ============================================================ */
  'PT-01': {
    id: 'D-PT-01',
    moduloId: 'PT-01',
    itens: [
      {
        id: 'D-PT-01-01',
        tipo: 'multipla_escolha',
        subtopico: 'Inferência x extrapolação',
        pergunta: 'Leia: "Ao receber a notícia, Carlos empalideceu, suas mãos tremeram e ele sentou-se devagar." Sobre esse trecho, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'O texto afirma explicitamente que Carlos ficou com medo.' },
          { id: 'B', texto: 'Infere-se que Carlos ficou assustado ou emocionado, com base nos sinais físicos descritos.' },
          { id: 'C', texto: 'Carlos estava com frio, pois empalideceu.' },
          { id: 'D', texto: 'Carlos é uma pessoa doente, pois suas mãos tremiam.' }
        ],
        gabarito: 'B',
        explicacao: 'O texto NÃO diz "ficou com medo" — essa é uma INFERÊNCIA autorizada pelos sinais (palidez, mãos trêmulas). As alternativas A, C e D são extrapolações: acrescentam informações que o texto não sustenta.'
      },
      {
        id: 'D-PT-01-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Fato x opinião',
        pergunta: 'A frase "A taxa de desemprego caiu 2 pontos percentuais no último trimestre" é um exemplo de opinião do autor.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. Trata-se de um FATO — dado objetivo e verificável. Opinião seria algo como "a queda do desemprego é insuficiente" ou "o governo acertou na política econômica". A distinção fato x opinião é cobrança clássica em textos argumentativos.'
      },
      {
        id: 'D-PT-01-03',
        tipo: 'situacao',
        subtopico: 'Pressuposto',
        pergunta: 'A frase "Ana voltou a estudar para concursos" apresenta qual informação implícita (pressuposto)?',
        alternativas: [
          { id: 'A', texto: 'Ana nunca estudou para concursos antes.' },
          { id: 'B', texto: 'Ana já havia estudado para concursos antes e parou.' },
          { id: 'C', texto: 'Ana vai ser aprovada em breve.' },
          { id: 'D', texto: 'Ana estuda por obrigação.' }
        ],
        gabarito: 'B',
        explicacao: 'O verbo "voltar a" pressupõe que a ação já ocorreu antes e foi interrompida. Pressuposto = informação implícita marcada por palavras específicas. As demais alternativas são extrapolações (C) ou não têm apoio no texto (A, D).'
      },
      {
        id: 'D-PT-01-04',
        tipo: 'autoavaliacao',
        subtopico: 'Estratégias de interpretação',
        pergunta: 'Você consegue diferenciar, com segurança, informação EXPLÍCITA (compreensão) de informação IMPLÍCITA (inferência), e reconhecer uma EXTRAPOLAÇÃO quando ela aparece?',
        resposta: 'EXPLÍCITA: está literalmente no texto — basta localizar. IMPLÍCITA (inferência): deduzida a partir de pistas e sinais do texto — NÃO está escrita, mas é autorizada. EXTRAPOLAÇÃO: informação acrescentada pelo leitor, SEM apoio no texto — é o erro mais comum em questões de interpretação. Ex.: se o texto diz "Carlos empalideceu", podemos inferir susto (autorizado pelos sinais), mas NÃO podemos afirmar que ele é cardíaco (extrapolação).'
      }
    ]
  },

  /* ============================================================
     PT-08 — Pontuação
  ============================================================ */
  'PT-08': {
    id: 'D-PT-08',
    moduloId: 'PT-08',
    itens: [
      {
        id: 'D-PT-08-01',
        tipo: 'multipla_escolha',
        subtopico: 'Vírgula entre sujeito e verbo',
        pergunta: 'Assinale a alternativa em que a pontuação está CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Os alunos do terceiro ano, foram aprovados no vestibular.' },
          { id: 'B', texto: 'Os alunos do terceiro ano foram aprovados no vestibular.' },
          { id: 'C', texto: 'Os alunos, do terceiro ano foram aprovados no vestibular.' },
          { id: 'D', texto: 'Os alunos do terceiro ano foram aprovados, no vestibular.' }
        ],
        gabarito: 'B',
        explicacao: 'É PROIBIDO separar o sujeito do verbo com vírgula (alternativa A) e o verbo do complemento (alternativa D). A alternativa C quebra o sujeito em lugar errado. A B está correta — sujeito, verbo e complemento ficam juntos.'
      },
      {
        id: 'D-PT-08-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Vírgula antes de "e"',
        pergunta: 'Usa-se vírgula antes do "e" quando ele liga orações com o mesmo sujeito, para marcar pausa.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. A vírgula antes do "e" só é admitida quando ele liga orações com SUJEITOS DIFERENTES: "Pedro estuda, e Maria trabalha." Se o sujeito é o mesmo, NÃO se usa vírgula: "Pedro estuda e trabalha." Vírgula antes de "e" com mesmo sujeito é ERRO clássico.'
      },
      {
        id: 'D-PT-08-03',
        tipo: 'situacao',
        subtopico: 'Mudança de sentido',
        pergunta: 'Qual a diferença de sentido entre "Meu irmão, que mora em Natal, é médico" e "Meu irmão que mora em Natal é médico"?',
        alternativas: [
          { id: 'A', texto: 'Não há diferença de sentido — apenas estilística.' },
          { id: 'B', texto: 'A primeira (com vírgulas) é explicativa: tenho UM irmão e ele mora em Natal. A segunda (sem vírgulas) é restritiva: tenho VÁRIOS irmãos e estou me referindo ao que mora em Natal.' },
          { id: 'C', texto: 'A primeira é errada e a segunda é certa.' },
          { id: 'D', texto: 'A primeira é restritiva e a segunda é explicativa.' }
        ],
        gabarito: 'B',
        explicacao: 'A vírgula muda o sentido. Explicativa (com vírgulas): informação adicional, generaliza — há um só irmão. Restritiva (sem vírgulas): restringe, especifica — há vários irmãos e destaco o que mora em Natal. Alternativa D inverte os conceitos.'
      },
      {
        id: 'D-PT-08-04',
        tipo: 'autoavaliacao',
        subtopico: 'Regras gerais',
        pergunta: 'Você sabe dizer quando a vírgula é OBRIGATÓRIA (ex.: separar aposto, vocativo, adjunto adverbial deslocado), quando é PROIBIDA (ex.: entre sujeito e verbo) e quando é FACULTATIVA (ex.: adjunto adverbial curto)?',
        resposta: 'OBRIGATÓRIA: separar aposto ("Pedro, meu vizinho, é médico"), vocativo ("Maria, venha cá"), adjunto adverbial deslocado de longa extensão ("Ontem à noite, choveu muito"), orações coordenadas assindéticas ("Cheguei, vi, venci"), adjetivas explicativas ("O aluno, que estudou, passou"). PROIBIDA: entre sujeito e verbo, entre verbo e complemento, entre nome e complemento nominal, antes de "e" com mesmo sujeito, antes de "que" em subordinadas substantivas. FACULTATIVA: adjunto adverbial curto ("Hoje(,) choveu"), antes de "e" com sujeitos diferentes, em algumas intercalações.'
      }
    ]
  },

  /* ============================================================
     PT-09 — Concordância Verbal e Nominal
  ============================================================ */
  'PT-09': {
    id: 'D-PT-09',
    moduloId: 'PT-09',
    itens: [
      {
        id: 'D-PT-09-01',
        tipo: 'multipla_escolha',
        subtopico: 'Haver x existir',
        pergunta: 'Assinale a alternativa CORRETA quanto à concordância:',
        alternativas: [
          { id: 'A', texto: 'Haviam muitos alunos na sala.' },
          { id: 'B', texto: 'Havia muitos alunos na sala.' },
          { id: 'C', texto: 'Houveram muitos alunos na sala.' },
          { id: 'D', texto: 'Hão de haver muitos alunos na sala.' }
        ],
        gabarito: 'B',
        explicacao: 'O verbo HAVER, no sentido de EXISTIR, é IMPESSOAL — fica sempre na 3ª pessoa do SINGULAR: "Havia muitos alunos." NUNCA "haviam". Já o verbo EXISTIR é pessoal e concorda com o sujeito: "Existiam muitos alunos." É o erro mais clássico de concordância em provas.'
      },
      {
        id: 'D-PT-09-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Expressões especiais',
        pergunta: 'A expressão "mais de um" exige o verbo no PLURAL, pois indica quantidade superior a um.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. "Mais de um" exige o verbo no SINGULAR: "Mais de um aluno faltou." (Exceção: se a expressão se repetir, o verbo vai para o plural: "Mais de um aluno, mais de um professor faltaram.") A banca cobra muito essa regra.'
      },
      {
        id: 'D-PT-09-03',
        tipo: 'situacao',
        subtopico: 'Fazer impessoal',
        pergunta: 'Qual a concordância CORRETA na frase que indica tempo decorrido?',
        alternativas: [
          { id: 'A', texto: 'Fazem cinco anos que ele partiu.' },
          { id: 'B', texto: 'Faz cinco anos que ele partiu.' },
          { id: 'C', texto: 'Fazem-se cinco anos que ele partiu.' },
          { id: 'D', texto: 'Fazem cinco anos desde que ele partiu.' }
        ],
        gabarito: 'B',
        explicacao: 'O verbo FAZER, indicando TEMPO DECORRIDO, é IMPESSOAL — fica sempre na 3ª pessoa do SINGULAR: "Faz cinco anos." NUNCA "Fazem". Mesma regra para "haver" (existir): ambos são impessoais.'
      },
      {
        id: 'D-PT-09-04',
        tipo: 'autoavaliacao',
        subtopico: 'Casos especiais',
        pergunta: 'Você consegue reconhecer rapidamente os casos especiais de concordância: haver/existir, fazer (tempo), "mais de um", "um ou outro", "nem um nem outro", partitivas ("a maioria de"), porcentagens, sujeito composto posposto?',
        resposta: 'HAVER (existir): sempre singular. FAZER (tempo): sempre singular. "MAIS DE UM": singular. "UM OU OUTRO": singular. "NEM UM NEM OUTRO": singular. PARTITIVAS ("a maioria de", "grande parte de"): singular OU plural. PORCENTAGEM: concorda com o número ou com o termo posposto. SUJEITO COMPOSTO POSPOSTO: plural ou concordando com o mais próximo. Sujeito coletivo: singular. Verbo + SE apassivador: concorda com o sujeito paciente.'
      }
    ]
  },

  /* ============================================================
     PT-11 — Coesão e Coerência Textual
  ============================================================ */
  'PT-11': {
    id: 'D-PT-11',
    moduloId: 'PT-11',
    itens: [
      {
        id: 'D-PT-11-01',
        tipo: 'multipla_escolha',
        subtopico: 'Coesão x coerência',
        pergunta: 'Sobre a diferença entre coesão e coerência, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'São sinônimos.' },
          { id: 'B', texto: 'Coesão é a ligação linguística entre as partes do texto (pronomes, conectores); coerência é o sentido global, a lógica interna.' },
          { id: 'C', texto: 'Coerência é apenas ortografia e pontuação corretas.' },
          { id: 'D', texto: 'Um texto com coesão sempre tem coerência.' }
        ],
        gabarito: 'B',
        explicacao: 'Coesão = mecanismos linguísticos (pronomes, sinônimos, conectores). Coerência = sentido global. Um texto pode ter coesão e NÃO ter coerência: "Comprei pão porque estava frio" — bem ligado por "porque", mas incoerente.'
      },
      {
        id: 'D-PT-11-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Conectores',
        pergunta: 'Os conectores "portanto" e "porque" estabelecem a mesma relação de sentido entre as ideias de um texto.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. "PORQUE" introduz CAUSA ("Não saiu porque chovia"). "PORTANTO" introduz CONSEQUÊNCIA ("Chovia, portanto não saiu"). São lados opostos da mesma relação. Trocar um pelo outro muda o sentido do texto.'
      },
      {
        id: 'D-PT-11-03',
        tipo: 'situacao',
        subtopico: 'Referência anafórica',
        pergunta: 'No trecho "Comprei um carro novo. Ele é econômico e confortável.", o pronome "Ele" retoma:',
        alternativas: [
          { id: 'A', texto: 'A compra.' },
          { id: 'B', texto: 'O carro novo.' },
          { id: 'C', texto: 'Um sujeito indeterminado.' },
          { id: 'D', texto: 'O autor do texto.' }
        ],
        gabarito: 'B',
        explicacao: 'O pronome "Ele" é uma REFERÊNCIA ANAFÓRICA — retoma o termo "um carro novo", mencionado antes. Identificar o referente de um pronome é fundamental para interpretar corretamente o texto.'
      },
      {
        id: 'D-PT-11-04',
        tipo: 'autoavaliacao',
        subtopico: 'Tipos de coesão',
        pergunta: 'Você sabe identificar os principais mecanismos de coesão textual: referência (anafórica e catafórica), substituição, elipse, conjunção e coesão lexical?',
        resposta: 'REFERÊNCIA: retomada por pronomes ou expressões. ANAFÓRICA: termo que retoma vem DEPOIS ("Comprei um livro. Ele é ótimo."). CATAFÓRICA: termo que retoma vem ANTES ("Só quero isto: descansar."). SUBSTITUIÇÃO: troca de uma palavra por outra ("meu carro" → "o seu"). ELIPSE: omissão de termo já mencionado ("Maria estuda; (Maria) trabalha."). CONJUNÇÃO: uso de conectores. COESÃO LEXICAL: repetição controlada ou uso de sinônimos/hiperônimos.'
      }
    ]
  },

  /* ============================================================
     PT-16 — Argumentação, Análise Textual e Questões Integradas
  ============================================================ */
  'PT-16': {
    id: 'D-PT-16',
    moduloId: 'PT-16',
    itens: [
      {
        id: 'D-PT-16-01',
        tipo: 'multipla_escolha',
        subtopico: 'Tese x argumento',
        pergunta: 'Leia: "O transporte público no Brasil precisa ser priorizado. Enquanto poucos desfrutam de carros particulares subsidiados, milhões dependem diariamente de ônibus lotados e metrôs insuficientes." Sobre o trecho, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'A tese é "milhões dependem de ônibus lotados"; o argumento é "o transporte público precisa ser priorizado".' },
          { id: 'B', texto: 'A tese é "o transporte público no Brasil precisa ser priorizado"; o argumento é a comparação entre poucos donos de carros e milhões de usuários de transporte público.' },
          { id: 'C', texto: 'Não há tese, apenas fatos.' },
          { id: 'D', texto: 'A tese é "o transporte público é ruim no Brasil".' }
        ],
        gabarito: 'B',
        explicacao: 'TESE = ideia principal defendida ("o transporte público precisa ser priorizado"). ARGUMENTO = razão que sustenta a tese (comparação entre poucos donos de carros e milhões de usuários). A alternativa A inverte; C ignora a argumentação; D troca a tese por opinião vaga.'
      },
      {
        id: 'D-PT-16-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Intertextualidade',
        pergunta: 'A intertextualidade ocorre quando um texto dialoga com outro, por meio de citação, paródia, paráfrase ou alusão, e é um recurso legítimo da argumentação.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. Intertextualidade é o diálogo consciente entre textos. Citação (menção direta), paródia (imitação cômica), paráfrase (reescrita com mesmas ideias) e alusão (referência indireta) são formas legítimas. Diferente do PLÁGIO, que é apropriação indevida SEM crédito.'
      },
      {
        id: 'D-PT-16-03',
        tipo: 'situacao',
        subtopico: 'Reescrita — sentido + gramática',
        pergunta: 'Considere a reescrita: "Os alunos do terceiro ano, foram aprovados no vestibular, segundo a diretora." Sobre essa reescrita, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Está correta — mantém o sentido e a gramática.' },
          { id: 'B', texto: 'Está incorreta — há vírgula separando o sujeito do verbo.' },
          { id: 'C', texto: 'Está correta, mas o sentido mudou.' },
          { id: 'D', texto: 'Está incorreta — o verbo deveria estar no singular.' }
        ],
        gabarito: 'B',
        explicacao: 'A vírgula após "terceiro ano" separa o sujeito ("Os alunos do terceiro ano") do verbo ("foram") — PROIBIDO. É o erro mais clássico em questões de reescrita. A alternativa A ignora o erro; C erra o diagnóstico; D aplica regra de concordância indevida.'
      },
      {
        id: 'D-PT-16-04',
        tipo: 'autoavaliacao',
        subtopico: 'Estratégias integradas',
        pergunta: 'Diante de uma questão integrada (reescrita, interpretação com gramática), você confere SEMPRE duas coisas: (a) se o sentido original foi mantido; (b) se a alternativa está gramaticalmente correta?',
        resposta: 'Sim, essa é a estratégia correta. Nas questões de reescrita, a banca coloca armadilhas duplas: alternativas que mantêm o sentido, mas contêm erro gramatical (ex.: vírgula entre sujeito e verbo, "haviam" por "havia"); ou alternativas gramaticalmente corretas, mas com sentido alterado (troca de conector, mudança de tempo verbal). Estratégia: ler o enunciado, localizar o que se pede, eliminar alternativas com erro gramatical e depois conferir o sentido das restantes. Sempre voltar ao texto.'
      }
    ]
  },

  /* ============================================================
     PT-02 — Tipologia, Gêneros Textuais e Comunicação
  ============================================================ */
  'PT-02': {
    id: 'D-PT-02',
    moduloId: 'PT-02',
    itens: [
      {
        id: 'D-PT-02-01',
        tipo: 'multipla_escolha',
        subtopico: 'Tipo textual',
        pergunta: 'Uma receita de bolo, um manual de instruções e uma bula de remédio são exemplos predominantes de qual tipo textual?',
        alternativas: [
          { id: 'A', texto: 'Narração.' },
          { id: 'B', texto: 'Descrição.' },
          { id: 'C', texto: 'Argumentação.' },
          { id: 'D', texto: 'Injunção (instrucional).' }
        ],
        gabarito: 'D',
        explicacao: 'INJUNÇÃO: textos que instruem, orientam, apresentam sequência de passos. Uso de verbos no imperativo ("misture", "leve ao forno"). Narração conta fatos; descrição caracteriza; argumentação defende tese.'
      },
      {
        id: 'D-PT-02-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Tipo x gênero',
        pergunta: 'Tipo textual e gênero textual são sinônimos: ambos designam a mesma realidade.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. TIPO: categoria abstrata de organização do discurso (narração, descrição, exposição, argumentação, injunção). GÊNERO: forma concreta e social (notícia, receita, e-mail). Todo gênero contém um ou mais tipos.'
      },
      {
        id: 'D-PT-02-03',
        tipo: 'situacao',
        subtopico: 'Funções da linguagem',
        pergunta: 'Em uma propaganda de tênis com o slogan "Compre agora e transforme seu treino!", qual a função da linguagem predominante?',
        alternativas: [
          { id: 'A', texto: 'Referencial (informar).' },
          { id: 'B', texto: 'Apelativa (conativa), pois busca influenciar o leitor a agir.' },
          { id: 'C', texto: 'Metalinguística.' },
          { id: 'D', texto: 'Fática.' }
        ],
        gabarito: 'B',
        explicacao: 'A propaganda usa verbos no imperativo ("compre", "transforme") para persuadir o leitor. É a função APELATIVA (conativa). Referencial informa; metalinguística fala da própria linguagem; fática mantém contato.'
      },
      {
        id: 'D-PT-02-04',
        tipo: 'autoavaliacao',
        subtopico: 'Distinção geral',
        pergunta: 'Você consegue distinguir os 5 tipos textuais (narração, descrição, exposição, argumentação, injunção) e reconhecer, em um texto, qual o predominante?',
        resposta: 'NARRAÇÃO: conta fatos com personagens, tempo, espaço, conflito — verbos no passado. DESCRIÇÃO: caracteriza seres, objetos, lugares — adjetivos, verbos de estado. EXPOSIÇÃO: apresenta informação de forma neutra — linguagem impessoal, dados. ARGUMENTAÇÃO: defende tese com argumentos — conectores lógicos, opiniões. INJUNÇÃO: instrui, orienta — verbos no imperativo, sequência de passos. Muitos textos são mistos.'
      }
    ]
  },

  /* ============================================================
     PT-03 — Semântica e Sentido das Palavras
  ============================================================ */
  'PT-03': {
    id: 'D-PT-03',
    moduloId: 'PT-03',
    itens: [
      {
        id: 'D-PT-03-01',
        tipo: 'multipla_escolha',
        subtopico: 'Denotação x conotação',
        pergunta: 'Na frase "Ele tem um coração de pedra", o termo "coração de pedra" está empregado em sentido:',
        alternativas: [
          { id: 'A', texto: 'Denotativo (literal).' },
          { id: 'B', texto: 'Conotativo (figurado).' },
          { id: 'C', texto: 'Científico.' },
          { id: 'D', texto: 'Técnico.' }
        ],
        gabarito: 'B',
        explicacao: 'O sentido é CONOTATIVO (figurado): "coração de pedra" significa pessoa fria, insensível — não um coração literal de pedra. É também uma METÁFORA.'
      },
      {
        id: 'D-PT-03-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Homônimos x parônimos',
        pergunta: 'As palavras "eminente" (importante) e "iminente" (que está por vir) são exemplos de homônimos.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. São PARÔNIMOS — parecidos, mas com pronúncia e escrita ligeiramente diferentes e significados diferentes. Homônimos têm a MESMA pronúncia/escrita (ex.: "cela" e "sela").'
      },
      {
        id: 'D-PT-03-03',
        tipo: 'situacao',
        subtopico: 'Figuras de linguagem',
        pergunta: 'Em "Chorei rios de lágrimas", a figura de linguagem presente é:',
        alternativas: [
          { id: 'A', texto: 'Metáfora.' },
          { id: 'B', texto: 'Metonímia.' },
          { id: 'C', texto: 'Hipérbole (exagero).' },
          { id: 'D', texto: 'Eufemismo.' }
        ],
        gabarito: 'C',
        explicacao: 'HIPÉRBOLE: exagero intencional. "Rios de lágrimas" não é literal. Metáfora é comparação implícita; metonímia é substituição por proximidade; eufemismo suaviza.'
      },
      {
        id: 'D-PT-03-04',
        tipo: 'autoavaliacao',
        subtopico: 'Ambigüidade x polissemia',
        pergunta: 'Você consegue distinguir POLISSEMIA (uma palavra com vários sentidos) de AMBIGUIDADE (dupla interpretação em um mesmo contexto)?',
        resposta: 'POLISSEMIA: uma palavra tem vários sentidos, todos válidos em contextos DISTINTOS. Ex.: "banco" (assento / instituição financeira). AMBIGUIDADE: em um MESMO contexto, a palavra ou frase permite DUAS interpretações. Ex.: "João disse a Pedro que ele era culpado." — quem é "ele"? A polissemia é característica natural da palavra; a ambiguidade é um problema de clareza (ou recurso estilístico).'
      }
    ]
  },

  /* ============================================================
     PT-04 — Ortografia Oficial e Acentuação
  ============================================================ */
  'PT-04': {
    id: 'D-PT-04',
    moduloId: 'PT-04',
    itens: [
      {
        id: 'D-PT-04-01',
        tipo: 'multipla_escolha',
        subtopico: 'Acentuação',
        pergunta: 'Assinale a alternativa em que TODAS as palavras estão corretamente acentuadas:',
        alternativas: [
          { id: 'A', texto: 'Café, fácil, árvore, saída.' },
          { id: 'B', texto: 'Café, facil, arvore, saida.' },
          { id: 'C', texto: 'Cafe, fácil, árvore, saída.' },
          { id: 'D', texto: 'Café, fácil, arvore, saida.' }
        ],
        gabarito: 'A',
        explicacao: 'Todas as palavras da alternativa A estão corretas: "café" (oxítona terminada em E), "fácil" (paroxítona em L), "árvore" (proparoxítona — sempre acentuada), "saída" (hiato).'
      },
      {
        id: 'D-PT-04-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Proparoxítonas',
        pergunta: 'Todas as palavras proparoxítonas são acentuadas graficamente na língua portuguesa.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. A regra das proparoxítonas não tem exceção: TODAS são acentuadas (árvore, médico, lâmpada, próximo, ônibus).'
      },
      {
        id: 'D-PT-04-03',
        tipo: 'situacao',
        subtopico: 'Uso dos porquês',
        pergunta: 'Complete a frase: "Não sei ___ ele não veio, mas imagino o ___."',
        alternativas: [
          { id: 'A', texto: 'porque / porquê' },
          { id: 'B', texto: 'por que / porquê' },
          { id: 'C', texto: 'porquê / porque' },
          { id: 'D', texto: 'por que / por que' }
        ],
        gabarito: 'B',
        explicacao: '"POR QUE" (separado, sem acento): pergunta indireta, equivale a "por qual razão". "PORQUÊ" (junto, com acento): substantivo, equivale a "motivo". Frase: "Não sei POR QUE ele não veio, mas imagino o PORQUÊ."'
      },
      {
        id: 'D-PT-04-04',
        tipo: 'autoavaliacao',
        subtopico: 'Regras gerais',
        pergunta: 'Você conhece as regras de acentuação de oxítonas, paroxítonas e proparoxítonas e sabe aplicar o teste da palavra masculina para saber quando há crase?',
        resposta: 'OXÍTONAS: acentuam-se as terminadas em A, E, O, EM, ENS (café, jiló, também). PAROXÍTONAS: acentuam-se as terminadas em L, N, R, X, I, IS, UM, UNS, PS, ditongo, Ã, ÃS, ÃO, ÃOS, ON, ONS, US (fácil, hífen, tórax, vírus). PROPAROXÍTONAS: TODAS (árvore). CRASE: teste da palavra masculina — se, substituindo por palavra masculina, aparecer "ao", há crase; se aparecer "o", não há. Ex.: "Vou à escola" → "Vou ao colégio" (tem crase).'
      }
    ]
  },

  /* ============================================================
     PT-05 — Classes de Palavras: Visão Geral
  ============================================================ */
  'PT-05': {
    id: 'D-PT-05',
    moduloId: 'PT-05',
    itens: [
      {
        id: 'D-PT-05-01',
        tipo: 'multipla_escolha',
        subtopico: 'Advérbio x adjetivo',
        pergunta: 'Na frase "Ele fala muito bem", a palavra "muito" pertence à classe:',
        alternativas: [
          { id: 'A', texto: 'Adjetivo.' },
          { id: 'B', texto: 'Substantivo.' },
          { id: 'C', texto: 'Advérbio.' },
          { id: 'D', texto: 'Pronome.' }
        ],
        gabarito: 'C',
        explicacao: '"Muito" aqui modifica o advérbio "bem" (intensificando). É ADVÉRBIO — invariável. Não confundir com "muitos alunos" (adjetivo/pronome indefinido, variável).'
      },
      {
        id: 'D-PT-05-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Preposição x conjunção',
        pergunta: 'A palavra "e" em "Pedro e Maria estudam" é uma preposição, pois liga dois termos.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. "E" é CONJUNÇÃO (coordenativa aditiva) — liga termos de mesma função ou orações. Preposição liga termos com relação de dependência (ex.: "casa DE pedra").'
      },
      {
        id: 'D-PT-05-03',
        tipo: 'situacao',
        subtopico: 'Palavra que muda de classe',
        pergunta: 'Na frase "O jantar está pronto", a palavra "jantar" pertence à classe:',
        alternativas: [
          { id: 'A', texto: 'Verbo.' },
          { id: 'B', texto: 'Substantivo.' },
          { id: 'C', texto: 'Adjetivo.' },
          { id: 'D', texto: 'Advérbio.' }
        ],
        gabarito: 'B',
        explicacao: 'Aqui "jantar" está precedido do artigo "o" — função de SUBSTANTIVO (nomeia a refeição). Em "Vou jantar agora", a palavra é VERBO (ação). A classe depende do contexto.'
      },
      {
        id: 'D-PT-05-04',
        tipo: 'autoavaliacao',
        subtopico: 'Classes de palavras',
        pergunta: 'Você consegue listar e reconhecer as 10 classes de palavras, e distinguir substantivo de adjetivo, advérbio de adjetivo, preposição de conjunção?',
        resposta: 'As 10 classes: substantivo (nomeia), artigo (determina), adjetivo (caracteriza), numeral (quantifica), pronome (substitui/acompanha), verbo (ação/estado), advérbio (modifica verbo/adjetivo/advérbio — invariável), preposição (liga termos com dependência), conjunção (liga orações ou termos de mesma função), interjeição (expressa emoção). Substantivo x adjetivo: nomeia x caracteriza. Advérbio x adjetivo: invariável x variável. Preposição x conjunção: liga termos x liga orações.'
      }
    ]
  },

  /* ============================================================
     PT-07 — Sintaxe da Oração e do Período
  ============================================================ */
  'PT-07': {
    id: 'D-PT-07',
    moduloId: 'PT-07',
    itens: [
      {
        id: 'D-PT-07-01',
        tipo: 'multipla_escolha',
        subtopico: 'Objeto direto x indireto',
        pergunta: 'Na frase "Entreguei o livro ao professor", os termos "o livro" e "ao professor" são, respectivamente:',
        alternativas: [
          { id: 'A', texto: 'Objeto indireto e objeto direto.' },
          { id: 'B', texto: 'Objeto direto e objeto indireto.' },
          { id: 'C', texto: 'Complemento nominal e agente da passiva.' },
          { id: 'D', texto: 'Sujeito e predicativo.' }
        ],
        gabarito: 'B',
        explicacao: '"O livro" é OBJETO DIRETO (sem preposição obrigatória). "Ao professor" é OBJETO INDIRETO (com preposição "a"). O verbo "entregar" é transitivo direto e indireto.'
      },
      {
        id: 'D-PT-07-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Sujeito oculto x indeterminado',
        pergunta: 'Na frase "Roubaram minha bolsa", o sujeito é classificado como oculto, pois existe mas não está expresso.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. O sujeito é INDETERMINADO (verbo na 3ª pessoa do plural sem sujeito expresso). O sujeito OCULTO existe e pode ser identificado pelo contexto ou desinência. Ex.: "(Eu) Estudei muito."'
      },
      {
        id: 'D-PT-07-03',
        tipo: 'situacao',
        subtopico: 'Adjunto adnominal x complemento nominal',
        pergunta: 'Na expressão "o medo de altura", o termo "de altura" é classificado como:',
        alternativas: [
          { id: 'A', texto: 'Adjunto adnominal.' },
          { id: 'B', texto: 'Complemento nominal.' },
          { id: 'C', texto: 'Aposto.' },
          { id: 'D', texto: 'Vocativo.' }
        ],
        gabarito: 'B',
        explicacao: '"De altura" completa o sentido do substantivo abstrato "medo" com preposição, indicando o ALVO do medo. É COMPLEMENTO NOMINAL. Adjunto adnominal caracteriza (posse, qualidade) — não completa o sentido.'
      },
      {
        id: 'D-PT-07-04',
        tipo: 'autoavaliacao',
        subtopico: 'Análise sintática',
        pergunta: 'Você consegue identificar, em uma oração, o sujeito, o predicado, os objetos, o complemento nominal, os adjuntos e distinguir orações coordenadas de subordinadas?',
        resposta: 'SUJEITO: quem faz ou de quem se fala. PREDICADO: o que se diz do sujeito (verbal, nominal, verbo-nominal). OBJETO DIRETO: completa verbo transitivo direto, sem preposição obrigatória. OBJETO INDIRETO: completa verbo transitivo indireto, com preposição. COMPLEMENTO NOMINAL: completa nome (substantivo, adjetivo, advérbio) com preposição. ADJUNTO ADNOMINAL: caracteriza substantivo. ADJUNTO ADVERBIAL: modifica verbo (circunstância). APOSTO: explica. VOCATIVO: chama. COORDENADAS: independentes. SUBORDINADAS: dependem de outra oração.'
      }
    ]
  },

  /* ============================================================
     PT-10 — Regência Verbal, Regência Nominal e Crase
  ============================================================ */
  'PT-10': {
    id: 'D-PT-10',
    moduloId: 'PT-10',
    itens: [
      {
        id: 'D-PT-10-01',
        tipo: 'multipla_escolha',
        subtopico: 'Crase',
        pergunta: 'Assinale a alternativa em que a crase está empregada CORRETAMENTE:',
        alternativas: [
          { id: 'A', texto: 'Vou à pé até a escola.' },
          { id: 'B', texto: 'Começou à chover forte.' },
          { id: 'C', texto: 'Entreguei o livro à professora.' },
          { id: 'D', texto: 'Fiquei cara à cara com ele.' }
        ],
        gabarito: 'C',
        explicacao: 'A crase é correta em "à professora" (preposição "a" + artigo "a" + palavra feminina). As demais estão erradas: A (palavra masculina "pé"), B (antes de verbo), D (palavras repetidas).'
      },
      {
        id: 'D-PT-10-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Verbos de dupla regência',
        pergunta: 'O verbo "assistir" tem o mesmo sentido e a mesma regência em "Assisti ao filme" e "O médico assistiu o paciente".',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. "ASSISTIR" (= ver) pede preposição "a": "Assisti AO filme." "ASSISTIR" (= ajudar/socorrer) NÃO pede preposição: "O médico assistiu O paciente." Sentidos e regências diferentes.'
      },
      {
        id: 'D-PT-10-03',
        tipo: 'situacao',
        subtopico: 'Crase proibida',
        pergunta: 'Em qual das alternativas a crase é PROIBIDA?',
        alternativas: [
          { id: 'A', texto: 'Referi-me àquele episódio.' },
          { id: 'B', texto: 'Cheguei à noite.' },
          { id: 'C', texto: 'Vou a Brasília.' },
          { id: 'D', texto: 'Entreguei o livro à Maria.' }
        ],
        gabarito: 'C',
        explicacao: 'É PROIBIDA crase antes de nome de cidade que NÃO admite artigo: "Vou a Brasília" (sem crase). "Vou à Bahia" (com crase, pois "a Bahia" admite artigo). Nos demais casos: A e B são obrigatórias; D é facultativa.'
      },
      {
        id: 'D-PT-10-04',
        tipo: 'autoavaliacao',
        subtopico: 'Regência e crase',
        pergunta: 'Você sabe usar o teste da palavra masculina para saber quando há crase, e conhece os principais verbos de dupla regência (assistir, aspirar, visar, implicar)?',
        resposta: 'TESTE DA PALAVRA MASCULINA: substitua o termo feminino por um masculino. Se aparecer "AO", há crase. Se aparecer "O", não há. Ex.: "Vou à escola" → "Vou ao colégio" (tem crase). "Vou a São Paulo" → "Vou a (o) Rio"? Atenção: nem toda cidade admite artigo. VERBOS DE DUPLA REGÊNCIA: ASSISTIR (= ver) → a / (= ajudar) → sem preposição. ASPIRAR (= desejar) → a / (= respirar) → sem preposição. VISAR (= pretender) → a / (= assinar) → sem preposição. IMPLICAR (= acarretar) → sem preposição / (= envolver-se) → em. ESQUECER/LEMBRAR (pronominal) → de / (não pronominal) → sem preposição.'
      }
    ]
  }

};
