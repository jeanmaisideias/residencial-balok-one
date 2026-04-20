import { SectionReveal } from "./SectionReveal";

interface FullscreenSectionProps {
  image: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  variant?: "full" | "band";
}

export function FullscreenSection({ image, title, subtitle, align = "center", variant = "full" }: FullscreenSectionProps) {
  const heightClass = variant === "band"
    ? "h-[42vh] min-h-[320px] md:h-[70vh] md:min-h-[520px]"
    : "h-[80vh] min-h-[520px]";

  return (
    <section className={`relative ${heightClass} w-full overflow-hidden`}>
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/30 to-primary/75" />
      <div className={`relative h-full container flex flex-col justify-end pb-12 md:pb-24 ${align === "center" ? "items-center text-center" : "items-start"}`}>
        <SectionReveal>
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
