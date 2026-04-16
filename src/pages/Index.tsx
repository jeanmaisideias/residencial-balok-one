import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FullscreenSection } from "@/components/FullscreenSection";
import { QuickInfoSection } from "@/components/QuickInfoSection";
import { FinancialSection } from "@/components/FinancialSection";
import { GallerySection } from "@/components/GallerySection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { LocationSection } from "@/components/LocationSection";
import { PlantsSection } from "@/components/PlantsSection";
import { TrustSection } from "@/components/TrustSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/WhatsAppButton";
import noturna from "@/assets/empreendimento-noturna.jpg";
import piscina from "@/assets/lazer-piscina.jpg";
import hero from "@/assets/hero-building.jpg";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FullscreenSection
          image={noturna}
          title="Seu novo padrão de vida começa aqui"
          subtitle="Conforto, localização e valorização em um só lugar"
        />
        <QuickInfoSection />
        <FinancialSection />
        <GallerySection />
        <FullscreenSection
          image={piscina}
          title="Mais do que um apartamento. Um estilo de vida."
        />
        <BenefitsSection />
        <PlantsSection />
        <LocationSection />
        <TrustSection />
        <FullscreenSection
          image={hero}
          title="O momento de decidir é agora"
        />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default Index;
