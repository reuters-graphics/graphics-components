<script lang="ts">
  import Block from '../Block/Block.svelte';
  import { fade } from 'svelte/transition';
  import { getContext } from 'svelte';
  import { Markdown } from '@reuters-graphics/svelte-markdown';

  // Types
  import type { Component, Snippet } from 'svelte';
  import type { ScrollerVideoState } from './ts/state.svelte';
  import type {
    ContainerWidth,
    ScrollerVideoForegroundPosition,
  } from '../@types/global';

  interface ForegroundProps {
    id?: string;
    class?: string;
    startTime?: number;
    endTime?: number;
    children?: Snippet;
    backgroundColour?: string;
    width?: ContainerWidth;
    position?: ScrollerVideoForegroundPosition | string;
    text?: string;
    Foreground?: Component;
  }

  let {
    id = '',
    class: cls = '',
    startTime = 0,
    endTime = 1,
    children,
    backgroundColour = '#000',
    width = 'normal',
    position = 'center center',
    text,
    Foreground,
  }: ForegroundProps = $props();

  let componentState: ScrollerVideoState = getContext('scrollerVideoState');
</script>

<Block class={`scroller-video-foreground ${cls}`} {id}>
  {#if componentState.generalData.currentTime >= startTime && componentState.generalData.currentTime <= endTime}
    <div
      class="scroller-foreground"
      in:fade={{ delay: 100, duration: 200 }}
      out:fade={{ delay: 0, duration: 100 }}
    >
      <!-- Text blurb foreground -->
      {#if text}
        <Block
          class="scroller-video-foreground-text {position.split(' ')[1]}"
          {width}
        >
          <div
            style="background-color: {backgroundColour};"
            class="foreground-text {position.split(' ')[0]}"
          >
            <Markdown source={text} />
          </div>
        </Block>
        <!-- Render children snippet -->
      {:else if children}
        <div class="scroller-video-foreground-item">
          {@render children()}
        </div>
        <!-- Render Foreground component -->
      {:else if Foreground}
        <div class="scroller-video-foreground-item">
          <Block width="fluid">
            <Foreground />
          </Block>
        </div>
      {/if}
    </div>
  {/if}
</Block>

<style lang="scss">
  @use './../../scss/mixins' as mixins;

  .scroller-foreground {
    width: 100%;
    height: 100%;
  }

  :global(.scroller-video-foreground) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .scroller-video-foreground-item {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :global {
    .scroller-video-foreground-text {
      position: absolute;
      width: 100%;
      max-width: calc(mixins.$column-width-normal * 0.9);
      height: 100%;

      @media (max-width: 1200px) {
        left: 50%;
        transform: translateX(-50%);
      }

      &.left {
        left: 0;
      }
      &.right {
        right: 0;
      }
      &.center {
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .foreground-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 0.25rem;
      background-color: white;
      width: 100%;
      @include mixins.fpy-5;
      @include mixins.fpx-4;
      @include mixins.fm-0;

      :global(*) {
        margin: 0;
        padding: 0;
      }

      &.center {
        top: 50%;
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
