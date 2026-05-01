import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Users, ArrowRight } from "lucide-react";
import { images } from "@/lib/images";
import { blurPlaceholder } from "@/lib/placeholder";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function SuitesPage() {
  const t = useTranslations("suites");

  const suites = [
    {
      slug: "aegean-view",
      name: "Aegean View Suite",
      guests: 2,
      price: 180,
      size: "45m²",
      image: images.suites.aegean,
      description:
        "Panoramic sea views from your private balcony, bathed in morning light. A king-size bed, rain shower, and a furnished terrace overlooking the Aegean.",
      amenities: ["Sea view balcony", "King bed", "Rain shower", "Air conditioning"],
    },
    {
      slug: "sunset-terrace",
      name: "Sunset Terrace Suite",
      guests: 3,
      price: 220,
      size: "55m²",
      image: images.suites.sunset,
      description:
        "A spacious retreat with a generous private terrace for golden hour. Separate living area, premium linens, Cycladic-inspired décor.",
      amenities: ["Sunset terrace", "Living area", "Premium linens", "Espresso machine"],
    },
    {
      slug: "honeymoon-retreat",
      name: "Honeymoon Retreat",
      guests: 2,
      price: 260,
      size: "60m²",
      image: images.suites.honeymoon,
      description:
        "Intimate luxury with an outdoor jacuzzi overlooking the Aegean. Our most exclusive suite — handpicked furnishings, champagne welcome, daily breakfast.",
      amenities: ["Outdoor jacuzzi", "Champagne welcome", "Breakfast included", "Bathrobes & slippers"],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 animate-slow-zoom">
          <Image
            src={images.suites.aegean}
            alt="Blue View Suites accommodation"
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

      {/* Suites List */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24 md:space-y-32">
            {suites.map((suite, i) => (
              <ScrollReveal key={suite.slug}>
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  {/* Image */}
                  <Link
                    href="/book"
                    className={`group relative aspect-[4/3] overflow-hidden bg-stone-100 block ${
                      i % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={suite.image}
                      alt={suite.name}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-[1500ms] ease-out"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      placeholder="blur"
                      blurDataURL={blurPlaceholder}
                    />
                  </Link>

                  {/* Content */}
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-3 mb-5 text-[11px] tracking-[0.25em] uppercase text-stone-500">
                      <span>{suite.size}</span>
                      <span className="w-1 h-1 rounded-full bg-stone-300" />
                      <span className="inline-flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        {suite.guests} {t("guests")}
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 leading-[1.1] tracking-tight mb-6">
                      {suite.name}
                    </h2>

                    <p className="text-stone-600 text-[15px] leading-relaxed mb-8 max-w-md">
                      {suite.description}
                    </p>

                    <ul className="grid grid-cols-2 gap-x-6 gap-y-3 mb-10 max-w-md">
                      {suite.amenities.map((amenity) => (
                        <li
                          key={amenity}
                          className="flex items-center gap-2 text-[13px] text-stone-600"
                        >
                          <span className="w-1 h-1 rounded-full bg-stone-400 flex-shrink-0" />
                          {amenity}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-end justify-between gap-6 flex-wrap">
                      <div>
                        <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500 block mb-1">
                          {t("from")}
                        </span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-serif text-3xl text-stone-900">
                            €{suite.price}
                          </span>
                          <span className="text-[12px] text-stone-500">
                            / {t("perNight")}
                          </span>
                        </div>
                      </div>

                      <Link
                        href="/book"
                        className="group inline-flex items-center gap-3 text-[12px] tracking-[0.25em] uppercase text-stone-900 border-b border-stone-400 pb-2 hover:border-stone-900 transition-all duration-500"
                      >
                        {t("viewDetails")}
                        <ArrowRight className="w-3.5 h-3.5 hover-arrow" />
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
