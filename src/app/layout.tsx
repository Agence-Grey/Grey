import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Toaster } from "@/components/ui/sonner";
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
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
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
                </div>
</body>
    </html>
  );
}
