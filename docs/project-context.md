# L'Agence Grey - Project Context

## Project Overview
- **Name:** L'Agence Grey
- **Type:** Web agency site (Next.js 15, Tailwind CSS, shadcn/ui)
- **Target:** Studios de yoga, pole dance, sport
- **Design:** Dark #1a1a1a, purple accents, Poppins/Nunito fonts

## Design Quality Standards (Impeccable)
**MUST LOAD for all frontend work:**
- Skills: `impeccable`, `impeccable-audit`, `impeccable-polish`
- Context file: `.impeccable.md` (design context, anti-patterns)
- Reference files: `.agent/skills/impeccable/reference/*.md`

### Anti-Patterns (NEVER do these)
- ❌ Pure black (#000000) — use #1a1a1a or OKLCH tinted dark
- ❌ Inter, Roboto, Open Sans fonts — use Poppins (headings) + Nunito (body)
- ❌ Gray text on colored backgrounds
- ❌ Cards nested in cards
- ❌ Bounce/elastic easing
- ❌ Purple gradients everywhere
- ❌ Small touch targets (< 44px)

### Design System
- **Dark base:** #1a1a1a or `oklch(12% 0.01 250)`
- **Purple accent:** Defined in CSS variables
- **Typography:** Poppins (h1-h6), Nunito (body)
- **Spacing:** 4px grid
- **Border radius:** Moderate

## Code Quality Gates
1. **Lint:** `npm run lint` (ESLint)
2. **Design audit:** `npx impeccable detect src/` (pre-commit hook)
3. **Build:** `npm run build` (Next.js)

## Pre-commit Hook
Automatically runs `impeccable detect` on staged frontend files.
Located: `.git/hooks/pre-commit`

## Key Files
- `.impeccable.md` — Design context for Impeccable skills
- `docs/impeccable-integration.md` — Full integration documentation
- `_bmad/_config/skill-manifest.csv` — BMAD skill registry (includes Impeccable)
