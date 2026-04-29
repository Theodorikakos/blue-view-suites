import { useTranslations } from "next-intl";
import Image from "next/image";
import { MapPin, Sun, Compass } from "lucide-react";
import { images } from "@/lib/images";
import { blurPlaceholder } from "@/lib/placeholder";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pb-16">
          <p className="text-[13px] tracking-[0.3em] uppercase text-blue-200 mb-4">
            {t("label")}
          </p>
          <h1 className="text-4xl md:text-6xl font-extralight text-white">
            {t("title")}
          </h1>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 md:py-32 px-6 bg-sand-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-light text-blue-950 leading-relaxed">
            {t("description")}
          </p>
        </div>
      </section>

      {/* Island section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={images.about.island}
                  alt="Astipalea island view"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL={blurPlaceholder}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sand-100 -z-10" />
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-5 h-5 text-blue-600" />
                <p className="text-[13px] tracking-[0.3em] uppercase text-blue-600 font-medium">
                  {t("islandLabel")}
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-extralight text-blue-950 mb-6">
                {t("island")}
              </h2>
              <p className="text-gray-500 text-[16px] leading-relaxed mb-10">
                {t("islandDesc")}
              </p>

              {/* Quick facts */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Sun className="w-5 h-5 text-gold mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-950">{t("sunnyDays")}</p>
                    <p className="text-[13px] text-gray-400">{t("perYear")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-gold mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-950">{t("dodecanese")}</p>
                    <p className="text-[13px] text-gray-400">{t("islandChain")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
