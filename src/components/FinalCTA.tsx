import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

export function FinalCTA() {
  return (
    <section id="contato" className="section-padding bg-primary text-primary-foreground">
      <div className="container max-w-4xl text-center">
        <SectionReveal>
          <p className="eyebrow mb-5">Lançamento especial em Indaial</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-balance leading-[1.05] mb-6">
            Garanta o seu apartamento agora!
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/75 mb-10 max-w-3xl mx-auto text-pretty whitespace-nowrap-md">
            Comece com R$ 1.000. Condições de lançamento por tempo limitado.
          </p>
          <div className="flex justify-center">
            <WhatsAppButton message="Quero simular meu financiamento e garantir o meu apartamento no Ballock One">
              Quero garantir meu apartamento
            </WhatsAppButton>
          </div>
          <p className="mt-8 text-xs text-primary-foreground/50">
            Unidades mais vantajosas vendem rápido — condição promocional sujeita à disponibilidade
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
