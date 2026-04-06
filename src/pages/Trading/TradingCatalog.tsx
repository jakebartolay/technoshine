import TradingPageBanner from "@/pages/Trading/components/common/TradingPageBanner";
import TradingReveal from "@/pages/Trading/components/common/TradingReveal";
import TradingSectionTitle from "@/pages/Trading/components/common/TradingSectionTitle";
import { tradingCases } from "@/pages/Trading/data/tradingCases";

export default function TradingCatalog() {
  return (
    <>
      <TradingPageBanner
        title="Our Gallery"
        subtitle="Showcasing completed installations of Solar Road Studs and Steel Roller Guardrails across different project locations."
        image="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="page-padding">
        <div className="container-shell">
          <TradingSectionTitle
            eyebrow="Project Applications"
            title="Completed road safety installations in different locations"
            text="These featured projects highlight our actual deployments of Solar Road Studs and Steel Roller Guardrails for safer and more visible road environments."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {tradingCases.map((item, index) => (
              <TradingReveal key={item.title + item.location} delay={index * 0.08}>
                <article className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-72 w-full object-cover"
                  />
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.28em] text-orange-500">
                      {item.location}
                    </p>
                    <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                    <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
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
