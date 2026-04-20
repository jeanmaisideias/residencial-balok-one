import heroVideo from "@/assets/video-hero.mp4";
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
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label="Vídeo do empreendimento Ballok One"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/75 via-primary/60 to-primary/95" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="relative container pb-20 pt-40 md:pb-28 md:pt-48">
        <p
          className="inline-block px-3 py-1 mb-6 text-[11px] font-semibold tracking-[0.22em] uppercase rounded-full bg-white/10 backdrop-blur-md text-primary-foreground/90 border border-white/15 animate-reveal-up"
        >
          Venha ser feliz! Sua família merece!
        </p>

        <h1
          className="font-display text-primary-foreground leading-[1.05] text-balance mb-6 max-w-4xl animate-reveal-up"
          style={{ animationDelay: "100ms" }}
        >
          <span className="block text-3xl md:text-5xl lg:text-6xl font-medium text-white/85">
            Apartamento em condomínio fechado
          </span>
          <span className="block text-4xl md:text-6xl lg:text-7xl font-extrabold mt-1">
            <span className="text-whatsapp">com entrada de R$ 1.000?</span>
          </span>
          <span className="block text-2xl md:text-4xl lg:text-5xl font-light text-white mt-2 italic">
            Sim, a gente fez
          </span>
        </h1>

        <p
          className="text-base md:text-xl text-white max-w-xl text-pretty mb-10 animate-reveal-up"
          style={{ animationDelay: "200ms" }}
        >
          Em Indaial, com parcelas acessíveis, lazer completo e condições especiais de lançamento
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
          <WhatsAppButton message="Quero falar com um especialista do Ballok One">
            Quero falar com especialista
          </WhatsAppButton>
          <WhatsAppButton
            message="Quero simular o financiamento do Ballok One"
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
