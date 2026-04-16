import { useEffect, useRef, useState } from "react";

const items = [
  { target: 229000, prefix: "R$", suffix: "", label: "PREÇO DE ENTRADA" },
  { target: 60, prefix: "", suffix: "x", label: "ENTRADA PARCELADA" },
  { target: 120, prefix: "", suffix: "", label: "APARTAMENTOS" },
  { target: 13, prefix: "", suffix: " anos", label: "DE EXPERIÊNCIA" },
];

export function ImpactBlock() {
  return (
    <section className="bg-primary">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-primary-foreground/10">
          {items.map((item) => (
            <CounterItem key={item.label} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CounterItem({ target, prefix, suffix, label }: { target: number; prefix: string; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1500;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setCount(Math.round(ease * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center px-6 py-10 border-r border-primary-foreground/10 last:border-r-0">
      <div className="flex items-baseline justify-center gap-1">
        {prefix && <span className="text-lg text-accent/70">{prefix}</span>}
        <span className="font-light text-accent" style={{ fontSize: "clamp(32px,4vw,56px)" }}>
          {count.toLocaleString("pt-BR")}
        </span>
        {suffix && <span className="text-base text-accent/70">{suffix}</span>}
      </div>
      <p className="text-[11px] tracking-[0.14em] uppercase text-primary-foreground/40 mt-2">{label}</p>
    </div>
  );
}
