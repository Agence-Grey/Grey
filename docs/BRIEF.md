# Brief Projet — Site Web L'Agence Grey

## Client
L'Agence Grey (propre site, pas un site client)

## Positionnement
- **Modèle :** B2B
- **Offre :** Solutions web clé en main
  - Sites internet (principal)
  - Automatisation IA
  - Agents IA
- **Première niche :** Studios de sport/bien-être (pole dance, yoga, danse)
- **Zone géographique :** Sud de la France, proche Côte d'Azur
- **Tagline :** "Le web qui rassure"

## Design & Marque
- **Couleur principale :** #7F3FBF (violet profond)
- **Couleur secondaire :** #8a2be2 (violet lumineux, du logo)
- **Couleur texte/base :** #333333 (gris charbon)
- **Polices candidates :** Poppins, Montserrat, Raleway
- **Logo :** Monogramme "AG" serif + barre violette + baseline "Grey : le web qui rassure"
  - Fichier : `/root/.hermes/cache/logo_grey.png`

## Pages
1. **Home** — Hero animé (laptop + lumière + aspiration à travers l'écran), CTA "Demander votre devis en ligne"
2. **About** — Histoire d'Ophélie et k0da
3. **Services** — Sites web, automatisation IA, agents IA
4. **Contact** — Formulaire + infos
5. **Portfolio/Modèles** — Maquettes et réalisations exposées

## Fonctionnalités
- **Système de devis en ligne** — Formulaire structuré, estimation
- **Paiement Stripe** — Intégration paiement en ligne
- **Mentions légales** — Obligatoires (RGPD, CGV, politique de confidentialité)
- **SEO** — Priorité absolue (schema.org, Core Web Vitals, structure sémantique, mots-clés)

## Contraintes Techniques
- **Stack :** Next.js 15 + Tailwind + shadcn/ui
- **Backend :** Supabase
- **Déploiement :** Vercel
- **Pipeline :** BMAD v6.3.0 → Anti-Gravity → Git → Vercel
