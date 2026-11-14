/* ============================================================
   DIAGNÓSTICOS — Módulos de prioridade ALTA
   Português e Redação Oficial para Concursos
   BLOCO 1 — Área LET (Leitura e Interpretação)
   Entregues: POR-01, POR-02, POR-03, POR-04, POR-05
   Padrão por módulo: 3 MC (1 difícil) + 2 V/F + 1 situação + 1 autoavaliação
   Formatos variados: MC clássica, V/F sequencial, I/II/III, associação, complete lacunas, C/E
   Ordem progressiva: fácil → médio → difícil
   Distratores equilibrados: todos com mesma extensão e detalhamento da correta
   ============================================================ */

window.DIAGNOSTICS_ALTA = {

  /* ============================================================
     POR-01 — Leitura, compreensão e interpretação de textos
  ============================================================ */
  'POR-01': {
    id: 'D-POR-01',
    moduloId: 'POR-01',
    itens: [
      /* ---------- Item 1 (fácil) — MC clássica ---------- */
      {
        id: 'D-POR-01-01',
        tipo: 'multipla_escolha',
        subtopico: 'Compreensão x interpretação',
        pergunta: 'Sobre os conceitos de compreensão e interpretação de textos, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Compreensão e interpretação são termos equivalentes: ambas se referem à apreensão de informações explícitas do texto.' },
          { id: 'B', texto: 'Compreensão refere-se ao que está explícito no texto; interpretação refere-se ao que pode ser inferido a partir de elementos textuais.' },
          { id: 'C', texto: 'Compreensão refere-se ao que pode ser inferido; interpretação refere-se ao que está literalmente escrito, sem margem para dedução.' },
          { id: 'D', texto: 'Compreensão e interpretação dependem exclusivamente do repertório do leitor, independentemente das marcas textuais.' },
          { id: 'E', texto: 'Compreensão refere-se à identificação do tema; interpretação refere-se à identificação da ideia central.' }
        ],
        gabarito: 'B',
        explicacao: 'COMPREENSÃO: o que está ESCRITO (informação literal). INTERPRETAÇÃO: o que está IMPLÍCITO (deduções autorizadas pelo texto). A) confunde os conceitos (ambos são explícitos); C) inverte os conceitos; D) nega o papel das marcas textuais; E) confunde a distinção com tema/ideia central.'
      },

      /* ---------- Item 2 (fácil) — V/F simples ---------- */
      {
        id: 'D-POR-01-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Informação implícita x invenção',
        pergunta: 'Informações implícitas são aquelas que o leitor pode criar livremente, desde que a interpretação faça sentido no contexto.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'FALSO. Implícito NÃO é invenção livre do leitor — é conclusão SUSTENTADA pelo texto (inferências autorizadas, pressupostos, subentendidos). O leitor não "cria" livremente; apoia-se em marcas textuais. Criar sem base textual é extrapolação — proibida em interpretação.'
      },

      /* ---------- Item 3 (médio) — MC V/F sequencial ---------- */
      {
        id: 'D-POR-01-03',
        tipo: 'multipla_escolha',
        subtopico: 'Tema, ideia central, explícita/implícita, extrapolação',
        pergunta: 'Julgue as afirmações sobre conceitos de leitura e interpretação:\n(__) O tema é o assunto geral do texto — sobre o que se fala; a ideia central é o que se diz sobre o tema — a posição defendida.\n(__) Tema e ideia central são sinônimos, pois ambos se referem ao conteúdo global do texto.\n(__) Informações explícitas estão literalmente escritas, dispensando dedução; informações implícitas são autorizadas pelo texto, mas não estão escritas.\n(__) Conclusão que o texto não autoriza, ainda que verdadeira no mundo real, é chamada de extrapolação.\nAssinale a alternativa com a sequência CORRETA, de cima para baixo:',
        alternativas: [
          { id: 'A', texto: 'V, V, F, V.' },
          { id: 'B', texto: 'V, F, V, V.' },
          { id: 'C', texto: 'V, V, V, F.' },
          { id: 'D', texto: 'F, V, V, F.' },
          { id: 'E', texto: 'F, F, V, V.' }
        ],
        gabarito: 'B',
        explicacao: '(__1) V: definição correta de tema e ideia central. (__2) F: tema (assunto) e ideia central (tese) NÃO são sinônimos. (__3) V: explícita = escrita; implícita = autorizada, não escrita. (__4) V: extrapolação = conclusão não autorizada pelo texto.'
      },

      /* ---------- Item 4 (médio) — V/F simples ---------- */
      {
        id: 'D-POR-01-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Pressuposto x subentendido',
        pergunta: 'O pressuposto é uma informação implícita marcada linguisticamente (por palavras como "voltou a", "parou de"), enquanto o subentendido é deduzido do contexto, sem marca lexical específica.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. PRESSUPOSTO: implícito marcado por palavra/expressão ("Ele PAROU DE fumar" pressupõe que fumava; "Ele VOLTOU A atender bem" pressupõe que já atendia). SUBENTENDIDO: implícito deduzido do contexto, sem marca lexical (insinuação, ironia, entrelinha). A presença/ausência de marca é a chave.'
      },

      /* ---------- Item 5 (médio-difícil) — Situação ---------- */
      {
        id: 'D-POR-01-05',
        tipo: 'situacao',
        subtopico: 'Aplicação: identificar o erro de leitura',
        pergunta: 'Em uma prova, o enunciado pede: "Infere-se do texto que...". O texto descrevia uma medida administrativa sem juízo de valor do autor. O candidato marcou "O autor considera a medida injusta" e descobriu, no gabarito, que errou. O erro do candidato foi classificado corretamente como:',
        alternativas: [
          { id: 'A', texto: 'Falha de compreensão — ele não identificou a informação explícita, apesar de lê-la corretamente no texto.' },
          { id: 'B', texto: 'Extrapolação — ele atribuiu ao autor uma opinião que o texto não sustenta, indo além das marcas textuais.' },
          { id: 'C', texto: 'Ambiguidade textual — o texto permitia dupla leitura, e o candidato escolheu a interpretação menos provável.' },
          { id: 'D', texto: 'Inferência legítima — ele deduziu corretamente, mas a banca adotou outra interpretação igualmente válida.' },
          { id: 'E', texto: 'Interpretação contextual — ele interpretou o texto conforme seu repertório prévio sobre o tema abordado.' }
        ],
        gabarito: 'B',
        explicacao: 'EXTRAPOLAÇÃO: o candidato atribuiu ao autor uma opinião ("injusta") que o texto NÃO sustenta. O texto apenas descrevia a medida. Inferência autorizada exige base textual. A) não é falha de compreensão — o texto era claro. C) não há ambiguidade. D) não houve inferência legítima — houve invenção. E) "interpretação contextual" é rótulo vago que não classifica o erro.'
      },

      /* ---------- Item 6 (difícil) — MC I/II/III ---------- */
      {
        id: 'D-POR-01-06',
        tipo: 'multipla_escolha',
        subtopico: 'Inferência x extrapolação em texto',
        pergunta: 'Considere o texto: "O novo sistema de protocolo reduziu o tempo de tramitação em 40%, mas o número de servidores permaneceu o mesmo." Sobre o que é autorizado concluir:\nI — É possível inferir que o sistema aumentou a produtividade por servidor.\nII — É possível concluir que o órgão está satisfeito com o resultado.\nIII — É possível inferir que o tempo de tramitação, antes do sistema, era maior do que o atual.\nEstá CORRETO apenas o que se afirma em:',
        alternativas: [
          { id: 'A', texto: 'I.' },
          { id: 'B', texto: 'II.' },
          { id: 'C', texto: 'III.' },
          { id: 'D', texto: 'I e III.' },
          { id: 'E', texto: 'II e III.' }
        ],
        gabarito: 'D',
        explicacao: 'I: INFERÊNCIA autorizada (tempo reduzido + mesmo efetivo = aumento de produtividade por servidor). II: EXTRAPOLAÇÃO (o texto não menciona satisfação nem insatisfação — apenas descreve dados). III: INFERÊNCIA autorizada (se o tempo foi reduzido em 40%, o anterior era maior que o atual).'
      },

      /* ---------- Item 7 (difícil-meta) — Autoavaliação ---------- */
      {
        id: 'D-POR-01-07',
        tipo: 'autoavaliacao',
        subtopico: 'Distinções fundamentais da leitura',
        pergunta: 'Você consegue, sem consultar, distinguir: (a) compreensão (literal) x interpretação (inferencial); (b) tema (assunto) x ideia central (tese); (c) informação explícita x implícita; (d) pressuposto (marcado por palavra) x subentendido (deduzido do contexto); (e) inferência autorizada x extrapolação?',
        resposta: 'COMPREENSÃO: o que está escrito. INTERPRETAÇÃO: o que é autorizado a inferir. TEMA: assunto. IDEIA CENTRAL: tese sobre o tema. EXPLÍCITA: literal. IMPLÍCITA: autorizada (pressuposto, subentendido, inferência). PRESSUPOSTO: marcado por palavra ("voltou a", "parou de"). SUBENTENDIDO: deduzido do contexto, sem marca lexical. INFERÊNCIA: conclusão autorizada pelo texto. EXTRAPOLAÇÃO: conclusão não autorizada — inventada pelo leitor.'
      }
    ]
  },

  /* ============================================================
     POR-02 — Tipologia textual e gêneros textuais
  ============================================================ */
  'POR-02': {
    id: 'D-POR-02',
    moduloId: 'POR-02',
    itens: [
      /* ---------- Item 1 (fácil) — MC clássica ---------- */
      {
        id: 'D-POR-02-01',
        tipo: 'multipla_escolha',
        subtopico: 'Tipo textual x gênero textual',
        pergunta: 'Sobre a distinção entre tipo textual e gênero textual, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Tipo textual e gênero textual são sinônimos: ambos se referem à estrutura linguística interna dos textos.' },
          { id: 'B', texto: 'Tipo textual é a estrutura linguística (narração, descrição, exposição, argumentação, injunção); gênero textual é a forma social estabilizada (ofício, crônica, editorial), que pode combinar tipos diferentes.' },
          { id: 'C', texto: 'Tipo textual é a forma social estabilizada (ofício, crônica); gênero textual é a estrutura linguística (narração, argumentação).' },
          { id: 'D', texto: 'Tipo textual depende exclusivamente do suporte (jornal, livro); gênero textual depende exclusivamente da extensão (texto curto ou longo).' },
          { id: 'E', texto: 'Tipo textual e gênero textual são determinados pelo autor, sem qualquer relação com a função social do texto.' }
        ],
        gabarito: 'B',
        explicacao: 'TIPO: estrutura linguística (como). GÊNERO: forma social (onde/com qual finalidade). A) iguala indevidamente; C) inverte; D) confunde com suporte/extensão; E) nega a função social.'
      },

      /* ---------- Item 2 (fácil) — V/F simples ---------- */
      {
        id: 'D-POR-02-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Narração x descrição',
        pergunta: 'A narração apresenta fatos em sucessão, com transformação de estado, enquanto a descrição retrata um estado, sem transformação obrigatória.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. NARRAÇÃO: fatos em SUCESSÃO (tempo, causa, transformação — "chegou, protocolou, saiu"). DESCRIÇÃO: retrato de um ESTADO (seres, objetos, cenas — "a sala é ampla, com paredes brancas"). A narração avança; a descrição pausa.'
      },

      /* ---------- Item 3 (médio) — MC I/II/III ---------- */
      {
        id: 'D-POR-02-03',
        tipo: 'multipla_escolha',
        subtopico: 'Dissertação expositiva x argumentativa',
        pergunta: 'Sobre a diferença entre dissertação expositiva e dissertação argumentativa, analise:\nI — A dissertação expositiva apresenta, explica e informa, sem defender uma posição.\nII — A dissertação argumentativa defende uma tese com argumentos e conclusão.\nIII — A dissertação expositiva e a argumentativa se distinguem pelo tempo verbal predominante: a primeira usa o passado; a segunda, o presente.\nEstá CORRETO apenas o que se afirma em:',
        alternativas: [
          { id: 'A', texto: 'I.' },
          { id: 'B', texto: 'II.' },
          { id: 'C', texto: 'III.' },
          { id: 'D', texto: 'I e II.' },
          { id: 'E', texto: 'II e III.' }
        ],
        gabarito: 'D',
        explicacao: 'I e II corretas. III errada: a distinção NÃO é pelo tempo verbal, mas pela PRESENÇA/AUSÊNCIA de tese defendida. A expositiva informa; a argumentativa defende. O tempo verbal varia em ambas, sem relação com a classificação.'
      },

      /* ---------- Item 4 (médio) — V/F simples ---------- */
      {
        id: 'D-POR-02-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Combinação de tipos em um gênero',
        pergunta: 'Um mesmo gênero textual pode combinar vários tipos textuais — por exemplo, um relatório administrativo pode conter descrição, exposição e argumentação.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. Tipos e gêneros não são exclusivos entre si: um gênero (relatório, crônica, editorial) pode combinar tipos (descrição, exposição, argumentação, narração). A classificação é sempre pela PREDOMINÂNCIA, não pela exclusividade.'
      },

      /* ---------- Item 5 (médio-difícil) — Situação ---------- */
      {
        id: 'D-POR-02-05',
        tipo: 'situacao',
        subtopico: 'Aplicação: classificar tipo predominante',
        pergunta: 'Considere o texto: "O servidor chegou às 8h, protocolou o pedido, conferiu os documentos e saiu às 9h." Sobre a tipologia predominante, é CORRETO afirmar que o trecho é predominantemente:',
        alternativas: [
          { id: 'A', texto: 'Descritivo, pois apresenta características do servidor, do pedido e do setor onde a ação ocorreu.' },
          { id: 'B', texto: 'Narrativo, pois relata fatos em sucessão temporal, com personagem e deslocamento de estado.' },
          { id: 'C', texto: 'Dissertativo expositivo, pois informa objetivamente os horários de chegada e de saída do servidor.' },
          { id: 'D', texto: 'Injuntivo, pois orienta o servidor a chegar às 8h, protocolar, conferir documentos e sair às 9h.' },
          { id: 'E', texto: 'Argumentativo, pois defende a tese de que o servidor executou o protocolo com eficiência.' }
        ],
        gabarito: 'B',
        explicacao: 'NARRATIVO: fatos em SUCESSÃO temporal ("chegou, protocolou, conferiu, saiu"), com personagem e transformação. A) descrição retrataria estado sem avanço temporal. C) exposição não tem o encadeamento de fatos. D) injunção usaria imperativo ("chegue, protocole") — o texto relata, não orienta. E) argumentação exigiria tese defendida — o texto apenas relata.'
      },

      /* ---------- Item 6 (difícil) — MC associação ---------- */
      {
        id: 'D-POR-02-06',
        tipo: 'multipla_escolha',
        subtopico: 'Associação: fragmentos x tipos textuais',
        pergunta: 'Associe os fragmentos aos tipos textuais predominantes:\n1 — "O servidor chegou, protocolou o pedido e saiu."\n2 — "A sala é ampla, com paredes brancas, janelas grandes e mesas alinhadas."\n3 — "A Lei 14.133/2021 substituiu a Lei 8.666/93, trazendo novas regras para as licitações."\n4 — "Preencha o formulário, anexe os documentos e protocole no setor responsável."\nTIPOS\n( ) Narrativo.\n( ) Descritivo.\n( ) Expositivo.\n( ) Injuntivo.\nA sequência CORRETA, de cima para baixo, é:',
        alternativas: [
          { id: 'A', texto: '1, 2, 3, 4.' },
          { id: 'B', texto: '2, 1, 3, 4.' },
          { id: 'C', texto: '1, 3, 2, 4.' },
          { id: 'D', texto: '4, 3, 2, 1.' },
          { id: 'E', texto: '1, 2, 4, 3.' }
        ],
        gabarito: 'A',
        explicacao: '(1) NARRATIVO: fatos em sucessão ("chegou, protocolou, saiu"). (2) DESCRITIVO: retrato de estado ("ampla, paredes brancas, janelas grandes"). (3) EXPOSITIVO: informa sem defender tese. (4) INJUNTIVO: orienta como fazer (imperativo "preencha, anexe, protocole").'
      },

      /* ---------- Item 7 (difícil-meta) — Autoavaliação ---------- */
      {
        id: 'D-POR-02-07',
        tipo: 'autoavaliacao',
        subtopico: 'Tipologia e gêneros — distinções fundamentais',
        pergunta: 'Você consegue, sem consultar, distinguir: (a) tipo textual x gênero textual; (b) narração x descrição; (c) dissertação expositiva x argumentativa; (d) injunção x exposição; (e) função social de um gênero?',
        resposta: 'TIPO: estrutura linguística (como). GÊNERO: forma social (onde/com qual finalidade). NARRAÇÃO: fatos em sucessão (transformação). DESCRIÇÃO: retrato de estado (sem transformação). EXPOSITIVA: informa, não defende tese. ARGUMENTATIVA: defende tese com argumentos. INJUNÇÃO: orienta como fazer (imperativo, passos). EXPOSIÇÃO: informa. FUNÇÃO SOCIAL: finalidade comunicativa do gênero (ofício comunica institucionalmente; crônica, no jornal; receita, na cozinha).'
      }
    ]
  },

  /* ============================================================
     POR-03 — Coesão e coerência textual
  ============================================================ */
  'POR-03': {
    id: 'D-POR-03',
    moduloId: 'POR-03',
    itens: [
      /* ---------- Item 1 (fácil) — MC clássica ---------- */
      {
        id: 'D-POR-03-01',
        tipo: 'multipla_escolha',
        subtopico: 'Coesão x coerência',
        pergunta: 'Sobre a diferença entre coesão e coerência textuais, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Coesão é a ligação de sentido global do texto; coerência é a ligação formal entre as partes, feita por pronomes e conectivos.' },
          { id: 'B', texto: 'Coesão é a ligação formal (pronomes, conectivos, retomadas); coerência é a ligação de sentido, que garante que o texto faça sentido globalmente.' },
          { id: 'C', texto: 'Coesão e coerência são sinônimos: ambas se referem à organização global do texto e à progressão temática.' },
          { id: 'D', texto: 'Coesão depende exclusivamente do leitor, que reconstrói os elos; coerência depende exclusivamente do autor, que os estabelece.' },
          { id: 'E', texto: 'Coesão se refere apenas a conectivos; coerência se refere apenas a pronomes e a retomadas anafóricas.' }
        ],
        gabarito: 'B',
        explicacao: 'COESÃO: ligação FORMAL (pronomes, conectivos, substituições). COERÊNCIA: ligação de SENTIDO (o texto faz sentido global e local). A) inverte; C) iguala; D) separa indevidamente (autor e leitor participam de ambas); E) reduz coesão a conectivos e coerência a pronomes — ambas envolvem mais elementos.'
      },

      /* ---------- Item 2 (fácil) — V/F simples ---------- */
      {
        id: 'D-POR-03-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Anáfora x catáfora',
        pergunta: 'Anáfora e catáfora são mecanismos de coesão referencial: a anáfora retoma um termo já dito, e a catáfora antecipa um termo que ainda será dito.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. ANÁFORA: retoma termo JÁ DITO ("O servidor chegou. Ele estava atrasado"). CATÁFORA: antecipa termo que VIRÁ ("Era isto o que importava: o prazo"). A anáfora olha para trás; a catáfora, para frente.'
      },

      /* ---------- Item 3 (médio) — MC I/II/III ---------- */
      {
        id: 'D-POR-03-03',
        tipo: 'multipla_escolha',
        subtopico: 'Valor semântico dos conectivos',
        pergunta: 'Sobre o valor semântico dos conectivos, analise:\nI — Em "Estudou muito, PORQUE queria passar", o conectivo introduz causa.\nII — Em "Estudou muito, PORTANTO passou", o conectivo introduz conclusão.\nIII — Em "Estudou muito, EMBORA tenha sido reprovado", o conectivo introduz causa.\nEstá CORRETO apenas o que se afirma em:',
        alternativas: [
          { id: 'A', texto: 'I.' },
          { id: 'B', texto: 'II.' },
          { id: 'C', texto: 'III.' },
          { id: 'D', texto: 'I e II.' },
          { id: 'E', texto: 'II e III.' }
        ],
        gabarito: 'D',
        explicacao: 'I correta: "porque" = causa. II correta: "portanto" = conclusão. III errada: "embora" introduz CONCESSÃO (admite o fato contrário: estudou, mas foi reprovado) — não causa. A concessão admite e supera; a causa explica.'
      },

      /* ---------- Item 4 (médio) — V/F simples ---------- */
      {
        id: 'D-POR-03-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Coesão x coerência (relação)',
        pergunta: 'Um texto coeso é necessariamente um texto coerente, pois a presença de conectivos e retomadas formais garante a coerência global.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'FALSO. Coesão ≠ coerência. Um texto pode ser COESO e INCOERENTE: "Estudou muito, portanto foi reprovado" — o conectivo "portanto" (coesão) liga as orações, mas a relação lógica está errada (incoerência semântica). A coesão formal não garante coerência de sentido.'
      },

      /* ---------- Item 5 (médio-difícil) — Situação ---------- */
      {
        id: 'D-POR-03-05',
        tipo: 'situacao',
        subtopico: 'Aplicação: detectar incoerência',
        pergunta: 'Considere o trecho: "O prazo não foi cumprido, portanto faltaram servidores." Sobre o trecho, é CORRETO afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Há coesão e coerência: o conectivo "portanto" liga corretamente causa e consequência, explicitando a relação lógica.' },
          { id: 'B', texto: 'Há coesão formal (o conectivo liga as orações), mas há incoerência semântica: "portanto" indica conclusão, mas a falta de servidores é a CAUSA do descumprimento, não a conclusão dele.' },
          { id: 'C', texto: 'Há incoerência apenas por falta de coesão: nenhum conectivo liga as orações, o que impede a progressão temática.' },
          { id: 'D', texto: 'Há apenas problema de pontuação: a vírgula antes de "portanto" está mal colocada e compromete a coesão.' },
          { id: 'E', texto: 'Há apenas problema gramatical: "portanto" deveria concordar com "servidores" em número e pessoa.' }
        ],
        gabarito: 'B',
        explicacao: 'Há COESÃO (o conectivo liga as orações), mas há INCOERÊNCIA (o conectivo correto seria "porque" — a falta de servidores é a CAUSA do descumprimento). "Portanto" indica conclusão, e a relação é de causa → incoerência semântica. A) não há coerência. C) há conectivo. D) a vírgula está correta. E) "portanto" é conjunção invariável — não concorda.'
      },

      /* ---------- Item 6 (difícil) — MC complete lacunas ---------- */
      {
        id: 'D-POR-03-06',
        tipo: 'multipla_escolha',
        subtopico: 'Complete as lacunas com conectivos',
        pergunta: 'Complete as lacunas com os conectivos ADEQUADOS:\n"O prazo não foi cumprido ____ faltaram servidores. ____, o processo foi reaberto para análise."',
        alternativas: [
          { id: 'A', texto: 'porque / Portanto.' },
          { id: 'B', texto: 'embora / No entanto.' },
          { id: 'C', texto: 'portanto / Porque.' },
          { id: 'D', texto: 'caso / Logo.' },
          { id: 'E', texto: 'conforme / Assim.' }
        ],
        gabarito: 'A',
        explicacao: '1ª lacuna: "porque" (CAUSA — a falta de servidores causou o não cumprimento). 2ª lacuna: "Portanto" (CONCLUSÃO — a reabertura decorre do não cumprimento). B) "embora" (concessão) não cabe — a falta foi causa. C) inverte causa e conclusão. D) "caso" (condição) não cabe. E) "conforme" (conformidade) não cabe.'
      },

      /* ---------- Item 7 (difícil-meta) — Autoavaliação ---------- */
      {
        id: 'D-POR-03-07',
        tipo: 'autoavaliacao',
        subtopico: 'Coesão e coerência — distinções fundamentais',
        pergunta: 'Você consegue, sem consultar, distinguir: (a) coesão referencial x sequencial; (b) anáfora x catáfora; (c) causa x consequência x concessão x finalidade; (d) coerência global x local; (e) incoerência x ambiguidade?',
        resposta: 'COESÃO REFERENCIAL: retomada/antecipação de termos (anáfora, catáfora, pronomes, substituições). COESÃO SEQUENCIAL: ligação entre orações/parágrafos por conectivos. ANÁFORA: retoma termo já dito. CATÁFORA: antecipa termo que virá. CAUSA: "porque". CONSEQUÊNCIA: "portanto". CONCESSÃO: "embora" (admite e supera). FINALIDADE: "para que" (intenção). COERÊNCIA GLOBAL: o texto faz sentido como um todo. LOCAL: as relações entre frases/parágrafos são lógicas. INCOERÊNCIA: quebra de sentido (contradição, salto). AMBIGUIDADE: duplo sentido involuntário.'
      }
    ]
  },

  /* ============================================================
     POR-04 — Semântica, significação e relações entre palavras
  ============================================================ */
  'POR-04': {
    id: 'D-POR-04',
    moduloId: 'POR-04',
    itens: [
      /* ---------- Item 1 (fácil) — MC clássica ---------- */
      {
        id: 'D-POR-04-01',
        tipo: 'multipla_escolha',
        subtopico: 'Denotação x conotação',
        pergunta: 'Sobre denotação e conotação, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Denotação é o sentido figurado, subjetivo; conotação é o sentido literal, objetivo e dicionarizado.' },
          { id: 'B', texto: 'Denotação é o sentido literal, dicionarizado; conotação é o sentido figurado, subjetivo, dependente do contexto de uso.' },
          { id: 'C', texto: 'Denotação e conotação são sinônimos: ambas se referem ao sentido contextual das palavras em uso.' },
          { id: 'D', texto: 'Denotação é o sentido subjetivo; conotação é o sentido objetivo, compartilhado por todos os falantes.' },
          { id: 'E', texto: 'Denotação é usada apenas em textos literários; conotação é usada apenas em textos científicos e administrativos.' }
        ],
        gabarito: 'B',
        explicacao: 'DENOTAÇÃO: sentido LITERAL, dicionarizado, objetivo. CONOTAÇÃO: sentido FIGURADO, subjetivo, dependente do contexto. A) inverte; C) iguala; D) inverte; E) inverte os usos (ambas ocorrem em qualquer gênero, com predominâncias distintas).'
      },

      /* ---------- Item 2 (fácil) — V/F simples ---------- */
      {
        id: 'D-POR-04-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Paronímia',
        pergunta: 'As palavras "emergir" (subir à superfície) e "imergir" (afundar) são parônimas: têm forma parecida e sentido diferente.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. PARONÍMIA: forma parecida, sentido diferente. "Emergir" (vir à tona) x "imergir" (afundar). Outros exemplos: "eminente" (ilustre) x "iminente" (que está para acontecer); "despercebido" (não notado) x "desapercebido" (desprovido). Parônimos são fonte clássica de erro em prova.'
      },

      /* ---------- Item 3 (médio) — MC I/II/III ---------- */
      {
        id: 'D-POR-04-03',
        tipo: 'multipla_escolha',
        subtopico: 'Polissemia x homonímia',
        pergunta: 'Sobre polissemia e homonímia, analise:\nI — Polissemia é a propriedade de uma palavra ter vários sentidos RELACIONADOS entre si, como "banco" (assento e instituição financeira).\nII — Homonímia é a coincidência de forma (som ou escrita) entre palavras de sentidos NÃO relacionados, como "cela" (prisão) e "sela" (arreio).\nIII — Polissemia e homonímia são sinônimos, pois ambas se referem à multiplicidade de sentidos de uma palavra.\nEstá CORRETO apenas o que se afirma em:',
        alternativas: [
          { id: 'A', texto: 'I.' },
          { id: 'B', texto: 'II.' },
          { id: 'C', texto: 'III.' },
          { id: 'D', texto: 'I e II.' },
          { id: 'E', texto: 'II e III.' }
        ],
        gabarito: 'D',
        explicacao: 'I correta: polissemia = sentidos relacionados ("banco" — assento e instituição financeira têm relação histórica). II correta: homonímia = forma igual, sentidos não relacionados ("cela" x "sela"). III errada: NÃO são sinônimos — a polissemia tem relação entre os sentidos; a homonímia, não.'
      },

      /* ---------- Item 4 (médio) — V/F simples ---------- */
      {
        id: 'D-POR-04-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Hiperônimo x hipônimo',
        pergunta: 'Em "Comprei flores: rosas, margaridas e violetas", "flores" é hiperônimo de "rosas", "margaridas" e "violetas".',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. HIPERÔNIMO: termo geral que engloba outros ("flores" engloba "rosas, margaridas, violetas"). HIPÔNIMO: termo específico do conjunto ("rosas" pertence ao conjunto "flores"). A relação gênero-espécie é útil para substituição coesiva (evitar repetição).'
      },

      /* ---------- Item 5 (médio-difícil) — Situação ---------- */
      {
        id: 'D-POR-04-05',
        tipo: 'situacao',
        subtopico: 'Aplicação: detectar ambiguidade',
        pergunta: 'Considere a frase: "O diretor informou ao servidor que seu pedido foi negado." Sobre a frase, é CORRETO afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Há clareza total: "seu" refere-se inequivocamente ao diretor, pois é o sujeito da oração principal.' },
          { id: 'B', texto: 'Há clareza total: "seu" refere-se inequivocamente ao servidor, pois é o objeto indireto da oração.' },
          { id: 'C', texto: 'Há ambiguidade estrutural: "seu" pode referir-se tanto ao diretor quanto ao servidor, o que compromete a clareza do enunciado.' },
          { id: 'D', texto: 'Há erro de concordância: "seu" deveria concordar com "diretor" em gênero e número, o que não ocorre na frase.' },
          { id: 'E', texto: 'Há erro de regência: "informou ao servidor" deveria ser "informou o servidor", sem preposição obrigatória.' }
        ],
        gabarito: 'C',
        explicacao: 'AMBIGUIDADE: "seu" pode se referir ao diretor (o pedido do diretor) ou ao servidor (o pedido do servidor) — duplo sentido involuntário. A) não há clareza. B) não há clareza. D) "seu" é possessivo — concorda com o termo possuído (pedido), não com o possuidor. E) "informar" admite "informar algo a alguém" (com "a") — não há erro de regência.'
      },

      /* ---------- Item 6 (difícil) — MC sinônimo contextual ---------- */
      {
        id: 'D-POR-04-06',
        tipo: 'multipla_escolha',
        subtopico: 'Sinônimo contextual',
        pergunta: 'Substitua o termo em destaque por sinônimo ADEQUADO ao contexto:\n"O parecer foi ACOLHIDO pela autoridade competente, que deferiu o pedido."',
        alternativas: [
          { id: 'A', texto: 'rejeitado — a autoridade competente não aceitou o parecer técnico apresentado pela área responsável.' },
          { id: 'B', texto: 'aceito — a autoridade competente aceitou o parecer técnico e, com base nele, deferiu o pedido do cidadão.' },
          { id: 'C', texto: 'criticado — a autoridade competente questionou o parecer técnico e, por isso, decidiu deferir o pedido do cidadão.' },
          { id: 'D', texto: 'ignorado — a autoridade competente desconsiderou o parecer técnico e decidiu o pedido por critério próprio de conveniência.' },
          { id: 'E', texto: 'anulado — a autoridade competente invalidou o parecer técnico e, em razão disso, deferiu o pedido do cidadão.' }
        ],
        gabarito: 'B',
        explicacao: '"ACOLHIDO" = aceito, aprovado. No contexto, a autoridade acolheu o parecer (= aceitou) e deferiu o pedido. A) "rejeitado" = antônimo. C) "criticado" e "deferido" são incoerentes (se criticou, não deferiu por ele). D) "ignorado" contradiz o deferimento. E) "anulado" e "deferido" são incoerentes.'
      },

      /* ---------- Item 7 (difícil-meta) — Autoavaliação ---------- */
      {
        id: 'D-POR-04-07',
        tipo: 'autoavaliacao',
        subtopico: 'Semântica — distinções fundamentais',
        pergunta: 'Você consegue, sem consultar, distinguir: (a) denotação x conotação; (b) sinonímia x paronímia; (c) polissemia x homonímia; (d) hiperônimo x hipônimo; (e) ambiguidade lexical x estrutural?',
        resposta: 'DENOTAÇÃO: literal. CONOTAÇÃO: figurado. SINONÍMIA: sentido próximo (casa/moradia). PARONÍMIA: forma parecida, sentido diferente (emergir/imergir). POLISSEMIA: mesma palavra, sentidos RELACIONADOS (banco). HOMONÍMIA: forma igual, sentidos NÃO relacionados (cela/sela). HIPERÔNIMO: geral (flor). HIPÔNIMO: específico (rosa). AMBIGUIDADE LEXICAL: palavra polissêmica no contexto. ESTRUTURAL: a construção da frase gera duplo sentido.'
      }
    ]
  },

  /* ============================================================
     POR-05 — Figuras de linguagem e funções da linguagem
  ============================================================ */
  'POR-05': {
    id: 'D-POR-05',
    moduloId: 'POR-05',
    itens: [
      /* ---------- Item 1 (fácil) — MC clássica ---------- */
      {
        id: 'D-POR-05-01',
        tipo: 'multipla_escolha',
        subtopico: 'Metáfora x comparação',
        pergunta: 'Sobre metáfora e comparação, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Metáfora é a comparação explícita, com conectivo "como"; comparação é a comparação implícita, sem conectivo.' },
          { id: 'B', texto: 'Metáfora é a comparação implícita, sem conectivo; comparação é a explícita, com "como", "tal qual" ou equivalentes.' },
          { id: 'C', texto: 'Metáfora e comparação são sinônimos: ambas se referem a figuras de linguagem que aproximam dois termos.' },
          { id: 'D', texto: 'Metáfora é usada apenas em poesia; comparação é usada apenas em textos jornalísticos e administrativos.' },
          { id: 'E', texto: 'Metáfora e comparação se distinguem pelo tempo verbal predominante: a primeira usa o presente; a segunda, o passado.' }
        ],
        gabarito: 'B',
        explicacao: 'METÁFORA: comparação IMPLÍCITA, sem conectivo ("Ele é um leão"). COMPARAÇÃO: EXPLÍCITA, com "como", "tal qual" ("Ele é forte como um leão"). A) inverte; C) iguala; D) restringe indevidamente os usos; E) inventa critério inexistente.'
      },

      /* ---------- Item 2 (fácil) — V/F simples ---------- */
      {
        id: 'D-POR-05-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Função conativa',
        pergunta: 'A função conativa (ou apelativa) da linguagem concentra-se no receptor, buscando influenciar seu comportamento, como em "Compre agora!" ou "Vote em...".',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. FUNÇÃO CONATIVA (ou apelativa): foco no RECEPTOR, com verbos no imperativo, vocativos, 2ª pessoa — busca influenciar comportamento ("Compre!", "Vote!"). Típica de publicidade, campanhas e discursos. Não confundir com emotiva (foco no emissor).'
      },

      /* ---------- Item 3 (médio) — MC I/II/III ---------- */
      {
        id: 'D-POR-05-03',
        tipo: 'multipla_escolha',
        subtopico: 'Identificação de figuras',
        pergunta: 'Sobre figuras de linguagem, analise:\nI — "Ele é um leão" é exemplo de metáfora (comparação implícita).\nII — "Ele é forte como um touro" é exemplo de comparação (comparação explícita com "como").\nIII — "Chorei rios de lágrimas" é exemplo de metonímia (troca por proximidade).\nEstá CORRETO apenas o que se afirma em:',
        alternativas: [
          { id: 'A', texto: 'I.' },
          { id: 'B', texto: 'II.' },
          { id: 'C', texto: 'III.' },
          { id: 'D', texto: 'I e II.' },
          { id: 'E', texto: 'II e III.' }
        ],
        gabarito: 'D',
        explicacao: 'I correta: metáfora (implícita). II correta: comparação (explícita com "como"). III errada: "chorei rios de lágrimas" é HIPÉRBOLE (exagero intencional), não metonímia. Metonímia é troca por proximidade ("Li Machado" = autor pela obra; "Comprei um Portinari" = autor pela obra).'
      },

      /* ---------- Item 4 (médio) — V/F simples ---------- */
      {
        id: 'D-POR-05-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Ironia',
        pergunta: 'A ironia consiste em dizer o contrário do que se quer significar, geralmente com carga crítica, como em "Que belo serviço!" para algo malfeito.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. IRONIA: dizer o CONTRÁRIO do que se quer significar, geralmente com carga crítica ("Que belo serviço!" para algo malfeito). Não confundir com EUFEMISMO (suavização — "ele nos deixou" por "morreu"). A ironia ataca; o eufemismo amortece.'
      },

      /* ---------- Item 5 (médio-difícil) — Situação ---------- */
      {
        id: 'D-POR-05-05',
        tipo: 'situacao',
        subtopico: 'Aplicação: função predominante',
        pergunta: 'Um anúncio publicitário diz: "Corra! A promoção termina hoje!" Sobre a função da linguagem predominante, é CORRETO afirmar que:',
        alternativas: [
          { id: 'A', texto: 'É a função referencial, pois o anúncio informa objetivamente o prazo final da promoção, com dados verificáveis.' },
          { id: 'B', texto: 'É a função conativa, pois o anúncio busca influenciar o comportamento do receptor, com imperativo ("corra") e apelo direto.' },
          { id: 'C', texto: 'É a função poética, pois o anúncio elabora a forma da mensagem, com ritmo e sonoridade que atraem o leitor.' },
          { id: 'D', texto: 'É a função fática, pois o anúncio testa o canal de comunicação, verificando se o receptor está ouvindo a mensagem.' },
          { id: 'E', texto: 'É a função metalinguística, pois o anúncio fala sobre a própria linguagem publicitária, refletindo sobre seu código.' }
        ],
        gabarito: 'B',
        explicacao: 'FUNÇÃO CONATIVA (predominante): foco no RECEPTOR, com imperativo ("Corra!") e apelo direto. A) a referencial informa objetivamente, mas o anúncio VISA À AÇÃO. C) a poética pode estar presente, mas não predomina. D) a fática testa o canal — não é o caso. E) a metalinguística fala sobre o código — não é o caso.'
      },

      /* ---------- Item 6 (difícil) — MC associação ---------- */
      {
        id: 'D-POR-05-06',
        tipo: 'multipla_escolha',
        subtopico: 'Associação: funções x elementos da comunicação',
        pergunta: 'Associe as funções da linguagem aos elementos da comunicação que cada uma enfatiza:\n1 — Função referencial.\n2 — Função emotiva.\n3 — Função conativa.\n4 — Função metalinguística.\nELEMENTOS\n( ) Emissor.\n( ) Receptor.\n( ) Código.\n( ) Referente.\nA sequência CORRETA, de cima para baixo, é:',
        alternativas: [
          { id: 'A', texto: '1, 2, 3, 4.' },
          { id: 'B', texto: '2, 3, 4, 1.' },
          { id: 'C', texto: '3, 4, 1, 2.' },
          { id: 'D', texto: '4, 1, 2, 3.' },
          { id: 'E', texto: '2, 1, 4, 3.' }
        ],
        gabarito: 'B',
        explicacao: 'EMISSOR → 2 (emotiva, foco no eu). RECEPTOR → 3 (conativa, foco no outro). CÓDIGO → 4 (metalinguística, linguagem falando de si). REFERENTE → 1 (referencial, foco na informação objetiva).'
      },

      /* ---------- Item 7 (difícil-meta) — Autoavaliação ---------- */
      {
        id: 'D-POR-05-07',
        tipo: 'autoavaliacao',
        subtopico: 'Figuras e funções — distinções fundamentais',
        pergunta: 'Você consegue, sem consultar, distinguir: (a) metáfora x comparação; (b) antítese x paradoxo; (c) ironia x eufemismo; (d) as seis funções da linguagem; (e) os elementos da comunicação associados a cada função?',
        resposta: 'METÁFORA: implícita. COMPARAÇÃO: explícita (com "como"). ANTÍTESE: oposição justaposta ("doce e tirano"). PARADOXO: contradição numa mesma expressão ("silêncio ensurdecedor"). IRONIA: dizer o contrário, com crítica. EUFEMISMO: suavização. FUNÇÕES: referencial (referente), emotiva (emissor), conativa (receptor), fática (canal), metalinguística (código), poética (mensagem).'
      }
    ]
  }

};
