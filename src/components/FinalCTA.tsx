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
              <h2 className="text-2xl md:text-4xl font-extrabold text-balance leading-tight">
                Seu apartamento próprio começa com uma decisão
              </h2>
              <div className="flex flex-col gap-3">
                <WhatsAppButton message="Venho do site do Balok One e quero falar com um consultor">
                  Quero falar com um consultor
                </WhatsAppButton>
                <WhatsAppButton message="Venho do site do Balok One e quero garantir minha unidade" variant="outline">
                  Garantir minha unidade
                </WhatsAppButton>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
