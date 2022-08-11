<script>
  export let steps = [];
  import { marked } from 'marked';
</script>

{#each steps as step, i}
  <section class="step-foreground-container step-{i + 1}">
    {#if step.foreground === '' || !step.foreground}
      <!-- Empty foreground -->
      <div class="empty-step-foreground"></div>
    {:else}
      <div class="step-foreground">
        {#if typeof step.foreground === 'string'}
          {@html marked.parse(step.foreground)}
        {:else}
          <svelte:component
            this="{step.foreground}"
            {...step.foregroundProps || {}}
          />
        {/if}
      </div>
    {/if}
  </section>
{/each}

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
  section {
    height: 100vh;
    width: initial;
    max-width: initial;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rem;
  }
  section .step-foreground {
    max-width: 550px;
    width: 100%;
    padding: 1.2rem 30px;
    background: rgba(255, 255, 255, 0.8);
  }
  section .step-foreground :global(p:last-child) {
    margin-bottom: 0;
  }
</style>
