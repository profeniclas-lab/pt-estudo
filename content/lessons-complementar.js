/* ============================================================
   AULAS — Módulos de prioridade BAIXA (complementar)
   Administração + Direito Administrativo
   Entregues: DA-26, DA-27
   Fase 7 — fechamento das aulas (28/28)
   ============================================================ */

window.LESSONS_COMPLEMENTAR = {

  /* ============================================================
     DA-26 — Bens Públicos
  ============================================================ */
  'DA-26': {
    id: 'L-DA-26',
    moduloId: 'DA-26',
    objetivo: 'Compreender o conceito de bem público, sua classificação (art. 99 do CC: bens de uso comum do povo, bens de uso especial e bens dominicais), as características do regime jurídico-administrativo (inalienabilidade, imprescritibilidade, impenhorabilidade e não oneração — arts. 100 a 102 do CC), as formas de utilização por particulares e as regras de alienação.',
    prerequisitos: ['DA-15', 'DA-16'],
    introducao: 'Os bens públicos são o patrimônio do Estado — e estão sujeitos a um regime jurídico próprio. A base legal está nos **arts. 99 a 102 do Código Civil**. Entender essa disciplina é fundamental: ela explica por que um bem público não pode ser usucapido, por que não pode ser penhorado e por que sua venda exige procedimentos específicos. O art. 99 classifica; os arts. 100 a 102 estabelecem o regime.',
    explicacaoSimples: 'Bem público é todo bem que pertence a uma pessoa jurídica de direito público (União, Estados, DF, Municípios, autarquias e fundações públicas). Não é só prédio de repartição: uma praça, uma rua, um rio, uma escola, um terreno sem uso — tudo isso é bem público. O Código Civil, no **art. 99**, classifica em três espécies: uso comum do povo, uso especial e dominicais. E nos **arts. 100 a 102** estabelece as regras: os afetados não podem ser alienados; os dominicais podem; e nenhum deles pode ser adquirido por usucapião.',
    explicacaoTecnica: 'BENS PÚBLICOS são todos os bens que, por sua natureza ou destinação, pertencem às pessoas jurídicas de direito público (União, Estados, DF, Municípios, autarquias e fundações públicas). CLASSIFICAÇÃO (**art. 99 do Código Civil**): BENS DE USO COMUM DO POVO (rios, mares, estradas, ruas, praças — destinados ao uso da coletividade em geral); BENS DE USO ESPECIAL (edifícios ou terrenos destinados a serviço ou estabelecimento da administração — escolas, hospitais, repartições — inclusive os de autarquias); BENS DOMINICAIS (patrimônio das pessoas jurídicas de direito público, sem destinação pública específica — terrenos sem uso, prédios desativados). REGIME JURÍDICO: **Art. 100**: os bens de uso comum e de uso especial são **inalienáveis enquanto conservarem essa qualificação**. **Art. 101**: os bens dominicais **podem ser alienados**, observadas as exigências da lei (autorização legislativa, avaliação, licitação — leilão, na forma da Lei 14.133/2021). **Art. 102**: os bens públicos **não são adquiridos por usucapião** (imprescritibilidade). CARACTERÍSTICAS: INALIENABILIDADE (em regra, para os afetados); IMPRESCRITIBILIDADE (art. 102; Súmula 340 do STF); IMPENHORABILIDADE (execução por precatórios — art. 100, CF); NÃO ONERAÇÃO (em regra). USO POR PARTICULARES: AUTORIZAÇÃO DE USO (ato precário, interesse do particular); PERMISSÃO DE USO (ato precário, prazo indeterminado); CONCESSÃO DE USO (contrato, prazo determinado, licitação). AFETAÇÃO x DESAFETAÇÃO: com ou sem destinação pública. Bens desafetados (dominicais) podem ser alienados, cumpridos os requisitos.',
    exemplos: [
      'Art. 99, I: praça, rua, rio — uso comum do povo.',
      'Art. 99, II: escola, hospital, repartição — uso especial.',
      'Art. 99, III: terreno sem uso, prédio desativado — dominical.',
      'Art. 100: bem afetado a serviço público não pode ser alienado enquanto mantida a afetação.',
      'Art. 101: bem dominical pode ser alienado, com autorização legislativa, avaliação e leilão.',
      'Art. 102: bem público não pode ser adquirido por usucapião (imprescritibilidade).',
      'Impenhorabilidade: bem público não pode ser penhorado — execução por precatórios.',
      'Autorização de uso: evento em praça pública, por prazo curto.',
      'Permissão de uso: quiosque em praça, por prazo indeterminado.',
      'Concessão de uso: restaurante em prédio público, mediante contrato e licitação.'
    ],
    comparacoes: [
      { termoA: 'Bens de uso comum do povo', termoB: 'Bens de uso especial', diferenca: 'USO COMUM: destinados à COLETIVIDADE em geral (rios, mares, estradas, ruas, praças) — art. 99, I. USO ESPECIAL: destinados a SERVIÇO ou estabelecimento público (escolas, hospitais, repartições) — art. 99, II. Ambos são bens AFETADOS e, enquanto mantida a qualificação, **inalienáveis** (art. 100).' },
      { termoA: 'Bens de uso especial', termoB: 'Bens dominicais', diferenca: 'USO ESPECIAL: têm destinação pública específica (art. 99, II). DOMINICAIS: NÃO têm destinação pública específica (art. 99, III) — são bens que pertencem ao Estado, mas sem afetação. Por isso, os dominicais **podem ser alienados** (art. 101); os de uso especial, em regra, não (art. 100).' },
      { termoA: 'Art. 100', termoB: 'Art. 101', diferenca: '**Art. 100**: bens de uso comum e de uso especial são **inalienáveis enquanto conservarem a qualificação**. **Art. 101**: bens dominicais **podem ser alienados**, observadas as exigências da lei. Um trata da inalienabilidade dos afetados; o outro, da alienabilidade dos dominicais.' },
      { termoA: 'Inalienabilidade', termoB: 'Imprescritibilidade', diferenca: 'INALIENABILIDADE (art. 100): os bens afetados não podem ser alienados enquanto mantida a afetação. IMPRESCRITIBILIDADE (art. 102): os bens públicos não são adquiridos por **usucapião**. A primeira limita a venda; a segunda impede a aquisição pelo decurso do tempo.' },
      { termoA: 'Autorização de uso', termoB: 'Concessão de uso', diferenca: 'AUTORIZAÇÃO: ato unilateral, precário, para interesse do PARTICULAR (evento em praça). CONCESSÃO: CONTRATO administrativo, prazo determinado, precedido de licitação (restaurante em prédio público). A primeira é ato; a segunda, contrato.' }
    ],
    aplicacaoEmConcurso: 'Cobrança: classificação do **art. 99** (uso comum, uso especial, dominical); características (**arts. 100 a 102** — inalienabilidade, alienabilidade dos dominicais, imprescritibilidade); formas de uso por particulares (autorização, permissão, concessão); requisitos de alienação. A banca ama: **atribuir a classificação ao art. 20** (ERRADO — é o art. 99); dizer que bem público pode ser adquirido por usucapião (não pode — art. 102); confundir uso comum com uso especial; confundir autorização/permissão/concessão de uso.',
    pegadinhas: [
      '**Atribuir a classificação dos bens públicos ao art. 20 do Código Civil**. ERRADO. É o **art. 99**.',
      'Dizer que bens públicos podem ser adquiridos por usucapião. NÃO — **art. 102** (imprescritibilidade).',
      'Dizer que bens públicos podem ser penhorados. NÃO — são impenhoráveis (execução por precatórios).',
      'Achar que todo bem público é inalienável. Em regra, os afetados são (art. 100); os **dominicais podem ser alienados** (art. 101).',
      'Confundir bens de uso comum (praça, rua) com bens de uso especial (escola, hospital).',
      'Confundir autorização (ato precário, interesse do particular) com concessão (contrato, prazo determinado).',
      'Dizer que a alienação de bem público dispensa licitação. Em regra, exige (leilão).',
      'Achar que a afetação é permanente. Pode haver DESAFETAÇÃO.'
    ],
    errosComuns: [
      '**Citar o art. 20 em vez do art. 99**.',
      'Decorar a classificação sem exemplos.',
      'Confundir as formas de uso por particulares.',
      'Ignorar os requisitos de alienação.',
      'Não distinguir bens afetados de desafetados.'
    ],
    resumo: [
      'Bem público: pertence a pessoa jurídica de direito público, afetado a serviço ou uso coletivo.',
      '**Classificação: art. 99 do CC** — uso comum (praça, rua), uso especial (escola, hospital), dominical (terreno sem uso).',
      '**Art. 100**: bens de uso comum e especial são inalienáveis enquanto mantida a qualificação.',
      '**Art. 101**: bens dominicais podem ser alienados, cumpridos os requisitos.',
      '**Art. 102**: bens públicos não são adquiridos por usucapião.',
      'Características: inalienabilidade (afetados), imprescritibilidade, impenhorabilidade, não oneração.',
      'Formas de uso: autorização, permissão e concessão de uso.',
      'Bens afetados x desafetados.'
    ],
    modoProfessor: {
      explicarMaisSimples: 'Bem público é o patrimônio do Estado. O **art. 99 do Código Civil** classifica em três tipos: uso comum (praça, rua), uso especial (escola, hospital) e dominical (terreno sem uso). O **art. 100** diz que os afetados não podem ser vendidos; o **art. 101** diz que os dominicais podem; o **art. 102** diz que nenhum pode ser adquirido por usucapião.',
      outroExemplo: 'Uma praça é bem de uso comum (art. 99, I). Uma escola é de uso especial (art. 99, II). Um terreno sem uso é dominical (art. 99, III). Se o município quiser vender o terreno, pode (art. 101), com autorização legislativa, avaliação e leilão. Se alguém ocupar a praça por 20 anos, não adquire — art. 102 (imprescritibilidade).',
      compararConceitos: 'Uso comum x uso especial x dominical. **Art. 100 (inalienabilidade dos afetados) x art. 101 (alienabilidade dos dominicais) x art. 102 (imprescritibilidade)**. Autorização x permissão x concessão de uso.',
      mostrarPegadinha: 'Cuidado: "A classificação dos bens públicos está no art. 20 do CC". ERRADO. É o **art. 99**. E "bens públicos podem ser usucapidos" também está ERRADO — art. 102.',
      comoApareceEmConcurso: 'Classificação (art. 99), características (arts. 100 a 102), formas de uso por particulares.',
      fazerPergunta: {
        pergunta: 'Qual é o dispositivo do Código Civil que classifica os bens públicos?',
        resposta: 'O **art. 99** do Código Civil. Ele os classifica em: I — uso comum do povo; II — uso especial; III — dominicais. Os **arts. 100 a 102** tratam, respectivamente, da inalienabilidade dos afetados, da alienabilidade dos dominicais e da imprescritibilidade.'
      }
    }
  },

  /* ============================================================
     DA-27 — Intervenção do Estado e restrições administrativas
  ============================================================ */
  'DA-27': {
    id: 'L-DA-27',
    moduloId: 'DA-27',
    objetivo: 'Compreender as formas de intervenção do Estado na propriedade privada — desapropriação (ordinária, extraordinária, sancionatória e indireta), servidão administrativa, requisição, ocupação temporária, limitações administrativas e tombamento —, suas diferenças, requisitos e efeitos. Distinguir corretamente **desapropriação-sanção**, **expropriação do art. 243** e **desapropriação indireta**.',
    prerequisitos: ['DA-15', 'DA-26'],
    introducao: 'O direito de propriedade é garantido pela Constituição, mas não é absoluto: ele convive com a função social. Quando o interesse público exige, o Estado pode intervir na propriedade privada — de formas mais suaves (limitações, tombamento) até mais drásticas (desapropriação). Este módulo é o mapa dessas intervenções. E a distinção entre **desapropriação-sanção**, **expropriação do art. 243** e **desapropriação indireta** é uma das mais finas do Direito Administrativo.',
    explicacaoSimples: 'O Estado pode "mexer" na sua propriedade de várias formas. Pode impor restrições ao uso (limitações administrativas). Pode proteger um prédio histórico (tombamento). Pode usar temporariamente um imóvel para uma obra (ocupação temporária). Pode usar um bem em situação de perigo (requisição). Pode passar uma rede de energia sobre o seu terreno (servidão). E pode até tomar a propriedade definitivamente, com indenização (desapropriação). Mas atenção: nem toda tomada é igual. A **desapropriação-sanção** (por descumprimento da função social) indeniza em títulos; a **expropriação do art. 243** (cultivo ilegal de psicotrópicos/trabalho escravo) é **sem indenização**; e a **desapropriação indireta** é a tomada **irregular**, que gera direito a indenização.',
    explicacaoTecnica: 'INTERVENÇÃO DO ESTADO NA PROPRIEDADE é o conjunto de mecanismos pelos quais o Estado restringe, ocupa ou transfere a propriedade privada, em razão do interesse público. FORMAS: (1) **DESAPROPRIAÇÃO**: transferência da propriedade ao Estado, mediante indenização (regra: prévia, justa e em dinheiro — art. 5º, XXIV, CF). Espécies: **ORDINÁRIA** (necessidade/utilidade pública ou interesse social — indenização prévia, justa e em dinheiro); **EXTRAORDINÁRIA** (art. 243 da CF — cultivo ilegal de plantas psicotrópicas ou exploração de trabalho escravo — **sem qualquer indenização** ao proprietário; o bem é destinado à reforma agrária ou a programas de habitação popular); **SANCIONATÓRIA** (por descumprimento da função social da propriedade urbana ou rural — indenização em **títulos da dívida**); **INDIRETA** (ou **desapropriação irregular**): o Poder Público **se apropria do bem particular sem observar os requisitos** da declaração de utilidade pública e da indenização prévia. Não é uma modalidade regular — é uma **tomada ilícita**, que gera direito à indenização e à reparação. **Não se confunde com confisco**: a desapropriação indireta é **irregular**, mas o particular tem direito a indenização; a expropriação do art. 243 é **regular** e **sem indenização**. (2) SERVIDÃO ADMINISTRATIVA: ônus real sobre imóvel, sem transferência de propriedade (ex.: passagem de rede elétrica). (3) REQUISIÇÃO ADMINISTRATIVA: uso TEMPORÁRIO de bem particular em caso de IMINENTE PERIGO PÚBLICO, com indenização ULTERIOR se houver dano (art. 5º, XXV, CF). (4) OCUPAÇÃO TEMPORÁRIA: uso TEMPORÁRIO de imóvel para obras ou serviços públicos (ex.: canteiro de obras). (5) LIMITAÇÕES ADMINISTRATIVAS: restrições GERAIS e ABSTRATAS ao uso da propriedade (zoneamento, gabarito), em regra sem indenização. (6) TOMBAMENTO: proteção de bem de valor histórico, cultural, arquitetônico, paisagístico, mediante restrição total ou parcial ao uso; não transfere a propriedade e, em regra, não gera indenização (salvo se esvaziar o valor econômico).',
    exemplos: [
      'Desapropriação ordinária: imóvel adquirido para construção de hospital público — indenização prévia, justa e em dinheiro.',
      'Desapropriação extraordinária (art. 243): cultivo ilegal de plantas psicotrópicas — **sem indenização**.',
      'Desapropriação sancionatória: descumprimento da função social — indenização em títulos.',
      'Desapropriação indireta: Poder Público ocupa terreno particular sem desapropriação formal — **tomada irregular**, com direito a indenização.',
      'Servidão administrativa: passagem de rede de energia sobre terreno particular.',
      'Requisição: uso de veículo particular em calamidade pública (iminente perigo).',
      'Ocupação temporária: uso de imóvel vizinho como canteiro de obras.',
      'Limitação administrativa: restrição de altura de construções em determinado bairro.',
      'Tombamento: preservação de casarão histórico.',
      'Tombamento provisório: proteção imediata até decisão final.'
    ],
    comparacoes: [
      { termoA: 'Desapropriação-sanção', termoB: 'Expropriação do art. 243', diferenca: '**DESAPROPRIAÇÃO-SANÇÃO**: por descumprimento da função social da propriedade (urbana ou rural). O proprietário recebe indenização em **títulos da dívida**. **EXPROPRIAÇÃO DO ART. 243**: para cultivo ilegal de plantas psicotrópicas ou exploração de trabalho escravo. O proprietário **não recebe qualquer indenização** — o bem é destinado à reforma agrária ou a programas de habitação popular. São institutos distintos: um indeniza em títulos; o outro, **sem indenização**.' },
      { termoA: 'Desapropriação indireta', termoB: 'Expropriação do art. 243', diferenca: '**DESAPROPRIAÇÃO INDIRETA**: tomada **irregular** da propriedade pelo Poder Público, **sem** os requisitos legais (declaração de utilidade pública, indenização prévia). Gera direito à **indenização** e à reparação. **EXPROPRIAÇÃO DO ART. 243**: tomada **regular**, prevista na Constituição, **sem indenização**. Uma é ilícita (mas indenizável); a outra é lícita (e sem indenização).' },
      { termoA: 'Desapropriação indireta', termoB: 'Confisco', diferenca: '**DESAPROPRIAÇÃO INDIRETA**: tomada irregular, com direito a indenização. **CONFISCO**: perda do bem sem indenização (ex.: art. 243). A indireta **não é confisco** — é uma desapropriação de fato, irregular, que gera dever de indenizar. Dizer que "desapropriação indireta é confisco" é **erro grave**.' },
      { termoA: 'Desapropriação', termoB: 'Servidão administrativa', diferenca: 'DESAPROPRIAÇÃO: transfere a propriedade. SERVIDÃO: ônus real, sem transferência. A primeira tira o bem; a segunda restringe seu uso.' },
      { termoA: 'Requisição', termoB: 'Ocupação temporária', diferenca: 'REQUISIÇÃO: uso de bem particular em caso de IMINENTE PERIGO PÚBLICO. OCUPAÇÃO TEMPORÁRIA: uso de imóvel para obras ou serviços públicos (ex.: canteiro de obras). Ambas são temporárias, mas com fundamentos distintos.' },
      { termoA: 'Limitações administrativas', termoB: 'Tombamento', diferenca: 'LIMITAÇÕES: restrições GERAIS e ABSTRATAS (zoneamento, gabarito). TOMBAMENTO: restrição INDIVIDUAL a bem específico de valor cultural. As limitações são gerais; o tombamento é individual.' }
    ],
    aplicacaoEmConcurso: 'Cobrança: diferença entre as formas de intervenção; **desapropriação ordinária, extraordinária (art. 243), sancionatória e indireta**; servidão x requisição x ocupação temporária; limitações x tombamento. A banca ama: **confundir desapropriação indireta com confisco** (erro grave); dizer que a expropriação do art. 243 gera indenização (não gera); dizer que a desapropriação-sanção indeniza em dinheiro (indeniza em títulos); confundir servidão com desapropriação; dizer que limitações geram indenização (não geram, em regra); dizer que tombamento transfere propriedade (não transfere).',
    pegadinhas: [
      '**Dizer que a desapropriação indireta é sinônimo de confisco**. ERRADO. A indireta é tomada **irregular**, com direito a indenização; o confisco (art. 243) é **sem indenização**.',
      '**Dizer que a expropriação do art. 243 gera indenização**. ERRADO. É **sem qualquer indenização**.',
      '**Dizer que a desapropriação-sanção indeniza em dinheiro**. ERRADO. Indeniza em **títulos da dívida**.',
      'Dizer que servidão administrativa transfere a propriedade. NÃO transfere.',
      'Dizer que limitações administrativas geram indenização, em regra. NÃO geram.',
      'Dizer que o tombamento transfere a propriedade. NÃO transfere.',
      'Confundir requisição (perigo público) com ocupação temporária (obras e serviços).',
      'Achar que a desapropriação pode ser feita sem indenização prévia. A regra é indenização **prévia, justa e em dinheiro** (art. 5º, XXIV).'
    ],
    errosComuns: [
      '**Confundir desapropriação indireta com confisco**.',
      '**Confundir expropriação do art. 243 com desapropriação-sanção**.',
      'Decorar as formas sem exemplos.',
      'Confundir servidão com desapropriação.',
      'Confundir limitações com tombamento.'
    ],
    resumo: [
      'Intervenção do Estado na propriedade: restrição, ocupação ou transferência.',
      '**Desapropriação ordinária**: transfere a propriedade — indenização prévia, justa e em dinheiro (art. 5º, XXIV).',
      '**Desapropriação sancionatória**: por descumprimento da função social — indenização em **títulos**.',
      '**Expropriação do art. 243**: cultivo ilegal de psicotrópicos/trabalho escravo — **sem qualquer indenização**.',
      '**Desapropriação indireta**: tomada **irregular** — gera direito a **indenização**. **Não é confisco**.',
      'Servidão administrativa: ônus real, sem transferência.',
      'Requisição: uso temporário em iminente perigo público — indenização ulterior.',
      'Ocupação temporária: uso temporário para obras/serviços.',
      'Limitações administrativas: restrições gerais e abstratas, em regra sem indenização.',
      'Tombamento: preservação do bem — não transfere propriedade.'
    ],
    modoProfessor: {
      explicarMaisSimples: 'O Estado pode "mexer" na sua propriedade de várias formas. Pode restringir o uso (limitações), proteger um prédio histórico (tombamento), usar temporariamente um imóvel (ocupação), usar um bem em perigo (requisição), impor um ônus (servidão) ou até tirar a propriedade, com indenização (desapropriação). Mas atenção: a **desapropriação-sanção** indeniza em títulos; a **expropriação do art. 243** é **sem indenização**; e a **desapropriação indireta** é a tomada **irregular**, que gera direito a indenização.',
      outroExemplo: 'Se a prefeitura precisa construir um hospital, pode desapropriar o imóvel (indenização prévia). Se o imóvel é usado para cultivo ilegal de drogas, pode expropriar **sem indenização** (art. 243). Se a prefeitura ocupa o terreno sem processo formal, há **desapropriação indireta** — o particular tem direito a indenização. Se a prefeitura passa uma rede elétrica sobre o terreno, há **servidão**. Se usa o terreno vizinho como canteiro de obras, há **ocupação temporária**.',
      compararConceitos: 'Desapropriação ordinária x sancionatória x art. 243 x indireta. **Indireta (irregular, indenizável) x art. 243 (regular, sem indenização) x confisco (perda sem indenização)**. Servidão x requisição x ocupação. Limitações x tombamento.',
      mostrarPegadinha: 'Cuidado: "Desapropriação indireta é confisco". ERRADO. A indireta é tomada **irregular**, com direito a indenização. O confisco (art. 243) é **sem indenização**. E "o art. 243 gera indenização" também está ERRADO — é **sem qualquer indenização**.',
      comoApareceEmConcurso: 'Classificação de uma intervenção (qual forma), diferenças entre elas e necessidade (ou não) de indenização. **Distinção entre art. 243, desapropriação-sanção e indireta** é cada vez mais cobrada.',
      fazerPergunta: {
        pergunta: 'Qual a diferença entre desapropriação indireta e expropriação do art. 243?',
        resposta: 'A **desapropriação indireta** é a tomada **irregular** da propriedade pelo Poder Público, sem os requisitos legais — gera direito a **indenização**. A **expropriação do art. 243** é a tomada **regular** prevista na Constituição (cultivo ilegal de psicotrópicos/trabalho escravo) — **sem qualquer indenização**. Uma é ilícita (mas indenizável); a outra é lícita (e sem indenização).'
      }
    }
  }

};
