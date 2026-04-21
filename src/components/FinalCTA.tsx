import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";
import { MapPin } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contato" className="section-padding bg-primary text-primary-foreground">
      <div className="container max-w-4xl text-center">
        <SectionReveal>
          <p className="eyebrow mb-5">Últimas unidades</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-balance leading-[1.05] mb-6">
            Garanta o seu agora
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/75 mb-10 max-w-xl mx-auto text-pretty">
            Comece com R$ 1.000. Condições de lançamento por tempo limitado
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <WhatsAppButton message="Quero simular financiamento do Ballock One">
              Simular financiamento
            </WhatsAppButton>
            <WhatsAppButton
              message="Quero saber valores e entrada"
              variant="hero-outline"
            >
              Falar com consultor
            </WhatsAppButton>
          </div>
          <p className="mt-8 text-xs text-primary-foreground/50">
            Unidades mais vantajosas vendem rápido — condição promocional sujeita à disponibilidade
          </p>
        </SectionReveal>

        <SectionReveal delay={150}>
          <div className="mt-14 md:mt-20 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-7 md:p-9 flex flex-col md:flex-row md:items-center gap-5 md:gap-7 text-left">
            <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0 mx-auto md:mx-0">
              <MapPin className="w-7 h-7 text-accent" strokeWidth={1.5} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-accent mb-1">
                Plantão de Vendas no Local
              </p>
              <p className="font-display text-xl md:text-2xl leading-tight">
                Rua Três Corações — Jardim Benedito · Indaial – SC
              </p>
              <p className="text-sm text-primary-foreground/65 mt-1">
                Visite e conheça pessoalmente o empreendimento
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
