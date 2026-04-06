import ConstructionContainer from "@/pages/Construction/components/common/ConstructionContainer";
import ConstructionSectionTitle from "@/pages/Construction/components/common/ConstructionSectionTitle";
import { constructionClients } from "@/pages/Construction/data/constructionClients";

export default function ConstructionClientsSection() {
  return (
    <section className="bg-slate-50 py-24">
      <ConstructionContainer>
        <ConstructionSectionTitle
          eyebrow="Trusted By"
          title="A track record built on dependable delivery and trusted client relationships."
          text="Technoshine has served high-end hotels, commercial properties, developers, and institutional clients."
          center
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {constructionClients.map((client) => (
            <div
              key={client}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-6 text-center text-sm font-semibold text-slate-700 shadow-sm"
            >
              {client}
            </div>
          ))}
        </div>
      </ConstructionContainer>
    </section>
  );
}
