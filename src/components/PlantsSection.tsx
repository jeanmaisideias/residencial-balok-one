import plantaTipo01 from "@/assets/planta-tipo-01.png";
import plantaTipo02 from "@/assets/planta-tipo-02.png";
import plantaTipo03 from "@/assets/planta-tipo-03.png";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";
import { useState } from "react";

const plants = [
  { label: "Tipo 01", src: plantaTipo01 },
  { label: "Tipo 02", src: plantaTipo02 },
  { label: "Tipo 03 – Giardino", src: plantaTipo03 },
];

export function PlantsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-secondary">
      <div className="container max-w-4xl text-center">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp mb-3">Plantas</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-4 text-balance">
            Apartamentos inteligentes
          </h2>
          <p className="text-muted-foreground text-pretty mb-8">
            Pensados para aproveitar cada espaço com conforto e funcionalidade.
          </p>
        </SectionReveal>

        <SectionReveal delay={100}>
          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-6">
            {plants.map((p, i) => (
              <button
                key={p.label}
                onClick={() => setActive(i)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                  active === i
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:bg-card/80 border border-border"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Plant image */}
          <div className="rounded-2xl overflow-hidden bg-card border border-border mb-8">
            <img
              src={plants[active].src}
              alt={`Planta ${plants[active].label}`}
              className="w-full h-auto"
            />
          </div>
        </SectionReveal>

        <SectionReveal delay={200}>
          <WhatsAppButton message="Olá, quero receber as plantas do Residencial Balok One no WhatsApp">
            Receber plantas no WhatsApp
          </WhatsAppButton>
        </SectionReveal>
      </div>
    </section>
  );
}
