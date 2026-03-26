import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
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
    onClick: { action: 'clicked' },
  },
};

export const Primary = {
  args: {
    children: 'Primary Button',
    variant: 'contained',
    color: 'primary',
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
};
