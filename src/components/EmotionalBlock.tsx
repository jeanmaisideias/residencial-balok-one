import familyImg from "@/assets/familia-feliz.jpg";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

export function EmotionalBlock() {
  return (
    <section className="section-padding bg-card">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <SectionReveal>
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-primary leading-tight text-balance">
              Não é só um apartamento.
              <br />
              <span className="text-whatsapp">É o fim do aluguel.</span>
              <br />
              É o começo da sua independência.
            </h2>
            <WhatsAppButton message="Venho do site do Balok One e quero entender como comprar">
              Quero entender como comprar
            </WhatsAppButton>
          </div>
        </SectionReveal>

        <SectionReveal delay={150}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src={familyImg} alt="Família feliz com as chaves do novo apartamento" className="w-full h-80 md:h-96 object-cover" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
