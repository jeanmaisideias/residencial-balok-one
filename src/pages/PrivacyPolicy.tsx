import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container max-w-3xl py-20 md:py-28">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar ao site
        </Link>

        <p className="eyebrow mb-4">Documento institucional</p>
        <h1 className="font-display text-4xl md:text-6xl text-primary leading-[1.02] mb-8 text-balance">
          Política de Privacidade
        </h1>

        <div className="prose prose-neutral max-w-none space-y-6 text-base md:text-lg text-foreground/85 leading-relaxed">
          <p>
            Esta Política de Privacidade descreve como a Construtora Evolutta coleta,
            utiliza, armazena e protege as informações pessoais dos visitantes do site
            do Residencial Ballock One.
          </p>

          <h2 className="font-display text-2xl md:text-3xl text-primary pt-6">1. Informações coletadas</h2>
          <p>
            Coletamos informações que você nos fornece voluntariamente ao entrar em
            contato pelo WhatsApp, formulários ou e-mails — como nome, telefone,
            e-mail e mensagens enviadas.
          </p>

          <h2 className="font-display text-2xl md:text-3xl text-primary pt-6">2. Uso das informações</h2>
          <p>
            As informações coletadas são utilizadas exclusivamente para responder
            solicitações, enviar materiais sobre o empreendimento, simular condições de
            financiamento e manter contato comercial.
          </p>

          <h2 className="font-display text-2xl md:text-3xl text-primary pt-6">3. Compartilhamento</h2>
          <p>
            Não compartilhamos suas informações com terceiros sem o seu consentimento,
            exceto quando exigido por lei ou para viabilizar a contratação de
            financiamento junto às instituições parceiras (como a Caixa Econômica
            Federal).
          </p>

          <h2 className="font-display text-2xl md:text-3xl text-primary pt-6">4. Cookies</h2>
          <p>
            Utilizamos cookies para melhorar sua experiência de navegação, lembrar
            preferências e mensurar o desempenho do site. Você pode desativá-los nas
            configurações do seu navegador.
          </p>

          <h2 className="font-display text-2xl md:text-3xl text-primary pt-6">5. Seus direitos (LGPD)</h2>
          <p>
            Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode
            solicitar a qualquer momento o acesso, correção, atualização ou exclusão
            dos seus dados pessoais. Basta entrar em contato pelos canais oficiais.
          </p>

          <h2 className="font-display text-2xl md:text-3xl text-primary pt-6">6. Contato</h2>
          <p>
            Para dúvidas relacionadas a esta Política de Privacidade, entre em contato
            pelo WhatsApp (11) 9 9907-7149.
          </p>

          <p className="text-sm text-muted-foreground pt-8">
            Esta política poderá ser atualizada a qualquer momento. Recomendamos
            revisão periódica.
          </p>
        </div>

        <div className="mt-14">
          <Link
            to="/"
            className="btn-whatsapp"
          >
            Voltar ao site
          </Link>
        </div>
      </div>
    </main>
  );
}
