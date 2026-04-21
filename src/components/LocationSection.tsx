import { Clock, GraduationCap, HeartPulse, ShoppingCart, MapPin } from "lucide-react";
import { SectionReveal } from "./SectionReveal";
import { WhatsAppButton } from "./WhatsAppButton";
import corretoraImg from "@/assets/corretora-plantao.png";

const proximities = [
  {
    icon: Clock,
    title: "7–9 min do Centro",
    description: "Acesso rápido ao centro de Indaial com toda a infraestrutura urbana disponível para sua família.",
  },
  {
    icon: GraduationCap,
    title: "Escolas por Perto",
    description: "Instituições de ensino de qualidade a poucos minutos de casa, para tranquilidade dos pais.",
  },
  {
    icon: HeartPulse,
    title: "Posto de Saúde",
    description: "Atendimento de saúde acessível e próximo, garantindo segurança para toda a família.",
  },
  {
    icon: ShoppingCart,
    title: "Mercados e Comércio",
    description: "Supermercados e comércio local a caminhada, com fácil ligação também a Timbó.",
  },
];

export function LocationSection() {
  return (
    <section id="localizacao" className="section-padding bg-background">
      <div className="container max-w-6xl">
        <SectionReveal>
          <div className="mb-10 md:mb-14 max-w-3xl">
            <p className="eyebrow mb-4">Localização</p>
            <h2 className="font-display text-4xl md:text-6xl text-primary text-balance leading-[1.02] mb-6">
              No coração de Indaial/SC
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
              Situado na Rua Três Corações, Jardim Benedito, Indaial – SC, o Residencial Ballock One oferece
              praticidade e conectividade para o seu cotidiano. Tudo que você precisa está a poucos minutos de distância
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-10">
          {proximities.map((p, i) => (
            <SectionReveal key={p.title} delay={i * 80}>
              <div className="flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:-translate-y-1 transition-transform h-full">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent flex items-center justify-center shrink-0 shadow-soft">
                  <p.icon className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold text-primary mb-1.5 leading-snug">{p.title}</h3>
                  <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={250}>
          <div className="relative rounded-2xl overflow-hidden bg-card shadow-elevated mb-10">
            <iframe
              src="https://www.google.com/maps?q=Rua+Tr%C3%AAs+Cora%C3%A7%C3%B5es%2C+Jardim+Benedito%2C+Indaial+-+SC&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Residencial Ballock One"
            />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+Tr%C3%AAs+Cora%C3%A7%C3%B5es%2C+Jardim+Benedito%2C+Indaial+-+SC"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/95 backdrop-blur text-primary text-sm font-medium shadow-elevated hover:bg-background transition-colors"
            >
              <MapPin className="w-4 h-4" strokeWidth={2} />
              Abrir no Google Maps
            </a>
          </div>
        </SectionReveal>

        {/* Plantão de Vendas */}
        <SectionReveal delay={300}>
          <div className="relative rounded-2xl bg-primary text-primary-foreground p-7 md:p-8 md:pr-72 shadow-premium flex flex-col md:flex-row md:items-center gap-6 md:gap-8 mt-24 md:mt-32 overflow-visible">
            <img
              src={corretoraImg}
              alt="Corretora do plantão de vendas"
              className="hidden md:block absolute right-4 lg:right-8 bottom-0 h-[150%] max-h-[300px] w-auto object-contain object-bottom pointer-events-none select-none"
            />
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0">
              <MapPin className="w-7 h-7 md:w-8 md:h-8 text-accent" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <p className="eyebrow text-accent mb-2">Venha visitar e encante-se</p>
              <p className="font-display text-3xl md:text-5xl lg:text-6xl mb-2 leading-[1.02]">
                Plantão de Vendas no Local
              </p>
              <p className="text-primary-foreground/75 text-sm md:text-base">
                Visite nosso stand e conheça pessoalmente o empreendimento
              </p>
            </div>
            <WhatsAppButton message="Quero agendar uma visita ao plantão do Ballock One">
              Agendar visita
            </WhatsAppButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
