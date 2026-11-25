/** Diagnóstico por recuperação ativa: ADM-01, ADM-02 e ADM-03. */
export const DIAGNOSTICS = Object.freeze({
  'ADM-01': [
    { subtopicId: 'ADM-01-001', front: 'Uma equipe de voluntários que se reúne uma vez é necessariamente uma organização? O que caracteriza uma organização?', back: 'Não necessariamente. Organização é um conjunto estruturado de pessoas que coordena esforços e recursos para alcançar objetivos comuns. Administrar é planejar, organizar, dirigir e controlar esses recursos e atividades.' },
    { subtopicId: 'ADM-01-002', front: 'Uma prefeitura compra computadores, contrata servidores e utiliza dados de atendimento. Quais recursos organizacionais aparecem?', back: 'Computadores: materiais e tecnológicos; servidores: humanos; dados: informacionais. O dinheiro usado nas compras e contratações é recurso financeiro. Os recursos se complementam para atingir objetivos.' },
    { subtopicId: 'ADM-01-003', front: 'Um setor atingiu a meta de atendimentos, mas gastou muito mais recursos que o previsto. Foi eficaz? Foi eficiente?', back: 'Foi eficaz porque alcançou a meta, mas não foi eficiente no uso dos recursos. Efetividade considera o impacto real gerado; produtividade relaciona a quantidade produzida aos recursos empregados.' },
    { subtopicId: 'ADM-01-004', front: 'Uma chefia define metas, distribui tarefas, orienta a equipe e compara resultados com o planejado. Quais funções administrativas aparecem?', back: 'Planejar: definir metas; organizar: distribuir tarefas e recursos; dirigir: orientar e mobilizar a equipe; controlar: acompanhar resultados, comparar com padrões e corrigir desvios. São funções integradas.' },
    { subtopicId: 'ADM-01-005', front: 'Quem costuma decidir a direção geral de uma instituição, transformar a estratégia em planos setoriais e executar as tarefas diárias?', back: 'Nível estratégico: alta administração, decisões amplas e de longo prazo. Nível tático: gerências, planos de setores. Nível operacional: supervisão e execução das rotinas. Os níveis se articulam.' },
    { subtopicId: 'ADM-01-006', front: 'Um gestor domina um sistema, resolve conflitos na equipe e entende como uma mudança afeta toda a organização. Quais habilidades utiliza?', back: 'Técnica: domínio de métodos e ferramentas; humana: relacionamento, comunicação e cooperação; conceitual: compreensão da organização como um todo e das relações entre suas partes.' }
  ],
  'ADM-02': [
    { subtopicId: 'ADM-02-001', front: 'Uma unidade pública planeja, organiza equipes, orienta servidores e verifica resultados. Essas etapas acontecem apenas uma vez, em ordem rígida?', back: 'Não. Planejamento, organização, direção e controle formam funções interdependentes e contínuas. O controle pode indicar a necessidade de rever o planejamento, e as funções podem ocorrer simultaneamente.' },
    { subtopicId: 'ADM-02-002', front: 'Uma chefia possui três formas de reduzir filas e escolhe uma delas após comparar custos e impactos. Qual a diferença entre planejar e decidir?', back: 'Planejar define objetivos, analisa o contexto e prepara cursos de ação; decidir é selecionar uma alternativa entre as disponíveis. A decisão integra o planejamento, mas decisões também ocorrem nas demais funções administrativas.' },
    { subtopicId: 'ADM-02-003', front: 'Uma secretaria cria setores, atribui responsabilidades e define quem responde a quem. Isso é planejar ou organizar?', back: 'É organizar: estruturar o trabalho, distribuir recursos, responsabilidades e autoridade. Planejar estabelece objetivos e caminhos; organizar prepara a estrutura e os meios para executá-los.' },
    { subtopicId: 'ADM-02-004', front: 'Uma gestora explica prioridades, escuta a equipe e resolve conflitos entre setores. Quais funções ou atividades predominam?', back: 'Predomina a direção, que envolve liderança, comunicação e motivação para mobilizar pessoas. A coordenação busca integrar atividades e evitar esforços desconectados; não se confunde com controle de resultados.' },
    { subtopicId: 'ADM-02-005', front: 'Um setor cumpriu 70% da meta. A chefia compara esse resultado ao padrão e altera o fluxo de atendimento. Que função aparece e quais são seus passos?', back: 'Controle: estabelecer padrões, medir o desempenho, comparar resultados com padrões e adotar ações corretivas quando necessário. Controlar não é apenas punir ou fiscalizar pessoas.' },
    { subtopicId: 'ADM-02-006', front: 'Uma prefeitura quer reduzir o tempo de atendimento ao cidadão. Como as quatro funções administrativas podem atuar juntas?', back: 'Planejar: definir meta e ações; organizar: distribuir pessoal e recursos; dirigir: orientar e mobilizar servidores; controlar: medir tempo de espera e corrigir desvios. O objetivo público é melhorar a prestação do serviço, respeitando as normas aplicáveis.' }
  ],
  'ADM-03': [
    { subtopicId: 'ADM-03-001', front: 'A direção define prioridades para cinco anos, uma gerência cria um plano anual e uma equipe estabelece tarefas semanais. Classifique os níveis de planejamento.', back: 'Estratégico: diretrizes amplas e de longo prazo; tático: desdobramento por áreas ou unidades; operacional: rotinas e tarefas detalhadas. Horizontes são típicos, não prazos legais fixos.' },
    { subtopicId: 'ADM-03-002', front: 'Uma instituição declara “prestar atendimento acessível”, deseja “ser referência em qualidade” e adota “transparência e respeito”. O que é missão, visão e valores?', back: 'Missão: razão de existir e propósito atual; visão: situação futura desejada; valores: princípios que orientam decisões e comportamentos. Não são sinônimos de metas numéricas.' },
    { subtopicId: 'ADM-03-003', front: 'Uma secretaria deseja melhorar o atendimento, fixa reduzir a espera para 15 minutos e decide implantar agendamento. Diferencie objetivo, meta e estratégia.', back: 'Objetivo: resultado desejado, como melhorar atendimento; meta: resultado específico e mensurável, como espera de até 15 minutos; estratégia: caminho escolhido, como agendamento. O plano detalha ações, responsáveis e recursos.' },
    { subtopicId: 'ADM-03-004', front: 'Uma equipe tem servidores experientes, sistemas antigos, recebe verba de programa externo e enfrenta mudança na demanda. Como classificar esses fatores na SWOT?', back: 'Forças e fraquezas são fatores internos: experiência da equipe (força) e sistemas antigos (fraqueza). Oportunidades e ameaças são externas: verba disponível (oportunidade) e mudança desfavorável da demanda (ameaça). A classificação depende do contexto.' },
    { subtopicId: 'ADM-03-005', front: 'Um gestor mede apenas o gasto mensal e afirma que isso basta para avaliar toda a estratégia. Como o Balanced Scorecard amplia essa visão?', back: 'O BSC traduz a estratégia em objetivos e indicadores articulados, considerando perspectivas além da financeira. No setor público, as perspectivas podem ser adaptadas à missão e ao valor entregue à sociedade; não há obrigação de copiar mecanicamente o modelo privado.' },
    { subtopicId: 'ADM-03-006', front: 'Um órgão mede quantos atendimentos realizou e também quantos cidadãos tiveram o problema resolvido. Qual a diferença entre esses indicadores e o papel do mapa estratégico?', back: 'Quantidade de atendimentos é um indicador de produção; resolução de demandas aproxima-se de resultado ou qualidade. Indicadores precisam refletir objetivos; o mapa estratégico representa relações entre objetivos, geralmente em lógica de causa e efeito, sem provar causalidade automaticamente.' }
  ],
"ADM-04": [
  {
    "subtopicId": "ADM-04-001",
    "front": "Por que separar atividades sem integrar informações pode aumentar filas?",
    "back": "Divisão do trabalho especializa tarefas e exige coordenação. Uma unidade de atendimento separa triagem, análise e entrega; precisa de comunicação entre as etapas para evitar retrabalho."
  },
  {
    "subtopicId": "ADM-04-002",
    "front": "Uma ordem fora da competência institucional torna-se válida por vir da chefia?",
    "back": "Hierarquia estabelece níveis de autoridade; responsabilidade acompanha o dever de executar e prestar contas. Uma chefia distribui demandas e acompanha prazos; cada servidor responde pelas tarefas sob sua atribuição."
  },
  {
    "subtopicId": "ADM-04-003",
    "front": "Por que uma equipe experiente pode admitir maior amplitude de controle?",
    "back": "Delegação transfere o exercício de atribuições nos limites permitidos; amplitude de controle é o número de subordinados diretamente supervisionados. Uma coordenadora autoriza supervisores a decidir escalas dentro das regras e mantém acompanhamento dos resultados."
  },
  {
    "subtopicId": "ADM-04-004",
    "front": "Qual decisão deve ser uniforme e qual pode ser adaptada pela unidade?",
    "back": "Centralização concentra decisões em níveis superiores; descentralização distribui decisões ou execução para unidades com maior autonomia. Uma rede de escolas deixa compras estratégicas na sede e permite ajustar horários de atendimento nas unidades."
  },
  {
    "subtopicId": "ADM-04-005",
    "front": "Que critério predomina em uma equipe dedicada a idosos e outra a estudantes?",
    "back": "Departamentalização agrupa atividades segundo critérios como função, produto, clientela, território ou processo. Um órgão cria unidades regionais para atender localidades distintas e mantém setor central de tecnologia."
  },
  {
    "subtopicId": "ADM-04-006",
    "front": "Qual risco surge quando duas chefias dão prioridades incompatíveis?",
    "back": "Organograma representa relações formais; estruturas funcional, divisional e matricial combinam autoridade de formas distintas. Uma equipe de projeto responde ao gerente do projeto e mantém vínculo técnico com a coordenação de informática."
  }
],
"ADM-05": [
  {
    "subtopicId": "ADM-05-001",
    "front": "Como a percepção de justiça afeta a aceitação de uma mudança?",
    "back": "Dirigir significa mobilizar pessoas para executar planos, envolvendo comunicação, orientação e liderança. Uma chefia explica a finalidade de novo protocolo, escuta dificuldades e acompanha a adoção da rotina."
  },
  {
    "subtopicId": "ADM-05-002",
    "front": "Uma referência técnica pode liderar sem assinar decisões da chefia?",
    "back": "Liderança é influência sobre pessoas; autoridade formal decorre do cargo; poder é capacidade de influenciar comportamentos. Uma servidora experiente orienta colegas sobre sistema novo sem ser superior hierárquica."
  },
  {
    "subtopicId": "ADM-05-003",
    "front": "Por que a urgência pode alterar o estilo de liderança adotado?",
    "back": "Estilos clássicos de liderança incluem autocrático, democrático e liberal (laissez-faire). Em uma emergência operacional, a chefia decide rapidamente; ao redesenhar o atendimento, consulta servidores."
  },
  {
    "subtopicId": "ADM-05-004",
    "front": "Como a experiência da equipe altera o nível de orientação necessário?",
    "back": "Teorias de liderança investigam traços, comportamentos e adequação às situações. Uma chefia oferece instrução detalhada a iniciantes e amplia autonomia quando a equipe ganha experiência."
  },
  {
    "subtopicId": "ADM-05-005",
    "front": "Por que um ambiente confortável pode não gerar entusiasmo com o trabalho?",
    "back": "Maslow propôs uma hierarquia de necessidades; Herzberg distinguiu fatores higiênicos e motivacionais. Um setor melhora iluminação e equipamentos, reduz queixas, mas ainda precisa oferecer tarefas significativas e reconhecimento."
  },
  {
    "subtopicId": "ADM-05-006",
    "front": "Por que uma recompensa valiosa pode não motivar se a pessoa acha impossível alcançá-la?",
    "back": "McGregor contrapôs pressupostos gerenciais X e Y; outras abordagens destacam expectativas e equidade. Uma chefia amplia autonomia e oferece recursos porque acredita na capacidade da equipe de assumir compromissos."
  }
],
"ADM-06": [
  {
    "subtopicId": "ADM-06-001",
    "front": "O que fazer se a meta era irrealista desde o início?",
    "back": "Controle compara resultados com padrões e orienta correções e aprendizagem. Uma biblioteca compara prazo médio de empréstimo com a meta e ajusta o fluxo quando surgem atrasos."
  },
  {
    "subtopicId": "ADM-06-002",
    "front": "Como evitar que uma meta de velocidade incentive atendimentos incompletos?",
    "back": "Indicadores são medidas de desempenho; padrões e metas fornecem referências para avaliação. Um órgão mede tempo médio de atendimento e percentual de solicitações resolvidas, não apenas volume de senhas distribuídas."
  },
  {
    "subtopicId": "ADM-06-003",
    "front": "Qual tipo de controle permite corrigir uma entrega enquanto ainda ocorre?",
    "back": "Controle preventivo ocorre antes, concomitante durante e posterior depois da execução. Antes de publicar edital, a equipe revisa requisitos; durante o contrato, fiscaliza entregas; depois, avalia resultados."
  },
  {
    "subtopicId": "ADM-06-004",
    "front": "Por que trocar um formulário sem investigar a causa pode não resolver atrasos?",
    "back": "Ação corretiva enfrenta desvios; melhoria contínua procura aperfeiçoar processos de modo recorrente. Após reclamações de atrasos, a equipe identifica falha no fluxo de documentos, testa novo procedimento e acompanha os indicadores."
  },
  {
    "subtopicId": "ADM-06-005",
    "front": "Por que cumprir uma meta não dispensa verificar legalidade do gasto?",
    "back": "Controle gerencial apoia a gestão; controle da Administração Pública envolve mecanismos internos, externos e sociais. Uma secretaria monitora gastos e metas; órgão de controle interno verifica procedimentos; cidadãos acompanham dados públicos."
  }
],
  "ADM-07": [
  {
    "subtopicId": "ADM-07-001",
    "front": "Ao identificar falhas de atendimento recorrentes, qual decisão revela gestão de pessoas integrada? Explique o raciocínio antes de virar o cartão.",
    "back": "Investigar competências e condições de trabalho antes de planejar desenvolvimento. Gestão de pessoas articula políticas para atrair, integrar, desenvolver, reconhecer e acompanhar pessoas de acordo com objetivos organizacionais. Não se limita ao departamento de pessoal: rotinas de folha e registros são necessárias, mas não substituem decisões sobre competências e ambiente de trabalho."
  },
  {
    "subtopicId": "ADM-07-002",
    "front": "Qual ação corresponde à integração de novos servidores? Explique o raciocínio antes de virar o cartão.",
    "back": "Apresentar rotinas, responsabilidades, canais de apoio e padrões de atendimento. Recrutamento busca atrair candidatos; seleção compara requisitos e perfis; integração apresenta atribuições, processos e cultura de trabalho. Na Administração Pública, o ingresso em cargo efetivo observa, como regra, concurso público; técnicas de recrutamento empresarial não substituem exigências constitucionais."
  },
  {
    "subtopicId": "ADM-07-003",
    "front": "O setor aprendeu um sistema, mas continua cometendo erros por falta de acesso. Qual decisão é mais adequada? Explique o raciocínio antes de virar o cartão.",
    "back": "Corrigir a barreira de acesso e avaliar a aplicação prática do treinamento. Treinamento costuma focalizar competências necessárias ao desempenho atual; desenvolvimento amplia capacidades para desafios e responsabilidades futuras. Aprendizagem envolve aquisição e aplicação de conhecimentos; participar de curso não garante transferência para o trabalho."
  },
  {
    "subtopicId": "ADM-07-004",
    "front": "Como avaliar um atendente que resolve casos complexos com menos atendimentos diários? Explique o raciocínio antes de virar o cartão.",
    "back": "Combinar indicadores quantitativos e qualitativos, considerando complexidade e critérios conhecidos. Avaliação de desempenho compara resultados e comportamentos observáveis com critérios previamente definidos; gestão por competências identifica conhecimentos, habilidades e atitudes requeridos. Avaliar não é apenas atribuir nota: critérios, evidências e devolutiva permitem decisões de desenvolvimento."
  },
  {
    "subtopicId": "ADM-07-005",
    "front": "O que indica melhoria do clima sem necessariamente alterar a cultura de imediato? Explique o raciocínio antes de virar o cartão.",
    "back": "Aumento da percepção de apoio e diálogo após mudanças na liderança. Cultura reúne valores, pressupostos e práticas compartilhados; clima expressa percepções das pessoas sobre o ambiente de trabalho em determinado período. Clima pode mudar relativamente rápido; cultura tende a ser mais profunda e persistente, embora também possa mudar."
  },
  {
    "subtopicId": "ADM-07-006",
    "front": "Qual medida atua sobre uma causa estrutural de desgaste no trabalho? Explique o raciocínio antes de virar o cartão.",
    "back": "Revisar carga de tarefas e condições físicas de execução do serviço. Qualidade de vida no trabalho envolve condições de trabalho, saúde, segurança, reconhecimento, equilíbrio e relações respeitosas. Ações recreativas podem ajudar, mas não substituem medidas estruturais sobre sobrecarga, ergonomia e organização do trabalho."
  }
],
  "ADM-08": [
  {
    "subtopicId": "ADM-08-001",
    "front": "Como reduzir erros causados por siglas desconhecidas em uma orientação? Explique o raciocínio antes de virar o cartão.",
    "back": "Explicar termos e pedir confirmação de entendimento por meio de feedback. Comunicação envolve emissor, mensagem, canal, receptor, contexto e feedback; ruídos podem alterar a compreensão. Transmitir uma mensagem não garante entendimento; o feedback ajuda a verificar se o significado foi compartilhado."
  },
  {
    "subtopicId": "ADM-08-002",
    "front": "Qual exemplo caracteriza comunicação ascendente? Explique o raciocínio antes de virar o cartão.",
    "back": "Um servidor informa à chefia dificuldades encontradas no atendimento. Comunicação formal segue canais instituídos; informal surge das interações cotidianas. Fluxos podem ser descendentes, ascendentes ou horizontais. Informal não significa necessariamente falsa; formal não significa necessariamente eficaz."
  },
  {
    "subtopicId": "ADM-08-003",
    "front": "Qual devolutiva favorece aprendizagem após um erro de protocolo? Explique o raciocínio antes de virar o cartão.",
    "back": "Descrever o procedimento, ouvir o contexto e pactuar uma correção concreta. Feedback útil descreve comportamentos observáveis, seus efeitos e possibilidades de melhoria; escuta ativa busca compreender antes de responder. Feedback não se confunde com crítica pessoal; ouvir ativamente não significa concordar com tudo."
  },
  {
    "subtopicId": "ADM-08-004",
    "front": "Qual prática demonstra interdependência e colaboração entre setores? Explique o raciocínio antes de virar o cartão.",
    "back": "Definir responsabilidades e pontos de repasse entre protocolo e arquivo. Equipes coordenam esforços em torno de objetivos comuns, com interdependência, responsabilidades definidas e comunicação. Estar no mesmo setor não garante trabalho em equipe; colaboração exige integração real das atividades."
  },
  {
    "subtopicId": "ADM-08-005",
    "front": "Qual abordagem enfrenta um conflito de agenda entre duas equipes? Explique o raciocínio antes de virar o cartão.",
    "back": "Identificar necessidades de ambas e negociar critérios transparentes de uso. Conflitos surgem de interesses, percepções ou necessidades divergentes; negociação busca construir encaminhamentos aceitáveis com diálogo e critérios. Conflito não é sempre prejudicial: divergências bem tratadas podem revelar problemas e produzir melhorias."
  }
],
  "ADM-09": [
  {
    "subtopicId": "ADM-09-001",
    "front": "Qual medida melhora a qualidade sem afastar requisitos legais? Explique o raciocínio antes de virar o cartão.",
    "back": "Simplificar orientações e reduzir etapas desnecessárias, mantendo exigências obrigatórias. Qualidade relaciona-se à capacidade de processos e serviços atenderem requisitos e necessidades legítimas dos usuários. No serviço público, satisfação do usuário importa, mas não autoriza descumprir regras de legalidade, equidade e interesse público."
  },
  {
    "subtopicId": "ADM-09-002",
    "front": "Qual iniciativa expressa melhoria contínua? Explique o raciocínio antes de virar o cartão.",
    "back": "Medir retrabalho, corrigir sua causa e verificar o efeito da mudança. Gestão da qualidade total envolve compromisso organizacional amplo com processos, prevenção de falhas e foco no usuário; melhoria contínua busca aperfeiçoamentos sucessivos. Qualidade não depende apenas da inspeção final; prevenir erros ao longo do processo tende a ser mais eficaz."
  },
  {
    "subtopicId": "ADM-09-003",
    "front": "Após testar novo agendamento, a unidade compara o tempo de espera com a meta. Qual etapa é essa? Explique o raciocínio antes de virar o cartão.",
    "back": "Check: verificar resultados e confrontá-los com o objetivo planejado. PDCA organiza melhoria em Planejar (Plan), Executar (Do), Verificar (Check) e Agir/Ajustar (Act). Verificar resultados não é o mesmo que executar; agir inclui padronizar melhorias eficazes ou corrigir desvios."
  },
  {
    "subtopicId": "ADM-09-004",
    "front": "Para levantar causas possíveis de atrasos antes de investigá-las, qual ferramenta é adequada? Explique o raciocínio antes de virar o cartão.",
    "back": "Diagrama de Ishikawa, seguido de verificação das hipóteses levantadas. O diagrama de Ishikawa organiza possíveis causas de um problema; o gráfico de Pareto ordena categorias por frequência ou impacto para orientar prioridades. Ishikawa não prova causalidade sozinho; Pareto não determina automaticamente a causa-raiz."
  },
  {
    "subtopicId": "ADM-09-005",
    "front": "O plano de ação já definiu responsáveis e prazos. Como verificar se melhorou o serviço? Explique o raciocínio antes de virar o cartão.",
    "back": "Acompanhar um indicador de espera com método de medição consistente. 5W2H estrutura um plano de ação com o quê, por quê, onde, quando, quem, como e quanto custa; indicadores acompanham resultados ou processos. Preencher 5W2H não demonstra que uma ação funcionou; indicadores e acompanhamento permitem verificar efeitos."
  }
],
"ADM-10": [
  {
    "subtopicId": "ADM-10-001",
    "front": "Qual a diferença entre classificar, especificar e codificar um material?",
    "back": "Classificar agrupa itens; especificar descreve atributos técnicos; codificar atribui identificação padronizada. Um código não substitui uma especificação suficiente."
  },
  {
    "subtopicId": "ADM-10-002",
    "front": "O recebimento de materiais termina ao descarregar as caixas?",
    "back": "Não. É necessário conferir documentos, quantidade e conformidade conforme o procedimento aplicável; armazenar envolve localização, conservação e rastreabilidade."
  },
  {
    "subtopicId": "ADM-10-003",
    "front": "Por que estoque elevado nem sempre é bom?",
    "back": "Pode evitar faltas, mas aumenta custos de espaço, capital, perdas e obsolescência. O equilíbrio depende da demanda e do prazo de reposição."
  },
  {
    "subtopicId": "ADM-10-004",
    "front": "Diferencie estoque de segurança, ponto de pedido e giro.",
    "back": "Estoque de segurança protege contra incertezas; ponto de pedido sinaliza a reposição considerando demanda e prazo; giro mede renovação do estoque em um período."
  },
  {
    "subtopicId": "ADM-10-005",
    "front": "Para que serve o inventário se o sistema já registra todos os itens?",
    "back": "O inventário confronta quantidades físicas e registros, identifica divergências e subsidia apuração. Almoxarifado recebe, guarda e distribui materiais."
  },
  {
    "subtopicId": "ADM-10-006",
    "front": "Tombamento significa que um bem jamais poderá ser baixado?",
    "back": "Não. Tombamento identifica e registra o bem; baixa retira-o do controle patrimonial segundo procedimento aplicável, não sendo sinônimo de descarte físico."
  }
],
"ADM-11": [
  {
    "subtopicId": "ADM-11-001",
    "front": "Diferencie processo, atividade, tarefa e procedimento.",
    "back": "Processo articula atividades para transformar entradas em resultados; atividade reúne trabalhos; tarefa é ação específica; procedimento descreve como executar uma ação."
  },
  {
    "subtopicId": "ADM-11-002",
    "front": "Atendimento ao cidadão é sempre processo de apoio?",
    "back": "Não. Processos finalísticos entregam valor ligado à missão institucional; processos de apoio oferecem meios. A classificação depende da finalidade do órgão."
  },
  {
    "subtopicId": "ADM-11-003",
    "front": "O que caracteriza a gestão por processos?",
    "back": "Acompanha fluxos ponta a ponta e resultados entre setores, sem necessariamente eliminar departamentos; requer responsabilidades e indicadores ao longo do processo."
  },
  {
    "subtopicId": "ADM-11-004",
    "front": "Qual a diferença entre fluxograma e organograma?",
    "back": "Fluxograma representa etapas, decisões e caminhos de um processo; organograma representa unidades e relações hierárquicas. Um processo pode atravessar vários setores."
  },
  {
    "subtopicId": "ADM-11-005",
    "front": "Como identificar um gargalo sem simplesmente culpar um setor?",
    "back": "Examinar filas, tempos, capacidade e retrabalho. Gargalo é uma restrição ao fluxo; melhorar uma etapa não restritiva pode não reduzir o prazo total."
  }
],
"ADM-12": [
  {
    "subtopicId": "ADM-12-001",
    "front": "Qualidade no atendimento exige atender a todo pedido do cidadão?",
    "back": "Não. Exige informação correta, respeito, clareza, acessibilidade e orientação, mesmo quando o pedido não pode ser deferido segundo as regras."
  },
  {
    "subtopicId": "ADM-12-002",
    "front": "Linguagem clara é a mesma coisa que informalidade excessiva?",
    "back": "Não. Linguagem clara preserva precisão e compreensão; postura profissional inclui respeito, discrição e comunicação adequada ao público."
  },
  {
    "subtopicId": "ADM-12-003",
    "front": "Quais cuidados mudam entre atendimento presencial, telefônico e digital?",
    "back": "Todos exigem orientação, registro adequado e proteção de dados; cada canal demanda recursos específicos de comunicação, confirmação de entendimento e acessibilidade."
  },
  {
    "subtopicId": "ADM-12-004",
    "front": "Atender todas as pessoas de modo idêntico garante acessibilidade?",
    "back": "Não necessariamente. Barreiras distintas podem exigir adaptações razoáveis para assegurar acesso efetivo e equitativo."
  },
  {
    "subtopicId": "ADM-12-005",
    "front": "Como administrar conflitos sem prometer algo fora da competência do órgão?",
    "back": "Escutar, esclarecer critérios, explicar limites e encaminhamentos e registrar quando cabível, respeitando regras e evitando privilégios."
  }
],
"AP-13": [
  {
    "subtopicId": "AP-13-001",
    "front": "Como você diferenciaria os conceitos centrais de administração pública: sentidos e conceitos em uma situação concreta?",
    "back": "Em sentido subjetivo, Administração Pública designa os sujeitos que exercem atividade administrativa. O sentido objetivo diz respeito à atividade administrativa desempenhada. Exemplo: Uma autarquia é exemplo de sujeito administrativo; fiscalizar determinado serviço é exemplo de atividade administrativa."
  },
  {
    "subtopicId": "AP-13-002",
    "front": "Como você diferenciaria os conceitos centrais de administração direta e indireta: visão geral em uma situação concreta?",
    "back": "Órgãos da administração direta integram a pessoa política e, em regra, não possuem personalidade jurídica própria. Entidades da administração indireta possuem personalidade jurídica própria. Exemplo: Uma secretaria municipal é órgão da administração direta; uma autarquia municipal é entidade da administração indireta."
  },
  {
    "subtopicId": "AP-13-003",
    "front": "Como você diferenciaria os conceitos centrais de interesse público e finalidade pública em uma situação concreta?",
    "back": "O agente público deve orientar sua atuação à finalidade pública estabelecida pelo ordenamento. Interesse público não se confunde com vantagem pessoal do agente. Exemplo: Um gestor não pode direcionar atendimento prioritário a amigos alegando interesse público."
  },
  {
    "subtopicId": "AP-13-004",
    "front": "Como você diferenciaria os conceitos centrais de estado, governo e administração pública em uma situação concreta?",
    "back": "Governo relaciona-se à direção política do Estado, enquanto Administração Pública executa atividades administrativas. O Estado possui continuidade institucional para além da alternância de governos. Exemplo: A troca de prefeito altera a direção política, mas não extingue a personalidade jurídica do município."
  }
],
"AP-14": [
  {
    "subtopicId": "AP-14-001",
    "front": "Como você diferenciaria os conceitos centrais de modelo patrimonialista em uma situação concreta?",
    "back": "No patrimonialismo, a confusão entre interesses privados do governante e patrimônio público é característica central. Relações pessoais e favorecimentos são traços associados ao patrimonialismo. Exemplo: Um dirigente distribui cargos como recompensa a parentes e aliados, sem critérios impessoais."
  },
  {
    "subtopicId": "AP-14-002",
    "front": "Como você diferenciaria os conceitos centrais de modelo burocrático em uma situação concreta?",
    "back": "A burocracia valoriza regras formais, impessoalidade e profissionalização. A previsibilidade e a hierarquia formal integram a lógica burocrática. Exemplo: Uma seleção por critérios impessoais e procedimentos documentados expressa traços burocráticos."
  },
  {
    "subtopicId": "AP-14-003",
    "front": "Como você diferenciaria os conceitos centrais de modelo gerencial em uma situação concreta?",
    "back": "O modelo gerencial valoriza resultados e avaliação de desempenho na prestação de serviços. Indicadores e responsabilização podem apoiar o foco em resultados. Exemplo: Um órgão acompanha prazo e qualidade do atendimento e corrige processos com base nos indicadores."
  },
  {
    "subtopicId": "AP-14-004",
    "front": "Como você diferenciaria os conceitos centrais de comparação entre os modelos em uma situação concreta?",
    "back": "O patrimonialismo se associa ao personalismo; a burocracia, à impessoalidade formal; o gerencialismo, a resultados. Traços de modelos distintos podem coexistir em uma mesma instituição. Exemplo: Um setor usa regras formais de seleção e indicadores de qualidade, combinando traços burocráticos e gerenciais."
  },
  {
    "subtopicId": "AP-14-005",
    "front": "Como você diferenciaria os conceitos centrais de reformas administrativas e gestão pública brasileira em uma situação concreta?",
    "back": "O Plano Diretor de 1995 é associado à agenda de reforma gerencial do Estado brasileiro. O Decreto-Lei 200/1967 é marco relevante na organização administrativa federal. Exemplo: Um órgão moderniza a gestão por indicadores sem dispensar prestação de contas."
  }
],
"DA-15": [
  {
    "subtopicId": "DA-15-001",
    "front": "Como você diferenciaria os conceitos centrais de princípios expressos do art. 37 da constituição em uma situação concreta?",
    "back": "Legalidade, impessoalidade, moralidade, publicidade e eficiência estão expressos no caput do art. 37 da Constituição. O caput do art. 37 alcança administração direta e indireta dos entes federativos. Exemplo: Uma autarquia estadual deve observar os princípios do caput do art. 37."
  },
  {
    "subtopicId": "DA-15-002",
    "front": "Como você diferenciaria os conceitos centrais de legalidade, impessoalidade e moralidade em uma situação concreta?",
    "back": "A legalidade administrativa exige fundamento e conformidade com o ordenamento jurídico. A impessoalidade impede favorecimentos pessoais no exercício da função. Exemplo: Um servidor não pode antecipar atendimento de amigo sem critério legal de prioridade."
  },
  {
    "subtopicId": "DA-15-003",
    "front": "Como você diferenciaria os conceitos centrais de publicidade e eficiência em uma situação concreta?",
    "back": "A publicidade administrativa admite limites jurídicos relacionados a sigilo e proteção de dados. Eficiência exige atenção à qualidade dos resultados e ao uso dos recursos. Exemplo: Um portal informa gastos públicos sem expor desnecessariamente dados pessoais protegidos."
  },
  {
    "subtopicId": "DA-15-004",
    "front": "Como você diferenciaria os conceitos centrais de supremacia e indisponibilidade do interesse público em uma situação concreta?",
    "back": "A indisponibilidade impede que o gestor trate bens e interesses públicos como propriedade particular. Prerrogativas administrativas devem ser exercidas dentro dos limites jurídicos. Exemplo: Um gestor não pode perdoar dívida pública por amizade sem fundamento legal."
  },
  {
    "subtopicId": "DA-15-005",
    "front": "Como você diferenciaria os conceitos centrais de razoabilidade, proporcionalidade e motivação em uma situação concreta?",
    "back": "A proporcionalidade envolve adequação, necessidade e ponderação da medida. Motivação permite compreender os fundamentos fáticos e jurídicos de uma decisão. Exemplo: Antes de restringir acesso a um serviço, o órgão avalia alternativas menos gravosas e justifica a decisão."
  },
  {
    "subtopicId": "DA-15-006",
    "front": "Como você diferenciaria os conceitos centrais de autotutela, segurança jurídica e continuidade em uma situação concreta?",
    "back": "Autotutela permite à Administração revisar seus atos nos limites do ordenamento. Segurança jurídica valoriza estabilidade e proteção da confiança legítima. Exemplo: Uma administração identifica ilegalidade em ato anterior e examina sua anulação, respeitando garantias aplicáveis."
  }
],
"DA-16": [
  {
    "subtopicId": "DA-16-001",
    "front": "Qual a diferença ou limite essencial de administração direta e órgãos públicos? Dê um exemplo de concurso.",
    "back": "Órgãos integram pessoas políticas e, em regra, não possuem personalidade jurídica própria. Órgãos são centros de competências e podem integrar diferentes Poderes. Exemplo: Uma secretaria estadual atua em nome do próprio estado, não como pessoa jurídica distinta."
  },
  {
    "subtopicId": "DA-16-002",
    "front": "Qual a diferença ou limite essencial de autarquias e fundações públicas? Dê um exemplo de concurso.",
    "back": "Autarquias são pessoas jurídicas de direito público criadas diretamente por lei específica. A instituição de fundações públicas segue o regime constitucional aplicável e sua natureza jurídica exige análise. Exemplo: Uma autarquia previdenciária tem personalidade própria e se sujeita à supervisão finalística prevista em lei."
  },
  {
    "subtopicId": "DA-16-003",
    "front": "Qual a diferença ou limite essencial de empresas públicas e sociedades de economia mista? Dê um exemplo de concurso.",
    "back": "Empresa pública admite capital integralmente público e pode adotar formas societárias admitidas em direito. Sociedade de economia mista é constituída sob a forma de sociedade anônima e possui controle estatal. Exemplo: Uma estatal que presta serviço público possui personalidade de direito privado, sem se confundir com órgão."
  },
  {
    "subtopicId": "DA-16-004",
    "front": "Qual a diferença ou limite essencial de centralização e descentralização? Dê um exemplo de concurso.",
    "back": "Centralização ocorre quando a própria pessoa política desempenha atividade por seus órgãos. Descentralização envolve atribuição de execução a outra pessoa jurídica, conforme o instrumento jurídico. Exemplo: Um município presta serviço por secretaria e descentraliza outra atividade a autarquia."
  },
  {
    "subtopicId": "DA-16-005",
    "front": "Qual a diferença ou limite essencial de concentração e desconcentração? Dê um exemplo de concurso.",
    "back": "Desconcentração distribui competências internamente entre órgãos de uma mesma pessoa jurídica. Concentração reúne atribuições em menor número de órgãos da mesma pessoa jurídica. Exemplo: Um ministério cria unidades regionais sem constituir novas pessoas jurídicas."
  },
  {
    "subtopicId": "DA-16-006",
    "front": "Qual a diferença ou limite essencial de entidades e vínculos de supervisão? Dê um exemplo de concurso.",
    "back": "Entidades da administração indireta têm personalidade jurídica própria e se submetem aos controles legalmente previstos. A vinculação para controle finalístico não se confunde com subordinação hierárquica típica entre órgãos. Exemplo: Um ministério acompanha metas de autarquia vinculada, sem dirigir cada ato como chefia interna."
  }
],
"DA-17": [
  {
    "subtopicId": "DA-17-001",
    "front": "Qual a diferença ou limite essencial de conceito e classificação de agentes públicos? Dê um exemplo de concurso.",
    "back": "Agente público é categoria ampla que abrange quem exerce função estatal, mesmo transitoriamente, nas hipóteses jurídicas cabíveis. A classificação doutrinária pode distinguir agentes políticos, servidores e particulares em colaboração. Exemplo: Um mesário convocado pode exercer função pública temporária sem ocupar cargo efetivo."
  },
  {
    "subtopicId": "DA-17-002",
    "front": "Qual a diferença ou limite essencial de cargo, emprego e função pública? Dê um exemplo de concurso.",
    "back": "Cargo público é unidade de atribuições criada nos termos da lei e vinculada a regime jurídico próprio. Emprego público costuma relacionar-se a vínculo contratual regido pela CLT, observadas normas constitucionais. Exemplo: Uma empresa pública contrata empregado público, enquanto autarquia pode prover cargo estatutário."
  },
  {
    "subtopicId": "DA-17-003",
    "front": "Qual a diferença ou limite essencial de ingresso, provimento e vacância? Dê um exemplo de concurso.",
    "back": "A investidura em cargo ou emprego público depende, em regra, de aprovação prévia em concurso, ressalvadas exceções constitucionais. Provimento refere-se ao preenchimento do cargo; vacância, à desocupação nas hipóteses legais. Exemplo: Após concurso, candidata é nomeada e toma posse conforme regras; exoneração posterior gera vacância."
  },
  {
    "subtopicId": "DA-17-004",
    "front": "Qual a diferença ou limite essencial de direitos, deveres e proibições? Dê um exemplo de concurso.",
    "back": "Direitos e deveres dos servidores dependem do regime jurídico aplicável e das normas constitucionais. Deveres funcionais podem incluir zelo, urbanidade e observância de ordens legais. Exemplo: Servidor estadual consulta seu estatuto próprio antes de presumir licença prevista em lei federal."
  },
  {
    "subtopicId": "DA-17-005",
    "front": "Qual a diferença ou limite essencial de responsabilidades e acumulação? Dê um exemplo de concurso.",
    "back": "Responsabilidades civil, penal e administrativa podem coexistir, respeitados os requisitos de cada esfera. Acumulação remunerada de cargos depende das exceções constitucionais e da compatibilidade de horários. Exemplo: Uma professora verifica se o segundo cargo é acumulável constitucionalmente e se os horários são compatíveis."
  },
  {
    "subtopicId": "DA-17-006",
    "front": "Qual a diferença ou limite essencial de regimes jurídicos e legislação aplicável? Dê um exemplo de concurso.",
    "back": "O regime jurídico depende do ente, da entidade, do vínculo e da legislação pertinente. Para cargos estaduais do RN, a legislação local deve ser consultada, sem confusão com o estatuto federal. Exemplo: Antes de responder sobre licença de servidor do RN, o candidato identifica o regime local aplicável."
  }
],
"DA-18": [
  {
    "subtopicId": "DA-18-001",
    "front": "Qual a diferença ou limite essencial de poder hierárquico? Dê um exemplo de concurso.",
    "back": "Poder hierárquico organiza, coordena e distribui funções dentro de estrutura administrativa hierarquizada. Delegação e avocação de competências obedecem a limites legais e não são irrestritas. Exemplo: Uma chefia redistribui tarefas entre unidades subordinadas dentro de suas competências."
  },
  {
    "subtopicId": "DA-18-002",
    "front": "Qual a diferença ou limite essencial de poder disciplinar? Dê um exemplo de concurso.",
    "back": "Poder disciplinar permite apurar e sancionar infrações funcionais ou de pessoas submetidas a vínculo especial, nos termos legais. A aplicação de sanção exige respeito ao devido processo e às garantias pertinentes. Exemplo: A administração instaura procedimento adequado para apurar possível infração funcional."
  },
  {
    "subtopicId": "DA-18-003",
    "front": "Qual a diferença ou limite essencial de poder regulamentar e normativo? Dê um exemplo de concurso.",
    "back": "Poder regulamentar permite editar atos gerais para fiel execução da lei nos limites constitucionais. Há hipóteses constitucionais específicas de decretos autônomos, com limites expressos. Exemplo: Um decreto detalha procedimentos de execução de lei sem inovar contra seu conteúdo."
  },
  {
    "subtopicId": "DA-18-004",
    "front": "Qual a diferença ou limite essencial de poder de polícia? Dê um exemplo de concurso.",
    "back": "Poder de polícia condiciona ou restringe atividades e direitos individuais em benefício de interesses coletivos juridicamente protegidos. Seu exercício está sujeito a legalidade, finalidade, proporcionalidade e controle. Exemplo: Fiscalização sanitária verifica requisitos de funcionamento de estabelecimento conforme a lei."
  },
  {
    "subtopicId": "DA-18-005",
    "front": "Qual a diferença ou limite essencial de abuso de poder: excesso e desvio de finalidade? Dê um exemplo de concurso.",
    "back": "Excesso de poder ocorre quando agente extrapola limites de competência. Desvio de finalidade ocorre quando competência é exercida para fim diverso do previsto em lei. Exemplo: Fiscal competente aplica sanção para perseguir desafeto: a finalidade desviada compromete o ato."
  }
],
"DA-19": [
  {
    "subtopicId": "DA-19-001",
    "front": "Qual é a distinção central em conceito e elementos do ato administrativo? Dê um exemplo.",
    "back": "O ato administrativo é manifestação unilateral da Administração, sob regime de direito público, destinada a produzir efeitos jurídicos; em formulação clássica, seus elementos são competência, finalidade, forma, motivo e objeto.. O ato administrativo deve ser distinguido de fatos administrativos e atos regidos predominantemente pelo direito privado. Exemplo: Uma autorização administrativa produz efeitos jurídicos; a simples execução material de uma limpeza não é, por si, o mesmo ato."
  },
  {
    "subtopicId": "DA-19-002",
    "front": "Qual é a distinção central em competência, finalidade, forma, motivo e objeto? Dê um exemplo.",
    "back": "Competência identifica quem pode praticar o ato; finalidade é o resultado público juridicamente previsto; forma é a exteriorização; motivo são pressupostos de fato e direito; objeto é o efeito jurídico imediato.. Motivo corresponde aos pressupostos de fato e de direito, enquanto objeto é o conteúdo jurídico produzido. Exemplo: Uma licença emitida por autoridade incompetente pode conter motivo verdadeiro, mas ainda apresentar vício de competência."
  },
  {
    "subtopicId": "DA-19-003",
    "front": "Qual é a distinção central em atributos dos atos administrativos? Dê um exemplo.",
    "back": "Presunção de legitimidade e veracidade, imperatividade, autoexecutoriedade e tipicidade são atributos estudados pela doutrina, mas não se apresentam igualmente em todos os atos. A presunção de legitimidade é relativa e admite prova em contrário. Exemplo: Uma certidão não impõe obrigação ao destinatário; uma ordem de polícia pode ter caráter imperativo."
  },
  {
    "subtopicId": "DA-19-004",
    "front": "Qual é a distinção central em classificações e espécies? Dê um exemplo.",
    "back": "A classificação pode considerar destinatários, alcance, formação da vontade, efeitos e grau de liberdade; espécies doutrinárias usuais incluem atos normativos, ordinatórios, negociais, enunciativos e punitivos. Uma certidão pode ser tratada como ato enunciativo; uma penalidade disciplinar, como ato punitivo. Exemplo: Uma instrução de serviço organiza atividades internas; uma multa administrativa decorre do exercício de competência sancionatória."
  },
  {
    "subtopicId": "DA-19-005",
    "front": "Qual é a distinção central em anulação, revogação e convalidação? Dê um exemplo.",
    "back": "Anulação desfaz ato ilegal; revogação retira ato válido por conveniência e oportunidade, quando juridicamente cabível; convalidação pode sanar determinados vícios, respeitados limites legais e direitos. A anulação se relaciona a ilegalidade; a revogação, ao mérito administrativo de ato válido. Exemplo: Um ato discricionário válido deixa de atender ao interesse público: pode ser revogado quando presentes os requisitos jurídicos."
  },
  {
    "subtopicId": "DA-19-006",
    "front": "Qual é a distinção central em outras formas de extinção dos atos? Dê um exemplo.",
    "back": "Além de anulação e revogação, a doutrina identifica extinção por cumprimento de efeitos, advento de termo, desaparecimento de sujeito ou objeto e modalidades como cassação e caducidade, conforme a situação. A extinção pelo cumprimento integral dos efeitos não exige, por si, constatação de ilegalidade. Exemplo: Uma autorização condicionada pode ser cassada se o beneficiário deixa de cumprir requisito essencial."
  }
],
"DA-20": [
  {
    "subtopicId": "DA-20-001",
    "front": "Qual é a distinção central em conceito e princípios dos serviços públicos? Dê um exemplo.",
    "back": "Serviço público é atividade destinada à satisfação de necessidades coletivas sob responsabilidade estatal e regime jurídico pertinente, com prestação direta ou delegada quando admitida. A prestação adequada deve observar padrões de regularidade, segurança e eficiência, conforme a disciplina aplicável. Exemplo: Uma concessionária deve manter padrões de qualidade e informar interrupções nas condições legais."
  },
  {
    "subtopicId": "DA-20-002",
    "front": "Qual é a distinção central em classificação e formas de prestação? Dê um exemplo.",
    "back": "Serviços podem ser prestados diretamente por entes e entidades administrativas ou por delegatários, conforme Constituição e legislação. A execução indireta pode ocorrer sem afastar a responsabilidade regulatória e fiscalizatória do poder público. Exemplo: Um município delega a operação de transporte coletivo a empresa, mantendo deveres de fiscalização."
  },
  {
    "subtopicId": "DA-20-003",
    "front": "Qual é a distinção central em concessão e permissão? Dê um exemplo.",
    "back": "Nos termos gerais da Lei 8.987/1995, concessão de serviço público é delegação mediante licitação, por prazo determinado, a pessoa jurídica ou consórcio que demonstre capacidade, por sua conta e risco. A concessão, na disciplina geral, envolve pessoa jurídica ou consórcio, e a permissão pode alcançar pessoa física. Exemplo: Uma empresa vence licitação para operar transporte urbano por prazo determinado, sujeita a contrato e fiscalização."
  },
  {
    "subtopicId": "DA-20-004",
    "front": "Qual é a distinção central em autorização e outras formas de delegação? Dê um exemplo.",
    "back": "Autorização é instrumento utilizado em hipóteses legalmente previstas, com regimes variados conforme o setor e a Constituição. A natureza e os efeitos da autorização devem ser examinados conforme a legislação setorial aplicável. Exemplo: Determinada atividade econômica regulada pode depender de autorização setorial sem ser concessão de serviço público."
  },
  {
    "subtopicId": "DA-20-005",
    "front": "Qual é a distinção central em direitos dos usuários e serviço adequado? Dê um exemplo.",
    "back": "A Lei 13.460/2017 disciplina participação, proteção e defesa de direitos de usuários de serviços públicos. Serviço adequado envolve qualidade, segurança, continuidade nos termos legais e atendimento respeitoso. Exemplo: Um usuário registra reclamação fundamentada sobre interrupções recorrentes e recebe encaminhamento pelo canal competente."
  }
],
"DA-21": [
  {
    "subtopicId": "DA-21-001",
    "front": "Qual é a distinção central em fundamentos e princípios da lei 14.133/2021? Dê um exemplo.",
    "back": "A Lei 14.133/2021 estabelece normas gerais de licitação e contratação para administrações diretas, autárquicas e fundacionais dos entes federativos, observadas hipóteses específicas. Planejamento e segregação de funções integram os princípios expressamente previstos na Lei 14.133/2021. Exemplo: Uma prefeitura prepara estudo técnico preliminar e define critérios objetivos antes de publicar edital."
  },
  {
    "subtopicId": "DA-21-002",
    "front": "Qual é a distinção central em fases e modalidades da licitação? Dê um exemplo.",
    "back": "A Lei 14.133/2021 prevê, em regra, fases preparatória, divulgação do edital, apresentação de propostas e lances quando cabíveis, julgamento, habilitação, recursal e homologação. O pregão e o diálogo competitivo são modalidades previstas na Lei 14.133/2021. Exemplo: Um órgão utiliza pregão para adquirir bens comuns, observando a disciplina legal pertinente."
  },
  {
    "subtopicId": "DA-21-003",
    "front": "Qual é a distinção central em critérios de julgamento? Dê um exemplo.",
    "back": "A Lei 14.133/2021 prevê critérios de menor preço, maior desconto, melhor técnica ou conteúdo artístico, técnica e preço, maior lance no leilão e maior retorno econômico. Maior desconto e maior retorno econômico integram os critérios legais de julgamento. Exemplo: Em uma contratação de bens comuns, a administração avalia propostas pelo critério legal definido e verifica especificações mínimas."
  },
  {
    "subtopicId": "DA-21-004",
    "front": "Qual é a distinção central em contratação direta: dispensa e inexigibilidade? Dê um exemplo.",
    "back": "Contratação direta é exceção à licitação e exige processo instruído e justificativas legais. Dispensa e inexigibilidade possuem fundamentos jurídicos distintos e exigem instrução processual. Exemplo: Uma hipótese legal de dispensa não autoriza automaticamente escolher fornecedor sem justificativas."
  },
  {
    "subtopicId": "DA-21-005",
    "front": "Qual é a distinção central em contratos administrativos e fiscalização? Dê um exemplo.",
    "back": "Contratos regidos pela Lei 14.133/2021 exigem formalização e acompanhamento nos termos legais. A fiscalização contratual verifica cumprimento das obrigações e registra ocorrências pertinentes. Exemplo: Um fiscal registra atraso na entrega e comunica a autoridade competente para providências."
  },
  {
    "subtopicId": "DA-21-006",
    "front": "Qual é a distinção central em alterações, sanções e responsabilidades? Dê um exemplo.",
    "back": "A Lei 14.133/2021 disciplina alterações contratuais, equilíbrio econômico-financeiro, extinção e sanções. A aplicação de sanções depende de tipificação, competência e garantias procedimentais previstas em lei. Exemplo: Um contratado atrasa entrega; o órgão apura o fato e avalia providências e eventual sanção segundo a lei."
  }
],
"DA-22": [
  {
    "subtopicId": "DA-22-001",
    "front": "Como aplicar fundamentos da responsabilidade estatal a uma situação de órgão público?",
    "back": "A responsabilidade civil estatal busca reparar danos juridicamente imputáveis à atuação pública. Dano e nexo causal são elementos relevantes para atribuir responsabilidade ao Estado. Exemplo: Veículo oficial causa dano durante serviço: apuram-se dano e nexo com a atuação estatal."
  },
  {
    "subtopicId": "DA-22-002",
    "front": "Como aplicar responsabilidade objetiva e teoria do risco administrativo a uma situação de órgão público?",
    "back": "O art. 37, § 6º, da Constituição prevê responsabilidade objetiva das pessoas jurídicas ali indicadas por danos causados por seus agentes nessa qualidade. A teoria do risco administrativo admite análise de causas que afastem ou reduzam o nexo causal. Exemplo: Agente em serviço danifica veículo de terceiro; a vítima não precisa provar culpa do agente, mas deve demonstrar os demais requisitos."
  },
  {
    "subtopicId": "DA-22-003",
    "front": "Como aplicar responsabilidade por omissão e hipóteses de responsabilidade subjetiva a uma situação de órgão público?",
    "back": "Na omissão estatal, o regime de responsabilidade exige distinguir omissões genéricas de situações de dever específico de proteção. A jurisprudência admite responsabilidade objetiva em hipóteses de dever específico de proteção, a depender das circunstâncias. Exemplo: Pessoa sob custódia estatal sofre dano: o dever específico de proteção é decisivo para a análise."
  },
  {
    "subtopicId": "DA-22-004",
    "front": "Como aplicar excludentes e atenuantes a uma situação de órgão público?",
    "back": "Culpa exclusiva da vítima pode romper o nexo causal e afastar a responsabilidade estatal. Culpa concorrente pode influenciar a repartição da indenização conforme o caso. Exemplo: Condutor particular contribui para colisão com veículo oficial; a participação de cada causa deve ser analisada."
  },
  {
    "subtopicId": "DA-22-005",
    "front": "Como aplicar ação regressiva a uma situação de órgão público?",
    "back": "A Constituição assegura direito de regresso contra agente responsável em caso de dolo ou culpa. Responsabilidade objetiva do Estado perante a vítima não significa responsabilidade objetiva do agente no regresso. Exemplo: Após indenizar terceiro, a entidade avalia regresso contra servidor cuja culpa foi demonstrada."
  }
],
"DA-23": [
  {
    "subtopicId": "DA-23-001",
    "front": "Como aplicar controle interno e externo a uma situação de órgão público?",
    "back": "Controle interno é exercido no âmbito da própria estrutura de cada Poder, enquanto o externo envolve órgãos constitucionalmente competentes. Os Poderes mantêm sistemas de controle interno e há controle externo segundo competências constitucionais. Exemplo: Controladoria acompanha execução orçamentária; Legislativo exerce controle externo com auxílio do Tribunal de Contas."
  },
  {
    "subtopicId": "DA-23-002",
    "front": "Como aplicar controle administrativo e autotutela a uma situação de órgão público?",
    "back": "Autotutela permite à Administração anular atos ilegais e revogar atos válidos quando cabível, respeitando limites jurídicos. Anulação e revogação têm fundamentos distintos e não se aplicam indistintamente a todos os atos. Exemplo: Órgão identifica ato ilegal e inicia revisão com respeito ao contraditório quando exigido."
  },
  {
    "subtopicId": "DA-23-003",
    "front": "Como aplicar controle legislativo e tribunais de contas a uma situação de órgão público?",
    "back": "O controle externo federal é exercido pelo Congresso Nacional com auxílio do Tribunal de Contas da União. Tribunais de Contas exercem competências de fiscalização contábil, financeira, orçamentária, operacional e patrimonial. Exemplo: Comissão legislativa examina contas públicas com suporte técnico do Tribunal de Contas."
  },
  {
    "subtopicId": "DA-23-004",
    "front": "Como aplicar controle judicial a uma situação de órgão público?",
    "back": "O controle judicial pode examinar legalidade e compatibilidade constitucional da atuação administrativa. O controle judicial de discricionariedade considera limites jurídicos, inclusive motivação e proporcionalidade. Exemplo: Decisão administrativa discriminatória pode ser controlada judicialmente por violar a impessoalidade."
  },
  {
    "subtopicId": "DA-23-005",
    "front": "Como aplicar recursos e instrumentos de controle a uma situação de órgão público?",
    "back": "Recursos administrativos permitem impugnar decisões dentro dos requisitos do regime processual aplicável. Direito de petição, representações e mecanismos de transparência podem favorecer o controle social. Exemplo: Cidadão apresenta recurso contra decisão administrativa e acompanha sua tramitação."
  }
],
"DA-24": [
  {
    "subtopicId": "DA-24-001",
    "front": "Como aplicar lei 8.429/1992 e alterações a uma situação de órgão público?",
    "back": "A Lei 8.429/1992 disciplina atos de improbidade, com mudanças relevantes introduzidas pela Lei 14.230/2021. A análise de improbidade deve considerar a tipificação legal vigente e o regime temporal aplicável. Exemplo: Ao estudar caso de 2025, o candidato consulta a redação atualizada da lei, não apenas apostila antiga."
  },
  {
    "subtopicId": "DA-24-002",
    "front": "Como aplicar atos de improbidade e requisitos a uma situação de órgão público?",
    "back": "A lei prevê categorias de atos de improbidade, como enriquecimento ilícito, dano ao erário e atentado a princípios, com requisitos específicos. A tipificação deve ser examinada à luz dos elementos exigidos para cada hipótese legal. Exemplo: Contratação irregular exige apurar conduta, enquadramento legal e elemento subjetivo, sem presunção automática de improbidade."
  },
  {
    "subtopicId": "DA-24-003",
    "front": "Como aplicar dolo e responsabilização a uma situação de órgão público?",
    "back": "Após a Lei 14.230/2021, os atos de improbidade exigem dolo nos termos legais. O dolo envolve vontade livre e consciente de alcançar resultado ilícito tipificado, não bastando voluntariedade genérica. Exemplo: Erro administrativo por negligência pode gerar outras consequências, mas não é por si só improbidade dolosa."
  },
  {
    "subtopicId": "DA-24-004",
    "front": "Como aplicar sanções e procedimentos a uma situação de órgão público?",
    "back": "Sanções por improbidade dependem de enquadramento legal, devido processo e individualização conforme a lei. A lei prevê sanções distintas conforme a modalidade e circunstâncias da infração. Exemplo: Decisão judicial considera a categoria do ato e os parâmetros legais de sanção."
  },
  {
    "subtopicId": "DA-24-005",
    "front": "Como aplicar distinções entre improbidade e outras irregularidades a uma situação de órgão público?",
    "back": "Improbidade administrativa não se confunde automaticamente com mera ilegalidade, infração disciplinar ou erro de gestão. Uma mesma conduta pode ser examinada em esferas distintas, observados os requisitos próprios de cada uma. Exemplo: Servidor descumpre procedimento sem dolo: pode haver apuração disciplinar, sem enquadramento automático na lei de improbidade."
  }
],
"DA-25": [
  {
    "subtopicId": "DA-25-001",
    "front": "Explique fundamentos e princípios da lei 9.784/1999 e diferencie sua aplicação de um conceito próximo.",
    "back": "A Lei 9.784/1999 rege, como regra, o processo administrativo federal. O contraditório e a ampla defesa integram os princípios relevantes ao processo administrativo. Exemplo: Em processo federal sancionador, o interessado deve poder conhecer e contestar elementos relevantes."
  },
  {
    "subtopicId": "DA-25-002",
    "front": "Explique direitos e deveres dos administrados e diferencie sua aplicação de um conceito próximo.",
    "back": "O interessado pode apresentar documentos antes da decisão, observadas as regras do processo. A lei impõe aos administrados deveres de lealdade, urbanidade e boa-fé. Exemplo: Uma pessoa consulta o andamento do processo e apresenta documento pertinente antes da decisão."
  },
  {
    "subtopicId": "DA-25-003",
    "front": "Explique competência, delegação e avocação e diferencie sua aplicação de um conceito próximo.",
    "back": "A decisão de recursos administrativos não pode ser delegada conforme a Lei 9.784/1999. A avocação é excepcional, temporária e exige justificativa relevante. Exemplo: Um dirigente avalia delegar ato rotineiro, mas não pode delegar a decisão de recurso administrativo."
  },
  {
    "subtopicId": "DA-25-004",
    "front": "Explique impedimento e suspeição e diferencie sua aplicação de um conceito próximo.",
    "back": "O agente impedido deve comunicar a circunstância e abster-se de atuar. Impedimento e suspeição buscam resguardar imparcialidade administrativa. Exemplo: Servidor que tem interesse pessoal direto na decisão informa o impedimento e não atua."
  },
  {
    "subtopicId": "DA-25-005",
    "front": "Explique fases, instrução e decisão e diferencie sua aplicação de um conceito próximo.",
    "back": "A Administração tem dever de emitir decisão expressa nos processos de sua competência. A instrução serve para reunir elementos relevantes à decisão administrativa. Exemplo: Após concluir a instrução, o órgão decide motivadamente e observa os prazos aplicáveis."
  },
  {
    "subtopicId": "DA-25-006",
    "front": "Explique recursos, revisão e prazos e diferencie sua aplicação de um conceito próximo.",
    "back": "O recurso administrativo pode versar sobre legalidade e mérito, nos termos legais. O prazo recursal geral da Lei 9.784/1999 é de dez dias, salvo disposição específica. Exemplo: Interessado apresenta recurso tempestivo contra decisão administrativa e fundamenta sua discordância."
  }
],
"DA-26": [
  {
    "subtopicId": "DA-26-001",
    "front": "Explique conceito e classificação dos bens públicos e diferencie sua aplicação de um conceito próximo.",
    "back": "Bens pertencentes a pessoas jurídicas de direito público interno são públicos nos termos do art. 98 do Código Civil. O Código Civil distingue bens de uso comum, uso especial e dominicais. Exemplo: Um prédio de autarquia e uma praça municipal podem ser bens públicos de categorias distintas."
  },
  {
    "subtopicId": "DA-26-002",
    "front": "Explique bens de uso comum, uso especial e dominicais e diferencie sua aplicação de um conceito próximo.",
    "back": "Uma praça pública é exemplo típico de bem de uso comum do povo. Prédio destinado ao funcionamento de repartição é exemplo de bem de uso especial. Exemplo: Uma antiga área pública sem destinação administrativa pode ser classificada como dominical."
  },
  {
    "subtopicId": "DA-26-003",
    "front": "Explique características e regime jurídico e diferencie sua aplicação de um conceito próximo.",
    "back": "Bens públicos não podem ser adquiridos por usucapião. Bens dominicais podem ser alienados desde que observadas as exigências legais. Exemplo: Uma área dominical pode ser alienada se cumpridos os requisitos legais pertinentes."
  },
  {
    "subtopicId": "DA-26-004",
    "front": "Explique uso e alienação dos bens públicos e diferencie sua aplicação de um conceito próximo.",
    "back": "A alienação de bens públicos exige observar a categoria do bem e requisitos legais. A destinação pública do bem pode limitar sua disponibilidade para alienação. Exemplo: Antes de alienar um imóvel público, o órgão verifica a afetação e o procedimento legal."
  }
],
"DA-27": [
  {
    "subtopicId": "DA-27-001",
    "front": "Explique desapropriação e diferencie sua aplicação de um conceito próximo.",
    "back": "A desapropriação pode transferir compulsoriamente a propriedade nas hipóteses legais. A regra geral constitucional exige indenização justa, prévia e em dinheiro, ressalvadas exceções. Exemplo: O município desapropria imóvel para obra pública, observando fundamento legal e indenização aplicável."
  },
  {
    "subtopicId": "DA-27-002",
    "front": "Explique servidão administrativa e diferencie sua aplicação de um conceito próximo.",
    "back": "A servidão administrativa pode impor ônus específico sem transferir a propriedade do imóvel. Prejuízos decorrentes da servidão podem ensejar indenização conforme as circunstâncias. Exemplo: Faixa de passagem de rede pública atravessa terreno privado com restrições específicas de uso."
  },
  {
    "subtopicId": "DA-27-003",
    "front": "Explique requisição administrativa e diferencie sua aplicação de um conceito próximo.",
    "back": "A requisição administrativa pressupõe iminente perigo público. A Constituição assegura indenização ulterior se houver dano na requisição. Exemplo: Em emergência com perigo público iminente, autoridade utiliza temporariamente recurso particular nos limites constitucionais."
  },
  {
    "subtopicId": "DA-27-004",
    "front": "Explique ocupação temporária e diferencie sua aplicação de um conceito próximo.",
    "back": "A ocupação temporária não implica, por si só, transferência definitiva da propriedade. A ocupação temporária deve respeitar fundamento e condições legais. Exemplo: Área particular é usada transitoriamente como apoio à execução de obra pública conforme requisitos legais."
  },
  {
    "subtopicId": "DA-27-005",
    "front": "Explique limitações administrativas e tombamento e diferencie sua aplicação de um conceito próximo.",
    "back": "Limitações administrativas podem estabelecer restrições gerais de uso da propriedade. Tombamento visa à proteção do patrimônio cultural sem exigir transferência do domínio. Exemplo: Imóvel histórico é tombado e continua pertencendo ao particular, sujeito às restrições de proteção."
  }
]
});

export function getDiagnosticCards(module) {
  const entries = DIAGNOSTICS[module.id];
  if (!entries || entries.length !== module.subtopics.length) return null;
  const byId = new Map(entries.map(item => [item.subtopicId, item]));
  if (byId.size !== module.subtopics.length || !module.subtopics.every(topic => byId.has(topic.id))) return null;
  return module.subtopics.map(topic => ({
    id: `${topic.id}-DIAG`, subtopicId: topic.id, subtopicTitle: topic.title,
    question: byId.get(topic.id).front, answer: byId.get(topic.id).back
  }));
}
