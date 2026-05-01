import { useTranslations } from "next-intl";
import { Calendar, Users, CreditCard, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function BookPage() {
  const t = useTranslations("booking");

  const steps = [
    { label: t("step1"), icon: Calendar },
    { label: t("step2"), icon: Users },
    { label: t("step3"), icon: CreditCard },
  ];

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.4em] uppercase text-stone-500 mb-6 animate-fade-up">
            Reservation
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-stone-900 leading-[1.05] tracking-tight animate-fade-up animation-delay-200">
            {t("title")}
          </h1>
        </div>

        {/* Steps indicator */}
        <ScrollReveal className="flex items-center justify-center mb-16 md:mb-20">
          <div className="flex items-center">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = i === 0;
              return (
                <div key={step.label} className="flex items-center">
                  <div className="flex flex-col items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? "bg-stone-900 text-stone-50"
                          : "bg-stone-100 text-stone-400"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-[10px] tracking-[0.3em] uppercase hidden sm:block ${
                        isActive ? "text-stone-900" : "text-stone-400"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-16 md:w-24 h-px bg-stone-200 mx-4 mt-[-20px] sm:mt-0" />
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Booking Form */}
        <ScrollReveal delay={100}>
          <div className="bg-white p-8 md:p-12 border border-stone-100">
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="book-checkin" className="block text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-3">
                    {t("checkIn")}
                  </label>
                  <input
                    id="book-checkin"
                    name="checkIn"
                    type="date"
                    className="w-full border-b border-stone-300 bg-transparent px-0 py-3 min-h-[44px] text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="book-checkout" className="block text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-3">
                    {t("checkOut")}
                  </label>
                  <input
                    id="book-checkout"
                    name="checkOut"
                    type="date"
                    className="w-full border-b border-stone-300 bg-transparent px-0 py-3 min-h-[44px] text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="book-guests" className="block text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-3">
                  {t("guests")}
                </label>
                <select
                  id="book-guests"
                  name="guests"
                  className="w-full border-b border-stone-300 bg-transparent px-0 py-3 min-h-[44px] text-stone-900 focus:outline-none focus:border-stone-900 transition-colors appearance-none cursor-pointer"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>

              {/* Summary */}
              <div className="pt-8 border-t border-stone-100">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500">
                    {t("total")}
                  </span>
                  <span className="font-serif text-3xl text-stone-900">€ —</span>
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 text-[12px] tracking-[0.25em] uppercase text-stone-900 border-b border-stone-400 pb-2 hover:border-stone-900 transition-all duration-500 min-h-[44px]"
                >
                  {t("confirm")}
                  <ArrowRight className="w-3.5 h-3.5 hover-arrow" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
