declare module 'journalize' {
  /**
   * Returns an AP-formatted date string that corresponds with the supplied
   * Date. If an `input` is not passed, it will use the result of `new Date();`.
   *
   * @param date - The supplied Date
   * @returns The converted date as a string
   */
  export function apdate(date?: Date): string;

  /**
   * Alters a string or number to include commas. If `val` is undefined or null,
   * an empty string is returned.
   *
   * @param val The supplied value
   * @returns The converted value
   */
  export function intcomma(val: number | string): string;
}
