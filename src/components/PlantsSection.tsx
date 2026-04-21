import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";
import { Check, Sprout, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import planta40 from "@/assets/balok/planta-40.png";
import planta43 from "@/assets/balok/planta-43.png";
import plantaGarden from "@/assets/balok/planta-garden.png";

const plants = [
  {
    label: "40 m²",
    name: "Apartamento Padrão",
    src: planta40,
    area: "40 m²",
    garden: false,
    features: [
      "2 dormitórios",
      "Sala e cozinha integradas",
      "Varanda com churrasqueira",
      "1 vaga de garagem",
      "Área de serviço privativa",
    ],
  },
  {
    label: "43 m²",
    name: "Apartamento Padrão",
    src: planta43,
    area: "43 m²",
    garden: false,
    features: [
      "2 dormitórios",
      "Varanda ampliada",
      "Acabamentos modernos",
      "1 vaga de garagem",
      "Área de serviço privativa",
    ],
  },
  {
    label: "Garden",
    name: "Apartamento Garden",
    src: plantaGarden,
    area: "43 m²",
    garden: true,
    features: [
      "2 dormitórios aconchegantes",
      "Ampla sala e cozinha integrada",
      "Varanda gourmet com churrasqueira",
      "1 vaga de garagem exclusiva",
      "Área de serviço privativa",
      "Pátio e área verde particular",
    ],
  },
];

export function PlantsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [active, setActive] = useState(0);
  const [openMobile, setOpenMobile] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActive(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const goTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);
  const openPlant = useCallback((i: number) => {
    setActive(i);
    emblaApi?.scrollTo(i);
    setOpenMobile(true);
  }, [emblaApi]);
  const current = plants[active];

  return (
    <section id="plantas" className="section-padding bg-secondary">
      <div className="container max-w-6xl">
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <p className="eyebrow mb-4">Plantas</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary text-balance leading-[1.05]">
              Plantas inteligentes de 40 a 43 m² privativos
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mt-4">
              Opções padrão e Garden com dois dormitórios e ambientes bem aproveitados.
            </p>
          </div>
        </SectionReveal>

        {/* Mobile: stacked buttons */}
        <div className="md:hidden flex flex-col gap-3">
          {plants.map((p, i) => (
            <button
              key={p.label}
              onClick={() => openPlant(i)}
              className="w-full flex items-center justify-between gap-3 px-5 py-4 rounded-2xl border border-border bg-card text-left shadow-sm hover:border-primary/40 transition-all"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-primary">Planta {p.label}</span>
                  {p.garden && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/15 text-accent">
                      Exclusiva
                    </span>
                  )}
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent mt-1">
                  Clique para ver
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-primary shrink-0" />
            </button>
          ))}
        </div>

        {/* Desktop: tabs */}
        <div className="hidden md:block mb-8 md:mb-10 py-2">
          <div className="flex gap-2 justify-center">
            {plants.map((p, i) => (
              <button
                key={p.label}
                onClick={() => goTo(i)}
                className={`text-sm font-semibold px-5 py-2.5 rounded-full border transition-all whitespace-nowrap inline-flex items-center gap-2 ${
                  active === i
                    ? "bg-primary text-primary-foreground border-primary shadow-elevated"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-primary"
                }`}
              >
                Planta {p.label}
                {p.garden && (
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      active === i
                        ? "bg-primary-foreground/15 text-primary-foreground"
                        : "bg-accent/15 text-accent"
                    }`}
                  >
                    Exclusiva
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="hidden md:grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-14 items-stretch lg:min-h-[560px]">
          <SectionReveal>
            <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-premium h-full flex items-center lg:min-h-[560px]">
              <div ref={emblaRef} className="overflow-hidden w-full">
                <div className="flex">
                  {plants.map((p) => (
                    <div key={p.label} className="shrink-0 grow-0 basis-full p-4 md:p-6 flex items-center justify-center h-[280px] sm:h-[360px] lg:h-[540px]">
                      <img
                        src={p.src}
                        alt={`Planta ${p.label}`}
                        className="w-full h-full object-contain mx-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={120}>
            <div className="h-full flex flex-col lg:min-h-[560px]">
              <div className="min-h-[44px] mb-5">
                {current.garden && (
                  <div className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
                    <Sprout className="w-4 h-4 text-accent" strokeWidth={2} />
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">
                      Jardim privativo exclusivo
                    </span>
                  </div>
                )}
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground mb-3">
                {current.name}
              </p>
              <p className="font-display text-5xl md:text-6xl text-primary leading-none">
                {current.area}
              </p>
              <p className="text-base text-muted-foreground mt-2 mb-8">de área privativa</p>

              <ul className="space-y-3 mb-8">
                {current.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-accent" strokeWidth={3} />
                    </span>
                    <span className="text-base text-primary">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <WhatsAppButton
                  className="w-full justify-center"
                  message={`Quero receber as plantas do Ballock One (Planta ${current.label})`}
                >
                  Receber plantas no WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Mobile modal */}
        <Dialog open={openMobile} onOpenChange={setOpenMobile}>
          <DialogContent className="md:hidden p-0 max-w-[95vw] max-h-[90vh] overflow-y-auto rounded-2xl">
            <div className="p-5">
              <div className="rounded-xl overflow-hidden bg-secondary border border-border mb-5 flex items-center justify-center h-[280px]">
                <img src={current.src} alt={`Planta ${current.label}`} className="w-full h-full object-contain" />
              </div>

              {current.garden && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 mb-4">
                  <Sprout className="w-3.5 h-3.5 text-accent" strokeWidth={2} />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                    Jardim privativo exclusivo
                  </span>
                </div>
              )}

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground mb-2">
                {current.name}
              </p>
              <p className="font-display text-4xl text-primary leading-none">{current.area}</p>
              <p className="text-sm text-muted-foreground mt-2 mb-5">de área privativa</p>

              <ul className="space-y-2.5 mb-6">
                {current.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-accent" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-primary">{f}</span>
                  </li>
                ))}
              </ul>

              <WhatsAppButton
                className="w-full justify-center"
                message={`Quero receber as plantas do Ballock One (Planta ${current.label})`}
              >
                Receber plantas no WhatsApp
              </WhatsAppButton>
            </div>
          </DialogContent>
        </Dialog>

      </div>
    </section>
  );
}
