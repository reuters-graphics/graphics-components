<!--
  @component Prints an instant AP style in the reader's local timezone, falling back to GMT until the browser's zone is detected. `display` selects a clock time, a calendar date or both, and screen readers get a spelled-out version in place of the visible text.

  [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-text-elements-localdatetime--docs)
-->
<script lang="ts">
  import {
    detectLocalTimeZone,
    formatAccessibleDateTime,
    formatApDateTime,
    formatRelativeTime,
    isWithinRelativeWindow,
    DEFAULT_RELATIVE_WINDOW_HOURS,
    type DateTimeDisplay,
    type ShowYear,
    type TimePrecision,
  } from '../../utils/datetime';

  export interface LocalDateTimeProps {
    /** The datetime to display. Defaults to now. */
    datetime?: Date | string | number;
    /**
     * What to print: a clock time (`3:45 p.m. EDT`), a calendar date
     * (`Jan. 15, 2024`), or both (`Jan. 15, 2024, 3:45 p.m. EDT`). Defaults to
     * `'time'`.
     */
    display?: DateTimeDisplay;
    /** Clock precision. Ignored when `display` is `'date'`. Defaults to `'minute'`. */
    precision?: TimePrecision;
    /**
     * Append the timezone abbreviation. Ignored when `display` is `'date'` —
     * AP style never writes `Jan. 15, 2024 EST`. Defaults to `true`.
     */
    showTimeZone?: boolean;
    /**
     * Include the year in the date: `true` always, `false` never, or `'auto'`
     * to print it only when `datetime` falls outside the current year. Ignored
     * when `display` is `'time'`, and visual-only — the screen-reader text
     * always names the year, since speech has no context to recover it from.
     * Defaults to `true`.
     *
     * `'auto'` resolves against the same zone the date renders in, so it is
     * reader-dependent either side of New Year, like the date itself.
     */
    showYear?: ShowYear;
    /**
     * Force a specific IANA zone (or the literal `'GMT'`), skipping the
     * reader's browser detection entirely.
     */
    timeZone?: string;
    /**
     * Print a relative duration ("5 minutes ago", "in 3 hours", "yesterday")
     * instead of a clock time or date, when `datetime` is close enough to now —
     * see `relativeWithinHours`. Beyond that window this falls back to whatever
     * `display` asks for; inside it, `relative` takes precedence over `display`
     * in all three modes. Defaults to `false`.
     */
    relative?: boolean;
    /**
     * How far from now, in hours, `datetime` can be and still print as a
     * duration. Symmetric — it applies equally to the past and the future.
     * Ignored when `relative` is `false`. Defaults to 24.
     *
     * 24 is conservative rather than a limit: durations stay readable much
     * further out ("3 days ago", "20 days ago", "last month"). `Infinity`
     * is always relative.
     */
    relativeWithinHours?: number;
  }

  let {
    datetime = new Date(),
    display = 'time',
    precision = 'minute',
    showTimeZone = true,
    showYear = true,
    timeZone,
    relative = false,
    relativeWithinHours = DEFAULT_RELATIVE_WINDOW_HOURS,
  }: LocalDateTimeProps = $props();

  const date = $derived(new Date(datetime));

  // `$effect` doesn't run during SSR, so the server (and first paint) always
  // render GMT; this fills in the reader's real zone right after mount. Zone
  // detection runs even in `relative` mode, since a datetime more than a day
  // away falls back to an absolute clock time that needs it.
  let detectedZone: string | undefined = $state(undefined);

  $effect(() => {
    if (timeZone) return;
    detectedZone = detectLocalTimeZone();
  });

  // Truthiness, not `??`, so an empty `timeZone` means "detect" — matching the
  // effect's own guard above, which would otherwise detect a zone that `??`
  // then discarded in favor of the empty string.
  const zone = $derived(timeZone || detectedZone || 'GMT');

  const showRelative = $derived(
    relative && isWithinRelativeWindow(date, relativeWithinHours)
  );

  const parts = $derived({
    display,
    timeZone: zone,
    precision,
    showTimeZone,
    showYear,
  });

  const text = $derived(
    showRelative ? formatRelativeTime(date) : formatApDateTime(date, parts)
  );

  // Spoken instead of `text`, and always absolute: "EST" reads as letters, a
  // bare clock time is ambiguous without a date, and "5 minutes ago" is
  // imprecise. Carried in a visually-hidden sibling rather than an
  // `aria-label` because naming a `<time>` is prohibited on the element's
  // implicit role and inconsistently honored by screen readers.
  const spokenText = $derived(formatAccessibleDateTime(date, parts));
</script>

<time datetime={date.toISOString()}
  ><span aria-hidden="true">{text}</span><span class="visually-hidden"
    >{spokenText}</span
  ></time
>

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  .visually-hidden {
    @include mixins.visually-hidden;
    // Hosts that uppercase their datelines (BlogPost's PostHeadline does) would
    // otherwise uppercase this too, and `text-transform` really does change what
    // VoiceOver announces in Safari — "JAN." gets spelled out as letters.
    text-transform: none;
  }
</style>
