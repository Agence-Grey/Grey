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
    slug: "starter",
    name: "Starter",
    price: "À partir de 1 490€",
    description: "Landing page premium pour lancer un studio ou une offre signature.",
  },
  {
    slug: "pro",
    name: "Pro",
    price: "À partir de 2 990€",
    description: "Site institutionnel complet avec parcours SEO et conversion clair.",
  },
  {
    slug: "premium",
    name: "Premium",
    price: "Sur devis",
    description: "Expérience sur-mesure avec automatisations, paiement et acquisition.",
  },
] as const;

export const processSteps = [
  "Audit & cadrage",
  "UX & direction artistique",
  "Production IA + intégration",
  "Mise en ligne & optimisation",
] as const;
