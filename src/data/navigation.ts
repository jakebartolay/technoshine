import { divisionList } from "@/data/divisions";
import { buildHomeHashRoute, type HomeSectionId } from "@/utils/routes";

export const homeNavigationLinks: Array<{ label: string; sectionId: HomeSectionId }> = [
  { label: "Home", sectionId: "home" },
  { label: "About", sectionId: "about" },
  { label: "Team", sectionId: "team" },
  { label: "Services", sectionId: "services" },
  { label: "Portfolio", sectionId: "portfolio" },
  { label: "Contact", sectionId: "contact" },
];

export const sectionNavigationLinks = homeNavigationLinks.map((link) => ({
  ...link,
  to: buildHomeHashRoute(link.sectionId),
}));

export const divisionNavigationLinks = divisionList.map((division) => ({
  label: division.name,
  to: division.route,
}));
