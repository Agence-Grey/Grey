import Link from "next/link";
import { Check } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { offers } from "@/lib/constants";

const bullets = {
  starter: ["Landing page premium", "Copy orienté conversion", "Responsive impeccable"],
  pro: ["Site institutionnel complet", "Parcours SEO clair", "Structure prête pour le scale"],
  premium: ["Expérience sur mesure", "Automatisations & paiement", "Accompagnement stratégique"],
} as const;

export function Solutions() {
  return (
    <SectionWrapper
      eyebrow="Solutions"
      title="Trois cartes, trois niveaux d’intensité"
      description="Une base commerciale nette, avec assez de matière pour présenter l’offre sans improviser."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {offers.map((offer, index) => (
          <Card
            key={offer.slug}
            className={[
              "relative overflow-hidden rounded-[2rem]",
              index === 1 ? "border-[var(--color-accent)]/40 bg-[linear-gradient(180deg,_rgba(168,85,247,0.14),_rgba(255,255,255,0.04))]" : "",
            ].join(' ')}
          >
            <CardHeader>
              <div className="flex items-center justify-between gap-4">
                <CardTitle>{offer.name}</CardTitle>
                {index == 1 ? <span className="rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs font-semibold text-black">Le plus demandé</span> : null}
              </div>
              <p className="text-3xl font-semibold text-white">{offer.price}</p>
              <CardDescription>{offer.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {bullets[offer.slug].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[var(--color-muted-foreground)]">
                    <span className="mt-1 inline-flex size-5 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                      <Check className="size-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant={index === 1 ? "default" : "secondary"} className="w-full">
                <Link href={`/services/${offer.slug}`}>Voir l’offre</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
