<!-- @component `Scroller` [Read the docs.](https://reuters-graphics.github.io/graphics-components/?path=/docs/components-graphics-scroller--docs) -->
<script lang="ts">
  // @ts-ignore no types
  import ScrollerBase from './ScrollerBase/index.svelte';

  let index = 0;
  let offset = 0;
  let progress = 0;
</script>

<ScrollerBase top={0.2} bottom={0.8} bind:index bind:offset bind:progress>
  {#snippet backgroundSnippet()}
    <p>
      This is the background content. It will stay fixed in place while the
      foreground scrolls over the top.
    </p>

    <p>Index {index} is currently active.</p>
  {/snippet}

  {#snippet foregroundSnippet()}
    <section>This is the first section.</section>
    <section>This is the second section.</section>
    <section>This is the third section.</section>
  {/snippet}
</ScrollerBase>

<style>
  section {
    height: 80vh;
    outline: 2px solid pink;
  }
</style>
