import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://blueviewsuites.gr";
  const locales = ["en", "el"];
  const lastModified = new Date();

  const routes = ["", "/suites", "/about", "/contact", "/book"];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : route === "/suites" ? 0.9 : 0.7,
      });
    }
  }

  return entries;
}
