"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTABannerProps {
  title: string;
  description: string;
  ctaText: string;
  href: string;
}

export function CTABanner({ title, description, ctaText, href }: CTABannerProps) {
  return (
    <div className="mt-16 rounded-[2rem] border border-[var(--color-accent)]/20 bg-[linear-gradient(135deg,_rgba(168,85,247,0.15),_rgba(168,85,247,0.05))] p-12 text-center sm:p-16">
      <h2 className="mb-3 text-[1.6rem] font-semibold text-white">{title}</h2>
      <p className="mx-auto mb-6 max-w-[480px] text-[var(--color-muted-foreground)]">{description}</p>
      <Button asChild size="lg">
        <Link href={href}>{ctaText}</Link>
      </Button>
    </div>
  );
}
