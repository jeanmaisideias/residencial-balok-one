import { Clock, GraduationCap, HeartPulse, ShoppingCart } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

const proximities = [
  { icon: Clock, label: "7 min do centro" },
  { icon: GraduationCap, label: "Escolas perto" },
  { icon: ShoppingCart, label: "Mercados ao redor" },
  { icon: HeartPulse, label: "Saúde acessível" },
];

export function LocationSection() {
  return (
    <section id="localizacao" className="section-padding bg-card">
      <div className="container max-w-5xl">
        <SectionReveal>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-whatsapp mb-4">Localização</p>
            <h2 className="font-display text-4xl md:text-6xl text-primary text-balance leading-[1.05]">
              Perto de tudo
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {proximities.map((p, i) => (
            <SectionReveal key={p.label} delay={i * 80}>
              <div className="flex flex-col items-center text-center gap-3 p-6">
                <div className="w-12 h-12 rounded-xl bg-whatsapp/10 flex items-center justify-center">
                  <p.icon className="w-6 h-6 text-whatsapp" />
                </div>
                <p className="text-sm font-medium text-primary">{p.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={350}>
          <div className="relative rounded-2xl overflow-hidden bg-card shadow-xl mb-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.123!2d-49.2317!3d-26.8978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94defc6b3b5e1a0d%3A0x7f5b6b0e5a0e0e0e!2sR.+Tr%C3%AAs+Cora%C3%A7%C3%B5es+-+Jardim+Benedito%2C+Indaial+-+SC!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="400"
              style={{ border: 0, filter: "grayscale(0.3) contrast(0.95)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Residencial Balok One"
            />
            <div className="pointer-events-none absolute inset-0 bg-primary/5" />
          </div>
        </SectionReveal>

        <SectionReveal delay={400}>
          <div className="text-center">
            <WhatsAppButton message="Quero saber valores e entrada">
              Falar com consultor
            </WhatsAppButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
