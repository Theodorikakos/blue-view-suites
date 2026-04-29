"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Calendar, Users, ArrowRight } from "lucide-react";

export function BookingBar() {
  const t = useTranslations("booking");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 shadow-2xl shadow-black/10 animate-fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          {/* Check-in */}
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <input
              type="date"
              placeholder={t("checkIn")}
              className="w-full bg-transparent text-sm text-blue-950 border-b border-gray-200 py-1.5 focus:outline-none focus:border-blue-600"
            />
          </div>

          {/* Check-out */}
          <div className="hidden sm:flex items-center gap-2 flex-1 min-w-0">
            <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <input
              type="date"
              placeholder={t("checkOut")}
              className="w-full bg-transparent text-sm text-blue-950 border-b border-gray-200 py-1.5 focus:outline-none focus:border-blue-600"
            />
          </div>

          {/* Guests */}
          <div className="hidden md:flex items-center gap-2 flex-1 min-w-0">
            <Users className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <select className="w-full bg-transparent text-sm text-blue-950 border-b border-gray-200 py-1.5 focus:outline-none focus:border-blue-600 appearance-none cursor-pointer">
              <option>2 {t("guests")}</option>
              <option>1 {t("guests")}</option>
              <option>3 {t("guests")}</option>
              <option>4 {t("guests")}</option>
            </select>
          </div>

          {/* CTA */}
          <Link
            href="/book"
            className="inline-flex items-center gap-2 bg-blue-950 text-white px-6 py-2.5 text-[12px] font-semibold tracking-[0.1em] uppercase hover:bg-blue-800 transition-colors whitespace-nowrap flex-shrink-0 group"
          >
            {t("title")}
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
