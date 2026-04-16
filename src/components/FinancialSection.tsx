import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

const numbers = [
  { value: "R$ 1.000", label: "de entrada" },
  { value: "60x", label: "para parcelar" },
  { value: "R$ 229.000", label: "a partir de" },
];

export function FinancialSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container max-w-5xl text-center">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-whatsapp mb-4">Condições</p>
          <h2 className="font-display text-4xl md:text-6xl text-primary mb-14 text-balance leading-[1.05]">
            Cabe no seu bolso
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mb-14">
          {numbers.map((n, i) => (
            <SectionReveal key={n.label} delay={i * 100}>
              <div className="px-4">
                <p className="font-display text-4xl md:text-5xl lg:text-6xl text-whatsapp tracking-tight leading-none mb-3">
                  {n.value}
                </p>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">{n.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={350}>
          <WhatsAppButton message="Quero simular financiamento do Balok One">
            Simular financiamento
          </WhatsAppButton>
        </SectionReveal>
      </div>
    </section>
  );
}
