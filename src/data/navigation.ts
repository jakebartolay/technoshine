import { divisionList } from "@/data/divisions";
import { appRoutes, buildHomeHashRoute, type HomeSectionId } from "@/utils/routes";

export type MainNavigationLink =
  | {
      label: string;
      type: "section";
      sectionId: HomeSectionId;
    }
  | {
      label: string;
      type: "route";
      to: string;
    };

export const mainNavigationLinks: MainNavigationLink[] = [
  { label: "Home", type: "section", sectionId: "home" },
  { label: "About", type: "section", sectionId: "about" },
  { label: "Team", type: "section", sectionId: "team" },
  { label: "Services", type: "section", sectionId: "services" },
  { label: "Portfolio", type: "section", sectionId: "portfolio" },
  { label: "Contact", type: "section", sectionId: "contact" },
];

export const sectionNavigationLinks = mainNavigationLinks.flatMap((link) =>
  link.type === "section"
    ? [
        {
          ...link,
          to: buildHomeHashRoute(link.sectionId),
        },
      ]
    : [],
);

export const divisionNavigationLinks = divisionList.map((division) => ({
  label: division.name,
  to: division.route,
}));
