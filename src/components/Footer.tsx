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
      <div className="container py-20 md:py-28">
        {/* Acompanhe a obra no YouTube */}
        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.03] hover:bg-primary-foreground/[0.06] transition-all p-6 md:p-8 mb-16"
        >
          <div className="flex items-center gap-5 md:gap-6">
            <div className="relative shrink-0">
              <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
              <span className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent text-accent-foreground shadow-premium group-hover:scale-105 transition-transform">
                <Play className="w-6 h-6 md:w-7 md:h-7 fill-current ml-0.5" />
              </span>
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary-foreground/40 mb-1">
                YouTube
              </p>
              <h3 className="font-display text-2xl md:text-3xl text-primary-foreground leading-tight">
                Acompanhe a obra pelo YouTube
              </h3>
              <p className="text-sm text-primary-foreground/60 mt-1">
                Vídeos semanais do andamento do Ballock One
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-accent-foreground font-semibold text-sm whitespace-nowrap group-hover:bg-accent/90 transition-colors">
            Assistir agora
          </span>
        </a>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 mb-16">
          <div className="space-y-5">
            <img src={logoEvolutta} alt="Evolutta Construtora e Incorporadora" className="h-20 md:h-24 w-auto" />
            <p className="text-sm text-primary-foreground/70 max-w-sm leading-relaxed">
              Há 13 anos no mercado imobiliário, somos especialistas em empreendimentos Minha Casa Minha Vida. Já entregamos centenas de unidades com qualidade, pontualidade e acabamento reconhecido. Mais do que construir imóveis, acompanhamos cada família com transparência, suporte e confiança até a conquista do novo lar.
            </p>
            <p className="text-xs text-primary-foreground/50 max-w-sm leading-relaxed pt-2 border-t border-primary-foreground/10">
              Evolutta Construtora Empreendimentos Imobiliários e Participações SPE LTDA — CNPJ 00.000.000/0001-00
            </p>
          </div>

          <div className="md:pl-4">
            <h4 className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary-foreground/40 mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-base text-primary-foreground/80 hover:text-accent transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/politica-de-privacidade" className="text-base text-primary-foreground/80 hover:text-accent transition-colors">
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
              <li>
                <a href="mailto:contato@evoluttaconstrutora.com.br" className="hover:text-accent transition-colors break-all">
                  contato@evoluttaconstrutora.com.br
                </a>
              </li>
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
                  className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/85 transition-all hover:-translate-y-0.5 shadow-elevated"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-primary-foreground/50">
          <p>Todos os direitos reservados © Construtora Evolutta {new Date().getFullYear()}</p>
          <a
            href="https://linktr.ee/maisideiasmkt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <span>Desenvolvido por</span>
            <img src={logoMaisIdeias} alt="MAIS IDEIAS" className="h-5 md:h-6 w-auto" />
          </a>
        </div>
      </div>
    </footer>
  );
}
