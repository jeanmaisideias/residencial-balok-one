import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

export function FinalCTA() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container max-w-2xl text-center">
        <SectionReveal>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-balance leading-tight">
            Seu apartamento próprio começa com uma decisão
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 text-pretty">
            Fale agora com um consultor e descubra como conquistar o seu.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <WhatsAppButton message="Olá, quero falar com um consultor sobre o Residencial Balok One">
              Quero falar com um consultor
            </WhatsAppButton>
            <WhatsAppButton message="Olá, quero ver as condições exclusivas do Residencial Balok One" variant="outline">
              Ver condições exclusivas
            </WhatsAppButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
