import { Play } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

export function VideoSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container max-w-3xl text-center">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp mb-3">Acompanhe a obra</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-4 text-balance">
            Acompanhe cada etapa da obra
          </h2>
          <p className="text-muted-foreground text-pretty mb-8">
            Transparência total do início à entrega.
            Saiba exatamente como está evoluindo o seu futuro imóvel.
          </p>
        </SectionReveal>

        <SectionReveal delay={100}>
          {/* Video placeholder - replace src with actual video embed */}
          <div className="relative aspect-video rounded-2xl bg-primary/5 overflow-hidden mb-8 flex items-center justify-center border border-border">
            <div className="flex flex-col items-center gap-3 text-muted-foreground">
              <div className="w-16 h-16 rounded-full bg-whatsapp/10 flex items-center justify-center">
                <Play className="w-8 h-8 text-whatsapp ml-1" />
              </div>
              <span className="text-sm font-medium">Vídeo da obra em breve</span>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={200}>
          <WhatsAppButton message="Olá, quero acompanhar a obra e garantir minha unidade no Residencial Balok One">
            Quero acompanhar e garantir minha unidade
          </WhatsAppButton>
        </SectionReveal>
      </div>
    </section>
  );
}
