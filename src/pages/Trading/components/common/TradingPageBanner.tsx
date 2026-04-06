import TradingReveal from "@/pages/Trading/components/common/TradingReveal";

type TradingPageBannerProps = {
  title: string;
  subtitle: string;
  image: string;
};

export default function TradingPageBanner({
  title,
  subtitle,
  image,
}: TradingPageBannerProps) {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(2,6,23,.68), rgba(2,6,23,.68)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-shell py-28 text-white">
        <TradingReveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-orange-300">
            Industrial Solutions
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-sm text-slate-200 md:text-base">{subtitle}</p>
        </TradingReveal>
      </div>
    </section>
  );
}
