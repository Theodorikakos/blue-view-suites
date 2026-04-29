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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: t("home") },
    { href: "/suites", label: t("suites") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  const otherLocale = locale === "en" ? "el" : "en";
  const isHome = pathname === "/";
  const hasDarkHero = ["/", "/suites", "/about", "/contact"].includes(pathname);
  const showLight = !scrolled && hasDarkHero;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm"
          : hasDarkHero
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-xl border-b border-gray-100"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link
          href="/"
          className={`text-lg font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
            showLight ? "text-white" : "text-blue-950"
          }`}
        >
          Blue View Suites
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium tracking-wide uppercase transition-all duration-300 hover:opacity-100 ${
                pathname === link.href
                  ? showLight
                    ? "text-white opacity-100"
                    : "text-blue-700 opacity-100"
                  : showLight
                  ? "text-white/80 hover:text-white"
                  : "text-gray-600 opacity-80 hover:text-blue-900"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language switcher */}
          <Link
            href={pathname}
            locale={otherLocale}
            className={`text-[13px] font-medium tracking-wide uppercase px-3 py-1 rounded-full border transition-all duration-300 ${
              showLight
                ? "border-white/40 text-white/70 hover:border-white hover:text-white"
                : "border-gray-300 text-gray-500 hover:border-blue-600 hover:text-blue-600"
            }`}
          >
            {otherLocale}
          </Link>

          {/* Book CTA */}
          <Link
            href="/book"
            className={`text-[13px] font-semibold tracking-wide uppercase px-6 py-2.5 transition-all duration-300 ${
              showLight
                ? "bg-white text-blue-950 hover:bg-white/90"
                : "bg-blue-950 text-white hover:bg-blue-800"
            }`}
          >
            {t("book")}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 relative z-50 transition-colors ${
            mobileOpen ? "text-blue-950" : showLight ? "text-white" : "text-blue-950"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu — fullscreen overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-white" />
        <div className="relative h-full flex flex-col justify-center items-center px-6">
          <div className="flex flex-col items-center gap-8">
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-2xl font-light tracking-wide uppercase transition-all duration-500 ${
                  mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                } ${
                  pathname === link.href ? "text-blue-700" : "text-blue-950 hover:text-blue-700"
                }`}
                style={{ transitionDelay: mobileOpen ? `${150 + i * 75}ms` : "0ms" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div
              className={`mt-4 flex flex-col items-center gap-6 transition-all duration-500 ${
                mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: mobileOpen ? "450ms" : "0ms" }}
            >
              <Link
                href="/book"
                className="bg-blue-950 text-white px-10 py-4 text-[13px] font-semibold tracking-[0.15em] uppercase hover:bg-blue-800 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {t("book")}
              </Link>
              <Link
                href={pathname}
                locale={otherLocale}
                className="text-sm font-medium text-gray-400 uppercase tracking-wide hover:text-blue-700 transition-colors"
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

