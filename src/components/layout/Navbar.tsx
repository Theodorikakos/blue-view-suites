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

  const links = [
    { href: "/suites", label: t("suites") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  const otherLocale = locale === "en" ? "el" : "en";
  const hasDarkHero = ["/", "/suites", "/about", "/contact"].includes(pathname);
  const showLight = !scrolled && hasDarkHero;

  return (
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
        {/* Logo — serif, refined */}
        <Link
          href="/"
          className={`font-serif text-xl md:text-2xl tracking-tight transition-colors duration-500 ${
            showLight ? "text-white" : "text-stone-900"
          }`}
        >
          Blue View
        </Link>

        {/* Desktop links — minimal */}
        <div className="hidden md:flex items-center gap-12">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[11px] tracking-[0.25em] uppercase transition-colors duration-500 ${
                pathname === link.href
                  ? showLight
                    ? "text-white"
                    : "text-stone-900"
                  : showLight
                  ? "text-white/70 hover:text-white"
                  : "text-stone-500 hover:text-stone-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side — language + book */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href={pathname}
            locale={otherLocale}
            className={`text-[11px] tracking-[0.25em] uppercase transition-colors duration-500 ${
              showLight ? "text-white/70 hover:text-white" : "text-stone-500 hover:text-stone-900"
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
          className={`md:hidden p-2 relative z-50 transition-colors ${
            mobileOpen ? "text-stone-900" : showLight ? "text-white" : "text-stone-900"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu — fullscreen */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-700 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-stone-50" />
        <div className="relative h-full flex flex-col justify-center items-center px-6">
          <div className="flex flex-col items-center gap-10">
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-serif text-3xl md:text-4xl tracking-tight transition-all duration-700 ${
                  mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                } ${
                  pathname === link.href ? "text-stone-900" : "text-stone-700 hover:text-stone-900"
                }`}
                style={{ transitionDelay: mobileOpen ? `${200 + i * 100}ms` : "0ms" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div
              className={`mt-8 flex flex-col items-center gap-8 transition-all duration-700 ${
                mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: mobileOpen ? "550ms" : "0ms" }}
            >
              <Link
                href="/book"
                className="text-[11px] tracking-[0.3em] uppercase text-stone-900 border-b border-stone-400 pb-2 hover:border-stone-900 transition-all duration-300"
                onClick={() => setMobileOpen(false)}
              >
                {t("book")}
              </Link>
              <Link
                href={pathname}
                locale={otherLocale}
                className="text-[11px] tracking-[0.25em] uppercase text-stone-500 hover:text-stone-900 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {otherLocale === "el" ? "Ελληνικά" : "English"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
