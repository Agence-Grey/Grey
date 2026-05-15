import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { buildPageMetadata } from "@/components/shared/seo";
import { cn } from "@/lib/utils";

const projects = [
  {
    slug: "prana",
    title: "Prana",
    type: "Yoga",
    summary: "Maquette complète d'un site vitrine pour un studio de yoga — respiration visuelle, parcours fluide et détails premium.",
    image: "/portfolio/prana/img_7f2e848e586d.png",
    w: 1290,
    h: 2190,
  },
  {
    slug: "classique",
    title: "Classique",
    type: "Danse",
    summary: "Maquette complète d'un site vitrine pour un studio de danse — élégance, mouvement et présence scénique.",
    image: "/portfolio/classique/img_01.png",
    w: 2880,
    h: 1412,
  },
  {
    slug: "ophelia",
    title: "Ophelia",
    type: "Pole Dance",
    summary: "Maquette complete d'un site vitrine pour un studio de pole dance — force, grace et esthetique contemporaine.",
    image: "/portfolio/ophelia/img_01.jpg",
    w: 1859,
    h: 883,
  },
];

export const metadata: Metadata = buildPageMetadata({
  path: "/portfolio",
  title: "Portfolio",
  description: "Sélection de réalisations et cas d'usage pour studios de mouvement, yoga, pole dance et performance.",
});

export default function PortfolioPage() {
  return (
    <SectionWrapper
      eyebrow="Portfolio"
      title="Un petit aperçu de ce qu'on a déjà construit"
      description="Un site professionnel pour un studio professionnel, vous êtes peut-être le prochain."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => {
          const landscape = project.w >= project.h;
          return (
            <Link
              key={`${project.slug}-${index}`}
              href={`/portfolio/${project.slug}`}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition hover:border-[var(--color-accent)]/30 hover:bg-white/[0.07]"
            >
              <div
                className={cn(
                  "relative bg-[linear-gradient(135deg,_rgba(168,85,247,0.22),_rgba(255,255,255,0.05))] p-5",
                  landscape ? "aspect-[16/10]" : "aspect-[4/3]"
                )}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={cn(
                    "p-1 transition duration-500",
                    landscape ? "object-contain" : "object-cover"
                  )}
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
          );
        })}
      </div>
    </SectionWrapper>
  );
}
