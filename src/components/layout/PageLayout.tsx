import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import BackToTop from "@/components/layout/BackToTop";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { getDivisionByPathname } from "@/data/divisions";
import { usePageBranding } from "@/hooks/usePageBranding";
import { appRoutes } from "@/utils/routes";
import { scrollToHash } from "@/utils/scroll";

export default function PageLayout() {
  const location = useLocation();
  const currentDivision = getDivisionByPathname(location.pathname);
  const pageTitle =
    currentDivision?.documentTitle ??
    (location.pathname === appRoutes.careers ? "TECHNOSHINE | Careers" : "TECHNOSHINE");
  const pageBrandKey = currentDivision?.key ?? "technoshine";
  const showFooter = !currentDivision && location.pathname !== appRoutes.careers;

  useEffect(() => {
    if (location.hash) {
      const timer = window.requestAnimationFrame(() => scrollToHash(location.hash, "auto"));
      return () => window.cancelAnimationFrame(timer);
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  usePageBranding(pageTitle, pageBrandKey);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      {showFooter ? <Footer /> : null}
      <BackToTop />
    </div>
  );
}
