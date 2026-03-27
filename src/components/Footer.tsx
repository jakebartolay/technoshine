export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="h-1 w-full bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600" />

      {/* DESKTOP VIEW */}
      <div className="hidden max-w-7xl mx-auto px-6 py-14 md:grid md:grid-cols-3 gap-12 items-start">
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Navigation</h4>
          <ul className="space-y-3">
            {["Home", "About", "Services", "Portfolio", "Contact"].map((label) => (
              <li key={label}>
                <button
                  onClick={() => scrollTo(`#${label.toLowerCase()}`)}
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-40">
            <img
              src="/logo/icon-footer.png"
              alt="TechnoShine PH Footer Logo"
              className="w-full h-auto object-contain"
            />
          </div>
          <p className="text-gray-500 text-sm mt-2 max-w-[200px] leading-relaxed">
            Building excellence across industries in the Philippines.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-colors group">
              <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="mailto:info@technoshineph.com" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-colors group">
              <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a href="tel:+63" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-colors group">
              <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="md:text-right">
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Our Services</h4>
          <ul className="space-y-3 mb-8">
            {[
              { label: "StoneCare", href: "https://stonecare.technoshineph.com" },
              { label: "Trading", href: "https://trading.technoshineph.com" },
              { label: "Construction", href: "https://construction.technoshineph.com" },
            ].map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm flex items-center gap-2 md:justify-end group"
                >
                  {s.label}
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            ))}
          </ul>
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Legal</h4>
          <ul className="space-y-3">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((label) => (
              <li key={label}>
                <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors text-xs flex items-center gap-2 md:justify-end group">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* PHONE VIEW */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 gap-10 items-start md:hidden">
        <div className="flex flex-col items-center text-center">
          <div className="w-28">
            <img
              src="/logo/icon-footer.png"
              alt="TechnoShine PH Footer Logo"
              className="w-full h-auto object-contain"
            />
          </div>
          <p className="text-gray-500 text-sm mt-2 max-w-[200px] leading-relaxed">
            Building excellence across industries in the Philippines.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-colors group">
              <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="mailto:info@technoshineph.com" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-colors group">
              <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a href="tel:+63" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-colors group">
              <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 text-center">Navigation</h4>
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
            {["Home", "About", "Services", "Portfolio", "Contact"].map((label) => (
              <li key={label}>
                <button
                  onClick={() => scrollTo(`#${label.toLowerCase()}`)}
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 text-center">Our Services</h4>
          <ul className="mb-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
            {[
              { label: "StoneCare", href: "https://stonecare.technoshineph.com" },
              { label: "Trading", href: "https://trading.technoshineph.com" },
              { label: "Construction", href: "https://construction.technoshineph.com" },
            ].map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition-colors text-sm flex items-center gap-2 group"
                >
                  {s.label}
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            ))}
          </ul>
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 text-center">Legal</h4>
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((label) => (
              <li key={label}>
                <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors text-xs flex items-center gap-2 group">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} TechnoShine PH. All rights reserved.</p>
          <p className="text-gray-700">Built with care in the Philippines.</p>
        </div>
      </div>
    </footer>
  );
}
