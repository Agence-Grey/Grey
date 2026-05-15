"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { servicePackages } from "@/lib/content";

interface PricingCardProps {
  name: string;
  price: string;
  priceNote: string;
  summary: string;
  features: readonly string[];
  featured?: boolean;
  href: string;
}

function PricingCard({
  name,
  price,
  priceNote,
  summary,
  features,
  featured = false,
  href,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className={`relative flex flex-col rounded-[2rem] border p-8 transition-transform hover:-translate-y-1 ${
        featured
          ? "border-[var(--color-accent)]/35 bg-[linear-gradient(180deg,_rgba(168,85,247,0.12),_rgba(255,255,255,0.04))] shadow-[0_0_60px_rgba(168,85,247,0.12)]"
          : "border-white/10 bg-white/5"
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-accent)] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-black">
          Recommandé
        </div>
      )}

      <div>
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="mt-4 border-b border-white/10 pb-5 text-[0.95rem] leading-relaxed text-[var(--color-muted-foreground)]">
          {summary}
        </p>
      </div>

      <ul className="my-6 space-y-3.5 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 min-w-[8px] rounded-full bg-[var(--color-accent)]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <Button asChild className="w-full" variant={featured ? "default" : "secondary"} size="lg">
          <Link href={href}>
            <span className="text-lg font-bold">{price}</span>
            {priceNote && <span className="ml-2 text-xs font-normal opacity-80">{priceNote}</span>}
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}

export function Solutions() {
  return (
    <SectionWrapper
      eyebrow="Nos Offres"
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
  );
}
