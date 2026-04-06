import ConstructionButton from "@/pages/Construction/components/common/ConstructionButton";
import ConstructionContainer from "@/pages/Construction/components/common/ConstructionContainer";
import { constructionRoutes } from "@/pages/Construction/constructionRoutes";

export default function ConstructionCTASection() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20 text-white">
      <ConstructionContainer className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-100">
            Build with confidence
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Let&apos;s turn your construction and finishing requirements into
            quality-built spaces.
          </h2>
        </div>
        <ConstructionButton to={constructionRoutes.contact} variant="dark">
          Request a Consultation
        </ConstructionButton>
      </ConstructionContainer>
    </section>
  );
}
