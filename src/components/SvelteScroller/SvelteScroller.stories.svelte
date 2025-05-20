<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import SvelteScroller from './SvelteScroller.svelte';

  const { Story } = defineMeta({
    title: 'Components/Graphics/SvelteScroller',
    component: SvelteScroller,
  });
</script>

<script lang="ts">
  let myIndex = $state(0);
  let myProgress = $state(0);
</script>

<Story name="Demo">
  <SvelteScroller
    bind:index={myIndex}
    bind:progress={myProgress}
    query="div.step-foreground-container"
  >
    {#snippet backgroundSnippet()}
      <div class="custom-background">
        <p>
          This is the background content. It will stay fixed in place while the
          foreground scrolls over the top.
        </p>
      </div>
    {/snippet}
    {#snippet foregroundSnippet()}
      <div class="step-foreground-container flex items-center justify-center">
        <p>Index {myIndex}: This is the first section.</p>
      </div>
      <div class="step-foreground-container flex items-center justify-center">
        <p>Index {myIndex}: This is the second section.</p>
      </div>
      <div class="step-foreground-container flex items-center justify-center">
        <p>Index {myIndex}: This is the third section.</p>
      </div>
    {/snippet}
  </SvelteScroller>
</Story>

<style lang="scss">
  .custom-background {
    padding: 20px;
    border-radius: 5px;
    height: 100vh;
  }

  .step-foreground-container {
    height: 100vh;
    p {
      padding: 1em;
      background-color: rgba(162, 220, 231, 0.5);
    }
  }
</style>
