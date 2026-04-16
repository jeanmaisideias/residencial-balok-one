import { SectionReveal } from "./SectionReveal";

interface FullscreenSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function FullscreenSection({ image, title, subtitle, align = "center" }: FullscreenSectionProps) {
  return (
    <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/30 to-primary/70" />
      <div className={`relative h-full container flex flex-col justify-end pb-16 md:pb-24 ${align === "center" ? "items-center text-center" : "items-start"}`}>
        <SectionReveal>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground tracking-tight leading-[1.05] text-balance max-w-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-5 text-base md:text-lg text-primary-foreground/80 max-w-xl">
              {subtitle}
            </p>
          )}
        </SectionReveal>
      </div>
    </section>
  );
}
