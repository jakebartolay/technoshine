import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services", dropdown: true },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { label: "StoneCare", href: "https://stonecare.technoshineph.com" },
  { label: "Trading", href: "https://trading.technoshineph.com" },
  { label: "Construction", href: "https://construction.technoshineph.com" },
];

function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const NAVBAR_HEIGHT = 64;

    const update = () => {
      const scrollY = window.scrollY + NAVBAR_HEIGHT + 8;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }

      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return active;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setDropdownOpen(activeSection === "services");
  }, [activeSection]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        if (activeSection !== "services") setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeSection]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (href: string) => activeSection === href.replace("#", "");
  const logoSrc = scrolled ? "/logo/companylogo1.png" : "/logo/companylogo2.png";
  const textColor = scrolled ? "text-gray-700" : "text-white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-visible ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-end justify-between h-20 pb-3 overflow-visible">
        <a
          href="#home"
          onClick={() => handleNavClick("#home")}
          className="h-14 flex items-end justify-center cursor-pointer overflow-visible"
        >
          <img
            src={logoSrc}
            alt="Technoshine PH Logo"
            className="h-11 w-auto object-contain"
          />
        </a>
        

        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <li key={link.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-colors relative ${
                    isActive(link.href)
                      ? "bg-orange-500 text-white"
                      : dropdownOpen
                      ? "bg-orange-50 text-orange-600"
                      : `${textColor} hover:bg-orange-50 hover:text-orange-600`
                  }`}
                >
                  {link.label}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 overflow-hidden">
                    {SERVICES.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                        {s.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors block ${
                    isActive(link.href)
                      ? "bg-orange-500 text-white"
                      : `${textColor} hover:bg-orange-50 hover:text-orange-600`
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          )}
        </ul>

        <button
          className={`md:hidden p-2 rounded-lg ${scrolled ? "text-gray-700 hover:bg-orange-50" : "text-white hover:bg-white/20"} self-end`}
          onClick={() => setMobileOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pt-8 pb-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors block ${
                isActive(link.href)
                  ? "bg-orange-500 text-white"
                  : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
