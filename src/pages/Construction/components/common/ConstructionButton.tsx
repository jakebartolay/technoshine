import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ConstructionButtonProps = {
  to?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
};

export default function ConstructionButton({
  to,
  children,
  variant = "primary",
}: ConstructionButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300";
  const styles = {
    primary: "bg-orange-500 text-white hover:bg-orange-600",
    secondary: "border border-white/30 bg-white/10 text-white hover:bg-white/20",
    dark: "bg-slate-950 text-white hover:bg-slate-800",
  } as const;

  if (!to) {
    return null;
  }

  return (
    <Link to={to} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  );
}
