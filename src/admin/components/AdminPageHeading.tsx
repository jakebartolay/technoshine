import type { ReactNode } from "react";

type AdminPageHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

export default function AdminPageHeading({
  eyebrow,
  title,
  description,
  aside,
}: AdminPageHeadingProps) {
  return (
    <div className="admin-page-heading">
      <div>
        <p className="admin-overline text-slate-500">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {aside ? <div className="hidden lg:block">{aside}</div> : null}
    </div>
  );
}
