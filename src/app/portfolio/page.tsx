import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { buildPageMetadata } from "@/components/shared/seo";
import { portfolioEntries } from "@/lib/content";

export const metadata: Metadata = buildPageMetadata({
  title: "Portfolio",
  description: "Sélection de réalisations et cas d’usage pour studios de mouvement, yoga, pole dance et performance.",
});

export default function PortfolioPage() {
  return (
    <SectionWrapper
      eyebrow="Portfolio"
      title="Galerie de cas d’usage et de directions créatives"
      description="En attendant les cas clients définitifs, la structure est déjà prête pour raconter les projets avec clarté."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {portfolioEntries.map((entry) => (
          <Link
            key={entry.slug}
            href={`/portfolio/${entry.slug}`}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition hover:border-[var(--color-accent)]/35"
          >
            <div className="aspect-[4/3] bg-[linear-gradient(135deg,_rgba(168,85,247,0.22),_rgba(255,255,255,0.05))] p-5">
              <div className="flex h-full items-end rounded-[1.5rem] border border-white/10 bg-black/50 p-5">
                <span className="rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
                  {entry.type}
                </span>
              </div>
            </div>
            <div className="space-y-3 p-6">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold text-white">{entry.titre}</h2>
                <ArrowUpRight className="size-5 text-[var(--color-accent)] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="text-sm leading-7 text-[var(--color-muted-foreground)]">{entry.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
