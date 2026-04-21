import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUp } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <div id="topo-politica" className="container max-w-3xl py-20 md:py-28">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar ao site
        </Link>

        <p className="eyebrow mb-4">Ballock One — Construtora Evolutta</p>
        <h1 className="font-display text-4xl md:text-6xl text-primary leading-[1.02] mb-10 text-balance">
          Política de Privacidade
        </h1>

        <div className="space-y-10 text-base md:text-lg text-foreground/85 leading-relaxed">
          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-primary">1. Apresentação</h2>
            <p>
              Esta Política de Privacidade descreve como a Construtora Evolutta ("Evolutta", "nós") coleta, utiliza, armazena e compartilha os dados pessoais fornecidos pelos usuários que acessam a landing page do empreendimento Ballock One, em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).
            </p>
            <p>
              Ao preencher o formulário de interesse disponível na landing page, você declara ter lido e concordado com os termos desta política.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-primary">2. Dados Pessoais Coletados</h2>
            <p>
              Para fins de atendimento comercial relacionado ao empreendimento Ballock One, coletamos exclusivamente os seguintes dados pessoais:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nome completo</li>
              <li>Número de telefone e/ou WhatsApp</li>
            </ul>
            <p>
              Não coletamos dados sensíveis conforme definidos pelo art. 5º, II da LGPD, tampouco dados de menores de 18 (dezoito) anos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-primary">3. Finalidade do Tratamento</h2>
            <p>Os dados coletados são utilizados exclusivamente para as seguintes finalidades:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contato inicial para apresentação do empreendimento Ballock One e condições de aquisição;</li>
              <li>Encaminhamento do seu interesse a corretores de imóveis devidamente habilitados, para continuidade do atendimento;</li>
              <li>Agendamento de visitas, envio de materiais informativos e esclarecimento de dúvidas sobre o empreendimento.</li>
            </ul>
            <p>Os seus dados não serão utilizados para finalidades distintas das descritas acima sem o seu consentimento prévio.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-primary">4. Compartilhamento de Dados</h2>
            <p>
              A Evolutta poderá compartilhar os seus dados pessoais (nome e telefone/WhatsApp) com corretores de imóveis e equipes de vendas parceiras, exclusivamente para fins de atendimento comercial relacionado ao Ballock One.
            </p>
            <p>
              Esses profissionais estão sujeitos a obrigações de confidencialidade e só poderão utilizar as informações para a finalidade específica de atendimento ao empreendimento, não sendo autorizado qualquer uso para outros fins.
            </p>
            <p>Não vendemos, alugamos ou cedemos seus dados a terceiros não relacionados ao processo de venda do empreendimento.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-primary">5. Base Legal para o Tratamento</h2>
            <p>O tratamento dos seus dados pessoais é realizado com fundamento nas seguintes bases legais previstas na LGPD:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consentimento (art. 7º, I):</strong> ao preencher o formulário, você fornece consentimento livre e expresso para o tratamento descrito nesta política;</li>
              <li><strong>Legítimo interesse (art. 7º, IX):</strong> para o contato comercial relacionado ao empreendimento de seu interesse.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-primary">6. Prazo de Retenção dos Dados</h2>
            <p>
              Seus dados serão mantidos pelo período necessário ao atendimento das finalidades descritas nesta política ou enquanto perdurar o seu interesse no empreendimento Ballock One. Após esse período, os dados serão eliminados ou anonimizados, salvo quando a retenção for exigida por obrigação legal ou regulatória.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-primary">7. Direitos do Titular dos Dados</h2>
            <p>Em conformidade com a LGPD, você possui os seguintes direitos em relação aos seus dados pessoais:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirmação da existência de tratamento de dados;</li>
              <li>Acesso aos dados coletados;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
              <li>Portabilidade dos dados a outro fornecedor;</li>
              <li>Revogação do consentimento a qualquer momento;</li>
              <li>Oposição ao tratamento realizado em descumprimento à LGPD.</li>
            </ul>
            <p>Para exercer qualquer um desses direitos, entre em contato conosco pelos canais indicados na seção 9 desta política.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-primary">8. Segurança das Informações</h2>
            <p>
              A Evolutta adota medidas técnicas e administrativas adequadas para proteger os seus dados pessoais contra acessos não autorizados, situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado.
            </p>
            <p>
              Embora empenhados na proteção dos seus dados, nenhum sistema de segurança é absolutamente inviolável. Em caso de incidente de segurança que possa gerar risco relevante a você, adotaremos as medidas cabíveis e comunicaremos as autoridades competentes nos termos da LGPD.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-primary">9. Contato e Canal de Atendimento</h2>
            <p>
              Para exercer seus direitos, solicitar esclarecimentos ou registrar reclamações relacionadas ao tratamento dos seus dados pessoais, entre em contato com a Construtora Evolutta pelo e-mail{" "}
              <a href="mailto:contato@evoluttaconstrutora.com.br" className="text-accent font-medium hover:underline">
                contato@evoluttaconstrutora.com.br
              </a>
              {" "}ou pelos canais disponibilizados na landing page do empreendimento Ballock One.
            </p>
            <p>Responderemos às solicitações em prazo razoável, conforme exigido pela LGPD.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-primary">10. Atualizações desta Política</h2>
            <p>
              Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças nas práticas de tratamento de dados ou na legislação aplicável. Recomendamos que você a consulte regularmente. A data da última atualização está indicada abaixo.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Última atualização: 21 de abril de 2026 — Construtora Evolutta — Empreendimento Ballock One
            </p>
          </section>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row gap-4">
          <Link to="/" className="btn-whatsapp">
            <ArrowLeft className="w-4 h-4" /> Voltar ao site
          </Link>
          <a
            href="#topo-politica"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="btn-whatsapp-outline"
          >
            <ArrowUp className="w-4 h-4" /> Voltar ao topo
          </a>
        </div>
      </div>
    </main>
  );
}
