import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPaths = ["", "/about", "/services", "/portfolio", "/contact", "/devis", "/cgu", "/cgv", "/confidentialite", "/mentions-legales"];
  const portfolioPaths = ["/portfolio/prana", "/portfolio/classique", "/portfolio/ophelia"];

  return [...staticPaths, ...portfolioPaths].map((path) => ({
    url: new URL(path || "/", baseUrl).toString(),
    lastModified: new Date(),
  }));
}
