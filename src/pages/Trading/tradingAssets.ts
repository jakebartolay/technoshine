import techAbout from "@/assets/trading/brand/tech_about.webp";
import rollers from "@/assets/trading/products/rollers.webp";
import solarLight from "@/assets/trading/products/solar_light.webp";
import solarStud from "@/assets/trading/products/solar_stud.webp";
import bacolod from "@/assets/trading/projects/bacolod.webp";
import barmm from "@/assets/trading/projects/barmm.webp";
import cagayanDeOro from "@/assets/trading/projects/cagayan_de_oro.webp";
import cansomoroy from "@/assets/trading/projects/cansomoroy.webp";
import cebu from "@/assets/trading/projects/cebu.webp";
import compostela from "@/assets/trading/projects/compostela.webp";
import dumanjug from "@/assets/trading/projects/dumanjug.webp";
import guadalupe from "@/assets/trading/projects/guadalupe.webp";
import magallanes from "@/assets/trading/projects/magallanes.webp";
import mandaue from "@/assets/trading/projects/mandaue.webp";
import mandaueSecondary from "@/assets/trading/projects/mandaue2.webp";
import newBataan from "@/assets/trading/projects/new_bataan.webp";
import occidentalMindoro from "@/assets/trading/projects/occidental.webp";
import sanJuan from "@/assets/trading/projects/san_juan.webp";
import taytay from "@/assets/trading/projects/taytay.webp";
import valencia from "@/assets/trading/projects/valencia.webp";
import technoLogo from "@/assets/technoshine/brand/all-technoshine-pages-icon.webp";
import tradingNavbarLogo from "@/assets/technoshine/brand/technoshine-trading.webp";

export const tradingBrandAssets = {
  logo: technoLogo,
  navbarLogo: tradingNavbarLogo,
  about: techAbout,
} as const;

export const tradingProductAssets = {
  solarStud,
  rollers,
  solarLight,
} as const;

export const tradingProjectAssets = {
  bacolod,
  barmm,
  cagayanDeOro,
  cansomoroy,
  cebu,
  compostela,
  dumanjug,
  guadalupe,
  magallanes,
  mandaue,
  mandaueSecondary,
  newBataan,
  occidentalMindoro,
  sanJuan,
  taytay,
  valencia,
} as const;
