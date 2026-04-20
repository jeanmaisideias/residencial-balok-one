import { Clock, GraduationCap, HeartPulse, ShoppingCart, MapPin } from "lucide-react";
import { SectionReveal } from "./SectionReveal";
import { WhatsAppButton } from "./WhatsAppButton";

const proximities = [
  { icon: Clock, label: "7 min do centro" },
  { icon: GraduationCap, label: "Escolas perto" },
  { icon: ShoppingCart, label: "Mercados ao redor" },
  { icon: HeartPulse, label: "Saúde acessível" },
];

export function LocationSection() {
  return (
    <section id="localizacao" className="section-padding bg-background">
      <div className="container max-w-6xl">
        <SectionReveal>
          <div className="mb-10 md:mb-14 max-w-3xl">
            <p className="eyebrow mb-4">Localização</p>
            <h2 className="font-display text-4xl md:text-6xl text-primary text-balance leading-[1.02] mb-6">
              No coração de Indaial — SC
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
              Situado na Rua Três Corações, Jardim Benedito, Indaial – SC, o Residencial Ballock 1 oferece
              praticidade e conectividade para o seu cotidiano. Tudo que você precisa está a poucos minutos de distância
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-10">
          {proximities.map((p, i) => (
            <SectionReveal key={p.label} delay={i * 80}>
              <div className="flex flex-col items-start gap-3 p-4 md:p-5 rounded-2xl bg-card border border-border/50 shadow-soft hover:-translate-y-1 transition-transform h-full">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-accent to-accent/70 ring-1 ring-accent/30 flex items-center justify-center shadow-lg shadow-accent/20">
                  <p.icon className="w-6 h-6 md:w-7 md:h-7 text-accent-foreground" strokeWidth={1.5} />
                </div>
                <p className="text-sm md:text-base font-semibold text-primary leading-snug">{p.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={250}>
          <div className="relative rounded-2xl overflow-hidden bg-card shadow-elevated mb-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.123!2d-49.2317!3d-26.8978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94defc6b3b5e1a0d%3A0x7f5b6b0e5a0e0e0e!2sR.+Tr%C3%AAs+Cora%C3%A7%C3%B5es+-+Jardim+Benedito%2C+Indaial+-+SC!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="420"
              style={{ border: 0, filter: "grayscale(0.3) contrast(0.95)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Residencial Ballok One"
            />
            <div className="pointer-events-none absolute inset-0 bg-primary/5" />
          </div>
        </SectionReveal>

        {/* Plantão de Vendas */}
        <SectionReveal delay={300}>
          <div className="rounded-2xl bg-primary text-primary-foreground p-7 md:p-10 shadow-premium flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0">
              <MapPin className="w-7 h-7 md:w-8 md:h-8 text-accent" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <p className="eyebrow text-accent mb-2">Plantão de Vendas no Local</p>
              <p className="font-display text-2xl md:text-3xl mb-2 leading-tight">
                Rua Três Corações — Jardim Benedito · Indaial – SC
              </p>
              <p className="text-primary-foreground/75 text-sm md:text-base">
                Visite nosso stand e conheça pessoalmente o empreendimento
              </p>
            </div>
            <WhatsAppButton message="Quero agendar uma visita ao plantão do Ballok One">
              Agendar visita
            </WhatsAppButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
