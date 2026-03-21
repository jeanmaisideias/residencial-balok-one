import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { EmotionalBlock } from "@/components/EmotionalBlock";
import { BenefitsSection } from "@/components/BenefitsSection";
import { AboutSection } from "@/components/AboutSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { LocationSection } from "@/components/LocationSection";
import { VideoSection } from "@/components/VideoSection";
import { PlantsSection } from "@/components/PlantsSection";
import { ConditionsSection } from "@/components/ConditionsSection";
import { TimelineSection } from "@/components/TimelineSection";
import { ScarcitySection } from "@/components/ScarcitySection";
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
        <EmotionalBlock />
        <BenefitsSection />
        <AboutSection />
        <DifferentialsSection />
        <LocationSection />
        <VideoSection />
        <PlantsSection />
        <ConditionsSection />
        <TimelineSection />
        <ScarcitySection />
        <TrustSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default Index;
