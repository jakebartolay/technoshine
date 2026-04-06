import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import BackToTop from "@/components/layout/BackToTop";
import { usePageBranding } from "@/hooks/usePageBranding";
import ConstructionFooter from "@/pages/Construction/components/layout/ConstructionFooter";
import ConstructionNavbar from "@/pages/Construction/components/layout/ConstructionNavbar";
import { appRoutes } from "@/utils/routes";

function getConstructionPageTitle(pathname: string) {
  if (pathname === appRoutes.construction) {
    return "TECHNOSHINE | Construction";
  }

  if (pathname === appRoutes.constructionAbout) {
    return "TECHNOSHINE | Construction About";
  }

  if (pathname === appRoutes.constructionServices) {
    return "TECHNOSHINE | Construction Services";
  }

  if (pathname === appRoutes.constructionProjects) {
    return "TECHNOSHINE | Construction Projects";
  }

  if (pathname === appRoutes.constructionContact) {
    return "TECHNOSHINE | Construction Contact";
  }

  return "TECHNOSHINE | Construction";
}

export default function ConstructionLayout() {
  const location = useLocation();
  const pageTitle = getConstructionPageTitle(location.pathname);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  usePageBranding(pageTitle, "construction");

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <ConstructionNavbar />
      <main>
        <Outlet />
      </main>
      <ConstructionFooter />
      <BackToTop />
    </div>
  );
}
