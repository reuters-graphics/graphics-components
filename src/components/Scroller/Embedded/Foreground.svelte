<script lang="ts">
  import type { ScrollerStep } from '../../@types/global';

  export let step: ScrollerStep;
  export let index: number;

  import { marked } from 'marked';
  import Block from '../../Block/Block.svelte';
</script>

{#if step.foreground === '' || !step.foreground}
  <!-- Empty foreground -->
  <div class="empty-step-foreground step-{index + 1}"></div>

  {#if typeof step.altText === 'string'}
    <div class="background-alt-text visually-hidden">
      {@html marked.parse(step.altText)}
    </div>
  {/if}
{:else if typeof step.foreground === 'string'}
  <Block class="body-text step-{index + 1}">
    <div class="embedded-foreground step-{index + 1}">
      {@html marked.parse(step.foreground)}
    </div>

    {#if typeof step.altText === 'string'}
      <div class="background-alt-text visually-hidden">
        {@html marked.parse(step.altText)}
      </div>
    {/if}
  </Block>
{:else}
  <div class="embedded-foreground step-{index + 1}">
    <svelte:component
      this="{step.foreground}"
      {...step.foregroundProps || {}}
    />
  </div>
{/if}

<style lang="scss">
  @import './../../../scss/mixins';
  div.embedded-foreground {
    :global {
      @include body-text;
    }
    :global(p:last-child) {
      margin-bottom: 0;
    }
  }

  .visually-hidden {
    @include visually-hidden;
  }
</style>
