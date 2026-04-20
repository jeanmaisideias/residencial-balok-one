import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

export function ConditionsSection() {
  return (
    <section id="condições" className="section-padding bg-card">
      <div className="container max-w-3xl text-center">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp mb-3">Condições</p>
          <p className="text-lg text-muted-foreground mb-6">
            Sim, você consegue sair do aluguel com essas condições
          </p>

          <div className="bg-primary rounded-2xl p-8 md:p-12 mb-6 text-primary-foreground">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-sm text-primary-foreground/70 mb-1">a partir de</p>
                <p className="text-3xl md:text-4xl font-extrabold">R$ 229.000</p>
              </div>
              <div>
                <p className="text-sm text-primary-foreground/70 mb-1">entrada a partir de</p>
                <p className="text-3xl md:text-4xl font-extrabold">R$ 1.000</p>
              </div>
              <div>
                <p className="text-sm text-primary-foreground/70 mb-1">entrada parcelada em até</p>
                <p className="text-3xl md:text-4xl font-extrabold">60x</p>
              </div>
            </div>
            <WhatsAppButton message="Venho do site do Ballok One e quero simular minha parcela">
              Simular minha parcela
            </WhatsAppButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
