import type { Metadata } from "next";
import { CtaSection } from "@/components/home/cta-section";
import { Hero } from "@/components/home/hero";
import { PortfolioPreview } from "@/components/home/portfolio-preview";
import { Process } from "@/components/home/process";
import { Solutions } from "@/components/home/solutions";
import { SchemaOrg } from "@/components/shared/schema-org";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "Agence web IA à Nice | Sites premium pour studios",
  description: siteConfig.description,
  openGraph: {
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "L'Agence Grey — le web qui rassure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
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
