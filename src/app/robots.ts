import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url;
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
