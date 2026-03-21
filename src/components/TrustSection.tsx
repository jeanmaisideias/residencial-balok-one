import { Award, Clock, Users } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

const stats = [
  { icon: Award, value: "+13 anos", label: "de experiência" },
  { icon: Clock, value: "No prazo", label: "obras entregues" },
  { icon: Users, value: "Centenas", label: "de famílias atendidas" },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container max-w-3xl text-center">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp mb-3">Construtora</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-8 text-balance">
            Sua confiança é o nosso maior patrimônio
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {stats.map((s, i) => (
            <SectionReveal key={s.label} delay={i * 80}>
              <div className="flex flex-col items-center gap-2">
                <s.icon className="w-8 h-8 text-whatsapp" />
                <p className="text-xl md:text-2xl font-extrabold text-primary">{s.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{s.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={300}>
          <WhatsAppButton message="Olá, quero falar com um especialista sobre o Residencial Balok One">
            Falar com especialista
          </WhatsAppButton>
        </SectionReveal>
      </div>
    </section>
  );
}
