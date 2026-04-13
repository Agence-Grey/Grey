import type { Metadata } from "next";
import { buildPageMetadata } from "@/components/shared/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Paiement confirmé",
  description: "Confirmation de paiement.",
  noIndex: true,
});

export default function PaiementSuccessPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 lg:px-10">
      <h1 className="text-4xl font-semibold text-white">Paiement confirmé</h1>
      <p className="mt-6 text-lg leading-8 text-[var(--color-muted-foreground)]">
        Page de confirmation prête à recevoir les données Stripe.
      </p>
    </div>
  );
}
