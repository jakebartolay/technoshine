import ConstructionButton from "@/pages/Construction/components/common/ConstructionButton";
import ConstructionContainer from "@/pages/Construction/components/common/ConstructionContainer";
import ConstructionSectionTitle from "@/pages/Construction/components/common/ConstructionSectionTitle";
import { constructionProjects } from "@/pages/Construction/data/constructionProjects";
import { constructionRoutes } from "@/pages/Construction/constructionRoutes";

export default function ConstructionFeaturedProjects() {
  const featured = constructionProjects.slice(0, 6);

  return (
    <section className="bg-white py-24">
      <ConstructionContainer>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <ConstructionSectionTitle
            eyebrow="Featured Projects"
            title="From renovation to modular construction, our work reflects precision and craftsmanship."
          />
          <ConstructionButton to={constructionRoutes.projects} variant="dark">
            See All Projects
          </ConstructionButton>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
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
  );
}
