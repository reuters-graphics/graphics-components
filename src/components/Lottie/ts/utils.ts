import type { DotLottie } from '@lottiefiles/dotlottie-web';
import type { LottieState } from './lottieState.svelte';
import type { ContainerWidth } from '$lib/components/@types/global';

function constrain(n: number, low: number, high: number) {
  return Math.max(Math.min(n, high), low);
}

export function map(
  n: number,
  start1: number,
  stop1: number,
  start2: number,
  stop2: number,
  withinBounds: boolean = true
) {
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
 * Syncs the lottie player state with the component's lottie state
 */
export function syncLottieState(
  lottiePlayer: DotLottie,
  lottieState: LottieState
) {
  lottieState.currentFrame = lottiePlayer.currentFrame;
  lottieState.totalFrames = lottiePlayer.totalFrames;
  lottieState.duration = lottiePlayer.duration;
  lottieState.loop = lottiePlayer.loop;
  lottieState.speed = lottiePlayer.speed;
  lottieState.loopCount = lottiePlayer.loopCount;
  lottieState.mode = lottiePlayer.mode;
  lottieState.isPaused = lottiePlayer.isPaused;
  lottieState.isPlaying = lottiePlayer.isPlaying;
  lottieState.isStopped = lottiePlayer.isStopped;
  lottieState.isLoaded = lottiePlayer.isLoaded;
  lottieState.isFrozen = lottiePlayer.isFrozen;
  lottieState.segment = lottiePlayer.segment ?? null;
  lottieState.autoplay = lottiePlayer.autoplay ?? false;
  lottieState.layout = lottiePlayer.layout ?? null;
  lottieState.activeThemeId = lottiePlayer.activeThemeId ?? null;
  lottieState.marker = lottiePlayer.marker ?? undefined;
}

/**
 * Gets marker info by name
 */
export function getMarkerByName(lottiePlayer: DotLottie, markerName: string) {
  return lottiePlayer.markers().find((m) => m.name === markerName);
}

/**
 * Gets the start and end frames for a marker
 */
export function getMarkerRange(
  lottiePlayer: DotLottie,
  markerName: string
): [number, number] {
  const marker = getMarkerByName(lottiePlayer, markerName);
  const start = marker?.time ?? 0;
  const end = start + (marker?.duration ?? 0);
  return [start, end];
}

/**
 * Calculates target frame based on progress and mode
 */
export function calculateTargetFrame(
  progress: number,
  mode: string,
  start: number,
  end: number
): number {
  const adjustedProgress =
    mode === 'reverse' || mode === 'reverse-bounce' ? 1 - progress : progress;
  return map(adjustedProgress, 0, 1, start, end);
}

/**
 * Determines if mode is reverse
 */
export function isReverseMode(mode: string): boolean {
  return mode === 'reverse' || mode === 'reverse-bounce';
}

/**
 * Creates render config with optimized defaults
 */
export function createRenderConfig() {
  return {
    autoResize: true,
    devicePixelRatio:
      window.devicePixelRatio > 1 ? window.devicePixelRatio * 0.75 : 1,
    freezeOnOffscreen: true,
  };
}

/**
 * Checks if a value is null or undefined (empty marker check)
 */
export function isNullish(value: unknown): boolean {
  return value === null || value === undefined || value === '';
}

/**
 * Checks if a value is of type ContainerWidth
 */
export function isContainerWidth(string: string): string is ContainerWidth {
  return (
    string === 'narrower' ||
    string === 'narrow' ||
    string === 'normal' ||
    string === 'wide' ||
    string === 'wider' ||
    string === 'widest' ||
    string === 'fluid'
  );
}
