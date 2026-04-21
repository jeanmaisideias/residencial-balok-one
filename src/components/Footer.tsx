import { Instagram, Facebook, Youtube, Play } from "lucide-react";
import { Link } from "react-router-dom";
import logoEvolutta from "@/assets/logo-evolutta-white-h.png";
import logoMaisIdeias from "@/assets/mais-ideias-white.png";

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

const YOUTUBE_URL = "https://www.youtube.com/@evoluttaconstrutora";

export function Footer() {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      {/* Top accent bar */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="container py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-14">
          {/* Column 1 — Brand */}
          <div className="md:col-span-5 space-y-5">
            <img src={logoEvolutta} alt="Evolutta Construtora e Incorporadora" className="h-20 md:h-24 w-auto" />
            <p className="text-sm text-primary-foreground/70 max-w-md leading-relaxed">
              Há 13 anos no mercado imobiliário, somos especialistas em empreendimentos Minha Casa Minha Vida. Já entregamos centenas de unidades com qualidade, pontualidade e acabamento reconhecido. Mais do que construir imóveis, acompanhamos cada família com transparência, suporte e confiança até a conquista do novo lar.
            </p>
          </div>

          {/* Column 2 — Navegação */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary-foreground/40 mb-6">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/politica-de-privacidade" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Conecte-se */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary-foreground/40 mb-6">
              Conecte-se
            </h4>
            <a
              href="mailto:contato@evoluttaconstrutora.com.br"
              className="text-sm text-primary-foreground/80 hover:text-accent transition-colors break-all block mb-6"
            >
              contato@evoluttaconstrutora.com.br
            </a>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/85 transition-all hover:-translate-y-0.5 shadow-elevated"
                >
                  <s.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 4 — YouTube */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary-foreground/40 mb-6">
              Acompanhe a obra
            </h4>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start gap-3"
            >
              <span className="relative">
                <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
                <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-premium group-hover:scale-105 transition-transform">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </span>
              </span>
              <span className="text-sm font-medium text-primary-foreground/85 group-hover:text-accent transition-colors leading-tight">
                Acompanhe a obra<br />pelo YouTube
              </span>
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-primary-foreground/50">
          <p className="md:flex-1">Evolutta Construtora Empreendimentos Imobiliários e Participações SPE LTDA — CNPJ 00.000.000/0001-00 · Todos os direitos reservados © Construtora Evolutta {new Date().getFullYear()}</p>
          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden md:inline text-primary-foreground/30">|</span>
            <a
              href="https://linktr.ee/maisideiasmkt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              <span>Desenvolvido por</span>
              <img src={logoMaisIdeias} alt="MAIS IDEIAS" className="h-5 md:h-6 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
