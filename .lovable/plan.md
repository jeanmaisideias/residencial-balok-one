

## Reduzir logos Caixa e MCMV em 15%

Vou reduzir o tamanho dos logos institucionais (Caixa e Minha Casa Minha Vida) no rodapé em 15%, mantendo o alinhamento pela base já existente.

### O que será feito

- **Logo Caixa**: de `h-[34px] md:h-[41px]` para `h-[29px] md:h-[35px]`
- **Logo MCMV**: de `h-[41px] md:h-[48px]` para `h-[35px] md:h-[41px]`

### Detalhes técnicos

Arquivo: `src/components/Footer.tsx` (bloco "Parceiros institucionais")

```tsx
<div className="mt-auto pt-10 flex items-baseline gap-5 md:gap-6 flex-nowrap">
  <img src={logoCaixa} alt="Caixa Econômica Federal" className="h-[29px] md:h-[35px] w-auto opacity-90 shrink-0" />
  <img src={logoMcmv} alt="Minha Casa Minha Vida" className="h-[35px] md:h-[41px] w-auto opacity-90 shrink-0" />
</div>
```

O `items-baseline` e o `mt-auto` permanecem, garantindo que os logos continuem alinhados pela base com o link "Política de Privacidade".

