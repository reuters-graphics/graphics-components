<script lang="ts">
  import type { ScrollerStep } from '../@types/global';

  export let steps: ScrollerStep[] = [];

  import Markdown from '../Markdown/Markdown.svelte';
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
          <Markdown source="{step.altText}" />
        </div>
      {/if}
    {:else}
      <div class="step-foreground w-full">
        {#if typeof step.foreground === 'string'}
          <Markdown source="{step.foreground}" />
        {:else}
          <svelte:component
            this="{step.foreground}"
            {...step.foregroundProps || {}}
          />
        {/if}
      </div>
      {#if typeof step.altText === 'string'}
        <div class="background-alt-text visually-hidden">
          <Markdown source="{step.altText}" />
        </div>
      {/if}
    {/if}
  </div>
{/each}

<style lang="scss">
  @use './../../scss/mixins' as mixins;

  div.step-foreground-container {
    width: initial;
    max-width: initial;
    .step-foreground {
      max-width: calc(mixins.$column-width-normal * 0.9);
      border-radius: 0.25rem;
      @include mixins.fpy-5;
      @include mixins.fpx-4;
      background: rgba(255, 255, 255, 0.9);

      :global(p:last-child) {
        margin-bottom: 0;
      }
      :global(*:first-child) {
        margin-top: 0;
      }
    }
  }
</style>
