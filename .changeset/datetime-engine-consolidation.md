---
'@reuters-graphics/graphics-components': minor
---

Add the `LocalDateTime` component and consolidate date/time formatting into a single shared engine at `src/utils/datetime/`.

**New: `LocalDateTime`.** Prints an instant AP style in the reader's own timezone, falling back to GMT until the browser's zone is detected. A `display` prop chooses a clock time (`7:00 a.m. EST`), a calendar date (`Jan. 15, 2024`) or both (`Jan. 15, 2024, 7:00 a.m. EST`). Screen readers get an unabbreviated, spelled-out version in a visually hidden sibling, since `Jan.` and `EST` read badly aloud. `relative` prints a duration instead when the datetime is close enough to now, and `relativeWithinHours` (default 24) sets how close that has to be — raise it for a live blog, where "3 days ago" reads better than a clock time. `showYear` accepts `'auto'` to omit the year on dates in the current year, resolved in the rendering timezone.

**New exported helpers**, all timezone-aware and framework-free:

- `formatApTime`, `formatApDate`, `formatApDateTime` — visible, AP-style output. `formatApDate` is byte-identical to journalize's `apdate`, asserted against journalize in a unit test, but resolved in an explicit zone rather than the executing machine's.
- `formatAccessibleTime`, `formatAccessibleDate`, `formatAccessibleDateTime` — spelled-out counterparts taking the same options.
- `formatRelativeTime`, `resolveTimeZoneLabel`, `detectLocalTimeZone`.
- `isValidDate`, `isSameDay`, `zonedDateKey` — zone-aware comparison, replacing three near-identical private copies. `isValidDate` also fixes a bug those copies shared: `!Date.parse(v)` rejected the Unix epoch as invalid.
- `isWithinRelativeWindow` and `DEFAULT_RELATIVE_WINDOW_HOURS` — the same relative-vs-absolute decision `<LocalDateTime relative>` makes, so a hand-composed dateline doesn't have to re-derive the threshold.
- Types: `LocalDateTimeProps`, `DateTimeDisplay`, `ShowYear`, `TimePrecision`, `TimeZoneLabel`, `FormatApTimeOptions`, `FormatApDateOptions`, `FormatApDateTimeOptions`.

**Changed: `formatTime` output.** It is now a wrapper over `formatApTime`, so it returns AP style (`9:05 a.m. EST`) rather than a locale-dependent string. Previously it called `toLocaleTimeString([])`, taking its hour cycle from the viewer's machine — the same instant rendered `09:05 AM UTC` for an `en-US` reader and `09:05 UTC` (24-hour, no meridiem) for an `en-GB` one — and accepted no timezone, so server rendering emitted whatever zone the build machine sat in. It now takes an optional second argument (`{ timeZone, precision, showTimeZone }`) and defaults to the reader's detected zone, falling back to GMT. Existing single-argument calls keep working, but **the rendered text changes**, which affects the datelines in `Byline`, `Headline`, `HeroHeadline`, `SiteHeadline` and `BlogPost`.

Prefer `<LocalDateTime>` over `formatTime` for a dateline: it resolves the zone in an effect rather than at render time, so it doesn't change text between the server paint and the client.
