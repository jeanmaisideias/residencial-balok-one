import heroVideo from "@/assets/video-hero.mp4";
import familyImg from "@/assets/familia-feliz.webp";
import fachadaPremium from "@/assets/balok/fachada-noturna.webp";
import salaCozinha from "@/assets/balok/sala-cozinha-01.webp";
import quadraBeach from "@/assets/balok/quadra-beach.webp";
import predioBallockOne from "@/assets/predio_ballock_one.webp";
import homeownersKeys from "@/assets/close-up-homeowners-with-new-house-keys-2.webp";
import familyNewHome from "@/assets/family-new-home.webp";
import sala1 from "@/assets/balok/sala-cozinha-01.webp";
import sala2 from "@/assets/balok/sala-cozinha-02.webp";
import dorm1 from "@/assets/balok/dormitorio-01.webp";
import dorm2 from "@/assets/balok/dormitorio-02.webp";
import banho from "@/assets/balok/banho.webp";
import sacada from "@/assets/balok/sacada.webp";
import planta40 from "@/assets/balok/planta-40.webp";
import planta43 from "@/assets/balok/planta-43.webp";
import plantaGarden from "@/assets/balok/planta-garden.webp";
import salaCozinhaFin from "@/assets/sala-cozinha-financial.webp";

export type FieldType = "text" | "textarea" | "image" | "video";
export interface Field { key: string; label: string; type: FieldType; default: string; hint?: string }
export interface Group { title: string; fields: Field[] }

const t = (key: string, label: string, def: string, hint?: string): Field => ({ key, label, type: "text", default: def, hint });
const ta = (key: string, label: string, def: string, hint?: string): Field => ({ key, label, type: "textarea", default: def, hint });
const img = (key: string, label: string, def: string): Field => ({ key, label, type: "image", default: def });

const BR = "Use Enter para quebrar linha.";

export const groups: Group[] = [
  {
    title: "Topo (Hero)",
    fields: [
      t("hero.badge", "Selo superior", "Venha ser feliz! Sua família merece!"),
      t("hero.title1", "Título – linha 1", "Apartamento em condomínio fechado"),
      t("hero.title2", "Título – linha 2 (verde)", "com entrada de R$ 1.000?"),
      t("hero.title3", "Título – linha 3", "Sim, a gente fez acontecer!"),
      ta("hero.subtitle", "Subtítulo", "Em Indaial, com parcelas acessíveis, lazer completo e condições especiais de lançamento"),
      t("hero.chip1", "Destaque 1", "A partir de R$ 229 mil"),
      t("hero.chip2", "Destaque 2", "Sinal de R$ 1.000"),
      t("hero.chip3", "Destaque 3", "Entrada em até 60x"),
      t("hero.chip4", "Destaque 4", "2 dormitórios + 1 ou 2 vagas"),
      t("hero.cta1", "Botão 1", "Quero falar com especialista"),
      t("hero.cta2", "Botão 2", "Simular financiamento"),
      { key: "hero.video", label: "Vídeo de fundo", type: "video", default: heroVideo, hint: "Endereço de um arquivo MP4 (links do YouTube não funcionam como fundo)." },
    ],
  },
  {
    title: "Bloco emocional",
    fields: [
      t("emotional.line1", "Título – linha 1", "Não é só um apartamento."),
      t("emotional.line2", "Título – linha 2 (verde)", "É o fim do aluguel."),
      t("emotional.line3", "Título – linha 3", "É o começo da sua independência."),
      img("emotional.image", "Imagem", familyImg),
    ],
  },
  {
    title: "Faixas com foto",
    fields: [
      ta("band1.title", "Faixa 1 – título", "Venha viver no que é seu!", BR),
      img("band1.image", "Faixa 1 – imagem", fachadaPremium),
      t("band2.label", "Faixa 2 – selo", "Os apartamentos"),
      ta("band2.title", "Faixa 2 – título", "Um lar lindo por\ndentro e por fora", BR),
      t("band2.subtitle", "Faixa 2 – subtítulo", "Ambientes planejados para viver bem todos os dias"),
      img("band2.image", "Faixa 2 – imagem", salaCozinha),
      ta("band3.title", "Faixa 3 – título", "Você merece mais vida, mais lazer e mais orgulho", BR),
      img("band3.image", "Faixa 3 – imagem", quadraBeach),
      t("band4.label", "Faixa 4 – selo", "A partir de R$ 229.000"),
      ta("band4.title", "Faixa 4 – título", "O melhor apartamento\nMCMV de Santa Catarina!", BR),
      img("band4.image", "Faixa 4 – imagem", homeownersKeys),
      ta("band5.title", "Faixa 5 – título", "Um lugar perfeito para criar memórias especiais", BR),
      img("band5.image", "Faixa 5 – imagem", predioBallockOne),
      ta("band6.title", "Faixa 6 – título", "Toda família merece viver a emoção de abrir a porta do próprio lar", BR),
      img("band6.image", "Faixa 6 – imagem", familyNewHome),
    ],
  },
  {
    title: "Galeria",
    fields: [
      t("gallery.title", "Título", "Você vai amar morar aqui"),
      t("gallery.subtitle", "Subtítulo", "Apartamentos que entregam conforto e bem-estar"),
      ...[
        [sala1, "Sala integrada"], [sala2, "Cozinha planejada"], [dorm1, "Dormitório casal"],
        [dorm2, "Dormitório solteiro"], [banho, "Banheiro moderno"], [sacada, "Sacada privativa"],
      ].flatMap(([src, cap], i) => [
        img(`gallery.img${i + 1}`, `Foto ${i + 1}`, src),
        t(`gallery.cap${i + 1}`, `Legenda ${i + 1}`, cap),
      ]),
    ],
  },
  {
    title: "Plantas",
    fields: [
      img("plants.img1", "Planta 43,8 m²", planta40),
      img("plants.img2", "Planta 47 m²", planta43),
      img("plants.img3", "Planta Garden", plantaGarden),
    ],
  },
  {
    title: "Condições",
    fields: [
      t("financial.title", "Título", "Comece com pouco. Conquiste muito!"),
      img("financial.image", "Imagem", salaCozinhaFin),
      t("financial.v1", "Valor 1", "R$ 1.000"), t("financial.l1", "Descrição 1", "de sinal"),
      t("financial.v2", "Valor 2", "60x"), t("financial.l2", "Descrição 2", "entrada parcelada"),
      t("financial.v3", "Valor 3", "Limitadas"), t("financial.l3", "Descrição 3", "unidades disponíveis"),
    ],
  },
  {
    title: "Chamada final",
    fields: [
      t("final.title", "Título", "Garanta o seu apartamento agora!"),
      t("final.subtitle", "Subtítulo", "Comece com R$ 1.000. Condições de lançamento por tempo limitado."),
    ],
  },
  {
    title: "Contato",
    fields: [
      t("contact.whatsapp", "Número do WhatsApp", "5547999670570", "Somente números, com 55 + DDD. Ex.: 5547999670570"),
      t("contact.message", "Mensagem padrão (topo e botão fixo)", "Venho do site do Ballock One"),
    ],
  },
];

export const defaults: Record<string, string> = Object.fromEntries(
  groups.flatMap((g) => g.fields.map((f) => [f.key, f.default]))
);
