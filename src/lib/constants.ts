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

export const methodCards = [
  {
    title: "Conformité légale",
    description: "Un site qui respecte vos obligations légales : mentions légales, CGU, RGPD…",
  },
  {
    title: "Écoute & personnalisation",
    description: "Une écoute attentive de vos besoins avant toute création : couleurs, rdv en ligne, automatisation…",
  },
  {
    title: "Accompagnement sur-mesure",
    description: "Un accompagnement personnalisé : chaque étape de création sera validée en amont et en aval, nous serons à votre écoute à chaque moment.",
  },
  {
    title: "Rendez-vous en ligne",
    description: "Un site qui simplifie la prise de rendez-vous en ligne : trouvez vos futurs élèves en quelques clics.",
  },
] as const;
