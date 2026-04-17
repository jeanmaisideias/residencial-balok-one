
## Polimento Final — Residencial Balok One

Mantém toda a direção premium atual. Foco em funcionalidade, mobile e conversão.

### 1. Header inteligente com troca de logo
- Estado topo (sobre hero): logos brancos
- Estado scrolled: logos pretos
- Transição cruzada 300ms

### 2. Polimento global de texto
- `text-wrap: balance` nos headlines
- Remover pontos finais de subtítulos
- Ajustar `max-width` para evitar órfãos

### 3. Hero — nova copy em 3 linhas
- "Apartamento em condomínio fechado"
- "com entrada de R$ 1.000?" (destaque máximo)
- "Sim, a gente fez"
- Sub: "Em Indaial, com parcelas acessíveis, lazer completo e condições especiais de lançamento"

### 4. Banda pós-hero
- Substituir imagem da família por render da fachada (gerar via IA)
- 70vh desktop / 42vh mobile
- "Seu novo endereço começa aqui"

### 5. Ícones premium
- Tamanhos maiores, stroke 1.5, containers maiores

### 6. Gallery — carrossel embla
- Auto-play 3s, pausa em hover/touch
- Loop, setas dentro do container, dots
- Swipe nativo mobile

### 7. Plantas — slider responsivo
- Tabs sempre visíveis, scroll horizontal mobile
- Auto-transition 4s, controles dentro do container

### 8. Construtora Evolutta
- Logo preto + texto institucional novo (13 anos, MCMV, acompanhamento)
- Layout texto/stats responsivo

### 9. Localização
- "No coração de Indaial — SC" + parágrafo sobre Rua Três Corações
- Cards de proximidade abaixo

### 10. Plantão de Vendas
- Card destacado com pin, aparece em Localização e perto do CTA final

### 11. Mobile polish
- Paddings reduzidos, controles dentro da viewport, stacks limpos

### 12. Micro detalhes
- Sombras mais fortes, lift sutil hover, radius consistente

### Arquivos
- Header.tsx, HeroSection.tsx, Index.tsx
- GallerySection.tsx (rebuild com embla)
- PlantsSection.tsx (rebuild com auto-slide)
- TrustSection.tsx, LocationSection.tsx, FinalCTA.tsx
- index.css
- Gerar: logo Evolutta branco, logo Evolutta preto, fachada premium
