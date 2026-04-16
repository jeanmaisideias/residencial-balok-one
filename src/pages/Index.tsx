import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
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

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <QuickInfoSection />
        <FinancialSection />
        <GallerySection />
        <BenefitsSection />
        <LocationSection />
        <PlantsSection />
        <TrustSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default Index;
