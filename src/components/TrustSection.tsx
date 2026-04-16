import { SectionReveal } from "./SectionReveal";
import { WhatsAppButton } from "./WhatsAppButton";

const stats = [
  { value: "13+", label: "anos de mercado" },
  { value: "100%", label: "obras no prazo" },
  { value: "+500", label: "unidades entregues" },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container max-w-5xl text-center">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-whatsapp mb-4">Construtora Evolutta</p>
          <h2 className="font-display text-4xl md:text-6xl text-primary mb-16 text-balance leading-[1.05]">
            Confiança que entrega
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 mb-14">
          {stats.map((s, i) => (
            <SectionReveal key={s.label} delay={i * 100}>
              <div>
                <p className="font-display text-5xl md:text-7xl text-primary tracking-tight leading-none mb-3">
                  {s.value}
                </p>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">{s.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={350}>
          <WhatsAppButton message="Venho do site do Balok One e quero falar com um especialista">
            Falar com especialista
          </WhatsAppButton>
        </SectionReveal>
      </div>
    </section>
  );
}
