<script lang="ts">
  import type { ScrollerStep } from '../../@types/global';

  import Block from '../../Block/Block.svelte';
  import { Markdown } from '@reuters-graphics/svelte-markdown';

  interface Props {
    step: ScrollerStep;
    index: number;
  }

  let { step, index }: Props = $props();
</script>

{#if step.foreground === '' || !step.foreground}
  <!-- Empty foreground -->
  <div class="empty-step-foreground step-{index + 1}"></div>

  {#if typeof step.altText === 'string'}
    <div class="background-alt-text visually-hidden">
      <Markdown source={step.altText} />
    </div>
  {/if}
{:else if typeof step.foreground === 'string'}
  <Block class="body-text step-{index + 1}">
    <div class="embedded-foreground step-{index + 1}">
      <Markdown source={step.foreground} />
    </div>

    {#if typeof step.altText === 'string'}
      <div class="background-alt-text visually-hidden">
        <Markdown source={step.altText} />
      </div>
    {/if}
  </Block>
{:else}
  <div class="embedded-foreground step-{index + 1}">
    <step.foreground {...step.foregroundProps || {}}></step.foreground>
  </div>
{/if}

<style lang="scss">
  div.embedded-foreground {
    :global(p:last-child) {
      margin-block-end: 0;
    }
  }
</style>
