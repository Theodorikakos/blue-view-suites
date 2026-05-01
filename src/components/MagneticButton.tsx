"use client";

import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Pixel strength of the magnetic pull (default 14). */
  strength?: number;
  /** Distance in px from the element edge where pull starts (default 120). */
  radius?: number;
  className?: string;
};

/**
 * Wraps a child in a span that subtly translates toward the cursor when nearby.
 * Tasteful, respects reduced-motion, falls back to no movement on touch.
 */
export function MagneticButton({ children, strength = 14, radius = 120, className = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist > radius) {
      el.style.transform = "translate3d(0,0,0)";
      return;
    }
    const pull = (1 - dist / radius) * strength;
    const angle = Math.atan2(dy, dx);
    el.style.transform = `translate3d(${Math.cos(angle) * pull}px, ${Math.sin(angle) * pull}px, 0)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate3d(0,0,0)";
  };

  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-block ${className}`}
      style={{ transition: "transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
    >
      {children}
    </span>
  );
}
