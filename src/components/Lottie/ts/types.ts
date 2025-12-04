// Types
import type { Snippet } from 'svelte';
import {
  type Config,
  type DotLottie as DotLottieType,
} from '@lottiefiles/dotlottie-web';
import { type LottieState } from './lottieState.svelte';

type DotlottieProps = {
  autoplay?: Config['autoplay'];
  backgroundColor?: Config['backgroundColor'];
  data?: Config['data'];
  loop?: Config['loop'];
  mode?: Config['mode'];
  renderConfig?: Config['renderConfig'];
  segment?: Config['segment'];
  speed?: Config['speed'];
  src: Config['src'];
  useFrameInterpolation?: Config['useFrameInterpolation'];
  marker?: Config['marker'] | undefined;
  layout?: Config['layout'];
  animationId?: Config['animationId'];
  themeId?: Config['themeId'];
  playOnHover?: boolean;
  themeData?: string;
  dotLottieRefCallback?: (dotLottie: DotLottieType) => void;
  onLoad?: () => void;
  onRender?: () => void;
  onComplete?: () => void;
};

export type Props = DotlottieProps & {
  // Additional properties can be added here if needed
  lottiePlayer?: DotLottieType | undefined;
  showDebugInfo?: boolean;
  height?: string;
  lottieState?: LottieState;
  progress?: number;
  tweenDuration?: number;
  easing?: (t: number) => number;
  /** Children render function */
  children?: Snippet;
};
