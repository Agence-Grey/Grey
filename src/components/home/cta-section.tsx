import Link from "next/link";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <SectionWrapper>
      <div className="overflow-hidden rounded-[2.25rem] border border-[var(--color-accent)]/25 bg-[linear-gradient(135deg,_rgba(168,85,247,0.92),_rgba(127,63,191,0.88))] px-6 py-10 text-black shadow-[0_30px_90px_rgba(127,63,191,0.35)] sm:px-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-black/70">Prête à rencontrer tes nouveaux élèves ?</p>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
              Si ton studio a besoin de plus de visibilité, ou que tu manques de temps pour gérer ton site :
            </h2>
            <p className="max-w-2xl text-base leading-7 text-black/80 sm:text-lg">
              Une discussion de quelques minutes nous permettra d'identifier tes besoins et les bases de ton projet !
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
              <Link href="/devis">Simuler un devis</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-black/20 text-black hover:bg-black/10">
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
