import { SectionReveal } from "./SectionReveal";
import { WhatsAppButton } from "./WhatsAppButton";
import equipeImg from "@/assets/equipe-construtora.jpg";

const stats = [
  { value: "13", label: "Anos de mercado" },
  { value: "100%", label: "Obras no prazo" },
  { value: "+500", label: "Unidades entregues" },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <SectionReveal>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={equipeImg} alt="Equipe Evolutta" className="w-full aspect-[4/3] object-cover" />
            </div>
          </SectionReveal>

          <SectionReveal delay={100}>
            <div className="space-y-6">
              <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp">Construtora</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary text-balance">
                Quem entrega seu apartamento
              </h2>
              <div className="grid grid-cols-3 gap-4 py-2">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl md:text-3xl font-extrabold text-whatsapp">{s.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                  </div>
                ))}
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
