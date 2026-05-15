export const servicePackages = [
  {
    slug: "essentiel",
    name: "L'Essentiel",
    price: "1 490 €",
    priceNote: "",
    summary: "Un site professionnel, clair et moderne, sans engagement mensuel. Parfait pour poser vos premières pierres sur le web.",
    idealFor:
      "Ce pack est fait pour vous si vous voulez un site professionnel pour présenter votre activité, être visible sur Google, proposer des rendez-vous en ligne et permettre à vos clients de vous contacter facilement. Simple à gérer, sans engagement mensuel.",
    features: [
      "Site internet avec prise de rendez-vous en ligne",
      "Design sur mesure",
      "Optimisation mobile",
      "SEO de base : référencement local",
      "Formation à l'utilisation",
    ],
  },
  {
    slug: "confort",
    name: "Le Confort",
    price: "1 290 € + 249 €/mois",
    priceNote: "",
    summary: "Un site toujours à jour, sécurisé et optimisé, sans que vous ayez à vous en occuper. Notre formule la plus populaire.",
    idealFor:
      "Ce pack est fait pour vous si vous voulez un site toujours à jour et sécurisé, une identité visuelle professionnelle (logo, couleurs, police), la possibilité de faire des modifications sans perdre de temps, et un site performant sur Google sur la durée.",
    features: [
      "Tout du pack Essentiel",
      "Maintenance mensuelle",
      "Hébergement inclus",
      "Mises à jour régulières",
      "Modifications à la demande",
      "Optimisations SEO régulières",
    ],
  },
  {
    slug: "booster",
    name: "Le Booster",
    price: "1 290 € + abonnement*",
    priceNote: "",
    summary: "Augmentez vos rendez-vous, vos appels et vos ventes avec l'automatisation IA. Pour ceux qui veulent aller plus loin.",
    idealFor:
      "Ce pack est fait pour vous si vous voulez augmenter vos rendez-vous et ventes rapidement, automatiser vos tâches, que vos prospects ne soient jamais perdus (même en cas d'appel manqué), et être sponsorisé sur Google.",
    features: [
      "Tout du pack Confort",
      "Message auto après appel manqué",
      "Gestion des listes d'attente",
      "Rappels de rendez-vous automatiques",
      "Optimisation du planning des cours",
      "Demande automatique d'avis Google",
    ],
  },
] as const;

export const serviceAddons = [
  {
    icon: "Megaphone",
    title: "Campagnes publicitaires SEA",
    description: "Google Ads ciblé pour attirer vos premiers clients rapidement.",
  },
  {
    icon: "Palette",
    title: "Création ou refonte de logo",
    description: "Identité visuelle complète : logo, couleurs, typographies.",
  },
  {
    icon: "PenLine",
    title: "Rédaction de contenus stratégiques",
    description: "Textes optimisés SEO qui parlent à votre audience.",
  },
  {
    icon: "GraduationCap",
    title: "Formation avancée",
    description: "Maîtrisez l'administration de votre site en toute autonomie.",
  },
] as const;

/** Valeurs de réassurance pour la page /devis */
export const devisReassurance = [
  {
    title: "Clarté avant complexité",
    description: "Pas de jargon technique, pas de propositions floues. On vous dit exactement ce que vous payez et ce que vous obtenez.",
  },
  {
    title: "Prix lisibles",
    description: "Des forfaits transparents, sans frais cachés. Vous savez dès le départ à quoi vous attendre, mois après mois.",
  },
  {
    title: "Proximité humaine",
    description: "Basés à Breil-sur-Roya, on connaît les réalités des studios de sport et de mouvement. Vous parlez à des humains, pas à un robot.",
  },
  {
    title: "Site pensé pour séduire et rassurer",
    description: "Chaque ligne, chaque bouton, chaque couleur est choisi pour donner confiance à vos futurs clients dès le premier clic.",
  },
] as const;

export const portfolioEntries = [
  {
    slug: "studio-halo",
    titre: "Studio Halo",
    type: "Yoga & mobilité",
    description:
      "Un studio orienté respiration, précision et expérience premium. Le site devait rassurer, clarifier l'offre et faire gagner du temps sur les prises de contact.",
    challenge:
      "Créer une présence plus haut de gamme sans tomber dans le cliché 'bien-être' interchangeable.",
    solution:
      "Un design sombre, des contrastes maîtrisés, une hiérarchie très lisible et des CTA sobres mais nets.",
    results: ["Image perçue plus premium", "Navigation simplifiée", "Positionnement plus clair dès la home"],
  },
  {
    slug: "atelier-vertical",
    titre: "Atelier Vertical",
    type: "Pole dance",
    description:
      "Une direction plus affirmée, plus contemporaine, pour un studio qui voulait conjuguer élégance, intensité et sérieux.",
    challenge:
      "Éviter les codes visuels tapageurs tout en gardant une vraie personnalité de marque.",
    solution:
      "Un système de sections éditoriales structurées, une palette sombre et des accents violets pour guider sans saturer.",
    results: ["Différenciation plus forte", "Parcours utilisateur plus fluide", "Meilleure lisibilité de l'offre"],
  },
  {
    slug: "forge-performance",
    titre: "Forge Performance",
    type: "Préparation physique",
    description:
      "Un univers plus dense, conçu pour donner de la crédibilité à une offre de coaching et de performance sans devenir agressif.",
    challenge:
      "Trouver l'équilibre entre énergie, rigueur et confiance.",
    solution:
      "Un site structuré autour de preuves, d'un discours plus direct et d'un design plus strict dans les contrastes.",
    results: ["Discours plus cadré", "Image plus sérieuse", "Base prête pour offres et acquisition"],
  },
] as const;

export const aboutValues = [
  "Clarté avant complexité",
  "Prix lisibles et prise de rendez-vous rapide",
  "Proximité humaine et inclusivité dans votre présentation",
  "Site pensé pour rassurer et séduire",
] as const;
