import { Navbar } from "@/pages/Stonecare/components/Navbar";
import { Hero } from "@/pages/Stonecare/components/Hero";
import { Clients } from "@/pages/Stonecare/components/Clients";
import { Services } from "@/pages/Stonecare/components/Services";
import { About } from "@/pages/Stonecare/components/About";
import { Gallery } from "@/pages/Stonecare/components/Gallery";
import { BeforeAfter } from "@/pages/Stonecare/components/BeforeAfter";
// import { Team } from "@/pages/Stonecare/components/Team";
import { Contact } from "@/pages/Stonecare/components/Contact";
import { Footer } from "@/pages/Stonecare/components/Footer";
import { BackToTop } from "@/pages/Stonecare/components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Clients />
        <Services />
        <About />
        <Gallery />
        <BeforeAfter />
        {/* <Team /> */}
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

