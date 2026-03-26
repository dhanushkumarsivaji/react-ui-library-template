# AI Governance Policy

> Guidelines for responsible use of AI coding assistants in this project.

## Purpose

This policy establishes standards for using AI tools (GitHub Copilot, Claude Code, Cursor, ChatGPT, etc.) when contributing to this component library. The goal is to maximize productivity while maintaining code quality, security, and accountability.

---

## Core Principles

### 1. Human Accountability

**The developer who commits the code owns it — regardless of how it was generated.**

- Every line of AI-generated code must be reviewed and understood before committing
- "The AI wrote it" is not an acceptable explanation for bugs or security issues
- If you don't understand what the code does, don't commit it

### 2. Quality Standards Apply Equally

AI-generated code must meet the **exact same standards** as human-written code:

- [ ] Passes all linting rules (ESLint 10 flat config)
- [ ] Passes TypeScript strict mode type checking
- [ ] Has unit tests, snapshot tests, and accessibility tests
- [ ] Follows the atomic design pattern
- [ ] Is exported properly from `src/index.ts`
- [ ] Has Storybook stories with autodocs
- [ ] Passes `npm run validate` completely

### 3. Security First

- **Never paste proprietary/sensitive code** into public AI tools
- **Never commit AI-generated secrets**, API keys, or credentials
- **Review for vulnerabilities**: XSS, injection, unsafe `dangerouslySetInnerHTML`, eval()
- **Check dependencies**: If AI suggests adding a package, verify it's maintained and secure
- CodeQL scanning runs automatically on every PR

---

## Approved AI Tools

| Tool                 | Status                | Notes                                            |
| -------------------- | --------------------- | ------------------------------------------------ |
| GitHub Copilot       | Approved              | Configured via `.github/copilot-instructions.md` |
| Claude Code          | Approved              | Configured via `CLAUDE.md`                       |
| Cursor               | Approved              | Configured via `.cursorrules`                    |
| ChatGPT / Claude Web | Approved with caution | Don't paste proprietary code                     |
| Unvetted AI tools    | Requires approval     | Check with maintainers first                     |

---

## AI-Assisted Development Workflow

### Writing New Components

```
1. Describe what you need to the AI (component purpose, props, behavior)
2. AI generates component + stories + tests
3. YOU review every file:
   - Does the component follow atomic design?
   - Are TypeScript types correct and exported?
   - Are all three test types present (unit, snapshot, a11y)?
   - Is accessibility handled (ARIA, keyboard, semantic HTML)?
4. Run `npm run validate`
5. Commit with conventional commit message
6. Add a changeset: `npx changeset`
```

### Code Review Checklist for AI-Generated PRs

When reviewing PRs that used AI assistance:

- [ ] **Correctness** — Does the code actually do what's intended?
- [ ] **Tests** — Are tests meaningful or just "green-lighting" stubs?
- [ ] **Accessibility** — Are ARIA attributes correct (not just present)?
- [ ] **Bundle impact** — Does this add unnecessary dependencies?
- [ ] **Patterns** — Does it follow existing project conventions?
- [ ] **Security** — No hardcoded values, no unsafe patterns?
- [ ] **Types** — Are TypeScript types precise (no `any` escapes)?

### What AI Is Good At (Use It For)

- Generating boilerplate (component structure, test scaffolding, stories)
- Writing unit tests for existing components
- Adding accessibility attributes and jest-axe tests
- Refactoring for consistency across components
- Writing documentation and JSDoc comments
- Creating Storybook stories with multiple variants

### What AI Is Bad At (Review Carefully)

- Complex state management logic
- Security-sensitive code (auth, sanitization, crypto)
- Performance optimization decisions
- Architectural decisions (when to split components)
- Edge cases in accessibility (screen reader behavior)
- Package selection (may suggest abandoned/insecure packages)

---

## CI/CD Enforcement

The following automated checks enforce quality regardless of code origin:

| Check                             | Enforced By                   | Blocks Merge? |
| --------------------------------- | ----------------------------- | ------------- |
| Linting (ESLint 10)               | CI workflow + pre-commit hook | Yes           |
| Type checking (TypeScript strict) | CI workflow                   | Yes           |
| Tests (80% coverage threshold)    | CI workflow                   | Yes           |
| Accessibility (jest-axe)          | Test suite                    | Yes           |
| Security (CodeQL)                 | CodeQL workflow               | Yes (on main) |
| Dependency updates                | Dependabot                    | Creates PRs   |
| Commit messages                   | commitlint + commit-msg hook  | Yes           |
| Bundle size                       | size-limit                    | Warning       |

---

## Attribution

AI-generated code does not require special attribution in commit messages. The standard applies: **the committer is the author and is responsible.**

However, for transparency in collaborative projects, you MAY add:

```
Co-Authored-By: Claude Code <noreply@anthropic.com>
```

or note AI assistance in the PR description.

---

## Policy Review

This policy should be reviewed quarterly as AI tooling evolves rapidly. Last reviewed: March 2026.

---

## References

- [GitHub AI Governance Framework](https://resources.github.com/learn/pathways/copilot/essentials/empower-developers-with-ai-policy-and-governance/)
- [Enterprise AI Coding Policy Template 2026](https://aidevdayindia.org/blogs/best-ai-mode-checker/enterprise-ai-coding-policy-template-2026.html)
- [AI Governor Framework](https://github.com/Fr-e-d/AI-Governor-Framework)
