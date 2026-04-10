import { Suspense, lazy, type ReactNode } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

import PageLayout from "@/components/layout/PageLayout";
import ConstructionAbout from "@/pages/Construction/ConstructionAbout";
import ConstructionContact from "@/pages/Construction/ConstructionContact";
import ConstructionLanding from "@/pages/Construction/ConstructionLanding";
import ConstructionLayout from "@/pages/Construction/ConstructionLayout";
import ConstructionNotFound from "@/pages/Construction/ConstructionNotFound";
import ConstructionProjects from "@/pages/Construction/ConstructionProjects";
import ConstructionServices from "@/pages/Construction/ConstructionServices";
import Careers from "@/pages/Careers/Careers";
import Home from "@/pages/Home/Home";
import NotFound from "@/pages/NotFound";
import StonecareLanding from "@/pages/Stonecare/StonecareLanding";
import StonecareProjects from "@/pages/Stonecare/StonecareProjects";
import StonecareServices from "@/pages/Stonecare/StonecareServices";
import TradingAbout from "@/pages/Trading/TradingAbout";
import TradingCatalog from "@/pages/Trading/TradingCatalog";
import TradingContact from "@/pages/Trading/TradingContact";
import TradingFaq from "@/pages/Trading/TradingFaq";
import TradingLanding from "@/pages/Trading/TradingLanding";
import TradingLayout from "@/pages/Trading/TradingLayout";
import TradingNotFound from "@/pages/Trading/TradingNotFound";
import TradingProductDetail from "@/pages/Trading/TradingProductDetail";
import TradingProducts from "@/pages/Trading/TradingProducts";
import { appRoutes } from "@/utils/routes";

const AdminLayout = lazy(() => import("@/admin/AdminLayout"));
const AdminOverview = lazy(() => import("@/admin/AdminOverview"));
const AdminStudio = lazy(() => import("@/admin/AdminStudio"));
const AdminLibrary = lazy(() => import("@/admin/AdminLibrary"));
const AdminSettings = lazy(() => import("@/admin/AdminSettings"));
const AdminNotFound = lazy(() => import("@/admin/AdminNotFound"));

function withSuspense(element: ReactNode) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
          <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-center backdrop-blur-xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-300">Admin</p>
            <p className="mt-3 text-sm font-medium text-slate-100">Loading workspace...</p>
          </div>
        </div>
      }
    >
      {element}
    </Suspense>
  );
}

const router = createBrowserRouter([
  {
    path: appRoutes.home,
    element: <PageLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: appRoutes.careers.slice(1), element: <Careers /> },
      { path: appRoutes.stonecare.slice(1), element: <StonecareLanding /> },
      { path: appRoutes.stonecareServices.slice(1), element: <StonecareServices /> },
      { path: appRoutes.stonecareProjects.slice(1), element: <StonecareProjects /> },
    ],
  },
  {
    path: appRoutes.construction,
    element: <ConstructionLayout />,
    errorElement: <ConstructionNotFound />,
    children: [
      { index: true, element: <ConstructionLanding /> },
      { path: "about", element: <ConstructionAbout /> },
      { path: "services", element: <ConstructionServices /> },
      { path: "projects", element: <ConstructionProjects /> },
      { path: "contact", element: <ConstructionContact /> },
      { path: "*", element: <ConstructionNotFound /> },
    ],
  },
  {
    path: appRoutes.trading,
    element: <TradingLayout />,
    errorElement: <TradingNotFound />,
    children: [
      { index: true, element: <TradingLanding /> },
      { path: "about", element: <TradingAbout /> },
      { path: "products", element: <TradingProducts /> },
      { path: "products/:slug", element: <TradingProductDetail /> },
      { path: "catalog", element: <TradingCatalog /> },
      { path: "cases", element: <Navigate to={appRoutes.tradingCatalog} replace /> },
      { path: "faq", element: <TradingFaq /> },
      { path: "contact", element: <TradingContact /> },
      { path: "*", element: <TradingNotFound /> },
    ],
  },
  {
    path: appRoutes.admin,
    element: withSuspense(<AdminLayout />),
    errorElement: withSuspense(<AdminNotFound />),
    children: [
      { index: true, element: withSuspense(<AdminOverview />) },
      { path: "studio", element: withSuspense(<AdminStudio />) },
      { path: "library", element: withSuspense(<AdminLibrary />) },
      { path: "settings", element: withSuspense(<AdminSettings />) },
      { path: "*", element: withSuspense(<AdminNotFound />) },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
