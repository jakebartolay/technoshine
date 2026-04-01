import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import BackToTop from "@/components/layout/BackToTop";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { getDivisionByPathname } from "@/data/divisions";
import { scrollToHash } from "@/utils/scroll";

export default function PageLayout() {
  const location = useLocation();
  const currentDivision = getDivisionByPathname(location.pathname);

  useEffect(() => {
    if (location.hash) {
      const timer = window.requestAnimationFrame(() => scrollToHash(location.hash, "auto"));
      return () => window.cancelAnimationFrame(timer);
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (currentDivision) {
      document.title = currentDivision.documentTitle;
      return;
    }

    document.title = "TECHNOSHINE";
  }, [location.pathname, currentDivision]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      {!currentDivision ? <Footer /> : null}
      <BackToTop />
    </div>
  );
}
