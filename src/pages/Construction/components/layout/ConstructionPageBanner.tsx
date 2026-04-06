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
      className="relative overflow-hidden bg-slate-950 py-28 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(2,6,23,0.78), rgba(2,6,23,0.78)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ConstructionContainer>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            Technoshine Construction
          </p>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-200">{subtitle}</p>
        </div>
      </ConstructionContainer>
    </section>
  );
}
