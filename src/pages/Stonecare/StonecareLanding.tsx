import { About } from "@/pages/Stonecare/components/About";
import { BackToTop } from "@/pages/Stonecare/components/BackToTop";
import { BeforeAfter } from "@/pages/Stonecare/components/BeforeAfter";
import { Clients } from "@/pages/Stonecare/components/Clients";
import { Contact } from "@/pages/Stonecare/components/Contact";
import { Footer } from "@/pages/Stonecare/components/Footer";
import { Gallery } from "@/pages/Stonecare/components/Gallery";
import { Hero } from "@/pages/Stonecare/components/Hero";
import { Navbar } from "@/pages/Stonecare/components/Navbar";
import { Services } from "@/pages/Stonecare/components/Services";
import { Toaster } from "@/pages/Stonecare/components/ui/toaster";

export default function StonecareLanding() {
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
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toaster />
    </div>
  );
}

