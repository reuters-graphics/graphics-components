type GeneralData = {
  src: string;
  videoPercentage: number;
  frameRate: number;
  currentTime: number;
  totalTime: number;
};

type FramesData = {
  codec: string;
  currentFrame: number;
  totalFrames: number;
};

type ScrollyVideoState = {
  generalData: GeneralData;
  usingWebCodecs: boolean;
  framesData: FramesData;
  isAutoPlaying: boolean;
  autoplayProgress: number;
};

export const scrollyVideoState = $state<ScrollyVideoState>({
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
