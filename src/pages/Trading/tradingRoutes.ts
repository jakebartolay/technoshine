import { appRoutes, buildTradingProductRoute } from "@/utils/routes";

export const technoshineHomeUrl = "/";

export const tradingRoutes = {
  home: appRoutes.trading,
  about: appRoutes.tradingAbout,
  products: appRoutes.tradingProducts,
  product: buildTradingProductRoute,
  gallery: appRoutes.tradingCatalog,
  galleryAlias: appRoutes.tradingCases,
  faq: appRoutes.tradingFaq,
  contact: appRoutes.tradingContact,
} as const;

export const tradingNavLinks = [
  { name: "Home", path: tradingRoutes.home },
  { name: "About", path: tradingRoutes.about },
  { name: "Products", path: tradingRoutes.products },
  { name: "Gallery", path: tradingRoutes.gallery },
  { name: "FAQ", path: tradingRoutes.faq },
  { name: "Contact", path: tradingRoutes.contact },
] as const;
