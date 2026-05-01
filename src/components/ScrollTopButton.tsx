"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Mobile-only floating "back to top" button. Appears once the user
 * has scrolled past ~600px. Sits above the MobileBookBar via bottom offset.
 */
export function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = window.scrollY || window.pageYOffset;
    if (reduce || start === 0) {
      window.scrollTo(0, 0);
      return;
    }
    // Manual rAF tween — iOS Safari's native smooth scroll is unreliable.
    const duration = Math.min(700, Math.max(300, start * 0.6));
    const startTime = performance.now();
    // easeOutCubic
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const step = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      window.scrollTo(0, Math.round(start * (1 - ease(t))));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`md:hidden fixed right-4 z-40 inline-flex items-center justify-center w-11 h-11 rounded-full bg-stone-900/90 text-stone-50 backdrop-blur-md shadow-lg shadow-stone-900/20 active:scale-95 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
      }`}
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 76px)" }}
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}
