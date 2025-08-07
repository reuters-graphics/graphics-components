/**
 * General video data for ScrollerVideo state.
 * @typedef {Object} GeneralData
 * @property {string} src - Video source URL.
 * @property {number} videoPercentage - Current video percentage (0-1).
 * @property {number} frameRate - Video frame rate.
 * @property {number} currentTime - Current video time in seconds.
 * @property {number} totalTime - Total video duration in seconds.
 */
type GeneralData = {
  src: string;
  videoPercentage: number;
  frameRate: number;
  currentTime: number;
  totalTime: number;
};

/**
 * Frame-level data for ScrollerVideo state.
 * @typedef {Object} FramesData
 * @property {string} codec - Video codec string.
 * @property {number} currentFrame - Current frame index.
 * @property {number} totalFrames - Total number of frames.
 */
type FramesData = {
  codec: string;
  currentFrame: number;
  totalFrames: number;
};

/**
 * State object for ScrollerVideo component.
 * @typedef {Object} ScrollerVideoState
 * @property {GeneralData} generalData - General video data.
 * @property {boolean} usingWebCodecs - Whether WebCodecs is used.
 * @property {FramesData} framesData - Frame-level data.
 * @property {boolean} isAutoPlaying - Whether video is autoplaying.
 * @property {number} autoplayProgress - Progress of autoplay (0-1).
 */
export type ScrollerVideoState = {
  generalData: GeneralData;
  usingWebCodecs: boolean;
  framesData: FramesData;
  willAutoPlay: boolean;
  isAutoPlaying: boolean;
  autoplayProgress: number;
};

/**
 * Creates a new ScrollerVideoState object with default values.
 * @returns {ScrollerVideoState} The initialized state object.
 */
export function createComponentState(): ScrollerVideoState {
  const scrollerVideoState = $state<ScrollerVideoState>({
    generalData: {
      src: '',
      videoPercentage: 0,
      frameRate: 0,
      currentTime: 0,
      totalTime: 0,
    },
    usingWebCodecs: false,
    framesData: {
      codec: '',
      currentFrame: 0,
      totalFrames: 0,
    },
    willAutoPlay: false,
    isAutoPlaying: false,
    autoplayProgress: 0,
  });

  return scrollerVideoState;
}
