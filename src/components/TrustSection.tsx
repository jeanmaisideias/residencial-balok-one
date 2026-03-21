import { WhatsAppButton } from "./WhatsAppButton";
import { SectionReveal } from "./SectionReveal";

export function TrustSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container max-w-4xl">
        <SectionReveal>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp mb-3">Quem Somos</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-4 text-balance">
              Uma construtora com histórico comprovado de qualidade
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
          <SectionReveal>
            <div className="text-sm text-muted-foreground space-y-4 text-pretty">
              <p>
                Somos uma construtora com <strong className="text-primary">13 anos de atuação</strong> no mercado imobiliário, especializados em empreendimentos residenciais dentro do programa Minha Casa Minha Vida.
              </p>
              <p>
                Ao longo desta trajetória, entregamos <strong className="text-primary">centenas de unidades</strong> com pontualidade e padrão de acabamento reconhecido pelos nossos clientes.
              </p>
              <p>
                Nosso compromisso vai além da entrega das chaves: acompanhamos cada família desde a assinatura do contrato até a mudança, garantindo total transparência, suporte técnico e atendimento personalizado em todas as etapas.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={150}>
            <div className="space-y-6">
              <div className="text-center p-6 bg-secondary rounded-2xl">
                <p className="text-4xl md:text-5xl font-extrabold text-primary">13</p>
                <p className="text-sm font-bold text-primary mt-1">Anos de Mercado</p>
                <p className="text-xs text-muted-foreground mt-1">Solidez e experiência comprovadas</p>
              </div>
              <div className="text-center p-6 bg-secondary rounded-2xl">
                <p className="text-4xl md:text-5xl font-extrabold text-primary">100%</p>
                <p className="text-sm font-bold text-primary mt-1">Pontualidade</p>
                <p className="text-xs text-muted-foreground mt-1">Obras entregues no prazo</p>
              </div>
            </div>
          </SectionReveal>
        </div>

        <SectionReveal delay={300}>
          <div className="text-center">
            <WhatsAppButton message="Olá, quero falar com um especialista sobre o Residencial Balok One">
              Falar com especialista
            </WhatsAppButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
