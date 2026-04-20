import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";
import { Bed, Sofa, Flame, Car, Sprout } from "lucide-react";
import planta40 from "@/assets/balok/planta-40.png";
import planta43 from "@/assets/balok/planta-43.png";
import plantaGarden from "@/assets/balok/planta-garden.png";

const plants = [
  { label: "40m²", src: planta40, area: "40 m²", garden: false },
  { label: "43m²", src: planta43, area: "43 m²", garden: false },
  { label: "Garden", src: plantaGarden, area: "43 m² + jardim", garden: true },
];

const baseFeatures = [
  { icon: Bed, text: "2 dormitórios" },
  { icon: Sofa, text: "Sala integrada" },
  { icon: Flame, text: "Varanda com churrasqueira" },
  { icon: Car, text: "1 vaga" },
];

export function PlantsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActive(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const goTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);
  const current = plants[active];

  return (
    <section id="plantas" className="section-padding bg-secondary">
      <div className="container max-w-6xl">
        <SectionReveal>
          <div className="mb-10 md:mb-14 max-w-2xl">
            <p className="eyebrow mb-4">Plantas</p>
            <h2 className="font-display text-4xl md:text-6xl text-primary text-balance leading-[1.02]">
              Inteligente. Funcional
            </h2>
          </div>
        </SectionReveal>

        {/* Tabs - scroll horizontal mobile */}
        <div className="-mx-5 px-5 md:mx-0 md:px-0 overflow-x-auto scrollbar-hide mb-8">
          <div className="flex gap-2 w-max md:w-auto">
            {plants.map((p, i) => (
              <button
                key={p.label}
                onClick={() => goTo(i)}
                className={`text-sm font-semibold px-5 py-2.5 rounded-full border transition-all whitespace-nowrap ${
                  active === i
                    ? "bg-primary text-primary-foreground border-primary shadow-elevated"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-primary"
                }`}
              >
                Planta {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-14 items-center">
          <SectionReveal>
            <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-premium">
              <div ref={emblaRef} className="overflow-hidden">
                <div className="flex">
                  {plants.map((p) => (
                    <div key={p.label} className="shrink-0 grow-0 basis-full p-5 md:p-10">
                      <img
                        src={p.src}
                        alt={`Planta ${p.label}`}
                        className="w-full h-auto object-contain max-h-[460px] mx-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center gap-2 pb-5">
                {plants.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Planta ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${active === i ? "w-8 bg-primary" : "w-2 bg-border"}`}
                  />
                ))}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={120}>
            <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] mb-3">Planta {current.label}</p>
            <p className="font-display text-5xl md:text-6xl text-primary mb-2 leading-none">{current.area}</p>
            <p className="text-base text-muted-foreground mb-8">de área privativa</p>

            <ul className="space-y-3 mb-6">
              {baseFeatures.map((f) => (
                <li key={f.text} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </div>
                  <span className="text-base text-primary font-medium">{f.text}</span>
                </li>
              ))}
              {current.garden && (
                <li className="flex items-center gap-3 mt-1 px-4 py-3 rounded-xl bg-accent/10 border border-accent/20">
                  <Sprout className="w-5 h-5 text-accent shrink-0" strokeWidth={1.5} />
                  <span className="text-sm font-semibold text-primary">Jardim privativo exclusivo</span>
                </li>
              )}
            </ul>

            <WhatsAppButton message={`Quero receber as plantas do Ballok One (Planta ${current.label})`}>
              Receber plantas no WhatsApp
            </WhatsAppButton>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
