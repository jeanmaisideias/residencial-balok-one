
## Adicionar marcador no endereço correto do mapa

Hoje a seção de Localização usa um `iframe` do Google Maps Embed apontando para coordenadas aproximadas, sem um pino fixo no endereço do empreendimento (Rua Três Corações, Jardim Benedito — Indaial/SC).

### O que será feito

1. **Trocar o embed para um link com marcador real**
   - Substituir o `src` do `iframe` em `src/components/LocationSection.tsx` pelo formato `https://www.google.com/maps?q=...&output=embed`, usando o endereço completo "Rua Três Corações, Jardim Benedito, Indaial - SC".
   - Esse formato força o Google a exibir um **pino vermelho fixo** exatamente sobre o endereço pesquisado, em vez de só centralizar o mapa.
   - Manter `loading="lazy"`, `referrerPolicy` e o `title` atuais para acessibilidade e performance.

2. **Adicionar um botão "Abrir no Google Maps"**
   - Logo abaixo (ou sobreposto ao canto do mapa) incluir um link discreto que abre `https://www.google.com/maps/search/?api=1&query=...` em nova aba.
   - Permite ao visitante traçar rota direto pelo celular, reforçando conversão.

3. **Ajuste visual mínimo**
   - Manter o container, sombra, bordas arredondadas e o leve overlay já existentes.
   - Sem mudanças em outras seções, cores ou estrutura.

### Observação técnica
O Embed básico do Google Maps (sem API key) **não permite** marcadores customizados com ícone próprio. Para um pino totalmente personalizado (cor, logo Ballock One) seria necessário migrar para a Google Maps JavaScript API com chave + biblioteca tipo `@vis.gl/react-google-maps`, o que envolve cadastro de billing no Google Cloud. A solução proposta acima entrega o marcador correto no endereço sem custo nem chave de API.

### Arquivo afetado
- `src/components/LocationSection.tsx`
