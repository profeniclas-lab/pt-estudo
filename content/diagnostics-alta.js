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
  }

  /* ============================================================
     Próximo lote — adicionar em edição futura:
     'PT-02', 'PT-03', 'PT-04', 'PT-05', 'PT-07', 'PT-10'
  ============================================================ */

};
