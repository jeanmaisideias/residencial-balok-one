import { SectionReveal } from "./SectionReveal";
import { WhatsAppButton } from "./WhatsAppButton";
import logoEvolutta from "@/assets/logo-evolutta.png";

const stats = [
  { value: "13+", label: "anos de mercado" },
  { value: "100%", label: "obras entregues no prazo" },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-stone">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-start">
          <SectionReveal>
            <img
              src={logoEvolutta}
              alt="Construtora Evolutta"
              className="h-12 md:h-14 w-auto mb-8 mx-auto lg:mx-0"
            />
            <p className="eyebrow mb-4 text-center lg:text-left">Construtora Evolutta</p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary leading-[1.05] text-balance mb-8 text-center lg:text-left">
              Quem entrega o seu novo lar
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
              Somos uma construtora com <strong className="text-primary font-semibold">13 anos de atuação</strong> no
              mercado imobiliário, especializados em empreendimentos residenciais dentro do programa Minha Casa Minha Vida.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
              Ao longo desta trajetória, entregamos centenas de unidades com pontualidade e padrão de acabamento
              reconhecido pelos nossos clientes.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              Nosso compromisso vai além da entrega das chaves: acompanhamos cada família desde a assinatura do contrato
              até a mudança, garantindo total transparência, suporte técnico e atendimento personalizado em todas as etapas.
            </p>
            <WhatsAppButton message="Venho do site do Balok One e quero falar com um especialista">
              Falar com especialista
            </WhatsAppButton>
          </SectionReveal>

          <SectionReveal delay={150}>
            <div className="grid grid-cols-1 gap-5 lg:sticky lg:top-28">
              {stats.map((s) => (
                <div key={s.label} className="bg-card rounded-2xl p-8 md:p-10 shadow-elevated border border-border/50 hover:-translate-y-1 transition-transform">
                  <p className="font-display text-6xl md:text-7xl text-primary tracking-tight leading-none mb-3">
                    {s.value}
                  </p>
                  <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
