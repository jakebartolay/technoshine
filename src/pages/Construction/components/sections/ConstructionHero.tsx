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

      <ConstructionContainer className="relative grid min-h-[88vh] items-center gap-8 py-16 sm:gap-12 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-orange-400 sm:text-sm sm:tracking-[0.35em]">
            Residential / Commercial / Institutional
          </p>

          <h1 className="max-w-4xl text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl lg:text-7xl">
            Building.
            <br />
            Restoring.
            <br />
            Perfecting Spaces.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
            {constructionCompanyInfo.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <ConstructionButton to={constructionRoutes.projects}>
              View Projects
            </ConstructionButton>
            <ConstructionButton to={constructionRoutes.contact} variant="secondary">
              Contact Us
            </ConstructionButton>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:rounded-[2rem] sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white/5 p-4 sm:p-5">
              <p className="text-sm text-slate-400">Experience</p>
              <p className="mt-2 text-2xl font-black sm:text-3xl">30+ Years</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-4 sm:p-5">
              <p className="text-sm text-slate-400">Focus</p>
              <p className="mt-2 text-2xl font-black sm:text-3xl">Quality</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-4 sm:col-span-2 sm:p-5">
              <p className="text-sm text-slate-400">What we do</p>
              <p className="mt-2 text-lg font-bold leading-7 text-white sm:text-xl sm:leading-8">
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
