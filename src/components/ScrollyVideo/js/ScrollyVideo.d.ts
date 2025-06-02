/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
export default ScrollyVideo;
/**
 *   ____                 _ _     __     ___     _
 *  / ___|  ___ _ __ ___ | | |_   \ \   / (_) __| | ___  ___
 *  \___ \ / __| '__/ _ \| | | | | \ \ / /| |/ _` |/ _ \/ _ \
 *   ___) | (__| | | (_) | | | |_| |\ V / | | (_| |  __/ (_) |
 *  |____/ \___|_|  \___/|_|_|\__, | \_/  |_|\__,_|\___|\___/
 *                            |___/
 *
 * Responsive scrollable videos without obscure video encoding requirements.
 * Compatible with React, Svelte, Vue, and plain HTML.
 */
declare class ScrollyVideo {
  constructor({
    src,
    scrollyVideoContainer,
    objectFit,
    sticky,
    full,
    trackScroll,
    lockScroll,
    transitionSpeed,
    frameThreshold,
    useWebCodecs,
    onReady,
    onChange,
    debug,
    autoplay,
  }: {
    src?: any;
    scrollyVideoContainer: any;
    objectFit?: string;
    sticky?: boolean;
    full?: boolean;
    trackScroll?: boolean;
    lockScroll?: boolean;
    transitionSpeed?: number;
    frameThreshold?: number;
    useWebCodecs?: boolean;
    onReady?: () => void;
    onChange?: () => void;
    debug?: boolean;
    autoplay?: boolean;
  });
  container: Element;
  src: any;
  transitionSpeed: number;
  frameThreshold: number;
  useWebCodecs: boolean;
  objectFit: string;
  sticky: boolean;
  trackScroll: boolean;
  onReady: () => void;
  onChange: () => void;
  debug: boolean;
  autoplay: boolean;
  video: HTMLVideoElement;
  videoPercentage: number;
  isSafari: boolean;
  currentTime: number;
  targetTime: number;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  frames: any[];
  frameRate: number;
  currentFrameNumber: number;
  updateScrollPercentage: (jump: any) => void;
  targetScrollPosition: any;
  resize: () => void;
  /**
   * Sets the currentTime of the video as a specified percentage of its total duration.
   *
   * @param percentage - The percentage of the video duration to set as the current time.
   * @param options - Configuration options for adjusting the video playback.
   *    - jump: boolean - If true, the video currentTime will jump directly to the specified percentage. If false, the change will be animated over time.
   *    - transitionSpeed: number - Defines the speed of the transition when `jump` is false. Represents the duration of the transition in milliseconds. Default is 8.
   *    - easing: (progress: number) => number - A function that defines the easing curve for the transition. It takes the progress ratio (a number between 0 and 1) as an argument and returns the eased value, affecting the playback speed during the transition.
   */
  setVideoPercentage(percentage: any, options?: {}): void;
  /**
   * Sets the style of the video or canvas to "cover" it's container
   *
   * @param el
   */
  setCoverStyle(el: any): void;
  /**
   * Uses webCodecs to decode the video into frames
   */
  decodeVideo(): Promise<void>;
  /**
   * Paints the frame of to the canvas
   *
   * @param frameNum
   */
  paintCanvasFrame(frameNum: any): void;
  /**
   * Transitions the video or the canvas to the proper frame.
   *
   * @param options - Configuration options for adjusting the video playback.
   *    - jump: boolean - If true, the video currentTime will jump directly to the specified percentage. If false, the change will be animated over time.
   *    - transitionSpeed: number - Defines the speed of the transition when `jump` is false. Represents the duration of the transition in milliseconds. Default is 8.
   *    - easing: (progress: number) => number - A function that defines the easing curve for the transition. It takes the progress ratio (a number between 0 and 1) as an argument and returns the eased value, affecting the playback speed during the transition.
   */
  transitionToTargetTime({
    jump,
    transitionSpeed,
    easing,
  }: {
    jump: any;
    transitionSpeed?: number;
    easing?: any;
  }): void;
  transitioningRaf: number;
  /**
   * Sets the currentTime of the video as a specified percentage of its total duration.
   *
   * @param percentage - The percentage of the video duration to set as the current time.
   * @param options - Configuration options for adjusting the video playback.
   *    - jump: boolean - If true, the video currentTime will jump directly to the specified percentage. If false, the change will be animated over time.
   *    - transitionSpeed: number - Defines the speed of the transition when `jump` is false. Represents the duration of the transition in milliseconds. Default is 8.
   *    - easing: (progress: number) => number - A function that defines the easing curve for the transition. It takes the progress ratio (a number between 0 and 1) as an argument and returns the eased value, affecting the playback speed during the transition.
   */
  setTargetTimePercent(percentage: any, options?: {}): void;
  /**
   * Simulate trackScroll programmatically (scrolls on page by percentage of video)
   *
   * @param percentage
   */
  setScrollPercent(percentage: any): void;
  /**
   * Call to destroy this ScrollyVideo object
   */
  destroy(): void;
  /**
   * Call to initiate autoplay
   */
  autoplayScroll(): void;
}
