import { useTranslations } from "next-intl";
import { Calendar, Users, CreditCard, Check } from "lucide-react";

export default function BookPage() {
  const t = useTranslations("booking");

  const steps = [
    { label: t("step1"), icon: Calendar },
    { label: t("step2"), icon: Users },
    { label: t("step3"), icon: CreditCard },
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-sand-50">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[13px] tracking-[0.3em] uppercase text-blue-600 mb-4">
            Reservation
          </p>
          <h1 className="text-4xl md:text-5xl font-extralight text-blue-950 mb-4">
            {t("title")}
          </h1>
        </div>

        {/* Steps indicator */}
        <div className="flex items-center justify-center mb-16">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="flex items-center">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      i === 0
                        ? "bg-blue-950 text-white"
                        : "bg-white border border-gray-200 text-gray-400"
                    }`}
                  >
                    {i < 0 ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                  </div>
                  <span
                    className={`text-[12px] tracking-wide font-medium hidden sm:block ${
                      i === 0 ? "text-blue-950" : "text-gray-400"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-16 md:w-24 h-px bg-gray-200 mx-4 mt-[-20px] sm:mt-0" />
                )}
              </div>
            );
          })}
        </div>

        {/* Booking Form */}
        <div className="bg-white p-8 md:p-12 shadow-sm">
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[12px] tracking-wide uppercase font-medium text-gray-500 mb-2">
                  {t("checkIn")}
                </label>
                <input
                  type="date"
                  className="w-full border-b border-gray-200 bg-transparent px-0 py-3 text-blue-950 focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[12px] tracking-wide uppercase font-medium text-gray-500 mb-2">
                  {t("checkOut")}
                </label>
                <input
                  type="date"
                  className="w-full border-b border-gray-200 bg-transparent px-0 py-3 text-blue-950 focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[12px] tracking-wide uppercase font-medium text-gray-500 mb-2">
                {t("guests")}
              </label>
              <select className="w-full border-b border-gray-200 bg-transparent px-0 py-3 text-blue-950 focus:outline-none focus:border-blue-600 transition-colors appearance-none cursor-pointer">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>

            {/* Summary */}
            <div className="pt-8 border-t border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-500 text-sm">{t("total")}</span>
                <span className="text-2xl font-light text-blue-950">€ —</span>
              </div>

              <button className="w-full bg-blue-950 text-white py-4 text-[13px] font-semibold tracking-[0.15em] uppercase hover:bg-blue-800 transition-all duration-300">
                {t("confirm")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
