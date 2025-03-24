<script lang="ts">
  import type { ContainerWidth, ScrollerStep } from '../../@types/global';

  type EmbeddedLayout = 'fb' | 'bf';

  import Background from './Background.svelte';
  import Foreground from './Foreground.svelte';
  interface Props {
    steps?: ScrollerStep[];
    embeddedLayout?: EmbeddedLayout;
    backgroundWidth?: ContainerWidth;
  }

  let {
    steps = [],
    embeddedLayout = 'fb',
    backgroundWidth = 'fluid',
  }: Props = $props();
</script>

{#each steps as step, index}
  <!-- Background first -->
  {#if embeddedLayout === 'bf'}
    <Background {step} {index} {backgroundWidth} />
    <Foreground {step} {index} />
    <!-- Foreground first, default -->
  {:else}
    <Foreground {step} {index} />
    <Background {step} {index} {backgroundWidth} />
  {/if}
{/each}
