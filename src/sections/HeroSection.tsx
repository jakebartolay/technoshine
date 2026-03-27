const DIVISIONS = ["Stone Care", "Trading", "Construction"];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gray-950 text-white">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/opengraph.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.28),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.22),transparent_28%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-orange-200 backdrop-blur-sm">
            Technoshine Philippines
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Building <span className="text-orange-400">Excellence</span>
            <br />
            Across Industries
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Technoshine delivers world-class solutions in stone care, trading, and construction, backed by
            dependable execution and a commitment to quality across the Philippines.
          </p>

          <div className="mb-12 flex flex-wrap gap-3">
            {DIVISIONS.map((division) => (
              <span
                key={division}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm"
              >
                {division}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-xl bg-orange-500 px-8 py-3.5 text-center font-semibold text-white shadow-lg shadow-orange-500/30 transition-colors hover:bg-orange-600"
            >
              Our Services
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-8 py-3.5 text-center font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              Get in Touch
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
