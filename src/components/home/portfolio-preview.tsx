import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";

const previewProjects = [
  {
    slug: "placeholder",
    title: "Studio biomécanique premium",
    type: "Biomechanics",
    summary: "Présence digitale sobre, crédible, pensée pour rassurer avant même la première prise de contact.",
  },
  {
    slug: "placeholder",
    title: "Studio yoga & mobilité",
    type: "Yoga",
    summary: "Parcours simple, respiration visuelle, CTA nets — rien qui parasite la conversion.",
  },
  {
    slug: "placeholder",
    title: "Studio force & performance",
    type: "Performance",
    summary: "Une esthétique plus dense, plus stricte, sans tomber dans le cliché fitness criard.",
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
            href={`/portfolio/${project.slug}`}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition hover:border-[var(--color-accent)]/30 hover:bg-white/[0.07]"
          >
            <div className="aspect-[4/3] bg-[linear-gradient(135deg,_rgba(168,85,247,0.22),_rgba(255,255,255,0.05))] p-5">
              <div className="flex h-full items-end rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.18),_transparent_50%),rgba(8,8,8,0.92)] p-5">
                <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
                  {project.type}
                </span>
              </div>
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
