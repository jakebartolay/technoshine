import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

import { stonecareImageAssets } from "@/pages/Stonecare/stonecareAssets";

const clients = [
  { name: "Shangri-La Manila", icon: stonecareImageAssets.clientLogos.hotelIcon1 },
  { name: "Marco Polo Hotels", icon: stonecareImageAssets.clientLogos.hotelIcon2 },
  { name: "Okura Hotels & Resorts", icon: stonecareImageAssets.clientLogos.hotelIcon3 },
  { name: "Okada Manila", icon: stonecareImageAssets.clientLogos.hotelIcon4 },
  { name: "Solaire Resort & Casino", icon: stonecareImageAssets.clientLogos.hotelIcon5 },
  { name: "Waterfront Hotels & Casinos", icon: stonecareImageAssets.clientLogos.hotelIcon6 },
  { name: "Nustar SkyDeck", icon: stonecareImageAssets.clientLogos.hotelIcon7 },
  { name: "Marriott Hotels & Resorts", icon: stonecareImageAssets.clientLogos.hotelIcon8 },
  { name: "Waterfront Hotels & Casinos | Cebu", icon: stonecareImageAssets.clientLogos.hotelIcon9 },
  { name: "The Manila Hotel", icon: stonecareImageAssets.clientLogos.hotelIcon10 },
  { name: "City of Dreams Manila", icon: stonecareImageAssets.clientLogos.hotelIcon11 },
  { name: "Mactan Cebu International Airport", icon: stonecareImageAssets.clientLogos.hotelIcon12 },
];

export function Clients() {
  return (
    <section id="clients" className="py-16 bg-foreground overflow-hidden relative">
      <div className="absolute inset-0 tech-pattern opacity-[0.04]" />

      <div className="relative z-10 mx-auto mb-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3">
          <div className="h-px flex-1 bg-white/10" />
          <div className="flex items-center gap-2 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 sm:text-xs sm:tracking-[0.25em]">
            <Building2 className="w-4 h-4 text-primary" />
            Trusted by Philippine Hotels
          </div>
          <div className="h-px flex-1 bg-white/10" />
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-foreground to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-foreground to-transparent pointer-events-none" />

        <motion.div
          className="flex w-max whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 80, ease: "linear", repeat: Infinity }}
        >
          {[0, 1].map((copyIndex) => (
            <div key={copyIndex} className="flex shrink-0 items-center">
              {clients.map(({ name, icon }, index) => (
                <div
                  key={`${copyIndex}-${index}`}
                  className="group inline-flex items-center gap-4 px-5 cursor-default sm:gap-5 sm:px-8"
                >
                  <div className="flex h-14 w-24 shrink-0 items-center justify-center overflow-hidden sm:h-16 sm:w-28">
                    <img
                      src={icon}
                      alt={name}
                      className="max-w-full max-h-full object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>

                  <span className="font-display text-xs uppercase tracking-[0.18em] text-white/75 transition-colors duration-300 group-hover:text-primary sm:text-sm sm:tracking-widest">
                    {name}
                  </span>

                  <span className="text-primary/30 text-lg select-none ml-3">◆</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
