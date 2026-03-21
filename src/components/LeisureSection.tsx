import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";
import { Waves, Dumbbell, Trophy, PartyPopper, Flame, BookOpen, Dog, Bike } from "lucide-react";
import amenitiesImg from "@/assets/amenities.jpg";

const amenities = [
  { icon: Waves, title: "Piscina", desc: "Área de lazer aquático para relaxar e se divertir com a família nos finais de semana." },
  { icon: Dumbbell, title: "Academia", desc: "Espaço equipado para sua rotina de exercícios sem precisar sair do condomínio." },
  { icon: Trophy, title: "Beach Tênis", desc: "Quadra de beach tênis para momentos de lazer ativo e socialização entre moradores." },
  { icon: PartyPopper, title: "Salão de Festas", desc: "Salão espaçoso e moderno para celebrar os momentos mais especiais com quem você ama." },
  { icon: Flame, title: "Fire Place", desc: "Área de convivência com lareira ao ar livre, perfeita para o frio característico de Santa Catarina." },
  { icon: BookOpen, title: "Praça de Leitura", desc: "Espaço tranquilo e arborizado para leitura, reflexão e momentos de paz ao ar livre." },
  { icon: Dog, title: "Pet Place", desc: "Área especialmente projetada para que seus animais de estimação também se sintam em casa." },
  { icon: Bike, title: "Bicicletário", desc: "Espaço seguro para guardar bicicletas, incentivando mobilidade sustentável e saudável." },
];

export function LeisureSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container max-w-5xl">
        <SectionReveal>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp mb-3">Infraestrutura de Lazer</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-4 text-balance">
              Viva com mais qualidade todos os dias
            </h2>
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
              O Residencial Balok One foi projetado com uma infraestrutura de lazer completa, pensada para todas as idades e estilos de vida. Seu condomínio vai muito além de um simples endereço — é um verdadeiro estilo de vida.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {amenities.map((a, i) => (
            <SectionReveal key={a.title} delay={i * 60}>
              <div className="flex gap-4 p-5 bg-secondary rounded-2xl h-full">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <a.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-primary mb-1">{a.title}</h3>
                  <p className="text-xs text-muted-foreground text-pretty">{a.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={500}>
          <p className="text-xs text-muted-foreground text-center mb-8">
            Além disso: playground infantil, áreas verdes, estacionamento de visitantes e acessibilidade total para pessoas com mobilidade reduzida.
          </p>
        </SectionReveal>

        <SectionReveal delay={550}>
          <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
            <img src={amenitiesImg} alt="Áreas de lazer do condomínio" className="w-full h-64 md:h-80 object-cover" loading="lazy" />
          </div>
        </SectionReveal>

        <SectionReveal delay={600}>
          <div className="text-center">
            <WhatsAppButton message="Olá, quero ver todos os diferenciais de lazer do Residencial Balok One">
              Quero conhecer toda a estrutura
            </WhatsAppButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
