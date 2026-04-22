import { SectionReveal } from "./SectionReveal";
import { WhatsAppButton } from "./WhatsAppButton";
import piscina from "@/assets/balok/piscina.webp";
import beach from "@/assets/balok/quadra-beach.webp";
import fitness from "@/assets/balok/fitness.webp";
import salao2 from "@/assets/balok/salao-02.webp";
import pet from "@/assets/balok/pet.webp";
import bike from "@/assets/balok/bike.webp";
import firepit from "@/assets/balok/firepit.webp";
import playground from "@/assets/balok/playground.webp";

const items = [
  { img: piscina, label: "Piscina", className: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto" },
  { img: beach, label: "Beach Tennis", className: "aspect-[4/3]" },
  { img: fitness, label: "Academia", className: "aspect-[4/3]" },
  { img: salao2, label: "Espaço Gourmet", className: "aspect-[4/3] md:col-span-2 md:aspect-[2/1]" },
  { img: pet, label: "Pet Place", className: "aspect-[4/3]" },
  { img: bike, label: "Bike Space", className: "aspect-[4/3]" },
  { img: firepit, label: "Fireplace", className: "aspect-[4/3]" },
  { img: playground, label: "Playground", className: "aspect-[4/3]" },
];

export function LeisureSection() {
  return (
    <section id="lazer" className="section-padding bg-background">
      <div className="container max-w-7xl">
        <SectionReveal>
          <div className="mb-12 md:mb-16 max-w-2xl">
            <p className="eyebrow mb-4">Lazer Completo</p>
            <h2 className="font-display text-4xl md:text-6xl text-primary text-balance leading-[1.02]">
              Tudo que valoriza sua rotina
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl text-pretty">
              Áreas pensadas para conviver, relaxar e treinar sem sair de casa
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {items.map((it, i) => (
            <SectionReveal key={it.label} delay={i * 50} className={it.className}>
              <figure className="relative h-full w-full rounded-2xl overflow-hidden group shadow-soft">
                <img
                  src={it.img}
                  alt={it.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                <figcaption className="absolute bottom-4 left-4 right-4 text-primary-foreground font-display text-base md:text-lg">
                  {it.label}
                </figcaption>
              </figure>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={300}>
          <div className="mt-14 flex justify-center">
            <WhatsAppButton message="Quero ver todas as áreas de lazer do Ballock One">
              Conhecer o lazer completo
            </WhatsAppButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
