import { useTranslations } from "next-intl";
import Image from "next/image";
import { Sun, Compass } from "lucide-react";
import { images } from "@/lib/images";
import { blurPlaceholder } from "@/lib/placeholder";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 animate-slow-zoom">
          <Image
            src={images.about.hotel}
            alt="Blue View Suites exterior"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL={blurPlaceholder}
          />
        </div>
        <div className="absolute inset-0 bg-stone-950/35" />

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

      {/* Description */}
      <section className="py-32 md:py-48 px-6">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.4em] uppercase text-stone-500 mb-10">
            {t("label")}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-stone-900 leading-[1.15] tracking-tight">
            {t("description")}
          </h2>
        </ScrollReveal>
      </section>

      {/* Island */}
      <section className="px-6 pb-32 md:pb-48">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                <Image
                  src={images.about.island}
                  alt="Astipalea island view"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL={blurPlaceholder}
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="text-[11px] tracking-[0.4em] uppercase text-stone-500 mb-6">
                {t("islandLabel")}
              </p>
              <h2 className="font-serif text-3xl md:text-5xl text-stone-900 leading-[1.1] tracking-tight mb-8">
                {t("island")}
              </h2>
              <p className="text-stone-600 text-[15px] leading-relaxed mb-12 max-w-md">
                {t("islandDesc")}
              </p>

              <div className="grid grid-cols-2 gap-8 max-w-md">
                <div className="flex items-start gap-3">
                  <Sun className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[14px] text-stone-900 mb-1">{t("sunnyDays")}</p>
                    <p className="text-[12px] text-stone-500">{t("perYear")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[14px] text-stone-900 mb-1">{t("dodecanese")}</p>
                    <p className="text-[12px] text-stone-500">{t("islandChain")}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
