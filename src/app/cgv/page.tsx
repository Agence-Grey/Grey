import type { Metadata } from "next";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { buildPageMetadata } from "@/components/shared/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "CGV",
  description: "Conditions générales de vente de L'Agence Grey.",
  noIndex: true,
});

const sections = [
  {
    title: "1. Objet",
    body: [
      "Les présentes Conditions Générales de Vente (CGV) définissent les modalités applicables aux prestations de création, maintenance et hébergement de sites internet proposées par l'Agence Grey, micro-entreprise dont le siège social est situé au 367 route de Ciaus, 06540 Breil-sur-Roya (France).",
      "Toute signature de devis ou commande implique l'adhésion pleine et entière du client aux présentes CGV.",
    ],
  },
  {
    title: "2. Prestations proposées",
    body: [
      "L'Agence Grey propose :",
      "• La création de sites internet vitrines et e-commerce ;",
      "• La maintenance et la mise à jour de sites internet ;",
      "• L'hébergement de sites internet (dans le cadre des formules avec abonnement) ;",
      "• Des prestations complémentaires (référencement naturel, ajout de contenus, accompagnement, tutoriels, conseils, création de logo et de charte graphique).",
    ],
  },
  {
    title: "3. Devis et commande",
    body: [
      "Toute prestation fait l'objet d'un devis écrit précisant la nature de la mission, le prix et les délais estimatifs.",
      "La commande devient ferme et définitive à la signature du devis et au versement d'un acompte de 30 % du montant total.",
      "Le projet ne sera lancé qu'à réception de cet acompte.",
    ],
  },
  {
    title: "4. Prix et modalités de paiement",
    body: [
      "Pour les prestations de création de site, un acompte de 30 % est dû à la signature du devis et le solde à la livraison, avant la mise en ligne du site.",
      "Le site ne sera pas mis en ligne avant réception du solde.",
      "Les tarifs indiqués sur les devis sont exprimés hors taxes. L'application de la TVA dépendra du régime fiscal en vigueur au moment de la facturation.",
      "Pour les prestations de maintenance et d'hébergement :",
      "• Le paiement est mensuel, à effectuer par virement bancaire entre le 1er et le 10 de chaque mois.",
      "• En cas de non-paiement à l'échéance, un email de relance sera envoyé à partir du 10 du mois.",
      "• Sans régularisation avant le 15, l'hébergement et la maintenance pourront être suspendus jusqu'au règlement.",
      "Barèmes et remises : Les tarifs et éventuelles remises liés aux packs sont ceux indiqués sur le site www.agencegrey.fr ou sur le devis transmis au client.",
    ],
  },
  {
    title: "5. Droit de rétractation",
    body: [
      "Conformément à l'article L221-18 du Code de la consommation, le client consommateur (non professionnel) dispose d'un délai de 14 jours à compter de la signature du devis pour exercer son droit de rétractation, sans avoir à motiver sa décision.",
      "Toutefois, si le client demande expressément que l'exécution de la prestation commence avant la fin de ce délai, il renonce à son droit de rétractation pour la partie déjà exécutée.",
      "En cas de rétractation après le début de la prestation, le client reste redevable du montant correspondant au travail déjà réalisé.",
    ],
  },
  {
    title: "6. Durée et résiliation des abonnements",
    body: [
      "Les prestations de maintenance et d'hébergement font l'objet d'un engagement minimum de 6 ou 12 mois, selon l'offre choisie.",
      "Au-delà de cette période, la résiliation est possible à tout moment, sans préavis, par simple demande écrite (email).",
      "En cas de non-paiement, l'Agence Grey se réserve le droit d'interrompre l'hébergement et la maintenance du site internet.",
      "Le client pourra ensuite confier la remise en ligne de son site à un prestataire de son choix.",
    ],
  },
  {
    title: "7. Livraison et propriété",
    body: [
      "Le site internet sera livré et mis en ligne uniquement après paiement intégral du solde.",
      "• En cas de formule \"site seul\", le client est responsable de son hébergement et de la mise en ligne, bien qu'il puisse bénéficier de conseils à ce sujet.",
      "• En cas de formule avec abonnement (\"Pack Sérénité\"), l'Agence Grey prend en charge l'hébergement, les mises à jour et la maintenance.",
      "Le client dispose d'un accès complet (codes d'administration) à son site une fois le paiement total effectué.",
    ],
  },
  {
    title: "8. Garantie technique",
    body: [
      "L'Agence Grey garantit le bon fonctionnement du site au moment de sa livraison.",
      "Passé un délai de 15 jours après la mise en ligne, toute intervention technique (correction de bug, mise à jour, restauration de sauvegarde) fera l'objet d'un devis séparé, sauf en cas d'erreur directement imputable à l'Agence.",
      "Cette garantie ne couvre pas :",
      "• les erreurs liées à une mauvaise manipulation du client,",
      "• les incidents dus à des mises à jour externes (plugins, hébergeur, CMS),",
      "• ou tout cas de force majeure.",
      "Les clients sous abonnement maintenance bénéficient d'une prise en charge intégrale de ces interventions.",
    ],
  },
  {
    title: "9. Responsabilités du client",
    body: [
      "Le client s'engage à :",
      "• Fournir les contenus nécessaires (textes, images, logos) dans les délais convenus ;",
      "• Garantir qu'il détient les droits d'utilisation de tous les éléments transmis ;",
      "• Vérifier la conformité légale de son site internet (mentions légales, CGV, politique de confidentialité, respect du RGPD, etc.).",
      "L'Agence Grey peut fournir des modèles et conseils, mais ne peut être tenue responsable d'une éventuelle sanction liée à la non-conformité du site du client.",
    ],
  },
  {
    title: "10. Responsabilités de l'Agence",
    body: [
      "L'Agence Grey s'engage à :",
      "• Fournir un site fonctionnel et conforme au devis signé ;",
      "• Réaliser ses prestations selon les standards techniques en vigueur ;",
      "• Assurer la maintenance des sites sous abonnement (mises à jour, corrections, sécurité, accompagnement).",
      "L'Agence ne saurait être tenue responsable :",
      "• d'une indisponibilité liée à un hébergeur tiers,",
      "• d'une mauvaise utilisation du site par le client,",
      "• ou d'un cas de force majeure.",
    ],
  },
  {
    title: "11. Propriété intellectuelle",
    body: [
      "• Le client reste propriétaire des contenus qu'il fournit (textes, images, vidéos, logos).",
      "• L'Agence Grey conserve la propriété des éléments techniques et graphiques créés tant que la prestation n'a pas été intégralement payée.",
      "• Une fois le paiement complet effectué, le client dispose de tous les droits d'usage sur le site livré.",
    ],
  },
  {
    title: "12. Confidentialité et protection des données",
    body: [
      "L'Agence Grey s'engage à respecter la confidentialité des informations échangées avec ses clients et à ne pas divulguer les données fournies.",
      "Les données personnelles collectées sont utilisées uniquement pour la bonne exécution des prestations et ne sont pas transmises à des tiers sans consentement.",
    ],
  },
  {
    title: "13. Droit applicable et litiges",
    body: [
      "Les présentes CGV sont soumises au droit français.",
      "En cas de litige, et à défaut d'accord amiable, les tribunaux compétents seront ceux déterminés par la loi française.",
    ],
  },
  {
    title: "14. Mentions légales",
    body: [
      "Agence Grey",
      "Adrien DEBARLE & Ophélie HUTIN",
      "Adresse : 367 route de Ciaus, 06540 Breil-sur-Roya",
      "Email : agencegrey06@gmail.com",
      "WhatsApp : +33 6 18 00 85 31",
      "Numéro SIRET : [à renseigner]",
      "Hébergeur : [Nom, raison sociale, adresse et téléphone de l'hébergeur]",
      "Numéro de TVA intracommunautaire (si applicable) : [à renseigner]",
    ],
  },
];

export default function CgvPage() {
  return (
    <SectionWrapper eyebrow="Légal" title="Conditions générales de vente" description="Les présentes CGV régissent les prestations proposées par l'Agence Grey.">
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
