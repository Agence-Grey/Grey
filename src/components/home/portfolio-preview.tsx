import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";

const previewProjects = [
  {
    slug: "prana",
    title: "Prana",
    type: "Yoga",
    summary: "Maquette complète d'un site vitrine pour un studio de yoga — respiration visuelle, parcours fluide et détails premium.",
    image: "/portfolio/prana/img_7f2e848e586d.png",
  },
  {
    slug: "classique",
    title: "Classique",
    type: "Danse",
    summary: "Maquette complète d'un site vitrine pour un studio de danse — élégance, mouvement et présence scénique.",
    image: "/portfolio/classique/img_preview.jpg",
  },
  {
    slug: "ophelia",
    title: "Ophelia",
    type: "Pole Dance",
    summary: "Maquette complete d'un site vitrine pour un studio de pole dance — force, grace et esthetique contemporaine.",
    image: "/portfolio/ophelia/img_preview.jpg",
  },
];

export function PortfolioPreview() {
  return (
    <SectionWrapper
      eyebrow="Portfolio"
      title="Quelques exemples de sites que nous avons déjà créés"
      description="En attendant de créer le vôtre, vous pouvez vous faire une idée de notre travail."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {previewProjects.map((project, index) => (
          <Link
            key={`${project.title}-${index}`}
            href={project.slug === "placeholder" ? "#" : `/portfolio/${project.slug}`}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition hover:border-[var(--color-accent)]/30 hover:bg-white/[0.07]"
          >
            <div className="relative aspect-[4/3] bg-[linear-gradient(135deg,_rgba(168,85,247,0.22),_rgba(255,255,255,0.05))] p-5">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover p-1"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              ) : (
                <div className="flex h-full items-end rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.18),_transparent_50%),rgba(8,8,8,0.92)] p-5">
                  <span className="rounded-full border border-white/10 bg-dark/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
                    {project.type}
                  </span>
                </div>
              )}
            </div>
            <div className="space-y-3 p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
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
