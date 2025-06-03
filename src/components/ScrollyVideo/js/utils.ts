import type { ScrollyVideoState } from './state.svelte';

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

export const isScrollPositionAtTarget = (
  targetScrollPosition: number,
  threshold: number = 1
) => {
  const currentScrollPosition = window.pageYOffset;
  const difference = Math.abs(currentScrollPosition - targetScrollPosition);

  return difference < threshold;
};

function constrain(n: number, low: number, high: number): number {
  return Math.max(Math.min(n, high), low);
}

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
