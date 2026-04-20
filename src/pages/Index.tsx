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


import fachadaPremium from "@/assets/balok/fachada-noturna.jpg";
import salaCozinha from "@/assets/balok/sala-cozinha-01.jpg";
import quadraBeach from "@/assets/balok/quadra-beach.jpg";
import sacada from "@/assets/balok/sacada.jpg";
import indaialCity from "@/assets/acesso-video-obra.jpg";

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

        <FinancialSection />

        <LocationSection />

        <FullscreenSection
          image={indaialCity}
          title="No coração de uma cidade que cresce."
        />

        <TrustSection />

        <FullscreenSection
          image={sacada}
          title="O momento certo pode ser agora"
        />

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
