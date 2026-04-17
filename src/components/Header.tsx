import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import logoEvolutta from "@/assets/logo-evolutta.png";
import logoCaixa from "@/assets/logo-caixa.png";
import logoMcmv from "@/assets/logo-mcmv.png";

const WHATSAPP_NUMBER = "5511999077149";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Venho do site do Balok One")}`;

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

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const linkClass = cn(
    "relative text-[13px] font-medium tracking-wide transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full",
    scrolled ? "text-foreground/80 hover:text-foreground" : "text-primary-foreground/85 hover:text-primary-foreground"
  );

  return (
    <header
      id="topo"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-soft"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-20 lg:h-24">
        {/* Logo */}
        <a href="#topo" className="flex items-center shrink-0">
          <img
            src={logoEvolutta}
            alt="Evolutta"
            className={cn(
              "w-auto transition-all duration-300",
              scrolled ? "h-10 md:h-12" : "h-12 md:h-16",
              scrolled ? "" : "brightness-0 invert"
            )}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className={linkClass}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 pr-2 border-r border-border/40 mr-1">
            <img src={logoCaixa} alt="Caixa" className={cn("h-7 w-auto transition", scrolled ? "" : "brightness-0 invert opacity-90")} />
            <img src={logoMcmv} alt="Minha Casa Minha Vida" className={cn("h-7 w-auto transition", scrolled ? "" : "brightness-0 invert opacity-90")} />
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-whatsapp text-white px-5 py-2.5 text-sm font-semibold shadow-elevated hover:bg-whatsapp-hover hover:-translate-y-0.5 active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Falar no WhatsApp
          </a>

          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors",
              scrolled ? "text-foreground hover:bg-secondary" : "text-primary-foreground hover:bg-white/10"
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
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-white px-5 py-3 text-sm font-semibold"
          >
            <MessageCircle className="w-4 h-4" />
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
