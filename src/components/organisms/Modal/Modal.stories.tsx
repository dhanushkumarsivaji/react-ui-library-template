import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import MuiButton from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Organisms/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    maxWidth: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', false] },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalWrapper = (args: any) => {
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
};

export const LargeWidth: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Large Modal',
    maxWidth: 'lg',
    children: <Typography>This modal uses the large (lg) maxWidth setting.</Typography>,
  },
};
