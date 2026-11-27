# PT-ESTUDO — Correção 3 / Lote 3: auditoria pedagógica (POR-09 a POR-13)

## Escopo e método

Foram lidas as 100 questões existentes da branch `nova-arquitetura` e redigidas **100 resoluções textuais individualizadas**, em `C03_L03_RESOLUCOES_100_QUESTOES.tsv` e no JSON equivalente. As respostas foram julgadas pelo conteúdo, comparadas ao índice registrado, não recalculadas pela posição habitual da letra.

- 100 questões mantêm o mesmo ID, área, subtópico, tipo, dificuldade e índice do gabarito.
- 100 questões receberam novos exemplos inéditos e desafios específicos, sem duplicações no lote.
- 29 questões receberam mudanças adicionais em enunciado, alternativa, explicação ou comentário.
- Os comentários continuam associados aos **índices originais**, inclusive depois do embaralhamento da interface.
- Todos os itens continuam como AUTORAIS, sem atribuição a banca, órgão, ano ou prova não verificada.
- Os 100 textos originais completos estão em `C03_L03_SNAPSHOT_ORIGINAL_100_QUESTOES.json`.

## Achados editoriais relevantes

1. **POR-09:** diferenciação entre afixação derivacional e flexão; justificativas de alternativas de associação; classificação escolar de parassíntese e composição.
2. **POR-10:** questão sobre substantivo coletivo restringida a *grupo de pessoas*, evitando possíveis leituras de "correspondência"; distratores de posição do adjetivo reescritos; item sobre bastante distingue uso adverbial e quantificador nominal.
3. **POR-11:** referência pronominal com Bia explicitada para não depender de antecedente possivelmente ambíguo; construções de sujeito do infinitivo afinadas; formas tradicionais de tratamento delimitadas à **concordância gramatical**, sem recomendação como protocolo oficial. Decreto nº 9.758/2019: https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/decreto/d9758.htm
4. **POR-12:** verbos irregulares, voz passiva, índice de indeterminação e correlação verbal descritos com exemplos próprios e condicionantes da norma-padrão.
5. **POR-13:** expressões de associação delimitadas entre aspas para evitar depender de destaque inexistente; exemplos de conjunção e interjeição menos artificiais; distinção contextual entre preposição de limite e palavra de inclusão.

## Distribuição original preservada

{
  "CE_por_modulo": {
    "POR-09": {
      "CERTO": 4,
      "ERRADO": 1
    },
    "POR-10": {
      "CERTO": 5,
      "ERRADO": 0
    },
    "POR-11": {
      "CERTO": 5,
      "ERRADO": 0
    },
    "POR-12": {
      "CERTO": 5,
      "ERRADO": 0
    },
    "POR-13": {
      "CERTO": 3,
      "ERRADO": 2
    }
  },
  "indices_de_gabarito": {
    "POR-09": {
      "0": 7,
      "3": 5,
      "2": 3,
      "1": 5
    },
    "POR-10": {
      "0": 11,
      "2": 2,
      "1": 4,
      "3": 3
    },
    "POR-11": {
      "0": 12,
      "1": 3,
      "3": 4,
      "2": 1
    },
    "POR-12": {
      "0": 11,
      "2": 5,
      "1": 2,
      "3": 2
    },
    "POR-13": {
      "0": 7,
      "1": 6,
      "2": 4,
      "3": 3
    }
  }
}

**Atenção:** a distribuição de CERTO/ERRADO é desigual, em especial em POR-10 a POR-12. Não inverti proposições nem gabaritos apenas para aumentar a diversidade: isso mudaria a verdade do item e o significado das tentativas antigas. Corrigir esse viés exigirá **novos IDs/versionamento** e planejamento de questões adicionais, não substituição silenciosa.

## Histórico de aprendizagem

A compatibilidade de índices evita que a pontuação de acerto/erro seja reinterpretada por mudança de posição do gabarito. **Não garante que uma tentativa antiga mostre o mesmo texto**: a aplicação atualmente não salva a versão literal completa do enunciado/alternativas em cada tentativa. Antes de instalar, exporte backup e conclua sessões abertas. Não importar o snapshot como questões ativas; ele serve apenas para auditoria.

## Validação técnica e limites

O ZIP inclui teste automatizado em `tests/`, que deve ser executado contra o repositório completo. Os testes locais realizados verificam dados e invariantes; testes de navegador, integração OAuth, múltiplas abas e histórico real exigem homologação posterior. A conferência semântica foi feita pelo assistente com raciocínio textual explícito, **não por banca oficial nem revisor humano independente**.
