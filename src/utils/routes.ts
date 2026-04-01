export const appRoutes = {
  home: "/",
  stonecare: "/stonecare",
  stonecareServices: "/stonecare/services",
  stonecareProjects: "/stonecare/projects",
  construction: "/construction",
  constructionServices: "/construction/services",
  constructionProjects: "/construction/projects",
  trading: "/trading",
  tradingProducts: "/trading/products",
  tradingCatalog: "/trading/catalog",
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
  return `${appRoutes.home}#${sectionId}`;
}
