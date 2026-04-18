---
name: skills-authoring
description: "Guidelines for creating and maintaining project skills. Use when: designing new skills, updating existing skills, establishing skill standards, evaluating skill quality, organizing skill subfiles, or adapting copied skill content to the repo's actual stack."
---

# Skills Authoring

## Purpose

Ensure project skills are focused, discoverable, simple to follow, and maintainable across different AI providers and models.

## When to use this skill

- Creating a new skill file.
- Reviewing or updating an existing skill.
- Evaluating whether a skill is well-structured.

## References

Use <https://agentskills.io/home> and <https://github.com/anthropics/skills> as reference for best practices.

## Skill File Rules

- **Location:** In this repo, project skills live at `.agents/skills/<skill-name>/SKILL.md`.
- **Folder structure:** A skill folder may include supporting subfiles when they keep the main skill focused.

```text
.agents/skills/<skill-name>/
├── SKILL.md
├── references/
├── scripts/
└── assets/
```

- **Supporting files are allowed:** Put long checklists, detailed examples, templates, or helper scripts in subfolders instead of cramming everything into `SKILL.md`.
- **Relative references only:** Link skill resources from `SKILL.md` with `./references/...`, `./scripts/...`, or `./assets/...` paths.
- **Keep loading progressive:** Keep `SKILL.md` concise and move large supporting material into subfiles. Prefer one-level-deep references from `SKILL.md`.
- **One responsibility per skill.** A skill about code conventions should not also cover deployment.
- **Frontmatter required:** Every skill must have `name` and `description` in YAML frontmatter.
- **Name must match folder:** The `name` field must match the skill folder name.
- **"When to use" section:** Include a clear section so the AI can determine relevance.
- **Concrete examples:** Provide code snippets or file structures to minimize ambiguity.
- **Provider-agnostic:** No provider-specific features or assumptions. Skills must work with Copilot, Claude, Gemini, and others.
- **Adapt to the real repo:** When a skill is copied or derived from another project, update its commands, libraries, file names, folder layout, and examples to match this repository before keeping it.
- **Do not preserve stale stack details:** Remove or replace inherited references to the wrong package manager, framework, language conventions, file extensions, or UI library when they do not match the current repo.
- **Make values explicit:** When a skill depends on values like simplicity, clarity, or maintainability, state them directly in the purpose or rules instead of leaving them implicit.
- **Prefer modern defaults:** When a skill gives coding guidance, prefer modern, intention-revealing language and platform APIs over older sentinel-style patterns when both are supported by the project's runtime targets.

## Cross-Platform Parity

Keep instructions consistent across all platform-specific files:

| File | Platform |
|------|----------|
| `.github/copilot-instructions.md` | GitHub Copilot |
| `GEMINI.md` | Google Gemini |
| `CLAUDE.md` | Anthropic Claude |

The copilot-instructions file is the source of truth. GEMINI.md and CLAUDE.md should reference it rather than duplicate content.

## Communication Guidelines

- Provide direct, unfiltered feedback. The user prefers honesty over comfort.
- Do not sugarcoat technical debt or architectural flaws.
- If a request is suboptimal, explain why immediately and suggest the correct path.

## Skill Template

```markdown
---
name: my-skill
description: "Brief description. Use when: trigger condition 1, trigger condition 2."
argument-hint: "Optional slash-command hint"
---

# Skill Title

## Purpose

One-sentence description of what this skill enforces.

## When to use this skill

- Trigger condition 1.
- Trigger condition 2.

## Rules

- Rule 1 with rationale.
- Rule 2 with rationale.

## Examples

\`\`\`md
<!-- Concrete example -->
\`\`\`
```
