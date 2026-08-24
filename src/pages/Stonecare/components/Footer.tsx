import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { stonecareBrandAssets } from "@/pages/Stonecare/stonecareAssets";

export function Footer() {
  const year = new Date().getFullYear();
  const navLinks = ["Home", "Services", "About", "Gallery", "Contact"];
  const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

  return (
    <footer
      data-app-footer="true"
      className="relative isolate flex overflow-hidden bg-black px-4 py-9 pb-12 text-white sm:min-h-screen sm:px-10 sm:py-10 lg:px-12"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[440px] flex-col gap-10 py-0 sm:max-w-6xl sm:justify-between sm:gap-16 sm:py-8">
        <div className="pointer-events-none absolute bottom-3 left-1/2 z-0 w-fit max-w-full -translate-x-1/2 select-none whitespace-nowrap text-center text-[clamp(2.5rem,16vw,4.8rem)] font-black leading-none tracking-[0.01em] text-white/[0.055] sm:bottom-[-0.08em] sm:text-[clamp(4.25rem,15vw,12rem)]">
          Stonecare
        </div>

        <div className="relative z-10 grid gap-9 sm:gap-14 lg:grid-cols-[minmax(280px,430px)_1fr] lg:gap-28">
          <div className="w-full max-w-[430px]">
            <Link to="/stonecare" className="inline-flex items-center gap-3">
              <img
                src={stonecareBrandAssets.footerLogo}
                alt="Technoshine Stonecare"
                className="h-8 w-8 rounded-lg object-contain"
              />
              <span className="text-[15px] font-bold text-white">Stonecare</span>
              <span className="text-[15px] font-semibold text-white/35">by Technoshine</span>
            </Link>

            <div className="mt-6 sm:mt-7">
              <h2 className="text-3xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-4xl">
                Restore once.
              </h2>
              <p className="font-serif text-3xl italic leading-[0.95] tracking-[-0.07em] text-white sm:text-4xl">
                Preserve beautifully.
              </p>
            </div>

            <p className="mt-5 text-sm leading-6 text-white/45 sm:mt-7 sm:text-[15px]">
              Premium marble and natural stone restoration for homes, hotels, malls, and
              high-value surfaces that deserve careful long-term maintenance.
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-black transition hover:bg-primary hover:text-white sm:mt-6"
            >
              Book an assessment
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <div className="mt-6 space-y-3 text-xs font-semibold text-white/30 sm:mt-7 sm:space-y-4">
              <p>&copy; {year} TECHNOSHINE. All rights reserved</p>
              <p className="text-white/80">
                Built for stone surfaces <span className="text-primary">that last</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-12 lg:pt-1">
            <div>
              <h4 className="mb-4 text-base font-black tracking-[-0.04em] text-white/25 sm:mb-6">Menu</h4>
              <ul className="space-y-3.5 sm:space-y-5">
                {navLinks.map((item) => (
                  <li key={item}>
                    <a
                      href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                      className="text-sm font-semibold leading-5 text-white transition hover:text-primary sm:leading-none"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-base font-black tracking-[-0.04em] text-white/25 sm:mb-6">Navigation</h4>
              <ul className="space-y-3.5 sm:space-y-5">
                <li>
                  <Link to="/" className="text-sm font-semibold leading-5 text-white transition hover:text-primary sm:leading-none">
                    Technoshine
                  </Link>
                </li>
                <li>
                  <Link
                    to="/trading"
                    className="text-sm font-semibold leading-5 text-white transition hover:text-primary sm:leading-none"
                  >
                    Trading
                  </Link>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-sm font-semibold leading-5 text-white transition hover:text-primary sm:leading-none"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-base font-black tracking-[-0.04em] text-white/25 sm:mb-6">Legal</h4>
              <ul className="space-y-3.5 sm:space-y-5">
                {legalLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm font-semibold leading-5 text-white transition hover:text-primary sm:leading-none">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
