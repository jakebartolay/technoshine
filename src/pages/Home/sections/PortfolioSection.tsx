import { useEffect, useState } from "react";

import {
  getPublishedHomePortfolioProjects,
  subscribeToAdminWorkspaceSync,
  type HomePortfolioProject,
} from "@/admin/adminPersistence";
import PageHeader from "@/components/ui/PageHeader";

type ProjectModalProps = {
  project: HomePortfolioProject;
  onClose: () => void;
};

function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative h-64 overflow-hidden">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute left-4 top-4">
            <span className={`rounded-full px-3 py-1 text-xs font-bold ${project.categorySolidClass}`}>
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/70"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-5 right-5">
            <h3 className="text-xl font-bold leading-snug text-white">{project.title}</h3>
            <p className="mt-0.5 text-sm text-white/70">{project.year}</p>
          </div>
        </div>

        <div className="p-6">
          <p className="mb-6 leading-relaxed text-gray-600">{project.description}</p>

          <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-900">Project Highlights</h4>
          <div className="flex flex-wrap gap-2">
            {project.highlights.map((highlight) => (
              <span
                key={highlight}
                className="inline-flex items-center gap-1.5 rounded-full border border-orange-100 bg-orange-50 px-3 py-1.5 text-sm font-medium text-orange-700"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                {highlight}
              </span>
            ))}
          </div>

          <button
            onClick={onClose}
            className="mt-6 w-full rounded-xl bg-orange-500 py-2.5 font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const [projects, setProjects] = useState<HomePortfolioProject[]>(() => getPublishedHomePortfolioProjects());
  const [selectedProject, setSelectedProject] = useState<HomePortfolioProject | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const syncProjects = () => setProjects(getPublishedHomePortfolioProjects());

    syncProjects();
    return subscribeToAdminWorkspaceSync(syncProjects);
  }, []);

  useEffect(() => {
    const availableFilters = new Set(["All", ...projects.map((project) => project.category)]);

    if (!availableFilters.has(activeFilter)) {
      setActiveFilter("All");
    }
  }, [activeFilter, projects]);

  const portfolioFilters = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" data-scroll-offset="0" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <PageHeader
          eyebrow="Portfolio"
          title="Our Work"
          description="Click any project to see more details and photos."
        />

        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {portfolioFilters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setSelectedProject(null);
                }}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-orange-500 text-white"
                    : "bg-orange-50 text-orange-700 hover:bg-orange-100"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <button
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden rounded-2xl text-left focus:outline-none focus:ring-2 focus:ring-orange-400"
              style={{ height: 280 }}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="media-stable absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-orange-500/0 transition-colors duration-300 group-hover:bg-orange-500/30" />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className={`mb-2 inline-block rounded-full px-2.5 py-1 text-xs font-bold ${project.categoryBadgeClass}`}>
                  {project.category}
                </span>
                <h3 className="text-base font-bold leading-snug text-white">{project.title}</h3>
                <p className="mt-0.5 text-xs text-white/60">{project.year}</p>
              </div>

              <div className="absolute right-4 top-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-orange-600 shadow">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Details
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProject ? (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      ) : null}
    </section>
  );
}
