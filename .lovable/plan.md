
## Atualizar card do Plantão de Vendas com imagem da corretora

Vamos redesenhar o card do plantão de vendas na seção **Localização** para incluir a imagem da corretora à direita, conforme o print 2.

### Mudanças

**1. Adicionar asset da corretora**
- Copiar `user-uploads://retrato-de-agente-imobiliario-feminino-olhando-para-a-camera-enquanto-casal-feliz-em-pe-no-fundo.png` para `src/assets/corretora-plantao.png`.

**2. Atualizar `src/components/LocationSection.tsx`**
- Importar a nova imagem da corretora.
- Reestruturar o card "Plantão de Vendas no Local":
  - Manter o fundo escuro (primary), bordas arredondadas e o ícone do MapPin verde à esquerda.
  - Manter os textos: eyebrow "Plantão de Vendas no Local", título "Rua Três Corações — Jardim Benedito · Indaial – SC", subtítulo "Visite nosso stand e conheça pessoalmente o empreendimento" e o botão "Agendar visita".
  - Adicionar a imagem da corretora posicionada absolutamente na lateral direita do card, alinhada à base, transbordando ligeiramente para cima do card (efeito do print 2).
  - Container do card com `relative` + `overflow-visible` para permitir o transbordo.
  - No mobile (abaixo de `md`): ocultar a imagem da corretora (`hidden md:block`) para preservar legibilidade.
  - Adicionar `padding-right` extra no desktop (`md:pr-56`) para garantir que o texto/botão não sobreponham a imagem.

### Layout final (desktop)

```text
┌────────────────────────────────────────────────────────┐ ─┐
│ [icon] PLANTÃO DE VENDAS NO LOCAL              ┌──────│  │
│        Rua Três Corações — Jardim Benedito ·   │ corre│  │ corretora
│        Indaial – SC                            │ tora │  │ transborda
│        Visite nosso stand...   [Agendar visita]│ img  │  │ no topo
└────────────────────────────────────────────────┴──────┘ ─┘
```

### Arquivos
- `src/assets/corretora-plantao.png` (novo)
- `src/components/LocationSection.tsx` (editado)
