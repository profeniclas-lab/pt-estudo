/* ============================================================
   DIAGNÓSTICOS — Módulos de prioridade COMPLEMENTAR
   Português e Redação Oficial para Concursos
   Entregue: POR-08
   Fase 3 — fechamento dos diagnósticos (24/24)
   ============================================================ */

window.DIAGNOSTICS_COMPLEMENTAR = {

  /* ============================================================
     POR-08 — Estrutura e formação de palavras
  ============================================================ */
  'POR-08': {
    id: 'D-POR-08',
    moduloId: 'POR-08',
    itens: [
      /* ---------- Item 1 (fácil) — MC clássica ---------- */
      {
        id: 'D-POR-08-01',
        tipo: 'multipla_escolha',
        subtopico: 'Elementos mórficos',
        pergunta: 'Sobre os elementos mórficos das palavras, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Radical é a parte que carrega o sentido básico da palavra; prefixo é o elemento que vem antes do radical; sufixo é o elemento que vem depois do radical.' },
          { id: 'B', texto: 'Radical é o elemento que vem antes do prefixo; prefixo é a terminação que indica flexão; sufixo é a parte que carrega o sentido básico.' },
          { id: 'C', texto: 'Radical, prefixo e sufixo são sinônimos: todos se referem à mesma parte da palavra, sem distinção de posição.' },
          { id: 'D', texto: 'Radical é a terminação flexional; prefixo é a vogal temática; sufixo é a consoante de ligação.' },
          { id: 'E', texto: 'Radical é o elemento que só existe em verbos; prefixo só existe em substantivos; sufixo só existe em adjetivos.' }
        ],
        gabarito: 'A',
        explicacao: 'RADICAL: sentido básico ("livr-" em livro, livraria, livreiro). PREFIXO: antes do radical ("des-" em desfazer). SUFIXO: depois do radical ("-eiro" em livreiro). B) confunde as posições; C) iguala; D) confunde com desinências, vogal temática e consoante de ligação; E) inventa restrições por classe.'
      },

      /* ---------- Item 2 (fácil) — V/F simples ---------- */
      {
        id: 'D-POR-08-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Derivação x composição',
        pergunta: 'Derivação é a formação de palavra nova a partir de uma palavra primitiva (com acréscimo ou retirada de elementos); composição é a formação de palavra nova a partir de duas ou mais palavras (radicais).',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. DERIVAÇÃO: parte de 1 palavra primitiva (desfazer, livreiro, entardecer, caça, o jantar). COMPOSIÇÃO: parte de 2+ palavras/radicais (girassol, passatempo, planalto). A diferença é o número de bases.'
      },

      /* ---------- Item 3 (médio) — V/F sequencial ---------- */
      {
        id: 'D-POR-08-03',
        tipo: 'multipla_escolha',
        subtopico: 'Tipos de derivação',
        pergunta: 'Julgue as afirmações sobre os tipos de derivação:\n(__) Derivação prefixal: acréscimo de prefixo ao radical ("desfazer" = des + fazer).\n(__) Derivação sufixal: acréscimo de sufixo ao radical ("livreiro" = livr + eiro).\n(__) Derivação regressiva: retirada de elemento para formar nova palavra ("a caça" deriva de "caçar").\n(__) Derivação imprópria: mudança de classe sem alteração na forma ("o jantar" substantivo deriva de "jantar" verbo).\nAssinale a alternativa com a sequência CORRETA, de cima para baixo:',
        alternativas: [
          { id: 'A', texto: 'V, V, V, V.' },
          { id: 'B', texto: 'V, F, V, V.' },
          { id: 'C', texto: 'V, V, F, V.' },
          { id: 'D', texto: 'F, V, V, F.' },
          { id: 'E', texto: 'F, F, V, V.' }
        ],
        gabarito: 'A',
        explicacao: 'Todas corretas. (__1) V: prefixal — acréscimo antes do radical. (__2) V: sufixal — acréscimo depois do radical. (__3) V: regressiva — retirada ("caça" deriva de "caçar"). (__4) V: imprópria — mudança de classe sem alteração de forma ("jantar" verbo → "o jantar" substantivo).'
      },

      /* ---------- Item 4 (médio) — V/F simples ---------- */
      {
        id: 'D-POR-08-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Parassíntese x derivação prefixal e sufixal',
        pergunta: 'Em "entardecer", há parassíntese (prefixo e sufixo entram simultaneamente, sem que existam "entarde" nem "tardecer"); em "infelizmente", há derivação prefixal e sufixal (existem "infeliz" e "felizmente" isoladamente).',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. Teste da EXISTÊNCIA: "entardecer" — não existem "entarde" nem "tardecer" com esse sentido → PARASSÍNTESE (prefixo e sufixo simultâneos). "infelizmente" — existem "infeliz" e "felizmente" → DERIVAÇÃO PREFIXAL E SUFIXAL. A chave é verificar se a palavra existe SEM um dos afixos.'
      },

      /* ---------- Item 5 (médio-difícil) — Situação ---------- */
      {
        id: 'D-POR-08-05',
        tipo: 'situacao',
        subtopico: 'Aplicação: identificar processo de formação',
        pergunta: 'Um candidato analisou quatro palavras: "girassol" (gira + sol), "planalto" (plano + alto), "entardecer" (en + tarde + ecer) e "a caça" (de "caçar"). Sobre os processos de formação, é CORRETO afirmar que:',
        alternativas: [
          { id: 'A', texto: '"Girassol" e "planalto" são composição por justaposição, pois ambos mantêm os radicais intactos e sem perda de elementos.' },
          { id: 'B', texto: '"Girassol" é composição por justaposição (radicais sem perda); "planalto" é composição por aglutinação (radicais com perda); "entardecer" é parassíntese; "a caça" é derivação regressiva.' },
          { id: 'C', texto: '"Girassol" e "planalto" são composição por aglutinação, pois ambos perdem elementos fonéticos na fusão dos radicais.' },
          { id: 'D', texto: '"Entardecer" é derivação prefixal e sufixal (existem "entarde" e "tardecer"); "a caça" é derivação imprópria (mudança de classe sem alteração de forma).' },
          { id: 'E', texto: 'Todos os quatro processos são de derivação, pois envolvem acréscimo de afixos a um radical primitivo.' }
        ],
        gabarito: 'B',
        explicacao: 'GIRASSOL: gira + sol, sem perda → JUSTAPOSIÇÃO. PLANALTO: plano + alto, com perda → AGLUTINAÇÃO. ENTARDECER: en + tarde + ecer, sem existir "entarde" nem "tardecer" → PARASSÍNTESE. A CAÇA: de "caçar", com retirada → REGRESSIVA. A) confunde planalto com justaposição. C) confunde girassol com aglutinação. D) entardecer é parassíntese (não existem "entarde" nem "tardecer"); "a caça" é regressiva (não imprópria). E) "girassol" e "planalto" são composição, não derivação.'
      },

      /* ---------- Item 6 (difícil) — MC associação ---------- */
      {
        id: 'D-POR-08-06',
        tipo: 'multipla_escolha',
        subtopico: 'Associação: palavras x processos de formação',
        pergunta: 'Associe cada palavra ao seu processo de formação:\n1 — "Girassol".\n2 — "Entardecer".\n3 — "Moto".\n4 — "IBGE".\nPROCESSOS\n( ) Parassíntese.\n( ) Abreviação.\n( ) Sigla.\n( ) Composição por justaposição.\nA sequência CORRETA, de cima para baixo, é:',
        alternativas: [
          { id: 'A', texto: '1, 2, 3, 4.' },
          { id: 'B', texto: '2, 3, 4, 1.' },
          { id: 'C', texto: '3, 4, 1, 2.' },
          { id: 'D', texto: '4, 1, 2, 3.' },
          { id: 'E', texto: '2, 4, 3, 1.' }
        ],
        gabarito: 'B',
        explicacao: 'ENTARDECER → 2 (parassíntese — prefixo e sufixo simultâneos). MOTO → 3 (abreviação de "motocicleta"). IBGE → 4 (sigla). GIRASSOL → 1 (composição por justaposição — gira + sol). Sequência: 2, 3, 4, 1.'
      },

      /* ---------- Item 7 (difícil-meta) — Autoavaliação ---------- */
      {
        id: 'D-POR-08-07',
        tipo: 'autoavaliacao',
        subtopico: 'Estrutura e formação — distinções fundamentais',
        pergunta: 'Você consegue, sem consultar, distinguir: (a) radical, prefixo, sufixo, desinência, vogal temática e vogal de ligação; (b) derivação x composição; (c) parassíntese x derivação prefixal e sufixal; (d) justaposição x aglutinação; (e) regressiva x imprópria; (f) abreviação x sigla; (g) hibridismo x empréstimo?',
        resposta: 'RADICAL: sentido básico. PREFIXO: antes do radical. SUFIXO: depois do radical. DESINÊNCIA: flexão. VOGAL TEMÁTICA: liga radical a desinência. VOGAL DE LIGAÇÃO: eufônica. DERIVAÇÃO: 1 palavra. COMPOSIÇÃO: 2+ palavras. PARASSÍNTESE: prefixo + sufixo simultâneos (não existem sem um dos afixos). PREFIXAL E SUFIXAL: existem sem um dos afixos. JUSTAPOSIÇÃO: sem perda. AGLUTINAÇÃO: com perda. REGRESSIVA: retirada ("caça" de "caçar"). IMPRÓPRIA: mudança de classe ("o jantar"). ABREVIAÇÃO: redução ("moto"). SIGLA: letras iniciais ("IBGE"). HIBRIDISMO: radicais de línguas diferentes ("automóvel"). EMPRÉSTIMO: palavra de outra língua ("feedback").'
      }
    ]
  }

};
