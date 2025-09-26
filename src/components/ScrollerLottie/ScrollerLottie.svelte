<script lang="ts">
  import {
    type Config,
    type DotLottie as DotLottieType,
  } from '@lottiefiles/dotlottie-web';
  import { DotLottie } from '@lottiefiles/dotlottie-web';
  import Block from '../Block/Block.svelte';
  import type { ContainerWidth } from '../@types/global';
  import { createLottieState, type LottieState } from './ts/lottieState.svelte';
  import { onDestroy, onMount, setContext } from 'svelte';
  import { isEqual } from 'es-toolkit';
  import Debug from './Debug.svelte';
  import { map } from './ts/utils';
  import { Tween } from 'svelte/motion';
  import type { Snippet } from 'svelte';
  import WASM from './data/dotlottie-player.wasm?url';
  import DefaultLottie from './data/defaultLottie.lottie?url';

  type DotlottieProps = {
    autoplay?: Config['autoplay'];
    backgroundColor?: Config['backgroundColor'];
    data?: Config['data'];
    loop?: Config['loop'];
    mode?: Config['mode'];
    renderConfig?: Config['renderConfig'];
    segment?: Config['segment'];
    speed?: Config['speed'];
    src?: Config['src'];
    useFrameInterpolation?: Config['useFrameInterpolation'];
    marker?: Config['marker'] | null | undefined;
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

  type Props = DotlottieProps & {
    // Additional properties can be added here if needed
    lottiePlayer?: DotLottieType | undefined;
    showDebugInfo?: boolean;
    width?: ContainerWidth;
    height?: string;
    lottieState?: LottieState;
    progress?: number;
    tweenDuration?: number;
    easing?: (t: number) => number;
    /** Children render function */
    children?: Snippet;
  };

  let canvas: HTMLCanvasElement;
  let canvasWidth: number = $state(1);
  let canvasHeight: number = $state(1);
  let prevSrc = void 0;
  let prevData = void 0;
  let progressTween = new Tween(0, { duration: 100 });
  let start: number = $state(0);
  let end: number = $state(0);

  let {
    autoplay = false,
    loop = false,
    mode = 'forward',
    src = DefaultLottie,
    speed = 1,
    data = undefined,
    backgroundColor = '#ffffff',
    segment = undefined,
    renderConfig = undefined,
    dotLottieRefCallback = () => {},
    useFrameInterpolation = true,
    themeId = '',
    themeData = '',
    playOnHover = false,
    marker = '',
    layout = { fit: 'contain', align: [0.5, 0.5] },
    animationId = '',
    lottiePlayer = $bindable(undefined),
    width = 'widest',
    height = '100lvh',
    showDebugInfo = false,
    lottieState = createLottieState(),
    progress = $bindable(0),
    tweenDuration = 100,
    easing = (t: number) => t,
    onLoad = () => {},
    onRender = () => {},
    onComplete = () => {},
    children,
  }: Props = $props();

  // pass on component state to child components
  // this controls fade in and out of foregrounds
  setContext('lottieState', lottieState);

  function onLoadEvent() {
    if (showDebugInfo) {
      // set layout
      lottiePlayer.setLayout(layout);

      lottieState.allMarkers = lottiePlayer.markers().map((x) => x.name);

      if (lottiePlayer.manifest) {
        lottieState.allThemes =
          lottiePlayer?.manifest.themes ?
            lottiePlayer.manifest.themes.map((t) => t.id)
          : [];
      }

      if (marker == '' || marker == null || marker == undefined) {
        start = segment ? segment[0] : 0;
        end = segment ? segment[1] : lottiePlayer.totalFrames - 1;
      }
    }

    // set to frame 1 to trigger initial render
    // helpful especially when themeId is set
    lottiePlayer.setFrame(1);

    onLoad(); // call user-defined onLoad function
  }

  function onCompleteEvent() {
    onComplete();
  }

  function onRenderEvent() {
    const keys = [
      'currentFrame',
      'totalFrames',
      'duration',
      'loop',
      'speed',
      'loopCount',
      'mode',
      'isPaused',
      'isPlaying',
      'isStopped',
      'isLoaded',
      'isFrozen',
      'segment',
      'autoplay',
      'layout',
      'activeThemeId',
      'marker',
    ];

    if (lottiePlayer && lottieState) {
      keys.forEach((key) => {
        lottieState[key] = lottiePlayer[key];
      });
    }

    progress = (lottiePlayer.currentFrame + 1) / lottiePlayer.totalFrames;

    lottieState.progress = progress;

    onRender(); // call user-defined onRender function
  }

  const hoverHandler = (event) => {
    if (!playOnHover || !lottiePlayer.isLoaded) return;
    if (event.type === 'mouseenter') {
      lottiePlayer.play();
    } else if (event.type === 'mouseleave') {
      lottiePlayer.pause();
    }
  };

  onMount(() => {
    const shouldAutoplay = autoplay && !playOnHover;

    progressTween = new Tween(0, { duration: tweenDuration, easing: easing });

    const _renderConfig = {
      autoResize: true,
      devicePixelRatio:
        window.devicePixelRatio > 1 ? window.devicePixelRatio * 0.75 : 1,
      freezeOnOffscreen: true,
    };

    lottiePlayer = new DotLottie({
      canvas,
      src,
      autoplay: shouldAutoplay,
      loop,
      speed,
      data,
      renderConfig: _renderConfig,
      segment,
      useFrameInterpolation,
      backgroundColor,
      mode,
      animationId,
      themeId,
    });

    DotLottie.setWasmUrl(WASM);

    lottiePlayer.addEventListener('load', onLoadEvent);
    lottiePlayer.addEventListener('frame', onRenderEvent);
    lottiePlayer.addEventListener('complete', onCompleteEvent);

    if (dotLottieRefCallback) {
      dotLottieRefCallback(lottiePlayer);
    }

    canvas.addEventListener('mouseenter', hoverHandler);
    canvas.addEventListener('mouseleave', hoverHandler);

    return () => {
      canvas.removeEventListener('mouseenter', hoverHandler);
      canvas.removeEventListener('mouseleave', hoverHandler);
      lottiePlayer.destroy();
    };
  });

  onDestroy(() => {
    if (lottiePlayer) {
      lottiePlayer.removeEventListener('render', onRender);
      lottiePlayer.removeEventListener('load', onLoad);
      lottiePlayer.destroy();
    }
  });

  // Handles progress change
  $effect(() => {
    if (lottieState.isLoaded && lottieState.progress !== progress) {
      autoplay = false;
      lottiePlayer.pause();
      loop = false;

      if (progress >= 0 && progress <= 1) {
        if (lottieState.isFrozen) {
          lottiePlayer.unfreeze();
          lottieState.isFrozen = false;
        }
        const targetFrame = map(
          mode == 'reverse' || mode == 'reverse-bounce' ?
            1 - progress
          : progress,
          0,
          1,
          start,
          end
        );
        progressTween.target = targetFrame;
        // lottiePlayer.setFrame(targetFrame);
      } else if ((progress < 0 || progress > 1) && !lottieState.isFrozen) {
        // lottiePlayer.setFrame(progress < 0 ? start : end);
        if (mode == 'reverse' || mode == 'reverse-bounce') {
          progressTween.target = progress < 0 ? end : start;
        } else {
          progressTween.target = progress < 0 ? start : end;
        }
        lottiePlayer.freeze();
        lottieState.isFrozen = true;
      }
    }
  });

  // Tweens to progress value
  $effect(() => {
    if (progressTween.current >= 0) {
      lottiePlayer.setFrame(progressTween.current);
    }
  });

  // Handles layout change
  $effect(() => {
    if (
      typeof layout === 'object' &&
      lottiePlayer.isLoaded &&
      !isEqual(layout, lottiePlayer.layout)
    ) {
      lottiePlayer.setLayout(layout);
    }
  });

  // Handles marker change
  $effect(() => {
    if (lottieState.isLoaded && lottiePlayer.marker !== marker) {
      if (typeof marker === 'string') {
        lottiePlayer.setMarker(marker);

        start =
          lottiePlayer.markers().find((m) => m.name === marker)?.time ?? 0;
        end =
          start +
          (lottiePlayer.markers().find((m) => m.name === marker)?.duration ??
            0);

        // change lottieState marker because
        // onRender fires before this
        if (lottieState) {
          lottieState.marker = marker;
        }
      } else if (marker === null || marker === undefined) {
        lottiePlayer.setMarker('');
      } else {
        console.warn('Invalid marker type:', marker);
      }
    }
  });

  // Handles speed change
  $effect(() => {
    if (
      lottieState.isLoaded &&
      typeof speed == 'number' &&
      lottiePlayer.speed !== speed
    ) {
      lottiePlayer.setSpeed(speed);
    }
  });

  // Handles frame interpolation change
  $effect(() => {
    if (
      lottieState.isLoaded &&
      typeof useFrameInterpolation == 'boolean' &&
      lottiePlayer.useFrameInterpolation !== useFrameInterpolation
    ) {
      lottiePlayer.setUseFrameInterpolation(useFrameInterpolation);
    }
  });

  // Handles segment change
  $effect(() => {
    if (lottieState.isLoaded && !isEqual(lottiePlayer.segment, segment)) {
      if (
        Array.isArray(segment) &&
        segment.length === 2 &&
        typeof segment[0] === 'number' &&
        typeof segment[1] === 'number'
      ) {
        let [start, end] = segment;
        lottiePlayer.setSegment(start, end);
      } else if (segment === null || segment === undefined) {
        lottiePlayer.setSegment(0, lottiePlayer.totalFrames);
      }
    }
  });

  // Handles loop change
  $effect(() => {
    if (
      lottieState.isLoaded &&
      typeof loop == 'boolean' &&
      lottiePlayer.loop !== loop
    ) {
      lottiePlayer.setLoop(loop);
    }
  });

  // Handles autoplay change
  $effect(() => {
    if (
      lottieState.isLoaded &&
      typeof autoplay == 'boolean' &&
      lottieState.autoplay !== autoplay
    ) {
      lottieState.autoplay = !autoplay;
    }
  });

  // Handles background color change
  $effect(() => {
    if (
      lottieState.isLoaded &&
      lottiePlayer.backgroundColor !== backgroundColor
    ) {
      lottiePlayer.setBackgroundColor(backgroundColor || '');
    }
  });

  // Handles mode change
  $effect(() => {
    if (
      lottieState.isLoaded &&
      typeof mode == 'string' &&
      lottiePlayer.mode !== mode
    ) {
      lottiePlayer.setMode(mode);
    }
  });

  // Handles src change
  $effect(() => {
    if (lottieState && src !== prevSrc) {
      lottiePlayer.load({
        src,
        autoplay,
        loop,
        speed,
        data,
        renderConfig,
        segment,
        useFrameInterpolation,
        backgroundColor,
        mode,
        marker,
        layout,
        animationId,
        themeId,
      });

      prevSrc = src;
    }
  });

  // Generate new instance if data changes
  $effect(() => {
    if (lottiePlayer && data !== prevData) {
      lottiePlayer.load({
        src,
        autoplay,
        loop,
        speed,
        data,
        renderConfig,
        segment,
        useFrameInterpolation,
        backgroundColor,
        mode,
        marker,
        layout,
        animationId,
        themeId,
      });
      prevData = data;
    }
  });

  // Handles animationId change
  $effect(() => {
    if (
      lottieState.isLoaded &&
      lottiePlayer.activeAnimationId !== animationId
    ) {
      lottiePlayer.loadAnimation(animationId);
    }
  });

  // Handles themeId change
  $effect(() => {
    if (lottieState.isLoaded && lottiePlayer.activeThemeId !== themeId) {
      lottiePlayer.setTheme(themeId);
    }
  });

  // Handles themeData change
  $effect(() => {
    if (lottieState.isLoaded && lottiePlayer.isLoaded) {
      lottiePlayer.setThemeData(themeData);
    }
  });
</script>

<Block {width} class="lottie-block">
  {#if showDebugInfo && lottiePlayer}
    <Debug componentState={lottieState} />
  {/if}

  <div class="lottie-container" style:height>
    <canvas
      bind:this={canvas}
      bind:clientWidth={canvasWidth}
      bind:clientHeight={canvasHeight}
    ></canvas>
  </div>

  {#if children}
    {@render children?.()}
  {/if}
</Block>

<style lang="scss">
  :global(.lottie-block) {
    position: relative;
    height: 100%;

    .lottie-container {
      width: 100%;
      height: 100%;
    }
    canvas {
      width: 100%;
      height: 100%;
      display: block;
    }
  }

  .debug-info {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 3;
    margin: 0;
    min-width: 25vmin;

    .title {
      width: 100%;
      padding: 4px 0 0 8px;
      margin: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    p {
      color: white;
      margin: 0;
      padding: 4px 8px 8px 8px;
    }
  }
</style>
