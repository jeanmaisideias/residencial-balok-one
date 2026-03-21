import { SectionReveal } from "./SectionReveal";
import { WhatsAppButton } from "./WhatsAppButton";

const items = [
  { number: 1, title: "05 Torres Residenciais", desc: "Distribuídas para máxima privacidade e ventilação cruzada natural." },
  { number: 2, title: "120 Unidades", desc: "Apartamentos de 2 dormitórios com área de 40 a 43 m²." },
  { number: 3, title: "Áreas de Lazer Centrais", desc: "Piscina, academia e salão de festas no coração do condomínio." },
  { number: 4, title: "Estacionamento Organizado", desc: "1 vaga por unidade + vagas de visitantes, com acesso controlado." },
];

export function ImplantationSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container max-w-3xl">
        <SectionReveal>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp mb-3">Implantação</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-4 text-balance">
              Um condomínio pensado em cada detalhe
            </h2>
            <p className="text-muted-foreground text-pretty max-w-xl mx-auto">
              O Residencial Balok One conta com <strong className="text-primary">05 torres</strong> estrategicamente distribuídas no terreno, proporcionando privacidade, ventilação natural e amplas áreas comuns entre os blocos.
            </p>
          </div>
        </SectionReveal>

        <div className="space-y-0">
          {items.map((item, i) => (
            <SectionReveal key={item.number} delay={i * 80}>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {item.number}
                </div>
                <div className="w-full border-2 border-primary rounded-xl p-5 mt-2 mb-4">
                  <h3 className="text-sm font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={400}>
          <div className="text-center mt-4">
            <WhatsAppButton message="Olá, quero saber mais sobre a implantação do Residencial Balok One">
              Quero saber mais sobre o projeto
            </WhatsAppButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
