

## Reorganização da Seção "Plantas"

### Diagnóstico atual
A seção mistura tudo em uma linha só (carrossel à esquerda + dados à direita), e gera ruído visual:
- Cabeçalho ("Inteligente. Funcional") fica solto e curto demais.
- Tabs de seleção ficam separadas do conteúdo, parecendo flutuando.
- Coluna direita tem hierarquia confusa: eyebrow → área enorme → "de área privativa" → 4 ícones grandes → CTA. Os ícones verdes grandes competem com o número da metragem.
- O destaque do "Garden" (jardim privativo) só aparece quando o usuário troca a aba — perde-se a oportunidade de comunicar a exclusividade.
- O card branco da planta tem muito padding e o indicador (dots) é redundante com as tabs.

### Nova estrutura proposta

```text
┌─────────────────────────────────────────────────────────┐
│  EYEBROW: Plantas                                        │
│  H2: Plantas inteligentes para viver bem em 40 m²       │
│  Sub: Dois dormitórios, sala integrada e varanda        │
│       gourmet em todas as opções                         │
└─────────────────────────────────────────────────────────┘

┌──────────── TABS centralizadas (3 opções) ─────────────┐
│   [ 40 m² ]   [ 43 m² ]   [ Garden • exclusiva ]        │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────┬───────────────────────────────┐
│                         │  PLANTA 40 M²                 │
│                         │  ───────────                  │
│      [ imagem da        │  40 m²  de área privativa     │
│        planta,          │                               │
│        carrossel ]      │  ✓ 2 dormitórios              │
│                         │  ✓ Sala e cozinha integradas  │
│   (sem dots, troca      │  ✓ Varanda com churrasqueira  │
│    via tabs)            │  ✓ 1 vaga de garagem          │
│                         │                               │
│                         │  [Selo Garden quando ativo]   │
│                         │                               │
│                         │  [CTA WhatsApp full-width]    │
└─────────────────────────┴───────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  RODAPÉ DA SEÇÃO — 3 mini-cards comparativos             │
│  ┌──────────┐  ┌──────────┐  ┌──────────────────────┐  │
│  │ 40 m²    │  │ 43 m²    │  │ Garden               │  │
│  │ Compacto │  │ Ampliado │  │ 43 m² + jardim privé │  │
│  └──────────┘  └──────────┘  └──────────────────────┘  │
│  (clicáveis, trocam a planta exibida acima)              │
└─────────────────────────────────────────────────────────┘
```

### Mudanças concretas

1. **Cabeçalho mais informativo** — título completo + subtítulo curto. Centralizado, com mais respiro.
2. **Tabs reposicionadas** — centralizadas, com o "Garden" destacado por um pequeno selo "exclusiva".
3. **Coluna de detalhes mais limpa**:
   - Substituir os 4 círculos verdes grandes por uma lista compacta com checkmark sutil (ícone pequeno + texto), liberando hierarquia visual para o número da metragem.
   - Mover o destaque "Jardim privativo exclusivo" para um selo no topo do card (acima da metragem), só quando Garden estiver ativo.
   - CTA full-width na coluna, alinhado ao final.
4. **Carrossel** — remover dots redundantes (as tabs já controlam), reduzir padding interno do card branco para a planta ocupar mais espaço, manter autoplay 5s.
5. **Comparativo final** — adicionar 3 mini-cards abaixo, mostrando as 3 plantas lado a lado com 1 frase resumo cada. Funcionam como atalho visual e substituem a necessidade de o usuário trocar tabs para descobrir as diferenças.
6. **Mobile** — empilhar (planta em cima, detalhes embaixo), tabs com scroll horizontal mantido, mini-cards comparativos em coluna única.

### Conformidade com regras do projeto
- Mantém: card branco com a planta, slideshow automático, sem emojis, CTA WhatsApp em verde, copy pt-BR, label vertical acima do valor ("de área privativa" abaixo de "40 m²" — invertemos para seguir o padrão "A partir de" / "R$ 239 mil": **"PLANTA 40 M²" eyebrow acima, valor abaixo** ✓).
- Ícones permanecem Lucide; trocados de círculos grandes para checkmarks discretos para reduzir competição visual.

### Arquivo afetado
- `src/components/PlantsSection.tsx` — reescrita completa do JSX, mesma lógica de Embla.

