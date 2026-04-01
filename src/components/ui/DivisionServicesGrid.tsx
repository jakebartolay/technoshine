import type { DivisionData } from "@/data/divisions";
import PageHeader from "@/components/ui/PageHeader";

type DivisionServicesGridProps = {
  division: DivisionData;
};

export default function DivisionServicesGrid({ division }: DivisionServicesGridProps) {
  return (
    <section className="bg-white pb-20 pt-32">
      <div className="mx-auto max-w-6xl px-6">
        <PageHeader
          eyebrow={`${division.name} ${division.detailsLabel}`}
          title={`How ${division.name} Supports Clients`}
          description={division.shortDescription}
          badgeClassName={division.theme.mutedBadge}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {division.services.map((service) => (
            <article
              key={service.title}
              className={`rounded-3xl border p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 ${division.theme.lightSurface} ${division.theme.lightBorder}`}
            >
              <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${division.theme.mutedBadge}`}>
                {division.name}
              </div>
              <h3 className="mt-5 text-2xl font-bold text-gray-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{service.description}</p>

              <ul className="mt-6 space-y-3">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className={`mt-1 h-2.5 w-2.5 rounded-full ${division.theme.solidBadge.split(" ")[0]}`} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
