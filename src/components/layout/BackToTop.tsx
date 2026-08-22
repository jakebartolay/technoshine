import { useEffect, useState } from "react";

import { useFooterVisibility } from "@/hooks/useFooterVisibility";
import { scrollToTop } from "@/utils/scroll";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const isFooterVisible = useFooterVisibility();
  const showButton = visible && !isFooterVisible;

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollToTop = () => {
    if (scrolling) {
      return;
    }

    setScrolling(true);
    scrollToTop();
    window.setTimeout(() => setScrolling(false), 900);
  };

  return (
    <button
      onClick={handleScrollToTop}
      aria-label="Back to top"
      className={`group fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white shadow-[0_16px_38px_rgba(249,115,22,0.34)] transition-all duration-300 sm:bottom-8 sm:right-8 sm:h-14 sm:w-14 ${
        showButton ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      } hover:scale-105 hover:bg-orange-600`}
    >
      {!scrolling ? (
        <>
          <span className="wave-pulse pointer-events-none absolute inset-0 rounded-full border border-orange-300/70" />
          <span className="wave-pulse wave-pulse-delay pointer-events-none absolute inset-0 rounded-full border border-orange-200/55" />
          <span className="pointer-events-none absolute inset-[5px] rounded-full bg-orange-400/30 blur-md transition-opacity duration-300 group-hover:opacity-90 sm:inset-[6px]" />
        </>
      ) : null}

      {scrolling ? (
        <svg className="h-4 w-4 animate-spin sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ) : (
        <svg className="relative z-10 h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
        </svg>
      )}
    </button>
  );
}
