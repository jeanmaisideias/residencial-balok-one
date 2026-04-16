import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

export function FinalCTA() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container max-w-3xl text-center">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-whatsapp mb-5">Últimas unidades</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-balance leading-[1.05] mb-6">
            Garanta o seu agora
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto">
            Comece com R$ 1.000. Condições de lançamento por tempo limitado.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <WhatsAppButton message="Quero simular financiamento do Balok One">
              Simular financiamento
            </WhatsAppButton>
            <WhatsAppButton
              message="Quero saber valores e entrada"
              variant="hero-outline"
            >
              Falar com consultor
            </WhatsAppButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
