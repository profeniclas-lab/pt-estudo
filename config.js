/* ============================================================
   CONFIGURAÇÃO — App de Administração + Direito Administrativo
   v1.1 — adiciona blocos para as 4 melhorias pedagógicas
   ============================================================ */

window.APP_CONFIG = {

  /* ---------- Identidade visual ---------- */
  appName: 'ADM-ESTUDO',
  appSubtitle: 'Administração + Direito Administrativo',
  appVersion: '1.1',
  schemaVersion: 2,

  /* ---------- Persistência ---------- */
  storageKey: 'admDireitoAdm.state',

  /* ---------- Áreas da matéria ---------- */
  areaLabels: {
    ADM: 'Administração',
    AP:  'Administração Pública',
    DA:  'Direito Administrativo',
    REV: 'Revisão Integrada'
  },

  /* ---------- Rótulos de prioridade ---------- */
  priorityLabels: {
    alta:  'Muito Alta',
    media: 'Alta',
    baixa: 'Média'
  },

  priorityOrder: ['alta', 'media', 'baixa'],

  /* ---------- Arquivos de conteúdo ---------- */
  contentSuffixes: ['alta', 'media', 'complementar'],

  /* ---------- Página "Sobre" ---------- */
  sobre: {
    publicoAlvo: 'Concursos de nível médio (Administrativo / Técnico / Assistente)',
    baseLegal:   'Programa de Administração + Direito Administrativo',
    observacoes: 'App offline. Dados salvos neste navegador. Sem servidor, sem IA externa.'
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
      1: 'Identificação de conceitos, definições e características fundamentais.',
      2: 'Situações hipotéticas, comparação entre institutos e aplicação em contextos diferentes.',
      3: 'Enunciados contextualizados, alternativas próximas, exceções e pegadinhas legítimas.',
      4: 'Relação entre conceitos de diferentes módulos e raciocínio integrado.'
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
     ============================================================ */
  errorCategories: {
    desconhecimento: { label: 'Desconhecimento',    desc: 'Não conhecia o conteúdo',                          icon: '📚' },
    confusao:        { label: 'Confusão conceitual', desc: 'Confundiu conceitos semelhantes',                  icon: '🔀' },
    interpretacao:   { label: 'Interpretação',      desc: 'Não compreendeu o enunciado',                      icon: '📖' },
    desatencao:      { label: 'Desatenção',         desc: 'Ignorou uma palavra, condição ou exceção',         icon: '⚠️' },
    legislacao:      { label: 'Legislação',         desc: 'Errou artigo, prazo, competência ou dispositivo', icon: '⚖️' },
    aplicacao:       { label: 'Aplicação',          desc: 'Conhecia a teoria, mas não aplicou à situação',    icon: '🔧' },
    pegadinha:       { label: 'Pegadinha',          desc: 'Foi induzido por conceitos verdadeiros em relação incorreta', icon: '🎯' }
  },
  errorCategoriesOrder: ['desconhecimento', 'confusao', 'interpretacao', 'desatencao', 'legislacao', 'aplicacao', 'pegadinha'],

  /* ============================================================
     MELHORIA 4 — Comentários pedagógicos e exemplos inéditos
     ============================================================ */
  pedagogicalComments: {
    exigirExemploInedito: false,
    fallbackSemExemplo: 'Exemplo inédito em produção para esta questão.',
    profundidadeDireito: 'informarFundamentoLegalQuandoAplicavel'
  },

  /* ============================================================
     GAMIFICAÇÃO — XP, ofensiva, nível e meta diária
     (paralela às estatísticas existentes; não as altera)
     ============================================================ */
  gamification: {
    xp: {
      acerto:                 10,
      erro:                    2,
      flashcardSabia:          5,
      flashcardDuvida:         3,
      flashcardNaoSabia:       1,
      exercicioBase:          50,
      exercicioBonus:         20,   // extra se atingir o limiar de domínio
      simuladoBase:          100,
      diagnostico:            30
    },
    metaDiaria: 50,
    niveis: [0, 100, 300, 600, 1000, 1500, 2100, 2800, 3600, 4500, 5500]
  }

};
