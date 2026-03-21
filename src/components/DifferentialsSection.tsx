import amenitiesImg from "@/assets/amenities.jpg";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";
import { Waves, Dumbbell, UtensilsCrossed, Dog, Baby, Lock } from "lucide-react";

const items = [
  { icon: Waves, label: "Piscina" },
  { icon: Dumbbell, label: "Academia" },
  { icon: UtensilsCrossed, label: "Espaço gourmet" },
  { icon: Dog, label: "Pet place" },
  { icon: Baby, label: "Playground" },
  { icon: Lock, label: "Condomínio fechado" },
];

export function DifferentialsSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <SectionReveal>
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp mb-3">Diferenciais</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-balance">
              Lazer completo para toda a família
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {items.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-whatsapp" />
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            <WhatsAppButton message="Olá, quero ver todos os diferenciais do Residencial Balok One">
              Quero ver todos os diferenciais
            </WhatsAppButton>
          </div>
        </SectionReveal>

        <SectionReveal delay={150}>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src={amenitiesImg} alt="Áreas de lazer do condomínio" className="w-full h-80 md:h-[28rem] object-cover" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
