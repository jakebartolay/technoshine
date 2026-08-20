import constructionDivisionImage from "@/assets/construction/brand/construction.webp";
import barberProject from "@/assets/construction/projects/barber.webp";
import dpwhProject from "@/assets/construction/projects/dpwh.webp";
import stonecareDivisionImage from "@/assets/stonecare/images/client-images/gallery-1.webp";
import molitoProject from "@/assets/stonecare/images/client-images/gallery-2.webp";
import nustarProject from "@/assets/stonecare/images/client-images/gallery-3.webp";
import tradingDivisionImage from "@/assets/trading/brand/trading.webp";
import rollerProject from "@/assets/trading/projects/roller.webp";
import studProject from "@/assets/trading/projects/stud.webp";
import heroBackground from "@/assets/technoshine/backgrounds/herobg.webp";
import footerLogo from "@/assets/technoshine/brand/technoshine-icon-footer.webp";
import fallbackAvatar from "@/assets/technoshine/brand/all-technoshine-pages-icon.webp";
import navLogoDark from "@/assets/technoshine/brand/technoshine-black.webp";
import navLogoLight from "@/assets/technoshine/brand/technoshine-white.webp";
import richImage from "@/assets/technoshine/teams/dj.webp";
import erwinImage from "@/assets/technoshine/teams/erwin.webp";
import markImage from "@/assets/technoshine/teams/mark.webp";
import maryLouImage from "@/assets/technoshine/teams/mary-lou.webp";
import monicaImage from "@/assets/technoshine/teams/monica.webp";

export const brandAssets = {
  navLogoLight,
  navLogoDark,
  footerLogo,
  fallbackAvatar,
} as const;

export const divisionImages = {
  stonecare: stonecareDivisionImage,
  construction: constructionDivisionImage,
  trading: tradingDivisionImage,
} as const;

export const projectImages = {
  nustar: nustarProject,
  molito: molitoProject,
  roller: rollerProject,
  stud: studProject,
  dpwh: dpwhProject,
  barber: barberProject,
} as const;

export const teamImages = {
  erwin: erwinImage,
  rich: richImage,
  maryLou: maryLouImage,
  mark: markImage,
  monica: monicaImage,
} as const;

export const backgroundAssets = {
  hero: heroBackground,
} as const;
