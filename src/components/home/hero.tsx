import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroAnimation } from "@/components/home/hero-animation";
import { SectionWrapper } from "@/components/shared/section-wrapper";

export function Hero() {
  return (
    <SectionWrapper className="pt-12 lg:pt-20">
      <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <Badge variant="secondary" className="w-fit border-[var(--color-accent)]/20 bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
            Agence web pour studios
          </Badge>
          <div className="space-y-6">
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              CRÉATEURS DE SITES WEB POUR DES STUDIOS DE MOUVEMENT & BIEN-ÊTRE
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted-foreground)] sm:text-xl">
              Des sites internet pensés pour développer votre studio, tout simplement. De la pole dance au yoga, nous créons des sites web à l&apos;image de votre discipline : dynamiques, fluides et élégants. Offrez à votre studio une présence digitale professionnelle, sans complexité, pour mettre en lumière votre passion et faciliter la réservation.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="!bg-[#7c3aed] hover:!bg-[#6d28d9] !px-8 !py-4 !text-base !font-bold shadow-[0_0_30px_rgba(124,58,237,0.3)]"
            >
              <Link href="/devis">
                Demander un devis
                <ArrowRight className="size-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/services">Explorer les offres</Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["< 2 semaines", "pour une landing premium"],
              ["100% FR", "copy, parcours et SEO pensés local"],
              ["IA + structure", "pour livrer vite sans bâcler"],
            ].map(([value, label]) => (
              <div key={value} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                <p className="text-xl font-semibold text-white">{value}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted-foreground)]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <HeroAnimation />
      </div>
    </SectionWrapper>
  );
}
