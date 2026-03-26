# Contributing

Thank you for your interest in contributing! This guide will help you get started.

## Development Setup

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/react-ui-library-template.git
cd react-ui-library-template

# Install dependencies
npm install

# Start Storybook for development
npm start
```

## Project Structure

```
src/
  components/
    atoms/       # Primitive components (Button, Input, etc.)
    molecules/   # Composite components (Card, SearchBar, etc.)
    organisms/   # Complex assemblies (Modal, Header, etc.)
  hooks/         # Custom React hooks
  utils/         # Utility functions
  styles/        # Global styles and themes
  constants/     # Shared constants
  index.ts       # Public API entry point
```

## Component Pattern

Every component should follow this structure:

```
ComponentName/
  ComponentName.tsx (or .jsx)   # Implementation
  ComponentName.stories.tsx     # Storybook stories
  __tests__/
    ComponentName.test.tsx      # Unit + snapshot + a11y tests
  index.ts                      # Barrel export
```

## Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/). Run `npm run commit` for an interactive prompt.

```
feat: add new Button variant
fix: resolve Card shadow on hover
docs: update README examples
test: add Modal accessibility tests
refactor: simplify useToggle hook
chore: update dependencies
perf: memoize Card children
style: fix Button padding
ci: add Storybook deploy workflow
build: optimize Rollup config
```

## Testing Requirements

All components must include:

1. **Unit tests** - Core functionality, props, events
2. **Snapshot tests** - Visual regression detection
3. **Accessibility tests** - Using `jest-axe`

```tsx
// Example test structure
describe('MyComponent', () => {
  // Unit tests
  test('renders correctly', () => { ... });
  test('handles click events', () => { ... });

  // Snapshot tests
  test('matches snapshot', () => { ... });

  // Accessibility tests
  test('has no a11y violations', async () => {
    const { container } = render(<MyComponent />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
```

Run tests:

```bash
npm test              # Run all tests
npm run test:watch    # Watch mode
npm run coverage      # With coverage report
```

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes following the patterns above
3. Ensure all checks pass: `npm run validate`
4. Submit a PR with a clear description
5. Address review feedback

## Code Quality

- ESLint + Prettier enforce consistent code style
- Husky pre-commit hooks run lint-staged automatically
- Coverage thresholds are enforced at 80%
- All exports must go through `src/index.ts`

## Adding a New Component

### Quick Way (Generator Script)

```bash
bash scripts/generate-component.sh atoms MyButton
```

This creates all required files with the correct structure. Then implement the component and export it.

### Manual Way

1. Create the component directory under the appropriate atomic level
2. Implement the component (JS or TS)
3. Add PropTypes (JS) or TypeScript interfaces
4. Write Storybook stories with `autodocs` tag
5. Write tests (unit + snapshot + accessibility)
6. Export from `src/index.ts`
7. Run `npm run validate` to verify everything passes

## Using AI Tools

AI coding assistants (Copilot, Claude Code, Cursor) are welcome and pre-configured:

- **CLAUDE.md** — Claude Code reads this automatically
- **.github/copilot-instructions.md** — Copilot reads this automatically
- **.cursorrules** — Cursor reads this automatically

### Rules for AI-Generated Code

1. **You own it** — review and understand every line before committing
2. **Same standards** — AI code must pass `npm run validate` like any other code
3. **Meaningful tests** — don't accept stub tests that just pass; verify edge cases
4. **Security** — never paste proprietary code into public AI tools
5. **Dependencies** — verify any AI-suggested packages are maintained and secure

See [AI_GOVERNANCE.md](AI_GOVERNANCE.md) for the full policy.
