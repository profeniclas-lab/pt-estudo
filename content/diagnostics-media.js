/* ============================================================
   DIAGNÓSTICOS — Módulos de prioridade MÉDIA
   Administração + Direito Administrativo
   Entregues: ADM-05, ADM-08, ADM-09
   Padrão por módulo: 3 MC (1 difícil) + 2 V/F + 1 situação + 1 autoavaliação
   Próximo sub-lote: 6.2 (ADM-12, DA-22, DA-24)
   ============================================================ */

window.DIAGNOSTICS_MEDIA = {

  /* ============================================================
     ADM-05 — Direção, liderança e motivação
  ============================================================ */
  'ADM-05': {
    id: 'D-ADM-05',
    moduloId: 'ADM-05',
    itens: [
      {
        id: 'D-ADM-05-01',
        tipo: 'multipla_escolha',
        subtopico: 'Autoridade x poder',
        pergunta: 'Sobre a diferença entre autoridade e poder no contexto da liderança, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Autoridade e poder são sinônimos: ambos decorrem exclusivamente do cargo ocupado.' },
          { id: 'B', texto: 'Autoridade é o direito formal de dar ordens, decorrente do cargo; poder é a capacidade de influenciar pessoas, podendo decorrer do cargo, do conhecimento, da personalidade ou do relacionamento.' },
          { id: 'C', texto: 'Poder é o direito formal de dar ordens; autoridade é a capacidade de influenciar sem cargo.' },
          { id: 'D', texto: 'Todo líder informal tem autoridade formal, e todo chefe tem poder de influência.' }
        ],
        gabarito: 'B',
        explicacao: 'AUTORIDADE: direito formal de dar ordens, decorrente do cargo (legitimidade formal). PODER: capacidade de influenciar pessoas, independentemente do cargo — pode vir do conhecimento, da personalidade, do relacionamento. A alternativa A iguala indevidamente; C inverte; D generaliza de forma incorreta (nem todo líder informal tem autoridade formal, nem todo chefe tem poder de influência).'
      },
      {
        id: 'D-ADM-05-02',
        tipo: 'multipla_escolha',
        subtopico: 'Estilos clássicos de liderança',
        pergunta: 'Sobre os três estilos clássicos de liderança (autocrática, democrática e liberal), é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Autocrática: decisões centralizadas no líder; democrática: decisões compartilhadas com o grupo; liberal: o grupo tem autonomia, com pouca interferência do líder.' },
          { id: 'B', texto: 'Autocrática: decisões compartilhadas; democrática: decisões centralizadas; liberal: sem liderança.' },
          { id: 'C', texto: 'Autocrática e liberal são sinônimos: ambas concentram as decisões no líder.' },
          { id: 'D', texto: 'A liderança democrática é sempre a mais eficaz, independentemente da situação.' }
        ],
        gabarito: 'A',
        explicacao: 'AUTOCRÁTICA: decisões centralizadas no líder, pouca participação. DEMOCRÁTICA: decisões compartilhadas, participação do grupo. LIBERAL (laissez-faire): o grupo tem autonomia, com pouca interferência do líder. A alternativa B inverte; C iguala indevidamente; D absolutiza a democracia — a eficácia depende do contexto (em emergências, a autocrática pode ser mais eficaz).'
      },
      {
        id: 'D-ADM-05-03',
        tipo: 'multipla_escolha',
        subtopico: 'Herzberg — fatores higiênicos x motivadores (nível difícil)',
        pergunta: 'Um órgão público aumentou o salário dos servidores em 15% e melhorou as instalações físicas do setor. Apesar disso, a equipe continua desmotivada e com baixo engajamento. Paralelamente, outro setor, sem aumento salarial, implantou programa de reconhecimento por metas alcançadas e deu autonomia aos servidores para organizar o próprio trabalho — e obteve aumento significativo de motivação. Com base na teoria dos dois fatores de Herzberg, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'O salário e as instalações são fatores MOTIVADORES; o reconhecimento e a autonomia são fatores HIGIÊNICOS.' },
          { id: 'B', texto: 'O salário e as instalações são fatores HIGIÊNICOS — quando ausentes, geram insatisfação, mas quando presentes não motivam; o reconhecimento e a autonomia são fatores MOTIVADORES — são eles que efetivamente impulsionam o engajamento.' },
          { id: 'C', texto: 'Salário, instalações, reconhecimento e autonomia são todos fatores higiênicos.' },
          { id: 'D', texto: 'A teoria de Herzberg não se aplica ao setor público, pois servidores não são motivados por reconhecimento.' }
        ],
        gabarito: 'B',
        explicacao: 'Em Herzberg, FATORES HIGIÊNICOS (extrínsecos — salário, condições de trabalho, políticas) evitam insatisfação, mas NÃO motivam. FATORES MOTIVADORES (intrínsecos — reconhecimento, responsabilidade, realização, autonomia) são os que efetivamente motivam. É por isso que o primeiro setor, mesmo com aumento e melhoria física, continuou desmotivado — e o segundo, sem aumento, aumentou a motivação. Esta é a distinção mais fina do tema e a que a banca mais cobra em questões difíceis.'
      },
      {
        id: 'D-ADM-05-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Liderança formal x informal',
        pergunta: 'A liderança formal decorre do cargo ocupado (designação institucional); a liderança informal emerge naturalmente do grupo, com base em confiança e respeito — e nem sempre coincide com a liderança formal.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. LIDERANÇA FORMAL: decorre do cargo — chefe designado, com autoridade institucional. LIDERANÇA INFORMAL: emerge naturalmente — influência sem cargo, baseada em confiança e respeito. As duas nem sempre coincidem: um chefe formal pode não ser o líder real da equipe; e um servidor sem cargo de chefia pode ser o líder informal.'
      },
      {
        id: 'D-ADM-05-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Maslow — hierarquia das necessidades',
        pergunta: 'Na teoria de Maslow, as necessidades humanas devem ser satisfeitas em ordem ascendente: primeiro as fisiológicas, depois segurança, sociais, estima e, por fim, autorrealização.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. A hierarquia de Maslow é: FISIOLÓGICAS (base) → SEGURANÇA → SOCIAIS → ESTIMA → AUTORREALIZAÇÃO (topo). A lógica é ascendente: as necessidades superiores só se tornam relevantes quando as inferiores estão razoavelmente satisfeitas.'
      },
      {
        id: 'D-ADM-05-06',
        tipo: 'situacao',
        subtopico: 'Liderança situacional',
        pergunta: 'Um coordenador assumiu uma equipe nova, com servidores recém-concursados e sem experiência no sistema utilizado pelo setor. Inicialmente, ele adotou estilo de liderança diretivo, com instruções detalhadas e supervisão próxima. Após seis meses, com a equipe já treinada e experiente, ele passou a delegar tarefas e dar mais autonomia, mantendo apenas o acompanhamento de resultados. Com base na liderança situacional (Hersey & Blanchard), é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'O coordenador errou, pois deveria ter mantido o mesmo estilo desde o início.' },
          { id: 'B', texto: 'O coordenador agiu corretamente: na liderança situacional, o estilo é ajustado à maturidade da equipe — DIRIGIR (baixa maturidade) → PERSUADIR → PARTICIPAR → DELEGAR (alta maturidade).' },
          { id: 'C', texto: 'O coordenador errou, pois a liderança situacional exige sempre o estilo liberal (laissez-faire).' },
          { id: 'D', texto: 'A liderança situacional não se aplica ao setor público, apenas ao privado.' }
        ],
        gabarito: 'B',
        explicacao: 'Na LIDERANÇA SITUACIONAL (Hersey & Blanchard), o estilo ideal depende da MATURIDADE da equipe: DIRIGIR (baixa maturidade — equipe inexperiente), PERSUADIR (maturidade média-baixa), PARTICIPAR (maturidade média-alta) e DELEGAR (alta maturidade). O coordenador agiu corretamente ao começar diretivo (equipe nova) e evoluir para delegação (equipe experiente). A alternativa A ignora o caráter situacional; C absolutiza um estilo; D restringe indevidamente.'
      },
      {
        id: 'D-ADM-05-07',
        tipo: 'autoavaliacao',
        subtopico: 'Liderança e motivação — conceitos fundamentais',
        pergunta: 'Você consegue, sem consultar, diferenciar autoridade de poder, liderança formal de informal, os três estilos clássicos, a liderança situacional e as teorias de Maslow, Herzberg e McGregor?',
        resposta: 'AUTORIDADE (cargo) x PODER (influência). FORMAL (cargo) x INFORMAL (emerge do grupo). ESTILOS: autocrática (centralizada), democrática (participativa), liberal (autonomia). SITUACIONAL: o estilo varia com a maturidade da equipe (dirigir, persuadir, participar, delegar). MASLOW: fisiológicas → segurança → sociais → estima → autorrealização. HERZBERG: higiênicos (evitam insatisfação, não motivam) x motivadores (motivam). McGREGOR: teoria X (visão negativa) x teoria Y (visão positiva).'
      }
    ]
  },

  /* ============================================================
     ADM-08 — Comunicação e comportamento organizacional
  ============================================================ */
  'ADM-08': {
    id: 'D-ADM-08',
    moduloId: 'ADM-08',
    itens: [
      {
        id: 'D-ADM-08-01',
        tipo: 'multipla_escolha',
        subtopico: 'Elementos da comunicação',
        pergunta: 'Sobre os elementos do processo de comunicação, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Emissor, mensagem, canal, receptor e feedback são elementos do processo; o ruído é a interferência que distorce a mensagem.' },
          { id: 'B', texto: 'Emissor e receptor são sinônimos; ruído é o mesmo que feedback.' },
          { id: 'C', texto: 'Feedback é opcional e não interfere na compreensão da mensagem.' },
          { id: 'D', texto: 'Canal é o conteúdo da mensagem, e mensagem é o meio de transmissão.' }
        ],
        gabarito: 'A',
        explicacao: 'Os elementos do processo de comunicação são: EMISSOR (quem envia), CODIFICAÇÃO, MENSAGEM (conteúdo), CANAL (meio), DECODIFICAÇÃO, RECEPTOR (quem recebe), FEEDBACK (retorno) e RUÍDO (interferência que distorce). A alternativa B iguala indevidamente; C nega a importância do feedback; D inverte canal e mensagem.'
      },
      {
        id: 'D-ADM-08-02',
        tipo: 'multipla_escolha',
        subtopico: 'Comunicação formal x informal',
        pergunta: 'Sobre a comunicação formal e a comunicação informal nas organizações, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Comunicação formal é sempre prejudicial, e a informal é sempre benéfica.' },
          { id: 'B', texto: 'Comunicação formal flui pelos canais oficiais (hierarquia, documentos, ordens); a informal flui pelas relações interpessoais (conversas, redes) — e ambas coexistem, podendo a informal reforçar ou minar a formal.' },
          { id: 'C', texto: 'Comunicação formal e informal são sinônimos.' },
          { id: 'D', texto: 'Comunicação informal não existe nas organizações públicas.' }
        ],
        gabarito: 'B',
        explicacao: 'FORMAL: canais oficiais — hierarquia, documentos, ordens. INFORMAL: relações interpessoais — conversas, redes. Ambas coexistem, e a informal pode reforçar ou minar a formal. A alternativa A trata como valor absoluto; C iguala; D nega a existência da comunicação informal no setor público (ela existe em qualquer organização).'
      },
      {
        id: 'D-ADM-08-03',
        tipo: 'multipla_escolha',
        subtopico: 'Conflito funcional x disfuncional (nível difícil)',
        pergunta: 'Em uma reunião de equipe, dois servidores divergem sobre a melhor forma de organizar o fluxo de atendimento. A discussão é respeitosa, baseada em dados, e resulta em uma solução melhor do que a inicial. Em outro setor, dois colegas discutem por questões pessoais, com ironias e interrupções, e o clima fica hostil, prejudicando o trabalho. Sobre esses conflitos, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Ambos são disfuncionais, pois todo conflito é prejudicial.' },
          { id: 'B', texto: 'O primeiro é FUNCIONAL (construtivo — estimula debate e melhoria); o segundo é DISFUNCIONAL (destrutivo — gera hostilidade e prejudica o desempenho).' },
          { id: 'C', texto: 'Ambos são funcionais, pois o conflito sempre gera aprendizado.' },
          { id: 'D', texto: 'O primeiro é disfuncional; o segundo é funcional, pois expõe problemas.' }
        ],
        gabarito: 'B',
        explicacao: 'O CONFLITO FUNCIONAL é construtivo — estimula debate, inovação e melhoria (primeiro caso). O DISFUNCIONAL é destrutivo — gera hostilidade, reduz desempenho e fragmenta o grupo (segundo caso). A chave é: nem todo conflito é ruim; o gestor deve estimular o funcional e mediar o disfuncional. A alternativa A trata todo conflito como ruim; C, como bom; D inverte.'
      },
      {
        id: 'D-ADM-08-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Grupo x equipe',
        pergunta: 'Grupo e equipe são sinônimos: ambos se caracterizam por objetivo comum, responsabilidade individual e sinergia neutra.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. GRUPO: objetivo comum, mas com responsabilidade INDIVIDUAL e sinergia neutra (ou negativa). EQUIPE: objetivo comum, habilidades COMPLEMENTARES, responsabilidade MÚTUA e sinergia POSITIVA (o resultado conjunto supera a soma das partes). A equipe é uma evolução do grupo.'
      },
      {
        id: 'D-ADM-08-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Negociação distributiva x integrativa',
        pergunta: 'A negociação distributiva é do tipo ganha-perde (recursos limitados); a integrativa busca soluções ganha-ganha, atendendo aos interesses de ambas as partes.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. DISTRIBUTIVA: ganha-perde — o ganho de um lado é a perda do outro (recursos limitados). INTEGRATIVA: ganha-ganha — busca soluções criativas que atendam aos interesses de ambos. A integrativa exige mais diálogo, mas tende a gerar soluções mais duradouras.'
      },
      {
        id: 'D-ADM-08-06',
        tipo: 'situacao',
        subtopico: 'Identificação de elementos da comunicação',
        pergunta: 'Um chefe envia um e-mail a um subordinado, comunicando uma mudança de procedimento. O e-mail é redigido com jargões técnicos, sem explicar o contexto. O subordinado entende a mensagem de forma equivocada e aplica o procedimento errado. Ao perceber o erro, o chefe conclui que "o subordinado não prestou atenção". Sobre o caso, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Houve comunicação eficaz: o chefe enviou a mensagem e o subordinado a recebeu.' },
          { id: 'B', texto: 'Houve falha na comunicação, com ruído na CODIFICAÇÃO (jargões técnicos sem explicação de contexto) e ausência de FEEDBACK — o chefe não confirmou se o subordinado havia compreendido.' },
          { id: 'C', texto: 'A falha foi exclusivamente do subordinado, que não prestou atenção.' },
          { id: 'D', texto: 'Não houve falha, pois o e-mail é um canal formal e, por si só, garante a compreensão.' }
        ],
        gabarito: 'B',
        explicacao: 'A comunicação só se completa quando a mensagem é COMPREENDIDA. No caso, houve RUÍDO NA CODIFICAÇÃO (jargões técnicos sem contexto) e ausência de FEEDBACK (o chefe não confirmou a compreensão). Atribuir a falha ao subordinado (C) é simplista; afirmar que a comunicação foi eficaz (A) ignora a incompreensão; dizer que o canal formal garante compreensão (D) é incorreto. A chave é: transmitir ≠ comunicar.'
      },
      {
        id: 'D-ADM-08-07',
        tipo: 'autoavaliacao',
        subtopico: 'Comunicação e comportamento organizacional',
        pergunta: 'Você consegue, sem consultar, identificar os elementos da comunicação, diferenciar comunicação formal de informal, vertical de horizontal, conflito funcional de disfuncional e grupo de equipe?',
        resposta: 'ELEMENTOS: emissor, codificação, mensagem, canal, decodificação, receptor, feedback e ruído. FORMAL (canais oficiais) x INFORMAL (relações interpessoais). VERTICAL (hierarquia — ascendente/descendente) x HORIZONTAL (entre pares). CONFLITO FUNCIONAL (construtivo) x DISFUNCIONAL (destrutivo). GRUPO (responsabilidade individual, sinergia neutra) x EQUIPE (responsabilidade mútua, sinergia positiva). NEGOCIAÇÃO: distributiva (ganha-perde) x integrativa (ganha-ganha).'
      }
    ]
  },

  /* ============================================================
     ADM-09 — Gestão da Qualidade
  ============================================================ */
  'ADM-09': {
    id: 'D-ADM-09',
    moduloId: 'ADM-09',
    itens: [
      {
        id: 'D-ADM-09-01',
        tipo: 'multipla_escolha',
        subtopico: 'PDCA',
        pergunta: 'Sobre o ciclo PDCA, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'É uma sigla para Planejamento, Desenvolvimento, Controle e Avaliação — e é um processo linear.' },
          { id: 'B', texto: 'É composto por PLAN (planejar), DO (executar), CHECK (verificar) e ACT (agir); é um ciclo contínuo — ao final do ACT, reinicia-se o PLAN com novas metas.' },
          { id: 'C', texto: 'É uma ferramenta de comunicação interna, sem relação com a melhoria contínua.' },
          { id: 'D', texto: 'É uma ferramenta exclusiva do setor privado, não aplicável ao setor público.' }
        ],
        gabarito: 'B',
        explicacao: 'PDCA = PLAN (planejar — metas e métodos), DO (executar — implementar), CHECK (verificar — avaliar resultados) e ACT (agir — corrigir e padronizar). É um ciclo CONTÍNUO: ao final do ACT, reinicia-se com novo PLAN. A alternativa A troca as fases e o trata como linear; C ignora sua função de melhoria; D restringe indevidamente.'
      },
      {
        id: 'D-ADM-09-02',
        tipo: 'multipla_escolha',
        subtopico: 'Ishikawa x Pareto',
        pergunta: 'Sobre o Diagrama de Ishikawa e o Diagrama de Pareto, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Ishikawa prioriza as causas; Pareto identifica as causas.' },
          { id: 'B', texto: 'Ishikawa identifica as CAUSAS de um problema (agrupadas em 6M); Pareto PRIORIZA as causas — 80% dos problemas decorrem de 20% das causas.' },
          { id: 'C', texto: 'Ambos são a mesma ferramenta, apenas com nomes diferentes.' },
          { id: 'D', texto: 'Pareto identifica as causas; Ishikawa prioriza.' }
        ],
        gabarito: 'B',
        explicacao: 'ISHIKAWA (espinha de peixe): identifica as CAUSAS do problema (agrupadas em 6M — mão de obra, método, máquina, material, medida e meio ambiente). PARETO: PRIORIZA as causas (princípio 80/20). São ferramentas complementares: Ishikawa investiga; Pareto prioriza. A alternativa A inverte; C iguala; D troca as funções.'
      },
      {
        id: 'D-ADM-09-03',
        tipo: 'multipla_escolha',
        subtopico: '5W2H, Ishikawa e Pareto — aplicação (nível difícil)',
        pergunta: 'Uma Secretaria de Saúde identificou que o tempo médio de espera por consulta é de 40 dias, muito acima da meta. A equipe de qualidade precisa, primeiro, identificar as causas do problema; depois, priorizar as principais causas; em seguida, montar um plano de ação com prazos e responsáveis. As ferramentas adequadas para cada etapa são, respectivamente:',
        alternativas: [
          { id: 'A', texto: 'Pareto, Ishikawa e 5W2H.' },
          { id: 'B', texto: 'Ishikawa, Pareto e 5W2H.' },
          { id: 'C', texto: '5W2H, Pareto e Ishikawa.' },
          { id: 'D', texto: 'Ishikawa, 5W2H e Pareto.' }
        ],
        gabarito: 'B',
        explicacao: 'Primeiro, IDENTIFICAR as causas: ISHIKAWA (6M). Depois, PRIORIZAR as causas: PARETO (80/20). Por fim, MONTAR o plano de ação (o quê, por quê, onde, quando, quem, como, quanto custa): 5W2H. A sequência lógica é Ishikawa → Pareto → 5W2H. Esta é a aplicação mais fina das ferramentas e a que a banca mais cobra em questões difíceis.'
      },
      {
        id: 'D-ADM-09-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Qualidade total',
        pergunta: 'Qualidade total é uma abordagem que envolve todos os setores e todos os servidores da organização, com foco no usuário e comprometimento da alta direção.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. A QUALIDADE TOTAL (TQM) é uma abordagem sistêmica: envolve TODOS os setores e servidores, com foco no usuário e comprometimento da alta direção. Não é responsabilidade exclusiva de um setor ou da alta direção — é um compromisso coletivo.'
      },
      {
        id: 'D-ADM-09-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Melhoria contínua x reengenharia',
        pergunta: 'Melhoria contínua e reengenharia são sinônimos: ambas consistem em redesenhar radicalmente o processo, começando do zero.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. MELHORIA CONTÍNUA (kaizen) é INCREMENTAL — pequenos ajustes sucessivos, sem ruptura. REENGENHARIA é RADICAL — redesenho completo, "começar do zero", com ruptura do processo atual. Uma aperfeiçoa; a outra reinventa.'
      },
      {
        id: 'D-ADM-09-06',
        tipo: 'situacao',
        subtopico: 'Ferramentas da qualidade — escolha adequada',
        pergunta: 'Um órgão público está com alto índice de reclamações no atendimento. A equipe de qualidade precisa: (a) identificar as possíveis causas do problema, agrupando-as por categorias (pessoas, método, ambiente, etc.); (b) verificar se poucas causas explicam a maior parte das reclamações, para priorizar ações; (c) estruturar um plano de ação com prazos e responsáveis. As ferramentas adequadas para (a), (b) e (c) são, respectivamente:',
        alternativas: [
          { id: 'A', texto: 'Ishikawa, Pareto e 5W2H.' },
          { id: 'B', texto: 'Pareto, Ishikawa e 5W2H.' },
          { id: 'C', texto: '5W2H, Ishikawa e Pareto.' },
          { id: 'D', texto: 'Ishikawa, 5W2H e Pareto.' }
        ],
        gabarito: 'A',
        explicacao: '(a) IDENTIFICAR causas agrupadas por categorias = ISHIKAWA (6M). (b) Verificar se poucas causas explicam a maior parte = PARETO (80/20). (c) Estruturar plano com prazos e responsáveis = 5W2H. A sequência é Ishikawa → Pareto → 5W2H. A chave é associar cada necessidade à ferramenta adequada.'
      },
      {
        id: 'D-ADM-09-07',
        tipo: 'autoavaliacao',
        subtopico: 'Gestão da qualidade — conceitos fundamentais',
        pergunta: 'Você consegue, sem consultar, explicar o PDCA, diferenciar Ishikawa de Pareto, aplicar o 5W2H e distinguir qualidade total de melhoria contínua?',
        resposta: 'PDCA: PLAN (planejar), DO (executar), CHECK (verificar), ACT (agir) — cíclico. ISHIKAWA: identifica causas (6M). PARETO: prioriza causas (80/20). 5W2H: plano de ação (What, Why, Where, When, Who, How, How much). QUALIDADE TOTAL: abordagem ampla, com todos os setores e servidores envolvidos. MELHORIA CONTÍNUA: avanços incrementais permanentes (kaizen) — diferente da reengenharia (radical). INDICADORES: métricas de desempenho (tempo de espera, taxa de erro).'
      }
    ]
  },
  /* ============================================================
     ADM-12 — Atendimento ao público e relações interpessoais
  ============================================================ */
  'ADM-12': {
    id: 'D-ADM-12',
    moduloId: 'ADM-12',
    itens: [
      {
        id: 'D-ADM-12-01',
        tipo: 'multipla_escolha',
        subtopico: 'Cidadão como usuário de direitos',
        pergunta: 'Sobre a natureza da relação entre o servidor público e o cidadão no atendimento, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'O cidadão é "cliente" do Estado, e o atendimento é uma mercadoria que o servidor oferece.' },
          { id: 'B', texto: 'O cidadão é usuário de DIREITOS — o serviço público é dever do Estado, regido por princípios como legalidade, impessoalidade, moralidade, publicidade e eficiência. Não é favor, é dever.' },
          { id: 'C', texto: 'O cidadão não tem direitos no atendimento público, apenas o servidor tem deveres.' },
          { id: 'D', texto: 'O atendimento público segue a mesma lógica do atendimento privado, com foco na satisfação do consumidor.' }
        ],
        gabarito: 'B',
        explicacao: 'No serviço público, o cidadão é USUÁRIO DE DIREITOS — o serviço é dever do Estado, não favor, e é regido pelos princípios do art. 37 da CF (LIMPE). A relação não é de consumo (como no privado), mas de cidadania. A alternativa A reduz o cidadão a cliente; C nega direitos; D iguala indevidamente os regimes público e privado.'
      },
      {
        id: 'D-ADM-12-02',
        tipo: 'multipla_escolha',
        subtopico: 'Acessibilidade x atendimento preferencial',
        pergunta: 'Sobre acessibilidade e atendimento preferencial no serviço público, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Acessibilidade e atendimento preferencial são sinônimos: ambos se referem à prioridade no atendimento.' },
          { id: 'B', texto: 'Acessibilidade é a eliminação de barreiras (físicas, comunicacionais e atitudinais) para que todos tenham acesso ao serviço; atendimento preferencial é a prioridade no atendimento a determinados públicos (idosos, gestantes, pessoas com deficiência). São coisas distintas e complementares.' },
          { id: 'C', texto: 'Acessibilidade se resume a rampas de acesso.' },
          { id: 'D', texto: 'Atendimento preferencial dispensa a acessibilidade, pois já garante o acesso.' }
        ],
        gabarito: 'B',
        explicacao: 'ACESSIBILIDADE: eliminação de barreiras — físicas (rampas, elevadores), comunicacionais (Libras, braile) e atitudinais (capacitação da equipe). ATENDIMENTO PREFERENCIAL: prioridade no atendimento a públicos específicos. São complementares, mas distintas. A alternativa A iguala; C reduz acessibilidade a rampas; D desqualifica a acessibilidade.'
      },
      {
        id: 'D-ADM-12-03',
        tipo: 'multipla_escolha',
        subtopico: 'Gestão de conflitos no atendimento (nível difícil)',
        pergunta: 'Um cidadão chega ao guichê visivelmente exaltado, gritando que "o serviço público não funciona" e que "ninguém resolve nada". Ele direciona a fala ao servidor, que não tem competência para resolver a demanda naquele momento. Considerando as boas práticas de atendimento e a ética profissional, a postura adequada do servidor é:',
        alternativas: [
          { id: 'A', texto: 'Responder à altura, elevando o tom de voz, para demonstrar autoridade e impor respeito.' },
          { id: 'B', texto: 'Ouvir com empatia (escuta ativa), manter a calma, não revidar a agressão, identificar a demanda real, informar com clareza o que pode ser feito e encaminhar o que não está ao seu alcance — adotando as medidas cabíveis se houver ameaça.' },
          { id: 'C', texto: 'Ignorar o cidadão e continuar o atendimento de outros, para demonstrar que a agressão não afeta o servidor.' },
          { id: 'D', texto: 'Recusar o atendimento até que o cidadão se acalme, exigindo que ele se retire do recinto.' }
        ],
        gabarito: 'B',
        explicacao: 'A postura adequada é: ESCUTA ATIVA (ouvir com atenção), EMPATIA (acolher a insatisfação sem concordar com a agressão), MANUTENÇÃO DA CALMA (não revidar), IDENTIFICAÇÃO DA DEMANDA REAL, INFORMAÇÃO CLARA e ENCAMINHAMENTO. Se houver ameaça à integridade física ou moral, adotar as medidas cabíveis. A alternativa A é antiética e viola a postura profissional; C ignora o cidadão (viola o dever de atendimento); D recusa o atendimento sem justa causa (também viola o dever). Esta é a questão mais fina do módulo — a que exige discernimento entre firmeza e agressividade.'
      },
      {
        id: 'D-ADM-12-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Sigilo profissional',
        pergunta: 'No atendimento ao público, o servidor deve manter sigilo sobre os dados pessoais e a situação do cidadão, salvo nas hipóteses previstas em lei.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. O SIGILO é dever funcional e ético — protege a privacidade e a intimidade do cidadão. A LGPD reforça esse dever. As exceções só valem nas hipóteses legais (ex.: requisição judicial, previsão legal específica).'
      },
      {
        id: 'D-ADM-12-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Linguagem no atendimento',
        pergunta: 'No atendimento ao público, o servidor deve usar linguagem clara e acessível, evitando jargões técnicos que dificultem a compreensão do cidadão.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. A comunicação no atendimento deve ser CLARA e ACESSÍVEL — a linguagem técnica (jargão) dificulta a compreensão e compromete a efetividade do atendimento. O cidadão precisa entender o que lhe é informado. Se necessário, o servidor deve explicar termos técnicos em linguagem simples.'
      },
      {
        id: 'D-ADM-12-06',
        tipo: 'situacao',
        subtopico: 'Atendimento a pessoa com deficiência',
        pergunta: 'Uma pessoa com deficiência auditiva chega ao guichê de atendimento e tenta se comunicar por gestos. O servidor não conhece Libras e o órgão não dispõe de intérprete presencial no momento. Considerando os princípios da acessibilidade e do atendimento adequado, é correto afirmar que o servidor deve:',
        alternativas: [
          { id: 'A', texto: 'Pedir que a pessoa volte em outro dia, quando houver intérprete disponível.' },
          { id: 'B', texto: 'Buscar alternativas de comunicação acessível (comunicação escrita, aplicativos de tradução, contato com intérprete remoto ou com o setor responsável pela acessibilidade), garantindo o atendimento e a compreensão da demanda — sem prejuízo de registrar a ocorrência para melhoria futura.' },
          { id: 'C', texto: 'Atender apenas por escrito, sem qualquer outra tentativa de comunicação, e encerrar o atendimento.' },
          { id: 'D', texto: 'Encaminhar a pessoa a outro órgão, alegando que o atendimento acessível é responsabilidade de outro setor.' }
        ],
        gabarito: 'B',
        explicacao: 'A acessibilidade exige a eliminação de barreiras COMUNICACIONAIS — e o servidor deve buscar ALTERNATIVAS que garantam o atendimento (comunicação escrita, aplicativos, intérprete remoto, acionamento do setor responsável). A alternativa A posterga indevidamente; C restringe a comunicação a uma única via; D transfere a responsabilidade, violando o dever de atendimento. A chave é: a barreira não pode impedir o acesso ao serviço — o servidor deve buscar a solução.'
      },
      {
        id: 'D-ADM-12-07',
        tipo: 'autoavaliacao',
        subtopico: 'Atendimento ao público — conceitos fundamentais',
        pergunta: 'Você consegue, sem consultar, diferenciar atendimento público de privado, acessibilidade de atendimento preferencial, e explicar a postura adequada diante de conflitos?',
        resposta: 'PÚBLICO x PRIVADO: cidadão é usuário de DIREITOS (serviço é dever do Estado) x cliente é consumidor (relação contratual). ACESSIBILIDADE x PREFERENCIAL: eliminação de barreiras (físicas, comunicacionais, atitudinais) x prioridade no atendimento a públicos específicos. CONFLITO: gerir com escuta ativa, empatia, calma, clareza e encaminhamento — sem revidar agressão; adotar medidas cabíveis se houver ameaça. SIGILO: dever de proteger dados e situação do cidadão. LINGUAGEM: clara e acessível, sem jargões.'
      }
    ]
  },

  /* ============================================================
     DA-22 — Responsabilidade Civil do Estado
  ============================================================ */
  'DA-22': {
    id: 'D-DA-22',
    moduloId: 'DA-22',
    itens: [
      {
        id: 'D-DA-22-01',
        tipo: 'multipla_escolha',
        subtopico: 'Teoria da responsabilidade (objetiva x subjetiva)',
        pergunta: 'Sobre a responsabilidade civil do Estado no ordenamento brasileiro, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'O Brasil adotou a teoria subjetiva em atos comissivos: a vítima precisa provar a culpa do agente.' },
          { id: 'B', texto: 'O Brasil adotou a teoria OBJETIVA (art. 37, §6º, CF) em atos comissivos: basta dano + nexo causal + conduta, independentemente de culpa.' },
          { id: 'C', texto: 'O Brasil adotou a teoria do risco integral: não há excludentes de responsabilidade em nenhuma hipótese.' },
          { id: 'D', texto: 'O Brasil não tem regra constitucional sobre responsabilidade do Estado.' }
        ],
        gabarito: 'B',
        explicacao: 'O art. 37, §6º, da CF adotou a responsabilidade OBJETIVA em atos comissivos: basta dano + nexo causal + conduta, independentemente de culpa do agente. A alternativa A está errada (a responsabilidade do Estado é objetiva; a do agente, na ação regressiva, é subjetiva). C confunde com risco integral (não adotado). D ignora o texto constitucional.'
      },
      {
        id: 'D-DA-22-02',
        tipo: 'multipla_escolha',
        subtopico: 'Ação regressiva',
        pergunta: 'Sobre a ação regressiva do Estado contra o agente público, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'A ação regressiva independe de dolo ou culpa do agente — basta o Estado ter indenizado a vítima.' },
          { id: 'B', texto: 'A ação regressiva exige DOLO ou CULPA do agente — é a responsabilidade subjetiva do agente perante o Estado, depois que o Estado indeniza a vítima.' },
          { id: 'C', texto: 'A ação regressiva é vedada pela Constituição.' },
          { id: 'D', texto: 'A vítima deve ajuizar ação diretamente contra o agente, e não contra o Estado.' }
        ],
        gabarito: 'B',
        explicacao: 'A AÇÃO REGRESSIVA exige DOLO ou CULPA do agente — é a responsabilidade SUBJETIVA do agente perante o Estado. O Estado, após indenizar a vítima (responsabilidade objetiva), pode cobrar do agente. A alternativa A ignora a exigência de dolo/culpa; C nega a ação (ela é prevista no art. 37, §6º); D inverte a ordem (a vítima aciona o Estado).'
      },
      {
        id: 'D-DA-22-03',
        tipo: 'multipla_escolha',
        subtopico: 'Excludentes de responsabilidade (nível difícil)',
        pergunta: 'Um veículo oficial, conduzido por servidor no exercício da função, atropela um pedestre que atravessava a via em local proibido, com sinal vermelho para pedestres, desrespeitando as regras de trânsito. A vítima sofreu lesões. Considerando as excludentes de responsabilidade, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'O Estado sempre responde, pois a responsabilidade é objetiva e não admite excludentes.' },
          { id: 'B', texto: 'Há CULPA EXCLUSIVA DA VÍTIMA (pedestre atravessou em local proibido, com sinal vermelho), o que exclui a responsabilidade do Estado — desde que comprovado que o servidor não concorreu para o evento.' },
          { id: 'C', texto: 'A culpa exclusiva da vítima não exclui a responsabilidade do Estado, pois a teoria adotada é a do risco integral.' },
          { id: 'D', texto: 'O Estado responde sempre, independentemente da conduta da vítima, pois a responsabilidade por atos comissivos é objetiva.' }
        ],
        gabarito: 'B',
        explicacao: 'A CULPA EXCLUSIVA DA VÍTIMA é uma das excludentes de responsabilidade — quebra o nexo causal. Se o pedestre atravessou em local proibido, com sinal vermelho, e o servidor não concorreu para o evento, a responsabilidade do Estado é excluída. A alternativa A ignora as excludentes; C confunde risco administrativo (que admite excludentes) com risco integral (que não admite, e não é o adotado no Brasil); D desconsidera a culpa da vítima. Esta é a questão mais fina do módulo — exige distinguir teoria adotada (risco administrativo, com excludentes) e aplicar ao caso.'
      },
      {
        id: 'D-DA-22-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Teoria do risco administrativo x risco integral',
        pergunta: 'O Brasil adotou a teoria do risco INTEGRAL: a responsabilidade do Estado é absoluta, sem qualquer excludente.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. O Brasil adotou a teoria do RISCO ADMINISTRATIVO: responsabilidade objetiva, mas com EXCLUDENTES (culpa exclusiva da vítima, caso fortuito/força maior, fato de terceiro). O risco INTEGRAL (sem excludentes) não é a regra adotada — só aparece em hipóteses excepcionais previstas em lei (ex.: dano ambiental).'
      },
      {
        id: 'D-DA-22-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Atos comissivos x atos omissivos',
        pergunta: 'Em atos comissivos, a responsabilidade do Estado é objetiva; em omissões genéricas, a jurisprudência majoritária exige a comprovação de culpa (falha do serviço).',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. Em ATOS COMISSIVOS (o Estado age), a responsabilidade é objetiva (art. 37, §6º). Em OMISSÕES GENÉRICAS (o Estado deixa de agir, sem dever específico e direto), a jurisprudência majoritária exige a comprovação de CULPA (falha do serviço) — é a chamada "culpa administrativa". Em omissões específicas (dever legal direto), pode haver responsabilidade objetiva.'
      },
      {
        id: 'D-DA-22-06',
        tipo: 'situacao',
        subtopico: 'Responsabilidade por ato comissivo e ação regressiva',
        pergunta: 'Um servidor público federal, no exercício da função, conduz um veículo oficial com imprudência e causa dano a um particular. O particular ajuíza ação indenizatória. Considerando as regras da responsabilidade civil do Estado, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'A ação deve ser proposta diretamente contra o servidor, pois foi ele quem causou o dano.' },
          { id: 'B', texto: 'A ação deve ser proposta contra a União (responsabilidade OBJETIVA), e a União, após indenizar a vítima, pode ajuizar AÇÃO REGRESSIVA contra o servidor — desde que comprovados DOLO ou CULPA (no caso, culpa por imprudência).' },
          { id: 'C', texto: 'A ação deve ser proposta contra o servidor e contra a União, em litisconsórcio necessário.' },
          { id: 'D', texto: 'A vítima não tem direito à indenização, pois o dano foi causado por agente público.' }
        ],
        gabarito: 'B',
        explicacao: 'A vítima aciona o ESTADO (União), por responsabilidade OBJETIVA (art. 37, §6º). Após indenizar, a União pode ajuizar AÇÃO REGRESSIVA contra o servidor, desde que comprovados DOLO ou CULPA — no caso, a imprudência (culpa) está presente. A alternativa A ignora a teoria do órgão; C propõe litisconsórcio que não é necessário; D nega o direito à indenização.'
      },
      {
        id: 'D-DA-22-07',
        tipo: 'autoavaliacao',
        subtopico: 'Responsabilidade civil do Estado — conceitos fundamentais',
        pergunta: 'Você consegue, sem consultar, diferenciar responsabilidade subjetiva de objetiva, risco administrativo de risco integral, a responsabilidade do Estado da do agente e atos comissivos de omissivos?',
        resposta: 'SUBJETIVA (exige culpa) x OBJETIVA (independe de culpa — dano + nexo). RISCO ADMINISTRATIVO (com excludentes — adotado no Brasil) x RISCO INTEGRAL (sem excludentes — não adotado como regra). ESTADO → VÍTIMA (objetiva) x AGENTE → ESTADO (ação regressiva, exige dolo ou culpa). COMISSIVOS (o Estado age — objetiva) x OMISSIVOS (omissão genérica exige culpa — falha do serviço). EXCLUDENTES: culpa exclusiva da vítima, caso fortuito/força maior, fato de terceiro.'
      }
    ]
  },

  /* ============================================================
     DA-24 — Improbidade Administrativa
  ============================================================ */
  'DA-24': {
    id: 'D-DA-24',
    moduloId: 'DA-24',
    itens: [
      {
        id: 'D-DA-24-01',
        tipo: 'multipla_escolha',
        subtopico: 'Modalidades de improbidade',
        pergunta: 'Sobre as modalidades de improbidade administrativa (Lei 8.429/1992), é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'São três: enriquecimento ilícito (art. 9º), prejuízo ao erário (art. 10) e atentado a princípios administrativos (art. 11).' },
          { id: 'B', texto: 'São apenas duas: enriquecimento ilícito e prejuízo ao erário.' },
          { id: 'C', texto: 'São quatro: enriquecimento, prejuízo, atentado a princípios e improbidade culposa.' },
          { id: 'D', texto: 'A improbidade só existe na modalidade de enriquecimento ilícito.' }
        ],
        gabarito: 'A',
        explicacao: 'As três modalidades de improbidade são: ENRIQUECIMENTO ILÍCITO (art. 9º — auferir vantagem patrimonial indevida em razão do cargo), PREJUÍZO AO ERÁRIO (art. 10 — causar dano ao patrimônio público) e ATENTADO A PRINCÍPIOS ADMINISTRATIVOS (art. 11 — violar deveres de honestidade, imparcialidade, legalidade e lealdade). A alternativa C inclui "improbidade culposa" — que foi EXTINTA pela Lei 14.230/2021.'
      },
      {
        id: 'D-DA-24-02',
        tipo: 'multipla_escolha',
        subtopico: 'Exigência de dolo (Lei 14.230/2021)',
        pergunta: 'Sobre o elemento subjetivo da improbidade administrativa após a Lei 14.230/2021, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Admite-se improbidade por culpa em todas as modalidades.' },
          { id: 'B', texto: 'Exige-se DOLO em todas as modalidades — a Lei 14.230/2021 eliminou a modalidade culposa.' },
          { id: 'C', texto: 'Exige-se dolo apenas na modalidade de enriquecimento ilícito; nas demais, admite-se culpa.' },
          { id: 'D', texto: 'A Lei 14.230/2021 não alterou o elemento subjetivo da improbidade.' }
        ],
        gabarito: 'B',
        explicacao: 'A Lei 14.230/2021 promoveu uma alteração profunda: passou a exigir DOLO em TODAS as modalidades de improbidade, eliminando a modalidade culposa. A alternativa A ignora a mudança; C restringe indevidamente; D nega a alteração — que é o ponto mais cobrado do tema em provas atuais.'
      },
      {
        id: 'D-DA-24-03',
        tipo: 'multipla_escolha',
        subtopico: 'Modalidades e sanções (nível difícil)',
        pergunta: 'Um prefeito nomeia o próprio filho para um cargo em comissão de assessoramento, sem qualquer processo seletivo, configurando nepotismo (vedado pela Súmula Vinculante 13). Paralelamente, um secretário municipal superfatura um contrato de obra pública, causando dano ao erário. Sobre a responsabilização por improbidade, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Ambos os casos configuram enriquecimento ilícito, com as mesmas sanções.' },
          { id: 'B', texto: 'O caso do prefeito configura improbidade por ATENTADO A PRINCÍPIOS (art. 11 — violação da moralidade e da impessoalidade); o caso do secretário configura improbidade por PREJUÍZO AO ERÁRIO (art. 10) — e as sanções são distintas: o atentado a princípios não exige ressarcimento, enquanto o prejuízo ao erário exige ressarcimento, além das demais sanções.' },
          { id: 'C', texto: 'O caso do prefeito configura prejuízo ao erário; o do secretário, atentado a princípios.' },
          { id: 'D', texto: 'Nenhum dos casos configura improbidade, pois não houve enriquecimento pessoal.' }
        ],
        gabarito: 'B',
        explicacao: 'O nepotismo configura improbidade por ATENTADO A PRINCÍPIOS (art. 11) — viola a moralidade e a impessoalidade. O superfaturamento de obra configura improbidade por PREJUÍZO AO ERÁRIO (art. 10) — há dano ao patrimônio público. As sanções são distintas: o atentado a princípios NÃO exige ressarcimento (não há dano patrimonial direto); o prejuízo ao erário EXIGE ressarcimento, além das demais sanções. A alternativa C inverte; A iguala; D ignora que a improbidade não exige enriquecimento pessoal. Esta é a questão mais fina do módulo — exige distinguir as modalidades e suas sanções.'
      },
      {
        id: 'D-DA-24-04',
        tipo: 'autoavaliacao',
        subtopico: 'Legitimidade e responsabilização por improbidade',
        pergunta: 'Você consegue explicar, sem consultar, quem tem legitimidade para propor a ação de improbidade após a Lei 14.230/2021 e a jurisprudência do STF?',
        resposta: 'A Lei 14.230/2021 atribuiu ao Ministério Público a legitimidade para propor a ação de improbidade. O STF, nas ADIs 7042 e 7043, restabeleceu a legitimidade CONCORRENTE e DISJUNTIVA das PESSOAS JURÍDICAS INTERESSADAS (entes públicos lesados), que também podem propor a ação e celebrar acordos de não persecução civil. O cidadão não ajuíza diretamente, mas pode representar ao MP. A legitimidade passiva alcança agentes públicos e terceiros que induzam ou concorram para o ato (art. 3º). Prescrição: 8 anos (regra geral).'
      },
      {
        id: 'D-DA-24-05',
        tipo: 'verdadeiro_falso',
        subtopico: 'Responsabilização de terceiros',
        pergunta: 'Apenas agentes públicos podem ser responsabilizados por improbidade administrativa; terceiros que concorram para o ato não estão sujeitos às sanções da Lei 8.429/1992.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. TERCEIROS que induzam ou concorram para a prática do ato de improbidade também podem ser responsabilizados (art. 3º da Lei 8.429/92). A lei alcança não só o agente público, mas também o particular que participe do esquema (ex.: empresário que paga propina).'
      },
      {
        id: 'D-DA-24-06',
        tipo: 'situacao',
        subtopico: 'Improbidade x irregularidade administrativa',
        pergunta: 'Um servidor, por desorganização pessoal, deixou de arquivar um documento no prazo previsto no manual interno, causando transtorno ao setor, mas sem qualquer dano ao erário ou vantagem pessoal. O chefe ameaça instaurar ação de improbidade administrativa. Sobre o caso, é correto afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Configura improbidade administrativa, pois houve descumprimento de dever funcional.' },
          { id: 'B', texto: 'Não configura improbidade administrativa: trata-se de irregularidade administrativa, sem dolo e sem gravidade suficiente para caracterizar improbidade. A improbidade exige conduta DOLOSA e GRAVE, que viola os deveres de honestidade e atenta contra a Administração — não se confunde com falha formal ou procedimental.' },
          { id: 'C', texto: 'Configura improbidade por atentado a princípios, independentemente de dolo.' },
          { id: 'D', texto: 'Configura improbidade por prejuízo ao erário, ainda que não haja dano.' }
        ],
        gabarito: 'B',
        explicacao: 'Nem toda irregularidade administrativa é improbidade. A IMPROBIDADE exige DOLO (vontade livre e consciente) e GRAVIDADE — conduta desonesta que atenta contra a Administração. A falha no arquivamento de documento, sem dano e sem dolo, é IRREGULARIDADE ADMINISTRATIVA — pode gerar sanções administrativas, mas não improbidade. A alternativa A iguala indevidamente; C ignora a exigência de dolo (Lei 14.230/2021); D ignora a ausência de dano.'
      },
      {
        id: 'D-DA-24-07',
        tipo: 'autoavaliacao',
        subtopico: 'Improbidade administrativa — conceitos fundamentais',
        pergunta: 'Você consegue, sem consultar, diferenciar improbidade de irregularidade administrativa, identificar as três modalidades, explicar a exigência de dolo (após a Lei 14.230/2021) e a legitimidade do MP?',
        resposta: 'IMPROBIDADE x IRREGULARIDADE: conduta dolosa e grave (improbidade) x falha formal/procedimental (irregularidade). MODALIDADES: enriquecimento ilícito (art. 9º), prejuízo ao erário (art. 10) e atentado a princípios (art. 11). DOLO: exigido em todas as modalidades (Lei 14.230/2021) — a modalidade culposa foi extinta. LEGITIMIDADE: ação civil pública pelo MP. TERCEIROS: podem ser responsabilizados se concorrerem para o ato. PRESCRIÇÃO: 8 anos (regra geral).'
      }
    ]
  }
  /* ============================================================
     PRÓXIMO SUB-LOTE (6.2):
     ADM-12, DA-22, DA-24
  ============================================================ */

};
