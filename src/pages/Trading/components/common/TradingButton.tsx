import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type TradingButtonProps = {
  children: ReactNode;
  to?: string;
  variant?: "primary" | "outline";
  className?: string;
};

export default function TradingButton({
  children,
  to,
  variant = "primary",
  className = "",
}: TradingButtonProps) {
  const styles =
    variant === "outline"
      ? "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
      : "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20";

  if (!to) {
    return null;
  }

  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
