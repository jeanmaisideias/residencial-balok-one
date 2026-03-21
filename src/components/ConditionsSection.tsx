import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";
import { Flame } from "lucide-react";

export function ConditionsSection() {
  return (
    <section id="condições" className="section-padding bg-card">
      <div className="container max-w-3xl text-center">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp mb-3">Condições</p>

          <div className="bg-primary rounded-2xl p-8 md:p-12 mb-6 text-primary-foreground">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-sm text-primary-foreground/70 mb-1">a partir de</p>
                <p className="text-3xl md:text-4xl font-extrabold">R$ 239 mil</p>
                <p className="text-xs text-primary-foreground/60 mt-1">O melhor custo-benefício do MCMV em SC</p>
              </div>
              <div>
                <p className="text-sm text-primary-foreground/70 mb-1">entrada a partir de</p>
                <p className="text-3xl md:text-4xl font-extrabold">R$ 1.000</p>
                <p className="text-xs text-primary-foreground/60 mt-1">Comece com pouco e realize seu sonho</p>
              </div>
              <div>
                <p className="text-sm text-primary-foreground/70 mb-1">entrada parcelada em até</p>
                <p className="text-3xl md:text-4xl font-extrabold">60x</p>
                <p className="text-xs text-primary-foreground/60 mt-1">Financie a entrada com a construtora</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-6">
              Compra facilitada direto com a construtora.
            </p>
            <WhatsAppButton message="Olá, quero simular minha parcela do Residencial Balok One">
              Simular minha parcela agora
            </WhatsAppButton>
          </div>

          {/* Urgency banner */}
          <div className="flex items-center justify-center gap-2 bg-secondary rounded-xl px-5 py-3 text-sm text-primary font-medium">
            <Flame className="w-4 h-4 text-orange-500" />
            <span>Condições especiais por tempo limitado — unidades limitadas. Garanta já a sua!</span>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
