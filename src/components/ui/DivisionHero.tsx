import { Link } from "react-router-dom";

import type { DivisionData } from "@/data/divisions";

type DivisionHeroProps = {
  division: DivisionData;
};

export default function DivisionHero({ division }: DivisionHeroProps) {
  return (
    <section className="relative h-[100svh] overflow-hidden bg-gray-950 text-white">
      <div className="absolute inset-0">
        <img src={division.image} alt={division.name} className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.28),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.22),transparent_28%)]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-start px-6 pb-10 pt-24 md:items-center md:pb-0 md:pt-20">
        <div className="max-w-3xl">
          <div className="mb-6 hidden items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-orange-200 backdrop-blur-sm sm:inline-flex">
            Technoshine
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            {division.tagline}
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            {division.heroDescription}
          </p>

          <div className="mb-12 flex flex-wrap gap-3">
            {division.features.map((feature) => (
              <span
                key={feature}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm"
              >
                {feature}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to={division.detailsRoute}
              className={`rounded-xl px-8 py-3.5 text-center font-semibold text-white shadow-lg transition-colors ${division.theme.button}`}
            >
              View {division.detailsLabel}
            </Link>
            <Link
              to={division.showcaseRoute}
              className="rounded-xl border border-white/25 bg-white/10 px-8 py-3.5 text-center font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              Explore {division.showcaseLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
