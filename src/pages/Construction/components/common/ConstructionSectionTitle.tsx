import type { ReactNode } from "react";

type ConstructionSectionTitleProps = {
  eyebrow?: string;
  title: ReactNode;
  text?: string;
  center?: boolean;
  titleClassName?: string;
  textClassName?: string;
};

export default function ConstructionSectionTitle({
  eyebrow,
  title,
  text,
  center = false,
  titleClassName = "text-slate-950",
  textClassName = "text-slate-600",
}: ConstructionSectionTitleProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-3xl font-black tracking-tight sm:text-4xl ${titleClassName}`.trim()}>
        {title}
      </h2>
      {text ? (
        <p className={`mt-4 text-base leading-8 ${textClassName}`.trim()}>{text}</p>
      ) : null}
    </div>
  );
}
