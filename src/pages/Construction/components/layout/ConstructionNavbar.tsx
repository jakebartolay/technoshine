import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { constructionBrandAssets } from "@/pages/Construction/constructionAssets";
import ConstructionButton from "@/pages/Construction/components/common/ConstructionButton";
import {
  constructionNavLinks,
  constructionRoutes,
  technoshineHomeUrl,
} from "@/pages/Construction/constructionRoutes";

export default function ConstructionNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      data-app-navbar-shell="true"
      className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link
          to={constructionRoutes.home}
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src={constructionBrandAssets.logo}
            alt="Technoshine Construction logo"
            className="h-9 w-9 object-contain sm:h-11 sm:w-11"
          />
          <div>
            <p className="text-base font-black tracking-wide text-white sm:text-lg">TECHNOSHINE</p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 sm:text-xs sm:tracking-[0.25em]">Construction</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {constructionNavLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === constructionRoutes.home}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? "text-orange-400" : "text-slate-300 hover:text-white"
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
            className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-orange-400 hover:text-orange-300"
          >
            TECHNOSHINE
          </a>
          <ConstructionButton to={constructionRoutes.contact}>Get a Quote</ConstructionButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="shrink-0 rounded-lg border border-white/10 px-3 py-2 text-white lg:hidden"
          aria-label="Toggle construction navigation"
        >
          Menu
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950 lg:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
            {constructionNavLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === constructionRoutes.home}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-white"
              >
                {link.name}
              </NavLink>
            ))}

            <div className="mt-3 grid gap-3">
              <a
                href={technoshineHomeUrl}
                className="rounded-full border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-orange-400 hover:text-orange-300"
              >
                TECHNOSHINE
              </a>
              <ConstructionButton to={constructionRoutes.contact}>Get a Quote</ConstructionButton>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
