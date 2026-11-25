/* ============================================================
   DIAGNÓSTICOS — Módulos de prioridade ALTA
   Reconstrução v2.0 — padrão pedagógico unificado

   Estrutura por item:
   - explicacao (string)         → motor atual lê e exibe
   - explicacaoDetalhada (obj)   → motor Etapa 5 lerá

   Composição por módulo:
   3 MC + 2 V/F + 1 situação + 1 autoavaliação = 7 itens.

   Bloco 1: ADM-01, ADM-02
   ============================================================ */

window.DIAGNOSTICS_ALTA = {

  /* ============================================================
     ADM-01 — Fundamentos de Administração
  ============================================================ */
  'ADM-01': {
    id: 'D-ADM-01',
    moduloId: 'ADM-01',
    itens: [

      /* ---------- Item 1 — Formato 6 (EXCETO) — Dificuldade 1 ---------- */
      {
        id: 'D-ADM-01-01',
        tipo: 'multipla_escolha',
        formato: 'excecao',
        dificuldade: 1,
        subtopico: 'Funções administrativas (PODC)',
        pergunta: 'Sobre as quatro funções administrativas que compõem o ciclo PODC, assinale a alternativa INCORRETA:',
        alternativas: [
          { id: 'A', texto: 'O planejamento verifica, ao final do período, se os objetivos foram atingidos, corrigindo os desvios identificados.' },
          { id: 'B', texto: 'A organização distribui tarefas, recursos e autoridade entre os membros da equipe e setores da instituição.' },
          { id: 'C', texto: 'A direção orienta, motiva e conduz as pessoas na execução do que foi planejado e organizado.' },
          { id: 'D', texto: 'O controle compara resultados com padrões previamente estabelecidos e adota ações corretivas quando necessário.' },
          { id: 'E', texto: 'O PODC é um instrumento da teoria geral da Administração, aplicável a organizações públicas e privadas.' }
        ],
        gabarito: 'A',
        explicacao: 'A alternativa A é a INCORRETA. Verificar resultados ao final do período é função do CONTROLE, não do planejamento. Planejamento define metas e padrões; controle compara o desempenho real com esses padrões e corrige desvios.',
        explicacaoDetalhada: {
          correta: 'A alternativa A está INCORRETA e, por isso, é a resposta. Verificar ao final do período se os objetivos foram atingidos e corrigir desvios é função do CONTROLE, não do planejamento. O planejamento define objetivos, metas e padrões; o controle é quem os compara com o desempenho real.',
          incorretas: {
            B: 'A alternativa está correta e não deve ser marcada. A organização é, de fato, a função que estrutura recursos, distribui tarefas e define autoridade. Seria INCORRETA se atribuísse à organização a liderança da equipe — isso pertence à direção.',
            C: 'A alternativa está correta e não deve ser marcada. A direção lidera, motiva e orienta as pessoas. Seria INCORRETA se dissesse que a direção define metas ou distribui tarefas — essas são funções, respectivamente, do planejamento e da organização.',
            D: 'A alternativa está correta e não deve ser marcada. O controle compara resultados com padrões e adota ações corretivas. Seria INCORRETA se dissesse que o controle cria os padrões — os padrões nascem do planejamento.',
            E: 'A alternativa está correta e não deve ser marcada. O PODC aplica-se a qualquer organização, com adaptações no setor público (LIMPE, interesse público). Seria INCORRETA se afirmasse que o PODC é exclusivo do setor privado.'
          },
          conceitoCobrado: 'Atribuições específicas de cada função administrativa no ciclo PODC',
          pegadinha: 'Bancas costumam trocar as atribuições entre planejamento e controle (a verificação final é do controle) e entre organização e direção (a liderança é da direção). Fixar: planejamento (define) → organização (estrutura) → direção (lidera) → controle (compara e corrige).',
          comoApareceEmConcurso: 'O formato "EXCETO/INCORRETA" com atribuições trocadas é clássico em provas de nível médio. A confusão mais recorrente é atribuir ao planejamento a verificação final (que é do controle).',
          exemploInedito: {
            contexto: 'Um gestor afirma em reunião: "Já que planejamos tudo em janeiro, não precisamos nos preocupar em medir nada em dezembro — o planejamento já garantiu o resultado".',
            aplicacao: 'O gestor confunde planejamento com controle. Planejar define o "onde queremos chegar" e os padrões de sucesso; sem a medição posterior (controle), não há como saber se os padrões foram atingidos. As duas funções são complementares, não substitutas.',
            desafio: 'Que consequência prática, no setor público, tem um gestor que planeja mas não controla? Relacione com a prestação de contas aos órgãos de controle externo.'
          }
        },
        tags: ['PODC', 'funções administrativas']
      },

      /* ---------- Item 2 — C/E — Dificuldade 1 ---------- */
      {
        id: 'D-ADM-01-02',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 1,
        subtopico: 'Ciclo PODC — natureza interdependente',
        pergunta: 'O PODC é um ciclo contínuo e interdependente: o controle realimenta novo planejamento, reiniciando o processo. Não se trata de uma sequência linear que termina no controle.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'A afirmação é CERTA. O PODC é cíclico: desvios identificados no controle alimentam novo planejamento. Não há "fim" no controle — ele é o gatilho do próximo ciclo.',
        explicacaoDetalhada: {
          correta: 'A afirmação é CERTA. O PODC é cíclico: os desvios identificados no controle alimentam novo planejamento, e as funções podem ocorrer simultaneamente em diferentes níveis organizacionais. Não há "fim" no controle — ele é o gatilho do próximo ciclo.',
          incorretas: {
            F: 'A afirmação não é falsa. O caráter cíclico é a essência do PODC. Tratá-lo como sequência linear que "termina no controle" é visão ultrapassada, que desconsidera a realimentação (feedback) e a simultaneidade das funções nos diferentes níveis hierárquicos.'
          },
          conceitoCobrado: 'Natureza cíclica e interdependente do PODC',
          pegadinha: 'A visão linear do PODC ("planeja, organiza, dirige, controla e acabou") é intuitiva e enganosa. A palavra-chave é "realimentação": o controle gera informação para novo planejamento.',
          comoApareceEmConcurso: 'Bancas usam essa distinção para separar quem decorou a sequência de quem entendeu o ciclo. A afirmação "o PODC termina no controle" é recorrente em itens de C/E.',
          exemploInedito: {
            contexto: 'Uma escola pública define, em 2024, a meta de elevar o IDEB em 10%. Em 2025, ao verificar os resultados (controle), identifica que apenas 5% foi alcançado e decide, para 2026, reformular a formação de professores (novo planejamento).',
            aplicacao: 'O controle de 2025 gerou informação que alimentou o planejamento de 2026. Não houve "fim" — houve realimentação. Se o PODC fosse linear, a escola simplesmente "encerraria" o ciclo em 2025 sem aprender com o resultado.',
            desafio: 'Um órgão que faz controle mas não usa os resultados para replanejar está aplicando o PODC de que forma? Que consequência isso tem para a melhoria contínua?'
          }
        },
        tags: ['PODC', 'ciclo']
      },

      /* ---------- Item 3 — Formato 2 (I, II, III) — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-01-03',
        tipo: 'multipla_escolha',
        formato: 'afirmacoes_romanas',
        dificuldade: 2,
        subtopico: 'Conceito de Administração e de organização',
        pergunta: 'Sobre o conceito de Administração e de organização, analise as afirmações a seguir:\n\nI. A Administração é exclusiva de empresas privadas, não se aplicando a órgãos públicos, pois estes seguem apenas a lei.\nII. Organização é um sistema social que combina recursos e pessoas para produzir bens ou serviços, com ou sem fins lucrativos.\nIII. As funções administrativas do PODC perpassam todos os níveis organizacionais, variando apenas em profundidade e escopo conforme o nível.\n\nEstão corretas:',
        alternativas: [
          { id: 'A', texto: 'Apenas I.' },
          { id: 'B', texto: 'Apenas II.' },
          { id: 'C', texto: 'Apenas II e III.' },
          { id: 'D', texto: 'Apenas I e III.' },
          { id: 'E', texto: 'I, II e III.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C está correta. II e III são verdadeiras; I é falsa (Administração não é exclusiva do privado — aplica-se a qualquer organização, com adaptações no setor público).',
        explicacaoDetalhada: {
          correta: 'A alternativa C está correta. A afirmação II está certa: organização é sistema social que combina recursos para produzir bens ou serviços, com ou sem fins lucrativos — inclui empresas, órgãos públicos, ONGs. A afirmação III também está certa: as funções administrativas perpassam todos os níveis, variando apenas em profundidade. A afirmação I está INCORRETA.',
          incorretas: {
            A: 'A afirmação I está incorreta: a Administração não é exclusiva do setor privado. Ela se aplica a qualquer organização, com adaptações decorrentes dos princípios do LIMPE e do interesse público. A afirmação II está correta. Logo, "apenas I" não procede.',
            B: 'A afirmação II está correta, mas a III também. As funções administrativas perpassam todos os níveis — cada um as exerce com maior ou menor profundidade. Descartar a III é erro de leitura do modelo de níveis organizacionais.',
            D: 'A afirmação I é incorreta (Administração não é exclusiva do privado) e a III está correta. Portanto, "apenas I e III" não se sustenta — a I não pode ser incluída.',
            E: 'Não é possível aceitar as três. A afirmação I está incorreta — Administração aplica-se também ao setor público, com adaptações. Incluí-la como correta é o erro central desta alternativa.'
          },
          conceitoCobrado: 'Conceito de Administração, de organização e abrangência do PODC',
          pegadinha: 'A afirmação I explora a crença, comum em iniciantes, de que "Administração é coisa de empresa privada". No setor público, o que muda é o objetivo (interesse público) e as adaptações (LIMPE), não a aplicação dos conceitos.',
          comoApareceEmConcurso: 'Bancas costumam colocar afirmações que misturam verdadeiro e falso, exigindo do candidato distinguir entre aplicação genérica (todos os tipos de organização) e adaptações específicas (setor público).',
          exemploInedito: {
            contexto: 'Um hospital público e uma rede de farmácias privada contratam gestores com o mesmo perfil: precisam planejar metas, organizar equipes, liderar pessoas e controlar resultados.',
            aplicacao: 'Ambos aplicam o PODC e os conceitos de eficiência, eficácia e efetividade — o que muda é o objetivo final (interesse público x lucro). A Administração não é exclusiva do privado: ela é adaptada, não excluída.',
            desafio: 'Se um hospital público reduz em 20% o tempo de espera sem ampliar o número de atendimentos, foi eficiente? Eficaz? Efetivo? Justifique cada dimensão.'
          }
        },
        tags: ['conceito', 'organização', 'PODC', 'abrangência']
      },

      /* ---------- Item 4 — C/E — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-01-04',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 2,
        subtopico: 'Habilidades do administrador (Katz)',
        pergunta: 'Segundo a teoria de Katz, as habilidades humanas (relacionamento interpessoal) são exigidas exclusivamente do nível tático, não sendo relevantes no nível estratégico nem no operacional.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. As habilidades humanas são exigidas em TODOS os níveis, com destaque relativo no tático. O que varia é a predominância, não a exigência.',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. As habilidades humanas são exigidas em TODOS os níveis organizacionais — com destaque relativo no tático, mas igualmente necessárias no estratégico (liderança de alta direção) e no operacional (supervisão de equipes). O que varia é a predominância relativa, não a exigência.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela restringe as habilidades humanas ao nível tático, contrariando o modelo de Katz. No estratégico, o dirigente precisa negociar com stakeholders e inspirar a organização; no operacional, o supervisor precisa liderar equipes. Restringir a um único nível é erro conceitual clássico.'
          },
          conceitoCobrado: 'Habilidades de Katz (técnicas, humanas, conceituais) x níveis organizacionais',
          pegadinha: 'A palavra "exclusivamente" é a armadilha. Modelos clássicos raramente têm exigências exclusivas — o que existe é predominância relativa. Absolutos ("só", "apenas", "exclusivamente") em C/E são, em geral, sinal de erro.',
          comoApareceEmConcurso: 'Bancas usam a inversão entre nível e habilidade predominante, ou absolutos para transformar uma afirmação correta em incorreta. Sempre desconfiar de absolutos em modelos teóricos.',
          exemploInedito: {
            contexto: 'Uma servidora é promovida de analista operacional para coordenadora de equipe e, dois anos depois, para diretora de área. Em cada nível, continua precisando lidar com pessoas: mediar conflitos (operacional), alinhar equipes (tático) e construir coalizões (estratégico).',
            aplicacao: 'Em todos os níveis, a habilidade humana permanece essencial. O que muda é o escopo: mediação de conflitos individuais → alinhamento de equipes → negociação política e articulação institucional.',
            desafio: 'Se as habilidades humanas são exigidas em todos os níveis, por que o modelo de Katz destaca o nível tático como aquele em que elas "predominam"?'
          }
        },
        tags: ['Katz', 'habilidades', 'níveis organizacionais']
      },

      /* ---------- Item 5 — Situação — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-01-05',
        tipo: 'situacao',
        formato: 'multipla_escolha',
        dificuldade: 2,
        subtopico: 'Aplicação de eficiência, eficácia e efetividade',
        pergunta: 'Uma prefeitura implanta um novo sistema de agendamento online que reduz de 15 para 9 minutos o tempo médio de marcação de consultas, com a mesma equipe administrativa. A meta formal do órgão era ampliar em 20% o número de consultas realizadas em 1 ano. Como a equipe médica não foi ampliada, o número de consultas permaneceu igual. Ao final de 1 ano, também não se observou melhora nos indicadores de saúde. Sobre o desempenho da prefeitura, é CORRETO afirmar que houve:',
        alternativas: [
          { id: 'A', texto: 'eficiência, eficácia e efetividade, pois o sistema modernizou o processo e melhorou o atendimento ao cidadão.' },
          { id: 'B', texto: 'eficiência apenas, pois houve redução do tempo de marcação, mas não houve ampliação de consultas nem impacto social.' },
          { id: 'C', texto: 'eficácia apenas, pois o sistema modernizou o processo administrativo mesmo sem ampliar as consultas realizadas.' },
          { id: 'D', texto: 'efetividade apenas, pois a modernização do processo gerou melhoria indireta nos indicadores de saúde pública.' },
          { id: 'E', texto: 'eficácia e efetividade, mas não eficiência, pois o sistema não foi amplamente adotado pelos usuários.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B está correta. Houve eficiência (reduziu tempo de marcação com a mesma equipe), mas não houve eficácia (meta de ampliar consultas não foi atingida) nem efetividade (indicadores de saúde não mudaram).',
        explicacaoDetalhada: {
          correta: 'A alternativa B está correta. Houve EFICIÊNCIA (reduziu o tempo de marcação com a mesma equipe — uso mais racional do recurso). NÃO houve EFICÁCIA (a meta formal era ampliar consultas em 20%, e isso não ocorreu). NÃO houve EFETIVIDADE (não houve impacto social — os indicadores de saúde permaneceram iguais).',
          incorretas: {
            A: 'A alternativa confunde modernização (eficiência) com atingimento de metas (eficácia) e impacto social (efetividade). Reduzir tempo de marcação não é "melhorar o atendimento" em sentido social — é apenas ganho de processo. Eficácia exigiria bater a meta; efetividade exigiria mudar indicadores de saúde. Nenhuma das duas ocorreu.',
            C: 'A alternativa troca eficiência por eficácia. O ganho foi de PROCESSO (tempo de marcação), o que caracteriza eficiência. Eficácia mede o atingimento do OBJETIVO FORMAL (ampliar consultas em 20%) — e isso não foi atingido. Modernizar não é sinônimo de eficácia.',
            D: 'A alternativa confunde eficiência com efetividade. Efetividade exige impacto social REAL e MENSURÁVEL — no caso, mudança nos indicadores de saúde. O enunciado afirma explicitamente que não houve melhora. Ganho de processo não gera, por si só, efetividade.',
            E: 'A alternativa inverte os conceitos: afirma não haver eficiência quando foi justamente o que ocorreu (redução de tempo com mesma equipe); e afirma haver eficácia quando a meta não foi atingida. Também inventa premissa ("não foi amplamente adotado pelos usuários") que o enunciado não menciona.'
          },
          conceitoCobrado: 'Distinção aplicada entre eficiência, eficácia e efetividade em cenário do setor público',
          pegadinha: 'A banca coloca dados numéricos (15→9 min, meta de 20%, equipe médica não ampliada, indicadores sem melhora) para induzir o candidato a concluir "melhorou, então é efetivo". É preciso separar rigorosamente: eficiência (processo) x eficácia (meta) x efetividade (impacto social).',
          comoApareceEmConcurso: 'Cenários aplicados com dados numéricos testam a distinção entre os três conceitos. O padrão é: ganho de processo (eficiência), meta parcialmente atingida (eficácia parcial), impacto social ausente (efetividade não atingida). Leitura apressada leva a A ou D.',
          exemploInedito: {
            contexto: 'Um município implanta aplicativo para solicitar poda de árvores. O tempo de registro cai de 10 para 2 minutos, com a mesma equipe. A meta era ampliar em 30% as podas realizadas por mês; como a equipe de campo não foi ampliada, o número permaneceu igual. Ao final de 1 ano, o número de reclamações de árvores caídas não diminuiu.',
            aplicacao: 'Mesmo raciocínio: eficiência (tempo de registro caiu); eficácia NÃO atingida (meta de ampliar podas não cumprida); efetividade NÃO atingida (reclamações permaneceram). O ganho de processo não se converteu em resultado.',
            desafio: 'O que a prefeitura deveria fazer para CONVERTER o ganho de eficiência em eficácia e, depois, em efetividade? Pense em duas ações concretas.'
          }
        },
        tags: ['eficiência', 'eficácia', 'efetividade', 'situação aplicada']
      },

      /* ---------- Item 6 — Formato 3 (Associação) — Dificuldade 3 ---------- */
      {
        id: 'D-ADM-01-06',
        tipo: 'multipla_escolha',
        formato: 'associacao',
        dificuldade: 3,
        subtopico: 'Habilidades de Katz x níveis organizacionais',
        pergunta: 'Segundo o modelo de Katz, as habilidades do administrador (técnicas, humanas e conceituais) relacionam-se de forma diferente com os níveis organizacionais (estratégico, tático e operacional). Assinale a alternativa que associa corretamente cada NÍVEL à habilidade PREDOMINANTE e à sua justificativa:\n\nColuna I — Nível\n1. Estratégico\n2. Tático\n3. Operacional\n\nColuna II — Habilidade predominante e justificativa\n( ) Habilidade técnica — execução de tarefas e domínio de procedimentos específicos.\n( ) Habilidade conceitual — visão sistêmica, leitura do ambiente e definição de rumos.\n( ) Habilidade humana — coordenação de equipes e mediação de relações interpessoais.',
        alternativas: [
          { id: 'A', texto: '1 – segunda; 2 – terceira; 3 – primeira.' },
          { id: 'B', texto: '1 – primeira; 2 – segunda; 3 – terceira.' },
          { id: 'C', texto: '1 – terceira; 2 – primeira; 3 – segunda.' },
          { id: 'D', texto: '1 – segunda; 2 – primeira; 3 – terceira.' },
          { id: 'E', texto: '1 – primeira; 2 – terceira; 3 – segunda.' }
        ],
        gabarito: 'A',
        explicacao: 'A alternativa A está correta. Estratégico (1) → conceitual (segunda); Tático (2) → humana (terceira); Operacional (3) → técnica (primeira).',
        explicacaoDetalhada: {
          correta: 'A alternativa A está correta. Nível ESTRATÉGICO (1) → habilidade CONCEITUAL (segunda da Coluna II) — visão sistêmica e definição de rumos. Nível TÁTICO (2) → habilidade HUMANA (terceira da Coluna II) — coordenação de equipes e mediação. Nível OPERACIONAL (3) → habilidade TÉCNICA (primeira da Coluna II) — execução e domínio de procedimentos.',
          incorretas: {
            B: 'A alternativa inverte as correspondências: coloca a técnica no estratégico, a conceitual no tático e a humana no operacional. É a inversão completa do modelo. O estratégico não executa tarefas técnicas — define rumos; o operacional não define rumos — executa.',
            C: 'A alternativa coloca a humana no estratégico, a técnica no tático e a conceitual no operacional — três erros simultâneos. Nem a humana é predominante no estratégico, nem a técnica no tático, nem a conceitual no operacional.',
            D: 'A alternativa acerta apenas a primeira correspondência (1-segunda) e erra as duas seguintes: coloca a técnica no tático (correto seria humana) e a humana no operacional (correto seria técnica). Erro parcial é a marca do distrator construído para confundir quem sabe "mais ou menos".',
            E: 'A alternativa coloca a técnica no estratégico, a humana no tático e a conceitual no operacional. Só a do meio (2-terceira) está correta; as outras duas estão invertidas.'
          },
          conceitoCobrado: 'Modelo de Katz aplicado — correspondência entre habilidade predominante e nível organizacional',
          pegadinha: 'A associação de colunas exige que o candidato saiba não apenas as três habilidades e os três níveis isoladamente, mas a CORRESPONDÊNCIA predominante entre eles. O erro típico é inverter técnica e conceitual ou alocar a humana em um único nível.',
          comoApareceEmConcurso: 'Bancas usam associação de colunas com os três pares (nível x habilidade) para testar a precisão da correspondência. É comum embaralhar as colunas de modo que apenas uma combinação esteja integralmente correta.',
          exemploInedito: {
            contexto: 'Um analista operacional domina o sistema de protocolo (técnica). Ao ser promovido a coordenador, passa a mediar conflitos e distribuir tarefas (humana). Ao ser promovido a diretor, precisa ler o cenário político-institucional e definir o plano estratégico (conceitual).',
            aplicacao: 'A trajetória ilustra a mudança de predominância: quanto mais alto o nível, maior a exigência conceitual; quanto mais baixo, maior a exigência técnica. A humana perpassa todos os níveis, com destaque no tático.',
            desafio: 'Se esse diretor voltasse ao nível operacional por um período, qual habilidade passaria a predominar novamente? Isso significa que ele "perdeu" as conceituais?'
          }
        },
        tags: ['Katz', 'habilidades', 'níveis organizacionais', 'associação']
      },

      /* ---------- Item 7 — Autoavaliação ---------- */
      {
        id: 'D-ADM-01-07',
        tipo: 'autoavaliacao',
        subtopico: 'Distinção dos conceitos de desempenho e das habilidades do administrador',
        pergunta: 'Sem consultar, você consegue diferenciar eficiência, eficácia, efetividade e produtividade — e explicar um exemplo de cada? Consegue, também, relacionar as habilidades de Katz (técnicas, humanas, conceituais) aos níveis organizacionais (estratégico, tático, operacional)?',
        resposta: 'EFICIÊNCIA: uso racional dos recursos (meios). Ex.: reduzir o consumo de papel em 30% mantendo o mesmo serviço. EFICÁCIA: atingimento do objetivo formal (fins). Ex.: cumprir a meta de atender 100% dos pedidos no prazo. EFETIVIDADE: impacto social real, mensurável e mantido no tempo. Ex.: queda efetiva da mortalidade infantil após um programa de saúde. PRODUTIVIDADE: relação quantitativa entre outputs e inputs. Ex.: 30 processos analisados por servidor/hora. A chave é: eficiência olha o meio; eficácia, o fim; efetividade, o impacto; produtividade, a relação produção/recurso. KATZ: técnicas predominam no operacional; conceituais no estratégico; humanas em todos os níveis, com destaque no tático. O que varia é a predominância relativa, não a presença/ausência.'
      }

    ]
  },

  /* ============================================================
     ADM-02 — Processo Administrativo
  ============================================================ */
  'ADM-02': {
    id: 'D-ADM-02',
    moduloId: 'ADM-02',
    itens: [

      /* ---------- Item 1 — Formato 6 (EXCETO) — Dificuldade 1 ---------- */
      {
        id: 'D-ADM-02-01',
        tipo: 'multipla_escolha',
        formato: 'excecao',
        dificuldade: 1,
        subtopico: 'Funções administrativas — atribuições específicas',
        pergunta: 'Sobre as quatro funções administrativas do ciclo PODC, assinale a alternativa INCORRETA:',
        alternativas: [
          { id: 'A', texto: 'O planejamento define objetivos, metas e padrões que orientarão as demais funções administrativas.' },
          { id: 'B', texto: 'A organização distribui tarefas, recursos e autoridade entre os membros da equipe e setores da instituição.' },
          { id: 'C', texto: 'A direção orienta e motiva as pessoas para executar o que foi planejado e organizado.' },
          { id: 'D', texto: 'O controle compara resultados com padrões e encerra o ciclo, sem relação com o planejamento inicial.' },
          { id: 'E', texto: 'O PODC é ferramenta da teoria geral da Administração, aplicável a organizações públicas e privadas.' }
        ],
        gabarito: 'D',
        explicacao: 'A alternativa D é a INCORRETA. O controle NÃO encerra o ciclo nem se isola do planejamento: é o "espelho" do planejamento — compara desempenho real com padrões e realimenta novo planejamento. O PODC é CÍCLICO.',
        explicacaoDetalhada: {
          correta: 'A alternativa D está INCORRETA e, por isso, é a resposta. O controle NÃO encerra o ciclo nem se isola do planejamento: é o "espelho" do planejamento — compara desempenho real com padrões e gera informação que realimenta novo planejamento.',
          incorretas: {
            A: 'A alternativa está correta e não deve ser marcada. O planejamento define objetivos, metas e padrões. Seria INCORRETA se dissesse que o planejamento verifica resultados ao final do período — isso é função do controle.',
            B: 'A alternativa está correta e não deve ser marcada. A organização estrutura recursos, distribui tarefas e define autoridade. Seria INCORRETA se atribuísse à organização a liderança da equipe — isso é da direção.',
            C: 'A alternativa está correta e não deve ser marcada. A direção lidera, motiva e orienta. Seria INCORRETA se dissesse que a direção define metas ou distribui tarefas.',
            E: 'A alternativa está correta e não deve ser marcada. O PODC aplica-se a qualquer organização. Seria INCORRETA se afirmasse que é exclusivo do setor privado.'
          },
          conceitoCobrado: 'Atribuições específicas de cada função administrativa e a natureza cíclica do PODC',
          pegadinha: 'A palavra "encerra" em D é a armadilha: o controle não encerra nada — ele realimenta. Além disso, "sem relação com o planejamento" contradiz a própria natureza de "espelho" entre as duas funções.',
          comoApareceEmConcurso: 'O formato "EXCETO/INCORRETA" com atribuições trocadas é clássico. A afirmação de que o controle "encerra o ciclo" é uma das armadilhas mais recorrentes.',
          exemploInedito: {
            contexto: 'Um gestor diz em reunião anual: "Já medimos os resultados de 2024, encerramos o ciclo e agora começamos tudo do zero em 2025, sem olhar para trás".',
            aplicacao: 'O gestor desconhece a realimentação. O correto é usar os resultados de 2024 (controle) para informar o planejamento de 2025 — corrigir o que não funcionou, reforçar o que funcionou, ajustar metas. Sem isso, o PODC não é ciclo: é sequência truncada.',
            desafio: 'Quais riscos um órgão público corre ao tratar o PODC como sequência linear que "termina" no controle? Relacione com a prestação de contas e a melhoria contínua dos serviços.'
          }
        },
        tags: ['PODC', 'funções administrativas']
      },

      /* ---------- Item 2 — C/E — Dificuldade 1 ---------- */
      {
        id: 'D-ADM-02-02',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 1,
        subtopico: 'PODC — natureza cíclica',
        pergunta: 'O PODC é uma sequência linear e estanque: cada função termina completamente antes de a próxima começar, e o ciclo termina no controle.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. O PODC é CÍCLICO e interdependente: as funções se interpenetram, ocorrem simultaneamente em diferentes níveis, e o controle realimenta novo planejamento.',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. O PODC é CÍCLICO e interdependente: as funções se interpenetram, podem ocorrer simultaneamente em diferentes níveis, e o controle realimenta novo planejamento. Não há "fim" no controle.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela descreve uma visão LINEAR do PODC, superada. As funções não são estanques: um gestor pode planejar enquanto organiza, e o controle de hoje gera informação para o planejamento de amanhã. Além disso, o controle não "termina" o ciclo — ele o reinicia.'
          },
          conceitoCobrado: 'Natureza cíclica e interdependente do PODC',
          pegadinha: 'As palavras "linear" e "estanque" são os marcadores do erro. Modelos administrativos modernos enfatizam interdependência, não sequencialidade estrita.',
          comoApareceEmConcurso: 'Afirmações que descrevem o PODC como "linear" ou "estanque" são quase sempre FALSAS em C/E. A banca testa a visão sistêmica versus a visão mecânica.',
          exemploInedito: {
            contexto: 'Em uma Secretaria, enquanto o Secretário define o planejamento do próximo ano, os coordenadores seguem executando o plano vigente, e a Controladoria mede os resultados do trimestre — tudo ao mesmo tempo, em níveis diferentes.',
            aplicacao: 'O exemplo mostra que as funções ocorrem em PARALELO em diferentes níveis. Não há "espera" de uma função terminar para a outra começar.',
            desafio: 'Se as funções ocorrem em paralelo, como o gestor deve priorizar sua atenção? Qual o risco de focar apenas no planejamento e negligenciar o controle?'
          }
        },
        tags: ['PODC', 'ciclo']
      },

      /* ---------- Item 3 — Formato 1 (V/F sequência) — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-02-03',
        tipo: 'multipla_escolha',
        formato: 'vf_sequencia',
        dificuldade: 2,
        subtopico: 'Relação entre as quatro funções — planejamento e controle como "espelhos"',
        pergunta: 'Sobre a relação entre as funções administrativas do PODC, analise as afirmações a seguir e assinale a sequência correta:\n\nI. O planejamento define os padrões de desempenho que o controle utilizará como referência para comparar os resultados.\nII. A direção antecede o planejamento, pois é a função que estabelece as pessoas que executarão o plano.\nIII. O controle, ao identificar desvios, fornece informações que podem gerar novo planejamento — o que caracteriza o caráter cíclico do PODC.\nIV. A organização é a função que estrutura recursos e distribui tarefas; sem ela, o planejamento não se converte em ação coordenada.',
        alternativas: [
          { id: 'A', texto: 'V – V – V – F.' },
          { id: 'B', texto: 'V – F – V – V.' },
          { id: 'C', texto: 'F – V – V – V.' },
          { id: 'D', texto: 'V – F – F – V.' },
          { id: 'E', texto: 'F – F – V – V.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B está correta: I (V), II (F), III (V), IV (V). A II é falsa: a direção NÃO antecede o planejamento — atua na execução, depois que planejamento e organização definiram rumos e estrutura.',
        explicacaoDetalhada: {
          correta: 'A alternativa B está correta: I (V), II (F), III (V), IV (V). A afirmação I é verdadeira (planejamento define os padrões usados pelo controle). A II é falsa (a direção NÃO antecede o planejamento — atua depois, na execução). A III é verdadeira (controle realimenta planejamento). A IV é verdadeira (organização estrutura recursos e distribui tarefas).',
          incorretas: {
            A: 'A alternativa erra ao marcar a II como verdadeira. A direção NÃO antecede o planejamento — ela atua na fase de execução, depois que planejamento e organização definiram rumos e estrutura. Inverter a ordem contraria a própria lógica do PODC.',
            C: 'A alternativa erra ao marcar a I como falsa. O planejamento define, sim, os padrões que o controle usará como referência — essa é a essência da relação "espelho". Sem padrões definidos no planejamento, o controle não tem referência para comparar.',
            D: 'A alternativa erra em dois pontos: marca a III como falsa (ela é verdadeira — o controle realimenta o planejamento) e mantém a IV verdadeira (correto, mas insuficiente). Erro de leitura sobre a natureza cíclica.',
            E: 'A alternativa erra ao marcar a I como falsa (ela é verdadeira) e a II como falsa (correto). Erra ao considerar o par uniformemente, sem examinar cada afirmação individualmente. É a "alternativa do chute" para quem não leu com atenção.'
          },
          conceitoCobrado: 'Interdependência entre as funções do PODC, com destaque para a relação planejamento-controle (espelho)',
          pegadinha: 'A afirmação II explora a confusão entre "direção" e "planejamento" — a direção NÃO define quem executa (isso é organização) nem o que fazer (isso é planejamento). Ela conduz as pessoas na execução.',
          comoApareceEmConcurso: 'O formato V/F sequência é clássico quando a banca quer testar 4 conceitos relacionados em uma única questão. Cada afirmação costuma ter um erro conceitual específico, e a combinação correta exige leitura rigorosa.',
          exemploInedito: {
            contexto: 'Em uma Secretaria de Educação: (1) Secretário define meta de ampliar aprovação em 15% (planejamento); (2) diretores distribuem turmas e professores (organização); (3) coordenadores fazem reuniões pedagógicas (direção); (4) equipe técnica mede resultados bimestralmente (controle); (5) com base nos ajustes, Secretário revisa a meta para o ano seguinte (novo planejamento).',
            aplicacao: 'A DIREÇÃO (etapa 3) acontece DEPOIS do planejamento (1) e da organização (2) — não antes. E o CONTROLE (4) realimenta o PLANEJAMENTO (5). As afirmações I, III e IV estão contempladas; a II contradiz o exemplo.',
            desafio: 'Em uma organização pública, é comum a direção "atropelar" o planejamento por pressão política. Que consequências isso traz para a coerência do PODC e para a prestação de contas?'
          }
        },
        tags: ['PODC', 'planejamento', 'controle', 'vf sequência']
      },

      /* ---------- Item 4 — C/E — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-02-04',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 2,
        subtopico: 'Finalidade do controle',
        pergunta: 'A função de controle no PODC limita-se a punir servidores que cometem irregularidades, não tendo relação com o desempenho organizacional nem com a melhoria dos serviços.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. O controle é função DIAGNÓSTICA e CORRETIVA: mede o desempenho, compara com padrões e adota ações corretivas. A punição é apenas uma das ações possíveis — e não a principal.',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. O controle é função DIAGNÓSTICA e CORRETIVA: mede o desempenho, compara com os padrões definidos no planejamento e adota ações corretivas para melhorar resultados. A punição é apenas uma das ações corretivas possíveis — e não a principal.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela reduz o controle à punição, empobrecendo sua função. O controle existe para DIAGNOSTICAR desvios e APRIMORAR o desempenho. Confundi-lo com mera punição é erro conceitual clássico. A punição é exceção, não regra. E o controle tem, sim, relação direta com o desempenho organizacional e a melhoria dos serviços.'
          },
          conceitoCobrado: 'Finalidade do controle no ciclo PODC',
          pegadinha: 'As palavras "limita-se" e "não tendo relação" são absolutos que denunciam o erro. O controle tem múltiplas finalidades (diagnóstico, correção, prevenção, aprendizado), e a punição é apenas uma delas.',
          comoApareceEmConcurso: 'Bancas usam essa distorção para separar quem entende o controle como função gerencial de quem o associa apenas à punição — confusão frequente em candidatos que vêm do senso comum.',
          exemploInedito: {
            contexto: 'Um órgão mede mensalmente o tempo de tramitação de processos. Quando o tempo sobe, a equipe investiga o gargalo e redistribui servidores. Quando cai, padroniza o que funcionou. Nenhuma punição é aplicada — o foco é melhorar o fluxo.',
            aplicacao: 'O exemplo mostra controle como DIAGNÓSTICO e MELHORIA, não como punição. O controle existe para aprender e aprimorar. A punição, quando cabível, é apenas uma das ações possíveis — e costuma ser tratada em outra instância (correição, PAD).',
            desafio: 'Que diferença prática há entre um controle "punitivo" e um controle "diagnóstico" na gestão de uma equipe? Que tipo de controle tende a gerar mais engajamento?'
          }
        },
        tags: ['controle', 'finalidade']
      },

      /* ---------- Item 5 — Situação — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-02-05',
        tipo: 'situacao',
        formato: 'multipla_escolha',
        dificuldade: 2,
        subtopico: 'Identificação de função administrativa em cenário',
        pergunta: 'Uma Secretaria de Saúde define em janeiro a meta de ampliar a cobertura vacinal em 20%. Em fevereiro, redistribui equipes entre as UBS. Em março, o Secretário faz reuniões de motivação com os coordenadores. Em dezembro, analisa os resultados e identifica que duas regionais não atingiram a meta, decidindo reforçar a capacitação nelas para o próximo ano. As funções administrativas exercidas em janeiro, fevereiro, março e dezembro são, respectivamente:',
        alternativas: [
          { id: 'A', texto: 'controle, organização, direção e planejamento.' },
          { id: 'B', texto: 'planejamento, organização, direção e controle.' },
          { id: 'C', texto: 'organização, planejamento, controle e direção.' },
          { id: 'D', texto: 'direção, controle, planejamento e organização.' },
          { id: 'E', texto: 'planejamento, direção, organização e controle.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B está correta. Janeiro = planejamento (meta); fevereiro = organização (redistribuição de equipes); março = direção (motivação); dezembro = controle (análise e ação corretiva).',
        explicacaoDetalhada: {
          correta: 'A alternativa B está correta. Janeiro = PLANEJAMENTO (definição de meta); fevereiro = ORGANIZAÇÃO (redistribuição de equipes); março = DIREÇÃO (reuniões de motivação); dezembro = CONTROLE (análise de resultados e ação corretiva).',
          incorretas: {
            A: 'A alternativa inverte a ordem: coloca controle em janeiro (janeiro é planejamento), organização em fevereiro (correto), direção em março (correto) e planejamento em dezembro (dezembro é controle). Erro clássico de quem confunde "definir meta" com "verificar resultado".',
            C: 'A alternativa erra ao colocar organização em janeiro e planejamento em fevereiro. Também inverte controle e direção: março é direção, não controle. Erro sistemático de inversão entre as quatro funções.',
            D: 'A alternativa embaralha todas as funções: direção em janeiro (janeiro é planejamento), controle em fevereiro (fevereiro é organização), planejamento em março (março é direção) e organização em dezembro (dezembro é controle). É o distrator para capturar quem "chutou" sem ler o cenário.',
            E: 'A alternativa acerta janeiro (planejamento) mas erra fevereiro (diz direção, quando é organização), março (diz organização, quando é direção) e dezembro (acerta o controle). É a "alternativa quase correta" — erra apenas os dois do meio, exigindo atenção redobrada.'
          },
          conceitoCobrado: 'Identificação das quatro funções administrativas em cenário aplicado',
          pegadinha: 'A banca descreve ações concretas (definir meta, redistribuir equipes, fazer reuniões, analisar resultados) que precisam ser traduzidas nas funções abstratas. A confusão mais comum é entre organização (redistribuir recursos) e direção (motivar pessoas), e entre planejamento (definir meta) e controle (verificar resultado).',
          comoApareceEmConcurso: 'Cenários com verbos de ação são o padrão para cobrar PODC de forma aplicada. O candidato precisa traduzir "redistribuiu" → organização, "motivou" → direção, "analisou" → controle, "definiu" → planejamento.',
          exemploInedito: {
            contexto: 'Um órgão define meta de reduzir faltas em 10% (janeiro); realoca servidores (fevereiro); faz reuniões de engajamento (março); e, ao final do ano, compara o resultado com a meta e propõe treinamento (dezembro).',
            aplicacao: 'Mesmo padrão: planejamento, organização, direção e controle. O que muda são os verbos, mas a essência é idêntica. A "ação corretiva" no final do ciclo (treinamento) é parte do controle — não é planejamento novo ainda, é resposta ao desvio identificado.',
            desafio: 'Se o gestor, em dezembro, ao invés de comparar resultados, simplesmente definisse uma nova meta sem olhar o que aconteceu, qual função ele estaria negligenciando? Por quê?'
          }
        },
        tags: ['PODC', 'funções administrativas', 'situação aplicada']
      },

      /* ---------- Item 6 — Formato 2 (I, II, III) — Dificuldade 3 ---------- */
      {
        id: 'D-ADM-02-06',
        tipo: 'multipla_escolha',
        formato: 'afirmacoes_romanas',
        dificuldade: 3,
        subtopico: 'PODC x Processo Administrativo da Lei 9.784/1999',
        pergunta: 'Sobre a relação entre o ciclo PODC (Teoria Geral da Administração) e o processo administrativo da Lei 9.784/1999, analise as afirmações a seguir:\n\nI. O PODC e o processo administrativo da Lei 9.784/1999 são sinônimos, pois ambos tratam das funções de planejar, organizar, dirigir e controlar no serviço público.\nII. O PODC é o ciclo de funções gerenciais (planejar, organizar, dirigir e controlar), aplicável a qualquer organização, com adaptações no setor público.\nIII. O processo administrativo da Lei 9.784/1999 é o rito jurídico de decisão da Administração Pública, com fases, prazos, contraditório e ampla defesa, sendo distinto do PODC.\n\nEstão corretas:',
        alternativas: [
          { id: 'A', texto: 'Apenas I.' },
          { id: 'B', texto: 'Apenas II.' },
          { id: 'C', texto: 'Apenas I e III.' },
          { id: 'D', texto: 'Apenas II e III.' },
          { id: 'E', texto: 'I, II e III.' }
        ],
        gabarito: 'D',
        explicacao: 'A alternativa D está correta. II e III são verdadeiras; I é falsa (PODC e processo administrativo da Lei 9.784/1999 são conceitos de áreas distintas, não sinônimos).',
        explicacaoDetalhada: {
          correta: 'A alternativa D está correta. A afirmação II está certa: o PODC é ciclo de funções gerenciais aplicável a qualquer organização. A afirmação III também está certa: o processo administrativo da Lei 9.784/1999 é rito jurídico de decisão, com fases, prazos, contraditório e ampla defesa — distinto do PODC. A afirmação I está INCORRETA (não são sinônimos).',
          incorretas: {
            A: 'A afirmação I está incorreta: PODC e processo administrativo da Lei 9.784/1999 NÃO são sinônimos. São conceitos de áreas distintas (Teoria Geral x Direito Administrativo), com naturezas diferentes (funções gerenciais x rito jurídico). A afirmação II está correta. Logo, "apenas I" não procede.',
            B: 'A afirmação II está correta, mas a III também. Descartar a III é negar a definição técnica do processo administrativo como rito jurídico de decisão. A alternativa peca por excluir uma afirmação verdadeira.',
            C: 'A afirmação I é incorreta e a III é correta — portanto, incluir I como correta (junto com III) é erro. A confusão entre os dois conceitos é justamente o que a I explora.',
            E: 'Não é possível aceitar as três. A afirmação I é o erro central: confundir PODC com processo administrativo da Lei 9.784/1999 é a pegadinha mais recorrente nesse tema. II e III estão corretas, mas I não.'
          },
          conceitoCobrado: 'Distinção entre PODC (Teoria Geral) e processo administrativo da Lei 9.784/1999 (Direito Administrativo)',
          pegadinha: 'A palavra "processo administrativo" tem dois sentidos: (i) o ciclo PODC (sentido gerencial); (ii) o rito da Lei 9.784/1999 (sentido jurídico). A banca explora essa ambiguidade, exigindo que o candidato diferencie os contextos. É a pegadinha clássica do módulo.',
          comoApareceEmConcurso: 'Bancas de concursos que combinam Administração e Direito Administrativo usam essa distinção com frequência. A afirmação I ("são sinônimos") é quase sempre FALSA — os conceitos têm naturezas diferentes.',
          exemploInedito: {
            contexto: 'Em um mesmo órgão, um gestor define metas para o próximo ano (PODC — planejamento) e, paralelamente, um servidor instaura processo administrativo para apurar irregularidade (Lei 9.784/1999). São atividades distintas, em áreas distintas, com naturezas distintas.',
            aplicacao: 'O gestor aplica o PODC (funções gerenciais); o servidor aplica o rito jurídico (fases, prazos, contraditório, ampla defesa). Um não substitui o outro: coexistem. Confundi-los é erro conceitual e pode gerar problemas práticos.',
            desafio: 'Se um gestor trata o processo administrativo disciplinar como se fosse uma "etapa do PODC", que garantias constitucionais ele pode violar? Pense em contraditório, ampla defesa e devido processo legal.'
          }
        },
        tags: ['PODC', 'processo administrativo', 'Lei 9.784/1999', 'afirmações romanas']
      },

      /* ---------- Item 7 — Autoavaliação ---------- */
      {
        id: 'D-ADM-02-07',
        tipo: 'autoavaliacao',
        subtopico: 'Ciclo PODC, interdependência das funções e distinção em relação ao processo administrativo da Lei 9.784/1999',
        pergunta: 'Sem consultar, você consegue explicar por que o PODC é um ciclo interdependente (e não linear)? Consegue diferenciar cada uma das quatro funções em um cenário aplicado? E consegue distinguir o PODC do processo administrativo da Lei 9.784/1999?',
        resposta: 'CICLO INTERDEPENDENTE: o planejamento define padrões; a organização estrutura recursos; a direção lidera pessoas; o controle compara desempenho com padrões e gera informação que realimenta novo planejamento. As funções ocorrem em paralelo em diferentes níveis e se alimentam mutuamente — não há "fim" no controle. IDENTIFICAÇÃO EM CENÁRIO: verbos como "definir metas" (planejamento), "redistribuir recursos" (organização), "motivar/liderar" (direção) e "comparar resultados" (controle) ajudam a traduzir ações concretas em funções abstratas. DISTINÇÃO PODC x LEI 9.784: o PODC é ciclo de funções gerenciais da Teoria Geral; o processo administrativo da Lei 9.784/1999 é o rito jurídico de decisão da Administração, com fases, prazos, contraditório e ampla defesa. São conceitos de áreas distintas, não sinônimos — apesar do nome parecido.'
      }

    ]
  }
  ,

  /* ============================================================
     ADM-03 — Planejamento
  ============================================================ */
  'ADM-03': {
    id: 'D-ADM-03',
    moduloId: 'ADM-03',
    itens: [

      /* ---------- Item 1 — Formato 6 (EXCETO) — Dificuldade 1 ---------- */
      {
        id: 'D-ADM-03-01',
        tipo: 'multipla_escolha',
        formato: 'excecao',
        dificuldade: 1,
        subtopico: 'Elementos do planejamento (missão, visão, valores, objetivos, metas, planos)',
        pergunta: 'Sobre os elementos do planejamento, assinale a alternativa INCORRETA:',
        alternativas: [
          { id: 'A', texto: 'Missão é a razão de existir da organização, expressando o seu papel no presente.' },
          { id: 'B', texto: 'Visão é o estado futuro desejado, indicando onde a organização quer chegar.' },
          { id: 'C', texto: 'Valores são os princípios éticos e as crenças que orientam a conduta organizacional.' },
          { id: 'D', texto: 'Objetivos são alvos quantificados com prazo definido, derivados das metas organizacionais.' },
          { id: 'E', texto: 'Planos são documentos que formalizam estratégias e cursos de ação escolhidos.' }
        ],
        gabarito: 'D',
        explicacao: 'A alternativa D é a INCORRETA. Objetivos são alvos amplos e qualitativos; METAS é que são quantificadas com prazo. A relação está invertida em D.',
        explicacaoDetalhada: {
          correta: 'A alternativa D está INCORRETA e, por isso, é a resposta. A relação está invertida: OBJETIVOS são alvos amplos e qualitativos (ex.: "melhorar o atendimento"); METAS são objetivos quantificados com prazo (ex.: "reduzir o tempo de espera em 30% até dezembro"). Dizer que objetivos derivam de metas inverte a lógica — são as metas que derivam dos objetivos.',
          incorretas: {
            A: 'A alternativa está correta e não deve ser marcada. Missão é a razão de existir no presente. Seria INCORRETA se dissesse que missão é o estado futuro desejado — isso é visão.',
            B: 'A alternativa está correta e não deve ser marcada. Visão é o estado futuro desejado. Seria INCORRETA se dissesse que visão é a razão de existir — isso é missão.',
            C: 'A alternativa está correta e não deve ser marcada. Valores são princípios éticos e crenças. Seria INCORRETA se dissesse que valores são metas de curto prazo — valores não são metas, são orientações.',
            E: 'A alternativa está correta e não deve ser marcada. Planos formalizam estratégias e cursos de ação. Seria INCORRETA se dissesse que planos independem dos objetivos — planos são o "como" para atingir objetivos e metas.'
          },
          conceitoCobrado: 'Elementos do planejamento — distinção entre missão, visão, valores, objetivos, metas e planos',
          pegadinha: 'A confusão mais comum é entre objetivo e meta (D inverte). Outra pegadinha frequente é entre missão e visão (A/B — se invertidos, ficam errados). Fixar: missão (presente) → visão (futuro) → valores (princípios) → objetivos (amplos/qualitativos) → metas (quantificadas/prazo) → planos (formalização).',
          comoApareceEmConcurso: 'Bancas costumam trocar pares em uma única alternativa e manter os outros corretos. A "inversão" de definições é o padrão: missão↔visão, objetivo↔meta. É a questão mais recorrente do módulo.',
          exemploInedito: {
            contexto: 'Uma autarquia previdenciária declara: "Nossa missão é garantir aposentadorias com eficiência; nossa visão é ser referência nacional em gestão previdenciária até 2030; nosso objetivo é melhorar o atendimento; nossa meta é reduzir de 40 para 20 dias o tempo de concessão até dezembro; nosso plano de ação prevê digitalização do processo".',
            aplicacao: 'Cada elemento cumpre uma função distinta: missão = razão de existir no presente; visão = futuro almejado; objetivo = alvo amplo e qualitativo; meta = objetivo quantificado e datado; plano = curso de ação formalizado. Se alguém dissesse que "a meta é melhorar o atendimento", inverteria objetivo e meta — exatamente o erro que a alternativa D reproduz.',
            desafio: 'Reescreva a frase acima identificando cada elemento (missão, visão, objetivo, meta, plano). Se a organização dissesse "nossa meta é ser referência nacional até 2030", estaria usando o termo corretamente? Justifique.'
          }
        },
        tags: ['planejamento', 'missão', 'visão', 'objetivo', 'meta']
      },

      /* ---------- Item 2 — C/E — Dificuldade 1 ---------- */
      {
        id: 'D-ADM-03-02',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 1,
        subtopico: 'Missão x visão',
        pergunta: 'Missão é onde a organização quer chegar no futuro; visão é a razão de sua existência no presente.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. A relação está invertida: missão é a razão de existir (presente); visão é o estado futuro desejado (futuro).',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. A relação está invertida: MISSÃO é a razão de existir da organização, expressa o papel atual (presente). VISÃO é o estado futuro desejado, onde se quer chegar (futuro). A afirmação troca os dois conceitos.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela troca missão por visão. Fixar a lógica: missão = "por que existimos hoje"; visão = "onde queremos chegar". A visão orienta o futuro; a missão justifica o presente. Inverter confunde o planejamento estratégico inteiro.'
          },
          conceitoCobrado: 'Distinção entre missão (presente) e visão (futuro)',
          pegadinha: 'As palavras "futuro" e "presente" na afirmação entregam o erro a quem sabe o conteúdo, mas induzem ao erro a quem decorou apenas "missão e visão são elementos do planejamento" sem fixar qual é qual. É a pegadinha nº 1 do módulo.',
          comoApareceEmConcurso: 'Bancas trocam missão/visão em C/E com frequência. Outra variação é trocar valores por missão, ou metas por visão. A dica é memorizar: "missão é o hoje; visão é o amanhã".',
          exemploInedito: {
            contexto: 'Um hospital público declara: "Nossa missão é salvar vidas com acolhimento; nossa visão é ser o hospital de referência do estado em 2030".',
            aplicacao: 'A missão responde "o que fazemos hoje" — salvar vidas com acolhimento. A visão responde "onde queremos chegar" — ser referência em 2030. Se o hospital dissesse "nossa missão é ser referência em 2030", estaria usando o termo errado — isso é visão.',
            desafio: 'Pense em uma organização pública que você conhece. Sem consultar, formule uma missão (presente) e uma visão (futuro) para ela. Verifique se trocou os conceitos.'
          }
        },
        tags: ['planejamento', 'missão', 'visão']
      },

      /* ---------- Item 3 — Formato 2 (I, II, III) — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-03-03',
        tipo: 'multipla_escolha',
        formato: 'afirmacoes_romanas',
        dificuldade: 2,
        subtopico: 'Análise SWOT e Balanced Scorecard (BSC)',
        pergunta: 'Sobre a análise SWOT e o Balanced Scorecard (BSC), analise as afirmações a seguir:\n\nI. Na análise SWOT, forças e fraquezas são fatores internos (controláveis), enquanto oportunidades e ameaças são fatores externos (não controláveis).\nII. O BSC traduz a estratégia em quatro perspectivas: financeira, clientes, processos internos e aprendizado/crescimento, com objetivos, indicadores, metas e iniciativas.\nIII. No BSC aplicado ao setor público, a perspectiva "clientes" é idêntica à do setor privado, pois em ambos o objetivo central é o lucro.\n\nEstão corretas:',
        alternativas: [
          { id: 'A', texto: 'Apenas I.' },
          { id: 'B', texto: 'Apenas II.' },
          { id: 'C', texto: 'Apenas I e II.' },
          { id: 'D', texto: 'Apenas II e III.' },
          { id: 'E', texto: 'I, II e III.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C está correta. I e II são verdadeiras; III é falsa (no setor público, "clientes" costuma ser adaptada para "sociedade" — o objetivo central não é o lucro).',
        explicacaoDetalhada: {
          correta: 'A alternativa C está correta. A afirmação I está certa: forças e fraquezas são fatores internos; oportunidades e ameaças são externos. A afirmação II também está certa: o BSC usa quatro perspectivas clássicas com objetivos, indicadores, metas e iniciativas. A afirmação III está INCORRETA: no setor público, a perspectiva "clientes" é adaptada para "sociedade", e o objetivo central não é o lucro.',
          incorretas: {
            A: 'A afirmação I está correta, mas a II também. O BSC tem, sim, as quatro perspectivas clássicas (financeira, clientes, processos internos, aprendizado/crescimento). Excluir a II é negar a estrutura do BSC.',
            B: 'A afirmação II está correta, mas a I também. SWOT distingue fatores internos (forças e fraquezas) de externos (oportunidades e ameaças) — é o ponto central da ferramenta. Excluir a I é desconsiderar esse aspecto fundamental.',
            D: 'A afirmação III é falsa — no setor público, "clientes" é adaptada para "sociedade"; o objetivo não é o lucro. Incluir a III como correta é o erro central desta alternativa. A II está correta, mas a III não.',
            E: 'Não é possível aceitar as três. A afirmação III é o erro: o setor público adapta o BSC em razão do interesse público, não do lucro. Incluir a III como correta é o que torna esta alternativa errada.'
          },
          conceitoCobrado: 'SWOT (interno x externo) e BSC (quatro perspectivas + adaptação ao setor público)',
          pegadinha: 'A afirmação III explora uma crença de que o BSC é "idêntico" em qualquer contexto. Na verdade, o setor público adapta a perspectiva "clientes" para "sociedade", e o objetivo central é o interesse público, não o lucro. É a pegadinha típica do módulo.',
          comoApareceEmConcurso: 'Bancas combinam SWOT e BSC em uma única questão de afirmações romanas para testar dois conteúdos de uma vez. A estratégia é colocar 2 afirmações verdadeiras e 1 falsa em pontos-chave — geralmente a falsa é a que aplica indevidamente um conceito do setor privado ao setor público.',
          exemploInedito: {
            contexto: 'Uma Secretaria de Saúde aplica o BSC com quatro perspectivas: na "sociedade", reduzir mortalidade infantil; na "clientes", elevar a satisfação dos usuários; nos "processos internos", reduzir tempo de espera; no "aprendizado", capacitar enfermeiros.',
            aplicacao: 'A Secretaria substituiu "financeira" pela perspectiva "sociedade" — típico do setor público. Se dissesse que a perspectiva "clientes" é igual à do privado (busca de lucro), erraria — aqui o "cliente" é o cidadão, e o objetivo é o interesse público. Isso é exatamente o que a afirmação III faz.',
            desafio: 'Se você aplicasse o BSC a uma escola pública, que indicador usaria em cada perspectiva? Pense em um indicador para "sociedade", um para "clientes/usuários", um para "processos internos" e um para "aprendizado".'
          }
        },
        tags: ['SWOT', 'BSC', 'afirmações romanas']
      },

      /* ---------- Item 4 — C/E — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-03-04',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 2,
        subtopico: 'Objetivo x meta',
        pergunta: 'Meta é um alvo mais amplo e qualitativo que objetivo; por isso, toda meta pressupõe um objetivo quantificado.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. A relação está invertida: objetivo é amplo e qualitativo; meta é o objetivo quantificado com prazo. Toda META pressupõe um OBJETIVO, não o contrário.',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. A relação está invertida. OBJETIVO é amplo e qualitativo (ex.: "melhorar o atendimento"). META é o objetivo quantificado com prazo (ex.: "reduzir o tempo de espera em 30% até dezembro"). Toda META pressupõe um OBJETIVO — não o contrário.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela descreve a relação invertida: diz que "meta é ampla e qualitativa" (mas meta é quantificada e datada) e que "toda meta pressupõe um objetivo quantificado" (o correto é que toda meta pressupõe um objetivo amplo, e não quantificado). A dupla inversão torna a afirmação falsa.'
          },
          conceitoCobrado: 'Relação entre objetivo (amplo/qualitativo) e meta (quantificada/prazo)',
          pegadinha: 'A afirmação tem DUAS inversões simultâneas: (1) troca as definições de objetivo e meta; (2) inverte a relação de pressuposição. Quem lê rápido pode concordar com "toda meta pressupõe um objetivo" — mas a palavra "quantificado" ao final torna a frase falsa, porque objetivo não é quantificado.',
          comoApareceEmConcurso: 'Bancas gostam de inverter pares em C/E. A dica é sempre verificar cada termo separadamente: "meta = quantificada, prazo"; "objetivo = amplo, qualitativo". Se a afirmação mistura, é falsa.',
          exemploInedito: {
            contexto: 'Um órgão define como objetivo "melhorar a qualidade do atendimento" e, a partir dele, define a meta "elevar de 70% para 85% o índice de satisfação dos usuários até dezembro de 2025".',
            aplicacao: 'O objetivo é amplo e qualitativo (melhorar); a meta é quantificada e datada (70% → 85% até dezembro). A meta deriva do objetivo — não o contrário. Se alguém dissesse "o objetivo é elevar de 70% para 85%", estaria usando "objetivo" no lugar de "meta".',
            desafio: 'Dê um exemplo de objetivo e um de meta para uma escola pública. Qual dos dois é o mais amplo? Qual dos dois você consegue medir numericamente?'
          }
        },
        tags: ['objetivo', 'meta']
      },

      /* ---------- Item 5 — Situação — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-03-05',
        tipo: 'situacao',
        formato: 'multipla_escolha',
        dificuldade: 2,
        subtopico: 'Classificação de fatores na análise SWOT',
        pergunta: 'Uma Secretaria de Meio Ambiente está realizando sua análise SWOT para o planejamento de 2026 e levantou quatro pontos: (1) ausência de sistema informatizado próprio para licenciamento; (2) anúncio de novos recursos federais para digitalização de serviços ambientais; (3) equipe técnica com 20 servidores concursados e estáveis; (4) alteração na legislação estadual que amplia exigências sem prever repasse de recursos. Esses pontos correspondem, respectivamente, a:',
        alternativas: [
          { id: 'A', texto: 'força, oportunidade, fraqueza e ameaça.' },
          { id: 'B', texto: 'oportunidade, força, ameaça e fraqueza.' },
          { id: 'C', texto: 'fraqueza, oportunidade, força e ameaça.' },
          { id: 'D', texto: 'fraqueza, ameaça, força e oportunidade.' },
          { id: 'E', texto: 'ameaça, fraqueza, oportunidade e força.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C está correta. (1) ausência de sistema = fraqueza (interno negativo); (2) recursos federais = oportunidade (externo positivo); (3) equipe estável = força (interno positivo); (4) alteração legislativa = ameaça (externo negativo).',
        explicacaoDetalhada: {
          correta: 'A alternativa C está correta. (1) Ausência de sistema informatizado = FRAQUEZA (interno negativo). (2) Novos recursos federais = OPORTUNIDADE (externo positivo). (3) Equipe técnica estável = FORÇA (interno positivo). (4) Alteração legislativa sem repasse = AMEAÇA (externo negativo). A chave é sempre: interno (controlável) x externo (não controlável), positivo x negativo.',
          incorretas: {
            A: 'A alternativa começa errando: (1) ausência de sistema é fraqueza, não força. A "força" seria ter o sistema. Além disso, (3) equipe estável é força, não fraqueza. Erro duplo de classificação — a alternativa troca os dois primeiros e os dois últimos.',
            B: 'A alternativa troca tudo: (1) ausência de sistema não é oportunidade (é fraqueza); (2) recursos federais não são força (são oportunidade, porque vêm de fora); (3) equipe estável não é ameaça (é força); (4) alteração legislativa não é fraqueza (é ameaça, porque vem de fora). Erro completo de leitura de interno x externo.',
            D: 'A alternativa acerta (1) fraqueza e (3) força, mas erra (2) e (4): recursos federais são oportunidade (não ameaça); alteração legislativa é ameaça (não oportunidade). O erro está em confundir "externo positivo" com "externo negativo".',
            E: 'A alternativa erra completamente: (1) ausência de sistema não é ameaça (é fraqueza interna); (2) recursos federais não são fraqueza (são oportunidade externa); (3) equipe estável não é oportunidade (é força interna); (4) alteração legislativa não é força (é ameaça externa). Inverte todos os quadrantes da SWOT.'
          },
          conceitoCobrado: 'Classificação de fatores na SWOT (interno x externo; positivo x negativo)',
          pegadinha: 'A pegadinha é a distinção entre interno (controlável) e externo (não controlável). Muitos confundem "recurso" com "força" e "lei" com "fraqueza", mas o critério é a origem: se depende da organização, é interno; se vem do ambiente, é externo.',
          comoApareceEmConcurso: 'Cenários com quatro pontos são clássicos para testar a classificação SWOT. A banca costuma misturar os quadrantes para verificar se o candidato domina o critério interno x externo, não apenas o rótulo "positivo x negativo".',
          exemploInedito: {
            contexto: 'Um instituto federal faz SWOT para 2026: (1) corpo docente com doutorado; (2) edital federal de apoio à pesquisa aplicada; (3) infraestrutura laboratorial defasada; (4) contingenciamento orçamentário anunciado.',
            aplicacao: 'Classificação: (1) força (interno positivo); (2) oportunidade (externo positivo); (3) fraqueza (interno negativo); (4) ameaça (externo negativo). A regra é: quem controla? A própria organização (interno) ou o ambiente (externo)?',
            desafio: 'Se você fosse gestor do instituto, em qual dos quatro pontos concentraria esforços de curto prazo? Justifique considerando o que a organização controla e o que não controla.'
          }
        },
        tags: ['SWOT', 'situação aplicada']
      },

      /* ---------- Item 6 — Formato 3 (Associação) — Dificuldade 3 ---------- */
      {
        id: 'D-ADM-03-06',
        tipo: 'multipla_escolha',
        formato: 'associacao',
        dificuldade: 3,
        subtopico: 'Níveis de planejamento (estratégico, tático, operacional) x horizonte x características',
        pergunta: 'Sobre os níveis de planejamento, associe corretamente cada NÍVEL ao HORIZONTE e à CARACTERÍSTICA correspondentes:\n\nColuna I — Nível\n1. Estratégico\n2. Tático\n3. Operacional\n\nColuna II — Horizonte e característica\n( ) Longo prazo; envolve a organização como um todo; define missão, visão e diretrizes.\n( ) Curto prazo; foco em tarefas cotidianas; detalha procedimentos e rotinas.\n( ) Médio prazo; foco setorial; desdobra diretrizes estratégicas para departamentos.',
        alternativas: [
          { id: 'A', texto: '1 – primeira; 2 – segunda; 3 – terceira.' },
          { id: 'B', texto: '1 – segunda; 2 – primeira; 3 – terceira.' },
          { id: 'C', texto: '1 – terceira; 2 – primeira; 3 – segunda.' },
          { id: 'D', texto: '1 – primeira; 2 – terceira; 3 – segunda.' },
          { id: 'E', texto: '1 – terceira; 2 – segunda; 3 – primeira.' }
        ],
        gabarito: 'D',
        explicacao: 'A alternativa D está correta. Estratégico (1) → longo prazo e visão global (primeira); Tático (2) → médio prazo e foco setorial (terceira); Operacional (3) → curto prazo e tarefas cotidianas (segunda).',
        explicacaoDetalhada: {
          correta: 'A alternativa D está correta. Nível ESTRATÉGICO (1) → longo prazo; organização como um todo; missão, visão e diretrizes (primeira da Coluna II). Nível TÁTICO (2) → médio prazo; foco setorial; desdobra diretrizes para departamentos (terceira da Coluna II). Nível OPERACIONAL (3) → curto prazo; tarefas cotidianas; detalha procedimentos (segunda da Coluna II).',
          incorretas: {
            A: 'A alternativa erra (2) e (3): coloca o TÁTICO como "curto prazo e tarefas cotidianas" (isso é operacional) e o OPERACIONAL como "médio prazo e setorial" (isso é tático). O ESTRATÉGICO acerta. É o erro clássico de trocar tático por operacional.',
            B: 'A alternativa erra (1) e (2): coloca o ESTRATÉGICO como "curto prazo" (é longo prazo) e o TÁTICO como "longo prazo e organização como um todo" (é médio prazo e setorial). Apenas o OPERACIONAL acerta. Erro duplo entre estratégico e tático.',
            C: 'A alternativa erra as três correspondências: coloca o ESTRATÉGICO como operacional (curto prazo), o TÁTICO como estratégico (longo prazo) e o OPERACIONAL como tático (médio prazo). É a inversão completa da hierarquia.',
            E: 'A alternativa coloca o ESTRATÉGICO como "curto prazo", o TÁTICO como "médio prazo" (este está correto) e o OPERACIONAL como "longo prazo". Só o do meio está certo; os extremos estão invertidos. É o distrator construído para quem só memorizou o nível tático.'
          },
          conceitoCobrado: 'Correspondência entre níveis de planejamento, horizonte temporal e características',
          pegadinha: 'A associação de colunas exige que o candidato não apenas saiba os três níveis e as três características isoladamente, mas a CORRESPONDÊNCIA entre eles. A confusão mais comum é entre tático (médio/setorial) e operacional (curto/cotidiano) — ambos são "abaixo" do estratégico, mas com naturezas distintas.',
          comoApareceEmConcurso: 'Bancas usam associação de colunas com níveis e características para testar a precisão. É comum embaralhar as colunas de modo que apenas uma combinação esteja integralmente correta.',
          exemploInedito: {
            contexto: 'Um instituto federal, em 2025, (1) define plano decenal de expansão de campi (estratégico); (2) fixa metas anuais por pró-reitoria (tático); (3) elabora cronograma semanal de manutenção dos laboratórios (operacional).',
            aplicacao: 'O plano decenal é estratégico (longo prazo, visão global). As metas por pró-reitoria são táticas (médio prazo, setorial). O cronograma semanal é operacional (curto prazo, tarefas cotidianas). Se alguém dissesse que o plano decenal é tático, erraria — tático é o elo entre estratégico e operacional.',
            desafio: 'Se você fosse diretor de um órgão público, qual dos três níveis exigiria mais tempo de dedicação sua? Por quê? Pense em como o dia a dia "puxa" o gestor para o operacional.'
          }
        },
        tags: ['níveis de planejamento', 'estratégico', 'tático', 'operacional', 'associação']
      },

      /* ---------- Item 7 — Autoavaliação ---------- */
      {
        id: 'D-ADM-03-07',
        tipo: 'autoavaliacao',
        subtopico: 'Elementos do planejamento, SWOT, BSC e níveis de planejamento',
        pergunta: 'Sem consultar, você consegue explicar os elementos do planejamento (missão, visão, valores, objetivos, metas, planos), diferenciar SWOT de BSC e associar os três níveis de planejamento (estratégico, tático e operacional) ao horizonte e ao escopo correspondentes?',
        resposta: 'MISSÃO: razão de existir (presente). VISÃO: estado futuro desejado. VALORES: princípios de conduta. OBJETIVOS: alvos amplos e qualitativos. METAS: objetivos quantificados com prazo. PLANOS: documentos que formalizam as estratégias. SWOT: ferramenta de diagnóstico (interno: forças/fraquezas; externo: oportunidades/ameaças). BSC: ferramenta de gestão estratégica com quatro perspectivas (financeira, clientes, processos internos, aprendizado/crescimento) — no setor público, "clientes" costuma ser adaptada para "sociedade". NÍVEIS: estratégico (longo prazo, organização como um todo, define missão/visão/diretrizes); tático (médio prazo, foco setorial, desdobra o estratégico); operacional (curto prazo, tarefas cotidianas, detalha procedimentos). SWOT diagnostica; BSC executa e mede; os três níveis conectam presente e futuro.'
      }

    ]
  },

  /* ============================================================
     ADM-04 — Organização
  ============================================================ */
  'ADM-04': {
    id: 'D-ADM-04',
    moduloId: 'ADM-04',
    itens: [

      /* ---------- Item 1 — Formato 6 (EXCETO) — Dificuldade 1 ---------- */
      {
        id: 'D-ADM-04-01',
        tipo: 'multipla_escolha',
        formato: 'excecao',
        dificuldade: 1,
        subtopico: 'Conceitos básicos da função organização (hierarquia, amplitude, delegação, departamentalização)',
        pergunta: 'Sobre conceitos fundamentais da função organização, assinale a alternativa INCORRETA:',
        alternativas: [
          { id: 'A', texto: 'Hierarquia é a distribuição de autoridade em níveis, do topo à base, definindo quem responde a quem.' },
          { id: 'B', texto: 'Amplitude de controle é o número de subordinados que um gestor pode supervisionar de forma eficaz.' },
          { id: 'C', texto: 'Delegação transfere ao subordinado a responsabilidade final pela tarefa, eximindo o superior do acompanhamento.' },
          { id: 'D', texto: 'Departamentalização é o agrupamento de atividades conforme um critério escolhido (função, cliente, região etc.).' },
          { id: 'E', texto: 'Especialização é a divisão do trabalho em tarefas mais específicas, visando maior eficiência.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C é a INCORRETA. A delegação transfere AUTORIDADE para executar a tarefa, mas a responsabilidade final permanece com o superior. Delegar não é eximir-se — é transferir a execução, mantendo o acompanhamento.',
        explicacaoDetalhada: {
          correta: 'A alternativa C está INCORRETA e, por isso, é a resposta. A delegação transfere AUTORIDADE (para executar) — mas a RESPONSABILIDADE FINAL permanece com quem delegou. O superior continua respondendo pelo resultado perante a organização e deve acompanhar a execução. Isso é o princípio da paridade autoridade-responsabilidade.',
          incorretas: {
            A: 'A alternativa está correta e não deve ser marcada. Hierarquia é distribuição de autoridade em níveis. Seria INCORRETA se dissesse que hierarquia é a distribuição de tarefas — isso é especialização.',
            B: 'A alternativa está correta e não deve ser marcada. Amplitude de controle é o número de subordinados por gestor. Seria INCORRETA se dissesse que amplitude é o número de níveis hierárquicos — são conceitos relacionados, mas distintos.',
            D: 'A alternativa está correta e não deve ser marcada. Departamentalização é agrupamento conforme critério. Seria INCORRETA se dissesse que departamentalização é a divisão do trabalho em tarefas — isso é especialização.',
            E: 'A alternativa está correta e não deve ser marcada. Especialização é divisão do trabalho em tarefas específicas. Seria INCORRETA se dissesse que especialização é distribuição de autoridade — isso é hierarquia.'
          },
          conceitoCobrado: 'Conceitos básicos da função organização: hierarquia, amplitude, delegação, departamentalização, especialização',
          pegadinha: 'A palavra "eximindo" em C é a armadilha. Delegar NÃO exime o superior — ele continua responsável. É o erro mais recorrente do módulo: confundir transferência de autoridade com transferência de responsabilidade.',
          comoApareceEmConcurso: 'Bancas costumam apresentar definições corretas de hierarquia, amplitude, departamentalização e especialização, e trocar apenas a de delegação. É a questão clássica de "conceito trocado" no formato EXCETO.',
          exemploInedito: {
            contexto: 'Um diretor delega ao coordenador a assinatura de despachos de rotina. O coordenador assina um despacho com erro. A irregularidade é identificada pela auditoria.',
            aplicacao: 'O coordenador responde pela execução, mas o diretor continua responsável perante a organização e os órgãos de controle. A delegação transferiu a autoridade para assinar, mas não transferiu a responsabilidade final. Isso ilustra exatamente por que a alternativa C está errada.',
            desafio: 'Em uma autarquia, se um diretor delega ao subordinado a autorização de despesas e o subordinado comete irregularidade, quem responde perante o Tribunal de Contas? Apenas o subordinado? Ou ambos? Explique.'
          }
        },
        tags: ['organização', 'delegação', 'hierarquia', 'amplitude', 'especialização']
      },

      /* ---------- Item 2 — C/E — Dificuldade 1 ---------- */
      {
        id: 'D-ADM-04-02',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 1,
        subtopico: 'Amplitude de controle x níveis hierárquicos',
        pergunta: 'Quanto MAIOR a amplitude de controle (muitos subordinados por gestor), MAIOR será o número de níveis hierárquicos da organização.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. A relação é INVERSA: amplitude ampla (muitos subordinados por gestor) gera MENOS níveis hierárquicos (estrutura achatada). Amplitude estreita (poucos subordinados) gera MAIS níveis (estrutura verticalizada).',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. A relação é INVERSA. Amplitude AMPLA (muitos subordinados por gestor) gera MENOS níveis hierárquicos — estrutura achatada. Amplitude ESTREITA (poucos subordinados) gera MAIS níveis — estrutura verticalizada. Quanto maior a amplitude, mais "chata" a estrutura.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela inverte a relação. Se um gestor supervisiona muitos subordinados (amplitude ampla), ele precisa de menos camadas hierárquicas para alcançar a base. Se super visiona poucos (amplitude estreita), a organização tende a ter mais camadas — cada gestor tem um "alcance" menor. A regra é: amplitude e número de níveis são INVERSAMENTE proporcionais.'
          },
          conceitoCobrado: 'Relação inversa entre amplitude de controle e número de níveis hierárquicos',
          pegadinha: 'A intuição engana: "se cada gestor tem mais subordinados, preciso de mais chefes" — não. Amplitude ampla = menos chefes = menos níveis. A palavra "maior" no início e no final da frase tenta sugerir uma relação direta, quando é inversa.',
          comoApareceEmConcurso: 'Bancas usam a relação inversa para testar se o candidato internalizou o conceito. A afirmação "amplitude maior, mais níveis" é quase sempre FALSA. A dica é desenhar mentalmente: 1 chefe com 20 subordinados → 2 níveis; 1 chefe com 2 subordinados (cada um com 2…) → 4-5 níveis.',
          exemploInedito: {
            contexto: 'Uma startup tem 1 CEO e 20 funcionários diretos — 2 níveis hierárquicos. Uma rede bancária tem CEO, 5 diretores, 25 gerentes regionais, 125 gerentes locais e 625 caixas — 5 níveis hierárquicos.',
            aplicacao: 'A startup tem amplitude ampla (20 por gestor) e poucos níveis (2). O banco tem amplitude estreita (5 a 5) e muitos níveis (5). Confirma a relação inversa: quanto maior a amplitude, menos níveis; quanto menor a amplitude, mais níveis.',
            desafio: 'Uma organização pública que quer "achatar" a estrutura deve aumentar ou diminuir a amplitude de controle? Que consequência isso traz para a sobrecarga dos gestores?'
          }
        },
        tags: ['amplitude de controle', 'níveis hierárquicos']
      },

      /* ---------- Item 3 — Formato 1 (V/F sequência) — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-04-03',
        tipo: 'multipla_escolha',
        formato: 'vf_sequencia',
        dificuldade: 2,
        subtopico: 'Centralização, descentralização, delegação e concentração/desconcentração',
        pergunta: 'Sobre os conceitos de centralização, descentralização, delegação e concentração/desconcentração, analise as afirmações e assinale a sequência correta:\n\nI. Descentralização é ato pontual de transferência de autoridade para uma tarefa específica.\nII. Centralização concentra decisões na cúpula; descentralização as distribui pela organização, aproximando a decisão do problema.\nIII. Concentração e desconcentração referem-se à distribuição interna de competências entre órgãos da mesma pessoa jurídica, sem criar nova entidade.\nIV. A escolha entre centralizar e descentralizar é absoluta: a descentralização é sempre superior à centralização em qualquer contexto.',
        alternativas: [
          { id: 'A', texto: 'V – V – F – F.' },
          { id: 'B', texto: 'F – V – V – F.' },
          { id: 'C', texto: 'V – F – V – F.' },
          { id: 'D', texto: 'F – V – F – V.' },
          { id: 'E', texto: 'F – F – V – V.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B está correta: I (F), II (V), III (V), IV (F). A I é falsa (descreve delegação, não descentralização). A IV é falsa (não há superioridade absoluta — depende do contexto).',
        explicacaoDetalhada: {
          correta: 'A alternativa B está correta: I (F), II (V), III (V), IV (F). A afirmação I é falsa — descreve a DELEGAÇÃO (ato pontual), não a descentralização (que é estrutural e permanente). A II é verdadeira — centralização concentra; descentralização distribui. A III é verdadeira — concentração/desconcentração tratam da distribuição interna entre órgãos da mesma pessoa jurídica. A IV é falsa — não há superioridade absoluta; centralização e descentralização são trade-offs.',
          incorretas: {
            A: 'A alternativa erra ao marcar I como verdadeira. A descentralização NÃO é ato pontual — é estrutural e permanente. O ato pontual é a delegação. Erra também ao marcar III como falsa — concentração/desconcentração tratam, sim, da distribuição interna entre órgãos da mesma pessoa jurídica.',
            C: 'A alternativa erra ao marcar I como verdadeira (descentralização não é ato pontual) e ao marcar III como verdadeira (correto). Erra ainda ao marcar II como falsa (ela é verdadeira).',
            D: 'A alternativa erra ao marcar IV como verdadeira. Não há superioridade absoluta da descentralização — depende do contexto, do tipo de decisão e da capacitação dos subordinados. Também erra ao marcar III como falsa (ela é verdadeira).',
            E: 'A alternativa erra ao marcar II como falsa (ela é verdadeira) e IV como verdadeira (ela é falsa). O erro central é aceitar a ideia de que a descentralização é "sempre superior" — o que contraria a lógica de trade-off.'
          },
          conceitoCobrado: 'Distinção entre centralização, descentralização, delegação e concentração/desconcentração',
          pegadinha: 'A afirmação I confunde DELEGAÇÃO (ato pontual) com DESCENTRALIZAÇÃO (estrutural). A IV explora a crença de que "descentralizar é sempre bom" — mas não há superioridade absoluta: centralização dá mais controle; descentralização, mais agilidade. Depende do contexto.',
          comoApareceEmConcurso: 'O formato V/F sequência é usado para testar 4 pares de conceitos em uma única questão. A banca costuma colocar 1-2 afirmações que invertem pares (delegação x descentralização, concentração x descentralização) e 1 afirmação com juízo absoluto ("sempre", "nunca") — que quase sempre é falsa.',
          exemploInedito: {
            contexto: 'Em uma prefeitura: (1) o prefeito delega ao secretário a assinatura de um contrato específico; (2) a prefeitura cria quatro regionais administrativas para aproximar as decisões locais; (3) a secretaria divide suas atribuições entre coordenações internas sem criar nova pessoa jurídica.',
            aplicacao: '(1) é DELEGAÇÃO (ato pontual); (2) é DESCENTRALIZAÇÃO (estrutural, aproxima decisão); (3) é DESCONCENTRAÇÃO (divisão interna, mesma pessoa jurídica). Não há hierarquia de valor entre os conceitos — cada um serve a um propósito.',
            desafio: 'Por que não faz sentido dizer que "descentralização é sempre melhor que centralização"? Dê um exemplo de situação em que a centralização é a escolha mais adequada.'
          }
        },
        tags: ['centralização', 'descentralização', 'delegação', 'concentração', 'vf sequência']
      },

      /* ---------- Item 4 — C/E — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-04-04',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 2,
        subtopico: 'Delegação x responsabilidade',
        pergunta: 'A delegação transfere ao subordinado a autoridade E a responsabilidade final pela tarefa, de modo que o superior deixa de responder pelo resultado.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. A delegação transfere a AUTORIDADE para executar, mas a RESPONSABILIDADE FINAL permanece com quem delegou. O superior continua respondendo pelo resultado.',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. A delegação transfere a AUTORIDADE (para executar a tarefa), mas a RESPONSABILIDADE FINAL permanece com quem delegou. O superior continua respondendo pelo resultado perante a organização e deve acompanhar a execução. É o princípio da paridade autoridade-responsabilidade.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela duplica a transferência: diz que a delegação transfere autoridade E responsabilidade final. O correto é que transfere APENAS a autoridade — a responsabilidade final fica com o superior. Se o subordinado erra, ambos podem responder: o subordinado pela execução, o superior pela escolha e pelo acompanhamento.'
          },
          conceitoCobrado: 'Delegação — transferência de autoridade sem transferência de responsabilidade final',
          pegadinha: 'A palavra "E" em "autoridade E responsabilidade" é a armadilha. Delega-se autoridade, não responsabilidade final. Quem delega continua responsável. É o erro mais recorrente do módulo.',
          comoApareceEmConcurso: 'Bancas usam essa distorção para testar se o candidato domina o princípio. A afirmação "delegação transfere responsabilidade" é quase sempre FALSA. A dica é lembrar: "delega-se o fazer, não o responder".',
          exemploInedito: {
            contexto: 'Um coordenador delega ao estagiário a conferência de documentos de um processo. O estagiário confere errado e o processo é indeferido por vício formal. O cidadão reclama.',
            aplicacao: 'O estagiário responde pela execução (erro na conferência), mas o coordenador responde pela escolha (delegou a tarefa a quem não tinha competência) e pelo acompanhamento (não supervisionou). A responsabilidade final é do coordenador, não do estagiário. A delegação não o eximiu.',
            desafio: 'Em uma repartição pública, se um diretor delega a um servidor a elaboração de um parecer e o parecer contém erro jurídico, quem responde perante a Corregedoria? Apenas o servidor? Ou também o diretor? Justifique.'
          }
        },
        tags: ['delegação', 'responsabilidade']
      },

      /* ---------- Item 5 — Situação — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-04-05',
        tipo: 'situacao',
        formato: 'multipla_escolha',
        dificuldade: 2,
        subtopico: 'Identificação de estrutura organizacional em cenário',
        pergunta: 'Uma empresa pública implanta uma estrutura em que cada engenheiro permanece vinculado à sua gerência funcional (Obras, TI, Operações), mas, simultaneamente, é alocado em um projeto transversal (digitalização do porto), respondendo a dois gestores: o gerente funcional da sua área de origem e o gerente do projeto. A estrutura resultante é:',
        alternativas: [
          { id: 'A', texto: 'linear, pois cada subordinado tem um único chefe, com comando único.' },
          { id: 'B', texto: 'funcional, pois cada subordinado responde a múltiplos chefes especializados, sem dimensão de projeto.' },
          { id: 'C', texto: 'matricial, pois combina a dimensão funcional com a dimensão de projeto, gerando dupla subordinação.' },
          { id: 'D', texto: 'em rede, pois elimina a hierarquia formal e organiza-se por projetos autônomos.' },
          { id: 'E', texto: 'linha-staff, pois a assessoria jurídica recomenda, mas não decide, e a linha decide.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C está correta. A estrutura MATRICIAL combina a dimensão funcional (gerente da área) com a dimensão de projeto (gerente do projeto), gerando dupla subordinação e risco de conflito de ordens.',
        explicacaoDetalhada: {
          correta: 'A alternativa C está correta. A estrutura MATRICIAL combina a dimensão funcional (gerente da área de origem) com a dimensão de projeto (gerente do projeto transversal), gerando DUPLA SUBORDINAÇÃO. O principal risco é o CONFLITO DE ORDENS entre os dois gestores, exigindo coordenação clara.',
          incorretas: {
            A: 'A alternativa descreve a estrutura LINEAR — comando único, cada subordinado responde a um chefe. É o oposto do cenário: aqui cada engenheiro responde a DOIS gestores (funcional e de projeto). A linear não admite dupla subordinação.',
            B: 'A alternativa descreve a estrutura FUNCIONAL — múltiplos chefes especializados, mas SEM a dimensão de projeto. O cenário inclui explicitamente a dimensão de projeto (digitalização do porto), o que caracteriza a matricial. A funcional pura não teria o gerente de projeto.',
            D: 'A alternativa descreve a estrutura EM REDE — sem hierarquia formal, organizada por projetos autônomos. O cenário mantém a hierarquia funcional (gerência de Obras, TI, Operações) e acrescenta a dimensão de projeto. Não há eliminação da hierarquia.',
            E: 'A alternativa descreve a estrutura LINHA-STAFF — assessoria que recomenda, sem autoridade formal, e linha que decide. O cenário não descreve assessoria: descreve dois gestores com autoridade sobre o mesmo subordinado. É a matricial, não a linha-staff.'
          },
          conceitoCobrado: 'Estrutura matricial — dupla subordinação, combinação entre dimensão funcional e de projeto',
          pegadinha: 'A banca descreve o cenário sem dizer o nome "matricial" — o candidato precisa identificar pela característica (dupla subordinação entre funcional e projeto). A confusão mais comum é com a funcional (que também tem múltiplos chefes, mas sem a dimensão de projeto) ou com a linha-staff (que tem assessoria, não dupla chefia).',
          comoApareceEmConcurso: 'Cenários aplicados são o padrão para testar estruturas organizacionais. A palavra-chave é "dupla subordinação" — se aparece, é matricial; se é "comando único", é linear; se é "múltiplos chefes especializados, sem projeto", é funcional.',
          exemploInedito: {
            contexto: 'Um instituto federal aloca professores-pesquisadores em seus departamentos de origem (Matemática, Física) e, simultaneamente, em projetos de pesquisa interdisciplinares. Cada professor responde ao chefe do departamento e ao coordenador do projeto.',
            aplicacao: 'Também é estrutura matricial: dupla subordinação (departamento + projeto). O conflito de ordens pode ocorrer (ex.: o coordenador do projeto exige dedicação integral, enquanto o chefe do departamento exige aulas). Exige coordenação clara.',
            desafio: 'Que mecanismos um gestor pode adotar para reduzir o conflito de ordens em uma estrutura matricial? Pense em dois ou três.'
          }
        },
        tags: ['estrutura matricial', 'situação aplicada']
      },

      /* ---------- Item 6 — Formato 2 (I, II, III) — Dificuldade 3 ---------- */
      {
        id: 'D-ADM-04-06',
        tipo: 'multipla_escolha',
        formato: 'afirmacoes_romanas',
        dificuldade: 3,
        subtopico: 'Departamentalização — critérios de agrupamento',
        pergunta: 'Sobre os critérios de departamentalização, analise as afirmações a seguir:\n\nI. Agrupar atividades por perfil do público atendido (crianças, adultos, idosos) é departamentalização por cliente.\nII. Agrupar atividades por localização geográfica (regionais Norte, Sul, Leste, Oeste) é departamentalização geográfica.\nIII. Agrupar atividades por etapas do processo produtivo (recebimento, triagem, análise, decisão) é departamentalização funcional.\n\nEstão corretas:',
        alternativas: [
          { id: 'A', texto: 'Apenas I.' },
          { id: 'B', texto: 'Apenas II.' },
          { id: 'C', texto: 'Apenas I e II.' },
          { id: 'D', texto: 'Apenas II e III.' },
          { id: 'E', texto: 'I, II e III.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C está correta. I e II são verdadeiras; III é falsa (agrupar por etapas do processo é departamentalização POR PROCESSO, não funcional).',
        explicacaoDetalhada: {
          correta: 'A alternativa C está correta. A afirmação I está certa: agrupar por perfil do público é departamentalização por CLIENTE. A II também está certa: agrupar por localização é departamentalização GEOGRÁFICA. A III está INCORRETA: agrupar por etapas do processo produtivo é departamentalização POR PROCESSO, não funcional. A funcional agruparia por função desempenhada (compras, vendas, RH), não por etapas do processo.',
          incorretas: {
            A: 'A afirmação I está correta, mas a II também. Agrupar por localização geográfica é, sim, departamentalização geográfica. Excluir a II é negar um critério clássico.',
            B: 'A afirmação II está correta, mas a I também. Agrupar por perfil do público é departamentalização por cliente — critério clássico. Excluir a I é negar outro critério clássico.',
            D: 'A afirmação III é falsa — agrupar por etapas do processo é departamentalização POR PROCESSO, não funcional. Incluir a III como correta é o erro central desta alternativa. A II está correta, mas a III não.',
            E: 'Não é possível aceitar as três. A afirmação III confunde departamentalização por PROCESSO com departamentalização FUNCIONAL. A funcional agrupa por função (compras, vendas, RH); a por processo agrupa por etapas (recebimento, triagem, análise). Incluir a III é o que torna a alternativa errada.'
          },
          conceitoCobrado: 'Critérios de departamentalização: por cliente, geográfica, funcional e por processo',
          pegadinha: 'A confusão mais comum é entre departamentalização FUNCIONAL (por função: compras, vendas, RH) e POR PROCESSO (por etapas: recebimento, triagem, análise). A afirmação III usa "etapas do processo produtivo" e chama de funcional — erro clássico.',
          comoApareceEmConcurso: 'Bancas testam a distinção entre critérios de departamentalização com afirmações que misturam exemplos corretos e um exemplo trocado. A estratégia é colocar 2 afirmações verdadeiras e 1 falsa em ponto-chave — geralmente a falsa é a que troca funcional por processo (ou por cliente).',
          exemploInedito: {
            contexto: 'Um hospital público organiza suas diretorias de quatro formas possíveis: (a) por especialidade (clínica médica, cirurgia, pediatria) — funcional; (b) por perfil do paciente (infantil, adulto, idoso) — por cliente; (c) por localização (unidade centro, unidade norte) — geográfica; (d) por etapa do atendimento (recepção, triagem, consulta, exames) — por processo.',
            aplicacao: 'Cada critério tem uma lógica. O hospital pode combinar critérios (matricial) ou escolher um principal. A confusão da afirmação III está em chamar "funcional" o que é "por processo" — são critérios distintos, ainda que ambos organizem o fluxo de trabalho.',
            desafio: 'Se você fosse gestor de um hospital público, qual critério de departamentalização escolheria como principal? Justifique considerando o tipo de atividade e o público atendido.'
          }
        },
        tags: ['departamentalização', 'cliente', 'geográfica', 'funcional', 'processo', 'afirmações romanas']
      },

      /* ---------- Item 7 — Autoavaliação ---------- */
      {
        id: 'D-ADM-04-07',
        tipo: 'autoavaliacao',
        subtopico: 'Distinções fundamentais da função organização',
        pergunta: 'Sem consultar, você consegue diferenciar centralização x descentralização, delegação x descentralização, concentração x desconcentração, amplitude de controle estreita x ampla e os principais tipos de estrutura (linear, funcional, linha-staff e matricial)?',
        resposta: 'CENTRALIZAÇÃO x DESCENTRALIZAÇÃO: onde a decisão fica — cúpula x distribuída. DELEGAÇÃO x DESCENTRALIZAÇÃO: ato pontual de transferir autoridade (delegação) x transferência estrutural e permanente (descentralização); a delegação mantém a responsabilidade final com o superior. CONCENTRAÇÃO x DESCONCENTRAÇÃO: um único órgão executa (concentração) x divisão entre órgãos da MESMA pessoa jurídica (desconcentração — sem nova personalidade). AMPLITUDE ESTREITA x AMPLA: poucos subordinados por gestor → mais níveis hierárquicos (verticalizada) x muitos subordinados → menos níveis (achatada). ESTRUTURAS: linear (comando único, rápida, mas rígida); funcional (múltiplos chefes especializados, sem projeto); linha-staff (assessoria recomenda, linha decide); matricial (dupla subordinação — funcional + projeto, com risco de conflito de ordens).'
      }

    ]
  }
  ,

  /* ============================================================
     ADM-06 — Controle e avaliação
  ============================================================ */
  'ADM-06': {
    id: 'D-ADM-06',
    moduloId: 'ADM-06',
    itens: [

      /* ---------- Item 1 — Formato 6 (EXCETO) — Dificuldade 1 ---------- */
      {
        id: 'D-ADM-06-01',
        tipo: 'multipla_escolha',
        formato: 'excecao',
        dificuldade: 1,
        subtopico: 'Tipos de controle (preventivo, simultâneo, posterior)',
        pergunta: 'Sobre os tipos de controle no ciclo PODC, assinale a alternativa INCORRETA:',
        alternativas: [
          { id: 'A', texto: 'O controle preventivo atua antes da execução, buscando evitar que o desvio ocorra.' },
          { id: 'B', texto: 'O controle simultâneo atua antes do início da atividade, com finalidade eminentemente preventiva.' },
          { id: 'C', texto: 'O controle posterior atua após a execução, identificando desvios já consolidados.' },
          { id: 'D', texto: 'Os padrões definidos no planejamento são a referência para o controle.' },
          { id: 'E', texto: 'A ação corretiva busca alinhar o desempenho real aos padrões estabelecidos.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B é a INCORRETA. O controle simultâneo atua DURANTE a execução, corrigindo desvios em tempo real. O controle que atua ANTES é o PREVENTIVO.',
        explicacaoDetalhada: {
          correta: 'A alternativa B está INCORRETA e, por isso, é a resposta. Ela descreve o controle PREVENTIVO (antes da execução) usando o rótulo "simultâneo". O controle SIMULTÂNEO (ou concomitante) atua DURANTE a execução — em tempo real, enquanto a atividade acontece. Exemplos: supervisão direta, painel de monitoramento em tempo real. O PREVENTIVO atua ANTES (treinamento, seleção, planejamento detalhado).',
          incorretas: {
            A: 'A alternativa está correta e não deve ser marcada. O controle preventivo atua antes da execução, para evitar o desvio. Seria INCORRETA se dissesse que atua depois — isso seria o posterior.',
            C: 'A alternativa está correta e não deve ser marcada. O controle posterior atua após a execução, identificando desvios consolidados. Seria INCORRETA se dissesse que atua antes — isso seria o preventivo.',
            D: 'A alternativa está correta e não deve ser marcada. Os padrões definidos no planejamento são a referência do controle. Seria INCORRETA se dissesse que o controle define os próprios padrões — eles vêm do planejamento.',
            E: 'A alternativa está correta e não deve ser marcada. A ação corretiva alinha o desempenho real aos padrões. Seria INCORRETA se dissesse que a ação corretiva é a primeira etapa do controle — ela é a última.'
          },
          conceitoCobrado: 'Distinção entre os três tipos de controle quanto ao momento de atuação',
          pegadinha: 'As palavras "simultâneo" e "preventivo" são frequentemente trocadas. Fixar a lógica: PREVENTIVO = antes; SIMULTÂNEO = durante; POSTERIOR = depois. A alternativa B usa "simultâneo" mas descreve a atuação "antes" — erro clássico.',
          comoApareceEmConcurso: 'Bancas costumam trocar os rótulos dos três tipos de controle em uma única alternativa e manter as demais corretas. É o formato EXCETO clássico do módulo.',
          exemploInedito: {
            contexto: 'Um hospital público adota três medidas: (1) treina todos os enfermeiros no novo protocolo de medicação antes de implantá-lo; (2) mantém um painel em tempo real com o tempo de espera da triagem; (3) faz auditoria dos prontuários ao final de cada mês.',
            aplicacao: '(1) é PREVENTIVO (antes da execução). (2) é SIMULTÂNEO (durante — tempo real). (3) é POSTERIOR (após — auditoria). A alternativa B troca os rótulos de (1) e (2): chama de simultâneo o que é preventivo. É exatamente esse o erro.',
            desafio: 'Se um órgão só adota controle posterior, quais desvantagens isso traz em relação ao preventivo e ao simultâneo? Pense no custo de corrigir um erro já consolidado.'
          }
        },
        tags: ['controle', 'preventivo', 'simultâneo', 'posterior']
      },

      /* ---------- Item 2 — C/E — Dificuldade 1 ---------- */
      {
        id: 'D-ADM-06-02',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 1,
        subtopico: 'Planejamento e controle como funções-espelho',
        pergunta: 'O planejamento e o controle são funções independentes: o planejamento define objetivos, e o controle não se relaciona com esses objetivos.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. Planejamento e controle são interdependentes: o planejamento define os padrões; o controle compara o desempenho real com esses padrões e corrige desvios. Sem padrões, não há controle.',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. Planejamento e controle são funções-espelho: o planejamento define objetivos, metas e padrões; o controle mede o desempenho real, compara com esses padrões e corrige desvios. Sem os padrões do planejamento, o controle não tem referência para comparar — ficaria sem rumo.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela trata as duas funções como independentes, mas elas são interdependentes. O controle existe PARA VERIFICAR se o planejamento está sendo cumprido. Sem planejamento, o controle não sabe o que medir; sem controle, o planejamento não sabe se funcionou. São complementares, não independentes.'
          },
          conceitoCobrado: 'Interdependência entre planejamento e controle (funções-espelho)',
          pegadinha: 'A palavra "independentes" é a armadilha. No PODC, nenhuma função é independente — todas se relacionam. O controle é o "espelho" do planejamento: mede o que o planejamento definiu.',
          comoApareceEmConcurso: 'Bancas usam a afirmação de "independência" para testar se o candidato entendeu a lógica de interdependência do PODC. Quase sempre é FALSA.',
          exemploInedito: {
            contexto: 'Uma Secretaria define a meta de atender 95% dos pedidos de informação em até 20 dias (planejamento). Mensalmente, mede o percentual efetivamente atendido no prazo (controle). Quando o índice cai, revisa o fluxo de resposta.',
            aplicacao: 'O controle mede exatamente o que o planejamento definiu como padrão. Se o planejamento não tivesse definido a meta (95% em 20 dias), o controle não saberia o que medir nem quando considerar o desempenho "bom" ou "ruim". São interdependentes.',
            desafio: 'Se um órgão faz controle sem ter metas claras, o que acontece na prática? Pense na dificuldade de interpretar um indicador sem referência.'
          }
        },
        tags: ['planejamento', 'controle', 'interdependência']
      },

      /* ---------- Item 3 — Formato 1 (V/F sequência) — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-06-03',
        tipo: 'multipla_escolha',
        formato: 'vf_sequencia',
        dificuldade: 2,
        subtopico: 'Etapas do controle',
        pergunta: 'Sobre as etapas do processo de controle, analise as afirmações e assinale a sequência correta:\n\nI. A primeira etapa do controle é o estabelecimento de padrões de desempenho, geralmente derivados do planejamento.\nII. A medição do desempenho real é a etapa em que se coletam dados sobre o que efetivamente foi executado.\nIII. A comparação entre desempenho real e padrão é a etapa em que se identifica se houve desvio e qual sua magnitude.\nIV. A ação corretiva é dispensável quando o desvio é pequeno, pois o controle se esgota na comparação.',
        alternativas: [
          { id: 'A', texto: 'V – V – V – F.' },
          { id: 'B', texto: 'V – F – V – V.' },
          { id: 'C', texto: 'F – V – V – V.' },
          { id: 'D', texto: 'V – V – F – V.' },
          { id: 'E', texto: 'F – V – F – V.' }
        ],
        gabarito: 'A',
        explicacao: 'A alternativa A está correta: I (V), II (V), III (V), IV (F). A IV é falsa: a ação corretiva é etapa essencial do controle — mesmo desvios pequenos precisam ser tratados, sob pena de se acumularem.',
        explicacaoDetalhada: {
          correta: 'A alternativa A está correta: I (V), II (V), III (V), IV (F). As etapas do controle são: (1) estabelecimento de padrões; (2) medição do desempenho real; (3) comparação com o padrão; (4) ação corretiva. A IV é FALSA porque a ação corretiva é etapa essencial, não dispensável. Desvios pequenos, se não corrigidos, tendem a se acumular e virar problemas maiores.',
          incorretas: {
            B: 'A alternativa erra ao marcar a II como falsa. A medição do desempenho real É, sim, uma etapa do controle — é a coleta de dados sobre a execução. Sem ela, não há como comparar com o padrão.',
            C: 'A alternativa erra ao marcar a I como falsa. O estabelecimento de padrões É a primeira etapa do controle, geralmente derivado do planejamento. Sem padrões, o controle não tem referência.',
            D: 'A alternativa erra ao marcar a III como falsa. A comparação entre desempenho real e padrão É etapa central do controle — é onde se identifica o desvio. Também erra ao marcar a IV como verdadeira (ela é falsa).',
            E: 'A alternativa erra ao marcar a I como falsa (ela é verdadeira — padrões vêm primeiro) e ao marcar a III como falsa (ela é verdadeira — a comparação é etapa essencial). É a "alternativa do chute" para quem não internalizou a sequência.'
          },
          conceitoCobrado: 'Etapas do processo de controle: padrões → medição → comparação → ação corretiva',
          pegadinha: 'A afirmação IV usa a palavra "dispensável" para tentar induzir o candidato a aceitar a ideia de que desvios pequenos não precisam de correção. Mas a ação corretiva é etapa essencial — desvios pequenos se acumulam e viram problemas. Palavras absolutas como "dispensável" e "esgota" denunciam o erro.',
          comoApareceEmConcurso: 'O formato V/F sequência é usado para testar as quatro etapas do controle em uma única questão. A banca costuma manter 3 afirmações verdadeiras e 1 falsa, geralmente a que nega uma etapa ou a relativiza indevidamente.',
          exemploInedito: {
            contexto: 'Uma Secretaria de Saúde define a meta de 90% das consultas agendadas em até 5 dias (padrão). Mede mensalmente o percentual efetivamente agendado no prazo (medição). Compara com o padrão (comparação). Quando o índice cai para 85%, redistribui atendentes e revê o fluxo (ação corretiva).',
            aplicacao: 'As quatro etapas estão presentes e se encadeiam. A ação corretiva NÃO é dispensável — mesmo um desvio de 5 pontos percentuais exige correção, sob pena de se acumular e virar 10, 15 ou 20 pontos. A afirmação IV estaria errada em qualquer cenário real.',
            desafio: 'Que diferença prática há entre "monitorar o indicador" e "agir corretivamente"? Por que só monitorar não basta para que o controle seja eficaz?'
          }
        },
        tags: ['controle', 'etapas', 'vf sequência']
      },

      /* ---------- Item 4 — C/E — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-06-04',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 2,
        subtopico: 'Finalidade do controle — punição x diagnóstico',
        pergunta: 'O controle no ciclo PODC limita-se a punir servidores que cometem irregularidades, não tendo relação com o desempenho organizacional.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. O controle é função DIAGNÓSTICA e CORRETIVA: mede desempenho, compara com padrões e adota ações corretivas. A punição é apenas uma das ações possíveis — e não a principal.',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. O controle é função DIAGNÓSTICA e CORRETIVA: mede o desempenho, compara com os padrões do planejamento e adota ações corretivas para melhorar resultados. A punição é apenas uma das ações corretivas possíveis — e costuma ser tratada em instância própria (correição, PAD), não no controle gerencial do PODC.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela reduz o controle à punição — visão empobrecida. O controle existe para DIAGNOSTICAR desvios e APRIMORAR o desempenho. Confundi-lo com punição é erro conceitual clássico, muito explorado por bancas.'
          },
          conceitoCobrado: 'Finalidade do controle no PODC',
          pegadinha: 'As palavras "limita-se" e "não tendo relação" são absolutos que denunciam o erro. O controle tem múltiplas finalidades (diagnóstico, correção, prevenção, aprendizado) — a punição é apenas uma delas.',
          comoApareceEmConcurso: 'Bancas usam essa distorção para separar quem entende o controle como função gerencial de quem o associa apenas à punição. A afirmação é quase sempre FALSA.',
          exemploInedito: {
            contexto: 'Um órgão mede mensalmente o tempo de tramitação de processos. Quando o tempo sobe, investiga o gargalo e redistribui servidores. Quando cai, padroniza o que funcionou. Nenhuma punição é aplicada — o foco é melhorar o fluxo.',
            aplicacao: 'O exemplo mostra controle como DIAGNÓSTICO e MELHORIA, não como punição. A punição, quando cabível, é tratada em outra instância. O controle do PODC existe para aprender, corrigir e aprimorar.',
            desafio: 'Que diferença prática há entre um controle "punitivo" e um controle "diagnóstico" na gestão de uma equipe? Que tipo de controle tende a gerar mais engajamento?'
          }
        },
        tags: ['controle', 'finalidade', 'diagnóstico']
      },

      /* ---------- Item 5 — Situação — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-06-05',
        tipo: 'situacao',
        formato: 'multipla_escolha',
        dificuldade: 2,
        subtopico: 'Controle interno x externo; tipos quanto ao momento',
        pergunta: 'O Tribunal de Contas da União realiza auditoria sobre a execução de um contrato de obra pública firmado por um ministério. A obra já foi concluída, e a auditoria identifica sobrepreço. Simultaneamente, a Controladoria-Geral da União revisa os controles internos do ministério para evitar que o problema se repita. Considerando o órgão e o momento da atuação, é CORRETO afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Ambos exercem controle interno e preventivo, pois atuam dentro da estrutura do Estado.' },
          { id: 'B', texto: 'O TCU exerce controle externo e posterior; a CGU exerce controle interno, com foco preventivo.' },
          { id: 'C', texto: 'O TCU exerce controle interno e simultâneo; a CGU exerce controle externo e preventivo.' },
          { id: 'D', texto: 'Ambos exercem controle externo e simultâneo, pois ocorrem durante a execução do contrato.' },
          { id: 'E', texto: 'Ambos exercem controle interno e posterior, sem distinção de natureza.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B está correta. O TCU é órgão de controle EXTERNO (auxilia o Legislativo) e atua, no caso, de forma POSTERIOR (obra já concluída). A CGU é órgão de controle INTERNO do Executivo Federal e, ao revisar controles, atua com foco PREVENTIVO.',
        explicacaoDetalhada: {
          correta: 'A alternativa B está correta. O TCU é órgão de controle EXTERNO (art. 71 da CF — auxilia o Congresso Nacional) e atua, no caso, de forma POSTERIOR (a obra já foi concluída — auditoria após o fato). A CGU é órgão de controle INTERNO do Executivo Federal (art. 74 da CF — órgão central do sistema de controle interno) e, ao revisar controles para evitar reincidência, atua com foco PREVENTIVO.',
          incorretas: {
            A: 'A alternativa erra em dois pontos: o TCU é órgão de controle EXTERNO (não interno — está fora da estrutura do Poder Executivo) e atua POSTERIORMENTE (não preventivamente), pois a obra já terminou. Além disso, "ambos" pressupõe a mesma natureza — o que não é o caso.',
            C: 'A alternativa inverte os papéis: coloca o TCU como interno (é externo) e a CGU como externa (é interna). Também erra ao chamar o TCU de "simultâneo" — a auditoria é posterior à execução da obra.',
            D: 'A alternativa erra ao dizer que ambos são externos — a CGU é interna. E erra ao dizer "simultâneo" — a obra já está concluída, o que caracteriza controle posterior, não simultâneo.',
            E: 'A alternativa erra ao igualar ambos como "internos" — o TCU é externo. E ao dizer que ambos atuam sem distinção de natureza — há clara distinção: TCU (externo) x CGU (interno).'
          },
          conceitoCobrado: 'Controle interno x externo; tipos quanto ao momento (preventivo, simultâneo, posterior)',
          pegadinha: 'A banca mistura dois critérios de classificação (quanto ao órgão: interno x externo; quanto ao momento: preventivo x simultâneo x posterior) em um único cenário. O candidato precisa separar os dois critérios — não confundi-los.',
          comoApareceEmConcurso: 'Cenários com TCU x CGU são clássicos em concursos federais. A distinção é: TCU = externo; CGU = interno. O momento de atuação depende do caso concreto — auditoria após obra concluída é sempre posterior.',
          exemploInedito: {
            contexto: 'Uma Controladoria-Geral estadual revisa, em 2025, os fluxos de licitação para evitar irregularidades futuras (controle interno, preventivo). Paralelamente, o TCE estadual audita, em 2026, os contratos celebrados em 2024 (controle externo, posterior).',
            aplicacao: 'Mesma lógica: CGU/Controladorias = interno, preventivo; TCEs/TCU = externo, posterior. Um não substitui o outro: são dimensões complementares do controle da Administração Pública.',
            desafio: 'Por que a Constituição criou dois sistemas (interno e externo) em vez de concentrar tudo no TCU? Que vantagem há na dupla verificação?'
          }
        },
        tags: ['controle interno', 'controle externo', 'TCU', 'CGU', 'situação aplicada']
      },

      /* ---------- Item 6 — Formato 3 (Associação) — Dificuldade 3 ---------- */
      {
        id: 'D-ADM-06-06',
        tipo: 'multipla_escolha',
        formato: 'associacao',
        dificuldade: 3,
        subtopico: 'Tipos de controle por momento x exemplos práticos',
        pergunta: 'Sobre os tipos de controle quanto ao momento de atuação, associe corretamente cada TIPO ao seu EXEMPLO característico:\n\nColuna I — Tipo de controle\n1. Preventivo\n2. Simultâneo\n3. Posterior\n\nColuna II — Exemplo característico\n( ) Auditoria realizada após o encerramento do exercício financeiro.\n( ) Painel de monitoramento em tempo real do tempo de espera.\n( ) Treinamento dos servidores antes da implantação de um novo sistema.',
        alternativas: [
          { id: 'A', texto: '1 – primeira; 2 – segunda; 3 – terceira.' },
          { id: 'B', texto: '1 – segunda; 2 – primeira; 3 – terceira.' },
          { id: 'C', texto: '1 – terceira; 2 – segunda; 3 – primeira.' },
          { id: 'D', texto: '1 – terceira; 2 – primeira; 3 – segunda.' },
          { id: 'E', texto: '1 – segunda; 2 – terceira; 3 – primeira.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C está correta. Preventivo (1) → treinamento antes da implantação (terceira). Simultâneo (2) → painel em tempo real (segunda). Posterior (3) → auditoria após o encerramento (primeira).',
        explicacaoDetalhada: {
          correta: 'A alternativa C está correta. Preventivo (1) → treinamento ANTES da implantação (terceira da Coluna II) — atua antes, evitando o desvio. Simultâneo (2) → painel em TEMPO REAL (segunda da Coluna II) — atua durante, corrigindo no momento. Posterior (3) → auditoria APÓS o encerramento (primeira da Coluna II) — atua depois, identificando desvios consolidados.',
          incorretas: {
            A: 'A alternativa erra em todas as três: coloca o preventivo como auditoria após (posterior), o simultâneo como painel (correto) e o posterior como treinamento antes (preventivo). Duas inversões e só uma correspondência certa — erro clássico de quem confunde preventivo com posterior.',
            B: 'A alternativa coloca o preventivo como painel em tempo real (simultâneo), o simultâneo como auditoria após (posterior) e o posterior como treinamento antes (preventivo). Inverteu os três. É o espelho de C — construído para capturar quem só memorizou "simultâneo = durante" e chutou o resto.',
            D: 'A alternativa acerta (1) → terceira (preventivo = treinamento antes) e (3) → segunda (posterior = painel em tempo real)? Não — (3) deveria ser primeira (auditoria após). Erra (2) e (3): coloca o simultâneo como auditoria após (é painel) e o posterior como painel (é auditoria). Apenas (1) está correta.',
            E: 'A alternativa coloca o preventivo como painel (simultâneo), o simultâneo como auditoria (posterior) e o posterior como treinamento (preventivo). Inverteu os três, como em B. É variante de distrator para quem não domina a correspondência exata.'
          },
          conceitoCobrado: 'Correspondência entre tipo de controle (momento) e exemplo prático',
          pegadinha: 'A associação de colunas exige que o candidato não apenas saiba os três tipos isoladamente, mas reconheça exemplos concretos de cada um. A confusão mais comum é entre PREVENTIVO (antes — treinamento, planejamento detalhado) e POSTERIOR (depois — auditoria, balanço). O SIMULTÂNEO (durante — painel, supervisão) costuma ser mais bem identificado.',
          comoApareceEmConcurso: 'Bancas usam associação de colunas com tipos e exemplos para testar a aplicação prática. É comum embaralhar as colunas de modo que apenas uma combinação esteja integralmente correta — as demais têm erros parciais que só o candidato atento percebe.',
          exemploInedito: {
            contexto: 'Uma Secretaria de Obras adota três controles: (a) análise detalhada do projeto antes da execução (preventivo); (b) fiscal de obra presente durante todo o cronograma (simultâneo); (c) vistoria técnica após a entrega da obra (posterior).',
            aplicacao: 'Os três exemplos ilustram os três tipos. (a) evita o desvio; (b) corrige em tempo real; (c) identifica desvios já consolidados. A associação correta depende de identificar "quando" cada um atua em relação à execução.',
            desafio: 'Se o gestor só pudesse adotar UM dos três tipos de controle, qual escolheria? Que trade-off está em jogo (custo x prevenção x aprendizado)?'
          }
        },
        tags: ['controle', 'preventivo', 'simultâneo', 'posterior', 'associação']
      },

      /* ---------- Item 7 — Autoavaliação ---------- */
      {
        id: 'D-ADM-06-07',
        tipo: 'autoavaliacao',
        subtopico: 'Etapas, tipos e natureza do controle',
        pergunta: 'Sem consultar, você consegue explicar as etapas do controle (padrões → medição → comparação → ação corretiva), os três tipos (preventivo, simultâneo, posterior) e a diferença entre controle interno e externo?',
        resposta: 'ETAPAS: estabelecer padrões → medir desempenho real → comparar com o padrão → adotar ação corretiva. TIPOS: preventivo (antes — treinamento, seleção, planejamento detalhado); simultâneo (durante — supervisão direta, painel em tempo real); posterior (depois — auditoria, balanço). CONTROLE INTERNO: autocontrole de cada Poder/órgão (ex.: CGU, Controladorias) — art. 74 da CF. CONTROLE EXTERNO: exercido por órgão externo (Congresso + TCU; Judiciário no controle de legalidade) — art. 71 da CF. A lógica é sempre: medir → comparar → corrigir; e a escolha do tipo depende do momento e da natureza do controle.'
      }

    ]
  },

  /* ============================================================
     ADM-07 — Gestão de Pessoas
  ============================================================ */
  'ADM-07': {
    id: 'D-ADM-07',
    moduloId: 'ADM-07',
    itens: [

      /* ---------- Item 1 — Formato 2 (I, II, III) — Dificuldade 1 ---------- */
      {
        id: 'D-ADM-07-01',
        tipo: 'multipla_escolha',
        formato: 'afirmacoes_romanas',
        dificuldade: 1,
        subtopico: 'Processos de gestão de pessoas',
        pergunta: 'Sobre os processos de gestão de pessoas, analise as afirmações a seguir:\n\nI. Agregar pessoas inclui recrutamento e seleção.\nII. Desenvolver pessoas inclui apenas treinamento operacional de curto prazo, excluindo o desenvolvimento de carreiras.\nIII. Recompensar pessoas inclui remuneração, benefícios e incentivos.\n\nEstão corretas:',
        alternativas: [
          { id: 'A', texto: 'Apenas I.' },
          { id: 'B', texto: 'Apenas II.' },
          { id: 'C', texto: 'Apenas I e III.' },
          { id: 'D', texto: 'Apenas II e III.' },
          { id: 'E', texto: 'I, II e III.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C está correta. I e III são verdadeiras; II é falsa (desenvolver pessoas inclui treinamento E desenvolvimento de carreiras — não se limita ao curto prazo).',
        explicacaoDetalhada: {
          correta: 'A alternativa C está correta. A afirmação I está certa: agregar pessoas inclui recrutamento e seleção. A III também está certa: recompensar pessoas inclui remuneração, benefícios e incentivos. A II está INCORRETA: desenvolver pessoas inclui treinamento (curto prazo, tarefa atual) E desenvolvimento de carreiras (longo prazo, futuro) — não se limita ao operacional.',
          incorretas: {
            A: 'A afirmação I está correta, mas a III também. Recompensar pessoas inclui remuneração, benefícios e incentivos — é um dos seis processos clássicos de gestão de pessoas. Excluir a III é negar um processo inteiro.',
            B: 'A afirmação II é falsa — desenvolve pessoas inclui treinamento E desenvolvimento de carreiras. A I e a III estão corretas. Portanto, "apenas II" não procede.',
            D: 'A afirmação II é falsa — não se pode incluí-la. Desenvolver pessoas abrange treinamento (curto prazo) e desenvolvimento (longo prazo, carreiras). Incluir a II é o erro central desta alternativa.',
            E: 'Não é possível aceitar as três. A II é o erro: ela restringe o desenvolvimento a "treinamento operacional de curto prazo" e exclui carreiras — visão incompleta. Incluir a II torna a alternativa errada.'
          },
          conceitoCobrado: 'Processos de gestão de pessoas: agregar, aplicar, recompensar, desenvolver, manter e monitorar',
          pegadinha: 'A afirmação II usa a palavra "apenas" e "excluindo" — dois absolutos que denunciam o erro. Desenvolver pessoas inclui treinamento E desenvolvimento de carreiras. A restrição é falsa.',
          comoApareceEmConcurso: 'Bancas testam a distinção entre os seis processos com afirmações que trocam ou restringem indevidamente. A estratégia é colocar 2 afirmações verdadeiras e 1 falsa em ponto-chave — geralmente a falsa restringe um processo.',
          exemploInedito: {
            contexto: 'Um órgão público investe em: (1) concurso público para analistas (agregar); (2) curso de 40h sobre novo sistema (treinamento — desenvolve pessoas); (3) programa de formação de lideranças para 3 anos (desenvolvimento — também desenvolve pessoas); (4) plano de cargos e salários (recompensar).',
            aplicacao: 'Desenvolver pessoas abrange TANTO treinamento quanto desenvolvimento de carreiras — os itens (2) e (3) pertencem ao mesmo processo. A afirmação II erra ao excluir o desenvolvimento de carreiras, como se só o treinamento operacional contasse.',
            desafio: 'Por que a distinção entre treinamento (curto prazo) e desenvolvimento (longo prazo) é importante na gestão de pessoas? Que tipo de investimento cada um exige?'
          }
        },
        tags: ['gestão de pessoas', 'processos', 'desenvolver']
      },

      /* ---------- Item 2 — C/E — Dificuldade 1 ---------- */
      {
        id: 'D-ADM-07-02',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 1,
        subtopico: 'Recrutamento x seleção',
        pergunta: 'Recrutamento e seleção são sinônimos: ambos consistem na escolha do candidato que melhor atende ao perfil da vaga.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. Recrutamento é ATRAÇÃO de candidatos (vitrine); seleção é a ESCOLHA, entre os candidatos atraídos, do que melhor atende ao perfil (peneira).',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. RECRUTAMENTO é a ATRAÇÃO de candidatos (busca ativa). SELEÇÃO é a ESCOLHA, entre os candidatos atraídos, do que melhor atende ao perfil. Recrutamento é a "vitrine"; seleção é a "peneira". São etapas distintas e sequenciais.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela iguala os dois conceitos ao dizer que ambos consistem na "escolha". Na verdade, só a SELEÇÃO escolhe; o RECRUTAMENTO atrai. Se o órgão não atrai (recruta), não tem de onde escolher (selecionar). São etapas complementares, não sinônimos.'
          },
          conceitoCobrado: 'Distinção entre recrutamento (atração) e seleção (escolha)',
          pegadinha: 'A palavra "sinônimos" é o erro. Recrutamento e seleção são etapas distintas e sequenciais. A afirmação força a equivalência ao dizer que "ambos consistem na escolha" — o que só vale para a seleção.',
          comoApareceEmConcurso: 'Bancas usam a confusão entre atração e escolha com frequência. A afirmação "recrutamento e seleção são sinônimos" é quase sempre FALSA.',
          exemploInedito: {
            contexto: 'Um órgão publica edital de concurso (recrutamento) e, depois, aplica provas, entrevistas e análise curricular para escolher os aprovados (seleção).',
            aplicacao: 'O edital ATRAI candidatos (recrutamento); as provas e entrevistas ESCOLHEM os melhores (seleção). Se o órgão não publicasse edital, não teria candidatos para selecionar; se não aplicasse provas, não escolheria com critério.',
            desafio: 'Se um órgão faz recrutamento amplo mas seleção mal estruturada, que problema isso gera? E se faz seleção rigorosa mas recrutamento restrito (poucos candidatos)?'
          }
        },
        tags: ['recrutamento', 'seleção']
      },

      /* ---------- Item 3 — Formato 1 (V/F sequência) — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-07-03',
        tipo: 'multipla_escolha',
        formato: 'vf_sequencia',
        dificuldade: 2,
        subtopico: 'Treinamento x desenvolvimento; clima x cultura',
        pergunta: 'Sobre os conceitos de treinamento, desenvolvimento, clima e cultura organizacional, analise as afirmações e assinale a sequência correta:\n\nI. Treinamento prepara para a tarefa atual (curto prazo); desenvolvimento prepara para o futuro (longo prazo).\nII. Clima organizacional é a percepção momentânea sobre o ambiente de trabalho; cultura é o conjunto de valores enraizados.\nIII. Clima e cultura são sinônimos: ambos se referem aos valores duradouros da organização.\nIV. Recrutamento atrai; seleção escolhe.',
        alternativas: [
          { id: 'A', texto: 'V – V – V – F.' },
          { id: 'B', texto: 'V – F – V – V.' },
          { id: 'C', texto: 'F – V – V – V.' },
          { id: 'D', texto: 'V – V – F – V.' },
          { id: 'E', texto: 'F – V – F – V.' }
        ],
        gabarito: 'D',
        explicacao: 'A alternativa D está correta: I (V), II (V), III (F), IV (V). A III é falsa: clima e cultura NÃO são sinônimos — clima é momentâneo, cultura é enraizada.',
        explicacaoDetalhada: {
          correta: 'A alternativa D está correta: I (V), II (V), III (F), IV (V). A afirmação I está certa: treinamento é curto prazo; desenvolvimento é longo prazo. A II está certa: clima é percepção momentânea; cultura é enraizada. A III está FALSA: clima e cultura não são sinônimos — o clima "flutua" com eventos, a cultura é duradoura. A IV está certa: recrutamento atrai; seleção escolhe.',
          incorretas: {
            A: 'A alternativa erra ao marcar a III como verdadeira. Clima e cultura são conceitos distintos — clima é a "temperatura" (percepção momentânea, flutua com eventos); cultura é o "DNA" (valores enraizados, duradouros). Tratá-los como sinônimos é o erro clássico.',
            B: 'A alternativa erra ao marcar a II como falsa. Clima é, sim, a percepção momentânea; cultura é o conjunto de valores enraizados. Essa distinção está correta. Também erra ao marcar a III como verdadeira.',
            C: 'A alternativa erra ao marcar a I como falsa. Treinamento prepara para a tarefa atual (curto prazo); desenvolvimento, para o futuro (longo prazo). Essa distinção está correta. Inverter I é erro básico.',
            E: 'A alternativa erra ao marcar a I como falsa e a III como falsa (correto). Erra também ao marcar a II como verdadeira (correto) e a IV como verdadeira (correto). A combinação de erros mostra que o candidato não internalizou a distinção treinamento x desenvolvimento.'
          },
          conceitoCobrado: 'Distinções entre treinamento/desenvolvimento e clima/cultura',
          pegadinha: 'A afirmação III usa "sinônimos" para tentar igualar clima e cultura. São conceitos distintos: clima (temperatura, momentâneo) x cultura (DNA, enraizado). É a pegadinha recorrente do módulo.',
          comoApareceEmConcurso: 'O formato V/F sequência é usado para testar 4 conceitos em uma única questão. A banca costuma manter 3 afirmações verdadeiras e 1 falsa, geralmente a que iguala conceitos que são distintos.',
          exemploInedito: {
            contexto: 'Após uma crise interna, o clima organizacional de um órgão cai (percepção momentânea de insatisfação). No entanto, valores de transparência e ética, enraizados há décadas, permanecem (cultura).',
            aplicacao: 'O clima é a "temperatura" (flutua com eventos — crise faz cair). A cultura é o "DNA" (permanece — valores duradouros). São conceitos distintos: a crise afeta o clima, mas não necessariamente a cultura.',
            desafio: 'Se a cultura é enraizada, é possível mudá-la no curto prazo? Que estratégias um gestor pode adotar para mudar cultura (e não apenas clima)?'
          }
        },
        tags: ['treinamento', 'desenvolvimento', 'clima', 'cultura', 'vf sequência']
      },

      /* ---------- Item 4 — C/E — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-07-04',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 2,
        subtopico: 'Clima x cultura organizacional',
        pergunta: 'Clima organizacional e cultura organizacional são sinônimos: ambos se referem ao conjunto de valores enraizados da organização, que dificilmente muda no curto prazo.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. Clima e cultura NÃO são sinônimos: clima é a percepção momentânea (flutua com eventos); cultura é o conjunto de valores enraizados (duradouro).',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. CLIMA organizacional é a percepção coletiva momentânea sobre o ambiente de trabalho — pode flutuar com eventos (crise, mudança de gestão, conquista). CULTURA organizacional é o conjunto de valores, crenças e pressupostos enraizados — duradouro, difícil de mudar. São conceitos distintos.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela iguala clima e cultura ao dizer que ambos são "valores enraizados que dificilmente mudam". Só a CULTURA tem essa característica. O CLIMA é justamente o oposto: muda com facilidade, flutua com eventos. A confusão é a pegadinha clássica do módulo.'
          },
          conceitoCobrado: 'Distinção entre clima (momentâneo) e cultura (enraizada)',
          pegadinha: 'A palavra "sinônimos" e "dificilmente muda" são os marcadores do erro. Clima muda com facilidade; cultura é que é difícil de mudar. A afirmação tenta estender a característica da cultura ao clima.',
          comoApareceEmConcurso: 'Bancas usam essa distinção com frequência. A afirmação "clima e cultura são sinônimos" é quase sempre FALSA. A dica é memorizar: clima = temperatura; cultura = DNA.',
          exemploInedito: {
            contexto: 'Após uma conquista institucional (prêmio nacional), o clima organizacional melhora rapidamente — servidores se sentem valorizados. No entanto, valores como impessoalidade e meritocracia, construídos ao longo de décadas, permanecem os mesmos.',
            aplicacao: 'O clima flutuou com o evento (prêmio), mas a cultura permaneceu. Isso ilustra a diferença: clima é conjuntural; cultura é estrutural. Se a organização perdesse o prêmio no ano seguinte, o clima cairia, mas a cultura continuaria.',
            desafio: 'Um gestor pode mudar o clima no curto prazo (ex.: com medidas de reconhecimento). Pode mudar a cultura no curto prazo? Por quê?'
          }
        },
        tags: ['clima', 'cultura']
      },

      /* ---------- Item 5 — Situação — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-07-05',
        tipo: 'situacao',
        formato: 'multipla_escolha',
        dificuldade: 2,
        subtopico: 'Classificação de práticas nos processos de gestão de pessoas',
        pergunta: 'Um órgão público está reestruturando suas práticas de gestão de pessoas. Foram propostas cinco ações: (1) realizar concurso público para novos analistas; (2) aplicar prova prática, entrevista e análise curricular; (3) oferecer curso de 40h sobre o novo sistema de protocolo; (4) implementar programa de formação de lideranças para os próximos 3 anos; (5) revisar o plano de cargos e salários. Essas ações correspondem, respectivamente, a:',
        alternativas: [
          { id: 'A', texto: 'recrutamento, seleção, treinamento, desenvolvimento e recompensa.' },
          { id: 'B', texto: 'seleção, recrutamento, desenvolvimento, treinamento e manter.' },
          { id: 'C', texto: 'recrutamento, seleção, desenvolvimento, treinamento e recompensa.' },
          { id: 'D', texto: 'seleção, treinamento, recrutamento, manter e monitorar.' },
          { id: 'E', texto: 'recrutamento, treinamento, seleção, desenvolvimento e recompensa.' }
        ],
        gabarito: 'A',
        explicacao: 'A alternativa A está correta. (1) concurso = recrutamento; (2) prova + entrevista = seleção; (3) curso de 40h sobre sistema = treinamento; (4) formação de lideranças 3 anos = desenvolvimento; (5) plano de cargos e salários = recompensa.',
        explicacaoDetalhada: {
          correta: 'A alternativa A está correta. (1) Concurso público = RECRUTAMENTO (atração). (2) Prova + entrevista + análise = SELEÇÃO (escolha). (3) Curso de 40h sobre sistema = TREINAMENTO (curto prazo, tarefa atual). (4) Formação de lideranças para 3 anos = DESENVOLVIMENTO (longo prazo, futuro). (5) Plano de cargos e salários = RECOMPENSA (remuneração e benefícios).',
          incorretas: {
            B: 'A alternativa troca (1) e (2): concurso público é RECRUTAMENTO (atração), não seleção; prova + entrevista é SELEÇÃO (escolha), não recrutamento. Também troca (3) e (4): curso de 40h é treinamento (curto prazo); formação de lideranças é desenvolvimento (longo prazo). Erra ainda ao classificar plano de cargos como "manter" (é recompensar).',
            C: 'A alternativa acerta (1), (2) e (5), mas erra (3) e (4): curso de 40h é TREINAMENTO (curto prazo, operacional), não desenvolvimento; formação de lideranças para 3 anos é DESENVOLVIMENTO (longo prazo, estratégico), não treinamento. A inversão entre treinamento e desenvolvimento é o erro central.',
            D: 'A alternativa erra praticamente tudo: concurso é recrutamento (não seleção), curso de 40h é treinamento (não treinamento — está certo, mas a ordem está invertida com seleção), prova é seleção (não treinamento). Classifica ainda plano de cargos como "manter" e formação de lideranças como "monitorar" — erros duplos.',
            E: 'A alternativa acerta (1) recrutamento e (5) recompensa, mas erra (2) e (3): prova + entrevista é SELEÇÃO (não treinamento); curso de 40h é TREINAMENTO (não seleção). Erra também ao classificar formação de lideranças como "desenvolvimento" (está certo), mas a inversão de (2) e (3) compromete a resposta.'
          },
          conceitoCobrado: 'Classificação de práticas nos seis processos de gestão de pessoas',
          pegadinha: 'A banca mistura práticas que parecem semelhantes — treinamento x desenvolvimento (curto x longo prazo), recrutamento x seleção (atração x escolha), recompensar x manter (remuneração x QVT/clima). O candidato precisa identificar o critério de cada processo.',
          comoApareceEmConcurso: 'Cenários com 4-5 ações são clássicos para testar os seis processos de gestão de pessoas. A banca costuma embaralhar treinamento x desenvolvimento (curto x longo prazo) e recrutamento x seleção (atração x escolha) — as duas confusões mais comuns.',
          exemploInedito: {
            contexto: 'Um instituto federal: (1) publica edital de concurso para técnicos (recrutamento); (2) aplica prova objetiva e redação (seleção); (3) oferece curso de 20h sobre o novo sistema de protocolo (treinamento); (4) financia mestrado para servidores (desenvolvimento); (5) implanta auxílio-alimentação (recompensa); (6) faz pesquisa de clima (manter).',
            aplicacao: 'Cada prática corresponde a um processo distinto. O curso de 20h sobre sistema é TREINAMENTO (tarefa atual); o mestrado é DESENVOLVIMENTO (futuro). O concurso é RECRUTAMENTO (atração); a prova é SELEÇÃO (escolha). A distinção está no prazo e na natureza.',
            desafio: 'Por que a distinção entre treinamento e desenvolvimento é importante para o orçamento de gestão de pessoas? Que tipo de investimento cada um exige em termos de tempo e recursos?'
          }
        },
        tags: ['gestão de pessoas', 'processos', 'situação aplicada']
      },

      /* ---------- Item 6 — Formato 3 (Associação) — Dificuldade 3 ---------- */
      {
        id: 'D-ADM-07-06',
        tipo: 'multipla_escolha',
        formato: 'associacao',
        dificuldade: 3,
        subtopico: 'Métodos de avaliação de desempenho',
        pergunta: 'Sobre os métodos de avaliação de desempenho, associe corretamente cada MÉTODO à sua CARACTERÍSTICA:\n\nColuna I — Método\n1. Escolha forçada\n2. Escalas gráficas\n3. 360 graus\n\nColuna II — Característica\n( ) Fatores avaliados em escala (ex.: 1 a 5); método simples e amplamente difundido.\n( ) Coleta percepções de chefes, pares, subordinados e autoavaliação.\n( ) Blocos de proposições; o avaliador escolhe a que mais e a que menos representa o avaliado, sem conhecer os escores.',
        alternativas: [
          { id: 'A', texto: '1 – primeira; 2 – segunda; 3 – terceira.' },
          { id: 'B', texto: '1 – segunda; 2 – primeira; 3 – terceira.' },
          { id: 'C', texto: '1 – terceira; 2 – primeira; 3 – segunda.' },
          { id: 'D', texto: '1 – terceira; 2 – segunda; 3 – primeira.' },
          { id: 'E', texto: '1 – segunda; 2 – terceira; 3 – primeira.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C está correta. Escolha forçada (1) → blocos de proposições (terceira). Escalas gráficas (2) → fatores em escala (primeira). 360 graus (3) → múltiplas percepções (segunda).',
        explicacaoDetalhada: {
          correta: 'A alternativa C está correta. Escolha forçada (1) → blocos de proposições; avaliador escolhe a que mais e a que menos representa, sem conhecer os escores (terceira da Coluna II). Escalas gráficas (2) → fatores avaliados em escala (ex.: 1 a 5); método simples e difundido (primeira da Coluna II). 360 graus (3) → coleta percepções de chefes, pares, subordinados e autoavaliação (segunda da Coluna II).',
          incorretas: {
            A: 'A alternativa erra em todas as três: coloca escolha forçada como escalas gráficas, escalas gráficas como 360 graus e 360 graus como escolha forçada. A inversão completa torna a associação inválida.',
            B: 'A alternativa coloca escolha forçada como 360 graus (errado), escalas gráficas como escalas gráficas (correto) e 360 graus como escolha forçada (errado). Só a do meio está certa.',
            D: 'A alternativa acerta (1) → terceira (escolha forçada = blocos de proposições) e erra (2) e (3): escalas gráficas estão na segunda (deveriam estar na primeira) e 360 graus na primeira (deveria estar na segunda). Erro de inversão entre escalas gráficas e 360 graus.',
            E: 'A alternativa coloca escolha forçada como 360 graus (errado), escalas gráficas como escolha forçada (errado) e 360 graus como escalas gráficas (errado). Inversão completa, como em A.'
          },
          conceitoCobrado: 'Métodos de avaliação de desempenho: escolha forçada, escalas gráficas e 360 graus',
          pegadinha: 'Os três métodos são clássicos e frequentemente confundidos. A chave é: escolha forçada = blocos + escores desconhecidos; escalas gráficas = fatores em escala; 360 graus = múltiplas fontes de percepção. A banca embaralha as três características para testar precisão.',
          comoApareceEmConcurso: 'Bancas usam associação de colunas com métodos e características para testar a identificação precisa. É comum embaralhar as colunas de modo que apenas uma combinação esteja integralmente correta.',
          exemploInedito: {
            contexto: 'Em um órgão público, três setores usam métodos distintos: (a) RH usa blocos de frases em que o avaliador escolhe "mais" e "menos" (escolha forçada); (b) a Diretoria usa formulário com notas de 1 a 5 em fatores como "qualidade" e "iniciativa" (escalas gráficas); (c) o Conselho usa avaliação de chefes, pares, subordinados e autoavaliação (360 graus).',
            aplicacao: 'Cada método tem uma lógica: escolha forçada reduz distorções (avaliador não conhece escores); escalas gráficas são simples e difundidas (fáceis de aplicar, mas sujeitas a viés); 360 graus é abrangente (múltiplas fontes, mas complexo de operar).',
            desafio: 'Por que a escolha forçada reduz o viés de leniência (notas altas para todos)? E por que o 360 graus pode gerar conflitos em organizações hierárquicas rígidas?'
          }
        },
        tags: ['avaliação de desempenho', 'escolha forçada', 'escalas gráficas', '360 graus', 'associação']
      },

      /* ---------- Item 7 — Autoavaliação ---------- */
      {
        id: 'D-ADM-07-07',
        tipo: 'autoavaliacao',
        subtopico: 'Distinções fundamentais da gestão de pessoas',
        pergunta: 'Sem consultar, você consegue diferenciar recrutamento x seleção, treinamento x desenvolvimento, clima x cultura e os seis processos de gestão de pessoas (agregar, aplicar, recompensar, desenvolver, manter, monitorar)?',
        resposta: 'RECRUTAMENTO x SELEÇÃO: atração (vitrine) x escolha (peneira). TREINAMENTO x DESENVOLVIMENTO: tarefa atual (curto prazo, operacional) x futuro (longo prazo, estratégico). CLIMA x CULTURA: percepção momentânea (temperatura) x valores enraizados (DNA). PROCESSOS: AGREGAR (recrutamento e seleção); APLICAR (desenho de cargos, avaliação); RECOMPENSAR (remuneração, benefícios); DESENVOLVER (treinamento, carreiras); MANTER (QVT, clima, segurança); MONITORAR (sistemas de informação). MÉTODOS DE AVALIAÇÃO: escolha forçada (blocos com escores desconhecidos); escalas gráficas (fatores em escala, simples); 360 graus (múltiplas fontes). A chave é distinguir prazo (curto x longo) e natureza (atração x escolha; momentâneo x enraizado).'
      }

    ]
  }
  ,

  /* ============================================================
     ADM-10 — Administração de Materiais e Patrimônio
  ============================================================ */
  'ADM-10': {
    id: 'D-ADM-10',
    moduloId: 'ADM-10',
    itens: [

      /* ---------- Item 1 — Formato 6 (EXCETO) — Dificuldade 1 ---------- */
      {
        id: 'D-ADM-10-01',
        tipo: 'multipla_escolha',
        formato: 'excecao',
        dificuldade: 1,
        subtopico: 'Classificação de bens (consumo x permanente)',
        pergunta: 'Sobre a classificação de bens na Administração de Materiais e Patrimônio, assinale a alternativa INCORRETA:',
        alternativas: [
          { id: 'A', texto: 'Papel, caneta e cartucho de tinta são bens de consumo — são consumidos com o uso ou têm vida útil curta.' },
          { id: 'B', texto: 'Bens permanentes são duráveis e, em regra, tombados, como mesas, computadores e veículos.' },
          { id: 'C', texto: 'Bens de consumo são duráveis e, em regra, tombados, pois perduram no patrimônio da organização.' },
          { id: 'D', texto: 'A distinção orienta o controle: bens permanentes recebem número de patrimônio; bens de consumo entram no almoxarifado.' },
          { id: 'E', texto: 'A baixa patrimonial é o procedimento que retira definitivamente um bem permanente do acervo.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C é a INCORRETA. Bens de consumo NÃO são duráveis nem tombados — são consumidos com o uso ou têm vida útil curta. São os bens PERMANENTES que são duráveis e tombados.',
        explicacaoDetalhada: {
          correta: 'A alternativa C está INCORRETA e, por isso, é a resposta. Ela inverte a definição: diz que bens de CONSUMO são duráveis e tombados. Na verdade, é o oposto — bens de consumo (papel, caneta) são consumidos com o uso ou têm vida útil curta; bens PERMANENTES (mesas, computadores) são duráveis e, em regra, tombados.',
          incorretas: {
            A: 'A alternativa está correta e não deve ser marcada. Papel, caneta e cartucho são bens de consumo — duráveis? Não, são consumidos com o uso. Seria INCORRETA se dissesse que são permanentes.',
            B: 'A alternativa está correta e não deve ser marcada. Bens permanentes são duráveis e tombados. Seria INCORRETA se dissesse que são consumidos com o uso — isso é dos bens de consumo.',
            D: 'A alternativa está correta e não deve ser marcada. A distinção orienta o controle: permanentes tombados; consumo no almoxarifado. Seria INCORRETA se dissesse que ambos são tombados.',
            E: 'A alternativa está correta e não deve ser marcada. A baixa patrimonial retira definitivamente o bem do acervo. Seria INCORRETA se dissesse que a baixa transfere o bem a outro setor — isso é movimentação.'
          },
          conceitoCobrado: 'Classificação de bens — consumo x permanente; reflexos no controle patrimonial',
          pegadinha: 'A alternativa C usa a estrutura da alternativa B (que está correta), trocando apenas "permanentes" por "consumo". É a pegadinha do "espelho": induz o candidato a aceitar a frase pela semelhança superficial.',
          comoApareceEmConcurso: 'Bancas costumam inverter pares de classificação (consumo x permanente) em uma única alternativa e manter as demais corretas. A "inversão de pares" é o padrão do formato EXCETO neste módulo.',
          exemploInedito: {
            contexto: 'Um setor de patrimônio de uma prefeitura recebe dois lotes de aquisição: 500 resmas de papel e 20 impressoras. O servidor responsável precisa decidir o destino de cada lote.',
            aplicacao: 'As 500 resmas são bens de CONSUMO (serão usadas e acabarão) — entram no almoxarifado. As 20 impressoras são bens PERMANENTES (duráveis) — são tombadas e incorporadas ao patrimônio. Se o servidor dissesse "as resmas são permanentes porque duram semanas", estaria cometendo o erro da alternativa C.',
            desafio: 'Em um órgão público, o que aconteceria se um servidor tratasse bens de consumo como permanentes? E o inverso? Que transtornos o inventário patrimonial sofreria?'
          }
        },
        tags: ['materiais', 'bens de consumo', 'bens permanentes', 'patrimônio']
      },

      /* ---------- Item 2 — C/E — Dificuldade 1 ---------- */
      {
        id: 'D-ADM-10-02',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 1,
        subtopico: 'Estoque mínimo x estoque de segurança',
        pergunta: 'Estoque mínimo e estoque de segurança são sinônimos: ambos representam exatamente a mesma quantidade de itens.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. Estoque mínimo é o limite operacional (quantidade mínima para não comprometer a operação); estoque de segurança é proteção adicional contra imprevistos (demanda acima do previsto ou atraso de fornecedor).',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. Embora relacionados, NÃO são sinônimos. ESTOQUE MÍNIMO é o limite operacional (quantidade mínima para a operação não ser comprometida). ESTOQUE DE SEGURANÇA é uma proteção ADICIONAL contra imprevistos — demanda acima do previsto ou atraso de fornecedor. O primeiro é operacional; o segundo é contingencial.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela iguala os dois conceitos ao dizer que representam "exatamente a mesma quantidade". O estoque mínimo é a base operacional; o de segurança é o colchão extra. Em um mesmo item, pode haver estoque mínimo de 100 e estoque de segurança de 30 — somam 130, mas não são sinônimos.'
          },
          conceitoCobrado: 'Distinção entre estoque mínimo (operacional) e estoque de segurança (contingencial)',
          pegadinha: 'A palavra "sinônimos" e "exatamente a mesma quantidade" são os marcadores do erro. São conceitos relacionados, mas com naturezas distintas. O de segurança é proteção ADICIONAL ao mínimo.',
          comoApareceEmConcurso: 'Bancas usam essa distinção para testar se o candidato internalizou a diferença entre operação normal e contingência. A afirmação "são sinônimos" é quase sempre FALSA.',
          exemploInedito: {
            contexto: 'Um almoxarifado define: para um item, estoque mínimo = 100 unidades (abaixo disso, a operação fica vulnerável). Estoque de segurança = 40 unidades (proteção extra para atrasos de fornecedor). Ponto de pedido = consumo × tempo de reposição + 40.',
            aplicacao: 'O estoque mínimo (100) é o limite para a operação não parar. O estoque de segurança (40) é o colchão extra para imprevistos. Se o consumo dispara, o de segurança é acionado; se o fornecedor atrasa, também. São conceitos distintos, ainda que relacionados.',
            desafio: 'Se o gestor confundir os dois, que erro de cálculo pode ocorrer? E que consequência prática isso traz para a operação?'
          }
        },
        tags: ['estoque mínimo', 'estoque de segurança']
      },

      /* ---------- Item 3 — Formato 1 (V/F sequência) — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-10-03',
        tipo: 'multipla_escolha',
        formato: 'vf_sequencia',
        dificuldade: 2,
        subtopico: 'Conceitos de gestão de estoques',
        pergunta: 'Sobre conceitos de gestão de estoques, analise as afirmações e assinale a sequência correta:\n\nI. O ponto de pedido é a quantidade de estoque que dispara um novo pedido de compra, calculado como (consumo médio × tempo de reposição) + estoque de segurança.\nII. O giro de estoque é a razão entre consumo médio anual e estoque médio; quanto maior, menos capital parado.\nIII. Estoque mínimo e estoque de segurança são sinônimos: representam sempre a mesma quantidade.\nIV. O lote econômico de compra (LEC) define a quantidade ideal por pedido, equilibrando custo de pedido e custo de armazenagem.',
        alternativas: [
          { id: 'A', texto: 'V – F – V – V.' },
          { id: 'B', texto: 'V – V – F – V.' },
          { id: 'C', texto: 'F – V – V – V.' },
          { id: 'D', texto: 'V – V – V – F.' },
          { id: 'E', texto: 'F – V – F – V.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B está correta: I (V), II (V), III (F), IV (V). A III é falsa: estoque mínimo e de segurança NÃO são sinônimos — um é operacional, o outro é contingencial.',
        explicacaoDetalhada: {
          correta: 'A alternativa B está correta: I (V), II (V), III (F), IV (V). A I está certa: o ponto de pedido é (consumo médio × tempo de reposição) + estoque de segurança. A II está certa: giro = consumo médio anual ÷ estoque médio; maior giro = menos capital parado. A III está FALSA: estoque mínimo (operacional) e de segurança (contingencial) não são sinônimos. A IV está certa: o LEC equilibra custo de pedido e de armazenagem.',
          incorretas: {
            A: 'A alternativa erra ao marcar a II como falsa. O giro de estoque É a razão entre consumo médio anual e estoque médio; quanto maior, menos capital parado. Descartar essa definição é erro conceitual básico.',
            C: 'A alternativa erra ao marcar a I como falsa. O ponto de pedido É calculado como (consumo × tempo de reposição) + estoque de segurança — é a fórmula padrão. Também erra ao marcar a III como verdadeira (ela é falsa).',
            D: 'A alternativa erra ao marcar a III como verdadeira. Estoque mínimo e de segurança NÃO são sinônimos — têm naturezas distintas. Também erra ao marcar a IV como falsa (ela é verdadeira).',
            E: 'A alternativa erra ao marcar a I como falsa (ela é verdadeira) e ao marcar a II como falsa (também verdadeira). É a "alternativa do chute" para quem não internalizou a fórmula do ponto de pedido nem a definição de giro.'
          },
          conceitoCobrado: 'Conceitos operacionais de gestão de estoques: ponto de pedido, giro, mínimo, segurança e LEC',
          pegadinha: 'A III é a afirmação-armadilha: usa "sinônimos" e "sempre a mesma quantidade" para tentar igualar estoque mínimo e de segurança. São conceitos relacionados, mas distintos — um é operacional, o outro é contingencial. É a pegadinha recorrente do módulo.',
          comoApareceEmConcurso: 'O formato V/F sequência é usado para testar 4 conceitos quantitativos em uma única questão. A banca costuma manter 3 afirmações verdadeiras e 1 falsa — geralmente a que iguala conceitos que são distintos.',
          exemploInedito: {
            contexto: 'Um almoxarifado calcula: consumo = 20/dia; tempo de reposição = 5 dias; estoque de segurança = 50. Ponto de pedido = 20 × 5 + 50 = 150. Consumo anual = 7.300; estoque médio = 365. Giro = 7300 ÷ 365 = 20 (renova 20 vezes por ano, ~a cada 18 dias).',
            aplicacao: 'O ponto de pedido dispara a compra quando o estoque chega a 150. O giro de 20 indica alta rotatividade — pouco capital parado. O LEC definiria o tamanho do lote por pedido, minimizando custos. A III, que diz que mínimo e segurança são sinônimos, seria falsa no cenário: o mínimo (150) já inclui o de segurança (50), mas são conceitos distintos.',
            desafio: 'Se o gestor confundir mínimo com segurança e fizer o cálculo do ponto de pedido usando apenas um deles, o que acontece na prática? O pedido dispara antes ou depois do momento adequado?'
          }
        },
        tags: ['gestão de estoques', 'ponto de pedido', 'giro', 'LEC', 'vf sequência']
      },

      /* ---------- Item 4 — C/E — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-10-04',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 2,
        subtopico: 'Tombamento x inventário',
        pergunta: 'O tombamento é a conferência física periódica do acervo; o inventário é a atribuição de número de patrimônio no momento da incorporação.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. A relação está invertida: TOMBAMENTO é a atribuição de número patrimonial no momento da incorporação; INVENTÁRIO é a conferência física periódica do acervo.',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. A relação está invertida. TOMBAMENTO é a ATRIBUIÇÃO de número de patrimônio ao bem no momento de sua incorporação (identificação). INVENTÁRIO é a CONFERÊNCIA física periódica — a contagem e a conciliação do que está registrado com o que efetivamente existe (auditoria do acervo).',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela troca os dois conceitos: chama tombamento de "conferência física" (é identificação) e inventário de "atribuição de número" (é conferência). Fixar: tombamento individualiza o bem; inventário audita o conjunto.'
          },
          conceitoCobrado: 'Distinção entre tombamento (identificação) e inventário (conferência)',
          pegadinha: 'A inversão dos pares é a armadilha. Tombamento = atribuir número (individualizar); inventário = conferir fisicamente (auditar o acervo). A afirmação troca os dois.',
          comoApareceEmConcurso: 'Bancas usam a inversão tombamento x inventário com frequência. A afirmação "tombamento é conferência" é quase sempre FALSA.',
          exemploInedito: {
            contexto: 'Um órgão recebe 30 notebooks. O setor de patrimônio grava em cada um o número de tombamento e registra no sistema (tombamento). Ao final do ano, faz contagem física de todos os bens para comparar com o sistema (inventário).',
            aplicacao: 'O TOMBAMENTO aconteceu na entrada (atribuição de número). O INVENTÁRIO aconteceu no final do ano (conferência física). Se o setor chamasse a contagem de "tombamento", cometeria o erro da afirmação.',
            desafio: 'Por que o inventário periódico é essencial para o controle patrimonial? Que tipo de irregularidade ele pode revelar que o tombamento, sozinho, não revelaria?'
          }
        },
        tags: ['tombamento', 'inventário', 'patrimônio']
      },

      /* ---------- Item 5 — Situação — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-10-05',
        tipo: 'situacao',
        formato: 'multipla_escolha',
        dificuldade: 2,
        subtopico: 'Cálculo do ponto de pedido',
        pergunta: 'Um almoxarifado consome, em média, 15 unidades de um item por dia. O tempo de reposição (prazo de entrega do fornecedor, já incluído o processamento interno) é de 6 dias. O estoque de segurança é de 30 unidades. Com base na fórmula do ponto de pedido — (consumo médio × tempo de reposição) + estoque de segurança —, o valor que dispara um novo pedido de compra é:',
        alternativas: [
          { id: 'A', texto: '90 unidades, pois considera apenas o consumo durante o tempo de reposição.' },
          { id: 'B', texto: '105 unidades, pois soma metade do estoque de segurança.' },
          { id: 'C', texto: '120 unidades, pois soma o consumo durante a reposição ao estoque de segurança.' },
          { id: 'D', texto: '150 unidades, pois considera o consumo médio diário acrescido do estoque de segurança.' },
          { id: 'E', texto: '180 unidades, pois considera o estoque de segurança duas vezes.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C está correta. PP = (15 × 6) + 30 = 90 + 30 = 120 unidades. O ponto de pedido soma o consumo durante o tempo de reposição ao estoque de segurança.',
        explicacaoDetalhada: {
          correta: 'A alternativa C está correta. Ponto de pedido = (consumo médio × tempo de reposição) + estoque de segurança = (15 × 6) + 30 = 90 + 30 = 120 unidades. Esse é o gatilho: quando o estoque chegar a 120, um novo pedido deve ser feito para que o consumo durante a reposição (90) seja coberto e ainda sobrem 30 de segurança.',
          incorretas: {
            A: 'A alternativa considera apenas o consumo durante o tempo de reposição (15 × 6 = 90), esquecendo o estoque de segurança. O ponto de pedido precisa SOMAR o estoque de segurança — é ele que cobre imprevistos (demanda acima do previsto ou atraso do fornecedor). Sem ele, o cálculo fica incompleto.',
            B: 'A alternativa soma metade do estoque de segurança (90 + 15 = 105) — cálculo sem base. A fórmula usa o estoque de segurança INTEGRAL, não a metade. Não há regra de "meio estoque" na fórmula do ponto de pedido.',
            D: 'A alternativa soma o consumo médio DIÁRIO (15) ao estoque de segurança (30), em vez de multiplicar o consumo pelo tempo de reposição. O cálculo correto é (consumo × tempo de reposição) + segurança. Usar apenas o consumo diário subestima drasticamente o ponto de pedido.',
            E: 'A alternativa usa o estoque de segurança duas vezes (90 + 30 + 30 = 150? Não — a descrição diz "duas vezes", mas o valor 180 corresponde a 15 × 6 + 30 + 60). É um distrator construído para capturar quem confunde a fórmula. O estoque de segurança entra UMA única vez, somado ao consumo durante a reposição.'
          },
          conceitoCobrado: 'Cálculo do ponto de pedido — (consumo médio × tempo de reposição) + estoque de segurança',
          pegadinha: 'A banca oferece o resultado de cada erro clássico: esquecer o estoque de segurança (A); usar metade (B); esquecer o tempo de reposição (D); duplicar o estoque de segurança (E). O candidato precisa aplicar a fórmula completa para acertar.',
          comoApareceEmConcurso: 'O ponto de pedido é a principal aplicação quantitativa do módulo. A banca costuma dar dados numéricos e oferecer 4-5 alternativas que refletem erros comuns de cálculo. A chave é aplicar a fórmula completa: consumo × tempo de reposição + estoque de segurança.',
          exemploInedito: {
            contexto: 'Um hospital consome 40 unidades de luva cirúrgica por dia. O prazo de entrega do fornecedor é de 3 dias. O estoque de segurança definido é de 100 unidades. Qual deve ser o ponto de pedido?',
            aplicacao: 'PP = (40 × 3) + 100 = 120 + 100 = 220 unidades. Quando o estoque chegar a 220, um novo pedido deve ser disparado. Se o hospital usasse apenas 40 × 3 = 120, ficaria sem margem para imprevistos e poderia faltar luva em uma semana de pico.',
            desafio: 'Se o hospital aumentar o estoque de segurança de 100 para 150, o que acontece com o ponto de pedido? Qual a consequência prática (mais seguro x mais custo de armazenagem)?'
          }
        },
        tags: ['ponto de pedido', 'gestão de estoques', 'cálculo', 'situação aplicada']
      },

      /* ---------- Item 6 — Formato 4 (Lacunas) — Dificuldade 3 ---------- */
      {
        id: 'D-ADM-10-06',
        tipo: 'multipla_escolha',
        formato: 'lacunas',
        dificuldade: 3,
        subtopico: 'Procedimentos patrimoniais: tombamento, inventário, baixa e movimentação',
        pergunta: 'Complete corretamente:\n\n"A ______ é o procedimento pelo qual se atribui número de identificação patrimonial ao bem no momento de sua incorporação ao acervo. Já o ______ é a conferência física periódica que compara os registros contábeis com os bens efetivamente existentes. Quando o bem é retirado definitivamente do acervo (por alienação, sinistro, obsolescência ou furto), procede-se à ______ patrimonial. Já a transferência de um bem entre setores da mesma organização, sem saída do acervo, é chamada de ______."',
        alternativas: [
          { id: 'A', texto: 'movimentação — baixa — transferência — tombamento.' },
          { id: 'B', texto: 'incorporação — vistoria — alienação — inventário.' },
          { id: 'C', texto: 'catalogação — apuração — depreciação — movimentação.' },
          { id: 'D', texto: 'tombamento — inventário — baixa — movimentação.' },
          { id: 'E', texto: 'identificação — contagem — alienação — baixa.' }
        ],
        gabarito: 'D',
        explicacao: 'A alternativa D está correta. Tombamento (atribuição de número patrimonial) → inventário (conferência física periódica) → baixa patrimonial (saída definitiva do acervo) → movimentação (transferência entre setores).',
        explicacaoDetalhada: {
          correta: 'A alternativa D está correta. A sequência é: TOMBAMENTO (atribuição de número no momento da incorporação) → INVENTÁRIO (conferência física periódica, conciliação com os registros) → BAIXA (saída definitiva do acervo, por alienação, sinistro, obsolescência ou furto) → MOVIMENTAÇÃO (transferência entre setores da mesma organização, sem sair do acervo).',
          incorretas: {
            A: 'A alternativa começa invertida: "movimentação" não atribui número patrimonial — isso é tombamento. Também erra ao colocar "baixa" como conferência física (é saída definitiva) e "transferência" como saída definitiva (transferência é entre setores, sem saída). A sequência está desordenada em todos os pontos.',
            B: 'A alternativa usa termos imprecisos: "incorporação" não é o nome técnico do procedimento de atribuição de número (é tombamento); "vistoria" não é o nome da conferência física (é inventário); "alienação" é apenas UMA das formas de baixa (não sinônimo de baixa); e "inventário" não é transferência entre setores (é conferência). Termos trocados em todos os pontos.',
            C: 'A alternativa usa termos inexistentes ou inadequados: "catalogação" não é o nome técnico (é tombamento); "apuração" não é conferência física (é inventário); "depreciação" é fenômeno contábil, não saída do acervo (é baixa); e "movimentação" está correta, mas os três primeiros comprometem a alternativa.',
            E: 'A alternativa embaralha termos: "identificação" é genérico (o técnico é tombamento); "contagem" é uma etapa do inventário, não o nome do procedimento; "alienação" é apenas uma forma de baixa (não sinônimo); e "baixa" não é transferência entre setores (é saída definitiva).'
          },
          conceitoCobrado: 'Procedimentos patrimoniais: tombamento, inventário, baixa e movimentação',
          pegadinha: 'A questão exige distinguir 4 procedimentos que costumam ser confundidos: tombamento (atribuição de número), inventário (conferência física), baixa (saída definitiva) e movimentação (transferência interna). A banca embaralha os termos e usa sinônimos imprecisos para confundir.',
          comoApareceEmConcurso: 'O formato lacunas é usado para testar terminologia técnica com precisão. A banca costuma oferecer alternativas com termos genéricos ("identificação", "catalogação") ou com sinônimos imprecisos ("alienação" no lugar de "baixa") para capturar quem sabe "mais ou menos".',
          exemploInedito: {
            contexto: 'Um órgão recebe 10 computadores. O setor de patrimônio: (1) grava número em cada um e registra no sistema; (2) ao final do ano, confere fisicamente todos os bens; (3) doa 2 computadores antigos para uma escola; (4) transfere 3 computadores do setor A para o setor B.',
            aplicacao: '(1) TOMBAMENTO; (2) INVENTÁRIO; (3) BAIXA (alienação/doação); (4) MOVIMENTAÇÃO (transferência interna, sem saída do acervo). Se o setor chamasse a doação de "movimentação", erraria — movimentação é interna, sem saída.',
            desafio: 'Se um computador é furtado, qual procedimento deve ser adotado? É baixa, movimentação ou algo distinto? Como registrar corretamente no patrimônio?'
          }
        },
        tags: ['tombamento', 'inventário', 'baixa', 'movimentação', 'lacunas']
      },

      /* ---------- Item 7 — Autoavaliação ---------- */
      {
        id: 'D-ADM-10-07',
        tipo: 'autoavaliacao',
        subtopico: 'Conceitos fundamentais de materiais e patrimônio',
        pergunta: 'Sem consultar, você consegue diferenciar bem de consumo x bem permanente, estoque mínimo x estoque de segurança, ponto de pedido x giro de estoque, tombamento x inventário e baixa x movimentação patrimonial?',
        resposta: 'BEM DE CONSUMO x PERMANENTE: consumido com o uso (papel, caneta) x durável e, em regra, tombado (móveis, equipamentos). ESTOQUE MÍNIMO x DE SEGURANÇA: limite operacional x proteção adicional contra imprevistos. PONTO DE PEDIDO x GIRO: gatilho da compra (consumo médio × tempo de reposição + estoque de segurança) x indicador de renovação (consumo médio anual ÷ estoque médio). TOMBAMENTO x INVENTÁRIO: identificação (atribuição de número patrimonial) x conferência física periódica do acervo. BAIXA x MOVIMENTAÇÃO: saída definitiva do acervo (alienação, sinistro, obsolescência, furto) x transferência entre setores, sem saída do acervo. O LEC define a quantidade ideal por pedido, equilibrando custo de pedido e de armazenagem.'
      }

    ]
  },

  /* ============================================================
     ADM-11 — Gestão de Processos
  ============================================================ */
  'ADM-11': {
    id: 'D-ADM-11',
    moduloId: 'ADM-11',
    itens: [

      /* ---------- Item 1 — Formato 6 (EXCETO) — Dificuldade 1 ---------- */
      {
        id: 'D-ADM-11-01',
        tipo: 'multipla_escolha',
        formato: 'excecao',
        dificuldade: 1,
        subtopico: 'Processo x projeto',
        pergunta: 'Sobre a distinção entre processo e projeto, assinale a alternativa INCORRETA:',
        alternativas: [
          { id: 'A', texto: 'Processo é contínuo e repetitivo, gerando o mesmo tipo de saída em cada ciclo de execução.' },
          { id: 'B', texto: 'Projeto é temporário e único, com começo, meio e fim definidos, e resultado singular.' },
          { id: 'C', texto: 'Processo e projeto se distinguem pela natureza contínua x temporária de suas atividades.' },
          { id: 'D', texto: 'Processo é único e temporário; projeto é contínuo e repetitivo.' },
          { id: 'E', texto: 'A gestão por processos organiza o fluxo ponta a ponta, com foco no valor entregue ao cidadão.' }
        ],
        gabarito: 'D',
        explicacao: 'A alternativa D é a INCORRETA. Ela inverte os conceitos: processo é contínuo e repetitivo; projeto é único e temporário. A alternativa D troca os dois.',
        explicacaoDetalhada: {
          correta: 'A alternativa D está INCORRETA e, por isso, é a resposta. Ela inverte a definição: diz que "processo é único e temporário" (errado — processo é contínuo e repetitivo) e que "projeto é contínuo e repetitivo" (errado — projeto é temporário e único). A definição correta é o oposto: processo = contínuo; projeto = temporário.',
          incorretas: {
            A: 'A alternativa está correta e não deve ser marcada. Processo é contínuo e repetitivo, gerando o mesmo tipo de saída em cada ciclo. Seria INCORRETA se dissesse que processo é único — isso é projeto.',
            B: 'A alternativa está correta e não deve ser marcada. Projeto é temporário e único, com começo, meio e fim, e resultado singular. Seria INCORRETA se dissesse que projeto é contínuo — isso é processo.',
            C: 'A alternativa está correta e não deve ser marcada. A distinção entre processo e projeto passa, sim, pela natureza contínua x temporária. Seria INCORRETA se dissesse que ambos são contínuos ou ambos temporários.',
            E: 'A alternativa está correta e não deve ser marcada. A gestão por processos organiza o fluxo ponta a ponta, com foco no valor. Seria INCORRETA se dissesse que a gestão por processos é o mesmo que gestão funcional — são abordagens distintas.'
          },
          conceitoCobrado: 'Distinção entre processo (contínuo/repetitivo) e projeto (temporário/único)',
          pegadinha: 'A alternativa D usa a estrutura da A e da B (que estão corretas), trocando os rótulos. É a "inversão de pares" clássica: induz o candidato a aceitar pela semelhança superficial. Fixar: processo = contínuo; projeto = temporário.',
          comoApareceEmConcurso: 'Bancas usam a inversão processo x projeto em uma única alternativa do formato EXCETO, mantendo as demais corretas. É o padrão do módulo.',
          exemploInedito: {
            contexto: 'Em uma prefeitura, a matrícula escolar ocorre todos os anos (processo), com as mesmas etapas. Já a implantação de um novo sistema de matrícula é uma iniciativa com prazo de 8 meses (projeto).',
            aplicacao: 'A matrícula é CONTÍNUA (repete-se a cada ano, gera a mesma saída). A implantação do sistema é TEMPORÁRIA (começo, meio e fim, resultado singular). Se alguém dissesse que "a matrícula é um projeto", inverteria os conceitos — exatamente o erro da alternativa D.',
            desafio: 'Se a prefeitura faz uma reforma no prédio da escola, isso é processo ou projeto? E se implanta um programa de alimentação escolar permanente? Justifique.'
          }
        },
        tags: ['processo', 'projeto', 'distinção']
      },

      /* ---------- Item 2 — C/E — Dificuldade 1 ---------- */
      {
        id: 'D-ADM-11-02',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 1,
        subtopico: 'Processos finalísticos x de apoio',
        pergunta: 'Processos de apoio geram valor direto ao cidadão; processos finalísticos sustentam os finalísticos internamente.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. A relação está invertida: processos FINALÍSTICOS geram valor direto ao cidadão; processos DE APOIO sustentam os finalísticos internamente.',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. A relação está invertida. Processos FINALÍSTICOS (ou de negócio) geram valor DIRETO ao cliente/cidadão (ex.: emissão de alvará, matrícula escolar). Processos DE APOIO (ou de suporte) sustentam os finalísticos internamente (ex.: RH, compras, TI). A afirmação troca os dois.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela chama de "apoio" o que é finalístico (valor direto ao cidadão) e de "finalístico" o que é apoio (sustentação interna). Fixar: finalístico = ponta (cidadão); apoio = suporte (interno).'
          },
          conceitoCobrado: 'Distinção entre processos finalísticos (valor direto) e de apoio (sustentação interna)',
          pegadinha: 'A inversão dos pares é a armadilha. Finalístico = valor DIRETO ao cidadão; apoio = sustenta internamente. A afirmação troca os dois. Palavras-chave: "direto ao cidadão" (finalístico) x "sustentam internamente" (apoio).',
          comoApareceEmConcurso: 'Bancas usam a inversão finalístico x apoio com frequência. A afirmação que troca os dois é quase sempre FALSA.',
          exemploInedito: {
            contexto: 'Em um INSS, a concessão de aposentadoria é um processo finalístico (entrega valor direto ao cidadão). Já a contratação de servidores pelo RH é processo de apoio (sustenta internamente os finalísticos).',
            aplicacao: 'O cidadão vê o finalístico (aposentadoria); o servidor vê os dois. Se alguém dissesse "o RH é finalístico porque atende servidores", erraria — servidores são público interno; o finalístico atende o cidadão externo.',
            desafio: 'Em uma Secretaria de Educação, quais processos são finalísticos e quais são de apoio? Liste 2 de cada.'
          }
        },
        tags: ['processos finalísticos', 'processos de apoio']
      },

      /* ---------- Item 3 — Formato 2 (I, II, III) — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-11-03',
        tipo: 'multipla_escolha',
        formato: 'afirmacoes_romanas',
        dificuldade: 2,
        subtopico: 'Mapeamento de processos (AS-IS / TO-BE)',
        pergunta: 'Sobre o mapeamento de processos, analise as afirmações a seguir:\n\nI. O mapeamento permite visualizar o fluxo atual (AS-IS) antes de propor a situação desejada (TO-BE).\nII. O mapeamento dispensa o envolvimento dos executores, pois é tarefa técnica exclusiva da equipe de processos.\nIII. O mapeamento tem como principal objetivo punir servidores que atrasam o processo.\n\nEstão corretas:',
        alternativas: [
          { id: 'A', texto: 'Apenas I.' },
          { id: 'B', texto: 'Apenas II.' },
          { id: 'C', texto: 'Apenas I e II.' },
          { id: 'D', texto: 'Apenas II e III.' },
          { id: 'E', texto: 'I, II e III.' }
        ],
        gabarito: 'A',
        explicacao: 'A alternativa A está correta. Apenas I é verdadeira. A II é falsa (o mapeamento exige envolvimento dos executores) e a III é falsa (o objetivo é melhorar, não punir).',
        explicacaoDetalhada: {
          correta: 'A alternativa A está correta. A afirmação I está certa: o mapeamento visualiza o AS-IS antes de propor o TO-BE. A II está INCORRETA: o mapeamento exige envolvimento dos executores — são eles que conhecem o processo na prática. A III está INCORRETA: o objetivo é diagnosticar e melhorar, não punir.',
          incorretas: {
            B: 'A afirmação II está incorreta — o mapeamento NÃO dispensa os executores, pelo contrário, depende deles. A I está correta. Portanto, "apenas II" não procede.',
            C: 'A afirmação II está incorreta — incluir a II como correta é o erro central. O mapeamento envolve quem executa; não é tarefa exclusiva da equipe técnica.',
            D: 'As afirmações II e III estão ambas incorretas. Incluir as duas como corretas é erro duplo. O mapeamento envolve executores (não é exclusivo) e visa melhoria (não punição).',
            E: 'Não é possível aceitar as três. A II e a III são falsas — confundem o mapeamento com tarefa técnica isolada e com punição. Incluir ambas é o erro máximo.'
          },
          conceitoCobrado: 'Mapeamento de processos — finalidade (AS-IS/TO-BE) e método (envolvimento de executores)',
          pegadinha: 'As afirmações II e III trazem duas visões distorcidas: a de que mapeamento é tarefa técnica isolada (sem executores) e a de que mapeamento serve para punir. Ambas são erros comuns de quem confunde mapeamento com auditoria ou com avaliação de desempenho.',
          comoApareceEmConcurso: 'Bancas usam afirmações com distorções comuns para testar se o candidato internalizou a finalidade do mapeamento (melhoria) e o método (participação dos executores). A afirmação II é a mais recorrente — muita gente acha que mapeamento é "coisa de especialista".',
          exemploInedito: {
            contexto: 'Uma Secretaria de Saúde decide mapear o processo de agendamento de consultas. Forma um grupo com servidores da recepção, da triagem, da TI e da gestão. Juntos, desenham o fluxo atual (AS-IS), identificam gargalos e propõem o fluxo desejado (TO-BE).',
            aplicacao: 'O envolvimento dos executores é essencial — são eles que conhecem as dificuldades do dia a dia. Se só a equipe técnica fizesse o mapeamento, o resultado seria teórico e distante da realidade. E o objetivo é melhorar, não punir ninguém.',
            desafio: 'Se o mapeamento fosse feito apenas pela equipe técnica, sem os executores, que tipo de informação crucial poderia ficar de fora? Pense em "gambiarras" e adaptações informais.'
          }
        },
        tags: ['mapeamento', 'AS-IS', 'TO-BE', 'afirmações romanas']
      },

      /* ---------- Item 4 — C/E — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-11-04',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 2,
        subtopico: 'Gargalo',
        pergunta: 'Gargalo é a etapa que limita a capacidade total do processo; está onde há acúmulo ou espera, e a melhoria deve começar por ele.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'A afirmação é CERTA. Gargalo é a etapa que limita a capacidade total do processo — está onde há acúmulo/espera, e a melhoria deve começar por ele.',
        explicacaoDetalhada: {
          correta: 'A afirmação é CERTA. GARGALO é a etapa que LIMITA a capacidade total do processo. Está onde há ACÚMULO ou ESPERA. Melhorar o que não é gargalo não aumenta a capacidade do todo — a melhoria deve começar pelo gargalo. É o princípio da Teoria das Restrições aplicado à gestão de processos.',
          incorretas: {
            F: 'A afirmação não é falsa. Ela descreve corretamente o gargalo: a etapa que limita a capacidade total, onde há acúmulo/espera, e por onde a melhoria deve começar. Tratar como falsa indicaria desconhecimento do conceito de gargalo.'
          },
          conceitoCobrado: 'Definição de gargalo e sua centralidade na melhoria de processos',
          pegadinha: 'A intuição leva a pensar que a primeira ou a última etapa é sempre o gargalo — não. O gargalo é identificado pelo ACÚMULO/ESPERA, e pode estar em qualquer etapa. A afirmação está correta justamente por evitar o senso comum.',
          comoApareceEmConcurso: 'Bancas testam o conceito de gargalo com frequência. Afirmações como "gargalo é sempre a primeira etapa" são quase sempre FALSAS; já a definição correta (etapa que limita a capacidade, com acúmulo) é VERDADEIRA.',
          exemploInedito: {
            contexto: 'Em um processo de licenciamento, a etapa de análise jurídica acumula 200 processos em espera, enquanto a recepção e a emissão final operam normalmente. O tempo médio de licenciamento é de 60 dias, dos quais 40 são de espera na análise jurídica.',
            aplicacao: 'O gargalo é a análise jurídica — é ela que limita a capacidade total. Reforçar a recepção ou a emissão final não reduziria o tempo total; só intervir na análise jurídica (mais servidores, padronização, triagem prévia) reduziria o tempo. Isso ilustra a regra: melhorar o que não é gargalo não resolve.',
            desafio: 'Se você fosse gestor do licenciamento e só pudesse investir em UMA etapa, em qual investiria? Justifique com base no conceito de gargalo.'
          }
        },
        tags: ['gargalo', 'gestão de processos']
      },

      /* ---------- Item 5 — Situação — Dificuldade 2 ---------- */
      {
        id: 'D-ADM-11-05',
        tipo: 'situacao',
        formato: 'multipla_escolha',
        dificuldade: 2,
        subtopico: 'Identificação de gargalo em cenário',
        pergunta: 'Em uma Secretaria de Educação, o processo de matrícula escolar tem o fluxo: inscrição → conferência de documentos → análise de vagas → confirmação. Nos últimos meses, o tempo total de matrícula subiu de 5 para 15 dias. Ao mapear o fluxo, a equipe identificou que a etapa de análise de vagas acumula pedidos, enquanto as demais operam normalmente, sem fila de espera. Qual é o gargalo e a ação mais adequada?',
        alternativas: [
          { id: 'A', texto: 'Inscrição; ampliar o número de guichês de inscrição para acelerar a entrada de pedidos.' },
          { id: 'B', texto: 'Conferência de documentos; digitalizar a conferência para reduzir o tempo de análise documental.' },
          { id: 'C', texto: 'Confirmação; contratar mais servidores para confirmar matrículas com mais rapidez.' },
          { id: 'D', texto: 'Não há gargalo; o aumento do tempo é comportamental da equipe e se resolve com motivação.' },
          { id: 'E', texto: 'Análise de vagas; intervir nessa etapa (ampliar capacidade de análise) antes de atuar nas demais.' }
        ],
        gabarito: 'E',
        explicacao: 'A alternativa E está correta. O gargalo é a análise de vagas (etapa que acumula pedidos e limita o fluxo total). A ação adequada é intervir nessa etapa, antes de atuar nas demais.',
        explicacaoDetalhada: {
          correta: 'A alternativa E está correta. O GARGALO é a análise de vagas — é a etapa que acumula pedidos, enquanto as demais operam normalmente. Pelo conceito de gargalo, a melhoria deve começar por ele. Intervir nas demais etapas (inscrição, conferência, confirmação) não resolveria o problema, pois elas não estão limitando o fluxo.',
          incorretas: {
            A: 'A alternativa aponta a inscrição como gargalo, mas a inscrição opera normalmente — não há fila nela. Melhorar a inscrição (mais guichês) não reduziria o tempo total, pois o gargalo está na análise de vagas. Erro de identificação do gargalo (confundiu primeira etapa com gargalo).',
            B: 'A alternativa aponta a conferência de documentos, mas ela também opera normalmente. Melhorar a conferência (digitalização) seria útil em outro contexto, mas não resolveria o gargalo da análise de vagas. Erro de identificação (confundiu etapa intermediária com gargalo).',
            C: 'A alternativa aponta a confirmação, mas ela opera normalmente. Contratar mais servidores para confirmar não reduziria o tempo total — a confirmação já está fluindo. Erro de identificação (confundiu última etapa com gargalo).',
            D: 'A alternativa nega a existência de gargalo e atribui o aumento a "problema comportamental". Ignora a evidência do enunciado: há acúmulo de pedidos na análise de vagas. Não reconhecer o gargalo é erro central de quem não domina o conceito.'
          },
          conceitoCobrado: 'Identificação de gargalo em cenário aplicado e escolha da ação mais adequada',
          pegadinha: 'A banca descreve o cenário com uma etapa que acumula pedidos (análise de vagas) e induz o candidato a olhar para as etapas "extremas" (inscrição, confirmação). A chave é identificar onde há acúmulo/espera — e é lá que a melhoria deve começar.',
          comoApareceEmConcurso: 'Cenários de gargalo são clássicos. A banca costuma destacar uma etapa que acumula e outras que operam normalmente, e oferecer alternativas que apontam para as etapas "naturais" (primeira, última) para capturar quem não domina o conceito.',
          exemploInedito: {
            contexto: 'Em uma Secretaria de Obras, o fluxo de emissão de alvará é: protocolo → análise técnica → vistoria → emissão. A análise técnica acumula 80 processos; o protocolo, a vistoria e a emissão operam sem fila.',
            aplicacao: 'O gargalo é a análise técnica. Melhorar o protocolo (mais guichês) ou a emissão (mais servidores) não reduziria o tempo total — só a análise técnica resolveria. É o mesmo raciocínio do cenário da matrícula.',
            desafio: 'Se você fosse gestor do alvará e tivesse um orçamento limitado, investiria em quê? Justifique com base no gargalo identificado.'
          }
        },
        tags: ['gargalo', 'situação aplicada', 'gestão de processos']
      },

      /* ---------- Item 6 — Formato 3 (Associação) — Dificuldade 3 ---------- */
      {
        id: 'D-ADM-11-06',
        tipo: 'multipla_escolha',
        formato: 'associacao',
        dificuldade: 3,
        subtopico: 'Tipos de processo (finalístico, apoio, macroprocesso)',
        pergunta: 'Sobre os tipos de processo, associe corretamente cada TIPO ao seu EXEMPLO característico:\n\nColuna I — Tipo\n1. Processo finalístico\n2. Processo de apoio\n3. Macroprocesso\n\nColuna II — Exemplo\n( ) Cadeia de contratação pública (demanda → licitação → contrato → execução), envolvendo múltiplos setores.\n( ) Emissão de alvará de funcionamento ao cidadão.\n( ) Contratação de pessoal pelo RH para atender demandas internas de servidores.',
        alternativas: [
          { id: 'A', texto: '1 – primeira; 2 – segunda; 3 – terceira.' },
          { id: 'B', texto: '1 – segunda; 2 – terceira; 3 – primeira.' },
          { id: 'C', texto: '1 – terceira; 2 – primeira; 3 – segunda.' },
          { id: 'D', texto: '1 – segunda; 2 – primeira; 3 – terceira.' },
          { id: 'E', texto: '1 – terceira; 2 – segunda; 3 – primeira.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B está correta. Finalístico (1) → emissão de alvará (segunda). Apoio (2) → RH (terceira). Macroprocesso (3) → cadeia de contratação (primeira).',
        explicacaoDetalhada: {
          correta: 'A alternativa B está correta. Processo FINALÍSTICO (1) → emissão de alvará ao cidadão (segunda da Coluna II) — entrega valor DIRETO ao cidadão. Processo DE APOIO (2) → contratação de pessoal pelo RH (terceira da Coluna II) — sustenta internamente. MACROPROCESSO (3) → cadeia de contratação pública (primeira da Coluna II) — envolve múltiplos processos e setores.',
          incorretas: {
            A: 'A alternativa associa finalístico à cadeia de contratação (errado — isso é macroprocesso), apoio à emissão de alvará (errado — isso é finalístico) e macroprocesso ao RH (errado — isso é apoio). Inverteu os três tipos.',
            C: 'A alternativa coloca finalístico como cadeia (errado — é macroprocesso), apoio como emissão de alvará (errado — é finalístico) e macroprocesso como RH (errado — é apoio). Inverteu os três.',
            D: 'A alternativa associa finalístico à emissão de alvará (correto) e erra as outras duas: coloca apoio como cadeia de contratação (errado — é macroprocesso) e macroprocesso como RH (errado — é apoio). Só a primeira está certa.',
            E: 'A alternativa coloca finalístico como cadeia (errado — é macroprocesso), apoio como RH (correto) e macroprocesso como emissão de alvará (errado — é finalístico). Só a do meio está certa.'
          },
          conceitoCobrado: 'Distinção entre processo finalístico, de apoio e macroprocesso',
          pegadinha: 'Os três conceitos se confundem: finalístico (valor direto ao cidadão), apoio (sustentação interna) e macroprocesso (cadeia ampla, multissetorial). A banca embaralha os exemplos e exige identificar a natureza de cada um. A cadeia de contratação é macroprocesso — não finalístico, ainda que envolva valor público.',
          comoApareceEmConcurso: 'Bancas usam associação de colunas com tipos e exemplos para testar precisão conceitual. É comum embaralhar as colunas de modo que apenas uma combinação esteja integralmente correta.',
          exemploInedito: {
            contexto: 'Em um ministério: (a) emissão de passaporte ao cidadão (finalístico); (b) manutenção predial (apoio); (c) cadeia de gestão de pessoas (recrutamento → seleção → capacitação → avaliação), envolvendo múltiplos setores (macroprocesso).',
            aplicacao: '(a) entrega valor direto ao cidadão; (b) sustenta internamente; (c) é uma cadeia ampla, multissetorial. Se alguém dissesse "a cadeia de gestão de pessoas é finalística porque serve ao cidadão", erraria — servidores são público interno; o finalístico atende o cidadão externo.',
            desafio: 'Por que a cadeia de contratação pública é classificada como macroprocesso, e não como finalístico, mesmo envolvendo valor público? Reflita sobre a natureza (cadeia ampla x entrega direta).'
          }
        },
        tags: ['processos', 'finalístico', 'apoio', 'macroprocesso', 'associação']
      },

      /* ---------- Item 7 — Autoavaliação ---------- */
      {
        id: 'D-ADM-11-07',
        tipo: 'autoavaliacao',
        subtopico: 'Conceitos fundamentais de gestão por processos',
        pergunta: 'Sem consultar, você consegue diferenciar processo x projeto, finalístico x apoio, melhoria contínua x reengenharia, atividade x tarefa e identificar um gargalo em um fluxo?',
        resposta: 'PROCESSO x PROJETO: contínuo/repetitivo x temporário/único. FINALÍSTICO x APOIO: valor direto ao cidadão (ex.: alvará, certidão) x suporte interno (ex.: RH, compras, TI). MELHORIA CONTÍNUA x REENGENHARIA: incremental (ajustes sucessivos) x radical (redesenho "do zero"). ATIVIDADE x TAREFA: unidade de trabalho dentro do processo (ex.: conferir documentos) x subdivisão com execução individual (ex.: carimbar protocolo). GARGALO: etapa que limita a capacidade total do processo — está onde há acúmulo/espera; a melhoria deve começar por ele. MAPEAMENTO: visualiza o fluxo atual (AS-IS) antes de propor o desejado (TO-BE); exige envolvimento dos executores (não é tarefa exclusiva da equipe técnica); visa melhoria, não punição. MACROPROCESSO: cadeia ampla, multissetorial, que envolve múltiplos processos.'
      }

    ]
  }
  ,

  /* ============================================================
     AP-13 — Conceitos fundamentais de Administração Pública
  ============================================================ */
  'AP-13': {
    id: 'D-AP-13',
    moduloId: 'AP-13',
    itens: [

      /* ---------- Item 1 — Formato 6 (EXCETO) — Dificuldade 1 ---------- */
      {
        id: 'D-AP-13-01',
        tipo: 'multipla_escolha',
        formato: 'excecao',
        dificuldade: 1,
        subtopico: 'Sentidos da Administração Pública (amplo x restrito; objetivo x subjetivo)',
        pergunta: 'Sobre os sentidos da expressão "Administração Pública", assinale a alternativa INCORRETA:',
        alternativas: [
          { id: 'A', texto: 'Em sentido objetivo (material), designa a própria atividade administrativa — o que a Administração faz.' },
          { id: 'B', texto: 'Em sentido subjetivo (formal ou orgânico), designa o conjunto de órgãos e pessoas que exercem a atividade administrativa — quem a exerce.' },
          { id: 'C', texto: 'Em sentido amplo, abrange os três Poderes quando exercem função administrativa, além de órgãos auxiliares.' },
          { id: 'D', texto: 'Em sentido subjetivo, designa a atividade administrativa em si (o que se faz); em sentido objetivo, os órgãos que a exercem.' },
          { id: 'E', texto: 'Em sentido restrito, abrange apenas o Poder Executivo.' }
        ],
        gabarito: 'D',
        explicacao: 'A alternativa D é a INCORRETA. Ela inverte os sentidos: subjetivo é "quem faz" (órgãos); objetivo é "o que faz" (atividade). A alternativa D troca os dois.',
        explicacaoDetalhada: {
          correta: 'A alternativa D está INCORRETA e, por isso, é a resposta. Ela inverte a definição dos sentidos: diz que "subjetivo" designa a atividade (o que se faz) e que "objetivo" designa os órgãos (quem faz). O correto é o oposto: SUBJETIVO (formal/orgânico) = conjunto de órgãos e pessoas (quem faz); OBJETIVO (material) = atividade administrativa (o que se faz).',
          incorretas: {
            A: 'A alternativa está correta e não deve ser marcada. Sentido objetivo = atividade administrativa (o que se faz). Seria INCORRETA se dissesse que objetivo se refere aos órgãos — isso é subjetivo.',
            B: 'A alternativa está correta e não deve ser marcada. Sentido subjetivo = conjunto de órgãos e pessoas (quem faz). Seria INCORRETA se dissesse que subjetivo se refere à atividade — isso é objetivo.',
            C: 'A alternativa está correta e não deve ser marcada. Sentido amplo = três Poderes em função administrativa + órgãos auxiliares. Seria INCORRETA se dissesse que amplo se restringe ao Executivo — isso é o restrito.',
            E: 'A alternativa está correta e não deve ser marcada. Sentido restrito = apenas o Poder Executivo. Seria INCORRETA se dissesse que restrito abrange os três Poderes — isso é o amplo.'
          },
          conceitoCobrado: 'Distinção entre sentidos amplo/restrito e objetivo/subjetivo da Administração Pública',
          pegadinha: 'A confusão mais comum é entre OBJETIVO (material — a atividade) e SUBJETIVO (formal/orgânico — os órgãos). A palavra "subjetivo" pode sugerir "atividade" a quem pensa em "subjetividade", mas no Direito Administrativo a convenção é outra: subjetivo = sujeito = quem faz. Fixar: OBJETIVO = objeto = o que se faz; SUBJETIVO = sujeito = quem faz.',
          comoApareceEmConcurso: 'Bancas costumam trocar os quatro sentidos em uma única alternativa do formato EXCETO. A dica mnemônica: OBJETIVO = objeto = atividade; SUBJETIVO = sujeito = pessoa/órgão; AMPLO = três Poderes; RESTRITO = só Executivo.',
          exemploInedito: {
            contexto: 'Quando o INSS emite uma certidão de tempo de contribuição, temos: (a) a ATIVIDADE (emissão da certidão) — sentido objetivo; (b) o CONJUNTO de órgãos e servidores que emitem — sentido subjetivo. Quando o Judiciário faz licitação para comprar computadores, temos função administrativa em outro Poder — sentido amplo.',
            aplicacao: 'A distinção fica clara quando o candidato separa "o que se faz" (objetivo) de "quem faz" (subjetivo). A alternativa D troca os dois — erro clássico. Se o INSS fosse descrito como "atividade" (subjetivo) e a certidão como "órgão" (objetivo), seria o erro da D.',
            desafio: 'Em uma situação concreta do seu cotidiano (ex.: uma vacinação, um alvará, uma multa), identifique o sentido objetivo e o sentido subjetivo da Administração Pública atuando.'
          }
        },
        tags: ['sentidos', 'objetivo', 'subjetivo', 'amplo', 'restrito']
      },

      /* ---------- Item 2 — C/E — Dificuldade 1 ---------- */
      {
        id: 'D-AP-13-02',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 1,
        subtopico: 'Interesse público x interesse do Estado x interesse do agente',
        pergunta: 'Interesse público, interesse do Estado e interesse do agente são sinônimos: todos designam o mesmo objetivo da atuação administrativa.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. Interesse público = interesse da coletividade; interesse do Estado = interesse da máquina administrativa; interesse do agente = interesse pessoal do governante. São conceitos distintos.',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. INTERESSE PÚBLICO é o interesse da COLETIVIDADE (o bem comum). INTERESSE DO ESTADO (ou da Administração) é o interesse da máquina administrativa como organização. INTERESSE DO AGENTE é o interesse pessoal do governante ou do servidor. São conceitos distintos — e confundi-los é a raiz do desvio de finalidade.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela iguala três conceitos que a doutrina distingue rigorosamente. O interesse público é o da coletividade; o do Estado é o da máquina; o do agente é o pessoal. Quando o governante usa a máquina para favorecer interesse pessoal, há desvio de finalidade — não interesse público.'
          },
          conceitoCobrado: 'Distinção entre interesse público, interesse do Estado e interesse do agente',
          pegadinha: 'A palavra "sinônimos" é o erro. São conceitos próximos, mas distintos. A confusão leva a legitimar arbitrariedades: "é interesse público" pode ser dito tanto para justificar uma política legítima quanto para encobrir favorecimento pessoal. A doutrina separa rigorosamente os três.',
          comoApareceEmConcurso: 'Bancas usam essa distinção para testar se o candidato internalizou o conceito de interesse público como interesse da COLETIVIDADE. A afirmação "são sinônimos" é quase sempre FALSA.',
          exemploInedito: {
            contexto: 'Um prefeito nomeia o filho para cargo em comissão, alegando "interesse público" porque confia na família. Paralelamente, prioriza a reforma de escolas em bairros carentes — contrariando empreiteiros.',
            aplicacao: 'A nomeação do filho é INTERESSE DO AGENTE (pessoal), disfarçado de "interesse público". A priorização de escolas carentes é INTERESSE PÚBLICO (coletividade). A distinção é fundamental: o primeiro é desvio de finalidade; o segundo é legítimo, ainda que contrarie grupos de pressão.',
            desafio: 'Um órgão público que prioriza comprar carros para a diretoria, alegando "necessidade do serviço", está atendendo ao interesse público, ao interesse do Estado ou ao interesse do agente? Justifique.'
          }
        },
        tags: ['interesse público', 'interesse do Estado', 'interesse do agente']
      },

      /* ---------- Item 3 — Formato 1 (V/F sequência) — Dificuldade 2 ---------- */
      {
        id: 'D-AP-13-03',
        tipo: 'multipla_escolha',
        formato: 'vf_sequencia',
        dificuldade: 2,
        subtopico: 'Sentidos da Administração Pública em cenário',
        pergunta: 'Sobre os sentidos da Administração Pública, analise as afirmações e assinale a sequência correta:\n\nI. A expressão "Administração Pública" em sentido subjetivo refere-se ao conjunto de órgãos e pessoas que exercem a função administrativa.\nII. Em sentido objetivo, a Administração Pública designa a atividade administrativa em si (o que se faz).\nIII. Em sentido restrito, a Administração Pública abrange os três Poderes quando exercem função administrativa.\nIV. Em sentido amplo, a Administração Pública abrange os três Poderes e órgãos auxiliares quando exercem função administrativa.',
        alternativas: [
          { id: 'A', texto: 'V – V – F – V.' },
          { id: 'B', texto: 'V – F – V – V.' },
          { id: 'C', texto: 'F – V – V – V.' },
          { id: 'D', texto: 'V – V – V – F.' },
          { id: 'E', texto: 'F – F – V – V.' }
        ],
        gabarito: 'A',
        explicacao: 'A alternativa A está correta: I (V), II (V), III (F), IV (V). A III é falsa: em sentido restrito, a Administração Pública abrange APENAS o Executivo — não os três Poderes.',
        explicacaoDetalhada: {
          correta: 'A alternativa A está correta: I (V), II (V), III (F), IV (V). A I está certa: subjetivo = conjunto de órgãos e pessoas. A II está certa: objetivo = atividade administrativa. A III está FALSA: em sentido restrito, abrange APENAS o Executivo — não os três Poderes. A IV está certa: em sentido amplo, abrange os três Poderes e órgãos auxiliares.',
          incorretas: {
            B: 'A alternativa erra ao marcar a II como falsa. Em sentido objetivo, a Administração Pública designa, sim, a atividade administrativa (o que se faz). Também erra ao marcar a III como verdadeira (ela é falsa).',
            C: 'A alternativa erra ao marcar a I como falsa. Em sentido subjetivo, a Administração Pública é, sim, o conjunto de órgãos e pessoas. Descartar essa definição é erro básico.',
            D: 'A alternativa erra ao marcar a III como verdadeira. Em sentido restrito, a Administração abrange APENAS o Executivo — não os três Poderes. A afirmação III é justamente a confusão entre restrito e amplo.',
            E: 'A alternativa erra ao marcar a I como falsa (é verdadeira) e a II como falsa (também verdadeira). É a "alternativa do chute" para quem não internalizou os quatro sentidos.'
          },
          conceitoCobrado: 'Sentidos da Administração Pública (amplo, restrito, objetivo, subjetivo)',
          pegadinha: 'A afirmação III explora a confusão entre AMPLO (três Poderes) e RESTRITO (só Executivo). A palavra "restrito" engana quem pensa "restrito = só um Poder" (o que é correto: o Executivo). Se dissesse "três Poderes", seria amplo — não restrito.',
          comoApareceEmConcurso: 'O formato V/F sequência é usado para testar os quatro sentidos em uma única questão. A banca costuma manter 3 afirmações verdadeiras e 1 falsa — geralmente a que troca restrito por amplo.',
          exemploInedito: {
            contexto: 'Quando o STF julga um habeas corpus, exerce função jurisdicional. Quando compra computadores para seus servidores, exerce função ADMINISTRATIVA — sentido amplo (três Poderes). Já quando a Secretaria de Saúde emite um alvará, temos atividade administrativa — sentido objetivo.',
            aplicacao: 'O sentido amplo (STF comprando) inclui os três Poderes em função administrativa. O sentido restrito (só Executivo) excluiria o STF. A confusão entre os dois é o erro da afirmação III: ela diz que "restrito abrange os três Poderes" — o que é falso; restrito é APENAS o Executivo.',
            desafio: 'Se a Câmara Municipal de uma cidade faz licitação para comprar material de escritório, isso é Administração Pública em sentido amplo ou restrito? Justifique.'
          }
        },
        tags: ['sentidos', 'amplo', 'restrito', 'objetivo', 'subjetivo', 'vf sequência']
      },

      /* ---------- Item 4 — C/E — Dificuldade 2 ---------- */
      {
        id: 'D-AP-13-04',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 2,
        subtopico: 'Supremacia x indisponibilidade do interesse público',
        pergunta: 'A supremacia do interesse público fundamenta as prerrogativas da Administração (ex.: desapropriação); a indisponibilidade do interesse público fundamenta as restrições à atuação administrativa (ex.: legalidade estrita).',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'A afirmação é CERTA. Supremacia = prerrogativas (poderes da Administração); indisponibilidade = restrições (limites). São os dois pilares do regime jurídico-administrativo.',
        explicacaoDetalhada: {
          correta: 'A afirmação é CERTA. Os dois pilares do regime jurídico-administrativo são: SUPREMACIA do interesse público (o interesse coletivo prevalece sobre o individual — base das prerrogativas: desapropriação, cláusulas exorbitantes, autoexecutoriedade) e INDISPONIBILIDADE do interesse público (o administrador não pode dispor do interesse coletivo — base das restrições: legalidade estrita, impessoalidade, motivação). Um confere poderes; o outro impõe limites.',
          incorretas: {
            F: 'A afirmação não é falsa. Ela descreve corretamente os dois pilares: supremacia (prerrogativas) e indisponibilidade (restrições). Tratar como falsa indicaria desconhecimento do regime jurídico-administrativo.'
          },
          conceitoCobrado: 'Dois pilares do regime jurídico-administrativo: supremacia e indisponibilidade do interesse público',
          pegadinha: 'A intuição pode levar a pensar que "supremacia" significa apenas "poderes" e "indisponibilidade" significa apenas "proibições" — o que está correto. A armadilha é inverter: supremacia = restrições; indisponibilidade = prerrogativas. Não é o caso desta afirmação — ela está correta.',
          comoApareceEmConcurso: 'Bancas usam essa distinção em C/E para testar se o candidato sabe associar cada pilar ao seu efeito (prerrogativa x restrição). A afirmação está correta — verificar com cuidado, pois a banca pode inverter.',
          exemploInedito: {
            contexto: 'A desapropriação por utilidade pública é prerrogativa da Administração (supremacia — o interesse coletivo prevalece sobre o individual). A necessidade de motivação e a legalidade estrita são restrições (indisponibilidade — o administrador não pode dispor livremente do interesse coletivo).',
            aplicacao: 'Um exemplo concreto: o poder de polícia (interditar restaurante insalubre) expressa supremacia; a exigência de processo administrativo com contraditório expressa indisponibilidade. Um confere poderes; o outro impõe limites. Ambos convivem — não são contraditórios, são complementares.',
            desafio: 'Por que a doutrina diz que supremacia e indisponibilidade são "dois lados da mesma moeda"? Reflita sobre como o interesse público gera, ao mesmo tempo, poderes e limites.'
          }
        },
        tags: ['supremacia', 'indisponibilidade', 'regime jurídico-administrativo']
      },

      /* ---------- Item 5 — Situação — Dificuldade 2 ---------- */
      {
        id: 'D-AP-13-05',
        tipo: 'situacao',
        formato: 'multipla_escolha',
        dificuldade: 2,
        subtopico: 'Identificação do sentido em cenário',
        pergunta: 'Considere quatro situações: (1) o Judiciário realiza licitação para comprar computadores para seus servidores; (2) a Secretaria de Saúde do município emite alvará sanitário a um restaurante; (3) a Prefeitura, por meio de seus servidores e órgãos, executa a política de vacinação; (4) o Estado cria autarquia para gerir o transporte intermunicipal. Sobre os sentidos e institutos envolvidos, é CORRETO afirmar que:',
        alternativas: [
          { id: 'A', texto: '(1) ilustra o sentido restrito; (2) o sentido subjetivo; (3) o sentido objetivo; (4) a desconcentração.' },
          { id: 'B', texto: '(1) ilustra o sentido amplo; (2) o sentido objetivo; (3) o sentido subjetivo; (4) a descentralização por outorga.' },
          { id: 'C', texto: '(1) ilustra o sentido objetivo; (2) o sentido amplo; (3) o sentido subjetivo; (4) a concentração.' },
          { id: 'D', texto: '(1) ilustra o sentido subjetivo; (2) o sentido objetivo; (3) o sentido amplo; (4) a descentralização por delegação.' },
          { id: 'E', texto: 'Todas as situações ilustram o sentido restrito, pois envolvem o Executivo.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B está correta. (1) Judiciário comprando = sentido amplo (função administrativa em outro Poder); (2) alvará = sentido objetivo (atividade); (3) servidores e órgãos = sentido subjetivo; (4) autarquia = descentralização por outorga.',
        explicacaoDetalhada: {
          correta: 'A alternativa B está correta. (1) Judiciário fazendo licitação = função administrativa em outro Poder = sentido AMPLO. (2) Emissão de alvará = atividade administrativa = sentido OBJETIVO. (3) Servidores e órgãos executando vacinação = quem faz = sentido SUBJETIVO. (4) Criação de autarquia = entidade com personalidade própria = DESCENTRALIZAÇÃO POR OUTORGA.',
          incorretas: {
            A: 'A alternativa erra em todos os pontos: (1) Judiciário comprando é sentido AMPLO (não restrito — restrito seria só Executivo); (2) alvará é objetivo (não subjetivo — subjetivo é "quem faz"); (3) servidores são subjetivo (não objetivo — objetivo é "o que faz"); (4) autarquia é descentralização (não desconcentração — desconcentração não cria pessoa jurídica).',
            C: 'A alternativa erra em todos os pontos: (1) Judiciário comprando é amplo (não objetivo); (2) alvará é objetivo (não amplo); (3) servidores são subjetivo (não isso — está certo, mas os outros erros comprometem); (4) autarquia é descentralização (não concentração — concentração é o oposto).',
            D: 'A alternativa erra na maioria: (1) Judiciário comprando é amplo (não subjetivo — subjetivo é "quem faz"); (4) criação de autarquia é descentralização por OUTORGA (não por delegação — delegação é para particular).',
            E: 'A alternativa erra ao dizer que todas são sentido restrito. Apenas a (2) poderia ser vista como restrito (Executivo), mas as demais não: (1) é amplo (Judiciário); (3) é subjetivo (órgãos); (4) é descentralização. A generalização é falsa.'
          },
          conceitoCobrado: 'Aplicação dos sentidos da Administração Pública e dos institutos de descentralização/desconcentração em cenário',
          pegadinha: 'A banca combina quatro sentidos/institutos em uma única questão. O candidato precisa separar: (1) amplo (três Poderes); (2) objetivo (atividade); (3) subjetivo (órgãos e pessoas); (4) descentralização por outorga (entidade com personalidade). A confusão entre objetivo/subjetivo e entre descentralização/desconcentração é a armadilha.',
          comoApareceEmConcurso: 'Cenários que combinam sentidos e institutos são clássicos em concursos que cobram AP-13. A banca costuma embaralhar os quatro pares e oferecer alternativas que erram em 2 ou 3 pontos.',
          exemploInedito: {
            contexto: 'Em um município: (a) a Câmara Municipal faz licitação para comprar material de escritório (sentido amplo — Legislativo em função administrativa); (b) a Secretaria de Obras emite alvará de construção (sentido objetivo — atividade); (c) os servidores da Saúde executam a vacinação (sentido subjetivo — órgãos e pessoas); (d) o prefeito cria autarquia para gerir o transporte coletivo (descentralização por outorga).',
            aplicacao: 'Mesmo raciocínio do enunciado: cada situação ativa uma faceta diferente da Administração Pública. Confundir (a) com restrito, (b) com subjetivo ou (d) com desconcentração são os erros mais comuns.',
            desafio: 'Pense em um exemplo do seu município para cada um dos quatro conceitos. Quanto mais concretos os exemplos, mais fácil fixar.'
          }
        },
        tags: ['sentidos', 'descentralização', 'situação aplicada']
      },

      /* ---------- Item 6 — Formato 2 (I, II, III) — Dificuldade 3 ---------- */
      {
        id: 'D-AP-13-06',
        tipo: 'multipla_escolha',
        formato: 'afirmacoes_romanas',
        dificuldade: 3,
        subtopico: 'Administração Direta x Indireta; descentralização x desconcentração',
        pergunta: 'Sobre a organização da Administração Pública, analise as afirmações a seguir:\n\nI. A Administração Direta é composta pelos entes federativos (União, Estados, DF, Municípios) e seus órgãos, que não têm personalidade jurídica própria.\nII. A criação de autarquia configura descentralização por outorga, pois se transfere a titularidade da atividade a uma entidade com personalidade jurídica própria.\nIII. A divisão interna de uma Secretaria em coordenações regionais configura descentralização, pois aproxima a decisão do cidadão.\n\nEstão corretas:',
        alternativas: [
          { id: 'A', texto: 'Apenas I.' },
          { id: 'B', texto: 'Apenas II.' },
          { id: 'C', texto: 'Apenas I e II.' },
          { id: 'D', texto: 'Apenas II e III.' },
          { id: 'E', texto: 'I, II e III.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C está correta. I e II são verdadeiras; III é falsa (divisão interna em coordenações é DESCONCENTRAÇÃO, não descentralização).',
        explicacaoDetalhada: {
          correta: 'A alternativa C está correta. A I está certa: Administração Direta = entes federativos + órgãos, sem personalidade jurídica própria. A II está certa: criação de autarquia = descentralização por outorga (entidade com personalidade própria). A III está INCORRETA: a divisão interna de uma Secretaria em coordenações regionais é DESCONCENTRAÇÃO (mesma pessoa jurídica; distribuição interna de competências), não descentralização.',
          incorretas: {
            A: 'A afirmação I está correta, mas a II também. Criação de autarquia é, sim, descentralização por outorga — transfere a titularidade a uma entidade com personalidade própria. Excluir a II é negar um instituto clássico.',
            B: 'A afirmação II está correta, mas a I também. A Administração Direta é, sim, composta pelos entes e seus órgãos, sem personalidade própria. Excluir a I é negar a estrutura básica.',
            D: 'A afirmação III é falsa — divisão interna em coordenações é DESCONCENTRAÇÃO, não descentralização. Incluir a III é o erro central. A II está correta, mas a III não.',
            E: 'Não é possível aceitar as três. A III confunde DESCONCENTRAÇÃO (mesma pessoa jurídica) com DESCENTRALIZAÇÃO (outra pessoa jurídica). A divisão em coordenações regionais mantém a mesma pessoa — logo, é desconcentração.'
          },
          conceitoCobrado: 'Distinção entre Administração Direta/Indireta e descentralização/desconcentração',
          pegadinha: 'A afirmação III usa "aproxima a decisão do cidadão" para tentar justificar a descentralização — mas essa aproximação pode ocorrer também na desconcentração. O critério distintivo é a PERSONALIDADE JURÍDICA: descentralização cria OUTRA pessoa; desconcentração mantém a MESMA pessoa. A palavra "regional" pode sugerir descentralização, mas não é o critério.',
          comoApareceEmConcurso: 'Bancas testam a distinção descentralização x desconcentração com frequência. A afirmação que chama de descentralização a divisão interna entre órgãos é quase sempre FALSA. A dica: "se criou CNPJ, é descentralização; se manteve o mesmo CNPJ, é desconcentração".',
          exemploInedito: {
            contexto: 'Uma prefeitura: (a) cria uma autarquia para gerir o serviço de água (descentralização por outorga — nova pessoa jurídica); (b) divide a Secretaria de Saúde em quatro coordenações regionais (desconcentração — mesma pessoa jurídica, divisão interna); (c) celebra contrato de concessão com empresa privada para transporte (descentralização por delegação — particular).',
            aplicacao: 'Os três casos parecem "descentralizar" decisões, mas só (a) e (c) são descentralização (criam outra pessoa ou transferem a particular). (b) é desconcentração — distribui internamente. O critério é a personalidade jurídica.',
            desafio: 'Por que a doutrina separa descentralização e desconcentração se ambas aproximam a decisão do cidadão? Reflita sobre as consequências jurídicas de cada instituto.'
          }
        },
        tags: ['direta', 'indireta', 'descentralização', 'desconcentração', 'afirmações romanas']
      },

      /* ---------- Item 7 — Autoavaliação ---------- */
      {
        id: 'D-AP-13-07',
        tipo: 'autoavaliacao',
        subtopico: 'Conceitos fundamentais da Administração Pública',
        pergunta: 'Sem consultar, você consegue explicar os quatro sentidos de Administração Pública (amplo, restrito, objetivo e subjetivo) e diferenciar interesse público, interesse do Estado e interesse do agente?',
        resposta: 'SENTIDOS: AMPLO (três Poderes em função administrativa + órgãos auxiliares); RESTRITO (apenas Executivo); OBJETIVO (a atividade — o que se faz); SUBJETIVO (órgãos e pessoas — quem faz). INTERESSE PÚBLICO: interesse da COLETIVIDADE (bem comum). INTERESSE DO ESTADO: interesse da máquina administrativa como organização. INTERESSE DO AGENTE: interesse pessoal do governante — jamais se confunde com interesse público. A confusão entre os três é a raiz do desvio de finalidade. PILARES DO REGIME: supremacia (prerrogativas — desapropriação, cláusulas exorbitantes) e indisponibilidade (restrições — legalidade estrita, impessoalidade). DIREITO PÚBLICO x PRIVADO: Administração Direta = entes federativos + órgãos (sem personalidade); Administração Indireta = entidades com personalidade (autarquias, fundações, EP, SEM). DESCENTRALIZAÇÃO x DESCONCENTRAÇÃO: outra pessoa jurídica (outorga a entidade ou delegação a particular) x mesma pessoa jurídica (divisão interna entre órgãos).'
      }

    ]
  },

  /* ============================================================
     AP-14 — Modelos de Administração Pública
  ============================================================ */
  'AP-14': {
    id: 'D-AP-14',
    moduloId: 'AP-14',
    itens: [

      /* ---------- Item 1 — Formato 6 (EXCETO) — Dificuldade 1 ---------- */
      {
        id: 'D-AP-14-01',
        tipo: 'multipla_escolha',
        formato: 'excecao',
        dificuldade: 1,
        subtopico: 'Modelo patrimonialista',
        pergunta: 'Sobre o modelo patrimonialista de Administração Pública, assinale a alternativa INCORRETA:',
        alternativas: [
          { id: 'A', texto: 'Caracteriza-se pela separação clara entre o patrimônio público e o privado, com predomínio da impessoalidade.' },
          { id: 'B', texto: 'Confunde o público e o privado: os cargos e bens públicos são tratados como propriedade do governante.' },
          { id: 'C', texto: 'Favorece práticas como nepotismo, clientelismo e favoritismo.' },
          { id: 'D', texto: 'Não se baseia em meritocracia nem em concurso público como regra de acesso aos cargos.' },
          { id: 'E', texto: 'É um modelo pré-burocrático, superado historicamente pela burocracia weberiana.' }
        ],
        gabarito: 'A',
        explicacao: 'A alternativa A é a INCORRETA. O patrimonialismo se caracteriza justamente pela CONFUSÃO entre público e privado, sem impessoalidade. A alternativa A descreve o oposto — um modelo com impessoalidade, que é a burocracia.',
        explicacaoDetalhada: {
          correta: 'A alternativa A está INCORRETA e, por isso, é a resposta. Ela descreve o patrimonialismo como tendo "separação clara entre público e privado" e "predomínio da impessoalidade" — mas essas são exatamente as características que o patrimonialismo NÃO tem. O patrimonialismo se define pela CONFUSÃO entre o público e o privado. A separação e a impessoalidade são marcas da BUROCRACIA weberiana.',
          incorretas: {
            B: 'A alternativa está correta e não deve ser marcada. O patrimonialismo confunde público e privado, tratando cargos e bens como propriedade do governante. Seria INCORRETA se dissesse que há separação — isso é da burocracia.',
            C: 'A alternativa está correta e não deve ser marcada. O patrimonialismo favorece nepotismo, clientelismo e favoritismo. Seria INCORRETA se dissesse que combate essas práticas — isso é da burocracia e do gerencialismo.',
            D: 'A alternativa está correta e não deve ser marcada. O patrimonialismo não se baseia em meritocracia nem em concurso como regra. Seria INCORRETA se dissesse que o acesso aos cargos depende de mérito — isso é da burocracia.',
            E: 'A alternativa está correta e não deve ser marcada. O patrimonialismo é pré-burocrático, superado historicamente pela burocracia. Seria INCORRETA se dissesse que é posterior ao gerencialismo.'
          },
          conceitoCobrado: 'Características do modelo patrimonialista e sua posição histórica',
          pegadinha: 'A alternativa A usa termos da burocracia (separação público/privado, impessoalidade) para descrever o patrimonialismo. É a pegadinha do "espelho": quem conhece a burocracia reconhece os termos e pode aceitar a alternativa sem perceber a inversão.',
          comoApareceEmConcurso: 'Bancas costumam descrever o patrimonialismo com características da burocracia em uma única alternativa do formato EXCETO. A dica: "separe público e privado + impessoalidade + meritocracia" = burocracia, não patrimonialismo.',
          exemploInedito: {
            contexto: 'Em uma cidade do interior, o prefeito nomeia todos os secretários entre familiares e amigos, distribui cargos de confiança como moeda de troca política e usa bens públicos (carros, imóveis) para fins privados.',
            aplicacao: 'Esse cenário é patrimonialista puro: confusão entre público e privado, nepotismo, clientelismo. Se alguém dissesse "o prefeito age com impessoalidade", estaria usando um conceito da burocracia para descrever o oposto — exatamente o erro da alternativa A.',
            desafio: 'Pense em práticas atuais que ainda têm resquícios patrimonialistas no serviço público. Que instrumentos a burocracia e o gerencialismo criaram para combatê-las?'
          }
        },
        tags: ['patrimonialismo', 'modelos']
      },

      /* ---------- Item 2 — C/E — Dificuldade 1 ---------- */
      {
        id: 'D-AP-14-02',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 1,
        subtopico: 'Burocracia weberiana',
        pergunta: 'A burocracia weberiana tem como características a impessoalidade, a meritocracia, a hierarquia formal, as regras escritas e a profissionalização do servidor.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'A afirmação é CERTA. A burocracia weberiana tem, entre suas características: impessoalidade, meritocracia, hierarquia formal, regras escritas e profissionalização.',
        explicacaoDetalhada: {
          correta: 'A afirmação é CERTA. A burocracia weberiana tem, entre suas características: IMPESSOALIDADE (tratamento igualitário, sem favorecimentos), MERITOCRACIA (acesso por mérito — concurso público), HIERARQUIA FORMAL (níveis definidos de autoridade), REGRAS ESCRITAS (procedimentos padronizados), PROFISSIONALIZAÇÃO (servidor como carreira, não como favor).',
          incorretas: {
            F: 'A afirmação não é falsa. Ela lista corretamente as cinco características clássicas da burocracia weberiana. Tratar como falsa indicaria desconhecimento do modelo — ou confusão com o patrimonialismo (que tem características opostas) ou com o gerencialismo (que enfatiza resultados, não procedimentos).'
          },
          conceitoCobrado: 'Características da burocracia weberiana',
          pegadinha: 'A afirmação está correta. A armadilha (não presente nesta questão) seria acrescentar "foco em resultados" ou "flexibilidade" — características do gerencialismo, não da burocracia. Verificar cada termo: impessoalidade (burocracia), meritocracia (burocracia), hierarquia (burocracia), regras escritas (burocracia), profissionalização (burocracia). Todos corretos.',
          comoApareceEmConcurso: 'Bancas usam essa lista em C/E para testar se o candidato domina as características da burocracia. A afirmação pode ser verdadeira (como aqui) ou incluir 1-2 características do gerencialismo (ex.: "foco em resultados") para torná-la falsa.',
          exemploInedito: {
            contexto: 'Um servidor de uma autarquia federal ingressa por concurso público (meritocracia), segue carreira estruturada (profissionalização), exerce função em nível hierárquico definido (hierarquia), aplica normas escritas (regras) e trata todos os cidadãos igualmente (impessoalidade).',
            aplicacao: 'A trajetória ilustra as cinco características. O concurso é a expressão máxima da meritocracia; a impessoalidade aparece no atendimento igualitário; a hierarquia está na estrutura de carreira; as regras estão nos procedimentos; a profissionalização está no vínculo estatutário.',
            desafio: 'Por que a burocracia weberiana foi um avanço em relação ao patrimonialismo? Que problemas ela resolveu — e quais problemas novos ela criou?'
          }
        },
        tags: ['burocracia', 'weber', 'modelos']
      },

      /* ---------- Item 3 — Formato 1 (V/F sequência) — Dificuldade 2 ---------- */
      {
        id: 'D-AP-14-03',
        tipo: 'multipla_escolha',
        formato: 'vf_sequencia',
        dificuldade: 2,
        subtopico: 'Comparação entre os três modelos',
        pergunta: 'Sobre os três modelos de Administração Pública (patrimonialista, burocrático e gerencial), analise as afirmações e assinale a sequência correta:\n\nI. O patrimonialismo confunde o público e o privado; a burocracia separa os dois, com impessoalidade.\nII. A burocracia prioriza o controle de MEIOS (procedimentos, regras); o gerencialismo prioriza o controle de FINS (resultados, indicadores).\nIII. O gerencialismo foi introduzido no Brasil pela Reforma de 1936 (criação do DASP).\nIV. Os três modelos coexistem, em maior ou menor grau, na Administração Pública brasileira contemporânea.',
        alternativas: [
          { id: 'A', texto: 'V – V – V – F.' },
          { id: 'B', texto: 'V – F – V – V.' },
          { id: 'C', texto: 'V – V – F – V.' },
          { id: 'D', texto: 'F – V – V – V.' },
          { id: 'E', texto: 'V – F – F – V.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C está correta: I (V), II (V), III (F), IV (V). A III é falsa: o gerencialismo foi introduzido pela Reforma de 1995 (Bresser-Pereira); a Reforma de 1936 (DASP) introduziu a BUROCRACIA.',
        explicacaoDetalhada: {
          correta: 'A alternativa C está correta: I (V), II (V), III (F), IV (V). A I está certa: patrimonialismo confunde; burocracia separa. A II está certa: burocracia = meios; gerencialismo = fins. A III está FALSA: a Reforma de 1936 (DASP) introduziu a BUROCRACIA; o gerencialismo veio com a Reforma de 1995 (Bresser-Pereira). A IV está certa: os três modelos coexistem no Brasil.',
          incorretas: {
            A: 'A alternativa erra ao marcar a III como verdadeira. A Reforma de 1936 introduziu a BUROCRACIA, não o gerencialismo. O gerencialismo veio com a Reforma de 1995. Erro histórico clássico.',
            B: 'A alternativa erra ao marcar a II como falsa. A burocracia prioriza meios (procedimentos); o gerencialismo, fins (resultados). Essa distinção está correta. Também erra ao marcar a III como verdadeira.',
            D: 'A alternativa erra ao marcar a I como falsa. O patrimonialismo confunde público e privado; a burocracia separa — essa distinção está correta. Também erra ao marcar a III como verdadeira.',
            E: 'A alternativa erra ao marcar a II e a III: a II está correta (não falsa); a III está falsa (não verdadeira). A combinação indica confusão entre os modelos e suas reformas.'
          },
          conceitoCobrado: 'Comparação entre os três modelos e suas reformas brasileiras',
          pegadinha: 'A afirmação III troca as reformas: 1936 (DASP) = burocracia; 1995 (Bresser-Pereira) = gerencialismo. É o erro histórico mais comum em provas. A dica: "1936 = DASP = burocracia; 1995 = Plano Diretor = gerencialismo".',
          comoApareceEmConcurso: 'O formato V/F sequência é usado para testar os três modelos e suas reformas em uma única questão. A banca costuma trocar o ano das reformas para induzir ao erro.',
          exemploInedito: {
            contexto: 'Linha do tempo: até 1930, predominância patrimonialista no Brasil; 1936, criação do DASP, introduzindo a burocracia weberiana; 1967, Decreto-Lei 200, descentralização para autarquias e fundações; 1995, Plano Diretor da Reforma do Aparelho do Estado (Bresser-Pereira), introduzindo o gerencialismo; 1998, EC 19, inserindo a eficiência no art. 37 da CF.',
            aplicacao: 'A afirmação III erra ao atribuir o gerencialismo a 1936 — esse ano marcou a burocracia. O gerencialismo veio em 1995. A IV está correta: hoje, práticas patrimonialistas (nepotismo), burocráticas (concurso, procedimentos) e gerenciais (metas, avaliação de desempenho) coexistem.',
            desafio: 'Por que o Brasil não "superou" completamente o patrimonialismo nem a burocracia, mesmo após a Reforma de 1995? Pense na coexistência de práticas.'
          }
        },
        tags: ['modelos', 'patrimonialismo', 'burocracia', 'gerencialismo', 'vf sequência']
      },

      /* ---------- Item 4 — C/E — Dificuldade 2 ---------- */
      {
        id: 'D-AP-14-04',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 2,
        subtopico: 'Reforma de 1995 (gerencialismo) e EC 19/1998',
        pergunta: 'A EC 19/1998 inseriu o princípio da eficiência no caput do art. 37 da CF e faz parte do projeto de administração gerencial iniciado com a Reforma de 1995 (Plano Diretor da Reforma do Aparelho do Estado).',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'A afirmação é CERTA. A EC 19/1998 inseriu a eficiência no art. 37 e integra o projeto gerencial da Reforma de 1995 (Bresser-Pereira).',
        explicacaoDetalhada: {
          correta: 'A afirmação é CERTA. A EC 19/1998 inseriu o princípio da EFICIÊNCIA no caput do art. 37 da CF, completando o LIMPE. Essa emenda é parte do projeto gerencial iniciado com a Reforma de 1995 (Plano Diretor da Reforma do Aparelho do Estado, conduzido por Bresser-Pereira), que enfatizou resultados, descentralização, contratos de gestão e avaliação de desempenho.',
          incorretas: {
            F: 'A afirmação não é falsa. Ela descreve corretamente: a EC 19/1998 inseriu a eficiência no art. 37 (isso é fato); e integra o projeto gerencial da Reforma de 1995 (isso é historicamente correto). Tratar como falsa indicaria desconhecimento do marco constitucional do gerencialismo.'
          },
          conceitoCobrado: 'Reforma de 1995 e EC 19/1998 — marco constitucional do gerencialismo',
          pegadinha: 'A afirmação está correta. A armadilha (não presente) seria dizer que a EC 19/1998 "criou" o princípio da eficiência do zero — não; ela INSERIU, o que pressupõe que o princípio não estava expresso antes. Outra armadilha seria atribuir a EC 19 ao governo FHC ou a outro governo — a EC é de 1998 (FHC), mas a Reforma de 1995 é o marco inicial.',
          comoApareceEmConcurso: 'Bancas usam essa relação Reforma de 1995 ↔ EC 19/1998 para testar se o candidato sabe o marco constitucional do gerencialismo. A afirmação costuma ser verdadeira, mas pode vir com o ano trocado (ex.: 1988) para torná-la falsa.',
          exemploInedito: {
            contexto: 'Antes de 1998, o art. 37 da CF listava apenas legalidade, impessoalidade, moralidade e publicidade (LIMPE sem o E). Após a EC 19/1998, a eficiência foi acrescentada, formando o LIMPE completo.',
            aplicacao: 'A inserção da eficiência não foi neutra: ela constitucionalizou a lógica gerencial (resultados, qualidade, economicidade). Foi o coroamento do projeto iniciado em 1995 com o Plano Diretor. Hoje, o LIMPE expressa essa dupla face: princípios burocráticos (legalidade, impessoalidade) + princípio gerencial (eficiência).',
            desafio: 'Por que a eficiência foi o último princípio a ser inserido no art. 37? O que ela representa em relação aos demais?'
          }
        },
        tags: ['EC 19/1998', 'Reforma de 1995', 'gerencialismo', 'eficiência']
      },

      /* ---------- Item 5 — Situação — Dificuldade 2 ---------- */
      {
        id: 'D-AP-14-05',
        tipo: 'situacao',
        formato: 'multipla_escolha',
        dificuldade: 2,
        subtopico: 'Identificação do modelo predominante em cenário',
        pergunta: 'Um órgão público apresenta as seguintes práticas: (1) concurso público para ingresso na carreira, com avaliação objetiva de mérito; (2) procedimentos padronizados para toda e qualquer compra; (3) contrato de gestão com metas e indicadores de desempenho; (4) premiação de equipes pelo alcance de metas de satisfação do cidadão. Sobre as práticas descritas, é CORRETO afirmar que:',
        alternativas: [
          { id: 'A', texto: 'todas as práticas são marcas do modelo patrimonialista, pois envolvem pessoal e compras.' },
          { id: 'B', texto: '(1) e (2) são marcas BUROCRÁTICAS (mérito + formalismo); (3) e (4) são marcas GERENCIAIS (contratos de gestão + premiação por resultados).' },
          { id: 'C', texto: 'todas as práticas são marcas do modelo gerencial, pois o órgão adota metas e indicadores.' },
          { id: 'D', texto: '(1) e (2) são marcas gerenciais; (3) e (4) são burocráticas.' },
          { id: 'E', texto: 'as quatro práticas pertencem a modelos incompatíveis entre si, o que torna o cenário impossível.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B está correta. (1) concurso + mérito = burocracia; (2) procedimentos padronizados = burocracia; (3) contrato de gestão = gerencialismo; (4) premiação por metas = gerencialismo. Práticas híbridas são comuns no Brasil.',
        explicacaoDetalhada: {
          correta: 'A alternativa B está correta. (1) Concurso público com mérito e (2) procedimentos padronizados são marcas da BUROCRACIA weberiana. (3) Contrato de gestão com metas e (4) premiação por resultados/satisfação do cidadão são marcas do GERENCIALISMO. Práticas híbridas são comuns: a administração brasileira combina as duas lógicas — o gerencialismo não eliminou a burocracia.',
          incorretas: {
            A: 'A alternativa erra ao classificar tudo como patrimonialista. Nenhuma das práticas é tipicamente patrimonialista (nepotismo, confusão público/privado). Concurso, padronização, metas e premiação são marcas da burocracia ou do gerencialismo, não do patrimonialismo.',
            C: 'A alternativa erra ao classificar tudo como gerencial. (1) e (2) são marcas da BUROCRACIA — mérito e formalismo são a essência weberiana, não gerencial. Só (3) e (4) são gerenciais. A generalização é falsa.',
            D: 'A alternativa inverte tudo: (1) e (2) são burocráticas (não gerenciais); (3) e (4) são gerenciais (não burocráticas). É a inversão completa entre os dois modelos.',
            E: 'A alternativa erra ao dizer que os modelos são incompatíveis. A administração brasileira combina práticas dos três modelos — não há incompatibilidade. A coexistência é a regra, não a exceção.'
          },
          conceitoCobrado: 'Identificação de práticas híbridas (burocracia + gerencialismo) em cenário',
          pegadinha: 'A banca mistura práticas dos dois modelos em um mesmo órgão para testar se o candidato entende a coexistência. Muitos acham que "se tem metas, é gerencial" ou "se tem concurso, é burocrático" — o correto é reconhecer que ambos coexistem.',
          comoApareceEmConcurso: 'Cenários com práticas híbridas são clássicos. A banca costuma apresentar 4 práticas e pedir a classificação correta — geralmente 2 burocráticas + 2 gerenciais, para testar a distinção.',
          exemploInedito: {
            contexto: 'Uma autarquia federal: (a) servidores ingressam por concurso público (burocracia); (b) há manual de procedimentos para cada atividade (burocracia); (c) a diretoria assina contrato de gestão com metas anuais (gerencialismo); (d) equipes recebem bônus por desempenho (gerencialismo).',
            aplicacao: 'Também é cenário híbrido: (a) e (b) são burocráticos; (c) e (d) são gerenciais. O órgão combina meritocracia + formalismo (burocracia) com metas + premiação (gerencialismo). Isso é a regra na administração pública brasileira contemporânea.',
            desafio: 'Por que a coexistência de práticas burocráticas e gerenciais pode gerar tensões? Pense em um exemplo concreto de conflito entre "seguir o procedimento" e "atingir a meta".'
          }
        },
        tags: ['modelos', 'burocracia', 'gerencialismo', 'situação aplicada']
      },

      /* ---------- Item 6 — Formato 3 (Associação) — Dificuldade 3 ---------- */
      {
        id: 'D-AP-14-06',
        tipo: 'multipla_escolha',
        formato: 'associacao',
        dificuldade: 3,
        subtopico: 'Modelos x características x reformas brasileiras',
        pergunta: 'Sobre os três modelos de Administração Pública e as reformas brasileiras, associe corretamente cada MODELO à sua CARACTERÍSTICA CENTRAL e à REFORMA correspondente:\n\nColuna I — Modelo\n1. Patrimonialista\n2. Burocrático\n3. Gerencial\n\nColuna II — Característica central e reforma\n( ) Impessoalidade, meritocracia e formalismo — Reforma de 1936 (DASP).\n( ) Confusão entre público e privado, nepotismo — modelo pré-reforma (predominante até 1930).\n( ) Foco em resultados, contratos de gestão, avaliação de desempenho — Reforma de 1995 (Bresser-Pereira).',
        alternativas: [
          { id: 'A', texto: '1 – primeira; 2 – segunda; 3 – terceira.' },
          { id: 'B', texto: '1 – terceira; 2 – primeira; 3 – segunda.' },
          { id: 'C', texto: '1 – segunda; 2 – terceira; 3 – primeira.' },
          { id: 'D', texto: '1 – primeira; 2 – terceira; 3 – segunda.' },
          { id: 'E', texto: '1 – segunda; 2 – primeira; 3 – terceira.' }
        ],
        gabarito: 'E',
        explicacao: 'A alternativa E está correta. Patrimonialista (1) → confusão público/privado (segunda). Burocrático (2) → impessoalidade, mérito, formalismo, Reforma 1936 (primeira). Gerencial (3) → foco em resultados, Reforma 1995 (terceira).',
        explicacaoDetalhada: {
          correta: 'A alternativa E está correta. Patrimonialista (1) → confusão público/privado, nepotismo, modelo pré-reforma (segunda da Coluna II). Burocrático (2) → impessoalidade, mérito, formalismo, Reforma de 1936 (primeira da Coluna II). Gerencial (3) → foco em resultados, contratos de gestão, Reforma de 1995 (terceira da Coluna II).',
          incorretas: {
            A: 'A alternativa coloca patrimonialista como burocrático (errado), burocrático como patrimonialista (errado) e gerencial como gerencial (correto). Só o gerencial está certo. Erro de inversão entre os dois primeiros.',
            B: 'A alternativa coloca patrimonialista como gerencial (errado), burocrático como patrimonialista (errado) e gerencial como burocrático (errado). Inversão completa dos três modelos.',
            C: 'A alternativa coloca patrimonialista como burocrático (errado), burocrático como gerencial (errado) e gerencial como patrimonialista (errado). Inversão circular dos três.',
            D: 'A alternativa acerta o patrimonialista como patrimonialista (primeira), mas erra os outros dois: coloca burocrático como gerencial e gerencial como burocrático. Erro de inversão entre burocracia e gerencialismo.'
          },
          conceitoCobrado: 'Correspondência entre modelo, característica central e reforma brasileira',
          pegadinha: 'A associação de colunas exige que o candidato não apenas conheça os três modelos e as três reformas isoladamente, mas a CORRESPONDÊNCIA entre eles. A confusão mais comum é entre burocracia (1936, DASP) e gerencialismo (1995, Bresser-Pereira) — os anos são trocados.',
          comoApareceEmConcurso: 'Bancas usam associação de colunas com modelos, características e reformas para testar precisão. É comum embaralhar as colunas de modo que apenas uma combinação esteja integralmente correta.',
          exemploInedito: {
            contexto: 'Linha do tempo brasileira: até 1930, patrimonialismo (nepotismo, confusão público/privado); 1936, criação do DASP, implantando a burocracia weberiana (concurso, impessoalidade, formalismo); 1995, Plano Diretor da Reforma do Aparelho do Estado (Bresser-Pereira), introduzindo o gerencialismo (metas, contratos de gestão, avaliação de desempenho).',
            aplicacao: 'Cada modelo tem uma característica central e uma reforma correspondente. A associação exige: patrimonialista (pré-1930), burocrático (1936, DASP), gerencial (1995, Bresser-Pereira). Se alguém dissesse "patrimonialista = 1936", erraria — 1936 marcou a burocracia.',
            desafio: 'Por que o Brasil passou por três modelos administrativos em menos de um século? Pense nas influências econômicas e políticas de cada período.'
          }
        },
        tags: ['modelos', 'patrimonialismo', 'burocracia', 'gerencialismo', 'reformas', 'associação']
      },

      /* ---------- Item 7 — Autoavaliação ---------- */
      {
        id: 'D-AP-14-07',
        tipo: 'autoavaliacao',
        subtopico: 'Comparação entre os modelos e as reformas brasileiras',
        pergunta: 'Sem consultar, você consegue comparar os modelos patrimonialista, burocrático e gerencial — e associar cada um às reformas brasileiras de 1936, 1967 e 1995, além da EC 19/1998?',
        resposta: 'PATRIMONIALISTA: confusão público/privado, nepotismo, clientelismo — modelo pré-burocrático, predominante até 1930. BUROCRÁTICO: impessoalidade, meritocracia, formalismo, regras escritas, hierarquia — Reforma de 1936 (criação do DASP). GERENCIAL: foco em resultados, eficiência, contratos de gestão, avaliação de desempenho, satisfação do cidadão — Reforma de 1995 (Plano Diretor, Bresser-Pereira). REFORMA DE 1967 (DL 200): descentralização para autarquias e fundações — etapa intermediária, não é gerencial puro nem burocrático puro. EC 19/1998: inseriu a eficiência no caput do art. 37 da CF, coroando o projeto gerencial iniciado em 1995. Os três modelos COEXISTEM no Brasil contemporâneo — práticas híbridas são a regra (não a exceção). Burocracia = meios; gerencialismo = fins.'
      }

    ]
  }
  ,

  /* ============================================================
     DA-15 — Princípios da Administração Pública
  ============================================================ */
  'DA-15': {
    id: 'D-DA-15',
    moduloId: 'DA-15',
    itens: [

      /* ---------- Item 1 — Formato 2 (I, II, III) — Dificuldade 1 ---------- */
      {
        id: 'D-DA-15-01',
        tipo: 'multipla_escolha',
        formato: 'afirmacoes_romanas',
        dificuldade: 1,
        subtopico: 'LIMPE e princípios expressos (art. 37, caput, CF/88)',
        pergunta: 'Sobre o rol de princípios expressos no caput do art. 37 da Constituição Federal, analise as afirmações a seguir:\n\nI. O rol expresso é o LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiência.\nII. O princípio da eficiência foi inserido no caput do art. 37 pela Emenda Constitucional 19/1998, integrando o projeto gerencial.\nIII. A moralidade administrativa se limita a exigir o cumprimento formal da lei, não sendo mais ampla que a legalidade.\n\nEstão corretas:',
        alternativas: [
          { id: 'A', texto: 'Apenas I.' },
          { id: 'B', texto: 'Apenas II.' },
          { id: 'C', texto: 'Apenas I e II.' },
          { id: 'D', texto: 'Apenas II e III.' },
          { id: 'E', texto: 'I, II e III.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C está correta. I e II são verdadeiras; III é falsa (a moralidade é mais ampla que a legalidade — exige ética, probidade e boa-fé, além do cumprimento formal da lei).',
        explicacaoDetalhada: {
          correta: 'A alternativa C está correta. A afirmação I está certa: o rol expresso do caput do art. 37 é o LIMPE (legalidade, impessoalidade, moralidade, publicidade e eficiência). A II também está certa: a eficiência foi inserida pela EC 19/1998, integrando o projeto gerencial. A III está INCORRETA: a moralidade é MAIS AMPLA que a legalidade — exige ética, probidade, boa-fé e lealdade, não se limitando ao cumprimento formal da lei.',
          incorretas: {
            A: 'A afirmação I está correta, mas a II também. A EC 19/1998 inseriu a eficiência no art. 37 — é o marco constitucional do gerencialismo. Excluir a II é negar o fato histórico.',
            B: 'A afirmação II está correta, mas a I também. O LIMPE é o rol expresso do caput do art. 37. Excluir a I é negar a estrutura básica do dispositivo.',
            D: 'A afirmação III é falsa — a moralidade NÃO se limita ao cumprimento formal da lei. Incluir a III como correta é o erro central. A II está correta, mas a III não.',
            E: 'Não é possível aceitar as três. A III é o erro: a moralidade é mais ampla que a legalidade. Ato legal pode ser imoral (ex.: nepotismo formalmente amparado por norma interna). A moralidade exige ética, probidade e boa-fé, além da legalidade.'
          },
          conceitoCobrado: 'LIMPE e a relação entre legalidade e moralidade administrativa',
          pegadinha: 'A afirmação III usa a expressão "se limita a" e "não sendo mais ampla" — dois absolutos que denunciam o erro. A moralidade é mais ampla que a legalidade: um ato pode ser legal e imoral. Essa distinção é clássica em provas.',
          comoApareceEmConcurso: 'Bancas testam a distinção legalidade x moralidade com frequência. A afirmação que reduz a moralidade ao cumprimento formal da lei é quase sempre FALSA. A dica: moralidade = legalidade + ética + probidade + boa-fé.',
          exemploInedito: {
            contexto: 'Um prefeito nomeia o filho para cargo em comissão, amparado por lei municipal que permite a nomeação. O ato é formalmente legal — mas viola a impessoalidade e a moralidade (Súmula Vinculante 13).',
            aplicacao: 'O ato é LEGAL (há norma permitindo) mas IMORAL (nepotismo, favorecimento familiar). A moralidade é mais ampla que a legalidade: exige ética e probidade, não apenas cumprimento formal. Se alguém dissesse "é legal, logo é moral", estaria cometendo o erro da afirmação III.',
            desafio: 'Pense em outro exemplo de ato legal mas imoral no serviço público. Como a moralidade administrativa poderia ser invocada para corrigi-lo?'
          }
        },
        tags: ['LIMPE', 'legalidade', 'moralidade', 'eficiência', 'afirmações romanas']
      },

      /* ---------- Item 2 — C/E — Dificuldade 1 ---------- */
      {
        id: 'D-DA-15-02',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 1,
        subtopico: 'Autotutela x tutela',
        pergunta: 'Autotutela e tutela são sinônimos: ambos designam o poder da Administração Direta de rever os atos das entidades da Administração Indireta.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. Autotutela é a revisão dos PRÓPRIOS atos (Súmulas 346 e 473 do STF); tutela é a supervisão da Direta sobre a Indireta. São institutos distintos.',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. AUTOTUTELA é o poder de a Administração rever SEUS PRÓPRIOS atos — anulando os ilegais e revogando os inconvenientes (Súmulas 346 e 473 do STF). TUTELA (ou controle finalístico) é a supervisão que a Administração Direta exerce sobre as entidades da Administração Indireta. São institutos distintos: um é autocontrole; o outro é supervisão de outra entidade.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela iguala dois institutos com naturezas diferentes. Autotutela opera sobre os próprios atos (a mesma pessoa jurídica revê o que fez). Tutela opera sobre outra pessoa jurídica (a Direta supervisiona a Indireta). Confundi-los é erro clássico, muito explorado em provas.'
          },
          conceitoCobrado: 'Distinção entre autotutela (autocontrole) e tutela (supervisão da Indireta)',
          pegadinha: 'Os dois termos começam com "tutela" e são próximos na sonoridade — o que induz à confusão. Fixar: AUTOtutela = eu revendo o que eu fiz; TUTELA = eu supervisionando o que outro fez.',
          comoApareceEmConcurso: 'Bancas usam essa distinção com frequência. A afirmação "autotutela e tutela são sinônimos" é quase sempre FALSA. A dica mnemônica: AUTO = sobre si mesmo; TUTELA = sobre outro.',
          exemploInedito: {
            contexto: 'Um ministério anula, de ofício, uma portaria ilegal que ele mesmo editou (autotutela). Paralelamente, a Secretaria-Executiva supervisiona os atos de uma autarquia vinculada, avaliando o cumprimento das finalidades institucionais (tutela).',
            aplicacao: 'São duas operações distintas: autotutela (revisão dos próprios atos) e tutela (supervisão da entidade vinculada). A primeira é autocontrole; a segunda é controle finalístico sobre outra pessoa jurídica. Confundi-las levaria a erros de competência e de procedimento.',
            desafio: 'Se um ministério quer rever um ato praticado por uma autarquia vinculada, ele usa autotutela ou tutela? Qual o instrumento adequado e quais os limites?'
          }
        },
        tags: ['autotutela', 'tutela', 'Súmula 473']
      },

      /* ---------- Item 3 — Formato 1 (V/F sequência) — Dificuldade 2 ---------- */
      {
        id: 'D-DA-15-03',
        tipo: 'multipla_escolha',
        formato: 'vf_sequencia',
        dificuldade: 2,
        subtopico: 'Princípios da Administração Pública — aplicação e distinções',
        pergunta: 'Sobre os princípios da Administração Pública, analise as afirmações e assinale a sequência correta:\n\nI. A supremacia do interesse público fundamenta as prerrogativas da Administração (ex.: desapropriação, cláusulas exorbitantes).\nII. A indisponibilidade do interesse público fundamenta as restrições à atuação administrativa (ex.: legalidade estrita, impessoalidade).\nIII. Razoabilidade e proporcionalidade são sinônimos: ambas exigem apenas a análise de adequação meios-fins.\nIV. O princípio da publicidade exige a divulgação oficial dos atos administrativos como condição de eficácia.',
        alternativas: [
          { id: 'A', texto: 'V – V – V – F.' },
          { id: 'B', texto: 'V – V – F – V.' },
          { id: 'C', texto: 'V – F – V – V.' },
          { id: 'D', texto: 'F – V – V – V.' },
          { id: 'E', texto: 'V – F – F – V.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B está correta: I (V), II (V), III (F), IV (V). A III é falsa: razoabilidade e proporcionalidade NÃO são sinônimos — a proporcionalidade é mais analítica (três planos: adequação, necessidade e proporcionalidade em sentido estrito).',
        explicacaoDetalhada: {
          correta: 'A alternativa B está correta: I (V), II (V), III (F), IV (V). A I está certa: supremacia = prerrogativas. A II está certa: indisponibilidade = restrições. A III está FALSA: razoabilidade e proporcionalidade não são sinônimos — a proporcionalidade tem três planos (adequação, necessidade e proporcionalidade em sentido estrito); a razoabilidade é mais ampla e envolve congruência lógica e equidade. A IV está certa: publicidade = divulgação oficial como condição de eficácia.',
          incorretas: {
            A: 'A alternativa erra ao marcar a III como verdadeira. Razoabilidade e proporcionalidade não são sinônimos: a proporcionalidade é mais analítica (três planos); a razoabilidade é mais ampla. A redução a "apenas adequação meios-fins" é incompleta — ignora necessidade e proporcionalidade em sentido estrito.',
            C: 'A alternativa erra ao marcar a II como falsa. A indisponibilidade fundamenta, sim, as restrições (legalidade estrita, impessoalidade). Também erra ao marcar a III como verdadeira (ela é falsa).',
            D: 'A alternativa erra ao marcar a I como falsa. A supremacia fundamenta as prerrogativas — é a base da desapropriação e das cláusulas exorbitantes. Descartar essa definição é erro conceitual básico. Também erra ao marcar a III como verdadeira.',
            E: 'A alternativa erra ao marcar a II como falsa (ela é verdadeira) e a III como falsa (correto). A combinação mostra confusão sobre a natureza da indisponibilidade — que é restrição, não prerrogativa.'
          },
          conceitoCobrado: 'Princípios da Administração Pública — supremacia, indisponibilidade, razoabilidade, proporcionalidade, publicidade',
          pegadinha: 'A afirmação III usa "sinônimos" para tentar igualar razoabilidade e proporcionalidade — são conceitos próximos, mas distintos. A proporcionalidade é mais analítica (três planos); a razoabilidade é mais ampla. A redução a "apenas adequação meios-fins" é insuficiente.',
          comoApareceEmConcurso: 'O formato V/F sequência é usado para testar 4 princípios em uma única questão. A banca costuma manter 3 afirmações verdadeiras e 1 falsa — geralmente a que iguala conceitos que são distintos.',
          exemploInedito: {
            contexto: 'Um município interdita um restaurante por 30 dias por falta de lixeira adequada (infração leve). A lei prevê advertência ou multa. A sanção é desproporcional — o meio (interdição) é mais gravoso que o necessário para o fim (corrigir a infração).',
            aplicacao: 'A proporcionalidade exige três análises: (1) ADEQUAÇÃO (a interdição é adequada ao fim? Sim, mas não é a única); (2) NECESSIDADE (há meio menos gravoso? Sim, advertência/multa); (3) PROPORCIONALIDADE EM SENTIDO ESTRITO (o benefício supera o custo? Não — 30 dias de interdição para uma infração leve é excessivo). A razoabilidade, por sua vez, questiona a congruência e a equidade da medida — também seria violada.',
            desafio: 'Em um caso concreto de sanção administrativa, aplique os três planos da proporcionalidade. Que perguntas você faria em cada etapa?'
          }
        },
        tags: ['supremacia', 'indisponibilidade', 'razoabilidade', 'proporcionalidade', 'publicidade', 'vf sequência']
      },

      /* ---------- Item 4 — C/E — Dificuldade 2 ---------- */
      {
        id: 'D-DA-15-04',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 2,
        subtopico: 'Proporcionalidade — três planos',
        pergunta: 'A proporcionalidade exige a análise de três planos: adequação (o meio é apto ao fim?), necessidade (há meio menos gravoso?) e proporcionalidade em sentido estrito (o benefício supera o custo?).',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'A afirmação é CERTA. A proporcionalidade tem três planos: adequação, necessidade e proporcionalidade em sentido estrito.',
        explicacaoDetalhada: {
          correta: 'A afirmação é CERTA. A proporcionalidade é analisada em três planos sucessivos: (1) ADEQUAÇÃO — o meio escolhido é apto a atingir o fim? (2) NECESSIDADE — há outro meio menos gravoso, igualmente apto? (3) PROPORCIONALIDADE EM SENTIDO ESTRITO — o benefício trazido supera o custo imposto? A análise é sucessiva: só se avança para o próximo plano se o anterior for vencido.',
          incorretas: {
            F: 'A afirmação não é falsa. Ela descreve corretamente os três planos da proporcionalidade. Tratar como falsa indicaria desconhecimento do modelo — ou confusão com a razoabilidade, que é mais ampla e não tem essa estrutura trifásica rígida.'
          },
          conceitoCobrado: 'Proporcionalidade — três planos (adequação, necessidade, proporcionalidade em sentido estrito)',
          pegadinha: 'A afirmação está correta. A armadilha (não presente) seria reduzir a proporcionalidade a "apenas adequação meios-fins" (como na questão anterior, afirmação III). Verificar cada plano: adequação (sim), necessidade (sim), proporcionalidade em sentido estrito (sim) — todos corretos.',
          comoApareceEmConcurso: 'Bancas usam essa estrutura em C/E para testar se o candidato domina os três planos. A afirmação costuma ser verdadeira, mas pode vir com um plano suprimido (ex.: "a proporcionalidade exige apenas adequação e necessidade") para torná-la falsa.',
          exemploInedito: {
            contexto: 'Um município quer reduzir acidentes em uma avenida. Alternativas: (a) instalar radar (adequado, mas custoso); (b) reduzir a velocidade máxima (adequado, menos custoso); (c) proibir totalmente o tráfego de carros (adequado, mas gravosíssimo).',
            aplicacao: 'ADEQUAÇÃO: as três são aptas ao fim. NECESSIDADE: a (c) é mais gravosa que o necessário — descartada. Entre (a) e (b), a (b) é menos gravosa e igualmente eficaz — preferível. PROPORCIONALIDADE EM SENTIDO ESTRITO: o benefício (redução de acidentes) supera o custo (redução de velocidade)? Sim. Logo, a medida (b) é proporcional.',
            desafio: 'Aplique os três planos a uma situação do seu município (ex.: interdição de bar por perturbação do sossego). Que análise você faria em cada plano?'
          }
        },
        tags: ['proporcionalidade', 'adequação', 'necessidade', 'sentido estrito']
      },

      /* ---------- Item 5 — Situação — Dificuldade 2 ---------- */
      {
        id: 'D-DA-15-05',
        tipo: 'situacao',
        formato: 'multipla_escolha',
        dificuldade: 2,
        subtopico: 'Proporcionalidade em sanções administrativas',
        pergunta: 'Em um município, dois fiscais aplicam sanções em situações distintas: (a) um restaurante é interditado por 30 dias por falta de lixeira adequada — infração leve, para a qual a lei prevê advertência ou multa; (b) uma empresa que contaminou alimentos (infração gravíssima) recebe simples advertência. Sobre as duas decisões, é CORRETO afirmar que:',
        alternativas: [
          { id: 'A', texto: 'ambas violam a razoabilidade e a proporcionalidade — a primeira por excesso (sanção mais gravosa que a infração), a segunda por insuficiência (sanção mais branda que a infração).' },
          { id: 'B', texto: 'apenas a primeira viola a proporcionalidade, pois a segunda é decisão discricionária do fiscal, insuscetível de controle.' },
          { id: 'C', texto: 'apenas a segunda viola a proporcionalidade, pois a primeira é legalmente prevista para o caso.' },
          { id: 'D', texto: 'nenhuma das duas viola princípios, pois o fiscal tem discricionariedade absoluta na escolha da sanção.' },
          { id: 'E', texto: 'ambas violam apenas a legalidade, pois a lei prevê sanções específicas para cada caso.' }
        ],
        gabarito: 'A',
        explicacao: 'A alternativa A está correta. Ambas violam razoabilidade e proporcionalidade: a primeira por excesso (interdição para infração leve); a segunda por insuficiência (advertência para infração gravíssima).',
        explicacaoDetalhada: {
          correta: 'A alternativa A está correta. A proporcionalidade atua em DOIS SENTIDOS: (1) por EXCESSO — quando a sanção é mais gravosa que a infração (interdição de 30 dias para falta de lixeira, infração leve para a qual a lei prevê advertência ou multa); (2) por INSUFICIÊNCIA — quando a sanção é mais branda que a infração (advertência para contaminação de alimentos, infração gravíssima). Ambas violam a proporcionalidade e a razoabilidade.',
          incorretas: {
            B: 'A alternativa erra ao dizer que só a primeira viola a proporcionalidade. A segunda também viola — por insuficiência. A discricionariedade do fiscal NÃO é absoluta: está limitada pelos princípios (razoabilidade, proporcionalidade, moralidade). A escolha da sanção pode e deve ser controlada.',
            C: 'A alternativa erra ao dizer que só a segunda viola a proporcionalidade. A primeira também viola — por excesso. O fato de a interdição estar prevista em lei para outros casos não a torna proporcional para uma infração leve.',
            D: 'A alternativa erra ao afirmar discricionariedade absoluta. A discricionariedade administrativa é sempre limitada pela lei e pelos princípios. A razoabilidade e a proporcionalidade são justamente limites ao exercício da discricionariedade — não há "discricionariedade absoluta".',
            E: 'A alternativa erra ao reduzir as violações à legalidade. As duas decisões podem ser formalmente legais (a lei prevê as sanções) mas materialmente desproporcionais. A violação central é à razoabilidade/proporcionalidade, não apenas à legalidade.'
          },
          conceitoCobrado: 'Proporcionalidade em sanções administrativas — excesso e insuficiência',
          pegadinha: 'A banca apresenta DUAS situações opostas para testar se o candidato entende que a proporcionalidade atua nos DOIS sentidos (excesso E insuficiência). Quem pensa só no excesso erra a segunda situação; quem pensa só na insuficiência erra a primeira.',
          comoApareceEmConcurso: 'Cenários com sanções desproporcionais são clássicos. A banca costuma apresentar duas situações (uma por excesso, outra por insuficiência) e exigir que o candidato reconheça ambas. A dica: proporcionalidade é uma via de mão dupla.',
          exemploInedito: {
            contexto: 'Um órgão aplica: (a) multa máxima a um servidor que chegou 5 minutos atrasado uma única vez (excesso); (b) advertência a um servidor que desviou recursos (insuficiência).',
            aplicacao: 'As duas sanções são desproporcionais — uma por excesso (multa máxima para atraso de 5 minutos), outra por insuficiência (advertência para desvio de recursos). A proporcionalidade exige adequação entre a gravidade da falta e a sanção aplicada, em ambos os sentidos.',
            desafio: 'Em uma sanção disciplinar concreta, como você avaliaria se houve excesso ou insuficiência? Que parâmetros usaria?'
          }
        },
        tags: ['proporcionalidade', 'razoabilidade', 'sanção', 'situação aplicada']
      },

      /* ---------- Item 6 — Formato 3 (Associação) — Dificuldade 3 ---------- */
      {
        id: 'D-DA-15-06',
        tipo: 'multipla_escolha',
        formato: 'associacao',
        dificuldade: 3,
        subtopico: 'Princípios e suas características centrais',
        pergunta: 'Sobre os princípios da Administração Pública, associe corretamente cada PRINCÍPIO à sua CARACTERÍSTICA CENTRAL:\n\nColuna I — Princípio\n1. Legalidade\n2. Impessoalidade\n3. Publicidade\n\nColuna II — Característica central\n( ) Divulgação oficial dos atos como condição de eficácia, para transparência e controle social.\n( ) Administração só age conforme a lei autoriza ou determina; ao particular, é lícito fazer o que a lei não proíbe.\n( ) Tratamento igualitário, sem favorecimentos ou promoção pessoal, com atuação voltada ao interesse coletivo.',
        alternativas: [
          { id: 'A', texto: '1 – primeira; 2 – segunda; 3 – terceira.' },
          { id: 'B', texto: '1 – segunda; 2 – terceira; 3 – primeira.' },
          { id: 'C', texto: '1 – terceira; 2 – primeira; 3 – segunda.' },
          { id: 'D', texto: '1 – segunda; 2 – primeira; 3 – terceira.' },
          { id: 'E', texto: '1 – terceira; 2 – segunda; 3 – primeira.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B está correta. Legalidade (1) → Administração só age conforme a lei (segunda). Impessoalidade (2) → tratamento igualitário, sem favorecimentos (terceira). Publicidade (3) → divulgação oficial dos atos (primeira).',
        explicacaoDetalhada: {
          correta: 'A alternativa B está correta. LEGALIDADE (1) → Administração só age conforme a lei autoriza ou determina; ao particular, é lícito fazer o que a lei não proíbe (segunda da Coluna II). IMPESSOALIDADE (2) → tratamento igualitário, sem favorecimentos ou promoção pessoal (terceira da Coluna II). PUBLICIDADE (3) → divulgação oficial dos atos como condição de eficácia (primeira da Coluna II).',
          incorretas: {
            A: 'A alternativa erra em todas as três: coloca legalidade como divulgação (publicidade), impessoalidade como legalidade e publicidade como impessoalidade. Inversão completa. A confusão entre os três princípios impede a associação correta.',
            C: 'A alternativa coloca legalidade como tratamento igualitário (impessoalidade), impessoalidade como divulgação (publicidade) e publicidade como legalidade. Inversão circular dos três princípios.',
            D: 'A alternativa acerta legalidade como legalidade (segunda) e erra as outras duas: coloca impessoalidade como divulgação (é tratamento igualitário) e publicidade como tratamento igualitário (é divulgação). Erro de inversão entre impessoalidade e publicidade.',
            E: 'A alternativa coloca legalidade como tratamento igualitário (impessoalidade), impessoalidade como tratamento igualitário (correto, mas redundante) e publicidade como legalidade. Erro duplo e confusão entre legalidade e publicidade.'
          },
          conceitoCobrado: 'Características centrais dos princípios da legalidade, impessoalidade e publicidade',
          pegadinha: 'A associação exige que o candidato não apenas conheça os três princípios isoladamente, mas a CORRESPONDÊNCIA entre cada um e sua característica central. A confusão mais comum é entre legalidade e publicidade (ambas envolvem "lei" e "oficialidade") e entre impessoalidade e publicidade (ambas envolvem "tratamento igualitário" e "transparência").',
          comoApareceEmConcurso: 'Bancas usam associação de colunas com princípios e características para testar precisão. É comum embaralhar as colunas de modo que apenas uma combinação esteja integralmente correta.',
          exemploInedito: {
            contexto: 'Em uma Secretaria: (a) o gestor só autoriza despesa com base em lei orçamentária (legalidade); (b) servidores tratam todos os cidadãos por ordem de chegada, sem favorecimentos (impessoalidade); (c) a Secretaria publica no Diário Oficial todos os atos administrativos (publicidade).',
            aplicacao: 'Cada princípio tem uma expressão concreta. Legalidade = agir conforme a lei; impessoalidade = tratar igualmente; publicidade = divulgar oficialmente. Confundir legalidade com publicidade (ambas envolvem "oficialidade") ou impessoalidade com publicidade (ambas envolvem "transparência") é o erro mais comum.',
            desafio: 'Pense em um caso em que a violação de um princípio leva, automaticamente, à violação de outro. Ex.: ato sem motivação viola moralidade e publicidade? Justifique.'
          }
        },
        tags: ['legalidade', 'impessoalidade', 'publicidade', 'associação']
      },

      /* ---------- Item 7 — Autoavaliação ---------- */
      {
        id: 'D-DA-15-07',
        tipo: 'autoavaliacao',
        subtopico: 'Princípios da Administração Pública — visão integrada',
        pergunta: 'Sem consultar, você consegue explicar o LIMPE, diferenciar autotutela de tutela, razoabilidade de proporcionalidade e identificar violações a princípios em situações concretas?',
        resposta: 'LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiência (art. 37, caput, CF; eficiência inserida pela EC 19/1998). LEGALIDADE: Administração só age conforme a lei autoriza/determina; ao particular, é lícito fazer o que a lei não proíbe. IMPESSOALIDADE: tratamento igualitário, sem favorecimentos ou promoção pessoal. MORALIDADE: ética, probidade e boa-fé — mais ampla que a legalidade (ato pode ser legal e imoral). PUBLICIDADE: divulgação oficial como condição de eficácia. EFICIÊNCIA: prestar serviços com qualidade, rapidez e uso racional de recursos. AUTOTUTELA x TUTELA: revisão dos próprios atos (Súmulas 346 e 473) x supervisão da Direta sobre a Indireta. RAZOABILIDADE x PROPORCIONALIDADE: a primeira é mais ampla (congruência, equidade); a segunda tem três planos (adequação, necessidade e proporcionalidade em sentido estrito). SUPREMACIA x INDISPONIBILIDADE: prerrogativas x restrições. PROPORCIONALIDADE EM SANÇÕES: atua nos dois sentidos — excesso e insuficiência. Ato ilegal deve ser anulado; ato inconveniente, revogado.'
      }

    ]
  },

  /* ============================================================
     DA-16 — Organização da Administração Pública
  ============================================================ */
  'DA-16': {
    id: 'D-DA-16',
    moduloId: 'DA-16',
    itens: [

      /* ---------- Item 1 — Formato 6 (EXCETO) — Dificuldade 1 ---------- */
      {
        id: 'D-DA-16-01',
        tipo: 'multipla_escolha',
        formato: 'excecao',
        dificuldade: 1,
        subtopico: 'Entidades da Administração Indireta',
        pergunta: 'Sobre as entidades da Administração Indireta, assinale a alternativa INCORRETA:',
        alternativas: [
          { id: 'A', texto: 'Autarquia é entidade de direito público, criada por lei específica, com capacidade de autoadministração.' },
          { id: 'B', texto: 'Fundação pública é entidade de direito público ou privado, criada para exercer atividade não exclusiva do Estado.' },
          { id: 'C', texto: 'Empresa pública é entidade de direito privado, com capital 100% público, podendo adotar qualquer forma societária.' },
          { id: 'D', texto: 'Sociedade de economia mista é entidade de direito privado, com capital misto, maioria pública, sempre constituída como S.A.' },
          { id: 'E', texto: 'Todas as entidades da Administração Indireta são de direito privado, independentemente da atividade exercida.' }
        ],
        gabarito: 'E',
        explicacao: 'A alternativa E é a INCORRETA. Nem todas as entidades da Indireta são de direito privado: autarquias e fundações públicas são de direito público. A natureza depende da lei criadora e da atividade.',
        explicacaoDetalhada: {
          correta: 'A alternativa E está INCORRETA e, por isso, é a resposta. Nem todas as entidades da Administração Indireta são de direito privado. AUTARQUIAS são de direito PÚBLICO; FUNDAÇÕES PÚBLICAS podem ser de direito público ou privado; EMPRESAS PÚBLICAS e SOCIEDADES DE ECONOMIA MISTA são de direito PRIVADO. A natureza depende da lei criadora e da atividade exercida.',
          incorretas: {
            A: 'A alternativa está correta e não deve ser marcada. Autarquia é entidade de direito público, criada por lei específica, com autoadministração. Seria INCORRETA se dissesse que autarquia é de direito privado — isso é empresa pública/SEM.',
            B: 'A alternativa está correta e não deve ser marcada. Fundação pública é de direito público ou privado, para atividade não exclusiva. Seria INCORRETA se dissesse que fundação é sempre de direito privado.',
            C: 'A alternativa está correta e não deve ser marcada. Empresa pública é de direito privado, capital 100% público, qualquer forma societária. Seria INCORRETA se dissesse que a EP é sempre S.A. — isso é a SEM.',
            D: 'A alternativa está correta e não deve ser marcada. Sociedade de economia mista é de direito privado, capital misto, maioria pública, sempre S.A. Seria INCORRETA se dissesse que a SEM pode ser Ltda. — a SEM é sempre S.A.'
          },
          conceitoCobrado: 'Natureza jurídica das entidades da Administração Indireta',
          pegadinha: 'A alternativa E usa "todas" e "independentemente" — dois absolutos que denunciam o erro. A natureza das entidades varia: autarquias e fundações públicas são de direito público; EP e SEM são de direito privado. A generalização é falsa.',
          comoApareceEmConcurso: 'Bancas costumam testar a natureza jurídica das entidades em uma única alternativa do formato EXCETO. A pegadinha clássica é generalizar "todas são de direito privado" ou "todas são de direito público" — ambas falsas.',
          exemploInedito: {
            contexto: 'Um órgão público cria: (a) autarquia para gestão de transporte (direito público); (b) empresa pública para processamento de dados (direito privado); (c) sociedade de economia mista para energia (direito privado, S.A.); (d) fundação pública para ensino (pode ser pública ou privada).',
            aplicacao: 'A natureza jurídica varia conforme a lei criadora. Dizer que "todas são de direito privado" é o erro da alternativa E. A distinção importa: entidades de direito público têm regime jurídico próprio (prerrogativas e restrições); entidades de direito privado têm regime mais próximo do privado, com adaptações.',
            desafio: 'Por que a natureza jurídica (pública x privada) importa para o regime de pessoal, de licitação e de responsabilidade civil? Dê um exemplo.'
          }
        },
        tags: ['administração indireta', 'autarquia', 'fundação', 'EP', 'SEM']
      },

      /* ---------- Item 2 — C/E — Dificuldade 1 ---------- */
      {
        id: 'D-DA-16-02',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 1,
        subtopico: 'Descentralização por outorga',
        pergunta: 'A criação de autarquia configura descentralização por outorga, pois transfere a titularidade da atividade a uma entidade com personalidade jurídica própria.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'A afirmação é CERTA. Criar autarquia é descentralização por outorga: transfere a titularidade da atividade a uma entidade com personalidade jurídica própria.',
        explicacaoDetalhada: {
          correta: 'A afirmação é CERTA. A criação de autarquia é DESCENTRALIZAÇÃO POR OUTORGA: o Estado transfere a TITULARIDADE da atividade a uma entidade com personalidade jurídica própria, criada por lei específica. A outorga é definitiva (não há prazo) e só pode ser retomada por lei. Distingue-se da DESCENTRALIZAÇÃO POR DELEGAÇÃO, em que o Estado transfere apenas a EXECUÇÃO a um particular (ex.: concessão, permissão).',
          incorretas: {
            F: 'A afirmação não é falsa. Ela descreve corretamente a descentralização por outorga: criação de entidade com personalidade jurídica própria, com transferência da titularidade. Tratar como falsa indicaria confusão com a descentralização por delegação (particular) ou com a desconcentração (divisão interna, sem nova pessoa).'
          },
          conceitoCobrado: 'Descentralização por outorga — criação de entidade da Administração Indireta',
          pegadinha: 'A afirmação está correta. A armadilha (não presente) seria trocar outorga por delegação, ou dizer que a autarquia é mera divisão interna (desconcentração). A outorga é caracterizada pela criação de NOVA pessoa jurídica com titularidade da atividade.',
          comoApareceEmConcurso: 'Bancas usam essa distinção em C/E para testar se o candidato domina os três institutos: outorga (entidade), delegação (particular) e desconcentração (divisão interna). A afirmação costuma ser verdadeira, mas pode vir com "delegação" no lugar de "outorga" para torná-la falsa.',
          exemploInedito: {
            contexto: 'O Estado cria, por lei específica, uma autarquia para gerir o serviço de água e esgoto. A entidade tem patrimônio próprio, personalidade jurídica de direito público e capacidade de autoadministração.',
            aplicacao: 'A criação é DESCENTRALIZAÇÃO POR OUTORGA: houve transferência de titularidade para entidade com personalidade própria. Se o Estado apenas dividisse a Secretaria de Águas em coordenações internas, seria DESCONCENTRAÇÃO (sem nova pessoa). Se celebrasse contrato com empresa privada, seria DELEGAÇÃO (execução, não titularidade).',
            desafio: 'Por que a descentralização por outorga só pode ser retomada por lei? O que isso protege em termos de estabilidade institucional?'
          }
        },
        tags: ['descentralização', 'outorga', 'autarquia']
      },

      /* ---------- Item 3 — Formato 2 (I, II, III) — Dificuldade 2 ---------- */
      {
        id: 'D-DA-16-03',
        tipo: 'multipla_escolha',
        formato: 'afirmacoes_romanas',
        dificuldade: 2,
        subtopico: 'Administração Direta x Indireta; descentralização x desconcentração',
        pergunta: 'Sobre a organização da Administração Pública, analise as afirmações a seguir:\n\nI. A Administração Direta é composta pelos entes federativos (União, Estados, DF, Municípios) e seus órgãos, que não têm personalidade jurídica própria.\nII. A desconcentração cria nova pessoa jurídica, distribuindo competências entre entidades da Administração Indireta.\nIII. A descentralização pode ocorrer por outorga (criação de entidade) ou por delegação (transferência a particular).\n\nEstão corretas:',
        alternativas: [
          { id: 'A', texto: 'Apenas I.' },
          { id: 'B', texto: 'Apenas II.' },
          { id: 'C', texto: 'Apenas I e III.' },
          { id: 'D', texto: 'Apenas II e III.' },
          { id: 'E', texto: 'I, II e III.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C está correta. I e III são verdadeiras; II é falsa (desconcentração NÃO cria nova pessoa jurídica — é divisão interna entre órgãos da mesma pessoa).',
        explicacaoDetalhada: {
          correta: 'A alternativa C está correta. A afirmação I está certa: Administração Direta = entes + órgãos (sem personalidade própria). A III também está certa: descentralização = outorga (entidade) ou delegação (particular). A II está INCORRETA: a desconcentração NÃO cria nova pessoa jurídica — é a distribuição interna de competências entre órgãos da MESMA pessoa jurídica (ex.: Secretaria dividida em coordenações regionais).',
          incorretas: {
            A: 'A afirmação I está correta, mas a III também. A descentralização pode ocorrer por outorga ou delegação — é a classificação clássica. Excluir a III é negar a distinção.',
            B: 'A afirmação II é falsa — desconcentração não cria nova pessoa. A I e a III estão corretas. Portanto, "apenas II" não procede.',
            D: 'A afirmação II é falsa — desconcentração não cria nova pessoa. Incluí-la é o erro central. A III está correta, mas a II não.',
            E: 'Não é possível aceitar as três. A II é o erro: ela confunde DESCENTRALIZAÇÃO (que cria nova pessoa) com DESCONCENTRAÇÃO (que mantém a mesma pessoa). A desconcentração é divisão interna — não cria entidade.'
          },
          conceitoCobrado: 'Distinção entre Administração Direta/Indireta e descentralização/desconcentração',
          pegadinha: 'A afirmação II troca descentralização por desconcentração. A dica: "se criou CNPJ, é descentralização; se manteve o mesmo CNPJ, é desconcentração". A desconcentração é divisão INTERNA entre órgãos da mesma pessoa jurídica.',
          comoApareceEmConcurso: 'Bancas testam a distinção descentralização x desconcentração com frequência. A afirmação que chama de descentralização a divisão interna entre órgãos é quase sempre FALSA.',
          exemploInedito: {
            contexto: 'Uma prefeitura: (a) cria autarquia para gestão de resíduos (descentralização por outorga — nova pessoa); (b) divide a Secretaria de Saúde em quatro coordenações regionais (desconcentração — mesma pessoa); (c) celebra concessão com empresa privada para transporte (descentralização por delegação — particular).',
            aplicacao: 'Só (a) e (c) são descentralização. (b) é desconcentração — distribui internamente, sem criar pessoa. A afirmação II chama a divisão interna (b) de descentralização — erro. Fixar: descentralização = outra pessoa; desconcentração = mesma pessoa.',
            desafio: 'Por que a distinção importa na prática? Pense nas consequências jurídicas (regime de pessoal, licitação, controle) de cada instituto.'
          }
        },
        tags: ['direta', 'indireta', 'descentralização', 'desconcentração', 'afirmações romanas']
      },

      /* ---------- Item 4 — C/E — Dificuldade 2 ---------- */
      {
        id: 'D-DA-16-04',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 2,
        subtopico: 'Teoria do órgão',
        pergunta: 'Pela teoria do órgão, a conduta do agente público é imputada à pessoa jurídica a que pertence o órgão; a vítima aciona o Estado, que pode regressar contra o agente em caso de dolo ou culpa.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'A afirmação é CERTA. Pela teoria do órgão, a conduta do agente é imputada à pessoa jurídica. A vítima aciona o Estado; este pode regressar contra o agente (dolo ou culpa).',
        explicacaoDetalhada: {
          correta: 'A afirmação é CERTA. Pela TEORIA DO ÓRGÃO (ou imputação), a conduta do agente público é imputada à PESSOA JURÍDICA a que pertence o órgão. A vítima aciona o Estado (responsabilidade objetiva, art. 37, §6º, CF); o Estado, após indenizar, pode ajuizar AÇÃO REGRESSIVA contra o agente em caso de DOLO ou CULPA. São duas etapas distintas: (1) vítima x Estado (objetiva); (2) Estado x agente (subjetiva).',
          incorretas: {
            F: 'A afirmação não é falsa. Ela descreve corretamente a teoria do órgão e as duas etapas (vítima aciona Estado; Estado regressa contra agente). Tratar como falsa indicaria confusão com outras teorias (como a da representação) ou desconhecimento da dupla etapa.'
          },
          conceitoCobrado: 'Teoria do órgão e dupla etapa da responsabilidade (vítima x Estado; Estado x agente)',
          pegadinha: 'A afirmação está correta. A armadilha (não presente) seria dizer que a vítima aciona diretamente o agente, ou que o Estado regressa independentemente de dolo/culpa. A teoria do órgão imputa a conduta à pessoa jurídica — não ao agente diretamente.',
          comoApareceEmConcurso: 'Bancas usam essa teoria em C/E para testar se o candidato domina a imputação. A afirmação costuma ser verdadeira, mas pode vir com "a vítima aciona o agente" (errado) ou "o Estado regressa independentemente de dolo/culpa" (errado).',
          exemploInedito: {
            contexto: 'Um servidor do INSS, dirigindo veículo oficial com imprudência, atropela um pedestre. A vítima aciona o INSS (autarquia federal) e recebe indenização. Após indenizar, o INSS ajuíza ação regressiva contra o servidor, comprovando a imprudência (culpa).',
            aplicacao: 'A teoria do órgão imputa a conduta do servidor ao INSS (pessoa jurídica). A vítima aciona o Estado (INSS). Após indenizar, o INSS regressa contra o servidor (dolo ou culpa — aqui, imprudência = culpa). Duas etapas: vítima x Estado; Estado x agente.',
            desafio: 'Por que a vítima não aciona diretamente o agente público? Que vantagens a teoria do órgão traz para a vítima e para o serviço público?'
          }
        },
        tags: ['teoria do órgão', 'responsabilidade civil', 'ação regressiva']
      },

      /* ---------- Item 5 — Situação — Dificuldade 2 ---------- */
      {
        id: 'D-DA-16-05',
        tipo: 'situacao',
        formato: 'multipla_escolha',
        dificuldade: 2,
        subtopico: 'Identificação de entidade da Administração Indireta',
        pergunta: 'Um Estado cria, por lei específica, três entidades: (i) uma para fiscalizar serviços de energia elétrica; (ii) uma para prestar assistência técnica rural; (iii) uma para explorar atividade econômica de data center. Sobre a natureza jurídica dessas entidades, é CORRETO afirmar que:',
        alternativas: [
          { id: 'A', texto: 'as três são autarquias, pois todas integram a Administração Indireta.' },
          { id: 'B', texto: '(i) é autarquia de regime especial (agência reguladora); (ii) pode ser autarquia ou fundação pública; (iii) é empresa estatal (EP ou SEM).' },
          { id: 'C', texto: 'as três são empresas estatais, pois exercem atividade econômica.' },
          { id: 'D', texto: '(i) é empresa pública; (ii) é autarquia; (iii) é fundação pública.' },
          { id: 'E', texto: '(i) é sociedade de economia mista; (ii) é empresa pública; (iii) é autarquia.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B está correta. (i) agência reguladora = autarquia de regime especial; (ii) assistência técnica rural = autarquia ou fundação (depende da lei); (iii) data center = empresa estatal (EP ou SEM).',
        explicacaoDetalhada: {
          correta: 'A alternativa B está correta. (i) Agência reguladora = AUTARQUIA DE REGIME ESPECIAL (fiscaliza serviço público delegado). (ii) Assistência técnica rural = AUTARQUIA ou FUNDAÇÃO PÚBLICA (depende da lei criadora; em geral, autarquia). (iii) Exploração de atividade econômica (data center) = EMPRESA ESTATAL (Empresa Pública ou Sociedade de Economia Mista). A atividade define a natureza.',
          incorretas: {
            A: 'A alternativa erra ao classificar as três como autarquias. Só (i) e possivelmente (ii) são autarquias. (iii) explora atividade econômica — é empresa estatal, não autarquia. Autarquia exerce atividade típica de Estado, não exploração econômica.',
            C: 'A alternativa erra ao classificar as três como empresas estatais. (i) e (ii) exercem atividades típicas (fiscalização, assistência técnica) — são autarquias ou fundações. Só (iii) explora atividade econômica — é empresa estatal.',
            D: 'A alternativa erra em todas: (i) agência reguladora NÃO é empresa pública; (ii) assistência técnica rural NÃO é autarquia (é autarquia ou fundação — mas a classificação como "autarquia" está correta; o erro é classificar (i) como EP); (iii) data center NÃO é fundação — é empresa estatal.',
            E: 'A alternativa erra em todas: (i) agência reguladora NÃO é SEM; (ii) assistência técnica rural NÃO é empresa pública; (iii) data center NÃO é autarquia (é empresa estatal). Inversão completa.'
          },
          conceitoCobrado: 'Classificação das entidades da Administração Indireta pela atividade exercida',
          pegadinha: 'A banca descreve as atividades sem nomear as entidades — o candidato precisa classificar pela atividade. A confusão mais comum é entre autarquia (atividade típica) e empresa estatal (atividade econômica). A chave é: "explora atividade econômica?" Se sim, é empresa estatal; se não, é autarquia/fundação.',
          comoApareceEmConcurso: 'Cenários com atividades são clássicos para testar a classificação. A banca costuma embaralhar as três naturezas (autarquia, fundação, empresa estatal) e exigir do candidato a correspondência correta.',
          exemploInedito: {
            contexto: 'Um município cria: (a) autarquia para gestão do RPPS (previdência dos servidores); (b) fundação pública para gestão de museu; (c) empresa pública para processamento de dados; (d) SEM para transporte coletivo.',
            aplicacao: 'Cada entidade tem uma natureza. Autarquia: atividade típica (previdência). Fundação: atividade não exclusiva (cultura). EP: atividade econômica em regime de monopólio ou relevante interesse. SEM: atividade econômica em concorrência. A atividade define a natureza.',
            desafio: 'Se o Estado quisesse criar uma entidade para gerir um hospital público, qual natureza escolheria? E para gerir uma loteria? Justifique.'
          }
        },
        tags: ['administração indireta', 'autarquia', 'fundação', 'empresa estatal', 'situação aplicada']
      },

      /* ---------- Item 6 — Formato 4 (Lacunas) — Dificuldade 3 ---------- */
      {
        id: 'D-DA-16-06',
        tipo: 'multipla_escolha',
        formato: 'lacunas',
        dificuldade: 3,
        subtopico: 'Natureza jurídica das entidades da Administração Indireta',
        pergunta: 'Complete corretamente:\n\n"A ______ é entidade da Administração Indireta, criada por lei específica, com personalidade jurídica de direito público e capacidade de autoadministração. Já a ______ é entidade de direito privado, com capital 100% público, podendo adotar qualquer forma societária. A ______ é entidade de direito privado, com capital misto, maioria pública, sempre constituída como S.A. A ______ tem personalidade jurídica de direito público ou privado e exerce atividade não exclusiva do Estado."',
        alternativas: [
          { id: 'A', texto: 'autarquia — empresa pública — sociedade de economia mista — fundação pública.' },
          { id: 'B', texto: 'fundação pública — autarquia — empresa pública — sociedade de economia mista.' },
          { id: 'C', texto: 'empresa pública — autarquia — fundação pública — sociedade de economia mista.' },
          { id: 'D', texto: 'autarquia — sociedade de economia mista — empresa pública — fundação pública.' },
          { id: 'E', texto: 'fundação pública — empresa pública — autarquia — sociedade de economia mista.' }
        ],
        gabarito: 'A',
        explicacao: 'A alternativa A está correta. Autarquia (direito público) → empresa pública (100% público, qualquer forma) → sociedade de economia mista (capital misto, S.A.) → fundação pública (público ou privado, atividade não exclusiva).',
        explicacaoDetalhada: {
          correta: 'A alternativa A está correta. AUTARQUIA: direito público, criada por lei específica, autoadministração. EMPRESA PÚBLICA: direito privado, capital 100% público, qualquer forma societária. SOCIEDADE DE ECONOMIA MISTA: direito privado, capital misto (maioria pública), sempre S.A. FUNDAÇÃO PÚBLICA: direito público ou privado, atividade não exclusiva do Estado.',
          incorretas: {
            B: 'A alternativa começa com "fundação pública" no lugar de autarquia (errado — fundação não é a entidade de direito público criada por lei específica para autoadministração, isso é a autarquia). Inverte os papéis no primeiro e no segundo espaços.',
            C: 'A alternativa começa com "empresa pública" no lugar de autarquia (errado — EP é de direito privado, não público). Inverte o primeiro espaço.',
            D: 'A alternativa acerta autarquia no primeiro espaço, mas troca empresa pública por SEM no segundo (errado — SEM tem capital misto, não 100% público) e SEM por EP no terceiro (errado — EP tem capital 100% público, não misto). Erro duplo.',
            E: 'A alternativa começa com "fundação pública" (errado — é autarquia) e troca empresa pública por SEM no segundo espaço. Erro duplo na classificação inicial.'
          },
          conceitoCobrado: 'Natureza jurídica das entidades da Administração Indireta (autarquia, EP, SEM, fundação)',
          pegadinha: 'A banca exige distinguir quatro entidades com características próximas. A confusão mais comum é entre EP e SEM (capital 100% x misto; qualquer forma x S.A.) e entre autarquia e fundação (atividade típica x não exclusiva). A chave é: capital, forma societária, natureza (público x privado), atividade.',
          comoApareceEmConcurso: 'O formato lacunas é usado para testar terminologia técnica com precisão. A banca costuma oferecer alternativas que trocam os pares (EP x SEM) ou que invertem a natureza (autarquia x fundação) para capturar quem sabe "mais ou menos".',
          exemploInedito: {
            contexto: 'Um Estado: (a) autarquia previdenciária (RPPS — direito público); (b) empresa pública de TI (100% público); (c) SEM de energia (capital misto, S.A.); (d) fundação pública de cultura (atividade não exclusiva).',
            aplicacao: 'Cada entidade tem uma natureza. Autarquia (público, lei específica); EP (privado, 100% público, qualquer forma); SEM (privado, capital misto, S.A.); fundação (público ou privado, atividade não exclusiva). Trocar EP por SEM, ou autarquia por fundação, é o erro central.',
            desafio: 'Por que a SEM é sempre S.A. e a EP pode ter qualquer forma? Que razão histórica e jurídica explica essa diferença?'
          }
        },
        tags: ['autarquia', 'empresa pública', 'SEM', 'fundação', 'lacunas']
      },

      /* ---------- Item 7 — Autoavaliação ---------- */
      {
        id: 'D-DA-16-07',
        tipo: 'autoavaliacao',
        subtopico: 'Organização da Administração Pública — visão integrada',
        pergunta: 'Sem consultar, você consegue diferenciar Administração Direta de Indireta, autarquia de fundação, empresa pública de sociedade de economia mista, descentralização de desconcentração e centralização de descentralização?',
        resposta: 'ADMINISTRAÇÃO DIRETA x INDIRETA: entes federativos + órgãos (sem personalidade) x entidades com personalidade própria (autarquias, fundações, EP, SEM). AUTARQUIA x FUNDAÇÃO: direito público, atividade típica, criada por lei específica x direito público ou privado, atividade não exclusiva. EP x SEM: direito privado, capital 100% público, qualquer forma societária x direito privado, capital misto (maioria pública), sempre S.A. DESCENTRALIZAÇÃO x DESCONCENTRAÇÃO: outra pessoa jurídica (outorga a entidade ou delegação a particular) x mesma pessoa jurídica (divisão interna entre órgãos). CENTRALIZAÇÃO x DESCENTRALIZAÇÃO: o próprio ente executa x repassa a outra pessoa. TEORIA DO ÓRGÃO: a conduta do agente é imputada à pessoa jurídica; vítima aciona Estado (objetiva); Estado regressa contra agente (dolo/culpa). AGÊNCIA REGULADORA: autarquia de regime especial para fiscalizar serviços delegados.'
      }

    ]
  }
  ,

  /* ============================================================
     DA-17 — Agentes públicos
  ============================================================ */
  'DA-17': {
    id: 'D-DA-17',
    moduloId: 'DA-17',
    itens: [

      /* ---------- Item 1 — Formato 6 (EXCETO) — Dificuldade 1 ---------- */
      {
        id: 'D-DA-17-01',
        tipo: 'multipla_escolha',
        formato: 'excecao',
        dificuldade: 1,
        subtopico: 'Classificação dos agentes públicos',
        pergunta: 'Sobre a classificação dos agentes públicos, assinale a alternativa INCORRETA:',
        alternativas: [
          { id: 'A', texto: 'Agentes políticos ocupam a cúpula do Estado e exercem funções de direção superior, como Presidente, Governador, Prefeito, Ministros e Secretários.' },
          { id: 'B', texto: 'Servidores públicos são os que mantêm vínculo profissional com o Estado, sob regime estatutário, ocupando cargos efetivos ou em comissão.' },
          { id: 'C', texto: 'Empregados públicos mantêm vínculo celetista com a Administração, atuando em empresas públicas, sociedades de economia mista e fundações de direito privado.' },
          { id: 'D', texto: 'Particulares em colaboração exercem função pública sem vínculo empregatício, como mesários e jurados.' },
          { id: 'E', texto: 'Agentes políticos são os únicos que exercem função pública de natureza permanente e remunerada, não podendo ser substituídos por eleição.' }
        ],
        gabarito: 'E',
        explicacao: 'A alternativa E é a INCORRETA. Agentes políticos exercem mandato ou função de direção, podendo ser substituídos por eleição (Presidente, Governador, Prefeito) ou por nomeação (Ministros, Secretários). Não são os únicos que exercem função pública, e sua permanência não é a regra — o mandato é temporário.',
        explicacaoDetalhada: {
          correta: 'A alternativa E está INCORRETA e, por isso, é a resposta. Ela afirma três erros simultâneos: (1) que agentes políticos são os ÚNICOS a exercer função pública (falso — servidores, empregados e particulares em colaboração também exercem); (2) que exercem função de natureza permanente (falso — o mandato é temporário); (3) que não podem ser substituídos por eleição (o oposto — Presidente, Governador e Prefeito são substituídos justamente por eleição).',
          incorretas: {
            A: 'A alternativa está correta e não deve ser marcada. Agentes políticos ocupam a cúpula do Estado e exercem direção superior (Presidente, Governador, Prefeito, Ministros, Secretários). Seria INCORRETA se dissesse que agentes políticos são servidores comuns.',
            B: 'A alternativa está correta e não deve ser marcada. Servidores públicos têm vínculo profissional estatutário, em cargos efetivos ou em comissão. Seria INCORRETA se dissesse que servidores são celetistas — isso é empregado público.',
            C: 'A alternativa está correta e não deve ser marcada. Empregados públicos têm vínculo celetista, atuando em EP, SEM e fundações de direito privado. Seria INCORRETA se dissesse que empregados públicos são estatutários.',
            D: 'A alternativa está correta e não deve ser marcada. Particulares em colaboração exercem função pública sem vínculo empregatício (mesários, jurados). Seria INCORRETA se dissesse que têm vínculo estatutário.'
          },
          conceitoCobrado: 'Classificação dos agentes públicos — agentes políticos, servidores, empregados públicos e particulares em colaboração',
          pegadinha: 'A alternativa E usa "únicos" e "não podendo" — dois absolutos que denunciam o erro. Além disso, troca temporariedade por permanência e eleição por nomeação. Palavras absolutas em classificação de agentes são quase sempre sinal de erro.',
          comoApareceEmConcurso: 'Bancas costumam classificar erroneamente os agentes políticos em uma única alternativa do formato EXCETO, mantendo as demais corretas. A dica: "se o agente é eleito ou nomeado para cargo de direção, é político; se tem vínculo profissional, é servidor/empregado".',
          exemploInedito: {
            contexto: 'Em um município: (a) o prefeito é eleito (agente político); (b) o secretário municipal é nomeado (agente político); (c) o analista administrativo concursado é estatutário (servidor); (d) o empregado da empresa pública municipal é celetista (empregado público); (e) o mesário convocado pelo TRE exerce função pública sem vínculo (particular em colaboração).',
            aplicacao: 'Cada agente tem natureza distinta. Se alguém dissesse "agentes políticos são os únicos que exercem função pública permanente", cometeria três erros: ignora servidores/empregados/particulares; trata mandato como permanente; e nega a eleição. Exatamente o erro da alternativa E.',
            desafio: 'Em um órgão público, é possível haver um empregado público (celetista) e um servidor estatutário trabalhando lado a lado? Por quê? Cite um exemplo.'
          }
        },
        tags: ['agentes públicos', 'agentes políticos', 'servidores', 'empregados', 'particulares']
      },

      /* ---------- Item 2 — C/E — Dificuldade 1 ---------- */
      {
        id: 'D-DA-17-02',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 1,
        subtopico: 'Acumulação de cargos públicos',
        pergunta: 'A Constituição Federal veda a acumulação remunerada de cargos públicos, salvo as hipóteses taxativas do art. 37, XVI: dois cargos de professor; um cargo de professor com outro técnico ou científico; e dois cargos privativos de profissionais de saúde — sempre com compatibilidade de horários.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'A afirmação é CERTA. A regra é a vedação de acumulação; as exceções são as três hipóteses do art. 37, XVI (dois cargos de professor; professor + técnico/científico; dois de saúde), sempre com compatibilidade de horários.',
        explicacaoDetalhada: {
          correta: 'A afirmação é CERTA. A regra constitucional é a VEDAÇÃO da acumulação remunerada de cargos (art. 37, XVI). As exceções são TAXATIVAS: (a) dois cargos de professor; (b) um de professor com outro técnico ou científico; (c) dois privativos de profissionais de saúde. Em todos os casos, exige-se COMPATIBILIDADE DE HORÁRIOS e observância do teto remuneratório. A vedação vale também para empregos e funções públicas.',
          incorretas: {
            F: 'A afirmação não é falsa. Ela reproduz corretamente o art. 37, XVI, da CF/88: vedação geral com três exceções taxativas e exigência de compatibilidade de horários. Tratar como falsa indicaria desconhecimento da regra — ou confusão com outras hipóteses (como acumulação de proventos com remuneração, que tem regras próprias).'
          },
          conceitoCobrado: 'Regra e exceções da acumulação de cargos públicos (art. 37, XVI, CF/88)',
          pegadinha: 'A afirmação está correta. A armadilha (não presente) seria inventar uma exceção não prevista (ex.: "professor + médico") ou esquecer a exigência de compatibilidade de horários. Verificar cada hipótese: dois de professor (sim); professor + técnico/científico (sim); dois de saúde (sim) — todas corretas.',
          comoApareceEmConcurso: 'Bancas testam as exceções do art. 37, XVI, com frequência. A afirmação costuma ser verdadeira, mas pode vir com uma exceção inventada ("médico + professor" fora das hipóteses) ou sem a exigência de compatibilidade de horários, para torná-la falsa.',
          exemploInedito: {
            contexto: 'Uma enfermeira concursada em dois hospitais públicos: em ambos, cargo privativo de profissional de saúde (art. 37, XVI, "c"). Os horários são compatíveis (um pela manhã, outro à noite). A acumulação é lícita, respeitado o teto.',
            aplicacao: 'A acumulação se enquadra na hipótese "dois cargos privativos de profissionais de saúde" e atende à compatibilidade de horários. Já um professor que tentasse acumular com médico não se encaixaria em nenhuma hipótese — seria vedado. A chave é: "profissional de saúde + profissional de saúde" (sim); "professor + professor" (sim); "professor + técnico/científico" (sim); qualquer outra combinação (não).',
            desafio: 'Um servidor administrativo (técnico) quer acumular com professor. Essa acumulação é permitida? Em qual hipótese do art. 37, XVI se enquadraria? Justifique.'
          }
        },
        tags: ['acumulação', 'art. 37 XVI', 'cargos públicos']
      },

      /* ---------- Item 3 — Formato 2 (I, II, III) — Dificuldade 2 ---------- */
      {
        id: 'D-DA-17-03',
        tipo: 'multipla_escolha',
        formato: 'afirmacoes_romanas',
        dificuldade: 2,
        subtopico: 'Cargo x emprego x função pública',
        pergunta: 'Sobre as distinções entre cargo, emprego e função pública, analise as afirmações a seguir:\n\nI. Cargo público é o conjunto de atribuições e responsabilidades previstas na estrutura organizacional, criado por lei, com denominação própria e vencimento pago pelos cofres públicos.\nII. Emprego público é o vínculo de natureza celetista, regido pela CLT, típico das empresas públicas e sociedades de economia mista.\nIII. Função pública é o conjunto de atribuições às quais não corresponde necessariamente um cargo ou emprego, podendo ser exercida por particular em colaboração com o poder público.\n\nEstão corretas:',
        alternativas: [
          { id: 'A', texto: 'Apenas I.' },
          { id: 'B', texto: 'Apenas II.' },
          { id: 'C', texto: 'Apenas I e II.' },
          { id: 'D', texto: 'Apenas II e III.' },
          { id: 'E', texto: 'I, II e III.' }
        ],
        gabarito: 'E',
        explicacao: 'A alternativa E está correta. I, II e III são todas verdadeiras: cargo (estatutário), emprego (celetista) e função (sem cargo/emprego, podendo ser exercida por particular).',
        explicacaoDetalhada: {
          correta: 'A alternativa E está correta. A I está certa: cargo público é o conjunto de atribuições criado por lei, com denominação própria e vencimento. A II está certa: emprego público é o vínculo celetista, típico de EP/SEM. A III está certa: função pública é o conjunto de atribuições sem cargo/emprego necessariamente, podendo ser exercida por particular em colaboração (ex.: mesário, jurado).',
          incorretas: {
            A: 'A afirmação I está correta, mas a II e a III também. Excluir as duas é erro duplo. Emprego público (celetista) e função pública (sem cargo/emprego) são conceitos clássicos, ao lado do cargo (estatutário).',
            B: 'A afirmação II está correta, mas a I e a III também. Cargo (estatutário) e função (sem cargo/emprego) são conceitos clássicos. Excluí-los é erro duplo.',
            C: 'A afirmação III está correta — função pública pode ser exercida por particular em colaboração (mesário, jurado). Excluí-la é o erro central desta alternativa.',
            D: 'A afirmação I está correta — cargo é conjunto de atribuições criado por lei. Excluí-la é o erro central desta alternativa.'
          },
          conceitoCobrado: 'Distinção entre cargo (estatutário), emprego (celetista) e função (sem cargo/emprego)',
          pegadinha: 'A afirmação III é a mais sutil: função pública pode existir SEM cargo ou emprego — é o caso dos particulares em colaboração (mesário, jurado) e dos agentes de fato. Quem pensa que "todo agente tem cargo" erra. Função é gênero; cargo e emprego são espécies.',
          comoApareceEmConcurso: 'Bancas usam as três afirmações para testar o domínio da tríade cargo/emprego/função. A estratégia é colocar as três verdadeiras (como aqui) ou incluir uma falsa em ponto-chave — geralmente a que trata função como sinônimo de cargo.',
          exemploInedito: {
            contexto: 'Em um município: (a) o analista concursado é titular de CARGO efetivo (estatutário); (b) o empregado da empresa pública é titular de EMPREGO (celetista); (c) o mesário convocado pelo TRE exerce FUNÇÃO pública (sem cargo/emprego); (d) o secretário municipal exerce CARGO em comissão (estatutário, mas de livre nomeação).',
            aplicacao: 'A tríade se aplica: cargo (a e d), emprego (b) e função (c). O mesário é exemplo claro de função sem cargo/emprego — exerce atividade pública em colaboração. Confundir os três leva a erro de classificação e de regime jurídico.',
            desafio: 'Um jurado convocado para o Tribunal do Júri exerce cargo, emprego ou função? Qual o regime jurídico aplicável a ele?'
          }
        },
        tags: ['cargo', 'emprego', 'função', 'afirmações romanas']
      },

      /* ---------- Item 4 — C/E — Dificuldade 2 ---------- */
      {
        id: 'D-DA-17-04',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 2,
        subtopico: 'Provimento originário x derivado',
        pergunta: 'A nomeação é forma de provimento originário, enquanto a promoção, a readaptação, a reversão, o aproveitamento, a reintegração e a recondução são formas de provimento derivado.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'A afirmação é CERTA. A nomeação é provimento originário; promoção, readaptação, reversão, aproveitamento, reintegração e recondução são provimento derivado.',
        explicacaoDetalhada: {
          correta: 'A afirmação é CERTA. A NOMEAÇÃO é a única forma de PROVIMENTO ORIGINÁRIO — é o ingresso inicial no cargo, normalmente por concurso público. As demais formas são de PROVIMENTO DERIVADO, porque pressupõem vínculo anterior com a Administração: PROMOÇÃO (subida na carreira), READAPTAÇÃO (readequação por limitação física), REVERSÃO (retorno do aposentado), APROVEITAMENTO (retorno do servidor em disponibilidade), REINTEGRAÇÃO (retorno do demitido ilegalmente), RECONDUÇÃO (retorno ao cargo anterior). A TRANSFERÊNCIA deixou de ser provimento derivado após a EC 19/1998.',
          incorretas: {
            F: 'A afirmação não é falsa. Ela lista corretamente as formas de provimento: nomeação (originário); promoção, readaptação, reversão, aproveitamento, reintegração e recondução (derivados). Tratar como falsa indicaria desconhecimento da classificação — ou confusão com a transferência (que deixou de existir como provimento derivado após a EC 19/1998).'
          },
          conceitoCobrado: 'Provimento originário (nomeação) x derivado (demais formas)',
          pegadinha: 'A afirmação está correta. A armadilha (não presente) seria incluir a TRANSFERÊNCIA como provimento derivado — ela não é mais admitida após a EC 19/1998. Outra armadilha seria classificar a nomeação como derivada (errado — é originária).',
          comoApareceEmConcurso: 'Bancas usam essa classificação em C/E para testar se o candidato domina o rol. A afirmação costuma ser verdadeira, mas pode vir com "transferência" no lugar de uma das formas (para torná-la falsa) ou classificar nomeação como derivada.',
          exemploInedito: {
            contexto: 'Um servidor: (a) toma posse após concurso (nomeação — originário); (b) é promovido na carreira (promoção — derivado); (c) retorna ao cargo após demissão ilegal anulada judicialmente (reintegração — derivado); (d) retorna ao serviço após aposentadoria por invalidez (reversão — derivado).',
            aplicacao: 'A nomeação é o único originário — é o ingresso inicial. As demais pressupõem vínculo anterior. Se alguém dissesse "a promoção é originária", erraria — é derivada, porque o servidor já estava no serviço público.',
            desafio: 'Qual a diferença entre reintegração, recondução e readaptação? Cite um exemplo de cada.'
          }
        },
        tags: ['provimento', 'nomeação', 'provimento derivado']
      },

      /* ---------- Item 5 — Situação — Dificuldade 2 ---------- */
      {
        id: 'D-DA-17-05',
        tipo: 'situacao',
        formato: 'multipla_escolha',
        dificuldade: 2,
        subtopico: 'Requisitos para investidura e concurso público',
        pergunta: 'Um candidato aprovado em concurso público para analista de uma autarquia federal, com 16 anos de idade, é convocado para posse. Ao apresentar a documentação, o setor de recursos humanos identifica a idade. Sobre a situação, é CORRETO afirmar que:',
        alternativas: [
          { id: 'A', texto: 'a posse é possível, pois o candidato foi aprovado em concurso e a idade não é requisito para investidura.' },
          { id: 'B', texto: 'a posse é possível com autorização judicial, pois o candidato demonstrou capacidade técnica na aprovação.' },
          { id: 'C', texto: 'a posse é vedada, pois a Lei 8.112/90 exige idade mínima de 18 anos para investidura em cargo público, além de outros requisitos como nacionalidade brasileira, direitos políticos e aptidão.' },
          { id: 'D', texto: 'a posse é possível desde que o candidato seja emancipado pelos pais, o que supre a exigência legal.' },
          { id: 'E', texto: 'a posse é vedada apenas se o candidato tiver menos de 16 anos; entre 16 e 18 anos, é permitida.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C está correta. A Lei 8.112/90 exige 18 anos para investidura em cargo público. Candidato de 16 anos não atende ao requisito — a posse é vedada.',
        explicacaoDetalhada: {
          correta: 'A alternativa C está correta. O art. 5º da Lei 8.112/90 exige, para investidura em cargo público: nacionalidade brasileira; gozo dos direitos políticos; quitação com serviço militar e eleitoral; nível de escolaridade exigido; IDADE MÍNIMA DE 18 ANOS; aptidão física e mental. Candidato de 16 anos NÃO atende ao requisito de idade — a posse é vedada, ainda que tenha sido aprovado no concurso.',
          incorretas: {
            A: 'A alternativa ignora o requisito legal. A aprovação em concurso é etapa necessária, mas não suficiente — é preciso atender aos requisitos de investidura, entre eles a idade mínima de 18 anos (art. 5º, V, da Lei 8.112/90). A idade É requisito, não mera formalidade.',
            B: 'A alternativa inventa uma "autorização judicial" que não existe para esse fim. A lei não prevê dispensa judicial do requisito de idade — este é objetivo e vinculado. A aprovação em concurso não supre o requisito etário.',
            D: 'A alternativa confunde emancipação civil com requisito administrativo. A emancipação (art. 5º do CC) produz efeitos civis, mas NÃO afasta a exigência legal de 18 anos para investidura em cargo público. São esferas distintas.',
            E: 'A alternativa inventa uma faixa intermediária (16-18) que não existe. A lei exige 18 anos, sem exceção para a faixa 16-18. Menores de 18 anos não podem tomar posse em cargo público efetivo, salvo hipóteses específicas de aprendiz (que não é cargo) ou de militar (regime próprio).'
          },
          conceitoCobrado: 'Requisitos para investidura em cargo público (art. 5º da Lei 8.112/90)',
          pegadinha: 'A banca apresenta alternativas que tentam contornar o requisito (autorização judicial, emancipação, faixa intermediária). A chave é: o requisito é OBJETIVO e VINCULADO — não admite dispensa. Concurso aprovado não supre ausência de requisito.',
          comoApareceEmConcurso: 'Bancas testam os requisitos do art. 5º com frequência. A pegadinha clássica é inventar formas de "suprir" o requisito (emancipação, autorização) ou relativizar (faixa intermediária). Nenhuma procede.',
          exemploInedito: {
            contexto: 'Candidato aprovado em concurso para técnico, 17 anos, emancipado pelos pais, com quitação eleitoral e escolaridade completa. Apresenta toda a documentação — exceto a idade.',
            aplicacao: 'A posse é vedada — a emancipação não afasta o requisito de 18 anos. A lei não prevê exceção. O candidato deve aguardar a maioridade para tomar posse, dentro do prazo de validade do concurso (2 anos, prorrogável por mais 2). Se o prazo expirar, perde o direito.',
            desafio: 'Se o candidato fizer 18 anos dentro do prazo de validade do concurso, ele pode tomar posse? O que a Administração deve fazer nesse caso?'
          }
        },
        tags: ['requisitos', 'investidura', 'Lei 8.112/90', 'idade mínima', 'situação aplicada']
      },

      /* ---------- Item 6 — Formato 3 (Associação) — Dificuldade 3 ---------- */
      {
        id: 'D-DA-17-06',
        tipo: 'multipla_escolha',
        formato: 'associacao',
        dificuldade: 3,
        subtopico: 'Formas de provimento derivado — definições',
        pergunta: 'Sobre as formas de provimento derivado, associe corretamente cada FORMA à sua DEFINIÇÃO:\n\nColuna I — Forma de provimento\n1. Reintegração\n2. Reversão\n3. Recondução\n\nColuna II — Definição\n( ) Retorno do servidor estável ao cargo anteriormente ocupado, em razão de inabilitação em estágio probatório de outro cargo ou de reintegração do anterior ocupante.\n( ) Retorno do servidor aposentado ao serviço público, por invalidez declarada insubsistente.\n( ) Retorno do servidor demitido ilegalmente ao cargo, com ressarcimento de prejuízos, por decisão administrativa ou judicial.',
        alternativas: [
          { id: 'A', texto: '1 – primeira; 2 – segunda; 3 – terceira.' },
          { id: 'B', texto: '1 – segunda; 2 – terceira; 3 – primeira.' },
          { id: 'C', texto: '1 – terceira; 2 – segunda; 3 – primeira.' },
          { id: 'D', texto: '1 – terceira; 2 – primeira; 3 – segunda.' },
          { id: 'E', texto: '1 – segunda; 2 – primeira; 3 – terceira.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C está correta. Reintegração (1) → retorno do demitido ilegalmente (terceira). Reversão (2) → retorno do aposentado por invalidez (segunda). Recondução (3) → retorno ao cargo anterior por inabilitação em outro (primeira).',
        explicacaoDetalhada: {
          correta: 'A alternativa C está correta. REINTEGRAÇÃO (1) → retorno do servidor demitido ilegalmente, com ressarcimento (terceira da Coluna II). REVERSÃO (2) → retorno do aposentado por invalidez, quando esta é declarada insubsistente (segunda da Coluna II). RECONDUÇÃO (3) → retorno ao cargo anterior, por inabilitação em estágio probatório de outro cargo ou por reintegração do anterior ocupante (primeira da Coluna II).',
          incorretas: {
            A: 'A alternativa erra em todas as três: coloca reintegração como recondução, reversão como reversão (correto) e recondução como reintegração. Inverte as duas extremas.',
            B: 'A alternativa erra em todas: coloca reintegração como reversão (errado), reversão como recondução (errado) e recondução como reintegração (errado). Inversão circular.',
            D: 'A alternativa acerta reintegração como reintegração (terceira) e erra as outras duas: coloca reversão como recondução (é reversão — aposentado por invalidez) e recondução como reversão (é recondução — inabilitação em outro cargo). Erro de inversão entre reversão e recondução.',
            E: 'A alternativa coloca reintegração como reversão (errado), reversão como recondução (errado) e recondução como reintegração (errado). Inversão dupla.'
          },
          conceitoCobrado: 'Distinção entre reintegração, reversão e recondução',
          pegadinha: 'As três formas de provimento derivado envolvem "retorno", o que induz à confusão. A chave é o MOTIVO: reintegração (demissão ilegal); reversão (aposentadoria por invalidez insubsistente); recondução (inabilitação em outro cargo ou reintegração do anterior ocupante). Fixar o motivo é mais eficaz que memorizar as definições.',
          comoApareceEmConcurso: 'Bancas usam associação de colunas com formas de provimento derivado para testar precisão. É comum embaralhar as colunas de modo que apenas uma combinação esteja integralmente correta.',
          exemploInedito: {
            contexto: 'Três servidores: (a) A foi demitido em 2023, mas a demissão foi anulada em 2024 — retorna ao cargo (reintegração). (b) B se aposentou por invalidez em 2022, mas em 2024 a perícia declarou a invalidez insubsistente — retorna ao serviço (reversão). (c) C, estável em cargo A, foi aprovado em concurso para cargo B, mas não passou no estágio probatório de B — retorna ao cargo A (recondução).',
            aplicacao: 'Cada situação tem um motivo distinto: demissão ilegal (reintegração), aposentadoria por invalidez insubsistente (reversão), inabilitação em outro cargo (recondução). O motivo é o critério distintivo — não o "retorno" em si.',
            desafio: 'Qual a diferença entre recondução e readaptação? Cite um exemplo de cada. Ambas envolvem retorno, mas por motivos distintos.'
          }
        },
        tags: ['reintegração', 'reversão', 'recondução', 'provimento derivado', 'associação']
      },

      /* ---------- Item 7 — Autoavaliação ---------- */
      {
        id: 'D-DA-17-07',
        tipo: 'autoavaliacao',
        subtopico: 'Agentes públicos — visão integrada',
        pergunta: 'Sem consultar, você consegue diferenciar agentes políticos, servidores, empregados públicos e particulares em colaboração, cargo de emprego de função, provimento originário de derivado, e as três exceções de acumulação do art. 37, XVI?',
        resposta: 'AGENTES: políticos (cúpula, eleição/nomeação); servidores (estatutários, cargo efetivo ou comissão); empregados públicos (celetistas, EP/SEM/fundações privadas); particulares em colaboração (mesários, jurados, sem vínculo). CARGO x EMPREGO x FUNÇÃO: cargo = estatutário, criado por lei; emprego = celetista (CLT); função = atribuições sem cargo/emprego (pode ser exercida por particular). PROVIMENTO: originário = nomeação (única); derivado = promoção, readaptação, reversão, aproveitamento, reintegração, recondução. A transferência deixou de ser provimento derivado após a EC 19/1998. ACUMULAÇÃO: vedada, salvo art. 37, XVI — dois cargos de professor; professor + técnico/científico; dois de saúde — sempre com compatibilidade de horários e respeito ao teto. REINTEGRAÇÃO x REVERSÃO x RECONDUÇÃO: demissão ilegal x aposentadoria por invalidez insubsistente x inabilitação em outro cargo. REQUISITOS DE INVESTIDURA (Lei 8.112/90, art. 5º): nacionalidade brasileira, direitos políticos, quitação militar/eleitoral, escolaridade, 18 anos, aptidão.'
      }

    ]
  },

  /* ============================================================
     DA-18 — Poderes da Administração Pública
  ============================================================ */
  'DA-18': {
    id: 'D-DA-18',
    moduloId: 'DA-18',
    itens: [

      /* ---------- Item 1 — Formato 6 (EXCETO) — Dificuldade 1 ---------- */
      {
        id: 'D-DA-18-01',
        tipo: 'multipla_escolha',
        formato: 'excecao',
        dificuldade: 1,
        subtopico: 'Poderes administrativos — visão geral',
        pergunta: 'Sobre os poderes administrativos, assinale a alternativa INCORRETA:',
        alternativas: [
          { id: 'A', texto: 'Poder hierárquico é o poder de organizar internamente a Administração, distribuindo e escalonando funções entre os agentes.' },
          { id: 'B', texto: 'Poder disciplinar é o poder de apurar e punir infrações funcionais de servidores e de particulares sujeitos à disciplina interna do órgão.' },
          { id: 'C', texto: 'Poder regulamentar é o poder do chefe do Executivo de editar decretos para detalhar a lei, sem inovar na ordem jurídica.' },
          { id: 'D', texto: 'Poder de polícia é o poder de limitar ou disciplinar direitos do particular em favor do interesse público (fiscalização, interdição, licenciamento).' },
          { id: 'E', texto: 'Poder moderador é o poder administrativo que permite ao chefe do Executivo interferir nas decisões dos demais Poderes.' }
        ],
        gabarito: 'E',
        explicacao: 'A alternativa E é a INCORRETA. Poder moderador é figura histórica da Constituição de 1824, não é poder administrativo nem existe no regime republicano de 1988. Os poderes administrativos são: hierárquico, disciplinar, regulamentar e de polícia.',
        explicacaoDetalhada: {
          correta: 'A alternativa E está INCORRETA e, por isso, é a resposta. O PODER MODERADOR é figura da Constituição de 1824 (Brasil Império), que permitia ao Imperador intervir nos demais Poderes. NÃO é poder administrativo e NÃO existe no regime republicano de 1988. Os poderes administrativos clássicos são quatro: HIERÁRQUICO, DISCIPLINAR, REGULAMENTAR e DE POLÍCIA.',
          incorretas: {
            A: 'A alternativa está correta e não deve ser marcada. Poder hierárquico organiza internamente (distribui e escalona funções). Seria INCORRETA se dissesse que hierárquico é poder sobre particulares — isso é poder de polícia.',
            B: 'A alternativa está correta e não deve ser marcada. Poder disciplinar apura e pune infrações funcionais de servidores e de sujeitos à disciplina interna. Seria INCORRETA se dissesse que disciplinar é poder sobre particulares em geral — isso é poder de polícia.',
            C: 'A alternativa está correta e não deve ser marcada. Poder regulamentar edita decretos para detalhar a lei, sem inovar. Seria INCORRETA se dissesse que regulamentar pode criar obrigações novas — não pode.',
            D: 'A alternativa está correta e não deve ser marcada. Poder de polícia limita direitos do particular em favor da coletividade. Seria INCORRETA se dissesse que polícia é poder sobre servidores — isso é disciplinar.'
          },
          conceitoCobrado: 'Poderes administrativos (hierárquico, disciplinar, regulamentar e de polícia) x poder moderador (figura histórica)',
          pegadinha: 'A alternativa E introduz um "quinto poder" que não existe no regime atual — o moderador, figura do Império. Quem não conhece a história pode aceitar a existência. Palavras como "interferir nos demais Poderes" também denunciam o erro: no regime republicano, não há hierarquia entre os Poderes.',
          comoApareceEmConcurso: 'Bancas costumam introduzir "poder moderador" como distrator em questões sobre poderes administrativos, justamente para testar se o candidato sabe que é figura histórica. É quase sempre a alternativa INCORRETA.',
          exemploInedito: {
            contexto: 'Em uma questão de prova, o candidato lê: "O poder moderador permite ao Presidente da República intervir no Judiciário quando houver crise institucional". Deve marcar como errado.',
            aplicacao: 'O poder moderador é do Império (Constituição de 1824), quando o Imperador podia intervir nos demais Poderes. Na República, não existe. Os Poderes são independentes e harmônicos (art. 2º da CF), sem hierarquia. Aceitar essa afirmação seria erro grave.',
            desafio: 'Por que a Constituição de 1824 previa o poder moderador e a de 1988 não? Reflita sobre a diferença entre monarquia constitucional e república federativa.'
          }
        },
        tags: ['poderes administrativos', 'poder moderador']
      },

      /* ---------- Item 2 — C/E — Dificuldade 1 ---------- */
      {
        id: 'D-DA-18-02',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 1,
        subtopico: 'Poder hierárquico x poder disciplinar',
        pergunta: 'O poder hierárquico permite ao superior dar ordens, fiscalizar, delegar e avocar; o poder disciplinar permite apurar e punir infrações funcionais de servidores.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'A afirmação é CERTA. Hierárquico: dar ordens, fiscalizar, delegar, avocar. Disciplinar: apurar e punir infrações funcionais. São poderes distintos, ambos internos.',
        explicacaoDetalhada: {
          correta: 'A afirmação é CERTA. O PODER HIERÁRQUICO permite ao superior dar ordens, fiscalizar a atuação dos subordinados, delegar competências e avocar (chamar para si) atribuições do subordinado. O PODER DISCIPLINAR permite apurar e punir infrações funcionais de servidores e de particulares sujeitos à disciplina interna. São poderes distintos, mas complementares — ambos atuam internamente.',
          incorretas: {
            F: 'A afirmação não é falsa. Ela distingue corretamente os dois poderes: hierárquico (ordens, fiscalização, delegação, avocação) e disciplinar (apuração e punição). Tratar como falsa indicaria confusão entre os dois — erro comum, mas aqui a afirmação está tecnicamente correta.'
          },
          conceitoCobrado: 'Distinção entre poder hierárquico (organização interna) e poder disciplinar (punição de infrações)',
          pegadinha: 'A afirmação está correta. A armadilha (não presente) seria dizer que hierárquico pune ou que disciplinar delega — são funções distintas. Fixar: hierárquico = ordens/fiscalização/delegação/avocação; disciplinar = apuração/punição de infrações.',
          comoApareceEmConcurso: 'Bancas usam essa distinção em C/E para testar se o candidato sabe que os dois poderes atuam internamente, mas com finalidades distintas. A afirmação costuma ser verdadeira, mas pode vir com "hierárquico pune" para torná-la falsa.',
          exemploInedito: {
            contexto: 'Um diretor: (a) delega ao coordenador a assinatura de despachos de rotina (hierárquico); (b) instaura PAD para apurar falta de servidor (disciplinar); (c) avoca para si a decisão sobre um processo complexo (hierárquico); (d) aplica suspensão ao servidor que faltou sem justificativa (disciplinar).',
            aplicacao: '(a) e (c) são hierárquico (delegação, avocação). (b) e (d) são disciplinar (apuração, punição). Os dois atuam internamente, mas com finalidades distintas: organizar (hierárquico) x punir (disciplinar). A confusão entre eles é erro clássico.',
            desafio: 'Um servidor que descumpre ordem legal do superior está sujeito a punição disciplinar. Essa punição é exercício do poder hierárquico ou disciplinar? Justifique.'
          }
        },
        tags: ['poder hierárquico', 'poder disciplinar']
      },

      /* ---------- Item 3 — Formato 1 (V/F sequência) — Dificuldade 2 ---------- */
      {
        id: 'D-DA-18-03',
        tipo: 'multipla_escolha',
        formato: 'vf_sequencia',
        dificuldade: 2,
        subtopico: 'Poder regulamentar e poder de polícia',
        pergunta: 'Sobre o poder regulamentar e o poder de polícia, analise as afirmações e assinale a sequência correta:\n\nI. O poder regulamentar permite ao chefe do Executivo editar decretos para detalhar a lei, sem inovar na ordem jurídica (não pode criar obrigações novas).\nII. O poder de polícia permite à Administração limitar ou disciplinar direitos do particular em favor do interesse público, por meio de fiscalização, interdição e licenciamento.\nIII. A autoexecutoriedade é atributo do poder de polícia: a Administração pode executar diretamente seus atos, sem autorização judicial prévia, nas hipóteses previstas em lei.\nIV. O poder regulamentar pode ser exercido por qualquer servidor público, independentemente do cargo que ocupe.',
        alternativas: [
          { id: 'A', texto: 'V – V – V – F.' },
          { id: 'B', texto: 'V – F – V – V.' },
          { id: 'C', texto: 'F – V – V – V.' },
          { id: 'D', texto: 'V – V – F – V.' },
          { id: 'E', texto: 'F – V – F – V.' }
        ],
        gabarito: 'A',
        explicacao: 'A alternativa A está correta: I (V), II (V), III (V), IV (F). A IV é falsa: o poder regulamentar é do CHEFE do Executivo (Presidente, Governador, Prefeito), não de qualquer servidor.',
        explicacaoDetalhada: {
          correta: 'A alternativa A está correta: I (V), II (V), III (V), IV (F). A I está certa: poder regulamentar edita decretos para detalhar a lei, sem inovar. A II está certa: poder de polícia limita direitos do particular em favor do interesse público. A III está certa: autoexecutoriedade é atributo do poder de polícia. A IV está FALSA: o poder regulamentar é do CHEFE do Executivo, não de qualquer servidor.',
          incorretas: {
            B: 'A alternativa erra ao marcar a II como falsa. O poder de polícia LIMITA direitos do particular em favor da coletividade — essa é a definição. Também erra ao marcar a IV como verdadeira (ela é falsa).',
            C: 'A alternativa erra ao marcar a I como falsa. O poder regulamentar edita decretos para detalhar a lei, sem inovar — essa é a definição correta. Também erra ao marcar a IV como verdadeira.',
            D: 'A alternativa erra ao marcar a III como falsa. A autoexecutoriedade é, sim, atributo do poder de polícia (execução direta, sem Judiciário, nas hipóteses legais). Também erra ao marcar a IV como verdadeira.',
            E: 'A alternativa erra ao marcar a I e a III como falsas. Ambas são verdadeiras. É a "alternativa do chute" para quem não internalizou os dois poderes.'
          },
          conceitoCobrado: 'Poder regulamentar (competência do chefe do Executivo, sem inovação) e poder de polícia (limitação de direitos, autoexecutoriedade)',
          pegadinha: 'A afirmação IV explora a competência do poder regulamentar: é do CHEFE do Executivo, não de qualquer servidor. Quem pensa que "qualquer autoridade pode regulamentar" erra. Outra pegadinha seria negar a autoexecutoriedade do poder de polícia (afirmação III) — ela é atributo típico.',
          comoApareceEmConcurso: 'O formato V/F sequência é usado para testar 4 afirmações sobre dois poderes. A banca costuma manter 3 verdadeiras e 1 falsa — geralmente a que estende a competência regulamentar a qualquer servidor.',
          exemploInedito: {
            contexto: 'O Presidente da República edita decreto regulamentando a Lei X (poder regulamentar — competência do chefe do Executivo). A Vigilância Sanitária interdita restaurante com condições inadequadas (poder de polícia — com autoexecutoriedade).',
            aplicacao: 'O decreto detalha a lei, sem inovar (poder regulamentar). A interdição é executada diretamente, sem Judiciário (autoexecutoriedade do poder de polícia). Se um servidor qualquer editasse decreto, seria invasão de competência — a IV estaria certa em afirmar que é do chefe, não de qualquer servidor.',
            desafio: 'Um secretário municipal pode editar decreto regulamentar? E uma resolução? Explique a diferença entre decreto e resolução.'
          }
        },
        tags: ['poder regulamentar', 'poder de polícia', 'autoexecutoriedade', 'vf sequência']
      },

      /* ---------- Item 4 — C/E — Dificuldade 2 ---------- */
      {
        id: 'D-DA-18-04',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 2,
        subtopico: 'Abuso de poder — excesso x desvio',
        pergunta: 'O abuso de poder é gênero que compreende duas espécies: o excesso de poder (atuação além da competência) e o desvio de finalidade (atuação dentro da competência, mas com finalidade diversa da prevista em lei).',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'A afirmação é CERTA. Abuso de poder é gênero; espécies: excesso de poder (além da competência — vício de competência) e desvio de finalidade (finalidade diversa — vício de finalidade).',
        explicacaoDetalhada: {
          correta: 'A afirmação é CERTA. O ABUSO DE PODER é o gênero, com duas espécies: (1) EXCESSO DE PODER — o agente atua ALÉM da competência (vício de competência); (2) DESVIO DE FINALIDADE (ou desvio de poder) — o agente atua DENTRO da competência, mas com FINALIDADE DIVERSA da prevista em lei (vício de finalidade). Tanto o excesso quanto o desvio são formas de abuso de poder — não são sinônimos.',
          incorretas: {
            F: 'A afirmação não é falsa. Ela distingue corretamente abuso de poder (gênero) de suas espécies (excesso e desvio). Tratar como falsa indicaria confusão entre gênero e espécie — erro comum, mas aqui a afirmação está correta.'
          },
          conceitoCobrado: 'Abuso de poder (gênero) x excesso de poder (espécie) x desvio de finalidade (espécie)',
          pegadinha: 'A afirmação está correta. A armadilha (não presente) seria tratar excesso e desvio como sinônimos, ou chamar o abuso de "espécie" e o excesso de "gênero". Verificar: abuso = gênero; excesso e desvio = espécies. Também é comum confundir "desvio de finalidade" com "desvio de poder" — são sinônimos.',
          comoApareceEmConcurso: 'Bancas usam essa distinção em C/E com frequência. A afirmação costuma ser verdadeira, mas pode vir trocando as definições (excesso = finalidade; desvio = competência) para torná-la falsa.',
          exemploInedito: {
            contexto: 'Dois casos: (a) um servidor sem competência aplica multa a um particular (excesso — atuou além da competência); (b) um fiscal interdita estabelecimento de desafeto, sem infração, usando a competência de polícia para fim pessoal (desvio — dentro da competência, mas com finalidade diversa).',
            aplicacao: 'Ambos são abuso de poder. (a) é excesso (vício de competência); (b) é desvio (vício de finalidade). A distinção importa: o excesso pode, em regra, ser convalidado (competência é sanável); o desvio é insanável (finalidade não se convalida). Por isso, a classificação correta é essencial para o controle.',
            desafio: 'Por que o vício de competência (excesso) é sanável e o vício de finalidade (desvio) é insanável? Reflita sobre a natureza de cada elemento do ato administrativo.'
          }
        },
        tags: ['abuso de poder', 'excesso de poder', 'desvio de finalidade']
      },

      /* ---------- Item 5 — Situação — Dificuldade 2 ---------- */
      {
        id: 'D-DA-18-05',
        tipo: 'situacao',
        formato: 'multipla_escolha',
        dificuldade: 2,
        subtopico: 'Identificação do poder em cenário',
        pergunta: 'Três agentes atuam em situações distintas: (a) um chefe de setor distribui tarefas entre servidores e delega a assinatura de despachos de rotina; (b) um servidor da corregedoria instaura PAD para apurar falta funcional; (c) um fiscal da vigilância sanitária interdita restaurante com condições inadequadas de higiene. As situações (a), (b) e (c) ilustram, respectivamente, os poderes:',
        alternativas: [
          { id: 'A', texto: 'disciplinar, hierárquico e de polícia.' },
          { id: 'B', texto: 'hierárquico, disciplinar e de polícia.' },
          { id: 'C', texto: 'hierárquico, de polícia e disciplinar.' },
          { id: 'D', texto: 'de polícia, disciplinar e hierárquico.' },
          { id: 'E', texto: 'regulamentar, disciplinar e hierárquico.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B está correta. (a) distribuir tarefas e delegar = hierárquico; (b) instaurar PAD = disciplinar; (c) interditar restaurante = poder de polícia.',
        explicacaoDetalhada: {
          correta: 'A alternativa B está correta. (a) Distribuir tarefas e delegar a assinatura de despachos = PODER HIERÁRQUICO (organização interna, delegação). (b) Instaurar PAD para apurar falta funcional = PODER DISCIPLINAR (apuração de infração de servidor). (c) Interditar restaurante com condições inadequadas = PODER DE POLÍCIA (limitação de direito do particular em favor da coletividade).',
          incorretas: {
            A: 'A alternativa troca (a) e (b): distribuir tarefas é HIERÁRQUICO (não disciplinar); instaurar PAD é DISCIPLINAR (não hierárquico). Só (c) está correta.',
            C: 'A alternativa troca (b) e (c): instaurar PAD é DISCIPLINAR (não polícia); interditar restaurante é POLÍCIA (não disciplinar). Só (a) está correta.',
            D: 'A alternativa erra tudo: distribuir tarefas não é polícia (é hierárquico); instaurar PAD não é disciplinar? — está correto, mas os outros dois estão trocados; interditar restaurante não é hierárquico (é polícia). Inversão completa.',
            E: 'A alternativa troca (a) por "regulamentar": distribuir tarefas não é regulamentar (é hierárquico). Regulamentar é editar decretos para detalhar lei — não é o caso. Erro grave de classificação.'
          },
          conceitoCobrado: 'Identificação dos poderes administrativos em cenário aplicado',
          pegadinha: 'A banca mistura três situações típicas (organização interna, apuração de falta, limitação de direito do particular) e oferece alternativas que embaralham os poderes. A chave é: hierárquico (organiza internamente); disciplinar (pune servidor); polícia (limita particular). A confusão mais comum é entre hierárquico e disciplinar (ambos internos).',
          comoApareceEmConcurso: 'Cenários com três situações são clássicos para testar os poderes. A banca costuma embaralhar os três e oferecer alternativas com erros parciais — geralmente trocando hierárquico por disciplinar (ambos internos).',
          exemploInedito: {
            contexto: 'Em um órgão: (a) o diretor avoca para si a decisão sobre um processo complexo (hierárquico); (b) aplica suspensão a servidor que faltou sem justificativa (disciplinar); (c) a Vigilância Sanitária interrompe a venda de produto vencido em supermercado (polícia).',
            aplicacao: 'Também: hierárquico (a), disciplinar (b), polícia (c). A avocação é típica do hierárquico; a punição de servidor é típica do disciplinar; a limitação de direito do particular é típica da polícia. O critério é o destinatário: interno-servidor (hierárquico/disciplinar) x externo-particular (polícia).',
            desafio: 'Qual a diferença entre avocação e delegação? Ambas são manifestações do poder hierárquico — em que direção cada uma opera?'
          }
        },
        tags: ['poder hierárquico', 'poder disciplinar', 'poder de polícia', 'situação aplicada']
      },

      /* ---------- Item 6 — Formato 2 (I, II, III) — Dificuldade 3 ---------- */
      {
        id: 'D-DA-18-06',
        tipo: 'multipla_escolha',
        formato: 'afirmacoes_romanas',
        dificuldade: 3,
        subtopico: 'Abuso de poder — excesso x desvio; sanável x insanável',
        pergunta: 'Sobre o abuso de poder e suas consequências, analise as afirmações a seguir:\n\nI. O excesso de poder (vício de competência) é, em regra, sanável por convalidação, desde que não haja prejuízo ao interesse público nem a terceiros.\nII. O desvio de finalidade (vício de finalidade) é, em regra, insanável, gerando nulidade do ato.\nIII. Excesso de poder e desvio de finalidade são sinônimos: ambos decorrem da mesma causa e produzem os mesmos efeitos.\n\nEstão corretas:',
        alternativas: [
          { id: 'A', texto: 'Apenas I.' },
          { id: 'B', texto: 'Apenas II.' },
          { id: 'C', texto: 'Apenas I e II.' },
          { id: 'D', texto: 'Apenas II e III.' },
          { id: 'E', texto: 'I, II e III.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C está correta. I e II são verdadeiras; III é falsa (excesso e desvio NÃO são sinônimos — têm causas e efeitos distintos).',
        explicacaoDetalhada: {
          correta: 'A alternativa C está correta. A I está certa: excesso de poder (vício de competência) é, em regra, sanável por convalidação — desde que não haja prejuízo ao interesse público nem a terceiros. A II está certa: desvio de finalidade (vício de finalidade) é, em regra, insanável, gerando nulidade. A III está INCORRETA: excesso e desvio NÃO são sinônimos — o excesso é vício de competência (sanável); o desvio é vício de finalidade (insanável).',
          incorretas: {
            A: 'A afirmação I está correta, mas a II também. O desvio de finalidade é, sim, insanável — o vício de finalidade não admite convalidação. Excluir a II é negar a consequência do vício de finalidade.',
            B: 'A afirmação II está correta, mas a I também. O excesso de poder (competência) é, em regra, sanável. Excluir a I é negar a natureza do vício de competência.',
            D: 'A afirmação III é falsa — excesso e desvio não são sinônimos. Incluí-la é o erro central. A II está correta, mas a III não.',
            E: 'Não é possível aceitar as três. A III é o erro: excesso (competência, sanável) e desvio (finalidade, insanável) têm naturezas distintas. A afirmação III reduz os dois a sinônimos, o que é falso.'
          },
          conceitoCobrado: 'Excesso de poder x desvio de finalidade — naturezas e consequências (sanável x insanável)',
          pegadinha: 'A afirmação III usa "sinônimos" e "mesma causa" e "mesmos efeitos" — três absolutos que denunciam o erro. Excesso e desvio têm naturezas distintas (competência x finalidade) e consequências distintas (sanável x insanável). A redução a sinônimos é erro clássico.',
          comoApareceEmConcurso: 'Bancas usam essa distinção em afirmações romanas para testar se o candidato domina a classificação e as consequências. A afirmação que iguala excesso e desvio é quase sempre FALSA.',
          exemploInedito: {
            contexto: '(a) Servidor sem competência aplica multa. O ato é inválido por excesso (vício de competência) — mas, em regra, pode ser convalidado pela autoridade competente, se não houver prejuízo. (b) Fiscal interdita estabelecimento de desafeto, sem infração, usando a competência de polícia para fim pessoal. O ato é nulo por desvio (vício de finalidade) — insanável, não se convalida.',
            aplicacao: 'A diferença é crucial: o excesso pode ser corrigido; o desvio não. A razão é que a finalidade é elemento vinculado do ato — não pode ser "corrigida" retroativamente. A competência, por outro lado, pode ser suprida pela autoridade competente, convalidando o ato.',
            desafio: 'Por que a doutrina trata a finalidade como elemento insanável? Reflita sobre a relação entre finalidade e interesse público — e por que a lei não admite "correção" retroativa da finalidade.'
          }
        },
        tags: ['abuso', 'excesso', 'desvio', 'convalidação', 'afirmações romanas']
      },

      /* ---------- Item 7 — Autoavaliação ---------- */
      {
        id: 'D-DA-18-07',
        tipo: 'autoavaliacao',
        subtopico: 'Poderes da Administração Pública — visão integrada',
        pergunta: 'Sem consultar, você consegue diferenciar poder hierárquico, disciplinar, regulamentar e de polícia, e distinguir excesso de poder de desvio de finalidade?',
        resposta: 'PODERES: HIERÁRQUICO (organiza internamente — dar ordens, fiscalizar, delegar, avocar); DISCIPLINAR (apura e pune infrações de servidores e sujeitos à disciplina interna); REGULAMENTAR (chefe do Executivo edita decreto para detalhar lei, sem inovar); DE POLÍCIA (limita direitos do particular em favor da coletividade — fiscalização, interdição, licenciamento; tem autoexecutoriedade). PODER MODERADOR: figura histórica do Império (Constituição de 1824), não existe na República. ABUSO DE PODER: gênero; espécies: EXCESSO DE PODER (atuação além da competência — vício de competência — em regra, sanável por convalidação) e DESVIO DE FINALIDADE (atuação dentro da competência, mas com finalidade diversa — vício de finalidade — em regra, insanável, nulidade). A distinção entre os dois é essencial: um pode ser corrigido; o outro, não.'
      }

    ]
  }
  ,

  /* ============================================================
     DA-19 — Atos Administrativos
  ============================================================ */
  'DA-19': {
    id: 'D-DA-19',
    moduloId: 'DA-19',
    itens: [

      /* ---------- Item 1 — Formato 6 (EXCETO) — Dificuldade 1 ---------- */
      {
        id: 'D-DA-19-01',
        tipo: 'multipla_escolha',
        formato: 'excecao',
        dificuldade: 1,
        subtopico: 'Requisitos (elementos) do ato administrativo',
        pergunta: 'Sobre os requisitos (elementos) do ato administrativo, assinale a alternativa INCORRETA:',
        alternativas: [
          { id: 'A', texto: 'Competência é o poder legal conferido ao agente público para praticar o ato, dentro dos limites estabelecidos em lei.' },
          { id: 'B', texto: 'Mérito administrativo é elemento do ato, integrando a competência do agente para a prática do ato.' },
          { id: 'C', texto: 'Finalidade é o objetivo de interesse público que o ato deve alcançar, sob pena de desvio de finalidade.' },
          { id: 'D', texto: 'Forma é a exteriorização do ato, que em regra é vinculada, mas em alguns casos admite formas alternativas.' },
          { id: 'E', texto: 'Motivo é a situação de fato e de direito que autoriza ou determina a prática do ato administrativo.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B é a INCORRETA. Mérito administrativo NÃO é elemento do ato: é o juízo de conveniência e oportunidade que fundamenta a atuação discricionária. Os requisitos são competência, finalidade, forma, motivo e objeto.',
        explicacaoDetalhada: {
          correta: 'A alternativa B está INCORRETA e, por isso, é a resposta. MÉRITO ADMINISTRATIVO é o JUÍZO DE CONVENIÊNCIA E OPORTUNIDADE que a Administração exerce nos limites da lei — não é um "elemento" ou "requisito" do ato. Os requisitos (elementos) do ato são cinco: COMPETÊNCIA, FINALIDADE, FORMA, MOTIVO e OBJETO. O mérito é o espaço de valoração que a lei deixa ao administrador; não integra a estrutura do ato.',
          incorretas: {
            A: 'A alternativa está correta e não deve ser marcada. Competência é o poder legal conferido ao agente para praticar o ato, dentro dos limites da lei. Seria INCORRETA se dissesse que competência é a conveniência do agente — isso é mérito, não competência.',
            C: 'A alternativa está correta e não deve ser marcada. Finalidade é o objetivo de interesse público do ato, sob pena de desvio de finalidade. Seria INCORRETA se dissesse que a finalidade é o resultado prático do ato — isso é objeto.',
            D: 'A alternativa está correta e não deve ser marcada. Forma é a exteriorização do ato, em regra vinculada, admitindo em certos casos formas alternativas. Seria INCORRETA se dissesse que a forma é sempre livre.',
            E: 'A alternativa está correta e não deve ser marcada. Motivo é a situação de fato e de direito que autoriza ou determina a prática do ato. Seria INCORRETA se confundisse motivo com motivação — motivo é o conteúdo; motivação é a exposição do motivo.'
          },
          conceitoCobrado: 'Requisitos (elementos) do ato administrativo — competência, finalidade, forma, motivo e objeto',
          pegadinha: 'A alternativa B introduz um "sexto elemento" (mérito) que não existe no rol dos requisitos. Mérito é o espaço de valoração, não elemento estrutural. A confusão entre mérito e requisito é clássica em provas — e a introdução de um item inexistente é a marca do formato EXCETO.',
          comoApareceEmConcurso: 'Bancas costumam listar os cinco requisitos corretamente e introduzir um sexto inexistente (mérito, conveniência) em uma única alternativa. É o padrão do módulo. A dica é memorizar: CO-FI-FO-MO-OB (competência, finalidade, forma, motivo, objeto).',
          exemploInedito: {
            contexto: 'Um servidor recebe pedido de licença. Ele analisa: tem competência para decidir? A finalidade é o interesse público? A forma é a prevista em lei? Há motivo (atestado médico, por exemplo)? O objeto (concessão da licença) é lícito? Além disso, pode valorar a conveniência e a oportunidade — o MÉRITO.',
            aplicacao: 'Os cinco requisitos estão presentes e são verificáveis objetivamente. O mérito é o espaço de valoração que sobra após o preenchimento dos requisitos (ex.: conceder licença por 15 ou 30 dias, dentro do que a lei permite). O mérito NÃO é um sexto requisito — é a margem de escolha que a lei deixa ao administrador. Confundi-lo com elemento é o erro da alternativa B.',
            desafio: 'Em um ato discricionário (ex.: nomeação para cargo em comissão), quais são os requisitos que devem ser observados e em que parte há mérito? Dê um exemplo de cada.'
          }
        },
        tags: ['atos administrativos', 'requisitos', 'mérito', 'elementos']
      },

      /* ---------- Item 2 — C/E — Dificuldade 1 ---------- */
      {
        id: 'D-DA-19-02',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 1,
        subtopico: 'Anulação x revogação',
        pergunta: 'A anulação é o ato pelo qual a Administração extingue um ato por razões de mérito (conveniência e oportunidade); a revogação, por sua vez, extingue o ato por ilegalidade.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. A relação está invertida: ANULAÇÃO é por ILEGALIDADE (efeitos ex tunc); REVOGAÇÃO é por MÉRITO (conveniência e oportunidade, efeitos ex nunc).',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. A relação está invertida. ANULAÇÃO: extingue o ato ILEGAL, com efeitos EX TUNC (retroativos), podendo ser feita pela Administração (autotutela — Súmula 473 do STF) ou pelo Judiciário. REVOGAÇÃO: extingue o ato por razões de MÉRITO (conveniência e oportunidade), com efeitos EX NUNC (não retroativos), sendo competência EXCLUSIVA da Administração — o Judiciário não revoga ato de outro Poder.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela troca os institutos: anulação por mérito (errado — é por ilegalidade) e revogação por ilegalidade (errado — é por mérito). Além disso, a Súmula 473 do STF é clara: a Administração pode ANULAR seus atos ilegais e REVOGAR os inconvenientes. O Judiciário só ANULA (não revoga). A inversão é o erro central.'
          },
          conceitoCobrado: 'Distinção entre anulação (ilegalidade, ex tunc) e revogação (mérito, ex nunc)',
          pegadinha: 'A palavra "mérito" aplicada à anulação e "ilegalidade" aplicada à revogação são os marcadores do erro. Fixar: anulação = ilegalidade; revogação = mérito. Quem decora "anulação e revogação são formas de extinção do ato" sem associar o fundamento erra.',
          comoApareceEmConcurso: 'Bancas usam essa inversão em C/E com frequência. A afirmação "anulação por mérito, revogação por ilegalidade" é quase sempre FALSA. A dica mnemônica: ANULA = A-NULA (torna nulo, por ilegalidade); REVOGA = RE-VÊ (por conveniência).',
          exemploInedito: {
            contexto: 'Um órgão concede aposentadoria a servidor sem o tempo mínimo de contribuição (ato ilegal). Paralelamente, concede licença-prêmio a servidor que cumpre os requisitos, mas a chefia entende que, no momento, seria mais útil ele estar em serviço (ato legal, mas inconveniente).',
            aplicacao: 'No primeiro caso, o ato deve ser ANULADO (ilegalidade, efeitos ex tunc). No segundo, pode ser REVOGADO (mérito, efeitos ex nunc). Se alguém dissesse "vou revogar o ato ilegal", erraria o instituto — ato ilegal se anula, não se revoga. Essa é a confusão que a questão explora.',
            desafio: 'Por que o Judiciário pode anular, mas não revogar ato administrativo? Que fundamento constitucional justifica essa limitação?'
          }
        },
        tags: ['anulação', 'revogação', 'Súmula 473']
      },

      /* ---------- Item 3 — Formato 1 (V/F sequência) — Dificuldade 2 ---------- */
      {
        id: 'D-DA-19-03',
        tipo: 'multipla_escolha',
        formato: 'vf_sequencia',
        dificuldade: 2,
        subtopico: 'Extinção do ato administrativo',
        pergunta: 'Sobre os institutos de extinção do ato administrativo, analise as afirmações e assinale a sequência correta:\n\nI. Cassação é a extinção do ato em razão do descumprimento, pelo beneficiário, das condições que autorizaram sua prática.\nII. Caducidade é a extinção do ato em razão de norma jurídica superveniente que o torna incompatível com o ordenamento.\nIII. Contraposição ocorre quando um novo ato, com fundamento diverso, extingue o ato anterior.\nIV. A convalidação é a extinção do ato administrativo por razões de interesse público superveniente.',
        alternativas: [
          { id: 'A', texto: 'V – V – V – F.' },
          { id: 'B', texto: 'V – F – V – V.' },
          { id: 'C', texto: 'F – V – V – V.' },
          { id: 'D', texto: 'V – V – F – V.' },
          { id: 'E', texto: 'F – F – V – V.' }
        ],
        gabarito: 'A',
        explicacao: 'A alternativa A está correta: I (V), II (V), III (V), IV (F). A IV é falsa: convalidação NÃO é extinção — é correção de vício sanável, mantendo o ato.',
        explicacaoDetalhada: {
          correta: 'A alternativa A está correta: I (V), II (V), III (V), IV (F). A I está certa: cassação = descumprimento de condições pelo beneficiário. A II está certa: caducidade = norma superveniente incompatível. A III está certa: contraposição = novo ato com fundamento diverso extingue o anterior. A IV está FALSA: convalidação NÃO extingue o ato — corrige o vício sanável, mantendo o ato em vigor com efeitos retroativos.',
          incorretas: {
            B: 'A alternativa erra ao marcar a II como falsa. Caducidade É, sim, a extinção por norma superveniente incompatível. Também erra ao marcar a IV como verdadeira (ela é falsa — convalidação não extingue).',
            C: 'A alternativa erra ao marcar a I como falsa. Cassação É a extinção por descumprimento — definição clássica. Também erra ao marcar a IV como verdadeira.',
            D: 'A alternativa erra ao marcar a III como falsa. Contraposição É a extinção por novo ato com fundamento diverso — definição clássica. Também erra ao marcar a IV como verdadeira.',
            E: 'A alternativa erra ao marcar a I e a II como falsas. Ambas estão corretas. A IV é a única falsa (convalidação não extingue).'
          },
          conceitoCobrado: 'Institutos de extinção do ato: cassação, caducidade, contraposição — e distinção da convalidação',
          pegadinha: 'A afirmação IV introduz a CONVALIDAÇÃO como se fosse forma de extinção — mas convalidação mantém o ato, corrigindo o vício. A distinção é essencial: extinção (cassação, caducidade, contraposição, anulação, revogação) x conservação (convalidação).',
          comoApareceEmConcurso: 'O formato V/F sequência é usado para testar 4 institutos de extinção em uma única questão. A banca costuma manter 3 afirmações verdadeiras e 1 falsa — geralmente a que inclui a convalidação como extinção ou que troca cassação por caducidade.',
          exemploInedito: {
            contexto: '(a) Permissionário descumpre condição da permissão — o ato é extinto por CASSAÇÃO. (b) Nova lei proíbe a atividade antes permitida — o ato é extinto por CADUCIDADE. (c) Novo ato, com fundamento diverso, substitui o anterior — CONTRAposição. (d) Ato com vício de competência sanável — é CONVALIDADO, não extinto.',
            aplicacao: 'Os três primeiros são formas de EXTINÇÃO (o ato deixa de existir). O quarto é forma de CONSERVAÇÃO (o ato é mantido, com correção do vício). Confundir convalidação com extinção é erro conceitual — a IV explora exatamente isso.',
            desafio: 'Por que a convalidação é considerada forma de conservação, e não de extinção? Qual o efeito retroativo da convalidação (ex tunc)?'
          }
        },
        tags: ['cassação', 'caducidade', 'contraposição', 'convalidação', 'extinção', 'vf sequência']
      },

      /* ---------- Item 4 — C/E — Dificuldade 2 ---------- */
      {
        id: 'D-DA-19-04',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 2,
        subtopico: 'Presunção de legitimidade',
        pergunta: 'A presunção de legitimidade do ato administrativo é absoluta (iuris et de iure), impedindo qualquer questionamento judicial.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. A presunção de legitimidade é RELATIVA (iuris tantum): o ato se presume válido até prova em contrário, admitindo controle.',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. A presunção de legitimidade é RELATIVA (iuris tantum): o ato administrativo se presume válido até que se prove o contrário. Não é absoluta. Admite questionamento administrativo (autotutela) e judicial (controle de legalidade). A presunção absoluta (iuris et de iure) impediria qualquer controle — o que é incompatível com o Estado Democrático de Direito.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela trata a presunção como ABSOLUTA, o que impediria qualquer questionamento — inclusive judicial. Isso violaria o direito de acesso ao Judiciário (art. 5º, XXXV, CF) e o próprio regime de controle da Administração. A presunção é RELATIVA: válida até prova em contrário. O ônus da prova é de quem alega a invalidade, mas esse ônus pode ser cumprido.'
          },
          conceitoCobrado: 'Presunção de legitimidade — natureza relativa (iuris tantum)',
          pegadinha: 'A palavra "absoluta" e "impedindo qualquer questionamento" são os marcadores do erro. A presunção é relativa — o ato se presume válido, mas admite prova em contrário. A distinção entre presunção relativa (iuris tantum) e absoluta (iuris et de iure) é a chave.',
          comoApareceEmConcurso: 'Bancas usam essa distinção em C/E com frequência. A afirmação "presunção absoluta" é quase sempre FALSA. A dica: se impedisse qualquer controle, violaria o art. 5º, XXXV, CF — o que não é admissível.',
          exemploInedito: {
            contexto: 'Um servidor é autuado por infração administrativa com base em auto de infração. O particular alega que a autuação é ilegal e recorre administrativamente e, depois, judicialmente. O ato é revisto e, comprovada a ilegalidade, anulado.',
            aplicacao: 'A presunção de legitimidade NÃO impediu o questionamento — ela apenas inverteu o ônus: cabia ao particular provar a ilegalidade. Ele provou e o ato foi anulado. Se a presunção fosse absoluta, o recurso sequer seria conhecido — o que contrariaria o direito de defesa e o acesso à Justiça.',
            desafio: 'Em um processo judicial em que se discute a validade de um ato administrativo, quem tem o ônus da prova? Como a presunção relativa de legitimidade influencia a distribuição desse ônus?'
          }
        },
        tags: ['presunção de legitimidade', 'atributos', 'iuris tantum']
      },

      /* ---------- Item 5 — Situação — Dificuldade 2 ---------- */
      {
        id: 'D-DA-19-05',
        tipo: 'situacao',
        formato: 'multipla_escolha',
        dificuldade: 2,
        subtopico: 'Autoexecutoriedade em cenário',
        pergunta: 'Um fiscal sanitário interdita um restaurante com condições inadequadas de higiene, executando a interdição de imediato, sem autorização judicial. Paralelamente, o mesmo órgão aplica multa a outro estabelecimento — multa que, se não paga, é cobrada judicialmente. Sobre a autoexecutoriedade desses atos, é CORRETO afirmar que:',
        alternativas: [
          { id: 'A', texto: 'ambos os atos têm autoexecutoriedade, pois são atos de polícia e, como tais, sempre executáveis diretamente.' },
          { id: 'B', texto: 'apenas a interdição tem autoexecutoriedade; a multa, quando não paga, exige cobrança judicial, não sendo autoexecutável.' },
          { id: 'C', texto: 'apenas a multa tem autoexecutoriedade; a interdição depende de autorização judicial prévia.' },
          { id: 'D', texto: 'nenhum dos dois atos tem autoexecutoriedade, pois todos os atos administrativos dependem de prévia decisão judicial para execução.' },
          { id: 'E', texto: 'ambos os atos são autoexecutáveis, desde que o particular tenha sido previamente ouvido em contraditório.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B está correta. A interdição tem autoexecutoriedade (execução direta, sem Judiciário). A multa NÃO tem autoexecutoriedade: se não paga, é cobrada judicialmente.',
        explicacaoDetalhada: {
          correta: 'A alternativa B está correta. A AUTOEXECUTORIEDADE é atributo de alguns atos administrativos, permitindo execução direta sem autorização judicial prévia. A INTERDIÇÃO é autoexecutável (o fiscal interdita e a interdição é cumprida imediatamente). A MULTA NÃO é autoexecutável: se não for paga, o órgão precisa ajuizar execução fiscal ou cobrar judicialmente. A presença da autoexecutoriedade depende da natureza do ato e de previsão legal.',
          incorretas: {
            A: 'A alternativa erra ao generalizar: nem todo ato de polícia é autoexecutável. A multa é exemplo de ato de polícia SEM autoexecutoriedade. A generalização "sempre executáveis" é falsa — a autoexecutoriedade depende de previsão legal específica e da natureza do ato.',
            C: 'A alternativa inverte os dois atos: a interdição é autoexecutável (não depende de Judiciário); a multa não é (depende de cobrança judicial). Inversão completa do regime.',
            D: 'A alternativa nega a existência da autoexecutoriedade no Direito Administrativo brasileiro — o que contraria o regime jurídico-administrativo. A autoexecutoriedade existe e é atributo de atos como a interdição. Quem nega sua existência desconhece o instituto.',
            E: 'A alternativa condiciona a autoexecutoriedade ao contraditório prévio — o que é falso. A autoexecutoriedade é atributo de alguns atos independentemente de contraditório prévio (embora este deva existir depois, no controle). A confusão entre atributo e procedimento é o erro central.'
          },
          conceitoCobrado: 'Autoexecutoriedade — atributo de alguns atos, com exemplos práticos (interdição x multa)',
          pegadinha: 'A banca apresenta dois atos de polícia (interdição e multa) e testa se o candidato sabe que a autoexecutoriedade NÃO é geral. A interdição é autoexecutável; a multa não. A generalização "todo ato de polícia é autoexecutável" é erro clássico.',
          comoApareceEmConcurso: 'Cenários com interdição x multa são clássicos. A banca costuma apresentar os dois atos e exigir a distinção. A dica: interdição, apreensão, demolição — autoexecutáveis; multa — não autoexecutável (cobrança judicial).',
          exemploInedito: {
            contexto: 'Um posto de combustíveis é interditado por vazamento (execução imediata, sem Judiciário). Paralelamente, o mesmo órgão aplica multa ao posto por outra infração — a multa é inscrita em dívida ativa e cobrada judicialmente.',
            aplicacao: 'A interdição é autoexecutável (execução direta); a multa não é (exige cobrança judicial). A diferença importa: se o particular se recusar a pagar a multa, o órgão não pode "executá-la" diretamente — precisa da via judicial. Já a interdição é cumprida de imediato, com apoio policial se necessário.',
            desafio: 'Por que a multa NÃO tem autoexecutoriedade no Direito brasileiro? Que princípio constitucional justifica a exigência de cobrança judicial (ampla defesa, contraditório)?'
          }
        },
        tags: ['autoexecutoriedade', 'interdição', 'multa', 'atributos', 'situação aplicada']
      },

      /* ---------- Item 6 — Formato 2 (I, II, III) — Dificuldade 3 ---------- */
      {
        id: 'D-DA-19-06',
        tipo: 'multipla_escolha',
        formato: 'afirmacoes_romanas',
        dificuldade: 3,
        subtopico: 'Vícios sanáveis x insanáveis; convalidação',
        pergunta: 'Sobre os vícios do ato administrativo e a convalidação, analise as afirmações a seguir:\n\nI. Vício de competência é, em regra, sanável por convalidação, desde que não haja prejuízo ao interesse público nem a terceiros.\nII. Vício de finalidade é, em regra, insanável, gerando nulidade do ato.\nIII. Vício de forma é sempre insanável, não admitindo convalidação em nenhuma hipótese.\n\nEstão corretas:',
        alternativas: [
          { id: 'A', texto: 'Apenas I.' },
          { id: 'B', texto: 'Apenas II.' },
          { id: 'C', texto: 'Apenas I e II.' },
          { id: 'D', texto: 'Apenas II e III.' },
          { id: 'E', texto: 'I, II e III.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C está correta. I e II são verdadeiras; III é falsa (vício de forma pode ser sanável, se não houver prejuízo ao interesse público nem a terceiros).',
        explicacaoDetalhada: {
          correta: 'A alternativa C está correta. A I está certa: vício de competência é, em regra, sanável por convalidação, desde que não haja prejuízo ao interesse público nem a terceiros. A II está certa: vício de finalidade é, em regra, insanável, gerando nulidade. A III está INCORRETA: vício de forma NÃO é sempre insanável — pode ser sanável quando a forma não for essencial à validade do ato e não houver prejuízo. A regra é: vícios de competência e forma são, em regra, sanáveis; vícios de finalidade, motivo e objeto são, em regra, insanáveis.',
          incorretas: {
            A: 'A afirmação I está correta, mas a II também. Vício de finalidade é, sim, insanável — a finalidade é elemento vinculado do ato. Excluir a II é negar a consequência do vício de finalidade.',
            B: 'A afirmação II está correta, mas a I também. Vício de competência é, em regra, sanável por convalidação. Excluir a I é negar a natureza do vício de competência.',
            D: 'A afirmação III é falsa — vício de forma pode ser sanável. Incluí-la é o erro central. A II está correta, mas a III não.',
            E: 'Não é possível aceitar as três. A III é o erro: ela usa "sempre insanável" e "em nenhuma hipótese" — dois absolutos que denunciam a falsidade. Vício de forma pode ser sanável, se não for essencial à validade do ato.'
          },
          conceitoCobrado: 'Vícios sanáveis (competência, forma) x insanáveis (finalidade, motivo, objeto); convalidação',
          pegadinha: 'A afirmação III usa dois absolutos ("sempre", "em nenhuma hipótese") para tentar transformar uma afirmação parcialmente verdadeira em falsa. Vício de forma pode ser sanável se a forma não for essencial e não houver prejuízo. A regra geral é: competência e forma são, em regra, sanáveis; finalidade, motivo e objeto são, em regra, insanáveis.',
          comoApareceEmConcurso: 'Bancas usam essa distinção em afirmações romanas para testar se o candidato domina a classificação dos vícios. A afirmação que absolutiza ("sempre insanável") é quase sempre FALSA.',
          exemploInedito: {
            contexto: '(a) Servidor sem competência aplica multa. Em regra, o ato pode ser convalidado pela autoridade competente (se não houver prejuízo). (b) Fiscal interdita estabelecimento de desafeto, sem infração (desvio de finalidade). O ato é nulo — insanável. (c) Ato praticado com forma diversa da prevista, mas sem prejuízo à defesa do interessado. Em regra, pode ser convalidado.',
            aplicacao: 'Os vícios de competência e forma são, em regra, sanáveis. Os de finalidade, motivo e objeto são, em regra, insanáveis. A convalidação só é possível para vícios sanáveis — nunca para vícios de finalidade, motivo ou objeto. A III explora justamente a exceção (forma sanável) para tornar a afirmação falsa.',
            desafio: 'Por que o vício de motivo é, em regra, insanável? Reflita sobre a relação entre motivo e interesse público — e sobre a impossibilidade de "corrigir" a motivação de um ato já praticado.'
          }
        },
        tags: ['vícios', 'convalidação', 'sanável', 'insanável', 'afirmações romanas']
      },

      /* ---------- Item 7 — Autoavaliação ---------- */
      {
        id: 'D-DA-19-07',
        tipo: 'autoavaliacao',
        subtopico: 'Atos administrativos — visão integrada',
        pergunta: 'Sem consultar, você consegue listar os cinco requisitos do ato, diferenciar anulação de revogação, distinguir os institutos de extinção (cassação, caducidade, contraposição) e explicar a autoexecutoriedade?',
        resposta: 'REQUISITOS: competência, finalidade, forma, motivo e objeto (CO-FI-FO-MO-OB). Mérito NÃO é requisito — é juízo de conveniência e oportunidade. ANULAÇÃO x REVOGAÇÃO: ilegalidade, ex tunc, por Administração ou Judiciário x mérito, ex nunc, só pela Administração (Súmula 473 do STF). EXTINÇÃO: cassação (descumprimento); caducidade (norma superveniente incompatível); contraposição (novo ato com fundamento diverso); termo final (decurso de prazo). CONVALIDAÇÃO: correção de vício sanável (competência e forma, em regra) — mantém o ato. ATRIBUTOS: presunção de legitimidade RELATIVA (iuris tantum); imperatividade; autoexecutoriedade (interdição, apreensão — mas não multa); tipicidade. VÍCIOS: competência e forma sanáveis; finalidade, motivo e objeto, em regra, insanáveis. ATO ILEGAL: anula-se. ATO INCONVENIENTE: revoga-se.'
      }

    ]
  },

  /* ============================================================
     DA-20 — Serviços Públicos
  ============================================================ */
  'DA-20': {
    id: 'D-DA-20',
    moduloId: 'DA-20',
    itens: [

      /* ---------- Item 1 — Formato 6 (EXCETO) — Dificuldade 1 ---------- */
      {
        id: 'D-DA-20-01',
        tipo: 'multipla_escolha',
        formato: 'excecao',
        dificuldade: 1,
        subtopico: 'Princípios do serviço público',
        pergunta: 'Sobre os princípios do serviço público, assinale a alternativa INCORRETA:',
        alternativas: [
          { id: 'A', texto: 'Generalidade: o serviço deve ser prestado a todos os usuários, sem distinção arbitrária.' },
          { id: 'B', texto: 'Continuidade: o serviço não pode ser interrompido, salvo nas hipóteses legais (razões de segurança, inadimplemento, emergência).' },
          { id: 'C', texto: 'Modicidade: as tarifas devem ser acessíveis, compatíveis com a capacidade econômica do usuário.' },
          { id: 'D', texto: 'Lucratividade: o serviço público deve gerar lucro para o Estado, como condição de sua manutenção e expansão.' },
          { id: 'E', texto: 'Atualidade: o serviço deve ser prestado com modernidade técnica e eficiência.' }
        ],
        gabarito: 'D',
        explicacao: 'A alternativa D é a INCORRETA. Lucratividade NÃO é princípio do serviço público. O serviço pode ser prestado com lucro, mas o princípio não é a lucratividade — é a modicidade (tarifas acessíveis) e a generalidade.',
        explicacaoDetalhada: {
          correta: 'A alternativa D está INCORRETA e, por isso, é a resposta. LUCRAVIDADE NÃO É PRINCÍPIO do serviço público. O serviço público pode ser prestado com lucro (ex.: concessionárias), mas o princípio é a MODICIDADE (tarifas acessíveis, compatíveis com a capacidade do usuário), não a busca de lucro. O Estado pode explorar atividade econômica com fim lucrativo (art. 173, CF), mas o SERVIÇO PÚBLICO tem regime próprio, voltado ao interesse coletivo.',
          incorretas: {
            A: 'A alternativa está correta e não deve ser marcada. Generalidade = serviço a todos, sem distinção arbitrária. Seria INCORRETA se dissesse que o serviço pode ser prestado apenas a alguns.',
            B: 'A alternativa está correta e não deve ser marcada. Continuidade = regra, com exceções legais. Seria INCORRETA se dissesse que a continuidade é absoluta — não é.',
            C: 'A alternativa está correta e não deve ser marcada. Modicidade = tarifas acessíveis. Seria INCORRETA se dissesse que a modicidade significa tarifas caras (o oposto).',
            E: 'A alternativa está correta e não deve ser marcada. Atualidade = modernidade técnica. Seria INCORRETA se dissesse que o serviço pode ser prestado com tecnologia obsoleta.'
          },
          conceitoCobrado: 'Princípios do serviço público — generalidade, continuidade, modicidade, atualidade (entre outros)',
          pegadinha: 'A alternativa D introduz "lucratividade" como se fosse princípio — mas não é. O serviço público pode ser prestado com lucro, mas o princípio é a modicidade (tarifas acessíveis). A introdução de um "princípio" inexistente é a marca do formato EXCETO. A dica é memorizar: generalidade, continuidade, modicidade, atualidade, regularidade, segurança, cortesia, mutabilidade.',
          comoApareceEmConcurso: 'Bancas costumam listar os princípios corretamente e introduzir um inexistente (lucratividade, economicidade) em uma única alternativa. É o padrão do módulo.',
          exemploInedito: {
            contexto: 'Uma concessionária de energia elétrica opera com lucro. Isso não significa que a lucratividade seja princípio do serviço público — significa que a exploração econômica pode ser lucrativa, mas o serviço é regulado pela modicidade (tarifa acessível) e pela continuidade.',
            aplicacao: 'O lucro é uma consequência possível, não um princípio. O princípio é a MODICIDADE: as tarifas devem ser acessíveis. Se o lucro fosse princípio, as tarifas poderiam ser elevadas para maximizar o retorno — o que contrariaria a modicidade. A confusão entre "pode gerar lucro" e "lucratividade é princípio" é o erro da alternativa D.',
            desafio: 'Por que a lucratividade não é princípio do serviço público, mesmo quando a concessionária tem lucro? Reflita sobre a diferença entre atividade econômica (art. 173, CF) e serviço público (art. 175, CF).'
          }
        },
        tags: ['serviços públicos', 'princípios', 'modicidade', 'lucratividade']
      },

      /* ---------- Item 2 — C/E — Dificuldade 1 ---------- */
      {
        id: 'D-DA-20-02',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 1,
        subtopico: 'Uti universi x uti singuli',
        pergunta: 'Serviços uti universi são prestados a destinatários indeterminados, são indivisíveis e custeados por impostos (ex.: iluminação pública); serviços uti singuli são prestados a destinatários determinados, são divisíveis e custeados por taxas ou tarifas (ex.: energia elétrica, água).',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'A afirmação é CERTA. Uti universi = destinatários indeterminados, indivisíveis, custeados por impostos. Uti singuli = destinatários determinados, divisíveis, custeados por taxas/tarifas.',
        explicacaoDetalhada: {
          correta: 'A afirmação é CERTA. A distinção clássica é: UTI UNIVERSI (geral) — serviço prestado a destinatários INDETERMINADOS, indivisível, custeado por IMPOSTO (ex.: iluminação pública, limpeza urbana, segurança pública). UTI SINGULI (individual) — serviço prestado a destinatários DETERMINADOS, divisível, custeado por TAXA ou TARIFA (ex.: energia elétrica, água, coleta domiciliar de lixo). A distinção importa para o regime de custeio e de responsabilidade.',
          incorretas: {
            F: 'A afirmação não é falsa. Ela reproduz corretamente a distinção clássica entre uti universi e uti singuli: destinatários (indeterminados x determinados), divisibilidade (indivisível x divisível), custeio (imposto x taxa/tarifa). Tratar como falsa indicaria desconhecimento da classificação — ou confusão com outras classificações (próprio x impróprio, que tratam de outra dimensão).'
          },
          conceitoCobrado: 'Classificação de serviços públicos: uti universi (geral) x uti singuli (individual)',
          pegadinha: 'A afirmação está correta. A armadilha (não presente) seria inverter os pares (uti universi = individual, custeado por taxa) ou confundir com a classificação próprio x impróprio (que trata da natureza da atividade, não do destinatário). A dica: universi = todos (indeterminado, imposto); singuli = cada um (determinado, taxa/tarifa).',
          comoApareceEmConcurso: 'Bancas usam essa distinção em C/E com frequência. A afirmação costuma ser verdadeira, mas pode vir com os pares invertidos (uti universi = taxa) para torná-la falsa.',
          exemploInedito: {
            contexto: 'A iluminação pública é custeada pela COSIP (contribuição de iluminação pública), cobrada na fatura de energia — mas é serviço uti universi, indivisível. Já o fornecimento de energia elétrica é uti singuli, divisível, medido por medidor e cobrado por tarifa.',
            aplicacao: 'A COSIP é uma contribuição, não taxa individualizada — mas a iluminação é uti universi (indivisível). O fornecimento de energia é uti singuli (divisível, medido). Confundir os dois é erro comum, especialmente porque a COSIP é cobrada junto com a fatura. A distinção está na natureza do serviço (indivisível x divisível) e no destinatário (indeterminado x determinado).',
            desafio: 'Por que a iluminação pública é uti universi mesmo sendo custeada por uma contribuição específica (COSIP)? A natureza do serviço (indivisível) prevalece sobre a forma de custeio?'
          }
        },
        tags: ['serviços públicos', 'uti universi', 'uti singuli', 'classificação']
      },

      /* ---------- Item 3 — Formato 1 (V/F sequência) — Dificuldade 2 ---------- */
      {
        id: 'D-DA-20-03',
        tipo: 'multipla_escolha',
        formato: 'vf_sequencia',
        dificuldade: 2,
        subtopico: 'Concessão, permissão e autorização; continuidade',
        pergunta: 'Sobre as formas de delegação de serviço público e o princípio da continuidade, analise as afirmações e assinale a sequência correta:\n\nI. Concessão é contrato administrativo, precedido de licitação, com prazo determinado.\nII. Permissão de serviço público é sempre formalizada por ato unilateral, sem necessidade de licitação.\nIII. A autorização de serviço público, em regra, é ato unilateral, discricionário e precário, com regimes próprios conforme o setor.\nIV. A continuidade é princípio do serviço público, mas admite exceções legais.',
        alternativas: [
          { id: 'A', texto: 'V – V – V – F.' },
          { id: 'B', texto: 'V – F – V – V.' },
          { id: 'C', texto: 'F – V – V – V.' },
          { id: 'D', texto: 'V – F – F – V.' },
          { id: 'E', texto: 'F – F – V – V.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B está correta: I (V), II (F), III (V), IV (V). A II é falsa: a permissão de serviço público, nos termos da Lei 8.987/95 (art. 40), é precedida de licitação e formalizada por contrato de adesão — não é ato unilateral.',
        explicacaoDetalhada: {
          correta: 'A alternativa B está correta: I (V), II (F), III (V), IV (V). A I está certa: concessão = contrato + licitação + prazo determinado. A II está FALSA: a permissão de serviço público, nos termos do art. 40 da Lei 8.987/95, é delegada a título precário, precedida de licitação e formalizada por CONTRATO DE ADESÃO — não é ato unilateral. A III está certa: autorização, em regra, é ato unilateral, discricionário e precário, com regimes próprios conforme o setor (a doutrina reconhece variações). A IV está certa: continuidade é regra, com exceções legais.',
          incorretas: {
            A: 'A alternativa erra ao marcar a II como verdadeira. A permissão de serviço público NÃO é simples ato unilateral: a Lei 8.987/95 exige licitação e formalização por contrato de adesão. Tratar a permissão como ato unilateral é erro conceitual — a doutrina e a lei a tratam como delegação contratual precária.',
            C: 'A alternativa erra ao marcar a I como falsa. A concessão É contrato administrativo, precedido de licitação, com prazo determinado — definição clássica. Também erra ao marcar a II como verdadeira.',
            D: 'A alternativa erra ao marcar a II como falsa (correto) e a III como falsa (ela é verdadeira). A autorização, em regra, é ato unilateral, discricionário e precário — a ressalva "com regimes próprios conforme o setor" a torna verdadeira.',
            E: 'A alternativa erra ao marcar a I e a II como falsas. A I é verdadeira (concessão = contrato); a II é falsa (permissão = licitação + contrato de adesão). A combinação de erros indica confusão entre os três institutos.'
          },
          conceitoCobrado: 'Concessão, permissão e autorização de serviço público; princípio da continuidade',
          pegadinha: 'A afirmação II explora um erro clássico: tratar a permissão de serviço público como simples ato unilateral. A Lei 8.987/95 (art. 40) exige licitação e contrato de adesão. A doutrina mais recente reforça: permissão de SERVIÇO PÚBLICO tem natureza contratual precária. Já a autorização, em regra, é ato unilateral — mas com regimes próprios conforme o setor (a afirmação III é cuidadosa ao dizer "em regra" e "regimes próprios").',
          comoApareceEmConcurso: 'O formato V/F sequência é usado para testar 4 conceitos em uma única questão. A banca costuma manter 3 afirmações verdadeiras e 1 falsa — geralmente a que trata a permissão como ato unilateral (erro clássico).',
          exemploInedito: {
            contexto: 'Concessão de rodovia: contrato de 30 anos, com licitação. Permissão de serviço de transporte: delegação precária, com licitação e contrato de adesão. Autorização de táxi: ato unilateral, discricionário, precário (regime próprio).',
            aplicacao: 'A concessão é contrato de longo prazo; a permissão é delegação precária, mas também contratual (Lei 8.987/95); a autorização, em regra, é ato unilateral (mas setores específicos podem ter regimes próprios). A II erra ao tratar a permissão como ato unilateral — ela exige licitação e contrato de adesão.',
            desafio: 'Por que a Lei 8.987/95 optou por formalizar a permissão de serviço público por contrato de adesão, em vez de ato unilateral? Que garantias isso traz ao particular e à Administração?'
          }
        },
        tags: ['concessão', 'permissão', 'autorização', 'continuidade', 'vf sequência']
      },

      /* ---------- Item 4 — C/E — Dificuldade 2 ---------- */
      {
        id: 'D-DA-20-04',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 2,
        subtopico: 'Continuidade — regra e exceções',
        pergunta: 'A continuidade do serviço público é absoluta, não admitindo interrupção em nenhuma hipótese, ainda que haja previsão legal.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. A continuidade é a REGRA, mas admite exceções legais: razões de segurança, inadimplemento do usuário (com aviso prévio) e emergência.',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. A continuidade é a REGRA, mas NÃO é absoluta. Admite EXCEÇÕES LEGAIS: (1) razões de ordem técnica ou de segurança das instalações; (2) inadimplemento do usuário, considerado o interesse da coletividade (com aviso prévio); (3) situações emergenciais. A interrupção sem justificativa legal viola o princípio — mas a interrupção COM previsão legal é admitida.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela trata a continuidade como ABSOLUTA ("não admitindo interrupção em nenhuma hipótese"), o que contraria a própria lei (art. 6º, §3º, da Lei 8.987/95) e a jurisprudência. As exceções existem e são taxativas. Confundir a regra com a exceção é erro clássico.'
          },
          conceitoCobrado: 'Continuidade do serviço público — regra com exceções legais',
          pegadinha: 'As palavras "absoluta" e "em nenhuma hipótese" são os marcadores do erro. A continuidade é a REGRA — mas há exceções legais (segurança, inadimplemento com aviso prévio, emergência). Princípios absolutos são raros no Direito Administrativo — e a continuidade não é um deles.',
          comoApareceEmConcurso: 'Bancas usam essa distinção em C/E com frequência. A afirmação "continuidade absoluta" é quase sempre FALSA. A dica: a regra é a continuidade; as exceções são legais e taxativas.',
          exemploInedito: {
            contexto: 'Uma concessionária de energia elétrica interrompe o fornecimento de um cliente inadimplente, após aviso prévio. A interrupção é válida — está prevista em lei (art. 6º, §3º, II, da Lei 8.987/95).',
            aplicacao: 'A continuidade é a regra; a interrupção por inadimplemento, com aviso prévio, é exceção legal. Se a continuidade fosse absoluta, a interrupção seria sempre ilegal — o que não corresponde à lei nem à jurisprudência. A afirmação da questão, ao tratar como absoluta, erra.',
            desafio: 'Por que a lei admite a interrupção por inadimplemento, mas exige aviso prévio? Reflita sobre o equilíbrio entre o direito do usuário e a sustentabilidade econômica do serviço.'
          }
        },
        tags: ['continuidade', 'exceções', 'Lei 8.987/95']
      },

      /* ---------- Item 5 — Situação — Dificuldade 2 ---------- */
      {
        id: 'D-DA-20-05',
        tipo: 'situacao',
        formato: 'multipla_escolha',
        dificuldade: 2,
        subtopico: 'Encampação x caducidade',
        pergunta: 'Duas concessionárias de serviço público: a primeira descumpre reiteradamente obrigações contratuais (atrasos, falhas na prestação); a segunda opera adequadamente, mas o poder concedente decide retomar o serviço por interesse público (nova política setorial). Sobre os institutos aplicáveis, é CORRETO afirmar que:',
        alternativas: [
          { id: 'A', texto: 'ambas as situações configuram encampação, pois o poder concedente pode retomar o serviço por interesse público em qualquer caso.' },
          { id: 'B', texto: 'ambas as situações configuram caducidade, pois o descumprimento é sempre a causa da retomada.' },
          { id: 'C', texto: 'a primeira situação configura caducidade (descumprimento); a segunda, encampação (interesse público, com lei autorizativa e indenização).' },
          { id: 'D', texto: 'a primeira situação configura encampação (interesse público); a segunda, caducidade (descumprimento).' },
          { id: 'E', texto: 'nenhuma das situações autoriza a retomada, pois a concessão é contrato de prazo determinado e não pode ser interrompida.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C está correta. A primeira (descumprimento) configura CADUCIDADE; a segunda (interesse público) configura ENCAMPAÇÃO, com lei autorizativa e indenização.',
        explicacaoDetalhada: {
          correta: 'A alternativa C está correta. A primeira concessionária DESCUMPRE obrigações contratuais — a retomada se dá por CADUCIDADE (art. 38 da Lei 8.987/95), sem indenização (salvo investimentos não amortizados). A segunda concessionária opera bem, mas o poder concedente decide retomar por INTERESSE PÚBLICO — a retomada se dá por ENCAMPAÇÃO (art. 37), com lei autorizativa e indenização.',
          incorretas: {
            A: 'A alternativa erra ao classificar ambas como encampação. A primeira não é encampação (que pressupõe interesse público, não descumprimento) — é caducidade. Além disso, a encampação exige lei autorizativa específica — não é decisão unilateral a qualquer tempo.',
            B: 'A alternativa erra ao classificar ambas como caducidade. A segunda não é caducidade (que pressupõe descumprimento) — é encampação. A caducidade é sanção por inadimplemento, não instrumento de reorientação de política pública.',
            D: 'A alternativa inverte os institutos: a primeira (descumprimento) é caducidade, não encampação; a segunda (interesse público) é encampação, não caducidade. Inversão completa dos dois institutos.',
            E: 'A alternativa nega a possibilidade de retomada — o que contraria a Lei 8.987/95 (arts. 37 e 38). A concessão pode ser retomada por encampação ou caducidade, além de outras hipóteses (rescisão, falência, extinção do prazo). Negar a retomada é erro grave.'
          },
          conceitoCobrado: 'Distinção entre encampação (interesse público, com lei e indenização) e caducidade (descumprimento, sem indenização)',
          pegadinha: 'A banca apresenta duas situações com fundamentos distintos (descumprimento x interesse público) e testa se o candidato associa corretamente cada uma ao instituto adequado. A confusão mais comum é tratar toda retomada como encampação (ignorando o descumprimento) ou toda retomada como caducidade (ignorando o interesse público).',
          comoApareceEmConcurso: 'Cenários com encampação x caducidade são clássicos. A banca costuma apresentar duas concessionárias com situações distintas e exigir a classificação correta. A dica: descumprimento = caducidade; interesse público = encampação (com lei e indenização).',
          exemploInedito: {
            contexto: 'Concessionária de transporte coletivo: (a) descumpre reiteradamente o número mínimo de viagens — o poder concedente instaura processo e declara a caducidade; (b) opera bem, mas o município decide municipalizar o serviço por interesse público — edita lei autorizativa, promove a encampação e indeniza a concessionária.',
            aplicacao: 'A caducidade é sanção por descumprimento — não gera indenização (salvo investimentos não amortizados). A encampação é retomada por interesse público — exige lei autorizativa e indenização. A distinção está no FUNDAMENTO (descumprimento x interesse público) e nas CONSEQUÊNCIAS (sem indenização x com indenização).',
            desafio: 'Por que a encampação exige lei autorizativa e a caducidade não? Reflita sobre a natureza de cada instituto (sanção x reorientação de política pública).'
          }
        },
        tags: ['encampação', 'caducidade', 'concessão', 'situação aplicada']
      },

      /* ---------- Item 6 — Formato 3 (Associação) — Dificuldade 3 ---------- */
      {
        id: 'D-DA-20-06',
        tipo: 'multipla_escolha',
        formato: 'associacao',
        dificuldade: 3,
        subtopico: 'Classificação dos serviços públicos',
        pergunta: 'Sobre a classificação dos serviços públicos, associe corretamente cada CATEGORIA ao seu EXEMPLO:\n\nColuna I — Categoria\n1. Uti universi\n2. Uti singuli\n3. Serviço impróprio\n\nColuna II — Exemplo\n( ) Serviço divisível, com usuários determinados e remuneração específica (ex.: energia elétrica, água).\n( ) Serviço indivisível, prestado a usuários indeterminados, custeado por imposto (ex.: iluminação pública).\n( ) Atividade econômica em sentido estrito, explorada pelo Estado em regime de concorrência com a iniciativa privada.',
        alternativas: [
          { id: 'A', texto: '1 – primeiro; 2 – segundo; 3 – terceiro.' },
          { id: 'B', texto: '1 – segundo; 2 – primeiro; 3 – terceiro.' },
          { id: 'C', texto: '1 – terceiro; 2 – primeiro; 3 – segundo.' },
          { id: 'D', texto: '1 – primeiro; 2 – terceiro; 3 – segundo.' },
          { id: 'E', texto: '1 – terceiro; 2 – segundo; 3 – primeiro.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B está correta. Uti universi (1) → indivisível, indeterminado, imposto (segundo). Uti singuli (2) → divisível, determinado, tarifa (primeiro). Serviço impróprio (3) → atividade econômica (terceiro).',
        explicacaoDetalhada: {
          correta: 'A alternativa B está correta. UTI UNIVERSI (1) → serviço INDIVISÍVEL, prestado a usuários INDETERMINADOS, custeado por IMPOSTO (segundo da Coluna II) — ex.: iluminação pública. UTI SINGULI (2) → serviço DIVISÍVEL, com usuários DETERMINADOS e remuneração específica (primeiro da Coluna II) — ex.: energia elétrica, água. SERVIÇO IMPRÓPRIO (3) → atividade econômica em sentido estrito, explorada pelo Estado em concorrência (terceiro da Coluna II).',
          incorretas: {
            A: 'A alternativa erra ao colocar uti universi como uti singuli (primeiro — divisível, determinado) e uti singuli como uti universi (segundo — indivisível, indeterminado). Inversão completa entre os dois primeiros.',
            C: 'A alternativa coloca uti universi como impróprio (terceiro) e impróprio como uti singuli (segundo). Erro de inversão entre uti universi e impróprio.',
            D: 'A alternativa acerta uti universi como uti universi (primeiro — indivisível, indeterminado), mas erra os outros dois: coloca uti singuli como impróprio (terceiro) e impróprio como uti singuli (segundo). Inversão entre uti singuli e impróprio.',
            E: 'A alternativa coloca uti universi como impróprio (terceiro), uti singuli como uti universi (segundo — indivisível) e impróprio como uti singuli (primeiro). Inversão circular dos três.'
          },
          conceitoCobrado: 'Classificação dos serviços públicos: uti universi, uti singuli e serviço impróprio',
          pegadinha: 'A associação exige que o candidato distinga três categorias com lógicas distintas: uti universi (indivisível, indeterminado, imposto), uti singuli (divisível, determinado, taxa/tarifa) e impróprio (atividade econômica). A confusão entre uti universi e uti singuli (ambos serviços públicos) e entre serviço próprio x impróprio é a chave.',
          comoApareceEmConcurso: 'Bancas usam associação de colunas com categorias e exemplos para testar precisão. É comum embaralhar as colunas de modo que apenas uma combinação esteja integralmente correta.',
          exemploInedito: {
            contexto: 'Três serviços: (a) iluminação pública (uti universi — indivisível, imposto); (b) fornecimento de água (uti singuli — divisível, tarifa); (c) exploração de petróleo pela Petrobras (serviço impróprio — atividade econômica em concorrência).',
            aplicacao: 'Cada serviço tem uma categoria. Uti universi: indivisível, imposto. Uti singuli: divisível, tarifa. Impróprio: atividade econômica. Se alguém dissesse "iluminação é uti singuli porque é cobrada na fatura de energia", erraria — a iluminação é uti universi (indivisível); a COSIP é apenas forma de custeio.',
            desafio: 'Por que o serviço impróprio é chamado de "impróprio"? Que diferença há entre ele e o serviço público próprio (uti universi/uti singuli) em termos de regime jurídico?'
          }
        },
        tags: ['serviços públicos', 'uti universi', 'uti singuli', 'impróprio', 'associação']
      },

      /* ---------- Item 7 — Autoavaliação ---------- */
      {
        id: 'D-DA-20-07',
        tipo: 'autoavaliacao',
        subtopico: 'Serviços públicos — visão integrada',
        pergunta: 'Sem consultar, você consegue diferenciar uti universi de uti singuli, serviço próprio de impróprio, concessão de permissão de autorização, encampação de caducidade e explicar as exceções à continuidade?',
        resposta: 'UTI UNIVERSI x UTI SINGULI: destinatários indeterminados, indivisível, custeado por imposto x destinatários determinados, divisível, custeado por taxa/tarifa. PRÓPRIO x IMPRÓPRIO: serviço público típico (saúde, educação) x atividade econômica em sentido estrito (art. 173, CF). CONCESSÃO x PERMISSÃO x AUTORIZAÇÃO: contrato + licitação + prazo determinado x delegação precária + licitação + contrato de adesão (Lei 8.987/95) x ato unilateral, discricionário, precário (regimes próprios conforme o setor). ENCAMPAÇÃO x CADUCIDADE: interesse público, com lei autorizativa e indenização x descumprimento, sem indenização (salvo investimentos não amortizados). CONTINUIDADE: regra, com exceções legais (segurança, inadimplemento com aviso prévio, emergência). PRINCÍPIOS: generalidade, continuidade, modicidade, atualidade, regularidade, segurança, cortesia, mutabilidade — lucratividade NÃO é princípio.'
      }

    ]
  }
  ,

  /* ============================================================
     DA-21 — Licitações e contratos administrativos
  ============================================================ */
  'DA-21': {
    id: 'D-DA-21',
    moduloId: 'DA-21',
    itens: [

      /* ---------- Item 1 — Formato 6 (EXCETO) — Dificuldade 1 ---------- */
      {
        id: 'D-DA-21-01',
        tipo: 'multipla_escolha',
        formato: 'excecao',
        dificuldade: 1,
        subtopico: 'Modalidades de licitação (Lei 14.133/2021)',
        pergunta: 'São modalidades de licitação previstas na Lei 14.133/2021, EXCETO:',
        alternativas: [
          { id: 'A', texto: 'Pregão.' },
          { id: 'B', texto: 'Concorrência.' },
          { id: 'C', texto: 'Concurso.' },
          { id: 'D', texto: 'Convite.' },
          { id: 'E', texto: 'Diálogo competitivo.' }
        ],
        gabarito: 'D',
        explicacao: 'A alternativa D é a INCORRETA. Convite NÃO é modalidade da Lei 14.133/2021. As modalidades são: pregão, concorrência, concurso, leilão e diálogo competitivo (art. 28).',
        explicacaoDetalhada: {
          correta: 'A alternativa D está INCORRETA e, por isso, é a resposta. O CONVITE era modalidade da Lei 8.666/1993, mas NÃO foi mantido pela Lei 14.133/2021. As modalidades atuais são cinco: PREGÃO, CONCORRÊNCIA, CONCURSO, LEILÃO e DIÁLOGO COMPETITIVO (art. 28 da Lei 14.133/2021). A tomada de preços e o convite desapareceram.',
          incorretas: {
            A: 'O pregão é modalidade da Lei 14.133/2021 (art. 28, I), obrigatório para bens e serviços comuns. Não é a exceção.',
            B: 'A concorrência é modalidade da Lei 14.133/2021 (art. 28, II), para obras, serviços especiais e bens não comuns. Não é a exceção.',
            C: 'O concurso é modalidade da Lei 14.133/2021 (art. 28, III), para escolha de trabalho técnico, científico ou artístico. Não é a exceção.',
            E: 'O diálogo competitivo é modalidade da Lei 14.133/2021 (art. 28, V), para contratações complexas com inovação tecnológica. Não é a exceção.'
          },
          conceitoCobrado: 'Modalidades de licitação na Lei 14.133/2021 — rol taxativo',
          pegadinha: 'A banca insere o "convite" — modalidade extinta — no meio das modalidades atuais. Quem estudou pela Lei 8.666/93 pode ser induzido ao erro. A dica: a Lei 14.133/2021 tem CINCO modalidades: pregão, concorrência, concurso, leilão e diálogo competitivo. Convite e tomada de preços não existem mais.',
          comoApareceEmConcurso: 'Bancas costumam listar as modalidades atuais e inserir uma extinta (convite ou tomada de preços) na alternativa INCORRETA. É o padrão do módulo.',
          exemploInedito: {
            contexto: 'Um órgão precisa comprar 100 computadores (bem comum). Pela Lei 14.133/2021, deve usar PREGÃO. Se fosse uma obra de grande porte, usaria CONCORRÊNCIA. Se fosse um projeto artístico, CONCURSO. Se fosse alienação de bem inservível, LEILÃO. Se fosse solução tecnológica inovadora, DIÁLOGO COMPETITIVO. Nunca CONVITE — essa modalidade não existe mais.',
            aplicacao: 'Cada necessidade tem uma modalidade adequada. O convite era usado para obras de pequeno valor na Lei 8.666/93, mas foi eliminado. Quem tenta usá-lo hoje comete ilegalidade — não há previsão legal.',
            desafio: 'Por que a Lei 14.133/2021 eliminou o convite e a tomada de preços? Que vantagens o novo rol de modalidades trouxe para a Administração?'
          }
        },
        tags: ['licitação', 'modalidades', 'Lei 14.133/2021', 'convite']
      },

      /* ---------- Item 2 — C/E — Dificuldade 1 ---------- */
      {
        id: 'D-DA-21-02',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 1,
        subtopico: 'Dispensa x inexigibilidade',
        pergunta: 'A dispensa de licitação ocorre quando há competição possível, mas a lei autoriza a contratação direta; a inexigibilidade ocorre quando a competição é inviável (ex.: fornecedor exclusivo).',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'A afirmação é CERTA. Dispensa: competição possível, lei autoriza a contratação direta (art. 75). Inexigibilidade: competição inviável (art. 74).',
        explicacaoDetalhada: {
          correta: 'A afirmação é CERTA. A DISPENSA (art. 75 da Lei 14.133/2021) ocorre quando a competição é POSSÍVEL, mas a lei autoriza a contratação direta (ex.: valor baixo, emergência, compra de imóvel específico). A INEXIGIBILIDADE (art. 74) ocorre quando a competição é INVIÁVEL (ex.: fornecedor exclusivo, notória especialização para serviço singular). A distinção está na viabilidade da competição.',
          incorretas: {
            F: 'A afirmação não é falsa. Ela distingue corretamente dispensa (competição possível + lei autoriza) e inexigibilidade (competição inviável). Tratar como falsa indicaria confusão entre os dois institutos — erro comum, mas aqui a afirmação está tecnicamente correta.'
          },
          conceitoCobrado: 'Distinção entre dispensa (competição possível) e inexigibilidade (competição inviável)',
          pegadinha: 'A afirmação está correta. A armadilha (não presente) seria inverter os institutos (dispensa = competição inviável; inexigibilidade = competição possível) ou reduzir a dispensa a "valor baixo" e a inexigibilidade a "emergência". A dica: dispensa = "não precisa licitar, mas poderia"; inexigibilidade = "não há como licitar".',
          comoApareceEmConcurso: 'Bancas usam essa distinção em C/E com frequência. A afirmação costuma ser verdadeira, mas pode vir com os institutos invertidos para torná-la falsa.',
          exemploInedito: {
            contexto: 'Um órgão: (a) compra 50 resmas de papel por R$ 5.000 (dispensa por valor — art. 75, II); (b) contrata cantor consagrado para evento oficial (inexigibilidade por notória especialização — art. 74, III); (c) compra imóvel com características específicas (dispensa — art. 75, V); (d) contrata fornecedor exclusivo de peça (inexigibilidade — art. 74, I).',
            aplicacao: 'Dispensa: há competição possível (vários fornecedores de papel, vários imóveis similares), mas a lei autoriza a contratação direta por valor ou especificidade. Inexigibilidade: a competição é inviável (só um cantor tem aquela característica; só um fornecedor tem a peça). Confundir os dois é erro clássico.',
            desafio: 'A contratação de serviço de auditoria com notória especialização é dispensa ou inexigibilidade? Justifique com base na viabilidade da competição.'
          }
        },
        tags: ['licitação', 'dispensa', 'inexigibilidade']
      },

      /* ---------- Item 3 — Formato 1 (V/F sequência) — Dificuldade 2 ---------- */
      {
        id: 'D-DA-21-03',
        tipo: 'multipla_escolha',
        formato: 'vf_sequencia',
        dificuldade: 2,
        subtopico: 'Critérios de julgamento e fases da licitação',
        pergunta: 'Sobre os critérios de julgamento e as fases da licitação na Lei 14.133/2021, analise as afirmações e assinale a sequência correta:\n\nI. São critérios de julgamento: menor preço, maior desconto, melhor técnica ou conteúdo artístico, técnica e preço, maior lance e maior retorno econômico (art. 33).\nII. O pregão é a modalidade obrigatória para bens e serviços comuns, com critério de menor preço ou maior desconto.\nIII. A fase preparatória da licitação inclui o estudo técnico preliminar (ETP), que deve demonstrar a viabilidade da contratação.\nIV. O diálogo competitivo pode ser usado para qualquer contratação, independentemente da complexidade.',
        alternativas: [
          { id: 'A', texto: 'V – V – V – F.' },
          { id: 'B', texto: 'V – F – V – V.' },
          { id: 'C', texto: 'F – V – V – V.' },
          { id: 'D', texto: 'V – V – F – V.' },
          { id: 'E', texto: 'F – F – V – V.' }
        ],
        gabarito: 'A',
        explicacao: 'A alternativa A está correta: I (V), II (V), III (V), IV (F). O diálogo competitivo é restrito a contratações complexas (inovação tecnológica), não a qualquer contratação.',
        explicacaoDetalhada: {
          correta: 'A alternativa A está correta: I (V), II (V), III (V), IV (F). A I está certa: são os seis critérios do art. 33. A II está certa: pregão é obrigatório para bens e serviços comuns, com menor preço ou maior desconto. A III está certa: o ETP integra a fase preparatória. A IV está FALSA: o diálogo competitivo é restrito a contratações complexas (art. 32), não a qualquer contratação.',
          incorretas: {
            B: 'A alternativa erra ao marcar a II como falsa. O pregão É obrigatório para bens e serviços comuns — essa é a regra do art. 29. Também erra ao marcar a IV como verdadeira (ela é falsa).',
            C: 'A alternativa erra ao marcar a I como falsa. Os seis critérios estão corretos (art. 33). Também erra ao marcar a IV como verdadeira.',
            D: 'A alternativa erra ao marcar a III como falsa. O ETP integra, sim, a fase preparatória — é o primeiro documento técnico. Também erra ao marcar a IV como verdadeira.',
            E: 'A alternativa erra ao marcar a I e a II como falsas. Ambas são verdadeiras. A única falsa é a IV — diálogo competitivo não é para qualquer contratação.'
          },
          conceitoCobrado: 'Critérios de julgamento, pregão obrigatório, ETP e restrição do diálogo competitivo',
          pegadinha: 'A afirmação IV generaliza o diálogo competitivo — mas ele é restrito a contratações complexas, com inovação tecnológica ou impossibilidade de definir especificações. Não é modalidade geral. A palavra "qualquer" denuncia o erro.',
          comoApareceEmConcurso: 'O formato V/F sequência é usado para testar 4 conceitos em uma única questão. A banca costuma manter 3 afirmações verdadeiras e 1 falsa — geralmente a que generaliza uma modalidade restrita.',
          exemploInedito: {
            contexto: 'Um órgão: (a) compra material de escritório (pregão, menor preço); (b) contrata obra de grande porte (concorrência, menor preço ou técnica e preço); (c) aliena veículos inservíveis (leilão, maior lance); (d) precisa de solução tecnológica inovadora, sem especificação prévia (diálogo competitivo).',
            aplicacao: 'O diálogo competitivo é usado apenas em (d) — contratação complexa. Se fosse usado para comprar material de escritório, seria inadequado. A restrição é essencial: o diálogo competitivo pressupõe complexidade que justifique a interação com os licitantes.',
            desafio: 'Por que o diálogo competitivo é restrito a contratações complexas? Que riscos haveria em usá-lo para qualquer contratação?'
          }
        },
        tags: ['licitação', 'critérios', 'pregão', 'diálogo competitivo', 'vf sequência']
      },

      /* ---------- Item 4 — C/E — Dificuldade 2 ---------- */
      {
        id: 'D-DA-21-04',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 2,
        subtopico: 'Cláusulas exorbitantes',
        pergunta: 'As cláusulas exorbitantes decorrem da supremacia do interesse público sobre o privado e incluem, entre outras, a alteração unilateral do contrato e a aplicação de sanções pela Administração.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'A afirmação é CERTA. As cláusulas exorbitantes decorrem da supremacia do interesse público e incluem alteração unilateral, rescisão unilateral, fiscalização, sanções e ocupação provisória.',
        explicacaoDetalhada: {
          correta: 'A afirmação é CERTA. As CLÁUSULAS EXORBITANTES são prerrogativas da Administração nos contratos administrativos, decorrentes da SUPREMACIA do interesse público sobre o privado. Incluem: alteração unilateral (art. 104, I), rescisão unilateral (art. 104, II), fiscalização (art. 104, III), aplicação de sanções (art. 104, IV) e ocupação provisória (art. 104, V). São a expressão contratual da supremacia.',
          incorretas: {
            F: 'A afirmação não é falsa. Ela descreve corretamente as cláusulas exorbitantes: decorrem da supremacia e incluem alteração unilateral e sanções. Tratar como falsa indicaria confusão com a indisponibilidade (que gera restrições, não prerrogativas) — mas aqui a afirmação está tecnicamente correta.'
          },
          conceitoCobrado: 'Cláusulas exorbitantes — fundamento (supremacia) e exemplos (alteração unilateral, sanções)',
          pegadinha: 'A afirmação está correta. A armadilha (não presente) seria dizer que as cláusulas exorbitantes decorrem da indisponibilidade (errado — decorrem da supremacia) ou que incluem renúncia de direitos (errado — a Administração não renuncia a prerrogativas).',
          comoApareceEmConcurso: 'Bancas usam essa associação em C/E para testar se o candidato sabe que as cláusulas exorbitantes são expressão da supremacia. A afirmação costuma ser verdadeira, mas pode vir com "indisponibilidade" no lugar de "supremacia" para torná-la falsa.',
          exemploInedito: {
            contexto: 'Um contrato de obra pública: a Administração altera o projeto para ampliar uma escola (alteração unilateral — cláusula exorbitante); aplica multa por atraso (sanção — cláusula exorbitante); fiscaliza a execução (fiscalização — cláusula exorbitante).',
            aplicacao: 'Todas são cláusulas exorbitantes — prerrogativas que o particular não teria em contrato privado. Decorrem da supremacia do interesse público: a Administração pode alterar, fiscalizar e sancionar para garantir o interesse coletivo. Se o particular tivesse os mesmos poderes, o interesse público ficaria vulnerável.',
            desafio: 'Por que a alteração unilateral é permitida nos contratos administrativos, mas não nos contratos privados? Reflita sobre a diferença de regime jurídico.'
          }
        },
        tags: ['contratos', 'cláusulas exorbitantes', 'supremacia']
      },

      /* ---------- Item 5 — Situação — Dificuldade 2 ---------- */
      {
        id: 'D-DA-21-05',
        tipo: 'situacao',
        formato: 'multipla_escolha',
        dificuldade: 2,
        subtopico: 'Dispensa por valor e inexigibilidade em cenário',
        pergunta: 'Um órgão público precisa: (a) comprar 20 resas de papel por R$ 4.000; (b) contratar cantor consagrado para evento oficial; (c) contratar serviço de manutenção de elevador com fornecedor exclusivo. Sobre a forma de contratação, é CORRETO afirmar que:',
        alternativas: [
          { id: 'A', texto: '(a), (b) e (c) são casos de inexigibilidade, pois não há competição.' },
          { id: 'B', texto: '(a) é dispensa por valor; (b) e (c) são inexigibilidade, pois a competição é inviável (notória especialização e fornecedor exclusivo).' },
          { id: 'C', texto: '(a) e (b) são dispensa; (c) é inexigibilidade, pois só há um fornecedor.' },
          { id: 'D', texto: '(a), (b) e (c) são casos de dispensa, pois a lei autoriza a contratação direta em todas as hipóteses.' },
          { id: 'E', texto: '(a) é inexigibilidade; (b) e (c) são dispensa por valor.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B está correta. (a) dispensa por valor (art. 75, II); (b) inexigibilidade por notória especialização (art. 74, III); (c) inexigibilidade por fornecedor exclusivo (art. 74, I).',
        explicacaoDetalhada: {
          correta: 'A alternativa B está correta. (a) Compra de papel por R$ 4.000 = DISPENSA POR VALOR (art. 75, II — limite para bens e serviços comuns). (b) Cantor consagrado = INEXIGIBILIDADE por notória especialização (art. 74, III — serviço singular, profissional de notória especialização). (c) Manutenção de elevador com fornecedor exclusivo = INEXIGIBILIDADE por fornecedor exclusivo (art. 74, I — competição inviável).',
          incorretas: {
            A: 'A alternativa erra ao classificar (a) como inexigibilidade. A compra de papel por R$ 4.000 tem competição POSSÍVEL (vários fornecedores) — é dispensa por valor, não inexigibilidade. Só (b) e (c) são inexigibilidade.',
            C: 'A alternativa erra ao classificar (b) como dispensa. O cantor consagrado se enquadra em inexigibilidade por notória especialização (art. 74, III), não em dispensa. A dispensa pressupõe competição possível; a inexigibilidade, inviável.',
            D: 'A alternativa erra ao classificar tudo como dispensa. (b) e (c) são inexigibilidade — a competição é inviável. A dispensa exige competição possível; a inexigibilidade, inviável. A generalização é falsa.',
            E: 'A alternativa inverte tudo: (a) é dispensa (não inexigibilidade); (b) e (c) são inexigibilidade (não dispensa). Inversão completa dos institutos.'
          },
          conceitoCobrado: 'Aplicação de dispensa e inexigibilidade em cenário concreto',
          pegadinha: 'A banca apresenta três situações com fundamentos distintos e testa se o candidato associa corretamente cada uma ao instituto. A confusão mais comum é tratar toda contratação direta como dispensa (ignorando a inexigibilidade) ou toda contratação de valor baixo como inexigibilidade (ignorando a dispensa).',
          comoApareceEmConcurso: 'Cenários com dispensa x inexigibilidade são clássicos. A banca costuma apresentar 3 situações e exigir a classificação correta. A dica: valor baixo = dispensa; fornecedor exclusivo/notória especialização = inexigibilidade.',
          exemploInedito: {
            contexto: 'Um município: (a) compra 10 cadeiras por R$ 3.000 (dispensa por valor); (b) contrata grupo musical renomado para festival (inexigibilidade por notória especialização); (c) adquire peça de reposição de equipamento hospitalar com fornecedor exclusivo (inexigibilidade).',
            aplicacao: 'Mesmo raciocínio: (a) dispensa (competição possível, valor baixo); (b) e (c) inexigibilidade (competição inviável). A distinção está na viabilidade da competição — não no valor ou na natureza do objeto.',
            desafio: 'A contratação de advogado para causa complexa é dispensa ou inexigibilidade? Depende do caso concreto — que critérios distinguem uma hipótese da outra?'
          }
        },
        tags: ['licitação', 'dispensa', 'inexigibilidade', 'situação aplicada']
      },

      /* ---------- Item 6 — Formato 3 (Associação) — Dificuldade 3 ---------- */
      {
        id: 'D-DA-21-06',
        tipo: 'multipla_escolha',
        formato: 'associacao',
        dificuldade: 3,
        subtopico: 'Modalidades x critérios de julgamento',
        pergunta: 'Sobre as modalidades de licitação e os critérios de julgamento, associe corretamente cada MODALIDADE ao CRITÉRIO típico:\n\nColuna I — Modalidade\n1. Pregão\n2. Concorrência\n3. Leilão\n\nColuna II — Critério típico\n( ) Maior lance (alienação de bens).\n( ) Menor preço ou maior desconto (bens e serviços comuns).\n( ) Menor preço, técnica e preço, melhor técnica ou maior desconto (obras e serviços especiais).',
        alternativas: [
          { id: 'A', texto: '1 – primeiro; 2 – segundo; 3 – terceiro.' },
          { id: 'B', texto: '1 – segundo; 2 – terceiro; 3 – primeiro.' },
          { id: 'C', texto: '1 – terceiro; 2 – primeiro; 3 – segundo.' },
          { id: 'D', texto: '1 – segundo; 2 – primeiro; 3 – terceiro.' },
          { id: 'E', texto: '1 – terceiro; 2 – segundo; 3 – primeiro.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B está correta. Pregão (1) → menor preço/maior desconto (segundo). Concorrência (2) → menor preço, técnica e preço, melhor técnica (terceiro). Leilão (3) → maior lance (primeiro).',
        explicacaoDetalhada: {
          correta: 'A alternativa B está correta. PREGÃO (1) → menor preço ou maior desconto, para bens e serviços comuns (segundo da Coluna II). CONCORRÊNCIA (2) → menor preço, técnica e preço, melhor técnica ou maior desconto, para obras e serviços especiais (terceiro da Coluna II). LEILÃO (3) → maior lance, para alienação de bens (primeiro da Coluna II).',
          incorretas: {
            A: 'A alternativa erra em todas: coloca pregão como maior lance (leilão), concorrência como menor preço (pregão) e leilão como técnica e preço (concorrência). Inversão circular.',
            C: 'A alternativa coloca pregão como maior lance (leilão), concorrência como menor preço (pregão) e leilão como técnica e preço (concorrência). Inversão completa.',
            D: 'A alternativa acerta pregão como pregão (segundo) e erra as outras duas: concorrência como maior lance (leilão) e leilão como menor preço (pregão). Inversão entre concorrência e leilão.',
            E: 'A alternativa coloca pregão como maior lance (leilão), concorrência como concorrência (terceiro) e leilão como menor preço (pregão). Inversão entre pregão e leilão.'
          },
          conceitoCobrado: 'Correspondência entre modalidade e critério de julgamento típico',
          pegadinha: 'A associação exige que o candidato distinga os critérios de cada modalidade. A confusão mais comum é entre pregão (menor preço/maior desconto) e concorrência (vários critérios, incluindo técnica e preço) e entre leilão (maior lance) e as demais. A dica: leilão = maior lance; pregão = menor preço/maior desconto; concorrência = critérios variados.',
          comoApareceEmConcurso: 'Bancas usam associação de colunas com modalidades e critérios para testar precisão. É comum embaralhar as colunas de modo que apenas uma combinação esteja integralmente correta.',
          exemploInedito: {
            contexto: 'Um órgão: (a) compra material de escritório via pregão (menor preço); (b) contrata obra via concorrência (técnica e preço); (c) aliena veículos inservíveis via leilão (maior lance).',
            aplicacao: 'Cada modalidade tem um critério típico. Pregão: menor preço/maior desconto. Concorrência: menor preço, técnica e preço, melhor técnica, maior desconto. Leilão: maior lance. Se alguém dissesse "leilão por menor preço", erraria — leilão é para maior lance (alienação).',
            desafio: 'Por que o leilão usa o critério de maior lance, e não de menor preço? Reflita sobre a natureza da alienação (o Estado quer receber o máximo, não pagar o mínimo).'
          }
        },
        tags: ['licitação', 'modalidades', 'critérios', 'associação']
      },

      /* ---------- Item 7 — Autoavaliação ---------- */
      {
        id: 'D-DA-21-07',
        tipo: 'autoavaliacao',
        subtopico: 'Licitações e contratos — visão integrada',
        pergunta: 'Sem consultar, você consegue listar as cinco modalidades da Lei 14.133/2021, diferenciar dispensa de inexigibilidade, identificar os critérios de julgamento e explicar as cláusulas exorbitantes?',
        resposta: 'MODALIDADES: pregão, concorrência, concurso, leilão e diálogo competitivo. Convite e tomada de preços não existem mais. DISPENSA x INEXIGIBILIDADE: competição possível, lei autoriza (art. 75) x competição inviável (art. 74 — fornecedor exclusivo, notória especialização). CRITÉRIOS: menor preço, maior desconto, melhor técnica ou conteúdo artístico, técnica e preço, maior lance e maior retorno econômico (art. 33). PREGÃO: obrigatório para bens e serviços comuns (menor preço ou maior desconto). CLÁUSULAS EXORBITANTES: alteração unilateral, rescisão unilateral, fiscalização, sanções, ocupação provisória — decorrem da supremacia do interesse público. DIÁLOGO COMPETITIVO: restrito a contratações complexas. ETP: integra a fase preparatória.'
      }

    ]
  },

  /* ============================================================
     DA-23 — Controle da Administração Pública
  ============================================================ */
  'DA-23': {
    id: 'D-DA-23',
    moduloId: 'DA-23',
    itens: [

      /* ---------- Item 1 — Formato 6 (EXCETO) — Dificuldade 1 ---------- */
      {
        id: 'D-DA-23-01',
        tipo: 'multipla_escolha',
        formato: 'excecao',
        dificuldade: 1,
        subtopico: 'Controle interno x externo',
        pergunta: 'Sobre o controle da Administração Pública, assinale a alternativa INCORRETA:',
        alternativas: [
          { id: 'A', texto: 'O controle interno é exercido dentro de cada Poder, como autocontrole preventivo e corretivo.' },
          { id: 'B', texto: 'O controle externo é exercido pelo Congresso Nacional, com o auxílio do Tribunal de Contas da União.' },
          { id: 'C', texto: 'O TCU julga as contas do Presidente da República, aplicando-lhe sanções se necessário.' },
          { id: 'D', texto: 'O controle judicial verifica a legalidade dos atos administrativos, não o mérito.' },
          { id: 'E', texto: 'A autotutela permite à Administração anular seus atos ilegais e revogar os inconvenientes.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C é a INCORRETA. O TCU APRECIA as contas do Presidente (parecer prévio), mas quem JULGA é o Congresso Nacional (art. 49, IX, CF). O TCU não julga as contas do Presidente.',
        explicacaoDetalhada: {
          correta: 'A alternativa C está INCORRETA e, por isso, é a resposta. O TCU APRECIA as contas do Presidente da República, mediante PARECER PRÉVIO (art. 71, I, CF). Quem JULGA as contas do Presidente é o CONGRESSO NACIONAL (art. 49, IX, CF). O TCU julga as contas dos DEMAIS administradores públicos, mas não as do Presidente. A distinção é clássica em provas.',
          incorretas: {
            A: 'A alternativa está correta e não deve ser marcada. O controle interno é exercido dentro de cada Poder (art. 74, CF), como autocontrole. Seria INCORRETA se dissesse que o interno é exercido pelo TCU — isso é externo.',
            B: 'A alternativa está correta e não deve ser marcada. O controle externo é do Congresso Nacional, com auxílio do TCU (art. 71, caput). Seria INCORRETA se dissesse que o TCU exerce o controle externo sozinho — ele auxilia o Congresso.',
            D: 'A alternativa está correta e não deve ser marcada. O controle judicial verifica a legalidade, não o mérito (Súmula 473 do STF). Seria INCORRETA se dissesse que o Judiciário revê o mérito.',
            E: 'A alternativa está correta e não deve ser marcada. A autotutela permite anular atos ilegais e revogar os inconvenientes (Súmulas 346 e 473). Seria INCORRETA se dissesse que a autotutela permite ao Judiciário revogar ato administrativo.'
          },
          conceitoCobrado: 'Competência do TCU (apreciar contas do Presidente) x competência do Congresso Nacional (julgar)',
          pegadinha: 'A alternativa C troca "apreciar" por "julgar" — e essa é a pegadinha mais clássica do controle externo. O TCU emite parecer prévio; o Congresso julga. Quem decora "TCU julga contas" erra. A dica: TCU aprecia (parecer prévio); Congresso julga.',
          comoApareceEmConcurso: 'Bancas usam essa distinção em questões de controle com frequência. A alternativa que atribui ao TCU o julgamento das contas do Presidente é quase sempre a INCORRETA.',
          exemploInedito: {
            contexto: 'O Presidente da República presta contas anualmente. O TCU emite parecer prévio em 60 dias (art. 71, I, CF). O parecer é enviado ao Congresso Nacional, que julga as contas (art. 49, IX). O TCU NÃO julga as contas do Presidente — apenas opina.',
            aplicacao: 'A distinção é essencial: o TCU é órgão técnico, auxiliar do Congresso. Quem julga é o Congresso, órgão político. Se o TCU julgasse, haveria usurpação de competência do Legislativo. A alternativa C comete esse erro.',
            desafio: 'Por que a Constituição separou "apreciar" (TCU) de "julgar" (Congresso) as contas do Presidente? Reflita sobre a natureza técnica x política da decisão.'
          }
        },
        tags: ['controle', 'TCU', 'Congresso Nacional', 'contas do Presidente']
      },

      /* ---------- Item 2 — C/E — Dificuldade 1 ---------- */
      {
        id: 'D-DA-23-02',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 1,
        subtopico: 'Autotutela x tutela',
        pergunta: 'Autotutela é a revisão dos próprios atos pela Administração; tutela é a supervisão da Administração Direta sobre a Indireta. São institutos distintos.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'A afirmação é CERTA. Autotutela: revisão dos próprios atos (Súmulas 346 e 473). Tutela: supervisão da Direta sobre a Indireta. São institutos distintos.',
        explicacaoDetalhada: {
          correta: 'A afirmação é CERTA. AUTOTUTELA é o poder de a Administração rever SEUS PRÓPRIOS atos (anular os ilegais, revogar os inconvenientes — Súmulas 346 e 473 do STF). TUTELA (ou controle finalístico) é a supervisão que a Administração Direta exerce sobre as entidades da Administração Indireta. São institutos distintos: um é autocontrole; o outro é supervisão de outra entidade.',
          incorretas: {
            F: 'A afirmação não é falsa. Ela distingue corretamente autotutela (próprios atos) de tutela (supervisão da Indireta). Tratar como falsa indicaria confusão entre os dois — erro comum, mas aqui a afirmação está tecnicamente correta.'
          },
          conceitoCobrado: 'Distinção entre autotutela (autocontrole) e tutela (supervisão da Indireta)',
          pegadinha: 'A afirmação está correta. A armadilha (não presente) seria tratá-los como sinônimos ou inverter os conceitos (autotutela = supervisão da Indireta; tutela = revisão dos próprios atos). A dica: AUTO = sobre si; TUTELA = sobre outro.',
          comoApareceEmConcurso: 'Bancas usam essa distinção em C/E com frequência. A afirmação costuma ser verdadeira, mas pode vir com os conceitos invertidos para torná-la falsa.',
          exemploInedito: {
            contexto: 'Um ministério anula, de ofício, uma portaria ilegal que ele mesmo editou (autotutela). Paralelamente, a Secretaria-Executiva supervisiona os atos de uma autarquia vinculada (tutela).',
            aplicacao: 'Autotutela: revisão dos próprios atos. Tutela: supervisão da entidade vinculada. São operações distintas — a primeira é autocontrole; a segunda é controle finalístico sobre outra pessoa jurídica. Confundi-las leva a erros de competência.',
            desafio: 'Se um ministério quer rever um ato praticado por uma autarquia vinculada, ele usa autotutela ou tutela? Qual o instrumento adequado?'
          }
        },
        tags: ['controle', 'autotutela', 'tutela']
      },

      /* ---------- Item 3 — Formato 1 (V/F sequência) — Dificuldade 2 ---------- */
      {
        id: 'D-DA-23-03',
        tipo: 'multipla_escolha',
        formato: 'vf_sequencia',
        dificuldade: 2,
        subtopico: 'Controle interno, externo e judicial; prazos',
        pergunta: 'Sobre o controle da Administração Pública, analise as afirmações e assinale a sequência correta:\n\nI. O controle interno é exercido dentro de cada Poder, com a finalidade de avaliar o cumprimento das metas e a legalidade dos atos.\nII. O controle externo é exercido pelo Congresso Nacional, com o auxílio do TCU, que aprecia as contas do Presidente mediante parecer prévio.\nIII. O controle judicial verifica a legalidade dos atos administrativos, podendo anular atos ilegais, mas não revogar atos por mérito.\nIV. O prazo para a Administração anular atos de que decorram efeitos favoráveis ao administrado é de 10 anos, salvo má-fé.',
        alternativas: [
          { id: 'A', texto: 'V – V – V – F.' },
          { id: 'B', texto: 'V – F – V – V.' },
          { id: 'C', texto: 'F – V – V – V.' },
          { id: 'D', texto: 'V – V – F – V.' },
          { id: 'E', texto: 'F – F – V – V.' }
        ],
        gabarito: 'A',
        explicacao: 'A alternativa A está correta: I (V), II (V), III (V), IV (F). O prazo decadencial é de 5 anos (art. 54 da Lei 9.784/99), não 10 anos.',
        explicacaoDetalhada: {
          correta: 'A alternativa A está correta: I (V), II (V), III (V), IV (F). A I está certa: controle interno é exercido em cada Poder (art. 74, CF). A II está certa: controle externo é do Congresso, com auxílio do TCU, que aprecia as contas do Presidente por parecer prévio. A III está certa: o Judiciário anula atos ilegais, mas não revoga por mérito. A IV está FALSA: o prazo é de 5 anos (art. 54 da Lei 9.784/99), não 10.',
          incorretas: {
            B: 'A alternativa erra ao marcar a II como falsa. O controle externo É do Congresso, com auxílio do TCU — definição correta. Também erra ao marcar a IV como verdadeira (ela é falsa).',
            C: 'A alternativa erra ao marcar a I como falsa. O controle interno É exercido em cada Poder (art. 74). Também erra ao marcar a IV como verdadeira.',
            D: 'A alternativa erra ao marcar a III como falsa. O controle judicial verifica legalidade, não mérito — definição correta. Também erra ao marcar a IV como verdadeira.',
            E: 'A alternativa erra ao marcar a I e a II como falsas. Ambas são verdadeiras. A única falsa é a IV — prazo de 5 anos, não 10.'
          },
          conceitoCobrado: 'Controle interno, externo e judicial; prazo decadencial da autotutela (5 anos)',
          pegadinha: 'A afirmação IV troca o prazo: 5 anos (art. 54 da Lei 9.784/99) por 10 anos. Quem não memorizou o prazo erra. A dica: o prazo é de 5 anos, salvo má-fé. A banca costuma dobrar o prazo para induzir ao erro.',
          comoApareceEmConcurso: 'O formato V/F sequência é usado para testar 4 conceitos de controle em uma única questão. A banca costuma manter 3 afirmações verdadeiras e 1 falsa — geralmente a que troca o prazo decadencial (5 por 10 anos) ou atribui ao TCU o julgamento das contas do Presidente.',
          exemploInedito: {
            contexto: 'Um órgão concedeu aposentadoria a servidor em 2018, com efeitos favoráveis. Em 2024 (6 anos depois), a Administração identifica ilegalidade e quer anular. Sem má-fé, o prazo de 5 anos já expirou — a anulação não é mais possível pela via administrativa.',
            aplicacao: 'O prazo decadencial de 5 anos protege a segurança jurídica. Passados 5 anos sem má-fé, o ato não pode mais ser anulado pela Administração. Se a afirmação IV diz 10 anos, está errada — são 5. A dica: 5 anos, contados da prática do ato (ou do primeiro pagamento, nos efeitos patrimoniais contínuos).',
            desafio: 'Por que a lei fixou prazo de 5 anos para a autotutela? Que valor jurídico justifica esse limite?'
          }
        },
        tags: ['controle', 'prazo decadencial', 'autotutela', 'vf sequência']
      },

      /* ---------- Item 4 — C/E — Dificuldade 2 ---------- */
      {
        id: 'D-DA-23-04',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 2,
        subtopico: 'Controle judicial — legalidade x mérito',
        pergunta: 'O Poder Judiciário pode revogar atos administrativos por razões de mérito (conveniência e oportunidade), substituindo a decisão do administrador público.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. O Judiciário só anula atos ilegais; não revoga atos por mérito. A revogação é competência exclusiva da Administração (Súmula 473 do STF).',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. O Poder Judiciário exerce CONTROLE DE LEGALIDADE: pode ANULAR atos ilegais, mas NÃO pode REVOGAR atos por razões de mérito (conveniência e oportunidade). A revogação é competência EXCLUSIVA da Administração (Súmula 473 do STF). O Judiciário não substitui a decisão do administrador — apenas verifica se o ato respeitou a lei.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela atribui ao Judiciário a competência para revogar atos por mérito — o que contraria a Súmula 473 do STF e a separação de Poderes. O Judiciário não pode substituir a valoração de conveniência e oportunidade do administrador. Se o fizesse, invadiria a competência do Executivo.'
          },
          conceitoCobrado: 'Limites do controle judicial — legalidade (anulação) x mérito (revogação)',
          pegadinha: 'A palavra "revogar" e "mérito" são os marcadores do erro. O Judiciário ANULA (ilegalidade), não REVOGA (mérito). A distinção é essencial: o controle judicial é de legalidade, não de mérito. A Súmula 473 do STF é a base.',
          comoApareceEmConcurso: 'Bancas usam essa distinção em C/E com frequência. A afirmação "o Judiciário pode revogar por mérito" é quase sempre FALSA. A dica: Judiciário anula; Administração revoga e anula.',
          exemploInedito: {
            contexto: 'Um particular impetra mandado de segurança alegando que um ato administrativo é ilegal. O Judiciário verifica a legalidade e, se constatar ilegalidade, ANULA o ato. Mas se o particular alega que o ato é "inconveniente" (mérito), o Judiciário não pode revogá-lo — só a Administração pode.',
            aplicacao: 'O Judiciário não substitui a decisão de mérito do administrador. Se o ato é legal, mas inconveniente, o particular deve recorrer à própria Administração (pedido de revogação) — não ao Judiciário. A afirmação da questão erra ao atribuir ao Judiciário a revogação por mérito.',
            desafio: 'Por que o controle judicial é limitado à legalidade? Reflita sobre a separação de Poderes e a legitimidade democrática do administrador para decidir sobre conveniência e oportunidade.'
          }
        },
        tags: ['controle judicial', 'legalidade', 'mérito', 'Súmula 473']
      },

      /* ---------- Item 5 — Situação — Dificuldade 2 ---------- */
      {
        id: 'D-DA-23-05',
        tipo: 'situacao',
        formato: 'multipla_escolha',
        dificuldade: 2,
        subtopico: 'Identificação do tipo de controle em cenário',
        pergunta: 'Três situações: (a) a Controladoria-Geral da União revisa os controles internos de um ministério; (b) o TCU audita a execução de um contrato de obra pública; (c) um cidadão ajuíza ação popular para anular ato lesivo ao patrimônio público. Essas situações ilustram, respectivamente:',
        alternativas: [
          { id: 'A', texto: 'controle externo, controle interno e controle judicial.' },
          { id: 'B', texto: 'controle interno, controle externo e controle judicial.' },
          { id: 'C', texto: 'controle judicial, controle interno e controle externo.' },
          { id: 'D', texto: 'controle interno, controle judicial e controle externo.' },
          { id: 'E', texto: 'controle externo, controle judicial e controle interno.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B está correta. (a) CGU = controle interno; (b) TCU = controle externo; (c) ação popular = controle judicial.',
        explicacaoDetalhada: {
          correta: 'A alternativa B está correta. (a) Controladoria-Geral da União = CONTROLE INTERNO (art. 74, CF — órgão central do sistema de controle interno do Executivo Federal). (b) TCU = CONTROLE EXTERNO (art. 71, CF — auxilia o Congresso Nacional). (c) Ação popular = CONTROLE JUDICIAL (art. 5º, LXXIII, CF — qualquer cidadão pode anular ato lesivo).',
          incorretas: {
            A: 'A alternativa troca (a) e (b): CGU é interno (não externo); TCU é externo (não interno). Só (c) está correta.',
            C: 'A alternativa erra tudo: (a) CGU não é judicial (é interno); (b) TCU não é interno (é externo); (c) ação popular não é externo (é judicial). Inversão completa.',
            D: 'A alternativa acerta (a) CGU como interno, mas erra (b) e (c): TCU não é judicial (é externo); ação popular não é externo (é judicial). Inversão entre externo e judicial.',
            E: 'A alternativa erra tudo: (a) CGU não é externo (é interno); (b) TCU não é judicial (é externo); (c) ação popular não é interno (é judicial). Inversão completa.'
          },
          conceitoCobrado: 'Identificação do tipo de controle: interno (CGU), externo (TCU) e judicial (ação popular)',
          pegadinha: 'A banca apresenta três situações com atores distintos e testa se o candidato associa corretamente cada um ao tipo de controle. A confusão mais comum é entre controle externo (TCU) e controle judicial (ação popular), ou entre interno (CGU) e externo (TCU).',
          comoApareceEmConcurso: 'Cenários com três situações são clássicos para testar os tipos de controle. A banca costuma embaralhar os três e oferecer alternativas com erros parciais — geralmente trocando interno por externo ou externo por judicial.',
          exemploInedito: {
            contexto: 'Em um município: (a) a Controladoria Municipal revisa os gastos da Secretaria de Saúde (controle interno); (b) o TCE audita as contas do prefeito (controle externo); (c) um cidadão ajuíza ação popular contra ato lesivo ao patrimônio público (controle judicial).',
            aplicacao: 'Cada ator exerce um tipo de controle: Controladoria = interno; TCE = externo; ação popular = judicial. Se alguém dissesse "o TCE é controle judicial", erraria — o TCE é órgão de controle externo, não Judiciário. A ação popular é instrumento judicial, mas o TCE não é.',
            desafio: 'Qual a diferença entre o controle exercido pelo TCU e o controle exercido pelo Judiciário? Que instrumentos cada um utiliza?'
          }
        },
        tags: ['controle interno', 'controle externo', 'controle judicial', 'situação aplicada']
      },

      /* ---------- Item 6 — Formato 2 (I, II, III) — Dificuldade 3 ---------- */
      {
        id: 'D-DA-23-06',
        tipo: 'multipla_escolha',
        formato: 'afirmacoes_romanas',
        dificuldade: 3,
        subtopico: 'Autotutela, prazo decadencial e segurança jurídica',
        pergunta: 'Sobre a autotutela e o prazo decadencial, analise as afirmações a seguir:\n\nI. A Administração pode anular seus atos ilegais a qualquer tempo, independentemente de prazo, em razão do princípio da legalidade.\nII. O prazo decadencial para a Administração anular atos de que decorram efeitos favoráveis ao administrado é de 5 anos, salvo comprovada má-fé.\nIII. O prazo decadencial não se aplica quando o ato foi praticado com má-fé pelo beneficiário.\n\nEstão corretas:',
        alternativas: [
          { id: 'A', texto: 'Apenas I.' },
          { id: 'B', texto: 'Apenas II.' },
          { id: 'C', texto: 'Apenas II e III.' },
          { id: 'D', texto: 'Apenas I e III.' },
          { id: 'E', texto: 'I, II e III.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C está correta. II e III são verdadeiras; I é falsa (há prazo de 5 anos, salvo má-fé — não é "a qualquer tempo").',
        explicacaoDetalhada: {
          correta: 'A alternativa C está correta. A I está INCORRETA: a Administração NÃO pode anular a qualquer tempo — há prazo decadencial de 5 anos (art. 54 da Lei 9.784/99), salvo má-fé. A II está certa: o prazo é de 5 anos, salvo má-fé. A III está certa: a má-fé afasta o prazo decadencial — a Administração pode anular a qualquer tempo.',
          incorretas: {
            A: 'A afirmação I está incorreta — não há anulação "a qualquer tempo". O prazo é de 5 anos, salvo má-fé. Incluir a I é o erro central.',
            B: 'A afirmação II está correta, mas a III também. A má-fé afasta o prazo decadencial — a Administração pode anular a qualquer tempo. Excluir a III é negar a exceção legal.',
            D: 'A afirmação I é falsa (não há anulação a qualquer tempo) e a III é verdadeira. Incluir a I é o erro central.',
            E: 'Não é possível aceitar as três. A I é falsa: o prazo de 5 anos existe e limita a autotutela. A II e a III estão corretas.'
          },
          conceitoCobrado: 'Prazo decadencial da autotutela (5 anos) e exceção da má-fé',
          pegadinha: 'A afirmação I usa "a qualquer tempo" e "independentemente de prazo" — dois absolutos que denunciam o erro. O prazo de 5 anos é a regra; a má-fé é a exceção que afasta o prazo. Quem pensa que a legalidade permite anulação eterna erra.',
          comoApareceEmConcurso: 'Bancas usam essa distinção em afirmações romanas para testar se o candidato domina o prazo e a exceção. A afirmação que trata a autotutela como ilimitada é quase sempre FALSA.',
          exemploInedito: {
            contexto: '(a) Um órgão concede aposentadoria em 2018, com efeitos favoráveis. Em 2024, sem má-fé, identifica ilegalidade. O prazo de 5 anos expirou — não pode anular. (b) O mesmo órgão identifica que o servidor agiu com má-fé (documentos falsos). O prazo não se aplica — pode anular a qualquer tempo.',
            aplicacao: 'A regra é o prazo de 5 anos; a exceção é a má-fé. O exemplo (a) ilustra a regra (prazo expirado); o (b), a exceção (má-fé afasta o prazo). A afirmação I, ao dizer "a qualquer tempo", ignora a regra e generaliza indevidamente.',
            desafio: 'Por que a má-fé afasta o prazo decadencial? Reflita sobre a proteção da boa-fé e da segurança jurídica — e sobre a conduta de quem agiu com dolo.'
          }
        },
        tags: ['autotutela', 'prazo decadencial', 'má-fé', 'segurança jurídica', 'afirmações romanas']
      },

      /* ---------- Item 7 — Autoavaliação ---------- */
      {
        id: 'D-DA-23-07',
        tipo: 'autoavaliacao',
        subtopico: 'Controle da Administração Pública — visão integrada',
        pergunta: 'Sem consultar, você consegue diferenciar controle interno, externo e judicial, explicar o papel do TCU e do Congresso nas contas do Presidente, e distinguir autotutela de tutela?',
        resposta: 'CONTROLE INTERNO: exercido em cada Poder (art. 74, CF) — autocontrole preventivo e corretivo (ex.: CGU, Controladorias). CONTROLE EXTERNO: exercido pelo Congresso Nacional, com auxílio do TCU (art. 71, CF). TCU aprecia as contas do Presidente (parecer prévio); o Congresso JULGA (art. 49, IX). TCU julga as contas dos demais administradores. CONTROLE JUDICIAL: verifica legalidade, não mérito — pode anular atos ilegais, mas não revogar por conveniência (Súmula 473). AUTOTUTELA x TUTELA: revisão dos próprios atos (Súmulas 346 e 473) x supervisão da Direta sobre a Indireta. PRAZO DECADENCIAL: 5 anos para anular atos com efeitos favoráveis ao administrado, salvo má-fé (art. 54 da Lei 9.784/99). A má-fé afasta o prazo — a Administração pode anular a qualquer tempo.'
      }

    ]
  }
  ,

  /* ============================================================
     DA-25 — Processo Administrativo (Lei 9.784/1999)
  ============================================================ */
  'DA-25': {
    id: 'D-DA-25',
    moduloId: 'DA-25',
    itens: [

      /* ---------- Item 1 — Formato 6 (EXCETO) — Dificuldade 1 ---------- */
      {
        id: 'D-DA-25-01',
        tipo: 'multipla_escolha',
        formato: 'excecao',
        dificuldade: 1,
        subtopico: 'Fases do processo administrativo',
        pergunta: 'Sobre as fases do processo administrativo da Lei 9.784/1999, assinale a alternativa INCORRETA:',
        alternativas: [
          { id: 'A', texto: 'Instauração: fase inicial, em que o processo é formalmente aberto, de ofício ou a pedido do interessado.' },
          { id: 'B', texto: 'Instrução: fase destinada a averiguar e comprovar os dados necessários à tomada de decisão.' },
          { id: 'C', texto: 'Defesa: fase em que o interessado apresenta suas razões antes da decisão, em contraditório.' },
          { id: 'D', texto: 'Relatório: fase em que a autoridade competente expõe os fatos e as razões para a decisão.' },
          { id: 'E', texto: 'Homologação judicial: fase em que o Judiciário chancela a decisão administrativa antes de sua eficácia.' }
        ],
        gabarito: 'E',
        explicacao: 'A alternativa E é a INCORRETA. Homologação judicial NÃO é fase do processo administrativo — o rito é instauração, instrução, defesa, relatório e decisão, sem necessidade de chancela judicial prévia.',
        explicacaoDetalhada: {
          correta: 'A alternativa E está INCORRETA e, por isso, é a resposta. A HOMOLOGAÇÃO JUDICIAL NÃO INTEGRA o processo administrativo. O rito da Lei 9.784/1999 é: INSTAURAÇÃO → INSTRUÇÃO → DEFESA → RELATÓRIO → DECISÃO (além dos recursos). A decisão administrativa tem eficácia própria, independentemente de chancela judicial. O Judiciário só atua se provocado, para controle de legalidade.',
          incorretas: {
            A: 'A alternativa está correta e não deve ser marcada. Instauração é a fase inicial (art. 5º). Seria INCORRETA se dissesse que a instauração é a fase de decisão.',
            B: 'A alternativa está correta e não deve ser marcada. Instrução é a fase de averiguação e comprovação (art. 29 e ss.). Seria INCORRETA se dissesse que a instrução é a fase final.',
            C: 'A alternativa está correta e não deve ser marcada. Defesa é a fase de contraditório antes da decisão (art. 2º, caput, e art. 3º). Seria INCORRETA se dissesse que a defesa ocorre após a decisão.',
            D: 'A alternativa está correta e não deve ser marcada. Relatório é a fase em que a autoridade expõe os fatos (art. 47). Seria INCORRETA se dissesse que o relatório é a decisão — o relatório prepara a decisão, mas não é a decisão.'
          },
          conceitoCobrado: 'Fases do processo administrativo — instauração, instrução, defesa, relatório e decisão',
          pegadinha: 'A alternativa E introduz uma fase inexistente (homologação judicial) — recurso comum de quem confunde processo administrativo com processo judicial. O processo administrativo tem autonomia e não depende de chancela do Judiciário para produzir efeitos.',
          comoApareceEmConcurso: 'Bancas costumam listar as fases corretamente e introduzir uma inventada (homologação judicial, despacho saneador) em uma única alternativa. É o padrão do formato EXCETO.',
          exemploInedito: {
            contexto: 'Um servidor instaura PAD para apurar falta. O processo passa por instauração (portaria), instrução (oitiva de testemunhas, juntada de documentos), defesa (manifestação do acusado), relatório (análise da comissão) e decisão (pela autoridade competente). Em nenhum momento há homologação judicial.',
            aplicacao: 'A decisão administrativa produz efeitos por si só. O servidor punido pode recorrer administrativamente e, depois, judicialmente — mas o processo administrativo não precisa de chancela judicial prévia. A homologação judicial é invenção da alternativa E.',
            desafio: 'Por que o processo administrativo não precisa de homologação judicial prévia? Reflita sobre a presunção de legitimidade dos atos administrativos e o princípio da separação de Poderes.'
          }
        },
        tags: ['processo administrativo', 'fases', 'Lei 9.784/99']
      },

      /* ---------- Item 2 — C/E — Dificuldade 1 ---------- */
      {
        id: 'D-DA-25-02',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 1,
        subtopico: 'Princípios do processo administrativo (art. 2º)',
        pergunta: 'A Lei 9.784/99 estabelece que o processo administrativo deve observar, entre outros, os princípios da legalidade, impessoalidade, moralidade, publicidade e eficiência — não incluindo os princípios da ampla defesa e do contraditório, que são exclusivos do processo judicial.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. O art. 2º da Lei 9.784/99 inclui expressamente a ampla defesa e o contraditório entre os princípios do processo administrativo — não são exclusivos do processo judicial.',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. O art. 2º, caput, da Lei 9.784/1999 lista expressamente, entre os princípios do processo administrativo: legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, AMPLA DEFESA, CONTRADITÓRIO, segurança jurídica, interesse público e eficiência. A ampla defesa e o contraditório são princípios do processo administrativo — não exclusivos do processo judicial.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela exclui a ampla defesa e o contraditório do rol de princípios do processo administrativo — o que contraria o art. 2º da Lei 9.784/99 e o art. 5º, LV, da CF/88. Esses princípios são aplicáveis a qualquer processo (judicial ou administrativo), como garantia constitucional.'
          },
          conceitoCobrado: 'Princípios do processo administrativo (art. 2º da Lei 9.784/99) — incluindo ampla defesa e contraditório',
          pegadinha: 'A afirmação cria uma falsa exclusividade: "ampla defesa e contraditório são exclusivos do processo judicial". São garantias constitucionais (art. 5º, LV, CF) aplicáveis também ao processo administrativo. A confusão é comum em quem pensa que só o Judiciário garante defesa.',
          comoApareceEmConcurso: 'Bancas usam essa confusão para testar se o candidato sabe que o processo administrativo também tem contraditório e ampla defesa. A afirmação costuma ser FALSA.',
          exemploInedito: {
            contexto: 'Um servidor é acusado em PAD. Ele tem direito a ser ouvido (ampla defesa), a produzir provas, a contraditar as testemunhas e a recorrer (contraditório). Todas essas garantias são do processo administrativo — não precisa ir ao Judiciário para tê-las.',
            aplicacao: 'O art. 2º da Lei 9.784/99 é expresso: ampla defesa e contraditório integram os princípios do processo administrativo. A afirmação da questão erra ao dizer que são exclusivos do processo judicial. O servidor tem essas garantias já na esfera administrativa.',
            desafio: 'Qual a diferença entre contraditório e ampla defesa? Cite um exemplo de cada no processo administrativo.'
          }
        },
        tags: ['processo administrativo', 'princípios', 'ampla defesa', 'contraditório']
      },

      /* ---------- Item 3 — Formato 1 (V/F sequência) — Dificuldade 2 ---------- */
      {
        id: 'D-DA-25-03',
        tipo: 'multipla_escolha',
        formato: 'vf_sequencia',
        dificuldade: 2,
        subtopico: 'Instauração, forma dos atos, desistência e consulta pública',
        pergunta: 'Sobre o processo administrativo da Lei 9.784/1999, analise as afirmações e assinale a sequência correta:\n\nI. O processo administrativo pode iniciar-se de ofício ou a pedido de interessado.\nII. Quando a matéria do processo envolver assunto de interesse geral, o órgão competente poderá abrir período de consulta pública para manifestação de terceiros, antes da decisão.\nIII. O interessado pode desistir do pedido a qualquer tempo, mas a desistência não impede a continuidade do processo de ofício, se o interesse público exigir.\nIV. Os atos do processo devem ser praticados sempre na forma escrita, vedada qualquer outra forma.',
        alternativas: [
          { id: 'A', texto: 'V – V – V – F.' },
          { id: 'B', texto: 'V – F – V – V.' },
          { id: 'C', texto: 'F – V – V – V.' },
          { id: 'D', texto: 'V – V – F – V.' },
          { id: 'E', texto: 'F – F – V – V.' }
        ],
        gabarito: 'A',
        explicacao: 'A alternativa A está correta: I (V), II (V), III (V), IV (F). A IV é falsa: os atos do processo não dependem de forma determinada, senão quando a lei expressamente a exigir (art. 22).',
        explicacaoDetalhada: {
          correta: 'A alternativa A está correta: I (V), II (V), III (V), IV (F). A I está certa: o processo pode iniciar-se de ofício ou a pedido (art. 5º). A II está certa: a consulta pública é possível em matéria de interesse geral (art. 31). A III está certa: a desistência não impede a continuidade de ofício, se o interesse público exigir (art. 51, §2º). A IV está FALSA: os atos do processo NÃO dependem de forma determinada, senão quando a lei expressamente a exigir (art. 22).',
          incorretas: {
            B: 'A alternativa erra ao marcar a II como falsa. A consulta pública É possível em matéria de interesse geral (art. 31). Também erra ao marcar a IV como verdadeira (ela é falsa).',
            C: 'A alternativa erra ao marcar a I como falsa. O processo pode iniciar-se de ofício ou a pedido (art. 5º). Também erra ao marcar a IV como verdadeira.',
            D: 'A alternativa erra ao marcar a III como falsa. A desistência não impede a continuidade de ofício (art. 51, §2º). Também erra ao marcar a IV como verdadeira.',
            E: 'A alternativa erra ao marcar a I e a II como falsas. Ambas são verdadeiras. A única falsa é a IV.'
          },
          conceitoCobrado: 'Instauração, consulta pública, desistência e forma dos atos no processo administrativo',
          pegadinha: 'A afirmação IV usa "sempre" e "vedada qualquer outra forma" — dois absolutos que denunciam o erro. O art. 22 da Lei 9.784/99 adota o princípio da liberdade de forma: os atos não dependem de forma determinada, senão quando a lei exigir. A forma escrita não é absoluta.',
          comoApareceEmConcurso: 'O formato V/F sequência é usado para testar 4 conceitos do processo administrativo em uma única questão. A banca costuma manter 3 afirmações verdadeiras e 1 falsa — geralmente a que absolutiza a forma.',
          exemploInedito: {
            contexto: 'Um requerimento pode ser protocolado por escrito, mas também por meio eletrônico (quando admitido). Uma manifestação em audiência pública pode ser oral. A lei não exige forma única — admite a que for adequada, desde que respeitados os direitos do interessado.',
            aplicacao: 'A afirmação IV, ao dizer "sempre na forma escrita, vedada qualquer outra", contraria o art. 22. O processo administrativo adota a liberdade de forma (com exceções legais). Se a lei exigir forma específica (ex.: recurso por escrito), ela prevalece — mas não há regra geral de escrita obrigatória.',
            desafio: 'Por que a Lei 9.784/99 adotou a liberdade de forma, em vez de exigir forma escrita para todos os atos? Reflita sobre a finalidade do processo administrativo (proteção do administrado e melhor cumprimento dos fins da Administração).'
          }
        },
        tags: ['processo administrativo', 'instauração', 'consulta pública', 'desistência', 'forma', 'vf sequência']
      },

      /* ---------- Item 4 — C/E — Dificuldade 2 ---------- */
      {
        id: 'D-DA-25-04',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 2,
        subtopico: 'Dever de decidir e motivação',
        pergunta: 'A Administração tem o dever de decidir expressamente sobre os pedidos que lhe são dirigidos, e a motivação é, em regra, obrigatória — podendo consistir em declaração de concordância com pareceres anteriores, que, nesse caso, integram o ato.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'A afirmação é CERTA. Art. 48 (dever de decidir) e art. 50, §1º (motivação por concordância com pareceres, que integram o ato).',
        explicacaoDetalhada: {
          correta: 'A afirmação é CERTA. O art. 48 da Lei 9.784/99 impõe à Administração o DEVER DE EXPLICITAMENTE EMITIR DECISÃO nos processos administrativos e sobre solicitações ou reclamações. O art. 50 exige MOTIVAÇÃO dos atos, e o §1º admite que a motivação consista em DECLARAÇÃO DE CONCORDÂNCIA com fundamentos de anteriores pareceres, informações, decisões ou propostas — que, nesse caso, passam a integrar o ato.',
          incorretas: {
            F: 'A afirmação não é falsa. Ela reproduz corretamente os arts. 48 e 50, §1º, da Lei 9.784/99. O dever de decidir é expresso e a motivação pode ser por concordância com pareceres anteriores (que integram o ato). Tratar como falsa indicaria desconhecimento da norma.'
          },
          conceitoCobrado: 'Dever de decidir (art. 48) e motivação por concordância com pareceres (art. 50, §1º)',
          pegadinha: 'A afirmação está correta. A armadilha (não presente) seria dizer que a motivação por concordância dispensa a fundamentação — não dispensa; a concordância deve ser explícita e os pareceres integram o ato. Outra armadilha seria negar o dever de decidir, admitindo o "silêncio administrativo" como resposta válida em qualquer caso.',
          comoApareceEmConcurso: 'Bancas usam essa associação em C/E para testar se o candidato conhece o dever de decidir e a motivação. A afirmação costuma ser verdadeira, mas pode vir com "a motivação por concordância dispensa os pareceres" (errado) para torná-la falsa.',
          exemploInedito: {
            contexto: 'Um cidadão requer aposentadoria. A Administração tem o dever de decidir expressamente (deferindo ou indeferindo), não podendo "não responder". Se indefere, deve motivar — podendo fazê-lo por concordância com parecer jurídico anterior, que passa a integrar o ato.',
            aplicacao: 'O dever de decidir (art. 48) e a motivação por concordância (art. 50, §1º) são complementares: a Administração não pode silenciar, e a decisão deve ser fundamentada. A concordância com parecer é forma válida de motivação — mas o parecer precisa existir e ser congruente com a decisão.',
            desafio: 'Por que o ordenamento admite a motivação por concordância com pareceres anteriores? Que vantagens e riscos essa prática traz para a transparência e a fundamentação das decisões?'
          }
        },
        tags: ['processo administrativo', 'dever de decidir', 'motivação', 'art. 48', 'art. 50']
      },

      /* ---------- Item 5 — Situação — Dificuldade 2 ---------- */
      {
        id: 'D-DA-25-05',
        tipo: 'situacao',
        formato: 'multipla_escolha',
        dificuldade: 2,
        subtopico: 'Impedimento e suspeição em cenário',
        pergunta: 'Um servidor é designado para analisar requerimento de benefício formulado por um amigo íntimo de longa data. Ao perceber o vínculo, o servidor deve:',
        alternativas: [
          { id: 'A', texto: 'continuar a análise normalmente, pois a amizade íntima não é hipótese legal de afastamento do processo.' },
          { id: 'B', texto: 'declarar-se SUSPEITO e ser afastado do processo, sob pena de nulidade da decisão; a amizade íntima é hipótese de suspeição (art. 20 da Lei 9.784/99).' },
          { id: 'C', texto: 'declarar-se IMPEDIDO, pois a amizade íntima é hipótese de impedimento (art. 18), não de suspeição.' },
          { id: 'D', texto: 'continuar a análise, mas comunicar o fato ao superior hierárquico para que este decida ao final.' },
          { id: 'E', texto: 'pedir transferência para outro órgão, pois a situação é incompatível com o serviço público.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B está correta. A amizade íntima é hipótese de SUSPEIÇÃO (art. 20 da Lei 9.784/99). O servidor deve declarar-se suspeito e ser afastado, sob pena de nulidade da decisão.',
        explicacaoDetalhada: {
          correta: 'A alternativa B está correta. A AMIZADE ÍNTIMA é hipótese de SUSPEIÇÃO (art. 20 da Lei 9.784/99): "Pode ser arguida a suspeição de autoridade ou servidor que tenha amizade íntima ou inimizade notória com algum dos interessados ou com os respectivos cônjuges, companheiros, parentes e afins até o terceiro grau." O servidor deve declarar-se suspeito, afastar-se do processo e ser substituído — sob pena de nulidade da decisão.',
          incorretas: {
            A: 'A alternativa erra ao dizer que a amizade íntima não é hipótese legal. O art. 20 é expresso: amizade íntima é causa de suspeição. Continuar a análise viola a impessoalidade e compromete a validade do ato.',
            C: 'A alternativa erra ao classificar a amizade íntima como IMPEDIMENTO. O impedimento (art. 18) trata de vínculos OBJETIVOS (interesse direto, participação como perito/testemunha, litígio com o interessado). A amizade íntima é vínculo SUBJETIVO — suspeição, não impedimento.',
            D: 'A alternativa erra ao manter o servidor na análise. A comunicação ao superior não supre o vício — o servidor deve se afastar. A suspeição gera afastamento, não mera comunicação.',
            E: 'A alternativa erra ao propor transferência para outro órgão — solução desproporcional e inexistente na lei. O correto é o afastamento do PROCESSO, não do órgão. O servidor pode continuar atuando em outros processos.'
          },
          conceitoCobrado: 'Distinção entre impedimento (art. 18 — vínculos objetivos) e suspeição (art. 20 — vínculos subjetivos)',
          pegadinha: 'A banca explora a confusão entre impedimento e suspeição. A amizade íntima é SUSPEIÇÃO (vínculo subjetivo), não impedimento (vínculo objetivo). A consequência é a mesma (afastamento), mas a classificação é distinta. Quem decora "amizade = impedimento" erra.',
          comoApareceEmConcurso: 'Cenários com amizade íntima, parentesco ou litígio são clássicos. A banca costuma apresentar um vínculo e testar se o candidato classifica corretamente (impedimento x suspeição). A dica: objetivo = impedimento; subjetivo = suspeição.',
          exemploInedito: {
            contexto: '(a) Servidor analisa requerimento de seu irmão (parentesco — impedimento, art. 18, II). (b) Servidor analisa requerimento de amigo íntimo (amizade — suspeição, art. 20). (c) Servidor litiga judicialmente contra o requerente (litígio — impedimento, art. 18, III).',
            aplicacao: 'O parentesco, a participação como perito/testemunha e o litígio são vínculos OBJETIVOS — impedimento. A amizade íntima e a inimizade notória são vínculos SUBJETIVOS — suspeição. Em todos os casos, o servidor deve se afastar, sob pena de nulidade.',
            desafio: 'Por que a lei separa impedimento (objetivo) e suspeição (subjetivo), se em ambos o servidor se afasta? Reflita sobre as consequências processuais e a distinção de regimes.'
          }
        },
        tags: ['processo administrativo', 'impedimento', 'suspeição', 'situação aplicada']
      },

      /* ---------- Item 6 — Formato 2 (I, II, III) — Dificuldade 3 ---------- */
      {
        id: 'D-DA-25-06',
        tipo: 'multipla_escolha',
        formato: 'afirmacoes_romanas',
        dificuldade: 3,
        subtopico: 'Recursos administrativos e prazos',
        pergunta: 'Sobre os recursos administrativos na Lei 9.784/1999, analise as afirmações a seguir:\n\nI. O recurso administrativo, salvo disposição legal específica, deve ser interposto no prazo de 10 dias, contados da ciência ou divulgação oficial da decisão recorrida.\nII. O recurso pode ser interposto independentemente de caução, salvo disposição legal específica.\nIII. A Administração deve decidir o recurso em até 30 dias, salvo prorrogação por igual período expressamente motivada.\n\nEstão corretas:',
        alternativas: [
          { id: 'A', texto: 'Apenas I.' },
          { id: 'B', texto: 'Apenas II.' },
          { id: 'C', texto: 'Apenas I e II.' },
          { id: 'D', texto: 'I, II e III.' },
          { id: 'E', texto: 'Apenas II e III.' }
        ],
        gabarito: 'D',
        explicacao: 'A alternativa D está correta. I (art. 59), II (art. 56, §2º) e III (art. 49 + art. 59, §1º) são todas verdadeiras.',
        explicacaoDetalhada: {
          correta: 'A alternativa D está correta. A I está certa: prazo de 10 dias para interpor recurso (art. 59). A II está certa: o recurso é interposto independentemente de caução, salvo disposição legal específica (art. 56, §2º). A III está certa: a Administração deve decidir em até 30 dias, salvo prorrogação por igual período motivada (art. 49, aplicável aos recursos por força do art. 59, §1º).',
          incorretas: {
            A: 'A afirmação I está correta, mas a II e a III também. Excluir as duas é erro duplo. A dispensa de caução e o prazo de 30 dias para decidir são regras expressas.',
            B: 'A afirmação II está correta, mas a I e a III também. Excluir as duas é erro duplo. O prazo de 10 dias para interpor e o de 30 dias para decidir são regras da Lei 9.784/99.',
            C: 'A afirmação III está correta — a Administração deve decidir em 30 dias, salvo prorrogação motivada. Excluí-la é o erro central desta alternativa.',
            E: 'A afirmação I está correta — prazo de 10 dias para interpor. Excluí-la é o erro central desta alternativa.'
          },
          conceitoCobrado: 'Recursos administrativos — prazo de interposição (10 dias), dispensa de caução e prazo de decisão (30 dias)',
          pegadinha: 'A banca testa três regras numéricas e procedimentais: 10 dias (interposição), sem caução (regra), 30 dias (decisão). O candidato precisa conhecer cada uma. A confusão mais comum é entre o prazo de interposição (10) e o de decisão (30) — ou entre a dispensa de caução (regra) e a exigência de caução (exceção).',
          comoApareceEmConcurso: 'Bancas usam as três afirmações para testar o domínio dos prazos e do regime de caução. A estratégia é colocar as três verdadeiras (como aqui) ou incluir uma falsa em ponto-chave — geralmente a que troca 10 por 30 dias.',
          exemploInedito: {
            contexto: 'Servidor tem decisão desfavorável publicada em 1º de março. Pode recorrer em 10 dias (até 11 de março, se o dia 10 cair em fim de semana). O recurso não exige caução. A Administração tem 30 dias para decidir, prorrogáveis por mais 30 com motivação.',
            aplicacao: 'Os três prazos/regras se aplicam: 10 dias para interpor, sem caução, 30 dias para decidir. Se o servidor perder o prazo de 10 dias, o recurso é intempestivo — não é conhecido. Se a Administração não decidir em 30 dias, o silêncio pode gerar consequências (dependendo do caso).',
            desafio: 'Por que a lei exige que o recurso seja interposto em prazo curto (10 dias), mas dá à Administração prazo mais longo para decidir (30 dias)? Reflita sobre a lógica processual.'
          }
        },
        tags: ['processo administrativo', 'recursos', 'prazos', 'caução', 'afirmações romanas']
      },

      /* ---------- Item 7 — Autoavaliação ---------- */
      {
        id: 'D-DA-25-07',
        tipo: 'autoavaliacao',
        subtopico: 'Processo administrativo — visão integrada',
        pergunta: 'Sem consultar, você consegue distinguir PODC de processo administrativo da Lei 9.784/99, listar as fases do processo, diferenciar impedimento de suspeição, conhecer os prazos recursais e explicar o dever de decidir motivadamente?',
        resposta: 'PODC x PROCESSO ADMINISTRATIVO: ciclo de funções gerenciais (Teoria Geral) x rito jurídico de decisão (Lei 9.784/99). FASES: instauração, instrução, defesa, relatório e decisão (além dos recursos). Não há "homologação judicial" como fase. IMPEDIMENTO x SUSPEIÇÃO: vínculos objetivos (art. 18 — interesse direto, participação como perito/testemunha, litígio) x vínculos subjetivos (art. 20 — amizade íntima, inimizade notória). Em ambos, o servidor se afasta, sob pena de nulidade. RECURSOS: prazo de 10 dias para interpor (art. 59), independentemente de caução (art. 56, §2º), com decisão em 30 dias, prorrogável por igual período motivado (art. 49). DEVER DE DECIDIR: art. 48 — a Administração deve decidir expressamente. MOTIVAÇÃO: art. 50 — em regra obrigatória, podendo consistir em concordância com pareceres anteriores, que integram o ato. PRINCÍPIOS (art. 2º): legalidade, finalidade, motivação, razoabilidade, proporcionalidade, moralidade, ampla defesa, contraditório, segurança jurídica, interesse público e eficiência.'
      }

    ]
  },

  /* ============================================================
     REV-28 — Revisão integrada e domínio por questões
     Módulo de MÉTODO — como estudar, revisar e classificar erros
  ============================================================ */
  'REV-28': {
    id: 'D-REV-28',
    moduloId: 'REV-28',
    itens: [

      /* ---------- Item 1 — Formato 6 (EXCETO) — Dificuldade 1 ---------- */
      {
        id: 'D-REV-28-01',
        tipo: 'multipla_escolha',
        formato: 'excecao',
        dificuldade: 1,
        subtopico: 'Classificação de erros no banco de erros',
        pergunta: 'Sobre a classificação de erros no banco de erros, assinale a alternativa que NÃO corresponde a uma categoria típica de classificação:',
        alternativas: [
          { id: 'A', texto: 'Desconhecimento: o estudante não conhecia o conteúdo cobrado.' },
          { id: 'B', texto: 'Confusão conceitual: o estudante confundiu institutos próximos.' },
          { id: 'C', texto: 'Interpretação: o estudante não compreendeu o enunciado da questão.' },
          { id: 'D', texto: 'Erro por falta de tempo: o estudante não conseguiu terminar a prova.' },
          { id: 'E', texto: 'Pegadinha: o estudante foi induzido por conceitos verdadeiros apresentados em relação incorreta.' }
        ],
        gabarito: 'D',
        explicacao: 'A alternativa D é a INCORRETA. "Erro por falta de tempo" NÃO é categoria típica do banco de erros. As categorias usuais são: desconhecimento, confusão, interpretação, desatenção, legislação, aplicação e pegadinha.',
        explicacaoDetalhada: {
          correta: 'A alternativa D está INCORRETA e, por isso, é a resposta. "Erro por falta de tempo" NÃO É categoria típica de classificação no banco de erros. As categorias usuais (app e doutrina de método) são: DESCONHECIMENTO (não sabia o conteúdo), CONFUSÃO (confundiu institutos), INTERPRETAÇÃO (não entendeu o enunciado), DESATENÇÃO (ignorou palavra/condição/exceção), LEGISLAÇÃO (errou artigo/prazo/competência), APLICAÇÃO (sabia a teoria, mas não aplicou) e PEGADINHA (foi induzido). "Falta de tempo" é problema de gestão de prova — não é categoria de erro de conteúdo.',
          incorretas: {
            A: 'A alternativa está correta e não deve ser marcada. Desconhecimento é categoria típica — o estudante não sabia o conteúdo.',
            B: 'A alternativa está correta e não deve ser marcada. Confusão conceitual é categoria típica — o estudante trocou institutos próximos.',
            C: 'A alternativa está correta e não deve ser marcada. Interpretação é categoria típica — o estudante não compreendeu o enunciado.',
            E: 'A alternativa está correta e não deve ser marcada. Pegadinha é categoria típica — o estudante foi induzido por conceitos verdadeiros em relação incorreta.'
          },
          conceitoCobrado: 'Categorias de erro no banco de erros e sua função pedagógica',
          pegadinha: 'A alternativa D introduz um problema real (falta de tempo), mas que NÃO É CATEGORIA de erro de conteúdo — é problema de gestão de prova. A confusão entre "problema real" e "categoria de erro" é o erro central.',
          comoApareceEmConcurso: 'Em provas sobre método de estudo, a banca introduz categorias inventadas ou mal classificadas para testar se o candidato internalizou a taxonomia. A distinção entre erro de conteúdo e erro de gestão é o ponto.',
          exemploInedito: {
            contexto: 'Um estudante erra 10 questões em um simulado. Ao analisar os erros: 5 foram por desconhecimento (não sabia o conteúdo); 3 por confusão (sabia, mas trocou institutos); 1 por interpretação (leu errado o enunciado); 1 por desatenção (ignorou um "EXCETO"). Nenhum foi por falta de tempo.',
            aplicacao: 'Cada erro recebe uma categoria adequada. Se ele classificasse algum como "falta de tempo", estaria fora da taxonomia — o correto seria "desatenção" (se leu rápido) ou "interpretação" (se não entendeu). A classificação correta orienta a estratégia de correção: desconhecimento pede releitura; confusão pede comparação; interpretação pede treino de leitura.',
            desafio: 'Por que a classificação do erro é útil? Como a categoria do erro orienta uma estratégia diferente de correção?'
          }
        },
        tags: ['revisão', 'banco de erros', 'classificação']
      },

      /* ---------- Item 2 — C/E — Dificuldade 1 ---------- */
      {
        id: 'D-REV-28-02',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 1,
        subtopico: 'Revisão ativa x passiva; ilusão de fluência',
        pergunta: 'A releitura passiva do material, sem recuperação ativa (tentar lembrar antes de consultar), tende a gerar "ilusão de fluência" — a sensação de saber, sem real domínio. A revisão ativa (testar-se, explicar com as próprias palavras) é mais eficaz.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'A afirmação é CERTA. Revisão passiva gera ilusão de fluência; revisão ativa (recuperação, teste) é mais eficaz para retenção de longo prazo.',
        explicacaoDetalhada: {
          correta: 'A afirmação é CERTA. A ILUSÃO DE FLUÊNCIA ocorre quando o estudante relê o material e sente que "entendeu tudo" — mas, ao tentar lembrar sem consultar, não consegue. A REVISÃO ATIVA (recuperação ativa, teste, explicação com as próprias palavras) força o cérebro a reconstruir o conteúdo, o que fortalece a memória de longo prazo. Estudos de ciência da aprendizagem mostram que a recuperação ativa é mais eficaz que a releitura passiva.',
          incorretas: {
            F: 'A afirmação não é falsa. Ela descreve corretamente o fenômeno da ilusão de fluência e a superioridade da revisão ativa. Tratar como falsa indicaria desconhecimento da ciência da aprendizagem — ou confusão com a ideia ultrapassada de que "reler é estudar".'
          },
          conceitoCobrado: 'Revisão ativa x passiva; ilusão de fluência; eficácia da recuperação',
          pegadinha: 'A afirmação está correta. A armadilha (não presente) seria dizer que "reler é mais eficaz que se testar" — o que contraria a evidência. A distinção entre a SENSAÇÃO de saber (fluência) e o REAL domínio (recuperação) é essencial.',
          comoApareceEmConcurso: 'Bancas de concursos mais modernos têm cobrado ciência da aprendizagem. A afirmação costuma ser verdadeira, mas pode vir com "a releitura passiva é mais eficaz" para torná-la falsa.',
          exemploInedito: {
            contexto: 'Um estudante lê três vezes o capítulo sobre "atos administrativos". Sente que entendeu tudo. Ao fazer questões, erra metade. Em outro dia, ele tenta responder às questões antes de reler, erra, consulta as explicações e, no dia seguinte, acerta 80%.',
            aplicacao: 'A primeira situação gera ILUSÃO DE FLUÊNCIA: a releitura passiva dá a sensação de domínio, mas não sustenta a recuperação. A segunda é REVISÃO ATIVA: o erro forçou a reconstrução do conteúdo, gerando aprendizado real. O teste (recuperação) é mais eficaz que a releitura.',
            desafio: 'Como você pode aplicar a revisão ativa no seu estudo diário? Dê dois exemplos concretos (ex.: flashcards, questões, explicar em voz alta).'
          }
        },
        tags: ['revisão', 'revisão ativa', 'ilusão de fluência']
      },

      /* ---------- Item 3 — Formato 1 (V/F sequência) — Dificuldade 2 ---------- */
      {
        id: 'D-REV-28-03',
        tipo: 'multipla_escolha',
        formato: 'vf_sequencia',
        dificuldade: 2,
        subtopico: 'Ciclo de estudo e revisão espaçada',
        pergunta: 'Sobre o ciclo de estudo e a revisão espaçada, analise as afirmações e assinale a sequência correta:\n\nI. A revisão por ciclos intercala teoria, questões, análise de erros, revisão espaçada e novas questões — em rodízio contínuo.\nII. A revisão espaçada concentra todas as revisões no mesmo dia, imediatamente após o estudo, para "fixar" o conteúdo.\nIII. Os intervalos de revisão devem crescer progressivamente (ex.: 1 dia, 7 dias, 30 dias), conforme o estudante demonstra segurança.\nIV. O banco de erros deve ser revisado periodicamente e alimenta novas sessões de questões, que confirmam se o erro foi superado.',
        alternativas: [
          { id: 'A', texto: 'V – V – V – F.' },
          { id: 'B', texto: 'V – V – F – V.' },
          { id: 'C', texto: 'V – F – V – V.' },
          { id: 'D', texto: 'F – V – V – V.' },
          { id: 'E', texto: 'F – V – F – V.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C está correta: I (V), II (F), III (V), IV (V). A II é falsa: a revisão espaçada DISTRIBUI as revisões ao longo do tempo, não as concentra no mesmo dia.',
        explicacaoDetalhada: {
          correta: 'A alternativa C está correta: I (V), II (F), III (V), IV (V). A I está certa: a revisão por ciclos combina teoria, questões, análise de erros, revisão espaçada e novas questões. A II está FALSA: a revisão espaçada NÃO concentra as revisões no mesmo dia — ela as DISTRIBUI ao longo do tempo, com intervalos crescentes. A III está certa: os intervalos crescem progressivamente. A IV está certa: o banco de erros alimenta novas sessões, confirmando a superação.',
          incorretas: {
            A: 'A alternativa erra ao marcar a II como verdadeira. A revisão espaçada distribui as revisões ao longo do tempo — não as concentra. Concentrar tudo no mesmo dia é o oposto da revisão espaçada.',
            B: 'A alternativa erra ao marcar a II como verdadeira (concentrar no mesmo dia) e a III como falsa (ela é verdadeira — intervalos crescem). Erro duplo.',
            D: 'A alternativa erra ao marcar a I como falsa. A revisão por ciclos combina as cinco etapas — definição correta. Também erra ao marcar a II como verdadeira.',
            E: 'A alternativa erra ao marcar a I como falsa (ela é verdadeira) e a II como verdadeira (ela é falsa). Inversão dos dois primeiros itens.'
          },
          conceitoCobrado: 'Ciclo de estudo, revisão espaçada (intervalos crescentes) e banco de erros',
          pegadinha: 'A afirmação II descreve a revisão espaçada como "concentrar todas as revisões no mesmo dia" — o OPOSTO do que ela é. A revisão espaçada distribui as revisões ao longo do tempo, com intervalos crescentes (1, 7, 30 dias...). A confusão é comum em quem pensa que "revisar muito no mesmo dia" é eficaz.',
          comoApareceEmConcurso: 'O formato V/F sequência é usado para testar 4 conceitos de método em uma única questão. A banca costuma manter 3 afirmações verdadeiras e 1 falsa — geralmente a que descreve a revisão espaçada de forma errada.',
          exemploInedito: {
            contexto: 'Estudante estuda "atos administrativos" em 1º de março. Revisa em 2 de março (1 dia), 9 de março (7 dias), 8 de abril (30 dias), 7 de maio (60 dias). A cada revisão, resolve novas questões e verifica o banco de erros.',
            aplicacao: 'A distribuição das revisões ao longo do tempo (com intervalos crescentes) é a essência da revisão espaçada. Se ele concentrasse tudo no dia 1º, não haveria espaçamento — e a retenção seria pior. A afirmação II erra justamente por concentrar.',
            desafio: 'Por que a revisão espaçada é mais eficaz que a concentrada? Reflita sobre o funcionamento da memória e o "esquecimento produtivo".'
          }
        },
        tags: ['revisão', 'ciclo', 'revisão espaçada', 'banco de erros', 'vf sequência']
      },

      /* ---------- Item 4 — C/E — Dificuldade 2 ---------- */
      {
        id: 'D-REV-28-04',
        tipo: 'verdadeiro_falso',
        formato: 'certo_errado',
        dificuldade: 2,
        subtopico: 'Correção de erros — leitura passiva x novas questões',
        pergunta: 'A mera leitura da explicação de uma questão errada é suficiente para superar o erro; não é necessário revisar o conteúdo nem resolver novas questões sobre o mesmo tema.',
        alternativas: [
          { id: 'V', texto: 'Certo' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'A afirmação é FALSA. A leitura da explicação é o primeiro passo, mas não basta. É preciso revisar o conteúdo, resolver novas questões e verificar se o erro foi superado.',
        explicacaoDetalhada: {
          correta: 'A afirmação é FALSA. A LEITURA DA EXPLICAÇÃO é apenas o PRIMEIRO PASSO da correção. Para superar o erro, é preciso: (1) entender a causa (classificar o erro); (2) revisar o conteúdo relacionado; (3) resolver NOVAS questões sobre o mesmo tema; (4) verificar periodicamente se o erro foi realmente superado. A leitura passiva da explicação pode gerar a ILUSÃO DE FLUÊNCIA ("entendi a explicação, logo sei o conteúdo") — mas o domínio só se confirma com recuperação ativa.',
          incorretas: {
            V: 'A afirmação não é verdadeira. Ela reduz a correção do erro à leitura da explicação — o que é insuficiente. A leitura é ponto de partida, não de chegada. A superação do erro exige revisão do conteúdo e novas questões. Quem se limita a ler a explicação tende a reincidir no mesmo erro em questões futuras.'
          },
          conceitoCobrado: 'Correção de erros — superação exige mais que leitura passiva',
          pegadinha: 'A palavra "mera" e "suficiente" são os marcadores do erro. A leitura da explicação é necessária, mas não suficiente. A superação do erro exige revisão + novas questões + verificação periódica. A confusão entre "entender a explicação" e "dominar o conteúdo" é a armadilha.',
          comoApareceEmConcurso: 'Bancas de método usam essa distinção para testar se o candidato sabe que a correção do erro é processual. A afirmação "basta ler a explicação" é quase sempre FALSA.',
          exemploInedito: {
            contexto: 'Um estudante erra uma questão sobre "anulação x revogação". Lê a explicação, entende a diferença, mas não revisa o conteúdo nem resolve novas questões. Na semana seguinte, erra outra questão sobre o mesmo tema — porque a leitura da explicação não gerou domínio real.',
            aplicacao: 'A leitura da explicação foi apenas o primeiro passo. Faltou: (1) classificar o erro (confusão? desconhecimento?); (2) revisar o conteúdo (anulação e revogação); (3) resolver novas questões sobre o tema; (4) verificar se o erro foi superado. A leitura passiva não basta.',
            desafio: 'Que passos você deve seguir após ler a explicação de uma questão errada? Descreva um protocolo de correção de erros.'
          }
        },
        tags: ['revisão', 'correção de erros', 'banco de erros']
      },

      /* ---------- Item 5 — Situação — Dificuldade 2 ---------- */
      {
        id: 'D-REV-28-05',
        tipo: 'situacao',
        formato: 'multipla_escolha',
        dificuldade: 2,
        subtopico: 'Classificação de erro em cenário concreto',
        pergunta: 'Um estudante erra uma questão sobre "anulação x revogação". Ao reler a explicação, percebe que havia estudado o tema, mas confundiu os institutos — achou que a anulação era por mérito e a revogação por ilegalidade. A classificação mais adequada do erro e a estratégia correspondente são:',
        alternativas: [
          { id: 'A', texto: 'desconhecimento — reler do zero o capítulo inteiro sobre atos administrativos.' },
          { id: 'B', texto: 'confusão conceitual — comparar anulação e revogação, criar quadro comparativo e resolver novas questões sobre os dois institutos.' },
          { id: 'C', texto: 'interpretação — treinar leitura de enunciados e palavras-chave.' },
          { id: 'D', texto: 'desatenção — prestar mais atenção na prova e ler o enunciado duas vezes.' },
          { id: 'E', texto: 'pegadinha — evitar essa banca em específico, pois ela usa pegadinhas.' }
        ],
        gabarito: 'B',
        explicacao: 'A alternativa B está correta. O estudante havia estudado o tema, mas confundiu os institutos — erro de CONFUSÃO CONCEITUAL. A estratégia é comparação (quadro, novas questões).',
        explicacaoDetalhada: {
          correta: 'A alternativa B está correta. O estudante NÃO desconhecia o conteúdo — ele havia estudado, mas INVERTEU os institutos (achou que anulação era por mérito e revogação por ilegalidade). Isso é CONFUSÃO CONCEITUAL: o estudante confundiu dois institutos próximos. A estratégia adequada é a COMPARAÇÃO: criar quadro comparativo (anulação: ilegalidade, ex tunc, Administração/Judiciário; revogação: mérito, ex nunc, só Administração), resolver novas questões sobre os dois institutos e verificar se a confusão foi superada.',
          incorretas: {
            A: 'A alternativa classifica como desconhecimento, mas o estudante NÃO desconhecia o conteúdo — ele havia estudado. Reler do zero o capítulo inteiro seria ineficiente (desperdício de tempo). A estratégia correta é focar na confusão específica: comparação entre os dois institutos.',
            C: 'A alternativa classifica como interpretação, mas o estudante entendeu o enunciado — o problema foi a confusão entre os institutos, não a leitura do enunciado. Se fosse interpretação, a estratégia seria treinar leitura de palavras-chave (ex.: "EXCETO", "INCORRETA"), não comparar institutos.',
            D: 'A alternativa classifica como desatenção, mas o estudante leu o enunciado — apenas confundiu os institutos. Desatenção seria, por exemplo, ignorar um "EXCETO" ou uma exceção no texto. A estratégia de "ler duas vezes" não resolve a confusão conceitual.',
            E: 'A alternativa classifica como pegadinha, mas o problema não foi a banca — foi a confusão do estudante. Evitar a banca não resolve o problema (outras bancas também cobram anulação x revogação). A estratégia correta é superar a confusão, não evitar a banca.'
          },
          conceitoCobrado: 'Classificação de erro e escolha da estratégia de correção adequada',
          pegadinha: 'A banca descreve um erro de CONFUSÃO (o estudante havia estudado, mas trocou os institutos) e oferece alternativas que classificam erroneamente como desconhecimento, interpretação, desatenção ou pegadinha. A chave é: se o estudante HAVIA ESTUDADO mas TROCOU, é confusão — a estratégia é comparação, não releitura do zero.',
          comoApareceEmConcurso: 'Cenários de classificação de erro são clássicos em provas de método. A banca costuma descrever a causa do erro (desconhecimento, confusão, interpretação, desatenção) e testar se o candidato escolhe a classificação e a estratégia corretas.',
          exemploInedito: {
            contexto: 'Estudante erra questão sobre "poder hierárquico x poder disciplinar". Havia estudado, mas trocou: achou que o hierárquico pune e o disciplinar delega. A classificação é CONFUSÃO — a estratégia é comparar os dois poderes (hierárquico: ordens, fiscalização, delegação, avocação; disciplinar: apuração e punição) e resolver novas questões.',
            aplicacao: 'O mesmo raciocínio: se o estudante havia estudado mas trocou os institutos, é confusão. A estratégia é comparação. Se ele não soubesse nada, seria desconhecimento (releitura). Se tivesse lido errado o enunciado, seria interpretação. A classificação correta orienta a estratégia eficiente.',
            desafio: 'Pense em um erro recente que você cometeu em questões. Como você classificaria? Que estratégia adotaria?'
          }
        },
        tags: ['revisão', 'classificação de erro', 'estratégia', 'situação aplicada']
      },

      /* ---------- Item 6 — Formato 2 (I, II, III) — Dificuldade 3 ---------- */
      {
        id: 'D-REV-28-06',
        tipo: 'multipla_escolha',
        formato: 'afirmacoes_romanas',
        dificuldade: 3,
        subtopico: 'Revisão por ciclos e integração de conteúdos',
        pergunta: 'Sobre a revisão por ciclos e a integração de conteúdos, analise as afirmações a seguir:\n\nI. A revisão por ciclos combina teoria, questões, análise de erros, revisão espaçada e novas questões — em rodízio contínuo, não linear.\nII. A revisão em bloco (estudar um único conteúdo até dominar, antes de passar para o próximo) é sempre superior à revisão intercalada.\nIII. Integrar conteúdos de módulos diferentes ajuda a resolver questões complexas de concurso, que frequentemente combinam áreas (ex.: Controle do PODC + Controle da Administração Pública).\n\nEstão corretas:',
        alternativas: [
          { id: 'A', texto: 'Apenas I.' },
          { id: 'B', texto: 'Apenas II.' },
          { id: 'C', texto: 'Apenas I e III.' },
          { id: 'D', texto: 'Apenas II e III.' },
          { id: 'E', texto: 'I, II e III.' }
        ],
        gabarito: 'C',
        explicacao: 'A alternativa C está correta. I e III são verdadeiras; II é falsa (a revisão em bloco NÃO é sempre superior — a intercalada tende a ser mais eficaz para retenção).',
        explicacaoDetalhada: {
          correta: 'A alternativa C está correta. A I está certa: a revisão por ciclos combina as cinco etapas em rodízio contínuo. A III está certa: a integração de conteúdos de módulos diferentes ajuda em questões complexas. A II está INCORRETA: a revisão em bloco NÃO é sempre superior — a literatura de aprendizagem mostra que a INTERCALAÇÃO (interleaving) tende a ser mais eficaz para retenção de longo prazo, mesmo que pareça "mais difícil" no momento.',
          incorretas: {
            A: 'A afirmação I está correta, mas a III também. A integração de conteúdos é essencial em concursos que combinam áreas. Excluir a III é negar a importância da integração.',
            B: 'A afirmação II está incorreta — a revisão em bloco não é sempre superior. Incluí-la é o erro central. As afirmações I e III são as corretas.',
            D: 'A afirmação II está incorreta — não pode ser incluída. As corretas são I e III.',
            E: 'Não é possível aceitar as três. A II é falsa: a revisão em bloco não é sempre superior; a intercalada tende a ser mais eficaz.'
          },
          conceitoCobrado: 'Revisão por ciclos, intercalação x bloco e integração de conteúdos',
          pegadinha: 'A afirmação II usa "sempre superior" — um absoluto que denuncia o erro. A revisão em bloco pode dar sensação de domínio rápido, mas a intercalação fortalece a retenção. A palavra "sempre" em afirmações de método é quase sempre sinal de erro.',
          comoApareceEmConcurso: 'Bancas de método usam essa distinção para testar se o candidato conhece a ciência da aprendizagem. A afirmação "bloco é sempre superior" é quase sempre FALSA — a intercalação é mais eficaz para retenção.',
          exemploInedito: {
            contexto: 'Estudante A: estuda "atos administrativos" durante uma semana inteira, sem intercalar. Estudante B: estuda "atos" na segunda, "licitação" na terça, "controle" na quarta, e revisa "atos" na quinta, intercalando. Ao final do mês, B tem melhor retenção de atos do que A — porque a intercalação força a recuperação em contextos variados.',
            aplicacao: 'A intercalação (alternar conteúdos) parece "mais difícil" no momento, mas fortalece a memória de longo prazo. A revisão em bloco (um conteúdo por vez, até dominar) pode dar sensação de progresso rápido, mas a retenção é menor. A afirmação II erra ao dizer que o bloco é "sempre superior".',
            desafio: 'Por que a intercalação parece mais difícil, mas é mais eficaz? Reflita sobre o "esforço desejável" na aprendizagem.'
          }
        },
        tags: ['revisão', 'ciclo', 'intercalação', 'integração', 'afirmações romanas']
      },

      /* ---------- Item 7 — Autoavaliação ---------- */
      {
        id: 'D-REV-28-07',
        tipo: 'autoavaliacao',
        subtopico: 'Método de estudo e revisão — visão integrada',
        pergunta: 'Sem consultar, você consegue explicar o ciclo de estudo (teoria → questões → erros → revisão → novas questões), diferenciar revisão ativa de passiva, classificar erros (desconhecimento, confusão, interpretação, desatenção, pegadinha) e escolher a estratégia de correção adequada para cada tipo?',
        resposta: 'CICLO: teoria → questões → análise de erros → revisão espaçada → novas questões, em rodízio contínuo (não linear). REVISÃO ATIVA x PASSIVA: recuperação ativa (testar-se, explicar com as próprias palavras) x releitura passiva (gera ilusão de fluência). A ativa é mais eficaz. REVISÃO ESPAÇADA: intervalos crescentes (1, 7, 30, 60 dias...) — distribui as revisões ao longo do tempo; não concentra no mesmo dia. BANCO DE ERROS: registrar e classificar os erros por categoria. CLASSIFICAÇÃO: desconhecimento (não sabia), confusão (trocou institutos), interpretação (não entendeu o enunciado), desatenção (ignorou palavra/condição), pegadinha (foi induzido). ESTRATÉGIA: desconhecimento → releitura; confusão → comparação (quadro, novas questões); interpretação → treino de leitura; desatenção → checklist; pegadinha → treino com questões da banca. INTERCALAÇÃO x BLOCO: a intercalada tende a ser mais eficaz que o bloco, porque fortalece a retenção. CORREÇÃO DE ERRO: exige mais que ler a explicação — revisar o conteúdo + novas questões + verificação periódica.'
      }

    ]
  }

};
