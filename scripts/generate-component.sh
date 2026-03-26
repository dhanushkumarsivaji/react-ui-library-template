#!/usr/bin/env bash
set -euo pipefail

# Generate a new component scaffold with all required files.
# Usage:
#   ./scripts/generate-component.sh atoms MyButton
#   ./scripts/generate-component.sh molecules SearchBar
#   ./scripts/generate-component.sh organisms DataTable

LEVEL="${1:?Usage: generate-component.sh <atoms|molecules|organisms> <ComponentName>}"
NAME="${2:?Usage: generate-component.sh <atoms|molecules|organisms> <ComponentName>}"

VALID_LEVELS=("atoms" "molecules" "organisms")
if [[ ! " ${VALID_LEVELS[*]} " =~ " ${LEVEL} " ]]; then
  echo "Error: Level must be one of: atoms, molecules, organisms"
  exit 1
fi

DIR="src/components/${LEVEL}/${NAME}"

if [ -d "$DIR" ]; then
  echo "Error: ${DIR} already exists"
  exit 1
fi

echo "Creating ${NAME} (${LEVEL})..."

mkdir -p "${DIR}/__tests__"

# Component
cat > "${DIR}/${NAME}.tsx" << EOF
import { ReactNode } from 'react';

export interface ${NAME}Props {
  /** Primary content */
  children?: ReactNode;
  /** Additional CSS class */
  className?: string;
}

/**
 * TODO: Add component description.
 */
const ${NAME} = ({ children, className }: ${NAME}Props) => (
  <div className={className}>
    {children}
  </div>
);

export default ${NAME};
EOF

# Stories
TITLE_LEVEL=$(echo "${LEVEL}" | sed 's/./\U&/')
cat > "${DIR}/${NAME}.stories.tsx" << EOF
import type { Meta, StoryObj } from '@storybook/react';
import ${NAME} from './${NAME}';

const meta: Meta<typeof ${NAME}> = {
  title: '${TITLE_LEVEL}/${NAME}',
  component: ${NAME},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ${NAME}>;

export const Default: Story = {
  args: {
    children: 'Hello from ${NAME}',
  },
};
EOF

# Tests
cat > "${DIR}/__tests__/${NAME}.test.tsx" << EOF
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import ${NAME} from '../${NAME}';

describe('${NAME}', () => {
  // Unit tests
  test('renders children', () => {
    render(<${NAME}>Hello</${NAME}>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  // Snapshot tests
  test('matches snapshot', () => {
    const { container } = render(<${NAME}>Snapshot</${NAME}>);
    expect(container.firstChild).toMatchSnapshot();
  });

  // Accessibility tests
  test('has no a11y violations', async () => {
    const { container } = render(<${NAME}>Accessible</${NAME}>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
EOF

# Barrel export
cat > "${DIR}/index.ts" << EOF
export { default } from './${NAME}';
export type { ${NAME}Props } from './${NAME}';
EOF

echo ""
echo "Created:"
echo "  ${DIR}/${NAME}.tsx"
echo "  ${DIR}/${NAME}.stories.tsx"
echo "  ${DIR}/__tests__/${NAME}.test.tsx"
echo "  ${DIR}/index.ts"
echo ""
echo "Next steps:"
echo "  1. Implement the component in ${DIR}/${NAME}.tsx"
echo "  2. Add stories in ${DIR}/${NAME}.stories.tsx"
echo "  3. Add tests in ${DIR}/__tests__/${NAME}.test.tsx"
echo "  4. Export from src/index.ts:"
echo "     export { default as ${NAME} } from './components/${LEVEL}/${NAME}';"
echo "     export type { ${NAME}Props } from './components/${LEVEL}/${NAME}';"
echo "  5. Run: npm run validate"
