/**
 * Concatenate class names, filtering out falsy values.
 *
 * @example
 * cn('base', isActive && 'active', isDisabled && 'disabled')
 * // => 'base active' (when isActive=true, isDisabled=false)
 */
export const cn = (...classes: (string | false | null | undefined)[]): string =>
  classes.filter(Boolean).join(' ');
