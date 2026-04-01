import { createBrowserRouter } from "react-router-dom";

import PageLayout from "@/components/layout/PageLayout";
import ConstructionLanding from "@/pages/Construction/ConstructionLanding";
import ConstructionProjects from "@/pages/Construction/ConstructionProjects";
import ConstructionServices from "@/pages/Construction/ConstructionServices";
import Home from "@/pages/Home/Home";
import NotFound from "@/pages/NotFound";
import StonecareLanding from "@/pages/Stonecare/StonecareLanding";
import StonecareProjects from "@/pages/Stonecare/StonecareProjects";
import StonecareServices from "@/pages/Stonecare/StonecareServices";
import TradingCatalog from "@/pages/Trading/TradingCatalog";
import TradingLanding from "@/pages/Trading/TradingLanding";
import TradingProducts from "@/pages/Trading/TradingProducts";
import { appRoutes } from "@/utils/routes";

const router = createBrowserRouter([
  {
    path: appRoutes.home,
    element: <PageLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: appRoutes.stonecare.slice(1), element: <StonecareLanding /> },
      { path: appRoutes.stonecareServices.slice(1), element: <StonecareServices /> },
      { path: appRoutes.stonecareProjects.slice(1), element: <StonecareProjects /> },
      { path: appRoutes.construction.slice(1), element: <ConstructionLanding /> },
      { path: appRoutes.constructionServices.slice(1), element: <ConstructionServices /> },
      { path: appRoutes.constructionProjects.slice(1), element: <ConstructionProjects /> },
      { path: appRoutes.trading.slice(1), element: <TradingLanding /> },
      { path: appRoutes.tradingProducts.slice(1), element: <TradingProducts /> },
      { path: appRoutes.tradingCatalog.slice(1), element: <TradingCatalog /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
