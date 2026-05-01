import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HotelJsonLd } from "@/components/HotelJsonLd";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PageTransition } from "@/components/PageTransition";
import { MobileBookBar } from "@/components/MobileBookBar";
import { ScrollTopButton } from "@/components/ScrollTopButton";
import "../globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blue View Suites | Luxury Suites in Astipalea, Greece",
  description:
    "Luxury boutique suites with stunning Aegean Sea views on the island of Astipalea, Greece. Book your dream Mediterranean escape.",
  metadataBase: new URL("https://blueviewsuites.gr"),
  openGraph: {
    title: "Blue View Suites | Astipalea, Greece",
    description:
      "Luxury boutique suites with stunning Aegean Sea views. Traditional Greek beauty meets modern comfort on the enchanting island of Astipalea.",
    url: "https://blueviewsuites.gr",
    siteName: "Blue View Suites",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Blue View Suites - Aegean Sea views from Astipalea",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue View Suites | Astipalea, Greece",
    description:
      "Luxury boutique suites with stunning Aegean Sea views on the island of Astipalea.",
    images: ["https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=1200&h=630&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  alternates: {
    canonical: "https://blueviewsuites.gr",
    languages: {
      en: "https://blueviewsuites.gr/en",
      el: "https://blueviewsuites.gr/el",
    },
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "el")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900">
        <HotelJsonLd />
        <NextIntlClientProvider messages={messages}>
          <ScrollToTop />
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1" tabIndex={-1}>
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <MobileBookBar />
          <ScrollTopButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
