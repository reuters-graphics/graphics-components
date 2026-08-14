/**
 * Zone-aware date comparison.
 *
 * These replace three near-identical private copies of `isValidDate` and
 * `areSameDay`/`isSameDay` (in `Byline`, `PostHeadline` and the nav's
 * `StoryCard/time.ts`), all of which compared using local-time getters. That
 * is a real defect, not a style problem: during SSR "local" is the *server's*
 * zone and after hydration it is the *reader's*, so a same-day check can flip
 * across hydration and change which branch renders — a structural DOM
 * mismatch, not merely different text.
 */

const HOUR_MS = 60 * 60 * 1000;

/**
 * How far from now a datetime can be and still be worth printing as a duration.
 *
 * 24 hours is a conservative default rather than a hard limit —
 * `formatRelativeTime` stays perfectly readable well beyond it ("3 days ago",
 * "20 days ago", "last month"), so a live blog may reasonably want a wider
 * window. It only turns vague around "last year".
 */
export const DEFAULT_RELATIVE_WINDOW_HOURS = 24;

/**
 * Whether an instant is close enough to now to describe as a duration rather
 * than a clock time or date.
 *
 * The window is symmetric — it's a magnitude, applying equally to the past and
 * the future. This is the decision `LocalDateTime` makes for its `relative`
 * prop, exported so a caller composing the formatters by hand lands on the same
 * behavior instead of re-deriving the threshold.
 *
 * Degrades sensibly without any validation: `Infinity` is always within the
 * window, and a negative or `NaN` `hours` never is.
 *
 * @param date - Instant to test.
 * @param hours - Half-width of the window, in hours. Defaults to 24.
 * @param now - Instant to measure from. Defaults to now.
 */
export function isWithinRelativeWindow(
  date: Date,
  hours: number = DEFAULT_RELATIVE_WINDOW_HOURS,
  now: Date = new Date()
): boolean {
  return Math.abs(date.getTime() - now.getTime()) < hours * HOUR_MS;
}

/**
 * The calendar date in a given zone, as `YYYY-MM-DD`. Sortable as a string,
 * usable as a grouping key, and comparable with `===`.
 *
 * Built from `formatToParts` with explicit zero-padding rather than an
 * `en-CA` formatted string. `en-CA` *happens* to yield `2024-01-15` in current
 * ICU, but that is locale-data coincidence rather than a guarantee, and this
 * value is load-bearing as a key.
 *
 * @param date - Instant to place on a calendar.
 * @param timeZone - IANA identifier or the literal `'GMT'`. Defaults to `'GMT'`.
 */
export function zonedDateKey(date: Date, timeZone: string = 'GMT'): string {
  let zone = timeZone === 'GMT' ? 'UTC' : timeZone;
  let parts: Intl.DateTimeFormatPart[];
  try {
    parts = partsFor(date, zone);
  } catch {
    // Unrecognized zone — degrade to GMT rather than throwing out of a render,
    // matching `intlZone` in `./format.ts`.
    zone = 'UTC';
    parts = partsFor(date, zone);
  }
  const part = (type: string) =>
    parts.find((p) => p.type === type)?.value ?? '';
  return [
    part('year').padStart(4, '0'),
    part('month').padStart(2, '0'),
    part('day').padStart(2, '0'),
  ].join('-');
}

function partsFor(date: Date, timeZone: string): Intl.DateTimeFormatPart[] {
  return new Intl.DateTimeFormat('en-US', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);
}

/**
 * Whether two instants fall on the same calendar day *in a given zone*.
 *
 * The zone is not optional in spirit even though it defaults: two instants can
 * genuinely be the same day in Tokyo and different days in New York, so the
 * caller has to mean one of them.
 *
 * @param a - First instant.
 * @param b - Second instant.
 * @param timeZone - IANA identifier or the literal `'GMT'`. Defaults to `'GMT'`.
 */
export function isSameDay(a: Date, b: Date, timeZone: string = 'GMT'): boolean {
  return zonedDateKey(a, timeZone) === zonedDateKey(b, timeZone);
}

/**
 * Whether an instant falls in the current calendar year *in a given zone*.
 *
 * Backs `showYear: 'auto'`. Both years are read in the same zone deliberately:
 * comparing the date's zoned year against a local-time "now" would give the
 * wrong answer either side of New Year.
 *
 * Not re-exported from the toolkit barrel — `formatApDate` accepts
 * `showYear: 'auto'` directly, so a caller never needs to run this themselves.
 *
 * @param date - Instant to test.
 * @param timeZone - IANA identifier or the literal `'GMT'`. Defaults to `'GMT'`.
 * @param now - Instant defining "current". Defaults to now.
 */
export function isCurrentYear(
  date: Date,
  timeZone: string = 'GMT',
  now: Date = new Date()
): boolean {
  return (
    zonedDateKey(date, timeZone).slice(0, 4) ===
    zonedDateKey(now, timeZone).slice(0, 4)
  );
}

/**
 * Whether a value parses to a real instant.
 *
 * Accepts everything the formatters accept. Uses `Number.isFinite` on the
 * timestamp rather than the truthiness of `Date.parse`, which the three
 * superseded copies used — `Date.parse('1970-01-01T00:00:00Z')` is `0`, so
 * `!Date.parse(v)` rejected the Unix epoch as invalid.
 *
 * @param value - Anything a `Date` might be built from.
 */
export function isValidDate(
  value: Date | string | number | null | undefined
): boolean {
  if (value === null || value === undefined || value === '') return false;
  return Number.isFinite(new Date(value as string | number | Date).getTime());
}
