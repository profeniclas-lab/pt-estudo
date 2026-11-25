# PT-ESTUDO — Implementação integrada, Lote 1 (POR-01 a POR-03)

## Destino
Repositório: `profeniclas-lab/pt-estudo` · branch: `nova-arquitetura`.
Referência técnica verificada em 25/11/2026. **Não instalar no repositório Dir-Adm.**

## Instalação sem instalar softwares

1. Faça uma cópia de segurança da branch `nova-arquitetura` no próprio GitHub (por exemplo, crie uma branch de teste pela interface do site) e confirme que possui backup do progresso de Português, caso já tenha estudado.
2. Extraia este ZIP com a função nativa do Windows ou do sistema operacional. **Não envie o ZIP como um único arquivo ao GitHub.**
3. Na branch de teste de `pt-estudo`, envie os arquivos extraídos para os caminhos **exatamente iguais** aos caminhos existentes aqui. A interface web do GitHub permite adicionar/substituir arquivos; preserve as subpastas `js/core`, `js/config`, `js/data`, `js/data/portugues` e `js/features`.
4. Confira o diff e salve as alterações nessa branch; não misture os arquivos com os do `Dir-Adm`.
5. Teste na versão publicada de teste, sem realizar reinício ou restauração no navegador principal. Após homologação manual, publique a branch aprovada.

## Arquivos centrais que DEVEM ser substituídos

- `index.html` — cabeçalho PT-ESTUDO e título inicial.
- `js/data/modules.js` — 27 módulos no planejamento, **3 ativos**; 24 não entram nas atividades.
- `js/data/lessons.js`, `js/data/diagnostics.js`, `js/data/questions.js` — carregadores exclusivos dos 3 módulos de Português.
- `js/features/modules.js` — módulos ativos e futuros visualmente separados.
- `js/features/about.js`, `js/features/settings.js` — identidade do aplicativo nas páginas.
- `js/start-f25-lote04.js` — entrada do app, sem imports dos lotes administrativos da Fase 25.
- `js/data/questions-f23-lote02.js` — substituição por export inofensivo para evitar leitura direta da chave `admEstudo.v2.state` herdada do código antigo.

## Arquivos de conteúdo a ADICIONAR/SUBSTITUIR

- `js/data/portugues/por-01-{lessons,diagnostics,questions}.js`.
- `js/data/portugues/por-02-{lessons,diagnostics,questions}.js`.
- `js/data/portugues/por-03-{lessons,diagnostics,questions}.js`.
- `js/core/pt-title-sync.js` — compatibilidade temporária para corrigir título escrito dinamicamente pelo `js/app.js` legado, sem reescrever seu motor.

## Proteções anteriores incluídas neste ZIP

Para evitar depender de instalações intermediárias, o pacote contém também os arquivos completos das antigas entregas 1B–1D e do controle entre abas: armazenamento `ptEstudo.v1.state`, estado `appId = 'pt-estudo'`, verificação de formato de backup, recuperação e Google Drive em pasta `PT-ESTUDO`.

## O que permanecerá no repositório, porém fora do catálogo ativo

Os arquivos `js/data/questions-f25-lote04.js`, `-lote06.js`, `-lote08.js`, `-lote09.js` podem continuar como histórico técnico, mas **a nova entrada não os importa**. Outros arquivos legados `content/*` também não são usados pelo novo carregador de dados. Não apague esses históricos até revisar o projeto completo.

## Verificações manuais indispensáveis antes de publicar como versão final

- Cabeçalho: `PT-ESTUDO` / `Português e Redação Oficial`; título da aba idem; página Sobre sem nomenclatura administrativa.
- Módulos: 27 nomes, somente POR-01/02/03 clicáveis e disponíveis; 24 com etiqueta `Em preparação`.
- Dentro de cada um dos três módulos: 5 cartões diagnósticos, 5 aulas, exercício de **16 questões por tentativa** (10 médias + 6 difíceis distintas), comentários de cada alternativa e registros de confiança/erro.
- Banco: 60 questões autorais, sem itens administrativos e com filtros por módulo e por questões não respondidas.
- Simulados, revisão espaçada, Minha Jornada, Dashboard e Estatísticas: usam somente os 3 módulos ativos.
- Primeiro salvamento/recarga, exportação de backup, rejeição de backup ADM e atualização manual no Drive: executar **somente com dados fictícios em um perfil de navegador separado**, antes de utilizar dados pessoais reais.
- Consultar `/Dir-Adm/` no mesmo navegador e confirmar que seu progresso permanece intacto.

## Limitações honestas

O código foi validado estruturalmente e as funções de armazenamento foram testadas com um `localStorage` simulado. Não houve acesso operacional à interface real do GitHub Pages, autenticação Google com conta real nem testes completos em navegador. As respostas das 60 questões passaram por conferência editorial de autoria e por validações de estrutura, mas **não há auditoria independente que demonstre perfeição pedagógica dos gabaritos**. Alguns relatórios técnicos legados dos módulos de manutenção ainda podem conter o nome `ADM-ESTUDO` nas suas legendas; não representam navegação nem conteúdos ativos e precisam ser ajustados numa etapa de acabamento.

O arquivo `js/app.js` foi preservado integralmente. Como ele ainda escreve o título antigo da aba, `js/core/pt-title-sync.js` faz a compatibilidade visual. Quando o código original completo puder ser editado com segurança, essa substituição deve migrar diretamente para a origem do título.
