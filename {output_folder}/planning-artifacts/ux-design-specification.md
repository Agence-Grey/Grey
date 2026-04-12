---
stepsCompleted: [step-01, step-02, step-03, step-04, step-05, step-06, step-07, step-08, step-09, step-10, step-11, step-12, step-13, step-14]
inputDocuments: [{output_folder}/planning-artifacts/prd.md, docs/BRIEF.md]
workflowType: 'ux-design'
project_name: "L'Agence Grey — Site Web Institutionnel"
user_name: "k0da"
date: "2026-04-11"
---

# UX Design Specification — L'Agence Grey

**Author:** k0da
**Date:** 2026-04-11
**Version:** 1.0
**Input:** PRD v1.0

---

## 1. Design System

### 1.1 Couleurs

#### Palette Principale

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#7F3FBF` | CTA buttons, liens actifs, accents principaux |
| `primary-hover` | `#6B2FA6` | État hover des boutons primary |
| `primary-light` | `#9B5FCF` | Surbrillances, badges, borders focus |
| `secondary` | `#8a2be2` | Accent lumineux, hover states, éléments dynamiques |
| `secondary-glow` | `#8a2be220` | Glow effects, box-shadows violets |

#### Neutres

| Token | Hex | Usage |
|---|---|---|
| `dark` | `#1a1a1a` | Fond sombre (hero, sections alternées) |
| `charcoal` | `#333333` | Texte principal, footer |
| `gray-700` | `#4a4a4a` | Texte secondaire |
| `gray-500` | `#717171` | Texte tertiaire, placeholder |
| `gray-300` | `#b0b0b0` | Bordures, dividers |
| `gray-100` | `#f5f5f5` | Fond clair, sections alternées |
| `white` | `#ffffff` | Fond principal, cartes |

#### Sémantiques

| Token | Hex | Usage |
|---|---|---|
| `success` | `#22c55e` | Confirmation, validation |
| `error` | `#ef4444` | Erreurs, champs invalides |
| `warning` | `#f59e0b` | Avertissements |
| `info` | `#3b82f6` | Informations |

### 1.2 Typographie

#### Police principale : **Poppins**

Poppins est géométrique, moderne, lisible — parfait pour une agence qui veut paraître à la fois professionnelle et accessible.

| Style | Font | Weight | Size | Line-height | Usage |
|---|---|---|---|---|---|
| `display-xl` | Poppins | 700 | 72px | 1.1 | Hero headline desktop |
| `display-lg` | Poppins | 700 | 56px | 1.15 | Hero headline tablet/mobile |
| `h1` | Poppins | 700 | 40px | 1.2 | Titres de page |
| `h2` | Poppins | 600 | 32px | 1.3 | Titres de section |
| `h3` | Poppins | 600 | 24px | 1.4 | Sous-titres |
| `h4` | Poppins | 600 | 20px | 1.4 | Titres de carte |
| `body-lg` | Poppins | 400 | 18px | 1.6 | Texte introductif |
| `body` | Poppins | 400 | 16px | 1.6 | Texte courant |
| `body-sm` | Poppins | 400 | 14px | 1.5 | Texte secondaire, captions |
| `button` | Poppins | 600 | 16px | 1 | Boutons |
| `label` | Poppins | 500 | 14px | 1 | Labels de formulaire |

#### Police secondaire (optionnelle) : **Montserrat**

Utilisée uniquement pour les éléments de décoration, chiffres clés, ou accents visuels si on veut du contraste avec Poppins.

### 1.3 Espacement

Échelle basée sur 4px :

| Token | Value | Usage |
|---|---|---|
| `space-1` | 4px | Espacement minimal |
| `space-2` | 8px | Padding interne éléments compacts |
| `space-3` | 12px | Gap entre éléments liés |
| `space-4` | 16px | Padding standard |
| `space-5` | 20px | Gap entre sections |
| `space-6` | 24px | Padding cartes |
| `space-8` | 32px | Margin entre blocs |
| `space-10` | 40px | Espacement sections mobile |
| `space-16` | 64px | Espacement sections desktop |
| `space-24` | 96px | Espacement hero/footer |

### 1.4 Bordures & Ombres

| Token | Value | Usage |
|---|---|---|
| `radius-sm` | 6px | Petits éléments, badges |
| `radius-md` | 12px | Boutons, inputs |
| `radius-lg` | 16px | Cartes |
| `radius-xl` | 24px | Sections arrondies |
| `radius-full` | 9999px | Pills, avatars |
| `shadow-sm` | `0 1px 3px rgba(0,0,0,0.08)` | Éléments plats |
| `shadow-md` | `0 4px 12px rgba(0,0,0,0.1)` | Cartes au repos |
| `shadow-lg` | `0 8px 30px rgba(0,0,0,0.12)` | Cartes au hover |
| `shadow-glow` | `0 0 20px rgba(127,63,191,0.3)` | Boutons CTA, focus |
| `shadow-glow-strong` | `0 0 40px rgba(127,63,191,0.4)` | Hero elements |

---

## 2. Hero Animé — Spécification Technique

### 2.1 Concept

"L'ordinateur sur la table" — Un laptop posé sur une surface sombre. Une lumière violette intense s'échappe de l'écran. Le visiteur est "aspiré" à travers l'écran dans l'univers du site.

### 2.2 Déroulement de l'animation

```
[0.0s]  Écran noir → fade-in du laptop posé sur une table
[0.5s]  La lumière violette apparaît dans l'écran (pulsation douce)
[1.0s]  Le texte "Grey : le web qui rassure" apparaît (typewriter ou fade-in par mot)
[1.5s]  La lumière s'intensifie, des particules s'en échappent
[2.0s]  Scroll détecté → animation d'aspiration :
         - La caméra "plonge" dans l'écran
         - Effet de tunnel / vortex violet
         - Transition vers le contenu du site
[2.5s]  Le hero text est pleinement visible :
         - H1 : "Votre studio mérite un site qui vous ressemble"
         - Sous-titre : "Sites web clé en main pour studios de sport et bien-être"
         - CTA : "Demander votre devis en ligne →"
```

### 2.3 Options techniques

| Approach | Complexité | Performance | Résultat |
|---|---|---|---|
| **A. Video background + overlay** | Faible | Bon (mobile: image statique) | Très bon. Vidéo 15s en boucle, CTA par-dessus |
| **B. Lottie + GSAP scroll** | Moyenne | Bon | Excellent. Animation vectorielle fluide |
| **C. Three.js / WebGL** | Élevée | Variable (GPU) | Spectaculaire mais risque perf mobile |
| **D. CSS + Framer Motion** | Moyenne | Très bon | Bon. Particules CSS + scroll-triggered |

**Recommandation : Option B (Lottie + GSAP)**
- Crée l'animation dans After Effects → export Lottie (JSON)
- GSAP ScrollTrigger pour le scroll-based animation
- Fallback : image statique sur mobile
- Taille : ~200-400KB (vs video 5-15MB)

### 2.4 Fallback mobile

Sur mobile (< 768px) :
- Pas d'animation Lottie (performance)
- Image statique du laptop avec la lumière violette
- Le texte apparaît directement
- CTA immédiatement visible

### 2.5 Scroll behavior

```
Section Hero (100vh)
├── [Sticky] Laptop + lumière (se transforme en fond)
├── [Scroll] Le texte descend légèrement (parallax 0.3)
├── [Scroll] Le CTA reste fixe jusqu'à 50% de scroll
└── [Transition] Fond violet → fond blanc (dissolve)
    ↓
Section Services résumée
```

---

## 3. Wireframes — Structure des Pages

### 3.1 Home

```
┌─────────────────────────────────────────────────┐
│  [AG] Logo    Services  About  Portfolio  Contact  [CTA: Devis]  │  ← Header sticky
├─────────────────────────────────────────────────┤
│                                                 │
│              ┌─────────────────┐                │
│              │  💻 LAPTOP      │                │  ← Hero (100vh)
│              │  💜 Lumière      │                │
│              └─────────────────┘                │
│                                                 │
│    Votre studio mérite un site                  │
│    qui vous ressemble                           │
│                                                 │
│    Sites web clé en main pour studios           │
│    de sport et bien-être                        │
│                                                 │
│    [ Demander votre devis en ligne → ]          │  ← CTA principal
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│   NOS SOLUTIONS                                 │  ← H2
│                                                 │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│   │ Starter  │ │   Pro    │ │ Premium  │       │  ← 3 cartes
│   │ À partir │ │ À partir │ │ À partir │       │
│   │ de 1500€ │ │ de 3000€ │ │ de 5000€ │       │
│   │ [CTA]    │ │ [CTA]    │ │ [CTA]    │       │
│   └──────────┘ └──────────┘ └──────────┘       │
│                                                 │
│   [ Voir tous nos services → ]                  │  ← Lien vers Services
│                                                 │
├─────────────────────────────────────────────────┤
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │  ← Fond sombre #1a1a1a
│                                                 │
│   COMMENT ON TRAVAILLE                          │  ← H2 (texte blanc)
│                                                 │
│   ① Brief    →  ② Design  →  ③ Développement  │  ← Timeline horizontale
│                  →  ④ Mise en ligne             │
│                                                 │
│   "On s'occupe de tout. De A à Z."             │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│   NOS RÉALISATIONS                              │  ← H2
│                                                 │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│   │ Maquette │ │ Maquette │ │ Maquette │       │  ← Grid 3 colonnes
│   │ Studio 1 │ │ Studio 2 │ │ Studio 3 │       │
│   └──────────┘ └──────────┘ └──────────┘       │
│                                                 │
│   [ Voir le portfolio → ]                       │
│                                                 │
├─────────────────────────────────────────────────┤
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │  ← Fond violet #7F3FBF
│                                                 │
│   Prêt à lancer votre site ?                   │  ← H2 (texte blanc)
│                                                 │
│   [ Demander votre devis en ligne → ]          │  ← CTA final (blanc)
│                                                 │
├─────────────────────────────────────────────────┤
│  Footer                                         │
│  [AG] Grey : le web qui rassure                │
│  Services | About | Portfolio | Contact        │
│  Mentions légales | CGV | Confidentialité      │
│  © 2026 L'Agence Grey                          │
└─────────────────────────────────────────────────┘
```

### 3.2 About

```
┌─────────────────────────────────────────────────┐
│  Header (sticky)                                │
├─────────────────────────────────────────────────┤
│                                                 │
│   NOTRE HISTOIRE                                │  ← H1
│                                                 │
│   "Le web qui rassure" n'est pas juste         │
│   un slogan. C'est notre promesse.             │  ← Intro
│                                                 │
├─────────────────────────────────────────────────┤
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                 │
│   ┌──────────┐                                  │
│   │ Photo    │  Ophélie                         │
│   │ Ophélie  │  Co-fondatrice. [Bio courte]     │
│   └──────────┘                                  │
│                                                 │
│   ┌──────────┐                                  │
│   │ Photo    │  k0da                            │
│   │ k0da     │  Co-fondateur. [Bio courte]      │
│   └──────────┘                                  │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│   POURQUOI "LE WEB QUI RASSURE" ?              │
│                                                 │
│   [Section storytelling - le problème           │
│    que Grey résout, le pourquoi]                │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│   NOS VALEURS                                   │
│                                                 │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│   │Transparence│ Proximité │Excellence │       │
│   │           │          │          │       │
│   └──────────┘ └──────────┘ └──────────┘       │
│                                                 │
├─────────────────────────────────────────────────┤
│  CTA Section (violet)                           │
│  Rejoignez l'aventure → [Contact]              │
├─────────────────────────────────────────────────┤
│  Footer                                         │
└─────────────────────────────────────────────────┘
```

### 3.3 Services

```
┌─────────────────────────────────────────────────┐
│  Header                                         │
├─────────────────────────────────────────────────┤
│                                                 │
│   NOS SOLUTIONS                                 │  ← H1
│                                                 │
│   Sites web clé en main pour studios            │
│   de sport et bien-être.                        │
│   Du site vitrine à l'agent IA.                │
│                                                 │
├─────────────────────────────────────────────────┤
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                 │
│   ┌─────────────────────────────────────────┐   │
│   │ STARTER                  À partir de 1500€ │
│   │                                          │   │
│   │ ✓ Site vitrine 1 page                    │   │
│   │ ✓ Google My Business                     │   │
│   │ ✓ Formulaire de contact                  │   │
│   │ ✓ Responsive mobile                      │   │
│   │ ✓ Hébergement + maintenance              │   │
│   │   49-79€/mois                            │   │
│   │                                          │   │
│   │ [ Demander un devis → ]                  │   │
│   └─────────────────────────────────────────┘   │
│                                                 │
│   ┌─────────────────────────────────────────┐   │
│   │ PRO ★ POPULAIRE         À partir de 3000€  │
│   │                                          │   │
│   │ ✓ Site multi-pages                       │   │
│   │ ✓ Réservation en ligne                   │   │
│   │ ✓ Paiement intégré                       │   │
│   │ ✓ SEO optimisé                           │   │
│   │ ✓ Google My Business                     │   │
│   │ ✓ Hébergement + maintenance + support    │   │
│   │   99-149€/mois                           │   │
│   │                                          │   │
│   │ [ Demander un devis → ]                  │   │
│   └─────────────────────────────────────────┘   │
│                                                 │
│   ┌─────────────────────────────────────────┐   │
│   │ PREMIUM                À partir de 5000€    │
│   │                                          │   │
│   │ ✓ Tout le Pro +                          │   │
│   │ ✓ Agent IA de réservation                │   │
│   │ ✓ Automatisation (relances, rappels)     │   │
│   │ ✓ Contenu généré (posts, descriptions)   │   │
│   │ ✓ Analytics avancé                       │   │
│   │ ✓ Support prioritaire                    │   │
│   │   199-299€/mois                          │   │
│   │                                          │   │
│   │ [ Demander un devis → ]                  │   │
│   └─────────────────────────────────────────┘   │
│                                                 │
├─────────────────────────────────────────────────┤
│  TABLEAU COMPARATIF                             │
│  (Desktop: tableau complet / Mobile: accordéon) │
│                                                 │
│  Fonctionnalité    │ Starter │ Pro  │ Premium  │
│  ──────────────────┼─────────┼──────┼──────────│
│  Site web          │ 1 page  │ Multi│ Multi    │
│  Réservation       │ ✗       │ ✓    │ ✓ + IA   │
│  Paiement          │ ✗       │ ✓    │ ✓        │
│  SEO               │ Basique │ ✓    │ ✓ + blog │
│  Maintenance       │ ✓       │ ✓    │ ✓ prior. │
│  Agent IA          │ ✗       │ ✗    │ ✓        │
│                                                 │
├─────────────────────────────────────────────────┤
│  FAQ Services                                   │
│  "Combien de temps..." / "Puis-je upgrade..."  │
├─────────────────────────────────────────────────┤
│  CTA Section (violet)                           │
├─────────────────────────────────────────────────┤
│  Footer                                         │
└─────────────────────────────────────────────────┘
```

### 3.4 Portfolio

```
┌─────────────────────────────────────────────────┐
│  Header                                         │
├─────────────────────────────────────────────────┤
│                                                 │
│   NOS RÉALISATIONS                              │  ← H1
│                                                 │
│   Des studios qui nous ont fait confiance.      │
│                                                 │
│   [Tous] [Yoga] [Pole Dance] [Danse] [Autre]   │  ← Filtres (Phase 2)
│                                                 │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│   │          │ │          │ │          │       │
│   │ Maquette │ │ Maquette │ │ Maquette │       │  ← Grid responsive
│   │ Studio A │ │ Studio B │ │ Studio C │       │
│   │          │ │          │ │          │       │
│   │ Nom      │ │ Nom      │ │ Nom      │       │
│   │ Type     │ │ Type     │ │ Type     │       │
│   │ [Voir →] │ │ [Voir →] │ │ [Voir →] │       │
│   └──────────┘ └──────────┘ └──────────┘       │
│                                                 │
│   Phase 1 : placeholders avec maquettes         │
│   Phase 2 : vraies réalisations + lightbox      │
│                                                 │
├─────────────────────────────────────────────────┤
│  CTA Section (violet)                           │
│  "Votre studio pourrait être ici →"            │
├─────────────────────────────────────────────────┤
│  Footer                                         │
└─────────────────────────────────────────────────┘
```

### 3.5 Contact

```
┌─────────────────────────────────────────────────┐
│  Header                                         │
├─────────────────────────────────────────────────┤
│                                                 │
│   CONTACTEZ-NOUS                                │  ← H1
│                                                 │
│   Une question ? Un projet ? Parlons-en.       │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│   ┌───────────────────┐  ┌───────────────────┐  │
│   │ Formulaire        │  │ Infos             │  │
│   │                   │  │                   │  │
│   │ Nom *             │  │ 📧 bonjour@       │  │
│   │ Email *           │  │    grey-agence.fr  │  │
│   │ Type de studio    │  │                   │  │
│   │ [Dropdown]        │  │ 📍 Côte d'Azur    │  │
│   │ Message *         │  │    Sud de la France│  │
│   │ [____________]    │  │                   │  │
│   │ [____________]    │  │ [Instagram]       │  │
│   │ [____________]    │  │ [LinkedIn]        │  │
│   │                   │  │                   │  │
│   │ [ Envoyer → ]     │  │                   │  │
│   └───────────────────┘  └───────────────────┘  │
│                                                 │
├─────────────────────────────────────────────────┤
│  Footer                                         │
└─────────────────────────────────────────────────┘
```

---

## 4. Système de Composants (shadcn/ui)

### 4.1 Boutons

| Variant | Background | Text | Border | Usage |
|---|---|---|---|---|
| `primary` | `#7F3FBF` | `white` | none | CTA principal |
| `primary-hover` | `#6B2FA6` | `white` | none | Hover state |
| `secondary` | `white` | `#7F3FBF` | `2px #7F3FBF` | CTA secondaire |
| `ghost` | transparent | `#7F3FBF` | none | Liens inline |
| `dark` | `#333333` | `white` | none | Sections sombres |

Tous les boutons : `radius-md` (12px), padding `16px 32px`, `font-weight: 600`, transition `200ms ease`.

### 4.2 Cartes de Service

```
┌─────────────────────────────┐
│  shadow-md → shadow-lg      │  ← hover: shadow + translateY(-4px)
│  border-radius: 16px        │
│  padding: 24px              │
│                             │
│  Badge "Populaire" (Pro)    │  ← violet bg, white text
│  Titre (h4)                 │
│  Prix (display)             │
│  ──────────────────         │
│  ✓ Feature 1                │
│  ✓ Feature 2                │
│  ✓ Feature 3                │
│  ──────────────────         │
│  [CTA Button]               │
│                             │
└─────────────────────────────┘
```

### 4.3 Champs de Formulaire

```
┌─────────────────────────────┐
│  Label (14px, weight 500)   │
│  ┌───────────────────────┐  │
│  │ Placeholder           │  │  ← border: 1px #b0b0b0
│  └───────────────────────┘  │  ← focus: border #7F3FBF + shadow glow
│  Error message (rouge)      │
└─────────────────────────────┘
```

### 4.4 Header / Navigation

```
Desktop:
┌─────────────────────────────────────────────────┐
│  [AG Logo]    Services  About  Portfolio  Contact  [Devis →]  │
│  background: white/transparent (hero)          │
│  height: 72px                                   │
│  position: sticky, top: 0, z-index: 50         │
│  shadow on scroll: shadow-sm                    │
└─────────────────────────────────────────────────┘

Mobile:
┌──────────────────────────┐
│  [AG Logo]     [☰ Menu]  │
│  background: white        │
│  height: 64px             │
└──────────────────────────┘
│  ☰ ouvre drawer right     │
│  Services                  │
│  About                     │
│  Portfolio                 │
│  Contact                   │
│  [ Devis → ]              │
└───────────────────────────┘
```

### 4.5 Footer

```
┌─────────────────────────────────────────────────┐
│  background: #1a1a1a, text: white/gray-300      │
│                                                 │
│  [AG] Grey : le web qui rassure                │
│                                                 │
│  Navigation        Légal           Réseaux      │
│  Services          Mentions légales [Instagram] │
│  About             CGV              [LinkedIn]  │
│  Portfolio         Confidentialité              │
│  Contact           Cookies                      │
│                                                 │
│  © 2026 L'Agence Grey. Tous droits réservés.   │
└─────────────────────────────────────────────────┘
```

---

## 5. Interactions & Micro-animations

### 5.1 Global

| Élément | Animation | Trigger | Duration |
|---|---|---|---|
| Boutons | Scale(0.98) + shadow glow | Hover | 200ms |
| Cartes | TranslateY(-4px) + shadow-lg | Hover | 300ms |
| Liens | Color shift + underline slide-in | Hover | 200ms |
| Images | Scale(1.05) dans container overflow:hidden | Hover | 400ms |

### 5.2 Scroll-triggered

| Section | Animation | Library |
|---|---|---|
| Hero | Lottie + ScrollTrigger | GSAP + Lottie |
| Services cards | Fade-up par carte (stagger 100ms) | Framer Motion |
| Timeline "Comment on travaille" | Line draw + steps reveal | GSAP |
| Portfolio | Fade-in grid (stagger 150ms) | Framer Motion |
| CTA sections | Fade-in + slide-up | Framer Motion |
| Counter (chiffres) | Count-up animation | Framer Motion (useInView) |

### 5.3 Hero spécifiquement

- Lumière laptop : pulsation CSS `opacity: 0.6 → 1` sur 2s, infinite
- Particules : 20-30 particules violettes, mouvement brownien lent
- Texte : fade-in par mot (stagger 50ms)
- CTA : après le texte, slide-up + fade-in
- Scroll : le laptop "s'ouvre" / la caméra plonge

---

## 6. Responsive Design

### 6.1 Breakpoints

| Breakpoint | Width | Cols | Layout |
|---|---|---|---|
| `sm` | 640px | 1 | Mobile vertical |
| `md` | 768px | 2 | Tablet |
| `lg` | 1024px | 3 | Desktop |
| `xl` | 1280px | 3 | Large desktop |
| `2xl` | 1536px | 3 | Max width container |

### 6.2 Adaptations mobile

| Desktop | Mobile |
|---|---|
| Header horizontal | Header + hamburger drawer |
| 3 colonnes services | 1 colonne stack |
| Hero animé Lottie | Image statique + texte direct |
| Timeline horizontale | Timeline verticale |
| Tableau comparatif | Accordéon |
| Portfolio grid 3 col | Portfolio grid 1-2 col |
| Formulaire + infos côte à côte | Stack vertical |

### 6.3 Container

- `max-width: 1280px`
- `padding: 0 24px` (mobile) / `0 48px` (desktop)
- `margin: 0 auto`

---

## 7. Accessibilité

### 7.1 Checklist WCAG AA

- [ ] Contraste texte : ratio ≥ 4.5:1 (vérifié pour #7F3FBF sur white et #333333 sur white)
- [ ] Contraste texte large : ratio ≥ 3:1
- [ ] Focus visible sur tous les éléments interactifs (outline: 2px solid #7F3FBF)
- [ ] Skip-to-content link
- [ ] Lang attribute (`lang="fr"`)
- [ ] Alt text sur toutes les images
- [ ] ARIA labels sur icônes seules
- [ ] Form labels associés (htmlFor + id)
- [ ] Error messages liées aux champs (aria-describedby)
- [ ] Navigation 100% clavier
- [ ] Screen reader test (NVDA/VoiceOver)

### 7.2 Focus style

```css
:focus-visible {
  outline: 2px solid #7F3FBF;
  outline-offset: 2px;
  border-radius: 4px;
}
```

---

## 8. Fichiers de Référence

### Sources d'inspiration

- **Hero animé** : sites Awwwards avec scroll-triggered animations
- **Cartes de service** : Stripe, Linear, Vercel pricing pages
- **Timeline** : agences créatives (designstripe, etc.)
- **Glassmorphism** : si on l'utilise pour les cartes portfolio

### Logo

- Fichier source : `/root/.hermes/cache/logo_grey.png`
- Format : PNG, 1221×1163px
- Usage : header (hauteur 40px), footer (hauteur 32px), favicon (carré, AG monogram seulement)

---

## 9. Décisions UX à Valider

| # | Décision | Recommandation | Status |
|---|---|---|---|
| 1 | Hero : Lottie+GSAP vs Video | Lottie+GSAP (meilleure perf) | ⏳ À valider |
| 2 | Poppins vs Montserrat principale | Poppins (plus moderne) | ⏳ À valider |
| 3 | Glassmorphism sur cartes portfolio | Oui (effet premium) | ⏳ À valider |
| 4 | Compteur animé (chiffres clés) | Oui (effet dynamique) | ⏳ À valider |
| 5 | Témoignages en Phase 1 (placeholder) | Oui avec "bientôt disponible" | ⏳ À valider |
| 6 | Dark mode | Non (Phase 2+) | ⏳ À valider |

---

*Document généré par BMAD v6.3.0 — UX Design Specification*
