/**
 * Browser-only IANA timezone detection.
 *
 * `Intl.DateTimeFormat().resolvedOptions().timeZone` reports whatever machine
 * runs it — during SSR that's the *server's* OS timezone, not the reader's.
 * The `window` guard makes this a deliberate no-op off the client so callers
 * never mistake one for the other.
 */
export function detectLocalTimeZone(): string | undefined {
  if (typeof window === 'undefined') return undefined;
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || undefined;
  } catch {
    return undefined;
  }
}
