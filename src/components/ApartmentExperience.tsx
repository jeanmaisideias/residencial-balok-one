import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

import lazerSalao from "@/assets/lazer-salao.webp";
import lazerPiscina from "@/assets/lazer-piscina.webp";
import lazerAcademia from "@/assets/lazer-academia.webp";
import lazerBeach from "@/assets/lazer-beach.webp";
import lazerFireplace from "@/assets/lazer-fireplace.webp";
import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const gallery = [
  { src: lazerSalao, label: "Sala e cozinha integradas" },
  { src: lazerPiscina, label: "Cozinha funcional" },
  { src: lazerAcademia, label: "Quartos confortáveis" },
  { src: lazerBeach, label: "Varanda com churrasqueira" },
  { src: lazerFireplace, label: "Acabamentos modernos" },
];

export function ApartmentExperience() {
  const [active, setActive] = useState(0);
  const next = useCallback(() => setActive((p) => (p + 1) % gallery.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + gallery.length) % gallery.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="section-padding bg-card">
      <div className="container max-w-4xl">
        {/* Full image hero */}
        <SectionReveal>
          <div className="relative rounded-2xl overflow-hidden mb-10">
            <img
              src={lazerSalao}
              alt="Interior do apartamento"
              className="w-full aspect-[16/9] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6 md:p-10">
              <h2 className="text-2xl md:text-4xl font-extrabold text-primary-foreground mb-2 text-balance">
                Imagine sua vida aqui dentro
              </h2>
              <p className="text-primary-foreground/80 text-sm md:text-base max-w-lg">
                Um espaço pensado para o seu dia a dia, com conforto, funcionalidade e qualidade de vida.
              </p>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className="text-center mb-6">
            <WhatsAppButton message="Venho do site do Ballock One e quero ver mais detalhes do apartamento">
              Quero ver mais detalhes do apartamento
            </WhatsAppButton>
          </div>
        </SectionReveal>

        {/* Gallery */}
        <SectionReveal delay={150}>
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-extrabold text-primary mb-2 text-balance">
              Cada detalhe pensado para você viver melhor
            </h3>
            <p className="text-muted-foreground text-sm text-pretty">
              Ambientes integrados, bem distribuídos e feitos para trazer praticidade e conforto todos os dias.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={200}>
          <div className="relative rounded-2xl overflow-hidden mb-4">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={gallery[active].src}
                alt={gallery[active].label}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
            <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/70 text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors active:scale-95" aria-label="Anterior">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/70 text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors active:scale-95" aria-label="Próximo">
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-primary/70 backdrop-blur-sm text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
              {gallery[active].label}
            </div>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {gallery.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${active === i ? "bg-whatsapp" : "bg-primary-foreground/40"}`} aria-label={`Slide ${i + 1}`} />
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={250}>
          <p className="text-xs text-muted-foreground text-center mb-6">
            Veja agora como pode ser o seu futuro apartamento
          </p>
          <div className="text-center">
            <WhatsAppButton message="Venho do site do Ballock One e quero receber fotos e plantas no WhatsApp">
              Quero receber fotos e plantas no WhatsApp
            </WhatsAppButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
