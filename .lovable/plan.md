

## Corrigir deformação do logo Evolutta no rodapé

O logotipo da Evolutta está aparecendo esticado horizontalmente no rodapé. A imagem original está correta (proporção 1920×625), mas o container flex da coluna da marca (`flex flex-col`, que por padrão usa `align-items: stretch`) está esticando a `<img>` para ocupar toda a largura da coluna, ignorando a proporção natural mesmo com `h-[58px] w-auto`.

### O que será feito

- Adicionar `self-start` (ou equivalente) ao elemento `<img>` do logo Evolutta no `Footer.tsx` para que ele respeite sua proporção intrínseca em vez de esticar horizontalmente junto com a coluna flex.

### Detalhes técnicos

- Arquivo: `src/components/Footer.tsx`
- Mudança na linha do logo:

```tsx
<img 
  src={logoEvolutta} 
  alt="Evolutta Construtora e Incorporadora" 
  className="h-12 md:h-[58px] w-auto self-start" 
/>
```

Isso impede o `align-items: stretch` padrão do flex container de deformar a imagem, mantendo o tamanho controlado apenas pela altura definida (`h-12` no mobile / `h-[58px]` no desktop) com largura proporcional automática.

