import type { Metadata } from "next";
import { buildPageMetadata } from "@/components/shared/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Paiement",
  description: "Zone de paiement sécurisée.",
  noIndex: true,
});

export default function PaiementPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 lg:px-10">
      <h1 className="text-4xl font-semibold text-white">Paiement</h1>
      <p className="mt-6 text-lg leading-8 text-[var(--color-muted-foreground)]">
        L’intégration Checkout Stripe arrivera au sprint de paiement.
      </p>
    </div>
  );
}
