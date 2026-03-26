import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import Alert from '../Alert';

describe('Alert', () => {
  test('renders children content', () => {
    render(<Alert>Alert message</Alert>);
    expect(screen.getByText('Alert message')).toBeInTheDocument();
  });

  test('renders title when provided', () => {
    render(<Alert title="Title">Message</Alert>);
    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  test('renders with role="alert"', () => {
    render(<Alert>Message</Alert>);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  test('shows dismiss button when dismissible', () => {
    render(<Alert dismissible>Message</Alert>);
    expect(screen.getByLabelText('Dismiss alert')).toBeInTheDocument();
  });

  test('calls onDismiss when dismissed', async () => {
    const onDismiss = jest.fn();
    render(<Alert dismissible onDismiss={onDismiss}>Message</Alert>);
    await userEvent.click(screen.getByLabelText('Dismiss alert'));
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  test('does not show dismiss button by default', () => {
    render(<Alert>Message</Alert>);
    expect(screen.queryByLabelText('Dismiss alert')).not.toBeInTheDocument();
  });

  test('renders custom action', () => {
    render(<Alert action={<button type="button">Undo</button>}>Message</Alert>);
    expect(screen.getByRole('button', { name: /undo/i })).toBeInTheDocument();
  });

  // Snapshot
  test('matches snapshot — info alert', () => {
    const { container } = render(<Alert severity="info" title="Info">Info message</Alert>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('matches snapshot — dismissible error', () => {
    const { container } = render(
      <Alert severity="error" dismissible>Error message</Alert>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  // Accessibility
  test('has no a11y violations', async () => {
    const { container } = render(<Alert severity="success">Accessible alert</Alert>);
    expect(await axe(container)).toHaveNoViolations();
  });

  test('has no a11y violations when dismissible', async () => {
    const { container } = render(<Alert dismissible>Dismissible</Alert>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
