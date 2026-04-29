import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <h3 className="text-lg font-medium tracking-[0.15em] uppercase mb-4">
              Blue View Suites
            </h3>
            <p className="text-blue-300/70 text-[15px] leading-relaxed max-w-sm mb-6">
              Luxury boutique accommodation on the enchanting island of Astipalea,
              where Cycladic charm meets the deep blue Aegean.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-blue-300/70 text-sm">
                <MapPin className="w-4 h-4" />
                <span>{t("address")}</span>
              </div>
              <div className="flex items-center gap-3 text-blue-300/70 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@blueviewsuites.gr</span>
              </div>
              <div className="flex items-center gap-3 text-blue-300/70 text-sm">
                <Phone className="w-4 h-4" />
                <span>+30 22430 XXXXX</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <p className="text-[12px] tracking-[0.2em] uppercase text-blue-400 font-medium mb-6">
              Navigate
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/suites" className="text-sm text-blue-200/70 hover:text-white transition-colors">
                Suites
              </Link>
              <Link href="/book" className="text-sm text-blue-200/70 hover:text-white transition-colors">
                Reservations
              </Link>
              <Link href="/about" className="text-sm text-blue-200/70 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm text-blue-200/70 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="md:col-span-3">
            <p className="text-[12px] tracking-[0.2em] uppercase text-blue-400 font-medium mb-6">
              Legal
            </p>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-blue-200/70 cursor-pointer hover:text-white transition-colors">
                {t("privacy")}
              </span>
              <span className="text-sm text-blue-200/70 cursor-pointer hover:text-white transition-colors">
                {t("terms")}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-blue-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-blue-400/60">
            © {currentYear} Blue View Suites. {t("rights")}.
          </p>
          <p className="text-[12px] text-blue-400/40 tracking-wide">
            Crafted with care in Astipalea
          </p>
        </div>
      </div>
    </footer>
  );
}
