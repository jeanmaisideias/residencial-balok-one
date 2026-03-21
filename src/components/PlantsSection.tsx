import { LayoutGrid } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

export function PlantsSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container max-w-3xl text-center">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp mb-3">Plantas</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-4 text-balance">
            Apartamentos inteligentes
          </h2>
          <p className="text-muted-foreground text-pretty mb-8">
            Pensados para aproveitar cada espaço com conforto e funcionalidade.
          </p>
        </SectionReveal>

        <SectionReveal delay={100}>
          {/* Plant image placeholders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-2xl bg-card border border-border flex flex-col items-center justify-center gap-3"
              >
                <LayoutGrid className="w-10 h-10 text-muted-foreground/40" />
                <span className="text-sm text-muted-foreground">Planta {i === 1 ? "Tipo A" : "Tipo B"}</span>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={200}>
          <WhatsAppButton message="Olá, quero receber as plantas do Residencial Balok One no WhatsApp">
            Receber plantas no WhatsApp
          </WhatsAppButton>
        </SectionReveal>
      </div>
    </section>
  );
}
