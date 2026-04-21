import { SectionWrapper } from "@/components/shared/section-wrapper";
import { methodCards } from "@/lib/constants";

export function Process() {
  return (
    <SectionWrapper
      eyebrow="Méthode"
      title="La méthode GREY"
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {methodCards.map((card, index) => (
          <div
            key={card.title}
            className="rounded-[1.75rem] border border-[var(--color-accent)]/15 bg-[linear-gradient(180deg,_rgba(168,85,247,0.16),_rgba(20,20,20,0.96))] p-5"
          >
            <p className="text-sm font-semibold text-[var(--color-accent)]">0{index + 1}</p>
            <h3 className="mt-4 text-xl font-semibold text-white">{card.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted-foreground)]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
