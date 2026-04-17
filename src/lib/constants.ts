export const siteConfig = {
  name: "L'Agence Grey",
  description:
    "Grey : le web qui rassure — Agence web IA pour studios de sport, mouvement et biomécanique.",
  url: "https://agencegrey.fr",
  nav: [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export const offers = [
  {
    slug: "essentiel",
    name: "L'Essentiel",
    price: "À partir de 1 490 €",
    description: "Site professionnel, clair et moderne. Sans engagement mensuel.",
  },
  {
    slug: "confort",
    name: "Le Confort",
    price: "1 290 € + 249€/mois",
    description: "Site + maintenance + hébergement + SEO. Engagement 12 mois.",
  },
  {
    slug: "booster",
    name: "Le Booster",
    price: "1 290 € + abonnement",
    description: "Site + maintenance + automatisations IA pour accélérer vos ventes.",
  },
] as const;

export const processSteps = [
  "Audit & cadrage",
  "UX & direction artistique",
  "Production IA + intégration",
  "Mise en ligne & optimisation",
] as const;
