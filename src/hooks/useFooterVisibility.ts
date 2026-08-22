import { useEffect, useState } from "react";

function getFooterVisibility() {
  const footers = Array.from(document.querySelectorAll<HTMLElement>("[data-app-footer='true']"));

  return footers.some((footer) => {
    const rect = footer.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  });
}

export function useFooterVisibility() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let frameId = 0;

    const updateFooterVisibility = () => {
      frameId = 0;
      const nextVisibility = getFooterVisibility();
      setIsFooterVisible((currentVisibility) =>
        currentVisibility === nextVisibility ? currentVisibility : nextVisibility,
      );
    };

    const scheduleUpdate = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateFooterVisibility);
    };

    const mutationObserver =
      typeof MutationObserver === "undefined" ? null : new MutationObserver(scheduleUpdate);

    mutationObserver?.observe(document.body, {
      childList: true,
      subtree: true,
    });

    updateFooterVisibility();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      mutationObserver?.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return isFooterVisible;
}
