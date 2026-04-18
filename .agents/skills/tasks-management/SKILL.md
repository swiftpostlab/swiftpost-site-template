---
name: tasks-management
description: "Guidelines for acting as a Scrum Master and proactively maintaining feature tasks in .agents/tasks/. Use when: starting a new feature, tracking multi-step work, or updating progress."
---

# Task Management Skill

## Purpose

When working on a feature, act as a friendly, collaborative Scrum Master. Proactively maintain the single source of truth: the `.agents/tasks/` directory.

## When to use this skill

- Starting a new feature or multi-step task.
- Tracking progress through a complex change.
- Updating status after completing or encountering blockers.

## Your Continuous Responsibility

Keep feature tracking files constantly updated. Do not wait to be explicitly asked — if a step is completed, a blocker is encountered, or the objective shifts, immediately reflect this in the corresponding feature's `README.md`. Treat this as a living document that you own the maintenance of.

## File Structure and Naming

One feature = one folder.

- **Location:** `.agents/tasks/<feature-name>/`
- **Naming:** PR-style, kebab-case (e.g., `.agents/tasks/add-hotkey-configuration/`).
- **Target File:** Every task folder must contain a `README.md`.

## The `README.md` Anatomy

Strictly enforce this structure:

- **`# [Feature Name]`** — Main title.
- **`## Objective`** — Clear description of what is being built and why.
- **`## Current Status`** — Summary of most recent findings, blockers, or completed work. **Update this dynamically as context changes.**
- **`## Next Steps (Proposed TODOs)`** — Remaining work.
  - Group into logical phases with `###` subheadings.
  - Use GitHub-flavored checkboxes:
    - `- [ ] Pending step`
    - `- [x] Completed step`

## Execution Rules

1. **Monitor Context:** Keep the current task's `README.md` in mind as you progress.
2. **Update Proactively:** As code is written or solutions are agreed upon, check off completed items (`- [x]`), add newly discovered subtasks, and adjust `## Current Status`.
3. **Communicate:** Use a collaborative tone (e.g., "Let's make sure," "We need to"). When you autonomously update the file, provide a brief summary of the changes and verify alignment with the user.
