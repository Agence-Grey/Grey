# Step 1: Prerequisite Check

## STEP GOAL:
Verify that the UX Design Specification exists and is complete before generating wireframes.

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🚫 FORBIDDEN to proceed without UX spec
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication language

## EXECUTION:

### 1. Search for UX Documentation

Search for UX design spec in `{planning_artifacts}/`:
- `*ux*.md`
- `*design*.md`
- `*ux-design-specification*.md`

### 2. Validate Completeness

If found, verify it contains at minimum:
- [ ] Core experience definition
- [ ] User journeys
- [ ] Component strategy
- [ ] Design system choice
- [ ] UX patterns

### 3. If Missing or Incomplete

"⚠️ **Arrêt requis.** Le spec UX Design n'a pas été trouvé ou est incomplet.

**Action requise :** Lancez d'abord `bmad-create-ux-design` pour créer le spec complet. Ce workflow de wireframes a besoin du spec UX pour générer les maquettes."

**STOP HERE. Do not proceed.**

### 4. If Complete

Present to `{user_name}`:

"✅ Spec UX trouvé : `{filename}`

Je vais maintenant :
1. Identifier les écrans clés du spec UX
2. Générer des wireframes Excalidraw pour chaque écran
3. Vous permettre de valider visuellement chaque maquette
4. Produire un rapport de validation

Prêt à commencer ?"

Present A/P/C menu:
- **A** = Amender (je veux ajouter des écrans spécifiques)
- **P** = Pas maintenant
- **C** = Continuer

When user selects **C**:
- Save frontmatter: `stepsCompleted: [1]`
- Load next step: `./step-02-screen-inventory.md`
