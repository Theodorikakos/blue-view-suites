import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { images } from "@/lib/images";
import { blurPlaceholder } from "@/lib/placeholder";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function HomePage() {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");

  return (
    <>
      {/* 1. HERO — Cinematic, single statement */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 animate-slow-zoom">
          <Image
            src={images.hero}
            alt="Blue View Suites"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL={blurPlaceholder}
          />
        </div>
        <div className="absolute inset-0 bg-stone-950/30" />

        <div className="relative z-10 h-full flex items-end pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <p className="text-[11px] tracking-[0.4em] uppercase text-white/70 mb-6 animate-fade-up">
              {t("hero.location")}
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-white leading-[1.05] tracking-tight mb-10 max-w-3xl animate-fade-up animation-delay-200">
              {t("hero.headline")}
            </h1>
            <Link
              href="/suites"
              className="inline-flex items-center gap-3 text-[12px] tracking-[0.25em] uppercase text-white border-b border-white/40 pb-2 hover:border-white transition-all duration-500 animate-fade-up animation-delay-400"
            >
              {t("hero.cta")}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CONCEPT — A few quiet lines */}
      <section className="py-32 md:py-48 px-6">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.4em] uppercase text-stone-500 mb-10">
            {t("concept.label")}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-stone-900 leading-[1.15] tracking-tight">
            {t("concept.text")}
          </h2>
        </ScrollReveal>
      </section>

      {/* 3. SUITES — Minimal grid, image-forward */}
      <section className="px-6 pb-32 md:pb-48">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12 md:mb-16">
              <div>
                <p className="text-[11px] tracking-[0.4em] uppercase text-stone-500 mb-4">
                  {t("suites.label")}
                </p>
                <h2 className="font-serif text-3xl md:text-5xl text-stone-900 tracking-tight">
                  {t("suites.title")}
                </h2>
              </div>
              <Link
                href="/suites"
                className="hidden md:inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-stone-600 border-b border-stone-300 pb-1 hover:text-stone-900 hover:border-stone-900 transition-all duration-300"
              >
                {tCommon("viewAll")}
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
            {[
              { name: "Aegean", img: images.suites.aegean },
              { name: "Sunset", img: images.suites.sunset },
              { name: "Retreat", img: images.suites.honeymoon },
            ].map((suite, i) => (
              <ScrollReveal key={suite.name} delay={i * 120}>
                <Link href="/suites" className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-5">
                    <Image
                      src={suite.img}
                      alt={suite.name}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-[1500ms] ease-out"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      placeholder="blur"
                      blurDataURL={blurPlaceholder}
                    />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-stone-900 tracking-tight">
                    {suite.name}
                  </h3>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE MOMENT — Full-bleed quote over image */}
      <section className="relative h-[80vh] md:h-screen overflow-hidden">
        <Image
          src={images.gallery[1]}
          alt="The view"
          fill
          loading="lazy"
          className="object-cover"
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurPlaceholder}
        />
        <div className="absolute inset-0 bg-stone-950/25" />
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <ScrollReveal className="text-center max-w-3xl">
            <p className="font-serif italic text-2xl md:text-4xl lg:text-5xl text-white leading-[1.3] tracking-tight">
              {t("signature.quote")}
            </p>
            <p className="text-[11px] tracking-[0.4em] uppercase text-white/70 mt-10">
              {t("signature.label")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. EXPERIENCE — Lifestyle imagery, minimal text */}
      <section className="py-32 md:py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="max-w-2xl mb-16 md:mb-24">
            <p className="text-[11px] tracking-[0.4em] uppercase text-stone-500 mb-6">
              {t("experience.label")}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-stone-900 tracking-tight leading-[1.15]">
              {t("experience.title")}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <ScrollReveal className="col-span-12 md:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <Image
                  src={images.gallery[0]}
                  alt=""
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 58vw"
                  placeholder="blur"
                  blurDataURL={blurPlaceholder}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="col-span-12 md:col-span-5" delay={150}>
              <div className="relative aspect-[4/3] md:aspect-[4/5] overflow-hidden bg-stone-100">
                <Image
                  src={images.gallery[2]}
                  alt=""
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 42vw"
                  placeholder="blur"
                  blurDataURL={blurPlaceholder}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. BOOKING CTA — Soft, single statement */}
      <section className="py-32 md:py-48 px-6 bg-stone-100">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.4em] uppercase text-stone-500 mb-8">
            {t("cta.label")}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-stone-900 leading-[1.15] tracking-tight mb-12">
            {t("cta.title")}
          </h2>
          <Link
            href="/book"
            className="inline-flex items-center gap-3 text-[12px] tracking-[0.25em] uppercase text-stone-900 border-b border-stone-400 pb-2 hover:border-stone-900 transition-all duration-500"
          >
            {t("hero.cta")}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
