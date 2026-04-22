import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5511999077149";

interface WhatsAppButtonProps {
  message: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "hero-outline";
  className?: string;
}

export function WhatsAppButton({ message, children, variant = "solid", className = "" }: WhatsAppButtonProps) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  const baseClass = variant === "outline"
    ? "btn-whatsapp-outline"
    : variant === "hero-outline"
    ? "btn-whatsapp-outline border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:border-primary-foreground"
    : "btn-whatsapp";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClass} leading-tight text-center ${className}`}
    >
      <MessageCircle className="w-5 h-5 shrink-0" />
      <span>{children}</span>
    </a>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Venho do site do Ballock One e quero saber mais")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-whatsapp text-white shadow-premium animate-pulse-green transition-transform duration-200 hover:scale-110 active:scale-95"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
    </a>
  );
}
