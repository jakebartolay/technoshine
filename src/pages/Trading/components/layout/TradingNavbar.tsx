import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { technoshineHomeUrl, tradingNavLinks, tradingRoutes } from "@/pages/Trading/tradingRoutes";
import { tradingBrandAssets } from "@/pages/Trading/tradingAssets";

export default function TradingNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur-lg">
      <div className="container-shell flex items-center justify-between gap-3 py-3 sm:py-4">
        <Link to={tradingRoutes.home} className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={tradingBrandAssets.navbarLogo}
            alt="Technoshine Trading International logo"
            className="h-8 w-auto max-w-[170px] object-contain sm:h-11 sm:max-w-[280px]"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {tradingNavLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === tradingRoutes.home}
              className={({ isActive }) =>
                `text-sm font-semibold transition hover:text-orange-500 ${
                  isActive ? "text-orange-500" : "text-slate-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={technoshineHomeUrl}
            className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-500"
          >
            TECHNOSHINE
          </a>
          <Link
            to={tradingRoutes.contact}
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Get Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          className="shrink-0 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold lg:hidden"
        >
          Menu
        </button>
      </div>

      {open ? (
        <div className="overflow-hidden border-t border-slate-200 bg-white lg:hidden">
          <div className="container-shell flex flex-col py-4">
            {tradingNavLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === tradingRoutes.home}
                onClick={() => setOpen(false)}
                className="border-b border-slate-100 py-3 text-sm font-semibold text-slate-700 last:border-none"
              >
                {link.name}
              </NavLink>
            ))}

            <div className="mt-4 grid gap-3">
              <a
                href={technoshineHomeUrl}
                className="rounded-full border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-500"
              >
                TECHNOSHINE
              </a>
              <Link
                to={tradingRoutes.contact}
                onClick={() => setOpen(false)}
                className="rounded-full bg-slate-950 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
