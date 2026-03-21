import { SectionReveal } from "./SectionReveal";
import { WhatsAppButton } from "./WhatsAppButton";
import equipeImg from "@/assets/equipe-construtora.jpg";

export function TrustSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container max-w-4xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <SectionReveal>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={equipeImg} alt="Equipe Evolutta" className="w-full aspect-[4/3] object-cover" />
            </div>
          </SectionReveal>

          <SectionReveal delay={100}>
            <div className="space-y-6">
              <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp">Quem Somos</p>
              <div className="flex gap-6">
                <div>
                  <p className="text-3xl font-extrabold text-whatsapp">13</p>
                  <p className="text-sm text-muted-foreground">Anos de experiência</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-whatsapp">100%</p>
                  <p className="text-sm text-muted-foreground">Obras entregues no prazo</p>
                </div>
              </div>
              <WhatsAppButton message="Venho do site do Balok One e quero falar com um especialista">
                Falar com especialista
              </WhatsAppButton>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
