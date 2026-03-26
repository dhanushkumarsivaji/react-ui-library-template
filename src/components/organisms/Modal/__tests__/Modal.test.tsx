import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import Modal from '../Modal';

const defaultProps = {
  open: true,
  onClose: jest.fn(),
  title: 'Test Modal',
  children: <p>Modal content</p>,
};

describe('Modal', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // --- Unit Tests ---
  test('renders title and content when open', () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  test('does not render content when closed', () => {
    render(<Modal {...defaultProps} open={false} />);
    expect(screen.queryByText('Modal content')).not.toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', async () => {
    const onClose = jest.fn();
    render(<Modal {...defaultProps} onClose={onClose} />);
    await userEvent.click(screen.getByLabelText('Close dialog'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('calls onClose on Escape key', async () => {
    const onClose = jest.fn();
    render(<Modal {...defaultProps} onClose={onClose} />);
    await userEvent.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('does not close on Escape when disableEscapeClose', async () => {
    const onClose = jest.fn();
    render(<Modal {...defaultProps} onClose={onClose} disableEscapeClose />);
    await userEvent.keyboard('{Escape}');
    expect(onClose).not.toHaveBeenCalled();
  });

  test('renders actions when provided', () => {
    render(<Modal {...defaultProps} actions={<button type="button">Save</button>} />);
    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument();
  });

  test('does not render actions area when no actions', () => {
    const { baseElement } = render(<Modal {...defaultProps} />);
    expect(baseElement.querySelector('.MuiDialogActions-root')).not.toBeInTheDocument();
  });

  test('renders without title and shows content', () => {
    render(
      <Modal open onClose={jest.fn()} aria-label="Custom modal">
        <p>No title content</p>
      </Modal>,
    );
    expect(screen.getByText('No title content')).toBeInTheDocument();
    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
  });

  test('uses aria-labelledby when title is provided', () => {
    const { baseElement } = render(<Modal {...defaultProps} />);
    const dialog = baseElement.querySelector('[role="dialog"]');
    expect(dialog).toHaveAttribute('aria-labelledby', 'modal-dialog-title');
  });

  test('renders dividers when dividers prop is true', () => {
    const { baseElement } = render(<Modal {...defaultProps} dividers />);
    expect(baseElement.querySelector('.MuiDialogContent-dividers')).toBeInTheDocument();
  });

  // --- Snapshot Tests ---
  test('matches snapshot — basic modal', () => {
    const { baseElement } = render(<Modal {...defaultProps} />);
    expect(baseElement.querySelector('.MuiDialog-root')).toMatchSnapshot();
  });

  test('matches snapshot — modal with actions and dividers', () => {
    const { baseElement } = render(
      <Modal {...defaultProps} dividers actions={<button type="button">OK</button>} />,
    );
    expect(baseElement.querySelector('.MuiDialog-root')).toMatchSnapshot();
  });

  // --- Accessibility Tests ---
  test('has no accessibility violations', async () => {
    const { baseElement } = render(<Modal {...defaultProps} />);
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });

  test('has no a11y violations with actions', async () => {
    const { baseElement } = render(
      <Modal {...defaultProps} actions={<button type="button">Confirm</button>} />,
    );
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
});
