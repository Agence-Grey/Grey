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
            Sprint 3 · Home experience
          </Badge>
          <div className="space-y-6">
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Des sites qui donnent enfin une allure premium aux studios qui bossent sérieusement.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted-foreground)] sm:text-xl">
              L’Agence Grey conçoit des expériences web sobres, rapides et orientées conversion pour les studios de mouvement, sport et biomécanique. Pas de cirque visuel, juste une présence qui tient la route.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/devis">
                Demander un devis
                <ArrowRight className="size-4" />
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
