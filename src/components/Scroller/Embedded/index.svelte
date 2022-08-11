<script>
  export let steps;
  // fb (foreground then background) or bf (background then foreground)
  export let embeddedLayout = 'fb';
  export let backgroundSize;

  import Background from './Background.svelte';
  import Foreground from './Foreground.svelte';
</script>

{#each steps as step, index}
  <!-- Background first -->
  {#if embeddedLayout === 'bf'}
    <Background {step} {index} {backgroundSize} />
    <Foreground {step} {index} />
  <!-- Foreground first, default -->
  {:else}
    <Foreground {step} {index} />
    <Background {step} {index} {backgroundSize} />
  {/if}
{/each}