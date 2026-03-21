import { MapPin } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

export function LocationSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container max-w-4xl">
        <SectionReveal>
          <div className="text-center mb-8">
            <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp mb-3">Localização</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-4 text-balance">
              Você perto de tudo o que importa
            </h2>
            <p className="text-muted-foreground text-pretty max-w-xl mx-auto">
              Fácil acesso ao centro, mercados, escolas e serviços essenciais.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={100}>
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

        <SectionReveal delay={200}>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
            <MapPin className="w-4 h-4 text-whatsapp" />
            Rua Três Corações, Jardim Benedito, Indaial – SC
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
