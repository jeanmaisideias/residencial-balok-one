import { Play } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";
import acessoImg from "@/assets/acesso-video-obra.jpg";

export function VideoSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container max-w-3xl text-center">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp mb-3">Acompanhe a obra</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-4 text-balance">
            Acompanhe a evolução da obra
          </h2>
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
            <img src={acessoImg} alt="Acesso ao Residencial Balok One" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center gap-3">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
              <span className="text-sm font-medium text-white">Vídeo da obra em breve</span>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={200}>
          <WhatsAppButton message="Venho do site do Balok One e quero acompanhar a obra">
            Quero acompanhar
          </WhatsAppButton>
        </SectionReveal>
      </div>
    </section>
  );
}
