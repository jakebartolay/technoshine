import { Link } from "react-router-dom";

import { tradingRoutes } from "@/pages/Trading/tradingRoutes";

export default function TradingNotFound() {
  return (
    <section className="page-padding">
      <div className="container-shell">
        <div className="rounded-[2rem] bg-white p-10 text-center shadow-sm ring-1 ring-slate-200">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-500">
            Page Not Found
          </p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900">
            The trading page you requested is not available.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Try going back to the Trading homepage or browse our product collection instead.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to={tradingRoutes.home}
              className="rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Back to Trading Home
            </Link>
            <Link
              to={tradingRoutes.products}
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-500"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
