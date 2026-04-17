import { CalendarDays, Waves, MapPin, ShieldCheck } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const diferenciais = [
  { icon: CalendarDays, title: "Entrada facilitada", desc: "Parcelada em até 60x sem complicação." },
  { icon: Waves, title: "Lazer completo", desc: "Piscina, academia, beach tênis e muito mais." },
  { icon: MapPin, title: "Bem localizado", desc: "A 7 minutos do centro de Indaial." },
  { icon: ShieldCheck, title: "Valorização", desc: "Condomínio fechado e seguro pra família." },
];

export function BenefitsSection() {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container max-w-6xl">
        <SectionReveal>
          <div className="mb-14 md:mb-20 max-w-2xl">
            <p className="eyebrow mb-4">Diferenciais</p>
            <h2 className="font-display text-4xl md:text-6xl text-primary text-balance leading-[1.02]">
              Tudo que você precisa
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {diferenciais.map((b, i) => (
            <SectionReveal key={b.title} delay={i * 80}>
              <div className="group p-8 md:p-10 rounded-2xl bg-card border border-border/60 hover:border-accent/30 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <b.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-primary mb-3">{b.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
