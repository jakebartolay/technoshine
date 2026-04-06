import { backgroundAssets } from "@/assets/siteAssets";
import { homeBrandIconMeta } from "@/pages/Home/homeBrandIcons";
import { scrollToHash } from "@/utils/scroll";

const divisions = [
  { key: "stonecare", label: "StoneCare" },
  { key: "trading", label: "Trading" },
  { key: "construction", label: "Construction" },
] as const;

export default function HeroSection() {
  const TechnoshineIcon = homeBrandIconMeta.technoshine.icon;

  return (
    <section id="home" data-scroll-offset="0" className="relative min-h-screen overflow-hidden bg-gray-950 text-white">
      <div className="absolute inset-0 hidden md:block">
        <img src={backgroundAssets.hero} alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.28),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.22),transparent_28%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">
        <div className="max-w-3xl">
          <div className="mb-6 hidden items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-orange-200 backdrop-blur-sm sm:inline-flex">
            <TechnoshineIcon className="h-4 w-4" />
            Technoshine
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Building <span className="text-orange-400">Excellence</span>
            <br />
            Across Industries
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Technoshine delivers world-class solutions in stone care, trading, and construction, backed by dependable execution and a commitment to quality across the Philippines.
          </p>

          <div className="mb-12 flex flex-wrap gap-3">
            {divisions.map((division) => (
              <span
                key={division.key}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  {(() => {
                    const DivisionIcon = homeBrandIconMeta[division.key].icon;

                    return <DivisionIcon className="h-4 w-4 text-orange-300" />;
                  })()}
                  {division.label}
                </span>
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => scrollToHash("services")}
              className="rounded-xl bg-orange-500 px-8 py-3.5 text-center font-semibold text-white shadow-lg shadow-orange-500/30 transition-colors hover:bg-orange-600"
            >
              Our Services
            </button>
            <button
              onClick={() => scrollToHash("contact")}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-8 py-3.5 text-center font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              Get in Touch
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToHash("about")}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce text-orange-300 transition-colors hover:text-orange-200"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
}
