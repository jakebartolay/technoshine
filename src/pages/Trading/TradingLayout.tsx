import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import BackToTop from "@/components/layout/BackToTop";
import { usePageBranding } from "@/hooks/usePageBranding";
import { appRoutes } from "@/utils/routes";
import TradingFooter from "@/pages/Trading/components/layout/TradingFooter";
import TradingNavbar from "@/pages/Trading/components/layout/TradingNavbar";
import TradingTopbar from "@/pages/Trading/components/layout/TradingTopbar";

import "./trading.css";

function getTradingPageTitle(pathname: string) {
  if (pathname === appRoutes.trading) {
    return "TECHNOSHINE | Trading International";
  }

  if (pathname === appRoutes.tradingAbout) {
    return "TECHNOSHINE | Trading About";
  }

  if (pathname === appRoutes.tradingProducts) {
    return "TECHNOSHINE | Trading Products";
  }

  if (pathname.startsWith(`${appRoutes.tradingProducts}/`)) {
    return "TECHNOSHINE | Trading Product Details";
  }

  if (pathname === appRoutes.tradingCatalog || pathname === appRoutes.tradingCases) {
    return "TECHNOSHINE | Trading Gallery";
  }

  if (pathname === appRoutes.tradingFaq) {
    return "TECHNOSHINE | Trading FAQ";
  }

  if (pathname === appRoutes.tradingContact) {
    return "TECHNOSHINE | Trading Contact";
  }

  return "TECHNOSHINE | Trading International";
}

export default function TradingLayout() {
  const location = useLocation();
  const pageTitle = getTradingPageTitle(location.pathname);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  usePageBranding(pageTitle, "trading");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <TradingTopbar />
      <TradingNavbar />
      <main>
        <Outlet />
      </main>
      <TradingFooter />
      <BackToTop />
    </div>
  );
}
