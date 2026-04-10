import { appRoutes } from "@/utils/routes";

export const technoshineHomeUrl = "/";

export const constructionRoutes = {
  home: appRoutes.construction,
  about: appRoutes.constructionAbout,
  services: appRoutes.constructionServices,
  projects: appRoutes.constructionProjects,
  contact: appRoutes.constructionContact,
} as const;

export const constructionNavLinks = [
  { name: "Home", path: constructionRoutes.home },
  { name: "About", path: constructionRoutes.about },
  { name: "Services", path: constructionRoutes.services },
  { name: "Projects", path: constructionRoutes.projects },
  { name: "Contact", path: constructionRoutes.contact },
] as const;
