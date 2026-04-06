import { Link } from "react-router-dom";

import { tradingRoutes } from "@/pages/Trading/tradingRoutes";
import type { TradingProduct } from "@/pages/Trading/types";

type TradingProductSidebarProps = {
  products: TradingProduct[];
  currentSlug: string;
};

export default function TradingProductSidebar({
  products,
  currentSlug,
}: TradingProductSidebarProps) {
  return (
    <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-slate-900">Our Products</h3>
      <div className="mt-5 flex flex-col gap-3">
        {products.map((item) => (
          <Link
            key={item.slug}
            to={tradingRoutes.product(item.slug)}
            className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
              currentSlug === item.slug
                ? "bg-orange-500 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </aside>
  );
}
