import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const tFooter = useTranslations("footer");

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] flex items-end overflow-hidden bg-blue-950">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pb-16">
          <p className="text-[13px] tracking-[0.3em] uppercase text-blue-300 mb-4">
            {t("label")}
          </p>
          <h1 className="text-4xl md:text-6xl font-extralight text-white">
            {t("title")}
          </h1>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-extralight text-blue-950 mb-8">
                {t("subtitle")}
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-10">
                {t("description")}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[12px] tracking-[0.2em] uppercase text-gray-400 font-medium mb-1">
                      {t("phone")}
                    </p>
                    <a href="tel:+302243061000" className="text-blue-950 font-medium hover:text-blue-700 transition-colors">
                      +30 22430 61000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[12px] tracking-[0.2em] uppercase text-gray-400 font-medium mb-1">
                      {t("email")}
                    </p>
                    <a href="mailto:info@blueviewsuites.gr" className="text-blue-950 font-medium hover:text-blue-700 transition-colors">
                      info@blueviewsuites.gr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[12px] tracking-[0.2em] uppercase text-gray-400 font-medium mb-1">
                      {t("address")}
                    </p>
                    <p className="text-blue-950">{tFooter("address")}</p>
                    <p className="text-gray-400 text-sm">85900</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[12px] tracking-[0.2em] uppercase text-gray-400 font-medium mb-1">
                      {t("hours")}
                    </p>
                    <p className="text-blue-950">{t("hoursValue")}</p>
                    <p className="text-gray-400 text-sm">{t("season")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-sand-50 p-8 md:p-10">
              <h3 className="text-xl font-light text-blue-950 mb-6">{t("formTitle")}</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] tracking-wide uppercase font-medium text-gray-500 mb-2">
                      {t("firstName")}
                    </label>
                    <input
                      type="text"
                      className="w-full border-b border-gray-200 bg-transparent px-0 py-3 text-blue-950 focus:outline-none focus:border-blue-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] tracking-wide uppercase font-medium text-gray-500 mb-2">
                      {t("lastName")}
                    </label>
                    <input
                      type="text"
                      className="w-full border-b border-gray-200 bg-transparent px-0 py-3 text-blue-950 focus:outline-none focus:border-blue-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] tracking-wide uppercase font-medium text-gray-500 mb-2">
                    {t("email")}
                  </label>
                  <input
                    type="email"
                    className="w-full border-b border-gray-200 bg-transparent px-0 py-3 text-blue-950 focus:outline-none focus:border-blue-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[12px] tracking-wide uppercase font-medium text-gray-500 mb-2">
                    {t("message")}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border-b border-gray-200 bg-transparent px-0 py-3 text-blue-950 focus:outline-none focus:border-blue-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-950 text-white py-4 text-[13px] font-semibold tracking-[0.15em] uppercase hover:bg-blue-800 transition-all duration-300"
                >
                  {t("send")}
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-24 relative aspect-[21/9] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25889.55890594091!2d26.33!3d36.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bde1f2b3a0c5b1%3A0x400bd2ce2b98e80!2sAstipalea!5e0!3m2!1sen!2sgr!4v1"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Blue View Suites location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
