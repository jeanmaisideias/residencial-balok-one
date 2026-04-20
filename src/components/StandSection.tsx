import { MapPin, Clock } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

export function StandSection() {
  return (
    <section className="section-padding-compact bg-secondary">
      <div className="container max-w-2xl text-center">
        <SectionReveal>
          <div className="w-12 h-12 rounded-xl bg-whatsapp/10 flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-6 h-6 text-whatsapp" />
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold text-primary mb-2">
            Stand de Vendas
          </h2>
          <p className="text-sm text-muted-foreground mb-1">
            Rua Três Corações – Jardim Benedito
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Indaial – SC
          </p>
          <p className="text-base text-primary font-medium mb-6">
            Visite e conheça o empreendimento pessoalmente
          </p>
          <WhatsAppButton message="Venho do site do Ballok One e quero agendar uma visita ao stand">
            Agendar visita ao stand
          </WhatsAppButton>
        </SectionReveal>
      </div>
    </section>
  );
}
