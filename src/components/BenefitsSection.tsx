import { CalendarDays, Waves, MapPin, ShieldCheck } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

const diferenciais = [
  { icon: CalendarDays, title: "Entrada facilitada", desc: "Parcelada em até 60x para caber no seu bolso" },
  { icon: Waves, title: "Lazer completo", desc: "Piscina, academia, beach tênis, salão e muito mais" },
  { icon: MapPin, title: "Localização estratégica", desc: "A 7 minutos do centro de Indaial" },
  { icon: ShieldCheck, title: "Segurança e valorização", desc: "Condomínio fechado com alto potencial de valorização" },
];

export function BenefitsSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container max-w-5xl">
        <SectionReveal>
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp mb-3">Diferenciais</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary text-balance">
              Tudo o que importa em um só lugar
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10">
          {diferenciais.map((b, i) => (
            <SectionReveal key={b.title} delay={i * 80}>
              <div className="flex gap-4 p-6 rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 rounded-xl bg-whatsapp/10 flex items-center justify-center shrink-0">
                  <b.icon className="w-6 h-6 text-whatsapp" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-primary mb-1">{b.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{b.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={400}>
          <div className="text-center">
            <WhatsAppButton message="Venho do site do Balok One e quero saber valores e entrada">
              Quero saber valores e entrada
            </WhatsAppButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
