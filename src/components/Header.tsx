import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import logoEvoluttaWhite from "@/assets/logo-evolutta.png";
import logoEvoluttaBlack from "@/assets/logo-evolutta-black.png";
import logoEvoluttaHorizontalBlack from "@/assets/logo-evolutta-horizontal-black.png";
import logoCaixaWhite from "@/assets/logo-caixa.png";
import logoCaixaColor from "@/assets/logo-caixa-color.png";
import logoMcmvWhite from "@/assets/logo-mcmv.png";
import logoMcmvColor from "@/assets/logo-mcmv-color.png";

const WHATSAPP_NUMBER = "5511999077149";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Venho do site do Ballock One")}`;

const navItems = [
  { label: "Início", href: "#topo" },
  { label: "O Empreendimento", href: "#sobre" },
  { label: "Lazer", href: "#lazer" },
  { label: "Plantas", href: "#plantas" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isCompact = scrolled || open;
  const showVerticalWhite = !isCompact;
  const showHorizontalBlack = isCompact;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const linkClass = cn(
    "relative text-[13px] font-medium tracking-wide transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all hover:text-accent hover:after:w-full",
    isCompact ? "text-foreground/80" : "text-primary-foreground/85"
  );

  return (
    <header
      id="topo"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isCompact
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-soft"
          : "bg-transparent"
      )}
    >
      <div className={cn(
        "container flex items-center justify-between transition-all duration-300",
         isCompact ? "h-16 lg:h-16" : "h-32 md:h-36 lg:h-40"
      )}>
        {/* Logo */}
        <a href="#topo" className="relative flex items-center shrink-0 w-[210px] md:w-[250px] lg:w-[270px] h-32 md:h-36 lg:h-40 overflow-visible">
          <img
            src={logoEvoluttaHorizontalBlack}
            alt="Evolutta"
            className={cn(
              "absolute left-0 top-1/2 w-[90px] md:w-[110px] lg:w-[120px] h-auto -translate-y-1/2 object-contain transition-[opacity,transform] duration-700 ease-out",
              showHorizontalBlack ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            )}
          />
          <img
            src={logoEvoluttaWhite}
            alt="Evolutta"
            className={cn(
              "absolute left-0 top-1/2 h-28 md:h-32 lg:h-34 w-auto -translate-y-1/2 object-contain transition-[opacity,transform] duration-700 ease-out",
              showVerticalWhite ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            )}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 2xl:gap-9 mr-6 xl:mr-10">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className={linkClass}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-5 xl:gap-6">
          <div className="hidden md:flex items-center gap-3 pl-7 xl:pl-9 pr-3 border-l border-r border-border/40 mr-1">
            <span className="relative block h-[21px] w-[74px]">
              <img src={logoCaixaWhite} alt="Caixa" className={cn("absolute inset-0 h-[21px] w-auto transition-opacity duration-700 ease-out", isCompact ? "opacity-0" : "opacity-100")} />
              <img src={logoCaixaColor} alt="Caixa" className={cn("absolute inset-0 h-[21px] w-auto transition-opacity duration-700 ease-out", isCompact ? "opacity-100" : "opacity-0")} />
            </span>
            <span className="relative block h-7 w-[92px]">
              <img src={logoMcmvWhite} alt="Minha Casa Minha Vida" className={cn("absolute inset-0 h-7 w-auto transition-opacity duration-700 ease-out", isCompact ? "opacity-0" : "opacity-100")} />
              <img src={logoMcmvColor} alt="Minha Casa Minha Vida" className={cn("absolute inset-0 h-7 w-auto transition-opacity duration-700 ease-out", isCompact ? "opacity-100" : "opacity-0")} />
            </span>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-whatsapp text-white px-4 py-2 text-xs font-semibold shadow-elevated hover:bg-whatsapp-hover hover:-translate-y-0.5 active:scale-95 transition-all"
          >
            Solicite informações
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors",
              isCompact ? "text-foreground hover:bg-secondary" : "text-primary-foreground hover:bg-primary-foreground/10"
            )}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 bg-background/95 backdrop-blur-xl border-t border-border/60",
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container py-6 flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium text-foreground/85 hover:text-foreground border-b border-border/40 last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-white px-6 py-3 text-sm font-semibold"
          >
            Solicite informações
            <ArrowRight className="w-4 h-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
