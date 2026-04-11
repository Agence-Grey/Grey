# Step 4: User Flow Validation

## STEP GOAL:
Verify that the wireframes together form coherent user flows that match the journeys defined in the UX spec.

## MANDATORY EXECUTION RULES:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- ✅ YOU ARE A UX VALIDATOR checking end-to-end flows

## EXECUTION:

### 1. Generate Flow Diagram

Create a navigation flow diagram (`{wireframe_output_dir}/user-flows.excalidraw`) showing:
- Each screen as a node (labeled rectangle)
- Navigation arrows between screens
- Decision points (diamond shapes) where the flow branches
- Entry points (where users start)
- Exit/success points (goals achieved)

Use the UX spec's user journeys as the source of truth.

### 2. Walk Through Each Journey

For each user journey in the UX spec, verify:

"🔄 **Vérification du parcours : {journey_name}**

Étapes :
1. {step 1} → Écran: {screen}
2. {step 2} → Écran: {screen}
3. {step 3} → Écran: {screen}

Questions :
- Tous les écrans existent-ils ? ✅/❌
- La navigation entre eux est-elle logique ? ✅/❌
- Y a-t-il des dead-ends (pages sans sortie) ? ✅/❌
- Les actions utilisateur mènent-elles aux bons écrans ? ✅/❌"

### 3. Flag Issues

Document any issues found:
- **Missing screens**: Journeys reference screens not in wireframe inventory
- **Broken flows**: Navigation doesn't connect properly
- **Dead ends**: Screens with no way to proceed
- **Missing states**: Loading, error, empty states not considered

### 4. Present Flow Report

Present the full flow validation to `{user_name}`:

"📊 **Rapport de validation des parcours :**

{journey_1}: ✅ Complet / ⚠️ Problèmes / ❌ Incomplet
{journey_2}: ✅ / ⚠️ / ❌

Problèmes identifiés :
- {issue 1}
- {issue 2}

Voulez-vous corriger ces problèmes maintenant ou valider quand même ?"

Present A/P/C menu:
- **A** = Amender (corriger les problèmes identifiés)
- **P** = Recommmencer la validation après corrections
- **C** = Continuer malgré les warnings (acceptés)

When user selects **C**:
- Save frontmatter: `stepsCompleted: [1, 2, 3, 4]`
- Load next step: `./step-05-responsive-check.md`
