# Impeccable × BMAD Integration

## Overview
[Impeccable](https://github.com/pbakaus/impeccable) est un skill pack qui force les agents IA
à produire du frontend de qualité professionnelle. Intégré au pipeline BMAD de L'Agence Grey.

## Architecture

```
BMAD Pipeline (existant)
├── PRD → UX Spec → Wireframes → Architecture → Epics/Stories
│
├── Phase Développement (nouvelle intégration)
│   ├── Code généré par agent (Codex/Anti-Gravity)
│   ├── /audit impeccable     ← vérification qualité
│   ├── /polish impeccable    ← nettoyage final
│   └── Anti-pattern detector ← pre-commit hook
│
└── Déploiement → Vercel
```

## Skills Installés (17)

### Skill principal
- `impeccable` — Contexte design, craft, teach, extract

### Commandes de vérification
- `impeccable-audit` — Rapport qualité technique (a11y, perf, responsive)
- `impeccable-critique` — Review UX design
- `impeccable-polish` — Passage final avant déploiement

### Commandes de correction
- `impeccable-distill` — Réduire à l'essentiel
- `impeccable-clarify` — Améliorer le copy UX
- `impeccable-optimize` — Performance
- `impeccable-harden` — Error handling, edge cases
- `impeccable-layout` — Fix layout/espacement
- `impeccable-typeset` — Fix typo

### Commandes créatives
- `impeccable-animate` — Ajouter du mouvement
- `impeccable-colorize` — Couleur stratégique
- `impeccable-bolder` — Amplifier un design ennuyeux
- `impeccable-quieter` — Calmer un design trop chargé
- `impeccable-delight` — Moments de joie
- `impeccable-adapt` — Adaptation responsive
- `impeccable-overdrive` — Effets techniques extraordinaires

## Référence Design (7 domaines)
Disponibles dans `.agent/skills/impeccable/reference/` :
- Typography (Poppins/Nunito, échelles modulaires)
- Color & Contrast (OKLCH, dark mode, accessibilité)
- Spatial Design (espacement, grilles, hiérarchie)
- Motion Design (courbes d'easing, staggering)
- Interaction Design (formulaires, focus states)
- Responsive Design (mobile-first, container queries)
- UX Writing (labels, messages d'erreur)

## Anti-Patterns Détectés (automatique)
Le CLI `npx impeccable detect` détecte 24 types de problèmes :
- Pure black/white backgrounds
- Gray text on colored backgrounds
- Bounce/elastic easing
- Purple gradients excessifs
- Cards-in-cards nesting
- Small touch targets
- Skipped heading levels
- Cramped padding
- Line length trop long

## Workflow BMAD + Impeccable

### 1. Avant le développement
```
/impeccable teach
→ Récupère le contexte design du projet
→ Sauvegarde dans .impeccable.md (déjà fait)
```

### 2. Pendant le développement
```
/craft [page/component]
→ Crée avec le contexte design Grey
→ Respecte les anti-patterns
→ Utilise Poppins/Nunito, pas Inter
→ Dark #1a1a1a, pas #000000
```

### 3. Avant le commit (automatique)
```
git commit → pre-commit hook
→ npx impeccable detect src/
→ Affiche les warnings (ne bloque pas)
```

### 4. Avant le déploiement
```
/audit [page]
→ Rapport qualité complet

/polish [page]
→ Nettoyage final + alignment design system

npm run build
→ Build + déploiement Vercel
```

## Scripts NPM Disponibles

```bash
npm run design:audit          # Scan complet avec détails
npm run design:audit:json     # Output JSON pour CI/CD
npm run design:audit:fast     # Scan rapide (regex only)
npm run precommit             # ESLint + design audit
```

## Fichier de Contexte
`.impeccable.md` à la racine du projet contient :
- Public cible
- Personnalité de marque
- Design system (couleurs, typo, espacement)
- Cas d'usage
- Anti-patterns spécifiques au projet

## Sources
- GitHub: https://github.com/pbakaus/impeccable
- Site: https://impeccable.style
- CLI: `npx impeccable detect [path]`
- License: Apache 2.0
