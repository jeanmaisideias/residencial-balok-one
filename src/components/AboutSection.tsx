import { SectionReveal } from "./SectionReveal";

export function AboutSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container max-w-3xl text-center">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp mb-3">Sobre o empreendimento</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-6 text-balance">
            Residencial Balok One
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-pretty leading-relaxed">
            O Residencial Balok One foi pensado para quem quer dar um passo definitivo na vida.
            Um projeto moderno, acessível e com excelente localização para você viver melhor.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
