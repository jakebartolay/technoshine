import { Building2, Gem, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";

import type { DivisionKey } from "@/data/divisions";

type BrandIconMeta = {
  icon: LucideIcon;
  iconClassName: string;
  surfaceClassName: string;
};

export const homeBrandIconMeta: Record<DivisionKey | "technoshine", BrandIconMeta> = {
  technoshine: {
    icon: Sparkles,
    iconClassName: "text-orange-600",
    surfaceClassName: "bg-orange-100",
  },
  stonecare: {
    icon: Gem,
    iconClassName: "text-stone-700",
    surfaceClassName: "bg-stone-100",
  },
  construction: {
    icon: Building2,
    iconClassName: "text-amber-700",
    surfaceClassName: "bg-amber-100",
  },
  trading: {
    icon: ShieldCheck,
    iconClassName: "text-sky-700",
    surfaceClassName: "bg-sky-100",
  },
};
