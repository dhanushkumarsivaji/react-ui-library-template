import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@mui/material/Typography';
import MuiButton from '@mui/material/Button';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    elevation: { control: { type: 'range', min: 0, max: 24 } },
    variant: { control: 'select', options: ['elevation', 'outlined'] },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'Card subtitle text',
    children: (
      <Typography variant="body2" color="text.secondary">
        This is a basic card with title, subtitle, and body content. Cards are surfaces that display
        content and actions on a single topic.
      </Typography>
    ),
  },
};

export const WithActions: Story = {
  args: {
    title: 'Interactive Card',
    children: <Typography variant="body2">This card has action buttons at the bottom.</Typography>,
    actions: (
      <>
        <MuiButton size="small">Learn More</MuiButton>
        <MuiButton size="small" color="primary">
          Share
        </MuiButton>
      </>
    ),
  },
};

export const WithMedia: Story = {
  args: {
    title: 'Media Card',
    subtitle: 'With image header',
    image: 'https://picsum.photos/seed/card/400/200',
    imageAlt: 'Placeholder image',
    children: (
      <Typography variant="body2" color="text.secondary">
        Cards can include an image above the content area.
      </Typography>
    ),
    actions: <MuiButton size="small">View Details</MuiButton>,
  },
};

export const Outlined: Story = {
  args: {
    title: 'Outlined Card',
    variant: 'outlined',
    children: (
      <Typography variant="body2">
        This card uses the outlined variant instead of elevation.
      </Typography>
    ),
  },
};

export const ContentOnly: Story = {
  args: {
    children: (
      <Typography variant="body1">
        A minimal card with just content — no title, media, or actions.
      </Typography>
    ),
  },
};
