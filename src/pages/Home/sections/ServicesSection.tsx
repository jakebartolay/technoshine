import { Link } from "react-router-dom";

import PageHeader from "@/components/ui/PageHeader";
import { divisionList } from "@/data/divisions";

export default function ServicesSection() {
  return (
    <section id="services" data-scroll-offset="0" className="bg-gradient-to-br from-gray-50 to-orange-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <PageHeader
          eyebrow="Our Services"
          title="What We Offer"
          description="Three specialized divisions, each delivering exceptional results for our clients."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {divisionList.map((division) => (
            <Link
              key={division.name}
              to={division.route}
              className="group relative block overflow-hidden rounded-2xl shadow-md"
              style={{ height: 420 }}
            >
              <img
                src={division.image}
                alt={division.name}
                loading="lazy"
                decoding="async"
                className="media-stable absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

              <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-0">
                <h3 className="text-2xl font-bold text-white">{division.name}</h3>
                <p className="mt-1 text-sm text-white/70">{division.shortDescription}</p>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-orange-500/90 px-8 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-white">
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 7l8-4 8 4m-8-4v18m8-14l-8 4-8-4m16 0v10l-8 4-8-4V7"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-white">{division.name}</h3>
                <p className="text-sm leading-relaxed text-white/90">{division.shortDescription}</p>
                <ul className="mt-1 flex flex-wrap justify-center gap-2">
                  {division.features.map((feature) => (
                    <li key={feature} className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-orange-600 shadow-lg">
                  Visit {division.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
