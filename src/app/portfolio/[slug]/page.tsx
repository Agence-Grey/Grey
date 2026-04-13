import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { buildPageMetadata } from "@/components/shared/seo";
import { Button } from "@/components/ui/button";
import { portfolioEntries } from "@/lib/content";

export async function generateStaticParams() {
  return portfolioEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = portfolioEntries.find((item) => item.slug === slug);
  if (!entry) return {};
  return buildPageMetadata({ title: entry.titre, description: entry.description });
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = portfolioEntries.find((item) => item.slug === slug);
  if (!entry) notFound();

  return (
    <SectionWrapper
      eyebrow="Projet"
      title={entry.titre}
      description={entry.description}
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="aspect-[16/10] rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(168,85,247,0.2),_rgba(255,255,255,0.04))] p-6">
            <div className="flex h-full items-end rounded-[1.5rem] border border-white/10 bg-black/45 p-6">
              <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
                Placeholder visuel — {entry.type}
              </span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {entry.results.map((result) => (
              <div key={result} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-[var(--color-muted-foreground)]">
                {result}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">Challenge</p>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted-foreground)]">{entry.challenge}</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">Solution</p>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted-foreground)]">{entry.solution}</p>
          </div>
          <div className="flex flex-col gap-3">
            <Button asChild>
              <Link href="/contact">Discuter de ce type de projet</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/portfolio">Retour au portfolio</Link>
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
