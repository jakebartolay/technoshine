export function scrollToHash(hash: string, behavior: ScrollBehavior = "smooth") {
  if (typeof window === "undefined") {
    return;
  }

  const normalizedHash = hash.replace("#", "");

  if (!normalizedHash || normalizedHash === "home") {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  const element = document.getElementById(normalizedHash);

  if (element) {
    const navbar = document.querySelector<HTMLElement>("[data-app-navbar-shell='true']");
    const navbarHeight = navbar?.offsetHeight ?? 96;
    const sectionOffset = Number(element.getAttribute("data-scroll-offset") ?? "0");
    const sectionGap = Number.isNaN(sectionOffset) ? 0 : sectionOffset;
    const targetTop = element.offsetTop - navbarHeight - sectionGap;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior,
    });
  }
}

export function scrollToTop(behavior: ScrollBehavior = "smooth") {
  if (typeof window === "undefined") {
    return;
  }

  window.scrollTo({ top: 0, behavior });
}
