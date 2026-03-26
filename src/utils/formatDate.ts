/**
 * Format a Date object to a locale string.
 *
 * @param date - Date to format
 * @param locale - BCP 47 language tag (default: 'en-US')
 * @param options - Intl.DateTimeFormat options
 * @returns Formatted date string
 *
 * @example
 * formatDate(new Date('2024-03-15')) // => 'Mar 15, 2024'
 * formatDate(new Date('2024-03-15'), 'en-GB') // => '15 Mar 2024'
 */
export const formatDate = (
  date: Date,
  locale = 'en-US',
  options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' },
): string => {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    return 'Invalid Date';
  }
  return new Intl.DateTimeFormat(locale, options).format(date);
};
