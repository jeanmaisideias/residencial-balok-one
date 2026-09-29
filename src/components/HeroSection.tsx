import { useContent, lines } from "@/content/store";
import { WhatsAppButton } from "./WhatsAppButton";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const c = useContent();
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <video
          src={c["hero.video"]}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label="Vídeo do empreendimento Ballock One"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/75 via-primary/60 to-primary/95" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="relative container pb-20 pt-40 md:pb-28 md:pt-48">
        <p
          className="inline-block px-3 py-1 mb-6 text-[11px] font-semibold tracking-[0.22em] uppercase rounded-full bg-white/10 backdrop-blur-md text-primary-foreground/90 border border-white/15 animate-reveal-up"
        >
          {c["hero.badge"]}
        </p>

        <h1
          className="font-display text-primary-foreground leading-[1.05] text-balance mb-6 max-w-4xl animate-reveal-up"
          style={{ animationDelay: "100ms" }}
        >
          <span className="block text-3xl md:text-5xl lg:text-6xl font-medium text-white/85">
            {c["hero.title1"]}
          </span>
          <span className="block text-4xl md:text-6xl lg:text-7xl font-extrabold mt-1">
            <span className="text-whatsapp">{c["hero.title2"]}</span>
          </span>
          <span className="block text-2xl md:text-4xl lg:text-5xl font-light text-white mt-2 italic">
            {c["hero.title3"]}
          </span>
        </h1>

        <p
          className="text-base md:text-xl text-white max-w-xl text-pretty mb-10 animate-reveal-up"
          style={{ animationDelay: "200ms" }}
        >
          {c["hero.subtitle"]}
        </p>

        <div
          className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5 mb-10 animate-reveal-up"
          style={{ animationDelay: "300ms" }}
        >
          {[c["hero.chip1"], c["hero.chip2"], c["hero.chip3"], c["hero.chip4"]].filter(Boolean).map((chip, i) => (
            <span
              key={i}
              className="w-full sm:w-auto text-center px-4 py-3 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-sm font-medium text-primary-foreground"
            >
              {chip}
            </span>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row gap-3 animate-reveal-up"
          style={{ animationDelay: "400ms" }}
        >
          <WhatsAppButton message="Quero falar com um especialista do Ballock One">
            {c["hero.cta1"]}
          </WhatsAppButton>
          <WhatsAppButton
            message="Quero simular o financiamento do Ballock One"
            variant="hero-outline"
          >
            {c["hero.cta2"]}
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
