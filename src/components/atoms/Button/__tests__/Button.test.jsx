import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import Button from '../Button';

describe('Button', () => {
  // --- Unit Tests ---
  test('renders children text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  test('calls onClick when clicked', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when disabled prop is true', () => {
    render(<Button disabled>Click</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('is disabled when loading', () => {
    render(<Button loading>Loading</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('shows loading spinner when loading', () => {
    render(<Button loading>Loading</Button>);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  test('sets aria-busy when loading', () => {
    render(<Button loading>Loading</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
  });

  test('applies variant prop', () => {
    const { container } = render(<Button variant="outlined">Outlined</Button>);
    expect(container.querySelector('.MuiButton-outlined')).toBeInTheDocument();
  });

  test('applies size prop', () => {
    const { container } = render(<Button size="small">Small</Button>);
    expect(container.querySelector('.MuiButton-sizeSmall')).toBeInTheDocument();
  });

  test('applies fullWidth prop', () => {
    const { container } = render(<Button fullWidth>Full</Button>);
    expect(container.querySelector('.MuiButton-fullWidth')).toBeInTheDocument();
  });

  test('renders start icon', () => {
    render(<Button startIcon={<span data-testid="icon">IC</span>}>With Icon</Button>);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  test('renders with type="submit"', () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  // --- Snapshot Test ---
  test('matches snapshot — contained primary', () => {
    const { container } = render(<Button>Snapshot</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('matches snapshot — outlined loading', () => {
    const { container } = render(
      <Button variant="outlined" loading>
        Loading
      </Button>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  // --- Accessibility Test ---
  test('has no accessibility violations', async () => {
    const { container } = render(<Button>Accessible</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('has no accessibility violations when disabled', async () => {
    const { container } = render(<Button disabled>Disabled</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
