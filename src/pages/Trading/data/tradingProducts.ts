import { tradingProductAssets } from "@/pages/Trading/tradingAssets";
import type { TradingProduct } from "@/pages/Trading/types";

export const tradingProducts: TradingProduct[] = [
  {
    slug: "solar-road-stud",
    name: "Solar Road Stud",
    category: "Road Safety",
    image: tradingProductAssets.solarStud,
    description:
      "Internally illuminated solar pavement marker designed to improve road visibility and safety at night.",
    details:
      "This solar road stud uses built-in LED lighting powered by solar energy, providing clear lane guidance even in low-visibility conditions.",
    specs: [
      "Solar-powered LED",
      "High visibility at night",
      "Weather-resistant design",
      "Long lifespan",
    ],
    gallery: [tradingProductAssets.solarStud],
  },
  {
    slug: "steel-roller-guardrail",
    name: "Steel Roller Guardrail",
    category: "Road Safety",
    image: tradingProductAssets.rollers,
    description:
      "Shock-absorbing guardrail system designed to reduce impact damage and improve road safety.",
    details:
      "The steel roller guardrail features rotating rollers that absorb collision energy, minimizing vehicle damage and enhancing driver safety.",
    specs: [
      "Shock absorption system",
      "Rotating roller design",
      "Durable steel construction",
      "High-impact resistance",
    ],
    gallery: [tradingProductAssets.rollers],
  },
  {
    slug: "integrated-solar-streetlight",
    name: "Integrated Solar Streetlight",
    category: "Lighting",
    image: tradingProductAssets.solarLight,
    description:
      "All-in-one solar-powered street lighting solution with high-efficiency LED output.",
    details:
      "This integrated streetlight combines a solar panel, battery, and LED lamp in one unit, making it easy to install and energy-efficient.",
    specs: [
      "150W LED lamp",
      "Monocrystalline solar panel",
      "Lithium-ion battery",
      "IP65 waterproof rating",
      "40000-60000 hours lifespan",
    ],
    gallery: [tradingProductAssets.solarLight],
  },
];

export function getTradingProductBySlug(slug?: string) {
  return tradingProducts.find((product) => product.slug === slug);
}
