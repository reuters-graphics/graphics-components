import { UAParser } from 'ua-parser-js';
import videoDecoder from './videoDecoder';
import { debounce, isScrollPositionAtTarget, map, constrain } from './utils';
import { createComponentState, type ScrollerVideoState } from './state.svelte';

interface ScrollerVideoArgs {
  src?: string;
  scrollerVideoContainer: HTMLElement | string;
  objectFit?: string;
  sticky?: boolean;
  full?: boolean;
  trackScroll?: boolean;
  lockScroll?: boolean;
  transitionSpeed?: number;
  frameThreshold?: number;
  useWebCodecs?: boolean;
  onReady?: () => void;
  onChange?: (percentage?: number) => void;
  debug?: boolean;
  autoplay?: boolean;
  setVideoPercentage?: (
    percentage: number,
    options?: TransitionOptions
  ) => void;
  resize?: () => void;
}

export interface TransitionOptions {
  jump: boolean;
  transitionSpeed?: number;
  easing?: ((progress: number) => number) | null;
  autoplay?: boolean;
}

/**
 * ScrollerVideo class for scroll-driven or programmatic video playback with Svelte integration.
 */
class ScrollerVideo {
  /**
   * The container element for the video or canvas.
   * @type {HTMLElement | null}
   */
  container: HTMLElement | null;
  /**
   * The original container argument (element or string ID).
   * @type {Element | string | undefined}
   */
  scrollerVideoContainer: Element | string | undefined;
  /**
   * Video source URL.
   * @type {string}
   */
  src: string;
  /**
   * Speed of transitions.
   * @type {number}
   */
  transitionSpeed: number;
  /**
   * Threshold for frame transitions.
   * @type {number}
   */
  frameThreshold: number;
  /**
   * Whether to use WebCodecs for decoding.
   * @type {boolean}
   */
  useWebCodecs: boolean;
  /**
   * CSS object-fit property for video/canvas.
   * @type {string}
   */
  objectFit: string;
  /**
   * Whether to use sticky positioning.
   * @type {boolean}
   */
  sticky: boolean;
  /**
   * Whether to track scroll position.
   * @type {boolean}
   */
  trackScroll: boolean;
  /**
   * Callback when ready.
   * @type {() => void}
   */
  onReady: () => void;
  /**
   * Callback on scroll percentage change.
   * @type {(percentage?: number) => void}
   */
  onChange: (percentage?: number) => void;
  /**
   * Enable debug logging.
   * @type {boolean}
   */
  debug: boolean;
  /**
   * Enable autoplay.
   * @type {boolean}
   */
  autoplay: boolean;
  /**
   * The HTML video element.
   * @type {HTMLVideoElement | undefined}
   */
  video: HTMLVideoElement | undefined;
  /**
   * Current scroll/video percentage (0-1).
   * @type {number}
   */
  videoPercentage: number;
  /**
   * True if browser is Safari.
   * @type {boolean}
   */
  isSafari: boolean;
  /**
   * Current video time in seconds.
   * @type {number}
   */
  currentTime: number;
  /**
   * Target video time in seconds.
   * @type {number}
   */
  targetTime: number;
  /**
   * Canvas for rendering frames (if using WebCodecs).
   * @type {HTMLCanvasElement | null}
   */
  canvas: HTMLCanvasElement | null;
  /**
   * 2D context for the canvas.
   * @type {CanvasRenderingContext2D | null}
   */
  context: CanvasRenderingContext2D | null;
  /**
   * Decoded video frames (if using WebCodecs).
   * @type {ImageBitmap[] | null}
   */
  frames: ImageBitmap[] | null;
  /**
   * Video frame rate.
   * @type {number}
   */
  frameRate: number;
  /**
   * Target scroll position in pixels, if set.
   * @type {number | null}
   */
  targetScrollPosition: number | null = null;
  /**
   * Current frame index (if using WebCodecs).
   * @type {number}
   */
  currentFrame: number;
  /**
   * True if using WebCodecs for decoding.
   * @type {boolean}
   */
  usingWebCodecs: boolean;
  /**
   * Total video duration in seconds.
   * @type {number}
   */
  totalTime: number;
  /**
   * RequestAnimationFrame ID for transitions.
   * @type {number | null}
   */
  transitioningRaf: number | null;
  /**
   * State object for component-level state.
   * @type {ScrollerVideoState}
   */
  componentState: ScrollerVideoState;
  /**
   * Function to update scroll percentage (set in constructor).
   * @type {((jump: boolean) => void) | undefined}
   */
  updateScrollPercentage: ((jump: boolean) => void) | undefined;
  /**
   * Function to handle resize events (set in constructor).
   * @type {(() => void) | undefined}
   */
  resize: (() => void) | undefined;

  /**
   * Creates a new ScrollerVideo instance.
   * @param {ScrollerVideoArgs} args - The arguments for initialization.
   */
  constructor({
    src = 'https://scrollyvideo.js.org/goldengate.mp4',
    scrollerVideoContainer,
    objectFit = 'cover',
    sticky = true,
    full = true,
    trackScroll = true,
    lockScroll = true,
    transitionSpeed = 8,
    frameThreshold = 0.1,
    useWebCodecs = true,
    onReady = () => {},
    onChange = (_percentage?: number) => {},
    debug = false,
    autoplay = false,
  }: ScrollerVideoArgs) {
    this.src = src;
    this.scrollerVideoContainer = scrollerVideoContainer;
    this.objectFit = objectFit;
    this.sticky = sticky;
    this.trackScroll = trackScroll;
    this.transitionSpeed = transitionSpeed;
    this.frameThreshold = frameThreshold;
    this.useWebCodecs = useWebCodecs;
    this.onReady = onReady;
    this.onChange = onChange;
    this.debug = debug;
    this.autoplay = autoplay;
    this.videoPercentage = 0;
    this.isSafari = false;
    this.currentTime = 0;
    this.targetTime = 0;
    this.canvas = null;
    this.context = null;
    this.container = null;
    this.frames = null;
    this.frameRate = 0;
    this.currentTime = 0; // Saves the currentTime of the video, synced with this.video.currentTime
    this.targetTime = 0; // The target time before a transition happens
    this.canvas = null; // The canvas for drawing the frames decoded by webCodecs
    this.context = null; // The canvas context
    this.frames = []; // The frames decoded by webCodecs
    this.frameRate = 0; // Calculation of frameRate so we know which frame to paint
    this.currentFrame = 0;
    this.videoPercentage = 0;
    this.usingWebCodecs = false; // Whether we are using webCodecs
    this.totalTime = 0; // The total time of the video, used for calculating percentage
    this.transitioningRaf = null;
    this.componentState = createComponentState();

    this.componentState.willAutoPlay = autoplay;

    // Make sure that we have a DOM
    if (typeof document !== 'object') {
      console.error('ScrollerVideo must be initiated in a DOM context');
      return;
    }

    // Make sure the basic arguments are set for scrollervideo
    if (!scrollerVideoContainer) {
      console.error('scrollerVideoContainer must be a valid DOM object');
      return;
    }
    if (!src) {
      console.error('Must provide valid video src to ScrollerVideo');
      return;
    }

    // Save the container. If the container is a string we get the element

    if (scrollerVideoContainer && scrollerVideoContainer instanceof HTMLElement)
      this.container = scrollerVideoContainer;
    // otherwise it should better be an element
    else if (typeof scrollerVideoContainer === 'string') {
      this.container = document.getElementById(scrollerVideoContainer) || null;
      if (!this.container)
        throw new Error('scrollerVideoContainer must be a valid DOM object');
    } else {
      throw new Error('scrollerVideoContainer must be a valid DOM object');
    }

    // Create the initial video object. Even if we are going to use webcodecs,
    // we start with a paused video object

    this.video = document.createElement('video');
    this.video.src = src;
    this.video.preload = 'auto';
    this.video.tabIndex = 0;
    this.video.preload = 'auto';
    this.video.playsInline = true;
    this.video.muted = true;
    this.video.pause();
    this.video.load();

    this.video.addEventListener(
      'canplaythrough',
      () => {
        this.onReady();
        if (this.autoplay && !this.useWebCodecs) {
          this.autoplayScroll();
        }
      },
      { once: true }
    );

    // Start the video percentage at 0
    this.videoPercentage = 0;

    // Adds the video to the container
    this.container.appendChild(this.video);

    // Setting CSS properties for sticky
    if (sticky) {
      this.container.style.display = 'block';
      this.container.style.position = 'sticky';
      this.container.style.top = '0';
    }

    // Setting CSS properties for full
    if (full) {
      this.container.style.width = '100%';
      this.container.style.height = '100svh';
      this.container.style.overflow = 'hidden';
    }

    // Setting CSS properties for cover
    if (objectFit) this.setCoverStyle(this.video);

    // Detect webkit (safari), because webkit requires special attention
    const browserEngine = new UAParser().getEngine();

    this.isSafari = browserEngine.name === 'WebKit';
    if (debug && this.isSafari) console.info('Safari browser detected');

    const debouncedScroll = debounce(() => {
      window.requestAnimationFrame(() => {
        this.setScrollPercent(this.videoPercentage);
      });
    }, 100);

    // Add scroll listener for responding to scroll position
    this.updateScrollPercentage = (jump = false) => {
      // Used for internally setting the scroll percentage based on built-in listeners
      let containerBoundingClientRect;
      if (
        this.container &&
        this.container.parentNode &&
        (this.container.parentNode as Element).getBoundingClientRect
      ) {
        containerBoundingClientRect = (
          this.container.parentNode as Element
        ).getBoundingClientRect();
      } else {
        if (this.debug) {
          console.error(
            'ScrollerVideo: container or parentNode is null or invalid.'
          );
        }
        return;
      }

      // Calculate the current scroll percent of the video
      let scrollPercent =
        -containerBoundingClientRect.top /
        (containerBoundingClientRect.height - window.innerHeight);

      // if autplay, trim the playing time to last locked video position
      if (this.componentState.autoplayProgress > 0) {
        scrollPercent = map(
          scrollPercent,
          0,
          1,
          this.componentState.autoplayProgress,
          1
        );
      }

      if (this.debug) {
        console.info('ScrollerVideo scrolled to', scrollPercent);
      }

      // toggle autoplaying state on manual intervention
      if (this.componentState.isAutoPlaying && this.frames) {
        if (this.debug) console.warn('Stopping autoplay due to manual scroll');

        if (this.usingWebCodecs) {
          this.componentState.autoplayProgress = parseFloat(
            (this.currentFrame / this.frames.length).toFixed(4)
          );
        } else {
          this.componentState.autoplayProgress = parseFloat(
            (this.currentTime / this.totalTime).toFixed(4)
          );
        }

        this.componentState.isAutoPlaying = false;
      }

      this.videoPercentage = scrollPercent;

      if (this.targetScrollPosition == null) {
        this.setTargetTimePercent(scrollPercent, { jump });
        this.onChange(scrollPercent);
      } else if (isScrollPositionAtTarget(this.targetScrollPosition)) {
        this.targetScrollPosition = null;
      } else if (lockScroll && this.targetScrollPosition != null) {
        debouncedScroll();
      }

      this.updateDebugInfo();
    };

    // Add our event listeners for handling changes to the window or scroll
    if (this.trackScroll) {
      window.addEventListener('scroll', () => {
        if (this.updateScrollPercentage) {
          this.updateScrollPercentage(false);
        }
      });

      // Set the initial scroll percentage
      this.video.addEventListener(
        'loadedmetadata',
        () => {
          if (this.updateScrollPercentage) {
            this.updateScrollPercentage(true);
          }
          if (this.video) {
            this.totalTime = this.video.duration;
          }
          this.setCoverStyle(this.canvas || this.video);
        },
        { once: true }
      );
    } else {
      this.video.addEventListener(
        'loadedmetadata',
        () => {
          this.setTargetTimePercent(0, { jump: true });
          if (this.video) {
            this.totalTime = this.video.duration;
          }
          this.setCoverStyle(this.canvas || this.video);
        },
        { once: true }
      );
    }

    // Add resize function
    this.resize = () => {
      if (this.debug) console.info('ScrollerVideo resizing...');
      // On resize, we need to reset the cover style
      if (this.objectFit) this.setCoverStyle(this.canvas || this.video);
      // Then repaint the canvas, if we are in useWebcodecs
      this.paintCanvasFrame(Math.floor(this.currentTime * this.frameRate));
    };

    window.addEventListener('resize', this.resize);
    this.video.addEventListener('progress', this.resize);

    // Calls decode video to attempt webcodecs method
    this.decodeVideo();
    this.updateDebugInfo();
  }

  /**
   * Sets the currentTime of the video as a specified percentage of its total duration.
   *
   * @param percentage - The percentage of the video duration to set as the current time.
   * @param options - Configuration options for adjusting the video playback.
   *    - autoplay: boolean - If true, the video will start playing immediately after setting the percentage. Default is false.
   *    - jump: boolean - If true, the video currentTime will jump directly to the specified percentage. If false, the change will be animated over time.
   *    - transitionSpeed: number - Defines the speed of the transition when `jump` is false. Represents the duration of the transition in milliseconds. Default is 8.
   *    - easing: (progress: number) => number - A function that defines the easing curve for the transition. It takes the progress ratio (a number between 0 and 1) as an argument and returns the eased value, affecting the playback speed during the transition.
   */
  setVideoPercentage(
    percentage: number,
    options: TransitionOptions = { jump: false, transitionSpeed: 8 }
  ) {
    // Early termination if the video percentage is already at the percentage that is intended.
    if (this.videoPercentage === percentage) return;

    if (this.transitioningRaf) {
      window.cancelAnimationFrame(this.transitioningRaf);
    }

    this.videoPercentage = percentage;

    this.onChange(percentage);

    if (this.trackScroll && !options.autoplay) {
      this.setScrollPercent(percentage);
    }

    this.setTargetTimePercent(percentage, options);
  }

  /**
   * Sets the style of the video or canvas to "cover" its container.
   * @param {HTMLElement | HTMLCanvasElement | undefined} el - The element to style.
   */
  setCoverStyle(el: HTMLElement | HTMLCanvasElement | undefined): void {
    if (!el) {
      if (this.debug) console.warn('No element to set cover style on');
      return;
    }

    if (this.objectFit) {
      el.style.position = 'absolute';
      el.style.top = '50%';
      el.style.left = '50%';
      el.style.transform = 'translate(-50%, -50%)';
      // el.style.minWidth = '101%';
      // el.style.minHeight = '101%';

      // Gets the width and height of the container
      const { width: containerWidth, height: containerHeight } =
        this.container?.getBoundingClientRect() || { width: 0, height: 0 };

      let width = 0,
        height = 0;

      if (el instanceof HTMLVideoElement) {
        width = el.videoWidth;
        height = el.videoHeight;
      } else if (el instanceof HTMLCanvasElement) {
        width = el.width;
        height = el.height;
      }

      if (this.debug)
        console.info('Container dimensions:', [
          containerWidth,
          containerHeight,
        ]);
      if (this.debug) console.info('Element dimensions:', [width, height]);

      // Determines which axis needs to be 100% and which needs to be scaled
      if (this.objectFit == 'cover') {
        if (containerWidth / containerHeight > width / height) {
          el.style.width = '100%';
          el.style.height = 'auto';
        } else {
          el.style.height = '100%';
          el.style.width = 'auto';
        }
      } else if (this.objectFit == 'contain') {
        if (containerWidth / containerHeight > width / height) {
          el.style.height = '100%';
          el.style.width = 'auto';
        } else {
          el.style.width = '100%';
          el.style.height = 'auto';
        }
      }
    }
  }

  /**
   * Uses webCodecs to decode the video into frames.
   * @returns {Promise<void>} Resolves when decoding is complete.
   */
  async decodeVideo(): Promise<void> {
    if (!this.useWebCodecs) {
      if (this.debug)
        console.warn('Cannot perform video decode: `useWebCodes` disabled');

      return;
    }

    if (!this.src) {
      if (this.debug)
        console.warn('Cannot perform video decode: no `src` found');

      return;
    }

    try {
      await videoDecoder(
        this.src,
        (frame) => {
          this.frames?.push(frame);
        },
        this.debug
      ).then((codec) => {
        this.usingWebCodecs = true;
        if (typeof codec == 'string') {
          this.componentState.framesData.codec = codec;
        }
      });
    } catch (error) {
      if (this.debug)
        console.error('Error encountered while decoding video', error);

      // Remove all decoded frames if a failure happens during decoding
      this.frames = [];

      // Force a video reload when videoDecoder fails
      this.video?.load();
    }

    // If no frames, something went wrong
    if (this.frames?.length === 0) {
      if (this.debug) console.error('No frames were received from webCodecs');

      this.onReady();
      return;
    }

    // Calculate the frameRate based on number of frames and the duration
    this.frameRate =
      this.frames && this.video ? this.frames.length / this.video.duration : 0;
    if (this.debug)
      console.info(
        'Received',
        this.frames?.length,
        'frames. Video frame rate:',
        this.frameRate
      );

    // Remove the video and add the canvas
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');

    // Hide the video and add the canvas to the container
    if (this.video) {
      this.video.style.display = 'none';
    }
    if (this.container) {
      this.container.appendChild(this.canvas);
    }
    if (this.objectFit) this.setCoverStyle(this.canvas);

    // Paint our first frame
    this.paintCanvasFrame(Math.floor(this.currentTime * this.frameRate));
    this.onReady();

    if (this.autoplay) this.autoplayScroll();
  }

  /**
   * Paints the frame to the canvas.
   * @param {number} frameNum - The frame index to paint.
   */
  paintCanvasFrame(frameNum: number): void {
    if (!this.frames) {
      if (this.debug) console.warn('No frames available to paint');
      return;
    }

    // Get the frame and paint it to the canvas
    const currFrame = this.frames[frameNum];
    this.currentFrame = frameNum;

    if (!this.canvas || !currFrame) {
      return;
    }

    if (this.debug) {
      console.info('Painting frame', frameNum);
    }

    // Make sure the canvas is scaled properly, similar to setCoverStyle
    this.canvas.width = currFrame.width;
    this.canvas.height = currFrame.height;
    const { width, height } = this.container?.getBoundingClientRect() || {
      width: 0,
      height: 0,
    };

    if (this.objectFit == 'cover') {
      if (width / height > currFrame.width / currFrame.height) {
        this.canvas.style.width = '100%';
        this.canvas.style.height = 'auto';
      } else {
        this.canvas.style.height = '100%';
        this.canvas.style.width = 'auto';
      }
    } else if (this.objectFit == 'contain') {
      if (width / height > currFrame.width / currFrame.height) {
        this.canvas.style.height = '100%';
        this.canvas.style.width = 'auto';
      } else {
        this.canvas.style.width = '100%';
        this.canvas.style.height = 'auto';
      }
    }

    // Draw the frame to the canvas context
    if (!this.context) {
      if (this.debug) console.warn('No canvas context available to paint');
      return;
    }

    this.context.drawImage(currFrame, 0, 0, currFrame.width, currFrame.height);
    this.updateDebugInfo();
  }

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
    transitionSpeed = this.transitionSpeed,
    easing = null,
  }: TransitionOptions) {
    if (!this.video) {
      console.warn('No video found');
      return;
    }

    if (this.debug) {
      console.info(
        'Transitioning targetTime:',
        this.targetTime,
        'currentTime:',
        this.currentTime
      );
    }

    const diff = this.targetTime - this.currentTime;
    const distance = Math.abs(diff);
    const duration = distance * 1000;
    const isForwardTransition = diff > 0;

    const tick = ({
      startCurrentTime,
      startTimestamp,
      timestamp,
    }: {
      startCurrentTime: number;
      startTimestamp: number;
      timestamp: number;
    }) => {
      if (!this.video) {
        console.warn('No video found during transition tick');
        return;
      }

      const progress = (timestamp - startTimestamp) / duration;

      // if frameThreshold is too low to catch condition Math.abs(this.targetTime - this.currentTime) < this.frameThreshold
      const hasPassedThreshold =
        isForwardTransition ?
          this.currentTime >= this.targetTime
        : this.currentTime <= this.targetTime;

      if (this.componentState.isAutoPlaying) {
        this.componentState.autoplayProgress = parseFloat(
          (this.currentTime / this.totalTime).toFixed(4)
        );
      }

      // If we are already close enough to our target, pause the video and return.
      // This is the base case of the recursive function
      if (
        isNaN(this.targetTime) ||
        // If the currentTime is already close enough to the targetTime
        Math.abs(this.targetTime - this.currentTime) < this.frameThreshold ||
        hasPassedThreshold
      ) {
        this.video?.pause();

        if (this.transitioningRaf) {
          cancelAnimationFrame(this.transitioningRaf);
          this.transitioningRaf = null;
        }

        return;
      }

      // Make sure we don't go out of time bounds
      if (this.targetTime > this.video.duration)
        this.targetTime = this.video.duration;
      if (this.targetTime < 0) this.targetTime = 0;

      // How far forward we need to transition
      const transitionForward = this.targetTime - this.currentTime;
      const easedProgress =
        easing && Number.isFinite(progress) ? easing(progress) : 0;
      const easedCurrentTime =
        isForwardTransition ?
          startCurrentTime +
          easedProgress * Math.abs(distance) * transitionSpeed
        : startCurrentTime -
          easedProgress * Math.abs(distance) * transitionSpeed;

      if (this.canvas) {
        if (jump) {
          // If jump, we go directly to the frame
          this.currentTime = this.targetTime;
        } else if (easedProgress) {
          this.currentTime = easedCurrentTime;
        } else {
          this.currentTime += transitionForward / (256 / transitionSpeed);
        }

        this.paintCanvasFrame(Math.floor(this.currentTime * this.frameRate));
      } else if (jump || this.isSafari || !isForwardTransition) {
        // We can't use a negative playbackRate, so if the video needs to go backwards,
        // We have to use the inefficient method of modifying currentTime rapidly to
        // get an effect.
        this.video.pause();

        if (easedProgress) {
          this.currentTime = easedCurrentTime;
        } else {
          this.currentTime += transitionForward / (64 / transitionSpeed);
        }

        // If jump, we go directly to the frame
        if (jump) {
          this.currentTime = this.targetTime;
        }

        this.video.currentTime = this.currentTime;
      } else {
        // Otherwise, we play the video and adjust the playbackRate to get a smoother
        // animation effect.
        const playbackRate = Math.max(
          Math.min(transitionForward * 4, transitionSpeed, 16),
          1
        );
        if (this.debug)
          console.info('ScrollerVideo playbackRate:', playbackRate);

        if (!isNaN(playbackRate)) {
          this.video.playbackRate = playbackRate;
          this.video.play();
        }
        // Set the currentTime to the video's currentTime
        this.currentTime = this.video.currentTime;
      }

      // Recursively calls ourselves until the animation is done.
      if (typeof requestAnimationFrame === 'function') {
        this.transitioningRaf = requestAnimationFrame((currentTimestamp) =>
          tick({
            startCurrentTime,
            startTimestamp,
            timestamp: currentTimestamp,
          })
        );
      }
    };

    if (typeof requestAnimationFrame === 'function') {
      this.transitioningRaf = requestAnimationFrame((startTimestamp) => {
        tick({
          startCurrentTime: this.currentTime,
          startTimestamp,
          timestamp: startTimestamp,
        });
      });
    }
  }

  /**
   * Sets the currentTime of the video as a specified percentage of its total duration.
   *
   * @param percentage - The percentage of the video duration to set as the current time.
   * @param options - Configuration options for adjusting the video playback.
   *    - jump: boolean - If true, the video currentTime will jump directly to the specified percentage. If false, the change will be animated over time.
   *    - transitionSpeed: number - Defines the speed of the transition when `jump` is false. Represents the duration of the transition in milliseconds. Default is 8.
   *    - easing: (progress: number) => number - A function that defines the easing curve for the transition. It takes the progress ratio (a number between 0 and 1) as an argument and returns the eased value, affecting the playback speed during the transition.
   */
  setTargetTimePercent(
    percentage: number,
    options: TransitionOptions = { jump: false, transitionSpeed: 8 }
  ) {
    const targetDuration =
      this.frames?.length && this.frameRate ?
        this.frames.length / this.frameRate
      : this.video?.duration || 0;
    // The time we want to transition to
    this.targetTime = Math.max(Math.min(percentage, 1), 0) * targetDuration;

    // If we are close enough, return early
    if (
      !options.jump &&
      Math.abs(this.currentTime - this.targetTime) < this.frameThreshold
    )
      return;

    // Play the video if we are in video mode
    if (!this.canvas && !this.video?.paused) this.video?.play();

    this.transitionToTargetTime(options);
  }

  /**
   * Simulate trackScroll programmatically (scrolls on page by percentage of video).
   * @param {number} percentage - The percentage of the video to scroll to.
   */
  setScrollPercent(percentage: number) {
    if (!this.trackScroll) {
      console.warn('`setScrollPercent` requires enabled `trackScroll`');
      return;
    }

    const parent = this.container?.parentNode;
    let top = 0,
      height = 0;

    if (parent && parent instanceof Element) {
      const rect = parent.getBoundingClientRect();
      top = rect.top;
      height = rect.height;
    }

    const startPoint = top + window.pageYOffset;

    const containerHeightInViewport = height - window.innerHeight;
    const targetPosition = startPoint + containerHeightInViewport * percentage;

    if (isScrollPositionAtTarget(targetPosition)) {
      this.targetScrollPosition = null;
    } else {
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      this.targetScrollPosition = targetPosition;
    }
  }

  /**
   * Call to destroy this ScrollerVideo object.
   */
  destroy() {
    if (this.debug) console.info('Destroying ScrollerVideo');

    if (this.trackScroll && this.updateScrollPercentage)
      window.removeEventListener('scroll', () => this.updateScrollPercentage);

    if (this.resize) {
      window.removeEventListener('resize', this.resize);
    }

    // Clear component
    if (this.container) this.container.innerHTML = '';
  }

  /**
   * Autoplay the video by scrolling to the end.
   */
  autoplayScroll() {
    this.setVideoPercentage(1, {
      jump: false,
      transitionSpeed: this.totalTime * 0.1,
      easing: (i) => i,
      autoplay: true,
    });
    this.componentState.isAutoPlaying = true;
  }

  /**
   * Updates debug information in the component state.
   */
  updateDebugInfo() {
    this.componentState.generalData.src = this.src;
    this.componentState.generalData.videoPercentage = constrain(
      parseFloat(this.videoPercentage.toFixed(4)),
      0,
      1
    );
    this.componentState.generalData.frameRate = parseFloat(
      this.frameRate.toFixed(2)
    );
    this.componentState.generalData.currentTime = parseFloat(
      this.currentTime.toFixed(4)
    );
    this.componentState.generalData.totalTime = parseFloat(
      this.totalTime.toFixed(4)
    );
    this.componentState.usingWebCodecs = this.usingWebCodecs;
    this.componentState.framesData.currentFrame = this.currentFrame;
    this.componentState.framesData.totalFrames = this.frames?.length || 0;
  }
}
export default ScrollerVideo;
