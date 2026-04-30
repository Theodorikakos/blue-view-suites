import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-stone-50 tracking-tight mb-6">
              Blue View
            </h3>
            <p className="text-[13px] leading-relaxed text-stone-400 max-w-xs">
              {t("tagline")}
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-6">
              {t("contactLabel")}
            </p>
            <div className="flex flex-col gap-3 text-[13px] text-stone-300">
              <a href="mailto:info@blueviewsuites.gr" className="hover:text-stone-50 transition-colors">
                info@blueviewsuites.gr
              </a>
              <a href="tel:+302243061000" className="hover:text-stone-50 transition-colors">
                +30 22430 61000
              </a>
              <span className="text-stone-400">{t("address")}</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-6">
              {t("navLabel")}
            </p>
            <div className="flex flex-col gap-3 text-[13px]">
              <Link href="/suites" className="text-stone-300 hover:text-stone-50 transition-colors w-fit">
                {t("suites")}
              </Link>
              <Link href="/about" className="text-stone-300 hover:text-stone-50 transition-colors w-fit">
                {t("about")}
              </Link>
              <Link href="/contact" className="text-stone-300 hover:text-stone-50 transition-colors w-fit">
                {t("contact")}
              </Link>
              <Link href="/book" className="text-stone-300 hover:text-stone-50 transition-colors w-fit">
                {t("book")}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[11px] tracking-wide text-stone-500">
            © {currentYear} Blue View Suites
          </p>
          <div className="flex gap-6">
            <span className="text-[11px] text-stone-500 hover:text-stone-300 cursor-pointer transition-colors">
              {t("privacy")}
            </span>
            <span className="text-[11px] text-stone-500 hover:text-stone-300 cursor-pointer transition-colors">
              {t("terms")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
