import { Link } from "react-router-dom";

import { constructionCompanyInfo } from "@/pages/Construction/data/constructionCompanyInfo";
import {
  constructionNavLinks,
  technoshineHomeUrl,
} from "@/pages/Construction/constructionRoutes";
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
    label: "Trading",
    to: appRoutes.trading,
    description: "Road safety and industrial barrier product solutions.",
  },
] as const;

export default function ConstructionFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid w-full max-w-[440px] gap-8 px-4 py-10 sm:max-w-7xl sm:gap-10 sm:px-6 sm:py-14 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-xl font-black">TECHNOSHINE</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-400">Construction</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-slate-300">
            {constructionCompanyInfo.tagline}
          </p>
          <a
            href={technoshineHomeUrl}
            className="mt-6 inline-flex rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-orange-500 hover:text-orange-300"
          >
            Visit technoshineph.com
          </a>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>{constructionCompanyInfo.contact.phone}</li>
            <li>{constructionCompanyInfo.contact.email}</li>
            <li>{constructionCompanyInfo.contact.address}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
            Quick Links
          </h4>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            {constructionNavLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto w-full max-w-[440px] px-4 py-8 sm:max-w-7xl sm:px-6 sm:py-10 lg:px-8">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-400">
              Other Services
            </p>
            <h4 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              Explore the rest of Technoshine
            </h4>
          </div>

          <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
            {otherServices.map((service) => (
              <Link
                key={service.to}
                to={service.to}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-orange-500 hover:bg-slate-900 sm:rounded-3xl sm:p-5"
              >
                <p className="text-base font-semibold text-white">{service.label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-5 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Technoshine Construction. All rights reserved.
      </div>
    </footer>
  );
}
