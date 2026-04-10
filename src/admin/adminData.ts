import { constructionAssets } from "@/pages/Construction/constructionAssets";
import { stonecareImageAssets } from "@/pages/Stonecare/stonecareAssets";
import { tradingBrandAssets, tradingProductAssets } from "@/pages/Trading/tradingAssets";
import { featuredProjects } from "@/data/divisions";
import { appRoutes } from "@/utils/routes";

export type AdminPageId = "home" | "trading" | "construction" | "stonecare";
export type AdminStudioStatus = "Draft" | "Ready" | "In Review";
export type AdminMediaPlacement = "home-our-work" | "stonecare-gallery" | "page-media";

export type AdminPortfolioMeta = {
  title: string;
  year: string;
  description: string;
  highlights: string[];
  category: string;
  categoryBadgeClass: string;
  categorySolidClass: string;
};

export type AdminGalleryMeta = {
  title: string;
  category: string;
  description: string;
};

export type AdminStudioDraft = {
  id: AdminPageId;
  label: string;
  route: string;
  focus: string;
  owner: string;
  status: AdminStudioStatus;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  updatedAt: string;
};

export type AdminMediaItem = {
  id: string;
  pageId: AdminPageId;
  name: string;
  src: string;
  slot: string;
  source: "existing" | "upload";
  sizeLabel: string;
  placement: AdminMediaPlacement;
  portfolioMeta?: AdminPortfolioMeta;
  galleryMeta?: AdminGalleryMeta;
};

export const adminPageOrder: AdminPageId[] = ["home", "trading", "construction", "stonecare"];

export const adminStudioSeeds: AdminStudioDraft[] = [
  {
    id: "home",
    label: "Home",
    route: appRoutes.home,
    focus: "Landing page and primary CTA flow",
    owner: "Marketing",
    status: "In Review",
    eyebrow: "Built Across Divisions",
    title: "One command center for construction, trading, and premium surface solutions.",
    description:
      "Use the homepage to clarify the whole brand fast, keep the first message tight, and push visitors into the right division immediately.",
    primaryCta: "Explore Divisions",
    secondaryCta: "Request Consultation",
    updatedAt: "Updated today",
  },
  {
    id: "trading",
    label: "Trading",
    route: appRoutes.trading,
    focus: "Products, gallery, and quote funnel",
    owner: "Sales",
    status: "Ready",
    eyebrow: "Project-Ready Product Lines",
    title: "Road safety systems and industrial barrier products backed by dependable supply.",
    description:
      "Keep this page direct and spec-friendly so buyers can review products quickly and move into quote requests without friction.",
    primaryCta: "Browse Products",
    secondaryCta: "Get a Quote",
    updatedAt: "Updated today",
  },
  {
    id: "construction",
    label: "Construction",
    route: appRoutes.construction,
    focus: "Projects, service trust, and fit-out work",
    owner: "Operations",
    status: "Draft",
    eyebrow: "Built With Discipline",
    title: "Construction delivery for modular builds, renovations, and specialized finishing works.",
    description:
      "Position construction as a capability-led division with strong project execution, modular work, and a sharper premium presentation.",
    primaryCta: "View Services",
    secondaryCta: "Book a Consultation",
    updatedAt: "Updated today",
  },
  {
    id: "stonecare",
    label: "Stonecare",
    route: appRoutes.stonecare,
    focus: "Before and after visuals with premium service story",
    owner: "Service Team",
    status: "Ready",
    eyebrow: "Premium Surface Care",
    title: "Stone restoration and maintenance presented through strong visual proof.",
    description:
      "This page works best when image quality is front and center, especially before and after proof, signature projects, and trust-building service details.",
    primaryCta: "View Services",
    secondaryCta: "See Projects",
    updatedAt: "Updated today",
  },
];

const stonecareGallerySeeds: AdminMediaItem[] = [
  {
    id: "stonecare-gallery-1",
    pageId: "stonecare",
    name: "Marble Floor",
    src: stonecareImageAssets.gallery.gallery1,
    slot: "Project Gallery",
    source: "existing",
    sizeLabel: "Existing asset",
    placement: "stonecare-gallery",
    galleryMeta: {
      title: "Marble Floor",
      category: "Polishing",
      description:
        "Mirror-finish restoration of white Carrara marble with natural veining preserved.",
    },
  },
  {
    id: "stonecare-gallery-2",
    pageId: "stonecare",
    name: "Hallway Restoration",
    src: stonecareImageAssets.gallery.gallery2,
    slot: "Project Gallery",
    source: "existing",
    sizeLabel: "Existing asset",
    placement: "stonecare-gallery",
    galleryMeta: {
      title: "Hallway Restoration",
      category: "Restoration",
      description:
        "Full travertine wall and floor restoration in a hallway environment.",
    },
  },
  {
    id: "stonecare-gallery-3",
    pageId: "stonecare",
    name: "Hotel Lobby",
    src: stonecareImageAssets.gallery.gallery3,
    slot: "Project Gallery",
    source: "existing",
    sizeLabel: "Existing asset",
    placement: "stonecare-gallery",
    galleryMeta: {
      title: "Hotel Lobby",
      category: "Polishing",
      description:
        "Italian marble columns and grand lobby floor brought back to showroom condition.",
    },
  },
  {
    id: "stonecare-gallery-4",
    pageId: "stonecare",
    name: "Floor Transformation",
    src: stonecareImageAssets.gallery.gallery4,
    slot: "Project Gallery",
    source: "existing",
    sizeLabel: "Existing asset",
    placement: "stonecare-gallery",
    galleryMeta: {
      title: "Floor Transformation",
      category: "Repair",
      description:
        "Cracked, heavily etched stone surface restored to a flawless mirror polish.",
    },
  },
  {
    id: "stonecare-gallery-5",
    pageId: "stonecare",
    name: "Black Marble Countertop",
    src: stonecareImageAssets.gallery.gallery5,
    slot: "Project Gallery",
    source: "existing",
    sizeLabel: "Existing asset",
    placement: "stonecare-gallery",
    galleryMeta: {
      title: "Black Marble Countertop",
      category: "Sealing",
      description:
        "Deep black marble countertop sealed and polished to reveal gold veining.",
    },
  },
  {
    id: "stonecare-gallery-6",
    pageId: "stonecare",
    name: "Marble Staircase",
    src: stonecareImageAssets.gallery.gallery6,
    slot: "Project Gallery",
    source: "existing",
    sizeLabel: "Existing asset",
    placement: "stonecare-gallery",
    galleryMeta: {
      title: "Marble Staircase",
      category: "Restoration",
      description:
        "Antique marble staircase honed and re-polished to its original elegance.",
    },
  },
];

export const adminInitialMediaLibrary: Record<AdminPageId, AdminMediaItem[]> = {
  home: featuredProjects.map((project, index) => ({
    id: `home-our-work-${index}`,
    pageId: "home" as const,
    name: project.title,
    src: project.image,
    slot: "Our Work",
    source: "existing" as const,
    sizeLabel: "Existing asset",
    placement: "home-our-work" as const,
    portfolioMeta: {
      title: project.title,
      year: project.year,
      description: project.description,
      highlights: project.highlights,
      category: project.category,
      categoryBadgeClass: project.categoryBadgeClass,
      categorySolidClass: project.categorySolidClass,
    },
  })),
  trading: [
    {
      id: "trading-about",
      pageId: "trading",
      name: "Trading About Visual",
      src: tradingBrandAssets.about,
      slot: "Page Media",
      source: "existing",
      sizeLabel: "Existing asset",
      placement: "page-media",
    },
    {
      id: "trading-stud",
      pageId: "trading",
      name: "Solar Road Stud",
      src: tradingProductAssets.solarStud,
      slot: "Page Media",
      source: "existing",
      sizeLabel: "Existing asset",
      placement: "page-media",
    },
    {
      id: "trading-roller",
      pageId: "trading",
      name: "Steel Roller Guardrail",
      src: tradingProductAssets.rollers,
      slot: "Page Media",
      source: "existing",
      sizeLabel: "Existing asset",
      placement: "page-media",
    },
  ],
  construction: [
    {
      id: "construction-hero",
      pageId: "construction",
      name: "Construction Hero",
      src: constructionAssets.hero,
      slot: "Page Media",
      source: "existing",
      sizeLabel: "Existing asset",
      placement: "page-media",
    },
    {
      id: "construction-interior",
      pageId: "construction",
      name: "Interior Renovation",
      src: constructionAssets.interior,
      slot: "Page Media",
      source: "existing",
      sizeLabel: "Existing asset",
      placement: "page-media",
    },
    {
      id: "construction-residential",
      pageId: "construction",
      name: "Residential Renovation",
      src: constructionAssets.residential,
      slot: "Page Media",
      source: "existing",
      sizeLabel: "Existing asset",
      placement: "page-media",
    },
  ],
  stonecare: stonecareGallerySeeds,
};
