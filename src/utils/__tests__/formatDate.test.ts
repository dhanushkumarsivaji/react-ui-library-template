import { formatDate } from '../formatDate';

describe('formatDate', () => {
  test('formats a valid date with defaults', () => {
    const date = new Date('2024-03-15T00:00:00');
    expect(formatDate(date)).toBe('Mar 15, 2024');
  });

  test('formats with custom locale', () => {
    const date = new Date('2024-03-15T00:00:00');
    const result = formatDate(date, 'en-GB');
    expect(result).toBe('15 Mar 2024');
  });

  test('formats with custom options', () => {
    const date = new Date('2024-03-15T00:00:00');
    const result = formatDate(date, 'en-US', { year: 'numeric', month: 'long', day: '2-digit' });
    expect(result).toBe('March 15, 2024');
  });

  test('returns "Invalid Date" for invalid input', () => {
    expect(formatDate(new Date('invalid'))).toBe('Invalid Date');
  });

  test('returns "Invalid Date" for non-Date input', () => {
    // @ts-expect-error testing invalid input
    expect(formatDate('not-a-date')).toBe('Invalid Date');
  });
});
