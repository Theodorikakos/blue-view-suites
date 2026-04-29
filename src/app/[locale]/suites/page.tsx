import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Users, ArrowRight, Wifi, Wind, Coffee, Bath } from "lucide-react";
import { images } from "@/lib/images";
import { blurPlaceholder } from "@/lib/placeholder";

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
      description: "Panoramic sea views from your private balcony, bathed in morning light. Features a king-size bed, rain shower, and a furnished terrace overlooking the Aegean.",
      amenities: ["Sea view balcony", "King bed", "Rain shower", "Air conditioning"],
    },
    {
      slug: "sunset-terrace",
      name: "Sunset Terrace Suite",
      guests: 3,
      price: 220,
      size: "55m²",
      image: images.suites.sunset,
      description: "A spacious retreat with a generous private terrace perfect for golden hour. Includes a separate living area, premium linens, and Cycladic-inspired décor.",
      amenities: ["Sunset terrace", "Living area", "Premium linens", "Espresso machine"],
    },
    {
      slug: "honeymoon-retreat",
      name: "Honeymoon Retreat",
      guests: 2,
      price: 260,
      size: "60m²",
      image: images.suites.honeymoon,
      description: "Intimate luxury with an outdoor jacuzzi overlooking the Aegean. Our most exclusive suite with handpicked furnishings, champagne welcome, and daily breakfast.",
      amenities: ["Outdoor jacuzzi", "Champagne welcome", "Breakfast included", "Bathrobes & slippers"],
    },
  ];

  const amenityIcons: Record<string, React.ReactNode> = {
    "Sea view balcony": <Wind className="w-4 h-4" />,
    "Sunset terrace": <Wind className="w-4 h-4" />,
    "Outdoor jacuzzi": <Bath className="w-4 h-4" />,
    "King bed": <Coffee className="w-4 h-4" />,
    "Living area": <Coffee className="w-4 h-4" />,
    "Champagne welcome": <Coffee className="w-4 h-4" />,
    "Rain shower": <Bath className="w-4 h-4" />,
    "Premium linens": <Coffee className="w-4 h-4" />,
    "Breakfast included": <Coffee className="w-4 h-4" />,
    "Air conditioning": <Wind className="w-4 h-4" />,
    "Espresso machine": <Coffee className="w-4 h-4" />,
    "Bathrobes & slippers": <Bath className="w-4 h-4" />,
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-end overflow-hidden">
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

      {/* Suites List */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24">
            {suites.map((suite, i) => (
              <div
                key={suite.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={suite.image}
                    alt={suite.name}
                    fill
                    loading="lazy"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL={blurPlaceholder}
                  />
                </div>

                {/* Content */}
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[12px] tracking-[0.2em] uppercase text-blue-600 font-medium">
                      {suite.size}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="inline-flex items-center gap-1.5 text-[12px] tracking-wide text-gray-400">
                      <Users className="w-3.5 h-3.5" />
                      {suite.guests} {t("guests")}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-extralight text-blue-950 mb-4">
                    {suite.name}
                  </h2>

                  <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                    {suite.description}
                  </p>

                  {/* Amenities */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {suite.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-2 text-[13px] text-gray-600">
                        <span className="text-blue-500">
                          {amenityIcons[amenity] || <Wifi className="w-4 h-4" />}
                        </span>
                        {amenity}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-[12px] text-gray-400 uppercase tracking-wide">{t("from")}</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-light text-blue-950">€{suite.price}</span>
                        <span className="text-sm text-gray-400">{t("perNight")}</span>
                      </div>
                    </div>

                    <Link
                      href="/book"
                      className="inline-flex items-center gap-2 bg-blue-950 text-white px-6 py-3 text-[13px] font-medium tracking-wide uppercase hover:bg-blue-800 transition-colors group"
                    >
                      {t("viewDetails")}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
