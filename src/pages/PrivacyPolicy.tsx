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
              Esta Política de Privacidade descreve como a Construtora Evolutta ("Evolutta", "nós") trata os dados relacionados aos usuários que acessam a landing page do empreendimento Ballock One, buscando conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).
            </p>
            <p>
              Ao navegar por esta página, você declara ter lido e compreendido os termos aqui descritos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-primary">2. Dados Tratados</h2>
            <p>
              Esta landing page <strong>não possui formulário de cadastro</strong>. Nós não coletamos nome, telefone, e-mail ou qualquer dado pessoal diretamente pelo site.
            </p>
            <p>Podem ser tratadas as seguintes categorias de informação:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Informações técnicas e de navegação</strong>, coletadas por ferramentas de medição de audiência: páginas acessadas, eventos de interação (como cliques em botões de WhatsApp), tipo de dispositivo, navegador, sistema operacional, origem do tráfego e identificadores atribuídos pelo próprio serviço de análise.
              </li>
              <li>
                <strong>Informações fornecidas voluntariamente por você no WhatsApp</strong>, caso decida iniciar uma conversa a partir dos botões do site (por exemplo, nome e número de telefone exibido pelo aplicativo).
              </li>
            </ul>
            <p>
              Não solicitamos dados sensíveis, conforme definidos pelo art. 5º, II da LGPD, nem direcionamos o conteúdo deste site a menores de 18 (dezoito) anos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-primary">3. Como Ocorre o Contato Comercial</h2>
            <p>
              A interação comercial acontece exclusivamente quando <strong>você decide acessar o WhatsApp</strong> por meio de um dos botões disponíveis no site. Ao clicar, você é direcionado ao aplicativo ou ao WhatsApp Web, fora deste site.
            </p>
            <p>
              As informações que você compartilhar dentro do WhatsApp são tratadas no contexto do atendimento comercial do empreendimento Ballock One: esclarecimento de dúvidas, apresentação de condições de aquisição, envio de materiais informativos e agendamento de visitas.
            </p>
            <p>
              O funcionamento do próprio aplicativo WhatsApp é regido pelas políticas de privacidade da respectiva plataforma, que não estão sob nosso controle.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-primary">4. Ferramentas de Terceiros Utilizadas</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Google Analytics 4:</strong> utilizado para métricas de acesso e de interação (visualizações de página e eventos, como cliques nos botões de WhatsApp). A finalidade é medir o desempenho da página e melhorar a comunicação do empreendimento. Os dados são processados pelo Google conforme suas próprias políticas.
              </li>
              <li>
                <strong>Google Maps:</strong> o site exibe um mapa incorporado para indicar a localização do empreendimento. Esse conteúdo é carregado a partir de servidores do Google e pode envolver tratamento de dados pelo Google conforme suas políticas.
              </li>
            </ul>
            <p>
              Você pode limitar esse tratamento por meio das configurações do seu navegador, de bloqueadores de rastreamento ou dos recursos de controle oferecidos pelo próprio Google.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-primary">5. Compartilhamento de Dados</h2>
            <p>
              As informações compartilhadas por você no WhatsApp podem ser encaminhadas a corretores de imóveis e equipes de vendas parceiras, exclusivamente para o atendimento comercial relacionado ao Ballock One.
            </p>
            <p>
              Esses profissionais devem utilizar as informações apenas para essa finalidade específica. Não vendemos, alugamos ou cedemos dados a terceiros não relacionados ao processo de venda do empreendimento.
            </p>
            <p>
              Dados de navegação coletados pelas ferramentas descritas na seção 4 são processados pelos respectivos fornecedores desses serviços.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-primary">6. Base Legal para o Tratamento</h2>
            <p>O tratamento de dados é realizado com fundamento nas seguintes bases legais previstas na LGPD:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Legítimo interesse (art. 7º, IX):</strong> para medição de audiência do site e para o atendimento comercial iniciado por você;</li>
              <li><strong>Procedimentos preliminares relacionados a contrato (art. 7º, V):</strong> quando o contato pelo WhatsApp visa a eventual aquisição de uma unidade.</li>
            </ul>
          </section>


          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-primary">7. Prazo de Retenção dos Dados</h2>
            <p>
              Seus dados serão mantidos pelo período necessário ao atendimento das finalidades descritas nesta política ou enquanto perdurar o seu interesse no empreendimento Ballock One. Após esse período, os dados serão eliminados ou anonimizados, salvo quando a retenção for exigida por obrigação legal ou regulatória.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-primary">8. Direitos do Titular dos Dados</h2>
            <p>Em conformidade com a LGPD, você possui os seguintes direitos em relação aos seus dados pessoais:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirmação da existência de tratamento de dados;</li>
              <li>Acesso aos dados coletados;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
              <li>Portabilidade dos dados a outro fornecedor;</li>
              <li>Oposição ao tratamento baseado em legítimo interesse, quando aplicável, nos termos da LGPD;</li>
              <li>Oposição ao tratamento realizado em descumprimento à LGPD.</li>
            </ul>
            <p>Para exercer qualquer um desses direitos, entre em contato conosco pelos canais indicados na seção 10 desta política.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-primary">9. Segurança das Informações</h2>
            <p>
              A Evolutta busca adotar medidas técnicas e administrativas razoáveis para proteger os seus dados pessoais contra acessos não autorizados, situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado.
            </p>
            <p>
              Embora empenhados na proteção dos seus dados, nenhum sistema de segurança é absolutamente inviolável. Em caso de incidente de segurança que possa gerar risco relevante a você, adotaremos as medidas cabíveis e comunicaremos as autoridades competentes nos termos da LGPD.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-primary">10. Contato e Canal de Atendimento</h2>
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
            <h2 className="font-display text-2xl md:text-3xl text-primary">11. Atualizações desta Política</h2>
            <p>
              Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças nas práticas de tratamento de dados ou na legislação aplicável. Recomendamos que você a consulte regularmente. A data da última atualização está indicada abaixo.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Última atualização: 31 de agosto de 2026 — Construtora Evolutta — Empreendimento Ballock One
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
