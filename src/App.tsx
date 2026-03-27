import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import TeamSection from "./sections/TeamSection";
import ServicesSection from "./sections/ServicesSection";
import PortfolioSection from "./sections/PortfolioSection";
import ContactSection from "./sections/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
}
