import plantaTipo01 from "@/assets/planta-tipo-01.png";
import plantaTipo02 from "@/assets/planta-tipo-02.png";
import plantaTipo03 from "@/assets/planta-tipo-03.png";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";
import { useState } from "react";
import { Bed, Ruler, Car, Flame, Check } from "lucide-react";

const plants = [
  { label: "Padrão 40m²", src: plantaTipo01 },
  { label: "Padrão 43m²", src: plantaTipo02 },
  { label: "Garden", src: plantaTipo03 },
];

const features = [
  { icon: Bed, text: "2 dormitórios" },
  { icon: Ruler, text: "40 a 43 m²" },
  { icon: Flame, text: "Varanda com churrasqueira" },
  { icon: Car, text: "1 vaga" },
];

export function PlantsSection() {
  const [active, setActive] = useState(0);
  const current = plants[active];

  return (
    <section id="plantas" className="section-padding bg-secondary">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <SectionReveal>
            <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-xl">
              <img src={current.src} alt={current.label} className="w-full h-auto transition-opacity duration-500" />
            </div>
            <div className="flex gap-2 mt-4">
              {plants.map((p, i) => (
                <button
                  key={p.label}
                  onClick={() => setActive(i)}
                  className={`text-xs px-3 py-2 rounded-full border transition-colors ${
                    active === i
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-muted-foreground border-border hover:border-primary"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={100}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-whatsapp mb-4">Plantas</p>
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-8 leading-[1.05] text-balance">
              Inteligente. Funcional.
            </h2>

            <ul className="space-y-4 mb-8">
              {features.map((f) => (
                <li key={f.text} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-whatsapp/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-4 h-4 text-whatsapp" />
                  </div>
                  <span className="text-base text-primary font-medium">{f.text}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 bg-primary/5 rounded-xl px-5 py-4 mb-8">
              <Flame className="w-5 h-5 text-orange-500 shrink-0" />
              <span className="text-sm text-primary font-medium">Opção Garden com jardim privativo</span>
            </div>

            <WhatsAppButton message="Quero ver plantas e detalhes do Balok One">
              Quero receber as plantas agora
            </WhatsAppButton>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
