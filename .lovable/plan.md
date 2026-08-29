# Publicar em https://www.evoluttaconstrutora.com.br/ballockone

Objetivo: gerar um `dist` que funcione servido a partir do subdiretório `/ballockone/` em servidor externo, sem alterar layout, textos, imagens ou funcionalidades.

## O que será ajustado

1. **Base path do Vite**
   - `vite.config.ts`: `base: "/ballockone/"` apenas em build de produção (dev continua em `/` para o preview do Lovable não quebrar).

2. **Roteamento**
   - `src/App.tsx`: `BrowserRouter basename={import.meta.env.BASE_URL}` para que `/politica-de-privacidade` vire `/ballockone/politica-de-privacidade`.
   - Links internos com `<Link to="/...">` (Footer, PrivacyPolicy) continuam corretos automaticamente via basename.
   - `src/pages/NotFound.tsx`: o `<a href="/">` vira `<Link to="/">` para respeitar o basename (mesma aparência e texto).

3. **Assets**
   - Imagens importadas de `src/assets` já recebem o base automaticamente.
   - Fontes em `src/index.css` (`url('/fonts/...')`) e o favicon serão referenciados de forma compatível com o base para não apontarem para a raiz do domínio.

4. **SEO**
   - `index.html`: canonical e `og:url` para `https://www.evoluttaconstrutora.com.br/ballockone/`; mesma atualização na URL do JSON-LD.
   - `public/sitemap.xml`: as duas URLs passam a usar o novo domínio + `/ballockone`.
   - `public/robots.txt`: diretiva `Sitemap:` apontando para `https://www.evoluttaconstrutora.com.br/ballockone/sitemap.xml`.

5. **Refresh direto de URLs (deep links)**
   - Como o servidor é externo, será incluído um arquivo de fallback SPA (`public/.htaccess` para Apache, com comentário do equivalente Nginx) que redireciona qualquer caminho sob `/ballockone/` para `index.html`. Sem isso, atualizar a página em `/ballockone/politica-de-privacidade` retorna 404.

## Resultado

`npm run build` gera `dist/` com todos os caminhos prefixados por `/ballockone/`; basta copiar o conteúdo de `dist` para a pasta `ballockone` do servidor.

## Observação

O preview do Lovable continua funcionando normalmente porque o base só é aplicado no build de produção.
