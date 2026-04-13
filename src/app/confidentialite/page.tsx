import type { Metadata } from "next";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { buildPageMetadata } from "@/components/shared/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Politique de confidentialité",
  description: "Politique de confidentialité de L’Agence Grey.",
  noIndex: true,
});

const sections = [
  {
    title: "Données collectées",
    body: [
      "L’Agence Grey peut collecter les informations transmises via les formulaires du site : nom, email, téléphone, type d’activité et message.",
      "Ces données sont utilisées uniquement pour traiter la demande et assurer le suivi commercial ou technique associé.",
    ],
  },
  {
    title: "Base légale et finalité",
    body: [
      "Les données sont traitées dans le cadre d’un échange précontractuel, d’une relation commerciale ou du consentement donné via le formulaire.",
      "Aucune donnée n’est revendue à des tiers.",
    ],
  },
  {
    title: "Durée de conservation",
    body: [
      "Les données sont conservées pendant une durée proportionnée à la finalité du traitement et aux obligations légales applicables.",
      "Les durées exactes doivent être confirmées avant mise en ligne définitive.",
    ],
  },
  {
    title: "Droits des personnes",
    body: [
      "Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’opposition, d’effacement et de limitation du traitement de vos données.",
      "Pour exercer ces droits, vous pourrez contacter L’Agence Grey à l’adresse email de contact définitive du site.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "Le site utilise des cookies strictement nécessaires au fonctionnement, ainsi qu’un bandeau de consentement pour encadrer les usages complémentaires éventuels.",
      "Les outils d’analyse ou services tiers supplémentaires devront être listés précisément avant publication finale.",
    ],
  },
];

export default function ConfidentialitePage() {
  return (
    <SectionWrapper eyebrow="Légal" title="Politique de confidentialité" description="Base structurée conforme à l’esprit RGPD, à finaliser avec les données légales et techniques exactes.">
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
