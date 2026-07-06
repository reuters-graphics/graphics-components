/**
 * Converts a date string to a short date format.
 * @param d - The date string to be converted.
 * @returns The short date format string (`YYYY-MM-DD`), or an empty string if
 * `d` is missing or not a valid date.
 */
export const getShortDate = (d: string) => {
  const date = new Date(d);
  if (Number.isNaN(date.getTime())) return '';
  return date.toISOString().split('T')[0];
};
