import { SectionReveal } from "./SectionReveal";
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
        <SectionReveal>
          <p className="eyebrow mb-8 text-center lg:text-left">Quem Somos</p>
        </SectionReveal>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-10 lg:mb-14">
          <SectionReveal className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl shadow-elevated border border-border/50 h-full">
              <img
                src={evoluttaTeamProject}
                alt="Equipe da Evolutta analisando projeto residencial"
                className="w-full h-full aspect-[4/5] lg:aspect-auto object-cover"
                loading="lazy"
              />
            </div>
          </SectionReveal>

          <SectionReveal delay={100} className="lg:col-span-7">
            <div className="flex flex-col h-full">
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 mb-8">
                <img
                  src={logoEvoluttaBlack}
                  alt="Construtora Evolutta"
                  className="h-[90px] md:h-[120px] w-auto shrink-0"
                />
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary leading-[1.05] text-balance">
                  Tradição em entregar lares
                </h2>
              </div>

              <div className="space-y-5">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Somos uma construtora com <strong className="text-primary font-semibold">13 anos de atuação</strong> no
                  mercado imobiliário, especializados em empreendimentos residenciais dentro do programa Minha Casa Minha Vida.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Ao longo desta trajetória, entregamos centenas de unidades com pontualidade e padrão de acabamento
                  reconhecido pelos nossos clientes.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Nosso compromisso vai além da entrega das chaves: acompanhamos cada família desde a assinatura do contrato
                  até a mudança, garantindo total transparência, suporte técnico e atendimento personalizado em todas as etapas.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>

        <SectionReveal delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
    </section>
  );
}
