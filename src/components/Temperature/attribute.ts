/**
 * The `<html>` unit attribute — the flash-free rendering channel.
 *
 * The pre-paint bootstrap sets `data-temp-unit` on the document element before
 * first paint. Components render both units and use CSS keyed off this attribute
 * to show exactly one, so prerendered markup never flashes the wrong unit (the
 * same technique dark-mode themes use). Updating the attribute on toggle swaps
 * every rendered temperature instantly, with no per-node JS work.
 */
import { DEFAULT_CONFIG } from './config';
import { isTemperatureUnit, type TemperatureUnit } from './units';

/** Read the unit from the `<html>` attribute, or null if unset/invalid. */
export function readUnitAttribute(
  attribute: string = DEFAULT_CONFIG.attribute
): TemperatureUnit | null {
  if (typeof document === 'undefined') return null;
  const value = document.documentElement.getAttribute(attribute);
  return isTemperatureUnit(value) ? value : null;
}

/** Write the unit to the `<html>` attribute (no-op during SSR). */
export function writeUnitAttribute(
  unit: TemperatureUnit,
  attribute: string = DEFAULT_CONFIG.attribute
): void {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute(attribute, unit);
}
