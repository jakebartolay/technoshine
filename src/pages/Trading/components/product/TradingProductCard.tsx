import { Link } from "react-router-dom";

import TradingReveal from "@/pages/Trading/components/common/TradingReveal";
import { tradingRoutes } from "@/pages/Trading/tradingRoutes";
import type { TradingProduct } from "@/pages/Trading/types";

type TradingProductCardProps = {
  product: TradingProduct;
  delay?: number;
};

export default function TradingProductCard({
  product,
  delay = 0,
}: TradingProductCardProps) {
  return (
    <TradingReveal delay={delay} className="h-full">
      <article className="group h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
        <div className="overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
            {product.category}
          </p>
          <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>
          <Link
            to={tradingRoutes.product(product.slug)}
            className="mt-6 inline-flex text-sm font-semibold text-slate-950 transition hover:text-orange-500"
          >
            View Details
          </Link>
        </div>
      </article>
    </TradingReveal>
  );
}
