import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { EmotionalBlock } from "@/components/EmotionalBlock";
import { FullscreenSection } from "@/components/FullscreenSection";
import { QuickInfoSection } from "@/components/QuickInfoSection";
import { GallerySection } from "@/components/GallerySection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { LeisureSection } from "@/components/LeisureSection";
import { LocationSection } from "@/components/LocationSection";
import { PlantsSection } from "@/components/PlantsSection";
import { FinancialSection } from "@/components/FinancialSection";
import { TrustSection } from "@/components/TrustSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";


import fachadaPremium from "@/assets/balok/fachada-noturna.webp";
import salaCozinha from "@/assets/balok/sala-cozinha-01.webp";
import quadraBeach from "@/assets/balok/quadra-beach.webp";
import sacada from "@/assets/balok/sacada.webp";
import predioBallockOne from "@/assets/predio_ballok_one_2.webp";
import homeownersKeys from "@/assets/close-up-homeowners-with-new-house-keys-2.webp";
import familyNewHome from "@/assets/family-new-home.webp";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        <EmotionalBlock />

        <FullscreenSection
          image={fachadaPremium}
          title="Venha viver no que é seu!"
          variant="band"
        />

        <QuickInfoSection />

        <BenefitsSection />

        <FullscreenSection
          image={salaCozinha}
          label="Os apartamentos"
          title={<>Um lar lindo por<br />dentro e por fora</>}
          subtitle="Ambientes planejados para viver bem todos os dias"
          align="left"
        />

        <GallerySection />

        <FullscreenSection
          image={quadraBeach}
          title="Você merece mais vida, mais lazer e mais orgulho"
        />

        <LeisureSection />

        <PlantsSection />

        <FullscreenSection
          image={homeownersKeys}
          label="A partir de R$ 229.000"
          labelVariant="feature"
          title={<>O melhor apartamento<br />MCMV de Santa Catarina!</>}
          variant="band"
          parallax
          imagePosition="center 8%"
        />

        <FinancialSection />

        <LocationSection />

        <FullscreenSection
          image={predioBallockOne}
          title="Um lugar perfeito para criar memórias especiais"
        />

        <TrustSection />

        <FullscreenSection
          image={familyNewHome}
          title="Toda família merece viver a emoção de abrir a porta do próprio lar"
          parallax
          imagePosition="center 20%"
        />

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
