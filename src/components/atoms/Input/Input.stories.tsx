import type { Meta, StoryObj } from '@storybook/react';
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
};

export const WithHelperText: Story = {
  args: { label: 'Email', helperText: 'We will never share your email.' },
};

export const ErrorState: Story = {
  args: { label: 'Password', error: true, helperText: 'Password is required.' },
};

export const WithStartIcon: Story = {
  args: { label: 'Search', startAdornment: <SearchIcon fontSize="small" /> },
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
