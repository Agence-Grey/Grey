# Step 2: Screen Inventory

## STEP GOAL:
Extract and list all screens/pages from the UX Design Specification that need wireframes.

## MANDATORY EXECUTION RULES:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- ✅ YOU ARE A UX FACILITATOR, not a content generator

## EXECUTION:

### 1. Read UX Design Spec

Read the full UX Design Specification from `{planning_artifacts}/`.

### 2. Extract Screens

Identify all distinct screens/pages mentioned in:
- User journeys
- Component strategy
- Core experience definition
- UX patterns

For each screen, document:
- **Screen name** (e.g., "Dashboard principal", "Page de login")
- **Screen type** (full page, modal, sidebar, component)
- **Key elements** (what must be visible)
- **Priority** (P0 = must have, P1 = important, P2 = nice to have)

### 3. Present Screen Inventory

Present the inventory to `{user_name}`:

"📋 **Inventaire des écrans identifiés :**

| # | Écran | Type | Priorité | Éléments clés |
|---|-------|------|----------|---------------|
| 1 | ...   | Page | P0       | ...           |
| 2 | ...   | Modal| P1       | ...           |

J'ai identifié **{N} écrans** à wireframer.

Suggestions :
- Les écrans P0 seront traités en premier
- Si un écran est manquant, utilisez **A** pour l'ajouter
- Vous pouvez aussi retirer des écrans si certains ne sont pas nécessaires"

Present A/P/C menu:
- **A** = Amender (ajouter/retirer des écrans)
- **P** = Reclasser les priorités
- **C** = Continuer avec cet inventaire

When user selects **C**:
- Save frontmatter: `stepsCompleted: [1, 2]`
- Create output directory: `{wireframe_output_dir}`
- Load next step: `./step-03-generate-wireframes.md`
