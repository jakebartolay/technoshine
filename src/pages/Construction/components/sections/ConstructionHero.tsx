import ConstructionButton from "@/pages/Construction/components/common/ConstructionButton";
import ConstructionContainer from "@/pages/Construction/components/common/ConstructionContainer";
import { constructionAssets } from "@/pages/Construction/constructionAssets";
import { constructionCompanyInfo } from "@/pages/Construction/data/constructionCompanyInfo";
import { constructionRoutes } from "@/pages/Construction/constructionRoutes";

export default function ConstructionHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${constructionAssets.hero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />

      <ConstructionContainer className="relative grid min-h-[88vh] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-orange-400">
            Residential / Commercial / Institutional
          </p>

          <h1 className="max-w-4xl text-5xl font-black uppercase leading-none tracking-tight sm:text-6xl lg:text-7xl">
            Building.
            <br />
            Restoring.
            <br />
            Perfecting Spaces.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {constructionCompanyInfo.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <ConstructionButton to={constructionRoutes.projects}>
              View Projects
            </ConstructionButton>
            <ConstructionButton to={constructionRoutes.contact} variant="secondary">
              Contact Us
            </ConstructionButton>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white/5 p-5">
              <p className="text-sm text-slate-400">Experience</p>
              <p className="mt-2 text-3xl font-black">30+ Years</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-5">
              <p className="text-sm text-slate-400">Focus</p>
              <p className="mt-2 text-3xl font-black">Quality</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-5 sm:col-span-2">
              <p className="text-sm text-slate-400">What we do</p>
              <p className="mt-2 text-xl font-bold leading-8 text-white">
                Construction, renovation, fit-out, prefabrication, and premium stone
                finishing.
              </p>
            </div>
          </div>
        </div>
      </ConstructionContainer>
    </section>
  );
}
