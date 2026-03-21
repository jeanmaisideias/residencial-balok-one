import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

export function ConditionsSection() {
  return (
    <section id="condições" className="section-padding bg-card">
      <div className="container max-w-3xl text-center">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp mb-3">Condições</p>

          <div className="bg-primary rounded-2xl p-8 md:p-12 mb-8 text-primary-foreground">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-3xl md:text-4xl font-extrabold">R$ 239 mil</p>
                <p className="text-sm text-primary-foreground/70 mt-1">a partir de</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold">R$ 1.000</p>
                <p className="text-sm text-primary-foreground/70 mt-1">entrada a partir de</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold">Facilitado</p>
                <p className="text-sm text-primary-foreground/70 mt-1">parcelamento</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-6">
              Compra facilitada direto com a construtora.
            </p>
            <WhatsAppButton message="Olá, quero simular minha parcela do Residencial Balok One">
              Simular minha parcela agora
            </WhatsAppButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
