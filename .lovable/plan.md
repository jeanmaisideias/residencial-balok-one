

## Padronizar botões WhatsApp na versão mobile

Hoje, vários CTAs do site têm textos longos que quebram em 2–3 linhas no mobile, e o ícone do WhatsApp encolhe/desalinha. Vou padronizar o componente e encurtar os rótulos para ficarem em 1 linha (ou no máximo 2 equilibradas) com aparência consistente em todo o site.

### 1. Ajustes no componente `WhatsAppButton` (`src/components/WhatsAppButton.tsx`)

- Adicionar `shrink-0` ao ícone `MessageCircle` para que ele nunca diminua quando o texto for longo.
- Adicionar `leading-tight text-center` ao `<a>` para alinhamento limpo quando houver quebra.
- O texto interno será envolvido em um `<span>` para manter alinhamento ao lado do ícone.

### 2. Ajustes na classe `.btn-whatsapp` e `.btn-whatsapp-outline` (`src/index.css`)

- Mobile: `px-6 py-3.5 text-[15px]`
- Desktop (md): `px-7 py-4 text-base`
- Adicionar `min-h-[52px]` para garantir altura uniforme entre botões com 1 e 2 linhas.
- Manter `gap-2.5` entre ícone e texto.

### 3. Encurtar textos dos CTAs (mantém intenção, padroniza tamanho)

| Componente | Antes | Depois |
|---|---|---|
| `StandSection` | "Agendar visita ao stand" | "Agendar visita" |
| `EmotionalBlock` | "Quero atendimento para entender como comprar" | "Quero saber como comprar" |
| `ConditionsSection` | "Simular minha parcela" | "Simular parcela" |
| `FinancialSection` | "Quero saber se ainda dá tempo de comprar" | "Ainda dá tempo? Quero saber" |
| `FinalCTA` | "Quero simular meu financiamento e garantir o meu apartamento" | "Quero garantir meu apartamento" |
| `LeisureSection` | "Quero conhecer o lazer completo" | "Conhecer o lazer completo" |
| `ApartmentExperience` (1) | "Quero ver mais detalhes do apartamento" | "Ver mais detalhes" |
| `ApartmentExperience` (2) | "Quero receber fotos e plantas no WhatsApp" | "Receber fotos e plantas" |
| `ApartmentConfig` | "Quero escolher minha unidade" | "Escolher minha unidade" |
| `LocationSection` (1) | "Consultar rota para visitar" | "Consultar rota" |
| `TimelineSection` | "Garantir na planta" | (mantém) |
| `LocationSection` (2) | "Agendar visita" | (mantém) |
| `GallerySection` | "Quero conhecer melhor" | (mantém) |
| `HeroSection` | "Quero falar com especialista" / "Simular financiamento" | (mantém — já curtos) |
| `PlantsSection` | "Receber plantas no WhatsApp" | (mantém) |
| `ScarcitySection` | (verificar — provavelmente curto) | (mantém) |

As mensagens enviadas ao WhatsApp (`message`) permanecem completas e descritivas — só o texto visível do botão fica enxuto.

### 4. Resultado esperado

- Todos os CTAs em 1 linha no mobile (390px), no máximo 2 linhas equilibradas em telas muito estreitas (320px).
- Ícone do WhatsApp sempre no tamanho `w-5 h-5`, alinhado verticalmente com o texto.
- Altura uniforme dos botões, padding consistente, mesma aparência premium em todo o site.
- Headings já existentes ("Não é só um apartamento. É o fim do aluguel...") permanecem intactos — apenas os CTAs mudam.

