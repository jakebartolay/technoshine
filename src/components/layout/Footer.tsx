import { Link, useLocation, useNavigate } from "react-router-dom";

import { brandAssets } from "@/assets/siteAssets";
import { companyInfo, legalLinks } from "@/data/company";
import { divisionNavigationLinks, homeNavigationLinks } from "@/data/navigation";
import { appRoutes, buildHomeHashRoute } from "@/utils/routes";
import { scrollToHash } from "@/utils/scroll";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (sectionId: (typeof homeNavigationLinks)[number]["sectionId"]) => {
    const hashRoute = buildHomeHashRoute(sectionId);

    if (location.pathname === appRoutes.home) {
      scrollToHash(sectionId);
      return;
    }

    navigate(hashRoute);
  };

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="h-1 w-full bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600" />

      <div className="mx-auto hidden max-w-7xl grid-cols-3 gap-12 px-6 py-14 md:grid">
        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">Navigation</h4>
          <ul className="space-y-3">
            {homeNavigationLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleSectionClick(link.sectionId)}
                  className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-orange-400"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500 opacity-0 transition-opacity group-hover:opacity-100" />
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-40">
            <img
              src={brandAssets.footerLogo}
              alt={`${companyInfo.name} footer logo`}
              className="h-auto w-full object-contain"
            />
          </div>
          <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-gray-500">{companyInfo.tagline}</p>
          <div className="mt-5 flex gap-3">
            <a href="#" className="group flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-orange-500">
              <svg className="h-4 w-4 text-gray-400 transition-colors group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href={`mailto:${companyInfo.email}`} className="group flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-orange-500">
              <svg className="h-4 w-4 text-gray-400 transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a href="tel:+639000000000" className="group flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-orange-500">
              <svg className="h-4 w-4 text-gray-400 transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="text-right">
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">Our Services</h4>
          <ul className="mb-8 space-y-3">
            {divisionNavigationLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-orange-400"
                >
                  {link.label}
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">Legal</h4>
          <ul className="space-y-3">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-xs text-gray-500 transition-colors hover:text-orange-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-10 md:hidden">
        <div className="flex flex-col items-center text-center">
          <div className="w-28">
            <img
              src={brandAssets.footerLogo}
              alt={`${companyInfo.name} footer logo`}
              className="h-auto w-full object-contain"
            />
          </div>
          <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-gray-500">{companyInfo.tagline}</p>
        </div>

        <div>
          <h4 className="mb-5 text-center text-sm font-semibold uppercase tracking-widest text-white">Navigation</h4>
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
            {homeNavigationLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleSectionClick(link.sectionId)}
                  className="text-sm text-gray-400 transition-colors hover:text-orange-400"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-center text-sm font-semibold uppercase tracking-widest text-white">Our Services</h4>
          <ul className="mb-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
            {divisionNavigationLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-sm text-gray-400 transition-colors hover:text-orange-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="mb-5 text-center text-sm font-semibold uppercase tracking-widest text-white">Legal</h4>
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-xs text-gray-500 transition-colors hover:text-orange-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs text-gray-600 md:flex-row">
          <p>&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
          <p className="text-gray-700">Built with care in the Philippines.</p>
        </div>
      </div>
    </footer>
  );
}
