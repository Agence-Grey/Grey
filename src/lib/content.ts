export const servicePackages = [
  {
    slug: "starter",
    name: "Starter",
    price: "À partir de 1 490€",
    summary: "Une présence premium rapide à lancer pour poser une image nette dès les premiers contacts.",
    idealFor: "Studios qui veulent un site clair, crédible et rapide à mettre en ligne.",
    features: [
      "Landing page premium sur mesure",
      "Structure mobile-first et SEO de base",
      "Copywriting de cadrage orienté conversion",
      "Design sombre + accent violet cohérent avec l’identité Grey",
    ],
  },
  {
    slug: "pro",
    name: "Pro",
    price: "À partir de 2 990€",
    summary: "Le coeur de l’offre : un site institutionnel complet, structuré pour convaincre et durer.",
    idealFor: "Studios établis qui veulent une présence sérieuse, rassurante et mieux organisée.",
    features: [
      "Arborescence complète (accueil, services, about, contact)",
      "Parcours éditorial plus travaillé",
      "Sections de réassurance et CTA répartis intelligemment",
      "Base technique évolutive pour maintenance, SEO et futurs modules",
    ],
  },
  {
    slug: "premium",
    name: "Premium",
    price: "Sur devis",
    summary: "Pour les structures qui veulent aller plus loin avec automatisation, acquisition et pilotage plus fin.",
    idealFor: "Studios ou marques sportives qui veulent accélérer sans bricolage technique.",
    features: [
      "Expérience sur mesure et tunnel plus poussé",
      "Automatisations intelligentes selon les besoins métier",
      "Base prête pour paiement, suivi et acquisition",
      "Accompagnement stratégique renforcé",
    ],
  },
] as const;

export const serviceAddons = [
  "Maintenance technique et mises à jour",
  "Identité visuelle légère et harmonisation graphique",
  "Optimisation visibilité / SEO local",
  "Création ou reprise de contenus stratégiques",
  "Automatisations métier ciblées",
  "Référencement payant pour phases d’accélération",
] as const;

export const portfolioEntries = [
  {
    slug: "studio-halo",
    titre: "Studio Halo",
    type: "Yoga & mobilité",
    description:
      "Un studio orienté respiration, précision et expérience premium. Le site devait rassurer, clarifier l’offre et faire gagner du temps sur les prises de contact.",
    challenge:
      "Créer une présence plus haut de gamme sans tomber dans le cliché ‘bien-être’ interchangeable.",
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
    results: ["Différenciation plus forte", "Parcours utilisateur plus fluide", "Meilleure lisibilité de l’offre"],
  },
  {
    slug: "forge-performance",
    titre: "Forge Performance",
    type: "Préparation physique",
    description:
      "Un univers plus dense, conçu pour donner de la crédibilité à une offre de coaching et de performance sans devenir agressif.",
    challenge:
      "Trouver l’équilibre entre énergie, rigueur et confiance.",
    solution:
      "Un site structuré autour de preuves, d’un discours plus direct et d’un design plus strict dans les contrastes.",
    results: ["Discours plus cadré", "Image plus sérieuse", "Base prête pour offres et acquisition"],
  },
] as const;

export const aboutValues = [
  "Clarté avant complexité",
  "Prix lisibles et cadre net",
  "Proximité humaine, même à distance",
  "Sites pensés pour rassurer avant de séduire",
] as const;
