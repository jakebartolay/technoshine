import TradingPageBanner from "@/pages/Trading/components/common/TradingPageBanner";
import TradingReveal from "@/pages/Trading/components/common/TradingReveal";
import TradingSectionTitle from "@/pages/Trading/components/common/TradingSectionTitle";
import { tradingBrandAssets } from "@/pages/Trading/tradingAssets";

export default function TradingAbout() {
  return (
    <>
      <TradingPageBanner
        title="About Our Company"
        subtitle="We provide industrial barrier systems and product support built on reliability, technical service, and project readiness."
        image="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="page-padding bg-white">
        <div className="container-shell grid items-center gap-10 sm:gap-14 lg:grid-cols-2">
          <TradingReveal>
            <TradingSectionTitle
              eyebrow="Who We Are"
              title="Technoshine Trading International"
              text="A pioneering company in the field of road safety solutions, committed to delivering innovative and sustainable products to enhance safety on our roadways."
            />

            <p className="mt-6 leading-8 text-slate-600">
              As a dedicated and forward-thinking company, we take pride in introducing
              cutting-edge technologies aimed at transforming the landscape of road safety.
              At the heart of our innovation lies the commitment to creating safer roadways
              for everyone. At Technoshine, we believe in the power of innovation to address
              the pressing challenges of road safety.
            </p>
          </TradingReveal>

          <TradingReveal delay={0.1}>
            <img
              src={tradingBrandAssets.about}
              alt="Technoshine Trading International"
              className="h-[280px] w-full rounded-[1.5rem] object-cover shadow-lg sm:h-[400px] sm:rounded-[2rem] lg:h-[500px]"
            />
          </TradingReveal>
        </div>
      </section>

      <section className="page-padding">
        <div className="container-shell grid items-stretch gap-6 md:grid-cols-3">
          {[
            ["Mission", "To revolutionize the way we approach and enhance safety on our roads."],
            [
              "Vision",
              "To contribute to a brighter and sustainable future through innovative solutions.",
            ],
            [
              "Value",
              "We are committed to innovation, safety, sustainability, and excellence in road solutions.",
            ],
          ].map(([title, text], index) => (
            <TradingReveal key={title} delay={index * 0.08}>
              <div className="flex h-full flex-col rounded-[2rem] bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
                <h3 className="mb-4 text-xl font-bold sm:text-2xl">{title}</h3>
                <p className="flex-grow leading-7 text-slate-600">{text}</p>
              </div>
            </TradingReveal>
          ))}
        </div>
      </section>
    </>
  );
}
