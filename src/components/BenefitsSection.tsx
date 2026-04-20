import { LayoutGrid, MapPin, Building2, ShieldCheck, MessageCircle } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const diferenciais = [
  {
    icon: LayoutGrid,
    title: "Plantas inteligentes",
    desc: "Espaços otimizados para o seu conforto",
  },
  {
    icon: MapPin,
    title: "Localização estratégica",
    desc: "Perto de tudo que você precisa",
  },
  {
    icon: Building2,
    title: "Estrutura completa",
    desc: "Lazer e conveniência no seu condomínio",
  },
  {
    icon: ShieldCheck,
    title: "Segurança para sua família",
    desc: "Condomínio fechado com monitoramento",
  },
];

const WHATSAPP_URL =
  "https://wa.me/5547999999999?text=Ol%C3%A1!%20Quero%20simular%20minha%20condi%C3%A7%C3%A3o%20no%20Residencial%20Ballok%20One.";

export function BenefitsSection() {
  return (
    <section id="sobre" className="section-padding bg-stone">
      <div className="container max-w-6xl">
        <SectionReveal>
          <h2 className="font-display text-3xl md:text-4xl text-primary text-balance text-center mb-12 md:mb-16">
            Tudo o que você precisa em um só lugar
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {diferenciais.map((b, i) => (
            <SectionReveal key={b.title} delay={i * 80}>
              <div className="group p-6 md:p-8 rounded-2xl bg-card border border-border/60 hover:border-accent/30 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 h-full text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/70 ring-1 ring-accent/30 flex items-center justify-center shadow-lg shadow-accent/20 mb-5 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-accent/30">
                  <b.icon className="w-7 h-7 text-accent-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-base md:text-lg text-primary mb-2 leading-snug">
                  {b.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={200}>
          <div className="flex justify-center mt-12 md:mt-16">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp animate-pulse-green"
            >
              <MessageCircle className="w-5 h-5" />
              Simular minha condição no WhatsApp
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
