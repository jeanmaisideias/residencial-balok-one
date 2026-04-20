import { AlertTriangle } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

export function ScarcitySection() {
  return (
    <section className="section-padding-compact bg-primary">
      <div className="container max-w-2xl text-center text-primary-foreground">
        <SectionReveal>
          <AlertTriangle className="w-10 h-10 text-whatsapp mx-auto mb-4" />
          <h2 className="text-xl md:text-2xl font-extrabold mb-3 text-balance">
            Poucas unidades disponíveis nesta condição
          </h2>
          <WhatsAppButton message="Venho do site do Ballok One e quero ver disponibilidade">
            Ver disponibilidade
          </WhatsAppButton>
        </SectionReveal>
      </div>
    </section>
  );
}
