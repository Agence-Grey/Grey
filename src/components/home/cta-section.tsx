import Link from "next/link";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <SectionWrapper>
      <div className="overflow-hidden rounded-[2.25rem] border border-[var(--color-accent)]/25 bg-[linear-gradient(135deg,_rgba(168,85,247,0.92),_rgba(127,63,191,0.88))] px-6 py-10 text-black shadow-[0_30px_90px_rgba(127,63,191,0.35)] sm:px-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-black/70">Prêt à cadrer le site ?</p>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
              Si ton studio a besoin d’une présence plus nette, plus crédible et plus rentable, on peut arrêter de bricoler.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-black/80 sm:text-lg">
              On part d’un devis guidé, puis on transforme ça en site structuré, rapide et cohérent avec ton positionnement.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
              <Link href="/devis">Lancer le devis</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-black/20 text-black hover:bg-black/10">
              <Link href="/contact">Parler du projet</Link>
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
