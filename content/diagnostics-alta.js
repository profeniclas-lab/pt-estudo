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
  },
  /* ============================================================
     POR-07 — Acentuação gráfica
  ============================================================ */
  'POR-07': {
    id: 'D-POR-07',
    moduloId: 'POR-07',
    itens: [
      /* ---------- Item 1 (fácil) — MC clássica ---------- */
      {
        id: 'D-POR-07-01',
        tipo: 'multipla_escolha',
        subtopico: 'Classificação quanto à sílaba tônica',
        pergunta: 'Sobre a classificação das palavras quanto à posição da sílaba tônica, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Oxítona é a palavra cuja sílaba tônica é a penúltima; paroxítona é a última; proparoxítona é a antepenúltima.' },
          { id: 'B', texto: 'Oxítona é a palavra cuja sílaba tônica é a última; paroxítona é a penúltima; proparoxítona é a antepenúltima.' },
          { id: 'C', texto: 'Oxítona é a palavra cuja sílaba tônica é a antepenúltima; paroxítona é a penúltima; proparoxítona é a última.' },
          { id: 'D', texto: 'Oxítona, paroxítona e proparoxítona são sinônimos: todas se referem a palavras com mais de uma sílaba tônica.' },
          { id: 'E', texto: 'Oxítona é a palavra com apenas uma sílaba; paroxítona é a com duas; proparoxítona é a com três ou mais sílabas.' }
        ],
        gabarito: 'B',
        explicacao: 'OXÍTONA: tônica na ÚLTIMA (ca-FÉ). PAROXÍTONA: tônica na PENÚLTIMA (CA-sa). PROPAROXÍTONA: tônica na ANTEPENÚLTIMA (MÉ-di-co). A) inverte tudo. C) inverte. D) confunde com "mais de uma sílaba tônica" (toda palavra tem uma tônica principal). E) confunde com número de sílabas (monossílabo, dissílabo, polissílabo).'
      },

      /* ---------- Item 2 (fácil) — V/F simples ---------- */
      {
        id: 'D-POR-07-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Proparoxítonas',
        pergunta: 'Todas as palavras proparoxítonas são acentuadas graficamente, sem exceção.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. TODAS as proparoxítonas são acentuadas: médico, lâmpada, próximo, século, público, último, básico, ônibus, xícara. Não há exceção — é a única regra de acentuação que não depende de terminação.'
      },

      /* ---------- Item 3 (médio) — V/F sequencial ---------- */
      {
        id: 'D-POR-07-03',
        tipo: 'multipla_escolha',
        subtopico: 'Regras de acentuação (oxítonas, paroxítonas, monossílabos)',
        pergunta: 'Julgue as afirmações sobre acentuação gráfica:\n(__) Acentuam-se as oxítonas terminadas em A, E, O (seguidos ou não de S) e em EM/ENS, como "café", "cipó" e "armazém".\n(__) Acentuam-se as paroxítonas terminadas em A, E, O, EM e AM, como "casa", "verde" e "jovem".\n(__) Acentuam-se os monossílabos tônicos terminados em A, E, O (seguidos ou não de S), como "pá", "pé" e "pó".\n(__) Acentuam-se as paroxítonas terminadas em I, IS, US, UM, UNS, L, N, R, X, PS e ditongos, como "lápis", "álbum", "fácil" e "história".\nAssinale a alternativa com a sequência CORRETA, de cima para baixo:',
        alternativas: [
          { id: 'A', texto: 'V, V, V, V.' },
          { id: 'B', texto: 'V, F, V, V.' },
          { id: 'C', texto: 'V, F, F, V.' },
          { id: 'D', texto: 'F, V, V, F.' },
          { id: 'E', texto: 'F, F, V, V.' }
        ],
        gabarito: 'B',
        explicacao: '(__1) V: regra correta das oxítonas. (__2) F: as paroxítonas terminadas em A, E, O, EM e AM NÃO são acentuadas — "casa", "verde", "jovem", "falam" ficam sem acento. (__3) V: regra correta dos monossílabos tônicos. (__4) V: regra correta das paroxítonas (I, IS, US, UM, UNS, L, N, R, X, PS, ditongos).'
      },

      /* ---------- Item 4 (médio) — V/F simples ---------- */
      {
        id: 'D-POR-07-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Acordo Ortográfico — ditongos e hiatos',
        pergunta: 'Após o Acordo Ortográfico vigente, palavras como "ideia", "heroico" e "jiboia" NÃO recebem mais acento, pois o acento dos ditongos abertos ÉU, ÉI, ÓI foi eliminado nas paroxítonas.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. O Acordo eliminou o acento dos ditongos abertos ÉU, ÉI, ÓI em PAROXÍTONAS: ideia (antes idéia), heroico (antes heróico), jiboia (antes jibóia), assembleia (antes assembléia). Em OXÍTONAS, o acento permanece: céu, papéis, herói.'
      },

      /* ---------- Item 5 (médio-difícil) — Situação ---------- */
      {
        id: 'D-POR-07-05',
        tipo: 'situacao',
        subtopico: 'Aplicação: identificar erro de acentuação',
        pergunta: 'Um candidato redigiu a frase: "O servidor protocolou o requerimento, mas a análise ainda não foi concluída, pois faltam documentos." Sobre a acentuação das palavras, é CORRETO afirmar que:',
        alternativas: [
          { id: 'A', texto: 'A frase contém erro: "análise" deveria ser grafada sem acento, pois é paroxítona terminada em E.' },
          { id: 'B', texto: 'A frase contém erro: "concluída" deveria ser grafada sem acento, pois o hiato "uí" não é acentuado após o Acordo Ortográfico.' },
          { id: 'C', texto: 'A frase está integralmente correta: "análise" é proparoxítona (todas são acentuadas); "concluída" tem hiato "uí" tônico, acentuado; "ainda" não recebe acento (paroxítona terminada em A).' },
          { id: 'D', texto: 'A frase contém erro: "ainda" deveria receber acento, pois é paroxítona terminada em A.' },
          { id: 'E', texto: 'A frase contém erro: "documentos" deveria ser grafada sem acento, pois é proparoxítona aparente.' }
        ],
        gabarito: 'C',
        explicacao: 'A frase está CORRETA. "Análise" é proparoxítona (todas acentuadas). "Concluída" tem hiato "uí" tônico (acentua-se). "Ainda" é paroxítona terminada em A (não acentuada). A) análise é proparoxítona, não paroxítona. B) hiatos I/U tônicos continuam acentuados. D) paroxítonas em A NÃO são acentuadas. E) "documentos" é paroxítona, não proparoxítona.'
      },

      /* ---------- Item 6 (difícil) — MC I/II/III ---------- */
      {
        id: 'D-POR-07-06',
        tipo: 'multipla_escolha',
        subtopico: 'Acentos diferenciais',
        pergunta: 'Sobre os acentos diferenciais que permaneceram após o Acordo Ortográfico, analise:\nI — "Pôde" (passado) recebe circunflexo para se diferenciar de "pode" (presente).\nII — "Pôr" (verbo) recebe circunflexo para se diferenciar de "por" (preposição).\nIII — "Pêlo" (substantivo) recebe circunflexo para se diferenciar de "pelo" (preposição), assim como "pólo" e "pêra".\nEstá CORRETO apenas o que se afirma em:',
        alternativas: [
          { id: 'A', texto: 'I.' },
          { id: 'B', texto: 'II.' },
          { id: 'C', texto: 'III.' },
          { id: 'D', texto: 'I e II.' },
          { id: 'E', texto: 'I, II e III.' }
        ],
        gabarito: 'D',
        explicacao: 'I correta: "pôde" (passado) x "pode" (presente) — acento diferencial mantido. II correta: "pôr" (verbo) x "por" (preposição) — acento diferencial mantido. III errada: "pêlo", "pólo", "pêra" PERDERAM o acento com o Acordo Ortográfico (agora: pelo, polo, pera). Também "para" (verbo/preposição) e "pela" perderam o acento.'
      },

      /* ---------- Item 7 (difícil-meta) — Autoavaliação ---------- */
      {
        id: 'D-POR-07-07',
        tipo: 'autoavaliacao',
        subtopico: 'Acentuação — distinções fundamentais',
        pergunta: 'Você consegue, sem consultar, classificar palavras em oxítonas, paroxítonas e proparoxítonas e aplicar as regras de acentuação — incluindo as mudanças do Acordo Ortográfico (ditongos abertos em paroxítonas, hiatos EE/OO, acentos diferenciais)?',
        resposta: 'Primeiro classifique (última/penúltima/antepenúltima tônica). OXÍTONAS: acentuam A, E, O (+S) e EM/ENS. PAROXÍTONAS: acentuam I, IS, US, UM, UNS, Ã, ÃS, ÃO, ÃOS, ON, ONS, L, N, R, X, PS, ditongos. PROPAROXÍTONAS: todas. MONOSSÍLABOS: A, E, O (+S). ACORDO: ditongos abertos ÉU, ÉI, ÓI — acentuados em oxítonas (céu, papéis, herói), NÃO em paroxítonas (ideia, heroico, jiboia). Hiatos EE/OO — não acentuados (creem, voo). ACENTOS DIFERENCIAIS MANTIDOS: pôde/pode, têm/tem, vêm/vem, pôr/por, côa/coa.'
      }
    ]
  },

  /* ============================================================
     POR-10 — Pronomes
  ============================================================ */
  'POR-10': {
    id: 'D-POR-10',
    moduloId: 'POR-10',
    itens: [
      /* ---------- Item 1 (fácil) — MC clássica ---------- */
      {
        id: 'D-POR-10-01',
        tipo: 'multipla_escolha',
        subtopico: 'Pronomes de tratamento',
        pergunta: 'Sobre o emprego dos pronomes de tratamento, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Os pronomes de tratamento exigem o verbo na 2ª pessoa do singular, pois se referem diretamente ao interlocutor.' },
          { id: 'B', texto: 'Os pronomes de tratamento exigem o verbo na 3ª pessoa, ainda que se refiram ao interlocutor, como em "Vossa Excelência despachou o processo".' },
          { id: 'C', texto: 'Os pronomes de tratamento exigem o verbo na 1ª pessoa do plural, pois representam a instituição que o destinatário chefia.' },
          { id: 'D', texto: 'Os pronomes de tratamento variam livremente conforme a preferência do redator, sem regra fixa de concordância.' },
          { id: 'E', texto: 'Os pronomes de tratamento só podem ser usados em comunicações orais, sendo vedados em documentos escritos oficiais.' }
        ],
        gabarito: 'B',
        explicacao: 'Pronomes de tratamento (V.Ex.ª, V.S.ª, V.Mag.ª) exigem verbo na 3ª pessoa: "Vossa Excelência DESPACHOU" (não "despachastes"). A) inverte (2ª pessoa é erro clássico). C) 1ª pessoa não cabe. D) há regra fixa. E) são usados justamente em documentos oficiais (RED-21).'
      },

      /* ---------- Item 2 (fácil) — V/F simples ---------- */
      {
        id: 'D-POR-10-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Pronome relativo "cujo"',
        pergunta: 'O pronome relativo "cujo" indica posse e não pode ser seguido de artigo: deve-se escrever "o servidor cujo pedido foi negado" (e não "cujo o pedido").',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. "CUJO" indica posse e NUNCA é seguido de artigo. Correto: "o servidor cujo pedido" / "a servidora cuja proposta". Errado: "cujo o pedido", "cuja a proposta". Outro ponto: "cujo" concorda com o termo POSSUÍDO (pedido/proposta), não com o possuidor (servidor/servidora).'
      },

      /* ---------- Item 3 (médio) — MC I/II/III ---------- */
      {
        id: 'D-POR-10-03',
        tipo: 'multipla_escolha',
        subtopico: 'Este x esse x aquele',
        pergunta: 'Sobre o emprego dos pronomes demonstrativos, analise:\nI — "Este" refere-se ao que está perto de quem fala, ao tempo presente ou ao que ainda será dito.\nII — "Esse" refere-se ao que está perto de quem ouve, ao passado recente ou ao que já foi dito.\nIII — "Aquele" refere-se ao que está longe de ambos os interlocutores, ao passado remoto ou a um antecedente distante.\nEstá CORRETO apenas o que se afirma em:',
        alternativas: [
          { id: 'A', texto: 'I.' },
          { id: 'B', texto: 'II.' },
          { id: 'C', texto: 'III.' },
          { id: 'D', texto: 'I e II.' },
          { id: 'E', texto: 'I, II e III.' }
        ],
        gabarito: 'E',
        explicacao: 'Todas corretas. ESTE: perto de quem fala, presente, o que será dito. ESSE: perto de quem ouve, passado recente, o que já foi dito. AQUELE: longe de ambos, passado remoto, antecedente distante. Essa distinção é essencial em redação oficial (referência a documentos citados) e é cobrada em interpretação.'
      },

      /* ---------- Item 4 (médio) — V/F simples ---------- */
      {
        id: 'D-POR-10-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Colocação pronominal — início de frase',
        pergunta: 'É correto iniciar uma frase com pronome oblíquo átono, como em "Me entregaram o documento ontem", pois a ordem dos termos é livre na língua portuguesa.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'FALSO. A norma culta NÃO admite iniciar frase com pronome oblíquo átono (me, te, se, o, a, lhe, nos, vos). O correto é ênclise: "ENTREGARAM-ME o documento ontem" ou "Entregaram-me o documento ontem" (dentro de contexto). Iniciar com "me" é erro clássico de colocação pronominal.'
      },

      /* ---------- Item 5 (médio-difícil) — Situação ---------- */
      {
        id: 'D-POR-10-05',
        tipo: 'situacao',
        subtopico: 'Aplicação: reescrever com colocação correta',
        pergunta: 'Um candidato reescreveu a frase "Nunca entregaram o documento ao servidor" como "Nunca entregaram-lhe o documento". Sobre a reescrita, é CORRETO afirmar que:',
        alternativas: [
          { id: 'A', texto: 'A reescrita está correta: o pronome "lhe" retoma "ao servidor" e a colocação está adequada ao contexto.' },
          { id: 'B', texto: 'A reescrita está errada: a palavra atrativa "nunca" exige PRÓCLISE, e o correto seria "Nunca LHE entregaram o documento".' },
          { id: 'C', texto: 'A reescrita está errada: "lhe" não pode substituir "ao servidor", que exige o pronome "o" — correto seria "Nunca entregaram-no".' },
          { id: 'D', texto: 'A reescrita está errada: o verbo "entregar" não admite pronome oblíquo, exigindo sempre o objeto direto expresso.' },
          { id: 'E', texto: 'A reescrita está errada: "lhe" deveria vir antes do verbo "entregar" apenas em frases interrogativas, não em afirmativas.' }
        ],
        gabarito: 'B',
        explicacao: 'A palavra "nunca" é ATRATIVA — exige PRÓCLISE. Correto: "Nunca LHE entregaram o documento". A) "entregaram-lhe" (ênclise) é inadequado quando há atrativa. C) "lhe" substitui "ao servidor" (objeto indireto) corretamente. D) "entregar" admite "lhe" no sentido de entregar a alguém. E) a regra de próclise não depende de interrogação.'
      },

      /* ---------- Item 6 (difícil) — MC complete lacunas ---------- */
      {
        id: 'D-POR-10-06',
        tipo: 'multipla_escolha',
        subtopico: 'Complete as lacunas com colocação pronominal',
        pergunta: 'Complete as lacunas com a colocação pronominal ADEQUADA:\n"____ entregaram o documento ontem. ____ ele entregou o documento? Se ____ entregassem antes, o prazo seria cumprido."',
        alternativas: [
          { id: 'A', texto: 'Me / Quando / lhe.' },
          { id: 'B', texto: 'Entregaram-me / Quando / lhe.' },
          { id: 'C', texto: 'Entregaram-me / Quando lhe / se.' },
          { id: 'D', texto: 'Entregaram-me / Quando / se.' },
          { id: 'E', texto: 'Me / Quando / se.' }
        ],
        gabarito: 'D',
        explicacao: '1ª lacuna: início de frase exige ÊNCLISE — "ENTREGARAM-ME". 2ª lacuna: com a atrativa "quando", próclise — "QUANDO ele entregou" (ou "Quando lhe entregou" se "lhe" fosse retomado; aqui a frase não retoma ninguém — mantém-se "Quando ele entregou"). 3ª lacuna: com a atrativa "se" (conjunção condicional), próclise — "SE LHE ENTREGASSEM". A) "Me entregaram" (início com átono) é erro. B) "Quando lhe" não se aplica (não há termo retomado). C) mistura inadequada. E) erro na 1ª lacuna.'
      },

      /* ---------- Item 7 (difícil-meta) — Autoavaliação ---------- */
      {
        id: 'D-POR-10-07',
        tipo: 'autoavaliacao',
        subtopico: 'Pronomes — distinções fundamentais',
        pergunta: 'Você consegue, sem consultar, distinguir: (a) pronome pessoal reto x oblíquo; (b) este x esse x aquele; (c) pronome relativo "que" x "cujo"; (d) próclise x mesóclise x ênclise; (e) palavras atrativas que exigem próclise?',
        resposta: 'RETO: sujeito (eu, tu, ele). OBLÍQUO: complemento (me, te, o, a, lhe). ESTE: perto/presente/futuro do texto. ESSE: perto do ouvinte/passado recente/já dito. AQUELE: longe/passado remoto. QUE: retoma antecedente (sujeito/objeto). CUJO: indica posse (sem artigo depois). PRÓCLISE: antes do verbo (obrigatória com "não, nunca, que, se, quando, embora"). MESÓCLISE: no meio (futuro do presente/pretérito sem atrativa). ÊNCLISE: depois do verbo (caso geral, início de frase, imperativo afirmativo). ATRATIVAS: não, nunca, jamais, ninguém, nada, nenhum, só, apenas, também, já, ainda, sempre, que, quem, qual, onde, quando, se, embora, conforme, segundo, consoante.'
      }
    ]
  },

  /* ============================================================
     POR-11 — Verbos
  ============================================================ */
  'POR-11': {
    id: 'D-POR-11',
    moduloId: 'POR-11',
    itens: [
      /* ---------- Item 1 (fácil) — MC clássica ---------- */
      {
        id: 'D-POR-11-01',
        tipo: 'multipla_escolha',
        subtopico: 'Modos verbais',
        pergunta: 'Sobre os modos verbais, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'O indicativo expressa dúvida ou hipótese; o subjuntivo expressa certeza; o imperativo expressa ordem ou pedido.' },
          { id: 'B', texto: 'O indicativo expressa certeza; o subjuntivo expressa dúvida, desejo ou hipótese; o imperativo expressa ordem, pedido ou conselho.' },
          { id: 'C', texto: 'O indicativo e o subjuntivo expressam certeza; apenas o imperativo expressa dúvida ou hipótese.' },
          { id: 'D', texto: 'O subjuntivo expressa ordem; o imperativo expressa dúvida; o indicativo expressa hipótese.' },
          { id: 'E', texto: 'Os três modos verbais são sinônimos: todos expressam ação ou estado, sem distinção de valor.' }
        ],
        gabarito: 'B',
        explicacao: 'INDICATIVO: certeza, fato real. SUBJUNTIVO: dúvida, desejo, hipótese. IMPERATIVO: ordem, pedido, conselho. A) inverte; C) confunde; D) inverte; E) nega a distinção.'
      },

      /* ---------- Item 2 (fácil) — V/F simples ---------- */
      {
        id: 'D-POR-11-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Pretérito perfeito x imperfeito',
        pergunta: 'O pretérito perfeito indica fato concluído ("Ontem falei com ele"), enquanto o pretérito imperfeito indica fato habitual no passado ou ação em curso no passado ("Todos os dias falava com ele").',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. PERFEITO: fato CONCLUÍDO, pontual ("Ontem falei com ele"). IMPERFEITO: fato HABITUAL no passado ou ação em curso ("Todos os dias falava com ele"; "Enquanto lia, ouvia música"). A distinção é a linha do tempo: pontual x durativo/habitual.'
      },

      /* ---------- Item 3 (médio) — MC I/II/III ---------- */
      {
        id: 'D-POR-11-03',
        tipo: 'multipla_escolha',
        subtopico: 'Vozes verbais',
        pergunta: 'Sobre as vozes verbais, analise:\nI — Na voz ativa, o sujeito pratica a ação ("O servidor protocolou o pedido").\nII — Na voz passiva analítica, o sujeito sofre a ação ("O pedido foi protocolado pelo servidor").\nIII — Na voz passiva sintética, o sujeito sofre a ação com verbo + "se" ("Protocolou-se o pedido").\nEstá CORRETO apenas o que se afirma em:',
        alternativas: [
          { id: 'A', texto: 'I.' },
          { id: 'B', texto: 'II.' },
          { id: 'C', texto: 'III.' },
          { id: 'D', texto: 'I e II.' },
          { id: 'E', texto: 'I, II e III.' }
        ],
        gabarito: 'E',
        explicacao: 'Todas corretas. ATIVA: sujeito PRATICA ("O servidor protocolou"). PASSIVA ANALÍTICA: sujeito SOFRE + verbo "ser" + particípio + agente com "por" ("O pedido foi protocolado pelo servidor"). PASSIVA SINTÉTICA: sujeito SOFRE + verbo + "se" ("Protocolou-se o pedido"). As três formas são corretas.'
      },

      /* ---------- Item 4 (médio) — V/F simples ---------- */
      {
        id: 'D-POR-11-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Verbos impessoais',
        pergunta: 'O verbo "haver", no sentido de "existir", e o verbo "fazer", indicando tempo decorrido, são impessoais: ficam sempre na 3ª pessoa do singular.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. "Haver" no sentido de existir é IMPESSOAL: "Havia muitos servidores" (não "haviam"). "Fazer" indicando tempo decorrido é IMPESSOAL: "Faz dois anos" (não "fazem"). Já "existir" é pessoal: "Existiam muitos servidores". A confusão é armadilha clássica.'
      },

      /* ---------- Item 5 (médio-difícil) — Situação ---------- */
      {
        id: 'D-POR-11-05',
        tipo: 'situacao',
        subtopico: 'Aplicação: transpor para voz passiva',
        pergunta: 'Um candidato reescreveu a frase "O diretor elogiou os servidores" como "Os servidores foi elogiado pelo diretor". Sobre a reescrita, é CORRETO afirmar que:',
        alternativas: [
          { id: 'A', texto: 'A reescrita está correta: a transposição para voz passiva foi feita sem alteração de sentido.' },
          { id: 'B', texto: 'A reescrita está errada: o verbo "ser" deveria concordar com o sujeito "os servidores", e o correto seria "Os servidores FORAM elogiados pelo diretor".' },
          { id: 'C', texto: 'A reescrita está errada: o agente da passiva "pelo diretor" deveria ser omitido, pois a voz passiva analítica não admite agente expresso.' },
          { id: 'D', texto: 'A reescrita está errada: o verbo "elogiar" é intransitivo e não admite transposição para voz passiva.' },
          { id: 'E', texto: 'A reescrita está errada: a voz passiva analítica não admite tempo passado, apenas presente.' }
        ],
        gabarito: 'B',
        explicacao: 'Erro de CONCORDÂNCIA: o sujeito é "os servidores" (plural) — o verbo "ser" deveria ser "foram" e o particípio "elogiados". Correto: "Os servidores FORAM ELONGIADOS pelo diretor". A) há erro de concordância. C) a passiva analítica admite agente ("pelo diretor"). D) "elogiar" é transitivo direto — admite passiva. E) a passiva analítica admite qualquer tempo.'
      },

      /* ---------- Item 6 (difícil) — MC associação ---------- */
      {
        id: 'D-POR-11-06',
        tipo: 'multipla_escolha',
        subtopico: 'Associação: tempos verbais e valores',
        pergunta: 'Associe os tempos verbais aos valores que expressam:\n1 — Pretérito imperfeito ("falava").\n2 — Pretérito mais-que-perfeito ("falara").\n3 — Futuro do presente ("falarei").\n4 — Futuro do pretérito ("falaria").\nVALORES\n( ) Fato futuro em relação a um passado, ou hipótese.\n( ) Ação anterior a outra ação no passado.\n( ) Fato habitual no passado ou ação em curso no passado.\n( ) Fato posterior ao momento atual.\nA sequência CORRETA, de cima para baixo, é:',
        alternativas: [
          { id: 'A', texto: '1, 2, 3, 4.' },
          { id: 'B', texto: '2, 3, 4, 1.' },
          { id: 'C', texto: '3, 4, 1, 2.' },
          { id: 'D', texto: '4, 2, 1, 3.' },
          { id: 'E', texto: '4, 3, 2, 1.' }
        ],
        gabarito: 'D',
        explicacao: 'FUTURO DO PRETÉRITO → 4 ("falaria": hipótese ou futuro em relação ao passado). MAIS-QUE-PERFEITO → 2 ("falara": anterior a outra ação passada). IMPERFEITO → 1 ("falava": habitual/em curso no passado). FUTURO DO PRESENTE → 3 ("falarei": posterior ao momento atual).'
      },

      /* ---------- Item 7 (difícil-meta) — Autoavaliação ---------- */
      {
        id: 'D-POR-11-07',
        tipo: 'autoavaliacao',
        subtopico: 'Verbos — distinções fundamentais',
        pergunta: 'Você consegue, sem consultar, distinguir: (a) os três modos verbais; (b) pretérito perfeito x imperfeito x mais-que-perfeito; (c) voz ativa x passiva analítica x passiva sintética; (d) verbos regulares x irregulares x auxiliares; (e) verbos impessoais (haver, fazer, ser no tempo)?',
        resposta: 'MODOS: indicativo (certeza), subjuntivo (dúvida), imperativo (ordem). PRETÉRITOS: perfeito (pontual, concluído), imperfeito (habitual/em curso), mais-que-perfeito (anterior a outro passado). VOZES: ativa (sujeito age), passiva analítica (ser + particípio + agente), passiva sintética (verbo + se). VERBOS: regulares (paradigma), irregulares (alteram radical/terminações), auxiliares (formam locuções). IMPESSOAIS: haver (existir), fazer (tempo), ser (tempo/hora) — 3ª pessoa do singular.'
      }
    ]
  },

  /* ============================================================
     POR-15 — Concordância verbal e nominal
  ============================================================ */
  'POR-15': {
    id: 'D-POR-15',
    moduloId: 'POR-15',
    itens: [
      /* ---------- Item 1 (fácil) — MC clássica ---------- */
      {
        id: 'D-POR-15-01',
        tipo: 'multipla_escolha',
        subtopico: 'Regra geral da concordância verbal',
        pergunta: 'Sobre a concordância verbal, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'O verbo concorda com o objeto direto em número e pessoa, independentemente do sujeito da oração.' },
          { id: 'B', texto: 'O verbo concorda com o sujeito em número e pessoa — "O servidor protocolou" / "Os servidores protocolaram".' },
          { id: 'C', texto: 'O verbo concorda com o predicativo do sujeito em gênero e número, independentemente do núcleo do sujeito.' },
          { id: 'D', texto: 'O verbo permanece sempre na 3ª pessoa do singular, independentemente do sujeito.' },
          { id: 'E', texto: 'O verbo concorda com o termo mais próximo, seja ele sujeito, objeto ou adjunto.' }
        ],
        gabarito: 'B',
        explicacao: 'Regra geral: o verbo concorda com o SUJEITO em número e pessoa. A) concorda com o sujeito, não com o objeto. C) concorda com o sujeito, não com o predicativo. D) há flexão de acordo com o sujeito. E) a concordância é com o sujeito, não com o termo mais próximo (salvo casos especiais como sujeito composto posposto).'
      },

      /* ---------- Item 2 (fácil) — V/F simples ---------- */
      {
        id: 'D-POR-15-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Verbos impessoais',
        pergunta: 'Nas orações com verbos impessoais (haver = existir, fazer = tempo), o verbo permanece na 3ª pessoa do singular, sem sujeito: "Havia servidores" e "Faz dois anos".',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. Verbos impessoais NÃO têm sujeito e ficam na 3ª pessoa do singular: "Havia servidores" (não "haviam"), "Faz dois anos" (não "fazem"), "Houve problemas" (não "houveram"). Essa regra é uma das mais cobradas em concordância.'
      },

      /* ---------- Item 3 (médio) — V/F sequencial ---------- */
      {
        id: 'D-POR-15-03',
        tipo: 'multipla_escolha',
        subtopico: 'Casos especiais de concordância',
        pergunta: 'Julgue as afirmações sobre casos especiais de concordância:\n(__) Com sujeito composto anteposto ao verbo, o verbo fica no plural ("O diretor e o coordenador chegaram").\n(__) Com sujeito composto posposto ao verbo, o verbo pode ficar no singular ou no plural ("Chegou o diretor e o coordenador" / "Chegaram o diretor e o coordenador").\n(__) Com "mais de um", o verbo fica no plural, pois a expressão indica mais de um ser ("Mais de um servidor faltaram").\n(__) Com pronomes de tratamento, o verbo fica na 3ª pessoa ("Vossa Excelência despachou").\nAssinale a alternativa com a sequência CORRETA, de cima para baixo:',
        alternativas: [
          { id: 'A', texto: 'V, V, V, V.' },
          { id: 'B', texto: 'V, V, F, V.' },
          { id: 'C', texto: 'V, F, V, V.' },
          { id: 'D', texto: 'F, V, V, F.' },
          { id: 'E', texto: 'F, F, V, V.' }
        ],
        gabarito: 'B',
        explicacao: '(__1) V: sujeito composto anteposto → plural. (__2) V: sujeito composto posposto → singular ou plural. (__3) F: "mais de um" → verbo no SINGULAR ("Mais de um servidor faltou"), salvo reciprocidade. (__4) V: pronomes de tratamento → 3ª pessoa.'
      },

      /* ---------- Item 4 (médio) — V/F simples ---------- */
      {
        id: 'D-POR-15-04',
        tipo: 'verdadeiro_falso',
        subtopico: '"É necessário" com e sem artigo',
        pergunta: 'A expressão "é necessário" varia em gênero e número quando o sujeito tem determinante (artigo): "É necessária a paciência" (com artigo) e "É necessário paciência" (sem artigo).',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. SEM artigo, a expressão é INVARIÁVEL: "É necessário paciência", "É proibido entrada". COM artigo, CONCORDA: "É necessária A paciência", "É proibida A entrada". A mesma regra vale para "é bom/boa", "é permitido/permitida".'
      },

      /* ---------- Item 5 (médio-difícil) — Situação ---------- */
      {
        id: 'D-POR-15-05',
        tipo: 'situacao',
        subtopico: 'Aplicação: corrigir concordância em texto',
        pergunta: 'Um candidato redigiu: "Fazem dois anos que o servidor foi nomeado; desde então, haviam muitos desafios a enfrentar." Sobre a concordância, é CORRETO afirmar que:',
        alternativas: [
          { id: 'A', texto: 'A frase está integralmente correta: "fazem" e "haviam" concordam com seus respectivos sujeitos.' },
          { id: 'B', texto: 'A frase contém dois erros: "fazem" e "haviam" deveriam ser, respectivamente, "faz" e "havia", pois ambos os verbos são impessoais e ficam na 3ª pessoa do singular.' },
          { id: 'C', texto: 'A frase contém apenas um erro: "fazem" deveria ser "faz", mas "haviam" está correto porque "muitos desafios" é o sujeito.' },
          { id: 'D', texto: 'A frase contém apenas um erro: "haviam" deveria ser "havia", mas "fazem" está correto porque "dois anos" é plural.' },
          { id: 'E', texto: 'A frase está correta, mas apenas porque o autor usou o plural para indicar ênfase no tempo decorrido e na quantidade de desafios.' }
        ],
        gabarito: 'B',
        explicacao: 'DOIS ERROS. "Fazer" indicando tempo é IMPESSOAL: "FAZ dois anos" (não "fazem"). "Haver" no sentido de existir é IMPESSOAL: "HAVIA muitos desafios" (não "haviam"). A) ambos são impessoais. C) "haviam" também é erro. D) "fazem" também é erro. E) a norma culta não admite ênfase que viole a impessoalidade.'
      },

      /* ---------- Item 6 (difícil) — MC clássica (casos especiais) ---------- */
      {
        id: 'D-POR-15-06',
        tipo: 'multipla_escolha',
        subtopico: 'Concordância com expressões partitivas e porcentagens',
        pergunta: 'Sobre a concordância com expressões partitivas (a maioria de, grande parte de) e porcentagens, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Com expressões partitivas e com porcentagens, o verbo deve ficar sempre no singular, pois a quantidade é tratada como um todo, sem exceções na norma culta.' },
          { id: 'B', texto: 'Com expressões partitivas e com porcentagens, o verbo pode ficar no singular ou no plural, havendo, no caso das porcentagens, a possibilidade de concordar com o número ou com o determinante que o acompanha.' },
          { id: 'C', texto: 'Com expressões partitivas, o verbo deve ficar sempre no plural; com porcentagens, sempre no singular, sem exceções na norma culta.' },
          { id: 'D', texto: 'Com expressões partitivas, o verbo deve ficar sempre no plural; com porcentagens, sempre no plural, pois o número expressa quantidade maior que um.' },
          { id: 'E', texto: 'Com expressões partitivas e com porcentagens, o verbo deve concordar com o termo mais distante, independentemente do determinante e do número.' }
        ],
        gabarito: 'B',
        explicacao: 'PARTITIVAS (a maioria de, grande parte de): verbo no SINGULAR ou PLURAL — "A maioria dos servidores compareceu/compareceram". PORCENTAGENS: concorda com o NÚMERO — "1% faltou" / "30% faltaram" — ou com o DETERMINANTE — "Os 30% dos servidores faltaram". A) nega a flexibilidade. C) e D) generalizam indevidamente. E) inventa critério.'
      },

      /* ---------- Item 7 (difícil-meta) — Autoavaliação ---------- */
      {
        id: 'D-POR-15-07',
        tipo: 'autoavaliacao',
        subtopico: 'Concordância — distinções fundamentais',
        pergunta: 'Você consegue, sem consultar, aplicar as regras de concordância verbal (sujeito composto, partitivos, verbos impessoais, porcentagens, "mais de um", "um dos que", pronomes de tratamento) e nominal (adjetivo + substantivo, "é necessário", "bastante", "meio", "anexo", cores)?',
        resposta: 'VERBAL: verbo concorda com o sujeito em número e pessoa. Composto anteposto: plural; posposto: singular ou plural. Partitivo: singular ou plural. Impessoais (haver, fazer): 3ª do singular. Porcentagem: concorda com o número ou com o determinante. "Mais de um": singular. "Um dos que": plural ou singular. Tratamento: 3ª pessoa. NOMINAL: adjetivo concorda com o substantivo. "É necessário" (sem artigo) invariável x "é necessária" (com artigo) variável. "Bastante": adjetivo (varia) x advérbio (invariável). "Meio": numeral (varia) x advérbio (invariável). "Anexo" (varia) x "em anexo" (não varia). Cores: adjetivo (invariável) x substantivo (invariável) x "cor de" (invariável).'
      }
    ]
  },
  /* ============================================================
     POR-16 — Regência verbal e nominal
  ============================================================ */
  'POR-16': {
    id: 'D-POR-16',
    moduloId: 'POR-16',
    itens: [
      /* ---------- Item 1 (fácil) — MC clássica ---------- */
      {
        id: 'D-POR-16-01',
        tipo: 'multipla_escolha',
        subtopico: 'Regência verbal x regência nominal',
        pergunta: 'Sobre a distinção entre regência verbal e regência nominal, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Regência verbal é a relação entre o verbo e seu complemento, sempre com preposição obrigatória; regência nominal é a relação entre o nome e seu complemento, sempre sem preposição.' },
          { id: 'B', texto: 'Regência verbal é a relação entre o verbo e seu complemento, com ou sem preposição; regência nominal é a relação entre um nome e seu complemento, com preposição.' },
          { id: 'C', texto: 'Regência verbal é a relação entre o verbo e seu sujeito, com ou sem preposição; regência nominal é a relação entre o nome e seu adjunto, com preposição.' },
          { id: 'D', texto: 'Regência verbal e regência nominal são equivalentes: ambas se referem à concordância entre os termos da oração, com ou sem preposição.' },
          { id: 'E', texto: 'Regência verbal é a concordância do verbo com o sujeito; regência nominal é a concordância do nome com o adjetivo, sem preposição.' }
        ],
        gabarito: 'B',
        explicacao: 'REGÊNCIA VERBAL: relação entre VERBO e complemento, com preposição (indireto) ou sem (direto). REGÊNCIA NOMINAL: relação entre NOME (substantivo, adjetivo, advérbio) e complemento, sempre com preposição. A) generaliza "sempre" para ambos. C) confunde com sujeito/adjunto. D) confunde com concordância. E) confunde com concordância.'
      },

      /* ---------- Item 2 (fácil) — V/F simples ---------- */
      {
        id: 'D-POR-16-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Assistir (ver) x assistir (ajudar)',
        pergunta: 'No sentido de "ver", o verbo "assistir" exige a preposição "a" ("Assisti ao filme"); no sentido de "ajudar", é transitivo direto, sem preposição ("O médico assistiu o paciente").',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. "Assistir" tem regências distintas conforme o sentido: VER → "assistir A" (indireto — "Assisti AO filme"). AJUDAR → "assistir" direto ("O médico assistiu O paciente"). Também há "assistir EM" (morar — "assiste em Brasília") e "assistir A" (caber — "assiste AO juiz julgar"). A banca cobra a troca entre os sentidos.'
      },

      /* ---------- Item 3 (médio) — V/F sequencial ---------- */
      {
        id: 'D-POR-16-03',
        tipo: 'multipla_escolha',
        subtopico: 'Verbos com mais de uma regência',
        pergunta: 'Julgue as afirmações sobre verbos com mais de uma regência:\n(__) "Aspirar" no sentido de "sorver" é transitivo direto ("Aspirei o perfume"); no sentido de "desejar", exige a preposição "a" ("Aspiro a um cargo público").\n(__) "Visar" no sentido de "mirar" é transitivo direto ("O atirador visou o alvo"); no sentido de "almejar", exige a preposição "a" ("A lei visa a proteger o cidadão").\n(__) "Implicar" no sentido de "acarretar" exige sempre a preposição "em", sem variação na norma culta ("A medida implica em custos").\n(__) "Proceder" no sentido de "originar-se" exige a preposição "de" ("O pedido procede de outra unidade").\nAssinale a alternativa com a sequência CORRETA, de cima para baixo:',
        alternativas: [
          { id: 'A', texto: 'V, V, V, V.' },
          { id: 'B', texto: 'V, V, F, V.' },
          { id: 'C', texto: 'V, F, V, V.' },
          { id: 'D', texto: 'F, V, V, F.' },
          { id: 'E', texto: 'F, F, V, V.' }
        ],
        gabarito: 'B',
        explicacao: '(__1) V: aspirar (sorver) direto x aspirar (desejar) com "a". (__2) V: visar (mirar) direto x visar (almejar) com "a". (__3) F: "implicar" no sentido de acarretar ACEITA com e sem "em" — "implica custos" (preferível) ou "implica em custos" (tolerado). A norma culta não exige "sempre" o "em". (__4) V: proceder (originar-se) com "de".'
      },

      /* ---------- Item 4 (médio) — V/F simples ---------- */
      {
        id: 'D-POR-16-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Preferir',
        pergunta: 'A norma culta admite as construções "Prefiro isto a aquilo" e "Prefiro isto do que aquilo", ambas corretas e equivalentes em registro formal.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'FALSO. A norma culta admite apenas "Prefiro ISTO A AQUILO". A construção "Prefiro isto DO QUE aquilo" é considerada erro, por misturar duas estruturas. Também é errado "Prefiro MAIS isto" (redundância — o verbo já encerra a preferência). A banca cobra o uso correto da preposição "a".'
      },

      /* ---------- Item 5 (médio-difícil) — Situação ---------- */
      {
        id: 'D-POR-16-05',
        tipo: 'situacao',
        subtopico: 'Aplicação: corrigir regência em texto',
        pergunta: 'Um candidato redigiu: "O servidor assistiu o filme e obedeceu o regulamento, mas preferiu mais o primeiro do que o segundo." Sobre a regência, é CORRETO afirmar que a frase contém:',
        alternativas: [
          { id: 'A', texto: 'Um único erro: "assistiu o filme" deveria ser "assistiu ao filme", pois "assistir" no sentido de "ver" exige a preposição "a".' },
          { id: 'B', texto: 'Dois erros: "assistiu o filme" deveria ser "assistiu ao filme" (sentido de ver exige "a") e "obedeceu o regulamento" deveria ser "obedeceu ao regulamento" (obedecer exige "a").' },
          { id: 'C', texto: 'Três erros: além dos erros em "assistir" e "obedecer", a construção "preferiu mais o primeiro do que o segundo" também deveria ser corrigida.' },
          { id: 'D', texto: 'Apenas um erro: "preferiu mais o primeiro do que o segundo" deveria ser "preferiu o primeiro ao segundo", pois "preferir" exige a preposição "a", não "mais que".' },
          { id: 'E', texto: 'Nenhum erro: a frase respeita integralmente a norma culta, pois todos os verbos foram usados em sentido corrente.' }
        ],
        gabarito: 'C',
        explicacao: 'TRÊS ERROS: (1) "assistiu o filme" → "assistiu AO filme" (ver exige "a"); (2) "obedeceu o regulamento" → "obedeceu AO regulamento" (obedecer exige "a"); (3) "preferiu mais o primeiro do que o segundo" → "preferiu O PRIMEIRO AO SEGUNDO" (preferir exige "a", não "mais que"). A) omite dois erros. B) omite o erro de "preferir". D) omite os erros de "assistir" e "obedecer". E) nega os erros.'
      },

      /* ---------- Item 6 (difícil) — MC associação ---------- */
      {
        id: 'D-POR-16-06',
        tipo: 'multipla_escolha',
        subtopico: 'Associação: verbos e regências',
        pergunta: 'Associe os verbos ao tipo de regência que exigem no sentido indicado:\n1 — Assistir (ver).\n2 — Aspirar (desejar).\n3 — Visar (almejar).\n4 — Obedecer.\nREGÊNCIAS\n( ) Transitivo indireto com "a".\n( ) Transitivo direto.\n( ) Transitivo indireto com "a" ou com "em", conforme o contexto.\n( ) Transitivo indireto com "a" ou direto, dependendo do sentido.\nA sequência CORRETA, de cima para baixo, é:',
        alternativas: [
          { id: 'A', texto: '1, 2, 3, 4.' },
          { id: 'B', texto: '4, 1, 3, 2.' },
          { id: 'C', texto: '2, 3, 4, 1.' },
          { id: 'D', texto: '3, 4, 2, 1.' },
          { id: 'E', texto: '4, 3, 2, 1.' }
        ],
        gabarito: 'B',
        explicacao: 'OBEDECER (4) → sempre com "a" (transitivo indireto com "a"). ASSISTIR (ver) (1) → sempre com "a" (transitivo indireto com "a"). VISAR (almejar) (3) → com "a", mas admite variação conforme o contexto (transitivo indireto com "a"/"em"). ASPIRAR (desejar) (2) → com "a" quando desejar; sem "a" quando sorver (transitivo direto ou indireto, dependendo do sentido). Sequência: 4, 1, 3, 2.'
      },

      /* ---------- Item 7 (difícil-meta) — Autoavaliação ---------- */
      {
        id: 'D-POR-16-07',
        tipo: 'autoavaliacao',
        subtopico: 'Regência — distinções fundamentais',
        pergunta: 'Você consegue, sem consultar, aplicar a regência dos principais verbos (assistir, aspirar, visar, implicar, proceder, obedecer, preferir, chegar/ir, lembrar/esquecer) e nomes (favorável a, atento a, contrário a, fiel a, próximo a, capaz de, digno de, hábil em, interesse em/por)?',
        resposta: 'VERBOS: assistir (ver → a; ajudar → direto; morar → em; caber → a); aspirar (sorver → direto; desejar → a); visar (mirar → direto; almejar → a; pôr visto → direto); implicar (acarretar → direto ou "em"; envolver → em); proceder (originar-se → de; realizar → a; ter fundamento → direto); obedecer/desobedecer → sempre "a"; preferir → "a" (nunca "mais que"); chegar/ir → "a" (não "em" na norma culta); lembrar/esquecer (com pronome → "de"; sem pronome → direto). NOMES: favorável a, atento a, contrário a, fiel a, indiferente a, propenso a, próximo a/de, capaz de, digno de, hábil em, interesse em/por, orgulho de/por, satisfeito com/com.'
      }
    ]
  },

  /* ============================================================
     POR-17 — Crase
  ============================================================ */
  'POR-17': {
    id: 'D-POR-17',
    moduloId: 'POR-17',
    itens: [
      /* ---------- Item 1 (fácil) — MC clássica ---------- */
      {
        id: 'D-POR-17-01',
        tipo: 'multipla_escolha',
        subtopico: 'Conceito de crase',
        pergunta: 'Sobre o conceito de crase, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Crase é a fusão da preposição "a" com o artigo "a" (ou com pronomes demonstrativos "aquele/aquela/aquilo"), representada pelo acento grave.' },
          { id: 'B', texto: 'Crase é a fusão de duas preposições "a", representada pelo acento grave e aplicada apenas a palavras femininas plurais.' },
          { id: 'C', texto: 'Crase é a fusão da preposição "a" com o artigo "o", representada pelo acento grave e aplicada a palavras masculinas.' },
          { id: 'D', texto: 'Crase é a fusão de duas vogais "a" em palavras compostas, sem relação com preposição ou artigo.' },
          { id: 'E', texto: 'Crase é a fusão da preposição "de" com o artigo "a", representada pelo acento grave em expressões temporais.' }
        ],
        gabarito: 'A',
        explicacao: 'CRASE = preposição "a" + artigo "a" (ou "aquele/aquela/aquilo"), marcada pelo acento grave (à, àquele, àquela, àquilo). B) não é fusão de duas preposições. C) não é com artigo "o" (masculino não admite crase). D) não é fusão de vogais em compostos. E) não é com a preposição "de".'
      },

      /* ---------- Item 2 (fácil) — V/F simples ---------- */
      {
        id: 'D-POR-17-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Nomes de lugar com e sem artigo',
        pergunta: 'Em "Vou à Bahia", há crase porque o nome "Bahia" admite artigo feminino; em "Vou a Brasília", não há crase porque "Brasília" não admite artigo.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. "Bahia" admite artigo (a Bahia) — "Vou À Bahia" (a preposição + o artigo). "Brasília" NÃO admite artigo — "Vou A Brasília" (só a preposição). Teste: se eu voltar "DA Bahia" (tem "da", com artigo) x "DE Brasília" (sem artigo) — a primeira admite crase, a segunda não.'
      },

      /* ---------- Item 3 (médio) — V/F sequencial ---------- */
      {
        id: 'D-POR-17-03',
        tipo: 'multipla_escolha',
        subtopico: 'Casos obrigatórios, proibidos e facultativos',
        pergunta: 'Julgue as afirmações sobre os casos de crase:\n(__) A crase é obrigatória antes de palavra feminina determinada que complete verbo ou nome que exige a preposição "a", como em "Assisti à peça".\n(__) A crase é proibida antes de palavras masculinas, verbos no infinitivo e pronomes pessoais, como em "Ando a pé", "Começou a estudar" e "Entreguei a ela".\n(__) A crase é facultativa antes de nomes próprios femininos e pronomes possessivos femininos, como em "Entreguei a/à Maria" e "Refiro-me a/à sua proposta".\n(__) A crase é obrigatória antes de "este/esta/esse/essa", como em "Refiro-me à esta norma".\nAssinale a alternativa com a sequência CORRETA, de cima para baixo:',
        alternativas: [
          { id: 'A', texto: 'V, V, V, V.' },
          { id: 'B', texto: 'V, V, V, F.' },
          { id: 'C', texto: 'V, F, V, V.' },
          { id: 'D', texto: 'F, V, V, F.' },
          { id: 'E', texto: 'V, V, F, F.' }
        ],
        gabarito: 'B',
        explicacao: '(__1) V: obrigatória com feminino determinado + verbo/nome que exige "a". (__2) V: proibida antes de masculino, infinitivo e pronomes pessoais. (__3) V: facultativa antes de nomes próprios femininos e possessivos femininos. (__4) F: a crase é PROIBIDA antes de "este/esta/esse/essa" — "Refiro-me A esta norma". Só "aquele/aquela/aquilo" admite crase.'
      },

      /* ---------- Item 4 (médio) — V/F simples ---------- */
      {
        id: 'D-POR-17-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Crase antes de "aquele/aquela/aquilo"',
        pergunta: 'A crase é obrigatória antes de "aquele/aquela/aquilo", como em "Referiu-se àquele caso" e "Entregou o documento àquela servidora".',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. "Aquele/aquela/aquilo" admitem fusão com a preposição "a": "Referiu-se ÀQUELE caso" (a + aquele), "Entregou ÀQUELA servidora" (a + aquela). Não confundir com "este/esta/esse/essa", que NÃO admitem crase — "Refiro-me A esta norma" (sem acento).'
      },

      /* ---------- Item 5 (médio-difícil) — Situação ---------- */
      {
        id: 'D-POR-17-05',
        tipo: 'situacao',
        subtopico: 'Aplicação: identificar erro de crase',
        pergunta: 'Um candidato redigiu: "O servidor assistiu à peça, mas não obedeceu à norma que exigia traje formal, indo à pé até o teatro." Sobre a crase, é CORRETO afirmar que a frase contém:',
        alternativas: [
          { id: 'A', texto: 'Um erro: "à pé" deveria ser "a pé", pois não há crase antes de palavra masculina (pé).' },
          { id: 'B', texto: 'Dois erros: "à pé" deveria ser "a pé" (masculino) e "à peça" deveria ser "a peça" (verbo que não exige "a").' },
          { id: 'C', texto: 'Três erros: "à pé" deveria ser "a pé", "à peça" deveria ser "a peça" e "à norma" deveria ser "a norma" (sem preposição).' },
          { id: 'D', texto: 'Nenhum erro: as três crases estão corretas, pois todas são exigidas pelos verbos que as antecedem.' },
          { id: 'E', texto: 'Um erro: "à norma" deveria ser "a norma", pois "obedecer" não exige preposição.' }
        ],
        gabarito: 'A',
        explicacao: 'Erro único: "À PÉ" → "A PÉ" (palavra masculina não admite crase). As outras duas estão corretas: "assistiu À peça" (assistir = ver exige "a" + "a peça" feminina) e "não obedeceu À norma" (obedecer exige "a" + "a norma" feminina). B) "à peça" está correta. C) "à norma" está correta. D) há erro. E) "obedecer" exige "a".'
      },

      /* ---------- Item 6 (difícil) — MC complete lacunas ---------- */
      {
        id: 'D-POR-17-06',
        tipo: 'multipla_escolha',
        subtopico: 'Complete as lacunas com o uso correto de crase',
        pergunta: 'Complete as lacunas com o uso ADEQUADO de crase:\n"O servidor assistiu ____ sessão plenária, mas não obedeceu ____ ordem de silêncio, o que gerou ____ advertência."',
        alternativas: [
          { id: 'A', texto: 'à / à / a.' },
          { id: 'B', texto: 'a / a / a.' },
          { id: 'C', texto: 'à / a / a.' },
          { id: 'D', texto: 'a / à / à.' },
          { id: 'E', texto: 'à / à / à.' }
        ],
        gabarito: 'C',
        explicacao: '1ª lacuna: "assistiu À SESSÃO" (ver exige "a" + "a sessão" feminina determinada). 2ª lacuna: "não obedeceu A ORDEM" (obedecer exige "a", mas o termo é feminino indeterminado — "ordem", sem artigo, ou com ideia genérica; aqui o "a" é só preposição). 3ª lacuna: "gerou A ADVERTÊNCIA" (verbo "gerar" é transitivo direto — não exige preposição; apenas o artigo "a" — sem crase).'
      },

      /* ---------- Item 7 (difícil-meta) — Autoavaliação ---------- */
      {
        id: 'D-POR-17-07',
        tipo: 'autoavaliacao',
        subtopico: 'Crase — distinções fundamentais',
        pergunta: 'Você consegue, sem consultar, aplicar os casos de crase obrigatória, proibida e facultativa, fazer o teste de troca por masculino, e reconhecer a diferença entre "a" (preposição) e "à" (crase)?',
        resposta: 'CRASE = preposição "a" + artigo "a" (ou "aquele/aquela/aquilo"). TESTE: trocar a palavra feminina por masculina — se aparecer "ao", há crase; se não, não há. OBRIGATÓRIA: feminino determinado, locuções ("à tarde", "às vezes"), horas ("às 8h"), nomes de lugar com artigo ("à Bahia"). PROIBIDA: masculino ("a pé"), verbo ("a estudar"), palavra indeterminada ("a mulheres"), pronomes (exceto "aquele"), "uma", cidade sem artigo ("a Brasília"). FACULTATIVA: nomes próprios femininos ("a/à Maria"), possessivos femininos ("a/à sua proposta"), depois de "até" ("até a/à praça"). "Aquele" → crase. "Este/esse" → sem crase.'
      }
    ]
  },

  /* ============================================================
     POR-18 — Pontuação
  ============================================================ */
  'POR-18': {
    id: 'D-POR-18',
    moduloId: 'POR-18',
    itens: [
      /* ---------- Item 1 (fácil) — MC clássica ---------- */
      {
        id: 'D-POR-18-01',
        tipo: 'multipla_escolha',
        subtopico: 'Uso da vírgula',
        pergunta: 'Sobre o uso da vírgula, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'A vírgula deve ser usada entre sujeito e verbo para indicar pausa respiratória, como em "O servidor, protocolou o pedido".' },
          { id: 'B', texto: 'A vírgula separa termos de mesma função, isola apostos, vocativos, orações deslocadas e explicativas, mas NÃO deve separar sujeito e verbo, verbo e complemento, nem nome e complemento.' },
          { id: 'C', texto: 'A vírgula deve ser usada sempre que houver pausa na leitura, independentemente da função sintática dos termos, como em "O diretor, chegou cedo".' },
          { id: 'D', texto: 'A vírgula deve ser usada para separar sujeito, verbo e complemento em todos os casos, pois marca a estrutura da oração.' },
          { id: 'E', texto: 'A vírgula é opcional em qualquer contexto: o autor decide onde usá-la, sem regra sintática que a discipline.' }
        ],
        gabarito: 'B',
        explicacao: 'A vírgula separa termos DESLOCADOS ou de mesma função (enumeração, aposto, vocativo, orações deslocadas, explicativas), mas NÃO separa sujeito e verbo, verbo e complemento, nome e complemento. A) erro clássico (sujeito-verbo). C) vírgula não é pausa respiratória. D) contraria a regra. E) há regra sintática.'
      },

      /* ---------- Item 2 (fácil) — V/F simples ---------- */
      {
        id: 'D-POR-18-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Oração adjetiva explicativa x restritiva',
        pergunta: 'Em "Os servidores, que estudaram muito, foram aprovados", a oração "que estudaram muito" é explicativa e a vírgula indica que TODOS os servidores estudaram e foram aprovados; sem as vírgulas, seria restritiva ("apenas os que estudaram").',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. A vírgula muda o sentido: EXPLICATIVA (com vírgulas) — comenta o antecedente, indicando que todos estudaram e foram aprovados. RESTRITIVA (sem vírgulas) — restringe o antecedente, indicando que apenas os que estudaram foram aprovados. É a regra mais cobrada em pontuação.'
      },

      /* ---------- Item 3 (médio) — V/F sequencial ---------- */
      {
        id: 'D-POR-18-03',
        tipo: 'multipla_escolha',
        subtopico: 'Vírgula: usos e erros',
        pergunta: 'Julgue as afirmações sobre o uso da vírgula:\n(__) A vírgula isola aposto explicativo, como em "O servidor, homem dedicado, foi elogiado".\n(__) A vírgula isola vocativo, como em "Servidor, atenção ao prazo".\n(__) A vírgula deve ser usada antes de oração adjetiva restritiva, como em "Os servidores, que estudaram, foram aprovados" (restringindo o grupo).\n(__) A vírgula isola oração adverbial deslocada, como em "Quando o diretor chegou, todos se levantaram".\nAssinale a alternativa com a sequência CORRETA, de cima para baixo:',
        alternativas: [
          { id: 'A', texto: 'V, V, V, V.' },
          { id: 'B', texto: 'V, V, F, V.' },
          { id: 'C', texto: 'V, F, V, V.' },
          { id: 'D', texto: 'F, V, V, F.' },
          { id: 'E', texto: 'F, F, V, V.' }
        ],
        gabarito: 'B',
        explicacao: '(__1) V: aposto explicativo — vírgula correta. (__2) V: vocativo — vírgula correta. (__3) F: a vírgula NÃO deve ser usada antes de adjetiva RESTRITIVA — se a intenção é restringir, é "Os servidores que estudaram foram aprovados" (sem vírgulas). Com vírgulas, a oração é EXPLICATIVA, não restritiva. (__4) V: oração adverbial deslocada — vírgula correta.'
      },

      /* ---------- Item 4 (médio) — V/F simples ---------- */
      {
        id: 'D-POR-18-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Ponto e vírgula',
        pergunta: 'O ponto e vírgula separa orações longas ou itens de enumeração complexos, com pausa mais forte que a vírgula e mais fraca que o ponto final, como em "O art. 5º dispõe sobre direitos; o art. 6º, sobre deveres".',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. O PONTO E VÍRGULA separa orações longas ou itens de enumeração complexos (em leis, por exemplo). Pausa intermediária: mais forte que a vírgula, mais fraca que o ponto. Também usado entre itens de uma enumeração que já contêm vírgulas internas.'
      },

      /* ---------- Item 5 (médio-difícil) — Situação ---------- */
      {
        id: 'D-POR-18-05',
        tipo: 'situacao',
        subtopico: 'Aplicação: corrigir pontuação',
        pergunta: 'Um candidato redigiu: "O servidor, chegou cedo ao órgão e protocolou o pedido, mas o chefe, não estava presente." Sobre a pontuação, é CORRETO afirmar que a frase contém:',
        alternativas: [
          { id: 'A', texto: 'Um erro: a primeira vírgula (após "servidor") deveria ser removida, mas a segunda (após "chefe") está correta.' },
          { id: 'B', texto: 'Dois erros: a primeira vírgula (após "servidor") e a segunda (após "chefe") separam indevidamente sujeito e verbo.' },
          { id: 'C', texto: 'Três erros: a primeira vírgula, a segunda e a vírgula antes de "mas" comprometem a estrutura da frase.' },
          { id: 'D', texto: 'Nenhum erro: a frase respeita as regras de pontuação, pois as vírgulas marcam pausas respiratórias.' },
          { id: 'E', texto: 'Um erro: a vírgula antes de "mas" deveria ser substituída por ponto final, e as demais estão corretas.' }
        ],
        gabarito: 'B',
        explicacao: 'DOIS ERROS: (1) "O servidor, chegou cedo" — vírgula separa SUJEITO e VERBO (erro). (2) "o chefe, não estava presente" — vírgula separa SUJEITO e VERBO (erro). A vírgula antes de "mas" é CORRETA (oração coordenada adversativa). A) a segunda também é erro. C) a vírgula antes de "mas" está correta. D) as vírgulas não são "pausas respiratórias". E) a vírgula antes de "mas" não precisa ser trocada por ponto.'
      },

      /* ---------- Item 6 (difícil) — MC I/II/III ---------- */
      {
        id: 'D-POR-18-06',
        tipo: 'multipla_escolha',
        subtopico: 'Análise de pontuação em contexto',
        pergunta: 'Sobre a pontuação, analise:\nI — Em "O diretor, que chegou cedo, cumprimentou os servidores", a oração "que chegou cedo" é explicativa (todos os diretores chegaram cedo).\nII — Em "O diretor que chegou cedo cumprimentou os servidores", a oração "que chegou cedo" é restritiva (apenas o diretor que chegou cedo cumprimentou).\nIII — Em "Estudou muito, portanto foi aprovado", a vírgula antes de "portanto" está correta, pois isola oração coordenada conclusiva.\nEstá CORRETO apenas o que se afirma em:',
        alternativas: [
          { id: 'A', texto: 'I.' },
          { id: 'B', texto: 'II.' },
          { id: 'C', texto: 'III.' },
          { id: 'D', texto: 'I e II.' },
          { id: 'E', texto: 'I, II e III.' }
        ],
        gabarito: 'E',
        explicacao: 'Todas corretas. I: com vírgulas = explicativa (comenta o antecedente). II: sem vírgulas = restritiva (restringe o antecedente). III: a vírgula antes de "portanto" isola a coordenada conclusiva — correta. A pontuação altera o sentido: explicativa x restritiva; conclusiva isolada por vírgula.'
      },

      /* ---------- Item 7 (difícil-meta) — Autoavaliação ---------- */
      {
        id: 'D-POR-18-07',
        tipo: 'autoavaliacao',
        subtopico: 'Pontuação — distinções fundamentais',
        pergunta: 'Você consegue, sem consultar, aplicar as regras de vírgula, ponto e vírgula, dois-pontos, travessão, parênteses e aspas, e distinguir oração adjetiva explicativa de restritiva?',
        resposta: 'VÍRGULA: separa termos de mesma função, aposto, vocativo, orações deslocadas e explicativas. NÃO use entre sujeito e verbo, verbo e complemento, nome e complemento, nem antes de adjetiva restritiva, consecutiva, final. EXPLICATIVA (com vírgula) x RESTRITIVA (sem vírgula) — muda o sentido. PONTO E VÍRGULA: orações longas ou itens de enumeração complexos. DOIS-PONTOS: explicação, enumeração, fala, consequência. TRAVESSÃO: isola termo intercalado; introduz fala. PARÊNTESES: isola comentário acessório. ASPAS: citação, estrangeirismo, ironia.'
      }
    ]
  },

  /* ============================================================
     POR-19 — Reescrita de frases e equivalência de sentido
  ============================================================ */
  'POR-19': {
    id: 'D-POR-19',
    moduloId: 'POR-19',
    itens: [
      /* ---------- Item 1 (fácil) — MC clássica ---------- */
      {
        id: 'D-POR-19-01',
        tipo: 'multipla_escolha',
        subtopico: 'Conceito de reescrita',
        pergunta: 'Sobre a reescrita de frases, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Reescrever é dizer o MESMO conteúdo com OUTRAS palavras, mantendo o sentido global e a correção gramatical do original.' },
          { id: 'B', texto: 'Reescrever é dizer um conteúdo DIFERENTE com as MESMAS palavras do original, alterando o sentido para evitar repetição.' },
          { id: 'C', texto: 'Reescrever é dizer o MESMO conteúdo com as MESMAS palavras, mantendo a estrutura sintática original intacta.' },
          { id: 'D', texto: 'Reescrever é alterar livremente o conteúdo do original, desde que a nova frase seja gramaticalmente correta.' },
          { id: 'E', texto: 'Reescrever é substituir palavras por sinônimos, ainda que isso altere o sentido global da frase original.' }
        ],
        gabarito: 'A',
        explicacao: 'REESCRITA: MESMO conteúdo + OUTRAS palavras + sentido preservado + correção gramatical. B) conteúdo diferente não é reescrita. C) mesmas palavras não é reescrita (é repetição). D) alterar conteúdo não é reescrita. E) alterar sentido não é reescrita.'
      },

      /* ---------- Item 2 (fácil) — V/F simples ---------- */
      {
        id: 'D-POR-19-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Transposição de voz',
        pergunta: 'A transposição de voz ativa para passiva, como em "O servidor protocolou o pedido" → "O pedido foi protocolado pelo servidor", é exemplo de reescrita que mantém o sentido original.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. A transposição de voz (ativa → passiva) mantém o sentido global: o agente (servidor) e a ação (protocolar) permanecem; muda apenas a perspectiva (sujeito x agente da passiva). Desde que o tempo verbal e o agente sejam preservados, é reescrita correta.'
      },

      /* ---------- Item 3 (médio) — V/F sequencial ---------- */
      {
        id: 'D-POR-19-03',
        tipo: 'multipla_escolha',
        subtopico: 'Reescrita com conectivos',
        pergunta: 'Julgue as afirmações sobre reescrita com substituição de conectivos:\n(__) "Estudou muito, por isso passou" → "Como estudou muito, passou": mantém a relação de causa/consequência.\n(__) "Estudou muito, por isso passou" → "Embora tenha estudado muito, passou": mantém a relação de causa/consequência.\n(__) "Não veio porque adoeceu" → "Não veio, pois adoeceu": mantém a relação de causa.\n(__) "Estudou muito, mas não passou" → "Estudou muito, embora não tenha passado": mantém a relação de oposição.\nAssinale a alternativa com a sequência CORRETA, de cima para baixo:',
        alternativas: [
          { id: 'A', texto: 'V, V, V, V.' },
          { id: 'B', texto: 'V, F, V, F.' },
          { id: 'C', texto: 'V, F, V, V.' },
          { id: 'D', texto: 'F, V, V, F.' },
          { id: 'E', texto: 'F, F, V, V.' }
        ],
        gabarito: 'B',
        explicacao: '(__1) V: "como" mantém a relação causal. (__2) F: "embora" introduz CONCESSÃO — não mantém a relação causal. (__3) V: "pois" mantém causa. (__4) F: "embora" (concessão) NÃO mantém a relação de OPOSIÇÃO ("mas"). "Mas" = oposição; "embora" = concessão. A reescrita muda a relação.'
      },

      /* ---------- Item 4 (médio) — V/F simples ---------- */
      {
        id: 'D-POR-19-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Reescrita que altera sentido',
        pergunta: 'A reescrita "O diretor informou ao servidor que seu pedido foi negado" → "O diretor informou ao servidor que o pedido deste foi negado" mantém o sentido original, apenas eliminando a ambiguidade do pronome "seu".',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. A reescrita mantém o conteúdo (o pedido do servidor foi negado) e elimina a ambiguidade de "seu" (que poderia se referir ao diretor ou ao servidor). É reescrita correta: preserva o sentido + clareia a referência.'
      },

      /* ---------- Item 5 (médio-difícil) — Situação ---------- */
      {
        id: 'D-POR-19-05',
        tipo: 'situacao',
        subtopico: 'Aplicação: identificar reescrita INCORRETA',
        pergunta: 'Considere a frase original: "O servidor estudou muito, por isso foi aprovado no concurso." Qual das reescritas ALTERA o sentido original?',
        alternativas: [
          { id: 'A', texto: '"Como o servidor estudou muito, foi aprovado no concurso."' },
          { id: 'B', texto: '"O servidor foi aprovado no concurso porque estudou muito."' },
          { id: 'C', texto: '"O servidor estudou muito; por conseguinte, foi aprovado no concurso."' },
          { id: 'D', texto: '"Embora o servidor tenha estudado muito, foi aprovado no concurso."' },
          { id: 'E', texto: '"O servidor estudou muito e, em razão disso, foi aprovado no concurso."' }
        ],
        gabarito: 'D',
        explicacao: 'A original tem relação de CAUSA/CONSEQUÊNCIA (estudou → aprovado). "EMBORA" introduz CONCESSÃO — o estudo passa a ser tratado como fato que NÃO impediu a aprovação (relação oposta). As demais (A, B, C, E) mantêm a relação causal: "como" (causa), "porque" (causa), "por conseguinte" (consequência), "em razão disso" (consequência).'
      },

      /* ---------- Item 6 (difícil) — MC I/II/III ---------- */
      {
        id: 'D-POR-19-06',
        tipo: 'multipla_escolha',
        subtopico: 'Análise de reescritas',
        pergunta: 'Sobre a reescrita da frase "O órgão publicou o edital, mas a empresa não se inscreveu", analise:\nI — "O edital foi publicado pelo órgão, mas a empresa não se inscreveu" mantém o sentido, com transposição de voz.\nII — "Embora o órgão tenha publicado o edital, a empresa não se inscreveu" mantém a relação de oposição.\nIII — "O órgão publicou o edital, portanto a empresa não se inscreveu" mantém a relação de oposição.\nEstá CORRETO apenas o que se afirma em:',
        alternativas: [
          { id: 'A', texto: 'I.' },
          { id: 'B', texto: 'II.' },
          { id: 'C', texto: 'III.' },
          { id: 'D', texto: 'I e II.' },
          { id: 'E', texto: 'II e III.' }
        ],
        gabarito: 'D',
        explicacao: 'I correta: transposição de voz (ativa → passiva) mantém sentido. II correta: "embora" (concessão) preserva a relação de contraste (o edital foi publicado, mas a empresa não se inscreveu). III errada: "portanto" (conclusão) NÃO mantém a relação de OPOSIÇÃO — a empresa não se inscreveu por causa da publicação? A relação original é de CONTRASTE, não de conclusão.'
      },

      /* ---------- Item 7 (difícil-meta) — Autoavaliação ---------- */
      {
        id: 'D-POR-19-07',
        tipo: 'autoavaliacao',
        subtopico: 'Reescrita — distinções fundamentais',
        pergunta: 'Você consegue, sem consultar, reescrever frases mantendo o sentido original e a correção gramatical (com transposição de voz, substituição de conectivos, reorganização sintática) e identificar reescritas que alteram o sentido ou contêm erro?',
        resposta: 'REESCRITA: mesmo sentido + outras palavras + correção gramatical. TRANSPOSIÇÃO DE VOZ: ativa ↔ passiva, mantendo agente, tempo e sentido. SUBSTITUIÇÃO DE CONECTIVOS: manter a relação (causa → porque/como; conclusão → portanto; concessão → embora; oposição → mas). NOMINALIZAÇÃO: verbo → substantivo. Verificar sempre: (a) concordância; (b) regência; (c) crase; (d) pontuação; (e) manutenção do sentido. Erros que quebram a equivalência: trocar causa por consequência; trocar concessão por oposição; mudar o tempo verbal; mudar o agente; suprimir informação essencial; criar ambiguidade.'
      }
    ]
  },
  /* ============================================================
     RED-20 — Fundamentos da Redação Oficial
  ============================================================ */
  'RED-20': {
    id: 'D-RED-20',
    moduloId: 'RED-20',
    itens: [
      /* ---------- Item 1 (fácil) — MC clássica ---------- */
      {
        id: 'D-RED-20-01',
        tipo: 'multipla_escolha',
        subtopico: 'Princípios da Redação Oficial',
        pergunta: 'Sobre os princípios da Redação Oficial, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'A Redação Oficial prioriza a linguagem rebuscada e as construções indiretas, com o objetivo de conferir solenidade ao texto administrativo, ainda que isso dificulte a compreensão do cidadão.' },
          { id: 'B', texto: 'A Redação Oficial exige impessoalidade, clareza, precisão, objetividade, concisão, coesão, coerência, formalidade e padronização, com uso do padrão culto da língua.' },
          { id: 'C', texto: 'A Redação Oficial admite linguagem informal e abreviações, pois o foco é a comunicação rápida entre servidores, e não a correção gramatical do texto.' },
          { id: 'D', texto: 'A Redação Oficial valoriza a opinião pessoal do redator, pois o texto administrativo deve refletir a perspectiva de quem o escreve, com marcas subjetivas claras.' },
          { id: 'E', texto: 'A Redação Oficial depende apenas da correção gramatical, dispensando padronização de formatos e uniformidade de estruturas entre os órgãos públicos.' }
        ],
        gabarito: 'B',
        explicacao: 'Redação Oficial: impessoalidade, clareza, precisão, objetividade, concisão, coesão, coerência, formalidade, padronização + padrão culto. A) rebuscamento NÃO é formalidade. C) informalidade é vedada. D) impessoalidade — sem opinião pessoal. E) padronização é exigência — não se dispensa.'
      },

      /* ---------- Item 2 (fácil) — V/F simples ---------- */
      {
        id: 'D-RED-20-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Formalidade x rebuscamento',
        pergunta: 'Na Redação Oficial, a formalidade se confunde com o rebuscamento: usar palavras difíceis e construções empoladas é a marca da formalidade exigida nos documentos oficiais.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'FALSO. FORMALIDADE ≠ REBUSCAMENTO. A formalidade exige o padrão culto com CLAREZA — o oposto de obscuridade. O rebuscamento ("Cumpre-nos mui respeitosamente rogar...") é rejeitado pelo Manual de Redação da Presidência da República. A formalidade está em seguir a norma culta com objetividade, não em dificultar a compreensão.'
      },

      /* ---------- Item 3 (médio) — V/F sequencial ---------- */
      {
        id: 'D-RED-20-03',
        tipo: 'multipla_escolha',
        subtopico: 'Princípios aplicados',
        pergunta: 'Julgue as afirmações sobre os princípios da Redação Oficial:\n(__) A impessoalidade exige que o texto não expresse opinião ou marca pessoal do redator, pois a comunicação é do órgão, não do servidor.\n(__) A clareza exige que o texto seja compreensível por qualquer leitor, sem ambiguidade nem duplo sentido involuntário.\n(__) A concisão autoriza a supressão de informações essenciais do texto, com o objetivo de reduzir o número de palavras, ainda que isso prejudique a compreensão.\n(__) A padronização exige o uso uniforme de estruturas, formatos e fórmulas em todo o serviço público, garantindo identidade e previsibilidade.\nAssinale a alternativa com a sequência CORRETA, de cima para baixo:',
        alternativas: [
          { id: 'A', texto: 'V, V, V, V.' },
          { id: 'B', texto: 'V, V, F, V.' },
          { id: 'C', texto: 'V, F, V, V.' },
          { id: 'D', texto: 'F, V, V, F.' },
          { id: 'E', texto: 'F, F, V, V.' }
        ],
        gabarito: 'B',
        explicacao: '(__1) V: impessoalidade — texto é do órgão. (__2) V: clareza — texto compreensível. (__3) F: concisão NÃO autoriza suprimir informação essencial — dizer o máximo com o mínimo, sem perder conteúdo. (__4) V: padronização — uniformidade de estruturas.'
      },

      /* ---------- Item 4 (médio) — V/F simples ---------- */
      {
        id: 'D-RED-20-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Impessoalidade',
        pergunta: 'Na Redação Oficial, o uso de expressões como "eu solicito", "nós informamos" e "na minha opinião" é adequado, pois confere proximidade e humaniza a comunicação com o cidadão.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'FALSO. A impessoalidade EXIGE a supressão de marcas pessoais: em vez de "eu solicito", usa-se "SOLICITA-SE"; em vez de "nós informamos", "INFORMA-SE"; "na minha opinião" não cabe em documento oficial. O texto é do ÓRGÃO, não do servidor — a proximidade se constrói pela clareza e cordialidade, não pela 1ª pessoa.'
      },

      /* ---------- Item 5 (médio-difícil) — Situação ---------- */
      {
        id: 'D-RED-20-05',
        tipo: 'situacao',
        subtopico: 'Aplicação: corrigir texto prolixo',
        pergunta: 'Um candidato redigiu: "Vimos, por meio deste, encaminhar o processo para que seja devidamente analisado pelos setores competentes, com a maior brevidade possível, a fim de que se possa dar prosseguimento ao feito." Sobre o texto, é CORRETO afirmar que:',
        alternativas: [
          { id: 'A', texto: 'O texto está adequado: mantém formalidade e clareza, e a extensão é compatível com a solenidade do documento administrativo.' },
          { id: 'B', texto: 'O texto deve ser reescrito por prolixidade e redundância, e a versão oficial mais adequada seria "Encaminha-se o processo para análise", em conformidade com a concisão.' },
          { id: 'C', texto: 'O texto deve ser mantido, mas com a substituição de "Vimos" por "Nós vimos" — a explicitação do sujeito reforça a legitimidade do ato administrativo.' },
          { id: 'D', texto: 'O texto deve ser reescrito apenas para corrigir "por meio deste" por "por meio deste documento", pois a explicitação do referente é exigência da norma culta.' },
          { id: 'E', texto: 'O texto deve ser mantido, desde que se substitua "a fim de que" por "para que", pois a primeira é uma construção vedada pela norma culta.' }
        ],
        gabarito: 'B',
        explicacao: 'O texto é prolixo e redundante ("vimos, por meio deste", "devidamente", "com a maior brevidade possível", "a fim de que se possa dar prosseguimento ao feito" — tudo isso para dizer "Encaminha-se o processo para análise"). A) prolixidade não é formalidade. C) "Nós vimos" agrava o problema (impessoalidade exige "Encaminha-se"). D) "por meio deste" está correto, mas o problema é o excesso. E) "a fim de que" é construção correta — o problema é a extensão.'
      },

      /* ---------- Item 6 (difícil) — MC I/II/III ---------- */
      {
        id: 'D-RED-20-06',
        tipo: 'multipla_escolha',
        subtopico: 'Fundamentos constitucionais',
        pergunta: 'Sobre os fundamentos constitucionais da Redação Oficial, analise:\nI — A Redação Oficial se ancora nos princípios da impessoalidade, da publicidade e da eficiência (art. 37, CF), que condicionam a forma e o conteúdo da comunicação pública.\nII — A impessoalidade exige que a comunicação não expresse opinião pessoal do redator nem favoreça pessoas ou grupos, mantendo o foco no interesse público.\nIII — A publicidade autoriza a divulgação irrestrita de qualquer informação, ainda que classificada como sigilosa, em nome da transparência.\nEstá CORRETO apenas o que se afirma em:',
        alternativas: [
          { id: 'A', texto: 'I.' },
          { id: 'B', texto: 'II.' },
          { id: 'C', texto: 'III.' },
          { id: 'D', texto: 'I e II.' },
          { id: 'E', texto: 'II e III.' }
        ],
        gabarito: 'D',
        explicacao: 'I correta: fundamento constitucional (art. 37 — impessoalidade, publicidade, eficiência). II correta: impessoalidade — sem opinião pessoal nem favorecimento. III errada: a publicidade NÃO autoriza divulgação de informação sigilosa — há limites legais (LAI, sigilos específicos).'
      },

      /* ---------- Item 7 (difícil-meta) — Autoavaliação ---------- */
      {
        id: 'D-RED-20-07',
        tipo: 'autoavaliacao',
        subtopico: 'Fundamentos — distinções fundamentais',
        pergunta: 'Você consegue, sem consultar, distinguir: (a) linguagem formal x linguagem rebuscada; (b) impessoalidade x informalidade; (c) clareza x precisão; (d) objetividade x concisão; (e) os princípios da Redação Oficial e seus fundamentos constitucionais?',
        resposta: 'FORMAL: norma culta, clara. REBUSCADA: artificial, obscura (rejeitada). IMPESSOAL: texto do órgão. INFORMAL: gírias, 1ª pessoa. CLAREZA: compreensível. PRECISÃO: termos exatos. OBJETIVIDADE: foco no conteúdo. CONCISÃO: forma enxuta. PRINCÍPIOS: impessoalidade, clareza, precisão, objetividade, concisão, coesão, coerência, formalidade, padronização. FUNDAMENTO: art. 37 CF (impessoalidade, publicidade, eficiência).'
      }
    ]
  },

  /* ============================================================
     RED-21 — Manual de Redação da Presidência da República
  ============================================================ */
  'RED-21': {
    id: 'D-RED-21',
    moduloId: 'RED-21',
    itens: [
      /* ---------- Item 1 (fácil) — MC clássica ---------- */
      {
        id: 'D-RED-21-01',
        tipo: 'multipla_escolha',
        subtopico: 'Pronomes de tratamento',
        pergunta: 'Sobre o emprego dos pronomes de tratamento no padrão ofício, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Vossa Excelência (V.Ex.ª) é usada para as altas autoridades (Presidente, Ministros, Governadores, Prefeitos, Deputados, Senadores); Vossa Senhoria (V.S.ª) é usada para as demais autoridades, servidores e particulares.' },
          { id: 'B', texto: 'Vossa Senhoria (V.S.ª) é usada para as altas autoridades; Vossa Excelência (V.Ex.ª) é usada para os demais servidores e particulares, em ordem crescente de hierarquia.' },
          { id: 'C', texto: 'Vossa Excelência e Vossa Senhoria são sinônimos: ambas podem ser usadas para qualquer autoridade, sem critério hierárquico definido.' },
          { id: 'D', texto: 'Vossa Excelência é usada apenas para o Presidente da República; todas as demais autoridades recebem o tratamento de Vossa Senhoria.' },
          { id: 'E', texto: 'Vossa Excelência e Vossa Senhoria dependem do sexo do destinatário: V.Ex.ª para homens, V.S.ª para mulheres, em qualquer cargo.' }
        ],
        gabarito: 'A',
        explicacao: 'V.Ex.ª: altas autoridades (Presidente, Ministros, Governadores, Prefeitos, Deputados, Senadores, Ministros de Tribunais, membros do MP). V.S.ª: demais autoridades, servidores e particulares. B) inverte; C) iguala; D) restringe indevidamente; E) confunde com "Sua Excelência" (que concorda com o gênero do referido).'
      },

      /* ---------- Item 2 (fácil) — V/F simples ---------- */
      {
        id: 'D-RED-21-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Concordância com pronomes de tratamento',
        pergunta: 'Os pronomes de tratamento exigem o verbo na 3ª pessoa: "Vossa Excelência despachou o processo" (e não "despachastes"), pois, embora se refiram ao interlocutor, são formas de tratamento indireto.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. Os pronomes de tratamento exigem verbo na 3ª pessoa — "Vossa Excelência DESPACHOU", "Vossa Senhoria SOLICITOU". Não se usa 2ª pessoa ("despachastes", "solicitastes"), embora o pronome se refira ao interlocutor. A regra é fixa no padrão ofício.'
      },

      /* ---------- Item 3 (médio) — V/F sequencial ---------- */
      {
        id: 'D-RED-21-03',
        tipo: 'multipla_escolha',
        subtopico: 'Fechos e estrutura do padrão ofício',
        pergunta: 'Julgue as afirmações sobre o padrão ofício da 3ª edição do Manual de Redação da Presidência da República:\n(__) O fecho "Respeitosamente" é usado para autoridades superiores; o fecho "Atenciosamente" é usado para autoridades de mesma hierarquia ou inferiores.\n(__) A 3ª edição unificou ofício, memorando e aviso em um único "padrão ofício", extinguindo o memorando como documento autônomo.\n(__) A estrutura do padrão ofício inclui cabeçalho, identificação do expediente (tipo e número/sigla/ano), endereçamento, assunto, texto, fecho e assinatura com nome e cargo.\n(__) O fecho "Att." é admitido como forma abreviada de "Atenciosamente", desde que o documento seja de baixa formalidade.\nAssinale a alternativa com a sequência CORRETA, de cima para baixo:',
        alternativas: [
          { id: 'A', texto: 'V, V, V, V.' },
          { id: 'B', texto: 'V, V, V, F.' },
          { id: 'C', texto: 'V, F, V, V.' },
          { id: 'D', texto: 'F, V, V, F.' },
          { id: 'E', texto: 'F, F, V, V.' }
        ],
        gabarito: 'B',
        explicacao: '(__1) V: Respeitosamente (superior) x Atenciosamente (mesma/lower). (__2) V: unificação no padrão ofício; memorando abolido. (__3) V: estrutura completa. (__4) F: "Att." foi ABOLIDO pela 3ª edição — usar "Atenciosamente" ou "Respeitosamente" por extenso.'
      },

      /* ---------- Item 4 (médio) — V/F simples ---------- */
      {
        id: 'D-RED-21-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Abolições da 3ª edição',
        pergunta: 'A 3ª edição do Manual de Redação da Presidência da República aboliu o uso de "Ilustríssimo", "Digníssimo", "D." (Doutor) e "DD.", por serem tratamentos que geram distinção indevida entre cidadãos.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. A 3ª edição ABOLIU: "Ilustríssimo", "Digníssimo", "D." (Doutor), "DD." — tratamentos que geram distinção indevida. Também aboliu "Att." e o memorando/aviso como documentos autônomos. Permanecem: "Senhor", "Senhora", V.Ex.ª, V.S.ª e demais pronomes de tratamento padronizados.'
      },

      /* ---------- Item 5 (médio-difícil) — Situação ---------- */
      {
        id: 'D-RED-21-05',
        tipo: 'situacao',
        subtopico: 'Aplicação: escolher tratamento e fecho',
        pergunta: 'Um Diretor de Administração precisa enviar um ofício a um Ministro de Estado. Sobre o pronome de tratamento, o vocativo, o endereçamento e o fecho, é CORRETO afirmar que:',
        alternativas: [
          { id: 'A', texto: 'Deve usar Vossa Senhoria (V.S.ª), vocativo "Senhor Ministro", endereçamento "Ao Senhor Ministro" e fecho "Atenciosamente".' },
          { id: 'B', texto: 'Deve usar Vossa Excelência (V.Ex.ª), vocativo "Excelentíssimo Senhor Ministro", endereçamento "A Sua Excelência o Senhor Ministro" e fecho "Respeitosamente".' },
          { id: 'C', texto: 'Deve usar Vossa Excelência (V.Ex.ª), vocativo "Prezado Senhor Ministro", endereçamento "Ao Ministro" e fecho "Atenciosamente".' },
          { id: 'D', texto: 'Deve usar Vossa Senhoria (V.S.ª), vocativo "Ilustríssimo Senhor Ministro", endereçamento "Ao Ilustríssimo Senhor Ministro" e fecho "Respeitosamente".' },
          { id: 'E', texto: 'Deve usar Vossa Excelência (V.Ex.ª), vocativo "Senhor Ministro", endereçamento "Ao Senhor Ministro" e fecho "Cordialmente".' }
        ],
        gabarito: 'B',
        explicacao: 'Ministro é alta autoridade → V.Ex.ª. Vocativo: "Excelentíssimo Senhor Ministro". Endereçamento: "A Sua Excelência o Senhor Ministro". Fecho: "Respeitosamente" (o remetente — Diretor — é inferior hierárquico). A) V.S.ª está errada (é V.Ex.ª). C) fecho errado (superior exige Respeitosamente). D) "Ilustríssimo" foi abolido; V.S.ª errada. E) fecho "Cordialmente" não é padrão; e o vocativo "Senhor Ministro" (sem "Excelentíssimo") não é o padrão.'
      },

      /* ---------- Item 6 (difícil) — MC associação ---------- */
      {
        id: 'D-RED-21-06',
        tipo: 'multipla_escolha',
        subtopico: 'Associação: autoridades e pronomes de tratamento',
        pergunta: 'Associe as autoridades ao pronome de tratamento adequado:\n1 — Presidente da República.\n2 — Reitor de universidade.\n3 — Cardeal.\n4 — Sacerdote em geral.\nPRONOMES\n( ) Vossa Magnificência.\n( ) Vossa Eminência.\n( ) Vossa Reverendíssima.\n( ) Vossa Excelência.\nA sequência CORRETA, de cima para baixo, é:',
        alternativas: [
          { id: 'A', texto: '1, 2, 3, 4.' },
          { id: 'B', texto: '2, 3, 4, 1.' },
          { id: 'C', texto: '3, 4, 1, 2.' },
          { id: 'D', texto: '4, 1, 2, 3.' },
          { id: 'E', texto: '2, 4, 3, 1.' }
        ],
        gabarito: 'B',
        explicacao: 'REITOR → 2 (Vossa Magnificência). CARDEAL → 3 (Vossa Eminência). SACERDOTE → 4 (Vossa Reverendíssima). PRESIDENTE → 1 (Vossa Excelência). A associação correta é 2, 3, 4, 1.'
      },

      /* ---------- Item 7 (difícil-meta) — Autoavaliação ---------- */
      {
        id: 'D-RED-21-07',
        tipo: 'autoavaliacao',
        subtopico: 'Manual de Redação — distinções fundamentais',
        pergunta: 'Você consegue, sem consultar, aplicar o padrão ofício da 3ª edição do MRPR: pronomes de tratamento (V.Ex.ª, V.S.ª, V.Mag.ª, V.Em.ª, V.S., V.Rev.ma), concordância (3ª pessoa), vocativo, endereçamento, fechos (Respeitosamente/Atenciosamente), estrutura do padrão ofício e abolições ("D.", "Ilustríssimo", "DD.", "Att.", memorando, aviso)?',
        resposta: 'PRONOMES: V.Ex.ª (altas autoridades), V.S.ª (demais), V.Mag.ª (reitores), V.Em.ª (cardeais), V.S. (Papa), V.Rev.ma (sacerdotes). CONCORDÂNCIA: verbo sempre 3ª pessoa. VOCATIVO: chama o destinatário, com vírgula. ENDEREÇAMENTO: nome, cargo, endereço. FECHOS: Respeitosamente (superior) x Atenciosamente (mesma/lower). ESTRUTURA: cabeçalho, identificação, endereçamento, assunto, texto, fecho, assinatura. ABOLIÇÕES: "D.", "Ilustríssimo", "Digníssimo", "DD.", "Att.", memorando, aviso (unificados no padrão ofício).'
      }
    ]
  },

  /* ============================================================
     RED-22 — Documentos e comunicações administrativas
  ============================================================ */
  'RED-22': {
    id: 'D-RED-22',
    moduloId: 'RED-22',
    itens: [
      /* ---------- Item 1 (fácil) — MC clássica ---------- */
      {
        id: 'D-RED-22-01',
        tipo: 'multipla_escolha',
        subtopico: 'Finalidade dos documentos',
        pergunta: 'Sobre a finalidade dos documentos administrativos, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Ofício é o pedido do particular ao órgão; requerimento é a comunicação entre órgãos ou destes com particulares; declaração é a transcrição fiel de registro existente.' },
          { id: 'B', texto: 'Ofício é a comunicação entre órgãos ou destes com particulares; requerimento é o pedido do particular ao órgão; declaração é a afirmação de fato ou situação; certidão é a transcrição fiel de registro existente.' },
          { id: 'C', texto: 'Ofício, requerimento, declaração e certidão são sinônimos: todos servem para o particular solicitar algo ao órgão público.' },
          { id: 'D', texto: 'Ofício é a decisão da autoridade; requerimento é a opinião técnica; declaração é a transcrição de registro; certidão é o pedido do particular ao órgão.' },
          { id: 'E', texto: 'Ofício é o registro de reunião; requerimento é a comunicação entre órgãos; declaração é a descrição de fatos; certidão é a decisão da autoridade.' }
        ],
        gabarito: 'B',
        explicacao: 'OFÍCIO: comunicação entre órgãos ou destes com particulares. REQUERIMENTO: pedido do particular ao órgão. DECLARAÇÃO: afirmação de fato/situação. CERTIDÃO: transcrição fiel de registro. A) inverte ofício e requerimento; C) iguala indevidamente; D) inverte vários; E) confunde com ata, relatório, despacho.'
      },

      /* ---------- Item 2 (fácil) — V/F simples ---------- */
      {
        id: 'D-RED-22-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Memorando — abolição',
        pergunta: 'A 3ª edição do Manual de Redação da Presidência da República aboliu o memorando como documento autônomo, unificando ofício, memorando e aviso em um único "padrão ofício".',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. A 3ª edição (2018) unificou ofício, memorando e aviso no "padrão ofício". O memorando — historicamente usado para comunicação interna, com estrutura simplificada — deixou de ser documento autônomo. Hoje, todas as comunicações formais usam o padrão ofício.'
      },

      /* ---------- Item 3 (médio) — V/F sequencial ---------- */
      {
        id: 'D-RED-22-03',
        tipo: 'multipla_escolha',
        subtopico: 'Documentos: finalidade e uso',
        pergunta: 'Julgue as afirmações sobre documentos administrativos:\n(__) Ata é o registro formal e resumido do que ocorreu em reunião, assembleia ou sessão, com data, local, participantes e deliberações.\n(__) Relatório é a descrição ordenada de fatos, atividades ou resultados, com introdução, desenvolvimento e conclusão.\n(__) Despacho é a opinião técnica sobre matéria, fundamentada, que não vincula a autoridade competente.\n(__) Parecer é a decisão da autoridade sobre processo ou requerimento, com efeitos vinculantes para as partes.\nAssinale a alternativa com a sequência CORRETA, de cima para baixo:',
        alternativas: [
          { id: 'A', texto: 'V, V, V, V.' },
          { id: 'B', texto: 'V, V, F, F.' },
          { id: 'C', texto: 'V, F, V, F.' },
          { id: 'D', texto: 'F, V, V, F.' },
          { id: 'E', texto: 'F, F, V, V.' }
        ],
        gabarito: 'B',
        explicacao: '(__1) V: ata — registro de reunião. (__2) V: relatório — descrição de fatos/atividades. (__3) F: DESPACHO = decisão/encaminhamento da autoridade. A descrição dada é de PARECER. (__4) F: PARECER = opinião técnica; a descrição dada é de DESPACHO. A banca troca as definições.'
      },

      /* ---------- Item 4 (médio) — V/F simples ---------- */
      {
        id: 'D-RED-22-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Declaração x certidão',
        pergunta: 'Declaração e certidão têm a mesma natureza: ambas transcrevem fielmente o conteúdo de registros existentes, com fé pública.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'FALSO. DECLARAÇÃO: AFIRMA um fato ou situação, com base no conhecimento de quem assina ("Declaro que o servidor está lotado nesta unidade desde 2020"). CERTIDÃO: TRANSCREVE fielmente o que consta em registro, com fé pública ("Certifico que, revendo os livros, consta o assentamento nº 123"). A certidão reproduz registro; a declaração afirma fato. Não são sinônimos.'
      },

      /* ---------- Item 5 (médio-difícil) — Situação ---------- */
      {
        id: 'D-RED-22-05',
        tipo: 'situacao',
        subtopico: 'Aplicação: escolher o documento',
        pergunta: 'Um cidadão precisa pedir a revisão de um processo administrativo. Paralelamente, o setor de compras precisa comunicar ao setor de finanças sobre o andamento do mesmo processo. Os documentos ADEQUADOS são, respectivamente:',
        alternativas: [
          { id: 'A', texto: 'Ofício e requerimento — o ofício é o pedido do cidadão; o requerimento é a comunicação entre setores.' },
          { id: 'B', texto: 'Requerimento e ofício — o requerimento formaliza o pedido do particular; o ofício comunica entre órgãos ou destes com particulares.' },
          { id: 'C', texto: 'Ata e relatório — a ata registra o pedido do cidadão; o relatório comunica o andamento entre setores.' },
          { id: 'D', texto: 'Declaração e certidão — a declaração formaliza o pedido; a certidão comprova o andamento do processo.' },
          { id: 'E', texto: 'Parecer e despacho — o parecer formaliza o pedido; o despacho comunica entre setores.' }
        ],
        gabarito: 'B',
        explicacao: 'REQUERIMENTO: pedido do PARTICULAR ao órgão (qualificação, exposição, fundamentação, fecho). OFÍCIO: comunicação entre ÓRGÃOS ou destes com particulares. A) inverte; C) ata/relatório não servem; D) declaração/certidão não servem; E) parecer/despacho não servem. A escolha depende da FINALIDADE e de QUEM INICIA.'
      },

      /* ---------- Item 6 (difícil) — MC associação ---------- */
      {
        id: 'D-RED-22-06',
        tipo: 'multipla_escolha',
        subtopico: 'Associação: documentos x finalidades',
        pergunta: 'Associe os documentos às suas finalidades:\n1 — Ofício.\n2 — Requerimento.\n3 — Ata.\n4 — Parecer.\nFINALIDADES\n( ) Opinião técnica fundamentada sobre matéria.\n( ) Registro de reunião, com data, participantes e deliberações.\n( ) Comunicação entre órgãos ou destes com particulares.\n( ) Pedido do particular ao órgão.\nA sequência CORRETA, de cima para baixo, é:',
        alternativas: [
          { id: 'A', texto: '1, 2, 3, 4.' },
          { id: 'B', texto: '4, 3, 1, 2.' },
          { id: 'C', texto: '2, 1, 4, 3.' },
          { id: 'D', texto: '3, 4, 2, 1.' },
          { id: 'E', texto: '4, 1, 3, 2.' }
        ],
        gabarito: 'B',
        explicacao: 'PARECER → 4 (opinião técnica). ATA → 3 (registro de reunião). OFÍCIO → 1 (comunicação entre órgãos/particulares). REQUERIMENTO → 2 (pedido do particular). Sequência: 4, 3, 1, 2.'
      },

      /* ---------- Item 7 (difícil-meta) — Autoavaliação ---------- */
      {
        id: 'D-RED-22-07',
        tipo: 'autoavaliacao',
        subtopico: 'Documentos — distinções fundamentais',
        pergunta: 'Você consegue, sem consultar, distinguir: (a) ofício x requerimento; (b) declaração x certidão; (c) despacho x parecer; (d) ata x relatório; (e) circular x comunicado; (f) a abolição do memorando pela 3ª edição do MRPR?',
        resposta: 'OFÍCIO: comunicação entre órgãos/particulares. REQUERIMENTO: pedido do particular. DECLARAÇÃO: afirma fato. CERTIDÃO: transcreve registro (fé pública). DESPACHO: decisão/encaminhamento. PARECER: opinião técnica (não vincula). ATA: registro de reunião. RELATÓRIO: descrição de fatos/atividades. CIRCULAR: mesmo assunto a vários destinatários. COMUNICADO: aviso breve. MEMORANDO: ABOLIDO pela 3ª edição (unificado no padrão ofício).'
      }
    ]
  },

  /* ============================================================
     RED-23 — Elaboração e interpretação de documentos oficiais
  ============================================================ */
  'RED-23': {
    id: 'D-RED-23',
    moduloId: 'RED-23',
    itens: [
      /* ---------- Item 1 (fácil) — MC clássica ---------- */
      {
        id: 'D-RED-23-01',
        tipo: 'multipla_escolha',
        subtopico: 'Escolha do documento',
        pergunta: 'Sobre a escolha do documento adequado a cada situação, assinale a alternativa CORRETA:',
        alternativas: [
          { id: 'A', texto: 'Para comunicação entre órgãos, usa-se requerimento; para pedido do particular, usa-se ofício; para registro de reunião, usa-se relatório.' },
          { id: 'B', texto: 'Para comunicação entre órgãos, usa-se ofício; para pedido do particular, usa-se requerimento; para registro de reunião, usa-se ata.' },
          { id: 'C', texto: 'Para comunicação entre órgãos, usa-se ata; para pedido do particular, usa-se declaração; para registro de reunião, usa-se ofício.' },
          { id: 'D', texto: 'Para comunicação entre órgãos, usa-se parecer; para pedido do particular, usa-se despacho; para registro de reunião, usa-se certidão.' },
          { id: 'E', texto: 'Para comunicação entre órgãos, usa-se memorando; para pedido do particular, usa-se ofício; para registro de reunião, usa-se ata.' }
        ],
        gabarito: 'B',
        explicacao: 'OFÍCIO: comunicação entre órgãos. REQUERIMENTO: pedido do particular. ATA: registro de reunião. A) inverte; C) e D) confundem; E) memorando foi abolido como documento autônomo pela 3ª edição do MRPR.'
      },

      /* ---------- Item 2 (fácil) — V/F simples ---------- */
      {
        id: 'D-RED-23-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Estrutura do padrão ofício',
        pergunta: 'A estrutura do padrão ofício, na 3ª edição do MRPR, inclui cabeçalho, identificação do expediente (tipo e número/sigla/ano), endereçamento, assunto, texto, fecho e assinatura com nome e cargo.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'VERDADEIRO. A estrutura do padrão ofício (3ª edição do MRPR) inclui: CABEÇALHO (brasão, órgão, endereço), IDENTIFICAÇÃO DO EXPEDIENTE (tipo, número, sigla, ano), ENDEREÇAMENTO (nome, cargo, endereço), ASSUNTO (resumo em uma linha), TEXTO (introdução, desenvolvimento, conclusão), FECHO (Respeitosamente/Atenciosamente) e ASSINATURA (nome e cargo).'
      },

      /* ---------- Item 3 (médio) — V/F sequencial ---------- */
      {
        id: 'D-RED-23-03',
        tipo: 'multipla_escolha',
        subtopico: 'Elaboração: cuidados essenciais',
        pergunta: 'Julgue as afirmações sobre a elaboração de documentos oficiais:\n(__) Deve-se usar linguagem formal, impessoal, clara, precisa e concisa, seguindo o padrão culto da língua.\n(__) Deve-se preencher o campo "Assunto" com um resumo em uma linha, que permita ao destinatário identificar rapidamente o teor do documento.\n(__) Pode-se iniciar a frase com pronome oblíquo átono ("Me envie o documento"), pois a colocação pronominal é livre na redação oficial.\n(__) Deve-se incluir fecho e assinatura com nome e cargo — elementos essenciais do padrão ofício.\nAssinale a alternativa com a sequência CORRETA, de cima para baixo:',
        alternativas: [
          { id: 'A', texto: 'V, V, V, V.' },
          { id: 'B', texto: 'V, V, F, V.' },
          { id: 'C', texto: 'V, F, V, V.' },
          { id: 'D', texto: 'F, V, V, F.' },
          { id: 'E', texto: 'F, F, V, V.' }
        ],
        gabarito: 'B',
        explicacao: '(__1) V: linguagem formal, impessoal, clara, precisa, concisa. (__2) V: assunto = resumo em uma linha. (__3) F: NÃO se inicia frase com pronome oblíquo átono ("Me envie" é erro — correto: "ENVIE-ME" ou "Solicita-se o envio"). (__4) V: fecho e assinatura são essenciais.'
      },

      /* ---------- Item 4 (médio) — V/F simples ---------- */
      {
        id: 'D-RED-23-04',
        tipo: 'verdadeiro_falso',
        subtopico: 'Impessoalidade em documento oficial',
        pergunta: 'Em um ofício, é adequado escrever "Solicito a revisão do processo", com o verbo na 1ª pessoa, pois a proximidade com o destinatário confere maior cordialidade ao atendimento.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'FALSO. A impessoalidade exige o verbo na 3ª pessoa com partícula "se": "SOLICITA-SE a revisão do processo". A 1ª pessoa ("solicito", "informo") expressa marca pessoal do redator — o texto é do ÓRGÃO, não do servidor. A cordialidade vem do padrão culto e da clareza, não do uso da 1ª pessoa.'
      },

      /* ---------- Item 5 (médio-difícil) — Situação ---------- */
      {
        id: 'D-RED-23-05',
        tipo: 'situacao',
        subtopico: 'Aplicação: identificar erros em documento',
        pergunta: 'Um candidato redigiu o trecho inicial de um ofício: "Oi, chefe, tudo bem? Solicito a revisão do processo, pois o mesmo está parado há semanas. Att." Sobre o trecho, é CORRETO afirmar que contém:',
        alternativas: [
          { id: 'A', texto: 'Apenas um erro: o fecho "Att." deveria ser "Atenciosamente" por extenso, mas o restante está adequado.' },
          { id: 'B', texto: 'Múltiplos erros: informalidade ("Oi, chefe, tudo bem?"), uso inadequado de "o mesmo" como pronome de retomada, e fecho "Att." (abolido) — todos incompatíveis com o padrão ofício.' },
          { id: 'C', texto: 'Apenas dois erros: a informalidade e o uso de "o mesmo" como pronome de retomada — o fecho "Att." é admitido como forma abreviada.' },
          { id: 'D', texto: 'Apenas dois erros: o fecho "Att." (abolido) e a informalidade — o uso de "o mesmo" como pronome de retomada é correto na redação oficial.' },
          { id: 'E', texto: 'Nenhum erro: o texto é claro e objetivo, e a informalidade confere proximidade com o destinatário, o que é valorizado na redação oficial.' }
        ],
        gabarito: 'B',
        explicacao: 'MÚLTIPLOS ERROS: (1) informalidade — "Oi, chefe, tudo bem?" é inadequado; (2) "o mesmo" como pronome de retomada é vicioso e desaconselhado — o correto é "pois o processo está parado"; (3) "Att." foi abolido pela 3ª edição do MRPR — usar "Atenciosamente" ou "Respeitosamente". A) omite dois erros. C) e D) omitem um erro cada. E) nega os erros.'
      },

      /* ---------- Item 6 (difícil) — MC I/II/III ---------- */
      {
        id: 'D-RED-23-06',
        tipo: 'multipla_escolha',
        subtopico: 'Análise de comunicação administrativa',
        pergunta: 'Sobre a elaboração e a interpretação de documentos oficiais, analise:\nI — Na elaboração, é preciso verificar sentido, correção gramatical, adequação ao padrão ofício e clareza para o destinatário antes de enviar o documento.\nII — Na interpretação, é preciso identificar remetente, destinatário, assunto, finalidade, prazo e providências solicitadas no documento.\nIII — A reescrita de documento inadequado deve corrigir estrutura, vocabulário, tratamento e gramática, mantendo o conteúdo essencial do texto original.\nEstá CORRETO apenas o que se afirma em:',
        alternativas: [
          { id: 'A', texto: 'I.' },
          { id: 'B', texto: 'II.' },
          { id: 'C', texto: 'III.' },
          { id: 'D', texto: 'I e II.' },
          { id: 'E', texto: 'I, II e III.' }
        ],
        gabarito: 'E',
        explicacao: 'Todas corretas. I: revisão (sentido, gramática, padrão, clareza). II: interpretação (remetente, destinatário, assunto, finalidade, prazo, providências). III: reescrita de documento inadequado (corrige estrutura, vocabulário, tratamento, gramática — mantendo conteúdo essencial).'
      },

      /* ---------- Item 7 (difícil-meta) — Autoavaliação ---------- */
      {
        id: 'D-RED-23-07',
        tipo: 'autoavaliacao',
        subtopico: 'Elaboração e interpretação — distinções fundamentais',
        pergunta: 'Você consegue, sem consultar, escolher o documento adequado a cada situação, aplicar a estrutura do padrão ofício, revisar textos (gramática, semântica, estrutura), interpretar comunicações administrativas e reescrever documentos inadequados — mantendo o conteúdo essencial?',
        resposta: 'ESCOLHA: ofício (comunicação entre órgãos), requerimento (pedido do particular), ata (registro de reunião), relatório (descrição de fatos), declaração (afirmação), certidão (transcrição de registro), despacho (decisão), parecer (opinião), circular (vários destinatários), comunicado (aviso breve). ESTRUTURA: cabeçalho, identificação, endereçamento, assunto, texto, fecho, assinatura. REVISÃO: sentido, gramática (concordância, regência, crase, pontuação), adequação ao padrão, clareza. INTERPRETAÇÃO: remetente, destinatário, assunto, finalidade, prazo, providências. REESCRITA: corrigir estrutura, vocabulário, tratamento e gramática, mantendo o conteúdo. Este app NÃO corrige redação — apenas analisa e reescreve.'
      }
    ]
  }   
};
