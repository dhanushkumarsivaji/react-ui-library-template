import { cn } from '../cn';

describe('cn', () => {
  test('joins multiple class names', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c');
  });

  test('filters out falsy values', () => {
    expect(cn('a', false, null, undefined, 'b')).toBe('a b');
  });

  test('returns empty string for no truthy values', () => {
    expect(cn(false, null, undefined)).toBe('');
  });

  test('returns single class', () => {
    expect(cn('only')).toBe('only');
  });

  test('works with conditional expressions', () => {
    const isActive = true;
    const isDisabled = false;
    expect(cn('base', isActive && 'active', isDisabled && 'disabled')).toBe('base active');
  });
});
