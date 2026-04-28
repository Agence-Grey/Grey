"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";
import { useScroll } from "@/hooks/use-scroll";

export function Header() {
  const isScrolled = useScroll(24);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6 lg:px-8">
      <motion.div
        animate={{
          backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.92)" : "rgba(10, 10, 10, 0.62)",
          borderColor: isScrolled ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.08)",
          boxShadow: isScrolled ? "0 10px 40px rgba(0,0,0,0.28)" : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 backdrop-blur-2xl sm:px-6 lg:px-8",
          isScrolled ? "supports-[backdrop-filter]:bg-black/85" : "supports-[backdrop-filter]:bg-black/60",
          "max-md:!bg-[#0a0a0a] max-md:backdrop-blur-none"
        )}
      >
        <Link href="/" className="flex items-center gap-3 text-white">
          <Image
            src="/logo-grey.png"
            alt="Agence Grey"
            width={140}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <p className="text-sm font-medium tracking-wide text-[var(--color-muted-foreground)]">le web qui rassure</p>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-7">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--color-muted-foreground)] transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button asChild>
            <Link href="/devis">Demander un devis</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/devis">Devis</Link>
          </Button>
          <MobileMenu />
        </div>
      </motion.div>
    </header>
  );
}
