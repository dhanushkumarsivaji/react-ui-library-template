import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { createRef } from 'react';
import Input from '../Input';

describe('Input', () => {
  test('renders with label', () => {
    render(<Input label="Name" />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
  });

  test('accepts user input', async () => {
    render(<Input label="Email" />);
    const input = screen.getByLabelText('Email');
    await userEvent.type(input, 'test@example.com');
    expect(input).toHaveValue('test@example.com');
  });

  test('shows helper text', () => {
    render(<Input label="Field" helperText="Help text" />);
    expect(screen.getByText('Help text')).toBeInTheDocument();
  });

  test('shows error state', () => {
    const { container } = render(<Input label="Field" error helperText="Required" />);
    expect(container.querySelector('.Mui-error')).toBeInTheDocument();
  });

  test('forwards ref', () => {
    const ref = createRef<HTMLInputElement>();
    render(<Input label="Ref Test" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  test('renders start adornment', () => {
    render(<Input label="Search" startAdornment={<span data-testid="icon">IC</span>} />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  // Snapshot
  test('matches snapshot', () => {
    const { container } = render(<Input label="Snapshot" helperText="Help" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  // Accessibility
  test('has no a11y violations', async () => {
    const { container } = render(<Input label="Accessible Input" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  test('has no a11y violations in error state', async () => {
    const { container } = render(<Input label="Error" error helperText="Required" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
