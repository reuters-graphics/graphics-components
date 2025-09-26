import type { Component } from 'svelte';
import type { TransitionOptions } from '../ScrollerVideo/ts/ScrollerVideo.js';
import type { ScrollerVideoState } from '../ScrollerVideo/ts/state.svelte.js';
/**
 * Used for the list of <option> tags nested in a <select> input.
 */
export type Option = {
  value: string;
  text: string;
};

/**
 * Used for any props that restrict width of a container to one of pre-fab widths.
 */
export type ContainerWidth =
  | 'narrower'
  | 'narrow'
  | 'normal'
  | 'wide'
  | 'wider'
  | 'widest'
  | 'fluid';

/**
 * Used to set headline class fluid size from text-2xl to text-6xl
 */
export type HeadlineSize = 'small' | 'normal' | 'big' | 'bigger' | 'biggest';
/**
 * A step in the Scroller component.
 */
export interface ScrollerStep {
  /**
   * A background component
   */
  background: Component | undefined;
  /**
   * Optional props for background component
   */
  backgroundProps?: object;
  /**
   * A component or markdown-formatted string
   */
  foreground: Component | string;
  /**
   * Optional props for foreground component
   */
  foregroundProps?: object;
  /**
   * Optional alt text for the background, read aloud after the foreground text. You can add it to each step or just to the first step to describe the entire scroller graphic.
   */
  altText?: string;
}

export type ForegroundPosition =
  | 'middle'
  | 'left'
  | 'right'
  | 'left opposite'
  | 'right opposite';

export type ScrollerVideoForegroundPosition =
  | 'top center'
  | 'top left'
  | 'top right'
  | 'bottom center'
  | 'bottom left'
  | 'bottom right'
  | 'center center'
  | 'center left'
  | 'center right';

export type ScrollerLottieForegroundPosition =
  | 'top center'
  | 'top left'
  | 'top right'
  | 'bottom center'
  | 'bottom left'
  | 'bottom right'
  | 'center center'
  | 'center left'
  | 'center right';

// Complete ScrollerVideo instance interface
export interface ScrollerVideoInstance {
  // Properties
  container: HTMLElement | null;
  scrollerVideoContainer: Element | string | undefined;
  src: string;
  transitionSpeed: number;
  frameThreshold: number;
  useWebCodecs: boolean;
  objectFit: string;
  sticky: boolean;
  trackScroll: boolean;
  onReady: () => void;
  onChange: (percentage?: number) => void;
  debug: boolean;
  autoplay: boolean;
  video: HTMLVideoElement | undefined;
  videoPercentage: number;
  isSafari: boolean;
  currentTime: number;
  targetTime: number;
  canvas: HTMLCanvasElement | null;
  context: CanvasRenderingContext2D | null;
  frames: ImageBitmap[] | null;
  frameRate: number;
  targetScrollPosition: number | null;
  currentFrame: number;
  usingWebCodecs: boolean;
  totalTime: number;
  transitioningRaf: number | null;
  componentState: ScrollerVideoState;

  // Methods
  updateScrollPercentage: ((jump: boolean) => void) | undefined;
  resize: (() => void) | undefined;
  setVideoPercentage(percentage: number, options?: TransitionOptions): void;
  setCoverStyle(el: HTMLElement | HTMLCanvasElement | undefined): void;
  decodeVideo(): Promise<void>;
  paintCanvasFrame(frameNum: number): void;
  transitionToTargetTime(options: TransitionOptions): void;
  setTargetTimePercent(percentage: number, options?: TransitionOptions): void;
  setScrollPercent(percentage: number): void;
  destroy(): void;
  autoplayScroll(): void;
  updateDebugInfo(): void;
}
