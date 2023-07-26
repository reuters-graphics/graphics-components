<script lang="ts">
  import type { ScrollerStep } from '../@types/global';

  export let steps: ScrollerStep[] = [];

  import { marked } from 'marked';
</script>

{#each steps as step, i}
  <div class="step-foreground-container step-{i + 1}">
    {#if step.foreground === '' || !step.foreground}
      <!-- Empty foreground -->
      <div class="empty-step-foreground"></div>
      {#if typeof step.altText === 'string'}
        <div class="background-alt-text visually-hidden">
          {@html marked.parse(step.altText)}
        </div>
      {/if}
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
    height: 100vh;
    width: initial;
    max-width: initial;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rem;
    .step-foreground {
      max-width: 550px;
      width: 100%;
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

  .visually-hidden {
    @include visually-hidden;
  }
</style>
