import { MapPin, Clock, GraduationCap, HeartPulse, ShoppingCart } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

const proximities = [
  { icon: Clock, title: "Centro", desc: "7–9 min do centro de Indaial" },
  { icon: GraduationCap, title: "Escolas", desc: "Instituições de ensino a poucos minutos" },
  { icon: ShoppingCart, title: "Mercados", desc: "Supermercados e comércio local" },
  { icon: HeartPulse, title: "Posto de saúde", desc: "Atendimento de saúde acessível" },
  { icon: ShoppingCart, title: "Comércio", desc: "Fácil ligação a Timbó e região" },
];

export function LocationSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container max-w-4xl">
        <SectionReveal>
          <div className="text-center mb-8">
            <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp mb-3">Localização</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-3 text-balance">
              Viva perto de tudo
            </h2>
            <p className="text-muted-foreground text-pretty max-w-xl mx-auto">
              Menos tempo no trânsito. Mais tempo para você.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
          {proximities.map((p, i) => (
            <SectionReveal key={p.title + i} delay={i * 80}>
              <div className="flex gap-3 p-4 bg-card rounded-2xl shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-whatsapp/10 flex items-center justify-center shrink-0">
                  <p.icon className="w-4 h-4 text-whatsapp" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-primary">{p.title}</h3>
                  <p className="text-xs text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={350}>
          <div className="rounded-2xl overflow-hidden bg-card shadow-lg mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.123!2d-49.2317!3d-26.8978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94defc6b3b5e1a0d%3A0x7f5b6b0e5a0e0e0e!2sR.+Tr%C3%AAs+Cora%C3%A7%C3%B5es+-+Jardim+Benedito%2C+Indaial+-+SC!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Residencial Balok One"
            />
          </div>
        </SectionReveal>

        <SectionReveal delay={400}>
          <div className="text-center">
            <WhatsAppButton message="Venho do site do Balok One e quero ver a localização">
              Ver localização
            </WhatsAppButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
