import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";
import salaCozinhaImg from "@/assets/sala-cozinha-financial.jpg";

export function FinancialSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 20% 30%, white 0.5px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div className="relative container max-w-6xl">
        <SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-accent">
                  Condição Especial de Lançamento
                </p>
              </div>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-balance leading-[1.02] max-w-4xl">
                Comece com pouco. Conquiste muito!
              </h2>
            </div>
            <div className="hidden md:block rounded-2xl overflow-hidden shadow-elevated w-[260px] lg:w-[320px] h-[180px] lg:h-[220px]">
              <img
                src={salaCozinhaImg}
                alt="Sala e cozinha integradas do apartamento"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 mb-14">
          {[
            { value: "R$ 1.000", label: "de sinal" },
            { value: "60x", label: "entrada parcelada" },
            { value: "Limitadas", label: "unidades disponíveis" },
          ].map((n, i) => (
            <SectionReveal key={n.label} delay={i * 100}>
              <div className="border-l border-primary-foreground/20 pl-6 h-full flex flex-col">
                <p className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground tracking-tight leading-none mb-3">
                  {n.value}
                </p>
                <p className="text-sm uppercase tracking-[0.18em] text-primary-foreground/60">{n.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={400}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <WhatsAppButton message="Quero saber se ainda dá tempo de comprar">
              Quero saber se ainda dá tempo de comprar
            </WhatsAppButton>
            <p className="text-sm text-primary-foreground/55 max-w-xs">
              Devido a alta procura consulte disponibilidade das unidades e condições de pagamento.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
