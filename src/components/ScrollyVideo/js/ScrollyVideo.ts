import { UAParser } from 'ua-parser-js';
import videoDecoder from './videoDecoder';
import { debounce, isScrollPositionAtTarget, map } from './utils';
import { scrollyVideoState } from './state.svelte';

interface ScrollyVideoArgs {
  src?: string;
  scrollyVideoContainer: HTMLElement | string;
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
}

interface TransitionOptions {
  jump: boolean;
  transitionSpeed?: number;
  easing?: ((progress: number) => number) | null;
  autoplay?: boolean;
}

class ScrollyVideo {
  container: HTMLElement | null;
  scrollyVideoContainer: Element | string | undefined;
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
  targetScrollPosition: number | null = null;
  currentFrame: number;
  usingWebCodecs: boolean; // Whether we are using webCodecs
  totalTime: number; // The total time of the video, used for calculating percentage
  transitioningRaf: number | null;

  updateScrollPercentage: ((jump: boolean) => void) | undefined;
  resize: (() => void) | undefined;

  constructor({
    src = 'https://scrollyvideo.js.org/goldengate.mp4',
    scrollyVideoContainer,
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
  }: ScrollyVideoArgs) {
    this.src = src;
    this.scrollyVideoContainer = scrollyVideoContainer;
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

    // Make sure that we have a DOM
    if (typeof document !== 'object') {
      console.error('ScrollyVideo must be initiated in a DOM context');
      return;
    }

    // Make sure the basic arguments are set for scrollyvideo
    if (!scrollyVideoContainer) {
      console.error('scrollyVideoContainer must be a valid DOM object');
      return;
    }
    if (!src) {
      console.error('Must provide valid video src to ScrollyVideo');
      return;
    }

    // Save the container. If the container is a string we get the element

    if (scrollyVideoContainer && scrollyVideoContainer instanceof HTMLElement)
      this.container = scrollyVideoContainer;
    // otherwise it should better be an element
    else if (typeof scrollyVideoContainer === 'string') {
      this.container = document.getElementById(scrollyVideoContainer) || null;
      if (!this.container)
        throw new Error('scrollyVideoContainer must be a valid DOM object');
    } else {
      throw new Error('scrollyVideoContainer must be a valid DOM object');
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
            'ScrollyVideo: container or parentNode is null or invalid.'
          );
        }
        return;
      }

      // Calculate the current scroll percent of the video
      let scrollPercent =
        -containerBoundingClientRect.top /
        (containerBoundingClientRect.height - window.innerHeight);

      // if autplay, trim the playing time to last locked video position
      if (scrollyVideoState.autoplayProgress > 0) {
        scrollPercent = map(
          scrollPercent,
          0,
          1,
          scrollyVideoState.autoplayProgress,
          1
        );
      }

      if (this.debug) {
        console.info('ScrollyVideo scrolled to', scrollPercent);
      }

      // toggle autoplaying state on manual intervention
      if (scrollyVideoState.isAutoPlaying && this.frames) {
        if (this.debug) console.warn('Stopping autoplay due to manual scroll');

        if (this.usingWebCodecs) {
          scrollyVideoState.autoplayProgress = parseFloat(
            (this.currentFrame / this.frames.length).toFixed(4)
          );
        } else {
          scrollyVideoState.autoplayProgress = parseFloat(
            (this.currentTime / this.totalTime).toFixed(4)
          );
        }

        scrollyVideoState.isAutoPlaying = false;
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
      if (this.debug) console.info('ScrollyVideo resizing...');
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
  setVideoPercentage(percentage: number, options: TransitionOptions): void {
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
   * Sets the style of the video or canvas to "cover" it's container
   *
   * @param el
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
   * Uses webCodecs to decode the video into frames
   */
  async decodeVideo() {
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
      ).then(() => {
        this.usingWebCodecs = true;
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
   * Paints the frame of to the canvas
   *
   * @param frameNum
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

      if (scrollyVideoState.isAutoPlaying) {
        scrollyVideoState.autoplayProgress = this.currentTime / this.totalTime;
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
          console.info('ScrollyVideo playbackRate:', playbackRate);

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
   * Simulate trackScroll programmatically (scrolls on page by percentage of video)
   *
   * @param percentage
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
   * Call to destroy this ScrollyVideo object
   */
  destroy() {
    if (this.debug) console.info('Destroying ScrollyVideo');

    if (this.trackScroll && this.updateScrollPercentage)
      window.removeEventListener('scroll', () => this.updateScrollPercentage);

    if (this.resize) {
      window.removeEventListener('resize', this.resize);
    }

    // Clear component
    if (this.container) this.container.innerHTML = '';
  }

  autoplayScroll() {
    this.setVideoPercentage(1, {
      jump: false,
      transitionSpeed: this.totalTime * 0.1,
      easing: (i) => i,
      autoplay: true,
    });
    scrollyVideoState.isAutoPlaying = true;
  }

  updateDebugInfo() {
    scrollyVideoState.generalData.src = this.src;
    scrollyVideoState.generalData.videoPercentage = parseFloat(
      this.videoPercentage.toFixed(4)
    );
    scrollyVideoState.generalData.frameRate = parseFloat(
      this.frameRate.toFixed(2)
    );
    scrollyVideoState.generalData.currentTime = parseFloat(
      this.currentTime.toFixed(4)
    );
    scrollyVideoState.generalData.totalTime = parseFloat(
      this.totalTime.toFixed(4)
    );
    scrollyVideoState.usingWebCodecs = this.usingWebCodecs;
    scrollyVideoState.framesData.currentFrame = this.currentFrame;
    scrollyVideoState.framesData.totalFrames = this.frames?.length || 0;
  }
}
export default ScrollyVideo;
