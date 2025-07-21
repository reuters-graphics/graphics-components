<script lang="ts">
  import Block from '../Block/Block.svelte';
  import { fade } from 'svelte/transition';
  import { getContext } from 'svelte';
  import { Markdown } from '@reuters-graphics/svelte-markdown';

  // Types
  import type { Component, Snippet } from 'svelte';
  import type { ScrollyVideoState } from './ts/state.svelte';
  import type {
    ContainerWidth,
    ScrollyVideoForegroundPosition,
  } from '../@types/global';

  interface ForegroundProps {
    id?: string;
    class?: string;
    startTime?: number;
    endTime?: number;
    children?: Snippet;
    backgroundColour?: string;
    width?: ContainerWidth;
    position?: ScrollyVideoForegroundPosition | string;
    foreground?: string | Component;
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
    foreground,
  }: ForegroundProps = $props();

  let componentState: ScrollyVideoState = getContext('scrollyVideoState');
</script>

<Block class={`scrolly-video-foreground ${cls}`} {id}>
  {#if componentState.generalData.currentTime >= startTime && componentState.generalData.currentTime <= endTime}
    <div
      class="scrolly-foreground"
      in:fade={{ delay: 100, duration: 200 }}
      out:fade={{ delay: 0, duration: 100 }}
    >
      <div class="scrolly-video-foreground-item">
        {#if children}
          {@render children()}
        {/if}
      </div>
      {#if foreground}
        {#if typeof foreground === 'string'}
          <Block
            class="scrolly-video-foreground-text {position.split(' ')[1]}"
            {width}
          >
            <div
              style="background-color: {backgroundColour};"
              class="foreground-text {position.split(' ')[0]}"
            >
              <Markdown source={foreground} />
            </div>
          </Block>
        {:else}
          {foreground}
        {/if}
      {/if}
    </div>
  {/if}
</Block>

<style lang="scss">
  @use './../../scss/mixins' as mixins;

  .scrolly-foreground {
    width: 100%;
    height: 100%;
  }

  :global(.scrolly-video-foreground) {
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

  .scrolly-video-foreground-item {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :global {
    .scrolly-video-foreground-text {
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
