import ConstructionContainer from "@/pages/Construction/components/common/ConstructionContainer";
import ConstructionSectionTitle from "@/pages/Construction/components/common/ConstructionSectionTitle";
import { constructionServicesData } from "@/pages/Construction/data/constructionServicesData";

export default function ConstructionServicesPreview() {
  return (
    <section className="bg-slate-50 py-24">
      <ConstructionContainer>
        <ConstructionSectionTitle
          eyebrow="Services"
          title="Construction and finishing solutions designed for quality and long-term value."
          text="We deliver end-to-end solutions for construction, renovation, modular projects, and specialized finishing works."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {constructionServicesData.map((service) => (
            <div
              key={service.title}
              className="group h-full rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-orange-100 transition group-hover:bg-orange-500" />
              <h3 className="text-xl font-bold text-slate-950">{service.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </ConstructionContainer>
    </section>
  );
}
