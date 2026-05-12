# QA Report — Agence Grey (BMAD)

**Date:** 2026-05-12
**Reviewer:** irene (quality)
**Scope:** Full site review — toutes les pages, composants, données, build
**Artifact:** `qa-report.md`

---

## Résumé Général

**Verdict: APPROUVÉ — avec 4 issues mineures à corriger avant mise en production.**

Le site est structuré, cohérent, et le build est propre. Aucune régression critique. Quelques améliorations d'accessibilité et de contenu à来处理.

---

## ✅ Pages vérifiées

| Page | Fichier | Statut |
|------|---------|--------|
| / (accueil) | `src/app/page.tsx` | OK |
| /devis | `src/app/devis/page.tsx` | OK |
| /contact | `src/app/contact/page.tsx` | OK |
| /services | `src/app/services/page.tsx` | OK |
| /services/[slug] | `src/app/services/[slug]/page.tsx` | OK |
| /portfolio | `src/app/portfolio/page.tsx` | OK |
| /portfolio/[slug] | `src/app/portfolio/[slug]/page.tsx` | OK |
| /about | `src/app/about/page.tsx` | OK |
| /mentions-legales | `src/app/mentions-legales/page.tsx` | OK |
| /confidentialite | `src/app/confidentialite/page.tsx` | OK |
| /cgv | `src/app/cgv/page.tsx` | OK |
| /paiement | `src/app/paiement/page.tsx` | OK |

---

## ✅ Critère 1 — Prix affichés sur /devis

Vérification against `src/lib/content.ts`:

| Offre | `content.ts` price | `content.ts` priceNote | Affiché sur /devis |
|-------|-------------------|------------------------|---------------------|
| L'Essentiel | `1 490 €` | `Paiement unique — sans engagement` | ✅ 1 490 € + note OK |
| Le Confort | `1 290 €` | `+ 249 €/mois — engagement 12 mois` | ✅ 1 290 € + 249 €/mois OK |
| Le Booster | `1 290 €` | `+ abonnement mensuel sur mesure` | ✅ 1 290 € + note OK |

**Verdict: PRIX CORRECTES**

---

## ✅ Critère 2 — Layout responsive sans casse

- `PricingCard`: `lg:grid-cols-3`, `lg:items-start` —3 colonnes sur desktop, grid stacking sur mobile ✅
- `AddOnCard grid`: `md:grid-cols-2 xl:grid-cols-4` ✅
- `ReassuranceCard grid`: `md:grid-cols-2` ✅
- Breakpoints cohérents avec `max-w-6xl`, `px-6 sm:px-8 lg:px-10` ✅
- Hero: `lg:grid-cols-[1.05fr_0.95fr]` ✅
- CTA Banner: border-radius `rounded-[2rem]`, padding responsive ✅
- SectionWrapper: padding `py-16 sm:px-8 lg:py-24` ✅

**Verdict: RESPONSIVE OK**

---

## ✅ Critère 3 — CTAs fonctionnels (liens `/contact` ou `/devis`)

| Emplacement | CTA | Lien |
|-------------|-----|------|
| PricingCard (x3) | "Demander un devis" | `/contact` ✅ |
| CTABanner (/devis) | "Demander un devis gratuit" | `/contact` ✅ |
| Service detail CTA primaire | "Demander un devis" | `/devis` ✅ |
| Service detail CTA secondaire | "Poser une question" | `/contact` ✅ |
| Header | "Demander un devis" | `/devis` ✅ |
| Footer | "Demander un devis" | `/devis` ✅ |
| Hero button | "Demander un devis" | `/devis` ✅ |

**Verdict: LIENS OK**

---

## ✅ Critère 4 — Données cohérentes avec `content.ts`

- `servicePackages` utilisé sur /devis, /services, /services/[slug] ✅
- `serviceAddons` utilisé sur /devis, /services ✅
- `devisReassurance` utilisé sur /devis ✅
- `portfolioEntries` utilisé sur /portfolio et /portfolio/[slug] ✅
- `aboutValues` utilisé sur /about ✅
- `portfolioEntries` cohérent sur les 3 entrées (Studio Halo, Atelier Vertical, Forge Performance) ✅

**Verdict: DONNÉES COHÉRENTES**

---

## ✅ Critère 5 — Copyright 2026, localisation Breil-sur-Roya

- Footer: `const year = new Date().getFullYear()` → dynamique, sera 2026 ✅
- Footer: "Conçu pour convertir sans bruit parasite." — phrase signature Grey ✅
- Mentions légales: "367 route de Ciaus, Breil-sur-Roya 06540" ✅
- ContactInfo: "Breil-sur-Roya, région PACA" ✅
- About: "Basés à Breil-sur-Roya, présents partout en France" ✅
- siteConfig description: "agence web IA à Breil-sur-Roya" ✅

**Verdict: LOCALISATION OK**

---

## ✅ Critère 6 — Pas de régression visuelle

- ESLint: 0 erreurs, 2 warnings (fichiers无关 — scripts de cleanup)
- TypeScript: 0 erreurs
- Build Next.js: `compiled successfully`, toutes les routes générées ✅
- `generateStaticParams` sur `/services/[slug]` et `/portfolio/[slug]` ✅
- Pas de `use client` manquant sur les composants interactifs ✅

**Verdict: BUILD PROPRE**

---

## 🐛 Issues détaillées

### Issue #1 — Accents français manquants dans DevisForm (medium)

**Fichier:** `src/components/devis/devis-form.tsx`

**Problème:** 4 chaînes UI sans accents.

| Ligne | Actuel | Correct |
|-------|--------|---------|
| ~112 | `Selectionnez tout ce qui vous interesse` | `Sélectionnez tout ce qui vous intéresse` |
| ~112 | `L'estimation sera calculee automatiquement` | `L'estimation sera calculée automatiquement` |
| ~159 | `Selectionner...` (placeholder) | `Sélectionner...` |
| ~179 | `Details sur votre projet...` | `Détail sur votre projet...` |

**Sévérité:** medium (impact UX/français correct)
**Action:** Corriger les chaînes avant mise en prod.

---

### Issue #2 — Filtre besoins: `type="button"` manquant (low)

**Fichier:** `src/components/devis/devis-form.tsx`, ligne ~155

**Problème:** Les boutons de filtres de besoins n'ont pas `type="button"`, ce qui peut provoquer un submit involontaire du formulaire parent si le bouton est à l'intérieur d'un `<form>`.

```tsx
// Actuel
<button onClick={() => toggleNeed(need)} ...>

// Recommandé
<button type="button" onClick={() => toggleNeed(need)} ...>
```

**Sévérité:** low
**Action:** Ajouter `type="button"` à tous les boutons de filtres.

---

### Issue #3 — Bouton "Précédent"缺少 aria-label (low)

**Fichier:** `src/components/devis/devis-form.tsx`, ligne ~227

**Problème:** Le bouton "Précédent" utilise `← Précédent` comme texte visible, mais n'a pas d'`aria-label` explicite. Lecteurs d'écran: le "←" peut être lu de manière incohérente.

```tsx
// Actuel
<Button variant="ghost" onClick={prev} disabled={step === 0}>
  ← Précédent
</Button>

// Recommandé
<Button variant="ghost" onClick={prev} disabled={step === 0} aria-label="Étape précédente">
  ← Précédent
</Button>
```

**Sévérité:** low
**Action:** Ajouter `aria-label="Étape précédente"`.

---

### Issue #4 — ContactForm select: placeholder non traduit (low)

**Fichier:** `src/components/contact/contact-form.tsx`, ligne ~75

**Problème:** Le placeholder du Select utilise "Choisir une activité" en français, mais le SelectTrigger affiche la SelectValue. Le placeholder `placeholder="Choisir une activité"` sur le SelectTrigger n'est pas un placeholder standard — c'est le `SelectValue` qui affiche la sélection vide. Cohérent, mais à vérifier visuellement en runtime.

Pas d'action corrective urgente — vérifier en testant le render réel.

**Sévérité:** info / low

---

## 📊 Métriques de build

```
ESLint:        0 erreurs, 2 warnings (fichiers de cleanup, non livrés)
TypeScript:    0 erreurs
Build:         compiled successfully — toutes routes OK
First Load JS: 206 kB (partagé)
Routes:        /devis (static), /services (static), /portfolio (static),
               /services/[slug] (SSG x3), /portfolio/[slug] (SSG x3)
```

---

## 🎯 Recommandations

1. **Corriger les accents français** dans DevisForm avant mise en prod — impact image de marque.
2. **Ajouter `type="button"`** sur les filtres de besoins pour éviter tout submit involontaire.
3. **Ajouter `aria-label`** sur le bouton "Précédent" pour l'accessibilité.
4. Tester manuellement les formulaires (devis multi-step + contact) en browser avant mise en ligne.
5. Vérifier le render des images team (`/images/team/adrien.jpg`, `/images/team/ophelie.jpg`) — fichiers pas vérifiés dans ce review (à confirmer sur staging).

---

## ✅ Résumé des vérifications Commentaires QA Agent

> Mission: Vérifier 7 points sur /devis (3 cartes prix, layout responsive, CTAs, données content.ts, prix, pas de régression, copyright 2026 + Breil-sur-Roya)

| # | Critère | Résultat |
|---|---------|----------|
| 1 | 3 cartes affichées | ✅ |
| 2 | Layout responsive | ✅ |
| 3 | CTAs fonctionnels | ✅ `/contact` sur PricingCard et CTABanner |
| 4 | Données cohérentes content.ts | ✅ |
| 5 | Prix corrects | ✅ Essentiel 1490€, Confort 1290€+249€/mois, Booster 1290€+abonnement |
| 6 | Pas de régression visuelle | ✅ build, tsc, lint tous propres |
| 7 | Copyright 2026 + Breil-sur-Roya | ✅ dynamique + adresses confirmées |

**Verdict page /devis: APPROUVÉE**