import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";
import { CreditCard, Home, Waves, Lightbulb, ShieldCheck, Car } from "lucide-react";

const items = [
  {
    icon: CreditCard,
    title: "Entrada Parcelada",
    desc: "Financie a entrada em até 60 meses. Comece com apenas R$ 1.000!",
  },
  {
    icon: Home,
    title: "Minha Casa Minha Vida",
    desc: "Enquadramento no programa habitacional federal com as melhores taxas de juros do mercado.",
  },
  {
    icon: Waves,
    title: "Lazer Completo",
    desc: "Piscina, academia, salão de festas, pet place e fire place — condomínio planejado de ponta a ponta.",
  },
  {
    icon: Lightbulb,
    title: "Fachada com LED",
    desc: "Design contemporâneo com iluminação LED nas fachadas — elegância e valorização garantidas.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Total",
    desc: "Condomínio fechado com controle de acesso e monitoramento para proteção de toda a família.",
  },
  {
    icon: Car,
    title: "Vaga Garantida",
    desc: "Cada apartamento inclui 1 vaga de garagem individual, sem custo adicional.",
  },
];

export function DifferentialsSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container max-w-5xl">
        <SectionReveal>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp mb-3">Diferenciais Exclusivos</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-4 text-balance">
              Um projeto moderno, inovador e acessível
            </h2>
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
              O Residencial Balok One reúne em um único endereço tudo o que um condomínio moderno precisa oferecer — com o melhor custo-benefício do programa Minha Casa Minha Vida em Santa Catarina.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {items.map((item, i) => (
            <SectionReveal key={item.title} delay={i * 70}>
              <div className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground text-pretty">{item.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={450}>
          <div className="text-center">
            <WhatsAppButton message="Olá, quero ver todos os diferenciais do Residencial Balok One">
              Quero ver todos os diferenciais
            </WhatsAppButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
