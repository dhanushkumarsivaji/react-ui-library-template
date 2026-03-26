import type { Meta, StoryObj } from '@storybook/react';
import MuiButton from '@mui/material/Button';
import Alert from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Molecules/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    severity: { control: 'select', options: ['success', 'info', 'warning', 'error'] },
    variant: { control: 'select', options: ['filled', 'outlined', 'standard'] },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 500 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: { severity: 'info', children: 'This is an informational alert.' },
};

export const Success: Story = {
  args: { severity: 'success', title: 'Success', children: 'Operation completed successfully.' },
};

export const Warning: Story = {
  args: { severity: 'warning', children: 'Warning: this action cannot be undone.' },
};

export const Error: Story = {
  args: { severity: 'error', title: 'Error', children: 'Something went wrong. Please try again.' },
};

export const Dismissible: Story = {
  args: { severity: 'info', dismissible: true, children: 'Click the X to dismiss this alert.' },
};

export const Outlined: Story = {
  args: { severity: 'success', variant: 'outlined', children: 'Outlined success alert.' },
};

export const Filled: Story = {
  args: { severity: 'error', variant: 'filled', children: 'Filled error alert.' },
};

export const WithAction: Story = {
  args: {
    severity: 'warning',
    children: 'Your session is about to expire.',
    action: (
      <MuiButton color="inherit" size="small">
        Extend
      </MuiButton>
    ),
  },
};
