import type { ScrollyVideoState } from './state.svelte';

/**
 * Flattened version of ScrollyVideoState for easier access to all properties.
 * @typedef {Object} FlattenedScrollyVideoState
 * @property {string} src - Video source URL.
 * @property {number} videoPercentage - Current video percentage (0-1).
 * @property {number} frameRate - Video frame rate.
 * @property {number} currentTime - Current video time in seconds.
 * @property {number} totalTime - Total video duration in seconds.
 * @property {boolean} usingWebCodecs - Whether WebCodecs is used.
 * @property {string} codec - Video codec string.
 * @property {number} currentFrame - Current frame index.
 * @property {number} totalFrames - Total number of frames.
 * @property {boolean} isAutoPlaying - Whether video is autoplaying.
 * @property {number} autoplayProgress - Progress of autoplay (0-1).
 */
type FlattenedScrollyVideoState = {
  src: string;
  videoPercentage: number;
  frameRate: number;
  currentTime: number;
  totalTime: number;
  usingWebCodecs: boolean;
  codec: string;
  currentFrame: number;
  totalFrames: number;
  isAutoPlaying: boolean;
  autoplayProgress: number;
};

/**
 * Returns a debounced version of the given function.
 * @template T
 * @param {T} func - The function to debounce.
 * @param {number} [delay=0] - The debounce delay in milliseconds.
 * @returns {(...args: Parameters<T>) => void} The debounced function.
 */
export function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  delay = 0
) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

/**
 * Checks if the current scroll position is at the target position within a threshold.
 * @param {number} targetScrollPosition - The target scroll position in pixels.
 * @param {number} [threshold=1] - The allowed threshold in pixels.
 * @returns {boolean} True if the current scroll position is within the threshold of the target.
 */
export const isScrollPositionAtTarget = (
  targetScrollPosition: number,
  threshold: number = 1
) => {
  const currentScrollPosition = window.pageYOffset;
  const difference = Math.abs(currentScrollPosition - targetScrollPosition);

  return difference < threshold;
};

/**
 * Constrains a number between a lower and upper bound.
 * @param {number} n - The number to constrain.
 * @param {number} low - The lower bound.
 * @param {number} high - The upper bound.
 * @returns {number} The constrained value.
 */
function constrain(n: number, low: number, high: number): number {
  return Math.max(Math.min(n, high), low);
}

/**
 * Maps a number from one range to another.
 * @param {number} n - The number to map.
 * @param {number} start1 - Lower bound of the value's current range.
 * @param {number} stop1 - Upper bound of the value's current range.
 * @param {number} start2 - Lower bound of the value's target range.
 * @param {number} stop2 - Upper bound of the value's target range.
 * @param {boolean} [withinBounds=true] - Whether to constrain the result within the target range.
 * @returns {number} The mapped value.
 */
export function map(
  n: number,
  start1: number,
  stop1: number,
  start2: number,
  stop2: number,
  withinBounds: boolean = true
): number {
  const newval = ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  if (!withinBounds) {
    return newval;
  }
  if (start2 < stop2) {
    return constrain(newval, start2, stop2);
  } else {
    return constrain(newval, stop2, start2);
  }
}

/**
 * Flattens a ScrollyVideoState object into a single-level object for easier access.
 * @param {ScrollyVideoState} obj - The state object to flatten.
 * @returns {FlattenedScrollyVideoState} The flattened state object.
 */
export function flattenObject(
  obj: ScrollyVideoState
): FlattenedScrollyVideoState {
  const result: { [key: string]: unknown } = {};

  function flatten(current: string | unknown[] | object, property: string) {
    if (Object(current) !== current) {
      result[property] = current;
    } else if (Array.isArray(current)) {
      for (let i = 0, l = current.length; i < l; i++) {
        flatten(current[i], property + '[' + i + ']');
        if (l === 0) {
          result[property] = [];
        }
      }
    } else if (typeof current === 'object') {
      let isEmpty = true;
      for (const p in current) {
        isEmpty = false;
        flatten(
          (current as { [key: string]: string | object | unknown[] })[p],
          p
        );
      }
      if (isEmpty && property) {
        result[property] = {};
      }
    }
  }

  flatten(obj, '');
  return result as FlattenedScrollyVideoState;
}
