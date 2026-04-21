

## Ajustes na seção "Quem Somos" — confirmação do layout

Confirmando o layout proposto conforme o mockup enviado:

### Estrutura final (desktop)

```text
┌────────────────────────────────────────────────┐
│ QUEM SOMOS                                     │
│                                                │
│ ┌────────────┐  ┌────────┬───────────────────┐ │
│ │            │  │ LOGO   │  Tradição em      │ │
│ │   Foto     │  │        │  entregar lares   │ │
│ │   equipe   │  └────────┴───────────────────┘ │
│ │            │  ┌──────────────────────────┐   │
│ │            │  │  Texto (3 parágrafos     │   │
│ │            │  │  em largura total)       │   │
│ └────────────┘  └──────────────────────────┘   │
│                                                │
│ ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│ │  13+     │  │  100%    │  │  500+    │       │
│ └──────────┘  └──────────┘  └──────────┘       │
└────────────────────────────────────────────────┘
```

### Mudanças em `src/components/TrustSection.tsx`

1. **Eyebrow "QUEM SOMOS" no topo**, alinhado à esquerda do container, antes da grid principal.

2. **Grid principal de 2 colunas** (≈ 5/12 + 7/12 no desktop):
   - **Esquerda**: foto da equipe vertical, ocupando toda a altura da coluna.
   - **Direita** (em duas linhas):
     - **Linha 1 — header**: logo Evolutta à esquerda + título "Tradição em entregar lares" à direita, alinhados verticalmente ao centro.
     - **Linha 2 — texto**: 3 parágrafos em largura total da coluna (sem `max-w-2xl`), reduzindo altura vertical.

3. **Cards de estatísticas na base**: grid horizontal de 3 colunas (13+, 100%, 500+) ocupando toda a largura do container, abaixo do bloco principal.

### Mobile
Empilhamento vertical: eyebrow → foto → logo → título → texto → 3 cards (1 coluna).

### Memória a atualizar
- `mem://features/trust-section` — refletir nova estrutura (eyebrow no topo, grid foto+conteúdo, cards na base).

### Arquivo afetado
- `src/components/TrustSection.tsx`

