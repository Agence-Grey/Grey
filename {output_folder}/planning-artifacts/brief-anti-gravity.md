# Brief Anti-Gravity — L'Agence Grey

**Date :** 2026-04-12
**De :** Alfred (orchestration)
**Pour :** Anti-Gravity
**Repo :** `~/agence-grey-project/`

---

## Mission

Implémenter le site institutionnel de L'Agence Grey en suivant les specs BMAD validées par k0da.

---

## Documents de référence

Tous dans `{output_folder}/planning-artifacts/` :

| Document | Contenu |
|---|---|
| `prd.md` | Product Requirements — fonctionnel, non-fonctionnel, SEO |
| `ux-design-specification.md` | Design system, couleurs, typographie, animations hero |
| `architecture.md` | Stack, structure projet, schema DB, routes, intégrations |
| `epics-stories.md` | 27 stories avec critères d'acceptation détaillés |
| `implementation-readiness.md` | Gate validé — réserves mineures non bloquantes |
| `wireframe-*.excalidraw` | Wireframes validés (Home, Services, About, Contact) |

---

## Stack

```
Frontend : Next.js 15 (App Router) + Tailwind CSS v4 + shadcn/ui
Backend  : Supabase (PostgreSQL, Auth, Storage)
Paiement : Stripe (Phase 3, ne pas implémenter maintenant)
Email    : Resend (Phase 2)
Deploy   : Vercel
Fonts    : Poppins (Google Fonts, variable)
Langue   : 100% français
```

---

## Ordre d'implémentation

### Sprint 1 — Fondations (Stories 1.1 → 1.5)

```
1.1  Init Next.js 15 + TypeScript + Tailwind + App Router + src/
1.2  Design system : globals.css, couleurs Grey, Poppins
1.3  Installer shadcn/ui : button, card, input, textarea, select, badge, skeleton, toast, dialog, separator
1.4  Supabase : créer projet, exécuter migration SQL, configurer clients (server + browser)
1.5  .env.local, .env.example, headers sécurité
```

### Sprint 2 — Layout (Stories 2.1 → 2.4)

```
2.1  Header sticky : logo AG Grey, nav, CTA devis, backdrop-blur au scroll
2.2  Menu mobile : hamburger, overlay fullscreen dark, animation
2.3  Footer : noir #1a1a1a, liens navigation + légaux, copyright
2.4  Cookie banner : consentement RGPD, stockage cookie
```

### Sprint 3 — Home (Stories 3.1 → 3.6)

```
3.1  Hero : animation (CSS/Lottie), H1, sous-titre, CTA, parallax
3.2  Solutions : 3 cartes pricing (Starter/Pro/Premium)
3.3  Process : 4 étapes en blocs violets
3.4  Portfolio preview : 3 cards placeholder
3.5  CTA final : fond violet, bouton blanc
3.6  SEO : meta tags, schema.org JSON-LD
```

### Sprint 4 — Pages contenu (Stories 4.1, 5.1, 6.1)

```
4.1  About : histoire + valeurs + photos placeholder
5.1  Services : 3 offres détaillées + services additionnels
6.1  Portfolio : galerie + pages détail
```

### Sprint 5 — Contact & Légales (Stories 7.1, 7.2, 8.1, 8.2, 8.3)

```
7.1  Formulaire contact : Zod validation, POST /api/contact, toast
7.2  Infos contact : email, téléphone, zone
8.1  Mentions légales
8.2  CGV
8.3  Politique confidentialité
```

---

## Specs techniques importantes

### Couleurs

```css
--primary:       #7F3FBF;
--primary-hover: #6B2FA6;
--primary-light: #9B5FCF;
--secondary:     #8a2be2;
--dark:          #1a1a1a;  /* hero, CTA blocks, footer */
--charcoal:      #333333;  /* texte principal */
```

### Typographie

```css
/* Poppins variable font via Google Fonts */
font-family: 'Poppins', sans-serif;

/* Taille des textes */
h1: 40px (700)
h2: 32px (600)
h3: 24px (600)
body: 16px (400)
body-lg: 18px (400)
button: 16px (600)
```

### Breakpoints

```
Mobile:   320px - 767px
Tablet:   768px - 1023px
Desktop:  1024px+
Large:    1440px+
```

### Schema Supabase

6 tables : `contacts`, `devis`, `clients`, `abonnements`, `paiements`, `portfolio`
RLS activé. Public peut INSERT dans contacts/devis, SELECT portfolio publié.
Service role = accès total.

SQL de migration dans `architecture.md` section 3.1.

---

## Ce qu'il ne faut PAS faire (pour l'instant)

- ❌ Stripe (Phase 3)
- ❌ Espace client / auth (Phase 3)
- ❌ Système de devis (Phase 2)
- ❌ Blog (Phase 2)
- ❌ Pages SEO locales (Phase 2)

---

## Données manquantes (k0da fournit)

- [ ] Texte page About (histoire Ophélie & k0da)
- [ ] Photos équipe
- [ ] Contenu portfolio (projets, images)
- [ ] Mentions légales / CGV / Confidentialité
- [ ] Assets animation hero (Lottie ou vidéo)

→ Utiliser des placeholders en attendant.

---

## Validation

À la fin de chaque sprint, commit + push. Alfred review.

Critères de validation finale :
- [ ] Lighthouse score > 90 sur chaque page
- [ ] Responsive sur 320px, 768px, 1024px, 1440px
- [ ] Tous les liens fonctionnent
- [ ] Formulaires soumettent correctement
- [ ] SEO : meta tags, schema.org, sitemap.xml
- [ ] Pas d'erreurs console
- [ ] Core Web Vitals : LCP < 2.5s, CLS < 0.1

---

*Brief généré par Alfred — BMAD v6.3.0 Pipeline*
