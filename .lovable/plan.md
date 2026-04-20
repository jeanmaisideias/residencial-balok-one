

## Aplicar fonte Syne nos títulos

Substituir Michroma por **Syne** (Google Fonts) em todos os títulos grandes (h1–h4 e `.font-display`), mantendo Inter no corpo.

### Mudanças

**`src/index.css`**
- Trocar o `@import` do Google Fonts: remover `Michroma`, adicionar `Syne:wght@600;700;800`.
- Em `h1, h2, h3, h4`: trocar `font-family` para `'Syne', 'Manrope', system-ui, sans-serif` e manter `font-weight: 700`.
- Em `.font-display`: mesma troca, com `font-weight: 800` para os títulos hero (mais impacto).

**`tailwind.config.ts`**
- Atualizar `fontFamily.display` para `['"Syne"', '"Manrope"', 'system-ui', 'sans-serif']`.

### Notas
- Syne tem pesos 600/700/800 — usaremos 700 padrão e 800 no `.font-display` (Hero).
- Mantém o `letter-spacing: -0.025em` atual; Syne responde bem a tracking levemente negativo.
- Nenhum componente precisa de alteração — todos os títulos herdam via h1–h4 ou `.font-display`.

