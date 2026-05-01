"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Mobile-only sticky bottom CTA. Hidden on /book to avoid duplication,
 * appears once the user has scrolled past the hero on every other page.
 */
export function MobileBookBar() {
  const t = useTranslations("common");
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/book") return null;

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-[max(env(safe-area-inset-bottom),12px)] pt-3 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"
      }`}
    >
      <div className="bg-stone-900/95 backdrop-blur-xl text-stone-50 rounded-full shadow-lg shadow-stone-900/20 flex items-center justify-between pl-6 pr-2 py-2">
        <span className="text-[11px] tracking-[0.25em] uppercase text-stone-300">
          Blue View
        </span>
        <Link
          href="/book"
          className="inline-flex items-center gap-2 bg-stone-50 text-stone-900 rounded-full px-5 py-3 min-h-[44px] text-[11px] tracking-[0.25em] uppercase active:scale-95 transition-transform"
        >
          {t("bookNow")}
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
