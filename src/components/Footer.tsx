import logoEvolutta from "@/assets/logo-evolutta.png";
import logoCaixa from "@/assets/logo-caixa.png";
import logoMcmv from "@/assets/logo-mcmv.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground/70 border-t border-primary-foreground/10">
      <div className="container section-padding-compact">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={logoEvolutta} alt="Evolutta" className="h-24 w-auto mb-4" />
            <p className="text-sm">
              Realizando o sonho da casa própria com qualidade, transparência e compromisso.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-primary-foreground mb-3 uppercase tracking-wider">Contato</h4>
            <p className="text-sm mb-1">WhatsApp: (47) 9 9999-9999</p>
            <p className="text-sm mb-1">CNPJ: XX.XXX.XXX/0001-XX</p>
            <p className="text-sm">Indaial, SC – Brasil</p>
          </div>

          {/* Institutional */}
          <div>
            <h4 className="text-sm font-bold text-primary-foreground mb-3 uppercase tracking-wider">Institucional</h4>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <img src={logoCaixa} alt="Caixa Econômica Federal" className="h-8 w-auto" />
              <img src={logoMcmv} alt="Minha Casa Minha Vida" className="h-8 w-auto" />
            </div>
            <div className="flex gap-4 text-xs">
              <a href="#" className="hover:text-primary-foreground transition-colors underline underline-offset-2">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors underline underline-offset-2">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs">
          © {new Date().getFullYear()} Evolutta. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
