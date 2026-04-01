import AboutSection from "@/pages/Home/sections/AboutSection";
import ContactSection from "@/pages/Home/sections/ContactSection";
import HeroSection from "@/pages/Home/sections/HeroSection";
import PortfolioSection from "@/pages/Home/sections/PortfolioSection";
import ServicesSection from "@/pages/Home/sections/ServicesSection";
import TeamSection from "@/pages/Home/sections/TeamSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
