import { Building2, Bed, Ruler, Car } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const items = [
  { icon: Building2, value: "120", label: "Apartamentos" },
  { icon: Ruler, value: "40 a 43", label: "M² privativos" },
  { icon: Bed, value: "2", label: "Dormitórios" },
  { icon: Car, value: "1", label: "Vaga" },
];

export function QuickInfoSection() {
  return (
    <section className="section-padding-compact bg-gradient-to-b from-stone via-background to-stone border-y border-accent/15">
      <div className="container max-w-6xl">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-accent" />
              <p className="text-xs md:text-sm font-semibold tracking-[0.22em] uppercase text-accent">
                Sobre o empreendimento
              </p>
              <span className="h-px w-10 bg-accent" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary tracking-tight text-balance mb-5">
              Residencial Ballok One
            </h2>
            <p className="text-base md:text-lg text-muted-foreground text-pretty leading-relaxed">
              Um empreendimento concebido para oferecer a qualidade de vida que você e sua família merecem. Com espaços cuidadosamente planejados para proporcionar conforto no dia a dia, infraestrutura de lazer completa e uma localização privilegiada com fácil acesso a Indaial e Timbó. Um projeto verdadeiramente especial.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 relative max-w-4xl mx-auto">
            {items.map((it, idx) => (
              <div
                key={it.label}
                className={`group flex flex-col items-center text-center gap-4 px-4 relative ${
                  idx > 0 ? "md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:h-16 md:before:w-px md:before:bg-border/60" : ""
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/70 ring-1 ring-accent/30 flex items-center justify-center shadow-lg shadow-accent/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-accent/30">
                  <it.icon className="w-7 h-7 text-accent-foreground" strokeWidth={1.5} />
                </div>

                <div className="flex flex-col items-center gap-1.5">
                  <span className="font-display text-4xl md:text-5xl font-extrabold text-primary tracking-tight leading-none">
                    {it.value}
                  </span>
                  <span className="text-[10px] md:text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground">
                    {it.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
