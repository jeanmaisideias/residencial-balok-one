import { useState } from "react";
import { SectionReveal } from "./SectionReveal";
import { WhatsAppButton } from "./WhatsAppButton";
import sala1 from "@/assets/balok/sala-cozinha-01.jpg";
import sala2 from "@/assets/balok/sala-cozinha-02.jpg";
import dorm1 from "@/assets/balok/dormitorio-01.jpg";
import dorm2 from "@/assets/balok/dormitorio-02.jpg";
import banho from "@/assets/balok/banho.jpg";
import sacada from "@/assets/balok/sacada.jpg";

const images = [
  { src: sala1, caption: "Sala integrada" },
  { src: sala2, caption: "Cozinha planejada" },
  { src: dorm1, caption: "Dormitório casal" },
  { src: dorm2, caption: "Dormitório solteiro" },
  { src: banho, caption: "Banheiro moderno" },
  { src: sacada, caption: "Sacada privativa" },
];

export function GallerySection() {
  const [active, setActive] = useState(0);

  return (
    <section id="galeria" className="section-padding bg-background">
      <div className="container max-w-7xl">
        <SectionReveal>
          <div className="mb-12 md:mb-16 max-w-2xl">
            <p className="eyebrow mb-4">Galeria</p>
            <h2 className="font-display text-4xl md:text-6xl text-primary text-balance leading-[1.02]">
              Seu novo lar
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-lg">
              Ambientes pensados para o conforto e a beleza do dia a dia.
            </p>
          </div>
        </SectionReveal>

        {/* Desktop: main + thumbs */}
        <SectionReveal delay={120}>
          <div className="hidden md:grid grid-cols-[1fr_140px] gap-6 lg:gap-8">
            <figure className="rounded-2xl overflow-hidden shadow-premium bg-secondary group">
              <img
                src={images[active].src}
                alt={images[active].caption}
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                key={active}
              />
              <figcaption className="px-6 py-4 bg-card flex items-center justify-between">
                <span className="font-display text-lg text-primary">{images[active].caption}</span>
                <span className="text-xs text-muted-foreground">{active + 1} / {images.length}</span>
              </figcaption>
            </figure>

            <div className="flex flex-col gap-3 max-h-[560px] overflow-y-auto pr-1 scrollbar-hide">
              {images.map((img, i) => (
                <button
                  key={img.caption}
                  onClick={() => setActive(i)}
                  aria-label={`Ver ${img.caption}`}
                  className={`relative rounded-xl overflow-hidden aspect-square shrink-0 transition-all ${
                    active === i ? "ring-2 ring-accent ring-offset-2 ring-offset-background" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Mobile: horizontal swipe */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-5 px-5 scrollbar-hide">
          {images.map((img) => (
            <figure key={img.caption} className="snap-start shrink-0 w-[82vw]">
              <div className="rounded-2xl overflow-hidden shadow-elevated bg-secondary">
                <img src={img.src} alt={img.caption} className="w-full aspect-[4/3] object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground tracking-wide px-1">{img.caption}</figcaption>
            </figure>
          ))}
        </div>

        <SectionReveal delay={240}>
          <div className="mt-12 md:mt-16 flex justify-center">
            <WhatsAppButton message="Quero conhecer melhor o Balok One">
              Quero conhecer melhor
            </WhatsAppButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
