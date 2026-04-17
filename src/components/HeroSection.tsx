import heroImg from "@/assets/familia-feliz.jpg";
import { WhatsAppButton } from "./WhatsAppButton";
import { ChevronDown } from "lucide-react";

const chips = [
  "A partir de R$ 229 mil",
  "Entrada com R$ 1.000",
  "Parcelamento em até 60x",
  "2 dormitórios + vaga",
];

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Família feliz no novo apartamento Balok One"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/65 via-primary/55 to-primary/90" />
      </div>

      <div className="relative container pb-20 pt-40 md:pb-28 md:pt-48">
        <p
          className="inline-block px-3 py-1 mb-6 text-[11px] font-semibold tracking-[0.22em] uppercase rounded-full bg-white/10 backdrop-blur-md text-primary-foreground/90 border border-white/15 animate-reveal-up"
        >
          Minha Casa Minha Vida · Indaial, SC
        </p>

        <h1
          className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.02] text-balance mb-6 max-w-4xl animate-reveal-up"
          style={{ animationDelay: "100ms" }}
        >
          Pare de pagar aluguel.
          <br />
          <span className="text-white/90">Comece a viver o que é seu.</span>
        </h1>

        <p
          className="text-lg md:text-xl text-primary-foreground/80 max-w-xl text-pretty mb-10 animate-reveal-up"
          style={{ animationDelay: "200ms" }}
        >
          Apartamentos em Indaial com entrada facilitada, condições especiais e parcelas acessíveis.
        </p>

        <div
          className="flex flex-wrap gap-2.5 mb-10 animate-reveal-up"
          style={{ animationDelay: "300ms" }}
        >
          {chips.map((c) => (
            <span
              key={c}
              className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-sm font-medium text-primary-foreground"
            >
              {c}
            </span>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row gap-3 animate-reveal-up"
          style={{ animationDelay: "400ms" }}
        >
          <WhatsAppButton message="Quero falar com um especialista do Balok One">
            Quero falar com especialista
          </WhatsAppButton>
          <WhatsAppButton
            message="Quero simular o financiamento do Balok One"
            variant="hero-outline"
          >
            Simular financiamento
          </WhatsAppButton>
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-primary-foreground/70">
        <span className="text-[10px] tracking-[0.3em] uppercase">Role para descobrir</span>
        <ChevronDown className="w-4 h-4 animate-scroll-indicator" />
      </div>
    </section>
  );
}
