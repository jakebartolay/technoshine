import ConstructionAboutPreview from "@/pages/Construction/components/sections/ConstructionAboutPreview";
import ConstructionClientsSection from "@/pages/Construction/components/sections/ConstructionClientsSection";
import ConstructionContactPreview from "@/pages/Construction/components/sections/ConstructionContactPreview";
import ConstructionCTASection from "@/pages/Construction/components/sections/ConstructionCTASection";
import ConstructionFeaturedProjects from "@/pages/Construction/components/sections/ConstructionFeaturedProjects";
import ConstructionHero from "@/pages/Construction/components/sections/ConstructionHero";
import ConstructionServicesPreview from "@/pages/Construction/components/sections/ConstructionServicesPreview";
import ConstructionWhyChooseUs from "@/pages/Construction/components/sections/ConstructionWhyChooseUs";

export default function ConstructionLanding() {
  return (
    <>
      <ConstructionHero />
      <ConstructionAboutPreview />
      <ConstructionServicesPreview />
      <ConstructionFeaturedProjects />
      <ConstructionWhyChooseUs />
      <ConstructionClientsSection />
      <ConstructionCTASection />
      <ConstructionContactPreview />
    </>
  );
}
