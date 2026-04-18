---
name: skills-meta
description: "Guidelines for creating and maintaining project skills. Use when: designing new skills, updating existing skills, establishing skill standards, or evaluating skill quality."
---

# Skills Meta

## Purpose

Ensure project skills are focused, discoverable, and work across different AI providers and models.

## When to use this skill

- Creating a new skill file.
- Reviewing or updating an existing skill.
- Evaluating whether a skill is well-structured.

## References

Use <https://agentskills.io/home> and <https://github.com/anthropics/skills> as reference for best practices.

## Skill File Rules

- **Location:** `.agents/skills/<skill-name>/SKILL.md`
- **One responsibility per skill.** A skill about code conventions should not also cover deployment.
- **Frontmatter required:** Every skill must have `name` and `description` in YAML frontmatter.
- **"When to use" section:** Include a clear section so the AI can determine relevance.
- **Concrete examples:** Provide code snippets or file structures to minimize ambiguity.
- **Provider-agnostic:** No provider-specific features or assumptions. Skills must work with Copilot, Claude, Gemini, and others.

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

\`\`\`tsx
// Concrete code example
\`\`\`
```
