export function HotelJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Blue View Suites",
    description:
      "Luxury boutique suites with stunning Aegean Sea views on the island of Astipalea, Greece.",
    url: "https://blueviewsuites.gr",
    image:
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=1200&h=630&fit=crop",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Chora",
      addressLocality: "Astipalea",
      addressRegion: "Dodecanese",
      postalCode: "85900",
      addressCountry: "GR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "36.55",
      longitude: "26.33",
    },
    telephone: "+30 22430 61234",
    email: "info@blueviewsuites.gr",
    starRating: {
      "@type": "Rating",
      ratingValue: "4",
    },
    priceRange: "€€€",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Sea View", value: true },
      { "@type": "LocationFeatureSpecification", name: "Breakfast Included", value: true },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
    },
    checkinTime: "15:00",
    checkoutTime: "11:00",
    numberOfRooms: "6",
    petsAllowed: false,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
