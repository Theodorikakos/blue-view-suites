"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "@/i18n/navigation";

/**
 * Wraps page content with a soft fade+slide entrance that re-fires on every
 * route change. Place inside the locale layout's <main>.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [stage, setStage] = useState<"in" | "out">("out");
  const prevPath = useRef(pathname);

  useEffect(() => {
    setStage("out");
    const id = requestAnimationFrame(() => setStage("in"));
    prevPath.current = pathname;
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <div
      key={pathname}
      style={{
        opacity: stage === "in" ? 1 : 0,
        transform: stage === "in" ? "translate3d(0,0,0)" : "translate3d(0,12px,0)",
        transition:
          "opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
