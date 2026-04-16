import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

export function FinancialSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container max-w-3xl text-center">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp mb-3">Oportunidade</p>
          <h2 className="text-2xl md:text-4xl font-extrabold text-primary mb-5 text-balance leading-tight">
            Você pode pagar menos<br />que um aluguel
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 text-pretty max-w-xl mx-auto">
            Com subsídio do governo e entrada facilitada, este é o momento ideal para conquistar seu imóvel.
          </p>
          <WhatsAppButton message="Venho do site do Balok One e quero ver minha parcela">
            Quero ver minha parcela
          </WhatsAppButton>
        </SectionReveal>
      </div>
    </section>
  );
}
