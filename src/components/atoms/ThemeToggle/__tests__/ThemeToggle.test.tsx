import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { ThemeProvider } from '../../../../styles';
import ThemeToggle from '../ThemeToggle';

const renderWithTheme = (mode: 'light' | 'dark' = 'light') =>
  render(
    <ThemeProvider defaultMode={mode}>
      <ThemeToggle />
    </ThemeProvider>,
  );

describe('ThemeToggle', () => {
  test('renders dark mode icon in light mode', () => {
    renderWithTheme('light');
    expect(screen.getByLabelText('Switch to dark mode')).toBeInTheDocument();
  });

  test('renders light mode icon in dark mode', () => {
    renderWithTheme('dark');
    expect(screen.getByLabelText('Switch to light mode')).toBeInTheDocument();
  });

  test('toggles theme on click', async () => {
    renderWithTheme('light');
    await userEvent.click(screen.getByLabelText('Switch to dark mode'));
    expect(screen.getByLabelText('Switch to light mode')).toBeInTheDocument();
  });

  test('sets data-theme attribute on html', async () => {
    renderWithTheme('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    await userEvent.click(screen.getByLabelText('Switch to dark mode'));
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  // Snapshot
  test('matches snapshot', () => {
    const { container } = renderWithTheme();
    expect(container.firstChild).toMatchSnapshot();
  });

  // Accessibility
  test('has no a11y violations', async () => {
    const { container } = renderWithTheme();
    expect(await axe(container)).toHaveNoViolations();
  });
});
