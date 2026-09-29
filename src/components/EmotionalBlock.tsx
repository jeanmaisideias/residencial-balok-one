import { useContent, lines } from "@/content/store";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

export function EmotionalBlock() {
  const c = useContent();
  return (
    <section className="section-padding bg-card">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <SectionReveal>
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-primary leading-tight text-balance">
              {c["emotional.line1"]}
              <br />
              <span className="text-whatsapp">{c["emotional.line2"]}</span>
              <br />
              {c["emotional.line3"]}
            </h2>
            <WhatsAppButton message="Venho do site do Ballock One e quero atendimento para entender como comprar">
              Quero saber como comprar
            </WhatsAppButton>
          </div>
        </SectionReveal>

        <SectionReveal delay={150}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img loading="lazy" src={c["emotional.image"]} alt="Família feliz com as chaves do novo apartamento" className="w-full h-80 md:h-96 object-cover" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
