/* ============================================================
   EXERCÍCIOS PÓS-AULA — "Praticar o que aprendi"
   Melhoria 1 — Estrutura + blueprints iniciais (ADM-01 a ADM-04)

   Estrutura:
   - EXERCISE_BLUEPRINTS: mapa modId → { nivel1..nivel4: [qids] }
     Lista IDs de QUESTIONS (Q-...) e/ou EXERCISE_EXTRA_QUESTIONS (EX-...)
     Se a lista tiver menos que o esperado, o motor completa com questões
     do mesmo módulo (fallback) e sinaliza a UI.

   - EXERCISE_EXTRA_QUESTIONS: questões adicionais (formato idêntico a
     QUESTIONS), usadas quando o banco base não cobre um nível.
     Prefixo obrigatório: EX-

   R1 entregue: blueprints completos de ADM-01 a ADM-04
   R6+ entregará: demais módulos, progressivamente
   ============================================================ */

window.EXERCISE_BLUEPRINTS = {

  /* ============================================================
     ADM-01 — Fundamentos de Administração
  ============================================================ */
  'ADM-01': {
    nivel1: [
      'Q-DID-ADM-01-006',   // conceito de organização
      'Q-DID-ADM-01-007',   // funções administrativas (EXCETO)
      'Q-DID-ADM-01-003'    // recursos organizacionais
    ],
    nivel2: [
      'Q-REAL-ADM-01-001',  // eficiência/eficácia/efetividade (cenário)
      'Q-DID-ADM-01-002',   // Katz x níveis
      'Q-DID-ADM-01-004',   // produtividade
      'Q-DID-ADM-01-011'    // níveis hierárquicos
    ],
    nivel3: [
      'Q-DID-ADM-01-008',   // eficiência sem eficácia / eficácia sem eficiência
      'Q-REAL-ADM-01-009',  // etmologia + conceito
      'Q-DID-ADM-01-010'    // objetivos da Administração (INCORRETA)
    ],
    nivel4: [
      'Q-DID-ADM-01-005',   // Administração aplicada ao setor público (integra com AP-13)
      'Q-DID-ADM-01-001'    // PODC x níveis organizacionais (integra com ADM-02)
    ]
  },

  /* ============================================================
     ADM-02 — Processo Administrativo
  ============================================================ */
  'ADM-02': {
    nivel1: [
      'Q-DID-ADM-02-002',   // planejamento e controle como espelhos
      'Q-DID-ADM-02-004',   // natureza cíclica do PODC
      'Q-DID-ADM-02-006'    // controle como diagnóstico
    ],
    nivel2: [
      'Q-DID-ADM-02-003',   // cenário aplicado (jan/fev/mar/dez)
      'Q-DID-ADM-02-005',   // PODC no setor público
      'Q-REAL-ADM-02-002',  // ciclo administrativo e processos
      'Q-DID-ADM-02-010'    // tomada de decisão — etapas
    ],
    nivel3: [
      'Q-REAL-ADM-02-001',  // funções administrativas (Quadrix)
      'Q-DID-ADM-02-001',   // PODC x processo administrativo (Lei 9.784/99)
      'Q-REAL-ADM-02-009'   // funções administrativas (identificação)
    ],
    nivel4: [
      'EX-ADM-02-001',      // integração PODC + Controle (ADM-06)
      'EX-ADM-02-002'       // integração PODC + Processo Administrativo (DA-25)
    ]
  },

  /* ============================================================
     ADM-03 — Planejamento
  ============================================================ */
  'ADM-03': {
    nivel1: [
      'Q-DID-ADM-03-001',   // missão/visão/valores
      'Q-DID-ADM-03-003',   // objetivo x meta
      'Q-REAL-ADM-03-009'   // horizonte temporal do planejamento estratégico
    ],
    nivel2: [
      'Q-DID-ADM-03-002',   // SWOT
      'Q-DID-ADM-03-004',   // BSC
      'Q-REAL-ADM-03-002',  // níveis de planejamento (cenário CODERN)
      'Q-REAL-ADM-03-003'   // nível tático (foco setorial)
    ],
    nivel3: [
      'Q-REAL-ADM-03-004',  // ciclo orçamentário (PPA/LDO/LOA/execução/controle)
      'Q-DID-ADM-03-010',   // etapas do planejamento
      'Q-REAL-ADM-03-001'   // PPA, LDO e LOA (AOCP)
    ],
    nivel4: [
      'EX-ADM-03-001',      // integração Planejamento + Controle (ADM-06)
      'EX-ADM-03-002'       // integração BSC + Gestão por Processos (ADM-11)
    ]
  },

  /* ============================================================
     ADM-04 — Organização
  ============================================================ */
  'ADM-04': {
    nivel1: [
      'Q-DID-ADM-04-001',   // delegação x descentralização
      'Q-DID-ADM-04-002',   // amplitude de controle
      'Q-DID-ADM-04-003'    // estrutura linear
    ],
    nivel2: [
      'Q-REAL-ADM-04-003',  // linha-staff
      'Q-REAL-ADM-04-004',  // departamentalização por clientes
      'Q-REAL-ADM-04-009',  // especialização do trabalho
      'Q-DID-ADM-04-010'    // organização sem fronteiras
    ],
    nivel3: [
      'Q-REAL-ADM-04-001',  // estrutura matricial (CODERN)
      'Q-REAL-ADM-04-002',  // centralização x descentralização (CODERN)
      'Q-DID-ADM-04-011'    // departamentalização matricial (IFPB)
    ],
    nivel4: [
      'Q-REAL-ADM-04-005',  // QDT (integra com ADM-11 / gestão de processos)
      'EX-ADM-04-001'       // integração Estrutura + Administração Indireta (DA-16)
    ]
  },

  /* ============================================================
     ADM-05 — Direção, liderança e motivação
  ============================================================ */
  'ADM-05': {
    nivel1: [
      'Q-DID-ADM-05-001',   // autoridade x poder
      'Q-DID-ADM-05-002',   // estilos clássicos
      'Q-DID-ADM-05-004'    // Maslow
    ],
    nivel2: [
      'Q-DID-ADM-05-003',   // Herzberg
      'Q-DID-ADM-05-005',   // McGregor
      'Q-REAL-ADM-05-001',  // teorias de liderança (traços/contingencial/transacional/transformacional)
      'Q-DID-ADM-05-013'    // teoria dos traços
    ],
    nivel3: [
      'Q-REAL-ADM-05-002',  // papéis de Mintzberg
      'Q-DID-ADM-05-011',   // teoria ERC
      'Q-DID-ADM-05-012'    // Mintzberg — atividades
    ],
    nivel4: [
      'Q-REAL-ADM-05-009',  // autoridade burocrática (integra AP-14)
      'EX-ADM-05-001'       // integração liderança (ADM-05) + Katz/níveis (ADM-01)
    ]
  },

  /* ============================================================
     ADM-06 — Controle e avaliação
  ============================================================ */
  'ADM-06': {
    nivel1: [
      'Q-REAL-ADM-06-001',  // função de controle
      'Q-DID-ADM-06-001',   // etapas do controle
      'Q-DID-ADM-06-005'    // finalidade do controle
    ],
    nivel2: [
      'Q-REAL-ADM-06-002',  // controle concomitante
      'Q-DID-ADM-06-002',   // padrão x indicador
      'Q-DID-ADM-06-003',   // tipos de controle
      'Q-REAL-ADM-06-003'   // orçamento — planejamento + controle
    ],
    nivel3: [
      'Q-DID-ADM-06-004',   // controle administrativo x controle da Adm. Pública
      'Q-REAL-ADM-06-009',  // ênfase nas exceções
      'Q-DID-ADM-06-010'    // indicadores estratégicos
    ],
    nivel4: [
      'EX-ADM-06-001',      // integração controle (ADM-06) + gestão por processos (ADM-11)
      'EX-ADM-06-002'       // integração controle (ADM-06) + controle da Adm. Pública (DA-23)
    ]
  },

  /* ============================================================
     ADM-07 — Gestão de Pessoas
  ============================================================ */
  'ADM-07': {
    nivel1: [
      'Q-DID-ADM-07-001',   // seis processos
      'Q-DID-ADM-07-002',   // recrutamento x seleção
      'Q-DID-ADM-07-003'    // clima x cultura
    ],
    nivel2: [
      'Q-REAL-ADM-07-005',  // treinamento x desenvolvimento
      'Q-REAL-ADM-07-009',  // pilares da gestão de pessoas
      'Q-REAL-ADM-07-004',  // aptidão
      'Q-REAL-ADM-07-001'   // escolha forçada
    ],
    nivel3: [
      'Q-REAL-ADM-07-010',  // testes psicológicos (Quati, Palográfico, PMK, etc.)
      'Q-REAL-ADM-07-011',  // cargo — atribuições x especificações
      'Q-REAL-ADM-07-012'   // avaliação 90º
    ],
    nivel4: [
      'Q-REAL-ADM-07-002',  // escalas gráficas (conecta com evolução histórica)
      'EX-ADM-07-001'       // integração gestão por competências (ADM-07) + estrutura (ADM-04)
    ]
  },

  /* ============================================================
     ADM-08 — Comunicação e comportamento organizacional
  ============================================================ */
  'ADM-08': {
    nivel1: [
      'Q-DID-ADM-08-001',   // elementos do processo
      'Q-DID-ADM-08-002',   // formal x informal
      'Q-DID-ADM-08-003'    // grupo x equipe
    ],
    nivel2: [
      'Q-REAL-ADM-08-001',  // rede informal
      'Q-REAL-ADM-08-009',  // função da comunicação (informação)
      'Q-DID-ADM-08-004',   // conflito funcional x disfuncional
      'Q-REAL-ADM-08-004'   // barreira semântica
    ],
    nivel3: [
      'Q-REAL-ADM-08-002',  // pensamento grupal (groupthink)
      'Q-REAL-ADM-08-010',  // percepção seletiva
      'Q-REAL-ADM-08-011'   // negociação — ganha-perde x perde-perde
    ],
    nivel4: [
      'Q-REAL-ADM-08-003',  // relações públicas (integra com comunicação organizacional)
      'EX-ADM-08-001'       // integração comunicação (ADM-08) + impessoalidade (DA-15)
    ]
  },

  /* ============================================================
     ADM-09 — Gestão da Qualidade
  ============================================================ */
  'ADM-09': {
    nivel1: [
      'Q-DID-ADM-09-001',   // Ishikawa x Pareto
      'Q-DID-ADM-09-002',   // 5W2H
      'Q-DID-ADM-09-003'    // qualidade total
    ],
    nivel2: [
      'Q-DID-ADM-09-004',   // indicadores de qualidade
      'Q-REAL-ADM-09-004',  // melhoria contínua x reengenharia
      'Q-REAL-ADM-09-003',  // benchmarking
      'Q-REAL-ADM-09-009'   // sete ferramentas da qualidade
    ],
    nivel3: [
      'Q-REAL-ADM-09-001',  // PDCA — INCORRETA
      'Q-REAL-ADM-09-002',  // indicador de grau de atendimento
      'Q-REAL-ADM-09-010'   // Pareto — aplicação 80/20
    ],
    nivel4: [
      'EX-ADM-09-001',      // integração qualidade (ADM-09) + controle (ADM-06)
      'EX-ADM-09-002'       // integração qualidade (ADM-09) + gestão por processos (ADM-11)
    ]
  },

  /* ============================================================
     ADM-10 — Administração de Materiais e Patrimônio
  ============================================================ */
  'ADM-10': {
    nivel1: [
      'Q-DID-ADM-10-001',   // bem de consumo x bem permanente
      'Q-DID-ADM-10-002',   // estoque mínimo x de segurança
      'Q-DID-ADM-10-003'    // tombamento x inventário
    ],
    nivel2: [
      'Q-REAL-ADM-10-001',  // LEC — lote econômico
      'Q-REAL-ADM-10-003',  // giro de estoque
      'Q-REAL-ADM-10-009',  // tipos de almoxarifado
      'Q-REAL-ADM-10-010'   // atividades da gestão de materiais (INCORRETA)
    ],
    nivel3: [
      'Q-REAL-ADM-10-002',  // ponto de pedido — cálculo
      'Q-REAL-ADM-10-004',  // tipos de inventário
      'Q-REAL-ADM-10-005'   // recebimento de materiais (INCORRETA)
    ],
    nivel4: [
      'Q-REAL-ADM-10-011',  // WMS (integra com ADM-11 / armazenagem)
      'EX-ADM-10-001'       // integração gestão de materiais (ADM-10) + controle (ADM-06)
    ]
  },

  /* ============================================================
     ADM-11 — Gestão de Processos
  ============================================================ */
  'ADM-11': {
    nivel1: [
      'Q-DID-ADM-11-001',   // processo x projeto
      'Q-DID-ADM-11-003',   // atividade x tarefa
      'Q-DID-ADM-11-006'    // fluxograma
    ],
    nivel2: [
      'Q-DID-ADM-11-002',   // finalísticos x de apoio
      'Q-DID-ADM-11-004',   // melhoria contínua x reengenharia
      'Q-DID-ADM-11-005',   // gestão funcional x por processos
      'Q-DID-ADM-11-008'    // AS-IS / TO-BE
    ],
    nivel3: [
      'Q-DID-ADM-11-007',   // gargalo
      'Q-REAL-ADM-11-009',  // BPM — fase de Mudanças de Arquitetura
      'EX-ADM-11-001'       // integração processos (ADM-11) + licitações (DA-21)
    ],
    nivel4: [
      'EX-ADM-11-002',      // integração processos (ADM-11) + atendimento (ADM-12)
      'EX-ADM-11-003'       // integração processos (ADM-11) + estrutura funcional (ADM-04)
    ]
  },

  /* ============================================================
     ADM-12 — Atendimento ao público e relações interpessoais
  ============================================================ */
  'ADM-12': {
    nivel1: [
      'Q-DID-ADM-12-001',   // cidadão como usuário de direitos
      'Q-REAL-ADM-12-003',  // escuta ativa
      'Q-REAL-ADM-12-005'   // ofício
    ],
    nivel2: [
      'Q-REAL-ADM-12-001',  // expedição de documentos
      'Q-REAL-ADM-12-002',  // relatórios administrativos
      'Q-REAL-ADM-12-004',  // fechos da redação oficial
      'Q-REAL-ADM-12-006'   // requerimento
    ],
    nivel3: [
      'Q-REAL-ADM-12-007',  // atendimento telefônico
      'Q-REAL-ADM-12-009',  // formas de atendimento obrigatório
      'Q-REAL-ADM-12-010'   // trabalho em equipe — INCORRETA
    ],
    nivel4: [
      'EX-ADM-12-001',      // integração atendimento (ADM-12) + impessoalidade (DA-15)
      'EX-ADM-12-002'       // integração atendimento (ADM-12) + comunicação (ADM-08)
    ]
  },

  /* ============================================================
     AP-13 — Conceitos fundamentais de Administração Pública
  ============================================================ */
  'AP-13': {
    nivel1: [
      'Q-DID-AP-13-001',   // objetivo x subjetivo
      'Q-DID-AP-13-002',   // amplo x restrito
      'Q-DID-AP-13-003'    // direta x indireta
    ],
    nivel2: [
      'Q-DID-AP-13-004',   // órgãos x entidades
      'Q-DID-AP-13-006',   // supremacia x indisponibilidade
      'Q-DID-AP-13-005',   // interesse público x interesse do Estado
      'EX-AP-13-001'       // aplicação de sentido em cenário
    ],
    nivel3: [
      'Q-DID-AP-13-007',   // Teoria do Órgão
      'Q-DID-AP-13-008',   // aplicação em cenário (autarquia)
      'EX-AP-13-002'       // interesse público x interesse do agente (nepotismo)
    ],
    nivel4: [
      'EX-AP-13-003',      // integração AP-13 + DA-15 (princípios como expressão de supremacia/indisponibilidade)
      'EX-AP-13-004'       // integração AP-13 + DA-16 (direta/indireta + descentralização/desconcentração)
    ]
  },

  /* ============================================================
     AP-14 — Modelos de Administração Pública
  ============================================================ */
  'AP-14': {
    nivel1: [
      'Q-DID-AP-14-001',   // patrimonialismo
      'Q-DID-AP-14-002',   // burocracia
      'Q-DID-AP-14-003'    // administração gerencial
    ],
    nivel2: [
      'Q-DID-AP-14-004',   // reforma de 1936
      'Q-DID-AP-14-005',   // reforma de 1995 / EC 19
      'Q-DID-AP-14-007',   // reforma de 1967 (DL 200)
      'Q-DID-AP-14-006'    // comparação entre os modelos
    ],
    nivel3: [
      'Q-REAL-AP-14-001',  // associação de práticas a modelos
      'Q-REAL-AP-14-002',  // associação de modelos (INCORRETA)
      'EX-AP-14-001'       // identificação de modelo em cenário (práticas híbridas)
    ],
    nivel4: [
      'EX-AP-14-002',      // integração AP-14 + DA-15 (eficiência / EC 19 no art. 37)
      'EX-AP-14-003'       // integração AP-14 + ADM-01 (PODC no modelo gerencial)
    ]
  },

  /* ============================================================
     DA-15 — Princípios da Administração Pública
  ============================================================ */
  'DA-15': {
    nivel1: [
      'Q-REAL-DA-15-004',   // LIMPE (identificação do rol)
      'Q-DID-DA-15-001',    // legalidade adm x particular
      'Q-REAL-DA-15-001'    // publicidade
    ],
    nivel2: [
      'Q-REAL-DA-15-002',   // eficiência
      'Q-DID-DA-15-002',    // moralidade
      'Q-REAL-DA-15-003',   // impessoalidade x publicidade
      'Q-DID-DA-15-004'     // razoabilidade x proporcionalidade
    ],
    nivel3: [
      'Q-DID-DA-15-003',    // autotutela x tutela
      'Q-REAL-DA-15-005',   // efetividade x LIMPE (INCORRETA)
      'EX-DA-15-001'        // proporcionalidade em cenário
    ],
    nivel4: [
      'EX-DA-15-002',       // integração DA-15 + DA-16 (princípios aplicados à estrutura)
      'EX-DA-15-003'        // integração DA-15 + DA-18 (princípios + anulação/revogação)
    ]
  },

  /* ============================================================
     DA-16 — Organização da Administração Pública
  ============================================================ */
  'DA-16': {
    nivel1: [
      'Q-REAL-DA-16-002',   // Adm Direta (INCORRETA)
      'Q-DID-DA-16-004',    // Teoria do Órgão
      'Q-DID-DA-16-001'     // autarquia x fundação x EP x SEM
    ],
    nivel2: [
      'Q-REAL-DA-16-001',   // CODERN (Adm Indireta)
      'Q-REAL-DA-16-003',   // agências reguladoras
      'Q-DID-DA-16-003',    // centralização x descentralização
      'Q-REAL-DA-16-004'    // autarquia x descentralização x desconcentração
    ],
    nivel3: [
      'Q-DID-DA-16-002',    // descentralização x desconcentração
      'Q-REAL-DA-16-005',   // acumulação de cargos (controle: tema real é DA-17)
      'EX-DA-16-001'        // classificação de entidades em cenário
    ],
    nivel4: [
      'EX-DA-16-002',       // integração DA-16 + DA-17 (regime de pessoal: EP x autarquia)
      'EX-DA-16-003'        // integração DA-16 + DA-18 (agência reguladora + poder normativo)
    ]
  },

  /* ============================================================
     DA-17 — Agentes públicos
  ============================================================ */
  'DA-17': {
    nivel1: [
      'Q-DID-DA-17-001',   // classificação dos agentes
      'Q-DID-DA-17-002',   // cargo x emprego x função
      'Q-DID-DA-17-005'    // empregado público
    ],
    nivel2: [
      'Q-DID-DA-17-003',   // acumulação de cargos
      'Q-DID-DA-17-004',   // provimento originário x derivado
      'Q-REAL-DA-17-007',  // requisitos para investidura (Lei 8.112/90)
      'Q-REAL-DA-17-008'   // validade do concurso público
    ],
    nivel3: [
      'Q-REAL-DA-17-001',  // provimento (movimentação x retorno)
      'Q-REAL-DA-17-002',  // cedência de servidor
      'Q-REAL-DA-17-009'   // afastamento por casamento
    ],
    nivel4: [
      'Q-DID-DA-17-006',   // acumulação de cargos de saúde (aplicação)
      'EX-DA-17-001'       // integração agentes públicos (DA-17) + estrutura (DA-16)
    ]
  },

  /* ============================================================
     DA-18 — Poderes da Administração Pública
  ============================================================ */
  'DA-18': {
    nivel1: [
      'Q-DID-DA-18-001',   // poderes administrativos — visão geral
      'Q-DID-DA-18-002',   // disciplinar x polícia
      'Q-DID-DA-18-006'    // poder de polícia
    ],
    nivel2: [
      'Q-DID-DA-18-003',   // excesso x desvio
      'Q-DID-DA-18-004',   // poder regulamentar
      'Q-DID-DA-18-005',   // poder hierárquico — manifestações
      'Q-REAL-DA-18-008'   // poder hierárquico — definição
    ],
    nivel3: [
      'Q-REAL-DA-18-001',  // desvio de finalidade (Quadrix)
      'Q-DID-DA-18-007',   // abuso (gênero) x desvio (espécie)
      'Q-REAL-DA-18-009'   // poderes — afirmativa correta
    ],
    nivel4: [
      'EX-DA-18-001',      // integração poderes (DA-18) + atos (DA-19)
      'EX-DA-18-002'       // integração poderes (DA-18) + liderança/hierarquia (ADM-05)
    ]
  },

  /* ============================================================
     DA-19 — Atos Administrativos
  ============================================================ */
  'DA-19': {
    nivel1: [
      'Q-REAL-DA-19-001',   // requisitos do ato (Meirelles)
      'Q-DID-DA-19-001',    // anulação x revogação
      'Q-DID-DA-19-003'     // presunção de legitimidade
    ],
    nivel2: [
      'Q-DID-DA-19-002',    // cassação x caducidade x contraposição
      'Q-DID-DA-19-004',    // autoexecutoriedade
      'Q-DID-DA-19-005',    // convalidação
      'EX-DA-19-001'        // atributos em cenário
    ],
    nivel3: [
      'Q-DID-DA-19-006',    // vícios competência x finalidade
      'Q-REAL-DA-19-008',   // V/F revisão integrada
      'EX-DA-19-002'        // extinção em cenário
    ],
    nivel4: [
      'EX-DA-19-003',       // integração DA-19 + DA-18 (vício + abuso de poder)
      'EX-DA-19-004'        // integração DA-19 + DA-15 (motivação + moralidade)
    ]
  },

  /* ============================================================
     DA-20 — Serviços Públicos
  ============================================================ */
  'DA-20': {
    nivel1: [
      'Q-REAL-DA-20-001',   // uti universi x uti singuli
      'Q-DID-DA-20-001',    // princípios (EXCETO)
      'Q-DID-DA-20-005'     // próprio x impróprio
    ],
    nivel2: [
      'Q-DID-DA-20-002',    // concessão x permissão x autorização
      'Q-DID-DA-20-003',    // continuidade
      'Q-DID-DA-20-007',    // direitos dos usuários
      'EX-DA-20-001'        // continuidade + exceções em cenário
    ],
    nivel3: [
      'Q-DID-DA-20-004',    // encampação x caducidade
      'Q-DID-DA-20-006',    // classificação delegação em cenário
      'EX-DA-20-002'        // concessão x permissão x autorização em cenário real
    ],
    nivel4: [
      'EX-DA-20-003',       // integração DA-20 + DA-21 (licitação na delegação)
      'EX-DA-20-004'        // integração DA-20 + DA-23 (controle da concessão)
    ]
  },

  /* ============================================================
     DA-21 — Licitações e contratos administrativos
  ============================================================ */
  'DA-21': {
    nivel1: [
      'Q-DID-DA-21-002',    // modalidades (EXCETO convite)
      'Q-DID-DA-21-004',    // critérios de julgamento (EXCETO)
      'Q-DID-DA-21-001'     // dispensa x inexigibilidade
    ],
    nivel2: [
      'Q-REAL-DA-21-001',   // dispensa por valor
      'Q-DID-DA-21-003',    // cláusulas exorbitantes (EXCETO)
      'Q-REAL-DA-21-009',   // pregão obrigatório
      'Q-REAL-DA-21-003'    // inexigibilidade notória
    ],
    nivel3: [
      'Q-REAL-DA-21-002',   // ETP (fase preparatória)
      'Q-REAL-DA-21-010',   // credenciamento
      'Q-REAL-DA-21-011'    // diálogo competitivo
    ],
    nivel4: [
      'Q-REAL-DA-21-012',   // contratos prorrogação
      'Q-REAL-DA-21-004'    // impugnação de edital
    ]
  },

  /* ============================================================
     DA-22 — Responsabilidade Civil do Estado
  ============================================================ */
  'DA-22': {
    nivel1: [
      'Q-DID-DA-22-001',   // objetiva x subjetiva
      'Q-DID-DA-22-004',   // risco administrativo x integral
      'Q-DID-DA-22-008'    // requisitos da responsabilidade objetiva
    ],
    nivel2: [
      'Q-DID-DA-22-002',   // ação regressiva
      'Q-DID-DA-22-003',   // excludentes
      'Q-DID-DA-22-005',   // comissivos x omissivos
      'Q-DID-DA-22-006'    // atropelamento (cenário — culpa da vítima)
    ],
    nivel3: [
      'Q-DID-DA-22-007',   // ação regressiva em cenário
      'EX-DA-22-001',      // excludente em cenário
      'EX-DA-22-002'       // omissão específica x genérica
    ],
    nivel4: [
      'EX-DA-22-003',      // integração DA-22 + DA-16 (responsabilidade do Estado x agente)
      'EX-DA-22-004'       // integração DA-22 + DA-23 (controle judicial da responsabilidade)
    ]
  },

  /* ============================================================
     DA-23 — Controle da Administração Pública
  ============================================================ */
  'DA-23': {
    nivel1: [
      'Q-DID-DA-23-001',   // interno x externo
      'Q-DID-DA-23-005',   // prazo decadencial
      'Q-REAL-DA-23-008'   // controle posterior (classificação)
    ],
    nivel2: [
      'Q-REAL-DA-23-002',  // CGU — órgão central
      'Q-REAL-DA-23-003',  // sistema de controle interno
      'Q-DID-DA-23-002',   // legalidade x mérito
      'Q-DID-DA-23-003'    // autotutela x tutela
    ],
    nivel3: [
      'Q-DID-DA-23-004',   // TCU x Congresso (contas do Presidente)
      'Q-REAL-DA-23-001',  // competências do TCU
      'EX-DA-23-001'       // controle interno x externo x social
    ],
    nivel4: [
      'EX-DA-23-002',      // integração DA-23 + DA-19 (autotutela + prazo + segurança jurídica)
      'EX-DA-23-003'       // integração DA-23 + DA-15 (controle como expressão de princípios)
    ]
  },

  /* ============================================================
     DA-24 — Improbidade Administrativa
  ============================================================ */
  'DA-24': {
    nivel1: [
      'Q-DID-DA-24-001',   // modalidades
      'Q-DID-DA-24-002',   // dolo (Lei 14.230/2021)
      'Q-DID-DA-24-004'    // legitimidade MP
    ],
    nivel2: [
      'Q-REAL-DA-24-002',  // dolo — Lei 14.230/2021
      'Q-REAL-DA-24-003',  // apreciação pelo TCU (independência das instâncias)
      'Q-DID-DA-24-003',   // improbidade x irregularidade
      'Q-DID-DA-24-005'    // terceiros
    ],
    nivel3: [
      'Q-REAL-DA-24-001',  // herdeiro (transmissão da obrigação)
      'Q-REAL-DA-24-008',  // enriquecimento ilícito (exemplo)
      'EX-DA-24-001'       // modalidade x sanção em cenário
    ],
    nivel4: [
      'EX-DA-24-002',      // integração DA-24 + DA-17 (agente público e improbidade)
      'EX-DA-24-003'       // integração DA-24 + DA-22 (responsabilidade civil x improbidade)
    ]
  },

  /* ============================================================
     DA-25 — Processo Administrativo
  ============================================================ */
  'DA-25': {
    nivel1: [
      'Q-DID-DA-25-003',    // fases do processo (EXCETO)
      'Q-DID-DA-25-001',    // processo adm x PODC
      'Q-REAL-DA-25-002'    // comunicação dos atos (notificação)
    ],
    nivel2: [
      'Q-REAL-DA-25-001',   // fase de instrução
      'Q-REAL-DA-25-009',   // avocação temporária
      'Q-REAL-DA-25-010',   // intimação — formas
      'Q-DID-DA-25-002'     // impedimento x suspeição
    ],
    nivel3: [
      'Q-DID-DA-25-004',    // recursos — reconsideração x hierárquico
      'Q-REAL-DA-25-003',   // delegação (V/F)
      'Q-REAL-DA-25-004'    // aplicação subsidiária (V/F)
    ],
    nivel4: [
      'Q-REAL-DA-25-008',   // interpretação da norma (art. 2º)
      'Q-REAL-DA-25-011'    // motivação — INCORRETA
    ]
  },

  /* ============================================================
     DA-26 — Bens Públicos
  ============================================================ */
  'DA-26': {
    nivel1: [
      'Q-DID-DA-26-001',    // classificação (uso comum, especial, dominical)
      'Q-DID-DA-26-002',    // imprescritibilidade
      'Q-DID-DA-26-005'     // afetação x desafetação
    ],
    nivel2: [
      'Q-DID-DA-26-003',    // alienação
      'Q-DID-DA-26-007',    // impenhorabilidade
      'Q-DID-DA-26-008',    // uso comum x uso especial
      'EX-DA-26-001'        // uso de bem público por particular (cenário)
    ],
    nivel3: [
      'Q-DID-DA-26-004',    // autorização x permissão x concessão de uso
      'Q-DID-DA-26-006',    // cenário — desafetação + alienação
      'EX-DA-26-002'        // alienação de bem dominical (procedimento completo)
    ],
    nivel4: [
      'EX-DA-26-003',       // integração DA-26 + DA-16 (bens de autarquia)
      'EX-DA-26-004'        // integração DA-26 + DA-22 (dano a bem público)
    ]
  },

  /* ============================================================
     DA-27 — Intervenção do Estado e restrições administrativas
  ============================================================ */
  'DA-27': {
    nivel1: [
      'Q-DID-DA-27-001',    // formas de intervenção (EXCETO)
      'Q-DID-DA-27-002',    // desapropriação ordinária
      'Q-DID-DA-27-005'     // requisição
    ],
    nivel2: [
      'Q-DID-DA-27-003',    // desapropriação extraordinária
      'Q-DID-DA-27-006',    // ocupação temporária
      'Q-DID-DA-27-007',    // limitações administrativas
      'Q-DID-DA-27-008'     // tombamento
    ],
    nivel3: [
      'Q-DID-DA-27-004',    // servidão x desapropriação
      'EX-DA-27-001',       // cenário: obra atravessa terreno
      'EX-DA-27-002'        // cenário: requisição em calamidade
    ],
    nivel4: [
      'EX-DA-27-003',       // integração DA-27 + DA-22 (esbulho administrativo)
      'EX-DA-27-004'        // integração DA-27 + DA-15 (função social / fundamento constitucional)
    ]
  },

  /* ============================================================
     REV-28 — Revisão integrada e domínio por questões
  ============================================================ */
  'REV-28': {
    nivel1: [
      'Q-DID-REV-28-001',   // revisão ativa x passiva
      'Q-DID-REV-28-004',   // revisão espaçada
      'Q-DID-REV-28-005'    // ciclo x cronograma
    ],
    nivel2: [
      'Q-DID-REV-28-002',   // banco de erros + classificação
      'Q-DID-REV-28-003',   // classificação do erro em caso concreto
      'EX-REV-28-001',      // identificação de tipo de erro em cenário novo
      'EX-REV-28-002'       // ação correta para cada tipo de erro
    ],
    nivel3: [
      'Q-DID-REV-28-006',   // integração GP + atendimento
      'Q-DID-REV-28-007',   // integração atos + improbidade
      'Q-DID-REV-28-008'    // integração organização + licitação
    ],
    nivel4: [
      'EX-REV-28-003',      // integração método + conteúdo específico (DA-19)
      'EX-REV-28-004'       // integração método + revisão adaptativa (conteúdo do próprio REV-28)
    ]
  }

};

window.EXERCISE_EXTRA_QUESTIONS = [

  /* ============================================================
     EX-ADM-02-001 — Integração PODC + Controle (ADM-06)
  ============================================================ */
  {
    id: 'EX-ADM-02-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-02',
    subtema: 'Integração PODC + Controle (ADM-06)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma Secretaria de Educação definiu, no início do ano, a meta de elevar o IDEB em 15%. Ao final do período, a equipe de gestão comparou o resultado obtido com a meta e identificou que duas escolas ficaram abaixo do esperado. A partir daí, decidiu reformular o plano de formação de professores para o ano seguinte. Considerando a integração entre as funções administrativas, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A comparação dos resultados com a meta é função de organização; a reformulação do plano é função de direção.' },
      { id: 'B', texto: 'A comparação dos resultados com a meta é função de controle; a reformulação do plano demonstra o caráter cíclico do PODC, em que o controle realimenta novo planejamento.' },
      { id: 'C', texto: 'A definição da meta é função de direção; a reformulação do plano é função de controle.' },
      { id: 'D', texto: 'O PODC é linear: após o controle, o ciclo se encerra e não há retorno ao planejamento.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A comparação entre resultado e meta é CONTROLE. A reformulação do plano a partir dos desvios identificados demonstra o CICLO do PODC: o controle realimenta o planejamento. As funções não são estanques.',
      incorretas: { A: 'Inverte as funções.', C: 'Inverte as funções.', D: 'O PODC é cíclico, não linear.' },
      conceitoCobrado: 'Integração PODC (ADM-02) + Controle (ADM-06)',
      pegadinha: 'Tratar o PODC como sequência linear que termina no controle.',
      comoApareceEmConcurso: 'Cenário aplicado que exige reconhecer duas funções e sua interdependência.'
    },
    tags: ['integração', 'PODC', 'controle']
  },

  /* ============================================================
     EX-ADM-02-002 — Integração PODC + Processo Administrativo (DA-25)
  ============================================================ */
  {
    id: 'EX-ADM-02-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-02',
    subtema: 'Integração PODC + Processo Administrativo (Lei 9.784/99)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um gestor afirma: "Na minha rotina, processo administrativo e PODC são a mesma coisa — ambos organizam o trabalho". Sobre essa afirmação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Está correta: são sinônimos, pois ambos tratam da organização do trabalho administrativo.' },
      { id: 'B', texto: 'Confunde dois conceitos distintos: o PODC é o ciclo de funções do gestor (planejar, organizar, dirigir, controlar); o processo administrativo da Lei 9.784/99 é o rito jurídico de decisão da Administração, com fases, prazos, contraditório e ampla defesa.' },
      { id: 'C', texto: 'Está correta apenas no âmbito federal, pois a Lei 9.784/99 aplica-se à União.' },
      { id: 'D', texto: 'Está correta apenas no âmbito estadual.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'São conceitos DIFERENTES. O PODC é o ciclo de funções da Teoria Geral. O processo administrativo da Lei 9.784/99 é o rito jurídico de decisão (instauração, instrução, defesa, relatório, decisão, recursos), com contraditório e ampla defesa.',
      incorretas: { A: 'Não são sinônimos.', C: 'A distinção não depende do ente federativo.', D: 'Idem.' },
      conceitoCobrado: 'Integração PODC (ADM-02) + Processo Administrativo (DA-25)',
      pegadinha: 'Confundir os dois conceitos pelo nome parecido.',
      comoApareceEmConcurso: 'Pegadinha clássica em provas que combinam Administração e Direito Administrativo.'
    },
    tags: ['integração', 'PODC', 'processo administrativo']
  },

  /* ============================================================
     EX-ADM-03-001 — Integração Planejamento + Controle (ADM-06)
  ============================================================ */
  {
    id: 'EX-ADM-03-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-03',
    subtema: 'Integração Planejamento + Controle (ADM-06)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um órgão público definiu como meta reduzir em 20% o tempo médio de atendimento ao cidadão. Para acompanhar, estabeleceu o indicador "tempo médio de espera" e passou a medi-lo mensalmente. Ao final do trimestre, o indicador mostrou queda de apenas 5%, e o gestor decidiu revisar o fluxo de triagem. Considerando a relação entre planejamento e controle, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A meta é elemento do controle; o indicador é elemento do planejamento.' },
      { id: 'B', texto: 'A meta é elemento do PLANEJAMENTO; o indicador pertence ao CONTROLE (é o instrumento de medição); a revisão do fluxo é AÇÃO CORRETIVA, que realimenta o planejamento.' },
      { id: 'C', texto: 'Planejamento e controle são funções independentes: a definição da meta não se relaciona com a medição.' },
      { id: 'D', texto: 'A ação corretiva encerra o ciclo de controle e não se relaciona com o planejamento.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'META = planejamento (padrão). INDICADOR = controle (métrica). AÇÃO CORRETIVA = resposta do controle que realimenta o planejamento. O controle é o "espelho" do planejamento: sem padrão, não há como medir; sem medição, não há como corrigir.',
      incorretas: { A: 'Inverte os papéis.', C: 'São interdependentes (funções-espelho).', D: 'A ação corretiva alimenta novo planejamento.' },
      conceitoCobrado: 'Integração Planejamento (ADM-03) + Controle (ADM-06)',
      pegadinha: 'Inverter meta (planejamento) com indicador (controle).',
      comoApareceEmConcurso: 'Cenário aplicado com duas funções.'
    },
    tags: ['integração', 'planejamento', 'controle']
  },

  /* ============================================================
     EX-ADM-03-002 — Integração BSC + Gestão por Processos (ADM-11)
  ============================================================ */
  {
    id: 'EX-ADM-03-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-03',
    subtema: 'Integração BSC + Gestão por Processos (ADM-11)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma autarquia municipal adotou o Balanced Scorecard (BSC) e definiu, na perspectiva de PROCESSOS INTERNOS, a meta de "reduzir de 15 para 5 dias o tempo de emissão de alvará". Para alcançar a meta, mapeou o fluxo do processo, identificou o gargalo na análise jurídica e redesenhou a etapa de conferência documental. Sobre a relação entre BSC e gestão por processos, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'BSC e gestão por processos são ferramentas incompatíveis: o BSC mede resultados, a gestão por processos organiza o fluxo, sem relação entre elas.' },
      { id: 'B', texto: 'O BSC define METAS e INDICADORES por perspectiva; a gestão por processos fornece o MÉTODO para alcançar a meta, ao mapear o fluxo, identificar gargalos e redesenhar etapas. São complementares: o BSC diz "o quê e quanto"; a gestão por processos diz "como".' },
      { id: 'C', texto: 'A gestão por processos substitui o BSC, pois é mais operacional.' },
      { id: 'D', texto: 'O BSC é exclusivo da perspectiva financeira; não se aplica a processos internos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O BSC traduz a estratégia em objetivos, indicadores, metas e iniciativas por perspectiva. A gestão por processos MAPEIA o fluxo, identifica gargalos e redesenha etapas para alcançar as metas. São complementares: o BSC define "o quê" e "quanto"; a gestão por processos define "como".',
      incorretas: { A: 'São complementares, não incompatíveis.', C: 'Não substitui; complementa.', D: 'O BSC tem quatro perspectivas, incluindo processos internos.' },
      conceitoCobrado: 'Integração BSC (ADM-03) + Gestão por Processos (ADM-11)',
      pegadinha: 'Tratar as ferramentas como excludentes em vez de complementares.',
      comoApareceEmConcurso: 'Cenário aplicado de gestão pública com múltiplas ferramentas.'
    },
    tags: ['integração', 'BSC', 'processos']
  },

  /* ============================================================
     EX-ADM-04-001 — Integração Estrutura + Administração Indireta (DA-16)
  ============================================================ */
  {
    id: 'EX-ADM-04-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-04',
    subtema: 'Integração Estrutura + Administração Indireta (DA-16)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma prefeitura decidiu criar uma autarquia municipal para gerir o serviço de transporte público, com patrimônio próprio, autonomia administrativa e financeira, vinculada à Secretaria de Mobilidade Urbana para fins de supervisão. Sobre a estrutura resultante, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Houve descentralização por outorga (criação de entidade com personalidade jurídica própria); a relação entre a autarquia e a Secretaria é de TUTELA (supervisão), não de hierarquia.' },
      { id: 'B', texto: 'Houve descentralização por delegação (a autarquia é empresa privada); a relação é de hierarquia.' },
      { id: 'C', texto: 'Houve desconcentração (divisão interna entre órgãos da mesma pessoa jurídica); a autarquia não tem personalidade própria.' },
      { id: 'D', texto: 'Houve centralização (a autarquia é órgão da administração direta); não há supervisão.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A criação de autarquia é DESCENTRALIZAÇÃO POR OUTORGA (entidade com personalidade jurídica própria). A relação com a Administração Direta é de TUTELA (supervisão finalística), não de hierarquia. Autarquia não é empresa privada nem órgão sem personalidade.',
      incorretas: { B: 'Autarquia não é empresa privada; relação é tutela.', C: 'Desconcentração não cria nova pessoa; autarquia tem personalidade.', D: 'Autarquia integra a Administração Indireta; relação é tutela.' },
      conceitoCobrado: 'Integração Estrutura (ADM-04) + Administração Indireta (DA-16)',
      pegadinha: 'Confundir descentralização por outorga (autarquia) com delegação (privada) e hierarquia com tutela.',
      comoApareceEmConcurso: 'Cenário aplicado que exige combinar Teoria Geral com Direito Administrativo.'
    },
    tags: ['integração', 'estrutura', 'administração indireta']
  },

  /* ============================================================
     EX-ADM-05-001 — Integração Liderança (ADM-05) + Habilidades/Níveis (ADM-01)
  ============================================================ */
  {
    id: 'EX-ADM-05-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-05',
    subtema: 'Integração Liderança + Habilidades de Katz (ADM-01)',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Uma servidora recém-promovida a supervisora de um setor operacional precisa, ao mesmo tempo, dominar os procedimentos técnicos (conferir rotinas, operar o sistema) e conduzir uma equipe desmotivada, com conflitos internos. Ao ser promovida, no ano seguinte, a gerente de área, passará a lidar também com o planejamento do departamento e a integração com outras áreas. Considerando o modelo de Katz e os níveis organizacionais, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A servidora usará apenas habilidades técnicas em todos os níveis, pois a liderança é inata.' },
      { id: 'B', texto: 'No nível operacional (supervisão), predominam as habilidades técnicas; as humanas são exigidas em todos os níveis, com destaque no tático; no nível gerencial (tático), cresce a exigência de habilidades conceituais.' },
      { id: 'C', texto: 'A promoção a gerente elimina a necessidade de habilidades humanas, pois o foco passa a ser apenas o planejamento.' },
      { id: 'D', texto: 'As habilidades conceituais são mais exigidas no nível operacional do que no estratégico.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O modelo de Katz relaciona as habilidades aos níveis: técnicas (operacional), humanas (todos os níveis, com destaque no tático) e conceituais (estratégico/tático). Ao subir de nível, a exigência de conceituais cresce — sem eliminar as humanas.',
      incorretas: { A: 'A liderança não é inata e o modelo de Katz relaciona habilidades a níveis.', C: 'As humanas continuam necessárias em todos os níveis.', D: 'As conceituais predominam no estratégico, não no operacional.' },
      conceitoCobrado: 'Integração Liderança (ADM-05) + Habilidades de Katz (ADM-01)',
      pegadinha: 'Achar que subir de nível elimina a necessidade de habilidades humanas.',
      comoApareceEmConcurso: 'Cenário aplicado que combina duas teorias clássicas.'
    },
    tags: ['integração', 'liderança', 'Katz']
  },

  /* ============================================================
     EX-ADM-06-001 — Integração Controle (ADM-06) + Gestão por Processos (ADM-11)
  ============================================================ */
  {
    id: 'EX-ADM-06-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-06',
    subtema: 'Integração Controle + Gestão por Processos (ADM-11)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma Secretaria de Saúde mediu que o tempo médio de matrícula em creches subiu de 5 para 15 dias. Para entender o problema, a equipe mapeou o fluxo completo (inscrição → conferência → análise de vagas → confirmação → comunicação), identificando que a etapa de análise de vagas acumulava pedidos e limitava todo o processo. A partir disso, decidiu reforçar a equipe nessa etapa específica e acompanhar mensalmente o novo tempo médio. Sobre a relação entre as ferramentas utilizadas, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A medição do tempo é controle; o mapeamento é gestão por processos; a intervenção na etapa crítica é ação corretiva baseada na identificação do gargalo. As ferramentas se complementam: o controle diagnostica, a gestão por processos explica.' },
      { id: 'B', texto: 'O controle e a gestão por processos são incompatíveis: um mede, o outro organiza, sem relação entre eles.' },
      { id: 'C', texto: 'O gargalo é sempre a primeira etapa do processo, e o controle só atua no final.' },
      { id: 'D', texto: 'A intervenção na etapa de análise de vagas é planejamento, não ação corretiva.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Controle mede e compara com padrões; gestão por processos mapeia o fluxo e identifica o gargalo; a ação corretiva atua na etapa crítica. São ferramentas complementares — não concorrentes.',
      incorretas: { B: 'São complementares.', C: 'Gargalo não é necessariamente a primeira etapa.', D: 'A intervenção reativa é ação corretiva.' },
      conceitoCobrado: 'Integração Controle (ADM-06) + Gestão por Processos (ADM-11)',
      pegadinha: 'Tratar as ferramentas como excludentes.',
      comoApareceEmConcurso: 'Cenário aplicado que combina diagnóstico (controle) com explicação (processos).'
    },
    tags: ['integração', 'controle', 'processos']
  },

  /* ============================================================
     EX-ADM-06-002 — Integração Controle (ADM-06) + Controle da Adm. Pública (DA-23)
  ============================================================ */
  {
    id: 'EX-ADM-06-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-06',
    subtema: 'Integração Controle Administrativo (ADM-06) + Controle da Administração Pública (DA-23)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um gestor público acompanha mensalmente os indicadores de sua equipe (tempo de resposta, taxa de erro, satisfação), ajustando o fluxo quando detecta desvio. Paralelamente, a Controladoria-Geral do órgão audita os procedimentos e o Tribunal de Contas realiza fiscalização anual. Sobre as formas de controle em atuação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Todas as situações são controle administrativo, pois envolvem órgãos públicos.' },
      { id: 'B', texto: 'A atuação do gestor é CONTROLE ADMINISTRATIVO (função do PODC); a da Controladoria é CONTROLE INTERNO (dentro do próprio Poder); a do Tribunal de Contas é CONTROLE EXTERNO (auxilia o Legislativo). São três dimensões complementares, exercidas por atores distintos.' },
      { id: 'C', texto: 'A Controladoria exerce controle externo, e o Tribunal de Contas exerce controle interno.' },
      { id: 'D', texto: 'O Tribunal de Contas só pode atuar se o gestor não fizer o controle administrativo.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'GESTOR → controle administrativo (PODC). CONTROLADORIA → controle interno (art. 74, CF). TCU → controle externo (art. 71, CF). Cada um tem seu papel, sem substituir os outros.',
      incorretas: { A: 'São dimensões distintas.', C: 'Inverte.', D: 'Atuam de forma complementar, não subsidiária.' },
      conceitoCobrado: 'Integração Controle Administrativo (ADM-06) + Controle da Adm. Pública (DA-23)',
      pegadinha: 'Confundir controle interno com controle externo e tratá-los como excludentes.',
      comoApareceEmConcurso: 'Cenário que exige distinguir atores e naturezas do controle.'
    },
    tags: ['integração', 'controle', 'DA-23']
  },

  /* ============================================================
     EX-ADM-07-001 — Integração Gestão por Competências (ADM-07) + Estrutura (ADM-04)
  ============================================================ */
  {
    id: 'EX-ADM-07-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-07',
    subtema: 'Integração Gestão por Competências (ADM-07) + Estrutura (ADM-04)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma autarquia decidiu alinhar a gestão de pessoas à sua estrutura organizacional. Para cada departamento (divisão funcional), definiu o mapa de competências (conhecimentos, habilidades e atitudes) exigido pelos cargos. Em seguida, usou esse mapa para orientar recrutamento, avaliação de desempenho e treinamento. Sobre a relação entre gestão por competências e estrutura, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A gestão por competências substitui a estrutura organizacional, tornando a departamentalização desnecessária.' },
      { id: 'B', texto: 'A departamentalização funcional fornece o QUADRO no qual as competências são aplicadas; a gestão por competências fornece o CONTEÚDO (CHA) exigido em cada posição. São complementares: a estrutura diz onde, as competências dizem o quê.' },
      { id: 'C', texto: 'A gestão por competências só funciona em estruturas matriciais.' },
      { id: 'D', texto: 'Competências e estrutura são independentes: a estrutura não influencia as competências exigidas.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Estrutura (divisão funcional) define os departamentos; competências (CHA) definem o que cada cargo exige. Complementares: estrutura diz ONDE, competências dizem O QUÊ.',
      incorretas: { A: 'Não substitui — complementa.', C: 'Aplica-se a qualquer estrutura.', D: 'A estrutura condiciona as competências.' },
      conceitoCobrado: 'Integração Gestão por Competências (ADM-07) + Estrutura (ADM-04)',
      pegadinha: 'Tratar competências e estrutura como independentes.',
      comoApareceEmConcurso: 'Cenário que combina duas ferramentas clássicas.'
    },
    tags: ['integração', 'competências', 'estrutura']
  },

  /* ============================================================
     EX-ADM-08-001 — Integração Comunicação (ADM-08) + Impessoalidade (DA-15)
  ============================================================ */
  {
    id: 'EX-ADM-08-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-08',
    subtema: 'Integração Comunicação Institucional (ADM-08) + Impessoalidade (DA-15)',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'A Secretaria de Saúde de um município publica, no portal oficial, uma campanha de vacinação. Na peça, consta o nome do Secretário em destaque, sua foto e a frase "Gestão do Secretário X — compromisso com a vida". Ao mesmo tempo, a equipe de comunicação divulga internamente (por e-mail e mural) os novos protocolos de atendimento, com orientações claras aos servidores. Sobre as duas situações, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Ambas são comunicação institucional válida, pois a publicidade oficial permite a promoção pessoal do agente responsável.' },
      { id: 'B', texto: 'A campanha externa viola a IMPESSOALIDADE (art. 37, §1º, CF), que veda promoção pessoal de agentes públicos em atos, programas, obras e campanhas. A comunicação interna é legítima, pois visa informar servidores sobre protocolos, sem promoção pessoal.' },
      { id: 'C', texto: 'A comunicação interna é ilegal, pois envolve apenas servidores e não a população.' },
      { id: 'D', texto: 'A campanha externa é válida porque a impessoalidade não se aplica à comunicação institucional.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A promoção pessoal em campanha oficial viola a IMPESSOALIDADE (art. 37, §1º, CF). A comunicação interna, por sua vez, é legítima — informa servidores sobre protocolos, sem promoção pessoal.',
      incorretas: { A: 'A promoção pessoal é vedada.', C: 'Comunicação interna é legítima.', D: 'A impessoalidade se aplica a toda comunicação oficial.' },
      conceitoCobrado: 'Integração Comunicação Institucional (ADM-08) + Impessoalidade (DA-15)',
      pegadinha: 'Confundir publicidade institucional com promoção pessoal.',
      comoApareceEmConcurso: 'Cenário que combina comunicação organizacional com princípio constitucional.'
    },
    tags: ['integração', 'comunicação', 'impessoalidade']
  },

  /* ============================================================
     EX-ADM-09-001 — Integração Gestão da Qualidade (ADM-09) + Controle (ADM-06)
  ============================================================ */
  {
    id: 'EX-ADM-09-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-09',
    subtema: 'Integração Gestão da Qualidade (ADM-09) + Controle (ADM-06)',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Um órgão público aplica o PDCA para reduzir o tempo de atendimento: planeja a meta (de 20 para 10 min), executa (redistribui atendentes), verifica (mede tempo médio) e age (padroniza o que funcionou). Paralelamente, define indicadores de qualidade (tempo de espera, satisfação) e os compara com padrões estabelecidos. Sobre a relação entre PDCA e a função administrativa de controle, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São incompatíveis: o PDCA só se aplica ao setor privado, o controle é exclusivo do setor público.' },
      { id: 'B', texto: 'O PDCA é uma ferramenta de qualidade (ciclo de melhoria); o controle é uma função administrativa. O controle define padrões e mede o desempenho; o PDCA organiza a correção em ciclo contínuo. São complementares: o controle detecta o desvio, o PDCA estrutura a ação corretiva.' },
      { id: 'C', texto: 'O PDCA substitui o controle, pois já inclui a verificação (Check).' },
      { id: 'D', texto: 'O controle substitui o PDCA, pois já inclui a comparação com padrões.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O PDCA é ferramenta de qualidade (Plan/Do/Check/Act); o controle é função administrativa (definir padrões, medir, comparar, agir). São complementares — o controle alimenta o PDCA e vice-versa.',
      incorretas: { A: 'Aplicam-se a qualquer organização.', C: 'Não substitui — complementa.', D: 'Idem.' },
      conceitoCobrado: 'Integração Gestão da Qualidade (ADM-09) + Controle (ADM-06)',
      pegadinha: 'Tratar PDCA e controle como excludentes.',
      comoApareceEmConcurso: 'Cenário que combina ferramenta de qualidade com função administrativa.'
    },
    tags: ['integração', 'qualidade', 'controle']
  },

  /* ============================================================
     EX-ADM-09-002 — Integração Gestão da Qualidade (ADM-09) + Gestão por Processos (ADM-11)
  ============================================================ */
  {
    id: 'EX-ADM-09-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-09',
    subtema: 'Integração Qualidade (ADM-09) + Gestão por Processos (ADM-11)',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Uma Secretaria de Saúde identifica que 70% das reclamações vêm de uma única etapa (triagem). Ao mapear o fluxo, percebe que a etapa acumula pedidos. Para investigar as causas, usa Ishikawa; para priorizar as ações, usa Pareto; para redesenhar o fluxo, produz o TO-BE. Sobre a relação entre as ferramentas da qualidade e a gestão por processos, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São incompatíveis: uma ferramenta analisa dados, a outra organiza pessoas.' },
      { id: 'B', texto: 'A gestão por processos fornece o MAPA (fluxo completo) e identifica o GARGALO; as ferramentas da qualidade (Ishikawa, Pareto, PDCA) ajudam a investigar, priorizar e melhorar. O mapeamento diz ONDE intervir; as ferramentas dizem POR QUÊ e em QUE ORDEM.' },
      { id: 'C', texto: 'A gestão por processos substitui as ferramentas da qualidade.' },
      { id: 'D', texto: 'Ishikawa e Pareto são a mesma ferramenta aplicada a contextos diferentes.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Complementares: o mapeamento (gestão por processos) localiza o gargalo; as ferramentas da qualidade investigam causas (Ishikawa), priorizam (Pareto) e organizam a melhoria (PDCA).',
      incorretas: { A: 'São complementares.', C: 'Não substitui.', D: 'São ferramentas distintas.' },
      conceitoCobrado: 'Integração Qualidade (ADM-09) + Processos (ADM-11)',
      pegadinha: 'Tratar as ferramentas como concorrentes.',
      comoApareceEmConcurso: 'Cenário aplicado que exige combinar mapeamento com análise de causas.'
    },
    tags: ['integração', 'qualidade', 'processos']
  },

  /* ============================================================
     EX-ADM-10-001 — Integração Gestão de Materiais (ADM-10) + Controle (ADM-06)
  ============================================================ */
  {
    id: 'EX-ADM-10-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-10',
    subtema: 'Integração Gestão de Materiais (ADM-10) + Controle (ADM-06)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um almoxarifado realiza inventário periódico (contagem física), comparando os registros do sistema com os itens efetivamente em estoque. Quando há divergência, investiga a causa (furto, erro de lançamento, avaria) e adota ação corretiva. Paralelamente, mede o giro de estoque e o custo de armazenagem. Sobre a relação entre gestão de materiais e controle, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São incompatíveis: gestão de materiais é operacional, controle é estratégico.' },
      { id: 'B', texto: 'A gestão de materiais fornece o OBJETO (estoques, patrimônio, giro, custos); o controle fornece o MÉTODO (padrão, medição, comparação, ação corretiva). O inventário é exemplo de CONTROLE aplicado ao patrimônio. As duas áreas se complementam: a primeira organiza o recurso; a segunda verifica se o resultado corresponde ao esperado.' },
      { id: 'C', texto: 'O controle só existe no setor financeiro; gestão de materiais independe dele.' },
      { id: 'D', texto: 'O inventário é ferramenta de planejamento, não de controle.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Gestão de materiais é o objeto; controle é o método (padrão → medição → comparação → correção). O inventário aplica o ciclo de controle ao patrimônio.',
      incorretas: { A: 'São complementares.', C: 'Aplica-se a qualquer área.', D: 'Inventário é controle, não planejamento.' },
      conceitoCobrado: 'Integração Gestão de Materiais (ADM-10) + Controle (ADM-06)',
      pegadinha: 'Achar que o controle é exclusivo de áreas estratégicas.',
      comoApareceEmConcurso: 'Cenário aplicado que mostra o ciclo de controle no patrimônio.'
    },
    tags: ['integração', 'materiais', 'controle']
  },

  /* ============================================================
     EX-ADM-11-001 — Integração Processos (ADM-11) + Licitações (DA-21)
  ============================================================ */
  {
    id: 'EX-ADM-11-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-11',
    subtema: 'Integração Gestão por Processos (ADM-11) + Licitações (DA-21)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Em um órgão público, a licitação é conduzida por uma comissão que percorre etapas (preparatória → divulgação → propostas → julgamento → habilitação → recursal → homologação). Cada etapa é executada por atores diferentes (setor demandante, comissão, jurídico, autoridade superior), com entradas e saídas definidas. Sobre a classificação desse fluxo sob a ótica da gestão por processos, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É um PROJETO, pois cada licitação tem prazo definido e resultado único.' },
      { id: 'B', texto: 'É um PROCESSO: contínuo e repetitivo (ocorre sempre que há necessidade de contratação), com etapas inter-relacionadas que transformam input (demanda) em output (contrato), atravessando vários setores. Pode ser classificado como processo de APOIO — sustenta a atividade-fim do órgão, sem entregar valor direto ao cidadão.' },
      { id: 'C', texto: 'É um processo finalístico, pois atende diretamente o cidadão.' },
      { id: 'D', texto: 'Não é processo, pois a licitação é ato jurídico, não fluxo de trabalho.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A licitação é processo (repetitivo, contínuo, interfuncional). É de APOIO — suporta os processos finalísticos do órgão. Ato jurídico e fluxo de trabalho não são excludentes: a licitação tem forma jurídica E natureza processual.',
      incorretas: { A: 'Projeto é temporário e único; a licitação se repete.', C: 'É processo de apoio (não finalístico).', D: 'Todo ato jurídico pode ser mapeado como processo.' },
      conceitoCobrado: 'Integração Processos (ADM-11) + Licitações (DA-21)',
      pegadinha: 'Confundir processo com projeto ou classificá-lo como finalístico.',
      comoApareceEmConcurso: 'Cenário aplicado que exige combinar DA-21 com gestão por processos.'
    },
    tags: ['integração', 'processos', 'licitação']
  },

  /* ============================================================
     EX-ADM-11-002 — Integração Processos (ADM-11) + Atendimento (ADM-12)
  ============================================================ */
  {
    id: 'EX-ADM-11-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-11',
    subtema: 'Integração Gestão por Processos (ADM-11) + Atendimento (ADM-12)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Em uma Secretaria de Saúde, o fluxo de atendimento ao cidadão (recepção → triagem → consulta → entrega de receita) é executado por diferentes servidores e envolve o cidadão do início ao fim. O órgão identificou que o cidadão enfrenta 40 minutos de espera entre a triagem e a consulta, gerando reclamações. Sobre a natureza e a melhoria desse fluxo, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O atendimento é um ato isolado, não um processo: cada servidor faz a sua parte sem interdependência.' },
      { id: 'B', texto: 'O atendimento é um PROCESSO FINALÍSTICO (gera valor direto ao cidadão), com etapas interdependentes. A espera entre triagem e consulta é o GARGALO — deve ser identificado via mapeamento e priorizado. Melhorar o atendimento exige olhar o FLUXO como um todo, não cada etapa isolada.' },
      { id: 'C', texto: 'O atendimento é um processo de apoio, pois o cidadão é externo ao órgão.' },
      { id: 'D', texto: 'O atendimento não pode ser mapeado por envolver pessoas.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O atendimento é processo finalístico (valor direto ao cidadão), com gargalo na espera entre triagem e consulta. O olhar de processo enxerga o fluxo inteiro, não cada etapa isolada.',
      incorretas: { A: 'As etapas são interdependentes.', C: 'É finalístico (não de apoio).', D: 'Processos que envolvem pessoas são os mais comuns.' },
      conceitoCobrado: 'Integração Processos (ADM-11) + Atendimento (ADM-12)',
      pegadinha: 'Classificar como processo de apoio ou isolar o atendimento em ato.',
      comoApareceEmConcurso: 'Cenário aplicado que exige identificar gargalo no fluxo.'
    },
    tags: ['integração', 'processos', 'atendimento']
  },

  /* ============================================================
     EX-ADM-11-003 — Integração Processos (ADM-11) + Estrutura funcional (ADM-04)
  ============================================================ */
  {
    id: 'EX-ADM-11-003',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-11',
    subtema: 'Integração Gestão por Processos (ADM-11) + Estrutura funcional (ADM-04)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma prefeitura tem estrutura funcional (Secretarias de Saúde, Educação, Obras, Administração). Para emitir um alvará de funcionamento, o processo percorre quatro secretarias. O empreendedor precisa ir pessoalmente a cada uma, gerando retrabalho e atraso. Sobre a relação entre estrutura e processo, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A estrutura funcional é sempre a melhor opção, pois cada área domina seu tema.' },
      { id: 'B', texto: 'A ESTRUTURA FUNCIONAL (por departamento) gera SILOS: cada área otimiza a si mesma, mas o FLUXO PONTA A PONTA (processo) fica fragmentado, com retrabalho. A GESTÃO POR PROCESSOS busca romper essa fragmentação — sem eliminar a estrutura, mas integrando o fluxo. As duas visões são COMPLEMENTARES: estrutura organiza pessoas; processos organizam o trabalho.' },
      { id: 'C', texto: 'A gestão por processos elimina a estrutura organizacional, tornando os departamentos desnecessários.' },
      { id: 'D', texto: 'Estrutura e processo são independentes: a forma como o trabalho flui não depende de como as áreas estão organizadas.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A estrutura funcional gera silos; a gestão por processos busca o fluxo ponta a ponta. Não eliminam uma à outra — complementam-se.',
      incorretas: { A: 'Gera silos.', C: 'Não elimina — integra.', D: 'São interdependentes.' },
      conceitoCobrado: 'Integração Processos (ADM-11) + Estrutura (ADM-04)',
      pegadinha: 'Achar que gestão por processos elimina a departamentalização.',
      comoApareceEmConcurso: 'Cenário aplicado que exige romper com o raciocínio de silo.'
    },
    tags: ['integração', 'processos', 'estrutura']
  },

  /* ============================================================
     EX-ADM-12-001 — Integração Atendimento (ADM-12) + Impessoalidade (DA-15)
  ============================================================ */
  {
    id: 'EX-ADM-12-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-12',
    subtema: 'Integração Atendimento (ADM-12) + Impessoalidade (DA-15)',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Um servidor do INSS atende uma fila. Ao reconhecer um amigo, decide "adiantar" o atendimento dele, deixando outros cidadãos esperando. Paralelamente, quando um cidadão sem conhecimentos técnicos pede informação, o servidor usa linguagem clara e o encaminha corretamente. Sobre as duas situações, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Ambas são adequadas: o servidor pode priorizar amigos, desde que atenda os demais.' },
      { id: 'B', texto: 'A priorização do amigo viola a IMPESSOALIDADE (tratamento preferencial sem base legal — favoritismo). O atendimento ao cidadão leigo com linguagem clara é ADEQUADO e reflete boa prática (acessibilidade e cortesia). O servidor deve tratar todos com base em critérios objetivos (ordem de chegada, prioridade legal), não em relações pessoais.' },
      { id: 'C', texto: 'A priorização do amigo é legal porque a amizade é um critério subjetivo válido.' },
      { id: 'D', texto: 'O atendimento ao cidadão leigo é ilegal, pois o servidor deveria usar linguagem técnica.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A priorização viola a impessoalidade (favoritismo sem base legal). O atendimento claro ao cidadão leigo é boa prática, exigida pela acessibilidade e pela cortesia.',
      incorretas: { A: 'Favorecimento é vedado.', C: 'Relações pessoais não são critério legal.', D: 'Linguagem clara é o padrão adequado.' },
      conceitoCobrado: 'Integração Atendimento (ADM-12) + Impessoalidade (DA-15)',
      pegadinha: 'Confundir cortesia com favoritismo.',
      comoApareceEmConcurso: 'Cenário que combina atendimento com princípio constitucional.'
    },
    tags: ['integração', 'atendimento', 'impessoalidade']
  },

  /* ============================================================
     EX-ADM-12-002 — Integração Atendimento (ADM-12) + Comunicação (ADM-08)
  ============================================================ */
  {
    id: 'EX-ADM-12-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-12',
    subtema: 'Integração Atendimento (ADM-12) + Comunicação (ADM-08)',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Um servidor do guichê recebe um cidadão que reclama de um benefício negado. Ao ouvir com atenção, o servidor repete a demanda do cidadão para confirmar entendimento ("o senhor quer dizer que..."). Em seguida, explica a decisão com clareza, sem jargão, e informa o canal de recurso. O cidadão sai satisfeito. Sobre as práticas adotadas, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O servidor agiu errado: deveria ter usado jargão técnico para demonstrar domínio.' },
      { id: 'B', texto: 'O servidor aplicou ESCUTA ATIVA (feedback confirmatório — repetir a demanda para confirmar) e evitou a BARREIRA SEMÂNTICA (jargão). Essas práticas de comunicação (ADM-08) são essenciais no atendimento (ADM-12): garantem compreensão e humanizam o serviço. A satisfação do cidadão reflete a combinação das duas dimensões.' },
      { id: 'C', texto: 'O servidor agiu errado: a escuta ativa atrasa o atendimento e reduz a produtividade.' },
      { id: 'D', texto: 'Não há relação entre comunicação e atendimento: são áreas independentes.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Escuta ativa (feedback confirmatório) + ausência de barreira semântica (sem jargão) = atendimento eficaz. Comunicação e atendimento são dimensões complementares.',
      incorretas: { A: 'Jargão dificulta a compreensão.', C: 'Escuta ativa qualifica o atendimento, não o atrasa.', D: 'São interdependentes.' },
      conceitoCobrado: 'Integração Atendimento (ADM-12) + Comunicação (ADM-08)',
      pegadinha: 'Achar que comunicação e atendimento são áreas isoladas.',
      comoApareceEmConcurso: 'Cenário que combina escuta ativa com boas práticas de atendimento.'
    },
    tags: ['integração', 'atendimento', 'comunicação']
  },

  /* ============================================================
     EX-AP-13-001 — Aplicação dos sentidos em cenário
  ============================================================ */
  {
    id: 'EX-AP-13-001',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-13',
    subtema: 'Aplicação dos sentidos (objetivo/subjetivo/amplo/restrito)',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Considere quatro situações: (i) o Judiciário realiza licitação para comprar computadores; (ii) a Secretaria de Saúde do município emite alvará sanitário; (iii) a Prefeitura, por meio de seus servidores e órgãos, executa a política de vacinação; (iv) o Estado cria autarquia para gerir o transporte intermunicipal. Sobre os sentidos da Administração Pública, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: '(i) ilustra o sentido amplo (função administrativa exercida por outro Poder); (ii) ilustra o sentido objetivo (atividade administrativa); (iii) ilustra o sentido subjetivo (órgãos e pessoas); (iv) ilustra a descentralização para entidade da Administração Indireta.' },
      { id: 'B', texto: '(i) ilustra o sentido restrito; (ii) ilustra o sentido subjetivo; (iii) ilustra o sentido objetivo; (iv) ilustra desconcentração.' },
      { id: 'C', texto: 'Todas as situações ilustram o sentido restrito, pois envolvem o Executivo.' },
      { id: 'D', texto: 'Todas as situações ilustram o sentido subjetivo, pois envolvem órgãos públicos.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: '(i) Judiciário comprando = função administrativa → sentido AMPLO. (ii) Emissão de alvará = atividade → sentido OBJETIVO. (iii) Servidores e órgãos executando = quem faz → sentido SUBJETIVO. (iv) Criação de autarquia = descentralização para entidade da Indireta.',
      incorretas: { B: 'Inverte e confunde desconcentração com descentralização.', C: 'Só (ii) está no Executivo; (i) é Judiciário.', D: '(ii) é atividade, não órgão.' },
      conceitoCobrado: 'Sentidos da Administração Pública aplicados',
      pegadinha: 'Confundir sentido subjetivo (quem) com objetivo (o quê) em cenário.',
      comoApareceEmConcurso: 'Cenário que exige classificar 4 situações nos 4 sentidos.'
    },
    tags: ['sentido objetivo', 'subjetivo', 'amplo', 'restrito']
  },

  /* ============================================================
     EX-AP-13-002 — Interesse público x interesse do agente (nepotismo)
  ============================================================ */
  {
    id: 'EX-AP-13-002',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-13',
    subtema: 'Interesse público x interesse do agente (nepotismo)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um prefeito nomeia o próprio filho para um cargo em comissão de assessoramento, sob o argumento de que "a família tem tradição na política local e o filho tem preparo". Paralelamente, o mesmo prefeito determina que a Secretaria de Obras priorize a reforma de escolas em bairros carentes, contrariando interesses de empreiteiros que queriam obras em áreas nobres. Sobre as duas situações, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'As duas situações atendem ao interesse público, pois ambas visam o bem da coletividade.' },
      { id: 'B', texto: 'A nomeação do filho configura NEPOTISMO: confusão entre interesse público (coletividade) e interesse do AGENTE (particular). Viola a impessoalidade e a moralidade (Súmula Vinculante 13). Já a priorização de escolas em bairros carentes atende ao INTERESSE PÚBLICO (coletividade) e está alinhada com a supremacia e a indisponibilidade do interesse público.' },
      { id: 'C', texto: 'A priorização de escolas viola o interesse público, pois contraria empreiteiros.' },
      { id: 'D', texto: 'A nomeação do filho é legal, pois o prefeito tem competência para nomear cargos em comissão.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Nepotismo = confusão entre interesse público e interesse do agente. Viola impessoalidade e moralidade (SV 13). Priorizar escolas carentes = atendimento ao interesse público (coletividade).',
      incorretas: { A: 'Nepotismo não é interesse público.', C: 'O interesse público é o da coletividade, não o de empreiteiros.', D: 'A competência para nomear não legitima o nepotismo.' },
      conceitoCobrado: 'Interesse público x interesse do agente + nepotismo',
      pegadinha: 'Achar que a competência formal legitima qualquer nomeação.',
      comoApareceEmConcurso: 'Cenário que exige distinguir três interesses (público, do Estado, do agente).'
    },
    tags: ['interesse público', 'nepotismo', 'impessoalidade']
  },

  /* ============================================================
     EX-AP-13-003 — Integração AP-13 + DA-15 (princípios e regime jurídico)
  ============================================================ */
  {
    id: 'EX-AP-13-003',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-13',
    subtema: 'Integração AP-13 + DA-15 (regime jurídico-administrativo)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'A doutrina aponta que os princípios da SUPREMACIA e da INDISPONIBILIDADE do interesse público são os dois pilares do regime jurídico-administrativo. Sobre a relação entre esses pilares e os princípios expressos do art. 37 (LIMPE), é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São conceitos independentes: supremacia e indisponibilidade não se relacionam com o LIMPE.' },
      { id: 'B', texto: 'A SUPREMACIA fundamenta as PRERROGATIVAS da Administração (ex.: desapropriação, cláusulas exorbitantes), que expressam a preponderância do interesse público sobre o individual. A INDISPONIBILIDADE fundamenta as RESTRIÇÕES (ex.: legalidade estrita, impessoalidade), pois o administrador não pode dispor do interesse público. O LIMPE expressa, no plano principiológico, essa dupla face: prerrogativas e limites.' },
      { id: 'C', texto: 'A supremacia fundamenta apenas a legalidade; a indisponibilidade, apenas a eficiência.' },
      { id: 'D', texto: 'Indisponibilidade significa que o administrador pode dispor livremente do interesse público.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Supremacia = prerrogativas. Indisponibilidade = restrições. O LIMPE expressa essa dupla face: legalidade (restrição), impessoalidade (objetividade), moralidade (ética), publicidade (transparência), eficiência (resultado).',
      incorretas: { A: 'Estão interligados.', C: 'Ambos permeiam todos os princípios do LIMPE.', D: 'Indisponibilidade = NÃO pode dispor.' },
      conceitoCobrado: 'Integração AP-13 (regime jurídico-administrativo) + DA-15 (LIMPE)',
      pegadinha: 'Tratar supremacia e indisponibilidade como isoladas dos princípios expressos.',
      comoApareceEmConcurso: 'Cenário que exige articular os pilares do regime com o LIMPE.'
    },
    tags: ['integração', 'supremacia', 'indisponibilidade', 'LIMPE']
  },

  /* ============================================================
     EX-AP-13-004 — Integração AP-13 + DA-16 (direta/indireta x descentralização/desconcentração)
  ============================================================ */
  {
    id: 'EX-AP-13-004',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-13',
    subtema: 'Integração AP-13 + DA-16 (direta/indireta)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma prefeitura decide dividir a Secretaria de Saúde em coordenações regionais (Norte, Sul, Leste, Oeste), mantendo a mesma pessoa jurídica. Simultaneamente, cria uma autarquia municipal para gerir o serviço de água e esgoto, com patrimônio próprio. Sobre as duas decisões, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Ambas criam entidades da Administração Indireta, pois envolvem serviços públicos.' },
      { id: 'B', texto: 'A divisão em coordenações é DESCONCENTRAÇÃO (divisão interna entre órgãos da mesma pessoa jurídica — Administração Direta); a criação da autarquia é DESCENTRALIZAÇÃO POR OUTORGA (entidade com personalidade jurídica própria — Administração Indireta). São institutos distintos: descentralização envolve OUTRA pessoa; desconcentração, a MESMA pessoa.' },
      { id: 'C', texto: 'As duas são descentralização, pois ambas transferem a execução de serviços.' },
      { id: 'D', texto: 'A divisão em coordenações é descentralização, e a autarquia é desconcentração.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Coordenações = órgãos = mesma pessoa = DESCONCENTRAÇÃO. Autarquia = entidade com personalidade própria = DESCENTRALIZAÇÃO por outorga. São institutos distintos e frequentemente confundidos.',
      incorretas: { A: 'Só a autarquia cria entidade.', C: 'Só a autarquia é descentralização.', D: 'Inverte.' },
      conceitoCobrado: 'Integração AP-13 (direta/indireta) + DA-16 (descentralização/desconcentração)',
      pegadinha: 'Confundir descentralização com desconcentração.',
      comoApareceEmConcurso: 'Cenário que exige classificar decisões administrativas concretas.'
    },
    tags: ['integração', 'descentralização', 'desconcentração']
  },

  /* ============================================================
     EX-AP-14-001 — Identificação de modelo em cenário (práticas híbridas)
  ============================================================ */
  {
    id: 'EX-AP-14-001',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-14',
    subtema: 'Identificação de modelo em cenário (práticas híbridas)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um órgão público apresenta as seguintes práticas: (i) concurso público para ingresso na carreira; (ii) contratos de gestão com metas e indicadores de desempenho; (iii) exigência de procedimentos padronizados para toda e qualquer compra; (iv) premiação de equipes pelo alcance de metas de satisfação do cidadão. Sobre as práticas descritas, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Todas são marcas do modelo patrimonialista.' },
      { id: 'B', texto: 'Todas são marcas exclusivas do modelo gerencial.' },
      { id: 'C', texto: '(i) e (iii) são marcas BUROCRÁTICAS (meritocracia + formalismo); (ii) e (iv) são marcas GERENCIAIS (contratos de gestão + premiação por resultados). Práticas híbridas são comuns no Brasil — o modelo gerencial não eliminou a burocracia, mas coexiste com ela.' },
      { id: 'D', texto: '(i) e (ii) são burocráticas, e (iii) e (iv) são patrimonialistas.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Concurso público + procedimentos padronizados = BUROCRACIA. Contratos de gestão + premiação por metas = GERENCIAL. A administração pública brasileira combina as duas lógicas.',
      incorretas: { A: 'Não há marcas patrimonialistas.', B: 'Nem todas as práticas são gerenciais.', D: 'Classifica incorretamente.' },
      conceitoCobrado: 'Modelos de Administração Pública em cenário',
      pegadinha: 'Tratar os modelos como excludentes (na prática, coexistem).',
      comoApareceEmConcurso: 'Cenário que exige classificar práticas concretas em modelos.'
    },
    tags: ['modelos', 'patrimonialismo', 'burocracia', 'gerencial']
  },

  /* ============================================================
     EX-AP-14-002 — Integração AP-14 + DA-15 (eficiência / EC 19)
  ============================================================ */
  {
    id: 'EX-AP-14-002',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-14',
    subtema: 'Integração AP-14 + DA-15 (eficiência no art. 37)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'A EC 19/1998 inseriu o princípio da eficiência no caput do art. 37 da CF/88, integrando o LIMPE. Sobre a relação entre essa inserção e o modelo de Administração Pública, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A EC 19/1998 inseriu a eficiência por influência do modelo patrimonialista.' },
      { id: 'B', texto: 'A EC 19/1998 inseriu a eficiência como parte do projeto de ADMINISTRAÇÃO GERENCIAL (Reforma de 1995 — Bresser-Pereira): gestão por resultados, descentralização, avaliação de desempenho, foco no cidadão. A eficiência não é apenas econômica — é eficiência com interesse público. O LIMPE passa a exigir qualidade e resultado, e não apenas legalidade formal.' },
      { id: 'C', texto: 'A eficiência substituiu os demais princípios do LIMPE.' },
      { id: 'D', texto: 'A eficiência é princípio implícito, não expresso, mesmo após a EC 19/1998.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'EC 19/1998 = marco constitucional do GERENCIAL. Insere a eficiência no art. 37, exigindo qualidade e resultado. Não substitui os demais princípios — soma-se a eles.',
      incorretas: { A: 'É gerencial, não patrimonialista.', C: 'Não substitui — soma-se.', D: 'É expresso desde a EC 19/1998.' },
      conceitoCobrado: 'Integração AP-14 (Reforma de 1995) + DA-15 (eficiência)',
      pegadinha: 'Achar que a eficiência é implícita (não é, desde 1998) ou que substitui o LIMPE.',
      comoApareceEmConcurso: 'Cenário que exige conectar o modelo gerencial ao princípio da eficiência.'
    },
    tags: ['integração', 'eficiência', 'EC 19/1998', 'gerencial']
  },

  /* ============================================================
     EX-AP-14-003 — Integração AP-14 + ADM-01 (PODC no modelo gerencial)
  ============================================================ */
  {
    id: 'EX-AP-14-003',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-14',
    subtema: 'Integração AP-14 + ADM-01 (PODC no modelo gerencial)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um órgão público adota práticas do modelo gerencial: define metas de desempenho (contrato de gestão), descentraliza decisões, acompanha indicadores e avalia resultados. Sobre a relação entre essas práticas e o ciclo PODC, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O modelo gerencial dispensa o PODC, pois foca apenas em resultados.' },
      { id: 'B', texto: 'O modelo gerencial APLICA o PODC com ênfase em RESULTADOS: Planejamento (definir metas e indicadores) → Organização (estruturas flexíveis, descentralizadas) → Direção (liderança orientada a metas) → Controle (avaliação de desempenho e correção). A diferença em relação ao modelo burocrático está no FOCO (resultados em vez de procedimentos), não na estrutura do PODC.' },
      { id: 'C', texto: 'O PODC só existe no modelo burocrático.' },
      { id: 'D', texto: 'O modelo gerencial substituiu o controle pelo planejamento.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O PODC é estrutura da Administração. O modelo gerencial o aplica com foco em RESULTADOS — metas, indicadores, avaliação de desempenho. A burocracia também usa o PODC, mas com foco em PROCEDIMENTOS.',
      incorretas: { A: 'Dispensa não — enfatiza de outra forma.', C: 'Aplica-se a qualquer modelo.', D: 'Controle é essencial no gerencial (avaliação de desempenho).' },
      conceitoCobrado: 'Integração AP-14 (modelo gerencial) + ADM-01 (PODC)',
      pegadinha: 'Achar que o modelo gerencial dispensa o PODC.',
      comoApareceEmConcurso: 'Cenário que exige articular modelo de gestão com funções administrativas.'
    },
    tags: ['integração', 'gerencial', 'PODC']
  },

  /* ============================================================
     EX-DA-15-001 — Proporcionalidade em cenário (sanção)
  ============================================================ */
  {
    id: 'EX-DA-15-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-15',
    subtema: 'Proporcionalidade em cenário de sanção',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Em um município, dois fiscais adotam condutas distintas: (i) interdição por 30 dias de um restaurante, em razão de infração leve (falta de lixeira adequada), sendo que a lei prevê advertência ou multa para o caso; (ii) aplicação de simples advertência a empresa com contaminação comprovada de alimentos, infração gravíssima. Sobre as duas decisões, é CORRETO afirmar que ambas violam:',
    alternativas: [
      { id: 'A', texto: 'Apenas a legalidade, pois a lei prevê sanções específicas.' },
      { id: 'B', texto: 'Apenas a moralidade, pois as sanções foram arbitrárias.' },
      { id: 'C', texto: 'A RAZOABILIDADE e a PROPORCIONALIDADE: (i) por EXCESSO (sanção desproporcional à infração leve); (ii) por INSUFICIÊNCIA (sanção branda para infração gravíssima). A proporcionalidade exige adequação, necessidade e equilíbrio entre meio e fim.' },
      { id: 'D', texto: 'Apenas a publicidade, pois as decisões não foram divulgadas.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Ambas as sanções são desproporcionais: uma por excesso, outra por insuficiência. A proporcionalidade atua nos dois sentidos — nem mais, nem menos que o necessário.',
      incorretas: { A: 'A proporcionalidade é o vício central.', B: 'A moralidade não é o único princípio em jogo.', D: 'A publicidade não é o foco.' },
      conceitoCobrado: 'Razoabilidade e proporcionalidade em sanções',
      pegadinha: 'Achar que a proporcionalidade só se aplica ao excesso — a insuficiência também viola.',
      comoApareceEmConcurso: 'Cenário aplicado que exige analisar os dois lados da proporcionalidade.'
    },
    tags: ['proporcionalidade', 'razoabilidade', 'sanção']
  },

  /* ============================================================
     EX-DA-15-002 — Integração DA-15 + DA-16 (princípios e estrutura)
  ============================================================ */
  {
    id: 'EX-DA-15-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-15',
    subtema: 'Integração DA-15 + DA-16 (princípios aplicados à estrutura)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um dirigente de autarquia federal cede informalmente um servidor para outro órgão, sem processo formal, apenas por "troca de favores" entre dirigentes. Paralelamente, o mesmo órgão nega acesso a informações sobre a cessão, alegando "interesse institucional". Sobre as duas condutas, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Ambas violam apenas a legalidade, pois ambas ferem a lei.' },
      { id: 'B', texto: 'A cessão informal viola a LEGALIDADE e a IMPESSOALIDADE (troca de favores, sem processo formal e sem motivação); a negativa de informação viola a PUBLICIDADE e o direito de acesso à informação. Juntas, violam o LIMPE em múltiplas dimensões — não apenas a legalidade.' },
      { id: 'C', texto: 'Nenhuma viola princípios, pois o dirigente tem discricionariedade.' },
      { id: 'D', texto: 'Apenas a negativa de informação viola princípio, pois a cessão é ato discricionário.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Cessão informal = legalidade (forma) + impessoalidade (favorecimento). Negativa de informação = publicidade + direito de acesso (LAI). Não é só legalidade — são múltiplos princípios.',
      incorretas: { A: 'Vai além da legalidade formal.', C: 'Discricionariedade não autoriza favorecimento nem sigilo indevido.', D: 'A cessão informal viola princípios.' },
      conceitoCobrado: 'Integração DA-15 (princípios) + DA-16 (cessão de servidor entre entidades)',
      pegadinha: 'Reduzir a violação a um único princípio (legalidade) quando há vários.',
      comoApareceEmConcurso: 'Cenário que exige identificar múltiplas violações a princípios.'
    },
    tags: ['integração', 'impessoalidade', 'publicidade', 'cessão']
  },

  /* ============================================================
     EX-DA-15-003 — Integração DA-15 + DA-18 (princípios + anulação/revogação)
  ============================================================ */
  {
    id: 'EX-DA-15-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-15',
    subtema: 'Integração DA-15 + DA-18 (razoabilidade + anulação/revogação)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um agente aplica multa máxima por infração leve, sem motivação, por perseguição a desafeto. Posteriormente, a autoridade competente REVOGA a multa sob o argumento de "inconveniência administrativa". Sobre a situação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'As duas condutas são válidas, pois ambas se baseiam em competência administrativa.' },
      { id: 'B', texto: 'A multa viola a RAZOABILIDADE e a PROPORCIONALIDADE (sanção desproporcional), a MOTIVAÇÃO (ausente) e a MORALIDADE/IMPESSOALIDADE (perseguição). Já a "revogação" é INCORRETA: ato ILEGAL deve ser ANULADO (efeito ex tunc), não revogado (que é para mérito, ex nunc). A Administração deve usar o instituto correto — revogar ato ilegal é erro técnico.' },
      { id: 'C', texto: 'Só a primeira viola princípios; a segunda é válida.' },
      { id: 'D', texto: 'Nenhuma viola princípios; a discricionariedade permite ambas as condutas.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A multa viola razoabilidade/proporcionalidade + motivação + moralidade/impessoalidade. A "revogação" de ato ilegal é erro: o correto é ANULAÇÃO (Súmula 473 do STF — revogação é para mérito, não para ilegalidade).',
      incorretas: { A: 'Ambas têm vício.', C: 'A segunda conduta usa instituto errado.', D: 'Discricionariedade não cobre perseguição nem instituto errado.' },
      conceitoCobrado: 'Integração DA-15 (razoabilidade/moralidade) + DA-18 (anulação x revogação)',
      pegadinha: 'Não perceber que a autoridade deveria ANULAR, não revogar.',
      comoApareceEmConcurso: 'Cenário que exige detectar dois vícios: um na motivação, outro no instituto de extinção.'
    },
    tags: ['integração', 'anulação', 'revogação', 'proporcionalidade']
  },

  /* ============================================================
     EX-DA-16-001 — Classificação de entidades em cenário
  ============================================================ */
  {
    id: 'EX-DA-16-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-16',
    subtema: 'Classificação de entidades em cenário',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um Estado cria, por lei específica, três entidades: (i) uma para fiscalizar serviços de energia elétrica; (ii) uma para prestar assistência técnica rural; (iii) uma para explorar atividade econômica de data center. Sobre a natureza jurídica dessas entidades, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Todas são autarquias, pois todas integram a Administração Indireta.' },
      { id: 'B', texto: '(i) é AUTARQUIA DE REGIME ESPECIAL (agência reguladora); (ii) pode ser AUTARQUIA ou FUNDAÇÃO PÚBLICA (depende da lei que a criou); (iii) é EMPRESA ESTATAL (Empresa Pública ou SEM) — pessoa jurídica de direito privado, em razão da exploração de atividade econômica.' },
      { id: 'C', texto: 'Todas são empresas estatais, pois exercem atividade econômica.' },
      { id: 'D', texto: '(i) é empresa pública; (ii) é autarquia; (iii) é fundação pública.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Agência reguladora = autarquia de regime especial. Assistência técnica rural = autarquia/fundação (depende da lei). Exploração econômica = empresa estatal (EP/SEM). Cada entidade tem natureza própria, definida pela lei criadora e pela atividade.',
      incorretas: { A: 'Nem todas são autarquias.', C: 'Só a (iii) explora atividade econômica.', D: 'Classifica as três incorretamente.' },
      conceitoCobrado: 'Classificação das entidades da Administração Indireta',
      pegadinha: 'Achar que toda entidade da Indireta é autarquia ou empresa.',
      comoApareceEmConcurso: 'Cenário que exige classificar entidades concretas pela atividade.'
    },
    tags: ['agência reguladora', 'autarquia', 'empresa estatal']
  },

  /* ============================================================
     EX-DA-16-002 — Integração DA-16 + DA-17 (regime de pessoal)
  ============================================================ */
  {
    id: 'EX-DA-16-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-16',
    subtema: 'Integração DA-16 + DA-17 (regime de pessoal: EP x autarquia)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Dois concursados conversam: o primeiro foi aprovado em concurso para uma empresa pública federal (EP); o segundo, em concurso para uma autarquia federal. O primeiro reclama que a empresa aplica demissão sem processo administrativo; o segundo afirma que não pode ser transferido de ofício sem sua concordância. Sobre os regimes:',
    alternativas: [
      { id: 'A', texto: 'Ambos são servidores estatutários e têm os mesmos direitos e deveres.' },
      { id: 'B', texto: 'O primeiro é EMPREGADO PÚBLICO (celetista — CLT); o segundo é SERVIDOR ESTATUTÁRIO (regime jurídico único — Lei 8.112/90 e similares). Os regimes são distintos: demissão na EP segue a CLT (com exigência de motivação em algumas hipóteses por força da jurisprudência); o estatutário tem estabilidade e processo administrativo disciplinar; a remoção de ofício é possível em ambos, mas com regras próprias.' },
      { id: 'C', texto: 'Ambos são celetistas, pois foram aprovados em concurso.' },
      { id: 'D', texto: 'O primeiro é estatutário; o segundo é celetista.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'EP/SEM = empregado público (CLT). Autarquia/fundação = servidor estatutário. Regimes distintos. A jurisprudência (STF) exige motivação em algumas demissões de empregados de EP/SEM.',
      incorretas: { A: 'Regimes diferentes.', C: 'O da autarquia é estatutário, não celetista.', D: 'Inverte.' },
      conceitoCobrado: 'Integração DA-16 (natureza da entidade) + DA-17 (regime de pessoal)',
      pegadinha: 'Achar que concurso define o regime — quem define é a natureza da entidade.',
      comoApareceEmConcurso: 'Cenário que combina estrutura + regime de pessoal.'
    },
    tags: ['integração', 'empregado público', 'servidor estatutário']
  },

  /* ============================================================
     EX-DA-16-003 — Integração DA-16 + DA-18 (agência reguladora + poder normativo)
  ============================================================ */
  {
    id: 'EX-DA-16-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-16',
    subtema: 'Integração DA-16 + DA-18 (agência reguladora + poder normativo)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma agência reguladora federal (autarquia de regime especial) edita resolução estabelecendo requisitos técnicos para exploração de serviço público por particulares. Um particular impugna a resolução alegando que "a agência não tem competência para criar obrigações". Sobre a situação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O particular tem razão: agências reguladoras só executam, não normatizam.' },
      { id: 'B', texto: 'A agência reguladora tem PODER NORMATIVO (espécie de poder regulamentar) para editar resoluções que detalhem a lei, SEM INOVAR na ordem jurídica. As obrigações criadas são as JÁ PREVISTAS em lei. O STF reconhece a competência normativa das agências reguladoras, dentro dos limites legais. O particular está errado.' },
      { id: 'C', texto: 'Só o Presidente da República pode editar resolução, não a agência.' },
      { id: 'D', texto: 'Só o Congresso Nacional pode criar obrigações, sem exceção.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Agências reguladoras têm poder normativo para detalhar a lei — sem inovar. STF reconhece essa competência, desde que respeitados os limites legais.',
      incorretas: { A: 'Agências normatizam, dentro dos limites legais.', C: 'Presidente edita decreto; agência edita resolução.', D: 'O detalhamento é da agência.' },
      conceitoCobrado: 'Integração DA-16 (agência reguladora) + DA-18 (poder normativo)',
      pegadinha: 'Achar que só o Executivo federal pode editar normas.',
      comoApareceEmConcurso: 'Cenário que combina natureza da entidade com poder administrativo.'
    },
    tags: ['integração', 'agência reguladora', 'poder normativo']
  },

  /* ============================================================
     EX-DA-17-001 — Integração Agentes Públicos (DA-17) + Estrutura (DA-16)
  ============================================================ */
  {
    id: 'EX-DA-17-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-17',
    subtema: 'Integração Agentes Públicos (DA-17) + Estrutura (DA-16)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um órgão público possui quatro pessoas atuando em contextos distintos: (i) um aprovado em concurso para autarquia federal; (ii) um aprovado em concurso para empresa pública federal; (iii) um nomeado para cargo em comissão de assessoramento; (iv) um servidor de carreira exercendo função de confiança de direção. Sobre os vínculos e regimes, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: '(i) e (ii) têm o mesmo regime (estatutário), pois ambos fizeram concurso.' },
      { id: 'B', texto: '(i) é SERVIDOR ESTATUTÁRIO (cargo efetivo, autarquia — direito público); (ii) é EMPREGADO PÚBLICO (emprego, CLT — empresa pública); (iii) é ocupante de CARGO EM COMISSÃO (livre nomeação e exoneração, sem vínculo efetivo); (iv) é SERVIDOR DE CARREIRA em FUNÇÃO DE CONFIANÇA (privativa de efetivo). A natureza da entidade e do vínculo define o regime — não o simples fato de ter feito concurso.' },
      { id: 'C', texto: 'Todos são servidores estatutários, pois atuam na Administração Pública.' },
      { id: 'D', texto: '(iii) e (iv) são a mesma coisa: ambos são cargos em comissão.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Autarquia = servidor estatutário; EP/SEM = empregado público (CLT); cargo em comissão = livre nomeação (pode ser externo); função de confiança = privativa de efetivo. A natureza do vínculo define o regime.',
      incorretas: { A: 'EP não é estatutária.', C: 'EP/SEM são celetistas.', D: 'Função de confiança é distinta de cargo em comissão (é privativa de efetivo).' },
      conceitoCobrado: 'Integração Agentes Públicos (DA-17) + Estrutura (DA-16)',
      pegadinha: 'Achar que concurso define o regime — o que define é a natureza da entidade.',
      comoApareceEmConcurso: 'Cenário aplicado que exige distinguir quatro vínculos.'
    },
    tags: ['integração', 'agentes públicos', 'cargo', 'emprego', 'função']
  },

  /* ============================================================
     EX-DA-18-001 — Integração Poderes (DA-18) + Atos (DA-19)
  ============================================================ */
  {
    id: 'EX-DA-18-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-18',
    subtema: 'Integração Poderes (DA-18) + Atos Administrativos (DA-19)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Três agentes praticam atos com vícios distintos: (i) um servidor sem competência aplica multa a um particular; (ii) um fiscal usa o poder de polícia para interditar estabelecimento de um desafeto, sem qualquer infração; (iii) um chefe edita decreto regulamentar criando obrigação nova, não prevista em lei. Sobre os vícios e os institutos de controle, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Todos os atos são sanáveis por convalidação, pois a Administração pode corrigir qualquer vício.' },
      { id: 'B', texto: '(i) é EXCESSO DE PODER (vício de competência) — em regra, sanável por convalidação; (ii) é DESVIO DE PODER (vício de finalidade) — em regra, insanável, com nulidade; (iii) é EXCESSO NO PODER REGULAMENTAR (decreto inovando) — nulo, pois regulamento não pode criar obrigações. Em todos os casos, o vício compromete a validade e autoriza controle (anulação/autotutela).' },
      { id: 'C', texto: 'Só (iii) é inválido; (i) e (ii) são válidos por discricionariedade.' },
      { id: 'D', texto: 'Os três atos são válidos, pois o agente público tem poder discricionário.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '(i) excesso de poder (competência — sanável); (ii) desvio de poder (finalidade — insanável); (iii) excesso no poder regulamentar (decreto inovando — nulo). Todos comprometem a validade do ato.',
      incorretas: { A: 'Nem todo vício é sanável (finalidade, motivo, objeto são insanáveis).', C: 'Os três são inválidos.', D: 'Discricionariedade não cobre abuso de poder.' },
      conceitoCobrado: 'Integração Poderes (DA-18) + Atos Administrativos (DA-19)',
      pegadinha: 'Achar que excesso no poder regulamentar é sanável ou que desvio de finalidade é convalidável.',
      comoApareceEmConcurso: 'Cenário que exige classificar 3 vícios e identificar a forma de controle.'
    },
    tags: ['integração', 'poderes', 'atos', 'abuso']
  },

  /* ============================================================
     EX-DA-18-002 — Integração Poderes (DA-18) + Liderança/Hierarquia (ADM-05)
  ============================================================ */
  {
    id: 'EX-DA-18-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-18',
    subtema: 'Integração Poderes (DA-18) + Liderança/Hierarquia (ADM-05)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um diretor de órgão público tem autoridade formal (cargo) e liderança informal (reconhecimento da equipe). Ao dar uma ordem legítima (fiscalizar um setor), a equipe a cumpre por confiança no diretor, e não por temor de sanção. Paralelamente, um coordenador recém-nomeado, sem liderança informal, precisa usar a prerrogativa do cargo (advertência) para obter obediência. Sobre a relação entre poder hierárquico (DA-18) e liderança (ADM-05), é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São a mesma coisa: hierarquia e liderança são sinônimos.' },
      { id: 'B', texto: 'O PODER HIERÁRQUICO (DA-18) é prerrogativa jurídica do cargo — direito de dar ordens, fiscalizar, delegar, avocar. A LIDERANÇA (ADM-05) é influência interpessoal — pode ser formal (cargo) ou informal (emergente). Um chefe pode ter hierarquia e não ter liderança (usa a prerrogativa); um líder informal pode ter liderança sem hierarquia. O ideal é a convergência: hierarquia + liderança.' },
      { id: 'C', texto: 'Só existe poder hierárquico quando há liderança.' },
      { id: 'D', texto: 'Liderança informal substitui a hierarquia no serviço público.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Hierarquia = prerrogativa jurídica do cargo. Liderança = influência, que pode ser formal ou informal. Um chefe pode ter hierarquia sem liderança; o ideal é a convergência das duas.',
      incorretas: { A: 'São conceitos distintos.', C: 'Hierarquia independe de liderança.', D: 'Liderança informal não substitui a hierarquia formal.' },
      conceitoCobrado: 'Integração Poderes (DA-18) + Liderança (ADM-05)',
      pegadinha: 'Confundir hierarquia (jurídica) com liderança (interpessoal).',
      comoApareceEmConcurso: 'Cenário que exige distinguir prerrogativa de cargo e influência interpessoal.'
    },
    tags: ['integração', 'hierarquia', 'liderança']
  },

  /* ============================================================
     EX-DA-19-001 — Atributos do ato em cenário (combinação)
  ============================================================ */
  {
    id: 'EX-DA-19-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-19',
    subtema: 'Atributos do ato administrativo em cenário',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Um fiscal sanitário interdita um restaurante com condições inadequadas e notifica o proprietário. O ato é cumprido de imediato, sem necessidade de autorização judicial prévia. O proprietário, inconformado, alega que "o ato não poderia ser executado sem decisão judicial". Sobre os atributos do ato administrativo presentes, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Falta ao ato o atributo da autoexecutoriedade: a Administração precisa de autorização judicial para executar qualquer interdição.' },
      { id: 'B', texto: 'O ato apresenta IMPERATIVIDADE (impõe-se ao particular independentemente de concordância) e AUTOEXECUTORIEDADE (a Administração executa diretamente, sem recorrer ao Judiciário). A interdição é exemplo clássico de ato autoexecutável. Também há PRESUNÇÃO DE LEGITIMIDADE (relativa), pois o ato se presume válido até prova em contrário.' },
      { id: 'C', texto: 'O ato só tem presunção de legitimidade; os demais atributos são exclusivos de multas.' },
      { id: 'D', texto: 'A autoexecutoriedade não existe em atos de polícia, apenas em atos disciplinares.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Interdição tem imperatividade (impõe-se) + autoexecutoriedade (executável sem Judiciário) + presunção de legitimidade (relativa). A multa é exemplo de ato SEM autoexecutoriedade — o particular é que precisa contestar.',
      incorretas: { A: 'A interdição tem autoexecutoriedade.', C: 'Multas é que frequentemente não têm autoexecutoriedade.', D: 'Atos de polícia têm autoexecutoriedade típica.' },
      conceitoCobrado: 'Atributos do ato — imperatividade, autoexecutoriedade, presunção',
      pegadinha: 'Confundir autoexecutoriedade (interdição) com multa (que precisa de cobrança judicial).',
      comoApareceEmConcurso: 'Cenário que exige identificar os atributos presentes.'
    },
    tags: ['atributos', 'autoexecutoriedade', 'imperatividade']
  },

  /* ============================================================
     EX-DA-19-002 — Extinção do ato em cenário
  ============================================================ */
  {
    id: 'EX-DA-19-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-19',
    subtema: 'Extinção do ato em cenário',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Três permissões de uso de bem público são extintas em situações distintas: (i) o permissionário descumpre condição do termo; (ii) uma lei nova proíbe a atividade antes autorizada, tornando a permissão incompatível com o ordenamento; (iii) o prazo previsto no próprio ato expira. Sobre os institutos de extinção, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'As três são ANULAÇÃO, pois o permissionário não tem direito adquirido.' },
      { id: 'B', texto: '(i) CASSAÇÃO (descumprimento); (ii) CADUCIDADE (norma superveniente incompatível); (iii) EXTINÇÃO PELO ADVENTO DO TERMO FINAL (decurso de prazo do próprio ato). São três institutos distintos — nenhum deles é anulação ou revogação.' },
      { id: 'C', texto: 'As três são REVOGAÇÃO, pois a permissão é ato precário.' },
      { id: 'D', texto: 'As três são CONVALIDAÇÃO, pois a Administração pode corrigir o ato.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Descumprimento = cassação. Norma nova incompatível = caducidade. Decurso de prazo = extinção pelo termo final. Três institutos distintos.',
      incorretas: { A: 'Anulação é por ilegalidade.', C: 'Revogação é por mérito.', D: 'Convalidação é correção de vício sanável.' },
      conceitoCobrado: 'Extinção do ato — cassação, caducidade e termo final',
      pegadinha: 'Confundir caducidade (norma nova) com termo final (decurso de prazo).',
      comoApareceEmConcurso: 'Cenário que exige classificar cada caso.'
    },
    tags: ['cassação', 'caducidade', 'termo final']
  },

  /* ============================================================
     EX-DA-19-003 — Integração DA-19 + DA-18 (vício + abuso)
  ============================================================ */
  {
    id: 'EX-DA-19-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-19',
    subtema: 'Integração DA-19 + DA-18 (vício + abuso)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um agente público aplica multa a um particular sem qualquer previsão legal, usando o argumento de que "a conduta é imoral, mesmo que não esteja tipificada". Sobre o ato e seu vício, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O ato é válido, pois a moralidade administrativa autoriza sanções não previstas em lei.' },
      { id: 'B', texto: 'O ato é INVÁLIDO por vício de OBJETO e de LEGALIDADE: a Administração não pode aplicar sanção não prevista em lei, ainda que a conduta seja imoral. Há também EXCESSO DE PODER (atuação além da competência). A moralidade não autoriza a criação de sanções — deve estar sempre conjugada com a legalidade.' },
      { id: 'C', texto: 'O ato é válido, pois a moralidade é o fundamento da atuação administrativa.' },
      { id: 'D', texto: 'O ato é apenas irregular, sem consequências jurídicas.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A sanção sem previsão legal viola legalidade e objeto (falta de previsão normativa). Há excesso de poder. A moralidade não autoriza criar sanções — é princípio de atuação, não fonte de poder sancionatório.',
      incorretas: { A: 'Moralidade não autoriza sanção sem lei.', C: 'Legalidade é pressuposto.', D: 'Ato inválido, não apenas irregular.' },
      conceitoCobrado: 'Integração DA-19 (vícios) + DA-18 (excesso de poder)',
      pegadinha: 'Achar que a moralidade autoriza sanção sem lei.',
      comoApareceEmConcurso: 'Cenário que exige distinguir moralidade de legalidade como fundamento.'
    },
    tags: ['integração', 'legalidade', 'moralidade', 'excesso']
  },

  /* ============================================================
     EX-DA-19-004 — Integração DA-19 + DA-15 (motivação + moralidade)
  ============================================================ */
  {
    id: 'EX-DA-19-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-19',
    subtema: 'Integração DA-19 + DA-15 (motivação + moralidade)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um gestor exonera um servidor em estágio probatório, alegando "insuficiência de desempenho", sem qualquer avaliação formal prévia, sem contraditório, sem motivação e sem indício concreto de desempenho insuficiente. Sobre a situação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O ato é válido, pois o servidor em estágio probatório não tem estabilidade.' },
      { id: 'B', texto: 'O ato é INVÁLIDO por vício de MOTIVAÇÃO (alegação genérica, sem fato concreto) e por violação da AMPLA DEFESA e do CONTRADITÓRIO (mesmo em estágio probatório, o STF exige contraditório em algumas hipóteses — especialmente quanto à insuficiência de desempenho). Também viola a MORALIDADE e a IMPESSOALIDADE, se usada para perseguição. A ausência de estabilidade não elimina os direitos processuais.' },
      { id: 'C', texto: 'O ato é válido, pois o estágio probatório é período discricionário da Administração.' },
      { id: 'D', texto: 'O ato só seria inválido se o servidor tivesse estabilidade.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Vício de motivação (fato genérico) + violação de contraditório/ampla defesa (STF exige). Pode haver moralidade/impessoalidade violadas. Estágio probatório não elimina direitos processuais.',
      incorretas: { A: 'Estágio probatório não afasta o dever de motivar.', C: 'Discricionariedade não afasta motivação e contraditório.', D: 'Estágio probatório também exige procedimento.' },
      conceitoCobrado: 'Integração DA-19 (motivação/vício) + DA-15 (contraditório/moralidade)',
      pegadinha: 'Achar que estágio probatório dispensa motivação e contraditório.',
      comoApareceEmConcurso: 'Cenário que exige reconhecer vícios em ato de exoneração.'
    },
    tags: ['integração', 'motivação', 'contraditório', 'estágio probatório']
  },

  /* ============================================================
     EX-DA-20-001 — Continuidade + exceções em cenário
  ============================================================ */
  {
    id: 'EX-DA-20-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-20',
    subtema: 'Continuidade + exceções em cenário',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Uma concessionária de energia interrompe o fornecimento em três situações: (i) por razões de segurança (risco de acidente); (ii) por inadimplemento do usuário, após aviso prévio; (iii) por decisão unilateral da empresa, sem qualquer justificativa. Sobre a legalidade das interrupções, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Todas são legais, pois a concessionária tem autonomia para interromper quando julgar necessário.' },
      { id: 'B', texto: '(i) e (ii) são LEGAIS — são exceções ao princípio da continuidade previstas em lei (razões de segurança e inadimplemento com aviso prévio). (iii) é ILEGAL, pois a interrupção sem justificativa viola a continuidade. A regra é a continuidade; a exceção deve estar prevista em lei.' },
      { id: 'C', texto: 'Todas são ilegais, pois a continuidade é absoluta.' },
      { id: 'D', texto: 'Só (i) é legal; (ii) e (iii) são ilegais.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Exceções legais: razões técnicas/segurança, inadimplemento com aviso prévio, emergência. (i) e (ii) são legais; (iii) viola continuidade.',
      incorretas: { A: 'Autonomia não legitima interrupção arbitrária.', C: 'Continuidade não é absoluta (admite exceções legais).', D: 'Inadimplemento com aviso é exceção legal.' },
      conceitoCobrado: 'Continuidade do serviço público — exceções',
      pegadinha: 'Achar que a continuidade é absoluta ou que qualquer interrupção é ilegal.',
      comoApareceEmConcurso: 'Cenário que exige reconhecer as exceções legais.'
    },
    tags: ['continuidade', 'exceções', 'concessão']
  },

  /* ============================================================
     EX-DA-20-002 — Concessão x permissão x autorização em cenário
  ============================================================ */
  {
    id: 'EX-DA-20-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-20',
    subtema: 'Concessão x permissão x autorização em cenário',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'A prefeitura firma três ajustes: (i) contrato de 25 anos, com licitação, para exploração de transporte coletivo; (ii) termo de permissão de quiosque em praça, por prazo indeterminado; (iii) autorização para um food truck operar em evento de 3 dias. Sobre os prazos e as naturezas, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Os três são contratos, pois todos têm prazo e remuneração.' },
      { id: 'B', texto: '(i) CONCESSÃO: contrato, prazo determinado, licitação; (ii) PERMISSÃO: ato unilateral, prazo indeterminado, licitação (Lei 8.987/95); (iii) AUTORIZAÇÃO: ato unilateral, prazo curto, sem licitação. A natureza é distinta: contrato x ato x ato.' },
      { id: 'C', texto: 'Os três são permissões, pois todos envolvem uso de bem público.' },
      { id: 'D', texto: 'Apenas (i) é contrato; (ii) e (iii) são permissões.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Concessão = contrato + prazo determinado + licitação. Permissão = ato + prazo indeterminado. Autorização = ato + prazo curto + sem licitação. Três naturezas distintas.',
      incorretas: { A: 'Só a concessão é contrato.', C: 'Só (ii) é permissão.', D: '(iii) é autorização, não permissão.' },
      conceitoCobrado: 'Concessão x permissão x autorização',
      pegadinha: 'Achar que "uso de bem público" classifica tudo como permissão.',
      comoApareceEmConcurso: 'Cenário que exige classificar três ajustes concretos.'
    },
    tags: ['concessão', 'permissão', 'autorização']
  },

  /* ============================================================
     EX-DA-20-003 — Integração DA-20 + DA-21 (licitação na delegação)
  ============================================================ */
  {
    id: 'EX-DA-20-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-20',
    subtema: 'Integração DA-20 + DA-21 (licitação na delegação)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma prefeitura pretende conceder o serviço de transporte coletivo a uma empresa privada, por 20 anos. A Procuradoria do município aponta que o edital deve observar não apenas a Lei 8.987/95 (concessões), mas também os princípios e regras gerais de licitação. Sobre a relação entre DA-20 (serviços públicos) e DA-21 (licitações), é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Concessão de serviço público é celebrada sem licitação, pois envolve delegação.' },
      { id: 'B', texto: 'A CONCESSÃO exige LICITAÇÃO obrigatória (art. 175, CF + Lei 8.987/95), na modalidade concorrência ou diálogo competitivo (Lei 14.133/2021). A licitação é o instrumento que garante isonomia, economicidade e melhor proposta. A concessão, portanto, articula DA-20 (regime do serviço público) com DA-21 (regime da licitação).' },
      { id: 'C', texto: 'A concessão só exige licitação se o valor for superior a R$ 1 milhão.' },
      { id: 'D', texto: 'A licitação da concessão é facultativa, cabendo ao prefeito decidir.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Concessão exige licitação obrigatória (art. 175, CF). A modalidade é concorrência ou diálogo competitivo (Lei 14.133/2021). Articula o regime do serviço (DA-20) com o regime da licitação (DA-21).',
      incorretas: { A: 'A concessão exige licitação.', C: 'Não há piso de valor.', D: 'Não é facultativa.' },
      conceitoCobrado: 'Integração DA-20 (concessão) + DA-21 (licitação)',
      pegadinha: 'Achar que delegação dispensa licitação.',
      comoApareceEmConcurso: 'Cenário que exige conectar regime do serviço e da licitação.'
    },
    tags: ['integração', 'concessão', 'licitação']
  },

  /* ============================================================
     EX-DA-20-004 — Integração DA-20 + DA-23 (controle da concessão)
  ============================================================ */
  {
    id: 'EX-DA-20-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-20',
    subtema: 'Integração DA-20 + DA-23 (controle da concessão)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um Tribunal de Contas identifica que uma concessionária de serviço público não está cumprindo metas de qualidade e aplica sanções. Paralelamente, a agência reguladora competente abre processo administrativo e a população protocola reclamações na ouvidoria. Sobre as formas de controle, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Só o Tribunal de Contas pode controlar a concessão.' },
      { id: 'B', texto: 'O TCU exerce CONTROLE EXTERNO (art. 71, CF); a agência reguladora exerce CONTROLE INTERNO setorial (regulação + fiscalização); a ouvidoria exerce CONTROLE SOCIAL (participação do cidadão). Todos atuam de forma COMPLEMENTAR — não há hierarquia entre eles.' },
      { id: 'C', texto: 'A ouvidoria substitui o Tribunal de Contas no controle da concessão.' },
      { id: 'D', texto: 'A agência reguladora exerce controle externo, e o TCU exerce controle interno.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'TCU = externo. Agência reguladora = interno setorial. Ouvidoria = social. Três dimensões complementares de controle — não excludentes.',
      incorretas: { A: 'Há múltiplos atores.', C: 'Ouvidoria não substitui TCU.', D: 'Inverte os papéis.' },
      conceitoCobrado: 'Integração DA-20 (concessão) + DA-23 (controle)',
      pegadinha: 'Achar que só o TCU controla ou que os controles são excludentes.',
      comoApareceEmConcurso: 'Cenário que exige articular as formas de controle.'
    },
    tags: ['integração', 'concessão', 'controle']
  },

  /* ============================================================
     EX-DA-22-001 — Excludente em cenário (culpa exclusiva da vítima)
  ============================================================ */
  {
    id: 'EX-DA-22-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-22',
    subtema: 'Excludente em cenário (culpa exclusiva da vítima)',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Um ônibus de transporte coletivo municipal trafega em velocidade regular. Um pedestre atravessa a via fora da faixa, com sinal vermelho, e é atropelado, sofrendo lesões. A perícia comprova que o motorista não teve tempo hábil de reagir, agindo com prudência. Sobre a responsabilidade do município, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O município responde objetivamente, pois a responsabilidade do Estado é absoluta e não admite excludentes.' },
      { id: 'B', texto: 'Há CULPA EXCLUSIVA DA VÍTIMA (pedestre em local proibido, sinal vermelho, motorista prudente), que quebra o NEXO CAUSAL e EXCLUI a responsabilidade do município. A responsabilidade objetiva não é absoluta — admite excludentes (culpa exclusiva da vítima, caso fortuito/força maior, fato de terceiro).' },
      { id: 'C', texto: 'A culpa exclusiva da vítima NÃO exclui a responsabilidade do Estado, pois a teoria adotada é a do risco integral.' },
      { id: 'D', texto: 'O município responde subjetivamente, exigindo-se prova de dolo do motorista.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Culpa exclusiva da vítima é excludente (quebra o nexo causal). A responsabilidade objetiva admite excludentes — não é absoluta. O Brasil adotou o risco administrativo (não o integral).',
      incorretas: { A: 'A responsabilidade objetiva não é absoluta.', C: 'Risco integral não é a regra adotada.', D: 'A responsabilidade do Estado é objetiva; a do agente (regressiva) é subjetiva.' },
      conceitoCobrado: 'Excludente de responsabilidade — culpa exclusiva da vítima',
      pegadinha: 'Achar que a responsabilidade objetiva é absoluta.',
      comoApareceEmConcurso: 'Cenário que exige reconhecer a excludente.'
    },
    tags: ['culpa exclusiva da vítima', 'excludente', 'nexo causal']
  },

  /* ============================================================
     EX-DA-22-002 — Omissão específica x genérica
  ============================================================ */
  {
    id: 'EX-DA-22-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-22',
    subtema: 'Omissão específica x genérica',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Duas situações hipotéticas: (i) um detento é morto por outro dentro do presídio, embora o Estado tivesse dever legal específico de custódia e proteção; (ii) uma enchente causa danos a moradores de área sem drenagem adequada, cabendo ao município a obrigação genérica de zelar pelo saneamento. Sobre a responsabilidade do Estado nas duas situações, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Ambas exigem prova de dolo do agente para gerar responsabilidade.' },
      { id: 'B', texto: '(i) há OMISSÃO ESPECÍFICA — o Estado tem dever legal direto e específico de proteger o detento (art. 5º, XLIX, CF). A jurisprudência (STF) reconhece responsabilidade OBJETIVA nesse caso. (ii) há OMISSÃO GENÉRICA — a jurisprudência majoritária exige comprovação de CULPA (falha do serviço) para gerar responsabilidade. A distinção entre omissão específica e genérica altera o regime aplicável.' },
      { id: 'C', texto: 'Ambas são de responsabilidade subjetiva, em qualquer hipótese.' },
      { id: 'D', texto: 'Só a omissão genérica gera responsabilidade objetiva.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Omissão específica (dever direto) → objetiva. Omissão genérica (dever amplo) → subjetiva (culpa). O STF distingue os regimes conforme o dever estatal.',
      incorretas: { A: 'Nem sempre exige dolo.', C: 'A omissão específica pode ser objetiva.', D: 'Inverte.' },
      conceitoCobrado: 'Omissão específica x genérica na responsabilidade do Estado',
      pegadinha: 'Tratar toda omissão como subjetiva ou toda como objetiva.',
      comoApareceEmConcurso: 'Cenário que exige distinguir o tipo de omissão.'
    },
    tags: ['omissão específica', 'omissão genérica', 'responsabilidade']
  },

  /* ============================================================
     EX-DA-22-003 — Integração DA-22 + DA-16 (Estado x agente)
  ============================================================ */
  {
    id: 'EX-DA-22-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-22',
    subtema: 'Integração DA-22 + DA-16 (responsabilidade do Estado x agente)',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Um servidor público, no exercício da função, causa dano a um particular por imprudência. A vítima ajuíza ação. Sobre a responsabilidade civil nas duas esferas (Estado e agente), é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A vítima deve acionar o servidor diretamente; o Estado não responde por ato de servidor.' },
      { id: 'B', texto: 'Pela TEORIA DO ÓRGÃO (DA-16), a conduta do agente é imputada ao ESTADO. A vítima aciona o Estado (responsabilidade OBJETIVA). Após indenizar, o Estado pode ajuizar AÇÃO REGRESSIVA contra o servidor, desde que comprovados DOLO ou CULPA (responsabilidade SUBJETIVA do agente perante o Estado). Duas etapas: primeiro o Estado indeniza; depois, se cabível, cobra do agente.' },
      { id: 'C', texto: 'A vítima deve acionar o Estado e o servidor em litisconsórcio necessário.' },
      { id: 'D', texto: 'O servidor responde objetivamente perante o Estado, sem necessidade de dolo ou culpa.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Teoria do Órgão: conduta do agente é imputada ao Estado (objetiva). Ação regressiva exige dolo/culpa. Duas etapas distintas.',
      incorretas: { A: 'O Estado responde pela conduta do servidor.', C: 'Não há litisconsórcio necessário.', D: 'A ação regressiva exige dolo/culpa.' },
      conceitoCobrado: 'Integração DA-22 + DA-16 (responsabilidade em duas esferas)',
      pegadinha: 'Achar que a vítima aciona o agente diretamente ou que a ação regressiva é objetiva.',
      comoApareceEmConcurso: 'Cenário que exige articular Teoria do Órgão + ação regressiva.'
    },
    tags: ['integração', 'teoria do órgão', 'ação regressiva']
  },

  /* ============================================================
     EX-DA-22-004 — Integração DA-22 + DA-23 (controle judicial)
  ============================================================ */
  {
    id: 'EX-DA-22-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-22',
    subtema: 'Integração DA-22 + DA-23 (controle judicial da responsabilidade)',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Um particular tem seu imóvel danificado por obra pública mal executada. Ele pretende buscar reparação. Paralelamente, o Tribunal de Contas apura possível irregularidade na execução do contrato da obra. Sobre as duas vias, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A via judicial é exclusiva; o Tribunal de Contas não pode atuar em casos de dano a particular.' },
      { id: 'B', texto: 'O particular pode buscar reparação na via JUDICIAL (responsabilidade objetiva do Estado — art. 37, §6º, CF), por meio de ação indenizatória. Paralelamente, o TCU exerce CONTROLE EXTERNO sobre a legalidade e a economicidade do contrato (DA-23). As duas vias são COMPLEMENTARES: a judicial repara o dano ao particular; a do TCU previne/corrige irregularidades no contrato. Não se confundem.' },
      { id: 'C', texto: 'O particular deve aguardar a decisão do TCU antes de buscar a via judicial.' },
      { id: 'D', texto: 'Apenas o TCU pode reparar o dano ao particular.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Via judicial = reparação ao particular (responsabilidade objetiva). Via do TCU = controle externo do contrato. Complementares — não excludentes, nem subsidiárias.',
      incorretas: { A: 'TCU pode apurar irregularidade contratual.', C: 'A via judicial é independente.', D: 'O TCU não repara dano ao particular — isso é via judicial.' },
      conceitoCobrado: 'Integração DA-22 + DA-23 (reparação x controle)',
      pegadinha: 'Achar que uma via substitui a outra.',
      comoApareceEmConcurso: 'Cenário que exige distinguir as finalidades de cada via.'
    },
    tags: ['integração', 'reparação', 'controle externo']
  },

  /* ============================================================
     EX-DA-23-001 — Controle interno x externo x social
  ============================================================ */
  {
    id: 'EX-DA-23-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-23',
    subtema: 'Controle interno x externo x social',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um órgão público sofre três formas de controle simultâneas: (i) a Controladoria-Geral revisa procedimentos internos e aponta falhas; (ii) o Tribunal de Contas audita a prestação de contas anual, no âmbito do controle externo a cargo do Congresso Nacional; (iii) um cidadão protocola representação na ouvidoria sobre a qualidade do atendimento. Sobre as três formas, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'As três são controle externo, pois envolvem órgãos distintos.' },
      { id: 'B', texto: '(i) CONTROLE INTERNO (dentro do próprio Poder, art. 74, CF); (ii) CONTROLE EXTERNO — exercido pelo Congresso Nacional, com auxílio do TCU (art. 71, caput), sendo o TCU o órgão auxiliar que realiza a auditoria; (iii) CONTROLE SOCIAL (participação do cidadão, transparência e ouvidoria). São COMPLEMENTARES — cada um tem um papel e um alcance.' },
      { id: 'C', texto: 'O controle social substitui o controle externo, pois é mais próximo do cidadão.' },
      { id: 'D', texto: 'A Controladoria exerce controle externo, e o TCU exerce controle interno.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Interno = Controladoria (art. 74). Externo = Congresso Nacional, com auxílio do TCU (art. 71) — o TCU é auxiliar, não titular. Social = cidadão/ouvidoria. Complementares.',
      incorretas: { A: 'Interno, externo e social são distintos.', C: 'Não substitui — complementa.', D: 'Inverte.' },
      conceitoCobrado: 'Controle interno x externo (titularidade) x social',
      pegadinha: 'Atribuir o controle externo ao TCU em vez do Congresso Nacional.',
      comoApareceEmConcurso: 'Cenário que exige classificar três formas de controle.'
    },
    tags: ['controle interno', 'externo', 'social', 'TCU']
  },

  /* ============================================================
     EX-DA-23-002 — Integração DA-23 + DA-19 (autotutela + prazo + segurança jurídica)
  ============================================================ */
  {
    id: 'EX-DA-23-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-23',
    subtema: 'Integração DA-23 + DA-19 (autotutela + prazo decadencial)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um servidor recebeu aposentadoria há 7 anos. A Administração descobre, hoje, que o ato de aposentadoria foi praticado com vício de legalidade (contagem de tempo indevida). O órgão pretende anular o ato. Sobre a possibilidade de anulação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A Administração pode anular a qualquer tempo, pois a autotutela não tem prazo.' },
      { id: 'B', texto: 'A AUTOTUTELA (DA-23) permite à Administração anular atos ilegais, mas há PRAZO DECADENCIAL de 5 ANOS (art. 54 da Lei 9.784/99), SALVO comprovada MÁ-FÉ. Decorridos 7 anos, sem má-fé comprovada, o ato não pode mais ser anulado pela via administrativa — precluiu. A anulação é expressão da autotutela, mas encontra limite no princípio da SEGURANÇA JURÍDICA (DA-15).' },
      { id: 'C', texto: 'A Administração tem 10 anos para anular o ato, independentemente de má-fé.' },
      { id: 'D', texto: 'A autotutela é ilimitada: o ato ilegal pode ser anulado a qualquer tempo.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Autotutela + prazo decadencial de 5 anos (art. 54 da Lei 9.784/99), salvo má-fé. Passados 7 anos, sem má-fé, o ato não pode ser anulado pela via administrativa — segurança jurídica prevalece.',
      incorretas: { A: 'Há prazo decadencial.', C: 'O prazo é 5 anos (não 10).', D: 'Autotutela tem limites (segurança jurídica).' },
      conceitoCobrado: 'Integração DA-23 (autotutela) + DA-19 (anulação) + DA-15 (segurança jurídica)',
      pegadinha: 'Achar que a autotutela é ilimitada no tempo.',
      comoApareceEmConcurso: 'Cenário que exige aplicar prazo decadencial + princípio da segurança jurídica.'
    },
    tags: ['integração', 'autotutela', 'prazo decadencial', 'segurança jurídica']
  },

  /* ============================================================
     EX-DA-23-003 — Integração DA-23 + DA-15 (controle e princípios)
  ============================================================ */
  {
    id: 'EX-DA-23-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-23',
    subtema: 'Integração DA-23 + DA-15 (controle e princípios)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um Tribunal de Contas identifica que um órgão público publicou ato de nomeação sem motivação, sem publicação oficial e sem processo seletivo. Ao julgar as contas, aponta violação aos princípios do LIMPE. Sobre a relação entre controle e princípios, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O controle é mera formalidade; os princípios do LIMPE não podem ser objeto de controle externo.' },
      { id: 'B', texto: 'O CONTROLE (DA-23) é o INSTRUMENTO pelo qual os princípios do LIMPE (DA-15) se tornam exigíveis: a publicidade (ausência de publicação), a motivação/moralidade (ausência de motivação) e a impessoalidade (ausência de processo seletivo) são exigíveis via controle interno, externo e judicial. Sem controle, os princípios são letra morta.' },
      { id: 'C', texto: 'O TCU só controla aspectos financeiros, não princípios.' },
      { id: 'D', texto: 'A motivação não é princípio, é formalidade.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O controle é o instrumento que torna os princípios exigíveis. Sem controle, o LIMPE não passa de declaração. O TCU controla, sim, a legalidade, a legitimidade e a economicidade — incluindo princípios.',
      incorretas: { A: 'O controle é essencial.', C: 'O TCU controla legalidade, legitimidade e economicidade.', D: 'A motivação é princípio (art. 2º da Lei 9.784).' },
      conceitoCobrado: 'Integração DA-23 (controle) + DA-15 (LIMPE)',
      pegadinha: 'Achar que o controle é apenas formal ou que o TCU não pode avaliar princípios.',
      comoApareceEmConcurso: 'Cenário que exige reconhecer o controle como instrumento dos princípios.'
    },
    tags: ['integração', 'controle', 'LIMPE']
  },

  /* ============================================================
     EX-DA-24-001 — Modalidade x sanção em cenário
  ============================================================ */
  {
    id: 'EX-DA-24-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-24',
    subtema: 'Modalidade x sanção em cenário',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Dois gestores praticam condutas distintas: (i) um prefeito nomeia o filho para cargo em comissão, sem processo seletivo; (ii) um secretário superfatura contrato de obra, causando dano de R$ 500 mil ao erário. Sobre a responsabilização por improbidade, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Ambos cometem improbidade por enriquecimento ilícito, com as mesmas sanções.' },
      { id: 'B', texto: '(i) NEPOTISMO = improbidade por ATENTADO A PRINCÍPIOS (art. 11), pois viola impessoalidade e moralidade (dolo + gravidade). (ii) SUPERFATURAMENTO = improbidade por PREJUÍZO AO ERÁRIO (art. 10), pois há dano efetivo. As sanções são distintas: o atentado a princípios NÃO exige ressarcimento (não há dano patrimonial direto); o prejuízo ao erário EXIGE ressarcimento, além das demais sanções.' },
      { id: 'C', texto: 'Ambos são improbidade por prejuízo ao erário, com sanções idênticas.' },
      { id: 'D', texto: 'Nenhum dos dois é improbidade, pois não houve enriquecimento pessoal.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Nepotismo = atentado a princípios (art. 11) — sem ressarcimento. Superfaturamento = prejuízo ao erário (art. 10) — com ressarcimento. Modalidades e sanções distintas.',
      incorretas: { A: 'Nepotismo não é enriquecimento ilícito.', C: 'Nepotismo não gera dano patrimonial.', D: 'Improbidade não exige enriquecimento pessoal.' },
      conceitoCobrado: 'Modalidades de improbidade x sanções',
      pegadinha: 'Achar que toda improbidade exige enriquecimento pessoal ou dano.',
      comoApareceEmConcurso: 'Cenário que exige distinguir modalidade e sanção.'
    },
    tags: ['improbidade', 'modalidade', 'sanção']
  },

  /* ============================================================
     EX-DA-24-002 — Integração DA-24 + DA-17 (agente público e improbidade)
  ============================================================ */
  {
    id: 'EX-DA-24-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-24',
    subtema: 'Integração DA-24 + DA-17 (agente público e improbidade)',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Um empregado público de uma empresa pública federal e um servidor estatutário de uma autarquia praticam atos de improbidade no exercício da função. Paralelamente, um particular concorre para o ato de ambos, pagando propina. Sobre a responsabilização, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Apenas o servidor estatutário pode ser responsabilizado por improbidade.' },
      { id: 'B', texto: 'AMBOS (empregado público — DA-17 — e servidor estatutário) podem ser responsabilizados por improbidade, pois a Lei 8.429/92 se aplica a qualquer AGENTE PÚBLICO, em sentido amplo (incluindo empregados de EP/SEM). O particular que concorre para o ato TAMBÉM responde (art. 3º), ainda que não seja agente público. A responsabilização é independente do regime (estatutário ou celetista).' },
      { id: 'C', texto: 'O particular não pode ser responsabilizado por improbidade, apenas o agente público.' },
      { id: 'D', texto: 'Apenas o empregado público responde, pois o regime celetista é mais rigoroso.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Improbidade se aplica a todo agente público (sentido amplo). Particular que concorre também responde (art. 3º). Independe do regime.',
      incorretas: { A: 'Empregado público também responde.', C: 'Particular pode ser responsabilizado.', D: 'Regime não afeta a aplicação.' },
      conceitoCobrado: 'Integração DA-24 (improbidade) + DA-17 (agentes públicos)',
      pegadinha: 'Achar que só servidor estatutário responde ou que o particular não responde.',
      comoApareceEmConcurso: 'Cenário que exige aplicar improbidade a diferentes vínculos.'
    },
    tags: ['integração', 'improbidade', 'agente público', 'particular']
  },

  /* ============================================================
     EX-DA-24-003 — Integração DA-24 + DA-22 (responsabilidade civil x improbidade)
  ============================================================ */
  {
    id: 'EX-DA-24-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-24',
    subtema: 'Integração DA-24 + DA-22 (responsabilidade civil x improbidade)',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Um agente público causa dano ao erário por conduta DOLOSA e GRAVE, tipificada como ato de improbidade. Paralelamente, um particular sofre dano em razão da mesma conduta. Sobre as esferas de responsabilização, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A improbidade substitui a responsabilidade civil — não se pode cumular.' },
      { id: 'B', texto: 'As esferas são INDEPENDENTES e COMPLEMENTARES: a responsabilidade CIVIL do Estado (DA-22) repara o dano ao PARTICULAR (objetiva); a IMPROBIDADE (DA-24) responsabiliza o AGENTE perante o Estado (sanções políticas, civis, de perda de função, etc.). Um mesmo fato pode gerar: (a) reparação ao particular (via Estado); (b) ação de improbidade contra o agente (MP); (c) ação regressiva do Estado contra o agente; (d) sanções penais e administrativas. As esferas se somam, não se excluem.' },
      { id: 'C', texto: 'A improbidade exclui a responsabilidade civil do Estado.' },
      { id: 'D', texto: 'Só a improbidade pode gerar reparação ao particular.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Esferas independentes: reparação civil (ao particular) + improbidade (contra o agente) + ação regressiva + penal + administrativa. Um mesmo fato pode gerar múltiplas responsabilizações.',
      incorretas: { A: 'Não substitui — cumula.', C: 'Independe.', D: 'Reparação ao particular é via civil.' },
      conceitoCobrado: 'Integração DA-24 (improbidade) + DA-22 (responsabilidade civil)',
      pegadinha: 'Achar que uma esfera exclui a outra.',
      comoApareceEmConcurso: 'Cenário que exige reconhecer a independência das esferas.'
    },
    tags: ['integração', 'improbidade', 'responsabilidade civil']
  },

  /* ============================================================
     EX-DA-26-001 — Uso de bem público por particular (cenário)
  ============================================================ */
  {
    id: 'EX-DA-26-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-26',
    subtema: 'Uso de bem público por particular (cenário)',
    dificuldade: 2, prioridade: 'baixa',
    enunciado: 'A prefeitura firma três ajustes com particulares para uso de bem público: (i) autoriza um food truck a operar em praça pública por 1 fim de semana; (ii) permite a instalação de um quiosque de lanches em praça, por prazo indeterminado, mediante termo de permissão; (iii) concede, com licitação, a exploração de um restaurante em prédio público por 10 anos. Sobre as três formas, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Todas são concessão de uso, pois envolvem exploração comercial.' },
      { id: 'B', texto: '(i) AUTORIZAÇÃO DE USO (ato unilateral, precário, prazo curto, interesse do particular); (ii) PERMISSÃO DE USO (ato unilateral, precário, prazo indeterminado); (iii) CONCESSÃO DE USO (contrato, prazo determinado, precedido de licitação). A natureza do ajuste varia conforme o prazo e o interesse.' },
      { id: 'C', texto: 'Todas são permissão de uso, pois o bem é público.' },
      { id: 'D', texto: 'A (iii) é autorização, pois envolve restaurante.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Autorização = ato precário, interesse particular. Permissão = ato precário, prazo indeterminado. Concessão = contrato, prazo determinado, licitação. A duração e a natureza (ato x contrato) definem a forma.',
      incorretas: { A: 'Só a (iii) é concessão.', C: 'Só a (ii) é permissão.', D: 'A (iii) é concessão.' },
      conceitoCobrado: 'Autorização x permissão x concessão de uso',
      pegadinha: 'Achar que uso comercial sempre é concessão.',
      comoApareceEmConcurso: 'Cenário que exige classificar três ajustes.'
    },
    tags: ['autorização de uso', 'permissão de uso', 'concessão de uso']
  },

  /* ============================================================
     EX-DA-26-002 — Alienação de bem dominical (procedimento completo)
  ============================================================ */
  {
    id: 'EX-DA-26-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-26',
    subtema: 'Alienação de bem dominical (procedimento completo)',
    dificuldade: 3, prioridade: 'baixa',
    enunciado: 'Uma prefeitura possui um terreno sem uso (bem dominical) e pretende vendê-lo a um particular. Sobre o procedimento de alienação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Bens públicos são inalienáveis em qualquer hipótese.' },
      { id: 'B', texto: 'Bens DOMINICAIS podem ser alienados, mas o procedimento exige: (a) AUTORIZAÇÃO LEGISLATIVA; (b) AVALIAÇÃO PRÉVIA do bem; (c) LICITAÇÃO, na modalidade LEILÃO (Lei 14.133/2021); (d) demais requisitos legais (justificativa, motivação, publicação). Sem esses requisitos, a alienação é nula. Já os bens de uso comum e de uso especial não podem ser alienados enquanto mantida a afetação.' },
      { id: 'C', texto: 'A alienação dispensa licitação, bastando autorização do Prefeito.' },
      { id: 'D', texto: 'Bens dominicais podem ser alienados por decisão administrativa, sem avaliação.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Bens dominicais podem ser alienados, mas o procedimento exige autorização legislativa + avaliação + leilão. Sem os requisitos, nulidade. Bens afetados não podem ser alienados.',
      incorretas: { A: 'Bens dominicais podem ser alienados.', C: 'Exige licitação (leilão).', D: 'Exige avaliação.' },
      conceitoCobrado: 'Alienação de bem público — requisitos',
      pegadinha: 'Achar que autorização do Prefeito basta.',
      comoApareceEmConcurso: 'Cenário que exige o procedimento completo.'
    },
    tags: ['alienação', 'leilão', 'autorização legislativa']
  },

  /* ============================================================
     EX-DA-26-003 — Integração DA-26 + DA-16 (bens de autarquia)
  ============================================================ */
  {
    id: 'EX-DA-26-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-26',
    subtema: 'Integração DA-26 + DA-16 (bens de autarquia)',
    dificuldade: 3, prioridade: 'baixa',
    enunciado: 'Um imóvel foi transferido para uma autarquia federal para instalação de seu hospital. Sobre a natureza desse bem e sua disciplina, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É bem particular da autarquia, sujeito às regras do direito privado, podendo ser penhorado e alienado livremente.' },
      { id: 'B', texto: 'É BEM PÚBLICO (DA-26), pois integra o patrimônio de uma entidade da Administração Indireta de direito público (autarquia — DA-16). Por estar afetado ao serviço público (hospital), é bem de USO ESPECIAL. Não pode ser penhorado (impenhorabilidade) nem usucapido (imprescritibilidade). Pode ser alienado apenas se desafetado e cumpridos os requisitos legais.' },
      { id: 'C', texto: 'É bem de uso comum, pois o hospital atende ao público.' },
      { id: 'D', texto: 'É bem dominical, pois pertence à autarquia.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Bens de autarquia são bens públicos (regime público). Como o imóvel está afetado ao hospital, é de USO ESPECIAL. Impenhorável, imprescritível, inalienável enquanto afetado. Pode ser alienado se desafetado.',
      incorretas: { A: 'Não é bem particular — é público.', C: 'Hospital é uso especial, não comum.', D: 'Não é dominical, pois há afetação.' },
      conceitoCobrado: 'Integração DA-26 (bens públicos) + DA-16 (autarquia)',
      pegadinha: 'Achar que bem de autarquia é privado ou que hospital é uso comum.',
      comoApareceEmConcurso: 'Cenário que exige combinar natureza da entidade com classificação do bem.'
    },
    tags: ['integração', 'autarquia', 'bens públicos', 'uso especial']
  },

  /* ============================================================
     EX-DA-26-004 — Integração DA-26 + DA-22 (dano a bem público)
  ============================================================ */
  {
    id: 'EX-DA-26-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-26',
    subtema: 'Integração DA-26 + DA-22 (dano a bem público)',
    dificuldade: 3, prioridade: 'baixa',
    enunciado: 'Um caminhão particular, ao fazer manobra irregular, colide com um veículo oficial. Simultaneamente, um servidor, por imprudência, danifica equipamentos do patrimônio público em serviço. Sobre a reparação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Só o particular responde, pois bens públicos não podem ser objeto de reparação.' },
      { id: 'B', texto: 'O particular responde ao Estado pelo dano ao veículo oficial (responsabilidade civil do particular — relação horizontal). O servidor, que danificou equipamentos por imprudência, também pode ser responsabilizado perante o Estado (responsabilidade subjetiva — art. 37, §6º, segunda parte). Em ambos os casos, o Estado busca reparação pelos danos ao patrimônio público, mediante os instrumentos próprios (ação civil, ação regressiva, processo administrativo).' },
      { id: 'C', texto: 'Nenhum dos dois responde, pois o Estado não pode cobrar dano de ninguém.' },
      { id: 'D', texto: 'Apenas o servidor responde, pois o particular não é agente público.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Particular responde ao Estado (relação civil). Servidor responde ao Estado (ação regressiva, art. 37, §6º). Dano ao patrimônio público gera dever de reparação em ambos os casos.',
      incorretas: { A: 'Bens públicos são reparáveis.', C: 'Há dever de reparação.', D: 'O particular também responde ao Estado.' },
      conceitoCobrado: 'Integração DA-26 (dano a bem público) + DA-22 (reparação)',
      pegadinha: 'Achar que só o servidor responde ou que o Estado não pode cobrar.',
      comoApareceEmConcurso: 'Cenário que exige articular dano ao patrimônio + duas esferas de reparação.'
    },
    tags: ['integração', 'dano', 'reparação', 'responsabilidade']
  },

  /* ============================================================
     EX-DA-27-001 — Cenário: obra atravessa terreno
  ============================================================ */
  {
    id: 'EX-DA-27-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-27',
    subtema: 'Cenário: obra atravessa terreno',
    dificuldade: 3, prioridade: 'baixa',
    enunciado: 'Uma prefeitura precisa: (i) passar uma rede de água sobre o terreno de um particular; (ii) usar temporariamente um imóvel vizinho como canteiro de obras; (iii) adquirir definitivamente um terreno para construir uma escola. Sobre as formas de intervenção, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'As três exigem desapropriação, pois envolvem obra pública.' },
      { id: 'B', texto: '(i) SERVIDÃO ADMINISTRATIVA (ônus real sobre o imóvel — não há transferência de propriedade); (ii) OCUPAÇÃO TEMPORÁRIA (uso temporário para obra ou serviço público — sem transferência); (iii) DESAPROPRIAÇÃO (transferência da propriedade ao Estado, com indenização prévia, justa e em dinheiro). Formas distintas, finalidades distintas.' },
      { id: 'C', texto: 'As três são limitações administrativas (restrições gerais).' },
      { id: 'D', texto: 'Todas as três configuram requisição administrativa.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Servidão (ônus real), ocupação temporária (uso transitório) e desapropriação (transferência definitiva). Cada uma com regime próprio. Só a desapropriação transfere propriedade.',
      incorretas: { A: 'Só a (iii) é desapropriação.', C: 'São formas individualizadas, não gerais.', D: 'Requisição é para perigo público — não é o caso.' },
      conceitoCobrado: 'Formas de intervenção do Estado na propriedade',
      pegadinha: 'Confundir servidão, ocupação e desapropriação.',
      comoApareceEmConcurso: 'Cenário que exige classificar três formas distintas.'
    },
    tags: ['servidão', 'ocupação temporária', 'desapropriação']
  },

  /* ============================================================
     EX-DA-27-002 — Cenário: requisição em calamidade
  ============================================================ */
  {
    id: 'EX-DA-27-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-27',
    subtema: 'Cenário: requisição em calamidade',
    dificuldade: 3, prioridade: 'baixa',
    enunciado: 'Durante uma enchente, a Defesa Civil requisita um caminhão particular para transportar mantimentos e resgatar moradores. O caminhão sofre avarias no trajeto. Sobre a requisição e a indenização, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A requisição é ilegal, pois não há lei prévia autorizando.' },
      { id: 'B', texto: 'A requisição é LÍCITA (art. 5º, XXV, CF), em caso de IMINENTE PERIGO PÚBLICO. NÃO transfere a propriedade. A indenização pelos danos sofridos é ULTERIOR (posterior) e depende de comprovação do prejuízo. O particular deve ser ressarcido pelos danos efetivamente comprovados, mas não recebe "indenização antecipada".' },
      { id: 'C', texto: 'A requisição transfere a propriedade do caminhão ao Estado, com indenização prévia.' },
      { id: 'D', texto: 'A requisição não gera qualquer direito a indenização.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Requisição (art. 5º, XXV, CF) é lícita em iminente perigo público. Não transfere propriedade. Indenização ulterior, se houver dano. Não é desapropriação.',
      incorretas: { A: 'A CF autoriza.', C: 'Não transfere propriedade.', D: 'Pode gerar indenização ulterior.' },
      conceitoCobrado: 'Requisição administrativa',
      pegadinha: 'Confundir com desapropriação ou achar que não gera indenização.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['requisição', 'perigo público', 'indenização ulterior']
  },

  /* ============================================================
     EX-DA-27-003 — Integração DA-27 + DA-22 (esbulho administrativo)
  ============================================================ */
  {
    id: 'EX-DA-27-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-27',
    subtema: 'Integração DA-27 + DA-22 (esbulho administrativo)',
    dificuldade: 3, prioridade: 'baixa',
    enunciado: 'Uma prefeitura ocupa, de fato, um terreno particular para construir uma praça, sem qualquer desapropriação formal, sem processo e sem indenização. O particular fica privado da posse. Sobre a situação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A situação é regular, pois o Estado tem supremacia sobre a propriedade privada.' },
      { id: 'B', texto: 'Há ESBULHO ADMINISTRATIVO (intervenção ilícita na propriedade, sem desapropriação formal). O particular tem direito a: (a) AÇÃO DE REINTEGRAÇÃO DE POSSE; (b) INDENIZAÇÃO pelos danos (responsabilidade civil do Estado — DA-22); (c) discussão sobre eventual DESAPROPRIAÇÃO INDIRETA, se o Estado consolidou a obra (STF admite). A supremacia do interesse público (DA-15) não dispensa o devido processo legal e a indenização.' },
      { id: 'C', texto: 'O particular perde a propriedade automaticamente, pela supremacia do interesse público.' },
      { id: 'D', texto: 'Há desapropriação indireta, que dispensa indenização.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Esbulho administrativo (intervenção ilícita). Direito a reintegração + indenização + discussão sobre desapropriação indireta. Supremacia não dispensa processo legal e indenização.',
      incorretas: { A: 'Supremacia não autoriza esbulho.', C: 'Não há perda automática.', D: 'Desapropriação indireta gera indenização, não dispensa.' },
      conceitoCobrado: 'Integração DA-27 (intervenção) + DA-22 (responsabilidade)',
      pegadinha: 'Achar que a supremacia do interesse público autoriza intervenção sem processo.',
      comoApareceEmConcurso: 'Cenário que exige reconhecer esbulho administrativo.'
    },
    tags: ['integração', 'esbulho', 'desapropriação indireta', 'responsabilidade']
  },

  /* ============================================================
     EX-DA-27-004 — Integração DA-27 + DA-15 (função social)
  ============================================================ */
  {
    id: 'EX-DA-27-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-27',
    subtema: 'Integração DA-27 + DA-15 (função social / fundamento constitucional)',
    dificuldade: 3, prioridade: 'baixa',
    enunciado: 'Sobre o fundamento constitucional das intervenções do Estado na propriedade, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O direito de propriedade é absoluto, e qualquer intervenção estatal é inconstitucional.' },
      { id: 'B', texto: 'A CF/88 assegura o direito de propriedade (art. 5º, XXII), mas o condiciona à FUNÇÃO SOCIAL (art. 5º, XXIII; art. 170, III; art. 182, §2º; art. 186). A SUPREMACIA do interesse público (DA-15) fundamenta as PRERROGATIVAS do Estado (desapropriação, servidão, requisição, limitações, tombamento); a INDISPONIBILIDADE impõe que a intervenção observe o devido processo legal, a indenização e a proporcionalidade.' },
      { id: 'C', texto: 'A função social da propriedade só se aplica a imóveis urbanos, não rurais.' },
      { id: 'D', texto: 'A intervenção estatal dispensa fundamento constitucional, bastando lei ordinária.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Direito de propriedade + função social (art. 5º, XXIII). Supremacia fundamenta prerrogativas; indisponibilidade impõe limites (devido processo, indenização). Função social vale para imóveis urbanos e rurais.',
      incorretas: { A: 'A propriedade não é absoluta.', C: 'Aplica-se a urbanos (art. 182) e rurais (art. 186).', D: 'A base é constitucional.' },
      conceitoCobrado: 'Integração DA-27 (intervenção) + DA-15 (supremacia + indisponibilidade)',
      pegadinha: 'Achar que o direito de propriedade é absoluto ou que só vale para imóveis urbanos.',
      comoApareceEmConcurso: 'Cenário que exige articular função social + princípios.'
    },
    tags: ['integração', 'função social', 'propriedade', 'supremacia']
  },

  /* ============================================================
     EX-REV-28-001 — Identificação de tipo de erro em cenário novo
  ============================================================ */
  {
    id: 'EX-REV-28-001',
    tipo: 'DIDATICA', area: 'REV', moduloId: 'REV-28',
    subtema: 'Identificação de tipo de erro em cenário novo',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um estudante resolveu 30 questões de Licitações. Ao analisar os erros, percebeu: (i) 4 erros em que marcou "inexigibilidade" quando era "dispensa"; (ii) 3 erros em questões que pediam a alternativa INCORRETA, mas ele marcou a correta; (iii) 2 erros em que respondeu rápido demais, sem ler o enunciado completo; (iv) 1 erro em que não conhecia o conceito de "credenciamento". Sobre a classificação e a ação recomendada, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Todos os erros exigem a mesma ação: reler a aula inteira de Licitações.' },
      { id: 'B', texto: '(i) CONFUSÃO ENTRE CONCEITOS (ação: comparar dispensa x inexigibilidade); (ii) INTERPRETAÇÃO (ação: treinar leitura atenta de "INCORRETA"); (iii) PRESSA (ação: gerenciar tempo); (iv) DESCONHECIMENTO (ação: estudar o conceito de credenciamento). Cada tipo exige AÇÃO DIFERENTE — não existe "ação única" para todos.' },
      { id: 'C', texto: 'Todos os erros são de falta de conhecimento, pois o estudante não domina Licitações.' },
      { id: 'D', texto: 'O erro (i) é interpretação, pois envolve duas palavras parecidas.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '(i) confusão (conceitos semelhantes); (ii) interpretação (leitura); (iii) pressa (tempo); (iv) desconhecimento (conteúdo ausente). Cada tipo exige ação específica — não se trata de "estudar tudo de novo".',
      incorretas: { A: 'Ações diferentes por tipo.', C: 'Há tipos distintos.', D: '(i) é confusão entre conceitos, não leitura.' },
      conceitoCobrado: 'Classificação de erros e ação correspondente',
      pegadinha: 'Tratar todos os erros como falta de conhecimento.',
      comoApareceEmConcurso: 'Cenário que exige aplicar a classificação a 4 erros distintos.'
    },
    tags: ['classificação de erros', 'banco de erros', 'ação corretiva']
  },

  /* ============================================================
     EX-REV-28-002 — Ação correta para cada tipo de erro
  ============================================================ */
  {
    id: 'EX-REV-28-002',
    tipo: 'DIDATICA', area: 'REV', moduloId: 'REV-28',
    subtema: 'Ação correta para cada tipo de erro',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre a relação entre tipo de erro e ação corretiva, associe as colunas: (1) Desconhecimento; (2) Confusão conceitual; (3) Interpretação; (4) Pegadinha da banca; (5) Esquecimento. ( ) Treinar leitura atenta de enunciados e alternativas, observando palavras como "exceto", "incorreta", "sempre". ( ) Comparar conceitos semelhantes com tabelas e exemplos contrastantes. ( ) Revisar a aula desde o início, focando no conceito ausente. ( ) Programar revisão espaçada (1, 3, 7, 15, 30 dias). ( ) Conhecer o estilo da banca (padrões de distratores, termos-armadilha). A sequência correta, de cima para baixo, é:',
    alternativas: [
      { id: 'A', texto: '1 – 2 – 3 – 4 – 5.' },
      { id: 'B', texto: '3 – 2 – 1 – 5 – 4.' },
      { id: 'C', texto: '2 – 3 – 5 – 1 – 4.' },
      { id: 'D', texto: '4 – 3 – 2 – 5 – 1.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '(3) Interpretação = treinar leitura; (2) Confusão = comparar; (1) Desconhecimento = revisar aula; (5) Esquecimento = revisão espaçada; (4) Pegadinha = conhecer banca. Sequência: 3-2-1-5-4.',
      incorretas: { A: 'Ordem alfabética não corresponde.', C: 'Inverte (2) e (3), (1) e (5).', D: 'Inverte quase tudo.' },
      conceitoCobrado: 'Tipo de erro x ação corretiva',
      pegadinha: 'Confundir confusão com interpretação ou desconhecimento com esquecimento.',
      comoApareceEmConcurso: 'Associação que exige memorização da correspondência.'
    },
    tags: ['classificação de erros', 'ação corretiva', 'associação']
  },

  /* ============================================================
     EX-REV-28-003 — Integração método + conteúdo específico (DA-19)
  ============================================================ */
  {
    id: 'EX-REV-28-003',
    tipo: 'DIDATICA', area: 'REV', moduloId: 'REV-28',
    subtema: 'Integração método + conteúdo (DA-19)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um estudante identificou no banco de erros que errou 5 questões de Atos Administrativos por confundir anulação com revogação. Aplicando o método de revisão integrada, qual é a sequência de ações MAIS ADEQUADA para resolver esse problema?',
    alternativas: [
      { id: 'A', texto: 'Reler a aula inteira de Atos Administrativos, do começo ao fim, e depois fazer simulado geral.' },
      { id: 'B', texto: '(1) Comparar diretamente anulação x revogação (tabela: ilegalidade x mérito, ex tunc x ex nunc, Administração + Judiciário x só Administração); (2) fazer nova bateria de questões sobre essas duas figuras; (3) registrar os novos erros no banco; (4) programar revisão espaçada (1, 3, 7 dias). Foco no ponto específico, não na aula inteira.' },
      { id: 'C', texto: 'Trocar de método de estudo, abandonando a revisão integrada.' },
      { id: 'D', texto: 'Fazer simulados aleatórios até "acertar por sorte".' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O método manda FOCAR no subtópico específico (comparação direta), fazer bateria nova, registrar erros e programar revisão. Não é "reler tudo" — é "atacar o ponto fraco".',
      incorretas: { A: 'Reler aula inteira é ineficiente para um problema específico.', C: 'Não se abandona o método — se aplica corretamente.', D: 'Sorte não é método.' },
      conceitoCobrado: 'Integração método (REV-28) + conteúdo (DA-19)',
      pegadinha: 'Achar que "reler a aula inteira" é a solução para todo erro.',
      comoApareceEmConcurso: 'Cenário que exige aplicar o método de revisão integrada a um erro concreto.'
    },
    tags: ['integração', 'revisão integrada', 'anulação', 'revogação']
  },

  /* ============================================================
     EX-REV-28-004 — Integração método + revisão adaptativa
  ============================================================ */
  {
    id: 'EX-REV-28-004',
    tipo: 'DIDATICA', area: 'REV', moduloId: 'REV-28',
    subtema: 'Integração método + revisão adaptativa',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma estudante fez a primeira questão sobre "revisão espaçada adaptativa" e acertou, mas com insegurança (classificou como "acerto com dúvida"). Ao rever a próxima revisão, o sistema sugeriu 3 dias. Sobre a lógica dessa programação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O sistema errou: acerto com dúvida deveria gerar intervalo de 30 dias, pois houve acerto.' },
      { id: 'B', texto: 'O sistema aplicou a lógica ADAPTATIVA: acerto com segurança geraria intervalo maior (7+ dias); acerto com dúvida mantém intervalo INTERMEDIÁRIO (3 dias), porque a insegurança indica que o conteúdo ainda não está consolidado. A próxima revisão será mais próxima do que se fosse um acerto com segurança, mas mais distante do que um erro (1 dia).' },
      { id: 'C', texto: 'A revisão espaçada não diferencia acerto com segurança de acerto com dúvida — ambos geram o mesmo intervalo.' },
      { id: 'D', texto: 'O intervalo deveria ser de 1 dia, pois a aluna não demonstrou domínio.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A revisão adaptativa considera o GRAU de segurança: segurança → intervalo maior; dúvida → intervalo intermediário; erro → intervalo curto. 3 dias para dúvida é coerente com a lógica.',
      incorretas: { A: 'Dúvida não gera intervalo longo.', C: 'A classificação altera o intervalo.', D: 'Dúvida é diferente de erro — não gera 1 dia.' },
      conceitoCobrado: 'Integração revisão adaptativa (REV-28) + aplicação',
      pegadinha: 'Achar que "acerto é acerto" — a adaptatividade distingue a segurança.',
      comoApareceEmConcurso: 'Cenário que exige aplicar a lógica de intervalos adaptativos.'
    },
    tags: ['integração', 'revisão adaptativa', 'intervalo']
  }

];
