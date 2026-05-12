import type { Metadata } from "next";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { buildPageMetadata } from "@/components/shared/seo";
import { PricingCard } from "@/components/devis/pricing-card";
import { AddOnCard } from "@/components/devis/addon-card";
import { ReassuranceCard } from "@/components/devis/reassurance-card";
import { CTABanner } from "@/components/devis/cta-banner";
import { servicePackages, serviceAddons, devisReassurance } from "@/lib/content";

export const metadata: Metadata = buildPageMetadata({
  title: "Devis — Tarifs clairs",
  description: "Des tarifs clairs, sans surprise. Découvrez les trois offres de L'Agence Grey et choisissez celle qui correspond à vos besoins.",
});

export default function DevisPage() {
  return (
    <>
      {/* Hero */}
      <section className="pb-16 pt-12 text-center sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-accent)]">Devis</p>
          <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            Des tarifs clairs, sans surprise
          </h1>
          <p className="mx-auto max-w-[560px] text-lg leading-relaxed text-[var(--color-muted-foreground)]">
            Chaque offre est pensée pour correspondre à une étape de votre activité. Pas de frais cachés, pas de jargon. Juste ce dont vous avez besoin.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
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
                href="/contact"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services additionnels */}
      <SectionWrapper
        eyebrow="Add-ons"
        title="Services additionnels"
        description="Quand le besoin dépasse la simple création de site, on ajoute seulement ce qui sert réellement l'activité."
      >
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {serviceAddons.map((item, index) => (
            <AddOnCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Réassurance */}
      <section className="bg-[var(--color-surface-2)]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-accent)]">Pourquoi Grey ?</p>
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-white sm:text-[2rem]">Le web qui rassure</h2>
          <p className="max-w-[640px] text-[1.05rem] leading-relaxed text-[var(--color-muted-foreground)]">
            On ne vend pas de sites. On construit des outils qui font grandir votre activité, avec humilité et exigence.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {devisReassurance.map((item, index) => (
              <ReassuranceCard
                key={item.title}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>

          <CTABanner
            title="Prêt à avancer sereinement ?"
            description="Racontez-nous votre projet. On vous recontacte sous 24h avec un devis personnalisé et des conseils concrets."
            ctaText="Demander un devis gratuit"
            href="/contact"
          />
        </div>
      </section>
    </>
  );
}
