import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", containScroll: false },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  return (
    <section id="galeria" className="section-padding bg-background">
      <div className="container max-w-6xl">
        <SectionReveal>
          <div className="mb-10 md:mb-14 max-w-2xl">
            <p className="eyebrow mb-4">Galeria</p>
            <h2 className="font-display text-4xl md:text-6xl text-primary text-balance leading-[1.02]">
              Seu novo lar
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-lg">
              Ambientes pensados para o conforto e a beleza do dia a dia
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={120}>
          <div className="relative">
            <div ref={emblaRef} className="overflow-hidden rounded-2xl shadow-premium">
              <div className="flex">
                {images.map((img) => (
                  <div key={img.caption} className="relative shrink-0 grow-0 basis-full">
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full aspect-[4/3] md:aspect-[16/9] object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 via-primary/40 to-transparent p-5 md:p-8">
                      <p className="font-display text-xl md:text-2xl text-primary-foreground">{img.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Anterior"
              className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-card/90 backdrop-blur-sm shadow-elevated border border-border/50 flex items-center justify-center text-primary hover:bg-card hover:scale-105 transition"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.75} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Próximo"
              className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-card/90 backdrop-blur-sm shadow-elevated border border-border/50 flex items-center justify-center text-primary hover:bg-card hover:scale-105 transition"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.75} />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  aria-label={`Ir para slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${selected === i ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/40"}`}
                />
              ))}
            </div>
          </div>
        </SectionReveal>

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
