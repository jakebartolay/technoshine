import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { stonecareImageAssets } from "@/pages/Stonecare/stonecareAssets";

export function Hero() {
  const scrollToServices = () => {
    const element = document.querySelector("#services-heading");
    if (!element) return;

    const section = element as HTMLElement;
    const rect = section.getBoundingClientRect();
    const absoluteTop = rect.top + window.scrollY;
    const top = Math.max(
      absoluteTop - window.innerHeight / 2 + rect.height / 2,
      0,
    );

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 sm:pt-20">
      {/* Background Image & Overlay — keep dark so hero text is readable */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/55 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black z-10" />
        <img
          src={stonecareImageAssets.heroMarbleFloor}
          alt="Polished Marble Floor"
          className="w-full h-full object-cover object-bottom opacity-80"
        />
        <div className="absolute inset-0 tech-pattern opacity-10 z-10" />
      </div>

      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 inline-flex max-w-full items-center gap-2 rounded-none border border-primary/50 bg-primary/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.22em] text-primary sm:text-xs sm:tracking-widest"
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Premium Stone Restoration Specialists
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-5 text-5xl font-hero font-black leading-[0.9] tracking-tighter text-white glow-text sm:mb-6 sm:text-7xl md:text-8xl lg:text-9xl"
        >
          TECHNO<span className="text-primary">SHINE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 max-w-xl text-sm leading-6 font-light text-white/80 sm:mb-10 sm:max-w-2xl sm:text-xl sm:leading-normal"
        >
          Restoring marble, granite, and natural stone surfaces to their original brilliance — with precision craftsmanship and decades of expertise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex w-full max-w-sm flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-4"
        >
          <button
            type="button"
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden border border-primary bg-transparent px-4 py-3 text-center text-xs font-display font-bold uppercase tracking-[0.14em] text-white shadow-[0_0_15px_rgba(255,107,0,0.2)] transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(255,107,0,0.5)] sm:w-auto sm:px-8 sm:py-4 sm:text-base sm:tracking-widest"
          >
            <span className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center gap-2">
              Book a Free Assessment
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </button>
          <button
            type="button"
            onClick={scrollToServices}
            className="w-full border border-white/40 bg-transparent px-4 py-3 text-center text-xs font-display font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-white sm:w-auto sm:px-8 sm:py-4 sm:text-base sm:tracking-widest"
          >
            Our Services
          </button>
        </motion.div>
      </div>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={scrollToServices}
        className="absolute bottom-5 left-0 right-0 mx-auto flex w-fit items-center justify-center text-primary/70 hover:text-primary transition-colors z-20 animate-bounce sm:bottom-8"
      >
        <ChevronDown className="w-10 h-10" />
      </motion.button>
    </section>
  );
}
