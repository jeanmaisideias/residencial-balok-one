import { CalendarDays, CheckCircle } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

export function TimelineSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container max-w-3xl text-center">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp mb-3">Prazo</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-8 text-balance">
            Planejamento sólido com prazo definido
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-3 bg-card rounded-xl p-5 shadow-sm flex-1 w-full sm:w-auto">
              <CalendarDays className="w-8 h-8 text-whatsapp shrink-0" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Início da obra</p>
                <p className="text-lg font-bold text-primary">Junho de 2026</p>
              </div>
            </div>
            <div className="hidden sm:block w-12 h-0.5 bg-border" />
            <div className="flex items-center gap-3 bg-card rounded-xl p-5 shadow-sm flex-1 w-full sm:w-auto">
              <CheckCircle className="w-8 h-8 text-whatsapp shrink-0" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Entrega prevista</p>
                <p className="text-lg font-bold text-primary">Dezembro de 2028</p>
              </div>
            </div>
          </div>

          <WhatsAppButton message="Olá, quero garantir minha unidade na planta do Residencial Balok One">
            Quero garantir na planta
          </WhatsAppButton>
        </SectionReveal>
      </div>
    </section>
  );
}
