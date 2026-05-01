"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const links = [
    { href: "/suites", label: t("suites") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  const otherLocale = locale === "en" ? "el" : "en";
  const hasDarkHero = ["/", "/suites", "/about", "/contact"].includes(pathname);
  const showLight = !scrolled && hasDarkHero;

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-stone-50/95 backdrop-blur-xl"
          : hasDarkHero
          ? "bg-transparent"
          : "bg-stone-50/95 backdrop-blur-xl"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo — mark + serif wordmark */}
        <Link
          href="/"
          aria-label="Blue View Suites — Home"
          className={`group inline-flex items-center gap-2.5 transition-colors duration-500 ${
            showLight ? "text-white" : "text-stone-900"
          }`}
        >
          <svg
            viewBox="0 0 64 64"
            aria-hidden="true"
            className="w-6 h-6 md:w-7 md:h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="32" cy="24" r="9" />
            <path d="M6 42c4 0 4-3 8-3s4 3 8 3 4-3 8-3 4 3 8 3 4-3 8-3 4 3 8 3" />
            <path d="M6 52c4 0 4-3 8-3s4 3 8 3 4-3 8-3 4 3 8 3 4-3 8-3 4 3 8 3" />
          </svg>
          <span className="font-serif text-xl md:text-2xl tracking-tight">Blue View</span>
        </Link>

        {/* Desktop links — minimal */}
        <div className="hidden md:flex items-center gap-12">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative text-[11px] tracking-[0.25em] uppercase transition-colors duration-500 after:absolute after:left-0 after:right-0 after:-bottom-1.5 after:h-px after:transition-all after:duration-500 ${
                  isActive
                    ? showLight
                      ? "text-white after:bg-white"
                      : "text-stone-900 after:bg-stone-900"
                    : showLight
                    ? "text-white/80 hover:text-white after:bg-transparent"
                    : "text-stone-600 hover:text-stone-900 after:bg-transparent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right side — language + book */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href={pathname}
            locale={otherLocale}
            aria-label={`Switch language to ${otherLocale === "el" ? "Greek" : "English"}`}
            className={`text-[11px] tracking-[0.25em] uppercase transition-colors duration-500 ${
              showLight ? "text-white/80 hover:text-white" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            {otherLocale}
          </Link>
          <Link
            href="/book"
            className={`text-[11px] tracking-[0.25em] uppercase border-b pb-1 transition-all duration-500 ${
              showLight
                ? "text-white border-white/40 hover:border-white"
                : "text-stone-900 border-stone-400 hover:border-stone-900"
            }`}
          >
            {t("book")}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 relative z-50 transition-colors ${
            mobileOpen ? "text-stone-900" : showLight ? "text-white" : "text-stone-900"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      </header>

      {/* Mobile menu — slide-in from right (rendered OUTSIDE header to escape its stacking context) */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] md:hidden bg-stone-950/50 backdrop-blur-sm transition-opacity duration-500 ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
      {/* Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] md:hidden w-[88%] max-w-sm bg-white shadow-2xl shadow-stone-950/20 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
          <div className="h-full flex flex-col px-8 pt-28 pb-[max(env(safe-area-inset-bottom),24px)]">
            <nav className="flex flex-col gap-7">
              {links.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`font-serif text-3xl tracking-tight min-h-[44px] flex items-center transition-all duration-700 ${
                      mobileOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                    } ${
                      isActive
                        ? "text-stone-900 underline underline-offset-8 decoration-1"
                        : "text-stone-500 hover:text-stone-900"
                    }`}
                    style={{ transitionDelay: mobileOpen ? `${150 + i * 80}ms` : "0ms" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div
              className={`mt-auto flex flex-col gap-6 transition-all duration-700 ${
                mobileOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
              }`}
              style={{ transitionDelay: mobileOpen ? "450ms" : "0ms" }}
            >
              <Link
                href="/book"
                className="inline-flex items-center justify-center bg-stone-900 text-stone-50 min-h-[52px] px-8 text-[11px] tracking-[0.3em] uppercase active:scale-95 transition-transform"
                onClick={() => setMobileOpen(false)}
              >
                {t("book")}
              </Link>
              <Link
                href={pathname}
                locale={otherLocale}
                className="text-[11px] tracking-[0.25em] uppercase text-stone-500 hover:text-stone-900 transition-colors min-h-[44px] inline-flex items-center justify-center"
                onClick={() => setMobileOpen(false)}
              >
                {otherLocale === "el" ? "Ελληνικά" : "English"}
              </Link>
            </div>
          </div>
        </div>
    </>
  );
}
