import type { Layout } from '@lottiefiles/dotlottie-web';

export interface LottieState {
  [key: string]:
    | number
    | boolean
    | string
    | null
    | Array<string>
    | Array<number>
    | [number, number]
    | Layout
    | undefined;
  progress: number;
  currentFrame: number;
  totalFrames: number;
  duration: number;
  loop: boolean;
  speed: number;
  loopCount: number;
  mode: string;
  isPaused: boolean;
  isPlaying: boolean;
  isStopped: boolean;
  isLoaded: boolean;
  isFrozen: boolean;
  segment: null | [number, number];
  autoplay: boolean;
  layout: null | Layout;
  allMarkers: Array<string>;
  marker: undefined | string;
  allThemes: Array<string>;
  activeThemeId: null | string;
}

export function createLottieState(): LottieState {
  const lottieState = $state<LottieState>({
    progress: 0,
    currentFrame: 0,
    totalFrames: 0,
    duration: 0,
    loop: false,
    speed: 1,
    loopCount: 0,
    mode: '',
    isPaused: false,
    isPlaying: false,
    isStopped: false,
    isLoaded: false,
    isFrozen: false,
    segment: null,
    autoplay: false,
    layout: null,
    allMarkers: [],
    marker: undefined,
    allThemes: [],
    activeThemeId: null,
  });

  return lottieState;
}
