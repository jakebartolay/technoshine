import constructionDivisionImage from "@/assets/construction/brand/construction.png";
import barberProject from "@/assets/construction/projects/barber.png";
import dpwhProject from "@/assets/construction/projects/dpwh.png";
import stonecareDivisionImage from "@/assets/stonecare/images/client-images/gallery-1.jpg";
import molitoProject from "@/assets/stonecare/images/client-images/gallery-2.jpg";
import nustarProject from "@/assets/stonecare/images/client-images/gallery-3.jpg";
import tradingDivisionImage from "@/assets/trading/brand/trading.png";
import rollerProject from "@/assets/trading/projects/roller.png";
import studProject from "@/assets/trading/projects/stud.png";
import heroBackground from "@/assets/technoshine/backgrounds/herobg.jpg";
import footerLogo from "@/assets/technoshine/brand/technoshine-icon-footer.png";
import fallbackAvatar from "@/assets/technoshine/brand/all-technoshine-pages-icon.png";
import navLogoDark from "@/assets/technoshine/brand/technoshine-black.png";
import navLogoLight from "@/assets/technoshine/brand/technoshine-white.png";
import richImage from "@/assets/technoshine/teams/dj.png";
import erwinImage from "@/assets/technoshine/teams/erwin.png";
import markImage from "@/assets/technoshine/teams/mark.png";
import maryLouImage from "@/assets/technoshine/teams/mary-lou.png";
import monicaImage from "@/assets/technoshine/teams/monica.png";

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
