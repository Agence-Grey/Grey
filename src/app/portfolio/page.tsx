import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { buildPageMetadata } from "@/components/shared/seo";

const projects = [
  {
    slug: "prana",
    title: "Prana",
    type: "Yoga",
    summary: "Maquette complète d'un site vitrine pour un studio de yoga — respiration visuelle, parcours fluide et détails premium.",
    image: "/portfolio/prana/img_4d930aae2969.png",
  },
  {
    slug: "classique",
    title: "Classique",
    type: "Danse",
    summary: "Maquette complète d'un site vitrine pour un studio de danse — élégance, mouvement et présence scénique.",
    image: "/portfolio/classique/img_01.png",
  },
  {
    slug: "ophelia",
    title: "Ophelia",
    type: "Pole Dance",
    summary: "Maquette complete d'un site vitrine pour un studio de pole dance — force, grace et esthetique contemporaine.",
    image: "/portfolio/ophelia/img_01.png",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Portfolio",
  description: "Sélection de réalisations et cas d'usage pour studios de mouvement, yoga, pole dance et performance.",
});

export default function PortfolioPage() {
  return (
    <SectionWrapper
      eyebrow="Portfolio"
      title="Galerie de cas d'usage et de directions créatives"
      description="Découvrez nos maquettes conçues pour les studios de mouvement, yoga, danse et pole dance."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Link
            key={`${project.slug}-${index}`}
            href={`/portfolio/${project.slug}`}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition hover:border-[var(--color-accent)]/30 hover:bg-white/[0.07]"
          >
            <div className="relative aspect-[4/3] bg-[linear-gradient(135deg,_rgba(168,85,247,0.22),_rgba(255,255,255,0.05))] p-5">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover p-1"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="space-y-3 p-6">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                <ArrowUpRight className="size-5 text-[var(--color-accent)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="text-sm leading-6 text-[var(--color-muted-foreground)]">{project.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
