import ConstructionContainer from "@/pages/Construction/components/common/ConstructionContainer";
import ConstructionSectionTitle from "@/pages/Construction/components/common/ConstructionSectionTitle";
import ConstructionPageBanner from "@/pages/Construction/components/layout/ConstructionPageBanner";
import { constructionAssets } from "@/pages/Construction/constructionAssets";
import { constructionProjects } from "@/pages/Construction/data/constructionProjects";

export default function ConstructionProjects() {
  return (
    <>
      <ConstructionPageBanner
        title="Construction and Finishing Projects"
        subtitle="A showcase of renovation, modular construction, restoration, and finishing works delivered by Technoshine."
        image={constructionAssets.construct2}
      />

      <section className="bg-white py-24">
        <ConstructionContainer>
          <ConstructionSectionTitle
            eyebrow="Project Portfolio"
            title="Selected works across construction, fit-out, restoration, and prefabrication."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {constructionProjects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-slate-950">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">Scope: {project.scope}</p>
                </div>
              </article>
            ))}
          </div>
        </ConstructionContainer>
      </section>
    </>
  );
}
