<div align="center">

# React UI Library Template

### The most comprehensive, production-ready template for building React component libraries and design systems.

[![CI](https://github.com/YOUR_USERNAME/react-ui-library-template/actions/workflows/ci.yml/badge.svg)](https://github.com/YOUR_USERNAME/react-ui-library-template/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/react-ui-library-template.svg)](https://www.npmjs.com/package/react-ui-library-template)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb.svg)](https://react.dev/)
[![Storybook](https://img.shields.io/badge/Storybook-10-ff4785.svg)](https://storybook.js.org/)
[![Jest](https://img.shields.io/badge/Jest-30-c21325.svg)](https://jestjs.io/)
[![ESLint](https://img.shields.io/badge/ESLint-10_flat_config-4B32C3.svg)](https://eslint.org/)
[![a11y](https://img.shields.io/badge/a11y-jest--axe_+_WCAG_2.1-green.svg)](#testing-strategy)
[![Changesets](https://img.shields.io/badge/Releases-Changesets-blue.svg)](https://github.com/changesets/changesets)
[![codecov](https://codecov.io/gh/YOUR_USERNAME/react-ui-library-template/branch/main/graph/badge.svg)](https://codecov.io/gh/YOUR_USERNAME/react-ui-library-template)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**83 tests** | **6 components** | **3 hooks** | **Design tokens + dark mode** | **AI governance** | **npm provenance**

[Live Storybook Demo](https://YOUR_USERNAME.github.io/react-ui-library-template/) | [npm Package](https://www.npmjs.com/package/react-ui-library-template) | [Contributing](CONTRIBUTING.md)

</div>

---

## Why This Template?

Starting a component library from scratch means wiring up **30+ tools** before writing a single component. This template gives you a **battle-tested, enterprise-grade foundation** so you can focus on building components, not fighting configuration.

> **Used in production** — This template is based on patterns from a real enterprise design system serving 10+ micro-frontends.

### What Makes This Different

| Feature                                      | This Template | Typical Starters |
| -------------------------------------------- | :-----------: | :--------------: |
| React 19 + TypeScript 5.9                    |      Yes      | Often 18 + TS 4  |
| Mixed JS/TS components                       |      Yes      |     TS only      |
| ESLint 10 flat config                        |      Yes      | ESLint 8 legacy  |
| Storybook 10 with a11y addon                 |      Yes      |  Storybook 7-8   |
| Jest 30 + jest-axe a11y tests                |      Yes      |  No a11y tests   |
| Snapshot testing                             |      Yes      |      Rarely      |
| Design tokens + dark mode + ThemeProvider    |      Yes      |        No        |
| Changesets (not deprecated standard-version) |      Yes      | standard-version |
| Bundle analysis (visualizer)                 |      Yes      |        No        |
| Size-limit checks                            |      Yes      |        No        |
| Tree-shakeable output (preserveModules)      |      Yes      |  Single bundle   |
| Auto `.d.ts` type generation                 |      Yes      |      Manual      |
| npm provenance (supply chain security)       |      Yes      |        No        |
| CodeQL security scanning                     |      Yes      |        No        |
| Dependabot with grouped updates              |      Yes      |        No        |
| GitHub issue/PR templates (YAML forms)       |      Yes      |        No        |
| SECURITY.md + CODE_OF_CONDUCT.md             |      Yes      |      Rarely      |
| 80% coverage thresholds                      |      Yes      |  No thresholds   |
| AI governance (CLAUDE.md, Copilot, Cursor)   |      Yes      |        No        |
| Component generator script                   |      Yes      |        No        |

---

## Batteries Included

```
Build         Rollup 4.60  — dual CJS/ESM, preserveModules, terser, source maps
Types         TypeScript 5.9  — strict mode, auto .d.ts declarations
Components    Atomic Design  — atoms / molecules / organisms pattern
Styling       MUI 7 + Emotion + PostCSS + Sass
Theming       Design tokens (primitive → semantic) + light/dark mode + CSS variables
Docs          Storybook 10  — autodocs, controls, a11y addon, interactions
Testing       Jest 30 + React Testing Library 16 + jest-axe 10 + snapshots
Accessibility jest-axe (WCAG 2.1) + Storybook a11y addon — on every component
Linting       ESLint 10 flat config + jsx-a11y + react-hooks + Prettier 3.8
Git Hooks     Husky 9 + lint-staged 16 + commitlint 20
Commits       Commitizen with conventional commits
Releases      Changesets — collaborative changelogs, batched releases, beta support
CI/CD         GitHub Actions — lint, test (Node 20+22), build, Storybook deploy, release
Security      CodeQL analysis + Dependabot + npm provenance attestation
Community     SECURITY.md + CODE_OF_CONDUCT.md + issue/PR templates
AI Ready      CLAUDE.md + Copilot instructions + Cursor rules + AI governance policy
Generator     Component scaffold script — creates component + stories + tests instantly
```

---

## Quick Start

### Option 1: Use as GitHub Template

Click **"Use this template"** on GitHub to create your own repo instantly.

### Option 2: Clone

```bash
git clone https://github.com/YOUR_USERNAME/react-ui-library-template.git my-ui-library
cd my-ui-library
rm -rf .git && git init    # Fresh git history

npm install
npm start                  # Storybook on http://localhost:6006
```

### Available Scripts

| Command                              | Description                                 |
| ------------------------------------ | ------------------------------------------- |
| `npm start`                          | Storybook dev server (port 6006)            |
| `npm run build`                      | Build library (CJS + ESM + `.d.ts` types)   |
| `npm test`                           | Run all 83 tests with coverage              |
| `npm run test:watch`                 | Tests in watch mode                         |
| `npm run lint`                       | Lint & auto-fix (ESLint 10 flat config)     |
| `npm run typecheck`                  | TypeScript strict type checking             |
| `npm run validate`                   | Full CI check (lint + types + test + build) |
| `npm run analyze`                    | Open bundle visualizer (stats.html)         |
| `npm run size`                       | Check bundle size limits                    |
| `npm run generate -- atoms MyButton` | Scaffold a new component with tests         |
| `npm run commit`                     | Interactive conventional commit prompt      |
| `npx changeset`                      | Add a changeset for release                 |
| `npm run release`                    | Bump versions from changesets               |
| `npm run build-storybook`            | Build static Storybook site                 |

---

## Architecture

```
react-ui-library-template/
  .changeset/                    # Changesets release config
  .github/
    workflows/
      ci.yml                     # PR: lint, test (Node 20+22), build, Storybook
      release.yml                # Changesets → npm publish with provenance
      storybook-deploy.yml       # Deploy Storybook to GitHub Pages
      codeql.yml                 # Weekly security scanning
    dependabot.yml               # Grouped dependency updates
    copilot-instructions.md      # GitHub Copilot AI config
    ISSUE_TEMPLATE/              # Bug report + feature request (YAML forms)
    PULL_REQUEST_TEMPLATE.md     # PR checklist
  .husky/                        # Git hooks (pre-commit, commit-msg)
  .storybook/                    # Storybook 10 config + ThemeProvider decorator
  scripts/
    generate-component.sh        # Scaffold component + stories + tests
    beta-release.sh              # Changesets beta release helper
  src/
    components/
      atoms/                     # Button (JS), Input (TS), ThemeToggle (TS)
      molecules/                 # Card (TS), Alert (TS)
      organisms/                 # Modal (TS)
    hooks/                       # useToggle, useMediaQuery
    styles/                      # ThemeProvider, design tokens (light/dark)
    utils/                       # cn, formatDate
    index.ts                     # Public API — all exports
  CLAUDE.md                      # Claude Code AI config
  .cursorrules                   # Cursor AI config
  AI_GOVERNANCE.md               # AI usage governance policy
  SECURITY.md                    # Vulnerability reporting policy
  CODE_OF_CONDUCT.md             # Contributor Covenant
  CONTRIBUTING.md                # Dev setup + component patterns
  eslint.config.js               # ESLint 10 flat config
  rollup.config.mjs              # Build + bundle visualizer
  tsconfig.json                  # TypeScript 5.9 strict
  jest.config.js                 # Jest 30 + 80% coverage thresholds
  .nvmrc                         # Node 22
```

### Component Pattern

Every component follows this structure:

```
ComponentName/
  ComponentName.tsx          # Implementation with exported TypeScript interface
  ComponentName.stories.tsx  # Storybook stories (autodocs)
  __tests__/
    ComponentName.test.tsx   # Unit + snapshot + accessibility (jest-axe) tests
  index.ts                   # Barrel export
```

Generate this scaffold instantly:

```bash
npm run generate -- atoms MyButton      # Creates 4 files, passes all 3 test types
```

### Build Output

```
dist/
  cjs/          # CommonJS — preserveModules (tree-shakeable)
  esm/          # ES Modules — preserveModules (tree-shakeable)
  types/        # Auto-generated .d.ts declarations
```

Each component gets its own file in the output — bundlers eliminate unused code automatically.

---

## Example Components

| Component       | Type     | Language   | Features Demonstrated                                             |
| --------------- | -------- | ---------- | ----------------------------------------------------------------- |
| **Button**      | Atom     | JavaScript | PropTypes, loading spinner, variants, disabled state              |
| **Input**       | Atom     | TypeScript | `forwardRef`, MUI TextField, adornments, form library ready       |
| **ThemeToggle** | Atom     | TypeScript | Dark mode toggle, `useThemeMode` hook, system preference          |
| **Card**        | Molecule | TypeScript | Composition (header/media/content/actions), conditional rendering |
| **Alert**       | Molecule | TypeScript | Dismiss animation (Collapse), severity variants, custom actions   |
| **Modal**       | Organism | TypeScript | Portal rendering, focus trap, backdrop/escape handling, ARIA      |

| Export                           | Type    | Description                                         |
| -------------------------------- | ------- | --------------------------------------------------- |
| **ThemeProvider**                | Context | Light/dark mode, CSS variables, MUI theme sync      |
| **useThemeMode**                 | Hook    | Access `mode`, `toggleMode`, `setMode`, `tokens`    |
| **useToggle**                    | Hook    | Boolean toggle with direct setter                   |
| **useMediaQuery**                | Hook    | Reactive CSS media queries, SSR-safe                |
| **cn**                           | Utility | Class name concatenation with falsy filtering       |
| **formatDate**                   | Utility | `Intl.DateTimeFormat` with locale support           |
| **primitives**                   | Tokens  | Raw design values (colors, spacing, radii, shadows) |
| **lightTokens** / **darkTokens** | Tokens  | Semantic token sets for each theme mode             |

---

## Theming & Design Tokens

### Token Architecture

```
Primitive Tokens     →  Raw values (blue-500, gray-100, space-4)
  ↓
Semantic Tokens      →  Purpose-driven (color-background, color-text, color-primary)
  ↓
CSS Variables        →  Runtime theming (--color-background, --color-text)
  ↓
MUI Theme            →  Auto-synced with tokens
```

### Dark Mode

```tsx
import { ThemeProvider, ThemeToggle, useThemeMode } from 'your-library';

const App = () => (
  <ThemeProvider defaultMode="light">
    <ThemeToggle /> {/* Toggle button */}
    <YourContent />
  </ThemeProvider>
);

// Access theme anywhere
const MyComponent = () => {
  const { mode, tokens, toggleMode } = useThemeMode();
  return <div style={{ color: tokens.colorText }}>Current: {mode}</div>;
};
```

Features:

- Respects `prefers-color-scheme` system preference by default
- CSS variables injected on `<html>` — works with any styling approach
- `data-theme="light|dark"` attribute on `<html>` for CSS selectors
- MUI theme auto-synced with token values
- Storybook preview uses ThemeProvider

### Customizing Tokens

Edit `src/styles/tokens.ts` to match your brand:

```ts
export const lightTokens = {
  colorPrimary: '#your-brand-color',
  colorBackground: '#ffffff',
  // ... all tokens defined in one place
};
```

---

## Testing Strategy

Every component ships with **three types of tests** (83 tests total):

### 1. Unit Tests

Core functionality — props, events, conditional rendering, edge cases.

### 2. Snapshot Tests

Detect unintended markup changes between commits.

### 3. Accessibility Tests (jest-axe)

WCAG 2.1 compliance checked automatically on every component:

```tsx
test('has no a11y violations', async () => {
  const { container } = render(<Button>Accessible</Button>);
  expect(await axe(container)).toHaveNoViolations();
});
```

### Coverage Thresholds

The project enforces **80% minimum** on branches, functions, lines, and statements. Tests fail if coverage drops below.

---

## Release Workflow

This template uses **[Changesets](https://github.com/changesets/changesets)** — the modern standard, replacing the deprecated `standard-version`.

### Local Development

```bash
# 1. Make changes and add a changeset
npx changeset

# 2. Commit with conventional commit
npm run commit

# 3. Push — CI validates automatically
git push
```

### Automated Release (CI)

When changesets are merged to `main`, the GitHub Action:

1. Creates a **"Version Packages"** PR aggregating all changesets
2. Merging that PR triggers: version bump + CHANGELOG + **npm publish with provenance**

Published packages include [npm provenance attestation](https://docs.npmjs.com/generating-provenance-statements/) — cryptographic proof of build origin for supply chain security.

### Beta Releases

```bash
./scripts/beta-release.sh        # Enter beta mode
npx changeset                    # Add changeset
npx changeset version            # Bump to beta version
npm run build && npx changeset publish
```

---

## AI-Assisted Development

This template is **AI-ready out of the box** — pre-configured for the three major AI coding assistants of 2026.

### Pre-Configured AI Tools

| File                              | Tool           | What It Does                                                      |
| --------------------------------- | -------------- | ----------------------------------------------------------------- |
| `CLAUDE.md`                       | Claude Code    | Full project context — architecture, rules, commands, do's/don'ts |
| `.github/copilot-instructions.md` | GitHub Copilot | Code generation rules, testing patterns, style guide              |
| `.cursorrules`                    | Cursor         | Compact AI instructions for editor-level assistance               |
| `AI_GOVERNANCE.md`                | All tools      | Governance policy for responsible AI-assisted development         |

When you open this project in Claude Code, Cursor, or Copilot, the AI automatically knows:

- The atomic design pattern (atoms/molecules/organisms)
- That every component needs unit + snapshot + accessibility tests
- To use MUI as the component foundation
- To follow conventional commits and export from `src/index.ts`
- What NOT to do (no `any`, no `console.log`, no inline styles)

### AI Governance

See [AI_GOVERNANCE.md](AI_GOVERNANCE.md) for the full policy covering human accountability, quality standards, security rules, approved tools, and review checklists.

### Component Generator

Scaffold a new component with all required files:

```bash
npm run generate -- atoms MyButton
npm run generate -- molecules SearchBar
npm run generate -- organisms DataTable
```

Creates component + stories + tests (with jest-axe) + barrel export — **passes all 3 test types immediately**. Works as an AI starting point or manual scaffold.

---

## Security

- **CodeQL** — automated security scanning on every PR and weekly
- **Dependabot** — grouped dependency updates with auto-PRs
- **npm provenance** — cryptographic attestation on published packages
- **SECURITY.md** — vulnerability reporting process with response SLA

Verify any published package:

```bash
npm audit signatures
```

---

## Customization Checklist

After cloning, update these files:

- [ ] `package.json` — name, description, author, repository URL, homepage
- [ ] `README.md` — badges (replace `YOUR_USERNAME`), project description
- [ ] `LICENSE` — copyright holder
- [ ] `.changeset/config.json` — GitHub repo for changelog links
- [ ] `SECURITY.md` — security contact email
- [ ] `.github/dependabot.yml` — reviewers
- [ ] `.github/workflows/release.yml` — add `NPM_TOKEN` secret
- [ ] `src/styles/tokens.ts` — customize design tokens for your brand
- [ ] Delete or modify example components
- [ ] Run `npm run validate` to verify everything works

---

## Tech Stack

| Category              | Tool                          | Version |
| --------------------- | ----------------------------- | ------- |
| UI Framework          | React                         | 19.2    |
| Language              | TypeScript                    | 5.9     |
| Bundler               | Rollup                        | 4.60    |
| Transpiler            | Babel                         | 7.29    |
| Component Foundation  | MUI (Material UI)             | 7       |
| Theming               | Design tokens + CSS variables | Custom  |
| Documentation         | Storybook                     | 10      |
| Test Runner           | Jest                          | 30      |
| Test Utils            | React Testing Library         | 16      |
| Accessibility Testing | jest-axe                      | 10      |
| Linter                | ESLint (flat config)          | 10      |
| Formatter             | Prettier                      | 3.8     |
| Git Hooks             | Husky + lint-staged           | 9 + 16  |
| Commit Linting        | commitlint                    | 20      |
| Release Management    | Changesets                    | 2.30    |
| Bundle Analysis       | rollup-plugin-visualizer      | 7       |
| Size Checking         | size-limit                    | 12      |
| Security Scanning     | CodeQL + Dependabot           | -       |
| Supply Chain          | npm provenance (Sigstore)     | -       |
| CI/CD                 | GitHub Actions (4 workflows)  | -       |
| AI Config             | CLAUDE.md + Copilot + Cursor  | -       |

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup, component patterns, testing requirements, AI usage guidelines, and PR process.

---

## License

[MIT](LICENSE) — free for personal and commercial use.
