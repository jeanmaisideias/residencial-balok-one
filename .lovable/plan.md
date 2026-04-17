
O usuário quer saber como fornecer várias imagens para eu usar no layout do Balok One.

Vou explicar as opções diretamente — isso é uma pergunta de orientação, não requer mudança de código.

## Como enviar imagens para o layout

### Opção 1 — Upload direto no chat (recomendado)
- **Desktop:** clique no botão **+** no canto inferior esquerdo do chat → **Attach** (ou arraste e solte os arquivos direto na área do chat).
- **Mobile:** toque no **+** no canto inferior esquerdo → **Camera** ou **Attach**.
- Pode enviar **até 10 arquivos por mensagem**, cada um com **até 20MB**.
- Formatos aceitos: JPG, PNG, WEBP.

Junto do upload, escreva onde cada imagem deve entrar. Exemplo:
> "Imagem 1 = nova fachada (HeroSection). Imagens 2, 3, 4 = galeria. Imagem 5 = piscina (FullscreenSection antes dos Diferenciais)."

### Opção 2 — Em lote via ZIP
- Compacte todas as imagens em um `.zip` com nomes descritivos (`fachada.jpg`, `piscina.jpg`, `planta-garden.png`...).
- Envie pelo mesmo botão **+ → Attach**.
- Eu descompacto, salvo em `src/assets/` e substituo onde indicar.

### Opção 3 — Links externos (URLs)
- Cole as URLs públicas no chat (Google Drive público, Dropbox, Imgur, site da construtora etc.).
- Eu baixo, otimizo e adiciono ao projeto.

### Opção 4 — Geração por IA
- Se faltar alguma imagem, posso gerar via Lovable AI (Nano Banana). Basta descrever:
> "Gere uma foto aérea noturna do prédio com piscina iluminada, estilo cinematográfico."

## Onde as imagens entrariam no layout atual

Lugares com maior impacto visual onde novas imagens fazem diferença:

1. **HeroSection** — foto principal de fundo
2. **FullscreenSection (3 banners cinematográficos)** — fachada noturna, lazer, pôr do sol
3. **GallerySection** — 4 a 6 imagens lifestyle (scroll horizontal)
4. **PlantsSection** — plantas Padrão 40m², 43m² e Garden
5. **LocationSection** — vista aérea / mapa estilizado
6. **TrustSection / Footer** — logo Evolutta em alta resolução

## Dica para melhor resultado

Quando enviar, me diga:
- **Qual seção** cada imagem deve substituir (ou "use onde achar melhor")
- **Orientação** preferida (paisagem para fullscreen, retrato para destaques)
- Se quer que eu **mantenha** as atuais como fallback ou **substitua** definitivamente

Pronto para receber — pode mandar quando quiser.
