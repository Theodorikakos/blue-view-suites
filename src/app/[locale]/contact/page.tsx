import { useTranslations } from "next-intl";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { images } from "@/lib/images";
import { blurPlaceholder } from "@/lib/placeholder";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  const t = useTranslations("contact");
  const tFooter = useTranslations("footer");

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 animate-slow-zoom">
          <Image
            src={images.location}
            alt="Aegean coastline near Blue View Suites"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL={blurPlaceholder}
          />
        </div>
        <div className="absolute inset-0 bg-stone-950/45" />
        <div className="relative z-10 h-full flex items-end pb-16 md:pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <p className="text-[11px] tracking-[0.4em] uppercase text-white/70 mb-6 animate-fade-up">
              {t("label")}
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.05] tracking-tight max-w-3xl animate-fade-up animation-delay-200">
              {t("title")}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Info */}
            <ScrollReveal>
              <p className="text-[11px] tracking-[0.4em] uppercase text-stone-500 mb-6">
                {t("subtitle")}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 leading-[1.15] tracking-tight mb-8">
                {t("description")}
              </h2>

              <div className="space-y-8 mt-12">
                <div className="flex items-start gap-5">
                  <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-2">
                      {t("phone")}
                    </p>
                    <a
                      href="tel:+302243061000"
                      className="text-[15px] text-stone-900 hover:text-accent transition-colors"
                    >
                      +30 22430 61000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-2">
                      {t("email")}
                    </p>
                    <a
                      href="mailto:info@blueviewsuites.gr"
                      className="text-[15px] text-stone-900 hover:text-accent transition-colors"
                    >
                      info@blueviewsuites.gr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-2">
                      {t("address")}
                    </p>
                    <p className="text-[15px] text-stone-900">{tFooter("address")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-stone-500 mb-2">
                      {t("hours")}
                    </p>
                    <p className="text-[15px] text-stone-900">{t("hoursValue")}</p>
                    <p className="text-[12px] text-stone-500 mt-1">{t("season")}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={150}>
              <div className="bg-stone-100 p-8 md:p-12">
                <h3 className="font-serif text-2xl md:text-3xl text-stone-900 tracking-tight mb-10">
                  {t("formTitle")}
                </h3>

                <ContactForm />
              </div>
            </ScrollReveal>
          </div>

          {/* Map */}
          <ScrollReveal className="mt-24 md:mt-32">
            <div className="relative aspect-[21/9] overflow-hidden bg-stone-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25889.55890594091!2d26.33!3d36.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bde1f2b3a0c5b1%3A0x400bd2ce2b98e80!2sAstipalea!5e0!3m2!1sen!2sgr!4v1"
                className="absolute inset-0 w-full h-full border-0 grayscale-[0.4]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                title="Map showing Blue View Suites in Astipalea, Greece"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
