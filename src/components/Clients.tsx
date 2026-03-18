import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const clients = [
  { name: "Shangri-La Manila",          icon: "hotel-icon-1.png" },
  { name: "The Peninsula Manila",        icon: "hotel-icon-2.png" },
  { name: "Sofitel Philippine Plaza",    icon: "hotel-icon-6.png" },
  { name: "Manila Hotel",               icon: "hotel-icon-3.png" },
  { name: "Marriott Hotel Manila",      icon: "hotel-icon-5.png" },
  { name: "Conrad Manila",             icon: "hotel-icon-2.png" },
  { name: "Okada Manila",              icon: "hotel-icon-4.png" },
  { name: "Solaire Resort & Casino",   icon: "hotel-icon-4.png" },
  { name: "City of Dreams Manila",     icon: "hotel-icon-4.png" },
  { name: "Raffles Makati",            icon: "hotel-icon-2.png" },
  { name: "Fairmont Makati",           icon: "hotel-icon-1.png" },
  { name: "Hilton Manila",             icon: "hotel-icon-5.png" },
  { name: "InterContinental Manila",   icon: "hotel-icon-5.png" },
  { name: "Diamond Hotel Philippines", icon: "hotel-icon-6.png" },
  { name: "Hyatt Regency Manila",      icon: "hotel-icon-1.png" },
  { name: "New World Makati Hotel",    icon: "hotel-icon-3.png" },
  { name: "Dusit Thani Manila",        icon: "hotel-icon-3.png" },
  { name: "Crimson Hotel Filinvest",   icon: "hotel-icon-6.png" },
];

const doubled = [...clients, ...clients];

export function Clients() {
  const base = import.meta.env.BASE_URL;

  return (
    <section id="clients" className="py-16 bg-foreground overflow-hidden relative">
      <div className="absolute inset-0 tech-pattern opacity-[0.04]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 relative z-10">
        <div className="flex items-center justify-center gap-3">
          <div className="h-px flex-1 bg-white/10" />
          <div className="flex items-center gap-2 text-white/50 font-mono text-xs uppercase tracking-[0.25em]">
            <Building2 className="w-4 h-4 text-primary" />
            Trusted by Philippine Hotels
          </div>
          <div className="h-px flex-1 bg-white/10" />
        </div>
      </div>

      {/* Scrolling marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-foreground to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-foreground to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-0 whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {doubled.map(({ name, icon }, i) => (
            <div key={i} className="inline-flex items-center gap-4 px-7 group cursor-default">
              {/* Hotel image icon */}
              <div className="w-10 h-10 shrink-0 overflow-hidden border border-white/10 group-hover:border-primary transition-colors duration-300">
                <img
                  src={`${base}images/${icon}`}
                  alt={name}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Hotel name */}
              <span className="text-white/75 font-display uppercase tracking-widest text-sm group-hover:text-primary transition-colors duration-300">
                {name}
              </span>

              {/* Divider */}
              <span className="text-primary/30 text-lg select-none ml-3">◆</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
