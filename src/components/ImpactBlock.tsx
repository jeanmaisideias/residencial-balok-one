import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";
import { DollarSign } from "lucide-react";

export function ImpactBlock() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container max-w-2xl text-center">
        <SectionReveal>
          <DollarSign className="w-10 h-10 text-whatsapp mx-auto mb-4" />
          <p className="text-3xl md:text-5xl font-extrabold leading-tight mb-3">
            Comece com apenas{" "}
            <span className="text-whatsapp">R$ 1.000</span>
          </p>
          <p className="text-primary-foreground/70 text-lg mb-8">
            Entrada parcelada em até 60x para facilitar sua conquista
          </p>
          <WhatsAppButton message="Venho do site do Balok One e quero simular minha entrada">
            Simular minha entrada agora
          </WhatsAppButton>
        </SectionReveal>
      </div>
    </section>
  );
}
