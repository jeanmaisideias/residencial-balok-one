import logoEvolutta from "@/assets/logo-evolutta.png";

const links = [
  { label: "Sobre o empreendimento", href: "#sobre" },
  { label: "Plantas", href: "#plantas" },
  { label: "Localização", href: "#localizacao" },
];

export function Footer() {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-20">
          <div className="space-y-5">
            <img src={logoEvolutta} alt="Evolutta" className="h-14 w-auto opacity-90" />
            <p className="text-sm text-primary-foreground/60 max-w-xs leading-relaxed">
              Especialistas em transformar projetos em realidade.
            </p>
          </div>

          <div className="md:pl-8">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground/40 mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground/40 mb-6">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>WhatsApp: (11) 9 9907-7149</li>
              <li>residencialballock1.com.br</li>
              <li className="text-primary-foreground/60 leading-relaxed">
                Rua Três Corações, Jardim Benedito<br />Indaial, SC
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row gap-2 md:justify-between text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} Residencial Balok One</p>
          <p>Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
