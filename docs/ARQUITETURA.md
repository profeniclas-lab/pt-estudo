# ADM-ESTUDO — Arquitetura 2.0

## Princípios
- JavaScript puro com módulos ES nativos.
- Sem frameworks ou bibliotecas externas obrigatórias.
- Conteúdo pedagógico separado da lógica da aplicação.
- IDs estáveis para módulos, subtópicos, aulas, questões e flashcards.
- Progresso local em uma chave nova, sem migração automática do legado.

## Pastas
- `js/core`: estado, armazenamento, navegação e cálculos compartilhados.
- `js/features`: funcionalidades e telas.
- `js/shared`: funções auxiliares reutilizáveis.
- `content`: catálogo e materiais pedagógicos sem lógica de interface.

## Persistência
- Chave: `admEstudo.v2.state`.
- Schema: `3`.
- O estado antigo em `admDireitoAdm.state` não é lido nem sobrescrito.

## Aproveitamento parcial
O cálculo considera apenas etapas disponíveis e informa a cobertura,
para que um percentual parcial não seja confundido com a conclusão integral do módulo.

## Execução local
Como o projeto usa módulos ES, abra a aplicação por um servidor HTTP local
ou pelo GitHub Pages. Não abra o arquivo `index.html` diretamente via `file://`.
