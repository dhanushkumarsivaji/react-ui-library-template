import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Card from '../Card';

describe('Card', () => {
  // --- Unit Tests ---
  test('renders children content', () => {
    render(<Card>Hello World</Card>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  test('renders title and subtitle when provided', () => {
    render(
      <Card title="My Title" subtitle="My Subtitle">
        Content
      </Card>,
    );
    expect(screen.getByText('My Title')).toBeInTheDocument();
    expect(screen.getByText('My Subtitle')).toBeInTheDocument();
  });

  test('does not render CardHeader when no title or subtitle', () => {
    const { container } = render(<Card>Content</Card>);
    expect(container.querySelector('.MuiCardHeader-root')).not.toBeInTheDocument();
  });

  test('renders image when provided', () => {
    render(
      <Card image="https://example.com/img.jpg" imageAlt="test image">
        Content
      </Card>,
    );
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'https://example.com/img.jpg');
    expect(img).toHaveAttribute('alt', 'test image');
  });

  test('does not render image when not provided', () => {
    render(<Card>Content</Card>);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  test('renders actions when provided', () => {
    render(<Card actions={<button type="button">Action</button>}>Content</Card>);
    expect(screen.getByRole('button', { name: /action/i })).toBeInTheDocument();
  });

  test('does not render CardActions when no actions', () => {
    const { container } = render(<Card>Content</Card>);
    expect(container.querySelector('.MuiCardActions-root')).not.toBeInTheDocument();
  });

  test('applies outlined variant', () => {
    const { container } = render(<Card variant="outlined">Content</Card>);
    expect(container.querySelector('.MuiCard-root')).toHaveClass('MuiPaper-outlined');
  });

  test('applies custom className', () => {
    const { container } = render(<Card className="custom-card">Content</Card>);
    expect(container.querySelector('.custom-card')).toBeInTheDocument();
  });

  test('has role="article" by default', () => {
    render(<Card>Content</Card>);
    expect(screen.getByRole('article')).toBeInTheDocument();
  });

  // --- Snapshot Tests ---
  test('matches snapshot — basic card', () => {
    const { container } = render(
      <Card title="Title" subtitle="Subtitle">
        Body
      </Card>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('matches snapshot — full card with all props', () => {
    const { container } = render(
      <Card
        title="Full Card"
        subtitle="All props"
        image="https://example.com/img.jpg"
        imageAlt="Image"
        actions={<button type="button">Go</button>}
        elevation={4}
      >
        Full content
      </Card>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  // --- Accessibility Tests ---
  test('has no accessibility violations', async () => {
    const { container } = render(<Card title="Accessible Card">Accessible content</Card>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('has no a11y violations with image', async () => {
    const { container } = render(
      <Card image="https://example.com/img.jpg" imageAlt="Descriptive alt text">
        Content
      </Card>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
