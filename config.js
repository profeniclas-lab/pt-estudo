/* ============================================================
   CONFIGURAÇÃO — PORTUGUÊS-ESTUDO
   Português e Redação Oficial para Concursos
   v1.0
   ============================================================ */

window.APP_CONFIG = {

  /* ---------- Identidade visual ---------- */
  appName: 'PORTUGUÊS-ESTUDO',
  appSubtitle: 'Português e Redação Oficial para Concursos',
  appVersion: '1.0',
  schemaVersion: 2,

  /* ---------- Persistência ---------- */
  storageKey: 'portuguesRedacao.state',

  /* ---------- Áreas da matéria ---------- */
  areaLabels: {
    LET: 'Leitura e Interpretação',
    GRA: 'Gramática e Norma',
    RED: 'Redação Oficial',
    PRO: 'Produção Textual'
  },

  /* ---------- Rótulos de prioridade ---------- */
  priorityLabels: {
    alta:  'Muito Alta',
    media: 'Alta',
    baixa: 'Complementar'
  },

  priorityOrder: ['alta', 'media', 'baixa'],

  /* ---------- Arquivos de conteúdo ---------- */
  contentSuffixes: ['alta', 'media', 'complementar'],

  /* ---------- Página "Sobre" ---------- */
  sobre: {
    publicoAlvo: 'Concursos públicos de nível médio (cargos administrativos: Técnico, Assistente, Agente, Auxiliar).',
    baseLegal: 'Manual de Redação da Presidência da República (3ª edição), Acordo Ortográfico vigente, Vocabulário Ortográfico da Língua Portuguesa (VOLP) e gramáticas normativas reconhecidas.',
    observacoes: 'App offline. Dados salvos neste navegador. Sem servidor, sem IA externa. Questões REAIS exigem fonte verificável (banca, órgão, ano, prova). Questões DIDÁTICAS são autorais e identificadas como tal. A produção textual (RED-24) é trabalhada por análise e reescrita; não há correção automática de redação — o aluno pode registrar a nota obtida em avaliação externa.'
  },

  /* ============================================================
     MELHORIA 1 — Exercício pós-aula ("Praticar o que aprendi")
     ============================================================ */
  exerciseConfig: {
    totalQuestoes: 12,
    distribuicao: { 1: 3, 2: 4, 3: 3, 4: 2 },
    niveisLabel: {
      1: 'Compreensão básica',
      2: 'Aplicação intermediária',
      3: 'Interpretação avançada',
      4: 'Integração de conhecimentos'
    },
    niveisDescricao: {
      1: 'Identificação de conceitos, classificações e definições básicas.',
      2: 'Aplicação da regra em frases e períodos curtos.',
      3: 'Aplicação em textos, exceções, ambiguidade e distinção entre casos próximos.',
      4: 'Integração de regras (ex.: concordância + pontuação + regência) em reescritas e análise textual.'
    },
    classificacao: {
      excelente: { min: 90, max: 100, label: 'Excelente domínio',  cls: 'ok'   },
      bom:       { min: 75, max: 89,  label: 'Bom domínio',        cls: 'ok'   },
      parcial:   { min: 60, max: 74,  label: 'Domínio parcial',    cls: 'warn' },
      revisar:   { min: 0,  max: 59,  label: 'Precisa revisar',    cls: 'err'  }
    },
    masteryThreshold: 75,
    embaralharAlternativas: true,
    embaralharQuestoes: true
  },

  /* ============================================================
     MELHORIA 2 — Revisão espaçada adaptativa
     ============================================================ */
  adaptiveRevision: {
    intervalos: {
      seguranca:       [7, 15, 30, 60, 90],
      duvida:          [3, 7, 15, 30],
      confusao:        [1, 3, 7],
      desconhecimento: [1, 2, 3],
      interpretacao:   [2, 3, 7]
    },
    dificuldadeBonusDias: { 1: 0, 2: 1, 3: 2 },
    acertoConsecutivoMultiplicador: 1.5,
    acertoConsecutivoMinimo: 2,
    maxIntervaloDias: 120,
    janelaRevisaoAtrasadaDias: 30
  },

  /* ============================================================
     MELHORIA 3 — Banco de erros inteligente
     (a categoria "legislacao" foi renomeada para "norma",
      adequada a Português e Redação Oficial)
     ============================================================ */
  errorCategories: {
    desconhecimento: { label: 'Desconhecimento',        desc: 'Não conhecia a regra, o conceito ou a norma',                                  icon: '📚' },
    confusao:        { label: 'Confusão conceitual',    desc: 'Confundiu regras ou conceitos semelhantes',                                    icon: '🔀' },
    interpretacao:   { label: 'Interpretação',          desc: 'Não compreendeu o texto ou o enunciado',                                       icon: '📖' },
    desatencao:      { label: 'Desatenção',             desc: 'Ignorou uma palavra, condição ou exceção',                                    icon: '⚠️' },
    norma:           { label: 'Norma / regra específica', desc: 'Errou a regra gramatical, a exceção ou a norma de redação oficial',          icon: '📏' },
    aplicacao:       { label: 'Aplicação',              desc: 'Conhecia a regra, mas não a aplicou ao texto',                                icon: '🔧' },
    pegadinha:       { label: 'Pegadinha',              desc: 'Foi induzido por distratores da banca',                                       icon: '🎯' }
  },
  errorCategoriesOrder: ['desconhecimento', 'confusao', 'interpretacao', 'desatencao', 'norma', 'aplicacao', 'pegadinha'],

  /* ============================================================
     MELHORIA 4 — Comentários pedagógicos e exemplos inéditos
     ============================================================ */
  pedagogicalComments: {
    exigirExemploInedito: false,
    fallbackSemExemplo: 'Exemplo inédito em produção para esta questão.',
    profundidadeRedacao: 'informarFundamentoNormativoQuandoAplicavel'
  },

  /* ============================================================
     GAMIFICAÇÃO
     ============================================================ */
  gamification: {
    xp: {
      acerto:                 10,
      erro:                    2,
      flashcardSabia:          5,
      flashcardDuvida:         3,
      flashcardNaoSabia:       1,
      exercicioBase:          50,
      exercicioBonus:         20,
      simuladoBase:          100,
      diagnostico:            30
    },
    metaDiaria: 50,
    niveis: [0, 100, 300, 600, 1000, 1500, 2100, 2800, 3600, 4500, 5500]
  }

};
