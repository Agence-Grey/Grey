import type { Metadata } from "next";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { buildPageMetadata } from "@/components/shared/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Conditions Générales de Vente",
  description:
    "CGV de l’Agence Grey — création, maintenance et hébergement de sites internet.",
});

export default function CGVPage() {
  return (
    <SectionWrapper
      eyebrow="Légal"
      title="Conditions Générales de Vente"
      description="Dernière mise à jour : mai 2026"
    >
      <article className="mx-auto max-w-3xl space-y-10 text-[var(--color-muted-foreground)]">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">1. Objet</h2>
          <p className="leading-7">
            Les présentes Conditions Générales de Vente (CGV) définissent les modalités applicables aux
            prestations de création, maintenance et hébergement de sites internet proposées par l’Agence Grey,
            micro-entreprise dont le siège social est situé au 367 route de Ciaus, 06540 Breil-sur-Roya
            (France).
          </p>
          <p className="leading-7">
            Toute signature de devis ou commande implique l’adhésion pleine et entière du client aux présentes
            CGV.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">2. Prestations proposées</h2>
          <p className="leading-7">L’Agence Grey propose :</p>
          <ul className="list-disc space-y-1 pl-5 leading-7">
            <li>La création de sites internet vitrines et e-commerce ;</li>
            <li>La maintenance et la mise à jour de sites internet ;</li>
            <li>L’hébergement de sites internet (dans le cadre des formules avec abonnement) ;</li>
            <li>
              Des prestations complémentaires (référencement naturel, ajout de contenus,
              accompagnement, tutoriels, conseils, création de logo et de charte graphique).
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">3. Devis et commande</h2>
          <p className="leading-7">
            Toute prestation fait l’objet d’un devis écrit précisant la nature de la mission, le prix et les délais
            estimatifs.
          </p>
          <p className="leading-7">
            La commande devient ferme et définitive à la signature du devis et au versement d’un acompte de
            30 % du montant total.
          </p>
          <p className="leading-7">Le projet ne sera lancé qu’à réception de cet acompte.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">4. Prix et modalités de paiement</h2>
          <div className="space-y-3 leading-7">
            <p>
              Pour les prestations de création de site, un acompte de 30 % est dû à la signature du devis
              et le solde à la livraison, avant la mise en ligne du site.
            </p>
            <p>Le site ne sera pas mis en ligne avant réception du solde.</p>
            <p>
              Les tarifs indiqués sur les devis sont exprimés hors taxes. L’application de la TVA dépendra
              du régime fiscal en vigueur au moment de la facturation.
            </p>
          </div>

          <p className="leading-7">Pour les prestations de maintenance et d’hébergement :</p>
          <ul className="list-disc space-y-1 pl-5 leading-7">
            <li>Le paiement est mensuel, à effectuer par virement bancaire entre le 1er et le 10 de chaque mois.</li>
            <li>En cas de non-paiement à l’échéance, un email de relance sera envoyé à partir du 10 du mois.</li>
            <li>Sans régularisation avant le 15, l’hébergement et la maintenance pourront être suspendus jusqu’au règlement.</li>
          </ul>

          <p className="leading-7">
            <span className="font-semibold text-white">Barèmes et remises :</span> Les tarifs et éventuelles remises liés aux packs sont ceux indiqués sur le site www.agence-grey.fr ou sur le devis transmis au client.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">5. Droit de rétractation</h2>
          <p className="leading-7">
            Conformément à l’article L221-18 du Code de la consommation, le client consommateur (non
            professionnel) dispose d’un délai de 14 jours à compter de la signature du devis pour exercer son
            droit de rétractation, sans avoir à motiver sa décision.
          </p>
          <p className="leading-7">
            Toutefois, si le client demande expressément que l’exécution de la prestation commence avant la
            fin de ce délai, il renonce à son droit de rétractation pour la partie déjà exécutée.
          </p>
          <p className="leading-7">
            En cas de rétractation après le début de la prestation, le client reste redevable du montant
            correspondant au travail déjà réalisé.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">6. Durée et résiliation des abonnements</h2>
          <p className="leading-7">
            Les prestations de maintenance et d’hébergement font l’objet d’un engagement minimum de 6 ou
            12 mois, selon l’offre choisie.
          </p>
          <p className="leading-7">
            Au-delà de cette période, la résiliation est possible à tout moment, sans préavis, par simple
            demande écrite (email).
          </p>
          <p className="leading-7">
            En cas de non-paiement, l’Agence Grey se réserve le droit d’interrompre l’hébergement et la
            maintenance du site internet.
          </p>
          <p className="leading-7">
            Le client pourra ensuite confier la remise en ligne de son site à un prestataire de son choix.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">7. Livraison et propriété</h2>
          <p className="leading-7">
            Le site internet sera livré et mis en ligne uniquement après paiement intégral du solde.
          </p>
          <ul className="list-disc space-y-1 pl-5 leading-7">
            <li>En cas de formule “site seul”, le client est responsable de son hébergement et de la mise en ligne, bien qu’il puisse bénéficier de conseils à ce sujet.</li>
            <li>En cas de formule avec abonnement (“Pack Sérénité”), l’Agence Grey prend en charge l’hébergement, les mises à jour et la maintenance.</li>
          </ul>
          <p className="leading-7">
            Le client dispose d’un accès complet (codes d’administration) à son site une fois le paiement total
            effectué.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">8. Garantie technique</h2>
          <p className="leading-7">
            L’Agence Grey garantit le bon fonctionnement du site au moment de sa livraison.
          </p>
          <p className="leading-7">
            Passé un délai de 15 jours après la mise en ligne, toute intervention technique (correction de bug,
            mise à jour, restauration de sauvegarde) fera l’objet d’un devis séparé, sauf en cas d’erreur
            directement imputable à l’Agence.
          </p>
          <p className="leading-7">Cette garantie ne couvre pas :</p>
          <ul className="list-disc space-y-1 pl-5 leading-7">
            <li>les erreurs liées à une mauvaise manipulation du client,</li>
            <li>les incidents dus à des mises à jour externes (plugins, hébergeur, CMS),</li>
            <li>ou tout cas de force majeure.</li>
          </ul>
          <p className="leading-7">
            Les clients sous abonnement maintenance bénéficient d’une prise en charge intégrale de ces
            interventions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">9. Responsabilités du client</h2>
          <p className="leading-7">Le client s’engage à :</p>
          <ul className="list-disc space-y-1 pl-5 leading-7">
            <li>Fournir les contenus nécessaires (textes, images, logos) dans les délais convenus ;</li>
            <li>Garantir qu’il détient les droits d’utilisation de tous les éléments transmis ;</li>
            <li>Vérifier la conformité légale de son site internet (mentions légales, CGV, politique de confidentialité, respect du RGPD, etc.).</li>
          </ul>
          <p className="leading-7">
            L’Agence Grey peut fournir des modèles et conseils, mais ne peut être tenue responsable d’une
            éventuelle sanction liée à la non-conformité du site du client.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">10. Responsabilités de l’Agence</h2>
          <p className="leading-7">L’Agence Grey s’engage à :</p>
          <ul className="list-disc space-y-1 pl-5 leading-7">
            <li>Fournir un site fonctionnel et conforme au devis signé ;</li>
            <li>Réaliser ses prestations selon les standards techniques en vigueur ;</li>
            <li>Assurer la maintenance des sites sous abonnement (mises à jour, corrections, sécurité, accompagnement).</li>
          </ul>
          <p className="leading-7">L’Agence ne saurait être tenue responsable :</p>
          <ul className="list-disc space-y-1 pl-5 leading-7">
            <li>d’une indisponibilité liée à un hébergeur tiers,</li>
            <li>d’une mauvaise utilisation du site par le client,</li>
            <li>ou d’un cas de force majeure.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">11. Propriété intellectuelle</h2>
          <ul className="list-disc space-y-1 pl-5 leading-7">
            <li>Le client reste propriétaire des contenus qu’il fournit (textes, images, vidéos, logos).</li>
            <li>L’Agence Grey conserve la propriété des éléments techniques et graphiques créés tant que la prestation n’a pas été intégralement payée.</li>
            <li>Une fois le paiement complet effectué, le client dispose de tous les droits d’usage sur le site livré.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">12. Confidentialité et protection des données</h2>
          <p className="leading-7">
            L’Agence Grey s’engage à respecter la confidentialité des informations échangées avec ses clients
            et à ne pas divulguer les données fournies.
          </p>
          <p className="leading-7">
            Les données personnelles collectées sont utilisées uniquement pour la bonne exécution des
            prestations et ne sont pas transmises à des tiers sans consentement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">13. Droit applicable et litiges</h2>
          <p className="leading-7">
            Les présentes CGV sont soumises au droit français.
          </p>
          <p className="leading-7">
            En cas de litige, et à défaut d’accord amiable, les tribunaux compétents seront ceux déterminés
            par la loi française.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">14. Mentions légales</h2>
          <div className="space-y-1 leading-7">
            <p><span className="font-semibold text-white">Agence Grey</span></p>
            <p>Adrien DEBARLE & Ophélie HUTIN</p>
            <p>Adresse : 367 route de Ciaus, 06540 Breil-sur-Roya</p>
            <p>Email : agencegrey@gmail.com</p>
            <p>WhatsApp : +33 6 18 00 85 31</p>
            <p>Numéro SIRET : [à renseigner]</p>
            <p>Hébergeur : [Nom, raison sociale, adresse et téléphone de l’hébergeur]</p>
            <p>Numéro de TVA intracommunautaire (si applicable) : [à renseigner]</p>
          </div>
        </section>
      </article>
    </SectionWrapper>
  );
}
