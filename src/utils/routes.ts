export const appRoutes = {
  home: "/",
  careers: "/careers",
  stonecare: "/stonecare",
  stonecareServices: "/stonecare/services",
  stonecareProjects: "/stonecare/projects",
  construction: "/construction",
  constructionAbout: "/construction/about",
  constructionServices: "/construction/services",
  constructionProjects: "/construction/projects",
  constructionContact: "/construction/contact",
  trading: "/trading",
  tradingAbout: "/trading/about",
  tradingProducts: "/trading/products",
  tradingCatalog: "/trading/catalog",
  tradingCases: "/trading/cases",
  tradingFaq: "/trading/faq",
  tradingContact: "/trading/contact",
  admin: "/admin",
  adminStudio: "/admin/studio",
  adminLibrary: "/admin/library",
  adminSettings: "/admin/settings",
} as const;

export const homeSectionIds = [
  "home",
  "about",
  "team",
  "services",
  "portfolio",
  "contact",
] as const;

export type HomeSectionId = (typeof homeSectionIds)[number];

export function buildHomeHashRoute(sectionId: HomeSectionId) {
  if (sectionId === "home") {
    return appRoutes.home;
  }

  return `${appRoutes.home}#${sectionId}`;
}

export function buildTradingProductRoute(slug: string) {
  return `${appRoutes.tradingProducts}/${slug}`;
}
