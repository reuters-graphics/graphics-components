/**
 * General video data for ScrollyVideo state.
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
 * Frame-level data for ScrollyVideo state.
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
 * State object for ScrollyVideo component.
 * @typedef {Object} ScrollyVideoState
 * @property {GeneralData} generalData - General video data.
 * @property {boolean} usingWebCodecs - Whether WebCodecs is used.
 * @property {FramesData} framesData - Frame-level data.
 * @property {boolean} isAutoPlaying - Whether video is autoplaying.
 * @property {number} autoplayProgress - Progress of autoplay (0-1).
 */
export type ScrollyVideoState = {
  generalData: GeneralData;
  usingWebCodecs: boolean;
  framesData: FramesData;
  isAutoPlaying: boolean;
  autoplayProgress: number;
};

/**
 * Creates a new ScrollyVideoState object with default values.
 * @returns {ScrollyVideoState} The initialized state object.
 */
export function createComponentState(): ScrollyVideoState {
  const scrollyVideoState = $state<ScrollyVideoState>({
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
    isAutoPlaying: false,
    autoplayProgress: 0,
  });

  return scrollyVideoState;
}
