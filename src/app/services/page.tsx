import type { Metadata } from "next";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { buildPageMetadata } from "@/components/shared/seo";
import { PricingCard } from "@/components/devis/pricing-card";
import { serviceAddons, servicePackages } from "@/lib/content";

export const metadata: Metadata = buildPageMetadata({
  title: "Services",
  description: "Découvrez les trois niveaux d'accompagnement de L'Agence Grey et les services additionnels proposés.",
});

export default function ServicesPage() {
  return (
    <>
      <SectionWrapper
        eyebrow="Services"
        title="Trois offres claires pour avancer sans flou"
        description="Chaque niveau d'accompagnement répond à un degré différent de maturité, d'ambition et de besoin métier."
      >
        <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
          {servicePackages.map((offer, index) => (
            <PricingCard
              key={offer.slug}
              name={offer.name}
              price={offer.price}
              priceNote={offer.priceNote}
              summary={offer.summary}
              features={offer.features}
              featured={index === 1}
              href={`/services/${offer.slug}`}
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Add-ons"
        title="Services additionnels"
        description="Quand le besoin dépasse la simple création de site, on ajoute seulement ce qui sert réellement l'activité."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {serviceAddons.map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-[var(--color-muted-foreground)]">
              <p className="font-semibold text-white">{item.title}</p>
              <p className="mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
