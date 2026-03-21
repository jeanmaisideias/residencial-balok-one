import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";
import { Waves, Dumbbell, Trophy, PartyPopper, Flame, Baby, Dog, Bike } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import lazerPiscina from "@/assets/lazer-piscina.jpg";
import lazerAcademia from "@/assets/lazer-academia.jpg";
import lazerBeach from "@/assets/lazer-beach.jpg";
import lazerSalao from "@/assets/lazer-salao.jpg";
import lazerFireplace from "@/assets/lazer-fireplace.jpg";
import lazerPlayground from "@/assets/lazer-playground.jpg";
import lazerPet from "@/assets/lazer-pet.jpg";
import lazerBike from "@/assets/lazer-bike.jpg";

const amenities = [
  { icon: Waves, title: "Piscina", desc: "Área de lazer aquático para relaxar e se divertir com a família nos finais de semana.", img: lazerPiscina },
  { icon: Dumbbell, title: "Academia", desc: "Espaço equipado para sua rotina de exercícios sem precisar sair do condomínio.", img: lazerAcademia },
  { icon: Trophy, title: "Beach Tênis", desc: "Quadra de beach tênis para momentos de lazer ativo e socialização entre moradores.", img: lazerBeach },
  { icon: PartyPopper, title: "Salão de Festas", desc: "Salão espaçoso e moderno para celebrar os momentos mais especiais com quem você ama.", img: lazerSalao },
  { icon: Flame, title: "Fire Place", desc: "Área de convivência com lareira ao ar livre, perfeita para o frio característico de Santa Catarina.", img: lazerFireplace },
  { icon: Baby, title: "Playground", desc: "Espaço seguro e divertido para as crianças brincarem e se desenvolverem ao ar livre.", img: lazerPlayground },
  { icon: Dog, title: "Pet Place", desc: "Área especialmente projetada para que seus animais de estimação também se sintam em casa.", img: lazerPet },
  { icon: Bike, title: "Bicicletário", desc: "Espaço seguro para guardar bicicletas, incentivando mobilidade sustentável e saudável.", img: lazerBike },
];

export function LeisureSection() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => setActive((p) => (p + 1) % amenities.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + amenities.length) % amenities.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="section-padding bg-card">
      <div className="container max-w-5xl">
        <SectionReveal>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp mb-3">Infraestrutura de Lazer</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-4 text-balance">
              Viva com mais qualidade todos os dias
            </h2>
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
              O Residencial Balok One foi projetado com uma infraestrutura de lazer completa, pensada para todas as idades e estilos de vida. Seu condomínio vai muito além de um simples endereço — é um verdadeiro estilo de vida.
            </p>
          </div>
        </SectionReveal>

        {/* Gallery carousel */}
        <SectionReveal delay={100}>
          <div className="relative rounded-2xl overflow-hidden mb-10">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={amenities[active].img}
                alt={amenities[active].title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>

            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/70 text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors active:scale-95"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/70 text-primary-foreground flex items-center justify-center hover:bg-primary transition-colors active:scale-95"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {amenities.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    active === i ? "bg-whatsapp" : "bg-primary-foreground/40"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-primary/70 backdrop-blur-sm text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
              {amenities[active].title}
            </div>
          </div>
        </SectionReveal>

        {/* Amenities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {amenities.map((a, i) => (
            <SectionReveal key={a.title} delay={i * 60}>
              <div
                className={`flex gap-4 p-5 rounded-2xl h-full cursor-pointer transition-all duration-200 ${
                  active === i ? "bg-accent/10 ring-2 ring-accent" : "bg-secondary hover:bg-secondary/80"
                }`}
                onClick={() => setActive(i)}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <a.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-primary mb-1">{a.title}</h3>
                  <p className="text-xs text-muted-foreground text-pretty">{a.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={500}>
          <p className="text-xs text-muted-foreground text-center mb-8">
            Além disso: áreas verdes, estacionamento de visitantes e acessibilidade total para pessoas com mobilidade reduzida.
          </p>
        </SectionReveal>

        <SectionReveal delay={550}>
          <div className="text-center">
            <WhatsAppButton message="Olá, quero ver todos os diferenciais de lazer do Residencial Balok One">
              Quero conhecer toda a estrutura
            </WhatsAppButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
