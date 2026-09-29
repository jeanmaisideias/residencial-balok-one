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
import { useContent, lines } from "@/content/store";



const Index = () => {
  const c = useContent();
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        <EmotionalBlock />

        <FullscreenSection
          image={c["band1.image"]}
          title={lines(c["band1.title"])}
          variant="band"
        />

        <QuickInfoSection />

        <BenefitsSection />

        <FullscreenSection
          image={c["band2.image"]}
          label={c["band2.label"]}
          title={lines(c["band2.title"])}
          subtitle={c["band2.subtitle"]}
          align="left"
        />

        <GallerySection />

        <FullscreenSection
          image={c["band3.image"]}
          title={lines(c["band3.title"])}
        />

        <LeisureSection />

        <PlantsSection />

        <FullscreenSection
          image={c["band4.image"]}
          label={c["band4.label"]}
          labelVariant="feature"
          title={lines(c["band4.title"])}
          variant="band"
          parallax
          imagePosition="center 8%"
        />

        <FinancialSection />

        <LocationSection />

        <FullscreenSection
          image={c["band5.image"]}
          title={lines(c["band5.title"])}
        />

        <TrustSection />

        <FullscreenSection
          image={c["band6.image"]}
          title={lines(c["band6.title"])}
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
