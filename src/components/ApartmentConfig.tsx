import { Bed, Maximize, Sofa, Sun, WashingMachine, Car, Flower2, ArrowUpRight } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

const features = [
  { icon: Bed, text: "2 dormitórios" },
  { icon: Maximize, text: "40 a 43 m²" },
  { icon: Sofa, text: "Sala e cozinha integradas" },
  { icon: Sun, text: "Varanda com churrasqueira" },
  { icon: WashingMachine, text: "Área de serviço" },
  { icon: Car, text: "1 vaga de garagem" },
];

const gardenFeatures = [
  { icon: Flower2, text: "Jardim privativo" },
  { icon: ArrowUpRight, text: "Varanda ampliada" },
];

export function ApartmentConfig() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container max-w-3xl">
        <SectionReveal>
          <div className="text-center mb-8">
            <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp mb-3">Configuração</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-4 text-balance">
              Tudo o que seu apartamento oferece
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={80}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {features.map((f) => (
              <div key={f.text} className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-whatsapp/10 flex items-center justify-center shrink-0">
                  <f.icon className="w-4 h-4 text-whatsapp" />
                </div>
                <span className="text-sm font-medium text-primary">{f.text}</span>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={160}>
          <div className="bg-primary/5 border-2 border-whatsapp/20 rounded-2xl p-6 mb-8">
            <p className="text-sm font-bold text-primary mb-3 text-center">Opção Garden — unidades exclusivas</p>
            <div className="flex flex-wrap justify-center gap-3">
              {gardenFeatures.map((f) => (
                <div key={f.text} className="flex items-center gap-2 bg-card rounded-xl px-4 py-3 shadow-sm">
                  <f.icon className="w-4 h-4 text-whatsapp" />
                  <span className="text-sm font-medium text-primary">{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={200}>
          <div className="text-center">
            <WhatsAppButton message="Venho do site do Ballock One e quero escolher minha unidade">
              Quero escolher minha unidade
            </WhatsAppButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
