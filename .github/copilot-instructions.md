# GitHub Copilot Instructions

> These instructions apply to all AI-assisted code generation in this repository.

## Context

This is a React UI component library using atomic design pattern. Components are built on MUI 7 with TypeScript.

## Rules

1. **Every component needs three test types**: unit tests, snapshot tests, and accessibility tests (jest-axe).
2. **Use TypeScript** for new components. JavaScript is allowed for legacy compatibility.
3. **Export all public APIs** from `src/index.ts`.
4. **Follow atomic design**: atoms (Button, Input), molecules (Card, Alert), organisms (Modal).
5. **Use MUI components** as building blocks — don't reinvent the wheel.
6. **Accessibility first**: proper ARIA attributes, keyboard navigation, semantic HTML.
7. **Use `forwardRef`** for components wrapping native elements (Input, Button).
8. **Conventional commits**: `feat:`, `fix:`, `docs:`, `test:`, `refactor:`, `chore:`.

## Code Style

- Arrow function components: `const Button = ({ children }: ButtonProps) => ...`
- Named interface exports: `export interface ButtonProps { ... }`
- Use `useCallback` for event handlers passed as props
- Use MUI's `sx` prop or Emotion for styling — no inline styles
- Prefer composition over inheritance

## Testing Style

```tsx
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

test('has no a11y violations', async () => {
  const { container } = render(<Component />);
  expect(await axe(container)).toHaveNoViolations();
});
```

## Don't

- Don't use `any` — use `unknown` or proper types
- Don't skip accessibility tests
- Don't use `@ts-ignore`
- Don't add `console.log` to components
