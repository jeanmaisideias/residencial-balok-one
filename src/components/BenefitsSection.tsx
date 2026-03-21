import { LayoutGrid, MapPin, Building2, ShieldCheck } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

const benefits = [
  { icon: LayoutGrid, title: "Plantas inteligentes", desc: "Espaços otimizados para o seu conforto" },
  { icon: MapPin, title: "Localização estratégica", desc: "Perto de tudo que você precisa" },
  { icon: Building2, title: "Estrutura completa", desc: "Lazer e conveniência no seu condomínio" },
  { icon: ShieldCheck, title: "Segurança para sua família", desc: "Condomínio fechado com monitoramento" },
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
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

        <SectionReveal>
          <div className="text-center">
            <WhatsAppButton message="Quero simular minha condição no WhatsApp">
              Simular minha condição no WhatsApp
            </WhatsAppButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
