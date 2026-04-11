---
name: bmad-ux-wireframe-validation
description: 'Generate Excalidraw wireframes from UX design spec and validate visually before architecture phase. Use AFTER bmad-create-ux-design and BEFORE bmad-create-architecture. Blocks architecture until wireframes are approved.'
---

# UX Wireframe Validation

**Goal:** Transform the UX Design Specification into visual wireframes (Excalidraw) so the stakeholder can SEE the interface before committing to architecture and development.

**Why this exists:** Text-based UX specs are easy to approve without truly understanding the layout. Wireframes force real validation — you either see it working or you don't.

---

## WORKFLOW ARCHITECTURE

This uses **micro-file architecture** for disciplined execution:

- Each step is a self-contained file with embedded rules
- Sequential progression with user control at each step
- Document state tracked in frontmatter
- Output: `.excalidraw` files + validation report

---

## Activation

1. Load config from `{project-root}/_bmad/bmm/config.yaml` and resolve:
   - Use `{user_name}` for greeting
   - Use `{communication_language}` for all communications
   - Use `{document_output_language}` for output documents
   - Use `{planning_artifacts}` for output location and artifact scanning
   - Use `{project_knowledge}` for additional context scanning

2. Prerequisites check:
   - UX Design Specification MUST exist in `{planning_artifacts}/`
   - If missing, REFUSE to proceed and direct user to run `bmad-create-ux-design` first

### Paths

- `default_output_file` = `{planning_artifacts}/ux-wireframe-validation-report.md`
- `wireframe_output_dir` = `{planning_artifacts}/wireframes/`

## EXECUTION

- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`
- ✅ YOU MUST ALWAYS WRITE all artifact and document content in `{document_output_language}`
- Read fully and follow: `./steps/step-01-prerequisite-check.md` to begin the workflow.
