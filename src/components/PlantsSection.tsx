import plantaTipo01 from "@/assets/planta-tipo-01.png";
import plantaTipo02 from "@/assets/planta-tipo-02.png";
import plantaTipo03 from "@/assets/planta-tipo-03.png";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const plants = [
  { label: "Apartamento Tipo 01", src: plantaTipo01 },
  { label: "Apartamento Tipo 02", src: plantaTipo02 },
  { label: "Apartamento Tipo 03 – Giardino", src: plantaTipo03 },
];

export function PlantsSection() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => setActive((p) => (p + 1) % plants.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + plants.length) % plants.length), []);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

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
          {/* Slideshow */}
          <div className="relative rounded-2xl overflow-hidden bg-card border border-border mb-2">
            <img
              src={plants[active].src}
              alt={plants[active].label}
              className="w-full h-auto transition-opacity duration-500"
            />

            {/* Nav arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/70 text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors active:scale-95"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/70 text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors active:scale-95"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {plants.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    active === i ? "bg-whatsapp" : "bg-primary-foreground/40"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Label below */}
          <p className="text-sm font-semibold text-primary mb-8">{plants[active].label}</p>
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
