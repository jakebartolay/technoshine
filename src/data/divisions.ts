import { divisionImages, projectImages } from "@/assets/siteAssets";
import { appRoutes } from "@/utils/routes";

export type DivisionKey = "stonecare" | "construction" | "trading";

type Theme = {
  mutedBadge: string;
  solidBadge: string;
  button: string;
  lightSurface: string;
  lightBorder: string;
  lightText: string;
  focusRing: string;
};

export type DivisionService = {
  title: string;
  description: string;
  bullets: string[];
};

export type DivisionShowcaseItem = {
  title: string;
  year: string;
  image: string;
  description: string;
  highlights: string[];
};

export type DivisionData = {
  key: DivisionKey;
  name: string;
  route: string;
  detailsRoute: string;
  showcaseRoute: string;
  documentTitle: string;
  detailsLabel: string;
  showcaseLabel: string;
  image: string;
  tagline: string;
  shortDescription: string;
  heroDescription: string;
  features: string[];
  theme: Theme;
  services: DivisionService[];
  showcaseItems: DivisionShowcaseItem[];
};

export const divisions: Record<DivisionKey, DivisionData> = {
  stonecare: {
    key: "stonecare",
    name: "StoneCare",
    route: appRoutes.stonecare,
    detailsRoute: appRoutes.stonecareServices,
    showcaseRoute: appRoutes.stonecareProjects,
    documentTitle: "TECHNOSHINE | Stonecare and Restoration Experts",
    detailsLabel: "Services",
    showcaseLabel: "Projects",
    image: divisionImages.stonecare,
    tagline: "Premium care for stone, tile, and surface finishes.",
    shortDescription:
      "Premium stone care, restoration, and maintenance for residential and commercial properties.",
    heroDescription:
      "StoneCare focuses on restoring the appearance and performance of stone, marble, and tiled surfaces with dependable methods built for long-term durability.",
    features: [
      "Surface Restoration",
      "Stone Polishing",
      "Sealing and Protection",
      "Maintenance Plans",
    ],
    theme: {
      mutedBadge: "bg-orange-100 text-orange-700",
      solidBadge: "bg-orange-500 text-white",
      button: "bg-orange-500 hover:bg-orange-600",
      lightSurface: "bg-orange-50",
      lightBorder: "border-orange-100",
      lightText: "text-orange-700",
      focusRing: "focus:ring-orange-400",
    },
    services: [
      {
        title: "Restoration and Refinishing",
        description:
          "Bringing worn stone and tile back to a polished, well-protected finish.",
        bullets: ["Grinding and honing", "Scratch removal", "High-gloss polishing"],
      },
      {
        title: "Sealing and Surface Protection",
        description:
          "Protective treatment plans built around traffic level, finish, and material type.",
        bullets: ["Penetrating sealers", "Waterproofing support", "Protective coatings"],
      },
      {
        title: "Routine Maintenance Programs",
        description:
          "Scheduled upkeep to preserve appearance, slip resistance, and long-term value.",
        bullets: ["Preventive cleaning", "Condition checks", "Maintenance planning"],
      },
    ],
    showcaseItems: [
      {
        title: "Marble Restoration - NUSTAR Resort and Casino",
        year: "2024",
        image: projectImages.nustar,
        description:
          "Full marble floor restoration focused on polishing, resealing, and long-term protection for a premium hospitality environment.",
        highlights: [
          "Surface polishing",
          "Deep cleaning",
          "Sealing and protection",
          "Crack repair",
        ],
      },
      {
        title: "Commercial Walk Pathway - Molito Lifestyle Center",
        year: "2024",
        image: projectImages.molito,
        description:
          "Large-scale tile sealing work for over 3,000 square meters of high-traffic commercial flooring.",
        highlights: [
          "3,000 sqm coverage",
          "Anti-slip treatment",
          "Commercial-grade sealant",
          "Weekend completion",
        ],
      },
    ],
  },
  construction: {
    key: "construction",
    name: "Construction",
    route: appRoutes.construction,
    detailsRoute: appRoutes.constructionServices,
    showcaseRoute: appRoutes.constructionProjects,
    documentTitle: "TECHNOSHINE | Construction",
    detailsLabel: "Services",
    showcaseLabel: "Projects",
    image: divisionImages.construction,
    tagline: "Planning, building, and delivery from start to finish.",
    shortDescription:
      "End-to-end construction services from planning and design to execution and project management.",
    heroDescription:
      "Construction delivers organized project execution for commercial, institutional, and renovation work with practical coordination from planning through turnover.",
    features: [
      "Residential Build",
      "Commercial Projects",
      "Renovation",
      "Project Management",
    ],
    theme: {
      mutedBadge: "bg-yellow-100 text-yellow-700",
      solidBadge: "bg-yellow-500 text-white",
      button: "bg-yellow-500 hover:bg-yellow-600",
      lightSurface: "bg-yellow-50",
      lightBorder: "border-yellow-100",
      lightText: "text-yellow-700",
      focusRing: "focus:ring-yellow-400",
    },
    services: [
      {
        title: "General Construction",
        description:
          "Execution support for institutional, commercial, and specialty build-outs.",
        bullets: ["Structural works", "Site coordination", "Turnover readiness"],
      },
      {
        title: "Fit-Out and Renovation",
        description:
          "Interior and functional upgrades aligned with business, retail, and hospitality needs.",
        bullets: ["Partitioning", "Flooring", "Interior finishing"],
      },
      {
        title: "Project Supervision",
        description:
          "Schedule, quality, and subcontractor oversight to keep the build moving with less friction.",
        bullets: ["Timeline tracking", "Procurement support", "Quality assurance"],
      },
    ],
    showcaseItems: [
      {
        title: "Hospital Projects - DPWH Contract",
        year: "2024",
        image: projectImages.dpwh,
        description:
          "Construction of a 12-unit hospital facility delivered with complete structural, electrical, and finishing scope.",
        highlights: [
          "12 rooms",
          "Structural build",
          "Electrical and finishing",
          "On-time delivery",
        ],
      },
      {
        title: "Business Barbershop - Cubao",
        year: "2022",
        image: projectImages.barber,
        description:
          "Complete barbershop build-out covering layout development, flooring, partitions, and MEP coordination.",
        highlights: [
          "Fit-out works",
          "Electrical works",
          "MEP coordination",
          "Interior finishing",
        ],
      },
    ],
  },
  trading: {
    key: "trading",
    name: "Trading",
    route: appRoutes.trading,
    detailsRoute: appRoutes.tradingProducts,
    showcaseRoute: appRoutes.tradingCatalog,
    documentTitle: "TECHNOSHINE | Trading International",
    detailsLabel: "Products",
    showcaseLabel: "Catalog",
    image: divisionImages.trading,
    tagline: "Strategic sourcing, supply, and distribution support.",
    shortDescription:
      "Strategic trading solutions with competitive sourcing, supply chain management, and distribution.",
    heroDescription:
      "Trading supports clients with product sourcing, supply coordination, and install-ready materials for operational and infrastructure needs across the Philippines.",
    features: [
      "Product Sourcing",
      "Supply Chain",
      "Distribution",
      "Import and Export",
    ],
    theme: {
      mutedBadge: "bg-amber-100 text-amber-700",
      solidBadge: "bg-amber-500 text-white",
      button: "bg-amber-500 hover:bg-amber-600",
      lightSurface: "bg-amber-50",
      lightBorder: "border-amber-100",
      lightText: "text-amber-700",
      focusRing: "focus:ring-amber-400",
    },
    services: [
      {
        title: "Industrial Product Sourcing",
        description:
          "Connecting clients to dependable materials and equipment suited to project requirements.",
        bullets: ["Vendor coordination", "Competitive sourcing", "Specification matching"],
      },
      {
        title: "Supply and Distribution",
        description:
          "Moving products from procurement to delivery with visibility and practical coordination.",
        bullets: ["Order consolidation", "Delivery scheduling", "Regional fulfillment"],
      },
      {
        title: "Installation-Ready Packages",
        description:
          "Combining supply scope with site-readiness support for smoother implementation.",
        bullets: ["Material bundles", "Logistics support", "Quality checks"],
      },
    ],
    showcaseItems: [
      {
        title: "Roller Barrier Supply and Installation - Davao de Oro",
        year: "2023",
        image: projectImages.roller,
        description:
          "Wholesale supply and installation support for roller barriers at a regional distribution center.",
        highlights: [
          "Site assessment",
          "Barrier installation",
          "Quality assurance",
          "Regional logistics",
        ],
      },
      {
        title: "Stud Supply and Installation - Davao de Oro",
        year: "2023",
        image: projectImages.stud,
        description:
          "Coordinated sourcing and delivery of stud materials with installation support for a regional build.",
        highlights: [
          "Stud supply",
          "Installation support",
          "Procurement coordination",
          "Quality assurance",
        ],
      },
    ],
  },
};

export const divisionList = Object.values(divisions);

export const featuredProjects = divisionList.flatMap((division) =>
  division.showcaseItems.map((item) => ({
    ...item,
    category: division.name,
    categoryKey: division.key,
    categoryBadgeClass: division.theme.mutedBadge,
    categorySolidClass: division.theme.solidBadge,
  })),
);

export function getDivisionByPathname(pathname: string): DivisionData | null {
  const matchedDivision = Object.values(divisions).find(
    (division) => pathname === division.route || pathname.startsWith(`${division.route}/`),
  );

  return matchedDivision ?? null;
}
