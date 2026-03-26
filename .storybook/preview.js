import { ThemeProvider } from '../src/styles';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'label', enabled: true },
        ],
      },
    },
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider defaultMode="light">
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
