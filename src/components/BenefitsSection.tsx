import { CalendarDays, Waves, MapPin, ShieldCheck } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

const diferenciais = [
  { icon: CalendarDays, title: "Entrada facilitada", desc: "Parcelada em até 60x" },
  { icon: Waves, title: "Lazer completo", desc: "Piscina, academia, beach tênis" },
  { icon: MapPin, title: "Bem localizado", desc: "7 min do centro de Indaial" },
  { icon: ShieldCheck, title: "Valorização", desc: "Condomínio fechado seguro" },
];

export function BenefitsSection() {
  return (
    <section id="sobre" className="section-padding bg-card">
      <div className="container max-w-5xl">
        <SectionReveal>
          <div className="text-center mb-14 md:mb-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-whatsapp mb-4">Diferenciais</p>
            <h2 className="font-display text-4xl md:text-6xl text-primary text-balance leading-[1.05]">
              Tudo que você precisa
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-14">
          {diferenciais.map((b, i) => (
            <SectionReveal key={b.title} delay={i * 80}>
              <div className="group p-8 md:p-10 rounded-2xl bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-14 h-14 rounded-2xl bg-whatsapp/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <b.icon className="w-7 h-7 text-whatsapp" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-primary mb-2">{b.title}</h3>
                <p className="text-base text-muted-foreground">{b.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={400}>
          <div className="text-center">
            <WhatsAppButton message="Quero saber valores e entrada">
              Quero saber valores e entrada
            </WhatsAppButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
