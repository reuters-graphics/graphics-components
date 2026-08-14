/**
 * AP-style date and time formatting.
 *
 * Framework-agnostic and dependency-free — nothing here knows about a
 * component, Svelte, or the browser. All timezone/DST correctness is
 * delegated to `Intl.DateTimeFormat` rather than hand-rolled offset math.
 */

import { resolveTimeZoneLabel } from './labels';
import { isCurrentYear } from './compare';

/** How much of the clock to render. Hours+minutes are always shown. */
export type TimePrecision = 'minute' | 'second' | 'millisecond';

/** Which parts of an instant to render. */
export type DateTimeDisplay = 'time' | 'date' | 'datetime';

/** Options for {@link formatApTime}. */
export interface FormatApTimeOptions {
  /** IANA identifier (e.g. `America/New_York`) or the literal `'GMT'`. Defaults to `'GMT'`. */
  timeZone?: string;
  /** Clock precision. Defaults to `'minute'`. */
  precision?: TimePrecision;
  /** Append the timezone abbreviation. Defaults to `true`. */
  showTimeZone?: boolean;
}

/**
 * Whether to print the year: always, never, or only when the date isn't in the
 * current year.
 */
export type ShowYear = boolean | 'auto';

/** Options for {@link formatApDate}. */
export interface FormatApDateOptions {
  /** IANA identifier (e.g. `America/New_York`) or the literal `'GMT'`. Defaults to `'GMT'`. */
  timeZone?: string;
  /**
   * Include the year: `true` always, `false` never, `'auto'` only when the date
   * falls outside the current year. Defaults to `true`.
   */
  showYear?: ShowYear;
}

/** Options for {@link formatApDateTime} and {@link formatAccessibleDateTime}. */
export interface FormatApDateTimeOptions
  extends FormatApTimeOptions,
    FormatApDateOptions {
  /** Which parts to render. Defaults to `'time'`. */
  display?: DateTimeDisplay;
}

const AP_DAY_PERIOD: Record<string, string> = { AM: 'a.m.', PM: 'p.m.' };

/**
 * AP month names, 0-indexed to line up with `Intl`'s numeric `month` part
 * minus one. March through July are spelled out; note `Sept.` is four letters,
 * not three.
 *
 * Copied from journalize's `apmonth` so {@link formatApDate} is a drop-in
 * replacement for its `apdate` — see the byte-parity test in `format.test.ts`.
 * We can't call journalize itself: `apdate`/`apmonth` read local-time getters
 * and accept no timezone, which is the whole bug this module exists to fix.
 */
const AP_MONTHS = [
  'Jan.',
  'Feb.',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug.',
  'Sept.',
  'Oct.',
  'Nov.',
  'Dec.',
] as const;

/**
 * Map a zone onto one `Intl` will accept. The `'GMT'` sentinel and any
 * unrecognized zone both become `'UTC'`, so a typo or a stray CMS value
 * degrades to GMT — matching what `resolveTimeZoneLabel` does — rather
 * than throwing a `RangeError` out of a render.
 */
function intlZone(timeZone: string): string {
  if (timeZone === 'GMT') return 'UTC';
  try {
    new Intl.DateTimeFormat('en-US', { timeZone });
    return timeZone;
  } catch {
    return 'UTC';
  }
}

function formatClock(
  date: Date,
  timeZone: string,
  precision: TimePrecision
): string {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: intlZone(timeZone),
    hour: 'numeric',
    minute: '2-digit',
    second: precision === 'minute' ? undefined : '2-digit',
    hour12: true,
  }).formatToParts(date);

  const part = (type: string) =>
    parts.find((p) => p.type === type)?.value ?? '';

  let clock = `${part('hour')}:${part('minute')}`;
  if (precision !== 'minute') clock += `:${part('second')}`;
  if (precision === 'millisecond') {
    clock += `.${String(date.getMilliseconds()).padStart(3, '0')}`;
  }

  const dayPeriod = AP_DAY_PERIOD[part('dayPeriod').toUpperCase()] ?? '';
  return `${clock} ${dayPeriod}`.trim();
}

/**
 * Format a datetime AP-style — `h:mm a.m./p.m. ZONE` — for a given timezone.
 *
 * @param date - Instant to format. Defaults to now.
 * @param options - Precision, timezone and abbreviation controls.
 */
export function formatApTime(
  date: Date = new Date(),
  options: FormatApTimeOptions = {}
): string {
  const {
    timeZone = 'GMT',
    precision = 'minute',
    showTimeZone = true,
  } = options;
  const clock = formatClock(date, timeZone, precision);
  if (!showTimeZone) return clock;
  return `${clock} ${resolveTimeZoneLabel(date, timeZone).short}`;
}

/**
 * Format a date AP-style — `Jan. 15, 2024` — for a given timezone.
 *
 * Byte-identical to journalize's `apdate` by construction (`en-US` with
 * `'numeric'` parts emits an unpadded day and year, and journalize's body is
 * literally `` `${apmonth(d)} ${d.getDate()}, ${d.getFullYear()}` ``), but
 * resolved in an explicit zone instead of the executing machine's. That
 * matters: `2024-01-15T23:30:00Z` is Jan. 15 in New York and Jan. 16 in Tokyo.
 *
 * @param date - Instant to format. Defaults to now.
 * @param options - Timezone and whether to include the year.
 */
export function formatApDate(
  date: Date = new Date(),
  options: FormatApDateOptions = {}
): string {
  const { timeZone = 'GMT', showYear = true } = options;
  // `'auto'` resolves against the *same* zone the date is rendered in, so a
  // December 31 instant can't be "this year" by the clock and "last year" on
  // the page.
  const withYear =
    showYear === 'auto' ? !isCurrentYear(date, timeZone) : showYear;
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: intlZone(timeZone),
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).formatToParts(date);

  const part = (type: string) =>
    parts.find((p) => p.type === type)?.value ?? '';

  const month = AP_MONTHS[Number(part('month')) - 1];
  // `Number()` rather than the raw part, so a future ICU build that decides to
  // zero-pad `'numeric'` can't leak `Jan. 05` into a dateline.
  const day = Number(part('day'));
  // Years before 1000 and BCE dates gain an `era` part that this ignores —
  // irrelevant for a news dateline, but worth knowing before reusing this.
  return withYear ? `${month} ${day}, ${part('year')}` : `${month} ${day}`;
}

/**
 * Format a date spelled out for screen readers — `January 15, 2024`.
 *
 * The spoken counterpart to {@link formatApDate}: `Jan.` and `Sept.` are read
 * aloud as fragments or letters, so the abbreviation is for the eye only.
 *
 * @param date - Instant to describe. Defaults to now.
 * @param options - Timezone and whether to include the year.
 */
export function formatAccessibleDate(
  date: Date = new Date(),
  options: FormatApDateOptions = {}
): string {
  const { timeZone = 'GMT', showYear = true } = options;
  const withYear =
    showYear === 'auto' ? !isCurrentYear(date, timeZone) : showYear;
  return new Intl.DateTimeFormat('en-US', {
    timeZone: intlZone(timeZone),
    month: 'long',
    day: 'numeric',
    year: withYear ? 'numeric' : undefined,
  }).format(date);
}

/**
 * Format a datetime as an unabbreviated sentence for screen readers —
 * `January 15, 2024 at 7:00 a.m., North American Eastern Standard Time,
 * GMT-5`.
 *
 * This is the spoken counterpart to {@link formatApTime}, which is written
 * for the eye: it spells out the date the clock time alone leaves ambiguous,
 * and expands the zone abbreviation, which screen readers otherwise read as
 * letters ("E-S-T") or, worse, a word. The offset is appended because a long
 * zone name still isn't much use to a reader in another country.
 *
 * A zone with no curated name has the offset as its long form too, in which
 * case it's said once rather than twice ("... at 5:45 p.m., GMT+5:45").
 *
 * @param date - Instant to describe. Defaults to now.
 * @param options - Precision, timezone and zone-naming controls. Mirrors
 *   {@link formatApTime}, so both can be driven from the same props.
 */
export function formatAccessibleTime(
  date: Date = new Date(),
  options: FormatApTimeOptions = {}
): string {
  const {
    timeZone = 'GMT',
    precision = 'minute',
    showTimeZone = true,
  } = options;
  const stamp = `${formatAccessibleDate(date, { timeZone })} at ${formatClock(date, timeZone, precision)}`;
  if (!showTimeZone) return stamp;

  const { long, offset } = resolveTimeZoneLabel(date, timeZone);
  // Non-whitelisted zones use the offset as their long name, so naming both
  // would stutter — "GMT+5:45, GMT+5:45".
  const zone = long === offset ? [offset] : [long, offset];
  return [stamp, ...zone].join(', ');
}

/**
 * Format an instant as a clock time, a calendar date, or both — the visible,
 * AP-style rendering.
 *
 * `', '` joins date and time because that is this library's documented Reuters
 * style: `prettifyDate` is specified as producing `Jan. 1, 2023, 10:00 a.m.`
 * This and {@link formatAccessibleDateTime} are the only two places either
 * separator is written, so a component never hard-codes one.
 *
 * @param date - Instant to format. Defaults to now.
 * @param options - Which parts to render, plus the time and date controls.
 *   `precision`/`showTimeZone` are ignored when `display` is `'date'`;
 *   `showYear` is ignored when `display` is `'time'`.
 */
export function formatApDateTime(
  date: Date = new Date(),
  options: FormatApDateTimeOptions = {}
): string {
  const {
    display = 'time',
    timeZone,
    precision,
    showTimeZone,
    showYear,
  } = options;
  if (display === 'time') {
    return formatApTime(date, { timeZone, precision, showTimeZone });
  }
  const day = formatApDate(date, { timeZone, showYear });
  if (display === 'date') return day;
  return `${day}, ${formatApTime(date, { timeZone, precision, showTimeZone })}`;
}

/**
 * The spoken counterpart to {@link formatApDateTime}.
 *
 * `'time'` and `'datetime'` produce the same string, because
 * {@link formatAccessibleTime} already spells out the date — a bare clock time
 * is ambiguous read aloud. `'date'` names no timezone at all: AP never writes
 * `Jan. 15, 2024 EST`, and appending a zone clause to a spoken date answers a
 * question nobody asked. The zone still decides *which* calendar day you get;
 * it just isn't said.
 *
 * **`showYear` is deliberately ignored here, in every mode.** The spoken form is
 * always fully specified — the same principle that makes a visible
 * `7:00 a.m. EST` speak as a complete date, zone and offset. Omitting a year is
 * a visual economy, and speech has no surrounding context to recover it from.
 * Call {@link formatAccessibleDate} directly for a spoken date without a year.
 *
 * @param date - Instant to describe. Defaults to now.
 * @param options - Mirrors {@link formatApDateTime}, so both can be driven
 *   from the same props. `showYear` is accepted and ignored.
 */
export function formatAccessibleDateTime(
  date: Date = new Date(),
  options: FormatApDateTimeOptions = {}
): string {
  const { display = 'time', timeZone, precision, showTimeZone } = options;
  if (display === 'date') return formatAccessibleDate(date, { timeZone });
  return formatAccessibleTime(date, { timeZone, precision, showTimeZone });
}

const RELATIVE_THRESHOLDS: {
  unit: Intl.RelativeTimeFormatUnit;
  seconds: number;
}[] = [
  { unit: 'year', seconds: 60 * 60 * 24 * 365 },
  { unit: 'month', seconds: 60 * 60 * 24 * 30 },
  { unit: 'day', seconds: 60 * 60 * 24 },
  { unit: 'hour', seconds: 60 * 60 },
  { unit: 'minute', seconds: 60 },
  { unit: 'second', seconds: 1 },
];

/**
 * Format a datetime as a relative duration — `5 minutes ago`, `in 3 hours`,
 * `yesterday` — via `Intl.RelativeTimeFormat`, which also supplies correct
 * pluralization for any locale (e.g. Arabic's dual/plural forms) without a
 * hand-rolled table.
 *
 * This is a one-shot computation against `now`, not a live-updating clock:
 * called again later with the same `date` it returns a different string, but
 * nothing re-invokes it on a timer (consistent with the rest of this module —
 * see `LocalDateTime`'s docs on why it doesn't tick).
 *
 * @param date - Instant to describe. Defaults to now.
 * @param now - Instant to measure from. Defaults to now.
 */
export function formatRelativeTime(
  date: Date = new Date(),
  now: Date = new Date()
): string {
  const diffSeconds = (date.getTime() - now.getTime()) / 1000;
  const { unit, seconds } =
    RELATIVE_THRESHOLDS.find((t) => Math.abs(diffSeconds) >= t.seconds) ??
    RELATIVE_THRESHOLDS[RELATIVE_THRESHOLDS.length - 1];
  return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
    Math.round(diffSeconds / seconds),
    unit
  );
}
