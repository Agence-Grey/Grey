import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://agencegrey.fr";
  return ["", "/about", "/services", "/portfolio", "/contact", "/devis"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
