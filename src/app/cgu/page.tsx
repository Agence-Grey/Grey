/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { buildPageMetadata } from "@/components/shared/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/cgu",
  title: "Conditions Générales d'Utilisation",
  description:
    "CGU de l'Agence Grey — règles d'utilisation du site et protection des données.",
});

export default function CGUPage() {
  return (
    <SectionWrapper
      eyebrow="Légal"
      title="Conditions Générales d'Utilisation"
      description="Dernière mise à jour : mai 2026"
    >
      <article className="mx-auto max-w-3xl space-y-10 text-[var(--color-muted-foreground)]">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">1. Objet du site</h2>
          <p className="leading-7">
            Le site www.agence-grey.fr a pour objet de présenter l'activité de l'Agence Grey, spécialisée dans
            la création, la maintenance et l'optimisation de sites internet professionnels.
          </p>
          <p className="leading-7">
            Le Site permet aux visiteurs de consulter les prestations proposées, de découvrir les réalisations de
            l'agence, et de contacter l'équipe via les moyens de communication mis à disposition (formulaire,
            e-mail, téléphone, réseaux sociaux ou messagerie instantanée).
          </p>
          <p className="leading-7">
            L'Agence Grey ne propose pas de vente directe en ligne : toute commande de prestation donne lieu
            à l'établissement d'un devis et de conditions générales de vente acceptés préalablement par le
            client.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">2. Accès au site</h2>
          <p className="leading-7">
            Le Site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet.
            Tous les frais liés à l'accès au Site (matériel informatique, logiciels, connexion Internet, etc.) sont à
            la charge de l'utilisateur.
          </p>
          <p className="leading-7">
            L'Agence Grey met tout en œuvre pour assurer un accès continu et de qualité au Site.
            Toutefois, elle ne saurait être tenue responsable en cas d'interruption, de suspension ou de
            dysfonctionnement du Site, notamment liés à des opérations de maintenance, à une défaillance du
            fournisseur d'accès Internet, ou à tout autre événement extérieur indépendant de sa volonté.
          </p>
          <p className="leading-7">
            L'Agence Grey se réserve le droit de suspendre temporairement ou définitivement l'accès au Site
            sans préavis, notamment pour assurer sa maintenance ou pour toute autre raison technique.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">3. Propriété intellectuelle</h2>
          <p className="leading-7">
            L'ensemble des éléments figurant sur le Site — notamment les textes, images, graphismes, logo,
            icônes, sons, logiciels et bases de données — sont la propriété exclusive de l'Agence Grey, sauf
            mention contraire expresse.
          </p>
          <p className="leading-7">
            Toute reproduction, représentation, modification, publication, adaptation, totale ou partielle, de ces
            éléments, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite
            préalable de l'Agence Grey.
          </p>
          <p className="leading-7">
            Toute exploitation non autorisée du Site ou de l'un quelconque des éléments qu'il contient sera
            considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des
            articles L.335-2 et suivants du Code de la propriété intellectuelle.
          </p>
          <p className="leading-7">
            Les marques et logos "Agence Grey" ainsi que le slogan "Le web qui rassure" sont des marques
            déposées ou en cours de dépôt ; toute reproduction ou utilisation sans autorisation est interdite.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">4. Données personnelles collectées (RGPD)</h2>
          <p className="leading-7">
            Dans le cadre de l'utilisation du Site, l'Agence Grey peut être amenée à collecter certaines données
            personnelles des utilisateurs, notamment via le formulaire de contact.
          </p>
          <p className="leading-7">
            Les données collectées se limitent aux informations strictement nécessaires pour permettre à
            l'Agence Grey de répondre aux demandes de contact ou de devis : nom, prénom, adresse e-mail,
            numéro de téléphone et contenu du message.
          </p>
          <p className="leading-7">
            Ces données sont utilisées uniquement à des fins de gestion des échanges commerciaux et de
            prospection, et ne sont en aucun cas transmises à des tiers.
          </p>
          <p className="leading-7">
            Les données sont conservées pendant une durée maximale de 3 ans à compter du dernier contact
            émanant de l'utilisateur, sauf obligation légale contraire.
          </p>
          <p className="leading-7">
            Conformément au Règlement Général sur la Protection des Données (RGPD – UE 2016/679) et
            à la loi Informatique et Libertés, chaque utilisateur dispose d'un droit d'accès, de rectification,
            de suppression, d'opposition et de portabilité de ses données.
          </p>
          <p className="leading-7">
            Pour exercer ces droits, l'utilisateur peut contacter l'Agence Grey à l'adresse suivante :
            agencegrey06@gmail.com
          </p>
          <p className="leading-7">
            L'Agence Grey s'engage à assurer la confidentialité et la sécurité des données personnelles
            conformément à la réglementation en vigueur.
          </p>
          <p className="leading-7 font-semibold text-white">
            A intégrer au formulaire de contact pour devis :
          </p>
          <p className="leading-7">
            Les informations recueillies via ce formulaire sont enregistrées par Agence Grey pour la gestion des
            demandes. Elles sont conservées pendant 3 ans et ne sont pas transmises à des tiers. Pour en savoir
            plus, consultez notre politique de confidentialité.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">5. Responsabilité de l'éditeur</h2>
          <p className="leading-7">
            L'Agence Grey s'efforce d'assurer l'exactitude et la mise à jour régulière des informations diffusées
            sur le Site. Toutefois, elle ne saurait être tenue responsable d'erreurs, d'omissions ou d'éventuelles
            indisponibilités temporaires du Site.
          </p>
          <p className="leading-7">
            L'utilisateur reconnaît utiliser le Site sous sa responsabilité exclusive. L'Agence Grey ne pourra être
            tenue responsable des dommages directs ou indirects résultant de l'accès ou de l'utilisation du Site,
            y compris en cas de perte de données, de virus ou de panne.
          </p>
          <p className="leading-7">
            L'Agence Grey ne peut être tenue responsable du contenu des sites tiers vers lesquels des liens
            hypertextes peuvent renvoyer.
          </p>
          <p className="leading-7">
            Enfin, l'utilisateur s'engage à ne pas utiliser le Site pour diffuser des contenus illégaux,
            diffamatoires, ou contraires aux bonnes mœurs, ni à porter atteinte à la sécurité ou à l'intégrité du
            Site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">6. Propriété du site livré</h2>
          <p className="leading-7">
            L'ensemble des éléments constituant le site internet du client (structure, design, code source, textes,
            images, vidéos, etc.) réalisé par l'Agence Grey reste la propriété exclusive de l'Agence Grey
            jusqu'au paiement complet du prix convenu.
          </p>
          <p className="leading-7">
            Dès réception du règlement intégral, la propriété du site et des éléments livrés est transférée au
            client, à l'exception des éléments techniques, bibliothèques ou outils internes appartenant à
            l'Agence Grey et nécessaires au bon fonctionnement du site (frameworks, modèles, composants
            réutilisables, etc.).
          </p>
          <p className="leading-7">
            Le client devient alors seul propriétaire du contenu de son site et libre d'en assurer l'exploitation, la
            modification ou le transfert, sous réserve du respect des droits d'auteur et des mentions discrètes
            indiquant la paternité de l'Agence Grey (ex. mention "Site conçu par Agence Grey").
          </p>
          <p className="leading-7">
            L'Agence Grey se réserve le droit de citer le site réalisé dans son portfolio, sur son propre site ou
            ses supports de communication, à des fins de présentation de ses réalisations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">7. Cookies et traceurs</h2>
          <h3 className="text-lg font-semibold text-white">7.1. Définition</h3>
          <p className="leading-7">
            Un cookie est un petit fichier texte enregistré sur le navigateur de l'utilisateur lors de la consultation
            d'un site internet. Il permet au site de reconnaître le terminal lors d'une visite ultérieure.
          </p>
          <h3 className="text-lg font-semibold text-white">7.2. Types de cookies utilisés</h3>
          <p className="leading-7">L'Agence Grey utilise uniquement :</p>
          <ul className="list-disc space-y-1 pl-5 leading-7">
            <li>des cookies de fonctionnement, nécessaires à l'affichage et au bon fonctionnement du site (ex. : choix de langue, affichage responsive) ;</li>
            <li>des cookies de mesure d'audience, afin d'obtenir des statistiques anonymes sur la fréquentation du site (par exemple via Google Analytics ou un outil équivalent).</li>
          </ul>
          <p className="leading-7">Aucun cookie publicitaire ni de suivi individualisé n'est utilisé.</p>
          <h3 className="text-lg font-semibold text-white">7.3. Consentement de l'utilisateur</h3>
          <p className="leading-7">
            Lors de sa première visite sur le site, l'utilisateur est informé de la présence de cookies par un
            bandeau d'information. Il peut accepter tous les cookies, refuser tous les cookies non essentiels,
            ou personnaliser ses préférences.
          </p>
          <p className="leading-7">
            Le choix de l'utilisateur est conservé pendant une durée maximale de 6 mois, après quoi une
            nouvelle demande de consentement sera proposée.
          </p>
          <h3 className="text-lg font-semibold text-white">7.4. Gestion des cookies</h3>
          <p className="leading-7">
            L'utilisateur peut à tout moment supprimer ou bloquer les cookies en configurant son navigateur
            internet. Les instructions varient selon les navigateurs (Chrome, Safari, Firefox, Edge, etc.) et sont
            accessibles depuis le menu d'aide de chacun.
          </p>
          <h3 className="text-lg font-semibold text-white">7.5. Durée de conservation</h3>
          <p className="leading-7">
            Les cookies sont conservés pour une durée maximale de 13 mois à compter de leur dépôt sur le
            terminal de l'utilisateur.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">8. Responsabilité et sécurité du site</h2>
          <h3 className="text-lg font-semibold text-white">8.1. Disponibilité du site</h3>
          <p className="leading-7">
            L'Agence Grey s'efforce d'assurer l'accès permanent au site www.agence-grey.fr.
            Cependant, elle ne peut être tenue responsable en cas d'interruption temporaire pour maintenance,
            mise à jour ou amélioration, de défaillance du réseau Internet ou des serveurs d'hébergement,
            ou de tout événement de force majeure entraînant une indisponibilité temporaire du site.
          </p>
          <p className="leading-7">L'utilisateur reconnaît utiliser le site sous sa seule responsabilité.</p>
          <h3 className="text-lg font-semibold text-white">8.2. Sécurité du site</h3>
          <p className="leading-7">
            L'Agence Grey met en œuvre les moyens raisonnables pour garantir la sécurité du site et protéger
            les données contre tout accès non autorisé, altération ou suppression.
            Toutefois, la société ne peut garantir une sécurité absolue face aux risques liés à Internet.
          </p>
          <p className="leading-7">
            L'utilisateur s'engage à ne pas perturber le bon fonctionnement du site, ne pas introduire de virus
            ou de code malveillant, et à signaler sans délai toute faille de sécurité constatée.
          </p>
          <h3 className="text-lg font-semibold text-white">8.3. Responsabilité de l'Agence Grey</h3>
          <p className="leading-7">
            L'Agence Grey ne saurait être tenue responsable de dommages directs ou indirects résultant de
            l'utilisation du site ou de l'impossibilité d'y accéder, d'erreurs ou omissions dans les contenus publiés,
            ou d'un usage inapproprié du site par l'utilisateur.
          </p>
          <h3 className="text-lg font-semibold text-white">8.4. Liens externes</h3>
          <p className="leading-7">
            Le site peut contenir des liens vers des sites tiers (réseaux sociaux, plateformes professionnelles,
            etc.). L'Agence Grey décline toute responsabilité quant aux contenus ou pratiques de ces sites externes,
            sur lesquels elle n'a aucun contrôle.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">9. Propriété intellectuelle</h2>
          <h3 className="text-lg font-semibold text-white">9.1. Titularité des droits</h3>
          <p className="leading-7">
            L'ensemble des éléments figurant sur le site www.agence-grey.fr — textes, images, graphismes,
            logos, icônes, vidéos, sons, logiciels, structure du site — est protégé par le droit d'auteur et la
            législation sur la propriété intellectuelle.
          </p>
          <p className="leading-7">
            Ces éléments sont la propriété exclusive de l'Agence Grey, sauf mention contraire explicite.
            Toute reproduction, représentation, modification, publication, transmission ou adaptation de tout ou
            partie du site, sans autorisation écrite préalable de l'Agence Grey, est strictement interdite.
          </p>
          <h3 className="text-lg font-semibold text-white">9.2. Contenus externes</h3>
          <p className="leading-7">
            Les marques, logos et contenus appartenant à des tiers (par exemple les logos de réseaux sociaux ou
            d'outils intégrés au site) restent la propriété de leurs auteurs respectifs.
            L'utilisateur s'engage à respecter les droits de ces tiers lorsqu'il consulte ou partage des contenus
            issus du site.
          </p>
          <h3 className="text-lg font-semibold text-white">9.3. Utilisation du site par le client</h3>
          <p className="leading-7">
            Toute utilisation du site à des fins commerciales ou promotionnelles non autorisées est interdite.
            L'Agence Grey conserve le droit d'utiliser, à des fins de communication (portfolio, site vitrine,
            réseaux sociaux), les créations graphiques et techniques réalisées pour ses clients, sauf opposition
            écrite de leur part.
          </p>
          <h3 className="text-lg font-semibold text-white">9.4. Droits d'auteur et crédits</h3>
          <p className="leading-7">
            Le site peut inclure des mentions de crédit (ex. : photographes, concepteurs, partenaires techniques).
            Ces mentions doivent être conservées visibles sur toute version publique du site, sauf accord
            spécifique entre le client et l'Agence Grey.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">10. Loi applicable et règlement des litiges</h2>
          <h3 className="text-lg font-semibold text-white">10.1. Droit applicable</h3>
          <p className="leading-7">
            Les présentes Conditions Générales d'Utilisation sont régies par le droit français.
            En cas de traduction dans une autre langue, seule la version française fait foi.
          </p>
          <h3 className="text-lg font-semibold text-white">10.2. Tentative de règlement amiable</h3>
          <p className="leading-7">
            Avant toute action judiciaire, les parties s'engagent à rechercher une solution amiable.
            L'utilisateur peut contacter l'Agence Grey par e-mail à agencegrey@gmail.com pour exposer la
            situation et tenter de résoudre le différend de manière concertée.
          </p>
          <h3 className="text-lg font-semibold text-white">10.3. Médiation</h3>
          <p className="leading-7">
            Conformément aux articles L.612-1 et suivants du Code de la consommation, tout utilisateur ayant
            la qualité de consommateur peut recourir gratuitement à un médiateur de la consommation en vue
            d'une résolution amiable du litige. Les coordonnées du médiateur seront communiquées sur simple demande.
          </p>
          <h3 className="text-lg font-semibold text-white">10.4. Compétence juridictionnelle</h3>
          <p className="leading-7">
            À défaut de solution amiable, tout différend relatif à l'interprétation ou à l'exécution des présentes
            CGU sera porté devant les tribunaux français compétents, conformément aux règles de droit
            commun.
          </p>
        </section>
      </article>
    </SectionWrapper>
  );
}
