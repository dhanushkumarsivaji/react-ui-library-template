import type { Meta, StoryObj } from '@storybook/react';
import { expect } from 'storybook/test';
import SearchIcon from '@mui/icons-material/Search';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['outlined', 'filled', 'standard'] },
    size: { control: 'select', options: ['small', 'medium'] },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { label: 'Name', placeholder: 'Enter your name' },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole('textbox', { name: /name/i });
    await userEvent.clear(input);
    await userEvent.type(input, 'Jane Doe');
    await expect(input).toHaveValue('Jane Doe');
  },
};

export const WithHelperText: Story = {
  args: { label: 'Email', helperText: 'We will never share your email.' },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole('textbox', { name: /email/i });
    await userEvent.type(input, 'user@example.com');
    await expect(input).toHaveValue('user@example.com');
    await expect(canvas.getByText(/we will never share/i)).toBeInTheDocument();
  },
};

export const ErrorState: Story = {
  args: { label: 'Password', error: true, helperText: 'Password is required.' },
  play: async ({ canvas }) => {
    const input = canvas.getByRole('textbox', { name: /password/i });
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(canvas.getByText(/password is required/i)).toBeInTheDocument();
  },
};

export const WithStartIcon: Story = {
  args: { label: 'Search', startAdornment: <SearchIcon fontSize="small" /> },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole('textbox', { name: /search/i });
    await userEvent.type(input, 'storybook');
    await expect(input).toHaveValue('storybook');
  },
};

export const Small: Story = {
  args: { label: 'Compact', size: 'small' },
};

export const FullWidth: Story = {
  args: { label: 'Full Width Input', fullWidth: true },
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
};
