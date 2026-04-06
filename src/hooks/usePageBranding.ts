import { useEffect } from "react";

import technoshineIcon from "@/assets/technoshine/brand/all-technoshine-pages-icon.png";

export type PageBrandKey = "technoshine" | "stonecare" | "construction" | "trading";

const pageBrandIcons: Record<PageBrandKey, string> = {
  technoshine: technoshineIcon,
  stonecare: technoshineIcon,
  construction: technoshineIcon,
  trading: technoshineIcon,
};

function upsertLink(rel: string, href: string) {
  let link = document.head.querySelector<HTMLLinkElement>(`link[rel='${rel}']`);

  if (!link) {
    link = document.createElement("link");
    link.rel = rel;
    document.head.appendChild(link);
  }

  link.type = "image/png";
  link.href = href;
}

export function usePageBranding(title: string, brandKey: PageBrandKey) {
  useEffect(() => {
    document.title = title;

    const iconHref = pageBrandIcons[brandKey];

    upsertLink("icon", iconHref);
    upsertLink("shortcut icon", iconHref);
    upsertLink("apple-touch-icon", iconHref);
  }, [title, brandKey]);
}
