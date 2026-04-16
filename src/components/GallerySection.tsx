import { SectionReveal } from "./SectionReveal";
import noturna from "@/assets/empreendimento-noturna.jpg";
import amenities from "@/assets/amenities.jpg";
import piscina from "@/assets/lazer-piscina.jpg";
import salao from "@/assets/lazer-salao.jpg";
import beach from "@/assets/lazer-beach.jpg";

const images = [
  { src: noturna, caption: "Fachada iluminada" },
  { src: piscina, caption: "Piscina exclusiva" },
  { src: amenities, caption: "Áreas comuns" },
  { src: beach, caption: "Beach tênis" },
  { src: salao, caption: "Salão de festas" },
];

export function GallerySection() {
  return (
    <section id="lazer" className="section-padding bg-card">
      <div className="container max-w-7xl">
        <SectionReveal>
          <div className="mb-12 md:mb-16 max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-whatsapp mb-4">Galeria</p>
            <h2 className="font-display text-4xl md:text-6xl text-primary text-balance leading-[1.05]">
              Seu novo lar
            </h2>
          </div>
        </SectionReveal>

        <div className="flex gap-5 md:gap-7 overflow-x-auto pb-6 snap-x snap-mandatory -mx-5 px-5 md:-mx-8 md:px-8 scrollbar-hide">
          {images.map((img, i) => (
            <SectionReveal key={img.caption} delay={i * 80} className="snap-start shrink-0">
              <figure className="w-[80vw] md:w-[560px]">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <figcaption className="mt-4 text-sm text-muted-foreground tracking-wide">{img.caption}</figcaption>
              </figure>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
