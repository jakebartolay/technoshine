import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { companyInfo } from "@/data/company";
import { tradingProducts } from "@/pages/Trading/data/tradingProducts";
import { tradingBrandAssets } from "@/pages/Trading/tradingAssets";
import { technoshineHomeUrl, tradingNavLinks, tradingRoutes } from "@/pages/Trading/tradingRoutes";

export default function TradingFooter() {
  return (
    <footer
      data-app-footer="true"
      className="relative isolate mt-12 flex overflow-hidden bg-black px-4 py-9 pb-12 text-white sm:mt-20 sm:min-h-screen sm:px-10 sm:py-10 lg:px-12"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[440px] flex-col gap-10 py-0 sm:max-w-6xl sm:justify-between sm:gap-16 sm:py-8">
        <div className="pointer-events-none absolute bottom-3 left-1/2 z-0 w-fit max-w-full -translate-x-1/2 select-none whitespace-nowrap text-center text-[clamp(2.7rem,18vw,5rem)] font-black leading-none tracking-[0.01em] text-white/[0.055] sm:bottom-[-0.08em] sm:text-[clamp(4.75rem,17vw,13rem)]">
          Trading
        </div>

        <div className="relative z-10 grid gap-9 sm:gap-14 lg:grid-cols-[minmax(280px,430px)_1fr] lg:gap-28">
          <div className="w-full max-w-[430px]">
            <Link to={tradingRoutes.home} className="inline-flex items-center gap-3">
              <img
                src={tradingBrandAssets.logo}
                alt="Technoshine Trading International logo"
                className="h-8 w-8 rounded-lg object-contain"
              />
              <span className="text-[15px] font-bold text-white">Technoshine</span>
              <span className="text-[15px] font-semibold text-white/35">Trading International</span>
            </Link>

            <div className="mt-6 sm:mt-7">
              <h2 className="text-3xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-4xl">
                Supply once.
              </h2>
              <p className="font-serif text-3xl italic leading-[0.95] tracking-[-0.07em] text-white sm:text-4xl">
                Deploy anywhere.
              </p>
            </div>

            <p className="mt-5 text-sm leading-6 text-white/45 sm:mt-7 sm:text-[15px]">
              Reliable road safety products and industrial supply support for infrastructure,
              private developments, and project-based deployments.
            </p>

            <Link
              to={tradingRoutes.contact}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-black transition hover:bg-orange-500 hover:text-white sm:mt-6"
            >
              Request quote
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <div className="mt-6 space-y-3 text-xs font-semibold text-white/30 sm:mt-7 sm:space-y-4">
              <p>&copy; {new Date().getFullYear()} Technoshine Trading International. All rights reserved</p>
              <a href={technoshineHomeUrl} className="inline-flex text-white/80 transition hover:text-orange-400">
                Visit technoshineph.com
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-12 lg:pt-1">
            <div>
              <h4 className="mb-4 text-base font-black tracking-[-0.04em] text-white/25 sm:mb-6">Menu</h4>
              <ul className="space-y-3.5 sm:space-y-5">
                {tradingNavLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm font-semibold leading-5 text-white transition hover:text-orange-400 sm:leading-none"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-base font-black tracking-[-0.04em] text-white/25 sm:mb-6">Products</h4>
              <ul className="space-y-3.5 sm:space-y-5">
                {tradingProducts.map((product) => (
                  <li key={product.slug}>
                    <Link
                      to={tradingRoutes.product(product.slug)}
                      className="text-sm font-semibold leading-5 text-white transition hover:text-orange-400 sm:leading-none"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="mb-4 text-base font-black tracking-[-0.04em] text-white/25 sm:mb-6">Contact</h4>
              <ul className="space-y-3.5 sm:space-y-5">
                <li>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-sm font-semibold leading-5 text-white transition hover:text-orange-400 sm:leading-none"
                  >
                    {companyInfo.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                    className="text-sm font-semibold leading-5 text-white transition hover:text-orange-400 sm:leading-none"
                  >
                    {companyInfo.phone}
                  </a>
                </li>
                <li>
                  <p className="max-w-[220px] text-sm font-semibold leading-5 text-white sm:leading-6">
                    {companyInfo.addressLines.join(" ")}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
