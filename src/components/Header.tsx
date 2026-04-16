import logoEvolutta from "@/assets/logo-evolutta.png";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Lazer", href: "#lazer" },
  { label: "Plantas", href: "#plantas" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-card/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#top" className="flex items-center">
          <img
            src={logoEvolutta}
            alt="Evolutta"
            className={cn(
              "w-auto transition-all duration-300",
              scrolled ? "h-8" : "h-10 brightness-0 invert"
            )}
          />
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled
                  ? "text-foreground/80 hover:text-accent"
                  : "text-primary-foreground/90 hover:text-accent"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/5511999077149?text=Venho%20do%20site%20do%20Balok%20One%20e%20quero%20saber%20mais"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[hsl(var(--green-whatsapp))] hover:bg-[hsl(var(--green-whatsapp-hover))] text-white text-sm font-semibold transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
