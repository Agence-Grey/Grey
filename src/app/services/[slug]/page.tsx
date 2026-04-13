import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { buildPageMetadata } from "@/components/shared/seo";
import { Button } from "@/components/ui/button";
import { servicePackages } from "@/lib/content";

export async function generateStaticParams() {
  return servicePackages.map((offer) => ({ slug: offer.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const offer = servicePackages.find((entry) => entry.slug === slug);
  if (!offer) return {};
  return buildPageMetadata({ title: `Offre ${offer.name}`, description: offer.summary });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const offer = servicePackages.find((entry) => entry.slug === slug);
  if (!offer) notFound();

  return (
    <SectionWrapper
      eyebrow="Service"
      title={offer.name}
      description={offer.summary}
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
        <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="text-3xl font-semibold text-white">{offer.price}</p>
          <p className="text-base leading-8 text-[var(--color-muted-foreground)]">{offer.idealFor}</p>
          <ul className="space-y-4 text-sm leading-7 text-[var(--color-muted-foreground)]">
            {offer.features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(168,85,247,0.12),_rgba(255,255,255,0.04))] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">Approche Grey</p>
          <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--color-muted-foreground)]">
            <p>Chaque offre est pensée pour rester simple à comprendre, simple à valider et simple à faire évoluer.</p>
            <p>On préfère une structure claire et robuste à une promesse floue et spectaculaire.</p>
          </div>
          <div className="mt-8 flex flex-col gap-3">
            <Button asChild>
              <Link href="/devis">Demander un devis</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/contact">Poser une question</Link>
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
