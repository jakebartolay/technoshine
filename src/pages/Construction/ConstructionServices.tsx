import ConstructionContainer from "@/pages/Construction/components/common/ConstructionContainer";
import ConstructionSectionTitle from "@/pages/Construction/components/common/ConstructionSectionTitle";
import ConstructionPageBanner from "@/pages/Construction/components/layout/ConstructionPageBanner";
import { constructionAssets } from "@/pages/Construction/constructionAssets";
import { constructionCompanyInfo } from "@/pages/Construction/data/constructionCompanyInfo";
import { constructionServicesData } from "@/pages/Construction/data/constructionServicesData";

export default function ConstructionServices() {
  return (
    <>
      <ConstructionPageBanner
        title="Our Services"
        subtitle="Comprehensive construction, renovation, and finishing solutions executed with quality and professionalism."
        image={constructionAssets.construct1}
      />

      <section className="bg-white py-24">
        <ConstructionContainer>
          <ConstructionSectionTitle
            eyebrow="What We Offer"
            title="Solutions tailored for commercial, residential, and institutional spaces."
            text="From project consultation to turnover and after-sales support, Technoshine delivers dependable end-to-end service."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {constructionServicesData.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7"
              >
                <h3 className="text-xl font-bold text-slate-950">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </ConstructionContainer>
      </section>

      <section className="bg-slate-950 py-24 text-white">
        <ConstructionContainer>
          <ConstructionSectionTitle
            eyebrow="Construction Process"
            title="A clear workflow that keeps quality and client satisfaction at the center."
            text={constructionCompanyInfo.qualityPolicyTitle}
            titleClassName="text-white"
            textClassName="text-slate-300"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {constructionCompanyInfo.process.map((step, index) => (
              <div
                key={step}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
                  Step {index + 1}
                </p>
                <p className="mt-4 text-lg font-bold leading-8 text-white">{step}</p>
              </div>
            ))}
          </div>
        </ConstructionContainer>
      </section>
    </>
  );
}
