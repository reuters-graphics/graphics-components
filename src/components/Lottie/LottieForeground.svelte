<script lang="ts">
  import Block from '../Block/Block.svelte';
  import { fade } from 'svelte/transition';
  import { getContext, onDestroy } from 'svelte';
  import { Markdown } from '@reuters-graphics/svelte-markdown';

  // Types
  import type { Snippet } from 'svelte';
  import type { LottieState } from './ts/lottieState.svelte';
  import type {
    ContainerWidth,
    LottieForegroundPosition,
  } from '../@types/global';

  interface ForegroundProps {
    id?: string;
    class?: string;
    startFrame?: number;
    endFrame?: number;
    children?: Snippet;
    backgroundColour?: string;
    width?: ContainerWidth;
    position?: LottieForegroundPosition | string;
    text?: string;
  }

  let {
    id,
    class: cls,
    startFrame = 0,
    endFrame = 10,
    children,
    backgroundColour = '#000',
    width = 'normal',
    position = 'center center',
    text,
  }: ForegroundProps = $props();

  let componentState: LottieState | null = $state(getContext('lottieState'));

  onDestroy(() => {
    componentState = null;
  });
</script>

<div class="lottie-foreground-container {cls}" {id}>
  {#if componentState?.currentFrame && componentState.currentFrame >= startFrame && componentState.currentFrame <= endFrame}
    <div
      class="lottie-foreground"
      in:fade={{ delay: 100, duration: 200 }}
      out:fade={{ delay: 0, duration: 100 }}
    >
      <!-- Text blurb foreground -->
      {#if text}
        <Block class="lottie-foreground-block {position.split(' ')[1]}" {width}>
          <div
            style="background-color: {backgroundColour};"
            class="foreground-text {position.split(' ')[0]}"
          >
            <Markdown source={text} />
          </div>
        </Block>
        <!-- Render children snippet -->
      {:else if children}
        {@render children()}
      {/if}
    </div>
  {/if}
</div>

<style lang="scss">
  @use '../../scss/mixins' as mixins;

  .lottie-foreground-container {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;

    .lottie-foreground {
      width: 100%;
      height: 100%;
    }
  }

  :global {
    .lottie-foreground-block {
      position: absolute;
      width: 100%;
      max-width: calc(mixins.$column-width-normal * 0.9);
      height: 100%;

      &.center {
        left: 50%;
        transform: translateX(-50%);
      }

      &.left {
        left: 0;
      }

      &.right {
        right: 0;
      }

      @media (max-width: 1200px) {
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .foreground-text {
      position: absolute;
      left: 50%;
      width: 100%;
      border-radius: 0.25rem;
      @include mixins.fpy-5;
      @include mixins.fpx-4;
      @include mixins.fm-0;

      * {
        margin: 0;
        padding: 0;
      }

      &.center {
        top: 50%;
        transform: translate(-50%, -50%);
      }

      &.top {
        top: 0;
        transform: translate(-50%, 50%);
      }

      &.bottom {
        top: 100%;
        transform: translate(-50%, -150%);
      }
    }
  }
</style>
