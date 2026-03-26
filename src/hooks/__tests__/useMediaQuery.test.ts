import { renderHook, act } from '@testing-library/react';
import useMediaQuery from '../useMediaQuery';

const mockMatchMedia = (matches: boolean) => {
  const listeners: ((event: Partial<MediaQueryListEvent>) => void)[] = [];
  const mql = {
    matches,
    media: '',
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn((_: string, handler: (e: Partial<MediaQueryListEvent>) => void) => {
      listeners.push(handler);
    }),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
    _fire: (newMatches: boolean) => {
      listeners.forEach((handler) => handler({ matches: newMatches }));
    },
  };
  window.matchMedia = jest.fn().mockReturnValue(mql);
  return mql;
};

describe('useMediaQuery', () => {
  test('returns false when query does not match', () => {
    mockMatchMedia(false);
    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));
    expect(result.current).toBe(false);
  });

  test('returns true when query matches', () => {
    mockMatchMedia(true);
    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));
    expect(result.current).toBe(true);
  });

  test('updates when media query fires a change event', () => {
    const mql = mockMatchMedia(false);
    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));
    expect(result.current).toBe(false);

    act(() => {
      mql._fire(true);
    });
    expect(result.current).toBe(true);

    act(() => {
      mql._fire(false);
    });
    expect(result.current).toBe(false);
  });

  test('registers and removes event listener', () => {
    const mql = mockMatchMedia(false);
    const { unmount } = renderHook(() => useMediaQuery('(min-width: 768px)'));

    expect(mql.addEventListener).toHaveBeenCalledWith('change', expect.any(Function));
    unmount();
    expect(mql.removeEventListener).toHaveBeenCalledWith('change', expect.any(Function));
  });

  test('re-subscribes when query prop changes', () => {
    const mql = mockMatchMedia(false);
    const { rerender } = renderHook(({ query }: { query: string }) => useMediaQuery(query), {
      initialProps: { query: '(min-width: 768px)' },
    });

    const firstCallCount = (mql.addEventListener as jest.Mock).mock.calls.length;
    rerender({ query: '(min-width: 1024px)' });
    expect((mql.addEventListener as jest.Mock).mock.calls.length).toBeGreaterThan(firstCallCount);
  });
});
