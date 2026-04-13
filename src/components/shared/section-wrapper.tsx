import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function SectionWrapper({
  children,
  className,
  eyebrow,
  title,
  description,
}: SectionWrapperProps) {
  return (
    <section className={cn("mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24", className)}>
      {(eyebrow || title || description) && (
        <div className="mb-10 max-w-3xl space-y-4">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              {eyebrow}
            </p>
          ) : null}
          {title ? <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2> : null}
          {description ? <p className="text-base leading-7 text-[var(--color-muted-foreground)] sm:text-lg">{description}</p> : null}
        </div>
      )}
      {children}
    </section>
  );
}
