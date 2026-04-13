import type { Metadata } from "next";
import { CtaSection } from "@/components/home/cta-section";
import { Hero } from "@/components/home/hero";
import { PortfolioPreview } from "@/components/home/portfolio-preview";
import { Process } from "@/components/home/process";
import { Solutions } from "@/components/home/solutions";
import { SchemaOrg } from "@/components/shared/schema-org";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "fr-FR",
  about: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
};

export default function Home() {
  return (
    <>
      <SchemaOrg data={schema} />
      <Hero />
      <Solutions />
      <Process />
      <PortfolioPreview />
      <CtaSection />
    </>
  );
}
