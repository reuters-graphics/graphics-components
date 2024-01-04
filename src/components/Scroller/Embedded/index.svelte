<script lang="ts">
  import type { ContainerWidth, ScrollerStep } from '../../@types/global';

  export let steps: ScrollerStep[] = [];

  type EmbeddedLayout = 'fb' | 'bf';
  export let embeddedLayout: EmbeddedLayout = 'fb';

  export let backgroundWidth: ContainerWidth = 'fluid';

  import Background from './Background.svelte';
  import Foreground from './Foreground.svelte';
</script>

{#each steps as step, index}
  <!-- Background first -->
  {#if embeddedLayout === 'bf'}
    <Background
      step="{step}"
      index="{index}"
      backgroundWidth="{backgroundWidth}"
    />
    <Foreground step="{step}" index="{index}" />
    <!-- Foreground first, default -->
  {:else}
    <Foreground step="{step}" index="{index}" />
    <Background
      step="{step}"
      index="{index}"
      backgroundWidth="{backgroundWidth}"
    />
  {/if}
{/each}
