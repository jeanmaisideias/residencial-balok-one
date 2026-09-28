# Painel administrativo básico — Ballock One (/ballockone/adm)

## Respostas às 3 perguntas

**1. Armazenamento dos conteúdos**
O site na WeData é estático (só arquivos HTML/JS/imagens), então não tem como gravar alterações sozinho. A solução mais simples é o **Lovable Cloud**, já incluído no projeto, sem conta nem assinatura extra:
- uma tabela única de conteúdos (chave → valor) para textos, links e URL do vídeo;
- um espaço de arquivos para as imagens substituídas;
- login por e-mail e senha para o administrador.

**2. Rota /ballockone/adm**
Pode ser usada normalmente. O `.htaccess` atual já redireciona qualquer rota para o site, então `/ballockone/adm` funciona sem mudar nada no servidor. A página não será indexada (noindex + bloqueio no robots.txt).

**3. Limitações técnicas relevantes**
- É preciso **enviar um novo ZIP à WeData uma única vez**. Depois disso, as edições feitas no painel aparecem no site sem novo upload.
- **Valores padrão:** o site continua com os textos e imagens atuais dentro do próprio código. Se o painel estiver vazio ou o Cloud ficar indisponível, o site mostra exatamente o que mostra hoje. Nada muda visualmente até alguém editar.
- **Carregamento:** os conteúdos editados chegam uma fração de segundo depois da página abrir. Para evitar uma "troca" visível no topo, a primeira dobra aguarda brevemente os dados (limite de ~800 ms, depois usa o padrão).
- **Vídeo do topo:** hoje é um arquivo MP4 dentro do site. O painel vai aceitar uma URL de MP4 (ou envio de um novo arquivo). Link do YouTube não funciona como vídeo de fundo automático.
- **Imagens:** o upload terá limite de 5 MB (JPG/PNG/WebP). Imagens pesadas deixam o site mais lento.
- **Usuário administrador:** um único acesso, criado por mim com o e-mail que vocês informarem. Cadastro público fica desativado.

## O que o painel terá

Login (e-mail e senha) → página única com campos agrupados por seção → botão "Salvar alterações" → mensagem de confirmação → botão Sair.

Seções e campos (somente conteúdos que já existem no site):
- **Hero:** selo superior, título (3 linhas), subtítulo, 4 destaques, textos dos 2 botões, vídeo.
- **Bloco emocional:** título, imagem.
- **Faixas com foto** (7 faixas entre seções): título/legenda e imagem de cada uma.
- **Galeria:** 6 imagens e suas legendas.
- **Plantas:** substituir as imagens das plantas existentes.
- **Condições/Financeiro:** valor "a partir de", sinal, parcelamento.
- **Vídeo da obra:** URL do vídeo.
- **Contato:** número do WhatsApp e mensagem padrão.
- **Chamada final:** título e subtítulo.

Imagens: mostra a imagem atual + botão "Substituir imagem" (e "Restaurar original"). Textos: campo de texto simples, sem formatação.

Nada de: novas páginas, novas seções, cores, fontes, layout, editor visual ou gestão de usuários.

## Detalhes técnicos

- Ativar Lovable Cloud. Tabela `site_content (key text pk, value text, updated_at)`: leitura pública (anon SELECT), escrita apenas para quem tem papel `admin` via `user_roles` + `has_role()`. Bucket público `site-images` com upload/remoção restritos a admin.
- Ativar login por e-mail; criar o usuário admin e inserir o papel `admin`. Sem tela de cadastro.
- `src/content/defaults.ts`: todos os valores atuais (textos + imports das imagens) com chaves fixas.
- `ContentProvider` + hook `useContent(key)`: busca todas as chaves uma vez, mescla com os padrões; cada componente troca o literal por `useContent("hero.title")` sem alterar JSX/classes.
- `WhatsAppButton` e `Header` leem número/mensagem do conteúdo (fallback atual).
- Rota `/adm` lazy-loaded (não pesa no site público), `meta robots noindex`, `Disallow: /ballockone/adm` no robots.txt. Proteção: `getUser()` + checagem de papel admin; escrita protegida no servidor pela RLS.
- Validar: site idêntico sem dados salvos (comparação de screenshots), login, edição de texto/imagem refletindo no site, logout, `build:external` 0 erros, novo ZIP.

## Preciso de vocês
- E-mail do administrador (a senha inicial vocês definem no primeiro acesso via link de redefinição).
