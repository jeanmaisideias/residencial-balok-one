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
    <section className="section-padding bg-card">
      <div className="container max-w-5xl">
        <SectionReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {items.map((it) => (
              <div key={it.label} className="flex flex-col items-center text-center gap-3 p-4">
                <div className="w-12 h-12 rounded-xl bg-whatsapp/10 flex items-center justify-center">
                  <it.icon className="w-6 h-6 text-whatsapp" />
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
