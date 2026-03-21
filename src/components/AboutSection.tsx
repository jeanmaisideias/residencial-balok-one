import { SectionReveal } from "./SectionReveal";
import empreendimentoImg from "@/assets/empreendimento-noturna.jpg";

export function AboutSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container max-w-3xl text-center">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp mb-3">Sobre o empreendimento</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-6 text-balance">
            Residencial Balok One
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-pretty leading-relaxed mb-8">
            O Residencial Balok One foi pensado para quem quer dar um passo definitivo na vida.
            Um projeto moderno, acessível e com excelente localização para você viver melhor.
          </p>
        </SectionReveal>
      </div>
      <SectionReveal delay={150}>
        <div className="container max-w-5xl">
          <img
            src={empreendimentoImg}
            alt="Residencial Balok One – Vista noturna do empreendimento"
            className="w-full rounded-2xl shadow-xl"
            loading="lazy"
          />
        </div>
      </SectionReveal>
    </section>
  );
}
