import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Waves, MapPin, Sparkles, ArrowRight, Star, Quote } from "lucide-react";
import { images } from "@/lib/images";
import { blurPlaceholder } from "@/lib/placeholder";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function HomePage() {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");

  return (
    <>
      {/* Hero Section — Full viewport, cinematic */}
      <section className="relative h-screen flex items-end pb-24 md:items-center md:pb-0 overflow-hidden">
        <Image
          src={images.hero}
          alt="Blue View Suites - Aegean Sea view from Astipalea"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurPlaceholder}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 via-blue-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-blue-950/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <p className="text-[13px] tracking-[0.3em] uppercase text-blue-200 mb-6 animate-fade-up">
              {t("hero.location")}
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight text-white mb-6 animate-fade-up animation-delay-200">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light max-w-lg mb-10 animate-fade-up animation-delay-400">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-600">
              <Link
                href="/book"
                className="inline-flex items-center gap-3 bg-white text-blue-950 px-8 py-4 text-[13px] font-semibold tracking-[0.15em] uppercase hover:bg-blue-50 transition-all duration-300 group"
              >
                {t("hero.cta")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/suites"
                className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 text-[13px] font-medium tracking-[0.15em] uppercase hover:bg-white/10 transition-all duration-300"
              >
                {tCommon("viewAll")}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in animation-delay-600">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/50" />
        </div>
      </section>

      {/* Intro / About Teaser */}
      <section className="py-24 md:py-32 px-6 bg-sand-50">
        <ScrollReveal className="max-w-4xl mx-auto text-center">
          <p className="text-[13px] tracking-[0.3em] uppercase text-blue-600 mb-6">
            {t("intro.label")}
          </p>
          <h2 className="text-2xl md:text-4xl font-extralight text-blue-950 leading-relaxed mb-8">
            {t("intro.text")}
          </h2>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[13px] font-medium tracking-wide uppercase text-blue-700 hover:text-blue-900 transition-colors group"
          >
            {tCommon("learnMore")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-20">
            <p className="text-[13px] tracking-[0.3em] uppercase text-blue-600 mb-4">
              {t("features.label")}
            </p>
            <h2 className="text-3xl md:text-5xl font-extralight text-blue-950">
              {t("features.title")}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            <ScrollReveal delay={0}>
              <FeatureCard
                icon={<Waves className="w-7 h-7" />}
                title={t("features.sea")}
                description={t("features.seaDesc")}
              />
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <FeatureCard
                icon={<MapPin className="w-7 h-7" />}
                title={t("features.location")}
                description={t("features.locationDesc")}
              />
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <FeatureCard
                icon={<Sparkles className="w-7 h-7" />}
                title={t("features.comfort")}
                description={t("features.comfortDesc")}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Suites Preview */}
      <section className="py-24 md:py-32 px-6 bg-sand-50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <div>
                <p className="text-[13px] tracking-[0.3em] uppercase text-blue-600 mb-4">
                  {t("suites.label")}
                </p>
                <h2 className="text-3xl md:text-5xl font-extralight text-blue-950">
                  {t("suites.title")}
                </h2>
              </div>
              <Link
                href="/suites"
                className="mt-6 md:mt-0 inline-flex items-center gap-2 text-[13px] font-medium tracking-wide uppercase text-blue-700 hover:text-blue-900 transition-colors group"
              >
                {tCommon("viewAll")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Aegean View Suite", size: "45m²", img: images.suites.aegean },
              { name: "Sunset Terrace Suite", size: "55m²", img: images.suites.sunset },
              { name: "Honeymoon Retreat", size: "60m²", img: images.suites.honeymoon },
            ].map((suite) => (
              <Link
                key={suite.name}
                href="/suites"
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={suite.img}
                  alt={suite.name}
                  fill
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  placeholder="blur"
                  blurDataURL={blurPlaceholder}
                />
                <div className="absolute inset-0 overlay-gradient opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="relative h-full flex flex-col justify-end p-8">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-blue-200 mb-2">
                    {suite.size}
                  </p>
                  <h3 className="text-xl font-light text-white">
                    {suite.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="text-[13px] tracking-[0.3em] uppercase text-blue-600 mb-4">
              {t("gallery.label")}
            </p>
            <h2 className="text-3xl md:text-5xl font-extralight text-blue-950">
              {t("gallery.title")}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {images.gallery.map((src, i) => (
              <div
                key={i}
                className={`relative overflow-hidden ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
                }`}
              >
                <Image
                  src={src}
                  alt={`Blue View Suites gallery ${i + 1}`}
                  fill
                  loading="lazy"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                  placeholder="blur"
                  blurDataURL={blurPlaceholder}
                />
              </div>
            ))}
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 px-6 bg-blue-950">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="text-[13px] tracking-[0.3em] uppercase text-blue-400 mb-4">
              {t("reviews.label")}
            </p>
            <h2 className="text-3xl md:text-4xl font-extralight text-white">
              {t("reviews.title")}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                text: "The most breathtaking views we've ever woken up to. The staff made us feel like family. We'll be back every summer.",
                author: "Maria & Thomas",
                origin: "Berlin, Germany",
                rating: 5,
              },
              {
                text: "Astipalea is a hidden gem and Blue View Suites is the crown jewel. Impeccable taste, absolute tranquility.",
                author: "Sophie Laurent",
                origin: "Paris, France",
                rating: 5,
              },
            ].map((review) => (
              <div key={review.author} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10">
                <Quote className="w-8 h-8 text-blue-400/40 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-white/80 text-[16px] leading-relaxed mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div>
                  <p className="text-white font-medium text-sm">{review.author}</p>
                  <p className="text-blue-300/60 text-[13px]">{review.origin}</p>
                </div>
              </div>
            ))}
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[13px] tracking-[0.3em] uppercase text-blue-600 mb-4">
                {t("location.label")}
              </p>
              <h2 className="text-3xl md:text-4xl font-extralight text-blue-950 mb-6">
                {t("location.title")}
              </h2>
              <p className="text-gray-500 text-[16px] leading-relaxed mb-8">
                {t("location.description")}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-950">{t("location.address")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[13px] text-gray-400">{t("location.distances")}</span>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative aspect-square lg:aspect-[4/3] bg-blue-100 overflow-hidden">
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
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <Image
          src={images.gallery[5]}
          alt="Astipalea aerial view"
          fill
          loading="lazy"
          className="object-cover"
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurPlaceholder}
        />
        <div className="absolute inset-0 bg-blue-950/80" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <p className="text-[13px] tracking-[0.3em] uppercase text-blue-300 mb-6">
            {t("cta.label")}
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight text-white mb-8 leading-tight">
            {t("cta.title")}
          </h2>
          <p className="text-white/60 text-lg font-light max-w-2xl mx-auto mb-12">
            {t("hero.subtitle")}
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-3 bg-white text-blue-950 px-10 py-4 text-[13px] font-semibold tracking-[0.15em] uppercase hover:bg-blue-50 transition-all duration-300 group"
          >
            {t("hero.cta")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center group">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-6 group-hover:bg-blue-100 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-blue-950 mb-3">{title}</h3>
      <p className="text-gray-500 text-[15px] leading-relaxed">{description}</p>
    </div>
  );
}
