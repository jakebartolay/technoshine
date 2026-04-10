import TradingButton from "@/pages/Trading/components/common/TradingButton";
import TradingReveal from "@/pages/Trading/components/common/TradingReveal";
import TradingSectionTitle from "@/pages/Trading/components/common/TradingSectionTitle";
import TradingProductCard from "@/pages/Trading/components/product/TradingProductCard";
import { tradingCases } from "@/pages/Trading/data/tradingCases";
import { tradingProducts } from "@/pages/Trading/data/tradingProducts";
import { tradingRoutes } from "@/pages/Trading/tradingRoutes";

export default function TradingLanding() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1600&q=80"
            alt="Industrial highway barrier"
            className="h-full w-full object-cover opacity-30"
          />
        </div>

        <div className="container-shell relative grid min-h-[82vh] items-center gap-10 py-16 sm:gap-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <TradingReveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-orange-300 sm:text-sm sm:tracking-[0.35em]">
              Trusted Industrial Protection
            </p>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              Modern steel barrier solutions built for demanding projects.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:mt-6 sm:text-base sm:leading-8">
              We deliver road safety systems, structural support components, and
              project-ready industrial products with dependable quality and strong technical
              service.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <TradingButton to={tradingRoutes.products} className="w-full justify-center sm:w-auto">
                Explore Products
              </TradingButton>
              <TradingButton
                to={tradingRoutes.contact}
                variant="outline"
                className="w-full justify-center border-white/30 bg-white/10 text-white hover:bg-white/20 sm:w-auto"
              >
                Request Quote
              </TradingButton>
            </div>
          </TradingReveal>

          <TradingReveal delay={0.15} y={70}>
            <div className="trading-float rounded-[1.5rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-md sm:rounded-[2rem] sm:p-5">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                alt="Featured industrial product"
                className="h-[280px] w-full rounded-[1.25rem] object-cover sm:h-[380px] sm:rounded-[1.5rem] lg:h-[460px]"
              />
            </div>
          </TradingReveal>
        </div>
      </section>

      <section className="page-padding">
        <div className="container-shell">
          <TradingSectionTitle
            eyebrow="Featured Products"
            title="Reliable systems for infrastructure and industrial use"
            text="Explore core product lines designed for durability, compatibility, and project performance."
            center
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {tradingProducts.map((product, index) => (
              <TradingProductCard
                key={product.slug}
                product={product}
                delay={index * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="page-padding bg-white">
        <div className="container-shell grid items-center gap-10 sm:gap-14 lg:grid-cols-2">
          <TradingReveal>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
              alt="Building material and construction site"
              className="h-[280px] w-full rounded-[1.5rem] object-cover shadow-lg sm:h-[400px] sm:rounded-[2rem] lg:h-[520px]"
            />
          </TradingReveal>

          <TradingReveal delay={0.1}>
            <TradingSectionTitle
              eyebrow="About Us"
              title="Built for supply consistency, product strength, and technical reliability"
              text="We help clients source industrial barrier systems and related components with quality-focused production and efficient project handling."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["10+", "Years of industry experience"],
                ["250+", "Projects supported"],
                ["30+", "Deployment areas served"],
                ["24/7", "Response and service support"],
              ].map(([value, label], index) => (
                <TradingReveal key={label} delay={0.15 + index * 0.08}>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                    <p className="text-2xl font-extrabold text-orange-500 sm:text-3xl">{value}</p>
                    <p className="mt-2 text-sm text-slate-600">{label}</p>
                  </div>
                </TradingReveal>
              ))}
            </div>
          </TradingReveal>
        </div>
      </section>

      <section className="page-padding">
        <div className="container-shell">
          <TradingSectionTitle
            eyebrow="Gallery"
            title="Projects backed by quality delivery and industrial performance"
            text="A sample of project environments where our product systems are applied."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {tradingCases.slice(0, 3).map((item, index) => (
              <TradingReveal key={item.title + item.location} delay={index * 0.1}>
                <article className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-72 w-full object-cover"
                  />
                  <div className="p-5 sm:p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-500 sm:text-xs sm:tracking-[0.25em]">
                      {item.location}
                    </p>
                    <h3 className="mt-3 text-lg font-bold sm:text-xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              </TradingReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
