import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn } from 'storybook/test';
import MuiButton from '@mui/material/Button';
import Alert from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Molecules/Alert',
  component: Alert,
  tags: ['autodocs'],
  args: {
    onDismiss: fn(),
  },
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
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('alert')).toBeInTheDocument();
    await expect(canvas.getByText(/informational alert/i)).toBeVisible();
  },
};

export const Success: Story = {
  args: { severity: 'success', title: 'Success', children: 'Operation completed successfully.' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('alert')).toBeInTheDocument();
    await expect(canvas.getByText('Success')).toBeInTheDocument();
  },
};

export const Warning: Story = {
  args: { severity: 'warning', children: 'Warning: this action cannot be undone.' },
};

export const Error: Story = {
  args: { severity: 'error', title: 'Error', children: 'Something went wrong. Please try again.' },
};

export const Dismissible: Story = {
  args: { severity: 'info', dismissible: true, children: 'Click the X to dismiss this alert.' },
  play: async ({ canvas, args, userEvent }) => {
    const alert = canvas.getByRole('alert');
    await expect(alert).toBeVisible();

    const closeButton = canvas.getByRole('button', { name: /dismiss alert/i });
    await expect(closeButton).toBeInTheDocument();

    await userEvent.click(closeButton);
    await expect(args.onDismiss).toHaveBeenCalledOnce();
    // Alert collapses — no longer in the accessible tree
    await expect(canvas.queryByRole('alert')).not.toBeInTheDocument();
  },
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
  play: async ({ canvas, userEvent }) => {
    const extendButton = canvas.getByRole('button', { name: /extend/i });
    await expect(extendButton).toBeInTheDocument();
    await userEvent.click(extendButton);
    // Alert remains visible — action doesn't dismiss
    await expect(canvas.getByRole('alert')).toBeVisible();
  },
};
