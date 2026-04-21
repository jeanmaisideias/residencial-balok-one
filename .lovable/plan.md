

## Converter todas as imagens para WebP

Vou converter todas as imagens do projeto (JPG, JPEG, PNG) para o formato WebP, que oferece compressão muito superior mantendo a mesma qualidade visual. Isso vai deixar o site mais leve e rápido para carregar — especialmente importante no mobile.

### O que será feito

1. **Mapear todas as imagens** nas pastas `src/assets/` e `public/`, identificando os formatos atuais (JPG, PNG).
2. **Converter para WebP** com qualidade 85 (excelente equilíbrio entre tamanho e qualidade visual). Logos e imagens com transparência serão convertidos preservando o canal alpha.
3. **Atualizar todas as referências** nos componentes `.tsx` para apontar para os novos arquivos `.webp`.
4. **Remover os arquivos originais** (JPG/PNG) após confirmar que tudo funciona, para manter o projeto limpo.
5. **Verificar visualmente** o site após a conversão para garantir que nenhuma imagem ficou quebrada e que a qualidade está preservada.

### Detalhes técnicos

- Ferramenta: `cwebp` (libwebp) executada via `nix run nixpkgs#libwebp`.
- Qualidade: `-q 85` para fotos, `-q 90 -alpha_q 100` para PNGs com transparência (logos).
- Substituição em massa nos imports usando `sed` nos arquivos `.tsx`.
- Pastas afetadas: `src/assets/` (incluindo `src/assets/balok/`) e `public/`.
- Os imports nos componentes (Hero, Gallery, Leisure, Footer, Index, etc.) serão atualizados de `.jpg`/`.png` para `.webp`.
- O arquivo `public/placeholder.svg` e `public/robots.txt` não serão tocados (SVG já é otimizado).

### Ganho esperado

WebP normalmente reduz o tamanho dos arquivos entre 25% e 50% comparado a JPG e até 80% comparado a PNG, sem perda visual perceptível. Isso melhora o LCP (Largest Contentful Paint) e a experiência geral, principalmente em conexões móveis.

