import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  return ["", "/about", "/services", "/portfolio", "/contact", "/devis", "/cgu", "/cgv", "/confidentialite", "/mentions-legales"].map((path) => ({
    url: new URL(path || "/", baseUrl).toString(),
    lastModified: new Date(),
  }));
}
