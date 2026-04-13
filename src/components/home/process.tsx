import { SectionWrapper } from "@/components/shared/section-wrapper";
import { processSteps } from "@/lib/constants";

export function Process() {
  return (
    <SectionWrapper
      eyebrow="Méthode"
      title="Un pipeline fait pour livrer vite sans salir le résultat"
      description="Le cadrage BMAD est déjà en place. Ici, on déroule avec discipline : structure, design, exécution, mise en ligne."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {processSteps.map((step, index) => (
          <div
            key={step}
            className="rounded-[1.75rem] border border-[var(--color-accent)]/15 bg-[linear-gradient(180deg,_rgba(168,85,247,0.16),_rgba(20,20,20,0.96))] p-5"
          >
            <p className="text-sm font-semibold text-[var(--color-accent)]">0{index + 1}</p>
            <h3 className="mt-4 text-xl font-semibold text-white">{step}</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted-foreground)]">
              Une étape claire, un objectif clair. C’est plus efficace que de se raconter des histoires.
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
