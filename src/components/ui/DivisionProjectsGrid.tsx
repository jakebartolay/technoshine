import type { DivisionData } from "@/data/divisions";
import PageHeader from "@/components/ui/PageHeader";

type DivisionProjectsGridProps = {
  division: DivisionData;
};

export default function DivisionProjectsGrid({ division }: DivisionProjectsGridProps) {
  return (
    <section className="bg-gray-50 pb-20 pt-32">
      <div className="mx-auto max-w-6xl px-6">
        <PageHeader
          eyebrow={`${division.name} ${division.showcaseLabel}`}
          title={`Featured ${division.showcaseLabel}`}
          description={`A closer look at selected ${division.name.toLowerCase()} work and deliverables.`}
          badgeClassName={division.theme.mutedBadge}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {division.showcaseItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-3xl bg-white shadow-lg shadow-black/5"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="media-stable h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute left-5 top-5">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${division.theme.solidBadge}`}>
                    {item.year}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className={`rounded-full border px-3 py-1.5 text-sm font-medium ${division.theme.lightSurface} ${division.theme.lightBorder} ${division.theme.lightText}`}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
