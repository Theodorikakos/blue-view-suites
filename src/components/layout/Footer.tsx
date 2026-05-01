import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 pb-24 md:pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-6 text-stone-50">
              <svg
                viewBox="0 0 64 64"
                aria-hidden="true"
                className="w-7 h-7"
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
              <h3 className="font-serif text-2xl tracking-tight">Blue View</h3>
            </div>
            <p className="text-[13px] leading-relaxed text-stone-400 max-w-xs">
              {t("tagline")}
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-6">
              {t("contactLabel")}
            </p>
            <address className="not-italic flex flex-col gap-3 text-[13px] text-stone-300">
              <a href="mailto:info@blueviewsuites.gr" className="hover:text-stone-50 transition-colors">
                info@blueviewsuites.gr
              </a>
              <a href="tel:+302243061000" className="hover:text-stone-50 transition-colors">
                +30 22430 61000
              </a>
              <span className="text-stone-400">{t("address")}</span>
            </address>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-6">
              {t("navLabel")}
            </p>
            <ul className="flex flex-col gap-3 text-[13px]">
              <li>
                <Link href="/suites" className="text-stone-300 hover:text-stone-50 transition-colors w-fit inline-block">
                  {t("suites")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-stone-300 hover:text-stone-50 transition-colors w-fit inline-block">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-stone-300 hover:text-stone-50 transition-colors w-fit inline-block">
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-stone-300 hover:text-stone-50 transition-colors w-fit inline-block">
                  {t("book")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[11px] tracking-wide text-stone-400">
            © {currentYear} Blue View Suites
          </p>
          <div className="flex gap-6">
            <button type="button" className="text-[11px] text-stone-400 hover:text-stone-200 transition-colors">
              {t("privacy")}
            </button>
            <button type="button" className="text-[11px] text-stone-400 hover:text-stone-200 transition-colors">
              {t("terms")}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
