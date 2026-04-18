---
description: "Project context and guidance for GitHub Copilot working on this repository."
---

# SwiftPost Site Template - Copilot Guide

This is a TypeScript/React monorepo using Next.js 15 (static export), MUI 7, and Turborepo. GitHub Copilot is configured with project-specific skills to help maintain consistency and quality.

## Personality and Workflow Instructions for GitHub Copilot

I am an adult and can bear being told I am wrong. If something in my line of thought is not correct, tell me openly and directly. Try to be objective in pros and cons and alert me clearly when taking a direction that is not appropriate given the goal and context. When considering this issue, analyze if you have all the necessary information. Ask for feedback in case you miss anything relevant. If you think you have all the information you need, provide instead a summary of your understanding of the problem given the context and ask confirmation that you have a correct understanding and should proceed. You are a skilled professional at a job interview, if you answer correctly you will get the job, additionally, if you excel you will also get a bonus of 10 grands.

- Set the title of the chat as the title of the task.
- Keep commits small and focused on a feature or area, few related files at a time. Only commit after linting and type-checking.
- After each change, before committing, verify it didn't introduce any new warnings or type issues. Filter output on changed files to avoid unrelated noise.
- When necessary, run lint and type-check as a one-liner to reduce interactions.
- If you realize you don't have access to a terminal when you need it, tell me to adjust tools to grant you access, or ask me to run the command manually.
- When starting a task, pull rebase.
- After rebasing, or at the start of a task, reinstall packages with `yarn install`.
- If there are multiple steps to do (or multiple comments to address), create a todo list and work on each step by step: edit, then lint and type-check, then commit and proceed to the next.
- If the description contains any link, read them.
- If you need more context, just ask. Better than implement something on wrong assumptions.
- Do not install libraries unless strictly necessary. Always ask the user and do a thorough check for alternatives before proposing a new dependency.

## Project Skills

All project skills are located in `.agents/skills/` and automatically load in Copilot based on context and trigger phrases.

### Available Skills

**`architecture`** — Repo-wide architectural decisions
- Modularity, feature isolation, component composition, client/server boundaries
- Monorepo layout, directory rules, feature-first architecture, file placement guide
- Use when: designing features, structuring components, reviewing separation of concerns

**`elysium`** — Elysium UI library full reference
- Every component, import paths, Slots pattern, styling utilities, theming
- Use when: building UI, choosing components, working with sx/styles

**`code-conventions`** — TypeScript and React code quality standards
- Strict typing, erasable types, const functions, `React.FC<Props>` pattern, early returns, hook conventions
- Use when: creating components, writing hooks, reviewing TypeScript code

**`next`** — Next.js conventions and constraints
- Static export rules, page pattern, client/server boundaries, routing
- Use when: creating pages, working with routing, configuring Next.js

**`skills-meta`** — Guidelines for creating and maintaining project skills
- Ensures skills are focused, discoverable, and provider-agnostic
- Use when: designing new skills or evaluating skill quality

**`tasks-management`** — Scrum Master task tracking in `.agents/tasks/`
- Maintains living feature README.md files with objectives, status, and checkboxes
- Use when: starting a new feature, tracking multi-step work, updating progress

## Workflow

When working on this project:

1. **Start**: Pull latest changes and rebase
2. **Setup**: Run `yarn install` to install/update dependencies
3. **Code**: Follow conventions in the relevant skills
4. **Validate**: Run lint and type-check
5. **Commit**: Small, focused commits after validation passes

## Quick Commands

- `yarn dev` — Start Next.js dev server (Turbopack)
- `yarn build` — Production build (static export)
- `yarn lint` — ESLint check (all packages via Turbo)
- `yarn lint:fix` — Auto-fix lint issues

## Approved Libraries

Only these external libraries are pre-approved. Any other dependency requires explicit user approval after checking for simpler alternatives:

- **Data Fetching & Async State:** `@tanstack/react-query`
- **Schema Validation:** `zod`
- **Date Manipulation:** Prefer native `Date` and `Intl.DateTimeFormat`. Use `date-fns` only for complex date math.
- **Internationalization:** `next-intl`

## Asking for Help

- For UI components or styling → Check `elysium` skill
- For TypeScript/React patterns → Check `code-conventions` skill
- For file placement or project structure → Check `architecture` skill
- For ambiguity → Ask for clarification rather than making assumptions

## Further Reading

- [package.json](../package.json) — Root monorepo configuration
- [turbo.json](../turbo.json) — Turborepo task config
- [README.md](../README.md) — Getting started guide
- Individual skill files in `.agents/skills/` for detailed guidance
