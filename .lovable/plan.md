# Pacote final de produção para a WeData

Nenhuma alteração de conteúdo, layout, SEO ou funcionalidade. Apenas build e empacotamento.

## Passos

1. Rodar `npm run build:external` (base `/ballockone/`) e confirmar 0 erros.
2. Validar o `dist` gerado:
   - `index.html` referenciando `/ballockone/assets/...` (CSS e JS)
   - imagens e fontes com prefixo `/ballockone/`
   - `.htaccess`, `robots.txt`, `sitemap.xml`, `favicon.ico` presentes na raiz do `dist`
   - canonical e Open Graph em `https://www.evoluttaconstrutora.com.br/ballockone/`
   - GA4 `G-F9CC7EDNP8` e evento `whatsapp_click` presentes no bundle
   - React Router usando `basename` do base path
3. Teste em runtime: servir o `dist` localmente sob o caminho `/ballockone/`, abrir a home, verificar CSS/JS/imagens/fontes carregando (sem 404), navegação da rota `/ballockone/politica-de-privacidade` e disparo do `whatsapp_click`.
4. Gerar `ballockone-wedata-producao.zip` a partir de dentro do `dist` (sem pasta `dist` envolvendo, sem `src`/`node_modules`), incluindo arquivos ocultos como `.htaccess`.
5. Validação final: listar o conteúdo do ZIP e conferir que os arquivos aparecem na raiz.
6. Entregar o ZIP em `/mnt/documents` para download.

## Observação

Se algum item da checagem falhar, corrijo apenas a configuração de build/empacotamento — nunca conteúdo ou layout.
