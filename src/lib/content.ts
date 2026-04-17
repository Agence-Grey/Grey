export const servicePackages = [
  {
    slug: "essentiel",
    name: "L'Essentiel",
    price: "À partir de 1 490 €",
    summary: "Un site professionnel, clair et moderne, sans engagement mensuel.",
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
    price: "1 290 € + 249€/mois",
    summary: "Un site toujours à jour, sécurisé et optimisé, sans vous en occuper.",
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
    price: "1 290 € + abonnement mensuel",
    summary: "Augmentez vos rendez-vous, vos appels et vos ventes avec l'automatisation IA.",
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
  "Campagnes publicitaires SEA (Google Ads)",
  "Création ou refonte de logo et charte graphique",
  "Rédaction de contenus stratégiques",
  "Formation avancée à l'administration du site",
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
  "Prix lisibles et cadre net",
  "Proximité humaine, même à distance",
  "Sites pensés pour rassurer avant de séduire",
] as const;
