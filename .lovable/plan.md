
## Reorganização da seção “Quem entrega o seu novo lar” em 3 colunas

Vou ajustar a seção para ficar exatamente com três blocos principais no desktop:

```text
┌──────────────────┬────────────────────────────┬──────────────────┐
│  Coluna 1         │  Coluna 2                  │  Coluna 3         │
│  Imagem da equipe │  Logo + título + textos    │  Cards numéricos  │
│                  │  + botão WhatsApp          │                  │
└──────────────────┴────────────────────────────┴──────────────────┘
```

### Estrutura proposta

1. **Coluna esquerda: imagem**
   - A imagem anexa da equipe ficará isolada na primeira coluna.
   - Manterei o estilo atual com bordas arredondadas, sombra e proporção visual elegante.
   - No desktop, a imagem ocupará bem a altura da seção para dar mais presença visual.

2. **Coluna central: conteúdo institucional**
   - Logo Evolutta preto no topo, mantendo o tamanho maior solicitado anteriormente.
   - Eyebrow “Construtora Evolutta”.
   - Título “Quem entrega o seu novo lar”.
   - Textos explicativos da construtora.
   - Botão WhatsApp abaixo dos textos.
   - Essa coluna será o bloco principal de leitura.

3. **Coluna direita: cards de números**
   - Manter os cards empilhados:
     - “13+ anos de mercado”
     - “100% obras entregues no prazo”
     - “500+ famílias felizes”
   - Os números permanecerão em verde, como solicitado.
   - Os cards terão o mesmo estilo atual: fundo branco, bordas arredondadas, sombra e leve hover.

### Responsividade

- **Desktop:** 3 colunas lado a lado.
- **Tablet/mobile:** empilhar em ordem lógica:
  1. Logo/texto
  2. Imagem
  3. Cards
- Isso mantém a leitura mais natural em telas pequenas e evita que os cards fiquem apertados.

### Ajustes mínimos

Vou mexer apenas no layout da seção `TrustSection`, mantendo:
- O conteúdo atual dos textos.
- A imagem já adicionada.
- O logo preto.
- O CTA de WhatsApp.
- Os três cards existentes.
- A identidade visual atual do site.

### Arquivo afetado

- `src/components/TrustSection.tsx`
