import type { Metadata } from "next";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { buildPageMetadata } from "@/components/shared/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "CGV",
  description: "Conditions générales de vente de L’Agence Grey.",
  noIndex: true,
});

const sections = [
  {
    title: "Objet",
    body: [
      "Les présentes conditions générales de vente encadrent les prestations proposées par L’Agence Grey : création de site, maintenance, optimisation et accompagnement digital.",
    ],
  },
  {
    title: "Commande et devis",
    body: [
      "Toute prestation fait l’objet d’un devis ou d’une proposition validée par le client avant lancement.",
      "La signature du devis ou l’acceptation écrite vaut validation de la commande.",
    ],
  },
  {
    title: "Tarifs et paiement",
    body: [
      "Les prix sont exprimés en euros. Les modalités de paiement (acompte, échéances, solde) sont précisées dans le devis signé.",
      "En l’absence de précision contraire, toute prestation commencée reste due au prorata du travail engagé.",
    ],
  },
  {
    title: "Délais et obligations du client",
    body: [
      "Les délais de livraison dépendent aussi de la réactivité du client dans la transmission des contenus, validations et retours.",
      "Tout retard causé par des éléments manquants ou des validations tardives peut entraîner un décalage du planning.",
    ],
  },
  {
    title: "Maintenance et responsabilité",
    body: [
      "La maintenance couvre uniquement le périmètre défini dans l’offre ou le contrat associé.",
      "L’Agence Grey ne pourra être tenue responsable d’un dommage résultant d’un usage détourné, d’une intervention tierce non validée ou d’une interruption de service externe.",
    ],
  },
];

export default function CgvPage() {
  return (
    <SectionWrapper eyebrow="Légal" title="Conditions générales de vente" description="Version structurée à faire valider juridiquement avant publication finale.">
      <div className="space-y-6">
        {sections.map((section) => (
          <section key={section.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-muted-foreground)]">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </SectionWrapper>
  );
}
