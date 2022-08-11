<script>
  export let step;
  export let index;

  import { marked } from 'marked';
</script>

{#if step.foreground === '' || !step.foreground}
  <!-- Empty foreground -->
  <div class="empty-step-foreground step-{index + 1}"></div>
{:else if typeof step.foreground === 'string'}
  <section class="body-text" step="{index + 1}">
    <div class="embedded-foreground step-{index + 1}">
      {@html marked.parse(step.foreground)}
    </div>
  </section>
{:else}
  <div class="embedded-foreground step-{index + 1}">
    <svelte:component
      this="{step.foreground}"
      {...step.foregroundProps || {}}
    />
  </div>
{/if}

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
  div.embedded-foreground :global(p:last-child) {
    margin-bottom: 0;
  }
</style>
