import type { ScrollyVideoState } from './types';

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

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  delay?: number
): (...args: Parameters<T>) => void;
export function isScrollPositionAtTarget(
  targetScrollPosition: number | null,
  threshold?: number
): boolean;
function constrain(n: number, low: number, high: number): number;
export function map(
  n: number,
  start1: number,
  stop1: number,
  start2: number,
  stop2: number,
  withinBounds?: boolean
): number;
export function flattenObject(
  obj: ScrollyVideoState
): FlattenedScrollyVideoState;
