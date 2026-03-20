/**
 * Clamp a number `n` to the inclusive range [low, high].
 */
export function clamp(n: number, low: number, high: number): number {
  // Ensure low <= high even if caller swaps them
  const min = Math.min(low, high);
  const max = Math.max(low, high);
  return Math.max(min, Math.min(n, max));
}

/**
 * Linearly maps a value `n` from range [inStart, inEnd] to [outStart, outEnd].
 *
 * @param {number} n           - The input value to map.
 * @param {number} inStart     - Input range start.
 * @param {number} inEnd       - Input range end.
 * @param {number} outStart    - Output range start.
 * @param {number} outEnd      - Output range end.
 * @param {boolean} withinBounds - If true, clamp the mapped value to [outStart, outEnd].
 * @returns {number}           - Mapped (and optionally clamped) value.
 */
export function map(
  n: number,
  inStart: number,
  inEnd: number,
  outStart: number,
  outEnd: number,
  withinBounds: boolean = true
): number {
  // Avoid division by zero: when input range is degenerate, return outStart
  const inSpan = inEnd - inStart;
  if (inSpan === 0) {
    return withinBounds ? clamp(outStart, outStart, outEnd) : outStart;
  }

  const t = (n - inStart) / inSpan; // normalized 0..1 in input space (or beyond)
  const out = t * (outEnd - outStart) + outStart;

  return withinBounds ? clamp(out, outStart, outEnd) : out;
}
