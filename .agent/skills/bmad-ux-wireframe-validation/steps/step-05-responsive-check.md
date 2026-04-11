# Step 5: Responsive & Accessibility Check

## STEP GOAL:
Verify that wireframes account for responsive layouts and basic accessibility.

## MANDATORY EXECUTION RULES:

- 🛑 NEVER skip this step
- 📖 CRITICAL: Read the complete step file before taking any action
- ✅ YOU ARE A UX VALIDATOR for responsive and accessibility

## EXECUTION:

### 1. Responsive Review

For each wireframe, assess:

"📱 **Responsive : {screen_name}**

Sur mobile (< 768px) :
- Les éléments clés sont-ils toujours visibles ? ✅/❌
- La navigation est-elle adaptée (hamburger menu, bottom nav) ? ✅/❌
- Les zones tactiles sont-elles assez grandes (min 44x44px) ? ✅/❌
- Le contenu est-il lisible sans zoom ? ✅/❌

Sur tablette (768-1024px) :
- Le layout fonctionne-t-il ? ✅/❌
- Y a-t-il des breakpoints définis ? ✅/❌"

If a screen needs a mobile variant, generate it as `{screen_name}-mobile.excalidraw`.

### 2. Accessibility Audit

For each wireframe:

"♿ **Accessibilité : {screen_name}**

- La hiérarchie visuelle est-elle claire (titres, sous-titres) ? ✅/❌
- Les contrastes seraient-ils suffisants (annoter les couleurs) ? ✅/❌
- Y a-t-il des alternatives visuelles pour les éléments colorés ? ✅/❌
- Les formulaires ont-ils des labels ? ✅/❌"

### 3. Present Summary

"📊 **Résumé Responsive & Accessibilité :**

Écrans OK : {count}/{total}
Écrans nécessitant un variant mobile : {list}
Problèmes d'accessibilité : {list}"

Present A/P/C menu:
- **A** = Amender (générer les variants manquants)
- **P** = Passer (on verra plus tard)
- **C** = Continuer

When user selects **C**:
- Save frontmatter: `stepsCompleted: [1, 2, 3, 4, 5]`
- Load next step: `./step-06-final-report.md`
