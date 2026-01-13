<script lang="ts">
  // Libraries & utils
  import { onDestroy, onMount, setContext } from 'svelte';
  import { DotLottie } from '@lottiefiles/dotlottie-web';
  import { createLottieState } from './ts/lottieState.svelte';
  import { isEqual } from 'es-toolkit';
  import {
    syncLottieState,
    getMarkerRange,
    calculateTargetFrame,
    isReverseMode,
    createRenderConfig,
    isNullish,
    isContainerWidth,
  } from './ts/utils';
  import { Tween } from 'svelte/motion';

  // Components
  import Debug from './Debug.svelte';

  // Types
  import type { Props } from './ts/types';

  let canvas: HTMLCanvasElement;
  let canvasWidth: number = $state(1);
  let canvasHeight: number = $state(1);
  let prevSrc: undefined | string = void 0;
  let prevData: undefined | unknown = void 0;
  let progressTween = new Tween(0, { duration: 100 });
  let start: number = $state(0);
  let end: number = $state(0);

  let {
    autoplay = false,
    loop = false,
    mode = 'forward',
    src,
    speed = 1,
    data = undefined,
    backgroundColor = '#ffffff',
    segment,
    renderConfig,
    dotLottieRefCallback = () => {},
    useFrameInterpolation = true,
    themeId = '',
    themeData = '',
    playOnHover = false,
    marker,
    layout = { fit: 'contain', align: [0.5, 0.5] },
    animationId = '',
    lottiePlayer = $bindable(undefined),
    width = 'fluid',
    height = 'auto',
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
    if (lottiePlayer) {
      lottiePlayer.setLayout(layout);

      lottieState.allMarkers = lottiePlayer.markers().map((x) => x.name);

      if (lottiePlayer.manifest) {
        lottieState.allThemes =
          lottiePlayer?.manifest.themes ?
            lottiePlayer.manifest.themes.map((t) => t.id)
          : [];
      }

      if (isNullish(marker)) {
        start = segment ? segment[0] : 0;
        end = segment ? segment[1] : lottiePlayer.totalFrames - 1;
      }

      // set to frame 1 to trigger initial render
      // helpful especially when themeId is set
      lottiePlayer.setFrame(1);

      onLoad(); // call user-defined onLoad function
    }
  }

  function onCompleteEvent() {
    onComplete();
  }

  function onRenderEvent() {
    if (lottiePlayer && lottieState) {
      syncLottieState(lottiePlayer, lottieState);
      progress = (lottiePlayer.currentFrame + 1) / lottiePlayer.totalFrames;
      lottieState.progress = progress;
      onRender();
    }
  }

  function handleMouseEnter() {
    if (playOnHover && lottiePlayer?.isLoaded) {
      lottiePlayer.play();
    }
  }

  function handleMouseLeave() {
    if (playOnHover && lottiePlayer?.isLoaded) {
      lottiePlayer.pause();
    }
  }

  function handleWindowResize() {
    let resizing = false;
    let timer = undefined;

    if (!resizing && lottiePlayer?.isLoaded && lottiePlayer.isPlaying) {
      lottiePlayer?.pause();
      resizing = true;
    }

    clearTimeout(timer);
    timer = setTimeout(() => {
      resizing = false;
      if (lottiePlayer?.isLoaded && lottiePlayer.isPaused) {
        lottiePlayer?.play();
      }
    }, 1000);
  }

  onMount(() => {
    const shouldAutoplay = autoplay && !playOnHover;

    progressTween = new Tween(0, { duration: tweenDuration, easing: easing });

    const _renderConfig = createRenderConfig();

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

    lottiePlayer.addEventListener('load', onLoadEvent);
    lottiePlayer.addEventListener('frame', onRenderEvent);
    lottiePlayer.addEventListener('complete', onCompleteEvent);
    window.addEventListener('resize', handleWindowResize);

    if (dotLottieRefCallback) {
      dotLottieRefCallback(lottiePlayer);
    }

    return () => {
      if (lottiePlayer) {
        lottiePlayer.removeEventListener('render', onRender);
        lottiePlayer.removeEventListener('load', onLoad);
        lottiePlayer.destroy();
      }
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  // Handles progress change
  $effect(() => {
    if (lottieState.isLoaded && lottieState.progress !== progress) {
      autoplay = false;
      lottiePlayer?.pause();
      loop = false;

      if (progress >= 0 && progress <= 1) {
        if (lottieState.isFrozen) {
          lottiePlayer?.unfreeze();
          lottieState.isFrozen = false;
        }
        const targetFrame = calculateTargetFrame(progress, mode, start, end);
        progressTween.target = targetFrame;
        // lottiePlayer.setFrame(targetFrame);
      } else if ((progress < 0 || progress > 1) && !lottieState.isFrozen) {
        if (isReverseMode(mode)) {
          progressTween.target = progress < 0 ? end : start;
        } else {
          progressTween.target = progress < 0 ? start : end;
        }
        lottiePlayer?.freeze();
        lottieState.isFrozen = true;
      }
    }
  });

  // Tweens to progress value
  $effect(() => {
    if (progressTween.current >= 0) {
      lottiePlayer?.setFrame(progressTween.current);
    }
  });

  // Handles layout change
  $effect(() => {
    if (
      typeof layout === 'object' &&
      lottiePlayer?.isLoaded &&
      !isEqual(layout, lottiePlayer.layout)
    ) {
      lottiePlayer.setLayout(layout);
    }
  });

  // Handles marker change
  $effect(() => {
    if (lottieState.isLoaded && lottiePlayer?.marker !== marker) {
      if (typeof marker === 'string' && lottiePlayer) {
        lottiePlayer.setMarker(marker);
        [start, end] = getMarkerRange(lottiePlayer, marker);
        lottieState.marker = marker;
      } else if (isNullish(marker)) {
        lottiePlayer?.setMarker('');
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
      lottiePlayer?.speed !== speed
    ) {
      lottiePlayer?.setSpeed(speed);
    }
  });

  // Handles frame interpolation change
  $effect(() => {
    if (
      lottieState.isLoaded &&
      typeof useFrameInterpolation == 'boolean' &&
      lottiePlayer?.useFrameInterpolation !== useFrameInterpolation
    ) {
      lottiePlayer?.setUseFrameInterpolation(useFrameInterpolation);
    }
  });

  // Handles segment change
  $effect(() => {
    if (lottieState.isLoaded && !isEqual(lottiePlayer?.segment, segment)) {
      if (
        Array.isArray(segment) &&
        segment.length === 2 &&
        typeof segment[0] === 'number' &&
        typeof segment[1] === 'number'
      ) {
        let [start, end] = segment;
        lottiePlayer?.setSegment(start, end);
      } else if (segment === null || segment === undefined) {
        lottiePlayer?.setSegment(0, lottiePlayer?.totalFrames);
      }
    }
  });

  // Handles loop change
  $effect(() => {
    if (
      lottieState.isLoaded &&
      typeof loop == 'boolean' &&
      lottiePlayer?.loop !== loop
    ) {
      lottiePlayer?.setLoop(loop);
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
      lottiePlayer?.backgroundColor !== backgroundColor
    ) {
      lottiePlayer?.setBackgroundColor(backgroundColor || '');
    }
  });

  // Handles mode change
  $effect(() => {
    if (
      lottieState.isLoaded &&
      typeof mode == 'string' &&
      lottiePlayer?.mode !== mode
    ) {
      lottiePlayer?.setMode(mode);
    }
  });

  // Handles src change
  $effect(() => {
    if (lottieState && src !== prevSrc) {
      lottiePlayer?.load({
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
      lottiePlayer?.activeAnimationId !== animationId
    ) {
      lottiePlayer?.loadAnimation(animationId);
    }
  });

  // Handles themeId change
  $effect(() => {
    if (lottieState.isLoaded && lottiePlayer?.activeThemeId !== themeId) {
      lottiePlayer?.setTheme(themeId);
    }
  });

  // Handles themeData change
  $effect(() => {
    if (lottieState.isLoaded && lottiePlayer?.isLoaded) {
      lottiePlayer?.setThemeData(themeData);
    }
  });
</script>

<div
  class="lottie-block"
  class:debug-border={showDebugInfo}
  style="max-width: {isContainerWidth(width) ?
    `var(--${width}-column-width)`
  : width};"
>
  {#if showDebugInfo && lottiePlayer}
    <Debug componentState={lottieState} />
  {/if}

  <div class="lottie-container" style:height>
    <canvas
      bind:this={canvas}
      bind:clientWidth={canvasWidth}
      bind:clientHeight={canvasHeight}
      onmouseenter={handleMouseEnter}
      onmouseleave={handleMouseLeave}
    ></canvas>
  </div>

  {#if children}
    {@render children()}
  {/if}
</div>

<style lang="scss">
  :global(.lottie-block) {
    position: relative;
    height: 100%;
    width: 100%;
    margin: 0 auto;

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

  .debug-border {
    border: 1px dashed lightgray;
  }
</style>
