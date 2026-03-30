import { useState } from "react";

const services = [
  {
    title: "StoneCare",
    href: "https://stonecare.technoshineph.com",
    img: "images/stonecare.png",
    description: "Premium stone care, restoration, and maintenance for residential and commercial properties.",
    features: ["Surface Restoration", "Stone Polishing", "Sealing & Protection", "Maintenance Plans"],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Trading",
    href: "https://trading.technoshineph.com/index.php",
    img: "images/trading.png",
    description: "Strategic trading solutions with competitive sourcing, supply chain management, and distribution.",
    features: ["Product Sourcing", "Supply Chain", "Distribution", "Import & Export"],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Construction",
    href: "https://construction.technoshineph.com",
    img: "images/construction.png",
    description: "End-to-end construction services from planning and design to execution and project management.",
    features: ["Residential Build", "Commercial Projects", "Renovation", "Project Management"],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="services" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-orange-50 py-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Three specialized divisions, each delivering exceptional results for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <a
                key={service.title}
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative block rounded-2xl overflow-hidden shadow-md cursor-pointer"
                style={{ height: 420 }}
              >
                {/* Background image */}
                <img
                  src={service.img}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                  style={{ transform: isHovered ? "scale(1.08)" : "scale(1)" }}
                />

                {/* Default dark gradient overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-400"
                  style={{ opacity: isHovered ? 0 : 1 }}
                />

                {/* Default bottom label */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-400"
                  style={{ opacity: isHovered ? 0 : 1, transform: isHovered ? "translateY(8px)" : "translateY(0)" }}
                >
                  <h3 className="text-white text-2xl font-bold">{service.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{service.description}</p>
                </div>

                {/* Hover: orange overlay */}
                <div
                  className="absolute inset-0 bg-orange-500/90 transition-opacity duration-400 flex flex-col items-center justify-center gap-4 px-8 text-center"
                  style={{ opacity: isHovered ? 1 : 0 }}
                >
                  {/* Icon */}
                  <div className="text-white drop-shadow-lg">
                    {service.icon}
                  </div>

                  {/* Service name */}
                  <h3 className="text-white text-3xl font-bold tracking-tight">{service.title}</h3>

                  {/* Description */}
                  <p className="text-white/90 text-sm leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <ul className="flex flex-wrap justify-center gap-2 mt-1">
                    {service.features.map((f) => (
                      <li key={f} className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-2 inline-flex items-center gap-2 bg-white text-orange-600 font-bold text-sm px-5 py-2.5 rounded-full shadow-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Visit {service.title}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
