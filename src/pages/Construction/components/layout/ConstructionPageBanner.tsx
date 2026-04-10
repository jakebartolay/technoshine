import ConstructionContainer from "@/pages/Construction/components/common/ConstructionContainer";

type ConstructionPageBannerProps = {
  title: string;
  subtitle: string;
  image: string;
};

export default function ConstructionPageBanner({
  title,
  subtitle,
  image,
}: ConstructionPageBannerProps) {
  return (
    <section
      className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28"
      style={{
        backgroundImage: `linear-gradient(rgba(2,6,23,0.78), rgba(2,6,23,0.78)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ConstructionContainer>
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-orange-400 sm:text-sm sm:tracking-[0.3em]">
            Technoshine Construction
          </p>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
          <p className="mt-4 text-base leading-7 text-slate-200 sm:mt-5 sm:text-lg sm:leading-8">{subtitle}</p>
        </div>
      </ConstructionContainer>
    </section>
  );
}
