# Step 6: Final Validation Report

## STEP GOAL:
Produce a final validation report that gates the transition to Architecture phase.

## MANDATORY EXECUTION RULES:

- 🛑 NEVER skip this step
- 📖 CRITICAL: Read the complete step file before taking any action
- ✅ YOU ARE PRODUCING THE GATE DOCUMENT for architecture phase

## EXECUTION:

### 1. Compile Validation Report

Generate `{planning_artifacts}/ux-wireframe-validation-report.md`:

```markdown
# UX Wireframe Validation Report

**Project:** {project_name}
**Date:** {date}
**Author:** {user_name}
**Status:** APPROVED / CONDITIONAL / BLOCKED

---

## Wireframes Generated

| # | Écran | Fichier | Statut |
|---|-------|---------|--------|
| 1 | {name} | {filename}.excalidraw | ✅ Approuvé |
| 2 | {name} | {filename}.excalidraw | ⚠️ À revoir |
| 3 | {name} | {filename}-mobile.excalidraw | ✅ Approuvé |

**Total wireframes:** {count}
**Approuvés:** {approved}
**À revoir:** {needs_review}

## User Flows Validated

| Parcours | Écrans impliqués | Statut |
|----------|-----------------|--------|
| {flow_name} | {screens} | ✅/⚠️/❌ |

## Responsive Coverage

- Desktop: {count} wireframes
- Mobile: {count} wireframes
- Manquants: {list or "None"}

## Accessibility Notes

{summary of accessibility findings}

## Blockers for Architecture Phase

{list any blockers — if empty, state "No blockers"}

## Recommendation

**[APPROVED]** — Tous les wireframes sont validés. L'architecture peut commencer.
**[CONDITIONAL]** — Wireframes validés avec réserves mineures. Architecture peut commencer en parallèle des corrections.
**[BLOCKED]** — Des wireframes doivent être retravaillés avant de lancer l'architecture.

---

**Validation sign-off:** {user_name} — {date}
```

### 2. Present Final Decision

"📋 **Rapport de validation généré :**

{path-to-report}

**Statut : {APPROVED/CONDITIONAL/BLOCKED}**

{If APPROVED:}
Félicitations ! Tous les wireframes sont validés. Vous pouvez maintenant lancer `bmad-create-architecture` en toute confiance.

{If CONDITIONAL:}
Les wireframes sont globalement validés avec quelques réserves mineures. L'architecture peut démarrer. Corrections à traiter en parallèle.

{If BLOCKED:}
Des écrans nécessitent un retravail. Corrigez les wireframes marqués avant de lancer l'architecture."

### 3. Complete Workflow

When user confirms:
- Save frontmatter: `stepsCompleted: [1, 2, 3, 4, 5, 6]`
- Mark workflow as complete

"✅ **Workflow Wireframe Validation terminé.**

Prochaine étape recommandée : `bmad-create-architecture` (Winston prend le relais)."
