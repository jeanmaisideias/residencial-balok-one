import { SectionReveal } from "./SectionReveal";

interface FullscreenSectionProps {
  image: string;
  title: React.ReactNode;
  subtitle?: string;
  label?: string;
  labelVariant?: "chip" | "feature";
  align?: "left" | "center";
  variant?: "full" | "band";
  parallax?: boolean;
  imagePosition?: string;
}

export function FullscreenSection({ image, title, subtitle, label, labelVariant = "chip", align = "center", variant = "full", parallax = false, imagePosition = "center" }: FullscreenSectionProps) {
  const heightClass = variant === "band"
    ? "h-[42vh] min-h-[320px] md:h-[70vh] md:min-h-[520px]"
    : "h-[80vh] min-h-[520px]";

  return (
    <section className={`relative ${heightClass} w-full overflow-hidden`}>
      <div
        className={`absolute inset-0 bg-cover bg-center ${parallax ? "md:bg-fixed" : "scale-105"}`}
        style={{ backgroundImage: `url(${image})`, backgroundPosition: imagePosition }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/30 to-primary/75" />
      <div className={`relative h-full container flex flex-col justify-end pb-12 md:pb-24 ${align === "center" ? "items-center text-center" : "items-start"}`}>
        <SectionReveal>
          {label && (
            <p className="mb-4 inline-block px-3 py-1 text-[11px] font-semibold tracking-[0.22em] uppercase rounded-full bg-white/10 backdrop-blur-md text-primary-foreground/90 border border-white/15">
              {label}
            </p>
          )}
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground tracking-tight leading-[1.05] text-balance max-w-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base md:text-lg text-primary-foreground/85 max-w-xl text-pretty">
              {subtitle}
            </p>
          )}
        </SectionReveal>
      </div>
    </section>
  );
}
