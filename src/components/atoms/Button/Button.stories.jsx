import { expect, fn } from 'storybook/test';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    // Spy on onClick across all stories
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export const Primary = {
  args: {
    children: 'Primary Button',
    variant: 'contained',
    color: 'primary',
  },
  play: async ({ canvas, args, userEvent }) => {
    const button = canvas.getByRole('button', { name: /primary button/i });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};

export const Secondary = {
  args: {
    children: 'Secondary Button',
    variant: 'contained',
    color: 'secondary',
  },
};

export const Outlined = {
  args: {
    children: 'Outlined Button',
    variant: 'outlined',
  },
  play: async ({ canvas, args, userEvent }) => {
    const button = canvas.getByRole('button', { name: /outlined button/i });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};

export const Text = {
  args: {
    children: 'Text Button',
    variant: 'text',
  },
};

export const Loading = {
  args: {
    children: 'Saving...',
    loading: true,
  },
  play: async ({ canvas, args, userEvent }) => {
    const button = canvas.getByRole('button', { name: /saving/i });
    await expect(button).toBeDisabled();
    await expect(button).toHaveAttribute('aria-busy', 'true');
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

export const WithIcons = {
  args: {
    children: 'Save',
    startIcon: <SaveIcon />,
  },
};

export const Disabled = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
  play: async ({ canvas, args, userEvent }) => {
    const button = canvas.getByRole('button', { name: /disabled/i });
    await expect(button).toBeDisabled();
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

export const FullWidth = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
};

export const Small = {
  args: {
    children: 'Small',
    size: 'small',
  },
};

export const Large = {
  args: {
    children: 'Large',
    size: 'large',
  },
};

export const Danger = {
  args: {
    children: 'Delete',
    color: 'error',
    startIcon: <DeleteIcon />,
  },
  play: async ({ canvas, args, userEvent }) => {
    const button = canvas.getByRole('button', { name: /delete/i });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};
