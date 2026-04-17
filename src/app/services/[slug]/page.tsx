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

  const methods = [
    {
      title: "Conformité légale",
      description: "Un site qui respecte vos obligations légales : mentions légales, CGU, RGPD…",
    },
    {
      title: "Écoute & cadrage",
      description: "Une écoute attentive de vos besoins avant toute création : couleurs, RDV en ligne, automatisation…",
    },
    {
      title: "Accompagnement personnalisé",
      description: "Chaque étape de création sera validée en amont et en aval. Nous serons à votre écoute à chaque moment.",
    },
    {
      title: "Prise de RDV simplifiée",
      description: "Un site qui simplifie la prise de rendez-vous en ligne : trouvez vos futurs élèves en quelques clics.",
    },
  ];

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
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">Notre méthode Grey</p>
          <div className="mt-5 space-y-5">
            {methods.map((method) => (
              <div key={method.title} className="space-y-1">
                <p className="text-sm font-semibold text-white">{method.title}</p>
                <p className="text-sm leading-6 text-[var(--color-muted-foreground)]">{method.description}</p>
              </div>
            ))}
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
