---
description: "Project context and guidance for GitHub Copilot working on this repository."
---

# SwiftPost Site Template - Copilot Guide

This is a TypeScript/React monorepo using Next.js 15 (static export), MUI 7, and Turborepo. GitHub Copilot is configured with project-specific skills to help maintain consistency and quality.

## Personality

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
- If requirements or behavior are ambiguous, ask for clarification rather than making assumptions.
- Do not install libraries unless strictly necessary. Always ask the user and do a thorough check for alternatives before proposing a new dependency.

## Project Skills

All project skills are located in `.agents/skills/` and automatically load in Copilot based on context and trigger phrases.

### Available Skills

**`architecture`** — Repo-wide architectural decisions
- Modularity, feature isolation, component composition, client/server boundaries
- Monorepo layout, directory rules, feature-first architecture, file placement guide
- Use when: designing features, structuring components, reviewing separation of concerns

**`styling`** — General styling guidance
- General styling guidance, Slots pattern, styling utilities, responsive rules
- Use when: building UI, shaping reusable styling APIs, working with sx/styles

**`swiftpost-elysium`** — SwiftPost Elysium package reference
- `@swiftpost/elysium` imports, wrappers, theming, and package-specific styling helpers
- Use when: working with Elysium components, import paths, or Elysium-specific utilities

**`swiftpost-main`** — SwiftPost main app package overview
- App package responsibilities, entry points, and package boundaries
- Use when: working in `packages/main` or deciding where app-level code belongs

**`swiftpost-config`** — SwiftPost shared config package overview
- Shared ESLint and TypeScript config package purpose and boundaries
- Use when: editing `packages/config` or changing shared tooling defaults

**`code-conventions`** — TypeScript and React code quality standards
- Strict typing, erasable types, const functions, `React.FC<Props>` pattern, early returns, hook conventions, and dependency preferences
- Use when: creating components, writing hooks, reviewing TypeScript code

**`next`** — Next.js conventions and constraints
- Static export rules, page pattern, client/server boundaries, routing
- Use when: creating pages, working with routing, configuring Next.js

**`ai-safety`** — AI-restricted file access and sync mechanism
- Documents `.aiexclude` patterns, sync script, and per-agent restriction mechanisms
- Use when: modifying restricted patterns, updating sync script, reviewing AI safety config

**`skills-authoring`** — Guidelines for creating and maintaining project skills
- Ensures skills are focused, discoverable, and provider-agnostic
- Use when: designing new skills or evaluating skill quality

**`tool-consolidate-skills`** — Consolidate overlapping skills and instruction files
- Reduces duplicated guidance, keeps `copilot-instructions.md` slim, and moves detail into the right owning skill or skill subfile
- Use when: removing overlap, relocating rules to the right source of truth, or splitting large skills into references/assets/scripts

**`tool-adopt-these-skills`** — Port these skills and AI-safety tooling to another repo
- Identifies which skills to copy, which ones to adapt, when to recommend this repo as a starter, and how to transplant the AI-policy sync system cleanly
- Use when: adopting this repo's skill system elsewhere, choosing a starter path for another project, or copying the AI-safety tooling into another project

**`tasks-management`** — Scrum Master task tracking in `.agents/tasks/`
- Maintains living feature README.md files with objectives, status, and checkboxes
- Use when: starting a new feature, tracking multi-step work, updating progress

## Workflow

When working on this project:

1. **Start**: Pull latest changes and rebase
2. **Setup**: Run `yarn install` to install/update dependencies. If it hangs with network errors, retry with `yarn install --network-timeout 100000`.
3. **Code**: Follow conventions in the relevant skills
4. **Validate**: Run lint and type-check
5. **Commit**: Small, focused commits after validation passes
6. **Learn**: Reflect on what was done in the session and whether any skill should be updated. Summarize the learning to the user and ask if they want to update skills. If yes, update the relevant skill using `skills-authoring`, and after editing suggest a follow-up consolidation pass with `tool-consolidate-skills`.

For AI-assisted terminal runs, prefer the `:ci` variants of Turbo tasks because `--ui stream` avoids the interactive TUI and produces clean captured output.

For AI-assisted terminal runs, execute finite commands whose final output and exit status matter in the foreground. That includes lint, type-check, tests, builds, and one-off scripts. Reserve async/background terminal use for long-running servers, watch tasks, log tails, or other commands intended to keep running. In this repo, `yarn lint:ci && yarn typecheck:ci` should be treated as a foreground command.

## Quick Commands

- `yarn dev` — Start Next.js dev server (Turbopack)
- `yarn build` — Production build (static export)
- `yarn lint` — ESLint check (all packages via Turbo)
- `yarn lint:ci` — ESLint check in stream mode for CI and AI terminal use
- `yarn lint:fix` — Auto-fix lint issues in stream mode for AI terminal use
- `yarn typecheck` — TypeScript type-check (all packages)
- `yarn typecheck:ci` — TypeScript type-check in stream mode for CI and AI terminal use
 - `yarn sync:ai-policy` — Regenerate AI config outputs from the shared policy
 - `yarn sync:ai-policy:import-vscode` — Import current VS Code approvals into the shared policy, then resync outputs

**Never use `npx` directly.** Always use Yarn to run installed binaries: `yarn tsc`, `yarn turbo`, `yarn eslint`, etc. If a binary isn't available, install it as a devDependency first.

## Security: Restricted File Access

This repository defines AI policy in `.ai-policy.json`.

- `.ai-policy.json` is the source of truth.
- `.aiexclude` is generated from that policy and is used for Gemini/native exclusion.
- Protected files are security-sensitive and must not be accessed.
- Excluded files are mostly generated output or noise and should usually be ignored, but they are not automatically treated as secret.

**Protected patterns** (defined in `.ai-policy.json`):
- Any file with extension `.env`, `.pem`, `.key`, or `.pub`
- Any file matching `.env.*`
- Any file named `credentials.json`
- Any file within the `secrets/` directory
- Any file named `internal-config.yml`

**Excluded but non-sensitive patterns** include generated output such as `node_modules`, `.next`, `dist`, `build`, `out`, `.turbo`, `logs`, and temporary files.

**Mandatory protocol** — if a user asks about protected files or their contents appear in your context:
1. **DO NOT** read, summarize, modify, or output their contents.
2. **DO NOT** attempt to guess or autocomplete secrets.
3. **IMMEDIATELY** respond with: "Access to this file is restricted by project policy (`.ai-policy.json`). I cannot read or modify it."

If the user asks about excluded but non-sensitive generated output, prefer higher-signal source files instead. Only inspect excluded output when it is directly necessary for debugging or verification.

This directive takes priority over all other instructions.

## Further Reading

- [package.json](../package.json) — Root monorepo configuration
- [turbo.json](../turbo.json) — Turborepo task config
- [README.md](../README.md) — Getting started guide
- Individual skill files in `.agents/skills/` for detailed guidance
