import { constructionAssets } from "@/pages/Construction/constructionAssets";
import type { ConstructionProject } from "@/pages/Construction/constructionTypes";

export const constructionProjects: ConstructionProject[] = [
  {
    title: "Interior Renovation",
    category: "Renovation",
    scope: "Finishing and Installation",
    image: constructionAssets.interior,
  },
  {
    title: "Institutional Renovation",
    category: "Renovation",
    scope: "Window Replacement and Glass Installation",
    image: constructionAssets.construct1,
  },
  {
    title: "Residential Renovation",
    category: "Residential",
    scope: "Structural and Interior Finishing",
    image: constructionAssets.residential,
  },
  {
    title: "Commercial Renovation",
    category: "Commercial",
    scope: "Structural and Interior Finishing",
    image: constructionAssets.construct2,
  },
  {
    title: "Commercial Interior Fit-Out",
    category: "Fit-Out",
    scope: "Construction and Finishing",
    image: constructionAssets.residential2,
  },
  {
    title: "Architectural Lighting Fixtures",
    category: "Supply and Installation",
    scope: "Architectural Lighting Fixtures",
    image: constructionAssets.supplyInstall,
  },
  {
    title: "Las Pinas Modular Project",
    category: "Modular Construction",
    scope: "Prefabrication and Modular Construction",
    image: constructionAssets.lasPinas,
  },
  {
    title: "Bataan Modular Project",
    category: "Modular Construction",
    scope: "Prefabrication and Modular Construction",
    image: constructionAssets.bataan,
  },
  {
    title: "Camp Olivia Modular Project",
    category: "Modular Construction",
    scope: "Prefabrication and Modular Construction",
    image: constructionAssets.campOlivia,
  },
  {
    title: "Davao Modular Project",
    category: "Modular Construction",
    scope: "Prefabrication and Modular Construction",
    image: constructionAssets.davao,
  },
  {
    title: "Lung Center Modular Project",
    category: "Modular Construction",
    scope: "Prefabrication and Modular Construction",
    image: constructionAssets.lungCenter,
  },
  {
    title: "Mandaluyong Modular Project",
    category: "Modular Construction",
    scope: "Prefabrication and Modular Construction",
    image: constructionAssets.mandaluyong,
  },
  {
    title: "Commercial Floor Polishing",
    category: "Restoration",
    scope: "Floor Polishing",
    image: constructionAssets.commercialFloor,
  },
  {
    title: "Countertop Polishing",
    category: "Restoration",
    scope: "Countertop Polishing",
    image: constructionAssets.commercialCounter,
  },
];
