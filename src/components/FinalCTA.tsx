import familyImg from "@/assets/family-happy.jpg";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

export function FinalCTA() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container max-w-4xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <SectionReveal>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={familyImg} alt="Família feliz" className="w-full aspect-[4/3] object-cover" />
            </div>
          </SectionReveal>

          <SectionReveal delay={100}>
            <div className="space-y-6">
              <p className="text-xs font-semibold tracking-wider uppercase text-accent">Últimas oportunidades</p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-balance leading-tight">
                Unidades limitadas com condições de lançamento
              </h2>
              <p className="text-primary-foreground/80 text-pretty">
                Comece com apenas R$ 1.000 e garanta seu apartamento.
              </p>
              <div className="flex flex-col gap-3">
                <WhatsAppButton message="Venho do site do Balok One e quero falar no WhatsApp">
                  Falar no WhatsApp
                </WhatsAppButton>
                <WhatsAppButton
                  message="Quero simular financiamento do Balok One"
                  variant="outline"
                >
                  Simular financiamento
                </WhatsAppButton>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
