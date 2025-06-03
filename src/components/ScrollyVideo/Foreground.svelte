<script lang="ts">
  import type { Snippet } from 'svelte';
  import Block from '../Block/Block.svelte';
  import { fade } from 'svelte/transition';
  import { getContext } from 'svelte';
  import type { ScrollyVideoState } from './js/state.svelte';

  interface ForegroundProps {
    id?: string;
    class?: string;
    startTime?: number;
    endTime?: number;
    children?: Snippet;
  }

  let {
    id = '',
    class: cls = '',
    startTime = 0,
    endTime = 1,
    children,
  }: ForegroundProps = $props();

  let componentState: ScrollyVideoState = getContext('scrollyVideoState');
</script>

<Block width="fluid">
  {#if componentState.generalData.currentTime >= startTime && componentState.generalData.currentTime <= endTime}
    <div
      {id}
      class={`scrolly-video-foreground ${cls}`}
      in:fade={{ delay: 100, duration: 200 }}
      out:fade={{ delay: 0, duration: 100 }}
    >
      {@render children?.()}
    </div>
  {/if}
</Block>

<style lang="scss">
  .scrolly-video-foreground {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
</style>
