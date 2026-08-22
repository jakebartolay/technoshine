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
      className="relative isolate flex min-h-screen overflow-hidden bg-black px-6 py-10 text-white sm:px-10 lg:px-12"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col justify-between gap-16 py-3 sm:py-8">
        <div className="pointer-events-none absolute bottom-[-0.08em] left-1/2 z-0 w-fit max-w-full -translate-x-1/2 select-none whitespace-nowrap text-center text-[clamp(2.8rem,14vw,12rem)] font-black leading-none tracking-[0.01em] text-white/[0.055] sm:text-[clamp(4.25rem,15vw,12rem)]">
          Stonecare
        </div>

        <div className="relative z-10 grid gap-14 lg:grid-cols-[minmax(280px,430px)_1fr] lg:gap-28">
          <div className="max-w-[430px]">
            <Link to="/stonecare" className="inline-flex items-center gap-3">
              <img
                src={stonecareBrandAssets.footerLogo}
                alt="Technoshine Stonecare"
                className="h-8 w-8 rounded-lg object-contain"
              />
              <span className="text-[15px] font-bold text-white">Stonecare</span>
              <span className="text-[15px] font-semibold text-white/35">by Technoshine</span>
            </Link>

            <div className="mt-7">
              <h2 className="text-3xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-4xl">
                Restore once.
              </h2>
              <p className="font-serif text-3xl italic leading-[0.95] tracking-[-0.07em] text-white sm:text-4xl">
                Preserve beautifully.
              </p>
            </div>

            <p className="mt-7 text-sm leading-6 text-white/45 sm:text-[15px]">
              Premium marble and natural stone restoration for homes, hotels, malls, and
              high-value surfaces that deserve careful long-term maintenance.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-black transition hover:bg-primary hover:text-white"
            >
              Book an assessment
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <div className="mt-7 space-y-4 text-xs font-semibold text-white/30">
              <p>&copy; {year} TECHNOSHINE. All rights reserved</p>
              <p className="text-white/80">
                Built for stone surfaces <span className="text-primary">that last</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-3 lg:pt-1">
            <div>
              <h4 className="mb-6 text-base font-black tracking-[-0.04em] text-white/25">Menu</h4>
              <ul className="space-y-5">
                {navLinks.map((item) => (
                  <li key={item}>
                    <a
                      href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                      className="text-sm font-semibold leading-none text-white transition hover:text-primary"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-base font-black tracking-[-0.04em] text-white/25">Navigation</h4>
              <ul className="space-y-5">
                <li>
                  <Link to="/" className="text-sm font-semibold leading-none text-white transition hover:text-primary">
                    Technoshine
                  </Link>
                </li>
                <li>
                  <Link
                    to="/trading"
                    className="text-sm font-semibold leading-none text-white transition hover:text-primary"
                  >
                    Trading
                  </Link>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-sm font-semibold leading-none text-white transition hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-base font-black tracking-[-0.04em] text-white/25">Legal</h4>
              <ul className="space-y-5">
                {legalLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm font-semibold leading-none text-white transition hover:text-primary">
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
