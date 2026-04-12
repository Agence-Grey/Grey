---
stepsCompleted: [step-01-epics, step-02-stories, step-03-priorities]
inputDocuments: [{output_folder}/planning-artifacts/prd.md, {output_folder}/planning-artifacts/architecture.md, {output_folder}/planning-artifacts/ux-design-specification.md]
workflowType: 'epics-stories'
project_name: "L'Agence Grey — Site Web Institutionnel"
user_name: "k0da"
date: "2026-04-12"
---

# Epics & Stories — L'Agence Grey

**Author:** k0da (via Alfred/BMAD)
**Date:** 2026-04-12
**Version:** 1.0
**Input:** PRD v1.0, Architecture v1.0, UX Design Spec v1.0

---

## Epic 1 — Setup Projet & Fondations

**Objectif :** Initialiser le projet Next.js 15 avec toute la stack technique.
**Priorité :** P0 (bloquant pour tout le reste)

### Story 1.1 — Initialisation Next.js
**En tant que** développeur,
**Je veux** un projet Next.js 15 configuré avec App Router,
**Afin de** commencer le développement.

**Critères d'acceptation :**
- [ ] `create-next-app` lancé avec TypeScript, Tailwind, App Router, src/
- [ ] `pnpm` comme package manager
- [ ] Structure `src/app/` conforme à l'architecture
- [ ] `pnpm dev` fonctionne sur localhost:3000
- [ ] tsconfig.json configuré (paths, strict mode)

**Tâches :**
1. Lancer `pnpm create next-app@latest` avec les bonnes options
2. Installer shadcn/ui : `pnpm dlx shadcn@latest init`
3. Configurer `components.json` (style: default, base color: zinc)
4. Vérifier que le dev server tourne

---

### Story 1.2 — Design System & Global CSS
**En tant que** visiteur,
**Je veux** voir le site avec les couleurs et polices de Grey,
**Afin de** reconnaître la marque immédiatement.

**Critères d'acceptation :**
- [ ] Poppins importée (Google Fonts, variable font)
- [ ] Couleurs primary (#7F3FBF), secondary (#8a2be2), dark (#1a1a1a) configurées dans Tailwind
- [ ] `globals.css` avec CSS custom properties
- [ ] Tokens d'espacement et border-radius définis
- [ ] Les couleurs s'appliquent via `bg-primary`, `text-primary`, etc.

**Fichier :** `src/app/globals.css`, `tailwind.config.ts`

---

### Story 1.3 — Composants shadcn/ui de base
**En tant que** développeur,
**Je veux** les composants UI installés et prêts,
**Afin de** les utiliser dans les pages.

**Critères d'acceptation :**
- [ ] Button (variants: primary, secondary, ghost, outline)
- [ ] Card
- [ ] Input, Textarea, Select
- [ ] Badge
- [ ] Skeleton
- [ ] Toast
- [ ] Dialog
- [ ] Separator
- [ ] Tous fonctionnent avec le thème Grey

**Tâches :** `pnpm dlx shadcn@latest add button card input textarea select badge skeleton toast dialog separator`

---

### Story 1.4 — Supabase Setup
**En tant que** développeur,
**Je veux** Supabase configuré et connecté,
**Afin de** stocker les données.

**Critères d'acceptation :**
- [ ] Projet Supabase créé
- [ ] Variables d'env dans `.env.local`
- [ ] Client Supabase (server + browser) dans `src/lib/`
- [ ] Migration SQL exécutée (6 tables)
- [ ] RLS policies actives
- [ ] Storage buckets créés (`portfolio-images`, `team-photos`)

---

### Story 1.5 — Variables d'environnement & Sécurité
**En tant que** développeur,
**Je veux** toutes les variables d'env configurées,
**Afin de** déployer sans erreur.

**Critères d'acceptation :**
- [ ] `.env.local` avec toutes les variables (Supabase, Stripe, Resend)
- [ ] `.env.example` (sans valeurs) commité
- [ ] `.gitignore` inclut `.env*.local`
- [ ] Headers de sécurité dans `next.config.ts`

---

## Epic 2 — Layout & Navigation

**Objectif :** Header sticky, footer complet, menu mobile, cookie banner.
**Priorité :** P0 (visible sur toutes les pages)

### Story 2.1 — Header Sticky
**En tant que** visiteur,
**Je veux** un header qui reste visible quand je scroll,
**Afin de** naviguer facilement à tout moment.

**Critères d'acceptation :**
- [ ] Header fixe en haut de page (position sticky)
- [ ] Logo "AG Grey" à gauche (avec monogramme violet)
- [ ] Navigation : Services, À propos, Portfolio, Contact
- [ ] CTA "Demander un devis" à droite (bouton violet)
- [ ] Fond blanc semi-transparent avec backdrop-blur au scroll
- [ ] Lien actif surligné en violet
- [ ] Responsive : menu hamburger sur mobile (< 768px)

**Composants :** `src/components/layout/header.tsx`

---

### Story 2.2 — Menu Mobile
**En tant que** visiteur mobile,
**Je veux** un menu hamburger qui s'ouvre en fullscreen,
**Afin de** naviguer sur petit écran.

**Critères d'acceptation :**
- [ ] Icône hamburger visible < 768px
- [ ] Ouverture en overlay fullscreen (fond dark #1a1a1a)
- [ ] Liens de navigation empilés, taille tactile (48px min)
- [ ] CTA devis visible en bas
- [ ] Animation d'ouverture/fermeture (slide ou fade)
- [ ] Fermeture au clic sur un lien ou le backdrop

**Composants :** `src/components/layout/mobile-menu.tsx`

---

### Story 2.3 — Footer
**En tant que** visiteur,
**Je veux** un footer complet avec toutes les infos légales,
**Afin de** trouver mentions légales et coordonnées.

**Critères d'acceptation :**
- [ ] Fond noir (#1a1a1a)
- [ ] Logo AG Grey + tagline
- [ ] Liens : Accueil, Services, À propos, Contact
- [ ] Liens légaux : Mentions légales, CGV, Confidentialité
- [ ] Copyright "© 2026 L'Agence Grey"
- [ ] Liens réseaux sociaux (Phase 2 : placeholder)
- [ ] Responsive : colonnes sur desktop, empilé sur mobile

**Composants :** `src/components/layout/footer.tsx`

---

### Story 2.4 — Cookie Banner
**En tant que** visiteur,
**Je veux** un bandeau de consentement cookies,
**Afin de** respecter le RGPD.

**Critères d'acceptation :**
- [ ] Bandeau en bas de page au premier chargement
- [ ] Texte explicatif + liens politique de cookies
- [ ] Boutons "Accepter" et "Refuser"
- [ ] Choix stocké dans un cookie (12 mois)
- [ ] N'apparaît plus après choix
- [ ] Pas de tracking avant acceptation

**Composants :** `src/components/layout/cookie-banner.tsx`

---

## Epic 3 — Page Home

**Objectif :** Page d'accueil avec hero animé, sections, et CTA.
**Priorité :** P0 (page principale)

### Story 3.1 — Hero Section
**En tant que** visiteur,
**Je veux** un hero impactant avec animation,
**Afin d'être** impressionné dès la première seconde.

**Critères d'acceptation :**
- [ ] Fond sombre (#1a1a1a), 100vh
- [ ] Animation laptop + lumière violette (Lottie ou CSS)
- [ ] H1 : "Votre studio mérite un site qui vous ressemble"
- [ ] Sous-titre : "Sites web clé en main pour studios de sport et bien-être"
- [ ] CTA : "Demander votre devis en ligne →"
- [ ] Parallax léger au scroll (0.3 ratio)
- [ ] Fallback : image statique sur mobile
- [ ] Accessible : contraste AA, aria-labels

**Composants :** `src/components/home/hero.tsx`, `src/components/home/hero-animation.tsx`

---

### Story 3.2 — Section Solutions (Pricing)
**En tant que** visiteur,
**Je veux** voir les 3 offres avec prix,
**Afin de** comprendre rapidement l'offre.

**Critères d'acceptation :**
- [ ] 3 cartes : Starter (1 500€+), Pro (3 000€+), Premium (5 000€+)
- [ ] Chaque carte : nom, prix, CTA "En savoir plus"
- [ ] Fond blanc, cards avec ombre et border-radius 16px
- [ ] Grid responsive : 3 colonnes desktop, 1 colonne mobile
- [ ] Hover : shadow-lg + léger scale

**Composants :** `src/components/home/solutions.tsx`

---

### Story 3.3 — Section Process
**En tant que** visiteur,
**Je veux** voir comment Grey travaille,
**Afin de** me rassurer sur la méthode.

**Critères d'acceptation :**
- [ ] Fond sombre (#1a1a1a)
- [ ] 4 étapes : 1. Brief → 2. Design → 3. Dev → 4. Mise en ligne
- [ ] Chaque étape dans un bloc violet arrondi
- [ ] Flèches entre les étapes
- [ ] Sous-titre : "On s'occupe de tout. De A à Z."
- [ ] Responsive : horizontal desktop, vertical mobile

**Composants :** `src/components/home/process.tsx`

---

### Story 3.4 — Section Portfolio Preview
**En tant que** visiteur,
**Je veux** voir un aperçu des réalisations,
**Afin de** juger la qualité du travail.

**Critères d'acceptation :**
- [ ] 3 cartes projet (placeholder si pas de projets)
- [ ] Chaque carte : image, nom studio, lien "Voir le projet"
- [ ] Grid responsive 3 colonnes
- [ ] Lien "Voir le portfolio →" en dessous
- [ ] Images en lazy loading

**Composants :** `src/components/home/portfolio-preview.tsx`

---

### Story 3.5 — Section CTA Final
**En tant que** visiteur convaincu,
**Je veux** un CTA clair pour passer à l'action,
**Afin de** demander un devis facilement.

**Critères d'acceptation :**
- [ ] Fond violet (#7F3FBF)
- [ ] Titre : "Prêt à lancer votre site ?"
- [ ] Bouton blanc "Demander votre devis en ligne →"
- [ ] Lien vers /devis

**Composants :** `src/components/home/cta-section.tsx`

---

### Story 3.6 — SEO Home
**En tant que** Googlebot,
**Je veux** des meta tags et schema.org corrects sur la Home,
**Afin d'indexer et afficher le site dans les résultats.

**Critères d'acceptation :**
- [ ] Title : "L'Agence Grey — Sites web pour studios de sport | Côte d'Azur"
- [ ] Description : 155 caractres max, mots-clés cibles
- [ ] OG tags (title, description, image)
- [ ] Schema.org : LocalBusiness + WebPage (JSON-LD)
- [ ] H1 unique sur la page
- [ ] Alt text sur toutes les images

---

## Epic 4 — Page About

**Objectif :** Présenter Ophélie, k0da, et la vision de Grey.
**Priorité :** P1

### Story 4.1 — Contenu About
**En tant que** prospect,
**Je veux** connaître l'histoire des fondateurs,
**Afin de** faire confiance à l'agence.

**Critères d'acceptation :**
- [ ] Hero avec titre "Notre Histoire"
- [ ] Section histoire (texte à gauche, photo à droite)
- [ ] Section "Nos Valeurs" (4 blocs : Transparence, Accompagnement, Qualité, Innovation)
- [ ] Photos Ophélie & k0da (placeholder si pas de photos)
- [ ] SEO : Title, Description, Schema.org AboutPage

**Route :** `/about`
**Composants :** `src/app/about/page.tsx`

---

## Epic 5 — Page Services

**Objectif :** Détail des 3 offres + services additionnels.
**Priorité :** P1

### Story 5.1 — Services Listing
**En tant que** prospect,
**Je veux** voir le détail de chaque offre,
**Afin de** choisir celle qui me convient.

**Critères d'acceptation :**
- [ ] Hero "Nos Services"
- [ ] 3 cards détaillées (Starter, Pro, Premium) avec liste de features
- [ ] Prix indicatifs visibles
- [ ] CTA "Demander un devis" par offre
- [ ] Section "Services Additionnels" (Automatisation IA, Agents IA, Maintenance, Refonte)
- [ ] Tableau comparatif (optionnel, Phase 2)

**Route :** `/services`
**Composants :** `src/app/services/page.tsx`, `src/components/services/service-card.tsx`

---

## Epic 6 — Page Portfolio

**Objectif :** Galerie de projets réalisés.
**Priorité :** P1

### Story 6.1 — Portfolio Gallery
**En tant que** prospect,
**Je veux** voir les réalisations de Grey,
**Afin de** juger la qualité.

**Critères d'acceptation :**
- [ ] Grille de projets (3 colonnes desktop, 1 mobile)
- [ ] Chaque carte : image cover, titre, type studio, lien détail
- [ ] Filtrage par type (si > 6 projets — Phase 2)
- [ ] Page détail `/portfolio/[slug]` avec galerie images
- [ ] Données depuis Supabase (table `portfolio`)
- [ ] Placeholder "Aperçu prochain" si pas de projets

**Routes :** `/portfolio`, `/portfolio/[slug]`
**Composants :** `src/components/portfolio/gallery.tsx`, `src/components/portfolio/project-card.tsx`

---

## Epic 7 — Page Contact

**Objectif :** Formulaire de contact fonctionnel.
**Priorité :** P0

### Story 7.1 — Formulaire Contact
**En tant que** prospect,
**Je veux** contacter Grey facilement,
**Afin de** discuter de mon projet.

**Critères d'acceptation :**
- [ ] Formulaire : Nom, Email, Téléphone, Type de studio (select), Message
- [ ] Validation côté client (Zod + react-hook-form)
- [ ] Soumission → POST /api/contact → enregistrement Supabase
- [ ] Toast de confirmation après envoi
- [ ] Email de confirmation envoyé (Resend)
- [ ] Rate limiting (anti-spam)
- [ ] Champs obligatoires marqués (*)
- [ ] Messages d'erreur clairs

**Route :** `/contact`
**API :** `/api/contact`
**Composants :** `src/components/contact/contact-form.tsx`

---

### Story 7.2 — Informations Contact
**En tant que** visiteur,
**Je veux** voir les coordonnées de Grey,
**Afin de** les contacter autrement que par formulaire.

**Critères d'acceptation :**
- [ ] Email : contact@agence-grey.fr
- [ ] Téléphone (placeholder)
- [ ] Zone : Sud de la France, Côte d'Azur
- [ ] Horaires : Lun-Ven, 9h-18h
- [ ] Liens réseaux sociaux (Phase 2)

**Composants :** `src/components/contact/contact-info.tsx`

---

## Epic 8 — Pages Légales

**Objectif :** Mentions légales, CGV, Politique de confidentialité.
**Priorité :** P0 (obligatoire RGPD)

### Story 8.1 — Mentions Légales
**Critères d'acceptation :**
- [ ] Éditeur, hébergeur, directeur de publication
- [ ] Route `/mentions-legales`
- [ ] Contenu statique (MDX ou composant)

### Story 8.2 — CGV
**Critères d'acceptation :**
- [ ] Conditions générales de vente complètes
- [ ] Route `/cgv`
- [ ] Tarifs, modalités de paiement, livraison, réclamations

### Story 8.3 — Politique de Confidentialité
**Critères d'acceptation :**
- [ ] RGPD compliance
- [ ] Données collectées, finalités, durée de conservation
- [ ] Droits d'accès, rectification, suppression
- [ ] Route `/confidentialite`

---

## Epic 9 — Système de Devis (Phase 2)

**Objectif :** Formulaire de devis structuré avec estimation automatique.
**Priorité :** P2 (après lancement MVP)

### Story 9.1 — Formulaire Devis Multi-étapes
**Critères d'acceptation :**
- [ ] Étape 1 : Infos personnelles (nom, email, téléphone, studio)
- [ ] Étape 2 : Type de studio (yoga, pole dance, danse, etc.)
- [ ] Étape 3 : Besoins (cases à cocher : site, réservation, paiement, blog, IA)
- [ ] Étape 4 : Offre sélectionnée + estimation
- [ ] Étape 5 : Récapitulatif + soumission
- [ ] Progress bar en haut
- [ ] Navigation avant/arrière

**Route :** `/devis`
**Composants :** `src/components/devis/devis-form.tsx`

---

### Story 9.2 — Estimation Automatique
**Critères d'acceptation :**
- [ ] Calcul en temps réel basé sur les besoins sélectionnés
- [ ] Règles : base prix offre + suppléments par besoin
- [ ] Affichage : "Estimation : 1 500€ — 2 500€"
- [ ] API `/api/devis/estimate`

---

## Epic 10 — Paiement Stripe (Phase 3)

**Objectif :** Paiements one-shot et abonnements.
**Priorité :** P3 (après devis)

### Story 10.1 — Stripe Checkout
**Critères d'acceptation :**
- [ ] Bouton "Payer" → session Stripe Checkout
- [ ] Redirection vers page hébergée Stripe
- [ ] Callback success → /paiement/success
- [ ] Webhook → enregistrement dans Supabase

### Story 10.2 — Gestion Abonnements
**Critères d'acceptation :**
- [ ] Création abonnement récurrent
- [ ] Portail client Stripe (gestion carte, résiliation)
- [ ] Historique paiements

---

## Récapitulatif & Priorités

| # | Epic | Stories | Priorité | Phase |
|---|---|---|---|---|
| 1 | Setup & Fondations | 5 | P0 | MVP |
| 2 | Layout & Navigation | 4 | P0 | MVP |
| 3 | Page Home | 6 | P0 | MVP |
| 4 | Page About | 1 | P1 | MVP |
| 5 | Page Services | 1 | P1 | MVP |
| 6 | Page Portfolio | 1 | P1 | MVP |
| 7 | Page Contact | 2 | P0 | MVP |
| 8 | Pages Légales | 3 | P0 | MVP |
| 9 | Système de Devis | 2 | P2 | Phase 2 |
| 10 | Paiement Stripe | 2 | P3 | Phase 3 |

**Total Phase 1 (MVP) : 23 stories**
**Total Phase 2-3 : 4 stories**

---

## Prochaines Étapes

1. ✅ Epics & Stories définis
2. → Implementation Readiness check (gate final)
3. → Anti-Gravity implémente (par ordre de priorité P0 → P1)
4. → Review + déploiement

---

*Document généré par BMAD v6.3.0 — L'Agence Grey Pipeline*
