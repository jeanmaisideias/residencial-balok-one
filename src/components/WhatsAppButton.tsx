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
    ? "btn-whatsapp-outline border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
    : "btn-whatsapp";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClass} ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {children}
    </a>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Venho do site do Balok One e quero saber mais")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-whatsapp shadow-lg animate-pulse-green transition-transform duration-200 hover:scale-105 active:scale-95"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-accent-foreground" />
    </a>
  );
}
