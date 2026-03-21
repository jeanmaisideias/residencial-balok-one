import { MapPin, Clock, GraduationCap, HeartPulse, ShoppingCart } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

const proximities = [
  {
    icon: Clock,
    title: "7–9 min do Centro",
    desc: "Acesso rápido ao centro de Indaial com toda a infraestrutura urbana disponível para sua família.",
  },
  {
    icon: GraduationCap,
    title: "Escolas por Perto",
    desc: "Instituições de ensino de qualidade a poucos minutos de casa, para tranquilidade dos pais.",
  },
  {
    icon: HeartPulse,
    title: "Posto de Saúde",
    desc: "Atendimento de saúde acessível e próximo, garantindo segurança para toda a família.",
  },
  {
    icon: ShoppingCart,
    title: "Mercados e Comércio",
    desc: "Supermercados e comércio local a caminhada, com fácil ligação também a Timbó.",
  },
];

export function LocationSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container max-w-4xl">
        <SectionReveal>
          <div className="text-center mb-8">
            <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp mb-3">Localização Estratégica</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-4 text-balance">
              No coração de Indaial — SC
            </h2>
            <p className="text-muted-foreground text-pretty max-w-xl mx-auto">
              Situado na <strong className="text-primary">Rua Três Corações, Jardim Benedito, Indaial – SC</strong>, o Residencial Balok One oferece praticidade e conectividade para o seu cotidiano. Tudo o que você precisa está a poucos minutos de distância.
            </p>
          </div>
        </SectionReveal>

        {/* Proximity details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {proximities.map((p, i) => (
            <SectionReveal key={p.title} delay={i * 80}>
              <div className="flex gap-4 p-5 bg-card rounded-2xl shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-whatsapp/10 flex items-center justify-center shrink-0">
                  <p.icon className="w-5 h-5 text-whatsapp" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-primary mb-1">{p.title}</h3>
                  <p className="text-xs text-muted-foreground text-pretty">{p.desc}</p>
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
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
            <MapPin className="w-4 h-4 text-whatsapp" />
            <a
              href="https://maps.app.goo.gl/k6QpcRUYWtFgMW1N7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline underline-offset-2"
            >
              Rua Três Corações, Jardim Benedito, Indaial – SC
            </a>
          </div>
          <div className="text-center">
            <WhatsAppButton message="Olá, quero ver a localização exata do Residencial Balok One">
              Ver localização exata no WhatsApp
            </WhatsAppButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
