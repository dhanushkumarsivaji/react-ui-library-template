import { useState, useEffect } from 'react';

/**
 * Reactive CSS media query hook.
 *
 * @param query - CSS media query string (e.g., '(min-width: 768px)')
 * @returns Whether the media query currently matches
 *
 * @example
 * const isDesktop = useMediaQuery('(min-width: 1024px)');
 */
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const mediaQuery = window.matchMedia(query);
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

    setMatches(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
};

export default useMediaQuery;
