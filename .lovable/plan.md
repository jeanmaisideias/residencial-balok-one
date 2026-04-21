
Objetivo: corrigir o Header para que os estados das logos sigam exatamente o comportamento esperado e parem de gerar trocas erradas e “sobressaltos”.

1. Corrigir a regra visual dos estados do header
- Estado inicial no topo, com header fechado e sobre o hero escuro:
  - usar a logo vertical branca da Evolutta
  - manter Caixa e Minha Casa Minha Vida nas versões brancas
- Estado após rolagem (“header abaixo”):
  - usar a logo horizontal preta anexada
  - manter Caixa e Minha Casa Minha Vida nas versões coloridas
- Estado de menu mobile aberto:
  - aplicar o mesmo visual do header rolado, para manter contraste e consistência com o fundo claro do drawer

2. Refatorar a lógica do componente Header
- Substituir a lógica atual baseada apenas em `open` para a logo horizontal.
- Criar estados visuais derivados mais claros, por exemplo:
  - `isTop = !scrolled && !open`
  - `isCompact = scrolled || open`
  - `showVerticalWhite = isTop`
  - `showHorizontalBlack = isCompact`
- Fazer com que links, botão do menu e logos de parceiros sigam a mesma regra visual, evitando combinações inconsistentes.

3. Eliminar o “tranco” da transição
- Parar de alternar logos com tamanhos muito diferentes dentro do mesmo enquadramento sem reserva de espaço.
- Usar um frame fixo para a área da marca no header, com largura e altura estáveis em desktop e mobile.
- Posicionar as duas versões da logo em camadas absolutas dentro desse frame e animar apenas:
  - `opacity`
  - leve `transform`/`scale`
- Não animar mudanças bruscas de altura da imagem principal; isso hoje é a principal fonte do sobressalto.
- Ajustar também a troca das logos Caixa/MCMV para fade sincronizado, sem reposicionamento.

4. Atualizar o asset correto da logo horizontal
- Garantir que o header use a logo horizontal preta anexada pelo usuário, e não uma variação anterior incorreta.
- Conferir proporção e enquadramento para que a marca não fique espremida nem pequena demais no header compacto.

5. Ajustar responsividade
- Desktop:
  - logo branca vertical maior no topo
  - logo horizontal preta mais compacta após scroll
- Mobile:
  - preservar leitura e alinhamento com o botão hamburguer
  - evitar que a troca de logo empurre o layout lateralmente

6. Validar visualmente após implementação
- Testar estes cenários:
  - carregamento inicial no topo
  - começar a rolar
  - voltar ao topo
  - abrir e fechar menu mobile no topo
  - abrir e fechar menu mobile após rolagem
- Confirmar que:
  - a logo branca vertical só aparece no topo com header fechado
  - a logo preta horizontal aparece no header rolado e no menu aberto
  - Caixa e Minha Casa Minha Vida acompanham corretamente o estado
  - não existe salto de tamanho, desalinhamento ou flicker

Detalhes técnicos
- Arquivo principal: `src/components/Header.tsx`
- Problema atual identificado:
  - `showHorizontalLogo = open` está errado para a regra desejada
  - a imagem principal ainda troca altura entre estados (`h-24...` para `h-9...`), causando instabilidade visual
- Solução técnica recomendada:
  - usar um container de marca com dimensões fixas
  - manter as logos sobrepostas
  - trocar por opacidade + pequena interpolação visual
  - ligar a logo horizontal preta ao estado `scrolled || open`, e a vertical branca ao estado “topo fechado”

Resultado esperado
- Header com comportamento previsível
- logos corretas em cada estado
- transição suave, profissional e sem desperdiçar novas tentativas de ajuste fino por lógica invertida
