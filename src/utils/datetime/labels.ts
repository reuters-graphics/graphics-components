/**
 * Timezone display labels.
 *
 * Turns an instant plus an IANA zone into the pair of strings a reader needs:
 * a short form for the eye (`BST`) and a long form for a screen reader
 * ("British Summer Time"), backed by the curated whitelist in `./zones.ts`.
 */

import { TIME_ZONE_WHITELIST } from './zones';

export type TimeZoneLabel = {
  /** E.g. "BST", or "GMT+5:30" when not whitelisted. */
  short: string;

  /** E.g. "British Summer Time", or the offset fallback. */
  long: string;

  /** The IANA ID (or the `'GMT'` sentinel) this label was resolved from. */
  timeZone: string;

  /** E.g. "GMT+1", or a bare "GMT" at zero offset. Never abbreviated to letters. */
  offset: string;

  /** Whether `short` came from the Reuters editorial whitelist. */
  isWhitelisted: boolean;
};

const GMT_LABEL: TimeZoneLabel = {
  short: 'GMT',
  long: 'Greenwich Mean Time',
  timeZone: 'GMT',
  offset: 'GMT',
  isWhitelisted: true,
};

/** `GMT`, `GMT+0`, `GMT-0`, `GMT+00`, `GMT+00:00` — every spelling of zero. */
const ZERO_OFFSET = /^GMT(?:[+-]0+(?::00)?)?$/;

/**
 * `Intl`'s `shortOffset` disagrees across runtimes at zero offset — Node says
 * `GMT+0`, Chromium says `GMT` — which would render one string during SSR and
 * a different one after hydration. Settle on the bare `GMT`, matching how a
 * whitelisted `Europe/London` already prints in winter.
 */
function normalizeOffset(offset: string): string {
  return ZERO_OFFSET.test(offset) ? 'GMT' : offset;
}

function timeZoneNamePart(
  date: Date,
  timeZone: string,
  timeZoneName: Intl.DateTimeFormatOptions['timeZoneName']
): string | undefined {
  return new Intl.DateTimeFormat('en-US', {
    timeZone,
    timeZoneName,
    hour: 'numeric',
  })
    .formatToParts(date)
    .find((p) => p.type === 'timeZoneName')?.value;
}

/**
 * Resolve a full display label for a zone at a given instant.
 *
 * Zones in the whitelist (matched on the `timeZone` argument verbatim plus
 * Intl's English `long` name, so the same name can't leak across zones —
 * "Moscow Standard Time" can never resolve to "MST") get their curated
 * `short`/`long` pair. Everything else falls back to the AP `GMT±offset`
 * convention for both `short` and `long`. `offset` is always the numeric form,
 * regardless of whether the zone is whitelisted.
 *
 * Deliberately doesn't run `timeZone` through
 * `Intl.DateTimeFormat(...).resolvedOptions().timeZone` to "canonicalize" it
 * first — different ICU builds disagree on which of two IANA aliases for the
 * same zone (e.g. `Asia/Kolkata` vs. the older `Asia/Calcutta`) counts as
 * canonical, so doing that would make whitelist matching depend on which
 * runtime is executing this code. It is also why `intlZone` lives in
 * `./format.ts` and is *not* applied here: coercing the input would defeat the
 * `catch` below, which is what makes an unrecognized zone degrade to GMT.
 */
export function resolveTimeZoneLabel(
  date: Date,
  timeZone: string
): TimeZoneLabel {
  if (timeZone === 'GMT') return GMT_LABEL;
  try {
    const long = timeZoneNamePart(date, timeZone, 'long');
    const offset = normalizeOffset(
      timeZoneNamePart(date, timeZone, 'shortOffset') ?? 'GMT'
    );
    const entry = long ? TIME_ZONE_WHITELIST[`${timeZone}|${long}`] : undefined;

    if (entry) {
      return {
        short: entry.short,
        long: entry.long,
        timeZone,
        offset,
        isWhitelisted: true,
      };
    }
    return {
      short: offset,
      long: offset,
      timeZone,
      offset,
      isWhitelisted: false,
    };
  } catch {
    return { ...GMT_LABEL, isWhitelisted: false };
  }
}
