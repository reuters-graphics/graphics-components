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
{:else if typeof step.foreground === 'string'}
  <Block cls="body-text step-{index + 1}">
    <div class="embedded-foreground step-{index + 1}">
      {@html marked.parse(step.foreground)}
    </div>
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
  @import "./../../../scss/mixins";
  div.embedded-foreground {
    :global {
      @include body-text;
    }
    :global(p:last-child) {
      margin-bottom: 0;
    }
  }
</style>
