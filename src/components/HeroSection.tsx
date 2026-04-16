import heroImg from "@/assets/hero-building.jpg";
import logoEvolutta from "@/assets/logo-evolutta.png";
import logoCaixa from "@/assets/logo-caixa.png";
import logoMcmv from "@/assets/logo-mcmv.png";
import { WhatsAppButton } from "./WhatsAppButton";
import { Home, Car, DollarSign, Bed, Waves, CalendarDays } from "lucide-react";

const highlights = [
  { icon: DollarSign, text: "A partir de R$ 239.000" },
  { icon: Home, text: "Entrada a partir de R$ 1.000" },
  { icon: CalendarDays, text: "Entrada parcelada em até 60x" },
  { icon: Bed, text: "2 dormitórios" },
  { icon: Car, text: "1 vaga" },
  { icon: Waves, text: "Lazer completo" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end pt-16">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Residencial Balok One" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/30" />
      </div>

      <div className="absolute top-20 left-0 right-0 z-10">
        <div className="container">
          <img src={logoEvolutta} alt="Evolutta" className="h-20 md:h-28 w-auto" />
        </div>
      </div>

      <div className="absolute top-20 right-4 md:top-24 md:right-8 z-10 flex items-center gap-3">
        <img src={logoCaixa} alt="Caixa Econômica Federal" className="h-8 md:h-10 w-auto" />
        <img src={logoMcmv} alt="Minha Casa Minha Vida" className="h-8 md:h-10 w-auto" />
      </div>

      <div className="relative container pb-12 pt-32 md:pb-20 md:pt-40">
        <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-whatsapp/20 text-whatsapp animate-reveal-up">
          Minha Casa Minha Vida · Indaial, SC
        </p>

        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.08] tracking-tight text-balance mb-5 animate-reveal-up"
          style={{ animationDelay: "100ms" }}
        >
          Seu apartamento
          <br />
          <span className="text-accent">próprio</span> em Indaial – SC
        </h1>

        <p
          className="text-lg md:text-xl text-primary-foreground/80 max-w-xl text-pretty mb-8 animate-reveal-up"
          style={{ animationDelay: "200ms" }}
        >
          A partir de R$ 229.000 · Entrada parcelada em 60x · Programa Minha Casa Minha Vida
        </p>

        <div
          className="flex flex-wrap gap-3 mb-8 animate-reveal-up"
          style={{ animationDelay: "300ms" }}
        >
          {highlights.map((h) => (
            <span
              key={h.text}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-foreground/10 backdrop-blur-sm text-sm font-medium text-primary-foreground"
            >
              <h.icon className="w-4 h-4 text-whatsapp" />
              {h.text}
            </span>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row gap-3 animate-reveal-up"
          style={{ animationDelay: "400ms" }}
        >
          <WhatsAppButton message="Venho do site do Balok One e quero saber se posso financiar">
            Quero saber se posso financiar
          </WhatsAppButton>
          <WhatsAppButton
            message="Venho do site do Balok One e quero falar com um consultor"
            variant="hero-outline"
          >
            Falar com um consultor agora
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
