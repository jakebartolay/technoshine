import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { brandAssets } from "@/assets/siteAssets";
import { getDivisionByPathname } from "@/data/divisions";
import { divisionNavigationLinks, mainNavigationLinks } from "@/data/navigation";
import { appRoutes, homeSectionIds, type HomeSectionId } from "@/utils/routes";
import { scrollToHash } from "@/utils/scroll";

function useActiveSection(isHomePage: boolean) {
  const [activeSection, setActiveSection] = useState<HomeSectionId>("home");

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection("home");
      return;
    }

    const navbarHeight = 96;

    const updateActiveSection = () => {
      const scrollY = window.scrollY + navbarHeight;
      let currentSection: HomeSectionId = "home";

      for (const sectionId of homeSectionIds) {
        const element = document.getElementById(sectionId);

        if (element && element.offsetTop <= scrollY) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [isHomePage]);

  return activeSection;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLLIElement>(null);
  const isHomePage = location.pathname === appRoutes.home;
  const activeSection = useActiveSection(isHomePage);
  const currentDivision = getDivisionByPathname(location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname, location.hash]);

  const handleSectionNavigation = (sectionId: HomeSectionId) => {
    setMobileOpen(false);

    if (!isHomePage) {
      navigate(`${appRoutes.home}#${sectionId}`);
      return;
    }

    scrollToHash(sectionId);
  };

  const handleDivisionNavigation = (to: string) => {
    setMobileOpen(false);
    navigate(to);
  };

  const handleRouteNavigation = (to: string) => {
    setMobileOpen(false);
    navigate(to);
  };

  const textColor = !isHomePage || scrolled ? "text-gray-700" : "text-white";
  const logoSrc = !isHomePage || scrolled ? brandAssets.navLogoDark : brandAssets.navLogoLight;
  const isSectionActive = (sectionId: HomeSectionId) => isHomePage && activeSection === sectionId;

  const scrollToSectionAfterMenuClose = (sectionId: HomeSectionId) => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        scrollToHash(sectionId);
      });
    });
  };

  if (currentDivision) {
    const divisionLinks = [
      { label: "Home", to: currentDivision.route },
      { label: currentDivision.detailsLabel, to: currentDivision.detailsRoute },
      { label: currentDivision.showcaseLabel, to: currentDivision.showcaseRoute },
    ];

    return (
      <nav data-app-navbar="true" className="fixed left-0 right-0 top-0 z-50 bg-white shadow-md transition-all duration-300">
        <div data-app-navbar-shell="true" className="mx-auto flex h-20 max-w-7xl items-end justify-between px-6 pb-3">
          <Link to={currentDivision.route} className="flex h-14 items-end justify-center">
            <img src={brandAssets.navLogoDark} alt="Technoshine Logo" className="h-11 w-auto object-contain" />
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {divisionLinks.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <button
                  key={link.label}
                  onClick={() => handleDivisionNavigation(link.to)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-orange-500 text-white"
                      : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            <Link
              to={appRoutes.home}
              className="ml-2 rounded-lg border border-orange-200 px-4 py-2 text-sm font-medium text-orange-600 transition-colors hover:bg-orange-50"
            >
              TECHNOSHINE
            </Link>
          </div>

          <button
            className="self-end rounded-lg p-2 text-gray-700 hover:bg-orange-50 md:hidden"
            onClick={() => setMobileOpen((current) => !current)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen ? (
          <div className="flex flex-col gap-1 border-t border-gray-100 bg-white px-6 pb-4 pt-6 md:hidden">
            {divisionLinks.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <button
                  key={link.label}
                  onClick={() => handleDivisionNavigation(link.to)}
                  className={`rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-orange-500 text-white"
                      : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            <Link
              to={appRoutes.home}
              className="mt-3 rounded-lg border border-orange-200 px-3 py-2.5 text-sm font-medium text-orange-600 transition-colors hover:bg-orange-50"
            >
              Technoshine
            </Link>
          </div>
        ) : null}
      </nav>
    );
  }

  return (
    <nav
      data-app-navbar="true"
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        !isHomePage || scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div data-app-navbar-shell="true" className="mx-auto flex h-20 max-w-7xl items-end justify-between px-6 pb-3">
        <Link to={appRoutes.home} className="flex h-14 items-end justify-center">
          <img src={logoSrc} alt="Technoshine PH Logo" className="h-11 w-auto object-contain" />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {mainNavigationLinks.map((link) =>
            link.type === "section" && link.sectionId === "services" ? (
              <li key={link.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => {
                    handleSectionNavigation(link.sectionId);
                    setDropdownOpen((current) => !current);
                  }}
                  className={`relative flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    isSectionActive(link.sectionId)
                      ? "bg-orange-500 text-white"
                      : dropdownOpen
                        ? "bg-orange-50 text-orange-600"
                        : `${textColor} hover:bg-orange-50 hover:text-orange-600`
                  }`}
                >
                  {link.label}
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {dropdownOpen ? (
                  <div className="absolute left-0 top-full mt-2 w-52 overflow-hidden rounded-xl border border-gray-100 bg-white py-1 shadow-lg">
                    {divisionNavigationLinks.map((serviceLink) => (
                      <Link
                        key={serviceLink.label}
                        to={serviceLink.to}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-orange-50 hover:text-orange-600"
                      >
                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-400" />
                        {serviceLink.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </li>
            ) : (
              <li key={link.label}>
                {link.type === "section" ? (
                  <button
                    onClick={() => handleSectionNavigation(link.sectionId)}
                    className={`block rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      isSectionActive(link.sectionId)
                        ? "bg-orange-500 text-white"
                        : `${textColor} hover:bg-orange-50 hover:text-orange-600`
                    }`}
                  >
                    {link.label}
                  </button>
                ) : (
                  <button
                    onClick={() => handleRouteNavigation(link.to)}
                    className={`block rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      location.pathname === link.to
                        ? "bg-orange-500 text-white"
                        : `${textColor} hover:bg-orange-50 hover:text-orange-600`
                    }`}
                  >
                    {link.label}
                  </button>
                )}
              </li>
            ),
          )}
        </ul>

        <button
          className={`self-end rounded-lg p-2 md:hidden ${
            !isHomePage || scrolled ? "text-gray-700 hover:bg-orange-50" : "text-white hover:bg-white/20"
          }`}
          onClick={() => setMobileOpen((current) => !current)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen ? (
        <div className="flex flex-col gap-1 border-t border-gray-100 bg-white px-6 pb-4 pt-6 md:hidden">
          {mainNavigationLinks.map((link) =>
            link.type === "section" ? (
              <button
                key={link.label}
                onClick={() => {
                  setMobileOpen(false);

                  if (!isHomePage) {
                    navigate(`${appRoutes.home}#${link.sectionId}`);
                    return;
                  }

                  scrollToSectionAfterMenuClose(link.sectionId);
                }}
                className={`rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                  isSectionActive(link.sectionId)
                    ? "bg-orange-500 text-white"
                    : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                }`}
              >
                {link.label}
              </button>
            ) : (
              <button
                key={link.label}
                onClick={() => handleRouteNavigation(link.to)}
                className={`rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "bg-orange-500 text-white"
                    : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                }`}
              >
                {link.label}
              </button>
            ),
          )}

          <div className="mt-3 rounded-xl bg-orange-50 p-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">Divisions</p>
            <div className="flex flex-col gap-1">
              {divisionNavigationLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-white hover:text-orange-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
