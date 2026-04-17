import { Instagram, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logoEvolutta from "@/assets/logo-evolutta.png";

const links = [
  { label: "Início", href: "#topo" },
  { label: "Empreendimento", href: "#sobre" },
  { label: "Plantas", href: "#plantas" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 mb-16">
          <div className="space-y-5">
            <img src={logoEvolutta} alt="Evolutta" className="h-14 w-auto brightness-0 invert opacity-95" />
            <p className="text-sm text-primary-foreground/60 max-w-xs leading-relaxed">
              Especialistas em transformar projetos em realidade. Empreendimentos sólidos para famílias que buscam evolução.
            </p>
          </div>

          <div className="md:pl-4">
            <h4 className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary-foreground/40 mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/politica-de-privacidade" className="text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary-foreground/40 mb-6">
              Conecte-se
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80 mb-8">
              <li>WhatsApp: (11) 9 9907-7149</li>
              <li>Rua Três Corações, Jardim Benedito</li>
              <li>Indaial, SC</li>
            </ul>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-all hover:-translate-y-0.5"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-primary-foreground/50">
          <p>Todos os direitos reservados © Construtora Evolutta {new Date().getFullYear()}</p>
          <p className="flex items-center gap-2">
            Desenvolvido por <span className="font-semibold text-primary-foreground/80">MAIS IDEIAS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
