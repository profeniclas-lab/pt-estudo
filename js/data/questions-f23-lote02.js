/**
 * ADM-ESTUDO — Fase 23, Lote 2: revisão pedagógica ADM-01 a ADM-03.
 * Fonte: auditoria do Lote 1, 72 questões examinadas.
 * 36 itens: revisão de alternativas e comentários mantendo gabarito/ID.
 * 18 itens: novas sequências e afirmações, recebendo IDs -R2.
 * 18 itens C/E: preservados (não possuem distratores).
 *
 * Não grava ou altera localStorage. Os registros existentes permanecem salvos.
 * Sessões iniciadas antes da atualização não são alteradas durante a execução.
 */
import { QUESTIONS } from './questions.js';

const PATCHES = {
  "Q-ADM-01-001-02": {
    "kind": "alternatives",
    "options": [
      "Administração, por coordenar pessoas e recursos em torno de um objetivo coletivo, independentemente de lucro.",
      "Contabilidade gerencial, pois acompanha gastos e custos para orientar a equipe.",
      "Auditoria operacional, porque examina se os recursos alcançaram o resultado esperado.",
      "Gestão financeira, porque define o orçamento e distribui os recursos humanos."
    ],
    "reasons": [
      "Administração coordena pessoas, recursos e decisões em busca dos objetivos, mesmo sem lucro.",
      "Contabilidade gerencial produz informação econômico-financeira, mas não designa a coordenação global de pessoas e recursos.",
      "Auditoria operacional avalia economicidade e desempenho; a situação descreve gestão contínua, não exame avaliativo.",
      "Gestão financeira é uma função específica e não abrange integralmente coordenação de pessoas e objetivos."
    ],
    "comments": [
      "Correta: Administração coordena pessoas, recursos e decisões em busca dos objetivos, mesmo sem lucro.",
      "Incorreta: Contabilidade gerencial produz informação econômico-financeira, mas não designa a coordenação global de pessoas e recursos.",
      "Incorreta: Auditoria operacional avalia economicidade e desempenho; a situação descreve gestão contínua, não exame avaliativo.",
      "Incorreta: Gestão financeira é uma função específica e não abrange integralmente coordenação de pessoas e objetivos."
    ],
    "originalAnswer": 0,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-01-001-04": {
    "kind": "alternatives",
    "options": [
      "Organizações com objetivos sociais também precisam de decisões sobre recursos e atividades.",
      "Uma entidade pública pode utilizar métodos de gestão semelhantes aos de outras organizações.",
      "Administrar inclui coordenar esforços e acompanhar os resultados pretendidos.",
      "A atividade administrativa depende da existência de proprietários a quem se possam distribuir os resultados financeiros.",
      "Decisões estratégicas e operacionais podem integrar o mesmo processo administrativo."
    ],
    "reasons": [
      "A ausência de lucro não elimina o trabalho de administrar recursos e responsabilidades.",
      "O contexto público modifica finalidades e condicionantes, não a existência da administração.",
      "Coordenação e acompanhamento de resultados compõem as funções administrativas.",
      "Distribuir lucros não é requisito para administrar; existem órgãos públicos e entidades sem fins lucrativos.",
      "A administração ocorre em diversos níveis, que se articulam conforme suas atribuições."
    ],
    "comments": [
      "Incorreta: A ausência de lucro não elimina o trabalho de administrar recursos e responsabilidades.",
      "Incorreta: O contexto público modifica finalidades e condicionantes, não a existência da administração.",
      "Incorreta: Coordenação e acompanhamento de resultados compõem as funções administrativas.",
      "Correta: Distribuir lucros não é requisito para administrar; existem órgãos públicos e entidades sem fins lucrativos.",
      "Incorreta: A administração ocorre em diversos níveis, que se articulam conforme suas atribuições."
    ],
    "originalAnswer": 3,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-01-002-02": {
    "kind": "alternatives",
    "options": [
      "Financeiros, patrimoniais, informacionais e humanos, respectivamente.",
      null,
      "Humanos, financeiros, tecnológicos e informacionais, nessa ordem.",
      "Materiais, humanos, informacionais e financeiros, respectivamente."
    ],
    "reasons": [
      "O orçamento não é um recurso informacional nesta classificação, e relatórios não equivalem a pessoal.",
      "Orçamento é financeiro; servidores são humanos; computadores são materiais/tecnológicos; relatórios são informacionais.",
      "O orçamento foi classificado como humano e os servidores como financeiros, invertendo os dois primeiros itens.",
      "A ordem proposta transforma o orçamento em material e os relatórios em financeiros, sem correspondência com os itens."
    ],
    "comments": [
      "Incorreta: O orçamento não é um recurso informacional nesta classificação, e relatórios não equivalem a pessoal.",
      "Correta: Orçamento é financeiro; servidores são humanos; computadores são materiais/tecnológicos; relatórios são informacionais.",
      "Incorreta: O orçamento foi classificado como humano e os servidores como financeiros, invertendo os dois primeiros itens.",
      "Incorreta: A ordem proposta transforma o orçamento em material e os relatórios em financeiros, sem correspondência com os itens."
    ],
    "originalAnswer": 1,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-01-002-03": {
    "kind": "alternatives",
    "options": [
      null,
      null,
      null,
      null,
      null
    ],
    "reasons": [
      "Dados, equipamentos, servidores e dotação correspondem, nessa ordem, a informações, materiais, pessoas e finanças.",
      "A primeira posição equivoca dados com equipamentos e a segunda confunde equipamentos com informações.",
      "A segunda posição atribui equipamentos ao grupo humano, quando se trata de recursos materiais.",
      "Dotação orçamentária não é recurso informacional; tampouco dados de demanda são financeiros.",
      "A sequência troca os responsáveis humanos pela dotação orçamentária, que é recurso financeiro."
    ],
    "comments": [
      "Correta: Dados, equipamentos, servidores e dotação correspondem, nessa ordem, a informações, materiais, pessoas e finanças.",
      "Incorreta: A primeira posição equivoca dados com equipamentos e a segunda confunde equipamentos com informações.",
      "Incorreta: A segunda posição atribui equipamentos ao grupo humano, quando se trata de recursos materiais.",
      "Incorreta: Dotação orçamentária não é recurso informacional; tampouco dados de demanda são financeiros.",
      "Incorreta: A sequência troca os responsáveis humanos pela dotação orçamentária, que é recurso financeiro."
    ],
    "originalAnswer": 0,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-01-003-02": {
    "kind": "alternatives",
    "options": [
      "Efetivo, porque reduzir a diferença entre custos e resultados demonstra impacto social.",
      "Produtivo, pois superar a previsão de gasto comprova expansão do atendimento.",
      "Eficaz quanto à meta de atendimentos, mas não eficiente no uso dos recursos disponíveis.",
      "Eficiente no uso dos recursos, embora sem comprovar o alcance da meta."
    ],
    "reasons": [
      "Efetividade se refere ao impacto concreto; o enunciado informa alcance da meta e excesso de recursos, não impacto.",
      "Produtividade exige relação entre produtos e recursos; gastar acima do necessário não prova produtividade.",
      "A meta foi alcançada (eficácia), mas o consumo excessivo impede afirmar eficiência.",
      "Eficiência exige uso adequado de recursos, enquanto o caso relata desperdício; a eficácia, sim, foi demonstrada."
    ],
    "comments": [
      "Incorreta: Efetividade se refere ao impacto concreto; o enunciado informa alcance da meta e excesso de recursos, não impacto.",
      "Incorreta: Produtividade exige relação entre produtos e recursos; gastar acima do necessário não prova produtividade.",
      "Correta: A meta foi alcançada (eficácia), mas o consumo excessivo impede afirmar eficiência.",
      "Incorreta: Eficiência exige uso adequado de recursos, enquanto o caso relata desperdício; a eficácia, sim, foi demonstrada."
    ],
    "originalAnswer": 2,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-01-003-04": {
    "kind": "alternatives",
    "options": [
      null,
      null,
      null,
      null,
      null
    ],
    "reasons": [
      "Alcançar a meta demonstra eficácia; gerar impacto social, efetividade; poupar recursos, eficiência.",
      "Eficiência está ligada ao uso de recursos, não ao cumprimento de metas como tal; a ordem está trocada.",
      "Efetividade se mede pelo impacto, não apenas pela realização das visitas; as três posições estão deslocadas.",
      "A segunda lacuna trata de impacto concreto, e não de economia de recursos.",
      "Produtividade relaciona produtos e insumos; o primeiro dado do caso descreve alcance da meta."
    ],
    "comments": [
      "Correta: Alcançar a meta demonstra eficácia; gerar impacto social, efetividade; poupar recursos, eficiência.",
      "Incorreta: Eficiência está ligada ao uso de recursos, não ao cumprimento de metas como tal; a ordem está trocada.",
      "Incorreta: Efetividade se mede pelo impacto, não apenas pela realização das visitas; as três posições estão deslocadas.",
      "Incorreta: A segunda lacuna trata de impacto concreto, e não de economia de recursos.",
      "Incorreta: Produtividade relaciona produtos e insumos; o primeiro dado do caso descreve alcance da meta."
    ],
    "originalAnswer": 0,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-01-004-02": {
    "kind": "alternatives",
    "options": [
      null,
      null,
      null,
      null
    ],
    "reasons": [
      "Organizar distribui funções e meios de execução; o enunciado descreve definição prévia de metas.",
      "Dirigir mobiliza equipes para executar planos; estabelecer metas e caminhos é planejamento.",
      "Controlar compara resultados com padrões e corrige desvios; aqui são definidos objetivos futuros.",
      "Planejamento estabelece objetivos e define cursos de ação para alcançá-los."
    ],
    "comments": [
      "Incorreta: Organizar distribui funções e meios de execução; o enunciado descreve definição prévia de metas.",
      "Incorreta: Dirigir mobiliza equipes para executar planos; estabelecer metas e caminhos é planejamento.",
      "Incorreta: Controlar compara resultados com padrões e corrige desvios; aqui são definidos objetivos futuros.",
      "Correta: Planejamento estabelece objetivos e define cursos de ação para alcançá-los."
    ],
    "originalAnswer": 3,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-01-004-03": {
    "kind": "alternatives",
    "options": [
      null,
      null,
      null,
      null,
      null
    ],
    "reasons": [
      "A terceira posição deveria ser direção, mas o código 1 foi usado em lugar do código 3.",
      "Organização distribui responsabilidades; controle compara resultados; direção orienta; planejamento estabelece objetivos.",
      "A primeira posição corresponde à organização (2), não ao planejamento (1).",
      "A segunda posição descreve controle (4), e não direção (3).",
      "Distribuir responsabilidades não é controlar; a primeira e outras posições foram permutadas."
    ],
    "comments": [
      "Incorreta: A terceira posição deveria ser direção, mas o código 1 foi usado em lugar do código 3.",
      "Correta: Organização distribui responsabilidades; controle compara resultados; direção orienta; planejamento estabelece objetivos.",
      "Incorreta: A primeira posição corresponde à organização (2), não ao planejamento (1).",
      "Incorreta: A segunda posição descreve controle (4), e não direção (3).",
      "Incorreta: Distribuir responsabilidades não é controlar; a primeira e outras posições foram permutadas."
    ],
    "originalAnswer": 1,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-01-005-02": {
    "kind": "alternatives",
    "options": [
      "Tático, por traduzir diretrizes amplas em planos e metas de sua unidade.",
      "Estratégico, pois decisões de qualquer chefia departamental integram a estratégia institucional.",
      "Operacional, porque transformar diretrizes gerais em plano setorial equivale à rotina diária.",
      "De assessoramento, porque a chefia trata somente de estudos consultivos, não de execução."
    ],
    "reasons": [
      "O nível tático traduz diretrizes estratégicas em planos e ações para departamentos e unidades.",
      "O nível estratégico define rumos da organização como um todo, não apenas o plano específico de um departamento.",
      "O nível operacional detalha atividades e procedimentos; desdobramento setorial é típico do tático.",
      "Assessoramento é forma de apoio técnico; a chefia descreve direção setorial, própria do nível tático."
    ],
    "comments": [
      "Correta: O nível tático traduz diretrizes estratégicas em planos e ações para departamentos e unidades.",
      "Incorreta: O nível estratégico define rumos da organização como um todo, não apenas o plano específico de um departamento.",
      "Incorreta: O nível operacional detalha atividades e procedimentos; desdobramento setorial é típico do tático.",
      "Incorreta: Assessoramento é forma de apoio técnico; a chefia descreve direção setorial, própria do nível tático."
    ],
    "originalAnswer": 0,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-01-005-04": {
    "kind": "alternatives",
    "options": [
      "Níveis estratégicos e operacionais podem influenciar um ao outro por meio dos resultados produzidos.",
      "Decisões estratégicas tendem a abranger o conjunto da instituição e seus objetivos mais amplos.",
      "O nível tático traduz diretrizes organizacionais em programas voltados a suas áreas de atuação.",
      "No nível operacional predominam tarefas, procedimentos e acompanhamento da execução.",
      null
    ],
    "reasons": [
      "Os níveis trocam informações e resultados; isso é compatível com sua articulação.",
      "A amplitude institucional é típica do planejamento e das decisões estratégicas.",
      "A função de desdobramento setorial caracteriza atuação tática.",
      "A execução detalhada de tarefas é característica do nível operacional.",
      "A aprovação da alta direção não é necessária para cada decisão operacional; a autonomia depende das competências delegadas."
    ],
    "comments": [
      "Incorreta: Os níveis trocam informações e resultados; isso é compatível com sua articulação.",
      "Incorreta: A amplitude institucional é típica do planejamento e das decisões estratégicas.",
      "Incorreta: A função de desdobramento setorial caracteriza atuação tática.",
      "Incorreta: A execução detalhada de tarefas é característica do nível operacional.",
      "Correta: A aprovação da alta direção não é necessária para cada decisão operacional; a autonomia depende das competências delegadas."
    ],
    "originalAnswer": 4,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-01-006-02": {
    "kind": "alternatives",
    "options": [
      "Técnica, pela aplicação de instrumentos estruturados de mediação e de negociação.",
      "Humana, pela interação, escuta e mediação voltadas à cooperação entre pessoas.",
      "Conceitual, pela compreensão do impacto das relações interpessoais nos objetivos do setor.",
      "Administrativa, por coordenar recursos orçamentários durante conflitos de equipe."
    ],
    "reasons": [
      "Técnicas de mediação podem ser usadas, mas a capacidade central exigida é interpessoal, própria da habilidade humana.",
      "A habilidade humana envolve comunicação, cooperação e mediação de conflitos entre pessoas.",
      "Habilidade conceitual privilegia visão sistêmica, não a interação interpessoal que predomina no exemplo.",
      "Controle de recursos orçamentários não define a habilidade predominante no caso de mediação."
    ],
    "comments": [
      "Incorreta: Técnicas de mediação podem ser usadas, mas a capacidade central exigida é interpessoal, própria da habilidade humana.",
      "Correta: A habilidade humana envolve comunicação, cooperação e mediação de conflitos entre pessoas.",
      "Incorreta: Habilidade conceitual privilegia visão sistêmica, não a interação interpessoal que predomina no exemplo.",
      "Incorreta: Controle de recursos orçamentários não define a habilidade predominante no caso de mediação."
    ],
    "originalAnswer": 1,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-01-006-03": {
    "kind": "alternatives",
    "options": [
      null,
      null,
      null,
      null,
      null
    ],
    "reasons": [
      "Visão sistêmica é conceitual (3), uso de método específico é técnico (1) e mediação é humana (2).",
      "A primeira atividade requer visão sistêmica (3), e não execução de procedimentos técnicos (1).",
      "A segunda atividade corresponde à habilidade técnica (1), e não à humana (2).",
      "A primeira atividade é conceitual (3), e não humana (2); mediação é a habilidade humana.",
      "A visão sistêmica não é técnica (1) e a mediação não é conceitual (3) no enfoque de Katz."
    ],
    "comments": [
      "Correta: Visão sistêmica é conceitual (3), uso de método específico é técnico (1) e mediação é humana (2).",
      "Incorreta: A primeira atividade requer visão sistêmica (3), e não execução de procedimentos técnicos (1).",
      "Incorreta: A segunda atividade corresponde à habilidade técnica (1), e não à humana (2).",
      "Incorreta: A primeira atividade é conceitual (3), e não humana (2); mediação é a habilidade humana.",
      "Incorreta: A visão sistêmica não é técnica (1) e a mediação não é conceitual (3) no enfoque de Katz."
    ],
    "originalAnswer": 0,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-02-001-02": {
    "kind": "alternatives",
    "options": [
      "O acompanhamento dos resultados permite replanejar ações e redistribuir equipes, articulando controle e organização.",
      "O ajuste representa exclusivamente organização, pois a medição mensal não interfere nas decisões futuras.",
      "O controle avalia os resultados, mas o planejamento mantém necessariamente os meios inicialmente previstos.",
      "A revisão da distribuição de equipes integra a direção, sem relação com dados de desempenho."
    ],
    "reasons": [
      "Os dados de controle fundamentam ajustes de planejamento e de organização dos recursos.",
      "A distribuição de tarefas é organização, mas a decisão foi informada pelo controle; as funções atuam juntas.",
      "O controle também subsidia replanejamento e mudanças de meios, não apenas julgamento do resultado.",
      "A orientação de equipes pode envolver direção, mas o caso destaca controle e organização articulados."
    ],
    "comments": [
      "Correta: Os dados de controle fundamentam ajustes de planejamento e de organização dos recursos.",
      "Incorreta: A distribuição de tarefas é organização, mas a decisão foi informada pelo controle; as funções atuam juntas.",
      "Incorreta: O controle também subsidia replanejamento e mudanças de meios, não apenas julgamento do resultado.",
      "Incorreta: A orientação de equipes pode envolver direção, mas o caso destaca controle e organização articulados."
    ],
    "originalAnswer": 0,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-02-001-04": {
    "kind": "alternatives",
    "options": [
      "O acompanhamento de resultados permite revisar prioridades quando os indicadores se afastam dos padrões previstos.",
      "O controle administrativo se limita à avaliação final e não participa de correções durante a execução.",
      "A definição de objetivos e a alocação de recursos podem ser revisitadas à luz dos resultados.",
      "As funções administrativas mantêm finalidades próprias, mas operam de forma interdependente.",
      "Indicadores de desempenho podem indicar a necessidade de redistribuição das equipes entre atividades."
    ],
    "reasons": [
      "Rever prioridades com base em resultados é consistente com a integração entre planejamento e controle.",
      "A função controle pode atuar durante a execução e alimentar mudanças; não se restringe ao fechamento das atividades.",
      "Metas e distribuição de recursos podem ser ajustadas diante de evidências de desempenho.",
      "Planejamento, organização, direção e controle são distintos e interdependentes.",
      "Acompanhar resultados pode fundamentar uma reorganização dos recursos disponíveis."
    ],
    "comments": [
      "Incorreta: Rever prioridades com base em resultados é consistente com a integração entre planejamento e controle.",
      "Correta: A função controle pode atuar durante a execução e alimentar mudanças; não se restringe ao fechamento das atividades.",
      "Incorreta: Metas e distribuição de recursos podem ser ajustadas diante de evidências de desempenho.",
      "Incorreta: Planejamento, organização, direção e controle são distintos e interdependentes.",
      "Incorreta: Acompanhar resultados pode fundamentar uma reorganização dos recursos disponíveis."
    ],
    "originalAnswer": 1,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-02-002-02": {
    "kind": "alternatives",
    "options": [
      "A escolha deve priorizar a alternativa com maior alcance imediato, deixando a avaliação de recursos para a execução.",
      "A redução de custos deve definir a escolha mesmo quando compromete o nível mínimo de atendimento previsto.",
      "O planejamento escolhe a solução de maior capacidade operacional, independentemente dos recursos disponíveis.",
      null
    ],
    "reasons": [
      "A decisão não pode dispensar exame prévio de recursos, restrições e consequências das alternativas.",
      "A redução de custos não deve prevalecer quando inviabiliza o patamar mínimo de atendimento estipulado.",
      "A capacidade é relevante, mas a decisão precisa considerar viabilidade financeira, restrições e impactos.",
      "Comparar cursos de ação, custos e limitações permite escolher de modo fundamentado."
    ],
    "comments": [
      "Incorreta: A decisão não pode dispensar exame prévio de recursos, restrições e consequências das alternativas.",
      "Incorreta: A redução de custos não deve prevalecer quando inviabiliza o patamar mínimo de atendimento estipulado.",
      "Incorreta: A capacidade é relevante, mas a decisão precisa considerar viabilidade financeira, restrições e impactos.",
      "Correta: Comparar cursos de ação, custos e limitações permite escolher de modo fundamentado."
    ],
    "originalAnswer": 3,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-02-002-04": {
    "kind": "alternatives",
    "options": [
      "A elaboração de um plano converte hipóteses e estimativas em uma previsão suficientemente segura para dispensar revisões posteriores.",
      "O planejamento em órgãos públicos deve relacionar objetivos, capacidade operacional e disponibilidade de recursos.",
      "A tomada de decisão costuma comparar custos, benefícios e riscos das alternativas consideradas.",
      "Planejar envolve analisar o problema e estabelecer cursos de ação, com ajustes diante de novas informações.",
      "A definição de critérios de escolha contribui para justificar a decisão administrativa."
    ],
    "reasons": [
      "O planejamento reduz incertezas, mas não as elimina; revisões permanecem necessárias conforme o contexto muda.",
      "Restrições e objetivos precisam ser considerados no planejamento público.",
      "Comparar consequências e riscos sustenta a decisão entre cursos de ação.",
      "O planejamento é um processo ajustável, não uma previsão imutável.",
      "Critérios explícitos permitem comparar alternativas e justificar escolhas."
    ],
    "comments": [
      "Correta: O planejamento reduz incertezas, mas não as elimina; revisões permanecem necessárias conforme o contexto muda.",
      "Incorreta: Restrições e objetivos precisam ser considerados no planejamento público.",
      "Incorreta: Comparar consequências e riscos sustenta a decisão entre cursos de ação.",
      "Incorreta: O planejamento é um processo ajustável, não uma previsão imutável.",
      "Incorreta: Critérios explícitos permitem comparar alternativas e justificar escolhas."
    ],
    "originalAnswer": 0,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-02-003-02": {
    "kind": "alternatives",
    "options": [
      "Distribuir tarefas é parte da organização, desde que a coordenação entre setores seja tratada em etapa posterior independente.",
      "A divisão de equipes deve ser acompanhada da definição de atribuições, mas isso caracteriza predominantemente direção.",
      "Atribuir tarefas, distribuir autoridades e estabelecer relações de responsabilidade caracteriza a função organização.",
      "A atribuição formal de responsabilidades é atividade de controle, porque estabelece quem responde pelos resultados."
    ],
    "reasons": [
      "Organização inclui relações de autoridade e coordenação entre áreas; elas não precisam esperar por outra função.",
      "Definir atribuições e relações estruturais é organizar; direção se concentra em liderar e mobilizar pessoas.",
      "Estruturar equipes, tarefas e responsabilidades caracteriza a função organização.",
      "Controle acompanha resultados; distribuir papéis e autoridade pertence principalmente à organização."
    ],
    "comments": [
      "Incorreta: Organização inclui relações de autoridade e coordenação entre áreas; elas não precisam esperar por outra função.",
      "Incorreta: Definir atribuições e relações estruturais é organizar; direção se concentra em liderar e mobilizar pessoas.",
      "Correta: Estruturar equipes, tarefas e responsabilidades caracteriza a função organização.",
      "Incorreta: Controle acompanha resultados; distribuir papéis e autoridade pertence principalmente à organização."
    ],
    "originalAnswer": 2,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-02-003-04": {
    "kind": "alternatives",
    "options": [
      null,
      null,
      null,
      null,
      null
    ],
    "reasons": [
      "Orientar pessoas corresponde à direção (3), não ao controle (4); comparar resultados é controle (4), não direção (3).",
      "Organização, planejamento, direção e controle correspondem, nessa ordem, às quatro atividades.",
      "A atribuição de tarefas não é planejamento, mas organização.",
      "Na segunda posição exige-se planejamento (1), não direção (3).",
      "A primeira posição é organização (2), e não direção (3); a terceira pede direção (3)."
    ],
    "comments": [
      "Incorreta: Orientar pessoas corresponde à direção (3), não ao controle (4); comparar resultados é controle (4), não direção (3).",
      "Correta: Organização, planejamento, direção e controle correspondem, nessa ordem, às quatro atividades.",
      "Incorreta: A atribuição de tarefas não é planejamento, mas organização.",
      "Incorreta: Na segunda posição exige-se planejamento (1), não direção (3).",
      "Incorreta: A primeira posição é organização (2), e não direção (3); a terceira pede direção (3)."
    ],
    "originalAnswer": 1,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-02-004-02": {
    "kind": "alternatives",
    "options": [
      "A mediação de conflitos é um controle corretivo, e a explicação de prioridades é apenas comunicação informal.",
      "A orientação das prioridades e a mediação de conflitos integram a direção, pois mobilizam equipes.",
      "A orientação dos servidores integra a organização, pois corresponde à redistribuição de tarefas e responsabilidades.",
      "A chefia utiliza planejamento exclusivamente, porque define uma prioridade e procura adesão de equipes."
    ],
    "reasons": [
      "A correção de desvios pode envolver controle, mas orientar e mobilizar pessoas é característico da direção.",
      "Direção abrange comunicação, liderança e mediação de conflitos para mobilizar equipes.",
      "A organização estrutura atribuições; a situação centra-se na condução de pessoas.",
      "Prioridades podem decorrer do planejamento, mas a execução envolve orientar e negociar com pessoas."
    ],
    "comments": [
      "Incorreta: A correção de desvios pode envolver controle, mas orientar e mobilizar pessoas é característico da direção.",
      "Correta: Direção abrange comunicação, liderança e mediação de conflitos para mobilizar equipes.",
      "Incorreta: A organização estrutura atribuições; a situação centra-se na condução de pessoas.",
      "Incorreta: Prioridades podem decorrer do planejamento, mas a execução envolve orientar e negociar com pessoas."
    ],
    "originalAnswer": 1,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-02-004-04": {
    "kind": "alternatives",
    "options": [
      "A direção inclui orientação de equipes, comunicação das prioridades e resolução de divergências na execução.",
      "A coordenação busca compatibilizar esforços de setores, reduzindo conflitos entre atividades interdependentes.",
      "A liderança pode utilizar comunicação e negociação para facilitar a execução dos objetivos planejados.",
      "A função direção privilegia o acompanhamento de relatórios contábeis, tratando a condução de pessoas como tarefa secundária.",
      "Conflitos entre equipes podem exigir intervenção da chefia para recuperar a cooperação em torno das metas."
    ],
    "reasons": [
      "A comunicação e a orientação compõem a função direção, por isso esta alternativa está correta.",
      "Coordenação integra atividades e pode prevenir esforços incompatíveis.",
      "Negociação e comunicação fazem parte da condução de pessoas.",
      "Relatórios contábeis podem subsidiar a gestão, mas dirigir não é função centrada neles; mobilizar pessoas é essencial.",
      "Medir conflitos e mediar soluções pode contribuir para o desempenho das equipes."
    ],
    "comments": [
      "Incorreta: A comunicação e a orientação compõem a função direção, por isso esta alternativa está correta.",
      "Incorreta: Coordenação integra atividades e pode prevenir esforços incompatíveis.",
      "Incorreta: Negociação e comunicação fazem parte da condução de pessoas.",
      "Correta: Relatórios contábeis podem subsidiar a gestão, mas dirigir não é função centrada neles; mobilizar pessoas é essencial.",
      "Incorreta: Medir conflitos e mediar soluções pode contribuir para o desempenho das equipes."
    ],
    "originalAnswer": 3,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-02-005-02": {
    "kind": "alternatives",
    "options": [
      "Medir a diferença diante de metas e ajustar o fluxo constitui uma aplicação da função controle.",
      "A revisão de fluxo é controle apenas quando vem depois do encerramento do período de avaliação.",
      "Comparar o tempo de atendimento à meta integra o planejamento, enquanto controle se limita a medir custos.",
      "A correção de fluxo caracteriza organização, mas não utiliza o resultado obtido pelo controle."
    ],
    "reasons": [
      "Controle envolve estabelecer padrão, medir desempenho, comparar resultados e corrigir desvios.",
      "O controle também pode ocorrer durante a execução e fornecer retorno imediato.",
      "A comparação com metas é etapa típica do controle, não exclusiva do planejamento.",
      "Organizar o fluxo pode ser parte da correção, mas foi desencadeado pela medição e comparação de resultados."
    ],
    "comments": [
      "Correta: Controle envolve estabelecer padrão, medir desempenho, comparar resultados e corrigir desvios.",
      "Incorreta: O controle também pode ocorrer durante a execução e fornecer retorno imediato.",
      "Incorreta: A comparação com metas é etapa típica do controle, não exclusiva do planejamento.",
      "Incorreta: Organizar o fluxo pode ser parte da correção, mas foi desencadeado pela medição e comparação de resultados."
    ],
    "originalAnswer": 0,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-02-005-04": {
    "kind": "alternatives",
    "options": [
      "O controle pode utilizar metas e indicadores para identificar desvios no tempo de atendimento de um setor.",
      "A análise dos resultados de controle pode indicar necessidade de rever os meios de execução planejados.",
      "A atividade de controle se encerra com a identificação do responsável pelo desvio, sem exigir exame de suas causas.",
      "A escolha de ações corretivas depende do tipo de desvio e do padrão utilizado para aferir o desempenho.",
      "A comparação entre resultados observados e parâmetros esperados integra a função controle."
    ],
    "reasons": [
      "Comparar o resultado com o padrão é procedimento normal da função controle.",
      "O controle realimenta decisões e pode exigir adaptações dos métodos de trabalho.",
      "Controle envolve avaliar causas e promover medidas corretivas; não se limita a responsabilizar alguém.",
      "A correção deve responder ao problema constatado e pode requerer investigação adicional.",
      "Confrontar desempenho real e padrão desejado é etapa do controle."
    ],
    "comments": [
      "Incorreta: Comparar o resultado com o padrão é procedimento normal da função controle.",
      "Incorreta: O controle realimenta decisões e pode exigir adaptações dos métodos de trabalho.",
      "Correta: Controle envolve avaliar causas e promover medidas corretivas; não se limita a responsabilizar alguém.",
      "Incorreta: A correção deve responder ao problema constatado e pode requerer investigação adicional.",
      "Incorreta: Confrontar desempenho real e padrão desejado é etapa do controle."
    ],
    "originalAnswer": 2,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-02-006-02": {
    "kind": "alternatives",
    "options": [
      "A ausência de lucro muda a finalidade do planejamento, tornando a mensuração de serviços facultativa quando a população é atendida.",
      "A escala de profissionais corresponde à função direção e independe da definição de metas ou dos recursos.",
      "A medição de cobertura pertence ao planejamento inicial; após definir a meta, o controle se torna dispensável.",
      "Planejamento, organização e controle são integrados para definir metas, mobilizar equipes e acompanhar cobertura pública."
    ],
    "reasons": [
      "Serviços públicos também precisam de metas e indicadores, mesmo sem objetivo de lucro.",
      "Escalar recursos humanos envolve organização; os meios devem ser compatíveis com metas e limitações.",
      "A cobertura alcançada precisa ser acompanhada para avaliar resultados e ajustar ações.",
      "Definir metas, organizar equipes e controlar a cobertura são funções integradas da gestão pública."
    ],
    "comments": [
      "Incorreta: Serviços públicos também precisam de metas e indicadores, mesmo sem objetivo de lucro.",
      "Incorreta: Escalar recursos humanos envolve organização; os meios devem ser compatíveis com metas e limitações.",
      "Incorreta: A cobertura alcançada precisa ser acompanhada para avaliar resultados e ajustar ações.",
      "Correta: Definir metas, organizar equipes e controlar a cobertura são funções integradas da gestão pública."
    ],
    "originalAnswer": 3,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-02-006-04": {
    "kind": "alternatives",
    "options": [
      "A gestão pública utiliza planejamento para definir prioridades compatíveis com as demandas coletivas e os recursos disponíveis.",
      "A administração pública pode concentrar-se no cumprimento do orçamento, dispensando medir resultados de serviços sem finalidade comercial.",
      "A organização de equipes e recursos permite executar ações ligadas a objetivos definidos pelo órgão público.",
      "O controle da cobertura e da qualidade do serviço contribui para ajustes na prestação das políticas públicas.",
      "Planejamento, organização, direção e controle podem ser aplicados a serviços de atendimento ao cidadão."
    ],
    "reasons": [
      "Planejar ações com recursos limitados é necessidade também de entidades públicas.",
      "A ausência de fins lucrativos não dispensa avaliar efetividade, qualidade e resultados dos serviços.",
      "A função organização estrutura meios para viabilizar os objetivos.",
      "Controle e avaliação permitem correções nos serviços e nos processos.",
      "As quatro funções administrativas são aplicáveis ao contexto de serviços públicos."
    ],
    "comments": [
      "Incorreta: Planejar ações com recursos limitados é necessidade também de entidades públicas.",
      "Correta: A ausência de fins lucrativos não dispensa avaliar efetividade, qualidade e resultados dos serviços.",
      "Incorreta: A função organização estrutura meios para viabilizar os objetivos.",
      "Incorreta: Controle e avaliação permitem correções nos serviços e nos processos.",
      "Incorreta: As quatro funções administrativas são aplicáveis ao contexto de serviços públicos."
    ],
    "originalAnswer": 1,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-03-001-02": {
    "kind": "alternatives",
    "options": [
      "Os planos das faculdades são táticos porque definem processos institucionais sem vínculo obrigatório com as diretrizes gerais.",
      "O planejamento operacional reúne metas e rotinas setoriais, cabendo ao nível tático fixar as diretrizes da instituição.",
      null,
      "As escalas semanais podem expressar prioridades estratégicas, mas correspondem ao planejamento tático por definir responsáveis."
    ],
    "reasons": [
      "Os planos são táticos, mas devem manter alinhamento com as diretrizes institucionais.",
      "Diretrizes de alcance institucional são estratégicas; rotinas detalhadas caracterizam o operacional.",
      "Diretrizes gerais, planos por unidade e escalas de execução correspondem ao estratégico, tático e operacional.",
      "Escalas e atribuições semanais são operacionais, ainda que contribuam para objetivos estratégicos."
    ],
    "comments": [
      "Incorreta: Os planos são táticos, mas devem manter alinhamento com as diretrizes institucionais.",
      "Incorreta: Diretrizes de alcance institucional são estratégicas; rotinas detalhadas caracterizam o operacional.",
      "Correta: Diretrizes gerais, planos por unidade e escalas de execução correspondem ao estratégico, tático e operacional.",
      "Incorreta: Escalas e atribuições semanais são operacionais, ainda que contribuam para objetivos estratégicos."
    ],
    "originalAnswer": 2,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-03-001-04": {
    "kind": "alternatives",
    "options": [
      null,
      null,
      null,
      null,
      null
    ],
    "reasons": [
      "O plano departamental é tático (2), não operacional (3), enquanto a escala diária é operacional (3), não tática (2).",
      "O plano departamental não é operacional (3); a primeira posição corresponde ao tático (2).",
      "Alinhamento não representa a diretriz institucional em si; a terceira posição deve ser estratégico (1).",
      "A primeira posição corresponde ao tático (2), não à formulação estratégica (1).",
      "A escala diária é operacional (3), e não diretriz estratégica (1)."
    ],
    "comments": [
      "Incorreta: O plano departamental é tático (2), não operacional (3), enquanto a escala diária é operacional (3), não tática (2).",
      "Incorreta: O plano departamental não é operacional (3); a primeira posição corresponde ao tático (2).",
      "Correta: Alinhamento não representa a diretriz institucional em si; a terceira posição deve ser estratégico (1).",
      "Incorreta: A primeira posição corresponde ao tático (2), não à formulação estratégica (1).",
      "Incorreta: A escala diária é operacional (3), e não diretriz estratégica (1)."
    ],
    "originalAnswer": 2,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-03-002-02": {
    "kind": "alternatives",
    "options": [
      "A tríade distingue o propósito presente, mas trata a visão principalmente como o conjunto de normas de conduta.",
      null,
      "A missão expressa o propósito institucional e os valores descrevem o desempenho projetado para o futuro.",
      "A visão representa o futuro pretendido, enquanto a missão define prioritariamente os princípios de comportamento."
    ],
    "reasons": [
      "A visão se refere ao futuro desejado; normas de conduta são mais próximas de valores.",
      "Missão, visão e valores representam propósito presente, futuro desejado e princípios orientadores, respectivamente.",
      "Valores orientam comportamentos e decisões; futuro desejado é visão, não valores.",
      "O propósito institucional pertence à missão; princípios de comportamento pertencem aos valores."
    ],
    "comments": [
      "Incorreta: A visão se refere ao futuro desejado; normas de conduta são mais próximas de valores.",
      "Correta: Missão, visão e valores representam propósito presente, futuro desejado e princípios orientadores, respectivamente.",
      "Incorreta: Valores orientam comportamentos e decisões; futuro desejado é visão, não valores.",
      "Incorreta: O propósito institucional pertence à missão; princípios de comportamento pertencem aos valores."
    ],
    "originalAnswer": 1,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-03-002-04": {
    "kind": "alternatives",
    "options": [
      null,
      null,
      null,
      null,
      null
    ],
    "reasons": [
      "A missão descreve o propósito atual, não a visão; estratégia não é equivalente a futuro desejado.",
      "Missão indica propósito, visão o futuro e valores os princípios de conduta.",
      "A missão não é visão; indicadores não cumprem o papel dos valores.",
      "A segunda lacuna pede visão, enquanto valores são o conteúdo da terceira.",
      "Estratégia é curso de ação, não o propósito institucional; prazos não são valores."
    ],
    "comments": [
      "Incorreta: A missão descreve o propósito atual, não a visão; estratégia não é equivalente a futuro desejado.",
      "Correta: Missão indica propósito, visão o futuro e valores os princípios de conduta.",
      "Incorreta: A missão não é visão; indicadores não cumprem o papel dos valores.",
      "Incorreta: A segunda lacuna pede visão, enquanto valores são o conteúdo da terceira.",
      "Incorreta: Estratégia é curso de ação, não o propósito institucional; prazos não são valores."
    ],
    "originalAnswer": 1,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-03-003-02": {
    "kind": "alternatives",
    "options": [
      null,
      "A redução de filas é a estratégia, enquanto o percentual de 20% representa o objetivo qualitativo do órgão.",
      "A previsão de doze meses integra o objetivo institucional, e o percentual representa o plano de ação já definido.",
      "A redução percentual quantifica o objetivo, enquanto a escolha das ações específicas deixa de integrar a estratégia."
    ],
    "reasons": [
      "Objetivo define o resultado desejado; percentual e prazo tornam esse resultado mensurável como meta.",
      "Reduzir filas é objetivo; a estratégia é o caminho a seguir, ainda não indicado no caso.",
      "Prazo e percentual compõem a meta, não substituem o plano detalhado de execução.",
      "A meta quantifica o resultado, mas a estratégia ainda precisa indicar caminhos para alcançá-lo."
    ],
    "comments": [
      "Correta: Objetivo define o resultado desejado; percentual e prazo tornam esse resultado mensurável como meta.",
      "Incorreta: Reduzir filas é objetivo; a estratégia é o caminho a seguir, ainda não indicado no caso.",
      "Incorreta: Prazo e percentual compõem a meta, não substituem o plano detalhado de execução.",
      "Incorreta: A meta quantifica o resultado, mas a estratégia ainda precisa indicar caminhos para alcançá-lo."
    ],
    "originalAnswer": 0,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-03-003-04": {
    "kind": "alternatives",
    "options": [
      "Objetivos identificam resultados desejados; metas incorporam parâmetros de acompanhamento e estratégias indicam caminhos de ação.",
      "A meta de reduzir filas em 20% durante doze meses torna mais verificável o objetivo de melhorar o atendimento.",
      "Planos podem explicitar responsáveis e recursos necessários à execução de uma estratégia escolhida.",
      "O acompanhamento de metas depende apenas da intenção declarada pelo gestor, sem necessidade de referência mensurável.",
      "A execução do plano pode exigir revisão da estratégia se os indicadores mostrarem resultados insatisfatórios."
    ],
    "reasons": [
      "Objetivos, metas e estratégias cumprem papéis distintos, mas complementares.",
      "Percentual e prazo tornam a meta verificável.",
      "Planos detalham como executar iniciativas e distribuir responsabilidades.",
      "Metas requerem parâmetros verificáveis; intenção genérica sem indicador dificulta mensuração.",
      "Acompanhar indicadores permite revisar ações para perseguir objetivos."
    ],
    "comments": [
      "Incorreta: Objetivos, metas e estratégias cumprem papéis distintos, mas complementares.",
      "Incorreta: Percentual e prazo tornam a meta verificável.",
      "Incorreta: Planos detalham como executar iniciativas e distribuir responsabilidades.",
      "Correta: Metas requerem parâmetros verificáveis; intenção genérica sem indicador dificulta mensuração.",
      "Incorreta: Acompanhar indicadores permite revisar ações para perseguir objetivos."
    ],
    "originalAnswer": 3,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-03-004-02": {
    "kind": "alternatives",
    "options": [
      "A experiência profissional da equipe é força interna, e o aumento da demanda também é interno por ocorrer dentro da unidade.",
      "A qualificação da equipe é uma oportunidade externa porque amplia a capacidade de atendimento.",
      "A variação de demanda é fraqueza interna quando exige reorganizar horários e alocar servidores.",
      null
    ],
    "reasons": [
      "O aumento da demanda é fenômeno do ambiente externo, mesmo produzindo efeitos sobre o órgão.",
      "A qualificação da equipe é característica da própria organização, portanto força interna.",
      "A demanda pertence ao ambiente externo; seu impacto pode expor uma fraqueza interna, mas não muda sua origem.",
      "A experiência da equipe é força interna; a alteração da demanda é fator externo a ser classificado conforme o contexto."
    ],
    "comments": [
      "Incorreta: O aumento da demanda é fenômeno do ambiente externo, mesmo produzindo efeitos sobre o órgão.",
      "Incorreta: A qualificação da equipe é característica da própria organização, portanto força interna.",
      "Incorreta: A demanda pertence ao ambiente externo; seu impacto pode expor uma fraqueza interna, mas não muda sua origem.",
      "Correta: A experiência da equipe é força interna; a alteração da demanda é fator externo a ser classificado conforme o contexto."
    ],
    "originalAnswer": 3,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-03-004-04": {
    "kind": "alternatives",
    "options": [
      null,
      null,
      null,
      null,
      null
    ],
    "reasons": [
      "Qualificação de equipe é atributo interno; alterações regulatórias têm origem externa.",
      "A matriz SWOT classifica fatores como internos ou externos, não prioritariamente em financeiros e operacionais.",
      "A qualificação continua interna, mesmo afetando oportunidades de atendimento.",
      "Mudanças regulatórias externas não são fatores internos, ainda que exijam mudanças na organização.",
      "Qualificação é fator interno; a mudança regulatória se origina no ambiente externo."
    ],
    "comments": [
      "Incorreta: Qualificação de equipe é atributo interno; alterações regulatórias têm origem externa.",
      "Incorreta: A matriz SWOT classifica fatores como internos ou externos, não prioritariamente em financeiros e operacionais.",
      "Incorreta: A qualificação continua interna, mesmo afetando oportunidades de atendimento.",
      "Incorreta: Mudanças regulatórias externas não são fatores internos, ainda que exijam mudanças na organização.",
      "Correta: Qualificação é fator interno; a mudança regulatória se origina no ambiente externo."
    ],
    "originalAnswer": 4,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-03-005-02": {
    "kind": "alternatives",
    "options": [
      "A satisfação do cidadão representa a dimensão de resultados, tornando o monitoramento de processos apenas um indicador auxiliar da mesma perspectiva.",
      "A capacitação é dimensão de aprendizado, que deve ser aferida somente após concluir os resultados financeiros projetados.",
      "O acompanhamento combina indicadores sobre resultados para o cidadão, desempenho dos processos e aprendizado da equipe.",
      "A avaliação de processos internos pode ser integrada ao BSC, mas os indicadores de capacitação pertencem exclusivamente à gestão de pessoas."
    ],
    "reasons": [
      "Satisfação do cidadão e processos internos são perspectivas distintas e complementares, não a mesma métrica.",
      "Aprendizado e desenvolvimento podem ser acompanhados durante a execução da estratégia, não só depois de resultados financeiros.",
      "BSC integra indicadores de resultados, processos e aprendizado, ajustados à instituição.",
      "Capacitação pode integrar os indicadores estratégicos de aprendizado, não apenas controles isolados de pessoal."
    ],
    "comments": [
      "Incorreta: Satisfação do cidadão e processos internos são perspectivas distintas e complementares, não a mesma métrica.",
      "Incorreta: Aprendizado e desenvolvimento podem ser acompanhados durante a execução da estratégia, não só depois de resultados financeiros.",
      "Correta: BSC integra indicadores de resultados, processos e aprendizado, ajustados à instituição.",
      "Incorreta: Capacitação pode integrar os indicadores estratégicos de aprendizado, não apenas controles isolados de pessoal."
    ],
    "originalAnswer": 2,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-03-005-04": {
    "kind": "alternatives",
    "options": [
      "Indicadores de processos podem explicar resultados e sugerir iniciativas de melhoria operacional.",
      "O BSC concentra sua avaliação nas metas financeiras, tratando aprendizagem e processos como medidas externas ao mapa estratégico.",
      "No serviço público, perspectivas de atendimento e satisfação podem integrar a adaptação do mapa estratégico.",
      "A articulação de objetivos e indicadores em perspectivas ajuda a acompanhar a execução da estratégia institucional.",
      "Capacitação e processos internos podem ser associados a melhores resultados para a população atendida."
    ],
    "reasons": [
      "A perspectiva de processos internos permite discutir resultados e possíveis melhorias.",
      "BSC articula também processos, público atendido e aprendizado, não apenas metas financeiras.",
      "A adaptação do BSC à finalidade pública pode privilegiar o cidadão e o valor público.",
      "BSC combina perspectivas e medidas para acompanhar a estratégia.",
      "Aprendizado e processos podem sustentar resultados; relações causais devem ser examinadas."
    ],
    "comments": [
      "Incorreta: A perspectiva de processos internos permite discutir resultados e possíveis melhorias.",
      "Correta: BSC articula também processos, público atendido e aprendizado, não apenas metas financeiras.",
      "Incorreta: A adaptação do BSC à finalidade pública pode privilegiar o cidadão e o valor público.",
      "Incorreta: BSC combina perspectivas e medidas para acompanhar a estratégia.",
      "Incorreta: Aprendizado e processos podem sustentar resultados; relações causais devem ser examinadas."
    ],
    "originalAnswer": 1,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-03-006-02": {
    "kind": "alternatives",
    "options": [
      "O tempo de atendimento é indicador de resultado, e a capacitação comprova a causa de sua variação quando ambos são monitorados.",
      null,
      "O mapa estratégico registra ações executadas e, por isso, a capacitação deve ser tratada como indicador financeiro.",
      "O prazo médio de resposta constitui um objetivo abstrato; a relação com a capacitação é irrelevante para o mapa estratégico."
    ],
    "reasons": [
      "Indicadores não comprovam, isoladamente, causalidade; a relação com capacitação é uma hipótese a examinar.",
      "Prazo médio é indicador; o mapa estratégico pode explicitar hipótese de relação entre capacitação e resultado.",
      "Capacitação é iniciativa ou aspecto de aprendizado, não indicador financeiro por definição.",
      "O prazo pode medir um objetivo de serviço e a capacitação pode estar ligada à melhoria do processo."
    ],
    "comments": [
      "Incorreta: Indicadores não comprovam, isoladamente, causalidade; a relação com capacitação é uma hipótese a examinar.",
      "Correta: Prazo médio é indicador; o mapa estratégico pode explicitar hipótese de relação entre capacitação e resultado.",
      "Incorreta: Capacitação é iniciativa ou aspecto de aprendizado, não indicador financeiro por definição.",
      "Incorreta: O prazo pode medir um objetivo de serviço e a capacitação pode estar ligada à melhoria do processo."
    ],
    "originalAnswer": 1,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-03-006-04": {
    "kind": "alternatives",
    "options": [
      "A correlação entre um indicador e uma iniciativa basta para comprovar a influência causal exclusiva dessa iniciativa no resultado.",
      "Indicadores de tempo de atendimento permitem acompanhar variações de desempenho e identificar tendências.",
      "Mapas estratégicos podem representar relações hipotéticas entre objetivos ligados a pessoas, processos e resultados.",
      "Capacitação pode integrar iniciativas associadas à melhoria de processos e à qualidade dos serviços.",
      "O acompanhamento de indicadores pode orientar decisões e reavaliação dos resultados pretendidos."
    ],
    "reasons": [
      "Correlação não demonstra, por si só, causalidade exclusiva; outras variáveis podem explicar o resultado.",
      "A série de um indicador ajuda a acompanhar evolução e tendências operacionais.",
      "O mapa explicita hipóteses de relação entre objetivos de perspectivas distintas.",
      "Capacitação pode apoiar processos, embora seu efeito deva ser avaliado.",
      "Indicadores apoiam monitoramento e revisão estratégica."
    ],
    "comments": [
      "Correta: Correlação não demonstra, por si só, causalidade exclusiva; outras variáveis podem explicar o resultado.",
      "Incorreta: A série de um indicador ajuda a acompanhar evolução e tendências operacionais.",
      "Incorreta: O mapa explicita hipóteses de relação entre objetivos de perspectivas distintas.",
      "Incorreta: Capacitação pode apoiar processos, embora seu efeito deva ser avaliado.",
      "Incorreta: Indicadores apoiam monitoramento e revisão estratégica."
    ],
    "originalAnswer": 0,
    "revision": "DISTRATORES-E-COMENTARIOS"
  },
  "Q-ADM-01-002-04": {
    "kind": "vf",
    "statements": [
      "Dados confiáveis sobre demanda podem fundamentar a alocação de servidores.",
      "Computadores utilizados no atendimento são recursos materiais e tecnológicos.",
      "A dotação orçamentária integra recursos informacionais, pois aparece em relatórios.",
      "A capacitação de servidores fortalece os recursos humanos da organização."
    ],
    "truth": [
      true,
      true,
      false,
      true
    ],
    "evidence": [
      "Informações sobre demanda permitem planejar recursos e atividades.",
      "Equipamentos de informática são meios materiais e tecnológicos de trabalho.",
      "A dotação registrada continua sendo recurso financeiro, não informacional.",
      "Capacitação desenvolve conhecimentos e competências dos recursos humanos."
    ],
    "choices": [
      "F – F – F – V",
      "V – V – F – V",
      "F – V – V – V",
      "F – V – F – F",
      "V – F – V – V"
    ],
    "answer": 1,
    "versioned": true,
    "comments": [
      "Incorreta: A afirmação I é verdadeira: Informações sobre demanda permitem planejar recursos e atividades. A afirmação II é verdadeira: Equipamentos de informática são meios materiais e tecnológicos de trabalho.",
      "Correta: I: Informações sobre demanda permitem planejar recursos e atividades. II: Equipamentos de informática são meios materiais e tecnológicos de trabalho. III: A dotação registrada continua sendo recurso financeiro, não informacional. IV: Capacitação desenvolve conhecimentos e competências dos recursos humanos.",
      "Incorreta: A afirmação I é verdadeira: Informações sobre demanda permitem planejar recursos e atividades. A afirmação III é falsa: A dotação registrada continua sendo recurso financeiro, não informacional.",
      "Incorreta: A afirmação I é verdadeira: Informações sobre demanda permitem planejar recursos e atividades. A afirmação IV é verdadeira: Capacitação desenvolve conhecimentos e competências dos recursos humanos.",
      "Incorreta: A afirmação II é verdadeira: Equipamentos de informática são meios materiais e tecnológicos de trabalho. A afirmação III é falsa: A dotação registrada continua sendo recurso financeiro, não informacional."
    ],
    "stem": "Julgue as afirmações e assinale a sequência correta (V/F).\nI. Dados confiáveis sobre demanda podem fundamentar a alocação de servidores.\nII. Computadores utilizados no atendimento são recursos materiais e tecnológicos.\nIII. A dotação orçamentária integra recursos informacionais, pois aparece em relatórios.\nIV. A capacitação de servidores fortalece os recursos humanos da organização.",
    "explanation": "I: Informações sobre demanda permitem planejar recursos e atividades. II: Equipamentos de informática são meios materiais e tecnológicos de trabalho. III: A dotação registrada continua sendo recurso financeiro, não informacional. IV: Capacitação desenvolve conhecimentos e competências dos recursos humanos.",
    "trap": "Não confunda afirmações parcialmente verdadeiras com os critérios conceituais das demais.",
    "examTip": "Julgue cada afirmação individualmente antes de selecionar uma combinação.",
    "revision": "NOVO-ENUNCIADO-E-GABARITO"
  },
  "Q-ADM-01-004-04": {
    "kind": "vf",
    "statements": [
      "A função controle se concentra na avaliação contábil, independentemente das metas operacionais.",
      "A função organização envolve a distribuição de tarefas e responsabilidades.",
      "A função direção envolve comunicação e mobilização de pessoas.",
      "No processo administrativo, as metas são estabelecidas pelo controle, enquanto o planejamento cuida da padronização das tarefas."
    ],
    "truth": [
      false,
      true,
      true,
      false
    ],
    "evidence": [
      "Controle compara resultados com padrões e não se limita a dados contábeis.",
      "Organizar inclui estruturar atividades, autoridade e responsabilidades.",
      "Direção envolve liderança e comunicação para orientar a execução.",
      "Planejamento inclui definir objetivos e caminhos para alcançá-los."
    ],
    "choices": [
      "V – V – V – V",
      "F – F – F – F",
      "F – V – V – F",
      "F – F – V – V",
      "F – V – F – V"
    ],
    "answer": 2,
    "versioned": true,
    "comments": [
      "Incorreta: A afirmação I é falsa: Controle compara resultados com padrões e não se limita a dados contábeis. A afirmação IV é falsa: Planejamento inclui definir objetivos e caminhos para alcançá-los.",
      "Incorreta: A afirmação II é verdadeira: Organizar inclui estruturar atividades, autoridade e responsabilidades. A afirmação III é verdadeira: Direção envolve liderança e comunicação para orientar a execução.",
      "Correta: I: Controle compara resultados com padrões e não se limita a dados contábeis. II: Organizar inclui estruturar atividades, autoridade e responsabilidades. III: Direção envolve liderança e comunicação para orientar a execução. IV: Planejamento inclui definir objetivos e caminhos para alcançá-los.",
      "Incorreta: A afirmação II é verdadeira: Organizar inclui estruturar atividades, autoridade e responsabilidades. A afirmação IV é falsa: Planejamento inclui definir objetivos e caminhos para alcançá-los.",
      "Incorreta: A afirmação III é verdadeira: Direção envolve liderança e comunicação para orientar a execução. A afirmação IV é falsa: Planejamento inclui definir objetivos e caminhos para alcançá-los."
    ],
    "stem": "Julgue as afirmações e assinale a sequência correta (V/F).\nI. A função controle se concentra na avaliação contábil, independentemente das metas operacionais.\nII. A função organização envolve a distribuição de tarefas e responsabilidades.\nIII. A função direção envolve comunicação e mobilização de pessoas.\nIV. No processo administrativo, as metas são estabelecidas pelo controle, enquanto o planejamento cuida da padronização das tarefas.",
    "explanation": "I: Controle compara resultados com padrões e não se limita a dados contábeis. II: Organizar inclui estruturar atividades, autoridade e responsabilidades. III: Direção envolve liderança e comunicação para orientar a execução. IV: Planejamento inclui definir objetivos e caminhos para alcançá-los.",
    "trap": "Não confunda afirmações parcialmente verdadeiras com os critérios conceituais das demais.",
    "examTip": "Julgue cada afirmação individualmente antes de selecionar uma combinação.",
    "revision": "NOVO-ENUNCIADO-E-GABARITO"
  },
  "Q-ADM-01-006-04": {
    "kind": "vf",
    "statements": [
      "A habilidade técnica tende a ser especialmente importante em tarefas operacionais especializadas.",
      "A habilidade humana se aplica sobretudo ao atendimento externo, ficando a cooperação entre servidores a cargo da área de pessoal.",
      "A visão conceitual dispensa um gestor de compreender restrições concretas dos recursos.",
      "Uma mesma decisão pode exigir habilidades técnicas, humanas e conceituais."
    ],
    "truth": [
      true,
      false,
      false,
      true
    ],
    "evidence": [
      "O domínio de métodos e procedimentos específicos caracteriza a habilidade técnica.",
      "Habilidade humana também se aplica às relações internas, sem pertencer exclusivamente a uma área.",
      "A visão sistêmica complementa, mas não substitui o conhecimento das limitações reais.",
      "Habilidades se combinam conforme o problema administrativo enfrentado."
    ],
    "choices": [
      "V – V – F – F",
      "V – F – V – F",
      "F – F – F – V",
      "V – F – F – V",
      "V – V – F – V"
    ],
    "answer": 3,
    "versioned": true,
    "comments": [
      "Incorreta: A afirmação II é falsa: Habilidade humana também se aplica às relações internas, sem pertencer exclusivamente a uma área. A afirmação IV é verdadeira: Habilidades se combinam conforme o problema administrativo enfrentado.",
      "Incorreta: A afirmação III é falsa: A visão sistêmica complementa, mas não substitui o conhecimento das limitações reais. A afirmação IV é verdadeira: Habilidades se combinam conforme o problema administrativo enfrentado.",
      "Incorreta: A afirmação I é verdadeira: O domínio de métodos e procedimentos específicos caracteriza a habilidade técnica.",
      "Correta: I: O domínio de métodos e procedimentos específicos caracteriza a habilidade técnica. II: Habilidade humana também se aplica às relações internas, sem pertencer exclusivamente a uma área. III: A visão sistêmica complementa, mas não substitui o conhecimento das limitações reais. IV: Habilidades se combinam conforme o problema administrativo enfrentado.",
      "Incorreta: A afirmação II é falsa: Habilidade humana também se aplica às relações internas, sem pertencer exclusivamente a uma área."
    ],
    "stem": "Julgue as afirmações e assinale a sequência correta (V/F).\nI. A habilidade técnica tende a ser especialmente importante em tarefas operacionais especializadas.\nII. A habilidade humana se aplica sobretudo ao atendimento externo, ficando a cooperação entre servidores a cargo da área de pessoal.\nIII. A visão conceitual dispensa um gestor de compreender restrições concretas dos recursos.\nIV. Uma mesma decisão pode exigir habilidades técnicas, humanas e conceituais.",
    "explanation": "I: O domínio de métodos e procedimentos específicos caracteriza a habilidade técnica. II: Habilidade humana também se aplica às relações internas, sem pertencer exclusivamente a uma área. III: A visão sistêmica complementa, mas não substitui o conhecimento das limitações reais. IV: Habilidades se combinam conforme o problema administrativo enfrentado.",
    "trap": "Não confunda afirmações parcialmente verdadeiras com os critérios conceituais das demais.",
    "examTip": "Julgue cada afirmação individualmente antes de selecionar uma combinação.",
    "revision": "NOVO-ENUNCIADO-E-GABARITO"
  },
  "Q-ADM-02-001-03": {
    "kind": "vf",
    "statements": [
      "A comparação de resultados com metas pode levar a revisões do planejamento.",
      "A organização recebe metas do planejamento e, por isso, dispensa informações de desempenho produzidas pelo controle.",
      "O controle pode ocorrer durante a execução das atividades.",
      "A direção orienta as equipes quanto às prioridades definidas."
    ],
    "truth": [
      true,
      false,
      true,
      true
    ],
    "evidence": [
      "O controle realimenta o planejamento com informações sobre o desempenho.",
      "As funções administrativas são interdependentes, não compartimentos isolados.",
      "Controle concomitante ocorre enquanto as atividades são executadas.",
      "Orientação e comunicação com equipes pertencem à direção."
    ],
    "choices": [
      "V – F – V – F",
      "F – V – V – V",
      "F – F – F – V",
      "F – F – V – F",
      "V – F – V – V"
    ],
    "answer": 4,
    "versioned": true,
    "comments": [
      "Incorreta: A afirmação IV é verdadeira: Orientação e comunicação com equipes pertencem à direção.",
      "Incorreta: A afirmação I é verdadeira: O controle realimenta o planejamento com informações sobre o desempenho. A afirmação II é falsa: As funções administrativas são interdependentes, não compartimentos isolados.",
      "Incorreta: A afirmação I é verdadeira: O controle realimenta o planejamento com informações sobre o desempenho. A afirmação III é verdadeira: Controle concomitante ocorre enquanto as atividades são executadas.",
      "Incorreta: A afirmação I é verdadeira: O controle realimenta o planejamento com informações sobre o desempenho. A afirmação IV é verdadeira: Orientação e comunicação com equipes pertencem à direção.",
      "Correta: I: O controle realimenta o planejamento com informações sobre o desempenho. II: As funções administrativas são interdependentes, não compartimentos isolados. III: Controle concomitante ocorre enquanto as atividades são executadas. IV: Orientação e comunicação com equipes pertencem à direção."
    ],
    "stem": "Julgue as afirmações e assinale a sequência correta (V/F).\nI. A comparação de resultados com metas pode levar a revisões do planejamento.\nII. A organização recebe metas do planejamento e, por isso, dispensa informações de desempenho produzidas pelo controle.\nIII. O controle pode ocorrer durante a execução das atividades.\nIV. A direção orienta as equipes quanto às prioridades definidas.",
    "explanation": "I: O controle realimenta o planejamento com informações sobre o desempenho. II: As funções administrativas são interdependentes, não compartimentos isolados. III: Controle concomitante ocorre enquanto as atividades são executadas. IV: Orientação e comunicação com equipes pertencem à direção.",
    "trap": "Não confunda afirmações parcialmente verdadeiras com os critérios conceituais das demais.",
    "examTip": "Julgue cada afirmação individualmente antes de selecionar uma combinação.",
    "revision": "NOVO-ENUNCIADO-E-GABARITO"
  },
  "Q-ADM-02-003-03": {
    "kind": "vf",
    "statements": [
      "A distribuição de tarefas completa a organização mesmo quando nenhuma responsabilidade está definida.",
      "Definir relações de autoridade contribui para estruturar o trabalho.",
      "Um organograma bem definido substitui os mecanismos cotidianos de coordenação entre equipes.",
      "A organização pode ser revista diante da mudança de demanda de trabalho."
    ],
    "truth": [
      false,
      true,
      false,
      true
    ],
    "evidence": [
      "Distribuir tarefas requer definir responsabilidades e relações de trabalho.",
      "Linhas de autoridade integram a estrutura organizacional.",
      "O organograma representa a estrutura, mas não assegura coordenação efetiva por si só.",
      "Estruturas e tarefas podem ser reorganizadas diante de mudanças."
    ],
    "choices": [
      "F – V – F – V",
      "V – V – V – V",
      "V – V – F – F",
      "F – F – V – V",
      "F – F – F – F"
    ],
    "answer": 0,
    "versioned": true,
    "comments": [
      "Correta: I: Distribuir tarefas requer definir responsabilidades e relações de trabalho. II: Linhas de autoridade integram a estrutura organizacional. III: O organograma representa a estrutura, mas não assegura coordenação efetiva por si só. IV: Estruturas e tarefas podem ser reorganizadas diante de mudanças.",
      "Incorreta: A afirmação I é falsa: Distribuir tarefas requer definir responsabilidades e relações de trabalho. A afirmação III é falsa: O organograma representa a estrutura, mas não assegura coordenação efetiva por si só.",
      "Incorreta: A afirmação I é falsa: Distribuir tarefas requer definir responsabilidades e relações de trabalho. A afirmação IV é verdadeira: Estruturas e tarefas podem ser reorganizadas diante de mudanças.",
      "Incorreta: A afirmação II é verdadeira: Linhas de autoridade integram a estrutura organizacional. A afirmação III é falsa: O organograma representa a estrutura, mas não assegura coordenação efetiva por si só.",
      "Incorreta: A afirmação II é verdadeira: Linhas de autoridade integram a estrutura organizacional. A afirmação IV é verdadeira: Estruturas e tarefas podem ser reorganizadas diante de mudanças."
    ],
    "stem": "Julgue as afirmações e assinale a sequência correta (V/F).\nI. A distribuição de tarefas completa a organização mesmo quando nenhuma responsabilidade está definida.\nII. Definir relações de autoridade contribui para estruturar o trabalho.\nIII. Um organograma bem definido substitui os mecanismos cotidianos de coordenação entre equipes.\nIV. A organização pode ser revista diante da mudança de demanda de trabalho.",
    "explanation": "I: Distribuir tarefas requer definir responsabilidades e relações de trabalho. II: Linhas de autoridade integram a estrutura organizacional. III: O organograma representa a estrutura, mas não assegura coordenação efetiva por si só. IV: Estruturas e tarefas podem ser reorganizadas diante de mudanças.",
    "trap": "Não confunda afirmações parcialmente verdadeiras com os critérios conceituais das demais.",
    "examTip": "Julgue cada afirmação individualmente antes de selecionar uma combinação.",
    "revision": "NOVO-ENUNCIADO-E-GABARITO"
  },
  "Q-ADM-02-005-03": {
    "kind": "vf",
    "statements": [
      "O controle envolve estabelecer padrões para comparar resultados.",
      "Antes de corrigir um desvio, convém investigar suas causas.",
      "Superar uma meta de produção comprova eficiência mesmo sem informação sobre os recursos consumidos.",
      "Rever um fluxo de trabalho após uma medição é sempre planejamento, nunca controle."
    ],
    "truth": [
      true,
      true,
      false,
      false
    ],
    "evidence": [
      "Padrões de desempenho são referência para as medições de controle.",
      "Investigar causas ajuda a escolher correções apropriadas.",
      "Alcançar a meta demonstra eficácia; a eficiência exige avaliar os recursos consumidos.",
      "Ações corretivas após comparação de resultados integram o controle."
    ],
    "choices": [
      "V – F – V – F",
      "V – V – F – F",
      "V – F – F – V",
      "V – V – V – V",
      "F – V – F – F"
    ],
    "answer": 1,
    "versioned": true,
    "comments": [
      "Incorreta: A afirmação II é verdadeira: Investigar causas ajuda a escolher correções apropriadas. A afirmação III é falsa: Alcançar a meta demonstra eficácia; a eficiência exige avaliar os recursos consumidos.",
      "Correta: I: Padrões de desempenho são referência para as medições de controle. II: Investigar causas ajuda a escolher correções apropriadas. III: Alcançar a meta demonstra eficácia; a eficiência exige avaliar os recursos consumidos. IV: Ações corretivas após comparação de resultados integram o controle.",
      "Incorreta: A afirmação II é verdadeira: Investigar causas ajuda a escolher correções apropriadas. A afirmação IV é falsa: Ações corretivas após comparação de resultados integram o controle.",
      "Incorreta: A afirmação III é falsa: Alcançar a meta demonstra eficácia; a eficiência exige avaliar os recursos consumidos. A afirmação IV é falsa: Ações corretivas após comparação de resultados integram o controle.",
      "Incorreta: A afirmação I é verdadeira: Padrões de desempenho são referência para as medições de controle."
    ],
    "stem": "Julgue as afirmações e assinale a sequência correta (V/F).\nI. O controle envolve estabelecer padrões para comparar resultados.\nII. Antes de corrigir um desvio, convém investigar suas causas.\nIII. Superar uma meta de produção comprova eficiência mesmo sem informação sobre os recursos consumidos.\nIV. Rever um fluxo de trabalho após uma medição é sempre planejamento, nunca controle.",
    "explanation": "I: Padrões de desempenho são referência para as medições de controle. II: Investigar causas ajuda a escolher correções apropriadas. III: Alcançar a meta demonstra eficácia; a eficiência exige avaliar os recursos consumidos. IV: Ações corretivas após comparação de resultados integram o controle.",
    "trap": "Não confunda afirmações parcialmente verdadeiras com os critérios conceituais das demais.",
    "examTip": "Julgue cada afirmação individualmente antes de selecionar uma combinação.",
    "revision": "NOVO-ENUNCIADO-E-GABARITO"
  },
  "Q-ADM-03-001-03": {
    "kind": "vf",
    "statements": [
      "O nível tático formula a missão institucional, enquanto o estratégico a traduz em planos para os departamentos.",
      "O planejamento estratégico estabelece diretrizes institucionais abrangentes.",
      "O planejamento operacional detalha métodos, tarefas e prazos de execução.",
      "O plano de uma unidade pode desdobrar objetivos estratégicos em metas setoriais."
    ],
    "truth": [
      false,
      true,
      true,
      true
    ],
    "evidence": [
      "A missão institucional está associada ao nível estratégico, não definida isoladamente no tático.",
      "Diretrizes amplas e de longo alcance pertencem ao nível estratégico.",
      "O operacional organiza a execução concreta e as tarefas.",
      "A articulação do nível tático ao estratégico permite alinhamento institucional."
    ],
    "choices": [
      "V – F – V – V",
      "V – V – F – V",
      "F – V – V – V",
      "V – V – V – F",
      "F – F – F – V"
    ],
    "answer": 2,
    "versioned": true,
    "comments": [
      "Incorreta: A afirmação I é falsa: A missão institucional está associada ao nível estratégico, não definida isoladamente no tático. A afirmação II é verdadeira: Diretrizes amplas e de longo alcance pertencem ao nível estratégico.",
      "Incorreta: A afirmação I é falsa: A missão institucional está associada ao nível estratégico, não definida isoladamente no tático. A afirmação III é verdadeira: O operacional organiza a execução concreta e as tarefas.",
      "Correta: I: A missão institucional está associada ao nível estratégico, não definida isoladamente no tático. II: Diretrizes amplas e de longo alcance pertencem ao nível estratégico. III: O operacional organiza a execução concreta e as tarefas. IV: A articulação do nível tático ao estratégico permite alinhamento institucional.",
      "Incorreta: A afirmação I é falsa: A missão institucional está associada ao nível estratégico, não definida isoladamente no tático. A afirmação IV é verdadeira: A articulação do nível tático ao estratégico permite alinhamento institucional.",
      "Incorreta: A afirmação II é verdadeira: Diretrizes amplas e de longo alcance pertencem ao nível estratégico. A afirmação III é verdadeira: O operacional organiza a execução concreta e as tarefas."
    ],
    "stem": "Julgue as afirmações e assinale a sequência correta (V/F).\nI. O nível tático formula a missão institucional, enquanto o estratégico a traduz em planos para os departamentos.\nII. O planejamento estratégico estabelece diretrizes institucionais abrangentes.\nIII. O planejamento operacional detalha métodos, tarefas e prazos de execução.\nIV. O plano de uma unidade pode desdobrar objetivos estratégicos em metas setoriais.",
    "explanation": "I: A missão institucional está associada ao nível estratégico, não definida isoladamente no tático. II: Diretrizes amplas e de longo alcance pertencem ao nível estratégico. III: O operacional organiza a execução concreta e as tarefas. IV: A articulação do nível tático ao estratégico permite alinhamento institucional.",
    "trap": "Não confunda afirmações parcialmente verdadeiras com os critérios conceituais das demais.",
    "examTip": "Julgue cada afirmação individualmente antes de selecionar uma combinação.",
    "revision": "NOVO-ENUNCIADO-E-GABARITO"
  },
  "Q-ADM-03-003-03": {
    "kind": "vf",
    "statements": [
      "Metas expressam intenções gerais, enquanto objetivos exigem necessariamente parâmetros numéricos de acompanhamento.",
      "Um plano de ação se define somente pelo orçamento, sem responsabilidades ou cronograma.",
      "A meta quantificada permite acompanhar o grau de alcance do objetivo.",
      "A estratégia indica caminhos escolhidos para realizar objetivos."
    ],
    "truth": [
      false,
      false,
      true,
      true
    ],
    "evidence": [
      "Objetivos são resultados desejados; metas os traduzem em parâmetros verificáveis.",
      "Planos detalham ações, responsáveis, recursos e prazos, não apenas orçamento.",
      "Meta mensurável oferece parâmetro para monitoramento.",
      "Estratégia é curso de ação voltado ao alcance dos objetivos."
    ],
    "choices": [
      "V – F – V – F",
      "F – V – F – V",
      "F – V – V – F",
      "F – F – V – V",
      "F – F – F – F"
    ],
    "answer": 3,
    "versioned": true,
    "comments": [
      "Incorreta: A afirmação I é falsa: Objetivos são resultados desejados; metas os traduzem em parâmetros verificáveis. A afirmação IV é verdadeira: Estratégia é curso de ação voltado ao alcance dos objetivos.",
      "Incorreta: A afirmação II é falsa: Planos detalham ações, responsáveis, recursos e prazos, não apenas orçamento. A afirmação III é verdadeira: Meta mensurável oferece parâmetro para monitoramento.",
      "Incorreta: A afirmação II é falsa: Planos detalham ações, responsáveis, recursos e prazos, não apenas orçamento. A afirmação IV é verdadeira: Estratégia é curso de ação voltado ao alcance dos objetivos.",
      "Correta: I: Objetivos são resultados desejados; metas os traduzem em parâmetros verificáveis. II: Planos detalham ações, responsáveis, recursos e prazos, não apenas orçamento. III: Meta mensurável oferece parâmetro para monitoramento. IV: Estratégia é curso de ação voltado ao alcance dos objetivos.",
      "Incorreta: A afirmação III é verdadeira: Meta mensurável oferece parâmetro para monitoramento. A afirmação IV é verdadeira: Estratégia é curso de ação voltado ao alcance dos objetivos."
    ],
    "stem": "Julgue as afirmações e assinale a sequência correta (V/F).\nI. Metas expressam intenções gerais, enquanto objetivos exigem necessariamente parâmetros numéricos de acompanhamento.\nII. Um plano de ação se define somente pelo orçamento, sem responsabilidades ou cronograma.\nIII. A meta quantificada permite acompanhar o grau de alcance do objetivo.\nIV. A estratégia indica caminhos escolhidos para realizar objetivos.",
    "explanation": "I: Objetivos são resultados desejados; metas os traduzem em parâmetros verificáveis. II: Planos detalham ações, responsáveis, recursos e prazos, não apenas orçamento. III: Meta mensurável oferece parâmetro para monitoramento. IV: Estratégia é curso de ação voltado ao alcance dos objetivos.",
    "trap": "Não confunda afirmações parcialmente verdadeiras com os critérios conceituais das demais.",
    "examTip": "Julgue cada afirmação individualmente antes de selecionar uma combinação.",
    "revision": "NOVO-ENUNCIADO-E-GABARITO"
  },
  "Q-ADM-03-005-03": {
    "kind": "vf",
    "statements": [
      "O BSC restringe o acompanhamento estratégico aos indicadores financeiros.",
      "Indicadores de processos internos podem relacionar-se à satisfação do cidadão.",
      "A capacitação integra apenas a perspectiva financeira do BSC, pois representa gastos com pessoal.",
      "A melhora simultânea de indicadores permite atribuir a evolução a uma iniciativa específica, sem análise de outras variáveis."
    ],
    "truth": [
      false,
      true,
      false,
      false
    ],
    "evidence": [
      "O BSC articula diferentes perspectivas e não somente resultados financeiros.",
      "Processos internos influenciam a qualidade e o tempo de atendimento.",
      "Capacitação pode compor a perspectiva de aprendizado e desenvolvimento.",
      "Indicadores correlacionados não provam causalidade isoladamente."
    ],
    "choices": [
      "F – V – F – F",
      "F – F – F – V",
      "F – V – V – V",
      "V – V – F – F",
      "F – F – F – F"
    ],
    "answer": 0,
    "versioned": true,
    "comments": [
      "Correta: I: O BSC articula diferentes perspectivas e não somente resultados financeiros. II: Processos internos influenciam a qualidade e o tempo de atendimento. III: Capacitação pode compor a perspectiva de aprendizado e desenvolvimento. IV: Indicadores correlacionados não provam causalidade isoladamente.",
      "Incorreta: A afirmação II é verdadeira: Processos internos influenciam a qualidade e o tempo de atendimento. A afirmação IV é falsa: Indicadores correlacionados não provam causalidade isoladamente.",
      "Incorreta: A afirmação III é falsa: Capacitação pode compor a perspectiva de aprendizado e desenvolvimento. A afirmação IV é falsa: Indicadores correlacionados não provam causalidade isoladamente.",
      "Incorreta: A afirmação I é falsa: O BSC articula diferentes perspectivas e não somente resultados financeiros.",
      "Incorreta: A afirmação II é verdadeira: Processos internos influenciam a qualidade e o tempo de atendimento."
    ],
    "stem": "Julgue as afirmações e assinale a sequência correta (V/F).\nI. O BSC restringe o acompanhamento estratégico aos indicadores financeiros.\nII. Indicadores de processos internos podem relacionar-se à satisfação do cidadão.\nIII. A capacitação integra apenas a perspectiva financeira do BSC, pois representa gastos com pessoal.\nIV. A melhora simultânea de indicadores permite atribuir a evolução a uma iniciativa específica, sem análise de outras variáveis.",
    "explanation": "I: O BSC articula diferentes perspectivas e não somente resultados financeiros. II: Processos internos influenciam a qualidade e o tempo de atendimento. III: Capacitação pode compor a perspectiva de aprendizado e desenvolvimento. IV: Indicadores correlacionados não provam causalidade isoladamente.",
    "trap": "Não confunda afirmações parcialmente verdadeiras com os critérios conceituais das demais.",
    "examTip": "Julgue cada afirmação individualmente antes de selecionar uma combinação.",
    "revision": "NOVO-ENUNCIADO-E-GABARITO"
  },
  "Q-ADM-01-001-03": {
    "kind": "afirmacoes",
    "statements": [
      "Organizações sem finalidade lucrativa também precisam administrar pessoas e recursos.",
      "Planejamento e controle podem ser aplicados a entidades públicas.",
      "A gestão dos recursos pertence à alta direção, enquanto os demais níveis executam principalmente tarefas técnicas."
    ],
    "truth": [
      true,
      true,
      false
    ],
    "evidence": [
      "Organizações sociais e públicas necessitam gestão de recursos.",
      "Planejamento e controle são funções pertinentes à administração pública.",
      "Atividades administrativas aparecem em distintos níveis da organização."
    ],
    "choices": [
      "Apenas I e II.",
      "Apenas I.",
      "I, II e III.",
      "Apenas II.",
      "Apenas II e III."
    ],
    "answer": 0,
    "versioned": true,
    "comments": [
      "Correta: I: Organizações sociais e públicas necessitam gestão de recursos. II: Planejamento e controle são funções pertinentes à administração pública. III: Atividades administrativas aparecem em distintos níveis da organização.",
      "Incorreta: A afirmação II é verdadeira: Planejamento e controle são funções pertinentes à administração pública.",
      "Incorreta: A afirmação III é falsa: Atividades administrativas aparecem em distintos níveis da organização.",
      "Incorreta: A afirmação I é verdadeira: Organizações sociais e públicas necessitam gestão de recursos.",
      "Incorreta: A afirmação I é verdadeira: Organizações sociais e públicas necessitam gestão de recursos. A afirmação III é falsa: Atividades administrativas aparecem em distintos níveis da organização."
    ],
    "stem": "Analise as afirmações e assinale a alternativa correta.\nI. Organizações sem finalidade lucrativa também precisam administrar pessoas e recursos.\nII. Planejamento e controle podem ser aplicados a entidades públicas.\nIII. A gestão dos recursos pertence à alta direção, enquanto os demais níveis executam principalmente tarefas técnicas.",
    "explanation": "I: Organizações sociais e públicas necessitam gestão de recursos. II: Planejamento e controle são funções pertinentes à administração pública. III: Atividades administrativas aparecem em distintos níveis da organização.",
    "trap": "Não confunda afirmações parcialmente verdadeiras com os critérios conceituais das demais.",
    "examTip": "Julgue cada afirmação individualmente antes de selecionar uma combinação.",
    "revision": "NOVO-ENUNCIADO-E-GABARITO"
  },
  "Q-ADM-01-003-03": {
    "kind": "afirmacoes",
    "statements": [
      "Eficácia se concentra principalmente na relação entre insumos consumidos e produtos gerados.",
      "Eficiência permite examinar o uso de recursos em relação a resultados.",
      "Efetividade considera o impacto concreto da atuação sobre a realidade."
    ],
    "truth": [
      false,
      true,
      true
    ],
    "evidence": [
      "A relação insumos e produtos se associa à eficiência, não à eficácia.",
      "A eficiência examina racionalidade no emprego de recursos.",
      "A efetividade diz respeito aos impactos obtidos."
    ],
    "choices": [
      "Apenas II.",
      "Apenas II e III.",
      "Apenas III.",
      "I, II e III.",
      "Apenas I e III."
    ],
    "answer": 1,
    "versioned": true,
    "comments": [
      "Incorreta: A afirmação III é verdadeira: A efetividade diz respeito aos impactos obtidos.",
      "Correta: I: A relação insumos e produtos se associa à eficiência, não à eficácia. II: A eficiência examina racionalidade no emprego de recursos. III: A efetividade diz respeito aos impactos obtidos.",
      "Incorreta: A afirmação II é verdadeira: A eficiência examina racionalidade no emprego de recursos.",
      "Incorreta: A afirmação I é falsa: A relação insumos e produtos se associa à eficiência, não à eficácia.",
      "Incorreta: A afirmação I é falsa: A relação insumos e produtos se associa à eficiência, não à eficácia. A afirmação II é verdadeira: A eficiência examina racionalidade no emprego de recursos."
    ],
    "stem": "Analise as afirmações e assinale a alternativa correta.\nI. Eficácia se concentra principalmente na relação entre insumos consumidos e produtos gerados.\nII. Eficiência permite examinar o uso de recursos em relação a resultados.\nIII. Efetividade considera o impacto concreto da atuação sobre a realidade.",
    "explanation": "I: A relação insumos e produtos se associa à eficiência, não à eficácia. II: A eficiência examina racionalidade no emprego de recursos. III: A efetividade diz respeito aos impactos obtidos.",
    "trap": "Não confunda afirmações parcialmente verdadeiras com os critérios conceituais das demais.",
    "examTip": "Julgue cada afirmação individualmente antes de selecionar uma combinação.",
    "revision": "NOVO-ENUNCIADO-E-GABARITO"
  },
  "Q-ADM-01-005-03": {
    "kind": "afirmacoes",
    "statements": [
      "O nível estratégico tende a avaliar o alcance institucional das decisões.",
      "O nível tático se dedica principalmente às tarefas individuais de execução diária.",
      "O nível operacional define, como atribuição típica, a missão geral da instituição."
    ],
    "truth": [
      true,
      false,
      false
    ],
    "evidence": [
      "O estratégico considera a organização em seu conjunto.",
      "O tático traduz diretrizes institucionais em planos para áreas e unidades.",
      "A missão geral é matéria estratégica, não tarefa típica do operacional."
    ],
    "choices": [
      "Apenas I e III.",
      "Apenas I e II.",
      "Apenas I.",
      "Nenhuma das afirmativas.",
      "Apenas II."
    ],
    "answer": 2,
    "versioned": true,
    "comments": [
      "Incorreta: A afirmação III é falsa: A missão geral é matéria estratégica, não tarefa típica do operacional.",
      "Incorreta: A afirmação II é falsa: O tático traduz diretrizes institucionais em planos para áreas e unidades.",
      "Correta: I: O estratégico considera a organização em seu conjunto. II: O tático traduz diretrizes institucionais em planos para áreas e unidades. III: A missão geral é matéria estratégica, não tarefa típica do operacional.",
      "Incorreta: A afirmação I é verdadeira: O estratégico considera a organização em seu conjunto.",
      "Incorreta: A afirmação I é verdadeira: O estratégico considera a organização em seu conjunto. A afirmação II é falsa: O tático traduz diretrizes institucionais em planos para áreas e unidades."
    ],
    "stem": "Analise as afirmações e assinale a alternativa correta.\nI. O nível estratégico tende a avaliar o alcance institucional das decisões.\nII. O nível tático se dedica principalmente às tarefas individuais de execução diária.\nIII. O nível operacional define, como atribuição típica, a missão geral da instituição.",
    "explanation": "I: O estratégico considera a organização em seu conjunto. II: O tático traduz diretrizes institucionais em planos para áreas e unidades. III: A missão geral é matéria estratégica, não tarefa típica do operacional.",
    "trap": "Não confunda afirmações parcialmente verdadeiras com os critérios conceituais das demais.",
    "examTip": "Julgue cada afirmação individualmente antes de selecionar uma combinação.",
    "revision": "NOVO-ENUNCIADO-E-GABARITO"
  },
  "Q-ADM-02-002-03": {
    "kind": "afirmacoes",
    "statements": [
      "Uma decisão administrativa fundamentada compara opções e consequências.",
      "Planejamento pode ser revisto quando variam os recursos ou o contexto.",
      "Decidir significa selecionar uma alternativa sem explicitar critérios de comparação."
    ],
    "truth": [
      true,
      true,
      false
    ],
    "evidence": [
      "Comparar alternativas integra a decisão fundamentada.",
      "Planos são ajustáveis diante de novas informações e restrições.",
      "Decisões devem considerar critérios e impactos, não dispensá-los."
    ],
    "choices": [
      "Apenas II.",
      "Apenas I.",
      "I, II e III.",
      "Apenas I e II.",
      "Apenas I e III."
    ],
    "answer": 3,
    "versioned": true,
    "comments": [
      "Incorreta: A afirmação I é verdadeira: Comparar alternativas integra a decisão fundamentada.",
      "Incorreta: A afirmação II é verdadeira: Planos são ajustáveis diante de novas informações e restrições.",
      "Incorreta: A afirmação III é falsa: Decisões devem considerar critérios e impactos, não dispensá-los.",
      "Correta: I: Comparar alternativas integra a decisão fundamentada. II: Planos são ajustáveis diante de novas informações e restrições. III: Decisões devem considerar critérios e impactos, não dispensá-los.",
      "Incorreta: A afirmação II é verdadeira: Planos são ajustáveis diante de novas informações e restrições. A afirmação III é falsa: Decisões devem considerar critérios e impactos, não dispensá-los."
    ],
    "stem": "Analise as afirmações e assinale a alternativa correta.\nI. Uma decisão administrativa fundamentada compara opções e consequências.\nII. Planejamento pode ser revisto quando variam os recursos ou o contexto.\nIII. Decidir significa selecionar uma alternativa sem explicitar critérios de comparação.",
    "explanation": "I: Comparar alternativas integra a decisão fundamentada. II: Planos são ajustáveis diante de novas informações e restrições. III: Decisões devem considerar critérios e impactos, não dispensá-los.",
    "trap": "Não confunda afirmações parcialmente verdadeiras com os critérios conceituais das demais.",
    "examTip": "Julgue cada afirmação individualmente antes de selecionar uma combinação.",
    "revision": "NOVO-ENUNCIADO-E-GABARITO"
  },
  "Q-ADM-02-004-03": {
    "kind": "afirmacoes",
    "statements": [
      "Dirigir envolve orientar equipes quanto às prioridades.",
      "A liderança pode mobilizar pessoas mediante diálogo e comunicação.",
      "Mediar conflitos pode integrar o exercício da função direção."
    ],
    "truth": [
      true,
      true,
      true
    ],
    "evidence": [
      "Orientar a execução e comunicar prioridades caracteriza direção.",
      "A liderança trabalha com comunicação e mobilização de pessoas.",
      "A mediação de conflitos auxilia a cooperação e a execução."
    ],
    "choices": [
      "Apenas I e III.",
      "Apenas II e III.",
      "Apenas I e II.",
      "Apenas II.",
      "I, II e III."
    ],
    "answer": 4,
    "versioned": true,
    "comments": [
      "Incorreta: A afirmação II é verdadeira: A liderança trabalha com comunicação e mobilização de pessoas.",
      "Incorreta: A afirmação I é verdadeira: Orientar a execução e comunicar prioridades caracteriza direção.",
      "Incorreta: A afirmação III é verdadeira: A mediação de conflitos auxilia a cooperação e a execução.",
      "Incorreta: A afirmação I é verdadeira: Orientar a execução e comunicar prioridades caracteriza direção. A afirmação III é verdadeira: A mediação de conflitos auxilia a cooperação e a execução.",
      "Correta: I: Orientar a execução e comunicar prioridades caracteriza direção. II: A liderança trabalha com comunicação e mobilização de pessoas. III: A mediação de conflitos auxilia a cooperação e a execução."
    ],
    "stem": "Analise as afirmações e assinale a alternativa correta.\nI. Dirigir envolve orientar equipes quanto às prioridades.\nII. A liderança pode mobilizar pessoas mediante diálogo e comunicação.\nIII. Mediar conflitos pode integrar o exercício da função direção.",
    "explanation": "I: Orientar a execução e comunicar prioridades caracteriza direção. II: A liderança trabalha com comunicação e mobilização de pessoas. III: A mediação de conflitos auxilia a cooperação e a execução.",
    "trap": "Não confunda afirmações parcialmente verdadeiras com os critérios conceituais das demais.",
    "examTip": "Julgue cada afirmação individualmente antes de selecionar uma combinação.",
    "revision": "NOVO-ENUNCIADO-E-GABARITO"
  },
  "Q-ADM-02-006-03": {
    "kind": "afirmacoes",
    "statements": [
      "A administração pública pode avaliar seu desempenho pelo cumprimento do orçamento, pois não busca lucro de mercado.",
      "Planejamento de serviços públicos relaciona objetivos, meios e necessidades sociais.",
      "Controle da cobertura dos serviços auxilia a identificar ajustes necessários."
    ],
    "truth": [
      false,
      true,
      true
    ],
    "evidence": [
      "A finalidade pública não elimina a necessidade de aferir resultados.",
      "Planejamento vincula recursos e prioridades às demandas coletivas.",
      "Indicadores e controle ajudam a ajustar a prestação de serviços."
    ],
    "choices": [
      "Apenas II e III.",
      "I, II e III.",
      "Apenas II.",
      "Apenas III.",
      "Nenhuma das afirmativas."
    ],
    "answer": 0,
    "versioned": true,
    "comments": [
      "Correta: I: A finalidade pública não elimina a necessidade de aferir resultados. II: Planejamento vincula recursos e prioridades às demandas coletivas. III: Indicadores e controle ajudam a ajustar a prestação de serviços.",
      "Incorreta: A afirmação I é falsa: A finalidade pública não elimina a necessidade de aferir resultados.",
      "Incorreta: A afirmação III é verdadeira: Indicadores e controle ajudam a ajustar a prestação de serviços.",
      "Incorreta: A afirmação II é verdadeira: Planejamento vincula recursos e prioridades às demandas coletivas.",
      "Incorreta: A afirmação II é verdadeira: Planejamento vincula recursos e prioridades às demandas coletivas. A afirmação III é verdadeira: Indicadores e controle ajudam a ajustar a prestação de serviços."
    ],
    "stem": "Analise as afirmações e assinale a alternativa correta.\nI. A administração pública pode avaliar seu desempenho pelo cumprimento do orçamento, pois não busca lucro de mercado.\nII. Planejamento de serviços públicos relaciona objetivos, meios e necessidades sociais.\nIII. Controle da cobertura dos serviços auxilia a identificar ajustes necessários.",
    "explanation": "I: A finalidade pública não elimina a necessidade de aferir resultados. II: Planejamento vincula recursos e prioridades às demandas coletivas. III: Indicadores e controle ajudam a ajustar a prestação de serviços.",
    "trap": "Não confunda afirmações parcialmente verdadeiras com os critérios conceituais das demais.",
    "examTip": "Julgue cada afirmação individualmente antes de selecionar uma combinação.",
    "revision": "NOVO-ENUNCIADO-E-GABARITO"
  },
  "Q-ADM-03-002-03": {
    "kind": "afirmacoes",
    "statements": [
      "Missão expressa a razão de existir de uma instituição.",
      "Visão descreve prioritariamente princípios éticos para decisões diárias.",
      "Valores correspondem a metas numéricas de curto prazo."
    ],
    "truth": [
      true,
      false,
      false
    ],
    "evidence": [
      "A missão apresenta o propósito institucional.",
      "Princípios orientadores são valores; visão é futuro desejado.",
      "Valores não equivalem a metas quantitativas."
    ],
    "choices": [
      "Apenas I e III.",
      "Apenas I.",
      "Apenas I e II.",
      "Nenhuma das afirmativas.",
      "Apenas II."
    ],
    "answer": 1,
    "versioned": true,
    "comments": [
      "Incorreta: A afirmação III é falsa: Valores não equivalem a metas quantitativas.",
      "Correta: I: A missão apresenta o propósito institucional. II: Princípios orientadores são valores; visão é futuro desejado. III: Valores não equivalem a metas quantitativas.",
      "Incorreta: A afirmação II é falsa: Princípios orientadores são valores; visão é futuro desejado.",
      "Incorreta: A afirmação I é verdadeira: A missão apresenta o propósito institucional.",
      "Incorreta: A afirmação I é verdadeira: A missão apresenta o propósito institucional. A afirmação II é falsa: Princípios orientadores são valores; visão é futuro desejado."
    ],
    "stem": "Analise as afirmações e assinale a alternativa correta.\nI. Missão expressa a razão de existir de uma instituição.\nII. Visão descreve prioritariamente princípios éticos para decisões diárias.\nIII. Valores correspondem a metas numéricas de curto prazo.",
    "explanation": "I: A missão apresenta o propósito institucional. II: Princípios orientadores são valores; visão é futuro desejado. III: Valores não equivalem a metas quantitativas.",
    "trap": "Não confunda afirmações parcialmente verdadeiras com os critérios conceituais das demais.",
    "examTip": "Julgue cada afirmação individualmente antes de selecionar uma combinação.",
    "revision": "NOVO-ENUNCIADO-E-GABARITO"
  },
  "Q-ADM-03-004-03": {
    "kind": "afirmacoes",
    "statements": [
      "Aumento de demanda da população é fraqueza interna do órgão porque ele precisará se adaptar.",
      "A experiência técnica de uma equipe é uma força da organização.",
      "Mudanças legislativas que afetam o órgão têm origem no ambiente externo."
    ],
    "truth": [
      false,
      true,
      true
    ],
    "evidence": [
      "Demanda populacional tem origem externa; seus efeitos podem revelar fraquezas internas.",
      "Conhecimento e experiência da equipe integram as forças internas.",
      "Mudanças legislativas pertencem ao ambiente externo."
    ],
    "choices": [
      "I, II e III.",
      "Apenas II.",
      "Apenas II e III.",
      "Apenas III.",
      "Apenas I e III."
    ],
    "answer": 2,
    "versioned": true,
    "comments": [
      "Incorreta: A afirmação I é falsa: Demanda populacional tem origem externa; seus efeitos podem revelar fraquezas internas.",
      "Incorreta: A afirmação III é verdadeira: Mudanças legislativas pertencem ao ambiente externo.",
      "Correta: I: Demanda populacional tem origem externa; seus efeitos podem revelar fraquezas internas. II: Conhecimento e experiência da equipe integram as forças internas. III: Mudanças legislativas pertencem ao ambiente externo.",
      "Incorreta: A afirmação II é verdadeira: Conhecimento e experiência da equipe integram as forças internas.",
      "Incorreta: A afirmação I é falsa: Demanda populacional tem origem externa; seus efeitos podem revelar fraquezas internas. A afirmação II é verdadeira: Conhecimento e experiência da equipe integram as forças internas."
    ],
    "stem": "Analise as afirmações e assinale a alternativa correta.\nI. Aumento de demanda da população é fraqueza interna do órgão porque ele precisará se adaptar.\nII. A experiência técnica de uma equipe é uma força da organização.\nIII. Mudanças legislativas que afetam o órgão têm origem no ambiente externo.",
    "explanation": "I: Demanda populacional tem origem externa; seus efeitos podem revelar fraquezas internas. II: Conhecimento e experiência da equipe integram as forças internas. III: Mudanças legislativas pertencem ao ambiente externo.",
    "trap": "Não confunda afirmações parcialmente verdadeiras com os critérios conceituais das demais.",
    "examTip": "Julgue cada afirmação individualmente antes de selecionar uma combinação.",
    "revision": "NOVO-ENUNCIADO-E-GABARITO"
  },
  "Q-ADM-03-006-03": {
    "kind": "afirmacoes",
    "statements": [
      "As relações representadas no mapa estratégico são causalidades demonstradas, não hipóteses a serem verificadas.",
      "O prazo médio de atendimento pode ser usado como indicador de desempenho.",
      "A redução isolada do prazo médio de atendimento é prova suficiente de efetividade de toda a política pública."
    ],
    "truth": [
      false,
      true,
      false
    ],
    "evidence": [
      "O mapa expressa hipóteses que precisam ser acompanhadas e testadas.",
      "Prazo médio é medida observável de desempenho do serviço.",
      "Um indicador isolado não comprova efetividade nem causalidade de toda a estratégia."
    ],
    "choices": [
      "Nenhuma das afirmativas.",
      "Apenas II e III.",
      "Apenas I e II.",
      "Apenas II.",
      "I, II e III."
    ],
    "answer": 3,
    "versioned": true,
    "comments": [
      "Incorreta: A afirmação II é verdadeira: Prazo médio é medida observável de desempenho do serviço.",
      "Incorreta: A afirmação III é falsa: Um indicador isolado não comprova efetividade nem causalidade de toda a estratégia.",
      "Incorreta: A afirmação I é falsa: O mapa expressa hipóteses que precisam ser acompanhadas e testadas.",
      "Correta: I: O mapa expressa hipóteses que precisam ser acompanhadas e testadas. II: Prazo médio é medida observável de desempenho do serviço. III: Um indicador isolado não comprova efetividade nem causalidade de toda a estratégia.",
      "Incorreta: A afirmação I é falsa: O mapa expressa hipóteses que precisam ser acompanhadas e testadas. A afirmação III é falsa: Um indicador isolado não comprova efetividade nem causalidade de toda a estratégia."
    ],
    "stem": "Analise as afirmações e assinale a alternativa correta.\nI. As relações representadas no mapa estratégico são causalidades demonstradas, não hipóteses a serem verificadas.\nII. O prazo médio de atendimento pode ser usado como indicador de desempenho.\nIII. A redução isolada do prazo médio de atendimento é prova suficiente de efetividade de toda a política pública.",
    "explanation": "I: O mapa expressa hipóteses que precisam ser acompanhadas e testadas. II: Prazo médio é medida observável de desempenho do serviço. III: Um indicador isolado não comprova efetividade nem causalidade de toda a estratégia.",
    "trap": "Não confunda afirmações parcialmente verdadeiras com os critérios conceituais das demais.",
    "examTip": "Julgue cada afirmação individualmente antes de selecionar uma combinação.",
    "revision": "NOVO-ENUNCIADO-E-GABARITO"
  }
};

const REPORT = {applied:0, versioned:0, sameId:0, protectedSessions:0, missing:[], invalid:[]};
const toId = id => id + '-R2';
const usedInActiveSessions = () => {
  try {
    const raw = window.localStorage.getItem('admEstudo.v2.state');
    if (!raw) return new Set();
    const p = JSON.parse(raw)?.progress || {};
    return new Set([
      ...(p.questionBank?.session?.ids || []),
      ...(p.simulados?.active?.ids || []),
      ...(p.reviewStudy?.session?.ids || [])
    ].filter(v=>typeof v === 'string'));
  } catch (_) { return new Set(); }
};
const protectedIds = usedInActiveSessions();
for (const [id, patch] of Object.entries(PATCHES)) {
  const item = QUESTIONS.find(q => q?.id === id);
  if (!item) { REPORT.missing.push(id); continue; }
  if (protectedIds.has(id)) { REPORT.protectedSessions++; continue; }
  if (patch.kind === 'alternatives') {
    if (!Array.isArray(item.options) || item.options.length !== patch.options.length ||
        item.answer !== patch.originalAnswer || item.type === 'ce') {
      REPORT.invalid.push(id); continue;
    }
    const options = patch.options.map((v,i)=>v === null ? item.options[i] : v);
    if (options.some((x,i) => !x || options.some((y,j)=>i!==j && x===y))) {
      REPORT.invalid.push(id); continue;
    }
    Object.assign(item, {
      options, optionComments:[...patch.comments],
      pedagogicalRevision:'F23-L02',
      revisionNote:'Enunciado e índice da resposta preservados; distratores e justificativas revisados.'
    });
    REPORT.applied++; REPORT.sameId++;
  } else if (patch.kind==='vf' || patch.kind==='afirmacoes') {
    if (item.type!==patch.kind || !Array.isArray(item.options) ||
        !Number.isInteger(patch.answer) || patch.answer<0 || patch.answer>=5 ||
        patch.choices.length!==5 || patch.comments.length!==5) {
      REPORT.invalid.push(id); continue;
    }
    Object.assign(item, {
      legacyQuestionId:id,
      id: toId(id),
      stem:patch.stem,
      options:[...patch.choices],
      answer:patch.answer,
      optionComments:[...patch.comments],
      explanation:patch.explanation,
      trap:patch.trap,
      examTip:patch.examTip,
      pedagogicalRevision:'F23-L02',
      revisionNote:'Novo enunciado com novo identificador; histórico da questão anterior preservado no backup.'
    });
    REPORT.applied++; REPORT.versioned++;
  }
}
export const F23_LOTE02_REPORT = Object.freeze({...REPORT, missing:[...REPORT.missing], invalid:[...REPORT.invalid]});
