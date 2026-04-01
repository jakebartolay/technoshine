type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  badgeClassName?: string;
  className?: string;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  align = "center",
  badgeClassName = "bg-orange-100 text-orange-700",
  className = "",
}: PageHeaderProps) {
  const alignmentClass = align === "left" ? "text-left" : "text-center";
  const descriptionWidthClass = align === "left" ? "max-w-3xl" : "max-w-2xl mx-auto";

  return (
    <div className={`${alignmentClass} mb-16 ${className}`.trim()}>
      <div
        className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium ${badgeClassName}`}
      >
        {eyebrow}
      </div>
      <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">{title}</h2>
      <p className={`mt-4 text-lg text-gray-600 ${descriptionWidthClass}`}>{description}</p>
    </div>
  );
}
