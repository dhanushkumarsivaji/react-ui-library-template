import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn } from 'storybook/test';
import MuiButton from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal, { type ModalProps } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Organisms/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    onClose: fn(),
  },
  argTypes: {
    maxWidth: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', false] },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalWrapper = (args: ModalProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MuiButton variant="contained" onClick={() => setOpen(true)}>
        Open Modal
      </MuiButton>
      <Modal {...args} open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export const Basic: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Basic Modal',
    children: (
      <Typography>
        This is a basic modal dialog. It includes a title bar with a close button, content area, and
        optional action buttons.
      </Typography>
    ),
  },
  play: async ({ canvas, userEvent }) => {
    // Modal is initially closed
    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();

    // Open the modal
    await userEvent.click(canvas.getByRole('button', { name: /open modal/i }));
    const dialog = canvas.getByRole('dialog');
    await expect(dialog).toBeInTheDocument();
    await expect(canvas.getByText('Basic Modal')).toBeVisible();

    // Close via the X button
    await userEvent.click(canvas.getByRole('button', { name: /close dialog/i }));
    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
  },
};

export const WithActions: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Confirm Action',
    children: <Typography>Are you sure you want to proceed?</Typography>,
    actions: (
      <>
        <MuiButton color="inherit">Cancel</MuiButton>
        <MuiButton variant="contained" color="primary">
          Confirm
        </MuiButton>
      </>
    ),
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /open modal/i }));
    await expect(canvas.getByRole('dialog')).toBeInTheDocument();

    // Both action buttons are visible
    await expect(canvas.getByRole('button', { name: /cancel/i })).toBeVisible();
    await expect(canvas.getByRole('button', { name: /confirm/i })).toBeVisible();
  },
};

export const WithDividers: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Scrollable Content',
    dividers: true,
    children: (
      <>
        {Array.from({ length: 10 }, (_, i) => (
          <Typography key={i} paragraph>
            Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        ))}
      </>
    ),
    actions: <MuiButton variant="contained">Done</MuiButton>,
  },
};

export const NonDismissible: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Important Notice',
    disableBackdropClose: true,
    disableEscapeClose: true,
    children: <Typography>This modal can only be closed via the X button or actions.</Typography>,
    actions: <MuiButton variant="contained">Acknowledge</MuiButton>,
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /open modal/i }));
    const dialog = canvas.getByRole('dialog');
    await expect(dialog).toBeInTheDocument();

    // Escape key should NOT close the modal
    await userEvent.keyboard('{Escape}');
    await expect(dialog).toBeInTheDocument();

    // Close button DOES work
    await userEvent.click(canvas.getByRole('button', { name: /close dialog/i }));
    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
  },
};

export const LargeWidth: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Large Modal',
    maxWidth: 'lg',
    children: <Typography>This modal uses the large (lg) maxWidth setting.</Typography>,
  },
};
