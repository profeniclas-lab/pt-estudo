/* ============================================================
   BANCO DE QUESTÕES — Administração + Direito Administrativo
   Fase 10 — Parte 1 de 4
   Módulos: ADM-01 a ADM-07
   Padrão: 8 questões por módulo
   Fontes reais: AOCP/CODERN 2026, Quadrix/CREF-15 2026,
                 Quadrix/CREF-20 2026, Fundatec/CRA-RS 2026,
                 Fundatec/Porto Alegre 2026, FAFIPA/Ivaiporã 2026,
                 FEPESE/Florianópolis 2026, Avança/Itapecerica 2026
   ============================================================ */

window.QUESTIONS = [

  /* ============================================================
     ADM-01 — Fundamentos de Administração (8 questões)
  ============================================================ */
  {
    id: 'Q-REAL-ADM-01-001',
    tipo: 'DIDATICA',
    area: 'ADM', moduloId: 'ADM-01',
    subtema: 'Eficiência, eficácia e efetividade',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Uma secretaria municipal implanta um novo sistema de protocolo que reduz em 40% o tempo de tramitação dos processos, mas NÃO consegue ampliar o número de processos concluídos por mês, porque a equipe continua insuficiente. A economia gerada é realocada para outras áreas, sem impacto percebido pelo cidadão. Sobre as dimensões de desempenho, é correto afirmar que o órgão foi:',
    alternativas: [
      { id: 'A', texto: 'eficiente, eficaz e efetivo, pois houve economia e melhoria no processo.' },
      { id: 'B', texto: 'eficiente (uso mais racional do tempo), mas não eficaz (não ampliou processos concluídos) nem efetivo (não houve impacto social real).' },
      { id: 'C', texto: 'eficaz, mas não eficiente, porque o sistema reduziu o tempo de tramitação sem reduzir custos.' },
      { id: 'D', texto: 'efetivo, porque a economia foi realocada para outras áreas, gerando impacto social indireto.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Houve EFICIÊNCIA (redução de 40% no tempo = uso mais racional do recurso). NÃO houve EFICÁCIA (a meta de ampliar processos concluídos não foi atingida). NÃO houve EFETIVIDADE (não houve impacto social real na vida do cidadão).',
      incorretas: { A: 'A eficácia e a efetividade não foram atingidas.', C: 'A eficiência foi atingida; a eficácia, não.', D: 'A realocação da economia, por si só, não configura efetividade — falta o efeito transformador.' },
      conceitoCobrado: 'Eficiência x eficácia x efetividade',
      pegadinha: 'A banca mistura economia de recursos (eficiência) com impacto social (efetividade).',
      comoApareceEmConcurso: 'Cenários aplicados com dados numéricos.'
    },
    tags: ['eficiência', 'eficácia', 'efetividade']
  },
  {
    id: 'Q-DID-ADM-01-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-01',
    subtema: 'PODC e níveis organizacionais',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'Sobre as quatro funções administrativas (PODC) e os três níveis organizacionais, assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'O planejamento operacional é formulado pela cúpula; o estratégico, pela supervisão.' },
      { id: 'B', texto: 'As funções administrativas (planejamento, organização, direção e controle) são exercidas exclusivamente pelo nível estratégico.' },
      { id: 'C', texto: 'As funções administrativas perpassam todos os níveis organizacionais — cada nível as exerce com maior ou menor profundidade, conforme sua responsabilidade.' },
      { id: 'D', texto: 'A direção antecede a organização no ciclo PODC, pois lidera as pessoas antes de estruturá-las.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'As quatro funções administrativas perpassam TODOS os níveis — o que muda é o grau de profundidade e o escopo. O nível estratégico as exerce sobre a organização como um todo; o tático, sobre departamentos; o operacional, sobre tarefas.',
      incorretas: { A: 'Inverte: o estratégico é da cúpula; o operacional, da supervisão.', B: 'As funções perpassam todos os níveis.', D: 'A organização precede a direção.' },
      conceitoCobrado: 'PODC e níveis organizacionais',
      pegadinha: 'Restringir o PODC a um único nível.',
      comoApareceEmConcurso: 'Cobrança combinada de dois conceitos.'
    },
    tags: ['PODC', 'níveis organizacionais']
  },
  {
    id: 'Q-DID-ADM-01-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-01',
    subtema: 'Habilidades do administrador (Katz)',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Segundo a teoria de Katz, as habilidades do administrador são classificadas em técnicas, humanas e conceituais. Sobre a relação entre habilidades e níveis organizacionais, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'As habilidades humanas são exigidas exclusivamente do nível tático.' },
      { id: 'B', texto: 'As habilidades técnicas predominam no nível operacional; as conceituais, no nível estratégico; as humanas são exigidas em todos os níveis, com destaque no tático.' },
      { id: 'C', texto: 'As três habilidades têm o mesmo peso em todos os níveis, sem qualquer predominância relativa.' },
      { id: 'D', texto: 'As habilidades conceituais são exigidas exclusivamente do nível operacional.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A correspondência clássica é: técnicas (operacional), conceituais (estratégico), humanas (todos os níveis, com destaque no tático).',
      incorretas: { A: 'As humanas são exigidas em todos os níveis.', C: 'Há predominância relativa.', D: 'As conceituais predominam no estratégico.' },
      conceitoCobrado: 'Habilidades de Katz x níveis organizacionais',
      pegadinha: 'Inverter a correspondência ou restringir as habilidades a um único nível.',
      comoApareceEmConcurso: 'Cobrança direta do modelo de Katz.'
    },
    tags: ['Katz', 'habilidades']
  },
  {
    id: 'Q-DID-ADM-01-003',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-01',
    subtema: 'Recursos organizacionais',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'São considerados recursos organizacionais, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Recursos humanos, materiais e financeiros.' },
      { id: 'B', texto: 'Recursos tecnológicos e informacionais.' },
      { id: 'C', texto: 'Recursos naturais e ambientais.' },
      { id: 'D', texto: 'Recursos patrimoniais.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Os recursos organizacionais clássicos são: humanos, materiais, financeiros, tecnológicos e informacionais. "Recursos patrimoniais" não é uma categoria autônoma — os bens patrimoniais integram os recursos materiais.',
      incorretas: { A: 'São recursos organizacionais.', B: 'São recursos organizacionais.', C: 'São recursos organizacionais (naturais e ambientais).' },
      conceitoCobrado: 'Recursos organizacionais',
      pegadinha: 'Criar uma categoria inexistente.',
      comoApareceEmConcurso: 'Cobrança direta do rol.'
    },
    tags: ['recursos organizacionais']
  },
  {
    id: 'Q-DID-ADM-01-004',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-01',
    subtema: 'Produtividade',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o conceito de produtividade na Administração, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É sinônimo de eficácia, pois mede exclusivamente o atingimento de objetivos.' },
      { id: 'B', texto: 'É a relação entre os resultados produzidos (outputs) e os recursos utilizados (inputs).' },
      { id: 'C', texto: 'É a mesma coisa que eficiência, pois ambas medem o uso racional de recursos.' },
      { id: 'D', texto: 'É sinônimo de efetividade, pois mede o impacto social da ação organizacional.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'PRODUTIVIDADE é a relação quantitativa entre output (resultado) e input (recurso). Ex.: 30 processos/servidor-hora.',
      incorretas: { A: 'Produtividade é relação; eficácia é atingimento de objetivos.', C: 'Eficiência é juízo qualitativo sobre o uso de recursos; produtividade é relação quantitativa.', D: 'Efetividade é impacto social.' },
      conceitoCobrado: 'Produtividade x eficiência x eficácia x efetividade',
      pegadinha: 'Igualar produtividade a eficiência, eficácia ou efetividade.',
      comoApareceEmConcurso: 'Distinção entre os quatro conceitos.'
    },
    tags: ['produtividade']
  },
  {
    id: 'Q-DID-ADM-01-005',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-01',
    subtema: 'Administração no setor público',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a aplicação da Administração no setor público, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Os conceitos de eficiência, eficácia e efetividade não se aplicam ao setor público, apenas ao privado.' },
      { id: 'B', texto: 'O setor público aplica os mesmos conceitos da teoria geral da Administração, com as devidas adaptações decorrentes dos princípios constitucionais (legalidade, impessoalidade, moralidade, publicidade e eficiência).' },
      { id: 'C', texto: 'O PODC não se aplica ao setor público, pois este segue apenas a lei.' },
      { id: 'D', texto: 'O setor público não tem objetivos organizacionais, apenas finalidades legais.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Os conceitos da teoria geral se aplicam ao setor público, com adaptações: os princípios constitucionais (LIMPE) condicionam a atuação, e o objetivo central é o interesse público — não o lucro.',
      incorretas: { A: 'Os conceitos se aplicam a qualquer organização.', C: 'O PODC se aplica ao setor público.', D: 'O setor público tem finalidades legais E objetivos organizacionais.' },
      conceitoCobrado: 'Aplicação da Administração no setor público',
      pegadinha: 'Negar a aplicabilidade dos conceitos ao setor público.',
      comoApareceEmConcurso: 'Distinção entre gestão pública e privada.'
    },
    tags: ['setor público', 'LIMPE']
  },
  {
    id: 'Q-DID-ADM-01-006',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-01',
    subtema: 'Organizações',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'Sobre o conceito de organização, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Organização é exclusivamente uma empresa com fins lucrativos.' },
      { id: 'B', texto: 'Organização é um sistema social que combina recursos para produzir bens ou serviços, com ou sem fins lucrativos.' },
      { id: 'C', texto: 'Organização é sinônimo de Administração Pública.' },
      { id: 'D', texto: 'Organização é um conceito restrito ao setor privado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'ORGANIZAÇÃO é um sistema social que combina recursos (humanos, materiais, financeiros, tecnológicos, informacionais) para produzir bens ou serviços — pode ter ou não fins lucrativos. Inclui empresas, órgãos públicos, ONGs, escolas, hospitais etc.',
      incorretas: { A: 'Organização não se restringe a empresas com fins lucrativos.', C: 'Administração Pública é uma espécie de organização.', D: 'Existe em qualquer setor.' },
      conceitoCobrado: 'Conceito de organização',
      pegadinha: 'Restringir a organizações com fins lucrativos.',
      comoApareceEmConcurso: 'Cobrança direta do conceito.'
    },
    tags: ['organizações']
  },
  {
    id: 'Q-DID-ADM-01-007',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-01',
    subtema: 'Funções administrativas',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'São funções administrativas clássicas do PODC, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Planejamento.' },
      { id: 'B', texto: 'Organização.' },
      { id: 'C', texto: 'Direção.' },
      { id: 'D', texto: 'Contabilidade.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Contabilidade é uma técnica/área de apoio — não é uma das quatro funções administrativas do PODC. As quatro são: planejamento, organização, direção e controle.',
      incorretas: { A: 'É função do PODC.', B: 'É função do PODC.', C: 'É função do PODC.' },
      conceitoCobrado: 'Funções administrativas',
      pegadinha: 'Incluir área técnica como função administrativa.',
      comoApareceEmConcurso: 'Cobrança direta do PODC.'
    },
    tags: ['PODC']
  },
  {
    id: 'Q-DID-ADM-01-008',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-01',
    subtema: 'Eficiência x eficácia',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'É possível ser eficiente sem ser eficaz? E eficaz sem ser eficiente? Assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'Sim para ambas: é possível usar bem os recursos sem atingir os objetivos, e atingir os objetivos usando mal os recursos.' },
      { id: 'B', texto: 'Não para ambas: eficiência e eficácia são sempre simultâneas.' },
      { id: 'C', texto: 'Sim apenas para a primeira situação (eficiente sem eficaz); na segunda, a eficácia sempre pressupõe eficiência.' },
      { id: 'D', texto: 'Não — eficiência e eficácia são sinônimos.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'As duas dissociações são possíveis. Eficiente sem eficaz: usou bem os recursos, mas não atingiu o objetivo. Eficaz sem eficiente: atingiu o objetivo, mas desperdiçou recursos.',
      incorretas: { B: 'Podem ser dissociadas.', C: 'A segunda dissociação também é possível.', D: 'São conceitos distintos.' },
      conceitoCobrado: 'Dissociação entre eficiência e eficácia',
      pegadinha: 'Achar que eficácia pressupõe eficiência.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['eficiência', 'eficácia']
  },

  /* ============================================================
     ADM-02 — Processo Administrativo (8 questões)
  ============================================================ */
  {
    id: 'Q-REAL-ADM-02-001',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-02',
    banca: 'Quadrix', orgao: 'CREF-20/SE', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-20/SE — Assistente Administrativo' },
    subtema: 'Funções administrativas (planejamento, organização, direção e controle)',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Acerca das funções administrativas de planejamento, organização, direção e controle, julgue os itens a seguir: I. O planejamento estabelece os objetivos organizacionais e verifica, ao final do período, se eles foram alcançados. II. A organização é responsável pela distribuição de tarefas entre os servidores e pela tomada de liderança da equipe durante a execução das atividades. III. Após a organização distribuir tarefas e recursos, cabe à direção orientar e conduzir os servidores na execução do que foi planejado. IV. O controle compara os resultados alcançados após a execução com os padrões estabelecidos, permitindo corrigir desvios. Assinale a alternativa que aponta as assertivas corretas:',
    alternativas: [
      { id: 'A', texto: 'I e II, apenas.' },
      { id: 'B', texto: 'II e III, apenas.' },
      { id: 'C', texto: 'III e IV, apenas.' },
      { id: 'D', texto: 'I, III e IV, apenas.' },
      { id: 'E', texto: 'I, II, III e IV.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'III está correta (direção orienta e conduz). IV está correta (controle compara e corrige). I está INCORRETA — verificar ao final do período é função do CONTROLE, não do planejamento. II está INCORRETA — tomar liderança da equipe é função da DIREÇÃO, não da organização.',
      incorretas: { A: 'I e II são incorretas.', B: 'II é incorreta.', D: 'I e II são incorretas.', E: 'I e II são incorretas.' },
      conceitoCobrado: 'Funções administrativas — atribuições de cada uma',
      pegadinha: 'Atribuir ao planejamento a verificação final (é do controle) e à organização a liderança da equipe (é da direção).',
      comoApareceEmConcurso: 'Cobrança da distinção entre as quatro funções.'
    },
    tags: ['PODC', 'funções administrativas']
  },
  {
    id: 'Q-REAL-ADM-02-002',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-02',
    banca: 'Quadrix', orgao: 'CREF-20/SE', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-20/SE — Assistente Administrativo' },
    subtema: 'Ciclo administrativo e processos organizacionais',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'A respeito das funções administrativas e do ciclo de gestão, assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'O planejamento é a primeira função do ciclo, seguido da organização, direção e controle — este último realimenta o ciclo com informações para novo planejamento.' },
      { id: 'B', texto: 'A direção é a primeira função, pois lidera as pessoas antes de qualquer planejamento.' },
      { id: 'C', texto: 'O controle encerra o ciclo e não se relaciona com o planejamento.' },
      { id: 'D', texto: 'A organização antecede o planejamento, pois estrutura os recursos antes de definir objetivos.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'O PODC é cíclico: planejamento → organização → direção → controle. O controle realimenta o ciclo — os desvios identificados geram novo planejamento.',
      incorretas: { B: 'A direção não é a primeira.', C: 'O controle se relaciona com o planejamento (é seu espelho).', D: 'O planejamento antecede a organização.' },
      conceitoCobrado: 'Ciclo PODC',
      pegadinha: 'Inverter a ordem ou isolar o controle do ciclo.',
      comoApareceEmConcurso: 'Cobrança da sequência e da natureza cíclica.'
    },
    tags: ['PODC', 'ciclo']
  },
  {
    id: 'Q-DID-ADM-02-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-02',
    subtema: 'PODC x processo administrativo (Lei 9.784/99)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um servidor afirma: "Minha função principal é o processo administrativo — ou seja, planejar, organizar, dirigir e controlar." Sobre essa afirmação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Está correta: processo administrativo (Lei 9.784/99) e ciclo PODC são sinônimos.' },
      { id: 'B', texto: 'Confunde dois conceitos distintos: o PODC é o ciclo de funções do gestor (teoria geral); o processo administrativo da Lei 9.784/99 é o rito jurídico de decisão da Administração, com fases, prazos, contraditório e ampla defesa.' },
      { id: 'C', texto: 'Está correta apenas no âmbito federal, pois a Lei 9.784/99 aplica-se apenas à União.' },
      { id: 'D', texto: 'Está correta apenas no âmbito estadual.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Há uma confusão terminológica clássica. O PODC é o ciclo de funções administrativas (teoria geral). O processo administrativo da Lei 9.784/1999 é o rito jurídico de decisão (instauração, instrução, defesa, relatório, decisão, recursos). São conceitos DIFERENTES.',
      incorretas: { A: 'Não são sinônimos.', C: 'A distinção não depende do ente.', D: 'Idem.' },
      conceitoCobrado: 'PODC x processo administrativo da Lei 9.784/99',
      pegadinha: 'Confundir os dois conceitos pelo nome parecido.',
      comoApareceEmConcurso: 'Cobrança da distinção.'
    },
    tags: ['PODC', 'processo administrativo']
  },
  {
    id: 'Q-DID-ADM-02-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-02',
    subtema: 'Planejamento e controle como "espelhos"',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a relação entre planejamento e controle, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São funções independentes, sem relação.' },
      { id: 'B', texto: 'O planejamento define os padrões; o controle compara o desempenho real com esses padrões e corrige desvios. Sem padrões de planejamento, não há controle.' },
      { id: 'C', texto: 'O controle precede o planejamento, pois define os padrões.' },
      { id: 'D', texto: 'O controle só existe no setor privado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Planejamento e controle são funções-espelho: o planejamento define os padrões; o controle mede e corrige.',
      incorretas: { A: 'São interdependentes.', C: 'O planejamento precede o controle.', D: 'O controle existe em qualquer organização.' },
      conceitoCobrado: 'Interdependência planejamento x controle',
      pegadinha: 'Inverter a lógica ou negar a relação.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['planejamento', 'controle']
  },
  {
    id: 'Q-DID-ADM-02-003',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-02',
    subtema: 'Funções administrativas — identificação em cenário',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Uma Secretaria de Saúde define em janeiro a meta de ampliar a cobertura vacinal em 20%. Em fevereiro, redistribui equipes entre as UBS. Em março, o Secretário faz reuniões de motivação com os coordenadores. Em dezembro, analisa os resultados e identifica que duas regionais não atingiram a meta, decidindo reforçar a capacitação nelas. As funções exercidas em janeiro, fevereiro, março e dezembro são, respectivamente:',
    alternativas: [
      { id: 'A', texto: 'Controle, organização, direção e planejamento.' },
      { id: 'B', texto: 'Planejamento, organização, direção e controle.' },
      { id: 'C', texto: 'Organização, planejamento, controle e direção.' },
      { id: 'D', texto: 'Direção, controle, planejamento e organização.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Janeiro = PLANEJAMENTO (definição de meta). Fevereiro = ORGANIZAÇÃO (redistribuição de equipes). Março = DIREÇÃO (reuniões de motivação). Dezembro = CONTROLE (análise e ação corretiva).',
      incorretas: { A: 'Inverte.', C: 'Inverte.', D: 'Inverte.' },
      conceitoCobrado: 'Identificação das funções administrativas em cenário',
      pegadinha: 'Inverter a sequência.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['PODC', 'cenário']
  },
  {
    id: 'Q-DID-ADM-02-004',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-02',
    subtema: 'Natureza cíclica do PODC',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a natureza do PODC, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É uma sequência linear e estanque, que termina no controle.' },
      { id: 'B', texto: 'É um ciclo interdependente: o controle realimenta novo planejamento, e as funções podem ocorrer simultaneamente em diferentes níveis.' },
      { id: 'C', texto: 'Cada função só pode ser iniciada após o término completo da anterior.' },
      { id: 'D', texto: 'As funções são independentes entre si.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O PODC é cíclico e interdependente: o controle realimenta o planejamento; as funções podem ocorrer em paralelo nos diferentes níveis.',
      incorretas: { A: 'Não é linear.', C: 'As funções se interpenetram.', D: 'São interdependentes.' },
      conceitoCobrado: 'Natureza cíclica do PODC',
      pegadinha: 'Tratar o PODC como sequência rígida.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['PODC', 'ciclo']
  },
  {
    id: 'Q-DID-ADM-02-005',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-02',
    subtema: 'PODC no setor público',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a aplicação do PODC no setor público, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O PODC não se aplica ao setor público, pois este não tem objetivos organizacionais.' },
      { id: 'B', texto: 'O PODC aplica-se ao setor público, com adaptações: os princípios constitucionais (LIMPE) condicionam a atuação, e o objetivo central é o interesse público.' },
      { id: 'C', texto: 'O setor público só aplica o planejamento e o controle — não aplica organização nem direção.' },
      { id: 'D', texto: 'A direção não se aplica ao setor público, pois a liderança é incompatível com a hierarquia.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O PODC aplica-se plenamente ao setor público, com adaptações decorrentes dos princípios constitucionais e do objetivo de interesse público.',
      incorretas: { A: 'Aplica-se.', C: 'Aplica todas as quatro funções.', D: 'A liderança é compatível com a hierarquia.' },
      conceitoCobrado: 'PODC no setor público',
      pegadinha: 'Negar a aplicabilidade de alguma função ao setor público.',
      comoApareceEmConcurso: 'Distinção público x privado.'
    },
    tags: ['PODC', 'setor público']
  },
  {
    id: 'Q-DID-ADM-02-006',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-02',
    subtema: 'Controle como diagnóstico',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a função de controle no PODC, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Limita-se a punir servidores que cometem irregularidades.' },
      { id: 'B', texto: 'É uma função diagnóstica: mede o desempenho, compara com os padrões e corrige desvios, com vistas à melhoria.' },
      { id: 'C', texto: 'Só existe no setor privado.' },
      { id: 'D', texto: 'É dispensável quando o planejamento é bem feito.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O controle é diagnóstico e corretivo — não meramente punitivo. Ele mede, compara e corrige, alimentando o ciclo.',
      incorretas: { A: 'A punição é apenas uma das ações corretivas possíveis.', C: 'Existe em qualquer organização.', D: 'O controle é essencial, mesmo com bom planejamento.' },
      conceitoCobrado: 'Finalidade do controle',
      pegadinha: 'Reduzir o controle à punição.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['controle']
  },

  /* ============================================================
     ADM-03 — Planejamento (8 questões)
  ============================================================ */
  {
    id: 'Q-REAL-ADM-03-001',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-03',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'PPA, LDO e LOA',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Um gestor público federal participa das três etapas do planejamento orçamentário. Primeiro, colabora na elaboração de um plano de médio prazo (quatro anos), que estabelece de forma regionalizada as diretrizes, os objetivos e as metas da administração. Em seguida, trabalha na definição das prioridades para o exercício financeiro subsequente. Por fim, acompanha a aprovação da lei que estima a receita e fixa a despesa. Esses instrumentos correspondem, respectivamente, a:',
    alternativas: [
      { id: 'A', texto: 'Plano Plurianual (PPA), Lei de Diretrizes Orçamentárias (LDO) e Lei Orçamentária Anual (LOA).' },
      { id: 'B', texto: 'Lei de Diretrizes Orçamentárias (LDO), Plano Plurianual (PPA) e Lei Orçamentária Anual (LOA).' },
      { id: 'C', texto: 'Plano Plurianual (PPA), Lei Orçamentária Anual (LOA) e Lei de Diretrizes Orçamentárias (LDO).' },
      { id: 'D', texto: 'Lei Orçamentária Anual (LOA), Lei de Diretrizes Orçamentárias (LDO) e Plano Plurianual (PPA).' },
      { id: 'E', texto: 'Plano Decenal de Desenvolvimento, Lei de Responsabilidade Fiscal (LRF) e Lei Orçamentária Anual (LOA).' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'PPA (plano de médio prazo, 4 anos, com diretrizes, objetivos e metas regionalizadas). LDO (prioridades para o exercício seguinte, orienta a elaboração da LOA). LOA (estima receita e fixa despesa para o exercício).',
      incorretas: { B: 'Inverte PPA e LDO.', C: 'Inverte LDO e LOA.', D: 'Inverte a ordem.', E: 'Plano Decenal e LRF não são os instrumentos mencionados.' },
      conceitoCobrado: 'PPA, LDO e LOA',
      pegadinha: 'Trocar a ordem ou confundir LDO com LOA.',
      comoApareceEmConcurso: 'Cobrança da ordem e do papel de cada instrumento.'
    },
    tags: ['PPA', 'LDO', 'LOA']
  },
  {
    id: 'Q-REAL-ADM-03-002',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-03',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Níveis de planejamento',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Considere que a CODERN está promovendo uma reestruturação administrativa para aumentar sua eficiência. Foram adotadas: diretrizes de longo prazo para ampliação da capacidade portuária; metas periódicas de desempenho para os setores; e rotinas de organização do trabalho e manutenção dos equipamentos. Sobre a classificação dessas ações nos níveis de planejamento, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'As diretrizes de longo prazo correspondem ao nível tático, pois orientam os gerentes intermediários.' },
      { id: 'B', texto: 'As metas periódicas de desempenho estão associadas ao nível tático, por traduzir objetivos estratégicos em ações gerenciais.' },
      { id: 'C', texto: 'As rotinas de organização do trabalho caracterizam o nível tático, pois envolvem padronização de processos.' },
      { id: 'D', texto: 'O nível estratégico é responsável por detalhar a execução das atividades operacionais no curto prazo.' },
      { id: 'E', texto: 'Todos os níveis de planejamento têm a mesma finalidade, diferenciando-se apenas pelo prazo.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Metas periódicas de desempenho = TÁTICO (médio prazo, desdobram o estratégico). Diretrizes de longo prazo = ESTRATÉGICO. Rotinas de organização do trabalho = OPERACIONAL.',
      incorretas: { A: 'Diretrizes de longo prazo = estratégico.', C: 'Rotinas = operacional.', D: 'Detalhar execução = operacional.', E: 'Os níveis têm finalidades distintas.' },
      conceitoCobrado: 'Níveis de planejamento (estratégico, tático, operacional)',
      pegadinha: 'Confundir os níveis ou atribuir ao estratégico a execução operacional.',
      comoApareceEmConcurso: 'Classificação em cenário.'
    },
    tags: ['níveis de planejamento']
  },
  {
    id: 'Q-REAL-ADM-03-003',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-03',
    banca: 'FAFIPA', orgao: 'Prefeitura de Ivaiporã/PR', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'FAFIPA 2026 — Prefeitura de Ivaiporã/PR — Auxiliar Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Níveis de planejamento — tático',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o foco de atuação e o horizonte temporal do nível tático de planejamento, assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'Destina-se exclusivamente à programação de fusões, cisões e incorporações societárias.' },
      { id: 'B', texto: 'Exime o gestor de considerar as variáveis instáveis do ambiente macroeconômico externo.' },
      { id: 'C', texto: 'Abrange a totalidade da organização, com visão de longo prazo e diretrizes amplas formuladas pela alta cúpula.' },
      { id: 'D', texto: 'Possui foco setorial, médio prazo, e traduz as diretrizes do planejamento estratégico para departamentos específicos.' },
      { id: 'E', texto: 'Foca em metas de curtíssimo prazo, com forte orientação interna para tarefas cotidianas.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'O planejamento TÁTICO tem foco setorial, médio prazo, e traduz as diretrizes estratégicas para departamentos específicos.',
      incorretas: { A: 'Restringe indevidamente.', B: 'O ambiente externo é considerado.', C: 'Descreve o nível estratégico.', E: 'Descreve o nível operacional.' },
      conceitoCobrado: 'Nível tático de planejamento',
      pegadinha: 'Confundir tático com estratégico ou operacional.',
      comoApareceEmConcurso: 'Cobrança direta da definição.'
    },
    tags: ['planejamento tático']
  },
  {
    id: 'Q-REAL-ADM-03-004',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-03',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Ciclo orçamentário — planejamento, execução e controle',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um gestor público federal recém-nomeado participa de quatro situações: I. definição de programas governamentais de longo prazo, com metas físicas e financeiras que ultrapassam um exercício; II. análise de projeto de lei que estabelece metas fiscais, prioridades da administração e orienta a elaboração do orçamento do exercício seguinte; III. acompanhamento da arrecadação de receitas e autorização de despesas, com ajustes por meio de créditos adicionais; IV. avaliação, junto aos órgãos de controle, do cumprimento das metas, verificando eficiência, eficácia e economicidade. Assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'As situações I e II correspondem à fase de elaboração do orçamento; III e IV referem-se exclusivamente ao controle externo.' },
      { id: 'B', texto: 'A situação I refere-se ao Plano Plurianual, a II à Lei Orçamentária Anual, e III e IV pertencem à execução orçamentária.' },
      { id: 'C', texto: 'As situações I, II, III e IV representam, respectivamente, planejamento, elaboração normativa, execução e controle do ciclo orçamentário.' },
      { id: 'D', texto: 'A situação II relaciona-se à Lei de Diretrizes Orçamentárias, a III à execução orçamentária, e a IV ao controle do ciclo orçamentário.' },
      { id: 'E', texto: 'As situações I e III pertencem à mesma etapa do ciclo orçamentário.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'I = PPA (planejamento). II = LDO (estabelece metas fiscais, prioridades e orienta a LOA). III = execução orçamentária (arrecadação e despesa). IV = controle e avaliação.',
      incorretas: { A: 'IV não é exclusivamente controle externo.', B: 'II é LDO, não LOA.', C: 'II não é "elaboração normativa" genérica.', E: 'I é PPA; III é execução.' },
      conceitoCobrado: 'Ciclo orçamentário (PPA, LDO, LOA, execução e controle)',
      pegadinha: 'Confundir LDO com LOA e restringir o controle ao externo.',
      comoApareceEmConcurso: 'Cenário aplicado com múltiplas etapas.'
    },
    tags: ['PPA', 'LDO', 'LOA', 'execução', 'controle']
  },
  {
    id: 'Q-DID-ADM-03-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-03',
    subtema: 'Missão, visão e valores',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'Sobre missão, visão e valores, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Missão é onde a organização quer chegar; visão é a razão de sua existência.' },
      { id: 'B', texto: 'Missão é a razão de existir (presente); visão é onde a organização quer chegar (futuro); valores são os princípios que orientam a conduta.' },
      { id: 'C', texto: 'Missão, visão e valores são sinônimos.' },
      { id: 'D', texto: 'Visão é a razão de existir; missão é o futuro almejado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'MISSÃO: razão de existir (presente). VISÃO: futuro almejado. VALORES: princípios de conduta.',
      incorretas: { A: 'Inverte missão e visão.', C: 'São conceitos distintos.', D: 'Inverte visão e missão.' },
      conceitoCobrado: 'Elementos do planejamento',
      pegadinha: 'Inverter missão e visão.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['missão', 'visão', 'valores']
  },
  {
    id: 'Q-DID-ADM-03-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-03',
    subtema: 'Análise SWOT',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a análise SWOT, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Forças e oportunidades são fatores externos; fraquezas e ameaças são internos.' },
      { id: 'B', texto: 'Forças e fraquezas são fatores internos; oportunidades e ameaças são fatores externos.' },
      { id: 'C', texto: 'Todos os quatro elementos são internos.' },
      { id: 'D', texto: 'Todos os quatro elementos são externos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'SWOT: forças/fraquezas = ambiente INTERNO; oportunidades/ameaças = ambiente EXTERNO.',
      incorretas: { A: 'Inverte.', C: 'A SWOT tem dimensão interna e externa.', D: 'Idem.' },
      conceitoCobrado: 'Análise SWOT',
      pegadinha: 'Inverter interno x externo.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['SWOT']
  },
  {
    id: 'Q-DID-ADM-03-003',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-03',
    subtema: 'Objetivo x meta',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a relação entre objetivo e meta, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Objetivo é amplo e qualitativo; meta é o objetivo quantificado com prazo.' },
      { id: 'B', texto: 'Meta é ampla e qualitativa; objetivo é o quantificado com prazo.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'Objetivo é sempre de curto prazo; meta, de longo prazo.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'OBJETIVO: alvo amplo e qualitativo. META: objetivo quantificado e datado.',
      incorretas: { B: 'Inverte.', C: 'São conceitos distintos.', D: 'O prazo não define a distinção.' },
      conceitoCobrado: 'Objetivo x meta',
      pegadinha: 'Inverter os conceitos.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['objetivo', 'meta']
  },
  {
    id: 'Q-DID-ADM-03-004',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-03',
    subtema: 'BSC — Balanced Scorecard',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre o Balanced Scorecard (BSC), é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É uma ferramenta contábil de balanço patrimonial.' },
      { id: 'B', texto: 'É uma ferramenta de gestão estratégica que traduz a estratégia em objetivos, indicadores, metas e iniciativas, sob quatro perspectivas: financeira, clientes, processos internos e aprendizado/crescimento.' },
      { id: 'C', texto: 'É uma técnica de análise de investimentos.' },
      { id: 'D', texto: 'É exclusivo do setor privado, não se aplicando ao setor público.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O BSC é ferramenta de gestão estratégica com quatro perspectivas clássicas. No setor público, adapta-se (ex.: "sociedade" no lugar de "clientes").',
      incorretas: { A: 'Não é ferramenta contábil.', C: 'Não é análise de investimentos.', D: 'Aplica-se ao setor público, com adaptações.' },
      conceitoCobrado: 'Balanced Scorecard',
      pegadinha: 'Reduzir o BSC a uma ferramenta financeira.',
      comoApareceEmConcurso: 'Cobrança das quatro perspectivas.'
    },
    tags: ['BSC']
  },

  /* ============================================================
     ADM-04 — Organização (8 questões)
  ============================================================ */
  {
    id: 'Q-REAL-ADM-04-001',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-04',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Estrutura matricial',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma empresa pública adotou estrutura organizacional matricial para conduzir projetos estratégicos. Nessa configuração, engenheiros, analistas e técnicos permanecem vinculados às áreas funcionais, mas também são alocados temporariamente em projetos específicos, respondendo simultaneamente a diferentes gestores. Analise as assertivas: I. A estrutura matricial permite maior integração entre as áreas funcionais, favorecendo a utilização compartilhada de especialistas. II. Na estrutura matricial, a duplicidade de comando pode gerar conflitos de autoridade, exigindo mecanismos claros de comunicação e definição de responsabilidades. III. A estrutura matricial elimina a necessidade de hierarquia formal. IV. A vinculação simultânea a gerentes funcionais e de projeto caracteriza a essência da departamentalização matricial. Assinale a alternativa que aponta as corretas:',
    alternativas: [
      { id: 'A', texto: 'Apenas I e III.' },
      { id: 'B', texto: 'Apenas II e IV.' },
      { id: 'C', texto: 'Apenas I, II e IV.' },
      { id: 'D', texto: 'Apenas I, III e IV.' },
      { id: 'E', texto: 'I, II, III e IV.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'I, II e IV estão corretas. III está INCORRETA — a estrutura matricial NÃO elimina a hierarquia formal; ela convive com a dimensão funcional e a dimensão de projeto.',
      incorretas: { A: 'III é incorreta.', B: 'I é correta.', D: 'III é incorreta.', E: 'III é incorreta.' },
      conceitoCobrado: 'Estrutura matricial',
      pegadinha: 'Achar que a matricial elimina a hierarquia.',
      comoApareceEmConcurso: 'Cenário aplicado com múltiplas assertivas.'
    },
    tags: ['estrutura matricial']
  },
  {
    id: 'Q-REAL-ADM-04-002',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-04',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Centralização x descentralização',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma empresa pública identificou que a alta administração estava sobrecarregada com decisões operacionais e táticas, gerando morosidade. Optou por ampliar a descentralização decisória em determinadas unidades, mantendo diretrizes estratégicas e mecanismos de controle centralizados. Analise: I. A centralização das diretrizes estratégicas pode favorecer a uniformidade de processos e decisões. II. A descentralização, ao aproximar a decisão dos níveis operacionais, tende a reduzir o tempo de resposta e estimular participação e comprometimento. III. A descentralização implica, necessariamente, menor controle organizacional, eliminando a necessidade de mecanismos formais de acompanhamento. IV. A escolha entre centralização e descentralização independe de fatores como capacitação dos subordinados e complexidade das atividades. Assinale a alternativa que aponta as corretas:',
    alternativas: [
      { id: 'A', texto: 'Apenas I e II.' },
      { id: 'B', texto: 'Apenas I e III.' },
      { id: 'C', texto: 'Apenas II e IV.' },
      { id: 'D', texto: 'Apenas II, III e IV.' },
      { id: 'E', texto: 'I, II, III e IV.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'I e II estão corretas. III está INCORRETA — descentralização NÃO elimina a necessidade de mecanismos formais de controle; ela exige coordenação. IV está INCORRETA — a escolha depende de fatores como capacitação e complexidade.',
      incorretas: { B: 'III é incorreta.', C: 'IV é incorreta.', D: 'III e IV são incorretas.', E: 'III e IV são incorretas.' },
      conceitoCobrado: 'Centralização x descentralização',
      pegadinha: 'Achar que descentralizar é abandonar o controle.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['centralização', 'descentralização']
  },
  {
    id: 'Q-REAL-ADM-04-003',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-04',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Estrutura linha-staff',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Na estrutura linha-staff, os órgãos de assessoria prestam consultoria e recomendação especializada, sem exercer autoridade formal sobre as unidades de linha, às quais compete a decisão sobre a adoção das sugestões recebidas.',
    alternativas: [
      { id: 'A', texto: 'Certo' },
      { id: 'B', texto: 'Errado' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'CERTO. Na estrutura linha-staff, os órgãos de assessoria (staff) prestam consultoria e recomendação, sem autoridade formal sobre as unidades de linha (que decidem).',
      incorretas: { B: 'A definição está correta.' },
      conceitoCobrado: 'Estrutura linha-staff',
      pegadinha: 'Confundir staff com linha.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['linha-staff']
  },
  {
    id: 'Q-REAL-ADM-04-004',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-04',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Departamentalização por clientes',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'A departamentalização por clientes agrupa as atividades conforme a localização em que são desenvolvidas, o que a faz ser especialmente indicada para organizações com atuação dispersa em diferentes regiões.',
    alternativas: [
      { id: 'A', texto: 'Certo' },
      { id: 'B', texto: 'Errado' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'ERRADO. A departamentalização por CLIENTES agrupa as atividades conforme o PERFIL DO PÚBLICO ATENDIDO — não conforme a localização. A departamentalização conforme a localização é a GEOGRÁFICA.',
      incorretas: { A: 'A descrição corresponde à departamentalização geográfica.' },
      conceitoCobrado: 'Tipos de departamentalização',
      pegadinha: 'Trocar cliente por geográfica.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['departamentalização por clientes']
  },
  {
    id: 'Q-REAL-ADM-04-005',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-04',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Quadro de distribuição do trabalho (QDT)',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'O quadro de distribuição do trabalho (QDT) constitui um instrumento de organização e métodos apto a evidenciar aspectos como a duplicidade de tarefas e o desequilíbrio na carga de trabalho entre os servidores da unidade.',
    alternativas: [
      { id: 'A', texto: 'Certo' },
      { id: 'B', texto: 'Errado' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'CERTO. O QDT evidencia a distribuição de tarefas, permitindo identificar duplicidades e desequilíbrios na carga de trabalho.',
      incorretas: { B: 'A definição está correta.' },
      conceitoCobrado: 'QDT — quadro de distribuição do trabalho',
      pegadinha: 'Subestimar a função do QDT.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['QDT']
  },
  {
    id: 'Q-DID-ADM-04-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-04',
    subtema: 'Delegação x descentralização',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a delegação e a descentralização, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Delegação é ato pontual de transferir autoridade; descentralização é estrutural e permanente.' },
      { id: 'B', texto: 'São sinônimos.' },
      { id: 'C', texto: 'Delegação é estrutural; descentralização é pontual.' },
      { id: 'D', texto: 'Ambas transferem a responsabilidade final.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'DELEGAÇÃO: ato pontual, para tarefa específica — a responsabilidade final permanece. DESCENTRALIZAÇÃO: é estrutural, distribui autoridade de forma permanente.',
      incorretas: { B: 'São conceitos distintos.', C: 'Inverte.', D: 'A delegação não transfere a responsabilidade final.' },
      conceitoCobrado: 'Delegação x descentralização',
      pegadinha: 'Confundir ou inverter os conceitos.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['delegação', 'descentralização']
  },
  {
    id: 'Q-DID-ADM-04-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-04',
    subtema: 'Amplitude de controle',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a amplitude de controle, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Amplitude AMPLA (muitos subordinados por gestor) gera MAIS níveis hierárquicos.' },
      { id: 'B', texto: 'Amplitude ESTREITA (poucos subordinados por gestor) gera MENOS níveis hierárquicos.' },
      { id: 'C', texto: 'Amplitude AMPLA gera MENOS níveis hierárquicos; amplitude ESTREITA gera MAIS níveis.' },
      { id: 'D', texto: 'A amplitude não interfere no número de níveis hierárquicos.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A relação é inversa: amplitude AMPLA = estrutura achatada (menos níveis); amplitude ESTREITA = estrutura verticalizada (mais níveis).',
      incorretas: { A: 'Inverte.', B: 'Inverte.', D: 'Há relação direta.' },
      conceitoCobrado: 'Amplitude de controle',
      pegadinha: 'Inverter a relação.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['amplitude de controle']
  },
  {
    id: 'Q-DID-ADM-04-003',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-04',
    subtema: 'Estruturas organizacionais',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a estrutura linear, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Cada subordinado tem múltiplos chefes especializados.' },
      { id: 'B', texto: 'Cada subordinado tem um único chefe, com comando único — característica que favorece a rapidez decisória, mas pode gerar rigidez.' },
      { id: 'C', texto: 'É típica de organizações com projetos complexos e múltiplas subordinações.' },
      { id: 'D', texto: 'Não tem hierarquia.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A estrutura LINEAR tem comando único: cada subordinado responde a UM chefe. Favorece rapidez decisória, mas pode gerar rigidez. É típica de organizações simples e militares.',
      incorretas: { A: 'Descreve a funcional.', C: 'Descreve a matricial.', D: 'A linear é hierárquica.' },
      conceitoCobrado: 'Estrutura linear',
      pegadinha: 'Confundir com funcional ou matricial.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['estrutura linear']
  },

  /* ============================================================
     ADM-05 — Direção, liderança e motivação (8 questões)
  ============================================================ */
  {
    id: 'Q-REAL-ADM-05-001',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-05',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Teorias de liderança (traços, contingencial, transacional e transformacional)',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Uma empresa pública iniciou reestruturação com foco em liderança. Foram identificados quatro perfis: I. gestor que busca identificar características pessoais comuns entre líderes de alto desempenho para replicá-las em novos coordenadores; II. gestora que adapta seu estilo de liderança conforme o nível de maturidade, autonomia e capacidade técnica da equipe; III. líder que estabelece metas claras e oferece recompensas, como bônus e reconhecimento, pelo cumprimento dos objetivos; IV. gestora que atua na construção de uma visão de futuro compartilhada, promovendo engajamento e comprometimento com as mudanças organizacionais. A correta associação entre os perfis e as teorias é:',
    alternativas: [
      { id: 'A', texto: 'I – Comportamental; II – Transformacional; III – Contingencial; IV – Transacional.' },
      { id: 'B', texto: 'I – Traços; II – Contingencial; III – Transacional; IV – Transformacional.' },
      { id: 'C', texto: 'I – Contingencial; II – Comportamental; III – Transformacional; IV – Transacional.' },
      { id: 'D', texto: 'I – Traços; II – Comportamental; III – Contingencial; IV – Transformacional.' },
      { id: 'E', texto: 'I – Transformacional; II – Contingencial; III – Comportamental; IV – Traços.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'I = TRAÇOS (características inatas). II = CONTINGENCIAL (estilo varia conforme a equipe). III = TRANSACIONAL (metas e recompensas). IV = TRANSFORMACIONAL (visão de futuro, engajamento).',
      incorretas: { A: 'I não é comportamental; II não é transformacional.', C: 'I não é contingencial; II não é comportamental.', D: 'II não é comportamental; III não é contingencial.', E: 'I não é transformacional; IV não é traços.' },
      conceitoCobrado: 'Teorias de liderança',
      pegadinha: 'Confundir transacional com transformacional; traços com comportamental.',
      comoApareceEmConcurso: 'Associação de perfis a teorias.'
    },
    tags: ['liderança', 'traços', 'contingencial', 'transacional', 'transformacional']
  },
  {
    id: 'Q-REAL-ADM-05-002',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-05',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Papéis gerenciais (Mintzberg)',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'O gerente de operações de uma empresa pública está coordenando a chegada de um navio de grande calado. Ele: 1. participa de almoço de negócios com diretores da Receita Federal e da Polícia Federal para estreitar relacionamento; 2. redige memorando técnico para todos os operadores de guindaste e práticos do porto, explicando novos procedimentos de segurança; 3. reúne-se com a empresa terceirizada de dragagem para convencê-la a antecipar o cronograma sem custos adicionais, oferecendo em troca prioridade de atracação em serviços futuros. As três ações referem-se, respectivamente, aos papéis de:',
    alternativas: [
      { id: 'A', texto: 'Representação, porta-voz e alocação de recursos.' },
      { id: 'B', texto: 'Ligação, disseminação e negociação.' },
      { id: 'C', texto: 'Liderança, monitoração e empreendedorismo.' },
      { id: 'D', texto: 'Ligação, porta-voz e resolução de conflitos.' },
      { id: 'E', texto: 'Representação, disseminação e resolução de conflitos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '1 = LIGAÇÃO (relacionamento com stakeholders externos). 2 = DISSEMINAÇÃO (transmissão interna de informações). 3 = NEGOCIAÇÃO (acordo com terceiros).',
      incorretas: { A: 'A ação 1 é ligação, não representação; a 3 é negociação, não alocação.', C: 'Não corresponde.', D: 'A 3 é negociação, não resolução de conflitos.', E: 'A 1 é ligação; a 3 é negociação.' },
      conceitoCobrado: 'Papéis gerenciais de Mintzberg',
      pegadinha: 'Confundir ligação com representação; negociação com resolução de conflitos.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['Mintzberg', 'papéis gerenciais']
  },
  {
    id: 'Q-REAL-ADM-05-003',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-05',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Teoria das relações humanas',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'A teoria das relações humanas evidenciou que o nível de produção dos trabalhadores é determinado mais pelas normas sociais do grupo e pelas expectativas que o cercam do que por sua capacidade física ou fisiológica.',
    alternativas: [
      { id: 'A', texto: 'Certo' },
      { id: 'B', texto: 'Errado' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'CERTO. A teoria das relações humanas (Elton Mayo) evidenciou a importância das normas sociais e das expectativas do grupo sobre a produção — superando a visão estritamente fisiológica da Administração Científica.',
      incorretas: { B: 'A afirmação está correta.' },
      conceitoCobrado: 'Teoria das relações humanas',
      pegadinha: 'Negar a influência do grupo sobre a produtividade.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['relações humanas', 'Mayo']
  },
  {
    id: 'Q-DID-ADM-05-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-05',
    subtema: 'Autoridade x poder',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre a diferença entre autoridade e poder, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Autoridade decorre do cargo; poder é a capacidade de influenciar, independentemente do cargo.' },
      { id: 'B', texto: 'São sinônimos.' },
      { id: 'C', texto: 'Poder decorre do cargo; autoridade é a influência sem cargo.' },
      { id: 'D', texto: 'Todo chefe tem poder, e todo líder informal tem autoridade formal.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'AUTORIDADE: direito formal de dar ordens (cargo). PODER: capacidade de influenciar (pode vir do cargo, do conhecimento, da personalidade).',
      incorretas: { B: 'São conceitos distintos.', C: 'Inverte.', D: 'O líder informal não tem autoridade formal.' },
      conceitoCobrado: 'Autoridade x poder',
      pegadinha: 'Inverter ou igualar os conceitos.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['autoridade', 'poder']
  },
  {
    id: 'Q-DID-ADM-05-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-05',
    subtema: 'Estilos clássicos de liderança',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre os três estilos clássicos de liderança (autocrática, democrática e liberal), é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Autocrática: centralizada; democrática: participativa; liberal: autonomia ao grupo.' },
      { id: 'B', texto: 'Autocrática: participativa; democrática: centralizada; liberal: sem liderança.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'A liberal é sempre a mais eficaz.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Autocrática = centralização; democrática = participação; liberal (laissez-faire) = autonomia ao grupo.',
      incorretas: { B: 'Inverte.', C: 'São distintos.', D: 'Não há estilo sempre mais eficaz.' },
      conceitoCobrado: 'Estilos clássicos de liderança',
      pegadinha: 'Inverter ou absolutizar.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['liderança', 'estilos']
  },
  {
    id: 'Q-DID-ADM-05-003',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-05',
    subtema: 'Herzberg — fatores higiênicos x motivadores',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Sobre a teoria dos dois fatores de Herzberg, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Salário é fator motivador; reconhecimento é fator higiênico.' },
      { id: 'B', texto: 'Fatores higiênicos (salário, condições) evitam insatisfação, mas não motivam; fatores motivadores (reconhecimento, responsabilidade) motivam.' },
      { id: 'C', texto: 'Higiene e motivação são sinônimos.' },
      { id: 'D', texto: 'Só o salário motiva.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'HIGIÊNICOS: extrínsecos — evitam insatisfação, mas não motivam. MOTIVADORES: intrínsecos — motivam.',
      incorretas: { A: 'Inverte.', C: 'São conceitos distintos.', D: 'Salário é higiênico.' },
      conceitoCobrado: 'Herzberg',
      pegadinha: 'Classificar salário como motivador.',
      comoApareceEmConcurso: 'Cobrança clássica.'
    },
    tags: ['Herzberg', 'higiene', 'motivação']
  },
  {
    id: 'Q-DID-ADM-05-004',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-05',
    subtema: 'Maslow — hierarquia das necessidades',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre a hierarquia das necessidades de Maslow, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'As necessidades são satisfeitas em qualquer ordem.' },
      { id: 'B', texto: 'A ordem ascendente é: fisiológicas → segurança → sociais → estima → autorrealização.' },
      { id: 'C', texto: 'A autorrealização é a base da pirâmide.' },
      { id: 'D', texto: 'São apenas duas necessidades.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A hierarquia de Maslow, na ordem ascendente, é: fisiológicas → segurança → sociais → estima → autorrealização.',
      incorretas: { A: 'A ordem é ascendente.', C: 'A autorrealização é o topo.', D: 'São cinco níveis.' },
      conceitoCobrado: 'Maslow',
      pegadinha: 'Inverter a ordem.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['Maslow']
  },
  {
    id: 'Q-DID-ADM-05-005',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-05',
    subtema: 'McGregor — teoria X e Y',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre as teorias X e Y de McGregor, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Teoria X: visão negativa (trabalhador precisa ser controlado); teoria Y: visão positiva (trabalho natural, busca responsabilidade).' },
      { id: 'B', texto: 'Teoria X: visão positiva; teoria Y: visão negativa.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'Ambas são teorias de liderança situacional.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'TEORIA X: visão negativa do ser humano. TEORIA Y: visão positiva.',
      incorretas: { B: 'Inverte.', C: 'São distintas.', D: 'São pressupostos sobre a natureza humana, não teorias de liderança.' },
      conceitoCobrado: 'McGregor',
      pegadinha: 'Inverter X e Y.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['McGregor', 'teoria X', 'teoria Y']
  },

  /* ============================================================
     ADM-06 — Controle e avaliação (8 questões)
  ============================================================ */
  {
    id: 'Q-REAL-ADM-06-001',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-06',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Função de controle',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'A CODERN iniciou um processo de melhoria de seus procedimentos internos. Durante uma reunião, a diretoria solicitou que cada setor acompanhasse sistematicamente o desempenho das atividades, comparando os resultados obtidos com as metas previamente estabelecidas e, quando necessário, adotando medidas corretivas para ajustar os processos. A prática solicitada aos gestores está relacionada a qual função da administração?',
    alternativas: [
      { id: 'A', texto: 'Planejamento.' },
      { id: 'B', texto: 'Organização.' },
      { id: 'C', texto: 'Direção.' },
      { id: 'D', texto: 'Controle.' },
      { id: 'E', texto: 'Coordenação.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Acompanhar desempenho, comparar com metas e adotar medidas corretivas é a função de CONTROLE.',
      incorretas: { A: 'Planejamento define metas; não as compara com o desempenho.', B: 'Organização estrutura recursos.', C: 'Direção lidera e motiva.', E: 'Coordenação não é uma das quatro funções clássicas (é uma dimensão da direção).' },
      conceitoCobrado: 'Função de controle',
      pegadinha: 'Confundir controle com planejamento.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['controle']
  },
  {
    id: 'Q-REAL-ADM-06-002',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-06',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Controle concomitante',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'O controle concomitante é aquele exercido antes do início da atividade, com finalidade eminentemente preventiva, evitando a ocorrência de desvios.',
    alternativas: [
      { id: 'A', texto: 'Certo' },
      { id: 'B', texto: 'Errado' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'ERRADO. O controle CONCOMITANTE é exercido DURANTE a atividade — não antes. O controle exercido ANTES é o PREVENTIVO (ou prévio). O posterior é exercido depois.',
      incorretas: { A: 'A definição corresponde ao controle preventivo, não ao concomitante.' },
      conceitoCobrado: 'Tipos de controle (preventivo, concomitante, posterior)',
      pegadinha: 'Trocar preventivo por concomitante.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['controle concomitante', 'controle preventivo']
  },
  {
    id: 'Q-REAL-ADM-06-003',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-06',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Orçamento como instrumento de planejamento e controle',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Na administração financeira, o orçamento desempenha, simultaneamente, função de planejamento e de controle, pois traduz os planos em termos quantitativos e serve de padrão para o confronto com os valores efetivamente realizados.',
    alternativas: [
      { id: 'A', texto: 'Certo' },
      { id: 'B', texto: 'Errado' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'CERTO. O orçamento é, ao mesmo tempo, instrumento de PLANEJAMENTO (traduz planos em termos quantitativos) e de CONTROLE (padrão para confronto com os valores realizados).',
      incorretas: { B: 'A afirmação está correta.' },
      conceitoCobrado: 'Orçamento — planejamento e controle',
      pegadinha: 'Achar que o orçamento é apenas planejamento ou apenas controle.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['orçamento', 'controle', 'planejamento']
  },
  {
    id: 'Q-DID-ADM-06-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-06',
    subtema: 'Etapas do controle',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'São etapas do processo de controle, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Estabelecimento de padrões.' },
      { id: 'B', texto: 'Medição do desempenho real.' },
      { id: 'C', texto: 'Comparação com o padrão.' },
      { id: 'D', texto: 'Eliminação do planejamento.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A eliminação do planejamento NÃO é etapa do controle — é o oposto: sem planejamento (que define padrões), não há controle. As etapas são: padrões → medição → comparação → ação corretiva.',
      incorretas: { A: 'É etapa.', B: 'É etapa.', C: 'É etapa.' },
      conceitoCobrado: 'Etapas do controle',
      pegadinha: 'Incluir item absurdo.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['controle', 'etapas']
  },
  {
    id: 'Q-DID-ADM-06-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-06',
    subtema: 'Padrão x indicador',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre padrão e indicador no controle, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Padrão é a referência (o que se espera); indicador é a métrica que mede o desempenho real.' },
      { id: 'C', texto: 'Indicador é a referência; padrão é a métrica.' },
      { id: 'D', texto: 'Padrão só existe no setor privado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'PADRÃO: critério de referência. INDICADOR: métrica que mede o desempenho real.',
      incorretas: { A: 'São conceitos distintos.', C: 'Inverte.', D: 'Existe em qualquer organização.' },
      conceitoCobrado: 'Padrão x indicador',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['padrão', 'indicador']
  },
  {
    id: 'Q-DID-ADM-06-003',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-06',
    subtema: 'Controle preventivo, simultâneo e posterior',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre os três tipos de controle, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Preventivo = antes; simultâneo = durante; posterior = depois.' },
      { id: 'B', texto: 'Preventivo = depois; simultâneo = antes; posterior = durante.' },
      { id: 'C', texto: 'Todos ocorrem depois.' },
      { id: 'D', texto: 'Todos ocorrem antes.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'PREVENTIVO: antes (evita o desvio). SIMULTÂNEO: durante (corrige em tempo real). POSTERIOR: depois (identifica o desvio).',
      incorretas: { B: 'Inverte.', C: 'Há os três tipos.', D: 'Idem.' },
      conceitoCobrado: 'Tipos de controle',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['controle preventivo', 'simultâneo', 'posterior']
  },
  {
    id: 'Q-DID-ADM-06-004',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-06',
    subtema: 'Controle administrativo x controle da Administração Pública',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre o controle administrativo (PODC) e o controle da Administração Pública (Direito Administrativo), é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'O controle administrativo (PODC) é a função do gestor de medir e corrigir; o controle da Administração Pública (DA) é o conjunto de mecanismos jurídicos e institucionais (autotutela, controle legislativo, judicial, externo).' },
      { id: 'C', texto: 'Só existe controle no Direito Administrativo.' },
      { id: 'D', texto: 'Só existe controle na Teoria Geral.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'São conceitos DISTINTOS: o controle do PODC é função gerencial; o controle da Administração Pública é o conjunto de mecanismos jurídico-institucionais.',
      incorretas: { A: 'Não são sinônimos.', C: 'Existe em ambos.', D: 'Idem.' },
      conceitoCobrado: 'Controle administrativo x controle da Adm. Pública',
      pegadinha: 'Confundir os dois.',
      comoApareceEmConcurso: 'Distinção de conceitos.'
    },
    tags: ['controle', 'autotutela']
  },
  {
    id: 'Q-DID-ADM-06-005',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-06',
    subtema: 'Finalidade do controle',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a finalidade do controle, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É exclusivamente punir.' },
      { id: 'B', texto: 'É medir, comparar e corrigir desvios, com vistas à melhoria do desempenho organizacional.' },
      { id: 'C', texto: 'É apenas registrar.' },
      { id: 'D', texto: 'É dispensável.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O controle é diagnóstico e corretivo — visa à melhoria. A punição é apenas uma das ações corretivas possíveis.',
      incorretas: { A: 'Não é exclusivamente punitivo.', C: 'Não é apenas registro.', D: 'É essencial.' },
      conceitoCobrado: 'Finalidade do controle',
      pegadinha: 'Reduzir o controle à punição.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['controle', 'finalidade']
  },

  /* ============================================================
     ADM-07 — Gestão de Pessoas (8 questões)
  ============================================================ */
  {
    id: 'Q-REAL-ADM-07-001',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-07',
    banca: 'Fundatec', orgao: 'Prefeitura de Porto Alegre/RS (DEMHAB)', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Fundatec 2026 — Prefeitura de Porto Alegre/RS (DEMHAB) — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Avaliação de desempenho — escolha forçada',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma empresa pública substituiu o modelo tradicional de avaliação de desempenho por um método estruturado em blocos de proposições descritivas. Cada bloco contém afirmações com diferentes conotações de desempenho, sendo o avaliador compelido a indicar aquela que melhor representa o comportamento do avaliado e aquela que menos o representa. Os valores atribuídos às afirmações não são de conhecimento do avaliador, tendo sido previamente calibrados por especialistas. A respeito desse método, assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'Trata-se da Avaliação por Incidentes Críticos, cuja principal vantagem reside na eliminação de registros subjetivos.' },
      { id: 'B', texto: 'Trata-se da Escolha Forçada, que busca reduzir distorções como leniência e efeito de halo, embora possa apresentar como limitação a dificuldade de construção e validação dos instrumentos.' },
      { id: 'C', texto: 'Trata-se da Pesquisa de Campo, caracterizada pela atuação conjunta entre especialista e gestor de linha.' },
      { id: 'D', texto: 'Trata-se da Avaliação 360 Graus, cuja principal característica é a coleta de percepções múltiplas, eliminando a ponderação estatística.' },
      { id: 'E', texto: 'Trata-se da Gestão por Objetivos, baseada na negociação de metas mensuráveis.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A descrição corresponde à ESCOLHA FORÇADA: blocos de proposições, avaliador escolhe a que melhor e a que menos representa, valores desconhecidos pelo avaliador (calibrados por especialistas). Reduz distorções, mas tem dificuldade de construção.',
      incorretas: { A: 'Incidentes críticos registra ocorrências — não blocos de escolha.', C: 'Pesquisa de campo envolve especialista e gestor.', D: '360° coleta percepções múltiplas.', E: 'Gestão por objetivos negocia metas.' },
      conceitoCobrado: 'Métodos de avaliação de desempenho',
      pegadinha: 'Confundir escolha forçada com outros métodos.',
      comoApareceEmConcurso: 'Descrição de método aplicado.'
    },
    tags: ['avaliação de desempenho', 'escolha forçada']
  },
  {
    id: 'Q-REAL-ADM-07-002',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-07',
    banca: 'Fundatec', orgao: 'Prefeitura de Porto Alegre/RS (DEMHAB)', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Fundatec 2026 — Prefeitura de Porto Alegre/RS (DEMHAB) — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Avaliação de desempenho — método das escalas gráficas',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Para Santos (2014), a avaliação de desempenho surgiu no Brasil na década de 1960, através de um método que definia a promoção por merecimento e por antiguidade, com boletim de merecimento composto por fatores essenciais (qualidade do trabalho, iniciativa, colaboração, ética profissional, conhecimento do trabalho) e complementares (assiduidade, pontualidade, disciplina). Esse método é denominado:',
    alternativas: [
      { id: 'A', texto: 'Método comparativo.' },
      { id: 'B', texto: 'Método da escolha forçada.' },
      { id: 'C', texto: 'Método das escalas gráficas.' },
      { id: 'D', texto: 'Método dos incidentes críticos.' },
      { id: 'E', texto: 'Método 360 graus.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'O método descrito — fatores essenciais e complementares, com avaliação por merecimento — corresponde ao MÉTODO DAS ESCALAS GRÁFICAS.',
      incorretas: { A: 'Comparativo compara avaliados entre si.', B: 'Escolha forçada usa blocos de proposições.', D: 'Incidentes críticos registra ocorrências.', E: '360° coleta múltiplas percepções.' },
      conceitoCobrado: 'Métodos de avaliação de desempenho',
      pegadinha: 'Confundir escalas gráficas com escolha forçada.',
      comoApareceEmConcurso: 'Cobrança de método específico.'
    },
    tags: ['avaliação de desempenho', 'escalas gráficas']
  },
  {
    id: 'Q-REAL-ADM-07-003',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-07',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Testes psicológicos — psicométricos x personalidade',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma empresa está conduzindo processo seletivo e aplicou testes psicológicos para avaliar candidatos, mensurando tanto a capacidade cognitiva quanto características comportamentais. Sobre a finalidade e classificação dos testes, assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'Testes psicométricos identificam traços emocionais; testes de personalidade mensuram inteligência.' },
      { id: 'B', texto: 'Ambos têm a mesma finalidade, aplicados indistintamente.' },
      { id: 'C', texto: 'Testes psicométricos analisam experiências anteriores; testes de personalidade avaliam conhecimentos técnicos.' },
      { id: 'D', texto: 'Testes psicométricos e de personalidade são aplicados apenas em etapas finais para confirmar entrevistas.' },
      { id: 'E', texto: 'Testes psicométricos mensuram aptidões por meio de escores padronizados; testes de personalidade buscam identificar traços comportamentais, interesses e aspectos motivacionais.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'PSICOMÉTRICOS: aptidões, escores padronizados. PERSONALIDADE: traços comportamentais, interesses, motivações.',
      incorretas: { A: 'Inverte.', B: 'Têm finalidades distintas.', C: 'Não corresponde.', D: 'Não se restringem a etapas finais.' },
      conceitoCobrado: 'Testes psicológicos no processo seletivo',
      pegadinha: 'Inverter psicométrico e personalidade.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['testes psicológicos', 'seleção']
  },
  {
    id: 'Q-REAL-ADM-07-004',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-07',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Aptidão (gestão por competências)',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Segundo Freitas (2022), um dos termos utilizados pelo sistema de gestão por competências é a aptidão. Assinale a alternativa que apresenta a definição desse termo:',
    alternativas: [
      { id: 'A', texto: 'Posição assumida pelo indivíduo perante um estímulo externo.' },
      { id: 'B', texto: 'Participação ativa em ações com impacto social, político ou ambiental.' },
      { id: 'C', texto: 'Capacidade de utilizar e colocar em prática determinados conhecimentos adquiridos em treinamentos ou na vivência profissional e pessoal.' },
      { id: 'D', texto: 'Disposição inata para o desempenho de determinadas atividades.' },
      { id: 'E', texto: 'Transformação que se pretende alcançar quando se realiza uma ação.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'APTIDÃO é a DISPOSIÇÃO INATA (natural) para o desempenho de determinadas atividades.',
      incorretas: { A: 'Descreve atitude.', B: 'Descreve cidadania.', C: 'Descreve habilidade.', E: 'Descreve objetivo.' },
      conceitoCobrado: 'Gestão por competências (CHA)',
      pegadinha: 'Confundir aptidão com habilidade ou atitude.',
      comoApareceEmConcurso: 'Definição de termo.'
    },
    tags: ['competências', 'aptidão', 'CHA']
  },
  {
    id: 'Q-REAL-ADM-07-005',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-07',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Treinamento x desenvolvimento',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Treinamento e desenvolvimento são expressões equivalentes, pois ambos destinam-se a preparar o colaborador para o desempenho do cargo por ele atualmente ocupado.',
    alternativas: [
      { id: 'A', texto: 'Certo' },
      { id: 'B', texto: 'Errado' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'ERRADO. TREINAMENTO prepara para a TAREFA ATUAL (curto prazo, operacional). DESENVOLVIMENTO prepara para o FUTURO (longo prazo, estratégico). Não são equivalentes.',
      incorretas: { A: 'São conceitos distintos.' },
      conceitoCobrado: 'Treinamento x desenvolvimento',
      pegadinha: 'Igualar os conceitos.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['treinamento', 'desenvolvimento']
  },
  {
    id: 'Q-DID-ADM-07-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-07',
    subtema: 'Os seis processos de gestão de pessoas',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'São processos de gestão de pessoas, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Agregar pessoas.' },
      { id: 'B', texto: 'Recompensar pessoas.' },
      { id: 'C', texto: 'Desenvolver pessoas.' },
      { id: 'D', texto: 'Contabilizar pessoas.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Os seis processos são: agregar, aplicar, recompensar, desenvolver, manter e monitorar. "Contabilizar" NÃO é um deles.',
      incorretas: { A: 'É processo.', B: 'É processo.', C: 'É processo.' },
      conceitoCobrado: 'Processos de gestão de pessoas',
      pegadinha: 'Criar processo inexistente.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['gestão de pessoas', 'processos']
  },
  {
    id: 'Q-DID-ADM-07-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-07',
    subtema: 'Recrutamento x seleção',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre recrutamento e seleção, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Recrutamento atrai candidatos; seleção escolhe o que melhor atende ao perfil.' },
      { id: 'C', texto: 'Seleção atrai; recrutamento escolhe.' },
      { id: 'D', texto: 'Ambos dispensam planejamento.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'RECRUTAMENTO: atração (vitrine). SELEÇÃO: escolha (peneira).',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'Exigem planejamento.' },
      conceitoCobrado: 'Recrutamento x seleção',
      pegadinha: 'Inverter ou igualar.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['recrutamento', 'seleção']
  },
  {
    id: 'Q-DID-ADM-07-003',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-07',
    subtema: 'Clima x cultura organizacional',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre clima e cultura organizacional, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Clima e cultura são sinônimos.' },
      { id: 'B', texto: 'Clima é a percepção momentânea (temperatura); cultura é o conjunto de valores e crenças enraizados (DNA).' },
      { id: 'C', texto: 'Cultura é momentânea; clima é enraizado.' },
      { id: 'D', texto: 'Nenhum dos dois influencia o comportamento.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'CLIMA: percepção coletiva momentânea. CULTURA: valores e crenças enraizados.',
      incorretas: { A: 'São conceitos distintos.', C: 'Inverte.', D: 'Ambos influenciam o comportamento.' },
      conceitoCobrado: 'Clima x cultura',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['clima', 'cultura']
  },
  /* ============================================================
     ADM-08 — Comunicação e comportamento organizacional
  ============================================================ */
  {
    id: 'Q-REAL-ADM-08-001',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-08',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Rede informal de comunicação',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'A rede informal de comunicação, embora não prevista no organograma, transmite informações com rapidez e pode ser aproveitada pelo gestor como fonte de diagnóstico do clima organizacional.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'A',
    explicacao: {
      correta: 'CERTO. A rede informal é ágil, não está no organograma e pode ser útil ao gestor como termômetro do clima organizacional.',
      incorretas: { B: 'A definição está correta.' },
      conceitoCobrado: 'Comunicação informal',
      pegadinha: 'Achar que a informalidade é sempre prejudicial.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['comunicação informal']
  },
  {
    id: 'Q-REAL-ADM-08-002',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-08',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Pensamento grupal (groupthink)',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'O pensamento grupal constitui manifestação positiva da coesão da equipe, na medida em que amplia a análise crítica das alternativas e aprimora a qualidade das decisões coletivas.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'B',
    explicacao: {
      correta: 'ERRADO. O pensamento grupal (groupthink) é um fenômeno NEGATIVO: a busca por consenso suprime a análise crítica e piora a qualidade das decisões.',
      incorretas: { A: 'A descrição é o oposto do pensamento grupal.' },
      conceitoCobrado: 'Pensamento grupal',
      pegadinha: 'Tratar o groupthink como aspecto positivo.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['groupthink', 'comportamento organizacional']
  },
  {
    id: 'Q-REAL-ADM-08-003',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-08',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Relações públicas',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'As atividades de relações públicas relacionam-se à divulgação institucional da organização perante o público externo, não abrangendo ações de comunicação dirigidas ao público interno.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'B',
    explicacao: {
      correta: 'ERRADO. As relações públicas abrangem também o público INTERNO — comunicação interna é parte da função.',
      incorretas: { A: 'A afirmação restringe indevidamente.' },
      conceitoCobrado: 'Relações públicas',
      pegadinha: 'Restringir relações públicas ao público externo.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['relações públicas', 'comunicação interna']
  },
  {
    id: 'Q-REAL-ADM-08-004',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-08',
    banca: 'FAFIPA', orgao: 'Prefeitura de Ivaiporã/PR', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'FAFIPA 2026 — Prefeitura de Ivaiporã/PR — Auxiliar Administrativo' },
    subtema: 'Barreiras de comunicação',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Mariana, ao atender um cidadão no balcão de serviços, utilizou diversos termos técnicos da legislação financeira para explicar o indeferimento de um processo, deixando o usuário confuso. Sobre as barreiras que incidiram na comunicação, assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'Mariana provocou uma barreira organizacional ao seguir as linhas formais do organograma.' },
      { id: 'B', texto: 'Mariana contornou uma barreira de comunicação ao aplicar as regras de feedback recomendadas para a recepção.' },
      { id: 'C', texto: 'Mariana gerou uma barreira semântica no atendimento ao utilizar uma linguagem técnica incompatível com o repertório do receptor.' },
      { id: 'D', texto: 'Mariana enfrentou uma barreira física decorrente de ruídos eletromagnéticos na linha telefônica.' },
      { id: 'E', texto: 'Mariana enfrentou uma barreira de canal ao utilizar a comunicação verbal direta.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'O uso de jargão técnico incompatível com o repertório do interlocutor é BARREIRA SEMÂNTICA.',
      incorretas: { A: 'Barreira organizacional envolve estrutura, não jargão.', B: 'Não houve contorno de barreira.', D: 'Não houve barreira física.', E: 'Comunicação verbal direta não é barreira por si.' },
      conceitoCobrado: 'Barreiras de comunicação',
      pegadinha: 'Confundir semântica com organizacional.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['barreira semântica']
  },
  {
    id: 'Q-DID-ADM-08-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-08',
    subtema: 'Elementos do processo de comunicação',
    dificuldade: 1, prioridade: 'media',
    enunciado: 'São elementos do processo de comunicação, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Emissor.' },
      { id: 'B', texto: 'Mensagem.' },
      { id: 'C', texto: 'Canal.' },
      { id: 'D', texto: 'Contabilidade.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Contabilidade não é elemento do processo de comunicação. Os elementos são: emissor, codificação, mensagem, canal, decodificação, receptor, feedback e ruído.',
      incorretas: { A: 'É elemento.', B: 'É elemento.', C: 'É elemento.' },
      conceitoCobrado: 'Elementos da comunicação',
      pegadinha: 'Incluir área técnica como elemento.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['comunicação', 'elementos']
  },
  {
    id: 'Q-DID-ADM-08-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-08',
    subtema: 'Comunicação formal x informal',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre a comunicação formal e a informal, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A comunicação formal é sempre prejudicial, e a informal, sempre benéfica.' },
      { id: 'B', texto: 'A formal flui pelos canais oficiais (hierarquia, documentos); a informal, pelas relações interpessoais — ambas coexistem e se influenciam.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'A informal não existe em órgãos públicos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A comunicação FORMAL flui pelos canais oficiais; a INFORMAL, pelas relações interpessoais. Coexistem e podem se reforçar ou se contrapor.',
      incorretas: { A: 'Não há valor absoluto.', C: 'São distintas.', D: 'Existe em qualquer organização.' },
      conceitoCobrado: 'Comunicação formal x informal',
      pegadinha: 'Tratar como valor absoluto.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['comunicação formal', 'informal']
  },
  {
    id: 'Q-DID-ADM-08-003',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-08',
    subtema: 'Grupo x equipe',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre a diferença entre grupo e equipe, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Grupo tem responsabilidade individual e sinergia neutra (ou negativa); equipe tem responsabilidade mútua, habilidades complementares e sinergia positiva.' },
      { id: 'C', texto: 'Equipe tem apenas responsabilidade individual.' },
      { id: 'D', texto: 'Grupo exige habilidades complementares.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'GRUPO: responsabilidade individual e sinergia neutra/negativa. EQUIPE: responsabilidade mútua, habilidades complementares e sinergia positiva.',
      incorretas: { A: 'São distintos.', C: 'Equipe tem responsabilidade mútua.', D: 'Grupo não exige complementaridade.' },
      conceitoCobrado: 'Grupo x equipe',
      pegadinha: 'Igualar os conceitos.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['grupo', 'equipe']
  },
  {
    id: 'Q-DID-ADM-08-004',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-08',
    subtema: 'Conflito funcional x disfuncional',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre o conflito organizacional, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Todo conflito é disfuncional e deve ser eliminado.' },
      { id: 'B', texto: 'O conflito funcional é construtivo (estimula debate e melhoria); o disfuncional é destrutivo (prejudica o desempenho).' },
      { id: 'C', texto: 'Todo conflito é funcional.' },
      { id: 'D', texto: 'O conflito não influencia o desempenho.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'FUNCIONAL: construtivo. DISFUNCIONAL: destrutivo.',
      incorretas: { A: 'Nem todo conflito é disfuncional.', C: 'Nem todo é funcional.', D: 'Influencia.' },
      conceitoCobrado: 'Conflito funcional x disfuncional',
      pegadinha: 'Tratar como valor absoluto.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['conflito funcional', 'disfuncional']
  },

  /* ============================================================
     ADM-09 — Gestão da Qualidade
  ============================================================ */
  {
    id: 'Q-REAL-ADM-09-001',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-09',
    banca: 'FAFIPA', orgao: 'Prefeitura de Ivaiporã/PR', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'FAFIPA 2026 — Prefeitura de Ivaiporã/PR — Auxiliar Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'PDCA e melhoria contínua',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre as ferramentas e princípios de melhoria contínua aplicados ao serviço público, assinale a alternativa INCORRETA:',
    alternativas: [
      { id: 'A', texto: 'A melhoria contínua pressupõe que os processos devem ser constantemente monitorados e ajustados para a eliminação de desperdícios.' },
      { id: 'B', texto: 'O ciclo PDCA é composto por etapas estáticas de planejamento e ação que dispensam o monitoramento e a verificação dos processos.' },
      { id: 'C', texto: 'O princípio do foco no cliente exige que o órgão público direcione suas ações para atender às demandas da sociedade civil.' },
      { id: 'D', texto: 'Os indicadores de desempenho constituem ferramentas que servem para mensurar a produtividade e a eficácia das ações públicas.' },
      { id: 'E', texto: 'O Diagrama de Causa e Efeito auxilia na identificação e na organização das causas potenciais de um problema específico avaliado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alternativa B está INCORRETA: o PDCA é CÍCLICO (não estático) e pressupõe monitoramento e verificação.',
      incorretas: { A: 'Correta.', C: 'Correta.', D: 'Correta.', E: 'Correta.' },
      conceitoCobrado: 'PDCA e melhoria contínua',
      pegadinha: 'Descrever o PDCA como estático.',
      comoApareceEmConcurso: 'Cobrança de INCORRETA em cenário.'
    },
    tags: ['PDCA', 'melhoria contínua']
  },
  {
    id: 'Q-REAL-ADM-09-002',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-09',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Indicador de grau de atendimento',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Durante a avaliação do desempenho logístico de uma empresa pública, verificou-se que, dos 1.200 pedidos registrados, 150 não foram atendidos conforme as condições estabelecidas (prazo, quantidade ou integridade). A partir dessas informações, o indicador de grau de atendimento da operação corresponde a:',
    alternativas: [
      { id: 'A', texto: '82,5%.' },
      { id: 'B', texto: '85,0%.' },
      { id: 'C', texto: '87,5%.' },
      { id: 'D', texto: '90,0%.' },
      { id: 'E', texto: '92,5%.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Grau de atendimento = (pedidos atendidos / total) × 100 = (1200 − 150)/1200 × 100 = 1050/1200 × 100 = 87,5%.',
      incorretas: { A: '82,5% não corresponde ao cálculo.', B: '85,0% não corresponde.', D: '90,0% não corresponde.', E: '92,5% não corresponde.' },
      conceitoCobrado: 'Indicadores de qualidade — grau de atendimento',
      pegadinha: 'Erro de cálculo (usar 150/1200 ou confundir numerador/denominador).',
      comoApareceEmConcurso: 'Cálculo aplicado.'
    },
    tags: ['indicador', 'grau de atendimento']
  },
  {
    id: 'Q-REAL-ADM-09-003',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-09',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Benchmarking',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Uma empresa pública pretende melhorar a eficiência de seus processos operacionais, analisando práticas adotadas por outras organizações do setor que apresentam melhores resultados, para identificar práticas bem-sucedidas e avaliar a possibilidade de adaptá-las à realidade da empresa. A ferramenta de gestão utilizada é:',
    alternativas: [
      { id: 'A', texto: 'Planejamento estratégico.' },
      { id: 'B', texto: 'Benchmarking.' },
      { id: 'C', texto: 'Gestão por processos.' },
      { id: 'D', texto: 'Análise SWOT.' },
      { id: 'E', texto: 'Reengenharia de processos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'BENCHMARKING é a análise de práticas de outras organizações bem-sucedidas, com vistas à adaptação.',
      incorretas: { A: 'Planejamento estratégico define rumos.', C: 'Gestão por processos organiza o fluxo interno.', D: 'SWOT é diagnóstico interno/externo.', E: 'Reengenharia é redesenho radical.' },
      conceitoCobrado: 'Benchmarking',
      pegadinha: 'Confundir com SWOT ou reengenharia.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['benchmarking']
  },
  {
    id: 'Q-REAL-ADM-09-004',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-09',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Melhoria contínua x reengenharia',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'A melhoria contínua e a reengenharia de processos são sinônimos: ambas consistem em redesenhar radicalmente o processo, começando do zero.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'B',
    explicacao: {
      correta: 'ERRADO. A melhoria contínua é INCREMENTAL (pequenos ajustes); a reengenharia é RADICAL (redesenho do zero).',
      incorretas: { A: 'São conceitos distintos.' },
      conceitoCobrado: 'Melhoria contínua x reengenharia',
      pegadinha: 'Igualar os conceitos.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['melhoria contínua', 'reengenharia']
  },
  {
    id: 'Q-DID-ADM-09-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-09',
    subtema: 'Ishikawa x Pareto',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre o Diagrama de Ishikawa e o Diagrama de Pareto, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Ishikawa prioriza as causas; Pareto identifica.' },
      { id: 'B', texto: 'Ishikawa identifica as causas (6M); Pareto prioriza (80/20).' },
      { id: 'C', texto: 'São a mesma ferramenta.' },
      { id: 'D', texto: 'Pareto identifica; Ishikawa prioriza.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'ISHIKAWA identifica as causas (espinha de peixe/6M); PARETO prioriza (80/20).',
      incorretas: { A: 'Inverte.', C: 'São distintas.', D: 'Inverte.' },
      conceitoCobrado: 'Ishikawa x Pareto',
      pegadinha: 'Inverter as funções.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['Ishikawa', 'Pareto']
  },
  {
    id: 'Q-DID-ADM-09-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-09',
    subtema: '5W2H',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre a ferramenta 5W2H, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É uma ferramenta de plano de ação que responde: o quê, por quê, onde, quando, quem, como e quanto custa.' },
      { id: 'B', texto: 'É uma ferramenta de diagnóstico de causas.' },
      { id: 'C', texto: 'É uma ferramenta de priorização de problemas.' },
      { id: 'D', texto: 'É uma técnica de análise de investimentos.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'O 5W2H é ferramenta de PLANO DE AÇÃO: What, Why, Where, When, Who, How, How much.',
      incorretas: { B: 'Diagnóstico de causas = Ishikawa.', C: 'Priorização = Pareto.', D: 'Não é análise de investimentos.' },
      conceitoCobrado: '5W2H',
      pegadinha: 'Confundir com Ishikawa ou Pareto.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['5W2H']
  },
  {
    id: 'Q-DID-ADM-09-003',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-09',
    subtema: 'Qualidade total',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre a qualidade total (TQM), é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É responsabilidade exclusiva do setor de qualidade.' },
      { id: 'B', texto: 'É uma abordagem que envolve todos os setores e servidores da organização, com foco no usuário e comprometimento da alta direção.' },
      { id: 'C', texto: 'Dispensa o comprometimento da alta direção.' },
      { id: 'D', texto: 'É exclusiva do setor privado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A qualidade total é uma abordagem SISTÊMICA: todos os setores e servidores, foco no usuário, comprometimento da alta direção.',
      incorretas: { A: 'Envolve todos.', C: 'Exige alta direção.', D: 'Aplica-se a qualquer organização.' },
      conceitoCobrado: 'Qualidade total',
      pegadinha: 'Restringir a um setor.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['qualidade total', 'TQM']
  },
  {
    id: 'Q-DID-ADM-09-004',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-09',
    subtema: 'Indicadores de qualidade',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre os indicadores de qualidade, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São métricas que medem o desempenho, como tempo de espera, taxa de erro e índice de satisfação.' },
      { id: 'B', texto: 'São opcionais e não influenciam a gestão.' },
      { id: 'C', texto: 'São exclusivos da área financeira.' },
      { id: 'D', texto: 'São sinônimos de padrão.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Os indicadores são métricas de desempenho: tempo de espera, taxa de erro, satisfação etc.',
      incorretas: { B: 'São essenciais.', C: 'Aplicam-se a todas as áreas.', D: 'Padrão é a referência; indicador é a métrica.' },
      conceitoCobrado: 'Indicadores de qualidade',
      pegadinha: 'Confundir com padrão.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['indicadores', 'qualidade']
  },

  /* ============================================================
     ADM-10 — Administração de Materiais e Patrimônio
  ============================================================ */
  {
    id: 'Q-REAL-ADM-10-001',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-10',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Lote econômico de compra (LEC)',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'A CODERN identificou que, para determinado item de uso frequente, os custos de emissão de pedidos e de manutenção de estoque impactam significativamente os gastos. A demanda anual do item é estável e são conhecidos o custo de realização de pedidos e o custo de armazenagem por unidade. Para definir a quantidade ideal a ser adquirida em cada pedido, minimizando o custo total, a ferramenta adequada é:',
    alternativas: [
      { id: 'A', texto: 'Curva ABC.' },
      { id: 'B', texto: 'Ponto de pedido.' },
      { id: 'C', texto: 'Lote econômico de compra (LEC).' },
      { id: 'D', texto: 'Estoque de segurança.' },
      { id: 'E', texto: 'Sistema de inventário rotativo.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'O LEC (lote econômico de compra) determina a QUANTIDADE IDEAL por pedido, minimizando a soma dos custos de pedido e de armazenagem.',
      incorretas: { A: 'Curva ABC classifica itens por valor.', B: 'Ponto de pedido define QUANDO comprar.', D: 'Estoque de segurança protege contra imprevistos.', E: 'Inventário rotativo é conferência de estoque.' },
      conceitoCobrado: 'Lote econômico de compra (LEC)',
      pegadinha: 'Confundir LEC com ponto de pedido (quando) ou com curva ABC (classificação).',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['LEC', 'lote econômico']
  },
  {
    id: 'Q-REAL-ADM-10-002',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-10',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Ponto de pedido (cálculo)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um item apresenta consumo médio diário de 30 unidades, prazo de entrega de 4 dias e estoque de segurança de 60 unidades. O tempo de processamento interno do pedido é de 1 dia (já considerado no prazo de entrega). O ponto de pedido do item é:',
    alternativas: [
      { id: 'A', texto: '120 unidades.' },
      { id: 'B', texto: '150 unidades.' },
      { id: 'C', texto: '180 unidades.' },
      { id: 'D', texto: '210 unidades.' },
      { id: 'E', texto: '300 unidades.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'PP = (consumo médio × tempo de reposição) + estoque de segurança = (30 × 4) + 60 = 120 + 60 = 180 unidades.',
      incorretas: { A: '120 é apenas o consumo durante o tempo de reposição (30 × 4).', B: '150 não corresponde.', D: '210 não corresponde.', E: '300 é o lote econômico (não o ponto de pedido).' },
      conceitoCobrado: 'Ponto de pedido',
      pegadinha: 'Esquecer o estoque de segurança.',
      comoApareceEmConcurso: 'Cálculo aplicado.'
    },
    tags: ['ponto de pedido']
  },
  {
    id: 'Q-REAL-ADM-10-003',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-10',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Giro de estoque',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Uma empresa pública apresenta consumo anual de 2.400 unidades de determinado item e estoque médio de 200 unidades. O giro de estoque do item é de 12 vezes ao ano, o que expressa:',
    alternativas: [
      { id: 'A', texto: 'o número de vezes que o estoque médio é renovado no período.' },
      { id: 'B', texto: 'o prazo médio de pagamento de fornecedores.' },
      { id: 'C', texto: 'a quantidade mínima para não faltar material.' },
      { id: 'D', texto: 'o custo total de armazenagem.' },
      { id: 'E', texto: 'o prazo de entrega do fornecedor.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'O GIRO DE ESTOQUE mede o número de vezes que o estoque médio se renova no período. Giro = consumo / estoque médio = 2400 / 200 = 12.',
      incorretas: { B: 'Prazo médio de pagamento é outro indicador.', C: 'Estoque mínimo é outro conceito.', D: 'Custo de armazenagem é outro indicador.', E: 'Prazo de entrega é dado do fornecedor.' },
      conceitoCobrado: 'Giro de estoque',
      pegadinha: 'Confundir giro com estoque mínimo ou prazo de pagamento.',
      comoApareceEmConcurso: 'Interpretação de indicador.'
    },
    tags: ['giro de estoque']
  },
  {
    id: 'Q-REAL-ADM-10-004',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-10',
    banca: 'Avança SP', orgao: 'Autarquia Municipal de Saúde de Itapecerica da Serra/SP', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Avança SP 2026 — Autarquia Municipal de Saúde de Itapecerica da Serra/SP — Assistente Administrativo' },
    subtema: 'Tipos de inventário',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Associe os tipos de inventário às suas descrições: 1 - Inventário físico; 2 - Inventário rotativo; 3 - Inventário periódico. ( ) Levantamento contínuo e seletivo, realizado segundo cronograma que abrange todos os itens dentro de determinado período fiscal. ( ) Contagem de todos os itens em períodos determinados, podendo receber a denominação de geral quando realizada no encerramento do exercício fiscal. ( ) Procedimento de levantamento físico e contagem dos itens de material existentes em uma organização. A sequência correta, de cima para baixo, é:',
    alternativas: [
      { id: 'A', texto: '1 – 2 – 3.' },
      { id: 'B', texto: '2 – 3 – 1.' },
      { id: 'C', texto: '3 – 1 – 2.' },
      { id: 'D', texto: '2 – 1 – 3.' },
      { id: 'E', texto: '3 – 2 – 1.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '2 = rotativo (contínuo e seletivo). 3 = periódico (em períodos determinados, inclui o geral). 1 = físico (levantamento e contagem). Sequência: 2 – 3 – 1.',
      incorretas: { A: 'Inverte.', C: 'Inverte.', D: 'Inverte.', E: 'Inverte.' },
      conceitoCobrado: 'Tipos de inventário',
      pegadinha: 'Confundir rotativo com periódico.',
      comoApareceEmConcurso: 'Associação.'
    },
    tags: ['inventário físico', 'rotativo', 'periódico']
  },
  {
    id: 'Q-REAL-ADM-10-005',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-10',
    banca: 'Avança SP', orgao: 'Autarquia Municipal de Saúde de Itapecerica da Serra/SP', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Avança SP 2026 — Autarquia Municipal de Saúde de Itapecerica da Serra/SP — Assistente Administrativo' },
    subtema: 'Recebimento de materiais',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o recebimento de materiais em órgãos públicos, assinale a alternativa que apresenta uma informação INCORRETA:',
    alternativas: [
      { id: 'A', texto: 'O recebimento provisório compreende a recepção dos veículos, verificação de dados básicos e encaminhamento para descarga.' },
      { id: 'B', texto: 'A conferência quantitativa verifica se a quantidade declarada na nota fiscal corresponde à entregue.' },
      { id: 'C', texto: 'A conferência qualitativa verifica se as especificações técnicas estão de acordo com as solicitadas.' },
      { id: 'D', texto: 'A regularização é a etapa final do recebimento, podendo resultar em entrada no estoque, devolução ou reclamação.' },
      { id: 'E', texto: 'O recebimento definitivo é a etapa em que o fornecedor assina o documento fiscal que acompanha o material, para fins de comprovação da data de entrega.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'A alternativa E está INCORRETA: o recebimento DEFINITIVO é a aceitação do material após verificação — não é o momento em que o fornecedor assina a nota (isso ocorre no recebimento provisório).',
      incorretas: { A: 'Correta.', B: 'Correta.', C: 'Correta.', D: 'Correta.' },
      conceitoCobrado: 'Etapas do recebimento de materiais',
      pegadinha: 'Confundir recebimento provisório com definitivo.',
      comoApareceEmConcurso: 'Cobrança de INCORRETA.'
    },
    tags: ['recebimento', 'provisório', 'definitivo']
  },
  {
    id: 'Q-DID-ADM-10-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-10',
    subtema: 'Bem de consumo x bem permanente',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'São exemplos de bens de consumo e de bens permanentes, respectivamente:',
    alternativas: [
      { id: 'A', texto: 'Computador e caneta.' },
      { id: 'B', texto: 'Papel e mesa.' },
      { id: 'C', texto: 'Mesa e computador.' },
      { id: 'D', texto: 'Caneta e papel.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Papel é bem de CONSUMO (consumido com o uso); mesa é bem PERMANENTE (durável, tombada).',
      incorretas: { A: 'Inverte.', C: 'Ambos são permanentes.', D: 'Ambos são de consumo.' },
      conceitoCobrado: 'Bem de consumo x permanente',
      pegadinha: 'Inverter as categorias.',
      comoApareceEmConcurso: 'Cobrança de exemplos.'
    },
    tags: ['bem de consumo', 'bem permanente']
  },
  {
    id: 'Q-DID-ADM-10-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-10',
    subtema: 'Estoque mínimo x estoque de segurança',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre estoque mínimo e estoque de segurança, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'O mínimo é um limite operacional; o de segurança é uma proteção adicional contra imprevistos.' },
      { id: 'C', texto: 'O mínimo é proteção adicional; o de segurança é limite operacional.' },
      { id: 'D', texto: 'Nenhum dos dois é usado na gestão de estoques.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'MÍNIMO: limite operacional abaixo do qual não se deve operar. SEGURANÇA: parcela adicional para cobrir imprevistos.',
      incorretas: { A: 'São conceitos distintos.', C: 'Inverte.', D: 'Ambos são usados.' },
      conceitoCobrado: 'Estoque mínimo x segurança',
      pegadinha: 'Inverter ou igualar.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['estoque mínimo', 'estoque de segurança']
  },
  {
    id: 'Q-DID-ADM-10-003',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-10',
    subtema: 'Tombamento x inventário',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre tombamento e inventário, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Tombamento atribui número patrimonial ao bem (identificação); inventário é a conferência física (contagem e conciliação).' },
      { id: 'C', texto: 'Tombamento é a conferência; inventário é a identificação.' },
      { id: 'D', texto: 'Nenhum dos dois é usado na gestão patrimonial.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'TOMBAMENTO: atribui número patrimonial (identificação). INVENTÁRIO: conferência física e conciliação com os registros.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'Ambos são usados.' },
      conceitoCobrado: 'Tombamento x inventário',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['tombamento', 'inventário']
  },

  /* ============================================================
     ADM-11 — Gestão de Processos
  ============================================================ */
  {
    id: 'Q-DID-ADM-11-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-11',
    subtema: 'Processo x projeto',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a diferença entre processo e projeto, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Processo é contínuo e repetitivo; projeto é temporário e único, com começo, meio e fim.' },
      { id: 'C', texto: 'Processo é temporário; projeto é contínuo.' },
      { id: 'D', texto: 'Projetos não têm prazo definido.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'PROCESSO: contínuo, repetitivo. PROJETO: temporário, único, com começo/meio/fim.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'Projetos têm prazo.' },
      conceitoCobrado: 'Processo x projeto',
      pegadinha: 'Inverter ou igualar.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['processo', 'projeto']
  },
  {
    id: 'Q-DID-ADM-11-002',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-11',
    subtema: 'Processos finalísticos x de apoio',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a classificação dos processos, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Finalísticos dão suporte aos de apoio.' },
      { id: 'B', texto: 'Finalísticos geram valor direto ao cliente/cidadão; de apoio dão suporte interno (RH, compras, TI).' },
      { id: 'C', texto: 'Só existem processos de apoio.' },
      { id: 'D', texto: 'Finalísticos são exclusivos do setor privado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'FINALÍSTICOS: valor direto ao cliente/cidadão. DE APOIO: suporte interno.',
      incorretas: { A: 'Inverte.', C: 'Existem os dois tipos.', D: 'Existem em qualquer organização.' },
      conceitoCobrado: 'Processos finalísticos x apoio',
      pegadinha: 'Inverter a relação.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['processo finalístico', 'processo de apoio']
  },
  {
    id: 'Q-DID-ADM-11-003',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-11',
    subtema: 'Atividade x tarefa',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre atividade e tarefa, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Atividade é unidade de trabalho dentro do processo; tarefa é sua subdivisão, com execução individual.' },
      { id: 'C', texto: 'Tarefa é mais ampla que atividade.' },
      { id: 'D', texto: 'Atividade é a execução individual.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'ATIVIDADE: unidade de trabalho dentro do processo. TAREFA: subdivisão, execução individual.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'A tarefa é a execução individual.' },
      conceitoCobrado: 'Atividade x tarefa',
      pegadinha: 'Inverter a hierarquia.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['atividade', 'tarefa']
  },
  {
    id: 'Q-DID-ADM-11-004',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-11',
    subtema: 'Melhoria contínua x reengenharia',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre melhoria contínua e reengenharia, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Melhoria contínua é incremental; reengenharia é radical (redesenho do zero).' },
      { id: 'C', texto: 'Melhoria contínua é radical; reengenharia é incremental.' },
      { id: 'D', texto: 'Ambas eliminam a necessidade de processos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'MELHORIA CONTÍNUA: incremental (kaizen). REENGENHARIA: radical, com ruptura.',
      incorretas: { A: 'São distintas.', C: 'Inverte.', D: 'Ambas atuam sobre processos.' },
      conceitoCobrado: 'Melhoria contínua x reengenharia',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['melhoria contínua', 'reengenharia']
  },
  {
    id: 'Q-DID-ADM-11-005',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-11',
    subtema: 'Gestão funcional x gestão por processos',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a gestão funcional e a gestão por processos, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'A funcional organiza por departamentos (silos); a por processos organiza por fluxo ponta a ponta, com foco no valor entregue.' },
      { id: 'C', texto: 'A por processos organiza por departamentos.' },
      { id: 'D', texto: 'A funcional olha o fluxo ponta a ponta.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'FUNCIONAL: departamentos, com risco de silos. POR PROCESSOS: fluxo ponta a ponta, com foco no valor.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'Inverte.' },
      conceitoCobrado: 'Gestão funcional x por processos',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['gestão funcional', 'gestão por processos']
  },
  {
    id: 'Q-DID-ADM-11-006',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-11',
    subtema: 'Fluxograma',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'O fluxograma é:',
    alternativas: [
      { id: 'A', texto: 'Uma ferramenta de representação visual do fluxo de um processo.' },
      { id: 'B', texto: 'Um indicador financeiro.' },
      { id: 'C', texto: 'Uma técnica de avaliação de desempenho.' },
      { id: 'D', texto: 'Um tipo de organograma.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'O FLUXOGRAMA é a representação visual do fluxo de um processo, com símbolos padronizados.',
      incorretas: { B: 'Não é indicador financeiro.', C: 'Não é avaliação de desempenho.', D: 'Organograma representa estrutura; fluxograma representa processo.' },
      conceitoCobrado: 'Fluxograma',
      pegadinha: 'Confundir com organograma.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['fluxograma']
  },
  {
    id: 'Q-DID-ADM-11-007',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-11',
    subtema: 'Gargalo',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o gargalo de um processo, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É a etapa que limita a capacidade total do processo, onde há acúmulo ou espera.' },
      { id: 'B', texto: 'É a primeira etapa do processo.' },
      { id: 'C', texto: 'É a última etapa do processo.' },
      { id: 'D', texto: 'É uma etapa sem impacto no desempenho.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'GARGALO: etapa que limita a capacidade total — está onde há acúmulo/espera. É por ali que a melhoria deve começar.',
      incorretas: { B: 'Não é necessariamente a primeira.', C: 'Não é necessariamente a última.', D: 'Tem grande impacto.' },
      conceitoCobrado: 'Gargalo',
      pegadinha: 'Confundir gargalo com primeira ou última etapa.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['gargalo']
  },
  {
    id: 'Q-DID-ADM-11-008',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-11',
    subtema: 'Mapeamento de processos (AS-IS / TO-BE)',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o mapeamento de processos, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'AS-IS representa o processo como é hoje; TO-BE representa o processo como deveria ser.' },
      { id: 'B', texto: 'AS-IS representa o futuro; TO-BE representa o presente.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'Dispensa o uso de fluxogramas.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'AS-IS: como é hoje. TO-BE: como deveria ser (após a melhoria).',
      incorretas: { B: 'Inverte.', C: 'São distintos.', D: 'O fluxograma é ferramenta típica.' },
      conceitoCobrado: 'Mapeamento de processos',
      pegadinha: 'Inverter AS-IS e TO-BE.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['AS-IS', 'TO-BE', 'mapeamento']
  },

  /* ============================================================
     ADM-12 — Atendimento ao público e relações interpessoais
  ============================================================ */
  {
    id: 'Q-REAL-ADM-12-001',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-12',
    banca: 'FEPESE', orgao: 'Prefeitura de Florianópolis/SC', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'FEPESE 2026 — Prefeitura de Florianópolis/SC — Assistente Administrativo' },
    subtema: 'Expedição de documentos',
    dificuldade: 1, prioridade: 'media',
    enunciado: 'Assinale a alternativa que descreve corretamente a atividade de expedição de documentos, essencial nas rotinas administrativas de um órgão público:',
    alternativas: [
      { id: 'A', texto: 'Recebimento de documentos enviados por outros órgãos.' },
      { id: 'B', texto: 'Arquivamento de processos já concluídos e encerrados.' },
      { id: 'C', texto: 'Classificação de documentos por ordem cronológica de criação.' },
      { id: 'D', texto: 'Envio formal de correspondências e documentos oficiais aos destinatários.' },
      { id: 'E', texto: 'Digitalização de processos físicos para consulta interna.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'EXPEDIÇÃO é o ENVIO formal de correspondências e documentos oficiais aos destinatários.',
      incorretas: { A: 'Recebimento é outra fase (protocolo).', B: 'Arquivamento é outra fase.', C: 'Classificação é outra fase.', E: 'Digitalização é outra atividade.' },
      conceitoCobrado: 'Expedição de documentos',
      pegadinha: 'Confundir com recebimento, arquivamento ou digitalização.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['expedição']
  },
  {
    id: 'Q-REAL-ADM-12-002',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-12',
    banca: 'FEPESE', orgao: 'Prefeitura de Florianópolis/SC', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'FEPESE 2026 — Prefeitura de Florianópolis/SC — Assistente Administrativo' },
    subtema: 'Relatórios administrativos',
    dificuldade: 1, prioridade: 'media',
    enunciado: 'A elaboração de relatórios administrativos é uma atribuição comum ao cargo de assistente administrativo. Assinale a alternativa que indica corretamente uma característica fundamental desse tipo de documento:',
    alternativas: [
      { id: 'A', texto: 'Apresentar informações de forma objetiva, organizada e com dados verificáveis.' },
      { id: 'B', texto: 'Expressar opiniões pessoais do servidor sobre os assuntos tratados.' },
      { id: 'C', texto: 'Dispensar a revisão e a aprovação de superior hierárquico.' },
      { id: 'D', texto: 'Incluir informações fictícias para complementar lacunas.' },
      { id: 'E', texto: 'Utilizar linguagem informal e formato livre de padronização.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'O relatório administrativo deve ser OBJETIVO, ORGANIZADO e com DADOS VERIFICÁVEIS — é instrumento de informação, não de opinião.',
      incorretas: { B: 'Deve evitar opiniões pessoais.', C: 'Exige revisão e aprovação.', D: 'Não deve conter ficção.', E: 'Linguagem formal e padronizada.' },
      conceitoCobrado: 'Relatórios administrativos',
      pegadinha: 'Admitir opinião pessoal ou ficção.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['relatórios']
  },
  {
    id: 'Q-REAL-ADM-12-003',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-12',
    banca: 'FEPESE', orgao: 'Prefeitura de Florianópolis/SC', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'FEPESE 2026 — Prefeitura de Florianópolis/SC — Assistente Administrativo' },
    subtema: 'Escuta ativa',
    dificuldade: 1, prioridade: 'media',
    enunciado: 'A escuta ativa é uma habilidade de comunicação essencial para o servidor que realiza atendimento ao público. Assinale a alternativa que define corretamente essa prática:',
    alternativas: [
      { id: 'A', texto: 'Ouvir parcialmente e antecipar a resposta antes do término da fala.' },
      { id: 'B', texto: 'Ouvir com atenção, demonstrar interesse genuíno e compreender a demanda do cidadão.' },
      { id: 'C', texto: 'Interromper o cidadão para agilizar o atendimento.' },
      { id: 'D', texto: 'Responder de forma padronizada sem considerar a situação específica.' },
      { id: 'E', texto: 'Desviar a atenção para outras tarefas durante o atendimento.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'ESCUTA ATIVA é ouvir com atenção, demonstrar interesse genuíno e compreender a demanda do cidadão.',
      incorretas: { A: 'Antecipar a resposta é o oposto.', C: 'Interromper é antiético.', D: 'A resposta deve ser contextualizada.', E: 'Desviar a atenção compromete o atendimento.' },
      conceitoCobrado: 'Escuta ativa',
      pegadinha: 'Confundir com resposta padronizada ou interrupção.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['escuta ativa']
  },
  {
    id: 'Q-REAL-ADM-12-004',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-12',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Fechos da redação oficial',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'A redação oficial admite dois fechos para as comunicações: Respeitosamente, empregado nas correspondências dirigidas a autoridades de hierarquia superior; e Atenciosamente, utilizado nas correspondências destinadas a autoridades de mesma hierarquia ou de hierarquia inferior.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'A',
    explicacao: {
      correta: 'CERTO. "Respeitosamente" para superior; "Atenciosamente" para mesma hierarquia ou inferior — conforme o Manual de Redação da Presidência da República.',
      incorretas: { B: 'A regra está correta.' },
      conceitoCobrado: 'Fechos da redação oficial',
      pegadinha: 'Inverter os fechos.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['fechos', 'redação oficial']
  },
  {
    id: 'Q-REAL-ADM-12-005',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-12',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Ofício',
    dificuldade: 1, prioridade: 'media',
    enunciado: 'O ofício é o expediente utilizado para a comunicação oficial entre órgãos da Administração Pública e, também, entre a Administração Pública e particulares, observadas as normas de redação oficial.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'A',
    explicacao: {
      correta: 'CERTO. O ofício é o documento de comunicação oficial entre órgãos públicos e destes com particulares.',
      incorretas: { B: 'A definição está correta.' },
      conceitoCobrado: 'Ofício',
      pegadinha: 'Restringir o ofício a um único destinatário.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['ofício']
  },
  {
    id: 'Q-REAL-ADM-12-006',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-12',
    banca: 'FAFIPA', orgao: 'Prefeitura de Ivaiporã/PR', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'FAFIPA 2026 — Prefeitura de Ivaiporã/PR — Auxiliar Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Requerimento',
    dificuldade: 1, prioridade: 'media',
    enunciado: 'Sobre os formatos de documentos oficiais, assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'O ofício registra, de maneira circunstanciada, os fatos e manifestações ocorridas durante reuniões.' },
      { id: 'B', texto: 'O despacho registra acontecimentos e deliberações de reuniões.' },
      { id: 'C', texto: 'A ata registra determinações administrativas destinadas à execução de providências.' },
      { id: 'D', texto: 'A portaria formaliza solicitações individuais de servidores.' },
      { id: 'E', texto: 'O requerimento formaliza pedido ou solicitação do interessado perante a autoridade ou órgão competente.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'O REQUERIMENTO formaliza pedido ou solicitação do interessado.',
      incorretas: { A: 'Descreve a ATA, não o ofício.', B: 'Descreve a ATA, não o despacho.', C: 'Descreve a PORTARIA, não a ata.', D: 'Descreve o REQUERIMENTO, não a portaria.' },
      conceitoCobrado: 'Documentos oficiais',
      pegadinha: 'Confundir os tipos de documento.',
      comoApareceEmConcurso: 'Cobrança de definição.'
    },
    tags: ['requerimento', 'documentos oficiais']
  },
  {
    id: 'Q-REAL-ADM-12-007',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-12',
    banca: 'FAFIPA', orgao: 'Prefeitura de Ivaiporã/PR', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'FAFIPA 2026 — Prefeitura de Ivaiporã/PR — Auxiliar Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Atendimento telefônico',
    dificuldade: 1, prioridade: 'media',
    enunciado: 'Sobre as regras de operação e encaminhamento de chamadas no atendimento telefônico em órgãos públicos, assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'Deve-se atender prontamente à chamada, identificar o nome do órgão público, saudar o interlocutor com polidez e buscar auxiliá-lo.' },
      { id: 'B', texto: 'Deve-se deixar as chamadas em espera prolongada sem prestar satisfação.' },
      { id: 'C', texto: 'Deve-se ignorar as ligações externas para focar em digitação de memorandos.' },
      { id: 'D', texto: 'Deve-se usar linguagem excessivamente informal e gírias.' },
      { id: 'E', texto: 'Deve-se transferir imediatamente para a assessoria jurídica antes de triagem.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Atender prontamente, identificar o órgão, saudar com polidez e auxiliar é a conduta adequada.',
      incorretas: { B: 'Espera prolongada sem satisfação é inadequada.', C: 'Ignorar ligações é inadequado.', D: 'Linguagem informal e gírias são inadequadas.', E: 'Transferir sem triagem é inadequado.' },
      conceitoCobrado: 'Atendimento telefônico',
      pegadinha: 'Admitir condutas antiéticas.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['atendimento telefônico']
  },
  {
    id: 'Q-DID-ADM-12-001',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-12',
    subtema: 'Cidadão como usuário de direitos',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre a natureza da relação entre o servidor público e o cidadão no atendimento, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O cidadão é "cliente" do Estado, e o atendimento é uma mercadoria.' },
      { id: 'B', texto: 'O cidadão é usuário de DIREITOS — o serviço é dever do Estado, não favor.' },
      { id: 'C', texto: 'O cidadão não tem direitos no atendimento público.' },
      { id: 'D', texto: 'O atendimento público segue a mesma lógica do privado, com foco no consumidor.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O cidadão é USUÁRIO DE DIREITOS — o serviço é dever do Estado, regido pelo LIMPE. Não é cliente nem favor.',
      incorretas: { A: 'Cidadão não é cliente.', C: 'Tem direitos.', D: 'A lógica é de cidadania, não de consumo.' },
      conceitoCobrado: 'Cidadão como usuário de direitos',
      pegadinha: 'Tratar o cidadão como cliente.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['cidadania', 'atendimento público']
  },

  /* ============================================================
     AP-13 — Conceitos fundamentais de Administração Pública
  ============================================================ */
  {
    id: 'Q-DID-AP-13-001',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-13',
    subtema: 'Sentidos objetivo x subjetivo',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre os sentidos objetivo e subjetivo da Administração Pública, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Objetivo designa a atividade administrativa (o que se faz); subjetivo designa o conjunto de órgãos e pessoas (quem faz).' },
      { id: 'B', texto: 'Objetivo designa os órgãos; subjetivo, a atividade.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'Ambos designam apenas o Poder Executivo.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'OBJETIVO (material): a ATIVIDADE. SUBJETIVO (formal/orgânico): os ÓRGÃOS E PESSOAS.',
      incorretas: { B: 'Inverte.', C: 'São distintos.', D: 'Não se confundem com "restrito".' },
      conceitoCobrado: 'Sentidos da Administração Pública',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['sentido objetivo', 'sentido subjetivo']
  },
  {
    id: 'Q-DID-AP-13-002',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-13',
    subtema: 'Sentido amplo x restrito',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre os sentidos amplo e restrito de Administração Pública, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Amplo: apenas o Executivo; restrito: os três Poderes.' },
      { id: 'B', texto: 'Amplo: os três Poderes quando exercem função administrativa + órgãos auxiliares; restrito: apenas o Executivo.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'Restrito: os três Poderes.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'AMPLO: os três Poderes em função administrativa + órgãos auxiliares. RESTRITO: apenas o Executivo.',
      incorretas: { A: 'Inverte.', C: 'São distintos.', D: 'Restrito = Executivo.' },
      conceitoCobrado: 'Sentido amplo x restrito',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['sentido amplo', 'sentido restrito']
  },
  {
    id: 'Q-DID-AP-13-003',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-13',
    subtema: 'Administração direta x indireta',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a Administração direta e a indireta, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Direta: entes federativos e órgãos (sem personalidade própria); indireta: autarquias, fundações, empresas públicas e SEM (com personalidade própria).' },
      { id: 'B', texto: 'Direta: entidades com personalidade própria; indireta: entes federativos.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'Ambas são compostas apenas por órgãos.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'DIRETA: entes + órgãos (sem personalidade). INDIRETA: entidades (com personalidade).',
      incorretas: { B: 'Inverte.', C: 'São distintas.', D: 'A indireta tem entidades, não apenas órgãos.' },
      conceitoCobrado: 'Administração direta x indireta',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['administração direta', 'indireta']
  },
  {
    id: 'Q-DID-AP-13-004',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-13',
    subtema: 'Órgãos x entidades',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre órgãos e entidades, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Órgãos têm personalidade própria; entidades não.' },
      { id: 'B', texto: 'Órgãos NÃO têm personalidade própria; entidades têm personalidade própria.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'Ambos integram apenas a Administração Indireta.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'ÓRGÃOS: sem personalidade própria. ENTIDADES: com personalidade própria (autarquias, fundações, EP, SEM).',
      incorretas: { A: 'Inverte.', C: 'São distintos.', D: 'Órgãos integram a direta; entidades, a indireta.' },
      conceitoCobrado: 'Órgãos x entidades',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['órgão', 'entidade']
  },
  {
    id: 'Q-DID-AP-13-005',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-13',
    subtema: 'Interesse público x interesse do Estado',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre a distinção entre interesse público e interesse do Estado, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Interesse público é o da COLETIVIDADE; interesse do Estado é o da máquina administrativa — não se confundem, e o Estado é instrumento para realizar o interesse público.' },
      { id: 'C', texto: 'Interesse do Estado é o da coletividade.' },
      { id: 'D', texto: 'Só existe interesse do Estado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'INTERESSE PÚBLICO: coletividade. INTERESSE DO ESTADO: máquina administrativa. O Estado é meio, não fim.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'Existe o interesse público.' },
      conceitoCobrado: 'Interesse público x interesse do Estado',
      pegadinha: 'Confundir os dois.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['interesse público', 'interesse do Estado']
  },
  {
    id: 'Q-DID-AP-13-006',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-13',
    subtema: 'Supremacia x indisponibilidade',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a supremacia e a indisponibilidade do interesse público, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Supremacia fundamenta prerrogativas; indisponibilidade fundamenta restrições.' },
      { id: 'B', texto: 'Ambas fundamentam prerrogativas.' },
      { id: 'C', texto: 'Ambas fundamentam restrições.' },
      { id: 'D', texto: 'Não existem na CF/88.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'SUPREMACIA: prerrogativas (desapropriação, cláusulas exorbitantes). INDISPONIBILIDADE: restrições (só age conforme a lei).',
      incorretas: { B: 'Incompleta.', C: 'Incompleta.', D: 'São pilares do regime jurídico-administrativo.' },
      conceitoCobrado: 'Supremacia x indisponibilidade',
      pegadinha: 'Inverter as funções.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['supremacia', 'indisponibilidade']
  },
  {
    id: 'Q-DID-AP-13-007',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-13',
    subtema: 'Teoria do Órgão',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre a Teoria do Órgão (ou da imputação), é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A conduta do agente público é imputada à pessoa jurídica a que pertence o órgão.' },
      { id: 'B', texto: 'A conduta do agente é imputada a ele próprio.' },
      { id: 'C', texto: 'O órgão tem personalidade própria.' },
      { id: 'D', texto: 'A vítima deve acionar o agente diretamente.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Pela Teoria do Órgão, a conduta do agente é imputada à PESSOA JURÍDICA. A vítima aciona o Estado; o Estado, depois, pode regressar contra o agente.',
      incorretas: { B: 'A imputação é ao Estado.', C: 'Órgão não tem personalidade.', D: 'A vítima aciona o Estado.' },
      conceitoCobrado: 'Teoria do Órgão',
      pegadinha: 'Achar que a vítima aciona o agente diretamente.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['teoria do órgão', 'imputação']
  },
  {
    id: 'Q-DID-AP-13-008',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-13',
    subtema: 'Aplicação em cenário',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma prefeitura (a) emite alvará; (b) cria autarquia para transporte; (c) capacita fiscais; (d) compra computadores. Sobre essas situações, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: '(a) é atividade administrativa (sentido objetivo); (b) é criação de entidade da indireta; (c) e (d) são atos de gestão interna da direta.' },
      { id: 'B', texto: '(a) e (b) são Administração Direta; (c) e (d) são indireta.' },
      { id: 'C', texto: 'Todas ocorrem na indireta.' },
      { id: 'D', texto: '(b) é Administração Direta, pois a autarquia integra a Prefeitura.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: '(a) atividade (sentido objetivo); (b) criação de entidade da indireta; (c) e (d) atos de gestão interna da direta.',
      incorretas: { B: 'Inverte.', C: 'Todas na indireta? Não.', D: 'Autarquia é indireta.' },
      conceitoCobrado: 'Aplicação dos conceitos',
      pegadinha: 'Classificar a autarquia como direta.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['direta', 'indireta', 'sentido objetivo']
  },

  /* ============================================================
     AP-14 — Modelos de Administração Pública
  ============================================================ */
  {
    id: 'Q-REAL-AP-14-001',
    tipo: 'REAL', area: 'AP', moduloId: 'AP-14',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Modelos de gestão pública',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma organização pública apresentou, ao longo de sua trajetória, as seguintes práticas: I. ocupação de cargos estratégicos por relações de confiança pessoal, com uso da estrutura administrativa para interesses particulares; II. atuação orientada por regulamentos detalhados, com ênfase na formalização de procedimentos e na observância rigorosa da hierarquia; III. gestão com contratos de desempenho, indicadores de eficiência, descentralização e avaliação por resultados; IV. ampliação do controle sobre os agentes por meio da padronização de rotinas e definição de competências formais, buscando previsibilidade. A correta associação entre as situações e os modelos é:',
    alternativas: [
      { id: 'A', texto: 'I e II: patrimonialista; III e IV: gerencial.' },
      { id: 'B', texto: 'I: patrimonialista; II e IV: burocrático; III: gerencial.' },
      { id: 'C', texto: 'I e III: patrimonialista; II e IV: burocrático.' },
      { id: 'D', texto: 'II: patrimonialista; I e IV: burocrático; III: gerencial.' },
      { id: 'E', texto: 'I: burocrático; II: gerencial; III e IV: patrimonialista.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'I = PATRIMONIALISTA (confusão público/privado, pessoalidade). II e IV = BUROCRÁTICO (regulamentos, hierarquia, padronização). III = GERENCIAL (contratos de desempenho, indicadores, resultados).',
      incorretas: { A: 'Inverte II e III.', C: 'III não é patrimonialista.', D: 'II não é patrimonialista.', E: 'Inverte.' },
      conceitoCobrado: 'Modelos de Administração Pública',
      pegadinha: 'Confundir burocrático com gerencial e patrimonialista com burocrático.',
      comoApareceEmConcurso: 'Associação de práticas a modelos.'
    },
    tags: ['patrimonialismo', 'burocracia', 'gerencial']
  },
  {
    id: 'Q-REAL-AP-14-002',
    tipo: 'REAL', area: 'AP', moduloId: 'AP-14',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Modelos de gestão pública — associação',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre os modelos de gestão pública e suas características predominantes, assinale a alternativa que apresenta a correta associação:',
    alternativas: [
      { id: 'A', texto: 'I e II: patrimonialista; III e IV: gerencial.' },
      { id: 'B', texto: 'I: patrimonialista; II e IV: burocrático; III: gerencial.' },
      { id: 'C', texto: 'I e III: patrimonialista; II e IV: burocrático.' },
      { id: 'D', texto: 'II: patrimonialista; I e IV: burocrático; III: gerencial.' },
      { id: 'E', texto: 'I: burocrático; II: gerencial; III e IV: patrimonialista.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'I = patrimonialista; II e IV = burocrático; III = gerencial. A alternativa B é a única compatível com a classificação.',
      incorretas: { A: 'Inverte II e III.', C: 'III não é patrimonialista.', D: 'II não é patrimonialista.', E: 'Inverte.' },
      conceitoCobrado: 'Modelos de Administração Pública',
      pegadinha: 'Confundir as práticas e seus modelos.',
      comoApareceEmConcurso: 'Associação.'
    },
    tags: ['patrimonialismo', 'burocracia', 'gerencial']
  },
  {
    id: 'Q-DID-AP-14-001',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-14',
    subtema: 'Patrimonialismo',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'Sobre o patrimonialismo, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É marcado pela confusão entre o público e o privado e pela pessoalidade na ocupação de cargos.' },
      { id: 'B', texto: 'É marcado pela impessoalidade e pela meritocracia.' },
      { id: 'C', texto: 'É o modelo atual da Administração Pública brasileira.' },
      { id: 'D', texto: 'Surgiu após a Reforma de 1995.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'O PATRIMONIALISMO é o modelo pré-burocrático: confusão público/privado, pessoalidade, nepotismo.',
      incorretas: { B: 'Descreve a burocracia.', C: 'Foi superado (embora práticas persistam).', D: 'É anterior.' },
      conceitoCobrado: 'Patrimonialismo',
      pegadinha: 'Confundir com burocracia.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['patrimonialismo']
  },
  {
    id: 'Q-DID-AP-14-002',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-14',
    subtema: 'Burocracia',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a burocracia weberiana, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Caracteriza-se pela impessoalidade, meritocracia, formalismo, hierarquia e regras escritas.' },
      { id: 'B', texto: 'Caracteriza-se pela confusão público/privado.' },
      { id: 'C', texto: 'Foi introduzida no Brasil pela Reforma de 1995.' },
      { id: 'D', texto: 'Tem como foco exclusivo os resultados.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A BUROCRACIA tem como marcas: impessoalidade, meritocracia, formalismo, hierarquia e regras escritas.',
      incorretas: { B: 'Descreve o patrimonialismo.', C: 'Foi introduzida em 1936 (Reforma do DASP).', D: 'Foco em resultados é gerencial.' },
      conceitoCobrado: 'Burocracia',
      pegadinha: 'Confundir com patrimonialismo ou gerencial.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['burocracia', 'Weber']
  },
  {
    id: 'Q-DID-AP-14-003',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-14',
    subtema: 'Administração gerencial',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a administração gerencial (nova gestão pública), é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Foca em resultados, eficiência, qualidade e satisfação do cidadão, com descentralização e avaliação de desempenho.' },
      { id: 'B', texto: 'Foca em procedimentos, formalismo e hierarquia rígida.' },
      { id: 'C', texto: 'Foi introduzida no Brasil pela Reforma de 1936.' },
      { id: 'D', texto: 'Substituiu completamente a burocracia.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A GERENCIAL foca em RESULTADOS, eficiência, qualidade, satisfação do cidadão, com descentralização e avaliação.',
      incorretas: { B: 'Descreve a burocracia.', C: 'Foi introduzida pela Reforma de 1995 (Bresser-Pereira) e EC 19/1998.', D: 'Não substituiu por completo — convive com práticas burocráticas.' },
      conceitoCobrado: 'Administração gerencial',
      pegadinha: 'Confundir com burocracia ou dizer que substituiu por completo.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['gerencial', 'nova gestão pública']
  },
  {
    id: 'Q-DID-AP-14-004',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-14',
    subtema: 'Reforma de 1936',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'A Reforma Administrativa de 1936, no Brasil, está associada:',
    alternativas: [
      { id: 'A', texto: 'À introdução da burocracia weberiana, com a criação do DASP.' },
      { id: 'B', texto: 'À introdução da administração gerencial.' },
      { id: 'C', texto: 'À criação do CNJ.' },
      { id: 'D', texto: 'À reforma tributária.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A Reforma de 1936 introduziu a BUROCRACIA weberiana no Brasil, com a criação do DASP (Departamento Administrativo do Serviço Público).',
      incorretas: { B: 'A gerencial é de 1995.', C: 'CNJ foi criado pela EC 45/2004.', D: 'Reforma tributária é outra.' },
      conceitoCobrado: 'Reforma de 1936',
      pegadinha: 'Confundir com a Reforma de 1995.',
      comoApareceEmConcurso: 'Cobrança de associação.'
    },
    tags: ['reforma 1936', 'DASP']
  },
  {
    id: 'Q-DID-AP-14-005',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-14',
    subtema: 'Reforma de 1995 / EC 19',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a Reforma Administrativa de 1995 (Plano Diretor da Reforma do Aparelho do Estado) e a EC 19/1998, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Introduziram a administração gerencial no Brasil, com foco em resultados, descentralização e avaliação de desempenho; a EC 19/1998 inseriu a eficiência no caput do art. 37.' },
      { id: 'B', texto: 'Introduziram a burocracia weberiana no Brasil.' },
      { id: 'C', texto: 'Eliminaram o concurso público.' },
      { id: 'D', texto: 'Criaram o CNJ.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A Reforma de 1995 (Bresser-Pereira) e a EC 19/1998 introduziram a GERENCIAL: foco em resultados, descentralização, avaliação de desempenho; e a EC 19/1998 inseriu a EFICIÊNCIA no art. 37.',
      incorretas: { B: 'A burocracia foi introduzida em 1936.', C: 'O concurso foi mantido.', D: 'O CNJ foi criado pela EC 45/2004.' },
      conceitoCobrado: 'Reforma de 1995 / EC 19',
      pegadinha: 'Confundir com a Reforma de 1936 ou com a EC 45.',
      comoApareceEmConcurso: 'Cobrança de associação.'
    },
    tags: ['reforma 1995', 'EC 19/1998', 'gerencial']
  },
  {
    id: 'Q-DID-AP-14-006',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-14',
    subtema: 'Comparação entre os modelos',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a comparação entre patrimonialismo, burocracia e administração gerencial, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Patrimonialismo foca em pessoalidade; burocracia, em procedimentos; gerencial, em resultados.' },
      { id: 'B', texto: 'Patrimonialismo foca em resultados; burocracia, em pessoalidade; gerencial, em procedimentos.' },
      { id: 'C', texto: 'Todos os três focam em procedimentos.' },
      { id: 'D', texto: 'Todos os três focam em resultados.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'PATRIMONIALISMO: pessoalidade. BUROCRACIA: procedimentos. GERENCIAL: resultados.',
      incorretas: { B: 'Inverte.', C: 'Só a burocracia foca em procedimentos.', D: 'Só a gerencial foca em resultados.' },
      conceitoCobrado: 'Comparação entre os modelos',
      pegadinha: 'Inverter os focos.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['patrimonialismo', 'burocracia', 'gerencial']
  },
  /* ============================================================
     DA-15 — Princípios da Administração Pública
  ============================================================ */
  {
    id: 'Q-REAL-DA-15-001',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-15',
    banca: 'FEPESE', orgao: 'Prefeitura de Florianópolis/SC', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'FEPESE 2026 — Prefeitura de Florianópolis/SC — Assistente Administrativo' },
    subtema: 'Princípio da publicidade',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'O princípio constitucional que determina a divulgação oficial dos atos praticados pela Administração Pública, como forma de garantir transparência e controle social, é denominado princípio da:',
    alternativas: [
      { id: 'A', texto: 'Legalidade.' },
      { id: 'B', texto: 'Eficiência.' },
      { id: 'C', texto: 'Impessoalidade.' },
      { id: 'D', texto: 'Moralidade.' },
      { id: 'E', texto: 'Publicidade.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'A divulgação oficial dos atos para transparência e controle social é o princípio da PUBLICIDADE.',
      incorretas: { A: 'Legalidade trata da conformidade com a lei.', B: 'Eficiência trata de resultados.', C: 'Impessoalidade trata da objetividade.', D: 'Moralidade trata da ética.' },
      conceitoCobrado: 'Princípio da publicidade',
      pegadinha: 'Confundir com transparência (que é uma consequência da publicidade).',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['publicidade', 'LIMPE']
  },
  {
    id: 'Q-REAL-DA-15-002',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-15',
    banca: 'FEPESE', orgao: 'Prefeitura de Florianópolis/SC', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'FEPESE 2026 — Prefeitura de Florianópolis/SC — Assistente Administrativo' },
    subtema: 'Princípio da eficiência',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'O princípio da eficiência, previsto na Constituição Federal, orienta a Administração Pública a buscar os melhores resultados na prestação dos serviços públicos. Assinale a alternativa que indica corretamente o significado prático desse princípio:',
    alternativas: [
      { id: 'A', texto: 'Autorizar o gestor a agir fora dos limites legais para obter resultados.' },
      { id: 'B', texto: 'Permitir a contratação de servidores sem concurso em situações rotineiras.' },
      { id: 'C', texto: 'Prestar serviços com qualidade, rapidez e aproveitamento racional dos recursos.' },
      { id: 'D', texto: 'Substituir o planejamento pela improvisação para agilizar processos.' },
      { id: 'E', texto: 'Eliminar controles internos para desburocratizar a gestão pública.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'EFICIÊNCIA = prestar serviços com qualidade, rapidez e aproveitamento racional dos recursos.',
      incorretas: { A: 'A eficiência não autoriza agir fora da lei.', B: 'Concurso público permanece obrigatório.', D: 'A eficiência não dispensa o planejamento.', E: 'A eficiência não elimina os controles.' },
      conceitoCobrado: 'Princípio da eficiência',
      pegadinha: 'Confundir eficiência com dispensa de legalidade, concurso ou controle.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['eficiência', 'LIMPE']
  },
  {
    id: 'Q-REAL-DA-15-003',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-15',
    banca: 'Avança SP', orgao: 'Autarquia Municipal de Saúde de Itapecerica da Serra/SP', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Avança SP 2026 — Autarquia Municipal de Saúde de Itapecerica da Serra/SP — Assistente Administrativo' },
    subtema: 'Impessoalidade x publicidade (promoção pessoal)',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Um servidor público, ao atender usuários externos, decide priorizar um amigo em detrimento dos demais que aguardavam na fila regular. Além disso, solicita que colegas divulguem em redes sociais institucionais uma ação administrativa destacando seu nome e imagem como responsável direto pelo serviço prestado. Sobre a conduta e os princípios da Administração Pública, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A conduta é adequada, pois o princípio da eficiência permite flexibilizar a ordem de atendimento.' },
      { id: 'B', texto: 'A priorização do amigo fere a legalidade, e a divulgação da imagem é permitida pela publicidade.' },
      { id: 'C', texto: 'As duas condutas violam a impessoalidade, pois demonstram favorecimento pessoal e promoção individual no âmbito da Administração.' },
      { id: 'D', texto: 'A situação viola apenas a moralidade, sem impacto sobre outros princípios.' },
      { id: 'E', texto: 'Nenhuma das condutas viola princípios administrativos, pois o servidor tem discricionariedade.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'As duas condutas violam a IMPESSOALIDADE: o favorecimento pessoal (amigo na fila) e a promoção pessoal (art. 37, §1º, CF).',
      incorretas: { A: 'A eficiência não autoriza favorecimento.', B: 'A promoção pessoal é vedada.', D: 'Além da moralidade, a impessoalidade também é violada.', E: 'A discricionariedade não autoriza favorecimento nem promoção pessoal.' },
      conceitoCobrado: 'Impessoalidade (objetividade e vedação de promoção pessoal)',
      pegadinha: 'Reduzir a violação a um único princípio.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['impessoalidade', 'promoção pessoal']
  },
  {
    id: 'Q-REAL-DA-15-004',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-15',
    banca: 'FAFIPA', orgao: 'Prefeitura de Ivaiporã/PR', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'FAFIPA 2026 — Prefeitura de Ivaiporã/PR — Auxiliar Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'LIMPE (art. 37, caput)',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'O art. 37, caput, da Constituição estabelece que a Administração Pública obedecerá a quais princípios?',
    alternativas: [
      { id: 'A', texto: 'Legalidade, hierarquia, autonomia, publicidade e eficiência.' },
      { id: 'B', texto: 'Legalidade, impessoalidade, economicidade, publicidade e eficiência.' },
      { id: 'C', texto: 'Moralidade, autonomia, transparência, eficiência e hierarquia.' },
      { id: 'D', texto: 'Impessoalidade, publicidade, autonomia, legalidade e razoabilidade.' },
      { id: 'E', texto: 'Legalidade, impessoalidade, moralidade, publicidade e eficiência.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'São os princípios do LIMPE: LEGALIDADE, IMPESSOALIDADE, MORALIDADE, PUBLICIDADE e EFICIÊNCIA.',
      incorretas: { A: 'Hierarquia e autonomia não estão no caput.', B: 'Economicidade não está no caput.', C: 'Autonomia, transparência e hierarquia não estão no caput.', D: 'Autonomia e razoabilidade não estão no caput.' },
      conceitoCobrado: 'LIMPE',
      pegadinha: 'Incluir princípios implícitos ou administrativos no rol expresso.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['LIMPE', 'art. 37']
  },
  {
    id: 'Q-DID-DA-15-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-15',
    subtema: 'Legalidade administrativa x legalidade do particular',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o princípio da legalidade, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A legalidade administrativa é idêntica à do particular: ambos podem fazer tudo o que a lei não proíbe.' },
      { id: 'B', texto: 'A legalidade do particular permite fazer tudo o que a lei não proíbe; a legalidade administrativa exige que a Administração só faça o que a lei autoriza ou determina.' },
      { id: 'C', texto: 'A Administração pode fazer tudo o que a lei não proíbe, desde que motive o ato.' },
      { id: 'D', texto: 'O particular só pode fazer o que a lei autoriza, e a Administração pode fazer tudo o que a lei não proíbe.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'LEGALIDADE DO PARTICULAR: pode tudo o que a lei não proíbe. LEGALIDADE ADMINISTRATIVA: só pode o que a lei autoriza ou determina.',
      incorretas: { A: 'São diferentes.', C: 'A Administração não tem autonomia de vontade.', D: 'Inverte.' },
      conceitoCobrado: 'Legalidade administrativa x do particular',
      pegadinha: 'Inverter ou igualar.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['legalidade']
  },
  {
    id: 'Q-DID-DA-15-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-15',
    subtema: 'Moralidade',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o princípio da moralidade, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Basta o cumprimento formal da lei.' },
      { id: 'B', texto: 'Exige conduta ética, probidade e boa-fé — além do cumprimento formal da lei. Um ato pode ser legal e imoral.' },
      { id: 'C', texto: 'É sinônimo de legalidade.' },
      { id: 'D', texto: 'Não se aplica a atos administrativos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A MORALIDADE exige ética, probidade e boa-fé — vai além da legalidade formal.',
      incorretas: { A: 'A moralidade exige mais que a legalidade.', C: 'São princípios distintos.', D: 'Aplica-se a toda atuação administrativa.' },
      conceitoCobrado: 'Moralidade',
      pegadinha: 'Reduzir a moralidade ao cumprimento da lei.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['moralidade']
  },
  {
    id: 'Q-DID-DA-15-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-15',
    subtema: 'Autotutela x tutela',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre a autotutela e a tutela, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Autotutela: a Administração revê seus próprios atos. Tutela: supervisão da Administração Direta sobre a Indireta.' },
      { id: 'C', texto: 'Autotutela é a supervisão da indireta; tutela é a revisão dos próprios atos.' },
      { id: 'D', texto: 'Ambas são exercidas apenas pelo Judiciário.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'AUTOTUTELA: revisão dos PRÓPRIOS atos (Súmulas 346 e 473 do STF). TUTELA: supervisão da DIRETA sobre a INDIRETA (controle finalístico).',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'São funções administrativas.' },
      conceitoCobrado: 'Autotutela x tutela',
      pegadinha: 'Confundir os institutos.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['autotutela', 'tutela']
  },
  {
    id: 'Q-DID-DA-15-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-15',
    subtema: 'Razoabilidade x proporcionalidade',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre a razoabilidade e a proporcionalidade, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Razoabilidade é a adequação lógica entre meios e fins; proporcionalidade analisa adequação, necessidade e proporcionalidade em sentido estrito.' },
      { id: 'C', texto: 'Proporcionalidade é apenas a adequação lógica.' },
      { id: 'D', texto: 'Não se aplicam à Administração Pública.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'RAZOABILIDADE: adequação meios-fins. PROPORCIONALIDADE: três planos — adequação, necessidade e proporcionalidade em sentido estrito.',
      incorretas: { A: 'São distintos (a proporcionalidade é mais analítica).', C: 'A proporcionalidade vai além da adequação.', D: 'Aplicam-se.' },
      conceitoCobrado: 'Razoabilidade x proporcionalidade',
      pegadinha: 'Igualar ou reduzir a proporcionalidade a um único plano.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['razoabilidade', 'proporcionalidade']
  },

  /* ============================================================
     DA-16 — Organização da Administração Pública
  ============================================================ */
  {
    id: 'Q-REAL-DA-16-001',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-16',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo' },
    subtema: 'Administração Indireta — características',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'A CODERN é uma entidade vinculada à União e responsável pela administração de portos no estado do Rio Grande do Norte. Considerando sua natureza jurídica e sua posição na estrutura da Administração Pública brasileira, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Integra a Administração Pública Direta, pois presta serviços públicos essenciais e está subordinada hierarquicamente à União.' },
      { id: 'B', texto: 'Integra a Administração Pública Indireta, possui personalidade jurídica própria, patrimônio próprio e atua de forma descentralizada em relação à União.' },
      { id: 'C', texto: 'Integra a Administração Pública Indireta, porém não possui autonomia administrativa nem patrimônio próprio, estando subordinada hierarquicamente à União.' },
      { id: 'D', texto: 'Integra a Administração Pública Direta, pois executa atividades delegadas pela União, ainda que possua personalidade jurídica própria.' },
      { id: 'E', texto: 'Integra a Administração Pública Indireta, mas não possui personalidade jurídica própria, atuando apenas como órgão da União.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A CODERN é entidade da Administração INDIRETA — tem personalidade jurídica própria, patrimônio próprio e atua de forma descentralizada. Não é subordinada hierarquicamente à União (há tutela, não hierarquia).',
      incorretas: { A: 'Administração Indireta, não direta.', C: 'Tem personalidade e patrimônio próprios.', D: 'Administração Indireta.', E: 'Tem personalidade jurídica própria.' },
      conceitoCobrado: 'Administração Indireta',
      pegadinha: 'Confundir descentralização com hierarquia.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['administração indireta', 'autarquia']
  },
  {
    id: 'Q-REAL-DA-16-002',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-16',
    banca: 'Fundatec', orgao: 'Prefeitura de Porto Alegre/RS (DEMHAB)', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Fundatec 2026 — Prefeitura de Porto Alegre/RS (DEMHAB) — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Administração Pública Direta — características',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Com base em Rossi (2020), sobre as características da Administração Pública direta, assinale a alternativa INCORRETA:',
    alternativas: [
      { id: 'A', texto: 'É composta pelos seguintes entes políticos: União, Estados, Distrito Federal e Municípios.' },
      { id: 'B', texto: 'Possui competências legislativas e administrativas.' },
      { id: 'C', texto: 'Seu quadro de pessoal é composto por servidores públicos.' },
      { id: 'D', texto: 'Os entes políticos da Administração Pública direta são pessoas jurídicas de direito privado.' },
      { id: 'E', texto: 'As entidades da Administração Pública direta gozam de privilégios tributários, ou seja, têm imunidade recíproca para impostos.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está INCORRETA: os entes políticos da Administração Direta são pessoas jurídicas de DIREITO PÚBLICO, não privado.',
      incorretas: { A: 'Correta.', B: 'Correta.', C: 'Correta.', E: 'Correta.' },
      conceitoCobrado: 'Administração Direta',
      pegadinha: 'Inverter a natureza jurídica.',
      comoApareceEmConcurso: 'Cobrança de INCORRETA.'
    },
    tags: ['administração direta']
  },
  {
    id: 'Q-REAL-DA-16-003',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-16',
    banca: 'Fundatec', orgao: 'Prefeitura de Porto Alegre/RS (DEMHAB)', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Fundatec 2026 — Prefeitura de Porto Alegre/RS (DEMHAB) — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Agências reguladoras',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Segundo Rossi (2020), entre os entes integrantes da Administração Pública indireta estão as autarquias de regime especial responsáveis pela regulamentação, pelo controle e pela fiscalização de serviços públicos, atividades e bens transferidos ao setor privado. Essas autarquias se denominam:',
    alternativas: [
      { id: 'A', texto: 'Agências executoras.' },
      { id: 'B', texto: 'Agências reguladoras.' },
      { id: 'C', texto: 'Agências fundacionais.' },
      { id: 'D', texto: 'Fundações públicas.' },
      { id: 'E', texto: 'Conselhos profissionais.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'AGÊNCIAS REGULADORAS são autarquias de regime especial que regulamentam, controlam e fiscalizam serviços públicos transferidos ao setor privado.',
      incorretas: { A: 'Não é a denominação correta.', C: 'Não existe essa categoria.', D: 'Fundações são outra categoria.', E: 'Conselhos são outra categoria.' },
      conceitoCobrado: 'Agências reguladoras',
      pegadinha: 'Confundir com agências executivas (categoria distinta).',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['agências reguladoras']
  },
  {
    id: 'Q-REAL-DA-16-004',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-16',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Autarquia x descentralização x desconcentração',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'A criação de uma autarquia por lei específica, para a execução descentralizada de atividade típica do Estado, caracteriza desconcentração administrativa, pois implica a distribuição interna de competências no âmbito do ente federativo.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'B',
    explicacao: {
      correta: 'ERRADO. A criação de autarquia é DESCENTRALIZAÇÃO (criação de entidade com personalidade própria), não desconcentração (que ocorre dentro da mesma pessoa jurídica, entre órgãos).',
      incorretas: { A: 'A afirmação confunde os institutos.' },
      conceitoCobrado: 'Descentralização x desconcentração',
      pegadinha: 'Confundir os institutos.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['descentralização', 'desconcentração', 'autarquia']
  },
  {
    id: 'Q-DID-DA-16-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-16',
    subtema: 'Autarquia x fundação x EP x SEM',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre as entidades da Administração Indireta, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Empresa pública é sempre S.A.; SEM pode ser qualquer forma.' },
      { id: 'B', texto: 'Autarquia é direito público; fundação pode ser de direito público ou privado; empresa pública tem 100% de capital público; SEM tem capital misto com maioria pública, sempre S.A.' },
      { id: 'C', texto: 'Autarquia é direito privado; EP é direito público.' },
      { id: 'D', texto: 'SEM tem 100% de capital público.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'AUTARQUIA: direito público. FUNDAÇÃO: direito público ou privado. EP: 100% público, qualquer forma. SEM: misto com maioria pública, sempre S.A.',
      incorretas: { A: 'Inverte.', C: 'Inverte.', D: 'SEM tem capital misto.' },
      conceitoCobrado: 'Entidades da Administração Indireta',
      pegadinha: 'Inverter as naturezas ou as formas societárias.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['autarquia', 'fundação', 'empresa pública', 'SEM']
  },
  {
    id: 'Q-DID-DA-16-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-16',
    subtema: 'Descentralização x desconcentração',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre descentralização e desconcentração, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Descentralização é sempre interna; desconcentração é sempre externa.' },
      { id: 'B', texto: 'Descentralização envolve outra pessoa (cria entidade ou delega a particular); desconcentração é dentro da mesma pessoa, entre órgãos.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'A desconcentração cria nova pessoa jurídica.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'DESCENTRALIZAÇÃO: para OUTRA pessoa (outorga — autarquia/fundação; delegação — particular). DESCONCENTRAÇÃO: dentro da MESMA pessoa (órgãos).',
      incorretas: { A: 'Inverte.', C: 'São distintos.', D: 'A desconcentração NÃO cria nova pessoa jurídica.' },
      conceitoCobrado: 'Descentralização x desconcentração',
      pegadinha: 'Achar que desconcentração cria pessoa jurídica.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['descentralização', 'desconcentração']
  },
  {
    id: 'Q-DID-DA-16-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-16',
    subtema: 'Centralização x descentralização',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre centralização e descentralização, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Centralização: o ente executa diretamente; descentralização: o ente repassa a execução a outra pessoa.' },
      { id: 'C', texto: 'Centralização repassa a execução.' },
      { id: 'D', texto: 'Descentralização concentra as decisões.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'CENTRALIZAÇÃO: o próprio ente executa. DESCENTRALIZAÇÃO: repassa a outra pessoa (outorga ou delegação).',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'Inverte.' },
      conceitoCobrado: 'Centralização x descentralização',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['centralização', 'descentralização']
  },
  {
    id: 'Q-DID-DA-16-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-16',
    subtema: 'Teoria do Órgão',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre a Teoria do Órgão (ou da imputação), é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A conduta do agente é imputada a ele próprio.' },
      { id: 'B', texto: 'A conduta do agente é imputada à pessoa jurídica a que pertence o órgão.' },
      { id: 'C', texto: 'O órgão tem personalidade própria.' },
      { id: 'D', texto: 'A vítima deve acionar o agente diretamente.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Pela Teoria do Órgão, a conduta do agente é imputada à PESSOA JURÍDICA. A vítima aciona o Estado.',
      incorretas: { A: 'Imputa-se ao Estado.', C: 'Órgão não tem personalidade.', D: 'A vítima aciona o Estado.' },
      conceitoCobrado: 'Teoria do Órgão',
      pegadinha: 'Achar que a vítima aciona o agente diretamente.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['teoria do órgão']
  },

  /* ============================================================
     DA-17 — Agentes públicos
  ============================================================ */
  {
    id: 'Q-REAL-DA-17-001',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-17',
    banca: 'Fundatec', orgao: 'Prefeitura de Porto Alegre/RS (DEMHAB)', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Fundatec 2026 — Prefeitura de Porto Alegre/RS (DEMHAB) — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Provimento (movimentação x retorno)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'A Lei Complementar nº 133/1985 (Estatuto dos Funcionários Públicos do Município de Porto Alegre), em seu art. 11 e incisos, classifica determinadas formas de provimento dos cargos efetivos quanto à movimentação interna do funcionário público, enquanto outras constituem formas de retorno ao exercício de cargo. Assinale a alternativa que apresenta uma forma de provimento correspondente à movimentação interna e uma correspondente ao retorno ao exercício, respectivamente:',
    alternativas: [
      { id: 'A', texto: 'Promoção e reintegração.' },
      { id: 'B', texto: 'Nomeação e readaptação.' },
      { id: 'C', texto: 'Reintegração e aproveitamento.' },
      { id: 'D', texto: 'Transferência e readaptação.' },
      { id: 'E', texto: 'Promoção e readaptação.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A PROMOÇÃO é forma de provimento por movimentação interna (dentro da carreira). A REINTEGRAÇÃO é forma de provimento por retorno ao exercício (o servidor estável retorna ao cargo após demissão ilegal).',
      incorretas: { B: 'Nomeação é provimento originário.', C: 'Reintegração é retorno; aproveitamento é retorno — falta a movimentação interna.', D: 'Transferência (não é provimento derivado após EC 19/1998) e readaptação (retorno).', E: 'Readaptação é retorno.' },
      conceitoCobrado: 'Formas de provimento',
      pegadinha: 'Confundir movimentação interna com retorno ao exercício.',
      comoApareceEmConcurso: 'Associação de formas.'
    },
    tags: ['provimento', 'promoção', 'reintegração']
  },
  {
    id: 'Q-REAL-DA-17-002',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-17',
    banca: 'FAFIPA', orgao: 'Prefeitura de Ivaiporã/PR', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'FAFIPA 2026 — Prefeitura de Ivaiporã/PR — Auxiliar Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Cedência de servidor',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'João é servidor público efetivo do Município de Ivaiporã - PR. A Administração estuda cedê-lo temporariamente para atuar em órgão público estadual, a fim de auxiliar em projeto de interesse mútuo. Simultaneamente, analisa-se pedido para cedência de outros servidores municipais a uma empresa particular com fins lucrativos. Considerando as diretrizes da Lei Orgânica do Município, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A transferência temporária de João pode ser realizada de forma unilateral pela chefia, dispensando convênio.' },
      { id: 'B', texto: 'A legislação municipal proíbe absolutamente a cedência para outros entes, restringindo-a aos Poderes do próprio Município.' },
      { id: 'C', texto: 'A cedência para empresa particular com fins lucrativos é autorizada, desde que haja concordância do servidor e termo de ajuste.' },
      { id: 'D', texto: 'A anuência do servidor é o único requisito para a cedência, dispensando convênios.' },
      { id: 'E', texto: 'A cedência de João para o órgão estadual exige manifestação expressa de anuência e deve ser formalizada obrigatoriamente por meio de convênio.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'A cedência exige anuência expressa do servidor e formalização por convênio (ou instrumento congênere), em regra, apenas para órgãos públicos — não para empresas privadas com fins lucrativos.',
      incorretas: { A: 'Exige convênio e anuência.', B: 'Não há proibição absoluta.', C: 'Cedência para empresa privada com fins lucrativos não é autorizada.', D: 'Exige convênio.' },
      conceitoCobrado: 'Cedência de servidor',
      pegadinha: 'Achar que a cedência para empresa privada é livre.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['cedência', 'servidor público']
  },
  {
    id: 'Q-DID-DA-17-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-17',
    subtema: 'Classificação dos agentes públicos',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a classificação dos agentes públicos, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Agentes políticos são todos os concursados.' },
      { id: 'B', texto: 'Agentes políticos exercem funções de cúpula; servidores públicos têm vínculo profissional; particulares em colaboração atuam sem vínculo (ex.: mesários).' },
      { id: 'C', texto: 'Particulares em colaboração são servidores estatutários.' },
      { id: 'D', texto: 'Empregados públicos são servidores estatutários.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'AGENTES POLÍTICOS: cúpula. SERVIDORES: vínculo profissional. PARTICULARES EM COLABORAÇÃO: sem vínculo empregatício.',
      incorretas: { A: 'Nem todos os agentes políticos são concursados.', C: 'Particulares em colaboração não são servidores.', D: 'Empregados públicos são celetistas.' },
      conceitoCobrado: 'Classificação dos agentes públicos',
      pegadinha: 'Confundir as categorias.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['agentes públicos', 'classificação']
  },
  {
    id: 'Q-DID-DA-17-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-17',
    subtema: 'Cargo x emprego x função',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre cargo, emprego e função, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Cargo é celetista; emprego é estatutário.' },
      { id: 'B', texto: 'Cargo é estatutário; emprego é celetista; função é o conjunto de atribuições, sem vínculo de cargo ou emprego.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'Função de confiança pode ser exercida por pessoa de fora da carreira.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'CARGO: estatutário. EMPREGO: celetista. FUNÇÃO: atribuições, sem vínculo de cargo ou emprego.',
      incorretas: { A: 'Inverte.', C: 'São distintos.', D: 'Função de confiança é privativa de servidor de carreira.' },
      conceitoCobrado: 'Cargo x emprego x função',
      pegadinha: 'Inverter ou confundir.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['cargo', 'emprego', 'função']
  },
  {
    id: 'Q-DID-DA-17-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-17',
    subtema: 'Acumulação de cargos',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre a acumulação de cargos, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É permitida em qualquer hipótese, com compatibilidade de horários.' },
      { id: 'B', texto: 'É permitida apenas nas hipóteses do art. 37, XVI: dois cargos de professor; um de professor + outro técnico/científico; dois privativos de profissionais de saúde — com compatibilidade de horários e respeito ao teto.' },
      { id: 'C', texto: 'É permitida para qualquer par de cargos, desde que haja anuência da chefia.' },
      { id: 'D', texto: 'É vedada em qualquer hipótese.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A acumulação é permitida apenas nas três hipóteses do art. 37, XVI (PP-PT-SS), com compatibilidade de horários e respeito ao teto.',
      incorretas: { A: 'Não é livre.', C: 'Não depende apenas da chefia.', D: 'Há hipóteses permitidas.' },
      conceitoCobrado: 'Acumulação de cargos',
      pegadinha: 'Generalizar ou negar as exceções.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['acumulação', 'art. 37']
  },
  {
    id: 'Q-DID-DA-17-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-17',
    subtema: 'Provimento originário x derivado',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre provimento originário e derivado, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Originário: nomeação (em regra, com concurso). Derivado: promoção, readaptação, reversão, aproveitamento, reintegração, recondução.' },
      { id: 'C', texto: 'A transferência é forma de provimento derivado.' },
      { id: 'D', texto: 'O derivado é a nomeação.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'ORIGINÁRIO: nomeação. DERIVADO: promoção, readaptação, reversão, aproveitamento, reintegração, recondução. A transferência foi extinta como provimento derivado (EC 19/1998).',
      incorretas: { A: 'São distintos.', C: 'A transferência não é mais prevista.', D: 'Inverte.' },
      conceitoCobrado: 'Provimento originário x derivado',
      pegadinha: 'Incluir a transferência como provimento derivado.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['provimento', 'originário', 'derivado']
  },
  {
    id: 'Q-DID-DA-17-005',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-17',
    subtema: 'Empregado público',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o empregado público, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É ocupante de cargo efetivo, sob regime estatutário.' },
      { id: 'B', texto: 'É ocupante de emprego público, sob regime celetista (CLT), típico de empresas públicas, SEM e fundações públicas de direito privado.' },
      { id: 'C', texto: 'É agente político.' },
      { id: 'D', texto: 'Não tem vínculo com a Administração.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'EMPREGADO PÚBLICO: ocupante de emprego público, sob CLT, em empresas públicas, SEM e fundações de direito privado.',
      incorretas: { A: 'Descreve o servidor estatutário.', C: 'É categoria distinta.', D: 'Tem vínculo celetista.' },
      conceitoCobrado: 'Empregado público',
      pegadinha: 'Confundir com servidor estatutário.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['empregado público', 'CLT']
  },
  {
    id: 'Q-DID-DA-17-006',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-17',
    subtema: 'Caso concreto — acumulação de cargos de saúde',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Marina é servidora estatutária do Ministério da Saúde, ocupante de cargo efetivo de enfermeira, com jornada de 30 horas semanais. É aprovada em concurso para outro cargo efetivo de enfermeira em um hospital federal, também com 30 horas semanais. Sobre a acumulação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É vedada, porque a acumulação é proibida em qualquer hipótese.' },
      { id: 'B', texto: 'É permitida, pois se trata de dois cargos privativos de profissionais de saúde, com compatibilidade de horários e respeito ao teto — hipótese do art. 37, XVI, "c".' },
      { id: 'C', texto: 'É permitida apenas se Marina renunciar a um dos cargos em 30 dias.' },
      { id: 'D', texto: 'É vedada, porque os dois cargos são federais.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Hipótese do art. 37, XVI, "c" — dois cargos privativos de profissionais de saúde. Exige compatibilidade (30h + 30h) e respeito ao teto. É permitida.',
      incorretas: { A: 'Há hipóteses permitidas.', C: 'Não há essa exigência.', D: 'A esfera não impede a acumulação, se respeitadas as hipóteses.' },
      conceitoCobrado: 'Acumulação de cargos de saúde',
      pegadinha: 'Achar que a acumulação é vedada ou que a esfera importa.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['acumulação', 'saúde']
  },

  /* ============================================================
     DA-18 — Poderes da Administração Pública
  ============================================================ */
  {
    id: 'Q-REAL-DA-18-001',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-18',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Desvio de finalidade',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'O desvio de finalidade configura-se apenas quando o agente público pratica o ato administrativo para satisfazer interesse particular seu ou de terceiro, não se caracterizando quando a conduta, ainda que alheia à finalidade específica prevista na norma que autoriza o ato, atenda a alguma outra finalidade de interesse público.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'B',
    explicacao: {
      correta: 'ERRADO. O desvio de finalidade NÃO se restringe ao interesse particular: ocorre sempre que o agente pratica o ato com FINALIDADE DIVERSA da prevista em lei — ainda que atenda a outra finalidade pública. O vício está no desvio da finalidade legal, não apenas no interesse pessoal.',
      incorretas: { A: 'A afirmação restringe indevidamente o desvio de finalidade.' },
      conceitoCobrado: 'Desvio de finalidade',
      pegadinha: 'Restringir o desvio ao interesse particular.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['desvio de finalidade']
  },
  {
    id: 'Q-DID-DA-18-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-18',
    subtema: 'Poderes administrativos — visão geral',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'São poderes administrativos, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Poder hierárquico.' },
      { id: 'B', texto: 'Poder disciplinar.' },
      { id: 'C', texto: 'Poder regulamentar.' },
      { id: 'D', texto: 'Poder moderador.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'O PODER MODERADOR é figura histórica do Império (Brasil Império, Poder Moderador do Imperador) — não é poder administrativo na CF/88. Os poderes administrativos são: hierárquico, disciplinar, regulamentar e de polícia.',
      incorretas: { A: 'É poder administrativo.', B: 'É poder administrativo.', C: 'É poder administrativo.' },
      conceitoCobrado: 'Poderes administrativos',
      pegadinha: 'Incluir figura histórica.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['poderes administrativos']
  },
  {
    id: 'Q-DID-DA-18-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-18',
    subtema: 'Disciplinar x polícia',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o poder disciplinar e o poder de polícia, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Disciplinar atinge servidores e sujeitos à disciplina interna; polícia atinge o particular em geral, limitando direitos em favor do interesse público.' },
      { id: 'C', texto: 'Disciplinar atinge o particular em geral.' },
      { id: 'D', texto: 'Polícia atinge apenas servidores.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'DISCIPLINAR: servidores e sujeitos à disciplina interna. POLÍCIA: particular em geral.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'Inverte.' },
      conceitoCobrado: 'Disciplinar x polícia',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['disciplinar', 'polícia']
  },
  {
    id: 'Q-DID-DA-18-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-18',
    subtema: 'Excesso x desvio de poder',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre excesso de poder e desvio de poder, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Excesso: atua além da competência (ato ultra vires). Desvio: atua dentro da competência, mas com finalidade diversa da prevista em lei.' },
      { id: 'C', texto: 'Excesso: fim diverso. Desvio: além da competência.' },
      { id: 'D', texto: 'Só existe excesso, não desvio.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'EXCESSO: além da competência. DESVIO: dentro da competência, com finalidade diversa.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'Ambos existem.' },
      conceitoCobrado: 'Excesso x desvio',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['excesso de poder', 'desvio de poder']
  },
  {
    id: 'Q-DID-DA-18-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-18',
    subtema: 'Poder regulamentar',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o poder regulamentar, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Permite ao chefe do Executivo editar decretos que inovam na ordem jurídica.' },
      { id: 'B', texto: 'Permite ao chefe do Executivo editar decretos que detalham a lei, sem inovar na ordem jurídica.' },
      { id: 'C', texto: 'Pode ser exercido por qualquer agente público.' },
      { id: 'D', texto: 'Não existe na CF/88.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O poder REGULAMENTAR permite ao chefe do Executivo editar decretos que detalham a lei, SEM INOVAR na ordem jurídica. A competência é do chefe do Executivo (Presidente, Governador, Prefeito).',
      incorretas: { A: 'Não inova.', C: 'É do chefe do Executivo.', D: 'Existe.' },
      conceitoCobrado: 'Poder regulamentar',
      pegadinha: 'Achar que o decreto inova.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['poder regulamentar']
  },
  {
    id: 'Q-DID-DA-18-005',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-18',
    subtema: 'Poder hierárquico',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'São manifestações do poder hierárquico, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Dar ordens.' },
      { id: 'B', texto: 'Fiscalizar.' },
      { id: 'C', texto: 'Avocar.' },
      { id: 'D', texto: 'Punir o particular por infração de trânsito.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Punir o particular por infração de trânsito é manifestação do PODER DE POLÍCIA, não do hierárquico. O poder hierárquico é interno e envolve dar ordens, fiscalizar, delegar e avocar.',
      incorretas: { A: 'É manifestação.', B: 'É manifestação.', C: 'É manifestação.' },
      conceitoCobrado: 'Poder hierárquico',
      pegadinha: 'Confundir com poder de polícia.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['poder hierárquico']
  },
  {
    id: 'Q-DID-DA-18-006',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-18',
    subtema: 'Poder de polícia',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o poder de polícia, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É a atividade da Administração que limita ou disciplina direitos do particular em favor do interesse público.' },
      { id: 'B', texto: 'É sinônimo de poder disciplinar.' },
      { id: 'C', texto: 'Atinge apenas servidores públicos.' },
      { id: 'D', texto: 'Só existe na esfera federal.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'O poder de polícia limita ou disciplina direitos do particular em favor do interesse público (fiscalização, interdição, licenciamento).',
      incorretas: { B: 'É diferente do disciplinar.', C: 'Atinge o particular.', D: 'Existe em todas as esferas.' },
      conceitoCobrado: 'Poder de polícia',
      pegadinha: 'Confundir com disciplinar.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['poder de polícia']
  },
  {
    id: 'Q-DID-DA-18-007',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-18',
    subtema: 'Abuso de poder (gênero) x desvio de finalidade (espécie)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre a relação entre abuso de poder e desvio de finalidade, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Abuso de poder é o gênero, que abrange o excesso de poder e o desvio de finalidade (este, uma das espécies).' },
      { id: 'C', texto: 'O desvio de finalidade é gênero.' },
      { id: 'D', texto: 'O abuso se limita ao excesso de poder.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'ABUSO DE PODER: gênero. Espécies: EXCESSO DE PODER e DESVIO DE FINALIDADE (ou de poder).',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'O abuso também abrange o desvio.' },
      conceitoCobrado: 'Abuso de poder',
      pegadinha: 'Inverter gênero e espécie.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['abuso de poder', 'desvio de finalidade']
  },

  /* ============================================================
     DA-19 — Atos Administrativos
  ============================================================ */
  {
    id: 'Q-REAL-DA-19-001',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-19',
    banca: 'Fundatec', orgao: 'Prefeitura de Porto Alegre/RS (DEMHAB)', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Fundatec 2026 — Prefeitura de Porto Alegre/RS (DEMHAB) — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Requisitos do ato administrativo',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Segundo Meirelles (2018), são requisitos do ato administrativo, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Competência.' },
      { id: 'B', texto: 'Finalidade.' },
      { id: 'C', texto: 'Forma.' },
      { id: 'D', texto: 'Mérito.' },
      { id: 'E', texto: 'Objeto.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Os requisitos são: COMPETÊNCIA, FINALIDADE, FORMA, MOTIVO e OBJETO. MÉRITO não é requisito — é o juízo de conveniência e oportunidade do ato discricionário.',
      incorretas: { A: 'É requisito.', B: 'É requisito.', C: 'É requisito.', E: 'É requisito.' },
      conceitoCobrado: 'Requisitos do ato administrativo',
      pegadinha: 'Incluir mérito como requisito.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['ato administrativo', 'requisitos']
  },
  {
    id: 'Q-DID-DA-19-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-19',
    subtema: 'Anulação x revogação',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre anulação e revogação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Anulação: por ilegalidade, ex tunc, Administração e Judiciário. Revogação: por mérito, ex nunc, só Administração.' },
      { id: 'B', texto: 'Anulação: por mérito, ex nunc. Revogação: por ilegalidade, ex tunc.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'O Judiciário pode revogar ato inconveniente.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'ANULAÇÃO: ilegalidade, ex tunc, Administração e Judiciário. REVOGAÇÃO: mérito, ex nunc, só Administração (Súmulas 346 e 473 do STF).',
      incorretas: { B: 'Inverte.', C: 'São distintos.', D: 'O Judiciário só anula.' },
      conceitoCobrado: 'Anulação x revogação',
      pegadinha: 'Inverter ou atribuir revogação ao Judiciário.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['anulação', 'revogação']
  },
  {
    id: 'Q-DID-DA-19-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-19',
    subtema: 'Cassação x caducidade x contraposição',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre as formas de extinção do ato administrativo, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Cassação, caducidade e contraposição são sinônimos: todas extinguem o ato por descumprimento.' },
      { id: 'B', texto: 'CASSAÇÃO: descumprimento de condição pelo beneficiário. CADUCIDADE (ou decaimento): extinção em razão de NORMA JURÍDICA SUPERVENIENTE que torna incompatível a manutenção do ato. CONTRAPOSIÇÃO: ato novo que extingue o anterior por incompatibilidade.' },
      { id: 'C', texto: 'CADUCIDADE é o simples decurso de prazo do próprio ato — extinção pelo advento do termo final.' },
      { id: 'D', texto: 'Todas as três são hipóteses de anulação por ilegalidade.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'CASSAÇÃO: descumprimento. CADUCIDADE: norma superveniente incompatível. CONTRAPOSIÇÃO: ato novo que extingue o anterior. O simples decurso de prazo é EXTINÇÃO PELO TERMO FINAL — instituto distinto da caducidade.',
      incorretas: { A: 'São institutos distintos.', C: 'Define erroneamente caducidade (o decurso de prazo é termo final).', D: 'Anulação é por ilegalidade — não se confunde com extinção.' },
      conceitoCobrado: 'Extinção do ato — cassação, caducidade, termo final e contraposição',
      pegadinha: 'Confundir caducidade (norma superveniente) com decurso de prazo (termo final).',
      comoApareceEmConcurso: 'Cenário que exige distinguir as formas de extinção.'
    },
    tags: ['cassação', 'caducidade', 'contraposição', 'termo final']
  },
  {
    id: 'Q-DID-DA-19-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-19',
    subtema: 'Presunção de legitimidade',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a presunção de legitimidade do ato administrativo, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É absoluta.' },
      { id: 'B', texto: 'É relativa — o ato se presume válido até prova em contrário.' },
      { id: 'C', texto: 'Não existe.' },
      { id: 'D', texto: 'Só se aplica a atos vinculados.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A presunção de legitimidade é RELATIVA (iuris tantum): o ato se presume válido até prova em contrário.',
      incorretas: { A: 'Não é absoluta.', C: 'Existe.', D: 'Aplica-se a qualquer ato administrativo.' },
      conceitoCobrado: 'Presunção de legitimidade',
      pegadinha: 'Achar que é absoluta.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['presunção de legitimidade']
  },
  {
    id: 'Q-DID-DA-19-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-19',
    subtema: 'Autoexecutoriedade',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre a autoexecutoriedade, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Está presente em todos os atos administrativos.' },
      { id: 'B', texto: 'Não está presente em todos os atos: a multa, por exemplo, não tem autoexecutoriedade (precisa de cobrança judicial); a interdição tem.' },
      { id: 'C', texto: 'Não existe no Direito Administrativo.' },
      { id: 'D', texto: 'É exclusiva do Poder Legislativo.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A AUTOEXECUTORIEDADE não está em todos os atos: a multa não tem (cobrança judicial); a interdição tem (execução direta).',
      incorretas: { A: 'Não está em todos.', C: 'Existe.', D: 'É atributo de atos administrativos.' },
      conceitoCobrado: 'Autoexecutoriedade',
      pegadinha: 'Generalizar a autoexecutoriedade.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['autoexecutoriedade']
  },
  {
    id: 'Q-DID-DA-19-005',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-19',
    subtema: 'Convalidação',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre a convalidação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Alcança qualquer vício.' },
      { id: 'B', texto: 'Alcança apenas vícios sanáveis (competência e forma, quando não houver prejuízo ao interesse público nem a terceiros), com efeito ex tunc.' },
      { id: 'C', texto: 'Alcança apenas vícios de finalidade, motivo e objeto.' },
      { id: 'D', texto: 'Não existe no Direito Administrativo.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A CONVALIDAÇÃO alcança vícios SANÁVEIS (competência e forma), com efeito ex tunc. Vícios de finalidade, motivo e objeto são, em regra, insanáveis.',
      incorretas: { A: 'Não alcança qualquer vício.', C: 'Inverte.', D: 'Existe.' },
      conceitoCobrado: 'Convalidação',
      pegadinha: 'Achar que todo vício é convalidável.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['convalidação']
  },
  {
    id: 'Q-DID-DA-19-006',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-19',
    subtema: 'Vícios do ato — competência e finalidade',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um servidor sem competência aplica multa (vício de competência); um agente usa o poder de fiscalização para perseguir desafeto (vício de finalidade). Sobre esses vícios, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Ambos são insanáveis.' },
      { id: 'B', texto: 'O vício de competência é, em regra, sanável (convalidação); o de finalidade é, em regra, insanável.' },
      { id: 'C', texto: 'O de competência é insanável; o de finalidade é sanável.' },
      { id: 'D', texto: 'Ambos são sanáveis.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'COMPETÊNCIA: sanável (convalidação, em regra). FINALIDADE: insanável (em regra).',
      incorretas: { A: 'A competência é sanável.', C: 'Inverte.', D: 'A finalidade é insanável.' },
      conceitoCobrado: 'Vícios do ato',
      pegadinha: 'Inverter a sanabilidade.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['vício de competência', 'vício de finalidade']
  },

  /* ============================================================
     DA-20 — Serviços Públicos
  ============================================================ */
  {
    id: 'Q-REAL-DA-20-001',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-20',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Serviços uti universi x uti singuli',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Os serviços públicos uti universi são prestados a destinatários determinados e podem ser remunerados mediante taxa, por serem específicos e divisíveis.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'B',
    explicacao: {
      correta: 'ERRADO. Serviços UTI UNIVERSI (gerais) são prestados a destinatários INDETERMINADOS (toda a coletividade), são INDIVISÍVEIS e, em regra, custeados por IMPOSTO. O que a questão descreve (destinatários determinados, específicos e divisíveis, taxa) corresponde aos serviços UTI SINGULI (individuais).',
      incorretas: { A: 'A descrição corresponde a uti singuli, não uti universi.' },
      conceitoCobrado: 'Serviços uti universi x uti singuli',
      pegadinha: 'Inverter as definições.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['uti universi', 'uti singuli']
  },
  {
    id: 'Q-DID-DA-20-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-20',
    subtema: 'Princípios do serviço público',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'São princípios do serviço público, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Generalidade.' },
      { id: 'B', texto: 'Continuidade.' },
      { id: 'C', texto: 'Modicidade.' },
      { id: 'D', texto: 'Lucratividade.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A LUCRAVIDADE não é princípio do serviço público — o serviço público pode até ser prestado com lucro, mas o princípio não é a lucratividade. Os princípios são: generalidade, continuidade, modicidade, regularidade, atualidade, segurança, cortesia e mutabilidade.',
      incorretas: { A: 'É princípio.', B: 'É princípio.', C: 'É princípio.' },
      conceitoCobrado: 'Princípios do serviço público',
      pegadinha: 'Incluir lucratividade como princípio.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['princípios do serviço público']
  },
  {
    id: 'Q-DID-DA-20-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-20',
    subtema: 'Concessão x permissão x autorização',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre as três formas de delegação de serviço público, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Concessão: contrato, prazo determinado, licitação. Permissão: ato unilateral, prazo indeterminado, licitação pela Lei 8.987/95. Autorização: ato unilateral, prazo curto, sem licitação.' },
      { id: 'B', texto: 'Concessão: ato unilateral, prazo indeterminado. Permissão: contrato, prazo determinado.' },
      { id: 'C', texto: 'Todas são contratos.' },
      { id: 'D', texto: 'Todas exigem licitação.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'CONCESSÃO: contrato, prazo determinado, licitação. PERMISSÃO: ato unilateral, prazo indeterminado, licitação (Lei 8.987/95). AUTORIZAÇÃO: ato unilateral, prazo curto, sem licitação.',
      incorretas: { B: 'Inverte.', C: 'Apenas a concessão é contrato.', D: 'A autorização não exige licitação.' },
      conceitoCobrado: 'Formas de delegação de serviço público',
      pegadinha: 'Inverter as naturezas ou generalizar a licitação.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['concessão', 'permissão', 'autorização']
  },
  {
    id: 'Q-DID-DA-20-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-20',
    subtema: 'Continuidade do serviço público',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o princípio da continuidade do serviço público, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É absoluto: o serviço nunca pode ser interrompido.' },
      { id: 'B', texto: 'É a regra, mas admite exceções legais (razões técnicas, inadimplemento do usuário após aviso, emergência).' },
      { id: 'C', texto: 'Não existe no ordenamento.' },
      { id: 'D', texto: 'Só se aplica a serviços privados.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A continuidade é a REGRA, mas admite exceções legais (razões técnicas, inadimplemento após aviso, emergência).',
      incorretas: { A: 'Não é absoluta.', C: 'Existe.', D: 'Aplica-se ao serviço público.' },
      conceitoCobrado: 'Continuidade',
      pegadinha: 'Achar que é absoluta.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['continuidade']
  },
  {
    id: 'Q-DID-DA-20-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-20',
    subtema: 'Encampação x caducidade',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre encampação e caducidade, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Encampação: retomada do serviço por INTERESSE PÚBLICO, durante o prazo, com lei autorizativa e indenização. Caducidade: perda da concessão por DESCUMPRIMENTO, sem indenização.' },
      { id: 'C', texto: 'Encampação: descumprimento. Caducidade: interesse público.' },
      { id: 'D', texto: 'Ambas não exigem indenização.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'ENCAMPAÇÃO: interesse público, lei autorizativa, indenização. CADUCIDADE: descumprimento, sem indenização.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'A encampação exige indenização.' },
      conceitoCobrado: 'Encampação x caducidade',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['encampação', 'caducidade']
  },
  {
    id: 'Q-DID-DA-20-005',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-20',
    subtema: 'Serviço público próprio x impróprio',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre os serviços públicos próprios e impróprios, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Próprios: essenciais, prestados pelo Estado. Impróprios: atividade econômica em sentido estrito.' },
      { id: 'B', texto: 'Próprios: atividade econômica. Impróprios: essenciais.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'Só existem serviços próprios.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'PRÓPRIOS: essenciais, prestados pelo Estado (saúde, educação). IMPRÓPRIOS: atividade econômica em sentido estrito.',
      incorretas: { B: 'Inverte.', C: 'São distintos.', D: 'Existem os dois.' },
      conceitoCobrado: 'Serviços públicos próprios x impróprios',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['serviço próprio', 'serviço impróprio']
  },
  {
    id: 'Q-DID-DA-20-006',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-20',
    subtema: 'Caso concreto — classificação de delegação',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'A prefeitura firmou quatro ajustes: (1) contrato de 20 anos para exploração do transporte coletivo, com licitação; (2) termo de permissão de quiosque em praça, por prazo indeterminado; (3) autorização para food truck em evento de 3 dias; (4) autorização para feira cultural em praça pública por 1 fim de semana. Esses ajustes correspondem, respectivamente, a:',
    alternativas: [
      { id: 'A', texto: 'Concessão, permissão, autorização e autorização.' },
      { id: 'B', texto: 'Permissão, concessão, autorização e autorização.' },
      { id: 'C', texto: 'Concessão, autorização, permissão e autorização.' },
      { id: 'D', texto: 'Autorização, concessão, permissão e permissão.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: '(1) contrato de 20 anos + licitação = CONCESSÃO. (2) permissão de quiosque, prazo indeterminado = PERMISSÃO. (3) food truck em evento de 3 dias = AUTORIZAÇÃO. (4) feira por 1 fim de semana = AUTORIZAÇÃO.',
      incorretas: { B: 'Inverte 1 e 2.', C: 'Inverte 2 e 3.', D: 'Inverte.' },
      conceitoCobrado: 'Formas de delegação em cenário',
      pegadinha: 'Confundir os ajustes.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['concessão', 'permissão', 'autorização']
  },
  {
    id: 'Q-DID-DA-20-007',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-20',
    subtema: 'Usuários do serviço público',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre os direitos dos usuários do serviço público, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Estão previstos apenas na Lei 8.987/95, não havendo qualquer direito no CDC.' },
      { id: 'B', texto: 'Estão previstos na Lei 8.987/95 e, quando aplicável, no CDC — incluindo informação, qualidade, resposta a reclamações e continuidade.' },
      { id: 'C', texto: 'Não há direitos dos usuários.' },
      { id: 'D', texto: 'Só existem direitos dos usuários no setor privado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Os direitos dos usuários estão na Lei 8.987/95 e, quando aplicável, no CDC — informação, qualidade, resposta a reclamações, continuidade.',
      incorretas: { A: 'O CDC pode ser aplicado.', C: 'Há direitos.', D: 'Existem direitos em ambos.' },
      conceitoCobrado: 'Direitos dos usuários',
      pegadinha: 'Achar que o CDC não se aplica.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['usuários', 'CDC', 'Lei 8.987/95']
  },

  /* ============================================================
     DA-21 — Licitações e contratos administrativos
  ============================================================ */
  {
    id: 'Q-REAL-DA-21-001',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-21',
    banca: 'Fundatec', orgao: 'Prefeitura de Porto Alegre/RS (DEMHAB)', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Fundatec 2026 — Prefeitura de Porto Alegre/RS (DEMHAB) — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Dispensa por valor',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Silvio é assistente administrativo do DEMHAB e precisa realizar coleta de preços de serviços para a contratação da manutenção de veículos automotores da frota do órgão sem licitação. Para a contratação de serviços de manutenção de veículos que envolva valor de até R$ 130.984,20, Silvio poderá utilizar uma das categorias para a contratação direta. De acordo com a Nova Lei de Licitações e Contratos Administrativos, a referida categoria se denomina licitação:',
    alternativas: [
      { id: 'A', texto: 'Dispensável.' },
      { id: 'B', texto: 'Dispensada.' },
      { id: 'C', texto: 'Inexigível.' },
      { id: 'D', texto: 'Postecipada.' },
      { id: 'E', texto: 'Postergada.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A contratação direta por VALOR, dentro dos limites legais, é hipótese de licitação DISPENSÁVEL (art. 75 da Lei 14.133/2021).',
      incorretas: { B: 'Dispensada é a licitação que não precisa ser realizada por força de lei, mas o termo técnico é dispensável.', C: 'Inexigível é para competição inviável.', D: 'Não existe.', E: 'Não existe.' },
      conceitoCobrado: 'Dispensa por valor',
      pegadinha: 'Confundir dispensável com dispensada ou inexigível.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['dispensa', 'licitação dispensável']
  },
  {
    id: 'Q-REAL-DA-21-002',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-21',
    banca: 'Fundatec', orgao: 'Prefeitura de Porto Alegre/RS (DEMHAB)', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Fundatec 2026 — Prefeitura de Porto Alegre/RS (DEMHAB) — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Fase preparatória — estudo técnico preliminar',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'De acordo com Vaz (2022), além da compatibilidade com o Plano de Contratação Anual (PCA), a Nova Lei de Licitações e Contratos Administrativos exige a realização de diversas etapas para a fase preparatória. A primeira etapa dessa fase, sendo o primeiro ato que a Administração deve realizar após instaurar o processo administrativo tendente a definir os termos da licitação, é o:',
    alternativas: [
      { id: 'A', texto: 'Anteprojeto.' },
      { id: 'B', texto: 'Estudo técnico preliminar.' },
      { id: 'C', texto: 'Projeto básico.' },
      { id: 'D', texto: 'Projeto executivo.' },
      { id: 'E', texto: 'Termo de referência.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A primeira etapa da fase preparatória é o ESTUDO TÉCNICO PRELIMINAR (ETP) — art. 18 da Lei 14.133/2021.',
      incorretas: { A: 'Anteprojeto é etapa posterior.', C: 'Projeto básico é posterior.', D: 'Projeto executivo é posterior.', E: 'Termo de referência é posterior.' },
      conceitoCobrado: 'Fase preparatória — ETP',
      pegadinha: 'Confundir com termo de referência ou projeto básico.',
      comoApareceEmConcurso: 'Cobrança de ordem.'
    },
    tags: ['ETP', 'fase preparatória']
  },
  {
    id: 'Q-REAL-DA-21-003',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-21',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Inexigibilidade — notória especialização',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'A contratação de instituição de notória especialização para ministrar um curso de aperfeiçoamento aos empregados do Conselho pode ser enquadrada como hipótese de inexigibilidade de licitação.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'A',
    explicacao: {
      correta: 'CERTO. A contratação de profissional ou instituição de NOTÓRIA ESPECIALIZAÇÃO, para serviço técnico especializado, é hipótese de INEXIGIBILIDADE (art. 74 da Lei 14.133/2021).',
      incorretas: { B: 'A hipótese está correta.' },
      conceitoCobrado: 'Inexigibilidade',
      pegadinha: 'Achar que é dispensa.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['inexigibilidade', 'notória especialização']
  },
  {
    id: 'Q-REAL-DA-21-004',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-21',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Impugnação de edital',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Na sistemática da Lei nº 14.133/2021, a legitimidade para impugnar o edital de licitação está condicionada à prévia habilitação do interessado no certame.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'B',
    explicacao: {
      correta: 'ERRADO. A legitimidade para impugnar o edital NÃO depende de prévia habilitação. Qualquer cidadão é parte legítima para impugnar edital por irregularidade, e qualquer licitante é parte legítima para solicitar esclarecimentos ou providências (art. 164 da Lei 14.133/2021).',
      incorretas: { A: 'A legitimidade não depende de habilitação.' },
      conceitoCobrado: 'Impugnação de edital',
      pegadinha: 'Condicionar a impugnação à habilitação.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['impugnação', 'edital']
  },
  {
    id: 'Q-DID-DA-21-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-21',
    subtema: 'Dispensa x inexigibilidade',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre dispensa e inexigibilidade, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Dispensa: competição possível, mas a lei dispensa (valor, emergência). Inexigibilidade: competição inviável (fornecedor exclusivo, notória especialização).' },
      { id: 'C', texto: 'Dispensa: competição inviável. Inexigibilidade: competição possível.' },
      { id: 'D', texto: 'Ambas exigem licitação.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'DISPENSA: competição POSSÍVEL, mas a lei dispensa. INEXIGIBILIDADE: competição INVIÁVEL.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'Ambas são hipóteses de contratação direta (sem licitação).' },
      conceitoCobrado: 'Dispensa x inexigibilidade',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['dispensa', 'inexigibilidade']
  },
  {
    id: 'Q-DID-DA-21-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-21',
    subtema: 'Modalidades de licitação',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'São modalidades de licitação previstas na Lei 14.133/2021, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Pregão.' },
      { id: 'B', texto: 'Concorrência.' },
      { id: 'C', texto: 'Convite.' },
      { id: 'D', texto: 'Concurso.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'CONVITE não é modalidade na Lei 14.133/2021 (era da Lei 8.666/93). As modalidades são: pregão, concorrência, concurso, leilão e diálogo competitivo.',
      incorretas: { A: 'É modalidade.', B: 'É modalidade.', D: 'É modalidade.' },
      conceitoCobrado: 'Modalidades de licitação',
      pegadinha: 'Incluir modalidade revogada.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['modalidades', 'convite']
  },
  {
    id: 'Q-DID-DA-21-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-21',
    subtema: 'Cláusulas exorbitantes',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'São cláusulas exorbitantes dos contratos administrativos, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Alteração unilateral do contrato.' },
      { id: 'B', texto: 'Rescisão unilateral.' },
      { id: 'C', texto: 'Fiscalização.' },
      { id: 'D', texto: 'Renúncia de direitos pela Administração.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A RENÚNCIA de direitos NÃO é cláusula exorbitante — é o oposto: a Administração não pode renunciar a prerrogativas que existem em favor do interesse público. As cláusulas exorbitantes incluem alteração unilateral, rescisão unilateral, fiscalização e aplicação de sanções.',
      incorretas: { A: 'É cláusula exorbitante.', B: 'É cláusula exorbitante.', C: 'É cláusula exorbitante.' },
      conceitoCobrado: 'Cláusulas exorbitantes',
      pegadinha: 'Incluir renúncia.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['cláusulas exorbitantes']
  },
  {
    id: 'Q-DID-DA-21-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-21',
    subtema: 'Critérios de julgamento',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'São critérios de julgamento previstos na Lei 14.133/2021, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Menor preço.' },
      { id: 'B', texto: 'Melhor técnica ou conteúdo artístico.' },
      { id: 'C', texto: 'Técnica e preço.' },
      { id: 'D', texto: 'Maior vantagem financeira imediata.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: '"Maior vantagem financeira imediata" não é critério da Lei 14.133/2021. Os critérios são: menor preço, maior desconto, melhor técnica ou conteúdo artístico, técnica e preço, maior lance (leilão) e maior retorno econômico.',
      incorretas: { A: 'É critério.', B: 'É critério.', C: 'É critério.' },
      conceitoCobrado: 'Critérios de julgamento',
      pegadinha: 'Inventar critério.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['critérios de julgamento']
  },
  /* ============================================================
     DA-22 — Responsabilidade Civil do Estado
  ============================================================ */
  {
    id: 'Q-DID-DA-22-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-22',
    subtema: 'Responsabilidade objetiva x subjetiva',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre a responsabilidade civil do Estado no ordenamento brasileiro, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O Brasil adotou a teoria subjetiva em atos comissivos: a vítima precisa provar a culpa do agente.' },
      { id: 'B', texto: 'O Brasil adotou a teoria OBJETIVA (art. 37, §6º, CF) em atos comissivos: basta dano + nexo causal + conduta, independentemente de culpa.' },
      { id: 'C', texto: 'O Brasil adotou a teoria do risco integral: não há excludentes em nenhuma hipótese.' },
      { id: 'D', texto: 'O Brasil não tem regra constitucional sobre responsabilidade do Estado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O art. 37, §6º, da CF adotou a responsabilidade OBJETIVA em atos comissivos: dano + nexo causal + conduta, independentemente de culpa.',
      incorretas: { A: 'A responsabilidade do Estado é objetiva; a do agente (ação regressiva) é subjetiva.', C: 'Risco integral não é a regra adotada.', D: 'Há regra expressa (art. 37, §6º).' },
      conceitoCobrado: 'Responsabilidade objetiva do Estado',
      pegadinha: 'Confundir responsabilidade objetiva com subjetiva ou risco integral.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['responsabilidade civil', 'objetiva']
  },
  {
    id: 'Q-DID-DA-22-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-22',
    subtema: 'Ação regressiva',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Sobre a ação regressiva do Estado contra o agente público, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Independe de dolo ou culpa do agente — basta o Estado ter indenizado a vítima.' },
      { id: 'B', texto: 'Exige DOLO ou CULPA do agente — é a responsabilidade subjetiva do agente perante o Estado, depois que o Estado indeniza a vítima.' },
      { id: 'C', texto: 'É vedada pela Constituição.' },
      { id: 'D', texto: 'A vítima deve ajuizar ação diretamente contra o agente.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A ação regressiva exige DOLO ou CULPA do agente — é a responsabilidade SUBJETIVA do agente perante o Estado.',
      incorretas: { A: 'Exige dolo/culpa.', C: 'É prevista no art. 37, §6º.', D: 'A vítima aciona o Estado.' },
      conceitoCobrado: 'Ação regressiva',
      pegadinha: 'Achar que independe de dolo/culpa.',
      comoApareceEmConcurso: 'Cobrança clássica.'
    },
    tags: ['ação regressiva', 'dolo', 'culpa']
  },
  {
    id: 'Q-DID-DA-22-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-22',
    subtema: 'Excludentes de responsabilidade',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'São excludentes da responsabilidade civil do Estado, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Culpa exclusiva da vítima.' },
      { id: 'B', texto: 'Caso fortuito ou força maior.' },
      { id: 'C', texto: 'Fato de terceiro.' },
      { id: 'D', texto: 'Culpa leve do agente público.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A CULPA LEVE do agente NÃO exclui a responsabilidade do Estado — a responsabilidade do Estado perante a vítima é OBJETIVA e não depende de culpa do agente. As excludentes são: culpa exclusiva da vítima, caso fortuito/força maior e fato de terceiro.',
      incorretas: { A: 'É excludente.', B: 'É excludente.', C: 'É excludente.' },
      conceitoCobrado: 'Excludentes de responsabilidade',
      pegadinha: 'Incluir a culpa do agente como excludente.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['excludentes', 'culpa da vítima', 'caso fortuito']
  },
  {
    id: 'Q-DID-DA-22-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-22',
    subtema: 'Teoria do risco administrativo x risco integral',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'O Brasil adotou a teoria do risco:',
    alternativas: [
      { id: 'A', texto: 'Integral, sem excludentes.' },
      { id: 'B', texto: 'Administrativo, com excludentes (culpa exclusiva da vítima, caso fortuito/força maior, fato de terceiro).' },
      { id: 'C', texto: 'Subjetiva, exigindo culpa em todos os casos.' },
      { id: 'D', texto: 'Objetiva, sem qualquer excludente.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O Brasil adotou a teoria do RISCO ADMINISTRATIVO: responsabilidade objetiva, mas com EXCLUDENTES. O risco integral não é a regra.',
      incorretas: { A: 'Risco integral não é a regra adotada.', C: 'A responsabilidade é objetiva.', D: 'Há excludentes.' },
      conceitoCobrado: 'Risco administrativo x risco integral',
      pegadinha: 'Confundir os dois.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['risco administrativo', 'risco integral']
  },
  {
    id: 'Q-DID-DA-22-005',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-22',
    subtema: 'Atos comissivos x omissivos',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Sobre a responsabilidade do Estado em atos comissivos e omissivos, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Ambos são sempre objetivos.' },
      { id: 'B', texto: 'Em atos comissivos, a responsabilidade é objetiva; em omissões genéricas, a jurisprudência majoritária exige comprovação de culpa (falha do serviço).' },
      { id: 'C', texto: 'Em atos comissivos, a responsabilidade é subjetiva.' },
      { id: 'D', texto: 'Em omissões, a responsabilidade é sempre objetiva.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Atos COMISSIVOS: objetiva (art. 37, §6º). Omissões GENÉRICAS: exige-se culpa (falha do serviço). Em omissões específicas (dever legal direto), pode haver objetiva.',
      incorretas: { A: 'A omissão genérica exige culpa.', C: 'Inverte.', D: 'Inverte.' },
      conceitoCobrado: 'Atos comissivos x omissivos',
      pegadinha: 'Generalizar a objetividade.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['atos comissivos', 'omissivos']
  },
  {
    id: 'Q-DID-DA-22-006',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-22',
    subtema: 'Caso concreto — atropelamento por veículo oficial',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Um veículo oficial, conduzido por servidor no exercício da função, atropela um pedestre que atravessava em local proibido, com sinal vermelho. A vítima sofreu lesões. Sobre a responsabilidade do Estado, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O Estado sempre responde, pois a responsabilidade é objetiva e não admite excludentes.' },
      { id: 'B', texto: 'Há CULPA EXCLUSIVA DA VÍTIMA (pedestre em local proibido, sinal vermelho), o que exclui a responsabilidade do Estado — desde que o servidor não tenha concorrido para o evento.' },
      { id: 'C', texto: 'A culpa exclusiva da vítima não exclui a responsabilidade do Estado.' },
      { id: 'D', texto: 'O Estado responde sempre, independentemente da conduta da vítima.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A CULPA EXCLUSIVA DA VÍTIMA é excludente de responsabilidade — quebra o nexo causal. Se o servidor não concorreu, a responsabilidade do Estado é excluída.',
      incorretas: { A: 'Há excludentes.', C: 'A culpa exclusiva exclui.', D: 'A conduta da vítima é considerada.' },
      conceitoCobrado: 'Culpa exclusiva da vítima',
      pegadinha: 'Achar que a responsabilidade objetiva é absoluta.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['culpa exclusiva da vítima']
  },
  {
    id: 'Q-DID-DA-22-007',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-22',
    subtema: 'Caso concreto — ação regressiva',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Um servidor público federal, no exercício da função, conduz veículo oficial com imprudência e causa dano a um particular. A vítima ajuíza ação indenizatória. Sobre as regras da responsabilidade civil, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A ação deve ser proposta diretamente contra o servidor, pois foi ele quem causou o dano.' },
      { id: 'B', texto: 'A ação deve ser proposta contra a União (responsabilidade OBJETIVA), e a União, após indenizar a vítima, pode ajuizar AÇÃO REGRESSIVA contra o servidor — desde que comprovados DOLO ou CULPA (no caso, culpa por imprudência).' },
      { id: 'C', texto: 'A ação deve ser proposta contra o servidor e a União, em litisconsórcio necessário.' },
      { id: 'D', texto: 'A vítima não tem direito à indenização, pois o dano foi causado por agente público.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A vítima aciona o ESTADO (União), por responsabilidade OBJETIVA. Após indenizar, a União pode ajuizar AÇÃO REGRESSIVA contra o servidor, desde que comprovados DOLO ou CULPA (no caso, imprudência).',
      incorretas: { A: 'Ignora a Teoria do Órgão.', C: 'Não há litisconsórcio necessário.', D: 'Há direito à indenização.' },
      conceitoCobrado: 'Responsabilidade objetiva + ação regressiva',
      pegadinha: 'Achar que a vítima aciona o agente diretamente.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['ação regressiva', 'teoria do órgão']
  },
  {
    id: 'Q-DID-DA-22-008',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-22',
    subtema: 'Requisitos da responsabilidade objetiva',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'São requisitos da responsabilidade civil objetiva do Estado:',
    alternativas: [
      { id: 'A', texto: 'Conduta, dano, nexo causal e culpa do agente.' },
      { id: 'B', texto: 'Conduta, dano e nexo causal — independentemente de culpa.' },
      { id: 'C', texto: 'Apenas o dano.' },
      { id: 'D', texto: 'Apenas a conduta.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Requisitos: CONDUTA + DANO + NEXO CAUSAL — independentemente de culpa.',
      incorretas: { A: 'A culpa não é exigida do Estado.', C: 'Faltam conduta e nexo.', D: 'Faltam dano e nexo.' },
      conceitoCobrado: 'Requisitos da responsabilidade objetiva',
      pegadinha: 'Incluir culpa do agente como requisito.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['requisitos', 'nexo causal']
  },

  /* ============================================================
     DA-23 — Controle da Administração Pública
  ============================================================ */
  {
    id: 'Q-REAL-DA-23-001',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-23',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Competências do TCU',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um auditor recém-empossado no TCU atua em processos de fiscalização. Foram apresentadas as seguintes situações: I. dirigente de sociedade de economia mista, constituída com recursos da União, questiona a competência do TCU para julgar suas contas; II. prefeito municipal utiliza recursos federais recebidos por convênio para execução de obra, sendo posteriormente fiscalizado pelo TCU; III. gestor de entidade privada que recebe contribuições parafiscais afirma não estar sujeito à fiscalização do TCU; IV. particular, sem vínculo formal com a Administração, é responsabilizado por prejuízo ao erário em razão de extravio de bens públicos sob sua guarda eventual. Sobre as competências do TCU, assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'Apenas as situações II e IV estão sujeitas à jurisdição do TCU.' },
      { id: 'B', texto: 'Apenas as situações I, II e IV estão sujeitas à jurisdição do TCU, excluindo-se entidades privadas.' },
      { id: 'C', texto: 'Todas as situações (I, II, III e IV) estão sujeitas à jurisdição do TCU, ainda que envolvam entidades de direito privado ou particulares sem vínculo formal com a Administração.' },
      { id: 'D', texto: 'Apenas as situações I e II estão sujeitas à jurisdição do TCU.' },
      { id: 'E', texto: 'Nenhuma das situações está integralmente sujeita ao TCU.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'O TCU tem jurisdição ampla: alcança sociedades de economia mista (recursos da União), recursos federais repassados a municípios, entidades privadas que recebem contribuições parafiscais e particulares que causem prejuízo ao erário.',
      incorretas: { A: 'I e III também estão sujeitas.', B: 'III também está sujeita.', D: 'III e IV também estão sujeitas.', E: 'Todas estão sujeitas.' },
      conceitoCobrado: 'Competências do TCU',
      pegadinha: 'Restringir a jurisdição do TCU à Administração direta ou indireta.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['TCU', 'controle externo']
  },
  {
    id: 'Q-REAL-DA-23-002',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-23',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'CGU — órgão central do controle interno',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Auditor da CGU foi designado para avaliar a execução de programa federal voltado à melhoria da infraestrutura portuária. Identificou irregularidades na aplicação de recursos, falhas no cumprimento de metas do plano plurianual e ausência de estrutura formal de controle interno em uma unidade. Elaborou relatório, encaminhou recomendações e comunicou os fatos às instâncias competentes. Sobre a organização, competências e atuação da CGU, assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'A CGU integra o Poder Executivo federal e exerce a função de órgão central do sistema de controle interno, atuando na avaliação de metas, fiscalização de programas e apuração de irregularidades.' },
      { id: 'B', texto: 'A CGU integra o Poder Executivo federal e exerce a função de órgão setorial do sistema de controle interno.' },
      { id: 'C', texto: 'A CGU integra o Poder Executivo federal e exerce função de assessoramento direto, atuando na formulação de políticas econômicas.' },
      { id: 'D', texto: 'A CGU integra o Poder Executivo federal e exerce a função de órgão de controle interno, atuando na execução de obras públicas.' },
      { id: 'E', texto: 'A CGU integra o Poder Executivo federal e exerce função de coordenação institucional, atuando na elaboração de leis orçamentárias.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A CGU é órgão CENTRAL do sistema de controle interno do Executivo federal — avalia metas, fiscaliza programas e apura irregularidades.',
      incorretas: { B: 'É órgão central, não setorial.', C: 'Não é órgão de assessoramento direto.', D: 'Não executa obras.', E: 'Não elabora leis orçamentárias.' },
      conceitoCobrado: 'CGU — órgão central do controle interno',
      pegadinha: 'Confundir com órgão setorial.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['CGU', 'controle interno']
  },
  {
    id: 'Q-REAL-DA-23-003',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-23',
    banca: 'Fundatec', orgao: 'CRA-RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Fundatec 2026 — CRA-RS — Auxiliar Administrativo' },
    subtema: 'Sistema de controle interno (art. 74)',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Assinale a alternativa que indica corretamente uma finalidade do sistema de controle interno do Poder Executivo, conforme a Constituição Federal:',
    alternativas: [
      { id: 'A', texto: 'Avaliar se as metas previstas na LDO estão sendo cumpridas.' },
      { id: 'B', texto: 'Avaliar os resultados da aplicação de recursos privados por entidades de direito privado.' },
      { id: 'C', texto: 'Apoiar o controle externo para que este exerça sua missão institucional.' },
      { id: 'D', texto: 'Controlar as operações de créditos, mas não de avais.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Compete ao sistema de controle interno (art. 74, CF) avaliar o cumprimento das metas previstas no plano plurianual, a execução dos programas de governo e dos orçamentos da União — bem como avaliar se as metas da LDO estão sendo cumpridas. A alternativa A está correta.',
      incorretas: { B: 'O controle interno avalia recursos públicos, não privados.', C: 'O apoio ao controle externo é uma das atribuições, mas a alternativa A é a mais precisa quanto à avaliação de metas da LDO.', D: 'O controle abrange créditos e avais.' },
      conceitoCobrado: 'Sistema de controle interno (art. 74)',
      pegadinha: 'Restringir o controle a créditos, sem avais.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['controle interno', 'art. 74']
  },
  {
    id: 'Q-DID-DA-23-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-23',
    subtema: 'Controle interno x externo',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre controle interno e externo, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Interno é exercido pelos Tribunais de Contas; externo, pelas Controladorias.' },
      { id: 'B', texto: 'Interno é exercido dentro de cada Poder (Controladorias — art. 74, CF). Externo é a cargo do Congresso Nacional, com o auxílio do Tribunal de Contas (art. 71, caput, CF): o TCU é órgão auxiliar, não o titular do controle externo.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'Externo é exercido apenas pelo Judiciário.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'INTERNO: dentro de cada Poder (art. 74 — Controladorias). EXTERNO: a cargo do Congresso Nacional, com auxílio do TCU (art. 71, caput). O TCU é órgão auxiliar — não titulariza o controle externo.',
      incorretas: { A: 'Inverte.', C: 'São distintos.', D: 'O externo é exercido pelo Legislativo, com apoio do TCU.' },
      conceitoCobrado: 'Controle interno x externo (titularidade)',
      pegadinha: 'Atribuir o controle externo ao TCU (o titular é o Congresso Nacional).',
      comoApareceEmConcurso: 'Cobrança clássica da titularidade do controle externo.'
    },
    tags: ['controle interno', 'externo', 'TCU']
  },
  {
    id: 'Q-DID-DA-23-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-23',
    subtema: 'Legalidade x mérito',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o controle de legalidade e o controle de mérito, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O Judiciário pode rever legalidade e mérito.' },
      { id: 'B', texto: 'O controle de legalidade pode ser exercido pela Administração E pelo Judiciário; o de mérito é exercido APENAS pela Administração.' },
      { id: 'C', texto: 'O controle de mérito pode ser exercido pelo Judiciário.' },
      { id: 'D', texto: 'Legalidade e mérito são sinônimos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'LEGALIDADE: Administração + Judiciário. MÉRITO: só Administração. O Judiciário não substitui o mérito administrativo.',
      incorretas: { A: 'O Judiciário não revê mérito.', C: 'Não.', D: 'São distintos.' },
      conceitoCobrado: 'Legalidade x mérito',
      pegadinha: 'Achar que o Judiciário revê mérito.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['legalidade', 'mérito']
  },
  {
    id: 'Q-DID-DA-23-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-23',
    subtema: 'Autotutela x tutela',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre autotutela e tutela, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Autotutela: revisão dos próprios atos (Súmulas 346 e 473 do STF). Tutela: supervisão da Administração Direta sobre a Indireta.' },
      { id: 'C', texto: 'Autotutela é a supervisão da Indireta.' },
      { id: 'D', texto: 'Tutela é a revisão dos próprios atos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'AUTOTUTELA: revisão dos próprios atos (anular ilegais, revogar inconvenientes — Súmulas 346 e 473 do STF). TUTELA: supervisão da Direta sobre a Indireta.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'Inverte.' },
      conceitoCobrado: 'Autotutela x tutela',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['autotutela', 'tutela']
  },
  {
    id: 'Q-DID-DA-23-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-23',
    subtema: 'TCU x Congresso — julgamento de contas',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre o julgamento das contas do Presidente da República, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O TCU julga as contas do Presidente.' },
      { id: 'B', texto: 'O TCU APRECIA as contas do Presidente e emite parecer prévio; quem JULGA é o Congresso Nacional (art. 49, IX).' },
      { id: 'C', texto: 'O Congresso apenas opina, e o TCU julga.' },
      { id: 'D', texto: 'Nenhum dos dois atua.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O TCU APRECIA (parecer prévio) e o CONGRESSO JULGA (art. 49, IX). O TCU julga as contas dos DEMAIS administradores.',
      incorretas: { A: 'O TCU aprecia, não julga.', C: 'Inverte.', D: 'Ambos atuam.' },
      conceitoCobrado: 'TCU x Congresso',
      pegadinha: 'Achar que o TCU julga as contas do Presidente.',
      comoApareceEmConcurso: 'Cobrança clássica.'
    },
    tags: ['TCU', 'Congresso', 'contas do Presidente']
  },
  {
    id: 'Q-DID-DA-23-005',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-23',
    subtema: 'Prazo decadencial para anulação',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o prazo decadencial para a Administração anular seus atos, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É de 5 anos, salvo comprovada má-fé (art. 54 da Lei 9.784/99).' },
      { id: 'B', texto: 'É de 10 anos, sem exceção.' },
      { id: 'C', texto: 'É de 2 anos.' },
      { id: 'D', texto: 'Não há prazo.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'O prazo decadencial é de 5 ANOS, salvo comprovada má-fé (art. 54 da Lei 9.784/99).',
      incorretas: { B: 'É 5 anos.', C: 'É 5 anos.', D: 'Há prazo.' },
      conceitoCobrado: 'Prazo decadencial',
      pegadinha: 'Errar o prazo.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['prazo decadencial', 'art. 54']
  },

  /* ============================================================
     DA-24 — Improbidade Administrativa
  ============================================================ */
  {
    id: 'Q-REAL-DA-24-001',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-24',
    banca: 'Instituto AOCP', orgao: 'CODERN/RN', ano: 2026, prova: 'Técnico Portuário — Assistente Administrativo',
    fonte: { descricao: 'Instituto AOCP 2026 — CODERN/RN — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Improbidade — herdeiro e reparação ao erário',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'João é o único filho e sucessor de José, que faleceu em agosto de 2025, sem deixar patrimônio. José causou danos ao erário público ao fraudar licitação de empresa pública federal; a apuração e a confirmação da fraude foram feitas por comissão sindicante, com relatório emitido após o falecimento. Considerando a Lei 8.429/1992, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'João terá que reparar o prejuízo com seu próprio patrimônio pessoal, já que José não deixou patrimônio.' },
      { id: 'B', texto: 'João não tem obrigação de reparar o prejuízo causado pelo pai, ainda que José tivesse deixado patrimônio.' },
      { id: 'C', texto: 'Não há previsão de reparação ao erário, independentemente de estar vivo ou ter falecido.' },
      { id: 'D', texto: 'João teria que reparar o prejuízo caso José tivesse deixado patrimônio, até o limite da herança ou patrimônio transferido.' },
      { id: 'E', texto: 'José somente poderia responder pelo prejuízo com seu patrimônio pessoal caso ainda estivesse vivo.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A obrigação de reparar o dano é TRANSMISSÍVEL aos herdeiros, mas LIMITADA ao valor da herança ou do patrimônio transferido (art. 8º da Lei 8.429/1992). No caso, José não deixou patrimônio — logo, João não responde com seu patrimônio pessoal.',
      incorretas: { A: 'A responsabilidade do herdeiro é limitada à herança.', B: 'Há obrigação, limitada à herança.', C: 'Há previsão legal.', E: 'A obrigação de reparar é transmissível.' },
      conceitoCobrado: 'Improbidade — transmissão da obrigação de reparar',
      pegadinha: 'Achar que o herdeiro responde com patrimônio pessoal ou que a obrigação se extingue com a morte.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['improbidade', 'herdeiro', 'reparação']
  },
  {
    id: 'Q-REAL-DA-24-002',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-24',
    banca: 'Fundatec', orgao: 'CRA-RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Fundatec 2026 — CRA-RS — Auxiliar Administrativo' },
    subtema: 'Improbidade — dolo',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Considerando as disposições da Lei de Improbidade Administrativa (Lei 8.429/1992, com as alterações da Lei 14.230/2021), assinale a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'Consideram-se atos de improbidade as condutas culposas e dolosas tipificadas na lei.' },
      { id: 'B', texto: 'A mera perda patrimonial decorrente da atividade econômica não acarretará improbidade em qualquer hipótese.' },
      { id: 'C', texto: 'O exercício de agente público fica condicionado à apresentação de declaração de imposto de renda e proventos.' },
      { id: 'D', texto: 'Configura improbidade a ação ou omissão decorrente de divergência interpretativa da lei, com base em jurisprudência não pacificada.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A mera perda patrimonial decorrente da atividade econômica NÃO configura, por si só, improbidade — é o que prevê o art. 10, §2º, da Lei 8.429/1992 (com a Lei 14.230/2021).',
      incorretas: { A: 'A lei exige DOLO em todas as modalidades (Lei 14.230/2021).', C: 'A declaração de bens é dever, mas não condiciona o exercício.', D: 'Divergência interpretativa com base em jurisprudência não pacificada NÃO configura improbidade (art. 21, §2º).' },
      conceitoCobrado: 'Improbidade — exclusão de conduta culposa e divergência interpretativa',
      pegadinha: 'Achar que a improbidade admite culpa ou divergência interpretativa.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['improbidade', 'dolo', 'divergência interpretativa']
  },
  {
    id: 'Q-REAL-DA-24-003',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-24',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Improbidade — apreciação pelo TCU',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'A aprovação das contas do agente público pelo tribunal ou conselho de contas impede a aplicação de sanções por improbidade administrativa relativas aos mesmos fatos examinados.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'B',
    explicacao: {
      correta: 'ERRADO. A aprovação das contas pelo Tribunal de Contas NÃO impede a aplicação de sanções por improbidade — as instâncias são independentes. A Lei 8.429/1992 (art. 21) prevê expressamente a independência das instâncias.',
      incorretas: { A: 'A aprovação de contas não obsta a improbidade.' },
      conceitoCobrado: 'Improbidade — independência das instâncias',
      pegadinha: 'Achar que a aprovação de contas "blinda" o agente.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['improbidade', 'TCU', 'independência']
  },
  {
    id: 'Q-DID-DA-24-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-24',
    subtema: 'Modalidades de improbidade',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'São modalidades de improbidade administrativa (Lei 8.429/1992), EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Enriquecimento ilícito.' },
      { id: 'B', texto: 'Prejuízo ao erário.' },
      { id: 'C', texto: 'Atentado a princípios.' },
      { id: 'D', texto: 'Improbidade culposa.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A IMPROBIDADE CULPOSA foi EXTINTA pela Lei 14.230/2021 — não é mais modalidade. As modalidades são: enriquecimento ilícito (art. 9º), prejuízo ao erário (art. 10) e atentado a princípios (art. 11).',
      incorretas: { A: 'É modalidade.', B: 'É modalidade.', C: 'É modalidade.' },
      conceitoCobrado: 'Modalidades de improbidade',
      pegadinha: 'Incluir a modalidade culposa (extinta).',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['improbidade', 'modalidades', 'dolo']
  },
  {
    id: 'Q-DID-DA-24-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-24',
    subtema: 'Dolo (Lei 14.230/2021)',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre o elemento subjetivo da improbidade após a Lei 14.230/2021, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Admite-se culpa em todas as modalidades.' },
      { id: 'B', texto: 'Exige-se DOLO em todas as modalidades — a Lei 14.230/2021 eliminou a modalidade culposa.' },
      { id: 'C', texto: 'Exige-se dolo apenas no enriquecimento ilícito.' },
      { id: 'D', texto: 'A lei não alterou o elemento subjetivo.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A Lei 14.230/2021 passou a exigir DOLO em TODAS as modalidades, eliminando a culposa.',
      incorretas: { A: 'Não admite culpa.', C: 'Exige em todas.', D: 'Houve alteração.' },
      conceitoCobrado: 'Dolo na improbidade',
      pegadinha: 'Achar que a culpa ainda é admitida.',
      comoApareceEmConcurso: 'Cobrança atual.'
    },
    tags: ['improbidade', 'dolo', 'Lei 14.230/2021']
  },
  {
    id: 'Q-DID-DA-24-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-24',
    subtema: 'Improbidade x irregularidade administrativa',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Sobre a diferença entre improbidade e irregularidade administrativa, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Improbidade exige conduta DOLOSA e GRAVE; irregularidade é falha formal ou procedimental, que pode gerar sanções administrativas, mas não necessariamente improbidade.' },
      { id: 'C', texto: 'Toda irregularidade é improbidade.' },
      { id: 'D', texto: 'Toda improbidade é irregularidade leve.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'IMPROBIDADE: dolo + gravidade. IRREGULARIDADE: falha formal, sem dolo e sem gravidade suficiente.',
      incorretas: { A: 'São distintos.', C: 'Nem toda irregularidade é improbidade.', D: 'A improbidade é grave.' },
      conceitoCobrado: 'Improbidade x irregularidade',
      pegadinha: 'Igualar ou confundir.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['improbidade', 'irregularidade']
  },
  {
    id: 'Q-DID-DA-24-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-24',
    subtema: 'Legitimidade da ação de improbidade',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre a legitimidade para propor ação civil pública por improbidade administrativa, após a Lei 14.230/2021 e a jurisprudência do STF, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Qualquer cidadão pode ajuizar a ação diretamente.' },
      { id: 'B', texto: 'A legitimidade é CONCORRENTE e DISJUNTIVA entre o MINISTÉRIO PÚBLICO e as PESSOAS JURÍDICAS INTERESSADAS (entes públicos lesados) — o STF, nas ADIs 7042 e 7043, restabeleceu a legitimidade das pessoas jurídicas interessadas, que a Lei 14.230/2021 havia suprimido. O cidadão não ajuíza diretamente, mas pode representar ao MP.' },
      { id: 'C', texto: 'Só a União pode ajuizar a ação.' },
      { id: 'D', texto: 'A legitimidade é exclusiva do Ministério Público, sem possibilidade de concorrência.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Após a Lei 14.230/2021, o art. 17 atribuía exclusividade ao MP. O STF (ADIs 7042 e 7043) restabeleceu a legitimidade concorrente das pessoas jurídicas interessadas. O cidadão não ajuíza diretamente — pode representar.',
      incorretas: { A: 'O cidadão não ajuíza diretamente.', C: 'Não é só a União.', D: 'O STF restabeleceu a legitimidade concorrente.' },
      conceitoCobrado: 'Legitimidade da ação de improbidade (MP + pessoa jurídica interessada)',
      pegadinha: 'Dizer que o MP é o único legitimado.',
      comoApareceEmConcurso: 'Cobrança atualizada, com base nas ADIs 7042 e 7043.'
    },
    tags: ['improbidade', 'legitimidade', 'MP', 'pessoa jurídica interessada']
  },
  {
    id: 'Q-DID-DA-24-005',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-24',
    subtema: 'Responsabilização de terceiros',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Sobre a responsabilização de terceiros por improbidade administrativa, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Apenas agentes públicos podem ser responsabilizados.' },
      { id: 'B', texto: 'Terceiros que induzam ou concorram para o ato de improbidade também podem ser responsabilizados (art. 3º da Lei 8.429/1992).' },
      { id: 'C', texto: 'Terceiros nunca respondem.' },
      { id: 'D', texto: 'Só respondem se forem servidores.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Terceiros que concorram para o ato também podem ser responsabilizados (art. 3º).',
      incorretas: { A: 'Terceiros também.', C: 'Podem responder.', D: 'Não é necessário ser servidor.' },
      conceitoCobrado: 'Responsabilização de terceiros',
      pegadinha: 'Achar que só agentes públicos respondem.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['improbidade', 'terceiros']
  },

  /* ============================================================
     DA-25 — Processo Administrativo
  ============================================================ */
  {
    id: 'Q-REAL-DA-25-001',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-25',
    banca: 'Fundatec', orgao: 'Prefeitura de Porto Alegre/RS (DEMHAB)', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Fundatec 2026 — Prefeitura de Porto Alegre/RS (DEMHAB) — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Fase de instrução',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'De acordo com a Lei Complementar nº 992/2023 do Município de Porto Alegre, as atividades de ___________ são destinadas a averiguar e comprovar os dados necessários à tomada de decisão e serão realizadas de ofício ou mediante impulsionamento do órgão responsável pelo processo administrativo, sem prejuízo do direito de os interessados proporem atuações probatórias. Assinale a alternativa que preenche corretamente a lacuna:',
    alternativas: [
      { id: 'A', texto: 'Instauração.' },
      { id: 'B', texto: 'Instrução.' },
      { id: 'C', texto: 'Tramitação.' },
      { id: 'D', texto: 'Edição.' },
      { id: 'E', texto: 'Homologação.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A fase de INSTRUÇÃO é destinada a averiguar e comprovar os dados necessários à tomada de decisão.',
      incorretas: { A: 'Instauração é o início.', C: 'Tramitação é o andamento.', D: 'Edição não é fase.', E: 'Homologação é aprovação.' },
      conceitoCobrado: 'Fases do processo administrativo',
      pegadinha: 'Confundir instrução com instauração.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['instrução', 'processo administrativo']
  },
  {
    id: 'Q-REAL-DA-25-002',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-25',
    banca: 'Fundatec', orgao: 'Prefeitura de Porto Alegre/RS (DEMHAB)', ano: 2026, prova: 'Assistente Administrativo',
    fonte: { descricao: 'Fundatec 2026 — Prefeitura de Porto Alegre/RS (DEMHAB) — Assistente Administrativo (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Comunicação dos atos processuais',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Segundo a Lei Complementar nº 992/2023 do Município de Porto Alegre, como se denomina a comunicação dos atos processuais?',
    alternativas: [
      { id: 'A', texto: 'Notificação.' },
      { id: 'B', texto: 'Averbação.' },
      { id: 'C', texto: 'Qualificação.' },
      { id: 'D', texto: 'Apensação.' },
      { id: 'E', texto: 'Indicação.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A comunicação dos atos processuais é feita por NOTIFICAÇÃO.',
      incorretas: { B: 'Averbação é registro.', C: 'Qualificação é identificação.', D: 'Apensação é união de processos.', E: 'Indicação não é comunicação.' },
      conceitoCobrado: 'Comunicação dos atos',
      pegadinha: 'Confundir notificação com outros institutos.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['notificação', 'comunicação']
  },
  {
    id: 'Q-REAL-DA-25-003',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-25',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Lei 9.784/99 — delegação',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Suponha-se que uma autoridade do CREF-15 tenha revogado delegação de competência antes do término previsto no ato delegatório. Nesse caso, é CORRETO afirmar que, embora a delegação seja revogável a qualquer tempo, o ato de revogação deverá ser publicado em meio oficial.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'A',
    explicacao: {
      correta: 'CERTO. A delegação é revogável a qualquer tempo (art. 14 da Lei 9.784/99), e o ato de revogação deve ser publicado no meio oficial.',
      incorretas: { B: 'A afirmação está correta.' },
      conceitoCobrado: 'Delegação de competência',
      pegadinha: 'Achar que a revogação dispensa publicação.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['delegação', 'revogação']
  },
  {
    id: 'Q-REAL-DA-25-004',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-25',
    banca: 'Quadrix', orgao: 'CREF-15/RS', ano: 2026, prova: 'Auxiliar Administrativo',
    fonte: { descricao: 'Quadrix 2026 — CREF-15/RS — Auxiliar Administrativo' },
    subtema: 'Lei 9.784/99 — aplicação subsidiária',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Suponha-se que um processo administrativo específico, no âmbito do CREF-15, seja regido por lei própria, omissa quanto a determinada questão procedimental. Nesse caso, é CORRETO afirmar que se aplicam, subsidiariamente, os preceitos da Lei 9.784/1999.',
    alternativas: [{ id: 'A', texto: 'Certo' }, { id: 'B', texto: 'Errado' }],
    gabarito: 'A',
    explicacao: {
      correta: 'CERTO. A Lei 9.784/99 aplica-se subsidiariamente aos processos administrativos específicos (art. 69).',
      incorretas: { B: 'A afirmação está correta.' },
      conceitoCobrado: 'Aplicação subsidiária da Lei 9.784/99',
      pegadinha: 'Achar que a lei específica exclui a aplicação subsidiária.',
      comoApareceEmConcurso: 'Certo/Errado.'
    },
    tags: ['Lei 9.784/99', 'aplicação subsidiária']
  },
  {
    id: 'Q-DID-DA-25-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-25',
    subtema: 'Processo administrativo x PODC',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre a distinção entre processo administrativo (Lei 9.784/99) e ciclo administrativo (PODC), é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'O processo administrativo (Lei 9.784/99) é o rito jurídico de decisão; o ciclo PODC é o conjunto de funções do gestor.' },
      { id: 'C', texto: 'O PODC é o rito jurídico.' },
      { id: 'D', texto: 'A Lei 9.784/99 regula o PODC.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'PROCESSO ADMINISTRATIVO: rito jurídico de decisão. CICLO PODC: funções do gestor.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'A Lei 9.784/99 regula o processo administrativo, não o PODC.' },
      conceitoCobrado: 'Processo administrativo x PODC',
      pegadinha: 'Confundir os conceitos pelo nome parecido.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['processo administrativo', 'PODC']
  },
  {
    id: 'Q-DID-DA-25-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-25',
    subtema: 'Impedimento x suspeição',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre impedimento e suspeição, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Impedimento: vínculo objetivo (cônjuge, parente até 3º grau, interesse direto). Suspeição: vínculo subjetivo (amizade íntima, inimizade).' },
      { id: 'C', texto: 'Impedimento é subjetivo; suspeição é objetiva.' },
      { id: 'D', texto: 'Ambos são subjetivos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'IMPEDIMENTO: vínculo OBJETIVO. SUSPEIÇÃO: vínculo SUBJETIVO.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'O impedimento é objetivo.' },
      conceitoCobrado: 'Impedimento x suspeição',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['impedimento', 'suspeição']
  },
  {
    id: 'Q-DID-DA-25-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-25',
    subtema: 'Fases do processo administrativo',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'São fases do processo administrativo, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Instauração.' },
      { id: 'B', texto: 'Instrução.' },
      { id: 'C', texto: 'Defesa.' },
      { id: 'D', texto: 'Homologação judicial.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A HOMOLOGAÇÃO JUDICIAL não é fase do processo administrativo — este é o rito da Administração. As fases são: instauração, instrução, defesa, relatório e decisão (além dos recursos).',
      incorretas: { A: 'É fase.', B: 'É fase.', C: 'É fase.' },
      conceitoCobrado: 'Fases do processo administrativo',
      pegadinha: 'Incluir fase judicial.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['processo administrativo', 'fases']
  },
  {
    id: 'Q-DID-DA-25-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-25',
    subtema: 'Recursos administrativos',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre os recursos administrativos, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O pedido de reconsideração é dirigido à autoridade superior.' },
      { id: 'B', texto: 'O recurso hierárquico é dirigido à mesma autoridade.' },
      { id: 'C', texto: 'O pedido de reconsideração é dirigido à MESMA autoridade; o recurso hierárquico, à autoridade SUPERIOR.' },
      { id: 'D', texto: 'Não há recursos administrativos.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'RECONSIDERAÇÃO: mesma autoridade. RECURSO HIERÁRQUICO: autoridade superior.',
      incorretas: { A: 'Inverte.', B: 'Inverte.', D: 'Há recursos.' },
      conceitoCobrado: 'Recursos administrativos',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['recursos administrativos', 'reconsideração', 'hierárquico']
  },

  /* ============================================================
     DA-26 — Bens Públicos
  ============================================================ */
  {
    id: 'Q-DID-DA-26-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-26',
    subtema: 'Classificação dos bens públicos',
    dificuldade: 2, prioridade: 'baixa',
    enunciado: 'São exemplos de bens públicos de uso comum do povo, de uso especial e dominicais, respectivamente:',
    alternativas: [
      { id: 'A', texto: 'Praça, escola e terreno sem uso.' },
      { id: 'B', texto: 'Escola, praça e terreno sem uso.' },
      { id: 'C', texto: 'Terreno sem uso, escola e praça.' },
      { id: 'D', texto: 'Praça, terreno sem uso e escola.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'USO COMUM: praça (coletividade). USO ESPECIAL: escola (serviço público). DOMINICAL: terreno sem uso (sem destinação específica).',
      incorretas: { B: 'Inverte.', C: 'Inverte.', D: 'Inverte.' },
      conceitoCobrado: 'Classificação dos bens públicos',
      pegadinha: 'Inverter as categorias.',
      comoApareceEmConcurso: 'Cobrança de exemplos.'
    },
    tags: ['uso comum', 'uso especial', 'dominical']
  },
  {
    id: 'Q-DID-DA-26-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-26',
    subtema: 'Imprescritibilidade',
    dificuldade: 2, prioridade: 'baixa',
    enunciado: 'Sobre a imprescritibilidade dos bens públicos, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Os bens públicos podem ser adquiridos por usucapião.' },
      { id: 'B', texto: 'Os bens públicos NÃO são adquiríveis por usucapião, independentemente do tempo de ocupação.' },
      { id: 'C', texto: 'Só os bens dominicais podem ser usucapidos.' },
      { id: 'D', texto: 'A imprescritibilidade não se aplica aos bens públicos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'IMPESCRITIBILIDADE: bens públicos NÃO são adquiridos por usucapião, independentemente do tempo.',
      incorretas: { A: 'Não são usucapíveis.', C: 'Nem os dominicais são usucapíveis.', D: 'Aplica-se.' },
      conceitoCobrado: 'Imprescritibilidade',
      pegadinha: 'Achar que o tempo de ocupação gera aquisição.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['imprescritibilidade', 'usucapião']
  },
  {
    id: 'Q-DID-DA-26-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-26',
    subtema: 'Inalienabilidade e alienação',
    dificuldade: 3, prioridade: 'baixa',
    enunciado: 'Sobre a alienação de bens públicos, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É livre, bastando a decisão da autoridade administrativa.' },
      { id: 'B', texto: 'Exige, em regra, autorização legislativa, avaliação prévia e licitação (leilão).' },
      { id: 'C', texto: 'Só pode ocorrer por doação.' },
      { id: 'D', texto: 'É vedada em qualquer hipótese.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A alienação exige, em regra, autorização legislativa, avaliação prévia e licitação (leilão), além de outros requisitos legais.',
      incorretas: { A: 'Não é livre.', C: 'Pode ser venda, doação etc.', D: 'Há hipóteses permitidas.' },
      conceitoCobrado: 'Alienação de bens públicos',
      pegadinha: 'Achar que basta a decisão administrativa.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['alienação', 'leilão']
  },
  {
    id: 'Q-DID-DA-26-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-26',
    subtema: 'Autorização, permissão e concessão de uso',
    dificuldade: 3, prioridade: 'baixa',
    enunciado: 'Sobre as formas de uso de bem público por particular, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Autorização: ato unilateral, precário, interesse do particular. Permissão: ato unilateral, precário, prazo indeterminado. Concessão: contrato, prazo determinado, precedido de licitação.' },
      { id: 'C', texto: 'Concessão é ato unilateral.' },
      { id: 'D', texto: 'Autorização exige licitação.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'AUTORIZAÇÃO: ato precário, interesse do particular. PERMISSÃO: ato precário, prazo indeterminado. CONCESSÃO: contrato, prazo determinado, com licitação.',
      incorretas: { A: 'São distintos.', C: 'Concessão é contrato.', D: 'Autorização não exige licitação.' },
      conceitoCobrado: 'Formas de uso de bem público',
      pegadinha: 'Confundir as três formas.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['autorização', 'permissão', 'concessão de uso']
  },
  {
    id: 'Q-DID-DA-26-005',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-26',
    subtema: 'Afetação x desafetação',
    dificuldade: 2, prioridade: 'baixa',
    enunciado: 'Sobre afetação e desafetação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Afetação é a perda da destinação pública; desafetação é a atribuição de destinação pública.' },
      { id: 'B', texto: 'Afetação é a atribuição de destinação pública; desafetação é a perda dessa destinação.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'Não existem no regime dos bens públicos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'AFETAÇÃO: atribui destinação pública. DESAFETAÇÃO: retira a destinação pública. Bens desafetados podem ser alienados (se dominicais).',
      incorretas: { A: 'Inverte.', C: 'São distintos.', D: 'Existem.' },
      conceitoCobrado: 'Afetação x desafetação',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['afetação', 'desafetação']
  },
  {
    id: 'Q-DID-DA-26-006',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-26',
    subtema: 'Caso concreto — alienação de bem desafetado',
    dificuldade: 3, prioridade: 'baixa',
    enunciado: 'Um prédio municipal funcionava como escola, mas a escola foi transferida para outro prédio novo, e o imóvel ficou sem uso. A Prefeitura quer vendê-lo. Sobre a situação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O imóvel continua sendo bem de uso especial e não pode ser alienado.' },
      { id: 'B', texto: 'Com a desafetação (cessação da destinação pública), o imóvel passa à categoria de bem dominical e pode ser alienado, cumpridos os requisitos legais (autorização legislativa, avaliação e licitação).' },
      { id: 'C', texto: 'O imóvel é bem de uso comum, podendo ser alienado livremente.' },
      { id: 'D', texto: 'A alienação depende apenas da decisão do Prefeito.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Com a DESAFETAÇÃO, o imóvel passa à categoria de bem DOMINICAL e pode ser alienado, cumpridos os requisitos (autorização legislativa, avaliação e licitação).',
      incorretas: { A: 'Houve desafetação.', C: 'Bem de uso comum não é o caso.', D: 'Depende de requisitos legais.' },
      conceitoCobrado: 'Desafetação e alienação',
      pegadinha: 'Achar que o imóvel continua afetado.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['desafetação', 'alienação']
  },
  {
    id: 'Q-DID-DA-26-007',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-26',
    subtema: 'Impenhorabilidade',
    dificuldade: 2, prioridade: 'baixa',
    enunciado: 'Sobre a impenhorabilidade dos bens públicos, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Bens públicos podem ser penhorados livremente.' },
      { id: 'B', texto: 'Bens públicos NÃO podem ser penhorados — a execução contra o Estado segue o regime de precatórios.' },
      { id: 'C', texto: 'Só os bens dominicais são impenhoráveis.' },
      { id: 'D', texto: 'A impenhorabilidade não se aplica no setor público.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'IMPENHORABILIDADE: bens públicos não são penhoráveis — execução por precatórios.',
      incorretas: { A: 'Não podem ser penhorados.', C: 'A regra alcança os bens públicos em geral.', D: 'Aplica-se.' },
      conceitoCobrado: 'Impenhorabilidade',
      pegadinha: 'Achar que é possível a penhora.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['impenhorabilidade', 'precatórios']
  },
  {
    id: 'Q-DID-DA-26-008',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-26',
    subtema: 'Bens de uso comum x uso especial',
    dificuldade: 2, prioridade: 'baixa',
    enunciado: 'Sobre os bens de uso comum e os de uso especial, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Uso comum: destinados à coletividade em geral (ruas, praças, rios). Uso especial: destinados a serviço ou estabelecimento público (escolas, hospitais, repartições).' },
      { id: 'C', texto: 'Uso especial: destinados à coletividade. Uso comum: a serviço público.' },
      { id: 'D', texto: 'Nenhum dos dois pode ser afetado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'USO COMUM: coletividade em geral. USO ESPECIAL: serviço/estabelecimento público.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'Ambos são afetados.' },
      conceitoCobrado: 'Uso comum x uso especial',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['uso comum', 'uso especial']
  },

  /* ============================================================
     DA-27 — Intervenção do Estado e restrições administrativas
  ============================================================ */
  {
    id: 'Q-DID-DA-27-001',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-27',
    subtema: 'Formas de intervenção',
    dificuldade: 2, prioridade: 'baixa',
    enunciado: 'São formas de intervenção do Estado na propriedade, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Desapropriação.' },
      { id: 'B', texto: 'Servidão administrativa.' },
      { id: 'C', texto: 'Tombamento.' },
      { id: 'D', texto: 'Confisco tributário.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'CONFISCO TRIBUTÁRIO não é forma de intervenção do Estado na propriedade (é sanção tributária). As formas de intervenção são: desapropriação, servidão administrativa, requisição, ocupação temporária, limitações administrativas e tombamento.',
      incorretas: { A: 'É forma.', B: 'É forma.', C: 'É forma.' },
      conceitoCobrado: 'Formas de intervenção do Estado',
      pegadinha: 'Incluir confisco tributário.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['intervenção', 'formas']
  },
  {
    id: 'Q-DID-DA-27-002',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-27',
    subtema: 'Desapropriação — indenização',
    dificuldade: 2, prioridade: 'baixa',
    enunciado: 'Sobre a desapropriação ordinária, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Dispensa indenização.' },
      { id: 'B', texto: 'Exige indenização prévia, justa e em dinheiro (regra do art. 5º, XXIV, CF).' },
      { id: 'C', texto: 'A indenização é paga em títulos, sempre.' },
      { id: 'D', texto: 'A indenização é facultativa.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A DESAPROPRIAÇÃO ORDINÁRIA exige indenização PRÉVIA, JUSTA e EM DINHEIRO (regra do art. 5º, XXIV).',
      incorretas: { A: 'Exige indenização.', C: 'Títulos são de hipóteses específicas.', D: 'É obrigatória.' },
      conceitoCobrado: 'Desapropriação — indenização',
      pegadinha: 'Generalizar títulos.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['desapropriação', 'indenização']
  },
  {
    id: 'Q-DID-DA-27-003',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-27',
    subtema: 'Desapropriação extraordinária (art. 243) x sancionatória x indireta',
    dificuldade: 3, prioridade: 'baixa',
    enunciado: 'Sobre a expropriação prevista no art. 243 da CF (cultivo ilegal de plantas psicotrópicas ou exploração de trabalho escravo), é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É a mesma coisa que a desapropriação indireta (tomada irregular da propriedade).' },
      { id: 'B', texto: 'A expropriação do art. 243 é realizada SEM QUALQUER INDENIZAÇÃO ao proprietário, e o bem é destinado à reforma agrária e a programas de habitação popular. Não se confunde com a desapropriação-sanção por descumprimento da função social (indenização em títulos) nem com a desapropriação indireta (tomada irregular, que gera direito a indenização).' },
      { id: 'C', texto: 'Exige indenização prévia, justa e em dinheiro, como a desapropriação ordinária.' },
      { id: 'D', texto: 'Exige indenização apenas das benfeitorias úteis.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Art. 243: expropriação SEM qualquer indenização, destinada à reforma agrária ou a programas de habitação popular. Distinta da desapropriação-sanção (indenização em títulos) e da desapropriação indireta (tomada irregular, com direito a indenização).',
      incorretas: { A: 'Não é desapropriação indireta — é expropriação regular, sem indenização.', C: 'Não exige indenização prévia.', D: 'Não há previsão de indenização das benfeitorias úteis — é sem qualquer indenização.' },
      conceitoCobrado: 'Expropriação do art. 243 x desapropriação-sanção x indireta',
      pegadinha: 'Dizer que o art. 243 prevê "indenização apenas das benfeitorias úteis" (não prevê — é sem qualquer indenização).',
      comoApareceEmConcurso: 'Cobrança cada vez mais frequente da distinção entre os três institutos.'
    },
    tags: ['desapropriação extraordinária', 'art. 243', 'expropriação']
  },
  {
    id: 'Q-DID-DA-27-004',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-27',
    subtema: 'Servidão administrativa x desapropriação',
    dificuldade: 3, prioridade: 'baixa',
    enunciado: 'Sobre a servidão administrativa e a desapropriação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Servidão: ônus real, sem transferência da propriedade. Desapropriação: transfere a propriedade ao Estado, com indenização.' },
      { id: 'C', texto: 'Servidão transfere a propriedade.' },
      { id: 'D', texto: 'Desapropriação não transfere a propriedade.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'SERVIDÃO: ônus real, sem transferência. DESAPROPRIAÇÃO: transfere a propriedade, com indenização.',
      incorretas: { A: 'São distintos.', C: 'Servidão não transfere.', D: 'Desapropriação transfere.' },
      conceitoCobrado: 'Servidão x desapropriação',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['servidão', 'desapropriação']
  },
  {
    id: 'Q-DID-DA-27-005',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-27',
    subtema: 'Requisição administrativa',
    dificuldade: 2, prioridade: 'baixa',
    enunciado: 'Sobre a requisição administrativa, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Transfere definitivamente a propriedade ao Estado.' },
      { id: 'B', texto: 'É o uso TEMPORÁRIO de bem particular em caso de IMINENTE PERIGO PÚBLICO, com indenização ULTERIOR se houver dano (art. 5º, XXV, CF).' },
      { id: 'C', texto: 'Nunca gera indenização.' },
      { id: 'D', texto: 'Não existe na CF/88.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A REQUISIÇÃO é uso TEMPORÁRIO de bem particular em caso de IMINENTE PERIGO PÚBLICO, com indenização ULTERIOR se houver dano (art. 5º, XXV).',
      incorretas: { A: 'Não transfere propriedade.', C: 'Pode gerar indenização ulterior.', D: 'Existe (art. 5º, XXV).' },
      conceitoCobrado: 'Requisição administrativa',
      pegadinha: 'Achar que transfere propriedade.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['requisição', 'art. 5º, XXV']
  },
  {
    id: 'Q-DID-DA-27-006',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-27',
    subtema: 'Ocupação temporária',
    dificuldade: 2, prioridade: 'baixa',
    enunciado: 'Sobre a ocupação temporária, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É o uso temporário de imóvel para obras ou serviços públicos (ex.: canteiro de obras).' },
      { id: 'B', texto: 'Transfere a propriedade ao Estado.' },
      { id: 'C', texto: 'Só ocorre em caso de calamidade.' },
      { id: 'D', texto: 'Não gera direito a indenização.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A OCUPAÇÃO TEMPORÁRIA é uso temporário de imóvel para obras ou serviços públicos (ex.: canteiro de obras).',
      incorretas: { B: 'Não transfere.', C: 'Calamidade é hipótese de requisição.', D: 'Em regra, gera indenização.' },
      conceitoCobrado: 'Ocupação temporária',
      pegadinha: 'Confundir com requisição.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['ocupação temporária']
  },
  {
    id: 'Q-DID-DA-27-007',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-27',
    subtema: 'Limitações administrativas',
    dificuldade: 2, prioridade: 'baixa',
    enunciado: 'Sobre as limitações administrativas, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São restrições gerais e abstratas ao uso da propriedade, em regra sem indenização (salvo se esvaziarem o valor econômico do bem).' },
      { id: 'B', texto: 'Transferem a propriedade ao Estado.' },
      { id: 'C', texto: 'Sempre geram indenização.' },
      { id: 'D', texto: 'Só atingem um único imóvel.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'LIMITAÇÕES: gerais e abstratas (zoneamento, gabarito), em regra sem indenização.',
      incorretas: { B: 'Não transferem.', C: 'Em regra, não indenizam.', D: 'São gerais (não individuais).' },
      conceitoCobrado: 'Limitações administrativas',
      pegadinha: 'Generalizar a indenização.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['limitações administrativas']
  },
  {
    id: 'Q-DID-DA-27-008',
    tipo: 'DIDATICA', area: 'DA', moduloId: 'DA-27',
    subtema: 'Tombamento',
    dificuldade: 2, prioridade: 'baixa',
    enunciado: 'Sobre o tombamento, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Transfere a propriedade ao Estado.' },
      { id: 'B', texto: 'Preserva bem de valor cultural, impondo restrições à conservação e ao uso, SEM transferir a propriedade.' },
      { id: 'C', texto: 'Sempre gera indenização.' },
      { id: 'D', texto: 'Só pode ser feito pela União.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O TOMBAMENTO preserva bem de valor cultural, impondo restrições, SEM transferir a propriedade. Em regra, não gera indenização (salvo se esvaziar o valor econômico).',
      incorretas: { A: 'Não transfere.', C: 'Em regra, não indeniza.', D: 'Pode ser feito por União, Estados, DF e Municípios.' },
      conceitoCobrado: 'Tombamento',
      pegadinha: 'Achar que transfere propriedade.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['tombamento']
  },

  /* ============================================================
     REV-28 — Revisão integrada e domínio por questões
  ============================================================ */
  {
    id: 'Q-DID-REV-28-001',
    tipo: 'DIDATICA', area: 'REV', moduloId: 'REV-28',
    subtema: 'Revisão ativa x revisão passiva',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre as estratégias de revisão, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A revisão passiva (reler, grifar) é mais eficiente que a ativa.' },
      { id: 'B', texto: 'A revisão ativa (questões, flashcards, ensinar) tem maior retenção que a passiva, pois exige recuperação ativa.' },
      { id: 'C', texto: 'Revisão ativa e passiva têm o mesmo efeito.' },
      { id: 'D', texto: 'A revisão só é eficaz se feita uma única vez.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A REVISÃO ATIVA tem maior retenção — exige recuperação ativa (active recall).',
      incorretas: { A: 'Inverte.', C: 'Têm efeitos diferentes.', D: 'A revisão deve ser periódica.' },
      conceitoCobrado: 'Revisão ativa x passiva',
      pegadinha: 'Achar que reler é suficiente.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['revisão ativa', 'revisão passiva']
  },
  {
    id: 'Q-DID-REV-28-002',
    tipo: 'DIDATICA', area: 'REV', moduloId: 'REV-28',
    subtema: 'Banco de erros e classificação',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre o banco de erros e a classificação dos erros, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O banco de erros só conta a quantidade de erros, sem classificação.' },
      { id: 'B', texto: 'O banco de erros registra as questões erradas e classifica a causa (falta de conhecimento, confusão, interpretação, pegadinha, esquecimento, pressa); cada tipo exige ação diferente.' },
      { id: 'C', texto: 'Todos os erros são falta de conhecimento.' },
      { id: 'D', texto: 'O banco substitui a resolução de novas questões.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O banco classifica a CAUSA do erro — cada tipo exige ação diferente.',
      incorretas: { A: 'Há classificação.', C: 'Há seis tipos.', D: 'Novas questões são essenciais.' },
      conceitoCobrado: 'Banco de erros',
      pegadinha: 'Tratar todo erro como falta de conhecimento.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['banco de erros', 'classificação']
  },
  {
    id: 'Q-DID-REV-28-003',
    tipo: 'DIDATICA', area: 'REV', moduloId: 'REV-28',
    subtema: 'Classificação do erro em caso concreto',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Uma estudante resolveu 20 questões de Atos Administrativos e identificou: (i) 5 erros por confundir anulação com revogação; (ii) 3 erros por não saber o conceito de contraposição; (iii) 2 erros por não perceber que o enunciado pediu a alternativa INCORRETA; (iv) 1 erro por responder rápido demais. Sobre a classificação e a ação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Todos os erros são falta de conhecimento, e a ação é a mesma.' },
      { id: 'B', texto: '(i) confusão entre conceitos (ação: comparar); (ii) falta de conhecimento (ação: estudar); (iii) interpretação (ação: treinar leitura); (iv) pressa (ação: gerenciar tempo) — cada tipo exige ação diferente.' },
      { id: 'C', texto: '(i) pressa; (ii) interpretação; (iii) falta de conhecimento; (iv) confusão.' },
      { id: 'D', texto: 'Nenhum dos erros pode ser classificado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: '(i) confusão; (ii) falta de conhecimento; (iii) interpretação; (iv) pressa — cada um com ação própria.',
      incorretas: { A: 'Há tipos distintos.', C: 'Inverte.', D: 'Todos podem ser classificados.' },
      conceitoCobrado: 'Classificação de erros',
      pegadinha: 'Simplificar a classificação.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['classificação de erros', 'estudo']
  },
  {
    id: 'Q-DID-REV-28-004',
    tipo: 'DIDATICA', area: 'REV', moduloId: 'REV-28',
    subtema: 'Revisão espaçada',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre a revisão espaçada, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Programa retornos em intervalos crescentes (1, 3, 7, 15, 30, 60 dias), combatendo o esquecimento no ponto certo.' },
      { id: 'B', texto: 'É sinônimo de revisão contínua sem programação.' },
      { id: 'C', texto: 'Só funciona para flashcards, não para questões.' },
      { id: 'D', texto: 'Dispensa o planejamento.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A REVISÃO ESPAÇADA programa retornos em intervalos crescentes — combate o esquecimento no ponto certo.',
      incorretas: { B: 'É programada.', C: 'Funciona para questões e flashcards.', D: 'Exige planejamento.' },
      conceitoCobrado: 'Revisão espaçada',
      pegadinha: 'Achar que é contínua sem programação.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['revisão espaçada']
  },
  {
    id: 'Q-DID-REV-28-005',
    tipo: 'DIDATICA', area: 'REV', moduloId: 'REV-28',
    subtema: 'Ciclo x cronograma',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre ciclo e cronograma de estudo, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São sinônimos.' },
      { id: 'B', texto: 'Ciclo é flexível (teoria → questões → revisão); cronograma distribui matérias por datas fixas. O ideal é combinar os dois.' },
      { id: 'C', texto: 'Ciclo é rígido.' },
      { id: 'D', texto: 'Cronograma é flexível.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'CICLO: flexível. CRONOGRAMA: rígido. O ideal é combinar.',
      incorretas: { A: 'São distintos.', C: 'Inverte.', D: 'Inverte.' },
      conceitoCobrado: 'Ciclo x cronograma',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['ciclo', 'cronograma']
  },
  {
    id: 'Q-DID-REV-28-006',
    tipo: 'DIDATICA', area: 'REV', moduloId: 'REV-28',
    subtema: 'Integração entre módulos — gestão de pessoas e atendimento',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um servidor atende mal o cidadão, tratando-o com rispidez. Sobre a situação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A situação não envolve improbidade administrativa nem princípio administrativo.' },
      { id: 'B', texto: 'A conduta viola princípios da Administração (impessoalidade e moralidade) e os deveres de atendimento (urbanidade, cortesia); pode gerar responsabilização administrativa, mas não se confunde com improbidade (que exige dolo e gravidade).' },
      { id: 'C', texto: 'A conduta é improbidade.' },
      { id: 'D', texto: 'A conduta é crime.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A conduta viola princípios (impessoalidade, moralidade) e deveres de atendimento. Pode gerar responsabilização administrativa, mas não se confunde com improbidade (que exige dolo e gravidade).',
      incorretas: { A: 'Envolve princípios e deveres.', C: 'Improbidade exige dolo e gravidade.', D: 'Não necessariamente crime.' },
      conceitoCobrado: 'Integração entre ADM-12, DA-15, DA-24',
      pegadinha: 'Classificar toda falha como improbidade.',
      comoApareceEmConcurso: 'Cenário integrado.'
    },
    tags: ['integração', 'atendimento', 'princípios']
  },
  {
    id: 'Q-DID-REV-28-007',
    tipo: 'DIDATICA', area: 'REV', moduloId: 'REV-28',
    subtema: 'Integração entre módulos — atos administrativos e improbidade',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um servidor pratica ato administrativo com vício de finalidade (perseguição a desafeto). Sobre as consequências, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O ato é apenas irregular, sem consequências.' },
      { id: 'B', texto: 'O ato é nulo (vício de finalidade — insanável); pode configurar improbidade se houver DOLO e GRAVIDADE, e gerar responsabilização administrativa, civil e penal.' },
      { id: 'C', texto: 'O ato é válido, pois o servidor tinha competência.' },
      { id: 'D', texto: 'O ato pode ser convalidado, pois o vício de finalidade é sanável.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Vício de finalidade é insanável — o ato é NULO. Pode configurar improbidade (se dolo e gravidade) e gerar responsabilizações.',
      incorretas: { A: 'Há consequências.', C: 'Vício de finalidade torna o ato nulo.', D: 'Vício de finalidade é insanável.' },
      conceitoCobrado: 'Integração entre DA-19 e DA-24',
      pegadinha: 'Achar que o vício de finalidade é convalidável.',
      comoApareceEmConcurso: 'Cenário integrado.'
    },
    tags: ['integração', 'ato administrativo', 'improbidade']
  },
  {
    id: 'Q-DID-REV-28-008',
    tipo: 'DIDATICA', area: 'REV', moduloId: 'REV-28',
    subtema: 'Integração entre módulos — organização e licitação',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um órgão público decide contratar diretamente uma empresa privada para serviços de manutenção, sem licitação, com o argumento de "urgência". Sobre a situação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A contratação direta é sempre válida em caso de urgência.' },
      { id: 'B', texto: 'A contratação direta por urgência exige que a situação se enquadre nas hipóteses legais (emergência ou calamidade) e que sejam cumpridos os requisitos formais (motivação, justificativa, processo administrativo) — caso contrário, é irregular.' },
      { id: 'C', texto: 'A urgência dispensa qualquer formalidade.' },
      { id: 'D', texto: 'A contratação direta é sempre improbidade.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A contratação direta por urgência exige enquadramento legal (emergência/calamidade) e cumprimento dos requisitos formais. Sem isso, é irregular.',
      incorretas: { A: 'Não é sempre válida.', C: 'Exige formalidades.', D: 'Não é sempre improbidade.' },
      conceitoCobrado: 'Integração entre DA-16, DA-21 e DA-24',
      pegadinha: 'Achar que a urgência dispensa requisitos.',
      comoApareceEmConcurso: 'Cenário integrado.'
    },
    tags: ['integração', 'licitação', 'urgência']
  },
  /* ============================================================
     LOTE COMPLEMENTAR — Fase 10 (questões extraídas das provas)
     ADM-01 a ADM-06
  ============================================================ */
  {
    id: 'Q-REAL-ADM-01-009',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-01',
    subtema: 'Etimologia e conceito de Administração',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'A palavra "administração" vem do latim ad (junto de) e ministratio (prestação de serviço). Sobre o conceito de Administração, analise as afirmativas: I. A palavra administração significa "ação de prestar serviço ou ajuda". II. A administração é o processo de planejar, organizar, dirigir e controlar o uso de recursos e competências para alcançar objetivos com eficiência. III. Administração é uma tarefa dispersadora e desintegrada, que separa os interesses das partes. Estão corretas:',
    alternativas: [
      { id: 'A', texto: 'I e II apenas.' },
      { id: 'B', texto: 'III apenas.' },
      { id: 'C', texto: 'I, II e III.' },
      { id: 'D', texto: 'II e III apenas.' },
      { id: 'E', texto: 'I apenas.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'I (etimologia) e II (conceito) estão corretas. III está INCORRETA: a Administração é INTEGRADORA (junta e integra interesses), não dispersadora.',
      incorretas: { B: 'I e II também estão corretas.', C: 'III está incorreta.', D: 'III está incorreta.', E: 'II também está correta.' },
      conceitoCobrado: 'Conceito e etimologia de Administração',
      pegadinha: 'Inverter integradora por dispersadora.',
      comoApareceEmConcurso: 'Cobrança da etimologia e do conceito.'
    },
    tags: ['conceito', 'etimologia']
  },
  {
    id: 'Q-DID-ADM-01-010',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-01',
    subtema: 'Objetivos da Administração',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre os objetivos da Administração, assinale a alternativa INCORRETA:',
    alternativas: [
      { id: 'A', texto: 'Oferecer resultados ou fazer acontecer.' },
      { id: 'B', texto: 'Dar retorno do investimento aos investidores.' },
      { id: 'C', texto: 'Apoiar a comunidade, com responsabilidade social e ecológica.' },
      { id: 'D', texto: 'Satisfazer toda expectativa do consumidor incondicionalmente.' },
      { id: 'E', texto: 'Oferecer resultados que atendam aos stakeholders.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A alternativa D está INCORRETA: a Administração busca satisfazer as expectativas do consumidor DENTRO DE LIMITES legais, éticos e econômicos — não "incondicionalmente".',
      incorretas: { A: 'É objetivo.', B: 'É objetivo.', C: 'É objetivo.', E: 'É objetivo.' },
      conceitoCobrado: 'Objetivos da Administração',
      pegadinha: 'Absolutizar a satisfação do consumidor.',
      comoApareceEmConcurso: 'Cobrança de INCORRETA em cenário.'
    },
    tags: ['objetivos']
  },
{
  id: 'Q-DID-ADM-01-011',
  tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-01',
  subtema: 'Níveis hierárquicos (institucional, intermediário, operacional)',
  dificuldade: 2, prioridade: 'alta',
  enunciado: 'Relacione os níveis hierárquicos às suas características: 1. Nível institucional. 2. Nível intermediário. 3. Nível operacional. ( ) Composto pelos gestores/gerentes de departamentos; concentra-se no desdobramento da estratégia junto a clientes, fornecedores e colaboradores. ( ) Composto por colaboradores, corpo técnico e supervisores; responsável pela execução de tarefas planejadas, propondo correções e melhorias. ( ) Composto pela presidência e diretores; concentra-se na interação com o ambiente externo e em questões estratégicas. A sequência correta é:',
  alternativas: [
    { id: 'A', texto: '1, 2, 3.' },
    { id: 'B', texto: '2, 3, 1.' },
    { id: 'C', texto: '3, 1, 2.' },
    { id: 'D', texto: '3, 2, 1.' }
  ],
  gabarito: 'B',
  explicacao: {
    correta: '2 = intermediário (gerentes, desdobramento da estratégia). 3 = operacional (execução, tarefas). 1 = institucional (presidência, diretores, ambiente externo). Sequência: 2 – 3 – 1.',
    incorretas: { 
      A: 'Inverte.', 
      C: 'Inverte.', 
      D: 'Inverte.' 
    },
    conceitoCobrado: 'Níveis hierárquicos',
    pegadinha: 'Inverter os níveis.',
    comoApareceEmConcurso: 'Associação.'
  },
  tags: ['níveis hierárquicos']
},
  {
    id: 'Q-REAL-ADM-02-009',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-02',
    subtema: 'Funções administrativas — identificação',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Sobre as funções administrativas (PODC), é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A função de Controle significa o ato de estruturar os recursos e órgãos incumbidos de sua administração.' },
      { id: 'B', texto: 'A Direção é a terceira função do PODC, vindo depois do Planejamento e da Organização, e antecedendo o Controle.' },
      { id: 'C', texto: 'A função de Organização está relacionada com a maneira pela qual os objetivos devem ser alcançados por meio da atividade de pessoas e da aplicação de recursos.' },
      { id: 'D', texto: 'O Planejamento está voltado para o presente e monitora os resultados auferidos durante um período.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A Direção é a terceira função do PODC (Planejamento → Organização → Direção → Controle).',
      incorretas: { A: 'Controle é medir e corrigir, não estruturar.', C: 'Organização é estrutural; a descrição confunde com Direção.', D: 'Planejamento olha o FUTURO, não o presente.' },
      conceitoCobrado: 'Funções administrativas',
      pegadinha: 'Confundir as funções.',
      comoApareceEmConcurso: 'Cobrança da ordem e das atribuições.'
    },
    tags: ['PODC', 'funções']
  },
  {
    id: 'Q-DID-ADM-02-010',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-02',
    subtema: 'Tomada de decisão — etapas',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'A tomada de decisão é um processo que pode ser entendido a partir de etapas sequenciais. A etapa na qual o decisor determina exatamente o que é importante na resolução do problema, a partir de seus valores, interesses e preferências, é denominada:',
    alternativas: [
      { id: 'A', texto: 'Desenvolvimento de alternativas.' },
      { id: 'B', texto: 'Definição do problema.' },
      { id: 'C', texto: 'Coleta de informações.' },
      { id: 'D', texto: 'Identificação de critérios.' },
      { id: 'E', texto: 'Avaliação de alternativas.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A IDENTIFICAÇÃO DE CRITÉRIOS é a etapa em que o decisor define o que é importante para a decisão, com base em seus valores e preferências.',
      incorretas: { A: 'Desenvolvimento de alternativas é gerar opções.', B: 'Definição do problema é identificar a situação.', C: 'Coleta de informações é levantar dados.', E: 'Avaliação de alternativas é comparar opções.' },
      conceitoCobrado: 'Etapas da tomada de decisão',
      pegadinha: 'Confundir identificação de critérios com definição do problema.',
      comoApareceEmConcurso: 'Cobrança de etapa específica.'
    },
    tags: ['tomada de decisão', 'critérios']
  },
  {
    id: 'Q-REAL-ADM-03-009',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-03',
    subtema: 'Planejamento estratégico — horizonte temporal',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'Os planos podem ser classificados quanto ao seu horizonte temporal. Os planos estratégicos são caracterizados por um horizonte temporal:',
    alternativas: [
      { id: 'A', texto: 'De longo prazo.' },
      { id: 'B', texto: 'De médio prazo.' },
      { id: 'C', texto: 'De curto prazo.' },
      { id: 'D', texto: 'Indefinido.' },
      { id: 'E', texto: 'Imediato.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Os planos ESTRATÉGICOS têm horizonte de LONGO PRAZO (geralmente 5, 10 ou mais anos). Táticos = médio prazo. Operacionais = curto prazo.',
      incorretas: { B: 'Médio prazo é tático.', C: 'Curto prazo é operacional.', D: 'Tem prazo definido.', E: 'Imediato não é horizonte de planejamento.' },
      conceitoCobrado: 'Níveis de planejamento — horizonte temporal',
      pegadinha: 'Confundir os horizontes.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['planejamento estratégico', 'horizonte']
  },
  {
    id: 'Q-DID-ADM-03-010',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-03',
    subtema: 'Etapas do planejamento',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre as etapas do processo de planejamento, assinale a alternativa que associa corretamente a etapa à sua descrição:',
    alternativas: [
      { id: 'A', texto: 'Definição dos objetivos — estabelecer quais são os caminhos possíveis.' },
      { id: 'B', texto: 'Situação atual — definição de onde estamos agora e o que precisa ser feito.' },
      { id: 'C', texto: 'Alternativas de ação — definição para onde queremos ir.' },
      { id: 'D', texto: 'Premissas em relação ao futuro — avaliação dos resultados obtidos após a execução do planejamento.' },
      { id: 'E', texto: 'Escolher a melhor alternativa — seguir o que foi planejado e avaliar resultados.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'SITUAÇÃO ATUAL: definição de onde estamos agora e o que precisa ser feito.',
      incorretas: { A: 'Definição de objetivos é definir PARA ONDE vamos, não caminhos.', C: 'Alternativas de ação é definir caminhos possíveis, não destino.', D: 'Incorreta. A avaliação dos resultados obtidos após a execução pertence ao controle. As premissas em relação ao futuro dizem respeito aos cenários e condições que devem ser considerados antes da execução do planejamento.', E: 'Escolher a melhor alternativa é definir o melhor caminho; seguir e avaliar é a etapa final.' },
      conceitoCobrado: 'Etapas do planejamento',
      pegadinha: 'Confundir a descrição de cada etapa.',
      comoApareceEmConcurso: 'Cobrança de associação.'
    },
    tags: ['planejamento', 'etapas']
  },
  {
    id: 'Q-REAL-ADM-04-009',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-04',
    subtema: 'Especialização do trabalho',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Dentre os elementos do processo de organização, o grau em que as tarefas são divididas e padronizadas, visando à rapidez e à eficiência para que possam ser aprendidas e realizadas, corresponde ao conceito de:',
    alternativas: [
      { id: 'A', texto: 'Especialização do trabalho.' },
      { id: 'B', texto: 'Amplitude de controle.' },
      { id: 'C', texto: 'Centralização.' },
      { id: 'D', texto: 'Cadeia de comando.' },
      { id: 'E', texto: 'Formalização.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A ESPECIALIZAÇÃO DO TRABALHO é o grau em que as tarefas são divididas e padronizadas.',
      incorretas: { B: 'Amplitude é o número de subordinados por gestor.', C: 'Centralização é a concentração de decisões.', D: 'Cadeia de comando é a linha de autoridade.', E: 'Formalização é o grau de regras escritas.' },
      conceitoCobrado: 'Elementos da organização',
      pegadinha: 'Confundir com formalização.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['especialização', 'organização']
  },
  {
    id: 'Q-DID-ADM-04-010',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-04',
    subtema: 'Estrutura sem fronteiras',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'O conceito de Estrutura Organizacional introduzido por Jack Welch, que parte de pressupostos como a eliminação da cadeia de comando, a existência de amplitude de controle ilimitada e a substituição dos departamentos por equipes autônomas, é conhecido como:',
    alternativas: [
      { id: 'A', texto: 'Estrutura Funcional.' },
      { id: 'B', texto: 'Estrutura Matricial.' },
      { id: 'C', texto: 'Organização Holográfica.' },
      { id: 'D', texto: 'Organização sem Fronteiras.' },
      { id: 'E', texto: 'Estrutura em Rede.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'ORGANIZAÇÃO SEM FRONTEIRAS (boundaryless organization) é o conceito de Jack Welch: elimina a cadeia de comando, amplitude ilimitada e equipes autônomas.',
      incorretas: { A: 'Funcional é por funções.', B: 'Matricial tem dupla subordinação.', C: 'Holográfica é outro conceito.', E: 'Em rede é outra configuração.' },
      conceitoCobrado: 'Estruturas organizacionais contemporâneas',
      pegadinha: 'Confundir com estrutura em rede.',
      comoApareceEmConcurso: 'Cobrança de conceito específico.'
    },
    tags: ['estrutura sem fronteiras', 'Jack Welch']
  },
  {
    id: 'Q-DID-ADM-04-011',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-04',
    subtema: 'Departamentalização matricial — cenário',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'O IFPB criou uma equipe temporária para desenvolver um novo sistema de gestão acadêmica. Nessa equipe, foram designados servidores de diferentes setores — TI, administração, comunicação e finanças — que continuam respondendo aos seus chefes imediatos, mas também passam a receber orientações e tarefas de um coordenador específico do projeto. Essa forma de organização caracteriza qual tipo de departamentalização?',
    alternativas: [
      { id: 'A', texto: 'Funcional.' },
      { id: 'B', texto: 'Por produtos ou serviços.' },
      { id: 'C', texto: 'Territorial.' },
      { id: 'D', texto: 'Matricial.' },
      { id: 'E', texto: 'Por clientes.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A departamentalização MATRICIAL combina autoridade funcional (chefes de setor) com autoridade de projeto (coordenador) — dupla subordinação.',
      incorretas: { A: 'Funcional é por área, sem dimensão de projeto.', B: 'Por produto é por linha de produto.', C: 'Territorial é por localização.', E: 'Por cliente é por perfil de público.' },
      conceitoCobrado: 'Departamentalização matricial',
      pegadinha: 'Confundir com funcional.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['matricial', 'departamentalização']
  },
  {
    id: 'Q-REAL-ADM-05-009',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-05',
    subtema: 'Autoridade burocrática',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'As relações de autoridade estabelecidas entre superiores e subordinados podem ter como base diferentes fatores. O comando legitimado do superior sobre os subordinados, de maneira racional, por normas e regras aceitas dentro de um contexto organizacional, corresponde a uma autoridade com base na:',
    alternativas: [
      { id: 'A', texto: 'Tradição.' },
      { id: 'B', texto: 'Relação pessoal.' },
      { id: 'C', texto: 'Burocracia.' },
      { id: 'D', texto: 'Competência técnica.' },
      { id: 'E', texto: 'Carisma.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A AUTORIDADE BUROCRÁTICA (racional-legal) é baseada em normas e regras aceitas no contexto organizacional (Weber).',
      incorretas: { A: 'Tradição é autoridade tradicional.', B: 'Relação pessoal não é a base racional-legal.', D: 'Competência técnica é outro tipo de poder.', E: 'Carisma é autoridade carismática.' },
      conceitoCobrado: 'Tipos de autoridade (Weber)',
      pegadinha: 'Confundir os tipos.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['autoridade', 'burocracia', 'Weber']
  },
  {
    id: 'Q-DID-ADM-05-010',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-05',
    subtema: 'Motivação extrínseca',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Quando falamos que a motivação pressupõe que o comportamento humano pode ser projetado, modelado ou mudado por meio da utilização adequada dos vários tipos de recompensas ou punições disponíveis no meio ambiente, estamos nos referindo a qual tipo de motivação?',
    alternativas: [
      { id: 'A', texto: 'Intrínseca.' },
      { id: 'B', texto: 'Exponencial.' },
      { id: 'C', texto: 'Subjetiva.' },
      { id: 'D', texto: 'Extrínseca.' },
      { id: 'E', texto: 'Competitiva.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A MOTIVAÇÃO EXTRÍNSECA é baseada em recompensas e punições externas (ambiente).',
      incorretas: { A: 'Intrínseca é interna (autorrealização).', B: 'Não existe.', C: 'Subjetiva é interna.', E: 'Competitiva não é tipo.' },
      conceitoCobrado: 'Motivação intrínseca x extrínseca',
      pegadinha: 'Inverter.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['motivação extrínseca']
  },
  {
    id: 'Q-DID-ADM-05-011',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-05',
    subtema: 'Teoria ERC (Existência, Relacionamento e Crescimento)',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Um Programa de QVT estabelece: (1) implantação de novo plano de cargos e salários; (2) grupos de convivência e oficinas colaborativas; (3) programa de capacitação e certificação interna. Com base na Teoria ERC (Existência, Relacionamento e Crescimento), as ações 1, 2 e 3 correspondem, respectivamente, a necessidades de:',
    alternativas: [
      { id: 'A', texto: 'Crescimento, relacionamento e existência.' },
      { id: 'B', texto: 'Relacionamento, crescimento e existência.' },
      { id: 'C', texto: 'Existência, relacionamento e crescimento.' },
      { id: 'D', texto: 'Relacionamento, existência e crescimento.' },
      { id: 'E', texto: 'Existência, crescimento e relacionamento.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: '1 = EXISTÊNCIA (salário). 2 = RELACIONAMENTO (convivência). 3 = CRESCIMENTO (capacitação). Sequência: existência – relacionamento – crescimento.',
      incorretas: { A: 'Inverte.', B: 'Inverte.', D: 'Inverte.', E: 'Inverte.' },
      conceitoCobrado: 'Teoria ERC (Clayton Alderfer)',
      pegadinha: 'Inverter as três necessidades.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['ERC', 'Alderfer']
  },
  {
    id: 'Q-DID-ADM-05-012',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-05',
    subtema: 'Papéis de Mintzberg — atividades',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Um gestor desempenhou: (1) recebeu relatórios e compartilhou informações com a equipe; (2) manteve redes de comunicação dentro e fora da organização; (3) motivou a equipe e orientou individualmente; (4) redistribuiu recursos entre projetos; (5) representou a instituição em cerimônia; (6) identificou oportunidades de melhoria e implementou mudança. Com base nos papéis de Mintzberg, assinale a associação correta (interpessoal / informacional / decisorial):',
    alternativas: [
      { id: 'A', texto: 'Interpessoal: 1, 2, 5. Informacional: 3, 6. Decisorial: 4.' },
      { id: 'B', texto: 'Interpessoal: 3, 5. Informacional: 1. Decisorial: 4, 6, 2.' },
      { id: 'C', texto: 'Interpessoal: 3, 5, 2. Informacional: 1. Decisorial: 4, 6.' },
      { id: 'D', texto: 'Interpessoal: 1, 3, 5. Informacional: 2. Decisorial: 4, 6.' },
      { id: 'E', texto: 'Interpessoal: 3, 5. Informacional: 1, 2. Decisorial: 4, 6.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'INTERPESSOAL: 3 (liderança) e 5 (representação). INFORMACIONAL: 1 (disseminação) e 2 (ligação). DECISORIAL: 4 (alocação de recursos) e 6 (empreendedorismo).',
      incorretas: { A: '1 é informacional; 2 é informacional.', B: '2 é informacional.', C: '2 é informacional.', D: '1 é informacional.' },
      conceitoCobrado: 'Papéis de Mintzberg',
      pegadinha: 'Confundir ligação com interpessoal.',
      comoApareceEmConcurso: 'Cenário aplicado com múltiplas atividades.'
    },
    tags: ['Mintzberg', 'papéis']
  },
  {
    id: 'Q-DID-ADM-05-013',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-05',
    subtema: 'Liderança — teoria dos traços',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Segundo a Teoria da Liderança, quanto aos traços de personalidade, a liderança é caracterizada:',
    alternativas: [
      { id: 'A', texto: 'Pelas maneiras e estilos de se comportar de um líder.' },
      { id: 'B', texto: 'Pelas características marcantes, notáveis em um líder.' },
      { id: 'C', texto: 'Pela adequação do comportamento do líder às circunstâncias da situação.' },
      { id: 'D', texto: 'Pela postura autoritária do líder frente aos seus liderados.' },
      { id: 'E', texto: 'Por um comportamento passivo diante das diferentes situações.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A TEORIA DOS TRAÇOS defende que o líder possui características marcantes (traços inatos ou adquiridos) que o distinguem.',
      incorretas: { A: 'Descreve teorias comportamentais.', C: 'Descreve teorias contingenciais.', D: 'Descreve estilo autocrático.', E: 'Não corresponde.' },
      conceitoCobrado: 'Teorias de liderança',
      pegadinha: 'Confundir com comportamental ou contingencial.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['liderança', 'traços']
  },
  {
    id: 'Q-REAL-ADM-06-009',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-06',
    subtema: 'Controle — ênfase nas exceções',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um sistema de controle eficaz tem preocupação com aquilo que é essencial, com os desvios que necessitam de alguma ação gerencial. Essa característica é denominada:',
    alternativas: [
      { id: 'A', texto: 'Critérios múltiplos.' },
      { id: 'B', texto: 'Foco estratégico.' },
      { id: 'C', texto: 'Aceitação.' },
      { id: 'D', texto: 'Economia.' },
      { id: 'E', texto: 'Ênfase nas exceções.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'A ÊNFASE NAS EXCEÇÕES é a característica do controle que prioriza os desvios significativos — o que é essencial.',
      incorretas: { A: 'Critérios múltiplos é outra característica.', B: 'Foco estratégico é outra.', C: 'Aceitação é outra.', D: 'Economia é outra.' },
      conceitoCobrado: 'Características do controle',
      pegadinha: 'Confundir com foco estratégico.',
      comoApareceEmConcurso: 'Cobrança de característica específica.'
    },
    tags: ['controle', 'ênfase nas exceções']
  },
  {
    id: 'Q-DID-ADM-06-010',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-06',
    subtema: 'Indicadores estratégicos x de produtividade',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Os indicadores de produtividade avaliam o rendimento e a eficiência de cada colaborador. Já os indicadores estratégicos:',
    alternativas: [
      { id: 'A', texto: 'Medem a relação da empresa com a concorrência.' },
      { id: 'B', texto: 'Mensuram a capacidade de resposta de um processo.' },
      { id: 'C', texto: 'Compreendem qualquer desvio ou não conformidade de um processo produtivo.' },
      { id: 'D', texto: 'Indicam onde está a empresa em relação aos objetivos estabelecidos anteriormente.' },
      { id: 'E', texto: 'São compostos pela relação percentual entre lucro e vendas totais.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Os INDICADORES ESTRATÉGICOS indicam onde a empresa está em relação aos objetivos previamente definidos.',
      incorretas: { A: 'Relação com a concorrência é outro indicador.', B: 'Capacidade de resposta é outro.', C: 'Desvios são não conformidades.', E: 'Lucro/vendas é indicador financeiro.' },
      conceitoCobrado: 'Indicadores estratégicos',
      pegadinha: 'Confundir com indicadores de produtividade.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['indicadores', 'estratégicos']
  },
  /* ============================================================
     LOTE COMPLEMENTAR — Fase 10 (questões extraídas das provas)
     ADM-07 a AP-14
  ============================================================ */
  {
    id: 'Q-REAL-ADM-07-009',
    tipo: 'DIDATICA', area: 'ADM', moduloId: 'ADM-07',
    subtema: 'Pilares da gestão de pessoas',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'A administração de recursos humanos abrange o conjunto de técnicas, procedimentos e instrumentos que permite às organizações atrair, manter e desenvolver os talentos humanos. Assinale a alternativa que inclui alguns desses pilares para a gestão de pessoas nas empresas:',
    alternativas: [
      { id: 'A', texto: 'Liderança, prolixidade, treinamento e capacitação.' },
      { id: 'B', texto: 'Trabalho em equipe, treinamento e comunicação.' },
      { id: 'C', texto: 'Processos, prolixidade e trabalho em equipe.' },
      { id: 'D', texto: 'Comunicação, laconismo e vaidade.' },
      { id: 'E', texto: 'Capacitação, vaidade e liderança.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'São pilares da gestão de pessoas: trabalho em equipe, treinamento e comunicação — além de liderança, capacitação, motivação e avaliação de desempenho.',
      incorretas: { A: 'Prolixidade não é pilar.', C: 'Prolixidade não é pilar.', D: 'Laconismo e vaidade não são pilares.', E: 'Vaidade não é pilar.' },
      conceitoCobrado: 'Pilares da gestão de pessoas',
      pegadinha: 'Incluir termos negativos (prolixidade, vaidade) como pilares.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['gestão de pessoas', 'pilares']
  },
  {
    id: 'Q-REAL-ADM-07-010',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-07',
    banca: 'Instituto AOCP', orgao: 'IFPB', ano: 2025, prova: 'Assistente em Administração',
    fonte: { descricao: 'Instituto AOCP 2025 — IFPB — Assistente em Administração (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Testes psicológicos — Quati, Palográfico, PMK, Rorschach, FIGS, DTO',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Em um processo seletivo, a equipe de gestão de pessoas decidiu utilizar diferentes testes psicológicos para compreender o perfil comportamental e motivacional dos candidatos. Relacione os testes às suas características: 1. Quati. 2. Palográfico. 3. PMK. 4. Rorschach e Zulliger. 5. FIGS. 6. DTO. ( ) Avalia o ritmo e a qualidade do trabalho, além de aspectos como inibição, temperamento e inteligência. ( ) Analisa a personalidade por meio de tensões musculares involuntárias. ( ) Avalia a personalidade a partir das escolhas situacionais, identificando atitudes e funções perceptivas. ( ) Busca compreender a estrutura da personalidade do indivíduo. ( ) Avalia responsabilidade profissional, relações interpessoais e autoconceito. ( ) Analisa estilos cognitivos e comportamentais necessários ao desempenho das funções organizacionais. A sequência correta é:',
    alternativas: [
      { id: 'A', texto: '2 – 3 – 1 – 4 – 5 – 6.' },
      { id: 'B', texto: '1 – 2 – 3 – 4 – 6 – 5.' },
      { id: 'C', texto: '3 – 2 – 1 – 5 – 4 – 6.' },
      { id: 'D', texto: '2 – 1 – 3 – 4 – 5 – 6.' },
      { id: 'E', texto: '1 – 3 – 2 – 4 – 6 – 5.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'PALOGRÁFICO (2): ritmo/qualidade do trabalho. PMK (3): tensões musculares involuntárias. QUATI (1): escolhas situacionais. RORSCHACH/ZULLIGER (4): estrutura da personalidade. FIGS (5): responsabilidade profissional, relações interpessoais e autoconceito. DTO (6): estilos cognitivos e comportamentais. Sequência: 2 – 3 – 1 – 4 – 5 – 6.',
      incorretas: { B: 'Inverte 1, 2, 3.', C: 'Inverte.', D: 'Inverte 1 e 2.', E: 'Inverte.' },
      conceitoCobrado: 'Testes psicológicos em seleção',
      pegadinha: 'Confundir os testes e suas siglas.',
      comoApareceEmConcurso: 'Associação de testes a características.'
    },
    tags: ['testes psicológicos', 'Quati', 'Palográfico']
  },
  {
    id: 'Q-REAL-ADM-07-011',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-07',
    banca: 'Instituto AOCP', orgao: 'IFPB', ano: 2025, prova: 'Assistente em Administração',
    fonte: { descricao: 'Instituto AOCP 2025 — IFPB — Assistente em Administração (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Cargo — atribuições x especificações',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'A Diretoria de Gestão de Pessoas iniciou a revisão do seu plano de cargos. Durante o processo, uma equipe foi encarregada de: (1) detalhar as atividades desempenhadas, os resultados esperados, o grau de importância de cada tarefa e os equipamentos utilizados; (2) reunir habilidades, qualificações, esforços físicos e traços pessoais necessários para o bom desempenho das atividades. Com base nas definições clássicas da gestão de cargos, assinale a alternativa correta:',
    alternativas: [
      { id: 'A', texto: 'O primeiro processo corresponde às especificações do cargo, e o segundo às atribuições.' },
      { id: 'B', texto: 'Ambos os processos se referem às atribuições do cargo.' },
      { id: 'C', texto: 'O primeiro processo corresponde às atribuições do cargo, e o segundo às especificações do cargo.' },
      { id: 'D', texto: 'O primeiro processo representa as funções essenciais, e o segundo a análise ocupacional.' },
      { id: 'E', texto: 'O primeiro processo é parte das especificações, e o segundo trata da avaliação de desempenho.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'ATRIBUIÇÕES do cargo: o que o ocupante FAZ (atividades, resultados, tarefas, equipamentos). ESPECIFICAÇÕES do cargo: QUEM pode ocupar (habilidades, qualificações, esforços, traços).',
      incorretas: { A: 'Inverte.', B: 'São conceitos distintos.', D: 'Não corresponde.', E: 'Não corresponde.' },
      conceitoCobrado: 'Cargo — atribuições x especificações',
      pegadinha: 'Inverter os conceitos.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['cargo', 'atribuições', 'especificações']
  },
  {
    id: 'Q-REAL-ADM-07-012',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-07',
    banca: 'Instituto AOCP', orgao: 'IFPB', ano: 2025, prova: 'Assistente em Administração',
    fonte: { descricao: 'Instituto AOCP 2025 — IFPB — Assistente em Administração (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Avaliação de desempenho — Avaliação 90º',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'O setor de gestão de pessoas do IFPB optou por um modelo de avaliação de desempenho que confere ao chefe imediato a responsabilidade exclusiva pela aplicação do instrumento e emissão do parecer final. Esse modelo foi escolhido devido à sua agilidade e ao conhecimento detalhado que o gestor tem da equipe. Contudo, por ser unidirecional, apresenta riscos inerentes de viés de julgamento. O modelo adotado é:',
    alternativas: [
      { id: 'A', texto: 'Avaliação 180º.' },
      { id: 'B', texto: 'Avaliação 360º.' },
      { id: 'C', texto: 'Autoavaliação.' },
      { id: 'D', texto: 'Avaliação 90º.' },
      { id: 'E', texto: 'Avaliação Matriz Nove Boxes.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A AVALIAÇÃO 90º (ou vertical) é aquela em que APENAS o chefe imediato avalia o subordinado — unidirecional, ágil, mas sujeita a viés.',
      incorretas: { A: 'A 180º inclui o próprio avaliado e o chefe.', B: 'A 360º inclui chefes, pares, subordinados e autoavaliação.', C: 'Autoavaliação é só do próprio avaliado.', E: 'Nove Boxes é matriz de talentos.' },
      conceitoCobrado: 'Modelos de avaliação de desempenho',
      pegadinha: 'Confundir 90º com 180º ou 360º.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['avaliação de desempenho', 'avaliação 90º']
  },
  {
    id: 'Q-REAL-ADM-08-009',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-08',
    banca: 'CPCon', orgao: 'UEPB', ano: 2025, prova: 'Assistente Administrativo',
    fonte: { descricao: 'CPCon 2025 — UEPB — Assistente Administrativo' },
    subtema: 'Função da comunicação — informação',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'A comunicação pode ser definida como o compartilhamento de informações entre duas ou mais pessoas, a fim de alcançar um entendimento comum. Dentre suas funções no contexto organizacional, a comunicação pode cumprir o papel de facilitadora do processo decisório, permitindo a circulação de dados necessários para a tomada de decisões, exercendo uma função de:',
    alternativas: [
      { id: 'A', texto: 'Feedback.' },
      { id: 'B', texto: 'Controle.' },
      { id: 'C', texto: 'Motivação.' },
      { id: 'D', texto: 'Expressão emocional.' },
      { id: 'E', texto: 'Informação.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'A comunicação exerce a função de INFORMAÇÃO quando fornece dados necessários à tomada de decisão.',
      incorretas: { A: 'Feedback é retorno.', B: 'Controle é outra função.', C: 'Motivação é outra função.', D: 'Expressão emocional é outra função.' },
      conceitoCobrado: 'Funções da comunicação',
      pegadinha: 'Confundir informação com feedback.',
      comoApareceEmConcurso: 'Cobrança de função específica.'
    },
    tags: ['comunicação', 'funções']
  },
  {
    id: 'Q-REAL-ADM-08-010',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-08',
    banca: 'FUNCERN', orgao: 'IFRN', ano: 2024, prova: 'Assistente em Administração',
    fonte: { descricao: 'FUNCERN 2024 — IFRN — Assistente em Administração' },
    subtema: 'Barreiras à comunicação — percepção seletiva',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'A comunicação eficiente é um fator de grande relevância na execução das atividades diárias de um grupo de trabalho. Sobre as barreiras no processo de comunicação, é CORRETO afirmar:',
    alternativas: [
      { id: 'A', texto: 'A filtragem deve ser um mecanismo incentivado em uma organização que visa aperfeiçoar seus processos internos de comunicação.' },
      { id: 'B', texto: 'A percepção seletiva é o desvio de interpretação baseado em aspectos como preconceitos e experiências anteriores.' },
      { id: 'C', texto: 'As emoções não influenciam o modo como um indivíduo interpretará uma mensagem; não podem ser consideradas barreira.' },
      { id: 'D', texto: 'O excesso de informação contribui com a fluidez do processo de comunicação em uma organização.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A PERCEPÇÃO SELETIVA é uma barreira à comunicação: o receptor interpreta a mensagem com base em preconceitos, experiências e valores pessoais.',
      incorretas: { A: 'A filtragem é barreira, não mecanismo a incentivar.', C: 'As emoções influenciam a interpretação.', D: 'O excesso de informação é barreira (sobrecarga).' },
      conceitoCobrado: 'Barreiras à comunicação',
      pegadinha: 'Confundir barreiras com mecanismos positivos.',
      comoApareceEmConcurso: 'Cobrança de definição.'
    },
    tags: ['barreiras', 'percepção seletiva']
  },
  {
    id: 'Q-REAL-ADM-08-011',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-08',
    banca: 'Instituto AOCP', orgao: 'IFPB', ano: 2025, prova: 'Assistente em Administração',
    fonte: { descricao: 'Instituto AOCP 2025 — IFPB — Assistente em Administração' },
    subtema: 'Negociação — ganha-perde → perde-perde',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'Em uma negociação entre dois setores, o Setor A insistiu em manter seus prazos, argumentando que qualquer ajuste traria prejuízo ao seu cronograma. O Setor B, para evitar atritos e encerrar rapidamente o impasse, aceitou integralmente as condições impostas, mesmo sabendo que isso comprometeria suas metas e a qualidade do serviço. Semanas depois, o Setor B demonstrou insatisfação e resistência em cooperar com o Setor A em novas demandas, gerando prejuízo à relação de ambos. Considerando os tipos de resultados em negociação, a situação evoluiu de:',
    alternativas: [
      { id: 'A', texto: 'perde-ganha para ganha-ganha.' },
      { id: 'B', texto: 'ganha-perde para perde-perde, pois a vitória inicial de uma parte resultou em prejuízos para ambas a longo prazo.' },
      { id: 'C', texto: 'perde-perde para ganha-perde.' },
      { id: 'D', texto: 'ganha-ganha para ganha-perde.' },
      { id: 'E', texto: 'perde-ganha para ganha-perde.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'No início, o Setor A GANHOU e o Setor B PERDEU (ganha-perde). A longo prazo, a resistência do Setor B gerou prejuízo para ambos (perde-perde).',
      incorretas: { A: 'Não evoluiu para ganha-ganha.', C: 'Inverte.', D: 'Não evoluiu de ganha-ganha.', E: 'Não evoluiu para ganha-perde.' },
      conceitoCobrado: 'Tipos de resultado em negociação',
      pegadinha: 'Confundir ganha-perde com perde-ganha.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['negociação', 'ganha-perde', 'perde-perde']
  },
  {
    id: 'Q-REAL-ADM-09-009',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-09',
    banca: 'FUNCERN', orgao: 'IFRN', ano: 2024, prova: 'Assistente em Administração',
    fonte: { descricao: 'FUNCERN 2024 — IFRN — Assistente em Administração' },
    subtema: 'Sete ferramentas da qualidade',
    dificuldade: 3, prioridade: 'media',
    enunciado: 'As Sete Ferramentas da Qualidade são instrumentos que permitem a melhoria da gestão dos processos de trabalho. Sobre essa temática, é CORRETO afirmar:',
    alternativas: [
      { id: 'A', texto: 'O Diagrama de Ishikawa permite a estruturação e a hierarquização das principais causas que podem contribuir para um determinado efeito.' },
      { id: 'B', texto: 'O Diagrama de Pareto permite a identificação dos problemas relacionados a um efeito por meio da quantificação e do registro da frequência de sua ocorrência.' },
      { id: 'C', texto: 'O Histograma é a representação gráfica de um fluxo de tarefas a partir do detalhamento sequenciado de suas etapas.' },
      { id: 'D', texto: 'O Diagrama de Dispersão é caracterizado por sua natureza qualitativa, permitindo a coleta de dados subjetivos.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'O DIAGRAMA DE ISHIKAWA (espinha de peixe) estrutura e hierarquiza as CAUSAS de um efeito (6M).',
      incorretas: { B: 'O Pareto prioriza por frequência/impacto (80/20), não apenas identifica.', C: 'O Histograma é gráfico de distribuição de frequência, não fluxo.', D: 'O Diagrama de Dispersão é quantitativo (correlação entre variáveis).' },
      conceitoCobrado: 'Sete ferramentas da qualidade',
      pegadinha: 'Confundir as funções de cada ferramenta.',
      comoApareceEmConcurso: 'Cobrança de definição.'
    },
    tags: ['ferramentas da qualidade', 'Ishikawa']
  },
  {
    id: 'Q-REAL-ADM-09-010',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-09',
    banca: 'Instituto AOCP', orgao: 'IFPB', ano: 2025, prova: 'Assistente em Administração',
    fonte: { descricao: 'Instituto AOCP 2025 — IFPB — Assistente em Administração' },
    subtema: 'Diagrama de Pareto — aplicação (80/20)',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Em uma universidade pública, o Pró-reitor de Administração identifica alto volume de reclamações sobre a demora nos processos administrativos. Rita, Pró-reitora Adjunta, sugere criar uma equipe para registrar e analisar os problemas, identificando os fatores que mais impactam o atraso. Ela esclarece que a estratégia é baseada no princípio segundo o qual, em muitos casos, 80% das consequências são resultados de 20% das causas. Esse princípio fundamenta a ferramenta da qualidade denominada:',
    alternativas: [
      { id: 'A', texto: 'Diagrama de Ishikawa.' },
      { id: 'B', texto: 'Fluxograma.' },
      { id: 'C', texto: 'Histograma.' },
      { id: 'D', texto: 'Diagrama de Pareto.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'O princípio 80/20 é a base do DIAGRAMA DE PARETO, que prioriza as causas mais impactantes.',
      incorretas: { A: 'Ishikawa identifica causas (6M), não prioriza por 80/20.', B: 'Fluxograma representa fluxo.', C: 'Histograma mostra distribuição de frequência.' },
      conceitoCobrado: 'Diagrama de Pareto',
      pegadinha: 'Confundir com Ishikawa.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['Pareto', '80/20']
  },
  {
    id: 'Q-REAL-ADM-10-009',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-10',
    banca: 'IDECAN', orgao: 'UFPB', ano: 2016, prova: 'Assistente em Administração',
    fonte: { descricao: 'IDECAN 2016 — UFPB — Assistente em Administração (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Tipos de almoxarifado',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre os diferentes tipos de estoque que podem existir em uma empresa, assinale a afirmativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'O almoxarifado de matérias-primas é onde estão as peças que servem de apoio à manutenção dos equipamentos e do edifício.' },
      { id: 'B', texto: 'O almoxarifado de materiais auxiliares é composto por insumos ou matérias-primas que serão transformadas durante o processo produtivo em um produto final.' },
      { id: 'C', texto: 'O almoxarifado de produtos acabados é onde são armazenados os materiais que auxiliam e participam do processo de transformação do produto; no entanto, não se agregam a ele.' },
      { id: 'D', texto: 'O almoxarifado intermediário é onde se encontram os produtos em fase de processamento, ainda não acabados, ou subconjuntos que estão armazenados para a composição do produto final.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'O ALMOXARIFADO INTERMEDIÁRIO guarda produtos em fase de processamento (semiacabados) ou subconjuntos para a composição do produto final.',
      incorretas: { A: 'Descreve o almoxarifado de manutenção.', B: 'Descreve o almoxarifado de matérias-primas.', C: 'Descreve o almoxarifado de materiais auxiliares.' },
      conceitoCobrado: 'Tipos de almoxarifado',
      pegadinha: 'Trocar as definições.',
      comoApareceEmConcurso: 'Cobrança de definição.'
    },
    tags: ['almoxarifado', 'tipos de estoque']
  },
  {
    id: 'Q-REAL-ADM-10-010',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-10',
    banca: 'FADE', orgao: 'UFPE', ano: 2023, prova: 'Assistente em Administração',
    fonte: { descricao: 'FADE 2023 — UFPE — Assistente em Administração' },
    subtema: 'Atividades da gestão de materiais',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'A administração de materiais envolve a gestão de todos os processos ligados à cadeia de suprimentos, desde os pontos de origem com a aquisição das matérias-primas até a entrega do produto ao consumidor final. Assinale a única alternativa que NÃO constitui atividade da gestão de materiais:',
    alternativas: [
      { id: 'A', texto: 'Seleção de fornecedores.' },
      { id: 'B', texto: 'Transporte.' },
      { id: 'C', texto: 'Armazenagem.' },
      { id: 'D', texto: 'Definição dos preços.' },
      { id: 'E', texto: 'Embalagens.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A DEFINIÇÃO DOS PREÇOS é atividade de marketing/finanças, não da gestão de materiais.',
      incorretas: { A: 'Seleção de fornecedores é atividade.', B: 'Transporte é atividade.', C: 'Armazenagem é atividade.', E: 'Embalagens é atividade.' },
      conceitoCobrado: 'Atividades da gestão de materiais',
      pegadinha: 'Incluir atividade de outra área.',
      comoApareceEmConcurso: 'Cobrança de INCORRETA.'
    },
    tags: ['gestão de materiais', 'atividades']
  },
  {
    id: 'Q-REAL-ADM-10-011',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-10',
    banca: 'FADE', orgao: 'UFPE', ano: 2023, prova: 'Assistente em Administração',
    fonte: { descricao: 'FADE 2023 — UFPE — Assistente em Administração' },
    subtema: 'WMS — Warehouse Management System',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'A logística de armazenagem compreende atividades gerenciais e operacionais para armazenar e proteger produtos, com o objetivo de minimizar custos operacionais e manter um serviço de qualidade. Entre os diferentes sistemas de armazenagem, pode-se citar o WMS. Acerca desse sistema, é correto afirmar que ele:',
    alternativas: [
      { id: 'A', texto: 'É voltado apenas para a identificação dos pallets que armazenam os itens do estoque.' },
      { id: 'B', texto: 'É voltado apenas para a criação de etiquetas adesivas de produtos perecíveis.' },
      { id: 'C', texto: 'Permite o controle de entrada e saída de mercadorias disponíveis.' },
      { id: 'D', texto: 'É focado exclusivamente na administração de mercadorias hospitalares.' },
      { id: 'E', texto: 'Cria uma logística própria, não se ajustando a outros sistemas.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'O WMS (Warehouse Management System) é o sistema de gestão de armazém que controla entrada, saída e movimentação de mercadorias.',
      incorretas: { A: 'Não se limita a pallets.', B: 'Não se limita a etiquetas.', D: 'Não é exclusivo de hospital.', E: 'Integra-se a outros sistemas.' },
      conceitoCobrado: 'WMS',
      pegadinha: 'Restringir o WMS a uma única função.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['WMS', 'armazenagem']
  },
  {
    id: 'Q-REAL-ADM-11-009',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-11',
    banca: 'Instituto AOCP', orgao: 'IFPB', ano: 2025, prova: 'Assistente em Administração',
    fonte: { descricao: 'Instituto AOCP 2025 — IFPB — Assistente em Administração' },
    subtema: 'BPM — fase de Mudanças de Arquitetura',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'A gestão BPM (Business Process Management) segue um ciclo de vida estruturado, composto por etapas integradas e interdependentes. A maioria dos modelos de ciclo de vida pode ser descrita como um processo iterativo, dividido em cinco fases. Uma dessas fases é denominada Mudanças de Arquitetura, na qual há:',
    alternativas: [
      { id: 'A', texto: 'O trabalho de modelação, de análise, de desenho e de medição do desempenho dos processos, buscando identificar os principais processos organizacionais atuais e interfuncionais no contexto das metas e dos objetivos desejados.' },
      { id: 'B', texto: 'O processo de criação do modelo permanente de Gestão Corporativa (Arquiteturas) de Processos e de governança para a organização, incluindo a medição e a monitorização contínua dos processos de negócio e da tecnologia.' },
      { id: 'C', texto: 'A realização de todos os planos da fase que a antecede, sendo coordenada e gerida pelo patrocinador do programa e pelo gestor do projeto, os quais providenciam a elaboração de um cronograma estruturado de implementação.' },
      { id: 'D', texto: 'A elaboração de uma estratégia e de um plano, fundamentalmente baseados em processos, para a organização, a partir da compreensão dos objetivos organizacionais, garantindo uma proposta de valor atrativa aos clientes.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A fase de MUDANÇAS DE ARQUITETURA cria o modelo permanente de gestão corporativa (arquiteturas de processos) e de governança, com medição e monitorização contínua dos processos de negócio e da tecnologia.',
      incorretas: { A: 'Descreve a fase de descoberta/modelagem.', C: 'Descreve a fase de implementação.', D: 'Descreve a fase de estratégia/planejamento.' },
      conceitoCobrado: 'BPM — fases do ciclo de vida',
      pegadinha: 'Confundir a fase de arquitetura com modelagem ou implementação.',
      comoApareceEmConcurso: 'Cobrança de fase específica.'
    },
    tags: ['BPM', 'gestão por processos']
  },
  {
    id: 'Q-REAL-ADM-12-009',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-12',
    banca: 'FADE', orgao: 'UFPE', ano: 2023, prova: 'Assistente em Administração',
    fonte: { descricao: 'FADE 2023 — UFPE — Assistente em Administração' },
    subtema: 'Formas de atendimento obrigatório',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'Uma das características do servidor público é o atendimento ao cidadão com qualidade e presteza. Analise, quanto à obrigatoriedade, as formas de atendimento: 1) Agir com respeito. 2) Ser acessível e gentil. 3) Não duvidar da boa-fé do cidadão. 4) Atender à fila por ordem de chegada (salvo situações previstas em lei). São formas de atendimento de uso OBRIGATÓRIO:',
    alternativas: [
      { id: 'A', texto: '1, 2 e 3, apenas.' },
      { id: 'B', texto: '2 e 4, apenas.' },
      { id: 'C', texto: '2, 3 e 4, apenas.' },
      { id: 'D', texto: '1, 2, 3 e 4.' },
      { id: 'E', texto: '3 e 4, apenas.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Todas as quatro formas são OBRIGATÓRIAS: respeito, acessibilidade/gentileza, boa-fé e ordem de chegada (salvo exceções legais, como atendimento preferencial).',
      incorretas: { A: 'A 4 também é obrigatória.', B: '1 e 3 também são obrigatórias.', C: '1 também é obrigatória.', E: '1 e 2 também são obrigatórias.' },
      conceitoCobrado: 'Formas de atendimento obrigatório',
      pegadinha: 'Excluir alguma das formas.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['atendimento', 'formas obrigatórias']
  },
  {
    id: 'Q-REAL-ADM-12-010',
    tipo: 'REAL', area: 'ADM', moduloId: 'ADM-12',
    banca: 'FADE', orgao: 'UFPE', ano: 2023, prova: 'Assistente em Administração',
    fonte: { descricao: 'FADE 2023 — UFPE — Assistente em Administração' },
    subtema: 'Trabalho em equipe — característica INCORRETA',
    dificuldade: 2, prioridade: 'media',
    enunciado: 'O trabalho em equipe é de fundamental importância para a qualidade do produto a ser desenvolvido. Assinale a única alternativa que NÃO está associada ao trabalho em equipe:',
    alternativas: [
      { id: 'A', texto: 'Presença de independência de membros do grupo.' },
      { id: 'B', texto: 'Participação de lideranças no grupo.' },
      { id: 'C', texto: 'Comprometimento e empatia.' },
      { id: 'D', texto: 'Compromisso da equipe com a pontualidade na entrega.' },
      { id: 'E', texto: 'Preocupação com a eficiência e eficácia.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A INDEPENDÊNCIA de membros do grupo NÃO está associada ao trabalho em equipe — a equipe pressupõe INTERDEPENDÊNCIA e cooperação.',
      incorretas: { B: 'Liderança participativa está associada.', C: 'Comprometimento e empatia estão associados.', D: 'Pontualidade está associada.', E: 'Eficiência e eficácia estão associadas.' },
      conceitoCobrado: 'Trabalho em equipe',
      pegadinha: 'Inverter independência por interdependência.',
      comoApareceEmConcurso: 'Cobrança de INCORRETA.'
    },
    tags: ['trabalho em equipe', 'independência']
  },
  {
    id: 'Q-DID-AP-14-007',
    tipo: 'DIDATICA', area: 'AP', moduloId: 'AP-14',
    subtema: 'Reforma de 1967 (Decreto-Lei 200)',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'A Reforma Administrativa de 1967, por meio do Decreto-Lei 200, é considerada uma etapa intermediária na evolução da Administração Pública brasileira. Sua principal característica foi:',
    alternativas: [
      { id: 'A', texto: 'A introdução da burocracia weberiana no Brasil, com a criação do DASP.' },
      { id: 'B', texto: 'A descentralização para autarquias e fundações, transferindo atividades para a Administração Indireta.' },
      { id: 'C', texto: 'A criação do Conselho Nacional de Justiça (CNJ) e da súmula vinculante.' },
      { id: 'D', texto: 'A inserção da eficiência no caput do art. 37 da CF/88.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A REFORMA DE 1967 (Decreto-Lei 200) promoveu a DESCENTRALIZAÇÃO para autarquias e fundações — a chamada "administração indireta".',
      incorretas: { A: 'A burocracia weberiana foi introduzida em 1936.', C: 'CNJ e súmula vinculante são de 2004 (EC 45).', D: 'A eficiência foi inserida pela EC 19/1998.' },
      conceitoCobrado: 'Reforma de 1967 (Decreto-Lei 200)',
      pegadinha: 'Confundir com a Reforma de 1936 ou 1995.',
      comoApareceEmConcurso: 'Cobrança de associação.'
    },
    tags: ['reforma 1967', 'Decreto-Lei 200', 'descentralização']
  },
  /* ============================================================
     LOTE COMPLEMENTAR — Fase 10 (questões extraídas das provas)
     DA-15 a DA-26 — fechamento do lote
  ============================================================ */
  {
    id: 'Q-REAL-DA-15-005',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-15',
    banca: 'IBFC', orgao: 'UFPB', ano: 2025, prova: 'Assistente em Administração',
    fonte: { descricao: 'IBFC 2025 — UFPB — Assistente em Administração' },
    subtema: 'Princípios expressos — identificação do INCORRETO',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'A administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios obedecerá aos princípios expressos no caput do art. 37 da CF/88. Assinale a alternativa INCORRETA quanto a esses princípios:',
    alternativas: [
      { id: 'A', texto: 'Efetividade.' },
      { id: 'B', texto: 'Legalidade.' },
      { id: 'C', texto: 'Impessoalidade.' },
      { id: 'D', texto: 'Moralidade.' },
      { id: 'E', texto: 'Publicidade.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A EFETIVIDADE não é princípio expresso do caput do art. 37. O rol é: legalidade, impessoalidade, moralidade, publicidade e eficiência (LIMPE). Efetividade é uma dimensão de desempenho (impacto social), não princípio constitucional.',
      incorretas: { B: 'É princípio expresso (LIMPE).', C: 'É princípio expresso.', D: 'É princípio expresso.', E: 'É princípio expresso.' },
      conceitoCobrado: 'LIMPE — identificação de princípio não previsto',
      pegadinha: 'Incluir "efetividade" (dimensão de desempenho) como se fosse princípio do LIMPE.',
      comoApareceEmConcurso: 'Cobrança de INCORRETA em rol.'
    },
    tags: ['LIMPE', 'art. 37', 'efetividade']
  },
  {
    id: 'Q-REAL-DA-16-005',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-16',
    banca: 'IDECAN', orgao: 'UFPB', ano: 2016, prova: 'Assistente em Administração',
    fonte: { descricao: 'IDECAN 2016 — UFPB — Assistente em Administração' },
    subtema: 'Acumulação de cargos — hipótese VEDADA',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Nos termos do capítulo destinado à Administração Pública na Constituição Federal, assinale a alternativa que apresenta hipótese VEDADA de acumulação de cargos públicos:',
    alternativas: [
      { id: 'A', texto: 'Dois cargos públicos de professor de dedicação exclusiva.' },
      { id: 'B', texto: 'Um cargo público de professor e um cargo público de médico.' },
      { id: 'C', texto: 'Dois cargos públicos de enfermeiro no mesmo hospital público.' },
      { id: 'D', texto: 'Um cargo público de professor estadual e um cargo público de professor municipal.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'São permitidas apenas as três hipóteses do art. 37, XVI: (a) dois cargos de professor; (b) um de professor + um técnico/científico; (c) dois privativos de profissionais de saúde. "Professor + médico" NÃO se enquadra em nenhuma delas (médico é profissional de saúde, não "técnico/científico"), logo é VEDADA.',
      incorretas: { A: 'Hipótese (a) — permitida.', C: 'Hipótese (c) — permitida (saúde + saúde).', D: 'Hipótese (a) — permitida (2 professor).' },
      conceitoCobrado: 'Acumulação — análise da hipótese vedada',
      pegadinha: 'Confundir "profissional de saúde" com "técnico/científico" na hipótese (b).',
      comoApareceEmConcurso: 'Cobrança de hipótese VEDADA, não das permitidas.'
    },
    tags: ['acumulação', 'art. 37, XVI']
  },
  {
    id: 'Q-REAL-DA-17-007',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-17',
    banca: 'IBFC', orgao: 'UFPB', ano: 2025, prova: 'Assistente em Administração',
    fonte: { descricao: 'IBFC 2025 — UFPB — Assistente em Administração' },
    subtema: 'Requisitos para investidura em cargo público',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Luiz, brasileiro, com 16 anos completos, em pleno gozo dos direitos políticos, quite com obrigações militares e eleitorais e apto física e mentalmente, pretende realizar concurso público. Assinale a alternativa que apresenta qual requisito básico para investidura em cargo público NÃO está observado, nos termos da Lei 8.112/90:',
    alternativas: [
      { id: 'A', texto: 'Nacionalidade brasileira.' },
      { id: 'B', texto: 'Idade mínima de 18 anos.' },
      { id: 'C', texto: 'Estar em gozo dos direitos políticos.' },
      { id: 'D', texto: 'Aptidão física e mental.' },
      { id: 'E', texto: 'Quitação com as obrigações militares e eleitorais.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A Lei 8.112/90 (art. 5º, V) exige IDADE MÍNIMA DE 18 ANOS. Luiz tem apenas 16 — requisito não atendido.',
      incorretas: { A: 'Atendido (brasileiro).', C: 'Atendido (gozo dos direitos políticos).', D: 'Atendido (apto).', E: 'Atendido (quite).' },
      conceitoCobrado: 'Requisitos para investidura (art. 5º da Lei 8.112/90)',
      pegadinha: 'Achar que 16 anos é idade mínima.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['investidura', 'requisitos', 'Lei 8.112']
  },
  {
    id: 'Q-REAL-DA-17-008',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-17',
    banca: 'IBFC', orgao: 'UFPB', ano: 2025, prova: 'Assistente em Administração',
    fonte: { descricao: 'IBFC 2025 — UFPB — Assistente em Administração (gabarito inferido — conferir com o gabarito oficial da banca)' },
    subtema: 'Validade do concurso público',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Maria Luiza prestou concurso público em janeiro de 2022. No que tange às disposições da Lei 8.112/90, a validade do concurso por ela prestado pode ocorrer até:',
    alternativas: [
      { id: 'A', texto: 'Junho de 2022.' },
      { id: 'B', texto: 'Janeiro de 2026.' },
      { id: 'C', texto: 'Janeiro de 2027.' },
      { id: 'D', texto: 'Janeiro de 2024.' },
      { id: 'E', texto: 'Janeiro de 2023.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A validade do concurso é de ATÉ 2 ANOS, prorrogável UMA VEZ por igual período (art. 12 da Lei 8.112/90). Portanto, o prazo máximo é 4 anos: janeiro de 2022 + 4 anos = JANEIRO DE 2026.',
      incorretas: { A: 'Prazo insuficiente.', C: 'Excede o máximo legal.', D: 'Corresponde apenas ao prazo inicial (2 anos), não ao máximo.', E: 'Prazo insuficiente.' },
      conceitoCobrado: 'Validade do concurso',
      pegadinha: 'Confundir o prazo inicial (2 anos) com o máximo (4 anos).',
      comoApareceEmConcurso: 'Cálculo aplicado.'
    },
    tags: ['concurso', 'validade', 'Lei 8.112']
  },
  {
    id: 'Q-REAL-DA-17-009',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-17',
    banca: 'IDECAN', orgao: 'UFPB', ano: 2016, prova: 'Assistente em Administração',
    fonte: { descricao: 'IDECAN 2016 — UFPB — Assistente em Administração' },
    subtema: 'Afastamento por casamento',
    dificuldade: 1, prioridade: 'alta',
    enunciado: 'Em relação às noções de regime jurídico estatutário federal, o servidor faz jus à concessão de _____ dias em função de casamento. Assinale a alternativa que preenche corretamente a lacuna:',
    alternativas: [
      { id: 'A', texto: 'Dois.' },
      { id: 'B', texto: 'Três.' },
      { id: 'C', texto: 'Cinco.' },
      { id: 'D', texto: 'Oito.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'O servidor pode ausentar-se do serviço por 8 (OITO) dias consecutivos em razão de casamento (art. 97, III, "a" da Lei 8.112/90), sem prejuízo da remuneração.',
      incorretas: { A: 'Dois dias — não previsto.', B: 'Três dias — não previsto.', C: 'Cinco dias — não previsto.' },
      conceitoCobrado: 'Afastamento por casamento (art. 97, III, "a")',
      pegadinha: 'Confundir com outros prazos de afastamento.',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['afastamento', 'casamento', 'Lei 8.112']
  },
  {
    id: 'Q-REAL-DA-17-010',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-17',
    banca: 'COMPERVE', orgao: 'UFRN', ano: 2025, prova: 'Assistente em Administração',
    fonte: { descricao: 'COMPERVE 2025 — UFRN — Assistente em Administração' },
    subtema: 'Deveres do servidor — ordens manifestamente ilegais',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'A servidora pública federal Kleciane realizou reunião com sua equipe para ressaltar a importância da prestação eficiente do serviço público aos usuários, baseada no correto desempenho dos deveres do servidor, conforme definidos na Lei 8.112/90. Dentre os deveres previstos no regime jurídico dos servidores públicos civis da União, Kleciane ressalta o de:',
    alternativas: [
      { id: 'A', texto: 'Cumprir as ordens superiores, exceto quando manifestamente ilegais.' },
      { id: 'B', texto: 'Exercer função de gerência ou participar da administração de sociedade privada, personificada ou não.' },
      { id: 'C', texto: 'Promover manifestação de apreço ou desapreço no recinto da repartição.' },
      { id: 'D', texto: 'Manter, sob sua chefia imediata em cargo ou função de confiança, cônjuge, companheiro ou parente até o segundo grau civil.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 116, IV da Lei 8.112/90: é dever do servidor "cumprir as ordens superiores, exceto quando manifestamente ilegais".',
      incorretas: { B: 'É PROIBIÇÃO (art. 117, V), não dever.', C: 'É PROIBIÇÃO (art. 117, VI), não dever.', D: 'É PROIBIÇÃO (art. 117, VIII), não dever.' },
      conceitoCobrado: 'Deveres do servidor (art. 116) x proibições (art. 117)',
      pegadinha: 'Confundir deveres com proibições.',
      comoApareceEmConcurso: 'Cobrança da distinção.'
    },
    tags: ['deveres', 'Lei 8.112', 'ordens ilegais']
  },
  {
    id: 'Q-REAL-DA-17-011',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-17',
    banca: 'Instituto AOCP', orgao: 'IFPB', ano: 2025, prova: 'Assistente em Administração',
    fonte: { descricao: 'Instituto AOCP 2025 — IFPB — Assistente em Administração' },
    subtema: 'Reitor de Instituto Federal — requisitos',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Um docente, italiano e doutor, pertencente ao Quadro de Pessoal Ativo Permanente dos campi que integram o IFPB, com cinco anos de efetivo exercício em instituição federal de educação profissional e tecnológica, atuando na Carreira do Magistério do Ensino Básico, deseja ser reitor. Com base na Lei 11.892/2008, esse docente poderá se candidatar ao cargo desejado?',
    alternativas: [
      { id: 'A', texto: 'Não, tendo em vista que, para se candidatar ao cargo de reitor, é necessário ter pós-doutorado.' },
      { id: 'B', texto: 'Não, tendo em vista a ausência de cumprimento de tempo mínimo de serviço, que é de dez anos.' },
      { id: 'C', texto: 'Sim, pois o cargo de reitor pode ser ocupado por qualquer servidor efetivo do Instituto Federal, independentemente de ser docente.' },
      { id: 'D', texto: 'Não, tendo em vista que, para ocupar o cargo de reitor, é necessário ter nacionalidade brasileira.' },
      { id: 'E', texto: 'Sim, pois a lei exige apenas que o docente seja efetivo, doutor e tenha cinco anos de exercício em instituição federal.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A Lei 11.892/2008 exige que o reitor seja brasileiro (nato ou naturalizado). O docente é ITALIANO — não preenche o requisito de nacionalidade brasileira.',
      incorretas: { A: 'A lei não exige pós-doutorado.', B: 'A lei exige 5 anos de efetivo exercício, não 10.', C: 'Reitor é escolhido entre os docentes da carreira do magistério.', E: 'Falta o requisito de nacionalidade brasileira.' },
      conceitoCobrado: 'Requisitos do cargo de reitor (Lei 11.892/2008)',
      pegadinha: 'Omitir a exigência de nacionalidade brasileira.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['reitor', 'IFPB', 'nacionalidade']
  },
  {
    id: 'Q-REAL-DA-18-008',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-18',
    banca: 'IBFC', orgao: 'UFPB', ano: 2025, prova: 'Assistente em Administração',
    fonte: { descricao: 'IBFC 2025 — UFPB — Assistente em Administração' },
    subtema: 'Poder hierárquico — definição',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'O poder de que dispõe o Executivo para distribuir e escalonar as funções de seus órgãos, ordenar e rever a atuação de seus agentes, estabelecendo a relação de subordinação entre os servidores do seu quadro de pessoal é definido como poder:',
    alternativas: [
      { id: 'A', texto: 'De polícia.' },
      { id: 'B', texto: 'Disciplinar.' },
      { id: 'C', texto: 'Hierárquico.' },
      { id: 'D', texto: 'Processual.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A definição corresponde ao PODER HIERÁRQUICO: distribuir e escalonar funções, ordenar e rever a atuação dos agentes, estabelecer subordinação.',
      incorretas: { A: 'Poder de polícia limita direitos do particular.', B: 'Poder disciplinar pune faltas.', D: 'Poder processual não é categoria doutrinária.' },
      conceitoCobrado: 'Poder hierárquico',
      pegadinha: 'Confundir com poder disciplinar.',
      comoApareceEmConcurso: 'Cobrança de definição.'
    },
    tags: ['poder hierárquico']
  },
  {
    id: 'Q-REAL-DA-18-009',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-18',
    banca: 'IBFC', orgao: 'UFPB', ano: 2025, prova: 'Assistente em Administração',
    fonte: { descricao: 'IBFC 2025 — UFPB — Assistente em Administração' },
    subtema: 'Poderes administrativos — afirmativa correta',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre os poderes administrativos, assinale a afirmativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'O poder hierárquico é aquele em que o Chefe do Congresso Nacional distribui e escalona as funções de seus órgãos e agentes, criando relação de subordinação.' },
      { id: 'B', texto: 'No tocante ao poder discricionário, este não admite análise de conveniência e oportunidade quando da prática do ato, não tendo o agente liberdade para agir.' },
      { id: 'C', texto: 'Poder disciplinar é aquele conferido à Administração com o intuito de restringir, frenar, condicionar e limitar o exercício de direitos e atividades econômicas dos particulares.' },
      { id: 'D', texto: 'A autoexecutoriedade é atributo do poder de polícia que constitui possibilidade de execução imediata do ato administrativo, independentemente de prévia manifestação do Poder Judiciário.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A AUTOEXECUTORIEDADE é atributo do poder de polícia: a Administração executa diretamente seus atos, sem precisar de autorização judicial prévia.',
      incorretas: { A: 'O poder hierárquico é do Executivo — não do "Chefe do Congresso Nacional".', B: 'O poder discricionário ADMITE análise de conveniência e oportunidade.', C: 'A descrição é do PODER DE POLÍCIA, não do disciplinar.' },
      conceitoCobrado: 'Poderes administrativos — distinções',
      pegadinha: 'Trocar as definições entre hierárquico, discricionário, disciplinar e de polícia.',
      comoApareceEmConcurso: 'Cobrança combinada de quatro conceitos.'
    },
    tags: ['poderes administrativos', 'autoexecutoriedade']
  },
  {
    id: 'Q-REAL-DA-19-008',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-19',
    banca: 'IDECAN', orgao: 'UFPB', ano: 2016, prova: 'Assistente em Administração',
    fonte: { descricao: 'IDECAN 2016 — UFPB — Assistente em Administração' },
    subtema: 'Atos administrativos — revisão integrada V/F',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Analise as afirmativas sobre atos administrativos, marcando V (verdadeira) ou F (falsa): ( ) A Administração pode anular seus próprios atos, quando eivados de vícios que os tornam ilegais, porque deles não se originam direitos; ou revogá-los, por motivo de conveniência e oportunidade, respeitados os direitos adquiridos, e ressalvada, em todos os casos, a apreciação judicial. ( ) Presunção de legitimidade, autoexecutoriedade e imperatividade são ELEMENTOS do ato administrativo. ( ) Ato administrativo é toda manifestação unilateral de vontade da Administração Pública que tem por finalidade imediata adquirir, resguardar, transferir, modificar, extinguir e declarar direitos, ou impor obrigações aos administrados ou a si própria. ( ) Um órgão administrativo e seu titular poderão delegar parte da sua competência a outros órgãos ou titulares, ainda que estes NÃO lhe sejam hierarquicamente subordinados, quando for conveniente, em razão de circunstâncias de índole técnica, social, econômica, jurídica ou territorial, salvo as matérias de competência exclusiva do órgão ou autoridade. A sequência correta, de cima para baixo, é:',
    alternativas: [
      { id: 'A', texto: 'V – V – F – F.' },
      { id: 'B', texto: 'F – F – V – V.' },
      { id: 'C', texto: 'V – F – V – V.' },
      { id: 'D', texto: 'V – F – V – F.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'V (Súmula 473 do STF). F (presunção de legitimidade, autoexecutoriedade e imperatividade são ATRIBUTOS, não elementos — os elementos são competência, finalidade, forma, motivo e objeto). V (definição de ato administrativo). V (art. 12 da Lei 9.784/99 permite delegação a órgãos não subordinados).',
      incorretas: { A: 'A segunda é F e a terceira é V.', B: 'A primeira e a terceira são V.', D: 'A quarta é V.' },
      conceitoCobrado: 'Atos administrativos — revisão integrada',
      pegadinha: 'Confundir elementos (competência, finalidade, forma, motivo, objeto) com atributos (presunção, imperatividade, autoexecutoriedade, tipicidade).',
      comoApareceEmConcurso: 'Cobrança combinada de múltiplos conceitos.'
    },
    tags: ['atos administrativos', 'elementos', 'atributos', 'delegação']
  },
  {
    id: 'Q-REAL-DA-20-008',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-20',
    banca: 'IDECAN', orgao: 'UFPB', ano: 2016, prova: 'Assistente em Administração',
    fonte: { descricao: 'IDECAN 2016 — UFPB — Assistente em Administração' },
    subtema: 'Serviço adequado — princípios da Lei 8.987/95',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Nos termos da legislação específica, serviço adequado é aquele que atenda aos seguintes princípios, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Segurança.' },
      { id: 'B', texto: 'Atualidade.' },
      { id: 'C', texto: 'Efetividade.' },
      { id: 'D', texto: 'Regularidade.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A Lei 8.987/95 (art. 6º, §1º) define serviço adequado como o que satisfaz: regularidade, continuidade, eficiência, segurança, atualidade, generalidade, cortesia e modicidade das tarifas. EFETIVIDADE não está na lista — é uma dimensão de desempenho (impacto social), não princípio do serviço público.',
      incorretas: { A: 'É princípio.', B: 'É princípio.', D: 'É princípio.' },
      conceitoCobrado: 'Princípios do serviço público — Lei 8.987/95',
      pegadinha: 'Confundir "efetividade" com "eficiência" (esta sim é princípio).',
      comoApareceEmConcurso: 'Cobrança de EXCETO em rol.'
    },
    tags: ['serviço adequado', 'Lei 8.987/95', 'efetividade']
  },
  {
    id: 'Q-REAL-DA-21-009',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-21',
    banca: 'IBFC', orgao: 'UFPB', ano: 2025, prova: 'Assistente em Administração',
    fonte: { descricao: 'IBFC 2025 — UFPB — Assistente em Administração' },
    subtema: 'Pregão — modalidade obrigatória',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Segundo a Lei 14.133/2021, é a modalidade de licitação obrigatória para aquisição de bens e serviços comuns, cujo critério de julgamento poderá ser o de menor preço ou o de maior desconto. Assinale a alternativa que preencha corretamente a lacuna:',
    alternativas: [
      { id: 'A', texto: 'Leilão.' },
      { id: 'B', texto: 'Diálogo Competitivo.' },
      { id: 'C', texto: 'Pregão.' },
      { id: 'D', texto: 'Concurso.' },
      { id: 'E', texto: 'Credenciamento.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'O PREGÃO é a modalidade obrigatória para bens e serviços comuns, com critério de menor preço ou maior desconto (art. 29 da Lei 14.133/2021).',
      incorretas: { A: 'Leilão é para alienação de bens.', B: 'Diálogo competitivo é para inovação/complexidade.', D: 'Concurso é para trabalho técnico/científico/artístico.', E: 'Credenciamento é procedimento auxiliar, não modalidade.' },
      conceitoCobrado: 'Pregão',
      pegadinha: 'Confundir pregão com outras modalidades ou com credenciamento.',
      comoApareceEmConcurso: 'Cobrança de modalidade específica.'
    },
    tags: ['pregão', 'Lei 14.133/2021']
  },
  {
    id: 'Q-REAL-DA-21-010',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-21',
    banca: 'FUNCERN', orgao: 'IFRN', ano: 2024, prova: 'Assistente em Administração',
    fonte: { descricao: 'FUNCERN 2024 — IFRN — Assistente em Administração' },
    subtema: 'Credenciamento',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'De acordo com a redação expressa da Lei 14.133/2021, entende-se por Credenciamento:',
    alternativas: [
      { id: 'A', texto: 'Procedimento seletivo prévio à licitação, convocado por edital, destinado à análise das condições de habilitação, total ou parcial, dos interessados ou do objeto.' },
      { id: 'B', texto: 'Conjunto de procedimentos para realização, mediante contratação direta ou licitação, de registro formal de preços relativos à prestação de serviços, a obras e à aquisição e locação de bens para contratações futuras.' },
      { id: 'C', texto: 'Processo administrativo de chamamento público em que a Administração Pública convoca interessados em prestar serviços ou fornecer bens para que, preenchidos os requisitos necessários, se credenciem no órgão ou na entidade para executar o objeto quando convocados.' },
      { id: 'D', texto: 'Documento vinculativo e obrigacional, com característica de compromisso para futura contratação, no qual são registrados o objeto, os preços, os fornecedores, os órgãos participantes e as condições a serem praticadas.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'O CREDENCIAMENTO é o processo administrativo de chamamento público em que a Administração convoca interessados para se credenciarem, preenchidos os requisitos, a executar o objeto quando convocados (art. 6º, XLIII, da Lei 14.133/2021).',
      incorretas: { A: 'Descreve a pré-qualificação.', B: 'Descreve o registro de preços.', D: 'Descreve a ata de registro de preços.' },
      conceitoCobrado: 'Credenciamento — procedimento auxiliar',
      pegadinha: 'Confundir com pré-qualificação, registro de preços ou ata.',
      comoApareceEmConcurso: 'Cobrança de definição.'
    },
    tags: ['credenciamento', 'procedimentos auxiliares']
  },
  {
    id: 'Q-REAL-DA-21-011',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-21',
    banca: 'FUNCERN', orgao: 'IFRN', ano: 2024, prova: 'Assistente em Administração',
    fonte: { descricao: 'FUNCERN 2024 — IFRN — Assistente em Administração' },
    subtema: 'Diálogo competitivo',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'A modalidade Diálogo Competitivo constitui uma das principais inovações da Lei 14.133/2021. Conforme redação expressa do normativo, sobre esse instituto é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A Administração definirá a proposta vencedora, de acordo com critérios divulgados no início da fase competitiva, assegurada a contratação que represente o menor preço como resultado.' },
      { id: 'B', texto: 'Os critérios empregados para pré-seleção dos licitantes deverão ser previstos em Ordem de Serviço, e serão admitidos todos os interessados que preencherem os requisitos objetivos estabelecidos.' },
      { id: 'C', texto: 'A Administração apresentará, por ocasião da divulgação do edital em sítio eletrônico oficial, suas necessidades e as exigências já definidas e estabelecerá prazo mínimo de 25 (vinte e cinco) dias úteis para manifestação de interesse na participação da licitação.' },
      { id: 'D', texto: 'O Diálogo Competitivo será conduzido por comissão de contratação composta de pelo menos 3 (três) servidores efetivos, vedada a contratação de profissionais para assessoramento técnico da comissão.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Art. 32, §1º da Lei 14.133/2021: a Administração apresenta, no edital, suas necessidades e as exigências, e estabelece prazo mínimo de 25 DIAS ÚTEIS para manifestação de interesse.',
      incorretas: { A: 'O critério não é necessariamente "menor preço".', B: 'Os critérios de pré-seleção devem estar no EDITAL, não em Ordem de Serviço.', D: 'A comissão PODE contratar profissionais para assessoramento técnico (art. 32, caput).' },
      conceitoCobrado: 'Diálogo competitivo',
      pegadinha: 'Confundir a vedação de assessoramento (não existe) ou o prazo de 25 dias úteis.',
      comoApareceEmConcurso: 'Cobrança de dispositivo específico.'
    },
    tags: ['diálogo competitivo', 'Lei 14.133/2021']
  },
  {
    id: 'Q-REAL-DA-21-012',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-21',
    banca: 'IDECAN', orgao: 'UFPB', ano: 2016, prova: 'Assistente em Administração',
    fonte: { descricao: 'IDECAN 2016 — UFPB — Assistente em Administração' },
    subtema: 'Contratos administrativos — prorrogação',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Quanto aos "contratos administrativos típicos", é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Têm validade de dois anos, em regra.' },
      { id: 'B', texto: 'Independem de prévio procedimento licitatório.' },
      { id: 'C', texto: 'Admitem prorrogação nos termos e limites legais.' },
      { id: 'D', texto: 'Podem ser alterados unilateralmente pelo contratado.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Os contratos administrativos ADMITEM PRORROGAÇÃO nos termos e limites legais (art. 105 e ss. da Lei 14.133/2021).',
      incorretas: { A: 'Não há regra geral de 2 anos — depende do objeto.', B: 'Em regra, dependem de licitação.', D: 'A alteração unilateral é prerrogativa da ADMINISTRAÇÃO, não do contratado (cláusula exorbitante).' },
      conceitoCobrado: 'Contratos administrativos — prorrogação',
      pegadinha: 'Inverter a prerrogativa de alteração unilateral.',
      comoApareceEmConcurso: 'Cobrança de característica.'
    },
    tags: ['contratos administrativos', 'prorrogação']
  },
  {
    id: 'Q-REAL-DA-23-008',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-23',
    banca: 'IDECAN', orgao: 'UFPB', ano: 2016, prova: 'Assistente em Administração',
    fonte: { descricao: 'IDECAN 2016 — UFPB — Assistente em Administração' },
    subtema: 'Controle posterior — classificação',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Em relação ao controle da administração pública, a anulação de um ato administrativo após provocação do interessado ao Poder Judiciário constitui exemplo de controle:',
    alternativas: [
      { id: 'A', texto: 'Prévio.' },
      { id: 'B', texto: 'Posterior.' },
      { id: 'C', texto: 'Concomitante.' },
      { id: 'D', texto: 'Administrativo.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O controle judicial é POSTERIOR: ocorre após a prática do ato, quando o interessado provoca o Judiciário.',
      incorretas: { A: 'Controle prévio é antes da prática do ato (ex.: CCJ).', C: 'Controle concomitante é durante a execução.', D: 'O controle é judicial, não administrativo.' },
      conceitoCobrado: 'Momento do controle',
      pegadinha: 'Confundir controle judicial com controle administrativo.',
      comoApareceEmConcurso: 'Cobrança de classificação.'
    },
    tags: ['controle posterior', 'controle judicial']
  },
  {
    id: 'Q-REAL-DA-24-008',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-24',
    banca: 'IBFC', orgao: 'UFPB', ano: 2025, prova: 'Assistente em Administração',
    fonte: { descricao: 'IBFC 2025 — UFPB — Assistente em Administração' },
    subtema: 'Enriquecimento ilícito — exemplo específico',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Nos termos da Lei de Improbidade Administrativa (Lei 8.429/92), assinale a alternativa que apresenta ato de improbidade que importa em ENRIQUECIMENTO ILÍCITO:',
    alternativas: [
      { id: 'A', texto: 'Permitir ou facilitar a aquisição, permuta ou locação de bem ou serviço por preço superior ao de mercado.' },
      { id: 'B', texto: 'Conceder benefício administrativo ou fiscal sem a observância das formalidades legais ou regulamentares aplicáveis.' },
      { id: 'C', texto: 'Frustrar a licitude de processo licitatório, acarretando perda patrimonial efetiva.' },
      { id: 'D', texto: 'Celebrar contrato de rateio de consórcio público sem suficiente e prévia dotação orçamentária.' },
      { id: 'E', texto: 'Receber vantagem econômica de qualquer natureza, direta ou indireta, para tolerar a exploração ou a prática de jogos de azar, de lenocínio, de narcotráfico, de contrabando, de usura ou de qualquer outra atividade ilícita, ou aceitar promessa de tal vantagem.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'Art. 9º, VII da Lei 8.429/92 — receber vantagem econômica para tolerar a prática de atividades ilícitas é a hipótese clássica de ENRIQUECIMENTO ILÍCITO.',
      incorretas: { A: 'É prejuízo ao erário (art. 10).', B: 'É prejuízo ao erário / atentado a princípios.', C: 'É prejuízo ao erário (art. 10).', D: 'É prejuízo ao erário / atentado a princípios.' },
      conceitoCobrado: 'Modalidades de improbidade — enriquecimento ilícito',
      pegadinha: 'Confundir as três modalidades.',
      comoApareceEmConcurso: 'Cobrança de exemplo típico.'
    },
    tags: ['improbidade', 'enriquecimento ilícito']
  },
  {
    id: 'Q-REAL-DA-25-008',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-25',
    banca: 'COMPERVE', orgao: 'UFRN', ano: 2025, prova: 'Assistente em Administração',
    fonte: { descricao: 'COMPERVE 2025 — UFRN — Assistente em Administração' },
    subtema: 'Princípios do processo administrativo — interpretação da norma',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Na Lei 9.784/99, é um dos critérios a ser observado nos processos administrativos:',
    alternativas: [
      { id: 'A', texto: 'A interpretação da norma administrativa da forma que melhor garanta o atendimento do fim público a que se dirige, vedada aplicação retroativa de nova interpretação.' },
      { id: 'B', texto: 'A divulgação oficial dos atos administrativos sigilosos, como forma de promover o princípio da publicidade.' },
      { id: 'C', texto: 'A objetividade no atendimento do interesse público, pautada na promoção pessoal de agentes ou autoridades.' },
      { id: 'D', texto: 'A atuação voltada a fins de interesse pessoal do agente público executor, vedada a renúncia total ou parcial de poderes ou competências.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 2º, parágrafo único, XIII da Lei 9.784/99: "interpretação da norma administrativa da forma que melhor garanta o atendimento do fim público a que se dirige, vedada aplicação retroativa de nova interpretação".',
      incorretas: { B: 'Atos sigilosos NÃO são divulgados (contradição).', C: 'A promoção pessoal é vedada.', D: 'O interesse pessoal é vedado.' },
      conceitoCobrado: 'Critérios do processo administrativo',
      pegadinha: 'Confundir com princípios gerais.',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['processo administrativo', 'interpretação', 'Lei 9.784']
  },
  {
    id: 'Q-REAL-DA-25-009',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-25',
    banca: 'COMPERVE', orgao: 'UFRN', ano: 2025, prova: 'Assistente em Administração',
    fonte: { descricao: 'COMPERVE 2025 — UFRN — Assistente em Administração' },
    subtema: 'Avocação temporária',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'Em relação à competência, um dos dispositivos da Lei 9.784/99 estabelece que:',
    alternativas: [
      { id: 'A', texto: 'As decisões adotadas por delegação devem mencionar, explicitamente, esta qualidade e considerar-se-ão editadas pelo delegante.' },
      { id: 'B', texto: 'Um órgão administrativo e seu titular poderão delegar parte da sua competência a outros órgãos ou titulares, com a condição de que lhe sejam hierarquicamente subordinados.' },
      { id: 'C', texto: 'O processo administrativo deverá ser iniciado perante a autoridade de maior grau hierárquico para decidir em caso de inexistência de competência legal específica.' },
      { id: 'D', texto: 'A avocação temporária de competência atribuída a órgão hierarquicamente inferior será permitida em caráter excepcional e por motivos relevantes devidamente justificados.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Art. 15 da Lei 9.784/99: "Será permitida, em caráter excepcional e por motivos relevantes devidamente justificados, a avocação temporária de competência atribuída a órgão hierarquicamente inferior".',
      incorretas: { A: 'As decisões delegadas consideram-se editadas pelo DELEGADO, não pelo delegante (art. 14, §1º).', B: 'A delegação pode ocorrer a órgãos NÃO subordinados hierarquicamente (art. 12).', C: 'Não há essa regra — a competência é definida por lei.' },
      conceitoCobrado: 'Avocação (art. 15)',
      pegadinha: 'Confundir avocação com delegação ou inverter o sujeito.',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['avocação', 'competência', 'Lei 9.784']
  },
  {
    id: 'Q-REAL-DA-25-010',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-25',
    banca: 'COMPERVE', orgao: 'UFRN', ano: 2025, prova: 'Assistente em Administração',
    fonte: { descricao: 'COMPERVE 2025 — UFRN — Assistente em Administração' },
    subtema: 'Intimação — formas de comunicação',
    dificuldade: 2, prioridade: 'alta',
    enunciado: 'A Lei 9.784/99 estabelece regras para a comunicação dos atos processuais. De acordo com essa lei, quanto à intimação, está estabelecido que:',
    alternativas: [
      { id: 'A', texto: 'O comparecimento do administrado não supre a falta ou irregularidade da intimação, uma vez que prejudica sua defesa.' },
      { id: 'B', texto: 'A intimação deve ser efetuada por meio de jornal de grande circulação no caso de interessados indeterminados, desconhecidos ou com domicílio indefinido.' },
      { id: 'C', texto: 'O desatendimento da intimação implica no reconhecimento da verdade dos fatos pelo administrado.' },
      { id: 'D', texto: 'A intimação pode ser efetuada por ciência no processo, por via postal com aviso de recebimento, por telegrama ou outro meio que assegure a certeza da ciência do interessado.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Art. 26, §3º da Lei 9.784/99: "A intimação poderá ser efetuada por ciência no processo, por via postal com aviso de recebimento, por telegrama ou outro meio que assegure a certeza da ciência do interessado".',
      incorretas: { A: 'O comparecimento SUPRE a falta de intimação (art. 26, §5º).', B: 'A intimação por edital é para interessados indeterminados/desconhecidos — não especificamente por jornal de grande circulação.', C: 'O desatendimento NÃO implica reconhecimento da verdade.' },
      conceitoCobrado: 'Intimação (art. 26)',
      pegadinha: 'Inverter o efeito do comparecimento.',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['intimação', 'comunicação', 'Lei 9.784']
  },
  {
    id: 'Q-REAL-DA-25-011',
    tipo: 'REAL', area: 'DA', moduloId: 'DA-25',
    banca: 'IBFC', orgao: 'UFPB', ano: 2025, prova: 'Assistente em Administração',
    fonte: { descricao: 'IBFC 2025 — UFPB — Assistente em Administração' },
    subtema: 'Motivação — assertiva INCORRETA',
    dificuldade: 3, prioridade: 'alta',
    enunciado: 'Sobre a motivação dos atos administrativos, assinale a alternativa INCORRETA, nos termos da Lei 9.784/1999:',
    alternativas: [
      { id: 'A', texto: 'A motivação das decisões de órgãos colegiados e comissões ou de decisões orais constará da respectiva ata ou de termo escrito.' },
      { id: 'B', texto: 'Na solução de vários assuntos da mesma natureza, pode ser utilizado meio mecânico que reproduza os fundamentos das decisões, desde que não prejudique direito ou garantia dos interessados.' },
      { id: 'C', texto: 'A motivação não pode consistir em declaração de concordância com fundamentos de pareceres, informações, decisões ou propostas anteriores.' },
      { id: 'D', texto: 'A motivação dos atos administrativos deverá indicar os pressupostos de fato e de direito que a determinaram.' },
      { id: 'E', texto: 'Os atos administrativos deverão ser motivados, com indicação dos fatos e dos fundamentos jurídicos, quando negarem, limitarem ou afetarem direitos ou interesses dos administrados.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A alternativa C está INCORRETA: a motivação PODE consistir em declaração de concordância com fundamentos de pareceres, informações, decisões ou propostas anteriores, que, neste caso, serão parte integrante do ato (art. 50, §1º da Lei 9.784/99).',
      incorretas: { A: 'Correta (art. 50, §1º).', B: 'Correta (art. 50, §2º).', D: 'Correta (art. 50, caput).', E: 'Correta (art. 50, I).' },
      conceitoCobrado: 'Motivação — conteúdo e limites',
      pegadinha: 'Achar que a motivação não pode remeter a pareceres anteriores.',
      comoApareceEmConcurso: 'Cobrança de INCORRETA.'
    },
    tags: ['motivação', 'Lei 9.784']
  },
  /* ============================================================
     LOTE PDF — QConcursos
     ADM-01 a ADM-04
     ============================================================ */

  {
    id: 'Q-PDF-ADM-01-001',
    idOriginal: 'Q4416598',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-01',
    subtema: 'Habilidades do administrador (Katz) — conceituais',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4416598' },
    enunciado: 'Segundo Katz (1955), há três tipos de habilidades que caracterizam o desempenho administrativo eficaz. Um desses tipos diz respeito às habilidades que representam as capacidades cognitivas mais elevadas do administrador e que lhe permitem realizar ações de planejamento, de criação e de interpretação da missão, da visão e dos valores organizacionais. Define-se essas habilidades como sendo do tipo:',
    alternativas: [
      { id: 'A', texto: 'técnicas' },
      { id: 'B', texto: 'humanas' },
      { id: 'C', texto: 'conceituais' },
      { id: 'D', texto: 'interpessoais' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: 'As habilidades conceituais são as capacidades cognitivas mais elevadas, envolvendo planejamento, criação e interpretação da missão, visão e valores.',
      incorretas: {
        A: 'Habilidades técnicas envolvem o manuseio de métodos e processos concretos.',
        B: 'Habilidades humanas envolvem a capacidade de trabalhar com pessoas.',
        D: 'Habilidades interpessoais são um subconjunto das humanas, não a categoria de Katz.'
      },
      conceitoCobrado: 'Habilidades de Katz',
      pegadinha: 'Confundir habilidades conceituais com humanas ou interpessoais.',
      comoApareceEmConcurso: 'Cobrança direta da classificação de Katz.'
    },
    tags: ['Katz', 'habilidades conceituais']
  },
  {
    id: 'Q-PDF-ADM-01-002',
    idOriginal: 'Q4389349',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-01',
    subtema: 'Ambiente organizacional — externo',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4389349' },
    enunciado: 'O conceito de ambiente organizacional refere-se ao conjunto de forças, e elementos externos e internos à organização que são capazes de influenciar o seu desempenho. É CORRETO afirmar que um aspecto referente ao ambiente externo de uma organização é(são) a(s):',
    alternativas: [
      { id: 'A', texto: 'instalações físicas.' },
      { id: 'B', texto: 'estrutura organizacional.' },
      { id: 'C', texto: 'cultura organizacional.' },
      { id: 'D', texto: 'legislação trabalhista vigente.' },
      { id: 'E', texto: 'equipe de trabalho e gestores.' }
    ],
    gabarito: 'D',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A legislação trabalhista é um fator externo (macroambiente) que influencia a organização.',
      incorretas: {
        A: 'Instalações físicas são internas.',
        B: 'Estrutura organizacional é interna.',
        C: 'Cultura organizacional é interna.',
        E: 'Equipe e gestores são internos.'
      },
      conceitoCobrado: 'Ambiente externo x interno',
      pegadinha: 'Classificar elementos internos como externos.',
      comoApareceEmConcurso: 'Cobrança da distinção entre ambiente interno e externo.'
    },
    tags: ['ambiente externo', 'legislação']
  },
  {
    id: 'Q-PDF-ADM-01-003',
    idOriginal: 'Q4416596',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-01',
    subtema: 'Influências históricas da Administração — Igreja Católica',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4416596' },
    enunciado: 'Ao longo de sua história, a administração foi influenciada por filósofos, organizações, ciências diversas, economistas liberais, revolução industrial e empreendedores. Nesse sentido, a hierarquia de autoridade, o estado-maior geral e a coordenação funcional são influências da administração devido à:',
    alternativas: [
      { id: 'A', texto: 'Igreja Católica' },
      { id: 'B', texto: 'Corporação familiar' },
      { id: 'C', texto: 'Revolução Industrial' },
      { id: 'D', texto: 'Reforma Protestante' }
    ],
    gabarito: 'A',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A Igreja Católica influenciou a administração com a hierarquia de autoridade, o estado-maior (staff) e a coordenação funcional.',
      incorretas: {
        B: 'A corporação familiar influenciou outros aspectos, não esses.',
        C: 'A Revolução Industrial influenciou a mecanização e a produção em massa.',
        D: 'A Reforma Protestante influenciou a ética do trabalho.'
      },
      conceitoCobrado: 'Influências históricas da Administração',
      pegadinha: 'Atribuir à Revolução Industrial ou à Reforma Protestante influências que são da Igreja Católica.',
      comoApareceEmConcurso: 'Cobrança da origem histórica de princípios administrativos.'
    },
    tags: ['Igreja Católica', 'influências históricas']
  },
  {
    id: 'Q-PDF-ADM-01-004',
    idOriginal: 'Q4325100',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-01',
    subtema: 'Dever de eficiência',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4325100' },
    enunciado: 'Um assistente administrativo da Prefeitura de Porto dos Gaúchos identificou que um superior hierárquico omite-se reiteradamente em despachar processos dentro do prazo legal, causando, assim, prejuízo ao interesse público. Considerando os deveres do administrador público, a conduta omitida afronta principalmente o dever de:',
    alternativas: [
      { id: 'A', texto: 'eficiência' },
      { id: 'B', texto: 'probidade' },
      { id: 'C', texto: 'legalidade' },
      { id: 'D', texto: 'prestação de contas' }
    ],
    gabarito: 'A',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A omissão reiterada em despachar dentro do prazo viola o dever de eficiência, que exige celeridade e resultados úteis à Administração.',
      incorretas: {
        B: 'Probidade refere-se à honestidade.',
        C: 'A legalidade é observada formalmente, mas a omissão fere a eficiência.',
        D: 'Prestação de contas é outro dever.'
      },
      conceitoCobrado: 'Dever de eficiência',
      pegadinha: 'Confundir eficiência com legalidade ou probidade.',
      comoApareceEmConcurso: 'Cobrança da dimensão do dever de eficiência.'
    },
    tags: ['eficiência', 'deveres']
  },
  {
    id: 'Q-PDF-ADM-02-001',
    idOriginal: 'Q4802721',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'ADM',
    moduloId: 'ADM-02',
    subtema: 'Funções administrativas — planejamento x controle',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4802721' },
    enunciado: 'Acerca das funções administrativas de planejamento, organização, direção e controle, julgue os itens a seguir. O planejamento estabelece os objetivos organizacionais e verifica, ao final do período, se eles foram alcançados.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'ERRADO. O planejamento estabelece objetivos, mas a verificação final é função do CONTROLE.',
      incorretas: {},
      conceitoCobrado: 'Funções administrativas — planejamento x controle',
      pegadinha: 'Atribuir ao planejamento a etapa de verificação, que é do controle.',
      comoApareceEmConcurso: 'Confusão clássica entre planejamento e controle.'
    },
    tags: ['planejamento', 'controle']
  },
  {
    id: 'Q-PDF-ADM-02-002',
    idOriginal: 'Q4730860',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-02',
    subtema: 'Funções administrativas — controle',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4730860' },
    enunciado: 'Visando melhorar o desempenho institucional, a Presidência do Instituto de Previdência dos Servidores do Município de Araguaína (IMPAR) estabeleceu a meta de reduzir em 30% o tempo médio de análise dos pedidos de aposentadoria. Para tanto, foram implementadas medidas de capacitação de servidores, redistribuição de atividades entre os setores e acompanhamento periódico dos resultados alcançados. Considerando as funções administrativas clássicas da Administração, assinale a alternativa correta.',
    alternativas: [
      { id: 'A', texto: 'A capacitação dos servidores constitui atividade inerente à função planejamento.' },
      { id: 'B', texto: 'A redistribuição das atividades entre os setores caracteriza atividade típica da função direção.' },
      { id: 'C', texto: 'O acompanhamento dos resultados e a verificação do alcance das metas estabelecidas constituem atividades típicas da função controle.' },
      { id: 'D', texto: 'O estabelecimento de metas organizacionais e a distribuição das atividades entre os setores integram principalmente a função organização.' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: 'O acompanhamento de resultados e a verificação do alcance de metas são típicos da função CONTROLE.',
      incorretas: {
        A: 'Capacitação é desenvolvimento, não planejamento.',
        B: 'Redistribuição é organização.',
        D: 'Metas são planejamento; distribuição é organização.'
      },
      conceitoCobrado: 'Funções administrativas (PODC)',
      pegadinha: 'Classificar capacitação como planejamento ou redistribuição como direção.',
      comoApareceEmConcurso: 'Identificação da função a partir de ações concretas.'
    },
    tags: ['controle', 'PODC']
  },
  {
    id: 'Q-PDF-ADM-02-003',
    idOriginal: 'Q4562769',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'ADM',
    moduloId: 'ADM-02',
    subtema: 'Função de direção — níveis organizacionais',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4562769' },
    enunciado: 'Acerca das funções administrativas, julgue os itens a seguir. A função de direção no nível institucional é de competência dos supervisores de primeira linha, que possuem a atribuição de interpretar os planos estratégicos para os demais empregados da organização.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'ERRADO. A direção no nível institucional é da alta cúpula; os supervisores de primeira linha atuam no nível operacional.',
      incorretas: {},
      conceitoCobrado: 'Direção x níveis organizacionais',
      pegadinha: 'Atribuir à supervisão de primeira linha a direção institucional.',
      comoApareceEmConcurso: 'Confusão entre níveis hierárquicos.'
    },
    tags: ['direção', 'níveis organizacionais']
  },
  {
    id: 'Q-PDF-ADM-04-001',
    idOriginal: 'Q4730849',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-04',
    subtema: 'Função administrativa de organização',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4730849' },
    enunciado: 'Após a aprovação de um novo plano institucional, uma autarquia promoveu a redistribuição das atividades entre os seus setores, redefiniu níveis hierárquicos e estabeleceu relações formais de autoridade. Nesse sentido, a situação apresentada caracteriza a função administrativa de:',
    alternativas: [
      { id: 'A', texto: 'Organização.' },
      { id: 'B', texto: 'Direção.' },
      { id: 'C', texto: 'Controle.' },
      { id: 'D', texto: 'Planejamento.' }
    ],
    gabarito: 'A',
    gabaritoInferido: false,
    explicacao: {
      correta: 'Redistribuir atividades, redefinir níveis hierárquicos e estabelecer relações de autoridade é função de ORGANIZAÇÃO.',
      incorretas: {
        B: 'Direção envolve liderança e motivação.',
        C: 'Controle envolve medição e correção.',
        D: 'Planejamento define objetivos.'
      },
      conceitoCobrado: 'Função de organização',
      pegadinha: 'Confundir organização com direção ou planejamento.',
      comoApareceEmConcurso: 'Identificação da função a partir de ações estruturais.'
    },
    tags: ['organização', 'estrutura']
  },
  {
    id: 'Q-PDF-ADM-04-002',
    idOriginal: 'Q4562796',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'ADM',
    moduloId: 'ADM-04',
    subtema: 'Estrutura linear — limitações',
    dificuldade: 3,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4562796' },
    enunciado: 'A respeito dos tipos de estrutura organizacional, das relações humanas, do desempenho profissional, da cidadania e das relações públicas, julgue os itens seguintes. A estrutura do tipo linear favorece a agilidade na tomada de decisão em organizações complexas e dinâmicas, uma vez que a centralização da autoridade permite que as comunicações fluam rapidamente entre a base e o topo da pirâmide.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'ERRADO. A estrutura linear é mais adequada a ambientes estáveis e simples; em organizações complexas e dinâmicas, a rigidez e a centralização podem dificultar a agilidade.',
      incorretas: {},
      conceitoCobrado: 'Estrutura linear x organizações complexas',
      pegadinha: 'Generalizar a agilidade da estrutura linear para qualquer contexto.',
      comoApareceEmConcurso: 'Cobrança das limitações da estrutura linear.'
    },
    tags: ['estrutura linear', 'agilidade']
  },
  {
    id: 'Q-PDF-ADM-04-003',
    idOriginal: 'Q4404798',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'ADM',
    moduloId: 'ADM-04',
    subtema: 'Estrutura organizacional — adaptação',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4404798' },
    enunciado: 'Acerca dos conceitos e dos tipos de estrutura organizacional aplicáveis ao CRFa-1ª Região, julgue os itens a seguir. A estrutura organizacional deve permanecer inalterada ao longo do tempo para manter a estabilidade institucional.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'ERRADO. A estrutura organizacional deve se adaptar às mudanças do ambiente e às necessidades institucionais.',
      incorretas: {},
      conceitoCobrado: 'Adaptação da estrutura organizacional',
      pegadinha: 'Defender a imutabilidade da estrutura.',
      comoApareceEmConcurso: 'Cobrança da natureza dinâmica da estrutura.'
    },
    tags: ['estrutura', 'adaptação']
  },
  {
    id: 'Q-PDF-ADM-04-004',
    idOriginal: 'Q4389348',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-04',
    subtema: 'Princípio da unidade de direção',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4389348' },
    enunciado: 'A administração pode ser entendida como o processo de coordenação do trabalho dos membros de uma organização para alcançar os objetivos estabelecidos. Alguns princípios da administração orientam a atuação do profissional no ambiente organizacional. O princípio segundo o qual deve-se especificar um só chefe e um só programa para um conjunto de operações que visam ao mesmo objetivo é denominado:',
    alternativas: [
      { id: 'A', texto: 'hierarquia.' },
      { id: 'B', texto: 'centralização.' },
      { id: 'C', texto: 'equidade.' },
      { id: 'D', texto: 'unidade de direção.' },
      { id: 'E', texto: 'autoridade e responsabilidade.' }
    ],
    gabarito: 'D',
    gabaritoInferido: false,
    explicacao: {
      correta: 'O princípio da UNIDADE DE DIREÇÃO estabelece um só chefe e um só programa para operações com o mesmo objetivo.',
      incorretas: {
        A: 'Hierarquia é a escala de autoridade.',
        B: 'Centralização é a concentração de decisões.',
        C: 'Equidade é justiça.',
        E: 'Autoridade e responsabilidade são correlatas.'
      },
      conceitoCobrado: 'Princípio da unidade de direção',
      pegadinha: 'Confundir com hierarquia ou centralização.',
      comoApareceEmConcurso: 'Cobrança de princípio clássico da Administração.'
    },
    tags: ['unidade de direção', 'princípios']
  },
  {
    id: 'Q-PDF-ADM-03-001',
    idOriginal: 'Q4416614',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-03',
    subtema: 'Planejamento estratégico — visão',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4416614' },
    enunciado: 'Com base no Planejamento Estratégico 2025-2029, a Empresa Gerencial de Projetos Navais (EMGEPRON) divulga, para seus públicos interno e externo, com foco na excelência técnica e na valorização humana no setor de defesa naval, a seguinte frase: “Ser reconhecida, nacional e internacionalmente, em seu ambiente de negócios, como referência no gerenciamento de projetos, com qualidade e transparência, buscando sempre a inovação e valorização humana em um ambiente sustentável”. Pode-se assumir que essa declaração refere-se ao componente do planejamento estratégico intitulado:',
    alternativas: [
      { id: 'A', texto: 'visão' },
      { id: 'B', texto: 'missão' },
      { id: 'C', texto: 'valores' },
      { id: 'D', texto: 'propósitos' }
    ],
    gabarito: 'A',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A VISÃO descreve onde a organização quer chegar (futuro almejado).',
      incorretas: {
        B: 'Missão é a razão de existir (presente).',
        C: 'Valores são princípios.',
        D: 'Propósitos são intenções.'
      },
      conceitoCobrado: 'Visão no planejamento estratégico',
      pegadinha: 'Confundir visão com missão.',
      comoApareceEmConcurso: 'Identificação do componente estratégico a partir de declaração institucional.'
    },
    tags: ['visão', 'planejamento estratégico']
  },
  /* ============================================================
     LOTE PDF — QConcursos / Gran Cursos
     ADM-05 a ADM-12
     ============================================================ */

  /* ============================================================
     ADM-05 — Direção, liderança e motivação
  ============================================================ */
  {
    id: 'Q-PDF-ADM-05-001',
    idOriginal: 'Q1152847',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-05',
    subtema: 'Motivação extrínseca',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q1152847' },
    enunciado: 'Quando falamos que a motivação pressupõe que o comportamento humano pode ser projetado, modelado ou mudado por meio da utilização adequada dos vários tipos de recompensas ou punições disponíveis no meio ambiente, estamos nos referindo a qual tipo de motivação?',
    alternativas: [
      { id: 'A', texto: 'Intrínseca.' },
      { id: 'B', texto: 'Exponencial.' },
      { id: 'C', texto: 'Subjetiva.' },
      { id: 'D', texto: 'Extrínseca.' },
      { id: 'E', texto: 'Competitiva.' }
    ],
    gabarito: 'D',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A motivação extrínseca é baseada em recompensas e punições externas (ambiente).',
      incorretas: {
        A: 'Intrínseca é interna (autorrealização).',
        B: 'Não existe essa categoria.',
        C: 'Subjetiva é interna.',
        E: 'Competitiva não é tipo de motivação.'
      },
      conceitoCobrado: 'Motivação intrínseca x extrínseca',
      pegadinha: 'Inverter os conceitos.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['motivação extrínseca']
  },
  {
    id: 'Q-PDF-ADM-05-002',
    idOriginal: 'Não identificado',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-05',
    subtema: 'Teoria ERC (Existência, Relacionamento e Crescimento)',
    dificuldade: 3,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Teoria ERC' },
    enunciado: 'Um Programa de QVT estabelece: (1) implantação de novo plano de cargos e salários; (2) grupos de convivência e oficinas colaborativas; (3) programa de capacitação e certificação interna. Com base na Teoria ERC (Existência, Relacionamento e Crescimento), as ações 1, 2 e 3 correspondem, respectivamente, a necessidades de:',
    alternativas: [
      { id: 'A', texto: 'Crescimento, relacionamento e existência.' },
      { id: 'B', texto: 'Relacionamento, crescimento e existência.' },
      { id: 'C', texto: 'Existência, relacionamento e crescimento.' },
      { id: 'D', texto: 'Relacionamento, existência e crescimento.' },
      { id: 'E', texto: 'Existência, crescimento e relacionamento.' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: '1 = EXISTÊNCIA (salário). 2 = RELACIONAMENTO (convivência). 3 = CRESCIMENTO (capacitação). Sequência: existência – relacionamento – crescimento.',
      incorretas: {
        A: 'Inverte.',
        B: 'Inverte.',
        D: 'Inverte.',
        E: 'Inverte.'
      },
      conceitoCobrado: 'Teoria ERC (Clayton Alderfer)',
      pegadinha: 'Inverter as três necessidades.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['ERC', 'Alderfer']
  },
  {
    id: 'Q-PDF-ADM-05-003',
    idOriginal: 'Não identificado',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-05',
    subtema: 'Papéis gerenciais (Mintzberg)',
    dificuldade: 3,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Mintzberg' },
    enunciado: 'Um gestor desempenhou: (1) recebeu relatórios e compartilhou informações com a equipe; (2) manteve redes de comunicação dentro e fora da organização; (3) motivou a equipe e orientou individualmente; (4) redistribuiu recursos entre projetos; (5) representou a instituição em cerimônia; (6) identificou oportunidades de melhoria e implementou mudança. Com base nos papéis de Mintzberg, assinale a associação correta (interpessoal / informacional / decisorial):',
    alternativas: [
      { id: 'A', texto: 'Interpessoal: 1, 2, 5. Informacional: 3, 6. Decisorial: 4.' },
      { id: 'B', texto: 'Interpessoal: 3, 5. Informacional: 1. Decisorial: 4, 6, 2.' },
      { id: 'C', texto: 'Interpessoal: 3, 5, 2. Informacional: 1. Decisorial: 4, 6.' },
      { id: 'D', texto: 'Interpessoal: 1, 3, 5. Informacional: 2. Decisorial: 4, 6.' },
      { id: 'E', texto: 'Interpessoal: 3, 5. Informacional: 1, 2. Decisorial: 4, 6.' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'INTERPESSOAL: 3 (liderança) e 5 (representação). INFORMACIONAL: 1 (disseminação) e 2 (ligação). DECISORIAL: 4 (alocação de recursos) e 6 (empreendedorismo).',
      incorretas: {
        A: '1 é informacional; 2 é informacional.',
        B: '2 é informacional.',
        C: '2 é informacional.',
        D: '1 é informacional.'
      },
      conceitoCobrado: 'Papéis de Mintzberg',
      pegadinha: 'Confundir ligação com interpessoal.',
      comoApareceEmConcurso: 'Cenário aplicado com múltiplas atividades.'
    },
    tags: ['Mintzberg', 'papéis']
  },
  {
    id: 'Q-PDF-ADM-05-004',
    idOriginal: 'Não identificado',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-05',
    subtema: 'Liderança — teoria dos traços',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Teoria dos traços' },
    enunciado: 'Segundo a Teoria da Liderança, quanto aos traços de personalidade, a liderança é caracterizada:',
    alternativas: [
      { id: 'A', texto: 'Pelas maneiras e estilos de se comportar de um líder.' },
      { id: 'B', texto: 'Pelas características marcantes, notáveis em um líder.' },
      { id: 'C', texto: 'Pela adequação do comportamento do líder às circunstâncias da situação.' },
      { id: 'D', texto: 'Pela postura autoritária do líder frente aos seus liderados.' },
      { id: 'E', texto: 'Por um comportamento passivo diante das diferentes situações.' }
    ],
    gabarito: 'B',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A TEORIA DOS TRAÇOS defende que o líder possui características marcantes (traços inatos ou adquiridos) que o distinguem.',
      incorretas: {
        A: 'Descreve teorias comportamentais.',
        C: 'Descreve teorias contingenciais.',
        D: 'Descreve estilo autocrático.',
        E: 'Não corresponde.'
      },
      conceitoCobrado: 'Teorias de liderança',
      pegadinha: 'Confundir com comportamental ou contingencial.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['liderança', 'traços']
  },
  {
    id: 'Q-PDF-ADM-05-005',
    idOriginal: 'Q4416598',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-05',
    subtema: 'Autoridade burocrática (Weber)',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4416598' },
    enunciado: 'As relações de autoridade estabelecidas entre superiores e subordinados podem ter como base diferentes fatores. O comando legitimado do superior sobre os subordinados, de maneira racional, por normas e regras aceitas dentro de um contexto organizacional, corresponde a uma autoridade com base na:',
    alternativas: [
      { id: 'A', texto: 'Tradição.' },
      { id: 'B', texto: 'Relação pessoal.' },
      { id: 'C', texto: 'Burocracia.' },
      { id: 'D', texto: 'Competência técnica.' },
      { id: 'E', texto: 'Carisma.' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A AUTORIDADE BUROCRÁTICA (racional-legal) é baseada em normas e regras aceitas no contexto organizacional (Weber).',
      incorretas: {
        A: 'Tradição é autoridade tradicional.',
        B: 'Relação pessoal não é a base racional-legal.',
        D: 'Competência técnica é outro tipo de poder.',
        E: 'Carisma é autoridade carismática.'
      },
      conceitoCobrado: 'Tipos de autoridade (Weber)',
      pegadinha: 'Confundir os tipos.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['autoridade', 'burocracia', 'Weber']
  },

  /* ============================================================
     ADM-06 — Controle e avaliação
  ============================================================ */
  {
    id: 'Q-PDF-ADM-06-001',
    idOriginal: 'Não identificado',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-06',
    subtema: 'Controle — ênfase nas exceções',
    dificuldade: 3,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Controle ênfase nas exceções' },
    enunciado: 'Um sistema de controle eficaz tem preocupação com aquilo que é essencial, com os desvios que necessitam de alguma ação gerencial. Essa característica é denominada:',
    alternativas: [
      { id: 'A', texto: 'Critérios múltiplos.' },
      { id: 'B', texto: 'Foco estratégico.' },
      { id: 'C', texto: 'Aceitação.' },
      { id: 'D', texto: 'Economia.' },
      { id: 'E', texto: 'Ênfase nas exceções.' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A ÊNFASE NAS EXCEÇÕES é a característica do controle que prioriza os desvios significativos — o que é essencial.',
      incorretas: {
        A: 'Critérios múltiplos é outra característica.',
        B: 'Foco estratégico é outra.',
        C: 'Aceitação é outra.',
        D: 'Economia é outra.'
      },
      conceitoCobrado: 'Características do controle',
      pegadinha: 'Confundir com foco estratégico.',
      comoApareceEmConcurso: 'Cobrança de característica específica.'
    },
    tags: ['controle', 'ênfase nas exceções']
  },
  {
    id: 'Q-PDF-ADM-06-002',
    idOriginal: 'Não identificado',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-06',
    subtema: 'Indicadores estratégicos x de produtividade',
    dificuldade: 3,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Indicadores estratégicos' },
    enunciado: 'Os indicadores de produtividade avaliam o rendimento e a eficiência de cada colaborador. Já os indicadores estratégicos:',
    alternativas: [
      { id: 'A', texto: 'Medem a relação da empresa com a concorrência.' },
      { id: 'B', texto: 'Mensuram a capacidade de resposta de um processo.' },
      { id: 'C', texto: 'Compreendem qualquer desvio ou não conformidade de um processo produtivo.' },
      { id: 'D', texto: 'Indicam onde está a empresa em relação aos objetivos estabelecidos anteriormente.' },
      { id: 'E', texto: 'São compostos pela relação percentual entre lucro e vendas totais.' }
    ],
    gabarito: 'D',
    gabaritoInferido: false,
    explicacao: {
      correta: 'Os INDICADORES ESTRATÉGICOS indicam onde a empresa está em relação aos objetivos previamente definidos.',
      incorretas: {
        A: 'Relação com a concorrência é outro indicador.',
        B: 'Capacidade de resposta é outro.',
        C: 'Desvios são não conformidades.',
        E: 'Lucro/vendas é indicador financeiro.'
      },
      conceitoCobrado: 'Indicadores estratégicos',
      pegadinha: 'Confundir com indicadores de produtividade.',
      comoApareceEmConcurso: 'Cobrança conceitual.'
    },
    tags: ['indicadores', 'estratégicos']
  },

  /* ============================================================
     ADM-07 — Gestão de Pessoas
  ============================================================ */
  {
    id: 'Q-PDF-ADM-07-001',
    idOriginal: 'Não identificado',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-07',
    subtema: 'Pilares da gestão de pessoas',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Pilares da gestão de pessoas' },
    enunciado: 'A administração de recursos humanos abrange o conjunto de técnicas, procedimentos e instrumentos que permite às organizações atrair, manter e desenvolver os talentos humanos. Assinale a alternativa que inclui alguns desses pilares para a gestão de pessoas nas empresas:',
    alternativas: [
      { id: 'A', texto: 'Liderança, prolixidade, treinamento e capacitação.' },
      { id: 'B', texto: 'Trabalho em equipe, treinamento e comunicação.' },
      { id: 'C', texto: 'Processos, prolixidade e trabalho em equipe.' },
      { id: 'D', texto: 'Comunicação, laconismo e vaidade.' },
      { id: 'E', texto: 'Capacitação, vaidade e liderança.' }
    ],
    gabarito: 'B',
    gabaritoInferido: false,
    explicacao: {
      correta: 'São pilares da gestão de pessoas: trabalho em equipe, treinamento e comunicação — além de liderança, capacitação, motivação e avaliação de desempenho.',
      incorretas: {
        A: 'Prolixidade não é pilar.',
        C: 'Prolixidade não é pilar.',
        D: 'Laconismo e vaidade não são pilares.',
        E: 'Vaidade não é pilar.'
      },
      conceitoCobrado: 'Pilares da gestão de pessoas',
      pegadinha: 'Incluir termos negativos (prolixidade, vaidade) como pilares.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['gestão de pessoas', 'pilares']
  },
  {
    id: 'Q-PDF-ADM-07-002',
    idOriginal: 'Não identificado',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-07',
    subtema: 'Testes psicológicos em seleção',
    dificuldade: 3,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Testes psicológicos' },
    enunciado: 'Em um processo seletivo, a equipe de gestão de pessoas decidiu utilizar diferentes testes psicológicos para compreender o perfil comportamental e motivacional dos candidatos. Relacione os testes às suas características: 1. Quati. 2. Palográfico. 3. PMK. 4. Rorschach e Zulliger. 5. FIGS. 6. DTO. ( ) Avalia o ritmo e a qualidade do trabalho, além de aspectos como inibição, temperamento e inteligência. ( ) Analisa a personalidade por meio de tensões musculares involuntárias. ( ) Avalia a personalidade a partir das escolhas situacionais, identificando atitudes e funções perceptivas. ( ) Busca compreender a estrutura da personalidade do indivíduo. ( ) Avalia responsabilidade profissional, relações interpessoais e autoconceito. ( ) Analisa estilos cognitivos e comportamentais necessários ao desempenho das funções organizacionais. A sequência correta é:',
    alternativas: [
      { id: 'A', texto: '2 – 3 – 1 – 4 – 5 – 6.' },
      { id: 'B', texto: '1 – 2 – 3 – 4 – 6 – 5.' },
      { id: 'C', texto: '3 – 2 – 1 – 5 – 4 – 6.' },
      { id: 'D', texto: '2 – 1 – 3 – 4 – 5 – 6.' },
      { id: 'E', texto: '1 – 3 – 2 – 4 – 6 – 5.' }
    ],
    gabarito: 'A',
    gabaritoInferido: false,
    explicacao: {
      correta: 'PALOGRÁFICO (2): ritmo/qualidade do trabalho. PMK (3): tensões musculares involuntárias. QUATI (1): escolhas situacionais. RORSCHACH/ZULLIGER (4): estrutura da personalidade. FIGS (5): responsabilidade profissional, relações interpessoais e autoconceito. DTO (6): estilos cognitivos e comportamentais. Sequência: 2 – 3 – 1 – 4 – 5 – 6.',
      incorretas: {
        B: 'Inverte 1, 2, 3.',
        C: 'Inverte.',
        D: 'Inverte 1 e 2.',
        E: 'Inverte.'
      },
      conceitoCobrado: 'Testes psicológicos em seleção',
      pegadinha: 'Confundir os testes e suas siglas.',
      comoApareceEmConcurso: 'Associação de testes a características.'
    },
    tags: ['testes psicológicos', 'Quati', 'Palográfico']
  },
  {
    id: 'Q-PDF-ADM-07-003',
    idOriginal: 'Não identificado',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-07',
    subtema: 'Cargo — atribuições x especificações',
    dificuldade: 3,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Cargo atribuições x especificações' },
    enunciado: 'A Diretoria de Gestão de Pessoas iniciou a revisão do seu plano de cargos. Durante o processo, uma equipe foi encarregada de: (1) detalhar as atividades desempenhadas, os resultados esperados, o grau de importância de cada tarefa e os equipamentos utilizados; (2) reunir habilidades, qualificações, esforços físicos e traços pessoais necessários para o bom desempenho das atividades. Com base nas definições clássicas da gestão de cargos, assinale a alternativa correta:',
    alternativas: [
      { id: 'A', texto: 'O primeiro processo corresponde às especificações do cargo, e o segundo às atribuições.' },
      { id: 'B', texto: 'Ambos os processos se referem às atribuições do cargo.' },
      { id: 'C', texto: 'O primeiro processo corresponde às atribuições do cargo, e o segundo às especificações do cargo.' },
      { id: 'D', texto: 'O primeiro processo representa as funções essenciais, e o segundo a análise ocupacional.' },
      { id: 'E', texto: 'O primeiro processo é parte das especificações, e o segundo trata da avaliação de desempenho.' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: 'ATRIBUIÇÕES do cargo: o que o ocupante FAZ (atividades, resultados, tarefas, equipamentos). ESPECIFICAÇÕES do cargo: QUEM pode ocupar (habilidades, qualificações, esforços, traços).',
      incorretas: {
        A: 'Inverte.',
        B: 'São conceitos distintos.',
        D: 'Não corresponde.',
        E: 'Não corresponde.'
      },
      conceitoCobrado: 'Cargo — atribuições x especificações',
      pegadinha: 'Inverter os conceitos.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['cargo', 'atribuições', 'especificações']
  },
  {
    id: 'Q-PDF-ADM-07-004',
    idOriginal: 'Não identificado',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-07',
    subtema: 'Avaliação de desempenho — Avaliação 90º',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Avaliação 90º' },
    enunciado: 'O setor de gestão de pessoas do IFPB optou por um modelo de avaliação de desempenho que confere ao chefe imediato a responsabilidade exclusiva pela aplicação do instrumento e emissão do parecer final. Esse modelo foi escolhido devido à sua agilidade e ao conhecimento detalhado que o gestor tem da equipe. Contudo, por ser unidirecional, apresenta riscos inerentes de viés de julgamento. O modelo adotado é:',
    alternativas: [
      { id: 'A', texto: 'Avaliação 180º.' },
      { id: 'B', texto: 'Avaliação 360º.' },
      { id: 'C', texto: 'Autoavaliação.' },
      { id: 'D', texto: 'Avaliação 90º.' },
      { id: 'E', texto: 'Avaliação Matriz Nove Boxes.' }
    ],
    gabarito: 'D',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A AVALIAÇÃO 90º (ou vertical) é aquela em que APENAS o chefe imediato avalia o subordinado — unidirecional, ágil, mas sujeita a viés.',
      incorretas: {
        A: 'A 180º inclui o próprio avaliado e o chefe.',
        B: 'A 360º inclui chefes, pares, subordinados e autoavaliação.',
        C: 'Autoavaliação é só do próprio avaliado.',
        E: 'Nove Boxes é matriz de talentos.'
      },
      conceitoCobrado: 'Modelos de avaliação de desempenho',
      pegadinha: 'Confundir 90º com 180º ou 360º.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['avaliação de desempenho', 'avaliação 90º']
  },

  /* ============================================================
     ADM-08 — Comunicação e comportamento organizacional
  ============================================================ */
  {
    id: 'Q-PDF-ADM-08-001',
    idOriginal: 'Não identificado',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-08',
    subtema: 'Função da comunicação — informação',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Função da comunicação' },
    enunciado: 'A comunicação pode ser definida como o compartilhamento de informações entre duas ou mais pessoas, a fim de alcançar um entendimento comum. Dentre suas funções no contexto organizacional, a comunicação pode cumprir o papel de facilitadora do processo decisório, permitindo a circulação de dados necessários para a tomada de decisões, exercendo uma função de:',
    alternativas: [
      { id: 'A', texto: 'Feedback.' },
      { id: 'B', texto: 'Controle.' },
      { id: 'C', texto: 'Motivação.' },
      { id: 'D', texto: 'Expressão emocional.' },
      { id: 'E', texto: 'Informação.' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A comunicação exerce a função de INFORMAÇÃO quando fornece dados necessários à tomada de decisão.',
      incorretas: {
        A: 'Feedback é retorno.',
        B: 'Controle é outra função.',
        C: 'Motivação é outra função.',
        D: 'Expressão emocional é outra função.'
      },
      conceitoCobrado: 'Funções da comunicação',
      pegadinha: 'Confundir informação com feedback.',
      comoApareceEmConcurso: 'Cobrança de função específica.'
    },
    tags: ['comunicação', 'funções']
  },
  {
    id: 'Q-PDF-ADM-08-002',
    idOriginal: 'Não identificado',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-08',
    subtema: 'Barreiras à comunicação — percepção seletiva',
    dificuldade: 3,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Percepção seletiva' },
    enunciado: 'A comunicação eficiente é um fator de grande relevância na execução das atividades diárias de um grupo de trabalho. Sobre as barreiras no processo de comunicação, é CORRETO afirmar:',
    alternativas: [
      { id: 'A', texto: 'A filtragem deve ser um mecanismo incentivado em uma organização que visa aperfeiçoar seus processos internos de comunicação.' },
      { id: 'B', texto: 'A percepção seletiva é o desvio de interpretação baseado em aspectos como preconceitos e experiências anteriores.' },
      { id: 'C', texto: 'As emoções não influenciam o modo como um indivíduo interpretará uma mensagem; não podem ser consideradas barreira.' },
      { id: 'D', texto: 'O excesso de informação contribui com a fluidez do processo de comunicação em uma organização.' }
    ],
    gabarito: 'B',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A PERCEPÇÃO SELETIVA é uma barreira à comunicação: o receptor interpreta a mensagem com base em preconceitos, experiências e valores pessoais.',
      incorretas: {
        A: 'A filtragem é barreira, não mecanismo a incentivar.',
        C: 'As emoções influenciam a interpretação.',
        D: 'O excesso de informação é barreira (sobrecarga).'
      },
      conceitoCobrado: 'Barreiras à comunicação',
      pegadinha: 'Confundir barreiras com mecanismos positivos.',
      comoApareceEmConcurso: 'Cobrança de definição.'
    },
    tags: ['barreiras', 'percepção seletiva']
  },
  {
    id: 'Q-PDF-ADM-08-003',
    idOriginal: 'Não identificado',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-08',
    subtema: 'Negociação — ganha-perde → perde-perde',
    dificuldade: 3,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Negociação' },
    enunciado: 'Em uma negociação entre dois setores, o Setor A insistiu em manter seus prazos, argumentando que qualquer ajuste traria prejuízo ao seu cronograma. O Setor B, para evitar atritos e encerrar rapidamente o impasse, aceitou integralmente as condições impostas, mesmo sabendo que isso comprometeria suas metas e a qualidade do serviço. Semanas depois, o Setor B demonstrou insatisfação e resistência em cooperar com o Setor A em novas demandas, gerando prejuízo à relação de ambos. Considerando os tipos de resultados em negociação, a situação evoluiu de:',
    alternativas: [
      { id: 'A', texto: 'perde-ganha para ganha-ganha.' },
      { id: 'B', texto: 'ganha-perde para perde-perde, pois a vitória inicial de uma parte resultou em prejuízos para ambas a longo prazo.' },
      { id: 'C', texto: 'perde-perde para ganha-perde.' },
      { id: 'D', texto: 'ganha-ganha para ganha-perde.' },
      { id: 'E', texto: 'perde-ganha para ganha-perde.' }
    ],
    gabarito: 'B',
    gabaritoInferido: false,
    explicacao: {
      correta: 'No início, o Setor A GANHOU e o Setor B PERDEU (ganha-perde). A longo prazo, a resistência do Setor B gerou prejuízo para ambos (perde-perde).',
      incorretas: {
        A: 'Não evoluiu para ganha-ganha.',
        C: 'Inverte.',
        D: 'Não evoluiu de ganha-ganha.',
        E: 'Não evoluiu para ganha-perde.'
      },
      conceitoCobrado: 'Tipos de resultado em negociação',
      pegadinha: 'Confundir ganha-perde com perde-ganha.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['negociação', 'ganha-perde', 'perde-perde']
  },

  /* ============================================================
     ADM-09 — Gestão da Qualidade
  ============================================================ */
  {
    id: 'Q-PDF-ADM-09-001',
    idOriginal: 'Q2353854',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-09',
    subtema: 'Sete ferramentas da qualidade',
    dificuldade: 3,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q2353854' },
    enunciado: 'As Sete Ferramentas da Qualidade são instrumentos que permitem a melhoria da gestão dos processos de trabalho. Sobre essa temática, é CORRETO afirmar:',
    alternativas: [
      { id: 'A', texto: 'O Diagrama de Ishikawa permite a estruturação e a hierarquização das principais causas que podem contribuir para um determinado efeito.' },
      { id: 'B', texto: 'O Diagrama de Pareto permite a identificação dos problemas relacionados a um efeito por meio da quantificação e do registro da frequência de sua ocorrência.' },
      { id: 'C', texto: 'O Histograma é a representação gráfica de um fluxo de tarefas a partir do detalhamento sequenciado de suas etapas.' },
      { id: 'D', texto: 'O Diagrama de Dispersão é caracterizado por sua natureza qualitativa, permitindo a coleta de dados subjetivos.' }
    ],
    gabarito: 'A',
    gabaritoInferido: false,
    explicacao: {
      correta: 'O DIAGRAMA DE ISHIKAWA (espinha de peixe) estrutura e hierarquiza as CAUSAS de um efeito (6M).',
      incorretas: {
        B: 'O Pareto prioriza por frequência/impacto (80/20), não apenas identifica.',
        C: 'O Histograma é gráfico de distribuição de frequência, não fluxo.',
        D: 'O Diagrama de Dispersão é quantitativo (correlação entre variáveis).'
      },
      conceitoCobrado: 'Sete ferramentas da qualidade',
      pegadinha: 'Confundir as funções de cada ferramenta.',
      comoApareceEmConcurso: 'Cobrança de definição.'
    },
    tags: ['ferramentas da qualidade', 'Ishikawa']
  },
  {
    id: 'Q-PDF-ADM-09-002',
    idOriginal: 'Não identificado',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-09',
    subtema: 'Diagrama de Pareto — aplicação (80/20)',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Diagrama de Pareto' },
    enunciado: 'Em uma universidade pública, o Pró-reitor de Administração identifica alto volume de reclamações sobre a demora nos processos administrativos. Rita, Pró-reitora Adjunta, sugere criar uma equipe para registrar e analisar os problemas, identificando os fatores que mais impactam o atraso. Ela esclarece que a estratégia é baseada no princípio segundo o qual, em muitos casos, 80% das consequências são resultados de 20% das causas. Esse princípio fundamenta a ferramenta da qualidade denominada:',
    alternativas: [
      { id: 'A', texto: 'Diagrama de Ishikawa.' },
      { id: 'B', texto: 'Fluxograma.' },
      { id: 'C', texto: 'Histograma.' },
      { id: 'D', texto: 'Diagrama de Pareto.' }
    ],
    gabarito: 'D',
    gabaritoInferido: false,
    explicacao: {
      correta: 'O princípio 80/20 é a base do DIAGRAMA DE PARETO, que prioriza as causas mais impactantes.',
      incorretas: {
        A: 'Ishikawa identifica causas (6M), não prioriza por 80/20.',
        B: 'Fluxograma representa fluxo.',
        C: 'Histograma mostra distribuição de frequência.'
      },
      conceitoCobrado: 'Diagrama de Pareto',
      pegadinha: 'Confundir com Ishikawa.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['Pareto', '80/20']
  },

  /* ============================================================
     ADM-10 — Administração de Materiais e Patrimônio
  ============================================================ */
  {
    id: 'Q-PDF-ADM-10-001',
    idOriginal: 'Não identificado',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-10',
    subtema: 'Tipos de almoxarifado',
    dificuldade: 3,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Tipos de almoxarifado' },
    enunciado: 'Sobre os diferentes tipos de estoque que podem existir em uma empresa, assinale a afirmativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'O almoxarifado de matérias-primas é onde estão as peças que servem de apoio à manutenção dos equipamentos e do edifício.' },
      { id: 'B', texto: 'O almoxarifado de materiais auxiliares é composto por insumos ou matérias-primas que serão transformadas durante o processo produtivo em um produto final.' },
      { id: 'C', texto: 'O almoxarifado de produtos acabados é onde são armazenados os materiais que auxiliam e participam do processo de transformação do produto; no entanto, não se agregam a ele.' },
      { id: 'D', texto: 'O almoxarifado intermediário é onde se encontram os produtos em fase de processamento, ainda não acabados, ou subconjuntos que estão armazenados para a composição do produto final.' }
    ],
    gabarito: 'D',
    gabaritoInferido: false,
    explicacao: {
      correta: 'O ALMOXARIFADO INTERMEDIÁRIO guarda produtos em fase de processamento (semiacabados) ou subconjuntos para a composição do produto final.',
      incorretas: {
        A: 'Descreve o almoxarifado de manutenção.',
        B: 'Descreve o almoxarifado de matérias-primas.',
        C: 'Descreve o almoxarifado de materiais auxiliares.'
      },
      conceitoCobrado: 'Tipos de almoxarifado',
      pegadinha: 'Trocar as definições.',
      comoApareceEmConcurso: 'Cobrança de definição.'
    },
    tags: ['almoxarifado', 'tipos de estoque']
  },
  {
    id: 'Q-PDF-ADM-10-002',
    idOriginal: 'Q2282445',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-10',
    subtema: 'Atividades da gestão de materiais',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q2282445' },
    enunciado: 'A administração de materiais envolve a gestão de todos os processos ligados à cadeia de suprimentos, desde os pontos de origem com a aquisição das matérias-primas até a entrega do produto ao consumidor final. Assinale a única alternativa que NÃO constitui atividade da gestão de materiais:',
    alternativas: [
      { id: 'A', texto: 'Seleção de fornecedores.' },
      { id: 'B', texto: 'Transporte.' },
      { id: 'C', texto: 'Armazenagem.' },
      { id: 'D', texto: 'Definição dos preços.' },
      { id: 'E', texto: 'Embalagens.' }
    ],
    gabarito: 'D',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A DEFINIÇÃO DOS PREÇOS é atividade de marketing/finanças, não da gestão de materiais.',
      incorretas: {
        A: 'Seleção de fornecedores é atividade.',
        B: 'Transporte é atividade.',
        C: 'Armazenagem é atividade.',
        E: 'Embalagens é atividade.'
      },
      conceitoCobrado: 'Atividades da gestão de materiais',
      pegadinha: 'Incluir atividade de outra área.',
      comoApareceEmConcurso: 'Cobrança de INCORRETA.'
    },
    tags: ['gestão de materiais', 'atividades']
  },
  {
    id: 'Q-PDF-ADM-10-003',
    idOriginal: 'Não identificado',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-10',
    subtema: 'WMS — Warehouse Management System',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — WMS' },
    enunciado: 'A logística de armazenagem compreende atividades gerenciais e operacionais para armazenar e proteger produtos, com o objetivo de minimizar custos operacionais e manter um serviço de qualidade. Entre os diferentes sistemas de armazenagem, pode-se citar o WMS. Acerca desse sistema, é correto afirmar que ele:',
    alternativas: [
      { id: 'A', texto: 'É voltado apenas para a identificação dos pallets que armazenam os itens do estoque.' },
      { id: 'B', texto: 'É voltado apenas para a criação de etiquetas adesivas de produtos perecíveis.' },
      { id: 'C', texto: 'Permite o controle de entrada e saída de mercadorias disponíveis.' },
      { id: 'D', texto: 'É focado exclusivamente na administração de mercadorias hospitalares.' },
      { id: 'E', texto: 'Cria uma logística própria, não se ajustando a outros sistemas.' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: 'O WMS (Warehouse Management System) é o sistema de gestão de armazém que controla entrada, saída e movimentação de mercadorias.',
      incorretas: {
        A: 'Não se limita a pallets.',
        B: 'Não se limita a etiquetas.',
        D: 'Não é exclusivo de hospital.',
        E: 'Integra-se a outros sistemas.'
      },
      conceitoCobrado: 'WMS',
      pegadinha: 'Restringir o WMS a uma única função.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['WMS', 'armazenagem']
  },

  /* ============================================================
     ADM-11 — Gestão de Processos
  ============================================================ */
  {
    id: 'Q-PDF-ADM-11-001',
    idOriginal: 'Não identificado',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-11',
    subtema: 'BPM — fase de Mudanças de Arquitetura',
    dificuldade: 3,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — BPM Mudanças de Arquitetura' },
    enunciado: 'A gestão BPM (Business Process Management) segue um ciclo de vida estruturado, composto por etapas integradas e interdependentes. A maioria dos modelos de ciclo de vida pode ser descrita como um processo iterativo, dividido em cinco fases. Uma dessas fases é denominada Mudanças de Arquitetura, na qual há:',
    alternativas: [
      { id: 'A', texto: 'O trabalho de modelação, de análise, de desenho e de medição do desempenho dos processos, buscando identificar os principais processos organizacionais atuais e interfuncionais no contexto das metas e dos objetivos desejados.' },
      { id: 'B', texto: 'O processo de criação do modelo permanente de Gestão Corporativa (Arquiteturas) de Processos e de governança para a organização, incluindo a medição e a monitorização contínua dos processos de negócio e da tecnologia.' },
      { id: 'C', texto: 'A realização de todos os planos da fase que a antecede, sendo coordenada e gerida pelo patrocinador do programa e pelo gestor do projeto, os quais providenciam a elaboração de um cronograma estruturado de implementação.' },
      { id: 'D', texto: 'A elaboração de uma estratégia e de um plano, fundamentalmente baseados em processos, para a organização, a partir da compreensão dos objetivos organizacionais, garantindo uma proposta de valor atrativa aos clientes.' }
    ],
    gabarito: 'B',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A fase de MUDANÇAS DE ARQUITETURA cria o modelo permanente de gestão corporativa (arquiteturas de processos) e de governança, com medição e monitorização contínua dos processos de negócio e da tecnologia.',
      incorretas: {
        A: 'Descreve a fase de descoberta/modelagem.',
        C: 'Descreve a fase de implementação.',
        D: 'Descreve a fase de estratégia/planejamento.'
      },
      conceitoCobrado: 'BPM — fases do ciclo de vida',
      pegadinha: 'Confundir a fase de arquitetura com modelagem ou implementação.',
      comoApareceEmConcurso: 'Cobrança de fase específica.'
    },
    tags: ['BPM', 'gestão por processos']
  },

  /* ============================================================
     ADM-12 — Atendimento ao público e relações interpessoais
  ============================================================ */
  {
    id: 'Q-PDF-ADM-12-001',
    idOriginal: 'Não identificado',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-12',
    subtema: 'Trabalho em equipe — característica INCORRETA',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Trabalho em equipe' },
    enunciado: 'O trabalho em equipe é de fundamental importância para a qualidade do produto a ser desenvolvido. Assinale a única alternativa que NÃO está associada ao trabalho em equipe:',
    alternativas: [
      { id: 'A', texto: 'Presença de independência de membros do grupo.' },
      { id: 'B', texto: 'Participação de lideranças no grupo.' },
      { id: 'C', texto: 'Comprometimento e empatia.' },
      { id: 'D', texto: 'Compromisso da equipe com a pontualidade na entrega.' },
      { id: 'E', texto: 'Preocupação com a eficiência e eficácia.' }
    ],
    gabarito: 'A',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A INDEPENDÊNCIA de membros do grupo NÃO está associada ao trabalho em equipe — a equipe pressupõe INTERDEPENDÊNCIA e cooperação.',
      incorretas: {
        B: 'Liderança participativa está associada.',
        C: 'Comprometimento e empatia estão associados.',
        D: 'Pontualidade está associada.',
        E: 'Eficiência e eficácia estão associadas.'
      },
      conceitoCobrado: 'Trabalho em equipe',
      pegadinha: 'Inverter independência por interdependência.',
      comoApareceEmConcurso: 'Cobrança de INCORRETA.'
    },
    tags: ['trabalho em equipe', 'independência']
  },
  {
    id: 'Q-PDF-ADM-12-002',
    idOriginal: 'Não identificado',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-12',
    subtema: 'Atendimento — presteza e interesse',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Atendimento presteza e interesse' },
    enunciado: 'Um cidadão procurou um Conselho Regional em busca de informações a respeito de um processo administrativo. Todavia, embora o assunto não fosse de sua competência, o colaborador indicou o setor responsável, informou a sua localização e ofereceu-se para acompanhá-lo até o local. Com base nessa situação hipotética, é correto afirmar que a conduta do colaborador evidencia os atributos de:',
    alternativas: [
      { id: 'A', texto: 'discrição e tolerância, pois o colaborador preservou a confidencialidade das informações e manteve a postura respeitosa durante o atendimento.' },
      { id: 'B', texto: 'presteza e interesse, pois buscou atender prontamente à necessidade do cidadão e demonstrou disposição para auxiliá-lo até o encaminhamento adequado da demanda.' },
      { id: 'C', texto: 'comunicabilidade e objetividade, pois transmitiu as informações necessárias de forma clara, restringindo-se às orientações indispensáveis ao atendimento.' },
      { id: 'D', texto: 'apresentação e comunicabilidade, considerando que o êxito do atendimento depende, sobretudo, da forma como o colaborador se apresentou ao cidadão.' },
      { id: 'E', texto: 'eficiência e resolutividade, pois solucionou a demanda do cidadão, independentemente das atribuições de sua unidade de atuação no escopo de trabalho.' }
    ],
    gabarito: 'B',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A conduta evidencia PRESTEZA (atendimento pronto) e INTERESSE (disposição para auxiliar e acompanhar o cidadão até o setor correto).',
      incorretas: {
        A: 'Discrição e tolerância não são os atributos centrais.',
        C: 'Comunicabilidade e objetividade não captam a disposição de acompanhar.',
        D: 'Apresentação e comunicabilidade não são o foco.',
        E: 'Eficiência e resolutividade não se aplicam, pois a demanda não foi resolvida na unidade.'
      },
      conceitoCobrado: 'Atributos do atendimento',
      pegadinha: 'Confundir presteza com eficiência ou resolutividade.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['atendimento', 'presteza', 'interesse']
  },
  /* ============================================================
     LOTE PDF — QConcursos / Gran Cursos
     AP-13, AP-14 + DA-15 a DA-18
     ============================================================ */

  /* ============================================================
     AP-13 — Conceitos fundamentais de Administração Pública
  ============================================================ */
  {
    id: 'Q-PDF-AP-13-001',
    idOriginal: 'Q4650036',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'AP',
    moduloId: 'AP-13',
    subtema: 'Função administrativa x função política x função jurisdicional',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4650036' },
    enunciado: 'A Administração Pública compreende o conjunto de atividades desenvolvidas pelo Estado para atender às necessidades coletivas, observando os princípios constitucionais e o regime jurídico-administrativo. Nesse contexto, a atuação administrativa distingue-se da atividade política e da função jurisdicional. Com base nas noções de Administração Pública, assinale a alternativa correta.',
    alternativas: [
      { id: 'A', texto: 'A função administrativa caracteriza-se pela execução concreta das políticas públicas e pela prestação de serviços à coletividade, sendo exercida predominantemente pelo Poder Executivo, sem exclusividade.' },
      { id: 'B', texto: 'A Administração Pública exerce função política quando pratica atos de gestão destinados à execução de serviços públicos e à satisfação direta das necessidades da população.' },
      { id: 'C', texto: 'A função administrativa é exercida exclusivamente pelo Poder Executivo, cabendo aos Poderes Legislativo e Judiciário apenas as funções legislativa e jurisdicional, respectivamente.' },
      { id: 'D', texto: 'A Administração Pública possui autonomia para definir livremente seus objetivos institucionais, desde que suas decisões estejam alinhadas às prioridades estabelecidas pelo chefe do Poder Executivo.' }
    ],
    gabarito: 'A',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A função administrativa é a execução concreta das políticas públicas e a prestação de serviços à coletividade. É exercida predominantemente pelo Executivo, mas também pelos demais Poderes quando exercem atividade administrativa (ex.: gestão de pessoal, licitações).',
      incorretas: {
        B: 'Função política envolve decisões estratégicas (ex.: sanção de leis, declaração de guerra); não se confunde com atos de gestão.',
        C: 'A função administrativa não é exclusiva do Executivo — os três Poderes a exercem quando praticam atos de gestão interna.',
        D: 'A Administração Pública não define livremente seus objetivos — está vinculada à lei e ao interesse público.'
      },
      conceitoCobrado: 'Função administrativa x função política',
      pegadinha: 'Restringir a função administrativa ao Executivo ou confundi-la com função política.',
      comoApareceEmConcurso: 'Cobrança da distinção entre funções estatais.'
    },
    tags: ['função administrativa', 'função política']
  },

  /* ============================================================
     DA-15 — Princípios da Administração Pública
  ============================================================ */
  {
    id: 'Q-PDF-DA-15-001',
    idOriginal: 'Q4369752',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'DA',
    moduloId: 'DA-15',
    subtema: 'Princípio da legalidade — sentido amplo (di Pietro)',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4369752' },
    enunciado: 'Segundo di Pietro (2023), os princípios da legalidade e da supremacia do interesse público são fundamentais para a compreensão da Administração Pública, pois permeiam todo o direito público e formam a base para todos os outros princípios. Acerca dessa informação, julgue os itens seguintes. O princípio da legalidade estabelece a ideia de limites da atuação administrativa que tenha por objeto a restrição ao exercício de direitos em benefício da coletividade.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: 'CERTO. Para di Pietro, a legalidade em sentido amplo abrange não apenas a conformidade com a lei, mas também a restrição de direitos em benefício da coletividade (legalidade material).',
      incorretas: {},
      conceitoCobrado: 'Legalidade em sentido amplo',
      pegadinha: 'Restringir a legalidade à mera conformidade formal com a lei.',
      comoApareceEmConcurso: 'Cobrança da dimensão material da legalidade.'
    },
    tags: ['legalidade', 'di Pietro']
  },
  {
    id: 'Q-PDF-DA-15-002',
    idOriginal: 'Q4650534',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-15',
    subtema: 'Princípio da moralidade — definição',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4650534' },
    enunciado: 'Marque a alternativa que preenche a lacuna a seguir corretamente a respeito dos princípios da administração pública: "Caracterizam ofensa à _____ administrativa: intencional violação do direito, por ação ou omissão, quer quanto aos meios de atuação dos agentes públicos, quer quanto aos fins inerentes ao exercício da função pública; o atuar com intenção viciada nos atos expedidos no exercício de competência discricionária; os atos eivados de desvio de poder; e ofensas à ordem jurídico-positiva que têm por abstrato valores morais."',
    alternativas: [
      { id: 'A', texto: 'eficiência' },
      { id: 'B', texto: 'impessoalidade' },
      { id: 'C', texto: 'legalidade' },
      { id: 'D', texto: 'publicidade' },
      { id: 'E', texto: 'moralidade' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A descrição — intencional violação do direito, atuação com intenção viciada, desvio de poder, ofensas a valores morais — corresponde à MORALIDADE administrativa.',
      incorretas: {
        A: 'Eficiência trata de resultados e racionalidade de meios.',
        B: 'Impessoalidade trata da objetividade e vedação de favorecimentos.',
        C: 'Legalidade trata da conformidade com a lei.',
        D: 'Publicidade trata da divulgação oficial.'
      },
      conceitoCobrado: 'Moralidade administrativa',
      pegadinha: 'Confundir moralidade com legalidade ou impessoalidade.',
      comoApareceEmConcurso: 'Cobrança da definição de moralidade.'
    },
    tags: ['moralidade', 'LIMPE']
  },
  {
    id: 'Q-PDF-DA-15-003',
    idOriginal: 'Q4596259',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-15',
    subtema: 'Princípio da impessoalidade — dupla acepção',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4596259' },
    enunciado: 'Em seu trabalho diário, o Assistente Administrativo precisa lidar com a publicidade de atos administrativos, como a divulgação de editais para eventos culturais e esportivos. Nesse sentido, o princípio da impessoalidade é central para garantir que a promoção pessoal dos agentes públicos não se confunda com a publicidade institucional do órgão que trabalha, conforme previsto na Constituição Federal. Isso posto, o princípio da impessoalidade na Administração Pública possui dupla acepção. Diante do exposto, pergunta-se: Qual das alternativas descreve CORRETAMENTE uma dessas acepções e seu impacto na atuação do agente público?',
    alternativas: [
      { id: 'A', texto: 'Veda a criação de despesas que não estejam previamente autorizadas em lei financeira.' },
      { id: 'B', texto: 'Impõe que a Administração atue em busca do interesse público primário, e não do interesse privado do agente ou de terceiros.' },
      { id: 'C', texto: 'Exige que todos os atos administrativos sejam devidamente fundamentados, com indicação exclusivamente dos pressupostos e fundamentos discricionários levantados dentro do processo em curso.' },
      { id: 'D', texto: 'Obriga que a conduta do agente seja pautada somente na moralidade, afastando a legalidade do contexto da ação e os padrões éticos coletivos.' },
      { id: 'E', texto: 'Determina que a Administração não pode dispensar isenções reguláveis ou cometer favoritismos em detrimento de indivíduos específicos.' }
    ],
    gabarito: 'B',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A impessoalidade impõe que a Administração atue em busca do interesse público primário (coletividade), e não do interesse privado do agente ou de terceiros. É a dimensão material da impessoalidade.',
      incorretas: {
        A: 'Vedação de despesas sem lei é legalidade orçamentária.',
        C: 'Fundamentação é motivação, não impessoalidade.',
        D: 'Afastar a legalidade é incorreto — moralidade e legalidade coexistem.',
        E: 'A impessoalidade veda favoritismos, mas a descrição não é a mais precisa.'
      },
      conceitoCobrado: 'Impessoalidade — dupla acepção',
      pegadinha: 'Confundir impessoalidade com legalidade ou moralidade.',
      comoApareceEmConcurso: 'Cobrança da dimensão material da impessoalidade.'
    },
    tags: ['impessoalidade', 'interesse público']
  },
  {
    id: 'Q-PDF-DA-15-004',
    idOriginal: 'Q4432137',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'DA',
    moduloId: 'DA-15',
    subtema: 'Princípio da eficiência — dimensão material',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4432137' },
    enunciado: 'A incorporação do princípio da eficiência ao texto constitucional inseriu novas exigências no regime jurídico-administrativo, influenciando parâmetros de atuação estatal e critérios de avaliação da atividade administrativa. Com base nessa informação, julgue os itens a seguir. A utilização racional dos recursos públicos, com vistas à obtenção do melhor resultado possível com o menor dispêndio necessário, constitui dimensão material do princípio da eficiência administrativa.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: 'CERTO. A dimensão material da eficiência é exatamente a utilização racional dos recursos públicos para obter o melhor resultado com o menor dispêndio (economicidade + qualidade).',
      incorretas: {},
      conceitoCobrado: 'Eficiência — dimensão material',
      pegadinha: 'Confundir eficiência com eficácia ou efetividade.',
      comoApareceEmConcurso: 'Cobrança da definição constitucional de eficiência.'
    },
    tags: ['eficiência', 'LIMPE']
  },

  /* ============================================================
     DA-16 — Organização da Administração Pública
  ============================================================ */
  {
    id: 'Q-PDF-DA-16-001',
    idOriginal: 'Q4372731',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-16',
    subtema: 'Sociedade de economia mista — CAGECE',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4372731' },
    enunciado: 'A administração indireta é o conjunto de entes que, vinculado a algum órgão da administração direta, prestam serviços públicos ou de interesse público. A Companhia de Água e Esgoto do Ceará - CAGECE, trata-se de uma:',
    alternativas: [
      { id: 'A', texto: 'Autarquia.' },
      { id: 'B', texto: 'Fundação Pública de Direito Público.' },
      { id: 'C', texto: 'Fundação Pública de Direito Privado.' },
      { id: 'D', texto: 'Empresa Pública.' },
      { id: 'E', texto: 'Sociedade de Economia Mista.' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A CAGECE é uma SOCIEDADE DE ECONOMIA MISTA — pessoa jurídica de direito privado, com capital misto (maioria pública), constituída como sociedade anônima, para exploração de atividade econômica ou prestação de serviço público.',
      incorretas: {
        A: 'Autarquia é pessoa jurídica de direito público, criada por lei para atividade típica de Estado.',
        B: 'Fundação pública de direito público é outra categoria.',
        C: 'Fundação pública de direito privado é outra categoria.',
        D: 'Empresa pública tem capital 100% público; a CAGECE tem capital misto.'
      },
      conceitoCobrado: 'Sociedade de economia mista',
      pegadinha: 'Confundir SEM com empresa pública.',
      comoApareceEmConcurso: 'Identificação da natureza jurídica de entidade da Administração Indireta.'
    },
    tags: ['sociedade de economia mista', 'CAGECE']
  },
  {
    id: 'Q-PDF-DA-16-002',
    idOriginal: 'Q4622854',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-16',
    subtema: 'Competência administrativa — órgãos federais',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4622854' },
    enunciado: 'Em uma repartição federal, foi recebido um processo referente ao planejamento nacional de infraestrutura logística, de transportes e de obras estruturantes. O assistente administrativo observou que o assunto não deveria ser encaminhado ao Ministério do Desenvolvimento Regional, pois a competência administrativa principal, nesse caso, está vinculada ao Ministério:',
    alternativas: [
      { id: 'A', texto: 'das Cidades' },
      { id: 'B', texto: 'da Integração' },
      { id: 'C', texto: 'dos Transportes' },
      { id: 'D', texto: 'do Planejamento' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: 'O planejamento nacional de infraestrutura logística, de transportes e de obras estruturantes é competência do MINISTÉRIO DOS TRANSPORTES.',
      incorretas: {
        A: 'Ministério das Cidades cuida de habitação, saneamento e mobilidade urbana.',
        B: 'Ministério da Integração cuida de desenvolvimento regional.',
        D: 'Ministério do Planejamento cuida de orçamento e gestão.'
      },
      conceitoCobrado: 'Competência administrativa — organização dos órgãos federais',
      pegadinha: 'Confundir as competências dos ministérios.',
      comoApareceEmConcurso: 'Cobrança da estrutura administrativa federal.'
    },
    tags: ['competência', 'ministérios', 'transportes']
  },

  /* ============================================================
     DA-17 — Agentes públicos
  ============================================================ */
  {
    id: 'Q-PDF-DA-17-001',
    idOriginal: 'Q4458690',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-17',
    subtema: 'Responsabilização administrativa do servidor',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4458690' },
    enunciado: 'A atuação do servidor público está sujeita a mecanismos de responsabilização destinados a assegurar a legalidade e a regularidade das atividades administrativas. Assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'A responsabilidade administrativa do servidor público somente ocorre quando houver condenação judicial definitiva relacionada ao ato praticado no exercício da função pública.' },
      { id: 'B', texto: 'A responsabilização administrativa do servidor depende exclusivamente da comprovação de vantagem econômica obtida pelo agente no exercício da função pública.' },
      { id: 'C', texto: 'A responsabilidade funcional aplica-se apenas aos servidores ocupantes de cargos de chefia ou direção no âmbito da Administração Pública.' },
      { id: 'D', texto: 'O servidor público não pode ser responsabilizado por atos praticados no exercício da função administrativa desempenhada no âmbito da Administração.' },
      { id: 'E', texto: 'O servidor público responde administrativamente pelos atos praticados no exercício de suas atribuições quando violar dever funcional ou causar prejuízo à Administração Pública.' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'O servidor responde administrativamente quando viola dever funcional ou causa prejuízo à Administração, independentemente de condenação judicial (as esferas são independentes).',
      incorretas: {
        A: 'A responsabilidade administrativa é independente da judicial.',
        B: 'Não exige vantagem econômica — basta violação de dever funcional.',
        C: 'Aplica-se a todos os servidores, não apenas a chefias.',
        D: 'O servidor pode e deve ser responsabilizado.'
      },
      conceitoCobrado: 'Responsabilização administrativa do servidor',
      pegadinha: 'Condicionar a responsabilização à condenação judicial ou à vantagem econômica.',
      comoApareceEmConcurso: 'Cobrança da independência das esferas de responsabilização.'
    },
    tags: ['responsabilidade', 'servidor público']
  },

  /* ============================================================
     DA-18 — Poderes da Administração Pública
  ============================================================ */
  {
    id: 'Q-PDF-DA-18-001',
    idOriginal: 'Q4641329',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-18',
    subtema: 'Poder hierárquico — definição',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4641329' },
    enunciado: 'Determinada autoridade pública decide editar um ato administrativo para organizar a escala de férias dos agentes de sua unidade, visando garantir a continuidade do serviço essencial. Ao fazer isso, a autoridade distribui funções e estabelece uma relação de subordinação e coordenação entre os diversos departamentos sob seu comando. Essa capacidade de comando, fiscalização e revisão de atos de subordinados, que permite a organização interna dos órgãos públicos para a prestação eficiente de serviços, fundamenta-se diretamente na aplicação do seguinte poder:',
    alternativas: [
      { id: 'A', texto: 'Regulamentar.' },
      { id: 'B', texto: 'Hierárquico.' },
      { id: 'C', texto: 'Judiciário.' },
      { id: 'D', texto: 'Discricionário.' },
      { id: 'E', texto: 'De polícia.' }
    ],
    gabarito: 'B',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A capacidade de comando, fiscalização e revisão de atos de subordinados, com distribuição de funções e estabelecimento de subordinação, é o PODER HIERÁRQUICO.',
      incorretas: {
        A: 'Poder regulamentar é a edição de decretos para detalhar a lei.',
        C: 'Poder Judiciário não é poder administrativo.',
        D: 'Discricionariedade é margem de escolha, não poder hierárquico.',
        E: 'Poder de polícia limita direitos do particular.'
      },
      conceitoCobrado: 'Poder hierárquico',
      pegadinha: 'Confundir com poder disciplinar ou regulamentar.',
      comoApareceEmConcurso: 'Cobrança da definição de poder hierárquico.'
    },
    tags: ['poder hierárquico']
  },
  {
    id: 'Q-PDF-DA-18-002',
    idOriginal: 'Q4539064',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-18',
    subtema: 'Poder de polícia — fases (ordem)',
    dificuldade: 3,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4539064' },
    enunciado: 'Determinada autarquia federal responsável pela regulação do transporte intermunicipal editou Portaria estabelecendo requisitos para a prestação do serviço por particulares. Uma empresa solicitou autorização para operar em certa linha, sendo o pedido analisado e deferido com base em critérios de conveniência e oportunidade. Posteriormente, durante fiscalização de rotina, verificou-se que a empresa deixou de cumprir condições estabelecidas no ato de autorização, o que ensejou a lavratura de auto de infração e, após regular processo administrativo, a aplicação de multa. À luz do ciclo do poder de polícia, assinale a afirmativa correta.',
    alternativas: [
      { id: 'A', texto: 'A aplicação da multa constitui fase do poder de polícia e pode ocorrer ainda que não haja previsão legal específica para a conduta.' },
      { id: 'B', texto: 'A autorização concedida à empresa gera direito subjetivo à manutenção da atividade, impedindo a revogação do ato administrativo.' },
      { id: 'C', texto: 'O deferimento do pedido da empresa configura ato vinculado, pois a administração deve conceder a autorização quando preenchidos os requisitos legais.' },
      { id: 'D', texto: 'A fiscalização realizada pela autarquia não apresenta caráter preventivo, estando voltada à aplicação de penalidades em face de irregularidades constatadas.' },
      { id: 'E', texto: 'A edição da Portaria pela autarquia corresponde à fase de ordem, por meio da qual a administração estabelece normas e restrições ao exercício de atividades privadas.' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A edição de Portaria que estabelece requisitos e restrições é a fase de ORDEM do ciclo de polícia (legislação/normatização).',
      incorretas: {
        A: 'A multa é fase de sanção e exige previsão legal.',
        B: 'Autorização é ato precário e revogável.',
        C: 'A autorização é ato discricionário, não vinculado.',
        D: 'A fiscalização tem caráter preventivo e repressivo.'
      },
      conceitoCobrado: 'Poder de polícia — fases',
      pegadinha: 'Confundir a fase de ordem (normatização) com as fases de consentimento, fiscalização e sanção.',
      comoApareceEmConcurso: 'Cobrança do ciclo de polícia em cenário aplicado.'
    },
    tags: ['poder de polícia', 'fases', 'ordem']
  },
  {
    id: 'Q-PDF-DA-18-003',
    idOriginal: 'Q4539212',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-18',
    subtema: 'Poder de polícia — interdição de atividade',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4539212' },
    enunciado: 'A fiscalização do CRC, ao constatar que um escritório de contabilidade está funcionando sem o registro cadastral obrigatório, decide lavrar um auto de infração e interditar temporariamente as atividades até a regularização. Essa prerrogativa da Administração de restringir o exercício de atividades privadas em benefício da ordem profissional é denominada:',
    alternativas: [
      { id: 'A', texto: 'Poder de Polícia.' },
      { id: 'B', texto: 'Poder Disciplinar.' },
      { id: 'C', texto: 'Poder Regulamentar.' },
      { id: 'D', texto: 'Poder Hierárquico.' },
      { id: 'E', texto: 'Poder Legislativo.' }
    ],
    gabarito: 'A',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A prerrogativa de restringir o exercício de atividades privadas em benefício da ordem profissional é o PODER DE POLÍCIA.',
      incorretas: {
        B: 'Poder disciplinar pune servidores e sujeitos à disciplina interna.',
        C: 'Poder regulamentar edita decretos para detalhar a lei.',
        D: 'Poder hierárquico organiza internamente a Administração.',
        E: 'Poder Legislativo não é poder administrativo.'
      },
      conceitoCobrado: 'Poder de polícia',
      pegadinha: 'Confundir com poder disciplinar.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['poder de polícia', 'interdição']
  },
  /* ============================================================
     LOTE PDF — QConcursos / Gran Cursos
     DA-19 a DA-21
     ============================================================ */

  /* ============================================================
     DA-19 — Atos Administrativos
  ============================================================ */
  {
    id: 'Q-PDF-DA-19-001',
    idOriginal: 'Q4494298',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-19',
    subtema: 'Natureza do ato administrativo — ato concreto e unilateral',
    dificuldade: 1,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4494298' },
    enunciado: 'Em uma repartição pública, o gestor emite um ato que, de forma unilateral e motivada por fatos concretos previstos em lei, impõe uma multa a um cidadão por descumprimento de norma ambiental. Esse ato possui características específicas que o distinguem de outros atos jurídicos. Assinale a alternativa que identifica corretamente a natureza desse ato.',
    alternativas: [
      { id: 'A', texto: 'Ato legislativo.' },
      { id: 'B', texto: 'Ato judicial.' },
      { id: 'C', texto: 'Ato privado.' },
      { id: 'D', texto: 'Ato administrativo.' },
      { id: 'E', texto: 'Ato normativo.' }
    ],
    gabarito: 'D',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A multa aplicada por gestor público, com base em lei, de forma unilateral e concreta, é um ATO ADMINISTRATIVO, manifestação da Administração no exercício de suas funções.',
      incorretas: {
        A: 'Ato legislativo é produzido pelo Poder Legislativo no exercício da função legislativa.',
        B: 'Ato judicial é produzido pelo Poder Judiciário no exercício da jurisdição.',
        C: 'Ato privado é praticado por particulares, sem prerrogativas públicas.',
        E: 'Ato normativo é genérico e abstrato; a multa é concreta.'
      },
      conceitoCobrado: 'Natureza do ato administrativo',
      pegadinha: 'Confundir ato administrativo com ato normativo ou judicial.',
      comoApareceEmConcurso: 'Identificação da natureza de um ato a partir de suas características.'
    },
    tags: ['ato administrativo', 'multa']
  },
  {
    id: 'Q-PDF-DA-19-002',
    idOriginal: 'Q4311371',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-19',
    subtema: 'Elementos do ato administrativo — finalidade pública',
    dificuldade: 3,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4311371' },
    enunciado: 'O ato administrativo é uma manifestação unilateral de vontade da Administração Pública que, com base na legalidade, tem por finalidade produzir efeitos jurídicos no âmbito do Direito Público. São elementos ou requisitos para o ato administrativo: sujeito competente; finalidade pública; forma prescrita em lei; motivo e objeto. Sobre o elemento finalidade pública, analise as sentenças: I - Finalidade é o resultado ou o bem jurídico que a Administração Pública quer alcançar com o ato. II - Em razão do princípio constitucional da finalidade pública, toda atividade desenvolvida pela Administração Pública deve guiar-se para o atendimento de um único resultado ou bem jurídico, qual seja, o fim público, que nada mais é senão servir ao interesse da coletividade. III - Se o fim visado não for aquele previsto para o ato editado haverá o desvio específico de finalidade expondo o ato à invalidação. IV - O desvio de finalidade se verifica quando o agente pratica o ato pretendendo fim diverso daquele previsto, explicita ou implicitamente, na regra de competência. A finalidade é elemento sempre vinculado. Após a análise, pode-se afirmar:',
    alternativas: [
      { id: 'A', texto: 'As sentenças I, II, III e IV estão corretas.' },
      { id: 'B', texto: 'Somente as sentenças II, III e IV estão corretas.' },
      { id: 'C', texto: 'Somente as sentenças I, III e IV estão corretas.' },
      { id: 'D', texto: 'Somente as sentenças I, II e III estão corretas.' },
      { id: 'E', texto: 'Somente as sentenças III e IV estão corretas.' }
    ],
    gabarito: 'A',
    gabaritoInferido: false,
    explicacao: {
      correta: 'Todas as sentenças estão corretas: a finalidade é o bem jurídico visado (I); a Administração deve buscar o interesse coletivo (II); o desvio de finalidade invalida o ato (III); e a finalidade é elemento vinculado (IV).',
      incorretas: {
        B: 'A I também está correta.',
        C: 'A II também está correta.',
        D: 'A IV também está correta.',
        E: 'A I e II também estão corretas.'
      },
      conceitoCobrado: 'Finalidade do ato administrativo',
      pegadinha: 'Excluir alguma das assertivas corretas.',
      comoApareceEmConcurso: 'Análise de múltiplas sentenças sobre um elemento do ato.'
    },
    tags: ['finalidade', 'desvio de finalidade']
  },
  {
    id: 'Q-PDF-DA-19-003',
    idOriginal: 'Q4467888',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-19',
    subtema: 'Vício de competência — anulação',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4467888' },
    enunciado: 'Em um órgão público municipal, um auxiliar administrativo responsável pela expedição de autorizações administrativas emitiu determinado ato permitindo o funcionamento de uma atividade econômica local. Posteriormente, verificou-se que o ato foi praticado por um agente sem competência legal para tal atribuição, embora todos os demais elementos, finalidade pública, forma e motivação estivessem adequadamente presentes. Diante da situação, a Administração decidiu revisar o ato, considerando seus requisitos de validade e os efeitos produzidos perante terceiros de boa-fé. Nesse contexto, é correto afirmar que o ato administrativo:',
    alternativas: [
      { id: 'A', texto: 'É inválido por vício de competência, podendo ser objeto de anulação pela própria Administração, ainda que tenha produzido efeitos, ressalvada a análise de eventuais consequências para terceiros de boa-fé.' },
      { id: 'B', texto: 'É inexistente juridicamente, não produzindo qualquer efeito desde sua origem, independentemente da aparência de legalidade ou da confiança gerada nos administrados.' },
      { id: 'C', texto: 'Permanece válido, uma vez que a ausência de competência não compromete a eficácia do ato quando presentes os demais requisitos, especialmente nos casos em que há atendimento ao interesse público.' },
      { id: 'D', texto: 'Deve ser automaticamente convalidado, pois a presença de finalidade pública e motivação adequada supre eventual irregularidade quanto à competência do agente que o praticou.' }
    ],
    gabarito: 'A',
    gabaritoInferido: false,
    explicacao: {
      correta: 'O vício de competência é sanável (convalidável), mas a Administração pode anular o ato, ressalvando os efeitos perante terceiros de boa-fé.',
      incorretas: {
        B: 'O ato existe e produz efeitos até ser anulado; não é inexistente.',
        C: 'A competência é requisito de validade; sua ausência compromete o ato.',
        D: 'A convalidação é possível, mas não automática.'
      },
      conceitoCobrado: 'Vício de competência e anulação',
      pegadinha: 'Achar que o ato é inexistente ou que a convalidação é automática.',
      comoApareceEmConcurso: 'Cenário aplicado sobre vício de competência.'
    },
    tags: ['competência', 'anulação', 'convalidação']
  },
  {
    id: 'Q-PDF-DA-19-004',
    idOriginal: 'Q4650034',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-19',
    subtema: 'Atributos do ato administrativo — presunção de legitimidade',
    dificuldade: 3,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4650034' },
    enunciado: 'Durante a análise de um processo administrativo, o Oficial de Administração verificou que determinado ato foi praticado por agente público no exercício de suas atribuições, apresentou finalidade de atendimento ao interesse público, observou a forma prevista em lei e produziu efeitos independentemente da concordância do particular atingido. Considerando o conceito, os requisitos e os atributos dos atos administrativos, assinale a alternativa correta.',
    alternativas: [
      { id: 'A', texto: 'A presunção de legitimidade confere ao ato administrativo presunção relativa de conformidade com a lei e com os fatos que lhe deram fundamento, sem afastar a possibilidade de controle administrativo ou judicial.' },
      { id: 'B', texto: 'A imperatividade constitui atributo dos atos administrativos que impõem obrigações ao particular, enquanto a autoexecutoriedade permite à Administração executar diretamente suas decisões sempre que a medida se mostrar necessária à satisfação do interesse público.' },
      { id: 'C', texto: 'A competência, a finalidade, a forma, o motivo e o objeto constituem atributos do ato administrativo, enquanto a presunção de legitimidade e a autoexecutoriedade são seus requisitos de validade.' },
      { id: 'D', texto: 'A exigência de concordância do particular para a produção de efeitos constitui requisito indispensável dos atos administrativos, em razão da necessidade de preservação da autonomia da vontade.' }
    ],
    gabarito: 'A',
    gabaritoInferido: true,
    explicacao: {
      correta: 'A presunção de legitimidade é relativa (iuris tantum): o ato se presume válido até prova em contrário, sem afastar o controle.',
      incorretas: {
        B: 'A definição de imperatividade e autoexecutoriedade está correta em tese, mas a alternativa A é mais precisa e não contém generalização. (Gabarito inferido — conferir.)',
        C: 'Inverte atributos e requisitos.',
        D: 'A concordância do particular não é requisito.'
      },
      conceitoCobrado: 'Presunção de legitimidade',
      pegadinha: 'Confundir atributos com requisitos ou generalizar a autoexecutoriedade.',
      comoApareceEmConcurso: 'Cobrança de atributo específico.'
    },
    tags: ['presunção de legitimidade', 'atributos']
  },
  {
    id: 'Q-PDF-DA-19-005',
    idOriginal: 'Q4634589',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-19',
    subtema: 'Espécies de atos — ordinatório e enunciativo',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4634589' },
    enunciado: 'Ato administrativo é toda manifestação unilateral de vontade da Administração Pública, que tem por objetivo imediato adquirir, resguardar, transferir, modificar, extinguir direitos ou impor obrigações aos administrados ou a si própria. Assinale a alternativa que apresenta, respectivamente, a espécie dos atos administrativos Portaria de Pessoal e pedido de Certidão Negativa de Débitos solicitada por um cidadão perante o órgão público:',
    alternativas: [
      { id: 'A', texto: 'Normativo e Negocial' },
      { id: 'B', texto: 'Ordinatório e Enunciativo.' },
      { id: 'C', texto: 'Enunciativo e Normativo.' },
      { id: 'D', texto: 'Negocial e Ordinatório.' }
    ],
    gabarito: 'B',
    gabaritoInferido: false,
    explicacao: {
      correta: 'Portaria de Pessoal é ato ORDINATÓRIO (organiza a Administração). Certidão é ato ENUNCIATIVO (declara uma situação).',
      incorretas: {
        A: 'Portaria não é normativa (genérica) e certidão não é negocial.',
        C: 'Inverte.',
        D: 'Portaria não é negocial.'
      },
      conceitoCobrado: 'Espécies de atos administrativos',
      pegadinha: 'Confundir ordinatório com normativo ou enunciativo com negocial.',
      comoApareceEmConcurso: 'Classificação de atos concretos.'
    },
    tags: ['espécies de atos', 'ordinatório', 'enunciativo']
  },
  {
    id: 'Q-PDF-DA-19-006',
    idOriginal: 'Q4286551',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-19',
    subtema: 'Convalidação — vício de competência sanável',
    dificuldade: 3,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4286551' },
    enunciado: 'Na gestão pública de um município, o órgão de controle interno verificou que o servidor público Tércio, apesar de ter obedecido à forma exigida em lei, assinou um ato no lugar do servidor público Osvaldo, seu superior imediato. Observou-se também que Osvaldo não detém competência exclusiva para a assinatura desse ato, além de não se vislumbrar prejuízo ao interesse público e a terceiros. Para que tal ato permaneça no ordenamento jurídico daquele município, ele será',
    alternativas: [
      { id: 'A', texto: 'anulado, sem efeitos retroativos.' },
      { id: 'B', texto: 'revogado, com efeitos retroativos.' },
      { id: 'C', texto: 'anulado, com efeitos retroativos.' },
      { id: 'D', texto: 'convalidado, sem efeitos retroativos.' },
      { id: 'E', texto: 'convalidado, com efeitos retroativos.' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'O vício de competência (não exclusiva) é sanável; a convalidação produz efeitos retroativos (ex tunc).',
      incorretas: {
        A: 'Não é caso de anulação.',
        B: 'Revogação é por mérito, não por vício.',
        C: 'Anulação seria possível, mas a convalidação é mais adequada.',
        D: 'A convalidação tem efeitos retroativos.'
      },
      conceitoCobrado: 'Convalidação',
      pegadinha: 'Confundir convalidação com anulação ou achar que os efeitos são ex nunc.',
      comoApareceEmConcurso: 'Cenário aplicado sobre vício sanável.'
    },
    tags: ['convalidação', 'competência']
  },

  /* ============================================================
     DA-20 — Serviços Públicos
  ============================================================ */
  {
    id: 'Q-PDF-DA-20-001',
    idOriginal: 'Q4539178',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-20',
    subtema: 'Conceito de serviço público — concessão e permissão',
    dificuldade: 3,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4539178' },
    enunciado: 'Os serviços públicos, enquanto atividades destinadas à satisfação de necessidades coletivas, ocupam posição central no direito administrativo, sendo regidos por um conjunto de normas e diretrizes que asseguram sua adequada prestação, como a continuidade, universalidade, eficiência e modicidade. A disciplina jurídica do tema, delineada pela Constituição Federal de 1988 e pela legislação infraconstitucional, estabelece direitos dos usuários e deveres do poder público, conformando um regime jurídico próprio que busca equilibrar interesse público e garantias individuais. Considerando esse contexto normativo e doutrinário sobre os serviços públicos, analise as afirmativas a seguir. I. No tocante ao conceito de serviço público, a doutrina aponta que ele é composto de três elementos ou critérios: o orgânico ou subjetivo; o formal; e o material. II. A concessão de serviço público consiste na delegação de sua prestação, feita pelo poder concedente, mediante licitação, na modalidade concorrência ou diálogo competitivo, à pessoa jurídica ou consórcio de empresas que demonstre capacidade para seu desempenho, por sua conta e risco e por prazo determinado. III. A permissão de serviço público transfere ao particular a titularidade do serviço, que passa a ser exercido em nome próprio. Está correto o que se afirma em',
    alternativas: [
      { id: 'A', texto: 'I, II e III.' },
      { id: 'B', texto: 'II, apenas.' },
      { id: 'C', texto: 'I e II, apenas.' },
      { id: 'D', texto: 'I e III, apenas.' },
      { id: 'E', texto: 'II e III, apenas.' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: 'I está correta: a doutrina aponta os elementos orgânico, formal e material. II está correta: a concessão é delegação mediante licitação (concorrência ou diálogo competitivo). III está errada: a permissão não transfere a titularidade; o particular executa em nome próprio, mas a titularidade permanece com o Estado.',
      incorretas: {
        A: 'III está errada.',
        B: 'I também está correta.',
        D: 'III está errada.',
        E: 'III está errada.'
      },
      conceitoCobrado: 'Serviço público — concessão e permissão',
      pegadinha: 'Achar que a permissão transfere titularidade.',
      comoApareceEmConcurso: 'Análise de múltiplas assertivas sobre serviço público.'
    },
    tags: ['serviço público', 'concessão', 'permissão']
  },

  /* ============================================================
     DA-21 — Licitações e Contratos Administrativos
  ============================================================ */
  {
    id: 'Q-PDF-DA-21-001',
    idOriginal: 'Q4552303',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-21',
    subtema: 'Sistema de Registro de Preços (SRP)',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4552303' },
    enunciado: 'Determinada prefeitura, ao utilizar o Sistema de Registro de Preços (SRP) para adquirir materiais de escritório. Assinale a alternativa correta:',
    alternativas: [
      { id: 'A', texto: 'fica obrigada a realizar a contratação.' },
      { id: 'B', texto: 'visa a contratações futuras.' },
      { id: 'C', texto: 'pode utilizar ata de registro de preços com validade superior a dois anos.' },
      { id: 'D', texto: 'impede a aquisição parcelada.' },
      { id: 'E', texto: 'busca utilizar quaisquer modalidades licitatórias.' }
    ],
    gabarito: 'B',
    gabaritoInferido: false,
    explicacao: {
      correta: 'O SRP visa a contratações futuras, sem obrigar a Administração a contratar.',
      incorretas: {
        A: 'A Administração não é obrigada a contratar.',
        C: 'A ata tem validade de 1 ano, prorrogável por 1 ano.',
        D: 'O SRP não impede aquisição parcelada.',
        E: 'O SRP não se aplica a qualquer modalidade.'
      },
      conceitoCobrado: 'Sistema de Registro de Preços',
      pegadinha: 'Achar que o SRP obriga a contratar ou que a validade é superior a 2 anos.',
      comoApareceEmConcurso: 'Cobrança de característica do SRP.'
    },
    tags: ['SRP', 'registro de preços']
  },
  {
    id: 'Q-PDF-DA-21-002',
    idOriginal: 'Q4539131',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-21',
    subtema: 'Adjudicação — ato de atribuição do objeto',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4539131' },
    enunciado: 'No âmbito do pregão eletrônico realizado em plataformas de compras públicas federais, após a fase de análise de habilitação do licitante vencedor e inexistindo recursos administrativos ou após o julgamento destes, ocorre o ato formal pelo qual o objeto da licitação é atribuído ao licitante vencedor, indicando que este está apto a celebrar contrato com a Administração Pública. Esse ato administrativo denomina-se:',
    alternativas: [
      { id: 'A', texto: 'homologação.' },
      { id: 'B', texto: 'adjudicação.' },
      { id: 'C', texto: 'ratificação.' },
      { id: 'D', texto: 'habilitação.' },
      { id: 'E', texto: 'classificação.' }
    ],
    gabarito: 'B',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A ADJUDICAÇÃO é o ato que atribui o objeto ao vencedor.',
      incorretas: {
        A: 'A homologação é posterior e confirma o procedimento.',
        C: 'Ratificação é ato de convalidação.',
        D: 'Habilitação é fase anterior.',
        E: 'Classificação é fase de julgamento.'
      },
      conceitoCobrado: 'Adjudicação',
      pegadinha: 'Confundir adjudicação com homologação.',
      comoApareceEmConcurso: 'Identificação do ato na sequência licitatória.'
    },
    tags: ['adjudicação', 'pregão']
  },
  {
    id: 'Q-PDF-DA-21-003',
    idOriginal: 'Q4433340',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-21',
    subtema: 'Lei 13.303/2016 — licitações em estatais',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4433340' },
    enunciado: 'Uma sociedade de economia mista estadual, responsável pela gestão de tecnologia da informação, precisa contratar serviços especializados de manutenção de seus equipamentos, adquirir novos computadores e contratar um consultor renomado para treinamento de seus funcionários. A empresa é regida pela Lei n.º 13.303/2016 (Lei de Responsabilidade das Estatais), que estabelece regras específicas para licitações e contratos no âmbito das empresas públicas e sociedades de economia mista. Considerando as disposições da Lei n.º 13.303/2016 sobre licitações e contratos, assinale a alternativa correta.',
    alternativas: [
      { id: 'A', texto: 'A empresa está integralmente dispensada de realizar licitação para todas as suas contratações, por se submeter ao regime jurídico de direito privado.' },
      { id: 'B', texto: 'As licitações realizadas pela sociedade de economia mista seguem rigorosamente as mesmas regras da Lei n.º 14.133/2021, aplicável à administração direta.' },
      { id: 'C', texto: 'A Lei n.º 13.303/2016 veda a elaboração de regulamentos internos de licitação pelas estatais, que devem seguir integralmente os procedimentos da administração direta.' },
      { id: 'D', texto: 'As sociedades de economia mista, por possuírem capital público e privado, estão totalmente excluídas da obrigatoriedade de licitar, podendo contratar livremente.' },
      { id: 'E', texto: 'A Lei n.º 13.303/2016 estabelece a obrigatoriedade de licitação para obras, serviços, compras e alienações, admitindo hipóteses legais de dispensa e inexigibilidade.' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A Lei 13.303/2016 obriga as estatais a licitar, com hipóteses de dispensa e inexigibilidade.',
      incorretas: {
        A: 'Não há dispensa geral.',
        B: 'A Lei 13.303 tem regras próprias, não segue integralmente a 14.133.',
        C: 'A lei permite regulamentos internos.',
        D: 'Não estão excluídas da obrigação de licitar.'
      },
      conceitoCobrado: 'Licitações em estatais (Lei 13.303/2016)',
      pegadinha: 'Achar que estatais não precisam licitar ou que seguem a 14.133 integralmente.',
      comoApareceEmConcurso: 'Cobrança do regime licitatório das estatais.'
    },
    tags: ['Lei 13.303/2016', 'estatais', 'licitação']
  },
  {
    id: 'Q-PDF-DA-21-004',
    idOriginal: 'Q4539130',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-21',
    subtema: 'Gestão x fiscalização de contratos',
    dificuldade: 3,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4539130' },
    enunciado: 'A Lei nº 14.133/2021 estabelece que a execução do contrato deve ser acompanhada e fiscalizada por representantes da Administração, designados formalmente, de modo a assegurar que os resultados pretendidos pelo contrato sejam alcançados. Considerando os conceitos de gestão e fiscalização de contratos administrativos, assinale a alternativa correta.',
    alternativas: [
      { id: 'A', texto: 'A fiscalização contratual possui natureza predominantemente estratégica e envolve decisões relacionadas à alteração de cláusulas contratuais, reequilíbrio econômico-financeiro e aplicação de sanções administrativas.' },
      { id: 'B', texto: 'A gestão contratual consiste na verificação direta da execução do objeto contratado, cabendo ao gestor registrar ocorrências técnicas, atestar a conformidade da prestação do serviço e elaborar relatórios de execução.' },
      { id: 'C', texto: 'A distinção entre gestor e fiscal de contrato decorre da necessidade de separar funções administrativas e técnicas na execução contratual.' },
      { id: 'D', texto: 'A atuação do fiscal do contrato tem o enfoque na observação da execução do objeto contratado, sendo incomum a comunicação de irregularidades à autoridade competente.' },
      { id: 'E', texto: 'A gestão contratual, nos termos da Lei nº 14.133/2021, concentra-se na fase de planejamento da contratação, não abrangendo o acompanhamento da execução contratual.' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A distinção entre gestor e fiscal decorre da separação entre funções administrativas (gestão) e técnicas (fiscalização).',
      incorretas: {
        A: 'A fiscalização é técnica, não estratégica.',
        B: 'A gestão é administrativa, não verificação direta.',
        D: 'O fiscal deve comunicar irregularidades.',
        E: 'A gestão abrange toda a execução.'
      },
      conceitoCobrado: 'Gestão e fiscalização de contratos',
      pegadinha: 'Inverter as funções de gestor e fiscal.',
      comoApareceEmConcurso: 'Cobrança da distinção entre os papéis.'
    },
    tags: ['gestão contratual', 'fiscalização']
  },
  {
    id: 'Q-PDF-DA-21-005',
    idOriginal: 'Q4802769',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'DA',
    moduloId: 'DA-21',
    subtema: 'Impedimento de licitar x declaração de inidoneidade',
    dificuldade: 3,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4802769' },
    enunciado: 'No contexto da Lei nº 14.133/2021, o impedimento de licitar e contratar produz efeitos perante todos os entes federativos, tal como a declaração de inidoneidade.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'ERRADO. O impedimento de licitar (art. 156, III) tem efeitos restritos ao ente que aplicou a sanção; a declaração de inidoneidade é que tem efeitos nacional.',
      incorretas: {},
      conceitoCobrado: 'Sanções administrativas — extensão dos efeitos',
      pegadinha: 'Igualar os efeitos do impedimento e da inidoneidade.',
      comoApareceEmConcurso: 'Cobrança da distinção entre sanções.'
    },
    tags: ['impedimento', 'inidoneidade']
  },
  {
    id: 'Q-PDF-DA-21-006',
    idOriginal: 'Q4654353',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-21',
    subtema: 'Prazo de contratos de serviços contínuos',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4654353' },
    enunciado: 'Os Contratos Administrativos assinados após a realização de uma licitação pública para contratação de serviços contínuos, pode apresentar prazo inicial máximo e o prazo total máximo de:',
    alternativas: [
      { id: 'A', texto: 'Um ano e três anos' },
      { id: 'B', texto: 'Dos anos e quatro anos.' },
      { id: 'C', texto: 'Três anos e cinco anos.' },
      { id: 'D', texto: 'Cinco anos e dez anos.' }
    ],
    gabarito: 'D',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A Lei 14.133/2021 permite prazo inicial de 5 anos, prorrogável por até 10 anos, para serviços contínuos.',
      incorretas: {
        A: 'Prazos menores que o legal.',
        B: 'Prazos menores que o legal.',
        C: 'Prazos menores que o legal.'
      },
      conceitoCobrado: 'Prazo de contratos de serviços contínuos',
      pegadinha: 'Confundir com prazos de outras hipóteses.',
      comoApareceEmConcurso: 'Cobrança de prazo legal.'
    },
    tags: ['prazo', 'serviços contínuos']
  },
  {
    id: 'Q-PDF-DA-21-007',
    idOriginal: 'Q4596269',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-21',
    subtema: 'Supremacia do interesse público em contratos',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4596269' },
    enunciado: 'Na administração pública, os contratos administrativos são instrumentos essenciais para a execução das atividades públicas, regulados por princípios específicos que os diferenciam dos contratos privados. Nessa perspectiva, a interpretação dos contratos administrativos deve considerar os princípios constitucionais e legais que regem a Administração Pública. Nesse sentido, é fundamental compreender como os princípios da legalidade, impessoalidade e moralidade influenciam a execução desses contratos. Com base nas informações supracitadas, pergunta-se: Qual o princípio abaixo listado é considerado o mais relevante na interpretação dos contratos administrativos?',
    alternativas: [
      { id: 'A', texto: 'Princípio da soberania da vontade do contratado sobre o executor.' },
      { id: 'B', texto: 'Princípio da subjetividade dos efeitos do contrato (e-social), sem prejuízo ao órgão interessado.' },
      { id: 'C', texto: 'Princípio da livre concorrência e escolha do que melhor convém ao ente público.' },
      { id: 'D', texto: 'Princípio da finalidade pública do contrato, visando a paz e a ordem jurídica que regula a administração pública do Brasil.' },
      { id: 'E', texto: 'Princípio da supremacia do interesse público.' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A supremacia do interesse público é o princípio basilar dos contratos administrativos, justificando as cláusulas exorbitantes.',
      incorretas: {
        A: 'A vontade do contratado não soberana.',
        B: 'A subjetividade não é princípio.',
        C: 'A livre concorrência é princípio licitatório, não interpretativo do contrato.',
        D: 'A finalidade pública é relevante, mas a supremacia é o princípio central.'
      },
      conceitoCobrado: 'Supremacia do interesse público',
      pegadinha: 'Confundir com outros princípios.',
      comoApareceEmConcurso: 'Cobrança do princípio informador dos contratos.'
    },
    tags: ['supremacia do interesse público', 'contratos']
  },
  {
    id: 'Q-PDF-DA-21-008',
    idOriginal: 'Q4494315',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-21',
    subtema: 'Contrato administrativo x convênio',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4494315' },
    enunciado: 'Após a homologação de licitação para fornecimento de serviços especializados, o órgão público celebra um instrumento jurídico com o vencedor, definindo obrigações recíprocas, prazos e valores. Em contraste, para parcerias entre dois entes públicos na realização de ações conjuntas de interesse coletivo, com transferência de recursos, utiliza-se instrumento diverso, não decorrente de licitação. Assinale a alternativa que identifica o instrumento utilizado no primeiro caso.',
    alternativas: [
      { id: 'A', texto: 'Convênio.' },
      { id: 'B', texto: 'Contrato administrativo.' },
      { id: 'C', texto: 'Termo de cooperação.' },
      { id: 'D', texto: 'Ordem de serviço isolada.' },
      { id: 'E', texto: 'Acordo de parceria.' }
    ],
    gabarito: 'B',
    gabaritoInferido: false,
    explicacao: {
      correta: 'O instrumento celebrado após licitação, com obrigações recíprocas, é o CONTRATO ADMINISTRATIVO. O convênio é para parcerias sem fim lucrativo.',
      incorretas: {
        A: 'Convênio é para parcerias, não para compras.',
        C: 'Termo de cooperação é similar ao convênio.',
        D: 'Ordem de serviço não é instrumento contratual.',
        E: 'Acordo de parceria é outro instituto.'
      },
      conceitoCobrado: 'Contrato administrativo x convênio',
      pegadinha: 'Confundir contrato com convênio.',
      comoApareceEmConcurso: 'Distinção entre instrumentos.'
    },
    tags: ['contrato administrativo', 'convênio']
  },
  {
    id: 'Q-PDF-DA-21-009',
    idOriginal: 'Q4592807',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-21',
    subtema: 'Adiantamento contratual — requisitos',
    dificuldade: 3,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4592807' },
    enunciado: 'Planejando a contratação direta de uma empresa para desenvolver um módulo de segurança cibernética para os municípios consorciados, um consórcio público intermunicipal, submetido à Lei nº 14.133/2021, deparou-se com uma exigência: a liberação antecipada de 30% do valor para custear licenças de softwares estrangeiros essenciais ao projeto. Sabendo-se que o fornecedor condicionou a prestação à satisfação dessa exigência, sob pena de não realização do serviço, o Agente de Contratação responsável deve orientar que:',
    alternativas: [
      { id: 'A', texto: 'Não seja liberada a quantia, haja vista que a antecipação de pagamentos é vedada de forma absoluta na nova lei de licitações.' },
      { id: 'B', texto: 'Seja realizado o adiantamento, pois despesas tecnológicas possuem natureza discricionária e dispensam aval formal do órgão.' },
      { id: 'C', texto: 'A liberação seja condicionada à prévia justificativa no processo e à previsão expressa no instrumento formal de contratação.' },
      { id: 'D', texto: 'Seja autorizada a antecipação financeira sob a premissa legal de exigência compulsória de garantia real no valor de 100%.' },
      { id: 'E', texto: 'Não seja realizada a transação pecuniária, porquanto adiantamentos contratuais limitam-se legalmente ao patamar de até 10%.' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: 'O adiantamento é permitido, mas exige justificativa prévia e previsão no contrato, conforme a Lei 14.133/2021.',
      incorretas: {
        A: 'Não é vedado de forma absoluta.',
        B: 'Não dispensa aval formal.',
        D: 'Não há exigência de garantia real de 100%.',
        E: 'Não há limite legal de 10%.'
      },
      conceitoCobrado: 'Adiantamento contratual',
      pegadinha: 'Achar que o adiantamento é vedado ou que tem limite de 10%.',
      comoApareceEmConcurso: 'Cenário aplicado sobre condições do adiantamento.'
    },
    tags: ['adiantamento', 'contrato']
  },
  {
    id: 'Q-PDF-DA-21-010',
    idOriginal: 'Q4460374',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-21',
    subtema: 'Inexigibilidade x dispensa — associação',
    dificuldade: 3,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4460374' },
    enunciado: 'Nos termos da Lei nº 14.133/2021 — Lei de Licitações e Contratos Administrativos, sobre inexigibilidade e dispensa de licitação, relacionar as colunas e assinalar a sequência correspondente. (1) Dispensável. (2) Inexigível. ( ) Aquisição ou locação de imóvel cujas características de instalações e de localização tornem necessária sua escolha. ( ) Para contratação que mantenha todas as condições definidas em edital de licitação realizada há menos de um ano, quando se verificar que naquela licitação não surgiram licitantes interessados. ( ) Objetos que devam ou possam ser contratados por meio de credenciamento.',
    alternativas: [
      { id: 'A', texto: '1 - 2 - 2.' },
      { id: 'B', texto: '1 - 2 - 1.' },
      { id: 'C', texto: '2 - 1 - 1.' },
      { id: 'D', texto: '2 - 1 - 2.' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: 'Aquisição de imóvel com características especiais é INEXIGÍVEL (2). Licitação deserta com condições mantidas é DISPENSÁVEL (1). Credenciamento é DISPENSÁVEL (1). Sequência: 2 - 1 - 1.',
      incorretas: {
        A: 'Inverte a primeira.',
        B: 'Inverte a primeira.',
        D: 'Inverte a terceira.'
      },
      conceitoCobrado: 'Dispensa x inexigibilidade',
      pegadinha: 'Confundir as hipóteses.',
      comoApareceEmConcurso: 'Associação de hipóteses legais.'
    },
    tags: ['dispensa', 'inexigibilidade', 'credenciamento']
  },
  {
    id: 'Q-PDF-DA-21-011',
    idOriginal: 'Q4311373',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-21',
    subtema: 'Contratos administrativos — cláusulas exorbitantes',
    dificuldade: 3,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4311373' },
    enunciado: 'Referindo-se aos contratos administrativos, analise as sentenças: I - Os contratos administrativos podem ser entendidos como acordos celebrados pela Administração Pública com o objetivo de atender ao interesse público por meio de fornecimentos de bens, serviços, locações e obras de um particular. II - Os contratos administrativos possuem cláusulas reguladas pelos preceitos de direito público, e a eles são aplicados, supletivamente, os princípios da teoria geral dos contratos e as disposições de direito privado. III - Os contratos administrativos são regidos pelo direito administrativo, ostentam o caráter público e possuem como marca fundamental a existência da Administração Pública em um dos polos da relação jurídica. IV - O regime jurídico dos contratos administrativos confere prerrogativas à Administração, denominado pela doutrina de cláusulas exorbitantes – consubstanciadas no princípio da supremacia do interesse privado sobre o público. V - A Administração Pública poderá alterar ou extinguir um contrato administrativo; aplicar sanções administrativas, ocupar provisoriamente bens móveis e imóveis e utilizar pessoal e serviços vinculados ao objeto do contrato. Após a análise, pode-se afirmar:',
    alternativas: [
      { id: 'A', texto: 'Somente as sentenças II, III, IV e V estão corretas.' },
      { id: 'B', texto: 'Somente as sentenças I, II, III e V estão corretas.' },
      { id: 'C', texto: 'Somente as sentenças III, IV e V estão corretas.' },
      { id: 'D', texto: 'As sentenças I, II, III, IV e V estão corretas.' },
      { id: 'E', texto: 'As sentenças I, II, III, IV e V estão incorretas.' }
    ],
    gabarito: 'B',
    gabaritoInferido: false,
    explicacao: {
      correta: 'I, II, III e V estão corretas. IV está errada porque fala em "supremacia do interesse privado sobre o público" — o correto é o inverso.',
      incorretas: {
        A: 'IV está errada.',
        C: 'I e II também estão corretas.',
        D: 'IV está errada.',
        E: 'A maioria está correta.'
      },
      conceitoCobrado: 'Contratos administrativos e cláusulas exorbitantes',
      pegadinha: 'Inverter a supremacia (privado sobre público).',
      comoApareceEmConcurso: 'Análise de múltiplas assertivas.'
    },
    tags: ['contratos', 'cláusulas exorbitantes']
  },
  {
    id: 'Q-PDF-DA-21-012',
    idOriginal: 'Q4539155',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-21',
    subtema: 'Fiscalização e controle de contratações',
    dificuldade: 3,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4539155' },
    enunciado: 'A adequada fiscalização das licitações e contratos administrativos constitui elemento essencial para a preservação do interesse público, na medida em que permite não apenas a verificação da legalidade dos atos praticados, mas também a avaliação de sua economicidade, eficiência e aderência às finalidades públicas. Diante do exposto, a respeito do controle das contratações públicas nos termos da Lei nº 14.133/2021, analise as afirmativas a seguir. I. As contratações públicas deverão submeter-se a práticas contínuas e permanentes de gestão de riscos e de controle preventivo, inclusive mediante adoção de recursos de tecnologia da informação, além de estar em subordinadas ao controle social. II. Na fiscalização de controle sobre as contratações públicas serão adotados procedimentos objetivos e imparciais e elaboração de relatórios tecnicamente fundamentados, baseados exclusivamente nas evidências obtidas e organizados de acordo com as normas de auditoria do respectivo órgão de controle, de modo a evitar que interesses pessoais e interpretações tendenciosas interfiram na apresentação e no tratamento dos fatos levantados. III. Ao ser intimado da ordem de suspensão cautelar do processo licitatório pelo Tribunal de Contas, o órgão ou a entidade deverá, no prazo de dez dias úteis, admitida a prorrogação, informar as medidas adotadas para cumprimento da decisão, prestar todas as informações cabíveis e proceder à apuração de responsabilidade, se for o caso. Está correto o que se afirma em',
    alternativas: [
      { id: 'A', texto: 'I, II e III.' },
      { id: 'B', texto: 'III, apenas.' },
      { id: 'C', texto: 'I e II, apenas.' },
      { id: 'D', texto: 'I e III, apenas.' },
      { id: 'E', texto: 'II e III, apenas.' }
    ],
    gabarito: 'A',
    gabaritoInferido: false,
    explicacao: {
      correta: 'Todas as afirmativas estão corretas: gestão de riscos e controle preventivo (I); procedimentos objetivos e imparciais (II); prazo de 10 dias úteis para informar medidas após suspensão cautelar (III).',
      incorretas: {
        B: 'I e II também estão corretas.',
        C: 'III também está correta.',
        D: 'II também está correta.',
        E: 'I também está correta.'
      },
      conceitoCobrado: 'Controle das contratações',
      pegadinha: 'Excluir alguma assertiva correta.',
      comoApareceEmConcurso: 'Análise de múltiplas assertivas sobre controle.'
    },
    tags: ['controle', 'fiscalização', 'gestão de riscos']
  },
  {
    id: 'Q-PDF-DA-21-013',
    idOriginal: 'Q4556215',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-21',
    subtema: 'Pré-qualificação',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4556215' },
    enunciado: 'É o procedimento seletivo prévio à licitação, convocado por meio de edital, destinado à análise das condições de habilitação, total ou parcial, dos interessados ou do objeto. Esse conceito refere-se',
    alternativas: [
      { id: 'A', texto: 'à manifestação de interesse.' },
      { id: 'B', texto: 'ao credenciamento.' },
      { id: 'C', texto: 'à pré-qualificação.' },
      { id: 'D', texto: 'ao diálogo competitivo.' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A PRÉ-QUALIFICAÇÃO é o procedimento seletivo prévio, por edital, para analisar habilitação ou objeto.',
      incorretas: {
        A: 'Manifestação de interesse é outro procedimento.',
        B: 'Credenciamento é para contratações paralelas e contínuas.',
        D: 'Diálogo competitivo é modalidade de licitação.'
      },
      conceitoCobrado: 'Pré-qualificação',
      pegadinha: 'Confundir com credenciamento ou manifestação de interesse.',
      comoApareceEmConcurso: 'Cobrança de definição.'
    },
    tags: ['pré-qualificação', 'procedimentos auxiliares']
  },
  {
    id: 'Q-PDF-DA-21-014',
    idOriginal: 'Q4539055',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-21',
    subtema: 'Princípios na licitação — segregação de funções, motivação e celeridade',
    dificuldade: 3,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4539055' },
    enunciado: 'José iniciou recentemente suas atividades como assistente administrativo em uma autarquia e, inicialmente, foi designado para atuar em diferentes etapas do procedimento licitatório, incluindo a elaboração do termo de referência, a condução da fase interna do processo, a análise das propostas e a emissão de parecer técnico. Posteriormente, no desempenho dessas atribuições, deixou de registrar formalmente no processo administrativo as razões concretas e os fundamentos jurídicos que justificavam a contratação. Por fim, diante do acúmulo de tarefas, passou a conduzir suas atividades em ritmo próprio, ainda que isso implicasse atrasos no andamento processual. Considerando a situação hipotética apresentada, assinale a alternativa que indica, correta e respectivamente, os princípios infringidos.',
    alternativas: [
      { id: 'A', texto: 'Publicidade; legalidade; e eficiência.' },
      { id: 'B', texto: 'Segregação de funções; motivação; e celeridade.' },
      { id: 'C', texto: 'Impessoalidade; equilíbrio institucional; e publicidade.' },
      { id: 'D', texto: 'Eficiência; transparência operacional; e vinculação ao edital.' },
      { id: 'E', texto: 'Vinculação ao edital; boa gestão administrativa; e moralidade.' }
    ],
    gabarito: 'B',
    gabaritoInferido: false,
    explicacao: {
      correta: 'José atuou em várias etapas (segregação de funções), não motivou (motivação) e causou atrasos (celeridade).',
      incorretas: {
        A: 'Não são os princípios mais diretamente violados.',
        C: 'Não corresponde.',
        D: 'Não corresponde.',
        E: 'Não corresponde.'
      },
      conceitoCobrado: 'Princípios aplicados à licitação',
      pegadinha: 'Confundir os princípios violados.',
      comoApareceEmConcurso: 'Cenário aplicado com múltiplas condutas.'
    },
    tags: ['segregação de funções', 'motivação', 'celeridade']
  },
  /* ============================================================
     LOTE PDF — QConcursos / Gran Cursos
     DA-23 (LAI) e DA-24
     ============================================================ */

  /* ============================================================
     DA-24 — Improbidade Administrativa
  ============================================================ */
  {
    id: 'Q-PDF-DA-24-001',
    idOriginal: 'Q4494252',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-24',
    subtema: 'Improbidade — elemento subjetivo (dolo)',
    dificuldade: 3,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4494252' },
    enunciado: 'A Lei n.º 14.230/2021 promoveu alteração relevante na Lei de Improbidade Administrativa no que se refere ao elemento subjetivo exigido para a configuração dos atos previstos nos arts. 9.º, 10 e 11 da Lei n.º 8.429/1992. Acerca do elemento subjetivo na configuração do ato de improbidade administrativa, conforme a redação vigente da lei, assinale a alternativa correta.',
    alternativas: [
      { id: 'A', texto: 'Os atos de improbidade que causam lesão ao erário (art. 10) ainda admitem a modalidade culposa, pois a Lei n.º 14.230/2021 manteve essa ressalva apenas para os casos em que o dano ao patrimônio público seja de pequena monta.' },
      { id: 'B', texto: 'Configura-se o dolo exigido pela Lei n.º 8.429/1992 pela simples voluntariedade do agente na prática do ato, independentemente do resultado ilícito que tenha pretendido alcançar.' },
      { id: 'C', texto: 'A Lei n.º 14.230/2021 manteve a responsabilidade objetiva da pessoa jurídica de direito privado que se beneficia de ato de improbidade, exigindo dolo apenas para o agente público autor do ato.' },
      { id: 'D', texto: 'O dolo exigido para a configuração de improbidade administrativa é o dolo específico de causar dano ao erário ou de obter vantagem indevida, não sendo suficiente a mera vontade de praticar a conduta tipificada.' },
      { id: 'E', texto: 'Para fins de configuração do ato de improbidade administrativa, considera-se dolo a vontade livre e consciente de alcançar o resultado ilícito tipificado nos arts. 9º, 10 e 11 da Lei n.º 8.429/1992, não bastando a voluntariedade do agente na prática do ato.' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A Lei 14.230/2021 exige dolo específico: a vontade livre e consciente de alcançar o resultado ilícito tipificado, não bastando a mera voluntariedade.',
      incorretas: {
        A: 'A modalidade culposa foi eliminada.',
        B: 'A simples voluntariedade não configura dolo.',
        C: 'A responsabilidade objetiva foi afastada.',
        D: 'O dolo não se limita à intenção de causar dano ou obter vantagem; abrange a vontade de realizar a conduta ilícita.'
      },
      conceitoCobrado: 'Dolo na improbidade',
      pegadinha: 'Confundir dolo específico com voluntariedade ou com dolo genérico.',
      comoApareceEmConcurso: 'Cobrança da alteração legislativa de 2021.'
    },
    tags: ['improbidade', 'dolo', 'Lei 14.230/2021']
  },
  {
    id: 'Q-PDF-DA-24-002',
    idOriginal: 'Q4539131',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'DA',
    moduloId: 'DA-24',
    subtema: 'Improbidade — natureza das sanções',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4539131' },
    enunciado: 'As sanções previstas na Lei nº 8.429/1992 para os atos de improbidade administrativa possuem natureza cível e política, não se confundindo com as sanções de natureza penal, embora possam coexistir com responsabilizações nas esferas criminal e disciplinar.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: 'CERTO. As sanções da Lei de Improbidade são de natureza cível e política (perda de função, suspensão de direitos políticos, multa), distintas das penais, mas podem ser cumuladas com estas.',
      incorretas: {},
      conceitoCobrado: 'Natureza das sanções por improbidade',
      pegadinha: 'Achar que as sanções são penais ou que excluem as demais esferas.',
      comoApareceEmConcurso: 'Cobrança da independência das instâncias.'
    },
    tags: ['improbidade', 'sanções']
  },
  {
    id: 'Q-PDF-DA-24-003',
    idOriginal: 'Q4366701',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-24',
    subtema: 'Improbidade — frustração de concurso público',
    dificuldade: 3,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4366701' },
    enunciado: 'Considere a situação hipotética a seguir: Hércules, prefeito do município de Nova Andrômeda, monta esquema destinado a frustrar o caráter concorrencial de concurso público, com vistas a favorecer pessoas de sua família. Sobre a situação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Hércules praticou ato de improbidade que causa lesão ao erário, estando sujeito a perda da função pública, suspensão dos direitos políticos até 12 anos, pagamento de multa civil equivalente ao valor do dano e proibição de contratar com o poder público ou de receber benefícios ou incentivos fiscais ou creditícios, direta ou indiretamente, ainda que por intermédio de pessoa jurídica da qual seja sócio majoritário, pelo prazo não superior a 12 anos.' },
      { id: 'B', texto: 'Hércules praticou ato de improbidade que atenta contra os princípios da Administração Pública, estando sujeito ao pagamento de multa civil de até 24 vezes o valor da sua remuneração e proibição de contratar com o poder público ou de receber benefícios ou incentivos fiscais ou creditícios, direta ou indiretamente, ainda que por intermédio de pessoa jurídica da qual seja sócio majoritário, pelo prazo não superior a 4 anos.' },
      { id: 'C', texto: 'Hércules praticou ato de improbidade que importa em enriquecimento ilícito, estando sujeito a perda da função pública, suspensão dos direitos políticos até 12 anos, pagamento de multa civil equivalente ao valor do dano e proibição de contratar com o poder público ou de receber benefícios ou incentivos fiscais ou creditícios, direta ou indiretamente, ainda que por intermédio de pessoa jurídica da qual seja sócio majoritário, pelo prazo não superior a 12 anos.' },
      { id: 'D', texto: 'Hércules praticou ato de improbidade que atenta contra os princípios da Administração Pública, estando sujeito a perda da função pública, suspensão dos direitos políticos até 12 anos, pagamento de multa civil equivalente ao valor do dano e proibição de contratar com o poder público ou de receber benefícios ou incentivos fiscais ou creditícios, direta ou indiretamente, ainda que por intermédio de pessoa jurídica da qual seja sócio majoritário, pelo prazo não superior a 12 anos.' }
    ],
    gabarito: 'B',
    gabaritoInferido: true,
    explicacao: {
      correta: 'A frustração de concurso público é ato de improbidade que atenta contra os princípios da Administração (art. 11). As sanções do art. 12, III, são multa de até 24 vezes a remuneração e proibição de contratar por até 4 anos.',
      incorretas: {
        A: 'Não há lesão ao erário, mas violação de princípios.',
        C: 'Não há enriquecimento ilícito.',
        D: 'As sanções do art. 11 não incluem perda da função ou suspensão de direitos políticos.'
      },
      conceitoCobrado: 'Improbidade — frustração de concurso',
      pegadinha: 'Confundir as modalidades e suas sanções.',
      comoApareceEmConcurso: 'Cenário aplicado com identificação da modalidade e sanção.'
    },
    tags: ['improbidade', 'concurso público', 'sanções']
  },
  {
    id: 'Q-PDF-DA-24-004',
    idOriginal: 'Q4647785',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-24',
    subtema: 'Improbidade — perda patrimonial e dolo',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4647785' },
    enunciado: 'Considerando as disposições da Lei de Improbidade Administrativa, Lei Federal nº 8.429/1992, assinale a alternativa correta.',
    alternativas: [
      { id: 'A', texto: 'Consideram-se atos de improbidade administrativa as condutas culposas e dolosas tipificadas na Lei.' },
      { id: 'B', texto: 'A mera perda patrimonial decorrente da atividade econômica não acarretará improbidade administrativa em qualquer hipótese.' },
      { id: 'C', texto: 'O exercício de agente público fica condicionado à apresentação de declaração de imposto de renda e proventos de qualquer natureza.' },
      { id: 'D', texto: 'Configura improbidade a ação ou omissão decorrente de divergência interpretativa da Lei, com base em jurisprudência não pacificada.' }
    ],
    gabarito: 'B',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A mera perda patrimonial em atividade econômica, sem dolo, não configura improbidade (art. 10, §2º).',
      incorretas: {
        A: 'A modalidade culposa foi extinta.',
        C: 'A declaração de bens é dever, mas não condiciona o exercício.',
        D: 'Divergência interpretativa com base em jurisprudência não pacificada não configura improbidade (art. 21, §2º).'
      },
      conceitoCobrado: 'Improbidade — exclusão de conduta culposa e divergência interpretativa',
      pegadinha: 'Achar que a culpa ou a divergência interpretativa configuram improbidade.',
      comoApareceEmConcurso: 'Cobrança das hipóteses de não configuração.'
    },
    tags: ['improbidade', 'dolo', 'divergência interpretativa']
  },
  {
    id: 'Q-PDF-DA-24-005',
    idOriginal: 'Q4364002',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'DA',
    moduloId: 'DA-24',
    subtema: 'Improbidade — prescrição do ressarcimento',
    dificuldade: 3,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4364002' },
    enunciado: 'Acerca das regras prescricionais previstas na Lei nº 8.429/1992, Lei de Improbidade Administrativa, e na Lei nº 8.112/1990, que dispõe a respeito do Regime Jurídico dos Servidores Públicos Civis da União, das autarquias e das fundações públicas federais, julgue os itens a seguir. Nas ações de ressarcimento ao erário fundadas na prática de ato doloso, devidamente tipificado pela lei de improbidade administrativa, não há que se falar em prescrição.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: 'CERTO. O STF (Tema 897) firmou que as ações de ressarcimento por ato doloso de improbidade são imprescritíveis.',
      incorretas: {},
      conceitoCobrado: 'Prescrição do ressarcimento',
      pegadinha: 'Achar que há prazo prescricional para ressarcimento doloso.',
      comoApareceEmConcurso: 'Cobrança do entendimento do STF.'
    },
    tags: ['improbidade', 'prescrição', 'ressarcimento']
  },
  {
    id: 'Q-PDF-DA-24-006',
    idOriginal: 'Q4539440',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-24',
    subtema: 'Improbidade — responsabilização de terceiros',
    dificuldade: 3,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4539440' },
    enunciado: 'Com relação à disposição da Lei de Improbidade Administrativa, assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'Sujeitam-se às sanções da lei de improbidade administrativa apenas os atos de improbidade praticados contra o patrimônio de entidades públicas.' },
      { id: 'B', texto: 'Considera-se ato de improbidade administrativa a conduta que causa lesão ao erário, dolosa ou culposa, omissiva ou comissiva, que enseja perda patrimonial, desvio, apropriação, malbaratamento ou dilapidação dos bens ou haveres das entidades integrantes da organização do Estado.' },
      { id: 'C', texto: 'As sanções da Lei de Improbidade Administrativa alcançam todos aqueles que, mesmo não sendo agentes públicos, induzam ou concorram para a prática do ato de improbidade.' },
      { id: 'D', texto: 'Constitui ato de improbidade administrativa deixar de prestar contas quando esteja obrigado a fazê-lo, ainda que não disponha de condições para isso e não tenha a intenção de ocultar irregularidades.' },
      { id: 'E', texto: 'Independentemente de integrar a administração indireta, estão sujeitos às sanções desta Lei os atos de improbidade praticados contra o patrimônio de entidade privada para cuja criação ou custeio o erário haja concorrido ou concorra no seu patrimônio ou receita atual, limitado o ressarcimento de prejuízos, nesse caso, à repercussão do ilícito sobre a contribuição dos cofres públicos.' }
    ],
    gabarito: 'C',
    gabaritoInferido: true,
    explicacao: {
      correta: 'O art. 3º da Lei 8.429/1992 prevê que as sanções alcançam todos os que induzam ou concorram para o ato de improbidade, mesmo não sendo agentes públicos.',
      incorretas: {
        A: 'A lei também protege entidades privadas que recebam recursos públicos.',
        B: 'A modalidade culposa foi extinta.',
        D: 'A falta de condições ou a ausência de intenção de ocultar não descaracterizam o ato, mas a lei exige dolo.',
        E: 'A alternativa também está correta em tese, mas a C é a mais abrangente e direta. (Gabarito inferido — conferir.)'
      },
      conceitoCobrado: 'Responsabilização de terceiros',
      pegadinha: 'Achar que apenas agentes públicos respondem.',
      comoApareceEmConcurso: 'Cobrança da extensão subjetiva da lei.'
    },
    tags: ['improbidade', 'terceiros']
  },
  {
    id: 'Q-PDF-DA-24-007',
    idOriginal: 'Q4363989',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'DA',
    moduloId: 'DA-24',
    subtema: 'Improbidade — amizade e conflito de interesses',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4363989' },
    enunciado: 'Um empregado público de um conselho de classe, lotado no setor de pessoal, decidiu que tentaria influenciar os seus superiores a realizar uma capacitação para os servidores que lidam com licitações do órgão, pois acreditava que poderia melhorar a eficiência dos processos de compras do órgão. Ocorre que, durante a fase de contratação da instituição que faria os cursos para o conselho, o empregado público descobriu que o gerente comercial da instituição era um grande amigo seu. Considerando essa situação hipotética e as normas de regência a respeito do assunto, julgue os itens a seguir. A contratação deve ser interrompida pelo conselho, pois há indícios de improbidade administrativa.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'ERRADO. A amizade entre o empregado e o gerente comercial não configura, por si só, indício de improbidade administrativa. Pode gerar suspeição ou impedimento, mas não ato ímprobo.',
      incorretas: {},
      conceitoCobrado: 'Improbidade x conflito de interesses',
      pegadinha: 'Confundir amizade com improbidade.',
      comoApareceEmConcurso: 'Cenário aplicado sobre a caracterização de improbidade.'
    },
    tags: ['improbidade', 'amizade', 'suspeição']
  },

  /* ============================================================
     DA-23 — Controle da Administração Pública (LAI)
  ============================================================ */
  {
    id: 'Q-PDF-DA-23-001',
    idOriginal: 'Q4562733',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'DA',
    moduloId: 'DA-23',
    subtema: 'LAI — sigilos legais específicos',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4562733' },
    enunciado: 'À luz da Lei nº 12.527/2011, que trata do acesso à informação, bem como do decreto que a regulamenta, julgue os itens a seguir. O acesso à informação disciplinado na Lei de Acesso à Informação não se aplica às hipóteses de sigilo previstas na legislação, como fiscal, bancário, de operações e serviços no mercado de capitais, comercial, profissional, industrial e segredo de justiça.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: 'CERTO. A LAI não revoga sigilos específicos previstos em outras leis (art. 22 da Lei 12.527/2011).',
      incorretas: {},
      conceitoCobrado: 'LAI e sigilos legais',
      pegadinha: 'Achar que a LAI se sobrepõe a todos os sigilos.',
      comoApareceEmConcurso: 'Cobrança da relação entre a LAI e outras leis de sigilo.'
    },
    tags: ['LAI', 'sigilo']
  },
  {
    id: 'Q-PDF-DA-23-002',
    idOriginal: 'Q4495780',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-23',
    subtema: 'LAI — transparência ativa',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4495780' },
    enunciado: 'No âmbito da Administração Pública municipal, foram adotadas medidas para revisar as práticas de transparência ativa e passiva, com o objetivo de ampliar o acesso da população às informações públicas. Foram implementadas medidas como disponibilização de dados em portal eletrônico, incentivo à participação social e capacitação de servidores para atendimento de solicitações de informação. À luz da Lei nº 12.527/2011, que estabelece diretrizes para assegurar o direito fundamental de acesso à informação, assinale a alternativa INCORRETA:',
    alternativas: [
      { id: 'A', texto: 'A divulgação de informações de interesse público depende, em regra, de solicitação prévia do cidadão, não sendo exigida atuação proativa da Administração.' },
      { id: 'B', texto: 'O incentivo à cultura de transparência e ao controle social integra as diretrizes da Administração para assegurar o acesso à informação.' },
      { id: 'C', texto: 'A publicidade deve ser compreendida como regra geral na Administração Pública, sendo o sigilo admitido apenas em situações excepcionais devidamente justificadas.' },
      { id: 'D', texto: 'A utilização de tecnologias da informação constitui instrumento relevante para viabilizar o acesso amplo e eficiente às informações públicas.' }
    ],
    gabarito: 'A',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A alternativa A está INCORRETA: a LAI prevê a transparência ativa, ou seja, a divulgação proativa de informações de interesse público, independentemente de solicitação.',
      incorretas: {
        B: 'Correta.',
        C: 'Correta.',
        D: 'Correta.'
      },
      conceitoCobrado: 'Transparência ativa',
      pegadinha: 'Achar que toda informação depende de pedido.',
      comoApareceEmConcurso: 'Cobrança da diferença entre transparência ativa e passiva.'
    },
    tags: ['LAI', 'transparência ativa']
  },
  {
    id: 'Q-PDF-DA-23-003',
    idOriginal: 'Q4369795',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'DA',
    moduloId: 'DA-23',
    subtema: 'LAI — LGPD e remuneração de agentes públicos',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4369795' },
    enunciado: 'Um jornal local fez uma matéria a respeito da remuneração de diversos agentes públicos e o desrespeito ao teto constitucional no município. Um biblioteconomista ficou indignado e buscou, no site de seu Conselho de classe, as informações detalhadas acerca dos pagamentos realizados pela autarquia. Não encontrando as informações como desejava, fez um requerimento administrativo com base na Lei de Acesso à Informação. Com base nessa situação hipotética e na legislação de regência, julgue os itens a seguir. A resposta pode negar acesso a informações com base na LGPD, mas somente quanto a dados pessoais, não sendo esse o caso para o tema de remuneração de agentes públicos.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: 'CERTO. A LGPD pode fundamentar a negativa de acesso a dados pessoais, mas a remuneração de agentes públicos é informação de interesse público e não pode ser negada com base na LGPD.',
      incorretas: {},
      conceitoCobrado: 'LAI x LGPD',
      pegadinha: 'Achar que a LGPD protege a remuneração de agentes públicos.',
      comoApareceEmConcurso: 'Cobrança da prevalência do interesse público sobre a proteção de dados.'
    },
    tags: ['LAI', 'LGPD', 'remuneração']
  },
  {
    id: 'Q-PDF-DA-23-004',
    idOriginal: 'Q4369791',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'DA',
    moduloId: 'DA-23',
    subtema: 'LAI — motivos do pedido de acesso',
    dificuldade: 1,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4369791' },
    enunciado: 'Um jornal local fez uma matéria a respeito da remuneração de diversos agentes públicos e o desrespeito ao teto constitucional no município. Um biblioteconomista ficou indignado e buscou, no site de seu Conselho de classe, as informações detalhadas acerca dos pagamentos realizados pela autarquia. Não encontrando as informações como desejava, fez um requerimento administrativo com base na Lei de Acesso à Informação. Com base nessa situação hipotética e na legislação de regência, julgue os itens a seguir. No processamento do pedido de acesso, o Conselho não pode realizar exigências relativas aos motivos determinantes da solicitação de informações.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: 'CERTO. A LAI veda a exigência de motivação do pedido (art. 10, §3º).',
      incorretas: {},
      conceitoCobrado: 'Desburocratização do acesso',
      pegadinha: 'Achar que o órgão pode exigir justificativa.',
      comoApareceEmConcurso: 'Cobrança de vedação expressa.'
    },
    tags: ['LAI', 'pedido', 'motivação']
  },
  {
    id: 'Q-PDF-DA-23-005',
    idOriginal: 'Q4460369',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-23',
    subtema: 'LAI — entidades privadas sem fins lucrativos',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4460369' },
    enunciado: 'Nos termos da Lei nº 12.527/2011, a obrigação de prestar transparência sobre os recursos públicos recebidos aplica-se às entidades privadas sem fins lucrativos que os recebam. Sobre o alcance dessa obrigação, segundo a Lei de Acesso à Informação, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A publicidade refere-se à parcela dos recursos públicos recebidos e à sua destinação, sem prejuízo das prestações de contas a que a entidade esteja legalmente obrigada.' },
      { id: 'B', texto: 'A publicidade se estende à totalidade das atividades desenvolvidas pela entidade, independentemente de sua origem de financiamento.' },
      { id: 'C', texto: 'A obrigação de transparência alcança apenas as entidades que tenham recebido recursos diretamente do orçamento, excluindo aquelas beneficiadas por convênios ou contratos de gestão.' },
      { id: 'D', texto: 'A lei se aplica integralmente às entidades privadas sem fins lucrativos, sujeitando-as aos mesmos procedimentos dos órgãos da administração pública direta.' }
    ],
    gabarito: 'A',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A transparência alcança a parcela dos recursos públicos recebidos e sua destinação, sem prejuízo das prestações de contas legais.',
      incorretas: {
        B: 'Não se estende à totalidade das atividades.',
        C: 'Alcança também convênios e contratos de gestão.',
        D: 'Não se aplica integralmente, mas apenas quanto aos recursos públicos recebidos.'
      },
      conceitoCobrado: 'Transparência em entidades privadas',
      pegadinha: 'Achar que a LAI se aplica integralmente ou apenas a recursos orçamentários.',
      comoApareceEmConcurso: 'Cobrança do alcance da LAI.'
    },
    tags: ['LAI', 'entidades privadas', 'transparência']
  },
  {
    id: 'Q-PDF-DA-23-006',
    idOriginal: 'Q4562727',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'DA',
    moduloId: 'DA-23',
    subtema: 'LAI — aplicação a entidades privadas',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4562727' },
    enunciado: 'À luz da Lei nº 12.527/2011, que trata do acesso à informação, bem como do decreto que a regulamenta, julgue os itens a seguir. As entidades privadas sem fins lucrativos, mesmo que não recebam recursos públicos para a realização de ações de interesse público, subordinam-se à Lei de Acesso à Informação, limitando o acesso à informação a seus doadores.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'ERRADO. A LAI só se aplica a entidades privadas sem fins lucrativos que recebam recursos públicos (art. 2º, parágrafo único).',
      incorretas: {},
      conceitoCobrado: 'Âmbito de aplicação da LAI',
      pegadinha: 'Achar que toda entidade sem fins lucrativos está sujeita à LAI.',
      comoApareceEmConcurso: 'Cobrança do requisito de recebimento de recursos públicos.'
    },
    tags: ['LAI', 'entidades privadas']
  },
  {
    id: 'Q-PDF-DA-23-007',
    idOriginal: 'Q4562730',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'DA',
    moduloId: 'DA-23',
    subtema: 'LAI — finalidade',
    dificuldade: 1,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4562730' },
    enunciado: 'À luz da Lei nº 12.527/2011, que trata do acesso à informação, bem como do decreto que a regulamenta, julgue os itens a seguir. Os procedimentos previstos na Lei de Acesso à Informação destinam-se a assegurar a proteção das informações consideradas imprescindíveis à segurança da sociedade ou do Estado.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'ERRADO. A LAI tem como objetivo assegurar o direito fundamental de acesso à informação, e não apenas proteger informações sigilosas.',
      incorretas: {},
      conceitoCobrado: 'Finalidade da LAI',
      pegadinha: 'Reduzir a LAI à proteção de sigilos.',
      comoApareceEmConcurso: 'Cobrança da finalidade precípua da lei.'
    },
    tags: ['LAI', 'finalidade']
  },
  {
    id: 'Q-PDF-DA-23-008',
    idOriginal: 'Q4604711',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-23',
    subtema: 'LAI — alternativa incorreta',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4604711' },
    enunciado: 'Conforme a Lei nº 12.527, de 18 de novembro de 2011, assinale a alternativa incorreta.',
    alternativas: [
      { id: 'A', texto: 'Qualquer interessado poderá apresentar pedido de acesso a informações aos órgãos e entidades referidos no art. 1º desta Lei, por qualquer meio legítimo, devendo o pedido conter a identificação do requerente e a especificação da informação requerida.' },
      { id: 'B', texto: 'O serviço de busca e de fornecimento de informação é gratuito.' },
      { id: 'C', texto: 'No caso de indeferimento de acesso às informações ou às razões da negativa do acesso, poderá o interessado interpor recurso contra a decisão no prazo de 10 (dez) dias a contar da sua ciência.' },
      { id: 'D', texto: 'É direito do requerente obter o inteiro teor de decisão de negativa de acesso, por certidão ou cópia.' },
      { id: 'E', texto: 'Será negada a consulta quando se tratar de acesso à informação contida em documento cuja manipulação possa prejudicar sua integridade.' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A alternativa E está INCORRETA: a LAI garante o acesso, podendo ser fornecido cópia ou meio alternativo, não se negando a consulta sumariamente.',
      incorretas: {
        A: 'Correta.',
        B: 'Correta.',
        C: 'Correta.',
        D: 'Correta.'
      },
      conceitoCobrado: 'LAI — regras de acesso',
      pegadinha: 'Achar que a integridade do documento justifica a negativa total.',
      comoApareceEmConcurso: 'Cobrança de dispositivo específico.'
    },
    tags: ['LAI', 'consulta', 'integridade']
  },
  {
    id: 'Q-PDF-DA-23-009',
    idOriginal: 'Q4539091',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-23',
    subtema: 'LAI — conceito de informação',
    dificuldade: 1,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4539091' },
    enunciado: 'De acordo com a Lei n.º 12.527/2011 – Lei de Acesso à Informação, considera-se informação:',
    alternativas: [
      { id: 'A', texto: 'exclusivamente informações sigilosas ou classificadas que necessitam de tratamento especial para garantir a segurança do Estado.' },
      { id: 'B', texto: 'documentos físicos e digitais, excluindo-se dados brutos ou não processados que ainda não possuam utilidade administrativa.' },
      { id: 'C', texto: 'apenas dados processados que resultem em relatórios administrativos destinados à gestão interna da Administração Pública.' },
      { id: 'D', texto: 'apenas dados processados que já tenham sido validados por autoridade competente para a produção de conhecimento oficial.' },
      { id: 'E', texto: 'dados, processados ou não, que podem ser utilizados para produção e transmissão de conhecimento, contidos em qualquer meio, suporte ou formato.' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'Informação, para a LAI, são dados, processados ou não, que podem ser utilizados para produção e transmissão de conhecimento, em qualquer suporte (art. 4º, I).',
      incorretas: {
        A: 'Não se restringe a informações sigilosas.',
        B: 'Inclui dados brutos.',
        C: 'Não se restringe a relatórios.',
        D: 'Não exige validação prévia.'
      },
      conceitoCobrado: 'Conceito de informação',
      pegadinha: 'Restringir o conceito a dados processados ou a documentos formais.',
      comoApareceEmConcurso: 'Cobrança da definição legal.'
    },
    tags: ['LAI', 'conceito', 'informação']
  },
  /* ============================================================
     LOTE PDF — QConcursos / Gran Cursos
     DA-25 + sobras (ADM-03, ADM-05, ADM-06, ADM-07, ADM-08,
     ADM-11, ADM-12, DA-21)
     ============================================================ */

  /* ============================================================
     DA-25 — Processo Administrativo
  ============================================================ */
  {
    id: 'Q-PDF-DA-25-001',
    idOriginal: 'Q4272306',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'DA',
    moduloId: 'DA-25',
    subtema: 'Lei 9.784/99 — direito à assistência por advogado',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4272306' },
    enunciado: 'À luz da Lei nº 9.784/1999, julgue os itens a seguir. Assistir-se obrigatoriamente, por advogado, independentemente de determinação legal, é um direito do administrado.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'ERRADO. A assistência por advogado não é obrigatória nem automática; depende de previsão legal específica ou de decisão do administrado.',
      incorretas: {},
      conceitoCobrado: 'Direito à assistência por advogado',
      pegadinha: 'Achar que a assistência é sempre obrigatória.',
      comoApareceEmConcurso: 'Cobrança do art. 3º da Lei 9.784/99.'
    },
    tags: ['advogado', 'Lei 9.784']
  },
  {
    id: 'Q-PDF-DA-25-002',
    idOriginal: 'Q4443019',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-25',
    subtema: 'Lei 9.784/99 — princípios do processo administrativo',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4443019' },
    enunciado: 'O processo administrativo constitui instrumento destinado a assegurar a atuação regular da Administração Pública e a proteção dos direitos dos administrados, estabelecendo princípios e critérios que devem orientar a condução dos procedimentos administrativos. Considerando exclusivamente o disposto na Lei nº 9.784/1999, que regula o processo administrativo no âmbito da Administração Pública Federal, analise as afirmativas a seguir. I. A Administração Pública deve obedecer aos princípios da legalidade, finalidade e motivação. II. O processo administrativo visa à proteção dos direitos dos administrados e ao melhor cumprimento dos fins da Administração. III. A Administração deve atuar segundo padrões de moralidade, razoabilidade e eficiência. IV. A Administração Pública pode deixar de motivar atos administrativos quando houver interesse público relevante. Assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'Apenas III e IV.' },
      { id: 'B', texto: 'I, II, III e IV.' },
      { id: 'C', texto: 'Apenas II e III.' },
      { id: 'D', texto: 'Apenas I e II.' },
      { id: 'E', texto: 'Apenas I, II e III.' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'I, II e III estão corretas. IV está INCORRETA: a motivação é regra, e o interesse público relevante não dispensa a motivação.',
      incorretas: {
        A: 'I e II também estão corretas.',
        B: 'IV está incorreta.',
        C: 'I também está correta.',
        D: 'III também está correta.'
      },
      conceitoCobrado: 'Princípios do processo administrativo',
      pegadinha: 'Achar que o interesse público dispensa motivação.',
      comoApareceEmConcurso: 'Análise de múltiplas assertivas.'
    },
    tags: ['Lei 9.784', 'princípios', 'motivação']
  },

  /* ============================================================
     ADM-03 — Planejamento (sobra)
  ============================================================ */
  {
    id: 'Q-PDF-ADM-03-002',
    idOriginal: 'Q4458625',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-03',
    subtema: 'Gestão por resultados — condições de implementação',
    dificuldade: 3,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4458625' },
    enunciado: 'Determinada prefeitura decidiu adotar um modelo de gestão por resultados com o objetivo de melhorar a eficiência das políticas públicas municipais. Para isso, a administração iniciou um processo de definição de objetivos estratégicos alinhados às demandas da população, estabeleceu indicadores de desempenho para acompanhar os resultados das ações governamentais e implantou sistemas tecnológicos destinados ao monitoramento contínuo dos programas públicos. Entretanto, durante a implementação do modelo, foram identificadas algumas dificuldades institucionais, como resistência de parte dos servidores às novas práticas de gestão, limitações técnicas na definição de indicadores adequados para medir resultados e restrições orçamentárias que dificultavam investimentos em capacitação e tecnologia. Considerando o contexto apresentado, bem como os princípios e as etapas necessárias para a implementação da gestão por resultados na administração pública, assinale a alternativa CORRETA acerca das condições necessárias para a adoção desse modelo de gestão.',
    alternativas: [
      { id: 'A', texto: 'A centralização das decisões administrativas na alta gestão com o objetivo de reduzir a influência de fatores culturais e institucionais na implementação do modelo de gestão por resultados no setor público.' },
      { id: 'B', texto: 'A adoção de indicadores padronizados aplicáveis indistintamente a todas as políticas públicas, de modo a simplificar os processos de avaliação de desempenho institucional no âmbito da administração pública.' },
      { id: 'C', texto: 'A articulação entre planejamento estratégico, definição consistente de indicadores, capacitação institucional e utilização de instrumentos de monitoramento capazes de sustentar uma cultura organizacional orientada a resultados.' },
      { id: 'D', texto: 'A priorização de ferramentas tecnológicas de controle administrativo que permitam reduzir a participação dos gestores públicos nos processos de avaliação de desempenho institucional e na tomada de decisões estratégicas.' },
      { id: 'E', texto: 'A substituição dos processos tradicionais de planejamento governamental por mecanismos automatizados de acompanhamento de metas, baseados exclusivamente em indicadores quantitativos de desempenho institucional.' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A gestão por resultados exige articulação entre planejamento estratégico, indicadores, capacitação e monitoramento, sustentando uma cultura orientada a resultados.',
      incorretas: {
        A: 'A centralização não é condição; a gestão por resultados demanda descentralização e engajamento.',
        B: 'Indicadores não podem ser padronizados indistintamente.',
        D: 'A participação dos gestores é essencial.',
        E: 'A substituição total por mecanismos automatizados é inadequada.'
      },
      conceitoCobrado: 'Condições para gestão por resultados',
      pegadinha: 'Achar que a centralização ou a automação total resolvem.',
      comoApareceEmConcurso: 'Cenário aplicado com múltiplas condições.'
    },
    tags: ['gestão por resultados', 'planejamento']
  },

  /* ============================================================
     ADM-05 — Direção, liderança e motivação (sobra)
  ============================================================ */
  {
    id: 'Q-PDF-ADM-05-006',
    idOriginal: 'Q4416623',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-05',
    subtema: 'Grade gerencial de Blake & Mouton — 9,9',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4416623' },
    enunciado: 'A liderança pode ser conceituada como o processo de influenciar pessoas através de uma comunicação eficiente, com a finalidade de atender aos objetivos organizacionais. Assim, na grade gerencial de Blake & Mouton, o líder que é simultaneamente voltado para as pessoas e para a produção é identificado como o líder:',
    alternativas: [
      { id: 'A', texto: '9,9' },
      { id: 'B', texto: '9,1' },
      { id: 'C', texto: '5,5' },
      { id: 'D', texto: '1,1' }
    ],
    gabarito: 'A',
    gabaritoInferido: false,
    explicacao: {
      correta: 'O líder 9,9 (team management) é simultaneamente voltado para pessoas e produção.',
      incorretas: {
        B: '9,1 é foco em produção (autoritário).',
        C: '5,5 é meio-termo.',
        D: '1,1 é abdicação.'
      },
      conceitoCobrado: 'Grade gerencial de Blake & Mouton',
      pegadinha: 'Confundir 9,9 com 9,1.',
      comoApareceEmConcurso: 'Cobrança direta da grade.'
    },
    tags: ['Blake & Mouton', 'liderança']
  },

  /* ============================================================
     ADM-06 — Controle e avaliação (sobra)
  ============================================================ */
  {
    id: 'Q-PDF-ADM-06-003',
    idOriginal: 'Q4596282',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-06',
    subtema: 'Controle — ação corretiva',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4596282' },
    enunciado: 'A rotina no dia a dia de trabalho é geralmente muito intensa na sede da SEDUCE, localizada no município de Petrolina-PE. Para que o ano letivo ocorra sem sobressaltos, a Secretária de Educação municipal precisa: Planejar as metas de ensino; Organizar a distribuição dos professores e recursos didáticos; Dirigir as equipes pedagógicas, motivando-as; e, por fim, controlar os resultados. O controle é, muitas vezes, a função mais negligenciada, mas é a que garante que os impostos do cidadão petrolinense estão gerando o impacto esperado. Sem controle, o planejamento é apenas um desejo (Bateman; Snell, 2021). Quando um gestor da SEDUCE olha para os dados do programa "Escola em Tempo Integral" — um marco para o desenvolvimento das crianças do Vale do São Francisco -- ele não está apenas lendo números; ele está exercendo o poder-dever de fiscalizar e garantir que o padrão de excelência municipal seja mantido em cada bairro e distrito. Ao analisar os relatórios de frequência dos alunos no programa "Escola em Tempo Integral", o gestor da SEDUCE identifica que uma unidade escolar está com índices significativamente abaixo da meta. Ele não apenas detecta o desvio do objetivo daquilo que foi acordado, mas também convoca o diretor da escola para entender as causas e propor um Plano de Ação (PA) para melhorias sistemáticas no processo em questão. Considerando a natureza do processo de controle administrativo, a ação do gestor ao propor um "PA" representa a etapa conhecida como:',
    alternativas: [
      { id: 'A', texto: 'estabelecimento de padrões contingenciais, caracterizados pela discricionariedade absoluta do gestor ao fixar as metas de frequência na SEDUCE.' },
      { id: 'B', texto: 'medição do desempenho extemporânea, visando exclusivamente à sustação dos atos administrativos pedagógicos realizados pela unidade escolar.' },
      { id: 'C', texto: 'comparação do desempenho com o padrão mandatário, resultando na imediata vacância administrativa do cargo de diretor para apuração de dolo.' },
      { id: 'D', texto: 'ação corretiva.' },
      { id: 'E', texto: 'replanejamento estratégico retroativo, com o objetivo de exonerar a responsabilidade do Município de Petrolina-PE sobre o desvio detectado.' }
    ],
    gabarito: 'D',
    gabaritoInferido: false,
    explicacao: {
      correta: 'Propor um Plano de Ação para corrigir o desvio é AÇÃO CORRETIVA, última etapa do controle.',
      incorretas: {
        A: 'Não é estabelecimento de padrões.',
        B: 'Não é medição.',
        C: 'Não é comparação com padrão mandatário.',
        E: 'Não é replanejamento retroativo.'
      },
      conceitoCobrado: 'Etapas do controle',
      pegadinha: 'Confundir ação corretiva com medição ou comparação.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['controle', 'ação corretiva']
  },

  /* ============================================================
     ADM-07 — Gestão de Pessoas (sobras)
  ============================================================ */
  {
    id: 'Q-PDF-ADM-07-005',
    idOriginal: 'Q4577960',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'ADM',
    moduloId: 'ADM-07',
    subtema: 'Desempenho profissional — fatores internos e externos',
    dificuldade: 1,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4577960' },
    enunciado: 'Quanto ao desenvolvimento de equipes e às relações humanas, julgue os itens a seguir. O desempenho profissional de um auxiliar administrativo é influenciado tanto por fatores internos (motivação) quanto por fatores externos (recursos disponíveis e clima organizacional).',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: 'CERTO. O desempenho é influenciado por fatores internos (motivação, competências) e externos (recursos, clima, condições de trabalho).',
      incorretas: {},
      conceitoCobrado: 'Fatores de desempenho',
      pegadinha: 'Achar que só a motivação importa.',
      comoApareceEmConcurso: 'Cobrança da multicausalidade do desempenho.'
    },
    tags: ['desempenho', 'motivação', 'clima']
  },
  {
    id: 'Q-PDF-ADM-07-006',
    idOriginal: 'Q4529529',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-07',
    subtema: 'Cultura organizacional — elementos',
    dificuldade: 3,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4529529' },
    enunciado: 'Em determinado Conselho Regional de Contabilidade (CRC), observa-se que, ao longo dos anos, os servidores desenvolveram uma forma própria de interação: utilizam expressões técnicas específicas do sistema CFC/CRCs; realizam rituais informais antes das sessões plenárias (como reuniões preparatórias recorrentes); e demonstram respeito aos conselheiros mais antigos. Além disso, novos servidores aprendem rapidamente quais comportamentos são aceitos ou reprovados, mesmo quando tais orientações não estão formalmente documentadas. Paralelamente, a alta gestão do CRC enfatiza, em seus documentos institucionais, valores como ética profissional, eficiência na fiscalização e compromisso com a sociedade, reforçando políticas de tratamento respeitoso aos profissionais registrados e aos cidadãos. Com base no conceito de cultura organizacional e em suas características, é correto afirmar que o caso hipotético apresentado evidencia, de forma predominante:',
    alternativas: [
      { id: 'A', texto: 'A sobreposição do clima organizacional às regras formais, indicando que o sentimento de pertencimento substitui os valores dominantes explicitados pela alta gestão.' },
      { id: 'B', texto: 'Um conflito estrutural entre filosofia organizacional e regras formais, típico de organizações públicas fortemente burocratizadas, o que enfraquece a cultura organizacional.' },
      { id: 'C', texto: 'A prevalência de normas formais e regras explícitas, demonstrando que a cultura organizacional do CRC é definida exclusivamente por documentos oficiais e legislações do sistema profissional.' },
      { id: 'D', texto: 'A coexistência de regularidades comportamentais, normas implícitas e valores dominantes, revelando uma cultura organizacional consolidada, aprendida historicamente na interação com o ambiente institucional.' }
    ],
    gabarito: 'D',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A cultura organizacional é evidenciada pela coexistência de regularidades comportamentais, normas implícitas e valores dominantes.',
      incorretas: {
        A: 'Não há sobreposição de clima sobre regras formais.',
        B: 'Não há conflito estrutural.',
        C: 'A cultura não se define exclusivamente por documentos.'
      },
      conceitoCobrado: 'Cultura organizacional',
      pegadinha: 'Reduzir a cultura a documentos formais.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['cultura organizacional']
  },
  {
    id: 'Q-PDF-ADM-07-007',
    idOriginal: 'Q4495803',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'ADM',
    moduloId: 'ADM-07',
    subtema: 'Gestão por resultados x avaliação comportamental',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4495803' },
    enunciado: 'Em relação à gestão de pessoas nas organizações públicas, julgue os itens seguintes. Determinada autarquia federal, ao adotar a gestão por resultados, deve substituir a avaliação com base em comportamentos por indicadores focados nas contribuições concretas de cada servidor ao objetivo final.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'ERRADO. A gestão por resultados não exige substituir a avaliação comportamental; os dois enfoques podem se complementar.',
      incorretas: {},
      conceitoCobrado: 'Gestão por resultados x avaliação comportamental',
      pegadinha: 'Achar que um modelo substitui necessariamente o outro.',
      comoApareceEmConcurso: 'Cobrança da complementaridade dos modelos.'
    },
    tags: ['gestão por resultados', 'avaliação']
  },

  /* ============================================================
     ADM-08 — Comunicação e comportamento organizacional (sobras)
  ============================================================ */
  {
    id: 'Q-PDF-ADM-08-004',
    idOriginal: 'Q4376764',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-08',
    subtema: 'Comunicação institucional em ambientes digitais',
    dificuldade: 3,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4376764' },
    enunciado: 'Em um órgão público de grande porte, a ampliação do uso de sistemas informatizados, correio eletrônico institucional, plataformas colaborativas e ambientes virtuais de atendimento ao cidadão trouxe ganhos relevantes de agilidade, mas também revelou fragilidades no tratamento da informação. Foram identificados casos de envio de documentos oficiais por contas pessoais, compartilhamento de arquivos sem controle de versão, ausência de classificação quanto ao grau de sigilo, utilização de aplicativos de mensagens instantâneas para decisões administrativas e armazenamento de dados funcionais em serviços externos não autorizados. Considerando os princípios da Administração Pública, os fundamentos da gestão da informação, a necessidade de rastreabilidade dos atos administrativos e as boas práticas de comunicação institucional em ambientes digitais, assinale a alternativa que expressa a conduta tecnicamente correta para o uso dos meios eletrônicos de comunicação no setor público.',
    alternativas: [
      { id: 'A', texto: 'Reconhecer que, diante da dinâmica do trabalho contemporâneo, a escolha do meio de comunicação deve ficar a critério de cada servidor, sendo suficiente que o conteúdo das mensagens esteja alinhado às atividades funcionais, independentemente do canal utilizado, da existência de registros formais ou do atendimento a padrões institucionais.' },
      { id: 'B', texto: 'Permitir o uso complementar de contas pessoais e aplicativos de mensagens, desde que posteriormente os principais encaminhamentos sejam resumidos em relatório interno, dispensando a necessidade de registro integral das comunicações e de controle sobre versões de documentos.' },
      { id: 'C', texto: 'Estabelecer como regra a utilização exclusiva de canais institucionais, exigir classificação adequada da informação, garantir mecanismos de controle de versão, registro e rastreabilidade das comunicações relevantes, observar políticas de segurança da informação e restringir o uso de plataformas externas não autorizadas.' },
      { id: 'D', texto: 'Priorizar a rapidez da comunicação em detrimento da formalidade, admitindo o uso de qualquer ferramenta digital que possibilite resposta imediata, ainda que isso implique fragilização dos controles administrativos e dificuldade posterior de comprovação dos atos praticados.' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A conduta correta é usar exclusivamente canais institucionais, classificar a informação, garantir rastreabilidade e restringir plataformas não autorizadas.',
      incorretas: {
        A: 'A escolha do meio não é livre.',
        B: 'O uso de contas pessoais não é adequado.',
        D: 'A rapidez não justifica a fragilização dos controles.'
      },
      conceitoCobrado: 'Comunicação institucional digital',
      pegadinha: 'Achar que a informalidade é aceitável.',
      comoApareceEmConcurso: 'Cenário aplicado sobre boas práticas.'
    },
    tags: ['comunicação digital', 'segurança da informação']
  },
  {
    id: 'Q-PDF-ADM-08-005',
    idOriginal: 'Q4286525',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-08',
    subtema: 'Thomas-Kilmann — estilo de compromisso',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4286525' },
    enunciado: 'A gestão dos conflitos organizacionais é fundamental, entre outros motivos, para a vivência em um ambiente de trabalho saudável e para os objetivos das organizações, sejam elas públicas ou privadas. A partir da análise das variáveis assertividade e cooperatividade, o método Thomas-Kilmann Instrument (TKI) define cinco estilos de solução de conflitos. Com base nesse método, quando os funcionários decidem pelo meio-termo, ou seja, moderadamente assertivos e moderadamente cooperativos, adotam o estilo',
    alternativas: [
      { id: 'A', texto: 'da competição.' },
      { id: 'B', texto: 'da acomodação.' },
      { id: 'C', texto: 'do compromisso.' },
      { id: 'D', texto: 'da evitação.' },
      { id: 'E', texto: 'da colaboração.' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: 'O estilo de COMPROMISSO é moderadamente assertivo e moderadamente cooperativo (meio-termo).',
      incorretas: {
        A: 'Competição é alta assertividade e baixa cooperação.',
        B: 'Acomodação é baixa assertividade e alta cooperação.',
        D: 'Evitação é baixa assertividade e baixa cooperação.',
        E: 'Colaboração é alta assertividade e alta cooperação.'
      },
      conceitoCobrado: 'Thomas-Kilmann',
      pegadinha: 'Confundir compromisso com colaboração.',
      comoApareceEmConcurso: 'Cobrança do estilo a partir das variáveis.'
    },
    tags: ['Thomas-Kilmann', 'conflito', 'compromisso']
  },
  {
    id: 'Q-PDF-ADM-08-006',
    idOriginal: 'Q4386645',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'ADM',
    moduloId: 'ADM-08',
    subtema: 'Resiliência interpessoal — flexibilidade',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4386645' },
    enunciado: 'No que concerne ao trabalho em equipe, aos aspectos de personalidade, ao relacionamento, ao comportamento, à empatia e à compreensão, julgue os itens seguintes. A resiliência interpessoal é um fator positivo que permite ao empregado manter a rigidez de seus métodos de trabalho frente às críticas externas, garantindo que o atendimento não seja influenciado pelas opiniões do público.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'ERRADO. A resiliência envolve FLEXIBILIDADE e adaptação, não rigidez.',
      incorretas: {},
      conceitoCobrado: 'Resiliência interpessoal',
      pegadinha: 'Inverter flexibilidade por rigidez.',
      comoApareceEmConcurso: 'Cobrança do conceito de resiliência.'
    },
    tags: ['resiliência', 'flexibilidade']
  },
  {
    id: 'Q-PDF-ADM-08-007',
    idOriginal: 'Q4272360',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'ADM',
    moduloId: 'ADM-08',
    subtema: 'Relações públicas — público interno e externo',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4272360' },
    enunciado: 'Julgue os itens a seguir, no que diz respeito às noções de administração. Relações públicas, no contexto organizacional, visam gerenciar a comunicação e o relacionamento da empresa com os seus públicos externos, também chamados de stakeholders.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'ERRADO. As relações públicas abrangem públicos INTERNOS e EXTERNOS.',
      incorretas: {},
      conceitoCobrado: 'Relações públicas',
      pegadinha: 'Restringir aos públicos externos.',
      comoApareceEmConcurso: 'Cobrança do alcance das relações públicas.'
    },
    tags: ['relações públicas', 'stakeholders']
  },
  {
    id: 'Q-PDF-ADM-08-008',
    idOriginal: 'Q4389366',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-08',
    subtema: 'Comunicação ascendente e desequilíbrio de poder',
    dificuldade: 3,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4389366' },
    enunciado: 'A comunicação pode ser entendida como o compartilhamento de informações entre duas ou mais pessoas, a fim de se alcançar um entendimento comum sobre um objeto ou uma situação. A comunicação organizacional, por sua vez, pode ser entendida como os padrões e tipos de comunicação que ocorrem no nível da organização ou de unidades da organização. A respeito de barreiras à comunicação eficaz no ambiente organizacional, avalie as asserções a seguir e a relação proposta entre elas: I - Em uma comunicação ascendente, o desequilíbrio de poder entre emissor e receptor envolvidos no processo comunicacional pode comprometer a eficácia da comunicação. PORQUE II - Os indivíduos em níveis superiores da hierarquia organizacional podem dispor de poder para recompensar e punir os indivíduos dos níveis inferiores. A respeito dessas asserções, é CORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'a asserção I é uma proposição verdadeira, e a II é uma proposição falsa.' },
      { id: 'B', texto: 'as asserções I e II são proposições falsas.' },
      { id: 'C', texto: 'as asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.' },
      { id: 'D', texto: 'as asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.' },
      { id: 'E', texto: 'a asserção I é uma proposição falsa, e a II é uma proposição verdadeira.' }
    ],
    gabarito: 'D',
    gabaritoInferido: false,
    explicacao: {
      correta: 'As duas asserções são verdadeiras, e a II justifica a I: o desequilíbrio de poder compromete a comunicação ascendente, pois o superior pode recompensar ou punir.',
      incorretas: {
        A: 'A II é verdadeira.',
        B: 'Ambas são verdadeiras.',
        C: 'A II justifica a I.',
        E: 'A I é verdadeira.'
      },
      conceitoCobrado: 'Barreiras à comunicação',
      pegadinha: 'Achar que a II não justifica a I.',
      comoApareceEmConcurso: 'Análise de asserções.'
    },
    tags: ['comunicação ascendente', 'poder']
  },
  {
    id: 'Q-PDF-ADM-08-009',
    idOriginal: 'Q4469370',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-08',
    subtema: 'Decodificação',
    dificuldade: 1,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4469370' },
    enunciado: 'Durante suas atividades em um órgão público, um assistente administrativo recebe um memorando eletrônico com orientações sobre novos procedimentos internos. Ao ler a mensagem, ele interpreta o conteúdo e compreende as instruções que deverão ser aplicadas no setor. No processo de comunicação, a etapa em que o receptor interpreta e atribui significado à mensagem recebida é denominada:',
    alternativas: [
      { id: 'A', texto: 'Feedback.' },
      { id: 'B', texto: 'Codificação.' },
      { id: 'C', texto: 'Decodificação.' },
      { id: 'D', texto: 'Canal.' },
      { id: 'E', texto: 'Ruído.' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: 'DECODIFICAÇÃO é a interpretação da mensagem pelo receptor.',
      incorretas: {
        A: 'Feedback é a resposta.',
        B: 'Codificação é a elaboração da mensagem.',
        D: 'Canal é o meio.',
        E: 'Ruído é a interferência.'
      },
      conceitoCobrado: 'Elementos da comunicação',
      pegadinha: 'Confundir decodificação com feedback ou codificação.',
      comoApareceEmConcurso: 'Cobrança de elemento específico.'
    },
    tags: ['decodificação', 'comunicação']
  },
  {
    id: 'Q-PDF-ADM-08-010',
    idOriginal: 'Q4386647',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'ADM',
    moduloId: 'ADM-08',
    subtema: 'Comportamento defensivo — escuta seletiva',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4386647' },
    enunciado: 'Acerca das formas de comportamento, empatia e compreensão mútua, julgue os itens a seguir. O comportamento defensivo é uma reação que ocorre quando o indivíduo percebe uma ameaça a seu autoconceito, que se manifesta pela escuta seletiva, na qual o receptor distorce a mensagem para que esta se encaixe em suas predisposições, reduzindo a eficácia da comunicação organizacional.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: 'CERTO. O comportamento defensivo envolve escuta seletiva e distorção da mensagem para preservar o autoconceito.',
      incorretas: {},
      conceitoCobrado: 'Comportamento defensivo',
      pegadinha: 'Achar que o comportamento defensivo melhora a comunicação.',
      comoApareceEmConcurso: 'Cobrança de definição.'
    },
    tags: ['comportamento defensivo', 'escuta seletiva']
  },
  {
    id: 'Q-PDF-ADM-08-011',
    idOriginal: 'Q4389365',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-08',
    subtema: 'Esforço emocional',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4389365' },
    enunciado: 'A compreensão do comportamento organizacional passa pela consideração do papel das emoções no contexto das organizações. Os profissionais reagem emocionalmente às coisas que lhes acontecem no ambiente de trabalho, o que pode afetar seu desempenho e satisfação. A expressão de emoções desejadas pela organização feita pelos profissionais durante os relacionamentos interpessoais no trabalho é denominada:',
    alternativas: [
      { id: 'A', texto: 'compensação de positividade.' },
      { id: 'B', texto: 'dissonância emocional.' },
      { id: 'C', texto: 'emoções sentidas.' },
      { id: 'D', texto: 'afetividade positiva.' },
      { id: 'E', texto: 'esforço emocional.' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'ESFORÇO EMOCIONAL é a expressão de emoções desejadas pela organização.',
      incorretas: {
        A: 'Compensação de positividade é outro conceito.',
        B: 'Dissonância emocional é o conflito entre emoções sentidas e expressas.',
        C: 'Emoções sentidas são as reais.',
        D: 'Afetividade positiva é uma predisposição.'
      },
      conceitoCobrado: 'Esforço emocional',
      pegadinha: 'Confundir com dissonância emocional.',
      comoApareceEmConcurso: 'Cobrança de definição.'
    },
    tags: ['esforço emocional', 'emoções']
  },
  {
    id: 'Q-PDF-ADM-08-012',
    idOriginal: 'Q4657918',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-08',
    subtema: 'Feedback — comportamento receptivo',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4657918' },
    enunciado: 'Durante uma reunião de equipe, o colaborador X apontou uma falha em um relatório elaborado pelo colega Y. Ao receber a observação, o colega Y não apresentou objeções imediatas, reconheceu o ponto levantado e definiu, por conta própria, a solução técnica a ser adotada, comunicando posteriormente aos demais a forma como conduziria a correção. Com base nessa situação hipotética, é correto afirmar que a conduta do colega Y caracteriza um comportamento',
    alternativas: [
      { id: 'A', texto: 'defensivo, uma vez que ele, ao definir a solução por conta própria, buscou preservar a sua autoridade técnica diante da falha apontada.' },
      { id: 'B', texto: 'indiferente, já que o colega Y não discutiu com o colega que apontou a falha, antes de decidir como proceder.' },
      { id: 'C', texto: 'receptivo, pois o reconhecimento da falha e a definição de uma solução, ainda que individual, demonstram abertura ao conteúdo do feedback recebido.' },
      { id: 'D', texto: 'autoritário, pois a definição unilateral da solução técnica, sem deliberação conjunta com a equipe, é incompatível com a receptividade ao feedback.' },
      { id: 'E', texto: 'competitivo, considerando que a definição individual da solução evidencia a intenção de superar o desempenho do colega que apontou a falha.' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A conduta é RECEPTIVA: reconhecer a falha e propor solução demonstra abertura ao feedback.',
      incorretas: {
        A: 'Não é defensivo.',
        B: 'Não é indiferente.',
        D: 'Não é autoritário.',
        E: 'Não é competitivo.'
      },
      conceitoCobrado: 'Receptividade ao feedback',
      pegadinha: 'Confundir autonomia com autoritarismo.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['feedback', 'receptividade']
  },
  {
    id: 'Q-PDF-ADM-08-013',
    idOriginal: 'Q4470183',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-08',
    subtema: 'Elementos da comunicação — canal',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4470183' },
    enunciado: 'Chiavenato (2025) define que o processo de comunicação é composto de sete elementos. Nesse sentido, de acordo com o autor, um programa de TV a ser transmitido é considerado como o elemento denominado:',
    alternativas: [
      { id: 'A', texto: 'Canal.' },
      { id: 'B', texto: 'Fonte.' },
      { id: 'C', texto: 'Receptor.' },
      { id: 'D', texto: 'Retroação.' }
    ],
    gabarito: 'A',
    gabaritoInferido: true,
    explicacao: {
      correta: 'O canal é o meio pelo qual a mensagem é transmitida; a TV (programa) funciona como canal. (Gabarito inferido — conferir.)',
      incorretas: {
        B: 'Fonte é o emissor.',
        C: 'Receptor é o destinatário.',
        D: 'Retroação é o feedback.'
      },
      conceitoCobrado: 'Elementos da comunicação',
      pegadinha: 'Confundir canal com fonte ou mensagem.',
      comoApareceEmConcurso: 'Cobrança de elemento específico.'
    },
    tags: ['canal', 'comunicação']
  },

  /* ============================================================
     ADM-11 — Gestão de Processos (sobras)
  ============================================================ */
  {
    id: 'Q-PDF-ADM-11-002',
    idOriginal: 'Q4539136',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-11',
    subtema: 'O&M — princípios constitucionais',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4539136' },
    enunciado: 'A análise dos processos da Administração Pública no campo da Organização e Métodos (O&M) constitui um dos eixos centrais da gestão pública contemporânea. Sobre esse assunto, é INCORRETO afirmar que:',
    alternativas: [
      { id: 'A', texto: 'a área de Organização e Métodos busca racionalizar estruturas e rotinas administrativas por meio da análise de fluxos de trabalho, padronização de procedimentos e melhoria da eficiência operacional.' },
      { id: 'B', texto: 'a análise de processos administrativos permite identificar redundâncias, gargalos e sobreposições de atividades, contribuindo para a simplificação e aperfeiçoamento das rotinas institucionais.' },
      { id: 'C', texto: 'o estudo dos processos administrativos no setor público envolve a consideração de fatores legais, normativos e institucionais que condicionam a atuação da administração e a execução de suas atividades.' },
      { id: 'D', texto: 'a aplicação das técnicas de Organização e Métodos na administração pública dispensa a observância dos princípios constitucionais da legalidade e da publicidade, desde que haja ganho de eficiência administrativa.' },
      { id: 'E', texto: 'o mapeamento e a documentação dos processos organizacionais constituem instrumentos relevantes para a modernização administrativa e para a melhoria da gestão pública.' }
    ],
    gabarito: 'D',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A alternativa D está INCORRETA: a O&M não dispensa os princípios constitucionais; a eficiência não autoriza afastar a legalidade e a publicidade.',
      incorretas: {
        A: 'Correta.',
        B: 'Correta.',
        C: 'Correta.',
        E: 'Correta.'
      },
      conceitoCobrado: 'O&M e princípios',
      pegadinha: 'Achar que a eficiência se sobrepõe à legalidade.',
      comoApareceEmConcurso: 'Cobrança de INCORRETA.'
    },
    tags: ['O&M', 'legalidade', 'publicidade']
  },
  {
    id: 'Q-PDF-ADM-11-003',
    idOriginal: 'Q4556225',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-11',
    subtema: 'Modelo WV — passos',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4556225' },
    enunciado: 'O modelo WV é uma metodologia de análise e redesenho de processos que propõe uma estrutura específica para a resolução de problemas e melhoria contínua. Tal modelo foi criado pelos autores Shiba, Grahan e Walden. Quantos passos compõem essa metodologia?',
    alternativas: [
      { id: 'A', texto: 'Oito passos.' },
      { id: 'B', texto: 'Sete passos.' },
      { id: 'C', texto: 'Cinco passos.' },
      { id: 'D', texto: 'Quatro passos.' }
    ],
    gabarito: 'B',
    gabaritoInferido: false,
    explicacao: {
      correta: 'O modelo WV (Western View) é composto por SETE passos.',
      incorretas: {
        A: 'Não são oito.',
        C: 'Não são cinco.',
        D: 'Não são quatro.'
      },
      conceitoCobrado: 'Modelo WV',
      pegadinha: 'Confundir com outros modelos (PDCA, 8D).',
      comoApareceEmConcurso: 'Cobrança de característica específica.'
    },
    tags: ['modelo WV', 'processos']
  },
  {
    id: 'Q-PDF-ADM-11-004',
    idOriginal: 'Q4562785',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'ADM',
    moduloId: 'ADM-11',
    subtema: 'Fluxogramas em manuais de procedimentos',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4562785' },
    enunciado: 'De acordo com os procedimentos e os manuais administrativos, a organização, os métodos e a gestão de estoques e de suprimentos, julgue os itens a seguir. Em estruturas complexas, os manuais de procedimentos administrativos prescindem do uso de fluxogramas, uma vez que a descrição textual detalhada é tecnicamente superior à representação gráfica para a identificação de gargalos e de duplicidade de tarefas.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'ERRADO. O fluxograma é ferramenta essencial para visualização de processos, e a descrição textual não é tecnicamente superior.',
      incorretas: {},
      conceitoCobrado: 'Fluxograma',
      pegadinha: 'Desvalorizar o fluxograma.',
      comoApareceEmConcurso: 'Cobrança da importância do fluxograma.'
    },
    tags: ['fluxograma', 'manuais']
  },
  {
    id: 'Q-PDF-ADM-11-005',
    idOriginal: 'Q4495805',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'ADM',
    moduloId: 'ADM-11',
    subtema: 'Manuais de procedimentos — finalidade',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4495805' },
    enunciado: 'No que diz respeito aos procedimentos, aos manuais administrativos e ao sistema de organização e métodos nas organizações públicas, julgue os itens a seguir. O coordenador de conselho federal de profissões regulamentadas deve adotar o manual de procedimentos para estabelecer as diretrizes filosóficas e os limites para a tomada de decisão estratégica.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'ERRADO. Manuais de procedimentos detalham rotinas operacionais; não estabelecem diretrizes filosóficas nem limites para decisão estratégica.',
      incorretas: {},
      conceitoCobrado: 'Finalidade dos manuais',
      pegadinha: 'Confundir manual de procedimentos com planejamento estratégico.',
      comoApareceEmConcurso: 'Cobrança da finalidade do manual.'
    },
    tags: ['manuais', 'procedimentos']
  },
  {
    id: 'Q-PDF-ADM-11-006',
    idOriginal: 'Q4577773',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'ADM',
    moduloId: 'ADM-11',
    subtema: 'Manuais — atualização',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4577773' },
    enunciado: 'Acerca da organização, dos métodos e da gestão de suprimentos em um conselho profissional, julgue os itens seguintes. Os manuais de procedimentos administrativos de um conselho profissional, uma vez que são aprovados, não devem sofrer alterações frequentes para preservar a segurança jurídica e a uniformidade de conduta.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'ERRADO. Manuais devem ser atualizados sempre que necessário, para acompanhar mudanças legais e organizacionais.',
      incorretas: {},
      conceitoCobrado: 'Atualização de manuais',
      pegadinha: 'Achar que a estabilidade justifica a não atualização.',
      comoApareceEmConcurso: 'Cobrança da dinamicidade dos manuais.'
    },
    tags: ['manuais', 'atualização']
  },
  {
    id: 'Q-PDF-ADM-11-007',
    idOriginal: 'Q4551362',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-11',
    subtema: 'Macroprocesso',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4551362' },
    enunciado: 'O novo gestor do Almoxarifado de uma Prefeitura decidiu mapear toda a dinâmica de "Aquisição de Bens" do órgão. Ele observou que esse rito é complexo, pois inicia no setor demandante, cruza os departamentos de compras e jurídico, e termina na tesouraria, gerando forte impacto na organização. Ao detalhar o fluxo, ele solicitou que a equipe descesse até a menor subdivisão de trabalho possível, focando no esforço individual executado por cada servidor em sua mesa. A luz da teoria sobre os níveis de detalhamento de processos, afirma-se CORRETAMENTE que a dinâmica geral que cruza os vários setores configura um:',
    alternativas: [
      { id: 'A', texto: 'Macroprocesso.' },
      { id: 'B', texto: 'Processo primário.' },
      { id: 'C', texto: 'Fluxo de trabalho.' },
      { id: 'D', texto: 'Sistema de suporte.' }
    ],
    gabarito: 'A',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A dinâmica geral que cruza vários setores é um MACROPROCESSO.',
      incorretas: {
        B: 'Processo primário é uma subdivisão.',
        C: 'Fluxo de trabalho é nível mais detalhado.',
        D: 'Sistema de suporte é categoria funcional.'
      },
      conceitoCobrado: 'Níveis de detalhamento de processos',
      pegadinha: 'Confundir macroprocesso com processo primário.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['macroprocesso', 'processos']
  },

  /* ============================================================
     ADM-12 — Atendimento e relações interpessoais (sobras)
  ============================================================ */
  {
    id: 'Q-PDF-ADM-12-003',
    idOriginal: 'Q4432283',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'ADM',
    moduloId: 'ADM-12',
    subtema: 'Trabalho em equipe — centralização e feedback',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4432283' },
    enunciado: 'Acerca do trabalho em equipe nas organizações públicas, julgue os itens seguintes. Quando um gestor público, para aumentar a produtividade, centraliza as decisões e elimina feedbacks informais, focando, sobremaneira, nas metas formais da equipe, serão esperadas uma melhoria no relacionamento e uma maior agilidade operacional.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'ERRADO. A centralização e a eliminação de feedbacks tendem a piorar o relacionamento e reduzir a agilidade.',
      incorretas: {},
      conceitoCobrado: 'Trabalho em equipe',
      pegadinha: 'Achar que centralizar melhora o relacionamento.',
      comoApareceEmConcurso: 'Cobrança de consequências da centralização.'
    },
    tags: ['trabalho em equipe', 'centralização']
  },
  {
    id: 'Q-PDF-ADM-12-004',
    idOriginal: 'Q4272355',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'ADM',
    moduloId: 'ADM-12',
    subtema: 'Equipes eficazes — habilidades técnicas',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4272355' },
    enunciado: 'Julgue os itens a seguir, no que diz respeito às noções de administração. O desenvolvimento de equipes de trabalho eficazes depende de uma seleção de bons indivíduos com altas habilidades técnicas e especializadas.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'ERRADO. Equipes eficazes dependem não apenas de habilidades técnicas, mas também de habilidades interpessoais, comunicação e cooperação.',
      incorretas: {},
      conceitoCobrado: 'Equipes eficazes',
      pegadinha: 'Reduzir a eficácia a habilidades técnicas.',
      comoApareceEmConcurso: 'Cobrança da multidimensionalidade.'
    },
    tags: ['equipes', 'habilidades']
  },
  {
    id: 'Q-PDF-ADM-12-005',
    idOriginal: 'Q4495829',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'ADM',
    moduloId: 'ADM-12',
    subtema: 'Atendimento — comunicabilidade e tolerância',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4495829' },
    enunciado: 'Um determinado conselho de profissão regulamentada possui cinco servidores no setor de atendimento ao público, conforme está descrito a seguir. • Abadia destaca-se por evitar termos jurídicos complexos que o usuário não compreende. • Beto sempre porta o crachá de identificação visível e mantém a postura ereta e atenta ao receber o cidadão. • Carla é reconhecida pelo tratamento educado e respeitoso, e pelo uso de expressões "por favor", "obrigada" e "com licença". • Donato mantém a calma com o usuário idoso que não ouve bem. • Eva nega qualquer tentativa de recebimento de vantagem pessoal. Considerando essa situação hipotética, julgue os itens seguintes, acerca dos atributos de qualidade no atendimento preponderantes em cada servidor. Abadia vale-se da comunicabilidade, ao passo que Donato preza pela tolerância.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'C',
    gabaritoInferido: false,
    explicacao: {
      correta: 'CERTO. Abadia usa comunicabilidade (linguagem acessível); Donato usa tolerância (paciência com idoso).',
      incorretas: {},
      conceitoCobrado: 'Atributos do atendimento',
      pegadinha: 'Confundir os atributos.',
      comoApareceEmConcurso: 'Associação de atributos a servidores.'
    },
    tags: ['comunicabilidade', 'tolerância']
  },
  {
    id: 'Q-PDF-ADM-12-006',
    idOriginal: 'Q4495826',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'ADM',
    moduloId: 'ADM-12',
    subtema: 'Atendimento — atenção e cortesia',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4495826' },
    enunciado: 'Um determinado conselho de profissão regulamentada possui cinco servidores no setor de atendimento ao público, conforme está descrito a seguir. • Abadia destaca-se por evitar termos jurídicos complexos que o usuário não compreende. • Beto sempre porta o crachá de identificação visível e mantém a postura ereta e atenta ao receber o cidadão. • Carla é reconhecida pelo tratamento educado e respeitoso, e pelo uso de expressões "por favor", "obrigada" e "com licença". • Donato mantém a calma com o usuário idoso que não ouve bem. • Eva nega qualquer tentativa de recebimento de vantagem pessoal. Considerando essa situação hipotética, julgue os itens seguintes, acerca dos atributos de qualidade no atendimento preponderantes em cada servidor. Abadia caracteriza-se pela atenção ao usuário, enquanto Beto prima pela cortesia.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'ERRADO. Abadia se destaca pela COMUNICABILIDADE (evita jargões); Beto, pela APRESENTAÇÃO (crachá, postura).',
      incorretas: {},
      conceitoCobrado: 'Atributos do atendimento',
      pegadinha: 'Trocar os atributos.',
      comoApareceEmConcurso: 'Associação de atributos.'
    },
    tags: ['atenção', 'cortesia', 'apresentação']
  },
  {
    id: 'Q-PDF-ADM-12-007',
    idOriginal: 'Q4272400',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'ADM',
    moduloId: 'ADM-12',
    subtema: 'Compreensão mútua — decisões fundamentadas',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4272400' },
    enunciado: 'Julgue os itens a seguir, acerca do trabalho em equipe. A compreensão mútua não implica, necessariamente, concordância unânime para evitar conflitos, mas, em alguns casos, ela pode não exigir decisões fundamentadas, para que o grupo mantenha um apoio coletivo.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'ERRADO. A compreensão mútua não dispensa decisões fundamentadas; o apoio coletivo deve ser construído com base em razões.',
      incorretas: {},
      conceitoCobrado: 'Compreensão mútua',
      pegadinha: 'Achar que a harmonia dispensa fundamentação.',
      comoApareceEmConcurso: 'Cobrança da necessidade de fundamentação.'
    },
    tags: ['compreensão mútua', 'decisões']
  },
  {
    id: 'Q-PDF-ADM-12-008',
    idOriginal: 'Q4539140',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'ADM',
    moduloId: 'ADM-12',
    subtema: 'Atendimento externo — satisfação do cidadão',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4539140' },
    enunciado: 'No que diz respeito à postura profissional, às relações interpessoais, aos atendimentos telefônicos e aos atendimentos ao público interno e ao público externo nas organizações públicas, julgue os itens a seguir. A eficácia do atendimento externo nas organizações públicas vincula-se ao cumprimento restrito das formalidades processuais, independentemente da satisfação final do cidadão-usuário.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'ERRADO. A eficácia do atendimento não se resume ao cumprimento de formalidades; a satisfação do cidadão é relevante.',
      incorretas: {},
      conceitoCobrado: 'Atendimento ao cidadão',
      pegadinha: 'Reduzir o atendimento a formalidades.',
      comoApareceEmConcurso: 'Cobrança da centralidade do cidadão.'
    },
    tags: ['atendimento', 'cidadão']
  },
  {
    id: 'Q-PDF-ADM-12-009',
    idOriginal: 'Q4562815',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'ADM',
    moduloId: 'ADM-12',
    subtema: 'Parecer — documento técnico',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4562815' },
    enunciado: 'No que concerne aos tipos de documentos administrativos e aos protocolos, julgue os itens seguintes. O parecer constitui um documento técnico por meio do qual um órgão consultivo ou um especialista emite uma decisão fundamentada acerca de determinada matéria.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'ERRADO. O parecer é OPINIÃO técnica fundamentada; não é decisão.',
      incorretas: {},
      conceitoCobrado: 'Parecer',
      pegadinha: 'Confundir parecer com decisão.',
      comoApareceEmConcurso: 'Cobrança da natureza do parecer.'
    },
    tags: ['parecer', 'documentos']
  },
  {
    id: 'Q-PDF-ADM-12-010',
    idOriginal: 'Q4657913',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'ADM',
    moduloId: 'ADM-12',
    subtema: 'Atendimento — presteza e interesse',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4657913' },
    enunciado: 'Um cidadão procurou um Conselho Regional em busca de informações a respeito de um processo administrativo. Todavia, embora o assunto não fosse de sua competência, o colaborador indicou o setor responsável, informou a sua localização e ofereceu-se para acompanhá-lo até o local. Com base nessa situação hipotética, é correto afirmar que a conduta do colaborador evidencia os atributos de',
    alternativas: [
      { id: 'A', texto: 'discrição e tolerância, pois o colaborador preservou a confidencialidade das informações e manteve a postura respeitosa durante o atendimento.' },
      { id: 'B', texto: 'presteza e interesse, pois buscou atender prontamente à necessidade do cidadão e demonstrou disposição para auxiliá-lo até o encaminhamento adequado da demanda.' },
      { id: 'C', texto: 'comunicabilidade e objetividade, pois transmitiu as informações necessárias de forma clara, restringindo-se às orientações indispensáveis ao atendimento.' },
      { id: 'D', texto: 'apresentação e comunicabilidade, considerando que o êxito do atendimento depende, sobretudo, da forma como o colaborador se apresentou ao cidadão.' },
      { id: 'E', texto: 'eficiência e resolutividade, pois solucionou a demanda do cidadão, independentemente das atribuições de sua unidade de atuação no escopo de trabalho.' }
    ],
    gabarito: 'B',
    gabaritoInferido: false,
    explicacao: {
      correta: 'A conduta evidencia PRESTEZA (atendimento pronto) e INTERESSE (disposição para auxiliar e acompanhar o cidadão até o setor correto).',
      incorretas: {
        A: 'Discrição e tolerância não são os atributos centrais.',
        C: 'Comunicabilidade e objetividade não captam a disposição de acompanhar.',
        D: 'Apresentação e comunicabilidade não são o foco.',
        E: 'Eficiência e resolutividade não se aplicam, pois a demanda não foi resolvida na unidade.'
      },
      conceitoCobrado: 'Atributos do atendimento',
      pegadinha: 'Confundir presteza com eficiência ou resolutividade.',
      comoApareceEmConcurso: 'Cenário aplicado.'
    },
    tags: ['atendimento', 'presteza', 'interesse']
  },
  {
    id: 'Q-PDF-ADM-12-011',
    idOriginal: 'Q4272393',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'ADM',
    moduloId: 'ADM-12',
    subtema: 'Trabalho em equipe — homogeneidade',
    dificuldade: 2,
    prioridade: 'media',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4272393' },
    enunciado: 'Julgue os itens a seguir, acerca do trabalho em equipe. Para alcançar a máxima efetividade no comportamento interpessoal, é fundamental que haja uma homogeneidade no comportamento da equipe, para que o objetivo seja alcançado.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'ERRADO. A diversidade de comportamentos e habilidades é positiva para a equipe; a homogeneidade não é requisito.',
      incorretas: {},
      conceitoCobrado: 'Trabalho em equipe',
      pegadinha: 'Achar que a homogeneidade é necessária.',
      comoApareceEmConcurso: 'Cobrança do valor da diversidade.'
    },
    tags: ['trabalho em equipe', 'diversidade']
  },

  /* ============================================================
     DA-21 — Licitações e Contratos (sobras)
  ============================================================ */
  {
    id: 'Q-PDF-DA-21-015',
    idOriginal: 'Q4386350',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'certo_errado',
    area: 'DA',
    moduloId: 'DA-21',
    subtema: 'Lei 14.133/2021 x Lei 8.666/1993 — substituição',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4386350' },
    enunciado: 'De acordo com a CRFB/1988, com a Lei nº 5.905/1973, com o Decreto nº 94.406/1987, com a Lei nº 14.133/2021 e com as Resoluções COFEN nº 507/2016, nº 564/2017, nº 581/2018, nº 584/2018, nº 609/2019, nº 706/2022, nº 721/2023, nº 769/2024 e nº 782/2025, julgue os itens a seguir. A Lei nº 14.133/2021 (Nova Lei de Licitações) substituiu integralmente a Lei nº 8.666/1993.',
    alternativas: [
      { id: 'C', texto: 'Certo' },
      { id: 'E', texto: 'Errado' }
    ],
    gabarito: 'E',
    gabaritoInferido: false,
    explicacao: {
      correta: 'ERRADO. A Lei 14.133/2021 previu período de transição e não substituiu imediatamente a Lei 8.666/1993; a revogação ocorreu após prazo legal.',
      incorretas: {},
      conceitoCobrado: 'Transição entre leis de licitação',
      pegadinha: 'Achar que a substituição foi imediata.',
      comoApareceEmConcurso: 'Cobrança da transição legal.'
    },
    tags: ['Lei 14.133', 'Lei 8.666', 'transição']
  },
  {
    id: 'Q-PDF-DA-21-016',
    idOriginal: 'Q4400150',
    origem: 'pdf_qconcursos',
    tipo: 'REAL',
    formato: 'multipla_escolha',
    area: 'DA',
    moduloId: 'DA-21',
    subtema: 'Pregão — modalidade',
    dificuldade: 2,
    prioridade: 'alta',
    banca: 'Não identificada',
    orgao: 'Não identificado',
    ano: null,
    prova: 'Não identificada',
    fonte: { descricao: 'PDF QConcursos — Q4400150' },
    enunciado: 'Assinale alternativa que apresenta a modalidade de licitação usada para aquisição de bens e serviços comuns em que a disputa pelo fornecimento é feita em sessão pública, por meio de propostas e lances, para classificação e habilitação do licitante com a proposta de menor preço, onde a grande inovação se dá pela inversão das fases de habilitação e análise das propostas e com base legal na Lei n.º 10.520, de 17 de julho de 2002:',
    alternativas: [
      { id: 'A', texto: 'Concorrência.' },
      { id: 'B', texto: 'Tomada de Preços.' },
      { id: 'C', texto: 'Concurso.' },
      { id: 'D', texto: 'Leilão.' },
      { id: 'E', texto: 'Pregão.' }
    ],
    gabarito: 'E',
    gabaritoInferido: true,
    explicacao: {
      correta: 'O PREGÃO é a modalidade para bens e serviços comuns, com disputa por lances e inversão de fases. (Gabarito inferido — conferir; a Lei 10.520/2002 foi revogada pela Lei 14.133/2021, mas o conceito permanece.)',
      incorretas: {
        A: 'Concorrência é para obras e serviços de maior complexidade.',
        B: 'Tomada de preços foi extinta.',
        C: 'Concurso é para trabalho técnico.',
        D: 'Leilão é para alienação de bens.'
      },
      conceitoCobrado: 'Pregão',
      pegadinha: 'Confundir com concorrência ou tomada de preços.',
      comoApareceEmConcurso: 'Cobrança de modalidade específica.'
    },
    tags: ['pregão', 'Lei 10.520']
  }
   
];
