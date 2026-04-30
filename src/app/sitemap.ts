import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const rawBase = process.env.NEXT_PUBLIC_SITE_URL ?? "https://agencegrey.fr";
  const baseUrl = rawBase.trim().replace(/\/$/, "");

  return ["", "/about", "/services", "/portfolio", "/contact", "/devis"].map((path) => ({
    url: new URL(path || "/", baseUrl).toString(),
    lastModified: new Date(),
  }));
}
