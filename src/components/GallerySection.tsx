import { SectionReveal } from "./SectionReveal";
import noturna from "@/assets/empreendimento-noturna.jpg";
import amenities from "@/assets/amenities.jpg";
import piscina from "@/assets/lazer-piscina.jpg";
import salao from "@/assets/lazer-salao.jpg";

const images = [
  { src: noturna, alt: "Fachada do Residencial Balok One à noite" },
  { src: amenities, alt: "Área de lazer do empreendimento" },
  { src: piscina, alt: "Piscina do condomínio" },
  { src: salao, alt: "Salão de festas" },
];

export function GallerySection() {
  return (
    <section className="section-padding bg-card">
      <div className="container max-w-6xl">
        <SectionReveal>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-wider uppercase text-whatsapp mb-3">Galeria</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary text-balance">
              Conheça o seu novo lar
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {images.map((img, i) => (
            <SectionReveal key={img.alt} delay={i * 80}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={img.src} alt={img.alt} className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
