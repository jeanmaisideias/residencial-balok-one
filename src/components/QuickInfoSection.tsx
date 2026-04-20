import { Building2, Bed, Ruler, Car, BadgeCheck } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const items = [
  { icon: Building2, label: "120 apartamentos" },
  { icon: Bed, label: "2 dormitórios" },
  { icon: Ruler, label: "40 a 43 m²" },
  { icon: Car, label: "1 vaga" },
  { icon: BadgeCheck, label: "MCMV" },
];

export function QuickInfoSection() {
  return (
    <section className="section-padding-compact bg-stone border-y border-border/50">
      <div className="container max-w-6xl">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <p className="text-xs md:text-sm font-semibold tracking-[0.22em] uppercase text-accent mb-4">
              Sobre o empreendimento
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary tracking-tight text-balance mb-5">
              Residencial Ballok One
            </h2>
            <p className="text-base md:text-lg text-muted-foreground text-pretty leading-relaxed">
              O Residencial Ballok One foi pensado para quem quer dar um passo definitivo na vida. Um projeto moderno, acessível e com excelente localização para você viver melhor.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {items.map((it) => (
              <div key={it.label} className="flex flex-col items-center text-center gap-3 p-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <it.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm font-semibold text-primary">{it.label}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
