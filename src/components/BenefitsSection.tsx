import { LayoutGrid, MapPin, Building2, ShieldCheck, CalendarDays } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

const benefits = [
  { icon: LayoutGrid, title: "Plantas inteligentes", desc: "Espaços otimizados para o seu conforto" },
  { icon: MapPin, title: "Localização estratégica", desc: "Perto de tudo que você precisa" },
  { icon: Building2, title: "Lazer completo", desc: "Piscina, academia, salão e muito mais" },
  { icon: ShieldCheck, title: "Segurança", desc: "Condomínio fechado com monitoramento" },
];

export function BenefitsSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container">
        <SectionReveal>
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary text-center mb-12 text-balance">
            Tudo o que você precisa em um só lugar
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          {benefits.map((b, i) => (
            <SectionReveal key={b.title} delay={i * 80}>
              <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-whatsapp/10 flex items-center justify-center mb-4">
                  <b.icon className="w-6 h-6 text-whatsapp" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-primary mb-1">{b.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground text-pretty">{b.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Highlight */}
        <SectionReveal delay={350}>
          <div className="flex items-center justify-center gap-3 bg-primary/5 rounded-xl px-6 py-4 mb-8 max-w-md mx-auto">
            <CalendarDays className="w-5 h-5 text-whatsapp shrink-0" />
            <span className="text-sm font-bold text-primary">Entrada parcelada em até 60x</span>
          </div>
        </SectionReveal>

        <SectionReveal delay={400}>
          <div className="text-center">
            <WhatsAppButton message="Venho do site do Balok One e quero simular minha condição">
              Simular minha condição
            </WhatsAppButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
