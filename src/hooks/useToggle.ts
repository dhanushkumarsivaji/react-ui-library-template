import { useState, useCallback } from 'react';

/**
 * Simple boolean toggle hook.
 *
 * @param initialValue - Starting value (default: false)
 * @returns Tuple of [value, toggle, setValue]
 *
 * @example
 * const [isOpen, toggleOpen, setOpen] = useToggle(false);
 * <button onClick={toggleOpen}>Toggle</button>
 * <button onClick={() => setOpen(true)}>Force Open</button>
 */
const useToggle = (initialValue = false): [boolean, () => void, (value: boolean) => void] => {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue((prev) => !prev), []);
  return [value, toggle, setValue];
};

export default useToggle;
