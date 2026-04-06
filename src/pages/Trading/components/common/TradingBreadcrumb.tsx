import { Link } from "react-router-dom";

import { tradingRoutes } from "@/pages/Trading/tradingRoutes";

type TradingBreadcrumbItem = {
  label: string;
  to?: string;
};

type TradingBreadcrumbProps = {
  items?: TradingBreadcrumbItem[];
};

export default function TradingBreadcrumb({ items = [] }: TradingBreadcrumbProps) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500">
      <Link to={tradingRoutes.home} className="hover:text-orange-500">
        Home
      </Link>
      {items.map((item, index) => (
        <div key={`${item.label}-${index}`} className="flex items-center gap-2">
          <span>/</span>
          {item.to ? (
            <Link to={item.to} className="hover:text-orange-500">
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-700">{item.label}</span>
          )}
        </div>
      ))}
    </div>
  );
}
