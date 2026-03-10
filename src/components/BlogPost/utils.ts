/**
 * Converts a date string to a short date format.
 * @param d - The date string to be converted.
 * @returns The short date format string.
 */
export const getShortDate = (d: string) =>
  new Date(d).toISOString().split('T')[0];
