import plantaTipo01 from "@/assets/planta-tipo-01.png";
import plantaTipo02 from "@/assets/planta-tipo-02.png";
import plantaTipo03 from "@/assets/planta-tipo-03.png";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Flame } from "lucide-react";

const plants = [
  {
    label: "Apartamento Padrão",
    src: plantaTipo01,
    area: "40 m²",
    rooms: "2 dormitórios",
    features: ["Sala e cozinha integradas", "Varanda com churrasqueira", "1 vaga de garagem", "Área de serviço privativa"],
  },
  {
    label: "Apartamento Padrão",
    src: plantaTipo02,
    area: "43 m²",
    rooms: "2 dormitórios",
    features: ["Varanda ampliada", "Jardim privativo", "Acabamentos modernos", "1 vaga de garagem"],
  },
  {
    label: "Apartamento Garden",
    src: plantaTipo03,
    area: "43 m²",
    rooms: "2 dormitórios",
    features: ["Ampla sala e cozinha integrada", "Varanda gourmet com churrasqueira", "1 vaga de garagem exclusiva", "Pátio e área verde particular"],
    isGarden: true,
  },
];

export function PlantsSection() {
  const [active, setActive] = useState(0);
  const next = useCallback(() => setActive((p) => (p + 1) % plants.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + plants.length) % plants.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const current = plants[active];

  return (
    <section className="section-padding bg-secondary">
      <div className="container max-w-4xl text-center">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp mb-3">Tipologia</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-4 text-balance">
            Apartamentos inteligentes para viver melhor
          </h2>
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className="rounded-2xl overflow-hidden bg-card border border-border mb-6">
            <div className="relative">
              <img src={current.src} alt={current.label} className="w-full h-auto transition-opacity duration-500" />
              <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/70 text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors active:scale-95" aria-label="Anterior">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/70 text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors active:scale-95" aria-label="Próximo">
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {plants.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${active === i ? "bg-whatsapp" : "bg-primary-foreground/40"}`} aria-label={`Slide ${i + 1}`} />
                ))}
              </div>
            </div>
            <div className="px-6 py-5 text-center">
              <p className="text-base font-bold text-primary">{current.label}</p>
              <p className="text-sm text-muted-foreground mb-3">{current.rooms} · {current.area}</p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
                {current.features.map((f) => (
                  <span key={f} className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-whatsapp" />
                    {f}
                  </span>
                ))}
              </div>
              {current.isGarden && (
                <div className="flex items-center justify-center gap-2 bg-primary/5 rounded-xl px-5 py-3 text-sm text-primary font-medium mt-4">
                  <Flame className="w-4 h-4 text-orange-500" />
                  <span>Unidades Garden são limitadas — reserve a sua com prioridade!</span>
                </div>
              )}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={200}>
          <WhatsAppButton message="Quero ver plantas e detalhes do Balok One">
            Quero receber as plantas no WhatsApp
          </WhatsAppButton>
        </SectionReveal>
      </div>
    </section>
  );
}
