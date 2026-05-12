# Page `/devis` — Design & Architecture

> Maquette statique : `_bmad-output/devis-mockup/index.html`
> Gate : k0da doit valider la maquette avant développement.

---

## 1. Vue d'ensemble

La page `/devis` présente les trois offres de l'Agence Grey de manière claire et rassurante. Elle reprend les mêmes codes visuels que le reste du site (dark theme premium, accents violet, typographies Poppins/Nunito) tout en mettant l'accent sur la lisibilité des prix et la différenciation des formules.

**Objectifs UX :**
- Comprendre les offres en moins de 10 secondes
- Identifier visuellement la formule recommandée
- Accéder au CTA "Demander un devis" sans scroll excessif
- Rassurer sur l'absence de frais cachés

---

## 2. Structure de la page

```
/devis
├── Header (sticky, existant)
├── Section Hero
│   └── eyebrow "Devis"
│   └── H1 : "Des tarifs clairs, sans surprise"
│   └── description
├── Section Pricing (3 cartes)
│   ├── Carte 1 : L'Essentiel
│   ├── Carte 2 : Le Confort (mise en avant)
│   └── Carte 3 : Le Booster
├── Section Add-ons (4 services)
├── Section Réassurance (4 valeurs + CTA banner)
└── Footer (existant)
```

---

## 3. Design Tokens utilisés

| Token | Valeur | Usage |
|---|---|---|
| `--bg` | `#050505` | fond page |
| `--surface` | `#111111` | fond cartes |
| `--surface-2` | `#1a1a1a` | fond section réassurance |
| `--border` | `rgba(255,255,255,0.10)` | bordures subtiles |
| `--text` | `#f5f5f5` | texte principal |
| `--muted` | `#b8b8c2` | texte secondaire |
| `--accent` | `#a855f7` | CTA, puces, badges, glow |
| `--accent-strong` | `#9333ea` | hover CTA |
| `--accent-glow` | `rgba(168,85,247,0.35)` | sélection, ombres |
| `font-sans` | Poppins | titres, UI |
| `font-body` | Nunito | corps de texte (optionnel) |
| `radius-card` | `2rem` | cartes pricing |
| `radius-item` | `1.5rem` | add-ons, reassurance |

---

## 4. Composants UI

### 4.1 PricingCard

```tsx
interface PricingCardProps {
  name: string;
  price: string;
  priceNote: string;
  summary: string;
  features: string[];
  featured?: boolean;
  ctaText: string;
  ctaVariant: "primary" | "secondary";
}
```

**Spécifications visuelles :**
- Fond : `--surface` (ou dégradé violet pour `featured`)
- Bordure : `1px solid var(--border)` (ou `rgba(168,85,247,0.35)` pour `featured`)
- Radius : `2rem`
- Padding : `32px`
- Glow violet sur la carte featured : `box-shadow: 0 0 60px rgba(168,85,247,0.12)`
- Scale léger sur desktop pour la featured : `scale(1.03)`

**Badge "Recommandé" :**
- Position : absolute, top `-12px`, centré horizontalement
- Style : fond `--accent`, texte noir, uppercase, radius pill

**Prix :**
- Taille : `2.2rem`, weight `700`, couleur blanche
- Sous-ligne : `0.9rem`, couleur `--muted`

**Feature list :**
- Puces violettes rondes (`8px`, `bg-accent`)
- Texte `--muted`, `0.9rem`

### 4.2 AddOnCard

```tsx
interface AddOnCardProps {
  icon: React.ReactNode; // ou emoji/string simple
  title: string;
  description: string;
}
```

**Spécifications :**
- Fond : `--surface`
- Bordure : `1px solid var(--border)`
- Hover : `border-color: rgba(168,85,247,0.25)`
- Radius : `1.5rem`
- Icône dans un container `40x40px`, fond violet à 12%

### 4.3 ReassuranceCard

```tsx
interface ReassuranceCardProps {
  title: string;
  description: string;
}
```

**Spécifications :**
- Fond : `--surface-2`
- Bordure et radius identiques à AddOnCard
- Titre : `1.1rem`, weight `600`

### 4.4 CTABanner

- Fond : dégradé diagonal violet faible
- Bordure : `1px solid rgba(168,85,247,0.20)`
- Radius : `2rem`
- Texte centré
- CTA primaire large

---

## 5. Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `< 1024px` | Cartes pricing en colonne unique (stack), featured prend toute la largeur |
| `>= 1024px` | 3 colonnes, carte featured centrée et légèrement agrandie |
| `< 768px` | Add-ons en 1 colonne, réassurance en 1 colonne |
| `>= 768px` | Add-ons en 2-4 colonnes, réassurance en 2 colonnes |

**Mobile-first approach :** le CSS de la maquette est conçu mobile-first avec des media queries `min-width`.

---

## 6. Données sources

Les contenus sont déjà disponibles dans `src/lib/content.ts` :

```ts
import { servicePackages, serviceAddons, aboutValues } from "@/lib/content";
```

**Mapping :**
- `servicePackages[0]` → L'Essentiel
- `servicePackages[1]` → Le Confort (featured)
- `servicePackages[2]` → Le Booster
- `serviceAddons` → 4 add-ons
- `aboutValues` → 4 items de réassurance

**Note :** le prix affiché sur la carte doit être décomposé en `price` (gros) + `priceNote` (sous-ligne). Les données brutes dans `content.ts` contiennent le prix complet (ex: "1 290 € + 249€/mois"). Il faudra parser ou enrichir les données pour la séparation visuelle.

---

## 7. Animations & Interactions (proposées)

| Élément | Animation | Déclencheur |
|---|---|---|
| Cartes pricing | `translateY(-4px)` + ombre | hover |
| Carte featured | `scale(1.03)` + glow permanent | état par défaut |
| Boutons primaires | `background` vers `--accent-strong` | hover |
| Boutons secondaires | `background` vers `white/10` | hover |
| Add-ons | `border-color` vers violet | hover |
| Sections | fade-in + translateY | intersection observer (scroll) |

**Recommandation :** utiliser `framer-motion` (déjà dans le projet) pour les animations d'entrée au scroll.

---

## 8. Fichiers à créer / modifier

### Nouveaux fichiers

```
src/app/devis/page.tsx              # page principale (remplace le placeholder)
src/components/devis/pricing-card.tsx
src/components/devis/addon-card.tsx
src/components/devis/reassurance-card.tsx
src/components/devis/cta-banner.tsx
```

### Fichiers existants à potentiellement modifier

```
src/lib/content.ts                  # enrichir les prix pour split price / priceNote
src/app/globals.css                 # ajouter des utilitaires si nécessaire
```

---

## 9. Décisions de design

1. **Carte du milieu en avant** : la formule "Confort" est positionnée au centre et visuellement mise en avant (glow, badge, CTA primaire) car elle représente le meilleur rapport valeur/sérénité pour la cible (studio de sport/mouvement).

2. **Prix en gros** : le montant principal est affiché en `2.2rem` pour un scan immédiat. La périodicité (/mois) est en sous-titre pour ne pas polluer la lecture.

3. **Section réassurance séparée** : placée après les prix pour adresser les objections une fois que l'utilisateur a compris l'offre. Le fond `--surface-2` crée une séparation visuelle sans briser la cohérence.

4. **CTA répété** : un CTA par carte + un CTA banner en fin de page. L'utilisateur ne doit jamais chercher comment passer à l'action.

5. **Pas de tableau comparatif** : les 3 cartes avec listes de features suffisent. Un tableau serait trop dense pour mobile et alourdirait la page.

6. **Add-ons visuellement distincts** : les 4 services additionnels utilisent un format plus compact (pas de CTA, pas de prix affiché) pour ne pas concurrencer les offres principales.

---

## 10. Accessibilité

- Contraste texte/fond vérifié : `--text` (#f5f5f5) sur `--surface` (#111111) = ratio ~18:1 ✓
- Contraste `--muted` (#b8b8c2) sur `--surface` = ratio ~10:1 ✓
- Boutons avec `focus-visible:ring-2` sur `--accent` (déjà dans le DS)
- Structure heading : h1 → h2 → h3 logique
- Pas d'info transmise uniquement par la couleur (badge "Recommandé" + texte)

---

## 11. Checklist de validation (k0da gate)

- [ ] La maquette rend bien sur mobile (320px+)
- [ ] La maquette rend bien sur desktop (1440px+)
- [ ] La carte "Confort" est visuellement dominante
- [ ] Les prix sont lisibles en 3 secondes
- [ ] Les CTA sont visibles sans scroll excessif
- [ ] Le style est cohérent avec les pages existantes (services, about)
- [ ] Les couleurs et typos respectent le design system Grey
