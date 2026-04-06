import ConstructionContainer from "@/pages/Construction/components/common/ConstructionContainer";
import ConstructionSectionTitle from "@/pages/Construction/components/common/ConstructionSectionTitle";
import ConstructionPageBanner from "@/pages/Construction/components/layout/ConstructionPageBanner";
import { constructionAssets } from "@/pages/Construction/constructionAssets";
import { constructionCompanyInfo } from "@/pages/Construction/data/constructionCompanyInfo";

export default function ConstructionAbout() {
  return (
    <>
      <ConstructionPageBanner
        title="About Technoshine Construction"
        subtitle="A trusted construction and finishing partner built on experience, quality, and premium workmanship."
        image={constructionAssets.hero}
      />

      <section className="bg-white py-24">
        <ConstructionContainer className="grid gap-12 lg:grid-cols-2">
          <div>
            <ConstructionSectionTitle
              eyebrow="Our Story"
              title="More than three decades of expertise."
              text={constructionCompanyInfo.story}
            />
          </div>
          <div className="space-y-6 text-base leading-8 text-slate-600">
            <p>{constructionCompanyInfo.vision}</p>
            <p>{constructionCompanyInfo.goal}</p>
            {constructionCompanyInfo.mission.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </ConstructionContainer>
      </section>

      <section className="bg-slate-50 py-24">
        <ConstructionContainer>
          <ConstructionSectionTitle
            eyebrow="Core Values"
            title="The values that shape every project we deliver."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {constructionCompanyInfo.coreValues.map((value) => (
              <div
                key={value.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-950">{value.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </ConstructionContainer>
      </section>
    </>
  );
}
