import type { Metadata } from "next";
import { buildPageMetadata } from "@/components/shared/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Devis",
  description: "Pré-cadrage de devis en ligne pour L’Agence Grey.",
});

export default function DevisPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 lg:px-10">
      <h1 className="text-4xl font-semibold text-white">Devis en ligne</h1>
      <p className="mt-6 text-lg leading-8 text-[var(--color-muted-foreground)]">
        Fondation prête pour le formulaire multi-étapes du sprint suivant.
      </p>
    </div>
  );
}
