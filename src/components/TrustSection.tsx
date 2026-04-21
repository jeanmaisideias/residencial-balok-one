import { useEffect, useRef, useState } from "react";
import { SectionReveal } from "./SectionReveal";
import logoEvoluttaBlack from "@/assets/logo-evolutta-black.png";
import logoEvoluttaHorizontal from "@/assets/logo-evolutta-horizontal.png";
import evoluttaTeamProject from "@/assets/evolutta-team-project.jpg";

const stats = [
  { target: 13, suffix: "+", label: "anos de mercado" },
  { target: 100, suffix: "%", label: "obras entregues no prazo" },
  { target: 500, suffix: "+", label: "famílias felizes" },
];

function CountUp({ target, suffix, duration = 1800 }: { target: number; suffix: string; duration?: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(target * eased));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export function TrustSection() {
  return (
    <section className="section-padding bg-stone">
      <div className="container max-w-6xl">
        <SectionReveal>
          <p className="eyebrow mb-8 text-center lg:text-left">Quem Somos</p>
        </SectionReveal>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
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
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-8">
                <img
                  src={logoEvoluttaHorizontal}
                  alt="Construtora Evolutta"
                  className="block md:hidden h-20 w-auto self-start"
                />
                <img
                  src={logoEvoluttaBlack}
                  alt="Construtora Evolutta"
                  className="hidden md:block h-[120px] w-auto shrink-0 self-start"
                />
                <h2 className="font-display text-2xl md:text-4xl lg:text-5xl text-primary leading-[1.05] text-balance">
                  Tradição em entregar lares
                </h2>
              </div>

              <div className="space-y-5 mb-8">
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

              <div className="grid grid-cols-3 gap-2 md:gap-5 mt-auto">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-card rounded-xl p-3 md:p-6 shadow-elevated border border-border/50 hover:-translate-y-1 transition-transform text-center"
                  >
                    <p className="font-display text-2xl md:text-5xl text-accent tracking-tight leading-none mb-2 break-words">
                      <CountUp target={s.target} suffix={s.suffix} />
                    </p>
                    <p className="text-[9px] md:text-xs uppercase tracking-[0.12em] text-muted-foreground leading-tight">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
