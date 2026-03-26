# CLAUDE.md

> Project instructions for AI-assisted development with Claude Code, Cursor, and other AI coding tools.

## Project Overview

This is a **React UI component library template** using atomic design (atoms/molecules/organisms). It produces a dual CJS/ESM npm package with auto-generated TypeScript declarations.

## Tech Stack

- **React 19** (peer dep: 18 || 19) + **TypeScript 5.9**
- **Rollup 4** — dual CJS/ESM with `preserveModules` for tree-shaking
- **Storybook 10** — component development and documentation
- **Jest 30** + React Testing Library 16 + **jest-axe** — testing
- **ESLint 10** (flat config) + Prettier 3.8
- **MUI 7** (Material UI) + Emotion — styling foundation
- **Changesets** — version management and releases
- **Husky 9** + lint-staged + commitlint — git hooks

## Commands

```bash
npm start              # Storybook dev server (port 6006)
npm run build          # Build library (Rollup + tsc declarations)
npm test               # Run all tests with coverage
npm run lint           # Lint and auto-fix
npm run typecheck      # TypeScript type checking
npm run validate       # Full CI check (lint + types + test + build)
npm run analyze        # Bundle visualizer
npx changeset          # Add a changeset for release
npm run commit         # Interactive conventional commit
```

## Architecture Rules

### Component Pattern (MUST follow)
Every component lives in `src/components/{atoms|molecules|organisms}/ComponentName/` with:
- `ComponentName.tsx` (or `.jsx`) — implementation
- `ComponentName.stories.tsx` — Storybook stories with `tags: ['autodocs']`
- `__tests__/ComponentName.test.tsx` — unit + snapshot + accessibility tests
- `index.ts` — barrel export

### Exports
All public components MUST be exported from `src/index.ts`. Use named exports for types, default exports for components.

### Testing Requirements (MUST follow)
Every component test file MUST include all three test types:
1. **Unit tests** — props, events, conditional rendering
2. **Snapshot tests** — `expect(container.firstChild).toMatchSnapshot()`
3. **Accessibility tests** — `expect(await axe(container)).toHaveNoViolations()`

### Styling
- Use MUI components as the foundation
- Use Emotion (`@emotion/styled`) for custom styles
- Support both controlled and uncontrolled patterns
- All components must accept a `className` prop

### TypeScript
- Strict mode enabled — no `any` unless unavoidable (use `unknown` instead)
- Export interfaces for all component props (e.g., `export interface ButtonProps`)
- Use `forwardRef` for components that wrap native elements

### Accessibility (MUST follow)
- All interactive components need proper ARIA attributes
- Use semantic HTML elements
- Support keyboard navigation
- Test with jest-axe in every test file

### Commits
Use conventional commits: `feat:`, `fix:`, `docs:`, `test:`, `refactor:`, `chore:`

## File Structure

```
src/
  components/
    atoms/        # Button, Input — single-purpose primitives
    molecules/    # Card, Alert — composite components
    organisms/    # Modal — complex assemblies
  hooks/          # useToggle, useMediaQuery
  utils/          # cn, formatDate
  index.ts        # Public API entry point
```

## What NOT To Do

- Do NOT add `console.log` to component code (use `console.warn`/`console.error` only)
- Do NOT use inline styles — use MUI's `sx` prop or Emotion
- Do NOT skip accessibility tests when adding new components
- Do NOT import from internal paths in tests — import from the barrel `index.ts`
- Do NOT use `@ts-ignore` — use `@ts-expect-error` with an explanation if truly needed
- Do NOT add dependencies without checking if they're tree-shakeable
- Do NOT mutate props — always treat them as immutable
