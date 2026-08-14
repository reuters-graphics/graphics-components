/**
 * The datetime toolkit — AP-style formatting, timezone labels, browser zone
 * detection, and zone-aware comparison.
 *
 * This is shared infrastructure, not one component's helper: `LocalDateTime`
 * renders it, and the datelines in `Byline`, `PostHeadline` and `BlogTOC` are
 * migrating onto it. Import from this barrel rather than reaching for the
 * individual modules, and note it is deliberately *not* re-exported through
 * `src/utils/index.ts` — that would make every `slugify` importer pull in the
 * timezone whitelist's module graph.
 */

export {
  formatApTime,
  formatApDate,
  formatApDateTime,
  formatAccessibleTime,
  formatAccessibleDate,
  formatAccessibleDateTime,
  formatRelativeTime,
  type DateTimeDisplay,
  type ShowYear,
  type FormatApTimeOptions,
  type FormatApDateOptions,
  type FormatApDateTimeOptions,
  type TimePrecision,
} from './format';

export { resolveTimeZoneLabel, type TimeZoneLabel } from './labels';

export { detectLocalTimeZone } from './detect';

export {
  isValidDate,
  isSameDay,
  zonedDateKey,
  isWithinRelativeWindow,
  DEFAULT_RELATIVE_WINDOW_HOURS,
} from './compare';
