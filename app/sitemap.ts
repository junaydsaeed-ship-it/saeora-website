import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://saeora.com",
      lastModified: new Date("2026-06-06"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://saeora.com/contact",
      lastModified: new Date("2026-06-06"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
