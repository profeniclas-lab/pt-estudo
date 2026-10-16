/* ============================================================
   DIAGNÓSTICOS — Módulos de prioridade MÉDIA
   Preenchidos: PT-06, PT-12
   ============================================================ */

window.DIAGNOSTICS_MEDIA = {

  /* ============================================================
     PT-06 — Verbos e Pronomes
  ============================================================ */
  'PT-06': {
    id: 'D-PT-06',
    moduloId: 'PT-06',
    itens: [
      {
        id: 'D-PT-06-01',
        tipo: 'multipla_escolha',
        subtopico: 'Indicativo x subjuntivo',
        pergunta: 'Assinale a alternativa em que o verbo está no MODO SUBJUNTIVO:',
        alternativas: [
          { id: 'A', texto: 'Ele estuda todos os dias.' },
          { id: 'B', texto: 'Ele estudou ontem.' },
          { id: 'C', texto: 'Espero que ele estude mais.' },
          { id: 'D', texto: 'Ele estudará amanhã.' }
        ],
        gabarito: 'C',
        explicacao: 'SUBJUNTIVO: expressa dúvida, hipótese, desejo. "Espero que ele estude" — a ação é apenas uma expectativa. As demais estão no indicativo (certeza): presente, pretérito perfeito e futuro do presente.'
      },
      {
        id: 'D-PT-06-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Colocação pronominal',
        pergunta: 'No imperativo afirmativo, usa-se PRÓCLISE (pronome antes do verbo): "Me diga a verdade."',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. No imperativo afirmativo, usa-se ÊNCLISE (pronome DEPOIS do verbo): "Diga-me a verdade." A próclise é obrigatória com palavras atrativas (não, nunca, que, se, advérbios). Ex.: "Não me diga" (correto).'
      },
      {
        id: 'D-PT-06-03',
        tipo: 'situacao',
        subtopico: 'Vozes verbais',
        pergunta: 'A frase "O livro foi lido pelo aluno" está na voz:',
        alternativas: [
          { id: 'A', texto: 'Ativa.' },
          { id: 'B', texto: 'Passiva analítica.' },
          { id: 'C', texto: 'Reflexiva.' },
          { id: 'D', texto: 'Passiva sintética.' }
        ],
        gabarito: 'B',
        explicacao: 'PASSIVA ANALÍTICA: formada por verbo auxiliar (ser/estar) + particípio. "O livro FOI LIDO pelo aluno." O sujeito sofre a ação. A passiva sintética seria "Vendeu-se a casa" (verbo + SE). Reflexiva: "O menino feriu-se".'
      },
      {
        id: 'D-PT-06-04',
        tipo: 'autoavaliacao',
        subtopico: 'Pronomes e colocação',
        pergunta: 'Você consegue distinguir pronomes PESSOAIS RETOS (sujeito) de OBLÍQUOS (complemento), usar corretamente o relativo "cujo", e aplicar as regras de colocação pronominal (próclise, mesóclise, ênclise)?',
        resposta: 'PESSOAIS RETOS: função de sujeito. Ex.: eu, tu, ele, nós, vós, eles. OBLÍQUOS: função de complemento. Ex.: me, te, o, a, lhe, nos, vos, os, as, lhes. RELATIVO "CUJO": indica POSSE e NÃO varia em número — "O aluno CUJO pai é médico". Erros comuns: "O aluno que o pai é médico" (ERRADO). COLOCAÇÃO PRONOMINAL: PRÓCLISE (antes do verbo) — obrigatória com palavras atrativas (não, nunca, jamais, que, se, advérbios). MESÓCLISE (no meio) — com futuro do presente/pretérito, sem palavras atrativas. Ex.: "Dir-te-ei". ÊNCLISE (depois) — imperativo afirmativo, infinitivo, gerúndio e início de frase. Ex.: "Diga-me"; "Ao sair, avise-me"; "Estava dizendo-me".'
      }
    ]
  },

  /* ============================================================
     PT-12 — Reescrita e Equivalência de Frases
  ============================================================ */
  'PT-12': {
    id: 'D-PT-12',
    moduloId: 'PT-12',
    itens: [
      {
        id: 'D-PT-12-01',
        tipo: 'multipla_escolha',
        subtopico: 'Reescrita — sentido + gramática',
        pergunta: 'Considere a reescrita: "Os alunos do terceiro ano, foram aprovados no vestibular." Sobre essa reescrita:',
        alternativas: [
          { id: 'A', texto: 'Está correta — mantém o sentido e a gramática.' },
          { id: 'B', texto: 'Está incorreta — há vírgula separando o sujeito do verbo.' },
          { id: 'C', texto: 'Está correta, mas o sentido mudou.' },
          { id: 'D', texto: 'Está incorreta — o verbo deveria estar no singular.' }
        ],
        gabarito: 'B',
        explicacao: 'A vírgula após "terceiro ano" separa o SUJEITO do VERBO — PROIBIDO. É o erro mais clássico em questões de reescrita. O certo: "Os alunos do terceiro ano foram aprovados no vestibular."'
      },
      {
        id: 'D-PT-12-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Voz passiva',
        pergunta: 'A frase "O menino quebrou o vidro" pode ser reescrita como "O vidro foi quebrado pelo menino" sem alteração de sentido.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro. A transformação de voz ativa → passiva analítica mantém o sentido: o objeto direto ("o vidro") vira sujeito, o sujeito ("o menino") vira agente da passiva. O foco muda, mas o sentido essencial é o mesmo.'
      },
      {
        id: 'D-PT-12-03',
        tipo: 'situacao',
        subtopico: 'Discurso direto x indireto',
        pergunta: 'A frase "Ele disse: — Vou viajar amanhã", em discurso INDIRETO, fica:',
        alternativas: [
          { id: 'A', texto: 'Ele disse que vou viajar amanhã.' },
          { id: 'B', texto: 'Ele disse que iria viajar no dia seguinte.' },
          { id: 'C', texto: 'Ele disse: iria viajar amanhã.' },
          { id: 'D', texto: 'Ele disse que viaja amanhã.' }
        ],
        gabarito: 'B',
        explicacao: 'No discurso INDIRETO, há ajustes: "vou" (presente) → "iria" (futuro do pretérito); "amanhã" → "no dia seguinte". A alternativa A mantém o presente (errado); C mistura discurso direto e indireto; D mantém tempo incoerente.'
      },
      {
        id: 'D-PT-12-04',
        tipo: 'autoavaliacao',
        subtopico: 'Estratégia em reescrita',
        pergunta: 'Diante de uma questão de reescrita que pede "manter o sentido e a correção gramatical", você verifica SEMPRE (a) se o sentido original foi mantido e (b) se não há erro gramatical escondido?',
        resposta: 'Sim, essa é a estratégia correta. A banca coloca armadilhas duplas: alternativas que mantêm o sentido, mas têm erro gramatical (vírgula entre sujeito e verbo, "haviam" por "havia", concordância); ou alternativas gramaticalmente corretas, mas com sentido alterado (troca de conector, mudança de tempo verbal, perda de informação essencial). Estratégia: ler o enunciado, localizar o que se pede, eliminar alternativas com erro gramatical e depois conferir o sentido das restantes. SEMPRE voltar ao texto original.'
      }
    ]
  }

};
