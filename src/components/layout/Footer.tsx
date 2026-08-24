import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

import { brandAssets } from "@/assets/siteAssets";
import { companyInfo, legalLinks } from "@/data/company";
import { divisionNavigationLinks, mainNavigationLinks } from "@/data/navigation";
import { appRoutes, buildHomeHashRoute, type HomeSectionId } from "@/utils/routes";
import { scrollToHash } from "@/utils/scroll";

const socialLinks = [
  { label: "Facebook", href: "#", Icon: FaFacebookF },
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "TikTok", href: "#", Icon: FaTiktok },
  { label: "YouTube", href: "#", Icon: FaYoutube },
];

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const footerNavigationLinks = mainNavigationLinks.filter(
    (link) => !(link.type === "route" && link.to === appRoutes.careers),
  );
  const visibleDivisionLinks = divisionNavigationLinks.filter((link) => link.to !== appRoutes.construction);
  const footerUtilityLinks = [
    ...visibleDivisionLinks.map((link) => ({ ...link, type: "route" as const })),
    ...legalLinks.slice(0, 2).map((link) => ({ ...link, type: "legal" as const })),
  ];

  const handleSectionClick = (sectionId: HomeSectionId) => {
    const hashRoute = buildHomeHashRoute(sectionId);

    if (sectionId === "home") {
      if (location.pathname !== appRoutes.home || location.hash) {
        navigate(appRoutes.home);
        return;
      }

      scrollToHash(sectionId);
      return;
    }

    if (location.pathname === appRoutes.home) {
      scrollToHash(sectionId);
      return;
    }

    navigate(hashRoute);
  };

  return (
    <footer
      data-app-footer="true"
      className="relative isolate flex overflow-hidden bg-black px-4 py-8 text-white sm:min-h-screen sm:px-10 sm:py-10 lg:px-12"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[440px] flex-col items-center gap-7 text-center sm:hidden">
        <div className="flex w-full flex-col items-center">
          <Link to={appRoutes.home} className="inline-flex items-center justify-center">
            <img
              src={brandAssets.navLogoLight}
              alt={`${companyInfo.name} footer logo`}
              className="h-9 w-auto max-w-[210px] object-contain"
            />
          </Link>

          <div className="mt-4">
            <h2 className="text-2xl font-black leading-[0.95] tracking-[-0.06em] text-white">
              Build once.
            </h2>
            <p className="font-serif text-2xl italic leading-[0.95] tracking-[-0.07em] text-white">
              Shine every time.
            </p>
          </div>
        </div>

        <div className="w-full">
          <p className="text-xs font-black tracking-[-0.04em] text-white">Menu</p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] font-semibold leading-tight text-white/55">
            {footerNavigationLinks.map((link, index) => (
              <span key={link.label} className="inline-flex items-center gap-2">
                {index > 0 ? <span className="text-white/20">|</span> : null}
                {link.type === "section" ? (
                  <button onClick={() => handleSectionClick(link.sectionId)} className="transition hover:text-orange-400">
                    {link.label}
                  </button>
                ) : (
                  <Link to={link.to} className="transition hover:text-orange-400">
                    {link.label}
                  </Link>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full">
          <p className="text-xs font-black tracking-[-0.04em] text-white">Contact</p>
          <div className="mt-2 flex flex-col items-center gap-1 text-[11px] font-semibold leading-tight text-white/55">
            <a href={`mailto:${companyInfo.email}`} className="transition hover:text-orange-400">
              {companyInfo.email}
            </a>
            <a href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`} className="transition hover:text-orange-400">
              {companyInfo.phone}
            </a>
          </div>
        </div>

        <div className="w-full">
          <p className="text-xs font-black tracking-[-0.04em] text-white">Navigation</p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] font-semibold leading-tight text-white/55">
            {footerUtilityLinks.map((link, index) => (
              <span key={link.label} className="inline-flex items-center gap-2">
                {index > 0 ? <span className="text-white/20">|</span> : null}
                {link.type === "route" ? (
                  <Link to={link.to} className="transition hover:text-orange-400">
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} className="transition hover:text-orange-400">
                    {link.label}
                  </a>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full">
          <p className="text-xs font-black tracking-[-0.04em] text-white">Social Links</p>
          <div className="mt-2 flex justify-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/75 transition hover:border-orange-400 hover:bg-orange-400 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="w-full space-y-3">
          <div className="h-px w-full bg-white/10" />
          <div>
            <div className="pointer-events-none select-none whitespace-nowrap text-[clamp(2.1rem,11vw,3rem)] font-black leading-none tracking-[0.015em] text-white/[0.06]">
              TECHNOSHINE
            </div>
            <p className="mt-2 text-[10px] font-semibold tracking-[0.16em] text-white/30">
              &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto hidden w-full max-w-6xl flex-col justify-between gap-14 py-8 sm:flex">
        <div className="mx-auto mt-16 flex max-w-2xl flex-col items-center text-center lg:mt-20">
          <Link to={appRoutes.home} className="inline-flex items-center justify-center">
            <img
              src={brandAssets.navLogoLight}
              alt={`${companyInfo.name} footer logo`}
              className="h-16 w-auto max-w-[310px] object-contain"
            />
          </Link>

          <div className="mt-7">
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white">
              Build once.
            </h2>
            <p className="font-serif text-4xl italic leading-[0.95] tracking-[-0.07em] text-white">
              Shine every time.
            </p>
          </div>

          <p className="mt-7 max-w-xl text-[15px] leading-6 text-white/45">
            {companyInfo.tagline} From specialist stone restoration to reliable trading supply,
            Technoshine connects every project with careful service and dependable execution.
          </p>

          <button
            onClick={() => handleSectionClick("contact")}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-black transition hover:bg-orange-400 hover:text-white"
          >
            Contact Technoshine
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="space-y-8 text-left">
            <div>
              <h4 className="mb-6 text-base font-black tracking-[-0.04em] text-white">
                Menu
              </h4>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold leading-tight text-white/55">
                {footerNavigationLinks.map((link, index) => (
                  <span key={link.label} className="inline-flex items-center gap-2">
                    {index > 0 ? <span className="text-white/20">|</span> : null}
                    {link.type === "section" ? (
                      <button
                        onClick={() => handleSectionClick(link.sectionId)}
                        className="transition hover:text-orange-400"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        to={link.to}
                        className="transition hover:text-orange-400"
                      >
                        {link.label}
                      </Link>
                    )}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-base font-black tracking-[-0.04em] text-white">Navigation</p>
              <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold leading-tight text-white/55">
              {footerUtilityLinks.map((link, index) => (
                <span key={link.label} className="inline-flex items-center gap-2">
                  {index > 0 ? <span className="text-white/20">|</span> : null}
                  {link.type === "route" ? (
                    <Link to={link.to} className="transition hover:text-orange-400">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="transition hover:text-orange-400">
                      {link.label}
                    </a>
                  )}
                </span>
              ))}
              </div>
            </div>
          </div>

          <div className="space-y-8 text-right">
            <div>
              <h4 className="mb-3 text-base font-black tracking-[-0.04em] text-white">
                Contact
              </h4>
              <div className="flex flex-wrap items-center justify-end gap-x-2 gap-y-1 text-sm font-semibold leading-tight text-white/55">
                <a href={`mailto:${companyInfo.email}`} className="transition hover:text-orange-400">
                  {companyInfo.email}
                </a>
                <span className="text-white/20">|</span>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                  className="transition hover:text-orange-400"
                >
                  {companyInfo.phone}
                </a>
              </div>
            </div>

            <div>
              <p className="text-base font-black tracking-[-0.04em] text-white">Social Links</p>
              <div className="mt-3 flex justify-end gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/75 transition hover:border-orange-400 hover:bg-orange-400 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-white/10 lg:col-span-2" />
        </div>

        <div className="w-full text-center">
          <div className="pointer-events-none select-none whitespace-nowrap text-[clamp(2.1rem,11vw,3rem)] font-black leading-none tracking-[0.015em] text-white/[0.06] sm:text-[clamp(4.5rem,10vw,10rem)] sm:tracking-[0.025em]">
            TECHNOSHINE
          </div>
          <p className="mt-2 text-[10px] font-semibold tracking-[0.16em] text-white/30 sm:mt-4 sm:text-xs sm:tracking-[0.22em]">
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
