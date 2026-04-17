import { SectionReveal } from "./SectionReveal";
import { WhatsAppButton } from "./WhatsAppButton";
import logoEvolutta from "@/assets/logo-evolutta.png";

const stats = [
  { value: "13+", label: "anos de mercado" },
  { value: "100%", label: "obras entregues no prazo" },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-stone">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-14 lg:gap-20 items-center">
          <SectionReveal>
            <p className="eyebrow mb-4">Construtora Evolutta</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.02] text-balance mb-8">
              Quem entrega o seu novo lar.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Somos especialistas em transformar projetos em realidade, entregando
              empreendimentos sólidos, planejados e pensados para famílias que
              buscam evolução de vida.
            </p>
            <img src={logoEvolutta} alt="Evolutta" className="h-10 w-auto opacity-80 mb-8" />
            <WhatsAppButton message="Venho do site do Balok One e quero falar com um especialista">
              Falar com especialista
            </WhatsAppButton>
          </SectionReveal>

          <SectionReveal delay={150}>
            <div className="grid grid-cols-1 gap-5">
              {stats.map((s) => (
                <div key={s.label} className="bg-card rounded-2xl p-8 md:p-10 shadow-soft border border-border/50">
                  <p className="font-display text-6xl md:text-7xl text-primary tracking-tight leading-none mb-3">
                    {s.value}
                  </p>
                  <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
