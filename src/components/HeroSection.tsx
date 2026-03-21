import heroImg from "@/assets/hero-building.jpg";
import logoCaixa from "@/assets/logo-caixa.png";
import logoMcmv from "@/assets/logo-mcmv.png";
import { WhatsAppButton } from "./WhatsAppButton";
import { Home, Car, DollarSign, Bed, Waves } from "lucide-react";

const highlights = [
  { icon: DollarSign, text: "A partir de R$ 239.000" },
  { icon: Home, text: "Entrada a partir de R$ 1.000" },
  { icon: Bed, text: "2 dormitórios" },
  { icon: Car, text: "1 vaga de garagem" },
  { icon: Waves, text: "Lazer completo" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Residencial Balok One" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/30" />
      </div>

      {/* Logos Caixa + MCMV top-right */}
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
          Pare de pagar aluguel.
          <br />
          Comece a construir o que é seu.
        </h1>

        <p
          className="text-lg md:text-xl text-primary-foreground/80 max-w-xl text-pretty mb-8 animate-reveal-up"
          style={{ animationDelay: "200ms" }}
        >
          Entrada facilitada, parcelas acessíveis e condições que cabem no seu bolso.
        </p>

        {/* Highlights */}
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

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-3 animate-reveal-up"
          style={{ animationDelay: "400ms" }}
        >
          <WhatsAppButton message="Olá, quero saber se posso financiar o Residencial Balok One">
            Quero saber se posso financiar
          </WhatsAppButton>
          <WhatsAppButton
            message="Olá, quero falar com um consultor sobre o Residencial Balok One"
            variant="hero-outline"
          >
            Falar com um consultor agora
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
