import type { Meta, StoryObj } from '@storybook/react';
import { expect } from 'storybook/test';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '../../../styles';
import ThemeToggle from './ThemeToggle';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Atoms/ThemeToggle',
  component: ThemeToggle,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider defaultMode="light">
        <Box sx={{ p: 4, bgcolor: 'background.default', color: 'text.primary', minHeight: 200 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Story />
            <Typography variant="body1">Click to toggle theme</Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            The background, text colors, and all tokens update automatically.
          </Typography>
        </Box>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {};

export const ToggleInteraction: Story = {
  name: 'Toggle — light → dark → light',
  play: async ({ canvas, userEvent }) => {
    // Starts in light mode
    const toggle = canvas.getByRole('button', { name: /switch to dark mode/i });
    await expect(toggle).toBeInTheDocument();

    // Click once — switches to dark
    await userEvent.click(toggle);
    const darkToggle = canvas.getByRole('button', { name: /switch to light mode/i });
    await expect(darkToggle).toBeInTheDocument();

    // Click again — back to light
    await userEvent.click(darkToggle);
    await expect(canvas.getByRole('button', { name: /switch to dark mode/i })).toBeInTheDocument();
  },
};
