import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Toaster } from "@/components/ui/sonner";
import { LaureWidget } from "@/components/laure/laure-widget";
import { SchemaOrg } from "@/components/shared/schema-org";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "L'Agence Grey — Agence web IA à Nice | Sites premium pour studios",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — le web qui rassure`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${poppins.variable} bg-[var(--color-background)] font-sans text-[var(--color-foreground)] antialiased`}>
                <div className="relative flex min-h-screen flex-col bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.16),_transparent_35%),linear-gradient(180deg,_#000_0%,_#050505_100%)]">
                  <Header />
                  <main className="flex-1">{children}</main>
                  <Footer />
                  <CookieBanner />
                  <Toaster />
                  <LaureWidget />
                  <SchemaOrg data={{
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    name: "L'Agence Grey",
                    description: siteConfig.description,
                    url: siteConfig.url,
                    address: {
                      "@type": "PostalAddress",
                      streetAddress: "367 route de Ciaus",
                      addressLocality: "Breil-sur-Roya",
                      postalCode: "06540",
                      addressCountry: "FR",
                    },
                    areaServed: {
                      "@type": "City",
                      name: "Nice",
                    },
                    knowsAbout: ["Agence web", "Création site internet", "SEO"],
                    telephone: "+33618008531",
                    email: "agencegrey06@gmail.com",
                  }} />
                </div>
</body>
    </html>
  );
}
