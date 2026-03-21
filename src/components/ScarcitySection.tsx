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
            Unidades limitadas e alta procura na região
          </h2>
          <p className="text-primary-foreground/70 text-sm mb-6">
            Não perca a chance de garantir o seu.
          </p>
          <WhatsAppButton message="Olá, quero ver as unidades disponíveis do Residencial Balok One">
            Ver unidades disponíveis
          </WhatsAppButton>
        </SectionReveal>
      </div>
    </section>
  );
}
