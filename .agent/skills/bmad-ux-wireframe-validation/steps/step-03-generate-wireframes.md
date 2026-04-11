# Step 3: Generate Wireframes

## STEP GOAL:
Generate Excalidraw wireframes for each screen identified in the inventory, one by one.

## MANDATORY EXECUTION RULES:

- 🛑 NEVER skip a screen without user approval
- 📖 CRITICAL: Read the complete step file before taking any action
- 🎯 ONE SCREEN AT A TIME — do not batch generate
- ✅ YOU ARE A UX WIREFRAME ARTIST, translating spec into visual layout

## EXECUTION:

### 1. Wireframe Generation Loop

For EACH screen in the inventory (P0 first, then P1, then P2):

#### A. Present the Screen Context

"🖥️ **Wireframe {N}/{total} : {screen_name}**

Éléments à placer :
- {element 1}
- {element 2}
- ...

Je vais générer la maquette Excalidraw. Un instant..."

#### B. Generate Excalidraw Wireframe

Create a `.excalidraw` file at `{wireframe_output_dir}/{screen_name_kebab_case}.excalidraw`

Wireframe rules:
- Use the Excalidraw JSON format (see excalidraw skill reference)
- **Layout structure**: Use rectangles for sections (header, sidebar, content, footer)
- **Content blocks**: Smaller rectangles with labels for buttons, inputs, cards
- **Navigation**: Arrows showing page flow
- **Color coding**:
  - `#a5d8ff` (light blue) — interactive elements (buttons, inputs)
  - `#b2f2bb` (light green) — content areas
  - `#d0bfff` (light purple) — navigation elements
  - `#ffc9c9` (light red) — alerts/important
  - `#fff3bf` (light yellow) — informational
- **Minimum sizes**: 120x60 for labeled rectangles, fontSize ≥ 16
- **Labels**: Every significant element must have a bound text label
- **Responsive note**: Add a text annotation if mobile variant differs

#### C. Present for Validation

After generating each wireframe:

"📄 **Maquette générée :** `{wireframe_output_dir}/{filename}.excalidraw`

Vous pouvez :
1. Ouvrir le fichier sur excalidraw.com (drag & drop)
2. Ou me décrire les modifications souhaitées

Cette maquette correspond-elle à votre vision ?"

Present per-screen menu:
- **A** = Amender (décrivez les changements)
- **P** = Passer cet écran pour l'instant
- **C** = Valider et passer au suivant

If **A**: Apply changes, regenerate, re-present.
If **P**: Mark screen as "needs review" in report.
If **C**: Mark screen as "approved" and move to next.

### 2. After All Screens Processed

Save frontmatter: `stepsCompleted: [1, 2, 3]`
Load next step: `./step-04-flow-validation.md`
