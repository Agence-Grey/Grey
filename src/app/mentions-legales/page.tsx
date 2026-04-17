import type { Metadata } from "next";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { buildPageMetadata } from "@/components/shared/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Mentions légales",
  description: "Mentions légales de L’Agence Grey.",
  noIndex: true,
});

const sections = [
  {
    title: "Éditeur du site",
    body: [
      "Nom commercial : L’Agence Grey",
      "Responsables de publication : Adrien DEBARLE & Ophélie HUTIN",
      "Adresse : 367 route de Ciaus, Breil-sur-Roya 06540",
      "Email : agencegrey06@gmail.com",
      "Téléphone / WhatsApp : +33 6 18 00 85 31",
    ],
  },
  {
    title: "Hébergement",
    body: [
      "Hébergeur prévu : Vercel",
      "Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA",
      "Site : https://vercel.com",
    ],
  },
  {
    title: "Propriété intellectuelle",
    body: [
      "L’ensemble des contenus du site (textes, structure, éléments graphiques, images, identité visuelle) est protégé par le droit de la propriété intellectuelle.",
      "Toute reproduction, diffusion ou exploitation sans autorisation écrite préalable est interdite.",
    ],
  },
  {
    title: "Responsabilité",
    body: [
      "L’Agence Grey s’efforce de fournir des informations aussi précises que possible, sans garantir l’absence totale d’erreur ou d’omission.",
      "L’utilisateur reste responsable de l’usage qu’il fait des informations présentes sur le site.",
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <SectionWrapper eyebrow="Légal" title="Mentions légales" description="Version de travail structurée, prête à être finalisée avec les informations légales définitives.">
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
