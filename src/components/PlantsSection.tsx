import { useState } from "react";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";
import { Bed, Sofa, Flame, Car, Sprout } from "lucide-react";
import planta40 from "@/assets/balok/planta-40.png";
import planta43 from "@/assets/balok/planta-43.png";
import plantaGarden from "@/assets/balok/planta-garden.png";

const plants = [
  { label: "Planta 40m²", src: planta40, area: "40 m²", garden: false },
  { label: "Planta 43m²", src: planta43, area: "43 m²", garden: false },
  { label: "Garden Privativo", src: plantaGarden, area: "43 m² + jardim", garden: true },
];

const baseFeatures = [
  { icon: Bed, text: "2 dormitórios" },
  { icon: Sofa, text: "Sala integrada" },
  { icon: Flame, text: "Varanda com churrasqueira" },
  { icon: Car, text: "1 vaga" },
];

export function PlantsSection() {
  const [active, setActive] = useState(0);
  const current = plants[active];

  return (
    <section id="plantas" className="section-padding bg-secondary">
      <div className="container max-w-6xl">
        <SectionReveal>
          <div className="mb-12 md:mb-16 max-w-2xl">
            <p className="eyebrow mb-4">Plantas</p>
            <h2 className="font-display text-4xl md:text-6xl text-primary text-balance leading-[1.02]">
              Inteligente. Funcional.
            </h2>
          </div>
        </SectionReveal>

        <div className="flex flex-wrap gap-2 mb-8">
          {plants.map((p, i) => (
            <button
              key={p.label}
              onClick={() => setActive(i)}
              className={`text-sm font-medium px-5 py-2.5 rounded-full border transition-all ${
                active === i
                  ? "bg-primary text-primary-foreground border-primary shadow-soft"
                  : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-primary"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-center">
          <SectionReveal>
            <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-premium p-6 md:p-10">
              <img
                key={active}
                src={current.src}
                alt={current.label}
                className="w-full h-auto object-contain max-h-[520px] mx-auto animate-fade-in"
              />
            </div>
          </SectionReveal>

          <SectionReveal delay={120}>
            <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] mb-3">{current.label}</p>
            <p className="font-display text-5xl md:text-6xl text-primary mb-2 leading-none">{current.area}</p>
            <p className="text-base text-muted-foreground mb-8">de área privativa</p>

            <ul className="space-y-3 mb-6">
              {baseFeatures.map((f) => (
                <li key={f.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-base text-primary font-medium">{f.text}</span>
                </li>
              ))}
              {current.garden && (
                <li className="flex items-center gap-3 mt-1 px-4 py-3 rounded-xl bg-accent/10 border border-accent/20">
                  <Sprout className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm font-semibold text-primary">Jardim privativo exclusivo</span>
                </li>
              )}
            </ul>

            <WhatsAppButton message={`Quero receber as plantas do Balok One (${current.label})`}>
              Receber plantas no WhatsApp
            </WhatsAppButton>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
