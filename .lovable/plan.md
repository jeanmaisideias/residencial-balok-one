
## Reorganizar a seção "Comece com pouco" conforme print

A imagem foi inserida no lugar errado (em cima da palavra "Limitadas"). No print, a imagem aparece como um **card vertical à direita**, ao lado do título principal — e os 3 stats (R$ 1.000 | 60x | Limitadas) ficam alinhados em uma única linha embaixo, ocupando toda a largura.

### Layout alvo (desktop)

```text
┌─────────────────────────────────┬──────────────────┐
│ CONDIÇÃO ESPECIAL DE LANÇAMENTO │   ╭──────────╮   │
│                                 │   │          │   │
│ Comece com pouco.               │   │  imagem  │   │
│ Conquiste muito!                │   │  sala    │   │
│                                 │   │  cozinha │   │
│                                 │   ╰──────────╯   │
└─────────────────────────────────┴──────────────────┘
┌──────────────┬──────────────┬──────────────────────┐
│ R$ 1.000     │ 60x          │ Limitadas            │
│ DE SINAL     │ ENTRADA PARC.│ UNIDADES DISPONÍVEIS │
└──────────────┴──────────────┴──────────────────────┘
[ Botão CTA ]   Devido a alta procura consulte...
```

### Mudanças em `src/components/FinancialSection.tsx`

1. **Remover** o bloco `{i === 2 && (...)}` que renderiza a imagem dentro do stat "Limitadas".
2. **Envolver** o eyebrow + heading num grid de 2 colunas (`md:grid-cols-[1fr_auto]`):
   - Coluna esquerda: eyebrow + `<h2>` (como já está).
   - Coluna direita: novo card com a imagem `salaCozinhaImg`, com `rounded-2xl`, `overflow-hidden`, `shadow-elevated`, dimensões fixas `w-[260px] lg:w-[320px] h-[180px] lg:h-[220px]`, `object-cover`. Ocultar no mobile (`hidden md:block`) para não competir com o título.
3. **Manter** o grid dos 3 stats abaixo (R$ 1.000 / 60x / Limitadas) intacto em uma linha (`grid-cols-1 md:grid-cols-3`).
4. **Manter** o CTA e copy inalterados.

### Arquivos
- `src/components/FinancialSection.tsx` (editado)
