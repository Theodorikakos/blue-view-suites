"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Translate amount in px at maximum scroll into view (default 120). */
  speed?: number;
  className?: string;
};

/**
 * Wraps a hero background layer and translates it on scroll for a parallax
 * effect. Uses a single rAF + IntersectionObserver to stay cheap.
 * Honours prefers-reduced-motion.
 */
export function ParallaxLayer({ children, speed = 120, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let visible = false;
    let ticking = false;

    const update = () => {
      ticking = false;
      if (!visible) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // -0.5 .. 0.5 progress as element moves through viewport
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      const y = -progress * speed;
      el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) update();
      },
      { threshold: 0 }
    );

    io.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}
    >
      {children}
    </div>
  );
}
