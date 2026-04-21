import { SectionReveal } from "./SectionReveal";
import { WhatsAppButton } from "./WhatsAppButton";
import logoEvoluttaBlack from "@/assets/logo-evolutta-black.png";
import evoluttaTeamProject from "@/assets/evolutta-team-project.jpg";

const stats = [
  { value: "13+", label: "anos de mercado" },
  { value: "100%", label: "obras entregues no prazo" },
  { value: "500+", label: "famílias felizes" },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-stone">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-[1fr_1.15fr_0.85fr] gap-8 lg:gap-10 xl:gap-12 items-start">
          <SectionReveal className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl shadow-elevated border border-border/50 lg:sticky lg:top-28">
              <img
                src={evoluttaTeamProject}
                alt="Equipe da Evolutta analisando projeto residencial"
                className="w-full aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/5] object-cover"
                loading="lazy"
              />
            </div>
          </SectionReveal>

          <SectionReveal className="order-1 lg:order-2">
            <img
              src={logoEvoluttaBlack}
              alt="Construtora Evolutta"
              className="h-[110px] md:h-[147px] w-auto mb-8 mx-auto lg:mx-0"
            />
            <p className="eyebrow mb-4 text-center lg:text-left">Quem Somos</p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary leading-[1.05] text-balance mb-8 text-center lg:text-left">
              Tradição em entregar lares
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
            <WhatsAppButton message="Venho do site do Ballock One e quero falar com um especialista">
              Falar com especialista
            </WhatsAppButton>
          </SectionReveal>

          <SectionReveal delay={150} className="order-3">
            <div className="grid grid-cols-1 gap-5 lg:sticky lg:top-28">
              {stats.map((s) => (
                <div key={s.label} className="bg-card rounded-2xl p-8 md:p-10 shadow-elevated border border-border/50 hover:-translate-y-1 transition-transform">
                  <p className="font-display text-6xl md:text-7xl text-accent tracking-tight leading-none mb-3">
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
