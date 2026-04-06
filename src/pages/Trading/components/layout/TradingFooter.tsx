import { Link } from "react-router-dom";

import { companyInfo } from "@/data/company";
import { tradingProducts } from "@/pages/Trading/data/tradingProducts";
import { tradingBrandAssets } from "@/pages/Trading/tradingAssets";
import { technoshineHomeUrl, tradingNavLinks, tradingRoutes } from "@/pages/Trading/tradingRoutes";
import { appRoutes } from "@/utils/routes";

const otherServices = [
  {
    label: "Technoshine Main Page",
    to: appRoutes.home,
    description: "Return to the main corporate homepage.",
  },
  {
    label: "Stonecare",
    to: appRoutes.stonecare,
    description: "Surface care, restoration, and maintenance solutions.",
  },
  {
    label: "Construction",
    to: appRoutes.construction,
    description: "Planning, building, and project delivery services.",
  },
] as const;

export default function TradingFooter() {
  return (
    <footer className="mt-20 bg-slate-950 text-slate-300">
      <div className="container-shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={tradingBrandAssets.logo}
              alt="Technoshine Trading International logo"
              className="h-10 w-10 object-contain"
            />
            <div className="leading-none">
              <p className="text-lg font-extrabold text-white">TECHNOSHINE</p>
              <p className="text-[9px] uppercase tracking-[0.35em] text-slate-400">
                TRADING INTERNATIONAL
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-400">
            Reliable road safety products and industrial supply support for infrastructure,
            private developments, and project-based deployments.
          </p>

          <a
            href={technoshineHomeUrl}
            className="mt-6 inline-flex rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-orange-500 hover:text-orange-400"
          >
            Visit technoshineph.com
          </a>
        </div>

        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            {tradingNavLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white">Products</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            {tradingProducts.map((product) => (
              <Link key={product.slug} to={tradingRoutes.product(product.slug)}>
                {product.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <p>Email: {companyInfo.email}</p>
            <p>Phone: {companyInfo.phone}</p>
            <p>{companyInfo.addressLines.join(" ")}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container-shell py-10">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-400">
              Other Services
            </p>
            <h4 className="mt-2 text-2xl font-bold text-white">
              Explore the rest of Technoshine
            </h4>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {otherServices.map((service) => (
              <Link
                key={service.to}
                to={service.to}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-orange-500 hover:bg-slate-900"
              >
                <p className="text-base font-semibold text-white">{service.label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-5 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Technoshine Trading International. All rights reserved.
      </div>
    </footer>
  );
}
