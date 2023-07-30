<script lang="ts">
  import type { ScrollerStep } from '../@types/global';

  export let steps: ScrollerStep[] = [];

  import { marked } from 'marked';
</script>

{#each steps as step, i}
  <div
    class="step-foreground-container step-{i +
      1} mb-20 h-screen flex items-center justify-center"
  >
    {#if step.foreground === '' || !step.foreground}
      <!-- Empty foreground -->
      <div class="empty-step-foreground"></div>
      {#if typeof step.altText === 'string'}
        <div class="background-alt-text visually-hidden">
          {@html marked.parse(step.altText)}
        </div>
      {/if}
    {:else}
      <div class="step-foreground w-full">
        {#if typeof step.foreground === 'string'}
          {@html marked.parse(step.foreground)}
        {:else}
          <svelte:component
            this="{step.foreground}"
            {...step.foregroundProps || {}}
          />
        {/if}
      </div>
      {#if typeof step.altText === 'string'}
        <div class="background-alt-text visually-hidden">
          {@html marked.parse(step.altText)}
        </div>
      {/if}
    {/if}
  </div>
{/each}

<style lang="scss">
  @import './../../scss/mixins';

  div.step-foreground-container {
    width: initial;
    max-width: initial;
    .step-foreground {
      max-width: 550px;
      padding: 1.2rem 30px;
      background: rgba(255, 255, 255, 0.8);
      :global(p:last-child) {
        margin-bottom: 0;
      }
      :global(*:first-child) {
        margin-top: 0;
      }
    }
  }
</style>
