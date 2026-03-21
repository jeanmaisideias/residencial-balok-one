import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ImpactBlock } from "@/components/ImpactBlock";
import { EmotionalBlock } from "@/components/EmotionalBlock";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ApartmentExperience } from "@/components/ApartmentExperience";
import { ApartmentConfig } from "@/components/ApartmentConfig";
import { PlantsSection } from "@/components/PlantsSection";
import { LeisureSection } from "@/components/LeisureSection";
import { LocationSection } from "@/components/LocationSection";
import { VideoSection } from "@/components/VideoSection";
import { ConditionsSection } from "@/components/ConditionsSection";
import { TimelineSection } from "@/components/TimelineSection";
import { ScarcitySection } from "@/components/ScarcitySection";
import { TrustSection } from "@/components/TrustSection";
import { FinalCTA } from "@/components/FinalCTA";
import { StandSection } from "@/components/StandSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ImpactBlock />
        <EmotionalBlock />
        <BenefitsSection />
        <ApartmentExperience />
        <ApartmentConfig />
        <PlantsSection />
        <LeisureSection />
        <LocationSection />
        <VideoSection />
        <ConditionsSection />
        <TimelineSection />
        <ScarcitySection />
        <TrustSection />
        <FinalCTA />
        <StandSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default Index;
