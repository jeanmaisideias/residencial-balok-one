

## Modernizar a faixa de ícones do empreendimento

Transformar a linha atual de 5 ícones planos (QuickInfoSection) numa faixa visualmente rica, com glifos customizados, profundidade e ritmo — o "cartão de visitas" técnico do Ballok One.

### Direção visual

Sair do padrão "ícone Lucide redondinho dentro de quadradinho verde claro" (genérico de landing page) e adotar **selos/medalhões** com personalidade própria, alinhados ao tom premium da Prometo.

```text
┌────────────┐   ┌────────────┐   ┌────────────┐   ┌────────────┐   ┌────────────┐
│   ╔════╗   │   │   ╔════╗   │   │   ╔════╗   │   │   ╔════╗   │   │   ╔════╗   │
│   ║ 🏢 ║   │   │   ║ 🛏  ║   │   │   ║ 📐 ║   │   │   ║ 🚗 ║   │   │   ║ ✓  ║   │
│   ╚════╝   │   │   ╚════╝   │   │   ╚════╝   │   │   ╚════╝   │   │   ╚════╝   │
│    120     │   │     2      │   │  40-43     │   │     1      │   │   MCMV     │
│ APARTAMENT │   │ DORMITÓRIOS│   │    M²      │   │   VAGA     │   │  CAIXA     │
└────────────┘   └────────────┘   └────────────┘   └────────────┘   └────────────┘
   separator       separator       separator        separator
```

### Mudanças

**`src/components/QuickInfoSection.tsx`** (reformulado)

1. **Hierarquia numérica em destaque**
   - Número/valor grande em **Prometo ExtraBold** (ex.: `120`, `2`, `40-43`, `1`, `✓`).
   - Label pequeno em caps, tracking aberto, abaixo (`APARTAMENTOS`, `DORMITÓRIOS`, `M²`, `VAGA`, `MCMV CAIXA`).
   - Inverte a leitura: hoje só se vê o ícone; passa a se ver o número.

2. **Medalhão com profundidade** (substitui o quadrado verde claro)
   - Círculo com gradiente sutil (verde escuro → verde médio), sombra suave inferior, anel fino externo (`ring-1 ring-accent/20`).
   - Ícone Lucide branco dentro, `strokeWidth={1.5}` (linhas mais finas = mais elegante).
   - Hover: leve `scale-105` + intensifica sombra.

3. **Separadores verticais** entre os itens (em desktop)
   - Linha fina `bg-border/60` de 60% da altura, alinhada ao centro vertical.
   - Some no mobile (vira grid 2 colunas como já é).

4. **Faixa com presença**
   - Fundo: gradiente muito sutil `from-stone via-background to-stone` em vez de `bg-stone` chapado.
   - Borda superior/inferior com 1px `border-accent/15` (linha de respiro verde).
   - Pequeno detalhe: micro-traço decorativo (linha verde de 40px) acima do título da seção, no estilo "selo editorial".

5. **MCMV vira selo especial**
   - Em vez do mesmo medalhão verde, ganha tratamento de "selo de garantia": fundo branco, anel verde duplo, ícone `BadgeCheck` preenchido. Comunica "credencial oficial" e quebra a repetição visual dos 5 círculos iguais.

### Detalhes técnicos

- Manter ícones Lucide (`Building2`, `Bed`, `Ruler`, `Car`, `BadgeCheck`) — só muda o container e o stroke.
- Números usam `font-display` (Prometo) com `text-4xl md:text-5xl`, `font-extrabold`, `tracking-tight`.
- Labels: `text-[10px] md:text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground`.
- Grid: `grid-cols-2 sm:grid-cols-3 md:grid-cols-5` mantido; separadores via `divide-x` condicional ou pseudo-elemento `after:` com `hidden md:block`.
- Sem novas dependências, sem novos assets — só CSS/Tailwind e reorganização do JSX.
- Memória: atualizar `mem://design/layout-patterns` com a regra "valor grande em Prometo acima, label em caps abaixo" para essa faixa de credenciais.

