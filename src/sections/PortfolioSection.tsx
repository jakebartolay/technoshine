import { useState, useEffect } from "react";

type Project = {
  title: string;
  category: string;
  year: string;
  img: string;
  description: string;
  highlights: string[];
};

const projects: Project[] = [
  {
    title: "Marble Restoration — BGC Condo",
    category: "StoneCare",
    year: "2024",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
    description: "Full marble floor and wall restoration for a luxury condominium unit in Bonifacio Global City. The surfaces were polished, resealed, and protected for long-term durability.",
    highlights: ["Surface Polishing", "Deep Cleaning", "Sealing & Protection", "Crack Repair"],
  },
  {
    title: "Commercial Tile Sealing — Mall of Asia",
    category: "StoneCare",
    year: "2024",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    description: "Large-scale commercial tile sealing project for a major retail complex at SM Mall of Asia. Covered over 3,000 sqm of high-traffic flooring.",
    highlights: ["3,000 sqm Coverage", "Anti-Slip Treatment", "Commercial Grade Sealant", "Weekend Completion"],
  },
  {
    title: "Import Distribution — Makati",
    category: "Trading",
    year: "2023",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80",
    description: "End-to-end import and distribution management for a Makati-based retail chain. Coordinated sourcing, customs clearance, and last-mile delivery.",
    highlights: ["Customs Clearance", "Last-Mile Delivery", "Inventory Management", "Multi-SKU Handling"],
  },
  {
    title: "Wholesale Supply — Cebu Hub",
    category: "Trading",
    year: "2023",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80",
    description: "Wholesale supply operations for a regional distribution hub in Cebu, managing bulk orders and ensuring consistent product availability across Visayas.",
    highlights: ["Bulk Order Fulfillment", "Regional Distribution", "Supply Chain Ops", "Quality Assurance"],
  },
  {
    title: "Residential Complex — Cavite",
    category: "Construction",
    year: "2024",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80",
    description: "Full construction of a 12-unit residential complex in General Trias, Cavite. Delivered on time with complete structural, electrical, and finishing works.",
    highlights: ["12 Residential Units", "Structural Build", "Electrical & Plumbing", "On-Time Delivery"],
  },
  {
    title: "Office Build-Out — Ortigas",
    category: "Construction",
    year: "2022",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    description: "Complete office fit-out and renovation for a corporate client in Ortigas Center. The project covered layout design, partitioning, flooring, and MEP works.",
    highlights: ["Floor Planning", "Glass Partitions", "MEP Works", "Interior Finishing"],
  },
];

const categoryColor: Record<string, string> = {
  StoneCare: "bg-orange-100 text-orange-700",
  Trading: "bg-amber-100 text-amber-700",
  Construction: "bg-yellow-100 text-yellow-700",
};

const categoryBadge: Record<string, string> = {
  StoneCare: "bg-orange-500",
  Trading: "bg-amber-500",
  Construction: "bg-yellow-500",
};

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal card */}
      <div
        className="relative z-10 bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className={`text-white text-xs font-bold px-3 py-1 rounded-full ${categoryBadge[project.category]}`}>
              {project.category}
            </span>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Title over image */}
          <div className="absolute bottom-4 left-5 right-5">
            <h3 className="text-white text-xl font-bold leading-snug">{project.title}</h3>
            <p className="text-white/70 text-sm mt-0.5">{project.year}</p>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-widest mb-3">Project Highlights</h4>
          <div className="flex flex-wrap gap-2">
            {project.highlights.map((h) => (
              <span key={h} className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 text-sm font-medium px-3 py-1.5 rounded-full border border-orange-100">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                {h}
              </span>
            ))}
          </div>

          <button
            onClick={onClose}
            className="mt-6 w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="min-h-screen flex items-center bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click any project to see more details and photos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <button
              key={i}
              onClick={() => setSelected(project)}
              className="group relative overflow-hidden rounded-2xl text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400"
              style={{ height: 280 }}
            >
              {/* Background image */}
              <img
                src={project.img}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Hover orange overlay */}
              <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/30 transition-colors duration-300" />

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColor[project.category]} mb-2 inline-block`}>
                  {project.category}
                </span>
                <h3 className="text-white font-bold text-base leading-snug">{project.title}</h3>
                <p className="text-white/60 text-xs mt-0.5">{project.year}</p>
              </div>

              {/* Hover "View Details" pill */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white text-orange-600 text-xs font-bold px-3 py-1.5 rounded-full shadow flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Details
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
