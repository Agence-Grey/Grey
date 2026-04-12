---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish]
inputDocuments: [docs/BRIEF.md, docs/planning-artifacts/research/market-research-agence-grey-2026-04-11.md]
workflowType: 'prd'
lastStep: 12
project_name: "L'Agence Grey — Site Web Institutionnel"
user_name: "k0da"
date: "2026-04-11"
project_type: "web-app"
domain: "agence-web-b2b"
complexity: "medium-high"
---

# Product Requirements Document — L'Agence Grey

**Author:** k0da
**Date:** 2026-04-11
**Version:** 1.0

---

## 1. Résumé Exécutif

### Le Problème

L'Agence Grey est une agence web B2B qui cible les studios de sport et bien-être (pole dance, yoga, danse) dans le Sud de la France (Côte d'Azur). Aujourd'hui, l'agence n'a pas de site web — elle ne peut pas démontrer sa valeur à des prospects qui, par définition, ont besoin d'un site.

### La Solution

Créer le site institutionnel de L'Agence Grey qui :
- **Démontre** la qualité du travail Grey (le site EST la preuve)
- **Convertit** les visiteurs en prospects via un système de devis en ligne
- **Rassure** les gérants de studios non-tech (alignement avec le tagline)
- **Génère du MRR** via un système de paiement Stripe intégré

### Vision Produit

> Le site de Grey doit être le meilleur site web que ses clients potentiels aient jamais vu — et en faire ressortir la valeur immédiatement : "Ils peuvent faire la même chose pour moi."

### Objectifs de Succès

| KPI | Cible (6 mois) | Cible (12 mois) |
|---|---|---|
| Trafic organique mensuel | 500 visiteurs | 2 000 visiteurs |
| Leads (devis soumis) | 15/mois | 40/mois |
| Taux de conversion devis→client | 15% | 20% |
| MRR généré | 2 000€ | 8 000€ |
| Position Google "agence web Côte d'Azur" | Top 10 | Top 5 |

---

## 2. Vision Produit & Critères de Succès

### Vision

"Le web qui rassure" — un site qui incarne cette promesse : professionnel, beau, performant, qui inspire confiance dès le premier scroll. Le hero animé doit créer un effet "wow" immédiat.

### Positionnement

- **Cible B2B** : Gérants/propriétaires de studios de sport/bien-être
- **Première niche** : Pole dance, yoga, danse
- **Zone** : Sud de la France (PACA, Côte d'Azur)
- **Offre** : Sites web clé en main + automatisation IA + agents IA
- **Différenciation** : IA + localisation + modèle abonnement + "rassurance"

### Ce que le site n'est PAS

- Pas un template générique — le design doit être premium
- Pas un site one-page — structure multi-pages complète
- Pas uniquement vitrine — fonctionnel (devis, paiement)
- Pas en anglais — 100% français, ton professionnel mais accessible

---

## 3. Parcours Utilisateur

### Parcours 1 : Le gérant de studio qui cherche une solution

```
1. Découvre Grey via Google ("créer un site pour studio yoga")
2. Atterrit sur la Home → Hero animé "wow effect"
3. Scroll → voit les services, les réalisations, le CTA
4. Clique "Demander votre devis en ligne"
5. Remplit le formulaire de devis (type de studio, besoins, budget)
6. Reçoit une estimation automatique
7. Prend RDV ou attend le rappel de Grey
8. Découvre le modèle Premium → paiement possible directement
```

### Parcours 2 : Le prospect qui a été recommandé

```
1. Reçoit le lien Grey via un ami/collègue
2. Atterrit sur la Home → immédiatement impressionné
3. Va sur "About" → découvre Ophélie et k0da, leur histoire
4. Consulte "Portfolio" → voit des maquettes/réalisations
5. Va sur "Services" → comprend l'offre (Starter/Pro/Premium)
6. Contact direct via page Contact
```

### Parcours 3 : Le client existant qui paie en ligne

```
1. Reçoit un lien de paiement (facture)
2. Atterrit sur la page de paiement Stripe
3. Paie en ligne de façon sécurisée
4. Reçoit confirmation + facture automatique
```

---

## 4. Analyse du Domaine

### Marché cible

- **TAM** : ~15 000 studios bien-être en France
- **SAM** : ~2 000 studios en PACA
- **SOM an 1** : 10-20 studios

### Concurrence

- **Agences généralistes** : chères (5-15k€), pas de spécialisation
- **Freelances** : bon marché mais qualité inégale, pas de suivi
- **Plateformes SaaS** (Mindbody, Glofox) : réservation mais pas de site
- **DIY** (Wix, Squarespace) : le gérant doit tout faire

### Opportunité

Aucune solution ne combine site web + réservation + paiement + maintenance + IA, à un tarif accessible pour les micro-entreprises.

### Modèle Économique

| Offre | Prix one-shot | MRR mensuel |
|---|---|---|
| **Starter** | 1 500 - 2 500€ | 49 - 79€ |
| **Pro** | 3 000 - 5 000€ | 99 - 149€ |
| **Premium** | 5 000 - 8 000€ | 199 - 299€ |

---

## 5. Innovation & Différenciation

### Le "wow effect" hero

Animation conceptuelle : un ordinateur portable posé sur une table, une lumière sort de l'écran, et le visiteur est "aspiré" à travers l'écran dans l'univers du site. Ce n'est pas juste un effet visuel — c'est la métaphore du service : "on vous emmène dans le monde du web."

Options techniques :
- Scroll-triggered animation (GSAP + Lottie ou Framer Motion)
- Autoplay video background avec parallax
- Three.js/WebGL pour l'effet 3D (risque perf → à évaluer)

### Le système de devis intelligent

Pas juste un formulaire de contact. Un formulaire structuré qui :
- Identifie le type de studio (yoga, pole dance, danse, autre)
- Évalue les besoins (site vitrine, réservation, paiement, IA)
- Donne une estimation de prix en temps réel
- Propose un créneau de RDV (calendrier intégré)

### L'aspect "rassurance"

Chaque élément doit renforcer la confiance :
- Témoignages clients (à développer)
- Portfolio/maquettes visibles
- Processus transparent ("comment on travaille")
- Mentions légales complètes
- Politique de confidentialité claire
- CGV accessibles

---

## 6. Classification du Projet

| Critère | Valeur |
|---|---|
| **Type** | Site web application (Next.js) |
| **Domaine** | Agence web B2B, services |
| **Context** | Greenfield (nouveau site) |
| **Complexité** | Moyenne-élevée (paiement, devis, animations, SEO) |
| **Stack** | Next.js 15 + Tailwind + shadcn/ui |
| **Backend** | Supabase |
| **Déploiement** | Vercel |

---

## 7. Scope & Phases

### Phase 1 — MVP (lancement)

- [ ] Home avec hero animé + CTA
- [ ] About (histoire Ophélie & k0da)
- [ ] Services (3 offres)
- [ ] Contact (formulaire)
- [ ] Portfolio (page maquettes)
- [ ] Mentions légales, CGV, politique de confidentialité
- [ ] SEO de base (meta, schema.org, sitemap, robots.txt)
- [ ] Responsive (mobile-first)
- [ ] Performance (Core Web Vitals > 90)

### Phase 2 — Conversion

- [ ] Système de devis en ligne (formulaire structuré)
- [ ] Estimation automatique de prix
- [ ] Intégration calendrier (RDV)
- [ ] Blog / Content marketing (SEO)

### Phase 3 — Monétisation

- [ ] Paiement Stripe (abonnement + one-shot)
- [ ] Espace client (factures, statut projet)
- [ ] Système de notifications (email)

### Phase 4 — IA & Automatisation

- [ ] Chatbot de qualification (agent IA)
- [ ] Automatisation relance prospects
- [ ] Génération de contenu automatique

---

## 8. Exigences Fonctionnelles

### FR-01 : Page Home
Le site DOIT avoir une page d'accueil avec :
- Hero animé (effet "aspiration à travers l'écran")
- Tagline "Grey : le web qui rassure" + sous-titre
- CTA "Demander votre devis en ligne"
- Section services résumée (3 cartes)
- Section portfolio/réalisations (aperçu)
- Section témoignages (placeholder Phase 1)
- Section processus ("Comment on travaille")
- Footer avec liens + mentions légales

### FR-02 : Page About
Le site DOIT avoir une page "À propos" avec :
- Histoire d'Ophélie et k0da
- Vision et valeurs de l'agence
- Photo(s) ou illustration(s) des fondateurs
- Le pourquoi de "le web qui rassure"

### FR-03 : Page Services
Le site DOIT avoir une page Services avec :
- Description des 3 offres (Starter, Pro, Premium)
- Tableau comparatif des fonctionnalités
- Prix indicatifs (ou "à partir de")
- CTA "Demander un devis" par offre

### FR-04 : Page Portfolio
Le site DOIT avoir une page Portfolio/Modèles avec :
- Galerie de maquettes/réalisations
- Filtrage par type de studio (si > 6 projets)
- Détail par projet (image, description, fonctionnalités)
- CTA "Je veux un site comme celui-ci"

### FR-05 : Page Contact
Le site DOIT avoir une page Contact avec :
- Formulaire de contact (nom, email, message, type de studio)
- Coordonnées (email, téléphone, adresse si applicable)
- Liens réseaux sociaux
- Carte/Géolocalisation (optionnel)

### FR-06 : Système de Devis (Phase 2)
Le site DOIT permettre de :
- Collecter les besoins via formulaire structuré
- Calculer une estimation de prix automatiquement
- Proposer un créneau de RDV
- Envoyer un email de confirmation au prospect
- Notifier l'équipe Grey

### FR-07 : Paiement Stripe (Phase 3)
Le site DOIT permettre de :
- Accepter des paiements one-shot
- Gérer des abonnements récurrents
- Générer des factures automatiquement
- Afficher l'historique de paiement (espace client)

### FR-08 : Mentions Légales
Le site DOIT contenir :
- Mentions légales (éditeur, hébergeur, directeur de publication)
- Politique de confidentialité (RGPD)
- CGV (conditions générales de vente)
- Politique de cookies
- Bloc cookies (consentement)

### FR-09 : Navigation
Le site DOIT avoir :
- Header sticky avec logo AG + navigation + CTA
- Menu mobile responsive (hamburger)
- Footer complet avec liens + mentions + réseaux sociaux
- Breadcrumbs (optionnel, utile SEO)

---

## 9. Exigences Non-Fonctionnelles

### Performance

| Critère | Cible |
|---|---|
| LCP (Largest Contentful Paint) | < 2,5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0,1 |
| Score Lighthouse global | > 90 |
| TTFB (Time to First Byte) | < 600ms |

### SEO

| Critère | Exigence |
|---|---|
| Meta tags | Title, description, OG, Twitter Card sur chaque page |
| Schema.org | LocalBusiness, Service, FAQ, BreadcrumbList |
| Sitemap | XML dynamique (Next.js) |
| Robots.txt | Configuré correctement |
| URLs | Propres, sémantiques, en français |
| Hn hierarchy | H1 unique par page, H2-H6 structurés |
| Images | Alt text, WebP/AVIF, lazy loading |
| i18n | Français uniquement (Phase 1) |
| Blog | Structure prête (Phase 2) |
| Google My Business | Fiche créée et optimisée |

### Sécurité

| Critère | Exigence |
|---|---|
| HTTPS | Obligatoire (Vercel = auto) |
| CSP | Content Security Policy headers |
| Stripe | PCI DSS compliant (Checkout/Elements) |
| RGPD | Consentement cookies, droit d'accès/suppression |
| Données formulaires | Chiffrement, pas de stockage local sensible |
| Rate limiting | Sur formulaires (anti-spam) |

### Accessibilité

| Critère | Cible |
|---|---|
| WCAG | 2.1 niveau AA minimum |
| Contraste | Ratio 4.5:1 minimum (texte normal) |
| Navigation clavier | Tous les éléments accessibles |
| Screen reader | ARIA labels corrects |
| Alt text | Toutes les images |

### Responsive

| Breakpoint | Cible |
|---|---|
| Mobile | 320px - 767px |
| Tablette | 768px - 1023px |
| Desktop | 1024px+ |
| Large | 1440px+ |

---

## 10. Contraintes Techniques

### Stack validée

| Couche | Technologie |
|---|---|
| Front | Next.js 15 + Tailwind CSS + shadcn/ui |
| Backend | Supabase (auth, DB, storage) |
| Paiement | Stripe (Checkout + Billing) |
| Hébergement | Vercel |
| Analytics | Vercel Analytics + (Plausible?) |
| CMS | Supabase ou MDX (Phase 1: statique) |

### Design System

| Élément | Valeur |
|---|---|
| Couleur principale | #7F3FBF |
| Couleur secondaire | #8a2be2 |
| Couleur texte/base | #333333 |
| Police principale | Poppins (à confirmer avec mockup) |
| Logo | AG monogram + barre violette + baseline |

### Intégrations

- **Stripe** : Checkout, Billing Portal, Webhooks
- **Supabase** : Tables (contacts, devis, paiements), Auth (Phase 3)
- **Email** : Resend ou SendGrid (transactionnel)
- **Calendrier** : Cal.com ou Calendly (Phase 2)
- **Analytics** : Vercel Analytics

---

## 11. Plan SEO Détaillé

### Mots-clés prioritaires

| Mot-clé | Intent | Priorité |
|---|---|---|
| agence web Côte d'Azur | Transactionnel | Haute |
| création site internet studio yoga | Transactionnel | Haute |
| site web avec réservation en ligne | Transactionnel | Haute |
| agence web bien-être | Transactionnel | Moyenne |
| site professionnel Nice/Marseille | Transactionnel | Moyenne |
| solution réservation studio sport | Transactionnel | Moyenne |
| comment créer un site pour studio yoga | Informationnel | Moyenne (blog) |

### Structure sémantique

```
Home (H1: "Votre studio mérite un site qui vous ressemble")
├── About (H1: "L'histoire de Grey")
├── Services (H1: "Nos solutions web pour studios")
│   ├── /services/starter
│   ├── /services/pro
│   └── /services/premium
├── Portfolio (H1: "Nos réalisations")
├── Contact (H1: "Contactez-nous")
├── Blog (Phase 2) (H1: "Conseils & actualités")
│   ├── /blog/[slug]
│   └── /blog/categorie/[category]
├── Mentions légales
├── CGV
└── Politique de confidentialité
```

### Pages SEO locales (Phase 2)

- /agence-web-nice
- /agence-web-marseille
- /agence-web-aix-en-provence
- /agence-web-cannes
- /agence-web-toulon

---

## 12. Glossaire

| Terme | Définition |
|---|---|
| **MRR** | Monthly Recurring Revenue — revenu mensuel récurrent |
| **Hero** | Section principale visible sans scroll sur la page d'accueil |
| **CTA** | Call to Action — bouton incitant à l'action |
| **CRM** | Customer Relationship Management |
| **RGPD** | Règlement Général sur la Protection des Données |
| **LCP/CLS/FID** | Core Web Vitals — métriques de performance Google |
| **Schema.org** | Balisage structuré pour les moteurs de recherche |
| **Stripe Checkout** | Page de paiement hébergée par Stripe |
| **shadcn/ui** | Bibliothèque de composants React (pas un package, du code copié) |
| **Supabase** | Backend-as-a-Service (alternative open-source à Firebase) |

---

## 13. Prochaines Étapes

1. ✅ PRD validé par k0da
2. → Create UX Design (wireframes, design system, hero animation)
3. → Wireframe Validation (gate Excalidraw)
4. → Create Architecture (schema Supabase, routes, Stripe integration)
5. → Create Epics & Stories
6. → Implementation Readiness check
7. → Anti-Gravity implémente
8. → Review + déploiement

---

*Document généré par BMAD v6.3.0 — L'Agence Grey Pipeline*
