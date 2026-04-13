import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { buildPageMetadata } from "@/components/shared/seo";
import { serviceAddons, servicePackages } from "@/lib/content";

export const metadata: Metadata = buildPageMetadata({
  title: "Services",
  description: "Découvrez les trois niveaux d’accompagnement de L’Agence Grey et les services additionnels proposés.",
});

export default function ServicesPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Services"
        title="Trois offres claires pour avancer sans flou"
        description="Chaque niveau d’accompagnement répond à un degré différent de maturité, d’ambition et de besoin métier."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {servicePackages.map((offer, index) => (
            <Card key={offer.slug} className={index === 1 ? "border-[var(--color-accent)]/35 bg-[linear-gradient(180deg,_rgba(168,85,247,0.12),_rgba(255,255,255,0.04))]" : ""}>
              <CardHeader>
                <CardTitle>{offer.name}</CardTitle>
                <p className="text-3xl font-semibold text-white">{offer.price}</p>
                <CardDescription>{offer.summary}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-sm leading-7 text-[var(--color-muted-foreground)]">{offer.idealFor}</p>
                <ul className="space-y-3 text-sm leading-7 text-[var(--color-muted-foreground)]">
                  {offer.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full" variant={index === 1 ? "default" : "secondary"}>
                  <Link href={`/services/${offer.slug}`}>Voir le détail</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Add-ons"
        title="Services additionnels"
        description="Quand le besoin dépasse la simple création de site, on ajoute seulement ce qui sert réellement l’activité."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {serviceAddons.map((item) => (
            <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-[var(--color-muted-foreground)]">
              {item}
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
