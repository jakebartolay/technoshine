type TradingSectionTitleProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
};

export default function TradingSectionTitle({
  eyebrow = "",
  title,
  text = "",
  center = false,
}: TradingSectionTitleProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-orange-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-slate-600">{text}</p> : null}
    </div>
  );
}
